import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { getAIConsultantResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { BRAND_LOGO } from '../App';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'assistant', 
      content: "Welcome to Hidden Hire IT Consultancy & Services. I'm your AI Strategy Advisor. How can I help you navigate your core business or technology challenges today?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getAIConsultantResponse(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all group animate-bounce"
        >
          <div className="relative">
            <MessageSquare className="h-8 w-8" />
            <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-blue-200 animate-pulse" />
          </div>
        </button>
      )}

      {isOpen && (
        <div className="bg-white w-[380px] h-[550px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-blue-600 p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-white p-1 rounded-full border border-blue-400">
                <img src={BRAND_LOGO} alt="AI" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">AI Strategy Advisor</h4>
                <div className="flex items-center space-x-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-blue-100 text-[10px] font-medium uppercase tracking-wider">Online & Active</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-blue-100 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-2 ${m.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden ${
                    m.role === 'user' ? 'bg-blue-600' : 'bg-white border border-slate-200'
                  }`}>
                    {m.role === 'user' ? <User className="text-white h-4 w-4" /> : <img src={BRAND_LOGO} alt="Logo" className="h-6 w-6 object-contain" />}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-600" />
                  <span className="text-xs text-slate-500 font-medium">Analyzing business case...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex items-center space-x-2 bg-slate-100 p-2 rounded-2xl">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me about market strategy..." 
                className="flex-grow bg-transparent border-none focus:ring-0 text-sm px-2 text-slate-700"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-3 font-medium">Powered by Hidden Hire Intelligence</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;