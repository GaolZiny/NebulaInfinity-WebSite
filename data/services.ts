import { Service } from '@/types/services';

export const services: Service[] = [
  {
    id: 'ai-workflow-automation',
    titleJa: 'AI自動化ワークフロー構築',
    titleEn: 'AI Workflow Automation',
    subtitleJa: '手作業をAIで効率化、生産性を劇的に向上',
    subtitleEn: 'Replace manual work with AI — dramatically boost productivity',
    descriptionJa: '手作業のプロセスをAIで自動化。文書処理、データ抽出、レポート生成などを効率化。',
    descriptionEn: 'Automate manual processes with AI. Streamline document processing, data extraction, and report generation.',
    aboutJa: [
      'ドキュメント処理、データ抽出、レポート生成など、繰り返し行う手作業をAIで自動化。時間とコストを削減し、ヒューマンエラーを防ぎます。',
      '既存システム（CRM、ERP、データベース）との連携もスムーズ。API統合やカスタムワークフローエンジンで、あなたの業務フローに最適な自動化を実現します。',
      '導入から運用まで、一貫したサポートを提供します。'
    ],
    aboutEn: [
      'Automate repetitive manual tasks — document processing, data extraction, report generation — with AI. Reduce time and costs while eliminating human error.',
      'Seamless integration with existing systems (CRM, ERP, databases). API integration and custom workflow engines deliver automation perfectly tailored to your business.',
      'We provide consistent support from deployment through operations.'
    ],
    features: {
      ja: [
        {
          title: 'ドキュメント解析・分類自動化',
          description: 'AI-OCRと自然言語処理により、文書の自動解析・分類・データ抽出を実現。'
        },
        {
          title: 'データ抽出・構造化',
          description: '非構造化データから必要な情報を抽出し、構造化データとして活用可能に。'
        },
        {
          title: '既存システムとの連携',
          description: 'CRM、ERP、データベース等の既存システムとAPI連携し、ワークフローを統合。'
        },
        {
          title: 'プロセス監視・アラート',
          description: 'ワークフローの実行状況を監視し、異常検知時にアラート通知。'
        }
      ],
      en: [
        {
          title: 'Automated document analysis & classification',
          description: 'AI-OCR and NLP enable automatic document analysis, classification, and data extraction.'
        },
        {
          title: 'Data extraction & structuring',
          description: 'Extract necessary information from unstructured data and transform it into structured, actionable data.'
        },
        {
          title: 'Integration with existing systems',
          description: 'API integration with CRM, ERP, databases, and other existing systems to unify workflows.'
        },
        {
          title: 'Process monitoring & alerts',
          description: 'Monitor workflow execution and send alerts when anomalies are detected.'
        }
      ]
    },
    technologies: ['n8n', 'Zapier', 'Make', 'Apache Airflow', 'LangChain', 'OpenAI API', 'Document AI', 'Tesseract', 'Azure AI', 'Python', 'Node.js'],
    process: {
      ja: [
        { title: '要件定義', description: '現行業務フローの分析と自動化対象の特定' },
        { title: '設計', description: 'ワークフローエンジン選定とプロセス設計' },
        { title: '開発', description: 'ワークフロー実装とシステム統合' },
        { title: 'テスト', description: '動作検証と精度チューニング' },
        { title: '納品', description: 'デプロイメントと運用トレーニング' }
      ],
      en: [
        { title: 'Requirements', description: 'Analyze current workflows and identify automation targets' },
        { title: 'Design', description: 'Select workflow engine and design processes' },
        { title: 'Development', description: 'Workflow implementation and system integration' },
        { title: 'Testing', description: 'Validation and accuracy tuning' },
        { title: 'Delivery', description: 'Deployment and operational training' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'ai-agent-development',
    titleJa: 'AIエージェント開発',
    titleEn: 'AI Agent Development',
    subtitleJa: 'ビジネスプロセスを理解し、自律的に行動するAIエージェント',
    subtitleEn: 'AI agents that understand your business and act autonomously',
    descriptionJa: 'ビジネスプロセスを理解し、自律的に行動するAIエージェントを構築。OpenAI、Anthropic、オープンソースLLMに対応。',
    descriptionEn: 'Build AI agents that understand business processes and act autonomously. Supports OpenAI, Anthropic, and open-source LLMs.',
    aboutJa: [
      'AIエージェントは、単なるチャットボットではありません。業務フローを理解し、判断し、アクションを実行する、次世代の自動化ツールです。',
      'OpenAI、Anthropic Claude、Llamaなどのマルチモデルに対応。エージェント間連携（マルチエージェントシステム）により、複雑なタスクも段階的に処理します。',
      'カスタマーサポート、データ分析、コンテンツ生成など、あらゆるビジネスシーンで活躍するAIエージェントを構築します。'
    ],
    aboutEn: [
      'AI agents go far beyond chatbots. They understand workflows, make decisions, and execute actions — the next generation of automation.',
      'We support multi-model architectures: OpenAI, Anthropic Claude, Llama, and more. Multi-agent orchestration enables step-by-step handling of complex tasks.',
      'From customer support to data analysis and content generation, we build AI agents that excel in every business scenario.'
    ],
    features: {
      ja: [
        {
          title: 'マルチモデル対応エージェント設計',
          description: 'OpenAI、Anthropic、Llama等、複数のLLMに対応した柔軟なエージェントアーキテクチャ。'
        },
        {
          title: 'ビジネスロジック統合',
          description: '既存システムやAPIとシームレスに連携し、業務フローに組み込み可能。'
        },
        {
          title: '意思決定フローの可視化',
          description: 'エージェントの判断プロセスを可視化し、透明性の高い運用を実現。'
        },
        {
          title: 'エージェント間連携（マルチエージェント）',
          description: '複数のエージェントが協調動作し、複雑なタスクを段階的に処理。'
        }
      ],
      en: [
        {
          title: 'Multi-model agent architecture',
          description: 'Flexible agent architecture supporting multiple LLMs: OpenAI, Anthropic, Llama, and more.'
        },
        {
          title: 'Business logic integration',
          description: 'Seamless integration with existing systems and APIs, embedding into business workflows.'
        },
        {
          title: 'Decision flow visualization',
          description: 'Visualize agent decision processes for transparent operations.'
        },
        {
          title: 'Multi-agent orchestration',
          description: 'Multiple agents collaborate to handle complex tasks step-by-step.'
        }
      ]
    },
    technologies: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'AutoGen', 'LangGraph', 'Ollama', 'Hugging Face', 'Pinecone', 'Weaviate', 'Function Calling'],
    process: {
      ja: [
        { title: '要件定義', description: 'ビジネスプロセスの理解とエージェント要件の策定' },
        { title: '設計', description: 'エージェントアーキテクチャとワークフロー設計' },
        { title: '開発', description: 'エージェント実装と既存システム統合' },
        { title: 'テスト', description: '動作検証と精度チューニング' },
        { title: '納品', description: 'デプロイメントと運用サポート' }
      ],
      en: [
        { title: 'Requirements', description: 'Understanding business processes and defining agent requirements' },
        { title: 'Design', description: 'Agent architecture and workflow design' },
        { title: 'Development', description: 'Agent implementation and system integration' },
        { title: 'Testing', description: 'Validation and accuracy tuning' },
        { title: 'Delivery', description: 'Deployment and operational support' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'ai-applications',
    titleJa: 'AIアプリケーション開発',
    titleEn: 'AI Application Development',
    subtitleJa: 'RAG、画像生成、音声処理 — カスタムAIアプリを実現',
    subtitleEn: 'RAG, image generation, voice processing — custom AI apps tailored to you',
    descriptionJa: 'RAG、画像生成、音声処理など、AIを活用したカスタムアプリケーションを開発。',
    descriptionEn: 'Develop custom AI-powered applications: RAG, image generation, voice processing, and more.',
    aboutJa: [
      'AI技術を活用した独自アプリケーションを開発。RAG（検索拡張生成）による社内ナレッジ活用、画像生成ツール、音声アシスタントなど、幅広いユースケースに対応します。',
      'ファインチューニングやモデル最適化により、あなたのデータに特化した高精度AIを構築。API設計、フロントエンド開発、インフラ構築まで、フルスタックで提供します。'
    ],
    aboutEn: [
      'Develop custom applications powered by AI. From RAG (Retrieval-Augmented Generation) for internal knowledge systems to image generation tools and voice assistants — we cover a wide range of use cases.',
      'Fine-tuning and model optimization deliver high-precision AI tailored to your data. Full-stack delivery: API design, frontend development, and infrastructure setup.'
    ],
    features: {
      ja: [
        {
          title: 'RAG（検索拡張生成）システム',
          description: '社内文書やナレッジベースを活用したAI検索・生成システムを構築。'
        },
        {
          title: 'マルチモーダルAI（画像・音声・テキスト）',
          description: '画像認識、音声認識、テキスト処理を統合したマルチモーダルAIアプリケーション。'
        },
        {
          title: 'ファインチューニング・モデル最適化',
          description: '独自データを活用したモデルファインチューニングと精度向上。'
        },
        {
          title: 'API設計・デプロイメント',
          description: 'RESTful APIやGraphQL APIの設計・実装とクラウドデプロイメント。'
        }
      ],
      en: [
        {
          title: 'RAG (Retrieval-Augmented Generation) systems',
          description: 'Build AI search and generation systems leveraging internal documents and knowledge bases.'
        },
        {
          title: 'Multimodal AI (image, voice, text)',
          description: 'Multimodal AI applications integrating image recognition, voice recognition, and text processing.'
        },
        {
          title: 'Fine-tuning & model optimization',
          description: 'Model fine-tuning and accuracy improvement using your proprietary data.'
        },
        {
          title: 'API design & deployment',
          description: 'RESTful and GraphQL API design, implementation, and cloud deployment.'
        }
      ]
    },
    technologies: ['OpenAI API', 'Stable Diffusion', 'Whisper', 'ElevenLabs', 'ChromaDB', 'FAISS', 'Hugging Face', 'FastAPI', 'Next.js', 'LangChain', 'Gradio'],
    process: {
      ja: [
        { title: '要件定義', description: 'ユースケース分析とアプリケーション要件策定' },
        { title: '設計', description: 'AIモデル選定とアーキテクチャ設計' },
        { title: '開発', description: 'アプリケーション実装とAPI開発' },
        { title: 'テスト', description: '精度検証とパフォーマンスチューニング' },
        { title: '納品', description: 'デプロイメントとドキュメント提供' }
      ],
      en: [
        { title: 'Requirements', description: 'Use case analysis and application requirements definition' },
        { title: 'Design', description: 'AI model selection and architecture design' },
        { title: 'Development', description: 'Application implementation and API development' },
        { title: 'Testing', description: 'Accuracy validation and performance tuning' },
        { title: 'Delivery', description: 'Deployment and documentation delivery' }
      ]
    },
    category: 'ai'
  },
  {
    id: 'blockchain-development',
    titleJa: 'Web3.0 アプリケーション開発',
    titleEn: 'Web3.0 Application Development',
    subtitleJa: 'NFT、DApps、メタバース — Web3時代のアプリケーション',
    subtitleEn: 'NFTs, DApps, metaverse — applications for the Web3 era',
    descriptionJa: 'NFT、DApps、メタバース体験など、Web3.0時代のアプリケーションを設計・開発。ブロックチェーン技術を活用した次世代ソリューション。',
    descriptionEn: 'Design and develop Web3.0-era applications: NFT collections, DApps, metaverse experiences. Next-generation solutions powered by blockchain technology.',
    aboutJa: [
      'NFTコレクション、分散型アプリケーション（DApps）、メタバース体験など、Web3.0時代のアプリケーションを設計・開発します。',
      'ウォレット連携（MetaMask、WalletConnect）、トランザクション設計、トークノミクス最適化まで対応。フロントエンドはReact/Next.js、バックエンドはスマートコントラクトとAPIで構築します。',
      'ユーザー体験を重視した、実用的なWeb3アプリを提供します。'
    ],
    aboutEn: [
      'Design and develop Web3.0-era applications: NFT collections, decentralized applications (DApps), metaverse experiences, and more.',
      'We handle wallet integration (MetaMask, WalletConnect), transaction design, and tokenomics optimization. Frontend built with React/Next.js, backend powered by smart contracts and APIs.',
      'We deliver practical Web3 apps with a focus on user experience.'
    ],
    features: {
      ja: [
        {
          title: 'NFTコレクション企画・開発',
          description: 'NFTコレクションの企画からスマートコントラクト開発、ミントサイト構築まで。'
        },
        {
          title: 'DAppsフロントエンド開発',
          description: 'React/Next.jsによる高速で使いやすいDAppsフロントエンド開発。'
        },
        {
          title: 'ウォレット連携・トランザクション設計',
          description: 'MetaMask、WalletConnect等のウォレット統合とトランザクションUX最適化。'
        },
        {
          title: 'トークノミクス設計',
          description: 'プロジェクトに最適なトークンエコノミクスの設計とスマートコントラクト実装。'
        }
      ],
      en: [
        {
          title: 'NFT collection planning & development',
          description: 'From NFT collection planning to smart contract development and minting site creation.'
        },
        {
          title: 'DApps frontend development',
          description: 'Fast, user-friendly DApps frontend development with React/Next.js.'
        },
        {
          title: 'Wallet integration & transaction design',
          description: 'Wallet integration (MetaMask, WalletConnect) and transaction UX optimization.'
        },
        {
          title: 'Tokenomics design',
          description: 'Design optimal token economics for your project and implement smart contracts.'
        }
      ]
    },
    technologies: ['Ethereum', 'Polygon', 'Solana', 'React', 'Next.js', 'Ethers.js', 'Web3.js', 'IPFS', 'Arweave', 'The Graph', 'MetaMask', 'WalletConnect', 'Hardhat'],
    process: {
      ja: [
        { title: '要件定義', description: 'プロジェクト目標とアプリケーション要件の策定' },
        { title: '設計', description: 'UI/UX設計とスマートコントラクト設計' },
        { title: '開発', description: 'フロントエンドとスマートコントラクト開発' },
        { title: 'テスト', description: 'テストネットでの動作検証とセキュリティレビュー' },
        { title: '納品', description: 'メインネットデプロイメントと運用サポート' }
      ],
      en: [
        { title: 'Requirements', description: 'Define project goals and application requirements' },
        { title: 'Design', description: 'UI/UX design and smart contract design' },
        { title: 'Development', description: 'Frontend and smart contract development' },
        { title: 'Testing', description: 'Testnet validation and security review' },
        { title: 'Delivery', description: 'Mainnet deployment and operational support' }
      ]
    },
    category: 'web3'
  },
  {
    id: 'smart-contract',
    titleJa: 'スマートコントラクト設計・開発・監査',
    titleEn: 'Smart Contract Design, Development & Audit',
    subtitleJa: 'ブロックチェーンの信頼性を支える、セキュアで効率的なスマートコントラクト開発',
    subtitleEn: 'Secure, efficient smart contract development — the foundation of blockchain trust',
    descriptionJa: 'Solidityによるスマートコントラクト開発、セキュリティ監査、ガス最適化まで一貫して提供。ブロックチェーンの信頼性を支える基盤技術。',
    descriptionEn: 'End-to-end smart contract development with Solidity, security audits, and gas optimization. The foundation of blockchain trust.',
    aboutJa: [
      'スマートコントラクトはブロックチェーンアプリケーションの心臓部です。一度デプロイすると変更不可能なため、設計段階でのセキュリティと効率性が極めて重要です。',
      'Nebula Infinityは、Solidityによる堅牢なスマートコントラクト開発から、包括的なセキュリティ監査、ガス最適化まで、エンドツーエンドでサポートします。ERC標準準拠はもちろん、カスタムロジックの実装、複雑なトークノミクス設計にも対応。',
      'エンタープライズグレードの品質基準で、あなたのプロジェクトを成功に導きます。'
    ],
    aboutEn: [
      'Smart contracts are the heart of blockchain applications. Once deployed, they are immutable — making security and efficiency at the design stage absolutely critical.',
      'Nebula Infinity provides end-to-end support: from robust Solidity development to comprehensive security audits and gas optimization. We handle ERC standard compliance, custom logic implementation, and complex tokenomics design.',
      'With enterprise-grade quality standards, we guide your project to success.'
    ],
    features: {
      ja: [
        {
          title: 'Solidity開発',
          description: 'エンタープライズグレードのスマートコントラクトを設計・実装。ERC標準準拠、カスタムロジック対応。'
        },
        {
          title: 'セキュリティ監査',
          description: '包括的な脆弱性診断。Reentrancy、Overflow、Access Controlなどの一般的な攻撃ベクトルをカバー。'
        },
        {
          title: 'ガス最適化',
          description: 'トランザクションコストを最小化。ストレージ最適化、バッチ処理、効率的なデータ構造設計。'
        },
        {
          title: 'テスト自動化',
          description: 'Hardhat/Foundryによる包括的テストスイート。カバレッジ90%+目標。'
        }
      ],
      en: [
        {
          title: 'Solidity Development',
          description: 'Design and implement enterprise-grade smart contracts. ERC standard compliance and custom logic support.'
        },
        {
          title: 'Security Audits',
          description: 'Comprehensive vulnerability assessments. Cover common attack vectors: Reentrancy, Overflow, Access Control, and more.'
        },
        {
          title: 'Gas Optimization',
          description: 'Minimize transaction costs. Storage optimization, batch processing, and efficient data structure design.'
        },
        {
          title: 'Test Automation',
          description: 'Comprehensive test suites with Hardhat/Foundry. Target 90%+ code coverage.'
        }
      ]
    },
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'Ethers.js', 'Web3.js', 'Slither', 'Mythril', 'Tenderly', 'Remix', 'Truffle', 'Ganache'],
    process: {
      ja: [
        { title: '要件定義', description: '初回コンサルテーションとスコープ定義' },
        { title: '設計', description: 'アーキテクチャ計画と仕様策定' },
        { title: '開発', description: '実装と反復開発' },
        { title: 'テスト', description: 'QA、セキュリティレビュー、最適化' },
        { title: '納品', description: 'デプロイメントとドキュメンテーション' }
      ],
      en: [
        { title: 'Requirements', description: 'Initial consultation and scope definition' },
        { title: 'Design', description: 'Architecture planning and specification' },
        { title: 'Development', description: 'Implementation and iteration' },
        { title: 'Testing', description: 'QA, security review, optimization' },
        { title: 'Delivery', description: 'Deployment and documentation' }
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
