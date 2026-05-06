import Link from 'next/link';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import styles from '@/styles/marketing.module.css';

const homeCopy = {
  ja: {
    eyebrow: 'AI社会実装のパートナー',
    title: '「AI」を、現場の「即戦力」へ',
    body: 'Nebula Infinityは、AIの力を引き出し、クライアントのプロセス（業務・作業・構想）をワークフロー/アプリケーション/コンテンツとして実装するパートナーです。',
    servicesEyebrow: 'Services',
    servicesTitle: '3つのソリューションで、アイデア/構想を事業に落とし込む',
    servicesSubtitle: '業務フローの資産化、AIアプリケーション開発、AI-Driven Developmentまで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。',
    projectsEyebrow: 'Projects',
    projectsTitle: 'プロジェクト例',
    projectsSubtitle: '一部のプロジェクト例を公開します。詳細内容は、各プロジェクトページでも確認できます。',
    processEyebrow: 'Process',
    processTitle: 'アイデア/ニーズから実装、運用まで。',
    processSubtitle: '明確な要件がなくても構いません。構想（アイデア/ニーズ）からプロセスを整理し、実装方針を定め、検証しながら仕上げていきます。',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI社会実装のパートナー',
    ctaTitle: '思いだけでもご相談頂けます。',
    ctaBody: 'アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。',
    contactCta: 'お問い合わせ',
  },
  en: {
    eyebrow: 'AI Social Implementation Partner',
    title: 'Turn AI into front-line capability',
    body: 'Nebula Infinity draws out the power of AI and implements client processes — operations, work, and ideas — as workflows, applications, and content that can be used in real business.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Three solutions that turn ideas into business implementation',
    servicesSubtitle: 'From workflow assetization to AI application development and AI-Driven Development, Nebula Infinity designs the implementation line your business goal requires.',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Project examples',
    projectsSubtitle: 'A focused set of public project examples. Details are available on each project page.',
    processEyebrow: 'Process',
    processTitle: 'From ideas and needs to implementation and operation.',
    processSubtitle: 'You do not need finished requirements. We organize the process from an idea or need, define the implementation direction, and refine it through validation.',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI Social Implementation Partner',
    ctaTitle: 'You can reach out with only an initial thought.',
    ctaBody: 'Share an idea or requirements, and we can show a working demo in as little as 24 hours.',
    contactCta: 'Contact Us',
  },
} as const;

const serviceLines = {
  ja: ['AI Workflow', 'AI Application', 'Web Contents / Web3.0'],
  en: ['AI Workflow', 'AI Application', 'Web Contents / Web3.0'],
} as const;

const valuePanels = {
  ja: [
    { title: '業務プロセスを、組織の資産に', body: '担当者に閉じた判断基準や作業手順を可視化し、進化可能な仕組みに変え、資産化します。' },
    { title: '構想から実現まで', body: '構想整理から、試作、設計、実装、運用まで伴走します。' },
    { title: '最短24時間動くデモ', body: '超高速AI駆動開発により、最短24時間以内、アイデア・要件から動くデモを提供できます。' },
  ],
  en: [
    { title: 'Turn business processes into assets', body: 'We visualize decision rules and procedures that are closed inside individuals, then turn them into systems that can evolve.' },
    { title: 'From concept to realization', body: 'We support concept organization, prototyping, design, implementation, and operation as one continuous flow.' },
    { title: 'Working demos in as little as 24 hours', body: 'Through ultra-fast AI-driven development, we can turn ideas and requirements into a working demo in as little as 24 hours.' },
  ],
} as const;

const serviceCards = {
  ja: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Solution',
      title: '業務プロセスを、組織のアセットへ',
      body: '判断基準や手順を可視化し、AIと人が協働する効率的なAIワークフローを設計・実装します。',
      fitBullets: ['社内ノウハウが担当者に偏っている', '既存業務プロセスの改善・効率化をしたい', 'AIを活用した業務フローを社内に取り入れたい'],
      proofLine: '例：企画・リサーチ業務、システム開発業務（要件定義、実装、検証）など',
      cta: 'AI Workflow サービス詳細を見る',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Solution',
      title: 'AIを、使われるプロダクトへ',
      body: '社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。',
      fitBullets: ['AI機能を活かした新規サービスを作りたい', '既存プロダクトにAI機能を組み込みたい', '業務ノウハウをプロダクトに落とし込みたい'],
      proofLine: '例：業務アシスタント、カスタマーサービス',
      cta: 'AI Application サービス詳細を見る',
    },
    {
      id: 'ai-driven-development',
      officialLine: 'AI-Driven Development Solution',
      title: 'AI駆動開発で、超高速実装',
      body: 'AI Agentと開発ワークフロー（設計→実装→テスト）を組み合わせ、超高速高品質な実装を実現します。',
      fitBullets: ['アイデア・発想を素早く動くデモやMVPにしたい', '開発プロセスの属人化や手戻りを減らしたい', '即時実装・イテレーション型の開発をしたい'],
      proofLine: '例：超高速開発プロジェクトRigel',
      cta: 'AI-Driven Development サービスを見る',
    },
  ],
  en: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Solution',
      title: 'Turn business processes into organizational assets',
      body: 'We visualize decision criteria and procedures, then design and implement efficient AI workflows where people and AI collaborate.',
      fitBullets: ['Internal know-how is concentrated in specific people', 'You want to improve and streamline existing business processes', 'You want to introduce AI-enabled workflows into the organization'],
      proofLine: 'Examples: planning and research work, system development work such as requirements, implementation, and verification',
      cta: 'View AI Workflow service',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Solution',
      title: 'Turn AI into products people actually use',
      body: 'From internal tools to customer-facing services, we embed AI capability as an experience whose value is clear to users.',
      fitBullets: ['You want to build a new service using AI capability', 'You want to add AI capability to an existing product', 'You want operational know-how to become product experience'],
      proofLine: 'Examples: operational assistants and customer service experiences',
      cta: 'View AI Application service',
    },
    {
      id: 'ai-driven-development',
      officialLine: 'AI-Driven Development Solution',
      title: 'Ultra-fast implementation with AI-driven development',
      body: 'We combine AI agents with development workflows — design, implementation, and testing — to deliver fast, high-quality implementation.',
      fitBullets: ['You want to turn an idea into a working demo or MVP quickly', 'You want to reduce people-dependence and rework in the development process', 'You want immediate implementation and iterative development'],
      proofLine: 'Example: ultra-fast development project Rigel',
      cta: 'View AI-Driven Development',
    },
  ],
} as const;

const overlapNote = {
  ja: 'AI Workflow から AI Application へ進むケースや、AI-Driven Development と AI Workflow を組み合わせるケースにも対応します。',
  en: 'We also support cases that begin with AI Workflow and move into AI Application, or combine AI-Driven Development with AI Workflow.',
} as const;

const homeProjects = {
  ja: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: '在日外国人向けに、日常生活の関連情報、手続きやコツなどを分かりやすく案内するAIアシスタント（エージェント）です。独自のノウハウ、定期的に自動更新の仕組みも搭載しています。',
      cta: 'Japan Life Navi プロジェクト詳細',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI-Driven Development',
      summary: '個人事業主・小企業向けに、AI自動仕訳できる記帳アプリです。AI駆動の超高速開発により、構想スタートから16時間で動くMVPを提供し、追加機能開発を含めた開発期間は1週間に収まった。',
      cta: 'Rigel プロジェクト詳細',
      slug: 'rigel',
    },
    {
      name: 'Astra',
      category: 'AI Workflow',
      summary: 'プロジェクト管理ニーズに向け、進捗/課題/リスク/リソースなどのPM管理プロセスをAIワークフローで実現し、機能強化したAI agentによるPMOサービスを提供する。',
      cta: 'Astra プロジェクト詳細',
      slug: 'astra',
    },
  ],
  en: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: 'An AI assistant application for foreign residents in Japan, guiding daily-life information, procedures, and practical know-how with proprietary know-how and regularly updated content.',
      cta: 'View Japan Life Navi',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI-Driven Development',
      summary: 'An AI bookkeeping app for freelancers and small businesses. AI-driven ultra-fast development delivered a working MVP 16 hours from concept start, with additional feature development completed within one week.',
      cta: 'View Rigel',
      slug: 'rigel',
    },
    {
      name: 'Astra',
      category: 'AI Workflow',
      summary: 'A PMO service powered by enhanced AI agents, implementing project-management processes such as progress, issues, risks, and resources as AI workflows.',
      cta: 'View Astra',
      slug: 'astra',
    },
  ],
} as const;

const processSteps = {
  ja: [
    { title: 'プロセス整理', body: '構想実現のプロセスを軸に、判断基準や制約条件などを確認し、実装すべき対象を整理します。' },
    { title: '実装方針設計', body: 'AIワークフロー、アプリケーションの使い分けと、必要な構成・進め方を設計します。' },
    { title: '検証・最適化', body: 'デモ/MVPで使われ方を確認し、機能・導線・運用条件を調整し、イテレーションします。' },
    { title: '運用・普及', body: '引き継ぎ、レビュー、改善の流れを整え、組織で使い続けられる状態にします。' },
  ],
  en: [
    { title: 'Process organization', body: 'Use the process for realizing the idea as the axis, then clarify decision criteria, constraints, and what should be implemented.' },
    { title: 'Implementation direction design', body: 'Define how to use AI workflows and applications, along with the required structure and way of working.' },
    { title: 'Validation and optimization', body: 'Use a demo or MVP to observe use, adjust functions, flows, and operating conditions, and iterate.' },
    { title: 'Operation and adoption', body: 'Prepare handoff, review, and improvement loops so the organization can keep using the system.' },
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
    { title: 'Business Logic First', body: '技術より、現場の判断、制約、事業要件を優先します。' },
    { title: 'Asset-minded Delivery', body: 'その場限りではなく、引き継げる資産として残します。' },
    { title: 'Business-ready Implementation', body: '実務で使われる形まで設計・実装します。' },
  ],
  en: [
    { title: 'Business Logic First', body: 'Before technology, we prioritize on-site judgment, constraints, and business requirements.' },
    { title: 'Asset-minded Delivery', body: 'We do not leave one-off output behind; we leave transferable assets.' },
    { title: 'Business-ready Implementation', body: 'We design and implement systems in forms that are used in real work.' },
  ],
} as const;

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = homeCopy[lang];
  return { title: `Nebula Infinity - ${t.title}`, description: t.body };
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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.featuredBand}>
            <div className={styles.bandCopy}>
              <h2 className={styles.bandTitle}>{t.ctaTitle}</h2>
              <p className={styles.bandBody}>{t.ctaBody}</p>
            </div>
            <div className={styles.bandActions}><Link href={`/${lang}/contact`} className={styles.linkButton}><Button size="lg">{t.contactCta}</Button></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
