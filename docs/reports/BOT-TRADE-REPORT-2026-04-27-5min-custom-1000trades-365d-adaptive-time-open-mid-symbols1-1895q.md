# Bot Trade Report — 26 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:14:51.974Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1398.81 (-1.4%) over 26 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 26 |
| Win rate | 23.08% (6W / 20L) |
| Net P&L | $-1398.81 (-1.4%) |
| Gross profit | $864.2 |
| Gross loss | $2263.01 |
| Profit factor | 0.38 |
| Avg win | $144.03 |
| Avg loss | $113.15 |
| Payoff ratio | 1.27:1 |
| Expectancy | $-53.8 / trade |
| Max drawdown | 1.6% |
| Sharpe ratio (ann.) | -5.38 |
| Trades / active day | 1.04 |
| Avg confidence | 99% |
| Avg trade duration | 44 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $98,601.19 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 0% | $-377.72 | $-94.43 |
| Mid  10:30–11:30 | 22 | 27.27% | $-1021.09 | $-46.41 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CELH | 26 | 6 | 23.08% | $-1398.81 | $-53.8 | 0.38 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 4 | 40% | $-193.09 | $-19.31 |
| breakout | 16 | 2 | 12.5% | $-1205.72 | $-75.36 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 1 | 100% | $+3.34 | $+3.34 |
| neutral | 25 | 5 | 20% | $-1402.15 | $-56.09 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 8 | 0.13 | $-71.64 | 2 | ∞ | $+190.03 | 0% | 85.36 | reject |
| Time slot | Mid 10:30-11:30 | 12 | 0.1 | $-61.72 | 10 | 0.74 | $-28.04 | 0.53% | 0.64 | reject |
| Symbol | CELH | 15 | 0.08 | $-66.89 | 11 | 0.66 | $-35.95 | 0.6% | 0.58 | reject |
| Behavior | neutral | 15 | 0.08 | $-66.89 | 10 | 0.66 | $-39.88 | 0.6% | 0.58 | reject |
| Setup | breakout | 7 | 0 | $-61.46 | 9 | 0.34 | $-86.17 | 0.78% | 0.29 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1469 | 0.37 |
| +3 bps/side | $-1609.4 | 0.34 |
| +5 bps/side | $-1749.79 | 0.31 |
| +10 bps/side | $-2100.77 | 0.26 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 14 |
| stagnation | 4 |
| stop-loss | 2 |
| timeout | 2 |
| profit-target | 2 |
| trailing-stop | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CELH | 05-01 15:00 | 05-01 15:30 | 35.41 | 35.21 | 395 | 13986.95 | -79 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 2 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.63 | 374 | 13968.9 | -269.28 | -1.93% | 1.4R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 3 | CELH | 05-23 14:45 | 05-23 15:05 | 35.91 | 35.72 | 388 | 13933.08 | -73.72 | -0.53% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 69.81 | ↑35.52 | 0.0118 | 1.57 | **LOSS** |
| 4 | CELH | 05-27 15:00 | 05-27 15:20 | 37.43 | 37.09 | 372 | 13923.96 | -126.48 | -0.91% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 63.18 | ↑36.88 | 0.3071 | 1.08 | **LOSS** |
| 5 | CELH | 05-30 14:35 | 05-30 15:10 | 37.22 | 37.01 | 374 | 13920.28 | -78.54 | -0.56% | 0.36R | 35m | market | early-reversal | breakout | breakout | neutral | 68.09 | ↑36.64 | 0.2419 | 2.27 | **LOSS** |
| 6 | CELH | 06-17 14:30 | 06-17 14:50 | 44.22 | 43.99 | 314 | 13885.08 | -72.22 | -0.52% | 0.31R | 20m | market | early-reversal | trend | trend | neutral | 62.04 | ↑43.37 | 0.092 | 1.12 | **LOSS** |
| 7 | CELH | 06-30 15:00 | 06-30 15:20 | 47.24 | 47.03 | 294 | 13888.56 | -61.74 | -0.44% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 75.94 | ↑46.66 | 0.3782 | 1.33 | **LOSS** |
| 8 | CELH | 07-18 14:25 | 07-18 14:55 | 44.54 | 44.2 | 311 | 13851.94 | -105.74 | -0.76% | 0.73R | 30m | market | early-reversal | trend | breakout | neutral | 51.72 | ↓44.15 | -0.022 | 1.36 | **LOSS** |
| 9 | CELH | 07-28 15:05 | 07-28 16:50 | 47.21 | 47.15 | 293 | 13832.53 | -17.58 | -0.13% | 0.14R | 105m | market | stagnation | breakout | breakout | neutral | 76.5 | ↑46.16 | 0.1319 | 1.32 | **LOSS** |
| 10 | CELH | 08-11 14:05 | 08-11 14:50 | 53.79 | 53.36 | 257 | 13824.03 | -110.51 | -0.8% | 0.43R | 45m | market | early-reversal | breakout | breakout | neutral | 78.21 | ↓53.24 | 0.585 | 1.13 | **LOSS** |
| 11 | CELH | 08-29 14:00 | 08-29 14:55 | 63.07 | 62.84 | 202 | 12740.14 | -46.46 | -0.36% | 0.18R | 55m | market | stagnation | breakout | breakout | neutral | 75.57 | ↑62.18 | 0.7881 | 1.23 | **LOSS** |
| 12 | CELH | 09-15 14:35 | 09-15 15:35 | 57.46 | 57.42 | 241 | 13847.86 | -9.64 | -0.07% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 44.87 | ↑56.77 | -0.2798 | 1.32 | **LOSS** |
| 13 | CELH | 09-26 15:15 | 09-26 17:00 | 53.89 | 54.04 | 257 | 13849.73 | +38.55 | +0.28% | 0.31R | 105m | market | timeout | trend | trend | neutral | 64.47 | ↑53.34 | 0.3913 | 1.33 | **WIN** |
| 14 | CELH | 10-08 15:10 | 10-08 16:55 | 62.28 | 62.49 | 222 | 13826.16 | +46.62 | +0.34% | 0.48R | 105m | market | timeout | trend | trend | neutral | 71.3 | ↑61.8 | 0.3568 | 1.52 | **WIN** |
| 15 | CELH | 10-16 14:45 | 10-16 15:45 | 66.2 | 66.02 | 209 | 13835.8 | -37.62 | -0.27% | 0.19R | 60m | market | stagnation | trend | trend | neutral | 79.71 | ↑65.3 | 0.773 | 1.6 | **LOSS** |
| 16 | CELH | 10-24 13:45 | 10-24 14:05 | 63.59 | 63.06 | 217 | 13799.03 | -115.01 | -0.83% | 1R | 20m | market | early-reversal | breakout | breakout | neutral | 72.73 | ↓63.33 | -0.0025 | 1.1 | **LOSS** |
| 17 | CELH | 11-20 14:30 | 11-20 14:50 | 42.23 | 41.48 | 302 | 12753.46 | -226.5 | -1.78% | 1.26R | 20m | market | early-reversal | breakout | breakout | neutral | 68.15 | ↓42.2 | 0.0388 | 1.62 | **LOSS** |
| 18 | CELH | 12-01 14:35 | 12-01 15:25 | 41.41 | 41.54 | 333 | 13789.53 | +43.29 | +0.31% | 0.26R | 50m | market | trailing-stop | breakout | breakout | neutral | 71.67 | ↓41.25 | 0.0702 | 3.18 | **WIN** |
| 19 | CELH | 12-12 14:40 | 12-12 15:00 | 44.55 | 44.15 | 310 | 13810.5 | -124 | -0.9% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 68.46 | ↓44.42 | 0.0948 | 1.22 | **LOSS** |
| 20 | CELH | 12-23 14:35 | 12-23 14:55 | 45.2 | 44.62 | 305 | 13786 | -176.9 | -1.28% | 1.27R | 20m | market | early-reversal | breakout | breakout | neutral | 71.58 | ↓45.01 | 0.0991 | 1.49 | **LOSS** |
| 21 | CELH | 01-07 15:25 | 01-07 16:20 | 49.66 | 51.02 | 277 | 13755.82 | +376.72 | +2.74% | 2.08R | 55m | market | profit-target | trend | trend | neutral | 67.65 | ↑49.38 | 0.2198 | 1.52 | **WIN** |
| 22 | CELH | 01-20 14:45 | 01-20 16:20 | 55.92 | 57.36 | 247 | 13812.24 | +355.68 | +2.58% | 2.08R | 95m | market | profit-target | breakout | breakout | neutral | 69.83 | ↑55.79 | 0.3742 | 2.33 | **WIN** |
| 23 | CELH | 02-27 14:30 | 02-27 14:35 | 54.97 | 53.96 | 252 | 13852.44 | -254.52 | -1.84% | 1.33R | 5m | market | stop-loss | breakout | breakout | neutral | 60.5 | ↓55.01 | 0.1808 | 2.48 | **LOSS** |
| 24 | CELH | 02-27 14:45 | 02-27 15:05 | 54.79 | 54.04 | 252 | 13807.08 | -189 | -1.37% | 0.71R | 20m | market | early-reversal | breakout | breakout | neutral | 55.64 | ↓54.69 | 0.1752 | 1.28 | **LOSS** |
| 25 | CELH | 03-10 15:00 | 03-10 16:05 | 45.43 | 45.45 | 167 | 7586.81 | +3.34 | +0.04% | 0.04R | 65m | market | breakeven-stop | trend | trend | noisyHighBeta | 74.56 | ↑44.9 | 0.753 | 1.39 | **WIN** |
| 26 | CELH | 04-17 15:00 | 04-17 15:40 | 35.86 | 35.63 | 385 | 13806.1 | -88.55 | -0.64% | 0.41R | 40m | market | early-reversal | breakout | breakout | neutral | 60.42 | ↑35.42 | 0.186 | 1.49 | **LOSS** |

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

- ⚠️ **Profit factor 0.38 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:14:51.974Z*
