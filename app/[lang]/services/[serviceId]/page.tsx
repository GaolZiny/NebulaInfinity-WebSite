import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { getServiceById, services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

const pageContent = {
  'ai-workflow': {
    hero: {
      eyebrow: 'AI Workflow Design & Development',
      jaTitle: '「属人」のノウハウを、組織の「資産」に',
      enTitle: 'Turn tacit know-how into organizational assets',
      jaSubtitle: 'Nebula Infinity は、担当者依存の業務をそのまま自動化するのではなく、判断基準・手順・レビューの流れを整理し、AI と人が運用できるワークフローとして設計・開発します。',
      enSubtitle: 'Nebula Infinity does not simply automate a person’s work as-is. We structure decision logic, steps, and review paths into workflows that people and AI can operate together.',
      chipsJa: ['属人化の解消', 'ナレッジの資産化', '再現性のある運用'],
      chipsEn: ['Reduce people-dependence', 'Assetize know-how', 'Create repeatable operations'],
    },
    sectionA: {
      titleJa: 'AI 導入前に整理すべき、現場の3つの症状',
      titleEn: 'Three operational symptoms to solve before AI can stick',
      cardsJa: [
        ['判断が人に閉じている', '経験者にしか分からない基準が多く、再現しづらい。'],
        ['引き継ぎコストが高い', '手順はあっても、実際の勘所が共有されていない。'],
        ['ツールを入れても定着しない', '役割分担やレビュー導線が設計されていない。'],
      ],
      cardsEn: [
        ['Decisions live inside individuals', 'Critical criteria exist only in experienced operators.'],
        ['Handoffs are expensive', 'There may be steps, but not the real judgment behind them.'],
        ['Tools never become operations', 'Roles, review paths, and adoption flow were never designed.'],
      ],
    },
    transformation: {
      eyebrow: 'Assetization model',
      titleJa: '属人のノウハウを、組織の資産に。',
      titleEn: 'Turn individual know-how into organizational assets',
      subtitleJa: 'AI導入が止まる理由の多くは、技術そのものではなく、判断基準や業務知識が人に閉じていることにあります。Nebula Infinityは、その知見を整理し、AIと人が再現性をもって動ける仕組みに変えていきます。',
      subtitleEn: 'AI projects often stall not because of the technology itself, but because decision criteria and operational knowledge stay inside individuals. Nebula Infinity organizes that knowledge and turns it into systems where AI and people can operate reproducibly.',
      columnsJa: [
        ['Current state', ['担当者ごとに判断がばらつく', '引き継ぎに時間がかかる', 'AIを入れても運用に乗らない']],
        ['System design', ['判断基準と手順を可視化する', 'AIと人の役割分担を設計する', 'レビュー導線と改善ログを残す']],
        ['Business outcome', ['再現性のある実務フローになる', '組織で引き継げる資産になる', '継続的に改善できる運用になる']],
      ],
      columnsEn: [
        ['Current state', ['Decisions vary by operator', 'Handoffs take too long', 'AI does not stick in operations']],
        ['System design', ['Make decision rules and procedures visible', 'Design roles for AI and people', 'Keep review paths and improvement logs']],
        ['Business outcome', ['Repeatable operational flow', 'Transferable organizational asset', 'Continuously improvable operation']],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が設計・開発するもの',
      titleEn: 'What Nebula Infinity designs and builds',
      itemsJa: [
        ['現行業務の整理', '関係者、判断、例外、入力・出力を構造化します。'],
        ['AIワークフロー設計', 'AI と人の役割分担、レビュー位置、連携仕様を定義します。'],
        ['実装・接続', '既存システムやツールとつながる形で実装します。'],
        ['運用定着支援', '引き継ぎ、改善観点、ログの見方まで整えます。'],
      ],
      itemsEn: [
        ['Current-state mapping', 'We structure stakeholders, decisions, exceptions, inputs, and outputs.'],
        ['Workflow architecture', 'We define human-AI roles, review points, and integration behavior.'],
        ['Implementation and integration', 'We build the workflow so it connects to existing systems and tools.'],
        ['Operational adoption', 'We support handoff, improvement criteria, and how to read the logs.'],
      ],
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: '現在公開している代表例',
      titleEn: 'Representative examples currently shown publicly',
      noteJa: 'これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。',
      noteEn: 'These are representative examples only and do not define the full boundary of the AI Workflow service.',
      itemsJa: [
        ['マルチエージェント開発ワークフロー', '要件整理、設計、実装、テストの役割分担を定義し、レビューしながら進める開発フローの設計例。', ['役割分担', 'レビューゲート', '再利用ルール']],
        ['プロダクトリサーチワークフロー', '市場・競合・ユーザー情報を収集し、比較と要点化を経て意思決定に渡すリサーチフローの設計例。', ['情報収集', '要点整理', '意思決定入力']],
      ],
      itemsEn: [
        ['Multi-agent development workflow', 'A workflow design example that allocates requirements, design, implementation, and testing roles with explicit review paths.', ['Role allocation', 'Review gates', 'Reusable rules']],
        ['Product research workflow', 'A workflow design example for collecting market, competitor, and user inputs, synthesizing them, and handing them into decision-making.', ['Collection', 'Synthesis', 'Decision input']],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['現場を整理する', 'ワークフローを設計する', '実装して検証する', '運用へ引き渡す'],
      en: ['Clarify operations', 'Design the workflow', 'Implement and validate', 'Hand off into operations'],
    },
    cta: {
      jaTitle: '属人化した業務を、どこから整理すべきか一緒に見極めます',
      enTitle: 'We can help identify where to start with people-dependent work',
      jaBody: 'まだ課題が曖昧でも問題ありません。現場で何が止まっているか、どこに判断が集中しているかから整理します。',
      enBody: 'You do not need a polished brief. We can start from where work gets stuck and where judgment is concentrated today.',
    },
  },
  'ai-application': {
    hero: {
      eyebrow: 'AI Application Design & Development',
      jaTitle: 'AIを、使われるアプリケーションへ',
      enTitle: 'Turn AI into applications people actually use',
      jaSubtitle: 'Nebula Infinity は、AI の機能実装だけではなく、体験設計、データ連携、業務との接続まで含めて、現場で使われるアプリケーションとして設計・開発します。',
      enSubtitle: 'Nebula Infinity goes beyond AI feature implementation. We design and build applications that people actually use by connecting experience design, data, and operational context.',
      chipsJa: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
      chipsEn: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
    },
    sectionA: {
      titleJa: 'こんなAIアプリケーションに向いています',
      titleEn: 'Typical application shapes we support',
      cardsJa: [
        ['顧客向けAIサービス', '相談、検索、提案、ガイドを提供するプロダクト'],
        ['社内業務ツール', '業務判断や情報整理を支援する内部アプリケーション'],
        ['AIコパイロット', '専門業務に沿って回答・提案・生成を行う支援体験'],
        ['ナレッジ活用アプリ', '社内文書や蓄積知識を検索・要約・再利用する仕組み'],
      ],
      cardsEn: [
        ['Customer AI services', 'Products that guide, answer, search, or recommend for end users'],
        ['Internal operation tools', 'Applications that support judgment and information handling inside the business'],
        ['AI copilots', 'Guided experiences that answer, generate, and recommend around domain-specific work'],
        ['Knowledge applications', 'Systems that search, summarize, and reuse internal documents and know-how'],
      ],
    },
    transformation: {
      eyebrow: 'Application model',
      titleJa: 'AI機能を、使われる体験に組み込む',
      titleEn: 'Embed AI capability into usable product experience',
      subtitleJa: 'モデルやAPIだけでは価値になりません。利用者、業務、データ、画面、運用を一つの体験として設計します。',
      subtitleEn: 'Models and APIs alone do not create value. We design users, operations, data, screens, and running conditions as one product experience.',
      columnsJa: [
        ['User need', ['誰が何を判断したいか', 'どの業務で使うか', '何が成功条件か']],
        ['Product design', ['画面・導線を設計する', 'AI応答とデータを接続する', '例外や失敗時の体験を決める']],
        ['Business outcome', ['継続利用できる', '業務に接続できる', '改善サイクルを回せる']],
      ],
      columnsEn: [
        ['User need', ['Who needs to decide what', 'Where it fits in operations', 'What success looks like']],
        ['Product design', ['Design screens and flows', 'Connect AI responses and data', 'Define fallback and exception behavior']],
        ['Business outcome', ['Usable repeatedly', 'Connected to work', 'Ready for improvement cycles']],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が担う設計・開発範囲',
      titleEn: 'Design and development scope Nebula Infinity covers',
      itemsJa: [
        ['体験設計', '利用者、画面、導線、AI応答の見せ方を設計します。'],
        ['フロントエンド / バックエンド実装', 'UI、API、認証、データ、外部サービス連携を実装します。'],
        ['AI機能実装', 'RAG、マルチモーダル、リアルタイム対話、業務ロジック連携を組み込みます。'],
        ['運用・改善設計', 'ログ、評価、保守、改善の観点を残します。'],
      ],
      itemsEn: [
        ['Experience design', 'We design users, screens, flows, and how AI responses appear.'],
        ['Frontend and backend implementation', 'We build UI, APIs, auth, data, and external-service integration.'],
        ['AI feature implementation', 'We embed RAG, multimodal, realtime conversation, and domain logic.'],
        ['Operation and improvement design', 'We leave logs, evaluation points, maintenance, and improvement paths.'],
      ],
    },
    proof: {
      eyebrow: 'Representative proof',
      titleJa: 'AIアプリケーションの代表実績',
      titleEn: 'Representative AI application cases',
      noteJa: 'AIの機能を実装するだけでなく、使われる体験として成立させた例として紹介します。',
      noteEn: 'These cases show not only AI feature delivery, but product experiences that work as real applications.',
      itemsJa: [
        ['Japan Life Navi', '在日外国人向け生活支援アプリ。多言語コンテンツ、領域特化AI、リアルタイム対話、画像分析を一つの体験として実装。', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'AI記帳SaaS。業務知識、制度対応、OCR、UX、バックエンド品質まで含めて成立させたプロダクト。', ['33,000+ LOC', '367 Tests', '18 API Endpoints'], 'rigel'],
      ],
      itemsEn: [
        ['Japan Life Navi', 'A life-support app for foreign residents in Japan that brings multilingual content, domain-specific AI, real-time interaction, and image analysis into one experience.', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'An AI bookkeeping SaaS that proves delivery across domain logic, regulation support, OCR, user experience, and backend quality.', ['33,000+ LOC', '367 Tests', '18 API Endpoints'], 'rigel'],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['利用者と業務を整理する', '体験と構成を設計する', '実装して検証する', '運用・改善へ接続する'],
      en: ['Clarify users and operations', 'Design experience and architecture', 'Build and validate', 'Connect to operation and improvement'],
    },
    cta: {
      jaTitle: 'AI機能を、使われるプロダクトに落とし込みます',
      enTitle: 'We can turn AI capability into a product people use',
      jaBody: '構想段階でも構いません。誰のどの体験にAIを組み込むべきかから整理します。',
      enBody: 'You can start at concept stage. We can clarify whose experience AI should improve and how.',
    },
  },
  'ai-driven-development': {
    hero: {
      eyebrow: 'AI-Driven Development',
      jaTitle: 'AI駆動の開発体制で、構想を速く確かな実装へ',
      enTitle: 'Turn ideas into reliable implementation with AI-driven development',
      jaSubtitle: 'Nebula Infinityは、AIエージェントを前提にした開発ワークフロー、レビューゲート、検証自動化を組み合わせ、要件整理から実装・改善までの速度と品質を両立します。',
      enSubtitle: 'Nebula Infinity combines AI-agent-assisted development workflows, review gates, and automated verification to balance speed and quality from requirements through implementation and improvement.',
      chipsJa: ['Agentic Workflow', 'Quality Gates', 'Delivery Acceleration'],
      chipsEn: ['Agentic Workflow', 'Quality Gates', 'Delivery Acceleration'],
    },
    sectionA: {
      titleJa: 'このラインが向いている状況',
      titleEn: 'When this line is the right fit',
      cardsJa: [
        ['短期間で動く形を検証したい', '構想を小さく実装し、使いながら判断したい。'],
        ['仕様変更が多いプロダクトを進めたい', '変更を前提に、レビューと改善が回る開発体制が必要。'],
        ['AIエージェント活用を開発標準にしたい', '属人的なAI活用ではなく、チームで再現できる進め方にしたい。'],
        ['速度と品質ゲートを両立したい', '早く作るだけでなく、検証・レビュー・引き継ぎまで残したい。'],
      ],
      cardsEn: [
        ['You need a working version quickly', 'You want to implement a focused version and make decisions through use.'],
        ['The product will change often', 'You need a delivery model where review and improvement keep pace with change.'],
        ['You want AI-agent use to become a development standard', 'You need a repeatable team method, not individual AI experimentation.'],
        ['Speed must include quality gates', 'You need verification, review, and handoff discipline, not just faster output.'],
      ],
    },
    transformation: {
      eyebrow: 'Delivery model',
      titleJa: 'AIエージェントを、開発プロセスの中に組み込む',
      titleEn: 'Put AI agents inside a governed development process',
      subtitleJa: 'AIを単発の作業補助として使うのではなく、要件、設計、実装、レビュー、検証の流れに役割として組み込みます。',
      subtitleEn: 'We do not use AI as one-off task assistance. We place it into requirements, design, implementation, review, and verification as defined roles.',
      columnsJa: [
        ['Brief', ['目的、制約、成功条件を短く明文化する。']],
        ['Workflow design', ['AIエージェント、人、レビュー担当の役割を決める。']],
        ['Agent-assisted build', ['実装・調査・修正を並行しながら進める。']],
        ['Quality gates', ['レビュー、テスト、ビルド、差分確認を通す。']],
        ['Handoff', ['判断理由、残課題、運用メモを残して次へ渡す。']],
      ],
      columnsEn: [
        ['Brief', ['Define purpose, constraints, and success criteria in a compact form.']],
        ['Workflow design', ['Define roles for AI agents, humans, and reviewers.']],
        ['Agent-assisted build', ['Move implementation, research, and fixes in parallel where safe.']],
        ['Quality gates', ['Pass review, tests, build checks, and diff inspection.']],
        ['Handoff', ['Leave decision rationale, open issues, and operating notes for the next step.']],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が設計・実装するもの',
      titleEn: 'What Nebula Infinity designs and builds',
      itemsJa: [
        ['開発ワークフロー設計', '要件整理、設計、実装、レビュー、検証の流れをAI前提で組み直します。'],
        ['AIエージェント役割設計', '調査、実装、レビュー補助、テスト補助などの担当範囲を定義します。'],
        ['プロダクト実装', 'フロントエンド、バックエンド、データ連携、AI機能を一体で実装します。'],
        ['品質ゲート整備', 'テスト、型チェック、ビルド、レビュー観点、受け入れ条件を組み込みます。'],
        ['運用・改善ハンドオフ', '判断ログ、残課題、改善サイクルを残し、継続開発へ接続します。'],
      ],
      itemsEn: [
        ['Development workflow design', 'We rebuild requirements, design, implementation, review, and verification around AI-assisted delivery.'],
        ['AI-agent role design', 'We define where agents support research, implementation, review, and testing.'],
        ['Product implementation', 'We build frontend, backend, data integration, and AI features as one delivery flow.'],
        ['Quality gate setup', 'We embed tests, type checks, builds, review criteria, and acceptance conditions.'],
        ['Operations and improvement handoff', 'We leave decision logs, open issues, and improvement cycles for continued development.'],
      ],
    },
    proof: {
      eyebrow: 'Representative proof',
      titleJa: 'AI駆動開発の代表実績',
      titleEn: 'Representative AI-driven development proof',
      noteJa: 'Astra は、AIエージェントを組み込んだ開発プロセスと品質ゲートを示すアクティブ proof です。',
      noteEn: 'Astra is active proof for AI-agent-assisted delivery processes and quality gates.',
      itemsJa: [
        ['Astra', 'AIエージェントを組み込んだ開発プロセスと品質ゲートを使い、短いサイクルで検証・改善を回す代表実績です。', ['Agentic workflow', 'Quality gates', 'Iterative delivery'], 'astra'],
      ],
      itemsEn: [
        ['Astra', 'A representative proof using AI-agent-assisted delivery processes and quality gates to run short validation and improvement cycles.', ['Agentic workflow', 'Quality gates', 'Iterative delivery'], 'astra'],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['構想を短く定義する', '開発ワークフローを設計する', '品質ゲート付きで実装する', '引き継ぎ、改善へ接続する'],
      en: ['Frame the idea', 'Design the delivery workflow', 'Implement with quality gates', 'Hand off and improve'],
    },
    cta: {
      jaTitle: '構想を、速く確かな実装へ進めます',
      enTitle: 'We can move your idea toward reliable implementation quickly',
      jaBody: '明確な仕様がなくても構いません。目的、制約、最初に動かす範囲から一緒に整理します。',
      enBody: 'You do not need a complete specification. We can start from purpose, constraints, and the first useful working scope.',
    },
  },
} as const;

export async function generateStaticParams() {
  const langs: Language[] = ['ja', 'en'];
  return langs.flatMap((lang) => services.map((service) => ({ lang, serviceId: service.id })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; serviceId: string }> }) {
  const { lang: rawLang, serviceId } = await params;
  const lang = getLanguage(rawLang);
  const service = getServiceById(serviceId);
  if (!service) return {};
  return { title: `${service.title[lang]} - Nebula Infinity`, description: service.body[lang] };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ lang: string; serviceId: string }> }) {
  const { lang: rawLang, serviceId } = await params;
  const lang = getLanguage(rawLang);
  const service = getServiceById(serviceId);
  if (!service || !(serviceId in pageContent)) notFound();

  const content = pageContent[serviceId as keyof typeof pageContent];
  const isJa = lang === 'ja';
  const cards = isJa ? content.sectionA.cardsJa : content.sectionA.cardsEn;
  const columns = isJa ? content.transformation.columnsJa : content.transformation.columnsEn;
  const deliverables = isJa ? content.deliverables.itemsJa : content.deliverables.itemsEn;
  const proofItems = isJa ? content.proof.itemsJa : content.proof.itemsEn;
  const stepItems = isJa ? content.steps.ja : content.steps.en;
  const chips = isJa ? content.hero.chipsJa : content.hero.chipsEn;

  return (
    <div className={styles.page}>
      <section className={styles.breadcrumb}>
        <div className="container">
          <div className={styles.breadcrumbInner}>
            <Link href={`/${lang}/`}>{isJa ? 'ホーム' : 'Home'}</Link>
            <span>/</span>
            <Link href={`/${lang}/#services`}>{isJa ? 'サービス' : 'Services'}</Link>
            <span>/</span>
            <span aria-current="page">{service.officialLine}</span>
          </div>
        </div>
      </section>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroSplit}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>{content.hero.eyebrow}</span>
              <h1 className={styles.heroTitle}>{isJa ? content.hero.jaTitle : content.hero.enTitle}</h1>
              <p className={styles.heroBody}>{isJa ? content.hero.jaSubtitle : content.hero.enSubtitle}</p>
              <div className={styles.chipRow}>{chips.map((chip) => <span key={chip} className={styles.chip}>{chip}</span>)}</div>
              <div className={styles.actionRow}>
                <Link href={`/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.linkButton}>
                  <Button size="lg">{isJa ? 'この領域を相談する' : 'Discuss this service'}</Button>
                </Link>
                <Link href={`/${lang}/#services`} className={styles.linkButton}>
                  <Button size="lg" variant="outline">{isJa ? 'サービス選択に戻る' : 'Back to Home Services'}</Button>
                </Link>
              </div>
            </div>
            <div className={`${styles.card} ${styles.featuredCard}`}>
              <h2 className={styles.cardTitle}>{service.title[lang]}</h2>
              <p className={styles.cardBody}>{service.body[lang]}</p>
              <ul className={styles.list}>{service.fitBullets[lang].map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.sectionA.titleJa : content.sectionA.titleEn}</h2></div>
          <div className={cards.length === 3 ? styles.grid3 : styles.grid2}>
            {cards.map(([title, body]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.transformation.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{isJa ? content.transformation.titleJa : content.transformation.titleEn}</h2>
            <p className={styles.sectionSubtitle}>{isJa ? content.transformation.subtitleJa : content.transformation.subtitleEn}</p>
          </div>
          <div className={columns.length > 3 ? styles.gridAuto : styles.grid3}>
            {columns.map(([title, bullets]) => (
              <div key={title} className={`${styles.card} ${styles.featuredCard}`}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <ul className={styles.list}>{bullets.map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.deliverables.titleJa : content.deliverables.titleEn}</h2></div>
          <div className={deliverables.length === 4 ? styles.grid2 : styles.grid3}>{deliverables.map(([title, body]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.proof.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{isJa ? content.proof.titleJa : content.proof.titleEn}</h2>
            <p className={styles.sectionSubtitle}>{isJa ? content.proof.noteJa : content.proof.noteEn}</p>
          </div>
          <div className={proofItems.length === 1 ? styles.gridAuto : styles.grid2}>
            {proofItems.map(([title, body, strip, slug]) => {
              const href = typeof slug === 'string' ? `/${lang}/projects/${slug}` : `/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`;
              return (
                <div key={title} className={`${styles.proofCard} ${styles.featuredCard}`}>
                  <h3 className={styles.proofTitle}>{title}</h3>
                  <p className={styles.proofSummary}>{body}</p>
                  <div className={styles.proofStrip}>{strip.map((item) => <span key={item} className={styles.proofPill}>{item}</span>)}</div>
                  <Link href={href} className={styles.ctaLink}>{isJa ? (typeof slug === 'string' ? '詳細を見る' : 'この類型を相談する') : (typeof slug === 'string' ? 'View case' : 'Discuss this workflow type')}<span aria-hidden="true">→</span></Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.steps.titleJa : content.steps.titleEn}</h2></div>
          <div className={styles.stepRail}>{stepItems.map((step, index) => <div key={step} className={styles.stepItem}><div className={index === 1 || index === 2 ? `${styles.stepNode} ${styles.stepNodeAlt}` : styles.stepNode}>{index + 1}</div><h3 className={styles.stepHeading}>{step}</h3></div>)}</div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <div className={styles.featuredBand}>
            <div className={styles.bandCopy}>
              <h2 className={styles.bandTitle}>{isJa ? content.cta.jaTitle : content.cta.enTitle}</h2>
              <p className={styles.bandBody}>{isJa ? content.cta.jaBody : content.cta.enBody}</p>
            </div>
            <div className={styles.bandActions}>
              <Link href={`/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.linkButton}><Button size="lg">{isJa ? 'お問い合わせ' : 'Contact Us'}</Button></Link>
              <Link href={`/${lang}/#services`} className={styles.linkButton}><Button size="lg" variant="outline">{isJa ? 'サービス選択に戻る' : 'Back to Home Services'}</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
