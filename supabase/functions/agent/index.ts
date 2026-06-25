import { corsHeaders } from '../_shared/cors.ts';

// ---------------------------------------------------------------------------
// Fase 0: Chat con LLM real (Groq principal + Gemini fallback).
// La API key vive SOLO aquí (server-side), nunca se expone al frontend.
// RAG, tools y "glass box" se añaden en fases posteriores.
// ---------------------------------------------------------------------------

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AgentRequest {
  message: string;
  language?: string;
  history?: ChatMessage[];
}

const MAX_HISTORY = 8;
const MAX_TOKENS = 600;

const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GEMINI_MODEL = 'gemini-2.0-flash';

function buildSystemPrompt(language: string): string {
  const lang = language === 'en' ? 'English' : 'Spanish';
  return `You are Richard García's personal AI assistant, embedded in his developer portfolio website.

About Richard:
- Full Stack developer (React, React Native, Vite, TypeScript, Tailwind CSS, Node.js, Python, Django, Supabase).
- Specialist in AI systems: pipelines, RAG, embeddings, vector databases, agents and external API integrations.
- Also works with blockchain/web3 and automation.
- Available for freelance work, technical consulting and collaborations.
- GitHub: @riche45 · X/Twitter: @codeand0

Site sections you can guide users to (use these paths in markdown links when relevant):
- Resume / CV: /curriculum
- Connect / hire: /conexiones
- AI Services: /ai-services
- Articles: /articulos
- Projects: /proyectos

Rules:
- ALWAYS reply in ${lang}.
- Be concise, friendly and professional. Use short paragraphs.
- You represent Richard; speak about his skills and services accurately. Do not invent projects or facts.
- When users ask about hiring, pricing or contact, point them to the relevant section with a markdown link, e.g. [Conexiones](/conexiones).
- If you don't know something specific, say so honestly and suggest contacting Richard.`;
}

async function callGroq(
  apiKey: string,
  system: string,
  messages: ChatMessage[],
): Promise<string> {
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      max_tokens: MAX_TOKENS,
      temperature: 0.6,
      messages: [{ role: 'system', content: system }, ...messages],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Groq error ${res.status}: ${detail}`);
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();
  if (!reply) throw new Error('Groq returned empty response');
  return reply;
}

async function callGemini(
  apiKey: string,
  system: string,
  messages: ChatMessage[],
): Promise<string> {
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: { maxOutputTokens: MAX_TOKENS, temperature: 0.6 },
      }),
    },
  );

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`Gemini error ${res.status}: ${detail}`);
  }

  const data = await res.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!reply) throw new Error('Gemini returned empty response');
  return reply;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  const json = (body: unknown, status = 200) =>
    new Response(JSON.stringify(body), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status,
    });

  try {
    const { message, language = 'es', history = [] } =
      (await req.json()) as AgentRequest;

    if (!message || !message.trim()) {
      return json({ error: 'Message cannot be empty' }, 400);
    }

    const system = buildSystemPrompt(language);
    const trimmedHistory = history
      .filter((m) => m && m.content && (m.role === 'user' || m.role === 'assistant'))
      .slice(-MAX_HISTORY);
    const messages: ChatMessage[] = [
      ...trimmedHistory,
      { role: 'user', content: message.trim() },
    ];

    const groqKey = Deno.env.get('GROQ_API_KEY');
    const geminiKey = Deno.env.get('GEMINI_API_KEY');

    if (!groqKey && !geminiKey) {
      return json(
        { error: 'No LLM provider configured (set GROQ_API_KEY or GEMINI_API_KEY)' },
        503,
      );
    }

    // 1) Groq principal
    if (groqKey) {
      try {
        const reply = await callGroq(groqKey, system, messages);
        return json({ reply, provider: 'groq', model: GROQ_MODEL });
      } catch (err) {
        console.error('Groq failed, trying Gemini:', err);
      }
    }

    // 2) Gemini fallback
    if (geminiKey) {
      try {
        const reply = await callGemini(geminiKey, system, messages);
        return json({ reply, provider: 'gemini', model: GEMINI_MODEL });
      } catch (err) {
        console.error('Gemini failed:', err);
      }
    }

    return json({ error: 'All LLM providers failed' }, 502);
  } catch (error) {
    return json({ error: (error as Error).message }, 400);
  }
});
