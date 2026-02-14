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

/* --- Laurel Wreath SVG Components --- */

const LaurelLeft = () => (
  <svg
    className={styles.laurelLeft}
    viewBox="0 0 44 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Stem */}
    <path
      d="M32 76 C28 64, 20 52, 18 40 C16 28, 18 18, 22 8"
      stroke="#CA8A04"
      strokeWidth="1.2"
      fill="none"
    />
    {/* Leaves arranged along the curved stem */}
    <ellipse cx="26" cy="66" rx="9" ry="3.8" transform="rotate(-20 26 66)" fill="#CA8A04" opacity="0.82" />
    <ellipse cx="22" cy="56" rx="8.5" ry="3.5" transform="rotate(-32 22 56)" fill="#CA8A04" opacity="0.85" />
    <ellipse cx="19" cy="46" rx="8" ry="3.2" transform="rotate(-44 19 46)" fill="#CA8A04" opacity="0.87" />
    <ellipse cx="17" cy="36" rx="7.5" ry="3" transform="rotate(-54 17 36)" fill="#CA8A04" opacity="0.85" />
    <ellipse cx="18" cy="26" rx="7" ry="2.8" transform="rotate(-64 18 26)" fill="#CA8A04" opacity="0.82" />
    <ellipse cx="20" cy="17" rx="6" ry="2.4" transform="rotate(-72 20 17)" fill="#CA8A04" opacity="0.80" />
    <ellipse cx="23" cy="10" rx="5" ry="2" transform="rotate(-80 23 10)" fill="#CA8A04" opacity="0.75" />
  </svg>
);

const LaurelRight = () => (
  <svg
    className={styles.laurelRight}
    viewBox="0 0 44 84"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* Stem (mirrored) */}
    <path
      d="M12 76 C16 64, 24 52, 26 40 C28 28, 26 18, 22 8"
      stroke="#CA8A04"
      strokeWidth="1.2"
      fill="none"
    />
    {/* Leaves (mirrored) */}
    <ellipse cx="18" cy="66" rx="9" ry="3.8" transform="rotate(20 18 66)" fill="#CA8A04" opacity="0.82" />
    <ellipse cx="22" cy="56" rx="8.5" ry="3.5" transform="rotate(32 22 56)" fill="#CA8A04" opacity="0.85" />
    <ellipse cx="25" cy="46" rx="8" ry="3.2" transform="rotate(44 25 46)" fill="#CA8A04" opacity="0.87" />
    <ellipse cx="27" cy="36" rx="7.5" ry="3" transform="rotate(54 27 36)" fill="#CA8A04" opacity="0.85" />
    <ellipse cx="26" cy="26" rx="7" ry="2.8" transform="rotate(64 26 26)" fill="#CA8A04" opacity="0.82" />
    <ellipse cx="24" cy="17" rx="6" ry="2.4" transform="rotate(72 24 17)" fill="#CA8A04" opacity="0.80" />
    <ellipse cx="21" cy="10" rx="5" ry="2" transform="rotate(80 21 10)" fill="#CA8A04" opacity="0.75" />
  </svg>
);

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

            {/* Laurel Wreath Badges */}
            <div className={styles.heroBadges}>
              {t.hero.badges.map((badge) => (
                <div key={badge.title} className={styles.badge}>
                  <LaurelLeft />
                  <div className={styles.badgeContent}>
                    <span className={styles.badgeTitle}>{badge.title}</span>
                    <span className={styles.badgeValue}>{badge.value}</span>
                  </div>
                  <LaurelRight />
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
