'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // Sosyal medya ikonlarının bir subset'ini kullan
  const socialIcons: Record<string, React.ComponentType<any>> = {
    FaGithub,
    FaXTwitter,
    FaLinkedin, 
    FaInstagram,
    FaDribbble
  };
  
  // Sosyal medya glow renkleri
  const socialColors: Record<string, string> = {
    FaGithub: "#ffffff",
    FaXTwitter: "#ffffff", 
    FaLinkedin: "#0A66C2",
    FaInstagram: "#E4405F",
    FaDribbble: "#EA4C89"
  };
  
  const menuItems = SITE_CONFIG.mainNav;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="relative border-t border-blue-500/10 bg-background/50 py-12 sm:py-16">
      {/* Dekoratif arka plan efekti */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Logo ve Kısa Açıklama */}
          <div className="md:col-span-2 lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Link href="/" className="inline-block group">
                <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 relative">
                  {SITE_CONFIG.site.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 group-hover:w-full transition-all duration-300"></span>
                </div>
              </Link>
              <p className="mt-4 text-foreground/70 text-sm">
                {SITE_CONFIG.personal.bio.split('.')[0] + '.'}
              </p>
            </motion.div>
          </div>
          
          {/* Hızlı Linkler */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-base font-semibold text-blue-400 mb-4">
                Hızlı Linkler
              </h3>
              <ul className="space-y-2">
                {menuItems.map((link: any, index: number) => (
                  <li key={index}>
                    <motion.a 
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-foreground/70 hover:text-blue-400 transition-colors relative group flex items-center"
                      whileHover={{ x: 3 }}
                    >
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"></span>
                      {link.title}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
          
          {/* İletişim */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-base font-semibold text-blue-400 mb-4">
                İletişim
              </h3>
              <div className="space-y-3 text-sm">
                <motion.a 
                  href={`mailto:${SITE_CONFIG.personal.contacts.email}`}
                  className="flex items-center gap-2 text-foreground/70 hover:text-blue-400 transition-all duration-300 group"
                  whileHover={{ x: 3 }}
                >
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"></span>
                  {SITE_CONFIG.personal.contacts.email}
                </motion.a>
                
                <motion.a 
                  href={`tel:${SITE_CONFIG.personal.contacts.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-2 text-foreground/70 hover:text-blue-400 transition-all duration-300 group"
                  whileHover={{ x: 3 }}
                >
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"></span>
                  {SITE_CONFIG.personal.contacts.phone}
                </motion.a>
                
                <motion.p 
                  className="flex items-center gap-2 text-foreground/70"
                  whileHover={{ x: 3 }}
                >
                  {SITE_CONFIG.personal.contacts.location}
                </motion.p>
              </div>
            </motion.div>
          </div>
          
          {/* Sosyal Medya */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-base font-semibold text-blue-400 mb-4">
                Takip Et
              </h3>
              <div className="flex gap-5">
                {SITE_CONFIG.socials.slice(0, 5).map((social: any, index: number) => {
                  const SocialIcon = socialIcons[social.icon];
                  const iconColor = socialColors[social.icon] || "#3b82f6";
                  
                  return SocialIcon ? (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/70 transition-all duration-300 hover:text-blue-400"
                      aria-label={social.label}
                      style={{'--social-color': iconColor} as React.CSSProperties}
                      whileHover={{ 
                        y: -5,
                        filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SocialIcon size={24} />
                    </motion.a>
                  ) : null;
                })}
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Alt Kısım */}
        <motion.div 
          className="pt-8 mt-8 border-t border-blue-500/10 text-center sm:flex sm:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-foreground/50 mb-4 sm:mb-0">
            &copy; {currentYear} {SITE_CONFIG.personal.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex justify-center sm:justify-end space-x-6">
            <Link 
              href="/privacy"
              className="text-sm text-foreground/50 hover:text-blue-400 transition-colors relative group"
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"></span>
              Gizlilik Politikası
            </Link>
            <Link 
              href="/terms"
              className="text-sm text-foreground/50 hover:text-blue-400 transition-colors relative group"
            >
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-400/30 group-hover:w-full transition-all duration-300"></span>
              Kullanım Koşulları
            </Link>
          </div>
        </motion.div>
        
        {/* "Back to top" butonu */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute right-8 -top-6 w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
} 