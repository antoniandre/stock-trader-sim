# Stock Trader Simulation

This monorepo contains:

- **api/** — Node.js trading bot (simulation) + REST API
- **frontend/** — Vue 3 dashboard with TailwindCSS + Chart.js

## Prerequisites
- Node.js >= 18
- pnpm package manager

## Quick start
```bash
# api
cd api
pnpm install
cp .env.example .env
pnpm dev

# frontend in new terminal
cd ../frontend
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) to view the dashboard 🚀
