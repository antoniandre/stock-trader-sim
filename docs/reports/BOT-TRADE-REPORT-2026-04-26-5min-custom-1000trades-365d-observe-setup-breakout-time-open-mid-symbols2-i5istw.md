# Bot Trade Report — 96 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:03:20.078Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 2 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $3035.28 (+3.04%) over 96 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 96 |
| Win rate | 40.63% (39W / 57L) |
| Net P&L | $+3035.28 (+3.04%) |
| Gross profit | $9630.26 |
| Gross loss | $6594.98 |
| Profit factor | 1.46 |
| Avg win | $246.93 |
| Avg loss | $115.7 |
| Payoff ratio | 2.13:1 |
| Expectancy | $+31.62 / trade |
| Max drawdown | 1.58% |
| Sharpe ratio (ann.) | 2.42 |
| Trades / active day | 1.14 |
| Avg confidence | 98.03% |
| Avg trade duration | 51 min |
| Avg risk ratio | 1.02R |
| Starting equity | $100,000 |
| Ending equity | $103,035.28 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 47 | 34.04% | $-191.47 | $-4.07 |
| Mid  10:30–11:30 | 49 | 46.94% | $+3226.75 | $65.85 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 56 | 26 | 46.43% | $+3142.86 | $+56.12 | 1.81 | eligible |
| TSLA | 40 | 13 | 32.5% | $-107.58 | $-2.69 | 0.96 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 96 | 39 | 40.63% | $+3035.28 | $+31.62 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 19 | 9 | 47.37% | $+1367.09 | $+71.95 |
| falseBreakoutProne | 41 | 16 | 39.02% | $+777.99 | $+18.98 |
| noisyHighBeta | 15 | 7 | 46.67% | $+653.4 | $+43.56 |
| neutral | 21 | 7 | 33.33% | $+236.8 | $+11.28 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 33 | 1.88 | $+51.48 | 23 | 1.74 | $+62.78 | 1.16% | 1.52 | promote |
| Time slot | Mid 10:30-11:30 | 18 | 3.29 | $+82.61 | 31 | 1.81 | $+56.12 | 1.03% | 1.54 | promote |
| Setup | breakout | 57 | 1.55 | $+33.09 | 39 | 1.36 | $+29.46 | 1.61% | 1.17 | promote |
| Behavior | noisyHighBeta | 7 | 3.13 | $+80.54 | 8 | 1.1 | $+11.21 | 0.53% | 0.97 | watch |
| Behavior | neutral | 8 | 1.81 | $+54.77 | 13 | 0.78 | $-15.49 | 0.53% | 0.64 | watch |
| Behavior | falseBreakoutProne | 33 | 1.73 | $+40.34 | 8 | 0.45 | $-69.17 | 0.55% | 0.39 | watch |
| Behavior | extendedBreakout | 9 | 0.43 | $-49.67 | 10 | 6.02 | $+181.41 | 0.27% | 5.04 | reject |
| Symbol | TSLA | 24 | 1.13 | $+7.81 | 16 | 0.76 | $-18.44 | 0.48% | 0.63 | reject |
| Time slot | Open 9:30-10:30 | 39 | 1.15 | $+10.24 | 8 | 0.43 | $-73.85 | 0.6% | 0.37 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2769.24 | 1.41 |
| +3 bps/side | $+2237.11 | 1.32 |
| +5 bps/side | $+1705.03 | 1.23 |
| +10 bps/side | $+374.85 | 1.05 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 30 |
| timeout | 18 |
| profit-target | 15 |
| stagnation | 11 |
| stop-loss | 10 |
| trailing-stop | 8 |
| breakeven-stop | 4 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 2 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 3 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 4 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 5 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 6 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 7 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 8 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 9 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 10 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 11 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 12 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 13 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 14 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 15 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 645 | 13990.05 | +419.25 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 16 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 608 | 14050.88 | -30.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 17 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 628 | 14048.36 | -31.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 18 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 615 | 14040.45 | +344.4 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 19 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 20 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 601 | 14099.46 | -180.3 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 21 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 669 | 14082.45 | -40.14 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 22 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 23 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 695 | 14059.85 | -6.95 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 24 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 672 | 14071.68 | -94.08 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 25 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 655 | 14062.85 | -65.5 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 26 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 27 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 584 | 14033.52 | +274.48 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 28 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 29 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 569 | 14088.44 | -96.73 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 30 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 570 | 14061.9 | +364.8 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 31 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 32 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 469 | 14112.21 | -272.02 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 33 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 477 | 14076.27 | +100.17 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 34 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 467 | 14080.05 | +219.49 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 35 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 423 | 14111.28 | -241.11 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 36 | INTC | 10-01 13:35 | 10-01 13:50 | 34.1 | 33.68 | 413 | 14083.3 | -173.46 | -1.23% | 1.32R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.06 | ↓33.85 | 0.117 | 2.89 | **LOSS** |
| 37 | TSLA | 10-01 14:20 | 10-01 15:20 | 455.01 | 453.68 | 30 | 13650.3 | -39.9 | -0.29% | 0.2R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 75.29 | ↑447.98 | 2.5993 | 1.16 | **LOSS** |
| 38 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 39 | INTC | 10-15 14:30 | 10-15 15:30 | 36.69 | 36.65 | 383 | 14052.27 | -15.32 | -0.11% | 0.07R | 60m | market | stagnation | breakout | breakout | noisyHighBeta | 65.4 | ↑36.28 | 0.0913 | 2.3 | **LOSS** |
| 40 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 349 | 12965.35 | +317.59 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 41 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 369 | 14114.25 | -162.36 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 42 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 43 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 44 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 45 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 371 | 14083.16 | -122.43 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 46 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 31 | 13587.3 | +265.05 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 47 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 34 | 13603.74 | +324.02 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 48 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 33 | 13647.15 | +197.01 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 49 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 403 | 14064.7 | +64.48 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 50 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 51 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 52 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 33 | 13631.31 | +187.44 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 53 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 385 | 14091 | -50.05 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 54 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 32 | 13830.08 | -84.48 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 55 | INTC | 11-28 14:35 | 11-28 15:20 | 37.9 | 38.99 | 345 | 13075.5 | +376.05 | +2.88% | 2.82R | 45m | market | profit-target | breakout | breakout | noisyHighBeta | 77.5 | ↑37.82 | 0.1255 | 1.99 | **WIN** |
| 56 | INTC | 11-28 15:25 | 11-28 17:10 | 39.11 | 40.01 | 361 | 14118.71 | +324.9 | +2.3% | 1.15R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.58 | ↑38.6 | 0.5535 | 1.53 | **WIN** |
| 57 | INTC | 12-02 14:45 | 12-02 15:25 | 41.13 | 42.27 | 344 | 14148.72 | +392.16 | +2.77% | 2.1R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 58 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 30 | 13603.8 | -94.8 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 59 | INTC | 12-05 15:00 | 12-05 15:30 | 42.57 | 42.23 | 334 | 14218.38 | -113.56 | -0.8% | 0.48R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.93 | ↑41.95 | 0.3823 | 2.62 | **LOSS** |
| 60 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 31 | 13734.55 | +127.41 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 61 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 30 | 13584.6 | -15.3 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 62 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 355 | 14185.8 | -99.4 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 63 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 64 | INTC | 12-19 14:35 | 12-19 15:45 | 37.08 | 37.02 | 383 | 14201.64 | -22.98 | -0.16% | 0.17R | 70m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 65 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 380 | 14170.2 | +334.4 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 66 | INTC | 01-02 14:40 | 01-02 15:20 | 38.78 | 39.04 | 341 | 13223.98 | +88.66 | +0.67% | 0.42R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 81.43 | ↓38.49 | 0.3298 | 2.36 | **WIN** |
| 67 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 68 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 69 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 70 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.74 | 441.12 | 31 | 13755.94 | -81.22 | -0.59% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 71 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 72 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 73 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.66 | 443.07 | 31 | 13815.46 | -80.29 | -0.58% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 74 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 75 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 257 | 13310.03 | +403.49 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 76 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 32 | 13633.92 | +394.88 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 77 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 299 | 14501.5 | +197.34 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 78 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 79 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 34 | 13874.04 | -74.46 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 80 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 81 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 82 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 83 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 315 | 14578.2 | -198.45 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 84 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 290 | 13502.4 | -321.9 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 85 | TSLA | 02-24 15:25 | 02-24 15:50 | 407.63 | 405.1 | 34 | 13859.42 | -86.02 | -0.62% | 0.59R | 25m | market | early-reversal | breakout | breakout | neutral | 79.51 | ↑402.65 | 2.1488 | 2.05 | **LOSS** |
| 86 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 87 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 310 | 14470.8 | -117.8 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 88 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 33 | 13689.06 | -94.71 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 89 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 308 | 14469.84 | -388.08 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 90 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 36 | 13691.88 | +128.88 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 91 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 283 | 13269.87 | +316.96 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 92 | TSLA | 04-06 13:30 | 04-06 13:45 | 367.33 | 363.53 | 38 | 13958.54 | -144.4 | -1.03% | 1.3R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.54 | ↓365.47 | 0.6804 | 1.95 | **LOSS** |
| 93 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 94 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 34 | 13612.58 | +199.24 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 95 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |
| 96 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 36 | 13694.4 | -194.4 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |

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
| 10 | **Slippage model** | 0.03 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 1.46 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ✅ **Avg R = 1.02R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:03:20.078Z*
