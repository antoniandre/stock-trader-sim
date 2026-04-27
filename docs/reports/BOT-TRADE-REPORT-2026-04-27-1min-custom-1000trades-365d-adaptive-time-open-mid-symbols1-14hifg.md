# Bot Trade Report — 41 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:12:05.070Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $104.51 (+0.1%) over 41 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 41 |
| Win rate | 51.22% (21W / 20L) |
| Net P&L | $+104.51 (+0.1%) |
| Gross profit | $983.97 |
| Gross loss | $879.46 |
| Profit factor | 1.12 |
| Avg win | $46.86 |
| Avg loss | $43.97 |
| Payoff ratio | 1.07:1 |
| Expectancy | $+2.55 / trade |
| Max drawdown | 0.35% |
| Sharpe ratio (ann.) | 0.65 |
| Trades / active day | 1.11 |
| Avg confidence | 87.29% |
| Avg trade duration | 12 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $100,104.51 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 56.25% | $-114.52 | $-7.16 |
| Mid  10:30–11:30 | 25 | 48% | $+219.03 | $8.76 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 41 | 21 | 51.22% | $+104.51 | $+2.55 | 1.12 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 31 | 15 | 48.39% | $-118.42 | $-3.82 |
| trend | 10 | 6 | 60% | $+222.93 | $+22.29 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 37 | 21 | 56.76% | $+168.77 | $+4.56 |
| thinChop | 4 | 0 | 0% | $-64.26 | $-16.07 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 24 | 1.3 | $+6 | 13 | 1.07 | $+1.9 | 0.29% | 0.76 | watch |
| Symbol | GOOGL | 24 | 1.3 | $+6 | 17 | 0.9 | $-2.33 | 0.35% | 0.64 | watch |
| Time slot | Mid 10:30-11:30 | 11 | 3.63 | $+26.44 | 14 | 0.8 | $-5.13 | 0.35% | 0.57 | watch |
| Setup | trend | 6 | 29.86 | $+52.34 | 4 | 0.63 | $-22.77 | 0.24% | 0.51 | watch |
| Time slot | Open 9:30-10:30 | 13 | 0.6 | $-11.29 | 3 | 1.7 | $+10.75 | 0.05% | 1.14 | reject |
| Setup | mean-revert | 18 | 0.63 | $-9.44 | 13 | 1.32 | $+3.96 | 0.1% | 0.81 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+33.17 | 1.04 |
| +3 bps/side | $-109.56 | 0.89 |
| +5 bps/side | $-252.23 | 0.76 |
| +10 bps/side | $-609.03 | 0.52 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stop-loss | 13 |
| trailing-stop | 11 |
| timeout | 9 |
| stagnation | 4 |
| profit-target | 3 |
| early-reversal | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-12 13:58 | 05-12 14:19 | 157.04 | 157.74 | 60 | 9422.4 | +42 | +0.45% | 0.9R | 21m | market | timeout | mixed | mean-revert | neutral | 47.68 | ↑157.54 | 0.4239 | 1.26 | **WIN** |
| 2 | GOOGL | 05-14 13:45 | 05-14 13:48 | 160.71 | 159.68 | 61 | 9803.31 | -62.83 | -0.64% | 1.1R | 3m | market | stop-loss | mixed | mean-revert | neutral | 51.55 | ↓160.98 | 0.4637 | 1.32 | **LOSS** |
| 3 | GOOGL | 05-14 14:51 | 05-14 15:08 | 164.29 | 164.13 | 68 | 11171.72 | -10.88 | -0.1% | 0.2R | 17m | market | stagnation | trend | trend | neutral | 69.68 | ↑161.64 | 0.3955 | 1.51 | **LOSS** |
| 4 | GOOGL | 05-20 13:30 | 05-20 13:44 | 165.91 | 166.74 | 59 | 9788.69 | +48.97 | +0.5% | 1R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 46.74 | ↑165.96 | 0.1475 | 5.96 | **WIN** |
| 5 | GOOGL | 05-21 14:56 | 05-21 15:17 | 171.34 | 172.85 | 65 | 11137.1 | +98.15 | +0.88% | 1.76R | 21m | market | timeout | trend | trend | neutral | 69.6 | ↑168.39 | 0.4223 | 1.55 | **WIN** |
| 6 | GOOGL | 05-29 13:31 | 05-29 13:44 | 173.18 | 173.19 | 52 | 9005.36 | +0.52 | +0.01% | 0.02R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 61.83 | ↓173.54 | 0.2818 | 1.88 | **WIN** |
| 7 | GOOGL | 06-25 13:45 | 06-25 13:49 | 170.2 | 168.98 | 57 | 9701.4 | -69.54 | -0.72% | 1.01R | 4m | market | stop-loss | mixed | mean-revert | neutral | 68.28 | ↓169.72 | 0.8668 | 0.91 | **LOSS** |
| 8 | GOOGL | 07-09 14:04 | 07-09 14:25 | 178.08 | 178.66 | 62 | 11040.96 | +35.96 | +0.33% | 0.66R | 21m | market | timeout | trend | trend | neutral | 74.36 | ↑176.09 | 0.584 | 1.07 | **WIN** |
| 9 | GOOGL | 07-24 13:42 | 07-24 13:49 | 194.29 | 194.44 | 43 | 8354.47 | +6.45 | +0.08% | 0.06R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 32.81 | ↓195.85 | 1.0894 | 1.01 | **WIN** |
| 10 | GOOGL | 08-12 13:45 | 08-12 13:48 | 203.14 | 201.81 | 48 | 9750.72 | -63.84 | -0.65% | 1.3R | 3m | market | stop-loss | mixed | mean-revert | neutral | 61.48 | ↓203.47 | 0.633 | 1.07 | **LOSS** |
| 11 | GOOGL | 09-03 14:06 | 09-03 14:15 | 229.21 | 227.64 | 39 | 8939.19 | -61.23 | -0.68% | 1.05R | 9m | market | stop-loss | mixed | mean-revert | neutral | 55.13 | ↓228.14 | 1.1381 | 1.03 | **LOSS** |
| 12 | GOOGL | 09-15 13:43 | 09-15 14:04 | 248.54 | 250.33 | 38 | 9444.52 | +68.02 | +0.72% | 0.85R | 21m | market | timeout | mixed | mean-revert | neutral | 72.72 | ↑248.26 | 1.9698 | 1.56 | **WIN** |
| 13 | GOOGL | 09-29 14:00 | 09-29 14:18 | 249.69 | 249.58 | 26 | 6491.94 | -2.86 | -0.04% | 0.08R | 18m | market | trailing-stop | bearish | mean-revert | neutral | 39.41 | ↓249.44 | 0.5009 | 1.6 | **LOSS** |
| 14 | GOOGL | 10-06 13:38 | 10-06 13:59 | 246.01 | 246.52 | 32 | 7872.32 | +16.32 | +0.21% | 0.36R | 21m | market | timeout | mixed | mean-revert | neutral | 55.62 | ↑246.89 | 0.5745 | 0.89 | **WIN** |
| 15 | GOOGL | 10-31 13:31 | 10-31 13:42 | 284.57 | 281.49 | 34 | 9675.38 | -104.72 | -1.08% | 0.97R | 11m | market | stop-loss | mixed | mean-revert | neutral | 53.63 | ↓284.85 | 0.4165 | 1.29 | **LOSS** |
| 16 | GOOGL | 11-05 14:39 | 11-05 15:00 | 280.26 | 283.82 | 39 | 10930.14 | +138.84 | +1.27% | 2.19R | 21m | market | timeout | trend | trend | neutral | 74.2 | ↑278.53 | 0.4499 | 1.13 | **WIN** |
| 17 | GOOGL | 11-06 14:30 | 11-06 14:35 | 284.86 | 285.46 | 34 | 9685.24 | +20.4 | +0.21% | 0.28R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 49.89 | ↓285.08 | 0.5585 | 4.46 | **WIN** |
| 18 | GOOGL | 11-11 15:05 | 11-11 15:23 | 289.4 | 288.9 | 22 | 6366.8 | -11 | -0.17% | 0.34R | 18m | market | stagnation | mixed | mean-revert | neutral | 50.41 | ↓289.31 | 0.1067 | 1.13 | **LOSS** |
| 19 | GOOGL | 11-17 14:35 | 11-17 14:55 | 291.38 | 292.48 | 38 | 11072.44 | +41.8 | +0.38% | 0.31R | 20m | market | trailing-stop | trend | trend | neutral | 78.82 | ↑288.51 | 2.9906 | 2.3 | **WIN** |
| 20 | GOOGL | 11-18 14:30 | 11-18 14:35 | 285.74 | 285.84 | 28 | 8000.72 | +2.8 | +0.03% | 0.04R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 50.35 | ↓286.71 | 0.6882 | 2.22 | **WIN** |
| 21 | GOOGL | 11-21 14:39 | 11-21 14:42 | 297.66 | 297.56 | 32 | 9525.12 | -3.2 | -0.03% | 0.02R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 56.01 | ↓298.53 | 2.1647 | 2.54 | **LOSS** |
| 22 | GOOGL | 11-21 14:56 | 11-21 15:01 | 299.58 | 296.91 | 32 | 9586.56 | -85.44 | -0.89% | 1.11R | 5m | market | stop-loss | mixed | mean-revert | neutral | 60.7 | ↓298.83 | 1.2925 | 0.86 | **LOSS** |
| 23 | GOOGL | 11-24 14:36 | 11-24 14:50 | 315.9 | 316.19 | 35 | 11056.5 | +10.15 | +0.09% | 0.11R | 14m | market | trailing-stop | trend | trend | neutral | 71.25 | ↑313.28 | 2.5418 | 1.27 | **WIN** |
| 24 | GOOGL | 11-25 14:32 | 11-25 14:37 | 320.52 | 324.77 | 21 | 6730.92 | +89.25 | +1.33% | 0.85R | 5m | market | profit-target | mixed | mean-revert | neutral | 53.54 | ↑322.88 | 1.3917 | 2.06 | **WIN** |
| 25 | GOOGL | 11-25 14:45 | 11-25 14:49 | 322.48 | 322.77 | 23 | 7417.04 | +6.67 | +0.09% | 0.07R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 53.14 | ↓323.91 | 0.5085 | 1.22 | **WIN** |
| 26 | GOOGL | 11-25 15:02 | 11-25 15:19 | 324.14 | 327.91 | 27 | 8751.78 | +101.79 | +1.16% | 1.32R | 17m | market | profit-target | mixed | mean-revert | neutral | 51.24 | ↑324.07 | 0.3837 | 1.15 | **WIN** |
| 27 | GOOGL | 12-03 14:36 | 12-03 14:52 | 316.35 | 314.88 | 31 | 9806.85 | -45.57 | -0.46% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 54.18 | ↓316.77 | 0.4128 | 1.21 | **LOSS** |
| 28 | GOOGL | 12-16 15:03 | 12-16 15:17 | 309.29 | 307.28 | 9 | 2783.61 | -18.09 | -0.65% | 1.3R | 14m | market | stop-loss | mixed | mean-revert | thinChop | 65.35 | ↓307.2 | 0.7704 | 0.93 | **LOSS** |
| 29 | GOOGL | 12-30 14:36 | 12-30 14:52 | 314.57 | 314.4 | 9 | 2831.13 | -1.53 | -0.05% | 0.09R | 16m | market | stagnation | mixed | mean-revert | thinChop | 56.59 | ↓315.3 | 0.5145 | 1.89 | **LOSS** |
| 30 | GOOGL | 01-07 14:58 | 01-07 15:14 | 320.15 | 319.95 | 24 | 7683.6 | -4.8 | -0.06% | 0.1R | 16m | market | stagnation | bearish | mean-revert | neutral | 42.81 | ↑319.07 | 1.0936 | 1.24 | **LOSS** |
| 31 | GOOGL | 01-08 14:32 | 01-08 14:44 | 326.28 | 323.32 | 34 | 11093.52 | -100.64 | -0.91% | 1.07R | 12m | market | stop-loss | breakout | trend | neutral | 71.06 | ↓326.76 | 1.1513 | 1.76 | **LOSS** |
| 32 | GOOGL | 01-09 14:44 | 01-09 14:52 | 330.17 | 328.24 | 33 | 10895.61 | -63.69 | -0.58% | 0.83R | 8m | market | stop-loss | trend | trend | neutral | 67.42 | ↓328.03 | 0.9821 | 1.32 | **LOSS** |
| 33 | GOOGL | 01-13 14:42 | 01-13 14:55 | 340.08 | 337.61 | 32 | 10882.56 | -79.04 | -0.73% | 0.82R | 13m | market | stop-loss | trend | trend | neutral | 79.38 | ↓337.15 | 1.931 | 1.08 | **LOSS** |
| 34 | GOOGL | 02-03 14:57 | 02-03 15:01 | 344.98 | 342.47 | 8 | 2759.84 | -20.08 | -0.73% | 1.28R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 62.36 | ↓346.17 | 0.2625 | 0.88 | **LOSS** |
| 35 | GOOGL | 02-04 14:31 | 02-04 14:37 | 340.84 | 341.18 | 28 | 9543.52 | +9.52 | +0.1% | 0.19R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 57.93 | ↓341.51 | 0.5273 | 2.65 | **WIN** |
| 36 | GOOGL | 02-05 14:59 | 02-05 15:06 | 321.21 | 318.14 | 8 | 2569.68 | -24.56 | -0.96% | 1.04R | 7m | market | stop-loss | mixed | mean-revert | thinChop | 39.68 | ↑317.04 | -0.6121 | 0.9 | **LOSS** |
| 37 | GOOGL | 02-20 14:30 | 02-20 14:38 | 305.63 | 309.86 | 36 | 11002.68 | +152.28 | +1.38% | 2.46R | 8m | market | profit-target | trend | trend | neutral | 65.55 | ↑305.12 | 0.3954 | 2.45 | **WIN** |
| 38 | GOOGL | 03-09 14:27 | 03-09 14:48 | 297.02 | 299.08 | 33 | 9801.66 | +67.98 | +0.69% | 1.35R | 21m | market | timeout | mixed | mean-revert | neutral | 56.96 | ↑296.16 | 0.4407 | 1.14 | **WIN** |
| 39 | GOOGL | 03-11 14:35 | 03-11 14:56 | 309.73 | 310.26 | 30 | 9291.9 | +15.9 | +0.17% | 0.34R | 21m | market | timeout | mixed | mean-revert | neutral | 38.39 | ↑308.77 | 0.2733 | 0.9 | **WIN** |
| 40 | GOOGL | 03-25 13:40 | 03-25 13:45 | 294.54 | 292.9 | 28 | 8247.12 | -45.92 | -0.56% | 0.67R | 5m | market | stop-loss | mixed | mean-revert | neutral | 70.18 | ↓294.23 | 1.006 | 0.9 | **LOSS** |
| 41 | GOOGL | 04-23 13:36 | 04-23 13:57 | 339.43 | 339.94 | 20 | 6788.6 | +10.2 | +0.15% | 0.3R | 21m | market | timeout | mixed | mean-revert | neutral | 46.94 | ↑340.02 | 0.1468 | 0.99 | **WIN** |

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

- ⚠️ **Profit factor 1.12 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:12:05.070Z*
