import Link from 'next/link';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

const copy = {
  ja: {
    eyebrow: 'Services',
    title: '事業課題に合わせて、AI / Web3.0を実装する3つのサービス',
    subtitle: '業務プロセスの整理、AIアプリケーションの設計・開発、Web3.0基盤の実装まで。Nebula Infinityは、技術導入を目的化せず、現場で使われる仕組みとして具体化します。',
    decisionTitle: 'どのラインから始めるべきか、こう考える',
    serviceTitle: '3つのサービスライン',
    matrixEyebrow: 'How to choose',
    matrixTitle: '「誰に向くか」「何を作るか」「何で証明するか」を整理する',
    ctaTitle: 'どれを選ぶべきか、相談で決められます。',
    ctaBody: '現場課題、プロダクト構想、Web3.0施策の検討段階でも構いません。背景を共有いただければ、適した入口と進め方を一緒に整理します。',
    contact: 'お問い合わせ',
  },
  en: {
    eyebrow: 'Services',
    title: 'Choose the implementation line that fits your goal',
    subtitle: 'Nebula Infinity\'s services are organized into three lines: AI Workflow, AI Application, and Web3.0 / Blockchain. The structure starts from business outcomes, not from technology labels.',
    decisionTitle: 'A simple way to decide where to start',
    serviceTitle: 'Three service lines',
    matrixEyebrow: 'How to choose',
    matrixTitle: 'Clarify fit, deliverables, and proof',
    proofEyebrow: 'Representative proof',
    proofTitle: 'Representative examples by service line',
    proofSupport: 'More detailed or non-public examples can be shared in context during discovery.',
    overlapTitle: 'The service lines connect when the problem does',
    overlapBody: 'For example, an engagement may begin with AI Workflow and later expand into AI Application delivery, or combine AI Application with Web3.0 / Blockchain for customer experience design. We separate the entry point, not the actual implementation.',
    ctaTitle: 'You can decide the starting line with us',
    ctaBody: 'Whether you are dealing with an operational issue, a product concept, or an early Web3 initiative, we can help define the right entry point.',
    contact: 'Contact Us',
    projects: 'View Projects',
  },
} as const;

const decisionBullets = {
  ja: [
    '業務の属人化や運用のばらつきが課題なら：AI Workflow',
    '使われるAIプロダクトや業務ツールを作りたいなら：AI Application',
    '履歴、評価、契約、会員基盤などの信頼性を価値にしたいなら：Web3.0 / Blockchain',
  ],
  en: [
    'If people-dependence and inconsistency are the issue -> AI Workflow',
    'If you need an AI product or internal tool people will use -> AI Application',
    'If traceability, authenticity, or membership infrastructure matters -> Web3.0 / Blockchain',
  ],
} as const;

const jaServiceCards = {
  'ai-workflow': {
    title: '属人業務を、再現できる仕組みに',
    body: '属人化した業務の判断基準や手順を、AIと人が再現できるワークフローとして資産化します。',
    fitBullets: ['社内ノウハウが担当者に偏っている', '判断を伴う反復業務を標準化したい', '既存業務を置き換えすぎず、運用可能な形で改善したい'],
    representativeLine: '代表例：企画整理、開発プロセス、リサーチ業務のワークフロー化',
  },
  'ai-application': {
    title: 'AIを、使われるプロダクトへ',
    body: 'AI機能を、社内外のユーザーに使われるプロダクト体験として設計・実装します。',
    fitBullets: ['AIを活かした新規サービスを作りたい', '既存プロダクトにAI機能を組み込みたい', '業務知識や専門知識をアプリ体験に落とし込みたい'],
    representativeLine: '代表実績：Japan Life Navi / Rigel',
  },
  'web3-blockchain': {
    title: 'Web3.0テクノロジーを、ビジネスへ',
    body: '改ざんされにくい記録を、顧客体験・契約・評価・トレーサビリティを支える信頼基盤として活用します。',
    fitBullets: ['ポイント、CRM、レビュー、契約履歴を事業に組み込みたい', '真正性やトレーサビリティを価値にしたい', '既存サービスと接続できるWeb3.0活用を検討したい'],
    representativeLine: '代表実績：Carina',
  },
} as const;

const matrixRows = {
  'ai-workflow': {
    fit: {
      ja: 'オペレーション責任者 / 現場改善責任者 / 業務設計担当',
      en: 'Operations leads / process owners / workflow improvement teams',
    },
    deliverables: {
      ja: '現行業務整理 / 判断基準の明文化 / AIワークフロー設計 / 人のレビュー導線 / 既存ツール連携',
      en: 'Current-state mapping / decision rules / AI workflow design / human review path / integration spec',
    },
    proof: {
      ja: '企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化',
      en: 'Multi-agent development workflow / product research workflow',
    },
  },
  'ai-application': {
    fit: {
      ja: '新規事業責任者 / プロダクトオーナー / DX推進担当',
      en: 'New business leaders / product owners / digital transformation teams',
    },
    deliverables: {
      ja: '体験設計 / AI機能設計 / フロントエンド・バックエンド実装 / データ連携 / 運用設計',
      en: 'Experience design / AI feature design / frontend + backend build / data integration / operations design',
    },
    proof: {
      ja: 'Japan Life Navi / Rigel',
      en: 'Japan Life Navi / Rigel',
    },
  },
  'web3-blockchain': {
    fit: {
      ja: '事業開発 / CRM責任者 / 会員基盤責任者 / Web3.0施策担当',
      en: 'Business development / CRM leads / membership platform owners / Web3 initiative teams',
    },
    deliverables: {
      ja: '要件整理 / チェーン設計 / スマートコントラクト設計 / UI実装 / 既存サービス連携',
      en: 'Requirements framing / chain design / smart contract architecture / UI build / existing-service integration',
    },
    proof: {
      ja: 'Carina。ポイント、CRM、レビュー、契約、トレーサビリティなど、改ざん耐性が価値になる領域へ応用可能です。',
      en: 'Carina',
    },
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

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
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
            <div className={styles.chipRow}>
              {services.map((service) => (
                <span key={service.id} className={styles.chip}>{service.officialLine}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.card} ${styles.featuredCard}`}>
            <h2 className={styles.cardTitle}>{t.decisionTitle}</h2>
            <ul className={styles.list}>
              {decisionBullets[lang].map((bullet) => (
                <li key={bullet} className={styles.listItem}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.serviceTitle}</h2>
          </div>
          <div className={styles.serviceGrid}>
            {services.map((service) => {
              const jaCard = jaServiceCards[service.id];
              const title = lang === 'ja' ? jaCard.title : service.title.en;
              const body = lang === 'ja' ? jaCard.body : service.body.en;
              const fitBullets = lang === 'ja' ? jaCard.fitBullets : service.fitBullets.en;
              const representativeLine = lang === 'ja' ? jaCard.representativeLine : service.proofLine.en;
              return (
                <div key={service.id} className={`${styles.card} ${styles.interactiveCard}`}>
                  <span className={styles.columnLabel}>{service.officialLine}</span>
                  <h3 className={styles.cardTitle}>{title}</h3>
                  <p className={styles.cardBody}>{body}</p>
                  <ul className={styles.list}>
                    {fitBullets.map((bullet) => (
                      <li key={bullet} className={styles.listItem}>{bullet}</li>
                    ))}
                  </ul>
                  <div className={styles.proofStrip}><span className={styles.proofPill}>{representativeLine}</span></div>
                  <Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>
                    {service.cta[lang]}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.matrixEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.matrixTitle}</h2>
          </div>
          <div className={styles.sectionStack}>
            {services.map((service) => {
              const row = matrixRows[service.id];
              return (
                <div key={service.id} className={styles.snapshotTable}>
                  <div className={`${styles.snapshotRow} ${styles.featuredCard}`}>
                    <strong>{service.officialLine}</strong>
                    <div className={styles.cardBody}>{service.title[lang]}</div>
                  </div>
                  <div className={styles.snapshotRow}>
                    <strong>{lang === 'ja' ? '誰に向くか' : 'Best fit'}</strong>
                    <div className={styles.cardBody}>{row.fit[lang]}</div>
                  </div>
                  <div className={styles.snapshotRow}>
                    <strong>{lang === 'ja' ? '何を作るか' : 'Deliverables'}</strong>
                    <div className={styles.cardBody}>{row.deliverables[lang]}</div>
                  </div>
                  <div className={styles.snapshotRow}>
                    <strong>{lang === 'ja' ? '何で証明するか' : 'Proof'}</strong>
                    <div className={styles.cardBody}>{row.proof[lang]}</div>
                  </div>
                </div>
              );
            })}
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
            <div className={styles.bandActions}>
              <Link href={`/${lang}/contact`} className={styles.linkButton}>
                <Button size="lg">{t.contact}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
