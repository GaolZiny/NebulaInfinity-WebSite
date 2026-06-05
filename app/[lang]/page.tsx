import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getLanguage } from '@/lib/i18n';
import { generateSEOMetadata } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

const homeCopy = {
  ja: {
    eyebrow: 'AI社会実装のパートナー',
    title: '「AI」を、現場の「即戦力」へ',
    body: 'Nebula Infinityは、構想から運用まで伴走し、業務やアイデアを、AIワークフロー・AIアプリケーション・AI駆動開発で「使える形」に実装するパートナーです。',
    servicesEyebrow: 'Services',
    servicesTitle: '3つのソリューションで、構想を事業へ',
    servicesSubtitle: '業務の資産化、AIアプリケーション、AI駆動開発まで。目的に合わせて、必要な実装ラインを組み合わせます。',
    projectsEyebrow: 'Projects',
    projectsTitle: 'プロジェクト例',
    projectsSubtitle: '代表的なプロジェクトをご紹介します。詳細は各プロジェクトページをご覧ください。',
    processEyebrow: 'Process',
    processTitle: '構想から、実装・運用まで。',
    processSubtitle: '明確な要件はなくても構いません。構想からプロセスを整理し、方針を定め、検証しながら仕上げていきます。',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI社会実装のパートナー',
    ctaTitle: '思いだけでもご相談頂けます。',
    ctaBody: 'アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。',
    contactCta: 'お問い合わせ',
  },
  en: {
    eyebrow: 'Your partner for putting AI to work',
    title: 'Make AI a force on your front line',
    body: 'Nebula Infinity is your end-to-end implementation partner — from concept to operation. We turn your operations and ideas into working AI: workflows, applications, and AI-driven builds.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Three solutions that turn ideas into business',
    servicesSubtitle: 'From workflow assets to AI applications and AI-driven development — we combine the right lines for your goal.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Selected work',
    projectsSubtitle: 'A few projects that show how we work. See each page for the full story.',
    processEyebrow: 'Process',
    processTitle: 'From concept to live operation.',
    processSubtitle: 'No finished spec required. We start from the concept, map the process, set direction, and refine it through real validation.',
    aboutEyebrow: 'Your partner for putting AI to work',
    aboutTitle: 'Your partner for putting AI to work',
    ctaTitle: 'You can reach out with only an initial thought.',
    ctaBody: 'Share an idea or requirements, and we can show a working demo in as little as 24 hours.',
    contactCta: 'Contact Us',
  },
} as const;

const serviceLines = {
  ja: ['AI Workflow', 'AI Application', 'AI-Driven Development'],
  en: ['AI Workflow', 'AI Application', 'AI-Driven Development'],
} as const;

const valuePanels = {
  ja: [
    { title: '個人の知見を、会社の資産に', body: '担当者に閉じた判断基準や手順を可視化し、組織が運用・進化できる仕組みへ変えます。' },
    { title: '構想から運用まで、伴走', body: '構想の整理から、設計・実装・検証、そして運用まで一貫して伴走します。' },
    { title: '最短24時間で、動くデモ', body: 'AI駆動開発により、アイデアや要件から、最短24時間で動くデモをお見せできることもあります。' },
  ],
  en: [
    { title: 'Turn individual know-how into a company asset', body: "We surface the decision rules and steps locked in one person's head, and rebuild them into a system your organization can run and improve." },
    { title: 'With you from concept to operation', body: 'One continuous team — from shaping the concept through design, build, and validation, all the way to live operation.' },
    { title: 'A working demo in as little as 24 hours', body: 'With AI-driven development, we can turn an idea or rough requirement into a working demo — in as little as 24 hours.' },
  ],
} as const;

const serviceCards = {
  ja: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Solution',
      title: '業務プロセスを、組織の資産へ',
      body: '属人化した判断基準や手順を可視化し、AIと人が協働するワークフローとして設計・実装します。',
      fitBullets: ['社内ノウハウが担当者に偏っている', '既存業務プロセスの改善・効率化をしたい', 'AIを活用した業務フローを社内に取り入れたい'],
      proofLine: '例：企画・リサーチ業務、システム開発業務（要件定義・実装・検証）など',
      cta: 'AI Workflow の詳細を見る',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Solution',
      title: 'AIを、使われるプロダクトへ',
      body: '社内ツールから顧客向けサービスまで、AI機能を価値の伝わる体験に仕上げます。',
      fitBullets: ['AI機能を活かした新規サービスを作りたい', '既存プロダクトにAI機能を組み込みたい', '業務ノウハウをプロダクトに落とし込みたい'],
      proofLine: '例：業務アシスタント、カスタマーサービス',
      cta: 'AI Application の詳細を見る',
    },
    {
      id: 'ai-driven-development',
      officialLine: 'AI-Driven Development Solution',
      title: 'AI駆動開発で、最短実装',
      body: 'AIエージェントと開発ワークフロー（設計→実装→テスト）を組み合わせ、速さと品質を両立した実装を実現します。',
      fitBullets: ['アイデア・発想を素早く動くデモやMVPにしたい', '開発プロセスの属人化や手戻りを減らしたい', '即時実装・イテレーション型の開発をしたい'],
      proofLine: '例：高速開発プロジェクト Rigel（16時間でMVP）',
      cta: 'AI-Driven Development の詳細を見る',
    },
  ],
  en: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Solution',
      title: 'Turn workflows into shared assets',
      body: 'We surface the decision rules and steps trapped in individuals, then rebuild them as workflows where people and AI work together.',
      fitBullets: ['Know-how is concentrated in a few people', 'You want to streamline existing workflows', 'You want AI built into how your team works'],
      proofLine: 'Examples: planning and research, software delivery (requirements, build, QA)',
      cta: 'Explore AI Workflow',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Solution',
      title: 'AI products people actually use',
      body: 'From internal tools to customer-facing products, we shape AI into an experience whose value is obvious to users.',
      fitBullets: ['Launch a new AI-powered service', 'Add AI to an existing product', 'Turn operational know-how into product experience'],
      proofLine: 'Examples: operational assistants, customer-service experiences',
      cta: 'Explore AI Application',
    },
    {
      id: 'ai-driven-development',
      officialLine: 'AI-Driven Development Solution',
      title: 'Ship fast with AI-driven development',
      body: 'We combine AI agents with a design-build-test workflow to deliver speed and quality at once — not a trade-off.',
      fitBullets: ['Get an idea to a working demo or MVP, fast', 'Cut rework and people-dependence in delivery', 'Build in fast, iterative cycles'],
      proofLine: 'Example: Rigel — a working MVP in 16 hours',
      cta: 'Explore AI-Driven Development',
    },
  ],
} as const;

const overlapNote = {
  ja: '「AI Workflow から AI Application へ」「AI駆動開発 × AI Workflow」など、組み合わせのご相談にも対応します。',
  en: 'Many engagements span lines — AI Workflow into AI Application, or AI-driven development paired with AI Workflow. We design across them.',
} as const;

const homeProjects = {
  ja: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: '在日外国人向けに、日常生活の情報や手続き・コツを案内するAIアシスタント。情報は定期的に自動更新されます。',
      cta: 'Japan Life Navi プロジェクト詳細',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI-Driven Development',
      summary: '個人事業主・小企業向けのAI自動仕訳記帳アプリ。構想から16時間で動くMVPを実現し、全体で約1週間でした。',
      cta: 'Rigel プロジェクト詳細',
      slug: 'rigel',
    },
    {
      name: 'Astra',
      category: 'AI Workflow',
      summary: '進捗・課題・リスク・リソースなどのPM管理をAIワークフローで実現し、AIエージェントが担うPMOサービスです。',
      cta: 'Astra プロジェクト詳細',
      slug: 'astra',
    },
  ],
  en: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: 'An AI assistant for foreign residents in Japan that guides daily-life information and procedures, kept current with automatic updates.',
      cta: 'View Japan Life Navi',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI-Driven Development',
      summary: 'An AI auto-bookkeeping app for freelancers and small businesses — a working MVP in 16 hours, with the full build done in about a week.',
      cta: 'View Rigel',
      slug: 'rigel',
    },
    {
      name: 'Astra',
      category: 'AI Workflow',
      summary: 'A PMO service where AI agents manage progress, issues, risks, and resources as an AI workflow.',
      cta: 'View Astra',
      slug: 'astra',
    },
  ],
} as const;

const processSteps = {
  ja: [
    { title: 'プロセス整理', body: '構想を軸に、判断基準や制約を確認し、実装すべき対象を見極めます。' },
    { title: '実装方針の設計', body: 'AIワークフロー・アプリケーション・AI駆動開発の使い分けと、構成・進め方を設計します。' },
    { title: '検証・最適化', body: 'デモやMVPで使われ方を確かめ、機能・導線・運用条件を調整しながら改善します。' },
    { title: '運用・定着', body: '引き継ぎ・レビュー・改善の流れを整え、組織で使い続けられる状態にします。' },
  ],
  en: [
    { title: 'Map the process', body: 'Starting from the concept, we clarify decision rules and constraints, and pinpoint what to build.' },
    { title: 'Design the approach', body: 'We decide how to combine workflows, applications, and AI-driven development, and set the structure and plan.' },
    { title: 'Validate and refine', body: 'We watch a demo or MVP in real use, then tune features, flows, and operating conditions as we iterate.' },
    { title: 'Operate and embed', body: 'We set up handoff, review, and improvement loops so your team keeps using and improving it.' },
  ],
} as const;

const companySnapshot = {
  ja: [
    ['Company', '株式会社ネビュラインフィニティ（Nebula Infinity Inc.）'],
    ['Location', '千葉県松戸市上本郷3948−3'],
  ],
  en: [
    ['Company', 'Nebula Infinity Inc.'],
    ['Location', 'Matsudo, Chiba, Japan'],
  ],
} as const;

const workingPrinciples = {
  ja: [
    { title: 'Business Logic First', body: '技術より先に、現場の判断・制約・事業要件を優先します。' },
    { title: 'Asset-minded Delivery', body: 'その場限りで終わらせず、引き継げる資産として残します。' },
    { title: 'Business-ready Implementation', body: '実務で使われる形まで、設計・実装します。' },
  ],
  en: [
    { title: 'Business Logic First', body: 'Business judgment, constraints, and requirements come before the tech.' },
    { title: 'Asset-minded Delivery', body: "We don't ship one-off output — we leave assets your team can own and hand off." },
    { title: 'Business-ready Implementation', body: "We design and build to the point where it's used in real work." },
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = homeCopy[lang];
  return generateSEOMetadata({ title: `Nebula Infinity - ${t.title}`, description: t.body, lang, path: '/' });
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = homeCopy[lang];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroSplit}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>{t.eyebrow}</span>
              <h1 className={styles.heroTitle}>{t.title}</h1>
              <p className={styles.heroBody}>{t.body}</p>
              <div className={styles.chipRow} aria-label={lang === 'ja' ? 'サービスライン' : 'Service lines'}>
                {serviceLines[lang].map((line) => <span key={line} className={styles.chip}>{line}</span>)}
              </div>
              <div className={styles.actionRow}>
                <Link href={`/${lang}/contact`} className={styles.linkButton}><Button size="lg">{t.contactCta}</Button></Link>
              </div>
            </div>
            <div className={styles.sideStack} aria-label={lang === 'ja' ? '提供価値' : 'Value highlights'}>
              {valuePanels[lang].map((panel) => (
                <div key={panel.title} className={`${styles.valuePanel} ${styles.featuredPanel}`}>
                  <h2 className={styles.valuePanelTitle}>{panel.title}</h2>
                  <p className={styles.cardBody}>{panel.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="home-services-heading" tabIndex={-1} className={`${styles.section} ${styles.sectionMuted} ${styles.anchorSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.servicesEyebrow}</span>
            <h2 id="home-services-heading" className={styles.sectionTitle}>{t.servicesTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.servicesSubtitle}</p>
          </div>
          <div className={styles.serviceGrid}>
            {serviceCards[lang].map((service) => (
              <article key={service.id} className={`${styles.card} ${styles.interactiveCard}`}>
                <span className={styles.columnLabel}>{service.officialLine}</span>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.body}</p>
                <ul className={styles.list}>{service.fitBullets.map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
                <div className={styles.proofStrip}><span className={styles.proofPill}>{service.proofLine}</span></div>
                <Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>{service.cta}<span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
          <p className={styles.noteText}>{overlapNote[lang]}</p>
        </div>
      </section>

      <section id="projects" aria-labelledby="home-projects-heading" tabIndex={-1} className={`${styles.section} ${styles.anchorSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.projectsEyebrow}</span>
            <h2 id="home-projects-heading" className={styles.sectionTitle}>{t.projectsTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.projectsSubtitle}</p>
          </div>
          <div className={styles.grid3}>
            {homeProjects[lang].map((project) => (
              <article key={project.slug} className={`${styles.card} ${styles.interactiveCard}`}>
                <span className={styles.columnLabel}>{project.category}</span>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardBody}>{project.summary}</p>
                <Link href={`/${lang}/projects/${project.slug}`} className={styles.ctaLink}>{project.cta}<span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.processEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.processTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.processSubtitle}</p>
          </div>
          <div className={styles.stepRail}>
            {processSteps[lang].map((step, index) => {
              const nodeClass = index === 1 || index === 2 ? `${styles.stepNode} ${styles.stepNodeAlt}` : styles.stepNode;
              return (
                <div key={step.title} className={styles.stepItem}>
                  <div className={nodeClass}>{index + 1}</div>
                  <h3 className={styles.stepHeading}>{step.title}</h3>
                  <p className={styles.stepText}>{step.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" aria-labelledby="home-about-heading" tabIndex={-1} className={`${styles.section} ${styles.sectionMuted} ${styles.anchorSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.aboutEyebrow}</span>
            <h2 id="home-about-heading" className={styles.sectionTitle}>{t.aboutTitle}</h2>
          </div>
          <div className={styles.aboutContent}>
            <div className={styles.snapshotTable} aria-label={lang === 'ja' ? '会社概要' : 'Company snapshot'}>
              {companySnapshot[lang].map(([label, value]) => (
                <div key={label} className={styles.snapshotRow}>
                  <strong>{label}</strong>
                  <span className={styles.snapshotText}>{value}</span>
                </div>
              ))}
            </div>
            <div className={styles.principleGrid}>
              {workingPrinciples[lang].map((card) => (
                <div key={card.title} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardBody}>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
