import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import ProjectsExplorer from '@/components/projects/ProjectsExplorer';
import styles from '@/styles/marketing.module.css';

const copy = {
  ja: {
    eyebrow: 'Projects / Cases',
    title: '代表例で見る、Nebula Infinity の実装領域',
    subtitle: 'このページでは、AI Workflow、AI Application、AI-Driven Development の3領域ごとに、公開できる代表例を整理して紹介します。',
    ctaTitle: '近い課題や構想があれば、代表例をもとに整理できます',
    ctaBody: 'AI Workflow、AI Application、AI-Driven Development のどれに近いか分からない段階でも構いません。背景から一緒に整理します。',
    contact: 'お問い合わせ',
    services: 'サービスを見る',
  },
  en: {
    eyebrow: 'Projects / Cases',
    title: 'Representative proof across Nebula Infinity\'s delivery scope',
    subtitle: 'This page organizes the public representative examples across AI Workflow, AI Application, and AI-Driven Development.',
    ctaTitle: 'If your situation is similar, we can use these examples to structure the next step',
    ctaBody: 'Even if you are not sure whether the problem is closer to AI Workflow, AI Application, or AI-Driven Development, we can help structure it from the background.',
    contact: 'Contact Us',
    services: 'View Services',
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];
  return {
    title: `${t.title} - Nebula Infinity`,
    description: t.subtitle,
  };
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];

  return (
    <div className={styles.page}>
      <section className={`${styles.hero} ${styles.heroCentered} ${styles.heroCompact}`}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>{t.eyebrow}</span>
            <h1 className={styles.pageTitle}>{t.title}</h1>
            <p className={styles.pageLead}>{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <ProjectsExplorer lang={lang} />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.featuredBand}>
            <div className={styles.bandCopy}>
              <h2 className={styles.bandTitle}>{t.ctaTitle}</h2>
              <p className={styles.bandBody}>{t.ctaBody}</p>
            </div>
            <div className={styles.bandActions}>
              <Link href={`/${lang}/contact`} className={styles.linkButton}>
                <Button size="lg">{t.contact}</Button>
              </Link>
              <Link href={`/${lang}/#services`} className={styles.linkButton}>
                <Button size="lg" variant="outline">{t.services}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
