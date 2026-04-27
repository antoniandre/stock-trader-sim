# Bot Trade Report — 60 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:03:03.410Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $3012.61 (+3.01%) over 60 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 60 |
| Win rate | 46.67% (28W / 32L) |
| Net P&L | $+3012.61 (+3.01%) |
| Gross profit | $6889.69 |
| Gross loss | $3877.08 |
| Profit factor | 1.78 |
| Avg win | $246.06 |
| Avg loss | $121.16 |
| Payoff ratio | 2.03:1 |
| Expectancy | $+50.21 / trade |
| Max drawdown | 1.14% |
| Sharpe ratio (ann.) | 3.37 |
| Trades / active day | 1.02 |
| Avg confidence | 98.28% |
| Avg trade duration | 52 min |
| Avg risk ratio | 1.11R |
| Starting equity | $100,000 |
| Ending equity | $103,012.61 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 34 | 44.12% | $+845.44 | $24.87 |
| Mid  10:30–11:30 | 26 | 50% | $+2167.17 | $83.35 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 60 | 28 | 46.67% | $+3012.61 | $+50.21 | 1.78 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 5 | 50% | $+783.96 | $+78.4 |
| breakout | 50 | 23 | 46% | $+2228.65 | $+44.57 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 9 | 5 | 55.56% | $+1442.92 | $+160.32 |
| falseBreakoutProne | 26 | 13 | 50% | $+1395.95 | $+53.69 |
| noisyHighBeta | 11 | 5 | 45.45% | $+414.55 | $+37.69 |
| neutral | 14 | 5 | 35.71% | $-240.81 | $-17.2 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 36 | 1.58 | $+31.46 | 24 | 1.97 | $+78.33 | 1.15% | 1.73 | promote |
| Setup | breakout | 28 | 1.41 | $+25.82 | 22 | 1.8 | $+68.45 | 1.16% | 1.59 | promote |
| Setup | trend | 8 | 3.13 | $+51.23 | 2 | 7.63 | $+187.07 | 0.06% | 5.87 | watch |
| Behavior | falseBreakoutProne | 21 | 3.35 | $+82.8 | 5 | 0.48 | $-68.59 | 0.5% | 0.42 | watch |
| Time slot | Open 9:30-10:30 | 30 | 1.69 | $+37.7 | 4 | 0.53 | $-71.42 | 0.5% | 0.47 | watch |
| Time slot | Mid 10:30-11:30 | 6 | 1 | $+0.26 | 20 | 2.63 | $+108.28 | 0.72% | 2.28 | reject |
| Behavior | neutral | 11 | 0.92 | $-4.74 | 3 | 0.26 | $-62.89 | 0.25% | 0.18 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2843.73 | 1.72 |
| +3 bps/side | $+2505.96 | 1.6 |
| +5 bps/side | $+2168.15 | 1.5 |
| +10 bps/side | $+1323.81 | 1.27 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 14 |
| profit-target | 12 |
| timeout | 11 |
| stagnation | 9 |
| stop-loss | 6 |
| trailing-stop | 5 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 2 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 3 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 649 | 13953.5 | +38.94 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 4 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 649 | 13966.48 | -38.94 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 5 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 699 | 13952.04 | +202.71 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 6 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 7 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 8 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 9 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 10 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 11 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 12 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 13 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 646 | 14011.74 | +419.9 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 14 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 609 | 14073.99 | -30.45 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 15 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 620 | 14061.6 | +279 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 16 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 631 | 14115.47 | -31.55 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 17 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 618 | 14108.94 | +346.08 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 18 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 603 | 14146.38 | -180.9 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 19 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 671 | 14124.55 | -40.26 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 20 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 698 | 14120.54 | -6.98 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 21 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 674 | 14113.56 | -94.36 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 22 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 657 | 14105.79 | -65.7 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 23 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 587 | 14105.61 | +275.89 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 24 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 586 | 14134.32 | +82.04 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 25 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 571 | 14137.96 | -97.07 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 26 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 573 | 14135.91 | +366.72 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 27 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 563 | 14187.6 | -45.04 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 28 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 471 | 14172.39 | -273.18 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 29 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 479 | 14135.29 | +100.59 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 30 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 469 | 14140.35 | +220.43 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 31 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 425 | 14178 | -242.25 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 32 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 378 | 14137.2 | -60.48 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 33 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 351 | 13039.65 | +319.41 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 34 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 371 | 14190.75 | -163.24 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 35 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 327 | 13037.49 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 36 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 373 | 14159.08 | -123.09 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 37 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 405 | 14134.5 | +64.8 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 38 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 387 | 14164.2 | -50.31 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 39 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 354 | 14145.84 | -99.12 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 40 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 379 | 14132.91 | +333.52 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 41 | INTC | 01-02 14:35 | 01-02 15:05 | 38.51 | 39.68 | 368 | 14171.68 | +430.56 | +3.04% | 2.13R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 79.83 | ↑38.35 | 0.2605 | 1.48 | **WIN** |
| 42 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 43 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 44 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 45 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 46 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 47 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 256 | 13258.24 | +401.92 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 48 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 297 | 14466.87 | -56.43 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 49 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 298 | 14453 | +196.68 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 50 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 51 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 52 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 53 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 314 | 14531.92 | -197.82 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 54 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 289 | 13455.84 | -320.79 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 55 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 56 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 309 | 14424.12 | -117.42 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 57 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 307 | 14422.86 | -386.82 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 58 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 282 | 13222.98 | +315.84 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 59 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 60 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |

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

- ✅ **Profit factor 1.78** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.11R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:03:03.410Z*
