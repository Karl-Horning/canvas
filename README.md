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

**Known Canvas contrast limitations** — A few of Canvas' own legacy colours (`muted`, `text-warning`, `btn-warning`, `alert-success`, `alert-error`) fail WCAG AA contrast (4.5:1) on Canvas' own white background. Rather than silently changing these to pass, the affected examples show Canvas' real colours with an explicit warning and exact contrast ratio, so the guide stays an accurate reference — see the [Introduction](https://canvas.karlhorning.dev/introduction) page for the current list. As a result, the Playwright accessibility suite has known, expected failures on the `/typography`, `/buttons`, and `/alerts` pages.

Every example on the site — Canvas' legacy classes and this guide's modern inline-style alternatives alike — always renders with a light background and dark text, regardless of this site's own light/dark mode, since Canvas has no dark theme of its own. Note that `tests/accessibility.spec.ts` only runs in Playwright's default light colour scheme — there is currently no dark-mode project, so a regression here wouldn't be caught by CI.

**Known issue:** code block comments use Shiki's `github-dark` theme colour, which fails AA contrast in this site's dark mode (unrelated to Canvas — not yet fixed).

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
