# Bot Trade Report — 21 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T16:01:04.838Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $376.37 (-0.38%) over 21 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 21 |
| Win rate | 28.57% (6W / 15L) |
| Net P&L | $-376.37 (-0.38%) |
| Gross profit | $715.01 |
| Gross loss | $1091.38 |
| Profit factor | 0.66 |
| Avg win | $119.17 |
| Avg loss | $72.76 |
| Payoff ratio | 1.64:1 |
| Expectancy | $-17.92 / trade |
| Max drawdown | 0.68% |
| Sharpe ratio (ann.) | -2.64 |
| Trades / active day | 1.11 |
| Avg confidence | 98.81% |
| Avg trade duration | 56 min |
| Avg risk ratio | 0.65R |
| Starting equity | $100,000 |
| Ending equity | $99,623.63 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 11 | 18.18% | $-207.18 | $-18.83 |
| Noon 11:30–13:00 | 5 | 40% | $-105.63 | $-21.13 |
| PM   13:00–14:00 | 5 | 40% | $-63.56 | $-12.71 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| DASH | 21 | 6 | 28.57% | $-376.37 | $-17.92 | 0.66 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 16 | 4 | 25% | $-559.26 | $-34.95 |
| breakout | 5 | 2 | 40% | $+182.89 | $+36.58 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 6 | 31.58% | $-179.17 | $-9.43 |
| noisyHighBeta | 2 | 0 | 0% | $-197.2 | $-98.6 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | DASH | 12 | 1.86 | $+25.59 | 9 | 0.07 | $-75.94 | 0.68% | 0.04 | watch |
| Behavior | neutral | 10 | 4.14 | $+50.43 | 9 | 0.07 | $-75.94 | 0.68% | 0.04 | watch |
| Time slot | Mid 10:30-11:30 | 6 | 2.13 | $+45.38 | 5 | 0 | $-95.9 | 0.48% | 0 | watch |
| Setup | trend | 10 | 0.43 | $-20.53 | 6 | 0.12 | $-58.99 | 0.35% | 0.08 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-431.93 | 0.62 |
| +3 bps/side | $-543.11 | 0.55 |
| +5 bps/side | $-654.27 | 0.49 |
| +10 bps/side | $-932.18 | 0.37 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 9 |
| timeout | 6 |
| stagnation | 3 |
| stop-loss | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | DASH | 04-29 17:45 | 04-29 19:30 | 190.6 | 190.89 | 73 | 13913.8 | +21.17 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 71.86 | ↑188.68 | 0.507 | 1.81 | **WIN** |
| 2 | DASH | 05-02 15:45 | 05-02 17:30 | 202.93 | 204.37 | 69 | 14002.17 | +99.36 | +0.71% | 1.01R | 105m | market | timeout | trend | trend | neutral | 57.14 | ↑201.15 | 0.9379 | 1.01 | **WIN** |
| 3 | DASH | 05-13 16:45 | 05-13 17:05 | 197.77 | 197.01 | 70 | 13843.9 | -53.2 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 74.96 | ↑194.97 | 0.7881 | 1.62 | **LOSS** |
| 4 | DASH | 05-16 16:10 | 05-16 17:55 | 201.52 | 201.98 | 69 | 13904.88 | +31.74 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 68.82 | ↑199.43 | 0.8358 | 2.06 | **WIN** |
| 5 | DASH | 06-26 15:10 | 06-26 16:30 | 237.49 | 237.34 | 59 | 14011.91 | -8.85 | -0.06% | 0.09R | 80m | market | stagnation | trend | trend | neutral | 79.49 | ↑235.35 | 1.1669 | 2.92 | **LOSS** |
| 6 | DASH | 07-09 15:20 | 07-09 15:45 | 245.32 | 244.53 | 57 | 13983.24 | -45.03 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 66.79 | ↑243.13 | 0.856 | 1.07 | **LOSS** |
| 7 | DASH | 10-29 15:15 | 10-29 16:45 | 265.53 | 265.35 | 52 | 13807.56 | -9.36 | -0.07% | 0.1R | 90m | market | stagnation | trend | trend | neutral | 69.56 | ↑262.97 | 0.7237 | 1.03 | **LOSS** |
| 8 | DASH | 11-10 14:30 | 11-10 14:40 | 207.97 | 202.77 | 34 | 7070.98 | -176.8 | -2.5% | 1.48R | 10m | market | stop-loss | trend | trend | noisyHighBeta | 59.57 | ↓207.35 | 1.4618 | 1.13 | **LOSS** |
| 9 | DASH | 11-21 17:20 | 11-21 18:10 | 187.99 | 187.48 | 40 | 7519.6 | -20.4 | -0.27% | 0.25R | 50m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.2 | ↑185.13 | 0.4532 | 1.17 | **LOSS** |
| 10 | DASH | 12-01 14:40 | 12-01 16:25 | 201.76 | 204.98 | 69 | 13921.44 | +222.18 | +1.6% | 1.33R | 105m | market | timeout | breakout | breakout | neutral | 90.3 | ↑201.89 | 0.5409 | 1.19 | **WIN** |
| 11 | DASH | 12-12 17:00 | 12-12 17:25 | 229.14 | 228.42 | 61 | 13977.54 | -43.92 | -0.31% | 0.38R | 25m | market | early-reversal | trend | trend | neutral | 76.68 | ↑227.52 | 0.3558 | 1.17 | **LOSS** |
| 12 | DASH | 01-05 14:55 | 01-05 16:40 | 224.51 | 229.19 | 62 | 13919.62 | +290.16 | +2.08% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 63.19 | ↑221.82 | 0.0139 | 1.31 | **WIN** |
| 13 | DASH | 01-05 16:45 | 01-05 17:30 | 230.02 | 228.89 | 61 | 14031.22 | -68.93 | -0.49% | 0.7R | 45m | market | early-reversal | trend | trend | neutral | 74.39 | ↑225.43 | 1.9606 | 2.83 | **LOSS** |
| 14 | DASH | 01-06 14:45 | 01-06 14:55 | 230.64 | 227.82 | 60 | 13838.4 | -169.2 | -1.22% | 1.39R | 10m | market | stop-loss | breakout | breakout | neutral | 67.98 | ↓229.03 | 0.1931 | 1.12 | **LOSS** |
| 15 | DASH | 01-06 15:30 | 01-06 15:50 | 231.37 | 229.46 | 60 | 13882.2 | -114.6 | -0.83% | 0.61R | 20m | market | early-reversal | trend | breakout | neutral | 71.45 | ↓229.35 | 0.37 | 1.94 | **LOSS** |
| 16 | DASH | 01-23 15:10 | 01-23 15:30 | 211.2 | 209.6 | 66 | 13939.2 | -105.6 | -0.76% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 64.47 | ↓209.78 | 0.5284 | 1.99 | **LOSS** |
| 17 | DASH | 02-05 17:40 | 02-05 18:05 | 189.88 | 188.91 | 73 | 13861.24 | -70.81 | -0.51% | 0.65R | 25m | market | early-reversal | trend | trend | neutral | 79.89 | ↑186.37 | 1.1056 | 1.5 | **LOSS** |
| 18 | DASH | 02-25 17:10 | 02-25 18:55 | 174.18 | 174.81 | 80 | 13934.4 | +50.4 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑171.32 | 1.1484 | 2.01 | **WIN** |
| 19 | DASH | 03-23 15:00 | 03-23 15:35 | 164.16 | 163.2 | 85 | 13953.6 | -81.6 | -0.58% | 0.55R | 35m | market | early-reversal | trend | trend | neutral | 78.15 | ↑161.74 | 2.0783 | 1.24 | **LOSS** |
| 20 | DASH | 04-02 14:35 | 04-02 15:45 | 154.7 | 154.15 | 83 | 12840.1 | -45.65 | -0.36% | 0.18R | 70m | market | stagnation | breakout | breakout | neutral | 66.52 | ↑150.31 | 0.7091 | 1.83 | **LOSS** |
| 21 | DASH | 04-13 14:55 | 04-13 15:15 | 156.64 | 155.77 | 89 | 13940.96 | -77.43 | -0.56% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 71.59 | ↑154.1 | 1.1481 | 1.09 | **LOSS** |

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

- ⚠️ **Profit factor 0.66 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.65R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T16:01:04.838Z*
