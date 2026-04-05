---
name: stock-trader-sim
description: Use the local stock-trader-sim HTTP API (Vue dashboard + Express) for portfolio, tickers, movers, historical bars, and market status. Call it when the user is working on this repo or wants trading context from their running dev server.
---

# Stock trader sim — agent playbook

For the **full phased backlog, user needs, standing orders, and approval gates**, read the repo root **`AGENTS.md`** (OpenClaw workspace charter). This skill is the API/tool cheat sheet; `AGENTS.md` is what to execute.

## Defaults

- API base: `http://localhost:3000/api` unless `STOCK_TRADER_API_BASE` is set (same value the snapshot returns as `apiBase`).
- Start stack: `api/` with `pnpm dev`, `frontend/` with `pnpm dev` (see repo `README.md`).
- **Ollama + OpenClaw**: keep OpenClaw on Ollama’s **native** API URL (e.g. `http://127.0.0.1:11434`), not `.../v1`, so tool calling works ([OpenClaw Ollama provider](https://docs.openclaw.ai/providers/ollama)). If models are not listed, set `OLLAMA_API_KEY=ollama-local` or run `openclaw onboard` and pick Ollama.

## Fast context (preferred)

One GET for account, positions, open-order count, market status, and route hints:

```bash
curl -sS "${STOCK_TRADER_API_BASE:-http://localhost:3000/api}/agent/snapshot"
```

## Core GET routes

| Use case | Route |
| -------- | ----- |
| Health / wiring | `/api/health` |
| Batch account + positions + orders + history | `/api/dashboard` |
| Single symbol (stock + position + symbol orders) | `/api/ticker/{SYMBOL}` |
| Paginated universe + prices | `/api/stocks?page=1&limit=50&search=` |
| OHLCV | `/api/stocks/{SYMBOL}/history?period=1D` |
| Gainers/losers | `/api/movers?market=stocks&direction=both&top=10` |
| Market clock | `/api/market-status` |

## Workspace layout (for code changes)

- `api/stockbot.js` — HTTP + WebSocket entry.
- `api/rest-api.js` — REST surface (including `/api/agent/snapshot`).
- `api/services/trading-service.js` — broker interface; Alpaca impl in `api/services/alpaca-trading-service.js`.
- `frontend/src` — Vue 3 UI, charting, composables.

## Orders (market only)

```bash
curl -sS -X POST "${STOCK_TRADER_API_BASE:-http://localhost:3000/api}/orders" \
  -H "Content-Type: application/json" \
  -d '{"symbol":"AAPL","qty":1,"side":"buy","type":"market"}'
```

## Limits agents should respect

- Real-money and paper trading depend on `ALPACA_BASE_URL` and keys in the server `.env`.
- Limit/stop order types from the UI may be disabled until the API supports them.

## Optional OpenClaw workspace hint

If this repository is not the OpenClaw workspace root, add an extra skill dir pointing here (see [Skills](https://docs.openclaw.ai/tools/skills)) via `skills.load.extraDirs` in `~/.openclaw/openclaw.json` so this skill stays visible.
