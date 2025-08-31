'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, 
  FaDocker, FaGitAlt, FaFigma, FaAws, FaPython,
  FaDatabase, FaMobile, FaCode, FaLaptopCode, FaServer
} from 'react-icons/fa';
import { 
  SiNextdotjs, SiTypescript, SiExpress, SiTailwindcss,
  SiMongodb, SiPostgresql, SiFlutter, SiDart, SiFirebase,
  SiVercel, SiLinux,
  SiPostman, SiJira, SiSlack, SiNotion, SiTrello
} from 'react-icons/si';

// Yetenek kategorileri
const SKILL_CATEGORIES = {
  frontend: {
    title: "Frontend Geliştirme",
    icon: FaLaptopCode,
    color: "#61DAFB",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB", level: 95 },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: 90 },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88 },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 95 },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 98 },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 95 },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 92 }
    ]
  },
  backend: {
    title: "Backend Geliştirme",
    icon: FaServer,
    color: "#339933",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933", level: 85 },
      { name: "Express", icon: SiExpress, color: "#ffffff", level: 80 },
      { name: "Python", icon: FaPython, color: "#3776AB", level: 92 },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 78 },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 82 }
    ]
  },
  mobile: {
    title: "Mobil Geliştirme",
    icon: FaMobile,
    color: "#02569B",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B", level: 88 },
      { name: "Dart", icon: SiDart, color: "#0175C2", level: 86 }
    ]
  },
  tools: {
    title: "Araçlar & Teknolojiler",
    icon: FaCode,
    color: "#FF9900",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
      { name: "Docker", icon: FaDocker, color: "#2496ED", level: 75 },
      { name: "AWS", icon: FaAws, color: "#FF9900", level: 70 },
      { name: "Vercel", icon: SiVercel, color: "#ffffff", level: 85 },
      { name: "Figma", icon: FaFigma, color: "#F24E1E", level: 80 },
      { name: "VS Code", icon: FaCode, color: "#007ACC", level: 95 },
      { name: "Postman", icon: SiPostman, color: "#FF6C37", level: 85 }
    ]
  }
};

const MAIN_SKILLS = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" }
];

type Skill = typeof MAIN_SKILLS[0];
type DetailedSkill = {
  name: string;
  icon: any;
  color: string;
  level: number;
};
type SkillCategory = {
  title: string;
  icon: any;
  color: string;
  skills: DetailedSkill[];
};

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

const SkillCard = ({ name, icon: Icon, color }: Skill) => (
          <motion.div
        variants={itemVariants}
        className="group relative flex flex-col items-center justify-center p-4 bg-card/60 backdrop-blur-sm rounded-xl border border-primary/10 transition-all duration-300 ease-in-out overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
        style={{ '--skill-color': color } as React.CSSProperties}
    >
        <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[var(--skill-color)]/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-400" />
        <div className="relative z-10 flex flex-col items-center">
            <Icon size={40} className="text-foreground/80 group-hover:text-[var(--skill-color)] transition-colors duration-300" />
            <span className="mt-3 text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{name}</span>
        </div>
          </motion.div>
);

const DetailedSkillCard = ({ name, icon: Icon, color, level }: DetailedSkill) => (
  <motion.div
    variants={itemVariants}
    className="group relative p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-primary/10 transition-all duration-300 ease-in-out overflow-hidden hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    style={{ '--skill-color': color } as React.CSSProperties}
  >
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-[var(--skill-color)]/20 rounded-full blur-2xl group-hover:w-32 group-hover:h-32 transition-all duration-400" />
    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-[var(--skill-color)]/10 rounded-lg">
          <Icon size={24} className="text-[var(--skill-color)]" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-foreground/60">{level}% Yetkinlik</p>
        </div>
      </div>
      
      <div className="w-full bg-foreground/10 rounded-full h-2">
        <motion.div
          className="h-2 rounded-full bg-gradient-to-r from-[var(--skill-color)] to-[var(--skill-color)]/80"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        />
      </div>
    </div>
  </motion.div>
);

const CategoryCard = ({ category, skills }: { category: SkillCategory, skills: DetailedSkill[] }) => (
  <motion.div
    variants={itemVariants}
    className="group relative p-8 bg-card/40 backdrop-blur-sm rounded-2xl border border-primary/10 transition-all duration-300 ease-in-out overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16" />
    
    <div className="relative z-10 mb-8">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-4 bg-primary/10 rounded-xl">
          <category.icon size={32} className="text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
          <p className="text-foreground/60">{skills.length} teknoloji</p>
        </div>
      </div>
    </div>
    
    <div className="grid gap-4">
      {skills.map((skill) => (
        <DetailedSkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </motion.div>
);

export default function Skills() {
    const [showDetailed, setShowDetailed] = useState(false);

    const handleToggleView = () => {
        console.log('Toggle view clicked, current state:', showDetailed);
        setShowDetailed(!showDetailed);
    };

    // URL parametresini kontrol et ve event listener ekle
    useEffect(() => {
        // Sayfa yüklendiğinde URL parametresini kontrol et
        const checkUrlParams = () => {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('showSkills') === 'true') {
                setShowDetailed(true);
                // URL'den parametreyi temizle
                urlParams.delete('showSkills');
                const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
                window.history.replaceState({}, '', newUrl);
            }
        };

        // Sayfa yüklendiğinde kontrol et
        checkUrlParams();

        // Custom event listener
        const handleExternalToggle = () => {
            console.log('External toggle event received');
            setShowDetailed(true);
        };

        // Event listeners
        window.addEventListener('showSkillsDetail', handleExternalToggle);
        window.addEventListener('popstate', checkUrlParams);
        
        return () => {
            window.removeEventListener('showSkillsDetail', handleExternalToggle);
            window.removeEventListener('popstate', checkUrlParams);
        };
    }, []);

    return (
        <section id="teknolojiler" className="relative py-24 sm:py-32 overflow-hidden">
            {/* Yumuşak geçişli ve bütüncül arka plan */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90 -z-10"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-blue-500/5 rounded-full blur-3xl opacity-70 -z-20"></div>

            <div className="container mx-auto px-4 relative z-10">
                {!showDetailed ? (
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <p className="text-primary font-semibold tracking-widest uppercase">
                                YETENEKLERİM
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                                Kullandığım <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Teknolojiler</span>
                            </h2>
                            <p className="text-foreground/70 text-lg">
                                Web ve mobil uygulamalar geliştirmek için modern ve güçlü teknolojilerden yararlanıyorum. İşte en sık kullandığım araçlar ve platformlar.
                            </p>
                            
                            {/* Debug için state görünümü */}
                            <div className="text-xs text-yellow-400 bg-yellow-400/10 p-2 rounded">
                                Debug: showDetailed = {showDetailed.toString()}
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                <motion.div
                                    className="inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button 
                                        onClick={() => {
                                            console.log('Skills butonuna tıklandı!');
                                            handleToggleView();
                                        }}
                                        data-skills-toggle
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300"
                                    >
                                        <span>Tüm Yeteneklerim</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </motion.div>
                                
                                <motion.div
                                    className="inline-block"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a href="#projeler" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-all duration-300">
                                        <span>Projelerimi Görüntüle</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4"
                        >
                            {MAIN_SKILLS.map((skill) => (
                                <SkillCard key={skill.name} {...skill} />
                            ))}
                        </motion.div>
                    </div>
                ) : (
                    <AnimatePresence>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -50 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="text-center mb-16">
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-primary font-semibold tracking-widest uppercase mb-4"
                                >
                                    TÜM YETENEKLERİM
                                </motion.p>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6"
                                >
                                    Detaylı <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Yetenek Haritası</span>
                                </motion.h2>
                                <motion.p 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-foreground/70 text-lg max-w-3xl mx-auto mb-8"
                                >
                                    Yazılım geliştirme sürecinin her aşamasında kullandığım teknolojiler ve yetkinlik seviyelerim. 
                                    Frontend&apos;den backend&apos;e, mobil geliştirmeden DevOps araçlarına kadar geniş bir yelpazede uzmanım.
                                </motion.p>
                                
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={handleToggleView}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    <span>Özet Görünümüne Dön</span>
                                </motion.button>
                            </div>

                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid lg:grid-cols-2 gap-8"
                            >
                                {Object.entries(SKILL_CATEGORIES).map(([key, category]) => (
                                    <CategoryCard 
                                        key={key} 
                                        category={category} 
                                        skills={category.skills} 
                                    />
                                ))}
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
        </section>
    );
} 