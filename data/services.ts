import { Service } from '@/types/services';

export const services: Service[] = [
  {
    id: 'ai-workflow',
    titleJa: '業務フローへのAI統合',
    titleEn: 'AI Native Workflow',
    subtitleJa: '既存の業務フローに AI エージェントを組み込み、生産性を劇的に向上させます',
    subtitleEn: 'Embed AI agents into your existing workflows to dramatically boost productivity',
    descriptionJa: '単純な反復作業から複雑な業務処理まで、既存フローに AI エージェントを組み込みます。ドキュメント解析、データ処理自動化、自律型エージェント構築で、大幅なコスト削減とヒューマンエラーの撲滅を実現します。',
    descriptionEn: 'Embed AI agents into existing flows — from simple repetitive tasks to complex business processing. Document analysis, data processing automation, and autonomous agent development deliver massive cost savings and eliminate human error.',
    aboutJa: [
      '文書処理、データ抽出、レポート生成、カスタマーサポートなど、日々繰り返される業務を AI エージェントで自動化します。単なるツール導入ではなく、業務ロジックを理解し自律的に判断・行動するエージェントを構築。非属人的なアセットとして業務知識を蓄積し、時間とコストを大幅に削減しながらヒューマンエラーを防止します。',
      'OpenAI、Anthropic Claude、オープンソース LLM に対応したマルチモデルアーキテクチャを採用。お客様の要件や予算に応じて最適な LLM を選定します。さらにマルチエージェントシステムにより、「分析エージェント」「実行エージェント」「検証エージェント」のような役割分担で複雑なタスクを段階的に処理。既存システム（CRM、ERP、データベース）との API 連携も完全にサポートします。',
      '導入から運用まで、一貫したサポートを提供します。業務フローの整理、エージェント設計、実装、テスト、運用トレーニングまでワンストップで対応。段階的な導入により、リスクを最小限に抑えながら確実に自動化を進められます。'
    ],
    aboutEn: [
      'Automate daily repetitive operations — document processing, data extraction, report generation, customer support — with AI agents. Beyond simple tool adoption, we build agents that understand business logic and act autonomously. Accumulate business knowledge as non-personnel assets, dramatically reducing time and costs while preventing human error.',
      'We adopt a multi-model architecture supporting OpenAI, Anthropic Claude, and open-source LLMs. We select the optimal LLM based on your requirements and budget. Multi-agent systems enable step-by-step handling of complex tasks through role division — "analysis agent," "execution agent," "validation agent." Full API integration with existing systems (CRM, ERP, databases) is fully supported.',
      'We provide consistent support from deployment through operations. From workflow analysis and agent design to implementation, testing, and operational training — we handle everything end-to-end. Phased rollouts minimize risk while ensuring reliable automation progress.'
    ],
    features: {
      ja: [
        {
          title: 'ドキュメント解析・分類自動化',
          description: 'AI-OCR と自然言語処理により、文書の自動解析・分類・データ抽出を実現。請求書、契約書、申込書などを構造化データとして取得できます。'
        },
        {
          title: 'マルチモデル対応エージェント構築',
          description: 'OpenAI、Anthropic Claude、Llama 等の LLM に対応した柔軟なエージェントアーキテクチャ。業務フローに組み込み、自律的に判断・行動します。'
        },
        {
          title: '既存システムとのシームレス連携',
          description: 'CRM、ERP、データベース等と API 連携し、ワークフローを統合。データの二重入力を排除し、システム間の情報フローを自動化します。'
        },
        {
          title: 'マルチエージェント協調処理',
          description: '複数のエージェントが協調動作し、複雑なタスクを段階的に処理。役割分担により、高度な業務の完全自動化を実現します。'
        }
      ],
      en: [
        {
          title: 'Automated Document Analysis & Classification',
          description: 'AI-OCR and NLP enable automatic document analysis, classification, and data extraction. Get invoices, contracts, and applications as structured data.'
        },
        {
          title: 'Multi-Model Agent Development',
          description: 'Flexible agent architecture supporting OpenAI, Anthropic Claude, Llama, and more. Embedded into workflows, agents make autonomous decisions and take action.'
        },
        {
          title: 'Seamless Integration with Existing Systems',
          description: 'API integration with CRM, ERP, databases unifies workflows. Eliminate duplicate data entry and automate information flow between systems.'
        },
        {
          title: 'Multi-Agent Orchestration',
          description: 'Multiple agents collaborate to handle complex tasks step-by-step. Role division enables complete automation of sophisticated workflows.'
        }
      ]
    },
    technologies: ['LangChain', 'OpenAI API', 'Anthropic Claude', 'LangGraph', 'AutoGen', 'n8n', 'Document AI', 'Python', 'Node.js', 'Function Calling', 'Pinecone'],
    process: {
      ja: [
        { title: '業務分析', description: '現行業務フローを詳細に分析し、AI 自動化で最大の効果が得られるプロセスを特定します。' },
        { title: 'エージェント設計', description: 'エージェントアーキテクチャ、ワークフロー、ツール構成を詳細に設計。最適な LLM を選定します。' },
        { title: '開発・統合', description: 'エージェントの実装と既存システムとの統合。API 連携、プロンプト最適化、エラーハンドリングを含む堅牢な実装。' },
        { title: 'テスト・最適化', description: '実際の業務データを使った動作検証と精度チューニング。本番環境での安定稼働を保証します。' },
        { title: '導入・運用支援', description: 'デプロイメントと運用トレーニング。稼働開始後も継続的な改善をサポートします。' }
      ],
      en: [
        { title: 'Business Analysis', description: 'Analyze current workflows in detail and identify processes where AI automation delivers maximum impact.' },
        { title: 'Agent Design', description: 'Design agent architecture, workflows, and tool configurations in detail. Select the optimal LLM.' },
        { title: 'Development & Integration', description: 'Implement agents and integrate with existing systems. Robust implementation including API connections, prompt optimization, and error handling.' },
        { title: 'Testing & Optimization', description: 'Validation with real business data and accuracy tuning. Ensure stable operation in production environments.' },
        { title: 'Deployment & Support', description: 'Deployment and operational training. Continuous improvement support even after going live.' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'ai-product',
    titleJa: 'コアサービス・プロダクトへのAI融合',
    titleEn: 'AI Native Application',
    subtitleJa: '最先端の AI 機能をプロダクトに融合し、他社には真似できない付加価値を創出します',
    subtitleEn: 'Fuse cutting-edge AI into your products to create unique competitive advantages',
    descriptionJa: '御社のサービスや新規事業に最先端の AI 機能を組み込みます。RAG、マルチモーダル AI、リアルタイム処理など、AI 駆動のプロダクト開発で市場投入を加速します。',
    descriptionEn: 'Integrate cutting-edge AI into your services and new ventures. RAG, multimodal AI, real-time processing — accelerate time-to-market with AI-driven product development.',
    aboutJa: [
      'お客様の目標に応じて、最前線の AI 技術を活用した最適な実装方針を提案します。RAG による社内ナレッジ活用、マルチモーダル AI（画像・音声・テキスト）、リアルタイムストリーミング処理など、幅広いユースケースに対応。複雑なバックエンド処理を AI に担わせることで、開発コストを抑えながら高付加価値なプロダクトを実現します。',
      'フロントエンド（React / Next.js / Flutter）からバックエンド（FastAPI / Hono）、AI モデル統合、インフラ構築まで、フルスタックで提供します。OpenAI API、Google Gemini API などの最新モデルに対応し、ファインチューニングやプロンプトエンジニアリングによる精度最適化も実施。アーキテクチャ設計から実装、デプロイまで一貫してサポートします。',
      'ユーザー体験を重視した、実用的なアプリケーションを提供します。技術のための技術ではなく、実際に使われ、成果を生み出すプロダクトを追求します。自社プロダクト（Japan Life Navi / Rigel）で培ったノウハウを、お客様のプロジェクトに活かします。'
    ],
    aboutEn: [
      'Based on your goals, we propose optimal implementation strategies leveraging the latest AI technologies. We support a wide range of use cases: RAG-powered internal knowledge systems, multimodal AI (image, voice, text), real-time streaming processing, and more. By delegating complex backend processing to AI, we deliver high-value products while keeping development costs manageable.',
      'We provide full-stack delivery: frontend (React / Next.js / Flutter), backend (FastAPI / Hono), AI model integration, and infrastructure setup. Supporting the latest models from OpenAI API and Google Gemini API, we also perform accuracy optimization through fine-tuning and prompt engineering. Consistent support from architecture design through implementation to deployment.',
      'We deliver practical applications with a focus on user experience. Not technology for technology\'s sake — we pursue products that are actually used and generate real results. We apply the expertise gained from our own products (Japan Life Navi / Rigel) to your projects.'
    ],
    features: {
      ja: [
        {
          title: 'RAG / ナレッジベース構築',
          description: '社内文書やナレッジベースを活用した AI 検索・生成システムを構築。ベクトルデータベースと LLM を組み合わせ、高精度な情報検索を実現します。'
        },
        {
          title: 'マルチモーダル AI 統合',
          description: '画像認識、音声処理、テキスト生成を組み合わせたマルチモーダルアプリケーション。ユーザー体験を次のレベルに引き上げます。'
        },
        {
          title: 'リアルタイムストリーミング処理',
          description: 'SSE / WebSocket によるリアルタイム AI レスポンス。ストリーミングチャット、ライブ翻訳、即座のフィードバックを実現します。'
        },
        {
          title: 'フルスタック開発',
          description: 'フロントエンド、バックエンド、AI 統合、インフラまで一貫して開発。分断のないスムーズな開発体験を提供します。'
        }
      ],
      en: [
        {
          title: 'RAG / Knowledge Base Development',
          description: 'Build AI search and generation systems leveraging internal documents and knowledge bases. Combine vector databases with LLMs for highly accurate information retrieval.'
        },
        {
          title: 'Multimodal AI Integration',
          description: 'Multimodal applications combining image recognition, voice processing, and text generation. Elevate user experience to the next level.'
        },
        {
          title: 'Real-Time Streaming Processing',
          description: 'Real-time AI responses via SSE / WebSocket. Enable streaming chat, live translation, and instant feedback.'
        },
        {
          title: 'Full-Stack Development',
          description: 'End-to-end development: frontend, backend, AI integration, and infrastructure. A seamless development experience with no gaps.'
        }
      ]
    },
    technologies: ['React', 'Next.js', 'Flutter', 'TypeScript', 'Python', 'FastAPI', 'OpenAI API', 'Google Gemini API', 'LangChain', 'PostgreSQL', 'Firebase'],
    process: {
      ja: [
        { title: '要件定義', description: 'ユースケース分析と AI 機能の要件策定。実現したいプロダクト体験を明確にします。' },
        { title: '設計', description: 'UI/UX 設計、AI モデル選定、システムアーキテクチャ設計。技術選定と詳細仕様を決定します。' },
        { title: '開発', description: 'フロントエンド、バックエンド、AI モデル統合の実装。反復開発により柔軟に仕様調整を行います。' },
        { title: 'テスト', description: 'AI 精度検証、パフォーマンスチューニング、セキュリティレビュー。本番環境での安定稼働を保証します。' },
        { title: '納品', description: 'デプロイメントとドキュメント提供。運用開始後のサポートも実施します。' }
      ],
      en: [
        { title: 'Requirements Definition', description: 'Use case analysis and AI feature requirements. Clarify the product experience you want to create.' },
        { title: 'Design', description: 'UI/UX design, AI model selection, and system architecture. Determine technology choices and detailed specifications.' },
        { title: 'Development', description: 'Frontend, backend, and AI model integration implementation. Iterative development allows flexible specification adjustments.' },
        { title: 'Testing', description: 'AI accuracy validation, performance tuning, and security review. Ensure stable operation in production.' },
        { title: 'Delivery', description: 'Deployment and documentation delivery. Post-launch operational support is also provided.' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'ai-development',
    titleJa: '開発におけるAI活用',
    titleEn: 'AI Native Development',
    subtitleJa: '独自の AI 協調開発メソッドで、ゼロから高品質なプロダクトを高速で構築します',
    subtitleEn: 'Build high-quality products from scratch at extreme speed with our proprietary AI co-development methodology',
    descriptionJa: '9 エージェントパイプラインによる独自の AI 協調開発メソッド。コンセプトから実装、テストまで全工程を AI で最適化し、最短1日で動く MVP を提供します。',
    descriptionEn: 'Proprietary AI co-development methodology with a 9-agent pipeline. AI optimizes every stage from concept to implementation and testing, delivering a working MVP in as little as 1 day.',
    aboutJa: [
      '独自に開発した「マルチエージェント協調開発メソッド」により、従来の開発プロセスを根本から変革します。PM、Architect、Designer、Coder、Tester など 9 つの専門エージェントがパイプラインを形成し、要件定義から設計、実装、テスト、デプロイまでを高度に自動化。人間の開発者が監督・レビューすることで、AI のスピードと人間の判断力を両立させます。',
      'このメソッドの実績は、自社プロダクトで証明済みです。Rigel（AI 記帳 SaaS）では 33,000 行超のコードベースと 367 テストを高品質に構築。Japan Life Navi では 336 ガイド記事 × 7 言語の大規模コンテンツを効率的に開発。いずれもこのメソッドにより、通常の数分の一の期間で開発を完了しています。',
      '受託開発においても、このメソッドの力を最大限にお客様に提供します。最短1日で動く MVP を提示し、実物を見ながら要件をすり合わせることで手戻りをゼロに。コンセプト・要件定義から実装、テストに至る全工程を AI で最適化し、従来では考えられなかった低コスト・短納期を実現します。'
    ],
    aboutEn: [
      'Our proprietary "Multi-Agent Co-Development Methodology" fundamentally transforms the traditional development process. Nine specialized agents — PM, Architect, Designer, Coder, Tester, and more — form a pipeline that highly automates everything from requirements to design, implementation, testing, and deployment. Human developers supervise and review, achieving both AI speed and human judgment.',
      'This methodology is proven through our own products. Rigel (AI bookkeeping SaaS) produced a 33,000+ line codebase with 367 tests at high quality. Japan Life Navi efficiently developed 336 guide articles across 7 languages. Both projects were completed in a fraction of the usual timeline using this methodology.',
      'For contract development, we bring the full power of this methodology to our clients. We present a working MVP in as little as 1 day, aligning requirements with the real product to eliminate rework. AI optimizes every stage from concept and requirements through implementation and testing, achieving unprecedented low cost and short delivery timelines.'
    ],
    features: {
      ja: [
        {
          title: '9 エージェントパイプライン',
          description: 'PM、Architect、Designer、Coder、Tester 等の専門エージェントが連携。要件定義からデプロイまで、全工程を高度に自動化します。'
        },
        {
          title: '1 Day MVP',
          description: '最短1日で動くプロトタイプを提供。実物を見ながら要件をすり合わせ、手戻りをゼロにします。'
        },
        {
          title: '品質保証（AI + 人間のハイブリッド）',
          description: 'AI による網羅的な自動テストと、人間のエンジニアによるレビューを組み合わせ。スピードと品質を両立します。'
        },
        {
          title: '実績に裏付けされた方法論',
          description: 'Rigel（33K+ LOC / 367 テスト）、Japan Life Navi（336 ガイド × 7 言語）など、自社プロダクトで実証済みの開発メソッド。'
        }
      ],
      en: [
        {
          title: '9-Agent Pipeline',
          description: 'Specialized agents — PM, Architect, Designer, Coder, Tester — collaborate in a pipeline. Highly automates every stage from requirements to deployment.'
        },
        {
          title: '1-Day MVP',
          description: 'Deliver a working prototype in as little as 1 day. Align requirements with the real product to eliminate rework entirely.'
        },
        {
          title: 'Quality Assurance (AI + Human Hybrid)',
          description: 'Combine comprehensive AI-driven automated testing with human engineer reviews. Achieve both speed and quality.'
        },
        {
          title: 'Battle-Tested Methodology',
          description: 'Proven through our own products: Rigel (33K+ LOC / 367 tests), Japan Life Navi (336 guides × 7 languages).'
        }
      ]
    },
    technologies: ['OpenClaw', 'Claude', 'Multi-Agent Pipeline', 'CI/CD', 'Docker', 'GitHub Actions', 'TypeScript', 'Python', 'Flutter'],
    process: {
      ja: [
        { title: 'コンセプト・要件定義', description: 'お客様の課題を整理し、MVP スコープを定義。1 Day MVP の対象範囲を明確にします。' },
        { title: 'アーキテクチャ設計', description: 'Architect エージェントがデータモデル、API 設計、技術選定を策定。人間がレビュー・承認します。' },
        { title: 'AI 協調開発', description: '9 エージェントパイプラインによる高速実装。Coder エージェントが実装し、Tester エージェントが自動テストを実行します。' },
        { title: '品質検証', description: 'AI 自動テスト + 人間のエンジニアによるレビュー。ハイブリッド体制で品質を保証します。' },
        { title: 'デプロイ・引き渡し', description: 'CI/CD パイプラインによる自動デプロイ。ソースコード、ドキュメント、運用手順書を納品します。' }
      ],
      en: [
        { title: 'Concept & Requirements', description: 'Organize your challenges and define MVP scope. Clarify the target range for a 1-Day MVP.' },
        { title: 'Architecture Design', description: 'Architect agent develops data models, API design, and technology selection. Humans review and approve.' },
        { title: 'AI Co-Development', description: 'Rapid implementation via the 9-agent pipeline. Coder agents implement while Tester agents execute automated tests.' },
        { title: 'Quality Verification', description: 'AI automated testing + human engineer review. Hybrid framework ensures quality.' },
        { title: 'Deploy & Handoff', description: 'Automated deployment via CI/CD pipeline. Deliver source code, documentation, and operational guides.' }
      ]
    },
    category: 'ai'
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find(service => service.id === id);
}

export function getFeaturedService(): Service | undefined {
  return services.find(service => service.featured);
}

export function getServicesByCategory(category: 'ai' | 'web3'): Service[] {
  return services.filter(service => service.category === category);
}
