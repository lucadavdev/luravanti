import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer id="contact" className="border-t border-white/10 bg-navy-2 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="LuRavAntI — Business Transformation Consulting"
                width={280}
                height={106}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-text-muted text-sm leading-relaxed">{t('tagline')}</p>
          </div>

          {/* Company */}
          <div>
            <p className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('company')}
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#approach" className="hover:text-text-primary transition-colors">
                  {t('approach')}
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-text-primary transition-colors">
                  {t('why')}
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-text-primary transition-colors">
                  {t('process')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('services')}
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Integration
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-text-primary transition-colors">
                  Automation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wide">
              {t('contact')}
            </p>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a
                  href="mailto:hello@luravanti.com"
                  className="hover:text-text-primary transition-colors"
                >
                  hello@luravanti.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-text-muted">
          © {new Date().getFullYear()} LuRavAntI. {t('rights')}
        </div>
      </div>
    </footer>
  );
}
