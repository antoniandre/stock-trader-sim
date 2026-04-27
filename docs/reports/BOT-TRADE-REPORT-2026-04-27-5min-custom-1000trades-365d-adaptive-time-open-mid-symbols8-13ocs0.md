# Bot Trade Report — 190 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:58:57.454Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 8 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $2875.19 (+2.88%) over 190 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 190 |
| Win rate | 43.68% (83W / 107L) |
| Net P&L | $+2875.19 (+2.88%) |
| Gross profit | $11370.27 |
| Gross loss | $8495.08 |
| Profit factor | 1.34 |
| Avg win | $136.99 |
| Avg loss | $79.39 |
| Payoff ratio | 1.73:1 |
| Expectancy | $+15.13 / trade |
| Max drawdown | 1.42% |
| Sharpe ratio (ann.) | 2.21 |
| Trades / active day | 1.51 |
| Avg confidence | 99.59% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.84R |
| Starting equity | $100,000 |
| Ending equity | $102,875.19 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 64 | 39.06% | $+546.12 | $8.53 |
| Mid  10:30–11:30 | 126 | 46.03% | $+2329.07 | $18.48 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 34 | 14 | 41.18% | $+920.57 | $+27.08 | 1.52 | eligible |
| ABNB | 19 | 10 | 52.63% | $+745.77 | $+39.25 | 2.32 | eligible |
| SBUX | 22 | 12 | 54.55% | $+620.06 | $+28.18 | 1.88 | eligible |
| NVDA | 33 | 15 | 45.45% | $+463.19 | $+14.04 | 1.32 | eligible |
| NET | 27 | 12 | 44.44% | $+227.81 | $+8.44 | 1.17 | eligible |
| ORCL | 20 | 7 | 35% | $+61.22 | $+3.06 | 1.05 | throttle |
| UNH | 15 | 5 | 33.33% | $-13.87 | $-0.92 | 0.98 | throttle |
| GS | 20 | 8 | 40% | $-149.56 | $-7.48 | 0.81 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 68 | 27 | 39.71% | $+1022.73 | $+15.04 |
| trend | 122 | 56 | 45.9% | $+1852.46 | $+15.18 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 176 | 77 | 43.75% | $+2672.71 | $+15.19 |
| noisyHighBeta | 14 | 6 | 42.86% | $+202.48 | $+14.46 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABNB | 12 | 2.74 | $+36.15 | 7 | 1.99 | $+44.56 | 0.14% | 1.58 | promote |
| Symbol | SBUX | 16 | 1.94 | $+27.84 | 6 | 1.75 | $+29.1 | 0.17% | 1.4 | promote |
| Behavior | noisyHighBeta | 7 | 2.48 | $+18.28 | 7 | 1.41 | $+10.65 | 0.13% | 1.1 | promote |
| Time slot | Mid 10:30-11:30 | 60 | 1.59 | $+22.76 | 66 | 1.33 | $+14.6 | 0.87% | 1.04 | watch |
| Setup | trend | 80 | 1.57 | $+19.36 | 42 | 1.18 | $+7.24 | 0.7% | 0.9 | watch |
| Symbol | INTC | 23 | 1.79 | $+36.63 | 11 | 1.11 | $+7.11 | 0.29% | 0.94 | watch |
| Behavior | neutral | 107 | 1.53 | $+23.33 | 69 | 1.05 | $+2.56 | 1.41% | 0.82 | watch |
| Setup | breakout | 34 | 1.51 | $+31.63 | 34 | 0.97 | $-1.55 | 0.91% | 0.77 | watch |
| Symbol | ORCL | 9 | 1.66 | $+41.57 | 11 | 0.54 | $-28.44 | 0.49% | 0.4 | watch |
| Symbol | GS | 8 | 2.06 | $+25.62 | 12 | 0.39 | $-29.54 | 0.4% | 0.27 | watch |
| Symbol | NET | 19 | 1.65 | $+26.45 | 8 | 0.52 | $-34.33 | 0.51% | 0.43 | watch |
| Time slot | Open 9:30-10:30 | 54 | 1.5 | $+23.31 | 10 | 0.05 | $-71.24 | 0.71% | 0.03 | watch |
| Symbol | NVDA | 18 | 1.01 | $+0.36 | 15 | 2.05 | $+30.44 | 0.19% | 1.52 | reject |
| Symbol | UNH | 9 | 0.62 | $-20.66 | 6 | 1.99 | $+28.68 | 0.11% | 1.42 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2390.15 | 1.27 |
| +3 bps/side | $+1420.23 | 1.15 |
| +5 bps/side | $+450.35 | 1.05 |
| +10 bps/side | $-1974.55 | 0.83 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 74 |
| timeout | 59 |
| stagnation | 19 |
| trim-profit-target | 10 |
| profit-target | 8 |
| breakeven-stop | 8 |
| stop-loss | 7 |
| trailing-stop | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.03 | 106.62 | 132 | 13995.96 | +77.88 | +0.56% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.17 | 123.11 | 112 | 13907.04 | -118.72 | -0.85% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 4 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.79 | 114.16 | 122 | 14004.38 | -76.86 | -0.55% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 5 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.37 | 682 | 13987.82 | -95.48 | -0.68% | 0.62R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 6 | SBUX | 05-02 14:25 | 05-02 14:50 | 83.91 | 83.6 | 166 | 13929.06 | -51.46 | -0.37% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 7 | UNH | 05-05 14:00 | 05-05 15:45 | 403.98 | 406.43 | 34 | 13735.32 | +83.3 | +0.61% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 8 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.83 | 126.3 | 110 | 13951.3 | -58.3 | -0.42% | 0.27R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 9 | GS | 05-08 15:20 | 05-08 17:10 | 565.92 | 570.89 | 24 | 13582.08 | +119.28 | +0.88% | 1.26R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 10 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.55 | 650 | 13975 | +32.5 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 11 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 12 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.36 | 136.81 | 51 | 13942.08 | +73.95 | +1.07% | 1.53R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 13 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.36 | 137.22 | 52 | 13942.08 | +96.72 | +1.37% | 1.96R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 14 | NET | 05-21 15:10 | 05-21 16:55 | 158.32 | 159.41 | 88 | 13932.16 | +95.92 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 15 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.8 | 132.74 | 104 | 13915.2 | -110.24 | -0.79% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 16 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 17 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 18 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 105 | 13875.75 | +121.8 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 19 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 80 | 13986.4 | +356.8 | +2.55% | 2.63R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 20 | NET | 06-05 15:10 | 06-05 15:35 | 180.54 | 179.3 | 77 | 13901.58 | -95.48 | -0.69% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 21 | INTC | 06-09 14:05 | 06-09 14:55 | 20.84 | 20.79 | 672 | 14004.48 | -33.6 | -0.24% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 72 | ↑20.61 | 0.1507 | 1.72 | **LOSS** |
| 22 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 23 | UNH | 06-11 14:15 | 06-11 15:05 | 308.8 | 307.78 | 45 | 13896 | -45.9 | -0.33% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 72.91 | ↓306.28 | 1.403 | 1.5 | **LOSS** |
| 24 | NVDA | 06-12 14:40 | 06-12 15:20 | 144.82 | 144.39 | 96 | 13902.72 | -41.28 | -0.3% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 25 | ORCL | 06-13 14:05 | 06-13 15:50 | 207.06 | 212.71 | 67 | 13873.02 | +378.55 | +2.73% | 1.82R | 105m | market | timeout | breakout | breakout | neutral | 87.64 | ↑204.47 | 1.4876 | 1.16 | **WIN** |
| 26 | NET | 06-23 14:25 | 06-23 14:45 | 181.79 | 180.66 | 77 | 13997.83 | -87.01 | -0.62% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 27 | INTC | 06-24 14:00 | 06-24 15:10 | 21.89 | 22.47 | 639 | 13987.71 | +370.62 | +2.65% | 2.76R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 28 | ORCL | 06-24 15:05 | 06-24 16:05 | 214.47 | 213.62 | 65 | 13940.55 | -55.25 | -0.4% | 0.51R | 60m | market | early-reversal | trend | trend | neutral | 71.45 | ↑212 | 1.9699 | 1.21 | **LOSS** |
| 29 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 73 | 13927.67 | -65.7 | -0.47% | 0.64R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 30 | NVDA | 06-25 14:15 | 06-25 15:05 | 152.01 | 151.73 | 91 | 13832.91 | -25.48 | -0.18% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 31 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.82 | 132.16 | 107 | 13997.74 | +143.38 | +1.02% | 1.26R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 32 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 602 | 14056.7 | -174.58 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 33 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.23 | 95.16 | 150 | 13984.5 | +289.5 | +2.07% | 2.76R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 34 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.12 | 618 | 14016.24 | +271.92 | +1.94% | 2.31R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 35 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 74 | 13994.88 | +176.86 | +1.26% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 36 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.03 | 95.09 | 147 | 13969.41 | +8.82 | +0.06% | 0.09R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 37 | INTC | 07-08 15:00 | 07-08 15:20 | 23.41 | 23.24 | 601 | 14069.41 | -102.17 | -0.73% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 38 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.07 | 138.77 | 101 | 13945.07 | +70.7 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 39 | NET | 07-21 13:55 | 07-21 14:20 | 199.9 | 197.65 | 70 | 13993 | -157.5 | -1.13% | 1.01R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 40 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.38 | 89.36 | 86 | 7686.68 | -1.72 | -0.02% | 0.02R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **LOSS** |
| 41 | UNH | 08-05 15:20 | 08-05 15:40 | 247.67 | 245.5 | 52 | 12878.84 | -112.84 | -0.88% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 42 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.04 | 91.73 | 152 | 13990.08 | -47.12 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 43 | UNH | 08-12 13:35 | 08-12 15:20 | 256.25 | 260.28 | 54 | 13837.5 | +217.62 | +1.57% | 2.24R | 105m | market | timeout | trend | breakout | neutral | 63.77 | ↑255.09 | 0.0349 | 1.15 | **WIN** |
| 44 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 654 | 14041.38 | -65.4 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 45 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 644 | 14032.76 | +296.24 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 46 | NET | 08-15 14:15 | 08-15 15:45 | 198.84 | 200.89 | 35 | 13918.8 | +71.75 | +1.03% | 1.17R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 47 | NET | 08-15 14:15 | 08-15 16:00 | 198.84 | 200.83 | 35 | 13918.8 | +69.65 | +1% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 48 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.81 | 127.26 | 109 | 13931.29 | -59.95 | -0.43% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 49 | UNH | 08-21 14:45 | 08-21 15:50 | 305.05 | 304.77 | 25 | 7626.25 | -7 | -0.09% | 0.09R | 65m | market | stagnation | trend | trend | noisyHighBeta | 73.74 | ↑301.63 | 1.4825 | 1.32 | **LOSS** |
| 50 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.49 | 177.9 | 79 | 13942.71 | +111.39 | +0.8% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 51 | GS | 08-22 14:10 | 08-22 15:55 | 734.26 | 742.22 | 19 | 13950.94 | +151.24 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 52 | ORCL | 08-22 14:40 | 08-22 15:25 | 237.44 | 236.67 | 59 | 14008.96 | -45.43 | -0.32% | 0.27R | 45m | market | early-reversal | trend | trend | neutral | 69.38 | ↑234.55 | 0.7442 | 1.06 | **LOSS** |
| 53 | ORCL | 08-25 15:25 | 08-25 16:20 | 238.47 | 238.3 | 58 | 13831.26 | -9.86 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 73.04 | ↑236.78 | 0.4119 | 1.96 | **LOSS** |
| 54 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.7 | 87.9 | 159 | 13944.3 | +31.8 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 55 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.25 | 584 | 14086.08 | +75.92 | +0.54% | 0.68R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 56 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.15 | 125.1 | 112 | 14016.8 | -5.6 | -0.04% | 0.05R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 57 | GS | 09-09 14:35 | 09-09 16:20 | 753.38 | 755.19 | 18 | 13560.84 | +32.58 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 58 | GS | 09-10 14:00 | 09-10 14:35 | 771.21 | 767.95 | 18 | 13881.78 | -58.68 | -0.42% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 59 | NET | 09-11 14:15 | 09-11 15:25 | 226.47 | 229 | 30 | 13814.67 | +75.9 | +1.12% | 1R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 60 | NET | 09-11 14:15 | 09-11 16:00 | 226.47 | 229.66 | 31 | 13814.67 | +98.89 | +1.41% | 1.26R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 61 | UNH | 09-12 14:00 | 09-12 14:20 | 361.7 | 359.42 | 38 | 13744.6 | -86.64 | -0.63% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 77.47 | ↑357.84 | 1.3657 | 1.15 | **LOSS** |
| 62 | NET | 09-15 13:40 | 09-15 15:25 | 224.29 | 227.1 | 62 | 13905.98 | +174.22 | +1.25% | 1.6R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 63 | GS | 09-15 14:40 | 09-15 15:45 | 789.8 | 782.9 | 17 | 13426.6 | -117.3 | -0.87% | 1.24R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 64 | INTC | 09-16 14:10 | 09-16 15:00 | 25.21 | 25.12 | 559 | 14092.39 | -50.31 | -0.36% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 65 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.65 | 84.36 | 165 | 13967.25 | -47.85 | -0.34% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 66 | INTC | 09-22 13:40 | 09-22 14:00 | 30.1 | 29.51 | 468 | 14086.8 | -276.12 | -1.96% | 1.7R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 67 | ORCL | 09-22 14:35 | 09-22 16:20 | 317.44 | 322.48 | 44 | 13967.36 | +221.76 | +1.59% | 0.9R | 105m | market | timeout | breakout | trend | neutral | 76.89 | ↑311.38 | 2.4313 | 1.1 | **WIN** |
| 68 | UNH | 09-23 14:20 | 09-23 14:40 | 349.35 | 347.23 | 40 | 13974 | -84.8 | -0.61% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 79.73 | ↓346.79 | 1.9194 | 1.23 | **LOSS** |
| 69 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.36 | 179.46 | 79 | 13932.44 | +244.9 | +1.76% | 1.64R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 70 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.81 | 186.54 | 75 | 13860.75 | +129.75 | +0.94% | 0.74R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 71 | SBUX | 10-02 14:20 | 10-02 15:10 | 86.8 | 86.37 | 161 | 13974.8 | -69.23 | -0.5% | 0.43R | 50m | market | early-reversal | trend | trend | neutral | 79.02 | ↓86.08 | 0.5608 | 1.68 | **LOSS** |
| 72 | INTC | 10-02 15:15 | 10-02 16:50 | 36.51 | 37 | 105 | 7703.61 | +51.45 | +1.34% | 1.13R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 73 | INTC | 10-02 15:15 | 10-02 17:00 | 36.51 | 37.01 | 106 | 7703.61 | +53 | +1.37% | 1.15R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 74 | UNH | 10-07 15:00 | 10-07 15:20 | 363.31 | 361.78 | 38 | 13805.78 | -58.14 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑360.44 | 0.5464 | 1.97 | **LOSS** |
| 75 | ORCL | 10-08 14:00 | 10-08 14:20 | 289.59 | 287.24 | 48 | 13900.32 | -112.8 | -0.81% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 76 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.95 | 194.05 | 72 | 14036.4 | -64.8 | -0.46% | 0.62R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 77 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.98 | 188.04 | 73 | 13868.54 | -141.62 | -1.02% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 78 | SBUX | 10-13 15:20 | 10-13 17:05 | 79.65 | 80.32 | 175 | 13938.75 | +117.25 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑78.95 | 0.1677 | 1.42 | **WIN** |
| 79 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.71 | 122.24 | 58 | 14002.36 | +88.74 | +1.27% | 1.61R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 80 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.71 | 123.33 | 58 | 14002.36 | +151.96 | +2.17% | 2.75R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 81 | SBUX | 10-15 14:00 | 10-15 15:25 | 82.71 | 82.73 | 169 | 13977.99 | +3.38 | +0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 77.12 | ↑82.22 | 0.2984 | 1.07 | **WIN** |
| 82 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 204 | 7727.52 | -77.52 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 83 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.49 | 182.08 | 76 | 13945.24 | -107.16 | -0.77% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 84 | SBUX | 10-17 15:00 | 10-17 16:45 | 85.18 | 85.6 | 164 | 13969.52 | +68.88 | +0.49% | 0.64R | 105m | market | timeout | trend | trend | neutral | 59.03 | ↑84.66 | 0.1425 | 1.41 | **WIN** |
| 85 | NVDA | 10-20 14:25 | 10-20 14:45 | 185.01 | 183.87 | 75 | 13875.75 | -85.5 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 86 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.86 | 128.38 | 109 | 14045.74 | -52.32 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 87 | SBUX | 10-27 14:00 | 10-27 14:20 | 87.37 | 87.03 | 160 | 13979.2 | -54.4 | -0.39% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 74.79 | ↑86.66 | 0.1516 | 1.16 | **LOSS** |
| 88 | INTC | 10-28 15:15 | 10-28 16:55 | 41.55 | 42.13 | 93 | 7728.3 | +53.94 | +1.4% | 0.92R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 89 | INTC | 10-28 15:15 | 10-28 17:00 | 41.55 | 42.15 | 93 | 7728.3 | +55.8 | +1.44% | 0.95R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 90 | NET | 10-30 14:00 | 10-30 14:30 | 229.48 | 228.27 | 61 | 13998.28 | -73.81 | -0.53% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 91 | NET | 10-30 15:20 | 10-30 15:40 | 231.04 | 229.83 | 60 | 13862.4 | -72.6 | -0.52% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 92 | ORCL | 10-31 15:05 | 10-31 15:25 | 265.34 | 262.22 | 52 | 13797.68 | -162.24 | -1.18% | 1.13R | 20m | market | stop-loss | trend | trend | neutral | 72.41 | ↑261.99 | 1.4291 | 1.3 | **LOSS** |
| 93 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.54 | 207.29 | 67 | 13972.18 | -83.75 | -0.6% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 94 | NET | 11-03 14:35 | 11-03 15:15 | 255.73 | 253.85 | 54 | 13809.42 | -101.52 | -0.74% | 0.45R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 95 | GS | 11-04 15:05 | 11-04 16:10 | 795.57 | 795.74 | 17 | 13524.69 | +2.89 | +0.02% | 0.02R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 96 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.82 | 79.28 | 175 | 13968.5 | -94.5 | -0.68% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 97 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.44 | 84.7 | 154 | 12849.76 | +194.04 | +1.51% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 98 | INTC | 11-07 15:05 | 11-07 15:25 | 37.97 | 37.63 | 370 | 14048.9 | -125.8 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 99 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.42 | 86.68 | 164 | 14008.88 | +206.64 | +1.48% | 2.11R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 100 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.21 | 122.77 | 115 | 14054.15 | +64.4 | +0.46% | 0.51R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 101 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.94 | 122.3 | 114 | 14015.16 | -72.96 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 102 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.15 | 189.89 | 75 | 13961.25 | +280.5 | +2.01% | 1.26R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 103 | ORCL | 11-14 15:05 | 11-14 16:25 | 218.33 | 223.69 | 64 | 13973.12 | +343.04 | +2.45% | 1.23R | 80m | market | profit-target | breakout | breakout | neutral | 51.85 | ↑214.55 | -0.1836 | 1.14 | **WIN** |
| 104 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.59 | 85.92 | 162 | 14027.58 | -108.54 | -0.77% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 105 | INTC | 11-19 14:45 | 11-19 15:55 | 34.91 | 35.05 | 402 | 14033.82 | +56.28 | +0.4% | 0.37R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 106 | ORCL | 11-19 15:00 | 11-19 15:40 | 228.11 | 224.83 | 56 | 12774.16 | -183.68 | -1.44% | 0.77R | 40m | market | early-reversal | breakout | breakout | neutral | 68.66 | ↓223.69 | 0.7165 | 1.8 | **LOSS** |
| 107 | NET | 11-24 14:30 | 11-24 16:05 | 190.09 | 192.4 | 36 | 13876.57 | +83.16 | +1.22% | 1.17R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 108 | NET | 11-24 14:30 | 11-24 16:15 | 190.09 | 192.12 | 37 | 13876.57 | +75.11 | +1.07% | 1.03R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 109 | UNH | 11-25 14:35 | 11-25 15:00 | 327.04 | 324.86 | 42 | 13735.68 | -91.56 | -0.67% | 0.76R | 25m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↓324.84 | 0.2322 | 1.38 | **LOSS** |
| 110 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.94 | 117.29 | 120 | 14032.8 | +42 | +0.3% | 0.29R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 111 | NET | 12-02 14:35 | 12-02 15:55 | 203.23 | 203.18 | 69 | 14022.87 | -3.45 | -0.02% | 0.02R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **LOSS** |
| 112 | INTC | 12-02 14:45 | 12-02 15:25 | 41.14 | 42.26 | 341 | 14028.74 | +381.92 | +2.72% | 2.06R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 113 | GS | 12-03 15:00 | 12-03 16:45 | 824.1 | 829.51 | 17 | 14009.7 | +91.97 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 114 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.35 | 180.66 | 76 | 13858.6 | -128.44 | -0.93% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 115 | ORCL | 12-04 15:20 | 12-04 17:05 | 210.31 | 212.38 | 66 | 13880.46 | +136.62 | +0.98% | 0.57R | 105m | market | timeout | trend | trend | neutral | 58.55 | ↑208.95 | 0.5634 | 1.04 | **WIN** |
| 116 | GS | 12-04 15:20 | 12-04 15:45 | 843.81 | 838.44 | 16 | 13500.96 | -85.92 | -0.64% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 117 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.67 | 353 | 14105.88 | -102.37 | -0.73% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 118 | UNH | 12-12 14:45 | 12-12 15:05 | 344.28 | 342.79 | 40 | 13771.2 | -59.6 | -0.43% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↑341.93 | 0.9959 | 1.99 | **LOSS** |
| 119 | GS | 12-17 14:30 | 12-17 15:20 | 889.97 | 889.37 | 14 | 12459.58 | -8.4 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 120 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.63 | 135.74 | 102 | 13936.26 | -90.78 | -0.65% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 121 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 122 | INTC | 12-19 14:35 | 12-19 15:35 | 37.09 | 37.06 | 380 | 14094.2 | -11.4 | -0.08% | 0.08R | 60m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 123 | GS | 12-19 15:10 | 12-19 15:40 | 895.46 | 892.62 | 15 | 13431.9 | -42.6 | -0.32% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 124 | ORCL | 12-24 15:00 | 12-24 15:40 | 197.71 | 196.77 | 71 | 14037.41 | -66.74 | -0.48% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↓196.66 | 0.6538 | 1.65 | **LOSS** |
| 125 | ORCL | 12-30 14:30 | 12-30 15:20 | 197.51 | 196.71 | 71 | 14023.21 | -56.8 | -0.41% | 0.59R | 50m | market | stagnation | trend | trend | neutral | 75.78 | ↓197.12 | 0.3771 | 2.92 | **LOSS** |
| 126 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.23 | 189.89 | 73 | 13959.79 | -97.82 | -0.7% | 0.91R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 127 | ORCL | 01-05 14:35 | 01-05 14:45 | 201.15 | 196.41 | 69 | 13879.35 | -327.06 | -2.36% | 3.37R | 10m | market | stop-loss | trend | trend | neutral | 70.98 | ↓200.07 | 1.1997 | 5.63 | **LOSS** |
| 128 | ABNB | 01-05 14:45 | 01-05 16:30 | 135.01 | 136.8 | 104 | 14041.04 | +186.16 | +1.33% | 1.9R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 129 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.39 | 86.01 | 82 | 14003.96 | +50.84 | +0.73% | 0.92R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 130 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.39 | 86.43 | 82 | 14003.96 | +85.28 | +1.22% | 1.54R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 131 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.7 | 89.01 | 160 | 14032 | +209.6 | +1.49% | 2.04R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 132 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.8 | 89.21 | 157 | 14098.6 | -92.63 | -0.66% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 133 | NET | 01-13 14:40 | 01-13 15:00 | 188.73 | 187.83 | 74 | 13966.02 | -66.6 | -0.48% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 134 | INTC | 01-13 15:15 | 01-13 15:40 | 47.27 | 46.69 | 164 | 7752.28 | -95.12 | -1.23% | 0.62R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 135 | GS | 01-15 15:05 | 01-15 16:50 | 957.97 | 968.87 | 14 | 13411.58 | +152.6 | +1.14% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 136 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.32 | 189.09 | 73 | 13893.36 | -89.79 | -0.65% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 137 | UNH | 01-21 14:30 | 01-21 16:15 | 342.77 | 346.48 | 40 | 13710.8 | +148.4 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 84.76 | ↑341.51 | 0.5588 | 1.35 | **WIN** |
| 138 | GS | 01-21 15:05 | 01-21 16:50 | 958.11 | 960.3 | 14 | 13413.54 | +30.66 | +0.23% | 0.31R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 139 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.58 | 135.77 | 103 | 14067.74 | -83.43 | -0.59% | 0.78R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 140 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 80 | 14006.4 | +80 | +0.57% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 141 | GS | 01-26 14:40 | 01-26 15:00 | 933.3 | 929.72 | 15 | 13999.5 | -53.7 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 142 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.13 | 189.57 | 73 | 13806.49 | +32.12 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 143 | ORCL | 01-28 14:35 | 01-28 15:00 | 176.18 | 178.08 | 79 | 13918.22 | +150.1 | +1.08% | 1.54R | 25m | market | trailing-stop | trend | trend | neutral | 79.75 | ↓175.51 | 0.2987 | 2.75 | **WIN** |
| 144 | INTC | 01-30 15:15 | 01-30 16:05 | 48.72 | 48.51 | 159 | 7746.48 | -33.39 | -0.43% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 145 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 146 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 147 | SBUX | 02-03 14:40 | 02-03 16:25 | 93.02 | 93.42 | 151 | 14046.02 | +60.4 | +0.43% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 148 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.4 | 181.94 | 39 | 13915.2 | +138.06 | +1.98% | 1.14R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 149 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.4 | 183.49 | 39 | 13915.2 | +198.51 | +2.85% | 1.64R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 150 | UNH | 02-06 14:45 | 02-06 16:30 | 271 | 273.87 | 51 | 13821 | +146.37 | +1.06% | 1.06R | 105m | market | timeout | trend | trend | neutral | 67.37 | ↑270.95 | 0.7697 | 1.19 | **WIN** |
| 151 | GS | 02-09 15:15 | 02-09 17:00 | 940.19 | 943.34 | 14 | 13162.66 | +44.1 | +0.34% | 0.4R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 152 | GS | 02-10 14:45 | 02-10 15:10 | 958.47 | 955.05 | 14 | 13418.58 | -47.88 | -0.36% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 71.91 | ↓953.51 | 1.4363 | 2.25 | **LOSS** |
| 153 | ORCL | 02-10 15:05 | 02-10 16:15 | 161.82 | 162.61 | 43 | 6958.26 | +33.97 | +0.49% | 0.26R | 70m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.49 | ↑159.99 | 0.9166 | 2.92 | **WIN** |
| 154 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 155 | INTC | 02-24 14:35 | 02-24 16:05 | 44.02 | 45.83 | 294 | 12941.88 | +532.14 | +4.11% | 2.32R | 90m | market | profit-target | breakout | breakout | neutral | 62.02 | ↑44.07 | 0.1741 | 1.36 | **WIN** |
| 156 | GS | 02-24 14:40 | 02-24 14:50 | 906.55 | 894.79 | 15 | 13598.25 | -176.4 | -1.3% | 1.55R | 10m | market | stop-loss | breakout | breakout | neutral | 79.74 | ↓896.16 | 2.0987 | 1.63 | **LOSS** |
| 157 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.12 | 191.87 | 73 | 14024.76 | -18.25 | -0.13% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 158 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.44 | 130.16 | 110 | 14018.4 | +299.2 | +2.13% | 2.92R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 159 | UNH | 02-25 14:35 | 02-25 16:20 | 279.38 | 280.39 | 50 | 13969 | +50.5 | +0.36% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | 86.81 | ↓278.58 | 0.5161 | 1.63 | **WIN** |
| 160 | ORCL | 02-25 14:50 | 02-25 15:45 | 151.15 | 150.79 | 92 | 13905.8 | -33.12 | -0.24% | 0.15R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑149.04 | 1.1014 | 1.81 | **LOSS** |
| 161 | INTC | 02-27 15:00 | 02-27 15:20 | 45.96 | 45.45 | 308 | 14155.68 | -157.08 | -1.11% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 162 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.29 | 180.91 | 77 | 14036.33 | -106.26 | -0.76% | 0.93R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 163 | INTC | 03-04 14:45 | 03-04 16:30 | 43.93 | 44.68 | 321 | 14101.53 | +240.75 | +1.71% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 60.5 | ↑43.8 | 0.0616 | 1.83 | **WIN** |
| 164 | ABNB | 03-04 14:50 | 03-04 16:35 | 136.03 | 137.4 | 103 | 14011.09 | +141.11 | +1.01% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 165 | NET | 03-04 15:10 | 03-04 15:35 | 185.6 | 184.46 | 75 | 13920 | -85.5 | -0.61% | 0.42R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 166 | INTC | 03-05 15:00 | 03-05 15:30 | 46.25 | 45.6 | 306 | 14152.5 | -198.9 | -1.41% | 0.85R | 30m | market | early-reversal | breakout | breakout | neutral | 59.57 | ↓45.74 | 0.0158 | 1.47 | **LOSS** |
| 167 | NET | 03-09 15:25 | 03-09 16:20 | 202.08 | 201.86 | 69 | 13943.52 | -15.18 | -0.11% | 0.1R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 168 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.53 | 185.21 | 76 | 14024.28 | +51.68 | +0.37% | 0.4R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 169 | INTC | 03-10 14:55 | 03-10 16:25 | 47.33 | 47.3 | 164 | 7762.12 | -4.92 | -0.06% | 0.04R | 90m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.19 | ↑46.7 | 0.5282 | 1.15 | **LOSS** |
| 170 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.74 | 127.56 | 110 | 14051.4 | -19.8 | -0.14% | 0.2R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 171 | UNH | 03-16 14:00 | 03-16 14:30 | 286.12 | 284.71 | 48 | 13733.76 | -67.68 | -0.49% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.12 | ↑283.61 | 0.9389 | 1.06 | **LOSS** |
| 172 | ORCL | 03-19 13:45 | 03-19 14:20 | 154.6 | 153.44 | 90 | 13914 | -104.4 | -0.75% | 0.56R | 35m | market | early-reversal | trend | breakout | neutral | 56.07 | ↓152.41 | -0.3495 | 1.58 | **LOSS** |
| 173 | NET | 03-20 14:30 | 03-20 14:50 | 224.96 | 221.86 | 62 | 13947.52 | -192.2 | -1.38% | 0.9R | 20m | market | stop-loss | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 174 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 78 | 13894.14 | -62.4 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 175 | GS | 03-23 15:00 | 03-23 15:25 | 848 | 845.14 | 16 | 13568 | -45.76 | -0.34% | 0.45R | 25m | market | early-reversal | trend | trend | neutral | 70.46 | ↑839.76 | 8.9736 | 1.01 | **LOSS** |
| 176 | UNH | 03-24 15:15 | 03-24 15:35 | 273.27 | 272.37 | 51 | 13936.77 | -45.9 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.36 | ↑271.06 | 0.6058 | 2.47 | **LOSS** |
| 177 | SBUX | 03-25 14:00 | 03-25 14:20 | 93.25 | 92.33 | 151 | 14080.75 | -138.92 | -0.99% | 1.24R | 20m | market | early-reversal | trend | trend | neutral | 69.11 | ↓92.72 | 0.1502 | 1.49 | **LOSS** |
| 178 | NVDA | 03-25 14:20 | 03-25 15:10 | 179.95 | 179.83 | 77 | 13856.15 | -9.24 | -0.07% | 0.07R | 50m | market | breakeven-stop | trend | trend | neutral | 66.03 | ↑178.95 | 1.0192 | 2.13 | **LOSS** |
| 179 | INTC | 03-25 14:40 | 03-25 15:15 | 47.44 | 47.17 | 163 | 7732.72 | -44.01 | -0.57% | 0.29R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 180 | ORCL | 04-02 14:35 | 04-02 15:25 | 145.54 | 145.41 | 96 | 13971.84 | -12.48 | -0.09% | 0.06R | 50m | market | stagnation | breakout | breakout | neutral | 73.35 | ↑142.46 | -0.4545 | 1.68 | **LOSS** |
| 181 | NET | 04-02 15:05 | 04-02 16:15 | 209.46 | 209.4 | 36 | 7540.56 | -2.16 | -0.03% | 0.02R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.84 | ↑206.21 | 0.9751 | 1.18 | **LOSS** |
| 182 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.53 | 182.88 | 76 | 13948.28 | -49.4 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 183 | ORCL | 04-10 15:10 | 04-10 15:30 | 139.41 | 138.68 | 100 | 13941 | -73 | -0.52% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 89.64 | ↑136.7 | 0.3536 | 2.47 | **LOSS** |
| 184 | INTC | 04-15 14:35 | 04-15 15:30 | 65.28 | 65.06 | 216 | 14100.48 | -47.52 | -0.34% | 0.17R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 185 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.99 | 141.76 | 98 | 14013.02 | -120.54 | -0.86% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |
| 186 | ORCL | 04-21 14:10 | 04-21 15:00 | 181.25 | 181.77 | 77 | 13956.25 | +40.04 | +0.29% | 0.22R | 50m | market | trailing-stop | trend | trend | neutral | 71.31 | ↑179.07 | 1.007 | 1.48 | **WIN** |
| 187 | NET | 04-22 13:40 | 04-22 13:55 | 211.25 | 208.02 | 66 | 13942.5 | -213.18 | -1.53% | 1.43R | 15m | market | stop-loss | breakout | breakout | neutral | 66.61 | ↓209.29 | 0.1508 | 1.16 | **LOSS** |
| 188 | GS | 04-23 14:20 | 04-23 15:35 | 942.06 | 940.9 | 14 | 13188.84 | -16.24 | -0.12% | 0.17R | 75m | market | stagnation | trend | trend | neutral | 72.79 | ↑938.59 | 1.646 | 1.07 | **LOSS** |
| 189 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.81 | 208.76 | 34 | 13927.08 | +134.3 | +1.93% | 1.39R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 190 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.81 | 209.65 | 34 | 13927.08 | +164.56 | +2.36% | 1.7R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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

- ⚠️ **Profit factor 1.34 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.84R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:58:57.454Z*
