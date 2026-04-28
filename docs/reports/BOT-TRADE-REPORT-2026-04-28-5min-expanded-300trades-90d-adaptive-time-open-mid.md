# Bot Trade Report — 300 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T21:40:06.616Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** expanded | **Symbols scanned:** 126 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $3082.46 (-3.08%) over 300 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 300 |
| Win rate | 35.67% (107W / 193L) |
| Net P&L | $-3082.46 (-3.08%) |
| Gross profit | $9438.87 |
| Gross loss | $12521.33 |
| Profit factor | 0.75 |
| Avg win | $88.21 |
| Avg loss | $64.88 |
| Payoff ratio | 1.36:1 |
| Expectancy | $-10.27 / trade |
| Max drawdown | 4.47% |
| Sharpe ratio (ann.) | -4.68 |
| Trades / active day | 17.65 |
| Avg confidence | 96.66% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.92R |
| Starting equity | $100,000 |
| Ending equity | $96,917.54 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-3082.46 | MISS |
| Win rate | 45-60% | 35.67% | MISS |
| Profit factor | >= 1.3 | 0.75 | MISS |
| Sharpe (ann.) | > 1.5 | -4.68 | MISS |
| R:R | 2:1 - 3:1 | 1.36:1 | MISS |
| Max drawdown | < 10% | 4.47% | PASS |
| Expectancy | positive | $-10.27 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 300 | 35.67% | $-3082.46 | $-10.27 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| T | 5 | 4 | 80% | $+657.15 | $+131.43 | 9.25 | eligible |
| WMT | 5 | 3 | 60% | $+479.13 | $+95.83 | 8.54 | eligible |
| PEP | 6 | 4 | 66.67% | $+357.29 | $+59.55 | 4.86 | eligible |
| COST | 4 | 3 | 75% | $+242.62 | $+60.66 | 32.43 | watch |
| GOOG | 2 | 1 | 50% | $+237.08 | $+118.54 | 14.22 | watch |
| GM | 2 | 2 | 100% | $+235.9 | $+117.95 | ∞ | watch |
| GOOGL | 3 | 1 | 33.33% | $+233.83 | $+77.94 | 7.89 | watch |
| RIVN | 2 | 1 | 50% | $+229.39 | $+114.7 | 158.12 | watch |
| NET | 1 | 1 | 100% | $+220.16 | $+220.16 | ∞ | watch |
| VRTX | 2 | 2 | 100% | $+207.23 | $+103.62 | ∞ | watch |
| COP | 2 | 2 | 100% | $+182.83 | $+91.42 | ∞ | watch |
| SHOP | 1 | 1 | 100% | $+171.6 | $+171.6 | ∞ | watch |
| HPE | 3 | 1 | 33.33% | $+158.3 | $+52.77 | 3.25 | watch |
| VZ | 5 | 4 | 80% | $+156.19 | $+31.24 | 11.55 | eligible |
| ORCL | 1 | 1 | 100% | $+150.1 | $+150.1 | ∞ | watch |
| CSCO | 6 | 2 | 33.33% | $+147.4 | $+24.57 | 1.59 | throttle |
| DIS | 6 | 4 | 66.67% | $+132.99 | $+22.17 | 2.45 | eligible |
| CRWD | 2 | 1 | 50% | $+132.35 | $+66.18 | 4.21 | watch |
| KO | 1 | 1 | 100% | $+131.76 | $+131.76 | ∞ | watch |
| SLB | 1 | 1 | 100% | $+119.54 | $+119.54 | ∞ | watch |
| BLK | 1 | 1 | 100% | $+117.72 | $+117.72 | ∞ | watch |
| TJX | 3 | 1 | 33.33% | $+96.44 | $+32.15 | 2.18 | watch |
| NVDA | 5 | 2 | 40% | $+90.99 | $+18.2 | 1.78 | eligible |
| SBUX | 1 | 1 | 100% | $+75.9 | $+75.9 | ∞ | watch |
| ETN | 2 | 1 | 50% | $+54.28 | $+27.14 | 10.39 | watch |
| TEAM | 2 | 1 | 50% | $+52.95 | $+26.48 | 12.39 | watch |
| HD | 3 | 2 | 66.67% | $+49.62 | $+16.54 | 6.3 | watch |
| ZS | 2 | 2 | 100% | $+40.7 | $+20.35 | ∞ | watch |
| JPM | 1 | 1 | 100% | $+40.05 | $+40.05 | ∞ | watch |
| LRCX | 4 | 1 | 25% | $+31.78 | $+7.95 | 1.11 | watch |
| SCHW | 3 | 1 | 33.33% | $+30.42 | $+10.14 | 1.62 | watch |
| PM | 3 | 2 | 66.67% | $+29.76 | $+9.92 | 2.2 | watch |
| AAPL | 6 | 3 | 50% | $+28.76 | $+4.79 | 2.8 | eligible |
| WFC | 3 | 2 | 66.67% | $+18.95 | $+6.32 | 1.25 | watch |
| ASML | 4 | 2 | 50% | $+15.37 | $+3.84 | 1.05 | watch |
| ADSK | 1 | 1 | 100% | $+14.7 | $+14.7 | ∞ | watch |
| PFE | 3 | 1 | 33.33% | $+13.54 | $+4.51 | 1.12 | watch |
| RBLX | 3 | 1 | 33.33% | $+9.17 | $+3.06 | 1.17 | watch |
| SMCI | 1 | 1 | 100% | $+4.41 | $+4.41 | ∞ | watch |
| NKE | 3 | 1 | 33.33% | $+1.78 | $+0.59 | 1.03 | watch |
| DE | 2 | 1 | 50% | $+0.7 | $+0.35 | 1.01 | watch |
| TMO | 1 | 0 | 0% | $-2.34 | $-2.34 | 0 | watch |
| DDOG | 1 | 0 | 0% | $-3.64 | $-3.64 | 0 | watch |
| TGT | 5 | 2 | 40% | $-11.04 | $-2.21 | 0.91 | throttle |
| BAC | 3 | 1 | 33.33% | $-12.6 | $-4.2 | 0.88 | watch |
| V | 3 | 1 | 33.33% | $-17.31 | $-5.77 | 0.78 | watch |
| PLTR | 1 | 0 | 0% | $-18.02 | $-18.02 | 0 | watch |
| INTU | 1 | 0 | 0% | $-19.44 | $-19.44 | 0 | watch |
| CL | 2 | 0 | 0% | $-19.82 | $-9.91 | 0 | watch |
| RTX | 5 | 2 | 40% | $-20.35 | $-4.07 | 0.84 | throttle |
| INTC | 1 | 0 | 0% | $-24.75 | $-24.75 | 0 | watch |
| AMGN | 1 | 0 | 0% | $-26.4 | $-26.4 | 0 | watch |
| PG | 1 | 0 | 0% | $-35.4 | $-35.4 | 0 | watch |
| JNJ | 1 | 0 | 0% | $-42.92 | $-42.92 | 0 | watch |
| UBER | 5 | 3 | 60% | $-45.88 | $-9.18 | 0.82 | throttle |
| ADP | 1 | 0 | 0% | $-47.96 | $-47.96 | 0 | watch |
| FTNT | 1 | 0 | 0% | $-51.46 | $-51.46 | 0 | watch |
| CMG | 1 | 0 | 0% | $-52.2 | $-52.2 | 0 | watch |
| CVX | 3 | 0 | 0% | $-53.26 | $-17.75 | 0 | watch |
| TSM | 5 | 2 | 40% | $-57.9 | $-11.58 | 0.6 | throttle |
| ABT | 1 | 0 | 0% | $-58.08 | $-58.08 | 0 | watch |
| CYBR | 1 | 0 | 0% | $-58.45 | $-58.45 | 0 | watch |
| AVGO | 3 | 2 | 66.67% | $-59.08 | $-19.69 | 0.44 | watch |
| MA | 2 | 0 | 0% | $-64.34 | $-32.17 | 0 | watch |
| KLAC | 1 | 0 | 0% | $-67.95 | $-67.95 | 0 | watch |
| MRK | 2 | 1 | 50% | $-69.87 | $-34.93 | 0.48 | watch |
| PYPL | 7 | 4 | 57.14% | $-70.52 | $-10.07 | 0.76 | throttle |
| AMAT | 2 | 1 | 50% | $-73.01 | $-36.51 | 0.01 | watch |
| MSFT | 1 | 0 | 0% | $-75.9 | $-75.9 | 0 | watch |
| HON | 1 | 0 | 0% | $-80.4 | $-80.4 | 0 | watch |
| GE | 4 | 2 | 50% | $-81.93 | $-20.48 | 0.57 | watch |
| NVO | 2 | 0 | 0% | $-84.06 | $-42.03 | 0 | watch |
| UNH | 2 | 0 | 0% | $-86.15 | $-43.07 | 0 | watch |
| ISRG | 2 | 1 | 50% | $-90.46 | $-45.23 | 0.01 | watch |
| MDT | 2 | 1 | 50% | $-92.22 | $-46.11 | 0.44 | watch |
| SNOW | 2 | 1 | 50% | $-97.07 | $-48.53 | 0.25 | watch |
| AMD | 2 | 0 | 0% | $-98.59 | $-49.29 | 0 | watch |
| XOM | 3 | 0 | 0% | $-101.59 | $-33.86 | 0 | watch |
| F | 2 | 1 | 50% | $-109.66 | $-54.83 | 0.16 | watch |
| LOW | 2 | 0 | 0% | $-119.5 | $-59.75 | 0 | watch |
| ARM | 2 | 0 | 0% | $-122.6 | $-61.3 | 0 | watch |
| DELL | 6 | 2 | 33.33% | $-123.1 | $-20.52 | 0.61 | throttle |
| C | 5 | 2 | 40% | $-123.39 | $-24.68 | 0.5 | throttle |
| URI | 2 | 0 | 0% | $-132.4 | $-66.2 | 0 | watch |
| UPS | 2 | 0 | 0% | $-133.02 | $-66.51 | 0 | watch |
| QCOM | 1 | 0 | 0% | $-139.5 | $-139.5 | 0 | watch |
| IBM | 3 | 1 | 33.33% | $-139.57 | $-46.52 | 0.33 | watch |
| OKTA | 2 | 0 | 0% | $-142.75 | $-71.37 | 0 | watch |
| MDB | 2 | 0 | 0% | $-144.33 | $-72.17 | 0 | watch |
| FDX | 2 | 0 | 0% | $-148.34 | $-74.17 | 0 | watch |
| GS | 4 | 1 | 25% | $-148.93 | $-37.23 | 0.23 | watch |
| AXP | 4 | 2 | 50% | $-156.39 | $-39.1 | 0.32 | watch |
| BA | 5 | 2 | 40% | $-174.32 | $-34.86 | 0.24 | throttle |
| CAT | 3 | 0 | 0% | $-177.74 | $-59.25 | 0 | watch |
| MO | 4 | 1 | 25% | $-188.72 | $-47.18 | 0.34 | watch |
| AMZN | 4 | 0 | 0% | $-194.15 | $-48.54 | 0 | watch |
| PANW | 4 | 1 | 25% | $-197.25 | $-49.31 | 0.36 | watch |
| MRVL | 1 | 0 | 0% | $-206.64 | $-206.64 | 0 | watch |
| LLY | 4 | 0 | 0% | $-256.83 | $-64.21 | 0 | watch |
| MS | 3 | 0 | 0% | $-257.51 | $-85.84 | 0 | watch |
| ADBE | 5 | 0 | 0% | $-269.38 | $-53.88 | 0 | throttle |
| TSLA | 3 | 0 | 0% | $-274.61 | $-91.54 | 0 | watch |
| TXN | 4 | 0 | 0% | $-293.81 | $-73.45 | 0 | watch |
| REGN | 3 | 0 | 0% | $-300.44 | $-100.15 | 0 | watch |
| LULU | 4 | 0 | 0% | $-309.21 | $-77.3 | 0 | watch |
| TMUS | 3 | 0 | 0% | $-320.28 | $-106.76 | 0 | watch |
| LMT | 4 | 0 | 0% | $-373.94 | $-93.48 | 0 | watch |
| CRM | 4 | 0 | 0% | $-389.01 | $-97.25 | 0 | watch |
| NFLX | 5 | 1 | 20% | $-443.61 | $-88.72 | 0 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 131 | 38 | 29.01% | $-2136.9 | $-16.31 |
| momentum-pilot | 96 | 42 | 43.75% | $-187.8 | $-1.96 |
| trend | 73 | 27 | 36.99% | $-757.76 | $-10.38 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 22 | 8 | 36.36% | $+38.96 | $+1.77 |
| thinChop | 3 | 2 | 66.67% | $+2.94 | $+0.98 |
| neutral | 275 | 97 | 35.27% | $-3124.36 | $-11.36 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisy-high-beta | 22 | 8 | 36.36% | $+38.96 | $+1.77 |
| thin-chop | 3 | 2 | 66.67% | $+2.94 | $+0.98 |
| neutral | 275 | 97 | 35.27% | $-3124.36 | $-11.36 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | CSCO | 6 | 1.59 | $+24.57 | 0 | 0 | $+0 | 0% | 0 | watch |
| Behavior | noisyHighBeta | 9 | 1.93 | $+27.44 | 13 | 0.34 | $-16 | 0.31% | 0.28 | watch |
| Setup | momentum-pilot | 44 | 0.6 | $-8.24 | 52 | 1.23 | $+3.36 | 0.37% | 0.98 | reject |
| Setup | breakout | 83 | 0.55 | $-25.84 | 48 | 1 | $+0.17 | 1.37% | 0.81 | reject |
| Symbol | TSM | 5 | 0.6 | $-11.58 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | NFLX | 5 | 0 | $-88.72 | 0 | 0 | $+0 | 0% | 0 | reject |
| Behavior | neutral | 168 | 0.64 | $-15.84 | 107 | 0.9 | $-4.34 | 1.86% | 0.71 | reject |
| Time slot | Mid 10:30-11:30 | 180 | 0.69 | $-13.39 | 120 | 0.86 | $-5.6 | 2.12% | 0.69 | reject |
| Setup | trend | 53 | 1.05 | $+1.82 | 20 | 0.26 | $-42.72 | 0.85% | 0.19 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-3676.68 | 0.72 |
| +3 bps/side | $-4865.1 | 0.65 |
| +5 bps/side | $-6053.52 | 0.58 |
| +10 bps/side | $-9024.61 | 0.46 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 106 |
| timeout | 72 |
| stagnation | 40 |
| stop-loss | 33 |
| breakeven-stop | 15 |
| trim-profit-target | 13 |
| trailing-stop | 12 |
| profit-target | 9 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | DDOG | 01-28 14:30 | 01-28 16:00 | 140.85 | 140.81 | 91 | 12817.35 | -3.64 | -0.03% | 0.03R | 90m | market | trailing-stop | trend | breakout | neutral | neutral | 77.43 | ↓140.66 | 0.4728 | 1.94 | **LOSS** |
| 2 | V | 01-28 14:30 | 01-28 14:40 | 327.84 | 325.18 | 7 | 2294.88 | -18.62 | -0.81% | 1.16R | 10m | market | stop-loss | trend | momentum-pilot | thinChop | thin-chop | 71.49 | ↓327.15 | -0.0859 | 3.96 | **LOSS** |
| 3 | AMD | 01-28 14:35 | 01-28 15:00 | 256.05 | 254.66 | 54 | 13826.7 | -75.06 | -0.54% | 0.61R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 73.09 | ↓254.97 | 1.0678 | 1.6 | **LOSS** |
| 4 | ORCL | 01-28 14:35 | 01-28 15:00 | 176.18 | 178.08 | 79 | 13918.22 | +150.1 | +1.08% | 1.54R | 25m | market | trailing-stop | trend | trend | neutral | neutral | 79.75 | ↓175.51 | 0.2987 | 2.75 | **WIN** |
| 5 | SMCI | 01-28 14:35 | 01-28 15:45 | 31.69 | 31.7 | 441 | 13975.29 | +4.41 | +0.03% | 0.03R | 70m | market | trailing-stop | trend | breakout | neutral | neutral | 77.99 | ↓31.57 | 0.1314 | 1.24 | **WIN** |
| 6 | MDB | 01-28 14:35 | 01-28 15:30 | 420.04 | 419.63 | 33 | 13861.32 | -13.53 | -0.1% | 0.13R | 55m | market | breakeven-stop | trend | breakout | neutral | neutral | 77.09 | ↓418.71 | 0.73 | 1.19 | **LOSS** |
| 7 | LRCX | 01-28 14:35 | 01-28 14:55 | 240.43 | 237.39 | 20 | 4808.6 | -60.8 | -1.26% | 1.19R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 80.34 | ↓239.97 | 0.2065 | 2.3 | **LOSS** |
| 8 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 164 | 13948.2 | -206.64 | -1.48% | 1.41R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 9 | ADBE | 01-28 14:55 | 01-28 15:45 | 303.11 | 301.86 | 46 | 13943.06 | -57.5 | -0.41% | 0.53R | 50m | market | early-reversal | trend | breakout | neutral | neutral | 78.13 | ↑300.5 | 1.3288 | 1.54 | **LOSS** |
| 10 | UBER | 01-29 14:30 | 01-29 14:55 | 81.5 | 81.06 | 158 | 12877 | -69.52 | -0.54% | 0.69R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 75.14 | ↓81.14 | 0.0757 | 2.67 | **LOSS** |
| 11 | DELL | 01-29 14:30 | 01-29 14:50 | 118.05 | 117.3 | 40 | 4722 | -30 | -0.64% | 0.65R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 50.74 | ↓117.67 | -0.1485 | 2.25 | **LOSS** |
| 12 | RTX | 01-29 14:30 | 01-29 15:25 | 202.29 | 201.81 | 69 | 13958.01 | -33.12 | -0.24% | 0.32R | 55m | market | stagnation | trend | trend | neutral | neutral | 64.86 | ↓202.15 | 0.1642 | 1.01 | **LOSS** |
| 13 | VZ | 01-29 14:30 | 01-29 16:10 | 39.76 | 40.18 | 28 | 2226.56 | +11.76 | +1.06% | 1.51R | 100m | market | trim-profit-target | trend | momentum-pilot | thinChop | thin-chop | 70.34 | ↑39.67 | -0.027 | 1.52 | **WIN** |
| 14 | VZ | 01-29 14:30 | 01-29 16:15 | 39.76 | 40.11 | 28 | 2226.56 | +9.8 | +0.88% | 1.26R | 105m | market | timeout | trend | momentum-pilot | thinChop | thin-chop | 70.34 | ↑39.67 | -0.027 | 1.52 | **WIN** |
| 15 | TMUS | 01-29 14:30 | 01-29 14:40 | 188.78 | 186.93 | 68 | 12837.04 | -125.8 | -0.98% | 1.4R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 76.27 | ↓187.98 | -0.0518 | 1.71 | **LOSS** |
| 16 | TSM | 01-29 14:35 | 01-29 14:55 | 342.64 | 340.13 | 13 | 4454.32 | -32.63 | -0.73% | 0.82R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | neutral | 44.44 | ↓340.55 | -0.4718 | 2.97 | **LOSS** |
| 17 | MRK | 01-29 14:40 | 01-29 16:25 | 108.19 | 109.03 | 77 | 8330.63 | +64.68 | +0.78% | 1.11R | 105m | market | timeout | trend | breakout | neutral | neutral | 98.42 | ↑107.8 | 0.2874 | 1.19 | **WIN** |
| 18 | BAC | 01-29 14:45 | 01-29 15:50 | 52.31 | 52.21 | 267 | 13966.77 | -26.7 | -0.19% | 0.24R | 65m | market | stagnation | trend | breakout | neutral | neutral | 74.1 | ↓52.25 | 0.1812 | 1.95 | **LOSS** |
| 19 | AMAT | 01-29 14:45 | 01-29 15:00 | 340.84 | 335.55 | 14 | 4771.76 | -74.06 | -1.55% | 1.42R | 15m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 57.18 | ↓341.2 | 0.9532 | 1.65 | **LOSS** |
| 20 | T | 01-29 14:45 | 01-29 16:30 | 24.65 | 24.92 | 567 | 13976.55 | +153.09 | +1.1% | 0.85R | 105m | market | timeout | trend | breakout | neutral | neutral | 73.17 | ↑24.62 | 0.1166 | 1.43 | **WIN** |
| 21 | NVDA | 01-30 14:30 | 01-30 14:55 | 192.48 | 191.52 | 25 | 4812 | -24 | -0.5% | 0.68R | 25m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 56.75 | ↓191.9 | 0.1481 | 2.81 | **LOSS** |
| 22 | AVGO | 01-30 14:30 | 01-30 14:55 | 335.46 | 332.87 | 41 | 13753.86 | -106.19 | -0.77% | 0.79R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 79.92 | ↓333.96 | 0.8405 | 2.33 | **LOSS** |
| 23 | ADBE | 01-30 14:30 | 01-30 15:50 | 293.53 | 293.1 | 47 | 13795.91 | -20.21 | -0.15% | 0.21R | 80m | market | stagnation | trend | trend | neutral | neutral | 77.47 | ↓292.59 | 0.6962 | 1.23 | **LOSS** |
| 24 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.64 | 1024.79 | 13 | 13489.32 | -167.05 | -1.24% | 1.77R | 15m | market | stop-loss | trend | trend | neutral | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 25 | DIS | 01-30 14:30 | 01-30 15:20 | 112.14 | 112.05 | 43 | 4822.02 | -3.87 | -0.08% | 0.11R | 50m | market | stagnation | trend | momentum-pilot | neutral | neutral | 71.2 | ↓111.79 | 0.2108 | 2.48 | **LOSS** |
| 26 | LRCX | 01-30 14:30 | 01-30 14:55 | 248.93 | 243.79 | 19 | 4729.67 | -97.66 | -2.06% | 1.61R | 25m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 74 | ↓248.02 | 0.8072 | 2.28 | **LOSS** |
| 27 | C | 01-30 14:30 | 01-30 16:15 | 115.54 | 115.63 | 121 | 13980.34 | +10.89 | +0.08% | 0.11R | 105m | market | timeout | trend | trend | neutral | neutral | 74.33 | ↓115.19 | 0.2345 | 3.13 | **WIN** |
| 28 | NFLX | 01-30 14:35 | 01-30 14:55 | 83.7 | 83.23 | 167 | 13977.9 | -78.49 | -0.56% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | neutral | 76.05 | ↓83.35 | 0.1084 | 1.89 | **LOSS** |
| 29 | SNOW | 01-30 14:35 | 01-30 14:45 | 202.99 | 200.31 | 48 | 9743.52 | -128.64 | -1.32% | 1.33R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 82.3 | ↓202.41 | 0.3186 | 1.73 | **LOSS** |
| 30 | CAT | 01-30 14:35 | 01-30 15:00 | 671.65 | 667.17 | 20 | 13433 | -89.6 | -0.67% | 0.56R | 25m | market | early-reversal | breakout | breakout | neutral | neutral | 74.09 | ↓667.39 | 0.2727 | 2.1 | **LOSS** |
| 31 | SCHW | 01-30 14:35 | 01-30 15:25 | 104.52 | 104.08 | 93 | 9720.36 | -40.92 | -0.42% | 0.6R | 50m | market | early-reversal | trend | breakout | neutral | neutral | 89.29 | ↓104.27 | 0.1984 | 1.44 | **LOSS** |
| 32 | T | 01-30 14:35 | 01-30 16:20 | 25.42 | 25.81 | 508 | 12913.36 | +198.12 | +1.53% | 1.32R | 105m | market | timeout | trend | breakout | neutral | neutral | 73.71 | ↑25.36 | 0.133 | 1.49 | **WIN** |
| 33 | CVX | 01-30 14:40 | 01-30 15:30 | 173.44 | 173.11 | 80 | 13875.2 | -26.4 | -0.19% | 0.19R | 50m | market | stagnation | breakout | breakout | neutral | neutral | 65.51 | ↑172.74 | -0.0852 | 1.62 | **LOSS** |
| 34 | TSM | 01-30 14:45 | 01-30 15:05 | 338.83 | 337.1 | 14 | 4743.62 | -24.22 | -0.51% | 0.52R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 59.51 | ↓338.02 | -0.0076 | 2.19 | **LOSS** |
| 35 | NVDA | 01-30 15:15 | 01-30 16:05 | 193.08 | 192.95 | 72 | 13901.76 | -9.36 | -0.07% | 0.07R | 50m | market | stagnation | trend | trend | neutral | neutral | 79.21 | ↑192.21 | 0.3686 | 1.84 | **LOSS** |
| 36 | TJX | 01-30 15:15 | 01-30 16:00 | 148.77 | 148.07 | 94 | 13984.38 | -65.8 | -0.47% | 0.67R | 45m | market | early-reversal | trend | trend | neutral | neutral | 67.4 | ↓148 | 0.3579 | 1.35 | **LOSS** |
| 37 | COP | 01-30 15:15 | 01-30 17:00 | 103.31 | 103.6 | 39 | 4029.09 | +11.31 | +0.28% | 0.25R | 105m | market | timeout | mixed | momentum-pilot | neutral | neutral | 47.33 | ↑102.81 | -0.3812 | 1.52 | **WIN** |
| 38 | TGT | 01-30 15:20 | 01-30 17:05 | 104.09 | 104.05 | 134 | 13948.06 | -5.36 | -0.04% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **LOSS** |
| 39 | AAPL | 02-02 14:30 | 02-02 15:55 | 262.84 | 262.64 | 18 | 4731.12 | -3.6 | -0.08% | 0.06R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | neutral | 59.03 | ↓262.08 | 0.3644 | 3.06 | **LOSS** |
| 40 | NFLX | 02-02 14:30 | 02-02 15:15 | 83.8 | 83.81 | 58 | 4860.4 | +0.58 | +0.01% | 0.01R | 45m | market | trailing-stop | trend | momentum-pilot | neutral | neutral | 62.93 | ↓83.71 | -0.0072 | 3.13 | **WIN** |
| 41 | ADBE | 02-02 14:30 | 02-02 15:20 | 298 | 297.81 | 43 | 12814 | -8.17 | -0.06% | 0.09R | 50m | market | stagnation | trend | breakout | neutral | neutral | 77.28 | ↑296.69 | 0.3028 | 1.34 | **LOSS** |
| 42 | ARM | 02-02 14:30 | 02-02 14:50 | 106.92 | 105.76 | 85 | 9088.2 | -98.6 | -1.08% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 59.78 | ↓106.54 | -0.0211 | 2.48 | **LOSS** |
| 43 | SHOP | 02-02 14:30 | 02-02 16:15 | 133.45 | 135.1 | 104 | 13878.8 | +171.6 | +1.24% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | neutral | 57.44 | ↑132.91 | -0.3756 | 2.24 | **WIN** |
| 44 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | noisyHighBeta | noisy-high-beta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 45 | PYPL | 02-02 14:30 | 02-02 16:00 | 53 | 52.91 | 264 | 13992 | -23.76 | -0.17% | 0.24R | 90m | market | stagnation | trend | trend | neutral | neutral | 70.67 | ↓52.79 | 0.1068 | 2.22 | **LOSS** |
| 46 | CAT | 02-02 14:30 | 02-02 14:55 | 674.77 | 670.09 | 18 | 12145.86 | -84.24 | -0.69% | 0.76R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 76.37 | ↓672.84 | 2.0202 | 1.97 | **LOSS** |
| 47 | LLY | 02-02 14:30 | 02-02 15:30 | 1047.39 | 1042.99 | 4 | 4189.56 | -17.6 | -0.42% | 0.58R | 60m | market | stagnation | trend | momentum-pilot | neutral | neutral | 49.26 | ↓1045.42 | -0.6762 | 2.11 | **LOSS** |
| 48 | WMT | 02-02 14:30 | 02-02 16:15 | 119.98 | 121.91 | 116 | 13917.68 | +223.88 | +1.61% | 2.3R | 105m | market | timeout | trend | trend | neutral | neutral | 66.44 | ↑119.64 | 0.2594 | 1.15 | **WIN** |
| 49 | V | 02-02 14:30 | 02-02 16:15 | 330.2 | 331.83 | 38 | 12547.6 | +61.94 | +0.49% | 0.58R | 105m | market | timeout | trend | breakout | neutral | neutral | 73.79 | ↑328.44 | 0.0692 | 1.58 | **WIN** |
| 50 | MA | 02-02 14:30 | 02-02 15:45 | 548.86 | 548.4 | 23 | 12623.78 | -10.58 | -0.08% | 0.11R | 75m | market | stagnation | trend | breakout | neutral | neutral | 74.18 | ↓546.12 | 0.1607 | 1.75 | **LOSS** |
| 51 | TXN | 02-02 14:30 | 02-02 14:55 | 216.86 | 215.76 | 22 | 4770.92 | -24.2 | -0.51% | 0.71R | 25m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 63.03 | ↓216.53 | 0.2811 | 5.14 | **LOSS** |
| 52 | IBM | 02-02 14:30 | 02-02 14:55 | 310.4 | 308.24 | 45 | 13968 | -97.2 | -0.7% | 0.99R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 73.61 | ↓308.99 | 0.7286 | 1.51 | **LOSS** |
| 53 | T | 02-02 14:30 | 02-02 16:15 | 26.43 | 26.5 | 531 | 14034.33 | +37.17 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | neutral | 78.45 | ↑26.39 | 0.071 | 2.13 | **WIN** |
| 54 | COST | 02-02 14:35 | 02-02 16:20 | 946.61 | 954.51 | 14 | 13252.54 | +110.6 | +0.83% | 1.19R | 105m | market | timeout | trend | trend | neutral | neutral | 60.99 | ↑941.54 | 1.0978 | 1.01 | **WIN** |
| 55 | TGT | 02-02 14:35 | 02-02 14:55 | 106.31 | 105.52 | 131 | 13926.61 | -103.49 | -0.74% | 0.95R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 78.8 | ↓105.85 | 0.3038 | 1.53 | **LOSS** |
| 56 | CRM | 02-02 14:40 | 02-02 15:30 | 215.48 | 215.18 | 64 | 13790.72 | -19.2 | -0.14% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 57 | OKTA | 02-02 14:40 | 02-02 15:05 | 86.4 | 86.03 | 162 | 13996.8 | -59.94 | -0.43% | 0.41R | 25m | market | early-reversal | breakout | breakout | neutral | neutral | 60.95 | ↑85.87 | -0.0182 | 1.43 | **LOSS** |
| 58 | CSCO | 02-02 14:40 | 02-02 16:25 | 79.26 | 81.1 | 176 | 13949.76 | +323.84 | +2.32% | 3.14R | 105m | market | timeout | trend | breakout | neutral | neutral | 78 | ↑78.62 | 0.1239 | 1.18 | **WIN** |
| 59 | ABT | 02-02 14:40 | 02-02 15:20 | 110.84 | 110.18 | 88 | 9753.92 | -58.08 | -0.6% | 0.77R | 40m | market | early-reversal | trend | breakout | neutral | neutral | 83.27 | ↓110.13 | 0.2703 | 1.5 | **LOSS** |
| 60 | DELL | 02-02 14:45 | 02-02 16:30 | 116.32 | 116.8 | 120 | 13958.4 | +57.6 | +0.41% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 75.25 | ↓115.99 | 0.6109 | 1.4 | **WIN** |
| 61 | AXP | 02-02 14:45 | 02-02 15:05 | 354.55 | 350.76 | 39 | 13827.45 | -147.81 | -1.07% | 1.14R | 20m | market | early-reversal | trend | trend | neutral | neutral | 66.82 | ↓353.58 | 1.741 | 1.23 | **LOSS** |
| 62 | REGN | 02-02 14:45 | 02-02 15:05 | 760.32 | 753.91 | 12 | 9123.84 | -76.92 | -0.84% | 0.82R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 93.81 | ↓754.77 | 2.0486 | 1.98 | **LOSS** |
| 63 | CRWD | 02-02 14:50 | 02-02 15:40 | 446.03 | 444.7 | 31 | 13826.93 | -41.23 | -0.3% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | neutral | 68.88 | ↑442.27 | -0.228 | 1.24 | **LOSS** |
| 64 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | trend | breakout | neutral | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 65 | TSM | 02-02 15:00 | 02-02 15:55 | 334.41 | 339.16 | 7 | 4681.74 | +33.25 | +1.42% | 1.38R | 55m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 66 | TSM | 02-02 15:00 | 02-02 16:45 | 334.41 | 342.03 | 7 | 4681.74 | +53.34 | +2.28% | 2.21R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 67.28 | ↑332.66 | 0.4531 | 1.52 | **WIN** |
| 67 | AMZN | 02-02 15:15 | 02-02 15:40 | 245.28 | 244.31 | 57 | 13980.96 | -55.29 | -0.4% | 0.34R | 25m | market | early-reversal | trend | trend | neutral | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 68 | ETN | 02-02 15:15 | 02-02 17:00 | 355.27 | 356.81 | 39 | 13855.53 | +60.06 | +0.43% | 0.43R | 105m | market | timeout | trend | trend | neutral | neutral | 65.18 | ↑352.56 | 0.7456 | 1.23 | **WIN** |
| 69 | TXN | 02-02 15:20 | 02-02 15:50 | 220.82 | 219.91 | 63 | 13911.66 | -57.33 | -0.41% | 0.32R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 81.4 | ↑217.49 | 1.0554 | 1.69 | **LOSS** |
| 70 | IBM | 02-02 15:20 | 02-02 17:05 | 313.22 | 314.81 | 44 | 13781.68 | +69.96 | +0.51% | 0.42R | 105m | market | timeout | trend | breakout | neutral | neutral | 71.49 | ↑310.37 | 1.5654 | 1.88 | **WIN** |
| 71 | LULU | 02-02 15:20 | 02-02 16:05 | 178.9 | 178.28 | 78 | 13954.2 | -48.36 | -0.35% | 0.31R | 45m | market | early-reversal | trend | breakout | neutral | neutral | 75.17 | ↑177.5 | 1.0062 | 2.02 | **LOSS** |
| 72 | REGN | 02-02 15:25 | 02-02 16:15 | 758.72 | 754.33 | 18 | 13656.96 | -79.02 | -0.58% | 0.44R | 50m | market | early-reversal | trend | trend | neutral | neutral | 73.77 | ↓756.64 | 4.0852 | 1.03 | **LOSS** |
| 73 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 74 | COST | 02-03 14:30 | 02-03 16:15 | 978.12 | 984.77 | 14 | 13693.68 | +93.1 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | neutral | 78.19 | ↑974.38 | 1.8119 | 1.39 | **WIN** |
| 75 | HD | 02-03 14:30 | 02-03 15:45 | 381.74 | 385.43 | 12 | 4580.88 | +44.28 | +0.97% | 1.39R | 75m | market | trailing-stop | trend | momentum-pilot | neutral | neutral | 68.39 | ↓380.38 | 0.6396 | 1.65 | **WIN** |
| 76 | SBUX | 02-03 14:30 | 02-03 16:15 | 92.92 | 93.47 | 138 | 12822.96 | +75.9 | +0.59% | 0.84R | 105m | market | timeout | trend | breakout | neutral | neutral | 71.81 | ↓92.41 | -0.0022 | 2.23 | **WIN** |
| 77 | TGT | 02-03 14:30 | 02-03 15:40 | 112.04 | 111.89 | 115 | 12884.6 | -17.25 | -0.13% | 0.16R | 70m | market | stagnation | trend | breakout | neutral | neutral | 81.34 | ↓111.23 | 0.1936 | 1.18 | **LOSS** |
| 78 | MS | 02-03 14:30 | 02-03 14:55 | 187.52 | 186 | 68 | 12751.36 | -103.36 | -0.81% | 1.16R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 75 | ↓187.08 | 0.2164 | 1.21 | **LOSS** |
| 79 | CSCO | 02-03 14:30 | 02-03 14:50 | 82.74 | 82.17 | 155 | 12824.7 | -88.35 | -0.69% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.78 | ↓82.35 | 0.1337 | 2.83 | **LOSS** |
| 80 | AMGN | 02-03 14:30 | 02-03 15:20 | 347.42 | 346.76 | 40 | 13896.8 | -26.4 | -0.19% | 0.27R | 50m | market | stagnation | trend | trend | neutral | neutral | 75.73 | ↓344.99 | 0.4356 | 2.29 | **LOSS** |
| 81 | DE | 02-03 14:30 | 02-03 16:15 | 538.14 | 541.49 | 26 | 13991.64 | +87.1 | +0.62% | 0.89R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.85 | ↓536.58 | 0.4643 | 1.18 | **WIN** |
| 82 | PEP | 02-03 14:30 | 02-03 15:20 | 158.17 | 162.61 | 88 | 13918.96 | +390.72 | +2.81% | 3.02R | 50m | market | profit-target | trend | breakout | neutral | neutral | 67.94 | ↑157.82 | 0.1478 | 4.67 | **WIN** |
| 83 | TSM | 02-03 14:35 | 02-03 14:55 | 344.32 | 338.06 | 14 | 4820.48 | -87.64 | -1.82% | 2.46R | 20m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 66.54 | ↓344.48 | 0.0747 | 2.27 | **LOSS** |
| 84 | BA | 02-03 14:35 | 02-03 14:55 | 237.62 | 234.28 | 15 | 3564.3 | -50.1 | -1.41% | 1.48R | 20m | market | stop-loss | breakout | momentum-pilot | neutral | neutral | 65.95 | ↓237.29 | 0.0182 | 3.6 | **LOSS** |
| 85 | LMT | 02-03 14:35 | 02-03 14:55 | 643.82 | 640.93 | 21 | 13520.22 | -60.69 | -0.45% | 0.62R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 69.78 | ↓641.52 | 0.8183 | 1.17 | **LOSS** |
| 86 | RTX | 02-03 14:35 | 02-03 15:00 | 203.28 | 202.02 | 68 | 13823.04 | -85.68 | -0.62% | 0.89R | 25m | market | early-reversal | trend | trend | neutral | neutral | 75.94 | ↓203.04 | 0.5681 | 3.28 | **LOSS** |
| 87 | KO | 02-03 14:35 | 02-03 16:20 | 76.3 | 77.02 | 183 | 13962.9 | +131.76 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | neutral | 74.73 | ↑75.84 | 0.1847 | 1.46 | **WIN** |
| 88 | LOW | 02-03 14:40 | 02-03 15:00 | 275.1 | 273.66 | 50 | 13755 | -72 | -0.52% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.5 | ↓272.86 | 1.0035 | 1.15 | **LOSS** |
| 89 | HON | 02-03 14:40 | 02-03 15:00 | 230.57 | 229.23 | 60 | 13834.2 | -80.4 | -0.58% | 0.83R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.94 | ↓229.59 | 0.6262 | 1.56 | **LOSS** |
| 90 | PM | 02-03 15:05 | 02-03 15:25 | 181.07 | 180.15 | 27 | 4888.89 | -24.84 | -0.51% | 0.68R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 56.56 | ↑179.82 | 0.32 | 1.73 | **LOSS** |
| 91 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 35 | 9617.3 | -0.35 | 0% | 0R | 40m | market | breakeven-stop | trend | breakout | neutral | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 92 | COST | 02-04 14:30 | 02-04 15:40 | 986.48 | 984.55 | 4 | 3945.92 | -7.72 | -0.2% | 0.29R | 70m | market | stagnation | mixed | momentum-pilot | neutral | neutral | 77.26 | ↓987.08 | -0.7854 | 2.93 | **LOSS** |
| 93 | WMT | 02-04 14:30 | 02-04 15:15 | 128.37 | 127.86 | 109 | 13992.33 | -55.59 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | neutral | 74.11 | ↓128.24 | 0.2366 | 1.22 | **LOSS** |
| 94 | DELL | 02-04 14:30 | 02-04 15:20 | 119.17 | 118.95 | 108 | 12870.36 | -23.76 | -0.18% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | neutral | 70.68 | ↓118.94 | 0.1636 | 3.47 | **LOSS** |
| 95 | CSCO | 02-04 14:30 | 02-04 14:55 | 84.03 | 83.65 | 166 | 13948.98 | -63.08 | -0.45% | 0.57R | 25m | market | early-reversal | trend | trend | neutral | neutral | 77.46 | ↓83.91 | 0.2551 | 1.26 | **LOSS** |
| 96 | MDT | 02-04 14:30 | 02-04 14:40 | 105.07 | 103.71 | 122 | 12818.54 | -165.92 | -1.29% | 1.84R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 70.36 | ↓104.65 | 0.0048 | 3.41 | **LOSS** |
| 97 | GM | 02-04 14:30 | 02-04 16:15 | 86.77 | 87.15 | 161 | 13969.97 | +61.18 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | neutral | 75.06 | ↑86.59 | 0.0785 | 1.26 | **WIN** |
| 98 | HPE | 02-04 14:35 | 02-04 15:30 | 22.38 | 22.29 | 625 | 13987.5 | -56.25 | -0.4% | 0.37R | 55m | market | stagnation | trend | breakout | neutral | neutral | 78.38 | ↓22.24 | 0.0824 | 1.3 | **LOSS** |
| 99 | ETN | 02-04 14:35 | 02-04 15:00 | 370.36 | 370.19 | 34 | 12592.24 | -5.78 | -0.05% | 0.04R | 25m | market | trailing-stop | trend | breakout | neutral | neutral | 71.33 | ↓366.87 | 1.0971 | 1.15 | **LOSS** |
| 100 | LOW | 02-04 14:40 | 02-04 15:30 | 279.21 | 278.26 | 50 | 13960.5 | -47.5 | -0.34% | 0.45R | 50m | market | stagnation | trend | breakout | neutral | neutral | 78.29 | ↓278.01 | 0.8475 | 2.63 | **LOSS** |
| 101 | C | 02-04 14:40 | 02-04 15:00 | 119.58 | 118.61 | 117 | 13990.86 | -113.49 | -0.81% | 0.95R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.42 | ↓119.01 | 0.6588 | 1.78 | **LOSS** |
| 102 | MRK | 02-04 14:40 | 02-04 15:05 | 119.09 | 117.94 | 117 | 13933.53 | -134.55 | -0.97% | 0.73R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 69.6 | ↓118.56 | 0.451 | 2.61 | **LOSS** |
| 103 | XOM | 02-04 14:45 | 02-04 15:10 | 145.58 | 144.79 | 33 | 4804.14 | -26.07 | -0.54% | 0.54R | 25m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 63.92 | ↓145.36 | 0.5755 | 1.47 | **LOSS** |
| 104 | PFE | 02-04 14:45 | 02-04 15:50 | 26.4 | 26.33 | 530 | 13992 | -37.1 | -0.27% | 0.21R | 65m | market | stagnation | trend | breakout | neutral | neutral | 69.5 | ↓26.2 | 0.1187 | 2.27 | **LOSS** |
| 105 | VRTX | 02-04 14:45 | 02-04 16:30 | 473.32 | 475.19 | 29 | 13726.28 | +54.23 | +0.4% | 0.55R | 105m | market | timeout | trend | breakout | neutral | neutral | 81.39 | ↑472.58 | 1.516 | 1.55 | **WIN** |
| 106 | PEP | 02-04 14:45 | 02-04 15:10 | 167.14 | 166.12 | 84 | 14039.76 | -85.68 | -0.61% | 0.51R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 72.57 | ↓166.55 | 1.2566 | 1.57 | **LOSS** |
| 107 | NFLX | 02-04 15:20 | 02-04 16:05 | 81.08 | 80.67 | 172 | 13945.76 | -70.52 | -0.51% | 0.46R | 45m | market | early-reversal | trend | breakout | neutral | neutral | 72.73 | ↑80 | 0.1814 | 2.04 | **LOSS** |
| 108 | NFLX | 02-05 14:30 | 02-05 15:00 | 82.84 | 82.27 | 154 | 12757.36 | -87.78 | -0.69% | 0.66R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 81.19 | ↓82.33 | 0.142 | 4.92 | **LOSS** |
| 109 | ISRG | 02-05 14:30 | 02-05 14:50 | 485.79 | 482.29 | 26 | 12630.54 | -91 | -0.72% | 0.9R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 70.26 | ↓484.94 | 0.9309 | 1.56 | **LOSS** |
| 110 | REGN | 02-05 14:30 | 02-05 15:05 | 784.81 | 776.31 | 17 | 13341.77 | -144.5 | -1.08% | 1.54R | 35m | market | stop-loss | trend | trend | neutral | neutral | 68.23 | ↓784.06 | 1.0318 | 1.58 | **LOSS** |
| 111 | TMUS | 02-05 14:30 | 02-05 14:40 | 204.54 | 202.78 | 68 | 13908.72 | -119.68 | -0.86% | 1.23R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 64.04 | ↓203.98 | 0.1946 | 1.56 | **LOSS** |
| 112 | PFE | 02-05 14:35 | 02-05 14:55 | 27.11 | 26.97 | 516 | 13988.76 | -72.24 | -0.52% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | neutral | 70.68 | ↓26.95 | 0.0691 | 1.08 | **LOSS** |
| 113 | MDT | 02-05 14:35 | 02-05 16:20 | 103.62 | 104.17 | 134 | 13885.08 | +73.7 | +0.53% | 0.73R | 105m | market | timeout | trend | breakout | neutral | neutral | 63.24 | ↑103.48 | 0.0991 | 4.48 | **WIN** |
| 114 | ASML | 02-05 14:40 | 02-05 15:00 | 1363.13 | 1340.76 | 10 | 13631.3 | -223.7 | -1.64% | 1.58R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 66.64 | ↓1349.73 | 4.9221 | 2.54 | **LOSS** |
| 115 | BA | 02-05 14:40 | 02-05 15:00 | 239.36 | 237.33 | 43 | 10292.48 | -87.29 | -0.85% | 0.89R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 72.21 | ↓236.76 | 1.32 | 1.27 | **LOSS** |
| 116 | KLAC | 02-05 14:40 | 02-05 15:00 | 1328.98 | 1315.39 | 5 | 6644.9 | -67.95 | -1.02% | 0.84R | 20m | market | early-reversal | trend | trend | noisyHighBeta | noisy-high-beta | 59.75 | ↓1308.92 | 4.274 | 1.07 | **LOSS** |
| 117 | OKTA | 02-05 14:40 | 02-05 15:00 | 84.08 | 83.17 | 91 | 7651.28 | -82.81 | -1.08% | 0.99R | 20m | market | early-reversal | trend | trend | noisyHighBeta | noisy-high-beta | 65.04 | ↓83.59 | 0.4383 | 1.38 | **LOSS** |
| 118 | NVDA | 02-05 14:45 | 02-05 14:55 | 176.85 | 173.78 | 27 | 4774.95 | -82.89 | -1.74% | 1.45R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 51.22 | ↓175.33 | 0.0681 | 2.53 | **LOSS** |
| 119 | WMT | 02-05 14:45 | 02-05 15:40 | 128.85 | 128.64 | 38 | 4896.3 | -7.98 | -0.16% | 0.21R | 55m | market | stagnation | trend | momentum-pilot | neutral | neutral | 57.19 | ↓128.51 | -0.0126 | 1.55 | **LOSS** |
| 120 | TMUS | 02-05 15:05 | 02-05 15:40 | 203.99 | 202.89 | 68 | 13871.32 | -74.8 | -0.54% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | neutral | 59.76 | ↓203.38 | 0.2826 | 1.12 | **LOSS** |
| 121 | DE | 02-05 15:10 | 02-05 15:30 | 573.3 | 569.7 | 24 | 13759.2 | -86.4 | -0.63% | 0.72R | 20m | market | early-reversal | trend | trend | neutral | neutral | 68.97 | ↓570.9 | 1.4758 | 1.29 | **LOSS** |
| 122 | PEP | 02-05 15:10 | 02-05 16:00 | 167.35 | 167.11 | 29 | 4853.15 | -6.96 | -0.14% | 0.15R | 50m | market | stagnation | trend | momentum-pilot | neutral | neutral | 61.21 | ↑166.58 | 0.1133 | 4.05 | **LOSS** |
| 123 | MO | 02-05 15:10 | 02-05 15:35 | 66.19 | 65.61 | 196 | 12973.24 | -113.68 | -0.88% | 0.96R | 25m | market | early-reversal | trend | trend | neutral | neutral | 68.84 | ↓65.54 | 0.1397 | 1.03 | **LOSS** |
| 124 | CL | 02-05 15:10 | 02-05 16:25 | 94.63 | 94.61 | 41 | 3879.83 | -0.82 | -0.02% | 0.02R | 75m | market | breakeven-stop | mixed | momentum-pilot | neutral | neutral | 44.98 | ↓94.08 | -0.2125 | 1.48 | **LOSS** |
| 125 | JNJ | 02-05 15:25 | 02-05 16:20 | 238.82 | 238.08 | 58 | 13851.56 | -42.92 | -0.31% | 0.39R | 55m | market | early-reversal | trend | trend | neutral | neutral | 75.62 | ↓238.1 | 1.0187 | 1.54 | **LOSS** |
| 126 | NFLX | 02-06 14:30 | 02-06 14:45 | 82.12 | 80.9 | 170 | 13960.4 | -207.4 | -1.49% | 1.82R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 71.93 | ↓81.73 | 0.0306 | 4.14 | **LOSS** |
| 127 | CRM | 02-06 14:30 | 02-06 14:50 | 192.71 | 189.84 | 66 | 12718.86 | -189.42 | -1.49% | 1.57R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 70.23 | ↓192.01 | 0.0981 | 1.32 | **LOSS** |
| 128 | PYPL | 02-06 14:30 | 02-06 14:45 | 40.46 | 39.76 | 345 | 13958.7 | -241.5 | -1.73% | 1.41R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 68.88 | ↓40.34 | 0.0571 | 2.79 | **LOSS** |
| 129 | BAC | 02-06 14:30 | 02-06 16:15 | 55.78 | 56.18 | 231 | 12885.18 | +92.4 | +0.72% | 1.03R | 105m | market | timeout | trend | breakout | neutral | neutral | 81.27 | ↑55.73 | 0.075 | 1.61 | **WIN** |
| 130 | UNH | 02-06 14:30 | 02-06 15:15 | 272.2 | 270.83 | 47 | 12793.4 | -64.39 | -0.5% | 0.57R | 45m | market | early-reversal | trend | breakout | neutral | neutral | 77.88 | ↓270.76 | 0.4454 | 2.09 | **LOSS** |
| 131 | WMT | 02-06 14:30 | 02-06 16:15 | 128.34 | 129.87 | 38 | 4876.92 | +58.14 | +1.19% | 1.7R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 71.43 | ↑127.87 | 0.0936 | 1.72 | **WIN** |
| 132 | DIS | 02-06 14:30 | 02-06 14:50 | 107.18 | 106.45 | 120 | 12861.6 | -87.6 | -0.68% | 0.91R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 74.15 | ↓106.75 | 0.1269 | 1.18 | **LOSS** |
| 133 | MA | 02-06 14:30 | 02-06 14:45 | 554.65 | 547.93 | 8 | 4437.2 | -53.76 | -1.21% | 1.73R | 15m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 65.8 | ↓554.08 | 0.2184 | 2.14 | **LOSS** |
| 134 | NKE | 02-06 14:30 | 02-06 15:30 | 63.66 | 63.55 | 202 | 12859.32 | -22.22 | -0.17% | 0.23R | 60m | market | stagnation | trend | breakout | neutral | neutral | 79.1 | ↓63.45 | 0.1558 | 2.85 | **LOSS** |
| 135 | SCHW | 02-06 14:30 | 02-06 15:50 | 104.07 | 104.01 | 134 | 13945.38 | -8.04 | -0.06% | 0.07R | 80m | market | stagnation | trend | breakout | neutral | neutral | 69.28 | ↓103.77 | -0.0437 | 1.37 | **LOSS** |
| 136 | PEP | 02-06 14:30 | 02-06 15:25 | 168.54 | 168.59 | 29 | 4887.66 | +1.45 | +0.03% | 0.04R | 55m | market | breakeven-stop | trend | momentum-pilot | neutral | neutral | 74.04 | ↓168.09 | 0.1589 | 2.76 | **WIN** |
| 137 | TGT | 02-06 14:35 | 02-06 16:20 | 113.72 | 114.46 | 122 | 13873.84 | +90.28 | +0.65% | 0.67R | 105m | market | timeout | trend | breakout | neutral | neutral | 77.41 | ↑113.18 | 0.409 | 1.59 | **WIN** |
| 138 | HPE | 02-06 14:40 | 02-06 16:25 | 23.21 | 23.59 | 602 | 13972.42 | +228.76 | +1.64% | 1.38R | 105m | market | timeout | trend | breakout | neutral | neutral | 70.47 | ↑23.13 | 0.111 | 1.13 | **WIN** |
| 139 | IBM | 02-06 14:40 | 02-06 15:00 | 295.16 | 292.77 | 47 | 13872.52 | -112.33 | -0.81% | 0.9R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓293.31 | 0.7165 | 1.68 | **LOSS** |
| 140 | MS | 02-06 14:40 | 02-06 15:00 | 180.57 | 179.36 | 39 | 7042.23 | -47.19 | -0.67% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | noisy-high-beta | 76.65 | ↓179.84 | 0.6743 | 1.1 | **LOSS** |
| 141 | WFC | 02-06 14:40 | 02-06 16:10 | 93.2 | 93.85 | 75 | 13980 | +48.75 | +0.7% | 0.91R | 90m | market | trim-profit-target | trend | trend | neutral | neutral | 77.05 | ↑93.12 | 0.2279 | 1.95 | **WIN** |
| 142 | WFC | 02-06 14:40 | 02-06 16:25 | 93.2 | 93.8 | 75 | 13980 | +45 | +0.64% | 0.83R | 105m | market | timeout | trend | trend | neutral | neutral | 77.05 | ↑93.12 | 0.2279 | 1.95 | **WIN** |
| 143 | VRTX | 02-06 14:40 | 02-06 16:25 | 466.12 | 471.22 | 30 | 13983.6 | +153 | +1.09% | 1.31R | 105m | market | timeout | breakout | breakout | neutral | neutral | 70.4 | ↑464.71 | -0.2413 | 3.13 | **WIN** |
| 144 | URI | 02-06 14:40 | 02-06 16:05 | 878.08 | 877.86 | 15 | 13171.2 | -3.3 | -0.03% | 0.02R | 85m | market | breakeven-stop | trend | breakout | neutral | neutral | 76.06 | ↓872.35 | 6.9421 | 1.44 | **LOSS** |
| 145 | AAPL | 02-06 14:45 | 02-06 15:40 | 279.63 | 279.39 | 50 | 13981.5 | -12 | -0.09% | 0.09R | 55m | market | stagnation | trend | trend | neutral | neutral | 65.98 | ↑278.88 | 0.6118 | 1.19 | **LOSS** |
| 146 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 29 | 11836.06 | -68.15 | -0.58% | 0.47R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 147 | DELL | 02-06 14:45 | 02-06 16:30 | 119.7 | 120.84 | 116 | 13885.2 | +132.24 | +0.95% | 0.69R | 105m | market | timeout | trend | breakout | neutral | neutral | 81.66 | ↑119.11 | 1.0302 | 1.13 | **WIN** |
| 148 | CSCO | 02-06 14:45 | 02-06 15:10 | 83.9 | 83.38 | 167 | 14011.3 | -86.84 | -0.62% | 0.65R | 25m | market | early-reversal | breakout | trend | neutral | neutral | 59.71 | ↓83.79 | 0.2065 | 1.36 | **LOSS** |
| 149 | RTX | 02-06 14:45 | 02-06 16:30 | 198.71 | 200.04 | 70 | 13909.7 | +93.1 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | neutral | 70.11 | ↑198.47 | 0.4683 | 1.51 | **WIN** |
| 150 | HD | 02-06 14:50 | 02-06 16:35 | 383.5 | 384.97 | 10 | 3835 | +14.7 | +0.38% | 0.51R | 105m | market | timeout | mixed | momentum-pilot | neutral | neutral | 43.14 | ↑382.47 | -0.111 | 1.51 | **WIN** |
| 151 | UPS | 02-06 14:55 | 02-06 15:20 | 117.38 | 116.9 | 119 | 13968.22 | -57.12 | -0.41% | 0.56R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 66.48 | ↓116.66 | 0.2084 | 2.09 | **LOSS** |
| 152 | SLB | 02-06 14:55 | 02-06 16:40 | 50.26 | 50.69 | 278 | 13972.28 | +119.54 | +0.86% | 0.82R | 105m | market | timeout | trend | trend | neutral | neutral | 75.34 | ↑49.83 | 0.0463 | 1.17 | **WIN** |
| 153 | LMT | 02-06 15:00 | 02-06 15:20 | 618.93 | 613.61 | 22 | 13616.46 | -117.04 | -0.86% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | neutral | 72.64 | ↓617.62 | 1.2905 | 6.48 | **LOSS** |
| 154 | DIS | 02-06 15:20 | 02-06 17:05 | 107.02 | 107.94 | 130 | 13912.6 | +119.6 | +0.86% | 0.77R | 105m | market | timeout | trend | trend | neutral | neutral | 66.67 | ↑106.73 | 0.3985 | 1.25 | **WIN** |
| 155 | NVDA | 02-09 14:30 | 02-09 15:05 | 187.37 | 191.84 | 26 | 4871.62 | +116.22 | +2.39% | 2.85R | 35m | market | profit-target | trend | momentum-pilot | neutral | neutral | 60.03 | ↑186.25 | 0.1333 | 3.7 | **WIN** |
| 156 | AVGO | 02-09 14:30 | 02-09 14:55 | 335.86 | 336.59 | 7 | 2351.02 | +5.11 | +0.22% | 0.25R | 25m | market | trailing-stop | trend | momentum-pilot | noisyHighBeta | noisy-high-beta | 56.81 | ↓334.16 | -0.0575 | 1.64 | **WIN** |
| 157 | XOM | 02-09 14:30 | 02-09 14:40 | 150.4 | 149.07 | 32 | 4812.8 | -42.56 | -0.88% | 1.26R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 67.59 | ↓150.06 | 0.0745 | 1.69 | **LOSS** |
| 158 | CSCO | 02-09 14:30 | 02-09 16:15 | 85.19 | 86.47 | 57 | 4855.83 | +72.96 | +1.5% | 2.14R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 73.91 | ↑84.99 | 0.1573 | 2.36 | **WIN** |
| 159 | FTNT | 02-09 14:40 | 02-09 15:55 | 84.2 | 83.89 | 166 | 13977.2 | -51.46 | -0.37% | 0.29R | 75m | market | stagnation | trend | breakout | neutral | neutral | 80.69 | ↓83.61 | 0.4352 | 1.1 | **LOSS** |
| 160 | XOM | 02-09 15:00 | 02-09 15:20 | 150.16 | 149.13 | 32 | 4805.12 | -32.96 | -0.69% | 0.83R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 59.61 | ↓149.61 | 0.1035 | 1.63 | **LOSS** |
| 161 | PANW | 02-09 15:15 | 02-09 15:35 | 161.15 | 160.07 | 47 | 7574.05 | -50.76 | -0.67% | 0.51R | 20m | market | early-reversal | trend | trend | noisyHighBeta | noisy-high-beta | 73.64 | ↑159.33 | 0.3913 | 1.01 | **LOSS** |
| 162 | GS | 02-09 15:15 | 02-09 17:00 | 940.19 | 943.34 | 14 | 13162.66 | +44.1 | +0.34% | 0.4R | 105m | market | timeout | trend | trend | neutral | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 163 | CYBR | 02-09 15:15 | 02-09 15:35 | 395.67 | 394 | 35 | 13848.45 | -58.45 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | neutral | 69.77 | ↑392.71 | 1.3204 | 1.12 | **LOSS** |
| 164 | TSLA | 02-10 14:30 | 02-10 15:00 | 422.42 | 420.06 | 9 | 3801.78 | -21.24 | -0.56% | 0.76R | 30m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 58.72 | ↓420.93 | 0.0645 | 3.28 | **LOSS** |
| 165 | ADBE | 02-10 14:30 | 02-10 15:20 | 268.85 | 267.44 | 17 | 4570.45 | -23.97 | -0.52% | 0.74R | 50m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 68.1 | ↓268.72 | -0.2936 | 1.52 | **LOSS** |
| 166 | PYPL | 02-10 14:30 | 02-10 15:50 | 41.61 | 42.07 | 167 | 13939.35 | +76.82 | +1.11% | 1.39R | 80m | market | trim-profit-target | trend | trend | neutral | neutral | 73.99 | ↑41.36 | 0.0421 | 1.03 | **WIN** |
| 167 | PYPL | 02-10 14:30 | 02-10 16:15 | 41.61 | 42.2 | 168 | 13939.35 | +99.12 | +1.42% | 1.78R | 105m | market | timeout | trend | trend | neutral | neutral | 73.99 | ↑41.36 | 0.0421 | 1.03 | **WIN** |
| 168 | BA | 02-10 14:30 | 02-10 14:50 | 246.51 | 244.31 | 42 | 10353.42 | -92.4 | -0.89% | 1.27R | 20m | market | stop-loss | trend | trend | neutral | neutral | 69.61 | ↓246 | 0.3275 | 1.22 | **LOSS** |
| 169 | HD | 02-10 14:30 | 02-10 15:20 | 385.23 | 384.97 | 36 | 13868.28 | -9.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | neutral | 73.3 | ↓384.63 | 0.5713 | 1.87 | **LOSS** |
| 170 | TEAM | 02-10 14:30 | 02-10 15:10 | 92.9 | 95.3 | 24 | 2229.6 | +57.6 | +2.58% | 1.77R | 40m | market | profit-target | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 55.73 | ↑92.04 | -0.3812 | 2.28 | **WIN** |
| 171 | AXP | 02-10 14:30 | 02-10 15:45 | 364.37 | 367.09 | 17 | 12752.95 | +46.24 | +0.75% | 1.07R | 75m | market | trim-profit-target | trend | trend | neutral | neutral | 70.25 | ↓362.7 | 0.2583 | 1.44 | **WIN** |
| 172 | AXP | 02-10 14:30 | 02-10 16:15 | 364.37 | 365.88 | 18 | 12752.95 | +27.18 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | neutral | 70.25 | ↓362.7 | 0.2583 | 1.44 | **WIN** |
| 173 | PLTR | 02-10 14:35 | 02-10 15:20 | 144.37 | 143.31 | 17 | 2454.29 | -18.02 | -0.73% | 0.61R | 45m | market | early-reversal | trend | momentum-pilot | noisyHighBeta | noisy-high-beta | 53.07 | ↓144.39 | -0.1334 | 1.48 | **LOSS** |
| 174 | CSCO | 02-10 14:35 | 02-10 15:30 | 87.87 | 87.8 | 159 | 13971.33 | -11.13 | -0.08% | 0.1R | 55m | market | stagnation | trend | breakout | neutral | neutral | 66.59 | ↓87.49 | 0.0955 | 1.52 | **LOSS** |
| 175 | GS | 02-10 14:40 | 02-10 15:50 | 953.41 | 952.8 | 5 | 4767.05 | -3.05 | -0.06% | 0.09R | 70m | market | breakeven-stop | trend | momentum-pilot | neutral | neutral | 62.64 | ↓952.12 | 0.7258 | 2.05 | **LOSS** |
| 176 | HPE | 02-10 14:40 | 02-10 15:55 | 24.1 | 24.03 | 203 | 4892.3 | -14.21 | -0.29% | 0.41R | 75m | market | stagnation | trend | momentum-pilot | neutral | neutral | 58.76 | ↓24.06 | 0.0241 | 1.54 | **LOSS** |
| 177 | RIVN | 02-10 14:45 | 02-10 15:10 | 14.99 | 15.44 | 513 | 7689.87 | +230.85 | +3% | 2.04R | 25m | market | profit-target | breakout | trend | noisyHighBeta | noisy-high-beta | 64.91 | ↑14.96 | 0.0155 | 1.3 | **WIN** |
| 178 | BLK | 02-10 14:45 | 02-10 16:30 | 1098.92 | 1108.73 | 12 | 13187.04 | +117.72 | +0.89% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 81.46 | ↑1090.8 | 4.0422 | 1.37 | **WIN** |
| 179 | PFE | 02-10 14:45 | 02-10 16:30 | 27.31 | 27.55 | 512 | 13982.72 | +122.88 | +0.88% | 1.26R | 105m | market | timeout | trend | trend | neutral | neutral | 75.53 | ↑27.22 | 0.047 | 1.35 | **WIN** |
| 180 | NKE | 02-10 14:55 | 02-10 16:40 | 63.02 | 63.84 | 77 | 4852.54 | +63.14 | +1.3% | 1.65R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 67.74 | ↑62.8 | -0.0018 | 1.55 | **WIN** |
| 181 | MSFT | 02-10 15:00 | 02-10 15:20 | 422.34 | 420.04 | 33 | 13937.22 | -75.9 | -0.54% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | neutral | 78.76 | ↑418.59 | 1.719 | 1.4 | **LOSS** |
| 182 | ZS | 02-10 15:00 | 02-10 16:20 | 173.94 | 175.72 | 22 | 7653.36 | +39.16 | +1.02% | 0.75R | 80m | market | trim-profit-target | trend | trend | noisyHighBeta | noisy-high-beta | 79.55 | ↑172 | 0.5225 | 1.03 | **WIN** |
| 183 | ZS | 02-10 15:00 | 02-10 16:40 | 173.94 | 174.01 | 22 | 7653.36 | +1.54 | +0.04% | 0.03R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | noisy-high-beta | 79.55 | ↓172 | 0.5225 | 1.03 | **WIN** |
| 184 | AMAT | 02-10 15:15 | 02-10 16:40 | 328.73 | 328.88 | 7 | 2301.11 | +1.05 | +0.05% | 0.04R | 85m | market | breakeven-stop | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 43.65 | ↑325.54 | -0.9902 | 1.46 | **WIN** |
| 185 | ASML | 02-11 14:30 | 02-11 14:55 | 1441.06 | 1432.57 | 8 | 11528.48 | -67.92 | -0.59% | 0.84R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 79.28 | ↓1438.72 | -0.4035 | 1.45 | **LOSS** |
| 186 | F | 02-11 14:30 | 02-11 14:50 | 13.83 | 13.69 | 932 | 12889.56 | -130.48 | -1.01% | 1.33R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 73.24 | ↓13.74 | -0.0016 | 2.91 | **LOSS** |
| 187 | PM | 02-11 14:35 | 02-11 15:35 | 184.06 | 185.8 | 13 | 4785.56 | +22.62 | +0.95% | 1.36R | 60m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 65.51 | ↑183.1 | 0.2368 | 1.89 | **WIN** |
| 188 | PM | 02-11 14:35 | 02-11 16:20 | 184.06 | 186.52 | 13 | 4785.56 | +31.98 | +1.34% | 1.91R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 65.51 | ↑183.1 | 0.2368 | 1.89 | **WIN** |
| 189 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.15 | 428.29 | 27 | 11749.05 | -185.22 | -1.58% | 1.34R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 190 | PANW | 02-11 14:40 | 02-11 14:50 | 167.71 | 164.6 | 16 | 2683.36 | -49.76 | -1.85% | 1.34R | 10m | market | stop-loss | trend | momentum-pilot | noisyHighBeta | noisy-high-beta | 58.56 | ↓167.11 | 0.1779 | 1.55 | **LOSS** |
| 191 | CVX | 02-11 14:40 | 02-11 15:40 | 184.99 | 184.89 | 71 | 13134.29 | -7.1 | -0.05% | 0.07R | 60m | market | stagnation | trend | trend | neutral | neutral | 78.87 | ↓184.77 | 0.4201 | 1.18 | **LOSS** |
| 192 | AAPL | 02-11 14:45 | 02-11 16:15 | 276.25 | 278.97 | 8 | 4696.25 | +21.76 | +0.98% | 1.4R | 90m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 72.7 | ↑275.65 | 0.3873 | 2.68 | **WIN** |
| 193 | AAPL | 02-11 14:45 | 02-11 16:30 | 276.25 | 278.6 | 9 | 4696.25 | +21.15 | +0.85% | 1.21R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 72.7 | ↑275.65 | 0.3873 | 2.68 | **WIN** |
| 194 | GE | 02-11 14:45 | 02-11 15:05 | 320.97 | 319.01 | 43 | 13801.71 | -84.28 | -0.61% | 0.82R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 70.75 | ↓320.19 | 0.4384 | 1.4 | **LOSS** |
| 195 | DELL | 02-11 14:45 | 02-11 15:10 | 126.81 | 125.08 | 110 | 13949.1 | -190.3 | -1.36% | 1.15R | 25m | market | early-reversal | trend | trend | neutral | neutral | 63.16 | ↓125.97 | 0.2253 | 1.19 | **LOSS** |
| 196 | COP | 02-11 14:45 | 02-11 16:30 | 109.06 | 110.4 | 128 | 13959.68 | +171.52 | +1.23% | 1.76R | 105m | market | timeout | trend | trend | neutral | neutral | 76.85 | ↑108.98 | 0.3242 | 1.04 | **WIN** |
| 197 | T | 02-11 14:50 | 02-11 16:25 | 27.82 | 28.51 | 505 | 14049.1 | +348.45 | +2.48% | 2.88R | 95m | market | profit-target | breakout | breakout | neutral | neutral | 65.57 | ↑27.43 | -0.0072 | 1.33 | **WIN** |
| 198 | PEP | 02-11 14:50 | 02-11 15:40 | 167.62 | 169.11 | 14 | 4860.98 | +20.86 | +0.89% | 1.27R | 50m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 53.63 | ↑167 | -0.0179 | 2.59 | **WIN** |
| 199 | PEP | 02-11 14:50 | 02-11 16:35 | 167.62 | 170.08 | 15 | 4860.98 | +36.9 | +1.47% | 2.1R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 53.63 | ↑167 | -0.0179 | 2.59 | **WIN** |
| 200 | MO | 02-11 14:50 | 02-11 16:35 | 64.82 | 66.13 | 75 | 4861.5 | +98.25 | +2.02% | 2.89R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 57.27 | ↑64.48 | 0.0445 | 1.95 | **WIN** |
| 201 | VZ | 02-11 15:05 | 02-11 16:50 | 48.61 | 48.93 | 288 | 13999.68 | +92.16 | +0.66% | 0.63R | 105m | market | timeout | trend | breakout | neutral | neutral | 78.06 | ↑47.95 | 0.1508 | 1.97 | **WIN** |
| 202 | CRM | 02-12 14:30 | 02-12 15:20 | 186.59 | 185.48 | 74 | 13807.66 | -82.14 | -0.59% | 0.8R | 50m | market | stagnation | trend | trend | neutral | neutral | 66.7 | ↓185.74 | 0.102 | 2.81 | **LOSS** |
| 203 | ADBE | 02-12 14:30 | 02-12 14:40 | 260.87 | 257.86 | 53 | 13826.11 | -159.53 | -1.15% | 1.6R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 66.71 | ↓260.15 | 0.0759 | 2.02 | **LOSS** |
| 204 | ARM | 02-12 14:30 | 02-12 14:55 | 127.05 | 125.85 | 20 | 2541 | -24 | -0.94% | 1.11R | 25m | market | early-reversal | trend | momentum-pilot | noisyHighBeta | noisy-high-beta | 63.01 | ↓126.91 | -0.0345 | 2.57 | **LOSS** |
| 205 | PANW | 02-12 14:30 | 02-12 14:45 | 167.32 | 164.81 | 83 | 13887.56 | -208.33 | -1.5% | 1.83R | 15m | market | stop-loss | trend | trend | neutral | neutral | 69.26 | ↓166.7 | -0.0172 | 1.27 | **LOSS** |
| 206 | NVO | 02-12 14:30 | 02-12 15:20 | 49.08 | 49 | 99 | 4858.92 | -7.92 | -0.16% | 0.22R | 50m | market | stagnation | trend | momentum-pilot | neutral | neutral | 61.09 | ↑49.03 | 0.1074 | 1.71 | **LOSS** |
| 207 | COST | 02-12 14:30 | 02-12 16:15 | 986.79 | 998.45 | 4 | 3947.16 | +46.64 | +1.18% | 1.69R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 69.5 | ↑985.68 | -0.593 | 2.18 | **WIN** |
| 208 | WMT | 02-12 14:30 | 02-12 16:15 | 130.85 | 133.51 | 98 | 12823.3 | +260.68 | +2.03% | 2.9R | 105m | market | timeout | trend | breakout | neutral | neutral | 75.75 | ↑130.32 | 0.1054 | 2.06 | **WIN** |
| 209 | TXN | 02-12 14:30 | 02-12 14:50 | 229.19 | 227.55 | 61 | 13980.59 | -100.04 | -0.72% | 1.03R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.83 | ↓228.26 | -0.0372 | 2.9 | **LOSS** |
| 210 | TEAM | 02-12 14:30 | 02-12 15:20 | 87.59 | 87.44 | 31 | 2715.29 | -4.65 | -0.17% | 0.14R | 50m | market | stagnation | trend | momentum-pilot | noisyHighBeta | noisy-high-beta | 60.41 | ↑87.24 | 0.1459 | 3.9 | **LOSS** |
| 211 | C | 02-12 14:30 | 02-12 14:50 | 118.76 | 117.78 | 41 | 4869.16 | -40.18 | -0.83% | 1.09R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 53.87 | ↓118.47 | -0.0978 | 1.46 | **LOSS** |
| 212 | RTX | 02-12 14:30 | 02-12 16:05 | 199.38 | 199.28 | 70 | 13956.6 | -7 | -0.05% | 0.07R | 95m | market | breakeven-stop | trend | breakout | neutral | neutral | 65.56 | ↓198.78 | 0.2607 | 1.11 | **LOSS** |
| 213 | LULU | 02-12 14:30 | 02-12 14:40 | 178.04 | 176.35 | 27 | 4807.08 | -45.63 | -0.95% | 1.36R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 56.02 | ↓177.69 | -0.2427 | 1.54 | **LOSS** |
| 214 | TJX | 02-12 14:30 | 02-12 16:15 | 153.02 | 155.14 | 84 | 12853.68 | +178.08 | +1.39% | 1.99R | 105m | market | timeout | trend | breakout | neutral | neutral | 74.16 | ↑152.69 | 0.1718 | 1.91 | **WIN** |
| 215 | VZ | 02-12 14:30 | 02-12 16:15 | 49.11 | 49.94 | 69 | 3388.59 | +57.27 | +1.69% | 2.41R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 83.52 | ↑49.08 | 0.0806 | 1.6 | **WIN** |
| 216 | MDB | 02-12 14:35 | 02-12 14:40 | 369.17 | 362.63 | 20 | 7383.4 | -130.8 | -1.77% | 1.82R | 5m | market | stop-loss | trend | trend | noisyHighBeta | noisy-high-beta | 73.15 | ↓368.82 | 1.5794 | 1.05 | **LOSS** |
| 217 | BA | 02-12 14:35 | 02-12 16:05 | 240.03 | 241.32 | 43 | 10321.29 | +55.47 | +0.54% | 0.77R | 90m | market | trailing-stop | trend | breakout | neutral | neutral | 74 | ↓238.97 | 0.5097 | 1.8 | **WIN** |
| 218 | URI | 02-12 14:35 | 02-12 14:55 | 894.64 | 881.73 | 10 | 8946.4 | -129.1 | -1.44% | 1.78R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 88.28 | ↓892.71 | 2.1286 | 1.61 | **LOSS** |
| 219 | UPS | 02-12 14:35 | 02-12 15:20 | 121.12 | 120.46 | 115 | 13928.8 | -75.9 | -0.54% | 0.77R | 45m | market | early-reversal | trend | trend | neutral | neutral | 76.86 | ↓120.85 | 0.1817 | 3.5 | **LOSS** |
| 220 | FDX | 02-12 14:50 | 02-12 15:25 | 377.04 | 372.82 | 25 | 9426 | -105.5 | -1.12% | 1.03R | 35m | market | early-reversal | trend | breakout | neutral | neutral | 82.19 | ↓371.51 | 1.4221 | 1.14 | **LOSS** |
| 221 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.59 | 1028.21 | 13 | 13436.67 | -69.94 | -0.52% | 0.39R | 40m | market | early-reversal | trend | breakout | neutral | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 222 | TXN | 02-12 15:15 | 02-12 15:40 | 228.8 | 226.96 | 61 | 13956.8 | -112.24 | -0.8% | 0.94R | 25m | market | early-reversal | trend | trend | neutral | neutral | 68.58 | ↓228.18 | 0.507 | 1.44 | **LOSS** |
| 223 | UNH | 02-12 15:20 | 02-12 16:05 | 281.54 | 280.26 | 17 | 4786.18 | -21.76 | -0.45% | 0.42R | 45m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 68.02 | ↓279.06 | 0.3329 | 2.69 | **LOSS** |
| 224 | AMD | 02-13 14:30 | 02-13 14:55 | 208.15 | 206.34 | 13 | 2705.95 | -23.53 | -0.87% | 0.71R | 25m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 57.88 | ↓207.35 | -0.2287 | 5.92 | **LOSS** |
| 225 | ASML | 02-13 14:30 | 02-13 16:15 | 1420.71 | 1426.88 | 9 | 12786.39 | +55.53 | +0.43% | 0.61R | 105m | market | timeout | trend | trend | neutral | neutral | 57.46 | ↑1418.53 | -0.1503 | 1.89 | **WIN** |
| 226 | CRWD | 02-13 14:30 | 02-13 16:15 | 418.68 | 423.94 | 33 | 13816.44 | +173.58 | +1.26% | 1.42R | 105m | market | timeout | trend | breakout | neutral | neutral | 67.08 | ↑417.18 | 1.4772 | 1.29 | **WIN** |
| 227 | BA | 02-13 14:30 | 02-13 15:55 | 243.1 | 243.1 | 15 | 3646.5 | +0 | +0% | 0R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | neutral | 57.57 | ↓243.03 | 0.0742 | 8.32 | **WIN** |
| 228 | LRCX | 02-13 14:30 | 02-13 14:55 | 239.1 | 236.88 | 58 | 13867.8 | -128.76 | -0.93% | 0.72R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 68.03 | ↓238.55 | -0.0282 | 3.65 | **LOSS** |
| 229 | NKE | 02-13 14:30 | 02-13 15:20 | 62.38 | 62.19 | 206 | 12850.28 | -39.14 | -0.3% | 0.36R | 50m | market | stagnation | trend | breakout | neutral | neutral | 70.81 | ↓62.15 | 0.0501 | 2.15 | **LOSS** |
| 230 | CMG | 02-13 14:30 | 02-13 15:20 | 36.68 | 36.53 | 348 | 12764.64 | -52.2 | -0.41% | 0.41R | 50m | market | stagnation | trend | breakout | neutral | neutral | 77.23 | ↓36.51 | 0.0132 | 1.18 | **LOSS** |
| 231 | NVO | 02-13 14:35 | 02-13 15:15 | 49.64 | 49.37 | 282 | 13998.48 | -76.14 | -0.54% | 0.64R | 40m | market | early-reversal | trend | trend | neutral | neutral | 77.08 | ↓49.57 | 0.2263 | 1.08 | **LOSS** |
| 232 | RBLX | 02-13 14:35 | 02-13 15:40 | 63.81 | 63.56 | 120 | 7657.2 | -30 | -0.39% | 0.31R | 65m | market | stagnation | trend | trend | noisyHighBeta | noisy-high-beta | 75.96 | ↓63.71 | 0.191 | 1.4 | **LOSS** |
| 233 | PYPL | 02-13 14:40 | 02-13 15:20 | 39.44 | 39.23 | 124 | 4890.56 | -26.04 | -0.53% | 0.6R | 40m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 53.71 | ↓39.32 | 0.0583 | 1.68 | **LOSS** |
| 234 | DIS | 02-13 14:40 | 02-13 16:20 | 103.55 | 104.69 | 23 | 4866.85 | +26.22 | +1.1% | 1.03R | 100m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 62.02 | ↑102.48 | 0.1686 | 1.53 | **WIN** |
| 235 | DIS | 02-13 14:40 | 02-13 16:25 | 103.55 | 105.08 | 24 | 4866.85 | +36.72 | +1.48% | 1.38R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 62.02 | ↑102.48 | 0.1686 | 1.53 | **WIN** |
| 236 | LULU | 02-13 14:45 | 02-13 15:15 | 175.05 | 172.93 | 79 | 13828.95 | -167.48 | -1.21% | 1.15R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 79.37 | ↓173.73 | 0.8214 | 1.71 | **LOSS** |
| 237 | F | 02-13 14:45 | 02-13 16:30 | 14.07 | 14.13 | 347 | 4882.29 | +20.82 | +0.43% | 0.61R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 54.55 | ↑13.99 | 0.0034 | 2.13 | **WIN** |
| 238 | AMZN | 02-17 14:30 | 02-17 14:40 | 200.19 | 197.34 | 24 | 4804.56 | -68.4 | -1.42% | 2.03R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 64.28 | ↓199.3 | -0.2273 | 5.65 | **LOSS** |
| 239 | AAPL | 02-17 14:30 | 02-17 15:50 | 258.89 | 258.99 | 18 | 4660.02 | +1.8 | +0.04% | 0.05R | 80m | market | breakeven-stop | mixed | momentum-pilot | neutral | neutral | 54.55 | ↓257.92 | -0.5435 | 1.75 | **WIN** |
| 240 | CRM | 02-17 14:30 | 02-17 14:40 | 191.44 | 187.51 | 25 | 4786 | -98.25 | -2.05% | 2.38R | 10m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 64.93 | ↓190.99 | -0.2038 | 3.29 | **LOSS** |
| 241 | QCOM | 02-17 14:30 | 02-17 14:40 | 143.21 | 141.66 | 90 | 12888.9 | -139.5 | -1.08% | 1.48R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 75.43 | ↓142.42 | 0.0919 | 1.11 | **LOSS** |
| 242 | INTC | 02-17 14:30 | 02-17 14:50 | 46.33 | 45.88 | 55 | 2548.15 | -24.75 | -0.97% | 0.7R | 20m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 44.15 | ↓46.11 | -0.3456 | 3.67 | **LOSS** |
| 243 | GS | 02-17 14:30 | 02-17 14:50 | 918.87 | 912.8 | 14 | 12864.18 | -84.98 | -0.66% | 0.94R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.71 | ↓914.98 | 1.3634 | 1.97 | **LOSS** |
| 244 | GE | 02-17 14:30 | 02-17 15:35 | 316.08 | 322.83 | 7 | 4741.2 | +47.25 | +2.14% | 3.06R | 65m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 60.14 | ↑316.42 | -0.1666 | 2.12 | **WIN** |
| 245 | GE | 02-17 14:30 | 02-17 15:40 | 316.08 | 323.54 | 8 | 4741.2 | +59.68 | +2.36% | 3.37R | 70m | market | profit-target | trend | momentum-pilot | neutral | neutral | 60.14 | ↑316.42 | -0.1666 | 2.12 | **WIN** |
| 246 | DELL | 02-17 14:30 | 02-17 14:50 | 118.15 | 116.47 | 41 | 4844.15 | -68.88 | -1.42% | 1.46R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 65.13 | ↓117.51 | 0.1101 | 1.89 | **LOSS** |
| 247 | RBLX | 02-17 14:30 | 02-17 14:50 | 63.48 | 62.87 | 40 | 2539.2 | -24.4 | -0.96% | 1.07R | 20m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 60.26 | ↓63.32 | -0.1025 | 1.6 | **LOSS** |
| 248 | AXP | 02-17 14:30 | 02-17 14:55 | 342.53 | 340.48 | 40 | 13701.2 | -82 | -0.6% | 0.85R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 69.86 | ↓341.24 | -0.1806 | 1.58 | **LOSS** |
| 249 | PG | 02-17 14:30 | 02-17 14:50 | 161.55 | 160.37 | 30 | 4846.5 | -35.4 | -0.73% | 1.04R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | neutral | 58.26 | ↓160.92 | -0.3554 | 1.84 | **LOSS** |
| 250 | JPM | 02-17 14:35 | 02-17 16:20 | 306.19 | 307.08 | 45 | 13778.55 | +40.05 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | neutral | 72.57 | ↑305.18 | 0.2566 | 1.03 | **WIN** |
| 251 | LLY | 02-17 14:35 | 02-17 15:20 | 1051.32 | 1050.76 | 4 | 4205.28 | -2.24 | -0.05% | 0.07R | 45m | market | breakeven-stop | trend | momentum-pilot | neutral | neutral | 68.84 | ↓1049.44 | -0.5206 | 2.52 | **LOSS** |
| 252 | MS | 02-17 14:35 | 02-17 14:55 | 173.92 | 172.01 | 56 | 9739.52 | -106.96 | -1.1% | 1.34R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 83.87 | ↓173.34 | 0.4952 | 1.49 | **LOSS** |
| 253 | CL | 02-17 14:40 | 02-17 15:00 | 97.02 | 96.64 | 50 | 4851 | -19 | -0.39% | 0.56R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 65.89 | ↓96.9 | -0.0512 | 1.99 | **LOSS** |
| 254 | BAC | 02-17 14:45 | 02-17 15:05 | 53.54 | 53.24 | 261 | 13973.94 | -78.3 | -0.56% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 80.59 | ↓53.24 | 0.1739 | 1.83 | **LOSS** |
| 255 | V | 02-17 14:45 | 02-17 15:10 | 319.41 | 318 | 43 | 13734.63 | -60.63 | -0.44% | 0.49R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 76.39 | ↑317.48 | 0.2266 | 1.6 | **LOSS** |
| 256 | ADP | 02-17 14:45 | 02-17 15:05 | 213.43 | 211.25 | 22 | 4695.46 | -47.96 | -1.02% | 1.26R | 20m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 53.46 | ↓212.84 | -0.0174 | 1.55 | **LOSS** |
| 257 | WFC | 02-17 14:45 | 02-17 15:05 | 88.78 | 88.1 | 110 | 9765.8 | -74.8 | -0.77% | 0.78R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 83.11 | ↓88.42 | 0.393 | 1.35 | **LOSS** |
| 258 | C | 02-17 14:45 | 02-17 15:05 | 114.19 | 113.43 | 122 | 13931.18 | -92.72 | -0.67% | 0.51R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.16 | ↓113.79 | 0.6895 | 1.91 | **LOSS** |
| 259 | MO | 02-17 14:50 | 02-17 15:10 | 67.56 | 66.89 | 72 | 4864.32 | -48.24 | -0.99% | 1.41R | 20m | market | stop-loss | trend | momentum-pilot | neutral | neutral | 59.29 | ↓67.34 | 0.0045 | 1.78 | **LOSS** |
| 260 | GOOGL | 02-18 14:30 | 02-18 14:50 | 303.77 | 302.35 | 16 | 4860.32 | -22.72 | -0.47% | 0.67R | 20m | market | early-reversal | trend | momentum-pilot | neutral | neutral | 58.57 | ↓303.35 | -0.0637 | 5.42 | **LOSS** |
| 261 | LMT | 02-18 14:30 | 02-18 14:45 | 660.88 | 653.88 | 19 | 12556.72 | -133 | -1.06% | 1.51R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 74.21 | ↓658.14 | 0.1895 | 2.1 | **LOSS** |
| 262 | RIVN | 02-18 14:30 | 02-18 15:10 | 16.75 | 16.74 | 146 | 2445.5 | -1.46 | -0.06% | 0.05R | 40m | market | trailing-stop | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 58.04 | ↓16.66 | -0.1155 | 1.61 | **LOSS** |
| 263 | C | 02-18 14:30 | 02-18 16:15 | 115.56 | 116.57 | 111 | 12827.16 | +112.11 | +0.87% | 1.21R | 105m | market | timeout | trend | breakout | neutral | neutral | 78 | ↑115.55 | 0.2029 | 1.11 | **WIN** |
| 264 | GM | 02-18 14:30 | 02-18 16:15 | 82.24 | 83.36 | 156 | 12829.44 | +174.72 | +1.36% | 1.94R | 105m | market | timeout | trend | breakout | neutral | neutral | 81 | ↑82.14 | 0.1876 | 2.15 | **WIN** |
| 265 | ASML | 02-18 14:35 | 02-18 16:20 | 1438.81 | 1466.75 | 9 | 12949.29 | +251.46 | +1.94% | 2.77R | 105m | market | timeout | trend | breakout | neutral | neutral | 71.43 | ↑1434.56 | 1.9464 | 1.25 | **WIN** |
| 266 | UBER | 02-18 14:35 | 02-18 16:20 | 71.74 | 72.48 | 195 | 13989.3 | +144.3 | +1.03% | 1.11R | 105m | market | timeout | trend | breakout | neutral | neutral | 72.27 | ↑71.21 | 0.1884 | 1.29 | **WIN** |
| 267 | PYPL | 02-18 14:35 | 02-18 16:00 | 41.13 | 41.55 | 59 | 4853.34 | +24.78 | +1.02% | 1.34R | 85m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 51.87 | ↑40.88 | -0.0571 | 1.69 | **WIN** |
| 268 | PYPL | 02-18 14:35 | 02-18 16:20 | 41.13 | 41.47 | 59 | 4853.34 | +20.06 | +0.83% | 1.09R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 51.87 | ↑40.88 | -0.0571 | 1.69 | **WIN** |
| 269 | DIS | 02-18 14:35 | 02-18 16:20 | 106.88 | 107.2 | 131 | 14001.28 | +41.92 | +0.3% | 0.43R | 105m | market | timeout | trend | breakout | neutral | neutral | 72.32 | ↓106.56 | 0.1546 | 1.49 | **WIN** |
| 270 | RBLX | 02-18 14:35 | 02-18 15:10 | 63.44 | 65.07 | 39 | 2474.16 | +63.57 | +2.57% | 2.6R | 35m | market | profit-target | mixed | momentum-pilot | noisyHighBeta | noisy-high-beta | 49.45 | ↑62.98 | -0.108 | 2.46 | **WIN** |
| 271 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 272 | GE | 02-18 14:40 | 02-18 15:00 | 331.38 | 328.89 | 42 | 13917.96 | -104.58 | -0.75% | 1.06R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.11 | ↓330.58 | 0.1052 | 2.37 | **LOSS** |
| 273 | SCHW | 02-18 14:40 | 02-18 16:25 | 94.73 | 95.27 | 147 | 13925.31 | +79.38 | +0.57% | 0.76R | 105m | market | timeout | trend | breakout | neutral | neutral | 81.09 | ↑94.31 | 0.0789 | 1.29 | **WIN** |
| 274 | TMO | 02-18 14:40 | 02-18 15:35 | 506.64 | 506.38 | 9 | 4559.76 | -2.34 | -0.05% | 0.07R | 55m | market | stagnation | trend | momentum-pilot | neutral | neutral | 63.9 | ↓504.22 | 0.0318 | 1.56 | **LOSS** |
| 275 | CVX | 02-18 14:45 | 02-18 15:40 | 182.69 | 182.43 | 76 | 13884.44 | -19.76 | -0.14% | 0.2R | 55m | market | stagnation | trend | breakout | neutral | neutral | 68.2 | ↓182.78 | 0.5021 | 1.18 | **LOSS** |
| 276 | ADSK | 02-18 14:50 | 02-18 16:35 | 226.4 | 227.1 | 21 | 4754.4 | +14.7 | +0.31% | 0.4R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 63.54 | ↑225.11 | -0.0094 | 1.49 | **WIN** |
| 277 | ISRG | 02-18 14:50 | 02-18 16:35 | 500.13 | 500.15 | 27 | 13503.51 | +0.54 | +0% | 0R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.25 | ↑496.56 | 0.8704 | 1.12 | **WIN** |
| 278 | LRCX | 02-18 14:55 | 02-18 16:40 | 239.43 | 244.93 | 58 | 13886.94 | +319 | +2.3% | 1.76R | 105m | market | timeout | breakout | breakout | neutral | neutral | 59.3 | ↑236.36 | -0.1823 | 1.82 | **WIN** |
| 279 | FDX | 02-18 15:10 | 02-18 15:40 | 382.01 | 380.82 | 36 | 13752.36 | -42.84 | -0.31% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | neutral | 70.98 | ↑380.45 | 1.3447 | 3.07 | **LOSS** |
| 280 | LULU | 02-18 15:15 | 02-18 15:50 | 180.48 | 179.86 | 77 | 13896.96 | -47.74 | -0.34% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | neutral | 64.27 | ↑178.16 | 0.6159 | 1.01 | **LOSS** |
| 281 | UBER | 02-19 14:30 | 02-19 14:35 | 73.88 | 72.83 | 174 | 12855.12 | -182.7 | -1.42% | 1.42R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 77.1 | ↓73.26 | 0.0341 | 2.82 | **LOSS** |
| 282 | LMT | 02-19 14:35 | 02-19 15:00 | 664.56 | 661.55 | 21 | 13955.76 | -63.21 | -0.45% | 0.53R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 77.56 | ↓661.34 | 0.8997 | 1.54 | **LOSS** |
| 283 | VZ | 02-19 14:35 | 02-19 15:25 | 49.08 | 49 | 185 | 9079.8 | -14.8 | -0.16% | 0.23R | 50m | market | stagnation | trend | breakout | neutral | neutral | 83.45 | ↓48.97 | 0.1548 | 1.19 | **LOSS** |
| 284 | T | 02-19 14:35 | 02-19 14:55 | 28.29 | 28.13 | 498 | 14088.42 | -79.68 | -0.57% | 0.81R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 69.78 | ↓28.17 | 0.0175 | 1.9 | **LOSS** |
| 285 | AVGO | 02-19 14:45 | 02-19 16:30 | 333.91 | 336.91 | 14 | 4674.74 | +42 | +0.9% | 0.82R | 105m | market | timeout | mixed | momentum-pilot | neutral | neutral | 59.01 | ↑331.84 | -0.5669 | 1.91 | **WIN** |
| 286 | MO | 02-19 14:45 | 02-19 15:05 | 68.05 | 67.44 | 205 | 13950.25 | -125.05 | -0.9% | 1.13R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 74.56 | ↓67.6 | 0.2067 | 1.27 | **LOSS** |
| 287 | AMZN | 02-19 15:00 | 02-19 15:20 | 205.33 | 204.24 | 21 | 4311.93 | -22.89 | -0.53% | 0.63R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | neutral | 53.75 | ↓204.2 | -0.1895 | 1.66 | **LOSS** |
| 288 | GOOG | 02-19 15:00 | 02-19 15:35 | 304.11 | 302.73 | 13 | 3953.43 | -17.94 | -0.45% | 0.53R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | neutral | 62.64 | ↓302.46 | -0.1597 | 1.5 | **LOSS** |
| 289 | CAT | 02-19 15:20 | 02-19 16:45 | 756.57 | 755.92 | 6 | 4539.42 | -3.9 | -0.09% | 0.08R | 85m | market | stagnation | mixed | momentum-pilot | neutral | neutral | 52.15 | ↑750.95 | -0.873 | 1.92 | **LOSS** |
| 290 | RTX | 02-19 15:20 | 02-19 17:05 | 203.89 | 204.54 | 19 | 3873.91 | +12.35 | +0.32% | 0.39R | 105m | market | timeout | mixed | momentum-pilot | neutral | neutral | 43.93 | ↑202.98 | -0.504 | 1.87 | **WIN** |
| 291 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 292 | AMZN | 02-20 14:30 | 02-20 14:50 | 206.49 | 205.78 | 67 | 13834.83 | -47.57 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | neutral | 79.64 | ↓205.54 | 0.2565 | 2.14 | **LOSS** |
| 293 | PANW | 02-20 14:30 | 02-20 15:40 | 152.76 | 156.36 | 31 | 4735.56 | +111.6 | +2.36% | 3.03R | 70m | market | profit-target | trend | momentum-pilot | neutral | neutral | 67.94 | ↑151.9 | 0.0503 | 2.03 | **WIN** |
| 294 | SNOW | 02-20 14:30 | 02-20 15:30 | 180.23 | 180.64 | 77 | 13877.71 | +31.57 | +0.23% | 0.28R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 295 | INTU | 02-20 14:30 | 02-20 15:35 | 384.48 | 383.94 | 36 | 13841.28 | -19.44 | -0.14% | 0.19R | 65m | market | trailing-stop | trend | trend | neutral | neutral | 62.54 | ↓382.83 | 0.3251 | 1.35 | **LOSS** |
| 296 | GOOG | 02-20 14:30 | 02-20 16:15 | 308.35 | 314.57 | 41 | 12642.35 | +255.02 | +2.02% | 2.89R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.25 | ↑307.08 | 0.0319 | 2.58 | **WIN** |
| 297 | UBER | 02-20 14:35 | 02-20 15:35 | 73.24 | 74.13 | 33 | 4833.84 | +29.37 | +1.22% | 1.74R | 60m | market | trim-profit-target | trend | momentum-pilot | neutral | neutral | 60.41 | ↑73.11 | 0.0365 | 2.39 | **WIN** |
| 298 | UBER | 02-20 14:35 | 02-20 16:20 | 73.24 | 74.23 | 33 | 4833.84 | +32.67 | +1.35% | 1.93R | 105m | market | timeout | trend | momentum-pilot | neutral | neutral | 60.41 | ↑73.11 | 0.0365 | 2.39 | **WIN** |
| 299 | TJX | 02-20 14:35 | 02-20 15:40 | 157.5 | 157.32 | 88 | 13860 | -15.84 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | neutral | 77.14 | ↓157.03 | 0.1412 | 2.27 | **LOSS** |
| 300 | TGT | 02-20 14:50 | 02-20 15:30 | 116.37 | 116.96 | 42 | 4887.54 | +24.78 | +0.51% | 0.73R | 40m | market | trailing-stop | trend | momentum-pilot | neutral | neutral | 58.72 | ↓116.12 | 0.1011 | 1.68 | **WIN** |

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

- ⚠️ **Profit factor 0.75 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.92R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T21:40:06.616Z*
