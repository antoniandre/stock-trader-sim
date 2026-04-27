# Bot Trade Report — 132 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T02:10:50.857Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1422.07 (-1.42%) over 132 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 132 |
| Win rate | 42.42% (56W / 76L) |
| Net P&L | $-1422.07 (-1.42%) |
| Gross profit | $2004.4 |
| Gross loss | $3426.47 |
| Profit factor | 0.58 |
| Avg win | $35.79 |
| Avg loss | $45.09 |
| Payoff ratio | 0.79:1 |
| Expectancy | $-10.77 / trade |
| Max drawdown | 1.7% |
| Sharpe ratio (ann.) | -3.54 |
| Trades / active day | 1.22 |
| Avg confidence | 91.86% |
| Avg trade duration | 13 min |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $98,577.93 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 65 | 46.15% | $-316.63 | $-4.87 |
| Mid  10:30–11:30 | 67 | 38.81% | $-1105.44 | $-16.5 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| MRVL | 132 | 56 | 42.42% | $-1422.07 | $-10.77 | 0.58 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 85 | 36 | 42.35% | $-757.13 | $-8.91 |
| trend | 47 | 20 | 42.55% | $-664.94 | $-14.15 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 33 | 18 | 54.55% | $+196.89 | $+5.97 |
| thinChop | 9 | 5 | 55.56% | $+9.56 | $+1.06 |
| falseBreakoutProne | 1 | 0 | 0% | $-0.62 | $-0.62 |
| sustainedSell | 1 | 0 | 0% | $-2.4 | $-2.4 |
| neutral | 88 | 33 | 37.5% | $-1625.5 | $-18.47 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | noisyHighBeta | 19 | 1.33 | $+4.63 | 14 | 2.22 | $+7.78 | 0.08% | 1.24 | promote |
| Behavior | thinChop | 6 | 1.86 | $+5.59 | 3 | 0.31 | $-8 | 0.03% | 0.2 | watch |
| Setup | mean-revert | 51 | 0.68 | $-7.26 | 34 | 0.55 | $-11.38 | 0.42% | 0.39 | reject |
| Time slot | Open 9:30-10:30 | 47 | 0.91 | $-1.49 | 18 | 0.57 | $-13.7 | 0.3% | 0.43 | reject |
| Symbol | MRVL | 79 | 0.7 | $-7.36 | 53 | 0.43 | $-15.86 | 0.84% | 0.3 | reject |
| Time slot | Mid 10:30-11:30 | 32 | 0.55 | $-15.98 | 35 | 0.35 | $-16.97 | 0.59% | 0.22 | reject |
| Setup | trend | 28 | 0.73 | $-7.54 | 19 | 0.26 | $-23.88 | 0.47% | 0.17 | reject |
| Behavior | neutral | 52 | 0.57 | $-13.46 | 36 | 0.32 | $-25.71 | 0.93% | 0.22 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1625.54 | 0.54 |
| +3 bps/side | $-2032.59 | 0.47 |
| +5 bps/side | $-2439.54 | 0.4 |
| +10 bps/side | $-3456.99 | 0.28 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stop-loss | 39 |
| trailing-stop | 38 |
| timeout | 17 |
| early-reversal | 14 |
| profit-target | 8 |
| stagnation | 7 |
| trim-profit-target | 6 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 04-29 13:33 | 04-29 13:55 | 58.48 | 58.44 | 167 | 9766.16 | -6.68 | -0.07% | 0.1R | 22m | market | trailing-stop | mixed | mean-revert | neutral | 50.83 | ↓58.64 | 0.0653 | 1.3 | **LOSS** |
| 2 | MRVL | 05-01 14:16 | 05-01 14:37 | 61.03 | 61.49 | 183 | 11168.49 | +84.18 | +0.75% | 1.14R | 21m | market | timeout | trend | trend | neutral | 70.28 | ↑59.89 | 0.2315 | 1.27 | **WIN** |
| 3 | MRVL | 05-01 15:22 | 05-01 15:34 | 61.75 | 61.38 | 181 | 11176.75 | -66.97 | -0.6% | 1.2R | 12m | market | stop-loss | trend | trend | neutral | 69.01 | ↑60.71 | 0.0908 | 1.7 | **LOSS** |
| 4 | MRVL | 05-02 14:20 | 05-02 14:36 | 62.56 | 62.43 | 148 | 9258.88 | -19.24 | -0.21% | 0.42R | 16m | market | stagnation | mixed | mean-revert | neutral | 41.75 | ↓62.74 | 0.0594 | 0.85 | **LOSS** |
| 5 | MRVL | 05-05 14:04 | 05-05 14:20 | 62.26 | 62.08 | 157 | 9774.82 | -28.26 | -0.29% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | neutral | 61.28 | ↑61.78 | 0.1594 | 1.79 | **LOSS** |
| 6 | MRVL | 05-07 14:05 | 05-07 14:17 | 55.06 | 55.73 | 46 | 2532.76 | +30.82 | +1.22% | 1.65R | 12m | market | profit-target | mixed | mean-revert | thinChop | 60.13 | ↑54.73 | -0.2348 | 1.12 | **WIN** |
| 7 | MRVL | 05-08 14:06 | 05-08 14:09 | 58.2 | 57.79 | 192 | 11174.4 | -78.72 | -0.7% | 1.35R | 3m | market | stop-loss | trend | trend | neutral | 74.47 | ↑57.48 | 0.2555 | 3.78 | **LOSS** |
| 8 | MRVL | 05-09 15:12 | 05-09 15:25 | 60.21 | 59.8 | 162 | 9754.02 | -66.42 | -0.68% | 1.36R | 13m | market | stop-loss | mixed | mean-revert | neutral | 50.3 | ↓60.02 | 0.125 | 1.33 | **LOSS** |
| 9 | MRVL | 05-13 14:00 | 05-13 14:21 | 66.16 | 66.32 | 169 | 11181.04 | +27.04 | +0.24% | 0.48R | 21m | market | timeout | trend | trend | neutral | 76.83 | ↑65.49 | 0.2373 | 1.34 | **WIN** |
| 10 | MRVL | 05-28 14:20 | 05-28 14:36 | 65.41 | 65.2 | 149 | 9746.09 | -31.29 | -0.32% | 0.64R | 16m | market | early-reversal | mixed | mean-revert | neutral | 34.98 | ↓65.32 | 0.0734 | 1.85 | **LOSS** |
| 11 | MRVL | 06-02 13:30 | 06-02 13:41 | 59.86 | 60.25 | 143 | 8559.98 | +55.77 | +0.65% | 0.76R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 53.02 | ↑59.89 | 0.0714 | 1.02 | **WIN** |
| 12 | MRVL | 06-02 14:23 | 06-02 14:41 | 60.88 | 61.22 | 91 | 11141.04 | +30.94 | +0.56% | 1.12R | 18m | market | trim-profit-target | trend | trend | neutral | 73.23 | ↑60.11 | 0.1455 | 1.54 | **WIN** |
| 13 | MRVL | 06-02 14:23 | 06-02 14:44 | 60.88 | 61.25 | 92 | 11141.04 | +34.04 | +0.61% | 1.22R | 21m | market | timeout | trend | trend | neutral | 73.23 | ↑60.11 | 0.1455 | 1.54 | **WIN** |
| 14 | MRVL | 06-03 14:07 | 06-03 14:28 | 61.92 | 62.3 | 42 | 2600.64 | +15.96 | +0.61% | 1.22R | 21m | market | timeout | mixed | mean-revert | thinChop | 47.52 | ↑61.79 | 0.0891 | 1.39 | **WIN** |
| 15 | MRVL | 06-03 14:47 | 06-03 15:04 | 62.81 | 63.24 | 89 | 11180.18 | +38.27 | +0.68% | 1.36R | 17m | market | trim-profit-target | trend | trend | neutral | 79.56 | ↑62.06 | 0.1365 | 4.48 | **WIN** |
| 16 | MRVL | 06-03 14:47 | 06-03 15:06 | 62.81 | 63.09 | 89 | 11180.18 | +24.92 | +0.45% | 0.9R | 19m | market | trailing-stop | trend | trend | neutral | 79.56 | ↑62.06 | 0.1365 | 4.48 | **WIN** |
| 17 | MRVL | 06-04 13:30 | 06-04 13:43 | 63.04 | 63.29 | 104 | 6556.16 | +26 | +0.4% | 0.8R | 13m | market | trailing-stop | bearish | mean-revert | neutral | 31.45 | ↑63.07 | 0.2008 | 1.07 | **WIN** |
| 18 | MRVL | 06-05 14:49 | 06-05 15:10 | 66.35 | 66.83 | 67 | 4445.45 | +32.16 | +0.72% | 1.11R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 61.26 | ↑66.17 | 0.1393 | 0.97 | **WIN** |
| 19 | MRVL | 06-06 14:08 | 06-06 14:26 | 68.43 | 68.37 | 163 | 11154.09 | -9.78 | -0.09% | 0.12R | 18m | market | stagnation | trend | trend | neutral | 62.33 | ↑67.4 | 0.3039 | 1.15 | **LOSS** |
| 20 | MRVL | 06-06 14:49 | 06-06 14:59 | 69.34 | 69.33 | 161 | 11163.74 | -1.61 | -0.01% | 0.02R | 10m | market | trailing-stop | trend | trend | neutral | 77.05 | ↑68 | 0.2204 | 1.05 | **LOSS** |
| 21 | MRVL | 06-09 14:16 | 06-09 14:37 | 70.96 | 71.11 | 86 | 6102.56 | +12.9 | +0.21% | 0.42R | 21m | market | timeout | trend | trend | noisyHighBeta | 66.52 | ↑70.08 | 0.1907 | 1.04 | **WIN** |
| 22 | MRVL | 06-16 14:03 | 06-16 14:23 | 70.29 | 70.66 | 159 | 11176.11 | +58.83 | +0.53% | 0.87R | 20m | market | trailing-stop | trend | trend | neutral | 75.07 | ↑68.89 | 0.4228 | 1.26 | **WIN** |
| 23 | MRVL | 06-18 14:01 | 06-18 14:12 | 76.08 | 76.31 | 112 | 8520.96 | +25.76 | +0.3% | 0.2R | 11m | market | trailing-stop | bearish | mean-revert | neutral | 50.49 | ↑75.47 | 0.622 | 1.1 | **WIN** |
| 24 | MRVL | 06-18 14:33 | 06-18 14:40 | 76.9 | 77.19 | 127 | 9766.3 | +36.83 | +0.38% | 0.55R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 64.12 | ↑75.78 | 0.2556 | 1.47 | **WIN** |
| 25 | MRVL | 06-20 13:34 | 06-20 13:37 | 75.38 | 75.52 | 110 | 8291.8 | +15.4 | +0.19% | 0.16R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 53.4 | ↓75.96 | 0.1218 | 1.02 | **WIN** |
| 26 | MRVL | 06-24 14:33 | 06-24 14:54 | 73.98 | 74.48 | 83 | 6140.34 | +41.5 | +0.68% | 1.33R | 21m | market | timeout | trend | trend | noisyHighBeta | 70.06 | ↑72.99 | 0.1525 | 1.3 | **WIN** |
| 27 | MRVL | 06-24 15:07 | 06-24 15:23 | 75.02 | 74.63 | 149 | 11177.98 | -58.11 | -0.52% | 1.04R | 16m | market | early-reversal | trend | trend | neutral | 70.28 | ↑73.25 | 0.2267 | 1.65 | **LOSS** |
| 28 | MRVL | 06-25 13:45 | 06-25 13:51 | 75.7 | 75.16 | 71 | 5374.7 | -38.34 | -0.71% | 0.85R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 42.86 | ↓75.72 | 0.1898 | 1.2 | **LOSS** |
| 29 | MRVL | 06-26 14:25 | 06-26 14:37 | 79.34 | 79.46 | 68 | 5395.12 | +8.16 | +0.15% | 0.23R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 55.22 | ↑79.23 | 0.2335 | 2.44 | **WIN** |
| 30 | MRVL | 07-17 14:16 | 07-17 14:37 | 71.13 | 71.51 | 107 | 7610.91 | +40.66 | +0.53% | 1.06R | 21m | market | timeout | bearish | mean-revert | neutral | 33.66 | ↑70.92 | 0.0396 | 1.18 | **WIN** |
| 31 | MRVL | 07-18 14:50 | 07-18 14:59 | 73.35 | 72.84 | 153 | 11222.55 | -78.03 | -0.7% | 1.4R | 9m | market | stop-loss | trend | trend | neutral | 69.18 | ↑72.26 | 0.1886 | 2.94 | **LOSS** |
| 32 | MRVL | 07-21 14:04 | 07-21 14:20 | 72.92 | 72.87 | 48 | 3500.16 | -2.4 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | sustainedSell | 30.2 | ↓72.9 | -0.0984 | 1.83 | **LOSS** |
| 33 | MRVL | 07-22 15:02 | 07-22 15:23 | 71.81 | 72.07 | 124 | 8904.44 | +32.24 | +0.36% | 0.72R | 21m | market | timeout | mixed | mean-revert | neutral | 48.57 | ↑71.46 | 0.0788 | 1.94 | **WIN** |
| 34 | MRVL | 07-25 14:09 | 07-25 14:25 | 74.37 | 74.23 | 150 | 11155.5 | -21 | -0.19% | 0.38R | 16m | market | stagnation | trend | trend | neutral | 71.37 | ↑73.7 | 0.0963 | 4.06 | **LOSS** |
| 35 | MRVL | 07-29 14:08 | 07-29 14:25 | 78.31 | 78.12 | 143 | 11198.33 | -27.17 | -0.24% | 0.48R | 17m | market | early-reversal | trend | trend | neutral | 75.87 | ↑77.58 | 0.256 | 1.2 | **LOSS** |
| 36 | MRVL | 07-30 13:56 | 07-30 14:12 | 83.76 | 83.36 | 101 | 8459.76 | -40.4 | -0.48% | 0.36R | 16m | market | early-reversal | mixed | mean-revert | neutral | 49.49 | ↓83.96 | 0.6195 | 1 | **LOSS** |
| 37 | MRVL | 07-31 14:41 | 07-31 14:50 | 82.4 | 81.67 | 118 | 9723.2 | -86.14 | -0.89% | 1.78R | 9m | market | stop-loss | mixed | mean-revert | neutral | 48.47 | ↓82.32 | 0.0754 | 1.34 | **LOSS** |
| 38 | MRVL | 08-01 14:40 | 08-01 14:53 | 75.61 | 75.07 | 129 | 9753.69 | -69.66 | -0.71% | 1.39R | 13m | market | stop-loss | mixed | mean-revert | neutral | 56.7 | ↑74.77 | 0.27 | 1.7 | **LOSS** |
| 39 | MRVL | 08-05 13:50 | 08-05 14:04 | 77.55 | 77.09 | 126 | 9771.3 | -57.96 | -0.59% | 1.07R | 14m | market | stop-loss | mixed | mean-revert | neutral | 73.08 | ↓77.23 | 0.3 | 1.36 | **LOSS** |
| 40 | MRVL | 08-07 14:02 | 08-07 14:14 | 76.82 | 76.28 | 127 | 9756.14 | -68.58 | -0.7% | 1.4R | 12m | market | stop-loss | mixed | mean-revert | neutral | 53.65 | ↓76.85 | 0.159 | 1.86 | **LOSS** |
| 41 | MRVL | 08-08 13:34 | 08-08 13:49 | 75.73 | 76.65 | 122 | 9239.06 | +112.24 | +1.21% | 2.42R | 15m | market | profit-target | mixed | mean-revert | neutral | 51.4 | ↑75.85 | 0.0762 | 1.74 | **WIN** |
| 42 | MRVL | 08-13 13:56 | 08-13 14:10 | 78.84 | 79.1 | 32 | 2522.88 | +8.32 | +0.33% | 0.62R | 14m | market | trailing-stop | mixed | mean-revert | thinChop | 38.8 | ↑79.03 | 0.147 | 1.47 | **WIN** |
| 43 | MRVL | 08-13 14:14 | 08-13 14:26 | 79.93 | 79.44 | 140 | 11190.2 | -68.6 | -0.61% | 1.03R | 12m | market | stop-loss | trend | trend | neutral | 72.24 | ↑79.21 | 0.2012 | 2.77 | **LOSS** |
| 44 | MRVL | 08-22 14:19 | 08-22 14:22 | 74.03 | 73.23 | 132 | 9771.96 | -105.6 | -1.08% | 1.64R | 3m | market | stop-loss | mixed | mean-revert | neutral | 60.79 | ↑73.06 | 0.4897 | 1.04 | **LOSS** |
| 45 | MRVL | 08-29 14:04 | 08-29 14:22 | 64.95 | 64.72 | 150 | 9742.5 | -34.5 | -0.35% | 0.33R | 18m | market | stagnation | mixed | mean-revert | neutral | 58.24 | ↑64.36 | -0.1528 | 1.3 | **LOSS** |
| 46 | MRVL | 09-05 13:45 | 09-05 13:50 | 64.1 | 64.18 | 75 | 4807.5 | +6 | +0.12% | 0.1R | 5m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 47.17 | ↓64.15 | 0.0305 | 0.88 | **WIN** |
| 47 | MRVL | 09-10 13:40 | 09-10 13:54 | 67.8 | 67.28 | 144 | 9763.2 | -74.88 | -0.77% | 0.72R | 14m | market | stop-loss | mixed | mean-revert | neutral | 64.89 | ↓68.04 | 0.303 | 0.95 | **LOSS** |
| 48 | MRVL | 09-11 14:10 | 09-11 14:31 | 67.64 | 67.7 | 142 | 9604.88 | +8.52 | +0.09% | 0.18R | 21m | market | timeout | mixed | mean-revert | neutral | 36.23 | ↑67.6 | 0.0866 | 1.5 | **WIN** |
| 49 | MRVL | 09-15 14:02 | 09-15 14:23 | 67.2 | 67.61 | 43 | 2889.6 | +17.63 | +0.61% | 1.22R | 21m | market | timeout | mixed | mean-revert | thinChop | 61.31 | ↑66.98 | 0.0973 | 0.87 | **WIN** |
| 50 | MRVL | 09-19 13:56 | 09-19 14:01 | 74.85 | 74.4 | 33 | 2470.05 | -14.85 | -0.6% | 1.11R | 5m | market | stop-loss | mixed | mean-revert | thinChop | 43.08 | ↓74.96 | 0.0937 | 1.71 | **LOSS** |
| 51 | MRVL | 09-23 14:09 | 09-23 14:16 | 75.74 | 75.76 | 147 | 11133.78 | +2.94 | +0.03% | 0.06R | 7m | market | breakeven-stop | trend | trend | neutral | 77.02 | ↑74.91 | 0.1876 | 2.45 | **WIN** |
| 52 | MRVL | 09-24 13:52 | 09-24 14:01 | 77.57 | 77.56 | 114 | 8842.98 | -1.14 | -0.01% | 0.01R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 62.45 | ↓77.51 | 0.5868 | 1.17 | **LOSS** |
| 53 | MRVL | 09-26 14:03 | 09-26 14:06 | 83.12 | 82.22 | 53 | 4405.36 | -47.7 | -1.08% | 1.26R | 3m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 41.2 | ↓82.85 | 0.0926 | 1.5 | **LOSS** |
| 54 | MRVL | 09-29 14:32 | 09-29 14:42 | 84.29 | 83.62 | 42 | 3540.18 | -28.14 | -0.79% | 1.58R | 10m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 28.44 | ↓84.29 | 0.0396 | 1.57 | **LOSS** |
| 55 | MRVL | 09-30 14:09 | 09-30 14:27 | 83.45 | 83.44 | 62 | 5173.9 | -0.62 | -0.01% | 0.02R | 18m | market | trailing-stop | bearish | mean-revert | falseBreakoutProne | 54.48 | ↑83.08 | 0.2288 | 1.14 | **LOSS** |
| 56 | MRVL | 10-01 14:17 | 10-01 14:38 | 81.95 | 82.61 | 60 | 4917 | +39.6 | +0.81% | 1.45R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 29.34 | ↑81.96 | 0.0233 | 1.54 | **WIN** |
| 57 | MRVL | 10-02 14:02 | 10-02 14:14 | 85.9 | 86.09 | 113 | 9706.7 | +21.47 | +0.22% | 0.32R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 70.85 | ↑85.47 | 0.3206 | 1.64 | **WIN** |
| 58 | MRVL | 10-02 14:19 | 10-02 14:32 | 85.94 | 85.86 | 113 | 9711.22 | -9.04 | -0.09% | 0.15R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 47.86 | ↑85.65 | 0.1727 | 0.9 | **LOSS** |
| 59 | MRVL | 10-07 13:49 | 10-07 13:53 | 90.14 | 89.38 | 32 | 2884.48 | -24.32 | -0.84% | 1.11R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 57.85 | ↓90.01 | 0.3641 | 1.41 | **LOSS** |
| 60 | MRVL | 10-10 14:42 | 10-10 14:58 | 93.45 | 92.15 | 104 | 9718.8 | -135.2 | -1.39% | 2.48R | 16m | market | stop-loss | mixed | mean-revert | neutral | 45.21 | ↓93.32 | 0.1342 | 1.11 | **LOSS** |
| 61 | MRVL | 10-13 14:42 | 10-13 14:58 | 87.93 | 87.7 | 60 | 5275.8 | -13.8 | -0.26% | 0.42R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 64.53 | ↓88.16 | 0.1825 | 1.78 | **LOSS** |
| 62 | MRVL | 10-16 14:26 | 10-16 14:46 | 89.73 | 90.29 | 54 | 9690.84 | +30.24 | +0.62% | 1.24R | 20m | market | trim-profit-target | mixed | mean-revert | neutral | 57.96 | ↑89.86 | 0.0928 | 1.32 | **WIN** |
| 63 | MRVL | 10-16 14:26 | 10-16 14:47 | 89.73 | 90.24 | 54 | 9690.84 | +27.54 | +0.57% | 1.14R | 21m | market | timeout | mixed | mean-revert | neutral | 57.96 | ↑89.86 | 0.0928 | 1.32 | **WIN** |
| 64 | MRVL | 10-17 14:32 | 10-17 14:36 | 88.29 | 87.74 | 60 | 5297.4 | -33 | -0.62% | 1.24R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 51.67 | ↓87.74 | 0.1891 | 1.58 | **LOSS** |
| 65 | MRVL | 10-31 14:37 | 10-31 14:50 | 96.35 | 97.08 | 57 | 11080.25 | +41.61 | +0.76% | 1.46R | 13m | market | trim-profit-target | trend | trend | neutral | 77.61 | ↑94.56 | 0.2846 | 1.99 | **WIN** |
| 66 | MRVL | 10-31 14:37 | 10-31 14:53 | 96.35 | 96.71 | 58 | 11080.25 | +20.88 | +0.37% | 0.71R | 16m | market | trailing-stop | trend | trend | neutral | 77.61 | ↑94.56 | 0.2846 | 1.99 | **WIN** |
| 67 | MRVL | 11-03 14:30 | 11-03 14:35 | 94.77 | 93.13 | 117 | 11088.09 | -191.88 | -1.73% | 1.47R | 5m | market | stop-loss | trend | trend | neutral | 60.8 | ↓94.24 | 0.1169 | 1.05 | **LOSS** |
| 68 | MRVL | 11-05 14:48 | 11-05 14:55 | 90.41 | 91.56 | 123 | 11120.43 | +141.45 | +1.27% | 1.95R | 7m | market | profit-target | trend | trend | neutral | 71.57 | ↑89.45 | 0.4223 | 1.01 | **WIN** |
| 69 | MRVL | 11-05 15:28 | 11-05 15:49 | 92.61 | 92.66 | 120 | 11113.2 | +6 | +0.05% | 0.1R | 21m | market | trailing-stop | trend | trend | neutral | 70.6 | ↑91.2 | 0.233 | 1.13 | **WIN** |
| 70 | MRVL | 11-12 14:47 | 11-12 15:05 | 90.44 | 91.98 | 59 | 5335.96 | +90.86 | +1.7% | 3.09R | 18m | market | profit-target | mixed | mean-revert | noisyHighBeta | 35.29 | ↑90.73 | 0.2427 | 1.66 | **WIN** |
| 71 | MRVL | 11-13 15:04 | 11-13 15:15 | 86.38 | 88.25 | 54 | 4664.52 | +100.98 | +2.16% | 2.37R | 11m | market | profit-target | mixed | mean-revert | noisyHighBeta | 53.15 | ↑86.12 | -0.0061 | 0.86 | **WIN** |
| 72 | MRVL | 11-13 15:18 | 11-13 15:34 | 87.88 | 87.33 | 55 | 4833.4 | -30.25 | -0.63% | 0.78R | 16m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 76.41 | ↑86.51 | 0.3913 | 1.39 | **LOSS** |
| 73 | MRVL | 11-14 15:07 | 11-14 15:22 | 87.79 | 87.14 | 111 | 9744.69 | -72.15 | -0.74% | 0.96R | 15m | market | stop-loss | mixed | mean-revert | neutral | 50 | ↑86.39 | 0.3818 | 0.87 | **LOSS** |
| 74 | MRVL | 11-19 14:54 | 11-19 15:04 | 80.91 | 81.07 | 75 | 6068.25 | +12 | +0.2% | 0.33R | 10m | market | trailing-stop | trend | trend | noisyHighBeta | 72.1 | ↑79.98 | 0.3666 | 1.46 | **WIN** |
| 75 | MRVL | 11-20 14:36 | 11-20 14:44 | 84.26 | 83.24 | 132 | 11122.32 | -134.64 | -1.21% | 0.75R | 8m | market | stop-loss | trend | trend | neutral | 75.51 | ↓83.67 | 0.6807 | 1.43 | **LOSS** |
| 76 | MRVL | 11-24 15:00 | 11-24 15:16 | 80.72 | 80.57 | 75 | 6054 | -11.25 | -0.19% | 0.25R | 16m | market | stagnation | trend | trend | noisyHighBeta | 63.62 | ↑79.51 | 0.3889 | 1.01 | **LOSS** |
| 77 | MRVL | 12-02 14:58 | 12-02 15:07 | 93.79 | 93.16 | 65 | 6096.35 | -40.95 | -0.67% | 0.85R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 68.69 | ↓93.14 | 0.2725 | 1.88 | **LOSS** |
| 78 | MRVL | 12-05 14:41 | 12-05 14:57 | 100.97 | 100.49 | 40 | 4038.8 | -19.2 | -0.48% | 0.32R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 71.31 | ↓101.7 | 1.0155 | 0.91 | **LOSS** |
| 79 | MRVL | 12-10 14:48 | 12-10 15:09 | 91.3 | 91.41 | 58 | 5295.4 | +6.38 | +0.12% | 0.13R | 21m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 44.1 | ↓91.57 | 0.4356 | 1.23 | **WIN** |
| 80 | MRVL | 12-17 15:24 | 12-17 15:31 | 86.99 | 86.19 | 128 | 11134.72 | -102.4 | -0.92% | 1.56R | 7m | market | stop-loss | trend | trend | neutral | 77.78 | ↑86.12 | 0.2311 | 1.9 | **LOSS** |
| 81 | MRVL | 12-23 14:54 | 12-23 15:02 | 85.53 | 84.99 | 113 | 9664.89 | -61.02 | -0.63% | 1.26R | 8m | market | stop-loss | mixed | mean-revert | neutral | 53.06 | ↓85.63 | 0.1652 | 1.52 | **LOSS** |
| 82 | MRVL | 12-30 14:48 | 12-30 15:01 | 87.15 | 87.52 | 127 | 11068.05 | +46.99 | +0.42% | 0.74R | 13m | market | trailing-stop | trend | trend | neutral | 66.59 | ↑86.36 | 0.1966 | 1.2 | **WIN** |
| 83 | MRVL | 01-02 14:53 | 01-02 15:05 | 88.55 | 89.21 | 54 | 9651.95 | +35.64 | +0.75% | 1.01R | 12m | market | trim-profit-target | mixed | mean-revert | neutral | 57.42 | ↑88.32 | 0.5866 | 0.92 | **WIN** |
| 84 | MRVL | 01-02 14:53 | 01-02 15:14 | 88.55 | 88.8 | 55 | 9651.95 | +13.75 | +0.28% | 0.38R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 57.42 | ↑88.32 | 0.5866 | 0.92 | **WIN** |
| 85 | MRVL | 01-05 14:51 | 01-05 14:54 | 91.48 | 91.42 | 64 | 5854.72 | -3.84 | -0.07% | 0.08R | 3m | market | trailing-stop | bearish | mean-revert | neutral | 30.85 | ↓92.61 | 0.2876 | 1.54 | **LOSS** |
| 86 | MRVL | 01-09 15:29 | 01-09 15:36 | 83.7 | 83.69 | 132 | 11048.4 | -1.32 | -0.01% | 0.02R | 7m | market | breakeven-stop | trend | trend | neutral | 74.14 | ↑83.12 | 0.1741 | 1.52 | **LOSS** |
| 87 | MRVL | 01-13 15:03 | 01-13 15:19 | 83.48 | 83.17 | 101 | 8431.48 | -31.31 | -0.37% | 0.74R | 16m | market | early-reversal | bearish | mean-revert | neutral | 30.94 | ↓83.62 | 0.0685 | 2.03 | **LOSS** |
| 88 | MRVL | 01-15 15:09 | 01-15 15:21 | 82.88 | 82.2 | 134 | 11105.92 | -91.12 | -0.82% | 1.41R | 12m | market | stop-loss | trend | trend | neutral | 61.41 | ↑81.62 | 0.2734 | 1.29 | **LOSS** |
| 89 | MRVL | 01-16 14:56 | 01-16 15:00 | 81.91 | 81.46 | 102 | 8354.82 | -45.9 | -0.55% | 1.08R | 4m | market | stop-loss | mixed | mean-revert | neutral | 58.81 | ↓81.87 | 0.2651 | 1.35 | **LOSS** |
| 90 | MRVL | 01-21 14:57 | 01-21 15:13 | 81.94 | 81.84 | 135 | 11061.9 | -13.5 | -0.12% | 0.2R | 16m | market | stagnation | trend | trend | neutral | 66.03 | ↑81.29 | 0.2733 | 1.8 | **LOSS** |
| 91 | MRVL | 01-22 15:29 | 01-22 15:50 | 83.97 | 83.96 | 115 | 9656.55 | -1.15 | -0.01% | 0.02R | 21m | market | timeout | mixed | mean-revert | neutral | 55.36 | ↓84.52 | 0.1329 | 1.77 | **LOSS** |
| 92 | MRVL | 02-03 14:33 | 02-03 14:39 | 78.19 | 77.48 | 87 | 6802.53 | -61.77 | -0.91% | 1.6R | 6m | market | stop-loss | mixed | mean-revert | neutral | 53.64 | ↓78.52 | 0.0605 | 1.1 | **LOSS** |
| 93 | MRVL | 02-09 15:08 | 02-09 15:12 | 81.08 | 80.54 | 136 | 11026.88 | -73.44 | -0.67% | 1.2R | 4m | market | stop-loss | trend | trend | neutral | 67.23 | ↑79.81 | 0.1968 | 1.64 | **LOSS** |
| 94 | MRVL | 02-10 14:35 | 02-10 14:38 | 83.26 | 82.58 | 73 | 6077.98 | -49.64 | -0.82% | 1.39R | 3m | market | stop-loss | trend | trend | noisyHighBeta | 72.21 | ↓82.9 | 0.1435 | 1.73 | **LOSS** |
| 95 | MRVL | 02-13 14:52 | 02-13 14:56 | 78.51 | 78.75 | 123 | 9656.73 | +29.52 | +0.31% | 0.28R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 45.91 | ↑78.55 | 0.1376 | 1.64 | **WIN** |
| 96 | MRVL | 02-19 15:00 | 02-19 15:14 | 78.56 | 78.86 | 36 | 2828.16 | +10.8 | +0.38% | 0.76R | 14m | market | trailing-stop | mixed | mean-revert | thinChop | 61.65 | ↑78.33 | 0.0763 | 0.86 | **WIN** |
| 97 | MRVL | 02-20 15:09 | 02-20 15:16 | 80.06 | 79.3 | 138 | 11048.28 | -104.88 | -0.95% | 1.36R | 7m | market | stop-loss | trend | trend | neutral | 73.65 | ↓79.28 | 0.2374 | 1.86 | **LOSS** |
| 98 | MRVL | 02-25 14:58 | 02-25 15:14 | 80.3 | 80.02 | 137 | 11001.1 | -38.36 | -0.35% | 0.7R | 16m | market | early-reversal | trend | trend | neutral | 71.71 | ↓79.82 | 0.3352 | 5.17 | **LOSS** |
| 99 | MRVL | 02-27 14:53 | 02-27 15:14 | 79.23 | 79.86 | 120 | 9507.6 | +75.6 | +0.8% | 0.95R | 21m | market | timeout | mixed | mean-revert | neutral | 42.37 | ↑79.46 | 0.0472 | 1.15 | **WIN** |
| 100 | MRVL | 03-06 14:51 | 03-06 14:55 | 88.19 | 87.77 | 69 | 6085.11 | -28.98 | -0.48% | 0.31R | 4m | market | trailing-stop | trend | trend | noisyHighBeta | 64.45 | ↑87 | 1.6823 | 1.59 | **LOSS** |
| 101 | MRVL | 03-06 15:13 | 03-06 15:20 | 88.65 | 88.77 | 68 | 6028.2 | +8.16 | +0.14% | 0.15R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 75.44 | ↑87.36 | 0.4819 | 1.69 | **WIN** |
| 102 | MRVL | 03-09 14:55 | 03-09 15:07 | 86.96 | 86.95 | 61 | 5304.56 | -0.61 | -0.01% | 0.02R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 54.94 | ↑86.11 | 0.184 | 2.31 | **LOSS** |
| 103 | MRVL | 03-10 14:47 | 03-10 15:00 | 92.8 | 93.91 | 56 | 5196.8 | +62.16 | +1.2% | 2.4R | 13m | market | profit-target | mixed | mean-revert | noisyHighBeta | 55.75 | ↑93.56 | 0.0398 | 2.3 | **WIN** |
| 104 | MRVL | 03-10 15:27 | 03-10 15:31 | 94.27 | 93.72 | 30 | 2828.1 | -16.5 | -0.58% | 1.16R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 58.57 | ↑93.66 | 0.2268 | 0.87 | **LOSS** |
| 105 | MRVL | 03-11 14:02 | 03-11 14:18 | 94.17 | 93.56 | 30 | 2825.1 | -18.3 | -0.65% | 1.3R | 16m | market | stop-loss | mixed | mean-revert | thinChop | 39.5 | ↓94.32 | 0.1116 | 1.1 | **LOSS** |
| 106 | MRVL | 03-16 15:13 | 03-16 15:34 | 92.11 | 92.34 | 66 | 6079.26 | +15.18 | +0.25% | 0.5R | 21m | market | timeout | trend | trend | noisyHighBeta | 77.04 | ↑90.84 | 0.219 | 2.2 | **WIN** |
| 107 | MRVL | 03-20 15:02 | 03-20 15:18 | 89.53 | 89.32 | 108 | 9669.24 | -22.68 | -0.23% | 0.3R | 16m | market | early-reversal | mixed | mean-revert | neutral | 57.5 | ↑89.22 | 0.2029 | 1.56 | **LOSS** |
| 108 | MRVL | 03-23 14:10 | 03-23 14:27 | 90.49 | 91.04 | 53 | 9682.43 | +29.15 | +0.61% | 1.11R | 17m | market | trim-profit-target | mixed | mean-revert | neutral | 49.26 | ↑90.18 | 0.2061 | 1.41 | **WIN** |
| 109 | MRVL | 03-23 14:10 | 03-23 14:31 | 90.49 | 91.23 | 54 | 9682.43 | +39.96 | +0.82% | 1.49R | 21m | market | timeout | mixed | mean-revert | neutral | 49.26 | ↑90.18 | 0.2061 | 1.41 | **WIN** |
| 110 | MRVL | 03-24 14:10 | 03-24 14:26 | 91.48 | 91.15 | 121 | 11069.08 | -39.93 | -0.36% | 0.62R | 16m | market | early-reversal | trend | trend | neutral | 71.66 | ↑90.46 | 0.1831 | 2.06 | **LOSS** |
| 111 | MRVL | 03-25 13:47 | 03-25 14:03 | 96.41 | 95.94 | 100 | 9641 | -47 | -0.49% | 0.63R | 16m | market | early-reversal | mixed | mean-revert | neutral | 60.97 | ↓95.91 | 0.929 | 1.09 | **LOSS** |
| 112 | MRVL | 03-25 15:07 | 03-25 15:16 | 97.02 | 97.08 | 95 | 9216.9 | +5.7 | +0.06% | 0.12R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 46.99 | ↑96.33 | 0.1339 | 0.94 | **WIN** |
| 113 | MRVL | 03-26 14:38 | 03-26 14:53 | 99.59 | 98.69 | 97 | 9660.23 | -87.3 | -0.9% | 1.8R | 15m | market | stop-loss | mixed | mean-revert | neutral | 41.53 | ↓99.75 | 0.0111 | 2.75 | **LOSS** |
| 114 | MRVL | 03-30 13:33 | 03-30 13:36 | 95.21 | 93.74 | 101 | 9616.21 | -148.47 | -1.54% | 1.5R | 3m | market | stop-loss | mixed | mean-revert | neutral | 60.1 | ↓95.58 | 0.3404 | 2.42 | **LOSS** |
| 115 | MRVL | 03-31 15:27 | 03-31 15:41 | 94.72 | 94.6 | 56 | 5304.32 | -6.72 | -0.13% | 0.2R | 14m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 53.77 | ↑94.49 | 0.1806 | 1.64 | **LOSS** |
| 116 | MRVL | 04-01 14:09 | 04-01 14:24 | 106.05 | 107.44 | 57 | 6044.85 | +79.23 | +1.31% | 1.36R | 15m | market | profit-target | trend | trend | noisyHighBeta | 78.56 | ↑103.69 | 0.7912 | 1.67 | **WIN** |
| 117 | MRVL | 04-02 14:50 | 04-02 15:01 | 106.05 | 105.99 | 50 | 5302.5 | -3 | -0.06% | 0.07R | 11m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 44.39 | ↑103.69 | 0.4168 | 1.11 | **LOSS** |
| 118 | MRVL | 04-08 13:41 | 04-08 13:44 | 111.61 | 111.8 | 47 | 5245.67 | +8.93 | +0.17% | 0.09R | 3m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 67.3 | ↓111.77 | 0.8635 | 1.18 | **WIN** |
| 119 | MRVL | 04-08 14:11 | 04-08 14:19 | 114.38 | 114.37 | 49 | 5604.62 | -0.49 | -0.01% | 0.01R | 8m | market | trailing-stop | breakout | trend | noisyHighBeta | 75.72 | ↑112.2 | 0.5599 | 1.35 | **LOSS** |
| 120 | MRVL | 04-09 13:37 | 04-09 13:45 | 118.73 | 119.02 | 44 | 5224.12 | +12.76 | +0.24% | 0.12R | 8m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 67.73 | ↓119.11 | 1.2116 | 1.42 | **WIN** |
| 121 | MRVL | 04-09 14:47 | 04-09 14:57 | 120.85 | 121.09 | 50 | 6042.5 | +12 | +0.2% | 0.29R | 10m | market | trailing-stop | trend | trend | noisyHighBeta | 67.82 | ↑119.17 | 0.3853 | 2.15 | **WIN** |
| 122 | MRVL | 04-09 14:59 | 04-09 15:17 | 121.29 | 121.29 | 43 | 5215.47 | +0 | +0% | 0R | 18m | market | breakeven-stop | mixed | mean-revert | noisyHighBeta | 59.11 | ↑119.44 | 0.4765 | 1.42 | **WIN** |
| 123 | MRVL | 04-10 15:00 | 04-10 15:16 | 128.34 | 128.02 | 86 | 11037.24 | -27.52 | -0.25% | 0.45R | 16m | market | early-reversal | trend | trend | neutral | 70.13 | ↑126.15 | 0.4157 | 1.02 | **LOSS** |
| 124 | MRVL | 04-13 13:40 | 04-13 13:44 | 131.64 | 131.61 | 73 | 9609.72 | -2.19 | -0.02% | 0.01R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 44.24 | ↑131.2 | 0.5734 | 1.39 | **LOSS** |
| 125 | MRVL | 04-13 13:45 | 04-13 13:50 | 130.92 | 130.81 | 49 | 6415.08 | -5.39 | -0.08% | 0.05R | 5m | market | trailing-stop | bearish | mean-revert | neutral | 54.83 | ↓131.3 | 0.3149 | 1.15 | **LOSS** |
| 126 | MRVL | 04-14 13:39 | 04-14 13:50 | 134.84 | 132.81 | 64 | 8629.76 | -129.92 | -1.51% | 0.85R | 11m | market | stop-loss | mixed | mean-revert | neutral | 71.76 | ↓135.88 | 1.0229 | 0.86 | **LOSS** |
| 127 | MRVL | 04-15 14:25 | 04-15 14:39 | 136.15 | 136.11 | 81 | 11028.15 | -3.24 | -0.03% | 0.06R | 14m | market | trailing-stop | trend | trend | neutral | 63.39 | ↑134.84 | 0.1755 | 1.29 | **LOSS** |
| 128 | MRVL | 04-21 13:50 | 04-21 14:06 | 151.56 | 153.97 | 63 | 9548.28 | +151.83 | +1.59% | 1.83R | 16m | market | profit-target | mixed | mean-revert | neutral | 53.51 | ↑151.12 | 0.6603 | 1.95 | **WIN** |
| 129 | MRVL | 04-21 14:20 | 04-21 14:35 | 153.09 | 152.16 | 51 | 7807.59 | -47.43 | -0.61% | 0.9R | 15m | market | stop-loss | bearish | mean-revert | neutral | 36.29 | ↓152.46 | 0.3775 | 1.75 | **LOSS** |
| 130 | MRVL | 04-22 14:07 | 04-22 14:23 | 154.78 | 154.21 | 71 | 10989.38 | -40.47 | -0.37% | 0.38R | 16m | market | early-reversal | trend | trend | neutral | 60.56 | ↑153.17 | 0.2641 | 2.14 | **LOSS** |
| 131 | MRVL | 04-23 13:55 | 04-23 14:01 | 163.25 | 161.8 | 59 | 9631.75 | -85.55 | -0.89% | 0.99R | 6m | market | stop-loss | mixed | mean-revert | neutral | 53.8 | ↓162.91 | 0.9767 | 2.34 | **LOSS** |
| 132 | MRVL | 04-24 15:20 | 04-24 15:25 | 161.86 | 160.92 | 39 | 6312.54 | -36.66 | -0.58% | 1.16R | 5m | market | stop-loss | mixed | mean-revert | neutral | 33.17 | ↓163.16 | -0.013 | 2.7 | **LOSS** |

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

- ⚠️ **Profit factor 0.58 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T02:10:50.857Z*
