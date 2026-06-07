export const services = [
  {
    id: 'ai-workflow',
    officialLine: 'AI Workflow Design & Development',
    title: {
      ja: '業務プロセスを、組織のアセットへ',
      en: 'Turn business processes into organizational assets',
    },
    body: {
      ja: '判断基準や手順を可視化し、AIと人が協働する効率的なAIワークフローを設計・実装します。',
      en: 'We visualize decision criteria and procedures, then design and implement efficient AI workflows where people and AI collaborate.',
    },
    fitBullets: {
      ja: [
        '社内ノウハウが担当者に偏っている',
        '既存業務プロセスの改善・効率化をしたい',
        'AIを活用した業務フローを社内に取り入れたい',
      ],
      en: [
        'Internal know-how is concentrated in specific people',
        'You want to improve and streamline existing business processes',
        'You want to introduce AI-enabled workflows into the organization',
      ],
    },
    proofLine: {
      ja: '例：企画・リサーチ業務、システム開発業務（要件定義、実装、検証）など',
      en: 'Examples: planning and research work, system development work such as requirements, implementation, and verification',
    },
    cta: {
      ja: 'AI Workflow サービス詳細を見る',
      en: 'View AI Workflow service',
    },
  },
  {
    id: 'ai-application',
    officialLine: 'AI Application Design & Development',
    title: {
      ja: 'AIを、使われるプロダクトへ',
      en: 'Turn AI into products people actually use',
    },
    body: {
      ja: '社内ツールから顧客向けサービスまで、AI機能を価値が伝わる体験として組み込みます。',
      en: 'From internal tools to customer-facing services, we embed AI capability as an experience whose value is clear to users.',
    },
    fitBullets: {
      ja: [
        'AI機能を活かした新規サービスを作りたい',
        '既存プロダクトにAI機能を組み込みたい',
        '業務ノウハウをプロダクトに落とし込みたい',
      ],
      en: [
        'You want to build a new service using AI capability',
        'You want to add AI capability to an existing product',
        'You want operational know-how to become product experience',
      ],
    },
    proofLine: {
      ja: '例：業務アシスタント、カスタマーサービス',
      en: 'Examples: operational assistants and customer service experiences',
    },
    cta: {
      ja: 'AI Application サービス詳細を見る',
      en: 'View AI Application service',
    },
  },
  {
    id: 'ai-driven-development',
    officialLine: 'AI-Driven Development',
    title: {
      ja: 'AI駆動開発で、超高速実装',
      en: 'Ultra-fast implementation with AI-driven development',
    },
    body: {
      ja: 'AI Agentと開発ワークフロー（設計→実装→テスト）を組み合わせ、超高速高品質な実装を実現します。',
      en: 'We combine AI agents with development workflows — design, implementation, and testing — to deliver fast, high-quality implementation.',
    },
    fitBullets: {
      ja: [
        'アイデア・発想を素早く動くデモやMVPにしたい',
        '開発の個人依存や手戻りを減らしたい',
        '即時実装・イテレーション型の開発をしたい',
      ],
      en: [
        'You want to turn an idea into a working demo or MVP quickly',
        'You want to reduce people-dependence and rework in the development process',
        'You want immediate implementation and iterative development',
      ],
    },
    proofLine: {
      ja: '例：AIエージェントを前提にした開発体制と品質ゲート',
      en: 'Example: agent-assisted delivery systems and quality gates',
    },
    cta: {
      ja: 'AI-Driven Development サービスを見る',
      en: 'View AI-Driven Development',
    },
  },
] as const;

export type Service = (typeof services)[number];
export type ServiceId = Service['id'];

export function getServiceById(id: string) {
  return services.find((service) => service.id === id);
}
