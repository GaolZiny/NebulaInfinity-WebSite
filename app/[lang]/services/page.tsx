import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import {
  AutomationWorkflowIcon,
  CustomAIAgentIcon,
  BlockchainSmartContractIcon,
  ApplicationDevelopmentIcon,
} from '@/components/ui/icons/ServiceIcons';
import { services } from '@/data/services';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'automation-workflow': <AutomationWorkflowIcon />,
  'custom-ai-agent': <CustomAIAgentIcon />,
  'blockchain-smart-contract': <BlockchainSmartContractIcon />,
  'application-development': <ApplicationDevelopmentIcon />,
};

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';
  return {
    title: isJa ? 'サービス - Nebula Infinity' : 'Services - Nebula Infinity',
    description: isJa
      ? 'ビジネスを加速する、AI × Web3.0 ソリューション。自動化ワークフロー、AIエージェント、ブロックチェーン開発、アプリケーション開発の4領域で包括的なサービスを提供。'
      : 'AI × Web3.0 solutions that accelerate your business. Comprehensive services across automation workflows, AI agents, blockchain development, and application development.',
  };
}

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';

  // Row 1: two AI services (6col each)
  const row1Ids = ['automation-workflow', 'custom-ai-agent'];
  // Row 2: two Web3/mixed services (6col each)
  const row2Ids = ['blockchain-smart-contract', 'application-development'];

  const getFeatureStrings = (serviceId: string, lang: Language): string[] => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return [];
    const features = service.features[lang];
    return features.slice(0, 4).map(f => f.title);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? 'サービス' : 'Services'}</span>
          <h1 className={styles.title}>
            {isJa
              ? 'ビジネスを加速する、AI × Web3.0 ソリューション'
              : 'AI × Web3.0 solutions that accelerate your business'}
          </h1>
          <p className={styles.subtitle}>
            {isJa
              ? '自動化ワークフロー、AIエージェント、ブロックチェーン開発 — 4つの領域で、お客様の課題を解決します。'
              : 'Automation workflows, AI agents, blockchain development — solving your challenges across four core domains.'}
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <p className={styles.sectionIntro}>
            {isJa
              ? '業務整理から設計、実装、運用まで、一貫したサポートで確実に成果を届けます。'
              : 'From business analysis through design, implementation, and operations — we deliver results with end-to-end support.'}
          </p>
          <div className={styles.bentoGrid}>
            {/* Row 1: Two AI services — 6col each */}
            {row1Ids.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              if (!service) return null;
              return (
                <div key={service.id} className={styles.bentoRow1}>
                  <ServiceCard
                    id={service.id}
                    lang={params.lang}
                    title={isJa ? service.titleJa : service.titleEn}
                    description={isJa ? service.descriptionJa : service.descriptionEn}
                    features={getFeatureStrings(service.id, params.lang)}
                    icon={iconMap[service.id]}
                  />
                </div>
              );
            })}
            {/* Row 2: Two Web3/mixed services — 6col each */}
            {row2Ids.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              if (!service) return null;
              return (
                <div key={service.id} className={styles.bentoRow1}>
                  <ServiceCard
                    id={service.id}
                    lang={params.lang}
                    title={isJa ? service.titleJa : service.titleEn}
                    description={isJa ? service.descriptionJa : service.descriptionEn}
                    features={getFeatureStrings(service.id, params.lang)}
                    icon={iconMap[service.id]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>
                {isJa ? 'サービスについてご相談ください' : 'Discuss our services'}
              </h2>
              <p className={styles.ctaDescription}>
                {isJa
                  ? 'お客様のプロジェクトに最適なソリューションをご提案します。'
                  : 'We will propose the best solution for your project.'}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{isJa ? 'お問い合わせ' : 'Contact Us'}</Button>
              </Link>
              <Link href={`/${params.lang}/projects`}>
                <Button size="lg" variant="outline">
                  {isJa ? '実績を見る' : 'View Projects'}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
