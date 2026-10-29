# portfolio-website

Personal site for Sam Littrell: a single-page portfolio plus a markdown-based
articles section.

## Stack

- [Next.js 15](https://nextjs.org/) App Router, React 19, TypeScript
- Tailwind CSS v4 (theme tokens live in `@theme` in `app/globals.css`; there is no `tailwind.config`)
- framer-motion for animation, lucide-react for icons
- gray-matter + react-markdown + remark-gfm for articles
- Static export (`output: 'export'`), written to `out/`

## Scripts

Use pnpm (version pinned via `packageManager` in `package.json`; `corepack enable` picks it up).

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm lint     # eslint (flat config in eslint.config.mjs)
pnpm build    # static export -> out/
npx serve out # preview the export

# Reproduce the GitHub Pages build (served under /portfolio-website)
PAGES_BASE_PATH=/portfolio-website pnpm build
```

## Editing content

All homepage copy lives in `lib/data.ts`:

| Constant | Used for |
|---|---|
| `SITE` | Name, handle, page title/description, canonical URL (`metadataBase`, sitemap, robots) |
| `HERO` | Hero tag, name, subtitle |
| `ABOUT_PARAGRAPHS`, `STATS` | About section |
| `PRIMARY_SKILLS`, `BROADER_SKILLS` | Skills section |
| `PROJECTS` | Project cards. `githubUrl`, `liveUrl`, `appStoreUrl` are optional and only render when set; `proprietary: true` shows a closed-source label |
| `RESUME_ENTRIES`, `EDUCATION_ENTRIES` | Experience timeline and education block |
| `RESUME_PDF` | Path to a PDF in `public/` (e.g. `"/Samuel_Littrell_Resume.pdf"`). Resume download buttons are hidden while it is `undefined` |
| `SOCIAL_LINKS` | Footer/contact links |

Static files in `public/` referenced by string path must go through `asset()`
from `lib/asset.ts` so they get the GitHub Pages basePath. Images imported as
modules (`import img from "@/public/..."`) are handled automatically.

## Adding an article

Create `articles/<slug>.md`:

```markdown
---
title: "Post title"
subtitle: "One-line summary"
date: "2026-02-19"   # YYYY-MM-DD
readingTime: "4 min read"
---

Markdown body (GitHub-flavored markdown supported).
```

The article index, article page, and sitemap pick it up at build time.

## Deployment

| Target | How | Path |
|---|---|---|
| GitHub Pages | `.github/workflows/deploy-pages.yml` runs on every push to `main` | `https://slittrell.github.io/portfolio-website/` |
| Firebase Hosting | Manual: `pnpm build && firebase deploy` (project `slittrell-demo`, serves `out/`) | Site root |
| Vercel | A v0/Vercel project appears to be linked (PR #6), but there is no config in this repo | Site root |

Pushing to `main` deploys to GitHub Pages, so changes go through a PR.

> TODO(Samuel): pick the canonical production URL and set `SITE.url` in
> `lib/data.ts` to match. It drives canonical links, Open Graph URLs, the
> sitemap, and robots.txt.
