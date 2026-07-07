# AGENTS.md

Concise instructions for agents working on `balancedscale.com`.

Balanced Scale Media's website is a one-page digital media company site. It is built with SolidJS + SolidStart, rendered server-side, and deployed to Cloudflare Pages.

## Tech stack

- SolidJS 1.9.x + SolidStart 1.1.x (Vinxi), file-based routing
- TypeScript strict mode
- Tailwind CSS v4
- SSR on Cloudflare Pages
- Google Analytics ID `G-G44R3QY849` hardcoded in `src/entry-server.tsx`

## Setup

```bash
npm install
npm run dev
```

Requires Node.js >= 22. The dev server runs on port 5000.

## Build, run, and type-check

```bash
npm run build
npm run start
npx tsc --noEmit
```

Use `npx tsc --noEmit` as the quality baseline.

## Code style

- TypeScript strict mode; no `any`. Use `unknown` for genuinely unknown types.
- Relative imports only.
- Dark theme, mobile-first.

## Reminders

- The Google Analytics ID in `src/entry-server.tsx` is hardcoded; don't change it.
- Don't edit `public/_headers` security headers blindly.
- Don't re-add the removed "puts artists first" tagline.

No test framework and no ESLint config are committed; don't add either without explicit sign-off.
