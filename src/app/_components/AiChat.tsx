'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi! I'm an AI assistant for Sohail's portfolio. Ask me anything about his skills, experience, or projects.",
};

const AiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;

    const history = messages.filter((m) => m !== INITIAL_MESSAGE);
    const userMessage: Message = { role: 'user', content: trimmed };

    setMessages((prev) => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed, history }),
      });

      if (!res.ok || !res.body) {
        throw new Error('Failed to get response');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last.role === 'assistant') {
            updated[updated.length - 1] = { ...last, content: last.content + chunk };
          }
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last.role === 'assistant' && last.content === '') {
          updated[updated.length - 1] = {
            ...last,
            content: 'Sorry, something went wrong. Please try again.',
          };
        }
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3'>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className='w-80 sm:w-96 flex flex-col rounded-2xl overflow-hidden border border-[#d0bcff]/20'
            style={{
              background: 'rgba(12, 19, 34, 0.95)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(208,188,255,0.05)',
              height: '500px',
            }}
          >
            {/* Header */}
            <div
              className='flex items-center justify-between px-4 py-3 border-b border-[#d0bcff]/10'
              style={{ background: 'rgba(109,59,215,0.15)' }}
            >
              <div className='flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-[#d0bcff] animate-pulse' />
                <span className='text-[#dce2f7] font-semibold text-sm'>Ask about Sohail</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className='text-[#9CA3AF] hover:text-[#d0bcff] transition-colors p-1 rounded-lg hover:bg-[#d0bcff]/10'
              >
                <IoClose size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className='flex-1 overflow-y-auto p-4 space-y-3'>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#6d3bd7] text-white rounded-br-sm'
                        : 'border border-[#d0bcff]/15 text-[#dce2f7] rounded-bl-sm'
                    }`}
                    style={
                      msg.role === 'assistant'
                        ? { background: 'rgba(208,188,255,0.06)' }
                        : undefined
                    }
                  >
                    {msg.content || (
                      <span className='flex gap-1 items-center py-1'>
                        {[0, 1, 2].map((dot) => (
                          <span
                            key={dot}
                            className='w-1.5 h-1.5 rounded-full bg-[#d0bcff]/60'
                          />
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input row */}
            <div className='p-3 border-t border-[#d0bcff]/10'>
              <div className='flex items-end gap-2 rounded-xl border border-[#d0bcff]/20 px-3 py-2 focus-within:border-[#d0bcff]/40 transition-colors'
                style={{ background: 'rgba(208,188,255,0.04)' }}
              >
                <textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  disabled={isLoading}
                  placeholder='Ask me anything...'
                  rows={1}
                  className='flex-1 bg-transparent text-[#dce2f7] placeholder-[#9CA3AF]/60 text-sm resize-none outline-none leading-relaxed disabled:opacity-50'
                  style={{ maxHeight: '80px' }}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className='p-1.5 rounded-lg text-[#d0bcff] hover:bg-[#d0bcff]/15 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0'
                >
                  <IoSend size={16} />
                </button>
              </div>
              <p className='text-[10px] text-[#9CA3AF]/40 text-center mt-1.5'>
                Enter to send · Shift+Enter for newline
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg'
        style={{
          background: 'linear-gradient(135deg, #6d3bd7 0%, #3131c0 100%)',
          boxShadow: '0 8px 25px -8px rgba(109,59,215,0.6)',
        }}
        title={isOpen ? 'Close chat' : 'Ask about Sohail'}
      >
        <AnimatePresence mode='wait'>
          {isOpen ? (
            <motion.span
              key='close'
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <IoClose size={24} />
            </motion.span>
          ) : (
            <motion.span
              key='chat'
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <IoChatbubbleEllipses size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export { AiChat };
