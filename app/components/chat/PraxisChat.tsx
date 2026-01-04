'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle, FiX, FiSend, FiUser, FiCpu } from 'react-icons/fi';
import toast from 'react-hot-toast';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  sessionId: string | null;
  isLoading: boolean;
  input: string;
}

export default function PraxisChat() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    messages: [],
    sessionId: null,
    isLoading: false,
    input: '',
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  useEffect(() => {
    if (chatState.isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [chatState.isOpen]);

  const toggleChat = () => {
    setChatState(prev => ({ 
      ...prev, 
      isOpen: !prev.isOpen 
    }));
  };

  const addMessage = (content: string, isUser: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  };

  const sendMessage = async () => {
    const message = chatState.input.trim();
    if (!message || chatState.isLoading) return;

    setChatState(prev => ({ ...prev, input: '', isLoading: true }));
    addMessage(message, true);

    try {
      const response = await fetch('/api/praxis/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId: chatState.sessionId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      setChatState(prev => ({
        ...prev,
        sessionId: data.sessionId,
        isLoading: false,
      }));

      addMessage(data.message, false);

    } catch (error) {
      console.error('Chat error:', error);
      setChatState(prev => ({ ...prev, isLoading: false }));
      addMessage(
        "I&apos;m sorry, I&apos;m having trouble connecting right now. Please try again or contact Calvin directly through the contact page.",
        false
      );
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    if (chatState.isOpen && chatState.messages.length === 0) {
      const timer = setTimeout(() => {
        addMessage(
          "Hi! I&apos;m Praxis, Calvin&apos;s AI assistant. I can help you learn about Calvin&apos;s work, navigate the website, or connect with him. What would you like to know?",
          false
        );
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [chatState.isOpen, chatState.messages.length]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {chatState.isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-96 h-96 bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-t-lg">
              <div className="flex items-center space-x-2">
                <FiCpu className="w-5 h-5" />
                <div>
                  <h3 className="font-semibold">Praxis</h3>
                  <p className="text-xs opacity-90">Calvin&apos;s AI Assistant</p>
                </div>
              </div>
              <button
                onClick={toggleChat}
                className="hover:bg-white/20 p-1 rounded transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {chatState.messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.isUser ? 'bg-white/20' : 'bg-purple-100 dark:bg-purple-900'
                      }`}>
                        {message.isUser ? (
                          <FiUser className="w-3 h-3" />
                        ) : (
                          <FiCpu className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">
                          {message.content}
                        </p>
                        <p className={`text-xs mt-1 opacity-70 ${
                          message.isUser ? 'text-white' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {chatState.isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <FiCpu className="w-4 h-4 text-purple-600 animate-pulse" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={chatState.input}
                  onChange={(e) => setChatState(prev => ({ ...prev, input: e.target.value }))}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Calvin..."
                  disabled={chatState.isLoading}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white text-sm"
                />
                <button
                  onClick={sendMessage}
                  disabled={!chatState.input.trim() || chatState.isLoading}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <FiSend className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <AnimatePresence mode="wait">
          {chatState.isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiX className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FiMessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}