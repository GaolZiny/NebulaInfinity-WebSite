import Link from 'next/link';
import type { Metadata } from 'next';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { aiDevFlowContent, aiWorkflowInquiry } from '@/data/service-subdetails/aiDevFlow';
import { generateSEOMetadata } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

export const dynamic = 'force-static';

const getContactHref = (lang: string) => `/${lang}/contact?inquiry=${encodeURIComponent(aiWorkflowInquiry)}`;
const getParentHref = (lang: string) => `/${lang}/services/ai-workflow`;
const getServicesHref = (lang: string) => `/${lang}/#services`;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const { metadata } = aiDevFlowContent[lang];
  return generateSEOMetadata({ title: metadata.title, description: metadata.description, lang, path: '/services/ai-workflow/ai-dev-flow' });
}

export default async function AiDevFlowPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const content = aiDevFlowContent[lang];
  const contactHref = getContactHref(lang);
  const parentHref = getParentHref(lang);
  const servicesHref = getServicesHref(lang);

  return (
    <div className={styles.page}>
      <section className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner} aria-label="Breadcrumb">
            <Link href={`/${lang}/`}>{content.breadcrumb.home}</Link>
            <span aria-hidden="true">/</span>
            <Link href={servicesHref}>{content.breadcrumb.services}</Link>
            <span aria-hidden="true">/</span>
            <Link href={parentHref}>{content.breadcrumb.parent}</Link>
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
                <Link href={parentHref} className={styles.linkButton}>
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

      <section className={styles.section} aria-labelledby="workflow-map-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.workflow.eyebrow}</span>
            <h2 id="workflow-map-title" className={styles.sectionTitle}>{content.workflow.title}</h2>
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
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.roles.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{content.roles.title}</h2>
            <p className={styles.sectionSubtitle}>{content.roles.subtitle}</p>
          </div>
          <div className={styles.grid3}>
            {content.roles.cards.map(([role, responsibility, outputs]) => (
              <article key={role} className={styles.card}>
                <h3 className={styles.cardTitle}>{role}</h3>
                <p className={styles.cardBody}>{responsibility}</p>
                <div className={styles.proofStrip}>
                  {outputs.map((output) => (
                    <span key={output} className={styles.proofPill}>{output}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className={styles.roleReviewBand}>{content.roles.reviewGate}</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.gates.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{content.gates.title}</h2>
            <p className={styles.sectionSubtitle}>{content.gates.subtitle}</p>
          </div>
          <ol className={styles.gateList}>
            {content.gates.rows.map(([title, body], index) => (
              <li key={title} className={styles.gateRow}>
                <span className={styles.gateNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{title}</strong>
                  <span>{body}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{content.deliverables.title}</h2>
            <p className={styles.sectionSubtitle}>{content.deliverables.subtitle}</p>
          </div>
          <div className={styles.aiDevFlowGrid4}>
            {content.deliverables.cards.map(([title, body]) => (
              <article key={title} className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardBody}>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{content.useCases.title}</h2>
            <p className={styles.sectionSubtitle}>{content.useCases.subtitle}</p>
          </div>
          <div className={styles.grid2}>
            {content.useCases.cards.map(([title, body]) => (
              <article key={title} className={styles.card}>
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
