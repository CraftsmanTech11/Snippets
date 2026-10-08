# Free Resources for Developers
**Compiled from recent X posts & verified details — October 2026**

This document aggregates unique free-tier offerings for hosting, compute, databases, and related developer tools. Focus is on resources suitable for personal and side projects. Duplicates have been removed. Limits and availability change frequently — always verify on the official site. Many “free forever” tiers still have usage caps, sleep/idle policies, or regional restrictions. No credit card is required for most of the free plans listed unless noted.

---

## 1. Master Directory / Aggregator

### free-for-dev
- **Description**: Community-maintained list of SaaS/PaaS/IaaS services with genuine free tiers (minimum ~1 year or permanent; short trials generally excluded).
- **Coverage**: Major clouds, CI/CD, databases, monitoring, DNS, email, authentication, and more.
- **Notes**: Actively updated by 1,600+ contributors. Best starting point for any new project.
- **Links**:
  - GitHub: https://github.com/ripienaar/free-for-dev
  - Website: https://free-for.dev

---

## 2. Free Compute / VPS-like / IaaS

### Oracle Cloud Always Free
- **Description**: Permanent free tier (subject to capacity and idle reclamation).
- **Key Limits** (as of mid-late 2026 reports; some sources note a reduction):
  - Ampere A1 (ARM): up to ~2 OCPU + 12 GB RAM total (or split across VMs)
  - 2 × AMD micro VMs (1/8 OCPU + 1 GB each)
  - 200 GB block storage total
  - ~10 TB outbound data per month
  - 2 Always Free Autonomous Databases
- **Notes**: Signup can be strict (identity verification common). Capacity shortages frequent in popular regions. Idle instances may be reclaimed.
- **Link**: https://www.oracle.com/cloud/free/

### Railway Free VM (no account required)
- **Description**: Instant Linux VM via SSH command.
- **Key Specs**: 2 vCPU, 2 GB RAM. Pre-installed coding agents (Claude Code, Codex, Cursor CLI, etc.).
- **Limits**: ~60-minute build window + 24-hour claim window. Limited daily per IP. Unclaimed boxes are free; claim to keep permanently.
- **Link**: https://railway.com/free-vm

### Prisma Compute (+ Prisma Postgres)
- **Description**: TypeScript app hosting that scales to zero + managed Postgres. No credit card required. Free forever plan.
- **Key Limits**:
  - Compute: 1M requests/month, 360 GB-hours memory, 4 active vCPU-hours, 10 GB outbound bandwidth
  - Postgres: 200k operations/month, ~1.01 GB storage, 50 databases
- **Notes**: Ideal for small TypeScript / Node / Next.js projects. Not a traditional always-on dedicated VPS.
- **Link**: https://www.prisma.io/ (Pricing: https://www.prisma.io/pricing)

---

## 3. PaaS / Full-Stack App Hosting

### Vercel (Hobby plan)
- **Description**: Free for personal and side projects. Excellent for frontends and serverless functions.
- **Key Limits**: ~1M function invocations, 100 GB fast data transfer, 4 CPU-hrs / 360 GB-hrs memory, image optimisation quotas. Deployment retention and storage limits apply.
- **Link**: https://vercel.com

### Render (Hobby / Free)
- **Description**: Free web services, static sites, and limited databases.
- **Key Limits**: 750 free instance hours/month. Services sleep after ~15 minutes of inactivity (cold starts ~1 minute). Free Postgres expires after 30 days / limited storage.
- **Notes**: Good for testing and hobby projects; not ideal for always-on production.
- **Link**: https://render.com

### Netlify (Free plan)
- **Description**: Free forever with credit-based limits.
- **Key Limits**: Typically 300 credits/month covering deploys, bandwidth, requests, and compute. Custom domains + SSL, functions, deploy previews included.
- **Link**: https://www.netlify.com

### Appwrite Cloud (Free plan)
- **Description**: Open-source Backend-as-a-Service (auth, database, storage, functions).
- **Notes**: Limits are shared across projects (usually 1 organisation + limited projects on free).
- **Link**: https://appwrite.io

---

## 4. Databases & Backend Services

### Supabase (Free plan)
- **Description**: Postgres + Auth + Storage + Edge Functions.
- **Key Limits**: ~0.5 GB database, 1 GB file storage, 5 GB egress, 50k monthly active users, 2 active projects. Projects pause after ~1 week of inactivity.
- **Link**: https://supabase.com

### Prisma Postgres
- Bundled with the free Prisma Compute plan (see above).

### Firebase (Spark plan)
- Free tier for hosting, Authentication, Firestore (with limited quotas), etc.
- **Link**: https://firebase.google.com

---

## 5. Static Sites, Frontend Hosting & CDN

### Cloudflare Pages (+ Workers free tier)
- **Description**: Excellent free static hosting + global CDN.
- **Key Limits**: Unlimited static bandwidth/requests. 500 builds/month, 20,000 files, 100 custom domains per project. Dynamic Pages Functions count against Workers free limits (~100k requests/day, 10 ms CPU).
- **Also free**: DNS, SSL, Tunnel, and more.
- **Link**: https://pages.cloudflare.com

### GitHub Pages
- Free static site hosting from public repositories (available on GitHub Free).
- Custom domains supported.
- **Link**: https://pages.github.com

### Surge
- Extremely simple static hosting from the terminal. Free tier available.
- **Link**: https://surge.sh

### InfinityFree
- Free traditional PHP + MySQL shared hosting (useful for classic web projects and learning).
- **Note**: Verify current terms and reliability.

---

## 6. Major Cloud Free Tiers (Additional Highlights)

### Amazon Web Services (AWS)
- Lambda: 1 million requests/month and more.
- Other services with free tier (some 12-month, some always-free).
- **Link**: https://aws.amazon.com/free/

### Google Cloud
- Cloud Run: 2 million requests/month + compute seconds.
- App Engine, Cloud Functions, limited Compute Engine e2-micro, etc.
- **Link**: https://cloud.google.com/free

### Microsoft Azure
- Functions: 1 million requests.
- Static Web Apps, limited App Service, and more.
- **Link**: https://azure.microsoft.com/free/

---

## 7. Other Notable Mentions

- **Self-hosted free/open-source**: Nextcloud (or similar) on any old PC/Ubuntu for a private cloud.
- **Free trials with real VPS resources** (time-limited or money-back): Kamatera (~30 days / $100 credit), Cloudways (short no-CC trial), Hostinger, IONOS.
- Common free stack components often combined with the above: Nginx, SQLite, Cloudflare Tunnel, Tailscale, GitHub Actions (free minutes on public repos), etc.

---

## Quick Tips

- Start with **free-for-dev** for the broadest and most up-to-date list.
- For true always-on Linux VMs, Oracle Cloud (when capacity is available) or the temporary Railway free-VM are the closest matches to a traditional free VPS.
- Serverless / platform options (Prisma, Vercel, Cloudflare, Supabase, Railway) are usually easier and more reliable for modern applications.
- Watch for idle reclamation, sleep policies, and region/signup barriers (especially relevant for users in restricted regions).
- Always read the current pricing and limits page plus the terms of service before building anything critical on free tiers.

---

*This compilation prioritises resources highlighted in related posts while adding verified details for accuracy. For the absolute latest numbers, visit the official links.*
