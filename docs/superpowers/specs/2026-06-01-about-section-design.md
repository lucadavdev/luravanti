# About Section — Design Spec

**Date:** 2026-06-01

## Goal

Add an "About Us" section to luravanti.com showing the two Co-Founders with photo, name, role, and email. Add a nav anchor link.

## Placement

Before `<CTA />` in `frontend/src/app/[locale]/page.tsx`.

## Component

`frontend/src/components/sections/About.tsx`

- `<section id="about">` — semantic, matches nav anchor
- Eyebrow + `<h2>` heading via i18n key `about.eyebrow` / `about.title`
- `md:grid-cols-2` grid of two founder cards

### Founder Card

Each card contains:
- `<Image>` from Next.js (`object-cover object-top`, square aspect ratio)
- `<h3>` name (plain text, not translatable)
- Role string via i18n (`about.role`) — gradient text
- `<a href="mailto:...">` email link

Card style: `bg-navy-2 border border-white/8 rounded-2xl p-6 hover:border-grad-mid/30` — matches Services cards exactly.

### Founders data (hardcoded in component)

```ts
const founders = [
  { name: "Luca D'Avino",      email: "luca@luravanti.com",       photo: "/team/luca.jpg"       },
  { name: "Raffaello Pinzari", email: "raffaello@luravanti.com",  photo: "/team/raffaello.jpg"  },
];
```

## Images

- Source: WhatsApp images from `/Users/lucadavino/Downloads/`
- Destination: `frontend/public/team/luca.jpg` and `frontend/public/team/raffaello.jpg`
- Served via Next.js `<Image>` with descriptive `alt` text

## i18n

New `about` namespace added to `en.json`, `it.json`, `es.json` simultaneously.

```json
"about": {
  "eyebrow": "About Us" / "Chi siamo" / "Quiénes somos",
  "title": "The people behind LuRavAntI" / (translated),
  "role": "Co-Founder" / "Co-Fondatore" / "Co-Fundador"
}
```

Nav key added to existing `nav` namespace: `"about": "About" / "Chi siamo" / "Quiénes somos"`.

## Nav

`frontend/src/components/layout/Nav.tsx` — add `#about` anchor link using same pattern as existing nav links.

## Constraints

- No new npm dependencies
- All 3 locales updated together
- One `<h2>` in section, names as `<h3>`
- `alt` text on both images
- Role is "Co-Founder" (not "Co-Funder")
