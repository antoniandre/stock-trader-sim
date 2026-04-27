# Bot Trade Report — 86 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T10:10:29.313Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $2098.2 (+2.1%) over 86 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 86 |
| Win rate | 48.84% (42W / 44L) |
| Net P&L | $+2098.2 (+2.1%) |
| Gross profit | $5369.61 |
| Gross loss | $3271.41 |
| Profit factor | 1.64 |
| Avg win | $127.85 |
| Avg loss | $74.35 |
| Payoff ratio | 1.72:1 |
| Expectancy | $+24.4 / trade |
| Max drawdown | 0.53% |
| Sharpe ratio (ann.) | 3.37 |
| Trades / active day | 1.21 |
| Avg confidence | 99.24% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.9R |
| Starting equity | $100,000 |
| Ending equity | $102,098.2 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 35 | 42.86% | $+607.03 | $17.34 |
| Mid  10:30–11:30 | 51 | 52.94% | $+1491.17 | $29.24 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ABNB | 19 | 10 | 52.63% | $+841.42 | $+44.29 | 2.62 | eligible |
| NVDA | 34 | 16 | 47.06% | $+711.79 | $+20.94 | 1.53 | eligible |
| NET | 33 | 16 | 48.48% | $+544.99 | $+16.51 | 1.39 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 38 | 17 | 44.74% | $+654.8 | $+17.23 |
| trend | 48 | 25 | 52.08% | $+1443.4 | $+30.07 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 76 | 37 | 48.68% | $+1802.39 | $+23.72 |
| noisyHighBeta | 10 | 5 | 50% | $+295.81 | $+29.58 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ABNB | 13 | 2.31 | $+31.18 | 6 | 3.09 | $+72.68 | 0.13% | 2.4 | promote |
| Setup | trend | 33 | 1.54 | $+17.24 | 15 | 3.22 | $+58.3 | 0.26% | 2.42 | promote |
| Behavior | neutral | 50 | 1.55 | $+21.83 | 26 | 1.75 | $+27.34 | 0.45% | 1.33 | promote |
| Setup | breakout | 18 | 1.45 | $+25.14 | 20 | 1.25 | $+10.11 | 0.33% | 0.97 | watch |
| Symbol | NET | 20 | 1.65 | $+26.01 | 13 | 1.04 | $+1.91 | 0.32% | 0.85 | watch |
| Time slot | Open 9:30-10:30 | 29 | 1.66 | $+27.83 | 6 | 0.14 | $-33.32 | 0.2% | 0.09 | watch |
| Time slot | Mid 10:30-11:30 | 22 | 1.26 | $+9.75 | 29 | 2.3 | $+44.02 | 0.26% | 1.83 | reject |
| Symbol | NVDA | 18 | 1.1 | $+5.33 | 16 | 2.57 | $+38.49 | 0.18% | 1.87 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1890.57 | 1.56 |
| +3 bps/side | $+1475.43 | 1.41 |
| +5 bps/side | $+1060.31 | 1.27 |
| +10 bps/side | $+22.35 | 1.01 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 35 |
| timeout | 28 |
| trim-profit-target | 7 |
| profit-target | 5 |
| stagnation | 5 |
| breakeven-stop | 3 |
| trailing-stop | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 4 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 5 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 6 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 7 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 8 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 104 | 13912.08 | -104 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 9 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.7 | 136.34 | 101 | 13907.7 | -137.36 | -0.99% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 10 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 11 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 12 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 13 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 14 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 15 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 16 | NVDA | 06-25 14:15 | 06-25 15:05 | 151.98 | 151.76 | 92 | 13982.16 | -20.24 | -0.14% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 17 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.79 | 132.19 | 107 | 13994.53 | +149.8 | +1.07% | 1.32R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 18 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 19 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.04 | 138.8 | 101 | 13942.04 | +76.76 | +0.55% | 0.66R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 20 | NET | 07-21 13:55 | 07-21 14:20 | 199.86 | 197.69 | 70 | 13990.2 | -151.9 | -1.09% | 0.97R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 21 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 37 | 7693.04 | -69.93 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 22 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 23 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 24 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 25 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.46 | 177.94 | 79 | 13940.34 | +116.92 | +0.84% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 26 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 112 | 14014.56 | -1.12 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 27 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 30 | 13812.23 | +78.6 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 28 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 13812.23 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 29 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 30 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 31 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 75 | 13858.5 | +134.25 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 32 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 33 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 73 | 13866.35 | -137.24 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 34 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.69 | 122.26 | 58 | 14000.04 | +91.06 | +1.3% | 1.65R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 35 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.69 | 123.35 | 58 | 14000.04 | +154.28 | +2.2% | 2.78R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 36 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 37 | NVDA | 10-20 14:25 | 10-20 14:45 | 184.98 | 183.91 | 75 | 13873.5 | -80.25 | -0.58% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 38 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.84 | 128.4 | 109 | 14043.56 | -47.96 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 39 | NET | 10-30 14:00 | 10-30 14:30 | 229.43 | 228.31 | 61 | 13995.23 | -68.32 | -0.49% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 40 | NET | 10-30 15:20 | 10-30 15:40 | 230.99 | 229.88 | 60 | 13859.4 | -66.6 | -0.48% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 41 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.5 | 207.33 | 67 | 13969.5 | -78.39 | -0.56% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 42 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 55 | 14062.4 | -97.9 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 43 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.18 | 122.79 | 115 | 14050.7 | +70.15 | +0.5% | 0.56R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 44 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.92 | 122.32 | 114 | 14012.88 | -68.4 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 45 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.12 | 189.92 | 75 | 13959 | +285 | +2.04% | 1.28R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 46 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 36 | 13873.65 | +86.04 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 47 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 13873.65 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 48 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.92 | 117.31 | 120 | 14030.4 | +46.8 | +0.33% | 0.32R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 49 | NET | 12-02 14:35 | 12-02 15:55 | 203.19 | 203.22 | 69 | 14020.11 | +2.07 | +0.01% | 0.01R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 50 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.31 | 180.7 | 76 | 13855.56 | -122.36 | -0.88% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 51 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.6 | 135.77 | 102 | 13933.2 | -84.66 | -0.61% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 52 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.28 | 179.38 | 78 | 13905.84 | +85.8 | +0.62% | 0.72R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 53 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 54 | ABNB | 01-05 14:45 | 01-05 16:30 | 134.98 | 136.83 | 104 | 14037.92 | +192.4 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 55 | NET | 01-13 14:40 | 01-13 15:00 | 188.7 | 187.86 | 74 | 13963.8 | -62.16 | -0.45% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 56 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.28 | 189.13 | 73 | 13890.44 | -83.95 | -0.6% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 57 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.56 | 135.8 | 103 | 14065.68 | -78.28 | -0.56% | 0.74R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 58 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 59 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 60 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 43 | 7661.31 | +223.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 61 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 62 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 63 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 40 | 7582.4 | +86.8 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 64 | NET | 02-10 14:55 | 02-10 15:45 | 179.6 | 179.39 | 39 | 7004.4 | -8.19 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 71.54 | ↑178.09 | 1.2492 | 2.38 | **LOSS** |
| 65 | NET | 02-13 14:40 | 02-13 15:20 | 188.6 | 190.45 | 41 | 7732.6 | +75.85 | +0.98% | 0.58R | 40m | market | trailing-stop | breakout | breakout | noisyHighBeta | 65.65 | ↑187.11 | 0.893 | 1.58 | **WIN** |
| 66 | NET | 02-17 14:40 | 02-17 14:50 | 200.8 | 196.27 | 38 | 7630.4 | -172.14 | -2.26% | 1.4R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 68.07 | ↓198.53 | 0.5571 | 1.49 | **LOSS** |
| 67 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 68 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 69 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.42 | 130.19 | 110 | 14016.2 | +304.7 | +2.17% | 2.97R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 70 | NET | 02-26 14:55 | 02-26 15:15 | 175.06 | 173.84 | 40 | 7002.4 | -48.8 | -0.7% | 0.51R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 70.93 | ↓173.79 | 0.5739 | 1.59 | **LOSS** |
| 71 | NET | 03-02 14:30 | 03-02 16:10 | 173.2 | 178.51 | 41 | 7101.2 | +217.71 | +3.07% | 2.77R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 80.47 | ↑171.73 | 0.8311 | 1.33 | **WIN** |
| 72 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.25 | 180.95 | 77 | 14033.25 | -100.1 | -0.71% | 0.87R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 73 | ABNB | 03-04 14:50 | 03-04 16:35 | 136 | 137.43 | 103 | 14008 | +147.29 | +1.05% | 1.19R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 74 | NET | 03-04 15:10 | 03-04 15:35 | 185.57 | 184.49 | 76 | 14103.32 | -82.08 | -0.58% | 0.4R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 75 | NET | 03-09 15:25 | 03-09 16:20 | 202.04 | 201.9 | 69 | 13940.76 | -9.66 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 76 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.5 | 185.25 | 76 | 14022 | +57 | +0.41% | 0.44R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 77 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.72 | 127.58 | 110 | 14049.2 | -15.4 | -0.11% | 0.16R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 78 | NET | 03-20 14:30 | 03-20 14:50 | 224.92 | 221.91 | 62 | 13945.04 | -186.62 | -1.34% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 79 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 79 | 14069.11 | -56.88 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 80 | NVDA | 03-25 14:20 | 03-25 15:10 | 179.91 | 179.86 | 78 | 14032.98 | -3.9 | -0.03% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 66.03 | ↑178.95 | 1.0192 | 2.13 | **LOSS** |
| 81 | NET | 03-31 14:00 | 03-31 14:20 | 200.1 | 198.91 | 35 | 7003.5 | -41.65 | -0.59% | 0.44R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 88 | ↓198.4 | 1.1294 | 1.96 | **LOSS** |
| 82 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 83 | NET | 04-15 14:10 | 04-15 15:55 | 188.47 | 189.35 | 37 | 6973.39 | +32.56 | +0.47% | 0.24R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 81.52 | ↑185.88 | 2.0169 | 1.43 | **WIN** |
| 84 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.96 | 141.79 | 98 | 14010.08 | -114.66 | -0.82% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |
| 85 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.77 | 208.8 | 34 | 13924.36 | +137.02 | +1.97% | 1.42R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 86 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.77 | 209.69 | 34 | 13924.36 | +167.28 | +2.4% | 1.73R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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

- ✅ **Profit factor 1.64** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.9R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T10:10:29.313Z*
