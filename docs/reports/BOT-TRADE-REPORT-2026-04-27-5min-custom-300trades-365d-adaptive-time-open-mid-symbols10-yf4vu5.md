# Bot Trade Report — 245 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T12:17:10.536Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 10 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $3277.81 (+3.28%) over 245 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 245 |
| Win rate | 42.45% (104W / 141L) |
| Net P&L | $+3277.81 (+3.28%) |
| Gross profit | $13987.45 |
| Gross loss | $10709.64 |
| Profit factor | 1.31 |
| Avg win | $134.49 |
| Avg loss | $75.95 |
| Payoff ratio | 1.77:1 |
| Expectancy | $+13.38 / trade |
| Max drawdown | 1.29% |
| Sharpe ratio (ann.) | 1.91 |
| Trades / active day | 1.74 |
| Avg confidence | 99.58% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $103,277.81 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 93 | 44.09% | $+2533.39 | $27.24 |
| Mid  10:30–11:30 | 152 | 41.45% | $+744.42 | $4.9 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 34 | 14 | 41.18% | $+920.57 | $+27.08 | 1.52 | eligible |
| ABNB | 19 | 10 | 52.63% | $+745.77 | $+39.25 | 2.32 | eligible |
| SBUX | 22 | 12 | 54.55% | $+620.06 | $+28.18 | 1.88 | eligible |
| NVDA | 33 | 15 | 45.45% | $+463.19 | $+14.04 | 1.32 | eligible |
| TGT | 17 | 6 | 35.29% | $+419.72 | $+24.69 | 1.93 | throttle |
| NET | 27 | 12 | 44.44% | $+227.81 | $+8.44 | 1.17 | eligible |
| CRM | 18 | 7 | 38.89% | $+208.53 | $+11.59 | 1.37 | throttle |
| ARM | 30 | 11 | 36.67% | $+207.72 | $+6.92 | 1.16 | throttle |
| BA | 23 | 9 | 39.13% | $-187.87 | $-8.17 | 0.84 | throttle |
| MU | 22 | 8 | 36.36% | $-347.69 | $-15.8 | 0.75 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 80 | 33 | 41.25% | $+1199.6 | $+15 |
| trend | 165 | 71 | 43.03% | $+2078.21 | $+12.6 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 228 | 98 | 42.98% | $+2934.79 | $+12.87 |
| cleanTrend | 1 | 1 | 100% | $+408.63 | $+408.63 |
| noisyHighBeta | 16 | 5 | 31.25% | $-65.61 | $-4.1 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 21 | 1.38 | $+19.25 | 13 | 1.74 | $+39.72 | 0.29% | 1.45 | promote |
| Symbol | ABNB | 10 | 3.64 | $+46.48 | 9 | 1.73 | $+31.22 | 0.14% | 1.34 | promote |
| Symbol | SBUX | 15 | 2.51 | $+36.94 | 7 | 1.19 | $+9.43 | 0.17% | 0.95 | watch |
| Behavior | neutral | 140 | 1.49 | $+18.73 | 88 | 1.06 | $+3.55 | 1.22% | 0.85 | watch |
| Time slot | Open 9:30-10:30 | 80 | 1.83 | $+32.92 | 13 | 0.88 | $-7.7 | 0.45% | 0.7 | watch |
| Symbol | NET | 16 | 1.45 | $+21.73 | 11 | 0.79 | $-10.89 | 0.51% | 0.63 | watch |
| Symbol | TGT | 11 | 3.38 | $+45.33 | 6 | 0.67 | $-13.16 | 0.24% | 0.47 | watch |
| Setup | trend | 115 | 1.75 | $+24.75 | 50 | 0.72 | $-15.37 | 1.07% | 0.58 | watch |
| Behavior | noisyHighBeta | 6 | 2.7 | $+22.49 | 10 | 0.52 | $-20.06 | 0.27% | 0.43 | watch |
| Symbol | BA | 13 | 2.82 | $+44.73 | 10 | 0.09 | $-76.93 | 0.84% | 0.06 | watch |
| Symbol | MU | 14 | 1.47 | $+20.56 | 8 | 0.18 | $-79.43 | 0.74% | 0.14 | watch |
| Symbol | NVDA | 16 | 0.83 | $-9.1 | 17 | 2.08 | $+35.81 | 0.24% | 1.59 | reject |
| Symbol | CRM | 10 | 0.93 | $-2.61 | 8 | 2.11 | $+29.33 | 0.21% | 1.43 | reject |
| Setup | breakout | 32 | 1.19 | $+9.99 | 48 | 1.36 | $+18.33 | 0.51% | 1.07 | reject |
| Time slot | Mid 10:30-11:30 | 67 | 1.23 | $+7.95 | 85 | 1.05 | $+2.49 | 1.03% | 0.83 | reject |
| Symbol | ARM | 21 | 1.27 | $+9.49 | 9 | 1.01 | $+0.94 | 0.39% | 0.84 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2654.49 | 1.24 |
| +3 bps/side | $+1407.8 | 1.12 |
| +5 bps/side | $+161.16 | 1.01 |
| +10 bps/side | $-2955.52 | 0.8 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 96 |
| timeout | 69 |
| stagnation | 29 |
| trim-profit-target | 15 |
| breakeven-stop | 14 |
| profit-target | 12 |
| trailing-stop | 5 |
| stop-loss | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.03 | 106.62 | 132 | 13995.96 | +77.88 | +0.56% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | NET | 05-01 13:45 | 05-01 14:10 | 124.17 | 123.11 | 112 | 13907.04 | -118.72 | -0.85% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 3 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 75 | 13834.5 | -51.75 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 4 | ARM | 05-01 14:35 | 05-01 15:30 | 118.56 | 118.41 | 118 | 13990.08 | -17.7 | -0.13% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑117.29 | 1.6688 | 1.2 | **LOSS** |
| 5 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.79 | 114.16 | 122 | 14004.38 | -76.86 | -0.55% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 6 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.37 | 682 | 13987.82 | -95.48 | -0.68% | 0.62R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 7 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 74 | 13833.56 | -61.42 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 8 | SBUX | 05-02 14:25 | 05-02 14:50 | 83.91 | 83.6 | 166 | 13929.06 | -51.46 | -0.37% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 9 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.83 | 126.3 | 110 | 13951.3 | -58.3 | -0.42% | 0.27R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 10 | MU | 05-13 13:30 | 05-13 15:15 | 93.9 | 95.72 | 138 | 12958.2 | +251.16 | +1.94% | 2.52R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 11 | ARM | 05-13 15:00 | 05-13 16:45 | 127.63 | 128.69 | 109 | 13911.67 | +115.54 | +0.83% | 1.04R | 105m | market | timeout | trend | trend | neutral | 70.44 | ↑126.26 | 0.7319 | 1.4 | **WIN** |
| 12 | MU | 05-13 15:25 | 05-13 17:10 | 96.05 | 96.37 | 146 | 14023.3 | +46.72 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 13 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 14 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 73 | 13999.94 | +55.48 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 15 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13999.94 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 16 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.55 | 650 | 13975 | +32.5 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 17 | ARM | 05-16 14:15 | 05-16 14:35 | 135.19 | 134.17 | 103 | 13924.57 | -105.06 | -0.75% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↓134.56 | 0.5053 | 1.34 | **LOSS** |
| 18 | TGT | 05-20 14:45 | 05-20 15:35 | 99.1 | 98.9 | 141 | 13973.1 | -28.2 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 19 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 20 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.36 | 136.81 | 51 | 13942.08 | +73.95 | +1.07% | 1.53R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 21 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.36 | 137.22 | 52 | 13942.08 | +96.72 | +1.37% | 1.96R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 22 | NET | 05-21 15:10 | 05-21 16:55 | 158.32 | 159.41 | 88 | 13932.16 | +95.92 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 23 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.8 | 132.74 | 104 | 13915.2 | -110.24 | -0.79% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 24 | TGT | 05-22 14:00 | 05-22 15:10 | 94.97 | 94.83 | 147 | 13960.59 | -20.58 | -0.15% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 25 | MU | 05-22 15:05 | 05-22 15:25 | 97.06 | 96.47 | 144 | 13976.64 | -84.96 | -0.61% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 26 | ARM | 05-27 15:05 | 05-27 16:50 | 134.89 | 135.46 | 103 | 13893.67 | +58.71 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 27 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 28 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 29 | ARM | 06-03 13:40 | 06-03 15:25 | 128.4 | 129.68 | 109 | 13995.6 | +139.52 | +1% | 1.2R | 105m | market | timeout | trend | breakout | neutral | 61.42 | ↑127.89 | 0.1096 | 1.79 | **WIN** |
| 30 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 31 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 147 | 13928.25 | +186.69 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 32 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 105 | 13875.75 | +121.8 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 33 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 80 | 13986.4 | +356.8 | +2.55% | 2.63R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 34 | NET | 06-05 15:10 | 06-05 15:35 | 180.54 | 179.3 | 77 | 13901.58 | -95.48 | -0.69% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 35 | ARM | 06-06 15:05 | 06-06 15:25 | 134.99 | 134.25 | 103 | 13903.97 | -76.22 | -0.55% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 36 | MU | 06-09 13:55 | 06-09 15:40 | 110.3 | 110.49 | 127 | 14008.1 | +24.13 | +0.17% | 0.16R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 37 | INTC | 06-09 14:05 | 06-09 14:55 | 20.84 | 20.79 | 672 | 14004.48 | -33.6 | -0.24% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 72 | ↑20.61 | 0.1507 | 1.72 | **LOSS** |
| 38 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 65 | 13962.65 | +94.25 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 39 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 40 | NVDA | 06-12 14:40 | 06-12 15:20 | 144.82 | 144.39 | 96 | 13902.72 | -41.28 | -0.3% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 41 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 68 | 13859.76 | -60.52 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 42 | MU | 06-16 14:40 | 06-16 15:25 | 120.48 | 119.85 | 116 | 13975.68 | -73.08 | -0.52% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 43 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 44 | MU | 06-18 14:30 | 06-18 14:50 | 122.52 | 121.58 | 114 | 13967.28 | -107.16 | -0.77% | 0.88R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 45 | ARM | 06-23 14:00 | 06-23 15:05 | 147.17 | 147.06 | 95 | 13981.15 | -10.45 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 46 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 47 | NET | 06-23 14:25 | 06-23 14:45 | 181.79 | 180.66 | 77 | 13997.83 | -87.01 | -0.62% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 48 | INTC | 06-24 14:00 | 06-24 15:10 | 21.89 | 22.47 | 639 | 13987.71 | +370.62 | +2.65% | 2.76R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 49 | ARM | 06-24 14:50 | 06-24 15:45 | 154.67 | 154.49 | 90 | 13920.3 | -16.2 | -0.12% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 63.25 | ↑153.56 | 1.6211 | 1.47 | **LOSS** |
| 50 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 73 | 13927.67 | -65.7 | -0.47% | 0.64R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 51 | NVDA | 06-25 14:15 | 06-25 15:05 | 152.01 | 151.73 | 91 | 13832.91 | -25.48 | -0.18% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 52 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.82 | 132.16 | 107 | 13997.74 | +143.38 | +1.02% | 1.26R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 53 | CRM | 06-27 14:00 | 06-27 14:20 | 273.34 | 272.47 | 51 | 13940.34 | -44.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 54 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 602 | 14056.7 | -174.58 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 55 | ARM | 06-27 14:40 | 06-27 16:10 | 163.48 | 165.77 | 42 | 13895.8 | +96.18 | +1.4% | 1.2R | 90m | market | trim-profit-target | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 56 | ARM | 06-27 14:40 | 06-27 16:25 | 163.48 | 165.71 | 43 | 13895.8 | +95.89 | +1.36% | 1.16R | 105m | market | timeout | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 57 | TGT | 07-01 13:40 | 07-01 14:00 | 100.55 | 100.18 | 128 | 12870.4 | -47.36 | -0.37% | 0.48R | 20m | market | early-reversal | breakout | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **LOSS** |
| 58 | TGT | 07-01 14:10 | 07-01 15:10 | 101.18 | 103.75 | 159 | 16087.62 | +408.63 | +2.54% | 2.49R | 60m | market | profit-target | trend | trend | cleanTrend | 75.8 | ↑100.15 | 0.6252 | 1.05 | **WIN** |
| 59 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.23 | 95.16 | 150 | 13984.5 | +289.5 | +2.07% | 2.76R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 60 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.12 | 618 | 14016.24 | +271.92 | +1.94% | 2.31R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 61 | MU | 07-02 14:45 | 07-02 15:40 | 122.16 | 122.08 | 114 | 13926.24 | -9.12 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 62 | BA | 07-02 15:10 | 07-02 16:55 | 212.25 | 212.56 | 66 | 14008.5 | +20.46 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 63 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 74 | 13994.88 | +176.86 | +1.26% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 64 | CRM | 07-08 14:00 | 07-08 14:55 | 271.8 | 275.1 | 25 | 13861.8 | +82.5 | +1.21% | 1.73R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 65 | CRM | 07-08 14:00 | 07-08 15:45 | 271.8 | 274.68 | 26 | 13861.8 | +74.88 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 66 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.03 | 95.09 | 147 | 13969.41 | +8.82 | +0.06% | 0.09R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 67 | INTC | 07-08 15:00 | 07-08 15:20 | 23.41 | 23.24 | 601 | 14069.41 | -102.17 | -0.73% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 68 | ARM | 07-11 14:00 | 07-11 15:20 | 149.21 | 149.15 | 94 | 14025.74 | -5.64 | -0.04% | 0.03R | 80m | market | breakeven-stop | breakout | trend | neutral | 64.05 | ↓147.38 | 0.2988 | 1.26 | **LOSS** |
| 69 | CRM | 07-14 13:45 | 07-14 14:05 | 261.82 | 259.87 | 53 | 13876.46 | -103.35 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 80.11 | ↓260.45 | 0.2308 | 1.47 | **LOSS** |
| 70 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.07 | 138.77 | 101 | 13945.07 | +70.7 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 71 | NET | 07-21 13:55 | 07-21 14:20 | 199.9 | 197.65 | 70 | 13993 | -157.5 | -1.13% | 1.01R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 72 | CRM | 07-21 14:00 | 07-21 14:20 | 264.29 | 262.55 | 52 | 13743.08 | -90.48 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 73 | ARM | 07-21 14:10 | 07-21 15:15 | 161.58 | 163.11 | 43 | 13895.88 | +65.79 | +0.95% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 74 | ARM | 07-21 14:10 | 07-21 15:55 | 161.58 | 162.81 | 43 | 13895.88 | +52.89 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 75 | BA | 07-23 15:05 | 07-23 16:30 | 231.62 | 233.85 | 30 | 13897.2 | +66.9 | +0.96% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 76 | BA | 07-23 15:05 | 07-23 16:50 | 231.62 | 233.86 | 30 | 13897.2 | +67.2 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 77 | MU | 07-24 15:00 | 07-24 15:30 | 112.61 | 111.83 | 124 | 13963.64 | -96.72 | -0.69% | 0.78R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 78 | ARM | 07-24 15:05 | 07-24 15:30 | 161.2 | 160.68 | 87 | 14024.4 | -45.24 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 73.63 | ↑159.51 | 0.3803 | 3.11 | **LOSS** |
| 79 | ARM | 07-25 14:35 | 07-25 16:20 | 162.96 | 163.86 | 86 | 14014.56 | +77.4 | +0.55% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.55 | ↑161.38 | 0.4531 | 1.82 | **WIN** |
| 80 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.38 | 89.36 | 86 | 7686.68 | -1.72 | -0.02% | 0.02R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **LOSS** |
| 81 | TGT | 08-06 15:15 | 08-06 16:15 | 105.54 | 105.36 | 133 | 14036.82 | -23.94 | -0.17% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 82 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.04 | 91.73 | 152 | 13990.08 | -47.12 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 83 | ARM | 08-08 14:15 | 08-08 14:35 | 137.65 | 136.73 | 102 | 14040.3 | -93.84 | -0.67% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 84 | MU | 08-08 14:15 | 08-08 15:20 | 113.83 | 118.33 | 122 | 13887.26 | +549 | +3.95% | 4.16R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 85 | ARM | 08-08 15:15 | 08-08 15:35 | 138.59 | 137.75 | 101 | 13997.59 | -84.84 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 63.34 | ↑136.97 | 0.6604 | 2.49 | **LOSS** |
| 86 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 60 | 13863.6 | -67.8 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 87 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 654 | 14041.38 | -65.4 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 88 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 644 | 14032.76 | +296.24 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 89 | CRM | 08-13 14:50 | 08-13 15:40 | 234.29 | 234.16 | 59 | 13823.11 | -7.67 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 90 | NET | 08-15 14:15 | 08-15 15:45 | 198.84 | 200.89 | 35 | 13918.8 | +71.75 | +1.03% | 1.17R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 91 | NET | 08-15 14:15 | 08-15 16:00 | 198.84 | 200.83 | 35 | 13918.8 | +69.65 | +1% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 92 | TGT | 08-18 14:45 | 08-18 15:05 | 106.04 | 105.55 | 132 | 13997.28 | -64.68 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 93 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.81 | 127.26 | 109 | 13931.29 | -59.95 | -0.43% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 94 | ARM | 08-21 15:00 | 08-21 15:25 | 133.47 | 132.54 | 105 | 14014.35 | -97.65 | -0.7% | 0.79R | 25m | market | early-reversal | trend | trend | neutral | 70.99 | ↑132 | 0.7656 | 2.7 | **LOSS** |
| 95 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.49 | 177.9 | 79 | 13942.71 | +111.39 | +0.8% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 96 | MU | 08-22 14:40 | 08-22 15:10 | 120.35 | 119.69 | 116 | 13960.6 | -76.56 | -0.55% | 0.33R | 30m | market | early-reversal | trend | trend | neutral | 70.7 | ↑119.08 | 1.0606 | 1.19 | **LOSS** |
| 97 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.7 | 87.9 | 159 | 13944.3 | +31.8 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 98 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.25 | 584 | 14086.08 | +75.92 | +0.54% | 0.68R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 99 | CRM | 09-05 15:10 | 09-05 16:00 | 250.06 | 249.61 | 55 | 13753.3 | -24.75 | -0.18% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 45.95 | ↑248.1 | 1.2377 | 1.13 | **LOSS** |
| 100 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.15 | 125.1 | 112 | 14016.8 | -5.6 | -0.04% | 0.05R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 101 | NET | 09-11 14:15 | 09-11 15:25 | 226.47 | 229 | 30 | 13814.67 | +75.9 | +1.12% | 1R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 102 | NET | 09-11 14:15 | 09-11 16:00 | 226.47 | 229.66 | 31 | 13814.67 | +98.89 | +1.41% | 1.26R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 103 | ARM | 09-11 15:25 | 09-11 15:50 | 158.27 | 157.48 | 88 | 13927.76 | -69.52 | -0.5% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 63.48 | ↑156.18 | 1.0582 | 2.33 | **LOSS** |
| 104 | MU | 09-12 14:20 | 09-12 16:05 | 156.13 | 156.43 | 90 | 14051.7 | +27 | +0.19% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 105 | NET | 09-15 13:40 | 09-15 15:25 | 224.29 | 227.1 | 62 | 13905.98 | +174.22 | +1.25% | 1.6R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 106 | INTC | 09-16 14:10 | 09-16 15:00 | 25.21 | 25.12 | 559 | 14092.39 | -50.31 | -0.36% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 107 | MU | 09-17 14:15 | 09-17 14:35 | 160.29 | 159.28 | 87 | 13945.23 | -87.87 | -0.63% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 65 | ↑158.53 | 0.4402 | 1.01 | **LOSS** |
| 108 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.65 | 84.36 | 165 | 13967.25 | -47.85 | -0.34% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 109 | INTC | 09-22 13:40 | 09-22 14:00 | 30.1 | 29.51 | 468 | 14086.8 | -276.12 | -1.96% | 1.7R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 110 | CRM | 09-22 14:30 | 09-22 16:15 | 247.76 | 248.32 | 56 | 13874.56 | +31.36 | +0.23% | 0.25R | 105m | market | timeout | trend | trend | neutral | 54.29 | ↑245.46 | 0.2287 | 1.58 | **WIN** |
| 111 | MU | 09-22 15:15 | 09-22 15:45 | 166.02 | 166.06 | 84 | 13945.68 | +3.36 | +0.02% | 0.03R | 30m | market | breakeven-stop | trend | trend | neutral | 64.13 | ↑164.32 | 0.7393 | 1.55 | **WIN** |
| 112 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.36 | 179.46 | 79 | 13932.44 | +244.9 | +1.76% | 1.64R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 113 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.81 | 186.54 | 75 | 13860.75 | +129.75 | +0.94% | 0.74R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 114 | SBUX | 10-02 14:20 | 10-02 15:10 | 86.8 | 86.37 | 161 | 13974.8 | -69.23 | -0.5% | 0.43R | 50m | market | early-reversal | trend | trend | neutral | 79.02 | ↓86.08 | 0.5608 | 1.68 | **LOSS** |
| 115 | INTC | 10-02 15:15 | 10-02 16:50 | 36.51 | 37 | 105 | 7703.61 | +51.45 | +1.34% | 1.13R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 116 | INTC | 10-02 15:15 | 10-02 17:00 | 36.51 | 37.01 | 106 | 7703.61 | +53 | +1.37% | 1.15R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 117 | MU | 10-03 15:15 | 10-03 15:35 | 191.22 | 190.15 | 73 | 13959.06 | -78.11 | -0.56% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑188.7 | 1.7074 | 1.12 | **LOSS** |
| 118 | BA | 10-06 14:10 | 10-06 15:55 | 218.49 | 220.89 | 64 | 13983.36 | +153.6 | +1.1% | 1.33R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 119 | ARM | 10-09 15:05 | 10-09 15:25 | 169.05 | 167.78 | 82 | 13862.1 | -104.14 | -0.75% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 69.25 | ↑164.84 | 1.1212 | 1.63 | **LOSS** |
| 120 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.95 | 194.05 | 72 | 14036.4 | -64.8 | -0.46% | 0.62R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 121 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.98 | 188.04 | 73 | 13868.54 | -141.62 | -1.02% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 122 | SBUX | 10-13 15:20 | 10-13 17:05 | 79.65 | 80.32 | 175 | 13938.75 | +117.25 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑78.95 | 0.1677 | 1.42 | **WIN** |
| 123 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.71 | 122.24 | 58 | 14002.36 | +88.74 | +1.27% | 1.61R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 124 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.71 | 123.33 | 58 | 14002.36 | +151.96 | +2.17% | 2.75R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 125 | TGT | 10-14 15:05 | 10-14 16:00 | 88.79 | 88.69 | 158 | 14028.82 | -15.8 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 71.23 | ↑87.83 | 0.3663 | 1.07 | **LOSS** |
| 126 | SBUX | 10-15 14:00 | 10-15 15:25 | 82.71 | 82.73 | 169 | 13977.99 | +3.38 | +0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 77.12 | ↑82.22 | 0.2984 | 1.07 | **WIN** |
| 127 | TGT | 10-15 14:00 | 10-15 15:05 | 90.94 | 90.88 | 154 | 14004.76 | -9.24 | -0.07% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 79.92 | ↑90.36 | 0.4165 | 1.06 | **LOSS** |
| 128 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 204 | 7727.52 | -77.52 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 129 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.49 | 182.08 | 76 | 13945.24 | -107.16 | -0.77% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 130 | SBUX | 10-17 15:00 | 10-17 16:45 | 85.18 | 85.6 | 164 | 13969.52 | +68.88 | +0.49% | 0.64R | 105m | market | timeout | trend | trend | neutral | 59.03 | ↑84.66 | 0.1425 | 1.41 | **WIN** |
| 131 | NVDA | 10-20 14:25 | 10-20 14:45 | 185.01 | 183.87 | 75 | 13875.75 | -85.5 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 132 | CRM | 10-21 14:20 | 10-21 16:05 | 260.43 | 263.14 | 53 | 13802.79 | +143.63 | +1.04% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 133 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.86 | 128.38 | 109 | 14045.74 | -52.32 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 134 | SBUX | 10-27 14:00 | 10-27 14:20 | 87.37 | 87.03 | 160 | 13979.2 | -54.4 | -0.39% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 74.79 | ↑86.66 | 0.1516 | 1.16 | **LOSS** |
| 135 | ARM | 10-27 14:20 | 10-27 14:35 | 177.31 | 180.18 | 78 | 13830.18 | +223.86 | +1.62% | 0.93R | 15m | market | trailing-stop | trend | trend | neutral | 74.37 | ↑176.02 | 1.2808 | 1.8 | **WIN** |
| 136 | INTC | 10-28 15:15 | 10-28 16:55 | 41.55 | 42.13 | 93 | 7728.3 | +53.94 | +1.4% | 0.92R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 137 | INTC | 10-28 15:15 | 10-28 17:00 | 41.55 | 42.15 | 93 | 7728.3 | +55.8 | +1.44% | 0.95R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 138 | NET | 10-30 14:00 | 10-30 14:30 | 229.48 | 228.27 | 61 | 13998.28 | -73.81 | -0.53% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 139 | NET | 10-30 15:20 | 10-30 15:40 | 231.04 | 229.83 | 60 | 13862.4 | -72.6 | -0.52% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 140 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.54 | 207.29 | 67 | 13972.18 | -83.75 | -0.6% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 141 | BA | 11-03 14:30 | 11-03 16:15 | 202.63 | 204.84 | 69 | 13981.47 | +152.49 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 142 | NET | 11-03 14:35 | 11-03 15:15 | 255.73 | 253.85 | 54 | 13809.42 | -101.52 | -0.74% | 0.45R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 143 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.82 | 79.28 | 175 | 13968.5 | -94.5 | -0.68% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 144 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.44 | 84.7 | 154 | 12849.76 | +194.04 | +1.51% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 145 | INTC | 11-07 15:05 | 11-07 15:25 | 37.97 | 37.63 | 370 | 14048.9 | -125.8 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 146 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.42 | 86.68 | 164 | 14008.88 | +206.64 | +1.48% | 2.11R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 147 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.21 | 122.77 | 115 | 14054.15 | +64.4 | +0.46% | 0.51R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 148 | CRM | 11-12 14:30 | 11-12 14:50 | 247.85 | 246.99 | 52 | 12888.2 | -44.72 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 71.38 | ↓247.15 | 0.3776 | 1.43 | **LOSS** |
| 149 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.94 | 122.3 | 114 | 14015.16 | -72.96 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 150 | MU | 11-13 14:30 | 11-13 14:40 | 246.97 | 238.92 | 56 | 13830.32 | -450.8 | -3.26% | 3.84R | 10m | market | stop-loss | breakout | trend | neutral | 69.78 | ↓245.61 | 0.1631 | 5.26 | **LOSS** |
| 151 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.15 | 189.89 | 75 | 13961.25 | +280.5 | +2.01% | 1.26R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 152 | ARM | 11-17 14:30 | 11-17 15:05 | 142.93 | 141.32 | 90 | 12863.7 | -144.9 | -1.13% | 1.06R | 35m | market | early-reversal | breakout | breakout | neutral | 65.57 | ↓141.94 | 0.0466 | 4.93 | **LOSS** |
| 153 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.59 | 85.92 | 162 | 14027.58 | -108.54 | -0.77% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 154 | INTC | 11-19 14:45 | 11-19 15:55 | 34.91 | 35.05 | 402 | 14033.82 | +56.28 | +0.4% | 0.37R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 155 | TGT | 11-20 14:30 | 11-20 14:50 | 86.84 | 86.15 | 162 | 14068.08 | -111.78 | -0.79% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 156 | NET | 11-24 14:30 | 11-24 16:05 | 190.09 | 192.4 | 36 | 13876.57 | +83.16 | +1.22% | 1.17R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 157 | NET | 11-24 14:30 | 11-24 16:15 | 190.09 | 192.12 | 37 | 13876.57 | +75.11 | +1.07% | 1.03R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 158 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.94 | 117.29 | 120 | 14032.8 | +42 | +0.3% | 0.29R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 159 | MU | 11-28 15:00 | 11-28 15:20 | 236.88 | 234.13 | 32 | 7580.16 | -88 | -1.16% | 0.76R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.65 | ↓236.4 | 1.4354 | 1.2 | **LOSS** |
| 160 | NET | 12-02 14:35 | 12-02 15:55 | 203.23 | 203.18 | 69 | 14022.87 | -3.45 | -0.02% | 0.02R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **LOSS** |
| 161 | INTC | 12-02 14:45 | 12-02 15:25 | 41.14 | 42.26 | 341 | 14028.74 | +381.92 | +2.72% | 2.06R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 162 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.35 | 180.66 | 76 | 13858.6 | -128.44 | -0.93% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 163 | ARM | 12-05 15:05 | 12-05 15:40 | 143.18 | 142.38 | 97 | 13888.46 | -77.6 | -0.56% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 72.11 | ↑142.1 | 0.4954 | 1.65 | **LOSS** |
| 164 | BA | 12-08 14:30 | 12-08 16:15 | 204.21 | 205.25 | 68 | 13886.28 | +70.72 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 165 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 69 | 14028.39 | -61.41 | -0.44% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 166 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.67 | 353 | 14105.88 | -102.37 | -0.73% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 167 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 67 | 13978.21 | -54.94 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 168 | MU | 12-17 14:35 | 12-17 15:30 | 235.23 | 233.61 | 32 | 7527.36 | -51.84 | -0.69% | 0.58R | 55m | market | stagnation | trend | trend | noisyHighBeta | 74.36 | ↓235.12 | 0.4878 | 2.15 | **LOSS** |
| 169 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.63 | 135.74 | 102 | 13936.26 | -90.78 | -0.65% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 170 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 171 | INTC | 12-19 14:35 | 12-19 15:35 | 37.09 | 37.06 | 380 | 14094.2 | -11.4 | -0.08% | 0.08R | 60m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 172 | CRM | 12-22 15:05 | 12-22 15:55 | 262.48 | 262.53 | 53 | 13911.44 | +2.65 | +0.02% | 0.02R | 50m | market | breakeven-stop | trend | trend | neutral | 68.85 | ↑260.85 | 0.5289 | 1.17 | **WIN** |
| 173 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.23 | 189.89 | 73 | 13959.79 | -97.82 | -0.7% | 0.91R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 174 | TGT | 01-02 14:35 | 01-02 15:00 | 99.03 | 98.66 | 141 | 13963.23 | -52.17 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 77.5 | ↑98.41 | 0.0437 | 1.78 | **LOSS** |
| 175 | ABNB | 01-05 14:45 | 01-05 16:30 | 135.01 | 136.8 | 104 | 14041.04 | +186.16 | +1.33% | 1.9R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 176 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.39 | 86.01 | 82 | 14003.96 | +50.84 | +0.73% | 0.92R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 177 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.39 | 86.43 | 82 | 14003.96 | +85.28 | +1.22% | 1.54R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 178 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.7 | 89.01 | 160 | 14032 | +209.6 | +1.49% | 2.04R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 179 | BA | 01-06 15:20 | 01-06 15:40 | 231.31 | 229.57 | 60 | 13878.6 | -104.4 | -0.75% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 180 | BA | 01-09 14:35 | 01-09 15:35 | 231.46 | 231.24 | 60 | 13887.6 | -13.2 | -0.1% | 0.14R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 181 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.8 | 89.21 | 157 | 14098.6 | -92.63 | -0.66% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 182 | NET | 01-13 14:40 | 01-13 15:00 | 188.73 | 187.83 | 74 | 13966.02 | -66.6 | -0.48% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 183 | INTC | 01-13 15:15 | 01-13 15:40 | 47.27 | 46.69 | 164 | 7752.28 | -95.12 | -1.23% | 0.62R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 184 | TGT | 01-14 14:40 | 01-14 15:05 | 110.56 | 110 | 127 | 14041.12 | -71.12 | -0.51% | 0.67R | 25m | market | early-reversal | breakout | breakout | neutral | 80.73 | ↓109.85 | 0.2361 | 1.51 | **LOSS** |
| 185 | ARM | 01-16 14:30 | 01-16 14:55 | 106.75 | 106.11 | 131 | 13984.25 | -83.84 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | neutral | 69.27 | ↓106.58 | -0.1668 | 2.26 | **LOSS** |
| 186 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.32 | 189.09 | 73 | 13893.36 | -89.79 | -0.65% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 187 | BA | 01-22 14:30 | 01-22 14:55 | 252.81 | 251.66 | 55 | 13904.55 | -63.25 | -0.45% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 188 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.58 | 135.77 | 103 | 14067.74 | -83.43 | -0.59% | 0.78R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 189 | CRM | 01-23 14:30 | 01-23 14:50 | 230.3 | 229.16 | 60 | 13818 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 79.92 | ↓229.32 | 0.4051 | 2.01 | **LOSS** |
| 190 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 80 | 14006.4 | +80 | +0.57% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 191 | MU | 01-27 14:35 | 01-27 16:20 | 405.02 | 406.37 | 31 | 12555.62 | +41.85 | +0.33% | 0.2R | 105m | market | timeout | breakout | breakout | neutral | 79.1 | ↓404.15 | 1.3266 | 1.73 | **WIN** |
| 192 | ARM | 01-27 15:05 | 01-27 15:25 | 116.82 | 116.13 | 119 | 13901.58 | -82.11 | -0.59% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.3 | ↑115.62 | 0.3598 | 1.11 | **LOSS** |
| 193 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.13 | 189.57 | 73 | 13806.49 | +32.12 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 194 | INTC | 01-30 15:15 | 01-30 16:05 | 48.72 | 48.51 | 159 | 7746.48 | -33.39 | -0.43% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 195 | TGT | 01-30 15:20 | 01-30 17:05 | 104.09 | 104.05 | 134 | 13948.06 | -5.36 | -0.04% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **LOSS** |
| 196 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 197 | CRM | 02-02 14:40 | 02-02 15:30 | 215.48 | 215.18 | 64 | 13790.72 | -19.2 | -0.14% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 198 | BA | 02-03 14:30 | 02-03 14:50 | 237.28 | 235.31 | 59 | 13999.52 | -116.23 | -0.83% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 199 | SBUX | 02-03 14:40 | 02-03 16:25 | 93.02 | 93.42 | 151 | 14046.02 | +60.4 | +0.43% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 200 | CRM | 02-04 15:25 | 02-04 16:15 | 197.52 | 196.67 | 70 | 13826.4 | -59.5 | -0.43% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 53.69 | ↑193.04 | 0.1561 | 1.58 | **LOSS** |
| 201 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.4 | 181.94 | 39 | 13915.2 | +138.06 | +1.98% | 1.14R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 202 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.4 | 183.49 | 39 | 13915.2 | +198.51 | +2.85% | 1.64R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 203 | TGT | 02-13 15:05 | 02-13 16:45 | 114.75 | 114.77 | 122 | 13999.5 | +2.44 | +0.02% | 0.02R | 100m | market | breakeven-stop | breakout | breakout | neutral | 65.91 | ↑113.6 | 0.3361 | 1.19 | **WIN** |
| 204 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 205 | INTC | 02-24 14:35 | 02-24 16:05 | 44.02 | 45.83 | 294 | 12941.88 | +532.14 | +4.11% | 2.32R | 90m | market | profit-target | breakout | breakout | neutral | 62.02 | ↑44.07 | 0.1741 | 1.36 | **WIN** |
| 206 | MU | 02-24 14:35 | 02-24 14:50 | 425.84 | 424.32 | 32 | 13626.88 | -48.64 | -0.36% | 0.25R | 15m | market | trailing-stop | breakout | breakout | neutral | 78.66 | ↓424.99 | 0.7161 | 4.48 | **LOSS** |
| 207 | BA | 02-24 14:40 | 02-24 15:30 | 233.05 | 233.11 | 60 | 13983 | +3.6 | +0.03% | 0.04R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 208 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.12 | 191.87 | 73 | 14024.76 | -18.25 | -0.13% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 209 | ARM | 02-25 14:30 | 02-25 16:15 | 129.5 | 131.38 | 107 | 13856.5 | +201.16 | +1.45% | 2.07R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑129.64 | 0.0117 | 1.96 | **WIN** |
| 210 | ABNB | 02-25 14:35 | 02-25 16:20 | 127.44 | 130.16 | 110 | 14018.4 | +299.2 | +2.13% | 2.92R | 105m | market | timeout | breakout | trend | neutral | 70.9 | ↑127.1 | 0.0751 | 1 | **WIN** |
| 211 | CRM | 02-25 14:50 | 02-25 16:10 | 188.87 | 188.59 | 73 | 13787.51 | -20.44 | -0.15% | 0.12R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.03 | ↑185.75 | 0.1348 | 1.26 | **LOSS** |
| 212 | INTC | 02-27 15:00 | 02-27 15:20 | 45.96 | 45.45 | 308 | 14155.68 | -157.08 | -1.11% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 213 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.29 | 180.91 | 77 | 14036.33 | -106.26 | -0.76% | 0.93R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 214 | INTC | 03-04 14:45 | 03-04 16:30 | 43.93 | 44.68 | 321 | 14101.53 | +240.75 | +1.71% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 60.5 | ↑43.8 | 0.0616 | 1.83 | **WIN** |
| 215 | ABNB | 03-04 14:50 | 03-04 16:35 | 136.03 | 137.4 | 103 | 14011.09 | +141.11 | +1.01% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 77.04 | ↑134.41 | 0.3061 | 1.2 | **WIN** |
| 216 | NET | 03-04 15:10 | 03-04 15:35 | 185.6 | 184.46 | 75 | 13920 | -85.5 | -0.61% | 0.42R | 25m | market | early-reversal | breakout | breakout | neutral | 84.22 | ↑182.37 | 0.8601 | 1.42 | **LOSS** |
| 217 | INTC | 03-05 15:00 | 03-05 15:30 | 46.25 | 45.6 | 306 | 14152.5 | -198.9 | -1.41% | 0.85R | 30m | market | early-reversal | breakout | breakout | neutral | 59.57 | ↓45.74 | 0.0158 | 1.47 | **LOSS** |
| 218 | NET | 03-09 15:25 | 03-09 16:20 | 202.08 | 201.86 | 69 | 13943.52 | -15.18 | -0.11% | 0.1R | 55m | market | stagnation | breakout | breakout | neutral | 85.56 | ↑198.18 | 1.4288 | 3.53 | **LOSS** |
| 219 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.53 | 185.21 | 76 | 14024.28 | +51.68 | +0.37% | 0.4R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 220 | INTC | 03-10 14:55 | 03-10 16:25 | 47.33 | 47.3 | 164 | 7762.12 | -4.92 | -0.06% | 0.04R | 90m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.19 | ↑46.7 | 0.5282 | 1.15 | **LOSS** |
| 221 | BA | 03-10 14:55 | 03-10 15:00 | 225.81 | 219.85 | 62 | 14000.22 | -369.52 | -2.64% | 3.72R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 222 | ABNB | 03-16 13:30 | 03-16 14:30 | 127.74 | 127.56 | 110 | 14051.4 | -19.8 | -0.14% | 0.2R | 60m | market | breakeven-stop | breakout | breakout | neutral | 77.22 | ↓127.46 | 0.1297 | 1.69 | **LOSS** |
| 223 | MU | 03-18 15:05 | 03-18 15:25 | 469.95 | 467.26 | 29 | 13628.55 | -78.01 | -0.57% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 63.87 | ↑464.63 | 1.5325 | 1.45 | **LOSS** |
| 224 | NET | 03-20 14:30 | 03-20 14:50 | 224.96 | 221.86 | 62 | 13947.52 | -192.2 | -1.38% | 0.9R | 20m | market | stop-loss | breakout | breakout | neutral | 61.85 | ↓222.66 | 0.6001 | 1.38 | **LOSS** |
| 225 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 78 | 13894.14 | -62.4 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 226 | SBUX | 03-25 14:00 | 03-25 14:20 | 93.25 | 92.33 | 151 | 14080.75 | -138.92 | -0.99% | 1.24R | 20m | market | early-reversal | trend | trend | neutral | 69.11 | ↓92.72 | 0.1502 | 1.49 | **LOSS** |
| 227 | BA | 03-25 14:00 | 03-25 14:20 | 200.31 | 199.43 | 69 | 13821.39 | -60.72 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |
| 228 | NVDA | 03-25 14:20 | 03-25 15:10 | 179.95 | 179.83 | 77 | 13856.15 | -9.24 | -0.07% | 0.07R | 50m | market | breakeven-stop | trend | trend | neutral | 66.03 | ↑178.95 | 1.0192 | 2.13 | **LOSS** |
| 229 | INTC | 03-25 14:40 | 03-25 15:15 | 47.44 | 47.17 | 163 | 7732.72 | -44.01 | -0.57% | 0.29R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 230 | MU | 03-31 14:15 | 03-31 14:45 | 327.85 | 325.25 | 23 | 7540.55 | -59.8 | -0.79% | 0.4R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 58.31 | ↑321.41 | 0.828 | 1.21 | **LOSS** |
| 231 | NET | 04-02 15:05 | 04-02 16:15 | 209.46 | 209.4 | 36 | 7540.56 | -2.16 | -0.03% | 0.02R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.84 | ↑206.21 | 0.9751 | 1.18 | **LOSS** |
| 232 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.53 | 182.88 | 76 | 13948.28 | -49.4 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 233 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 83 | 13841.08 | +350.26 | +2.53% | 3.61R | 35m | market | profit-target | breakout | breakout | neutral | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 234 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 79 | 13870.03 | +94.01 | +0.68% | 0.85R | 105m | market | timeout | breakout | breakout | neutral | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |
| 235 | INTC | 04-15 14:35 | 04-15 15:30 | 65.28 | 65.06 | 216 | 14100.48 | -47.52 | -0.34% | 0.17R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 236 | ARM | 04-16 14:50 | 04-16 15:40 | 160.08 | 164.65 | 87 | 13926.96 | +397.59 | +2.85% | 2.52R | 50m | market | profit-target | breakout | breakout | neutral | 57.28 | ↑158.22 | -0.1498 | 2.44 | **WIN** |
| 237 | TGT | 04-17 14:05 | 04-17 15:50 | 125.11 | 126.53 | 112 | 14012.32 | +159.04 | +1.14% | 1.52R | 105m | market | timeout | trend | trend | neutral | 71.66 | ↑124.36 | 0.3054 | 1.2 | **WIN** |
| 238 | ABNB | 04-20 14:15 | 04-20 14:35 | 142.99 | 141.76 | 98 | 14013.02 | -120.54 | -0.86% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 58.74 | ↓142.12 | 0.2058 | 1.15 | **LOSS** |
| 239 | ARM | 04-20 15:20 | 04-20 16:25 | 170.53 | 170.02 | 82 | 13983.46 | -41.82 | -0.3% | 0.22R | 65m | market | stagnation | breakout | breakout | neutral | 73.39 | ↑166.81 | 0.5909 | 2.69 | **LOSS** |
| 240 | ARM | 04-21 14:05 | 04-21 14:40 | 179.36 | 177.84 | 78 | 13990.08 | -118.56 | -0.85% | 0.43R | 35m | market | early-reversal | breakout | breakout | neutral | 65.25 | ↑176.94 | 1.123 | 1.28 | **LOSS** |
| 241 | NET | 04-22 13:40 | 04-22 13:55 | 211.25 | 208.02 | 66 | 13942.5 | -213.18 | -1.53% | 1.43R | 15m | market | stop-loss | breakout | breakout | neutral | 66.61 | ↓209.29 | 0.1508 | 1.16 | **LOSS** |
| 242 | MU | 04-22 14:25 | 04-22 16:10 | 474.56 | 478 | 29 | 13762.24 | +99.76 | +0.72% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 78.4 | ↑467.04 | 5.021 | 2.8 | **WIN** |
| 243 | ARM | 04-23 14:55 | 04-23 15:45 | 208.13 | 206.91 | 34 | 7076.42 | -41.48 | -0.59% | 0.3R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 72.21 | ↑201.69 | 3.0794 | 1.09 | **LOSS** |
| 244 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.81 | 208.76 | 34 | 13927.08 | +134.3 | +1.93% | 1.39R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 245 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.81 | 209.65 | 34 | 13927.08 | +164.56 | +2.36% | 1.7R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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

- ⚠️ **Profit factor 1.31 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T12:17:10.536Z*
