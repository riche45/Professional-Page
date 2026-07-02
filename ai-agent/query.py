"""
Explorador de RAG (Fase 1).

Hace una busqueda semantica contra pgvector: convierte tu pregunta en un vector
con el mismo modelo de embeddings y devuelve los chunks mas parecidos, con su
score de similitud (0 a 1) y de que archivo del knowledge base salieron.

Uso:
    cd ai-agent
    .venv\\Scripts\\activate
    python query.py "cuanto cobras por un agente de IA"
    # o sin argumentos, te lo pregunta:
    python query.py
"""

import os
import re
import sys

from dotenv import load_dotenv
from supabase import create_client
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import SupabaseVectorStore

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
EMBEDDING_MODEL = os.environ.get(
    "EMBEDDING_MODEL",
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2",
)
TABLE_NAME = "documents"
QUERY_NAME = "match_documents"

# Cache del store/cliente para no recargar el modelo en cada llamada.
_store: SupabaseVectorStore | None = None
_client = None


def get_client():
    global _client
    if _client is None:
        if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
            raise SystemExit(
                "Faltan SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY en el .env"
            )
        _client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)
    return _client


def get_store() -> SupabaseVectorStore:
    global _store
    if _store is None:
        embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)
        _store = SupabaseVectorStore(
            client=get_client(),
            embedding=embeddings,
            table_name=TABLE_NAME,
            query_name=QUERY_NAME,
        )
    return _store


def search(query: str, k: int = 4):
    """Busqueda semantica: lista de (Document, score) ordenada por relevancia."""
    return get_store().similarity_search_with_relevance_scores(query, k=k)


def keyword_search(query: str, k: int = 4):
    """Busqueda por palabra clave (ILIKE) sobre el contenido de los chunks.

    Complementa a la vectorial para nombres propios/terminos exactos (p.ej.
    'EXONIK'), que los embeddings no capturan bien. Devuelve [(content, metadata)].
    """
    # Palabras "significativas" (>=4 chars) para no buscar articulos/conectores.
    words = list(dict.fromkeys(re.findall(r"[A-Za-zÀ-ÿ0-9]{4,}", query)))
    if not words:
        return []
    # PostgREST usa '*' como comodin dentro de or_(...).
    ors = ",".join(f"content.ilike.*{w}*" for w in words)
    res = (
        get_client()
        .table(TABLE_NAME)
        .select("content, metadata")
        .or_(ors)
        .limit(k)
        .execute()
    )
    return [(row["content"], row.get("metadata") or {}) for row in (res.data or [])]


def hybrid_search(query: str, k: int = 4):
    """Combina busqueda vectorial + por keyword y deduplica.

    Devuelve una lista de dicts: {content, source, score, via}.
    """
    results = []
    seen = set()

    for doc, score in search(query, k=k):
        key = doc.page_content[:80]
        seen.add(key)
        results.append(
            {
                "content": doc.page_content,
                "source": os.path.basename(doc.metadata.get("source", "?")),
                "score": score,
                "via": "vector",
            }
        )

    for content, meta in keyword_search(query, k=k):
        key = content[:80]
        if key in seen:
            continue
        seen.add(key)
        results.append(
            {
                "content": content,
                "source": os.path.basename((meta or {}).get("source", "?")),
                "score": None,
                "via": "keyword",
            }
        )

    return results


def main() -> None:
    query = " ".join(sys.argv[1:]).strip()
    if not query:
        query = input("Pregunta: ").strip()
    if not query:
        return

    results = search(query, k=4)
    print(f"\nTop {len(results)} resultados para: {query!r}\n")
    for i, (doc, score) in enumerate(results, 1):
        source = os.path.basename(doc.metadata.get("source", "?"))
        preview = " ".join(doc.page_content.split())[:220]
        print(f"[{i}] score={score:.3f}  fuente={source}")
        print(f"    {preview}...\n")


if __name__ == "__main__":
    main()
