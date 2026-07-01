"""
Tests de integracion del RAG (Fase 1).

Comprueban que la busqueda semantica en pgvector recupera el chunk correcto
del knowledge base para preguntas conocidas, en espanol e ingles.

Requisitos: haber corrido `python ingest.py` antes (la tabla `documents` con datos)
y tener el .env configurado. Ejecutar desde ai-agent/:

    pytest -v
"""

import os

import pytest

from query import search


# (pregunta, archivo del knowledge base que deberia aparecer en el top-k)
CASES = [
    ("cuanto cobras por un agente de IA", "pricing.md"),
    ("hablame del proyecto de terapias genicas EXONIK", "flagship-projects.md"),
    ("que tecnologias y stack domina Richard", "skills.md"),
    ("how do I contact or hire Richard", "faq.md"),
    ("que servicios de integracion de IA ofrece", "services.md"),
]


def _sources(results):
    return [os.path.basename(doc.metadata.get("source", "")) for doc, _ in results]


@pytest.mark.parametrize("query,expected_source", CASES)
def test_retrieval_returns_expected_source(query, expected_source):
    results = search(query, k=3)
    assert results, f"La busqueda no devolvio resultados para: {query!r}"
    sources = _sources(results)
    assert expected_source in sources, (
        f"Para {query!r} se esperaba {expected_source} en el top-3, "
        f"pero se obtuvo: {sources}"
    )


def test_scores_are_reasonable():
    """El mejor resultado de una pregunta clara debe tener similitud decente."""
    results = search("cuanto cobras por un agente de IA", k=1)
    assert results, "Sin resultados"
    _, top_score = results[0]
    assert top_score > 0.2, f"Score demasiado bajo: {top_score}"
