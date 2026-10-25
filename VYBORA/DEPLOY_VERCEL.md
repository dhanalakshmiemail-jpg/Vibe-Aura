# VYBORA — Vercel Deployment

## Vercel settings
- Root Directory: `VYBORA`
- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## Local verification
```bash
npm install
npm run build
npm run lint
npm run test
```

## Backend endpoints
The project includes Vercel serverless functions:
- `/api/health`
- `/api/catalog?q=inception`

The main application does not require an external backend to render its demo catalog; Redux and mock services keep the demo independently runnable.

## Artwork guarantee
Entertainment images first try the configured TMDB artwork URL. If an upstream image is missing/unreachable, `PosterImage` generates an inline VYBORA fallback poster/backdrop so the UI never shows a broken image placeholder.
