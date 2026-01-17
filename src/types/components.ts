// TypeScript interfaces for component props

export interface LayoutProps {
  title?: string;
  description?: string;
  image?: string;
}

export interface StatItem {
  number: string;
  label: string;
  ariaLabel: string;
}

export interface HeroProps {
  subtitle?: string;
  title?: string;
  description?: string;
  stats?: StatItem[];
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface SolutionsProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
}

export interface PortfolioItem {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioProps {
  title?: string;
  subtitle?: string;
  items?: PortfolioItem[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface TimelineProps {
  title?: string;
  subtitle?: string;
  events?: TimelineEvent[];
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  alt: string;
}

export interface TeamProps {
  title?: string;
  members?: TeamMember[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title?: string;
  items?: FAQItem[];
}

export interface ContactInfo {
  location: string;
  email: string;
  phone: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactProps {
  title?: string;
  description?: string[];
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  formAction?: string;
}
