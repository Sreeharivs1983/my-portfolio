# Sreehari V S — Portfolio

A single-page React + Tailwind portfolio, styled around a developer's
terminal: a typed code-object hero, terminal-style project cards, and a
dark navy/amber palette.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy (Vercel — free, matches the reference site)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel usually detects this automatically).
4. Deploy. You'll get a live `.vercel.app` URL; you can attach a custom
   domain later from the project settings.

## Editing content

- **Hero bio / tagline** — `src/components/Hero.jsx`
- **Featured projects** — `src/components/Projects.jsx` (the `FEATURED`
  array — add/edit `name`, `description`, `stack`, `live`, `github`)
- **Skills** — `src/components/Skills.jsx`
- **Contact links** — `src/components/Contact.jsx`
- **Colors/fonts** — `tailwind.config.js` and the Google Fonts link in
  `index.html`

## Notes

- No images are required — the design leans on typography and
  terminal-style UI instead of screenshots, so there's nothing to swap
  out later if you don't have project screenshots ready.
- Respects `prefers-reduced-motion` (skips the hero typing animation).
