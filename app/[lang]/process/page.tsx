import Link from 'next/link';
import type { Metadata } from 'next';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { processMethodologyContent, processInquiry } from '@/data/process-methodology';
import { generateSEOMetadata, generateBreadcrumbSchema } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

export const dynamic = 'force-static';

const getContactHref = (lang: string) => `/${lang}/contact?inquiry=${encodeURIComponent(processInquiry)}`;
const getHomeHref = (lang: string) => `/${lang}/`;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const { metadata } = processMethodologyContent[lang];
  return generateSEOMetadata({ title: metadata.title, description: metadata.description, lang, path: '/process' });
}

export default async function ProcessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const content = processMethodologyContent[lang];
  const contactHref = getContactHref(lang);
  const homeHref = getHomeHref(lang);

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(lang, [{ name: content.breadcrumb.home, path: '/' }, { name: content.breadcrumb.current, path: '/process' }])) }} />
      <section className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner} aria-label="Breadcrumb">
            <Link href={homeHref}>{content.breadcrumb.home}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{content.breadcrumb.current}</span>
          </nav>
        </div>
      </section>

      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroSplit} ${styles.aiWorkflowHeroTextOnly}`}>
            <div className={`${styles.heroContent} ${styles.aiWorkflowHeroContent}`}>
              <span className={styles.heroEyebrow}>{content.hero.eyebrow}</span>
              <h1 className={styles.heroTitle}>{content.hero.title}</h1>
              <p className={styles.heroBody}>{content.hero.lead}</p>
              <div className={styles.chipRow}>
                {content.hero.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Link href={contactHref} className={styles.linkButton}>
                  <Button size="lg">{content.hero.primaryCta}</Button>
                </Link>
                <Link href={homeHref} className={styles.linkButton}>
                  <Button size="lg" variant="outline">{content.hero.secondaryCta}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{content.premise.title}</h2>
            <p className={styles.sectionSubtitle}>{content.premise.subtitle}</p>
          </div>
          <div className={styles.grid3}>
            {content.premise.cards.map(([title, body]) => (
              <article key={title} className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="process-workflow-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.workflow.eyebrow}</span>
            <h2 id="process-workflow-title" className={styles.sectionTitle}>{content.workflow.title}</h2>
            <p className={styles.sectionSubtitle}>{content.workflow.subtitle}</p>
          </div>
          <ol className={styles.workflowTimeline} aria-label={content.workflow.ariaLabel}>
            {content.workflow.stages.map((stage, index) => (
              <li key={stage.title} className={styles.workflowStage}>
                <span className={styles.stageNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.cardTitle}>{stage.title}</h3>
                <p className={styles.cardBody}>{stage.description}</p>
                <ul className={styles.stageOutputs}>
                  {stage.outputs.map((output) => (
                    <li key={output}>{output}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className={styles.processLoop}>
            <span>{content.workflow.loopNote}</span>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.outcomes.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{content.outcomes.title}</h2>
            <p className={styles.sectionSubtitle}>{content.outcomes.subtitle}</p>
          </div>
          <div className={styles.grid3}>
            {content.outcomes.cards.map(([title, body]) => (
              <article key={title} className={`${styles.card} ${styles.featuredCard}`}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
