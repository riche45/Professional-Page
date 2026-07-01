-- =============================================================================
-- Fase 1 - Configuracion de pgvector + tabla de conocimiento (RAG)
-- Ejecutar en Supabase: Dashboard > SQL Editor > New query > pegar y Run.
-- Embeddings de 384 dimensiones (paraphrase-multilingual-MiniLM-L12-v2).
-- =============================================================================

-- 1) Habilitar la extension pgvector
create extension if not exists vector;

-- 2) Tabla de documentos para RAG
create table if not exists documents (
  id uuid primary key default gen_random_uuid(),
  content text,
  metadata jsonb,
  embedding vector(384)
);

-- 3) Indice para busqueda por similitud (distancia coseno)
create index if not exists documents_embedding_idx
  on documents
  using ivfflat (embedding vector_cosine_ops)
  with (lists = 100);

-- 4) Funcion de busqueda semantica (la usa LangChain SupabaseVectorStore)
create or replace function match_documents (
  query_embedding vector(384),
  match_count int default null,
  filter jsonb default '{}'
) returns table (
  id uuid,
  content text,
  metadata jsonb,
  similarity float
)
language plpgsql
as $$
#variable_conflict use_column
begin
  return query
  select
    id,
    content,
    metadata,
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where metadata @> filter
  order by documents.embedding <=> query_embedding
  limit match_count;
end;
$$;
