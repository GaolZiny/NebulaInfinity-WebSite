import { ServiceLineSummary } from '@/types/services';

export const services: ServiceLineSummary[] = [
  {
    id: 'ai-workflow',
    officialLine: 'AI Workflow Design & Development',
    title: {
      ja: '属人業務を、再現できるワークフローへ',
      en: 'Turn people-dependent work into reusable systems',
    },
    body: {
      ja: '判断基準や手順を整理し、AIと人が協働できる業務プロセスとして設計・実装します。',
      en: 'We structure decision rules, steps, and review paths into workflows where people and AI can operate together.',
    },
    fitBullets: {
      ja: [
        '社内ノウハウが担当者に偏っている',
        '判断を伴う反復業務を標準化したい',
        '既存の業務やツールと接続しながら改善したい',
      ],
      en: [
        'Critical know-how lives inside individuals',
        'Operational work mixes repetition and judgment',
        'You need improvement without replacing everything',
      ],
    },
    proofLine: {
      ja: '代表例：企画整理、開発プロセス、リサーチ業務など、判断と手順が繰り返される業務のワークフロー化',
      en: 'Representative examples: multi-agent development workflow / product research workflow',
    },
    cta: {
      ja: 'AI Workflowを見る',
      en: 'View AI Workflow',
    },
  },
  {
    id: 'ai-application',
    officialLine: 'AI Application Design & Development',
    title: {
      ja: 'AIを、使われるプロダクトへ',
      en: 'Build AI into products people actually use',
    },
    body: {
      ja: '社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。',
      en: 'We design and ship internal tools, customer-facing apps, and AI-native products that create clear user value.',
    },
    fitBullets: {
      ja: [
        'AIを活かした新規サービスを作りたい',
        '既存プロダクトにAI機能を組み込みたい',
        '業務知識をプロダクト体験に落とし込みたい',
      ],
      en: [
        'You want a new AI-enabled service',
        'Your existing product needs meaningful AI capability',
        'RAG, multimodal, or streaming UX matters',
      ],
    },
    proofLine: {
      ja: '代表実績：Japan Life Navi / Rigel',
      en: 'Representative proof: Japan Life Navi / Rigel',
    },
    cta: {
      ja: 'AI Applicationを見る',
      en: 'View AI Application',
    },
  },
  {
    id: 'web3-blockchain',
    officialLine: 'Web3.0 / Blockchain Application Design & Development',
    title: {
      ja: '改ざんされにくい記録を、事業の信頼基盤へ',
      en: 'Apply Web3.0 where it creates business utility',
    },
    body: {
      ja: 'ポイント、CRM、レビュー、契約、トレーサビリティなど、信頼が価値になる領域にWeb3.0を実装します。',
      en: 'We design membership, traceability, digital asset, and customer experience systems that make Web3.0 useful in business.',
    },
    fitBullets: {
      ja: [
        '顧客接点や会員基盤に信頼性を持たせたい',
        '履歴・評価・合意を改ざんされにくい形で残したい',
        '既存サービスと接続できるWeb3.0活用を検討したい',
      ],
      en: [
        'You want Web3 in operations or customer experience',
        'Traceability and authenticity create value',
        'The solution must integrate with existing systems',
      ],
    },
    proofLine: {
      ja: '代表実績：Carina',
      en: 'Representative proof: Carina',
    },
    cta: {
      ja: 'Web3.0 / Blockchainを見る',
      en: 'View Web3.0 / Blockchain',
    },
  },
];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}
