'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Language } from '@/lib/i18n';
import projectsData from '@/data/projects/projects.json';
import styles from '@/styles/marketing.module.css';

interface ProjectsExplorerProps {
  lang: Language;
}

type Filter = 'all' | 'ai-workflow' | 'ai-application' | 'web3-blockchain';

const labels = {
  ja: {
    filters: {
      all: 'すべて',
      'ai-workflow': 'AI Workflow',
      'ai-application': 'AI Application',
      'web3-blockchain': 'Web3.0 / Blockchain',
    },
    introTitle: '公開事例は一部です',
    introBody: '公開できる範囲の実績を厳選して掲載しています。ワークフロー系の事例は、守秘性の高い業務要件を含むため、代表例として構造化して紹介します。',
    workflowEyebrow: 'AI Workflow Design & Development',
    workflowTitle: '代表的なワークフロー資産化の例',
    workflowSubtitle: '現在の公開例は、AI Workflow の提供範囲を限定するものではありません。',
    aiEyebrow: 'AI Application Design & Development',
    aiTitle: 'AIアプリケーションの代表実績',
    aiSupport: 'AIの機能を実装するだけでなく、使われる体験として成立させた例として紹介します。',
    web3Eyebrow: 'Web3.0 / Blockchain Application Design & Development',
    web3Title: 'Web3.0 / Blockchain の代表実績',
    web3Support: 'Nebula Infinity の Web3.0 提供価値は、Carina だけに限定されません。会員基盤、証跡、デジタル資産設計全般に展開できます。',
    inquiryTitle: '非公開事例や近い業種の例は、ご相談時に共有します',
    inquiryBody: '公開情報だけでは判断しづらい場合は、想定業務や対象ユーザーに近い実績の見せ方でご案内します。',
    workflowCta: 'この類型を相談する',
    caseCta: '詳細を見る',
  },
  en: {
    filters: {
      all: 'All',
      'ai-workflow': 'AI Workflow',
      'ai-application': 'AI Application',
      'web3-blockchain': 'Web3.0 / Blockchain',
    },
    introTitle: 'Public proof is only part of the picture',
    introBody: 'We show a focused set of public proof. Workflow-oriented cases often involve sensitive operational logic, so they are presented here as structured representative examples.',
    workflowEyebrow: 'AI Workflow Design & Development',
    workflowTitle: 'Representative workflow assetization examples',
    workflowSubtitle: 'The current public examples do not define the boundary of the AI Workflow service.',
    aiEyebrow: 'AI Application Design & Development',
    aiTitle: 'Representative AI application cases',
    aiSupport: 'These cases show not only AI feature delivery, but product experiences that work as real applications.',
    web3Eyebrow: 'Web3.0 / Blockchain Application Design & Development',
    web3Title: 'Representative Web3.0 / Blockchain proof',
    web3Support: 'Nebula Infinity\'s Web3.0 capability extends beyond Carina into broader membership, traceability, and digital asset design.',
    inquiryTitle: 'More private or industry-specific examples can be shared during discovery',
    inquiryBody: 'If public proof is not enough to judge fit, we can share examples framed around similar operations, users, or business requirements.',
    workflowCta: 'Discuss this workflow type',
    caseCta: 'View case',
  },
} as const;

const workflowExamples = {
  ja: [
    {
      title: 'マルチエージェント開発ワークフロー',
      summary: '要件整理から設計、実装、テストまで、役割分担とレビューの流れを組み立てたワークフロー設計の代表例。',
      strip: ['Role design', 'Review gates', 'Reusable handoff'],
    },
    {
      title: 'プロダクトリサーチワークフロー',
      summary: '市場、競合、ユーザー情報を収集・比較・要約し、意思決定に渡す流れを設計した代表例。',
      strip: ['Collection', 'Synthesis', 'Decision input'],
    },
  ],
  en: [
    {
      title: 'Multi-agent development workflow',
      summary: 'A representative workflow design example covering role allocation and review flow across requirements, design, implementation, and testing.',
      strip: ['Role design', 'Review gates', 'Reusable handoff'],
    },
    {
      title: 'Product research workflow',
      summary: 'A representative example for collecting, comparing, and synthesizing market, competitor, and user inputs into decision-ready output.',
      strip: ['Collection', 'Synthesis', 'Decision input'],
    },
  ],
} as const;

export default function ProjectsExplorer({ lang }: ProjectsExplorerProps) {
  const t = labels[lang];
  const [filter, setFilter] = useState<Filter>('all');
  const featuredProjects = useMemo(() => projectsData.projects.filter((project) => project.featuredV1), []);
  const aiProjects = featuredProjects.filter((project) => project.serviceLine === 'ai-application');
  const web3Project = featuredProjects.find((project) => project.serviceLine === 'web3-blockchain');

  const showWorkflow = filter === 'all' || filter === 'ai-workflow';
  const showAi = filter === 'all' || filter === 'ai-application';
  const showWeb3 = filter === 'all' || filter === 'web3-blockchain';

  return (
    <div className={styles.sectionStack}>
      <div className={`${styles.card} ${styles.featuredCard}`}>
        <div className={styles.filterRow}>
          {(Object.entries(t.filters) as Array<[Filter, string]>).map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`${styles.filterButton} ${filter === value ? styles.filterButtonActive : ''}`}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>{t.introTitle}</h2>
        <p className={styles.cardBody}>{t.introBody}</p>
      </div>

      {showWorkflow ? (
        <section className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.workflowEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.workflowTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.workflowSubtitle}</p>
          </div>
          <div className={styles.grid2}>
            {workflowExamples[lang].map((example) => (
              <div key={example.title} className={`${styles.proofCard} ${styles.featuredCard}`}>
                <span className={styles.proofLabel}>{t.workflowEyebrow}</span>
                <h3 className={styles.proofTitle}>{example.title}</h3>
                <p className={styles.proofSummary}>{example.summary}</p>
                <div className={styles.proofStrip}>
                  {example.strip.map((item) => (
                    <span key={item} className={styles.proofPill}>{item}</span>
                  ))}
                </div>
                <Link href={`/${lang}/contact?inquiry=${encodeURIComponent('AI Workflow Design & Development')}`} className={styles.ctaLink}>
                  {t.workflowCta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {showAi ? (
        <section className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.aiEyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.aiTitle}</h2>
            <p className={styles.sectionSubtitle}>{t.aiSupport}</p>
          </div>
          <div className={styles.grid2}>
            {aiProjects.map((project) => (
              <div key={project.id} className={styles.proofCard}>
                <span className={styles.proofLabel}>{t.aiEyebrow}</span>
                <h3 className={styles.proofTitle}>{project.name[lang]}</h3>
                <p className={styles.proofSummary}>{project.summary[lang]}</p>
                <div className={styles.proofStrip}>
                  {project.proofPoints.map((point: string) => (
                    <span key={point} className={styles.proofPill}>{point}</span>
                  ))}
                </div>
                <Link href={`/${lang}/projects/${project.slug}`} className={styles.ctaLink}>
                  {t.caseCta}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {showWeb3 && web3Project ? (
        <section className={styles.sectionStack}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>{t.web3Eyebrow}</span>
            <h2 className={styles.sectionTitle}>{t.web3Title}</h2>
          </div>
          <div className={styles.grid2}>
            <div className={`${styles.proofCard} ${styles.featuredCard}`}>
              <span className={styles.proofLabel}>{t.web3Eyebrow}</span>
              <h3 className={styles.proofTitle}>{web3Project.name[lang]}</h3>
              <p className={styles.proofSummary}>{web3Project.summary[lang]}</p>
              <div className={styles.proofStrip}>
                {web3Project.proofPoints.map((point: string) => (
                  <span key={point} className={styles.proofPill}>{point}</span>
                ))}
              </div>
              <Link href={`/${lang}/projects/${web3Project.slug}`} className={styles.ctaLink}>
                {t.caseCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>{t.web3Title}</h3>
              <p className={styles.cardBody}>{t.web3Support}</p>
            </div>
          </div>
        </section>
      ) : null}

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>{t.inquiryTitle}</h2>
        <p className={styles.cardBody}>{t.inquiryBody}</p>
      </div>
    </div>
  );
}
