# Bot Trade Report — 118 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:01:19.824Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $377.81 (+0.38%) over 118 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 118 |
| Win rate | 43.22% (51W / 67L) |
| Net P&L | $+377.81 (+0.38%) |
| Gross profit | $5307.29 |
| Gross loss | $4929.48 |
| Profit factor | 1.08 |
| Avg win | $104.06 |
| Avg loss | $73.57 |
| Payoff ratio | 1.41:1 |
| Expectancy | $+3.2 / trade |
| Max drawdown | 0.96% |
| Sharpe ratio (ann.) | 0.5 |
| Trades / active day | 1.37 |
| Avg confidence | 99.82% |
| Avg trade duration | 65 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $100,377.81 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 31 | 35.48% | $-263.58 | $-8.5 |
| Mid  10:30–11:30 | 87 | 45.98% | $+641.39 | $7.37 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 25 | 12 | 48% | $+1229.36 | $+49.17 | 2.19 | eligible |
| GOOGL | 17 | 8 | 47.06% | $+221.46 | $+13.03 | 1.61 | eligible |
| GS | 17 | 6 | 35.29% | $-176.8 | $-10.4 | 0.66 | throttle |
| MRVL | 30 | 13 | 43.33% | $-246.84 | $-8.23 | 0.83 | throttle |
| TSLA | 29 | 12 | 41.38% | $-649.37 | $-22.39 | 0.59 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 118 | 51 | 43.22% | $+377.81 | $+3.2 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 21 | 11 | 52.38% | $+589.7 | $+28.08 |
| neutral | 97 | 40 | 41.24% | $-211.89 | $-2.18 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 18 | 2.43 | $+55.17 | 7 | 1.69 | $+33.76 | 0.34% | 1.33 | promote |
| Behavior | noisyHighBeta | 8 | 1.6 | $+29.65 | 13 | 1.62 | $+27.12 | 0.45% | 1.3 | promote |
| Symbol | GOOGL | 9 | 2.3 | $+19.92 | 8 | 1.19 | $+5.28 | 0.12% | 0.81 | watch |
| Time slot | Mid 10:30-11:30 | 44 | 1.36 | $+13.68 | 43 | 1.02 | $+0.92 | 0.79% | 0.77 | watch |
| Symbol | MRVL | 20 | 0.71 | $-16.04 | 10 | 1.22 | $+7.4 | 0.25% | 0.87 | reject |
| Setup | trend | 70 | 1.17 | $+7.32 | 48 | 0.93 | $-2.81 | 0.97% | 0.69 | reject |
| Behavior | neutral | 62 | 1.11 | $+4.44 | 35 | 0.66 | $-13.93 | 0.61% | 0.46 | reject |
| Symbol | GS | 6 | 0.97 | $-0.89 | 11 | 0.51 | $-15.59 | 0.26% | 0.3 | reject |
| Symbol | TSLA | 17 | 0.59 | $-19.61 | 12 | 0.58 | $-26.33 | 0.54% | 0.47 | reject |
| Time slot | Open 9:30-10:30 | 26 | 0.93 | $-3.42 | 5 | 0.07 | $-34.91 | 0.18% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+84.43 | 1.02 |
| +3 bps/side | $-502.53 | 0.91 |
| +5 bps/side | $-1089.39 | 0.81 |
| +10 bps/side | $-2556.64 | 0.63 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 43 |
| timeout | 33 |
| stagnation | 15 |
| trim-profit-target | 12 |
| breakeven-stop | 6 |
| stop-loss | 4 |
| trailing-stop | 3 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 2 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 3 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 4 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 5 | TSLA | 05-13 14:15 | 05-13 14:40 | 324 | 321.92 | 43 | 13932 | -89.44 | -0.64% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 68.82 | ↑321.15 | 1.7391 | 1.01 | **LOSS** |
| 6 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 7 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 8 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 650 | 13975 | +39 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 9 | GOOGL | 05-21 14:55 | 05-21 16:20 | 171.69 | 171.6 | 81 | 13906.89 | -7.29 | -0.05% | 0.04R | 85m | market | stagnation | trend | trend | neutral | 79.73 | ↑168.55 | 1.8998 | 1.34 | **LOSS** |
| 10 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 11 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 225 | 13947.75 | +69.75 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 12 | TSLA | 05-22 15:20 | 05-22 15:40 | 343.98 | 342.31 | 40 | 13759.2 | -66.8 | -0.49% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 13 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.12 | 171.8 | 81 | 13941.72 | -25.92 | -0.19% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 14 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 15 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 16 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.23 | 353.59 | 39 | 13619.97 | +170.04 | +1.25% | 0.95R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 17 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 221 | 13947.31 | -55.25 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 18 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 13947.64 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 19 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 109 | 13947.64 | +163.5 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 20 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 198 | 13998.6 | -114.84 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 21 | INTC | 06-09 14:15 | 06-09 14:45 | 20.9 | 20.76 | 670 | 14003 | -93.8 | -0.67% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 74.14 | ↑20.65 | 0.1726 | 1.93 | **LOSS** |
| 22 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 673 | 13984.94 | -20.19 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 23 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 199 | 13947.91 | -71.64 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 24 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.59 | 70.6 | 195 | 13960.05 | -193.05 | -1.38% | 1.21R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 25 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.38 | 323.14 | 43 | 13948.34 | -53.32 | -0.38% | 0.29R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 26 | INTC | 06-24 14:00 | 06-24 15:10 | 21.88 | 22.48 | 639 | 13981.32 | +383.4 | +2.74% | 2.85R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 27 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 601 | 14033.35 | -174.29 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 28 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 618 | 14016.24 | +278.1 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 29 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.5 | 78.95 | 178 | 13973 | +80.1 | +0.57% | 0.42R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 30 | INTC | 07-08 15:00 | 07-08 15:20 | 23.4 | 23.25 | 601 | 14063.4 | -90.15 | -0.64% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 31 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 96 | 13934.6 | +60.48 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 32 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 97 | 13934.6 | +62.08 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 33 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 21 | 13676.58 | +68.46 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 34 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13676.58 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 35 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.57 | 78.09 | 178 | 13985.46 | -85.44 | -0.61% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 36 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.81 | 308.33 | 45 | 13986.45 | -111.6 | -0.8% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 37 | TSLA | 08-06 15:10 | 08-06 15:45 | 319.05 | 317.9 | 43 | 13719.15 | -49.45 | -0.36% | 0.38R | 35m | market | early-reversal | trend | trend | neutral | 76.39 | ↑314.82 | 2.2409 | 1.06 | **LOSS** |
| 38 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.12 | 76.76 | 181 | 13958.72 | -65.16 | -0.47% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 39 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 69 | 13860.72 | +4.83 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 40 | TSLA | 08-11 15:25 | 08-11 17:05 | 344.19 | 343.75 | 40 | 13767.6 | -17.6 | -0.13% | 0.15R | 100m | market | stagnation | trend | trend | neutral | 66.87 | ↑341.07 | 2.7526 | 1 | **LOSS** |
| 41 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 645 | 14054.55 | +296.7 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 42 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 68 | 13887.64 | -65.96 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 43 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 44 | MRVL | 08-22 14:40 | 08-22 15:05 | 74.57 | 74.01 | 187 | 13944.59 | -104.72 | -0.75% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 79.5 | ↑73.48 | 0.8717 | 1.69 | **LOSS** |
| 45 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 46 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 584 | 14086.08 | +81.76 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 47 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 221 | 13938.47 | +229.84 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 48 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.8 | 64.95 | 216 | 13996.8 | +32.4 | +0.23% | 0.16R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 49 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 50 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 51 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 52 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 559 | 14086.8 | -44.72 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 53 | TSLA | 09-16 14:45 | 09-16 15:05 | 420.92 | 416.51 | 33 | 13890.36 | -145.53 | -1.05% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 54 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13524.9 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 55 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 15 | 13524.9 | +69.3 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 56 | INTC | 10-02 15:15 | 10-02 16:50 | 36.5 | 37 | 193 | 14089 | +96.5 | +1.37% | 1.15R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 57 | INTC | 10-02 15:15 | 10-02 17:00 | 36.5 | 37.02 | 193 | 14089 | +100.36 | +1.42% | 1.19R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 58 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.74 | 422.06 | 32 | 13719.68 | -213.76 | -1.56% | 0.98R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 59 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.88 | 248.79 | 56 | 13937.28 | -5.04 | -0.04% | 0.04R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 60 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 373 | 14129.24 | -141.74 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 61 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 157 | 13947.88 | -139.73 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 62 | MRVL | 10-27 14:40 | 10-27 16:25 | 88.12 | 88.11 | 158 | 13922.96 | -1.58 | -0.01% | 0.01R | 105m | market | breakeven-stop | breakout | trend | neutral | 74.94 | ↑86.85 | 0.6688 | 1.77 | **LOSS** |
| 63 | INTC | 10-28 15:15 | 10-28 16:55 | 41.54 | 42.14 | 169 | 14082.06 | +101.4 | +1.44% | 0.95R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 64 | INTC | 10-28 15:15 | 10-28 17:00 | 41.54 | 42.16 | 170 | 14082.06 | +105.4 | +1.49% | 0.98R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 65 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.82 | 271.79 | 51 | 13811.82 | +49.47 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 66 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.14 | 455.29 | 15 | 13564.2 | +47.25 | +0.7% | 0.54R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 67 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.14 | 454.34 | 15 | 13564.2 | +33 | +0.49% | 0.38R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 68 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.34 | 95.78 | 145 | 13969.3 | -81.2 | -0.58% | 0.29R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 69 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 148 | 13900.16 | -162.8 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 70 | GS | 11-04 15:05 | 11-04 16:10 | 795.41 | 795.9 | 17 | 13521.97 | +8.33 | +0.06% | 0.07R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 71 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.35 | 446.85 | 15 | 13619.85 | +112.5 | +1.71% | 1.14R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 72 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.35 | 446.41 | 16 | 13619.85 | +112.96 | +1.61% | 1.07R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 73 | TSLA | 11-17 14:55 | 11-17 15:15 | 416.74 | 411.21 | 33 | 13752.42 | -182.49 | -1.33% | 0.88R | 20m | market | early-reversal | breakout | trend | neutral | 71.84 | ↑410.09 | 1.2577 | 1.72 | **LOSS** |
| 74 | TSLA | 11-19 15:15 | 11-19 15:45 | 410.45 | 406.91 | 34 | 13955.3 | -120.36 | -0.86% | 0.5R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↓406.75 | 1.7263 | 1.09 | **LOSS** |
| 75 | GOOGL | 11-21 14:30 | 11-21 15:15 | 298.47 | 296.38 | 46 | 13729.62 | -96.14 | -0.7% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 76 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.91 | 81.59 | 86 | 13916.52 | +58.48 | +0.84% | 0.42R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 77 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.91 | 81.61 | 86 | 13916.52 | +60.2 | +0.87% | 0.44R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 78 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 79 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 80 | GS | 12-03 15:00 | 12-03 16:45 | 823.94 | 829.67 | 16 | 13183.04 | +91.68 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 81 | GS | 12-04 15:20 | 12-04 15:45 | 843.64 | 838.61 | 16 | 13498.24 | -80.48 | -0.6% | 0.86R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 82 | INTC | 12-05 14:35 | 12-05 15:40 | 41.69 | 42.13 | 339 | 14132.91 | +149.16 | +1.06% | 0.85R | 65m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.02 | ↓41.57 | 0.0843 | 1.54 | **WIN** |
| 83 | GS | 12-17 14:30 | 12-17 15:25 | 889.8 | 889.29 | 14 | 12457.2 | -7.14 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 84 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 45 | 13736.25 | -20.25 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 85 | GS | 12-19 15:10 | 12-19 15:40 | 895.28 | 892.8 | 15 | 13429.2 | -37.2 | -0.28% | 0.35R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 86 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 161 | 13913.62 | +193.2 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 87 | INTC | 01-02 14:35 | 01-02 15:05 | 38.51 | 39.68 | 367 | 14133.17 | +429.39 | +3.04% | 2.13R | 30m | market | profit-target | breakout | trend | noisyHighBeta | 79.83 | ↑38.35 | 0.2605 | 1.48 | **WIN** |
| 88 | MRVL | 01-02 14:55 | 01-02 15:20 | 89.02 | 88.28 | 157 | 13976.14 | -116.18 | -0.83% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 79.84 | ↓88.42 | 0.7955 | 1.32 | **LOSS** |
| 89 | GS | 01-02 15:00 | 01-02 15:20 | 889.89 | 885.58 | 15 | 13348.35 | -64.65 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.71 | ↓885.26 | 1.3176 | 1.22 | **LOSS** |
| 90 | INTC | 01-13 15:15 | 01-13 15:40 | 47.26 | 46.7 | 300 | 14178 | -168 | -1.18% | 0.59R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 91 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 31 | 13743.54 | -48.67 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 92 | MRVL | 01-15 15:00 | 01-15 16:45 | 81.97 | 82.43 | 170 | 13934.9 | +78.2 | +0.56% | 0.29R | 105m | market | timeout | trend | trend | neutral | 73.77 | ↑81.61 | 0.6437 | 1.36 | **WIN** |
| 93 | GOOGL | 01-21 15:05 | 01-21 16:30 | 326.57 | 330.47 | 21 | 13715.94 | +81.9 | +1.19% | 1.16R | 85m | market | trim-profit-target | trend | trend | neutral | 70.59 | ↑323.18 | 0.4517 | 1.02 | **WIN** |
| 94 | GOOGL | 01-21 15:05 | 01-21 16:50 | 326.57 | 327.2 | 21 | 13715.94 | +13.23 | +0.19% | 0.18R | 105m | market | trailing-stop | trend | trend | neutral | 70.59 | ↓323.18 | 0.4517 | 1.02 | **WIN** |
| 95 | GS | 01-21 15:05 | 01-21 16:50 | 957.92 | 960.49 | 14 | 13410.88 | +35.98 | +0.27% | 0.36R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 96 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 97 | GOOGL | 01-26 15:25 | 01-26 17:10 | 332.59 | 335.35 | 40 | 13303.6 | +110.4 | +0.83% | 1.05R | 105m | market | timeout | trend | trend | neutral | 77.53 | ↑329.98 | 0.7246 | 1.07 | **WIN** |
| 98 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 168 | 13984.32 | -47.04 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 99 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 291 | 14174.61 | -55.29 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 100 | TSLA | 01-30 15:25 | 01-30 17:10 | 433.69 | 435.5 | 32 | 13878.08 | +57.92 | +0.42% | 0.24R | 105m | market | timeout | trend | trend | neutral | 70.24 | ↑428.13 | 3.7375 | 1.65 | **WIN** |
| 101 | GS | 02-09 15:15 | 02-09 17:00 | 940 | 943.53 | 14 | 13160 | +49.42 | +0.38% | 0.45R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 102 | GS | 02-10 15:00 | 02-10 15:50 | 957.67 | 952.99 | 14 | 13407.38 | -65.52 | -0.49% | 0.62R | 50m | market | early-reversal | trend | trend | neutral | 76.56 | ↓955.74 | 2.5632 | 1.96 | **LOSS** |
| 103 | TSLA | 02-11 14:45 | 02-11 15:00 | 435.25 | 428.37 | 32 | 13928 | -220.16 | -1.58% | 1.3R | 15m | market | stop-loss | breakout | trend | neutral | 76.37 | ↓433.74 | 2.2889 | 1.34 | **LOSS** |
| 104 | TSLA | 02-24 15:20 | 02-24 15:55 | 405.93 | 404.56 | 34 | 13801.62 | -46.58 | -0.34% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 105 | MRVL | 02-25 14:30 | 02-25 16:00 | 79.33 | 79.23 | 176 | 13962.08 | -17.6 | -0.13% | 0.19R | 90m | market | trailing-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **LOSS** |
| 106 | GS | 02-25 15:00 | 02-25 15:50 | 916.4 | 913.58 | 15 | 13746 | -42.3 | -0.31% | 0.33R | 50m | market | early-reversal | trend | trend | neutral | 70.75 | ↓913.94 | 1.6765 | 1.74 | **LOSS** |
| 107 | INTC | 03-10 14:55 | 03-10 16:25 | 47.32 | 47.31 | 299 | 14148.68 | -2.99 | -0.02% | 0.01R | 90m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.19 | ↑46.7 | 0.5282 | 1.15 | **LOSS** |
| 108 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 109 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.1 | 91.96 | 151 | 13907.1 | -21.14 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 110 | GS | 03-23 15:00 | 03-23 15:25 | 847.83 | 845.31 | 16 | 13565.28 | -40.32 | -0.3% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 70.46 | ↑839.76 | 8.9736 | 1.01 | **LOSS** |
| 111 | INTC | 03-25 14:40 | 03-25 15:15 | 47.43 | 47.18 | 299 | 14181.57 | -74.75 | -0.53% | 0.27R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 112 | TSLA | 03-31 14:20 | 03-31 14:40 | 365.75 | 364.17 | 38 | 13898.5 | -60.04 | -0.43% | 0.36R | 20m | market | early-reversal | trend | trend | neutral | 67.6 | ↓364.02 | 2.8915 | 1.08 | **LOSS** |
| 113 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.72 | 119.61 | 115 | 13882.8 | -127.65 | -0.92% | 0.48R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 114 | TSLA | 04-14 14:25 | 04-14 15:05 | 363.01 | 361.03 | 38 | 13794.38 | -75.24 | -0.55% | 0.35R | 40m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |
| 115 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 116 | INTC | 04-15 14:35 | 04-15 15:30 | 65.26 | 65.07 | 217 | 14161.42 | -41.23 | -0.29% | 0.15R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 117 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.64 | 154.79 | 90 | 13917.6 | +13.5 | +0.1% | 0.05R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 118 | GS | 04-23 14:20 | 04-23 15:35 | 941.87 | 941.09 | 14 | 13186.18 | -10.92 | -0.08% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 72.79 | ↑938.59 | 1.646 | 1.07 | **LOSS** |

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

- ⚠️ **Profit factor 1.08 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:01:19.824Z*
