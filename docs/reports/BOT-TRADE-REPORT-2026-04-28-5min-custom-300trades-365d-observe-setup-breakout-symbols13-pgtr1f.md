# Bot Trade Report — 222 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T12:53:29.733Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 13 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $748.88 (+0.75%) over 222 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 222 |
| Win rate | 36.49% (81W / 141L) |
| Net P&L | $+748.88 (+0.75%) |
| Gross profit | $6271.68 |
| Gross loss | $5522.8 |
| Profit factor | 1.14 |
| Avg win | $77.43 |
| Avg loss | $39.17 |
| Payoff ratio | 1.98:1 |
| Expectancy | $+3.37 / trade |
| Max drawdown | 1.36% |
| Sharpe ratio (ann.) | 0.76 |
| Trades / active day | 1.68 |
| Avg confidence | 93.29% |
| Avg trade duration | 65 min |
| Avg planned R:R | 2.76:1 |
| Avg risk ratio | 0.94R |
| Starting equity | $100,000 |
| Ending equity | $100,748.88 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+748.88 | PASS |
| Win rate | 45-60% | 36.49% | MISS |
| Profit factor | >= 1.3 | 1.14 | MISS |
| Sharpe (ann.) | > 1.5 | 0.76 | MISS |
| R:R | 2:1 - 3:1 | 2.76:1 planned | PASS |
| Max drawdown | < 10% | 1.36% | PASS |
| Expectancy | positive | $+3.37 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 155 | 37.42% | $+596.32 | $3.85 |
| Mid  10:30–11:30 | 57 | 31.58% | $-60.59 | $-1.06 |
| Noon 11:30–13:00 | 4 | 25% | $-75.7 | $-18.93 |
| PM   13:00–14:00 | 6 | 66.67% | $+288.85 | $48.14 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 29 | 13 | 44.83% | $+413.28 | $+14.25 | 1.68 | eligible |
| ORCL | 21 | 10 | 47.62% | $+343.27 | $+16.35 | 1.66 | eligible |
| MU | 17 | 7 | 41.18% | $+197.61 | $+11.62 | 1.45 | eligible |
| NET | 17 | 7 | 41.18% | $+146.88 | $+8.64 | 1.28 | eligible |
| TXN | 9 | 3 | 33.33% | $+119.35 | $+13.26 | 1.63 | throttle |
| TSM | 18 | 7 | 38.89% | $+94.1 | $+5.23 | 1.27 | throttle |
| AMAT | 13 | 5 | 38.46% | $+79.63 | $+6.13 | 1.34 | throttle |
| NVO | 19 | 6 | 31.58% | $+14.4 | $+0.76 | 1.06 | throttle |
| AVGO | 12 | 2 | 16.67% | $-12.25 | $-1.02 | 0.96 | throttle |
| META | 12 | 3 | 25% | $-42.19 | $-3.52 | 0.81 | throttle |
| TSLA | 30 | 13 | 43.33% | $-148.06 | $-4.94 | 0.82 | throttle |
| COIN | 12 | 3 | 25% | $-193.1 | $-16.09 | 0.7 | throttle |
| MRVL | 13 | 2 | 15.38% | $-264.04 | $-20.31 | 0.41 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 222 | 81 | 36.49% | $+748.88 | $+3.37 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 221 | 81 | 36.65% | $+809.33 | $+3.66 |
| mixed | 1 | 0 | 0% | $-60.45 | $-60.45 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 178 | 67 | 37.64% | $+1052.26 | $+5.91 |
| neutral | 6 | 3 | 50% | $+319.26 | $+53.21 |
| extendedBreakout | 6 | 3 | 50% | $+25.32 | $+4.22 |
| noisyHighBeta | 1 | 0 | 0% | $-71.68 | $-71.68 |
| regimeInstability | 3 | 0 | 0% | $-79.36 | $-26.45 |
| falseBreakoutProne | 28 | 8 | 28.57% | $-496.92 | $-17.75 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 178 | 67 | 37.64% | $+1052.26 | $+5.91 |
| neutral | 6 | 3 | 50% | $+319.26 | $+53.21 |
| extended-chase | 6 | 3 | 50% | $+25.32 | $+4.22 |
| noisy-high-beta | 1 | 0 | 0% | $-71.68 | $-71.68 |
| regime-instability | 3 | 0 | 0% | $-79.36 | $-26.45 |
| false-breakout-risk | 28 | 8 | 28.57% | $-496.92 | $-17.75 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ORCL | 13 | 2.12 | $+18.25 | 8 | 1.35 | $+13.25 | 0.19% | 1.13 | promote |
| Symbol | MU | 12 | 1.56 | $+11.3 | 5 | 1.31 | $+12.4 | 0.17% | 1.17 | promote |
| Symbol | INTC | 21 | 1.69 | $+16.19 | 8 | 1.61 | $+9.17 | 0.1% | 1.12 | promote |
| Symbol | AMAT | 6 | 2.38 | $+20.16 | 7 | 0.72 | $-5.91 | 0.11% | 0.52 | watch |
| Behavior | confirmationRequired | 106 | 1.74 | $+14.18 | 72 | 0.74 | $-6.26 | 0.71% | 0.57 | watch |
| Trade state | confirmation-required | 106 | 1.74 | $+14.18 | 72 | 0.74 | $-6.26 | 0.71% | 0.57 | watch |
| Regime | trend | 132 | 1.67 | $+14 | 89 | 0.62 | $-11.67 | 1.11% | 0.49 | watch |
| Setup | breakout | 133 | 1.64 | $+13.44 | 89 | 0.62 | $-11.67 | 1.11% | 0.49 | watch |
| Symbol | TSM | 9 | 3.32 | $+26.86 | 9 | 0.39 | $-16.4 | 0.15% | 0.29 | watch |
| Symbol | AVGO | 8 | 1.39 | $+9.96 | 4 | 0 | $-22.97 | 0.09% | 0 | watch |
| Time slot | Open 9:30-10:30 | 125 | 1.55 | $+11.72 | 30 | 0.36 | $-28.97 | 0.94% | 0.29 | watch |
| Symbol | META | 8 | 1.92 | $+10.88 | 4 | 0 | $-32.3 | 0.13% | 0 | watch |
| Symbol | TXN | 5 | 9.81 | $+55.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Symbol | MRVL | 7 | 1.51 | $+8.75 | 6 | 0 | $-54.21 | 0.33% | 0 | watch |
| Symbol | COIN | 9 | 1.3 | $+11.52 | 3 | 0 | $-98.94 | 0.3% | 0 | watch |
| Symbol | NET | 9 | 1.01 | $+0.22 | 8 | 1.67 | $+18.12 | 0.14% | 1.4 | reject |
| Symbol | NVO | 9 | 0.83 | $-2.22 | 10 | 1.32 | $+3.44 | 0.09% | 0.84 | reject |
| Symbol | TSLA | 17 | 1.27 | $+7.19 | 13 | 0.3 | $-20.79 | 0.29% | 0.21 | reject |
| Behavior | falseBreakoutProne | 20 | 1.12 | $+4.19 | 8 | 0.1 | $-72.6 | 0.58% | 0.07 | reject |
| Trade state | false-breakout-risk | 20 | 1.12 | $+4.19 | 8 | 0.1 | $-72.6 | 0.58% | 0.07 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+469.05 | 1.08 |
| +3 bps/side | $-90.64 | 0.99 |
| +5 bps/side | $-650.44 | 0.9 |
| +10 bps/side | $-2049.68 | 0.72 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 70 |
| timeout | 43 |
| stagnation | 35 |
| trailing-stop | 31 |
| stop-loss | 20 |
| profit-target | 12 |
| breakeven-stop | 11 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INTC | 05-01 15:30 | 05-01 15:45 | 20.56 | 20.44 | 357 | 7339.92 | -42.84 | -0.58% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↑20.33 | 0.0628 | 1.45 | **LOSS** |
| 2 | MU | 05-02 13:30 | 05-02 13:45 | 80.35 | 79.33 | 104 | 8356.4 | -106.08 | -1.27% | 1.13R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 3 | ORCL | 05-02 13:35 | 05-02 14:40 | 150.38 | 150.57 | 45 | 6767.1 | +8.55 | +0.13% | 0.13R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 4 | INTC | 05-12 17:35 | 05-12 17:50 | 22.61 | 22.36 | 209 | 4725.49 | -52.25 | -1.11% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 5 | TSM | 05-13 13:30 | 05-13 15:15 | 189.9 | 192.59 | 38 | 7216.2 | +102.22 | +1.42% | 1.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 6 | AVGO | 05-13 13:30 | 05-13 15:05 | 224.51 | 230.8 | 43 | 9653.93 | +270.47 | +2.8% | 3.68R | 95m | market | profit-target | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.7 | ↑223.7 | 0.6728 | 3.15 | **WIN** |
| 7 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.59 | 66.42 | 112 | 7346.08 | +92.96 | +1.27% | 1.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 8 | META | 05-13 13:35 | 05-13 15:20 | 649.67 | 658.27 | 7 | 4547.69 | +60.2 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 9 | MU | 05-13 13:35 | 05-13 15:20 | 94.54 | 95.73 | 62 | 5861.48 | +73.78 | +1.26% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.86 | ↑93.88 | 0.031 | 1.46 | **WIN** |
| 10 | INTC | 05-13 14:05 | 05-13 14:20 | 22.89 | 22.63 | 206 | 4715.34 | -53.56 | -1.14% | 1.05R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 11 | TSLA | 05-13 17:30 | 05-13 19:15 | 331.88 | 336.37 | 12 | 3982.56 | +53.88 | +1.35% | 1.42R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 95.83 | ↑322.7 | 1.9893 | 4.95 | **WIN** |
| 12 | NVO | 05-14 13:35 | 05-14 13:50 | 66.65 | 65.95 | 71 | 4732.15 | -49.7 | -1.05% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 13 | NET | 05-14 13:35 | 05-14 13:45 | 153.81 | 152.02 | 47 | 7229.07 | -84.13 | -1.16% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 14 | MU | 05-16 13:30 | 05-16 14:40 | 96.45 | 96.87 | 38 | 3665.1 | +15.96 | +0.44% | 0.63R | 70m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 84.53 | ↓96.22 | 0.1541 | 1.16 | **WIN** |
| 15 | TSLA | 05-16 13:30 | 05-16 13:50 | 349.52 | 347.45 | 23 | 8038.96 | -47.61 | -0.59% | 0.53R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.42 | ↓348.18 | 0.1512 | 3.16 | **LOSS** |
| 16 | NET | 05-16 13:35 | 05-16 15:20 | 155.2 | 156.46 | 47 | 7294.4 | +59.22 | +0.81% | 0.92R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 17 | TSLA | 05-20 13:35 | 05-20 13:45 | 354.23 | 345.68 | 11 | 3896.53 | -94.05 | -2.41% | 2.41R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 89.04 | ↓351.62 | 2.5553 | 3.4 | **LOSS** |
| 18 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.88 | 161.75 | 45 | 7194.6 | +84.15 | +1.17% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 19 | TSM | 05-27 13:35 | 05-27 15:20 | 194.96 | 195.82 | 37 | 7213.52 | +31.82 | +0.44% | 0.63R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 20 | MU | 05-27 13:35 | 05-27 15:20 | 94.67 | 96.05 | 62 | 5869.54 | +85.56 | +1.46% | 1.55R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.36 | ↑94.59 | 0.1301 | 1.3 | **WIN** |
| 21 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.76 | 161.53 | 45 | 7234.2 | +34.65 | +0.48% | 0.62R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 22 | COIN | 06-02 13:35 | 06-02 13:40 | 249.46 | 245.39 | 29 | 7234.34 | -118.03 | -1.63% | 2.26R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 23 | COIN | 06-03 14:15 | 06-03 16:10 | 254.39 | 257.95 | 18 | 4579.02 | +64.08 | +1.4% | 1.26R | 115m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.56 | ↑250.39 | 1.8391 | 1.8 | **WIN** |
| 24 | TXN | 06-04 13:30 | 06-04 14:00 | 190.17 | 189.53 | 38 | 7226.46 | -24.32 | -0.34% | 0.49R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 25 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 26 | TSM | 06-04 13:30 | 06-04 14:00 | 202.13 | 200.7 | 23 | 4648.99 | -32.89 | -0.71% | 1.01R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 27 | AVGO | 06-04 13:30 | 06-04 13:50 | 261.12 | 261.73 | 18 | 4700.16 | +10.98 | +0.23% | 0.32R | 20m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 87.17 | ↓259.87 | 1.0726 | 2.1 | **WIN** |
| 28 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 42 | 7342.86 | +187.32 | +2.55% | 2.63R | 60m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 29 | ORCL | 06-06 13:30 | 06-06 13:50 | 174.36 | 173.64 | 55 | 9589.8 | -39.6 | -0.41% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.67 | ↓173.99 | 0.1742 | 1.61 | **LOSS** |
| 30 | META | 06-06 13:30 | 06-06 14:25 | 697.4 | 696.91 | 7 | 4881.8 | -3.43 | -0.07% | 0.07R | 55m | market | stagnation | trend | breakout | regimeInstability | regime-instability | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 31 | NVO | 06-06 13:35 | 06-06 15:20 | 74.33 | 74.46 | 141 | 10480.53 | +18.33 | +0.17% | 0.22R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.73 | ↓74.19 | 0.2439 | 2.63 | **WIN** |
| 32 | MU | 06-09 14:00 | 06-09 15:25 | 110.89 | 110.78 | 53 | 5877.17 | -5.83 | -0.1% | 0.09R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 70.54 | ↓109.73 | 0.252 | 1.97 | **LOSS** |
| 33 | INTC | 06-10 17:00 | 06-10 17:50 | 21.33 | 22.18 | 221 | 4713.93 | +187.85 | +3.98% | 5.69R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 34 | COIN | 06-11 13:35 | 06-11 13:55 | 258.51 | 254.79 | 28 | 7238.28 | -104.16 | -1.44% | 1.92R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 62.01 | ↓256.35 | 0.1412 | 1.1 | **LOSS** |
| 35 | AVGO | 06-12 14:10 | 06-12 14:50 | 257.13 | 256.88 | 18 | 4628.34 | -4.5 | -0.1% | 0.1R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.71 | ↑254.35 | 0.8364 | 1.87 | **LOSS** |
| 36 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.62 | 210.82 | 35 | 7161.7 | +217 | +3.03% | 2.59R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 37 | TSLA | 06-13 16:30 | 06-13 18:10 | 326.45 | 328.36 | 12 | 3917.4 | +22.92 | +0.59% | 0.51R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 74.81 | ↑318.34 | 1.9969 | 1.47 | **WIN** |
| 38 | TXN | 06-16 13:30 | 06-16 15:15 | 197.72 | 199.23 | 30 | 5931.6 | +45.3 | +0.76% | 0.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 39 | MU | 06-16 13:30 | 06-16 15:15 | 118.6 | 120.66 | 49 | 5811.4 | +100.94 | +1.74% | 1.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 40 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.53 | 175.79 | 42 | 7330.26 | +52.92 | +0.72% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 41 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 229 | 4726.56 | +32.06 | +0.68% | 0.66R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 42 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.89 | 323 | 6757.16 | -9.69 | -0.14% | 0.2R | 15m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 43 | MU | 06-17 13:45 | 06-17 14:40 | 122.02 | 122.06 | 44 | 5368.88 | +1.76 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 77.56 | ↓121.6 | 0.5096 | 2.14 | **WIN** |
| 44 | MRVL | 06-17 17:05 | 06-17 17:30 | 70.34 | 71.28 | 95 | 6682.3 | +89.3 | +1.34% | 1.51R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.71 | ↑70.03 | -0.1539 | 2.74 | **WIN** |
| 45 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 347 | 7339.05 | +100.63 | +1.37% | 1.76R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 46 | AVGO | 06-18 14:10 | 06-18 14:45 | 254.63 | 254.1 | 28 | 7129.64 | -14.84 | -0.21% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 67.56 | ↑251.99 | 0.8009 | 1.14 | **LOSS** |
| 47 | INTC | 06-23 13:35 | 06-23 14:40 | 21.36 | 21.37 | 222 | 4741.92 | +2.22 | +0.05% | 0.07R | 65m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 48 | ORCL | 06-24 13:35 | 06-24 14:05 | 211.62 | 210.9 | 22 | 4655.64 | -15.84 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.77 | ↓210.26 | 1.0072 | 1.16 | **LOSS** |
| 49 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.33 | 339 | 7352.91 | +216.96 | +2.95% | 4.21R | 70m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 50 | COIN | 06-24 13:35 | 06-24 14:10 | 316.51 | 332.68 | 23 | 7279.73 | +371.91 | +5.11% | 4.33R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80.79 | ↑314.31 | 1.6507 | 1.32 | **WIN** |
| 51 | META | 06-24 13:45 | 06-24 14:00 | 712.03 | 705.9 | 6 | 4272.18 | -36.78 | -0.86% | 1.09R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 52 | AVGO | 06-25 13:30 | 06-25 14:00 | 266.9 | 266.75 | 17 | 4537.3 | -2.55 | -0.06% | 0.09R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 95.37 | ↓266.09 | 0.7073 | 1.21 | **LOSS** |
| 53 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 54 | INTC | 06-27 13:40 | 06-27 14:25 | 23.11 | 23.07 | 456 | 10538.16 | -18.24 | -0.17% | 0.22R | 45m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 55 | INTC | 07-03 13:40 | 07-03 14:25 | 22.37 | 22.35 | 212 | 4742.44 | -4.24 | -0.09% | 0.11R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.69 | ↑22.22 | 0.0634 | 3.08 | **LOSS** |
| 56 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 25 | 4728 | +59.75 | +1.26% | 1.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 57 | COIN | 07-07 13:45 | 07-07 14:05 | 360.88 | 358.15 | 18 | 6495.84 | -49.14 | -0.76% | 0.64R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 58 | COIN | 07-09 13:30 | 07-09 13:55 | 358.64 | 359.28 | 20 | 7172.8 | +12.8 | +0.18% | 0.26R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.46 | ↓357.65 | 0.5578 | 1.49 | **WIN** |
| 59 | META | 07-09 13:35 | 07-09 15:20 | 729.76 | 734.89 | 6 | 4378.56 | +30.78 | +0.7% | 1R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 86.51 | ↑727.39 | 1.0668 | 4.23 | **WIN** |
| 60 | TSM | 07-09 13:40 | 07-09 13:55 | 232.41 | 231.41 | 31 | 7204.71 | -31 | -0.43% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 61 | AMAT | 07-10 13:40 | 07-10 13:55 | 197.73 | 196.85 | 53 | 10479.69 | -46.64 | -0.45% | 0.64R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 62 | NET | 07-15 13:50 | 07-15 14:05 | 184.49 | 182.94 | 39 | 7195.11 | -60.45 | -0.84% | 0.83R | 15m | market | early-reversal | mixed | breakout | confirmationRequired | confirmation-required | 67.27 | ↓183.3 | -0.1892 | 1.28 | **LOSS** |
| 63 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.27 | 249.15 | 19 | 4736.13 | -2.28 | -0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 64 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 314 | 7366.44 | -94.2 | -1.28% | 1.54R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 65 | TSLA | 07-18 13:30 | 07-18 14:30 | 325.38 | 326.52 | 25 | 8134.5 | +28.5 | +0.35% | 0.47R | 60m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.09 | ↓324.11 | 0.3929 | 3.84 | **WIN** |
| 66 | NET | 07-21 13:45 | 07-21 14:15 | 199.29 | 198.86 | 36 | 7174.44 | -15.48 | -0.22% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.31 | ↑197.5 | 0.5778 | 1.49 | **LOSS** |
| 67 | NVO | 07-24 13:30 | 07-24 14:10 | 70.89 | 70.77 | 103 | 7301.67 | -12.36 | -0.17% | 0.24R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 68 | AVGO | 07-24 13:35 | 07-24 13:50 | 289.28 | 286.05 | 25 | 7232 | -80.75 | -1.12% | 1R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 69 | TSLA | 07-25 13:30 | 07-25 13:45 | 311.19 | 309.32 | 26 | 8090.94 | -48.62 | -0.6% | 0.58R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 75.81 | ↓310.21 | 1.1278 | 2.56 | **LOSS** |
| 70 | INTC | 07-28 13:35 | 07-28 13:50 | 21.14 | 20.96 | 224 | 4735.36 | -40.32 | -0.85% | 1.21R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.23 | ↓21 | 0.1099 | 8.97 | **LOSS** |
| 71 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.32 | 77.3 | 61 | 4716.52 | -1.22 | -0.03% | 0.04R | 10m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 86.82 | ↓77.02 | 0.2956 | 2.31 | **LOSS** |
| 72 | ORCL | 07-29 13:35 | 07-29 14:05 | 251.92 | 251.06 | 18 | 4534.56 | -15.48 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 73 | META | 08-04 13:35 | 08-04 14:00 | 764.16 | 761.57 | 6 | 4584.96 | -15.54 | -0.34% | 0.46R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.76 | ↓762.46 | 2.1693 | 3.3 | **LOSS** |
| 74 | ORCL | 08-04 13:40 | 08-04 15:10 | 249.09 | 249.45 | 29 | 7223.61 | +10.44 | +0.14% | 0.18R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.12 | ↓247.91 | 0.662 | 1.26 | **WIN** |
| 75 | TXN | 08-05 13:40 | 08-05 14:10 | 185.54 | 185.26 | 25 | 4638.5 | -7 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 76 | MRVL | 08-05 13:45 | 08-05 14:00 | 77.83 | 77.09 | 94 | 7316.02 | -69.56 | -0.95% | 0.98R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 77 | TSLA | 08-06 13:40 | 08-06 15:25 | 313.41 | 318.29 | 28 | 8775.48 | +136.64 | +1.56% | 1.79R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.52 | ↑310.84 | 0.5053 | 1.42 | **WIN** |
| 78 | MRVL | 08-07 13:40 | 08-07 14:00 | 77 | 76.68 | 61 | 4697 | -19.52 | -0.42% | 0.44R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 79 | TSLA | 08-08 13:35 | 08-08 15:20 | 328.54 | 333.32 | 12 | 3942.48 | +57.36 | +1.45% | 1.67R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.85 | ↑325.67 | 1.855 | 2.23 | **WIN** |
| 80 | MU | 08-08 14:30 | 08-08 15:20 | 115.19 | 118.33 | 32 | 3686.08 | +100.48 | +2.73% | 2.65R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 87.57 | ↑113.77 | 0.7716 | 2.98 | **WIN** |
| 81 | TSLA | 08-11 13:30 | 08-11 14:00 | 339.95 | 339.64 | 24 | 8158.8 | -7.44 | -0.09% | 0.08R | 30m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.45 | ↓338.44 | 1.6387 | 4.12 | **LOSS** |
| 82 | TXN | 08-12 13:30 | 08-12 14:30 | 186.58 | 191.33 | 51 | 9515.58 | +242.25 | +2.55% | 3.64R | 60m | market | profit-target | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.74 | ↑186.07 | -0.0234 | 1.81 | **WIN** |
| 83 | TSLA | 08-13 13:30 | 08-13 14:00 | 346.57 | 344.85 | 25 | 8664.25 | -43 | -0.5% | 0.62R | 30m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 74.88 | ↓344.47 | 1.1247 | 2.86 | **LOSS** |
| 84 | NVO | 08-13 13:30 | 08-13 15:15 | 50.46 | 51.04 | 93 | 4692.78 | +53.94 | +1.15% | 1.64R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 85 | NVO | 08-15 13:30 | 08-15 15:15 | 51.66 | 51.92 | 91 | 4701.06 | +23.66 | +0.5% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 86 | MU | 08-18 13:30 | 08-18 13:55 | 122.64 | 122.08 | 63 | 7726.32 | -35.28 | -0.46% | 0.66R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.45 | ↓122.02 | 0.1639 | 6.42 | **LOSS** |
| 87 | NVO | 08-19 13:30 | 08-19 13:55 | 54.77 | 54.7 | 105 | 5750.85 | -7.35 | -0.13% | 0.16R | 25m | market | trailing-stop | trend | breakout | regimeInstability | regime-instability | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 88 | TSLA | 08-19 13:55 | 08-19 14:25 | 339.03 | 338.68 | 18 | 6102.54 | -6.3 | -0.1% | 0.11R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.24 | ↑335.97 | 0.5198 | 2.45 | **LOSS** |
| 89 | INTC | 08-22 13:35 | 08-22 15:05 | 24.04 | 24.38 | 197 | 4735.88 | +66.98 | +1.41% | 2.01R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 90 | MU | 08-22 13:35 | 08-22 13:55 | 117.42 | 116.7 | 71 | 8336.82 | -51.12 | -0.61% | 0.74R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 91 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 92 | TXN | 08-22 14:00 | 08-22 15:45 | 206.7 | 207.6 | 22 | 4547.4 | +19.8 | +0.44% | 0.56R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 93 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 94 | AMAT | 08-22 14:10 | 08-22 14:50 | 164.41 | 164.22 | 28 | 4603.48 | -5.32 | -0.12% | 0.14R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 95 | NVO | 08-25 13:35 | 08-25 14:30 | 57.78 | 57.77 | 127 | 7338.06 | -1.27 | -0.02% | 0.03R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 76.38 | ↓57.54 | 0.126 | 2.86 | **LOSS** |
| 96 | ORCL | 08-28 13:35 | 08-28 15:20 | 238.57 | 239.96 | 19 | 4532.83 | +26.41 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.35 | ↑237.49 | 0.2539 | 2.24 | **WIN** |
| 97 | MU | 08-28 13:35 | 08-28 13:50 | 121.04 | 119.66 | 31 | 3752.24 | -42.78 | -1.14% | 1.34R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 98 | AVGO | 09-04 13:30 | 09-04 13:40 | 307.85 | 303.57 | 15 | 4617.75 | -64.2 | -1.39% | 1.85R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 95.99 | ↓307.09 | 1.0027 | 5.58 | **LOSS** |
| 99 | NET | 09-05 13:30 | 09-05 13:45 | 213.22 | 212.24 | 32 | 6823.04 | -31.36 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 100 | MRVL | 09-08 13:35 | 09-08 14:15 | 64.19 | 64.03 | 114 | 7317.66 | -18.24 | -0.25% | 0.26R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.09 | ↓63.84 | 0.2539 | 1.42 | **LOSS** |
| 101 | COIN | 09-09 13:40 | 09-09 13:55 | 311.9 | 310.49 | 23 | 7173.7 | -32.43 | -0.45% | 0.45R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.71 | ↑308.73 | 0.8674 | 1.28 | **LOSS** |
| 102 | TSM | 09-10 13:30 | 09-10 14:00 | 259.53 | 259.34 | 26 | 6747.78 | -4.94 | -0.07% | 0.08R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.53 | ↓259.18 | 0.4067 | 4.21 | **LOSS** |
| 103 | COIN | 09-10 13:35 | 09-10 14:00 | 323.65 | 323.16 | 14 | 4531.1 | -6.86 | -0.15% | 0.18R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.28 | ↓322.51 | 1.6574 | 1.54 | **LOSS** |
| 104 | INTC | 09-15 13:40 | 09-15 14:15 | 24.68 | 24.95 | 298 | 7354.64 | +80.46 | +1.09% | 1.18R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 105 | AMAT | 09-16 13:35 | 09-16 13:45 | 173.87 | 172.54 | 27 | 4694.49 | -35.91 | -0.76% | 1.09R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 85.64 | ↓173.47 | 0.4738 | 1.22 | **LOSS** |
| 106 | META | 09-18 13:40 | 09-18 13:55 | 786 | 782.28 | 9 | 7074 | -33.48 | -0.47% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 107 | TSLA | 09-22 13:35 | 09-22 15:20 | 437 | 440.9 | 9 | 3933 | +35.1 | +0.89% | 0.95R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.06 | ↑434.75 | 1.9728 | 2.93 | **WIN** |
| 108 | INTC | 09-22 13:40 | 09-22 13:55 | 30.1 | 29.71 | 158 | 4755.8 | -61.62 | -1.3% | 1.13R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 109 | INTC | 09-23 13:35 | 09-23 14:05 | 29.52 | 29.65 | 161 | 4752.72 | +20.93 | +0.44% | 0.63R | 30m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 110 | TSLA | 09-24 13:30 | 09-24 15:15 | 433.46 | 438.66 | 20 | 8669.2 | +104 | +1.2% | 1.25R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.39 | ↑431.87 | -0.0186 | 1.69 | **WIN** |
| 111 | INTC | 09-24 13:35 | 09-24 15:20 | 30.16 | 30.61 | 244 | 7359.04 | +109.8 | +1.49% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 112 | TSLA | 09-26 13:30 | 09-26 13:40 | 432.82 | 426.16 | 20 | 8656.4 | -133.2 | -1.54% | 1.45R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.04 | ↓430.8 | 0.8777 | 1.54 | **LOSS** |
| 113 | AVGO | 09-29 13:35 | 09-29 13:50 | 340.49 | 337.8 | 13 | 4426.37 | -34.97 | -0.79% | 1.13R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.56 | ↓338.91 | 0.6918 | 2.06 | **LOSS** |
| 114 | MU | 09-30 13:40 | 09-30 14:50 | 166.68 | 166.6 | 22 | 3666.96 | -1.76 | -0.05% | 0.06R | 70m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 84.51 | ↓165.13 | 0.4065 | 1.53 | **LOSS** |
| 115 | TSM | 10-01 13:35 | 10-01 15:20 | 282.11 | 285.15 | 16 | 4513.76 | +48.64 | +1.08% | 1.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.02 | ↑280.93 | 0.9152 | 2.11 | **WIN** |
| 116 | INTC | 10-01 13:35 | 10-01 13:50 | 34.11 | 33.68 | 139 | 4741.29 | -59.77 | -1.26% | 1.35R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 87.06 | ↓33.85 | 0.117 | 2.89 | **LOSS** |
| 117 | COIN | 10-01 13:35 | 10-01 13:50 | 344.67 | 342.02 | 13 | 4480.71 | -34.45 | -0.77% | 0.74R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.91 | ↓343.66 | 2.4689 | 2.26 | **LOSS** |
| 118 | ORCL | 10-01 15:00 | 10-01 15:15 | 287.22 | 284.89 | 16 | 4595.52 | -37.28 | -0.81% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 93.51 | ↑281.15 | 1.2576 | 2.71 | **LOSS** |
| 119 | ORCL | 10-02 13:30 | 10-02 13:40 | 294.28 | 289.71 | 16 | 4708.48 | -73.12 | -1.55% | 2.01R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 88.9 | ↓293.08 | 1.125 | 1.97 | **LOSS** |
| 120 | ORCL | 10-03 13:35 | 10-03 13:50 | 293.6 | 291.89 | 16 | 4697.6 | -27.36 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.41 | ↓291.16 | 0.363 | 2.27 | **LOSS** |
| 121 | TSM | 10-03 13:35 | 10-03 13:50 | 292.94 | 291.93 | 35 | 10252.9 | -35.35 | -0.34% | 0.49R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.84 | ↓292.27 | 0.8491 | 3.42 | **LOSS** |
| 122 | NVO | 10-03 14:15 | 10-03 15:10 | 59.48 | 59.41 | 123 | 7316.04 | -8.61 | -0.12% | 0.14R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 66.19 | ↑58.84 | 0.0481 | 1.45 | **LOSS** |
| 123 | INTC | 10-07 13:35 | 10-07 14:00 | 37.41 | 37.48 | 197 | 7369.77 | +13.79 | +0.19% | 0.23R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.26 | ↑37.08 | 0.0821 | 8.05 | **WIN** |
| 124 | TSM | 10-08 13:35 | 10-08 15:20 | 299.05 | 304.18 | 24 | 7177.2 | +123.12 | +1.72% | 2.46R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 78.05 | ↑296.7 | 0.4771 | 1.16 | **WIN** |
| 125 | MRVL | 10-08 13:45 | 10-08 14:35 | 89.33 | 89.09 | 52 | 4645.16 | -12.48 | -0.27% | 0.25R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.79 | ↓88.74 | 0.4263 | 1.3 | **LOSS** |
| 126 | NVO | 10-08 13:45 | 10-08 14:05 | 60.02 | 59.72 | 122 | 7322.44 | -36.6 | -0.5% | 0.71R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.82 | ↓59.72 | 0.1059 | 1.39 | **LOSS** |
| 127 | TSLA | 10-10 13:30 | 10-10 13:45 | 440.45 | 436.71 | 9 | 3964.05 | -33.66 | -0.85% | 1.15R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.43 | ↓438.87 | 1.7423 | 5.12 | **LOSS** |
| 128 | NET | 10-10 13:35 | 10-10 14:00 | 225.24 | 222.22 | 21 | 4730.04 | -63.42 | -1.34% | 1.91R | 25m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 129 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 14 | 10065.58 | -5.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 130 | INTC | 10-20 13:45 | 10-20 14:05 | 38.26 | 38.06 | 275 | 10521.5 | -55 | -0.52% | 0.6R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 131 | TSLA | 10-20 13:50 | 10-20 14:15 | 448.52 | 445.62 | 13 | 5830.76 | -37.7 | -0.65% | 0.59R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.08 | ↓444.69 | 1.9042 | 1.9 | **LOSS** |
| 132 | AMAT | 10-23 13:35 | 10-23 15:20 | 224.6 | 228.39 | 32 | 7187.2 | +121.28 | +1.69% | 1.64R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.49 | ↑222.58 | 1.2178 | 1.38 | **WIN** |
| 133 | ORCL | 10-23 13:45 | 10-23 15:30 | 276.11 | 280.02 | 26 | 7178.86 | +101.66 | +1.42% | 1.84R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 64.33 | ↑273.99 | 0.4844 | 1.22 | **WIN** |
| 134 | TSM | 10-24 13:35 | 10-24 13:55 | 296.83 | 295.63 | 24 | 7123.92 | -28.8 | -0.4% | 0.53R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.27 | ↓296.09 | 0.2874 | 1.6 | **LOSS** |
| 135 | AVGO | 10-24 13:35 | 10-24 14:05 | 354.32 | 353.52 | 20 | 7086.4 | -16 | -0.23% | 0.22R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.03 | ↑352.84 | 2.0817 | 2.4 | **LOSS** |
| 136 | TSM | 10-27 13:30 | 10-27 13:45 | 299.44 | 296.56 | 24 | 7186.56 | -69.12 | -0.96% | 1.37R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 72.45 | ↓299.52 | 0.6186 | 5.14 | **LOSS** |
| 137 | MU | 10-27 13:40 | 10-27 13:55 | 222.44 | 219.87 | 26 | 5783.44 | -66.82 | -1.16% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 65.07 | ↓222.7 | 1.1579 | 1.21 | **LOSS** |
| 138 | MRVL | 10-28 13:30 | 10-28 13:45 | 89.69 | 88.79 | 52 | 4663.88 | -46.8 | -1% | 1.35R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.81 | ↓89.49 | 0.1548 | 2.61 | **LOSS** |
| 139 | AMAT | 11-05 14:45 | 11-05 16:30 | 235.99 | 238.29 | 31 | 7315.69 | +71.3 | +0.97% | 0.86R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 69.91 | ↑234.83 | 0.2867 | 1.67 | **WIN** |
| 140 | META | 11-10 14:35 | 11-10 15:50 | 628.71 | 628.69 | 11 | 6915.81 | -0.22 | 0% | 0R | 75m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 66.34 | ↓627.13 | 3.2793 | 2.32 | **LOSS** |
| 141 | NVO | 11-11 14:45 | 11-11 16:30 | 47.95 | 48.64 | 98 | 4699.1 | +67.62 | +1.44% | 1.32R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 96.08 | ↑47.68 | 0.4768 | 2.58 | **WIN** |
| 142 | NVO | 11-12 14:35 | 11-12 15:25 | 49.97 | 49.91 | 147 | 7345.59 | -8.82 | -0.12% | 0.13R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 70.95 | ↓49.8 | 0.1666 | 2.58 | **LOSS** |
| 143 | INTC | 11-19 14:45 | 11-19 15:50 | 34.91 | 35.15 | 211 | 7366.01 | +50.64 | +0.69% | 0.64R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 144 | NVO | 11-19 14:45 | 11-19 15:25 | 48.42 | 48.34 | 151 | 7311.42 | -12.08 | -0.17% | 0.22R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 68.73 | ↓48.23 | 0.0771 | 1.21 | **LOSS** |
| 145 | TSLA | 11-20 14:40 | 11-20 15:55 | 422.86 | 423.38 | 9 | 3805.74 | +4.68 | +0.12% | 0.11R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 91.19 | ↓419.47 | 4.5271 | 3.38 | **WIN** |
| 146 | TSM | 11-26 14:30 | 11-26 14:45 | 291.32 | 289.85 | 16 | 4661.12 | -23.52 | -0.5% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.6 | ↓290.6 | 1.8061 | 2.61 | **LOSS** |
| 147 | INTC | 11-26 14:30 | 11-26 15:00 | 36.61 | 36.51 | 201 | 7358.61 | -20.1 | -0.27% | 0.34R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 148 | MRVL | 11-26 14:40 | 11-26 14:55 | 85.67 | 85.45 | 54 | 4626.18 | -11.88 | -0.26% | 0.23R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.74 | ↑84.94 | 0.6685 | 1.83 | **LOSS** |
| 149 | COIN | 11-26 14:40 | 11-26 14:55 | 258.52 | 254.12 | 18 | 4653.36 | -79.2 | -1.7% | 1.53R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 94.84 | ↓257.03 | 2.6006 | 2.34 | **LOSS** |
| 150 | INTC | 11-28 14:35 | 11-28 15:10 | 37.91 | 38.54 | 180 | 6823.8 | +113.4 | +1.66% | 1.63R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↑37.82 | 0.1255 | 1.99 | **WIN** |
| 151 | INTC | 11-28 17:55 | 12-01 14:20 | 40.61 | 39.98 | 91 | 3695.51 | -57.33 | -1.55% | 1.44R | 4105m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 152 | TSM | 12-02 14:35 | 12-02 14:50 | 292.41 | 291.46 | 25 | 7310.25 | -23.75 | -0.32% | 0.42R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 153 | MU | 12-02 14:35 | 12-02 14:50 | 243.91 | 240.73 | 24 | 5853.84 | -76.32 | -1.3% | 1.17R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 66.95 | ↓240.89 | 0.1426 | 1.7 | **LOSS** |
| 154 | AMAT | 12-02 14:35 | 12-02 14:50 | 260.48 | 259.68 | 18 | 4688.64 | -14.4 | -0.31% | 0.44R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.35 | ↑258.39 | 0.6237 | 1.64 | **LOSS** |
| 155 | NET | 12-02 14:35 | 12-02 15:30 | 203.23 | 204.16 | 36 | 7316.28 | +33.48 | +0.46% | 0.45R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 156 | AMAT | 12-08 14:30 | 12-08 14:45 | 271.04 | 269.19 | 27 | 7318.08 | -49.95 | -0.68% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.7 | ↓270.46 | -0.1345 | 1.98 | **LOSS** |
| 157 | NVO | 12-10 14:45 | 12-10 16:30 | 47.86 | 48.06 | 153 | 7322.58 | +30.6 | +0.42% | 0.42R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 78.14 | ↑47.43 | 0.198 | 2.61 | **WIN** |
| 158 | NVO | 12-11 14:45 | 12-11 16:30 | 50.06 | 50.35 | 146 | 7308.76 | +42.34 | +0.58% | 0.56R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.72 | ↑49.87 | 0.2689 | 1.47 | **WIN** |
| 159 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 8 | 3623.28 | +12.32 | +0.34% | 0.49R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 160 | INTC | 12-12 14:35 | 12-12 14:55 | 39.96 | 39.8 | 184 | 7352.64 | -29.44 | -0.4% | 0.44R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.87 | ↑39.52 | 0.0079 | 1.14 | **LOSS** |
| 161 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.58 | 473.11 | 8 | 3828.64 | -43.76 | -1.14% | 0.97R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 162 | ORCL | 12-16 14:35 | 12-16 14:40 | 187.75 | 185.24 | 39 | 7322.25 | -97.89 | -1.34% | 1.3R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 69.13 | ↓187.16 | 0.0996 | 2.19 | **LOSS** |
| 163 | INTC | 12-19 14:35 | 12-19 15:10 | 37.09 | 37.04 | 198 | 7343.82 | -9.9 | -0.13% | 0.14R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 164 | TSLA | 12-22 14:45 | 12-22 15:00 | 497.96 | 490.53 | 8 | 3983.68 | -59.44 | -1.49% | 1.27R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.32 | ↓494.62 | 3.1468 | 2.38 | **LOSS** |
| 165 | NET | 12-22 14:50 | 12-22 15:25 | 202.83 | 202.36 | 23 | 4665.09 | -10.81 | -0.23% | 0.22R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 166 | MU | 12-30 14:30 | 12-30 14:45 | 297.68 | 295.43 | 12 | 3572.16 | -27 | -0.76% | 1.09R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.94 | ↓296.08 | 1.1151 | 3.77 | **LOSS** |
| 167 | INTC | 12-30 14:40 | 12-30 15:10 | 37.3 | 37.28 | 127 | 4737.1 | -2.54 | -0.05% | 0.06R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.32 | ↑37.09 | 0.1623 | 1.21 | **LOSS** |
| 168 | MRVL | 12-30 14:45 | 12-30 15:10 | 87.27 | 86.84 | 84 | 7330.68 | -36.12 | -0.49% | 0.59R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.65 | ↓86.44 | 0.3119 | 1.45 | **LOSS** |
| 169 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 170 | NVO | 01-07 15:05 | 01-07 15:20 | 57.67 | 57.17 | 82 | 4728.94 | -41 | -0.87% | 0.9R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.34 | ↓57.24 | 0.3419 | 1.59 | **LOSS** |
| 171 | NVO | 01-09 14:35 | 01-09 15:40 | 60.06 | 60 | 78 | 4684.68 | -4.68 | -0.1% | 0.09R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 93.77 | ↓59.67 | 0.5574 | 2.33 | **LOSS** |
| 172 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 173 | AVGO | 01-16 14:35 | 01-16 14:55 | 351.73 | 348.59 | 20 | 7034.6 | -62.8 | -0.89% | 0.81R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.32 | ↓349.03 | 0.5549 | 1.14 | **LOSS** |
| 174 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 14 | 6240.5 | -38.78 | -0.62% | 0.78R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 175 | TXN | 01-21 14:35 | 01-21 15:05 | 193.35 | 192.94 | 24 | 4640.4 | -9.84 | -0.21% | 0.28R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.54 | ↓192.87 | 0.6553 | 3.06 | **LOSS** |
| 176 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 177 | META | 01-22 14:30 | 01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | -23.76 | -0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 178 | NVO | 01-23 14:35 | 01-23 14:55 | 63.77 | 63.5 | 73 | 4655.21 | -19.71 | -0.42% | 0.49R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.66 | ↓63.54 | 0.268 | 1.75 | **LOSS** |
| 179 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 41 | 7178.28 | +41 | +0.57% | 0.53R | 105m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 180 | ORCL | 01-26 14:30 | 01-26 14:45 | 180.61 | 182.75 | 26 | 4695.86 | +55.64 | +1.18% | 1.62R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 88.75 | ↓179.85 | 0.4731 | 3.86 | **WIN** |
| 181 | AMAT | 01-27 14:50 | 01-27 16:35 | 332.87 | 335.32 | 14 | 4660.18 | +34.3 | +0.74% | 0.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 94.64 | ↑328.62 | 2.2856 | 2.07 | **WIN** |
| 182 | COIN | 01-28 14:30 | 01-28 14:35 | 214.17 | 210.5 | 26 | 5568.42 | -95.42 | -1.71% | 2.11R | 5m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 183 | MRVL | 01-28 14:35 | 01-28 14:50 | 85.05 | 84.58 | 86 | 7314.3 | -40.42 | -0.55% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 184 | TSM | 02-09 14:35 | 02-09 15:20 | 355.37 | 354.96 | 13 | 4619.81 | -5.33 | -0.12% | 0.16R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.51 | ↓351.96 | 1.0098 | 3.28 | **LOSS** |
| 185 | AVGO | 02-09 14:35 | 02-09 14:55 | 337.14 | 336.59 | 21 | 7079.94 | -11.55 | -0.16% | 0.16R | 20m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 66.39 | ↓334.92 | 0.2775 | 1.15 | **LOSS** |
| 186 | TSLA | 02-11 14:40 | 02-11 14:55 | 435.15 | 431.12 | 14 | 6092.1 | -56.42 | -0.93% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 187 | TXN | 02-12 14:30 | 02-12 14:45 | 229.19 | 227.92 | 32 | 7334.08 | -40.64 | -0.55% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.83 | ↓228.26 | -0.0372 | 2.9 | **LOSS** |
| 188 | AMAT | 02-18 14:30 | 02-18 14:45 | 365.95 | 363.39 | 28 | 10246.6 | -71.68 | -0.7% | 0.72R | 15m | market | early-reversal | trend | breakout | noisyHighBeta | noisy-high-beta | 67.51 | ↓364.1 | 0.2998 | 3.96 | **LOSS** |
| 189 | ORCL | 02-19 14:35 | 02-19 15:10 | 158.58 | 158.29 | 46 | 7294.68 | -13.34 | -0.18% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.17 | ↓157.25 | 0.2146 | 1.37 | **LOSS** |
| 190 | MU | 02-20 14:35 | 02-20 14:50 | 424.55 | 421.14 | 8 | 3396.4 | -27.28 | -0.8% | 0.78R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.72 | ↓423.17 | 1.6942 | 3.16 | **LOSS** |
| 191 | MRVL | 02-20 15:00 | 02-20 15:30 | 80.04 | 79.82 | 131 | 10485.24 | -28.82 | -0.27% | 0.2R | 30m | market | stagnation | trend | breakout | neutral | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 192 | META | 02-26 14:40 | 02-26 14:55 | 660.96 | 658.3 | 11 | 7270.56 | -29.26 | -0.4% | 0.49R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.73 | ↑655.58 | 1.4234 | 2.3 | **LOSS** |
| 193 | NET | 03-02 14:30 | 03-02 16:10 | 173.24 | 178.47 | 42 | 7276.08 | +219.66 | +3.02% | 2.72R | 100m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80.47 | ↑171.73 | 0.8311 | 1.33 | **WIN** |
| 194 | ORCL | 03-05 14:30 | 03-05 15:20 | 155.09 | 155.51 | 44 | 6823.96 | +18.48 | +0.27% | 0.28R | 50m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 62.3 | ↓154.33 | -0.0316 | 1.26 | **WIN** |
| 195 | COIN | 03-09 13:30 | 03-09 13:45 | 202.22 | 199.62 | 47 | 9504.34 | -122.2 | -1.29% | 0.97R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 74.6 | ↓200.15 | 0.598 | 5.11 | **LOSS** |
| 196 | TSLA | 03-11 13:30 | 03-11 14:30 | 409.04 | 410.91 | 20 | 8180.8 | +37.4 | +0.46% | 0.48R | 60m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 76.34 | ↑406.88 | 0.3911 | 6.75 | **WIN** |
| 197 | TXN | 03-11 13:35 | 03-11 13:50 | 201.48 | 199.86 | 36 | 7253.28 | -58.32 | -0.8% | 0.92R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 65.9 | ↓200.75 | 0.0463 | 1.25 | **LOSS** |
| 198 | INTC | 03-11 13:35 | 03-11 14:30 | 47.88 | 48.01 | 220 | 10533.6 | +28.6 | +0.27% | 0.2R | 55m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.46 | ↓47.48 | -0.0099 | 1.49 | **WIN** |
| 199 | NET | 03-12 13:30 | 03-12 13:45 | 214.98 | 211.63 | 34 | 7309.32 | -113.9 | -1.56% | 2.11R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 72.43 | ↓214.22 | 0.6638 | 1.11 | **LOSS** |
| 200 | ORCL | 03-12 13:35 | 03-12 13:50 | 166.9 | 164.59 | 63 | 10514.7 | -145.53 | -1.38% | 0.99R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.56 | ↓166.41 | 0.8985 | 2.79 | **LOSS** |
| 201 | AMAT | 03-16 13:45 | 03-16 14:15 | 349.16 | 348.88 | 21 | 7332.36 | -5.88 | -0.08% | 0.08R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 72.49 | ↑348.01 | 1.1876 | 1.58 | **LOSS** |
| 202 | ORCL | 03-17 13:45 | 03-17 14:00 | 158.24 | 157.17 | 46 | 7279.04 | -49.22 | -0.68% | 0.64R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↓157.05 | 0.5037 | 1.34 | **LOSS** |
| 203 | NET | 03-18 17:25 | 03-18 19:10 | 224.52 | 227.89 | 20 | 4490.4 | +67.4 | +1.5% | 1.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.32 | ↑216.19 | 2.18 | 2.39 | **WIN** |
| 204 | MRVL | 03-20 13:45 | 03-20 13:55 | 90.39 | 89 | 116 | 10485.24 | -161.24 | -1.54% | 1.19R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | false-breakout-risk | 64.94 | ↓89.71 | 0.4892 | 1.89 | **LOSS** |
| 205 | TSM | 03-23 13:35 | 03-23 15:20 | 336.61 | 342.45 | 14 | 4712.54 | +81.76 | +1.73% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.72 | ↑334.2 | 1.7114 | 2.4 | **WIN** |
| 206 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.41 | 383.84 | 10 | 3804.1 | +34.3 | +0.9% | 0.94R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 207 | TSLA | 03-25 13:30 | 03-25 13:55 | 393.36 | 391.69 | 22 | 8653.92 | -36.74 | -0.42% | 0.47R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.7 | ↓392.3 | 1.7852 | 4.78 | **LOSS** |
| 208 | TSM | 03-31 13:30 | 03-31 14:50 | 324 | 324.88 | 14 | 4536 | +12.32 | +0.27% | 0.31R | 80m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 89.5 | ↓323.05 | 1.3361 | 1.83 | **WIN** |
| 209 | TSLA | 03-31 13:30 | 03-31 14:00 | 364.5 | 363.19 | 11 | 4009.5 | -14.41 | -0.36% | 0.42R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 210 | NVO | 03-31 13:50 | 03-31 14:40 | 36 | 35.91 | 131 | 4716 | -11.79 | -0.25% | 0.36R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 94.15 | ↓35.63 | 0.1183 | 1.25 | **LOSS** |
| 211 | TXN | 03-31 16:40 | 03-31 16:55 | 193.15 | 191.89 | 38 | 7339.7 | -47.88 | -0.65% | 0.93R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.2 | ↑190.44 | 0.3564 | 1.62 | **LOSS** |
| 212 | TSLA | 03-31 16:40 | 03-31 17:25 | 370.66 | 369.87 | 10 | 3706.6 | -7.9 | -0.21% | 0.27R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 82.65 | ↑364.55 | 0.7892 | 2.76 | **LOSS** |
| 213 | META | 04-01 13:30 | 04-01 13:45 | 582.75 | 576.42 | 12 | 6993 | -75.96 | -1.09% | 1.25R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 214 | TSM | 04-01 13:35 | 04-01 13:50 | 347.67 | 344.75 | 13 | 4519.71 | -37.96 | -0.84% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.38 | ↓344.77 | 3.1011 | 1.17 | **LOSS** |
| 215 | NET | 04-06 13:30 | 04-06 13:45 | 212.54 | 210 | 27 | 5738.58 | -68.58 | -1.2% | 1.48R | 15m | market | early-reversal | trend | breakout | regimeInstability | regime-instability | 74.87 | ↓212.54 | 0.3892 | 1.59 | **LOSS** |
| 216 | AMAT | 04-09 13:35 | 04-09 14:15 | 391.59 | 391.17 | 12 | 4699.08 | -5.04 | -0.11% | 0.13R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87.18 | ↓389.79 | 0.6598 | 1.45 | **LOSS** |
| 217 | ORCL | 04-13 13:30 | 04-13 14:05 | 140.12 | 145.6 | 52 | 7286.24 | +284.96 | +3.91% | 4.71R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 72.73 | ↑140.04 | 0.0913 | 1.62 | **WIN** |
| 218 | AVGO | 04-15 13:30 | 04-15 15:15 | 392.94 | 392.8 | 11 | 4322.34 | -1.54 | -0.04% | 0.04R | 105m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 92.63 | ↓390.64 | 2.1484 | 2.72 | **LOSS** |
| 219 | NET | 04-21 13:50 | 04-21 14:20 | 209.52 | 208.46 | 22 | 4609.44 | -23.32 | -0.51% | 0.47R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.97 | ↑207.07 | 0.9869 | 1.29 | **LOSS** |
| 220 | TSM | 04-22 13:40 | 04-22 13:55 | 373.75 | 371.85 | 28 | 10465 | -53.2 | -0.51% | 0.59R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.36 | ↓372.02 | 0.9147 | 1.41 | **LOSS** |
| 221 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.48 | 374.92 | 23 | 8751.04 | -127.88 | -1.46% | 1.4R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |
| 222 | NVO | 04-24 13:50 | 04-24 14:55 | 40.75 | 40.68 | 116 | 4727 | -8.12 | -0.17% | 0.16R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 94.46 | ↓40.34 | 0.5791 | 2.69 | **LOSS** |

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

- ⚠️ **Profit factor 1.14 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.94R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T12:53:29.733Z*
