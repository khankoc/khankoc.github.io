'use client';

import { useRef, useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble, FaDiscord, FaYoutube, FaTwitch, FaMedium, FaFacebook, FaPinterest, FaBehance, FaStackOverflow, FaReddit, FaTiktok, FaSteam } from 'react-icons/fa';
import { FaXTwitter, FaDev, FaCodepen } from 'react-icons/fa6';
import { FaCode, FaAtom, FaLaptopCode, FaChartLine, FaPalette, FaBrain, FaDatabase, FaServer, FaReact, FaNodeJs, FaJs, FaDesktop, FaMobileAlt, FaRobot, FaGamepad } from 'react-icons/fa';

const { SITE_CONFIG } = require('@/config/site.config.js');

// Sosyal medya ikonları için mapping
const socialIcons: { [key: string]: any } = {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaDribbble,
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaMedium,
  FaFacebook,
  FaPinterest,
  FaBehance,
  FaStackOverflow,
  FaReddit,
  FaTiktok,
  FaDev,
  FaCodepen,
  FaSteam
};

// Title ikonları için mapping - içerikle uyumlu
const titleIconMap: { [key: string]: any } = {
  "Frontend Developer": FaReact,
  "UI/UX Designer": FaPalette,
  "Web Developer": FaCode,
  "JavaScript Developer": FaJs,
  "React Developer": FaReact,
  "NodeJS Developer": FaNodeJs,
  "Full Stack Developer": FaLaptopCode,
  "Mobile Developer": FaMobileAlt,
  "Software Engineer": FaCode,
  "Nuclear Engineer": FaAtom,
  "AI Engineer": FaRobot,
  "Data Scientist": FaDatabase,
  "UX Researcher": FaChartLine,
  "Product Designer": FaDesktop,
  "Blockchain Developer": FaServer,
  "Game Developer": FaGamepad
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const contactBtnControls = useAnimation();
  const socialIconsControls = useAnimation();
  
  // Yazı silme/yazma efekti için state
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [activeIconIndex, setActiveIconIndex] = useState(-1);
  
  // Yazı silme/yazma efekti
  useEffect(() => {
    const typeSpeed = 100; // Yazma hızı (ms)
    const deleteSpeed = 50; // Silme hızı (ms)
    const delayBetween = 2000; // Yazılar arası bekleme süresi (ms)
    
    const currentTitle = SITE_CONFIG.personal.titles[titleIndex];
    
    if (!isDeleting && displayText === currentTitle) {
      // Yazı tamamlandı, bekle ve silmeye başla
      setTimeout(() => setIsDeleting(true), delayBetween);
    } else if (isDeleting && displayText === '') {
      // Silme tamamlandı, sonraki title'a geç
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % SITE_CONFIG.personal.titles.length);
    } else {
      const timeout = setTimeout(() => {
        if (isDeleting) {
          // Silme işlemi
          setDisplayText(currentTitle.substring(0, displayText.length - 1));
        } else {
          // Yazma işlemi
          setDisplayText(currentTitle.substring(0, displayText.length + 1));
        }
      }, isDeleting ? deleteSpeed : typeSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, titleIndex]);
  
  // İmleç animasyonu
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Sosyal medya ikonları animasyonu - daha az sıklıkta ve daha uzun bekleme
  useEffect(() => {
    let isMounted = true;
    
    const animateSocialIcons = async () => {
      if (!isMounted) return;
      
      const socials = SITE_CONFIG.socials;
      
      // Tüm animasyon döngüsü
      const runAnimationCycle = async () => {
        // Her bir ikonu sırayla aktifleştir
        for (let i = 0; i < socials.length; i++) {
          if (!isMounted) return;
          
          // İkonu aktifleştir
          setActiveIconIndex(i);
          
          // 0.2 saniye bekle (daha yavaş hover)
          await new Promise(resolve => setTimeout(resolve, 200));
          
          // İkonu deaktifleştir
          setActiveIconIndex(-1);
          
          // Sonraki ikona geçmeden önce daha uzun bekleme
          if (i < socials.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 300));
          }
        }
        
        // Tüm ikonlar hover olduktan sonra 30 saniye bekle
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Tekrar başlat
        if (isMounted) {
          runAnimationCycle();
        }
      };
      
      // İlk yüklemede 5 saniye bekle, sonra animasyon başlat
      setTimeout(() => {
        if (isMounted) {
          runAnimationCycle();
        }
      }, 5000);
    };
    
    // Animasyonu başlat
    animateSocialIcons();
    
    // Cleanup
    return () => {
      isMounted = false;
    };
  }, []);
  
  return (
    <div ref={ref} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16 md:pt-12">
      {/* Ana içerik */}
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-start md:justify-center gap-8 md:gap-16 lg:gap-20">
          {/* Profil fotoğrafı - Daha büyük ve daha az efektli */}
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-2xl border-2 border-blue-500/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Ana fotoğraf */}
            <Image
              src={SITE_CONFIG.personal.avatar}
              alt={SITE_CONFIG.personal.name}
              width={400}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
            
            {/* Metalik kenar efekti - Üst */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{ 
                left: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear",
                repeatDelay: 1
              }}
            />
            
            {/* Metalik kenar efekti - Sağ */}
            <motion.div 
              className="absolute top-0 bottom-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              animate={{ 
                top: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear",
                repeatDelay: 1,
                delay: 0.75
              }}
            />
            
            {/* Metalik kenar efekti - Alt */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              animate={{ 
                left: ["100%", "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear",
                repeatDelay: 1,
                delay: 1.5
              }}
            />
            
            {/* Metalik kenar efekti - Sol */}
            <motion.div 
              className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent"
              animate={{ 
                top: ["100%", "-100%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "linear",
                repeatDelay: 1,
                delay: 2.25
              }}
            />
            
            {/* Hafif overlay - Renge uyumlu */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/10"></div>
            
            {/* Hafif glow efekti */}
            <div className="absolute inset-0 shadow-inner shadow-blue-400/20"></div>
          </motion.div>
          
          {/* İçerik - Daha büyük */}
          <motion.div 
            className="flex flex-col items-center md:items-start max-w-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* İsim - Metalik efekt */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-2"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              Kaan Koç
            </motion.h1>
            
            {/* Title - Yazılıp silinen */}
            <motion.div 
              className="flex items-center gap-3 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div className="text-3xl text-blue-400 filter drop-shadow-lg">
                {titleIconMap[SITE_CONFIG.personal.titles[titleIndex]] 
                  ? React.createElement(titleIconMap[SITE_CONFIG.personal.titles[titleIndex]])
                  : <FaCode />}
              </motion.div>
              <span className="text-2xl md:text-3xl font-medium text-foreground">
                {displayText}
                <span className={`ml-1 inline-block w-0.5 h-6 bg-blue-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></span>
              </span>
            </motion.div>
            
            {/* Açıklama */}
            <motion.p 
              className="text-lg text-foreground/70 max-w-lg mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Nükleer enerji mühendisiyim; karmaşık sorunlara yalın çözümler üretmekte yetkinim. İleri düzey Python bilgimle, web tasarımı, masaüstü yazılımlar ve alışılmışın dışında sistemler geliştiriyorum. Kod yazmak benim için sadece bir beceri değil, düşünme biçimi. Hedefim, her projede güvenilir, işlevsel ve kullanıcı odaklı çözümler sunmak.
            </motion.p>
            
            {/* Butonlar - Cam ve Metalik efekt */}
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              {/* Projelerimi Gör butonu */}
              <motion.a
                href="#projeler"
                className="group relative px-8 py-3 overflow-hidden font-medium rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11 1H6v8l4-2 4 2V6z" clipRule="evenodd" />
                  </svg>
                  Projelerimi Gör
                </span>
                <div className="absolute inset-0 bg-blue-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.a>
              
              {/* İletişime Geç butonu */}
              <motion.a 
                href="#iletisim" 
                className="group relative px-8 py-3 overflow-hidden font-medium rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  İletişime Geç
                </span>
                <div className="absolute inset-0 bg-blue-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </motion.a>
            </motion.div>
            
            {/* Sosyal Medya İkonları - Daha az parlayan */}
            <motion.div 
              className="flex gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              {SITE_CONFIG.socials.map((social: any, index: number) => {
                const SocialIcon = socialIcons[social.icon];
                
                if (!SocialIcon) return null;
                
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-blue-500/5 flex items-center justify-center text-foreground/60 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 ${
                      activeIconIndex === index ? 'text-blue-400 scale-105' : ''
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <SocialIcon size={18} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator - Sadece tablet ve desktop'ta görünür */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span className="text-foreground/50 text-sm mb-2">Aşağı Kaydır</span>
        <motion.div 
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}