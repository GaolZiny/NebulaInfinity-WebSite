import { Suspense } from 'react';
import { getLanguage, type Language } from '@/lib/i18n';
import ContactForm from '@/components/contact/ContactForm';
import { generateSEOMetadata } from '@/components/seo/SEO';
import styles from '@/styles/marketing.module.css';

const copy = {
  ja: {
    eyebrow: 'Contact',
    title: '要件が固まっていなくても、ご相談ください',
    subtitle: '現場課題、AIアプリケーション構想、AI-Driven Development施策の検討段階でも構いません。Nebula Infinity が、背景整理からご一緒します。',
    nextTitle: '送信後の流れ',
    faqEyebrow: 'FAQ',
    faqTitle: 'よくあるご質問',
    reassurance: 'Nebula Infinity は、相談内容をもとに最適な入口を整理します。AI Workflow、AI Application、AI-Driven Development のどれに近いか分からない状態でも問題ありません。',
  },
  en: {
    eyebrow: 'Contact',
    title: 'You can contact us before the requirements are fixed',
    subtitle: 'Whether you are dealing with an operational issue, shaping an AI application idea, or exploring an AI-Driven Development initiative, Nebula Infinity can help structure the next step with you.',
    nextTitle: 'What happens next',
    faqEyebrow: 'FAQ',
    faqTitle: 'Frequently asked questions',
    reassurance: 'Nebula Infinity will help organize the right entry point from your situation. It is fine if you do not yet know whether the issue is closer to AI Workflow, AI Application, or AI-Driven Development.',
  },
} as const;

const nextSteps = {
  ja: [
    { title: '内容確認', body: 'ご相談テーマと背景を確認します。' },
    { title: '初回返信', body: '通常 2 営業日以内にご返信します。' },
    { title: '整理ミーティング', body: '必要に応じて、課題と進め方を短く整理します。' },
    { title: '次の提案', body: '適したサービスラインと進め方をご提案します。' },
  ],
  en: [
    { title: 'Review', body: 'We review your theme and background.' },
    { title: 'Initial reply', body: 'We usually respond within 2 business days.' },
    { title: 'Scoping conversation', body: 'If needed, we organize the challenge and next step together.' },
    { title: 'Suggested path', body: 'We propose the best-fit service line and engagement path.' },
  ],
} as const;

const expectationCards = {
  ja: [
    { title: '返信目安', body: '通常 2 営業日以内' },
    { title: '対象テーマ', body: 'AI Workflow / AI Application / AI-Driven Development' },
    { title: '相談段階', body: '要件未整理でも可' },
  ],
  en: [
    { title: 'Response window', body: 'Usually within 2 business days' },
    { title: 'Themes covered', body: 'AI Workflow / AI Application / AI-Driven Development' },
    { title: 'Stage accepted', body: 'Even before requirements are fixed' },
  ],
} as const;

const faqs = {
  ja: [
    { question: '要件がまとまっていなくても相談できますか？', answer: 'はい。現状の課題や作りたい方向性の段階から整理できます。' },
    { question: 'どのサービスを選べばよいか分からないです。', answer: '背景をもとに、AI Workflow / AI Application / AI-Driven Development のどこから始めるのが適切か整理します。' },
    { question: 'オンラインで相談できますか？', answer: 'はい。初回の整理はオンライン前提で対応できます。' },
    { question: '非公開事例も相談時に見られますか？', answer: '内容に応じて、近い類型や守秘範囲に配慮した形で共有します。' },
  ],
  en: [
    { question: 'Can I reach out before the requirements are clear?', answer: 'Yes. We can start from the current issue or the rough direction of what you want to build.' },
    { question: 'I am not sure which service line fits.', answer: 'We can structure whether AI Workflow, AI Application, or AI-Driven Development is the right starting point.' },
    { question: 'Can the first conversation happen online?', answer: 'Yes. The initial scoping conversation can be handled online.' },
    { question: 'Can we discuss non-public examples?', answer: 'Yes. When relevant, we can share similar examples in a confidentiality-aware way.' },
  ],
} as const;

function FAQList({ lang }: { lang: Language }) {
  return (
    <div className={styles.faqList}>
      {faqs[lang].map((faq, index) => (
        <details key={faq.question} className={styles.faqItem} open={index === 0}>
          <summary className={styles.faqButton}>
            <span className={styles.faqQuestionText}>{faq.question}</span>
            <span className={styles.chevron} aria-hidden="true">⌄</span>
          </summary>
          <div className={styles.faqAnswer}>
            <p className={styles.faqAnswerText}>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];
  return generateSEOMetadata({ title: `${t.title} - Nebula Infinity`, description: t.subtitle, lang, path: '/contact' });
}

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  const t = copy[lang];

  return (
    <div className={styles.page}>
      <section className={`${styles.hero} ${styles.heroCompact}`}>
        <div className="container">
          <div className={`${styles.heroContent} ${styles.aiWorkflowHeroContent}`}>
            <span className={styles.heroEyebrow}>{t.eyebrow}</span>
            <h1 className={styles.pageTitle}>{t.title}</h1>
            <p className={styles.pageLead}>{t.subtitle}</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.formLayout}>
            <Suspense fallback={<div className={styles.card}>Loading form…</div>}>
              <ContactForm lang={lang} />
            </Suspense>
            <div className={styles.sidebarSection}>
              <div className={`${styles.card} ${styles.featuredCard}`}>
                <h2 className={styles.cardTitle}>{t.nextTitle}</h2>
                <div className={`${styles.stepRail} ${styles.stepRailCompact}`}>
                  {nextSteps[lang].map((step) => (
                    <div key={step.title} className={styles.stepItem}>
                      <h3 className={styles.stepHeading}>{step.title}</h3>
                      <p className={styles.stepText}>{step.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.grid3}>
                {expectationCards[lang].map((card) => (
                  <div key={card.title} className={styles.card}>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardBody}>{card.body}</p>
                  </div>
                ))}
              </div>
              <div className={styles.card}>
                <p className={styles.cardBody}>
                  {lang === 'ja'
                    ? '営業的な誇張ではなく、現状整理から始める前提でご案内します。'
                    : 'The first conversation starts from clarifying the current situation, not from forcing a sales script.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionMuted}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.faqEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.faqTitle}</h2>
          </div>
          <FAQList lang={lang} />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.reassuranceBand}>
            <p className={styles.reassuranceText}>{t.reassurance}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
