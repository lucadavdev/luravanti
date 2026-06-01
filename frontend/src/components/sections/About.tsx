import Image from 'next/image';
import { useTranslations } from 'next-intl';

const founders = [
  {
    name: "Luca D'Avino",
    email: 'luca@luravanti.com',
    photo: '/team/luca.jpg',
  },
  {
    name: 'Raffaello Pinzari',
    email: 'raffaello@luravanti.com',
    photo: '/team/raffaello.jpg',
  },
] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-5xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-12 max-w-2xl">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {founders.map((founder) => (
            <article
              key={founder.email}
              className="group bg-navy-2 border border-white/8 rounded-2xl overflow-hidden hover:border-grad-mid/30 transition-all duration-200 hover:bg-navy-3"
            >
              <div className="relative w-full aspect-[4/5]">
                <Image
                  src={founder.photo}
                  alt={`${founder.name} — ${t('role')}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-text-primary text-xl mb-1">
                  {founder.name}
                </h3>
                <p className="grad-text text-sm font-semibold mb-3">{t('role')}</p>
                <a
                  href={`mailto:${founder.email}`}
                  className="text-text-muted text-sm hover:text-text-primary transition-colors duration-150"
                >
                  {founder.email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
