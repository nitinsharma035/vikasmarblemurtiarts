import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "Divine Marble Sculptures",
    subtitle: "Exquisite masterpieces crafted from pure Makrana marble.",
    image: "/image/banner-1.png",
     
  },
  {
    id: 2,
    title: "Tradition Meets Artistry",
    subtitle: "Bringing spiritual elegance to your home and temples.",
    image: "/image/banner-2.png",
    
  },
  {
    id: 3,
    title: "Customized Creations",
    subtitle: "Tailor-made marble statues designed to your specific requirements.",
    image: "/image/banner-3.png",
    
  }
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[450px] md:h-[650px] w-full overflow-hidden bg-stone-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        > 
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          </motion.div> 
          <div className="relative h-full flex items-center px-8 md:px-24">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-white font-medium tracking-widest uppercase text-sm mb-4 block"
              >
                Vikas Marble Murti Arts
              </motion.span>
              
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-3xl md:text-6xl font-Satoshi text-white leading-tight mb-6"
              >
                {slides[current].title}
              </motion.h1>

              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-lg md:text-xl text-stone-300 mb-10 max-w-xl font-light leading-relaxed"
              >
                {slides[current].subtitle}
              </motion.p> 
            </div>
          </div>
        </motion.div>
      </AnimatePresence> 
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button 
          onClick={prevSlide}
          className="p-2 border bg-violet-950 border-white/20 rounded-full text-white hover:bg-pink-750 hover:text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 border bg-violet-950 border-white/20 rounded-full text-white hover:bg-pink-750 hover:text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div> 
      <div className="absolute bottom-0 left-0 w-full flex h-1 gap-1">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`h-full transition-all duration-[5000ms] linear ${current === index ? 'bg-violet-950 w-full' : 'bg-white/20 w-1/3'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;