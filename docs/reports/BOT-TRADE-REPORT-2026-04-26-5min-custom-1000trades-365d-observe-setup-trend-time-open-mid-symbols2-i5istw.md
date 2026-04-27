# Bot Trade Report — 54 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:03:04.812Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 2 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $579.99 (+0.58%) over 54 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 54 |
| Win rate | 44.44% (24W / 30L) |
| Net P&L | $+579.99 (+0.58%) |
| Gross profit | $3188.29 |
| Gross loss | $2608.3 |
| Profit factor | 1.22 |
| Avg win | $132.85 |
| Avg loss | $86.94 |
| Payoff ratio | 1.53:1 |
| Expectancy | $+10.74 / trade |
| Max drawdown | 0.73% |
| Sharpe ratio (ann.) | 1.26 |
| Trades / active day | 1.23 |
| Avg confidence | 100% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $100,579.99 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 43.75% | $+166.02 | $10.38 |
| Mid  10:30–11:30 | 38 | 44.74% | $+413.97 | $10.89 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 25 | 12 | 48% | $+1229.36 | $+49.17 | 2.19 | eligible |
| TSLA | 29 | 12 | 41.38% | $-649.37 | $-22.39 | 0.59 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 54 | 24 | 44.44% | $+579.99 | $+10.74 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 14 | 8 | 57.14% | $+644.54 | $+46.04 |
| neutral | 40 | 16 | 40% | $-64.55 | $-1.61 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 17 | 2.28 | $+52.22 | 8 | 2 | $+42.71 | 0.34% | 1.57 | promote |
| Setup | trend | 32 | 1.31 | $+14.81 | 22 | 1.1 | $+4.82 | 0.73% | 0.88 | watch |
| Time slot | Open 9:30-10:30 | 12 | 1.38 | $+18.42 | 4 | 0.59 | $-13.76 | 0.14% | 0.41 | watch |
| Time slot | Mid 10:30-11:30 | 20 | 1.27 | $+12.65 | 18 | 1.17 | $+8.95 | 0.6% | 0.95 | reject |
| Symbol | TSLA | 15 | 0.5 | $-27.58 | 14 | 0.69 | $-16.83 | 0.54% | 0.54 | reject |
| Behavior | neutral | 28 | 1.23 | $+11.34 | 12 | 0.43 | $-31.83 | 0.46% | 0.33 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+449.01 | 1.17 |
| +3 bps/side | $+186.93 | 1.07 |
| +5 bps/side | $-75.11 | 0.98 |
| +10 bps/side | $-730.2 | 0.79 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 20 |
| timeout | 14 |
| stagnation | 7 |
| trim-profit-target | 7 |
| profit-target | 2 |
| stop-loss | 2 |
| trailing-stop | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 2 | TSLA | 05-13 14:15 | 05-13 14:40 | 324 | 321.92 | 43 | 13932 | -89.44 | -0.64% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 68.82 | ↑321.15 | 1.7391 | 1.01 | **LOSS** |
| 3 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 650 | 13975 | +39 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 4 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 5 | TSLA | 05-22 15:20 | 05-22 15:40 | 343.98 | 342.31 | 40 | 13759.2 | -66.8 | -0.49% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 6 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 7 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 8 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.23 | 353.59 | 39 | 13619.97 | +170.04 | +1.25% | 0.95R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 9 | INTC | 06-09 14:15 | 06-09 14:45 | 20.9 | 20.76 | 670 | 14003 | -93.8 | -0.67% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 74.14 | ↑20.65 | 0.1726 | 1.93 | **LOSS** |
| 10 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 673 | 13984.94 | -20.19 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 11 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.38 | 323.14 | 43 | 13948.34 | -53.32 | -0.38% | 0.29R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 12 | INTC | 06-24 14:00 | 06-24 15:10 | 21.88 | 22.48 | 639 | 13981.32 | +383.4 | +2.74% | 2.85R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 13 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 601 | 14033.35 | -174.29 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 14 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 618 | 14016.24 | +278.1 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 15 | INTC | 07-08 15:00 | 07-08 15:20 | 23.4 | 23.25 | 601 | 14063.4 | -90.15 | -0.64% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 16 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 21 | 13676.58 | +68.46 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 17 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13676.58 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 18 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.81 | 308.33 | 45 | 13986.45 | -111.6 | -0.8% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 19 | TSLA | 08-06 15:10 | 08-06 15:45 | 319.05 | 317.9 | 43 | 13719.15 | -49.45 | -0.36% | 0.38R | 35m | market | early-reversal | trend | trend | neutral | 76.39 | ↑314.82 | 2.2409 | 1.06 | **LOSS** |
| 20 | TSLA | 08-11 15:25 | 08-11 17:05 | 344.19 | 343.75 | 40 | 13767.6 | -17.6 | -0.13% | 0.15R | 100m | market | stagnation | trend | trend | neutral | 66.87 | ↑341.07 | 2.7526 | 1 | **LOSS** |
| 21 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 645 | 14054.55 | +296.7 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 22 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 23 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 584 | 14086.08 | +81.76 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 24 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 559 | 14086.8 | -44.72 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 25 | TSLA | 09-16 14:45 | 09-16 15:05 | 420.92 | 416.51 | 33 | 13890.36 | -145.53 | -1.05% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 26 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13524.9 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 27 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 15 | 13524.9 | +69.3 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 28 | INTC | 10-02 15:15 | 10-02 16:50 | 36.5 | 37 | 193 | 14089 | +96.5 | +1.37% | 1.15R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 29 | INTC | 10-02 15:15 | 10-02 17:00 | 36.5 | 37.02 | 193 | 14089 | +100.36 | +1.42% | 1.19R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 30 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.74 | 422.06 | 32 | 13719.68 | -213.76 | -1.56% | 0.98R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 31 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 373 | 14129.24 | -141.74 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 32 | INTC | 10-28 15:15 | 10-28 16:55 | 41.54 | 42.14 | 169 | 14082.06 | +101.4 | +1.44% | 0.95R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 33 | INTC | 10-28 15:15 | 10-28 17:00 | 41.54 | 42.16 | 170 | 14082.06 | +105.4 | +1.49% | 0.98R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 34 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.14 | 455.29 | 15 | 13564.2 | +47.25 | +0.7% | 0.54R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 35 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.14 | 454.34 | 15 | 13564.2 | +33 | +0.49% | 0.38R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 36 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.35 | 446.85 | 15 | 13619.85 | +112.5 | +1.71% | 1.14R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 37 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.35 | 446.41 | 16 | 13619.85 | +112.96 | +1.61% | 1.07R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 38 | TSLA | 11-17 14:55 | 11-17 15:15 | 416.74 | 411.21 | 33 | 13752.42 | -182.49 | -1.33% | 0.88R | 20m | market | early-reversal | breakout | trend | neutral | 71.84 | ↑410.09 | 1.2577 | 1.72 | **LOSS** |
| 39 | TSLA | 11-19 15:15 | 11-19 15:45 | 410.45 | 406.91 | 34 | 13955.3 | -120.36 | -0.86% | 0.5R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↓406.75 | 1.7263 | 1.09 | **LOSS** |
| 40 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 41 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 42 | INTC | 12-05 14:35 | 12-05 15:40 | 41.69 | 42.13 | 339 | 14132.91 | +149.16 | +1.06% | 0.85R | 65m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.02 | ↓41.57 | 0.0843 | 1.54 | **WIN** |
| 43 | INTC | 01-02 14:35 | 01-02 15:05 | 38.51 | 39.68 | 367 | 14133.17 | +429.39 | +3.04% | 2.13R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 79.83 | ↑38.35 | 0.2605 | 1.48 | **WIN** |
| 44 | INTC | 01-13 15:15 | 01-13 15:40 | 47.26 | 46.7 | 300 | 14178 | -168 | -1.18% | 0.59R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 45 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 31 | 13743.54 | -48.67 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 46 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 291 | 14174.61 | -55.29 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 47 | TSLA | 01-30 15:25 | 01-30 17:10 | 433.69 | 435.5 | 32 | 13878.08 | +57.92 | +0.42% | 0.24R | 105m | market | timeout | trend | trend | neutral | 70.24 | ↑428.13 | 3.7375 | 1.65 | **WIN** |
| 48 | TSLA | 02-11 14:45 | 02-11 15:00 | 435.25 | 428.37 | 32 | 13928 | -220.16 | -1.58% | 1.3R | 15m | market | stop-loss | breakout | trend | neutral | 76.37 | ↓433.74 | 2.2889 | 1.34 | **LOSS** |
| 49 | TSLA | 02-24 15:20 | 02-24 15:55 | 405.93 | 404.56 | 34 | 13801.62 | -46.58 | -0.34% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 50 | INTC | 03-10 14:55 | 03-10 16:25 | 47.32 | 47.31 | 299 | 14148.68 | -2.99 | -0.02% | 0.01R | 90m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.19 | ↑46.7 | 0.5282 | 1.15 | **LOSS** |
| 51 | INTC | 03-25 14:40 | 03-25 15:15 | 47.43 | 47.18 | 299 | 14181.57 | -74.75 | -0.53% | 0.27R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 52 | TSLA | 03-31 14:20 | 03-31 14:40 | 365.75 | 364.17 | 38 | 13898.5 | -60.04 | -0.43% | 0.36R | 20m | market | early-reversal | trend | trend | neutral | 67.6 | ↓364.02 | 2.8915 | 1.08 | **LOSS** |
| 53 | TSLA | 04-14 14:25 | 04-14 15:05 | 363.01 | 361.03 | 38 | 13794.38 | -75.24 | -0.55% | 0.35R | 40m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |
| 54 | INTC | 04-15 14:35 | 04-15 15:30 | 65.26 | 65.07 | 217 | 14161.42 | -41.23 | -0.29% | 0.15R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |

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

- ⚠️ **Profit factor 1.22 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:03:04.812Z*
