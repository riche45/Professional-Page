"""
API HTTP del agente (FastAPI).

Expone el agente de LangGraph por HTTP para que el frontend lo consuma:

    GET  /health   -> comprobacion de estado
    POST /chat     -> { message, history } -> { reply, provider, steps }

Incluye:
- CORS: solo permite los origenes del frontend (configurable por env).
- Rate limiting: limita peticiones por IP para evitar abuso/coste (in-memory,
  suficiente para una sola instancia; en produccion multi-instancia se moveria
  a Redis o al gateway de Supabase).
"""

import os
import time
from collections import defaultdict, deque

from dotenv import load_dotenv
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

load_dotenv()

from agent.service import answer


# --- Configuracion ---------------------------------------------------------

_origins_env = os.environ.get("FRONTEND_ORIGINS", "*")
ALLOWED_ORIGINS = (
    ["*"] if _origins_env.strip() == "*" else [o.strip() for o in _origins_env.split(",")]
)
RATE_LIMIT_PER_MINUTE = int(os.environ.get("RATE_LIMIT_PER_MINUTE", "15"))


# --- Modelos de request/response ------------------------------------------

class Turn(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=2000)
    history: list[Turn] = Field(default_factory=list)


class Step(BaseModel):
    type: str
    name: str
    args: dict | None = None
    content: str | None = None


class ChatResponse(BaseModel):
    reply: str
    provider: str
    steps: list[Step]


# --- App -------------------------------------------------------------------

app = FastAPI(title="Portfolio AI Agent", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)


# --- Rate limiting (ventana deslizante de 60s por IP) ----------------------

_hits: dict[str, deque] = defaultdict(deque)


def _check_rate_limit(request: Request) -> None:
    ip = request.client.host if request.client else "unknown"
    now = time.time()
    window = _hits[ip]
    # descarta timestamps mas viejos de 60s
    while window and now - window[0] > 60:
        window.popleft()
    if len(window) >= RATE_LIMIT_PER_MINUTE:
        raise HTTPException(
            status_code=429,
            detail="Demasiadas peticiones. Espera un momento e intentalo de nuevo.",
        )
    window.append(now)


# --- Endpoints -------------------------------------------------------------

@app.get("/health")
def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest, request: Request):
    _check_rate_limit(request)
    history = [t.model_dump() for t in req.history]
    try:
        result = answer(req.message, history)
    except Exception as e:  # noqa: BLE001
        # Mensaje corto: no filtramos secretos, pero evitamos volcar el traceback.
        raise HTTPException(
            status_code=500,
            detail=f"Error del agente: {type(e).__name__}",
        ) from e
    return result
