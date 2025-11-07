import { type Language } from '@/lib/i18n';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import translations from '@/data/translations/ja.json';
import translationsEn from '@/data/translations/en.json';

export async function generateMetadata({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;
  return {
    title: `Nebula Infinity - ${t.hero.title}`,
    description: t.hero.subtitle,
  };
}

export default function HomePage({ params }: { params: { lang: Language } }) {
  const t = params.lang === 'ja' ? translations : translationsEn;

  const services = [
    {
      title: t.services.smartContract.title,
      description: t.services.smartContract.description,
      icon: '🔗',
    },
    {
      title: t.services.web3Content.title,
      description: t.services.web3Content.description,
      icon: '🎨',
    },
    {
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      icon: '💡',
    },
    {
      title: t.services.aiDevelopment.title,
      description: t.services.aiDevelopment.description,
      icon: '🤖',
    },
  ];

  return (
    <div className="pt-[var(--nav-height)]">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-var(--nav-height))] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
          />
          <div className="absolute inset-0 z-[2] bg-black/50" />
        </div>

        {/* Content */}
        <div className="max-w-[900px] px-6 text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href={`/${params.lang}/services`}>
              <Button size="lg">{t.hero.cta}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t.services.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-[600px] mx-auto">
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all">
                <div className="text-5xl mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={`/${params.lang}/services`}>
              <Button variant="outline">{t.common.learnMore}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t.projects.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-[600px] mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="max-w-[800px] mx-auto">
            <Card className="p-12 text-center hover:shadow-lg transition-all">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                {params.lang === 'ja'
                  ? '最新のWeb3.0プロジェクトをご覧ください'
                  : 'View our latest Web3.0 projects'}
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {params.lang === 'ja'
                  ? 'NFTマーケットプレイス、DeFi分析プラットフォームなど、革新的なプロジェクトを展開しています。'
                  : 'We are developing innovative projects including NFT marketplaces and DeFi analytics platforms.'}
              </p>
              <Link href={`/${params.lang}/projects`}>
                <Button variant="outline">{t.common.viewAll}</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <Card className="p-16 text-center bg-gradient-to-br from-white/[0.03] to-gray-200/[0.03] hover:shadow-lg transition-all">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
              {params.lang === 'ja'
                ? 'プロジェクトを始めませんか？'
                : 'Ready to start your project?'}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-[600px] mx-auto">
              {params.lang === 'ja'
                ? 'Web3.0やAI技術に関するご相談はお気軽にお問い合わせください。'
                : 'Feel free to contact us for consultation on Web3.0 and AI technologies.'}
            </p>
            <Link href={`/${params.lang}/contact`}>
              <Button size="lg">{t.nav.contact}</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
