'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Define a Project interface
interface Project {
  name: string;
  description: string;
  image?: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 5; // 5 derece max dönüş
    const rotateY = ((centerX - x) / centerX) * 5; // 5 derece max dönüş
    
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-full rounded-xl overflow-hidden glass"
      style={{
        transformStyle: 'preserve-3d',
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'none' : 'transform 0.3s ease-out',
      }}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Proje Görseli */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || '/project-placeholder.jpg'}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>
      
      {/* Proje Bilgileri */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-text-secondary mb-4">{project.description}</p>
        
        {/* Teknoloji Etiketleri */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Bağlantılar */}
        <div className="flex gap-4 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
          
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors"
            >
              <FaExternalLinkAlt />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
      
      {/* Hover Efekti - Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent"
        animate={{ 
          borderColor: isHovered ? 'rgba(59, 130, 246, 0.5)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px 2px rgba(59, 130, 246, 0.3)' : 'none'
        }}
      />
    </motion.div>
  );
} 