import { ReactNode } from 'react';
import { getLanguage, languages } from '@/lib/i18n';
import { generateOrganizationSchema, generateWebSiteSchema } from '@/components/seo/SEO';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }> ;
}) {
  const { lang: rawLang } = await params;
  const lang = getLanguage(rawLang);
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${lang}";`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebSiteSchema()) }}
      />
      <a href="#main-content" className="skip-link">
        {lang === 'ja' ? 'メインコンテンツへスキップ' : 'Skip to main content'}
      </a>
      <Header lang={lang} />
      <main id="main-content">{children}</main>
      <Footer lang={lang} />
    </>
  );
}
