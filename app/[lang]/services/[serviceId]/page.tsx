import { type Language } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { getServiceById, services } from '@/data/services';
import {
  AIWorkflowIcon,
  AIProductIcon,
  AIDevIcon,
} from '@/components/ui/icons/ServiceIcons';
import styles from './page.module.css';

const iconMap: Record<string, React.ReactNode> = {
  'ai-workflow': <AIWorkflowIcon />,
  'ai-product': <AIProductIcon />,
  'ai-development': <AIDevIcon />,
};

export async function generateStaticParams() {
  return services.map((service) => ({
    serviceId: service.id,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: Language; serviceId: string } 
}) {
  const service = getServiceById(params.serviceId);
  if (!service) return {};
  
  const title = params.lang === 'ja' ? service.titleJa : service.titleEn;
  const description = params.lang === 'ja' ? service.descriptionJa : service.descriptionEn;
  
  return {
    title: `${title} - Nebula Infinity`,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
    },
  };
}

export default function ServiceDetailPage({ 
  params 
}: { 
  params: { lang: Language; serviceId: string } 
}) {
  const service = getServiceById(params.serviceId);
  
  if (!service) {
    notFound();
  }

  const isJa = params.lang === 'ja';
  const title = isJa ? service.titleJa : service.titleEn;
  const subtitle = isJa ? service.subtitleJa : service.subtitleEn;
  const about = isJa ? service.aboutJa : service.aboutEn;
  const features = service.features[params.lang];
  const process = service.process[params.lang];

  return (
    <div className={styles.page}>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <div className="container">
          <Link href={`/${params.lang}`}>{isJa ? 'ホーム' : 'Home'}</Link>
          <span>/</span>
          <Link href={`/${params.lang}/services`}>{isJa ? 'サービス' : 'Services'}</Link>
          <span>/</span>
          <span aria-current="page">{title}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? 'サービス詳細' : 'Service Details'}</span>
          <div className={styles.iconLarge}>
            {iconMap[service.id]}
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg">{isJa ? 'お問い合わせ' : 'Contact Us'}</Button>
            </Link>
            <Link href={`/${params.lang}/projects`}>
              <Button size="lg" variant="outline">
                {isJa ? '実績を見る' : 'View Projects'}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>
              {isJa ? 'このサービスについて' : 'About this service'}
            </h2>
            {about.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {isJa ? '主な機能・特徴' : 'Key features'}
          </h2>
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <Card key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {isJa ? '使用技術・ツール' : 'Technologies & tools'}
          </h2>
          <div className={styles.techTags}>
            {service.technologies.map((tech, index) => (
              <span key={index} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            {isJa ? 'プロセス' : 'Process'}
          </h2>
          <div className={styles.timeline}>
            {process.map((step, index) => (
              <div key={index} className={styles.timelineStep}>
                <div className={styles.stepNumber}>{index + 1}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Projects Section */}
      <section className={styles.section}>
        <div className="container">
          <Card className={styles.relatedCard}>
            <div>
              <h2 className={styles.relatedTitle}>
                {isJa ? 'このサービスを使った実績' : 'Projects using this service'}
              </h2>
              <p className={styles.relatedDescription}>
                {isJa
                  ? '詳細は実績ページをご覧ください。'
                  : 'View our project portfolio for examples.'}
              </p>
            </div>
            <Link href={`/${params.lang}/projects`}>
              <Button variant="outline">
                {isJa ? '実績を見る' : 'View Projects'} →
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Bottom CTA Section */}
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
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">
                  {isJa ? 'すべてのサービス' : 'All Services'}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
