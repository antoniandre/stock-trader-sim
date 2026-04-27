# Bot Trade Report — 96 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T03:22:34.356Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1018.8 (-1.02%) over 96 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 96 |
| Win rate | 33.33% (32W / 64L) |
| Net P&L | $-1018.8 (-1.02%) |
| Gross profit | $3162.45 |
| Gross loss | $4181.25 |
| Profit factor | 0.76 |
| Avg win | $98.83 |
| Avg loss | $65.33 |
| Payoff ratio | 1.51:1 |
| Expectancy | $-10.61 / trade |
| Max drawdown | 1.34% |
| Sharpe ratio (ann.) | -1.88 |
| Trades / active day | 1.43 |
| Avg confidence | 99.22% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.66R |
| Starting equity | $100,000 |
| Ending equity | $98,981.2 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 24 | 29.17% | $-175.48 | $-7.31 |
| Mid  10:30–11:30 | 72 | 34.72% | $-843.32 | $-11.71 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ZS | 18 | 8 | 44.44% | $+177.6 | $+9.87 | 1.37 | eligible |
| FTNT | 22 | 10 | 45.45% | $+32.44 | $+1.47 | 1.05 | eligible |
| PANW | 15 | 4 | 26.67% | $-120.39 | $-8.03 | 0.75 | throttle |
| ANET | 25 | 8 | 32% | $-304.3 | $-12.17 | 0.76 | throttle |
| OKTA | 16 | 2 | 12.5% | $-804.15 | $-50.26 | 0.36 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 69 | 26 | 37.68% | $-101.64 | $-1.47 |
| breakout | 27 | 6 | 22.22% | $-917.16 | $-33.97 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 7 | 4 | 57.14% | $+34.83 | $+4.98 |
| neutral | 89 | 28 | 31.46% | $-1053.63 | $-11.84 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ZS | 11 | 1.69 | $+18.35 | 7 | 0.87 | $-3.46 | 0.18% | 0.6 | watch |
| Symbol | FTNT | 14 | 2.08 | $+19.51 | 8 | 0.41 | $-30.09 | 0.35% | 0.31 | watch |
| Time slot | Open 9:30-10:30 | 23 | 0.78 | $-9.73 | 1 | ∞ | $+48.36 | 0% | ∞ | reject |
| Symbol | PANW | 7 | 0 | $-41.75 | 8 | 1.87 | $+21.49 | 0.15% | 1.26 | reject |
| Symbol | ANET | 15 | 0.48 | $-27.87 | 10 | 1.23 | $+11.38 | 0.4% | 0.98 | reject |
| Setup | trend | 47 | 1.14 | $+4.38 | 22 | 0.59 | $-13.98 | 0.55% | 0.41 | reject |
| Time slot | Mid 10:30-11:30 | 34 | 0.86 | $-5.14 | 38 | 0.65 | $-17.59 | 0.94% | 0.5 | reject |
| Setup | breakout | 10 | 0.25 | $-60.45 | 17 | 0.73 | $-18.39 | 0.68% | 0.59 | reject |
| Behavior | neutral | 55 | 0.86 | $-5.4 | 34 | 0.6 | $-22.26 | 0.98% | 0.46 | reject |
| Symbol | OKTA | 10 | 0.73 | $-16.32 | 6 | 0.01 | $-106.82 | 0.65% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1260.97 | 0.71 |
| +3 bps/side | $-1745.4 | 0.63 |
| +5 bps/side | $-2229.79 | 0.56 |
| +10 bps/side | $-3440.8 | 0.42 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 38 |
| timeout | 23 |
| stagnation | 19 |
| trim-profit-target | 6 |
| stop-loss | 4 |
| breakeven-stop | 4 |
| profit-target | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 14:50 | 04-29 15:35 | 185.73 | 185.04 | 75 | 13929.75 | -51.75 | -0.37% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 2 | ANET | 04-30 15:05 | 04-30 15:25 | 80.76 | 80.24 | 173 | 13971.48 | -89.96 | -0.64% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 80.31 | ↑79.45 | -0.1347 | 2.64 | **LOSS** |
| 3 | FTNT | 05-01 14:25 | 05-01 15:45 | 105.85 | 105.71 | 132 | 13972.2 | -18.48 | -0.13% | 0.12R | 80m | market | stagnation | trend | trend | neutral | 77.42 | ↓105.1 | 0.7448 | 1.17 | **LOSS** |
| 4 | ANET | 05-02 15:15 | 05-02 17:00 | 91.22 | 91.77 | 153 | 13956.66 | +84.15 | +0.6% | 0.8R | 105m | market | timeout | trend | trend | neutral | 64.37 | ↑90.58 | 0.5339 | 3.13 | **WIN** |
| 5 | FTNT | 05-05 14:00 | 05-05 15:25 | 107.38 | 108.63 | 65 | 13959.4 | +81.25 | +1.16% | 1.51R | 85m | market | trim-profit-target | trend | trend | neutral | 64.85 | ↑106.61 | 0.1829 | 3.31 | **WIN** |
| 6 | FTNT | 05-05 14:00 | 05-05 15:45 | 107.38 | 108.49 | 65 | 13959.4 | +72.15 | +1.03% | 1.34R | 105m | market | timeout | trend | trend | neutral | 64.85 | ↑106.61 | 0.1829 | 3.31 | **WIN** |
| 7 | OKTA | 05-05 14:00 | 05-05 14:20 | 116.25 | 115.63 | 120 | 13950 | -74.4 | -0.53% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 81.75 | ↑115.5 | 0.4576 | 2.37 | **LOSS** |
| 8 | PANW | 05-05 15:00 | 05-05 15:50 | 190.35 | 190.18 | 73 | 13895.55 | -12.41 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 9 | OKTA | 05-08 14:20 | 05-08 15:00 | 119.48 | 118.94 | 117 | 13979.16 | -63.18 | -0.45% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 68.97 | ↓118.62 | 0.4867 | 1.68 | **LOSS** |
| 10 | OKTA | 05-16 14:15 | 05-16 15:05 | 126.74 | 126.1 | 110 | 13941.4 | -70.4 | -0.5% | 0.63R | 50m | market | early-reversal | trend | trend | neutral | 77.33 | ↓126.08 | 0.4351 | 2.26 | **LOSS** |
| 11 | ZS | 05-30 15:25 | 05-30 15:45 | 273.69 | 271.73 | 51 | 13958.19 | -99.96 | -0.72% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 53.07 | ↑270.84 | 4.3262 | 1.21 | **LOSS** |
| 12 | ANET | 06-03 14:50 | 06-03 16:35 | 93.09 | 93.86 | 150 | 13963.5 | +115.5 | +0.83% | 0.9R | 105m | market | timeout | trend | trend | neutral | 79.19 | ↑91.99 | 0.9089 | 1.39 | **WIN** |
| 13 | ANET | 06-05 15:15 | 06-05 16:30 | 95.95 | 95.72 | 146 | 14008.7 | -33.58 | -0.24% | 0.34R | 75m | market | stagnation | trend | trend | neutral | 76.88 | ↑95.03 | 0.1623 | 1.59 | **LOSS** |
| 14 | ANET | 06-06 14:50 | 06-06 16:35 | 96.99 | 97.17 | 144 | 13966.56 | +25.92 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.59 | ↑96.3 | 0.3723 | 1.21 | **WIN** |
| 15 | ANET | 06-16 14:40 | 06-16 16:20 | 94.95 | 94.83 | 147 | 13957.65 | -17.64 | -0.13% | 0.15R | 100m | market | stagnation | trend | trend | neutral | 79.59 | ↑94.18 | 0.6432 | 1.45 | **LOSS** |
| 16 | ZS | 06-16 15:10 | 06-16 16:20 | 308.26 | 307.85 | 45 | 13871.7 | -18.45 | -0.13% | 0.19R | 70m | market | stagnation | trend | trend | neutral | 61.65 | ↑306.45 | 1.471 | 1.17 | **LOSS** |
| 17 | FTNT | 06-17 14:20 | 06-17 15:25 | 103.23 | 104.12 | 67 | 13936.05 | +59.63 | +0.86% | 1.23R | 65m | market | trim-profit-target | trend | trend | neutral | 78 | ↑102.68 | 0.2034 | 2.15 | **WIN** |
| 18 | FTNT | 06-17 14:20 | 06-17 16:05 | 103.23 | 103.95 | 68 | 13936.05 | +48.96 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 78 | ↑102.68 | 0.2034 | 2.15 | **WIN** |
| 19 | PANW | 06-17 15:05 | 06-17 15:55 | 201.69 | 201.25 | 69 | 13916.61 | -30.36 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 79.8 | ↑199.85 | 0.9169 | 1.72 | **LOSS** |
| 20 | FTNT | 06-23 14:30 | 06-23 16:15 | 101.99 | 102.42 | 137 | 13972.63 | +58.91 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 75.68 | ↑100.88 | 0.6561 | 1.28 | **WIN** |
| 21 | PANW | 06-26 14:10 | 06-26 14:35 | 206.48 | 205.8 | 67 | 13834.16 | -45.56 | -0.33% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 69.17 | ↑205.5 | 0.5917 | 1.33 | **LOSS** |
| 22 | ANET | 07-02 14:15 | 07-02 14:40 | 99.88 | 99.46 | 140 | 13983.2 | -58.8 | -0.42% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 67.35 | ↑99.07 | 0.1645 | 1.34 | **LOSS** |
| 23 | ZS | 07-02 14:15 | 07-02 14:40 | 311.94 | 310.72 | 44 | 13725.36 | -53.68 | -0.39% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 69.6 | ↑309.18 | 1.2143 | 1.2 | **LOSS** |
| 24 | ZS | 07-03 14:00 | 07-03 15:45 | 313.66 | 315.92 | 44 | 13801.04 | +99.44 | +0.72% | 1.01R | 105m | market | timeout | trend | trend | neutral | 78.12 | ↑311.01 | 0.6584 | 1.3 | **WIN** |
| 25 | FTNT | 07-07 14:30 | 07-07 15:45 | 107.17 | 107 | 131 | 14039.27 | -22.27 | -0.16% | 0.15R | 75m | market | stagnation | trend | trend | neutral | 67.54 | ↑106.14 | 0.3527 | 1.47 | **LOSS** |
| 26 | FTNT | 07-14 15:00 | 07-14 15:40 | 102.67 | 102.26 | 136 | 13963.12 | -55.76 | -0.4% | 0.57R | 40m | market | early-reversal | trend | trend | neutral | 76.13 | ↑101.79 | 0.7646 | 2.11 | **LOSS** |
| 27 | ANET | 07-14 15:00 | 07-14 15:20 | 109.51 | 108.12 | 127 | 13907.77 | -176.53 | -1.27% | 1.27R | 20m | market | stop-loss | breakout | breakout | neutral | 76.58 | ↑107.83 | 0.0267 | 1.87 | **LOSS** |
| 28 | OKTA | 07-17 14:25 | 07-17 16:10 | 92.45 | 92.44 | 151 | 13959.95 | -1.51 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 73.38 | ↑91.94 | 0.2966 | 1.39 | **LOSS** |
| 29 | FTNT | 07-17 14:55 | 07-17 15:45 | 104.83 | 104.75 | 133 | 13942.39 | -10.64 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑104.11 | 0.3245 | 1.43 | **LOSS** |
| 30 | PANW | 07-17 15:10 | 07-17 16:25 | 196.66 | 196.54 | 71 | 13962.86 | -8.52 | -0.06% | 0.09R | 75m | market | stagnation | trend | trend | neutral | 79.2 | ↑194.61 | 0.8084 | 2.36 | **LOSS** |
| 31 | OKTA | 07-25 14:15 | 07-25 15:40 | 99.01 | 102.18 | 141 | 13960.41 | +446.97 | +3.2% | 2.32R | 85m | market | profit-target | breakout | trend | neutral | 73.37 | ↑97.85 | 0.8586 | 1.04 | **WIN** |
| 32 | ZS | 07-25 15:00 | 07-25 15:50 | 288.35 | 288.13 | 48 | 13840.8 | -10.56 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 71.8 | ↑286.44 | 1.0069 | 2.91 | **LOSS** |
| 33 | ANET | 08-04 14:10 | 08-04 15:00 | 119.93 | 119.45 | 116 | 13911.88 | -55.68 | -0.4% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 78.53 | ↓119.19 | 0.8485 | 1.91 | **LOSS** |
| 34 | ANET | 08-22 14:00 | 08-22 14:20 | 133.84 | 132.87 | 104 | 13919.36 | -100.88 | -0.72% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 66.03 | ↑132.03 | 0.3104 | 2.69 | **LOSS** |
| 35 | ZS | 08-28 14:00 | 08-28 15:25 | 279.53 | 278.99 | 50 | 13976.5 | -27 | -0.19% | 0.22R | 85m | market | stagnation | breakout | breakout | neutral | 80.31 | ↑276.58 | 1.2872 | 1.24 | **LOSS** |
| 36 | OKTA | 09-04 15:25 | 09-04 16:15 | 90.39 | 90.16 | 155 | 14010.45 | -35.65 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 76.2 | ↑89.39 | 0.2536 | 1.17 | **LOSS** |
| 37 | PANW | 09-05 13:40 | 09-05 14:00 | 196.22 | 195.24 | 71 | 13931.62 | -69.58 | -0.5% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 38 | OKTA | 09-05 13:40 | 09-05 14:00 | 91.92 | 91.23 | 152 | 13971.84 | -104.88 | -0.75% | 0.9R | 20m | market | early-reversal | breakout | breakout | neutral | 74.43 | ↓91.42 | 0.0703 | 1.24 | **LOSS** |
| 39 | FTNT | 09-05 15:15 | 09-05 17:00 | 78.29 | 78.78 | 179 | 14013.91 | +87.71 | +0.63% | 0.83R | 105m | market | timeout | trend | trend | neutral | 58.88 | ↑77.84 | 0.3446 | 1.41 | **WIN** |
| 40 | FTNT | 09-08 14:00 | 09-08 14:20 | 80.41 | 79.97 | 174 | 13991.34 | -76.56 | -0.55% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 72.94 | ↓80.08 | 0.2322 | 1.23 | **LOSS** |
| 41 | ZS | 09-08 14:35 | 09-08 15:25 | 277.07 | 276.7 | 50 | 13853.5 | -18.5 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 75.07 | ↑275.72 | 1.5098 | 2.56 | **LOSS** |
| 42 | ANET | 09-10 15:00 | 09-10 15:25 | 150.97 | 150.06 | 92 | 13889.24 | -83.72 | -0.6% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 76.33 | ↑148.9 | 2.3718 | 1.88 | **LOSS** |
| 43 | ZS | 09-26 14:00 | 09-26 14:25 | 290.19 | 288.88 | 48 | 13929.12 | -62.88 | -0.45% | 0.63R | 25m | market | early-reversal | trend | trend | neutral | 64.59 | ↓289.08 | 0.9116 | 3.03 | **LOSS** |
| 44 | FTNT | 09-26 15:25 | 09-26 16:45 | 84.7 | 84.65 | 165 | 13975.5 | -8.25 | -0.06% | 0.09R | 80m | market | stagnation | trend | trend | neutral | 72.67 | ↑83.95 | 0.2997 | 1.84 | **LOSS** |
| 45 | OKTA | 09-29 14:35 | 09-29 14:55 | 93.24 | 92.6 | 150 | 13986 | -96 | -0.69% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 79.26 | ↓92.81 | 0.513 | 1.58 | **LOSS** |
| 46 | ANET | 10-01 15:10 | 10-01 16:55 | 146.97 | 148.7 | 94 | 13815.18 | +162.62 | +1.18% | 1.69R | 105m | market | timeout | trend | trend | neutral | 76.48 | ↑145.4 | 0.4669 | 1.58 | **WIN** |
| 47 | OKTA | 10-02 15:20 | 10-02 15:40 | 93.66 | 92.96 | 149 | 13955.34 | -104.3 | -0.75% | 1.07R | 20m | market | early-reversal | trend | trend | neutral | 65.46 | ↑92.61 | 0.4755 | 3.22 | **LOSS** |
| 48 | ZS | 10-08 15:25 | 10-08 16:45 | 304.11 | 308.08 | 22 | 13684.95 | +87.34 | +1.31% | 1.87R | 80m | market | trim-profit-target | trend | trend | neutral | 65.92 | ↑300.48 | 2.3686 | 1.65 | **WIN** |
| 49 | ZS | 10-08 15:25 | 10-08 17:10 | 304.11 | 308.7 | 23 | 13684.95 | +105.57 | +1.51% | 2.16R | 105m | market | timeout | trend | trend | neutral | 65.92 | ↑300.48 | 2.3686 | 1.65 | **WIN** |
| 50 | FTNT | 10-15 14:05 | 10-15 14:25 | 84.63 | 84.26 | 165 | 13963.95 | -61.05 | -0.44% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 63.84 | ↓84.02 | 0.1572 | 1.38 | **LOSS** |
| 51 | ANET | 10-15 15:10 | 10-15 15:50 | 144.92 | 144.38 | 53 | 7680.76 | -28.62 | -0.37% | 0.44R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 72.32 | ↑143.38 | 1.1833 | 1.04 | **LOSS** |
| 52 | ANET | 10-29 13:55 | 10-29 14:15 | 161.17 | 160.15 | 86 | 13860.62 | -87.72 | -0.63% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 71.99 | ↓159.39 | 0.7447 | 1.26 | **LOSS** |
| 53 | PANW | 11-10 14:30 | 11-10 14:50 | 214.68 | 213.54 | 65 | 13954.2 | -74.1 | -0.53% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 54 | ANET | 11-10 14:35 | 11-10 15:25 | 137.97 | 136.64 | 55 | 7588.35 | -73.15 | -0.96% | 0.71R | 50m | market | early-reversal | breakout | trend | noisyHighBeta | 60.71 | ↓137.72 | 0.315 | 1.07 | **LOSS** |
| 55 | FTNT | 11-11 14:45 | 11-11 16:30 | 83.1 | 83.8 | 168 | 13960.8 | +117.6 | +0.84% | 1.04R | 105m | market | timeout | trend | trend | neutral | 76.06 | ↑82.77 | 0.2895 | 1.29 | **WIN** |
| 56 | OKTA | 11-20 15:10 | 11-20 15:45 | 81.53 | 81.18 | 171 | 13941.63 | -59.85 | -0.43% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 59.89 | ↓81.31 | 0.1975 | 2.19 | **LOSS** |
| 57 | ZS | 11-24 14:45 | 11-24 16:30 | 279.56 | 283.57 | 50 | 13978 | +200.5 | +1.43% | 1.17R | 105m | market | timeout | breakout | breakout | neutral | 59.89 | ↑279.51 | 0.5111 | 1.26 | **WIN** |
| 58 | PANW | 11-28 14:40 | 11-28 16:25 | 189.37 | 190.18 | 73 | 13824.01 | +59.13 | +0.43% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 87.43 | ↑188.26 | 0.4452 | 1.29 | **WIN** |
| 59 | FTNT | 11-28 15:05 | 11-28 15:55 | 81.16 | 81.11 | 172 | 13959.52 | -8.6 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 71.39 | ↑80.89 | 0.168 | 1.3 | **LOSS** |
| 60 | OKTA | 12-03 14:35 | 12-03 14:55 | 82.99 | 81.59 | 168 | 13942.32 | -235.2 | -1.69% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 65.86 | ↑80.59 | 0.0895 | 2.23 | **LOSS** |
| 61 | ANET | 12-04 14:40 | 12-04 15:00 | 129.73 | 128.97 | 107 | 13881.11 | -81.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 67.43 | ↓128.45 | 0.1945 | 1.56 | **LOSS** |
| 62 | ZS | 12-08 14:40 | 12-08 16:00 | 247.23 | 246.38 | 56 | 13844.88 | -47.6 | -0.34% | 0.47R | 80m | market | early-reversal | breakout | breakout | neutral | 75.5 | ↓246.68 | 0.4192 | 2.08 | **LOSS** |
| 63 | FTNT | 12-16 14:30 | 12-16 15:00 | 81.98 | 81.68 | 171 | 14018.58 | -51.3 | -0.37% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 78.82 | ↓81.78 | 0.1241 | 1.65 | **LOSS** |
| 64 | ANET | 12-19 14:40 | 12-19 16:25 | 127.08 | 128.94 | 109 | 13851.72 | +202.74 | +1.46% | 1.49R | 105m | market | timeout | breakout | breakout | neutral | 71.14 | ↑126.71 | 0.3215 | 3.09 | **WIN** |
| 65 | OKTA | 01-13 14:35 | 01-13 15:20 | 95.82 | 95.15 | 145 | 13893.9 | -97.15 | -0.7% | 0.92R | 45m | market | early-reversal | breakout | breakout | neutral | 79.42 | ↓95.25 | 0.2625 | 1.25 | **LOSS** |
| 66 | ZS | 01-13 14:40 | 01-13 14:50 | 218.8 | 216.69 | 64 | 14003.2 | -135.04 | -0.96% | 1.37R | 10m | market | stop-loss | trend | trend | neutral | 71.05 | ↓218.61 | 0.3947 | 1.85 | **LOSS** |
| 67 | PANW | 01-15 14:30 | 01-15 15:50 | 191.85 | 191.86 | 72 | 13813.2 | +0.72 | +0.01% | 0.01R | 80m | market | breakeven-stop | trend | trend | neutral | 73.16 | ↓191.53 | 0.5245 | 1.87 | **WIN** |
| 68 | FTNT | 01-15 14:30 | 01-15 15:20 | 77.23 | 77.91 | 90 | 13978.63 | +61.2 | +0.88% | 1.19R | 50m | market | trim-profit-target | trend | trend | neutral | 68.14 | ↑76.9 | 0.0143 | 1.07 | **WIN** |
| 69 | FTNT | 01-15 14:30 | 01-15 16:15 | 77.23 | 77.64 | 91 | 13978.63 | +37.31 | +0.53% | 0.72R | 105m | market | timeout | trend | trend | neutral | 68.14 | ↓76.9 | 0.0143 | 1.07 | **WIN** |
| 70 | ZS | 01-21 14:35 | 01-21 16:20 | 209.12 | 209.94 | 66 | 13801.92 | +54.12 | +0.39% | 0.56R | 105m | market | timeout | breakout | breakout | neutral | 72.94 | ↑207.94 | -0.1184 | 2.89 | **WIN** |
| 71 | ANET | 01-27 14:45 | 01-27 16:30 | 145.53 | 148.51 | 95 | 13825.35 | +283.1 | +2.05% | 1.68R | 105m | market | timeout | trend | breakout | neutral | 57.32 | ↑145.31 | 0.1336 | 1.14 | **WIN** |
| 72 | OKTA | 02-02 14:40 | 02-02 15:05 | 86.4 | 86.03 | 161 | 13910.4 | -59.57 | -0.43% | 0.41R | 25m | market | early-reversal | breakout | breakout | neutral | 60.95 | ↑85.87 | -0.0182 | 1.43 | **LOSS** |
| 73 | FTNT | 02-06 15:15 | 02-06 17:00 | 80.76 | 81.54 | 88 | 7106.88 | +68.64 | +0.97% | 0.49R | 105m | market | timeout | breakout | trend | noisyHighBeta | 57.28 | ↑80.54 | 0.1342 | 1.49 | **WIN** |
| 74 | FTNT | 02-09 14:40 | 02-09 15:55 | 84.2 | 83.89 | 166 | 13977.2 | -51.46 | -0.37% | 0.29R | 75m | market | stagnation | breakout | breakout | neutral | 80.69 | ↓83.61 | 0.4352 | 1.1 | **LOSS** |
| 75 | PANW | 02-09 15:15 | 02-09 15:35 | 161.15 | 160.07 | 43 | 6929.45 | -46.44 | -0.67% | 0.51R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 73.64 | ↑159.33 | 0.3913 | 1.01 | **LOSS** |
| 76 | ZS | 02-10 15:00 | 02-10 16:20 | 173.94 | 175.72 | 20 | 6957.6 | +35.6 | +1.02% | 0.75R | 80m | market | trim-profit-target | breakout | trend | noisyHighBeta | 79.55 | ↑172 | 0.5225 | 1.03 | **WIN** |
| 77 | ZS | 02-10 15:00 | 02-10 16:40 | 173.94 | 174.01 | 20 | 6957.6 | +1.4 | +0.04% | 0.03R | 100m | market | breakeven-stop | breakout | trend | noisyHighBeta | 79.55 | ↓172 | 0.5225 | 1.03 | **WIN** |
| 78 | ANET | 02-17 14:30 | 02-17 14:55 | 142.34 | 140.6 | 98 | 13949.32 | -170.52 | -1.22% | 0.73R | 25m | market | early-reversal | breakout | breakout | neutral | 48.37 | ↓141.76 | -0.5371 | 1.24 | **LOSS** |
| 79 | PANW | 02-20 14:35 | 02-20 16:20 | 153.93 | 156.83 | 90 | 13853.7 | +261 | +1.88% | 2.11R | 105m | market | timeout | breakout | breakout | neutral | 74.72 | ↑152.67 | 0.2261 | 1.64 | **WIN** |
| 80 | FTNT | 02-24 14:45 | 02-24 14:55 | 76.74 | 75.39 | 183 | 14043.42 | -247.05 | -1.76% | 1.42R | 10m | market | stop-loss | breakout | breakout | neutral | 71.75 | ↓75.82 | 0.2293 | 1.48 | **LOSS** |
| 81 | ANET | 02-25 14:40 | 02-25 16:20 | 131.06 | 130.95 | 106 | 13892.36 | -11.66 | -0.08% | 0.09R | 100m | market | trailing-stop | breakout | breakout | neutral | 71.56 | ↓130.12 | 0.1085 | 2.07 | **LOSS** |
| 82 | PANW | 02-25 15:00 | 02-25 15:20 | 143.99 | 142.88 | 97 | 13967.03 | -107.67 | -0.77% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 60.67 | ↑142.3 | 0.1859 | 1.61 | **LOSS** |
| 83 | PANW | 03-02 14:55 | 03-02 15:45 | 150.13 | 149.76 | 93 | 13962.09 | -34.41 | -0.25% | 0.18R | 50m | market | stagnation | breakout | trend | neutral | 66.79 | ↑148.92 | 0.4454 | 1.23 | **LOSS** |
| 84 | OKTA | 03-02 15:20 | 03-02 16:15 | 74 | 73.7 | 188 | 13912 | -56.4 | -0.41% | 0.22R | 55m | market | early-reversal | breakout | trend | neutral | 69.08 | ↑73.41 | 0.5069 | 1.07 | **LOSS** |
| 85 | ANET | 03-05 14:30 | 03-05 14:40 | 135.92 | 135.11 | 102 | 13863.84 | -82.62 | -0.6% | 0.86R | 10m | market | breakeven-stop | trend | trend | neutral | 75.36 | ↓135.48 | 0.5315 | 1.08 | **LOSS** |
| 86 | FTNT | 03-12 14:35 | 03-12 15:25 | 84.71 | 84.41 | 165 | 13977.15 | -49.5 | -0.35% | 0.29R | 50m | market | early-reversal | trend | trend | neutral | 75.32 | ↑83.92 | 0.3182 | 1.17 | **LOSS** |
| 87 | OKTA | 03-19 15:00 | 03-19 15:20 | 81.88 | 80.62 | 157 | 12855.16 | -197.82 | -1.54% | 1.33R | 20m | market | stop-loss | breakout | breakout | neutral | 56.01 | ↓80.79 | 0.6149 | 1.32 | **LOSS** |
| 88 | ANET | 03-23 15:00 | 03-23 15:20 | 138.01 | 137.54 | 101 | 13939.01 | -47.47 | -0.34% | 0.35R | 20m | market | early-reversal | trend | trend | neutral | 76.87 | ↑136.44 | 2.0924 | 1.78 | **LOSS** |
| 89 | PANW | 03-30 15:25 | 03-30 16:25 | 158.02 | 157.92 | 88 | 13905.76 | -8.8 | -0.06% | 0.05R | 60m | market | stagnation | trend | trend | neutral | 64.84 | ↑155.86 | 2.2072 | 1.61 | **LOSS** |
| 90 | ANET | 04-02 14:35 | 04-02 15:00 | 126.55 | 125.66 | 102 | 12908.1 | -90.78 | -0.7% | 0.35R | 25m | market | early-reversal | breakout | breakout | neutral | 57.41 | ↑123.57 | -0.1588 | 1.43 | **LOSS** |
| 91 | ZS | 04-02 14:35 | 04-02 15:45 | 137.74 | 137.64 | 101 | 13911.74 | -10.1 | -0.07% | 0.04R | 70m | market | stagnation | breakout | breakout | neutral | 57.19 | ↑135.87 | -0.1086 | 1.34 | **LOSS** |
| 92 | OKTA | 04-02 15:00 | 04-02 16:20 | 80.17 | 80.2 | 173 | 13869.41 | +5.19 | +0.04% | 0.03R | 80m | market | breakeven-stop | trend | trend | neutral | 77.09 | ↑79.12 | 0.1967 | 1.14 | **WIN** |
| 93 | ZS | 04-15 15:00 | 04-15 16:45 | 127.93 | 129.22 | 60 | 7675.8 | +77.4 | +1.01% | 1R | 105m | market | timeout | trend | trend | noisyHighBeta | 54.89 | ↑126.75 | 1.5768 | 1.42 | **WIN** |
| 94 | PANW | 04-22 14:00 | 04-22 15:45 | 178.18 | 178.8 | 78 | 13898.04 | +48.36 | +0.35% | 0.44R | 105m | market | timeout | trend | trend | neutral | 71.63 | ↑176.85 | 0.6795 | 1.03 | **WIN** |
| 95 | ANET | 04-24 14:40 | 04-24 16:10 | 177.38 | 178.61 | 39 | 13835.64 | +47.97 | +0.69% | 0.66R | 90m | market | trim-profit-target | trend | trend | neutral | 73.5 | ↑175.52 | 1.2223 | 1.07 | **WIN** |
| 96 | ANET | 04-24 14:40 | 04-24 16:25 | 177.38 | 179.03 | 39 | 13835.64 | +64.35 | +0.93% | 0.89R | 105m | market | timeout | trend | trend | neutral | 73.5 | ↑175.52 | 1.2223 | 1.07 | **WIN** |

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

- ⚠️ **Profit factor 0.76 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.66R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T03:22:34.356Z*
