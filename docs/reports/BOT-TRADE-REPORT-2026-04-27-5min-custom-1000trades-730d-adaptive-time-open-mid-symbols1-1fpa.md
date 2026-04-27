# Bot Trade Report — 41 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:33:55.833Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1045.36 (+1.05%) over 41 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 41 |
| Win rate | 46.34% (19W / 22L) |
| Net P&L | $+1045.36 (+1.05%) |
| Gross profit | $2335.34 |
| Gross loss | $1289.98 |
| Profit factor | 1.81 |
| Avg win | $122.91 |
| Avg loss | $58.64 |
| Payoff ratio | 2.1:1 |
| Expectancy | $+25.5 / trade |
| Max drawdown | 0.57% |
| Sharpe ratio (ann.) | 3.15 |
| Trades / active day | 1.05 |
| Avg confidence | 99.68% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $101,045.36 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 14 | 50% | $+296.92 | $21.21 |
| Mid  10:30–11:30 | 27 | 44.44% | $+748.44 | $27.72 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRM | 41 | 19 | 46.34% | $+1045.36 | $+25.5 | 1.81 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 25 | 13 | 52% | $+817.14 | $+32.69 |
| breakout | 16 | 6 | 37.5% | $+228.22 | $+14.26 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 41 | 19 | 46.34% | $+1045.36 | $+25.5 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | CRM | 24 | 1.92 | $+30.89 | 17 | 1.63 | $+17.88 | 0.21% | 1.13 | promote |
| Behavior | neutral | 24 | 1.92 | $+30.89 | 17 | 1.63 | $+17.88 | 0.21% | 1.13 | promote |
| Setup | trend | 15 | 4.18 | $+60.35 | 10 | 0.68 | $-8.81 | 0.13% | 0.43 | watch |
| Time slot | Mid 10:30-11:30 | 18 | 2.75 | $+53.46 | 9 | 0.14 | $-23.76 | 0.21% | 0.05 | watch |
| Time slot | Open 9:30-10:30 | 6 | 0.14 | $-36.81 | 8 | 3.2 | $+64.72 | 0.13% | 2.51 | reject |
| Setup | breakout | 9 | 0.69 | $-18.21 | 7 | 2.92 | $+56.01 | 0.1% | 2.13 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+936.72 | 1.69 |
| +3 bps/side | $+719.44 | 1.48 |
| +5 bps/side | $+502.13 | 1.31 |
| +10 bps/side | $-41.11 | 0.98 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 14 |
| timeout | 10 |
| stagnation | 5 |
| profit-target | 4 |
| breakeven-stop | 4 |
| trim-profit-target | 2 |
| trailing-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CRM | 06-20 15:20 | 06-20 16:25 | 241.28 | 241.02 | 58 | 13994.24 | -15.08 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 77.92 | ↑238.68 | 2.2356 | 1.04 | **LOSS** |
| 2 | CRM | 07-12 14:30 | 07-12 14:50 | 254.54 | 253.39 | 54 | 13745.16 | -62.1 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 70.93 | ↑253.06 | 0.4578 | 2.86 | **LOSS** |
| 3 | CRM | 07-25 15:10 | 07-25 16:55 | 256.33 | 262.65 | 54 | 13841.82 | +341.28 | +2.47% | 3.17R | 105m | market | profit-target | trend | trend | neutral | 67.95 | ↑254.1 | 1.103 | 1.22 | **WIN** |
| 4 | CRM | 07-26 13:55 | 07-26 14:40 | 262.43 | 260.92 | 53 | 13908.79 | -80.03 | -0.58% | 0.7R | 45m | market | early-reversal | breakout | breakout | neutral | 66.95 | ↓260.65 | 0.0215 | 1.88 | **LOSS** |
| 5 | CRM | 07-31 14:00 | 07-31 14:45 | 260.76 | 259.24 | 53 | 13820.28 | -80.56 | -0.58% | 0.63R | 45m | market | early-reversal | breakout | breakout | neutral | 74.39 | ↑257.86 | 0.5212 | 1.46 | **LOSS** |
| 6 | CRM | 08-09 14:00 | 08-09 15:45 | 251.16 | 251.58 | 55 | 13813.8 | +23.1 | +0.17% | 0.2R | 105m | market | timeout | trend | trend | neutral | 64.81 | ↑249.86 | 0.58 | 1.4 | **WIN** |
| 7 | CRM | 09-19 15:10 | 09-19 16:35 | 261.59 | 268.82 | 53 | 13864.27 | +383.19 | +2.76% | 3.94R | 85m | market | profit-target | trend | trend | neutral | 63.6 | ↑259.94 | 1.8689 | 1.35 | **WIN** |
| 8 | CRM | 10-02 14:30 | 10-02 16:15 | 277.04 | 277.84 | 50 | 13852 | +40 | +0.29% | 0.26R | 105m | market | timeout | trend | trend | neutral | 76.09 | ↑275.29 | 0.9969 | 1.04 | **WIN** |
| 9 | CRM | 10-29 14:05 | 10-29 15:50 | 297.08 | 297.35 | 47 | 13962.76 | +12.69 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑295.35 | 0.5754 | 2.07 | **WIN** |
| 10 | CRM | 11-01 14:25 | 11-01 15:55 | 294.8 | 294.71 | 47 | 13855.6 | -4.23 | -0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 61.63 | ↑293.15 | 0.7853 | 1.76 | **LOSS** |
| 11 | CRM | 11-07 14:35 | 11-07 14:55 | 310.88 | 309.75 | 45 | 13989.6 | -50.85 | -0.36% | 0.51R | 20m | market | early-reversal | breakout | breakout | neutral | 87.13 | ↑308.96 | 0.4379 | 1.39 | **LOSS** |
| 12 | CRM | 11-08 15:20 | 11-08 17:05 | 314.23 | 317.17 | 44 | 13826.12 | +129.36 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | 79.2 | ↑312.29 | 0.6599 | 1.24 | **WIN** |
| 13 | CRM | 11-11 15:05 | 11-11 16:05 | 334.84 | 340.25 | 21 | 14063.28 | +113.61 | +1.62% | 0.86R | 60m | market | trim-profit-target | trend | trend | neutral | 74.61 | ↑333.23 | 4.5728 | 1.09 | **WIN** |
| 14 | CRM | 11-11 15:05 | 11-11 16:45 | 334.84 | 337.98 | 21 | 14063.28 | +65.94 | +0.94% | 0.5R | 100m | market | trailing-stop | trend | trend | neutral | 74.61 | ↓333.23 | 4.5728 | 1.09 | **WIN** |
| 15 | CRM | 11-21 14:45 | 11-21 16:05 | 331.2 | 339.3 | 42 | 13910.4 | +340.2 | +2.45% | 2.55R | 80m | market | profit-target | breakout | breakout | neutral | 80.54 | ↑331.02 | 1.7809 | 1.19 | **WIN** |
| 16 | CRM | 12-11 14:45 | 12-11 16:30 | 355.86 | 356.3 | 39 | 13878.54 | +17.16 | +0.12% | 0.15R | 105m | market | timeout | breakout | breakout | neutral | 82.71 | ↓354.55 | 0.9523 | 2.19 | **WIN** |
| 17 | CRM | 12-13 14:35 | 12-13 14:50 | 362.96 | 359.19 | 39 | 14155.44 | -147.03 | -1.04% | 1.49R | 15m | market | stop-loss | breakout | breakout | neutral | 81.08 | ↓362.28 | 0.4023 | 1.14 | **LOSS** |
| 18 | CRM | 01-06 14:50 | 01-06 15:10 | 336.23 | 334.52 | 42 | 14121.66 | -71.82 | -0.51% | 0.65R | 20m | market | early-reversal | trend | breakout | neutral | 65.56 | ↑333.47 | 0.5121 | 1.46 | **LOSS** |
| 19 | CRM | 01-22 15:05 | 01-22 15:40 | 330.95 | 329.64 | 42 | 13899.9 | -55.02 | -0.4% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 66.35 | ↓329.73 | 0.7354 | 1.78 | **LOSS** |
| 20 | CRM | 01-24 14:30 | 01-24 14:50 | 338.63 | 336.25 | 41 | 13883.83 | -97.58 | -0.7% | 1R | 20m | market | early-reversal | trend | trend | neutral | 75.88 | ↓337.57 | 0.584 | 2.11 | **LOSS** |
| 21 | CRM | 02-10 14:45 | 02-10 15:05 | 330.48 | 329.28 | 42 | 13880.16 | -50.4 | -0.36% | 0.47R | 20m | market | early-reversal | breakout | trend | neutral | 78.18 | ↓330.42 | 1.2213 | 1.78 | **LOSS** |
| 22 | CRM | 02-26 14:35 | 02-26 16:05 | 310.82 | 310.84 | 45 | 13986.9 | +0.9 | +0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 79.46 | ↓310.64 | 0.5488 | 2.56 | **WIN** |
| 23 | CRM | 03-14 15:05 | 03-14 16:50 | 277.4 | 279.01 | 50 | 13870 | +80.5 | +0.58% | 0.72R | 105m | market | timeout | trend | trend | neutral | 67.82 | ↑275.13 | 1.062 | 1.66 | **WIN** |
| 24 | CRM | 04-08 13:55 | 04-08 14:40 | 255.26 | 253.59 | 55 | 14039.3 | -91.85 | -0.65% | 0.33R | 45m | market | early-reversal | breakout | breakout | neutral | 75.49 | ↓252.52 | 2.3499 | 1.11 | **LOSS** |
| 25 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 26 | CRM | 06-27 14:00 | 06-27 14:20 | 273.34 | 272.47 | 51 | 13940.34 | -44.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 27 | CRM | 07-08 14:00 | 07-08 14:55 | 271.8 | 275.1 | 25 | 13861.8 | +82.5 | +1.21% | 1.73R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 28 | CRM | 07-08 14:00 | 07-08 15:45 | 271.8 | 274.68 | 26 | 13861.8 | +74.88 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 29 | CRM | 07-14 13:45 | 07-14 14:05 | 261.82 | 259.87 | 53 | 13876.46 | -103.35 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 80.11 | ↓260.45 | 0.2308 | 1.47 | **LOSS** |
| 30 | CRM | 08-13 14:50 | 08-13 15:40 | 234.29 | 234.16 | 60 | 14057.4 | -7.8 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 31 | CRM | 09-05 15:10 | 09-05 16:00 | 250.06 | 249.61 | 56 | 14003.36 | -25.2 | -0.18% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 45.95 | ↑248.1 | 1.2377 | 1.13 | **LOSS** |
| 32 | CRM | 09-22 14:30 | 09-22 16:15 | 247.76 | 248.32 | 56 | 13874.56 | +31.36 | +0.23% | 0.25R | 105m | market | timeout | trend | trend | neutral | 54.29 | ↑245.46 | 0.2287 | 1.58 | **WIN** |
| 33 | CRM | 10-21 14:20 | 10-21 16:05 | 260.43 | 263.14 | 54 | 14063.22 | +146.34 | +1.04% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 34 | CRM | 11-12 14:30 | 11-12 14:50 | 247.85 | 246.99 | 52 | 12888.2 | -44.72 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 71.38 | ↓247.15 | 0.3776 | 1.43 | **LOSS** |
| 35 | CRM | 12-22 15:05 | 12-22 15:55 | 262.48 | 262.53 | 53 | 13911.44 | +2.65 | +0.02% | 0.02R | 50m | market | breakeven-stop | trend | trend | neutral | 68.85 | ↑260.85 | 0.5289 | 1.17 | **WIN** |
| 36 | CRM | 01-23 14:30 | 01-23 14:50 | 230.3 | 229.16 | 61 | 14048.3 | -69.54 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 79.92 | ↓229.32 | 0.4051 | 2.01 | **LOSS** |
| 37 | CRM | 02-02 14:40 | 02-02 15:30 | 215.48 | 215.18 | 65 | 14006.2 | -19.5 | -0.14% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 38 | CRM | 02-04 15:25 | 02-04 16:15 | 197.52 | 196.67 | 71 | 14023.92 | -60.35 | -0.43% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 53.69 | ↑193.04 | 0.1561 | 1.58 | **LOSS** |
| 39 | CRM | 02-25 14:50 | 02-25 16:10 | 188.87 | 188.59 | 74 | 13976.38 | -20.72 | -0.15% | 0.12R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.03 | ↑185.75 | 0.1348 | 1.26 | **LOSS** |
| 40 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 84 | 14007.84 | +354.48 | +2.53% | 3.61R | 35m | market | profit-target | breakout | breakout | neutral | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 41 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 80 | 14045.6 | +95.2 | +0.68% | 0.85R | 105m | market | timeout | breakout | breakout | neutral | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |

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

- ✅ **Profit factor 1.81** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:33:55.833Z*
