# BlackBlog

> Futuristic Obsidian-style blog — Next.js front end that renders markdown notes with Tailwind.

| | |
|---|---|
| **Status** | Scaffolding — framework wired, no published content yet |
| **Stack** | Next.js, React, Tailwind CSS, Obsidian note parsing |
| **Repo** | [supershxck/blackblog](https://github.com/supershxck/blackblog) |

## Purpose

Personal publication site with an Obsidian-native feel: sidebar navigation, note cards, tag cloud, and search over markdown vault exports. Consolidation candidate alongside `jamstack-blog` — this is the preferred Next.js stack.

## Current state

- Layout, sidebar, note card components
- `lib/obsidian.js` for vault parsing
- Index page scaffold

## Work in progress

- [ ] Import real note corpus and design system
- [ ] SEO, sitemap, RSS
- [ ] Newsletter hook (ConvertKit / Beehiiv)
- [ ] Deploy to Vercel

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Copy `.env.example` to `.env.local` if you add environment-based vault paths.