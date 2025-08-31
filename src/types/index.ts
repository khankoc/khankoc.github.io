// Genel tip tanımlamaları
export interface Personal {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  contacts: {
    email: string;
    phone: string;
    location: string;
  };
  stats: {
    experience: string;
    projects: string;
    clients: string;
  };
}

export interface Social {
  icon: string;
  url: string;
  label: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

export interface Experience {
  type: 'work' | 'education';
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

export interface Testimonial {
  name: string;
  position: string;
  content: string;
  avatar: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
    border: string;
    card: string;
  };
  fonts: {
    sans: string;
    mono: string;
  };
}

export interface SiteConfig {
  personal: Personal;
  socials: Social[];
  skills: string[];
  projects: Project[];
  experiences: Experience[];
  testimonials: Testimonial[];
  metadata: {
    title: string;
    description: string;
    ogImage: string;
    twitterHandle: string;
  };
  theme: ThemeConfig;
} 