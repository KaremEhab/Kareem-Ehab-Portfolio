# Karem Ehab — UI/UX Designer

The source for Karem Ehab's responsive design portfolio.

## Project structure

- `dist/` — production-ready HTML, CSS, JavaScript, and image assets
- `scripts/verify-build.mjs` — validates required production files
- `vercel.json` — Vercel build, routing, caching, and security configuration

## Local development

Requires Node.js 20 or newer.

```bash
npm run dev
```

The local server prints the address to open in your browser.

## Validate the production build

```bash
npm run build
```

## Deploy to Vercel

Import this GitHub repository into Vercel or deploy it with the Vercel CLI:

```bash
npx vercel --prod
```

Vercel runs the build validation and publishes the contents of `dist/`.
