"""
Seleccion de los LLM del agente.

Groq (Llama 3.3 70B) como principal por velocidad y free tier generoso.
Gemini (2.0 Flash) como respaldo. Ambos soportan "tool calling", que es lo que
el agente necesita para decidir cuando usar las herramientas.

Devolvemos TODOS los proveedores disponibles (en orden de preferencia) para que
el grafo pueda hacer fallback automatico: si Groq falla (p.ej. el conocido
'tool_use_failed' de Llama), se reintenta con Gemini sin que el usuario lo note.
"""

import os


GROQ_MODEL = "llama-3.3-70b-versatile"
# gemini-2.0-flash a menudo sin cuota en free tier nuevo; flash-latest apunta
# al flash disponible actualmente en AI Studio.
GEMINI_MODEL = "gemini-flash-latest"

# temperatura baja = llamadas a tools mas deterministas y fiables
TEMPERATURE = 0.2


def get_llms():
    """Devuelve una lista [(modelo, nombre_proveedor)] en orden de preferencia."""
    llms = []

    groq_key = os.environ.get("GROQ_API_KEY")
    if groq_key:
        from langchain_groq import ChatGroq

        llms.append(
            (
                ChatGroq(model=GROQ_MODEL, temperature=TEMPERATURE, api_key=groq_key),
                f"groq:{GROQ_MODEL}",
            )
        )

    gemini_key = os.environ.get("GEMINI_API_KEY")
    if gemini_key:
        from langchain_google_genai import ChatGoogleGenerativeAI

        llms.append(
            (
                ChatGoogleGenerativeAI(
                    model=GEMINI_MODEL, temperature=TEMPERATURE, api_key=gemini_key
                ),
                f"gemini:{GEMINI_MODEL}",
            )
        )

    if not llms:
        raise SystemExit(
            "Falta la API key del LLM. Pon GROQ_API_KEY (o GEMINI_API_KEY) en ai-agent/.env"
        )

    return llms
