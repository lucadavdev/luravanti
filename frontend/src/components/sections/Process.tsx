import { useTranslations } from 'next-intl';

export function Process() {
  const t = useTranslations('process');

  const steps = [
    { num: '01', title: t('s1t'), desc: t('s1d') },
    { num: '02', title: t('s2t'), desc: t('s2d') },
    { num: '03', title: t('s3t'), desc: t('s3d') },
    { num: '04', title: t('s4t'), desc: t('s4d') },
  ];

  return (
    <section id="process" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-12 max-w-2xl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div key={step.num} className="relative">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-5 left-full w-full h-px bg-white/8 z-0"
                  style={{ width: 'calc(100% - 2.5rem)', left: '2.5rem' }}
                />
              )}

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center mb-4">
                  <span className="text-white font-display font-black text-xs">{step.num}</span>
                </div>
                <h3 className="font-display font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
