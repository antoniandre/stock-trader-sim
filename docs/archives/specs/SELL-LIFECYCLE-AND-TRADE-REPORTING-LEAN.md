# SELL-LIFECYCLE-AND-TRADE-REPORTING-LEAN

## Objective
Fix the day-trading bot so positions can actually close, then add a lean full trade lifecycle report showing open + close pairs, realized P&L, and core quality metrics.

Stay cost-effective. Minimal surface area, no overbuild.

## Evidence / current defect
- Existing strategy run log already shows repeated backtests with `tradeCount > 0` and `closingTradeCount: 0`.
- UI can show `Sell Now`, but bot/autonomous path is not reliably producing/executing a closing sell.
- This means we cannot trust reported profitability yet because many trades never complete.

## Constraints
- Do not claim or design for "always profitable". That is not realistic.
- Instead: ensure exits are generated and captured correctly, measure realized outcomes, and surface losing trades clearly.
- Keep existing confirmation and safety rules intact.
- No broad refactor. Patch the lifecycle.

## Required changes

### 1) Diagnose and fix close/exit lifecycle
Inspect the full buy -> hold -> sell path for the autonomous/day-trading flow.

Target areas likely involved:
- `api/day-trading-bot.js`
- `api/day-trading-backtest.js`
- `api/rest-api.js`
- any execution adapter / order routing touched by autonomous trading
- frontend trading market view only if the issue is display-only after backend is fixed

Expected outcome:
- A trade that opens can later emit a close/trim/sell action when exit conditions are met.
- Backtest summaries must increment `closingTradeCount` when a trade is actually closed.
- Realized P&L must be recorded on closed trades.
- If current logic can only `buy` and `hold`, add explicit exit evaluation with minimal change footprint.

### 2) Add full trade lifecycle records
Add or extend a lean data shape that can represent:
- trade id
- symbol
- risk profile
- side / entry side
- entry timestamp
- exit timestamp
- entry price
- exit price
- quantity
- gross P&L
- P&L %
- hold duration
- exit reason (target hit, trailing stop, stop loss, weakness, manual, end-of-session, etc.)
- confidence at entry (if available)
- confidence at exit (if available)

Use existing strategy run capture/logging where possible. Prefer extending current recorder over inventing a second tracking system.

### 3) Add lean reporting endpoint(s)
Create one lean API report endpoint, or extend an existing strategy report endpoint, so frontend can fetch completed trade analytics.

Minimum report payload:
- total trades
- closed trades
- open trades
- realized P&L total
- realized P&L %
- win rate
- average winner
- average loser
- profit factor
- expectancy per closed trade
- average hold duration
- best trade
- worst trade
- list of recent completed trades

Optional but useful if cheap:
- exit reason breakdown
- average entry confidence vs average exit confidence

### 4) Add lean frontend report view
Add a compact report section/card/table in the trading UI to show:
- headline metrics
- recent completed trades
- open trades still waiting for exit

Do not over-design. Reuse existing cards/tables/styles.

### 5) Verify with evidence
Need concrete proof in final report:
- at least one scenario/backtest where a trade opens and later closes
- `closingTradeCount` > 0
- realized P&L populated
- report endpoint payload example
- build/test results

## Implementation preference
- Reuse `strategy-runs.jsonl` and current strategy-run recorder if possible
- Avoid introducing database/schema complexity
- Avoid adding dependencies unless absolutely necessary

## Deliverable
1. Files changed
2. Root cause of missing sells
3. Evidence of completed buy+sell lifecycle
4. Example report metrics/payload
5. Commit hash
