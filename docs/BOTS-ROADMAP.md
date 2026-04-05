# Bots Roadmap

## Purpose

This roadmap defines how the product can evolve from a manual trading UI into a safer automation platform without violating the standing order that there must be **no automated live orders without explicit human confirmation UX** unless the product intentionally graduates into a guarded automation tier.

The goal is not to promise profits. The goal is to provide:

- useful market awareness
- safer decision support
- draft-order workflows
- eventually tightly controlled automation

## Principles

1. **Do not sell "money-making bots" as a promise.** Sell automation tooling, alerts, and execution workflows.
2. **Paper first, live later.** Every automation feature should work in simulation/paper before it can touch live.
3. **Approval before autonomy.** Draft-order workflows come before hands-off live execution.
4. **Every action must be explainable.** Users should be able to see why a bot alerted, drafted, or traded.
5. **Risk policy outranks strategy logic.** Safety checks should be enforced even if the strategy says trade.

## Capability ladder

The product should evolve in four levels.

---

## Level 0 — Foundations (required before meaningful bot work)

These are prerequisites.

### Required platform pieces

- broker abstraction
- market data provider abstraction
- auth on mutations
- environment/mode labeling everywhere
- audit logging for all strategy events
- feature flag system
- kill switch env + user-level pause controls
- scheduler / job execution substrate
- notification plumbing
- stable error taxonomy

### Data needed

- quotes / bars / clock access
- positions and account data
- order-state updates
- symbol metadata

### Deliverables

- `strategies` domain model
- `strategy_runs` or `bot_runs` log
- `alerts` storage
- `draft_orders` storage
- route/service boundaries that do not tie bots directly to UI components

### Monetization relevance

This is invisible to users, but it is what makes later paid automation credible.

---

## Level 1 — Alert-only bots

### Goal

Detect conditions and notify the user. No order submission.

### Why ship this first

- safe
- useful immediately
- low regulatory and trust burden compared with auto-execution
- excellent paid-beta feature

### Candidate alert types

- price above/below threshold
- intraday % move
- unusual volume
- moving-average crossover
- RSI overbought/oversold
- portfolio drawdown alert
- earnings/date proximity alert later

### Required components

- alert rules model
- watchlist/tracked symbols support
- scheduler or streaming evaluator
- cooldown / dedupe rules
- delivery channels (in-app, email, webhook, push later)
- alert history page

### UX

Users should be able to:

- create an alert from ticker view
- see whether it is active
- see the last trigger time
- pause/delete alerts
- inspect why it fired

### API ideas

- `POST /api/alerts`
- `GET /api/alerts`
- `DELETE /api/alerts/:id`
- `POST /api/alerts/:id/pause`

### Revenue angle

This is a strong **Pro Lite** feature:

- free tier: limited alert count, in-app only
- paid tier: more alerts, webhook/email delivery, advanced conditions

---

## Level 2 — Draft-order bots

### Goal

Strategies can create a proposed order, but a human must confirm before submission.

This aligns well with the current product safety posture.

### Why this matters

This is where the product becomes more than dashboards and alerts. It becomes a workflow engine.

### What a draft order is

A draft order is not yet sent to the broker. It contains:

- symbol
- side
- quantity / sizing rule
- intended order type
- estimated notional
- strategy reason
- expiration time
- environment context
- broker/data-provider context

### Example flows

- "If AAPL crosses above 200, draft a buy for 5 shares."
- "If portfolio drawdown exceeds 5%, draft partial exits for open positions."
- "At market open, draft gap-follow setup if criteria match."

### Required components

- strategy evaluator
- draft-order store
- approval UI
- expiration / invalidation logic
- recheck market clock + risk + entitlement on approval
- broker-side validation before final submit

### UX requirements

Each draft should show:

- why it was created
- what market conditions triggered it
- what the estimated notional is
- whether the market is open
- which broker will execute it
- a clear confirm/reject action

### Important rule

Draft approval must re-validate:

- market open/closed state
- account buying power
- symbol tradability
- feature entitlement
- live-trading kill switch

### Revenue angle

This is a compelling paid feature because it gives users automation assistance without requiring them to trust full autonomy.

---

## Level 3 — Guarded auto-trading

### Goal

Allow pre-authorized automation within strict, reviewable limits.

This should not be the first automation release.

### Guardrails required before launch

- explicit user opt-in
- paper-first validation
- per-strategy environment control (paper only vs live allowed)
- max daily loss
- max order notional
- max position size
- symbol allowlist
- allowed trading sessions/hours
- cooldown between orders
- max consecutive failures before auto-pause
- stop-all switch
- full audit log

### Product policy layer

The product must have a policy engine that can veto strategy actions.

Example policy checks:

- live trading globally disabled
- strategy not entitled for live
- market closed
- risk thresholds exceeded
- account unavailable
- provider degraded
- unusual slippage condition

### Required runtime records

- strategy definition
- latest config version
- each evaluation result
- each blocked action
- each submitted order
- broker response / reject reason
- pause/resume events

### UX requirements

Users need:

- strategy detail page
- status: active / paused / blocked / error
- reason for last action
- last evaluation time
- current risk budget usage
- emergency pause button

### Revenue angle

This is premium/pro territory. It is where API/webhook/business pricing becomes plausible.

### Compliance / trust note

Do not market this as "guaranteed profit" or "money-making bots." Market it as guarded automation tooling.

---

## Level 4 — Strategy platform

### Goal

Turn automation into a reusable platform surface.

Possible additions:

- webhook-triggered strategies
- API-created strategies
- reusable templates
- journaling and performance review
- team policies later
- versioned strategies
- event replay / dry-run debugging

### Who it is for

- power users
- developers
- quant-curious retail traders
- small trading teams later

This is the stage where the platform begins to deserve a serious Pro tier.

---

## Safety system design

All levels above alert-only need a common safety system.

### Suggested policy engine inputs

- account status
- broker capabilities
- market clock
- product environment
- user plan / entitlements
- strategy config
- current positions
- recent order failures
- daily realized/unrealized P&L budget

### Suggested policy outputs

- `ALLOW`
- `BLOCK_MARKET_CLOSED`
- `BLOCK_NOT_ENTITLED`
- `BLOCK_DAILY_LOSS_LIMIT`
- `BLOCK_POSITION_LIMIT`
- `BLOCK_PROVIDER_UNAVAILABLE`
- `BLOCK_LIVE_DISABLED`
- `BLOCK_REQUIRES_HUMAN_APPROVAL`

## Suggested data model

High-level entities:

- `alerts`
- `strategies`
- `strategy_versions`
- `strategy_runs`
- `draft_orders`
- `automation_policies`
- `execution_events`
- `notification_events`

## Recommended build order for this repo

### Milestone 1 — Alerts MVP

Ship first:

- threshold alerts
- in-app history
- webhook/email later
- watchlist integration

This gives the fastest monetizable outcome.

### Milestone 2 — Draft-order engine

Ship second:

- strategy evaluator
- draft-order queue
- approval UX
- audit trail

This matches the current product safety posture.

### Milestone 3 — Guardrails + policy engine

Before any true auto-execution:

- risk policies
- pause controls
- failure handling
- entitlement checks

### Milestone 4 — Paper auto-trading only

Allow autonomous execution in simulation/paper before live.

This is the safest proving ground.

### Milestone 5 — Live guarded automation

Only after paper mode proves stable and product controls are trustworthy.

## What not to do

Avoid these traps:

- claiming profitability
- adding live auto-trading before audit logs exist
- letting strategies place orders with no policy engine
- mixing alert logic directly into frontend code
- allowing bots to bypass the same auth and safety rails as manual trading

## Commercial positioning

The most credible story is:

- **Starter:** simulation + alerts
- **Trader:** paper/live cockpit + persistence + richer alerts
- **Pro:** draft-order automation, webhooks, guarded execution, API access

That progression is both safer and easier to explain than jumping straight to "AI bot trader."

## Summary recommendation

Do this in order:

1. alert-only bots
2. draft-order bots
3. guarded automation in paper mode
4. guarded automation in live mode

That path creates real user value while preserving trust, product safety, and monetization potential.
