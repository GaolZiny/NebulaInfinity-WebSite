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
  Web3ConsultingIcon
} from '@/components/ui/icons/ServiceIcons';
import { services } from '@/data/services';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'smart-contract': <SmartContractIcon />,
  'ai-agent-development': <AIAgentIcon />,
  'ai-workflow-automation': <AIWorkflowIcon />,
  'ai-applications': <AIApplicationsIcon />,
  'blockchain-development': <BlockchainDevelopmentIcon />,
  'web3-consulting': <Web3ConsultingIcon />
};

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  return {
    title: params.lang === 'ja' ? 'サービス - Nebula Infinity' : 'Services - Nebula Infinity',
    description: params.lang === 'ja' 
      ? 'AIとWeb3で、次を構築する。スマートコントラクト開発、AIエージェント開発、ブロックチェーンアプリケーション開発など、包括的なサービスを提供。'
      : 'Build the next with AI & Web3. Comprehensive services including smart contract development, AI agent development, and blockchain application development.',
  };
}

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';
  
  const featuredService = services.find(s => s.featured);
  const otherServices = services.filter(s => !s.featured);

  // Get simple feature strings for card display
  const getFeatureStrings = (serviceId: string, lang: Language): string[] => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return [];
    
    const features = service.features[lang];
    return features.slice(0, serviceId === 'smart-contract' ? 5 : 4).map(f => f.title);
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
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {isJa ? '提供サービス' : 'Core services'}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? '設計から運用まで一貫して支えるサービスです。'
                : 'Comprehensive services from design through operations.'}
            </p>
          </div>
          <div className={styles.bentoGrid}>
            {featuredService && (
              <div className={styles.bentoFeatured}>
                <ServiceCard
                  id={featuredService.id}
                  lang={params.lang}
                  title={isJa ? featuredService.titleJa : featuredService.titleEn}
                  description={isJa ? featuredService.descriptionJa : featuredService.descriptionEn}
                  features={getFeatureStrings(featuredService.id, params.lang)}
                  icon={iconMap[featuredService.id]}
                  featured
                />
              </div>
            )}
            {/* AI Services Group */}
            {['ai-agent-development', 'ai-workflow-automation', 'ai-applications'].map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              if (!service) return null;
              const gridClass = serviceId === 'ai-applications' ? styles.bentoMedium : styles.bentoSmall;
              return (
                <div key={service.id} className={gridClass}>
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
            {/* Web3 Services Group */}
            {['blockchain-development', 'web3-consulting'].map(serviceId => {
              const service = services.find(s => s.id === serviceId);
              if (!service) return null;
              return (
                <div key={service.id} className={styles.bentoWide}>
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
