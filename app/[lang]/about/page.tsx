import { type Language } from '@/lib/i18n';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `${params.lang === 'ja' ? '会社概要' : 'About Us'} - Nebula Infinity`,
    description: t.about.subtitle,
  };
}

/* ─── SVG Icons ─── */
const CompanyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3 10h18" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const LocationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 21s-6-5.7-6-10a6 6 0 1 1 12 0c0 4.3-6 10-6 10z" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3.5 9h17M3.5 15h17" stroke="currentColor" strokeWidth="1.7" />
    <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const BusinessIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 5h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5z" stroke="currentColor" strokeWidth="1.7" />
    <path d="M4 5l3-3h10l3 3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M9 10h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const ClientsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M2.5 19.5c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    <path d="M17 12c2.8 0 5 2.2 5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const ProductIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M3 9h18" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="6" cy="6.5" r="0.75" fill="currentColor" />
    <circle cx="8.5" cy="6.5" r="0.75" fill="currentColor" />
    <circle cx="11" cy="6.5" r="0.75" fill="currentColor" />
  </svg>
);

const AIIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);



const MissionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const VisionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 5.5C7 5.5 2.7 8.7 1 12c1.7 3.3 6 6.5 11 6.5s9.3-3.2 11-6.5c-1.7-3.3-6-6.5-11-6.5z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const TechIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M9 3l-5 9 5 9M15 3l5 9-5 9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TransparencyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
    <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const OneStopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 12h16M4 12l4-4M4 12l4 4M20 12l-4-4M20 12l-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SecurityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2l8 4v6c0 5.25-3.5 9.74-8 11-4.5-1.26-8-5.75-8-11V6l8-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const valueIcons = [
  TechIcon,
  TransparencyIcon,
  OneStopIcon,
  SecurityIcon,
];

export default function AboutPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const companyItems = [
    { icon: CompanyIcon, label: t.about.company.nameLabel, value: t.about.company.name },
    { icon: LocationIcon, label: t.about.company.locationLabel, value: t.about.company.location },
    { icon: GlobeIcon, label: t.about.company.domainLabel, value: t.about.company.domain },
    { icon: BusinessIcon, label: t.about.company.businessLabel, value: t.about.company.business },
    { icon: ClientsIcon, label: t.about.company.clientsLabel, value: t.about.company.clients },
    { icon: ProductIcon, label: t.about.company.productsLabel, value: t.about.company.products },
  ];

  return (
    <div className={styles.page}>
      {/* ── Section 1: Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? '会社概要' : 'About Us'}</span>
          <h1 className={styles.heroTitle}>{t.about.title}</h1>
          <p className={styles.heroSubtitle}>{t.about.subtitle}</p>
        </div>
      </section>

      {/* ── Section 2: Company Overview ── */}
      <section className={styles.companySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.about.company.sectionTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.about.company.sectionSubtitle}</p>
          </div>
          <div className={styles.companyGrid}>
            {companyItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className={styles.companyCard}>
                  <span className={styles.companyCardIconWrap}>
                    <Icon className={styles.companyCardIcon} />
                  </span>
                  <div className={styles.companyCardContent}>
                    <span className={styles.companyCardLabel}>{item.label}</span>
                    <span className={styles.companyCardValue}>{item.value}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 3: What We Do (Domains) ── */}
      <section className={styles.domainsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.about.domains.sectionTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.about.domains.sectionSubtitle}</p>
          </div>
          <div className={styles.domainsGrid}>
            {/* AI Column */}
            <div className={styles.domainColumn}>
              <div className={styles.domainHeader}>
                <span className={styles.domainIconWrap}>
                  <AIIcon className={styles.domainIcon} />
                </span>
                <h3 className={styles.domainTitle}>{t.about.domains.ai.title}</h3>
              </div>
              {t.about.domains.ai.items.map((item) => (
                <Card key={item.title} className={styles.domainCard}>
                  <h4 className={styles.domainCardTitle}>{item.title}</h4>
                  <p className={styles.domainCardDescription}>{item.description}</p>
                </Card>
              ))}
            </div>

          </div>
          <div className={styles.domainsFooter}>
            <Link href={`/${params.lang}/services`} className={styles.domainsLink}>
              {t.about.domains.viewServices}
              <ArrowRightIcon className={styles.domainsLinkArrow} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 4: Values + Mission/Vision ── */}
      <section className={styles.valuesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.about.values.sectionTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.about.values.sectionSubtitle}</p>
          </div>
          {/* Mission + Vision Row */}
          <div className={styles.mvGrid}>
            <Card className={styles.mvCard}>
              <span className={styles.mvCardIconWrap}>
                <MissionIcon className={styles.mvCardIcon} />
              </span>
              <h3 className={styles.mvCardTitle}>{t.about.mission.title}</h3>
              <p className={styles.mvCardDescription}>{t.about.mission.description}</p>
            </Card>
            <Card className={styles.mvCard}>
              <span className={styles.mvCardIconWrap}>
                <VisionIcon className={styles.mvCardIcon} />
              </span>
              <h3 className={styles.mvCardTitle}>{t.about.vision.title}</h3>
              <p className={styles.mvCardDescription}>{t.about.vision.description}</p>
            </Card>
          </div>
          {/* Core Values Grid */}
          <div className={styles.valuesGrid}>
            {t.about.values.items.map((item, i) => {
              const Icon = valueIcons[i] || TechIcon;
              return (
                <div key={item.title} className={styles.valueCard}>
                  <span className={styles.valueIconWrap}>
                    <Icon className={styles.valueIcon} />
                  </span>
                  <h4 className={styles.valueTitle}>{item.title}</h4>
                  <p className={styles.valueDescription}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Section 5: Why Us ── */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.about.whyUs.sectionTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.about.whyUs.sectionSubtitle}</p>
          </div>
          <div className={styles.whyUsGrid}>
            {t.about.whyUs.points.map((point, i) => (
              <Card key={point.title} className={styles.whyUsCard}>
                <span className={styles.whyUsNumber}>{i + 1}</span>
                <h3 className={styles.whyUsTitle}>{point.title}</h3>
                <p className={styles.whyUsDescription}>{point.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA ── */}
      <section className={styles.ctaSection}>
        <div className="container">
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>{t.about.cta.title}</h2>
              <p className={styles.ctaDescription}>{t.about.cta.description}</p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.about.cta.contact}</Button>
              </Link>
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">{t.about.cta.services}</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
