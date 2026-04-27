# Bot Trade Report — 158 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T08:52:39.051Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 4 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $124.17 (+0.12%) over 158 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 158 |
| Win rate | 34.18% (54W / 104L) |
| Net P&L | $+124.17 (+0.12%) |
| Gross profit | $5352.36 |
| Gross loss | $5228.19 |
| Profit factor | 1.02 |
| Avg win | $99.12 |
| Avg loss | $50.27 |
| Payoff ratio | 1.97:1 |
| Expectancy | $+0.79 / trade |
| Max drawdown | 2.17% |
| Sharpe ratio (ann.) | 0.16 |
| Trades / active day | 1.56 |
| Avg confidence | 95.54% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $100,124.17 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 79 | 31.65% | $-149.44 | $-1.89 |
| Mid  10:30–11:30 | 49 | 38.78% | $+37.78 | $0.77 |
| Noon 11:30–13:00 | 20 | 40% | $+402.09 | $20.1 |
| PM   13:00–14:00 | 10 | 20% | $-166.26 | $-16.63 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 48 | 18 | 37.5% | $+695.6 | $+14.49 | 1.4 | throttle |
| GOOGL | 35 | 14 | 40% | $+59.79 | $+1.71 | 1.05 | eligible |
| AMZN | 41 | 15 | 36.59% | $-164.34 | $-4.01 | 0.86 | throttle |
| META | 34 | 7 | 20.59% | $-466.88 | $-13.73 | 0.61 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 72 | 24 | 33.33% | $+36.73 | $+0.51 |
| breakout | 86 | 30 | 34.88% | $+87.44 | $+1.02 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 91 | 33 | 36.26% | $+396.45 | $+4.36 |
| noisyHighBeta | 2 | 2 | 100% | $+124.18 | $+62.09 |
| extendedBreakout | 13 | 3 | 23.08% | $-195.97 | $-15.07 |
| falseBreakoutProne | 52 | 16 | 30.77% | $-200.49 | $-3.86 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 29 | 1.49 | $+17.51 | 19 | 1.27 | $+9.88 | 0.34% | 0.95 | watch |
| Behavior | neutral | 46 | 1.55 | $+16.32 | 45 | 0.8 | $-7.88 | 1.16% | 0.57 | watch |
| Time slot | Noon 11:30-13:00 | 8 | 6.1 | $+71.77 | 12 | 0.37 | $-14.34 | 0.21% | 0.19 | watch |
| Symbol | GOOGL | 24 | 1.77 | $+18.78 | 11 | 0.27 | $-35.54 | 0.53% | 0.19 | watch |
| Time slot | Mid 10:30-11:30 | 13 | 0.63 | $-11.56 | 36 | 1.13 | $+5.22 | 1.19% | 0.86 | reject |
| Behavior | falseBreakoutProne | 42 | 0.82 | $-5.35 | 10 | 1.07 | $+2.44 | 0.25% | 0.84 | reject |
| Setup | breakout | 56 | 1.05 | $+1.54 | 30 | 1 | $+0.05 | 0.81% | 0.79 | reject |
| Symbol | AMZN | 21 | 0.74 | $-6.36 | 20 | 0.95 | $-1.53 | 0.31% | 0.69 | reject |
| Symbol | META | 20 | 0.42 | $-20.7 | 14 | 0.89 | $-3.77 | 0.27% | 0.64 | reject |
| Setup | trend | 38 | 1.29 | $+8.55 | 34 | 0.74 | $-8.48 | 0.56% | 0.5 | reject |
| Time slot | Open 9:30-10:30 | 66 | 1 | $-0.04 | 13 | 0.71 | $-11.29 | 0.36% | 0.55 | reject |
| Behavior | extendedBreakout | 6 | 0.45 | $-19.2 | 7 | 0.74 | $-11.54 | 0.25% | 0.61 | reject |
| Time slot | PM 13:00-14:00 | 7 | 0.92 | $-1.49 | 3 | 0 | $-51.95 | 0.16% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-229.96 | 0.96 |
| +3 bps/side | $-938.31 | 0.84 |
| +5 bps/side | $-1646.66 | 0.75 |
| +10 bps/side | $-3417.45 | 0.56 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 71 |
| timeout | 37 |
| stagnation | 23 |
| breakeven-stop | 10 |
| trim-profit-target | 6 |
| stop-loss | 6 |
| profit-target | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.64 | 109.53 | 127 | 13924.28 | -13.97 | -0.1% | 0.14R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 2 | META | 04-29 17:45 | 04-29 19:00 | 554.95 | 554.66 | 25 | 13873.75 | -7.25 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 3 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.62 | 187.55 | 74 | 13883.88 | -5.18 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 4 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 5 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 6 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 7 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 47 | 9041.39 | -34.31 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 8 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 48 | 9006.72 | +28.32 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 9 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.85 | 193.49 | 36 | 13813.2 | +59.04 | +0.85% | 1.1R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 10 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.85 | 193.46 | 36 | 13813.2 | +57.96 | +0.84% | 1.09R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 11 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 14 | 9093.56 | +124.04 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 12 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 71 | 8984.34 | +254.18 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 13 | META | 05-13 15:25 | 05-13 16:00 | 660.24 | 658.17 | 21 | 13865.04 | -43.47 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 14 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 60 | 9679.2 | -84 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 15 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 16 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 17 | NVDA | 05-14 16:30 | 05-14 16:55 | 135.37 | 134.67 | 103 | 13943.11 | -72.1 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 18 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.76 | 135.7 | 103 | 13983.28 | -6.18 | -0.04% | 0.06R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 19 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 67 | 8994.08 | +42.88 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 20 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.79 | 171.64 | 82 | 13922.78 | +151.7 | +1.09% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 21 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 22 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 23 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 24 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 52 | 8929.96 | +218.92 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 25 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 15 | 9619.65 | -32.4 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 26 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 27 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 28 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.09 | 204.23 | 68 | 13946.12 | -58.48 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 29 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 57 | 9743.01 | +72.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 30 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 31 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 32 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 65 | 8911.5 | -49.4 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 33 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 70 | 9792.3 | +114.1 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 34 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 43 | 9049.78 | -53.75 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 35 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 53 | 9027.49 | -37.63 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 36 | META | 06-06 13:30 | 06-06 14:40 | 697.26 | 696.87 | 12 | 8367.12 | -4.68 | -0.06% | 0.06R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 37 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 38 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 39 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 61 | 9010.31 | -47.58 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 40 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 42 | 8977.08 | -58.8 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 41 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 12 | 8542.68 | -92.64 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 42 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 54 | 9143.28 | -16.74 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 43 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 44 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 55 | 9018.9 | -26.4 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 45 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.29 | 180.31 | 78 | 13984.62 | +79.56 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 46 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 48 | 9016.8 | +46.56 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 47 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 12 | 8571.6 | -6.12 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 48 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 39 | 9016.02 | +3.51 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 49 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 11 | 8585.17 | -53.68 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 50 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 51 | 9811.38 | +23.97 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 51 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.57 | 178.96 | 78 | 13928.46 | +30.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 52 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 41 | 8835.09 | -35.26 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 53 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 54 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 45 | 9152.55 | -42.3 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 55 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 11 | 8658.98 | -81.62 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 56 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 53 | 9664.02 | -6.89 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 57 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 58 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 59 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 37 | 8302.43 | +93.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 60 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 11 | 8261.88 | -49.61 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 61 | GOOGL | 08-22 17:10 | 08-22 18:25 | 205.59 | 207.65 | 34 | 13980.12 | +70.04 | +1% | 1.43R | 75m | market | trim-profit-target | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 62 | GOOGL | 08-22 17:10 | 08-22 18:55 | 205.59 | 206.85 | 34 | 13980.12 | +42.84 | +0.61% | 0.87R | 105m | market | timeout | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 63 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 43 | 9020.97 | +59.77 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 64 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 65 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 36 | 8458.56 | -30.6 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 66 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 53 | 9012.65 | -40.81 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 67 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 11 | 8418.52 | -46.86 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 68 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 69 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 36 | 9023.4 | -122.04 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 70 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.45 | 232.8 | 59 | 13773.55 | -38.35 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 71 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.13 | 234.33 | 59 | 13872.67 | -47.2 | -0.34% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 72 | GOOGL | 09-18 13:35 | 09-18 14:20 | 253.11 | 251.91 | 36 | 9111.96 | -43.2 | -0.47% | 0.58R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.03 | ↓252.44 | 0.9393 | 2.62 | **LOSS** |
| 73 | META | 09-18 13:40 | 09-18 15:05 | 785.85 | 784.72 | 11 | 8644.35 | -12.43 | -0.14% | 0.14R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 74 | NVDA | 09-22 16:00 | 09-22 16:35 | 177.34 | 183.16 | 79 | 14009.86 | +459.78 | +3.28% | 4.69R | 35m | market | profit-target | trend | trend | neutral | 71.72 | ↑175.72 | 0.1278 | 5.33 | **WIN** |
| 75 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 76 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 36 | 8956.8 | -52.92 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 77 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 49 | 8998.85 | -46.06 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 78 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 76 | 14043.28 | +136.04 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 79 | META | 10-02 13:40 | 10-02 14:00 | 726.05 | 723.3 | 19 | 13794.95 | -52.25 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 80 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 48 | 9018.24 | +5.28 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 81 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 43 | 8378.12 | -47.73 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 82 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 83 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 40 | 9630 | -8.4 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 84 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 74 | 14056.3 | -139.12 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 85 | META | 10-13 14:10 | 10-13 14:40 | 719.57 | 714.63 | 19 | 13671.83 | -93.86 | -0.69% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 70.9 | ↑713.65 | 1.5443 | 1.1 | **LOSS** |
| 86 | AMZN | 10-16 13:35 | 10-16 14:25 | 217.83 | 217.56 | 41 | 8931.03 | -11.07 | -0.12% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.07 | ↓217.2 | 0.579 | 2.4 | **LOSS** |
| 87 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 88 | AMZN | 10-21 13:40 | 10-21 15:25 | 220.34 | 221.87 | 40 | 8813.6 | +61.2 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.36 | ↑219.4 | 0.813 | 1.47 | **WIN** |
| 89 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 34 | 9052.16 | -44.88 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 90 | META | 10-27 13:45 | 10-27 14:45 | 753.48 | 752.98 | 12 | 9041.76 | -6 | -0.07% | 0.1R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.77 | ↑751.59 | 3.1006 | 1.83 | **LOSS** |
| 91 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 50 | 9768 | -116 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 92 | AMZN | 10-28 17:30 | 10-28 17:55 | 231.27 | 230.63 | 60 | 13876.2 | -38.4 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 78.18 | ↑228.31 | 0.8567 | 1.34 | **LOSS** |
| 93 | AMZN | 11-10 14:35 | 11-10 15:05 | 250.59 | 249.19 | 33 | 8269.47 | -46.2 | -0.56% | 0.61R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.26 | ↓249.58 | 1.7204 | 1.68 | **LOSS** |
| 94 | META | 11-10 14:35 | 11-10 15:50 | 628.59 | 628.81 | 22 | 13828.98 | +4.84 | +0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **WIN** |
| 95 | NVDA | 11-10 15:20 | 11-10 15:50 | 196.54 | 195.27 | 71 | 13954.34 | -90.17 | -0.65% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓194.98 | 2.4553 | 1.11 | **LOSS** |
| 96 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.55 | 289.7 | 48 | 14042.4 | -136.8 | -0.97% | 0.55R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 97 | META | 11-20 14:35 | 11-20 14:55 | 605.87 | 602.09 | 13 | 7876.31 | -49.14 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.44 | ↓602.22 | 3.6323 | 1.88 | **LOSS** |
| 98 | AMZN | 11-21 17:00 | 11-21 17:35 | 220.36 | 219.49 | 63 | 13882.68 | -54.81 | -0.39% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 70.09 | ↑216.98 | 0.6389 | 1.06 | **LOSS** |
| 99 | NVDA | 11-24 16:10 | 11-24 17:55 | 181.53 | 182.42 | 42 | 7624.26 | +37.38 | +0.49% | 0.4R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67.47 | ↑178.85 | 0.0451 | 1.33 | **WIN** |
| 100 | GOOGL | 11-28 14:30 | 11-28 14:40 | 326.26 | 322.82 | 25 | 8156.5 | -86 | -1.05% | 1.5R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 92.91 | ↓325.19 | 1.0737 | 6.62 | **LOSS** |
| 101 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.86 | 233.95 | 59 | 13856.74 | -53.69 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 102 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.31 | 180.7 | 77 | 14037.87 | -123.97 | -0.88% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 103 | META | 12-05 15:15 | 12-05 15:40 | 672.31 | 670.11 | 20 | 13446.2 | -44 | -0.33% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 78.53 | ↑666.64 | 1.4891 | 1.62 | **LOSS** |
| 104 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.58 | 223.47 | 62 | 13923.96 | -68.82 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 105 | NVDA | 12-18 15:30 | 12-18 16:20 | 175.36 | 175.07 | 80 | 14028.8 | -23.2 | -0.17% | 0.15R | 50m | market | stagnation | breakout | trend | neutral | 59.36 | ↑173.82 | 0.6929 | 3.05 | **LOSS** |
| 106 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 45 | 13736.25 | -20.25 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 107 | META | 12-22 14:40 | 12-22 15:00 | 672.68 | 667.97 | 20 | 13453.6 | -94.2 | -0.7% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 64.58 | ↓667.88 | -0.1737 | 1.52 | **LOSS** |
| 108 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 109 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 25 | 8023.25 | -41 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 110 | AMZN | 01-02 14:40 | 01-02 14:55 | 234.85 | 232.78 | 35 | 8219.75 | -72.45 | -0.88% | 1.26R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 87.3 | ↓233.39 | 0.3246 | 2.97 | **LOSS** |
| 111 | META | 01-09 16:05 | 01-09 16:55 | 653.42 | 652 | 21 | 13721.82 | -29.82 | -0.22% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 65.42 | ↑648.15 | 1.6098 | 1.33 | **LOSS** |
| 112 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 113 | NVDA | 01-12 17:20 | 01-12 17:40 | 186.62 | 185.94 | 75 | 13996.5 | -51 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.64 | ↑184.94 | 0.3627 | 2.13 | **LOSS** |
| 114 | AMZN | 01-15 16:00 | 01-15 16:20 | 239.84 | 238.85 | 58 | 13910.72 | -57.42 | -0.41% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 68.53 | ↑238.02 | 0.3502 | 2.17 | **LOSS** |
| 115 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 116 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 117 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 118 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 119 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 120 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 121 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 122 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 40 | 7582.4 | +86.8 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 123 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 124 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 125 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 41 | 8351.29 | +114.39 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 126 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 127 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 128 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 129 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 130 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 131 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 43 | 8303.3 | -62.78 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 132 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 133 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 134 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 135 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 39 | 8296.86 | +116.22 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 136 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 137 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 63 | 13792.59 | -62.37 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 138 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 139 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 140 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 14 | 8885.52 | -30.66 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 141 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 79 | 14069.11 | -56.88 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 142 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 22 | 13378.2 | -37.62 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 143 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 42 | 8921.22 | -39.9 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 144 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 44 | 8898.12 | -34.76 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 145 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 32 | 8925.76 | +80.32 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 146 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 15 | 8739.45 | -93.3 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 147 | META | 04-01 16:15 | 04-01 17:45 | 586.83 | 586.91 | 23 | 13497.09 | +1.84 | +0.01% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 73.11 | ↑580.24 | 1.9352 | 1.17 | **WIN** |
| 148 | META | 04-06 13:30 | 04-06 14:00 | 581.44 | 577.99 | 15 | 8721.6 | -51.75 | -0.59% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.03 | ↓579.82 | 1.2555 | 1.54 | **LOSS** |
| 149 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 150 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 151 | AMZN | 04-10 13:35 | 04-10 14:00 | 238.38 | 237.24 | 37 | 8820.06 | -42.18 | -0.48% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.44 | ↓237.43 | 1.1799 | 2.17 | **LOSS** |
| 152 | AMZN | 04-10 14:15 | 04-10 14:50 | 239.71 | 238.84 | 58 | 13903.18 | -50.46 | -0.36% | 0.3R | 35m | market | early-reversal | trend | trend | neutral | 78.96 | ↑237.96 | 1.945 | 1.08 | **LOSS** |
| 153 | AMZN | 04-14 13:35 | 04-14 14:10 | 246.4 | 245.24 | 36 | 8870.4 | -41.76 | -0.47% | 0.59R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.46 | ↓245.17 | 1.0769 | 3.54 | **LOSS** |
| 154 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 155 | AMZN | 04-14 17:40 | 04-14 18:10 | 251.81 | 250.9 | 55 | 13849.55 | -50.05 | -0.36% | 0.51R | 30m | market | early-reversal | trend | trend | neutral | 74.22 | ↑247.7 | 0.9533 | 1.67 | **LOSS** |
| 156 | AMZN | 04-17 13:35 | 04-17 15:00 | 254.06 | 254.21 | 35 | 8892.1 | +5.25 | +0.06% | 0.06R | 85m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.81 | ↓253.88 | 1.0706 | 1.2 | **WIN** |
| 157 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 48 | 9732.96 | +273.12 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 158 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 20 | 13364.4 | -63.8 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |

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

- ⚠️ **Profit factor 1.02 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T08:52:39.051Z*
