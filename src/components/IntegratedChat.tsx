import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { generateChatResponse } from '../services/openai';
import { Link } from 'react-router-dom';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Función para convertir texto con formato markdown a JSX
const parseMessage = (content: string) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    // Agregar el texto antes del enlace
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }

    // Agregar el enlace como componente Link
    const [, text, url] = match;
    parts.push(
      <Link
        key={match.index}
        to={url}
        className="text-blue-500 hover:text-blue-700 dark:text-primary-400 dark:hover:text-primary-300 underline"
      >
        {text}
      </Link>
    );

    lastIndex = match.index + match[0].length;
  }

  // Agregar el texto restante después del último enlace
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }

  // Manejar saltos de línea
  return parts.map((part, index) => 
    typeof part === 'string' ? (
      <span key={index}>
        {part.split('\\n').map((line, i) => (
          <span key={i}>
            {line}
            {i < part.split('\\n').length - 1 && <br />}
          </span>
        ))}
      </span>
    ) : part
  );
};

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
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
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
        content: response,
        timestamp: new Date()
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
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-dark-900/50">
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
                  <p className="text-sm leading-relaxed">
                    {parseMessage(message.content)}
                  </p>
                </div>
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
        
        <div ref={messagesEndRef} />
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