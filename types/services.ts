export interface Service {
  id: string;
  titleJa: string;
  titleEn: string;
  subtitleJa: string;
  subtitleEn: string;
  descriptionJa: string;
  descriptionEn: string;
  aboutJa: string[];
  aboutEn: string[];
  features: {
    ja: ServiceFeature[];
    en: ServiceFeature[];
  };
  technologies: string[];
  process: {
    ja: ProcessStep[];
    en: ProcessStep[];
  };
  category: 'ai' | 'web3';
  featured?: boolean;
}

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}
