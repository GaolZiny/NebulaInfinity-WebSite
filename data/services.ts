import { ServiceLineSummary } from '@/types/services';

export const services: ServiceLineSummary[] = [
  {
    id: 'ai-workflow',
    officialLine: 'AI Workflow Design & Development',
    title: {
      ja: '属人業務を、再利用できる仕組みに',
      en: 'Turn people-dependent work into reusable systems',
    },
    body: {
      ja: '判断基準、手順、レビューの流れを整理し、AI と人が協働できるワークフローへ再設計します。',
      en: 'We structure decision rules, steps, and review paths into workflows where people and AI can operate together.',
    },
    fitBullets: {
      ja: [
        '社内ノウハウが担当者に偏っている',
        '反復業務と判断業務が混在している',
        '既存システムと連携しながら改善したい',
      ],
      en: [
        'Critical know-how lives inside individuals',
        'Operational work mixes repetition and judgment',
        'You need improvement without replacing everything',
      ],
    },
    proofLine: {
      ja: '代表例: マルチエージェント開発ワークフロー / プロダクトリサーチワークフロー',
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
      ja: '業務ツール、顧客向けアプリ、AIネイティブな新規プロダクトまで、価値が伝わる体験として設計・実装します。',
      en: 'We design and ship internal tools, customer-facing apps, and AI-native products that create clear user value.',
    },
    fitBullets: {
      ja: [
        'AI を活かした新規サービスを作りたい',
        '既存プロダクトにAI機能を組み込みたい',
        'RAG / マルチモーダル / リアルタイム処理が必要',
      ],
      en: [
        'You want a new AI-enabled service',
        'Your existing product needs meaningful AI capability',
        'RAG, multimodal, or streaming UX matters',
      ],
    },
    proofLine: {
      ja: '代表実績: Japan Life Navi / Rigel',
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
      ja: 'Web3.0テクノロジーを、ビジネスへ',
      en: 'Apply Web3.0 where it creates business utility',
    },
    body: {
      ja: '会員基盤、証跡管理、デジタル資産、顧客体験の設計を通じて、Web3.0 を事業で使える形に落とし込みます。',
      en: 'We design membership, traceability, digital asset, and customer experience systems that make Web3.0 useful in business.',
    },
    fitBullets: {
      ja: [
        'Web3 を業務・顧客体験に活かしたい',
        '台帳性や真正性を価値に変えたい',
        '既存サービスとつながる形で実装したい',
      ],
      en: [
        'You want Web3 in operations or customer experience',
        'Traceability and authenticity create value',
        'The solution must integrate with existing systems',
      ],
    },
    proofLine: {
      ja: '代表実績: Carina',
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
