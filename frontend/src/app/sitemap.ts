import type { MetadataRoute } from 'next';

const SITE_URL = 'https://luravanti.com';
const LOCALES = ['en', 'it', 'es'] as const;

const hreflangMap: Record<string, string> = {
  en: 'en-US',
  it: 'it-IT',
  es: 'es-ES',
};

export default function sitemap(): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: locale === 'en' ? 1.0 : 0.9,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((l) => [hreflangMap[l], `${SITE_URL}/${l}`])),
    },
  }));
}
