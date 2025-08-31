'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck } from 'react-icons/fi';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Form gönderme simülasyonu
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      // Form sıfırlanmıyor, sadece başarı durumu true kalıyor
    }, 1500);
  };

  return (
    <section id="iletisim" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Yumuşak geçişli ve bütüncül arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-background/70 -z-10"
        style={{
          maskImage: 'linear-gradient(to top, transparent 0%, black 20%, black 100%)'
        }}
      ></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-96 bg-blue-500/5 rounded-full blur-3xl -z-20"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            İLETİŞİM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Benimle</span> İletişime Geçin
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-3xl mx-auto">
            Projeleriniz, iş birlikleri veya danışmak istediğiniz konularla ilgili benimle dilediğiniz zaman iletişime geçebilirsiniz. Size en kısa sürede dönüş sağlamaktan memnuniyet duyarım.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* İletişim Bilgileri */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">İletişim Bilgilerim</h3>
              <p className="text-foreground/70">
              Aşağıdaki bilgiler aracılığıyla doğrudan ulaşabilir ya da iletişim formunu doldurarak mesajınızı iletebilirsiniz.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">E-posta</h4>
                  <a href={`mailto:${SITE_CONFIG.personal.contacts.email}`} className="text-foreground/70 hover:text-blue-400 transition-colors">
                    {SITE_CONFIG.personal.contacts.email}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 transition-colors duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefon</h4>
                  <a href={`tel:${SITE_CONFIG.personal.contacts.phone}`} className="text-foreground/70 hover:text-blue-400 transition-colors">
                    {SITE_CONFIG.personal.contacts.phone}
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02, x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 transition-colors duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Konum</h4>
                  <p className="text-foreground/70">
                    {SITE_CONFIG.personal.contacts.location}
                  </p>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Sosyal medya bağlantıları kaldırıldı */}
          </motion.div>
          
          {/* İletişim Formu */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-6 md:p-8 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5">
              {/* Arka plan efekti */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              
              {/* Başarı mesajı overlay */}
              {isSubmitted && (
                <motion.div 
                  className="absolute inset-0 bg-background/98 backdrop-blur-lg rounded-2xl flex flex-col items-center justify-center z-50 border border-green-500/20 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: 'rgba(15, 23, 42, 0.98)' }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                    <FiCheck className="text-green-400 text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Mesajınız Gönderildi!</h3>
                  <p className="text-foreground/70 text-center max-w-sm">
                    En kısa sürede size geri dönüş yapacağım. Teşekkür ederim.
                  </p>
                </motion.div>
              )}
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Adınız
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-blue-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-foreground transition-all duration-300"
                        placeholder="Adınız Soyadınız"
                        required
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-posta Adresiniz
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-blue-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-foreground transition-all duration-300"
                        placeholder="email@example.com"
                        required
                      />
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mesajınız
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background/50 border border-blue-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 text-foreground transition-all duration-300"
                        placeholder="Mesajınızı buraya yazın..."
                        required
                      ></textarea>
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-md hover:bg-primary/80 transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSending}
                    >
                      {isSending ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Gönderiliyor...</span>
                        </>
                      ) : (
                        <>
                          <span>Mesaj Gönder</span>
                          <FiSend size={18} />
                        </>
                      )}
                    </motion.button>
                  </motion.div>
                </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}