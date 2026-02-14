import { Fragment } from 'react';
import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

const renderWithBreaks = (text: string) =>
  text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

/* --- SVG Badge Icons --- */

const BadgeIconLightning = () => (
  <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2L4.5 13h6l-1 9L19 11h-6l1-9z" />
  </svg>
);

const BadgeIconTrend = () => (
  <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 7l6 6 4-4 8 8" />
    <path d="M17 17h4v-4" />
  </svg>
);

const BadgeIconShield = () => (
  <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const badgeIcons = [<BadgeIconLightning key="b1" />, <BadgeIconTrend key="b2" />, <BadgeIconShield key="b3" />];

/* --- SVG Philosophy Icons (reused from existing principle icons) --- */

const philosophyIcons = [
  // Business Logic First — handshake/strategy
  <svg key="p1" className={styles.philosophyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 7h-4l-2-3H10L8 7H4a2 2 0 00-2 2v2l8 5 8-5V9a2 2 0 00-2-2z" />
    <path d="M2 13l8 5 2-1.5L14 18l8-5" />
  </svg>,
  // No Blackbox — eye/transparency
  <svg key="p2" className={styles.philosophyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
    <circle cx="12" cy="12" r="3" />
  </svg>,
  // Speed is Value — rocket
  <svg key="p3" className={styles.philosophyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
  </svg>,
];

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `Nebula Infinity - ${t.hero.title.replace('\n', ' ')}`,
    description: t.hero.subtitle.replace(/\n/g, ' '),
  };
}

export default function HomePage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;

  return (
    <div className={styles.page}>
      {/* ===== Hero ===== */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className="container">
          <div className={styles.heroContent}>
            <h1 id="hero-title" className={styles.heroTitle}>
              {renderWithBreaks(t.hero.title)}
            </h1>
            <p className={styles.heroSubtitle}>
              {renderWithBreaks(t.hero.subtitle)}
            </p>

            {/* Floating Badges */}
            <div className={styles.heroBadges}>
              {t.hero.badges.map((badge, idx) => (
                <div key={badge.title} className={styles.badge}>
                  <span className={styles.badgeIconWrap}>
                    {badgeIcons[idx]}
                  </span>
                  <div className={styles.badgeText}>
                    <span className={styles.badgeTitle}>{badge.title}</span>
                    <span className={styles.badgeDesc}>{badge.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.heroActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.hero.cta}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Concept ===== */}
      <section className={styles.concept} aria-labelledby="concept-title">
        <div className="container">
          <div className={styles.conceptContent}>
            <h2 id="concept-title" className={styles.conceptTitle}>
              {t.concept.title}
            </h2>
            <p className={styles.conceptLead}>
              {t.concept.lead}
              <span className={styles.conceptHighlight}>{t.concept.leadHighlight}</span>
              {t.concept.leadAfter}
            </p>
            <div className={styles.conceptKeywords}>
              {t.concept.keywords.map((kw) => (
                <div key={kw} className={styles.keyword}>{kw}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Competence ===== */}
      <section className={styles.competence} aria-labelledby="competence-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="competence-title" className={styles.sectionTitle}>
              {t.competence.title}
            </h2>
          </div>
          <div className={styles.competenceCards}>
            {t.competence.cards.map((card) => (
              <div key={card.eyebrow} className={styles.competenceCard}>
                <span className={styles.cardEyebrow}>{card.eyebrow}</span>
                <h3 className={styles.cardHeading}>{card.heading}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Solutions ===== */}
      <section className={styles.solutions} aria-labelledby="solutions-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="solutions-title" className={styles.sectionTitle}>
              {t.solutions.title}
            </h2>
            <p className={styles.sectionSubtitle}>{t.solutions.subtitle}</p>
          </div>
          <div className={styles.solutionGrid}>
            {t.solutions.cards.map((card) => (
              <div key={card.number} className={styles.solutionCard}>
                <span className={styles.solutionNumber}>{card.number}</span>
                <h3 className={styles.solutionTitle}>{card.title}</h3>
                <span className={styles.solutionLabel}>{card.label}</span>
                <p className={styles.solutionBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Philosophy ===== */}
      <section className={styles.philosophy} aria-labelledby="philosophy-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 id="philosophy-title" className={styles.sectionTitle}>
              {t.philosophy.title}
            </h2>
          </div>
          <div className={styles.philosophyGrid}>
            {t.philosophy.cards.map((card, idx) => (
              <div key={card.title} className={styles.philosophyCard}>
                <div className={styles.philosophyIconWrap}>
                  {philosophyIcons[idx]}
                </div>
                <h3 className={styles.philosophyTitle}>{card.title}</h3>
                <p className={styles.philosophyDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaSection} aria-labelledby="cta-title">
        <div className="container">
          <div className={styles.ctaBanner}>
            <h2 id="cta-title" className={styles.ctaTitle}>
              {renderWithBreaks(t.cta.title)}
            </h2>
            <p className={styles.ctaDescription}>
              {t.cta.description}
            </p>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.cta.button}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
