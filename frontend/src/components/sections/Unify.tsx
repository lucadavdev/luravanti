import { useTranslations } from 'next-intl';

export function Unify() {
  const t = useTranslations('unify');

  const silos = [t('silo1'), t('silo2'), t('silo3'), t('silo4')];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-8 max-w-3xl">
          {t('title')}
        </h2>

        <div className="space-y-4 text-text-muted leading-relaxed mb-12 max-w-3xl">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
        </div>

        {/* Before / After visual */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Before */}
          <div className="bg-navy-2 border border-white/8 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400/80 mb-4">
              {t('before')}
            </p>
            <div className="space-y-2">
              {silos.map((silo) => (
                <div
                  key={silo}
                  className="flex items-center gap-3 bg-white/3 border border-white/5 rounded-lg px-4 py-3"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400/60 shrink-0" />
                  <span className="text-sm text-text-muted">{silo}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-navy-2 border border-grad-mid/20 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-grad-mid mb-4">
              {t('after')}
            </p>
            <div className="flex flex-col items-center justify-center h-[calc(100%-2rem)] gap-4">
              <div className="w-full bg-white/5 border border-grad-mid/30 rounded-xl px-6 py-8 text-center">
                <div className="w-8 h-8 rounded-full bg-brand-gradient mx-auto mb-3" />
                <p className="text-text-primary font-semibold">{t('unified')}</p>
              </div>
              <p className="text-xs text-text-muted text-center px-4">
                CRM · ERP · Commerce · Data Hub · Automation · AI Layer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
