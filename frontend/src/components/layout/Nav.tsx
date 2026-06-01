'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from '@/i18n/navigation';
import Image from 'next/image';

const LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
  { code: 'es', label: 'ES' },
] as const;

export function Nav() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '#approach', label: t('approach') },
    { href: '#services', label: t('services') },
    { href: '#why', label: t('why') },
    { href: '#process', label: t('process') },
  ];

  function switchLocale(code: 'en' | 'it' | 'es') {
    router.replace('/', { locale: code });
    setMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-navy/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Image
            src="/logo.png"
            alt="LuRavAntI — Business Transformation Consulting"
            width={200}
            height={76}
            className="h-9 w-auto"
            priority
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-muted hover:text-text-primary transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right: locale switcher + CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-1">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className={`px-2 py-1 text-xs rounded font-medium transition-colors cursor-pointer ${
                  locale === loc.code
                    ? 'bg-white/10 text-text-primary'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('book')}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
          <span className="block w-5 h-0.5 bg-text-primary" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-2 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-text-muted hover:text-text-primary transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-2 pt-2 border-t border-white/5">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => switchLocale(loc.code)}
                className={`px-3 py-1 text-sm rounded font-medium transition-colors cursor-pointer ${
                  locale === loc.code ? 'bg-white/10 text-text-primary' : 'text-text-muted'
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="bg-brand-gradient text-white text-sm font-semibold px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('book')}
          </a>
        </div>
      )}
    </nav>
  );
}
