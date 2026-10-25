# VYBORA

**Your Universe of Entertainment.**

VYBORA is a frontend-first React + Vite + TypeScript entertainment discovery demo built from the supplied product brief. It intentionally works without a backend or API key and keeps shared state in Redux memory.

## Requirements
- Node.js 20+ recommended
- npm 10+

## Run
```bash
npm install
npm run dev
```
Open the Vite URL shown in the terminal.

## Quality checks
```bash
npm run build
npm run lint
npm run test
```

## What is implemented
- Premium dark cinematic homepage with hero, carousels and responsive navigation
- 43 local movie/series demo records and 20 music discovery records
- Search, type/genre filtering, detail pages, My List, watched state
- Mood discovery and Surprise Me
- Entertainment quiz and Redux-tracked discovery challenges
- Demo Login/Signup/Forgot Password with React Hook Form + Yup
- Protected Library/Profile/Settings routes
- Configuration-driven RBAC helpers
- Dark/light MUI themes and centralized CSS tokens
- Lazy-loaded routes, image loading/error fallback and error boundary
- Native Fetch API integration boundary; no Axios
- No localStorage/sessionStorage and no credentials/tokens in browser storage
- Vitest + React Testing Library test setup

## Content / artwork note
The local catalog is demo content. Movie artwork URLs point to TMDB image hosting for curated titles; a production deployment should use TMDB or another provider according to its current terms, attribution and client-side authentication rules. Some records use designed fallback artwork if an upstream image is unavailable. Music covers are original local VYBORA demo artwork and are not licensed album covers. No live music streaming is claimed.

## Vercel backend endpoints
This build also includes lightweight Vercel serverless endpoints in `api/` so the deployed project has a same-domain backend surface without requiring a separate server.
- `/api/health` — deployment health check
- `/api/catalog?q=inception` — demo catalog search endpoint
The main UI remains frontend-first and works from local demo data even when these endpoints are unavailable.

## API boundary
Set non-secret frontend configuration in `.env` using `.env.example`. A private API secret must not be shipped through Vite. For production, put secret-bearing integrations behind a trusted backend.

## State limitation
Favorites, watched state, auth, theme, quiz progress and challenges are intentionally in-memory Redux state. Refreshing the page resets them. A future backend should persist user data server-side.

## Troubleshooting
If the page appears blank, run `npm run build`, inspect the browser console, and confirm the Vite entry path is `src/main.tsx`. The app has an error boundary and local catalog fallback so missing API configuration should not blank the homepage.
