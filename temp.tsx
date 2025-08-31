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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {SITE_CONFIG.projects.slice(0, 4).map((project: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 overflow-hidden shadow-lg transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5 cursor-pointer"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openModal(project)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || '/images/placeholder-project.jpg'}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-70" />
                
                {/* Overlay with project links on hover */}
                <AnimatePresence>
                  {hoveredProject === index && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-blue-900/50 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      {project.links?.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-card/80 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="GitHub Repository"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiGithub size={20} />
                        </motion.a>
                      )}
                      
                      {project.links?.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 rounded-full bg-card/80 flex items-center justify-center text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Live Demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FiEye size={20} />
                        </motion.a>
                      )}
                    </motion.div>
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
                  
                  {project.links?.live && (
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        className="flex items-center gap-1 text-foreground/70 hover:text-blue-400 transition-colors"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="text-sm">Demo</span>
                        <FiExternalLink size={14} />
                      </motion.button>
                    </Link>
                  )}
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
            <Link href="#" className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 overflow-hidden relative">
              <span className="relative z-10">Tüm Projeleri Görüntüle</span>
              <FiArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-blue-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
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
              className="bg-card/90 backdrop-blur-md rounded-2xl border border-blue-500/10 p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
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
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Proje Resmi */}
                <div className="relative rounded-xl overflow-hidden h-64 md:h-80">
                  <Image
                    src={selectedProject.image}
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
                  
                  {selectedProject.links?.live && (
                    <Link
                      href={selectedProject.links.live}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-colors"
                    >
                      <FiExternalLink size={18} />
                      <span>Canlı Demo</span>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
