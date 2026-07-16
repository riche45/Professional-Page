"""
Logica compartida del agente (usada por el CLI y por la API).

- Construye el grafo UNA sola vez (singleton): compilar el grafo y cargar el
  modelo de embeddings es caro, no queremos repetirlo en cada peticion.
- `answer()` recibe un mensaje + historial y devuelve un dict estructurado con
  la respuesta, el proveedor del LLM y los pasos del "glass box".
"""

from typing import Optional

from langchain_core.messages import (
    AIMessage,
    HumanMessage,
    SystemMessage,
    ToolMessage,
)

from agent.graph import build_agent


SYSTEM_PROMPT = (
    "Eres el asistente del portafolio de Richard García, desarrollador Full Stack "
    "especializado en integraciones de IA (agentes, RAG, pipelines). "
    "Responde de forma clara, profesional y honesta, SIEMPRE en el idioma del usuario. "
    "Usa la herramienta 'search_portfolio' para cualquier dato sobre Richard "
    "(experiencia, servicios, precios) y 'github_repos' para hablar de su codigo o "
    "repositorios. Cuando te pregunten por un proyecto concreto (por ejemplo EXONIK "
    "o Viennify), ademas de 'search_portfolio' usa 'github_repos' con el nombre del "
    "proyecto para incluir el enlace y los datos en vivo del repositorio si existe. "
    "No inventes: si no encuentras algo, dilo. Si preguntan como "
    "contratarlo, invita a la seccion de contacto del sitio.\n\n"
    "Formato de respuesta: se conciso. Usa parrafos cortos. Para listas usa guiones "
    "('- '). Puedes usar **negrita** para resaltar nombres propios o cifras. "
    "NO uses encabezados markdown (#), ni tablas, ni bloques de codigo salvo que te lo pidan."
)


_AGENT = None
_PROVIDER = None


def get_agent():
    """Devuelve (grafo, proveedor) construyendolo solo la primera vez."""
    global _AGENT, _PROVIDER
    if _AGENT is None:
        _AGENT, _PROVIDER = build_agent()
    return _AGENT, _PROVIDER


def _build_messages(message: str, history: Optional[list]) -> list:
    """Convierte el historial (lista de {role, content}) en mensajes de LangChain."""
    messages = [SystemMessage(content=SYSTEM_PROMPT)]
    for turn in history or []:
        role = (turn.get("role") or "").lower()
        content = turn.get("content") or ""
        if not content:
            continue
        if role == "user":
            messages.append(HumanMessage(content=content))
        elif role in ("assistant", "ai", "bot"):
            messages.append(AIMessage(content=content))
    messages.append(HumanMessage(content=message))
    return messages


def build_glass_box(messages: list) -> list:
    """Extrae los pasos (tools llamadas + resultados) para mostrar el razonamiento."""
    steps = []
    for msg in messages:
        if isinstance(msg, AIMessage) and msg.tool_calls:
            for call in msg.tool_calls:
                steps.append(
                    {
                        "type": "tool_call",
                        "name": call["name"],
                        "args": call.get("args", {}),
                    }
                )
        elif isinstance(msg, ToolMessage):
            preview = " ".join(str(msg.content).split())[:400]
            steps.append(
                {"type": "tool_result", "name": msg.name, "content": preview}
            )
    return steps


def answer(message: str, history: Optional[list] = None) -> dict:
    """Ejecuta un turno del agente y devuelve la respuesta + metadatos."""
    agent, primary_provider = get_agent()
    messages = _build_messages(message, history)
    result = agent.invoke({"messages": messages})
    final = result["messages"][-1]
    content = final.content
    # Gemini a veces devuelve content como lista de bloques [{type, text}, ...]
    if isinstance(content, list):
        parts = []
        for block in content:
            if isinstance(block, dict) and block.get("text"):
                parts.append(str(block["text"]))
            else:
                parts.append(str(block))
        content = "".join(parts)
    elif content is None:
        content = ""
    else:
        content = str(content)
    return {
        "reply": content,
        "provider": result.get("provider", primary_provider),
        "steps": build_glass_box(result["messages"]),
    }
