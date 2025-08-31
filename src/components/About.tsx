'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiNodedotjs, SiExpress, SiTailwindcss, SiCss3, SiHtml5
} from 'react-icons/si';

const { SITE_CONFIG } = require('@/config/site.config.js');

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  // Yetenekler dizisi - Renkli ikonlarla
  const skills = [
    { name: 'Python', icon: require('react-icons/si').SiPython, color: '#3776AB' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Flutter', icon: require('react-icons/si').SiFlutter, color: '#02569B' },
    { name: 'Dart', icon: require('react-icons/si').SiDart, color: '#0175C2' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  ];
  
  // İstatistik verileri
  const stats = [
    { number: '7+', label: 'Yıl Deneyim' },
    { number: '50+', label: 'Proje' },
    { number: '20+', label: 'Mutlu Müşteri' }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="hakkimda" ref={ref}>
      {/* Yumuşak geçişli arka plan */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 -z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)'
        }}
      ></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-96 bg-blue-500/5 rounded-full blur-3xl -z-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-semibold tracking-widest uppercase mb-3">
            HAKKIMDA
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Beni</span> Tanıyın
          </h2>
          <p className="mt-4 text-foreground/70 text-lg max-w-3xl mx-auto">
            Deneyimim, yeteneklerim ve tutkularım. Modern web&apos;in sunduğu olanakları kullanarak yenilikçi ve etkileşimli çözümler üretiyorum.
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {/* Üst Kısım - Ana İçerik */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Sol Taraf - Ben Kimim? */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 h-full shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5">
              {/* Metalik Parlama Efekti */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              
              {/* Dekoratif arka plan efekti */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <h3 className="text-2xl font-bold mb-6 text-blue-400 relative inline-block">
                Ben Kimim?
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
              </h3>
              
              <p className="text-foreground/80 mb-8 text-sm sm:text-base leading-relaxed">
                {SITE_CONFIG.personal.longBio || 'Modern web teknolojileri ile yaratıcı ve kullanıcı dostu uygulamalar geliştiriyorum. Yenilikçi çözümler ve etkileşimli kullanıcı deneyimleri sunmak için tutkuyla çalışıyorum.'}
              </p>
              
              {/* İstatistikler */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={`stat-${index}`} 
                    className="text-center p-4 bg-blue-500/5 rounded-xl border border-blue-500/10 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/10"
                    whileHover={{ y: -5, scale: 1.03 }}
                  >
                    <div className="text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-sm text-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              {/* CV İndir Butonu */}
              <a href="#" className="block">
                <motion.button
                  className="group relative w-full px-6 py-3 overflow-hidden font-semibold text-blue-400 border border-blue-500/30 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-500/10 hover:border-blue-400/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload size={18} className="group-hover:animate-bounce" />
                  <span>CV İndir</span>
                  <div className="absolute inset-0 bg-blue-400/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </motion.button>
              </a>
            </div>
          </motion.div>
          
          {/* Sağ Taraf - Eğitim ve Yetenekler */}
          <div className="lg:col-span-2 space-y-8">
            {/* Eğitim Bilgisi */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 relative inline-block">
                  Eğitim
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                </h3>
                
                {/* Dekoratif arka plan efekti */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
                
                {SITE_CONFIG.personal.education.map((edu: any, index: number) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-6 pb-6 last:pb-0 border-l border-blue-400/20 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="absolute -left-1.5 top-1 w-3 h-3 bg-blue-400 rounded-full group-hover:scale-125 group-hover:shadow-glow-sm transition-all duration-300"></div>
                    <p className="font-bold text-blue-400 text-lg group-hover:text-blue-500 transition-colors duration-300">{edu.school}</p>
                    <p className="text-sm text-foreground/80 mb-1">{edu.degree}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-xs text-foreground/50">{edu.year}</p>
                      {edu.gpa && (
                        <p className="text-xs text-blue-400/80 font-semibold bg-blue-400/10 px-2 py-1 rounded-full">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* İş Tecrübesi */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-6 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5">
                <h3 className="text-xl font-bold mb-4 text-blue-400 relative inline-block">
                  İş Tecrübesi
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                </h3>
                
                {/* Dekoratif arka plan efekti */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl group-hover:bg-blue-400/10 transition-all duration-500"></div>
                
                <div className="space-y-3">
                  {SITE_CONFIG.experiences.filter((exp: any) => exp.type === 'work').slice(0, 3).map((experience: any, index: number) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-4 pb-3 last:pb-0 border-l border-green-400/20 group"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="absolute -left-1 top-1 w-2 h-2 bg-green-400 rounded-full group-hover:scale-125 transition-all duration-300"></div>
                      <p className="font-semibold text-green-400 text-sm group-hover:text-green-300 transition-colors duration-300">{experience.title}</p>
                      <p className="text-xs text-foreground/70">{experience.company}</p>
                      <p className="text-xs text-foreground/50">{experience.date}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          </div>

          {/* Alt Kısım - Ana Yeteneklerim (Tam Genişlik) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full"
          >
            <div className="group relative bg-card/60 backdrop-blur-sm rounded-2xl border border-blue-500/10 p-8 lg:p-12 shadow-lg overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:shadow-xl hover:shadow-blue-500/5">
              <div className="text-center mb-8">
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-400 relative inline-block">
                  Ana Yeteneklerim
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"></span>
                </h3>
                <p className="mt-4 text-foreground/70 text-lg max-w-2xl mx-auto">
                  Yazılım geliştirme sürecinde kullandığım teknolojiler ve uzmanlık alanlarım
                </p>
              </div>
              
              {/* Dekoratif arka plan efektleri */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-6 lg:gap-8 justify-items-center">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center gap-3 text-center group/skill"
                    whileHover={{ scale: 1.1, y: -10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center bg-card/70 border border-blue-500/10 hover:border-blue-400/30 transition-all duration-300 group-hover/skill:shadow-lg"
                      style={{ boxShadow: `0 0 20px ${skill.color}20` }}
                    >
                      <skill.icon 
                        className="h-10 w-10 lg:h-12 lg:w-12 transition-all duration-300 group-hover/skill:scale-110"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <span className="text-sm lg:text-base font-medium text-foreground/80 hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              {/* Daha fazla yetenek butonu */}
              <div className="mt-12 text-center">
                <motion.button
                  onClick={() => {
                    const skillsSection = document.getElementById('teknolojiler');
                    if (skillsSection) {
                      skillsSection.scrollIntoView({ behavior: 'smooth' });
                      const url = new URL(window.location.href);
                      url.searchParams.set('showSkills', 'true');
                      window.history.pushState({}, '', url);
                      window.dispatchEvent(new CustomEvent('showSkillsDetail'));
                    }
                  }}
                  className="group inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 text-blue-400 hover:from-blue-500/20 hover:to-blue-600/20 transition-all duration-300 overflow-hidden relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 font-semibold">Tüm Yeteneklerim</span>
                  <FiArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 