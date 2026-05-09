export const aiDevFlowContent = {
  ja: {
    metadata: {
      title: 'Agentic AI 開発ワークフロー - Nebula Infinity',
      description:
        '市場機会の整理から企画、UX/IA、技術設計、実装、検証、Milestone Acceptance までを、AI Agent と人のレビューゲートで進める Nebula Infinity の AI Workflow 方法論です。',
    },
    breadcrumb: {
      home: 'ホーム',
      services: 'サービス',
      parent: 'AI Workflow',
      current: 'Agentic AI 開発ワークフロー',
    },
    hero: {
      eyebrow: 'AI Workflow Methodology',
      title: '構想を、検証できるプロダクトへ',
      lead:
        'Nebula Infinity は、市場機会の整理、事業性の検証、プロダクト企画、UX/IA、技術設計、実装、QA、Milestone Acceptance までを、役割分担された AI Agent と人のレビューゲートで進めます。AI にコードを書かせるだけではなく、判断と成果物を積み上げ、次の意思決定につながるデリバリープロセスを設計します。',
      chips: ['Market to Milestone', 'Multi-agent delivery', 'Human review gates'],
      primaryCta: 'このワークフローを相談する',
      secondaryCta: 'AI Workflow に戻る',
      panelTitle: 'Market signal → Milestone acceptance',
      panelRows: [
        ['機会を選ぶ', '市場、ユーザー、代替手段、事業性を確認する'],
        ['設計に落とす', 'UX/IA と技術設計へ、判断を引き継ぐ'],
        ['品質ゲートで進める', '実装、検証、受け入れ基準を段階ごとに確認する'],
      ],
    },
    premise: {
      title: 'プロダクトの失敗は、コードの前で起きる',
      subtitle:
        '開発速度だけを上げても、市場、ユーザー、事業性、プロダクト境界が曖昧なままでは、手戻りは減りません。このワークフローは、上流の判断を明文化し、設計・実装・検証へ引き継げる形にします。',
      cards: [
        ['市場機会が曖昧', '誰のどの痛みを解くのか、既存手段で代替できない理由を先に確認します。'],
        ['設計と技術が分断', 'UX/IA、データ、権限、非機能要件をつなぎ、実装判断が迷子にならないようにします。'],
        ['完了基準が弱い', 'コード提出ではなく、Milestone の受け入れ条件と検証証跡で完了を判断します。'],
      ],
    },
    workflow: {
      eyebrow: 'Workflow map',
      title: 'Market Signal から Milestone Acceptance まで',
      subtitle:
        '各段階で専門 Agent が成果物を作り、人がレビューし、次の工程へ渡せる形に整えます。流れを固定化するのではなく、判断・証跡・改善点を残しながら進めることが目的です。',
      ariaLabel: 'AI Native Product Delivery Workflow stages',
      stages: [
        {
          title: '市場を見るレンズを設計する',
          description: '対象セグメント、トレンド、政策、課題テーマを定義し、機会発見のレンズを作る。',
          outputs: ['Segment map', '調査優先度', '初期仮説'],
        },
        {
          title: '機会をスクリーニング・検証する',
          description: '市場信号、競合、代替手段、ユーザー課題、事業性を確認し、進むべき機会を絞る。',
          outputs: ['Shortlist', 'Substitutability analysis', 'Go 条件'],
        },
        {
          title: 'プロダクト企画に変換する',
          description: 'ブランド、権限、データ、非機能、コンプライアンス、KPI、獲得導線、MVP 範囲を明文化する。',
          outputs: ['Product spec', 'MVP scope', 'Acceptance direction'],
        },
        {
          title: 'UX/IA と技術設計を揃える',
          description: '画面構造、ユーザーフロー、データ要求、技術構成、API、業務ルールを接続する。',
          outputs: ['UX/IA', 'Architecture docs', 'User stories'],
        },
        {
          title: 'PM が実行を編成する',
          description: 'Milestone、Feature、Task Contract を作り、Designer、Coder、Tester などの Worker を編成する。',
          outputs: ['Task contracts', 'Commits', 'QA evidence'],
        },
        {
          title: 'Milestone で受け入れ判断を行い、次へつなぐ',
          description: '単機能ではなく、開発段階全体の受け入れ条件に照らして PASS / FAIL と改善点を判断する。',
          outputs: ['Acceptance result', 'Risk log', 'Next iteration'],
        },
      ],
    },
    roles: {
      eyebrow: 'Role orchestration',
      title: '専門 Agent を、プロダクトチームの役割として組み込む',
      subtitle:
        'Strategist、Designer、Architect、PM、Coder、Tester がそれぞれ異なる責務を持ちます。人は判断が必要なポイントでレビューし、次工程に渡せる品質になっているかを確認します。',
      reviewGate: '人のレビューは、判断・承認・例外処理・最終受け入れに集中させます。',
      cards: [
        ['Strategist', '市場、ユーザー、事業性、代替リスクを整理し、進むべき機会を判断する。', ['Market lens', 'Validation', 'Product planning']],
        ['Designer', 'UX/IA、画面構造、デザインシステム、ページ内容をユーザーが理解できる形にする。', ['UX/IA', 'Design system', 'Visual handoff']],
        ['Architect', 'ビジネス・UX の判断を、技術構成、データ、API、業務ルール、受け入れ基準へ変換する。', ['System design', 'API', 'Business rules']],
        ['PM', 'Milestone、Feature、Task Contract を作り、Worker の範囲・品質・完了条件を管理する。', ['Task contracts', 'Decision log', 'Acceptance package']],
        ['Coder / Worker', '設計と契約に沿って実装、文書化、修正を行い、差分と検証結果を残す。', ['Implementation commits', 'Docs', 'Fixes']],
        ['Tester', '主要フロー、ブラウザ、ビルド、アクセシビリティ、Milestone Acceptance の証跡を確認する。', ['QA report', 'Screenshots', 'PASS/FAIL evidence']],
      ],
    },
    gates: {
      eyebrow: 'Quality gates',
      title: '速さを、証跡で管理する',
      subtitle:
        '各段階の成果物は、次へ進むための入力になります。曖昧なまま通過させず、判断理由・未解決点・受け入れ条件を残します。',
      rows: [
        ['上流判断ゲート', '市場性、代替性、MVP の価値、Go / Conditional Go / No-Go を確認する。'],
        ['企画・UX ゲート', '対象ユーザー、主要導線、画面構造、データ要求、非ゴールを確認する。'],
        ['アーキテクチャゲート', '技術選定、データ、API、業務ルール、非機能、リスクを確認する。'],
        ['実行ゲート', 'Task Contract、差分、テスト、型チェック、ビルド、アクセシビリティ観点を確認する。'],
        ['Milestone Acceptance ゲート', '個別タスクではなく、Development Phase と MVP Acceptance に照らして PASS / FAIL を判断する。'],
      ],
    },
    deliverables: {
      title: '各段階で、次に使える成果物を残す',
      subtitle:
        '成果物は社内説明、開発、検証、次回改善に使える形で残します。プロジェクトが進むほど、判断と学習が組織の資産になります。',
      cards: [
        ['市場・機会整理', '対象セグメント、機会仮説、競合・代替手段、Go 条件。'],
        ['プロダクト企画', 'Product spec、MVP 範囲、非ゴール、KPI、獲得導線、リスク。'],
        ['UX/IA', '画面階層、ユーザーフロー、ページデータ、ワイヤーフレーム。'],
        ['技術アーキテクチャ', 'System design、Data/API、Business rules、User stories、受け入れ条件。'],
        ['デザイン・ページ内容', 'Design system、visual handoff、ページコピー、状態・レスポンシブ仕様。'],
        ['実装差分', 'Feature commits、コード差分、依存関係、実装メモ。'],
        ['検証証跡', 'テスト、ビルド、ブラウザ確認、スクリーンショット、QA レポート。'],
        ['Milestone package', 'PASS / FAIL、残課題、リスク、次回改善候補。'],
      ],
    },
    useCases: {
      title: 'このワークフローが向いている相談',
      subtitle: 'まだ仕様が固まっていない段階でも、機会の選び方、MVP の切り方、品質ゲートの置き方から整理できます。',
      cards: [
        ['AI SaaS / 新規プロダクト', '市場機会から MVP までを短いサイクルで検証したい。'],
        ['業務自動化・内部ツール', '現場の知識と業務ルールを、実装可能なワークフローに変えたい。'],
        ['複雑な Web / App MVP', 'ユーザー体験、データ、AI 機能、運用を同時に設計したい。'],
        ['既存プロダクト改善', '次の改善範囲を、定量・定性の証跡から決めたい。'],
      ],
    },
    cta: {
      title: 'アイデアの段階から、実装・検証できるプロダクト計画へ',
      body: '要件が固まっていなくても構いません。市場機会、ユーザー、MVP 範囲、品質ゲートを一緒に整理し、次に検証すべき形へ落とし込みます。',
      tertiary: 'サービス選択に戻る',
    },
  },
  en: {
    metadata: {
      title: 'Agentic AI development workflow - Nebula Infinity',
      description:
        "Nebula Infinity's AI Workflow methodology for moving from market opportunity and product planning through UX/IA, architecture, implementation, QA, milestone acceptance, and iteration with specialized AI agents and human review gates.",
    },
    breadcrumb: {
      home: 'Home',
      services: 'Services',
      parent: 'AI Workflow',
      current: 'Agentic AI development workflow',
    },
    hero: {
      eyebrow: 'AI Workflow Methodology',
      title: 'From idea to verifiable product',
      lead:
        'Nebula Infinity moves from market opportunity, business validation, product planning, UX/IA, and architecture into implementation, QA, milestone acceptance, and iteration through specialized AI agents and human review gates. This is not only AI writing code; it is a delivery workflow that accumulates decisions, artifacts, and evidence for the next product decision.',
      chips: ['Market to Milestone', 'Multi-agent delivery', 'Human review gates'],
      primaryCta: 'Discuss this workflow',
      secondaryCta: 'Back to AI Workflow',
      panelTitle: 'Market signal → Milestone acceptance',
      panelRows: [
        ['Select the opportunity', 'Check market, users, substitutes, and business fit'],
        ['Translate into design', 'Carry decisions into UX/IA and architecture'],
        ['Move through quality gates', 'Check implementation, verification, and acceptance by stage'],
      ],
    },
    premise: {
      title: 'Product failure often happens before code',
      subtitle:
        'Increasing development speed alone does not reduce rework when market fit, user need, business model, and product boundaries remain unclear. This workflow makes upstream decisions explicit and hands them into design, implementation, and verification.',
      cards: [
        ['The opportunity is unclear', 'We first check whose pain is being solved and why existing substitutes are not enough.'],
        ['Design and technology are disconnected', 'UX/IA, data, permissions, and non-functional needs are connected so implementation decisions stay grounded.'],
        ['Done is poorly defined', 'Completion is judged by milestone acceptance criteria and evidence, not by code submission alone.'],
      ],
    },
    workflow: {
      eyebrow: 'Workflow map',
      title: 'From market signal to milestone acceptance',
      subtitle:
        'Specialized agents produce artifacts at each stage, humans review them, and the workflow packages them for the next step. The goal is not a rigid sequence; it is to keep decisions, evidence, and improvement points usable.',
      ariaLabel: 'AI Native Product Delivery Workflow stages',
      stages: [
        {
          title: 'Design the market lens',
          description: 'Define segments, trends, policy shifts, and pain themes as the lens for opportunity discovery.',
          outputs: ['Segment map', 'Research priorities', 'Initial hypotheses'],
        },
        {
          title: 'Screen and validate the opportunity',
          description: 'Check market signals, competition, substitutes, user pain, and business fit before committing to a product direction.',
          outputs: ['Shortlist', 'Substitutability analysis', 'Go conditions'],
        },
        {
          title: 'Translate into product planning',
          description: 'Make brand, access boundaries, data, non-functional needs, compliance, KPIs, acquisition, and MVP scope explicit.',
          outputs: ['Product spec', 'MVP scope', 'Acceptance direction'],
        },
        {
          title: 'Align UX/IA and architecture',
          description: 'Connect screen structure, user flows, data needs, technical structure, APIs, and business rules.',
          outputs: ['UX/IA', 'Architecture docs', 'User stories'],
        },
        {
          title: 'Orchestrate execution',
          description: 'PM turns the plan into milestones, features, and task contracts, then coordinates Designer, Coder, Tester, and other workers.',
          outputs: ['Task contracts', 'Commits', 'QA evidence'],
        },
        {
          title: 'Accept the milestone and iterate',
          description: 'Judge PASS / FAIL and improvement points against the product-level milestone criteria, not just individual feature completion.',
          outputs: ['Acceptance result', 'Risk log', 'Next iteration'],
        },
      ],
    },
    roles: {
      eyebrow: 'Role orchestration',
      title: 'Place specialist agents into product-team roles',
      subtitle:
        'Strategist, Designer, Architect, PM, Coder, and Tester carry different responsibilities. Humans review the points that require judgment and confirm whether the output is ready for the next stage.',
      reviewGate: 'Human review is concentrated on judgment, approval, exceptions, and final acceptance.',
      cards: [
        ['Strategist', 'Structures market, users, business fit, and substitutability risk to select the right opportunity.', ['Market lens', 'Validation', 'Product planning']],
        ['Designer', 'Turns product planning into UX/IA, screen structure, design system, and page content users can understand.', ['UX/IA', 'Design system', 'Visual handoff']],
        ['Architect', 'Translates business and UX decisions into architecture, data, APIs, business rules, and acceptance criteria.', ['System design', 'API', 'Business rules']],
        ['PM', 'Creates milestones, features, and task contracts, then manages worker scope, quality, and completion conditions.', ['Task contracts', 'Decision log', 'Acceptance package']],
        ['Coder / Worker', 'Implements, documents, and fixes within the design and task contract while leaving diffs and verification evidence.', ['Implementation commits', 'Docs', 'Fixes']],
        ['Tester', 'Checks critical flows, browser behavior, build health, accessibility, and milestone acceptance evidence.', ['QA report', 'Screenshots', 'PASS/FAIL evidence']],
      ],
    },
    gates: {
      eyebrow: 'Quality gates',
      title: 'Govern speed with evidence',
      subtitle:
        "Each stage's output becomes the input for the next stage. The workflow avoids passing ambiguity downstream by keeping rationale, unresolved points, and acceptance conditions visible.",
      rows: [
        ['Upstream decision gate', 'Check market fit, substitutability, MVP value, and Go / Conditional Go / No-Go.'],
        ['Planning and UX gate', 'Check target users, core flows, screen structure, data needs, and non-goals.'],
        ['Architecture gate', 'Check technical choices, data, APIs, business rules, non-functional needs, and risks.'],
        ['Execution gate', 'Check task contracts, diffs, tests, type checks, builds, and accessibility considerations.'],
        ['Milestone acceptance gate', 'Judge PASS / FAIL against Development Phase and MVP Acceptance, not individual task completion alone.'],
      ],
    },
    deliverables: {
      title: 'Each stage leaves reusable artifacts',
      subtitle:
        'Artifacts are kept in a form that supports internal explanation, development, verification, and future improvement. As the project progresses, decisions and learning become organizational assets.',
      cards: [
        ['Market and opportunity framing', 'Target segments, opportunity hypotheses, competitors, substitutes, and Go conditions.'],
        ['Product planning', 'Product spec, MVP scope, non-goals, KPIs, acquisition path, and risks.'],
        ['UX/IA', 'Screen hierarchy, user flows, page-data matrix, and wireframes.'],
        ['Technical architecture', 'System design, data/API, business rules, user stories, and acceptance conditions.'],
        ['Design and page content', 'Design system, visual handoff, page copy, states, and responsive behavior.'],
        ['Implementation diffs', 'Feature commits, code changes, dependencies, and implementation notes.'],
        ['Verification evidence', 'Tests, builds, browser checks, screenshots, and QA reports.'],
        ['Milestone package', 'PASS / FAIL, remaining issues, risks, and next improvement candidates.'],
      ],
    },
    useCases: {
      title: 'Where this workflow is a good fit',
      subtitle: 'Even before specifications are fixed, we can help structure opportunity selection, MVP scope, and quality gates.',
      cards: [
        ['AI SaaS / new products', 'You want to validate from market opportunity to MVP in short cycles.'],
        ['Business automation / internal tools', 'You want to turn operational knowledge and rules into an implementable workflow.'],
        ['Complex web / app MVPs', 'You need to design user experience, data, AI features, and operations together.'],
        ['Existing product improvement', 'You want evidence to guide the next improvement scope.'],
      ],
    },
    cta: {
      title: 'Turn an early idea into a product plan that can be delivered',
      body: 'You do not need fixed requirements. We can structure the market opportunity, users, MVP scope, and quality gates together, then turn them into the next verifiable step.',
      tertiary: 'Back to Home Services',
    },
  },
} as const;

export const aiWorkflowInquiry = 'AI Workflow Design & Development';
