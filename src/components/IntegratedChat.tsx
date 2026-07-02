import { useState, useRef, useEffect, type ReactNode } from 'react';
import { Send, Bot, User, Sparkles, ChevronDown, Search, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { generateChatResponse, type AgentStep } from '../services/openai';
import { Link } from 'react-router-dom';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  steps?: AgentStep[];
  provider?: string;
}

// Renderiza el formato "inline" de una línea: enlaces [texto](url) y **negrita**.
const renderInline = (text: string, keyPrefix: string): ReactNode[] => {
  const nodes: ReactNode[] = [];
  // Divide primero por enlaces markdown.
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let seg = 0;

  const pushWithBold = (str: string) => {
    // Dentro del texto plano, convierte **negrita** en <strong>.
    const boldRegex = /\*\*([^*]+)\*\*/g;
    let bLast = 0;
    let bMatch: RegExpExecArray | null;
    while ((bMatch = boldRegex.exec(str)) !== null) {
      if (bMatch.index > bLast) nodes.push(str.slice(bLast, bMatch.index));
      nodes.push(<strong key={`${keyPrefix}-b-${seg++}`}>{bMatch[1]}</strong>);
      bLast = bMatch.index + bMatch[0].length;
    }
    if (bLast < str.length) nodes.push(str.slice(bLast));
  };

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > last) pushWithBold(text.slice(last, match.index));
    const [, label, url] = match;
    const isInternal = url.startsWith('/');
    nodes.push(
      isInternal ? (
        <Link
          key={`${keyPrefix}-l-${seg++}`}
          to={url}
          className="text-blue-500 hover:text-blue-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
        >
          {label}
        </Link>
      ) : (
        <a
          key={`${keyPrefix}-l-${seg++}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 dark:text-primary-400 dark:hover:text-primary-300 underline break-all"
        >
          {label}
        </a>
      )
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) pushWithBold(text.slice(last));
  return nodes;
};

// Convierte el texto del mensaje (markdown ligero) a JSX: párrafos, viñetas,
// negritas y enlaces. Evita mostrar asteriscos u otras marcas en crudo.
const parseMessage = (content: string): ReactNode => {
  const lines = content.split('\n');
  const blocks: ReactNode[] = [];
  let bullets: ReactNode[] = [];

  const flushBullets = () => {
    if (bullets.length === 0) return;
    blocks.push(
      <ul key={`ul-${blocks.length}`} className="list-disc pl-5 space-y-1 my-1">
        {bullets}
      </ul>
    );
    bullets = [];
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    const bulletMatch = /^[-*]\s+(.*)/.exec(trimmed);
    if (bulletMatch) {
      bullets.push(<li key={`li-${i}`}>{renderInline(bulletMatch[1], `li-${i}`)}</li>);
      return;
    }
    flushBullets();
    if (trimmed === '') return;
    blocks.push(
      <p key={`p-${i}`} className="my-1 first:mt-0 last:mb-0">
        {renderInline(line, `p-${i}`)}
      </p>
    );
  });
  flushBullets();

  return blocks;
};

// "Glass box": muestra de forma transparente qué herramientas usó el agente
// para construir la respuesta (búsqueda RAG, consulta a GitHub, etc.).
function GlassBox({ steps, provider }: { steps: AgentStep[]; provider?: string }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toolCalls = steps.filter((s) => s.type === 'tool_call');
  if (toolCalls.length === 0) return null;

  const toolLabel = (name: string) => {
    const key = `chat.tool_${name}`;
    const translated = t(key);
    return translated === key ? name : translated;
  };

  const toolIcon = (name: string) => {
    if (name === 'github_repos') return <Github size={12} />;
    if (name === 'search_portfolio') return <Search size={12} />;
    return <Sparkles size={12} />;
  };

  return (
    <div className="mt-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-primary-400 transition-colors"
      >
        <Sparkles size={12} />
        <span>{open ? t('chat.hide_reasoning') : t('chat.show_reasoning')}</span>
        <span className="text-gray-400">({toolCalls.length})</span>
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 space-y-2 rounded-lg border border-gray-200 dark:border-dark-600 bg-gray-50 dark:bg-dark-900/50 p-3">
              {provider && (
                <div className="text-[11px] text-gray-400 dark:text-gray-500">
                  {t('chat.reasoning_model')}: <span className="font-mono">{provider}</span>
                </div>
              )}
              {steps.map((step, i) =>
                step.type === 'tool_call' ? (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-600 dark:text-primary-400"
                  >
                    {toolIcon(step.name)}
                    <span>{toolLabel(step.name)}</span>
                    {step.args && Object.keys(step.args).length > 0 && (
                      <span className="font-mono text-gray-400 dark:text-gray-500">
                        {JSON.stringify(step.args)}
                      </span>
                    )}
                  </div>
                ) : (
                  <div
                    key={i}
                    className="pl-4 border-l-2 border-gray-200 dark:border-dark-600 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400"
                  >
                    {step.content}
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function IntegratedChat() {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: t('chat.welcome'),
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // Evita hacer scroll en el primer render (si no, la página "salta" al cargar).
  const hasInteracted = useRef(false);

  useEffect(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: t('chat.welcome'),
        timestamp: new Date()
      }
    ]);
  }, [i18n.language, t]);

  // Solo hace scroll DENTRO de la cajita del chat, nunca mueve la página entera.
  const scrollToBottom = () => {
    const el = messagesContainerRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  };

  useEffect(() => {
    // No hacer scroll al cargar; solo tras la primera interacción del usuario.
    if (!hasInteracted.current) return;
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    hasInteracted.current = true;
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const history = messages.map((m) => ({ role: m.role, content: m.content }));
      const response = await generateChatResponse(userMessage.content, i18n.language, history);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.reply,
        timestamp: new Date(),
        steps: response.steps,
        provider: response.provider,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setError(t('chat.error_message'));
      console.error('Error en el chat:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-card overflow-hidden border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none transition-colors duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-dark-600">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center">
            <Bot size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-medium text-gray-900 dark:text-white">👋 {t('profile.greeting')}</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{t('chat.assistant_status')}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          {t('profile.description')} <Link to="/curriculum" className="text-blue-600 dark:text-primary-400 hover:underline">{t('nav.resume')}</Link>.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{t('profile.experience')}</p>
      </div>

      {/* Messages Area */}
      <div ref={messagesContainerRef} className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-dark-900/50">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Bot size={16} className="text-white" />
                </div>
              )}
              
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-1' : ''}`}>
                <div
                  className={`p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-600 dark:bg-primary-600 text-white ml-auto'
                      : 'bg-white dark:bg-dark-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-transparent'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {parseMessage(message.content)}
                  </div>
                </div>
                {message.role === 'assistant' && message.steps && message.steps.length > 0 && (
                  <GlassBox steps={message.steps} provider={message.provider} />
                )}
                <p className="text-xs text-gray-500 dark:text-gray-500 mt-1 px-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>

              {message.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-dark-600 flex items-center justify-center flex-shrink-0 mt-1 order-2">
                  <User size={16} className="text-gray-600 dark:text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 justify-start"
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
              <Bot size={16} className="text-white" />
            </div>
            <div className="bg-white dark:bg-dark-700 p-3 rounded-lg border border-gray-200 dark:border-transparent">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </motion.div>
        )}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-3 rounded-lg text-red-600 dark:text-red-400 text-sm"
          >
            {error}
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200 dark:border-dark-600 bg-white dark:bg-dark-800">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t('chat.input_placeholder')}
              className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-primary-500"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-4 py-2 bg-blue-600 dark:bg-primary-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}