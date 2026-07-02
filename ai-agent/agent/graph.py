"""
El grafo del agente (LangGraph).

Estructura:

        START
          |
          v
    +-----------+     ¿el LLM pidio una tool?
    |   agent   |----------------- no ----------------> END
    | (llama al |
    |    LLM)   |<----------+
    +-----------+           |
          | si (tool_calls) |
          v                 |
    +-----------+           |
    |   tools   |-----------+
    | (ejecuta) |
    +-----------+

- Estado: la lista de mensajes + el proveedor que respondio (para el glass box).
- `agent`: invoca al LLM (con las tools enlazadas). Intenta los proveedores en
  orden (Groq -> Gemini): si uno falla, cae al siguiente. Asi el agente se
  auto-recupera del fallo intermitente 'tool_use_failed' de Llama en Groq.
- `tools_condition`: arista condicional prehecha: si el ultimo mensaje trae
  `tool_calls` -> "tools"; si no -> END.
- `ToolNode`: ejecuta las tools pedidas y devuelve sus resultados como mensajes.
- El borde `tools -> agent` cierra el bucle: el LLM ve el resultado y responde.
"""

import time
from typing import Annotated

from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode, tools_condition
from typing_extensions import TypedDict

from agent.llm import get_llms
from agent.tools import TOOLS


# Reintentos por proveedor ante fallos transitorios (p.ej. el 'tool_use_failed'
# intermitente de Llama en Groq, que suele resolverse al reintentar).
MAX_ATTEMPTS = 3


class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    provider: str


def _is_quota_error(err: Exception) -> bool:
    """Un 429/cuota agotada no se arregla reintentando: hay que cambiar de proveedor."""
    text = str(err).lower()
    return "429" in text or "resource_exhausted" in text or "quota" in text


def build_agent():
    """Construye y compila el grafo. Devuelve (grafo, proveedor_principal)."""
    bound = [(llm.bind_tools(TOOLS), provider) for llm, provider in get_llms()]
    primary_provider = bound[0][1]

    def agent_node(state: AgentState):
        errors = []
        for llm_with_tools, provider in bound:
            for attempt in range(1, MAX_ATTEMPTS + 1):
                try:
                    response = llm_with_tools.invoke(state["messages"])
                    return {"messages": [response], "provider": provider}
                except Exception as e:  # noqa: BLE001 - reintentar / caer a otro proveedor
                    errors.append(f"{provider} (intento {attempt}): {type(e).__name__}")
                    if _is_quota_error(e):
                        break  # sin cuota: no insistas, pasa al siguiente proveedor
                    time.sleep(0.5 * attempt)  # backoff antes de reintentar
        raise RuntimeError("Todos los proveedores LLM fallaron -> " + " | ".join(errors))

    graph = StateGraph(AgentState)
    graph.add_node("agent", agent_node)
    graph.add_node("tools", ToolNode(TOOLS))

    graph.add_edge(START, "agent")
    graph.add_conditional_edges("agent", tools_condition)
    graph.add_edge("tools", "agent")

    return graph.compile(), primary_provider
