# Bot Trade Report — 71 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:07:41.211Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $407.17 (-0.41%) over 71 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 71 |
| Win rate | 26.76% (19W / 52L) |
| Net P&L | $-407.17 (-0.41%) |
| Gross profit | $1465.91 |
| Gross loss | $1873.08 |
| Profit factor | 0.78 |
| Avg win | $77.15 |
| Avg loss | $36.02 |
| Payoff ratio | 2.14:1 |
| Expectancy | $-5.73 / trade |
| Max drawdown | 0.75% |
| Sharpe ratio (ann.) | -1.49 |
| Trades / active day | 1.25 |
| Avg confidence | 93.23% |
| Avg trade duration | 38 min |
| Avg planned R:R | 2.78:1 |
| Avg risk ratio | 0.89R |
| Starting equity | $100,000 |
| Ending equity | $99,592.83 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-407.17 | MISS |
| Win rate | 45-60% | 26.76% | MISS |
| Profit factor | >= 1.3 | 0.78 | MISS |
| Sharpe (ann.) | > 1.5 | -1.49 | MISS |
| R:R | 2:1 - 3:1 | 2.78:1 planned | PASS |
| Max drawdown | < 10% | 0.75% | PASS |
| Expectancy | positive | $-5.73 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 50 | 24% | $-424.79 | $-8.5 |
| Mid  10:30–11:30 | 18 | 33.33% | $-2.36 | $-0.13 |
| Noon 11:30–13:00 | 1 | 0% | $-34.75 | $-34.75 |
| PM   13:00–14:00 | 2 | 50% | $+54.73 | $27.37 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 14 | 4 | 28.57% | $+146.05 | $+10.43 | 1.56 | throttle |
| CRM | 17 | 6 | 35.29% | $+14.17 | $+0.83 | 1.04 | throttle |
| PANW | 13 | 3 | 23.08% | $-88.58 | $-6.81 | 0.79 | throttle |
| AMD | 10 | 1 | 10% | $-223.73 | $-22.37 | 0.3 | throttle |
| SNOW | 17 | 5 | 29.41% | $-255.08 | $-15 | 0.49 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 71 | 19 | 26.76% | $-407.17 | $-5.73 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 71 | 19 | 26.76% | $-407.17 | $-5.73 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 1 | 0 | 0% | $-5.76 | $-5.76 |
| extendedBreakout | 1 | 0 | 0% | $-34.58 | $-34.58 |
| confirmationRequired | 69 | 19 | 27.54% | $-366.83 | $-5.32 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 1 | 0 | 0% | $-5.76 | $-5.76 |
| extended-chase | 1 | 0 | 0% | $-34.58 | $-34.58 |
| confirmation-required | 69 | 19 | 27.54% | $-366.83 | $-5.32 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SHOP | 8 | 0.56 | $-8.92 | 6 | 3.24 | $+36.24 | 0.07% | 2.56 | reject |
| Symbol | PANW | 8 | 0.1 | $-33.26 | 5 | 2.35 | $+35.49 | 0.09% | 1.95 | reject |
| Time slot | Mid 10:30-11:30 | 5 | 0 | $-31.62 | 13 | 1.42 | $+11.98 | 0.34% | 1.16 | reject |
| Behavior | confirmationRequired | 40 | 0.51 | $-12.91 | 29 | 1.19 | $+5.16 | 0.34% | 0.96 | reject |
| Trade state | confirmation-required | 40 | 0.51 | $-12.91 | 29 | 1.19 | $+5.16 | 0.34% | 0.96 | reject |
| Regime | trend | 42 | 0.49 | $-13.26 | 29 | 1.19 | $+5.16 | 0.34% | 0.96 | reject |
| Setup | breakout | 42 | 0.49 | $-13.26 | 29 | 1.19 | $+5.16 | 0.34% | 0.96 | reject |
| Time slot | Open 9:30-10:30 | 35 | 0.49 | $-12.96 | 15 | 1.08 | $+1.91 | 0.15% | 0.86 | reject |
| Symbol | CRM | 8 | 1.07 | $+1.06 | 9 | 1.02 | $+0.64 | 0.1% | 0.83 | reject |
| Symbol | SNOW | 12 | 0.57 | $-11.34 | 5 | 0.36 | $-23.79 | 0.16% | 0.26 | reject |
| Symbol | AMD | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-494.7 | 0.74 |
| +3 bps/side | $-669.71 | 0.68 |
| +5 bps/side | $-844.68 | 0.61 |
| +10 bps/side | $-1282.28 | 0.49 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 29 |
| trailing-stop | 12 |
| stagnation | 11 |
| stop-loss | 8 |
| timeout | 7 |
| profit-target | 3 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 13:55 | 184.92 | 183.93 | 36 | 6657.12 | -35.64 | -0.54% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | AMD | 05-05 13:35 | 05-05 14:30 | 100.6 | 100.29 | 66 | 6639.6 | -20.46 | -0.31% | 0.31R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 3 | PANW | 05-12 13:45 | 05-12 15:30 | 190.56 | 191.38 | 35 | 6669.6 | +28.7 | +0.43% | 0.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 4 | AMD | 05-13 13:30 | 05-13 13:45 | 110.26 | 109.57 | 66 | 7277.16 | -45.54 | -0.63% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.01 | ↓109.9 | 0.2104 | 2.2 | **LOSS** |
| 5 | SHOP | 05-16 13:35 | 05-16 13:50 | 112.21 | 111.42 | 65 | 7293.65 | -51.35 | -0.7% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 6 | SNOW | 05-27 13:45 | 05-27 14:15 | 205.96 | 205.44 | 35 | 7208.6 | -18.2 | -0.25% | 0.23R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.97 | ↑204.39 | 0.6946 | 1.93 | **LOSS** |
| 7 | PANW | 06-02 13:30 | 06-02 13:50 | 193.75 | 192.12 | 37 | 7168.75 | -60.31 | -0.84% | 1.11R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 8 | AMD | 06-02 13:35 | 06-02 13:50 | 113.43 | 112.87 | 41 | 4650.63 | -22.96 | -0.49% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.29 | ↑112.74 | 0.6463 | 2.28 | **LOSS** |
| 9 | SNOW | 06-02 13:35 | 06-02 13:50 | 210.01 | 206.93 | 22 | 4620.22 | -67.76 | -1.47% | 1.81R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 10 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.67 | 210.93 | 22 | 4678.74 | -38.28 | -0.82% | 1R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 11 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 48 | 5076 | -22.08 | -0.43% | 0.36R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 12 | PANW | 06-06 13:45 | 06-06 14:00 | 200.23 | 199.44 | 36 | 7208.28 | -28.44 | -0.39% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.26 | ↓199.43 | 0.4794 | 1.19 | **LOSS** |
| 13 | SNOW | 06-12 13:50 | 06-12 14:05 | 211.63 | 211.03 | 22 | 4655.86 | -13.2 | -0.28% | 0.4R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.71 | ↑210.84 | 0.5133 | 3.96 | **LOSS** |
| 14 | CRM | 06-17 14:20 | 06-17 14:35 | 270.18 | 267.73 | 27 | 7294.86 | -66.15 | -0.91% | 0.96R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.87 | ↑267.08 | 1.4065 | 2.29 | **LOSS** |
| 15 | CRM | 06-24 13:35 | 06-24 15:20 | 267.6 | 270.56 | 17 | 4549.2 | +50.32 | +1.11% | 1.59R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 16 | CRM | 06-30 13:30 | 06-30 13:45 | 275.88 | 274.11 | 16 | 4414.08 | -28.32 | -0.64% | 0.91R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 92.59 | ↓275.49 | 0.3147 | 1.2 | **LOSS** |
| 17 | SHOP | 07-02 14:30 | 07-02 15:15 | 115.95 | 115.78 | 40 | 4638 | -6.8 | -0.15% | 0.14R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 18 | CRM | 07-03 13:30 | 07-03 14:35 | 272.29 | 272.12 | 17 | 4628.93 | -2.89 | -0.06% | 0.09R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.79 | ↓271.56 | 0.7389 | 1.97 | **LOSS** |
| 19 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.2 | 222.04 | 21 | 4624.2 | +38.64 | +0.84% | 1.2R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 20 | SHOP | 07-14 17:05 | 07-14 17:15 | 118.48 | 117.55 | 39 | 4620.72 | -36.27 | -0.78% | 1.11R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.6 | ↑115.06 | 0.7675 | 2.8 | **LOSS** |
| 21 | AMD | 07-23 13:40 | 07-23 13:55 | 157.43 | 156.63 | 46 | 7241.78 | -36.8 | -0.51% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.9 | ↓157.17 | 0.5518 | 1.35 | **LOSS** |
| 22 | SNOW | 07-31 13:45 | 07-31 15:25 | 224.43 | 226.18 | 21 | 4713.03 | +36.75 | +0.78% | 0.72R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 86.39 | ↓223.01 | 0.3172 | 1.1 | **WIN** |
| 23 | PANW | 08-08 13:35 | 08-08 13:50 | 170.03 | 168.42 | 27 | 4590.81 | -43.47 | -0.95% | 1.23R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 24 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.32 | 150.46 | 31 | 4690.92 | -26.66 | -0.57% | 0.76R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 25 | CRM | 08-15 13:35 | 08-15 14:10 | 239.28 | 238.82 | 19 | 4546.32 | -8.74 | -0.19% | 0.27R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.24 | ↓237.54 | 0.34 | 2.03 | **LOSS** |
| 26 | SNOW | 08-22 14:05 | 08-22 14:20 | 199.29 | 197.96 | 26 | 5181.54 | -34.58 | -0.67% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 27 | AMD | 08-28 13:35 | 08-28 13:50 | 170.23 | 167.94 | 27 | 4596.21 | -61.83 | -1.35% | 1.45R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 28 | SHOP | 09-05 13:30 | 09-05 14:10 | 146.9 | 146.62 | 48 | 7051.2 | -13.44 | -0.19% | 0.27R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.03 | ↓147.02 | 0.1783 | 1.64 | **LOSS** |
| 29 | CRM | 09-05 13:35 | 09-05 14:30 | 247.39 | 247.61 | 29 | 7174.31 | +6.38 | +0.09% | 0.11R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.66 | ↓246.29 | 0.5948 | 1.57 | **WIN** |
| 30 | PANW | 09-05 13:40 | 09-05 13:55 | 196.22 | 195.18 | 37 | 7260.14 | -38.48 | -0.53% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 31 | SNOW | 09-08 13:35 | 09-08 14:30 | 228.52 | 228.38 | 20 | 4570.4 | -2.8 | -0.06% | 0.09R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 32 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.14 | 228.99 | 20 | 4622.8 | -43 | -0.93% | 0.94R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 33 | AMD | 09-29 13:30 | 09-29 15:15 | 161.2 | 163.33 | 45 | 7254 | +95.85 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.28 | ↑160.72 | 0.2469 | 1.2 | **WIN** |
| 34 | SHOP | 09-29 17:00 | 09-29 17:10 | 143.95 | 145.77 | 50 | 7197.5 | +91 | +1.26% | 1.64R | 10m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 76.28 | ↑142.05 | 0.3214 | 6.59 | **WIN** |
| 35 | CRM | 10-01 13:40 | 10-01 13:55 | 242.34 | 241.14 | 19 | 4604.46 | -22.8 | -0.5% | 0.63R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.61 | ↑240.56 | 0.5486 | 1.27 | **LOSS** |
| 36 | SNOW | 10-01 13:40 | 10-01 14:15 | 228.57 | 228.17 | 32 | 7314.24 | -12.8 | -0.18% | 0.21R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.88 | ↑227.33 | 0.6648 | 1.58 | **LOSS** |
| 37 | PANW | 10-06 13:45 | 10-06 14:00 | 212.12 | 210.66 | 34 | 7212.08 | -49.64 | -0.69% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.8 | ↓211.14 | 0.8134 | 1.23 | **LOSS** |
| 38 | CRM | 10-21 14:20 | 10-21 16:00 | 260.43 | 263.31 | 28 | 7292.04 | +80.64 | +1.11% | 1.19R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 39 | SNOW | 10-23 13:35 | 10-23 15:25 | 246.29 | 249.87 | 29 | 7142.41 | +103.82 | +1.45% | 1.77R | 110m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.12 | ↑245.55 | 1.2385 | 1.44 | **WIN** |
| 40 | SNOW | 11-06 14:35 | 11-06 14:50 | 274.1 | 270.57 | 24 | 6578.4 | -84.72 | -1.29% | 1.08R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.15 | ↓272.22 | 0.7218 | 2.19 | **LOSS** |
| 41 | PANW | 11-10 14:30 | 11-10 14:45 | 214.68 | 213.54 | 34 | 7299.12 | -38.76 | -0.53% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 42 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 43 | AMD | 12-02 14:30 | 12-02 15:05 | 223.59 | 223.29 | 21 | 4695.39 | -6.3 | -0.13% | 0.13R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.28 | ↓222.34 | 0.4825 | 5.36 | **LOSS** |
| 44 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 43 | 6639.63 | +160.39 | +2.42% | 2.1R | 90m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 45 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.89 | 223.97 | 32 | 7324.48 | -157.44 | -2.15% | 2.76R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 46 | SHOP | 01-13 14:35 | 01-13 14:45 | 169.95 | 168.42 | 43 | 7307.85 | -65.79 | -0.9% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.49 | ↓169.75 | 0.8873 | 4.45 | **LOSS** |
| 47 | AMD | 01-28 14:35 | 01-28 15:00 | 256.05 | 254.66 | 28 | 7169.4 | -38.92 | -0.54% | 0.61R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.09 | ↓254.97 | 1.0678 | 1.6 | **LOSS** |
| 48 | SNOW | 01-28 14:40 | 01-28 15:30 | 219.09 | 219.43 | 31 | 6791.79 | +10.54 | +0.16% | 0.14R | 50m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.59 | ↓218.65 | 1.3781 | 1.32 | **WIN** |
| 49 | CRM | 02-02 14:40 | 02-02 15:15 | 215.48 | 215.35 | 34 | 7326.32 | -4.42 | -0.06% | 0.07R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 50 | CRM | 02-12 14:35 | 02-12 14:45 | 187.75 | 185.49 | 39 | 7322.25 | -88.14 | -1.2% | 1.35R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.39 | ↓186.49 | 0.2956 | 2.11 | **LOSS** |
| 51 | SNOW | 02-20 14:30 | 02-20 15:10 | 180.23 | 181.66 | 40 | 7209.2 | +57.2 | +0.79% | 0.96R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 52 | PANW | 02-20 14:35 | 02-20 16:20 | 153.93 | 156.83 | 47 | 7234.71 | +136.3 | +1.88% | 2.11R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.72 | ↑152.67 | 0.2261 | 1.64 | **WIN** |
| 53 | SHOP | 02-26 14:35 | 02-26 15:15 | 123.85 | 123.71 | 55 | 6811.75 | -7.7 | -0.11% | 0.1R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 72.07 | ↓122.96 | 0.1889 | 1.96 | **LOSS** |
| 54 | SHOP | 03-05 14:30 | 03-05 15:05 | 131.7 | 134.14 | 55 | 7243.5 | +134.2 | +1.85% | 1.76R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 67.25 | ↑130.72 | 0.1716 | 2.19 | **WIN** |
| 55 | CRM | 03-05 14:40 | 03-05 15:55 | 199.96 | 200.72 | 34 | 6798.64 | +25.84 | +0.38% | 0.35R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 74.66 | ↓197.95 | 0.4248 | 1.35 | **WIN** |
| 56 | CRM | 03-10 16:25 | 03-10 16:45 | 198.04 | 196.65 | 25 | 4951 | -34.75 | -0.7% | 0.7R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.96 | ↑193.64 | 0.9776 | 1.98 | **LOSS** |
| 57 | AMD | 03-11 13:35 | 03-11 13:50 | 207.73 | 206.66 | 35 | 7270.55 | -37.45 | -0.52% | 0.46R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.69 | ↓206.72 | 0.0332 | 2.02 | **LOSS** |
| 58 | PANW | 03-12 13:35 | 03-12 13:50 | 167.74 | 166.43 | 28 | 4696.72 | -36.68 | -0.78% | 1.11R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.63 | ↓166.67 | 0.568 | 1.46 | **LOSS** |
| 59 | AMD | 03-18 13:55 | 03-18 14:25 | 199.74 | 198.37 | 36 | 7190.64 | -49.32 | -0.69% | 0.7R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.54 | ↓197.81 | 0.461 | 2.14 | **LOSS** |
| 60 | SHOP | 03-30 13:35 | 03-30 13:50 | 113.19 | 112.62 | 41 | 4640.79 | -23.37 | -0.5% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 61 | SHOP | 03-31 13:35 | 03-31 14:50 | 113.29 | 113.77 | 41 | 4644.89 | +19.68 | +0.42% | 0.4R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 82.02 | ↓112.67 | 0.1903 | 1.11 | **WIN** |
| 62 | CRM | 04-13 13:30 | 04-13 14:05 | 166.76 | 170.98 | 44 | 7337.44 | +185.68 | +2.53% | 3.61R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80 | ↑166.55 | 0.1636 | 2.04 | **WIN** |
| 63 | PANW | 04-14 13:30 | 04-14 13:45 | 164.5 | 163.38 | 44 | 7238 | -49.28 | -0.68% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.18 | ↓164.2 | 0.3177 | 1.89 | **LOSS** |
| 64 | CRM | 04-14 13:35 | 04-14 13:45 | 176.77 | 174.85 | 26 | 4596.02 | -49.92 | -1.09% | 1.33R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 84.78 | ↓175.94 | 0.5126 | 1.82 | **LOSS** |
| 65 | CRM | 04-15 13:30 | 04-15 15:15 | 175.57 | 176.76 | 26 | 4564.82 | +30.94 | +0.68% | 0.85R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.22 | ↑174.7 | 0.1189 | 1.77 | **WIN** |
| 66 | SNOW | 04-20 13:35 | 04-20 14:15 | 148.47 | 148.29 | 45 | 6681.15 | -8.1 | -0.12% | 0.11R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.18 | ↑147.74 | 0.3906 | 1.61 | **LOSS** |
| 67 | CRM | 04-20 13:45 | 04-20 14:15 | 187.29 | 185.97 | 25 | 4682.25 | -33 | -0.7% | 0.7R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.98 | ↓185.41 | 0.8358 | 2.97 | **LOSS** |
| 68 | PANW | 04-21 13:35 | 04-21 14:00 | 171.77 | 175.89 | 42 | 7214.34 | +173.04 | +2.4% | 3.43R | 25m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 69.78 | ↑171.51 | 0.1873 | 1.51 | **WIN** |
| 69 | SNOW | 04-21 13:40 | 04-21 14:45 | 153.5 | 153.05 | 47 | 7214.5 | -21.15 | -0.29% | 0.32R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.23 | ↓152.71 | 0.3355 | 1.25 | **LOSS** |
| 70 | PANW | 04-24 13:45 | 04-24 14:00 | 176.31 | 175.19 | 41 | 7228.71 | -45.92 | -0.64% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.59 | ↓175.45 | 0.9406 | 2.14 | **LOSS** |
| 71 | CRM | 04-27 13:50 | 04-27 14:05 | 183.08 | 182.02 | 25 | 4577 | -26.5 | -0.58% | 0.5R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.76 | ↑181.34 | 1.2979 | 2.23 | **LOSS** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio** | Balanced stop 1.2%, target 2.4% — true 2R trade |
| 2 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 3 | **Market session gate** | New entries blocked outside 13:30–18:00 UTC — no extended-hours or late entries |
| 4 | **RSI > 80 hard block (trend)** | RSI > 80 on a trend setup = chasing overbought momentum; blocked (breakout exempt) |
| 5 | **Breakout quality threshold** | `breakoutThresholdAdj` -5 → breakout entry bar is 50 (raised from 50 to filter weak breakouts) |
| 6 | **Break-even stop** | Once position reaches 1R, exit on any return to entry — prevents winner turning loser |
| 7 | **Trailing stop** | 1% for trend, 1.2% for breakout — exits when price retraces from high-watermark |
| 8 | **Stagnation exit** | 25 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −30% of stop after 12 min — pre-stop cut for entries that go wrong immediately |
| 11 | **Rolling symbol throttle** | Pause symbol for 20 days after 4 consecutive bad trades |
| 12 | **Fake-breakout MACD gate** | Blocks: MACD line < 0.04 + VolR ≥ 3.5 + RSI > 66 — near-zero MACD on high-volume "breakout" = false momentum burst |
| 13 | **Double-breakout gate** | Blocks breakout setup when regime is already "breakout" — chasing an extended move; trend regime + breakout setup is profitable, breakout regime + breakout setup is not |
| 14 | **ATR expansion gate (breakout)** | Per-bar ATR must exceed 20-bar baseline by 5%+ — no expansion = false breakout risk |
| 15 | **Trend entry quality** | Trend threshold 75 (boost +20); trend position 80% of standard |
| 16 | **VWAP + ORB + TF15 scoring** | VWAP position, opening-range breakout, and 15-min HTF trend each score entry quality |
| 17 | **MACD histogram** | Bullish histogram: +7 entry; bearish: −7. Both line and histogram confirm: ±3 bonus |
| 18 | **SPY breadth + vol-regime** | SPY trend penalises individual stock risk; volatile ATR regime suppresses trend entries |
| 19 | **Slippage model** | 0.05 bps/side on every fill — realistic market-order cost |
| 20 | **Daily loss limit** | 5% account equity — session blocked after limit reached |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.78 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.89R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:07:41.211Z*
