# Bot Trade Report — 120 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:21:28.302Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 6 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $2291.34 (-2.29%) over 120 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 120 |
| Win rate | 32.5% (39W / 81L) |
| Net P&L | $-2291.34 (-2.29%) |
| Gross profit | $4532.43 |
| Gross loss | $6823.77 |
| Profit factor | 0.66 |
| Avg win | $116.22 |
| Avg loss | $84.24 |
| Payoff ratio | 1.38:1 |
| Expectancy | $-19.09 / trade |
| Max drawdown | 3.82% |
| Sharpe ratio (ann.) | -2.77 |
| Trades / active day | 1.36 |
| Avg confidence | 98.93% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.69R |
| Starting equity | $100,000 |
| Ending equity | $97,708.66 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 43 | 30.23% | $-419.76 | $-9.76 |
| Mid  10:30–11:30 | 77 | 33.77% | $-1871.58 | $-24.31 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CRM | 18 | 7 | 38.89% | $+208.53 | $+11.59 | 1.37 | throttle |
| DDOG | 21 | 10 | 47.62% | $+164.05 | $+7.81 | 1.19 | eligible |
| UBER | 16 | 6 | 37.5% | $-352.14 | $-22.01 | 0.61 | throttle |
| AMD | 27 | 10 | 37.04% | $-365.53 | $-13.54 | 0.75 | throttle |
| ADBE | 11 | 2 | 18.18% | $-728.88 | $-66.26 | 0.08 | throttle |
| PLTR | 27 | 4 | 14.81% | $-1217.37 | $-45.09 | 0.46 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 72 | 26 | 36.11% | $-1036.65 | $-14.4 |
| breakout | 48 | 13 | 27.08% | $-1254.69 | $-26.14 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 10 | 3 | 30% | $-293.18 | $-29.32 |
| neutral | 110 | 36 | 32.73% | $-1998.16 | $-18.17 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | DDOG | 16 | 1.46 | $+14.01 | 5 | 0.84 | $-12.01 | 0.21% | 0.72 | watch |
| Time slot | Open 9:30-10:30 | 38 | 0.71 | $-15.24 | 5 | 1.54 | $+31.86 | 0.29% | 1.3 | reject |
| Symbol | CRM | 10 | 0.93 | $-2.61 | 8 | 2.11 | $+29.33 | 0.21% | 1.43 | reject |
| Symbol | AMD | 15 | 0.66 | $-17.45 | 12 | 0.85 | $-8.64 | 0.61% | 0.69 | reject |
| Setup | trend | 53 | 0.74 | $-10.93 | 19 | 0.59 | $-24.06 | 0.91% | 0.47 | reject |
| Symbol | UBER | 9 | 0.61 | $-19.67 | 7 | 0.62 | $-25.02 | 0.28% | 0.47 | reject |
| Behavior | neutral | 70 | 0.84 | $-7.07 | 40 | 0.51 | $-37.58 | 2.33% | 0.41 | reject |
| Time slot | Mid 10:30-11:30 | 34 | 1.13 | $+4.83 | 43 | 0.38 | $-47.35 | 2.49% | 0.31 | reject |
| Setup | breakout | 19 | 1.16 | $+8.67 | 29 | 0.42 | $-48.95 | 1.95% | 0.34 | reject |
| Symbol | ADBE | 5 | 0 | $-57.23 | 6 | 0.13 | $-73.79 | 0.51% | 0.09 | reject |
| Symbol | PLTR | 17 | 1.12 | $+6.6 | 10 | 0 | $-132.96 | 1.33% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-2597.72 | 0.63 |
| +3 bps/side | $-3210.44 | 0.57 |
| +5 bps/side | $-3823.2 | 0.52 |
| +10 bps/side | $-5354.95 | 0.41 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 57 |
| timeout | 25 |
| stagnation | 14 |
| stop-loss | 7 |
| breakeven-stop | 6 |
| trim-profit-target | 5 |
| profit-target | 5 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | UBER | 05-01 14:05 | 05-01 15:20 | 81.61 | 81.48 | 171 | 13955.31 | -22.23 | -0.16% | 0.15R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 2 | AMD | 05-01 15:15 | 05-01 15:35 | 100.14 | 99.44 | 139 | 13919.46 | -97.3 | -0.7% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 3 | PLTR | 05-02 14:10 | 05-02 15:00 | 122.14 | 121.92 | 114 | 13923.96 | -25.08 | -0.18% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 76.95 | ↑120.96 | 1.1433 | 1.19 | **LOSS** |
| 4 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.32 | 106.75 | 131 | 13927.92 | +56.33 | +0.4% | 0.21R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 5 | UBER | 05-12 14:55 | 05-12 16:25 | 85.2 | 86.29 | 82 | 13972.8 | +89.38 | +1.28% | 0.9R | 90m | market | trim-profit-target | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 6 | UBER | 05-12 14:55 | 05-12 16:40 | 85.2 | 86.17 | 82 | 13972.8 | +79.54 | +1.14% | 0.8R | 105m | market | timeout | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 7 | UBER | 05-13 14:20 | 05-13 14:40 | 90.95 | 90.16 | 154 | 14006.3 | -121.66 | -0.87% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 76.51 | ↑89.22 | 0.9267 | 1.1 | **LOSS** |
| 8 | PLTR | 05-13 14:50 | 05-13 15:45 | 125.03 | 128.44 | 61 | 7626.83 | +208.01 | +2.73% | 1.98R | 55m | market | profit-target | breakout | trend | noisyHighBeta | 67.25 | ↑123.12 | 1.6261 | 1.26 | **WIN** |
| 9 | AMD | 05-13 14:55 | 05-13 16:40 | 111.52 | 112.48 | 125 | 13940 | +120 | +0.86% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.8 | ↑110.2 | 0.7051 | 1.44 | **WIN** |
| 10 | UBER | 05-16 15:05 | 05-16 16:50 | 91.86 | 92.54 | 152 | 13962.72 | +103.36 | +0.74% | 0.96R | 105m | market | timeout | trend | trend | neutral | 74.83 | ↑90.93 | 0.3759 | 1.39 | **WIN** |
| 11 | PLTR | 05-22 15:15 | 05-22 16:15 | 125.57 | 125.4 | 111 | 13938.27 | -18.87 | -0.14% | 0.1R | 60m | market | stagnation | trend | trend | neutral | 63.87 | ↑123.71 | 1.0303 | 1.17 | **LOSS** |
| 12 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.07 | 122.44 | 112 | 13783.84 | -70.56 | -0.51% | 0.4R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 13 | AMD | 05-27 14:00 | 05-27 15:45 | 114.71 | 114.95 | 122 | 13994.62 | +29.28 | +0.21% | 0.13R | 105m | market | timeout | trend | trend | neutral | 73.39 | ↑113.53 | 0.8872 | 1.35 | **WIN** |
| 14 | UBER | 05-27 14:25 | 05-27 15:10 | 89.26 | 88.94 | 157 | 14013.82 | -50.24 | -0.36% | 0.3R | 45m | market | early-reversal | trend | trend | neutral | 71.73 | ↑88.52 | 0.2599 | 1.56 | **LOSS** |
| 15 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.39 | 131.22 | 110 | 13902.9 | +531.3 | +3.82% | 2.25R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 16 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.65 | 123.24 | 114 | 13982.1 | +67.26 | +0.48% | 0.49R | 105m | market | timeout | breakout | trend | neutral | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 17 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.62 | 142.32 | 98 | 14074.76 | -127.4 | -0.91% | 0.58R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 18 | DDOG | 06-16 14:40 | 06-16 15:00 | 122.32 | 121.69 | 114 | 13944.48 | -71.82 | -0.52% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 58.58 | ↓121.71 | 0.393 | 1.13 | **LOSS** |
| 19 | AMD | 06-17 14:15 | 06-17 14:35 | 130.49 | 129.25 | 107 | 13962.43 | -132.68 | -0.95% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 54.5 | ↑128.73 | 0.7912 | 1.62 | **LOSS** |
| 20 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 21 | AMD | 06-18 14:00 | 06-18 14:45 | 128.84 | 128.29 | 108 | 13914.72 | -59.4 | -0.43% | 0.34R | 45m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 22 | DDOG | 06-18 14:55 | 06-18 16:25 | 128.89 | 128.93 | 108 | 13920.12 | +4.32 | +0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 73.75 | ↑127.41 | 1.0241 | 1.07 | **WIN** |
| 23 | DDOG | 06-23 14:05 | 06-23 15:50 | 129.01 | 129.55 | 108 | 13933.08 | +58.32 | +0.42% | 0.47R | 105m | market | timeout | trend | trend | neutral | 67.14 | ↑127.72 | 0.218 | 1.29 | **WIN** |
| 24 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.53 | 377.96 | 36 | 13663.08 | -56.52 | -0.41% | 0.59R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 25 | PLTR | 06-23 14:15 | 06-23 15:15 | 140.36 | 140.26 | 100 | 14036 | -10 | -0.07% | 0.04R | 60m | market | breakeven-stop | trend | trend | neutral | 67.02 | ↑138.9 | 0.3683 | 1.29 | **LOSS** |
| 26 | CRM | 06-27 14:00 | 06-27 14:20 | 273.34 | 272.47 | 51 | 13940.34 | -44.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 27 | DDOG | 06-30 14:05 | 06-30 14:35 | 134.72 | 134.07 | 104 | 14010.88 | -67.6 | -0.48% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↓133.9 | 0.5296 | 1.26 | **LOSS** |
| 28 | AMD | 07-02 14:55 | 07-02 16:40 | 138.45 | 139 | 100 | 13845 | +55 | +0.4% | 0.43R | 105m | market | timeout | trend | trend | neutral | 72.92 | ↑136.41 | 0.4506 | 1.18 | **WIN** |
| 29 | DDOG | 07-03 14:40 | 07-03 15:55 | 152.02 | 153.89 | 46 | 13985.84 | +86.02 | +1.23% | 0.75R | 75m | market | trim-profit-target | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 30 | DDOG | 07-03 14:40 | 07-03 16:25 | 152.02 | 154.33 | 46 | 13985.84 | +106.26 | +1.52% | 0.92R | 105m | market | timeout | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 31 | UBER | 07-07 14:40 | 07-07 15:00 | 97.12 | 96.29 | 144 | 13985.28 | -119.52 | -0.85% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 78.9 | ↑95.89 | 0.918 | 2.36 | **LOSS** |
| 32 | CRM | 07-08 14:00 | 07-08 14:55 | 271.8 | 275.1 | 25 | 13861.8 | +82.5 | +1.21% | 1.73R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 33 | CRM | 07-08 14:00 | 07-08 15:45 | 271.8 | 274.68 | 26 | 13861.8 | +74.88 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 34 | AMD | 07-08 14:25 | 07-08 15:20 | 137.74 | 137.56 | 101 | 13911.74 | -18.18 | -0.13% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 68.41 | ↑136.77 | 0.6898 | 1.38 | **LOSS** |
| 35 | CRM | 07-14 13:45 | 07-14 14:05 | 261.82 | 259.87 | 53 | 13876.46 | -103.35 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 80.11 | ↓260.45 | 0.2308 | 1.47 | **LOSS** |
| 36 | PLTR | 07-14 14:50 | 07-14 15:10 | 146.68 | 145.89 | 95 | 13934.6 | -75.05 | -0.54% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 70.5 | ↑145.37 | 1.0479 | 1.55 | **LOSS** |
| 37 | PLTR | 07-15 14:10 | 07-15 14:40 | 150.16 | 149.31 | 93 | 13964.88 | -79.05 | -0.57% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 56.84 | ↓148.88 | 0.379 | 1.06 | **LOSS** |
| 38 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.64 | 141.05 | 99 | 14022.36 | -58.41 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 39 | PLTR | 07-17 14:05 | 07-17 15:50 | 152.56 | 153.57 | 92 | 14035.52 | +92.92 | +0.66% | 0.65R | 105m | market | timeout | trend | trend | neutral | 64.71 | ↑151.79 | 0.4528 | 1.53 | **WIN** |
| 40 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.85 | 143.4 | 49 | 13901.3 | +75.95 | +1.09% | 1.45R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 41 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.85 | 143.88 | 49 | 13901.3 | +99.47 | +1.43% | 1.91R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 42 | CRM | 07-21 14:00 | 07-21 14:20 | 264.29 | 262.55 | 52 | 13743.08 | -90.48 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 43 | AMD | 07-21 14:30 | 07-21 15:05 | 159.76 | 159.01 | 87 | 13899.12 | -65.25 | -0.47% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.08 | ↑158.57 | 0.4791 | 2.52 | **LOSS** |
| 44 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.45 | 158.32 | 88 | 13943.6 | -11.44 | -0.08% | 0.09R | 80m | market | stagnation | breakout | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 45 | AMD | 08-04 14:30 | 08-04 14:50 | 177.35 | 176.16 | 74 | 13123.9 | -88.06 | -0.67% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 59.97 | ↑175.98 | 1.486 | 1.55 | **LOSS** |
| 46 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.13 | 345.13 | 40 | 13805.2 | +0 | +0% | 0R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 47 | CRM | 08-13 14:50 | 08-13 15:40 | 234.29 | 234.16 | 59 | 13823.11 | -7.67 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 48 | UBER | 08-15 14:15 | 08-15 15:05 | 93.4 | 92.89 | 149 | 13916.6 | -75.99 | -0.55% | 0.51R | 50m | market | early-reversal | breakout | breakout | neutral | 72.71 | ↓92.37 | 0.3724 | 1.4 | **LOSS** |
| 49 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.95 | 129.86 | 107 | 14011.65 | -116.63 | -0.83% | 0.9R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 50 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.48 | 154.87 | 49 | 7716.52 | -127.89 | -1.66% | 0.83R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 51 | DDOG | 08-21 14:25 | 08-21 15:10 | 128.56 | 128.08 | 109 | 14013.04 | -52.32 | -0.37% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 51.64 | ↑127.88 | 0.1844 | 2.72 | **LOSS** |
| 52 | AMD | 08-22 14:00 | 08-22 15:45 | 165.75 | 167.58 | 84 | 13923 | +153.72 | +1.1% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 53 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.7 | 156.32 | 89 | 14035.3 | -122.82 | -0.88% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 54 | CRM | 09-05 15:10 | 09-05 16:00 | 250.06 | 249.61 | 55 | 13753.3 | -24.75 | -0.18% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 45.95 | ↑248.1 | 1.2377 | 1.13 | **LOSS** |
| 55 | ADBE | 09-08 15:05 | 09-08 15:30 | 354.48 | 352.74 | 39 | 13824.72 | -67.86 | -0.49% | 0.7R | 25m | market | early-reversal | trend | trend | neutral | 78.94 | ↑349.77 | 1.3941 | 2 | **LOSS** |
| 56 | PLTR | 09-12 14:50 | 09-12 15:10 | 168.22 | 166.58 | 83 | 13962.26 | -136.12 | -0.97% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 76.58 | ↑166.22 | 0.7275 | 1.3 | **LOSS** |
| 57 | AMD | 09-12 14:55 | 09-12 16:40 | 157.72 | 159.32 | 88 | 13879.36 | +140.8 | +1.01% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 72.62 | ↑156.13 | 0.2411 | 2.1 | **WIN** |
| 58 | DDOG | 09-18 14:10 | 09-18 15:50 | 136.6 | 136.11 | 102 | 13933.2 | -49.98 | -0.36% | 0.35R | 100m | market | early-reversal | trend | trend | neutral | 71.78 | ↓135.82 | 0.4575 | 1.4 | **LOSS** |
| 59 | CRM | 09-22 14:30 | 09-22 16:15 | 247.76 | 248.32 | 56 | 13874.56 | +31.36 | +0.23% | 0.25R | 105m | market | timeout | trend | trend | neutral | 54.29 | ↑245.46 | 0.2287 | 1.58 | **WIN** |
| 60 | PLTR | 09-25 14:15 | 09-25 16:00 | 180.87 | 183.34 | 77 | 13926.99 | +190.19 | +1.37% | 0.69R | 105m | market | timeout | breakout | breakout | neutral | 56.8 | ↑177.11 | 0.1758 | 1.15 | **WIN** |
| 61 | AMD | 10-01 14:10 | 10-01 14:50 | 163.6 | 162.69 | 85 | 13906 | -77.35 | -0.56% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 65.95 | ↑162.31 | 0.6688 | 1.08 | **LOSS** |
| 62 | DDOG | 10-01 14:45 | 10-01 16:30 | 149.04 | 150.77 | 94 | 14009.76 | +162.62 | +1.16% | 1R | 105m | market | timeout | trend | trend | neutral | 70.2 | ↑147.76 | 2.1819 | 1.09 | **WIN** |
| 63 | PLTR | 10-14 14:25 | 10-14 15:55 | 178.4 | 178.35 | 78 | 13915.2 | -3.9 | -0.03% | 0.02R | 90m | market | breakeven-stop | breakout | breakout | neutral | 55.43 | ↑174.39 | -0.2396 | 1.3 | **LOSS** |
| 64 | ADBE | 10-16 13:35 | 10-16 13:45 | 335.6 | 332.71 | 41 | 13759.6 | -118.49 | -0.86% | 1.23R | 10m | market | stop-loss | breakout | breakout | neutral | 86.58 | ↓334.81 | 0.4785 | 1.41 | **LOSS** |
| 65 | AMD | 10-20 14:30 | 10-20 15:20 | 241.58 | 240.84 | 57 | 13770.06 | -42.18 | -0.31% | 0.18R | 50m | market | stagnation | trend | trend | neutral | 63.44 | ↑238.52 | 1.8937 | 1.59 | **LOSS** |
| 66 | CRM | 10-21 14:20 | 10-21 16:05 | 260.43 | 263.14 | 53 | 13802.79 | +143.63 | +1.04% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 67 | AMD | 10-24 14:35 | 10-24 15:00 | 252.8 | 250.97 | 55 | 13904 | -100.65 | -0.72% | 0.36R | 25m | market | early-reversal | breakout | trend | neutral | 77.29 | ↑249.38 | 4.524 | 1.03 | **LOSS** |
| 68 | AMD | 10-28 14:00 | 10-28 14:25 | 263.97 | 262.44 | 52 | 13726.44 | -79.56 | -0.58% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 74.65 | ↑260.55 | 1.5104 | 1.11 | **LOSS** |
| 69 | DDOG | 10-31 14:45 | 10-31 15:05 | 162.9 | 162.02 | 86 | 14009.4 | -75.68 | -0.54% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 71.44 | ↑161.57 | 1.218 | 1.59 | **LOSS** |
| 70 | UBER | 11-03 14:30 | 11-03 15:00 | 97.93 | 97.51 | 142 | 13906.06 | -59.64 | -0.43% | 0.61R | 30m | market | early-reversal | breakout | breakout | neutral | 78.2 | ↓97.66 | 0.2553 | 1.69 | **LOSS** |
| 71 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.39 | 203.89 | 68 | 13966.52 | -102 | -0.73% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 72 | ADBE | 11-11 14:45 | 11-11 15:45 | 332.28 | 331.25 | 42 | 13955.76 | -43.26 | -0.31% | 0.44R | 60m | market | early-reversal | trend | trend | neutral | 72.56 | ↓331.28 | 0.8535 | 1.53 | **LOSS** |
| 73 | CRM | 11-12 14:30 | 11-12 14:50 | 247.85 | 246.99 | 52 | 12888.2 | -44.72 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 71.38 | ↓247.15 | 0.3776 | 1.43 | **LOSS** |
| 74 | AMD | 11-12 15:00 | 11-12 15:45 | 255.31 | 261.21 | 13 | 6893.37 | +76.7 | +2.31% | 1.16R | 45m | market | trim-profit-target | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 75 | AMD | 11-12 15:00 | 11-12 15:55 | 255.31 | 258.67 | 14 | 6893.37 | +47.04 | +1.32% | 0.66R | 55m | market | trailing-stop | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 76 | PLTR | 11-20 14:30 | 11-20 15:05 | 173.34 | 170.86 | 44 | 7626.96 | -109.12 | -1.43% | 0.76R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 78.02 | ↓172.89 | 2.1297 | 2.13 | **LOSS** |
| 77 | UBER | 11-28 14:35 | 11-28 16:20 | 86.68 | 87.16 | 161 | 13955.48 | +77.28 | +0.55% | 0.75R | 105m | market | timeout | trend | trend | neutral | 71.22 | ↑86.48 | 0.114 | 1.04 | **WIN** |
| 78 | AMD | 12-01 14:45 | 12-01 15:05 | 219.51 | 217.64 | 59 | 12951.09 | -110.33 | -0.85% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 68.38 | ↑216.03 | 0.2333 | 2.2 | **LOSS** |
| 79 | PLTR | 12-03 15:00 | 12-03 15:25 | 172.92 | 171.58 | 80 | 13833.6 | -107.2 | -0.77% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 61.73 | ↑170.59 | 0.0844 | 1.57 | **LOSS** |
| 80 | UBER | 12-08 14:40 | 12-08 15:10 | 92.49 | 91.9 | 140 | 12948.6 | -82.6 | -0.64% | 0.91R | 30m | market | early-reversal | trend | breakout | neutral | 71.43 | ↓92 | -0.0091 | 1.46 | **LOSS** |
| 81 | ADBE | 12-12 14:40 | 12-12 16:25 | 357.71 | 359.35 | 39 | 13950.69 | +63.96 | +0.46% | 0.38R | 105m | market | timeout | breakout | breakout | neutral | 66.06 | ↓355.45 | 0.1109 | 1.42 | **WIN** |
| 82 | AMD | 12-15 14:45 | 12-15 15:05 | 215.26 | 211.61 | 64 | 13776.64 | -233.6 | -1.7% | 1.47R | 20m | market | stop-loss | breakout | breakout | neutral | 74.74 | ↓213.33 | 0.1714 | 1.36 | **LOSS** |
| 83 | PLTR | 12-15 14:45 | 12-15 15:05 | 186.89 | 184.07 | 74 | 13829.86 | -208.68 | -1.51% | 1.12R | 20m | market | early-reversal | breakout | breakout | neutral | 73.42 | ↓186.54 | 0.4741 | 1.11 | **LOSS** |
| 84 | CRM | 12-22 15:05 | 12-22 15:55 | 262.48 | 262.53 | 53 | 13911.44 | +2.65 | +0.02% | 0.02R | 50m | market | breakeven-stop | trend | trend | neutral | 68.85 | ↑260.85 | 0.5289 | 1.17 | **WIN** |
| 85 | AMD | 01-02 14:55 | 01-02 15:15 | 225.97 | 224.22 | 61 | 13784.17 | -106.75 | -0.77% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 80.86 | ↓224.25 | 2.3926 | 1.15 | **LOSS** |
| 86 | PLTR | 01-05 14:40 | 01-05 15:30 | 174.64 | 173.51 | 73 | 12748.72 | -82.49 | -0.65% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 74.95 | ↓173.07 | 1.4103 | 1.85 | **LOSS** |
| 87 | AMD | 01-12 14:50 | 01-12 16:35 | 206.99 | 208.17 | 67 | 13868.33 | +79.06 | +0.57% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 61.22 | ↑204.37 | 0.1029 | 1.56 | **WIN** |
| 88 | PLTR | 01-16 14:30 | 01-16 14:40 | 181.07 | 177.28 | 77 | 13942.39 | -291.83 | -2.09% | 1.85R | 10m | market | stop-loss | breakout | breakout | neutral | 72.1 | ↓180.79 | -0.2065 | 9.2 | **LOSS** |
| 89 | UBER | 01-21 15:10 | 01-21 16:55 | 84.82 | 85.21 | 164 | 13910.48 | +63.96 | +0.46% | 0.36R | 105m | market | timeout | breakout | trend | neutral | 67.14 | ↑83.89 | 0.3698 | 1.06 | **WIN** |
| 90 | ADBE | 01-23 14:30 | 01-23 15:10 | 303 | 301.95 | 46 | 13938 | -48.3 | -0.35% | 0.5R | 40m | market | early-reversal | breakout | breakout | neutral | 76.41 | ↓302.29 | 0.4992 | 1.19 | **LOSS** |
| 91 | CRM | 01-23 14:30 | 01-23 14:50 | 230.3 | 229.16 | 60 | 13818 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 79.92 | ↓229.32 | 0.4051 | 2.01 | **LOSS** |
| 92 | AMD | 01-27 15:00 | 01-27 15:50 | 254 | 253.05 | 54 | 13716 | -51.3 | -0.37% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 62.3 | ↑251.51 | 0.0138 | 1.29 | **LOSS** |
| 93 | DDOG | 01-30 14:30 | 01-30 14:55 | 129.65 | 128.83 | 108 | 14002.2 | -88.56 | -0.63% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 72.66 | ↓128.99 | -0.2105 | 1.17 | **LOSS** |
| 94 | CRM | 02-02 14:40 | 02-02 15:30 | 215.48 | 215.18 | 64 | 13790.72 | -19.2 | -0.14% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 95 | CRM | 02-04 15:25 | 02-04 16:15 | 197.52 | 196.67 | 70 | 13826.4 | -59.5 | -0.43% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 53.69 | ↑193.04 | 0.1561 | 1.58 | **LOSS** |
| 96 | UBER | 02-05 14:30 | 02-05 15:10 | 74.89 | 74.31 | 173 | 12955.97 | -100.34 | -0.77% | 0.49R | 40m | market | early-reversal | breakout | breakout | neutral | 56.07 | ↓74.36 | -0.1517 | 3.08 | **LOSS** |
| 97 | DDOG | 02-09 15:15 | 02-09 15:35 | 113.54 | 111.78 | 67 | 7607.18 | -117.92 | -1.55% | 0.78R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.73 | ↓113.26 | 0.4062 | 1.37 | **LOSS** |
| 98 | ADBE | 02-12 14:30 | 02-12 14:40 | 260.87 | 257.86 | 53 | 13826.11 | -159.53 | -1.15% | 1.6R | 10m | market | stop-loss | breakout | breakout | neutral | 66.71 | ↓260.15 | 0.0759 | 2.02 | **LOSS** |
| 99 | UBER | 02-18 14:35 | 02-18 16:20 | 71.74 | 72.48 | 194 | 13917.56 | +143.56 | +1.03% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 72.27 | ↑71.21 | 0.1884 | 1.29 | **WIN** |
| 100 | AMD | 02-19 15:00 | 02-19 15:50 | 202.53 | 201.96 | 68 | 13772.04 | -38.76 | -0.28% | 0.21R | 50m | market | stagnation | trend | breakout | neutral | 69.22 | ↓201.1 | 0.6151 | 1.13 | **LOSS** |
| 101 | UBER | 02-24 14:35 | 02-24 14:50 | 71.9 | 70.86 | 194 | 13948.6 | -201.76 | -1.45% | 1.42R | 15m | market | stop-loss | breakout | breakout | neutral | 77.3 | ↓71.41 | 0.1245 | 2.76 | **LOSS** |
| 102 | PLTR | 02-24 15:25 | 02-24 15:45 | 129.55 | 128.46 | 107 | 13861.85 | -116.63 | -0.84% | 0.42R | 20m | market | early-reversal | breakout | breakout | neutral | 45.67 | ↓128.56 | -0.4742 | 1.12 | **LOSS** |
| 103 | CRM | 02-25 14:50 | 02-25 16:10 | 188.87 | 188.59 | 73 | 13787.51 | -20.44 | -0.15% | 0.12R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.03 | ↑185.75 | 0.1348 | 1.26 | **LOSS** |
| 104 | ADBE | 03-03 14:30 | 03-03 14:35 | 267.37 | 263.35 | 48 | 12833.76 | -192.96 | -1.5% | 1.63R | 5m | market | stop-loss | breakout | breakout | neutral | 66.27 | ↓265.19 | 0.028 | 4.55 | **LOSS** |
| 105 | DDOG | 03-04 14:40 | 03-04 15:00 | 114.36 | 117.1 | 111 | 12693.96 | +304.14 | +2.4% | 1.63R | 20m | market | profit-target | breakout | breakout | neutral | 72.07 | ↑113.58 | 0.089 | 2.66 | **WIN** |
| 106 | PLTR | 03-06 15:10 | 03-06 15:45 | 154.86 | 153.62 | 89 | 13782.54 | -110.36 | -0.8% | 0.4R | 35m | market | early-reversal | breakout | breakout | neutral | 63 | ↑152.76 | 0.59 | 2.29 | **LOSS** |
| 107 | AMD | 03-09 15:20 | 03-09 15:40 | 195.73 | 194.9 | 71 | 13896.83 | -58.93 | -0.42% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 77.41 | ↑192.81 | 0.8449 | 2.27 | **LOSS** |
| 108 | ADBE | 03-17 14:05 | 03-17 14:40 | 258.39 | 256.07 | 29 | 7493.31 | -67.28 | -0.9% | 0.56R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 68.21 | ↓255.55 | 0.8116 | 1.08 | **LOSS** |
| 109 | PLTR | 03-18 14:05 | 03-18 14:25 | 156.67 | 154.1 | 88 | 13786.96 | -226.16 | -1.64% | 1.89R | 20m | market | stop-loss | trend | trend | neutral | 72.58 | ↓155.65 | 0.2712 | 1.09 | **LOSS** |
| 110 | UBER | 03-30 15:00 | 03-30 15:20 | 70.38 | 70 | 198 | 13935.24 | -75.24 | -0.54% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 68.13 | ↑69.49 | 0.1903 | 1.45 | **LOSS** |
| 111 | DDOG | 03-30 15:00 | 03-30 15:25 | 119.02 | 118.28 | 118 | 14044.36 | -87.32 | -0.62% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.07 | ↑117.79 | 1.2144 | 1.32 | **LOSS** |
| 112 | AMD | 03-31 14:30 | 03-31 14:50 | 201.09 | 198.61 | 38 | 7641.42 | -94.24 | -1.23% | 0.73R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 70.67 | ↓199.95 | 1.6403 | 1.02 | **LOSS** |
| 113 | PLTR | 04-02 14:35 | 04-02 15:25 | 147.44 | 147.02 | 93 | 13711.92 | -39.06 | -0.28% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 53.16 | ↑143.51 | -0.0911 | 1.23 | **LOSS** |
| 114 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 83 | 13841.08 | +350.26 | +2.53% | 3.61R | 35m | market | profit-target | breakout | breakout | neutral | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 115 | PLTR | 04-13 15:05 | 04-13 15:25 | 133.6 | 132.92 | 56 | 7481.6 | -38.08 | -0.51% | 0.37R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 61.04 | ↑131.43 | 1.2259 | 1.23 | **LOSS** |
| 116 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 79 | 13870.03 | +94.01 | +0.68% | 0.85R | 105m | market | timeout | breakout | breakout | neutral | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |
| 117 | DDOG | 04-15 15:15 | 04-15 15:35 | 119.46 | 118.36 | 64 | 7645.44 | -70.4 | -0.92% | 1.02R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 64.89 | ↑118.16 | 2.0268 | 1.23 | **LOSS** |
| 118 | ADBE | 04-15 15:25 | 04-15 16:15 | 245.04 | 244.35 | 56 | 13722.24 | -38.64 | -0.28% | 0.4R | 50m | market | stagnation | trend | trend | neutral | 71.07 | ↑242.93 | 1.7921 | 1.65 | **LOSS** |
| 119 | AMD | 04-16 14:50 | 04-16 16:15 | 271.32 | 278.75 | 51 | 13837.32 | +378.93 | +2.74% | 1.72R | 85m | market | profit-target | breakout | trend | neutral | 72.94 | ↑266.74 | 3.6904 | 1.2 | **WIN** |
| 120 | AMD | 04-22 14:25 | 04-22 16:10 | 295.23 | 295.41 | 47 | 13875.81 | +8.46 | +0.06% | 0.04R | 105m | market | timeout | breakout | breakout | neutral | 74.55 | ↑289.69 | 2.1903 | 1.18 | **WIN** |

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

- ⚠️ **Profit factor 0.66 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.69R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:21:28.302Z*
