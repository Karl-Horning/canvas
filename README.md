# Canvas Content Styling Guide

A statically exported Next.js documentation site covering HTML and CSS patterns for Canvas LMS course content — headings, tables, layouts, buttons, icons, accessibility, and more.

**Live site:** [canvas.karlhorning.dev](https://canvas.karlhorning.dev)

## Background

Working in further and higher education, I noticed recurring problems in Canvas course content: missing semantic tags, poor colour contrast, overuse of legacy elements that could break at any point, and layouts that fell apart on mobile. I built a Canvas course to document best practices and give colleagues a reference they could copy from directly.

When moving jobs, I extracted that content into a standalone documentation site so it's available to staff at other institutions. The move also let me improve on what Canvas itself can't provide: a light/dark mode, syntax-highlighted code blocks with a copy button, and a filterable icon reference (the Canvas course had the full icon set, but with no way to search it).

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **Shiki** — syntax highlighting for code blocks
- **React Icons**
- **Fuse.js** — client-side fuzzy search
- Deployed to **GitHub Pages** via GitHub Actions with a custom domain

## Notable decisions

**Single source of truth for navigation** — `lib/nav.ts` drives the site nav, the footer sitemap, and the previous/next page buttons. No duplication.

**SEO** — Each page exports typed metadata via a shared `lib/siteMetadata.ts` helper (Open Graph, Twitter cards, canonical URLs). JSON-LD structured data is included on every page.

**CI/CD** — GitHub Actions builds and deploys to GitHub Pages on every push to `main`.

**Accessibility testing** — Playwright with `@axe-core/playwright` for automated WCAG checks alongside manual review. The site covers accessibility as a topic, so it needs to model the practices it recommends.

**Search** — Client-side fuzzy search with [Fuse.js](https://fusejs.io/). The index is built at compile time from each page's metadata — no build script, no external service. Supports `Cmd+K` / `Ctrl+K` from anywhere on the site.

**Filterable icon reference** — The full Instructure icon set (400+ icons) is rendered with a live filter input and a copy button on each entry, something not possible within Canvas itself.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
| --- | --- |
| `dev` | Start the development server |
| `build` | Production build (static export) |
| `start` | Start the Next.js server (run `build` first) |
| `lint` | Run ESLint |
| `test` | Run Playwright tests |
| `test:ui` | Run Playwright tests with the interactive UI |
| `check-links` | Check for broken links on the live site |
| `check-links:local` | Check for broken links on the local server |

## License

Released under the [MIT License](./LICENSE) by [Karl Horning](https://github.com/Karl-Horning).
