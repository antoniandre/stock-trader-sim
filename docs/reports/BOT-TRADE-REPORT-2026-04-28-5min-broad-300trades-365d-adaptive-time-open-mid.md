# Bot Trade Report — 51 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T05:58:20.863Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $509.02 (-0.51%) over 51 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 51 |
| Win rate | 31.37% (16W / 35L) |
| Net P&L | $-509.02 (-0.51%) |
| Gross profit | $2629.05 |
| Gross loss | $3138.07 |
| Profit factor | 0.84 |
| Avg win | $164.32 |
| Avg loss | $89.66 |
| Payoff ratio | 1.83:1 |
| Expectancy | $-9.98 / trade |
| Max drawdown | 1.13% |
| Sharpe ratio (ann.) | -1.17 |
| Trades / active day | 1.21 |
| Avg confidence | 96.61% |
| Avg trade duration | 50 min |
| Avg planned R:R | 2.6:1 |
| Avg risk ratio | 0.93R |
| Starting equity | $100,000 |
| Ending equity | $99,490.98 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-509.02 | MISS |
| Win rate | 45-60% | 31.37% | MISS |
| Profit factor | >= 1.3 | 0.84 | MISS |
| Sharpe (ann.) | > 1.5 | -1.17 | MISS |
| R:R | 2:1 - 3:1 | 2.6:1 planned | PASS |
| Max drawdown | < 10% | 1.13% | PASS |
| Expectancy | positive | $-9.98 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 31.25% | $-116.58 | $-7.29 |
| Mid  10:30–11:30 | 35 | 31.43% | $-392.44 | $-11.21 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NOW | 1 | 1 | 100% | $+378.23 | $+378.23 | ∞ | watch |
| MU | 1 | 1 | 100% | $+350.19 | $+350.19 | ∞ | watch |
| AMD | 1 | 1 | 100% | $+319.3 | $+319.3 | ∞ | watch |
| TSLA | 1 | 1 | 100% | $+308.8 | $+308.8 | ∞ | watch |
| META | 2 | 1 | 50% | $+115.71 | $+57.86 | 16.23 | watch |
| GOOGL | 2 | 1 | 50% | $+114.87 | $+57.44 | 1.75 | watch |
| LLY | 3 | 3 | 100% | $+113.08 | $+37.69 | ∞ | watch |
| ORCL | 2 | 1 | 50% | $+96.72 | $+48.36 | 1.86 | watch |
| NVDA | 4 | 2 | 50% | $+88.21 | $+22.05 | 1.43 | watch |
| HD | 1 | 1 | 100% | $+44.28 | $+44.28 | ∞ | watch |
| ARM | 1 | 1 | 100% | $+23.52 | $+23.52 | ∞ | watch |
| SHOP | 1 | 0 | 0% | $-7.68 | $-7.68 | 0 | watch |
| BA | 1 | 0 | 0% | $-9.9 | $-9.9 | 0 | watch |
| DDOG | 1 | 0 | 0% | $-12.74 | $-12.74 | 0 | watch |
| CELH | 1 | 0 | 0% | $-14 | $-14 | 0 | watch |
| RIVN | 1 | 0 | 0% | $-29.91 | $-29.91 | 0 | watch |
| MRVL | 1 | 0 | 0% | $-38.28 | $-38.28 | 0 | watch |
| DELL | 2 | 0 | 0% | $-40.71 | $-20.35 | 0 | watch |
| LOW | 1 | 0 | 0% | $-47.5 | $-47.5 | 0 | watch |
| V | 1 | 0 | 0% | $-50.43 | $-50.43 | 0 | watch |
| SNOW | 1 | 0 | 0% | $-58.24 | $-58.24 | 0 | watch |
| NET | 1 | 0 | 0% | $-65.7 | $-65.7 | 0 | watch |
| JPM | 1 | 0 | 0% | $-65.7 | $-65.7 | 0 | watch |
| GE | 2 | 1 | 50% | $-77.9 | $-38.95 | 0.08 | watch |
| TGT | 1 | 0 | 0% | $-110.09 | $-110.09 | 0 | watch |
| XOM | 1 | 0 | 0% | $-118.44 | $-118.44 | 0 | watch |
| LRCX | 1 | 0 | 0% | $-128.76 | $-128.76 | 0 | watch |
| SMCI | 1 | 0 | 0% | $-148 | $-148 | 0 | watch |
| CVX | 1 | 0 | 0% | $-151.2 | $-151.2 | 0 | watch |
| CAT | 1 | 0 | 0% | $-163.68 | $-163.68 | 0 | watch |
| ADBE | 1 | 0 | 0% | $-209.04 | $-209.04 | 0 | watch |
| ELF | 2 | 0 | 0% | $-277.2 | $-138.6 | 0 | watch |
| PLTR | 5 | 1 | 20% | $-315.51 | $-63.1 | 0.37 | throttle |
| NFLX | 3 | 0 | 0% | $-321.32 | $-107.11 | 0 | watch |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 43 | 12 | 27.91% | $-421.78 | $-9.81 |
| momentum-pilot | 4 | 2 | 50% | $+6.88 | $+1.72 |
| trend | 4 | 2 | 50% | $-94.12 | $-23.53 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 49 | 16 | 32.65% | $-116.44 | $-2.38 |
| breakout | 2 | 0 | 0% | $-392.58 | $-196.29 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 2 | 2 | 100% | $+112.12 | $+56.06 |
| neutral | 49 | 14 | 28.57% | $-621.14 | $-12.68 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| good-trend-continuation | 2 | 2 | 100% | $+112.12 | $+56.06 |
| neutral | 49 | 14 | 28.57% | $-621.14 | $-12.68 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 13 | 0.45 | $-22.63 | 3 | 2.35 | $+59.21 | 0.13% | 1.88 | reject |
| Regime | trend | 29 | 0.58 | $-21.77 | 20 | 1.42 | $+25.74 | 0.68% | 1.18 | reject |
| Behavior | neutral | 28 | 0.46 | $-32.01 | 21 | 1.19 | $+13.1 | 0.92% | 1 | reject |
| Trade state | neutral | 28 | 0.46 | $-32.01 | 21 | 1.19 | $+13.1 | 0.92% | 1 | reject |
| Setup | breakout | 23 | 0.54 | $-28.37 | 20 | 1.16 | $+11.54 | 0.92% | 0.98 | reject |
| Time slot | Mid 10:30-11:30 | 17 | 0.56 | $-28.82 | 18 | 1.07 | $+5.42 | 0.92% | 0.91 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-635.58 | 0.8 |
| +3 bps/side | $-888.7 | 0.74 |
| +5 bps/side | $-1141.82 | 0.68 |
| +10 bps/side | $-1774.6 | 0.56 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 16 |
| stagnation | 10 |
| timeout | 8 |
| stop-loss | 7 |
| profit-target | 4 |
| breakeven-stop | 3 |
| trailing-stop | 2 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 2 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 19 | 12840.77 | +123.31 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 3 | CELH | 06-04 14:20 | 06-04 15:10 | 39.93 | 39.89 | 350 | 13975.5 | -14 | -0.1% | 0.07R | 50m | market | stagnation | trend | breakout | neutral | neutral | 70.46 | ↑39.65 | 0.2412 | 1.55 | **LOSS** |
| 4 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 73 | 13927.67 | -65.7 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 5 | RIVN | 06-26 13:50 | 06-26 14:40 | 14.04 | 14.01 | 997 | 13997.88 | -29.91 | -0.21% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | neutral | 66.4 | ↑13.92 | 0.0396 | 2.22 | **LOSS** |
| 6 | DELL | 07-02 14:45 | 07-02 15:35 | 123.64 | 123.49 | 113 | 13971.32 | -16.95 | -0.12% | 0.15R | 50m | market | stagnation | trend | breakout | neutral | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 7 | PLTR | 07-17 13:55 | 07-17 14:50 | 152.4 | 152.21 | 32 | 4876.8 | -6.08 | -0.12% | 0.13R | 55m | market | stagnation | trend | momentum-pilot | neutral | neutral | 64.93 | ↑151.61 | 0.4131 | 1.9 | **LOSS** |
| 8 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.58 | 215.67 | 64 | 13861.12 | -58.24 | -0.42% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 9 | NFLX | 08-20 13:35 | 08-20 13:45 | 1221.29 | 1211.66 | 4 | 4885.16 | -38.52 | -0.79% | 1.13R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 67.48 | ↓1217.57 | 2.2404 | 2.05 | **LOSS** |
| 10 | ELF | 09-23 14:10 | 09-23 14:35 | 140.09 | 138.89 | 99 | 13868.91 | -118.8 | -0.86% | 0.95R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 71.08 | ↓138.71 | 0.4203 | 2.59 | **LOSS** |
| 11 | SMCI | 09-29 14:40 | 09-29 15:10 | 47.23 | 46.73 | 296 | 13980.08 | -148 | -1.06% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | neutral | 68.64 | ↑46.6 | 0.3472 | 1.85 | **LOSS** |
| 12 | LLY | 10-03 14:15 | 10-03 15:15 | 831.97 | 838.65 | 9 | 15807.43 | +60.12 | +0.8% | 1.03R | 60m | market | trim-profit-target | trend | trend | cleanTrend | good-trend-continuation | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 13 | LLY | 10-03 14:15 | 10-03 16:00 | 831.97 | 837.17 | 10 | 15807.43 | +52 | +0.63% | 0.81R | 105m | market | timeout | trend | trend | cleanTrend | good-trend-continuation | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 14 | ORCL | 10-08 14:00 | 10-08 14:20 | 289.59 | 287.24 | 48 | 13900.32 | -112.8 | -0.81% | 0.72R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 15 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 19 | 13660.43 | -7.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 16 | GE | 10-28 13:35 | 10-28 15:20 | 314.77 | 315.25 | 15 | 4721.55 | +7.2 | +0.15% | 0.21R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 73.23 | ↓313.95 | 0.8302 | 1.53 | **WIN** |
| 17 | CAT | 11-06 14:30 | 11-06 14:50 | 580.25 | 572.81 | 22 | 12765.5 | -163.68 | -1.28% | 1.54R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 18 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 96 | 13920 | -7.68 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 19 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 75 | 13837.5 | -63 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 20 | LLY | 12-18 14:30 | 12-18 15:00 | 1061.88 | 1061.96 | 12 | 12742.56 | +0.96 | +0.01% | 0.01R | 30m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.65 | ↓1054.96 | 0.8773 | 3.45 | **WIN** |
| 21 | GE | 12-18 14:40 | 12-18 15:05 | 299.65 | 297.8 | 46 | 13783.9 | -85.1 | -0.62% | 0.71R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 77.45 | ↓298.79 | 0.9954 | 2.73 | **LOSS** |
| 22 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 23 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 62 | 12789.36 | +319.3 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 24 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 73 | 13851.02 | -9.49 | -0.07% | 0.06R | 65m | market | stagnation | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 25 | ELF | 01-05 14:30 | 01-05 15:00 | 79.73 | 78.74 | 160 | 12756.8 | -158.4 | -1.24% | 1.39R | 30m | market | stop-loss | trend | breakout | neutral | neutral | 73.71 | ↓79.45 | 0.2129 | 3.49 | **LOSS** |
| 26 | BA | 01-09 14:35 | 01-09 15:35 | 231.46 | 231.24 | 45 | 10415.7 | -9.9 | -0.1% | 0.14R | 60m | market | stagnation | trend | breakout | neutral | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 27 | ORCL | 01-09 15:25 | 01-09 17:10 | 193.71 | 196.62 | 72 | 13947.12 | +209.52 | +1.5% | 1.16R | 105m | market | timeout | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 28 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 29 | PLTR | 01-14 14:30 | 01-14 14:35 | 181.2 | 177.96 | 77 | 13952.4 | -249.48 | -1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 30 | ARM | 01-20 14:40 | 01-20 16:20 | 108.19 | 108.47 | 84 | 9087.96 | +23.52 | +0.26% | 0.24R | 100m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↓107.29 | 0.0129 | 5.86 | **WIN** |
| 31 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 27 | 10153.08 | +350.19 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 32 | PLTR | 01-23 14:40 | 01-23 16:25 | 168.03 | 170.31 | 83 | 13946.49 | +189.24 | +1.36% | 1.51R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.11 | ↑167.45 | 0.3451 | 2.78 | **WIN** |
| 33 | HD | 02-03 14:30 | 02-03 15:45 | 381.74 | 385.43 | 12 | 4580.88 | +44.28 | +0.97% | 1.39R | 75m | market | trailing-stop | trend | momentum-pilot | neutral | neutral | 68.39 | ↓380.38 | 0.6396 | 1.65 | **WIN** |
| 34 | DELL | 02-04 14:30 | 02-04 15:20 | 119.17 | 118.95 | 108 | 12870.36 | -23.76 | -0.18% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | neutral | 70.68 | ↓118.94 | 0.1636 | 3.47 | **LOSS** |
| 35 | LOW | 02-04 14:40 | 02-04 15:30 | 279.21 | 278.26 | 50 | 13960.5 | -47.5 | -0.34% | 0.45R | 50m | market | stagnation | trend | breakout | neutral | neutral | 78.29 | ↓278.01 | 0.8475 | 2.63 | **LOSS** |
| 36 | NFLX | 02-06 14:30 | 02-06 14:45 | 82.12 | 80.9 | 170 | 13960.4 | -207.4 | -1.49% | 1.82R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 71.93 | ↓81.73 | 0.0306 | 4.14 | **LOSS** |
| 37 | LRCX | 02-13 14:30 | 02-13 14:55 | 239.1 | 236.88 | 58 | 13867.8 | -128.76 | -0.93% | 0.72R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 68.03 | ↓238.55 | -0.0282 | 3.65 | **LOSS** |
| 38 | JPM | 02-17 14:45 | 02-17 15:10 | 307.63 | 306.17 | 45 | 13843.35 | -65.7 | -0.47% | 0.57R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 39 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 40 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 174 | 13926.96 | -38.28 | -0.27% | 0.2R | 50m | market | stagnation | trend | breakout | neutral | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 41 | TGT | 02-20 15:00 | 02-20 15:30 | 117.97 | 116.96 | 109 | 12858.73 | -110.09 | -0.86% | 0.8R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 72.15 | ↓116.75 | 0.2483 | 3.42 | **LOSS** |
| 42 | V | 02-25 14:30 | 02-25 14:55 | 312.08 | 310.85 | 41 | 12795.28 | -50.43 | -0.39% | 0.56R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 75.51 | ↓311.04 | 0.3432 | 2.71 | **LOSS** |
| 43 | PLTR | 02-26 14:40 | 02-26 15:15 | 136.03 | 133.68 | 102 | 13875.06 | -239.7 | -1.73% | 1.49R | 35m | market | early-reversal | breakout | breakout | neutral | neutral | 63.03 | ↓135.1 | 0.0268 | 3.62 | **LOSS** |
| 44 | ADBE | 03-03 14:30 | 03-03 14:35 | 267.37 | 263.35 | 52 | 13903.24 | -209.04 | -1.5% | 1.63R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 66.27 | ↓265.19 | 0.028 | 4.55 | **LOSS** |
| 45 | NFLX | 03-04 14:30 | 03-04 15:40 | 98.9 | 98.32 | 130 | 12857 | -75.4 | -0.59% | 0.64R | 70m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 46 | NOW | 03-05 14:30 | 03-05 15:00 | 116.86 | 120.33 | 109 | 12737.74 | +378.23 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 47 | CVX | 03-06 14:30 | 03-06 14:35 | 192.01 | 189.91 | 72 | 13824.72 | -151.2 | -1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 48 | DDOG | 03-17 13:30 | 03-17 14:05 | 129.91 | 129.78 | 98 | 12731.18 | -12.74 | -0.1% | 0.1R | 35m | market | breakeven-stop | trend | breakout | neutral | neutral | 70.93 | ↓128.94 | 0.3164 | 2.33 | **LOSS** |
| 49 | XOM | 04-02 13:30 | 04-02 13:50 | 165.1 | 163.69 | 84 | 13868.4 | -118.44 | -0.85% | 0.72R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 69.84 | ↓164.59 | 0.4226 | 1.6 | **LOSS** |
| 50 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 32 | 11875.84 | +308.8 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 51 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 67 | 13822.1 | +215.07 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ⚠️ **Profit factor 0.84 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.93R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T05:58:20.863Z*
