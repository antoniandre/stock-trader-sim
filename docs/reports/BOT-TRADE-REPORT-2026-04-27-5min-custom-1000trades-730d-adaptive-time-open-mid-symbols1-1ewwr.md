# Bot Trade Report — 52 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:05:49.550Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $982.4 (-0.98%) over 52 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 52 |
| Win rate | 34.62% (18W / 34L) |
| Net P&L | $-982.4 (-0.98%) |
| Gross profit | $2226.51 |
| Gross loss | $3208.91 |
| Profit factor | 0.69 |
| Avg win | $123.7 |
| Avg loss | $94.38 |
| Payoff ratio | 1.31:1 |
| Expectancy | $-18.89 / trade |
| Max drawdown | 1.47% |
| Sharpe ratio (ann.) | -2.12 |
| Trades / active day | 1.11 |
| Avg confidence | 99.77% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $99,017.6 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 17 | 17.65% | $-599.22 | $-35.25 |
| Mid  10:30–11:30 | 35 | 42.86% | $-383.18 | $-10.95 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 52 | 18 | 34.62% | $-982.4 | $-18.89 | 0.69 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 14 | 6 | 42.86% | $+344.6 | $+24.61 |
| trend | 38 | 12 | 31.58% | $-1327 | $-34.92 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 10 | 3 | 30% | $-113.87 | $-11.39 |
| neutral | 42 | 15 | 35.71% | $-868.53 | $-20.68 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 5 | 1.38 | $+33.6 | 9 | 1.28 | $+19.62 | 0.52% | 1.08 | watch |
| Behavior | neutral | 27 | 0.53 | $-34.7 | 15 | 1.07 | $+4.56 | 0.64% | 0.87 | reject |
| Time slot | Open 9:30-10:30 | 13 | 0.4 | $-47.43 | 4 | 1.19 | $+4.34 | 0.09% | 0.73 | reject |
| Symbol | MRVL | 31 | 0.5 | $-34.41 | 21 | 1.08 | $+4.02 | 0.71% | 0.87 | reject |
| Time slot | Mid 10:30-11:30 | 18 | 0.58 | $-25.01 | 17 | 1.07 | $+3.94 | 0.66% | 0.89 | reject |
| Setup | trend | 26 | 0.26 | $-47.49 | 12 | 0.81 | $-7.68 | 0.33% | 0.61 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1106.86 | 0.66 |
| +3 bps/side | $-1355.77 | 0.61 |
| +5 bps/side | $-1604.7 | 0.56 |
| +10 bps/side | $-2226.89 | 0.46 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 23 |
| timeout | 12 |
| stagnation | 7 |
| breakeven-stop | 3 |
| trim-profit-target | 3 |
| profit-target | 2 |
| stop-loss | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 05-16 13:30 | 05-16 15:10 | 71.01 | 73.1 | 197 | 13988.97 | +411.73 | +2.94% | 3.92R | 100m | market | profit-target | breakout | breakout | neutral | 80.86 | ↑71.02 | 0.2578 | 1.11 | **WIN** |
| 2 | MRVL | 05-30 14:20 | 05-30 14:40 | 77.23 | 76.47 | 182 | 14055.86 | -138.32 | -0.98% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 63.92 | ↓76.44 | 0.2038 | 1.24 | **LOSS** |
| 3 | MRVL | 06-05 14:10 | 06-05 15:05 | 68.96 | 68.83 | 111 | 7654.56 | -14.43 | -0.19% | 0.12R | 55m | market | stagnation | trend | trend | noisyHighBeta | 76.97 | ↓68.56 | 0.539 | 1.72 | **LOSS** |
| 4 | MRVL | 06-07 14:00 | 06-07 14:20 | 68.82 | 68.39 | 112 | 7707.84 | -48.16 | -0.62% | 0.71R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.75 | ↓68.39 | 0.0548 | 1.52 | **LOSS** |
| 5 | MRVL | 07-08 14:05 | 07-08 14:25 | 74.04 | 73.7 | 189 | 13993.56 | -64.26 | -0.46% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↑73.24 | 0.372 | 1.66 | **LOSS** |
| 6 | MRVL | 07-08 15:25 | 07-08 15:45 | 74.31 | 73.96 | 188 | 13970.28 | -65.8 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 62.81 | ↑73.58 | 0.4167 | 2.78 | **LOSS** |
| 7 | MRVL | 08-08 15:25 | 08-08 16:15 | 59.56 | 59.49 | 129 | 7683.24 | -9.03 | -0.12% | 0.09R | 50m | market | stagnation | trend | trend | noisyHighBeta | 68.73 | ↑58.73 | 0.6144 | 1.62 | **LOSS** |
| 8 | MRVL | 08-23 14:05 | 08-23 14:45 | 71.98 | 70.87 | 194 | 13964.12 | -215.34 | -1.54% | 0.85R | 40m | market | early-reversal | breakout | trend | neutral | 77.5 | ↓71.1 | 0.3735 | 1.02 | **LOSS** |
| 9 | MRVL | 10-02 15:10 | 10-02 16:45 | 72.69 | 72.58 | 192 | 13956.48 | -21.12 | -0.15% | 0.14R | 95m | market | stagnation | trend | trend | neutral | 78.05 | ↑71.8 | 0.5154 | 1.77 | **LOSS** |
| 10 | MRVL | 10-25 14:00 | 10-25 14:50 | 83.06 | 82.85 | 168 | 13954.08 | -35.28 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.54 | ↓82.81 | 0.3328 | 2.92 | **LOSS** |
| 11 | MRVL | 11-04 15:15 | 11-04 16:40 | 85.24 | 85.09 | 163 | 13894.12 | -24.45 | -0.18% | 0.11R | 85m | market | breakeven-stop | trend | trend | neutral | 55.33 | ↑84.3 | 0.2356 | 1.01 | **LOSS** |
| 12 | MRVL | 11-21 14:45 | 11-21 15:05 | 91.47 | 90.76 | 152 | 13903.44 | -107.92 | -0.78% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 77.13 | ↓91.22 | 0.6672 | 1.24 | **LOSS** |
| 13 | MRVL | 12-02 15:00 | 12-02 15:20 | 96.86 | 95.45 | 144 | 13947.84 | -203.04 | -1.46% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 78.19 | ↓96.26 | 0.8646 | 1.28 | **LOSS** |
| 14 | MRVL | 12-16 15:00 | 12-16 15:20 | 123.43 | 122.23 | 112 | 13824.16 | -134.4 | -0.97% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 64.38 | ↑121.24 | 0.6134 | 1.24 | **LOSS** |
| 15 | MRVL | 01-02 14:40 | 01-02 16:25 | 112.3 | 113.91 | 123 | 13812.9 | +198.03 | +1.43% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 64.25 | ↑111.75 | 0.2719 | 1.21 | **WIN** |
| 16 | MRVL | 01-14 14:35 | 01-14 14:45 | 117.25 | 115.56 | 118 | 13835.5 | -199.42 | -1.44% | 1.45R | 10m | market | stop-loss | breakout | breakout | neutral | 83.18 | ↓116.91 | 0.466 | 2.43 | **LOSS** |
| 17 | MRVL | 03-19 14:00 | 03-19 14:40 | 69.04 | 68.68 | 201 | 13877.04 | -72.36 | -0.52% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 65.17 | ↓68.5 | 0.0315 | 1.14 | **LOSS** |
| 18 | MRVL | 04-15 14:05 | 04-15 14:25 | 53.75 | 53.34 | 142 | 7632.5 | -58.22 | -0.76% | 0.47R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 73.56 | ↓53.24 | 0.2294 | 1.05 | **LOSS** |
| 19 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.06 | 60.92 | 227 | 13860.62 | -31.78 | -0.23% | 0.12R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 20 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 223 | 13826 | +64.67 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 21 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.12 | 62.84 | 220 | 13886.4 | -61.6 | -0.44% | 0.42R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 22 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.61 | 70.59 | 193 | 13820.73 | -196.86 | -1.42% | 1.25R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 23 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 176 | 13819.52 | +73.92 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 24 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.22 | 72.82 | 96 | 13866.24 | +57.6 | +0.83% | 0.99R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 25 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.22 | 72.83 | 96 | 13866.24 | +58.56 | +0.84% | 1R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 26 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 94 | 13812.12 | +96.82 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 27 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 95 | 13812.12 | +84.55 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 28 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 176 | 13831.84 | -91.52 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 29 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 180 | 13885.2 | -72 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 30 | MRVL | 08-13 14:10 | 08-13 14:30 | 79.93 | 79.46 | 173 | 13827.89 | -81.31 | -0.59% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.08 | ↑79.26 | 0.4703 | 2.17 | **LOSS** |
| 31 | MRVL | 08-13 14:40 | 08-13 15:00 | 80.06 | 79.1 | 173 | 13850.38 | -166.08 | -1.2% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 61.57 | ↓79.47 | 0.5948 | 1.22 | **LOSS** |
| 32 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.08 | 64.09 | 120 | 7569.6 | +121.2 | +1.6% | 1.38R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 33 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.57 | 71.08 | 196 | 13831.72 | +99.96 | +0.72% | 0.62R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 34 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.11 | 82.38 | 175 | 13844.25 | +572.25 | +4.13% | 3.3R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 35 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.86 | 87.94 | 86 | 7641.96 | -79.12 | -1.04% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 36 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.79 | 84.72 | 164 | 13905.56 | -11.48 | -0.08% | 0.06R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 37 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.02 | 88.27 | 158 | 13907.16 | +39.5 | +0.28% | 0.17R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 38 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.36 | 95.76 | 144 | 13875.84 | -86.4 | -0.62% | 0.31R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 39 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 148 | 13903.12 | -168.72 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 40 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 157 | 13858.39 | -172.7 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 41 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.93 | 81.57 | 47 | 7607.42 | +30.08 | +0.79% | 0.4R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 42 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.93 | 81.59 | 47 | 7607.42 | +31.02 | +0.82% | 0.41R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 43 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.3 | 85 | 149 | 12858.7 | -193.7 | -1.51% | 0.76R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 44 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.43 | 87.6 | 160 | 13828.8 | +187.2 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 45 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.91 | 82.42 | 169 | 13842.79 | +86.19 | +0.62% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 46 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.26 | 82.94 | 167 | 13904.42 | -53.44 | -0.38% | 0.26R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 47 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 163 | 13863.15 | -205.38 | -1.48% | 1.41R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 48 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 173 | 13846.92 | -38.06 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 49 | MRVL | 02-25 14:30 | 02-25 15:35 | 79.35 | 79.38 | 174 | 13806.9 | +5.22 | +0.04% | 0.06R | 65m | market | breakeven-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **WIN** |
| 50 | MRVL | 03-16 15:10 | 03-16 16:00 | 92.12 | 91.94 | 82 | 7553.84 | -14.76 | -0.2% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 74.19 | ↑90.96 | 0.9356 | 2.32 | **LOSS** |
| 51 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.74 | 119.59 | 63 | 7606.62 | -72.45 | -0.95% | 0.5R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 52 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.67 | 154.76 | 89 | 13765.63 | +8.01 | +0.06% | 0.03R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |

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

- ⚠️ **Profit factor 0.69 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:05:49.550Z*
