---
title: Portfolio AI Agent
emoji: 🤖
colorFrom: blue
colorTo: indigo
sdk: docker
app_port: 7860
pinned: false
---

# AI Agent — Portafolio (RAG + LangGraph)

Servicio Python del agente de IA del portafolio. Incluye el **pipeline de ingesta
RAG** (Fase 1), el **agente con LangGraph + tools** y la **API FastAPI** (Fase 2),
y el **despliegue en contenedor** para Hugging Face Spaces (Fase 3).

> El bloque `---` de arriba es la metadata que Hugging Face Spaces lee para
> construir el Space (Docker, puerto 7860). En GitHub se muestra como una tabla.

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

Crea un archivo `.env` en `ai-agent/` (está en `.gitignore`, no se sube al repo)
con estas variables:

```
# Fase 1 (ingesta RAG)
SUPABASE_URL=https://xxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
EMBEDDING_MODEL=sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2

# Fase 2 (agente) — al menos una key de LLM es obligatoria
GROQ_API_KEY=            # gratis en https://console.groq.com (principal)
GEMINI_API_KEY=          # gratis en https://aistudio.google.com (fallback)
GITHUB_USERNAME=riche45
GITHUB_TOKEN=            # opcional, sube el limite de la API de GitHub

# Fase 2 (API HTTP)
FRONTEND_ORIGINS=*       # en prod: https://tudominio.vercel.app,http://localhost:5173
RATE_LIMIT_PER_MINUTE=15
```

`SUPABASE_URL` y `SUPABASE_SERVICE_ROLE_KEY` salen de Supabase → Settings → API.

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

## Agente y API (Fase 2)

```powershell
# Chat por consola (con "glass box" de tools)
python run_agent.py "que es EXONIK?"

# API HTTP (Swagger en http://localhost:8000/docs)
uvicorn api:app --reload --port 8000
```

Variables extra en `.env`: `GROQ_API_KEY` (obligatoria), `GEMINI_API_KEY`
(fallback opcional), `GITHUB_USERNAME`, `FRONTEND_ORIGINS`, `RATE_LIMIT_PER_MINUTE`.

## Despliegue en Hugging Face Spaces (Fase 3)

Este directorio es autocontenido y se despliega como **Space de tipo Docker**.

1. Crea un Space en https://huggingface.co/new-space → SDK **Docker** → Blank.
2. Sube el contenido de `ai-agent/` al repo del Space (Dockerfile + código).
3. En el Space → **Settings → Variables and secrets**, añade como *secrets*:
   `GROQ_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, y como *variable*
   `FRONTEND_ORIGINS` con tu dominio de Vercel (p.ej. `https://tu-web.vercel.app`).
4. HF construye la imagen y expone `https://<usuario>-<space>.hf.space`.
5. En **Vercel**, define `VITE_AGENT_API_URL` con esa URL y vuelve a desplegar.

> Nota: en el free tier el Space se **duerme** por inactividad; la primera
> petición tras un rato tardará más (cold start). El modelo de embeddings ya va
> pre-descargado en la imagen para minimizarlo.
