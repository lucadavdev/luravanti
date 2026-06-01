import { useTranslations } from 'next-intl';

export function Services() {
  const t = useTranslations('services');

  const serviceList = [
    { title: t('s1t'), body: t('s1b') },
    { title: t('s2t'), body: t('s2b') },
    { title: t('s3t'), body: t('s3b') },
    { title: t('s4t'), body: t('s4b') },
    { title: t('s5t'), body: t('s5b') },
    { title: t('s6t'), body: t('s6b') },
  ];

  return (
    <section id="services" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-4 max-w-2xl">
          {t('title')}
        </h2>
        <p className="text-text-muted leading-relaxed mb-12 max-w-2xl">{t('lead')}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {serviceList.map((service) => (
            <article
              key={service.title}
              className="group bg-navy-2 border border-white/8 rounded-2xl p-6 hover:border-grad-mid/30 transition-all duration-200 hover:bg-navy-3"
            >
              <h3 className="font-display font-bold text-text-primary mb-3 group-hover:grad-text transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
