# Bot Trade Report — 56 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:35:02.179Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $1193.1 (+1.19%) over 56 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 56 |
| Win rate | 42.86% (24W / 32L) |
| Net P&L | $+1193.1 (+1.19%) |
| Gross profit | $3467.51 |
| Gross loss | $2274.41 |
| Profit factor | 1.52 |
| Avg win | $144.48 |
| Avg loss | $71.08 |
| Payoff ratio | 2.03:1 |
| Expectancy | $+21.31 / trade |
| Max drawdown | 0.61% |
| Sharpe ratio (ann.) | 2.54 |
| Trades / active day | 1.12 |
| Avg confidence | 98.84% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.84R |
| Starting equity | $100,000 |
| Ending equity | $101,193.1 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 17 | 64.71% | $+1200.59 | $70.62 |
| Mid  10:30–11:30 | 39 | 33.33% | $-7.49 | $-0.19 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ARM | 56 | 24 | 42.86% | $+1193.1 | $+21.31 | 1.52 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 38 | 19 | 50% | $+1252.69 | $+32.97 |
| breakout | 18 | 5 | 27.78% | $-59.59 | $-3.31 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 48 | 19 | 39.58% | $+786.3 | $+16.38 |
| noisyHighBeta | 8 | 5 | 62.5% | $+406.8 | $+50.85 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 11 | 12.16 | $+97.68 | 6 | 1.57 | $+21.02 | 0.12% | 1.21 | promote |
| Setup | trend | 22 | 2.69 | $+51.3 | 16 | 1.2 | $+7.76 | 0.39% | 0.91 | watch |
| Behavior | neutral | 26 | 1.65 | $+24.58 | 22 | 1.14 | $+6.7 | 0.62% | 0.9 | watch |
| Symbol | ARM | 33 | 1.94 | $+32.95 | 23 | 1.09 | $+4.6 | 0.62% | 0.86 | watch |
| Behavior | noisyHighBeta | 7 | 3.61 | $+64.04 | 1 | 0 | $-41.48 | 0.04% | 0 | watch |
| Time slot | Mid 10:30-11:30 | 22 | 1.01 | $+0.58 | 17 | 0.98 | $-1.19 | 0.75% | 0.78 | reject |
| Setup | breakout | 11 | 0.92 | $-3.75 | 7 | 0.96 | $-2.62 | 0.34% | 0.8 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1056.46 | 1.45 |
| +3 bps/side | $+783.27 | 1.31 |
| +5 bps/side | $+510.07 | 1.19 |
| +10 bps/side | $-172.97 | 0.95 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 22 |
| timeout | 12 |
| stagnation | 6 |
| breakeven-stop | 4 |
| trim-profit-target | 4 |
| profit-target | 4 |
| trailing-stop | 3 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | ARM | 05-08 14:40 | 05-08 15:05 | 109.61 | 108.86 | 127 | 13920.47 | -95.25 | -0.68% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 72.33 | ↑107.83 | 0.4327 | 1.37 | **LOSS** |
| 2 | ARM | 05-21 14:40 | 05-21 15:35 | 112.95 | 112.98 | 123 | 13892.85 | +3.69 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | trend | neutral | 78.42 | ↑111.91 | 0.717 | 2.03 | **WIN** |
| 3 | ARM | 05-24 14:50 | 05-24 16:35 | 114.54 | 114.82 | 122 | 13973.88 | +34.16 | +0.24% | 0.29R | 105m | market | timeout | trend | trend | neutral | 74 | ↑113.13 | 0.6852 | 2.18 | **WIN** |
| 4 | ARM | 06-10 14:25 | 06-10 15:55 | 139.87 | 139.85 | 100 | 13987 | -2 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | trend | neutral | 63.23 | ↑135.28 | 0.5967 | 1.43 | **LOSS** |
| 5 | ARM | 06-11 14:05 | 06-11 15:45 | 143.34 | 145.32 | 24 | 7023.66 | +47.52 | +1.38% | 0.72R | 100m | market | trim-profit-target | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 6 | ARM | 06-11 14:05 | 06-11 15:50 | 143.34 | 145.41 | 25 | 7023.66 | +51.75 | +1.44% | 0.75R | 105m | market | timeout | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 7 | ARM | 06-18 14:15 | 06-18 15:30 | 164.98 | 166.82 | 46 | 7589.08 | +84.64 | +1.12% | 0.56R | 75m | market | trailing-stop | breakout | trend | noisyHighBeta | 61.42 | ↑162.59 | 0.68 | 1.11 | **WIN** |
| 8 | ARM | 07-23 14:05 | 07-23 15:15 | 166.91 | 172.05 | 46 | 7677.86 | +236.44 | +3.08% | 2.35R | 70m | market | profit-target | trend | trend | noisyHighBeta | 74.93 | ↑165.54 | 0.4865 | 1.04 | **WIN** |
| 9 | ARM | 08-13 15:25 | 08-13 17:10 | 121.98 | 125.15 | 63 | 7684.74 | +199.71 | +2.6% | 2.22R | 105m | market | timeout | trend | trend | noisyHighBeta | 65.08 | ↑120.39 | 1.1062 | 1.09 | **WIN** |
| 10 | ARM | 08-29 14:40 | 08-29 15:00 | 132.33 | 131.07 | 58 | 7675.14 | -73.08 | -0.95% | 0.48R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.17 | ↑130.71 | 1.7853 | 5.35 | **LOSS** |
| 11 | ARM | 10-10 15:10 | 10-10 15:30 | 149.86 | 149.05 | 93 | 13936.98 | -75.33 | -0.54% | 0.45R | 20m | market | early-reversal | trend | breakout | neutral | 66.29 | ↑147.36 | 0.3487 | 1.37 | **LOSS** |
| 12 | ARM | 10-11 14:15 | 10-11 14:40 | 151.51 | 150.6 | 92 | 13938.92 | -83.72 | -0.6% | 0.63R | 25m | market | early-reversal | breakout | breakout | neutral | 68.97 | ↑149.9 | 0.1466 | 1.39 | **LOSS** |
| 13 | ARM | 10-28 14:10 | 10-28 15:45 | 146.94 | 151.58 | 95 | 13959.3 | +440.8 | +3.16% | 3.4R | 95m | market | profit-target | trend | trend | neutral | 76.34 | ↑145.93 | 0.5947 | 1.17 | **WIN** |
| 14 | ARM | 10-29 14:25 | 10-29 15:35 | 152.32 | 153.65 | 46 | 14013.44 | +61.18 | +0.87% | 0.69R | 70m | market | trim-profit-target | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 15 | ARM | 10-29 14:25 | 10-29 16:10 | 152.32 | 154.66 | 46 | 14013.44 | +107.64 | +1.54% | 1.22R | 105m | market | timeout | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 16 | ARM | 11-18 14:30 | 11-18 14:50 | 128.8 | 126.83 | 109 | 14039.2 | -214.73 | -1.53% | 2.19R | 20m | market | stop-loss | trend | trend | neutral | 72.64 | ↓128.63 | 0.3122 | 4.7 | **LOSS** |
| 17 | ARM | 11-19 14:40 | 11-19 15:00 | 130.11 | 128.85 | 99 | 12880.89 | -124.74 | -0.97% | 1.21R | 20m | market | early-reversal | breakout | breakout | neutral | 76.31 | ↓129.43 | 0.3519 | 2.87 | **LOSS** |
| 18 | ARM | 11-19 15:25 | 11-19 15:45 | 131.36 | 130.84 | 107 | 14055.52 | -55.64 | -0.4% | 0.34R | 20m | market | early-reversal | breakout | trend | neutral | 70.69 | ↑129.7 | 0.6939 | 1.08 | **LOSS** |
| 19 | ARM | 11-29 14:55 | 11-29 16:30 | 135.89 | 135.6 | 103 | 13996.67 | -29.87 | -0.21% | 0.23R | 95m | market | breakeven-stop | trend | trend | neutral | 79.17 | ↓134.82 | 0.7415 | 1.92 | **LOSS** |
| 20 | ARM | 12-09 14:50 | 12-09 15:10 | 142.74 | 141.98 | 98 | 13988.52 | -74.48 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 71.23 | ↓142.16 | 0.0943 | 2.89 | **LOSS** |
| 21 | ARM | 01-02 14:40 | 01-02 16:00 | 125.98 | 126.88 | 111 | 13983.78 | +99.9 | +0.71% | 0.56R | 80m | market | trailing-stop | breakout | breakout | neutral | 67.15 | ↓125.71 | 0.2982 | 2.04 | **WIN** |
| 22 | ARM | 01-30 14:40 | 01-30 16:25 | 150.65 | 152.87 | 93 | 14010.45 | +206.46 | +1.47% | 1.34R | 105m | market | timeout | breakout | breakout | neutral | 75.78 | ↑150.31 | 0.8005 | 2.03 | **WIN** |
| 23 | ARM | 01-31 14:45 | 01-31 15:40 | 157.27 | 161.23 | 89 | 13997.03 | +352.44 | +2.52% | 2.07R | 55m | market | profit-target | breakout | trend | neutral | 72.98 | ↑156.52 | 0.716 | 1.06 | **WIN** |
| 24 | ARM | 02-04 15:00 | 02-04 15:50 | 160.37 | 159.99 | 88 | 14112.56 | -33.44 | -0.24% | 0.15R | 50m | market | stagnation | breakout | breakout | neutral | 64.36 | ↑158.19 | 0.4567 | 1.95 | **LOSS** |
| 25 | ARM | 02-11 14:55 | 02-11 15:15 | 162.71 | 160.61 | 47 | 7647.37 | -98.7 | -1.29% | 1.25R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 66.82 | ↓161.69 | 0.2506 | 2.5 | **LOSS** |
| 26 | ARM | 03-24 15:05 | 03-24 15:25 | 126.24 | 125.76 | 111 | 14012.64 | -53.28 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 74.31 | ↑124.81 | 1.807 | 1.33 | **LOSS** |
| 27 | ARM | 04-01 15:00 | 04-01 15:55 | 107.21 | 107.14 | 131 | 14044.51 | -9.17 | -0.07% | 0.05R | 55m | market | stagnation | breakout | breakout | neutral | 65.28 | ↑105.34 | -0.0283 | 1.87 | **LOSS** |
| 28 | ARM | 04-22 15:00 | 04-22 15:20 | 100.64 | 100.32 | 140 | 14089.6 | -44.8 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 64.21 | ↑99.8 | 1.1431 | 1.09 | **LOSS** |
| 29 | ARM | 05-13 15:00 | 05-13 16:45 | 127.63 | 128.69 | 110 | 14039.3 | +116.6 | +0.83% | 1.04R | 105m | market | timeout | trend | trend | neutral | 70.44 | ↑126.26 | 0.7319 | 1.4 | **WIN** |
| 30 | ARM | 05-27 15:05 | 05-27 16:50 | 134.89 | 135.46 | 104 | 14028.56 | +59.28 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 31 | ARM | 06-03 13:40 | 06-03 15:25 | 128.4 | 129.68 | 110 | 14124 | +140.8 | +1% | 1.2R | 105m | market | timeout | trend | breakout | neutral | 61.42 | ↑127.89 | 0.1096 | 1.79 | **WIN** |
| 32 | ARM | 06-06 15:05 | 06-06 15:25 | 134.99 | 134.25 | 104 | 14038.96 | -76.96 | -0.55% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 33 | ARM | 06-23 14:00 | 06-23 15:05 | 147.17 | 147.06 | 96 | 14128.32 | -10.56 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 34 | ARM | 06-24 14:50 | 06-24 15:45 | 154.67 | 154.49 | 91 | 14074.97 | -16.38 | -0.12% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 63.25 | ↑153.56 | 1.6211 | 1.47 | **LOSS** |
| 35 | ARM | 06-27 14:40 | 06-27 16:10 | 163.48 | 165.77 | 43 | 14059.28 | +98.47 | +1.4% | 1.2R | 90m | market | trim-profit-target | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 36 | ARM | 06-27 14:40 | 06-27 16:25 | 163.48 | 165.71 | 43 | 14059.28 | +95.89 | +1.36% | 1.16R | 105m | market | timeout | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 37 | ARM | 07-11 14:00 | 07-11 15:20 | 149.21 | 149.15 | 95 | 14174.95 | -5.7 | -0.04% | 0.03R | 80m | market | breakeven-stop | breakout | trend | neutral | 64.05 | ↓147.38 | 0.2988 | 1.26 | **LOSS** |
| 38 | ARM | 07-21 14:10 | 07-21 15:15 | 161.58 | 163.11 | 43 | 14057.46 | +65.79 | +0.95% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 39 | ARM | 07-21 14:10 | 07-21 15:55 | 161.58 | 162.81 | 44 | 14057.46 | +54.12 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 40 | ARM | 07-24 15:05 | 07-24 15:30 | 161.2 | 160.68 | 88 | 14185.6 | -45.76 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 73.63 | ↑159.51 | 0.3803 | 3.11 | **LOSS** |
| 41 | ARM | 07-25 14:35 | 07-25 16:20 | 162.96 | 163.86 | 87 | 14177.52 | +78.3 | +0.55% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.55 | ↑161.38 | 0.4531 | 1.82 | **WIN** |
| 42 | ARM | 08-08 14:15 | 08-08 14:35 | 137.65 | 136.73 | 103 | 14177.95 | -94.76 | -0.67% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 43 | ARM | 08-08 15:15 | 08-08 15:35 | 138.59 | 137.75 | 102 | 14136.18 | -85.68 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 63.34 | ↑136.97 | 0.6604 | 2.49 | **LOSS** |
| 44 | ARM | 08-21 15:00 | 08-21 15:25 | 133.47 | 132.54 | 106 | 14147.82 | -98.58 | -0.7% | 0.79R | 25m | market | early-reversal | trend | trend | neutral | 70.99 | ↑132 | 0.7656 | 2.7 | **LOSS** |
| 45 | ARM | 09-11 15:25 | 09-11 15:50 | 158.27 | 157.48 | 89 | 14086.03 | -70.31 | -0.5% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 63.48 | ↑156.18 | 1.0582 | 2.33 | **LOSS** |
| 46 | ARM | 10-09 15:05 | 10-09 15:25 | 169.05 | 167.78 | 83 | 14031.15 | -105.41 | -0.75% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 69.25 | ↑164.84 | 1.1212 | 1.63 | **LOSS** |
| 47 | ARM | 10-27 14:20 | 10-27 14:35 | 177.31 | 180.18 | 79 | 14007.49 | +226.73 | +1.62% | 0.93R | 15m | market | trailing-stop | trend | trend | neutral | 74.37 | ↑176.02 | 1.2808 | 1.8 | **WIN** |
| 48 | ARM | 11-17 14:30 | 11-17 15:05 | 142.93 | 141.32 | 91 | 13006.63 | -146.51 | -1.13% | 1.06R | 35m | market | early-reversal | breakout | breakout | neutral | 65.57 | ↓141.94 | 0.0466 | 4.93 | **LOSS** |
| 49 | ARM | 12-05 15:05 | 12-05 15:40 | 143.18 | 142.38 | 98 | 14031.64 | -78.4 | -0.56% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 72.11 | ↑142.1 | 0.4954 | 1.65 | **LOSS** |
| 50 | ARM | 01-16 14:30 | 01-16 14:55 | 106.75 | 106.11 | 132 | 14091 | -84.48 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | neutral | 69.27 | ↓106.58 | -0.1668 | 2.26 | **LOSS** |
| 51 | ARM | 01-27 15:05 | 01-27 15:25 | 116.82 | 116.13 | 120 | 14018.4 | -82.8 | -0.59% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.3 | ↑115.62 | 0.3598 | 1.11 | **LOSS** |
| 52 | ARM | 02-25 14:30 | 02-25 16:15 | 129.5 | 131.38 | 108 | 13986 | +203.04 | +1.45% | 2.07R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑129.64 | 0.0117 | 1.96 | **WIN** |
| 53 | ARM | 04-16 14:50 | 04-16 15:40 | 160.08 | 164.65 | 88 | 14087.04 | +402.16 | +2.85% | 2.52R | 50m | market | profit-target | breakout | breakout | neutral | 57.28 | ↑158.22 | -0.1498 | 2.44 | **WIN** |
| 54 | ARM | 04-20 15:20 | 04-20 16:25 | 170.53 | 170.02 | 83 | 14153.99 | -42.33 | -0.3% | 0.22R | 65m | market | stagnation | breakout | breakout | neutral | 73.39 | ↑166.81 | 0.5909 | 2.69 | **LOSS** |
| 55 | ARM | 04-21 14:05 | 04-21 14:40 | 179.36 | 177.84 | 79 | 14169.44 | -120.08 | -0.85% | 0.43R | 35m | market | early-reversal | breakout | breakout | neutral | 65.25 | ↑176.94 | 1.123 | 1.28 | **LOSS** |
| 56 | ARM | 04-23 14:55 | 04-23 15:45 | 208.13 | 206.91 | 34 | 7076.42 | -41.48 | -0.59% | 0.3R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 72.21 | ↑201.69 | 3.0794 | 1.09 | **LOSS** |

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

- ✅ **Profit factor 1.52** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.84R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:35:02.179Z*
