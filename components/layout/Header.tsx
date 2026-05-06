'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { type Language } from '@/lib/i18n';
import styles from './Header.module.css';

interface HeaderProps {
  lang: Language;
}

const labels = {
  ja: {
    home: 'ホーム',
    services: 'サービス',
    projects: 'プロジェクト',
    about: '会社概要',
    contact: 'お問い合わせ',
    contactCta: 'お問い合わせ',
    toggleMenu: 'メニューを開く',
    closeMenu: 'メニューを閉じる',
  },
  en: {
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    contactCta: 'Contact Us',
    toggleMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
} as const;

const HOME_ANCHORS = new Set(['#services', '#projects', '#about']);

function normalizePath(path: string) {
  return path.length > 1 ? path.replace(/\/$/, '') : path;
}

export default function Header({ lang }: HeaderProps) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = labels[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleHashLinkClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (!(event.target instanceof Element)) return;

      const link = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!link || link.target || link.hasAttribute('download')) return;

      const targetUrl = new URL(link.href);
      if (targetUrl.origin !== window.location.origin || !HOME_ANCHORS.has(targetUrl.hash)) return;

      const homePath = normalizePath(`/${lang}/`);
      const currentPath = normalizePath(window.location.pathname);
      const targetPath = normalizePath(targetUrl.pathname);

      if (currentPath !== homePath || targetPath !== homePath) return;

      event.preventDefault();
      setIsMobileMenuOpen(false);

      const scrollToAnchor = () => {
        const target = document.getElementById(targetUrl.hash.slice(1));
        if (!target) return;

        const header = document.querySelector<HTMLElement>('header');
        const headerHeight = header?.getBoundingClientRect().height ?? 80;
        const scrollOffset = headerHeight + 24;
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - scrollOffset);
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

        window.history.pushState(null, '', `${targetUrl.pathname}${targetUrl.hash}`);
        window.scrollTo({ top, behavior });
        target.focus({ preventScroll: true });
      };

      const scheduleScroll = () => {
        window.requestAnimationFrame(() => window.requestAnimationFrame(scrollToAnchor));
      };

      if (isMobileMenuOpen) {
        window.setTimeout(scheduleScroll, 240);
        return;
      }

      scheduleScroll();
    };

    document.addEventListener('click', handleHashLinkClick, { capture: true });
    return () => document.removeEventListener('click', handleHashLinkClick, { capture: true });
  }, [isMobileMenuOpen, lang]);

  const navItems = useMemo(
    () => [
      { href: `/${lang}/`, label: t.home },
      { href: `/${lang}/#services`, label: t.services },
      { href: `/${lang}/#projects`, label: t.projects },
      { href: `/${lang}/#about`, label: t.about },
      { href: `/${lang}/contact`, label: t.contact },
    ],
    [lang, t],
  );

  const alternatePath = useMemo(() => {
    if (!pathname) {
      return `/${lang === 'ja' ? 'en' : 'ja'}/`;
    }

    if (pathname.startsWith(`/${lang}`)) {
      const suffix = pathname.slice(`/${lang}`.length) || '/';
      const nextLang = lang === 'ja' ? 'en' : 'ja';
      if (suffix === '/services') return `/${nextLang}/#services`;
      if (suffix === '/projects') return `/${nextLang}/#projects`;
      if (suffix === '/about') return `/${nextLang}/#about`;
      return `/${nextLang}${suffix}`;
    }

    return `/${lang === 'ja' ? 'en' : 'ja'}${pathname}`;
  }, [lang, pathname]);

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href.endsWith('/')) {
      return pathname === href || pathname === href.slice(0, -1);
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href={`/${lang}/`} className={styles.logo} aria-label="Nebula Infinity home">
          <img src="/images/logo.png" alt="Nebula Infinity" className={styles.logoImage} />
          <span className={styles.logoText}>Nebula Infinity</span>
        </Link>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`} aria-label="Primary navigation" id="primary-navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={`/${lang}/contact`} className={`${styles.contactCta} ${styles.mobileOnly}`}>
            {t.contactCta}
          </Link>
        </nav>

        <div className={styles.actions}>
          <Link href={alternatePath} className={styles.langButton} hrefLang={lang === 'ja' ? 'en' : 'ja'}>
            {lang === 'ja' ? 'EN' : 'JA'}
          </Link>
          <Link href={`/${lang}/contact`} className={`${styles.contactCta} ${styles.desktopOnly}`}>
            {t.contactCta}
          </Link>
          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="primary-navigation"
            aria-label={isMobileMenuOpen ? t.closeMenu : t.toggleMenu}
          >
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
