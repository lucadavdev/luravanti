import { useTranslations } from 'next-intl';

export function Disruption() {
  const t = useTranslations('disruption');

  const cards = [
    { k: t('card1_k'), title: t('card1_t'), desc: t('card1_d') },
    { k: t('card2_k'), title: t('card2_t'), desc: t('card2_d') },
    { k: t('card3_k'), title: t('card3_t'), desc: t('card3_d') },
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

        <div className="space-y-4 text-text-muted leading-relaxed mb-12 max-w-3xl">
          <p>{t('p1')}</p>
          <p>{t('p2')}</p>
          <p>{t('p3')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card) => (
            <div
              key={card.k}
              className="bg-navy-2 border border-white/8 rounded-2xl p-6 hover:border-grad-mid/30 transition-colors duration-200"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-grad-mid mb-2">
                {card.k}
              </p>
              <p className="font-display font-bold text-text-primary mb-2">{card.title}</p>
              <p className="text-sm text-text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
