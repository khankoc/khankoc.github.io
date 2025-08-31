'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Scroll tespiti ve aktif bölüm belirleme - tamamen yeniden yazıldı
  useEffect(() => {
    // Scroll pozisyonu kontrolü için fonksiyon
    const handleScroll = () => {
      // Header'ın arkaplan değişimi için scroll tespiti
      setIsScrolled(window.scrollY > 10);
      
      // Aktif bölümü belirle
      updateActiveSection();
    };
    
    // Aktif bölümü belirleyen fonksiyon
    const updateActiveSection = () => {
      // Tüm bölümleri al
      const sections = Array.from(document.querySelectorAll('section[id]'));
      
      // Sayfanın en üstündeyse (Hero bölümü)
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }
      
      // Sayfanın en altındaysa (İletişim bölümü)
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      
      if (scrollHeight - (scrollTop + clientHeight) < 50) {
        const lastSection = sections[sections.length - 1];
        if (lastSection) {
          const id = lastSection.getAttribute('id');
          if (id) {
            setActiveSection(id);
            return;
          }
        }
      }
      
      // Ekranda görünür olan bölümü bul
      let visibleSection = '';
      
      // Ekranın ortasından geçen bölümü bul
      const viewportMiddle = window.scrollY + window.innerHeight / 2;
      
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = rect.bottom + window.scrollY;
        
        // Bölüm viewport'un ortasında mı?
        if (viewportMiddle >= sectionTop && viewportMiddle <= sectionBottom) {
          const id = section.getAttribute('id');
          if (id) {
            visibleSection = id;
            break;
          }
        }
      }
      
      // Eğer bir bölüm bulunduysa, aktif bölümü güncelle
      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    };
    
    // Scroll event listener'ı ekle
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // İlk yüklemede de çalıştır
    updateActiveSection();
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Mobil menü açıkken body scroll'u engelle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileMenuOpen]);
  
  // Ekran boyutu değiştiğinde mobil menüyü kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);
  
  // Sayfa dışına tıklandığında menüyü kapat
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Anasayfa linki için hero bölümüne git
    const targetHref = href === '#' ? '#hero' : href;
    
    // Hedef elementi bul ve smooth scroll yap
    const targetElement = document.querySelector(targetHref);
    if (targetElement) {
      const headerOffset = 80; // Header yüksekliği için offset
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // URL'i güvenli şekilde güncelle
      try {
        if (typeof window !== 'undefined' && window.history) {
          window.history.pushState(null, '', href);
        }
      } catch (error) {
        console.warn('URL güncellenirken hata oluştu:', error);
      }
      
      // Aktif bölümü güncelle
      const sectionId = href === '#' ? 'hero' : href.replace('#', '');
      setActiveSection(sectionId || 'hero');
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 sm:py-5
        !border-none !border-b-0 !outline-none !shadow-none
        ${isMobileMenuOpen
          ? 'bg-black/90 backdrop-blur-xl'
          : isScrolled
            ? 'bg-black bg-opacity-20 backdrop-blur-xl shadow-lg border-b border-blue-500/10'
            : 'bg-black bg-opacity-20 backdrop-blur-sm'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
    
          <Link href="/">
            <motion.div 
              className="flex items-center group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span 
                className="text-xl sm:text-2xl md:text-3xl font-black relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 neon-text"
                style={{ 
                  minWidth: 'fit-content', 
                  display: 'inline-block', 
                  overflow: 'visible',
                  whiteSpace: 'nowrap'
                }}
              >
                {SITE_CONFIG.site.shortName}
                <span className="absolute -inset-1 bg-blue-500/5 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </span>
              <span className="ml-2 text-sm sm:text-base md:text-lg text-foreground/60 font-normal group-hover:text-foreground/80 transition-all duration-300">
                / Software Developer
              </span>
            </motion.div>
          </Link>
          
          {/* Masaüstü Menü */}
          <nav className="hidden md:flex items-center space-x-1">
            {SITE_CONFIG.mainNav.map((item: any, index: number) => {
              // Anasayfa için özel kontrol
              const isActive = 
                (item.href === '#' && activeSection === 'hero') || 
                (item.href !== '#' && activeSection === item.href.replace('#', ''));
                
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={`relative px-4 py-2 rounded-full text-base transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'text-blue-400 font-medium' 
                        : 'text-foreground/70 hover:text-blue-400'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-blue-500/10 border border-blue-500/20 -z-10"
                        layoutId="activeNav"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">
                      {item.title}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></span>
                      )}
                    </span>
                  </a>
                </motion.div>
              );
            })}
          </nav>
          
          {/* Sağ Taraf Butonlar */}
          <div className="flex items-center space-x-3">
            {/* Mobil Menü Butonu */}
            <motion.button 
              className="block md:hidden p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white text-xl sm:text-2xl shadow-lg transition-colors duration-200 mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menüyü Aç/Kapat"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <FiX size={24} className="sm:w-7 sm:h-7" /> : <FiMenu size={24} className="sm:w-7 sm:h-7" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobil Menü */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 w-screen h-screen bg-black/95 backdrop-blur-xl z-[9999] md:hidden mobile-menu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo ve başlık */}
            <div className="w-full flex items-center justify-between px-4 sm:px-6 pt-6 sm:pt-8 pb-4">
              <div className="flex items-center">
                <span className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 neon-text select-none">{SITE_CONFIG.site.shortName}</span>
                <span className="ml-2 text-sm sm:text-base md:text-lg text-foreground/60 font-normal group-hover:text-foreground/80 transition-all duration-300">/ Software Developer</span>
              </div>
              <button
                className="p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/60 text-white text-xl sm:text-2xl shadow-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menüyü Kapat"
              >
                <FiX size={24} className="sm:w-7 sm:h-7" />
              </button>
            </div>
            <div className="flex-1 w-full h-full flex flex-col items-start pt-8 px-6">
              <motion.nav 
                className="flex flex-col w-full space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
              >
                {SITE_CONFIG.mainNav.map((item: any, index: number) => {
                  // Anasayfa için özel kontrol
                  const isActive = 
                    (item.href === '#' && activeSection === 'hero') || 
                    (item.href !== '#' && activeSection === item.href.replace('#', ''));
                    
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + index * 0.1, duration: 0.3 }}
                      className="w-full"
                    >
                      <a 
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className={`relative block text-center py-3 px-6 rounded-full text-lg transition-all duration-300 ${
                          isActive 
                            ? 'text-blue-400 font-medium bg-blue-500/10 border border-blue-500/20' 
                            : 'text-foreground/70 hover:text-blue-400 hover:bg-blue-500/5'
                        }`}
                      >
                        {item.title}
                      </a>
                    </motion.div>
                  );
                })}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}