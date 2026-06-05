import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { getServiceById, services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

export const dynamicParams = false;

type DetailCard = readonly [string, string];
type TransformationColumn = readonly [string, readonly string[]];
type ProofLink = {
  href: (lang: Language) => string;
  ctaJa: string;
  ctaEn: string;
};
type ProofItem = readonly [string, string, readonly string[], (string | ProofLink)?];

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
      noteJa: 'これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。開発、PMO、リサーチのように、判断・手順・レビュー・連携が複雑な業務を、各社の状況に合わせて AI Workflow として設計・実装できます。',
      noteEn: 'These are representative examples only; they do not define the boundary of the AI Workflow service. The same approach can be applied to business operations with complex decisions, procedures, reviews, and handoffs.',
      itemsJa: [
        ['Agentic AI 開発ワークフロー', 'Nebula Infinity 自社のビジネス構想、要件定義、設計、実装、検証の一連の開発フローを、複数の AI エージェントと人のレビューゲートで運用するワークフロー proof です。長期・多段階の業務を AI Workflow として実装し、定期的な振り返りと改善提案により自己進化する仕組みを持たせています。', ['役割設計', 'レビューゲート', '自己進化'], { href: (lang) => `/${lang}/services/ai-workflow/ai-dev-flow`, ctaJa: '開発ワークフロー詳細', ctaEn: 'Development workflow details' }],
        ['Astra PMワークフロー', 'プロジェクト内で分散しやすい情報を AI エージェントが一元管理し、進捗、課題、リスク、リソースなどの PM 管理作業を AI ワークフローとして自律的に支援します。進捗報告、課題・リスク分析、リソース一覧などの資料を即時生成し、低コストで効率的なプロジェクト運営を可能にします。', ['PM業務', '情報整理', '自律作業'], { href: (lang) => `/${lang}/projects/astra`, ctaJa: 'Astra 詳細', ctaEn: 'View Astra' }],
        ['プロダクトリサーチワークフロー', '売れ筋商品発掘のため、AI エージェントがリアルタイムの市場情報収集、競合分析、自社情報集約、独自ノウハウに基づく傾向分析・要約を自律的に行うワークフローです。人がアウトプットをもとに意思決定を行い、その結果を後続の業務システムへ連携します。', ['情報収集・分析', '独自ノウハウ', '他システム連携'], { href: (lang) => `/${lang}/contact?inquiry=${encodeURIComponent('AI Workflow Design & Development')}`, ctaJa: 'この類型を相談する', ctaEn: 'Discuss this workflow type' }],
      ],
      itemsEn: [
        ['Agentic AI development workflow', "A workflow proof from Nebula Infinity's own business and development operations, covering concept framing, requirements, design, implementation, and verification with multiple AI agents and human review gates. It shows how long-running, multi-step work can be implemented as AI Workflow with role design, review gates, and self-improvement loops.", ['Role design', 'Review gates', 'Self-improvement'], { href: (lang) => `/${lang}/services/ai-workflow/ai-dev-flow`, ctaJa: '開発ワークフロー詳細', ctaEn: 'Development workflow details' }],
        ['Astra PM workflow', 'A PMO workflow that uses AI agents to organize information scattered across a project, including progress, issues, risks, and resources. It supports immediate generation of progress reports, issue/risk analysis, and resource views so project operations can run with lower cost and higher efficiency.', ['PM work', 'Information organization', 'Autonomous support'], { href: (lang) => `/${lang}/projects/astra`, ctaJa: 'Astra 詳細', ctaEn: 'View Astra' }],
        ['Product research workflow', 'A workflow where AI agents autonomously collect real-time market information, analyze competitors, gather internal information, and summarize trends through proprietary know-how. Humans make decisions from the outputs, and the results connect into downstream business systems.', ['Collection and analysis', 'Proprietary know-how', 'Business-system linkage'], { href: (lang) => `/${lang}/contact?inquiry=${encodeURIComponent('AI Workflow Design & Development')}`, ctaJa: 'この類型を相談する', ctaEn: 'Discuss this workflow type' }],
      ],
    },
  },
  'ai-application': {
    hero: {
      eyebrow: 'AI Application Solution',
      jaTitle: 'AIを、使われるアプリケーションへ',
      enTitle: 'Turn AI into applications people actually use',
      jaSubtitle: 'AI機能だけでなく、体験の設計、データ連携、業務との接続まで含め、現場や顧客に使われるアプリケーションとして設計・開発します。',
      enSubtitle: 'Nebula Infinity goes beyond AI feature implementation. We connect user experience, business data, and operating flow, then design and build AI applications people can use in real customer or operational contexts.',
      chipsJa: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
      chipsEn: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
    },
    sectionA: {
      titleJa: 'AIアプリケーションに適した領域',
      titleEn: 'Typical application shapes we support',
      cardsJa: [
        ['顧客向けAIサービス', '相談、検索、提案、ガイドを提供するプロダクト。'],
        ['社内業務ツール', '反復作業、業務ルールに基づく判断を支援する内部アプリケーション。'],
        ['AIコパイロット', '専門業務、社内ルールに沿って回答・提案・生成を行う支援体験。'],
        ['ナレッジ活用アプリ', '社内文書や蓄積知識を検索・要約・再利用する仕組み。'],
      ],
      cardsEn: [
        ['Customer AI services', 'Products that guide, answer, search, or recommend for end users.'],
        ['Internal operation tools', 'Applications that support repetitive work and judgment based on business rules.'],
        ['AI copilots', 'Guided experiences that answer, recommend, and generate in line with specialized work and internal rules.'],
        ['Knowledge applications', 'Systems that search, summarize, and reuse internal documents and accumulated know-how.'],
      ],
    },
    transformation: {
      eyebrow: 'Application model',
      titleJa: 'AI機能を、使われる体験に組み込む',
      titleEn: 'Embed AI capability into usable product experience',
      subtitleJa: '誰が、どの場面で、何を判断するために使うのかを整理し、画面、データ、AI応答、例外対応まで一つの体験として設計します。',
      subtitleEn: 'Models and APIs alone do not create value. We clarify who uses the system, in what context, and for what decision, then design screens, data, AI responses, and exception behavior as one experience.',
      columnsJa: [
        ['User need', ['誰がどの目的で使いたいか', 'どの業務や生活場面で使うか', '何が成功条件か']],
        ['Product design', ['画面と導線を設計する', 'AI応答とデータを接続する', '例外や失敗時の体験を決める']],
        ['Business outcome', ['継続利用しやすい', '業務や生活文脈に接続できる', '改善サイクルを回せる']],
      ],
      columnsEn: [
        ['User need', ['Who wants to use it and for what purpose', 'Where it fits in work or daily life', 'What success looks like']],
        ['Product design', ['Design screens and flows', 'Connect AI responses and data', 'Define fallback and exception behavior']],
        ['Business outcome', ['Easy to use repeatedly', 'Connected to real context', 'Ready for improvement cycles']],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity の AI Application Solution',
      titleEn: 'Nebula Infinity AI Application Solution',
      itemsJa: [
        ['体験設計', '利用者、画面、導線、AI応答の見せ方を設計します。'],
        ['フロントエンド / バックエンド実装', 'UI、API、認証、データ、外部サービス連携を実装します。'],
        ['AI機能実装', 'RAG、マルチモーダルなどAI関連技術、業務ロジック連携を組み込みます。'],
        ['運用・改善機能実装', 'ログ、評価、保守、改善の仕組みを設計・実装します。'],
      ],
      itemsEn: [
        ['Experience design', 'We design users, screens, flows, and how AI responses appear.'],
        ['Frontend and backend implementation', 'We build UI, APIs, auth, data, and external-service integration.'],
        ['AI feature implementation', 'We embed AI-related technologies such as RAG and multimodal interaction, together with domain logic.'],
        ['Operation and improvement feature implementation', 'We design and implement logging, evaluation, maintenance, and improvement mechanisms.'],
      ],
    },
    proof: {
      eyebrow: 'Representative proof',
      titleJa: 'プロジェクト例',
      titleEn: 'Project examples',
      noteJa: 'AI機能の実装だけでなく、利用者が価値を理解し、継続して使えるプロジェクト例です。',
      noteEn: 'These cases show AI capability shaped into product experiences that users can understand and keep using.',
      itemsJa: [
        ['Japan Life Navi', '在日外国人向けに、生活情報、手続きの流れ、日常の困りごとを案内するAIアシスタントアプリ。領域別に強化されたAIエージェント、独自に整理した生活ノウハウ、定期的に更新される情報を組み合わせ、利用者に合わせた役立つ案内体験を提供します。', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'AI記帳アプリとして、レシートOCR、業種別の自動仕訳支援、帳票出力などを一つの業務体験にまとめたプロダクトです。自然言語で自動仕訳可能の他、OCRプロセスでのインボイス制度及び電子帳簿保存法の対応機能も実装されている。', ['電子帳簿保存法対応機能', 'インボイス制度対応機能', '６業種テンプレート'], 'rigel'],
      ],
      itemsEn: [
        ['Japan Life Navi', 'An AI assistant application for foreign residents in Japan, guiding daily-life information, procedures, and practical questions. It combines domain-strengthened AI agents, organized living know-how, and regularly updated information into useful guidance tailored to each user.', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'An AI bookkeeping application that brings receipt OCR, industry-specific journal-entry support, and reporting output into one operational product experience. It also includes natural-language journal-entry assistance plus support features related to invoice-system and e-bookkeeping workflows in the OCR process.', ['e-bookkeeping support features', 'invoice-system support features', '6 industry templates'], 'rigel'],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['利用者と業務を整理する', '体験と構成を設計する', '実装して検証する', '運用・改善へ接続する'],
      en: ['Clarify users and operations', 'Design experience and architecture', 'Build and validate', 'Connect to operation and improvement'],
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
      noteJa: 'Rigel は、AI駆動の超高速開発と品質ゲートを示すアクティブ proof です。Astra は AI Workflow / PMO proof として扱います。',
      noteEn: 'Rigel is active proof for AI-driven ultra-fast development and quality gates. Astra is treated as AI Workflow / PMO proof.',
      itemsJa: [
        ['Rigel', 'AI記帳アプリのMVPから追加機能までを、短いサイクルと品質ゲートで進めた AI-Driven Development の代表実績です。', ['16h MVP', 'Quality gates', '1-week launch'], 'rigel'],
      ],
      itemsEn: [
        ['Rigel', 'A representative AI-Driven Development proof that moved an AI bookkeeping app from MVP to additional features through short cycles and quality gates.', ['16h MVP', 'Quality gates', '1-week launch'], 'rigel'],
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
  // Unified detail-page layout for all services: full-width text-only hero (no
  // side card), matching the ai-workflow page format.
  const heroSplitClassName = `${styles.heroSplit} ${styles.aiWorkflowHeroTextOnly}`;
  const heroContentClassName = `${styles.heroContent} ${styles.aiWorkflowHeroContent}`;
  const problemSectionClassName = `${styles.section} ${styles.sectionMuted}`;
  const deliverablesSectionClassName = styles.section;
  const deliverablesHeaderClassName = `${styles.sectionHeader} ${styles.aiWorkflowWideSectionHeader}`;
  const proofSectionClassName = `${styles.section} ${styles.sectionMuted}`;

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
          <div className={heroSplitClassName}>
            <div className={heroContentClassName}>
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
          </div>
        </div>
      </section>
      <section className={problemSectionClassName}>
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
      <section className={deliverablesSectionClassName}>
        <div className="container">
          <div className={deliverablesHeaderClassName}>
            <h2 className={styles.sectionTitle}>{isJa ? content.deliverables.titleJa : content.deliverables.titleEn}</h2>
            {content.deliverables.subtitleJa || content.deliverables.subtitleEn ? <p className={styles.sectionSubtitle}>{isJa ? content.deliverables.subtitleJa : content.deliverables.subtitleEn}</p> : null}
          </div>
          <div className={deliverables.length === 4 ? styles.grid2 : styles.grid3}>{deliverables.map(([title, body]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div>
        </div>
      </section>
      <section className={proofSectionClassName}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{content.proof.eyebrow}</span>
            <h2 className={styles.sectionTitle}>{isJa ? content.proof.titleJa : content.proof.titleEn}</h2>
            <p className={styles.sectionSubtitle}>{isJa ? content.proof.noteJa : content.proof.noteEn}</p>
          </div>
          <div className={proofItems.length === 1 ? styles.gridAuto : proofItems.length === 3 ? styles.grid3 : styles.grid2}>
            {proofItems.map(([title, body, strip, link]) => {
              const href = typeof link === 'string' ? `/${lang}/projects/${link}` : link?.href(lang) ?? `/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`;
              const ctaLabel = typeof link === 'object'
                ? (isJa ? link.ctaJa : link.ctaEn)
                : isJa
                  ? (typeof link === 'string' ? '詳細を見る' : 'この類型を相談する')
                  : (typeof link === 'string' ? 'View case' : 'Discuss this workflow type');
              return (
                <div key={title} className={`${styles.proofCard} ${styles.featuredCard}`}>
                  <h3 className={styles.proofTitle}>{title}</h3>
                  <p className={styles.proofSummary}>{body}</p>
                  <div className={styles.proofStrip}>{strip.map((item) => <span key={item} className={styles.proofPill}>{item}</span>)}</div>
                  <Link href={href} className={styles.ctaLink}>{ctaLabel}<span aria-hidden="true">→</span></Link>
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
