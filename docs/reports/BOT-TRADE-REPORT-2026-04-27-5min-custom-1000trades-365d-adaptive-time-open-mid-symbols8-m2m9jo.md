# Bot Trade Report — 229 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:58:38.605Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 8 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $3377.04 (+3.38%) over 229 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 229 |
| Win rate | 45.41% (104W / 125L) |
| Net P&L | $+3377.04 (+3.38%) |
| Gross profit | $13608.96 |
| Gross loss | $10231.92 |
| Profit factor | 1.33 |
| Avg win | $130.86 |
| Avg loss | $81.86 |
| Payoff ratio | 1.6:1 |
| Expectancy | $+14.75 / trade |
| Max drawdown | 1.43% |
| Sharpe ratio (ann.) | 2.08 |
| Trades / active day | 1.78 |
| Avg confidence | 99.78% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.82R |
| Starting equity | $100,000 |
| Ending equity | $103,377.04 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 80 | 40% | $+428.38 | $5.35 |
| Mid  10:30–11:30 | 149 | 48.32% | $+2948.66 | $19.79 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 34 | 14 | 41.18% | $+920.57 | $+27.08 | 1.52 | eligible |
| ABNB | 19 | 10 | 52.63% | $+745.77 | $+39.25 | 2.32 | eligible |
| SBUX | 22 | 12 | 54.55% | $+620.06 | $+28.18 | 1.88 | eligible |
| NVDA | 33 | 15 | 45.45% | $+463.19 | $+14.04 | 1.32 | eligible |
| TSLA | 40 | 18 | 45% | $+292.71 | $+7.32 | 1.15 | eligible |
| NET | 27 | 12 | 44.44% | $+227.81 | $+8.44 | 1.17 | eligible |
| GOOGL | 17 | 6 | 35.29% | $+168.11 | $+9.89 | 1.28 | throttle |
| MRVL | 37 | 17 | 45.95% | $-61.18 | $-1.65 | 0.97 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 77 | 32 | 41.56% | $+1523.98 | $+19.79 |
| trend | 152 | 72 | 47.37% | $+1853.06 | $+12.19 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 207 | 94 | 45.41% | $+3179.25 | $+15.36 |
| noisyHighBeta | 22 | 10 | 45.45% | $+197.79 | $+8.99 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABNB | 11 | 2.57 | $+35.62 | 8 | 2.13 | $+44.24 | 0.14% | 1.65 | promote |
| Symbol | INTC | 21 | 1.38 | $+19.25 | 13 | 1.74 | $+39.72 | 0.29% | 1.45 | promote |
| Symbol | SBUX | 16 | 1.94 | $+27.84 | 6 | 1.75 | $+29.1 | 0.17% | 1.4 | promote |
| Time slot | Mid 10:30-11:30 | 67 | 1.51 | $+21.15 | 82 | 1.42 | $+18.68 | 0.93% | 1.13 | promote |
| Setup | trend | 105 | 1.3 | $+11.55 | 47 | 1.46 | $+13.61 | 0.66% | 1.08 | watch |
| Behavior | neutral | 126 | 1.42 | $+18.7 | 81 | 1.2 | $+10.16 | 1.34% | 0.95 | watch |
| Setup | breakout | 32 | 1.76 | $+42.94 | 45 | 1.05 | $+3.33 | 0.93% | 0.86 | watch |
| Behavior | noisyHighBeta | 11 | 2.02 | $+21.03 | 11 | 0.89 | $-3.04 | 0.14% | 0.71 | watch |
| Symbol | TSLA | 22 | 1.42 | $+18.16 | 18 | 0.9 | $-5.93 | 0.64% | 0.71 | watch |
| Symbol | NET | 16 | 1.45 | $+21.73 | 11 | 0.79 | $-10.89 | 0.51% | 0.63 | watch |
| Symbol | GOOGL | 9 | 2.91 | $+32.67 | 8 | 0.72 | $-15.74 | 0.4% | 0.56 | watch |
| Time slot | Open 9:30-10:30 | 70 | 1.39 | $+16.72 | 10 | 0.01 | $-74.21 | 0.75% | 0 | watch |
| Symbol | NVDA | 17 | 1.15 | $+7.94 | 16 | 1.58 | $+20.51 | 0.24% | 1.2 | reject |
| Symbol | MRVL | 25 | 1.13 | $+6.78 | 12 | 0.6 | $-19.22 | 0.38% | 0.45 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2814.44 | 1.27 |
| +3 bps/side | $+1689.16 | 1.15 |
| +5 bps/side | $+563.88 | 1.05 |
| +10 bps/side | $-2249.28 | 0.84 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 90 |
| timeout | 70 |
| trim-profit-target | 19 |
| stagnation | 18 |
| breakeven-stop | 13 |
| profit-target | 10 |
| stop-loss | 6 |
| trailing-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.03 | 106.62 | 132 | 13995.96 | +77.88 | +0.56% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.17 | 123.11 | 112 | 13907.04 | -118.72 | -0.85% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.06 | 60.92 | 229 | 13982.74 | -32.06 | -0.23% | 0.12R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 4 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.79 | 114.16 | 122 | 14004.38 | -76.86 | -0.55% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 5 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.37 | 682 | 13987.82 | -95.48 | -0.68% | 0.62R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 6 | SBUX | 05-02 14:25 | 05-02 14:50 | 83.91 | 83.6 | 166 | 13929.06 | -51.46 | -0.37% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 7 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.83 | 126.3 | 110 | 13951.3 | -58.3 | -0.42% | 0.27R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 8 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 43 | 13924.69 | -84.71 | -0.61% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 9 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 43 | 13956.94 | +78.26 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 10 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13956.94 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 11 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.55 | 650 | 13975 | +32.5 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 12 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.82 | 171.6 | 82 | 13925.24 | +145.96 | +1.05% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 13 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 14 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.36 | 136.81 | 51 | 13942.08 | +73.95 | +1.07% | 1.53R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 15 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.36 | 137.22 | 52 | 13942.08 | +96.72 | +1.37% | 1.96R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 16 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 225 | 13950 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 17 | NET | 05-21 15:10 | 05-21 16:55 | 158.32 | 159.41 | 88 | 13932.16 | +95.92 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 18 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.8 | 132.74 | 104 | 13915.2 | -110.24 | -0.79% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 19 | TSLA | 05-22 15:20 | 05-22 15:40 | 344.05 | 342.24 | 40 | 13762 | -72.4 | -0.53% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 20 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.16 | 171.77 | 81 | 13944.96 | -31.59 | -0.23% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 21 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.94 | 361.1 | 38 | 13791.72 | -69.92 | -0.51% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 22 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 23 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 24 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.3 | 353.52 | 39 | 13622.7 | +164.58 | +1.21% | 0.92R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 25 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.12 | 62.84 | 221 | 13949.52 | -61.88 | -0.44% | 0.42R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 26 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 105 | 13875.75 | +121.8 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 27 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.99 | 64.74 | 109 | 13949.82 | +81.75 | +1.17% | 0.89R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 28 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.99 | 65.46 | 109 | 13949.82 | +160.23 | +2.3% | 1.74R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 29 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 80 | 13986.4 | +356.8 | +2.55% | 2.63R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 30 | NET | 06-05 15:10 | 06-05 15:35 | 180.54 | 179.3 | 77 | 13901.58 | -95.48 | -0.69% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 31 | INTC | 06-09 14:05 | 06-09 14:55 | 20.84 | 20.79 | 672 | 14004.48 | -33.6 | -0.24% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 72 | ↑20.61 | 0.1507 | 1.72 | **LOSS** |
| 32 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.71 | 70.1 | 109 | 7707.39 | -66.49 | -0.86% | 0.61R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 33 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 34 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.11 | 69.72 | 199 | 13951.89 | -77.61 | -0.56% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 35 | NVDA | 06-12 14:40 | 06-12 15:20 | 144.82 | 144.39 | 96 | 13902.72 | -41.28 | -0.3% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 36 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.61 | 70.59 | 195 | 13963.95 | -198.9 | -1.42% | 1.25R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 37 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 43 | 13951.35 | -58.91 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 38 | NET | 06-23 14:25 | 06-23 14:45 | 181.79 | 180.66 | 77 | 13997.83 | -87.01 | -0.62% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 39 | INTC | 06-24 14:00 | 06-24 15:10 | 21.89 | 22.47 | 639 | 13987.71 | +370.62 | +2.65% | 2.76R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 40 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 73 | 13927.67 | -65.7 | -0.47% | 0.64R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 41 | NVDA | 06-25 14:15 | 06-25 15:05 | 152.01 | 151.73 | 91 | 13832.91 | -25.48 | -0.18% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 42 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.82 | 132.16 | 107 | 13997.74 | +143.38 | +1.02% | 1.26R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 43 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 602 | 14056.7 | -174.58 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 44 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.23 | 95.16 | 150 | 13984.5 | +289.5 | +2.07% | 2.76R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 45 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.12 | 618 | 14016.24 | +271.92 | +1.94% | 2.31R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 46 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 178 | 13976.56 | +74.76 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 47 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 74 | 13994.88 | +176.86 | +1.26% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 48 | MRVL | 07-08 14:40 | 07-08 15:15 | 73.18 | 72.9 | 191 | 13977.38 | -53.48 | -0.38% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 49 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.03 | 95.09 | 147 | 13969.41 | +8.82 | +0.06% | 0.09R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 50 | INTC | 07-08 15:00 | 07-08 15:20 | 23.41 | 23.24 | 601 | 14069.41 | -102.17 | -0.73% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 51 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.07 | 138.77 | 101 | 13945.07 | +70.7 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 52 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.75 | 318.04 | 43 | 13749.25 | -73.53 | -0.53% | 0.32R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 53 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 95 | 13958.28 | +97.85 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 54 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 13958.28 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 55 | NET | 07-21 13:55 | 07-21 14:20 | 199.9 | 197.65 | 70 | 13993 | -157.5 | -1.13% | 1.01R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 56 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 178 | 13989.02 | -92.56 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 57 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.87 | 308.27 | 44 | 13678.28 | -114.4 | -0.84% | 0.52R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 58 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.38 | 89.36 | 86 | 7686.68 | -1.72 | -0.02% | 0.02R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **LOSS** |
| 59 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.04 | 91.73 | 152 | 13990.08 | -47.12 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 60 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 181 | 13962.34 | -72.4 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 61 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 69 | 13863.48 | -0.69 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 62 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 654 | 14041.38 | -65.4 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 63 | MRVL | 08-13 14:10 | 08-13 14:30 | 79.93 | 79.46 | 174 | 13907.82 | -81.78 | -0.59% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.08 | ↑79.26 | 0.4703 | 2.17 | **LOSS** |
| 64 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 644 | 14032.76 | +296.24 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 65 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.27 | 203.22 | 68 | 13890.36 | -71.4 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 66 | GOOGL | 08-15 14:10 | 08-15 15:00 | 206 | 205.42 | 68 | 14008 | -39.44 | -0.28% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 67 | NET | 08-15 14:15 | 08-15 15:45 | 198.84 | 200.89 | 35 | 13918.8 | +71.75 | +1.03% | 1.17R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 68 | NET | 08-15 14:15 | 08-15 16:00 | 198.84 | 200.83 | 35 | 13918.8 | +69.65 | +1% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 69 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.81 | 127.26 | 109 | 13931.29 | -59.95 | -0.43% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 70 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 42 | 13720.56 | +348.6 | +2.54% | 3.39R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 71 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.49 | 177.9 | 79 | 13942.71 | +111.39 | +0.8% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 72 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.7 | 87.9 | 159 | 13944.3 | +31.8 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 73 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.16 | 339.81 | 41 | 13946.56 | -14.35 | -0.1% | 0.08R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 74 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.25 | 584 | 14086.08 | +75.92 | +0.54% | 0.68R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 75 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.08 | 64.09 | 121 | 7632.68 | +122.21 | +1.6% | 1.38R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 76 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.15 | 125.1 | 112 | 14016.8 | -5.6 | -0.04% | 0.05R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 77 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.82 | 64.93 | 215 | 13936.3 | +23.65 | +0.17% | 0.12R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 78 | TSLA | 09-10 14:45 | 09-10 16:20 | 353.43 | 353.58 | 39 | 13783.77 | +5.85 | +0.04% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 79 | NET | 09-11 14:15 | 09-11 15:25 | 226.47 | 229 | 30 | 13814.67 | +75.9 | +1.12% | 1R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 80 | NET | 09-11 14:15 | 09-11 16:00 | 226.47 | 229.66 | 31 | 13814.67 | +98.89 | +1.41% | 1.26R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 81 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.34 | 361.09 | 19 | 13936.26 | +71.25 | +1.05% | 0.72R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 82 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.34 | 362.27 | 20 | 13936.26 | +98.6 | +1.38% | 0.95R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 83 | NET | 09-15 13:40 | 09-15 15:25 | 224.29 | 227.1 | 62 | 13905.98 | +174.22 | +1.25% | 1.6R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 84 | INTC | 09-16 14:10 | 09-16 15:00 | 25.21 | 25.12 | 559 | 14092.39 | -50.31 | -0.36% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 85 | TSLA | 09-16 14:45 | 09-16 15:05 | 421.01 | 416.42 | 33 | 13893.33 | -151.47 | -1.09% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 86 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.17 | 417.43 | 33 | 13865.61 | -90.42 | -0.65% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 87 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.57 | 71.08 | 198 | 13972.86 | +100.98 | +0.72% | 0.62R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 88 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.65 | 84.36 | 165 | 13967.25 | -47.85 | -0.34% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 89 | INTC | 09-22 13:40 | 09-22 14:00 | 30.1 | 29.51 | 468 | 14086.8 | -276.12 | -1.96% | 1.7R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 90 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.36 | 179.46 | 79 | 13932.44 | +244.9 | +1.76% | 1.64R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 91 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.11 | 82.38 | 177 | 14002.47 | +578.79 | +4.13% | 3.3R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 92 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.81 | 186.54 | 75 | 13860.75 | +129.75 | +0.94% | 0.74R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 93 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.92 | 455.47 | 15 | 13978.52 | +68.25 | +1.01% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 94 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.92 | 455.36 | 16 | 13978.52 | +71.04 | +0.98% | 0.75R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 95 | SBUX | 10-02 14:20 | 10-02 15:10 | 86.8 | 86.37 | 161 | 13974.8 | -69.23 | -0.5% | 0.43R | 50m | market | early-reversal | trend | trend | neutral | 79.02 | ↓86.08 | 0.5608 | 1.68 | **LOSS** |
| 96 | INTC | 10-02 15:15 | 10-02 16:50 | 36.51 | 37 | 105 | 7703.61 | +51.45 | +1.34% | 1.13R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 97 | INTC | 10-02 15:15 | 10-02 17:00 | 36.51 | 37.01 | 106 | 7703.61 | +53 | +1.37% | 1.15R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 98 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.95 | 194.05 | 72 | 14036.4 | -64.8 | -0.46% | 0.62R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 99 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.98 | 188.04 | 73 | 13868.54 | -141.62 | -1.02% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 100 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.83 | 421.98 | 32 | 13722.56 | -219.2 | -1.6% | 1.01R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 101 | SBUX | 10-13 15:20 | 10-13 17:05 | 79.65 | 80.32 | 175 | 13938.75 | +117.25 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑78.95 | 0.1677 | 1.42 | **WIN** |
| 102 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.71 | 122.24 | 58 | 14002.36 | +88.74 | +1.27% | 1.61R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 103 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.71 | 123.33 | 58 | 14002.36 | +151.96 | +2.17% | 2.75R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 104 | SBUX | 10-15 14:00 | 10-15 15:25 | 82.71 | 82.73 | 169 | 13977.99 | +3.38 | +0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 77.12 | ↑82.22 | 0.2984 | 1.07 | **WIN** |
| 105 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.93 | 248.74 | 56 | 13940.08 | -10.64 | -0.08% | 0.08R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 106 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 204 | 7727.52 | -77.52 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 107 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.49 | 182.08 | 76 | 13945.24 | -107.16 | -0.77% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 108 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.86 | 87.94 | 87 | 7730.82 | -80.04 | -1.04% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 109 | SBUX | 10-17 15:00 | 10-17 16:45 | 85.18 | 85.6 | 164 | 13969.52 | +68.88 | +0.49% | 0.64R | 105m | market | timeout | trend | trend | neutral | 59.03 | ↑84.66 | 0.1425 | 1.41 | **WIN** |
| 110 | NVDA | 10-20 14:25 | 10-20 14:45 | 185.01 | 183.87 | 75 | 13875.75 | -85.5 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 111 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.79 | 84.72 | 166 | 14075.14 | -11.62 | -0.08% | 0.06R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 112 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.86 | 128.38 | 109 | 14045.74 | -52.32 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 113 | SBUX | 10-27 14:00 | 10-27 14:20 | 87.37 | 87.03 | 160 | 13979.2 | -54.4 | -0.39% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 74.79 | ↑86.66 | 0.1516 | 1.16 | **LOSS** |
| 114 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.02 | 88.27 | 159 | 13995.18 | +39.75 | +0.28% | 0.17R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 115 | INTC | 10-28 15:15 | 10-28 16:55 | 41.55 | 42.13 | 93 | 7728.3 | +53.94 | +1.4% | 0.92R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 116 | INTC | 10-28 15:15 | 10-28 17:00 | 41.55 | 42.15 | 93 | 7728.3 | +55.8 | +1.44% | 0.95R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 117 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.87 | 271.73 | 51 | 13814.37 | +43.86 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 118 | NET | 10-30 14:00 | 10-30 14:30 | 229.48 | 228.27 | 61 | 13998.28 | -73.81 | -0.53% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 119 | NET | 10-30 15:20 | 10-30 15:40 | 231.04 | 229.83 | 60 | 13862.4 | -72.6 | -0.52% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 120 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.23 | 455.2 | 15 | 13566.9 | +44.55 | +0.66% | 0.51R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 121 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.23 | 454.25 | 15 | 13566.9 | +30.3 | +0.45% | 0.35R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 122 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.36 | 95.76 | 146 | 14068.56 | -87.6 | -0.62% | 0.31R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 123 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.54 | 207.29 | 67 | 13972.18 | -83.75 | -0.6% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 124 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 149 | 13997.06 | -169.86 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 125 | NET | 11-03 14:35 | 11-03 15:15 | 255.73 | 253.85 | 54 | 13809.42 | -101.52 | -0.74% | 0.45R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 126 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.82 | 79.28 | 175 | 13968.5 | -94.5 | -0.68% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 127 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.44 | 84.7 | 154 | 12849.76 | +194.04 | +1.51% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 128 | INTC | 11-07 15:05 | 11-07 15:25 | 37.97 | 37.63 | 370 | 14048.9 | -125.8 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 129 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.43 | 446.76 | 8 | 7470.31 | +58.64 | +1.67% | 1.11R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 130 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.43 | 446.32 | 9 | 7470.31 | +62.01 | +1.57% | 1.05R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 131 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.42 | 86.68 | 164 | 14008.88 | +206.64 | +1.48% | 2.11R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 132 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.21 | 122.77 | 115 | 14054.15 | +64.4 | +0.46% | 0.51R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 133 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.94 | 122.3 | 114 | 14015.16 | -72.96 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 134 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.15 | 189.89 | 75 | 13961.25 | +280.5 | +2.01% | 1.26R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 135 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 159 | 14034.93 | -174.9 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 136 | TSLA | 11-14 15:25 | 11-14 17:10 | 400.19 | 409.48 | 35 | 14006.65 | +325.15 | +2.32% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 137 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.59 | 85.92 | 162 | 14027.58 | -108.54 | -0.77% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 138 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.64 | 419.44 | 33 | 13650.12 | +191.4 | +1.4% | 1.01R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 139 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.61 | 289.65 | 47 | 13752.67 | -139.12 | -1.01% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 140 | INTC | 11-19 14:45 | 11-19 15:55 | 34.91 | 35.05 | 402 | 14033.82 | +56.28 | +0.4% | 0.37R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 141 | TSLA | 11-19 15:15 | 11-19 15:35 | 410.53 | 407.84 | 18 | 7389.54 | -48.42 | -0.66% | 0.38R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↑406.75 | 1.7263 | 1.09 | **LOSS** |
| 142 | NET | 11-24 14:30 | 11-24 16:05 | 190.09 | 192.4 | 36 | 13876.57 | +83.16 | +1.22% | 1.17R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 143 | NET | 11-24 14:30 | 11-24 16:15 | 190.09 | 192.12 | 37 | 13876.57 | +75.11 | +1.07% | 1.03R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 144 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.93 | 81.57 | 47 | 7688.35 | +30.08 | +0.79% | 0.4R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 145 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.93 | 81.59 | 48 | 7688.35 | +31.68 | +0.82% | 0.41R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 146 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.94 | 117.29 | 120 | 14032.8 | +42 | +0.3% | 0.29R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 147 | NET | 12-02 14:35 | 12-02 15:55 | 203.23 | 203.18 | 69 | 14022.87 | -3.45 | -0.02% | 0.02R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **LOSS** |
| 148 | INTC | 12-02 14:45 | 12-02 15:25 | 41.14 | 42.26 | 341 | 14028.74 | +381.92 | +2.72% | 2.06R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 149 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.76 | 441.23 | 16 | 13944.32 | +87.52 | +1.26% | 1.58R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 150 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.76 | 439.57 | 16 | 13944.32 | +60.96 | +0.87% | 1.09R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 151 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.35 | 180.66 | 76 | 13858.6 | -128.44 | -0.93% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 152 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 31 | 14060.05 | -103.54 | -0.74% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 153 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.14 | 447.07 | 31 | 13737.34 | +121.83 | +0.89% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 154 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 31 | 14040.21 | +47.74 | +0.34% | 0.49R | 40m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 155 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.67 | 353 | 14105.88 | -102.37 | -0.73% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 156 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.3 | 85 | 150 | 12945 | -195 | -1.51% | 0.76R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 157 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.63 | 135.74 | 102 | 13936.26 | -90.78 | -0.65% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 158 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 159 | INTC | 12-19 14:35 | 12-19 15:35 | 37.09 | 37.06 | 380 | 14094.2 | -11.4 | -0.08% | 0.08R | 60m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 160 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.31 | 304.74 | 45 | 13738.95 | -25.65 | -0.19% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 161 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.43 | 87.6 | 162 | 14001.66 | +189.54 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 162 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.23 | 189.89 | 73 | 13959.79 | -97.82 | -0.7% | 0.91R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 163 | ABNB | 01-05 14:45 | 01-05 16:30 | 135.01 | 136.8 | 104 | 14041.04 | +186.16 | +1.33% | 1.9R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 164 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.39 | 86.01 | 82 | 14003.96 | +50.84 | +0.73% | 0.92R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 165 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.39 | 86.43 | 82 | 14003.96 | +85.28 | +1.22% | 1.54R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 166 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.7 | 89.01 | 160 | 14032 | +209.6 | +1.49% | 2.04R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 167 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.83 | 441.03 | 31 | 13758.73 | -86.8 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 168 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.8 | 89.21 | 157 | 14098.6 | -92.63 | -0.66% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 169 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 170 | NET | 01-13 14:40 | 01-13 15:00 | 188.73 | 187.83 | 74 | 13966.02 | -66.6 | -0.48% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 171 | INTC | 01-13 15:15 | 01-13 15:40 | 47.27 | 46.69 | 164 | 7752.28 | -95.12 | -1.23% | 0.62R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 172 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.43 | 441.68 | 31 | 13746.33 | -54.25 | -0.39% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 173 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.91 | 82.42 | 171 | 14006.61 | +87.21 | +0.62% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 174 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.32 | 189.09 | 73 | 13893.36 | -89.79 | -0.65% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 175 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 31 | 13818.25 | -85.87 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 176 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.22 | 332.44 | 41 | 13703.02 | -72.98 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 177 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.58 | 135.77 | 103 | 14067.74 | -83.43 | -0.59% | 0.78R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 178 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 80 | 14006.4 | +80 | +0.57% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 179 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.26 | 82.94 | 168 | 13987.68 | -53.76 | -0.38% | 0.26R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 180 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.13 | 189.57 | 73 | 13806.49 | +32.12 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 181 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 165 | 14033.25 | -207.9 | -1.48% | 1.41R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 182 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.14 | 438.31 | 33 | 14062.62 | +401.61 | +2.86% | 2.17R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 183 | INTC | 01-30 15:15 | 01-30 16:05 | 48.72 | 48.51 | 159 | 7746.48 | -33.39 | -0.43% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 184 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 185 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 186 | SBUX | 02-03 14:40 | 02-03 16:25 | 93.02 | 93.42 | 151 | 14046.02 | +60.4 | +0.43% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 187 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.4 | 181.94 | 39 | 13915.2 | +138.06 | +1.98% | 1.14R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 188 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.4 | 183.49 | 39 | 13915.2 | +198.51 | +2.85% | 1.64R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 189 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 34 | 13876.76 | -79.9 | -0.58% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 190 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.34 | 409.75 | 34 | 13951.56 | -20.06 | -0.14% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 191 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.15 | 428.29 | 32 | 13924.8 | -219.52 | -1.58% | 1.34R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 192 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 193 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 194 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 175 | 14007 | -38.5 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 195 | INTC | 02-24 14:35 | 02-24 16:05 | 44.02 | 45.83 | 294 | 12941.88 | +532.14 | +4.11% | 2.32R | 90m | market | profit-target | breakout | breakout | neutral | 62.02 | ↑44.07 | 0.1741 | 1.36 | **WIN** |
| 196 | TSLA | 02-24 15:20 | 02-24 15:55 | 406.01 | 404.48 | 34 | 13804.34 | -52.02 | -0.38% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 197 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.12 | 191.87 | 73 | 14024.76 | -18.25 | -0.13% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 198 | MRVL | 02-25 14:30 | 02-25 15:35 | 79.35 | 79.38 | 176 | 13965.6 | +5.28 | +0.04% | 0.06R | 65m | market | breakeven-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **WIN** |
| 199 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.44 | 130.16 | 110 | 14018.4 | +299.2 | +2.13% | 2.92R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 200 | INTC | 02-27 15:00 | 02-27 15:20 | 45.96 | 45.45 | 308 | 14155.68 | -157.08 | -1.11% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 201 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.29 | 180.91 | 77 | 14036.33 | -106.26 | -0.76% | 0.93R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 202 | INTC | 03-04 14:45 | 03-04 16:30 | 43.93 | 44.68 | 321 | 14101.53 | +240.75 | +1.71% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 60.5 | ↑43.8 | 0.0616 | 1.83 | **WIN** |
| 203 | ABNB | 03-04 14:50 | 03-04 16:35 | 136.03 | 137.4 | 103 | 14011.09 | +141.11 | +1.01% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 204 | NET | 03-04 15:10 | 03-04 15:35 | 185.6 | 184.46 | 75 | 13920 | -85.5 | -0.61% | 0.42R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 205 | TSLA | 03-04 15:25 | 03-04 15:45 | 407.81 | 404 | 34 | 13865.54 | -129.54 | -0.93% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 70.86 | ↑401.99 | 3.2565 | 1.83 | **LOSS** |
| 206 | INTC | 03-05 15:00 | 03-05 15:30 | 46.25 | 45.6 | 306 | 14152.5 | -198.9 | -1.41% | 0.85R | 30m | market | early-reversal | breakout | breakout | neutral | 59.57 | ↓45.74 | 0.0158 | 1.47 | **LOSS** |
| 207 | NET | 03-09 15:25 | 03-09 16:20 | 202.08 | 201.86 | 69 | 13943.52 | -15.18 | -0.11% | 0.1R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 208 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.53 | 185.21 | 76 | 14024.28 | +51.68 | +0.37% | 0.4R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 209 | INTC | 03-10 14:55 | 03-10 16:25 | 47.33 | 47.3 | 164 | 7762.12 | -4.92 | -0.06% | 0.04R | 90m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.19 | ↑46.7 | 0.5282 | 1.15 | **LOSS** |
| 210 | GOOGL | 03-11 14:25 | 03-11 15:05 | 311.03 | 309.96 | 45 | 13996.35 | -48.15 | -0.34% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 211 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.74 | 127.56 | 110 | 14051.4 | -19.8 | -0.14% | 0.2R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 212 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.12 | 91.94 | 83 | 7645.96 | -14.94 | -0.2% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 213 | NET | 03-20 14:30 | 03-20 14:50 | 224.96 | 221.86 | 62 | 13947.52 | -192.2 | -1.38% | 0.9R | 20m | market | stop-loss | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 214 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 78 | 13894.14 | -62.4 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 215 | SBUX | 03-25 14:00 | 03-25 14:20 | 93.25 | 92.33 | 151 | 14080.75 | -138.92 | -0.99% | 1.24R | 20m | market | early-reversal | trend | trend | neutral | 69.11 | ↓92.72 | 0.1502 | 1.49 | **LOSS** |
| 216 | NVDA | 03-25 14:20 | 03-25 15:10 | 179.95 | 179.83 | 77 | 13856.15 | -9.24 | -0.07% | 0.07R | 50m | market | breakeven-stop | trend | trend | neutral | 66.03 | ↑178.95 | 1.0192 | 2.13 | **LOSS** |
| 217 | INTC | 03-25 14:40 | 03-25 15:15 | 47.44 | 47.17 | 163 | 7732.72 | -44.01 | -0.57% | 0.29R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 218 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 38 | 13851 | -85.5 | -0.62% | 0.72R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 219 | NET | 04-02 15:05 | 04-02 16:15 | 209.46 | 209.4 | 36 | 7540.56 | -2.16 | -0.03% | 0.02R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.84 | ↑206.21 | 0.9751 | 1.18 | **LOSS** |
| 220 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.74 | 119.59 | 63 | 7606.62 | -72.45 | -0.95% | 0.5R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 221 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.53 | 182.88 | 76 | 13948.28 | -49.4 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 222 | TSLA | 04-14 14:25 | 04-14 15:00 | 363.09 | 361.71 | 38 | 13797.42 | -52.44 | -0.38% | 0.24R | 35m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |
| 223 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.81 | 332.15 | 42 | 13894.02 | +56.28 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 224 | INTC | 04-15 14:35 | 04-15 15:30 | 65.28 | 65.06 | 216 | 14100.48 | -47.52 | -0.34% | 0.17R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 225 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.99 | 141.76 | 98 | 14013.02 | -120.54 | -0.86% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |
| 226 | NET | 04-22 13:40 | 04-22 13:55 | 211.25 | 208.02 | 66 | 13942.5 | -213.18 | -1.53% | 1.43R | 15m | market | stop-loss | breakout | breakout | neutral | 66.61 | ↓209.29 | 0.1508 | 1.16 | **LOSS** |
| 227 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.67 | 154.76 | 90 | 13920.3 | +8.1 | +0.06% | 0.03R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 228 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.81 | 208.76 | 34 | 13927.08 | +134.3 | +1.93% | 1.39R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 229 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.81 | 209.65 | 34 | 13927.08 | +164.56 | +2.36% | 1.7R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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

- ⚠️ **Profit factor 1.33 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.82R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:58:38.605Z*
