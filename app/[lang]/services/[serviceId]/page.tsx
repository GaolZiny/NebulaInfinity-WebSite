import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage, type Language } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { getServiceById, services } from '@/data/services';
import { generateSEOMetadata, generateServiceSchema, generateBreadcrumbSchema } from '@/components/seo/SEO';
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
    closingJa?: string;
    closingEn?: string;
  };
  transformationAfterDeliverables?: boolean;
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
      jaTitle: '「コピペで使うAI」から、「業務で動くAI」へ。',
      enTitle: 'From copy-paste AI to AI that works inside your business.',
      jaSubtitle: 'AIに聞いて、返ってきた答えをコピペして、自分の資料に貼り直す——今のAI活用は、最後のひと手間が人の手に残っていませんか。Nebula Infinityは、AIをチャットの外に出し、実際の資料を読み、使える成果物を書き、次の工程へ渡すところまで、一つの業務フローに組み込みます。どこを人が判断するかも設計し、運用しながら改善します。',
      enSubtitle: 'You ask AI, copy the answer, and paste it back into your own documents — in today\'s AI use, is that last bit of work still left to people? Nebula Infinity takes AI out of the chat box and builds it into a single workflow — reading your real materials, producing usable deliverables, and passing them to the next step. We also design where people decide, and keep improving it while it runs.',
      chipsJa: ['コピペ作業から、業務フローへ', 'AIと人の役割を設計', '継続進化できる仕組み'],
      chipsEn: ['From copy-paste to a real workflow', 'Design the AI-and-human split', 'Continuously improvable operations'],
      primaryCtaJa: 'この領域で相談する',
      primaryCtaEn: 'Discuss this service',
      secondaryCtaJa: 'サービス選択に戻る',
      secondaryCtaEn: 'Back to Home Services',
    },
    sectionA: {
      titleJa: '3つの課題認識',
      titleEn: 'Three problems we address',
      cardsJa: [
        ['AI利用が、個人の単発利用にとどまる', 'チャットで聞いて答えを得るだけで、入力から出力までの一連の業務にAIが組み込まれていない。'],
        ['判断やノウハウが、担当者に閉じている', '判断基準やコツが個人に偏り、同じ業務でも担当者によって結果がばらつく。'],
        ['AIと人の分担が決まらず、定着しない', 'どこまでAIに任せ、どこから人が判断するかが曖昧で、レビューや改善の仕組みもない。'],
      ],
      cardsEn: [
        ['AI use stays one-off and individual', 'People ask a chatbot and get an answer, but AI is not built into the work from input to output.'],
        ['Judgment and know-how stay inside individuals', 'Criteria and tips are concentrated in a few people, so the same work gives inconsistent results.'],
        ['AI-and-human split is undefined, so nothing sticks', 'It is unclear how much to leave to AI and where people decide, with no review or improvement loop.'],
      ],
    },
    transformation: {
      eyebrow: 'AIと人の協働',
      titleJa: 'AIと人が、それぞれの強みを発揮する',
      titleEn: 'AI and people, each doing what they do best',
      subtitleJa: 'ワークフロー設計は、人をAIに置き換えるためのものではありません。重い定型業務はAIが担い、人は判断と創造に集中する——役割を再設計することで、業務効率と働きがいを同時に高めます。',
      subtitleEn: 'Designing a workflow is not about replacing people with AI. AI takes on the heavy, routine load while people focus on judgment and creativity — by redesigning the roles, we raise both efficiency and the quality of work.',
      columnsJa: [
        ['AIが担う', ['大量・反復・定型の処理', '24時間の一次対応と下準備', 'ログに基づく改善の提案']],
        ['人が担う', ['責任を伴う最終判断', '例外対応と関係構築', '創造的な企画とゴール設定']],
      ],
      columnsEn: [
        ['AI handles', ['High-volume, repetitive, routine processing', '24/7 first response and preparation', 'Improvement suggestions from logs']],
        ['People handle', ['Final decisions that carry responsibility', 'Exceptions and relationship building', 'Creative planning and goal setting']],
      ],
      closingJa: '役割を再設計することで、業務効率と働きがいを同時に高め、組織に残る改善サイクルをつくります。',
      closingEn: 'By redesigning the roles, we raise both efficiency and the quality of work — and leave an improvement cycle that stays in the organization.',
    },
    transformationAfterDeliverables: true,
    deliverables: {
      titleJa: 'Nebula Infinity の AI Workflow Solution',
      titleEn: 'What Nebula Infinity designs and builds',
      subtitleJa: 'AI活用が止まる理由の多くは、技術そのものではなく、業務知識や判断基準などのノウハウが人に閉じていることにあります。AI Workflow Solution は、そのノウハウを抽出し、プロセスに落とし込み、AI と人が協業できる仕組みに変えていきます。',
      subtitleEn: 'AI adoption often stalls not because of the technology itself, but because operational knowledge and decision criteria stay inside individuals. Nebula Infinity extracts that know-how, places it into the process, and turns it into workflows where AI and people can collaborate.',
      itemsJa: [
        ['業務フローの可視化・設計図', '関係者・入力・判断・例外・出力を構造化し、AIと人が協働する業務フローを設計図に落とします。'],
        ['AIと人の役割分担の定義', 'どの判断をAIが担い、どこを人が確認・決定するか、レビュー導線まで明確にします。'],
        ['ワークフローの実装', '最終形は様々です。AIツールの設定一式、専用アプリ、手順書とプロンプト集など、業務に合う形で実装します。'],
        ['運用・改善の仕組み', '引き継ぎ、改善サイクル、ログ運用まで整え、使い続けられる状態にします。'],
      ],
      itemsEn: [
        ['Workflow mapping and design', 'We structure stakeholders, inputs, decisions, exceptions, and outputs into a design for a human-AI workflow.'],
        ['Defining the AI-and-human split', 'We make clear which decisions AI handles and where people confirm or decide, including review paths.'],
        ['Workflow implementation', 'The final form varies — a set of AI-tool configurations, a custom app, or manuals with a prompt set — built to fit your work.'],
        ['Operation and improvement', 'We prepare handoff, improvement cycles, and log review so the workflow keeps being used.'],
      ],
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: 'プロジェクト例',
      titleEn: 'Representative examples',
      noteJa: 'これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。開発・PMO・リサーチに限らず、法務・会計・コンサル・カスタマーサポート・バックオフィスなど、判断・手順・レビュー・連携が複雑なあらゆる業務を、各社に合わせて AI Workflow として設計・実装できます。',
      noteEn: 'These are representative examples only; they do not limit the scope of AI Workflow. Beyond development, PMO, and research, the same approach applies to legal, accounting, consulting, customer support, back-office, and any operation with complex decisions, procedures, reviews, and handoffs.',
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
      jaTitle: '「すごいデモ」で終わったAIを、毎日使われるプロダクトへ。',
      enTitle: 'From an AI demo that wowed once — to a product people use every day.',
      jaSubtitle: 'AI機能だけを作っても、現場や顧客が毎日使ってくれるとは限りません。Nebula Infinityは、誰がどの場面で何のために使うのかを起点に、画面・AI応答・データ・業務との接続まで一つの体験として設計し、実装します。一度きりのデモではなく、毎日の業務や暮らしに定着するプロダクトに仕上げます。',
      enSubtitle: 'Building an AI feature does not guarantee that your customers or your team will reach for it every day. Nebula Infinity starts from who uses it, when, and for what — then designs screens, AI responses, data, and the connection to real work as one experience, and builds it. Not a one-off demo, but a product that takes root in everyday work and life.',
      chipsJa: ['顧客向けプロダクト', '社内ツール', 'RAG / マルチモーダル / リアルタイム'],
      chipsEn: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
      primaryCtaJa: 'この領域で相談する',
      primaryCtaEn: 'Discuss this service',
      secondaryCtaJa: 'サービス選択に戻る',
      secondaryCtaEn: 'Back to Home Services',
    },
    sectionA: {
      titleJa: '3つの課題認識',
      titleEn: 'Three problems we address',
      cardsJa: [
        ['デモは盛り上がったが、毎日は使われない', '試した時は反応が良くても、日々の業務には組み込まれず、いつの間にか使われなくなる。'],
        ['AI機能はあるが、業務やデータに繋がっていない', '単体では動くものの、実際の画面や手順、社内データと接続されておらず、現場の判断に使えない。'],
        ['作って終わりで、定着も改善も続かない', '公開した後の運用、評価、改善の仕組みがなく、価値が伝わらないまま放置される。'],
      ],
      cardsEn: [
        ['The demo impressed, but no one uses it daily', 'It got a good reaction in a trial, but it never gets built into daily work and quietly falls out of use.'],
        ['There is an AI feature, but it is not wired into work or data', 'It runs on its own, yet it is not connected to real screens, steps, or internal data — so it cannot support real decisions.'],
        ['Shipped and forgotten, with no adoption or improvement', 'There is no operation, evaluation, or improvement loop after launch, so the value never lands and it is left to drift.'],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity の AI Application Solution',
      titleEn: 'What Nebula Infinity designs and builds',
      subtitleJa: 'プロダクトが使われない理由の多くは、AIの精度ではなく、利用者の体験・業務・データが繋がっていないことにあります。AI Application Solution は、体験の設計から実装、運用・改善までを一体で組み立て、毎日使われる状態まで仕上げます。',
      subtitleEn: 'A product often goes unused not because of AI accuracy, but because the user experience, the work, and the data are not connected. Nebula Infinity builds everything from experience design through implementation to operation and improvement as one piece — and finishes it to the point where it is used every day.',
      itemsJa: [
        ['体験設計', '利用者、場面、画面、導線、AI応答の見せ方を、使われる前提で設計します。'],
        ['フロントエンド / バックエンド実装', 'UI、API、認証、データ、外部サービス連携を実装します。'],
        ['AI機能実装', 'RAG、マルチモーダルなどのAI技術と、業務ロジックを体験に組み込みます。'],
        ['運用・改善機能実装', 'ログ、評価、保守、改善の仕組みを設計・実装し、使い続けられる状態にします。'],
      ],
      itemsEn: [
        ['Experience design', 'We design users, context, screens, flows, and how AI responses appear — built around real use.'],
        ['Frontend and backend implementation', 'We build UI, APIs, auth, data, and external-service integration.'],
        ['AI feature implementation', 'We embed AI technologies such as RAG and multimodal interaction, together with domain logic, into the experience.'],
        ['Operation and improvement features', 'We design and build logging, evaluation, maintenance, and improvement so it keeps being used.'],
      ],
    },
    transformationAfterDeliverables: true,
    transformation: {
      eyebrow: 'プロダクトとして使われる設計',
      titleJa: 'AI機能を、毎日使われる体験に変える',
      titleEn: 'Turn an AI feature into an experience used every day',
      subtitleJa: 'モデルやAPIだけでは価値になりません。誰がどの場面で使うのかを起点に、体験として実装し、運用しながら定着させる——この三段で、デモを毎日使われるプロダクトへ進めます。',
      subtitleEn: 'Models and APIs alone do not create value. We start from who uses it and when, build it as an experience, and help it take root while it runs — three steps that move a demo into a product used every day.',
      columnsJa: [
        ['利用者と場面', ['誰が、いつ、何のために使うか', 'どの業務や暮らしの場面で使うか', '何が成功条件か']],
        ['体験として実装', ['画面と導線を設計する', 'AI応答とデータを接続する', '例外や失敗時の体験を決める']],
        ['毎日使われる状態', ['業務や暮らしに定着する', 'ログと評価で改善が回る', '価値が利用者に伝わり続ける']],
      ],
      columnsEn: [
        ['Users and context', ['Who uses it, when, and for what', 'Where it fits in work or daily life', 'What success looks like']],
        ['Built as an experience', ['Design screens and flows', 'Connect AI responses and data', 'Define exception and fallback behavior']],
        ['Used every day', ['Takes root in work and daily life', 'Logs and evaluation drive improvement', 'Value keeps landing with users']],
      ],
      closingJa: '使われてこそプロダクトです。体験・業務・データを一つに繋ぎ、毎日使われる状態まで設計・実装します。',
      closingEn: 'A product only counts when it is used. We connect experience, work, and data into one, and build it to the point where it is used every day.',
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: 'プロジェクト例',
      titleEn: 'Representative examples',
      noteJa: 'これらは代表例であり、AI Application の対象を限定するものではありません。顧客向けサービスから社内ツール、ナレッジ活用、業務コパイロットまで、毎日使われる体験が求められるあらゆるプロダクトを、各社に合わせて設計・実装できます。',
      noteEn: 'These are representative examples only; they do not limit the scope of AI Application. From customer-facing services to internal tools, knowledge use, and operational copilots, we design and build any product that needs an experience people use every day.',
      itemsJa: [
        ['Japan Life Navi', '在日外国人向けに、生活情報、手続きの流れ、日常の困りごとを案内するAIアシスタントアプリです。領域別に強化されたAIエージェント、独自に整理した生活ノウハウ、定期的に更新される情報を組み合わせ、利用者に合わせた案内を毎日の暮らしの中で提供します。', ['毎日の暮らしで利用', '多言語対応', '情報を継続更新'], 'gaijin-life-navi'],
        ['Rigel', 'レシートの読み取りから業種別の自動仕訳、帳票出力までを一つの業務体験にまとめたAI記帳アプリです。自然言語での入力で日々の記帳をその場で進められ、利用者が毎日の経理業務として使い続けられる形に仕上げています。', ['日々の記帳で利用', '自然言語で入力', '業種別テンプレート'], 'rigel'],
      ],
      itemsEn: [
        ['Japan Life Navi', 'An AI assistant app for foreign residents in Japan, guiding daily-life information, procedures, and everyday questions. It combines domain-strengthened AI agents, organized living know-how, and regularly updated information to deliver tailored guidance within everyday life.', ['Used in daily life', 'Multilingual', 'Continuously updated'], 'gaijin-life-navi'],
        ['Rigel', 'An AI bookkeeping app that brings receipt capture, industry-specific journal entries, and report output into one operational experience. Natural-language input lets users handle daily bookkeeping on the spot, finished into a form they can keep using as everyday accounting work.', ['Used for daily bookkeeping', 'Natural-language input', 'Industry templates'], 'rigel'],
      ],
    },
  },
  'ai-driven-development': {
    hero: {
      eyebrow: 'AI-Driven Development',
      jaTitle: '構想のままのアイデアを、来週には動くプロダクトへ。',
      enTitle: 'From an idea on a slide — to a product running next week.',
      jaSubtitle: '明確な仕様がなくても構いません。目的、制約、最初に動かす範囲から一緒に整理し、AI駆動の開発体制で速く確かに実装します。開発待ちで止まっていた構想を、最短で動く形まで進めます。',
      enSubtitle: 'You do not need a finished spec. We start from your purpose, constraints, and the first scope worth running, then implement it fast and reliably with an AI-driven delivery model. Ideas stuck waiting for development reach a working form, fast.',
      chipsJa: ['Agentic Workflow', 'Quality Gates', 'Delivery Acceleration'],
      chipsEn: ['Agentic Workflow', 'Quality Gates', 'Delivery Acceleration'],
      primaryCtaJa: 'この領域で相談する',
      primaryCtaEn: 'Discuss this service',
      secondaryCtaJa: 'サービス選択に戻る',
      secondaryCtaEn: 'Back to Home Services',
    },
    sectionA: {
      titleJa: '3つの課題認識',
      titleEn: 'Three problems we address',
      cardsJa: [
        ['アイデアや要望が、開発待ちで止まっている', 'やりたいことはあるのに、リソースや段取りが追いつかず、構想のまま先に進まない。'],
        ['仕様変更が多く、作っても追いつかない', '前提が動くたびに手戻りが増え、レビューや改善が回らないまま開発が重くなる。'],
        ['速さと品質が、両立しない', '速く作ると品質が下がり、品質を守ると遅くなる——どちらかを諦める前提になっている。'],
      ],
      cardsEn: [
        ['Ideas and requests are stuck waiting for development', 'You know what you want to do, but resources and sequencing cannot keep up, so it stays an idea.'],
        ['Specs change so often that builds cannot keep pace', 'Every shift in assumptions adds rework, and development gets heavy with no review or improvement loop.'],
        ['Speed and quality do not go together', 'Build fast and quality drops; protect quality and it slows down — you are forced to give up one of them.'],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が設計・実装するもの',
      titleEn: 'What Nebula Infinity designs and builds',
      subtitleJa: '速さと品質が両立しないのは、AIを単発の作業補助としてしか使えていないからです。AI-Driven Development は、要件から実装・レビュー・検証までの流れをAI前提で組み直し、AIエージェントと人の役割を設計することで、速度と品質を同時に成立させます。',
      subtitleEn: 'Speed and quality fail to coexist when AI is used only as one-off task help. Nebula Infinity rebuilds the flow from requirements through implementation, review, and verification around AI, and designs the roles of AI agents and people so speed and quality hold at the same time.',
      itemsJa: [
        ['開発ワークフロー設計', '要件整理、設計、実装、レビュー、検証の流れをAI前提で組み直し、AIエージェントの役割まで設計します。'],
        ['プロダクト実装', 'フロントエンド、バックエンド、データ連携、AI機能を一体で実装します。'],
        ['品質ゲート整備', 'テスト、型チェック、ビルド、レビュー観点、受け入れ条件を組み込みます。'],
        ['運用・改善ハンドオフ', '判断ログ、残課題、改善サイクルを残し、継続開発へ接続します。'],
      ],
      itemsEn: [
        ['Development workflow design', 'We rebuild requirements, design, implementation, review, and verification around AI, including the roles AI agents play.'],
        ['Product implementation', 'We build frontend, backend, data integration, and AI features as one delivery flow.'],
        ['Quality gate setup', 'We embed tests, type checks, builds, review criteria, and acceptance conditions.'],
        ['Operations and improvement handoff', 'We leave decision logs, open issues, and improvement cycles for continued development.'],
      ],
    },
    transformationAfterDeliverables: true,
    transformation: {
      eyebrow: 'AIと人の協働',
      titleJa: 'AIエージェントと人で、速度と品質を両立する',
      titleEn: 'AI agents and people, holding speed and quality together',
      subtitleJa: 'AIを単発の作業補助として使うのではありません。重い実装ドラフトや調査はAIエージェントが担い、人は要件・設計判断・品質ゲートの通過判定に集中する——役割を分けることで、速く作りながら品質を握ります。',
      subtitleEn: 'We do not use AI as one-off task help. AI agents take on the heavy implementation drafts and research while people focus on requirements, design decisions, and clearing quality gates — splitting the roles so we build fast and still hold quality.',
      columnsJa: [
        ['AIエージェントが担う', ['実装ドラフトの作成', '横断的な調査と下調べ', '差分・テストの下準備']],
        ['人が担う', ['要件と受け入れ基準の決定', '責任を伴う設計判断', 'レビューゲートの通過判定']],
      ],
      columnsEn: [
        ['AI agents handle', ['Drafting implementations', 'Broad research and groundwork', 'Diff and test preparation']],
        ['People handle', ['Requirements and acceptance criteria', 'Design decisions that carry responsibility', 'Deciding when a review gate is passed']],
      ],
      closingJa: '速さと品質は、人が品質を握る一点で両立します。AIに任せる範囲と、人が判断する範囲を設計し、速いまま確かな実装を実現します。',
      closingEn: 'Speed and quality coexist at the one point where people own quality. We design what AI takes on and where people decide — keeping delivery fast while staying reliable.',
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: 'プロジェクト例',
      titleEn: 'Representative examples',
      noteJa: 'Rigel は、構想から動くプロダクトまでを最短サイクルで実装した、AI駆動開発の代表 proof です。一例に絞っていますが、対象は記帳アプリに限りません。新規プロダクトから社内ツール、業務システムまで、速度と品質の両立が求められるあらゆる開発に、同じAI駆動の体制と品質ゲートを適用できます。',
      noteEn: 'Rigel is our representative proof of AI-driven development — taking a concept to a working product on the shortest possible cycle. We focus on one example, but the scope is not limited to a bookkeeping app. From new products to internal tools and business systems, the same AI-driven model and quality gates apply to any build where speed and quality must hold together.',
      itemsJa: [
        ['Rigel', '個人事業主や小規模事業者に向けたAI記帳アプリを、構想からローンチまで短いサイクルと品質ゲートで作り切ったAI駆動開発の代表例です。最短24時間で動くMVPを目指す開発体制のもと、この案件では構想から約16時間で最初に動くMVPに到達し、そこから機能を足しながら約1週間でローンチまで進めました。速く作るだけでなく、テストとレビューの品質ゲートを各サイクルに組み込み、速さと品質を両立しています。', ['最短24時間でMVP', '品質ゲート運用', '約1週間でローンチ'], 'rigel'],
      ],
      itemsEn: [
        ['Rigel', 'A representative AI-driven development example: an AI bookkeeping app for sole proprietors and small businesses, built from concept to launch on short cycles with quality gates. Working in a model that aims for a running MVP in as little as 24 hours, this engagement reached its first working MVP in about 16 hours, then added features and moved to launch in about a week. Beyond building fast, we embed test-and-review quality gates into every cycle, holding speed and quality together.', ['MVP in as little as 24h', 'Quality gates', 'Launch in about a week'], 'rigel'],
      ],
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
  return generateSEOMetadata({ title: `${service.title[lang]} - Nebula Infinity`, description: service.body[lang], lang, path: `/services/${serviceId}` });
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

  const transformationSection = transformation ? (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <span className={styles.sectionEyebrow}>{transformation.eyebrow}</span>
          <h2 className={styles.sectionTitle}>{isJa ? transformation.titleJa : transformation.titleEn}</h2>
          <p className={styles.sectionSubtitle}>{isJa ? transformation.subtitleJa : transformation.subtitleEn}</p>
        </div>
        <div className={columns.length === 2 ? styles.grid2 : columns.length > 3 ? styles.gridAuto : styles.grid3}>
          {columns.map(([title, bullets]) => (
            <div key={title} className={`${styles.card} ${styles.featuredCard}`}>
              <h3 className={styles.cardTitle}>{title}</h3>
              <ul className={styles.list}>{bullets.map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul>
            </div>
          ))}
        </div>
        {transformation.closingJa || transformation.closingEn ? (
          <p className={styles.roleReviewBand}>{isJa ? transformation.closingJa : transformation.closingEn}</p>
        ) : null}
      </div>
    </section>
  ) : null;

  const deliverablesSection = (
    <section className={deliverablesSectionClassName}>
      <div className="container">
        <div className={deliverablesHeaderClassName}>
          <h2 className={styles.sectionTitle}>{isJa ? content.deliverables.titleJa : content.deliverables.titleEn}</h2>
          {content.deliverables.subtitleJa || content.deliverables.subtitleEn ? <p className={styles.sectionSubtitle}>{isJa ? content.deliverables.subtitleJa : content.deliverables.subtitleEn}</p> : null}
        </div>
        <div className={deliverables.length === 4 ? styles.grid2 : styles.grid3}>{deliverables.map(([title, body]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div>
      </div>
    </section>
  );

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateServiceSchema({ name: service.officialLine, description: service.body[lang], path: `/services/${serviceId}`, lang })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(lang, [{ name: isJa ? 'ホーム' : 'Home', path: '/' }, { name: isJa ? 'サービス' : 'Services', path: '/#services' }, { name: service.officialLine, path: `/services/${serviceId}` }])) }} />
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
      {content.transformationAfterDeliverables ? (
        <>{deliverablesSection}{transformationSection}</>
      ) : (
        <>{transformationSection}{deliverablesSection}</>
      )}
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
    </div>
  );
}
