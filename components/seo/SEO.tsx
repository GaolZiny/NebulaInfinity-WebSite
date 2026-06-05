import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  lang: 'ja' | 'en';
  path?: string;
  type?: 'website' | 'article';
  image?: string;
}

export function generateSEOMetadata({
  title,
  description,
  lang,
  path = '',
  type = 'website',
  image = '/images/logo.png',
}: SEOProps): Metadata {
  const baseUrl = 'https://www.nebulainfinity.com';
  const url = `${baseUrl}/${lang}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  return {
    title,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        ja: `${baseUrl}/ja${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Nebula Infinity',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      site: '@N_I_COM',
      creator: '@N_I_COM',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// JSON-LD 结构化数据 ----------------------------------------------------------
const BASE_URL = 'https://www.nebulainfinity.com';

// The 3 public V1 service lines (kept in sync with data/services.ts).
const SERVICE_LINES = [
  'AI Workflow Design & Development',
  'AI Application Design & Development',
  'AI-Driven Development',
];

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'Nebula Infinity',
    alternateName: 'ネビュラインフィニティ',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo.png`,
    description:
      'AI社会実装のパートナー。AIワークフロー、AIアプリケーション、AI駆動開発の設計・開発で、構想を実務で使える仕組みに変えます。',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'JP',
      addressLocality: 'Tokyo',
    },
    areaServed: 'JP',
    knowsAbout: ['AI workflow', 'AI application development', 'AI-driven development', 'agentic AI', 'MVP development'],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@nebulainfinity.com',
      contactType: 'customer service',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: SERVICE_LINES.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name, provider: { '@id': `${BASE_URL}/#organization` } },
      })),
    },
    sameAs: ['https://twitter.com/N_I_COM'],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'Nebula Infinity',
    inLanguage: ['ja', 'en'],
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function generateServiceSchema({
  name,
  description,
  path,
  lang,
}: {
  name: string;
  description: string;
  path: string;
  lang: 'ja' | 'en';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}/${lang}${path}`,
    serviceType: name,
    provider: { '@id': `${BASE_URL}/#organization` },
    areaServed: 'JP',
    inLanguage: lang,
  };
}

export function generateBreadcrumbSchema(lang: 'ja' | 'en', items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}/${lang}${item.path}`,
    })),
  };
}

export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url,
    publisher: {
      '@type': 'Organization',
      name: 'Nebula Infinity',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.nebulainfinity.com/images/logo.png',
      },
    },
  };
}
