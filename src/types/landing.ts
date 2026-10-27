export interface RecoveryServiceItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  shortDesc: string;
  description: string;
  features: string[];
  metrics: string;
  iconName: string;
  popular?: boolean;
}

export interface IndustrySolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  suitableFor: string[];
  timeline: string;
  iconName: string;
}

export interface RecoveryProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface RecoveryCaseItem {
  id: string;
  title: string;
  client: string;
  category: 'hdd' | 'ssd' | 'server-raid' | 'ransomware' | 'mobile' | 'forensics';
  categoryLabel: string;
  device: string;
  summary: string;
  highlights: string[];
  impact: {
    metric: string;
    label: string;
  };
  restoredFiles?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  projectType: string;
}

export interface RecoveryDeviceOption {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  basePrice: number;
  priceEstimate: string;
  unit: string;
  suitable: string;
  timeEstimate: string;
  features: string[];
  iconName: string;
}

export interface RecoveryAddon {
  id: string;
  label: string;
  price: number;
  description: string;
}
