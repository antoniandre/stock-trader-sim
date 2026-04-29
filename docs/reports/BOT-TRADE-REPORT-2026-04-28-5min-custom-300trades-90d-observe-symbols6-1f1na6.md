# Bot Trade Report — 49 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:35:08.955Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** custom | **Symbols scanned:** 6 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $50.23 (-0.05%) over 49 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 49 |
| Win rate | 32.65% (16W / 33L) |
| Net P&L | $-50.23 (-0.05%) |
| Gross profit | $724.72 |
| Gross loss | $774.95 |
| Profit factor | 0.94 |
| Avg win | $45.3 |
| Avg loss | $23.48 |
| Payoff ratio | 1.93:1 |
| Expectancy | $-1.03 / trade |
| Max drawdown | 0.32% |
| Sharpe ratio (ann.) | -0.35 |
| Trades / active day | 1.48 |
| Avg confidence | 95.73% |
| Avg trade duration | 47 min |
| Avg planned R:R | 2.6:1 |
| Avg risk ratio | 0.67R |
| Starting equity | $100,000 |
| Ending equity | $99,949.77 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-50.23 | MISS |
| Win rate | 45-60% | 32.65% | MISS |
| Profit factor | >= 1.3 | 0.94 | MISS |
| Sharpe (ann.) | > 1.5 | -0.35 | MISS |
| R:R | 2:1 - 3:1 | 2.6:1 planned | PASS |
| Max drawdown | < 10% | 0.32% | PASS |
| Expectancy | positive | $-1.03 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 25% | $-243.53 | $-30.44 |
| Mid  10:30–11:30 | 16 | 31.25% | $+148.09 | $9.26 |
| Noon 11:30–13:00 | 11 | 54.55% | $+155.07 | $14.1 |
| PM   13:00–14:00 | 14 | 21.43% | $-109.86 | $-7.85 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NET | 7 | 2 | 28.57% | $+172.15 | $+24.59 | 2.98 | throttle |
| INTC | 10 | 4 | 40% | $+50.63 | $+5.06 | 1.3 | eligible |
| TSM | 12 | 4 | 33.33% | $-10.95 | $-0.91 | 0.93 | throttle |
| MU | 6 | 3 | 50% | $-14.43 | $-2.41 | 0.69 | throttle |
| NVDA | 7 | 1 | 14.29% | $-71.72 | $-10.25 | 0.42 | throttle |
| ORCL | 7 | 2 | 28.57% | $-175.91 | $-25.13 | 0.08 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| momentum-pilot | 20 | 7 | 35% | $+13.91 | $+0.7 |
| trend | 20 | 7 | 35% | $+190.89 | $+9.54 |
| breakout | 9 | 2 | 22.22% | $-255.03 | $-28.34 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 43 | 14 | 32.56% | $-22.59 | $-0.53 |
| mixed | 6 | 2 | 33.33% | $-27.64 | $-4.61 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 22 | 7 | 31.82% | $+212.13 | $+9.64 |
| regimeInstability | 22 | 8 | 36.36% | $+10.82 | $+0.49 |
| thinChop | 1 | 0 | 0% | $-13.97 | $-13.97 |
| falseBreakoutProne | 4 | 1 | 25% | $-259.21 | $-64.8 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 22 | 7 | 31.82% | $+212.13 | $+9.64 |
| regime-instability | 22 | 8 | 36.36% | $+10.82 | $+0.49 |
| thin-chop | 1 | 0 | 0% | $-13.97 | $-13.97 |
| false-breakout-risk | 4 | 1 | 25% | $-259.21 | $-64.8 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Noon 11:30-13:00 | 5 | 4.9 | $+11.46 | 6 | 2.29 | $+16.29 | 0.08% | 1.71 | promote |
| Behavior | confirmationRequired | 13 | 1.52 | $+7.68 | 9 | 1.84 | $+12.48 | 0.09% | 1.32 | promote |
| Trade state | confirmation-required | 13 | 1.52 | $+7.68 | 9 | 1.84 | $+12.48 | 0.09% | 1.32 | promote |
| Setup | trend | 13 | 1.91 | $+10.82 | 7 | 1.44 | $+7.17 | 0.07% | 1.03 | watch |
| Time slot | Mid 10:30-11:30 | 13 | 1.86 | $+11.47 | 3 | 0.93 | $-0.32 | 0.01% | 0.48 | watch |
| Behavior | regimeInstability | 13 | 1.49 | $+3.4 | 9 | 0.41 | $-3.71 | 0.03% | 0.24 | watch |
| Trade state | regime-instability | 13 | 1.49 | $+3.4 | 9 | 0.41 | $-3.71 | 0.03% | 0.24 | watch |
| Setup | momentum-pilot | 11 | 1.57 | $+4.3 | 9 | 0.41 | $-3.71 | 0.03% | 0.24 | watch |
| Symbol | NET | 5 | 4.48 | $+40.26 | 2 | 0 | $-14.57 | 0.03% | 0 | watch |
| Symbol | ORCL | 5 | 0.03 | $-36.57 | 2 | 4.33 | $+3.46 | 0% | 1.41 | reject |
| Symbol | TSM | 6 | 0.76 | $-2.67 | 6 | 1.06 | $+0.85 | 0.08% | 0.77 | reject |
| Symbol | MU | 5 | 0.67 | $-3.04 | 1 | ∞ | $+0.78 | 0% | 0 | reject |
| Regime | trend | 27 | 1.08 | $+1.26 | 16 | 0.82 | $-3.54 | 0.15% | 0.62 | reject |
| Time slot | PM 13:00-14:00 | 9 | 0.3 | $-8.47 | 5 | 0.02 | $-6.72 | 0.03% | 0 | reject |
| Setup | breakout | 5 | 0.14 | $-34.53 | 4 | 0.5 | $-20.59 | 0.09% | 0.41 | reject |
| Symbol | NVDA | 5 | 0.76 | $-3.37 | 2 | 0 | $-27.44 | 0.05% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-98.73 | 0.88 |
| +3 bps/side | $-195.7 | 0.78 |
| +5 bps/side | $-292.74 | 0.69 |
| +10 bps/side | $-535.28 | 0.53 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 18 |
| stagnation | 12 |
| timeout | 9 |
| trailing-stop | 5 |
| breakeven-stop | 3 |
| profit-target | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSM | 01-29 14:35 | 01-29 14:50 | 342.64 | 340.71 | 7 | 2398.48 | -13.51 | -0.56% | 0.63R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 44.44 | ↓340.55 | -0.4718 | 2.97 | **LOSS** |
| 2 | NVDA | 01-30 14:30 | 01-30 14:55 | 192.48 | 191.52 | 14 | 2694.72 | -13.44 | -0.5% | 0.68R | 25m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 56.75 | ↓191.9 | 0.1481 | 2.81 | **LOSS** |
| 3 | TSM | 01-30 14:45 | 01-30 15:00 | 338.83 | 335.07 | 8 | 2710.64 | -30.08 | -1.11% | 1.12R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 59.51 | ↓338.02 | -0.0076 | 2.19 | **LOSS** |
| 4 | NVDA | 01-30 15:15 | 01-30 15:30 | 193.08 | 192.18 | 40 | 7723.2 | -36 | -0.47% | 0.48R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 79.21 | ↓192.21 | 0.3686 | 1.84 | **LOSS** |
| 5 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | confirmationRequired | confirmation-required | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 6 | TSM | 02-02 15:00 | 02-02 15:55 | 334.41 | 339.16 | 4 | 2675.28 | +19 | +1.42% | 1.38R | 55m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 7 | TSM | 02-02 15:00 | 02-02 16:45 | 334.41 | 342.03 | 4 | 2675.28 | +30.48 | +2.28% | 2.21R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 8 | MU | 02-02 16:30 | 02-02 18:15 | 437.65 | 440.41 | 10 | 4376.5 | +27.6 | +0.63% | 0.54R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 57.91 | ↑425.74 | 4.7027 | 1.34 | **WIN** |
| 9 | TSM | 02-03 14:35 | 02-03 14:50 | 344.32 | 341.93 | 7 | 2410.24 | -16.73 | -0.69% | 0.93R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 66.54 | ↓344.48 | 0.0747 | 2.27 | **LOSS** |
| 10 | NET | 02-05 17:35 | 02-05 17:55 | 168.37 | 167.61 | 46 | 7745.02 | -34.96 | -0.45% | 0.39R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 69.88 | ↑166.98 | 0.2058 | 1.41 | **LOSS** |
| 11 | NET | 02-06 16:40 | 02-06 18:25 | 167.84 | 169.14 | 30 | 5035.2 | +39 | +0.77% | 0.79R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 73.06 | ↑164.97 | 0.9821 | 1.61 | **WIN** |
| 12 | ORCL | 02-06 17:45 | 02-06 18:20 | 141.71 | 141.61 | 19 | 2692.49 | -1.9 | -0.07% | 0.07R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 49.82 | ↑141.08 | 0.1275 | 1.91 | **LOSS** |
| 13 | NVDA | 02-09 14:30 | 02-09 14:50 | 187.37 | 191.39 | 13 | 2435.81 | +52.26 | +2.15% | 2.56R | 20m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 60.03 | ↑186.25 | 0.1333 | 3.7 | **WIN** |
| 14 | ORCL | 02-09 16:55 | 02-09 17:55 | 157.7 | 157.81 | 49 | 7727.3 | +5.39 | +0.07% | 0.07R | 60m | market | trailing-stop | trend | trend | confirmationRequired | confirmation-required | 63.74 | ↑155.16 | 1.4107 | 1.25 | **WIN** |
| 15 | NET | 02-10 17:35 | 02-10 18:10 | 182.16 | 181.95 | 33 | 6011.28 | -6.93 | -0.12% | 0.14R | 35m | market | stagnation | trend | trend | regimeInstability | regime-instability | 66.95 | ↑179.37 | 0.6198 | 1.35 | **LOSS** |
| 16 | MU | 02-11 17:25 | 02-11 18:05 | 401.06 | 401.38 | 12 | 4812.72 | +3.84 | +0.08% | 0.07R | 40m | market | trailing-stop | trend | trend | regimeInstability | regime-instability | 64.54 | ↑396.64 | 0.7692 | 2.29 | **WIN** |
| 17 | ORCL | 02-13 17:15 | 02-13 18:00 | 160.71 | 160.09 | 48 | 7714.08 | -29.76 | -0.39% | 0.51R | 45m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 66.67 | ↑158.7 | 0.5659 | 2.03 | **LOSS** |
| 18 | MU | 02-13 17:35 | 02-13 18:55 | 417.27 | 416.67 | 9 | 3755.43 | -5.4 | -0.14% | 0.14R | 80m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 72.49 | ↑404.6 | 3.3428 | 1.09 | **LOSS** |
| 19 | ORCL | 02-19 14:35 | 02-19 15:10 | 158.58 | 158.29 | 46 | 7294.68 | -13.34 | -0.18% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.17 | ↓157.25 | 0.2146 | 1.37 | **LOSS** |
| 20 | MU | 02-20 14:35 | 02-20 14:50 | 424.55 | 421.14 | 8 | 3396.4 | -27.28 | -0.8% | 0.78R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.72 | ↓423.17 | 1.6942 | 3.16 | **LOSS** |
| 21 | NVDA | 02-20 15:40 | 02-20 16:15 | 189.31 | 189.14 | 14 | 2650.34 | -2.38 | -0.09% | 0.08R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 71.11 | ↑187.81 | 0.358 | 1.48 | **LOSS** |
| 22 | NVDA | 02-23 14:30 | 02-23 14:45 | 193.14 | 192.42 | 24 | 4635.36 | -17.28 | -0.37% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 23 | TSM | 02-23 14:45 | 02-23 15:40 | 371.7 | 370.96 | 7 | 2601.9 | -5.18 | -0.2% | 0.2R | 55m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 56.36 | ↓369.28 | -0.5042 | 1.67 | **LOSS** |
| 24 | NET | 02-24 17:05 | 02-24 17:35 | 166.52 | 166.18 | 47 | 7826.44 | -15.98 | -0.2% | 0.2R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 64.01 | ↑164.05 | 0.7901 | 2 | **LOSS** |
| 25 | INTC | 02-25 17:20 | 02-25 19:05 | 46.26 | 46.74 | 60 | 2775.6 | +28.8 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 60.92 | ↑45.96 | 0.059 | 1.77 | **WIN** |
| 26 | MU | 03-02 17:20 | 03-02 18:20 | 413.71 | 412.44 | 11 | 4550.81 | -13.97 | -0.31% | 0.31R | 60m | market | stagnation | trend | trend | thinChop | thin-chop | 53.81 | ↑408.93 | 1.4326 | 1.25 | **LOSS** |
| 27 | INTC | 03-09 16:30 | 03-09 17:05 | 44.4 | 44.3 | 123 | 5461.2 | -12.3 | -0.23% | 0.23R | 35m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 65.58 | ↑43.31 | 0.2773 | 1.23 | **LOSS** |
| 28 | INTC | 03-11 13:35 | 03-11 14:30 | 47.88 | 48.01 | 219 | 10485.72 | +28.47 | +0.27% | 0.2R | 55m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.46 | ↓47.48 | -0.0099 | 1.49 | **WIN** |
| 29 | ORCL | 03-12 13:35 | 03-12 13:50 | 166.9 | 164.59 | 62 | 10347.8 | -143.22 | -1.38% | 0.99R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.56 | ↓166.41 | 0.8985 | 2.79 | **LOSS** |
| 30 | INTC | 03-18 13:45 | 03-18 14:00 | 44.79 | 44.4 | 234 | 10480.86 | -91.26 | -0.87% | 0.69R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.79 | ↓44.5 | 0.0598 | 1.31 | **LOSS** |
| 31 | TSM | 03-23 13:35 | 03-23 15:20 | 336.61 | 342.45 | 14 | 4712.54 | +81.76 | +1.73% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.72 | ↑334.2 | 1.7114 | 2.4 | **WIN** |
| 32 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.13 | 177.33 | 44 | 7837.72 | -35.2 | -0.45% | 0.45R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 57.25 | ↓177.24 | 1.1472 | 1.96 | **LOSS** |
| 33 | NET | 03-23 17:00 | 03-23 17:15 | 223.19 | 221.8 | 12 | 2678.28 | -16.68 | -0.62% | 0.72R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 67 | ↓222.97 | -0.5243 | 1.68 | **LOSS** |
| 34 | TSM | 03-24 13:30 | 03-24 13:45 | 339.91 | 338.31 | 7 | 2379.37 | -11.2 | -0.47% | 0.64R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 49.32 | ↓338.01 | -0.8462 | 1.75 | **LOSS** |
| 35 | TSM | 03-24 14:55 | 03-24 16:40 | 340.78 | 342.45 | 8 | 2726.24 | +13.36 | +0.49% | 0.46R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 60.09 | ↑339.48 | 0.5583 | 1.77 | **WIN** |
| 36 | TSM | 03-25 14:40 | 03-25 15:00 | 349.69 | 348.18 | 8 | 2797.52 | -12.08 | -0.43% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 67.72 | ↑347.14 | 0.997 | 1.89 | **LOSS** |
| 37 | INTC | 03-31 16:35 | 03-31 18:20 | 43.16 | 43.79 | 118 | 5092.88 | +74.34 | +1.46% | 1.51R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 78.11 | ↑42.46 | 0.1443 | 1.5 | **WIN** |
| 38 | TSM | 03-31 17:15 | 03-31 17:45 | 332.58 | 331.99 | 23 | 7649.34 | -13.57 | -0.18% | 0.16R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 77.93 | ↑327.29 | 1.4843 | 1.44 | **LOSS** |
| 39 | ORCL | 04-07 16:00 | 04-07 17:45 | 142.32 | 142.92 | 15 | 2134.8 | +9 | +0.42% | 0.54R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 63.78 | ↑141.97 | -0.5257 | 1.61 | **WIN** |
| 40 | INTC | 04-08 16:20 | 04-08 18:05 | 58.06 | 59.1 | 87 | 5051.22 | +90.48 | +1.79% | 1.85R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75.08 | ↑57.08 | 0.2711 | 1.1 | **WIN** |
| 41 | MU | 04-10 17:30 | 04-10 18:50 | 420.37 | 420.5 | 6 | 2522.22 | +0.78 | +0.03% | 0.04R | 80m | market | breakeven-stop | mixed | momentum-pilot | regimeInstability | regime-instability | 59.2 | ↑418.48 | -0.1999 | 2.21 | **WIN** |
| 42 | INTC | 04-10 17:40 | 04-10 18:40 | 62.81 | 62.76 | 41 | 2575.21 | -2.05 | -0.08% | 0.1R | 60m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 63.5 | ↑62.54 | -0.0643 | 1.46 | **LOSS** |
| 43 | INTC | 04-13 15:45 | 04-13 16:00 | 64.93 | 64.46 | 120 | 7791.6 | -56.4 | -0.72% | 0.7R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 67.08 | ↑64.13 | 0.3221 | 1.9 | **LOSS** |
| 44 | INTC | 04-13 16:35 | 04-13 17:45 | 65.12 | 65.06 | 120 | 7814.4 | -7.2 | -0.09% | 0.11R | 70m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 73.87 | ↑64.24 | 0.2342 | 1.49 | **LOSS** |
| 45 | NVDA | 04-14 13:30 | 04-14 14:00 | 192.31 | 191.49 | 24 | 4615.44 | -19.68 | -0.43% | 0.61R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.34 | ↓192.17 | 0.6125 | 5.29 | **LOSS** |
| 46 | INTC | 04-16 15:15 | 04-16 16:30 | 67.57 | 67.54 | 75 | 5067.75 | -2.25 | -0.04% | 0.03R | 75m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 73.45 | ↑66.47 | 0.7011 | 1.11 | **LOSS** |
| 47 | NET | 04-17 16:45 | 04-17 17:05 | 197.45 | 196.56 | 14 | 2764.3 | -12.46 | -0.45% | 0.64R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 66.15 | ↑195.87 | 0.1597 | 3.96 | **LOSS** |
| 48 | TSM | 04-22 13:40 | 04-22 13:55 | 373.75 | 371.85 | 28 | 10465 | -53.2 | -0.51% | 0.59R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.36 | ↓372.02 | 0.9147 | 1.41 | **LOSS** |
| 49 | ORCL | 04-27 17:20 | 04-27 17:50 | 172.9 | 172.77 | 16 | 2766.4 | -2.08 | -0.08% | 0.11R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 75.19 | ↑170.62 | 0.2326 | 1.73 | **LOSS** |

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

- ⚠️ **Profit factor 0.94 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.67R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:35:08.955Z*
