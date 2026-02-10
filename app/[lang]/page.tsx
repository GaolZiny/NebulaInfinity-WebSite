import { Fragment } from 'react';
import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import styles from './page.module.css';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

const renderWithBreaks = (text: string) =>
  text.split('\n').map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </Fragment>
  ));

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `Nebula Infinity - ${t.hero.title}`,
    description: t.hero.subtitle,
  };
}

export default function HomePage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  const isJa = params.lang === 'ja';

  const heroHighlights = isJa
    ? [
      { label: '自動化ワークフロー', value: '業務コスト大幅削減' },
      { label: 'AIネイティブサービス', value: '低予算と高要件の両立' },
      { label: 'AI駆動開発', value: '最短1時間でMVP' },
    ]
    : [
      { label: 'Automation Workflows', value: 'Dramatic cost reduction' },
      { label: 'AI-Native Services', value: 'High requirements, lower budgets' },
      { label: 'AI-Driven Development', value: 'MVP in as little as 1 hour' },
    ];

  const heroDescription = isJa
    ? '繰り返される業務フローも、高度なバックエンド処理も、AIの力を最大限に引き出す。Nebula Infinityは、業務プロセスの「完全自動化」と、AIネイティブサービスの「高速開発」を通じて、御社の競争力を最大化する、AI実装のスペシャリストです。'
    : 'From repetitive workflows to complex backend processing — we maximize the power of AI. Nebula Infinity specializes in full process automation and rapid AI-native service development, maximizing your competitive edge.';

  const bentoCards = isJa
    ? [
      {
        title: '本質的な課題の特定',
        description: 'プロのコンサルタントによる業務整理',
        bullets: ['業務フローを可視化、潜在課題とニーズを発掘', 'スコープと目標を明確に定義'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M15.5 15.5L20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
            <path d="M11 8v6M8 11h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        title: '実働観点のワークフロー設計',
        bullets: ['業務フローを徹底的に分析し、自動化ワークフローの実行ロジックへ変換', '例外処理や複雑な分岐も網羅し、止まることのない現場で使える自動化フローを設計'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 12h5.5l2.5-4 2.5 8 2.5-4H19.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            <circle cx="4.5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19.5" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: '超高速プロトタイプ開発',
        bullets: ['独自のAI駆動開発方法論により、アイデアを最短1時間で検証可能なMVP（試作品）を提供可能', '机上の空論で終わらせず、動くプロダクトで即座に仮説検証'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 2L4.5 13h6l-1 9L19 11h-6l1-9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: '最先端技術の実装',
        description: '常に最新の技術トレンドをキャッチアップし、ビジネスにフィットする形で実装',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: '構想から運用まで一気通貫',
        description: '企画・要件定義から、ソリューション開発・実装、そして導入後の保守運用まで、ワンチームで責任を持って完遂',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12h4l3-9 4 18 3-9h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: '圧倒的なコストパフォーマンス',
        description: 'AI駆動型開発により、従来の手法と比較して開発期間とコストを大幅に圧縮。投資対効果（ROI）の高いソリューションを提供',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 15.5l7-7 3 3 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            <path d="M16 7h3v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
    ]
    : [
      {
        title: 'Identifying Core Challenges',
        description: 'Professional business process analysis by expert consultants',
        bullets: ['Visualize workflows, uncover latent issues and needs', 'Clearly define scope and objectives'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="6" fill="none" stroke="currentColor" strokeWidth="1.7" />
            <path d="M15.5 15.5L20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
            <path d="M11 8v6M8 11h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          </svg>
        ),
      },
      {
        title: 'Production-Ready Workflow Design',
        bullets: ['Thoroughly analyze business flows and convert them into automation workflow execution logic', 'Covering edge cases and complex branching — designing automation flows that never stop in production'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4.5 12h5.5l2.5-4 2.5 8 2.5-4H19.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            <circle cx="4.5" cy="12" r="1.5" fill="currentColor" />
            <circle cx="19.5" cy="12" r="1.5" fill="currentColor" />
          </svg>
        ),
      },
      {
        title: 'Ultra-Rapid Prototyping',
        bullets: ['Our proprietary AI-driven development methodology delivers testable MVPs in as little as 1 hour', 'No more theory — validate hypotheses instantly with working products'],
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M13 2L4.5 13h6l-1 9L19 11h-6l1-9z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: 'Cutting-Edge Implementation',
        description: 'We stay current with the latest technology trends and implement them in ways that fit your business',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
            <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: 'End-to-End, One Team',
        description: 'From planning and requirements to solution development and implementation, through post-launch maintenance — one team takes full responsibility',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 12h4l3-9 4 18 3-9h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
      {
        title: 'Exceptional Cost Performance',
        description: 'AI-driven development dramatically reduces timelines and costs compared to traditional methods. We deliver solutions with outstanding ROI.',
        className: styles.bentoUniform,
        icon: (
          <svg className={styles.cardIcon} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 15.5l7-7 3 3 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
            <path d="M16 7h3v3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
          </svg>
        ),
      },
    ];

  const principles = isJa
    ? [
      {
        title: 'Business Logic First',
        description: 'ビジネスモデルや業務フローを深く理解しない限り、真に役立つソリューションは作れないと考えており、「開発者」である前に、御社の「ビジネスパートナー」であり続けます。',
      },
      {
        title: 'No Blackbox',
        description: '処理ロジックやAIの判断根拠を可能な限り可視化し、システムがブラックボックス化することを防ぎます。技術が独り歩きするのではなく、御社自身がプロセスを理解・コントロールでき、長期にわたって安心して運用できる設計を徹底します。',
      },
      {
        title: 'Speed is Value',
        description: '不確実な時代において、スピードは最大のリスクヘッジです。独自の開発手法で圧倒的な速度でMVPを構築し、変化に合わせて柔軟にプロダクトを進化させ続ける開発スタイルを提供します。',
      },
    ]
    : [
      {
        title: 'Business Logic First',
        description: 'We believe truly useful solutions require deep understanding of business models and workflows. Before being developers, we remain your business partners.',
      },
      {
        title: 'No Blackbox',
        description: 'We make processing logic and AI decision rationale as transparent as possible, preventing systems from becoming black boxes. Rather than letting technology run unchecked, we ensure designs where you understand and control every process, operating with confidence over the long term.',
      },
      {
        title: 'Speed is Value',
        description: 'In an era of uncertainty, speed is the ultimate risk hedge. Our proprietary methods build MVPs at exceptional speed, enabling continuous product evolution that adapts to change.',
      },
    ];

  const principleIcons = [
    // Business Logic First - handshake/strategy icon
    <svg key="p1" className={styles.principleIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 7h-4l-2-3H10L8 7H4a2 2 0 00-2 2v2l8 5 8-5V9a2 2 0 00-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M2 13l8 5 2-1.5L14 18l8-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>,
    // No Blackbox - eye/transparency icon
    <svg key="p2" className={styles.principleIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>,
    // Speed is Value - rocket/speed icon
    <svg key="p3" className={styles.principleIcon} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11.95A22 22 0 0112 15z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" />
    </svg>,
  ];

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <h1 className={styles.heroTitle}>{renderWithBreaks(t.hero.title)}</h1>
              <p className={styles.heroSubtitle}>{renderWithBreaks(t.hero.subtitle)}</p>
              <p className={styles.heroDescription}>{heroDescription}</p>
              <div className={styles.heroActions}>
                <Link href={`/${params.lang}/services`}>
                  <Button size="lg">{t.hero.cta}</Button>
                </Link>
                <Link href={`/${params.lang}/contact`}>
                  <Button size="lg" variant="outline">
                    {t.nav.contact}
                  </Button>
                </Link>
              </div>
              <div className={styles.heroMeta}>
                {heroHighlights.map((item) => (
                  <div key={item.label} className={styles.metaItem}>
                    <span className={styles.metaLabel}>{item.label}</span>
                    <span className={styles.metaValue}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.heroPanelHeader}>
                <span>{isJa ? 'ソリューション概要' : 'Solution Overview'}</span>
                <span className={styles.heroPanelTag}>{isJa ? '稼働中' : 'Live'}</span>
              </div>
              <div className={styles.heroPanelGrid}>
                {heroHighlights.map((item) => (
                  <div key={item.label} className={styles.panelCard}>
                    <span className={styles.panelDot} />
                    <div>
                      <p className={styles.panelLabel}>{item.label}</p>
                      <p className={styles.panelValue}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.heroPanelFooter}>
                <span>{isJa ? 'ソリューションフロー' : 'Solution Flow'}</span>
                <div className={styles.panelFlow}>
                  <span>{isJa ? '分析' : 'Analyze'}</span>
                  <span className={styles.flowDivider} />
                  <span>{isJa ? '設計' : 'Design'}</span>
                  <span className={styles.flowDivider} />
                  <span>{isJa ? '実装' : 'Build'}</span>
                  <span className={styles.flowDivider} />
                  <span>{isJa ? '運用' : 'Run'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.bentoSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              {isJa
                ? <>ビジネス課題を解決する<br />「実益重視」のAIソリューション</>
                : <>Solving real business challenges<br />with ROI-focused AI solutions</>}
            </h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? <>曖昧な概念ではなく、業務のボトルネックを解消し<br />アイデアを即座に形にするためのソリューションを提供します。</>
                : <>Not abstract concepts — we eliminate operational bottlenecks<br />and deliver solutions that turn ideas into reality.</>}
            </p>
          </div>
          <div className={styles.bentoGrid}>
            {bentoCards.map((card) => (
              <Card key={card.title} hover className={`${styles.bentoCard} ${card.className}`}>
                <div className={styles.cardHeader}>
                  <span className={styles.cardIconWrap}>{card.icon}</span>
                  <span className={styles.cardTitle}>{card.title}</span>
                </div>
                {card.description && <p className={styles.cardDescription}>{card.description}</p>}
                {card.bullets && (
                  <ul className={styles.cardList}>
                    {card.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.principlesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{isJa ? '理念' : 'Principles'}</h2>
            <p className={styles.sectionSubtitle}>
              {isJa
                ? 'ソリューションの成功率を高めるための、3つの約束'
                : 'Three commitments to maximize solution success'}
            </p>
          </div>
          <div className={styles.principlesGrid}>
            {principles.map((principle, idx) => (
              <Card key={principle.title} className={styles.principleCard}>
                <div className={styles.principleIconWrap}>{principleIcons[idx]}</div>
                <h3 className={styles.principleTitle}>{principle.title}</h3>
                <p className={styles.principleDescription}>{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <Card className={styles.ctaCard}>
            <div>
              <h2 className={styles.ctaTitle}>
                {isJa
                  ? <>「最初の一歩」を<br />一緒に踏み出しませんか？</>
                  : <>Ready to take the first step<br />— together?</>}
              </h2>
              <p className={styles.ctaDescription}>
                {isJa
                  ? '業務整理から実装、運用まで。「どんな使い方ができるか」の無料診断から承ります。お気軽にご相談ください。'
                  : 'From business analysis to implementation and operations. We offer free consultations to explore what\'s possible. Feel free to reach out.'}
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href={`/${params.lang}/contact`}>
                <Button size="lg">{isJa ? 'お問い合わせ' : 'Contact Us'}</Button>
              </Link>
              <Link href={`/${params.lang}/services`}>
                <Button size="lg" variant="outline">
                  {isJa ? 'サービス詳細' : 'Service Details'}
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
