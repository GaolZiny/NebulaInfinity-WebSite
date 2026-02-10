import { Service } from '@/types/services';

export const services: Service[] = [
  {
    id: 'automation-workflow',
    titleJa: '自動化ワークフロー開発',
    titleEn: 'Automation Workflow Development',
    subtitleJa: '繰り返し業務を AI で自動化し、生産性を劇的に向上させます',
    subtitleEn: 'Automate repetitive work with AI and dramatically boost productivity',
    descriptionJa: '手作業のプロセスを AI で自動化。文書処理、データ抽出、レポート生成などを効率化し、時間とコストを削減します。',
    descriptionEn: 'Automate manual processes with AI. Streamline document processing, data extraction, and report generation — reducing time and costs.',
    aboutJa: [
      '文書処理、データ抽出、レポート生成など、日々繰り返される手作業を AI で自動化します。時間とコストを大幅に削減し、ヒューマンエラーを防止。従業員は、より創造的で価値の高い業務に集中できるようになります。',
      '既存システム（CRM、ERP、データベース）とのシームレスな連携も可能です。API 統合やカスタムワークフローエンジンにより、お客様の業務フローに最適化された自動化を実現。既存の IT 資産を活かしながら、段階的に自動化を進められます。',
      '導入から運用まで、一貫したサポートを提供します。業務フローの整理、ワークフロー設計、実装、テスト、そして運用トレーニングまで、すべてをワンストップで対応。安心して自動化を進められます。'
    ],
    aboutEn: [
      'Automate daily repetitive manual tasks — document processing, data extraction, report generation — with AI. Significantly reduce time and costs while preventing human error. Your team can focus on more creative, high-value work.',
      'Seamless integration with existing systems (CRM, ERP, databases) is fully supported. Through API integration and custom workflow engines, we deliver automation perfectly tailored to your workflows — leveraging existing IT assets while phasing in automation step by step.',
      'We provide consistent support from deployment through operations. From workflow analysis and design to implementation, testing, and operational training — we handle everything end-to-end, ensuring a smooth automation journey.'
    ],
    features: {
      ja: [
        {
          title: 'ドキュメント解析・分類自動化',
          description: 'AI-OCR と自然言語処理により、文書の自動解析・分類・データ抽出を実現。請求書、契約書、申込書などをスキャンするだけで、必要な情報を構造化データとして取得できます。'
        },
        {
          title: 'データ抽出・構造化',
          description: '非構造化データから必要な情報を抽出し、データベースや Excel として活用可能な形式に変換。手作業での転記ミスを防ぎ、データ品質を向上させます。'
        },
        {
          title: '既存システムとの連携',
          description: 'CRM、ERP、データベース等の既存システムと API 連携し、ワークフローを統合。データの二重入力を排除し、システム間の情報フローを自動化します。'
        },
        {
          title: 'プロセス監視・アラート',
          description: 'ワークフローの実行状況をリアルタイムで監視。異常検知時には即座にアラート通知し、迅速な対応を可能にします。'
        }
      ],
      en: [
        {
          title: 'Automated Document Analysis & Classification',
          description: 'AI-OCR and NLP enable automatic document analysis, classification, and data extraction. Simply scan invoices, contracts, applications — and get the information you need as structured data.'
        },
        {
          title: 'Data Extraction & Structuring',
          description: 'Extract necessary information from unstructured data and convert it into formats ready for databases or Excel. Eliminate manual transcription errors and improve data quality.'
        },
        {
          title: 'Integration with Existing Systems',
          description: 'API integration with CRM, ERP, databases, and other existing systems unifies workflows. Eliminate duplicate data entry and automate information flow between systems.'
        },
        {
          title: 'Process Monitoring & Alerts',
          description: 'Monitor workflow execution in real time. Detect anomalies and send instant alerts, enabling rapid response.'
        }
      ]
    },
    technologies: ['n8n', 'Zapier', 'Make', 'Apache Airflow', 'LangChain', 'OpenAI API', 'Document AI', 'Tesseract', 'Azure AI', 'Python', 'Node.js'],
    process: {
      ja: [
        { title: '要件定義', description: '現行業務フローの分析と自動化対象の特定。どのプロセスを自動化すれば最大の効果が得られるかを見極めます。' },
        { title: '設計', description: 'ワークフローエンジンの選定とプロセス設計。お客様の環境や要件に最適なツールを選び、詳細なフロー図を作成します。' },
        { title: '開発', description: 'ワークフローの実装と既存システムとの統合。API 接続、データマッピング、エラーハンドリングを含めた堅牢な実装を行います。' },
        { title: 'テスト', description: '動作検証と精度チューニング。実際のデータを使ったテストにより、本番環境での安定稼働を保証します。' },
        { title: '納品', description: 'デプロイメントと運用トレーニング。スムーズな本番移行と、運用担当者への研修を実施します。' }
      ],
      en: [
        { title: 'Requirements Definition', description: 'Analyze current workflows and identify automation targets. Determine which processes will deliver maximum impact when automated.' },
        { title: 'Design', description: 'Select workflow engines and design processes. Choose optimal tools for your environment and requirements, creating detailed flow diagrams.' },
        { title: 'Development', description: 'Implement workflows and integrate with existing systems. Robust implementation including API connections, data mapping, and error handling.' },
        { title: 'Testing', description: 'Validation and accuracy tuning. Testing with real data ensures stable operation in production environments.' },
        { title: 'Delivery', description: 'Deployment and operational training. Smooth production rollout and training for operational staff.' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'custom-ai-agent',
    titleJa: 'カスタムAIエージェント開発',
    titleEn: 'Custom AI Agent Development',
    subtitleJa: 'ビジネスプロセスを理解し、自律的に行動する AI エージェント',
    subtitleEn: 'AI agents that understand your business and act autonomously',
    descriptionJa: 'ビジネスプロセスを理解し、自律的に判断・行動する AI エージェントを構築。OpenAI、Anthropic、オープンソース LLM に対応します。',
    descriptionEn: 'Build AI agents that understand business processes and act autonomously. Supports OpenAI, Anthropic, and open-source LLMs.',
    aboutJa: [
      'AI エージェントは、単なるチャットボットではありません。業務フローを理解し、状況に応じて判断し、必要なアクションを自律的に実行する、次世代の自動化ツールです。顧客対応、データ分析、レポート作成、タスク管理など、幅広い業務シーンで活躍します。',
      'OpenAI、Anthropic Claude、Llama などのマルチモデルに対応。お客様の要件や予算に応じて、最適な LLM を選定します。また、エージェント間連携（マルチエージェントシステム）により、複雑なタスクを段階的に処理。「戦略立案エージェント」「実行エージェント」「検証エージェント」のように役割分担し、高度な業務を自動化できます。',
      'カスタマーサポート、データ分析、コンテンツ生成、プロジェクト管理など、あらゆるビジネスシーンで活躍する AI エージェントを構築します。既存システムやデータベースと統合し、実務で即戦力となるエージェントを提供します。'
    ],
    aboutEn: [
      'AI agents go far beyond chatbots. They understand workflows, make context-aware decisions, and autonomously execute necessary actions — the next generation of automation. From customer support to data analysis, report generation, and task management, they excel across a wide range of business scenarios.',
      'We support multi-model architectures: OpenAI, Anthropic Claude, Llama, and more. We select the optimal LLM based on your requirements and budget. Multi-agent orchestration enables step-by-step handling of complex tasks — dividing roles like "strategy agent," "execution agent," and "validation agent" to automate sophisticated workflows.',
      'We build AI agents that thrive in every business scenario: customer support, data analysis, content generation, project management, and more. Integrated with existing systems and databases, our agents become immediately productive in real operations.'
    ],
    features: {
      ja: [
        {
          title: 'マルチモデル対応エージェント設計',
          description: 'OpenAI、Anthropic、Llama 等、複数の LLM に対応した柔軟なエージェントアーキテクチャ。お客様のニーズに応じて、最適なモデルを組み合わせます。'
        },
        {
          title: 'ビジネスロジック統合',
          description: '既存システムや API とシームレスに連携し、業務フローに組み込み可能。エージェントが CRM、データベース、外部サービスと直接やり取りします。'
        },
        {
          title: '意思決定フローの可視化',
          description: 'エージェントの判断プロセスを可視化し、透明性の高い運用を実現。「なぜこの判断をしたのか」を追跡可能にします。'
        },
        {
          title: 'エージェント間連携（マルチエージェント）',
          description: '複数のエージェントが協調動作し、複雑なタスクを段階的に処理。役割分担により、高度な業務を自動化します。'
        }
      ],
      en: [
        {
          title: 'Multi-Model Agent Architecture',
          description: 'Flexible agent architecture supporting multiple LLMs: OpenAI, Anthropic, Llama, and more. We combine optimal models tailored to your needs.'
        },
        {
          title: 'Business Logic Integration',
          description: 'Seamless integration with existing systems and APIs, embedding into business workflows. Agents directly interact with CRM, databases, and external services.'
        },
        {
          title: 'Decision Flow Visualization',
          description: 'Visualize agent decision processes for transparent operations. Make it possible to track "why this decision was made."'
        },
        {
          title: 'Multi-Agent Orchestration',
          description: 'Multiple agents collaborate to handle complex tasks step-by-step. Role division enables automation of sophisticated workflows.'
        }
      ]
    },
    technologies: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'AutoGen', 'LangGraph', 'Ollama', 'Hugging Face', 'Pinecone', 'Weaviate', 'Function Calling'],
    process: {
      ja: [
        { title: '要件定義', description: '複数回のヒアリングを通じて、お客様の真のニーズを抽出。「何をエージェントに任せるべきか」を明確にします。' },
        { title: '設計', description: 'エージェントアーキテクチャとワークフロー設計。ツール構成、環境設定、対話方式を詳細に定義します。' },
        { title: '開発', description: 'エージェント実装と既存システム統合。LLM の選定、プロンプト最適化、API 連携を実施します。' },
        { title: 'テスト', description: '動作検証と精度チューニング。実際の業務シナリオでエージェントをテストし、応答精度を向上させます。' },
        { title: '納品', description: 'デプロイメントと運用サポート。エージェントの稼働開始後も、継続的な改善をサポートします。' }
      ],
      en: [
        { title: 'Requirements Definition', description: 'Through multiple consultations, we extract your true needs. Clarify "what should be delegated to agents."' },
        { title: 'Design', description: 'Agent architecture and workflow design. Define tool configurations, environment settings, and interaction methods in detail.' },
        { title: 'Development', description: 'Agent implementation and system integration. LLM selection, prompt optimization, and API integration.' },
        { title: 'Testing', description: 'Validation and accuracy tuning. Test agents in real business scenarios and improve response accuracy.' },
        { title: 'Delivery', description: 'Deployment and operational support. Continuous improvement support even after agents go live.' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'blockchain-smart-contract',
    titleJa: 'ブロックチェーン・スマートコントラクト開発',
    titleEn: 'Blockchain & Smart Contract Development',
    subtitleJa: 'ブロックチェーンの信頼性を支える、セキュアで効率的なスマートコントラクト開発',
    subtitleEn: 'Secure, efficient smart contract development — the foundation of blockchain trust',
    descriptionJa: 'スマートコントラクトの設計・実装から、セキュリティ監査、ガス最適化まで一貫対応。信頼性の高いブロックチェーンアプリを構築します。',
    descriptionEn: 'End-to-end support: from smart contract design and implementation to security audits and gas optimization. Build reliable blockchain applications.',
    aboutJa: [
      'スマートコントラクトはブロックチェーンアプリケーションの心臓部です。一度デプロイすると変更不可能なため、設計段階でのセキュリティと効率性が極めて重要です。私たちは、Solidity による堅牢なスマートコントラクト開発から、包括的なセキュリティ監査、ガス最適化まで、エンドツーエンドでサポートします。',
      '需要に応じて、スマートコントラクトの構造設計、実装内容を決定し、テストネットで構築・検証。お客様による動作確認を経て、メインネットへデプロイします。ERC 標準準拠はもちろん、カスタムロジックの実装、複雑なトークノミクス設計にも対応可能です。',
      'セキュリティレビューでは、Reentrancy、Overflow、Access Control などの一般的な攻撃ベクトルを網羅的にチェック。さらに、ガス最適化により、トランザクションコストを最小化し、ユーザー体験を向上させます。'
    ],
    aboutEn: [
      'Smart contracts are the heart of blockchain applications. Once deployed, they are immutable — making security and efficiency at the design stage absolutely critical. We provide end-to-end support: from robust Solidity development to comprehensive security audits and gas optimization.',
      'Based on requirements, we design contract structures and implementation details, then build and verify on testnets. After client validation, we deploy to mainnet. We handle ERC standard compliance, custom logic implementation, and complex tokenomics design.',
      'Our security reviews comprehensively check common attack vectors: Reentrancy, Overflow, Access Control, and more. Additionally, gas optimization minimizes transaction costs and improves user experience.'
    ],
    features: {
      ja: [
        {
          title: 'Solidity 開発',
          description: 'エンタープライズグレードのスマートコントラクトを設計・実装。ERC 標準準拠、カスタムロジック対応、複雑なビジネスルールの実装が可能です。'
        },
        {
          title: 'セキュリティ監査',
          description: '包括的な脆弱性診断。Reentrancy、Overflow、Access Control などの一般的な攻撃ベクトルをカバーし、安全性を担保します。'
        },
        {
          title: 'ガス最適化',
          description: 'トランザクションコストを最小化。ストレージ最適化、バッチ処理、効率的なデータ構造設計により、ユーザー負担を軽減します。'
        },
        {
          title: 'テストネット検証',
          description: 'メインネットデプロイ前に、テストネット環境で徹底的な動作検証。想定外の挙動を事前に発見し、安全な本番移行を実現します。'
        }
      ],
      en: [
        {
          title: 'Solidity Development',
          description: 'Design and implement enterprise-grade smart contracts. ERC standard compliance, custom logic support, and implementation of complex business rules.'
        },
        {
          title: 'Security Audits',
          description: 'Comprehensive vulnerability assessments. Cover common attack vectors like Reentrancy, Overflow, and Access Control to ensure safety.'
        },
        {
          title: 'Gas Optimization',
          description: 'Minimize transaction costs. Storage optimization, batch processing, and efficient data structure design reduce user burden.'
        },
        {
          title: 'Testnet Validation',
          description: 'Thorough validation in testnet environments before mainnet deployment. Discover unexpected behavior in advance and ensure safe production rollout.'
        }
      ]
    },
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'Ethers.js', 'Web3.js', 'Ethereum', 'Polygon', 'Slither', 'Mythril', 'Tenderly', 'Remix'],
    process: {
      ja: [
        { title: '要件定義', description: '初回コンサルテーションとスコープ定義。ブロックチェーン上で実現したい機能を明確にします。' },
        { title: '設計', description: 'スマートコントラクトのアーキテクチャ計画と仕様策定。セキュリティとガス効率を両立させた設計を行います。' },
        { title: '開発', description: 'Solidity による実装と反復開発。テスト駆動開発により、品質を保ちながら開発を進めます。' },
        { title: 'テスト', description: 'テストネットでの QA、セキュリティレビュー、最適化。お客様による動作確認も実施します。' },
        { title: '納品', description: 'メインネットへのデプロイメントとドキュメンテーション。運用開始後のサポートも提供します。' }
      ],
      en: [
        { title: 'Requirements Definition', description: 'Initial consultation and scope definition. Clarify the functions you want to realize on-chain.' },
        { title: 'Design', description: 'Smart contract architecture planning and specification. Design that balances security and gas efficiency.' },
        { title: 'Development', description: 'Implementation in Solidity with iterative development. Test-driven development maintains quality throughout.' },
        { title: 'Testing', description: 'Testnet QA, security review, and optimization. Client validation is also conducted.' },
        { title: 'Delivery', description: 'Mainnet deployment and documentation. Operational support is also provided after launch.' }
      ]
    },
    category: 'web3'
  },
  {
    id: 'application-development',
    titleJa: 'アプリケーション（Web3.0/AI）開発',
    titleEn: 'Application Development (Web3.0/AI)',
    subtitleJa: 'AI と Web3.0 を融合した、次世代のアプリケーション体験',
    subtitleEn: 'Next-generation application experiences fusing AI and Web3.0',
    descriptionJa: 'NFT、DApps、RAG、画像生成など、AI と Web3.0 を融合した革新的なアプリケーションを開発します。フルスタック対応で、アイデアを形にします。',
    descriptionEn: 'Develop innovative applications that fuse AI and Web3.0: NFTs, DApps, RAG, image generation, and more. Full-stack support to bring your ideas to life.',
    aboutJa: [
      'お客様の目標に応じて、最前線の技術動向を踏まえた最適な実装方針を提案します。NFT コレクション、分散型アプリケーション（DApps）、RAG による社内ナレッジ活用、画像生成ツール、音声アシスタントなど、幅広いユースケースに対応可能です。',
      'フロントエンド（React/Next.js）、バックエンド（スマートコントラクト・API）、インフラ構築まで、フルスタックで提供します。ウォレット連携（MetaMask、WalletConnect）、トランザクション設計、トークノミクス最適化、AI モデルのファインチューニングまで対応。アーキテクチャ設計から実装、デプロイまで、すべてを一貫してサポートします。',
      'ユーザー体験を重視した、実用的なアプリケーションを提供します。技術のための技術ではなく、実際に使われ、成果を生み出すプロダクトを追求します。'
    ],
    aboutEn: [
      'Based on your goals, we propose optimal implementation strategies informed by the latest technological trends. We support a wide range of use cases: NFT collections, decentralized applications (DApps), RAG-powered internal knowledge systems, image generation tools, voice assistants, and more.',
      'We provide full-stack delivery: frontend (React/Next.js), backend (smart contracts & APIs), and infrastructure setup. We handle wallet integration (MetaMask, WalletConnect), transaction design, tokenomics optimization, and AI model fine-tuning. Consistent support from architecture design through implementation to deployment.',
      'We deliver practical applications with a focus on user experience. Not technology for technology\'s sake — we pursue products that are actually used and generate real results.'
    ],
    features: {
      ja: [
        {
          title: 'NFT / DApps 開発',
          description: 'NFT コレクションの企画からスマートコントラクト開発、ミントサイト構築まで。React/Next.js による使いやすいフロントエンドと、セキュアなスマートコントラクトを提供します。'
        },
        {
          title: 'RAG / AI アプリケーション',
          description: '社内文書やナレッジベースを活用した AI 検索・生成システムを構築。画像生成、音声処理、マルチモーダル AI にも対応します。'
        },
        {
          title: 'ウォレット連携・トランザクション設計',
          description: 'MetaMask、WalletConnect 等のウォレット統合とトランザクション UX 最適化。ユーザーがストレスなく Web3.0 アプリを使える体験を実現します。'
        },
        {
          title: 'フルスタック開発',
          description: 'フロントエンド、バックエンド、インフラまで、すべてを一貫して開発。分断のないスムーズな開発体験を提供します。'
        }
      ],
      en: [
        {
          title: 'NFT / DApps Development',
          description: 'From NFT collection planning to smart contract development and minting site creation. User-friendly frontend with React/Next.js and secure smart contracts.'
        },
        {
          title: 'RAG / AI Applications',
          description: 'Build AI search and generation systems leveraging internal documents and knowledge bases. Also supports image generation, voice processing, and multimodal AI.'
        },
        {
          title: 'Wallet Integration & Transaction Design',
          description: 'Wallet integration (MetaMask, WalletConnect) and transaction UX optimization. Create experiences where users can use Web3.0 apps without friction.'
        },
        {
          title: 'Full-Stack Development',
          description: 'Develop everything end-to-end: frontend, backend, and infrastructure. Provide a seamless development experience with no gaps.'
        }
      ]
    },
    technologies: ['React', 'Next.js', 'TypeScript', 'Solidity', 'Ethereum', 'Polygon', 'Ethers.js', 'Web3.js', 'IPFS', 'OpenAI API', 'Stable Diffusion', 'Whisper', 'LangChain', 'FastAPI'],
    process: {
      ja: [
        { title: '要件定義', description: 'ユースケース分析とアプリケーション要件策定。実現したい体験を明確にします。' },
        { title: '設計', description: 'UI/UX 設計、AI モデル選定、スマートコントラクト設計。技術選定と詳細仕様を決定します。' },
        { title: '開発', description: 'フロントエンド、バックエンド、スマートコントラクトの実装。反復開発により、柔軟に仕様調整を行います。' },
        { title: 'テスト', description: '精度検証、パフォーマンスチューニング、セキュリティレビュー。本番環境での安定稼働を保証します。' },
        { title: '納品', description: 'デプロイメントとドキュメント提供。運用開始後のサポートも実施します。' }
      ],
      en: [
        { title: 'Requirements Definition', description: 'Use case analysis and application requirements definition. Clarify the experience you want to create.' },
        { title: 'Design', description: 'UI/UX design, AI model selection, smart contract design. Determine technology choices and detailed specifications.' },
        { title: 'Development', description: 'Frontend, backend, and smart contract implementation. Iterative development allows flexible specification adjustments.' },
        { title: 'Testing', description: 'Accuracy validation, performance tuning, and security review. Ensure stable operation in production.' },
        { title: 'Delivery', description: 'Deployment and documentation delivery. Post-launch operational support is also provided.' }
      ]
    },
    category: 'web3'
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
