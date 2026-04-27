# Bot Trade Report — 39 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:19:30.295Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $257.9 (+0.26%) over 39 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 39 |
| Win rate | 38.46% (15W / 24L) |
| Net P&L | $+257.9 (+0.26%) |
| Gross profit | $1441.14 |
| Gross loss | $1183.24 |
| Profit factor | 1.22 |
| Avg win | $96.08 |
| Avg loss | $49.3 |
| Payoff ratio | 1.95:1 |
| Expectancy | $+6.61 / trade |
| Max drawdown | 0.43% |
| Sharpe ratio (ann.) | 0.9 |
| Trades / active day | 1.05 |
| Avg confidence | 99.36% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.63R |
| Starting equity | $100,000 |
| Ending equity | $100,257.9 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 3 | 100% | $+826.86 | $275.62 |
| Mid  10:30–11:30 | 11 | 27.27% | $-421.86 | $-38.35 |
| Noon 11:30–13:00 | 13 | 38.46% | $-153.34 | $-11.8 |
| PM   13:00–14:00 | 12 | 33.33% | $+6.24 | $0.52 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MU | 39 | 15 | 38.46% | $+257.9 | $+6.61 | 1.22 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 5 | 3 | 60% | $+261.95 | $+52.39 |
| trend | 34 | 12 | 35.29% | $-4.05 | $-0.12 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 30 | 13 | 43.33% | $+384.67 | $+12.82 |
| noisyHighBeta | 9 | 2 | 22.22% | $-126.77 | $-14.09 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 23 | 1.23 | $+8.12 | 7 | 2.2 | $+28.26 | 0.07% | 1.56 | reject |
| Setup | trend | 20 | 0.9 | $-4.1 | 14 | 1.25 | $+5.56 | 0.15% | 0.88 | reject |
| Symbol | MU | 23 | 1.23 | $+8.12 | 16 | 1.2 | $+4.44 | 0.19% | 0.83 | reject |
| Time slot | Noon 11:30-13:00 | 9 | 0.53 | $-13.18 | 4 | 0.57 | $-8.69 | 0.08% | 0.36 | reject |
| Time slot | Mid 10:30-11:30 | 8 | 0.12 | $-46.06 | 3 | 0.44 | $-17.8 | 0.1% | 0.25 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+163.97 | 1.13 |
| +3 bps/side | $-23.84 | 0.98 |
| +5 bps/side | $-211.68 | 0.86 |
| +10 bps/side | $-681.19 | 0.63 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 12 |
| stagnation | 6 |
| breakeven-stop | 2 |
| profit-target | 1 |
| trailing-stop | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MU | 05-13 13:30 | 05-13 15:15 | 93.9 | 95.72 | 138 | 12958.2 | +251.16 | +1.94% | 2.52R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 2 | MU | 05-13 15:25 | 05-13 17:10 | 96.05 | 96.37 | 146 | 14023.3 | +46.72 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 3 | MU | 05-15 16:35 | 05-15 17:50 | 94.9 | 94.83 | 147 | 13950.3 | -10.29 | -0.07% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 75.72 | ↑93.29 | 0.4705 | 1.32 | **LOSS** |
| 4 | MU | 05-19 17:00 | 05-19 17:20 | 98.96 | 98.63 | 141 | 13953.36 | -46.53 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 70.97 | ↑97.51 | 0.245 | 1.21 | **LOSS** |
| 5 | MU | 05-22 15:05 | 05-22 15:25 | 97.06 | 96.47 | 144 | 13976.64 | -84.96 | -0.61% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 6 | MU | 05-23 17:20 | 05-23 17:40 | 93.76 | 93.41 | 149 | 13970.24 | -52.15 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75.14 | ↑91.96 | 0.3904 | 1.38 | **LOSS** |
| 7 | MU | 06-05 15:35 | 06-05 16:15 | 108.59 | 108.14 | 129 | 14008.11 | -58.05 | -0.41% | 0.42R | 40m | market | early-reversal | trend | trend | neutral | 74.3 | ↑107.28 | 0.9372 | 1.41 | **LOSS** |
| 8 | MU | 06-16 14:40 | 06-16 15:25 | 120.48 | 119.85 | 116 | 13975.68 | -73.08 | -0.52% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 9 | MU | 07-02 14:45 | 07-02 15:40 | 122.16 | 122.08 | 114 | 13926.24 | -9.12 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 10 | MU | 07-24 15:00 | 07-24 15:30 | 112.61 | 111.83 | 124 | 13963.64 | -96.72 | -0.69% | 0.78R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 11 | MU | 08-08 14:15 | 08-08 15:20 | 113.83 | 118.33 | 122 | 13887.26 | +549 | +3.95% | 4.16R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 12 | MU | 08-22 14:40 | 08-22 15:10 | 120.35 | 119.69 | 116 | 13960.6 | -76.56 | -0.55% | 0.33R | 30m | market | early-reversal | trend | trend | neutral | 70.7 | ↑119.08 | 1.0606 | 1.19 | **LOSS** |
| 13 | MU | 08-27 16:10 | 08-27 16:30 | 118.46 | 117.64 | 118 | 13978.28 | -96.76 | -0.69% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑117.42 | 0.3013 | 1.79 | **LOSS** |
| 14 | MU | 09-04 16:00 | 09-04 16:55 | 121.16 | 121.04 | 115 | 13933.4 | -13.8 | -0.1% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 78.66 | ↑119.83 | 0.4518 | 2.86 | **LOSS** |
| 15 | MU | 09-09 16:00 | 09-09 17:45 | 134.76 | 134.93 | 104 | 14015.04 | +17.68 | +0.13% | 0.19R | 105m | market | timeout | trend | trend | neutral | 75.3 | ↑132.83 | 0.5719 | 1.14 | **WIN** |
| 16 | MU | 09-12 14:20 | 09-12 16:05 | 156.13 | 156.43 | 89 | 13895.57 | +26.7 | +0.19% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 17 | MU | 09-22 15:15 | 09-22 15:45 | 166.02 | 166.06 | 84 | 13945.68 | +3.36 | +0.02% | 0.03R | 30m | market | breakeven-stop | trend | trend | neutral | 64.13 | ↑164.32 | 0.7393 | 1.55 | **WIN** |
| 18 | MU | 10-01 16:15 | 10-01 18:00 | 179.51 | 180.37 | 78 | 14001.78 | +67.08 | +0.48% | 0.55R | 105m | market | timeout | trend | trend | neutral | 73.7 | ↑173.89 | 2.2332 | 1.05 | **WIN** |
| 19 | MU | 10-03 15:15 | 10-03 15:35 | 191.22 | 190.15 | 73 | 13959.06 | -78.11 | -0.56% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑188.7 | 1.7074 | 1.12 | **LOSS** |
| 20 | MU | 10-14 16:15 | 10-14 18:00 | 191.16 | 191.18 | 73 | 13954.68 | +1.46 | +0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 71.33 | ↑189.26 | 0.4664 | 1.13 | **WIN** |
| 21 | MU | 10-28 16:10 | 10-28 17:55 | 220.78 | 221.53 | 63 | 13909.14 | +47.25 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 69.76 | ↑218.85 | 0.3311 | 1.94 | **WIN** |
| 22 | MU | 11-03 17:10 | 11-03 17:30 | 237.35 | 236.43 | 59 | 14003.65 | -54.28 | -0.39% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 66.85 | ↑234.35 | 1.0788 | 1.73 | **LOSS** |
| 23 | MU | 11-05 15:50 | 11-05 16:10 | 236.34 | 235.1 | 59 | 13944.06 | -73.16 | -0.52% | 0.33R | 20m | market | early-reversal | trend | trend | neutral | 71.27 | ↑232.1 | 4.4313 | 1.63 | **LOSS** |
| 24 | MU | 11-24 17:50 | 11-24 18:15 | 225.29 | 224.21 | 34 | 7659.86 | -36.72 | -0.48% | 0.69R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 59.01 | ↑221.41 | 0.7705 | 2.21 | **LOSS** |
| 25 | MU | 11-26 16:00 | 11-26 16:50 | 231.06 | 230.72 | 33 | 7624.98 | -11.22 | -0.15% | 0.13R | 50m | market | stagnation | trend | trend | noisyHighBeta | 68.1 | ↑229.81 | 1.2503 | 1.34 | **LOSS** |
| 26 | MU | 12-09 15:50 | 12-09 16:40 | 253.11 | 251.92 | 55 | 13921.05 | -65.45 | -0.47% | 0.37R | 50m | market | early-reversal | trend | trend | neutral | 71.09 | ↑248.36 | 1.9799 | 1.15 | **LOSS** |
| 27 | MU | 12-19 17:35 | 12-19 19:20 | 265.78 | 266.51 | 28 | 7441.84 | +20.44 | +0.27% | 0.27R | 105m | market | timeout | trend | trend | noisyHighBeta | 76.31 | ↑263.56 | 0.186 | 1.78 | **WIN** |
| 28 | MU | 12-29 17:35 | 12-29 19:20 | 289.26 | 291.2 | 48 | 13884.48 | +93.12 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 75.81 | ↑285.66 | 0.7538 | 2.13 | **WIN** |
| 29 | MU | 01-22 17:30 | 01-22 17:55 | 394.63 | 393.16 | 35 | 13812.05 | -51.45 | -0.37% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 65.46 | ↑385.48 | 2.1097 | 1.23 | **LOSS** |
| 30 | MU | 01-27 14:35 | 01-27 16:20 | 405.02 | 406.37 | 31 | 12555.62 | +41.85 | +0.33% | 0.2R | 105m | market | timeout | breakout | breakout | neutral | 79.1 | ↓404.15 | 1.3266 | 1.73 | **WIN** |
| 31 | MU | 02-02 16:30 | 02-02 18:15 | 437.65 | 440.41 | 17 | 7440.05 | +46.92 | +0.63% | 0.54R | 105m | market | timeout | trend | trend | noisyHighBeta | 57.91 | ↑425.74 | 4.7027 | 1.34 | **WIN** |
| 32 | MU | 02-09 17:05 | 02-09 17:25 | 391.52 | 387.62 | 19 | 7438.88 | -74.1 | -1% | 0.81R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 62.19 | ↑383.85 | 1.5864 | 1.97 | **LOSS** |
| 33 | MU | 02-11 17:25 | 02-11 18:10 | 401.06 | 400.55 | 19 | 7620.14 | -9.69 | -0.13% | 0.12R | 45m | market | breakeven-stop | trend | trend | noisyHighBeta | 64.54 | ↑396.64 | 0.7692 | 2.29 | **LOSS** |
| 34 | MU | 02-13 17:35 | 02-13 18:55 | 417.27 | 416.67 | 18 | 7510.86 | -10.8 | -0.14% | 0.14R | 80m | market | stagnation | trend | trend | noisyHighBeta | 72.49 | ↑404.6 | 3.3428 | 1.09 | **LOSS** |
| 35 | MU | 02-24 14:35 | 02-24 14:50 | 425.84 | 424.32 | 32 | 13626.88 | -48.64 | -0.36% | 0.25R | 15m | market | trailing-stop | breakout | breakout | neutral | 78.66 | ↓424.99 | 0.7161 | 4.48 | **LOSS** |
| 36 | MU | 03-09 16:00 | 03-09 17:15 | 379.24 | 378.99 | 20 | 7584.8 | -5 | -0.07% | 0.07R | 75m | market | stagnation | trend | trend | noisyHighBeta | 72.76 | ↑367.44 | 3.2122 | 1.69 | **LOSS** |
| 37 | MU | 03-27 15:25 | 03-27 16:05 | 367.51 | 365.18 | 20 | 7350.2 | -46.6 | -0.63% | 0.44R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 66.31 | ↑361.53 | 1.987 | 1.06 | **LOSS** |
| 38 | MU | 04-14 17:00 | 04-14 18:15 | 447.22 | 455.14 | 15 | 13863.82 | +118.8 | +1.77% | 2.19R | 75m | market | trim-profit-target | trend | trend | neutral | 71.24 | ↑435.53 | 2.4277 | 1.66 | **WIN** |
| 39 | MU | 04-14 17:00 | 04-14 18:45 | 447.22 | 454.07 | 16 | 13863.82 | +109.6 | +1.53% | 1.89R | 105m | market | timeout | trend | trend | neutral | 71.24 | ↑435.53 | 2.4277 | 1.66 | **WIN** |

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

- ⚠️ **Profit factor 1.22 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.63R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:19:30.295Z*
