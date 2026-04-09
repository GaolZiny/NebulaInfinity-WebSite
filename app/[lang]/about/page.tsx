import Link from 'next/link';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

const copy = {
  ja: {
    eyebrow: 'About Nebula Infinity',
    title: 'AI社会実装のパートナー',
    subtitle: 'Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。',
    pillarsTitle: 'Nebula Infinity の立ち位置',
    pillarsSupport: 'この4つが、Nebula Infinity のサービス設計と提案の基準です。',
    servicesEyebrow: 'What we do',
    servicesTitle: '提供するのは、3つの実装ライン',
    servicesBody: '業務フローの資産化、AIアプリケーションの設計・開発、Web3.0 / Blockchain 活用まで、目的に応じて入口を分けながら一貫して伴走します。',
    workEyebrow: 'How we work',
    workTitle: 'Nebula Infinity が重視する進め方',
    snapshotTitle: 'Company snapshot',
    snapshotSupport: '案件内容に応じて、MVP設計から実装・定着支援まで対応します。',
    ctaTitle: 'Nebula Infinity と進められるか、まずは背景から共有してください',
    ctaBody: '業務課題、AIプロダクト構想、Web3.0施策の検討段階でも構いません。どこから着手すべきか一緒に整理します。',
    contact: 'お問い合わせ',
    viewServices: 'サービスを見る',
  },
  en: {
    eyebrow: 'About Nebula Infinity',
    title: 'An implementation partner for AI in real business',
    subtitle: 'Nebula Infinity is a Japan-based team that does not leave AI and Web3.0 as strategy alone. We design and build them as systems that can operate in the real business environment.',
    pillarsTitle: 'Nebula Infinity\'s positioning in four lines',
    pillarsSupport: 'These four lines define how Nebula Infinity shapes services and proposals.',
    servicesEyebrow: 'What we do',
    servicesTitle: 'We operate through three implementation lines',
    servicesBody: 'From workflow assetization to AI application design and Web3.0 / blockchain delivery, we keep the entry points distinct while supporting the work as one implementation partner.',
    workEyebrow: 'How we work',
    workTitle: 'How Nebula Infinity works',
    snapshotTitle: 'Company snapshot',
    snapshotSupport: 'Engagements can range from MVP planning to implementation and operational adoption.',
    ctaTitle: 'If you want to assess fit, start by sharing the background',
    ctaBody: 'Whether you are dealing with an operational issue, an AI product idea, or an early Web3.0 initiative, we can help determine where to start.',
    contact: 'Contact Us',
    viewServices: 'View Services',
  },
} as const;

const pillars = {
  ja: ['AI社会実装のパートナー', '「AI」を、現場の「即戦力」へ', '「属人」のノウハウを、組織の「資産」に', 'Web3.0テクノロジーを、ビジネスへ'],
  en: ['AI social implementation partner', 'Turn AI into front-line capability', 'Turn tacit know-how into organizational assets', 'Bring Web3.0 technology into business'],
} as const;

const principles = {
  ja: [
    { title: 'Business Logic First', body: '技術選定より先に、現場の流れと判断を整理します。' },
    { title: 'Asset-minded', body: 'その場限りの自動化ではなく、引き継げる資産を残します。' },
    { title: 'Implementation-minded', body: '提案で終わらせず、設計・実装・定着まで進めます。' },
    { title: 'Calm, business-ready Web3', body: 'Web3.0 も投機ではなく、事業価値から設計します。' },
  ],
  en: [
    { title: 'Business Logic First', body: 'We structure the flow and decisions before choosing tools.' },
    { title: 'Asset-minded', body: 'We leave behind assets your team can inherit and improve.' },
    { title: 'Implementation-minded', body: 'We do not stop at recommendation; we carry the work into design, build, and rollout.' },
    { title: 'Calm, business-ready Web3', body: 'We shape Web3.0 from business value, not speculation.' },
  ],
} as const;

const snapshotRows = {
  ja: [
    ['Company', 'Nebula Infinity（ネビュラインフィニティ）'],
    ['Base', 'Japan'],
    ['Domain', 'nebulainfinity.com'],
    ['Focus', 'AI Workflow / AI Application / Web3.0 / Blockchain'],
    ['Representative products', 'Japan Life Navi / Rigel / Carina'],
  ],
  en: [
    ['Company', 'Nebula Infinity'],
    ['Base', 'Japan'],
    ['Domain', 'nebulainfinity.com'],
    ['Focus', 'AI Workflow / AI Application / Web3.0 / Blockchain'],
    ['Representative products', 'Japan Life Navi / Rigel / Carina'],
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];
  return { title: `${t.title} - Nebula Infinity`, description: t.subtitle };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];

  return (
    <div className={styles.page}>
      <section className={`${styles.hero} ${styles.heroCentered} ${styles.heroCompact}`}>
        <div className="container"><div className={styles.heroContent}><span className={styles.heroEyebrow}>{t.eyebrow}</span><h1 className={styles.pageTitle}>{t.title}</h1><p className={styles.pageLead}>{t.subtitle}</p></div></div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{t.pillarsTitle}</h2><p className={styles.sectionSubtitle}>{t.pillarsSupport}</p></div>
          <div className={styles.grid2}>
            {pillars[lang].map((pillar, index) => <div key={pillar} className={`${styles.card} ${index === 0 || index === 2 ? styles.featuredCard : ''}`}><h3 className={styles.cardTitle}>{pillar}</h3></div>)}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}><span className={styles.sectionEyebrow}>{t.servicesEyebrow}</span><h2 className={styles.sectionTitle}>{t.servicesTitle}</h2><p className={styles.sectionSubtitle}>{t.servicesBody}</p></div>
          <div className={styles.grid3}>{services.map((service) => <div key={service.id} className={styles.card}><span className={styles.columnLabel}>{service.officialLine}</span><h3 className={styles.cardTitle}>{service.title[lang]}</h3><p className={styles.cardBody}>{service.body[lang]}</p><Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>{t.viewServices}<span aria-hidden="true">→</span></Link></div>)}</div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container"><div className={styles.sectionHeader}><span className={styles.sectionEyebrow}>{t.workEyebrow}</span><h2 className={styles.sectionTitle}>{t.workTitle}</h2></div><div className={styles.grid2}>{principles[lang].map((item) => <div key={item.title} className={styles.card}><h3 className={styles.cardTitle}>{item.title}</h3><p className={styles.cardBody}>{item.body}</p></div>)}</div></div>
      </section>
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{t.snapshotTitle}</h2><p className={styles.sectionSubtitle}>{t.snapshotSupport}</p></div><div className={styles.snapshotTable}>{snapshotRows[lang].map(([label, value], index) => <div key={label} className={`${styles.snapshotRow} ${index === 0 ? styles.featuredCard : ''}`}><strong>{label}</strong><div className={styles.cardBody}>{value}</div></div>)}</div></div>
      </section>
      <section className={styles.section}>
        <div className="container"><div className={styles.featuredBand}><div className={styles.bandCopy}><h2 className={styles.bandTitle}>{t.ctaTitle}</h2><p className={styles.bandBody}>{t.ctaBody}</p></div><div className={styles.bandActions}><Link href={`/${lang}/contact`} className={styles.linkButton}><Button size="lg">{t.contact}</Button></Link><Link href={`/${lang}/services`} className={styles.linkButton}><Button size="lg" variant="outline">{t.viewServices}</Button></Link></div></div></div>
      </section>
    </div>
  );
}
