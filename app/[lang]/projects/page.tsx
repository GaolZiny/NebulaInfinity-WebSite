import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';
import projectsData from '@/data/projects/projects.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `${t.projects.title} - Nebula Infinity`,
    description: t.projects.subtitle,
  };
}

export default function ProjectsPage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const starIcon = (
    <svg className={styles.projectIconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 4.5l-1.5 4.5H6l3.7 2.7-1.4 4.3L12 13.3l3.7 2.7-1.4-4.3L18 9H13.5z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );

  const boxIcon = (
    <svg className={styles.projectIconSvg} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4.5 7.5l7.5-4 7.5 4-7.5 4-7.5-4z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M4.5 7.5v9l7.5 4 7.5-4v-9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
      <path
        d="M12 11.5v8"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );

  const arrowIcon = (
    <svg className={styles.arrowIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>{isJa ? 'プロジェクト' : 'Projects'}</span>
          <h1 className={styles.title}>{t.projects.title}</h1>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {isJa ? '実績とケーススタディ' : 'Select work & case studies'}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? 'AIとWeb3.0の統合領域で成果を生み出したプロジェクトをご紹介します。'
                : 'A focused selection of AI + Web3.0 engagements with measurable outcomes.'}
            </p>
          </div>
          <div className={styles.projectGrid}>
            {projectsData.projects.map((project) => (
              <Link
                key={project.id}
                href={`/${params.lang}/projects/${project.slug}`}
                className={styles.projectLink}
              >
                <Card hover className={styles.projectCard}>
                  <div className={styles.projectCardInner}>
                    <span className={styles.projectIconWrap}>
                      {project.icon ? starIcon : boxIcon}
                    </span>
                    <h3 className={styles.projectTitle}>
                      {project.name[params.lang]}
                    </h3>
                    <p className={styles.projectDescription}>
                      {project.shortDescription[params.lang]}
                    </p>
                    <div className={styles.tags}>
                      {project.tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className={styles.viewMore}>
                      {t.projects.viewDetails}
                      {arrowIcon}
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>
                {isJa
                  ? 'プロジェクトについてご相談ください'
                  : 'Let\u2019s discuss your project'}
              </h2>
              <p className={styles.ctaDescription}>
                {isJa
                  ? '要件整理から実装まで並走します。お気軽にお問い合わせください。'
                  : 'From requirements to launch — we\u2019ll build it together. Get in touch.'}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{t.nav.contact}</Button>
              </Link>
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">
                  {t.nav.services}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
