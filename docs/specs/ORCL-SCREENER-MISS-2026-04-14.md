# ORCL Screener Miss Analysis — 2026-04-14

## Task

ORCL (Oracle Corp) moved significantly yesterday (2026-04-13) but did not appear in the screener results, even though it should have been flagged as a trading opportunity.

**Analyze:**
1. Why didn't ORCL appear in the screener yesterday?
2. Was it filtered out by technical criteria, or a data/catalyst integration issue?
3. What can be improved to catch high-momentum stocks like this going forward?

**Then fix/improve:**
- Screener logic (filter thresholds, criteria weighting)
- Catalyst feed integration (if ORCL had catalyst data but wasn't merged)
- Real-time decision triggers (should we catch intraday momentum faster?)

## Context

From prior review (2026-04-13):
- Catalyst feed stocks don't auto-appear in screener unless they're "recommended trades"
- Catalyst → screener merge is incomplete
- Decision polling is event-driven now (moved to WebSocket)
- Screener has no pagination/caching (risk of throttling)

## Files to Review

- `/Users/anto/localhost/stock-trader-sim/frontend/src/components/screener.vue` — Main screener logic
- `/Users/anto/localhost/stock-trader-sim/api/screener-api.js` — Backend filter logic
- `/Users/anto/localhost/stock-trader-sim/api/catalyst-feed.js` — Daily catalyst data
- `/Users/anto/localhost/stock-trader-sim/frontend/src/components/trading-market.vue` — Catalyst display
- `/Users/anto/localhost/stock-trader-sim/frontend/src/stores/screener-store.js` — State management

## Questions

1. Does ORCL's historical data show it met the screener's technical filters on 2026-04-13?
2. If yes: Why was it excluded? (Bug in filter logic, data timing issue, pagination cutoff?)
3. If no: What were the missing criteria? (RSI, volume, price, momentum thresholds?)
4. Was ORCL in the catalyst feed for 2026-04-13?
5. Should high-momentum stocks (big % moves) auto-trigger screener inclusion regardless of filters?

## Expected Output

- Root cause analysis (filter miss, data issue, timing problem, or design choice)
- 1–2 code fixes (filter adjustment, catalyst merge improvement, or momentum trigger)
- Recommendations for catching future high-momentum plays faster
