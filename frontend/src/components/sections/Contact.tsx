'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ company: '', email: '', description: '' });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  const inputClass =
    'w-full bg-navy border border-white/10 rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-grad-mid/50 transition-colors text-sm';

  return (
    <section id="contact" className="py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-2xl">
        <p className="text-grad-from text-sm font-semibold uppercase tracking-widest mb-4">
          {t('eyebrow')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-5xl text-text-primary mb-10 max-w-xl">
          {t('title')}
        </h2>

        {status === 'success' ? (
          <p className="text-text-primary text-lg py-8">{t('success')}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              required
              placeholder={t('company')}
              value={form.company}
              onChange={set('company')}
              className={inputClass}
            />
            <input
              type="email"
              required
              placeholder={t('email')}
              value={form.email}
              onChange={set('email')}
              className={inputClass}
            />
            <textarea
              required
              rows={4}
              placeholder={t('description')}
              value={form.description}
              onChange={set('description')}
              className={inputClass + ' resize-none'}
            />
            {status === 'error' && (
              <p className="text-red-400 text-sm">{t('error')}</p>
            )}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-brand-gradient text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base disabled:opacity-50 cursor-pointer"
            >
              {status === 'loading' ? '…' : t('submit')}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
