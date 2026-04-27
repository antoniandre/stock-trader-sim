# Bot Trade Report — 21 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:38:56.555Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $361.15 (-0.36%) over 21 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 21 |
| Win rate | 19.05% (4W / 17L) |
| Net P&L | $-361.15 (-0.36%) |
| Gross profit | $513.5 |
| Gross loss | $874.65 |
| Profit factor | 0.59 |
| Avg win | $128.38 |
| Avg loss | $51.45 |
| Payoff ratio | 2.5:1 |
| Expectancy | $-17.2 / trade |
| Max drawdown | 0.49% |
| Sharpe ratio (ann.) | -3.65 |
| Trades / active day | 1.05 |
| Avg confidence | 100% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.59R |
| Starting equity | $100,000 |
| Ending equity | $99,638.85 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 2 | 50% | $+70.58 | $35.29 |
| Mid  10:30–11:30 | 9 | 11.11% | $-229.62 | $-25.51 |
| Noon 11:30–13:00 | 6 | 16.67% | $-155.41 | $-25.9 |
| PM   13:00–14:00 | 4 | 25% | $-46.7 | $-11.67 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSM | 21 | 4 | 19.05% | $-361.15 | $-17.2 | 0.59 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 15 | 3 | 20% | $-313.33 | $-20.89 |
| breakout | 6 | 1 | 16.67% | $-47.82 | $-7.97 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 21 | 4 | 19.05% | $-361.15 | $-17.2 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TSM | 12 | 0.49 | $-20.05 | 9 | 0.7 | $-13.39 | 0.4% | 0.51 | reject |
| Behavior | neutral | 12 | 0.49 | $-20.05 | 9 | 0.7 | $-13.39 | 0.4% | 0.51 | reject |
| Setup | trend | 10 | 0.54 | $-19.65 | 5 | 0.52 | $-23.36 | 0.24% | 0.38 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-419.23 | 0.55 |
| +3 bps/side | $-535.36 | 0.47 |
| +5 bps/side | $-651.48 | 0.41 |
| +10 bps/side | $-941.81 | 0.3 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 12 |
| timeout | 4 |
| stagnation | 3 |
| breakeven-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSM | 05-08 15:40 | 05-08 16:00 | 176.68 | 175.89 | 79 | 13957.72 | -62.41 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 69.52 | ↑174.95 | 0.5299 | 1.65 | **LOSS** |
| 2 | TSM | 06-05 15:20 | 06-05 16:05 | 205.75 | 204.75 | 68 | 13991 | -68 | -0.49% | 0.7R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 3 | TSM | 06-27 14:05 | 06-27 15:50 | 226.78 | 228.18 | 61 | 13833.58 | +85.4 | +0.62% | 0.89R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 4 | TSM | 07-25 14:00 | 07-25 14:50 | 244.4 | 244.14 | 57 | 13930.8 | -14.82 | -0.11% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 5 | TSM | 09-03 14:40 | 09-03 15:15 | 231.94 | 231.21 | 60 | 13916.4 | -43.8 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 6 | TSM | 09-18 17:20 | 09-18 17:40 | 269.35 | 267.65 | 51 | 13736.85 | -86.7 | -0.63% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑264.12 | 0.4861 | 3.71 | **LOSS** |
| 7 | TSM | 10-01 16:10 | 10-01 17:55 | 287.94 | 286.81 | 48 | 13821.12 | -54.24 | -0.39% | 0.56R | 105m | market | breakeven-stop | trend | trend | neutral | 76.52 | ↑283.92 | 1.3575 | 1.12 | **LOSS** |
| 8 | TSM | 10-14 16:50 | 10-14 17:15 | 301.57 | 300.61 | 46 | 13872.22 | -44.16 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 74.76 | ↑295.59 | 1.4625 | 2.19 | **LOSS** |
| 9 | TSM | 11-19 14:50 | 11-19 16:00 | 281.74 | 281.52 | 49 | 13805.26 | -10.78 | -0.08% | 0.09R | 70m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓279.69 | 0.3004 | 1.73 | **LOSS** |
| 10 | TSM | 12-02 14:35 | 12-02 15:25 | 292.41 | 291.7 | 47 | 13743.27 | -33.37 | -0.24% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 11 | TSM | 12-18 15:30 | 12-18 15:55 | 286.28 | 285.2 | 48 | 13741.44 | -51.84 | -0.38% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 62.84 | ↑284.44 | 2.5381 | 2.05 | **LOSS** |
| 12 | TSM | 01-12 17:25 | 01-12 19:10 | 328.88 | 332.31 | 42 | 13812.96 | +144.06 | +1.04% | 1.49R | 105m | market | timeout | trend | trend | neutral | 68.41 | ↑325.01 | 1.3607 | 1.04 | **WIN** |
| 13 | TSM | 01-15 14:50 | 01-15 16:35 | 346.2 | 350.16 | 40 | 13848 | +158.4 | +1.14% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 81.51 | ↑342.43 | 5.1387 | 1.6 | **WIN** |
| 14 | TSM | 01-16 14:30 | 01-16 14:50 | 348.85 | 347.26 | 40 | 13954 | -63.6 | -0.46% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 72.94 | ↓348.22 | 0.1862 | 2.97 | **LOSS** |
| 15 | TSM | 02-06 14:40 | 02-06 15:50 | 344.91 | 344.4 | 40 | 13796.4 | -20.4 | -0.15% | 0.09R | 70m | market | stagnation | breakout | breakout | neutral | 78.24 | ↑341.86 | 3.0464 | 2.15 | **LOSS** |
| 16 | TSM | 02-06 17:45 | 02-06 18:30 | 349.22 | 347.73 | 40 | 13968.8 | -59.6 | -0.43% | 0.61R | 45m | market | early-reversal | trend | trend | neutral | 76.75 | ↑344.77 | 0.628 | 1.98 | **LOSS** |
| 17 | TSM | 02-10 17:45 | 02-10 18:15 | 364.41 | 363.24 | 38 | 13847.58 | -44.46 | -0.32% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 78.24 | ↑360.75 | 0.7025 | 1.53 | **LOSS** |
| 18 | TSM | 02-23 14:50 | 02-23 15:40 | 373.07 | 370.96 | 37 | 13803.59 | -78.07 | -0.57% | 0.57R | 50m | market | early-reversal | breakout | breakout | neutral | 57.09 | ↓370.54 | -0.1838 | 3.07 | **LOSS** |
| 19 | TSM | 03-09 16:40 | 03-09 17:00 | 343.97 | 342.26 | 40 | 13758.8 | -68.4 | -0.5% | 0.62R | 20m | market | early-reversal | trend | trend | neutral | 70.84 | ↑336.75 | 2.1543 | 1.1 | **LOSS** |
| 20 | TSM | 03-24 15:20 | 03-24 16:00 | 344.69 | 342.94 | 40 | 13787.6 | -70 | -0.51% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 67.07 | ↑340.33 | 1.6085 | 1.45 | **LOSS** |
| 21 | TSM | 04-22 15:35 | 04-22 17:20 | 377.45 | 380.94 | 36 | 13588.2 | +125.64 | +0.92% | 1.31R | 105m | market | timeout | trend | trend | neutral | 73.46 | ↑373.49 | 1.7485 | 1.52 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |
| 2 | **Trailing stop** | Exits once price retraces 0.8% from the session high-watermark |
| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |
| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |
| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |
| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |
| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |
| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |
| 10 | **Slippage model** | 0.05 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.59 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.59R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:38:56.555Z*
