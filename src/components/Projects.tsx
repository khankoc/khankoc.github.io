'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isAllProjectsModalOpen, setIsAllProjectsModalOpen] = useState(false);
  
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

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const openAllProjectsModal = () => {
    setIsAllProjectsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeAllProjectsModal = () => {
    setIsAllProjectsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projeler" className="relative py-24 sm:py-32 overflow-hidden" ref={ref}>
      {/* Yumuşak geçişli ve bütüncül arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/95 -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
        }}
      ></div>
      <div className="absolute top-1/3 left-1/4 w-[150%] h-[120%] bg-blue-500/5 rounded-full blur-3xl opacity-60 -z-20"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            PROJELERİM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Öne Çıkan</span> Projelerim
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-3xl mx-auto">
            Tamamladığım bazı önemli projeler. Her projede modern teknolojiler kullanarak en iyi kullanıcı deneyimini sağlamayı hedefliyorum.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SITE_CONFIG.projects.slice(0, 3).map((project: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 overflow-hidden shadow-lg transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.name.includes("TEKNOFEST") ? "/images/teknofest-becore.jpg" : 
                       project.name.includes("Transkripsiyon") ? "/images/languageai.jpeg" : 
                       (project.image || '/images/placeholder-project.jpg')}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70" />
                
                {/* Overlay with subtle blur effect on hover */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    />
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.slice(0, 3).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 transition-all duration-300 hover:bg-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-blue-400 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.button
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Detaylar</span>
                    <FiArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
              
              {/* Decorative gradient effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={openAllProjectsModal}
              className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 overflow-hidden relative"
            >
              <span className="relative z-10">Tüm Projeleri Görüntüle</span>
              <FiArrowRight 
                size={18} 
                className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
              />
              <div className="absolute inset-0 bg-blue-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Proje Detay Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
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
              className="bg-card/90 backdrop-blur-md rounded-2xl border border-blue-500/10 max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Sticky Header */}
              <div className="flex justify-between items-center p-6 border-b border-blue-500/10 bg-card/95 backdrop-blur-sm sticky top-0 z-10">
                <h3 className="text-2xl font-bold text-foreground">Proje Detayları</h3>
                <button 
                  onClick={closeModal}
                  className="p-2 rounded-full hover:bg-blue-500/10 text-foreground/70 hover:text-blue-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto flex-1">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Proje Resmi */}
                  <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
                    <Image
                      src={selectedProject.name.includes("TEKNOFEST") ? "/images/teknofest-becore.jpg" : 
                           selectedProject.name.includes("Transkripsiyon") ? "/images/languageai.jpeg" : 
                           selectedProject.image}
                      alt={selectedProject.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  {/* Proje Bilgileri */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-blue-400 font-medium">{selectedProject.category}</span>
                      <h4 className="text-xl font-bold text-foreground mt-1">{selectedProject.name}</h4>
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-3">Kullanılan Teknolojiler:</h5>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies?.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {selectedProject.features && (
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-3">Öne Çıkan Özellikler:</h5>
                        <ul className="space-y-2">
                          {selectedProject.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-start gap-2 text-foreground/70">
                              <span className="text-blue-400 mt-1">•</span>
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tüm Projeler ve Tecrübeler Modal */}
      <AnimatePresence>
        {isAllProjectsModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeAllProjectsModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-card/90 backdrop-blur-md rounded-2xl border border-blue-500/10 max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-blue-500/10 bg-card/95 backdrop-blur-sm sticky top-0 z-10">
                <h3 className="text-2xl font-bold text-foreground">Tüm Projelerim</h3>
                <button 
                  onClick={closeAllProjectsModal}
                  className="p-2 rounded-full hover:bg-blue-500/10 text-foreground/70 hover:text-blue-400 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6 overflow-y-auto flex-1">
                <div className="space-y-4">
                      {SITE_CONFIG.projects.map((project: any, index: number) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-card/40 backdrop-blur-sm rounded-xl border border-blue-500/10 p-6 hover:border-blue-400/30 transition-all duration-300"
                        >
                          <div className="flex flex-col md:flex-row gap-6">
                            {/* Project Image */}
                            <div className="md:w-48 h-32 relative rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={project.name.includes("TEKNOFEST") ? "/images/teknofest-becore.jpg" : 
                                     project.name.includes("Transkripsiyon") ? "/images/languageai.jpeg" : 
                                     (project.image || '/images/placeholder-project.jpg')}
                                alt={project.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            
                            {/* Project Info */}
                            <div className="flex-1 space-y-3">
                              <div>
                                <span className="text-sm text-blue-400 font-medium">{project.category}</span>
                                <h5 className="text-lg font-bold text-foreground mt-1">{project.name}</h5>
                              </div>
                              
                              <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                              </p>
                              
                              <div className="flex flex-wrap gap-2">
                                {project.technologies?.slice(0, 5).map((tech: string, techIndex: number) => (
                                  <span
                                    key={techIndex}
                                    className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                                  >
                                    {tech}
                                  </span>
                                ))}
                                {project.technologies?.length > 5 && (
                                  <span className="px-2 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                    +{project.technologies.length - 5} daha
                                  </span>
                                )}
                              </div>
                              
                              <button
                                onClick={() => {
                                  closeAllProjectsModal();
                                  openModal(project);
                                }}
                                className="text-blue-400 hover:text-blue-500 text-sm font-medium transition-colors flex items-center gap-1"
                              >
                                Detayları Görüntüle <FiArrowRight size={14} />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}