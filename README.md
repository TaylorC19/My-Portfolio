# Taylor Crouch — Portfolio

Personal portfolio site for Taylor Crouch, a Tokyo-based full-stack web engineer. Built with Next.js, TypeScript, and Tailwind CSS, with English/Japanese localization.

**Live site:** https://my-portfolio-taylorc19s-projects.vercel.app/

## Features

- Bilingual content (English / 日本語) with a single-click language toggle
- Responsive layout styled with Tailwind CSS
- Sections for top intro, experience, featured project, and contribution highlights
- Locale content driven by JSON files under `src/app/locale/`

## Tech Stack

- [Next.js 13](https://nextjs.org/) (App Router) + React 18
- TypeScript
- Tailwind CSS
- Font Awesome (icons)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

Prerequisites: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` — start the local development server
- `npm run build` — create a production build
- `npm run start` — run the production build locally
- `npm run lint` — run Next.js / ESLint checks

## Project Structure

```
src/app/
├── components/
│   ├── Contributions/      # Contribution highlight sections
│   ├── Experience/         # Experience timeline
│   ├── Projects/           # Featured project cards
│   └── footer.tsx
├── locale/
│   ├── en.json             # English copy
│   ├── ja.json             # Japanese copy
│   └── index.ts            # Locale helpers
├── fonts.ts                # Font configuration
├── layout.tsx              # Root layout + metadata
└── page.tsx                # Home page
```

## Editing Content

All user-facing text lives in `src/app/locale/en.json` and `src/app/locale/ja.json`. Update both files when adding or changing content so the language toggle stays in sync.

## Deployment

The site is deployed to Vercel. Pushes to the default branch trigger an automatic build and deploy.
