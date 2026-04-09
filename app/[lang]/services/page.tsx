import Link from 'next/link';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

const copy = {
  ja: {
    eyebrow: 'Services',
    title: '目的から選べる、3つの実装ライン',
    subtitle: 'Nebula Infinity のサービスは、AI Workflow、AI Application、Web3.0 / Blockchain の 3 つに整理されています。技術名ではなく、事業で何を実現したいかから選べる構成です。',
    decisionTitle: 'どのラインから始めるべきか、こう考える',
    serviceTitle: '3つのサービスライン',
    matrixEyebrow: 'How to choose',
    matrixTitle: '「誰に向くか」「何を作るか」「何で証明するか」を整理する',
    proofEyebrow: 'Representative proof',
    proofTitle: 'サービスごとの代表例',
    proofSupport: '詳細な案件整理や非公開事例は、ご相談時に目的に合わせて共有します。',
    overlapTitle: 'サービスは分断せず、必要に応じて接続する',
    overlapBody: 'たとえば、AI Workflow で業務を整理したあとに AI Application へ進むケースや、AI Application と Web3.0 / Blockchain を組み合わせて顧客体験を設計するケースもあります。Nebula Infinity は、入口は分けつつ、実装は分断しません。',
    ctaTitle: 'どのラインから始めるべきか、相談しながら決められます',
    ctaBody: '現場課題、プロダクト構想、Web3施策の検討段階でも構いません。まずは背景を共有してください。',
    contact: 'お問い合わせ',
    projects: '実績を見る',
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
    '業務の属人化や運用のばらつきが課題 -> AI Workflow',
    '使われるAIプロダクトや業務ツールを作りたい -> AI Application',
    '台帳性・真正性・会員基盤を価値にしたい -> Web3.0 / Blockchain',
  ],
  en: [
    'If people-dependence and inconsistency are the issue -> AI Workflow',
    'If you need an AI product or internal tool people will use -> AI Application',
    'If traceability, authenticity, or membership infrastructure matters -> Web3.0 / Blockchain',
  ],
} as const;

const matrixRows = {
  'ai-workflow': {
    fit: {
      ja: 'オペレーション責任者 / 現場改善責任者 / 業務設計担当',
      en: 'Operations leads / process owners / workflow improvement teams',
    },
    deliverables: {
      ja: '現行業務整理 / 判断基準の明文化 / AIワークフロー設計 / 人のレビュー導線 / 連携仕様',
      en: 'Current-state mapping / decision rules / AI workflow design / human review path / integration spec',
    },
    proof: {
      ja: 'マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー',
      en: 'Multi-agent development workflow / product research workflow',
    },
  },
  'ai-application': {
    fit: {
      ja: '新規事業責任者 / プロダクトオーナー / DX推進担当',
      en: 'New business leaders / product owners / digital transformation teams',
    },
    deliverables: {
      ja: '体験設計 / AI機能設計 / フロント・バックエンド実装 / データ連携 / 運用設計',
      en: 'Experience design / AI feature design / frontend + backend build / data integration / operations design',
    },
    proof: {
      ja: 'Japan Life Navi / Rigel',
      en: 'Japan Life Navi / Rigel',
    },
  },
  'web3-blockchain': {
    fit: {
      ja: '事業開発 / CRM責任者 / 会員基盤責任者 / Web3新規施策担当',
      en: 'Business development / CRM leads / membership platform owners / Web3 initiative teams',
    },
    deliverables: {
      ja: '要件整理 / チェーン設計 / スマートコントラクト設計 / UI実装 / 既存サービス連携',
      en: 'Requirements framing / chain design / smart contract architecture / UI build / existing-service integration',
    },
    proof: {
      ja: 'Carina',
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
            {services.map((service) => (
              <div key={service.id} className={`${styles.card} ${styles.interactiveCard}`}>
                <span className={styles.columnLabel}>{service.officialLine}</span>
                <h3 className={styles.cardTitle}>{service.title[lang]}</h3>
                <p className={styles.cardBody}>{service.body[lang]}</p>
                <ul className={styles.list}>
                  {service.fitBullets[lang].map((bullet) => (
                    <li key={bullet} className={styles.listItem}>{bullet}</li>
                  ))}
                </ul>
                <Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>
                  {service.cta[lang]}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
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

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.proofEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.proofTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.proofSupport}</p>
          </div>
          <div className={styles.grid3}>
            {services.map((service) => (
              <div key={service.id} className={styles.proofCard}>
                <span className={styles.proofLabel}>{service.officialLine}</span>
                <h3 className={styles.proofTitle}>{service.proofLine[lang]}</h3>
                <p className={styles.proofSummary}>{service.body[lang]}</p>
                <Link href={`/${lang}/services/${service.id}`} className={styles.ctaLink}>
                  {service.cta[lang]}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={`${styles.card} ${styles.featuredCard}`}>
            <h2 className={styles.cardTitle}>{t.overlapTitle}</h2>
            <p className={styles.cardBody}>{t.overlapBody}</p>
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
              <Link href={`/${lang}/projects`} className={styles.linkButton}>
                <Button size="lg" variant="outline">{t.projects}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
