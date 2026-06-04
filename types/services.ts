export type ServiceId = 'ai-workflow' | 'ai-application' | 'web3-blockchain';

export interface LocalizedString {
  ja: string;
  en: string;
}

export interface ServiceLineSummary {
  id: ServiceId;
  officialLine: string;
  title: LocalizedString;
  body: LocalizedString;
  fitBullets: {
    ja: string[];
    en: string[];
  };
  proofLine: LocalizedString;
  cta: LocalizedString;
}
