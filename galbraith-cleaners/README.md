# Galbraith Professional Cleaners website

A server-rendered React site (React 19 + TanStack Start + Vite) that deploys as a
single Cloudflare Worker. No database, no accounts, no third party services: the
whole site is static content plus the scroll-driven film.

## What is inside

```
src/routes/__root.tsx        page metadata (title, description, social card, icons)
src/routes/index.tsx         the whole page: nav, chapters, services, quotes, hours, footer
src/scroll-scrub-scenes.ts   the four scroll chapters (headlines, copy, clip paths)
src/site.css                 brand colors, typography and every component style
src/components/scroll-scrub  the scroll playback engine (no need to edit)
public/assets/world          the film, cut into four clips, plus mobile versions and posters
public/assets                photos and textures used on the page
public/assets/brand          logo, icons, favicons, social card
```

Common edits:

- Hours, phone, address, services: `src/routes/index.tsx` (top of the file).
- Colors and fonts: the variables at the top of `src/site.css`.
- Scroll chapter text: `src/scroll-scrub-scenes.ts`.

## Run it locally

Requires Node 20+ (or Bun). Using Bun:

```bash
bun install
bun run dev        # http://localhost:5173
```

With npm: `npm install` then `npm run dev`.

## Deploy to Cloudflare on your own domain

1. Create a free Cloudflare account and add your domain to it (Websites, Add a
   site, then point your registrar at the Cloudflare nameservers).
2. From this folder:

```bash
bun install
bunx wrangler login
bun run deploy      # builds, then publishes the Worker
```

3. Attach the domain: Cloudflare dashboard, Workers & Pages, open
   `gbpdc-website`, Settings, Domains & Routes, Add custom domain, enter
   `galbraithprofessionaldrycleaners.com` (and `www.`). DNS records are created
   for you. You can also uncomment the `routes` block in `wrangler.jsonc` and
   redeploy.

The Workers free plan covers a site of this size. Static files are served from
`dist/client`, everything else is rendered by the Worker.

## Notes

- Fonts load from Google Fonts. To self host, download Outfit and IBM Plex Mono
  into `public/` and replace the `@import` at the top of `src/styles.css`.
- Security headers (including the policy that allows the video to play) live in
  `src/lib/security-headers.server.ts`.
- Images and the film were generated for this site and are yours to use.
