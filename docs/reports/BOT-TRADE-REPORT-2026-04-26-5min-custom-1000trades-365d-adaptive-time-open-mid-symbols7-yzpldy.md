# Bot Trade Report — 208 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T09:56:28.405Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 7 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1987.36 (+1.99%) over 208 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 208 |
| Win rate | 42.79% (89W / 119L) |
| Net P&L | $+1987.36 (+1.99%) |
| Gross profit | $10952.29 |
| Gross loss | $8964.93 |
| Profit factor | 1.22 |
| Avg win | $123.06 |
| Avg loss | $75.34 |
| Payoff ratio | 1.63:1 |
| Expectancy | $+9.55 / trade |
| Max drawdown | 1.67% |
| Sharpe ratio (ann.) | 1.43 |
| Trades / active day | 1.61 |
| Avg confidence | 97.15% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.86R |
| Starting equity | $100,000 |
| Ending equity | $101,987.36 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 78 | 42.31% | $+1404.47 | $18.01 |
| Mid  10:30–11:30 | 130 | 43.08% | $+582.89 | $4.48 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ABNB | 19 | 10 | 52.63% | $+841.42 | $+44.29 | 2.62 | eligible |
| NVDA | 37 | 17 | 45.95% | $+639.76 | $+17.29 | 1.45 | eligible |
| NET | 34 | 16 | 47.06% | $+484.56 | $+14.25 | 1.33 | eligible |
| BA | 30 | 14 | 46.67% | $+368.36 | $+12.28 | 1.32 | eligible |
| MRVL | 38 | 15 | 39.47% | $+68.18 | $+1.79 | 1.04 | throttle |
| MU | 27 | 7 | 25.93% | $-199.43 | $-7.39 | 0.86 | throttle |
| LLY | 23 | 10 | 43.48% | $-215.49 | $-9.37 | 0.81 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 101 | 42 | 41.58% | $+643.9 | $+6.38 |
| trend | 107 | 47 | 43.93% | $+1343.46 | $+12.56 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 150 | 66 | 44% | $+1946.33 | $+12.98 |
| noisyHighBeta | 23 | 10 | 43.48% | $+508.48 | $+22.11 |
| cleanTrend | 2 | 2 | 100% | $+118.48 | $+59.24 |
| extendedBreakout | 33 | 11 | 33.33% | $-585.93 | $-17.76 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABNB | 12 | 3.17 | $+40.84 | 7 | 2.2 | $+50.2 | 0.13% | 1.73 | promote |
| Symbol | NVDA | 19 | 1.41 | $+17.4 | 18 | 1.5 | $+17.17 | 0.34% | 1.15 | promote |
| Symbol | NET | 19 | 1.65 | $+27.27 | 15 | 0.95 | $-2.24 | 0.32% | 0.77 | watch |
| Setup | trend | 77 | 1.58 | $+20.52 | 30 | 0.87 | $-7.89 | 1.02% | 0.7 | watch |
| Time slot | Mid 10:30-11:30 | 56 | 1.58 | $+22.58 | 74 | 0.82 | $-9.21 | 1.07% | 0.65 | watch |
| Setup | breakout | 47 | 1.59 | $+26.49 | 54 | 0.75 | $-11.14 | 0.78% | 0.57 | watch |
| Behavior | neutral | 100 | 1.65 | $+26.22 | 50 | 0.76 | $-13.52 | 1.32% | 0.6 | watch |
| Time slot | Open 9:30-10:30 | 68 | 1.59 | $+22.95 | 10 | 0.56 | $-15.63 | 0.26% | 0.39 | watch |
| Symbol | BA | 16 | 3.78 | $+52.23 | 14 | 0.44 | $-33.38 | 0.61% | 0.33 | watch |
| Symbol | MRVL | 27 | 1.46 | $+19.11 | 11 | 0.44 | $-40.7 | 0.63% | 0.35 | watch |
| Behavior | noisyHighBeta | 6 | 1.16 | $+7.27 | 17 | 2.07 | $+27.34 | 0.17% | 1.68 | reject |
| Symbol | LLY | 14 | 1.06 | $+3.19 | 9 | 0.34 | $-28.9 | 0.26% | 0.24 | reject |
| Symbol | MU | 17 | 1.11 | $+5.32 | 10 | 0.46 | $-28.98 | 0.4% | 0.38 | reject |
| Behavior | extendedBreakout | 16 | 1.08 | $+2.55 | 17 | 0.26 | $-36.87 | 0.71% | 0.2 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1506.71 | 1.16 |
| +3 bps/side | $+545.57 | 1.06 |
| +5 bps/side | $-415.52 | 0.96 |
| +10 bps/side | $-2818.43 | 0.76 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 90 |
| timeout | 62 |
| stagnation | 15 |
| trim-profit-target | 11 |
| profit-target | 9 |
| stop-loss | 8 |
| breakeven-stop | 7 |
| trailing-stop | 6 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 4 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 5 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 6 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 7 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 8 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 43 | 8213.86 | +126.85 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 9 | MU | 05-13 13:30 | 05-13 15:15 | 93.88 | 95.74 | 138 | 12955.44 | +256.68 | +1.98% | 2.57R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 10 | NVDA | 05-13 14:05 | 05-13 15:50 | 128.49 | 129.94 | 65 | 8351.85 | +94.25 | +1.13% | 1.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 89.27 | ↑126.56 | 1.3247 | 3.33 | **WIN** |
| 11 | MU | 05-13 15:25 | 05-13 17:10 | 96.03 | 96.39 | 146 | 14020.38 | +52.56 | +0.37% | 0.47R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 12 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 13 | MU | 05-16 13:55 | 05-16 14:35 | 98.12 | 97.49 | 85 | 8340.2 | -53.55 | -0.64% | 0.65R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 94.37 | ↓97.2 | 0.6325 | 1.95 | **LOSS** |
| 14 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 225 | 13947.75 | +69.75 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 15 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 16 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 17 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 18 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 104 | 13912.08 | -104 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 19 | MU | 05-22 15:05 | 05-22 15:25 | 97.04 | 96.49 | 144 | 13973.76 | -79.2 | -0.57% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 20 | LLY | 05-27 14:00 | 05-27 14:20 | 723.09 | 718.62 | 19 | 13738.71 | -84.93 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 21 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 22 | LLY | 05-30 14:00 | 05-30 15:45 | 731.55 | 735.71 | 19 | 13899.45 | +79.04 | +0.57% | 0.79R | 105m | market | timeout | breakout | breakout | neutral | 73.04 | ↑723.06 | 1.4555 | 1.83 | **WIN** |
| 23 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.7 | 136.34 | 101 | 13907.7 | -137.36 | -0.99% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 24 | NVDA | 06-03 14:00 | 06-03 15:45 | 141.08 | 141.13 | 59 | 8323.72 | +2.95 | +0.04% | 0.05R | 105m | market | timeout | breakout | breakout | extendedBreakout | 91.79 | ↑139.82 | 0.6273 | 5.8 | **WIN** |
| 25 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 221 | 13947.31 | -55.25 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 26 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 27 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 13947.64 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 28 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 109 | 13947.64 | +163.5 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 29 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 30 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 31 | MU | 06-09 13:55 | 06-09 15:40 | 110.27 | 110.52 | 127 | 14004.29 | +31.75 | +0.23% | 0.21R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 32 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 109 | 7706.3 | -63.22 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 33 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 96 | 13898.88 | -56.64 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 34 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 35 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 200 | 14018 | -72 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 36 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 118 | 8365.02 | -42.48 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 37 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 38 | MU | 06-16 14:40 | 06-16 15:25 | 120.46 | 119.87 | 116 | 13973.36 | -68.44 | -0.49% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 39 | MU | 06-18 14:30 | 06-18 14:50 | 122.5 | 121.6 | 114 | 13965 | -102.6 | -0.73% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 40 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 41 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 42 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 43 | NVDA | 06-25 14:15 | 06-25 15:05 | 151.98 | 151.76 | 92 | 13982.16 | -20.24 | -0.14% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 44 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.79 | 132.19 | 107 | 13994.53 | +149.8 | +1.07% | 1.32R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 45 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.5 | 78.95 | 178 | 13973 | +80.1 | +0.57% | 0.42R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 46 | MU | 07-02 14:45 | 07-02 15:45 | 122.14 | 122.08 | 114 | 13923.96 | -6.84 | -0.05% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 47 | BA | 07-02 15:10 | 07-02 16:55 | 212.2 | 212.61 | 66 | 14005.2 | +27.06 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 48 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 49 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 50 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.04 | 138.8 | 101 | 13942.04 | +76.76 | +0.55% | 0.66R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 51 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 95 | 13956.37 | +100.7 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 52 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 13956.37 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 53 | NET | 07-21 13:55 | 07-21 14:20 | 199.86 | 197.69 | 70 | 13990.2 | -151.9 | -1.09% | 0.97R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 54 | LLY | 07-23 14:25 | 07-23 16:10 | 786.32 | 795.24 | 17 | 13367.44 | +151.64 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 55 | BA | 07-23 15:05 | 07-23 16:30 | 231.57 | 233.9 | 30 | 13894.2 | +69.9 | +1.01% | 1.44R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 56 | BA | 07-23 15:05 | 07-23 16:50 | 231.57 | 233.91 | 30 | 13894.2 | +70.2 | +1.01% | 1.44R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 57 | MU | 07-24 15:00 | 07-24 15:30 | 112.58 | 111.86 | 124 | 13959.92 | -89.28 | -0.64% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 58 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 108 | 8348.4 | +2.16 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 59 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 108 | 8447.76 | -41.04 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 60 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 37 | 7693.04 | -69.93 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 61 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.12 | 76.76 | 181 | 13958.72 | -65.16 | -0.47% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 62 | MU | 08-08 14:15 | 08-08 15:20 | 113.8 | 118.35 | 122 | 13883.6 | +555.1 | +4% | 4.21R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 63 | MU | 08-08 15:25 | 08-08 15:45 | 119.16 | 118.42 | 71 | 8460.36 | -52.54 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 64 | MRVL | 08-11 13:45 | 08-11 14:30 | 79.89 | 79.34 | 104 | 8308.56 | -57.2 | -0.69% | 0.59R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 95.77 | ↓79.13 | 0.5696 | 1.27 | **LOSS** |
| 65 | BA | 08-12 14:10 | 08-12 14:30 | 231.01 | 229.98 | 60 | 13860.6 | -61.8 | -0.45% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 66 | LLY | 08-13 13:55 | 08-13 14:15 | 657.69 | 652.09 | 21 | 13811.49 | -117.6 | -0.85% | 0.8R | 20m | market | early-reversal | breakout | breakout | neutral | 84.6 | ↓651.81 | 3.518 | 1.78 | **LOSS** |
| 67 | MRVL | 08-13 14:10 | 08-13 15:00 | 79.92 | 79.11 | 175 | 13986 | -141.75 | -1.01% | 0.75R | 50m | market | early-reversal | trend | trend | neutral | 77.08 | ↓79.26 | 0.4703 | 2.17 | **LOSS** |
| 68 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 69 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 70 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 71 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 36 | 8242.92 | +72.72 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 72 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.46 | 177.94 | 79 | 13940.34 | +116.92 | +0.84% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 73 | MU | 08-22 14:05 | 08-22 14:55 | 120.04 | 119.97 | 69 | 8282.76 | -4.83 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 74 | MU | 08-28 13:35 | 08-28 13:55 | 121.02 | 118.84 | 69 | 8350.38 | -150.42 | -1.8% | 2.12R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 75 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 122 | 7694.54 | +126.88 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 76 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 112 | 14014.56 | -1.12 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 77 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 30 | 13812.23 | +78.6 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 78 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 13812.23 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 79 | MU | 09-12 14:20 | 09-12 16:05 | 156.1 | 156.46 | 89 | 13892.9 | +32.04 | +0.23% | 0.12R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 80 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 81 | LLY | 09-16 15:20 | 09-16 17:05 | 761.89 | 769.53 | 18 | 13714.02 | +137.52 | +1% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑753.77 | 2.3186 | 1.58 | **WIN** |
| 82 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.55 | 71.09 | 198 | 13968.9 | +106.92 | +0.77% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 83 | MU | 09-17 14:15 | 09-17 14:35 | 160.26 | 159.31 | 87 | 13942.62 | -82.65 | -0.59% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 65 | ↑158.53 | 0.4402 | 1.01 | **LOSS** |
| 84 | LLY | 09-17 14:40 | 09-17 15:05 | 775.4 | 772.1 | 18 | 13957.2 | -59.4 | -0.43% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 78.52 | ↑767.66 | 1.991 | 1.39 | **LOSS** |
| 85 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 86 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 177 | 13998.93 | +585.87 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 87 | MU | 09-30 14:10 | 09-30 14:35 | 168.79 | 167.02 | 50 | 8439.5 | -88.5 | -1.05% | 0.87R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 89.56 | ↓166.67 | 1.1768 | 1.64 | **LOSS** |
| 88 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 76 | 14043.28 | +136.04 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 89 | LLY | 10-01 14:05 | 10-01 15:50 | 798.74 | 813.86 | 10 | 7987.4 | +151.2 | +1.89% | 1.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 91.2 | ↑788.11 | 9.6947 | 1.27 | **WIN** |
| 90 | LLY | 10-03 14:15 | 10-03 15:15 | 831.8 | 838.82 | 9 | 15804.2 | +63.18 | +0.84% | 1.08R | 60m | market | trim-profit-target | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 91 | LLY | 10-03 14:15 | 10-03 16:00 | 831.8 | 837.33 | 10 | 15804.2 | +55.3 | +0.66% | 0.85R | 105m | market | timeout | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 92 | BA | 10-06 14:10 | 10-06 15:55 | 218.45 | 220.93 | 64 | 13980.8 | +158.72 | +1.14% | 1.37R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 93 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 43 | 8378.12 | -47.73 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 94 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 95 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 73 | 13866.35 | -137.24 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 96 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.69 | 122.26 | 58 | 14000.04 | +91.06 | +1.3% | 1.65R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 97 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.69 | 123.35 | 58 | 14000.04 | +154.28 | +2.2% | 2.78R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 98 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 99 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 87 | 7729.08 | -77.43 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 100 | LLY | 10-24 14:05 | 10-24 14:25 | 831.68 | 828.45 | 16 | 13306.88 | -51.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | trend | neutral | 73.64 | ↑823.63 | 1.3329 | 1.06 | **LOSS** |
| 101 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 166 | 14073.48 | -8.3 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 102 | BA | 10-24 15:20 | 10-24 16:10 | 221.61 | 221.42 | 63 | 13961.43 | -11.97 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.98 | ↑220.23 | 0.7466 | 1.32 | **LOSS** |
| 103 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.84 | 128.4 | 109 | 14043.56 | -47.96 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 104 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 105 | NET | 10-30 14:00 | 10-30 14:30 | 229.43 | 228.31 | 61 | 13995.23 | -68.32 | -0.49% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 106 | NET | 10-30 15:20 | 10-30 15:40 | 230.99 | 229.88 | 60 | 13859.4 | -66.6 | -0.48% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 107 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.34 | 95.78 | 146 | 14065.64 | -81.76 | -0.58% | 0.29R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 108 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 150 | 14088 | -165 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 109 | BA | 11-03 14:30 | 11-03 16:15 | 202.59 | 204.88 | 69 | 13978.71 | +158.01 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 110 | LLY | 11-03 14:30 | 11-03 15:20 | 879.13 | 875.99 | 14 | 12307.82 | -43.96 | -0.36% | 0.45R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 111 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.5 | 207.33 | 67 | 13969.5 | -78.39 | -0.56% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 112 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 55 | 14062.4 | -97.9 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 113 | LLY | 11-04 15:25 | 11-04 15:40 | 913.18 | 897.83 | 14 | 12784.52 | -214.9 | -1.68% | 1.17R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 114 | LLY | 11-05 14:45 | 11-05 16:30 | 930.9 | 945.23 | 9 | 8378.1 | +128.97 | +1.54% | 1.56R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.32 | ↑923.66 | 6.6497 | 1.43 | **WIN** |
| 115 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.18 | 122.79 | 115 | 14050.7 | +70.15 | +0.5% | 0.56R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 116 | MU | 11-12 15:05 | 11-12 15:25 | 248.73 | 246.83 | 31 | 7710.63 | -58.9 | -0.76% | 0.43R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.37 | ↑244 | 0.4636 | 1.16 | **LOSS** |
| 117 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.92 | 122.32 | 114 | 14012.88 | -68.4 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 118 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.12 | 189.92 | 75 | 13959 | +285 | +2.04% | 1.28R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 119 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.26 | 87.18 | 159 | 14033.34 | -171.72 | -1.22% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 120 | LLY | 11-21 14:45 | 11-21 15:05 | 1058.93 | 1047.41 | 13 | 13766.09 | -149.76 | -1.09% | 1.45R | 20m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 121 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 36 | 13873.65 | +86.04 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 122 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 13873.65 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 123 | MRVL | 11-24 14:40 | 11-24 16:20 | 79.61 | 81.53 | 97 | 7722.17 | +186.24 | +2.41% | 1.46R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 66.17 | ↑79.1 | 0.2558 | 1.41 | **WIN** |
| 124 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.92 | 117.31 | 120 | 14030.4 | +46.8 | +0.33% | 0.32R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 125 | MU | 11-28 14:45 | 11-28 15:10 | 237.18 | 235.67 | 32 | 7589.76 | -48.32 | -0.64% | 0.49R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 66.42 | ↓236.21 | 1.2412 | 1.41 | **LOSS** |
| 126 | NET | 12-02 14:35 | 12-02 15:55 | 203.19 | 203.22 | 69 | 14020.11 | +2.07 | +0.01% | 0.01R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 127 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 45 | 8342.1 | -61.65 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 128 | BA | 12-02 14:55 | 12-02 16:40 | 200.4 | 201.76 | 42 | 8416.8 | +57.12 | +0.68% | 0.36R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.88 | ↑197.67 | 2.7712 | 1.42 | **WIN** |
| 129 | BA | 12-08 14:30 | 12-08 16:15 | 204.17 | 205.29 | 69 | 14087.73 | +77.28 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 130 | MRVL | 12-10 14:30 | 12-10 15:25 | 91.56 | 91.39 | 77 | 7050.12 | -13.09 | -0.19% | 0.17R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 86.79 | ↓91.52 | 0.4154 | 1.89 | **LOSS** |
| 131 | LLY | 12-11 15:15 | 12-11 16:45 | 1018.85 | 1018.71 | 13 | 13245.05 | -1.82 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 132 | BA | 12-12 14:30 | 12-12 14:50 | 203.27 | 202.46 | 69 | 14025.63 | -55.89 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 133 | NVDA | 12-12 14:30 | 12-12 14:55 | 181.84 | 181.07 | 77 | 14001.68 | -59.29 | -0.42% | 0.58R | 25m | market | early-reversal | trend | trend | neutral | 64.86 | ↓181.77 | 0.2908 | 3.41 | **LOSS** |
| 134 | BA | 12-16 14:50 | 12-16 15:10 | 208.59 | 207.85 | 67 | 13975.53 | -49.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 135 | MU | 12-17 14:35 | 12-17 15:30 | 235.18 | 233.66 | 32 | 7525.76 | -48.64 | -0.65% | 0.54R | 55m | market | stagnation | trend | trend | noisyHighBeta | 74.36 | ↓235.12 | 0.4878 | 2.15 | **LOSS** |
| 136 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.6 | 135.77 | 102 | 13933.2 | -84.66 | -0.61% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 137 | BA | 12-19 14:35 | 12-19 16:20 | 212.44 | 214.69 | 39 | 8285.16 | +87.75 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.82 | ↑211.65 | 0.3886 | 1.35 | **WIN** |
| 138 | NET | 12-22 14:50 | 12-22 15:40 | 202.79 | 201.7 | 41 | 8314.39 | -44.69 | -0.54% | 0.51R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 139 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 162 | 14000.04 | +194.4 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 140 | MU | 12-30 14:30 | 12-30 14:50 | 297.62 | 295.46 | 28 | 8333.36 | -60.48 | -0.73% | 1.04R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.94 | ↓296.08 | 1.1151 | 3.77 | **LOSS** |
| 141 | BA | 12-30 14:35 | 12-30 14:55 | 221.52 | 220.05 | 38 | 8417.76 | -55.86 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.37 | ↓220.3 | 0.4956 | 4.46 | **LOSS** |
| 142 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 143 | MRVL | 01-02 14:55 | 01-02 15:20 | 89.02 | 88.28 | 158 | 14065.16 | -116.92 | -0.83% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 79.84 | ↓88.42 | 0.7955 | 1.32 | **LOSS** |
| 144 | BA | 01-05 14:35 | 01-05 15:20 | 229.92 | 228.42 | 37 | 8507.04 | -55.5 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 93.04 | ↓229.18 | 1.0395 | 2.27 | **LOSS** |
| 145 | ABNB | 01-05 14:45 | 01-05 16:30 | 134.98 | 136.83 | 104 | 14037.92 | +192.4 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 146 | NET | 01-07 14:40 | 01-07 15:00 | 200.74 | 198.84 | 41 | 8230.34 | -77.9 | -0.95% | 1.07R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.26 | ↓200.35 | 1.0626 | 1.33 | **LOSS** |
| 147 | LLY | 01-07 14:50 | 01-07 15:25 | 1110.39 | 1102.27 | 7 | 7772.73 | -56.84 | -0.73% | 0.51R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 83 | ↓1097.59 | 11.6152 | 1.17 | **LOSS** |
| 148 | MU | 01-09 14:35 | 01-09 16:20 | 333.73 | 340.66 | 21 | 7008.33 | +145.53 | +2.08% | 1.91R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 78.68 | ↑332.25 | 0.8065 | 3.54 | **WIN** |
| 149 | BA | 01-15 14:30 | 01-15 16:15 | 245.06 | 247.46 | 57 | 13968.42 | +136.8 | +0.98% | 1.4R | 105m | market | timeout | trend | breakout | neutral | 78.39 | ↑244.84 | 0.3451 | 1.82 | **WIN** |
| 150 | NVDA | 01-15 14:40 | 01-15 15:15 | 188.84 | 187.89 | 44 | 8308.96 | -41.8 | -0.5% | 0.53R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 151 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 171 | 14003.19 | +94.05 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 152 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.28 | 189.13 | 73 | 13890.44 | -83.95 | -0.6% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 153 | MU | 01-20 14:50 | 01-20 15:10 | 379.16 | 370.79 | 22 | 8341.52 | -184.14 | -2.21% | 1.11R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.2 | ↓375.17 | 5.1165 | 2.28 | **LOSS** |
| 154 | LLY | 01-21 14:35 | 01-21 16:20 | 1058.24 | 1066.62 | 7 | 7407.68 | +58.66 | +0.79% | 1.04R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.7 | ↑1051.19 | 2.4185 | 2.97 | **WIN** |
| 155 | BA | 01-22 14:30 | 01-22 14:55 | 252.76 | 251.71 | 55 | 13901.8 | -57.75 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 156 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.56 | 135.8 | 103 | 14065.68 | -78.28 | -0.56% | 0.74R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 157 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 158 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 169 | 14067.56 | -47.32 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 159 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 160 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 165 | 14029.95 | -201.3 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 161 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.43 | 1024.99 | 13 | 13486.59 | -161.72 | -1.2% | 1.71R | 15m | market | stop-loss | trend | trend | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 162 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 43 | 7661.31 | +223.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 163 | BA | 02-03 14:30 | 02-03 14:50 | 237.23 | 235.36 | 59 | 13996.57 | -110.33 | -0.79% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 164 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 165 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 166 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 40 | 7582.4 | +86.8 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 167 | NET | 02-10 14:55 | 02-10 15:45 | 179.6 | 179.39 | 39 | 7004.4 | -8.19 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 71.54 | ↑178.09 | 1.2492 | 2.38 | **LOSS** |
| 168 | MU | 02-12 14:35 | 02-12 14:55 | 433.79 | 428.1 | 19 | 8242.01 | -108.11 | -1.31% | 0.69R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.88 | ↓429.42 | 5.5035 | 2.2 | **LOSS** |
| 169 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.38 | 1028.41 | 13 | 13433.94 | -64.61 | -0.48% | 0.36R | 40m | market | early-reversal | breakout | breakout | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 170 | NET | 02-13 14:40 | 02-13 15:20 | 188.6 | 190.45 | 41 | 7732.6 | +75.85 | +0.98% | 0.58R | 40m | market | trailing-stop | breakout | breakout | noisyHighBeta | 65.65 | ↑187.11 | 0.893 | 1.58 | **WIN** |
| 171 | NET | 02-17 14:40 | 02-17 14:50 | 200.8 | 196.27 | 38 | 7630.4 | -172.14 | -2.26% | 1.4R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 68.07 | ↓198.53 | 0.5571 | 1.49 | **LOSS** |
| 172 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 173 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 175 | 14003.5 | -31.5 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 174 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 43 | 8303.3 | -62.78 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 175 | LLY | 02-23 14:35 | 02-23 16:20 | 1042.98 | 1052.96 | 6 | 6257.88 | +59.88 | +0.96% | 0.59R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 69.63 | ↑1041.63 | 5.1434 | 2.06 | **WIN** |
| 176 | MU | 02-24 14:35 | 02-24 14:50 | 425.76 | 424.4 | 32 | 13624.32 | -43.52 | -0.32% | 0.22R | 15m | market | trailing-stop | breakout | breakout | neutral | 78.66 | ↓424.99 | 0.7161 | 4.48 | **LOSS** |
| 177 | BA | 02-24 14:40 | 02-24 15:30 | 233 | 233.16 | 60 | 13980 | +9.6 | +0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 178 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 179 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.42 | 130.19 | 110 | 14016.2 | +304.7 | +2.17% | 2.97R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 180 | NET | 02-26 14:55 | 02-26 15:15 | 175.06 | 173.84 | 40 | 7002.4 | -48.8 | -0.7% | 0.51R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 70.93 | ↓173.79 | 0.5739 | 1.59 | **LOSS** |
| 181 | NET | 03-02 14:30 | 03-02 16:10 | 173.2 | 178.51 | 41 | 7101.2 | +217.71 | +3.07% | 2.77R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 80.47 | ↑171.73 | 0.8311 | 1.33 | **WIN** |
| 182 | MRVL | 03-04 14:30 | 03-04 14:45 | 78.8 | 77.59 | 160 | 12608 | -193.6 | -1.54% | 1.44R | 15m | market | stop-loss | mixed | breakout | neutral | 62.04 | ↓78.92 | -0.1287 | 2.55 | **LOSS** |
| 183 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.25 | 180.95 | 77 | 14033.25 | -100.1 | -0.71% | 0.87R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 184 | ABNB | 03-04 14:50 | 03-04 16:35 | 136 | 137.43 | 103 | 14008 | +147.29 | +1.05% | 1.19R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 185 | NET | 03-04 15:10 | 03-04 15:35 | 185.57 | 184.49 | 76 | 14103.32 | -82.08 | -0.58% | 0.4R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 186 | LLY | 03-09 14:50 | 03-09 15:40 | 999.54 | 994.18 | 13 | 12994.02 | -69.68 | -0.54% | 0.66R | 50m | market | early-reversal | trend | trend | neutral | 73.23 | ↑989.32 | 1.3228 | 1.87 | **LOSS** |
| 187 | NET | 03-09 15:25 | 03-09 16:20 | 202.04 | 201.9 | 69 | 13940.76 | -9.66 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 188 | MU | 03-10 14:30 | 03-10 15:45 | 411.96 | 411.77 | 20 | 8239.2 | -3.8 | -0.05% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | extendedBreakout | 82.8 | ↑405.65 | 7.6575 | 1.34 | **LOSS** |
| 189 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.5 | 185.25 | 76 | 14022 | +57 | +0.41% | 0.44R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 190 | BA | 03-10 14:55 | 03-10 15:00 | 225.76 | 219.89 | 62 | 13997.12 | -363.94 | -2.6% | 3.66R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 191 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.72 | 127.58 | 110 | 14049.2 | -15.4 | -0.11% | 0.16R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 192 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.1 | 91.96 | 83 | 7644.3 | -11.62 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 193 | NET | 03-20 14:30 | 03-20 14:50 | 224.92 | 221.91 | 62 | 13945.04 | -186.62 | -1.34% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 194 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 195 | BA | 03-25 14:00 | 03-25 14:20 | 200.27 | 199.47 | 70 | 14018.9 | -56 | -0.4% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |
| 196 | MU | 03-27 15:25 | 03-27 16:05 | 367.44 | 365.26 | 20 | 7348.8 | -43.6 | -0.59% | 0.41R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 66.31 | ↑361.53 | 1.987 | 1.06 | **LOSS** |
| 197 | NET | 03-31 14:00 | 03-31 14:20 | 200.1 | 198.91 | 35 | 7003.5 | -41.65 | -0.59% | 0.44R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 88 | ↓198.4 | 1.1294 | 1.96 | **LOSS** |
| 198 | MRVL | 04-01 14:00 | 04-01 14:45 | 104.93 | 105.81 | 67 | 7030.31 | +58.96 | +0.84% | 0.42R | 45m | market | trailing-stop | breakout | breakout | noisyHighBeta | 77.49 | ↑103.56 | 1.3786 | 1.51 | **WIN** |
| 199 | LLY | 04-01 15:25 | 04-01 16:25 | 953.43 | 955.21 | 8 | 7627.44 | +14.24 | +0.19% | 0.26R | 60m | market | trailing-stop | breakout | breakout | extendedBreakout | 90.22 | ↑938.89 | 5.4355 | 6.88 | **WIN** |
| 200 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 201 | LLY | 04-14 14:10 | 04-14 14:35 | 938.79 | 936.06 | 14 | 13143.06 | -38.22 | -0.29% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 73.77 | ↑935.36 | 1.9766 | 1.78 | **LOSS** |
| 202 | NET | 04-15 14:10 | 04-15 15:55 | 188.47 | 189.35 | 37 | 6973.39 | +32.56 | +0.47% | 0.24R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 81.52 | ↑185.88 | 2.0169 | 1.43 | **WIN** |
| 203 | MRVL | 04-15 14:45 | 04-15 15:05 | 137.85 | 136.07 | 101 | 13922.85 | -179.78 | -1.29% | 0.84R | 20m | market | early-reversal | breakout | trend | neutral | 77.25 | ↑135.34 | 0.8502 | 1.02 | **LOSS** |
| 204 | BA | 04-17 14:00 | 04-17 14:45 | 229.4 | 228.54 | 36 | 8258.4 | -30.96 | -0.37% | 0.25R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 84.93 | ↑226.9 | 2.7682 | 1.47 | **LOSS** |
| 205 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.96 | 141.79 | 98 | 14010.08 | -114.66 | -0.82% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |
| 206 | MU | 04-22 14:25 | 04-22 16:10 | 474.47 | 478.1 | 29 | 13759.63 | +105.27 | +0.77% | 0.39R | 105m | market | timeout | breakout | breakout | neutral | 78.4 | ↑467.04 | 5.021 | 2.8 | **WIN** |
| 207 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.77 | 208.8 | 34 | 13924.36 | +137.02 | +1.97% | 1.42R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 208 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.77 | 209.69 | 34 | 13924.36 | +167.28 | +2.4% | 1.73R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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
- ⚠️ **Avg R = 0.86R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T09:56:28.405Z*
