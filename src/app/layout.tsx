import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import Footer from '@/components/Footer';
import ParallaxBackground from '@/components/ui/ParallaxBackground';
import { Providers } from '@/components/Providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

const { SITE_CONFIG } = require('@/config/site.config.js');

export const metadata: Metadata = {
  title: SITE_CONFIG.metadata.title,
  description: SITE_CONFIG.metadata.description,
  keywords: ['frontend', 'developer', 'react', 'nextjs', 'portfolio'],
  authors: [{ name: SITE_CONFIG.personal.name }],
  creator: SITE_CONFIG.personal.name,
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: SITE_CONFIG.site.url,
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    siteName: SITE_CONFIG.metadata.title,
    images: [
      {
        url: `/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.metadata.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.metadata.title,
    description: SITE_CONFIG.metadata.description,
    creator: '@kaankoc_dev',
    images: [`/images/og-image.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} custom-scrollbar min-h-screen relative bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        <Providers>
          {/* Animated Background */}
          <ParallaxBackground />
          
          
          
          {/* Main Content */}
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        
        {/* Preloader (Optional) */}
        <div id="preloader" className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-4 border-r-primary border-t-transparent border-b-transparent border-l-transparent animate-spin-slow"></div>
          </div>
        </div>
        
        {/* Preloader Script */}
        <script dangerouslySetInnerHTML={{ 
          __html: `
            window.addEventListener('load', () => {
              const preloader = document.getElementById('preloader');
              if (preloader) {
                setTimeout(() => {
                  preloader.style.opacity = '0';
                  preloader.style.transition = 'opacity 0.5s ease';
                  
                  setTimeout(() => {
                    preloader.style.display = 'none';
                  }, 500);
                }, 500);
              }
            });
          `
        }} />
      </body>
    </html>
  );
}
