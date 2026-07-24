# Zebra Kitchens

Kitchen design, supply and installation website for Zebra Kitchens, covering
Cheshunt, Hertfordshire and surrounding areas. Built with Next.js (App
Router) and Tailwind CSS, deployed as a static export to Cloudflare Pages.

This site was created by copying and rebranding the
[Zebra Trades](https://github.com/jasonkazakos-cpu/zebra-trades-website)
codebase, reusing its design system, layout and Cloudflare configuration
while replacing all trade-service content with kitchen-specific content.
It has its own independent Git history, Cloudflare Pages project and
domain configuration going forward.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static export in `./out`, matching the `wrangler.jsonc`
Cloudflare Pages configuration.

## Before going live

A few placeholders still need real values — see `data/site.ts`,
`components/ContactForm.tsx` (Formspree form ID) and `app/layout.tsx`
(production domain).
