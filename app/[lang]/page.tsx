import Link from 'next/link';
import Button from '@/components/ui/Button';
import { getLanguage } from '@/lib/i18n';
import { generateSEOMetadata } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

const homeCopy = {
  ja: {
    eyebrow: 'AI社会実装のパートナー',
    title: '「AI」を、現場の「即戦力」へ',
    body: 'Nebula Infinityは、構想から運用まで伴走し、業務や構想などを、AIワークフロー・AIアプリケーション・AI駆動開発で「使える形」に実装するパートナーです。',
    servicesEyebrow: 'Services',
    servicesTitle: '目的から選ぶ、3つの実装ライン',
    servicesSubtitle: 'AIワークフロー、AIアプリケーション、AI駆動開発。目的に合わせて、最適なラインを組み合わせます。',
    projectsEyebrow: 'Projects',
    projectsTitle: 'プロジェクト例',
    projectsSubtitle: '代表的なプロジェクトをご紹介します。詳細は各プロジェクトページをご覧ください。',
    processEyebrow: 'Process',
    processTitle: '構想から運用まで、私たちの進め方',
    processSubtitle: 'ヒアリングから診断・設計・実施、運用後の改善まで一貫して伴走します。明確な要件はなくても構いません。',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI社会実装のパートナー',
    contactCta: 'お問い合わせ',
  },
  en: {
    eyebrow: 'Your partner for putting AI to work',
    title: 'Make AI a force on your front line',
    body: 'Nebula Infinity is your end-to-end implementation partner — from concept to operation. We turn your operations and concepts into working AI: workflows, applications, and AI-driven builds.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Three implementation lines, chosen by goal',
    servicesSubtitle: 'AI workflows, AI applications, and AI-driven development — combined to fit your goal.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Selected work',
    projectsSubtitle: 'A few projects that show how we work. See each page for the full story.',
    processEyebrow: 'Process',
    processTitle: 'How we work — from concept to operation',
    processSubtitle: 'From listening through diagnosis, design, and build to post-launch improvement — we stay with you. No finished spec required.',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'Your partner for putting AI to work',
    contactCta: 'Contact Us',
  },
} as const;

const serviceLines = {
  ja: ['AI Workflow', 'AI Application', 'AI-Driven Development'],
  en: ['AI Workflow', 'AI Application', 'AI-Driven Development'],
} as const;

const valuePanels = {
  ja: [
    { title: '個人の知見を、組織の資産に', body: '担当者に依存した判断や手順を可視化し、組織が運用・進化できる資産に変えます。' },
    { title: 'AIと人で、効率も働きがいも', body: '重い定型業務はAIが担い、人は判断と創造に集中。業務効率と働きがいを両立します。' },
    { title: 'AI駆動で、最短でカタチに', body: 'AI駆動開発により、構想や要件から、最短24時間で動くMVPをお見せします。' },
  ],
  en: [
    { title: 'Turn individual know-how into a shared asset', body: 'We surface the judgment and steps that depend on individuals, and turn them into an asset your organization can run and evolve.' },
    { title: 'Efficiency and more rewarding work', body: 'AI takes the heavy, routine load so people focus on judgment and creativity — efficiency and fulfilment together.' },
    { title: 'From idea to working MVP, fast', body: 'With AI-driven development, we turn a concept or rough requirement into a working MVP — in as little as 24 hours.' },
  ],
} as const;

const serviceCards = {
  ja: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Solution',
      title: '業務プロセスを、組織の資産へ',
      body: '個人に依存した判断や手順を可視化し、AIと人が協働するワークフローに設計・実装します。',
      fitBullets: ['社内ノウハウが個人に偏っている', '既存業務を改善・効率化したい', 'AI活用を社内業務に取り入れたい'],
      proofLine: '例：企画・リサーチ、システム開発の業務',
      cta: 'AI Workflow の詳細を見る',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Solution',
      title: 'AIを、使われるプロダクトへ',
      body: '社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として実装します。',
      fitBullets: ['AIを活かした新規サービスを作りたい', '既存プロダクトにAIを組み込みたい', '業務知見をプロダクトに活かしたい'],
      proofLine: '例：業務アシスタント、顧客向けサービス',
      cta: 'AI Application の詳細を見る',
    },
    {
      id: 'ai-driven-development',
      officialLine: 'AI-Driven Development Solution',
      title: 'AI駆動開発で、最短実装',
      body: 'AIエージェントと開発ワークフローを組み合わせ、速さと品質を両立した実装を実現します。',
      fitBullets: ['構想を素早く動くMVPにしたい', '開発の個人依存や手戻りを減らしたい', '短いサイクルで実装したい'],
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
      proofLine: 'Examples: planning, research, software delivery',
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
      fitBullets: ['Get a concept to a working MVP, fast', 'Cut rework and people-dependence in delivery', 'Build in short, iterative cycles'],
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
    { title: 'ヒアリング', body: '構想や課題からご相談ください。明確な要件は不要です。' },
    { title: '診断', body: '業務を読み解き、資産化できる課題と方向を見極めます。' },
    { title: '設計', body: 'AIと人の役割と、最適な実装ラインを設計します。' },
    { title: '実施', body: 'AI駆動で、最短に動くカタチへ実装します。' },
    { title: '効果検証', body: '独自の評価体系にもとづき、効果を多面的かつ正確に検証します。' },
    { title: '改善', body: '運用しながら改善し、組織の資産にして次へ。' },
  ],
  en: [
    { title: 'Listen', body: 'Bring your concept or concerns — no finished spec needed.' },
    { title: 'Diagnose', body: 'We find the real problem and what can become an asset.' },
    { title: 'Design', body: 'We design the AI-and-people split and the right line.' },
    { title: 'Build', body: 'We implement fast with AI-driven development.' },
    { title: 'Measure', body: 'We verify results with a systematic, multi-dimensional framework.' },
    { title: 'Improve', body: 'We improve in operation and turn it into an asset.' },
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
              const isLoopEnd = index === 0 || index === processSteps[lang].length - 1;
              const nodeClass = isLoopEnd ? `${styles.stepNode} ${styles.stepNodeAlt}` : styles.stepNode;
              return (
                <div key={step.title} className={styles.stepItem}>
                  <div className={styles.stepHead}>
                    <span className={nodeClass}>{index + 1}</span>
                    <h3 className={styles.stepHeading}>{step.title}</h3>
                  </div>
                  <p className={styles.stepText}>{step.body}</p>
                </div>
              );
            })}
          </div>
          <div className={styles.processLoop}>
            <span>{lang === 'ja' ? '↺ 改善から、次のヒアリングへ。継続的に改善します' : '↺ Improve loops back to Listen — we keep improving with you'}</span>
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
