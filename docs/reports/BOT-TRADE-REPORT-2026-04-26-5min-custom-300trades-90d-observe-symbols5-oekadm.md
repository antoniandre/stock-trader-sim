# Bot Trade Report — 71 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T08:50:16.278Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $1835 (+1.84%) over 71 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 71 |
| Win rate | 43.66% (31W / 40L) |
| Net P&L | $+1835 (+1.84%) |
| Gross profit | $4650.57 |
| Gross loss | $2815.57 |
| Profit factor | 1.65 |
| Avg win | $150.02 |
| Avg loss | $70.39 |
| Payoff ratio | 2.13:1 |
| Expectancy | $+25.85 / trade |
| Max drawdown | 0.77% |
| Sharpe ratio (ann.) | 3.19 |
| Trades / active day | 1.82 |
| Avg confidence | 99.65% |
| Avg trade duration | 62 min |
| Avg risk ratio | 0.83R |
| Starting equity | $100,000 |
| Ending equity | $101,835 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 37.5% | $+118.46 | $7.4 |
| Mid  10:30–11:30 | 36 | 55.56% | $+1567.49 | $43.54 |
| Noon 11:30–13:00 | 17 | 29.41% | $+334.79 | $19.69 |
| PM   13:00–14:00 | 2 | 0% | $-185.74 | $-92.87 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| META | 17 | 8 | 47.06% | $+690.4 | $+40.61 | 2.33 | eligible |
| NVDA | 14 | 6 | 42.86% | $+628.35 | $+44.88 | 2.57 | eligible |
| AMZN | 13 | 7 | 53.85% | $+497.25 | $+38.25 | 2.73 | eligible |
| GOOGL | 9 | 4 | 44.44% | $+439.23 | $+48.8 | 4.04 | eligible |
| INTC | 18 | 6 | 33.33% | $-420.23 | $-23.35 | 0.71 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 39 | 15 | 38.46% | $+670.58 | $+17.19 |
| breakout | 32 | 16 | 50% | $+1164.42 | $+36.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 42 | 19 | 45.24% | $+1446.97 | $+34.45 |
| falseBreakoutProne | 12 | 5 | 41.67% | $+240.06 | $+20.01 |
| noisyHighBeta | 9 | 3 | 33.33% | $+73.35 | $+8.15 |
| extendedBreakout | 6 | 3 | 50% | $+72.59 | $+12.1 |
| thinChop | 2 | 1 | 50% | $+2.03 | $+1.02 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GOOGL | 5 | 2.66 | $+34.06 | 4 | 7.43 | $+67.24 | 0.04% | 4.82 | promote |
| Symbol | NVDA | 10 | 2.54 | $+38.53 | 4 | 2.63 | $+60.77 | 0.15% | 1.98 | promote |
| Time slot | Noon 11:30-13:00 | 12 | 1.46 | $+10.41 | 5 | 2.63 | $+41.99 | 0.08% | 1.76 | promote |
| Setup | breakout | 19 | 1.73 | $+38.34 | 13 | 1.55 | $+33.53 | 0.54% | 1.29 | promote |
| Time slot | Mid 10:30-11:30 | 28 | 2.2 | $+47.41 | 8 | 2.5 | $+29.99 | 0.08% | 1.56 | promote |
| Behavior | neutral | 27 | 2.62 | $+38.65 | 15 | 2.07 | $+26.9 | 0.22% | 1.38 | promote |
| Symbol | META | 9 | 3.49 | $+58.5 | 8 | 1.53 | $+20.49 | 0.24% | 1.14 | promote |
| Setup | trend | 23 | 1.96 | $+23.4 | 16 | 1.29 | $+8.28 | 0.22% | 0.86 | watch |
| Symbol | AMZN | 7 | 4.94 | $+67.04 | 6 | 1.17 | $+4.67 | 0.15% | 0.77 | watch |
| Behavior | extendedBreakout | 6 | 1.23 | $+12.1 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | INTC | 11 | 0.68 | $-25.88 | 7 | 0.77 | $-19.37 | 0.37% | 0.64 | reject |
| Behavior | noisyHighBeta | 7 | 1.27 | $+21.22 | 2 | 0 | $-37.6 | 0.08% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+1646.1 | 1.56 |
| +3 bps/side | $+1268.29 | 1.4 |
| +5 bps/side | $+890.5 | 1.26 |
| +10 bps/side | $-53.99 | 0.99 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 23 |
| timeout | 22 |
| stagnation | 11 |
| breakeven-stop | 5 |
| profit-target | 4 |
| trim-profit-target | 3 |
| stop-loss | 2 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 2 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 3 | INTC | 01-27 15:50 | 01-27 16:40 | 44.11 | 43.95 | 317 | 13982.87 | -50.72 | -0.36% | 0.25R | 50m | market | breakeven-stop | trend | trend | noisyHighBeta | 63.58 | ↑43.74 | 0.2998 | 1.07 | **LOSS** |
| 4 | INTC | 01-28 17:00 | 01-28 17:20 | 49.2 | 48.79 | 284 | 13972.8 | -116.44 | -0.83% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.92 | ↑48.14 | 0.4328 | 1.32 | **LOSS** |
| 5 | NVDA | 01-30 15:15 | 01-30 16:15 | 193.04 | 192.29 | 72 | 13898.88 | -54 | -0.39% | 0.4R | 60m | market | stagnation | trend | trend | neutral | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 6 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 286 | 13931.06 | -54.34 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 7 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 8 | AMZN | 02-02 15:15 | 02-02 15:45 | 245.23 | 244.25 | 57 | 13978.11 | -55.86 | -0.4% | 0.34R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 9 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 288 | 13968 | +190.08 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 10 | META | 02-05 16:25 | 02-05 18:10 | 675.11 | 678.16 | 20 | 13502.2 | +61 | +0.45% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 66.69 | ↑665.74 | 0.3525 | 1.27 | **WIN** |
| 11 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 282 | 13987.2 | +358.14 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 12 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 13 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 14 | META | 02-06 17:30 | 02-06 18:05 | 664.12 | 660.82 | 21 | 13946.52 | -69.3 | -0.5% | 0.67R | 35m | market | early-reversal | trend | trend | neutral | 64.21 | ↑656.89 | 1.4376 | 1.26 | **LOSS** |
| 15 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 16 | META | 02-09 15:55 | 02-09 17:35 | 666.47 | 680.17 | 10 | 13995.87 | +137 | +2.06% | 2.94R | 100m | market | trim-profit-target | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 17 | META | 02-09 15:55 | 02-09 17:40 | 666.47 | 680.7 | 11 | 13995.87 | +156.53 | +2.14% | 3.06R | 105m | market | timeout | trend | trend | neutral | 68.1 | ↑663.32 | 1.2776 | 1.14 | **WIN** |
| 18 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 288 | 14016.96 | +2.88 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 19 | GOOGL | 02-12 16:35 | 02-12 17:25 | 314.18 | 313.66 | 44 | 13823.92 | -22.88 | -0.17% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 58.25 | ↑311.18 | 0.2702 | 1.04 | **LOSS** |
| 20 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 298 | 14038.78 | -8.94 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 21 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 303 | 14022.84 | -190.89 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 22 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 279 | 12990.24 | -309.69 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 23 | NVDA | 02-17 16:10 | 02-17 17:00 | 184.28 | 183.99 | 76 | 14005.28 | -22.04 | -0.16% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 78.42 | ↑181.37 | 0.1609 | 1.3 | **LOSS** |
| 24 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.69 | 206.48 | 68 | 13850.92 | +189.72 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 25 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 26 | GOOGL | 02-19 16:20 | 02-19 16:40 | 305.43 | 303.91 | 45 | 13744.35 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↑303.29 | 0.5567 | 3.82 | **LOSS** |
| 27 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 28 | AMZN | 02-20 14:30 | 02-20 16:05 | 206.45 | 209.54 | 33 | 13832.15 | +101.97 | +1.5% | 2.14R | 95m | market | trim-profit-target | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 29 | AMZN | 02-20 14:30 | 02-20 16:15 | 206.45 | 208.69 | 34 | 13832.15 | +76.16 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.64 | ↑205.54 | 0.2565 | 2.14 | **WIN** |
| 30 | META | 02-20 15:35 | 02-20 16:25 | 655.91 | 655.68 | 21 | 13774.11 | -4.83 | -0.04% | 0.03R | 50m | market | breakeven-stop | trend | trend | neutral | 77.8 | ↑651.44 | 3.1265 | 1.25 | **LOSS** |
| 31 | NVDA | 02-20 15:45 | 02-20 16:20 | 189.56 | 188.79 | 74 | 14027.44 | -56.98 | -0.41% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.66 | ↑187.92 | 0.4468 | 1.48 | **LOSS** |
| 32 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 33 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 34 | META | 02-26 14:40 | 02-26 15:00 | 660.83 | 656.3 | 21 | 13877.43 | -95.13 | -0.69% | 0.84R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 72.73 | ↓655.58 | 1.4234 | 2.3 | **LOSS** |
| 35 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 304 | 13968.8 | -148.96 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 36 | META | 03-02 14:55 | 03-02 16:40 | 648.73 | 657.32 | 21 | 13623.33 | +180.39 | +1.32% | 0.83R | 105m | market | timeout | trend | trend | neutral | 56.82 | ↑645.55 | 1.9518 | 1.03 | **WIN** |
| 37 | GOOGL | 03-02 16:50 | 03-02 17:40 | 307.57 | 307.44 | 45 | 13840.65 | -5.85 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑305.06 | 0.3278 | 1.41 | **LOSS** |
| 38 | META | 03-02 16:55 | 03-02 17:15 | 659.72 | 657.71 | 21 | 13854.12 | -42.21 | -0.3% | 0.42R | 20m | market | early-reversal | trend | trend | thinChop | 66.44 | ↑650.04 | 3.161 | 1.16 | **LOSS** |
| 39 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.74 | 215.72 | 66 | 14040.84 | +196.68 | +1.4% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 40 | META | 03-04 14:45 | 03-04 16:30 | 661.19 | 670.86 | 21 | 13884.99 | +203.07 | +1.46% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 59.74 | ↑661.44 | 0.924 | 1.13 | **WIN** |
| 41 | AMZN | 03-05 14:30 | 03-05 15:10 | 218.93 | 217.94 | 64 | 14011.52 | -63.36 | -0.45% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | 70.4 | ↓217.79 | 0.3296 | 2.45 | **LOSS** |
| 42 | INTC | 03-09 15:55 | 03-09 17:40 | 44.14 | 44.28 | 316 | 13948.24 | +44.24 | +0.32% | 0.29R | 105m | market | timeout | trend | trend | thinChop | 77.99 | ↑43.2 | 0.2132 | 1.03 | **WIN** |
| 43 | NVDA | 03-09 16:35 | 03-09 16:55 | 180.73 | 180.09 | 77 | 13916.21 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↑178.36 | 0.6872 | 1.18 | **LOSS** |
| 44 | AMZN | 03-10 14:30 | 03-10 15:20 | 215.23 | 214.68 | 65 | 13989.95 | -35.75 | -0.26% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 70.78 | ↑213.67 | 1.1231 | 1.19 | **LOSS** |
| 45 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 46 | META | 03-17 13:30 | 03-17 13:55 | 634.68 | 632.49 | 22 | 13962.96 | -48.18 | -0.35% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.92 | ↓632.89 | 0.9474 | 2.88 | **LOSS** |
| 47 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 297 | 13953.06 | -374.22 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 48 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 49 | META | 03-23 15:00 | 03-23 15:45 | 608.1 | 606.39 | 23 | 13986.3 | -39.33 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 65.63 | ↑603.13 | 3.5176 | 1.1 | **LOSS** |
| 50 | AMZN | 03-25 13:30 | 03-25 14:05 | 212.41 | 211.46 | 66 | 14019.06 | -62.7 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.77 | ↓212.21 | 0.8671 | 2.01 | **LOSS** |
| 51 | AMZN | 03-30 13:35 | 03-30 13:55 | 202.23 | 201.44 | 69 | 13953.87 | -54.51 | -0.39% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↑201.76 | 0.1629 | 1.31 | **LOSS** |
| 52 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 53 | INTC | 03-31 15:45 | 03-31 17:10 | 42.56 | 43.6 | 326 | 13874.56 | +339.04 | +2.44% | 2.12R | 85m | market | profit-target | trend | trend | neutral | 50.42 | ↑42.36 | 0.2611 | 1.01 | **WIN** |
| 54 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 55 | META | 04-01 13:30 | 04-01 13:50 | 582.63 | 576.41 | 24 | 13983.12 | -149.28 | -1.07% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.41 | ↓580.01 | 1.9601 | 1.9 | **LOSS** |
| 56 | AMZN | 04-09 14:45 | 04-09 16:30 | 227.9 | 231.11 | 61 | 13901.9 | +195.81 | +1.41% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑225.16 | 1.4135 | 1.45 | **WIN** |
| 57 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 58 | INTC | 04-10 13:40 | 04-10 15:25 | 62.45 | 62.94 | 223 | 13926.35 | +109.27 | +0.78% | 0.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.25 | ↑61.83 | 0.3802 | 1.54 | **WIN** |
| 59 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 200 | 12842 | -94 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 60 | INTC | 04-13 15:45 | 04-13 16:05 | 64.91 | 64.6 | 215 | 13955.65 | -66.65 | -0.48% | 0.47R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.08 | ↑64.13 | 0.3221 | 1.9 | **LOSS** |
| 61 | INTC | 04-13 16:35 | 04-13 17:45 | 65.11 | 65.07 | 214 | 13933.54 | -8.56 | -0.06% | 0.07R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 73.87 | ↑64.24 | 0.2342 | 1.49 | **LOSS** |
| 62 | META | 04-14 13:35 | 04-14 15:20 | 646.43 | 660.11 | 21 | 13575.03 | +287.28 | +2.12% | 3.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 95.25 | ↑643.39 | 2.4169 | 2.58 | **WIN** |
| 63 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 64 | META | 04-14 15:45 | 04-14 16:35 | 663.7 | 663.48 | 21 | 13937.7 | -4.62 | -0.03% | 0.04R | 50m | market | stagnation | trend | trend | neutral | 79.61 | ↑652.9 | 6 | 1.08 | **LOSS** |
| 65 | META | 04-15 14:10 | 04-15 15:55 | 672.49 | 674.66 | 20 | 13449.8 | +43.4 | +0.32% | 0.39R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑669.14 | 2.6108 | 1.02 | **WIN** |
| 66 | INTC | 04-15 14:35 | 04-15 15:30 | 65.26 | 65.07 | 213 | 13900.38 | -40.47 | -0.29% | 0.15R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 67 | AMZN | 04-21 13:40 | 04-21 14:45 | 252.58 | 252.31 | 55 | 13891.9 | -14.85 | -0.11% | 0.12R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.08 | ↓252.72 | 0.9627 | 2.32 | **LOSS** |
| 68 | AMZN | 04-23 14:35 | 04-23 15:45 | 256.96 | 256.96 | 54 | 13875.84 | +0 | +0% | 0R | 70m | market | breakeven-stop | trend | trend | neutral | 66.63 | ↑255.44 | 0.4717 | 1.03 | **WIN** |
| 69 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |
| 70 | META | 04-24 14:05 | 04-24 14:25 | 668.22 | 665.03 | 21 | 14032.62 | -66.99 | -0.48% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑662.32 | 1.8918 | 1.54 | **LOSS** |
| 71 | META | 04-24 15:25 | 04-24 17:10 | 672.73 | 679.81 | 20 | 13454.6 | +141.6 | +1.05% | 1.5R | 105m | market | timeout | trend | trend | neutral | 68.58 | ↑665.22 | 2.6989 | 1.72 | **WIN** |

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

- ✅ **Profit factor 1.65** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.83R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T08:50:16.278Z*
