# Bot Trade Report — 385 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T09:34:32.662Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 9 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $2258 (+2.26%) over 385 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 385 |
| Win rate | 38.7% (149W / 236L) |
| Net P&L | $+2258 (+2.26%) |
| Gross profit | $16369.45 |
| Gross loss | $14111.45 |
| Profit factor | 1.16 |
| Avg win | $109.86 |
| Avg loss | $59.79 |
| Payoff ratio | 1.84:1 |
| Expectancy | $+5.86 / trade |
| Max drawdown | 2.69% |
| Sharpe ratio (ann.) | 1.15 |
| Trades / active day | 2.2 |
| Avg confidence | 96.01% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.78R |
| Starting equity | $100,000 |
| Ending equity | $102,258 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 165 | 38.79% | $+1437.03 | $8.71 |
| Mid  10:30–11:30 | 120 | 40.83% | $+608.37 | $5.07 |
| Noon 11:30–13:00 | 64 | 39.06% | $+139.55 | $2.18 |
| PM   13:00–14:00 | 36 | 30.56% | $+73.05 | $2.03 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 48 | 20 | 41.67% | $+821.13 | $+17.11 | 1.41 | eligible |
| MRVL | 65 | 27 | 41.54% | $+741.39 | $+11.41 | 1.29 | eligible |
| NVDA | 48 | 18 | 37.5% | $+695.6 | $+14.49 | 1.4 | throttle |
| NET | 62 | 28 | 45.16% | $+631.24 | $+10.18 | 1.26 | eligible |
| GOOGL | 35 | 14 | 40% | $+59.79 | $+1.71 | 1.05 | eligible |
| GS | 31 | 13 | 41.94% | $-16.15 | $-0.52 | 0.98 | throttle |
| HD | 21 | 7 | 33.33% | $-43.78 | $-2.08 | 0.95 | throttle |
| AMZN | 41 | 15 | 36.59% | $-164.34 | $-4.01 | 0.86 | throttle |
| META | 34 | 7 | 20.59% | $-466.88 | $-13.73 | 0.61 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 187 | 75 | 40.11% | $+1275.51 | $+6.82 |
| breakout | 198 | 74 | 37.37% | $+982.49 | $+4.96 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 230 | 93 | 40.43% | $+2286.6 | $+9.94 |
| noisyHighBeta | 27 | 13 | 48.15% | $+466.32 | $+17.27 |
| falseBreakoutProne | 103 | 37 | 35.92% | $+79.76 | $+0.77 |
| extendedBreakout | 25 | 6 | 24% | $-574.68 | $-22.99 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SHOP | 31 | 1.51 | $+16.89 | 17 | 1.31 | $+17.5 | 0.59% | 1.09 | watch |
| Symbol | NVDA | 30 | 1.37 | $+13.92 | 18 | 1.47 | $+15.44 | 0.29% | 1.08 | watch |
| Behavior | neutral | 131 | 1.41 | $+14.91 | 99 | 1.08 | $+3.37 | 1.15% | 0.81 | watch |
| Time slot | Open 9:30-10:30 | 138 | 1.32 | $+10.57 | 27 | 0.98 | $-0.79 | 0.39% | 0.75 | watch |
| Setup | breakout | 123 | 1.42 | $+13.88 | 75 | 0.81 | $-9.66 | 1.57% | 0.65 | watch |
| Symbol | GS | 18 | 1.3 | $+8.94 | 13 | 0.66 | $-13.62 | 0.4% | 0.45 | watch |
| Symbol | GOOGL | 25 | 1.44 | $+12.56 | 10 | 0.36 | $-25.41 | 0.4% | 0.24 | watch |
| Symbol | HD | 9 | 4.48 | $+50.83 | 12 | 0.33 | $-41.77 | 0.66% | 0.26 | watch |
| Behavior | noisyHighBeta | 5 | 0.08 | $-41.34 | 22 | 2.33 | $+30.59 | 0.22% | 1.87 | reject |
| Symbol | MRVL | 38 | 1.23 | $+8.69 | 27 | 1.38 | $+15.23 | 0.38% | 1.08 | reject |
| Setup | trend | 108 | 1.1 | $+3.56 | 79 | 1.36 | $+11.28 | 0.6% | 0.98 | reject |
| Symbol | NET | 39 | 1.26 | $+11.16 | 23 | 1.26 | $+8.52 | 0.46% | 0.99 | reject |
| Time slot | Mid 10:30-11:30 | 41 | 1.2 | $+8.46 | 79 | 1.08 | $+3.31 | 1.13% | 0.84 | reject |
| Time slot | Noon 11:30-13:00 | 28 | 1.13 | $+4.7 | 36 | 1.01 | $+0.22 | 0.56% | 0.73 | reject |
| Symbol | AMZN | 21 | 0.74 | $-6.36 | 20 | 0.95 | $-1.53 | 0.31% | 0.69 | reject |
| Symbol | META | 20 | 0.42 | $-20.7 | 14 | 0.89 | $-3.77 | 0.27% | 0.64 | reject |
| Time slot | PM 13:00-14:00 | 24 | 1.26 | $+6.45 | 12 | 0.84 | $-6.8 | 0.47% | 0.65 | reject |
| Behavior | falseBreakoutProne | 86 | 1.12 | $+3.7 | 17 | 0.68 | $-14.02 | 0.51% | 0.54 | reject |
| Behavior | extendedBreakout | 9 | 1.11 | $+2.99 | 16 | 0.28 | $-37.6 | 0.71% | 0.23 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1395.16 | 1.1 |
| +3 bps/side | $-330.68 | 0.98 |
| +5 bps/side | $-2056.45 | 0.88 |
| +10 bps/side | $-6370.84 | 0.68 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 155 |
| timeout | 105 |
| stagnation | 50 |
| stop-loss | 20 |
| breakeven-stop | 19 |
| trim-profit-target | 16 |
| profit-target | 14 |
| trailing-stop | 6 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.64 | 109.53 | 127 | 13924.28 | -13.97 | -0.1% | 0.14R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 2 | META | 04-29 17:45 | 04-29 19:00 | 554.95 | 554.66 | 25 | 13873.75 | -7.25 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 3 | MRVL | 04-29 17:45 | 04-29 18:50 | 59.32 | 59.34 | 236 | 13999.52 | +4.72 | +0.03% | 0.04R | 65m | market | breakeven-stop | trend | trend | neutral | 70.89 | ↑58.64 | 0.105 | 1 | **WIN** |
| 4 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.62 | 187.55 | 74 | 13883.88 | -5.18 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 5 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 6 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 7 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 8 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 9 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 10 | HD | 05-02 13:35 | 05-02 14:00 | 364.83 | 363.44 | 26 | 9485.58 | -36.14 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 11 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 12 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 47 | 9041.39 | -34.31 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 13 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 48 | 9006.72 | +28.32 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 14 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 102 | 9756.3 | -63.24 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 15 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.45 | 55.08 | 164 | 9093.8 | -60.68 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 16 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 17 | HD | 05-08 15:25 | 05-08 17:10 | 366.72 | 367.52 | 38 | 13935.36 | +30.4 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 60.48 | ↑363.87 | 0.5541 | 2.42 | **WIN** |
| 18 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.85 | 193.49 | 36 | 13813.2 | +59.04 | +0.85% | 1.1R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 19 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.85 | 193.46 | 36 | 13813.2 | +57.96 | +0.84% | 1.09R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 20 | NET | 05-08 16:55 | 05-08 17:45 | 124.94 | 124.84 | 111 | 13868.34 | -11.1 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 64.23 | ↑123.24 | 0.5628 | 2.76 | **LOSS** |
| 21 | MRVL | 05-12 17:05 | 05-12 17:25 | 65.11 | 64.8 | 214 | 13933.54 | -66.34 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑64.06 | 0.2549 | 1.05 | **LOSS** |
| 22 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 83 | 8856.93 | +126.16 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 23 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 137 | 8984.46 | +117.82 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 24 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 14 | 9093.56 | +124.04 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 25 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 61 | 8896.85 | +119.56 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 26 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 71 | 8984.34 | +254.18 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 27 | META | 05-13 15:25 | 05-13 16:00 | 660.24 | 658.17 | 21 | 13865.04 | -43.47 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 28 | MRVL | 05-13 15:45 | 05-13 16:05 | 66.86 | 66.43 | 209 | 13973.74 | -89.87 | -0.64% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 60.31 | ↑66.15 | 0.4147 | 1.03 | **LOSS** |
| 29 | NET | 05-13 15:45 | 05-13 17:10 | 148.96 | 150.24 | 46 | 13853.28 | +58.88 | +0.86% | 1.23R | 85m | market | trim-profit-target | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 30 | NET | 05-13 15:45 | 05-13 17:30 | 148.96 | 150.67 | 47 | 13853.28 | +80.37 | +1.15% | 1.64R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 31 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 60 | 9679.2 | -84 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 32 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 58 | 8919.24 | -100.34 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 33 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 34 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 35 | NVDA | 05-14 16:30 | 05-14 16:55 | 135.37 | 134.67 | 103 | 13943.11 | -72.1 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 36 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.76 | 135.7 | 103 | 13983.28 | -6.18 | -0.04% | 0.06R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 37 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 81 | 9086.58 | -47.79 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 38 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 58 | 8999.86 | +76.56 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 39 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 67 | 8994.08 | +42.88 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 40 | NET | 05-19 17:35 | 05-19 18:15 | 158.57 | 157.57 | 88 | 13954.16 | -88 | -0.63% | 0.9R | 40m | market | early-reversal | trend | trend | neutral | 75.75 | ↑156.75 | 0.3478 | 1.69 | **LOSS** |
| 41 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.79 | 171.64 | 82 | 13922.78 | +151.7 | +1.09% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 42 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 43 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 44 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 45 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 46 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 52 | 8929.96 | +218.92 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 47 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 15 | 9619.65 | -32.4 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 48 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 49 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 50 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.09 | 204.23 | 68 | 13946.12 | -58.48 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 51 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 57 | 9743.01 | +72.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 52 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 15 | 9103.8 | +61.35 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 53 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 54 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 55 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 149 | 9734.17 | -20.86 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 56 | SHOP | 05-28 17:15 | 05-28 19:00 | 107.67 | 107.93 | 130 | 13997.1 | +33.8 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑106.48 | 0.2939 | 4.58 | **WIN** |
| 57 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 65 | 8911.5 | -49.4 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 58 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 70 | 9792.3 | +114.1 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 59 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 43 | 9049.78 | -53.75 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 60 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 53 | 9027.49 | -37.63 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 61 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 62 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 63 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 64 | META | 06-06 13:30 | 06-06 14:40 | 697.26 | 696.87 | 12 | 8367.12 | -4.68 | -0.06% | 0.06R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 65 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 14 | 8656.2 | -39.62 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 66 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 67 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 108 | 7635.6 | -62.64 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 68 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 69 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 79 | 9035.23 | +17.38 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 70 | SHOP | 06-11 16:45 | 06-11 18:00 | 115.98 | 115.1 | 120 | 13917.6 | -105.6 | -0.76% | 0.85R | 75m | market | breakeven-stop | trend | trend | neutral | 67.55 | ↓114.59 | 0.1966 | 1 | **LOSS** |
| 71 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 72 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 14 | 8738.8 | +89.46 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 73 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 83 | 8949.89 | +95.45 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 74 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 15 | 9498.45 | +27.9 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 75 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 76 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 77 | SHOP | 06-23 17:30 | 06-23 18:35 | 109.25 | 109.11 | 128 | 13984 | -17.92 | -0.13% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 62.06 | ↑107.69 | 0.1283 | 1.34 | **LOSS** |
| 78 | NET | 06-23 17:40 | 06-23 19:25 | 182.46 | 184 | 76 | 13866.96 | +117.04 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑180.39 | 0.1582 | 1.81 | **WIN** |
| 79 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 79 | 8918.31 | +147.73 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 80 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 122 | 8896.24 | +233.02 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 81 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 61 | 9010.31 | -47.58 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 82 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 42 | 8977.08 | -58.8 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 83 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 12 | 8542.68 | -92.64 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 84 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 54 | 9143.28 | -16.74 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 85 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 86 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 13 | 8807.5 | +88.53 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 87 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 88 | HD | 06-27 16:10 | 06-27 17:00 | 369.31 | 368.48 | 37 | 13664.47 | -30.71 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 75.19 | ↑366.27 | 0.9883 | 2.68 | **LOSS** |
| 89 | HD | 07-01 14:20 | 07-01 16:05 | 370.12 | 378.88 | 37 | 13694.44 | +324.12 | +2.37% | 3.39R | 105m | market | timeout | trend | trend | neutral | 68.85 | ↑367.25 | 0.617 | 1.07 | **WIN** |
| 90 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 116 | 8961 | +154.28 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 91 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 120 | 13910.4 | -37.2 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 92 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 93 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 94 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 95 | HD | 07-08 15:10 | 07-08 16:00 | 369.73 | 369.32 | 37 | 13680.01 | -15.17 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 96 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 55 | 9018.9 | -26.4 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 97 | NET | 07-09 15:40 | 07-09 16:05 | 195.22 | 194.6 | 72 | 14055.84 | -44.64 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 78.16 | ↑193.99 | 0.3661 | 1.46 | **LOSS** |
| 98 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.29 | 180.31 | 78 | 13984.62 | +79.56 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 99 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 100 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 53 | 9776.38 | -49.82 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 101 | NET | 07-15 16:25 | 07-15 18:10 | 186.47 | 187.42 | 75 | 13985.25 | +71.25 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 73.82 | ↑184.01 | 0.6906 | 1.08 | **WIN** |
| 102 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 103 | SHOP | 07-16 16:30 | 07-16 18:15 | 118.43 | 119.35 | 118 | 13974.74 | +108.56 | +0.78% | 0.53R | 105m | market | timeout | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 104 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 114 | 14028.84 | +221.16 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 105 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 97 | 14006.8 | +61.11 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 106 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 97 | 14006.8 | +62.08 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 107 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 96 | 14029.44 | +101.76 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 108 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 14029.44 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 109 | MRVL | 07-18 17:30 | 07-18 17:50 | 74.61 | 74.39 | 188 | 14026.68 | -41.36 | -0.29% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 53.64 | ↑73.47 | 0.2617 | 2.12 | **LOSS** |
| 110 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 48 | 9016.8 | +46.56 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 111 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 12 | 8571.6 | -6.12 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 112 | NET | 07-21 13:45 | 07-21 14:20 | 199.25 | 197.69 | 45 | 8966.25 | -70.2 | -0.78% | 0.73R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 113 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 114 | HD | 07-23 17:35 | 07-23 18:15 | 377.81 | 376.6 | 37 | 13978.97 | -44.77 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.19 | ↑374.28 | 0.7867 | 4.2 | **LOSS** |
| 115 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 39 | 9016.02 | +3.51 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 116 | NET | 07-25 13:45 | 07-25 15:30 | 195.77 | 198.97 | 46 | 9005.42 | +147.2 | +1.63% | 2.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.11 | ↑195 | 0.6994 | 1.17 | **WIN** |
| 117 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 113 | 14075.28 | -14.69 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 118 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 119 | 9053.52 | -58.31 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 119 | NET | 07-28 14:00 | 07-28 14:15 | 202.06 | 199.92 | 69 | 13942.14 | -147.66 | -1.06% | 1.34R | 15m | market | stop-loss | breakout | trend | neutral | 73.82 | ↓200.56 | 0.4546 | 1.01 | **LOSS** |
| 120 | NET | 07-28 15:10 | 07-28 15:30 | 201.87 | 200.46 | 69 | 13929.03 | -97.29 | -0.7% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 48.36 | ↓200.61 | 0.5308 | 1.07 | **LOSS** |
| 121 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 108 | 8348.4 | +2.16 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 122 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 108 | 8447.76 | -41.04 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 123 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 11 | 8585.17 | -53.68 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 124 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 44 | 9050.8 | +103.4 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 125 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 37 | 7693.04 | -69.93 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 126 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 51 | 9811.38 | +23.97 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 127 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 12 | 8655 | +31.32 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 128 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.57 | 178.96 | 78 | 13928.46 | +30.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 129 | NET | 08-04 17:55 | 08-04 18:20 | 210.93 | 209.74 | 66 | 13921.38 | -78.54 | -0.56% | 0.8R | 25m | market | early-reversal | trend | trend | neutral | 63.26 | ↑208.92 | 0.3948 | 3.15 | **LOSS** |
| 130 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 41 | 8835.09 | -35.26 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 131 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 116 | 9027.12 | -66.12 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 132 | SHOP | 08-05 17:35 | 08-05 18:25 | 125.95 | 125.79 | 111 | 13980.45 | -17.76 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 67.32 | ↑124.73 | 0.3198 | 1.17 | **LOSS** |
| 133 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 134 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 60 | 9077.4 | -48 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 135 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 45 | 9152.55 | -42.3 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 136 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 11 | 8658.98 | -81.62 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 137 | HD | 08-13 13:40 | 08-13 15:25 | 402.15 | 404.58 | 22 | 8847.3 | +53.46 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 138 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 53 | 9664.02 | -6.89 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 139 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 140 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 141 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 142 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 143 | HD | 08-22 14:00 | 08-22 15:45 | 404.92 | 413.97 | 20 | 8098.4 | +181 | +2.24% | 3.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 144 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 37 | 8302.43 | +93.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 145 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 11 | 8261.88 | -49.61 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 146 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 147 | MRVL | 08-22 14:40 | 08-22 15:05 | 74.57 | 74.01 | 188 | 14019.16 | -105.28 | -0.75% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 79.5 | ↑73.48 | 0.8717 | 1.69 | **LOSS** |
| 148 | GOOGL | 08-22 17:10 | 08-22 18:25 | 205.59 | 207.65 | 34 | 13980.12 | +70.04 | +1% | 1.43R | 75m | market | trim-profit-target | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 149 | GOOGL | 08-22 17:10 | 08-22 18:55 | 205.59 | 206.85 | 34 | 13980.12 | +42.84 | +0.61% | 0.87R | 105m | market | timeout | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 150 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 48 | 9666.72 | +171.84 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 151 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 63 | 9046.17 | -61.11 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 152 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 43 | 9020.97 | +59.77 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 153 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 154 | MRVL | 09-02 17:40 | 09-02 19:15 | 63.48 | 64.13 | 110 | 13965.6 | +71.5 | +1.02% | 1.46R | 95m | market | trim-profit-target | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 155 | MRVL | 09-02 17:40 | 09-02 19:25 | 63.48 | 63.96 | 110 | 13965.6 | +52.8 | +0.76% | 1.09R | 105m | market | timeout | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 156 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 42 | 8953.56 | -53.34 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 157 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 36 | 8458.56 | -30.6 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 158 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 41 | 8987.61 | -72.16 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 159 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 53 | 9012.65 | -40.81 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 160 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 11 | 8418.52 | -46.86 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 161 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 162 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 163 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 164 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 12 | 9352.92 | +76.68 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 165 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 31 | 14038.66 | +81.22 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 166 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 14038.66 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 167 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 168 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 36 | 9023.4 | -122.04 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 169 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 170 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 171 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.45 | 232.8 | 59 | 13773.55 | -38.35 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 172 | NET | 09-15 16:20 | 09-15 16:55 | 229.14 | 228.05 | 61 | 13977.54 | -66.49 | -0.48% | 0.69R | 35m | market | early-reversal | trend | trend | neutral | 78.33 | ↑225.88 | 1.3733 | 2.17 | **LOSS** |
| 173 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.13 | 234.33 | 59 | 13872.67 | -47.2 | -0.34% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 174 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.55 | 71.09 | 198 | 13968.9 | +106.92 | +0.77% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 175 | GOOGL | 09-18 13:35 | 09-18 14:20 | 253.11 | 251.91 | 36 | 9111.96 | -43.2 | -0.47% | 0.58R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.03 | ↓252.44 | 0.9393 | 2.62 | **LOSS** |
| 176 | META | 09-18 13:40 | 09-18 15:05 | 785.85 | 784.72 | 11 | 8644.35 | -12.43 | -0.14% | 0.14R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 177 | NET | 09-18 16:45 | 09-18 17:05 | 222.56 | 221.78 | 63 | 14021.28 | -49.14 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑219.23 | 1.1007 | 2.46 | **LOSS** |
| 178 | NVDA | 09-22 16:00 | 09-22 16:35 | 177.34 | 183.16 | 79 | 14009.86 | +459.78 | +3.28% | 4.69R | 35m | market | profit-target | trend | trend | neutral | 71.72 | ↑175.72 | 0.1278 | 5.33 | **WIN** |
| 179 | MRVL | 09-24 13:50 | 09-24 14:10 | 78.15 | 77.2 | 115 | 8987.25 | -109.25 | -1.22% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.89 | ↓77.53 | 0.8047 | 1.69 | **LOSS** |
| 180 | MRVL | 09-24 17:35 | 09-24 19:20 | 80.73 | 80.56 | 88 | 7104.24 | -14.96 | -0.21% | 0.11R | 105m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 72.7 | ↑78.2 | 0.8733 | 1.33 | **LOSS** |
| 181 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 182 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 177 | 13998.93 | +585.87 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 183 | MRVL | 09-25 16:15 | 09-25 17:20 | 83.65 | 82.69 | 168 | 14053.2 | -161.28 | -1.15% | 0.58R | 65m | market | early-reversal | breakout | breakout | neutral | 91.37 | ↑79.52 | 1.391 | 1.19 | **LOSS** |
| 184 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 36 | 8956.8 | -52.92 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 185 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 11 | 8842.79 | -6.82 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 186 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 49 | 8998.85 | -46.06 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 187 | SHOP | 09-29 17:00 | 09-29 17:10 | 143.92 | 145.8 | 97 | 13960.24 | +182.36 | +1.31% | 1.7R | 10m | market | trailing-stop | breakout | breakout | neutral | 76.28 | ↑142.05 | 0.3214 | 6.59 | **WIN** |
| 188 | SHOP | 09-29 17:20 | 09-29 19:05 | 146.61 | 148.5 | 96 | 14074.56 | +181.44 | +1.29% | 0.77R | 105m | market | timeout | breakout | trend | neutral | 72.35 | ↑144.19 | 1.2025 | 1.03 | **WIN** |
| 189 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 76 | 14043.28 | +136.04 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 190 | NET | 10-01 16:30 | 10-01 17:10 | 215.97 | 214.75 | 65 | 14038.05 | -79.3 | -0.56% | 0.8R | 40m | market | early-reversal | trend | trend | neutral | 67.12 | ↑214.14 | 0.2644 | 3.01 | **LOSS** |
| 191 | META | 10-02 13:40 | 10-02 14:00 | 726.05 | 723.3 | 19 | 13794.95 | -52.25 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 192 | SHOP | 10-03 16:25 | 10-03 16:45 | 162.34 | 161.24 | 86 | 13961.24 | -94.6 | -0.68% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑159.39 | 0.8545 | 1.55 | **LOSS** |
| 193 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 11 | 8807.26 | -84.48 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 194 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 48 | 9018.24 | +5.28 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 195 | MRVL | 10-08 13:45 | 10-08 14:35 | 89.32 | 89.1 | 101 | 9021.32 | -22.22 | -0.25% | 0.23R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.79 | ↓88.74 | 0.4263 | 1.3 | **LOSS** |
| 196 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.54 | 165.84 | 84 | 13989.36 | -58.8 | -0.42% | 0.3R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 197 | MRVL | 10-08 15:40 | 10-08 16:35 | 90.64 | 91.53 | 77 | 14049.2 | +68.53 | +0.98% | 1.18R | 55m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑89.61 | 0.6334 | 1.54 | **WIN** |
| 198 | MRVL | 10-08 15:40 | 10-08 17:25 | 90.64 | 91.51 | 78 | 14049.2 | +67.86 | +0.96% | 1.16R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑89.61 | 0.6334 | 1.54 | **WIN** |
| 199 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 43 | 8378.12 | -47.73 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 200 | NET | 10-10 13:35 | 10-10 14:00 | 225.19 | 222.26 | 40 | 9007.6 | -117.2 | -1.3% | 1.86R | 25m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 201 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 202 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 40 | 9630 | -8.4 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 203 | SHOP | 10-13 13:45 | 10-13 14:05 | 154.02 | 152.61 | 64 | 9857.28 | -90.24 | -0.92% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.21 | ↓152.76 | -0.1914 | 1.18 | **LOSS** |
| 204 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 74 | 14056.3 | -139.12 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 205 | META | 10-13 14:10 | 10-13 14:40 | 719.57 | 714.63 | 19 | 13671.83 | -93.86 | -0.69% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 70.9 | ↑713.65 | 1.5443 | 1.1 | **LOSS** |
| 206 | HD | 10-13 14:20 | 10-13 15:15 | 381.21 | 381.08 | 36 | 13723.56 | -4.68 | -0.03% | 0.04R | 55m | market | stagnation | trend | trend | neutral | 73.43 | ↑379.35 | 1.1319 | 1.02 | **LOSS** |
| 207 | MRVL | 10-14 16:30 | 10-14 18:15 | 88.23 | 88.44 | 87 | 7676.01 | +18.27 | +0.24% | 0.33R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.12 | ↑86.98 | 0.3405 | 1.12 | **WIN** |
| 208 | SHOP | 10-14 17:35 | 10-14 18:25 | 154.19 | 153.66 | 91 | 14031.29 | -48.23 | -0.34% | 0.49R | 50m | market | early-reversal | trend | trend | neutral | 78.71 | ↑149.66 | 0.7852 | 1.52 | **LOSS** |
| 209 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 11 | 8544.14 | -77.44 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 210 | AMZN | 10-16 13:35 | 10-16 14:25 | 217.83 | 217.56 | 41 | 8931.03 | -11.07 | -0.12% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.07 | ↓217.2 | 0.579 | 2.4 | **LOSS** |
| 211 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 109 | 9824.17 | -8.72 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 212 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 213 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 87 | 7729.08 | -77.43 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 214 | AMZN | 10-21 13:40 | 10-21 15:25 | 220.34 | 221.87 | 40 | 8813.6 | +61.2 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.36 | ↑219.4 | 0.813 | 1.47 | **WIN** |
| 215 | NET | 10-23 13:50 | 10-23 14:15 | 214.17 | 213.48 | 42 | 8995.14 | -28.98 | -0.32% | 0.46R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.94 | ↓213.08 | 1.2398 | 3.06 | **LOSS** |
| 216 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 52 | 8938.8 | -3.12 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 217 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 166 | 14073.48 | -8.3 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 218 | MRVL | 10-24 16:40 | 10-24 17:30 | 85.69 | 85.48 | 164 | 14053.16 | -34.44 | -0.25% | 0.34R | 50m | market | stagnation | trend | trend | neutral | 71.19 | ↑84.58 | 0.2278 | 1.93 | **LOSS** |
| 219 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 34 | 9052.16 | -44.88 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 220 | META | 10-27 13:45 | 10-27 14:45 | 753.48 | 752.98 | 12 | 9041.76 | -6 | -0.07% | 0.1R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.77 | ↑751.59 | 3.1006 | 1.83 | **LOSS** |
| 221 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 50 | 9768 | -116 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 222 | AMZN | 10-28 17:30 | 10-28 17:55 | 231.27 | 230.63 | 60 | 13876.2 | -38.4 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 78.18 | ↑228.31 | 0.8567 | 1.34 | **LOSS** |
| 223 | GS | 10-29 15:40 | 10-29 16:00 | 800.25 | 795.08 | 17 | 13604.25 | -87.89 | -0.65% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑792.92 | 1.5953 | 3.31 | **LOSS** |
| 224 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 150 | 14088 | -165 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 225 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 55 | 14062.4 | -97.9 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 226 | AMZN | 11-10 14:35 | 11-10 15:05 | 250.59 | 249.19 | 33 | 8269.47 | -46.2 | -0.56% | 0.61R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.26 | ↓249.58 | 1.7204 | 1.68 | **LOSS** |
| 227 | META | 11-10 14:35 | 11-10 15:50 | 628.59 | 628.81 | 22 | 13828.98 | +4.84 | +0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **WIN** |
| 228 | NVDA | 11-10 15:20 | 11-10 15:50 | 196.54 | 195.27 | 71 | 13954.34 | -90.17 | -0.65% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓194.98 | 2.4553 | 1.11 | **LOSS** |
| 229 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.26 | 87.18 | 159 | 14033.34 | -171.72 | -1.22% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 230 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.55 | 289.7 | 48 | 14042.4 | -136.8 | -0.97% | 0.55R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 231 | GS | 11-18 16:30 | 11-18 17:20 | 781.39 | 777.79 | 17 | 13283.63 | -61.2 | -0.46% | 0.66R | 50m | market | early-reversal | trend | trend | neutral | 77.45 | ↑773.2 | 1.4057 | 1.15 | **LOSS** |
| 232 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 98 | 14045.36 | +148.96 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 233 | META | 11-20 14:35 | 11-20 14:55 | 605.87 | 602.09 | 13 | 7876.31 | -49.14 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.44 | ↓602.22 | 3.6323 | 1.88 | **LOSS** |
| 234 | HD | 11-21 14:35 | 11-21 15:40 | 338.33 | 338.08 | 41 | 13871.53 | -10.25 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 235 | HD | 11-21 16:35 | 11-21 17:40 | 342.62 | 345.34 | 20 | 14047.42 | +54.4 | +0.79% | 0.99R | 65m | market | trim-profit-target | trend | trend | neutral | 61.25 | ↑339.4 | 1.7183 | 1.81 | **WIN** |
| 236 | HD | 11-21 16:35 | 11-21 18:20 | 342.62 | 344.27 | 21 | 14047.42 | +34.65 | +0.48% | 0.6R | 105m | market | timeout | trend | trend | neutral | 61.25 | ↑339.4 | 1.7183 | 1.81 | **WIN** |
| 237 | AMZN | 11-21 17:00 | 11-21 17:35 | 220.36 | 219.49 | 63 | 13882.68 | -54.81 | -0.39% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 70.09 | ↑216.98 | 0.6389 | 1.06 | **LOSS** |
| 238 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 36 | 13873.65 | +86.04 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 239 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 13873.65 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 240 | MRVL | 11-24 14:40 | 11-24 16:20 | 79.61 | 81.53 | 97 | 7722.17 | +186.24 | +2.41% | 1.46R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 66.17 | ↑79.1 | 0.2558 | 1.41 | **WIN** |
| 241 | NVDA | 11-24 16:10 | 11-24 17:55 | 181.53 | 182.42 | 42 | 7624.26 | +37.38 | +0.49% | 0.4R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67.47 | ↑178.85 | 0.0451 | 1.33 | **WIN** |
| 242 | GOOGL | 11-28 14:30 | 11-28 14:40 | 326.26 | 322.82 | 25 | 8156.5 | -86 | -1.05% | 1.5R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 92.91 | ↓325.19 | 1.0737 | 6.62 | **LOSS** |
| 243 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.86 | 233.95 | 59 | 13856.74 | -53.69 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 244 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 84 | 12967.92 | +318.36 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 245 | HD | 12-03 14:35 | 12-03 14:55 | 358.26 | 356.81 | 23 | 8239.98 | -33.35 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 94.59 | ↓356.27 | 1.0488 | 2.29 | **LOSS** |
| 246 | GS | 12-03 15:00 | 12-03 16:45 | 823.94 | 829.67 | 17 | 14006.98 | +97.41 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 247 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.31 | 180.7 | 77 | 14037.87 | -123.97 | -0.88% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 248 | SHOP | 12-04 16:50 | 12-04 17:20 | 161.79 | 160.68 | 87 | 14075.73 | -96.57 | -0.69% | 0.99R | 30m | market | early-reversal | trend | trend | neutral | 72.13 | ↑159.24 | 0.3597 | 2.78 | **LOSS** |
| 249 | META | 12-05 15:15 | 12-05 15:40 | 672.31 | 670.11 | 20 | 13446.2 | -44 | -0.33% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 78.53 | ↑666.64 | 1.4891 | 1.62 | **LOSS** |
| 250 | HD | 12-05 15:35 | 12-05 16:00 | 354 | 352.81 | 39 | 13806 | -46.41 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 67.55 | ↑352.14 | 0.7199 | 1.18 | **LOSS** |
| 251 | NET | 12-08 14:35 | 12-08 15:10 | 204.85 | 204.96 | 41 | 8398.85 | +4.51 | +0.05% | 0.07R | 35m | market | breakeven-stop | breakout | breakout | extendedBreakout | 85.67 | ↓203.99 | 0.5174 | 1.26 | **WIN** |
| 252 | MRVL | 12-08 17:45 | 12-08 18:10 | 92.05 | 91.25 | 84 | 7732.2 | -67.2 | -0.87% | 0.47R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 68.87 | ↑90.59 | 0.4884 | 3.03 | **LOSS** |
| 253 | SHOP | 12-10 16:25 | 12-10 18:10 | 162.42 | 164.13 | 86 | 13968.12 | +147.06 | +1.05% | 1.44R | 105m | market | timeout | breakout | breakout | neutral | 60.78 | ↑160.13 | 0.2446 | 1.28 | **WIN** |
| 254 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.58 | 223.47 | 62 | 13923.96 | -68.82 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 255 | GS | 12-17 14:30 | 12-17 15:25 | 889.8 | 889.29 | 14 | 12457.2 | -7.14 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 256 | SHOP | 12-17 14:55 | 12-17 15:45 | 169.06 | 168.37 | 50 | 8453 | -34.5 | -0.41% | 0.26R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.69 | ↓167.51 | 1.5636 | 2.72 | **LOSS** |
| 257 | NVDA | 12-18 15:30 | 12-18 16:20 | 175.36 | 175.07 | 80 | 14028.8 | -23.2 | -0.17% | 0.15R | 50m | market | stagnation | breakout | trend | neutral | 59.36 | ↑173.82 | 0.6929 | 3.05 | **LOSS** |
| 258 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 45 | 13736.25 | -20.25 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 259 | META | 12-22 14:40 | 12-22 15:00 | 672.68 | 667.97 | 20 | 13453.6 | -94.2 | -0.7% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 64.58 | ↓667.88 | -0.1737 | 1.52 | **LOSS** |
| 260 | NET | 12-22 14:50 | 12-22 15:40 | 202.79 | 201.7 | 41 | 8314.39 | -44.69 | -0.54% | 0.51R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 261 | MRVL | 12-23 15:55 | 12-23 17:40 | 86.62 | 87.95 | 162 | 14032.44 | +215.46 | +1.54% | 1.54R | 105m | market | timeout | trend | trend | neutral | 59.68 | ↑85.73 | 0.3898 | 1.16 | **WIN** |
| 262 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 163 | 14086.46 | +195.6 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 263 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 264 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 25 | 8023.25 | -41 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 265 | AMZN | 01-02 14:40 | 01-02 14:55 | 234.85 | 232.78 | 35 | 8219.75 | -72.45 | -0.88% | 1.26R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 87.3 | ↓233.39 | 0.3246 | 2.97 | **LOSS** |
| 266 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 267 | MRVL | 01-02 14:55 | 01-02 15:20 | 89.02 | 88.28 | 158 | 14065.16 | -116.92 | -0.83% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 79.84 | ↓88.42 | 0.7955 | 1.32 | **LOSS** |
| 268 | GS | 01-02 15:00 | 01-02 15:20 | 889.89 | 885.58 | 15 | 13348.35 | -64.65 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.71 | ↓885.26 | 1.3176 | 1.22 | **LOSS** |
| 269 | MRVL | 01-02 16:30 | 01-02 16:50 | 90.03 | 89.31 | 156 | 14044.68 | -112.32 | -0.8% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 69.28 | ↑88.81 | 0.8599 | 1.08 | **LOSS** |
| 270 | NET | 01-07 14:40 | 01-07 15:00 | 200.74 | 198.84 | 42 | 8431.08 | -79.8 | -0.95% | 1.07R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.26 | ↓200.35 | 1.0626 | 1.33 | **LOSS** |
| 271 | HD | 01-08 15:15 | 01-08 17:00 | 356.78 | 360.91 | 39 | 13914.42 | +161.07 | +1.16% | 1.16R | 105m | market | timeout | trend | trend | neutral | 73.26 | ↑351.41 | 1.0435 | 1.16 | **WIN** |
| 272 | SHOP | 01-08 17:35 | 01-08 17:55 | 166.65 | 166.04 | 84 | 13998.6 | -51.24 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 72.74 | ↑164.96 | 0.4706 | 1.6 | **LOSS** |
| 273 | HD | 01-09 14:35 | 01-09 15:00 | 364.34 | 362.34 | 38 | 13844.92 | -76 | -0.55% | 0.69R | 25m | market | early-reversal | trend | breakout | neutral | 64.78 | ↓363.89 | -0.1651 | 1.87 | **LOSS** |
| 274 | META | 01-09 16:05 | 01-09 16:55 | 653.42 | 652 | 21 | 13721.82 | -29.82 | -0.22% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 65.42 | ↑648.15 | 1.6098 | 1.33 | **LOSS** |
| 275 | MRVL | 01-09 16:05 | 01-09 16:25 | 83.96 | 83.55 | 167 | 14021.32 | -68.47 | -0.49% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 66.72 | ↑83.39 | 0.1638 | 1.63 | **LOSS** |
| 276 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 277 | NVDA | 01-12 17:20 | 01-12 17:40 | 186.62 | 185.94 | 75 | 13996.5 | -51 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.64 | ↑184.94 | 0.3627 | 2.13 | **LOSS** |
| 278 | MRVL | 01-13 16:30 | 01-13 17:00 | 83.83 | 83.58 | 167 | 13999.61 | -41.75 | -0.3% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 63 | ↑83.44 | 0.0467 | 1.23 | **LOSS** |
| 279 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 280 | AMZN | 01-15 16:00 | 01-15 16:20 | 239.84 | 238.85 | 58 | 13910.72 | -57.42 | -0.41% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 68.53 | ↑238.02 | 0.3502 | 2.17 | **LOSS** |
| 281 | GS | 01-21 15:05 | 01-21 16:50 | 957.92 | 960.49 | 14 | 13410.88 | +35.98 | +0.27% | 0.36R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 282 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 283 | HD | 01-22 14:40 | 01-22 14:55 | 388.56 | 384.84 | 36 | 13988.16 | -133.92 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | trend | neutral | 73.65 | ↓388.59 | 1.4586 | 1.37 | **LOSS** |
| 284 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 285 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 286 | NET | 01-26 16:40 | 01-26 18:25 | 190.95 | 191.94 | 73 | 13939.35 | +72.27 | +0.52% | 0.45R | 105m | market | timeout | trend | trend | neutral | 50.37 | ↑190.34 | 2.5505 | 1.05 | **WIN** |
| 287 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 169 | 14067.56 | -47.32 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 288 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 289 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 290 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 291 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 43 | 7661.31 | +223.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 292 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 293 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 294 | HD | 02-03 15:25 | 02-03 15:45 | 390.84 | 385.5 | 21 | 8207.64 | -112.14 | -1.37% | 1.06R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.38 | ↓386.75 | 2.9 | 1.77 | **LOSS** |
| 295 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 296 | NET | 02-05 17:35 | 02-05 18:05 | 168.34 | 166.49 | 46 | 7743.64 | -85.1 | -1.1% | 0.96R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 69.88 | ↓166.98 | 0.2058 | 1.41 | **LOSS** |
| 297 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 298 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 299 | MRVL | 02-06 16:20 | 02-06 18:05 | 79.5 | 80.21 | 97 | 7711.5 | +68.87 | +0.89% | 0.64R | 105m | market | timeout | trend | trend | noisyHighBeta | 70.77 | ↑78.25 | 1.0852 | 1.37 | **WIN** |
| 300 | NET | 02-06 16:40 | 02-06 18:25 | 167.81 | 169.17 | 46 | 7719.26 | +62.56 | +0.81% | 0.84R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.06 | ↑164.97 | 0.9821 | 1.61 | **WIN** |
| 301 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 40 | 7582.4 | +86.8 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 302 | GS | 02-09 15:15 | 02-09 17:00 | 940 | 943.53 | 14 | 13160 | +49.42 | +0.38% | 0.45R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 303 | GS | 02-10 14:45 | 02-10 15:40 | 958.28 | 956.82 | 14 | 13415.92 | -20.44 | -0.15% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 71.91 | ↑953.51 | 1.4363 | 2.25 | **LOSS** |
| 304 | NET | 02-10 14:55 | 02-10 15:45 | 179.6 | 179.39 | 39 | 7004.4 | -8.19 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 71.54 | ↑178.09 | 1.2492 | 2.38 | **LOSS** |
| 305 | SHOP | 02-10 15:30 | 02-10 16:20 | 128.35 | 126.94 | 65 | 8342.75 | -91.65 | -1.1% | 0.55R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 89.42 | ↑125.38 | 2.1949 | 1.3 | **LOSS** |
| 306 | NET | 02-10 17:35 | 02-10 18:20 | 182.12 | 181.36 | 42 | 7649.04 | -31.92 | -0.42% | 0.49R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 66.95 | ↑179.37 | 0.6198 | 1.35 | **LOSS** |
| 307 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 308 | NET | 02-13 14:40 | 02-13 15:20 | 188.6 | 190.45 | 41 | 7732.6 | +75.85 | +0.98% | 0.58R | 40m | market | trailing-stop | breakout | breakout | noisyHighBeta | 65.65 | ↑187.11 | 0.893 | 1.58 | **WIN** |
| 309 | NET | 02-13 16:35 | 02-13 18:15 | 190.59 | 195.25 | 40 | 7623.6 | +186.4 | +2.45% | 1.81R | 100m | market | profit-target | trend | trend | noisyHighBeta | 50.66 | ↑189.34 | 0.7233 | 1.48 | **WIN** |
| 310 | HD | 02-13 16:40 | 02-13 17:15 | 393.62 | 392.22 | 35 | 13776.7 | -49 | -0.36% | 0.51R | 35m | market | early-reversal | trend | trend | neutral | 74.52 | ↑390.68 | 0.8214 | 1.64 | **LOSS** |
| 311 | NET | 02-17 14:40 | 02-17 14:50 | 200.8 | 196.27 | 38 | 7630.4 | -172.14 | -2.26% | 1.4R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 68.07 | ↓198.53 | 0.5571 | 1.49 | **LOSS** |
| 312 | GS | 02-17 14:45 | 02-17 15:05 | 919.18 | 910.96 | 15 | 13787.7 | -123.3 | -0.89% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 313 | MRVL | 02-17 15:50 | 02-17 17:35 | 78.03 | 79.53 | 180 | 14045.4 | +270 | +1.92% | 1.32R | 105m | market | timeout | breakout | breakout | neutral | 51.51 | ↑77.49 | -0.3418 | 1.25 | **WIN** |
| 314 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 315 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 41 | 8351.29 | +114.39 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 316 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 317 | NET | 02-19 16:15 | 02-19 16:35 | 193.33 | 192.04 | 37 | 7153.21 | -47.73 | -0.67% | 0.71R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 71.01 | ↑189.12 | 0.373 | 2.18 | **LOSS** |
| 318 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 319 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 320 | SHOP | 02-20 14:50 | 02-20 15:50 | 125.59 | 128.58 | 56 | 7033.04 | +167.44 | +2.38% | 1.52R | 60m | market | profit-target | breakout | breakout | noisyHighBeta | 72.03 | ↑124.33 | 0.4708 | 1.13 | **WIN** |
| 321 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 176 | 14083.52 | -31.68 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 322 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 323 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 324 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 43 | 8303.3 | -62.78 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 325 | HD | 02-24 14:45 | 02-24 15:05 | 391.57 | 386.87 | 33 | 12921.81 | -155.1 | -1.2% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 78.94 | ↓390.88 | 2.8923 | 1.14 | **LOSS** |
| 326 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 327 | MRVL | 02-24 17:05 | 02-24 17:35 | 79.61 | 79.33 | 177 | 14090.97 | -49.56 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 65.81 | ↑78.65 | 0.2417 | 1.74 | **LOSS** |
| 328 | NET | 02-24 17:05 | 02-24 17:40 | 166.49 | 165.83 | 46 | 7658.54 | -30.36 | -0.4% | 0.41R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 64.01 | ↑164.05 | 0.7901 | 2 | **LOSS** |
| 329 | MRVL | 02-25 14:30 | 02-25 16:00 | 79.33 | 79.23 | 177 | 14041.41 | -17.7 | -0.13% | 0.19R | 90m | market | trailing-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **LOSS** |
| 330 | NET | 02-25 16:20 | 02-25 18:05 | 168.26 | 169.36 | 46 | 7739.96 | +50.6 | +0.65% | 0.61R | 105m | market | timeout | trend | trend | noisyHighBeta | 52.62 | ↑167.2 | 0.8888 | 2.27 | **WIN** |
| 331 | NET | 02-26 14:55 | 02-26 15:15 | 175.06 | 173.84 | 40 | 7002.4 | -48.8 | -0.7% | 0.51R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 70.93 | ↓173.79 | 0.5739 | 1.59 | **LOSS** |
| 332 | MRVL | 02-27 14:30 | 02-27 14:40 | 80.16 | 79.03 | 105 | 8416.8 | -118.65 | -1.41% | 1.66R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 83.78 | ↓79.77 | 0.3972 | 3.05 | **LOSS** |
| 333 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 334 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 335 | MRVL | 03-02 17:15 | 03-02 18:10 | 82.2 | 81.9 | 171 | 14056.2 | -51.3 | -0.36% | 0.37R | 55m | market | early-reversal | trend | trend | neutral | 69.19 | ↑80.83 | 0.2845 | 1.29 | **LOSS** |
| 336 | SHOP | 03-03 17:20 | 03-03 18:40 | 118.05 | 121.46 | 119 | 14047.95 | +405.79 | +2.89% | 2.56R | 80m | market | profit-target | trend | trend | neutral | 76.52 | ↑115.19 | 0.9466 | 1.37 | **WIN** |
| 337 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 39 | 8296.86 | +116.22 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 338 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 339 | SHOP | 03-04 15:00 | 03-04 15:50 | 128.26 | 128.1 | 66 | 8465.16 | -10.56 | -0.12% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 90.65 | ↑125.83 | 1.5289 | 1.12 | **LOSS** |
| 340 | SHOP | 03-04 16:40 | 03-04 17:00 | 129.03 | 128.35 | 109 | 14064.27 | -74.12 | -0.53% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 60.92 | ↑127.33 | 1.3818 | 1.08 | **LOSS** |
| 341 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 63 | 13792.59 | -62.37 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 342 | SHOP | 03-05 14:35 | 03-05 15:20 | 132.75 | 132.79 | 53 | 7035.75 | +2.12 | +0.03% | 0.02R | 45m | market | trailing-stop | breakout | breakout | noisyHighBeta | 73.01 | ↓131.59 | 0.3589 | 2.07 | **WIN** |
| 343 | NET | 03-09 15:25 | 03-09 16:20 | 202.04 | 201.9 | 69 | 13940.76 | -9.66 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 344 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 345 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 346 | MRVL | 03-13 13:35 | 03-13 14:25 | 89.88 | 89.83 | 78 | 7010.64 | -3.9 | -0.06% | 0.05R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 75.69 | ↑89.27 | 0.0002 | 1.72 | **LOSS** |
| 347 | GS | 03-16 15:40 | 03-16 15:55 | 804.2 | 798.08 | 17 | 13671.4 | -104.04 | -0.76% | 1.09R | 15m | market | stop-loss | trend | trend | neutral | 57.21 | ↓798.57 | 3.5466 | 2.94 | **LOSS** |
| 348 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 14 | 8885.52 | -30.66 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 349 | SHOP | 03-17 13:50 | 03-17 14:10 | 132.68 | 131.15 | 69 | 9154.92 | -105.57 | -1.15% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.57 | ↓131.55 | 1.3339 | 2.43 | **LOSS** |
| 350 | NET | 03-20 14:30 | 03-20 14:50 | 224.92 | 221.91 | 62 | 13945.04 | -186.62 | -1.34% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 351 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 79 | 14069.11 | -56.88 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 352 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 22 | 13378.2 | -37.62 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 353 | MRVL | 03-24 14:15 | 03-24 15:45 | 91.39 | 92.7 | 77 | 14074.06 | +100.87 | +1.43% | 0.87R | 90m | market | trim-profit-target | trend | trend | neutral | 65.03 | ↑90.6 | 0.1789 | 1.13 | **WIN** |
| 354 | MRVL | 03-24 14:15 | 03-24 16:00 | 91.39 | 92.24 | 77 | 14074.06 | +65.45 | +0.93% | 0.56R | 105m | market | timeout | trend | trend | neutral | 65.03 | ↑90.6 | 0.1789 | 1.13 | **WIN** |
| 355 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 42 | 8921.22 | -39.9 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 356 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 44 | 8898.12 | -34.76 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 357 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.16 | 112.53 | 124 | 14031.84 | -78.12 | -0.56% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 358 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 32 | 8925.76 | +80.32 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 359 | GS | 03-31 13:45 | 03-31 14:35 | 821.73 | 819.24 | 11 | 9039.03 | -27.39 | -0.3% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.63 | ↓816.94 | 1.4478 | 1.73 | **LOSS** |
| 360 | NET | 03-31 13:45 | 03-31 14:35 | 197.95 | 197.56 | 46 | 9105.7 | -17.94 | -0.2% | 0.16R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.21 | ↓197.07 | 0.3216 | 1.51 | **LOSS** |
| 361 | HD | 03-31 16:40 | 03-31 16:45 | 330.12 | 326.9 | 42 | 13865.04 | -135.24 | -0.98% | 1.4R | 5m | market | stop-loss | breakout | breakout | neutral | 85.93 | ↑325.84 | 0.3599 | 3.82 | **LOSS** |
| 362 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 15 | 8739.45 | -93.3 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 363 | META | 04-01 16:15 | 04-01 17:45 | 586.83 | 586.91 | 23 | 13497.09 | +1.84 | +0.01% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 73.11 | ↑580.24 | 1.9352 | 1.17 | **WIN** |
| 364 | META | 04-06 13:30 | 04-06 14:00 | 581.44 | 577.99 | 15 | 8721.6 | -51.75 | -0.59% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.03 | ↓579.82 | 1.2555 | 1.54 | **LOSS** |
| 365 | MRVL | 04-07 16:40 | 04-07 17:40 | 109.21 | 109.04 | 71 | 7753.91 | -12.07 | -0.16% | 0.19R | 60m | market | stagnation | trend | trend | noisyHighBeta | 76.54 | ↑107.46 | 0.4262 | 3.63 | **LOSS** |
| 366 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 367 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 368 | AMZN | 04-10 13:35 | 04-10 14:00 | 238.38 | 237.24 | 37 | 8820.06 | -42.18 | -0.48% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.44 | ↓237.43 | 1.1799 | 2.17 | **LOSS** |
| 369 | AMZN | 04-10 14:15 | 04-10 14:50 | 239.71 | 238.84 | 58 | 13903.18 | -50.46 | -0.36% | 0.3R | 35m | market | early-reversal | trend | trend | neutral | 78.96 | ↑237.96 | 1.945 | 1.08 | **LOSS** |
| 370 | SHOP | 04-13 13:45 | 04-13 15:30 | 113.39 | 114.23 | 80 | 9071.2 | +67.2 | +0.74% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.5 | ↑111.95 | 0.8024 | 1.39 | **WIN** |
| 371 | AMZN | 04-14 13:35 | 04-14 14:10 | 246.4 | 245.24 | 36 | 8870.4 | -41.76 | -0.47% | 0.59R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.46 | ↓245.17 | 1.0769 | 3.54 | **LOSS** |
| 372 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 373 | GS | 04-14 16:05 | 04-14 16:55 | 908.1 | 906.56 | 15 | 13621.5 | -23.1 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 70.17 | ↑900.03 | 2.7464 | 1.92 | **LOSS** |
| 374 | AMZN | 04-14 17:40 | 04-14 18:10 | 251.81 | 250.9 | 55 | 13849.55 | -50.05 | -0.36% | 0.51R | 30m | market | early-reversal | trend | trend | neutral | 74.22 | ↑247.7 | 0.9533 | 1.67 | **LOSS** |
| 375 | NET | 04-15 14:10 | 04-15 15:55 | 188.47 | 189.35 | 37 | 6973.39 | +32.56 | +0.47% | 0.24R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 81.52 | ↑185.88 | 2.0169 | 1.43 | **WIN** |
| 376 | AMZN | 04-17 13:35 | 04-17 15:00 | 254.06 | 254.21 | 35 | 8892.1 | +5.25 | +0.06% | 0.06R | 85m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.81 | ↓253.88 | 1.0706 | 1.2 | **WIN** |
| 377 | MRVL | 04-17 14:05 | 04-17 15:50 | 136.24 | 138.74 | 103 | 14032.72 | +257.5 | +1.83% | 1.03R | 105m | market | timeout | trend | trend | neutral | 64.97 | ↑134.55 | 0.362 | 1.89 | **WIN** |
| 378 | MRVL | 04-21 13:30 | 04-21 14:35 | 150.91 | 152.22 | 59 | 8903.69 | +77.29 | +0.87% | 0.78R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 67.11 | ↓150.06 | 0.4257 | 1.87 | **WIN** |
| 379 | MRVL | 04-22 13:35 | 04-22 13:55 | 153.87 | 151.87 | 64 | 9847.68 | -128 | -1.3% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.53 | ↓153.6 | 0.4329 | 1.7 | **LOSS** |
| 380 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.64 | 154.79 | 91 | 14072.24 | +13.65 | +0.1% | 0.05R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 381 | MRVL | 04-22 17:20 | 04-22 19:05 | 156.58 | 156.97 | 90 | 14092.2 | +35.1 | +0.25% | 0.36R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑154.63 | 0.295 | 1.9 | **WIN** |
| 382 | MRVL | 04-23 13:50 | 04-23 14:10 | 163.77 | 161.48 | 56 | 9171.12 | -128.24 | -1.4% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.19 | ↓162.88 | 1.4196 | 1.13 | **LOSS** |
| 383 | MRVL | 04-23 16:30 | 04-23 17:00 | 167.28 | 166.33 | 84 | 14051.52 | -79.8 | -0.57% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 63.35 | ↑164.22 | 1.0951 | 1.42 | **LOSS** |
| 384 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 48 | 9732.96 | +273.12 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 385 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 20 | 13364.4 | -63.8 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |

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

- ⚠️ **Profit factor 1.16 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.78R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T09:34:32.662Z*
