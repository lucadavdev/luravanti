import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Intro() {
  const t = useTranslations('intro');

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-12 max-w-2xl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-text-muted leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>

          {/* Decorative visual */}
          <div className="relative hidden lg:flex items-center justify-center h-64">
            <Image
              src="/logo.png"
              alt="LuRavAntI"
              width={400}
              height={152}
              className="w-full max-w-sm opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
