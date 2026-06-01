import { useTranslations } from 'next-intl';

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
          <div aria-hidden="true" className="relative hidden lg:flex items-center justify-center h-64">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full border border-white/8 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-grad-mid/20 border border-grad-mid/30" />
                </div>
              </div>
            </div>
            <span className="relative z-10 font-display font-black text-4xl grad-text">LR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
