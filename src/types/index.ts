export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  fallbackImage?: string;
  origin: string;
  description?: string;
  specifications?: Record<string, string>;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
