"""
Fase 1 - Pipeline de ingesta RAG.

Lee la base de conocimiento (knowledge_base/*.md), la trocea en chunks,
genera embeddings con un modelo open source de HuggingFace y los guarda
en Supabase (pgvector) para que el agente pueda hacer busqueda semantica.
"""

import os

from dotenv import load_dotenv
from supabase import create_client
from langchain_community.document_loaders import DirectoryLoader, TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import SupabaseVectorStore

load_dotenv()

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_SERVICE_ROLE_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY")
EMBEDDING_MODEL = os.environ.get(
    "EMBEDDING_MODEL",
    "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2",
)

KB_DIR = os.path.join(os.path.dirname(__file__), "knowledge_base")
TABLE_NAME = "documents"
QUERY_NAME = "match_documents"

CHUNK_SIZE = 800
CHUNK_OVERLAP = 120


def main() -> None:
    if not SUPABASE_URL or not SUPABASE_SERVICE_ROLE_KEY:
        raise SystemExit(
            "Faltan variables de entorno. Copia .env.example a .env y rellena "
            "SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY."
        )

    client = create_client(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    # 1) Cargar documentos markdown de la base de conocimiento
    loader = DirectoryLoader(
        KB_DIR,
        glob="**/*.md",
        loader_cls=TextLoader,
        loader_kwargs={"encoding": "utf-8"},
        show_progress=True,
    )
    docs = loader.load()
    print(f"[1/5] Cargados {len(docs)} documentos desde {KB_DIR}")

    # 2) Trocear en chunks (mantiene contexto con solapamiento)
    splitter = RecursiveCharacterTextSplitter(
        chunk_size=CHUNK_SIZE,
        chunk_overlap=CHUNK_OVERLAP,
    )
    chunks = splitter.split_documents(docs)
    print(f"[2/5] Generados {len(chunks)} chunks")

    # 3) Modelo de embeddings open source (multilingue, 384 dims)
    print(f"[3/5] Cargando modelo de embeddings: {EMBEDDING_MODEL}")
    embeddings = HuggingFaceEmbeddings(model_name=EMBEDDING_MODEL)

    # 4) Limpiar la tabla para una ingesta idempotente (evita duplicados)
    client.table(TABLE_NAME).delete().neq(
        "id", "00000000-0000-0000-0000-000000000000"
    ).execute()
    print(f"[4/5] Tabla '{TABLE_NAME}' limpiada")

    # 5) Generar embeddings y subirlos a pgvector
    SupabaseVectorStore.from_documents(
        chunks,
        embeddings,
        client=client,
        table_name=TABLE_NAME,
        query_name=QUERY_NAME,
        chunk_size=200,
    )
    print(f"[5/5] Ingesta completada. {len(chunks)} chunks indexados en pgvector.")


if __name__ == "__main__":
    main()
