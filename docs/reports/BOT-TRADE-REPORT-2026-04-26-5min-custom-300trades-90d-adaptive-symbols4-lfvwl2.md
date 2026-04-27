# Bot Trade Report — 53 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T08:50:28.502Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 4 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1373.97 (+1.37%) over 53 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 53 |
| Win rate | 43.4% (23W / 30L) |
| Net P&L | $+1373.97 (+1.37%) |
| Gross profit | $2702.95 |
| Gross loss | $1328.98 |
| Profit factor | 2.03 |
| Avg win | $117.52 |
| Avg loss | $44.3 |
| Payoff ratio | 2.65:1 |
| Expectancy | $+25.92 / trade |
| Max drawdown | 0.39% |
| Sharpe ratio (ann.) | 4.81 |
| Trades / active day | 1.66 |
| Avg confidence | 96.66% |
| Avg trade duration | 64 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $101,373.97 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 15 | 26.67% | $-114.41 | $-7.63 |
| Mid  10:30–11:30 | 25 | 60% | $+1481.62 | $59.26 |
| Noon 11:30–13:00 | 11 | 36.36% | $+126.11 | $11.46 |
| PM   13:00–14:00 | 2 | 0% | $-119.35 | $-59.67 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 14 | 6 | 42.86% | $+477.42 | $+34.1 | 2.33 | eligible |
| GOOGL | 9 | 4 | 44.44% | $+349.51 | $+38.83 | 3.42 | eligible |
| META | 14 | 6 | 42.86% | $+329.31 | $+23.52 | 1.8 | eligible |
| AMZN | 16 | 7 | 43.75% | $+217.73 | $+13.61 | 1.52 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 30 | 11 | 36.67% | $+271.2 | $+9.04 |
| breakout | 23 | 12 | 52.17% | $+1102.77 | $+47.95 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 37 | 16 | 43.24% | $+1072.65 | $+28.99 |
| extendedBreakout | 4 | 2 | 50% | $+113.47 | $+28.37 |
| falseBreakoutProne | 11 | 4 | 36.36% | $+101.05 | $+9.19 |
| noisyHighBeta | 1 | 1 | 100% | $+86.8 | $+86.8 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 11 | 2.18 | $+27.69 | 3 | 2.72 | $+57.63 | 0.1% | 2.06 | promote |
| Symbol | GOOGL | 5 | 2.66 | $+34.06 | 4 | 5.28 | $+44.81 | 0.04% | 3.39 | promote |
| Time slot | Mid 10:30-11:30 | 20 | 5.35 | $+67.14 | 5 | 2.16 | $+27.76 | 0.08% | 1.43 | promote |
| Setup | breakout | 11 | 6.56 | $+73.26 | 12 | 1.88 | $+24.74 | 0.14% | 1.46 | promote |
| Time slot | Noon 11:30-13:00 | 10 | 1.54 | $+12.43 | 1 | ∞ | $+1.84 | 0% | 0 | watch |
| Symbol | AMZN | 7 | 3.63 | $+44.78 | 9 | 0.68 | $-10.64 | 0.19% | 0.48 | watch |
| Behavior | neutral | 26 | 3.44 | $+46.06 | 11 | 0.68 | $-11.35 | 0.17% | 0.45 | watch |
| Setup | trend | 20 | 2.28 | $+29.59 | 10 | 0.17 | $-32.07 | 0.32% | 0.1 | watch |
| Symbol | META | 8 | 5.74 | $+76.19 | 6 | 0.01 | $-46.7 | 0.28% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1251.6 | 1.89 |
| +3 bps/side | $+1006.75 | 1.65 |
| +5 bps/side | $+761.96 | 1.44 |
| +10 bps/side | $+149.94 | 1.07 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 22 |
| timeout | 16 |
| stagnation | 6 |
| breakeven-stop | 4 |
| trim-profit-target | 3 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 2 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 3 | NVDA | 01-30 15:15 | 01-30 16:15 | 193.04 | 192.29 | 72 | 13898.88 | -54 | -0.39% | 0.4R | 60m | market | stagnation | trend | trend | neutral | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 4 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 5 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 6 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 7 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 8 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 9 | META | 02-06 17:30 | 02-06 18:05 | 664.12 | 660.82 | 21 | 13946.52 | -69.3 | -0.5% | 0.67R | 35m | market | early-reversal | trend | trend | neutral | 64.21 | ↑656.89 | 1.4376 | 1.26 | **LOSS** |
| 10 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 40 | 7582.4 | +86.8 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 11 | META | 02-09 15:55 | 02-09 17:35 | 666.47 | 680.17 | 10 | 13995.87 | +137 | +2.06% | 2.94R | 100m | market | trim-profit-target | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 12 | META | 02-09 15:55 | 02-09 17:40 | 666.47 | 680.7 | 11 | 13995.87 | +156.53 | +2.14% | 3.06R | 105m | market | timeout | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 13 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 14 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 15 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 41 | 8351.29 | +114.39 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 16 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 17 | GOOGL | 02-19 16:20 | 02-19 16:40 | 305.43 | 303.91 | 45 | 13744.35 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↑303.29 | 0.5567 | 3.82 | **LOSS** |
| 18 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 19 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 20 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 21 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 22 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 23 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 43 | 8303.3 | -62.78 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 24 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 25 | META | 02-26 14:40 | 02-26 15:00 | 660.83 | 656.3 | 12 | 7929.96 | -54.36 | -0.69% | 0.84R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 26 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 27 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 28 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 39 | 8296.86 | +116.22 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 29 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 30 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 64 | 14011.52 | -63.36 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 31 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 32 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 33 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 34 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 14 | 8885.52 | -30.66 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 35 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 36 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 23 | 13986.3 | -39.33 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 37 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 42 | 8921.22 | -39.9 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 38 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 45 | 9100.35 | -35.55 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 39 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 32 | 8925.76 | +80.32 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 40 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 30 | 8826.9 | +78.6 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 41 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 15 | 8739.45 | -93.3 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 42 | META | 04-01 16:15 | 04-01 17:45 | 586.83 | 586.91 | 23 | 13497.09 | +1.84 | +0.01% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 73.11 | ↑580.24 | 1.9352 | 1.17 | **WIN** |
| 43 | META | 04-06 13:30 | 04-06 14:00 | 581.44 | 577.99 | 15 | 8721.6 | -51.75 | -0.59% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.03 | ↓579.82 | 1.2555 | 1.54 | **LOSS** |
| 44 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 45 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 46 | AMZN | 04-10 13:35 | 04-10 14:00 | 238.38 | 237.24 | 38 | 9058.44 | -43.32 | -0.48% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.44 | ↓237.43 | 1.1799 | 2.17 | **LOSS** |
| 47 | AMZN | 04-10 14:15 | 04-10 14:50 | 239.71 | 238.84 | 58 | 13903.18 | -50.46 | -0.36% | 0.3R | 35m | market | early-reversal | trend | trend | neutral | 78.96 | ↑237.96 | 1.945 | 1.08 | **LOSS** |
| 48 | AMZN | 04-14 13:35 | 04-14 14:10 | 246.4 | 245.24 | 36 | 8870.4 | -41.76 | -0.47% | 0.59R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.46 | ↓245.17 | 1.0769 | 3.54 | **LOSS** |
| 49 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 50 | AMZN | 04-14 17:40 | 04-14 18:10 | 251.81 | 250.9 | 55 | 13849.55 | -50.05 | -0.36% | 0.51R | 30m | market | early-reversal | trend | trend | neutral | 74.22 | ↑247.7 | 0.9533 | 1.67 | **LOSS** |
| 51 | AMZN | 04-17 13:35 | 04-17 15:00 | 254.06 | 254.21 | 35 | 8892.1 | +5.25 | +0.06% | 0.06R | 85m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.81 | ↓253.88 | 1.0706 | 1.2 | **WIN** |
| 52 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 48 | 9732.96 | +273.12 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 53 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 21 | 14032.62 | -66.99 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |

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

- ✅ **Profit factor 2.03** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T08:50:28.502Z*
