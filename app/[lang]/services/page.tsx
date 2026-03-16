import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ServiceCard from '@/components/ui/ServiceCard';
import {
  AIWorkflowIcon,
  AIProductIcon,
  AIDevIcon,
} from '@/components/ui/icons/ServiceIcons';
import { services } from '@/data/services';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'ai-workflow': <AIWorkflowIcon />,
  'ai-product': <AIProductIcon />,
  'ai-development': <AIDevIcon />,
};

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';
  return {
    title: isJa ? 'サービス - Nebula Infinity' : 'Services - Nebula Infinity',
    description: isJa
      ? 'ビジネスを加速する、AI Native ソリューション。業務フローへのAI統合、AI駆動プロダクト開発、AI活用開発の3つのソリューションで包括的なサービスを提供。'
      : 'AI Native Solutions that accelerate your business. Comprehensive services across AI workflow integration, AI-driven product development, and AI-powered development.',
  };
}

export default function ServicesPage({ params }: { params: { lang: Language } }) {
  const isJa = params.lang === 'ja';

  const serviceIds = ['ai-workflow', 'ai-product', 'ai-development'];

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
              ? 'ビジネスを加速する、AI Native ソリューション'
              : 'AI Native Solutions that accelerate your business'}
          </h1>
          <p className={styles.subtitle}>
            {isJa
              ? 'AI を活用した 3 つのソリューションで、お客様の課題を解決します。'
              : 'Three AI-powered solutions to solve your business challenges.'}
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
            {serviceIds.map(serviceId => {
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
