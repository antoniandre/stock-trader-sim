# Stock Trader Backend (Simulation Mode)

## Setup
```bash
cd backend
pnpm install
cp .env.example .env  # fill keys
pnpm dev
```
The API runs on **localhost:3000** and exposes:
- `GET /sim/portfolio` → simulated positions for the dashboard.

## Scripts
- `pnpm dev` — run with nodemon
- `pnpm start` — production mode

## Environment Variables
| Var | Purpose |
|-----|---------|
| `ALPACA_KEY` | Your Alpaca API key |
| `ALPACA_SECRET` | Your Alpaca secret |
| `ALPACA_BASE_URL` | Paper trading base URL |
| `ALPACA_DATA_STREAM` | WebSocket endpoint |
| `SIMULATION` | `true` to disable real orders |