# Bot Trade Report — 158 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T08:50:30.387Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 4 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $722.97 (+0.72%) over 158 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 158 |
| Win rate | 34.18% (54W / 104L) |
| Net P&L | $+722.97 (+0.72%) |
| Gross profit | $6995.6 |
| Gross loss | $6272.63 |
| Profit factor | 1.12 |
| Avg win | $129.55 |
| Avg loss | $60.31 |
| Payoff ratio | 2.15:1 |
| Expectancy | $+4.58 / trade |
| Max drawdown | 3.11% |
| Sharpe ratio (ann.) | 0.72 |
| Trades / active day | 1.58 |
| Avg confidence | 99.23% |
| Avg trade duration | 56 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $100,722.97 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 75 | 36% | $+584.05 | $7.79 |
| Mid  10:30–11:30 | 54 | 38.89% | $+93.86 | $1.74 |
| Noon 11:30–13:00 | 22 | 27.27% | $+248.51 | $11.3 |
| PM   13:00–14:00 | 7 | 0% | $-203.45 | $-29.06 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 48 | 17 | 35.42% | $+866.68 | $+18.06 | 1.45 | throttle |
| GOOGL | 34 | 13 | 38.24% | $+303.21 | $+8.92 | 1.22 | throttle |
| AMZN | 38 | 15 | 39.47% | $-57.98 | $-1.53 | 0.96 | throttle |
| META | 38 | 9 | 23.68% | $-388.94 | $-10.24 | 0.77 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 74 | 24 | 32.43% | $-70.86 | $-0.96 |
| breakout | 84 | 30 | 35.71% | $+793.83 | $+9.45 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 87 | 32 | 36.78% | $+480.48 | $+5.52 |
| falseBreakoutProne | 51 | 18 | 35.29% | $+476.16 | $+9.34 |
| noisyHighBeta | 2 | 1 | 50% | $+154.82 | $+77.41 |
| thinChop | 3 | 0 | 0% | $-82.69 | $-27.56 |
| extendedBreakout | 15 | 3 | 20% | $-305.8 | $-20.39 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 29 | 1.44 | $+18.5 | 19 | 1.47 | $+17.38 | 0.35% | 1.09 | watch |
| Symbol | GOOGL | 23 | 1.34 | $+14.8 | 11 | 0.89 | $-3.39 | 0.35% | 0.59 | watch |
| Time slot | Noon 11:30-13:00 | 9 | 4.33 | $+58.69 | 13 | 0.18 | $-21.51 | 0.28% | 0.09 | watch |
| Behavior | falseBreakoutProne | 42 | 0.94 | $-3.15 | 9 | 2.9 | $+67.6 | 0.16% | 2.25 | reject |
| Time slot | Open 9:30-10:30 | 63 | 1.02 | $+0.84 | 12 | 2.2 | $+44.26 | 0.22% | 1.68 | reject |
| Setup | breakout | 56 | 0.98 | $-0.97 | 28 | 1.72 | $+30.29 | 0.73% | 1.33 | reject |
| Symbol | META | 21 | 0.33 | $-33.92 | 17 | 1.55 | $+19.02 | 0.25% | 1.13 | reject |
| Time slot | Mid 10:30-11:30 | 17 | 0.31 | $-33.68 | 37 | 1.5 | $+18.01 | 1.03% | 1.11 | reject |
| Symbol | AMZN | 21 | 0.66 | $-12.08 | 17 | 1.33 | $+11.51 | 0.36% | 0.96 | reject |
| Behavior | neutral | 43 | 1.18 | $+6.51 | 44 | 1.15 | $+4.55 | 0.88% | 0.79 | reject |
| Setup | trend | 38 | 0.97 | $-0.91 | 36 | 0.97 | $-1 | 0.55% | 0.64 | reject |
| Behavior | extendedBreakout | 7 | 0.44 | $-28.08 | 8 | 0.78 | $-13.66 | 0.39% | 0.62 | reject |
| Time slot | PM 13:00-14:00 | 5 | 0 | $-19.53 | 2 | 0 | $-52.9 | 0.11% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+301.02 | 1.05 |
| +3 bps/side | $-542.89 | 0.92 |
| +5 bps/side | $-1386.95 | 0.82 |
| +10 bps/side | $-3496.77 | 0.62 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 68 |
| timeout | 38 |
| stagnation | 26 |
| breakeven-stop | 9 |
| profit-target | 6 |
| stop-loss | 6 |
| trim-profit-target | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.64 | 109.53 | 127 | 13924.28 | -13.97 | -0.1% | 0.14R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 2 | META | 04-29 17:45 | 04-29 19:00 | 554.95 | 554.66 | 25 | 13873.75 | -7.25 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 3 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.62 | 187.55 | 74 | 13883.88 | -5.18 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 4 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 5 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 6 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 7 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 72 | 13850.64 | -52.56 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 8 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 74 | 13885.36 | +43.66 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 9 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.85 | 193.49 | 36 | 13813.2 | +59.04 | +0.85% | 1.1R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 10 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.85 | 193.46 | 36 | 13813.2 | +57.96 | +0.84% | 1.09R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 11 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 21 | 13640.34 | +186.06 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 12 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 13 | META | 05-13 15:25 | 05-13 16:00 | 660.24 | 658.17 | 21 | 13865.04 | -43.47 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 14 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 15 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 16 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 17 | NVDA | 05-14 16:30 | 05-14 16:55 | 135.37 | 134.67 | 103 | 13943.11 | -72.1 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 18 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.76 | 135.7 | 103 | 13983.28 | -6.18 | -0.04% | 0.06R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 19 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 20 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 77 | 12899.04 | +407.33 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 21 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 22 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 23 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 24 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 25 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 21 | 13467.51 | -45.36 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 26 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 27 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 28 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.09 | 204.23 | 68 | 13946.12 | -58.48 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 29 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 30 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 31 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 32 | META | 05-28 13:30 | 05-28 13:50 | 649.52 | 646.01 | 21 | 13639.92 | -73.71 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.02 | ↓647.61 | 0.5383 | 4.4 | **LOSS** |
| 33 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 34 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 35 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 66 | 13890.36 | -82.5 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 36 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 83 | 14137.39 | -58.93 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 37 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 38 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 39 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 97 | 14044.63 | -37.83 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 40 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 41 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 65 | 13893.1 | -91 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 42 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 19 | 13525.91 | -146.68 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 43 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 44 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 45 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 46 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.29 | 180.31 | 78 | 13984.62 | +79.56 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 47 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 48 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 19 | 13571.7 | -9.69 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 49 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 60 | 13870.8 | +5.4 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 50 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 17 | 13267.99 | -82.96 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 51 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 52 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.57 | 178.96 | 78 | 13928.46 | +30.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 53 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 64 | 13791.36 | -55.04 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 54 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 55 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 56 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 16 | 12594.88 | -118.72 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 57 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 58 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 59 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 62 | 13912.18 | +156.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 60 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 18 | 13519.44 | -81.18 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 61 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 62 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 63 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 60 | 14097.6 | -51 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 64 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 65 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 18 | 13775.76 | -76.68 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 66 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 67 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 68 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.45 | 232.8 | 59 | 13773.55 | -38.35 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 69 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.13 | 234.33 | 59 | 13872.67 | -47.2 | -0.34% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 70 | META | 09-18 13:40 | 09-18 15:05 | 785.85 | 784.72 | 17 | 13359.45 | -19.21 | -0.14% | 0.14R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 71 | NVDA | 09-22 16:00 | 09-22 16:35 | 177.34 | 183.16 | 79 | 14009.86 | +459.78 | +3.28% | 4.69R | 35m | market | profit-target | trend | trend | neutral | 71.72 | ↑175.72 | 0.1278 | 5.33 | **WIN** |
| 72 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 73 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 74 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 76 | 13957.4 | -71.44 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 75 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 76 | 14043.28 | +136.04 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 76 | AMZN | 10-01 16:05 | 10-01 16:55 | 221.33 | 220.89 | 63 | 13943.79 | -27.72 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | thinChop | 67.71 | ↑219.48 | 0.4191 | 1.05 | **LOSS** |
| 77 | META | 10-02 13:40 | 10-02 14:00 | 726.05 | 723.3 | 19 | 13794.95 | -52.25 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 78 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 75 | 14091 | +8.25 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 79 | AMZN | 10-08 17:40 | 10-08 18:35 | 226.27 | 226.05 | 58 | 13123.66 | -12.76 | -0.1% | 0.14R | 55m | market | stagnation | trend | trend | thinChop | 77.97 | ↑223.7 | 0.498 | 2.09 | **LOSS** |
| 80 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 81 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 82 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 83 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 74 | 14056.3 | -139.12 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 84 | META | 10-13 14:10 | 10-13 14:40 | 719.57 | 714.63 | 19 | 13671.83 | -93.86 | -0.69% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 70.9 | ↑713.65 | 1.5443 | 1.1 | **LOSS** |
| 85 | AMZN | 10-21 13:40 | 10-21 15:25 | 220.34 | 221.87 | 63 | 13881.42 | +96.39 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.36 | ↑219.4 | 0.813 | 1.47 | **WIN** |
| 86 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 87 | META | 10-27 13:45 | 10-27 14:45 | 753.48 | 752.98 | 18 | 13562.64 | -9 | -0.07% | 0.1R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.77 | ↑751.59 | 3.1006 | 1.83 | **LOSS** |
| 88 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 72 | 14065.92 | -167.04 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 89 | AMZN | 11-03 14:30 | 11-03 14:50 | 258.39 | 254.84 | 54 | 13953.06 | -191.7 | -1.37% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 76.99 | ↓257.17 | 2.7097 | 5.92 | **LOSS** |
| 90 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 91 | META | 11-10 14:35 | 11-10 15:50 | 628.59 | 628.81 | 22 | 13828.98 | +4.84 | +0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **WIN** |
| 92 | NVDA | 11-10 15:20 | 11-10 15:50 | 196.54 | 195.27 | 71 | 13954.34 | -90.17 | -0.65% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓194.98 | 2.4553 | 1.11 | **LOSS** |
| 93 | META | 11-20 14:35 | 11-20 14:55 | 605.87 | 602.09 | 22 | 13329.14 | -83.16 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.44 | ↓602.22 | 3.6323 | 1.88 | **LOSS** |
| 94 | GOOGL | 11-21 14:30 | 11-21 15:15 | 298.47 | 296.38 | 47 | 14028.09 | -98.23 | -0.7% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 95 | NVDA | 11-21 16:30 | 11-21 18:00 | 179.61 | 179.53 | 72 | 12931.92 | -5.76 | -0.04% | 0.02R | 90m | market | stagnation | breakout | breakout | noisyHighBeta | 57.21 | ↑177.29 | -0.6682 | 2.49 | **LOSS** |
| 96 | AMZN | 11-21 17:00 | 11-21 17:35 | 220.36 | 219.49 | 63 | 13882.68 | -54.81 | -0.39% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 70.09 | ↑216.98 | 0.6389 | 1.06 | **LOSS** |
| 97 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.86 | 233.95 | 59 | 13856.74 | -53.69 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 98 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 75 | 13903.5 | -102.75 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 99 | GOOGL | 12-05 14:30 | 12-05 15:20 | 321.93 | 321.76 | 43 | 13842.99 | -7.31 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓321.25 | 0.7143 | 2.86 | **LOSS** |
| 100 | META | 12-05 15:15 | 12-05 15:40 | 672.31 | 670.11 | 20 | 13446.2 | -44 | -0.33% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 78.53 | ↑666.64 | 1.4891 | 1.62 | **LOSS** |
| 101 | NVDA | 12-12 14:30 | 12-12 14:55 | 181.84 | 181.07 | 77 | 14001.68 | -59.29 | -0.42% | 0.58R | 25m | market | early-reversal | trend | trend | neutral | 64.86 | ↓181.77 | 0.2908 | 3.41 | **LOSS** |
| 102 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.58 | 223.47 | 62 | 13923.96 | -68.82 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 103 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 46 | 14041.5 | -20.7 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 104 | META | 12-22 14:40 | 12-22 15:00 | 672.68 | 667.97 | 20 | 13453.6 | -94.2 | -0.7% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 64.58 | ↓667.88 | -0.1737 | 1.52 | **LOSS** |
| 105 | NVDA | 12-23 16:55 | 12-23 17:30 | 188.36 | 187.83 | 74 | 13938.64 | -39.22 | -0.28% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 78.48 | ↑185.47 | 1.0937 | 1.02 | **LOSS** |
| 106 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 107 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 108 | AMZN | 01-02 14:40 | 01-02 14:55 | 234.85 | 232.78 | 59 | 13856.15 | -122.13 | -0.88% | 1.26R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 87.3 | ↓233.39 | 0.3246 | 2.97 | **LOSS** |
| 109 | META | 01-09 16:05 | 01-09 16:55 | 653.42 | 652 | 21 | 13721.82 | -29.82 | -0.22% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 65.42 | ↑648.15 | 1.6098 | 1.33 | **LOSS** |
| 110 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 111 | NVDA | 01-12 17:20 | 01-12 17:40 | 186.62 | 185.94 | 75 | 13996.5 | -51 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.64 | ↑184.94 | 0.3627 | 2.13 | **LOSS** |
| 112 | AMZN | 01-15 16:00 | 01-15 16:20 | 239.84 | 238.85 | 58 | 13910.72 | -57.42 | -0.41% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 68.53 | ↑238.02 | 0.3502 | 2.17 | **LOSS** |
| 113 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 114 | META | 01-22 14:30 | 01-22 14:55 | 634.16 | 629.99 | 20 | 12683.2 | -83.4 | -0.66% | 0.63R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 115 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 116 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 117 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 118 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 119 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 120 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 121 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 122 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 123 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 124 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 125 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 126 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 127 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 128 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 129 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 130 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 73 | 14096.3 | -106.58 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 131 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 132 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 133 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 134 | META | 03-02 16:55 | 03-02 17:15 | 659.72 | 657.71 | 21 | 13854.12 | -42.21 | -0.3% | 0.42R | 20m | market | early-reversal | trend | trend | thinChop | 66.44 | ↑650.04 | 3.161 | 1.16 | **LOSS** |
| 135 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 65 | 13828.1 | +193.7 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 136 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 137 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 63 | 13792.59 | -62.37 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 138 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 139 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 64 | 13774.72 | -35.2 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 140 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 21 | 13328.28 | -45.99 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 141 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 79 | 14069.11 | -56.88 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 142 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 22 | 13378.2 | -37.62 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 143 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 65 | 13806.65 | -61.75 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 144 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 69 | 13953.87 | -54.51 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 145 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 146 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 147 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 23 | 13400.49 | -143.06 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 148 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 149 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 150 | META | 04-14 13:35 | 04-14 15:20 | 646.43 | 660.11 | 21 | 13575.03 | +287.28 | +2.12% | 3.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 95.25 | ↑643.39 | 2.4169 | 2.58 | **WIN** |
| 151 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 152 | META | 04-14 15:45 | 04-14 16:35 | 663.7 | 663.48 | 20 | 13274 | -4.4 | -0.03% | 0.04R | 50m | market | stagnation | trend | trend | neutral | 79.61 | ↑652.9 | 6 | 1.08 | **LOSS** |
| 153 | META | 04-15 14:10 | 04-15 15:55 | 672.49 | 674.66 | 20 | 13449.8 | +43.4 | +0.32% | 0.39R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑669.14 | 2.6108 | 1.02 | **WIN** |
| 154 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.58 | 252.31 | 55 | 13891.9 | -14.85 | -0.11% | 0.12R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 155 | AMZN | 04-23 14:35 | 04-23 15:45 | 256.96 | 256.96 | 54 | 13875.84 | +0 | +0% | 0R | 70m | market | breakeven-stop | trend | trend | neutral | 66.63 | ↑255.44 | 0.4717 | 1.03 | **WIN** |
| 156 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 157 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 20 | 13364.4 | -63.8 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |
| 158 | META | 04-24 15:25 | 04-24 17:10 | 672.73 | 679.81 | 20 | 13454.6 | +141.6 | +1.05% | 1.5R | 105m | market | timeout | trend | trend | neutral | 68.58 | ↑665.22 | 2.6989 | 1.72 | **WIN** |

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

- ⚠️ **Profit factor 1.12 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T08:50:30.387Z*
