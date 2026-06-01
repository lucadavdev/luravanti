import { useTranslations } from 'next-intl';

export function Hero() {
  const t = useTranslations('hero');
  const tags = [t('t1'), t('t2'), t('t3')];

  const titleRaw = t('title');
  const gradWord = t('gradWord');
  const titleParts = titleRaw.split(gradWord);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="w-[900px] h-[500px] rounded-full bg-grad-mid/8 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-6">
          {t('eyebrow')}
        </p>

        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-tight text-text-primary mb-6">
          {titleParts[0]}
          <span className="grad-text">{gradWord}</span>
          {titleParts[1]}
        </h1>

        <p className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('lead')}
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="bg-brand-gradient text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base"
          >
            {t('cta1')}
          </a>
          <a
            href="#services"
            className="border border-white/20 text-text-primary font-semibold px-8 py-4 rounded-xl hover:border-white/40 transition-colors text-base"
          >
            {t('cta2')}
          </a>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/5 border border-white/10 text-text-muted text-sm px-4 py-2 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}
