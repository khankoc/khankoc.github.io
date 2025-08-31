'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiMessageSquare, FiArrowLeft, FiArrowRight, FiUser } from 'react-icons/fi';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = SITE_CONFIG.testimonials;
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="referanslar" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Yumuşak geçişli ve bütüncül arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/95 to-background -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 rounded-full blur-3xl opacity-50 -z-20"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            DEĞERLENDİRMELER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Profesyonel</span> Görüşler
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-3xl mx-auto">
            Beraber çalıştığım iş ortaklarım ve akademisyenlerin görüşleri.
          </p>
        </div>
        
        {/* Masaüstü için grid görünümü */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 hover:translate-y-[-5px]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute top-4 left-4 text-blue-400/20 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <FiMessageSquare size={60} />
              </div>
              
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/20 mr-4 group-hover:border-blue-400/40 transition-colors duration-300 bg-blue-500/10 flex items-center justify-center">
                    {testimonial.avatar ? (
                      <Image 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-center aspect-square"
                      />
                    ) : (
                      <FiUser size={24} className="text-blue-400/60" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-blue-400/80">{testimonial.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobil için carousel görünümü */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 shadow-lg overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-blue-400/20 opacity-20">
                <FiMessageSquare size={60} />
              </div>
              
              <div className="relative z-10">
                <p className="text-foreground/80 mb-6 italic">
                  &ldquo;{testimonials[activeIndex].content}&rdquo;
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-400/20 mr-4 bg-blue-500/10 flex items-center justify-center">
                    {testimonials[activeIndex].avatar ? (
                      <Image 
                        src={testimonials[activeIndex].avatar} 
                        alt={testimonials[activeIndex].name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover object-center aspect-square"
                      />
                    ) : (
                      <FiUser size={24} className="text-blue-400/60" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonials[activeIndex].name}</h4>
                    <p className="text-sm text-blue-400/80">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400/5 rounded-full blur-3xl"></div>
            </motion.div>
          </AnimatePresence>
          
          {/* Carousel kontrolleri */}
          <div className="flex justify-center mt-8 gap-4">
            <motion.button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-card/60 border border-blue-500/10 flex items-center justify-center text-foreground/70 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowLeft size={18} />
            </motion.button>
            
            <div className="flex items-center gap-2">
              {testimonials.map((testimonial: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-blue-400 w-4' : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <motion.button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-card/60 border border-blue-500/10 flex items-center justify-center text-foreground/70 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
} 