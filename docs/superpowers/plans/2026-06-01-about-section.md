# About Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an "About Us" section with two Co-Founder cards (photo, name, role, email) before the CTA, plus a nav link.

**Architecture:** New `About.tsx` section component following existing Services/Process pattern. Images served from `public/team/`. All strings in i18n files across all 3 locales.

**Tech Stack:** Next.js 15 App Router, next-intl, Tailwind CSS v4, Next.js `<Image>`

---

### Task 1: Copy images to public/team/

**Files:**
- Create: `frontend/public/team/luca.jpg`
- Create: `frontend/public/team/raffaello.jpg`

- [ ] **Step 1: Create team directory and copy images**

```bash
mkdir -p /Users/lucadavino/luravanti/frontend/public/team
cp "/Users/lucadavino/Downloads/WhatsApp Image 2026-06-01 at 12.27.06.jpeg" /Users/lucadavino/luravanti/frontend/public/team/luca.jpg
cp "/Users/lucadavino/Downloads/WhatsApp Image 2026-06-01 at 12.38.12.jpeg" /Users/lucadavino/luravanti/frontend/public/team/raffaello.jpg
```

- [ ] **Step 2: Verify files exist**

```bash
ls -lh /Users/lucadavino/luravanti/frontend/public/team/
```

Expected: two files, each several hundred KB.

- [ ] **Step 3: Commit**

```bash
cd /Users/lucadavino/luravanti
git add frontend/public/team/
git commit -m "chore: add founder photos to public/team"
```

---

### Task 2: Add i18n keys to all 3 locale files

**Files:**
- Modify: `frontend/src/i18n/messages/en.json`
- Modify: `frontend/src/i18n/messages/it.json`
- Modify: `frontend/src/i18n/messages/es.json`

- [ ] **Step 1: Add `about` and `nav.about` to en.json**

In `en.json`, add to the `"nav"` object:
```json
"about": "About"
```

Add new top-level key after `"process"`:
```json
"about": {
  "eyebrow": "About us",
  "title": "The people behind LuRavAntI",
  "role": "Co-Founder"
}
```

- [ ] **Step 2: Add `about` and `nav.about` to it.json**

In `it.json`, add to the `"nav"` object:
```json
"about": "Chi siamo"
```

Add new top-level key after `"process"`:
```json
"about": {
  "eyebrow": "Chi siamo",
  "title": "Le persone dietro LuRavAntI",
  "role": "Co-Fondatore"
}
```

- [ ] **Step 3: Add `about` and `nav.about` to es.json**

In `es.json`, add to the `"nav"` object:
```json
"about": "Quiénes somos"
```

Add new top-level key after `"process"`:
```json
"about": {
  "eyebrow": "Quiénes somos",
  "title": "Las personas detrás de LuRavAntI",
  "role": "Co-Fundador"
}
```

- [ ] **Step 4: Commit**

```bash
cd /Users/lucadavino/luravanti
git add frontend/src/i18n/messages/
git commit -m "feat: add about i18n keys to all 3 locales"
```

---

### Task 3: Create About.tsx section component

**Files:**
- Create: `frontend/src/components/sections/About.tsx`

- [ ] **Step 1: Create the component**

```tsx
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
              <div className="relative w-full aspect-square">
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
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lucadavino/luravanti
git add frontend/src/components/sections/About.tsx
git commit -m "feat: add About section component"
```

---

### Task 4: Mount About in page.tsx before CTA

**Files:**
- Modify: `frontend/src/app/[locale]/page.tsx`

- [ ] **Step 1: Add import**

Add to imports:
```tsx
import { About } from '@/components/sections/About';
```

- [ ] **Step 2: Mount before CTA**

In the `<main>` block, add `<About />` directly before `<CTA />`:
```tsx
<About />
<CTA />
```

- [ ] **Step 3: Commit**

```bash
cd /Users/lucadavino/luravanti
git add frontend/src/app/\[locale\]/page.tsx
git commit -m "feat: mount About section before CTA"
```

---

### Task 5: Add About link to Nav

**Files:**
- Modify: `frontend/src/components/layout/Nav.tsx`

- [ ] **Step 1: Add #about to links array**

In `Nav.tsx`, in the `links` array add after `process`:
```tsx
{ href: '#about', label: t('about') },
```

- [ ] **Step 2: Commit**

```bash
cd /Users/lucadavino/luravanti
git add frontend/src/components/layout/Nav.tsx
git commit -m "feat: add About nav link"
```

---

### Task 6: Verify in browser

- [ ] **Step 1: Start dev server**

```bash
cd /Users/lucadavino/luravanti/frontend && npm run dev
```

- [ ] **Step 2: Check all 3 locales**

Open:
- http://localhost:4000/en — verify About section visible, photos load, nav link works
- http://localhost:4000/it — verify "Chi siamo" eyebrow, "Co-Fondatore" role
- http://localhost:4000/es — verify "Quiénes somos" eyebrow, "Co-Fundador" role
