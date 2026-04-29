# Bot Trade Report — 75 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:48:32.401Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 9 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $323.99 (-0.32%) over 75 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 75 |
| Win rate | 28% (21W / 54L) |
| Net P&L | $-323.99 (-0.32%) |
| Gross profit | $1002.03 |
| Gross loss | $1326.02 |
| Profit factor | 0.76 |
| Avg win | $47.72 |
| Avg loss | $24.56 |
| Payoff ratio | 1.94:1 |
| Expectancy | $-4.32 / trade |
| Max drawdown | 0.67% |
| Sharpe ratio (ann.) | -1.89 |
| Trades / active day | 1.88 |
| Avg confidence | 95.8% |
| Avg trade duration | 43 min |
| Avg planned R:R | 2.67:1 |
| Avg risk ratio | 0.65R |
| Starting equity | $100,000 |
| Ending equity | $99,676.01 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-323.99 | MISS |
| Win rate | 45-60% | 28% | MISS |
| Profit factor | >= 1.3 | 0.76 | MISS |
| Sharpe (ann.) | > 1.5 | -1.89 | MISS |
| R:R | 2:1 - 3:1 | 2.67:1 planned | PASS |
| Max drawdown | < 10% | 0.67% | PASS |
| Expectancy | positive | $-4.32 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 25% | $-351.56 | $-21.97 |
| Mid  10:30–11:30 | 23 | 21.74% | $-50.61 | $-2.2 |
| Noon 11:30–13:00 | 17 | 41.18% | $+190.82 | $11.22 |
| PM   13:00–14:00 | 19 | 26.32% | $-112.64 | $-5.93 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NET | 10 | 4 | 40% | $+320.81 | $+32.08 | 3.28 | eligible |
| INTC | 10 | 4 | 40% | $+50.63 | $+5.06 | 1.3 | eligible |
| TSM | 14 | 5 | 35.71% | $-40.5 | $-2.89 | 0.79 | throttle |
| NVDA | 7 | 1 | 14.29% | $-55.88 | $-7.98 | 0.48 | throttle |
| MU | 6 | 2 | 33.33% | $-70.2 | $-11.7 | 0.06 | throttle |
| ON | 6 | 0 | 0% | $-88.57 | $-14.76 | 0 | throttle |
| TSLA | 7 | 1 | 14.29% | $-114.26 | $-16.32 | 0.37 | throttle |
| AMAT | 8 | 2 | 25% | $-150.11 | $-18.76 | 0.14 | throttle |
| ORCL | 7 | 2 | 28.57% | $-175.91 | $-25.13 | 0.08 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 28 | 8 | 28.57% | $+172.98 | $+6.18 |
| momentum-pilot | 25 | 8 | 32% | $-40.69 | $-1.63 |
| breakout | 22 | 5 | 22.73% | $-456.28 | $-20.74 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mixed | 9 | 2 | 22.22% | $-65.12 | $-7.24 |
| trend | 66 | 19 | 28.79% | $-258.87 | $-3.92 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 38 | 11 | 28.95% | $+200.02 | $+5.26 |
| extendedBreakout | 1 | 0 | 0% | $-8.6 | $-8.6 |
| noisyHighBeta | 1 | 0 | 0% | $-71.68 | $-71.68 |
| regimeInstability | 30 | 9 | 30% | $-147.78 | $-4.93 |
| falseBreakoutProne | 5 | 1 | 20% | $-295.95 | $-59.19 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 38 | 11 | 28.95% | $+200.02 | $+5.26 |
| extended-chase | 1 | 0 | 0% | $-8.6 | $-8.6 |
| noisy-high-beta | 1 | 0 | 0% | $-71.68 | $-71.68 |
| regime-instability | 30 | 9 | 30% | $-147.78 | $-4.93 |
| false-breakout-risk | 5 | 1 | 20% | $-295.95 | $-59.19 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NET | 5 | 5.56 | $+42.51 | 5 | 2.15 | $+21.65 | 0.09% | 1.76 | promote |
| Time slot | Noon 11:30-13:00 | 10 | 0.6 | $-4.55 | 7 | 4.27 | $+33.76 | 0.07% | 3.07 | reject |
| Behavior | confirmationRequired | 21 | 0.7 | $-5.98 | 17 | 2.62 | $+19.15 | 0.07% | 1.85 | reject |
| Trade state | confirmation-required | 21 | 0.7 | $-5.98 | 17 | 2.62 | $+19.15 | 0.07% | 1.85 | reject |
| Setup | trend | 18 | 1.03 | $+0.51 | 10 | 2.21 | $+16.38 | 0.07% | 1.54 | reject |
| Symbol | TSLA | 5 | 0 | $-28.7 | 2 | 1.8 | $+14.61 | 0.04% | 1.32 | reject |
| Symbol | ORCL | 5 | 0.03 | $-36.57 | 2 | 4.33 | $+3.46 | 0% | 1.41 | reject |
| Time slot | PM 13:00-14:00 | 12 | 0.2 | $-11.16 | 7 | 1.45 | $+3.04 | 0.05% | 0.9 | reject |
| Regime | trend | 40 | 0.59 | $-7.85 | 26 | 1.11 | $+2.12 | 0.16% | 0.84 | reject |
| Symbol | MU | 5 | 0.05 | $-14.2 | 1 | ∞ | $+0.78 | 0% | 0 | reject |
| Time slot | Mid 10:30-11:30 | 20 | 0.87 | $-2.48 | 3 | 0.93 | $-0.32 | 0.01% | 0.48 | reject |
| Regime | mixed | 5 | 0 | $-11.23 | 4 | 0.52 | $-2.24 | 0.02% | 0.27 | reject |
| Setup | momentum-pilot | 17 | 0.87 | $-1.16 | 8 | 0.52 | $-2.62 | 0.03% | 0.3 | reject |
| Symbol | TSM | 6 | 0.76 | $-2.67 | 8 | 0.81 | $-3.06 | 0.11% | 0.6 | reject |
| Symbol | AMAT | 7 | 0.14 | $-20.72 | 1 | 0 | $-5.04 | 0.01% | 0 | reject |
| Setup | breakout | 10 | 0.07 | $-35.97 | 12 | 0.7 | $-8.05 | 0.17% | 0.55 | reject |
| Behavior | regimeInstability | 21 | 0.7 | $-2.77 | 9 | 0.21 | $-9.95 | 0.1% | 0.13 | reject |
| Trade state | regime-instability | 21 | 0.7 | $-2.77 | 9 | 0.21 | $-9.95 | 0.1% | 0.13 | reject |
| Symbol | NVDA | 5 | 0.76 | $-3.37 | 2 | 0 | $-19.52 | 0.04% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-401.81 | 0.71 |
| +3 bps/side | $-557.39 | 0.63 |
| +5 bps/side | $-713.04 | 0.56 |
| +10 bps/side | $-1102.12 | 0.43 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 34 |
| stagnation | 16 |
| timeout | 12 |
| trailing-stop | 7 |
| breakeven-stop | 4 |
| profit-target | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMAT | 01-29 14:30 | 01-29 14:45 | 341.8 | 340.5 | 16 | 5468.8 | -20.8 | -0.38% | 0.46R | 15m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 60.99 | ↓342.26 | 0.6263 | 2.12 | **LOSS** |
| 2 | TSM | 01-29 14:35 | 01-29 14:50 | 342.64 | 340.71 | 7 | 2398.48 | -13.51 | -0.56% | 0.63R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 44.44 | ↓340.55 | -0.4718 | 2.97 | **LOSS** |
| 3 | NVDA | 01-30 14:30 | 01-30 14:55 | 192.48 | 191.52 | 14 | 2694.72 | -13.44 | -0.5% | 0.68R | 25m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 56.75 | ↓191.9 | 0.1481 | 2.81 | **LOSS** |
| 4 | TSM | 01-30 14:45 | 01-30 15:00 | 338.83 | 335.07 | 8 | 2710.64 | -30.08 | -1.11% | 1.12R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 59.51 | ↓338.02 | -0.0076 | 2.19 | **LOSS** |
| 5 | NVDA | 01-30 15:15 | 01-30 15:30 | 193.08 | 192.18 | 40 | 7723.2 | -36 | -0.47% | 0.48R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 6 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | confirmationRequired | confirmation-required | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 7 | TSM | 02-02 15:00 | 02-02 15:55 | 334.41 | 339.16 | 4 | 2675.28 | +19 | +1.42% | 1.38R | 55m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 8 | TSM | 02-02 15:00 | 02-02 16:45 | 334.41 | 342.03 | 4 | 2675.28 | +30.48 | +2.28% | 2.21R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 9 | MU | 02-02 16:30 | 02-02 16:45 | 437.65 | 436.22 | 10 | 4376.5 | -14.3 | -0.33% | 0.28R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 57.91 | ↑425.74 | 4.7027 | 1.34 | **LOSS** |
| 10 | TSM | 02-03 14:35 | 02-03 14:50 | 344.32 | 341.93 | 7 | 2410.24 | -16.73 | -0.69% | 0.93R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 66.54 | ↓344.48 | 0.0747 | 2.27 | **LOSS** |
| 11 | ON | 02-04 17:00 | 02-04 17:15 | 61.17 | 60.98 | 128 | 7829.76 | -24.32 | -0.31% | 0.32R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 68.81 | ↑60.69 | 0.1685 | 2.01 | **LOSS** |
| 12 | NET | 02-05 17:35 | 02-05 17:55 | 168.37 | 167.61 | 46 | 7745.02 | -34.96 | -0.45% | 0.39R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 69.88 | ↑166.98 | 0.2058 | 1.41 | **LOSS** |
| 13 | NET | 02-06 16:40 | 02-06 18:25 | 167.84 | 169.14 | 30 | 5035.2 | +39 | +0.77% | 0.79R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 73.06 | ↑164.97 | 0.9821 | 1.61 | **WIN** |
| 14 | ORCL | 02-06 17:45 | 02-06 18:20 | 141.71 | 141.61 | 19 | 2692.49 | -1.9 | -0.07% | 0.07R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 49.82 | ↑141.08 | 0.1275 | 1.91 | **LOSS** |
| 15 | NVDA | 02-09 14:30 | 02-09 14:50 | 187.37 | 191.39 | 13 | 2435.81 | +52.26 | +2.15% | 2.56R | 20m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 60.03 | ↑186.25 | 0.1333 | 3.7 | **WIN** |
| 16 | AMAT | 02-09 16:20 | 02-09 18:05 | 327.16 | 328.21 | 23 | 7524.68 | +24.15 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75.52 | ↑323.62 | 1.1181 | 2.32 | **WIN** |
| 17 | ORCL | 02-09 16:55 | 02-09 17:55 | 157.7 | 157.81 | 49 | 7727.3 | +5.39 | +0.07% | 0.07R | 60m | market | trailing-stop | trend | trend | confirmationRequired | confirmation-required | 63.74 | ↑155.16 | 1.4107 | 1.25 | **WIN** |
| 18 | TSLA | 02-10 14:30 | 02-10 15:00 | 422.42 | 420.06 | 6 | 2534.52 | -14.16 | -0.56% | 0.76R | 30m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 58.72 | ↓420.93 | 0.0645 | 3.28 | **LOSS** |
| 19 | AMAT | 02-10 17:00 | 02-10 18:30 | 331.58 | 331.63 | 8 | 2652.64 | +0.4 | +0.02% | 0.03R | 90m | market | breakeven-stop | trend | momentum-pilot | regimeInstability | regime-instability | 58.8 | ↑329.07 | 0.8636 | 2.89 | **WIN** |
| 20 | TSLA | 02-10 17:15 | 02-10 17:30 | 427.1 | 424.44 | 15 | 6406.5 | -39.9 | -0.62% | 0.89R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 73.05 | ↑423.1 | 0.6384 | 3.01 | **LOSS** |
| 21 | NET | 02-10 17:35 | 02-10 18:10 | 182.16 | 181.95 | 33 | 6011.28 | -6.93 | -0.12% | 0.14R | 35m | market | stagnation | trend | trend | regimeInstability | regime-instability | 66.95 | ↑179.37 | 0.6198 | 1.35 | **LOSS** |
| 22 | TSLA | 02-11 14:40 | 02-11 14:55 | 435.15 | 431.12 | 14 | 6092.1 | -56.42 | -0.93% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 23 | MU | 02-11 17:25 | 02-11 18:05 | 401.06 | 401.38 | 12 | 4812.72 | +3.84 | +0.08% | 0.07R | 40m | market | trailing-stop | trend | trend | regimeInstability | regime-instability | 64.54 | ↑396.64 | 0.7692 | 2.29 | **WIN** |
| 24 | TSLA | 02-12 14:30 | 02-12 14:45 | 433.18 | 429.86 | 9 | 3898.62 | -29.88 | -0.77% | 1.08R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.11 | ↓432.47 | 1.3102 | 2.03 | **LOSS** |
| 25 | ORCL | 02-13 17:15 | 02-13 18:00 | 160.71 | 160.09 | 48 | 7714.08 | -29.76 | -0.39% | 0.51R | 45m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 66.67 | ↑158.7 | 0.5659 | 2.03 | **LOSS** |
| 26 | MU | 02-13 17:35 | 02-13 18:00 | 417.27 | 416.17 | 9 | 3755.43 | -9.9 | -0.26% | 0.27R | 25m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 72.49 | ↑404.6 | 3.3428 | 1.09 | **LOSS** |
| 27 | ON | 02-13 17:45 | 02-13 18:00 | 71.34 | 71.17 | 86 | 6135.24 | -14.62 | -0.24% | 0.34R | 15m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 67.03 | ↑70.63 | 0.0866 | 1.35 | **LOSS** |
| 28 | AMAT | 02-18 14:30 | 02-18 14:45 | 365.95 | 363.39 | 28 | 10246.6 | -71.68 | -0.7% | 0.72R | 15m | market | early-reversal | trend | breakout | noisyHighBeta | noisy-high-beta | 67.51 | ↓364.1 | 0.2998 | 3.96 | **LOSS** |
| 29 | AMAT | 02-18 16:35 | 02-18 17:10 | 372.39 | 370.73 | 21 | 7820.19 | -34.86 | -0.45% | 0.64R | 35m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 66.93 | ↑368.14 | 2.6647 | 1.11 | **LOSS** |
| 30 | ORCL | 02-19 14:35 | 02-19 15:10 | 158.58 | 158.29 | 46 | 7294.68 | -13.34 | -0.18% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.17 | ↓157.25 | 0.2146 | 1.37 | **LOSS** |
| 31 | AMAT | 02-19 16:20 | 02-19 16:35 | 369.28 | 367.02 | 7 | 2584.96 | -15.82 | -0.61% | 0.73R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 73.34 | ↑365.81 | 0.4277 | 2.5 | **LOSS** |
| 32 | ON | 02-19 16:20 | 02-19 16:45 | 68.3 | 68.01 | 38 | 2595.4 | -11.02 | -0.42% | 0.46R | 25m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 50 | ↓68.15 | -0.6483 | 1.74 | **LOSS** |
| 33 | MU | 02-20 14:35 | 02-20 14:50 | 424.55 | 421.14 | 8 | 3396.4 | -27.28 | -0.8% | 0.78R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.72 | ↓423.17 | 1.6942 | 3.16 | **LOSS** |
| 34 | NVDA | 02-20 15:40 | 02-20 16:15 | 189.31 | 189.14 | 14 | 2650.34 | -2.38 | -0.09% | 0.08R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 71.11 | ↑187.81 | 0.358 | 1.48 | **LOSS** |
| 35 | NVDA | 02-23 14:30 | 02-23 14:45 | 193.14 | 192.42 | 24 | 4635.36 | -17.28 | -0.37% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 36 | TSM | 02-23 14:45 | 02-23 15:40 | 371.7 | 370.96 | 7 | 2601.9 | -5.18 | -0.2% | 0.2R | 55m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 56.36 | ↓369.28 | -0.5042 | 1.67 | **LOSS** |
| 37 | ON | 02-24 14:35 | 02-24 16:00 | 71.07 | 71.03 | 66 | 4690.62 | -2.64 | -0.06% | 0.07R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 94.15 | ↓70.6 | 0.3352 | 1.97 | **LOSS** |
| 38 | NET | 02-24 17:05 | 02-24 17:30 | 166.52 | 166.42 | 47 | 7826.44 | -4.7 | -0.06% | 0.06R | 25m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 64.01 | ↑164.05 | 0.7901 | 2 | **LOSS** |
| 39 | INTC | 02-25 17:20 | 02-25 19:05 | 46.26 | 46.74 | 60 | 2775.6 | +28.8 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 60.92 | ↑45.96 | 0.059 | 1.77 | **WIN** |
| 40 | TSLA | 03-05 14:30 | 03-05 15:15 | 404.89 | 404.37 | 6 | 2429.34 | -3.12 | -0.13% | 0.19R | 45m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 47.99 | ↓403.23 | -0.9927 | 6.04 | **LOSS** |
| 41 | INTC | 03-09 16:30 | 03-09 17:05 | 44.4 | 44.3 | 123 | 5461.2 | -12.3 | -0.23% | 0.23R | 35m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 65.58 | ↑43.31 | 0.2773 | 1.23 | **LOSS** |
| 42 | INTC | 03-11 13:35 | 03-11 14:30 | 47.88 | 48.01 | 219 | 10485.72 | +28.47 | +0.27% | 0.2R | 55m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.46 | ↓47.48 | -0.0099 | 1.49 | **WIN** |
| 43 | ORCL | 03-12 13:35 | 03-12 13:50 | 166.9 | 164.59 | 62 | 10347.8 | -143.22 | -1.38% | 0.99R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.56 | ↓166.41 | 0.8985 | 2.79 | **LOSS** |
| 44 | MU | 03-13 16:40 | 03-13 16:55 | 424.95 | 421.06 | 6 | 2549.7 | -23.34 | -0.92% | 0.81R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 57.16 | ↓422.2 | -0.396 | 2.65 | **LOSS** |
| 45 | AMAT | 03-16 13:45 | 03-16 14:00 | 349.16 | 347.9 | 21 | 7332.36 | -26.46 | -0.36% | 0.36R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.49 | ↓348.01 | 1.1876 | 1.58 | **LOSS** |
| 46 | INTC | 03-18 13:45 | 03-18 14:00 | 44.79 | 44.4 | 234 | 10480.86 | -91.26 | -0.87% | 0.69R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.79 | ↓44.5 | 0.0598 | 1.31 | **LOSS** |
| 47 | NET | 03-18 17:25 | 03-18 19:10 | 224.52 | 227.89 | 20 | 4490.4 | +67.4 | +1.5% | 1.65R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.32 | ↑216.19 | 2.18 | 2.39 | **WIN** |
| 48 | TSM | 03-23 13:35 | 03-23 15:20 | 336.61 | 342.45 | 14 | 4712.54 | +81.76 | +1.73% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.72 | ↑334.2 | 1.7114 | 2.4 | **WIN** |
| 49 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 44 | 7837.72 | -35.2 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 50 | NET | 03-23 17:00 | 03-23 17:15 | 223.19 | 221.8 | 12 | 2678.28 | -16.68 | -0.62% | 0.72R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 67 | ↓222.97 | -0.5243 | 1.68 | **LOSS** |
| 51 | TSM | 03-24 13:30 | 03-24 13:45 | 339.91 | 338.31 | 7 | 2379.37 | -11.2 | -0.47% | 0.64R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 49.32 | ↓338.01 | -0.8462 | 1.75 | **LOSS** |
| 52 | ON | 03-24 14:05 | 03-24 14:20 | 61.23 | 61 | 119 | 7286.37 | -27.37 | -0.38% | 0.33R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 71.18 | ↑60.41 | 0.0599 | 1.32 | **LOSS** |
| 53 | TSM | 03-24 14:55 | 03-24 16:40 | 340.78 | 342.45 | 8 | 2726.24 | +13.36 | +0.49% | 0.46R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 60.09 | ↑339.48 | 0.5583 | 1.77 | **WIN** |
| 54 | TSLA | 03-25 13:30 | 03-25 13:55 | 393.36 | 391.69 | 22 | 8653.92 | -36.74 | -0.42% | 0.47R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.7 | ↓392.3 | 1.7852 | 4.78 | **LOSS** |
| 55 | TSM | 03-25 14:40 | 03-25 15:00 | 349.69 | 348.18 | 8 | 2797.52 | -12.08 | -0.43% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 67.72 | ↑347.14 | 0.997 | 1.89 | **LOSS** |
| 56 | TSM | 03-31 13:30 | 03-31 14:50 | 324 | 324.88 | 14 | 4536 | +12.32 | +0.27% | 0.31R | 80m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 89.5 | ↓323.05 | 1.3361 | 1.83 | **WIN** |
| 57 | INTC | 03-31 16:35 | 03-31 18:20 | 43.16 | 43.79 | 118 | 5092.88 | +74.34 | +1.46% | 1.51R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 78.11 | ↑42.46 | 0.1443 | 1.5 | **WIN** |
| 58 | TSM | 03-31 17:15 | 03-31 17:40 | 332.58 | 331.82 | 23 | 7649.34 | -17.48 | -0.23% | 0.2R | 25m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 77.93 | ↑327.29 | 1.4843 | 1.44 | **LOSS** |
| 59 | NET | 03-31 17:45 | 03-31 18:55 | 204.48 | 204.15 | 26 | 5316.48 | -8.58 | -0.16% | 0.14R | 70m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 67.7 | ↑200.69 | 1.6506 | 1.1 | **LOSS** |
| 60 | TSM | 04-01 13:35 | 04-01 13:50 | 347.67 | 344.75 | 13 | 4519.71 | -37.96 | -0.84% | 0.71R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.38 | ↓344.77 | 3.1011 | 1.17 | **LOSS** |
| 61 | NET | 04-06 13:30 | 04-06 13:45 | 212.54 | 210 | 27 | 5738.58 | -68.58 | -1.2% | 1.48R | 15m | market | early-reversal | trend | breakout | regimeInstability | regime-instability | 74.87 | ↓212.54 | 0.3892 | 1.59 | **LOSS** |
| 62 | ORCL | 04-07 16:00 | 04-07 17:45 | 142.32 | 142.92 | 15 | 2134.8 | +9 | +0.42% | 0.54R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 63.78 | ↑141.97 | -0.5257 | 1.61 | **WIN** |
| 63 | INTC | 04-08 16:20 | 04-08 18:05 | 58.06 | 59.1 | 87 | 5051.22 | +90.48 | +1.79% | 1.85R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75.08 | ↑57.08 | 0.2711 | 1.1 | **WIN** |
| 64 | AMAT | 04-09 13:35 | 04-09 14:15 | 391.59 | 391.17 | 12 | 4699.08 | -5.04 | -0.11% | 0.13R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87.18 | ↓389.79 | 0.6598 | 1.45 | **LOSS** |
| 65 | MU | 04-10 17:30 | 04-10 18:50 | 420.37 | 420.5 | 6 | 2522.22 | +0.78 | +0.03% | 0.04R | 80m | market | breakeven-stop | mixed | momentum-pilot | regimeInstability | regime-instability | 59.2 | ↑418.48 | -0.1999 | 2.21 | **WIN** |
| 66 | INTC | 04-10 17:40 | 04-10 18:40 | 62.81 | 62.76 | 41 | 2575.21 | -2.05 | -0.08% | 0.1R | 60m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 63.5 | ↑62.54 | -0.0643 | 1.46 | **LOSS** |
| 67 | INTC | 04-13 15:45 | 04-13 16:00 | 64.93 | 64.46 | 120 | 7791.6 | -56.4 | -0.72% | 0.7R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 67.08 | ↑64.13 | 0.3221 | 1.9 | **LOSS** |
| 68 | INTC | 04-13 16:35 | 04-13 17:45 | 65.12 | 65.06 | 120 | 7814.4 | -7.2 | -0.09% | 0.11R | 70m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 73.87 | ↑64.24 | 0.2342 | 1.49 | **LOSS** |
| 69 | ON | 04-13 16:35 | 04-13 17:05 | 70.99 | 70.89 | 86 | 6105.14 | -8.6 | -0.14% | 0.2R | 30m | market | stagnation | trend | trend | extendedBreakout | extended-chase | 68.63 | ↑70.27 | 0.1706 | 2.61 | **LOSS** |
| 70 | NVDA | 04-14 13:30 | 04-14 13:55 | 192.31 | 192.15 | 24 | 4615.44 | -3.84 | -0.08% | 0.11R | 25m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87.34 | ↓192.17 | 0.6125 | 5.29 | **LOSS** |
| 71 | TSLA | 04-14 13:40 | 04-14 15:25 | 358.74 | 362.62 | 17 | 6098.58 | +65.96 | +1.08% | 0.96R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.51 | ↑358.44 | 0.8623 | 1.7 | **WIN** |
| 72 | INTC | 04-16 15:15 | 04-16 16:30 | 67.57 | 67.54 | 75 | 5067.75 | -2.25 | -0.04% | 0.03R | 75m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 73.45 | ↑66.47 | 0.7011 | 1.11 | **LOSS** |
| 73 | TSM | 04-22 13:40 | 04-22 13:55 | 373.75 | 371.85 | 28 | 10465 | -53.2 | -0.51% | 0.59R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.36 | ↓372.02 | 0.9147 | 1.41 | **LOSS** |
| 74 | NET | 04-27 16:00 | 04-27 17:45 | 209.69 | 213.33 | 37 | 7758.53 | +134.68 | +1.74% | 2.1R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 59.45 | ↑207.66 | 0.2916 | 2.67 | **WIN** |
| 75 | ORCL | 04-27 17:20 | 04-27 17:50 | 172.9 | 172.77 | 16 | 2766.4 | -2.08 | -0.08% | 0.11R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 75.19 | ↑170.62 | 0.2326 | 1.73 | **LOSS** |

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
| 8 | **Stagnation exit** | 20 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −25% of stop after 10 min — pre-stop cut for entries that go wrong immediately |
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

- ⚠️ **Profit factor 0.76 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.65R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:48:32.401Z*
