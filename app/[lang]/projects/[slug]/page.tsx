import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import projectsData from '@/data/projects/projects.json';
import styles from '@/styles/marketing.module.css';

export const dynamicParams = false;

const ACTIVE_PROJECT_SLUGS = new Set(['gaijin-life-navi', 'rigel', 'astra']);

function getActiveProject(slug: string) {
  if (!ACTIVE_PROJECT_SLUGS.has(slug)) return undefined;
  return projectsData.projects.find((item) => item.slug === slug);
}

export async function generateStaticParams() {
  const langs: Language[] = ['ja', 'en'];
  const activeProjectParams = langs.flatMap((lang) =>
    projectsData.projects.filter((project) => ACTIVE_PROJECT_SLUGS.has(project.slug)).map((project) => ({ lang, slug: project.slug }))
  );

  if (process.env.NODE_ENV !== 'development') {
    return activeProjectParams;
  }

  // In local preview with static export enabled, Next.js must see this retired
  // slug before the page-level notFound() branch can return a clean 404.
  // Production/export static params remain active projects only.
  const retiredProjectParams = langs.map((lang) => ({ lang, slug: 'carina' }));
  return [...activeProjectParams, ...retiredProjectParams];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params;
  const lang = getLanguage(rawLang);
  const project = getActiveProject(slug);
  if (!project) return {};
  return { title: `${project.name[lang]} - Nebula Infinity`, description: project.summary[lang] };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang: rawLang, slug } = await params;
  const lang = getLanguage(rawLang);
  const project = getActiveProject(slug);
  if (!project) notFound();

  let details: any = null;
  try {
    details = await import(`@/data/projects/${slug}.json`);
  } catch {
    details = null;
  }

  const serviceLineLabel = project.serviceLine === 'ai-workflow' ? 'AI Workflow Design & Development' : project.serviceLine === 'ai-driven-development' ? 'AI-Driven Development' : 'AI Application Design & Development';

  return (
    <div className={styles.page}>
      <section className={styles.breadcrumb}><div className="container"><div className={styles.breadcrumbInner}><Link href={`/${lang}/`}>{lang === 'ja' ? 'ホーム' : 'Home'}</Link><span>/</span><Link href={`/${lang}/#projects`}>{lang === 'ja' ? 'プロジェクト' : 'Projects'}</Link><span>/</span><span>{project.name[lang]}</span></div></div></section>
      <section className={styles.hero}><div className="container"><div className={`${styles.heroSplit} ${styles.aiWorkflowHeroTextOnly}`}><div className={`${styles.heroContent} ${styles.aiWorkflowHeroContent}`}><span className={styles.heroEyebrow}>{serviceLineLabel}</span><h1 className={styles.heroTitle}>{project.name[lang]}</h1><p className={styles.heroBody}>{project.summary[lang]}</p><div className={styles.chipRow}>{project.proofPoints.map((point: string) => <span key={point} className={styles.chip}>{point}</span>)}</div><div className={styles.actionRow}><Link href={`/${lang}/contact?inquiry=${encodeURIComponent(serviceLineLabel)}`} className={styles.linkButton}><Button size="lg">{lang === 'ja' ? '似た相談をする' : 'Discuss a similar case'}</Button></Link><Link href={`/${lang}/#projects`} className={styles.linkButton}><Button size="lg" variant="outline">{lang === 'ja' ? 'プロジェクト選択に戻る' : 'Back to Home Projects'}</Button></Link>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" className={styles.linkButton}><Button size="lg" variant="outline">{lang === 'ja' ? '公開サイトを見る' : 'Open live site'}</Button></a> : null}</div></div></div></div></section>
      {details ? <>
        <section className={styles.section}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{lang === 'ja' ? 'プロジェクト概要' : 'Project overview'}</h2></div><div className={`${styles.card} ${styles.featuredCard}`}><p className={styles.cardBody}>{details.fullDescription[lang]}</p></div></div></section>
        <section className={`${styles.section} ${styles.sectionMuted}`}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{lang === 'ja' ? '技術スタック' : 'Tech stack'}</h2></div><div className={styles.grid3}>{details.techStack.map((tech: string) => <div key={tech} className={styles.card}><h3 className={styles.cardTitle}>{tech}</h3></div>)}</div></div></section>
        <section className={styles.section}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{lang === 'ja' ? '主な機能' : 'Key features'}</h2></div><div className={styles.grid2}>{details.features.map((feature: any) => <div key={feature[lang]} className={styles.card}><h3 className={styles.cardTitle}>{feature[lang]}</h3></div>)}</div></div></section>
        {details.results ? <section className={`${styles.section} ${styles.sectionMuted}`}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{lang === 'ja' ? '実績・成果' : 'Results'}</h2></div><div className={styles.grid2}>{details.results[lang].map((result: string) => <div key={result} className={styles.card}><p className={styles.cardBody}>{result}</p></div>)}</div></div></section> : null}
      </> : null}
      <section className={styles.section}><div className="container"><div className={styles.featuredBand}><div className={styles.bandCopy}><h2 className={styles.bandTitle}>{lang === 'ja' ? '同様の課題や構想があれば、ご相談ください' : 'If your situation is similar, let\'s discuss it'}</h2><p className={styles.bandBody}>{lang === 'ja' ? '要件整理から実装方針まで、代表例をもとに次の一歩を整理します。' : 'We can use this case as a reference point to structure your next step.'}</p></div><div className={styles.bandActions}><Link href={`/${lang}/contact?inquiry=${encodeURIComponent(serviceLineLabel)}`} className={styles.linkButton}><Button size="lg">{lang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</Button></Link><Link href={`/${lang}/#services`} className={styles.linkButton}><Button size="lg" variant="outline">{lang === 'ja' ? 'サービスを見る' : 'View Services'}</Button></Link></div></div></div></section>
    </div>
  );
}
