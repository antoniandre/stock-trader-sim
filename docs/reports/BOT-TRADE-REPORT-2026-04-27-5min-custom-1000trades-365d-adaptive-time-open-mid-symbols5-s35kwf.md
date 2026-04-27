# Bot Trade Report — 117 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:25:01.758Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $3222.68 (-3.22%) over 117 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 117 |
| Win rate | 29.06% (34W / 83L) |
| Net P&L | $-3222.68 (-3.22%) |
| Gross profit | $4467.27 |
| Gross loss | $7689.95 |
| Profit factor | 0.58 |
| Avg win | $131.39 |
| Avg loss | $92.65 |
| Payoff ratio | 1.42:1 |
| Expectancy | $-27.54 / trade |
| Max drawdown | 3.22% |
| Sharpe ratio (ann.) | -3.19 |
| Trades / active day | 1.39 |
| Avg confidence | 99.11% |
| Avg trade duration | 49 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $96,777.32 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 36 | 27.78% | $-1117.28 | $-31.04 |
| Mid  10:30–11:30 | 81 | 29.63% | $-2105.4 | $-25.99 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| HOOD | 36 | 12 | 33.33% | $-393.18 | $-10.92 | 0.82 | throttle |
| SNOW | 21 | 5 | 23.81% | $-514.05 | $-24.48 | 0.6 | throttle |
| MDB | 21 | 8 | 38.1% | $-601.05 | $-28.62 | 0.58 | throttle |
| TTD | 19 | 3 | 15.79% | $-748.49 | $-39.39 | 0.44 | throttle |
| APP | 20 | 6 | 30% | $-965.91 | $-48.3 | 0.35 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 76 | 24 | 31.58% | $-1600.17 | $-21.05 |
| breakout | 41 | 10 | 24.39% | $-1622.51 | $-39.57 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 1 | 0 | 0% | $-17 | $-17 |
| noisyHighBeta | 29 | 12 | 41.38% | $-466.15 | $-16.07 |
| neutral | 87 | 22 | 25.29% | $-2739.53 | $-31.49 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | MDB | 11 | 0.39 | $-54.32 | 10 | 0.99 | $-0.36 | 0.22% | 0.81 | reject |
| Symbol | HOOD | 23 | 0.75 | $-12.32 | 13 | 0.89 | $-8.45 | 0.62% | 0.77 | reject |
| Setup | trend | 53 | 0.48 | $-24.96 | 23 | 0.78 | $-12.06 | 0.71% | 0.65 | reject |
| Symbol | TTD | 11 | 0.05 | $-59.02 | 8 | 0.85 | $-12.4 | 0.42% | 0.73 | reject |
| Time slot | Mid 10:30-11:30 | 38 | 0.34 | $-36.01 | 43 | 0.77 | $-17.14 | 1.38% | 0.66 | reject |
| Behavior | neutral | 53 | 0.43 | $-36.23 | 34 | 0.72 | $-24.1 | 1.5% | 0.62 | reject |
| Behavior | noisyHighBeta | 16 | 0.82 | $-6.79 | 13 | 0.5 | $-27.5 | 0.43% | 0.42 | reject |
| Setup | breakout | 17 | 0.51 | $-42.53 | 24 | 0.63 | $-37.48 | 1.15% | 0.54 | reject |
| Symbol | APP | 12 | 0.33 | $-48.35 | 8 | 0.39 | $-48.21 | 0.43% | 0.33 | reject |
| Symbol | SNOW | 13 | 1.18 | $+4.96 | 8 | 0.38 | $-72.31 | 0.9% | 0.32 | reject |
| Time slot | Open 9:30-10:30 | 32 | 0.65 | $-21.17 | 4 | 0 | $-109.98 | 0.44% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-3497.03 | 0.56 |
| +3 bps/side | $-4045.73 | 0.51 |
| +5 bps/side | $-4594.47 | 0.47 |
| +10 bps/side | $-5966.11 | 0.39 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 52 |
| timeout | 20 |
| stagnation | 18 |
| stop-loss | 12 |
| profit-target | 6 |
| trim-profit-target | 5 |
| breakeven-stop | 2 |
| trailing-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | HOOD | 05-02 14:15 | 05-02 15:05 | 49.33 | 49.04 | 156 | 7695.48 | -45.24 | -0.59% | 0.3R | 50m | market | stagnation | trend | trend | noisyHighBeta | 78.05 | ↑48.39 | 0.497 | 1.09 | **LOSS** |
| 2 | TTD | 05-05 14:00 | 05-05 14:20 | 56.38 | 55.88 | 248 | 13982.24 | -124 | -0.89% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 80.34 | ↑55.74 | 0.4483 | 2.23 | **LOSS** |
| 3 | TTD | 05-05 15:05 | 05-05 15:25 | 56.55 | 56.18 | 247 | 13967.85 | -91.39 | -0.65% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 55.47 | ↑55.94 | 0.5404 | 1.14 | **LOSS** |
| 4 | HOOD | 05-07 14:25 | 05-07 14:50 | 50.08 | 49.27 | 153 | 7662.24 | -123.93 | -1.62% | 0.81R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 63.87 | ↓49.43 | 0.4643 | 1.22 | **LOSS** |
| 5 | HOOD | 05-08 14:20 | 05-08 16:05 | 53.37 | 54.5 | 144 | 7685.28 | +162.72 | +2.12% | 1.06R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.37 | ↑52.75 | 1.1888 | 1.23 | **WIN** |
| 6 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 76 | 13898.88 | -7.6 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 7 | HOOD | 05-13 14:15 | 05-13 14:45 | 61.35 | 60.79 | 115 | 7055.25 | -64.4 | -0.91% | 0.46R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 77.77 | ↑60.37 | 1.008 | 1.11 | **LOSS** |
| 8 | HOOD | 05-13 15:10 | 05-13 15:55 | 61.93 | 62.79 | 62 | 7679.32 | +53.32 | +1.39% | 0.9R | 45m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.12 | ↑60.73 | 0.8909 | 1.04 | **WIN** |
| 9 | HOOD | 05-13 15:10 | 05-13 16:55 | 61.93 | 62.8 | 62 | 7679.32 | +53.94 | +1.4% | 0.9R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.12 | ↑60.73 | 0.8909 | 1.04 | **WIN** |
| 10 | HOOD | 05-19 14:30 | 05-19 15:15 | 62.85 | 62.32 | 122 | 7667.7 | -64.66 | -0.84% | 0.42R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 62.97 | ↑61.85 | 0.3217 | 1.2 | **LOSS** |
| 11 | HOOD | 05-21 15:00 | 05-21 16:45 | 65.7 | 66.8 | 213 | 13994.1 | +234.3 | +1.67% | 1.64R | 105m | market | timeout | breakout | breakout | neutral | 61.76 | ↑65.01 | 0.2912 | 1.12 | **WIN** |
| 12 | HOOD | 05-27 14:10 | 05-27 14:40 | 66.63 | 66.12 | 210 | 13992.3 | -107.1 | -0.77% | 0.39R | 30m | market | early-reversal | breakout | breakout | neutral | 72.21 | ↑65.66 | 0.7055 | 1.29 | **LOSS** |
| 13 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.16 | 203.93 | 68 | 13882.88 | -15.64 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 14 | APP | 06-04 14:15 | 06-04 16:00 | 410.03 | 410.42 | 34 | 13941.02 | +13.26 | +0.1% | 0.06R | 105m | market | timeout | breakout | breakout | neutral | 65.97 | ↑403.82 | 1.7568 | 1.43 | **WIN** |
| 15 | TTD | 06-04 15:05 | 06-04 16:00 | 76.26 | 76.16 | 183 | 13955.58 | -18.3 | -0.13% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 55.65 | ↑75.85 | 0.3919 | 4.34 | **LOSS** |
| 16 | APP | 06-05 13:40 | 06-05 13:45 | 422.57 | 414.22 | 33 | 13944.81 | -275.55 | -1.98% | 2.11R | 5m | market | stop-loss | breakout | breakout | neutral | 85.5 | ↓418.5 | 1.08 | 1.58 | **LOSS** |
| 17 | HOOD | 06-05 14:55 | 06-05 15:45 | 76.08 | 75.42 | 184 | 13998.72 | -121.44 | -0.87% | 0.45R | 50m | market | early-reversal | breakout | breakout | neutral | 79.46 | ↑74 | 0.7159 | 1.16 | **LOSS** |
| 18 | SNOW | 06-06 15:05 | 06-06 15:25 | 212.86 | 211.98 | 65 | 13835.9 | -57.2 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 65.5 | ↓211.99 | 0.6038 | 1.39 | **LOSS** |
| 19 | TTD | 06-10 14:45 | 06-10 15:05 | 72.53 | 72.22 | 192 | 13925.76 | -59.52 | -0.43% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 69.46 | ↑72.05 | 0.1709 | 1.07 | **LOSS** |
| 20 | HOOD | 06-11 14:40 | 06-11 16:25 | 74.18 | 74.85 | 103 | 7640.54 | +69.01 | +0.9% | 0.53R | 105m | market | timeout | trend | trend | noisyHighBeta | 68.63 | ↑73.37 | 0.3266 | 1.07 | **WIN** |
| 21 | APP | 06-16 14:25 | 06-16 15:15 | 374.64 | 374.21 | 37 | 13861.68 | -15.91 | -0.11% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 70.47 | ↑370.58 | 2.202 | 1.15 | **LOSS** |
| 22 | HOOD | 06-16 14:55 | 06-16 15:20 | 75.99 | 75.57 | 184 | 13982.16 | -77.28 | -0.55% | 0.45R | 25m | market | early-reversal | trend | trend | neutral | 66.67 | ↑75.13 | 0.7864 | 1.09 | **LOSS** |
| 23 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.56 | 213.31 | 65 | 13881.4 | -16.25 | -0.12% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 24 | TTD | 06-23 14:10 | 06-23 15:55 | 68.8 | 68.97 | 202 | 13897.6 | +34.34 | +0.25% | 0.23R | 105m | market | timeout | trend | trend | neutral | 60.51 | ↑67.98 | 0.1233 | 1.15 | **WIN** |
| 25 | TTD | 07-03 14:05 | 07-03 14:50 | 74.83 | 74.42 | 186 | 13918.38 | -76.26 | -0.55% | 0.6R | 45m | market | early-reversal | trend | trend | neutral | 75.31 | ↓74.37 | 0.237 | 1.89 | **LOSS** |
| 26 | MDB | 07-03 14:10 | 07-03 14:35 | 212.54 | 211.29 | 65 | 13815.1 | -81.25 | -0.59% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 27 | HOOD | 07-09 14:10 | 07-09 14:30 | 93.71 | 92.94 | 82 | 7684.22 | -63.14 | -0.82% | 0.43R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 70.83 | ↓93.03 | 0.3135 | 1.31 | **LOSS** |
| 28 | APP | 07-17 14:45 | 07-17 15:20 | 368.16 | 366.44 | 37 | 13621.92 | -63.64 | -0.47% | 0.31R | 35m | market | early-reversal | trend | trend | neutral | 75.06 | ↑362.54 | 3.6017 | 1.14 | **LOSS** |
| 29 | MDB | 07-17 15:15 | 07-17 17:00 | 216.89 | 218.8 | 64 | 13880.96 | +122.24 | +0.88% | 1.26R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑214.88 | 1.9932 | 1.24 | **WIN** |
| 30 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.58 | 215.67 | 64 | 13861.12 | -58.24 | -0.42% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 31 | MDB | 07-22 13:35 | 07-22 13:40 | 227.9 | 225.35 | 61 | 13901.9 | -155.55 | -1.12% | 1.37R | 5m | market | stop-loss | breakout | breakout | neutral | 87.17 | ↓226.5 | 0.7262 | 2.65 | **LOSS** |
| 32 | TTD | 07-23 15:00 | 07-23 15:20 | 83.24 | 82.69 | 167 | 13901.08 | -91.85 | -0.66% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 71.18 | ↑82.46 | 0.4813 | 1.08 | **LOSS** |
| 33 | APP | 07-23 15:25 | 07-23 16:00 | 361.94 | 359.34 | 38 | 13753.72 | -98.8 | -0.72% | 0.96R | 35m | market | early-reversal | trend | trend | neutral | 78.28 | ↑356.57 | 2.405 | 1.07 | **LOSS** |
| 34 | HOOD | 07-25 14:10 | 07-25 15:05 | 103.61 | 105.16 | 67 | 13883.74 | +103.85 | +1.5% | 1.26R | 55m | market | trim-profit-target | trend | trend | neutral | 63.15 | ↑102.38 | 0.1746 | 1.13 | **WIN** |
| 35 | HOOD | 07-25 14:10 | 07-25 15:55 | 103.61 | 105.69 | 67 | 13883.74 | +139.36 | +2.01% | 1.69R | 105m | market | timeout | trend | trend | neutral | 63.15 | ↑102.38 | 0.1746 | 1.13 | **WIN** |
| 36 | HOOD | 07-30 14:45 | 07-30 15:05 | 106.96 | 106.19 | 131 | 14011.76 | -100.87 | -0.72% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 77.89 | ↑105.79 | 0.5758 | 1.1 | **LOSS** |
| 37 | MDB | 07-31 14:00 | 07-31 14:20 | 250.56 | 248.04 | 55 | 13780.8 | -138.6 | -1.01% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 77.98 | ↑247.21 | 0.9506 | 1.12 | **LOSS** |
| 38 | SNOW | 07-31 14:00 | 07-31 15:10 | 226.82 | 226.89 | 61 | 13836.02 | +4.27 | +0.03% | 0.03R | 70m | market | breakeven-stop | breakout | breakout | neutral | 93.2 | ↑224.22 | 1.0668 | 1.87 | **WIN** |
| 39 | HOOD | 08-07 14:40 | 08-07 16:00 | 111.08 | 110.91 | 100 | 11108 | -17 | -0.15% | 0.08R | 80m | market | stagnation | trend | trend | falseBreakoutProne | 62.08 | ↑110.05 | 1.7061 | 1.35 | **LOSS** |
| 40 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.38 | 195.46 | 71 | 13942.98 | -65.32 | -0.47% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 41 | MDB | 08-15 14:10 | 08-15 15:55 | 213.23 | 215.74 | 65 | 13859.95 | +163.15 | +1.18% | 0.94R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑210.83 | 1.7971 | 1.57 | **WIN** |
| 42 | APP | 08-15 14:40 | 08-15 15:00 | 440.29 | 436.14 | 31 | 13648.99 | -128.65 | -0.94% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 67.35 | ↑431.01 | 2.0878 | 1.24 | **LOSS** |
| 43 | TTD | 08-22 14:35 | 08-22 15:55 | 53.81 | 53.75 | 259 | 13936.79 | -15.54 | -0.11% | 0.07R | 80m | market | stagnation | trend | trend | neutral | 78.35 | ↑53.34 | 0.3951 | 1.82 | **LOSS** |
| 44 | APP | 08-25 15:15 | 08-25 15:35 | 449.57 | 445.78 | 17 | 7642.69 | -64.43 | -0.84% | 0.88R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.89 | ↓445.21 | 2.5059 | 1.62 | **LOSS** |
| 45 | HOOD | 09-03 14:25 | 09-03 15:15 | 102.19 | 101.64 | 137 | 14000.03 | -75.35 | -0.54% | 0.34R | 50m | market | early-reversal | breakout | breakout | neutral | 62.25 | ↑101.14 | 0.1193 | 1.1 | **LOSS** |
| 46 | MDB | 09-04 14:45 | 09-04 16:35 | 311.61 | 315.34 | 24 | 7478.64 | +89.52 | +1.2% | 1.11R | 110m | market | timeout | trend | trend | noisyHighBeta | 57.43 | ↑308.48 | -0.0258 | 1.35 | **WIN** |
| 47 | APP | 09-11 15:10 | 09-11 15:45 | 573.39 | 571.51 | 24 | 13761.36 | -45.12 | -0.33% | 0.25R | 35m | market | early-reversal | trend | trend | neutral | 58.04 | ↑568.46 | 1.5602 | 1.49 | **LOSS** |
| 48 | TTD | 09-16 14:35 | 09-16 15:15 | 46.1 | 45.83 | 302 | 13922.2 | -81.54 | -0.59% | 0.3R | 40m | market | early-reversal | breakout | trend | neutral | 56.94 | ↑44.96 | 0.025 | 1.08 | **LOSS** |
| 49 | HOOD | 09-16 14:45 | 09-16 15:15 | 117.32 | 116.62 | 119 | 13961.08 | -83.3 | -0.6% | 0.34R | 30m | market | early-reversal | breakout | breakout | neutral | 61.07 | ↑115.27 | 0.5127 | 1.17 | **LOSS** |
| 50 | SNOW | 09-19 14:00 | 09-19 15:45 | 225.24 | 227.7 | 62 | 13964.88 | +152.52 | +1.09% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑224.52 | 1.1048 | 1.3 | **WIN** |
| 51 | SNOW | 09-29 14:00 | 09-29 15:10 | 228.53 | 228.38 | 61 | 13940.33 | -9.15 | -0.07% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 70.72 | ↓227.06 | 1.1204 | 1.13 | **LOSS** |
| 52 | MDB | 09-29 15:00 | 09-29 16:45 | 317.92 | 318.18 | 44 | 13988.48 | +11.44 | +0.08% | 0.11R | 105m | market | timeout | trend | trend | neutral | 52.52 | ↑316.88 | 0.4923 | 1.3 | **WIN** |
| 53 | HOOD | 10-03 15:10 | 10-03 16:20 | 149.33 | 149.12 | 51 | 7615.83 | -10.71 | -0.14% | 0.12R | 70m | market | stagnation | trend | trend | noisyHighBeta | 74.31 | ↑147.85 | 0.7569 | 1.14 | **LOSS** |
| 54 | SNOW | 10-06 14:05 | 10-06 14:55 | 243.3 | 242.48 | 57 | 13868.1 | -46.74 | -0.34% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 70.27 | ↑241.93 | 1.8709 | 1.86 | **LOSS** |
| 55 | SNOW | 10-08 13:40 | 10-08 15:25 | 242.07 | 246.66 | 57 | 13797.99 | +261.63 | +1.9% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 72.69 | ↑239.9 | 0.9548 | 1.11 | **WIN** |
| 56 | APP | 10-16 14:40 | 10-16 15:15 | 615.86 | 612.9 | 22 | 13548.92 | -65.12 | -0.48% | 0.26R | 35m | market | early-reversal | trend | trend | neutral | 68.18 | ↑604.98 | 1.8511 | 1.78 | **LOSS** |
| 57 | TTD | 10-17 14:10 | 10-17 15:00 | 50.55 | 50.42 | 275 | 13901.25 | -35.75 | -0.26% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 60.92 | ↑49.57 | -0.0195 | 1.32 | **LOSS** |
| 58 | HOOD | 10-20 15:00 | 10-20 15:50 | 137.93 | 137.69 | 55 | 7586.15 | -13.2 | -0.17% | 0.14R | 50m | market | stagnation | trend | trend | noisyHighBeta | 69.22 | ↑136.09 | 1.8275 | 1.25 | **LOSS** |
| 59 | SNOW | 10-23 14:00 | 10-23 14:55 | 249.74 | 249.27 | 56 | 13985.44 | -26.32 | -0.19% | 0.16R | 55m | market | stagnation | breakout | trend | neutral | 77.86 | ↑247.48 | 2.2908 | 1.25 | **LOSS** |
| 60 | MDB | 10-27 14:05 | 10-27 14:30 | 346.09 | 340.21 | 40 | 13843.6 | -235.2 | -1.7% | 1.83R | 25m | market | stop-loss | trend | trend | neutral | 78.59 | ↓343.36 | 1.0255 | 2.54 | **LOSS** |
| 61 | SNOW | 10-28 15:05 | 10-28 15:25 | 270.24 | 269.23 | 51 | 13782.24 | -51.51 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑267.78 | 0.7228 | 1.84 | **LOSS** |
| 62 | MDB | 10-30 14:00 | 10-30 14:20 | 351.1 | 347.27 | 39 | 13692.9 | -149.37 | -1.09% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 74.71 | ↓346.29 | 2.0383 | 2.13 | **LOSS** |
| 63 | MDB | 10-30 15:20 | 10-30 15:30 | 355.33 | 351.57 | 39 | 13857.87 | -146.64 | -1.06% | 1.26R | 10m | market | stop-loss | trend | trend | neutral | 61.83 | ↑349.52 | 3.7156 | 1.81 | **LOSS** |
| 64 | APP | 10-31 13:35 | 10-31 15:20 | 639.08 | 649.82 | 21 | 13420.68 | +225.54 | +1.68% | 1.41R | 105m | market | timeout | breakout | breakout | neutral | 61.84 | ↑633.27 | -0.2674 | 2.05 | **WIN** |
| 65 | HOOD | 11-19 15:15 | 11-19 15:45 | 118.78 | 116.25 | 64 | 7601.92 | -161.92 | -2.13% | 1.15R | 30m | market | stop-loss | trend | trend | noisyHighBeta | 72.45 | ↓117.23 | 0.6899 | 1.88 | **LOSS** |
| 66 | MDB | 11-20 15:10 | 11-20 15:55 | 350.32 | 348.34 | 39 | 13662.48 | -77.22 | -0.57% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 77.59 | ↓348.97 | 3.7502 | 1.03 | **LOSS** |
| 67 | APP | 11-28 15:20 | 11-28 17:05 | 591.34 | 595.07 | 12 | 7096.08 | +44.76 | +0.63% | 0.55R | 105m | market | timeout | trend | trend | noisyHighBeta | 61.33 | ↑589.04 | 1.3468 | 2.61 | **WIN** |
| 68 | HOOD | 12-02 14:30 | 12-02 15:25 | 126.03 | 126.57 | 55 | 6931.65 | +29.7 | +0.43% | 0.43R | 55m | market | trailing-stop | breakout | trend | noisyHighBeta | 75.06 | ↓125.68 | 0.5467 | 3.34 | **WIN** |
| 69 | TTD | 12-02 14:45 | 12-02 15:35 | 40.38 | 40.12 | 344 | 13890.72 | -89.44 | -0.64% | 0.7R | 50m | market | early-reversal | breakout | breakout | neutral | 72 | ↓40.15 | 0.0532 | 2.32 | **LOSS** |
| 70 | APP | 12-04 15:15 | 12-04 15:45 | 681.59 | 676.26 | 20 | 13631.8 | -106.6 | -0.78% | 0.47R | 30m | market | early-reversal | breakout | breakout | neutral | 78.36 | ↓676.46 | 4.0651 | 1.72 | **LOSS** |
| 71 | APP | 12-05 14:30 | 12-05 14:40 | 699.5 | 686.45 | 19 | 13290.5 | -247.95 | -1.87% | 1.48R | 10m | market | stop-loss | trend | breakout | neutral | 57.98 | ↓696 | -0.8025 | 1.5 | **LOSS** |
| 72 | MDB | 12-05 15:05 | 12-05 15:35 | 404.8 | 402.3 | 17 | 6881.6 | -42.5 | -0.62% | 0.49R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 70.75 | ↑398.55 | 0.3094 | 1.07 | **LOSS** |
| 73 | MDB | 12-17 14:30 | 12-17 15:15 | 425.29 | 423.29 | 32 | 13609.28 | -64 | -0.47% | 0.67R | 45m | market | early-reversal | trend | trend | neutral | 71.46 | ↓424.28 | 1.1976 | 1.23 | **LOSS** |
| 74 | APP | 12-18 15:10 | 12-18 15:50 | 689.21 | 699.56 | 10 | 13784.2 | +103.5 | +1.5% | 0.75R | 40m | market | trim-profit-target | trend | trend | neutral | 73.14 | ↑687.83 | 5.7612 | 1.18 | **WIN** |
| 75 | APP | 12-18 15:10 | 12-18 16:55 | 689.21 | 698.49 | 10 | 13784.2 | +92.8 | +1.35% | 0.68R | 105m | market | timeout | trend | trend | neutral | 73.14 | ↑687.83 | 5.7612 | 1.18 | **WIN** |
| 76 | APP | 12-19 14:40 | 12-19 15:20 | 712.59 | 707.29 | 19 | 13539.21 | -100.7 | -0.74% | 0.53R | 40m | market | early-reversal | breakout | breakout | neutral | 71.63 | ↓709.98 | 2.5217 | 1.47 | **LOSS** |
| 77 | HOOD | 12-19 15:05 | 12-19 15:45 | 120.91 | 119.75 | 63 | 7617.33 | -73.08 | -0.96% | 0.5R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 70.74 | ↓119.87 | 0.5194 | 1.51 | **LOSS** |
| 78 | TTD | 12-22 14:30 | 12-22 14:45 | 37.76 | 37.13 | 368 | 13895.68 | -231.84 | -1.67% | 1.65R | 15m | market | stop-loss | breakout | breakout | neutral | 62.15 | ↓37.72 | 0.0032 | 1.28 | **LOSS** |
| 79 | TTD | 01-05 14:30 | 01-05 14:45 | 38.14 | 39.26 | 335 | 12776.9 | +375.2 | +2.94% | 4.2R | 15m | market | profit-target | trend | breakout | neutral | 73.45 | ↑38.09 | 0.0305 | 1.35 | **WIN** |
| 80 | SNOW | 01-05 14:30 | 01-05 15:40 | 219.17 | 224.35 | 63 | 13807.71 | +326.34 | +2.36% | 3.37R | 70m | market | profit-target | trend | trend | neutral | 70.3 | ↑218.65 | 0.702 | 1.48 | **WIN** |
| 81 | HOOD | 01-05 14:35 | 01-05 16:10 | 118.5 | 122.27 | 117 | 13864.5 | +441.09 | +3.18% | 2.41R | 95m | market | profit-target | breakout | breakout | neutral | 74.96 | ↑118.31 | 0.6945 | 1.15 | **WIN** |
| 82 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.89 | 223.97 | 61 | 13962.29 | -300.12 | -2.15% | 2.76R | 15m | market | stop-loss | breakout | breakout | neutral | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 83 | HOOD | 01-09 14:30 | 01-09 14:50 | 117.06 | 115.64 | 119 | 13930.14 | -168.98 | -1.21% | 1.53R | 20m | market | early-reversal | breakout | breakout | neutral | 66.27 | ↓116.99 | -0.195 | 4.13 | **LOSS** |
| 84 | HOOD | 01-12 14:30 | 01-12 14:50 | 117.21 | 116.47 | 109 | 12775.89 | -80.66 | -0.63% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 62.46 | ↓116.37 | -0.0015 | 3.56 | **LOSS** |
| 85 | HOOD | 01-12 15:15 | 01-12 16:50 | 117.77 | 118.74 | 59 | 13896.86 | +57.23 | +0.82% | 0.45R | 95m | market | trim-profit-target | trend | trend | neutral | 61.31 | ↑116.91 | 0.329 | 1.79 | **WIN** |
| 86 | HOOD | 01-12 15:15 | 01-12 17:00 | 117.77 | 118.35 | 59 | 13896.86 | +34.22 | +0.49% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.31 | ↑116.91 | 0.329 | 1.79 | **WIN** |
| 87 | MDB | 01-16 15:10 | 01-16 16:30 | 399.33 | 408.95 | 34 | 13577.22 | +327.08 | +2.41% | 1.46R | 80m | market | profit-target | breakout | breakout | neutral | 69.15 | ↑394.07 | 0.6032 | 1.11 | **WIN** |
| 88 | SNOW | 01-16 15:25 | 01-16 15:45 | 212.27 | 210.71 | 66 | 14009.82 | -102.96 | -0.73% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 70.48 | ↑209.44 | 0.7425 | 1.37 | **LOSS** |
| 89 | HOOD | 01-23 14:45 | 01-23 15:05 | 108.29 | 107.53 | 129 | 13969.41 | -98.04 | -0.7% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 82.86 | ↓107.37 | 0.1766 | 1.81 | **LOSS** |
| 90 | HOOD | 01-27 14:50 | 01-27 15:00 | 108.93 | 106.93 | 128 | 13943.04 | -256 | -1.84% | 1.7R | 10m | market | stop-loss | breakout | breakout | neutral | 70.98 | ↓107.81 | 0.0626 | 3.11 | **LOSS** |
| 91 | MDB | 01-28 14:35 | 01-28 15:30 | 420.04 | 419.63 | 33 | 13861.32 | -13.53 | -0.1% | 0.13R | 55m | market | breakeven-stop | breakout | breakout | neutral | 77.09 | ↓418.71 | 0.73 | 1.19 | **LOSS** |
| 92 | SNOW | 01-30 14:35 | 01-30 14:45 | 202.99 | 200.31 | 68 | 13803.32 | -182.24 | -1.32% | 1.33R | 10m | market | stop-loss | breakout | breakout | neutral | 82.3 | ↓202.41 | 0.3186 | 1.73 | **LOSS** |
| 93 | APP | 02-10 14:35 | 02-10 14:45 | 476.52 | 463.77 | 16 | 7624.32 | -204 | -2.68% | 1.34R | 10m | market | stop-loss | trend | trend | noisyHighBeta | 66.03 | ↓474.33 | 1.9651 | 1.39 | **LOSS** |
| 94 | TTD | 02-10 14:40 | 02-10 15:10 | 27.55 | 28.21 | 278 | 7658.9 | +183.48 | +2.4% | 1.88R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 69.87 | ↑27.54 | 0.0866 | 1.21 | **WIN** |
| 95 | MDB | 02-12 14:35 | 02-12 14:40 | 369.17 | 362.63 | 19 | 7014.23 | -124.26 | -1.77% | 1.82R | 5m | market | stop-loss | breakout | trend | noisyHighBeta | 73.15 | ↓368.82 | 1.5794 | 1.05 | **LOSS** |
| 96 | TTD | 02-13 14:30 | 02-13 14:50 | 26.52 | 26.26 | 526 | 13949.52 | -136.76 | -0.98% | 0.9R | 20m | market | early-reversal | breakout | breakout | neutral | 60.42 | ↓26.39 | 0.0278 | 1.25 | **LOSS** |
| 97 | HOOD | 02-13 15:20 | 02-13 15:45 | 76.28 | 75.67 | 182 | 13882.96 | -111.02 | -0.8% | 0.4R | 25m | market | early-reversal | breakout | trend | neutral | 73.99 | ↑74.25 | 1.2294 | 1.08 | **LOSS** |
| 98 | MDB | 02-18 15:10 | 02-18 16:55 | 361.27 | 362.34 | 21 | 7586.67 | +22.47 | +0.3% | 0.16R | 105m | market | timeout | breakout | trend | noisyHighBeta | 67.01 | ↑354 | 2.3504 | 1.05 | **WIN** |
| 99 | SNOW | 02-20 14:30 | 02-20 15:30 | 180.23 | 180.64 | 77 | 13877.71 | +31.57 | +0.23% | 0.28R | 60m | market | trailing-stop | breakout | breakout | neutral | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 100 | TTD | 02-24 14:35 | 02-24 15:00 | 24.64 | 24.35 | 525 | 12936 | -152.25 | -1.18% | 0.96R | 25m | market | early-reversal | breakout | breakout | neutral | 68.64 | ↓24.3 | 0.0135 | 1.11 | **LOSS** |
| 101 | TTD | 02-25 14:55 | 02-25 15:45 | 25.16 | 25.13 | 553 | 13913.48 | -16.59 | -0.12% | 0.09R | 50m | market | stagnation | trend | breakout | neutral | 62.55 | ↑24.8 | 0.0323 | 1.37 | **LOSS** |
| 102 | HOOD | 03-02 15:10 | 03-02 16:10 | 77 | 78.97 | 180 | 13860 | +354.6 | +2.56% | 1.28R | 60m | market | profit-target | breakout | breakout | neutral | 69.63 | ↑75.89 | 0.274 | 2.28 | **WIN** |
| 103 | HOOD | 03-09 15:25 | 03-09 15:45 | 77.82 | 77.43 | 98 | 7626.36 | -38.22 | -0.5% | 0.38R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 69.35 | ↑77.01 | 0.0903 | 1.29 | **LOSS** |
| 104 | TTD | 03-13 14:05 | 03-13 15:00 | 27.14 | 26.99 | 512 | 13895.68 | -76.8 | -0.55% | 0.34R | 55m | market | stagnation | breakout | breakout | neutral | 69.69 | ↓26.78 | 0.04 | 2.02 | **LOSS** |
| 105 | APP | 03-20 14:30 | 03-20 15:25 | 437.04 | 436.42 | 31 | 13548.24 | -19.22 | -0.14% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 46.92 | ↑428.09 | -0.6315 | 1.12 | **LOSS** |
| 106 | SNOW | 03-23 15:00 | 03-23 15:40 | 175.15 | 174.33 | 79 | 13836.85 | -64.78 | -0.47% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 67.22 | ↑172.81 | 1.7212 | 1.57 | **LOSS** |
| 107 | APP | 03-31 14:25 | 03-31 14:45 | 389.99 | 386.7 | 18 | 7019.82 | -59.22 | -0.84% | 0.42R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 78.09 | ↑380.96 | 4.1134 | 1.09 | **LOSS** |
| 108 | TTD | 04-02 14:35 | 04-02 15:25 | 22.27 | 22.2 | 624 | 13896.48 | -43.68 | -0.31% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 58.8 | ↑21.73 | 0.0209 | 1.2 | **LOSS** |
| 109 | SNOW | 04-02 14:35 | 04-02 15:00 | 154.06 | 152.55 | 90 | 13865.4 | -135.9 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 52.83 | ↑150.8 | -0.3339 | 1.1 | **LOSS** |
| 110 | MDB | 04-02 15:00 | 04-02 15:55 | 251.87 | 250.87 | 55 | 13852.85 | -55 | -0.4% | 0.22R | 55m | market | early-reversal | trend | trend | neutral | 70.23 | ↑247.29 | 0.3768 | 1.12 | **LOSS** |
| 111 | HOOD | 04-06 14:30 | 04-06 14:50 | 70.29 | 69.46 | 109 | 7661.61 | -90.47 | -1.18% | 0.59R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.16 | ↓69.79 | 0.3435 | 1.05 | **LOSS** |
| 112 | APP | 04-13 14:45 | 04-13 16:30 | 415.6 | 418.33 | 18 | 7480.8 | +49.14 | +0.66% | 0.37R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.86 | ↑408.68 | 7.2947 | 1.29 | **WIN** |
| 113 | MDB | 04-13 15:10 | 04-13 16:40 | 232.86 | 235.43 | 16 | 7451.52 | +41.12 | +1.1% | 1.15R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 59.83 | ↑229.88 | 2.2995 | 1.08 | **WIN** |
| 114 | MDB | 04-13 15:10 | 04-13 16:55 | 232.86 | 236.52 | 16 | 7451.52 | +58.56 | +1.57% | 1.64R | 105m | market | timeout | trend | trend | noisyHighBeta | 59.83 | ↑229.88 | 2.2995 | 1.08 | **WIN** |
| 115 | HOOD | 04-17 14:30 | 04-17 15:10 | 92.36 | 91.39 | 83 | 7665.88 | -80.51 | -1.05% | 0.53R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 60.19 | ↓91.23 | 1.4897 | 1.17 | **LOSS** |
| 116 | MDB | 04-22 14:15 | 04-22 14:50 | 270.65 | 267.64 | 51 | 13803.15 | -153.51 | -1.11% | 0.61R | 35m | market | early-reversal | trend | trend | neutral | 67.23 | ↓269.05 | 1.5492 | 1.39 | **LOSS** |
| 117 | SNOW | 04-22 14:25 | 04-22 14:50 | 156.2 | 154.51 | 89 | 13901.8 | -150.41 | -1.08% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 79.26 | ↓154.47 | 1.148 | 1.37 | **LOSS** |

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

- ⚠️ **Profit factor 0.58 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:25:01.758Z*
