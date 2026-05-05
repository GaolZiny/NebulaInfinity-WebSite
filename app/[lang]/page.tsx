import Link from 'next/link';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import styles from '@/styles/marketing.module.css';

const homeCopy = {
  ja: {
    eyebrow: 'AI社会実装のパートナー',
    title: '「AI」を、現場の「即戦力」へ。',
    body: 'Nebula Infinityは、属人化した業務ノウハウを整理し、AIワークフロー、AIアプリケーション、Web3.0基盤として実装するパートナーです。技術導入を目的化せず、現場で使われる仕組みとして具体化します。',
    primaryCta: 'まずは要件を整理する',
    secondaryCta: 'サービスを見る',
    servicesEyebrow: 'Services',
    servicesTitle: '3つの実装ラインで、構想を事業に落とし込む',
    servicesSubtitle: '業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain活用まで。Nebula Infinityは、目的に合わせて必要な実装ラインを設計します。',
    choiceTitle: 'どのラインから始めるべきか',
    projectsEyebrow: 'Projects',
    projectsTitle: 'プロジェクト',
    projectsSubtitle: '一部の実装例(プロジェクト)を公開します。サービス領域ごとの詳細は、各プロジェクトページで確認できます。',
    processEyebrow: 'Process',
    processTitle: '整理から実装、運用・普及まで。',
    processSubtitle: '完成した仕様書がなくても構いません。業務の流れを整理し、実装方針を定め、検証しながら現場に広げます。',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI社会実装のパートナー',
    aboutBody: 'Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。',
    ctaTitle: '明確な要件がなくても、ご相談頂けます。',
    ctaBody: 'アイデア/要件を頂き、最短24時間以内に動くデモをお見せできます。',
    contactCta: 'お問い合わせ',
  },
  en: {
    eyebrow: 'AI Social Implementation Partner',
    title: 'Turn AI into front-line capability',
    body: 'Nebula Infinity organizes people-dependent operational know-how and implements it as AI workflows, AI applications, and Web3.0 infrastructure. We do not treat technology adoption as the goal; we turn it into systems used in real operations.',
    primaryCta: 'Clarify requirements first',
    secondaryCta: 'View Services',
    servicesEyebrow: 'Services',
    servicesTitle: 'Three implementation lines, one business partner',
    servicesSubtitle: 'From workflow assetization to AI application development and Web3.0 / blockchain use, Nebula Infinity designs the implementation line your business goal requires.',
    choiceTitle: 'Where to start',
    projectsEyebrow: 'Projects',
    projectsTitle: 'Projects',
    projectsSubtitle: 'A focused set of public implementation examples. Each card routes to the relevant project detail page.',
    processEyebrow: 'Process',
    processTitle: 'From process organization to implementation, operation, and adoption',
    processSubtitle: 'You do not need a finished specification. We organize the business flow, define the implementation direction, validate the approach, and help it spread into operations.',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'An implementation partner for AI in real business',
    aboutBody: 'Nebula Infinity is a Japan-based team that does not leave AI and Web3.0 as strategy alone. We design and build them as systems that can operate in real business.',
    ctaTitle: 'You can reach out even before requirements are clear.',
    ctaBody: 'Share an idea or requirements, and we can show a working demo in as little as 24 hours.',
    contactCta: 'Contact Us',
  },
} as const;

const serviceLines = [
  'AI Workflow Design & Development',
  'AI Application Design & Development',
  'Web3.0 / Blockchain Application Design & Development',
] as const;

const valuePanels = {
  ja: [
    { title: '属人業務を、資産に', body: '担当者ごとに閉じた判断基準や手順を整理し、組織で引き継げる仕組みに変えます。' },
    { title: '構想から実装まで', body: '要件整理、設計、試作、実装、運用設計まで、一つの流れとして伴走します。' },
    { title: 'AIとWeb3.0を事業へ', body: 'AIの活用と、改ざんされにくい記録基盤を、事業要件に合わせて設計します。' },
  ],
  en: [
    { title: 'Turn dependent work into assets', body: 'We structure individual decision rules and procedures into systems the organization can inherit.' },
    { title: 'From concept to implementation', body: 'We support requirements, design, prototyping, implementation, and operating design as one flow.' },
    { title: 'AI and Web3.0 for business', body: 'We design AI use and tamper-resistant record infrastructure around business requirements.' },
  ],
} as const;

const choiceGuide = {
  ja: [
    { prompt: '業務の属人化や運用のばらつきが課題なら', line: 'AI Workflow Design & Development' },
    { prompt: '使われるAIプロダクトや業務ツールを作りたいなら', line: 'AI Application Design & Development' },
    { prompt: '履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら', line: 'Web3.0 / Blockchain Application Design & Development' },
  ],
  en: [
    { prompt: 'If people-dependence or inconsistent operation is the issue', line: 'AI Workflow Design & Development' },
    { prompt: 'If you need an AI product or operational tool people will actually use', line: 'AI Application Design & Development' },
    { prompt: 'If history, evaluation, contracts, or membership trust should become business value', line: 'Web3.0 / Blockchain Application Design & Development' },
  ],
} as const;

const serviceCards = {
  ja: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Design & Development',
      title: '属人業務を、再現できるワークフローへ',
      body: '判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。',
      fitBullets: ['社内ノウハウが担当者に偏っている', '判断を伴う反復業務を標準化したい', '既存の業務やツールと接続しながら改善したい'],
      proofLine: '代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化',
      cta: 'AI Workflowを見る',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Design & Development',
      title: 'AIを、使われるプロダクトへ',
      body: '社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。',
      fitBullets: ['AIを活かした新規サービスを作りたい', '既存プロダクトにAI機能を組み込みたい', '業務知識をプロダクト体験に落とし込みたい'],
      proofLine: '代表実績：Japan Life Navi / Rigel',
      cta: 'AI Applicationを見る',
    },
    {
      id: 'web3-blockchain',
      officialLine: 'Web3.0 / Blockchain Application Design & Development',
      title: '改ざんされにくい記録を、事業の信頼基盤へ',
      body: 'ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。',
      fitBullets: ['顧客接点や会員基盤に信頼性を持たせたい', '履歴・評価・合意を改ざんされにくい形で残したい', '既存サービスと接続できるWeb3.0活用を検討したい'],
      proofLine: '代表実績：Carina',
      cta: 'Web3.0 / Blockchainを見る',
    },
  ],
  en: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Design & Development',
      title: 'Turn people-dependent work into repeatable workflows',
      body: 'We organize decision criteria and procedures, then design and implement business processes where AI and people can work together.',
      fitBullets: ['Internal know-how is concentrated in specific people', 'You want to standardize repeat work that involves judgment', 'You need improvement while connecting to existing operations and tools'],
      proofLine: 'Examples: workflowization of repeated judgment and procedure, including planning, development processes, and research work',
      cta: 'View AI Workflow',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Design & Development',
      title: 'Turn AI into products people actually use',
      body: 'From internal tools to customer-facing services, we embed AI capability as an experience whose value is clear to users.',
      fitBullets: ['You want to build a new service that uses AI meaningfully', 'You want to add AI capability to an existing product', 'You want operational knowledge to become product experience'],
      proofLine: 'Representative proof: Japan Life Navi / Rigel',
      cta: 'View AI Application',
    },
    {
      id: 'web3-blockchain',
      officialLine: 'Web3.0 / Blockchain Application Design & Development',
      title: 'Turn tamper-resistant records into business trust infrastructure',
      body: 'We implement Web3.0 in areas where trust creates value, including points, CRM, reviews, contracts, and traceability.',
      fitBullets: ['Customer touchpoints or membership systems need a stronger trust layer', 'History, evaluation, and agreement records should be hard to tamper with', 'You are exploring Web3.0 use that connects with an existing service'],
      proofLine: 'Representative proof: Carina',
      cta: 'View Web3.0 / Blockchain',
    },
  ],
} as const;

const overlapNote = {
  ja: '入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。',
  en: 'We separate the entry point, not the implementation. Work can begin with AI Workflow and expand into AI Application, or combine AI Application with Web3.0 / blockchain when the business problem requires it.',
} as const;

const homeProjects = {
  ja: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: '生活情報を分かりやすく案内するAIアプリケーションの実装例。AI機能を、ユーザーが使えるプロダクト体験として成立させた証明として扱います。',
      cta: 'Japan Life Navi 詳細',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI Application',
      summary: '業務や業界要件に合わせてAI機能を組み込むアプリケーション実装例。AIを単体機能ではなく、継続して使われる体験に落とし込む証明として扱います。',
      cta: 'Rigel 詳細',
      slug: 'rigel',
    },
    {
      name: 'Carina',
      category: 'Web3.0 / Blockchain',
      summary: 'ポイント、クーポン、会員証をブロックチェーン基盤で扱うCRM。Web3.0を顧客体験と運用に接続する証明として扱います。',
      cta: 'Carina 詳細',
      slug: 'carina',
    },
  ],
  en: [
    {
      name: 'Japan Life Navi',
      category: 'AI Application',
      summary: 'An AI application proof showing how AI capability becomes a usable product experience for navigating life information.',
      cta: 'View Japan Life Navi',
      slug: 'gaijin-life-navi',
    },
    {
      name: 'Rigel',
      category: 'AI Application',
      summary: 'An AI application proof showing AI embedded into a product experience shaped around operational and industry requirements.',
      cta: 'View Rigel',
      slug: 'rigel',
    },
    {
      name: 'Carina',
      category: 'Web3.0 / Blockchain',
      summary: 'A CRM proof using blockchain infrastructure for points, coupons, and membership, connecting Web3.0 to customer experience and operations.',
      cta: 'View Carina',
      slug: 'carina',
    },
  ],
} as const;

const processSteps = {
  ja: [
    { title: 'プロセス整理', body: '現場の流れ、判断基準、関係者、制約を確認し、実装すべき対象を整理します。' },
    { title: '実装方針設計', body: 'AI、アプリケーション、Web3.0の使い分けと、必要な構成・進め方を設計します。' },
    { title: '検証・最適化', body: '小さく形にして使われ方を確認し、機能・導線・運用条件を調整します。' },
    { title: '運用・普及', body: '引き継ぎ、レビュー、改善の流れを整え、組織で使い続けられる状態にします。' },
  ],
  en: [
    { title: 'Process organization', body: 'Clarify the operational flow, decision criteria, stakeholders, and constraints.' },
    { title: 'Implementation direction design', body: 'Define how AI, applications, and Web3.0 should be used and how the work should proceed.' },
    { title: 'Validation and optimization', body: 'Shape the smallest useful version, observe use, and adjust functions, flows, and operating conditions.' },
    { title: 'Operation and adoption', body: 'Prepare handoff, review, and improvement loops so the organization can keep using the system.' },
  ],
} as const;

const companySnapshot = {
  ja: [
    ['Company', 'Nebula Infinity（ネビュラインフィニティ）'],
    ['Location', 'Japan'],
  ],
  en: [
    ['Company', 'Nebula Infinity'],
    ['Location', 'Japan'],
  ],
} as const;

const workingPrinciples = {
  ja: [
    { title: 'Business Logic First', body: '技術を選ぶ前に、現場の判断、制約、事業要件を整理します。' },
    { title: 'Asset-minded Delivery', body: 'その場限りの自動化ではなく、引き継げる運用資産として残します。' },
    { title: 'Business-ready Implementation', body: 'AIもWeb3.0も、実務で使われる形まで設計・実装します。' },
  ],
  en: [
    { title: 'Business Logic First', body: 'Before choosing technology, we organize on-site judgment, constraints, and business requirements.' },
    { title: 'Asset-minded Delivery', body: 'We do not leave behind one-off automation; we leave operating assets the organization can inherit.' },
    { title: 'Business-ready Implementation', body: 'We design and implement AI and Web3.0 in forms that are used in real work.' },
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
              <div className={styles.actionRow}>
                <Link href={`/${lang}/contact`} className={styles.linkButton}><Button size="lg">{t.primaryCta}</Button></Link>
                <Link href={`/${lang}/#services`} className={styles.linkButton}><Button size="lg" variant="outline">{t.secondaryCta}</Button></Link>
              </div>
              <div className={styles.chipRow} aria-label={lang === 'ja' ? 'サービスライン' : 'Service lines'}>
                {serviceLines.map((line) => <span key={line} className={styles.chip}>{line}</span>)}
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
          <div className={styles.choiceGuide}>
            <h3 className={styles.panelTitle}>{t.choiceTitle}</h3>
            <div className={styles.choiceGrid}>
              {choiceGuide[lang].map((choice) => (
                <div key={choice.line} className={styles.choiceRow}>
                  <span className={styles.choicePrompt}>{choice.prompt}</span>
                  <strong>{choice.line}</strong>
                </div>
              ))}
            </div>
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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.projectsEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.projectsTitle}</h2>
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
          <div className={styles.aboutGrid}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>{t.aboutEyebrow}</span>
              <h2 id="home-about-heading" className={styles.sectionTitle}>{t.aboutTitle}</h2>
              <p className={styles.sectionSubtitle}>{t.aboutBody}</p>
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
