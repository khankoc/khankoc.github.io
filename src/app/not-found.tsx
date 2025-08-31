'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowLeft, FiHome } from 'react-icons/fi';

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Canvas boyutunu tam ekrana ayarla
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Matrix efekti için karakterler
    const characters = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    
    // Her sütun için Y pozisyonunu tut
    const drops: number[] = Array(Math.floor(columns)).fill(1);
    
    // Matrix efekti
    const drawMatrix = () => {
      // Yarı saydam siyah ile temizle (eski karakterleri soluklaştırır)
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Mavi renk tonu
      ctx.fillStyle = '#2563eb';
      ctx.font = `${fontSize}px monospace`;
      
      // Her sütun için karakter çiz
      for (let i = 0; i < drops.length; i++) {
        // Rastgele bir karakter seç
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        
        // Karakteri çiz
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        // Y pozisyonunu güncelle
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    };
    
    // Animasyon
    const interval = setInterval(drawMatrix, 50);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Matrix arka planı */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      {/* İçerik */}
      <div className="relative z-10 text-center p-6 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 */}
          <motion.h1 
            className="text-8xl md:text-9xl font-bold text-gradient"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 1, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2
            }}
          >
            404
          </motion.h1>
          
          {/* Mesaj */}
          <div className="space-y-4">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Hata! Sayfa Bulunamadı
            </motion.h2>
            
            <motion.p
              className="text-foreground/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
            </motion.p>
          </div>
          
          {/* Butonlar */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Link href="/">
              <motion.button
                className="button-primary flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-cursor-text="Ana Sayfa"
              >
                <FiHome size={18} />
                <span>Ana Sayfaya Dön</span>
              </motion.button>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="button-outline flex items-center gap-2"
              data-cursor-text="Geri Dön"
            >
              <FiArrowLeft size={18} />
              <span>Geri Dön</span>
            </button>
          </motion.div>
        </motion.div>
        
        {/* Dekoratif elementler */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-custom" />
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-pulse-custom" />
      </div>
    </div>
  );
} 