# Tekitera

Official website for **Tekitera** — a Paris-based digital product studio crafting exceptional software and digital experiences.

Built with [Next.js](https://nextjs.org) (App Router + TypeScript + Tailwind) and deployed on Vercel.

## Tech Stack

- Next.js 16
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

This site is continuously deployed to Vercel **from GitHub**.

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to deploy on pushes to `main` using the official Vercel action.

### Initial Setup (one-time)

1. **Import the repo to Vercel** (this creates the Vercel project and performs the first deploy):
   - Go to https://vercel.com/new/import
   - Select the `Karoffski/tekitera.com` GitHub repository.
   - Vercel will auto-detect Next.js and deploy it. Note the production URL.

2. **Add GitHub Secrets** (for automated deploys from the workflow):
   - In Vercel: Go to your project → Settings → General. Copy:
     - `VERCEL_ORG_ID` (or Team ID)
     - `VERCEL_PROJECT_ID`
   - Create a Vercel access token: Vercel dashboard → Account → Settings → Tokens (create one with appropriate scope for the team/project).
   - In GitHub: Go to the repo → Settings → Secrets and variables → Actions → New repository secret. Add three secrets:
     - `VERCEL_TOKEN` = the token you created
     - `VERCEL_ORG_ID` = the org/team ID
     - `VERCEL_PROJECT_ID` = the project ID

3. Push to `main` (or merge a PR). The workflow will deploy to production.

The workflow also runs on PRs (preview deployments if you adjust the action args).

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```