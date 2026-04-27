# Bot Trade Report — 126 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:02:05.796Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 2 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $4803.74 (+4.8%) over 126 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 126 |
| Win rate | 45.24% (57W / 69L) |
| Net P&L | $+4803.74 (+4.8%) |
| Gross profit | $11979.52 |
| Gross loss | $7175.78 |
| Profit factor | 1.67 |
| Avg win | $210.17 |
| Avg loss | $104 |
| Payoff ratio | 2.02:1 |
| Expectancy | $+38.12 / trade |
| Max drawdown | 1.62% |
| Sharpe ratio (ann.) | 3.33 |
| Trades / active day | 1.29 |
| Avg confidence | 98.37% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.99R |
| Starting equity | $100,000 |
| Ending equity | $104,803.74 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 66 | 45.45% | $+2245.9 | $34.03 |
| Mid  10:30–11:30 | 60 | 45% | $+2557.84 | $42.63 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 60 | 28 | 46.67% | $+3012.61 | $+50.21 | 1.78 | eligible |
| TSLA | 66 | 29 | 43.94% | $+1791.13 | $+27.14 | 1.54 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 99 | 43 | 43.43% | $+3844.43 | $+38.83 |
| trend | 27 | 14 | 51.85% | $+959.31 | $+35.53 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 50 | 22 | 44% | $+2163.09 | $+43.26 |
| extendedBreakout | 20 | 9 | 45% | $+1227.94 | $+61.4 |
| neutral | 41 | 19 | 46.34% | $+730.86 | $+17.83 |
| noisyHighBeta | 15 | 7 | 46.67% | $+681.85 | $+45.46 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 36 | 1.58 | $+31.46 | 24 | 1.97 | $+78.33 | 1.15% | 1.73 | promote |
| Setup | trend | 20 | 2.06 | $+27.17 | 7 | 3.46 | $+59.41 | 0.17% | 2.47 | promote |
| Setup | breakout | 55 | 1.62 | $+34.56 | 44 | 1.57 | $+44.18 | 1.61% | 1.35 | promote |
| Symbol | TSLA | 39 | 1.79 | $+33.63 | 27 | 1.29 | $+17.77 | 0.55% | 1.06 | watch |
| Behavior | falseBreakoutProne | 42 | 2.61 | $+64.71 | 8 | 0.45 | $-69.33 | 0.55% | 0.39 | watch |
| Time slot | Open 9:30-10:30 | 58 | 2.03 | $+48.98 | 8 | 0.43 | $-74.38 | 0.6% | 0.37 | watch |
| Behavior | extendedBreakout | 8 | 0.76 | $-22.56 | 12 | 3.07 | $+117.37 | 0.49% | 2.61 | reject |
| Time slot | Mid 10:30-11:30 | 17 | 0.53 | $-23.34 | 43 | 2.17 | $+68.71 | 1.08% | 1.83 | reject |
| Behavior | neutral | 24 | 1 | $+0.08 | 17 | 1.95 | $+42.88 | 0.5% | 1.56 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+4463.54 | 1.61 |
| +3 bps/side | $+3783.02 | 1.49 |
| +5 bps/side | $+3102.55 | 1.38 |
| +10 bps/side | $+1401.38 | 1.15 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 36 |
| timeout | 30 |
| stagnation | 17 |
| profit-target | 17 |
| trailing-stop | 9 |
| stop-loss | 9 |
| breakeven-stop | 4 |
| trim-profit-target | 4 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 2 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 3 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 4 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 5 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 6 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 7 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 8 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 649 | 13953.5 | +38.94 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 9 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 649 | 13966.48 | -38.94 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 10 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 11 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 699 | 13952.04 | +202.71 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 12 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 13 | TSLA | 06-10 13:35 | 06-10 14:40 | 313.47 | 313.35 | 44 | 13792.68 | -5.28 | -0.04% | 0.02R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.25 | ↓313.22 | 3.6775 | 1.35 | **LOSS** |
| 14 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 15 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 16 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 17 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 18 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 19 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 20 | TSLA | 06-23 13:40 | 06-23 14:10 | 334.51 | 343.84 | 38 | 12711.38 | +354.54 | +2.79% | 1.68R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 86.87 | ↑333.01 | 1.9842 | 2.83 | **WIN** |
| 21 | TSLA | 06-23 14:20 | 06-23 16:05 | 350 | 354.81 | 39 | 13650 | +187.59 | +1.37% | 0.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.3 | ↑339.94 | 6.6463 | 2.31 | **WIN** |
| 22 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 646 | 14011.74 | +419.9 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 23 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 609 | 14073.99 | -30.45 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 24 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 620 | 14061.6 | +279 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 25 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 631 | 14115.47 | -31.55 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 26 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 618 | 14108.94 | +346.08 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 27 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 28 | TSLA | 07-16 13:30 | 07-16 15:15 | 314.7 | 319.47 | 40 | 12588 | +190.8 | +1.52% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 56.59 | ↑314.34 | -0.832 | 2.95 | **WIN** |
| 29 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 603 | 14146.38 | -180.9 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 30 | TSLA | 07-18 13:45 | 07-18 14:35 | 326.13 | 325.92 | 42 | 13697.46 | -8.82 | -0.06% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.78 | ↓324.69 | 1.3279 | 2.69 | **LOSS** |
| 31 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 22 | 13994.64 | +71.72 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 32 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13994.64 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 33 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 671 | 14124.55 | -40.26 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 34 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 45 | 13950 | -47.7 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 35 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 698 | 14120.54 | -6.98 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 36 | TSLA | 08-05 13:50 | 08-05 14:10 | 312.15 | 308.35 | 44 | 13734.6 | -167.2 | -1.22% | 1.12R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57 | ↓308.63 | 0.1486 | 1.47 | **LOSS** |
| 37 | TSLA | 08-06 13:40 | 08-06 15:25 | 313.34 | 318.35 | 44 | 13786.96 | +220.44 | +1.6% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.52 | ↑310.84 | 0.5053 | 1.42 | **WIN** |
| 38 | TSLA | 08-08 13:35 | 08-08 15:20 | 328.48 | 333.38 | 42 | 13796.16 | +205.8 | +1.49% | 1.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.85 | ↑325.67 | 1.855 | 2.23 | **WIN** |
| 39 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 674 | 14113.56 | -94.36 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 40 | TSLA | 08-11 13:35 | 08-11 15:20 | 340.6 | 342.91 | 41 | 13964.6 | +94.71 | +0.68% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.84 | ↑339.05 | 2.1054 | 2.32 | **WIN** |
| 41 | TSLA | 08-11 15:25 | 08-11 17:05 | 344.19 | 343.75 | 40 | 13767.6 | -17.6 | -0.13% | 0.15R | 100m | market | stagnation | trend | trend | neutral | 66.87 | ↑341.07 | 2.7526 | 1 | **LOSS** |
| 42 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 657 | 14105.79 | -65.7 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 43 | TSLA | 08-13 13:30 | 08-13 14:10 | 346.5 | 344.33 | 40 | 13860 | -86.8 | -0.63% | 0.78R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.88 | ↓344.47 | 1.1247 | 2.86 | **LOSS** |
| 44 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 45 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 587 | 14105.61 | +275.89 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 46 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.89 | 335.04 | 43 | 14013.27 | +393.45 | +2.81% | 3.85R | 30m | market | profit-target | breakout | breakout | extendedBreakout | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 47 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 48 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 586 | 14134.32 | +82.04 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 49 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 37 | 12936.31 | -25.16 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 50 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 571 | 14137.96 | -97.07 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 51 | TSLA | 09-10 14:45 | 09-10 16:30 | 353.36 | 354.25 | 39 | 13781.04 | +34.71 | +0.25% | 0.24R | 105m | market | timeout | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 52 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.27 | 361.17 | 19 | 13933.53 | +74.1 | +1.09% | 0.75R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 53 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.27 | 362.34 | 20 | 13933.53 | +101.4 | +1.42% | 0.98R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 54 | TSLA | 09-12 13:35 | 09-12 14:10 | 377.06 | 386.54 | 37 | 13951.22 | +350.76 | +2.51% | 2.59R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.95 | ↑374.37 | 1.7703 | 2.98 | **WIN** |
| 55 | TSLA | 09-12 14:25 | 09-12 14:50 | 391.51 | 388.65 | 36 | 14094.36 | -102.96 | -0.73% | 0.38R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 95.83 | ↑383.83 | 6.2093 | 1.27 | **LOSS** |
| 56 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 573 | 14135.91 | +366.72 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 57 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 563 | 14187.6 | -45.04 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 58 | TSLA | 09-16 14:45 | 09-16 15:05 | 420.92 | 416.51 | 33 | 13890.36 | -145.53 | -1.05% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 59 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.09 | 417.51 | 33 | 13862.97 | -85.14 | -0.61% | 0.55R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 60 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 33 | 14067.9 | -38.61 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 61 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 471 | 14172.39 | -273.18 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 62 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 479 | 14135.29 | +100.59 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 63 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 469 | 14140.35 | +220.43 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 64 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 425 | 14178 | -242.25 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 65 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13975.73 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 66 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 16 | 13975.73 | +73.92 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 67 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 378 | 14137.2 | -60.48 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 68 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 33 | 13974.84 | -8.91 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 69 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 351 | 13039.65 | +319.41 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 70 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 371 | 14190.75 | -163.24 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 71 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 327 | 13037.49 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 72 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 73 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 29 | 13005.34 | +237.51 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 74 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 27 | 12787.2 | -104.49 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 75 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 373 | 14159.08 | -123.09 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 76 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 32 | 14025.6 | +273.6 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 77 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 35 | 14003.85 | +333.55 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 78 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 34 | 14060.7 | +202.98 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 79 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 405 | 14134.5 | +64.8 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 80 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 81 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 82 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 34 | 14044.38 | +193.12 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 83 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 387 | 14164.2 | -50.31 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 84 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 33 | 14262.27 | -87.12 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 85 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 86 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 87 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 31 | 14057.26 | -97.96 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 88 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 32 | 14177.6 | +131.52 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 89 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 31 | 14037.42 | -15.81 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 90 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 354 | 14145.84 | -99.12 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 91 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 92 | TSLA | 12-22 14:45 | 12-22 15:05 | 497.86 | 488.92 | 28 | 13940.08 | -250.32 | -1.8% | 1.54R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.32 | ↓494.62 | 3.1468 | 2.38 | **LOSS** |
| 93 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 379 | 14132.91 | +333.52 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 94 | INTC | 01-02 14:35 | 01-02 15:05 | 38.51 | 39.68 | 368 | 14171.68 | +430.56 | +3.04% | 2.13R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 79.83 | ↑38.35 | 0.2605 | 1.48 | **WIN** |
| 95 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 96 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 97 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 98 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 99 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 32 | 14186.88 | -50.24 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 100 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 101 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 102 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 256 | 13258.24 | +401.92 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 103 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 33 | 14059.98 | +407.22 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 104 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 297 | 14466.87 | -56.43 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 105 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 298 | 14453 | +196.68 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 106 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 107 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 35 | 14282.1 | -76.65 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 108 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.25 | 409.83 | 34 | 13948.5 | -14.28 | -0.1% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 109 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 110 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 111 | TSLA | 02-12 14:30 | 02-12 14:50 | 433.09 | 430.17 | 32 | 13858.88 | -93.44 | -0.67% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.11 | ↓432.47 | 1.3102 | 2.03 | **LOSS** |
| 112 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 113 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 314 | 14531.92 | -197.82 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 114 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 289 | 13455.84 | -320.79 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 115 | TSLA | 02-24 15:20 | 02-24 15:55 | 405.93 | 404.56 | 35 | 14207.55 | -47.95 | -0.34% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 116 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 117 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 309 | 14424.12 | -117.42 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 118 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 34 | 14103.88 | -97.58 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 119 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 307 | 14422.86 | -386.82 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 120 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 37 | 14072.21 | +132.46 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 121 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 282 | 13222.98 | +315.84 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 122 | TSLA | 04-06 13:30 | 04-06 13:45 | 367.33 | 363.53 | 38 | 13958.54 | -144.4 | -1.03% | 1.3R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.54 | ↓365.47 | 0.6804 | 1.95 | **LOSS** |
| 123 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 124 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 35 | 14012.95 | +205.1 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 125 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |
| 126 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 37 | 14074.8 | -199.8 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |

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

- ✅ **Profit factor 1.67** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.99R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:02:05.796Z*
