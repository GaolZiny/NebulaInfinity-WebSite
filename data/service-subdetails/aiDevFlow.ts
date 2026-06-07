export const aiDevFlowContent = {
  ja: {
    metadata: {
      title: 'Agentic AI 開発ワークフロー - Nebula Infinity',
      description:
        'Nebula Infinity が自社の企画・設計・開発・検証・受け入れ業務を AI Workflow として実装した proof です。複雑な業務を、AI Agent と人のレビューゲートで運用できる形へ設計する考え方を紹介します。',
    },
    breadcrumb: {
      home: 'ホーム',
      services: 'サービス',
      parent: 'AI Workflow',
      current: 'Agentic AI 開発ワークフロー',
    },
    hero: {
      eyebrow: 'AI Workflow Proof',
      title: '複雑な事業運営を、AIワークフローとして実装する',
      lead:
        'このページは、Nebula Infinity が自社の市場機会整理、プロダクト企画、UX/IA、技術設計、実装、QA、Milestone Acceptance までの業務を AI Workflow として実装した proof です。当社固有の開発ワークフローをそのまま顧客に納品するという意味ではありません。長期・多段階・複数役割の業務でも、判断、成果物、レビューゲート、改善ログを設計すれば、AI と人が協働して運用できるワークフローにできることを示しています。',
      chips: ['Nebula internal proof', 'Multi-step operations', 'Human review gates'],
      primaryCta: '自社の複雑業務を相談する',
      secondaryCta: 'AI Workflow に戻る',
      panelTitle: 'Nebula internal proof → Client workflow design',
      panelRows: [
        ['自社業務を対象にする', '企画、設計、実装、QA、受け入れまでの実運用を AI Workflow 化する'],
        ['判断と証跡を残す', '役割、レビュー、受け入れ条件、改善ログをプロセスに組み込む'],
        ['顧客業務へ応用する', '同じ設計思想で、各社固有の複雑な業務ワークフローを設計・実装する'],
      ],
    },
    premise: {
      title: '証明したいのは、開発手順そのものではなく、複雑業務を実装できること',
      subtitle:
        'AI Workflow の価値は、特定の作業を速くするだけではありません。複数の役割、長い工程、判断の分岐、レビュー、証跡、次工程への引き渡しが必要な業務を、AI と人が協働できる運用プロセスとして形にすることです。',
      cards: [
        ['長期・多段階の業務を扱える', '市場調査、企画、設計、実装、検証、受け入れのように、工程が長く依存関係が多い業務でも、段階と成果物を分けて設計できます。'],
        ['役割分担とレビューを組み込める', 'AI Agent に任せる作業、人が判断する作業、レビューすべき地点を分けることで、速度と品質を同時に管理できます。'],
        ['各社固有の業務へ応用できる', 'このページの流れは Nebula Infinity 自社の proof です。顧客向けには、PMO、リサーチ、審査、運用、社内管理など、各社の業務に合わせて再設計します。'],
      ],
    },
    workflow: {
      eyebrow: 'Workflow proof',
      title: 'Nebula Infinity 自社ワークフローの実装例',
      subtitle:
        '以下は、当社が自社の事業・開発業務に実装している AI Workflow の一例です。重要なのは順番を固定することではなく、判断、成果物、レビュー、受け入れ条件、改善点を次の工程へ渡せる形で残すことです。顧客プロジェクトでは、同じ設計思想を使い、対象業務に合わせて段階・役割・ゲートを組み替えます。',
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
      reviewGate: '役割名は Nebula Infinity の自社ワークフロー上の例です。顧客業務では、営業、PMO、審査、CS、バックオフィスなど、対象業務に合わせた役割へ置き換えて設計します。人のレビューは、判断・承認・例外処理・最終受け入れに集中させます。',
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
        '各段階の成果物は、次へ進むための入力になります。曖昧なまま通過させず、判断理由・未解決点・受け入れ条件を残します。ゲートは開発専用ではなく、業務上の判断・承認・例外処理・引き渡しにも適用できます。',
      rows: [
        ['上流判断ゲート', '市場性、代替性、MVP の価値、Go / Conditional Go / No-Go を確認する。'],
        ['企画・UX ゲート', '対象ユーザー、主要導線、画面構造、データ要求、非ゴールを確認する。'],
        ['アーキテクチャゲート', '技術選定、データ、API、業務ルール、非機能、リスクを確認する。'],
        ['実行ゲート', 'Task Contract、差分、テスト、型チェック、ビルド、アクセシビリティ観点を確認する。'],
        ['Milestone Acceptance ゲート', '個別タスクではなく、Development Phase と MVP Acceptance に照らして PASS / FAIL を判断する。'],
      ],
    },
    deliverables: {
      title: '複雑業務を、引き継げる運用資産として残す',
      subtitle:
        '成果物は、Nebula Infinity 自社ワークフローで使っている実装証跡の例です。顧客向けには、対象業務に応じて調査結果、判断基準、レビュー記録、連携仕様、改善ログなどを残し、担当者に閉じない運用資産へ変えていきます。',
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
      title: 'この proof から相談しやすい複雑業務',
      subtitle: '開発ワークフローそのものを導入したい場合だけでなく、長期・多段階・判断分岐の多い業務を AI Workflow 化したい相談に向いています。',
      cards: [
        ['商品・市場リサーチ', '市場、競合、自社データ、独自ノウハウを集め、意思決定と後続システム連携までつなげたい。'],
        ['PMO・プロジェクト管理', '進捗、課題、リスク、リソース、意思決定ログを整理し、プロジェクト運営を継続改善したい。'],
        ['審査・レビュー・承認業務', '判断基準、例外処理、レビュー証跡を残しながら、個人に依存しやすい確認業務を整えたい。'],
        ['複数システムをまたぐ業務運用', '人の判断、AI の処理、既存ツールやデータ連携を一つの業務フローとしてつなげたい。'],
      ],
    },
    cta: {
      title: '自社固有の複雑業務を、AI Workflow として設計できます',
      body: 'このページの開発ワークフローは、Nebula Infinity 自社の proof です。同じものをそのまま導入するのではなく、貴社の業務、判断基準、レビュー導線、既存システムに合わせて、再現可能な AI Workflow を一緒に設計します。',
      tertiary: 'サービス選択に戻る',
    },
  },
  en: {
    metadata: {
      title: 'Agentic AI development workflow - Nebula Infinity',
      description:
        "Proof that Nebula Infinity implemented its own planning, design, development, verification, and acceptance operations as an AI Workflow. The page explains how complex work can be designed so AI agents and human review gates can operate it.",
    },
    breadcrumb: {
      home: 'Home',
      services: 'Services',
      parent: 'AI Workflow',
      current: 'Agentic AI development workflow',
    },
    hero: {
      eyebrow: 'AI Workflow Proof',
      title: 'Implement complex business operations as AI workflows',
      lead:
        "This page is proof of how Nebula Infinity implemented its own market opportunity, product planning, UX/IA, architecture, implementation, QA, and milestone acceptance operations as AI Workflow. It does not mean that Nebula Infinity installs this exact development workflow for every client. It demonstrates that long-running, multi-step operations with multiple roles can become AI-and-human workflows when decisions, artifacts, review gates, and improvement logs are designed into the process.",
      chips: ['Nebula internal proof', 'Multi-step operations', 'Human review gates'],
      primaryCta: 'Discuss your complex workflow',
      secondaryCta: 'Back to AI Workflow',
      panelTitle: 'Nebula internal proof → Client workflow design',
      panelRows: [
        ["Target Nebula's own work", "Turn planning, design, implementation, QA, and acceptance operations into AI Workflow"],
        ['Preserve decisions and evidence', 'Build roles, reviews, acceptance criteria, and improvement logs into the process'],
        ['Apply the design to customer operations', 'Use the same design principle to design and implement company-specific complex workflows'],
      ],
    },
    premise: {
      title: 'The proof is not the development procedure itself; it is that complex work can be implemented',
      subtitle:
        'AI Workflow is not only about making one task faster. It is about turning work with multiple roles, long processes, decision branches, reviews, evidence, and handoffs into an operating process where AI and people collaborate.',
      cards: [
        ['Handle long-running multi-step work', 'Even work with long phases and many dependencies, such as market research, planning, design, implementation, verification, and acceptance, can be designed by separating stages and artifacts.'],
        ['Build in role separation and reviews', 'Speed and quality can be governed together by separating what AI agents handle, where people decide, and which points require review.'],
        ["Apply the approach to each company's own operations", "This page shows Nebula Infinity's own proof. For customers, we redesign the approach around their operations, such as PMO, research, screening, operations, and internal management."],
      ],
    },
    workflow: {
      eyebrow: 'Workflow proof',
      title: "Example implementation of Nebula Infinity's own workflow",
      subtitle:
        "The flow below is one example of AI Workflow implemented in Nebula Infinity's own business and development operations. The important point is not freezing this order; it is preserving decisions, artifacts, reviews, acceptance criteria, and improvements so they can move into the next phase. Customer projects should reuse the design principle while changing stages, roles, and gates around the target operation.",
      ariaLabel: 'AI Native Product Delivery Workflow stages',
      stages: [
        {
          title: 'Design the market lens',
          description: 'Define segments, trends, policy shifts, and pain themes as the lens for opportunity discovery.',
          outputs: ['Segment map', 'Research priorities', 'Initial hypotheses'],
        },
        {
          title: 'Screen and validate opportunities',
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
          title: 'Orchestrate execution through PM',
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
      reviewGate: "The role names are examples from Nebula Infinity's own workflow. For customer operations, replace them with roles such as sales, PMO, review, customer support, back office, or other business-specific roles. Human review is concentrated on judgment, approval, exceptions, and final acceptance.",
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
        "Each stage's output becomes the input for the next stage. The workflow avoids passing ambiguity downstream by keeping rationale, unresolved points, and acceptance conditions visible. Gates are not development-only; they can also apply to business judgment, approval, exception handling, and handoff.",
      rows: [
        ['Upstream decision gate', 'Check market fit, substitutability, MVP value, and Go / Conditional Go / No-Go.'],
        ['Planning and UX gate', 'Check target users, core flows, screen structure, data needs, and non-goals.'],
        ['Architecture gate', 'Check technical choices, data, APIs, business rules, non-functional needs, and risks.'],
        ['Execution gate', 'Check task contracts, diffs, tests, type checks, builds, and accessibility considerations.'],
        ['Milestone acceptance gate', 'Judge PASS / FAIL against Development Phase and MVP Acceptance, not individual task completion alone.'],
      ],
    },
    deliverables: {
      title: 'Leave complex operations as transferable operating assets',
      subtitle:
        "The artifacts shown are examples of evidence used in Nebula Infinity's own workflow. For customers, deliverables should preserve research results, decision criteria, review records, integration specifications, and improvement logs according to the target operation.",
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
      title: 'Complex operations that can start from this proof',
      subtitle: 'The page is useful not only when a client wants a development workflow, but when long-running, multi-step, decision-heavy work should become AI Workflow.',
      cards: [
        ['Product and market research', 'You want to gather market, competitor, and internal data, then connect decisions into downstream systems.'],
        ['PMO and project management', 'You want to organize progress, issues, risks, resources, and decision logs while continuously improving project operations.'],
        ['Screening, review, and approval work', 'You want to structure work that easily becomes people-dependent while preserving decision criteria, exception handling, and review evidence.'],
        ['Operations spanning multiple systems', 'You want to connect human decisions, AI processing, existing tools, and data integrations into one business workflow.'],
      ],
    },
    cta: {
      title: 'Design your own complex business operation as an AI Workflow',
      body: "The development workflow on this page is Nebula Infinity's internal proof. Instead of introducing the same workflow unchanged, we design a repeatable AI Workflow around your work, decision criteria, review paths, and existing systems.",
      tertiary: 'Back to Home Services',
    },
  },
} as const;

export const aiWorkflowInquiry = 'AI Workflow Design & Development';
