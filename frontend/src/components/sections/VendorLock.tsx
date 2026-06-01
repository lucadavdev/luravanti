import { useTranslations } from 'next-intl';

export function VendorLock() {
  const t = useTranslations('vendorlock');

  const items = [
    { k: t('1k'), d: t('1d') },
    { k: t('2k'), d: t('2d') },
    { k: t('3k'), d: t('3d') },
    { k: t('4k'), d: t('4d') },
  ];

  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-8 max-w-3xl">
          {t('title')}
        </h2>

        <p className="text-text-muted leading-relaxed mb-12 max-w-3xl">{t('lead')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.k}
              className="flex items-start gap-4 bg-navy-2 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors duration-200"
            >
              <span className="font-display font-black text-lg grad-text shrink-0 w-24">{item.k}</span>
              <span className="text-text-muted leading-relaxed text-sm">{item.d}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
