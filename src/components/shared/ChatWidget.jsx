import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, X, Send, Loader2, Minimize2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!conversationId) return;
    
    const unsubscribe = base44.agents.subscribeToConversation(conversationId, (data) => {
      setMessages(data.messages || []);
    });

    return () => unsubscribe();
  }, [conversationId]);

  const createConversation = async () => {
    try {
      const conv = await base44.agents.createConversation({
        agent_name: 'coach_scout',
        metadata: {
          name: 'Website Chat',
          source: 'website_widget'
        }
      });
      setConversationId(conv.id);
      return conv;
    } catch (error) {
      console.error('Error creating conversation:', error);
    }
  };

  const handleOpen = async () => {
    setIsOpen(true);
    if (!conversationId) {
      await createConversation();
    }
  };

  const handleSend = async () => {
    if (!inputMessage.trim() || isSending) return;

    const messageText = inputMessage;
    setInputMessage('');
    setIsSending(true);

    try {
      let conv;
      if (!conversationId) {
        conv = await createConversation();
      } else {
        conv = await base44.agents.getConversation(conversationId);
      }

      await base44.agents.addMessage(conv, {
        role: 'user',
        content: messageText
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 w-16 h-16 bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-50 group"
      >
        <MessageCircle className="w-7 h-7" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full animate-pulse" />
        <div className="absolute -top-12 right-0 bg-slate-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with Coach Scout
        </div>
      </button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all ${isMinimized ? 'w-80' : 'w-96'}`}>
      <div className={`bg-white rounded-2xl shadow-2xl border-2 border-slate-200 overflow-hidden flex flex-col ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center">
              <span className="text-slate-900 font-black">CS</span>
            </div>
            <div>
              <div className="font-bold text-white">Coach Scout</div>
              <div className="text-xs text-slate-300">AI Fitness Assistant</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <Minimize2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-amber-600" />
                  </div>
                  <div className="font-bold text-slate-900 mb-2">Hi! I'm Coach Scout 👋</div>
                  <div className="text-sm text-slate-600 max-w-xs mx-auto">
                    I'm here to help you find the perfect training program. Ask me about services, pricing, or getting started!
                  </div>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      msg.role === 'user'
                        ? 'bg-amber-400 text-slate-900'
                        : 'bg-white text-slate-900 border border-slate-200'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <div className="text-sm">{msg.content}</div>
                    ) : (
                      <ReactMarkdown
                        className="text-sm prose prose-sm max-w-none"
                        components={{
                          p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc ml-4 mb-2">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal ml-4 mb-2">{children}</ol>,
                          li: ({ children }) => <li className="mb-1">{children}</li>
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}

              {isSending && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl px-4 py-3">
                    <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1"
                  disabled={isSending}
                />
                <Button
                  onClick={handleSend}
                  disabled={isSending || !inputMessage.trim()}
                  className="bg-amber-400 hover:bg-amber-500 text-slate-900"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <div className="text-xs text-slate-500 mt-2 text-center">
                Powered by AI • For human support, call (210) 555-1234
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}