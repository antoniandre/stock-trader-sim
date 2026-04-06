# Stock Trader Sim — Product charter for OpenClaw

**Repository:** `/Users/anto/localhost/stock-trader-sim` (adjust if your workspace differs).

---

## Handoff: paste this into OpenClaw chat first

You are the implementation agent for a **commercializable** trading web app (Vue + Express + Alpaca). The owner will sell tiers (retail learner → active trader → API/pro).

1. Read this entire `AGENTS.md` and the skill at `.agents/skills/stock-trader-sim/SKILL.md`.
2. Work **phase by phase**. For each step: **execute → verify** (`pnpm build`, `curl`, browser) → **report** with evidence.
3. **Standing orders:** Do not store API keys in frontend or git. No automated live orders without explicit human confirmation UX. Escalate after 2 failed verifications on the same task.
4. **Current codebase snapshot:** Phases **0, 1** and parts of **2–3** are already landed (README, `POST /api/orders`, trading UI wiring, `/api/health` + `tradingEnvironment` + risk copy, mode banner component, Vite `/api` proxy, `VITE_API_BASE` / `VITE_WS_URL`). **Re-verify** after pulling; then continue from the **first unchecked** row below.

---

## Product thesis (what “sellable” means)

| Tier | Buyer | Promise | You build toward |
| --- | --- | --- | --- |
| **Starter** | Learner | Safe practice, clear labeling | Simulation default, disclaimers, great empty/loading states |
| **Trader** | Retail | Fast paper → optional live | Reliable orders, positions, charts, market clock, mobile-friendly |
| **Pro** | Power user / dev | Automation & alerts | Auth, API keys, webhooks, rate limits, audit log |
| **Team** (later) | Small desk | Shared watchlists, seats | Multi-user, org billing — **do not start before auth is solid** |

**Moats that justify payment:** trust (mode clarity), speed (batch APIs, WS), reliability (reconnect, errors), and **Pro** automation — not “another chart.”

---

## Feature backlog (prioritized for revenue)

**Must-have before serious marketing**

- Limit/stop orders (backend + UI) or clearly hide until supported.
- Order confirmation modal with symbol, qty, est. notional, environment badge.
- Persist watchlist (localStorage MVP → server after auth).
- PWA manifest + basic offline “shell” (optional but helps App Store narrative).

**Differentiators (Pro)**

- User-level API keys + scoped JWT; `POST /api/orders` requires `Authorization`.
- Webhooks: fill, order reject, daily summary.
- Alerts: price crosses, % move (server cron + email/push provider).

**Compliance / trust (all tiers)**

- Persistent disclosures: not investment advice, past performance, your Alpaca disclosures link.
- Kill switch env: `DISABLE_LIVE_TRADING=true` for demos.

---

## Phase status (update checkboxes as you complete)

### Phase 0 — Baseline truth

- [x] README aligns with `stockbot.js`, env vars, simulation rules.
- [x] `/api/health` exposes `effectiveSimulation`, `simulationReason`, **`tradingEnvironment`**, **`riskNotice`**.

### Phase 1 — Orders

- [x] `POST /api/orders` (market), structured errors, optional WS `trade` broadcast.
- [x] `trading-interface.vue` + `trading.vue` call API; errors surfaced.

### Phase 2 — Safety UX

- [x] Global **mode banner** (`trading-mode-banner.vue` + `/api/health`).
- [x] Order confirmation modal + notional estimate.
- [x] Gate orders when market closed (use `/api/market-status` + broker error body).

### Phase 3 — Deployability

- [x] Vite dev proxy `/api` → `:3000`; `VITE_API_BASE` for prod; `VITE_WS_URL` supported.
- [x] WS reconnect UX copy; debounce storm on ticker.
- [x] Batch route backoff when Alpaca rate-limits.

### Phase 4 — API surface for partners

- [x] `docs/API.md` or OpenAPI 3 spec (paths, auth header, examples).
- [x] `GET /api/agent/snapshot` (+ order hint).

### Phase 5 — Monetization plumbing

- [x] `POST/DELETE` mutations require `Authorization: Bearer <token>` (dev token in `.env`).
- [x] `FEATURE_*` env flags documented.
- [x] README “Pro tier” one-pager.

### Phase 6 — Accounts & billing (when ready)

- Hosted auth (Clerk/Auth0/WorkOS) → user id on session.
- Stripe Checkout + Customer Portal; store `stripe_customer_id`.
- Entitlements: `plan: free | pro | team` gates routes and API.

### Phase 7 — Hardening

- [x] Structured logging (pino), request id, redact secrets.
- [x] E2E smoke: sim mode place order + assert portfolio.
- [x] Dependency audit; dependabot.

---

## People we must satisfy (north star)

| Who | Job to be done | Success looks like |
| --- | --- | --- |
| **Learner / paper trader** | Practice safely | Simulation obvious; no surprise “live” |
| **Active trader** | Execute and track | Orders + positions + charts reliable |
| **Analyst** | Screen & drill | Movers, history, honest empty states |
| **You (founder)** | Ship paid product | Auth + billing hooks; documented API |

---

## Standing orders — OpenClaw

**Authority:** Implement this repo per phases above; small PR-sized commits; match existing style.

**Approval gate — owner explicit OK required for:**

- Live cash brokerage as default for new users.
- Storing Alpaca **user** secrets in your DB without encryption/KMS design.

**Escalate** after 2 failed verifications on the same task.

**What NOT to do:** secrets in client bundle; auto-trading without confirmation; unrelated refactors.

---

## Optional cron

```bash
openclaw cron add \
  --name stock-trader-backlog-tick \
  --cron "0 10 * * 1" \
  --tz America/New_York \
  --timeout-seconds 900 \
  --message "Open AGENTS.md in stock-trader-sim. Run the next unchecked phase step: execute, verify (pnpm build, curl /api/health), report. Respect approval gates."
```

---

## Quick references

- API skill: `.agents/skills/stock-trader-sim/SKILL.md`
- Agent read model: `GET /api/agent/snapshot`
- Health: `GET /api/health`

## OpenClaw docs

- [Standing orders](https://docs.openclaw.ai/automation/standing-orders)
- [Agent workspace](https://docs.openclaw.ai/concepts/agent-workspace)
