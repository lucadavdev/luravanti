# LuRavAntI

Business Transformation Consulting website — [luravanti.com](https://luravanti.com)

## Stack

- **Frontend**: Next.js 16, TypeScript, Tailwind CSS v4, next-intl
- **Proxy**: Nginx 1.27 (HTTP on port 4000 — SSL terminated by upstream VPS proxy)
- **Database**: PostgreSQL 16
- **Languages**: EN · IT · ES

## Development

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up --build
# Site: http://localhost:4000 → redirects to /en
```

Or without Docker:

```bash
cd frontend && npm install && npm run dev
```

## Production

1. Copy `.env.example` to `.env` and fill all values (especially `POSTGRES_PASSWORD`)
2. `docker compose up --build -d`
3. Point your VPS reverse proxy (nginx/Caddy/Traefik) at `http://localhost:4000`

> SSL is handled by the VPS upstream proxy. Nginx here is plain HTTP on port 4000.

## SEO

- Multilingual hreflang (EN/IT/ES) — `/en`, `/it`, `/es`
- JSON-LD Organization + Service schemas
- Auto-generated sitemap at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- LLM-friendly `llms.txt` at `/llms.txt`
- All copy in `frontend/src/i18n/messages/{en,it,es}.json`

## Adding Content

See `CLAUDE.md` for full guidelines on adding sections, services, or backend features.
