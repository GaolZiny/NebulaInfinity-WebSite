import { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import projectsData from '@/data/projects/projects.json';
import { services } from '@/data/services';

const ACTIVE_PROJECT_SLUGS = new Set(['gaijin-life-navi', 'rigel', 'astra']);

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.nebulainfinity.com';
  const languages = ['ja', 'en'];

  const staticPages = ['', '/contact'];

  // 生成静态页面的 sitemap 条目
  const staticEntries = languages.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );

  // 生成项目详情页的 sitemap 条目
  const projectEntries = languages.flatMap((lang) =>
    projectsData.projects.filter((project) => ACTIVE_PROJECT_SLUGS.has(project.slug)).map((project) => ({
      url: `${baseUrl}/${lang}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  );

  // 生成サービス詳細ページの sitemap 条目
  const serviceEntries = languages.flatMap((lang) =>
    services.map((service) => ({
      url: `${baseUrl}/${lang}/services/${service.id}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
