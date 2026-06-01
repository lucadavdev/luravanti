import { useTranslations } from 'next-intl';

export function CTA() {
  const t = useTranslations('cta');

  return (
    <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[600px] h-[300px] rounded-full bg-grad-mid/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-6">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-6 leading-tight">
          {t('title')}
        </h2>
        <p className="text-text-muted text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          {t('lead')}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-brand-gradient text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
          >
            {t('btn1')}
          </a>
          <a
            href="#services"
            className="border border-white/20 text-text-primary font-semibold px-8 py-4 rounded-xl hover:border-white/40 transition-colors text-base"
          >
            {t('btn2')}
          </a>
        </div>
      </div>
    </section>
  );
}
