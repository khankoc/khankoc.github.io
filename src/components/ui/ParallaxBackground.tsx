'use client';

import { useEffect, useState } from 'react';

export default function AppleStyleBackground() {
  const [mounted, setMounted] = useState(false);
  
  // Bileşen yüklendikten sonra içeriği göster
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* En koyu temel arkaplan */}
      <div className="absolute inset-0" style={{ backgroundColor: '#000000' }} />
      
      {/* Daha koyu vignette efekti */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%, 
              rgba(0, 0, 0, 0.7) 0%, 
              rgba(0, 0, 0, 0.98) 100%
            )
          `
        }}
      />
      
      {/* Daha düşük opaklıklı mor ışık */}
      <div 
        className="absolute"
        style={{
          width: '120%',
          height: '120%',
          top: '-10%',
          left: '-10%',
          background: 'radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.25) 0%, rgba(124, 58, 237, 0) 50%)',
          animation: 'floatFaster 10s ease-in-out infinite alternate'
        }}
      />
      
      {/* Daha düşük opaklıklı mavi ışık */}
      <div 
        className="absolute"
        style={{
          width: '150%',
          height: '150%',
          top: '-25%',
          right: '-25%',
          background: 'radial-gradient(circle at 70% 40%, rgba(37, 99, 235, 0.10) 0%, rgba(37, 99, 235, 0) 60%)',
          animation: 'floatFaster 12s ease-in-out infinite alternate-reverse'
        }}
      />
      
      {/* Daha düşük opaklıklı turuncu ışık */}
      <div 
        className="absolute"
        style={{
          width: '140%',
          height: '140%',
          bottom: '-20%',
          left: '-20%',
          background: 'radial-gradient(circle at 30% 70%, rgba(234, 88, 12, 0.10) 0%, rgba(234, 88, 12, 0) 55%)',
          animation: 'floatFaster 9s ease-in-out infinite'
        }}
      />
      
      {/* Daha düşük opaklıklı yeşil ışık */}
      <div 
        className="absolute"
        style={{
          width: '130%',
          height: '130%',
          bottom: '-15%',
          right: '-15%',
          background: 'radial-gradient(circle at 70% 60%, rgba(5, 150, 105, 0.10) 0%, rgba(5, 150, 105, 0) 50%)',
          animation: 'floatFaster 11s ease-in-out infinite'
        }}
      />
      
      {/* Daha düşük opaklıklı renk değişimi */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(109, 40, 217, 0.08) 0%, rgba(221, 96, 15, 0.08) 100%)',
          animation: 'fasterColorShift 8s linear infinite'
        }}
      />
      
      {/* Daha koyu noise doku */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.5\' numOctaves=\'1\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          opacity: 0.02,
          mixBlendMode: 'overlay'
        }}
      />
      
      {/* Animasyonlar */}
      <style jsx>{`
        @keyframes floatFaster {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(1.5%, 1%) scale(1.03); }
          66% { transform: translate(-1%, 1.5%) scale(0.98); }
          100% { transform: translate(-1.5%, -1.5%) scale(1.02); }
        }
        
        @keyframes fasterColorShift {
          0% { opacity: 0.06; filter: hue-rotate(0deg); }
          25% { opacity: 0.1; filter: hue-rotate(90deg); }
          50% { opacity: 0.08; filter: hue-rotate(180deg); }
          75% { opacity: 0.1; filter: hue-rotate(270deg); }
          100% { opacity: 0.06; filter: hue-rotate(360deg); }
        }
      `}</style>
    </div>
  );
} 