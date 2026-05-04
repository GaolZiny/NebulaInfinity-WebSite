import Link from 'next/link';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import styles from '@/styles/marketing.module.css';

const homeCopy = {
  ja: {
    eyebrow: 'AI社会実装のパートナー',
    title: '「AI」を、現場の「即戦力」へ',
    body: 'Nebula Infinity は、AI Workflow、AI Application、Web3.0 / Blockchain の設計と開発を通じて、構想を実務で使える仕組みに変えます。属人化したノウハウを整理し、運用できる形で実装し、事業の中で機能する状態まで伴走します。',
    primaryCta: 'お問い合わせ',
    secondaryCta: 'サービスを見る',
    transformationEyebrow: 'Why assetization matters',
    transformationTitle: '「導入」より先に、「定着する仕組み」を設計する',
    transformationSubtitle: 'AI 導入が止まる理由の多くは、技術そのものではなく、現場の判断基準や業務知識が人に閉じていることにあります。Nebula Infinity は、その知見を運用可能な形に整理し、再現性のある仕組みに変えます。',
    servicesEyebrow: 'Services',
    servicesTitle: '3つの実装ラインで、構想を事業に落とし込む',
    servicesSubtitle: '業務フローの資産化、AIアプリケーション開発、Web3.0 / Blockchain 活用まで、目的に合わせて最適な実装ラインを設計します。',
    choiceTitle: 'どのラインから始めるべきか',
    processEyebrow: 'Process',
    processTitle: '現場に入る前提で、設計から実装まで進める',
    processSubtitle: '要件が固まっていなくても構いません。業務の整理から入り、最小構成で試し、実装し、運用に載せるところまで伴走します。',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'AI社会実装のパートナー',
    aboutBody: 'Nebula Infinity は、AI と Web3.0 を机上の構想で終わらせず、現場で使える仕組みとして設計・開発する日本発のチームです。',
    ctaTitle: '要件が固まっていなくても、ご相談ください',
    ctaBody: '現場の課題、作りたいもの、整理できていない論点の段階でも構いません。Nebula Infinity が、実装の入口から一緒に整理します。',
    ctaSupport: '通常 2 営業日以内にご返信します。',
  },
  en: {
    eyebrow: 'AI Social Implementation Partner',
    title: 'Turn AI into front-line capability',
    body: 'Nebula Infinity designs and builds AI workflows, AI applications, and Web3.0 / blockchain products that work in real operations. We turn people-dependent know-how into systems your team can own, reuse, and scale.',
    primaryCta: 'Contact Us',
    secondaryCta: 'View Services',
    transformationEyebrow: 'Why assetization matters',
    transformationTitle: 'Design the operating system before introducing the tool',
    transformationSubtitle: 'AI projects often stall not because of the model, but because decision logic and operational know-how live inside individuals. We turn that knowledge into systems the organization can operate.',
    servicesEyebrow: 'Services',
    servicesTitle: 'Three implementation lines, one business partner',
    servicesSubtitle: 'From workflow assetization to AI application delivery and Web3.0 / blockchain implementation, we structure the right line of work around your business goal.',
    choiceTitle: 'Where to start',
    processEyebrow: 'Process',
    processTitle: 'Work from real operations, not abstract strategy',
    processSubtitle: 'You do not need a finished spec. We start by clarifying the operational problem, test the smallest viable shape, implement it, and support rollout.',
    aboutEyebrow: 'About Nebula Infinity',
    aboutTitle: 'An implementation partner for AI in real business',
    aboutBody: 'Nebula Infinity is a Japan-based team that does not leave AI and Web3.0 as strategy alone. We design and build them as systems that can operate in real business.',
    ctaTitle: 'You can reach out before the requirements are fixed',
    ctaBody: 'You do not need a finished brief. If you have an operational issue, a product idea, or an unclear starting point, we can structure the path with you.',
    ctaSupport: 'We usually reply within 2 business days.',
  },
} as const;

const serviceLines = [
  'AI Workflow Design & Development',
  'AI Application Design & Development',
  'Web3.0 / Blockchain Application Design & Development',
] as const;

const valuePanels = {
  ja: [
    { title: '属人業務を、仕組みに', body: '担当者依存の判断や手順を整理し、再利用できる運用資産へ変えます。' },
    { title: 'MVPから実装まで', body: '課題整理、設計、試作、実装、定着支援まで一気通貫で伴走します。' },
    { title: 'AI + Web3を一貫支援', body: 'AI活用とWeb3.0活用を、分断せず事業要件に合わせて設計します。' },
  ],
  en: [
    { title: 'From people-dependence to systems', body: 'We convert individual know-how into repeatable operational assets.' },
    { title: 'From MVP to implementation', body: 'We support discovery, design, prototyping, build, and rollout as one flow.' },
    { title: 'AI + Web3 under one partner', body: 'We design AI and Web3 initiatives around business requirements, not hype.' },
  ],
} as const;

const transformationColumns = {
  ja: [
    { label: 'Current state', bullets: ['担当者ごとに判断がばらつく', '引き継ぎに時間がかかる', 'AI を入れても運用に乗らない'] },
    { label: 'System design', bullets: ['判断基準と手順を可視化する', 'AI と人の役割分担を設計する', 'レビュー導線と改善ログを残す'] },
    { label: 'Business outcome', bullets: ['再現性のある実務フローになる', '組織で引き継げる資産になる', '品質と速度を両立できる'] },
  ],
  en: [
    { label: 'Current state', bullets: ['Decisions vary by operator', 'Handoffs take too long', 'AI never sticks in operations'] },
    { label: 'System design', bullets: ['Make decision rules visible', 'Define human + AI roles', 'Keep review paths and improvement logs'] },
    { label: 'Business outcome', bullets: ['Repeatable operational flow', 'Transferable organizational asset', 'Better speed with maintained quality'] },
  ],
} as const;

const choiceGuide = {
  ja: [
    { prompt: '業務の属人化や運用のばらつきが課題なら', line: 'AI Workflow Design & Development' },
    { prompt: '使われるAIプロダクトや業務ツールを作りたいなら', line: 'AI Application Design & Development' },
    { prompt: '履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら', line: 'Web3.0 / Blockchain Application Design & Development' },
  ],
  en: [
    { prompt: 'If people-dependence and inconsistent operations are the issue', line: 'AI Workflow Design & Development' },
    { prompt: 'If you need an AI product or internal tool people will actually use', line: 'AI Application Design & Development' },
    { prompt: 'If history, evaluation, contracts, or membership trust should become business value', line: 'Web3.0 / Blockchain Application Design & Development' },
  ],
} as const;

const serviceCards = {
  ja: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Design & Development',
      title: '属人業務を、再利用できる仕組みに',
      body: '判断基準、手順、レビュー導線、既存ツールとの接続を整理し、AI と人が協働できるワークフローへ再設計します。個別事例に閉じず、組織で引き継げる運用資産を作るラインです。',
      fitBullets: ['社内ノウハウが担当者に偏っている', '反復業務と判断業務が混在している', '既存システムと連携しながら改善したい'],
      proofLine: '代表例: マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー',
      cta: 'AI Workflowを見る',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Design & Development',
      title: 'AIを、使われるプロダクトへ',
      body: '業務ツール、顧客向けアプリ、AIネイティブな新規プロダクトまで、価値が伝わる体験として設計・実装します。',
      fitBullets: ['AI を活かした新規サービスを作りたい', '既存プロダクトにAI機能を組み込みたい', 'RAG / マルチモーダル / リアルタイム処理が必要'],
      proofLine: '代表実績: Japan Life Navi / Rigel',
      cta: 'AI Applicationを見る',
    },
    {
      id: 'web3-blockchain',
      officialLine: 'Web3.0 / Blockchain Application Design & Development',
      title: '信頼を扱う仕組みとして、Web3.0を事業へ',
      body: '会員基盤、証跡、契約、評価、トレーサビリティなど、信頼性が価値になる領域で Web3.0 / Blockchain を事業に組み込みます。投機ではなく、運用できる信頼インフラとして設計します。',
      fitBullets: ['履歴や真正性をサービス価値にしたい', '会員基盤やCRMに信頼性を組み込みたい', '既存サービスとつながる形で実装したい'],
      proofLine: '代表実績: Carina',
      cta: 'Web3.0 / Blockchainを見る',
    },
  ],
  en: [
    {
      id: 'ai-workflow',
      officialLine: 'AI Workflow Design & Development',
      title: 'Turn people-dependent work into reusable systems',
      body: 'We structure decision rules, steps, review paths, and existing-tool connections into workflows where people and AI can operate together. This line creates transferable operating assets, not one-off examples.',
      fitBullets: ['Critical know-how lives inside individuals', 'Operational work mixes repetition and judgment', 'You need improvement without replacing everything'],
      proofLine: 'Representative examples: multi-agent development workflow / product research workflow',
      cta: 'View AI Workflow',
    },
    {
      id: 'ai-application',
      officialLine: 'AI Application Design & Development',
      title: 'Build AI into products people actually use',
      body: 'We design and ship internal tools, customer-facing apps, and AI-native products that create clear user value.',
      fitBullets: ['You want a new AI-enabled service', 'Your existing product needs meaningful AI capability', 'RAG, multimodal, or streaming UX matters'],
      proofLine: 'Representative proof: Japan Life Navi / Rigel',
      cta: 'View AI Application',
    },
    {
      id: 'web3-blockchain',
      officialLine: 'Web3.0 / Blockchain Application Design & Development',
      title: 'Use Web3.0 as business trust infrastructure',
      body: 'We apply Web3.0 / blockchain to membership, evidence, contracts, evaluation, and traceability where trust becomes business value. The framing is practical infrastructure, not speculation.',
      fitBullets: ['History and authenticity should create service value', 'Membership or CRM needs a stronger trust layer', 'The solution must integrate with existing systems'],
      proofLine: 'Representative proof: Carina',
      cta: 'View Web3.0 / Blockchain',
    },
  ],
} as const;

const overlapNote = {
  ja: '入口は分けつつ、実装は分断しません。AI Workflow から AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせるケースにも対応します。',
  en: 'We separate the entry point, not the implementation. Work can begin with AI Workflow and expand into AI Application, or combine AI Application with Web3.0 / blockchain when the business problem requires it.',
} as const;

const processSteps = {
  ja: [
    { title: '課題を整理する', body: '現場の流れ、判断基準、制約を確認します。' },
    { title: '実装方針を設計する', body: 'AI / アプリ / Web3 の役割分担と構成を定義します。' },
    { title: 'MVP・実装を進める', body: '試作で確認しながら、本番利用に向けて磨き込みます。' },
    { title: '定着と改善を支援する', body: '引き継ぎ、運用、改善ポイントまで整理します。' },
  ],
  en: [
    { title: 'Clarify the problem', body: 'Review the current flow, decision logic, and constraints.' },
    { title: 'Design the build path', body: 'Define the right mix of AI, application, and Web3 capability.' },
    { title: 'Prototype and implement', body: 'Use an MVP to validate, then shape for production use.' },
    { title: 'Support adoption', body: 'Organize handoff, operations, and next improvements.' },
  ],
} as const;

const companySnapshot = {
  ja: [
    ['Company', 'Nebula Infinity（ネビュラインフィニティ）'],
    ['Base', 'Japan'],
    ['Domain', 'nebulainfinity.com'],
    ['One-liner', 'AI と Web3.0 を、事業で使える仕組みへ落とし込む実装チームです。'],
  ],
  en: [
    ['Company', 'Nebula Infinity'],
    ['Base', 'Japan'],
    ['Domain', 'nebulainfinity.com'],
    ['One-liner', 'An implementation team that turns AI and Web3.0 into systems businesses can use.'],
  ],
} as const;

const workingPrinciples = {
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

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.transformationEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.transformationTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.transformationSubtitle}</p>
          </div>
          <div className={styles.transformationPanel}>
            {transformationColumns[lang].map((column) => (
              <div key={column.label} className={styles.transformationColumn}>
                <span className={styles.columnLabel}>{column.label}</span>
                <ul className={styles.list}>{column.bullets.map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
              </div>
            ))}
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
              <p className={styles.supportText}>{t.ctaSupport}</p>
            </div>
            <div className={styles.bandActions}><Link href={`/${lang}/contact`} className={styles.linkButton}><Button size="lg">{t.primaryCta}</Button></Link></div>
          </div>
        </div>
      </section>
    </div>
  );
}
