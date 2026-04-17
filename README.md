# Myra Dental — Next.js Website

Dental clinic website migrated from static HTML to **Next.js 15** with App Router, TypeScript, and Tailwind CSS v4.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Runtime | Bun |
| Font | Poppins (next/font/google) |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Start production server
bun start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout + JSON-LD structured data
│   ├── page.tsx            # Home page
│   ├── loading.tsx         # Global loading spinner
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic sitemap (/sitemap.xml)
│   ├── robots.ts           # robots.txt (/robots.txt)
│   ├── about/
│   ├── services/[slug]/
│   ├── team/[id]/
│   ├── blog/[slug]/
│   ├── contact/
│   ├── appointment/
│   ├── faqs/
│   ├── gallery/
│   ├── technology/
│   └── testimonials/
├── components/
│   ├── animations/         # Framer Motion wrappers
│   ├── forms/              # Appointment & contact forms
│   ├── layout/             # Header, footer, breadcrumb
│   ├── sections/           # Page-level section components
│   └── ui/                 # Reusable UI primitives
└── lib/
    ├── api/                # API client + fetch functions
    ├── mock-data/          # Local mock data (services, team, blog…)
    └── types/              # TypeScript interfaces
```

## API Endpoints

**Base URL:** `https://api-dev.drtrungnguyenvo.com/api/v1`

| Endpoint | Used by |
|----------|---------|
| `GET /landing/site-info` | Layout (JSON-LD), Contact, Home |
| `GET /landing/header` | Home hero |
| `GET /landing/services?featured=true` | Home services section |
| `GET /landing/about?include=benefits` | About, Appointment |
| `GET /landing/about?include=team` | About, Home, Team |
| `GET /landing/content?include=reviews` | Home, About, Testimonials |
| `GET /landing/content?include=faqs` | Home, FAQs |

## Missing APIs

Several pages currently use **mock data** because API endpoints do not exist yet.  
→ See [`/plans/250417-nextjs-migration/missing-apis-for-backend.md`](../plans/250417-nextjs-migration/missing-apis-for-backend.md) for the full list.

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api-dev.drtrungnguyenvo.com/api/v1
```

## SEO

- Per-page metadata via `export const metadata` / `generateMetadata`
- JSON-LD structured data (`Dentist` schema) injected in root layout
- Dynamic sitemap at `/sitemap.xml`
- robots.txt at `/robots.txt`
- Open Graph tags on all pages

