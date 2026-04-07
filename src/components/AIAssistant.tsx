import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

// Khởi tạo Gemini API
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

interface Message {
  role: 'user' | 'model';
  text: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Chào bạn! Mình là **Bé Địa Lý**. Bạn muốn hỏi gì về 34 tỉnh thành (theo phân vùng hành chính mới) của Việt Nam nào?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  // Khởi tạo Chat session với System Instruction
  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'Bạn là "Bé Địa Lý", một trợ lý ảo thân thiện, vui vẻ, chuyên giải đáp các câu hỏi về địa lý, văn hóa, lịch sử, du lịch và thời tiết của 34 tỉnh thành Việt Nam (theo phân vùng hành chính mới) cho học sinh. Hãy trả lời NGẮN GỌN, ĐÚNG TRỌNG TÂM, đi thẳng vào vấn đề mà người dùng hỏi (ví dụ hỏi thời tiết thì trả lời ngay thời tiết hiện tại, không lan man). Ngôn ngữ phù hợp với trẻ em. Luôn xưng là "Bé Địa Lý" và gọi người dùng là "bạn".',
          tools: [{ googleSearch: {} }],
        }
      });
    }
  }, []);

  // Tự động cuộn xuống tin nhắn mới nhất
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const responseStream = await chatRef.current.sendMessageStream({ message: userMessage });
      
      // Thêm một tin nhắn rỗng của model để bắt đầu stream
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      setIsLoading(false); // Tắt loading spinner vì đã bắt đầu nhận stream
      
      let fullText = '';
      for await (const chunk of responseStream) {
        const c = chunk as any;
        if (c.text) {
          fullText += c.text;
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].text = fullText;
            return newMessages;
          });
        }
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: 'Xin lỗi, Bé Địa Lý đang gặp chút sự cố kết nối. Bạn thử lại sau nhé!' }]);
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Nút mở Chatbot */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 z-50 flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 hover:scale-110'}`}
        title="Hỏi Bé Địa Lý"
      >
        <Bot className="w-7 h-7 group-hover:animate-bounce" />
        <span className="absolute -top-2 -right-2 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </button>

      {/* Cửa sổ Chatbot */}
      <div 
        className={`fixed bottom-6 right-6 w-[calc(100vw-3rem)] sm:w-96 h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden border border-slate-200 transition-all duration-300 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex justify-between items-center text-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg leading-tight">Bé Địa Lý</h3>
              <p className="text-blue-100 text-xs">Trợ lý AI thông minh</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Message List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-sm' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-sm'
                }`}
              >
                {msg.role === 'model' ? (
                  <div className="markdown-body text-sm prose prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-slate-100 prose-pre:text-slate-800">
                    <Markdown>{msg.text}</Markdown>
                  </div>
                ) : (
                  <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                )}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white text-slate-700 shadow-sm border border-slate-100 rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                <span className="text-sm text-slate-500">Bé Địa Lý đang suy nghĩ...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-slate-100 shrink-0">
          <div className="flex gap-2 relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hỏi Bé Địa Lý (VD: Tỉnh nào rộng nhất?)"
              className="flex-1 resize-none rounded-xl border border-slate-200 bg-slate-50 p-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 max-h-32"
              rows={1}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="absolute right-2 bottom-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            Bé Địa Lý sử dụng AI, thông tin mang tính chất tham khảo.
          </p>
        </div>
      </div>
    </>
  );
}
