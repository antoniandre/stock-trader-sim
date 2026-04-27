# Bot Trade Report — 160 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T10:10:43.802Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 6 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1417.06 (+1.42%) over 160 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 160 |
| Win rate | 43.13% (69W / 91L) |
| Net P&L | $+1417.06 (+1.42%) |
| Gross profit | $8729.12 |
| Gross loss | $7312.06 |
| Profit factor | 1.19 |
| Avg win | $126.51 |
| Avg loss | $80.35 |
| Payoff ratio | 1.57:1 |
| Expectancy | $+8.86 / trade |
| Max drawdown | 1.7% |
| Sharpe ratio (ann.) | 1.25 |
| Trades / active day | 1.48 |
| Avg confidence | 98.92% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.86R |
| Starting equity | $100,000 |
| Ending equity | $101,417.06 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 58 | 31.03% | $-186.64 | $-3.22 |
| Mid  10:30–11:30 | 102 | 50% | $+1603.7 | $15.72 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ABNB | 19 | 10 | 52.63% | $+841.42 | $+44.29 | 2.62 | eligible |
| SBUX | 22 | 13 | 59.09% | $+705.43 | $+32.07 | 2.05 | eligible |
| NET | 33 | 16 | 48.48% | $+544.99 | $+16.51 | 1.39 | eligible |
| BA | 24 | 9 | 37.5% | $-75.96 | $-3.17 | 0.93 | throttle |
| MRVL | 36 | 14 | 38.89% | $-151.54 | $-4.21 | 0.93 | throttle |
| SHOP | 26 | 7 | 26.92% | $-447.28 | $-17.2 | 0.71 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 58 | 24 | 41.38% | $+586.42 | $+10.11 |
| trend | 102 | 45 | 44.12% | $+830.64 | $+8.14 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 139 | 61 | 43.88% | $+1277.23 | $+9.19 |
| noisyHighBeta | 21 | 8 | 38.1% | $+139.83 | $+6.66 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABNB | 11 | 2.96 | $+40.29 | 8 | 2.36 | $+49.77 | 0.13% | 1.82 | promote |
| Symbol | SBUX | 15 | 2.76 | $+40.64 | 7 | 1.29 | $+13.68 | 0.15% | 1.03 | watch |
| Symbol | NET | 17 | 1.44 | $+20.82 | 16 | 1.31 | $+11.94 | 0.32% | 1.05 | watch |
| Time slot | Mid 10:30-11:30 | 47 | 2.79 | $+46.4 | 55 | 0.83 | $-10.49 | 1.35% | 0.68 | watch |
| Setup | breakout | 18 | 2.57 | $+57.75 | 40 | 0.8 | $-11.33 | 0.98% | 0.65 | watch |
| Setup | trend | 78 | 1.5 | $+17.22 | 24 | 0.69 | $-21.35 | 0.86% | 0.57 | watch |
| Behavior | neutral | 90 | 1.8 | $+27.75 | 49 | 0.64 | $-24.91 | 1.82% | 0.52 | watch |
| Symbol | BA | 14 | 3.12 | $+45.43 | 10 | 0.11 | $-71.2 | 0.79% | 0.07 | watch |
| Behavior | noisyHighBeta | 6 | 0.52 | $-19.19 | 15 | 1.47 | $+17 | 0.36% | 1.24 | reject |
| Symbol | MRVL | 23 | 1.26 | $+12.32 | 13 | 0.55 | $-33.45 | 0.63% | 0.45 | reject |
| Time slot | Open 9:30-10:30 | 49 | 1.09 | $+4.12 | 9 | 0.19 | $-43.17 | 0.39% | 0.14 | reject |
| Symbol | SHOP | 16 | 1.1 | $+3.52 | 10 | 0.48 | $-50.36 | 0.96% | 0.41 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1020.84 | 1.14 |
| +3 bps/side | $+228.4 | 1.03 |
| +5 bps/side | $-563.91 | 0.93 |
| +10 bps/side | $-2544.94 | 0.74 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 67 |
| timeout | 47 |
| stagnation | 13 |
| trim-profit-target | 8 |
| breakeven-stop | 7 |
| profit-target | 7 |
| stop-loss | 7 |
| trailing-stop | 4 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 2 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 3 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 4 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 5 | SBUX | 05-02 14:25 | 05-02 14:55 | 83.89 | 83.52 | 166 | 13925.74 | -61.42 | -0.44% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 6 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 7 | SHOP | 05-13 14:15 | 05-13 15:05 | 108.29 | 107.85 | 71 | 7688.59 | -31.24 | -0.41% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.98 | ↑107.45 | 0.7682 | 1.11 | **LOSS** |
| 8 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 9 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 225 | 13947.75 | +69.75 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 10 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 11 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 12 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 221 | 13947.31 | -55.25 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 13 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 14 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 13947.64 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 15 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 109 | 13947.64 | +163.5 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 16 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 17 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 18 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 19 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 20 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 109 | 7706.3 | -63.22 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 21 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 22 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 200 | 14018 | -72 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 23 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 24 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.59 | 70.6 | 195 | 13960.05 | -193.05 | -1.38% | 1.21R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 25 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 26 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 27 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 28 | SHOP | 06-24 15:20 | 06-24 15:40 | 114.83 | 114.49 | 121 | 13894.43 | -41.14 | -0.3% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 72.99 | ↑113.56 | 1.1687 | 1.34 | **LOSS** |
| 29 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 30 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.79 | 132.19 | 107 | 13994.53 | +149.8 | +1.07% | 1.32R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 31 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 32 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.21 | 95.18 | 150 | 13981.5 | +295.5 | +2.11% | 2.81R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 33 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.5 | 78.95 | 178 | 13973 | +80.1 | +0.57% | 0.42R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 34 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 120 | 13910.4 | -37.2 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 35 | BA | 07-02 15:10 | 07-02 16:55 | 212.2 | 212.61 | 66 | 14005.2 | +27.06 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 36 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 37 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 38 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.01 | 95.11 | 147 | 13966.47 | +14.7 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 39 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.04 | 138.8 | 101 | 13942.04 | +76.76 | +0.55% | 0.66R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 40 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 41 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 120 | 13906.8 | +46.8 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 42 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 113 | 13905.78 | +219.22 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 43 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 95 | 13956.37 | +100.7 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 44 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 13956.37 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 45 | NET | 07-21 13:55 | 07-21 14:20 | 199.86 | 197.69 | 70 | 13990.2 | -151.9 | -1.09% | 0.97R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 46 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 47 | BA | 07-23 15:05 | 07-23 16:30 | 231.57 | 233.9 | 30 | 13894.2 | +69.9 | +1.01% | 1.44R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 48 | BA | 07-23 15:05 | 07-23 16:50 | 231.57 | 233.91 | 30 | 13894.2 | +70.2 | +1.01% | 1.44R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 49 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 112 | 13950.72 | -14.56 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 50 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.57 | 78.09 | 178 | 13985.46 | -85.44 | -0.61% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 51 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 37 | 7693.04 | -69.93 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 52 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.36 | 89.37 | 86 | 7684.96 | +0.86 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **WIN** |
| 53 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.12 | 76.76 | 181 | 13958.72 | -65.16 | -0.47% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 54 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.02 | 91.75 | 152 | 13987.04 | -41.04 | -0.29% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 55 | BA | 08-12 14:10 | 08-12 14:30 | 231.01 | 229.98 | 60 | 13860.6 | -61.8 | -0.45% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 56 | MRVL | 08-13 14:10 | 08-13 15:00 | 79.92 | 79.11 | 175 | 13986 | -141.75 | -1.01% | 0.75R | 50m | market | early-reversal | trend | trend | neutral | 77.08 | ↓79.26 | 0.4703 | 2.17 | **LOSS** |
| 57 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 58 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 59 | SHOP | 08-18 15:05 | 08-18 15:45 | 142.8 | 142.41 | 98 | 13994.4 | -38.22 | -0.27% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 67.34 | ↑141.46 | 0.2534 | 2.03 | **LOSS** |
| 60 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 61 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.69 | 87.91 | 159 | 13942.71 | +34.98 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 62 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 121 | 7631.47 | +125.84 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 63 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 112 | 14014.56 | -1.12 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 64 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.8 | 64.95 | 215 | 13932 | +32.25 | +0.23% | 0.16R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 65 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 30 | 13812.23 | +78.6 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 66 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 13812.23 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 67 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 68 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 69 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.63 | 84.38 | 165 | 13963.95 | -41.25 | -0.3% | 0.38R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 70 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 176 | 13919.84 | +582.56 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 71 | SBUX | 10-02 14:20 | 10-02 15:10 | 86.79 | 86.39 | 161 | 13973.19 | -64.4 | -0.46% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 79.02 | ↓86.08 | 0.5608 | 1.68 | **LOSS** |
| 72 | BA | 10-06 14:10 | 10-06 15:55 | 218.45 | 220.93 | 64 | 13980.8 | +158.72 | +1.14% | 1.37R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 73 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.54 | 165.84 | 84 | 13989.36 | -58.8 | -0.42% | 0.3R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 74 | SBUX | 10-13 15:20 | 10-13 17:05 | 79.63 | 80.34 | 176 | 14014.88 | +124.96 | +0.89% | 1.27R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑78.95 | 0.1677 | 1.42 | **WIN** |
| 75 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.69 | 122.26 | 58 | 14000.04 | +91.06 | +1.3% | 1.65R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 76 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.69 | 123.35 | 58 | 14000.04 | +154.28 | +2.2% | 2.78R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 77 | SBUX | 10-15 14:00 | 10-15 15:30 | 82.69 | 82.7 | 169 | 13974.61 | +1.69 | +0.01% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 77.12 | ↑82.22 | 0.2984 | 1.07 | **WIN** |
| 78 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 87 | 7729.08 | -77.43 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 79 | SBUX | 10-17 15:00 | 10-17 16:45 | 85.16 | 85.61 | 164 | 13966.24 | +73.8 | +0.53% | 0.7R | 105m | market | timeout | trend | trend | neutral | 59.03 | ↑84.66 | 0.1425 | 1.41 | **WIN** |
| 80 | SHOP | 10-24 14:00 | 10-24 14:45 | 173.1 | 172.36 | 80 | 13848 | -59.2 | -0.43% | 0.31R | 45m | market | early-reversal | breakout | breakout | neutral | 76.93 | ↑171.31 | 1.4345 | 1.27 | **LOSS** |
| 81 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 165 | 13988.7 | -8.25 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 82 | BA | 10-24 15:20 | 10-24 16:10 | 221.61 | 221.42 | 63 | 13961.43 | -11.97 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.98 | ↑220.23 | 0.7466 | 1.32 | **LOSS** |
| 83 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.84 | 128.4 | 109 | 14043.56 | -47.96 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 84 | SBUX | 10-27 14:00 | 10-27 14:20 | 87.35 | 87.04 | 160 | 13976 | -49.6 | -0.35% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 74.79 | ↑86.66 | 0.1516 | 1.16 | **LOSS** |
| 85 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 159 | 13993.59 | +44.52 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 86 | NET | 10-30 14:00 | 10-30 14:30 | 229.43 | 228.31 | 61 | 13995.23 | -68.32 | -0.49% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 87 | NET | 10-30 15:20 | 10-30 15:40 | 230.99 | 229.88 | 60 | 13859.4 | -66.6 | -0.48% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 88 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.34 | 95.78 | 146 | 14065.64 | -81.76 | -0.58% | 0.29R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 89 | BA | 11-03 14:30 | 11-03 16:15 | 202.59 | 204.88 | 69 | 13978.71 | +158.01 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 90 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 149 | 13994.08 | -163.9 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 91 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 55 | 14062.4 | -97.9 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 92 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.8 | 79.29 | 175 | 13965 | -89.25 | -0.64% | 0.65R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 93 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.42 | 84.72 | 154 | 12846.68 | +200.2 | +1.56% | 1.84R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 94 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.41 | 86.69 | 164 | 14007.24 | +209.92 | +1.5% | 2.14R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 95 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.18 | 122.79 | 115 | 14050.7 | +70.15 | +0.5% | 0.56R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 96 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.92 | 122.32 | 114 | 14012.88 | -68.4 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 97 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.26 | 87.18 | 159 | 14033.34 | -171.72 | -1.22% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 98 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.58 | 85.93 | 162 | 14025.96 | -105.3 | -0.75% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 99 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 97 | 13902.04 | +147.44 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 100 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 36 | 13873.65 | +86.04 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 101 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 13873.65 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 102 | MRVL | 11-24 14:40 | 11-24 16:20 | 79.61 | 81.53 | 96 | 7642.56 | +184.32 | +2.41% | 1.46R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 66.17 | ↑79.1 | 0.2558 | 1.41 | **WIN** |
| 103 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.92 | 117.31 | 120 | 14030.4 | +46.8 | +0.33% | 0.32R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 104 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 83 | 12813.54 | +314.57 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 105 | NET | 12-02 14:35 | 12-02 15:55 | 203.19 | 203.22 | 69 | 14020.11 | +2.07 | +0.01% | 0.01R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 106 | BA | 12-08 14:30 | 12-08 16:15 | 204.17 | 205.29 | 69 | 14087.73 | +77.28 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 107 | MRVL | 12-10 14:30 | 12-10 15:25 | 91.56 | 91.39 | 77 | 7050.12 | -13.09 | -0.19% | 0.17R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 86.79 | ↓91.52 | 0.4154 | 1.89 | **LOSS** |
| 108 | BA | 12-12 14:30 | 12-12 14:50 | 203.27 | 202.46 | 69 | 14025.63 | -55.89 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 109 | BA | 12-16 14:50 | 12-16 15:10 | 208.59 | 207.85 | 67 | 13975.53 | -49.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 110 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.6 | 135.77 | 102 | 13933.2 | -84.66 | -0.61% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 111 | SHOP | 12-17 15:10 | 12-17 15:50 | 168.46 | 167.1 | 83 | 13982.18 | -112.88 | -0.81% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 76.11 | ↓167.77 | 1.7597 | 1.13 | **LOSS** |
| 112 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 162 | 14000.04 | +194.4 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 113 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 114 | MRVL | 01-02 14:55 | 01-02 15:20 | 89.02 | 88.28 | 158 | 14065.16 | -116.92 | -0.83% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 79.84 | ↓88.42 | 0.7955 | 1.32 | **LOSS** |
| 115 | ABNB | 01-05 14:45 | 01-05 16:30 | 134.98 | 136.83 | 104 | 14037.92 | +192.4 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 116 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.37 | 86.02 | 82 | 14000.68 | +53.3 | +0.76% | 0.96R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 117 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.37 | 86.44 | 82 | 14000.68 | +87.74 | +1.25% | 1.58R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 118 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.68 | 89.02 | 160 | 14028.8 | +214.4 | +1.53% | 2.1R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 119 | BA | 01-06 15:20 | 01-06 15:40 | 231.26 | 229.61 | 60 | 13875.6 | -99 | -0.71% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 120 | BA | 01-09 14:35 | 01-09 15:35 | 231.41 | 231.29 | 60 | 13884.6 | -7.2 | -0.05% | 0.07R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 121 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.79 | 89.23 | 157 | 14097.03 | -87.92 | -0.62% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 122 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.47 | 168.06 | 82 | 13896.54 | -115.62 | -0.83% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 123 | NET | 01-13 14:40 | 01-13 15:00 | 188.7 | 187.86 | 74 | 13963.8 | -62.16 | -0.45% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 124 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 171 | 14003.19 | +94.05 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 125 | BA | 01-22 14:30 | 01-22 14:55 | 252.76 | 251.71 | 55 | 13901.8 | -57.75 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 126 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.56 | 135.8 | 103 | 14065.68 | -78.28 | -0.56% | 0.74R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 127 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 128 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 168 | 13984.32 | -47.04 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 129 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 165 | 14029.95 | -201.3 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 130 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 131 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 43 | 7661.31 | +223.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 132 | BA | 02-03 14:30 | 02-03 14:50 | 237.23 | 235.36 | 59 | 13996.57 | -110.33 | -0.79% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 133 | SBUX | 02-03 14:40 | 02-03 16:25 | 93 | 93.44 | 151 | 14043 | +66.44 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 134 | NET | 02-10 14:55 | 02-10 15:45 | 179.6 | 179.39 | 39 | 7004.4 | -8.19 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 71.54 | ↑178.09 | 1.2492 | 2.38 | **LOSS** |
| 135 | SHOP | 02-13 14:40 | 02-13 15:20 | 111.78 | 110.95 | 68 | 7601.04 | -56.44 | -0.74% | 0.37R | 40m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.65 | ↓110.52 | 0.5646 | 1.24 | **LOSS** |
| 136 | NET | 02-13 14:40 | 02-13 15:20 | 188.6 | 190.45 | 41 | 7732.6 | +75.85 | +0.98% | 0.58R | 40m | market | trailing-stop | breakout | breakout | noisyHighBeta | 65.65 | ↑187.11 | 0.893 | 1.58 | **WIN** |
| 137 | NET | 02-17 14:40 | 02-17 14:50 | 200.8 | 196.27 | 38 | 7630.4 | -172.14 | -2.26% | 1.4R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 68.07 | ↓198.53 | 0.5571 | 1.49 | **LOSS** |
| 138 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 175 | 14003.5 | -31.5 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 139 | BA | 02-24 14:40 | 02-24 15:30 | 233 | 233.16 | 60 | 13980 | +9.6 | +0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 140 | SHOP | 02-24 14:40 | 02-24 15:00 | 119.86 | 117.43 | 59 | 7071.74 | -143.37 | -2.03% | 1.53R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 81.72 | ↓118.83 | 0.4802 | 2.58 | **LOSS** |
| 141 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.42 | 130.19 | 110 | 14016.2 | +304.7 | +2.17% | 2.97R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 142 | NET | 02-26 14:55 | 02-26 15:15 | 175.06 | 173.84 | 40 | 7002.4 | -48.8 | -0.7% | 0.51R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 70.93 | ↓173.79 | 0.5739 | 1.59 | **LOSS** |
| 143 | NET | 03-02 14:30 | 03-02 16:10 | 173.2 | 178.51 | 41 | 7101.2 | +217.71 | +3.07% | 2.77R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 80.47 | ↑171.73 | 0.8311 | 1.33 | **WIN** |
| 144 | MRVL | 03-04 14:30 | 03-04 14:45 | 78.8 | 77.59 | 160 | 12608 | -193.6 | -1.54% | 1.44R | 15m | market | stop-loss | mixed | breakout | neutral | 62.04 | ↓78.92 | -0.1287 | 2.55 | **LOSS** |
| 145 | ABNB | 03-04 14:50 | 03-04 16:35 | 136 | 137.43 | 103 | 14008 | +147.29 | +1.05% | 1.19R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 146 | NET | 03-04 15:10 | 03-04 15:35 | 185.57 | 184.49 | 76 | 14103.32 | -82.08 | -0.58% | 0.4R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 147 | NET | 03-09 15:25 | 03-09 16:20 | 202.04 | 201.9 | 69 | 13940.76 | -9.66 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 148 | BA | 03-10 14:55 | 03-10 15:00 | 225.76 | 219.89 | 62 | 13997.12 | -363.94 | -2.6% | 3.66R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 149 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.72 | 127.58 | 110 | 14049.2 | -15.4 | -0.11% | 0.16R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 150 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.1 | 91.96 | 83 | 7644.3 | -11.62 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 151 | NET | 03-20 14:30 | 03-20 14:50 | 224.92 | 221.91 | 62 | 13945.04 | -186.62 | -1.34% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 152 | BA | 03-25 14:00 | 03-25 14:20 | 200.27 | 199.47 | 69 | 13818.63 | -55.2 | -0.4% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |
| 153 | SBUX | 03-25 14:00 | 03-25 14:20 | 93.23 | 92.35 | 151 | 14077.73 | -132.88 | -0.94% | 1.18R | 20m | market | early-reversal | trend | trend | neutral | 69.11 | ↓92.72 | 0.1502 | 1.49 | **LOSS** |
| 154 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.16 | 112.53 | 123 | 13918.68 | -77.49 | -0.56% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 155 | NET | 03-31 14:00 | 03-31 14:20 | 200.1 | 198.91 | 35 | 7003.5 | -41.65 | -0.59% | 0.44R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 88 | ↓198.4 | 1.1294 | 1.96 | **LOSS** |
| 156 | MRVL | 04-01 14:00 | 04-01 14:45 | 104.93 | 105.81 | 67 | 7030.31 | +58.96 | +0.84% | 0.42R | 45m | market | trailing-stop | breakout | breakout | noisyHighBeta | 77.49 | ↑103.56 | 1.3786 | 1.51 | **WIN** |
| 157 | SHOP | 04-15 13:50 | 04-15 14:10 | 123.98 | 123.23 | 57 | 7066.86 | -42.75 | -0.6% | 0.43R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 90.89 | ↑122.32 | 1.2537 | 1.48 | **LOSS** |
| 158 | NET | 04-15 14:10 | 04-15 15:55 | 188.47 | 189.35 | 37 | 6973.39 | +32.56 | +0.47% | 0.24R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 81.52 | ↑185.88 | 2.0169 | 1.43 | **WIN** |
| 159 | MRVL | 04-15 14:45 | 04-15 15:05 | 137.85 | 136.07 | 101 | 13922.85 | -179.78 | -1.29% | 0.84R | 20m | market | early-reversal | breakout | trend | neutral | 77.25 | ↑135.34 | 0.8502 | 1.02 | **LOSS** |
| 160 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.96 | 141.79 | 98 | 14010.08 | -114.66 | -0.82% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |

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

- ⚠️ **Profit factor 1.19 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.86R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T10:10:43.802Z*
