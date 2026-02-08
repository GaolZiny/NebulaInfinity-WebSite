import { ReactNode } from 'react';
import { languages, type Language } from '@/lib/i18n';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { lang: Language };
}) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `document.documentElement.lang="${params.lang}";`,
        }}
      />
      <Header lang={params.lang} />
      <main>{children}</main>
      <Footer lang={params.lang} />
    </>
  );
}
