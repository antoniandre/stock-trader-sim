# Trade cycle evidence report

Date: 2026-04-15 23:59 GMT+7

## Verdict

- The trades currently visible in the running system are **not live-cash trades**. They are **real broker-recorded fills in an Alpaca paper account**.
- Evidence: `/api/health` returned `simulation: false`, `effectiveSimulation: false`, `simulationReason: live_alpaca`, `tradingEnvironment: paper`, broker `Alpaca paper` at `2026-04-15T17:01:55.771Z`.
- So this is **not internal mock/simulation mode**, but it is also **not proof of live-money profitability**.
- Existing docs that imply the bot was already profit-validated in production are overstated.

## Evidence used

- Runtime API: `/api/health`, `/api/account`, `/api/account/activities?limit=200`, `/api/orders?status=all&limit=200`, `/api/positions`.
- Local code/config already reviewed earlier: `api/config.js`, `api/rest-api.js`, `api/services/strategy-run-recorder.js`, test harnesses, prior report/spec files.
- Historical backtest recorder: `api/data/strategy-runs.jsonl`.

## Environment verification

| Field | Value |
|---|---|
| health.status | `ok` |
| health.simulation | `False` |
| health.effectiveSimulation | `False` |
| health.simulationReason | `live_alpaca` |
| health.tradingEnvironment | `paper` |
| broker | `Alpaca paper` |
| riskNotice | `Alpaca paper — no real money, but real market data delays/feeds apply per Alpaca.` |

Interpretation: the server is connected to Alpaca, and order fills are broker-backed paper fills, not fake in-process mock trades. But they still do **not** prove live-cash performance.

## Account snapshot

| Field | Value |
|---|---|
| account_number | `PA343CO5TGAB` |
| status | `ACTIVE` |
| buying_power | `300121.6` |
| cash | `35141.43` |
| portfolio_value | `103285.29` |
| equity | `103285.29` |
| pattern_day_trader | `True` |
| trading_blocked | `False` |

## Completed BUY+SELL cycles reconstructed from visible fills

Method: I grouped fill activities by `order_id`, computed weighted average fill prices, then matched buys to later sells FIFO per symbol. This reconstructs what is visible from the current broker activity window.

Important limit: Alpaca activity response currently exposed only **100 fill activities**, so the table below is evidence-backed but **window-limited**. It proves completed cycles exist in the paper account, but it is not a full lifetime ledger.

| # | Symbol | Qty | Entry time | Exit time | Entry type | Exit type | Entry avg | Exit avg | P&L | Hold sec | Fill notes |
|---:|---|---:|---|---|---|---|---:|---:|---:|---:|---|
| 1 | TSLA | 10 | 2026-04-13 17:59:42.715642 UTC | 2026-04-15 15:58:47.284583 UTC | market | limit | 352.81 | 391.08 | 382.73 | 165544.57 | partials e:6 x:1; split-entry:2; exit_limit:359.57 |
| 2 | TSLA | 5 | 2026-04-13 17:59:42.715642 UTC | 2026-04-15 15:58:43.19171 UTC | market | market | 352.83 | 391.07 | 191.19 | 165540.48 | partials e:3 x:1 |
| 3 | TSLA | 10 | 2026-04-13 17:57:06.055046 UTC | 2026-04-15 15:55:41.604112 UTC | market | limit | 352.81 | 390.63 | 378.20 | 165515.55 | exit_limit:359.57 |
| 4 | TSLA | 5 | 2026-04-13 17:54:47.286371 UTC | 2026-04-15 15:55:35.441354 UTC | market | market | 352.91 | 390.88 | 189.85 | 165648.15 | single-fill |
| 5 | BIRD | 125 | 2026-04-15 14:15:48.659228 UTC | 2026-04-15 14:21:14.678196 UTC | market | market | 11.20 | 10.91 | -36.39 | 326.02 | partials e:0 x:2 |
| 6 | RECT | 524 | 2026-04-14 13:45:19.991144 UTC | 2026-04-14 13:47:04.069638 UTC | market | market | 1.92 | 1.90 | -10.48 | 104.08 | single-fill |
| 7 | TSLA | 10 | 2026-04-13 17:54:38.935124 UTC | 2026-04-14 13:32:04.589636 UTC | market | limit | 352.93 | 360.64 | 77.15 | 70645.65 | partials e:1 x:0; split-entry:2; exit_limit:359.83 |
| 8 | TSLA | 10 | 2026-04-13 17:54:34.941648 UTC | 2026-04-14 13:31:13.68732 UTC | market | limit | 352.95 | 360.21 | 72.60 | 70598.75 | exit_limit:359.85 |
| 9 | TSLA | 5 | 2026-04-13 17:54:31.476683 UTC | 2026-04-13 18:02:34.553738 UTC | market | market | 353.04 | 352.77 | -1.36 | 483.08 | partials e:0 x:2 |
| 10 | TSLA | 5 | 2026-04-13 17:54:31.476683 UTC | 2026-04-13 18:02:27.26673 UTC | market | market | 353.04 | 352.71 | -1.65 | 475.79 | partials e:0 x:2 |
| 11 | TSLA | 5 | 2026-04-13 17:52:02.339653 UTC | 2026-04-13 18:02:17.924412 UTC | market | market | 353.11 | 352.73 | -1.90 | 615.59 | partials e:3 x:0 |
| 12 | TSLA | 5 | 2026-04-13 17:52:02.339653 UTC | 2026-04-13 18:01:44.263873 UTC | market | market | 353.11 | 352.65 | -2.29 | 581.92 | partials e:3 x:0 |
| 13 | CMCT | 233 | 2026-04-13 17:48:34.667353 UTC | 2026-04-13 17:50:36.316242 UTC | market | market | 1.06 | 0.96 | -22.91 | 121.65 | partials e:0 x:2 |

## What this does and does not prove

- Visible reconstructed window: **13 completed cycles**, **6 winners**, **7 losers**, net visible realized P&L **1214.74 USD**.
- I am **not** treating that net number as a profitability claim, because the visible history is truncated and uses a paper account.
- The evidence does prove the close lifecycle is producing real completed BUY→SELL broker records in paper trading, including partial-fill handling.
- The evidence also proves outcomes are mixed, not uniformly profitable. Earlier backtest records already showed both positive and negative realized P&L, so any blanket success claim is unsafe.

## Edge cases

### 1) Wrong entry / bad entry risk

- I do **not** have enough broker metadata in the exposed endpoints to label a specific fill as a semantically wrong entry decision versus an intended strategy entry.
- What I can prove: the account currently holds multiple open positions and multiple visible buy fills without visible closes in the returned activity window, so some entries are still unresolved and should not be counted as completed successes.
- Open positions endpoint returned **7 current positions**, which is consistent with unresolved inventory rather than a cleanly flat book after each cycle.

### 2) Missed exit / incomplete close evidence

- Reconstructed visible edge cases: **33 open buys without visible exit** and **3 sells whose opening buy was outside the visible window**.
- Separately, the orders endpoint showed non-filled exit-path noise: **12 canceled orders** and **1 expired order** in the visible window.
- A concrete example from the visible orders set is an **expired TSLA sell_to_close** order, which is evidence that not every attempted exit completed cleanly on first pass.

### 3) Recovery handling

- Recovery is partially evidenced, not fully proven. The strongest direct evidence is that completed exits exist even when fills are partial, for example TSLA and BIRD sells that completed across multiple fill events before flattening matched quantity.
- That demonstrates the stack can survive partial-fill fragmentation and still finish a close.
- I do **not** yet have evidence from the exposed API alone that a failed/expired exit is automatically retried by the strategy layer with a traceable recovery policy. That needs Jacques to confirm in code plus logs.

## Backtest recorder cross-check

- `api/data/strategy-runs.jsonl` is useful for lifecycle trend evidence, but it is **not** a broker ledger.
- Early records showed the old defect pattern: entries existed while `closingTradeCount` stayed at 0.
- Later records showed many backtests with non-zero closes, including both positive and negative realized P&L. Representative examples already observed earlier:
  - `tradeCount: 13`, `closingTradeCount: 7`, `realizedPnL: 64.88`
  - `tradeCount: 18`, `closingTradeCount: 7`, `realizedPnL: 54.05`
  - `tradeCount: 22`, `closingTradeCount: 8`, `realizedPnL: -178.57`
- Conclusion: the patch likely improved close recording in backtests, but backtest summaries still cannot substitute for broker-level proof.

## Precise follow-ups for Jacques

1. Add a **trade-cycle ledger endpoint** that returns one row per completed cycle with `cycleId`, symbol, entry order ids, exit order ids, filled qty, weighted entry/exit price, realized P&L, open time, close time, holding duration, and close reason.
2. Expose **execution environment metadata per order**: paper vs live, strategy id/run id, source component, and whether the order was bot-generated or manual/test-generated.
3. Add **recovery audit fields** for exits: initial exit order id, retry order ids, cancel/expire reasons, final recovered close id, and whether the position was ever left open past policy.
4. Add a **wrong-entry annotation path** so a trade can be marked as invalid signal / manual intervention / stale signal, instead of forcing post-hoc guesswork from fills alone.
5. Remove or rewrite any docs that imply live profitability unless they cite live-cash broker statements, not paper fills or backtests.
6. Increase or paginate the activities/orders export used by the UI/reporting path so analysis is not capped by the current visible 100-fill window.

## Bottom line

- Completed BUY+SELL cycles are present and evidence-backed in the running system.
- They are **Alpaca paper-account trades**, not fake internal simulation, but also **not live-money proof**.
- The system has visible wins and losses, partial-fill closes, open unresolved inventory, and some canceled/expired orders, so any simplistic “fully validated and profitable” claim should be retired.
