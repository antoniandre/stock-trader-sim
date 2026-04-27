# Bot Trade Report — 18 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:07:50.916Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $925.75 (+0.93%) over 18 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 18 |
| Win rate | 44.44% (8W / 10L) |
| Net P&L | $+925.75 (+0.93%) |
| Gross profit | $1919.69 |
| Gross loss | $993.94 |
| Profit factor | 1.93 |
| Avg win | $239.96 |
| Avg loss | $99.39 |
| Payoff ratio | 2.41:1 |
| Expectancy | $+51.43 / trade |
| Max drawdown | 0.43% |
| Sharpe ratio (ann.) | 4.15 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 51 min |
| Avg risk ratio | 1.04R |
| Starting equity | $100,000 |
| Ending equity | $100,925.75 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+531.02 | $88.5 |
| Mid  10:30–11:30 | 12 | 41.67% | $+394.73 | $32.89 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 18 | 8 | 44.44% | $+925.75 | $+51.43 | 1.93 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 18 | 8 | 44.44% | $+925.75 | $+51.43 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 18 | 8 | 44.44% | $+925.75 | $+51.43 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TSLA | 10 | 3 | $+77.43 | 8 | 1.25 | $+18.93 | 0.43% | 1.06 | watch |
| Behavior | neutral | 10 | 3 | $+77.43 | 8 | 1.25 | $+18.93 | 0.43% | 1.06 | watch |
| Setup | breakout | 10 | 3 | $+77.43 | 8 | 1.25 | $+18.93 | 0.43% | 1.06 | watch |
| Time slot | Mid 10:30-11:30 | 6 | 3.91 | $+85.81 | 6 | 0.77 | $-20.02 | 0.35% | 0.66 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+875.71 | 1.86 |
| +3 bps/side | $+775.58 | 1.72 |
| +5 bps/side | $+675.47 | 1.6 |
| +10 bps/side | $+425.2 | 1.33 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| timeout | 4 |
| profit-target | 3 |
| trailing-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 43 | 13924.69 | -84.71 | -0.61% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 2 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.75 | 318.04 | 43 | 13749.25 | -73.53 | -0.53% | 0.32R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 3 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 42 | 13720.56 | +348.6 | +2.54% | 3.39R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 4 | TSLA | 09-11 14:25 | 09-11 16:10 | 359.26 | 362.35 | 39 | 14011.14 | +120.51 | +0.86% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 76.44 | ↑352.55 | 1.2284 | 1.38 | **WIN** |
| 5 | TSLA | 10-17 14:15 | 10-17 14:35 | 439.22 | 435.19 | 31 | 13615.82 | -124.93 | -0.92% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 73.03 | ↑432.68 | 2.805 | 2.34 | **LOSS** |
| 6 | TSLA | 11-14 15:25 | 11-14 17:10 | 400.19 | 409.48 | 35 | 14006.65 | +325.15 | +2.32% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 7 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.64 | 419.44 | 34 | 14063.76 | +197.2 | +1.4% | 1.01R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 8 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 31 | 14060.05 | -103.54 | -0.74% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 9 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.14 | 447.07 | 31 | 13737.34 | +121.83 | +0.89% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 10 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 31 | 14040.21 | +47.74 | +0.34% | 0.49R | 40m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 11 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.83 | 441.03 | 31 | 13758.73 | -86.8 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 12 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 31 | 13818.25 | -85.87 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 13 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.14 | 438.31 | 33 | 14062.62 | +401.61 | +2.86% | 2.17R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 14 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 34 | 13876.76 | -79.9 | -0.58% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 15 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.15 | 428.29 | 32 | 13924.8 | -219.52 | -1.58% | 1.34R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 16 | TSLA | 02-24 15:25 | 02-24 15:45 | 407.71 | 406.25 | 34 | 13862.14 | -49.64 | -0.36% | 0.34R | 20m | market | early-reversal | breakout | breakout | neutral | 79.51 | ↑402.65 | 2.1488 | 2.05 | **LOSS** |
| 17 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 38 | 13851 | -85.5 | -0.62% | 0.72R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 18 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 37 | 13731.44 | +357.05 | +2.6% | 2.45R | 75m | market | profit-target | breakout | breakout | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |

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

- ✅ **Profit factor 1.93** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.04R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:07:50.916Z*
