# LuRavAntI

Business Transformation Consulting website — [luravanti.com](https://luravanti.com)

## Stack

- **Frontend**: Next.js 16, TypeScript, Tailwind CSS v4, next-intl
- **Proxy**: Nginx 1.27 (HTTPS)
- **Database**: PostgreSQL 16
- **Languages**: EN · IT · ES

## Development

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up --build
# Site: http://localhost:3000 → redirects to /en
```

Or without Docker:

```bash
cd frontend && npm install && npm run dev
```

## Production

1. Place SSL certs in `nginx/certs/fullchain.pem` and `nginx/certs/privkey.pem`
2. Copy `.env.example` to `.env` and fill all values (especially `POSTGRES_PASSWORD`)
3. `docker compose up --build -d`

### Getting SSL certs (Let's Encrypt)

```bash
certbot certonly --standalone -d luravanti.com -d www.luravanti.com
cp /etc/letsencrypt/live/luravanti.com/fullchain.pem nginx/certs/
cp /etc/letsencrypt/live/luravanti.com/privkey.pem nginx/certs/
```

## SEO

- Multilingual hreflang (EN/IT/ES) — `/en`, `/it`, `/es`
- JSON-LD Organization + Service schemas
- Auto-generated sitemap at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- LLM-friendly `llms.txt` at `/llms.txt`
- All copy in `frontend/src/i18n/messages/{en,it,es}.json`

## Adding Content

See `CLAUDE.md` for full guidelines on adding sections, services, or backend features.
