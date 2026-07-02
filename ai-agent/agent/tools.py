"""
Herramientas (tools) del agente.

Cada funcion decorada con @tool se le "ofrece" al LLM. El LLM lee el NOMBRE, la
firma y el DOCSTRING para decidir cuando llamarla y con que argumentos. Por eso
el docstring debe describir bien que hace la tool.
"""

import os

import requests
from langchain_core.tools import tool

# Reutilizamos la busqueda hibrida (vectorial + keyword) de la Fase 1 (query.py).
from query import hybrid_search as _rag_search


@tool
def search_portfolio(query: str) -> str:
    """Busca informacion sobre Richard García (su experiencia, habilidades,
    proyectos, servicios de IA y precios) en su base de conocimiento.
    Usa esta herramienta para responder cualquier pregunta sobre Richard,
    lo que hace, como trabaja o cuanto cobra, incluyendo nombres propios de
    proyectos como 'EXONIK' o 'Viennify'.

    Args:
        query: la pregunta o el tema a buscar, en lenguaje natural.
    """
    results = _rag_search(query, k=4)
    if not results:
        return "No se encontro informacion relevante."

    bloques = []
    for r in results:
        contenido = " ".join(r["content"].split())
        if r["score"] is not None:
            etiqueta = f"[fuente: {r['source']} | similitud: {r['score']:.2f}]"
        else:
            etiqueta = f"[fuente: {r['source']} | coincidencia por palabra clave]"
        bloques.append(f"{etiqueta}\n{contenido}")
    return "\n\n".join(bloques)


@tool
def github_repos(topic: str = "") -> str:
    """Consulta EN VIVO los repositorios publicos de Richard en GitHub.
    Usa esta herramienta cuando pregunten por su codigo, sus repositorios,
    sus proyectos mas recientes o su actividad en GitHub.

    Args:
        topic: opcional. Palabra para filtrar por nombre/descripcion/lenguaje
               (ej. "python", "blockchain"). Vacio = devuelve los mas recientes.
    """
    username = os.environ.get("GITHUB_USERNAME", "riche45")
    headers = {"Accept": "application/vnd.github+json"}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    url = f"https://api.github.com/users/{username}/repos"
    params = {"sort": "updated", "per_page": 100, "type": "owner"}
    try:
        resp = requests.get(url, headers=headers, params=params, timeout=15)
        resp.raise_for_status()
        repos = resp.json()
    except requests.RequestException as e:
        return f"No se pudo consultar GitHub: {e}"

    t = topic.strip().lower()
    if t:
        repos = [
            r
            for r in repos
            if t in (r.get("name") or "").lower()
            or t in (r.get("description") or "").lower()
            or t in (r.get("language") or "").lower()
        ]

    if not repos:
        return f"No se encontraron repositorios{' para ' + topic if topic else ''}."

    lineas = []
    for r in repos[:10]:
        nombre = r.get("name")
        desc = r.get("description") or "(sin descripcion)"
        lang = r.get("language") or "?"
        stars = r.get("stargazers_count", 0)
        link = r.get("html_url")
        lineas.append(f"- {nombre} ({lang}, ⭐{stars}): {desc} — {link}")
    return "Repositorios de GitHub:\n" + "\n".join(lineas)


TOOLS = [search_portfolio, github_repos]
