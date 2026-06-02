# Tekitera

Official website for **Tekitera** — a Paris-based digital product studio crafting exceptional software and digital experiences.

Built with [Next.js](https://nextjs.org) (App Router + TypeScript + Tailwind) and deployed on Vercel.

**Live:** https://tekitera.vercel.app

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

This site is deployed to Vercel and set up for continuous deployment **from GitHub**.

### Production Deployment

Successfully deployed using `vercel --prod`:

- **Production URL:** https://tekitera.vercel.app
- **Vercel Project:** karoffski-s-projects/tekitera
- **Project ID:** prj_B8Y7qM0MCHdvTXzFeUjcWtpkajvb
- **Org/Team ID:** team_ShnYgtfde8K3OjSuhjeQQS1n

A GitHub Actions workflow (`.github/workflows/deploy.yml`) + `vercel.json` are configured for Git-triggered deploys.

### Initial Setup for GitHub Deploys (one-time)

1. The Vercel project is already created (via CLI deploy).

2. **Add GitHub Secrets** (for the workflow to deploy to this project):
   - In Vercel dashboard: https://vercel.com/karoffski-s-projects/tekitera → Settings → General. Copy the IDs above.
   - Create a Vercel access token (Account → Settings → Tokens).
   - In GitHub repo → Settings → Secrets and variables → Actions, add:
     - `VERCEL_TOKEN`
     - `VERCEL_ORG_ID` = team_ShnYgtfde8K3OjSuhjeQQS1n
     - `VERCEL_PROJECT_ID` = prj_B8Y7qM0MCHdvTXzFeUjcWtpkajvb

3. (Recommended) Connect Git repo in Vercel dashboard (Settings → Git) for official previews on PRs etc. The custom workflow will handle prod deploys.

4. Push to `main` to trigger deploy via GitHub Actions.

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