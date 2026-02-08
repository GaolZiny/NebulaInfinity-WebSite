import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import {
  SmartContractIcon,
  AIAgentIcon,
  AIWorkflowIcon,
  AIApplicationsIcon,
  BlockchainDevelopmentIcon,
} from '@/components/ui/icons/ServiceIcons';
import { services } from '@/data/services';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'smart-contract': <SmartContractIcon />,
  'ai-agent-development': <AIAgentIcon />,
  'ai-workflow-automation': <AIWorkflowIcon />,
  'ai-applications': <AIApplicationsIcon />,
  'blockchain-development': <BlockchainDevelopmentIcon />,
};

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  return {
    title: params.lang === 'ja' ? 'サービス - Nebula Infinity' : 'Services - Nebula Infinity',
    description: params.lang === 'ja' 
      ? 'AIとWeb3で、次を構築する。AI自動化ワークフロー、AIエージェント開発、Web3.0アプリケーション開発など、包括的なサービスを提供。'
      : 'Build the next with AI & Web3. Comprehensive services including AI workflow automation, AI agent development, and Web3.0 application development.',
  };
}

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';

  // Row 1: two primary services (6col each)
  const row1Ids = ['ai-workflow-automation', 'ai-agent-development'];
  // Row 2: three services (4col each)
  const row2Ids = ['ai-applications', 'blockchain-development', 'smart-contract'];

  // Get simple feature strings for card display
  const getFeatureStrings = (serviceId: string, lang: Language): string[] => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return [];
    const features = service.features[lang];
    // Row 1 cards are larger, show more features
    const limit = row1Ids.includes(serviceId) ? 4 : 3;
    return features.slice(0, limit).map(f => f.title);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? 'サービス' : 'Services'}</span>
          <h1 className={styles.title}>
            {isJa ? 'AIとWeb3で、次を構築する' : 'Build the next with AI & Web3'}
          </h1>
          <p className={styles.subtitle}>
            {isJa
              ? 'スマートコントラクト開発からAIエージェント構築まで、最先端技術で貴社のプロジェクトを成功に導きます。'
              : 'From smart contract development to AI agent creation, we guide your project to success with cutting-edge technology.'}
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.bentoGrid}>
            {/* Row 1: Two primary services — 6col each */}
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
            {/* Row 2: Three services — 4col each */}
            {row2Ids.map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              if (!service) return null;
              return (
                <div key={service.id} className={styles.bentoRow2}>
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
                <Button size="lg">{isJa ? 'お問い合わせ' : 'Contact'}</Button>
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
