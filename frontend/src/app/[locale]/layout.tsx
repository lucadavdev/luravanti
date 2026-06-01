import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { organizationSchema } from '@/lib/schema';
import { Montserrat, Inter } from 'next/font/google';
import '../globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://luravanti.com';
const LOCALES = ['en', 'it', 'es'] as const;
type Locale = (typeof LOCALES)[number];

const metaByLocale: Record<Locale, { title: string; description: string; ogLocale: string }> = {
  en: {
    title: 'LuRavAntI — Business Transformation Consulting',
    description:
      'We integrate systems, eliminate operational friction, restructure data, and build the foundation for intelligent automation. Business transformation for the AI era.',
    ogLocale: 'en_US',
  },
  it: {
    title: 'LuRavAntI — Consulenza per la Trasformazione Aziendale',
    description:
      "Integriamo i sistemi, eliminiamo gli attriti operativi, ristrutturiamo i dati e costruiamo le fondamenta per l'automazione intelligente.",
    ogLocale: 'it_IT',
  },
  es: {
    title: 'LuRavAntI — Consultoría de Transformación Empresarial',
    description:
      'Integramos sistemas, eliminamos la fricción operativa, reestructuramos los datos y construimos la base para la automatización inteligente.',
    ogLocale: 'es_ES',
  },
};

const hreflangMap: Record<Locale, string> = {
  en: 'en-US',
  it: 'it-IT',
  es: 'es-ES',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = (LOCALES.includes(locale as Locale) ? locale : 'en') as Locale;
  const meta = metaByLocale[safeLocale];
  const canonicalUrl = `${SITE_URL}/${safeLocale}`;

  const languages = Object.fromEntries(
    LOCALES.map((l) => [hreflangMap[l], `${SITE_URL}/${l}`])
  );

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      siteName: 'LuRavAntI',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    robots: { index: true, follow: true },
    keywords: [
      'business transformation',
      'consulting',
      'AI automation',
      'system integration',
      'digital transformation',
      'LuRavAntI',
    ],
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050B22',
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
      </head>
      <body className="bg-navy text-text-primary antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
