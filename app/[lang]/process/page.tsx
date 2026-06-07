import Link from 'next/link';
import type { Metadata } from 'next';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { processMeta, processHero, processBlocks, processInquiry } from '@/data/process-methodology';
import { generateSEOMetadata, generateBreadcrumbSchema } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

export const dynamic = 'force-static';

const getContactHref = (lang: string) => `/${lang}/contact?inquiry=${encodeURIComponent(processInquiry)}`;
const getHomeHref = (lang: string) => `/${lang}/`;
const getServicesHref = (lang: string) => `/${lang}/#services`;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const m = processMeta[lang];
  return generateSEOMetadata({ title: m.title, description: m.description, lang, path: '/process' });
}

export default async function ProcessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const isJa = lang === 'ja';
  const m = processMeta[lang];
  const contactHref = getContactHref(lang);
  const homeHref = getHomeHref(lang);
  const servicesHref = getServicesHref(lang);

  const faqBlock = processBlocks.find((b) => b.type === 'faq');
  const faqSchema = faqBlock
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map((item) => ({
          '@type': 'Question',
          name: isJa ? item.aJa : item.aEn,
          acceptedAnswer: { '@type': 'Answer', text: isJa ? item.bJa : item.bEn },
        })),
      }
    : null;

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(lang, [{ name: m.breadcrumbHome, path: '/' }, { name: m.breadcrumbCurrent, path: '/process' }])) }} />
      {faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /> : null}

      <section className={styles.breadcrumb}>
        <div className="container">
          <nav className={styles.breadcrumbInner} aria-label="Breadcrumb">
            <Link href={homeHref}>{m.breadcrumbHome}</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{m.breadcrumbCurrent}</span>
          </nav>
        </div>
      </section>

      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroSplit} ${styles.aiWorkflowHeroTextOnly}`}>
            <div className={`${styles.heroContent} ${styles.aiWorkflowHeroContent}`}>
              <span className={styles.heroEyebrow}>{processHero.eyebrow}</span>
              <h1 className={styles.heroTitle}>{isJa ? processHero.titleJa : processHero.titleEn}</h1>
              <p className={styles.heroBody}>{isJa ? processHero.leadJa : processHero.leadEn}</p>
              <div className={styles.chipRow}>
                {(isJa ? processHero.chipsJa : processHero.chipsEn).map((chip) => (
                  <span key={chip} className={styles.chip}>{chip}</span>
                ))}
              </div>
              <div className={styles.actionRow}>
                <Link href={contactHref} className={styles.linkButton}>
                  <Button size="lg">{isJa ? processHero.primaryCtaJa : processHero.primaryCtaEn}</Button>
                </Link>
                <Link href={servicesHref} className={styles.linkButton}>
                  <Button size="lg" variant="outline">{isJa ? processHero.secondaryCtaJa : processHero.secondaryCtaEn}</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {processBlocks.map((block) => {
        // 背景は idx 依存ではなく block.key 依存。新順序 approach→timeline→dimensions→pitfalls→entry→faq
        // に対し {approach, dimensions, entry} を muted にすると muted→白→muted→白→muted→白 の厳密な
        // 交互になり、文字密度の高い dimensions と pitfalls が白地で連続して一面の白壁になるのを防ぐ。
        const mutedKeys = new Set(['approach', 'dimensions', 'entry']);
        const muted = mutedKeys.has(block.key);
        const sectionClass = `${styles.section} ${muted ? styles.sectionMuted : ''}`;
        const title = isJa ? block.titleJa : block.titleEn;
        const subtitle = isJa ? block.subtitleJa : block.subtitleEn;

        return (
          <section key={block.key} className={sectionClass}>
            <div className="container">
              <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>{title}</h2>
                {subtitle ? <p className={styles.sectionSubtitle}>{subtitle}</p> : null}
              </div>

              {block.type === 'cards3' ? (
                <div className={styles.grid3}>
                  {block.items.map((item) => (
                    <article key={item.aJa} className={styles.card}>
                      <h3 className={styles.cardTitle}>{isJa ? item.aJa : item.aEn}</h3>
                      <p className={styles.cardBody}>{isJa ? item.bJa : item.bEn}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {block.type === 'timeline' ? (
                <>
                  <ol className={styles.workflowTimeline} aria-label={title}>
                    {block.items.map((item, i) => (
                      <li key={item.aJa} className={styles.workflowStage}>
                        <span className={styles.stageNumber} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className={styles.cardTitle}>{isJa ? item.aJa : item.aEn}</h3>
                        <p className={styles.cardBody}>{isJa ? item.bJa : item.bEn}</p>
                        {item.chips ? (
                          <ul className={styles.stageOutputs}>
                            {item.chips.map((chip) => <li key={chip}>{chip}</li>)}
                          </ul>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                  {block.loopNoteJa ? (
                    <div className={styles.processLoop}>
                      <span>{isJa ? block.loopNoteJa : block.loopNoteEn}</span>
                    </div>
                  ) : null}
                </>
              ) : null}

              {block.type === 'dimensions' ? (
                <div className={styles.gateGroups}>
                  {[
                    {
                      labelJa: '分担と判断',
                      labelEn: 'The split and judgment',
                      start: 0,
                      slice: block.items.slice(0, 4),
                    },
                    {
                      labelJa: '続く仕組み',
                      labelEn: 'What keeps it going',
                      start: 4,
                      slice: block.items.slice(4),
                    },
                  ].map((group) => (
                    <div key={group.labelEn} className={styles.gateGroup}>
                      <p className={styles.gateGroupLabel}>{isJa ? group.labelJa : group.labelEn}</p>
                      <ol className={styles.gateList}>
                        {group.slice.map((item, i) => (
                          <li key={item.aJa} className={styles.gateRow}>
                            <span className={styles.gateNumber} aria-hidden="true">{String(group.start + i + 1).padStart(2, '0')}</span>
                            <span>
                              <strong>{isJa ? item.aJa : item.aEn}</strong>
                              <span>{isJa ? item.bJa : item.bEn}</span>
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>
              ) : null}

              {block.type === 'pitfalls' ? (
                <div className={styles.grid2}>
                  {block.items.map((item) => (
                    <article key={item.aJa} className={`${styles.card} ${styles.pitfallCard}`}>
                      <h3 className={styles.cardTitle}>{isJa ? item.aJa : item.aEn}</h3>
                      <p className={`${styles.cardBody} ${styles.pitfallFix}`}>{isJa ? item.bJa : item.bEn}</p>
                    </article>
                  ))}
                </div>
              ) : null}

              {block.type === 'faq' ? (
                <div className={styles.faqList}>
                  {block.items.map((item, i) => (
                    <details key={item.aJa} className={styles.faqItem} open={i === 0}>
                      <summary className={styles.faqButton}>
                        <span className={styles.faqQuestionText}>{isJa ? item.aJa : item.aEn}</span>
                        <span className={styles.chevron} aria-hidden="true">⌄</span>
                      </summary>
                      <div className={styles.faqAnswer}>
                        <p className={styles.faqAnswerText}>{isJa ? item.bJa : item.bEn}</p>
                      </div>
                    </details>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        );
      })}

      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.band} ${styles.featuredBand}`}>
            <div className={styles.bandCopy}>
              <h2 className={styles.bandTitle}>
                {isJa ? processHero.primaryCtaJa : processHero.primaryCtaEn}
              </h2>
              <p className={styles.sectionSubtitle}>
                {isJa
                  ? '要件は決まっていなくて大丈夫。まずは一度、流れを一緒に見てみませんか。'
                  : "Your requirements don't need to be fixed. Let's look at the flow together, just once, to start."}
              </p>
            </div>
            <div className={styles.bandActions}>
              <Link href={contactHref} className={styles.linkButton}>
                <Button size="lg">{isJa ? processHero.primaryCtaJa : processHero.primaryCtaEn}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
