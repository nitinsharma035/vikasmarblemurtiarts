import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('hasSeenPreloader');
    
    if (!hasSeenPreloader) {
      setIsVisible(true);
      sessionStorage.setItem('hasSeenPreloader', 'true');
      
      // 3.5 seconds baad preloader hide ho jayega
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3500);
      
      return () => clearTimeout(timer);
    } else {
      // Agar pehle dekh chuka hai toh checking turant khatam
      setIsChecking(false);
    }
  }, []);

  const line1 = "Welcome to";
  const line2 = "Vikas Marble Murti Arts";
  const line3 = "Ramgarh Alwar Rajasthan 301026";

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 5, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
  };

  // Agar user pehle dekh chuka hai, toh kuch bhi render mat karo
  if (!isVisible && !isChecking) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-[#2a145b] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center text-center max-w-2xl px-6">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <img 
                src="/image/favicon.png" 
                alt="Logo" 
                className="h-24 w-24 md:h-32 md:w-32 rounded-full border-2 border-white/10 shadow-2xl object-contain"
              />
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              <div className="text-xl md:text-2xl text-white/70 italic">
                {line1.split("").map((char, i) => (
                  <motion.span key={i} variants={charVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              <div className="text-3xl md:text-5xl text-white font-bold leading-tight">
                {line2.split("").map((char, i) => (
                  <motion.span key={i} variants={charVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              <div className="text-sm md:text-lg text-[#c02177] tracking-wider uppercase font-bold">
                {line3.split("").map((char, i) => (
                  <motion.span key={i} variants={charVariants}>
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              className="h-[1px] bg-gradient-to-r from-transparent via-[#c02177] to-transparent mt-10 w-64 mx-auto"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;