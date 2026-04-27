# Bot Trade Report — 64 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:01:07.799Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 4 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1033.13 (-1.03%) over 64 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 64 |
| Win rate | 26.56% (17W / 47L) |
| Net P&L | $-1033.13 (-1.03%) |
| Gross profit | $1798.53 |
| Gross loss | $2831.66 |
| Profit factor | 0.64 |
| Avg win | $105.8 |
| Avg loss | $60.25 |
| Payoff ratio | 1.76:1 |
| Expectancy | $-16.14 / trade |
| Max drawdown | 1.45% |
| Sharpe ratio (ann.) | -2.94 |
| Trades / active day | 1.25 |
| Avg confidence | 99.67% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.65R |
| Starting equity | $100,000 |
| Ending equity | $98,966.87 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 18 | 27.78% | $-192.28 | $-10.68 |
| Mid  10:30–11:30 | 46 | 26.09% | $-840.85 | $-18.28 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| VRTX | 9 | 5 | 55.56% | $+297.34 | $+33.04 | 3.5 | eligible |
| GILD | 13 | 3 | 23.08% | $-0.26 | $-0.02 | 1 | throttle |
| REGN | 22 | 4 | 18.18% | $-588.04 | $-26.73 | 0.45 | throttle |
| BIIB | 20 | 5 | 25% | $-742.17 | $-37.11 | 0.39 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 22 | 8 | 36.36% | $-217.55 | $-9.89 |
| trend | 42 | 9 | 21.43% | $-815.58 | $-19.42 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-26.4 | $-26.4 |
| neutral | 63 | 17 | 26.98% | $-1006.73 | $-15.98 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 8 | 0.2 | $-52.32 | 14 | 1.37 | $+14.36 | 0.22% | 1.01 | reject |
| Symbol | GILD | 8 | 1 | $-0.06 | 5 | 1 | $+0.04 | 0.14% | 0.78 | reject |
| Time slot | Mid 10:30-11:30 | 23 | 0.45 | $-30.58 | 23 | 0.87 | $-5.98 | 0.46% | 0.63 | reject |
| Behavior | neutral | 37 | 0.54 | $-20.69 | 26 | 0.79 | $-9.28 | 0.56% | 0.57 | reject |
| Symbol | REGN | 13 | 0.59 | $-22.66 | 9 | 0.19 | $-32.6 | 0.34% | 0.09 | reject |
| Time slot | Open 9:30-10:30 | 15 | 0.79 | $-5.9 | 3 | 0 | $-34.62 | 0.1% | 0 | reject |
| Setup | trend | 30 | 0.68 | $-12.44 | 12 | 0.24 | $-36.87 | 0.49% | 0.14 | reject |
| Symbol | BIIB | 14 | 0.38 | $-34.46 | 6 | 0.42 | $-43.29 | 0.45% | 0.34 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1205.53 | 0.59 |
| +3 bps/side | $-1550.27 | 0.52 |
| +5 bps/side | $-1895.03 | 0.46 |
| +10 bps/side | $-2756.94 | 0.33 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 24 |
| timeout | 15 |
| stagnation | 14 |
| stop-loss | 5 |
| breakeven-stop | 3 |
| trim-profit-target | 1 |
| profit-target | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | REGN | 05-02 14:45 | 05-02 15:05 | 612.34 | 608.69 | 22 | 13471.48 | -80.3 | -0.6% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 62.81 | ↑606.78 | 6.6581 | 2.07 | **LOSS** |
| 2 | GILD | 05-19 15:10 | 05-19 16:20 | 105.1 | 105.04 | 133 | 13978.3 | -7.98 | -0.06% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 72.62 | ↑104.38 | 0.6512 | 1.21 | **LOSS** |
| 3 | BIIB | 05-20 14:35 | 05-20 14:50 | 131.07 | 130.07 | 106 | 13893.42 | -106 | -0.76% | 1R | 15m | market | stop-loss | trend | trend | neutral | 74.55 | ↓130.2 | 0.6459 | 1.08 | **LOSS** |
| 4 | GILD | 05-27 14:00 | 05-27 14:50 | 109.1 | 108.86 | 128 | 13964.8 | -30.72 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 74.66 | ↓108.54 | 0.3639 | 1.09 | **LOSS** |
| 5 | REGN | 05-27 14:05 | 05-27 14:55 | 600.4 | 599.91 | 23 | 13809.2 | -11.27 | -0.08% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 69.16 | ↑596.26 | 2.1849 | 2.34 | **LOSS** |
| 6 | BIIB | 05-27 14:20 | 05-27 16:05 | 127.78 | 128.61 | 109 | 13928.02 | +90.47 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 70.92 | ↑126.84 | 0.5338 | 2.5 | **WIN** |
| 7 | GILD | 05-29 14:05 | 05-29 14:55 | 110.49 | 110.43 | 126 | 13921.74 | -7.56 | -0.05% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 79.53 | ↑109.57 | 0.5922 | 1.08 | **LOSS** |
| 8 | BIIB | 06-03 14:25 | 06-03 15:25 | 132.48 | 133.58 | 52 | 13910.4 | +57.2 | +0.83% | 0.8R | 60m | market | trim-profit-target | trend | trend | neutral | 59.56 | ↑131.91 | 0.2033 | 1.72 | **WIN** |
| 9 | BIIB | 06-03 14:25 | 06-03 16:10 | 132.48 | 133.86 | 53 | 13910.4 | +73.14 | +1.04% | 1R | 105m | market | timeout | trend | trend | neutral | 59.56 | ↑131.91 | 0.2033 | 1.72 | **WIN** |
| 10 | REGN | 06-04 15:10 | 06-04 15:30 | 498.25 | 495.75 | 28 | 13951 | -70 | -0.5% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 59.18 | ↓495.77 | 1.3061 | 2.45 | **LOSS** |
| 11 | BIIB | 06-10 15:05 | 06-10 15:55 | 136.22 | 136.1 | 102 | 13894.44 | -12.24 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 69.14 | ↑135.49 | 0.3251 | 1.04 | **LOSS** |
| 12 | GILD | 06-27 15:15 | 06-27 17:00 | 110.08 | 110.62 | 127 | 13980.16 | +68.58 | +0.49% | 0.36R | 105m | market | timeout | trend | trend | neutral | 64.09 | ↑109.01 | 0.61 | 1.57 | **WIN** |
| 13 | REGN | 07-01 14:35 | 07-01 15:50 | 529.95 | 545.93 | 26 | 13778.7 | +415.48 | +3.02% | 4.14R | 75m | market | profit-target | trend | trend | neutral | 63.48 | ↑526.36 | 1.5171 | 2.12 | **WIN** |
| 14 | BIIB | 07-02 15:10 | 07-02 16:10 | 134.28 | 133.35 | 104 | 13965.12 | -96.72 | -0.69% | 0.99R | 60m | market | early-reversal | trend | trend | neutral | 66.52 | ↑132.56 | 0.8522 | 3.29 | **LOSS** |
| 15 | BIIB | 07-08 14:45 | 07-08 15:25 | 134.21 | 133.58 | 104 | 13957.84 | -65.52 | -0.47% | 0.53R | 40m | market | breakeven-stop | breakout | breakout | neutral | 85.98 | ↑132.29 | 0.9659 | 1.17 | **LOSS** |
| 16 | VRTX | 07-10 14:25 | 07-10 15:20 | 482.47 | 481.66 | 29 | 13991.63 | -23.49 | -0.17% | 0.24R | 55m | market | stagnation | trend | trend | neutral | 67.54 | ↑479.83 | 1.8682 | 1.26 | **LOSS** |
| 17 | REGN | 07-10 15:25 | 07-10 15:50 | 565.47 | 560.59 | 24 | 13571.28 | -117.12 | -0.86% | 1.21R | 25m | market | stop-loss | trend | trend | neutral | 75.41 | ↓561.04 | 4.5426 | 1.37 | **LOSS** |
| 18 | GILD | 07-16 14:25 | 07-16 15:20 | 110.08 | 109.87 | 127 | 13980.16 | -26.67 | -0.19% | 0.27R | 55m | market | stagnation | trend | trend | neutral | 62.39 | ↓109.52 | 0.1023 | 1.09 | **LOSS** |
| 19 | REGN | 07-23 14:05 | 07-23 15:15 | 572.32 | 571.63 | 24 | 13735.68 | -16.56 | -0.12% | 0.12R | 70m | market | stagnation | breakout | trend | neutral | 73.75 | ↑568.91 | 3.3638 | 1.09 | **LOSS** |
| 20 | BIIB | 07-23 14:50 | 07-23 15:40 | 130.57 | 129.76 | 107 | 13970.99 | -86.67 | -0.62% | 0.7R | 50m | market | early-reversal | trend | trend | neutral | 78.35 | ↓129.95 | 1.089 | 1.42 | **LOSS** |
| 21 | VRTX | 08-11 15:10 | 08-11 15:30 | 379.39 | 378.07 | 20 | 7587.8 | -26.4 | -0.35% | 0.49R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 70.12 | ↑375.85 | 3.2327 | 1.14 | **LOSS** |
| 22 | BIIB | 08-13 15:10 | 08-13 15:35 | 134.74 | 134.1 | 103 | 13878.22 | -65.92 | -0.47% | 0.67R | 25m | market | early-reversal | trend | trend | neutral | 72.37 | ↑133.26 | 1.5379 | 1.54 | **LOSS** |
| 23 | VRTX | 08-20 13:35 | 08-20 15:20 | 396.19 | 397.27 | 33 | 13074.27 | +35.64 | +0.27% | 0.39R | 105m | market | timeout | breakout | breakout | neutral | 76.56 | ↓395.07 | -0.3845 | 1.8 | **WIN** |
| 24 | REGN | 08-20 15:25 | 08-20 15:45 | 594.77 | 590.16 | 21 | 12490.17 | -96.81 | -0.78% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 69.47 | ↑586.2 | 2.1602 | 3.68 | **LOSS** |
| 25 | REGN | 08-21 14:40 | 08-21 16:25 | 601.47 | 601.25 | 23 | 13833.81 | -5.06 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 72.73 | ↓597.18 | 2.1026 | 1.66 | **LOSS** |
| 26 | BIIB | 09-12 14:05 | 09-12 14:25 | 149.99 | 149.36 | 93 | 13949.07 | -58.59 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 71.23 | ↑149.32 | 0.8612 | 2.32 | **LOSS** |
| 27 | REGN | 09-15 14:35 | 09-15 15:00 | 570.03 | 568.19 | 24 | 13680.72 | -44.16 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 77.38 | ↑567.68 | 1.2953 | 2.6 | **LOSS** |
| 28 | BIIB | 10-01 13:55 | 10-01 15:00 | 146.27 | 145.94 | 95 | 13895.65 | -31.35 | -0.23% | 0.18R | 65m | market | trailing-stop | breakout | breakout | neutral | 80.55 | ↓144.59 | 1.3711 | 2.01 | **LOSS** |
| 29 | REGN | 10-01 15:05 | 10-01 16:00 | 609.32 | 608.7 | 22 | 13405.04 | -13.64 | -0.1% | 0.09R | 55m | market | breakeven-stop | trend | trend | neutral | 75.03 | ↑600.46 | 10.5729 | 2.54 | **LOSS** |
| 30 | GILD | 10-03 14:35 | 10-03 16:20 | 111.66 | 112.41 | 125 | 13957.5 | +93.75 | +0.67% | 0.7R | 105m | market | timeout | trend | trend | neutral | 63.54 | ↑110.92 | 0.4179 | 1 | **WIN** |
| 31 | REGN | 10-14 14:25 | 10-14 14:40 | 566.61 | 561.42 | 24 | 13598.64 | -124.56 | -0.92% | 1R | 15m | market | stop-loss | trend | trend | neutral | 61.4 | ↓561.23 | 1.6891 | 1.51 | **LOSS** |
| 32 | BIIB | 10-20 13:55 | 10-20 15:40 | 146.25 | 147.01 | 95 | 13893.75 | +72.2 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | neutral | 77.58 | ↑145.31 | 0.4348 | 2.85 | **WIN** |
| 33 | GILD | 10-21 14:50 | 10-21 15:55 | 123.93 | 123.72 | 113 | 14004.09 | -23.73 | -0.17% | 0.24R | 65m | market | stagnation | trend | trend | neutral | 75.68 | ↑122.83 | 0.1516 | 1.29 | **LOSS** |
| 34 | REGN | 10-29 14:15 | 10-29 14:35 | 656.85 | 652.74 | 21 | 13793.85 | -86.31 | -0.63% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 59.53 | ↑648.43 | 2.7245 | 1.23 | **LOSS** |
| 35 | GILD | 10-30 15:20 | 10-30 15:40 | 119.98 | 119.41 | 116 | 13917.68 | -66.12 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 77.25 | ↑118.87 | 0.4309 | 1.1 | **LOSS** |
| 36 | BIIB | 10-30 15:25 | 10-30 15:45 | 154.39 | 152.69 | 90 | 13895.1 | -153 | -1.1% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 72.36 | ↑148.74 | 1.3143 | 1.52 | **LOSS** |
| 37 | REGN | 11-10 14:45 | 11-10 15:35 | 662.05 | 659.94 | 21 | 13903.05 | -44.31 | -0.32% | 0.46R | 50m | market | stagnation | trend | trend | neutral | 72.22 | ↓660.71 | 3.2688 | 1.24 | **LOSS** |
| 38 | BIIB | 11-12 14:55 | 11-12 15:15 | 162.19 | 161.02 | 85 | 13786.15 | -99.45 | -0.72% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 80.63 | ↓160.38 | 0.7892 | 1.21 | **LOSS** |
| 39 | REGN | 11-24 14:40 | 11-24 15:00 | 771.89 | 767.55 | 18 | 13894.02 | -78.12 | -0.56% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 69.39 | ↓767.54 | 2.1101 | 2.03 | **LOSS** |
| 40 | BIIB | 11-25 14:35 | 11-25 16:20 | 179.71 | 182.16 | 77 | 13837.67 | +188.65 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | neutral | 82.5 | ↑179.07 | 0.1706 | 1.28 | **WIN** |
| 41 | GILD | 12-03 14:40 | 12-03 14:55 | 125.56 | 124.53 | 111 | 13937.16 | -114.33 | -0.82% | 1.17R | 15m | market | stop-loss | breakout | trend | neutral | 78.47 | ↓124.98 | 0.3229 | 1.21 | **LOSS** |
| 42 | REGN | 12-15 14:35 | 12-15 16:20 | 751.45 | 752.72 | 18 | 13526.1 | +22.86 | +0.17% | 0.24R | 105m | market | timeout | breakout | trend | neutral | 74.09 | ↓749.87 | 1.78 | 1.35 | **WIN** |
| 43 | GILD | 12-19 14:45 | 12-19 16:30 | 123.23 | 125.48 | 113 | 13924.99 | +254.25 | +1.83% | 2.61R | 105m | market | timeout | breakout | breakout | neutral | 74.76 | ↑122.19 | 0.1378 | 1.13 | **WIN** |
| 44 | BIIB | 01-05 14:40 | 01-05 14:50 | 179.2 | 177.24 | 77 | 13798.4 | -150.92 | -1.09% | 1.36R | 10m | market | stop-loss | trend | trend | neutral | 77.41 | ↓178.26 | 0.5175 | 2.22 | **LOSS** |
| 45 | REGN | 01-09 14:50 | 01-09 15:15 | 814.58 | 811.44 | 17 | 13847.86 | -53.38 | -0.39% | 0.56R | 25m | market | early-reversal | breakout | breakout | neutral | 74.15 | ↓810.67 | 0.459 | 1.37 | **LOSS** |
| 46 | REGN | 01-21 14:40 | 01-21 16:00 | 743.15 | 743.16 | 18 | 13376.7 | +0.18 | +0% | 0R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.73 | ↓741.11 | 0.9776 | 1.13 | **WIN** |
| 47 | GILD | 01-21 15:25 | 01-21 15:50 | 126.64 | 126.14 | 110 | 13930.4 | -55 | -0.39% | 0.37R | 25m | market | early-reversal | trend | trend | neutral | 68.41 | ↑124.81 | 0.2427 | 1.81 | **LOSS** |
| 48 | GILD | 02-02 14:40 | 02-02 15:30 | 143.16 | 142.84 | 97 | 13886.52 | -31.04 | -0.22% | 0.29R | 50m | market | stagnation | breakout | trend | neutral | 70.82 | ↓141.84 | 0.3322 | 1.04 | **LOSS** |
| 49 | REGN | 02-02 14:45 | 02-02 15:05 | 760.32 | 753.91 | 18 | 13685.76 | -115.38 | -0.84% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 93.81 | ↓754.77 | 2.0486 | 1.98 | **LOSS** |
| 50 | VRTX | 02-04 14:45 | 02-04 16:30 | 473.32 | 475.19 | 29 | 13726.28 | +54.23 | +0.4% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 81.39 | ↑472.58 | 1.516 | 1.55 | **WIN** |
| 51 | BIIB | 02-04 15:15 | 02-04 15:35 | 182.24 | 180.82 | 76 | 13850.24 | -107.92 | -0.78% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 73.06 | ↑180.09 | 0.7598 | 1.24 | **LOSS** |
| 52 | VRTX | 02-06 14:40 | 02-06 16:25 | 466.12 | 471.22 | 30 | 13983.6 | +153 | +1.09% | 1.31R | 105m | market | timeout | breakout | breakout | neutral | 70.4 | ↑464.71 | -0.2413 | 3.13 | **WIN** |
| 53 | VRTX | 02-13 15:10 | 02-13 16:55 | 490.06 | 493.6 | 28 | 13721.68 | +99.12 | +0.72% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 75.36 | ↑486.32 | 6.5313 | 2.08 | **WIN** |
| 54 | GILD | 02-20 14:30 | 02-20 14:55 | 152.86 | 152.27 | 91 | 13910.26 | -53.69 | -0.39% | 0.56R | 25m | market | early-reversal | trend | trend | neutral | 73.66 | ↓152.06 | 0.017 | 2.24 | **LOSS** |
| 55 | VRTX | 02-23 15:05 | 02-23 16:50 | 481.1 | 483.66 | 29 | 13951.9 | +74.24 | +0.53% | 0.61R | 105m | market | timeout | trend | trend | neutral | 63.6 | ↑480.18 | 0.9032 | 2.01 | **WIN** |
| 56 | REGN | 02-25 14:35 | 02-25 15:25 | 783.8 | 782.28 | 17 | 13324.6 | -25.84 | -0.19% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 79.27 | ↓778.83 | -0.3267 | 1.31 | **LOSS** |
| 57 | BIIB | 02-27 15:05 | 02-27 15:25 | 191.28 | 190.39 | 72 | 13772.16 | -64.08 | -0.47% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 70.31 | ↑190.29 | 0.7414 | 2.15 | **LOSS** |
| 58 | REGN | 03-09 15:10 | 03-09 15:40 | 770.98 | 767.83 | 18 | 13877.64 | -56.7 | -0.41% | 0.47R | 30m | market | early-reversal | trend | breakout | neutral | 50.97 | ↑762.73 | 1.6253 | 2.1 | **LOSS** |
| 59 | VRTX | 03-09 15:20 | 03-09 16:10 | 458.7 | 457.21 | 30 | 13761 | -44.7 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 75.98 | ↑454.41 | 0.585 | 1.19 | **LOSS** |
| 60 | BIIB | 03-11 14:55 | 03-11 15:25 | 192.6 | 191.51 | 72 | 13867.2 | -78.48 | -0.57% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 80 | ↑190.66 | 0.7065 | 1.33 | **LOSS** |
| 61 | REGN | 03-25 14:00 | 03-25 15:10 | 752.97 | 751.16 | 18 | 13553.46 | -32.58 | -0.24% | 0.34R | 70m | market | stagnation | trend | trend | neutral | 77.84 | ↓749.13 | 3.6741 | 2.43 | **LOSS** |
| 62 | VRTX | 03-25 14:05 | 03-25 15:05 | 456.7 | 455.89 | 30 | 13701 | -24.3 | -0.18% | 0.23R | 60m | market | stagnation | trend | trend | neutral | 75.78 | ↑453.29 | 1.1673 | 1.08 | **LOSS** |
| 63 | BIIB | 04-14 14:10 | 04-14 14:55 | 180.33 | 179.72 | 77 | 13885.41 | -46.97 | -0.34% | 0.25R | 45m | market | early-reversal | breakout | breakout | neutral | 67.49 | ↑179.13 | 1.4313 | 1.85 | **LOSS** |
| 64 | REGN | 04-23 14:45 | 04-23 16:30 | 760.42 | 762.95 | 18 | 13687.56 | +45.54 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 62.74 | ↑755.08 | 3.557 | 1.68 | **WIN** |

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

- ⚠️ **Profit factor 0.64 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.65R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:01:07.799Z*
