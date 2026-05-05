import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getLanguage } from '@/lib/i18n';
import Button from '@/components/ui/Button';
import { getServiceById, services } from '@/data/services';
import styles from '@/styles/marketing.module.css';

const pageContent = {
  'ai-workflow': {
    hero: {
      eyebrow: 'AI Workflow Design & Development',
      jaTitle: '「属人」のノウハウを、組織の「資産」に',
      enTitle: 'Turn tacit know-how into organizational assets',
      jaSubtitle: 'Nebula Infinity は、担当者依存の業務をそのまま自動化するのではなく、判断基準・手順・レビューの流れを整理し、AI と人が運用できるワークフローとして設計・開発します。',
      enSubtitle: 'Nebula Infinity does not simply automate a person\'s work as-is. We structure decision logic, steps, and review paths into workflows that people and AI can operate together.',
      chipsJa: ['属人化の解消', 'ナレッジの資産化', '再現性のある運用'],
      chipsEn: ['Reduce people-dependence', 'Assetize know-how', 'Create repeatable operations'],
    },
    sectionA: {
      titleJa: 'AI 導入前に整理すべき、現場の3つの症状',
      titleEn: 'Three operational symptoms to solve before AI can stick',
      cardsJa: [
        ['判断が人に閉じている', '経験者にしか分からない基準が多く、再現しづらい。'],
        ['引き継ぎコストが高い', '手順はあっても、実際の勘所が共有されていない。'],
        ['ツールを入れても定着しない', '役割分担やレビュー導線が設計されていない。'],
      ],
      cardsEn: [
        ['Decisions live inside individuals', 'Critical criteria exist only in experienced operators.'],
        ['Handoffs are expensive', 'There may be steps, but not the real judgment behind them.'],
        ['Tools never become operations', 'Roles, review paths, and adoption flow were never designed.'],
      ],
    },
    transformation: {
      eyebrow: 'Assetization model',
      titleJa: '属人のノウハウを、組織の資産に。',
      titleEn: 'Turn individual know-how into organizational assets',
      subtitleJa: 'AI導入が止まる理由の多くは、技術そのものではなく、判断基準や業務知識が人に閉じていることにあります。Nebula Infinityは、その知見を整理し、AIと人が再現性をもって動ける仕組みに変えていきます。',
      subtitleEn: 'AI projects often stall not because of the technology itself, but because decision criteria and operational knowledge stay inside individuals. Nebula Infinity organizes that knowledge and turns it into systems where AI and people can operate reproducibly.',
      columnsJa: [
        ['Current state', ['担当者ごとに判断がばらつく', '引き継ぎに時間がかかる', 'AIを入れても運用に乗らない']],
        ['System design', ['判断基準と手順を可視化する', 'AIと人の役割分担を設計する', 'レビュー導線と改善ログを残す']],
        ['Business outcome', ['再現性のある実務フローになる', '組織で引き継げる資産になる', '継続的に改善できる運用になる']],
      ],
      columnsEn: [
        ['Current state', ['Decisions vary by operator', 'Handoffs take too long', 'AI does not stick in operations']],
        ['System design', ['Make decision rules and procedures visible', 'Design roles for AI and people', 'Keep review paths and improvement logs']],
        ['Business outcome', ['Repeatable operational flow', 'Transferable organizational asset', 'Continuously improvable operation']],
      ],
    },
    categories: {
      titleJa: '対象は、特定のユースケースに限りません',
      titleEn: 'The capability is broader than the current public examples',
      subtitleJa: 'マルチエージェント開発やプロダクトリサーチは代表例です。実際には、知識・判断・レビューが絡むさまざまな業務へ展開できます。',
      subtitleEn: 'Multi-agent development and product research are representative examples only. The same capability applies across many knowledge-heavy workflows.',
      itemsJa: [
        ['Knowledge Operations', '社内ナレッジの検索・要約・更新フロー'],
        ['Product Research', '市場・競合・顧客情報の収集と要点整理'],
        ['Document Operations', '文書確認、分類、抽出、要約、次アクション整理'],
        ['Support Operations', '問い合わせ一次整理、回答候補生成、エスカレーション判断'],
        ['Internal Operations', '申請、チェック、社内連携、報告フローの整理'],
        ['Development Workflow', '要件、設計、実装、レビューの協調フロー'],
      ],
      itemsEn: [
        ['Knowledge Operations', 'Search, summarize, and update internal knowledge flows'],
        ['Product Research', 'Collect, synthesize, and hand off market, competitor, and customer input'],
        ['Document Operations', 'Review, classify, extract, summarize, and route documents'],
        ['Support Operations', 'Triage inquiries, generate responses, and decide escalation'],
        ['Internal Operations', 'Organize requests, checks, coordination, and reporting flows'],
        ['Development Workflow', 'Coordinate requirements, design, implementation, and review'],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が設計・開発するもの',
      titleEn: 'What Nebula Infinity designs and builds',
      itemsJa: [
        ['現行業務の整理', '関係者、判断、例外、入力・出力を構造化します。'],
        ['AIワークフロー設計', 'AI と人の役割分担、レビュー位置、連携仕様を定義します。'],
        ['実装・接続', '既存システムやツールとつながる形で実装します。'],
        ['運用定着支援', '引き継ぎ、改善観点、ログの見方まで整えます。'],
      ],
      itemsEn: [
        ['Current-state mapping', 'We structure stakeholders, decisions, exceptions, inputs, and outputs.'],
        ['Workflow architecture', 'We define human-AI roles, review points, and integration behavior.'],
        ['Implementation and integration', 'We build the workflow so it connects to existing systems and tools.'],
        ['Operational adoption', 'We support handoff, improvement criteria, and how to read the logs.'],
      ],
    },
    proof: {
      eyebrow: 'Representative examples',
      titleJa: '現在公開している代表例',
      titleEn: 'Representative examples currently shown publicly',
      itemsJa: [
        ['マルチエージェント開発ワークフロー', '要件整理、設計、実装、テストの役割分担を定義し、レビューしながら進める開発フローの設計例。', ['役割分担', 'レビューゲート', '再利用ルール']],
        ['プロダクトリサーチワークフロー', '市場・競合・ユーザー情報を収集し、比較と要点化を経て意思決定に渡すリサーチフローの設計例。', ['情報収集', '要点整理', '意思決定入力']],
      ],
      itemsEn: [
        ['Multi-agent development workflow', 'A workflow design example that allocates requirements, design, implementation, and testing roles with explicit review paths.', ['Role allocation', 'Review gates', 'Reusable rules']],
        ['Product research workflow', 'A workflow design example for collecting market, competitor, and user inputs, synthesizing them, and handing them into decision-making.', ['Collection', 'Synthesis', 'Decision input']],
      ],
      noteJa: 'これらは代表例であり、AI Workflow の提供範囲を限定するものではありません。',
      noteEn: 'These are representative examples only and do not define the full boundary of the AI Workflow service.',
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['現場を整理する', 'ワークフローを設計する', '実装して検証する', '運用へ引き渡す'],
      en: ['Clarify operations', 'Design the workflow', 'Implement and validate', 'Hand off into operations'],
    },
    cta: {
      jaTitle: '属人化した業務を、どこから整理すべきか一緒に見極めます',
      enTitle: 'We can help identify where to start with people-dependent work',
      jaBody: 'まだ課題が曖昧でも問題ありません。現場で何が止まっているか、どこに判断が集中しているかから整理します。',
      enBody: 'You do not need a polished brief. We can start from where work gets stuck and where judgment is concentrated today.',
    },
  },
  'ai-application': {
    hero: {
      eyebrow: 'AI Application Design & Development',
      jaTitle: 'AIを、使われるアプリケーションへ',
      enTitle: 'Turn AI into applications people actually use',
      jaSubtitle: 'Nebula Infinity は、AI の機能実装だけではなく、体験設計、データ連携、業務との接続まで含めて、現場で使われるアプリケーションとして設計・開発します。',
      enSubtitle: 'Nebula Infinity goes beyond AI feature implementation. We design and build applications that people actually use by connecting experience design, data, and operational context.',
      chipsJa: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
      chipsEn: ['Customer-facing products', 'Internal tools', 'RAG / Multimodal / Realtime'],
    },
    sectionA: {
      titleJa: 'こんなAIアプリケーションに向いています',
      titleEn: 'Typical application shapes we support',
      cardsJa: [
        ['顧客向けAIサービス', '相談、検索、提案、ガイドを提供するプロダクト'],
        ['社内業務ツール', '業務判断や情報整理を支援する内部アプリケーション'],
        ['AIコパイロット', '専門業務に沿って回答・提案・生成を行う支援体験'],
        ['ナレッジ活用アプリ', '社内文書や蓄積知識を検索・要約・再利用する仕組み'],
      ],
      cardsEn: [
        ['Customer AI services', 'Products that guide, answer, search, or recommend for end users'],
        ['Internal operation tools', 'Applications that support judgment and information handling inside the business'],
        ['AI copilots', 'Guided experiences that answer, generate, and recommend around domain-specific work'],
        ['Knowledge applications', 'Systems that search, summarize, and reuse internal documents and know-how'],
      ],
    },
    deliverables: {
      titleJa: 'Nebula Infinity が担う設計・開発範囲',
      titleEn: 'What Nebula Infinity takes responsibility for',
      itemsJa: [
        ['体験設計', 'ユーザーが迷わず価値に到達できるUI / UXを設計します。'],
        ['AI機能設計', '検索、生成、要約、判定、推薦などの体験を要件に合わせて構成します。'],
        ['データ連携', '社内データ、外部API、既存システムと接続します。'],
        ['実装', 'フロントエンド、バックエンド、モデル連携まで一体で構築します。'],
        ['運用設計', '管理画面、改善サイクル、ログの見方まで含めて整えます。'],
      ],
      itemsEn: [
        ['Experience design', 'We design UI and UX that make the value easy to reach.'],
        ['AI feature design', 'We shape retrieval, generation, summarization, classification, and recommendation around the goal.'],
        ['Data integration', 'We connect internal data, external APIs, and existing systems.'],
        ['Implementation', 'We build frontend, backend, and model integration as one delivery flow.'],
        ['Operational design', 'We include admin surfaces, logging, and the improvement loop.'],
      ],
    },
    proof: {
      eyebrow: 'Proof',
      titleJa: '代表実績で見る、AI Application の実装力',
      titleEn: 'Proof of AI application delivery',
      noteJa: 'Japan Life Navi と Rigel は、Nebula Infinity が AI アプリケーションを設計・開発し、実用レベルまで形にできることを示す代表例です。',
      noteEn: 'Japan Life Navi and Rigel are the clearest proof that Nebula Infinity can design and deliver AI applications at practical quality.',
      itemsJa: [
        ['Japan Life Navi', '在日外国人向け生活支援アプリ。多言語コンテンツ、領域特化AI、リアルタイム対話、画像分析を一つの体験として実装。', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'AI記帳SaaS。業務知識、制度対応、OCR、UX、バックエンド品質まで含めて成立させたプロダクト。', ['33,000+ LOC', '367 Tests', '18 API Endpoints', '6 Industries'], 'rigel'],
      ],
      itemsEn: [
        ['Japan Life Navi', 'A life-support app for foreign residents in Japan that brings multilingual content, domain-specific AI, real-time interaction, and image analysis into one experience.', ['336 Guides', '7 Languages', '6 AI Agents'], 'gaijin-life-navi'],
        ['Rigel', 'An AI bookkeeping SaaS that proves delivery across domain logic, regulation support, OCR, user experience, and backend quality.', ['33,000+ LOC', '367 Tests', '18 API Endpoints', '6 Industries'], 'rigel'],
      ],
    },
    categories: {
      titleJa: '実装できる主要モジュール',
      titleEn: 'Key capability modules we can implement',
      itemsJa: [
        ['RAG / ナレッジ検索', '必要なモジュールだけを組み合わせ、使われる体験として成立する形まで設計します。'],
        ['マルチモーダル入力', '画像・音声・テキストをまたぐ入力体験も設計します。'],
        ['リアルタイム応答', 'ストリーミングや即時反応が必要なUIを実装できます。'],
        ['管理・運用画面', '改善のための管理画面やオペレーションUIも含めて構築します。'],
        ['外部システム連携', '既存システムやAPIとの接続を前提に設計します。'],
      ],
      itemsEn: [
        ['RAG / knowledge retrieval', 'We combine only the modules that matter and shape them into an experience people will actually use.'],
        ['Multimodal input', 'We design across image, voice, and text input where the use case calls for it.'],
        ['Real-time response', 'We can implement streaming and low-latency application behavior.'],
        ['Admin and operations UI', 'We include management and operations interfaces for continuous improvement.'],
        ['External system integration', 'We design with existing systems and APIs in mind from the start.'],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['目的と利用者を定める', '体験とAI機能を設計する', '実装して検証する', '運用へつなぐ'],
      en: ['Define goal and users', 'Design the UX and AI behavior', 'Implement and validate', 'Connect to operations'],
    },
    cta: {
      jaTitle: 'AIアプリケーションの構想段階から相談できます',
      enTitle: 'You can engage us from the application concept stage',
      jaBody: '新規プロダクト、社内ツール、既存サービスへのAI機能追加まで、どの段階でもご相談ください。',
      enBody: 'From new products to internal tools and AI expansion inside an existing service, we can work with you at any stage.',
    },
  },
  'web3-blockchain': {
    hero: {
      eyebrow: 'Web3.0 / Blockchain Application Design & Development',
      jaTitle: 'Web3.0テクノロジーを、ビジネスへ',
      enTitle: 'Apply Web3.0 where it creates business utility',
      jaSubtitle: 'Nebula Infinity は、Web3.0 を投機的な文脈ではなく、顧客体験、会員基盤、証跡管理、デジタル資産の設計に活かせる技術として扱います。',
      enSubtitle: 'Nebula Infinity approaches Web3.0 not as speculative technology, but as infrastructure for customer experience, membership, traceability, and digital asset design.',
      chipsJa: ['Membership', 'Traceability', 'Digital Assets'],
      chipsEn: ['Membership', 'Traceability', 'Digital Assets'],
    },
    sectionA: {
      titleJa: 'Web3.0 が効くのは、こんな要件です',
      titleEn: 'When Web3.0 is the right fit',
      cardsJa: [
        ['会員や特典の真正性を高めたい', '発行履歴や保有状態を明確に扱いたい。'],
        ['ポイントやクーポンを再設計したい', '顧客との関係性を継続的に設計したい。'],
        ['証跡や透明性を価値にしたい', '履歴管理や検証可能性そのものが事業価値になる。'],
      ],
      cardsEn: [
        ['You need stronger authenticity for membership or benefits', 'Issuance and ownership need to be explicit and verifiable.'],
        ['You want to redesign loyalty mechanics', 'The relationship with the customer needs a stronger long-term structure.'],
        ['Traceability itself creates value', 'History and verification are part of the product or operational value.'],
      ],
    },
    categories: {
      titleJa: 'ビジネスに落とし込める代表ユースケース',
      titleEn: 'Representative business use cases',
      itemsJa: [
        ['Membership & Loyalty', '会員証、ポイント、特典、ランク設計'],
        ['Traceability', '履歴確認、証跡保持、真正性の担保'],
        ['Digital Asset Design', 'クーポン、チケット、保有権の設計'],
        ['Customer Experience', '顧客が自分の資産や特典を扱える体験'],
        ['Integration', '既存CRMやアプリとつながる運用設計'],
      ],
      itemsEn: [
        ['Membership & Loyalty', 'Cards, points, benefits, and tier logic'],
        ['Traceability', 'History, verification, and evidentiary records'],
        ['Digital Asset Design', 'Coupons, tickets, and ownership structures'],
        ['Customer Experience', 'User-facing control over benefits and digital assets'],
        ['Integration', 'Operational connection to existing CRM and applications'],
      ],
    },
    transformation: {
      eyebrow: 'How Nebula Infinity keeps Web3 business-ready',
      titleJa: 'Nebula Infinity が重視する、ビジネス前提のWeb3設計',
      titleEn: 'How Nebula Infinity keeps Web3 business-ready',
      subtitleJa: 'Web3 を目的化せず、業務や顧客体験で価値が出る位置に設計します。',
      subtitleEn: 'We do not make Web3 the goal itself. We use it where it creates operational or customer-facing value.',
      columnsJa: [
        ['What we build', ['業務・顧客体験に効く目的から設計する', '運用と既存サービス接続を前提にする', '台帳性や真正性を価値へ変える']],
        ['What we avoid', ['投機文脈を前提にしない', '暗号資産の値動き訴求に寄せない', 'Web3 を目的化しない']],
      ],
      columnsEn: [
        ['What we build', ['Start from operational or customer experience value', 'Design for operations and integration from day one', 'Turn traceability and authenticity into usable value']],
        ['What we avoid', ['Do not lead with speculative framing', 'Do not rely on token-price narratives', 'Do not make Web3 the goal itself']],
      ],
    },
    proof: {
      eyebrow: 'Proof',
      titleJa: '代表実績: Carina',
      titleEn: 'Representative proof: Carina',
      noteJa: 'Carina は、小売向け CRM に Web3.0 を接続し、ポイント、クーポン、会員証の扱いをブロックチェーン基盤で再設計した例です。Nebula Infinity の Web3.0 提供価値は、この1件に限定されず、会員基盤や証跡設計全般へ展開できます。',
      noteEn: 'Carina is an example of applying Web3.0 to retail CRM by redesigning points, coupons, and membership on top of blockchain infrastructure. Nebula Infinity\'s Web3.0 capability extends beyond this one project into broader membership and traceability design.',
      itemsJa: [['Carina', 'ポイント、クーポン、会員証をブロックチェーン基盤で扱う CRM。Web3.0 を顧客体験と運用設計に接続した実例です。', ['Retail CRM', 'Membership', 'Points & Coupons', 'Traceability'], 'carina']],
      itemsEn: [['Carina', 'A blockchain-backed CRM for points, coupons, and membership. It shows how Web3.0 can connect to customer experience and operations.', ['Retail CRM', 'Membership', 'Points & Coupons', 'Traceability'], 'carina']],
    },
    deliverables: {
      titleJa: '対応範囲',
      titleEn: 'Delivery scope',
      itemsJa: [
        ['要件整理', 'どこで Web3.0 を使うべきかを事業要件から整理します。'],
        ['チェーン / コントラクト設計', 'どの責務をオンチェーン化するかを設計します。'],
        ['UI / 体験設計', '利用者が迷わず扱える画面と導線を設計します。'],
        ['既存サービス連携', 'CRM、アプリ、会員基盤との接続を考慮します。'],
        ['運用設計', '発行、更新、監視、問い合わせ対応まで整えます。'],
      ],
      itemsEn: [
        ['Requirements framing', 'We determine where Web3.0 should create value in the business.'],
        ['Chain and contract architecture', 'We define what responsibility belongs on-chain.'],
        ['UX and interface design', 'We design screens and flows that users can actually operate.'],
        ['Existing-service integration', 'We account for CRM, apps, and membership systems from the start.'],
        ['Operational design', 'We plan issuance, updates, monitoring, and support handling.'],
      ],
    },
    steps: {
      titleJa: '進め方',
      titleEn: 'How engagements move',
      ja: ['要件を整理する', 'Web3.0の責務を定める', '実装して接続する', '運用へ載せる'],
      en: ['Clarify the requirement', 'Define the Web3 responsibility', 'Build and integrate', 'Put it into operations'],
    },
    cta: {
      jaTitle: 'Web3.0 を使うべきかどうかの整理から相談できます',
      enTitle: 'You can start by deciding whether Web3.0 should be used at all',
      jaBody: '会員基盤、証跡、デジタル資産の設計で迷っている段階でも問題ありません。事業要件から一緒に整理します。',
      enBody: 'If you are still evaluating membership, traceability, or digital asset design, we can structure the decision from business requirements first.',
    },
  },
} as const;

export async function generateStaticParams() {
  return services.map((service) => ({ serviceId: service.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; serviceId: string }> }) {
  const { lang: rawLang, serviceId } = await params;
  const lang = getLanguage(rawLang);
  const service = getServiceById(serviceId);
  if (!service) return {};
  return { title: `${service.officialLine} - Nebula Infinity`, description: service.body[lang] };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ lang: string; serviceId: string }> }) {
  const { lang: rawLang, serviceId } = await params;
  const lang = getLanguage(rawLang);
  const service = getServiceById(serviceId);
  const content = pageContent[serviceId as keyof typeof pageContent] as any;
  if (!service || !content) notFound();

  const isJa = lang === 'ja';
  const cards = isJa ? content.sectionA.cardsJa : content.sectionA.cardsEn;
  const categoryItems = isJa ? content.categories.itemsJa : content.categories.itemsEn;
  const deliverables = isJa ? content.deliverables.itemsJa : content.deliverables.itemsEn;
  const proofItems = isJa ? content.proof.itemsJa : content.proof.itemsEn;
  const stepItems: string[] = isJa ? [...content.steps.ja] : [...content.steps.en];
  const chips: string[] = isJa ? [...content.hero.chipsJa] : [...content.hero.chipsEn];

  return (
    <div className={styles.page}>
      <section className={styles.breadcrumb}><div className="container"><div className={styles.breadcrumbInner}><Link href={`/${lang}/`}>{lang === 'ja' ? 'ホーム' : 'Home'}</Link><span>/</span><Link href={`/${lang}/#services`}>{lang === 'ja' ? 'サービス' : 'Services'}</Link><span>/</span><span>{service.officialLine}</span></div></div></section>
      <section className={styles.hero}><div className="container"><div className={styles.heroSplit}><div className={styles.heroContent}><span className={styles.heroEyebrow}>{content.hero.eyebrow}</span><h1 className={styles.heroTitle}>{isJa ? content.hero.jaTitle : content.hero.enTitle}</h1><p className={styles.heroBody}>{isJa ? content.hero.jaSubtitle : content.hero.enSubtitle}</p><div className={styles.actionRow}><Link href={`/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.linkButton}><Button size="lg">{lang === 'ja' ? 'この領域を相談する' : 'Discuss this service'}</Button></Link><Link href={`/${lang}/projects`} className={styles.linkButton}><Button size="lg" variant="outline">{lang === 'ja' ? '代表例を見る' : 'View representative proof'}</Button></Link></div><div className={styles.chipRow}>{chips.map((chip) => <span key={chip} className={styles.chip}>{chip}</span>)}</div></div><div className={`${styles.card} ${styles.featuredCard}`}><span className={styles.columnLabel}>{service.officialLine}</span><h2 className={styles.cardTitle}>{service.title[lang]}</h2><p className={styles.cardBody}>{service.body[lang]}</p><ul className={styles.list}>{service.fitBullets[lang].map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul></div></div></div></section>
      <section className={styles.section}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.sectionA.titleJa : content.sectionA.titleEn}</h2></div><div className={cards.length === 4 ? styles.grid2 : styles.grid3}>{cards.map(([title, body]: [string, string]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div></div></section>
      {content.transformation ? <section className={`${styles.section} ${styles.sectionMuted}`}><div className="container"><div className={styles.sectionHeader}><span className={styles.sectionEyebrow}>{content.transformation.eyebrow}</span><h2 className={styles.sectionTitle}>{isJa ? content.transformation.titleJa : content.transformation.titleEn}</h2><p className={styles.sectionSubtitle}>{isJa ? content.transformation.subtitleJa : content.transformation.subtitleEn}</p></div><div className={(isJa ? content.transformation.columnsJa.length : content.transformation.columnsEn.length) === 2 ? styles.compareGrid : styles.transformationPanel}>{(isJa ? content.transformation.columnsJa : content.transformation.columnsEn).map(([label, bullets]: [string, readonly string[]]) => <div key={label} className={(isJa ? content.transformation.columnsJa.length : content.transformation.columnsEn.length) === 2 ? `${styles.card} ${styles.featuredCard}` : styles.transformationColumn}><span className={styles.columnLabel}>{label}</span><ul className={styles.list}>{(bullets as string[]).map((bullet) => <li key={bullet} className={styles.listItem}>{bullet}</li>)}</ul></div>)}</div></div></section> : null}
      <section className={styles.section}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.categories.titleJa : content.categories.titleEn}</h2>{'subtitleJa' in content.categories ? <p className={styles.sectionSubtitle}>{isJa ? content.categories.subtitleJa : content.categories.subtitleEn}</p> : null}</div><div className={styles.grid3}>{categoryItems.map(([title, body]: [string, string]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div></div></section>
      <section className={`${styles.section} ${styles.sectionMuted}`}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.deliverables.titleJa : content.deliverables.titleEn}</h2></div><div className={deliverables.length === 4 ? styles.grid2 : styles.grid3}>{deliverables.map(([title, body]: [string, string]) => <div key={title} className={styles.card}><h3 className={styles.cardTitle}>{title}</h3><p className={styles.cardBody}>{body}</p></div>)}</div></div></section>
      <section className={styles.section}><div className="container"><div className={styles.sectionHeader}><span className={styles.sectionEyebrow}>{content.proof.eyebrow}</span><h2 className={styles.sectionTitle}>{isJa ? content.proof.titleJa : content.proof.titleEn}</h2><p className={styles.sectionSubtitle}>{isJa ? content.proof.noteJa : content.proof.noteEn}</p></div><div className={styles.grid2}>{proofItems.map(([title, body, strip, slug]: [string, string, readonly string[], string?]) => <div key={title} className={`${styles.proofCard} ${styles.featuredCard}`}><h3 className={styles.proofTitle}>{title}</h3><p className={styles.proofSummary}>{body}</p><div className={styles.proofStrip}>{strip.map((item) => <span key={item} className={styles.proofPill}>{item}</span>)}</div><Link href={typeof slug === 'string' && slug in {'gaijin-life-navi':1,'rigel':1,'carina':1} ? `/${lang}/projects/${slug}` : `/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.ctaLink}>{lang === 'ja' ? (serviceId === 'ai-workflow' ? 'この類型を相談する' : '詳細を見る') : (serviceId === 'ai-workflow' ? 'Discuss this workflow type' : 'View case')}<span aria-hidden="true">→</span></Link></div>)}</div></div></section>
      <section className={`${styles.section} ${styles.sectionMuted}`}><div className="container"><div className={styles.sectionHeader}><h2 className={styles.sectionTitle}>{isJa ? content.steps.titleJa : content.steps.titleEn}</h2></div><div className={styles.stepRail}>{stepItems.map((step, index) => <div key={step} className={styles.stepItem}><div className={index === 1 || index === 2 ? `${styles.stepNode} ${styles.stepNodeAlt}` : styles.stepNode}>{index + 1}</div><h3 className={styles.stepHeading}>{step}</h3></div>)}</div></div></section>
      <section className={styles.section}><div className="container"><div className={styles.featuredBand}><div className={styles.bandCopy}><h2 className={styles.bandTitle}>{isJa ? content.cta.jaTitle : content.cta.enTitle}</h2><p className={styles.bandBody}>{isJa ? content.cta.jaBody : content.cta.enBody}</p></div><div className={styles.bandActions}><Link href={`/${lang}/contact?inquiry=${encodeURIComponent(service.officialLine)}`} className={styles.linkButton}><Button size="lg">{lang === 'ja' ? 'お問い合わせ' : 'Contact Us'}</Button></Link><Link href={`/${lang}/#services`} className={styles.linkButton}><Button size="lg" variant="outline">{lang === 'ja' ? 'サービス一覧へ' : 'Back to Services'}</Button></Link></div></div></div></section>
    </div>
  );
}
