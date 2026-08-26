# OnSolve — BPO & Strategic Outsourcing Website

The official marketing website for **OnSolve**, a process-driven Business Process Outsourcing (BPO) company. Built as a fast, SEO-friendly single-page-plus-dynamic-routes site that showcases services, drives consultations, and communicates OnSolve's "process-first" value proposition.

## 📖 About

OnSolve helps businesses optimize operations, cut costs, and scale faster with reliable outsourcing delivered by a dedicated team of experts. Rather than just taking tasks off clients' plates, OnSolve re-engineers them — documenting every workflow, measuring every metric, and continuously improving outcomes.

This website presents the company's story, its 12 service lines, key differentiators, stats (30+ happy clients, 50+ projects, 5+ years of experience), team, blog, and contact channels.

## ✨ Features

- **Hero section** with mouse-parallax photo scene, spinning 3D CSS cube of service icons, and floating stat cards
- **12 dynamic service pages** (`/services/[slug]`) generated from a typed service catalog — each with features list, ROI note, related-services sidebar, and per-page SEO meta
- **Full homepage sections**: About, Services grid, Why Us, Projects, Team, Contact, Blog
- **Custom `v-reveal` directive** — scroll-triggered reveal animations via `IntersectionObserver` (SSR-safe)
- **`<Tilt3D>` component** — interactive 3D tilt-on-hover cards
- **SEO-ready** — global meta in `nuxt.config.ts`, `useSeoMeta()` per page, semantic HTML, lazy-loaded images
- **Fully responsive** layout with mobile breakpoints across all sections
- **Zero heavy dependencies** — pure Vue + scoped CSS, no UI framework or CSS library

## 🛠 Tech Stack

| Layer      | Technology |
|------------|------------|
| Framework  | [Nuxt 4](https://nuxt.com) (Vue 3.5, TypeScript) |
| Language   | TypeScript / Vue SFC |
| Styling    | Scoped CSS + global CSS variables (`app/assets/css/main.css`) |
| Animations | Custom IntersectionObserver plugin, CSS 3D transforms/keyframes |
| Routing    | Nuxt file-based routing (`app/pages/`) |
| State/Data | Composables (`app/composables/useServices.ts`) |

## 📁 Project Structure

```
├── app/
│   ├── app.vue                  # Root component
│   ├── assets/css/main.css     # Global styles & design tokens
│   ├── components/
│   │   ├── HomeHero.vue        # Hero w/ parallax & 3D cube
│   │   ├── HomeServices.vue    # Services grid
│   │   ├── HomeWhyUs.vue       # Differentiators
│   │   ├── HomeProjects.vue    # Portfolio/projects
│   │   ├── HomeTeam.vue        # Team section
│   │   ├── HomeContact.vue     # Contact section
│   │   ├── HomeBlog.vue        # Blog preview
│   │   ├── SiteHeader.vue      # Nav bar
│   │   ├── SiteFooter.vue      # Footer
│   │   └── Tilt3D.vue          # Reusable 3D tilt wrapper
│   ├── composables/
│   │   └── useServices.ts      # Typed service catalog + stats
│   ├── layouts/default.vue     # Header + page + footer shell
│   ├── pages/
│   │   ├── index.vue           # Homepage
│   │   └── services/[slug].vue # Dynamic service detail pages
│   └── plugins/reveal.ts       # v-reveal scroll-animation directive
├── nuxt.config.ts              # App config, global SEO meta
├── run                         # One-command dev launcher script
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation & Development

```bash
npm install
npm run dev
```

Or use the bundled launcher (installs deps if missing, then starts dev server):

```bash
./run
```

Visit **http://localhost:3000**

### Production Build

```bash
npm run build
npm run start        # serves .output/server/index.mjs
```

Or in one step:

```bash
npm run deploy
```

### Static Site Generation

```bash
npm run generate
```

## 🔧 Available Scripts

| Script               | Description                          |
|----------------------|--------------------------------------|
| `npm run dev`        | Start dev server on port 3000        |
| `npm run build`      | Build for production                 |
| `npm run start`      | Run the production server            |
| `npm run generate`   | Generate static site                 |
| `npm run preview`    | Preview the production build         |
| `npm run deploy`     | Build + start                        |
| `./run`              | Auto-install deps + start dev server |

## 🧩 Services Offered (site content)

BPO Outsourcing · Call Center Solutions · Customer Service Support · Data & Back Office Processing · Tech Support & IT Helpdesk · Telemarketing & Lead Generation · Administrative Services · Finance & Accounting Outsourcing · HR & Recruitment Support · E-commerce Support · Digital Marketing Operations · Research & Data Analytics

All service content is defined in [`app/composables/useServices.ts`](app/composables/useServices.ts) — adding a new entry automatically creates a new `/services/<slug>` page and updates the site grids.

## 📄 License

© OnSolve. All rights reserved.
