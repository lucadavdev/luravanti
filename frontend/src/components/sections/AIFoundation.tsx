import { useTranslations } from 'next-intl';

export function AIFoundation() {
  const t = useTranslations('aifoundation');

  const pillars = [t('s1'), t('s2'), t('s3'), t('s4')];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-8 max-w-3xl">
          {t('title')}
        </h2>

        <div className="space-y-4 text-text-muted leading-relaxed mb-10 max-w-3xl">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>

        {/* Blockquote */}
        <blockquote className="relative border-l-2 border-grad-mid pl-6 mb-12 max-w-3xl">
          <p className="text-text-primary font-medium text-lg leading-relaxed italic">{t('quote')}</p>
        </blockquote>

        {/* Pillars */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="bg-navy-2 border border-white/8 rounded-xl p-4 text-center hover:border-grad-mid/30 transition-colors duration-200"
            >
              <div aria-hidden="true" className="w-8 h-8 rounded-full bg-brand-gradient mx-auto mb-3 opacity-80" />
              <p className="text-sm font-semibold text-text-primary">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
