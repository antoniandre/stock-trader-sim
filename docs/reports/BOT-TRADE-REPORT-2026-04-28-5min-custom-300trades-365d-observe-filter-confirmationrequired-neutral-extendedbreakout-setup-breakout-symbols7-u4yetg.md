# Bot Trade Report — 137 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:43:51.305Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 7 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $2133.28 (+2.13%) over 137 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 137 |
| Win rate | 46.72% (64W / 73L) |
| Net P&L | $+2133.28 (+2.13%) |
| Gross profit | $4899.95 |
| Gross loss | $2766.67 |
| Profit factor | 1.77 |
| Avg win | $76.56 |
| Avg loss | $37.9 |
| Payoff ratio | 2.02:1 |
| Expectancy | $+15.57 / trade |
| Max drawdown | 0.54% |
| Sharpe ratio (ann.) | 3.65 |
| Trades / active day | 1.43 |
| Avg confidence | 93.11% |
| Avg trade duration | 80 min |
| Avg planned R:R | 2.76:1 |
| Avg risk ratio | 1.09R |
| Starting equity | $100,000 |
| Ending equity | $102,133.28 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+2133.28 | PASS |
| Win rate | 45-60% | 46.72% | PASS |
| Profit factor | >= 1.3 | 1.77 | PASS |
| Sharpe (ann.) | > 1.5 | 3.65 | PASS |
| R:R | 2:1 - 3:1 | 2.76:1 planned | PASS |
| Max drawdown | < 10% | 0.54% | PASS |
| Expectancy | positive | $+15.57 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 92 | 47.83% | $+1391.18 | $15.12 |
| Mid  10:30–11:30 | 38 | 42.11% | $+562.47 | $14.8 |
| Noon 11:30–13:00 | 2 | 50% | $-19.92 | $-9.96 |
| PM   13:00–14:00 | 5 | 60% | $+199.55 | $39.91 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ORCL | 21 | 12 | 57.14% | $+666.31 | $+31.73 | 3.01 | eligible |
| INTC | 26 | 12 | 46.15% | $+457.87 | $+17.61 | 1.85 | eligible |
| MU | 16 | 7 | 43.75% | $+312.95 | $+19.56 | 1.96 | eligible |
| NVDA | 17 | 7 | 41.18% | $+287.58 | $+16.92 | 1.86 | eligible |
| NET | 16 | 7 | 43.75% | $+215.46 | $+13.47 | 1.48 | eligible |
| TSM | 17 | 7 | 41.18% | $+118.4 | $+6.96 | 1.37 | eligible |
| TSLA | 24 | 12 | 50% | $+74.71 | $+3.11 | 1.16 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 137 | 64 | 46.72% | $+2133.28 | $+15.57 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 136 | 64 | 47.06% | $+2193.73 | $+16.13 |
| mixed | 1 | 0 | 0% | $-60.45 | $-60.45 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 128 | 58 | 45.31% | $+1646.02 | $+12.86 |
| neutral | 5 | 3 | 60% | $+342.76 | $+68.55 |
| extendedBreakout | 4 | 3 | 75% | $+144.5 | $+36.12 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 128 | 58 | 45.31% | $+1646.02 | $+12.86 |
| neutral | 5 | 3 | 60% | $+342.76 | $+68.55 |
| extended-chase | 4 | 3 | 75% | $+144.5 | $+36.12 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ORCL | 12 | 2.62 | $+23.07 | 9 | 3.43 | $+43.27 | 0.1% | 2.8 | promote |
| Symbol | MU | 12 | 1.95 | $+15.35 | 4 | 1.99 | $+32.2 | 0.1% | 1.76 | promote |
| Time slot | Open 9:30-10:30 | 75 | 1.57 | $+11.9 | 17 | 2.47 | $+29.31 | 0.2% | 2.05 | promote |
| Regime | trend | 81 | 1.72 | $+14.64 | 55 | 1.95 | $+18.32 | 0.39% | 1.57 | promote |
| Setup | breakout | 82 | 1.66 | $+13.73 | 55 | 1.95 | $+18.32 | 0.39% | 1.57 | promote |
| Behavior | confirmationRequired | 78 | 1.68 | $+13.85 | 50 | 1.57 | $+11.32 | 0.39% | 1.25 | promote |
| Trade state | confirmation-required | 78 | 1.68 | $+13.85 | 50 | 1.57 | $+11.32 | 0.39% | 1.25 | promote |
| Symbol | INTC | 19 | 1.99 | $+21.75 | 7 | 1.37 | $+6.38 | 0.1% | 1 | watch |
| Symbol | TSM | 11 | 1.5 | $+10.44 | 6 | 1.04 | $+0.59 | 0.05% | 0.76 | watch |
| Symbol | TSLA | 11 | 1.51 | $+9.52 | 13 | 0.88 | $-2.31 | 0.17% | 0.69 | watch |
| Symbol | NET | 9 | 1.01 | $+0.22 | 7 | 2.44 | $+30.5 | 0.11% | 2.04 | reject |
| Symbol | NVDA | 8 | 1.16 | $+3.73 | 9 | 2.74 | $+28.64 | 0.1% | 2.15 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1974.34 | 1.69 |
| +3 bps/side | $+1656.43 | 1.55 |
| +5 bps/side | $+1338.44 | 1.42 |
| +10 bps/side | $+543.63 | 1.15 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 43 |
| timeout | 31 |
| trailing-stop | 23 |
| stagnation | 13 |
| stop-loss | 12 |
| profit-target | 10 |
| breakeven-stop | 5 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INTC | 05-01 15:30 | 05-01 15:45 | 20.56 | 20.44 | 357 | 7339.92 | -42.84 | -0.58% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↑20.33 | 0.0628 | 1.45 | **LOSS** |
| 2 | ORCL | 05-02 13:35 | 05-02 14:40 | 150.38 | 150.57 | 45 | 6767.1 | +8.55 | +0.13% | 0.13R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 3 | INTC | 05-12 17:35 | 05-12 17:50 | 22.61 | 22.36 | 209 | 4725.49 | -52.25 | -1.11% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 4 | TSM | 05-13 13:30 | 05-13 15:15 | 189.9 | 192.59 | 38 | 7216.2 | +102.22 | +1.42% | 1.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 5 | MU | 05-13 13:35 | 05-13 15:20 | 94.54 | 95.73 | 62 | 5861.48 | +73.78 | +1.26% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.86 | ↑93.88 | 0.031 | 1.46 | **WIN** |
| 6 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.57 | 130.09 | 37 | 4683.09 | +130.24 | +2.78% | 3.97R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 7 | INTC | 05-13 14:05 | 05-13 14:20 | 22.89 | 22.63 | 206 | 4715.34 | -53.56 | -1.14% | 1.05R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 8 | TSLA | 05-13 17:30 | 05-13 19:15 | 331.88 | 336.37 | 12 | 3982.56 | +53.88 | +1.35% | 1.42R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 95.83 | ↑322.7 | 1.9893 | 4.95 | **WIN** |
| 9 | NET | 05-14 13:35 | 05-14 13:45 | 153.81 | 152.02 | 47 | 7229.07 | -84.13 | -1.16% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 10 | MU | 05-16 13:30 | 05-16 14:40 | 96.45 | 96.87 | 38 | 3665.1 | +15.96 | +0.44% | 0.63R | 70m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 84.53 | ↓96.22 | 0.1541 | 1.16 | **WIN** |
| 11 | NET | 05-16 13:35 | 05-16 15:20 | 155.2 | 156.46 | 47 | 7294.4 | +59.22 | +0.81% | 0.92R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 12 | TSLA | 05-20 13:35 | 05-20 13:45 | 354.23 | 345.68 | 11 | 3896.53 | -94.05 | -2.41% | 2.41R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 89.04 | ↓351.62 | 2.5553 | 3.4 | **LOSS** |
| 13 | NVDA | 05-22 14:00 | 05-22 14:15 | 133.8 | 132.97 | 55 | 7359 | -45.65 | -0.62% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 14 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.88 | 161.75 | 45 | 7194.6 | +84.15 | +1.17% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 15 | MU | 05-27 13:35 | 05-27 15:20 | 94.67 | 96.05 | 62 | 5869.54 | +85.56 | +1.46% | 1.55R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.36 | ↑94.59 | 0.1301 | 1.3 | **WIN** |
| 16 | TSM | 05-27 13:35 | 05-27 15:20 | 194.96 | 195.82 | 37 | 7213.52 | +31.82 | +0.44% | 0.63R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 17 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 18 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.92 | 141.49 | 52 | 7275.84 | +81.64 | +1.12% | 1.4R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 19 | TSM | 06-04 13:30 | 06-04 14:00 | 202.13 | 200.7 | 23 | 4648.99 | -32.89 | -0.71% | 1.01R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 20 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 42 | 7342.86 | +187.32 | +2.55% | 2.63R | 60m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 21 | MU | 06-09 14:00 | 06-09 15:25 | 110.89 | 110.78 | 53 | 5877.17 | -5.83 | -0.1% | 0.09R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 70.54 | ↓109.73 | 0.252 | 1.97 | **LOSS** |
| 22 | INTC | 06-10 17:00 | 06-10 17:50 | 21.33 | 22.18 | 221 | 4713.93 | +187.85 | +3.98% | 5.69R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 23 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.62 | 210.82 | 35 | 7161.7 | +217 | +3.03% | 2.59R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 24 | TSLA | 06-13 16:30 | 06-13 18:10 | 326.45 | 328.36 | 12 | 3917.4 | +22.92 | +0.59% | 0.51R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 74.81 | ↑318.34 | 1.9969 | 1.47 | **WIN** |
| 25 | MU | 06-16 13:30 | 06-16 15:15 | 118.6 | 120.66 | 49 | 5811.4 | +100.94 | +1.74% | 1.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 26 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 229 | 4726.56 | +32.06 | +0.68% | 0.66R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 27 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.89 | 323 | 6757.16 | -9.69 | -0.14% | 0.2R | 15m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 28 | MU | 06-17 13:45 | 06-17 14:40 | 122.02 | 122.06 | 44 | 5368.88 | +1.76 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 77.56 | ↓121.6 | 0.5096 | 2.14 | **WIN** |
| 29 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 347 | 7339.05 | +100.63 | +1.37% | 1.76R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 30 | INTC | 06-23 13:35 | 06-23 14:40 | 21.36 | 21.37 | 222 | 4741.92 | +2.22 | +0.05% | 0.07R | 65m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 31 | ORCL | 06-24 13:35 | 06-24 14:05 | 211.62 | 210.9 | 22 | 4655.64 | -15.84 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.77 | ↓210.26 | 1.0072 | 1.16 | **LOSS** |
| 32 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.33 | 339 | 7352.91 | +216.96 | +2.95% | 4.21R | 70m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 33 | NVDA | 06-24 13:40 | 06-24 13:55 | 147.74 | 147.03 | 32 | 4727.68 | -22.72 | -0.48% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 34 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 35 | INTC | 07-03 13:40 | 07-03 14:25 | 22.37 | 22.35 | 212 | 4742.44 | -4.24 | -0.09% | 0.11R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.69 | ↑22.22 | 0.0634 | 3.08 | **LOSS** |
| 36 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 25 | 4728 | +59.75 | +1.26% | 1.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 37 | TSM | 07-09 13:40 | 07-09 13:55 | 232.41 | 231.41 | 31 | 7204.71 | -31 | -0.43% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 38 | NET | 07-15 13:50 | 07-15 14:05 | 184.49 | 182.94 | 39 | 7195.11 | -60.45 | -0.84% | 0.83R | 15m | market | early-reversal | mixed | breakout | confirmationRequired | confirmation-required | 67.27 | ↓183.3 | -0.1892 | 1.28 | **LOSS** |
| 39 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.27 | 249.15 | 19 | 4736.13 | -2.28 | -0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 40 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 314 | 7366.44 | -94.2 | -1.28% | 1.54R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 41 | TSLA | 07-18 13:45 | 07-18 14:30 | 326.19 | 326.52 | 19 | 6197.61 | +6.27 | +0.1% | 0.1R | 45m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 81.78 | ↓324.69 | 1.3279 | 2.69 | **WIN** |
| 42 | NET | 07-21 13:45 | 07-21 14:15 | 199.29 | 198.86 | 36 | 7174.44 | -15.48 | -0.22% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.31 | ↑197.5 | 0.5778 | 1.49 | **LOSS** |
| 43 | INTC | 07-28 13:35 | 07-28 13:50 | 21.14 | 20.96 | 224 | 4735.36 | -40.32 | -0.85% | 1.21R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.23 | ↓21 | 0.1099 | 8.97 | **LOSS** |
| 44 | ORCL | 07-29 13:35 | 07-29 14:05 | 251.92 | 251.06 | 18 | 4534.56 | -15.48 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 45 | ORCL | 08-04 13:40 | 08-04 15:10 | 249.09 | 249.45 | 29 | 7223.61 | +10.44 | +0.14% | 0.18R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.12 | ↓247.91 | 0.662 | 1.26 | **WIN** |
| 46 | TSLA | 08-08 13:35 | 08-08 15:20 | 328.54 | 333.32 | 12 | 3942.48 | +57.36 | +1.45% | 1.67R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.85 | ↑325.67 | 1.855 | 2.23 | **WIN** |
| 47 | MU | 08-08 14:30 | 08-08 15:20 | 115.19 | 118.33 | 32 | 3686.08 | +100.48 | +2.73% | 2.65R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 87.57 | ↑113.77 | 0.7716 | 2.98 | **WIN** |
| 48 | TSLA | 08-13 13:40 | 08-13 13:55 | 347.82 | 345.79 | 17 | 5912.94 | -34.51 | -0.58% | 0.56R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.22 | ↓345.59 | 1.702 | 2.36 | **LOSS** |
| 49 | TSLA | 08-19 13:55 | 08-19 14:25 | 339.03 | 338.68 | 18 | 6102.54 | -6.3 | -0.1% | 0.11R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.24 | ↑335.97 | 0.5198 | 2.45 | **LOSS** |
| 50 | INTC | 08-22 13:35 | 08-22 15:05 | 24.04 | 24.38 | 197 | 4735.88 | +66.98 | +1.41% | 2.01R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 51 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 52 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 53 | ORCL | 08-28 13:35 | 08-28 15:20 | 238.57 | 239.96 | 19 | 4532.83 | +26.41 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.35 | ↑237.49 | 0.2539 | 2.24 | **WIN** |
| 54 | MU | 08-28 13:35 | 08-28 13:50 | 121.04 | 119.66 | 31 | 3752.24 | -42.78 | -1.14% | 1.34R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 55 | NET | 09-05 13:30 | 09-05 13:45 | 213.22 | 212.24 | 32 | 6823.04 | -31.36 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 56 | NVDA | 09-08 13:45 | 09-08 14:00 | 170.57 | 169.89 | 27 | 4605.39 | -18.36 | -0.4% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.03 | ↑169.5 | 0.8155 | 2.31 | **LOSS** |
| 57 | TSM | 09-10 13:30 | 09-10 14:00 | 259.53 | 259.34 | 26 | 6747.78 | -4.94 | -0.07% | 0.08R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.53 | ↓259.18 | 0.4067 | 4.21 | **LOSS** |
| 58 | INTC | 09-15 13:40 | 09-15 14:15 | 24.68 | 24.95 | 298 | 7354.64 | +80.46 | +1.09% | 1.18R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 59 | MU | 09-15 13:45 | 09-15 14:00 | 159.85 | 158.3 | 36 | 5754.6 | -55.8 | -0.97% | 0.9R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.15 | ↓158.51 | 0.3113 | 1.61 | **LOSS** |
| 60 | TSLA | 09-22 13:35 | 09-22 15:20 | 437 | 440.9 | 9 | 3933 | +35.1 | +0.89% | 0.95R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.06 | ↑434.75 | 1.9728 | 2.93 | **WIN** |
| 61 | INTC | 09-22 13:40 | 09-22 13:55 | 30.1 | 29.71 | 158 | 4755.8 | -61.62 | -1.3% | 1.13R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 62 | INTC | 09-23 13:35 | 09-23 14:05 | 29.52 | 29.65 | 161 | 4752.72 | +20.93 | +0.44% | 0.63R | 30m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 63 | INTC | 09-24 13:35 | 09-24 15:20 | 30.16 | 30.61 | 244 | 7359.04 | +109.8 | +1.49% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 64 | NVDA | 09-29 13:40 | 09-29 13:55 | 183.69 | 182.99 | 25 | 4592.25 | -17.5 | -0.38% | 0.41R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 97.23 | ↑182.52 | 1.2549 | 3.87 | **LOSS** |
| 65 | MU | 09-30 13:40 | 09-30 14:50 | 166.68 | 166.6 | 22 | 3666.96 | -1.76 | -0.05% | 0.06R | 70m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 84.51 | ↓165.13 | 0.4065 | 1.53 | **LOSS** |
| 66 | MU | 10-01 13:30 | 10-01 13:45 | 168.22 | 167.25 | 22 | 3700.84 | -21.34 | -0.58% | 0.59R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.7 | ↓167.47 | 0.4069 | 4.64 | **LOSS** |
| 67 | INTC | 10-01 13:35 | 10-01 13:50 | 34.11 | 33.68 | 139 | 4741.29 | -59.77 | -1.26% | 1.35R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 87.06 | ↓33.85 | 0.117 | 2.89 | **LOSS** |
| 68 | TSM | 10-01 13:35 | 10-01 15:20 | 282.11 | 285.15 | 16 | 4513.76 | +48.64 | +1.08% | 1.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.02 | ↑280.93 | 0.9152 | 2.11 | **WIN** |
| 69 | ORCL | 10-01 15:00 | 10-01 15:15 | 287.22 | 284.89 | 16 | 4595.52 | -37.28 | -0.81% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 93.51 | ↑281.15 | 1.2576 | 2.71 | **LOSS** |
| 70 | ORCL | 10-02 13:30 | 10-02 13:40 | 294.28 | 289.71 | 16 | 4708.48 | -73.12 | -1.55% | 2.01R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 88.9 | ↓293.08 | 1.125 | 1.97 | **LOSS** |
| 71 | ORCL | 10-03 13:35 | 10-03 13:50 | 293.6 | 291.89 | 16 | 4697.6 | -27.36 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.41 | ↓291.16 | 0.363 | 2.27 | **LOSS** |
| 72 | TSM | 10-03 13:40 | 10-03 13:55 | 294.25 | 291.68 | 25 | 7356.25 | -64.25 | -0.87% | 1.24R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.73 | ↓292.56 | 1.163 | 1.82 | **LOSS** |
| 73 | INTC | 10-07 13:35 | 10-07 14:00 | 37.41 | 37.48 | 197 | 7369.77 | +13.79 | +0.19% | 0.23R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 78.26 | ↑37.08 | 0.0821 | 8.05 | **WIN** |
| 74 | NVDA | 10-08 13:30 | 10-08 15:10 | 187.91 | 187.98 | 39 | 7328.49 | +2.73 | +0.04% | 0.06R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 75 | TSM | 10-08 13:35 | 10-08 15:20 | 299.05 | 304.18 | 24 | 7177.2 | +123.12 | +1.72% | 2.46R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 78.05 | ↑296.7 | 0.4771 | 1.16 | **WIN** |
| 76 | TSLA | 10-10 13:30 | 10-10 13:45 | 440.45 | 436.71 | 9 | 3964.05 | -33.66 | -0.85% | 1.15R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.43 | ↓438.87 | 1.7423 | 5.12 | **LOSS** |
| 77 | NET | 10-10 13:35 | 10-10 14:00 | 225.24 | 222.22 | 21 | 4730.04 | -63.42 | -1.34% | 1.91R | 25m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 78 | TSLA | 10-20 13:50 | 10-20 14:15 | 448.52 | 445.62 | 13 | 5830.76 | -37.7 | -0.65% | 0.59R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.08 | ↓444.69 | 1.9042 | 1.9 | **LOSS** |
| 79 | ORCL | 10-23 13:45 | 10-23 15:30 | 276.11 | 280.02 | 26 | 7178.86 | +101.66 | +1.42% | 1.84R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 64.33 | ↑273.99 | 0.4844 | 1.22 | **WIN** |
| 80 | TSM | 10-24 13:35 | 10-24 13:55 | 296.83 | 295.63 | 24 | 7123.92 | -28.8 | -0.4% | 0.53R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.27 | ↓296.09 | 0.2874 | 1.6 | **LOSS** |
| 81 | TSM | 10-27 13:30 | 10-27 13:45 | 299.44 | 296.56 | 24 | 7186.56 | -69.12 | -0.96% | 1.37R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 72.45 | ↓299.52 | 0.6186 | 5.14 | **LOSS** |
| 82 | MU | 10-27 13:40 | 10-27 13:55 | 222.44 | 219.87 | 26 | 5783.44 | -66.82 | -1.16% | 0.97R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 65.07 | ↓222.7 | 1.1579 | 1.21 | **LOSS** |
| 83 | NVDA | 10-28 13:30 | 10-28 13:45 | 195.4 | 193.42 | 24 | 4689.6 | -47.52 | -1.01% | 1.35R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 84 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.55 | 456.56 | 12 | 5382.6 | +96.12 | +1.79% | 1.86R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 85 | INTC | 11-19 14:45 | 11-19 15:50 | 34.91 | 35.15 | 211 | 7366.01 | +50.64 | +0.69% | 0.64R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 86 | TSLA | 11-20 14:40 | 11-20 15:55 | 422.86 | 423.38 | 9 | 3805.74 | +4.68 | +0.12% | 0.11R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 91.19 | ↓419.47 | 4.5271 | 3.38 | **WIN** |
| 87 | INTC | 11-26 14:30 | 11-26 15:00 | 36.61 | 36.51 | 201 | 7358.61 | -20.1 | -0.27% | 0.34R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 88 | TSM | 11-26 14:30 | 11-26 14:45 | 291.32 | 289.85 | 16 | 4661.12 | -23.52 | -0.5% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.6 | ↓290.6 | 1.8061 | 2.61 | **LOSS** |
| 89 | TSLA | 11-28 14:30 | 11-28 14:45 | 432.28 | 429.8 | 9 | 3890.52 | -22.32 | -0.57% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 90 | INTC | 11-28 14:35 | 11-28 15:10 | 37.91 | 38.54 | 180 | 6823.8 | +113.4 | +1.66% | 1.63R | 35m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↑37.82 | 0.1255 | 1.99 | **WIN** |
| 91 | INTC | 11-28 17:55 | 12-01 14:20 | 40.61 | 39.98 | 91 | 3695.51 | -57.33 | -1.55% | 1.44R | 4105m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 92 | MU | 12-02 14:35 | 12-02 14:50 | 243.91 | 240.73 | 24 | 5853.84 | -76.32 | -1.3% | 1.17R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 66.95 | ↓240.89 | 0.1426 | 1.7 | **LOSS** |
| 93 | NET | 12-02 14:35 | 12-02 15:30 | 203.23 | 204.16 | 36 | 7316.28 | +33.48 | +0.46% | 0.45R | 55m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 94 | TSM | 12-02 14:35 | 12-02 14:50 | 292.41 | 291.46 | 25 | 7310.25 | -23.75 | -0.32% | 0.42R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 95 | NVDA | 12-02 14:35 | 12-02 14:50 | 185.41 | 184.23 | 25 | 4635.25 | -29.5 | -0.64% | 0.65R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 96 | TSLA | 12-04 14:45 | 12-04 15:00 | 453.55 | 451.73 | 13 | 5896.15 | -23.66 | -0.4% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.3 | ↑449.98 | 1.1666 | 2.15 | **LOSS** |
| 97 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.14 | 447.07 | 14 | 6203.96 | +55.02 | +0.89% | 1.06R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 98 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 8 | 3623.28 | +12.32 | +0.34% | 0.49R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 99 | INTC | 12-12 14:35 | 12-12 14:55 | 39.96 | 39.8 | 184 | 7352.64 | -29.44 | -0.4% | 0.44R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.87 | ↑39.52 | 0.0079 | 1.14 | **LOSS** |
| 100 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.58 | 473.11 | 8 | 3828.64 | -43.76 | -1.14% | 0.97R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 101 | ORCL | 12-16 14:35 | 12-16 14:40 | 187.75 | 185.24 | 39 | 7322.25 | -97.89 | -1.34% | 1.3R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 69.13 | ↓187.16 | 0.0996 | 2.19 | **LOSS** |
| 102 | INTC | 12-19 14:35 | 12-19 15:10 | 37.09 | 37.04 | 199 | 7380.91 | -9.95 | -0.13% | 0.14R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 103 | TSLA | 12-22 14:45 | 12-22 15:00 | 497.96 | 490.53 | 8 | 3983.68 | -59.44 | -1.49% | 1.27R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.32 | ↓494.62 | 3.1468 | 2.38 | **LOSS** |
| 104 | NET | 12-22 14:50 | 12-22 15:25 | 202.83 | 202.36 | 23 | 4665.09 | -10.81 | -0.23% | 0.22R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 105 | MU | 12-30 14:30 | 12-30 14:45 | 297.68 | 295.43 | 12 | 3572.16 | -27 | -0.76% | 1.09R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.94 | ↓296.08 | 1.1151 | 3.77 | **LOSS** |
| 106 | INTC | 12-30 14:40 | 12-30 15:10 | 37.3 | 37.28 | 127 | 4737.1 | -2.54 | -0.05% | 0.06R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.32 | ↑37.09 | 0.1623 | 1.21 | **LOSS** |
| 107 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 108 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 109 | NVDA | 01-15 14:40 | 01-15 15:00 | 188.87 | 188.13 | 25 | 4721.75 | -18.5 | -0.39% | 0.41R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 110 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 14 | 6240.5 | -38.78 | -0.62% | 0.78R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 111 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 112 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 41 | 7178.28 | +41 | +0.57% | 0.53R | 105m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 113 | ORCL | 01-26 14:30 | 01-26 14:45 | 180.61 | 182.75 | 26 | 4695.86 | +55.64 | +1.18% | 1.62R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 88.75 | ↓179.85 | 0.4731 | 3.86 | **WIN** |
| 114 | TSM | 02-09 14:35 | 02-09 15:20 | 355.37 | 354.96 | 13 | 4619.81 | -5.33 | -0.12% | 0.16R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.51 | ↓351.96 | 1.0098 | 3.28 | **LOSS** |
| 115 | NVDA | 02-09 14:35 | 02-09 14:55 | 189.6 | 191.06 | 38 | 7204.8 | +55.48 | +0.77% | 0.75R | 20m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 116 | TSLA | 02-11 14:40 | 02-11 14:55 | 435.15 | 431.12 | 14 | 6092.1 | -56.42 | -0.93% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 117 | ORCL | 02-19 14:35 | 02-19 15:10 | 158.58 | 158.29 | 46 | 7294.68 | -13.34 | -0.18% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.17 | ↓157.25 | 0.2146 | 1.37 | **LOSS** |
| 118 | MU | 02-20 14:35 | 02-20 14:50 | 424.55 | 421.14 | 8 | 3396.4 | -27.28 | -0.8% | 0.78R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.72 | ↓423.17 | 1.6942 | 3.16 | **LOSS** |
| 119 | NET | 03-02 14:30 | 03-02 16:10 | 173.24 | 178.47 | 42 | 7276.08 | +219.66 | +3.02% | 2.72R | 100m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80.47 | ↑171.73 | 0.8311 | 1.33 | **WIN** |
| 120 | ORCL | 03-05 14:30 | 03-05 15:20 | 155.09 | 155.51 | 44 | 6823.96 | +18.48 | +0.27% | 0.28R | 50m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 62.3 | ↓154.33 | -0.0316 | 1.26 | **WIN** |
| 121 | NET | 03-12 13:30 | 03-12 13:45 | 214.98 | 211.63 | 34 | 7309.32 | -113.9 | -1.56% | 2.11R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 72.43 | ↓214.22 | 0.6638 | 1.11 | **LOSS** |
| 122 | NVDA | 03-13 13:40 | 03-13 13:55 | 185.64 | 184.79 | 39 | 7239.96 | -33.15 | -0.46% | 0.56R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.73 | ↓185.18 | 0.3317 | 1.13 | **LOSS** |
| 123 | ORCL | 03-17 13:45 | 03-17 14:00 | 158.24 | 157.17 | 46 | 7279.04 | -49.22 | -0.68% | 0.64R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↓157.05 | 0.5037 | 1.34 | **LOSS** |
| 124 | NET | 03-18 17:25 | 03-18 19:10 | 224.52 | 227.89 | 20 | 4490.4 | +67.4 | +1.5% | 1.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.32 | ↑216.19 | 2.18 | 2.39 | **WIN** |
| 125 | ORCL | 03-23 13:30 | 03-23 15:15 | 152.53 | 155.35 | 31 | 4728.43 | +87.42 | +1.85% | 1.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 82.64 | ↑152.18 | 0.3664 | 1.56 | **WIN** |
| 126 | TSM | 03-23 13:35 | 03-23 15:20 | 336.61 | 342.45 | 14 | 4712.54 | +81.76 | +1.73% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.72 | ↑334.2 | 1.7114 | 2.4 | **WIN** |
| 127 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.41 | 383.84 | 10 | 3804.1 | +34.3 | +0.9% | 0.94R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 128 | ORCL | 03-31 13:30 | 03-31 15:15 | 141.17 | 142.7 | 33 | 4658.61 | +50.49 | +1.08% | 1.15R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.8 | ↑140.82 | 0.3489 | 1.29 | **WIN** |
| 129 | TSM | 03-31 13:30 | 03-31 14:50 | 324 | 324.88 | 14 | 4536 | +12.32 | +0.27% | 0.31R | 80m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 89.5 | ↓323.05 | 1.3361 | 1.83 | **WIN** |
| 130 | TSLA | 03-31 13:30 | 03-31 14:00 | 364.5 | 363.19 | 11 | 4009.5 | -14.41 | -0.36% | 0.42R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 131 | TSM | 04-01 13:35 | 04-01 13:50 | 347.67 | 344.75 | 13 | 4519.71 | -37.96 | -0.84% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.38 | ↓344.77 | 3.1011 | 1.17 | **LOSS** |
| 132 | NVDA | 04-10 13:40 | 04-10 15:25 | 185.93 | 189.42 | 39 | 7251.27 | +136.11 | +1.88% | 2.69R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.43 | ↑185.58 | 0.4573 | 1.7 | **WIN** |
| 133 | ORCL | 04-13 13:30 | 04-13 14:05 | 140.12 | 145.6 | 52 | 7286.24 | +284.96 | +3.91% | 4.71R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 72.73 | ↑140.04 | 0.0913 | 1.62 | **WIN** |
| 134 | NVDA | 04-14 13:30 | 04-14 14:00 | 192.31 | 191.49 | 24 | 4615.44 | -19.68 | -0.43% | 0.61R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.34 | ↓192.17 | 0.6125 | 5.29 | **LOSS** |
| 135 | NVDA | 04-15 13:30 | 04-15 15:15 | 198.13 | 199.59 | 37 | 7330.81 | +54.02 | +0.74% | 1.06R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 69.07 | ↑197.63 | 0.3965 | 4.04 | **WIN** |
| 136 | NET | 04-21 13:50 | 04-21 14:20 | 209.52 | 208.46 | 22 | 4609.44 | -23.32 | -0.51% | 0.47R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.97 | ↑207.07 | 0.9869 | 1.29 | **LOSS** |
| 137 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ✅ **Profit factor 1.77** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.09R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:43:51.305Z*
