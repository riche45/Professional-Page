# AI Agent — Pipeline RAG (Fase 1)

Servicio Python del agente de IA del portafolio. Esta fase implementa el
**pipeline de ingesta RAG**: lee la base de conocimiento, genera embeddings con un
modelo open source y los guarda en Supabase (pgvector).

> Arquitectura híbrida: el frontend (React) y el gateway (Supabase Edge Function, TS)
> viven en la raíz del repo; este directorio contiene la parte Python
> (LangChain ahora, LangGraph en la Fase 2).

## Estructura

```
ai-agent/
├─ knowledge_base/        # Contenido fuente del agente (markdown, es/en)
├─ sql/setup_pgvector.sql # Activa pgvector + tabla documents + match_documents
├─ ingest.py              # Pipeline: load → chunk → embed → upsert a pgvector
├─ requirements.txt
└─ .env.example
```

## Requisitos previos

1. Tener Python 3.10+ instalado.
2. Acceso al proyecto de Supabase (URL y Service Role key).

## Paso 1 — Configurar la base de datos (una sola vez)

En el dashboard de Supabase: **SQL Editor → New query**, pega el contenido de
`sql/setup_pgvector.sql` y ejecútalo (Run). Esto:

- Activa la extensión `pgvector`.
- Crea la tabla `documents` (embeddings de 384 dimensiones).
- Crea la función `match_documents` para búsqueda semántica.

## Paso 2 — Instalar dependencias

```powershell
cd ai-agent
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

## Paso 3 — Configurar variables de entorno

```powershell
copy .env.example .env
```

Edita `.env` y rellena `SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY`
(Supabase → Settings → API). El `.env` está en `.gitignore` y no se sube al repo.

## Paso 4 — Ejecutar la ingesta

```powershell
python ingest.py
```

La primera vez descargará el modelo de embeddings (~470 MB). Al terminar, la tabla
`documents` de Supabase tendrá los chunks indexados con sus vectores.

> Re-ejecutar es seguro: el script limpia la tabla antes de volver a ingestar
> (idempotente), así que puedes actualizar `knowledge_base/` y correrlo de nuevo.

## Embeddings

Modelo por defecto: `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2`
(open source, multilingüe es/en, 384 dimensiones). Configurable vía `EMBEDDING_MODEL`.

## Siguiente fase

Fase 2: agente con LangGraph (orquestación + tool de GitHub API) consumiendo este
índice vectorial, expuesto como servicio y conectado al gateway de Supabase.
