# Bot Trade Report — 40 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:05:46.902Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $748.31 (-0.75%) over 40 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 40 |
| Win rate | 30% (12W / 28L) |
| Net P&L | $-748.31 (-0.75%) |
| Gross profit | $1340.64 |
| Gross loss | $2088.95 |
| Profit factor | 0.64 |
| Avg win | $111.72 |
| Avg loss | $74.61 |
| Payoff ratio | 1.5:1 |
| Expectancy | $-18.71 / trade |
| Max drawdown | 0.75% |
| Sharpe ratio (ann.) | -2.84 |
| Trades / active day | 1.08 |
| Avg confidence | 98.75% |
| Avg trade duration | 51 min |
| Avg risk ratio | 0.86R |
| Starting equity | $100,000 |
| Ending equity | $99,251.69 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 14 | 28.57% | $-541.12 | $-38.65 |
| Mid  10:30–11:30 | 26 | 30.77% | $-207.19 | $-7.97 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| LLY | 40 | 12 | 30% | $-748.31 | $-18.71 | 0.64 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 28 | 12 | 42.86% | $+371.82 | $+13.28 |
| breakout | 12 | 0 | 0% | $-1120.13 | $-93.34 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 2 | 2 | 100% | $+112.12 | $+56.06 |
| neutral | 38 | 10 | 26.32% | $-860.43 | $-22.64 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 17 | 1.33 | $+10.51 | 11 | 1.46 | $+17.56 | 0.23% | 1.14 | promote |
| Time slot | Mid 10:30-11:30 | 13 | 1.36 | $+11.08 | 13 | 0.59 | $-27.02 | 0.5% | 0.47 | watch |
| Time slot | Open 9:30-10:30 | 11 | 0.24 | $-54.21 | 3 | 1.97 | $+18.39 | 0.06% | 1.37 | reject |
| Symbol | LLY | 24 | 0.62 | $-18.84 | 16 | 0.67 | $-18.51 | 0.56% | 0.54 | reject |
| Behavior | neutral | 24 | 0.62 | $-18.84 | 14 | 0.55 | $-29.16 | 0.56% | 0.44 | reject |
| Setup | breakout | 7 | 0 | $-90.12 | 5 | 0 | $-97.86 | 0.49% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-847.66 | 0.61 |
| +3 bps/side | $-1046.33 | 0.55 |
| +5 bps/side | $-1245.01 | 0.49 |
| +10 bps/side | $-1741.7 | 0.39 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| timeout | 9 |
| stagnation | 6 |
| stop-loss | 5 |
| trim-profit-target | 3 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LLY | 05-15 14:35 | 05-15 16:05 | 776.97 | 776.51 | 18 | 13985.46 | -8.28 | -0.06% | 0.09R | 90m | market | stagnation | trend | trend | neutral | 75.9 | ↑772.9 | 4.0664 | 1.07 | **LOSS** |
| 2 | LLY | 05-20 14:20 | 05-20 14:40 | 779.97 | 777.41 | 17 | 13259.49 | -43.52 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 69.74 | ↑776.32 | 1.83 | 1.21 | **LOSS** |
| 3 | LLY | 05-23 13:35 | 05-23 13:50 | 813.25 | 804.5 | 17 | 13825.25 | -148.75 | -1.08% | 1.54R | 15m | market | stop-loss | breakout | breakout | neutral | 73.76 | ↓811.78 | 2.0946 | 5.2 | **LOSS** |
| 4 | LLY | 05-29 14:40 | 05-29 15:30 | 812.17 | 811.24 | 17 | 13806.89 | -15.81 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.26 | ↑807.56 | 2.1101 | 1.35 | **LOSS** |
| 5 | LLY | 06-06 14:20 | 06-06 14:40 | 846.74 | 841.51 | 16 | 13547.84 | -83.68 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 79.7 | ↓841.28 | 2.1378 | 2.1 | **LOSS** |
| 6 | LLY | 07-23 14:20 | 07-23 16:10 | 880.66 | 883.35 | 15 | 13209.9 | +40.35 | +0.31% | 0.37R | 110m | market | timeout | trend | trend | neutral | 77.72 | ↑871.57 | 2.2089 | 1.18 | **WIN** |
| 7 | LLY | 09-06 13:30 | 09-06 13:40 | 926.4 | 917.44 | 13 | 12043.2 | -116.48 | -0.97% | 1.39R | 10m | market | stop-loss | breakout | breakout | neutral | 69.57 | ↓924.14 | 0.1312 | 1.89 | **LOSS** |
| 8 | LLY | 10-07 14:00 | 10-07 14:20 | 902.49 | 898.75 | 15 | 13537.35 | -56.1 | -0.41% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 75.45 | ↓898.3 | 4.3622 | 2.59 | **LOSS** |
| 9 | LLY | 11-08 14:35 | 11-08 16:20 | 808.76 | 825.54 | 17 | 13748.92 | +285.26 | +2.07% | 2.96R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑805.67 | 2.712 | 1.12 | **WIN** |
| 10 | LLY | 11-22 14:30 | 11-22 14:50 | 759.77 | 752.63 | 16 | 12156.32 | -114.24 | -0.94% | 1.34R | 20m | market | early-reversal | trend | breakout | neutral | 71.31 | ↓758.83 | 0.6632 | 3.86 | **LOSS** |
| 11 | LLY | 12-04 14:35 | 12-04 14:55 | 829.16 | 823.84 | 16 | 13266.56 | -85.12 | -0.64% | 0.86R | 20m | market | early-reversal | breakout | breakout | neutral | 80.08 | ↓825.43 | 2.0812 | 2.08 | **LOSS** |
| 12 | LLY | 12-24 15:20 | 12-24 15:55 | 797.67 | 793.53 | 17 | 13560.39 | -70.38 | -0.52% | 0.58R | 35m | market | early-reversal | trend | trend | neutral | 79.15 | ↑792.96 | 5.7258 | 1.18 | **LOSS** |
| 13 | LLY | 01-07 14:45 | 01-07 15:35 | 775.87 | 773.81 | 17 | 13189.79 | -35.02 | -0.27% | 0.39R | 50m | market | stagnation | breakout | breakout | neutral | 75.18 | ↓768.08 | 0.5028 | 1.72 | **LOSS** |
| 14 | LLY | 01-22 15:00 | 01-22 16:10 | 749.03 | 754.46 | 9 | 13482.54 | +48.87 | +0.72% | 1.03R | 70m | market | trim-profit-target | trend | trend | neutral | 77.49 | ↑746.28 | 2.4118 | 1.09 | **WIN** |
| 15 | LLY | 01-22 15:00 | 01-22 16:45 | 749.03 | 757.19 | 9 | 13482.54 | +73.44 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑746.28 | 2.4118 | 1.09 | **WIN** |
| 16 | LLY | 02-05 14:30 | 02-05 15:25 | 836.23 | 835.72 | 16 | 13379.68 | -8.16 | -0.06% | 0.09R | 55m | market | stagnation | breakout | breakout | neutral | 81.27 | ↓836.79 | 2.6349 | 1.83 | **LOSS** |
| 17 | LLY | 02-20 15:25 | 02-20 15:45 | 878 | 875.25 | 15 | 13170 | -41.25 | -0.31% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 66.93 | ↑874.38 | 2.9221 | 1.19 | **LOSS** |
| 18 | LLY | 03-20 14:00 | 03-20 14:50 | 851.98 | 848.57 | 16 | 13631.68 | -54.56 | -0.4% | 0.48R | 50m | market | early-reversal | trend | trend | neutral | 70.79 | ↓847.16 | 3.7901 | 1.03 | **LOSS** |
| 19 | LLY | 04-02 14:35 | 04-02 15:25 | 809.98 | 808.96 | 17 | 13769.66 | -17.34 | -0.13% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 60.58 | ↑803.02 | 2.1441 | 1.02 | **LOSS** |
| 20 | LLY | 04-15 14:10 | 04-15 14:35 | 763.38 | 759.68 | 18 | 13740.84 | -66.6 | -0.48% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 66.53 | ↑758.33 | 1.8189 | 2.07 | **LOSS** |
| 21 | LLY | 05-27 14:00 | 05-27 14:20 | 723.23 | 718.48 | 19 | 13741.37 | -90.25 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 22 | LLY | 07-23 14:25 | 07-23 16:10 | 786.47 | 795.08 | 17 | 13369.99 | +146.37 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 23 | LLY | 08-13 13:55 | 08-13 14:15 | 657.82 | 651.96 | 21 | 13814.22 | -123.06 | -0.89% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 84.6 | ↓651.81 | 3.518 | 1.78 | **LOSS** |
| 24 | LLY | 09-16 15:20 | 09-16 17:05 | 762.04 | 769.38 | 18 | 13716.72 | +132.12 | +0.96% | 1.35R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑753.77 | 2.3186 | 1.58 | **WIN** |
| 25 | LLY | 09-17 14:40 | 09-17 15:05 | 775.56 | 771.94 | 17 | 13184.52 | -61.54 | -0.47% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 78.52 | ↑767.66 | 1.991 | 1.39 | **LOSS** |
| 26 | LLY | 10-01 14:55 | 10-01 16:40 | 803.61 | 816.19 | 17 | 13661.37 | +213.86 | +1.57% | 1.26R | 105m | market | timeout | trend | trend | neutral | 72.52 | ↑792.74 | 10.7036 | 1.15 | **WIN** |
| 27 | LLY | 10-03 14:15 | 10-03 15:15 | 831.97 | 838.65 | 9 | 15807.43 | +60.12 | +0.8% | 1.03R | 60m | market | trim-profit-target | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 28 | LLY | 10-03 14:15 | 10-03 16:00 | 831.97 | 837.17 | 10 | 15807.43 | +52 | +0.63% | 0.81R | 105m | market | timeout | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 29 | LLY | 10-24 14:05 | 10-24 14:25 | 831.85 | 828.29 | 16 | 13309.6 | -56.96 | -0.43% | 0.61R | 20m | market | early-reversal | breakout | trend | neutral | 73.64 | ↑823.63 | 1.3329 | 1.06 | **LOSS** |
| 30 | LLY | 11-03 14:30 | 11-03 15:20 | 879.31 | 875.81 | 14 | 12310.34 | -49 | -0.4% | 0.5R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 31 | LLY | 11-04 15:25 | 11-04 15:40 | 913.37 | 897.65 | 14 | 12787.18 | -220.08 | -1.72% | 1.2R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 32 | LLY | 11-05 15:20 | 11-05 16:05 | 933.47 | 944.44 | 7 | 13068.58 | +76.79 | +1.18% | 0.9R | 45m | market | trim-profit-target | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 33 | LLY | 11-05 15:20 | 11-05 17:05 | 933.47 | 952.74 | 7 | 13068.58 | +134.89 | +2.06% | 1.57R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 34 | LLY | 11-21 14:45 | 11-21 15:00 | 1059.14 | 1048.12 | 13 | 13768.82 | -143.26 | -1.04% | 1.39R | 15m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 35 | LLY | 12-11 15:15 | 12-11 16:45 | 1019.05 | 1018.51 | 13 | 13247.65 | -7.02 | -0.05% | 0.03R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 36 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.64 | 1024.79 | 13 | 13489.32 | -167.05 | -1.24% | 1.77R | 15m | market | stop-loss | trend | trend | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 37 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.59 | 1028.21 | 13 | 13436.67 | -69.94 | -0.52% | 0.39R | 40m | market | early-reversal | breakout | breakout | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 38 | LLY | 02-23 15:05 | 02-23 16:50 | 1049.38 | 1055.27 | 13 | 13641.94 | +76.57 | +0.56% | 0.28R | 105m | market | timeout | trend | trend | neutral | 67.96 | ↑1043.18 | 8.7856 | 1.84 | **WIN** |
| 39 | LLY | 03-09 14:50 | 03-09 15:40 | 999.74 | 993.98 | 13 | 12996.62 | -74.88 | -0.58% | 0.71R | 50m | market | early-reversal | trend | trend | neutral | 73.23 | ↓989.32 | 1.3228 | 1.87 | **LOSS** |
| 40 | LLY | 04-08 15:20 | 04-08 15:40 | 957 | 952.67 | 14 | 13398 | -60.62 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 74.62 | ↑944.38 | 6.8477 | 1.05 | **LOSS** |

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

- ⚠️ **Profit factor 0.64 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.86R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:05:46.902Z*
