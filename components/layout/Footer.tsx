import Link from 'next/link';
import { type Language } from '@/lib/i18n';
import styles from './Footer.module.css';

interface FooterProps {
  lang: Language;
}

const copy = {
  ja: {
    description: 'AI Workflow、AI Application、AI-Driven Development の3つの実装ラインで、構想を現場で使える仕組みに変えます。',
    quickLinks: 'Quick Links',
    contactLabel: 'Contact',
    rights: '© 2026 Nebula Infinity. All rights reserved.',
    home: 'ホーム',
    services: 'サービス',
    projects: 'プロジェクト',
    about: '会社概要',
    contact: 'お問い合わせ',
  },
  en: {
    description: 'We turn ideas into operational systems through three implementation lines: AI Workflow, AI Application, and AI-Driven Development.',
    quickLinks: 'Quick Links',
    contactLabel: 'Contact',
    rights: '© 2026 Nebula Infinity. All rights reserved.',
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },
} as const;

export default function Footer({ lang }: FooterProps) {
  const t = copy[lang];
  const navItems = [
    { href: `/${lang}/`, label: t.home },
    { href: `/${lang}/#services`, label: t.services },
    { href: `/${lang}/projects`, label: t.projects },
    { href: `/${lang}/#about`, label: t.about },
    { href: `/${lang}/contact`, label: t.contact },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <img src="/images/logo.png" alt="Nebula Infinity" className={styles.logoImage} />
              <span className={styles.logoText}>Nebula Infinity</span>
            </div>
            <p className={styles.description}>{t.description}</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.quickLinks}</h4>
              <nav className={styles.linkList}>
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>{t.contactLabel}</h4>
              <div className={styles.contactStack}>
                <a href="mailto:info@nebulainfinity.com" className={styles.contactLink}>
                  info@nebulainfinity.com
                </a>
                <Link href={`/${lang}/contact`} className={styles.contactButton}>
                  {t.contact}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
