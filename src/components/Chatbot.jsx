import React, { useState, useEffect, useRef } from 'react';
import { Bot, X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Namaste! 🙏 I am Vikas, your personal marble art assistant. How can I help you today?' }
  ]);
  const chatEndRef = useRef(null);

  const phoneNumber = "919664106898";

  const qaData = [
    { 
      q: "Which marble is best for temples?", 
      a: "For temples, we highly recommend Makrana White Marble. It stays cool and its shine increases over time with use." 
    },
    { 
      q: "How to order a custom statue?", 
      a: "Just share the deity name, size, and your budget. Our artisans will create a clay model for your approval first!" 
    },
    { 
      q: "Do you deliver safely?", 
      a: "Yes! We use 7-layer safety packaging including a wooden crate. We have successfully delivered murtis to USA, UK, and all over India." 
    },
    { 
      q: "Working hours of the studio?", 
      a: "Our studio is active from 8:00 AM to 10:00 PM (Monday to Sunday). You can visit anytime!" 
    }
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleQuestionClick = (item) => {
    setMessages(prev => [...prev, { type: 'user', text: item.q }]);
    
    // Human-like thinking delay
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { type: 'bot', text: item.a }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-['Satoshi']">
      
      {/* 1. Animated Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5, y: 100, x: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 100, x: 50 }}
            className="absolute bottom-20 right-0 w-[360px] bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-stone-100 flex flex-col"
          >
            {/* Header: Human Robot Profile */}
            <div className="bg-[#2a145b] p-6 text-white">
              <div className="flex justify-between items-start mb-4">
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-tr from-[#c02177] to-[#2a145b] rounded-2xl flex items-center justify-center border-2 border-white/20 shadow-inner">
                    <Bot size={20} className="text-white" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#2a145b] rounded-full"></span>
                </div>
                <button onClick={() => setIsOpen(false)} className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                  <X size={10} />
                </button>
              </div>
              <h3 className="font-['Erode'] text-xl font-bold">Vikas Assistant</h3>
              <p className="text-xs text-white/60 tracking-widest uppercase">Expert in Marble Artistry</p>
            </div>

            {/* Chat Messages */}
            <div className="h-[320px] overflow-y-auto p-5 bg-[#fafafa] space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-sm ${
                    msg.type === 'user' 
                    ? 'bg-[#c02177] text-white rounded-3xl rounded-tr-none' 
                    : 'bg-white text-stone-700 border border-stone-100 rounded-3xl rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {/* Typing Animation */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl shadow-sm border border-stone-100 flex gap-1">
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Q&A Suggested Options */}
            <div className="p-5 bg-white border-t border-stone-100">
              <div className="flex flex-col gap-2">
                {qaData.map((item, index) => (
                  <motion.button
                    whileHover={{ x: 5 }}
                    key={index}
                    onClick={() => handleQuestionClick(item)}
                    className="text-left text-[11px] bg-stone-50 hover:bg-white hover:shadow-md border border-stone-100 p-3 rounded-xl transition-all text-[#2a145b] font-bold"
                  >
                    {item.q}
                  </motion.button>
                ))}
              </div>
              <button 
                onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
                className="w-full mt-4 py-3 bg-stone-900 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#c02177] transition-all"
              >
                Talk to Artisan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Human Robot Floating Button */}
      <div className="relative group">
        {!isOpen && (
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-12 right-0 bg-white text-[#2a145b] px-4 py-2 rounded-2xl rounded-br-none shadow-xl border border-stone-100 text-[10px] font-bold whitespace-nowrap"
          >
            Need Help? Ask me! 👋
          </motion.div>
        )}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-[1.5rem] shadow-2xl flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-stone-900' : 'bg-pink-750'
          }`}
        >
          {isOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <div className="relative">
              <Bot className="text-white" size={32} />
              {/* Eye Blinking Animation Effect */}
              <motion.div 
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                className="absolute top-[10px] left-[6px] w-5 h-1 bg-white rounded-full"
              />
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default Chatbot;