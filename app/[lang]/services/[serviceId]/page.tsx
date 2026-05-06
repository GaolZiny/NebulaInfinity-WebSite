import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { getServiceById, services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

export const dynamicParams = false;

type DetailCard = readonly [string, string];
type TransformationColumn = readonly [string, readonly string[]];
type ProofItem = readonly [string, string, readonly string[], string?];

type DetailContent = {
  hero: {
    eyebrow: string;
    jaTitle: string;
    enTitle: string;
    jaSubtitle: string;
    enSubtitle: string;
    chipsJa: readonly string[];
    chipsEn: readonly string[];
    primaryCtaJa?: string;
    primaryCtaEn?: string;
    secondaryCtaJa?: string;
    secondaryCtaEn?: string;
  };
  sectionA: {
    titleJa: string;
    titleEn: string;
    cardsJa: readonly DetailCard[];
    cardsEn: readonly DetailCard[];
  };
  transformation?: {
    eyebrow: string;
    titleJa: string;
    titleEn: string;
    subtitleJa: string;
    subtitleEn: string;
    columnsJa: readonly TransformationColumn[];
    columnsEn: readonly TransformationColumn[];
  };
  deliverables: {
    titleJa: string;
    titleEn: string;
    subtitleJa?: string;
    subtitleEn?: string;
    itemsJa: readonly DetailCard[];
    itemsEn: readonly DetailCard[];
  };
  proof: {
    eyebrow: string;
    titleJa: string;
    titleEn: string;
    noteJa: string;
    noteEn: string;
    itemsJa: readonly ProofItem[];
    itemsEn: readonly ProofItem[];
  };
  steps?: {
    titleJa: string;
    titleEn: string;
    ja: readonly string[];
    en: readonly string[];
  };
  cta?: {
    jaTitle: string;
    enTitle: string;
    jaBody: string;
    enBody: string;
  };
};

const pageContent: Record<string, DetailContent> = {
  'ai-workflow': {
    hero: {
      eyebrow: 'AI Workflow Solution',
      jaTitle: 'プロセスを、再現できるワークフローへ',
      enTitle: 'Turn people-dependent work into repeatable workflows',
      jaSubtitle: '担当者に閉じた判断基準、考え方、作業手順を整理し、AIと人が協働できるプロセスとして設計・実装します。自己改善の仕組みも実装することにより、単発の自動化ではなく、組織で引き継ぎ、改善し続けられるアセットへ変えていきます。',
      enSubtitle: 'Nebula Infinity organizes decision criteria, procedures, and review paths that are closed inside specific people, then designs and implements them as business workflows where people and AI can work together. We do not stop at one-off automation; we turn the work into operating assets the organization can inherit and improve.',
      chipsJa: ['属人化の解消', 'ナレッジの可視化', '継続進化できる仕組み'],
      chipsEn: ['Reduce people-dependence', 'Make decision criteria visible', 'Create continuously improvable operations'],
      primaryCtaJa: 'この領域で相談する',
      primaryCtaEn: 'Discuss this service',
      secondaryCtaJa: 'サービス選択に戻る',
      secondaryCtaEn: 'Back to Home Services',
    },
    sectionA: {
      titleJa: '整理すべき、3つの課題認識',
      titleEn: 'Three operational symptoms to solve before AI can stick',
      cardsJa: [
        ['ノウハウが特定担当者に閉じている', '経験者にしか分からない判断基準やコツなどのノウハウが多く、同じ業務でも担当者間で結果がばらつく。'],
        ['引き継ぎコストが高い', '手順書があっても、例外対応や判断の勘所が共有されてなく、引き継ぎには時間と労力がかかる。'],
        ['ツールを入れても定着しない', 'AIやSaaSを導入しても、役割分担、レビュー導線、改善サイクルが設計されていない。'],
      ],
      cardsEn: [
        ['Decisions live inside individuals', 'Critical criteria exist only in experienced operators, so the same work produces inconsistent results.'],
        ['Handoffs are expensive', 'Steps may be documented, but exceptions and judgment points are not shared.'],
        ['Tools never become operations', 'AI or SaaS tools are introduced without role design, review paths, or improvement loops.'],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity の AI Workflow Solution',
      titleEn: 'What Nebula Infinity designs and builds',
      subtitleJa: 'AI活用が止まる理由の多くは、技術そのものではなく、業務知識や判断基準などのノウハウが人に閉じていることにあります。AI Workflow Solution は、そのノウハウを抽出し、プロセスに落とし込み、AI と人が協業できる仕組みに変えていきます。',
      subtitleEn: 'AI adoption often stalls not because of the technology itself, but because operational knowledge and decision criteria stay inside individuals. Nebula Infinity extracts that know-how, places it into the process, and turns it into workflows where AI and people can collaborate.',
      itemsJa: [
        ['プロセス整理', '関係者、入力、判断、例外、出力を構造化し、プロセスを可視化します。'],
        ['AIワークフロー設計', 'AIと人の役割分担、レビューの配置、周辺連携仕様を定義します。'],
        ['実装・接続', '既存ツールやデータとつながる形で、実務に乗るワークフローを実装します。'],
        ['運用定着支援', '引き継ぎ、改善サイクル、ログ運用まで整え、使い続けられる状態にします。'],
      ],
      itemsEn: [
        ['Current-state mapping', 'We structure stakeholders, inputs, decisions, exceptions, and outputs.'],
        ['AI workflow design', 'We define human-AI roles, review points, and integration behavior.'],
        ['Implementation and connection', 'We build workflows that connect to existing tools and data, so they can run in real operations.'],
        ['Operational adoption', 'We prepare handoff, improvement criteria, and log review so the workflow can keep being used.'],
      ],
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: 'プロジェクト例',
      titleEn: 'Representative examples',
      noteJa: 'これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。',
      noteEn: 'These are representative examples only and do not define the full boundary of the AI Workflow service. The same approach can apply to work involving judgment, procedures, review, and handoff.',
      itemsJa: [
        ['マルチエージェント開発ワークフロー', 'ビジネス構想、要件定義、設計、実装、検証の一連の開発フローは異なるAIエージェントが担当し、人は各タスクのアウトプットをレビューしながら、超高速かつ高品質な開発を実現しました。さらに、定期的に作業履歴の振り返りを行い、フローの課題抽出及び改善提案による継続的に自己進化する仕組みも実装しました。', ['役割設計', 'レビューゲート', '自己進化']],
        ['プロダクトリサーチワークフロー', '売れ筋商品発掘するため、リアルタイムの市場情報収集、競合分析、自社情報集約、独自ノウハウに基づく傾向分析・要約し、意思決定に渡すリサーチフローを実現しました。', ['情報収集', '要点整理', '独自ノウハウ']],
      ],
      itemsEn: [
        ['Multi-agent development workflow', 'A workflow design example where different AI agents handle business framing, requirements, design, implementation, and verification while people review each output. The workflow also includes regular retrospectives, issue extraction, and improvement proposals so the process can keep evolving.', ['Role design', 'Review gates', 'Self-improvement']],
        ['Product research workflow', 'A research workflow that collects real-time market information, analyzes competitors, gathers internal context, then summarizes tendencies through proprietary know-how and hands decision-ready input to the team.', ['Collection', 'Synthesis', 'Proprietary know-how']],
      ],
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
  const activeServiceParams = langs.flatMap((lang) => services.map((service) => ({ lang, serviceId: service.id })));

  if (process.env.NODE_ENV !== 'development') {
    return activeServiceParams;
  }

  // In local preview with static export enabled, Next.js must see this retired
  // service id before the page-level notFound() branch can return a clean 404.
  // Production/export static params remain active services only.
  const retiredServiceParams = langs.map((lang) => ({ lang, serviceId: 'web3-blockchain' }));
  return [...activeServiceParams, ...retiredServiceParams];
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

  const content = pageContent[serviceId];
  const isJa = lang === 'ja';
  const cards = isJa ? content.sectionA.cardsJa : content.sectionA.cardsEn;
  const transformation = content.transformation;
  const columns = transformation ? (isJa ? transformation.columnsJa : transformation.columnsEn) : [];
  const deliverables = isJa ? content.deliverables.itemsJa : content.deliverables.itemsEn;
  const proofItems = isJa ? content.proof.itemsJa : content.proof.itemsEn;
  const steps = content.steps;
  const stepItems = steps ? (isJa ? steps.ja : steps.en) : [];
  const cta = content.cta;
  const chips = isJa ? content.hero.chipsJa : content.hero.chipsEn;
  const primaryCta = isJa ? (content.hero.primaryCtaJa ?? 'この領域を相談する') : (content.hero.primaryCtaEn ?? 'Discuss this service');
  const secondaryCta = isJa ? (content.hero.secondaryCtaJa ?? 'サービス選択に戻る') : (content.hero.secondaryCtaEn ?? 'Back to Home Services');

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
                  <Button size="lg">{primaryCta}</Button>
                </Link>
                <Link href={`/${lang}/#services`} className={styles.linkButton}>
                  <Button size="lg" variant="outline">{secondaryCta}</Button>
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
      {transformation ? (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>{transformation.eyebrow}</span>
              <h2 className={styles.sectionTitle}>{isJa ? transformation.titleJa : transformation.titleEn}</h2>
              <p className={styles.sectionSubtitle}>{isJa ? transformation.subtitleJa : transformation.subtitleEn}</p>
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
      ) : null}
      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{isJa ? content.deliverables.titleJa : content.deliverables.titleEn}</h2>
            {content.deliverables.subtitleJa || content.deliverables.subtitleEn ? <p className={styles.sectionSubtitle}>{isJa ? content.deliverables.subtitleJa : content.deliverables.subtitleEn}</p> : null}
          </div>
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
      {steps ? (
        <section className={`${styles.section} ${styles.sectionMuted}`}>
          <div className="container">
            <div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? steps.titleJa : steps.titleEn}</h2></div>
            <div className={styles.stepRail}>{stepItems.map((step, index) => <div key={step} className={styles.stepItem}><div className={index === 1 || index === 2 ? `${styles.stepNode} ${styles.stepNodeAlt}` : styles.stepNode}>{index + 1}</div><h3 className={styles.stepHeading}>{step}</h3></div>)}</div>
          </div>
        </section>
      ) : null}
      {cta ? (
        <section className={styles.section}>
          <div className="container">
            <div className={styles.featuredBand}>
              <div className={styles.bandCopy}>
                <h2 className={styles.bandTitle}>{isJa ? cta.jaTitle : cta.enTitle}</h2>
                <p className={styles.bandBody}>{isJa ? cta.jaBody : cta.enBody}</p>
              </div>
              <div className={styles.bandActions}>
                <Link href={`/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.linkButton}><Button size="lg">{isJa ? 'お問い合わせ' : 'Contact Us'}</Button></Link>
                <Link href={`/${lang}/#services`} className={styles.linkButton}><Button size="lg" variant="outline">{isJa ? 'サービス選択に戻る' : 'Back to Home Services'}</Button></Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
