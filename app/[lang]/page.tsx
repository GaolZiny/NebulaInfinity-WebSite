import Link from 'next/link';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import projectsData from '@/data/projects/projects.json';
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
    processEyebrow: 'Process',
    processTitle: '現場に入る前提で、設計から実装まで進める',
    processSubtitle: '要件が固まっていなくても構いません。業務の整理から入り、最小構成で試し、実装し、運用に載せるところまで伴走します。',
    proofEyebrow: 'Proof',
    proofTitle: '実装力は、代表事例で示す',
    proofSubtitle: '公開できる範囲の代表例を通じて、Nebula Infinity の実装領域と深さを示します。',
    trustEyebrow: 'How we work',
    trustTitle: 'Nebula Infinity が重視する3つの基準',
    ctaTitle: '要件が固まっていなくても、ご相談ください',
    ctaBody: '現場の課題、作りたいもの、整理できていない論点の段階でも構いません。Nebula Infinity が、実装の入口から一緒に整理します。',
    ctaSupport: '通常 2 営業日以内にご返信します。',
    viewService: '詳細を見る',
    viewWorkflow: 'AI Workflowを見る',
    viewCase: '詳細を見る',
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
    processEyebrow: 'Process',
    processTitle: 'Work from real operations, not abstract strategy',
    processSubtitle: 'You do not need a finished spec. We start by clarifying the operational problem, test the smallest viable shape, implement it, and support rollout.',
    proofEyebrow: 'Proof',
    proofTitle: 'Representative proof of delivery',
    proofSubtitle: 'We show the depth of Nebula Infinity\'s delivery capability through a focused set of representative examples.',
    trustEyebrow: 'How we work',
    trustTitle: 'Three standards we do not compromise on',
    ctaTitle: 'You can reach out before the requirements are fixed',
    ctaBody: 'You do not need a finished brief. If you have an operational issue, a product idea, or an unclear starting point, we can structure the path with you.',
    ctaSupport: 'We usually reply within 2 business days.',
    viewService: 'View service',
    viewWorkflow: 'View AI Workflow',
    viewCase: 'View case',
  },
} as const;

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

const trustCards = {
  ja: [
    { title: 'Business Logic First', body: '技術の前に、現場の判断と事業要件を整理します。' },
    { title: 'Asset-minded delivery', body: 'その場限りの自動化ではなく、引き継げる運用資産を残します。' },
    { title: 'Business-ready implementation', body: 'AI も Web3.0 も、実務で使える形まで設計します。' },
  ],
  en: [
    { title: 'Business Logic First', body: 'We structure operational decisions and business requirements before choosing technology.' },
    { title: 'Asset-minded delivery', body: 'We leave behind operating assets your team can inherit and improve.' },
    { title: 'Business-ready implementation', body: 'We shape both AI and Web3.0 into business-usable systems.' },
  ],
} as const;

const workflowProof = {
  ja: {
    tag: 'AI Workflow Design & Development',
    title: 'ワークフロー資産化の代表例',
    summary: 'マルチエージェント開発ワークフローやプロダクトリサーチワークフローなど、判断や引き継ぎが分散しやすい業務を、再利用可能な運用フローへ設計します。',
    strip: ['判断基準の明文化', '役割分担の設計', '改善ログの蓄積'],
  },
  en: {
    tag: 'AI Workflow Design & Development',
    title: 'Representative workflow assetization examples',
    summary: 'We design reusable operating flows for work where judgment and handoff tend to scatter, such as multi-agent development and product research workflows.',
    strip: ['Visible decision rules', 'Designed role allocation', 'Accumulated improvement logs'],
  },
} as const;

const projectIds = ['gaijin-life-navi', 'rigel', 'carina'] as const;

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
  const featuredProjects = projectsData.projects.filter((project) => projectIds.includes(project.id as (typeof projectIds)[number]));

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
                <Link href={`/${lang}/services`} className={styles.linkButton}><Button size="lg" variant="outline">{t.secondaryCta}</Button></Link>
              </div>
              <div className={styles.chipRow}>
                {services.map((service) => <span key={service.id} className={styles.chip}>{service.officialLine}</span>)}
              </div>
            </div>
            <div className={styles.sideStack}>
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

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.servicesEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.servicesTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.servicesSubtitle}</p>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <div key={service.id} className={`${styles.card} ${styles.interactiveCard}`}>
                <span className={styles.columnLabel}>{service.officialLine}</span>
                <h3 className={styles.cardTitle}>{service.title[lang]}</h3>
                <p className={styles.cardBody}>{service.body[lang]}</p>
                <ul className={styles.list}>{service.fitBullets[lang].map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
                <div className={styles.proofStrip}><span className={styles.proofPill}>{service.proofLine[lang]}</span></div>
                <Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>{t.viewService}<span aria-hidden="true">→</span></Link>
              </div>
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

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.proofEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.proofTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.proofSubtitle}</p>
          </div>
          <div className={styles.proofGrid}>
            <div className={`${styles.proofCard} ${styles.featuredCard}`}>
              <span className={styles.proofLabel}>{workflowProof[lang].tag}</span>
              <h3 className={styles.proofTitle}>{workflowProof[lang].title}</h3>
              <p className={styles.proofSummary}>{workflowProof[lang].summary}</p>
              <div className={styles.proofStrip}>{workflowProof[lang].strip.map((item) => <span key={item} className={styles.proofPill}>{item}</span>)}</div>
              <Link href={`/${lang}/services/ai-workflow`} className={styles.ctaLink}>{t.viewWorkflow}<span aria-hidden="true">→</span></Link>
            </div>
            {featuredProjects.map((project) => (
              <div key={project.id} className={`${styles.proofCard} ${styles.proofCardInteractive}`}>
                <span className={styles.proofLabel}>{project.serviceLine === 'web3-blockchain' ? 'Web3.0 / Blockchain Application Design & Development' : 'AI Application Design & Development'}</span>
                <h3 className={styles.proofTitle}>{project.name[lang]}</h3>
                <p className={styles.proofSummary}>{project.summary[lang]}</p>
                <div className={styles.proofStrip}>{project.proofPoints.map((point: string) => <span key={point} className={styles.proofPill}>{point}</span>)}</div>
                <Link href={`/${lang}/projects/${project.slug}`} className={styles.ctaLink}>{t.viewCase}<span aria-hidden="true">→</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.trustEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.trustTitle}</h2>
          </div>
          <div className={styles.grid3}>{trustCards[lang].map((card) => <div key={card.title} className={styles.card}><h3 className={styles.cardTitle}>{card.title}</h3><p className={styles.cardBody}>{card.body}</p></div>)}</div>
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
