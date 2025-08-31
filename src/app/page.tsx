import { Suspense } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import dynamic from 'next/dynamic';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const { SITE_CONFIG } = require('@/config/site.config.js');

const Certificates = dynamic(() => import('@/components/Certificates'), { ssr: true });

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Hero />
        </Suspense>
      </section>
      
      {/* About Section */}
      <section id="hakkimda" className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
      </section>
      
      {/* Certificates Section */}
      <section id="sertifikalar" className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Certificates />
        </Suspense>
      </section>
      
      {/* Projects Section */}
      <section id="projeler" className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
      </section>
      
      {/* Testimonials Section */}
      <section id="referanslar" className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
      </section>
      
      {/* Contact Section */}
      <section id="iletisim" className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <Contact />
        </Suspense>
      </section>
    </>
  );
}
