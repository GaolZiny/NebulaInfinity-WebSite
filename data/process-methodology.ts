export const processInquiry = 'AI実装の進め方';

export const processMeta = {
  ja: {
    title: 'AI実装の進め方 - Nebula Infinity',
    description:
      'Nebula Infinity の AI実装の進め方。チャットでの単発利用を、入力から成果物までの一つの業務フローに。どこをAIに任せ、どこを人が判断するかを定義し、6ステップで運用しながら改善し続けます。要件が決まっていなくても始められます。',
    breadcrumbHome: 'ホーム',
    breadcrumbCurrent: 'AI実装の進め方',
  },
  en: {
    title: 'How We Work - Nebula Infinity',
    description:
      "Nebula Infinity's approach to putting AI to work. We turn one-off chatbot use into a single workflow from input to output, define what AI handles and where people decide, and keep improving across six steps. You can start even without fixed requirements.",
    breadcrumbHome: 'Home',
    breadcrumbCurrent: 'How We Work',
  },
} as const;

export const processHero = {
  eyebrow: 'How We Work',
  titleJa: 'AIを「使っている」から、「流れに組み込む」へ。',
  titleEn: 'From using AI to building it into the flow.',
  leadJa: 'AIに聞いて、答えをコピペして、自分で資料に貼り直す——ChatGPTやNotebookLMは、まだ「その都度の道具」のままになっていませんか。Nebula Infinityは、その単発の使い方を、入力から成果物までの一つの業務フローに組み立てます。どこをAIに任せ、どこを人が判断するかを定義し、運用しながら改善し続けます。',
  leadEn: 'You ask AI, copy the answer, and paste it back into your own documents — are ChatGPT and NotebookLM still just "a tool you reach for each time"? Nebula Infinity turns that one-off use into a single workflow, from input to output. We define what AI handles and where people decide, then keep improving it while it runs.',
  chipsJa: ['入力から成果物まで一連で', 'AIと人の分担を定義', '要件は決まっていなくていい'],
  chipsEn: ['One flow, input to output', 'Define the AI-and-human split', 'No fixed requirements needed'],
  primaryCtaJa: '進め方について相談する',
  primaryCtaEn: 'Discuss how we would work',
  secondaryCtaJa: 'サービスを見る',
  secondaryCtaEn: 'View Services',
} as const;

type Item = {
  aJa: string; aEn: string; bJa: string; bEn: string; chips?: readonly string[];
};
type Block = {
  key: string;
  type: 'cards3' | 'timeline' | 'dimensions' | 'pitfalls' | 'faq';
  titleJa: string; titleEn: string;
  subtitleJa?: string; subtitleEn?: string;
  loopNoteJa?: string; loopNoteEn?: string;
  items: readonly Item[];
};

export const processBlocks: readonly Block[] = [
  {
    key: 'approach',
    type: 'cards3',
    titleJa: '私たちが、崩さない約束',
    titleEn: 'Commitments we never break',
    subtitleJa: '進め方の中身は案件ごとに変わります。けれど、何があっても私たちが手放さない約束があります。これがあるから、安心して任せていただけます。',
    subtitleEn: 'The details change with every project, but a few commitments never do — and they are why you can hand the work over with confidence.',
    items: [
      {
        aJa: 'バラバラを、一つの流れに',
        aEn: 'We turn scattered use into one flow',
        bJa: 'AIに聞いてコピペして終わり、にはしません。入力から成果物までを一つの業務フローにまとめ、どこを人が判断するかまで設計します。流れとして残るから、続けて活かせます。',
        bEn: "We don't stop at asking AI and pasting the answer back by hand. We bring it into a single workflow from input to output, design where people make the call — and because it stays as a flow, it keeps paying off.",
      },
      {
        aJa: '各ステップに、成果物を残す',
        aEn: 'Every step leaves a deliverable',
        bJa: 'どの工程でも、形に残る成果物を必ずお渡しします。だから各区切りで状況が見え、続けるか方向を変えるかを、その都度ご自身で判断できます。',
        bEn: 'Every step ends with a tangible deliverable. So at each break you can see where things stand and decide for yourself whether to go on or change course.',
      },
      {
        aJa: '測ってから、改善する',
        aEn: 'Measure first, then improve',
        bJa: '主観や勢いでは直しません。評価軸で効果を測り、事実にもとづいて分担やゲートを調整します。改善の根拠を、いつも数字と記録に置きます。',
        bEn: 'We never tune by gut or momentum. We measure with clear criteria, then adjust the split and the gates on facts — every change grounded in records.',
      },
    ],
  },
  {
    key: 'timeline',
    type: 'timeline',
    titleJa: '構想から運用まで、6つのステップ',
    titleEn: 'Six steps, from concept to operation',
    subtitleJa: '構想から運用まで、全体の流れはこう進みます。各ステップで、手元に何が残るか——受け取る成果物は具体的な「モノ」です。最後の「改善」は次の「ヒアリング」へつながり、運用しながら循環します。',
    subtitleEn: 'Here is the whole arc, from concept to operation. What ends up in your hands at each step — every deliverable is a concrete thing. The final Improve loops back to Listen, so the cycle keeps running in operation.',
    loopNoteJa: '↺ 「改善」は次の「ヒアリング」へ。運用しながら、続けて改善します',
    loopNoteEn: '↺ Improve loops back to Listen — we keep improving while it runs',
    items: [
      {
        aJa: 'ヒアリング',
        aEn: 'Listen',
        bJa: '構想や不満をインプットに、今のAI利用の実態を棚卸しし、課題と要件の仮説を立てます。要件は固まっていなくて構いません。',
        bEn: 'We take ideas or frustrations as input, take stock of how AI is actually used today, and form hypotheses on the issues — no fixed requirements needed.',
        chips: ['AI利用棚卸しシート', '課題・要件の仮説メモ', '対象範囲の合意'],
      },
      {
        aJa: '診断',
        aEn: 'Diagnose',
        bJa: '業務フローを工程に分解し、どこにAIが効き、どこで人の判断が要るかを見極めます。着手すべき工程と方向性を提示します。',
        bEn: 'We break the workflow into steps and judge where AI helps and where human judgment is needed, then propose where to start.',
        chips: ['工程マップ(AI適性ヒートマップ)', '着手優先順位リスト', '方向性の提案書'],
      },
      {
        aJa: '設計',
        aEn: 'Design',
        bJa: '入力から成果物までを一つの流れとして設計します。各工程の役割分担、判断基準、人が確認する区切りを定義します。',
        bEn: "We design input to output as one flow, defining each step's roles, the criteria for judgment, and the checkpoints where a person reviews.",
        chips: ['人とAIの協働フロー図', '役割分担・判断基準表', 'チェックポイント一覧'],
      },
      {
        aJa: '実施',
        aEn: 'Build',
        bJa: '私たちのAI駆動の開発手法で、まず動く形にします。設定ファイル群・専用アプリ・手順書など、現場に合う形態で実装します。',
        bEn: 'With our AI-driven build approach we reach a working form — config sets, a custom app, or manuals, whatever fits the field.',
        chips: ['動くMVP', '設定/アプリ/手順書一式', '証跡ログの仕組み'],
      },
      {
        aJa: '効果検証',
        aEn: 'Measure',
        bJa: 'AI時代に適した評価体系で、速さだけでなく判断の質や責任まで含め、狙った効果が出ているかを確かめます。',
        bEn: 'With an evaluation framework fit for the AI era, we check the intended effect — covering not just speed but the quality of judgment and accountability.',
        chips: ['評価レポート（7つの観点）', '判断品質チェック結果', '改善点リスト'],
      },
      {
        aJa: '改善',
        aEn: 'Improve',
        bJa: '運用で見つかった点を反映し、分担やゲートを調整します。運用で得た知見は次のサイクルへ引き継ぎ、改善を続けます。',
        bEn: 'We apply what operation reveals and tune the split and the gates. The know-how we gain carries into the next cycle, so improvement continues.',
        chips: ['改善反映版フロー', '運用ナレッジ集', '次サイクルの計画'],
      },
    ],
  },
  {
    key: 'dimensions',
    type: 'dimensions',
    titleJa: '組み込んだAIが、長く確かに回るために',
    titleEn: 'So the AI you build in keeps running, reliably',
    subtitleJa: '「速くなった」だけでは、その仕組みが続くかは分かりません。組み込んだAIが長く確かに回り続けるよう、7つの軸で見ます。前半4軸は「分担と判断」、後半3軸は「続く仕組み」です。',
    subtitleEn: '"Faster" alone does not tell you whether the setup will last. We look across seven measures so the AI you build in keeps running reliably. The first four cover the split and judgment; the last three, what keeps it going.',
    items: [
      {
        aJa: '目的との一致',
        aEn: 'Aligned with the goal',
        bJa: 'AIが最適化している指標は、業務の本当の目的と一致していますか。一部の速さのために、全体の質を落としていないかを確かめます。',
        bEn: 'Does the metric AI optimizes match the real business goal? We check that speeding up one part has not lowered overall quality.',
      },
      {
        aJa: '分担の境界',
        aEn: 'Boundary of roles',
        bJa: '各工程で誰が責任を持つかが、はっきりしていますか。AIの出力が提案か下書きか最終決定か、その位置づけを定義します。',
        bEn: "Is it clear who owns each step? We define whether AI's output is a suggestion, a draft, or the final decision.",
      },
      {
        aJa: '人の主体性',
        aEn: 'Human agency',
        bJa: '最終の判断は人が、整理や下調べはAIが——それぞれの得意を活かす形になっていますか。人が納得して決められる状態かを見ます。',
        bEn: 'Do people make the final call while AI handles organizing and groundwork — each to its strength? We check people can decide with confidence.',
      },
      {
        aJa: '信頼の見極め',
        aEn: 'Calibrated trust',
        bJa: 'AIは不確かさ・根拠・適用範囲を示していますか。どこからは専門家に上げるべきかが、自然と分かる設計かを確かめます。',
        bEn: 'Does AI show its uncertainty, evidence, and scope? We check the design makes clear when to bring in a specialist.',
      },
      {
        aJa: '負荷と能力',
        aEn: 'Load and capability',
        bJa: 'AIは無駄な手間を減らしていますか。あわせて、人の判断力を底上げし、本質的な仕事に集中できているかを見ます。',
        bEn: "Does AI cut wasted effort? We also check it lifts people's judgment and frees them for the work that matters.",
      },
      {
        aJa: '監査可能性',
        aEn: 'Auditability',
        bJa: '入力・出力・修正・承認・例外は記録に残っていますか。誰が何を判断したかを、後から説明できる状態かを確かめます。',
        bEn: 'Are inputs, outputs, edits, approvals, and exceptions logged? We check you can later explain who decided what.',
      },
      {
        aJa: '続く協働',
        aEn: 'Sustainable collaboration',
        bJa: '品質・速さ・リスク管理・現場の納得感は良くなっていますか。一過性でなく、長く続けられる形になっているかを見ます。',
        bEn: "Are quality, speed, risk control, and the team's sense of progress improving? We check it is built to last, not a one-off.",
      },
    ],
  },
  {
    key: 'pitfalls',
    type: 'pitfalls',
    titleJa: '「入れたのに使われない」を防ぐ',
    titleEn: 'Preventing "adopted but unused"',
    subtitleJa: 'AI導入がうまくいかない原因は、だいたい決まっています。私たちの進め方は、最初からそこを外さないように設計しています。',
    subtitleEn: 'AI rollouts stall for a few familiar reasons — our approach is built to avoid them from the start.',
    items: [
      {
        aJa: '道具だけ入れて、流れが変わらない',
        aEn: 'A tool drops in, the flow does not change',
        bJa: 'ツールを配っただけでは、現場の動き方は変わりません。設計の段階で、入力から成果物までの流れそのものを組み直します。',
        bEn: 'Handing out a tool does not change how the field works. In design we rebuild the flow itself, from input to output.',
      },
      {
        aJa: '分担が決まらず、誰も使わない',
        aEn: 'No clear split, so no one uses it',
        bJa: '「AIに任せていいのか」が曖昧だと、結局使われません。各工程の役割と判断基準を明文化し、迷いをなくします。',
        bEn: 'When "can I trust AI here?" stays vague, it goes unused. We write down each step\'s role and criteria to remove the hesitation.',
      },
      {
        aJa: '出力をそのまま使い、精度が安定しない',
        aEn: 'Output used as-is, accuracy wobbles',
        bJa: '出力をそのまま流すと、品質が安定しません。人が確認する区切りを流れに置き、危ない出力を手前で止めます。',
        bEn: 'Passing output straight through leaves quality uneven. We place human checkpoints in the flow to catch risky output before it moves on.',
      },
      {
        aJa: '効果が見えず、続かない',
        aEn: 'No visible effect, so it fades',
        bJa: '成果が測れないと、定着しません。何をもって成功とするかを最初に決め、運用しながら効果と改善点を見える化します。',
        bEn: 'If results cannot be measured, it fades. We agree up front on what success means, then make effect and improvements visible in operation.',
      },
    ],
  },
  {
    key: 'entry',
    type: 'cards3',
    titleJa: '初回相談で、何が起きるか',
    titleEn: 'What happens in the first session',
    subtitleJa: 'ここまで読んで、まだ要件が固まっていなくて大丈夫。初回相談では、持ち物が今あるものだけでも、進める材料まで一緒に作ります。',
    subtitleEn: 'Even if your requirements still are not fixed, that is fine. In the first session we build the material to move forward — with only what you have today.',
    items: [
      {
        aJa: '持ち物は、今あるものだけ',
        aEn: 'Bring only what you have',
        bJa: '要件定義書は不要です。構想のメモ、使っているExcel、現場で困っていること。そのどれか一つがあれば十分です。整える作業はこちらで引き取ります。',
        bEn: 'No spec document required. A rough idea, a spreadsheet you use, or a daily frustration — any one is enough. We take on the work of organizing it.',
      },
      {
        aJa: '聞くのは、流れと判断',
        aEn: 'We ask about flow and judgment',
        bJa: '誰が何を入力し、何を見て判断し、どこに渡すのか。一連の流れと、人が必ず決めるべき要所を一緒に洗い出します。技術の話は、その後です。',
        bEn: 'Who inputs what, what they look at to decide, where it goes next. We map the flow and find the points where a person must call it. Tech talk comes after.',
      },
      {
        aJa: '持ち帰るのは、最初の地図',
        aEn: 'You leave with a first map',
        bJa: '今の課題と狙う姿がひと目で分かる「地図」と、AIに任せられそうな工程の見立てをお渡しします。次に進むかは、それを見て判断できます。',
        bEn: "A one-glance map of today's issues and where you want to be, plus a first read on which steps AI could take. You decide whether to go further.",
      },
    ],
  },
  {
    key: 'faq',
    type: 'faq',
    titleJa: '商談の前に、よくいただく質問',
    titleEn: 'Questions we hear before a first meeting',
    subtitleJa: '費用感・期間・進め方など、ご相談前に気になる点をまとめました。ここにない点も、初回相談で遠慮なくお尋ねください。',
    subtitleEn: 'Cost, timeline, and approach — the things people wonder before reaching out. Anything not here, just ask in the first session.',
    items: [
      {
        aJa: '要件が決まっていなくても、依頼できますか。',
        aEn: 'Can we engage even without fixed requirements?',
        bJa: 'はい、歓迎します。構想や不満の段階からのご相談で構いません。要件を一緒に整理することが、私たちの進め方の出発点です。',
        bEn: 'Yes — we welcome it. Starting from an idea or a frustration and shaping the requirements together is the very starting point of our approach.',
      },
      {
        aJa: '社内にAIの知見がなくても大丈夫ですか。',
        aEn: 'What if we have no AI expertise in-house?',
        bJa: '問題ありません。前提知識は不要です。業務の進め方と判断の勘どころは皆さまが、AIの設計と実装は私たちが担います。',
        bEn: 'No problem — no prior knowledge needed. You bring how the work is done and where judgment matters; we handle the AI design and build.',
      },
      {
        aJa: '費用感は、どのくらいですか。',
        aEn: 'What sort of cost should we expect?',
        bJa: '対象範囲と成果物の形(設定・アプリ・手順書など)で変わります。初回相談で見立てをお伝えし、無理のない範囲から始められます。',
        bEn: 'It depends on scope and the form of delivery (config, app, or manuals). We share an estimate in the first session and can start at a manageable scale.',
      },
      {
        aJa: 'どのくらいの期間で形になりますか。',
        aEn: 'How long until something takes shape?',
        bJa: '規模により異なります。まずは小さな範囲で動く形を作り、効果を確かめながら段階的に広げていく進め方をおすすめしています。',
        bEn: 'It depends on scale. We recommend starting with a small working slice, confirming the effect, and expanding step by step from there.',
      },
      {
        aJa: '途中で止めたり、見直したりできますか。',
        aEn: 'Can we pause or rethink partway?',
        bJa: 'できます。ステップごとに成果物を残すため、各区切りで継続や方向転換を判断いただけます。一度に全部を決める必要はありません。',
        bEn: 'Yes. Because each step leaves a deliverable, you can decide at every break whether to continue or change course — no need to commit to it all at once.',
      },
      {
        aJa: 'どんな業務に向いていますか。',
        aEn: 'What kinds of work does this fit?',
        bJa: '法務・会計・コンサル・研究・人事など、判断・レビュー・連携が複雑な専門業務に幅広く適します。開発の領域に限りません。',
        bEn: 'Legal, accounting, consulting, research, HR and the like — any professional work where judgment, review, and handoffs get complex. Not limited to development.',
      },
    ],
  },
];
