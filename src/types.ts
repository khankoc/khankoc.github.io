export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
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
  avatar: string;
  content: string;
} 