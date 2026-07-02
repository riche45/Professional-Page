# Imagen del servicio del agente (FastAPI) para Hugging Face Spaces (Docker SDK).
FROM python:3.11-slim

ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    HF_HOME=/app/.cache/huggingface \
    EMBEDDING_MODEL=sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2 \
    PIP_RETRIES=5 \
    PIP_TIMEOUT=120 \
    PIP_DEFAULT_TIMEOUT=120

WORKDIR /app

RUN pip install --no-cache-dir --upgrade pip

# 1) Torch en su variante CPU (evita descargar el wheel enorme con CUDA).
RUN pip install --no-cache-dir torch --index-url https://download.pytorch.org/whl/cpu

# 2) Resto de dependencias del servicio.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 3) Pre-descarga el modelo de embeddings en la imagen para acelerar el arranque
#    (si no, se descargaria ~470 MB en el primer request => cold start lento).
RUN python -c "from langchain_huggingface import HuggingFaceEmbeddings; HuggingFaceEmbeddings(model_name='${EMBEDDING_MODEL}')"

# La cache debe ser escribible por el usuario no-root de HF Spaces (uid 1000).
RUN mkdir -p /app/.cache/huggingface && chmod -R 777 /app/.cache

# 4) Codigo de la aplicacion.
COPY . .

EXPOSE 7860

# HF Spaces enruta el trafico al puerto declarado en el README (app_port: 7860).
CMD ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "7860"]
