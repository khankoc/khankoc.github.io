'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiExternalLink, FiChevronRight } from 'react-icons/fi';
import Link from 'next/link';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const ref = useRef<HTMLDivElement>(null);
  
  const certificates = SITE_CONFIG.personal.certificates;
  const featuredCertificates = certificates.slice(0, 4); // İlk 4 sertifikayı göster
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  const openModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const CertificateCard = ({ certificate }: { certificate: any }) => (
    <motion.div
      variants={itemVariants}
      className="group relative flex items-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-blue-500/10 transition-all duration-300 ease-in-out overflow-hidden hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/5"
      onClick={() => openModal(certificate)}
    >
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-400" />
      
      <div className="relative z-10 flex items-center w-full">
        <div className="w-12 h-12 relative flex-shrink-0">
          <Image 
            src={certificate.logo} 
            alt={certificate.issuer}
            width={48}
            height={48}
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <div className="ml-3 flex-1">
          <h3 className="text-base font-semibold text-foreground group-hover:text-blue-400 transition-colors duration-300">
            {certificate.name}
          </h3>
          
          <p className="mt-1 text-sm text-foreground/60">
            {certificate.issuer}
          </p>
          
          <div className="mt-2 flex items-center text-xs text-blue-400/80">
            <FiAward className="mr-1" size={12} />
            <span>{certificate.year}</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiExternalLink className="text-blue-400" size={16} />
      </div>
    </motion.div>
  );

  return (
    <section id="sertifikalar" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Yumuşak geçişli ve bütüncül arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }}
      ></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-500/5 rounded-full blur-3xl opacity-70 -z-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Mobil için başlık bölümü */}
        <div className="text-center mb-16 md:hidden">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              SERTİFİKALAR
            </p>
            <h2 className="text-4xl font-bold text-foreground leading-tight">
              Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Sertifikasyonlar</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              Sürekli öğrenme ve kendimi geliştirme tutkusuyla edindiğim profesyonel sertifikalarım. Güncel teknolojileri ve en iyi uygulamaları takip ederek becerilerimi sürekli genişletiyorum.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Desktop için başlık bölümü */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 hidden md:block"
          >
            <p className="text-blue-400 font-semibold tracking-widest uppercase">
              SERTİFİKALAR
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Profesyonel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Sertifikasyonlar</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Sürekli öğrenme ve kendimi geliştirme tutkusuyla edindiğim profesyonel sertifikalarım. Güncel teknolojileri ve en iyi uygulamaları takip ederek becerilerimi sürekli genişletiyorum.
            </p>
            
            {/* Desktop buton */}
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300"
              >
                <span>Tüm Sertifikalarımı Gör</span>
                <FiChevronRight />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-4"
          >
            {featuredCertificates.map((certificate: any, index: number) => (
              <CertificateCard key={index} certificate={certificate} />
            ))}
          </motion.div>
        </div>

        {/* Mobil buton - sertifikalardan sonra */}
        <div className="flex justify-center mt-12 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 text-blue-400 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300"
            >
              <span className="font-semibold">Tüm Sertifikalarımı Gör</span>
              <FiChevronRight />
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Tüm Sertifikalar Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-card/90 backdrop-blur-md rounded-2xl border border-blue-500/10 p-6 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Tüm Sertifikalarım</h3>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-blue-500/10 text-foreground/70 hover:text-blue-400 transition-colors"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {certificates.map((certificate: any, index: number) => (
                  <div 
                    key={index}
                    className="group relative flex items-center p-4 bg-background/50 rounded-xl border border-blue-500/10 transition-all duration-300 hover:border-blue-400/30"
                  >
                    <div className="w-16 h-16 relative flex-shrink-0">
                      <Image 
                        src={certificate.logo} 
                        alt={certificate.issuer}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h4 className="font-medium text-foreground text-lg">{certificate.name}</h4>
                      <p className="text-sm text-foreground/60 mt-1">{certificate.issuer}</p>
                      <div className="mt-2 flex items-center text-sm text-blue-400/80">
                        <FiAward className="mr-1" size={14} />
                        <span>{certificate.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
} 