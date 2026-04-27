# Bot Trade Report — 500 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:09:53.984Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 500 | **Lookback:** 180 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $10249.15 (-10.25%) over 500 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 500 |
| Win rate | 31.2% (156W / 344L) |
| Net P&L | $-10249.15 (-10.25%) |
| Gross profit | $19701.44 |
| Gross loss | $29950.59 |
| Profit factor | 0.66 |
| Avg win | $126.29 |
| Avg loss | $87.07 |
| Payoff ratio | 1.45:1 |
| Expectancy | $-20.5 / trade |
| Max drawdown | 10.53% |
| Sharpe ratio (ann.) | -5.37 |
| Trades / active day | 6.49 |
| Avg confidence | 98.64% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.77R |
| Starting equity | $100,000 |
| Ending equity | $89,750.85 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 28.57% | $-381.42 | $-54.49 |
| Mid  10:30–11:30 | 493 | 31.24% | $-9867.73 | $-20.02 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 19 | 11 | 57.89% | $+739.15 | $+38.9 | 2.06 | eligible |
| INTC | 8 | 3 | 37.5% | $+601.16 | $+75.15 | 2.64 | throttle |
| SBUX | 9 | 6 | 66.67% | $+511.72 | $+56.86 | 2.73 | eligible |
| CELH | 10 | 6 | 60% | $+375.63 | $+37.56 | 1.61 | eligible |
| V | 3 | 2 | 66.67% | $+291.71 | $+97.24 | 5.81 | watch |
| NVDA | 15 | 8 | 53.33% | $+291.05 | $+19.4 | 1.47 | eligible |
| WMT | 4 | 2 | 50% | $+247.79 | $+61.95 | 2.47 | watch |
| GOOGL | 11 | 4 | 36.36% | $+205.36 | $+18.67 | 1.42 | throttle |
| RIVN | 8 | 4 | 50% | $+159.79 | $+19.97 | 1.37 | eligible |
| NET | 9 | 4 | 44.44% | $+139.5 | $+15.5 | 1.44 | eligible |
| UNH | 7 | 3 | 42.86% | $+67.17 | $+9.6 | 1.28 | eligible |
| TSM | 8 | 2 | 25% | $+53.08 | $+6.64 | 1.16 | throttle |
| COST | 4 | 2 | 50% | $+46.2 | $+11.55 | 1.29 | watch |
| ABNB | 6 | 3 | 50% | $+44.14 | $+7.36 | 1.18 | eligible |
| LOW | 6 | 2 | 33.33% | $+42.89 | $+7.15 | 1.12 | throttle |
| HPE | 4 | 1 | 25% | $+34.93 | $+8.73 | 1.18 | watch |
| COIN | 7 | 2 | 28.57% | $+34.89 | $+4.98 | 1.08 | throttle |
| AVGO | 10 | 3 | 30% | $-9.11 | $-0.91 | 0.99 | throttle |
| MA | 2 | 1 | 50% | $-11.97 | $-5.98 | 0.88 | watch |
| CRWD | 7 | 2 | 28.57% | $-16.09 | $-2.3 | 0.95 | throttle |
| ADP | 2 | 1 | 50% | $-22.82 | $-11.41 | 0.73 | watch |
| KLAC | 9 | 3 | 33.33% | $-50.46 | $-5.61 | 0.92 | throttle |
| NVO | 13 | 4 | 30.77% | $-65.14 | $-5.01 | 0.85 | throttle |
| NFLX | 10 | 1 | 10% | $-88.97 | $-8.9 | 0.8 | throttle |
| XOM | 3 | 1 | 33.33% | $-90.05 | $-30.02 | 0.29 | watch |
| HD | 5 | 1 | 20% | $-90.38 | $-18.08 | 0.63 | throttle |
| JPM | 4 | 1 | 25% | $-99.73 | $-24.93 | 0.29 | watch |
| DIS | 6 | 3 | 50% | $-106.52 | $-17.75 | 0.61 | throttle |
| MDB | 10 | 3 | 30% | $-111.75 | $-11.17 | 0.81 | throttle |
| ORCL | 9 | 4 | 44.44% | $-131.05 | $-14.56 | 0.84 | throttle |
| INTU | 5 | 1 | 20% | $-143.59 | $-28.72 | 0.59 | throttle |
| AMZN | 8 | 2 | 25% | $-146.03 | $-18.25 | 0.59 | throttle |
| LMT | 6 | 2 | 33.33% | $-146.92 | $-24.49 | 0.41 | throttle |
| NOW | 6 | 1 | 16.67% | $-151.86 | $-25.31 | 0.69 | throttle |
| MCD | 3 | 0 | 0% | $-153.99 | $-51.33 | 0 | watch |
| TXN | 6 | 1 | 16.67% | $-161.31 | $-26.89 | 0.44 | throttle |
| BA | 8 | 2 | 25% | $-188.25 | $-23.53 | 0.54 | throttle |
| CRM | 5 | 1 | 20% | $-189.17 | $-37.83 | 0.01 | throttle |
| MSFT | 3 | 0 | 0% | $-195.31 | $-65.1 | 0 | watch |
| DELL | 10 | 4 | 40% | $-197.3 | $-19.73 | 0.69 | throttle |
| META | 5 | 1 | 20% | $-201.46 | $-40.29 | 0.22 | throttle |
| GS | 10 | 3 | 30% | $-211.54 | $-21.15 | 0.53 | throttle |
| SHOP | 6 | 2 | 33.33% | $-214.85 | $-35.81 | 0.68 | throttle |
| IBM | 5 | 1 | 20% | $-216.39 | $-43.28 | 0.24 | throttle |
| CAT | 5 | 0 | 0% | $-228.81 | $-45.76 | 0 | throttle |
| AAPL | 7 | 0 | 0% | $-240.35 | $-34.34 | 0 | throttle |
| CVX | 6 | 1 | 16.67% | $-242.48 | $-40.41 | 0.18 | throttle |
| NKE | 6 | 3 | 50% | $-245.97 | $-40.99 | 0.38 | throttle |
| ADBE | 6 | 1 | 16.67% | $-254 | $-42.33 | 0.2 | throttle |
| BAC | 6 | 1 | 16.67% | $-255.92 | $-42.65 | 0.07 | throttle |
| TGT | 9 | 3 | 33.33% | $-256.1 | $-28.46 | 0.48 | throttle |
| ASML | 10 | 3 | 30% | $-266.49 | $-26.65 | 0.6 | throttle |
| PYPL | 12 | 5 | 41.67% | $-267.49 | $-22.29 | 0.58 | throttle |
| SNOW | 6 | 2 | 33.33% | $-293.17 | $-48.86 | 0.55 | throttle |
| PANW | 6 | 2 | 33.33% | $-331.84 | $-55.31 | 0.15 | throttle |
| GE | 6 | 1 | 16.67% | $-338.67 | $-56.44 | 0.2 | throttle |
| AMD | 10 | 3 | 30% | $-357.41 | $-35.74 | 0.36 | throttle |
| DDOG | 4 | 0 | 0% | $-365.46 | $-91.36 | 0 | watch |
| ELF | 6 | 1 | 16.67% | $-436.71 | $-72.78 | 0.1 | throttle |
| LLY | 10 | 3 | 30% | $-441.81 | $-44.18 | 0.39 | throttle |
| AMAT | 6 | 2 | 33.33% | $-462.89 | $-77.15 | 0.27 | throttle |
| UBER | 10 | 3 | 30% | $-467.37 | $-46.74 | 0.38 | throttle |
| ARM | 6 | 1 | 16.67% | $-470.68 | $-78.45 | 0.07 | throttle |
| QCOM | 7 | 1 | 14.29% | $-527.1 | $-75.3 | 0.01 | throttle |
| LRCX | 7 | 1 | 14.29% | $-564.94 | $-80.71 | 0.21 | throttle |
| MRVL | 12 | 4 | 33.33% | $-614.93 | $-51.24 | 0.35 | throttle |
| MU | 7 | 1 | 14.29% | $-742.59 | $-106.08 | 0.05 | throttle |
| SMCI | 8 | 0 | 0% | $-771.99 | $-96.5 | 0 | throttle |
| PLTR | 8 | 0 | 0% | $-1278.13 | $-159.77 | 0 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 282 | 77 | 27.3% | $-6407.46 | $-22.72 |
| trend | 218 | 79 | 36.24% | $-3841.69 | $-17.62 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 31 | 17 | 54.84% | $+383.13 | $+12.36 |
| cleanTrend | 2 | 1 | 50% | $+21.04 | $+10.52 |
| neutral | 467 | 138 | 29.55% | $-10653.32 | $-22.81 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 5 | 1.83 | $+39.71 | 3 | 4.15 | $+134.2 | 0.13% | 3.62 | promote |
| Behavior | noisyHighBeta | 18 | 1.42 | $+11.9 | 13 | 1.31 | $+13 | 0.31% | 1.12 | promote |
| Symbol | TSLA | 13 | 4.34 | $+61.32 | 6 | 0.87 | $-9.67 | 0.32% | 0.73 | watch |
| Symbol | SBUX | 7 | 3.68 | $+77.62 | 2 | 0.66 | $-15.82 | 0.09% | 0.44 | watch |
| Symbol | NFLX | 6 | 1.5 | $+19.38 | 4 | 0 | $-51.31 | 0.21% | 0 | watch |
| Symbol | ABNB | 5 | 1.78 | $+25.35 | 1 | 0 | $-82.62 | 0.08% | 0 | watch |
| Symbol | CELH | 9 | 1.03 | $+1.74 | 1 | ∞ | $+360 | 0% | ∞ | reject |
| Symbol | COIN | 6 | 0.68 | $-24.26 | 1 | ∞ | $+180.48 | 0% | ∞ | reject |
| Symbol | UNH | 5 | 0.06 | $-45.52 | 2 | ∞ | $+147.39 | 0% | ∞ | reject |
| Symbol | ORCL | 7 | 0.6 | $-45.02 | 2 | ∞ | $+92.04 | 0% | ∞ | reject |
| Symbol | NET | 6 | 0.63 | $-15.51 | 3 | 4.49 | $+77.52 | 0.07% | 3.45 | reject |
| Symbol | NVDA | 10 | 0.85 | $-7.89 | 5 | 5.12 | $+73.98 | 0.09% | 4.03 | reject |
| Symbol | PYPL | 8 | 0.15 | $-65.19 | 4 | 11.73 | $+63.51 | 0.02% | 6.3 | reject |
| Symbol | RIVN | 6 | 1.14 | $+6.63 | 2 | 1.78 | $+60.02 | 0.15% | 1.55 | reject |
| Symbol | MDB | 6 | 0.29 | $-53.92 | 4 | 2.54 | $+52.94 | 0.14% | 2.07 | reject |
| Symbol | GOOGL | 6 | 1.04 | $+1.97 | 5 | 2.18 | $+38.71 | 0.15% | 1.73 | reject |
| Symbol | NVO | 9 | 0.72 | $-9.83 | 4 | 1.17 | $+5.84 | 0.08% | 0.82 | reject |
| Symbol | QCOM | 7 | 0.01 | $-75.3 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | META | 5 | 0.22 | $-40.29 | 0 | 0 | $+0 | 0% | 0 | reject |
| Time slot | Open 9:30-10:30 | 7 | 0.16 | $-54.49 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | MU | 5 | 0 | $-147.16 | 2 | 0.86 | $-3.39 | 0.05% | 0.47 | reject |
| Symbol | AMD | 7 | 0.26 | $-49.49 | 3 | 0.88 | $-3.67 | 0.09% | 0.55 | reject |
| Setup | trend | 137 | 0.65 | $-18.75 | 81 | 0.69 | $-15.71 | 1.49% | 0.52 | reject |
| Time slot | Mid 10:30-11:30 | 293 | 0.67 | $-19.11 | 200 | 0.66 | $-21.34 | 4.62% | 0.52 | reject |
| Symbol | UBER | 6 | 0.17 | $-62.13 | 4 | 0.69 | $-23.64 | 0.2% | 0.55 | reject |
| Behavior | neutral | 280 | 0.63 | $-22.2 | 187 | 0.63 | $-23.73 | 4.79% | 0.49 | reject |
| Setup | breakout | 163 | 0.67 | $-20.93 | 119 | 0.64 | $-25.17 | 3.63% | 0.51 | reject |
| Symbol | AMZN | 5 | 0.76 | $-12.28 | 3 | 0.18 | $-28.21 | 0.1% | 0.03 | reject |
| Symbol | AAPL | 5 | 0 | $-36.32 | 2 | 0 | $-29.37 | 0.06% | 0 | reject |
| Symbol | GS | 6 | 0.54 | $-12.76 | 4 | 0.53 | $-33.74 | 0.29% | 0.42 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-11552.53 | 0.63 |
| +3 bps/side | $-14159.26 | 0.57 |
| +5 bps/side | $-16766.05 | 0.52 |
| +10 bps/side | $-23282.65 | 0.41 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 217 |
| timeout | 107 |
| stagnation | 66 |
| stop-loss | 36 |
| breakeven-stop | 29 |
| profit-target | 17 |
| trailing-stop | 15 |
| trim-profit-target | 13 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NOW | 10-30 14:00 | 10-30 14:50 | 948.96 | 943.76 | 14 | 13285.44 | -72.8 | -0.55% | 0.28R | 50m | market | stagnation | breakout | breakout | neutral | 75.07 | ↑927.98 | 4.2503 | 1.69 | **LOSS** |
| 2 | NET | 10-30 14:00 | 10-30 14:30 | 229.48 | 228.27 | 61 | 13998.28 | -73.81 | -0.53% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 3 | MDB | 10-30 14:00 | 10-30 14:20 | 351.1 | 347.27 | 39 | 13692.9 | -149.37 | -1.09% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 74.71 | ↓346.29 | 2.0383 | 2.13 | **LOSS** |
| 4 | PANW | 10-30 15:20 | 10-30 15:40 | 221.26 | 220.28 | 63 | 13939.38 | -61.74 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 56.6 | ↑219.56 | 0.814 | 1.02 | **LOSS** |
| 5 | NET | 10-30 15:20 | 10-30 15:40 | 231.04 | 229.83 | 60 | 13862.4 | -72.6 | -0.52% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 6 | MDB | 10-30 15:20 | 10-30 15:30 | 355.33 | 351.57 | 39 | 13857.87 | -146.64 | -1.06% | 1.26R | 10m | market | stop-loss | trend | trend | neutral | 61.83 | ↑349.52 | 3.7156 | 1.81 | **LOSS** |
| 7 | INTU | 10-31 14:00 | 10-31 14:20 | 665.64 | 662.91 | 21 | 13978.44 | -57.33 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑661.19 | 0.1938 | 2.54 | **LOSS** |
| 8 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.23 | 455.2 | 15 | 13566.9 | +44.55 | +0.66% | 0.51R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 9 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.23 | 454.25 | 15 | 13566.9 | +30.3 | +0.45% | 0.35R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 10 | CVX | 10-31 14:05 | 10-31 14:25 | 158.76 | 157.59 | 88 | 13970.88 | -102.96 | -0.74% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 78.66 | ↓157.51 | 1.0483 | 1.01 | **LOSS** |
| 11 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.36 | 95.76 | 145 | 13972.2 | -87 | -0.62% | 0.31R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 12 | DDOG | 10-31 14:45 | 10-31 15:05 | 162.9 | 162.02 | 85 | 13846.5 | -74.8 | -0.54% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 71.44 | ↑161.57 | 1.218 | 1.59 | **LOSS** |
| 13 | CVX | 10-31 14:45 | 10-31 15:05 | 158.89 | 158.2 | 88 | 13982.32 | -60.72 | -0.43% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 58.76 | ↑157.85 | 1.2387 | 1.35 | **LOSS** |
| 14 | ORCL | 10-31 15:05 | 10-31 15:25 | 265.34 | 262.22 | 52 | 13797.68 | -162.24 | -1.18% | 1.13R | 20m | market | stop-loss | trend | trend | neutral | 72.41 | ↑261.99 | 1.4291 | 1.3 | **LOSS** |
| 15 | ARM | 10-31 15:20 | 10-31 15:45 | 170.26 | 169.65 | 82 | 13961.32 | -50.02 | -0.36% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 78.76 | ↑168.72 | 0.779 | 2.3 | **LOSS** |
| 16 | RIVN | 10-31 15:20 | 10-31 15:55 | 13.34 | 13.28 | 1049 | 13993.66 | -62.94 | -0.45% | 0.45R | 35m | market | early-reversal | breakout | breakout | neutral | 90.29 | ↑13.04 | 0.0561 | 1.26 | **LOSS** |
| 17 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.54 | 207.29 | 67 | 13972.18 | -83.75 | -0.6% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 18 | AMZN | 11-03 14:30 | 11-03 14:50 | 258.44 | 254.79 | 29 | 7494.76 | -105.85 | -1.41% | 0.71R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.99 | ↓257.17 | 2.7097 | 5.92 | **LOSS** |
| 19 | MSFT | 11-03 14:30 | 11-03 15:15 | 522.38 | 519.94 | 26 | 13581.88 | -63.44 | -0.47% | 0.56R | 45m | market | early-reversal | trend | trend | neutral | 64.19 | ↓521.9 | 0.2996 | 3.01 | **LOSS** |
| 20 | QCOM | 11-03 14:30 | 11-03 14:35 | 183.46 | 181.43 | 70 | 12842.2 | -142.1 | -1.11% | 1.59R | 5m | market | stop-loss | trend | trend | neutral | 70.77 | ↓182.74 | 0.3247 | 1.5 | **LOSS** |
| 21 | UBER | 11-03 14:30 | 11-03 15:00 | 97.93 | 97.51 | 142 | 13906.06 | -59.64 | -0.43% | 0.61R | 30m | market | early-reversal | breakout | breakout | neutral | 78.2 | ↓97.66 | 0.2553 | 1.69 | **LOSS** |
| 22 | BA | 11-03 14:30 | 11-03 16:15 | 202.63 | 204.84 | 69 | 13981.47 | +152.49 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 23 | LLY | 11-03 14:30 | 11-03 15:20 | 879.31 | 875.81 | 14 | 12310.34 | -49 | -0.4% | 0.5R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 24 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.94 | 92.8 | 148 | 13903.12 | -168.72 | -1.21% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 25 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.39 | 203.89 | 68 | 13966.52 | -102 | -0.73% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 26 | NET | 11-03 14:35 | 11-03 15:15 | 255.73 | 253.85 | 54 | 13809.42 | -101.52 | -0.74% | 0.45R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 27 | PYPL | 11-03 14:35 | 11-03 14:50 | 69.85 | 68.93 | 200 | 13970 | -184 | -1.32% | 1.78R | 15m | market | stop-loss | trend | trend | neutral | 64.97 | ↓69.76 | 0.2984 | 1.18 | **LOSS** |
| 28 | DDOG | 11-03 14:40 | 11-03 15:05 | 164.41 | 163.41 | 85 | 13974.85 | -85 | -0.61% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 62.79 | ↓164.35 | 0.7088 | 1.42 | **LOSS** |
| 29 | SMCI | 11-03 14:45 | 11-03 15:15 | 52.63 | 52.2 | 245 | 12894.35 | -105.35 | -0.82% | 0.58R | 30m | market | early-reversal | breakout | trend | neutral | 79.6 | ↓52.43 | 0.262 | 1.12 | **LOSS** |
| 30 | AVGO | 11-04 14:55 | 11-04 15:45 | 366.22 | 364.96 | 38 | 13916.36 | -47.88 | -0.34% | 0.24R | 50m | market | stagnation | breakout | breakout | neutral | 56.55 | ↑362.68 | -0.1898 | 4.32 | **LOSS** |
| 31 | GS | 11-04 15:05 | 11-04 16:10 | 795.57 | 795.74 | 17 | 13524.69 | +2.89 | +0.02% | 0.02R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 32 | LLY | 11-04 15:25 | 11-04 15:40 | 913.37 | 897.65 | 14 | 12787.18 | -220.08 | -1.72% | 1.2R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 33 | NVO | 11-04 15:25 | 11-04 15:45 | 49.22 | 48.81 | 284 | 13978.48 | -116.44 | -0.83% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 51.88 | ↓48.63 | -0.1481 | 2.41 | **LOSS** |
| 34 | AMAT | 11-05 14:30 | 11-05 16:15 | 235.29 | 237.93 | 55 | 12940.95 | +145.2 | +1.12% | 1.14R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑233.51 | -0.3934 | 1.8 | **WIN** |
| 35 | LRCX | 11-05 14:30 | 11-05 16:15 | 159.79 | 161.72 | 80 | 12783.2 | +154.4 | +1.21% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 69.67 | ↑159.05 | -0.2161 | 1.41 | **WIN** |
| 36 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.82 | 79.28 | 175 | 13968.5 | -94.5 | -0.68% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 37 | PYPL | 11-05 14:40 | 11-05 15:45 | 66.88 | 67.58 | 104 | 13911.04 | +72.8 | +1.05% | 1.38R | 65m | market | trim-profit-target | trend | trend | neutral | 60.53 | ↑66.71 | 0.0921 | 1.13 | **WIN** |
| 38 | PYPL | 11-05 14:40 | 11-05 16:25 | 66.88 | 67.04 | 104 | 13911.04 | +16.64 | +0.24% | 0.32R | 105m | market | timeout | trend | trend | neutral | 60.53 | ↓66.71 | 0.0921 | 1.13 | **WIN** |
| 39 | MCD | 11-05 14:40 | 11-05 15:30 | 307.85 | 306.54 | 45 | 13853.25 | -58.95 | -0.43% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 76.23 | ↓305.84 | 2.0202 | 1.75 | **LOSS** |
| 40 | CAT | 11-05 14:45 | 11-05 16:10 | 560.02 | 559.05 | 24 | 13440.48 | -23.28 | -0.17% | 0.17R | 85m | market | breakeven-stop | breakout | breakout | neutral | 82.94 | ↓555.89 | 1.2443 | 1.27 | **LOSS** |
| 41 | NVDA | 11-05 14:50 | 11-05 16:35 | 200.3 | 201.42 | 69 | 13820.7 | +77.28 | +0.56% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | 60.4 | ↑198.89 | -0.1305 | 1.48 | **WIN** |
| 42 | GOOGL | 11-05 14:50 | 11-05 16:10 | 282.53 | 282.47 | 49 | 13843.97 | -2.94 | -0.02% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | neutral | 75.59 | ↑279.55 | 0.6978 | 1.13 | **LOSS** |
| 43 | LLY | 11-05 15:20 | 11-05 16:05 | 933.47 | 944.44 | 7 | 13068.58 | +76.79 | +1.18% | 0.9R | 45m | market | trim-profit-target | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 44 | LLY | 11-05 15:20 | 11-05 17:05 | 933.47 | 952.74 | 7 | 13068.58 | +134.89 | +2.06% | 1.57R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 45 | PLTR | 11-06 14:45 | 11-06 14:50 | 190.4 | 186.99 | 73 | 13899.2 | -248.93 | -1.79% | 1.38R | 5m | market | stop-loss | breakout | breakout | neutral | 62.28 | ↓188.86 | 0.2888 | 1.49 | **LOSS** |
| 46 | UBER | 11-07 14:30 | 11-07 14:45 | 92.95 | 91.88 | 150 | 13942.5 | -160.5 | -1.15% | 1.6R | 15m | market | stop-loss | trend | trend | neutral | 73.53 | ↓92.57 | 0.1437 | 1.14 | **LOSS** |
| 47 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.44 | 84.7 | 154 | 12849.76 | +194.04 | +1.51% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 48 | INTC | 11-07 15:05 | 11-07 15:25 | 37.97 | 37.63 | 368 | 13972.96 | -125.12 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 49 | AAPL | 11-10 14:30 | 11-10 15:35 | 271.65 | 271.11 | 51 | 13854.15 | -27.54 | -0.2% | 0.28R | 65m | market | breakeven-stop | breakout | breakout | neutral | 80.22 | ↓270.77 | 0.4078 | 1.35 | **LOSS** |
| 50 | NFLX | 11-10 14:30 | 11-10 16:00 | 1119.11 | 1118 | 12 | 13429.32 | -13.32 | -0.1% | 0.14R | 90m | market | breakeven-stop | breakout | breakout | neutral | 80.29 | ↓1113.99 | 3.63 | 1.25 | **LOSS** |
| 51 | UBER | 11-10 14:30 | 11-10 15:15 | 93.05 | 92.61 | 150 | 13957.5 | -66 | -0.47% | 0.66R | 45m | market | early-reversal | breakout | breakout | neutral | 77.73 | ↓92.87 | 0.3663 | 1.2 | **LOSS** |
| 52 | PANW | 11-10 14:30 | 11-10 14:50 | 214.68 | 213.54 | 65 | 13954.2 | -74.1 | -0.53% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 53 | PYPL | 11-10 14:30 | 11-10 14:50 | 67.18 | 66.62 | 208 | 13973.44 | -116.48 | -0.83% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 68.36 | ↓67.14 | 0.2605 | 1.7 | **LOSS** |
| 54 | BAC | 11-10 14:30 | 11-10 14:50 | 53.89 | 53.61 | 259 | 13957.51 | -72.52 | -0.52% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 68.2 | ↓53.76 | 0.0305 | 1.27 | **LOSS** |
| 55 | META | 11-10 14:35 | 11-10 15:50 | 628.71 | 628.69 | 22 | 13831.62 | -0.44 | 0% | 0R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **LOSS** |
| 56 | QCOM | 11-10 14:40 | 11-10 15:00 | 173.49 | 171.91 | 80 | 13879.2 | -126.4 | -0.91% | 0.88R | 20m | market | early-reversal | breakout | trend | neutral | 76.44 | ↓173.57 | 0.9063 | 1.48 | **LOSS** |
| 57 | KLAC | 11-10 14:40 | 11-10 15:05 | 1223.81 | 1214.69 | 10 | 12238.1 | -91.2 | -0.75% | 0.64R | 25m | market | early-reversal | breakout | trend | neutral | 74.84 | ↓1221.2 | 7.5413 | 1.07 | **LOSS** |
| 58 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.43 | 446.76 | 8 | 7470.31 | +58.64 | +1.67% | 1.11R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 59 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.43 | 446.32 | 9 | 7470.31 | +62.01 | +1.57% | 1.05R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 60 | RIVN | 11-10 15:05 | 11-10 16:45 | 15.29 | 15.86 | 503 | 7690.87 | +286.71 | +3.73% | 1.87R | 100m | market | profit-target | trend | trend | noisyHighBeta | 48.26 | ↑15.22 | 0.0622 | 1.09 | **WIN** |
| 61 | NVDA | 11-10 15:20 | 11-10 15:50 | 196.58 | 195.23 | 71 | 13957.18 | -95.85 | -0.69% | 0.68R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓194.98 | 2.4553 | 1.11 | **LOSS** |
| 62 | ASML | 11-10 15:25 | 11-10 15:50 | 1035.12 | 1026.75 | 13 | 13456.56 | -108.81 | -0.81% | 0.86R | 25m | market | stop-loss | trend | trend | neutral | 71.52 | ↓1031.84 | 6.0405 | 1.51 | **LOSS** |
| 63 | NOW | 11-10 15:25 | 11-10 15:45 | 866.09 | 861.11 | 16 | 13857.44 | -79.68 | -0.57% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓861.35 | 1.8126 | 1.15 | **LOSS** |
| 64 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.42 | 86.68 | 164 | 14008.88 | +206.64 | +1.48% | 2.11R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 65 | QCOM | 11-11 14:35 | 11-11 15:50 | 173.6 | 173.67 | 80 | 13888 | +5.6 | +0.04% | 0.06R | 75m | market | breakeven-stop | breakout | breakout | neutral | 77.51 | ↓172.92 | 0.4108 | 1.33 | **WIN** |
| 66 | ADBE | 11-11 14:45 | 11-11 15:45 | 332.28 | 331.25 | 42 | 13955.76 | -43.26 | -0.31% | 0.44R | 60m | market | early-reversal | trend | trend | neutral | 72.56 | ↓331.28 | 0.8535 | 1.53 | **LOSS** |
| 67 | LOW | 11-11 14:50 | 11-11 15:10 | 235.47 | 233.78 | 59 | 13892.73 | -99.71 | -0.72% | 1.03R | 20m | market | early-reversal | trend | trend | neutral | 62.79 | ↓234.97 | 0.7323 | 1.03 | **LOSS** |
| 68 | TXN | 11-11 15:00 | 11-11 15:50 | 161.75 | 161.26 | 85 | 13748.75 | -41.65 | -0.3% | 0.43R | 50m | market | early-reversal | trend | trend | neutral | 76.74 | ↓161.04 | 0.4419 | 1.75 | **LOSS** |
| 69 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.21 | 122.77 | 114 | 13931.94 | +63.84 | +0.46% | 0.51R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 70 | CRM | 11-12 14:30 | 11-12 14:50 | 247.85 | 246.99 | 52 | 12888.2 | -44.72 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 71.38 | ↓247.15 | 0.3776 | 1.43 | **LOSS** |
| 71 | UBER | 11-12 14:30 | 11-12 15:35 | 94.58 | 94.03 | 147 | 13903.26 | -80.85 | -0.58% | 0.83R | 65m | market | early-reversal | trend | trend | neutral | 73.98 | ↓94.31 | 0.1044 | 1.48 | **LOSS** |
| 72 | NVO | 11-12 14:30 | 11-12 16:00 | 49.79 | 49.75 | 280 | 13941.2 | -11.2 | -0.08% | 0.1R | 90m | market | breakeven-stop | trend | breakout | neutral | 65.33 | ↓49.64 | 0.127 | 2.05 | **LOSS** |
| 73 | JPM | 11-12 14:35 | 11-12 16:20 | 320.68 | 320.49 | 43 | 13789.24 | -8.17 | -0.06% | 0.09R | 105m | market | stagnation | breakout | breakout | neutral | 74.44 | ↓318.84 | 0.2818 | 2 | **LOSS** |
| 74 | BAC | 11-12 14:35 | 11-12 16:20 | 54.35 | 54.43 | 257 | 13967.95 | +20.56 | +0.15% | 0.21R | 105m | market | timeout | breakout | breakout | neutral | 78.1 | ↓54.09 | 0.027 | 1.22 | **WIN** |
| 75 | LLY | 11-12 14:35 | 11-12 15:20 | 1010.08 | 1004.41 | 13 | 13131.04 | -73.71 | -0.56% | 0.8R | 45m | market | early-reversal | breakout | breakout | neutral | 84.12 | ↓1004.3 | 1.7316 | 1.33 | **LOSS** |
| 76 | DELL | 11-12 14:40 | 11-12 16:25 | 141.58 | 142.28 | 98 | 13874.84 | +68.6 | +0.49% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | 62.78 | ↑140.42 | -0.0264 | 1.13 | **WIN** |
| 77 | AMD | 11-12 15:00 | 11-12 15:45 | 255.31 | 261.21 | 13 | 6893.37 | +76.7 | +2.31% | 1.16R | 45m | market | trim-profit-target | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 78 | AMD | 11-12 15:00 | 11-12 15:55 | 255.31 | 258.67 | 14 | 6893.37 | +47.04 | +1.32% | 0.66R | 55m | market | trailing-stop | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 79 | QCOM | 11-12 15:00 | 11-12 15:20 | 176.86 | 175.73 | 78 | 13795.08 | -88.14 | -0.64% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 74.13 | ↓176.35 | 0.6498 | 2.31 | **LOSS** |
| 80 | LRCX | 11-12 15:05 | 11-12 15:25 | 161.21 | 159.65 | 86 | 13864.06 | -134.16 | -0.97% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 67.29 | ↓160.56 | 0.2963 | 1.2 | **LOSS** |
| 81 | MU | 11-13 14:30 | 11-13 14:40 | 246.97 | 238.92 | 56 | 13830.32 | -450.8 | -3.26% | 3.84R | 10m | market | stop-loss | breakout | trend | neutral | 69.78 | ↓245.61 | 0.1631 | 5.26 | **LOSS** |
| 82 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.94 | 122.3 | 113 | 13892.22 | -72.32 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 83 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.15 | 189.89 | 75 | 13961.25 | +280.5 | +2.01% | 1.26R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 84 | AVGO | 11-14 14:50 | 11-14 15:10 | 337.8 | 335.11 | 41 | 13849.8 | -110.29 | -0.8% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 45.85 | ↑334 | -0.8612 | 1.66 | **LOSS** |
| 85 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.27 | 87.17 | 158 | 13946.66 | -173.8 | -1.25% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 86 | ORCL | 11-14 15:05 | 11-14 16:25 | 218.33 | 223.69 | 64 | 13973.12 | +343.04 | +2.45% | 1.23R | 80m | market | profit-target | breakout | breakout | neutral | 51.85 | ↑214.55 | -0.1836 | 1.14 | **WIN** |
| 87 | TSLA | 11-14 15:25 | 11-14 17:10 | 400.19 | 409.48 | 35 | 14006.65 | +325.15 | +2.32% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 88 | ARM | 11-17 14:30 | 11-17 15:05 | 142.93 | 141.32 | 90 | 12863.7 | -144.9 | -1.13% | 1.06R | 35m | market | early-reversal | breakout | breakout | neutral | 65.57 | ↓141.94 | 0.0466 | 4.93 | **LOSS** |
| 89 | ASML | 11-17 14:30 | 11-17 16:00 | 1017.27 | 1017.68 | 13 | 13224.51 | +5.33 | +0.04% | 0.06R | 90m | market | breakeven-stop | trend | breakout | neutral | 69.98 | ↓1013.35 | 0.2463 | 2.9 | **WIN** |
| 90 | AVGO | 11-17 14:35 | 11-17 15:30 | 346.52 | 345.76 | 40 | 13860.8 | -30.4 | -0.22% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 65.49 | ↓343.92 | 0.3558 | 2.08 | **LOSS** |
| 91 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.59 | 85.92 | 162 | 14027.58 | -108.54 | -0.77% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 92 | ELF | 11-17 14:35 | 11-17 15:35 | 75 | 75.28 | 173 | 12975 | +48.44 | +0.37% | 0.29R | 60m | market | trailing-stop | breakout | breakout | neutral | 62.31 | ↑73.84 | -0.2168 | 1.73 | **WIN** |
| 93 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.61 | 289.65 | 47 | 13752.67 | -139.12 | -1.01% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 94 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.64 | 419.44 | 34 | 14063.76 | +197.2 | +1.4% | 1.01R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 95 | NFLX | 11-18 14:45 | 11-18 16:00 | 111.62 | 111.35 | 125 | 13952.5 | -33.75 | -0.24% | 0.22R | 75m | market | stagnation | breakout | breakout | neutral | 60.29 | ↓110.31 | 0.1571 | 2.1 | **LOSS** |
| 96 | INTU | 11-18 14:45 | 11-18 15:05 | 656.71 | 652.03 | 21 | 13790.91 | -98.28 | -0.71% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 71.13 | ↓654.94 | 1.7238 | 2.41 | **LOSS** |
| 97 | GOOGL | 11-19 14:30 | 11-19 14:55 | 292.58 | 300.32 | 44 | 12873.52 | +340.56 | +2.65% | 2.43R | 25m | market | profit-target | breakout | breakout | neutral | 67.68 | ↑290.78 | 0.049 | 5.16 | **WIN** |
| 98 | NVDA | 11-19 14:35 | 11-19 16:20 | 184.99 | 185.22 | 75 | 13874.25 | +17.25 | +0.12% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | 60.43 | ↓184.25 | -0.0575 | 1.37 | **WIN** |
| 99 | AVGO | 11-19 14:40 | 11-19 15:05 | 345.17 | 355.48 | 40 | 13806.8 | +412.4 | +2.99% | 2.49R | 25m | market | profit-target | breakout | breakout | neutral | 58.63 | ↑341.77 | -0.9441 | 1.52 | **WIN** |
| 100 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.35 | 144.81 | 97 | 13904.95 | +141.62 | +1.02% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 101 | INTC | 11-19 14:45 | 11-19 15:55 | 34.91 | 35.05 | 400 | 13964 | +56 | +0.4% | 0.37R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 102 | CAT | 11-19 14:45 | 11-19 15:50 | 556.38 | 555.83 | 25 | 13909.5 | -13.75 | -0.1% | 0.14R | 65m | market | stagnation | breakout | breakout | neutral | 71.25 | ↓552.77 | 0.8768 | 1.71 | **LOSS** |
| 103 | NVO | 11-19 14:45 | 11-19 15:35 | 48.42 | 48.32 | 288 | 13944.96 | -28.8 | -0.21% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 68.73 | ↓48.23 | 0.0771 | 1.21 | **LOSS** |
| 104 | TSM | 11-19 14:50 | 11-19 16:00 | 281.74 | 281.52 | 49 | 13805.26 | -10.78 | -0.08% | 0.09R | 70m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓279.69 | 0.3004 | 1.73 | **LOSS** |
| 105 | ASML | 11-19 14:55 | 11-19 15:40 | 1032.15 | 1028.64 | 13 | 13417.95 | -45.63 | -0.34% | 0.47R | 45m | market | early-reversal | breakout | breakout | neutral | 83.13 | ↑1022.52 | 4.1618 | 1.58 | **LOSS** |
| 106 | ORCL | 11-19 15:00 | 11-19 15:40 | 228.11 | 224.83 | 56 | 12774.16 | -183.68 | -1.44% | 0.77R | 40m | market | early-reversal | breakout | breakout | neutral | 68.66 | ↓223.69 | 0.7165 | 1.8 | **LOSS** |
| 107 | AAPL | 11-19 15:10 | 11-19 15:55 | 271.27 | 270.22 | 51 | 13834.77 | -53.55 | -0.39% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 71.19 | ↑269.24 | 0.6054 | 1 | **LOSS** |
| 108 | JPM | 11-19 15:10 | 11-19 15:30 | 304.22 | 302.66 | 46 | 13994.12 | -71.76 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.8 | ↓303.2 | 0.7662 | 2.85 | **LOSS** |
| 109 | LOW | 11-19 15:10 | 11-19 16:55 | 227.81 | 231.36 | 61 | 13896.41 | +216.55 | +1.56% | 0.78R | 105m | market | timeout | trend | trend | neutral | 72.42 | ↑227.37 | 1.4432 | 1.03 | **WIN** |
| 110 | TSLA | 11-19 15:15 | 11-19 15:35 | 410.53 | 407.84 | 18 | 7389.54 | -48.42 | -0.66% | 0.38R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↑406.75 | 1.7263 | 1.09 | **LOSS** |
| 111 | AAPL | 11-20 14:30 | 11-20 16:05 | 272.68 | 272.66 | 51 | 13906.68 | -1.02 | -0.01% | 0.01R | 95m | market | breakeven-stop | trend | trend | neutral | 69.09 | ↓272.4 | 0.0598 | 3.59 | **LOSS** |
| 112 | PLTR | 11-20 14:30 | 11-20 15:05 | 173.34 | 170.86 | 44 | 7626.96 | -109.12 | -1.43% | 0.76R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 78.02 | ↓172.89 | 2.1297 | 2.13 | **LOSS** |
| 113 | TGT | 11-20 14:30 | 11-20 14:50 | 86.84 | 86.15 | 161 | 13981.24 | -111.09 | -0.79% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 114 | CELH | 11-20 14:30 | 11-20 14:50 | 42.23 | 41.48 | 305 | 12880.15 | -228.75 | -1.78% | 1.26R | 20m | market | early-reversal | breakout | breakout | neutral | 68.15 | ↓42.2 | 0.0388 | 1.62 | **LOSS** |
| 115 | INTU | 11-20 14:35 | 11-20 14:55 | 660.28 | 656.7 | 21 | 13865.88 | -75.18 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 78.23 | ↓657.69 | 0.9901 | 1.61 | **LOSS** |
| 116 | TXN | 11-20 14:35 | 11-20 15:10 | 158.75 | 158.19 | 88 | 13970 | -49.28 | -0.35% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 71.35 | ↓158.42 | 0.2053 | 1.28 | **LOSS** |
| 117 | CAT | 11-20 14:45 | 11-20 15:35 | 565.43 | 564.69 | 24 | 13570.32 | -17.76 | -0.13% | 0.11R | 50m | market | stagnation | breakout | breakout | neutral | 69.38 | ↑563.22 | 1.8027 | 1.41 | **LOSS** |
| 118 | DELL | 11-20 14:55 | 11-20 15:45 | 124.87 | 124.32 | 61 | 7617.07 | -33.55 | -0.44% | 0.24R | 50m | market | stagnation | trend | trend | noisyHighBeta | 78.11 | ↓123.98 | 1.0896 | 1.32 | **LOSS** |
| 119 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.15 | 83.97 | 165 | 13884.75 | -29.7 | -0.21% | 0.11R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 120 | MDB | 11-20 15:10 | 11-20 15:55 | 350.32 | 348.34 | 39 | 13662.48 | -77.22 | -0.57% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 77.59 | ↓348.97 | 3.7502 | 1.03 | **LOSS** |
| 121 | GOOGL | 11-21 14:30 | 11-21 15:05 | 298.53 | 296.33 | 46 | 13732.38 | -101.2 | -0.74% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 122 | META | 11-21 14:30 | 11-21 14:55 | 592.98 | 588.24 | 23 | 13638.54 | -109.02 | -0.8% | 0.94R | 25m | market | early-reversal | trend | trend | neutral | 64.75 | ↓591.13 | 0.6814 | 1.94 | **LOSS** |
| 123 | HD | 11-21 14:35 | 11-21 15:40 | 338.39 | 338.01 | 41 | 13873.99 | -15.58 | -0.11% | 0.16R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 124 | LLY | 11-21 14:45 | 11-21 15:00 | 1059.14 | 1048.12 | 13 | 13768.82 | -143.26 | -1.04% | 1.39R | 15m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 125 | MCD | 11-21 14:45 | 11-21 16:10 | 308.4 | 308.01 | 45 | 13878 | -17.55 | -0.13% | 0.18R | 85m | market | stagnation | breakout | breakout | neutral | 77.27 | ↓307.97 | 1.2787 | 1.11 | **LOSS** |
| 126 | AAPL | 11-24 14:30 | 11-24 14:50 | 274.98 | 273.41 | 50 | 13749 | -78.5 | -0.57% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 67.43 | ↓273.82 | 0.0722 | 1.64 | **LOSS** |
| 127 | ASML | 11-24 14:30 | 11-24 16:15 | 983.57 | 994.54 | 13 | 12786.41 | +142.61 | +1.12% | 1.35R | 105m | market | timeout | breakout | breakout | neutral | 69.06 | ↑981.49 | 0.4006 | 1.48 | **WIN** |
| 128 | NET | 11-24 14:30 | 11-24 16:05 | 190.09 | 192.4 | 36 | 13876.57 | +83.16 | +1.22% | 1.17R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 129 | NET | 11-24 14:30 | 11-24 16:15 | 190.09 | 192.12 | 37 | 13876.57 | +75.11 | +1.07% | 1.03R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 130 | MDB | 11-24 14:30 | 11-24 16:15 | 328.19 | 331.6 | 39 | 12799.41 | +132.99 | +1.04% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 64.32 | ↑327.01 | 0.1465 | 2.41 | **WIN** |
| 131 | TSM | 11-24 14:45 | 11-24 16:30 | 279.53 | 284.17 | 50 | 13976.5 | +232 | +1.66% | 1.47R | 105m | market | timeout | breakout | breakout | neutral | 65.72 | ↑277.75 | -0.0179 | 1.65 | **WIN** |
| 132 | KLAC | 11-24 14:45 | 11-24 16:30 | 1126.29 | 1139.8 | 12 | 13515.48 | +162.12 | +1.2% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 68.14 | ↑1120.91 | 4.8438 | 1.11 | **WIN** |
| 133 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.93 | 81.57 | 47 | 7607.42 | +30.08 | +0.79% | 0.4R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 134 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.93 | 81.59 | 47 | 7607.42 | +31.02 | +0.82% | 0.41R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 135 | AAPL | 11-25 14:30 | 11-25 15:20 | 278.72 | 278.3 | 50 | 13936 | -21 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.39 | ↓277.73 | 0.1033 | 2.31 | **LOSS** |
| 136 | META | 11-25 14:35 | 11-25 16:20 | 624.07 | 626.67 | 22 | 13729.54 | +57.2 | +0.42% | 0.56R | 105m | market | timeout | trend | trend | neutral | 77.02 | ↑622.04 | 1.8351 | 2.72 | **WIN** |
| 137 | UNH | 11-25 14:35 | 11-25 15:00 | 327.04 | 324.86 | 42 | 13735.68 | -91.56 | -0.67% | 0.76R | 25m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↓324.84 | 0.2322 | 1.38 | **LOSS** |
| 138 | MA | 11-25 14:35 | 11-25 14:55 | 545.96 | 541.91 | 25 | 13649 | -101.25 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | trend | neutral | 74.84 | ↓544.28 | 0.2295 | 1.1 | **LOSS** |
| 139 | PYPL | 11-25 14:40 | 11-25 15:00 | 61.57 | 60.84 | 226 | 13914.82 | -164.98 | -1.19% | 1.2R | 20m | market | early-reversal | breakout | breakout | neutral | 71.63 | ↓61.34 | 0.1448 | 1.35 | **LOSS** |
| 140 | LOW | 11-25 14:40 | 11-25 16:25 | 233.37 | 236.43 | 60 | 14002.2 | +183.6 | +1.31% | 1.7R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑232.36 | -0.0421 | 2.03 | **WIN** |
| 141 | ADP | 11-25 14:45 | 11-25 16:30 | 253.69 | 254.94 | 50 | 12684.5 | +62.5 | +0.49% | 0.7R | 105m | market | timeout | breakout | breakout | neutral | 75.92 | ↑252.32 | 0.3525 | 1.57 | **WIN** |
| 142 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.94 | 117.29 | 119 | 13915.86 | +41.65 | +0.3% | 0.29R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 143 | GE | 11-26 14:30 | 11-26 14:50 | 296.5 | 294.65 | 47 | 13935.5 | -86.95 | -0.62% | 0.89R | 20m | market | early-reversal | trend | breakout | neutral | 78.94 | ↓296.29 | 0.3988 | 1.65 | **LOSS** |
| 144 | UNH | 11-26 14:30 | 11-26 15:10 | 329.52 | 329.87 | 42 | 13839.84 | +14.7 | +0.11% | 0.16R | 40m | market | trailing-stop | trend | trend | neutral | 69.87 | ↓328.3 | 0.4355 | 2.26 | **WIN** |
| 145 | LRCX | 11-26 14:30 | 11-26 15:10 | 153.84 | 152.93 | 84 | 12922.56 | -76.44 | -0.59% | 0.84R | 40m | market | early-reversal | trend | trend | neutral | 78.35 | ↓153.56 | 0.504 | 1.09 | **LOSS** |
| 146 | CELH | 11-26 14:30 | 11-26 16:00 | 40.79 | 41.37 | 94 | 7668.52 | +54.52 | +1.42% | 1.15R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 78.95 | ↑40.72 | 0.2251 | 1.06 | **WIN** |
| 147 | CELH | 11-26 14:30 | 11-26 16:15 | 40.79 | 41.22 | 94 | 7668.52 | +40.42 | +1.05% | 0.85R | 105m | market | timeout | trend | trend | noisyHighBeta | 78.95 | ↓40.72 | 0.2251 | 1.06 | **WIN** |
| 148 | SMCI | 11-26 14:40 | 11-26 14:55 | 33.33 | 32.65 | 419 | 13965.27 | -284.92 | -2.04% | 1.84R | 15m | market | stop-loss | breakout | breakout | neutral | 81.14 | ↓33.18 | 0.2153 | 1.27 | **LOSS** |
| 149 | UBER | 11-28 14:35 | 11-28 16:20 | 86.68 | 87.16 | 160 | 13868.8 | +76.8 | +0.55% | 0.75R | 105m | market | timeout | trend | trend | neutral | 71.22 | ↑86.48 | 0.114 | 1.04 | **WIN** |
| 150 | PANW | 11-28 14:40 | 11-28 16:25 | 189.37 | 190.18 | 73 | 13824.01 | +59.13 | +0.43% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 87.43 | ↑188.26 | 0.4452 | 1.29 | **WIN** |
| 151 | MDB | 11-28 14:40 | 11-28 15:30 | 333.55 | 333.08 | 41 | 13675.55 | -19.27 | -0.14% | 0.12R | 50m | market | stagnation | breakout | breakout | neutral | 63.85 | ↑332.36 | 0.1192 | 2.01 | **LOSS** |
| 152 | RIVN | 11-28 14:45 | 11-28 16:30 | 16.86 | 16.94 | 425 | 7165.5 | +34 | +0.47% | 0.27R | 105m | market | timeout | breakout | trend | noisyHighBeta | 68.26 | ↑16.69 | 0.0984 | 1.05 | **WIN** |
| 153 | MU | 11-28 15:00 | 11-28 15:20 | 236.88 | 234.13 | 32 | 7580.16 | -88 | -1.16% | 0.76R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.65 | ↓236.4 | 1.4354 | 1.2 | **LOSS** |
| 154 | TGT | 11-28 15:10 | 11-28 16:55 | 91.24 | 91.42 | 153 | 13959.72 | +27.54 | +0.2% | 0.25R | 105m | market | timeout | trend | trend | neutral | 71.51 | ↑90.77 | 0.3283 | 1.46 | **WIN** |
| 155 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.91 | 233.9 | 59 | 13859.69 | -59.59 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 156 | DIS | 12-01 14:30 | 12-01 15:20 | 105.34 | 105.37 | 132 | 13904.88 | +3.96 | +0.03% | 0.04R | 50m | market | breakeven-stop | trend | trend | neutral | 67.1 | ↓105.07 | 0.0713 | 1.04 | **WIN** |
| 157 | CELH | 12-01 14:35 | 12-01 15:25 | 41.41 | 41.54 | 337 | 13955.17 | +43.81 | +0.31% | 0.26R | 50m | market | trailing-stop | breakout | breakout | neutral | 71.67 | ↓41.25 | 0.0702 | 3.18 | **WIN** |
| 158 | AMD | 12-01 14:45 | 12-01 15:05 | 219.51 | 217.64 | 59 | 12951.09 | -110.33 | -0.85% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 68.38 | ↑216.03 | 0.2333 | 2.2 | **LOSS** |
| 159 | ASML | 12-01 14:50 | 12-01 15:10 | 1073.1 | 1069.55 | 13 | 13950.3 | -46.15 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 81.32 | ↑1062.78 | 4.7465 | 1.33 | **LOSS** |
| 160 | ELF | 12-01 14:50 | 12-01 15:45 | 77.29 | 77.24 | 181 | 13989.49 | -9.05 | -0.06% | 0.06R | 55m | market | breakeven-stop | breakout | breakout | neutral | 64.83 | ↓76.81 | 0.0261 | 2.35 | **LOSS** |
| 161 | AMD | 12-02 14:30 | 12-02 15:20 | 223.59 | 222.77 | 62 | 13862.58 | -50.84 | -0.37% | 0.37R | 50m | market | stagnation | breakout | breakout | neutral | 84.28 | ↓222.34 | 0.4825 | 5.36 | **LOSS** |
| 162 | SMCI | 12-02 14:30 | 12-02 15:20 | 33.97 | 33.95 | 410 | 13927.7 | -8.2 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 66.1 | ↓33.77 | -0.0159 | 1.52 | **LOSS** |
| 163 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 83 | 12816.03 | +309.59 | +2.42% | 2.1R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 164 | AMAT | 12-02 14:30 | 12-02 16:15 | 258.16 | 258.64 | 50 | 12908 | +24 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 77.42 | ↓257.29 | 0.2583 | 1.76 | **WIN** |
| 165 | MU | 12-02 14:35 | 12-02 15:00 | 243.91 | 242.15 | 57 | 13902.87 | -100.32 | -0.72% | 0.65R | 25m | market | early-reversal | breakout | breakout | neutral | 66.95 | ↑240.89 | 0.1426 | 1.7 | **LOSS** |
| 166 | TSM | 12-02 14:35 | 12-02 15:25 | 292.41 | 291.7 | 47 | 13743.27 | -33.37 | -0.24% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 167 | CRWD | 12-02 14:35 | 12-02 15:25 | 515.15 | 512.87 | 27 | 13909.05 | -61.56 | -0.44% | 0.55R | 50m | market | stagnation | breakout | breakout | neutral | 81.95 | ↓512.99 | 1.1955 | 1.3 | **LOSS** |
| 168 | NET | 12-02 14:35 | 12-02 15:55 | 203.23 | 203.18 | 68 | 13819.64 | -3.4 | -0.02% | 0.02R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **LOSS** |
| 169 | INTC | 12-02 14:45 | 12-02 15:25 | 41.14 | 42.26 | 340 | 13987.6 | +380.8 | +2.72% | 2.06R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 170 | UNH | 12-02 14:55 | 12-02 15:15 | 328.63 | 326.73 | 42 | 13802.46 | -79.8 | -0.58% | 0.83R | 20m | market | early-reversal | trend | breakout | neutral | 65 | ↑325.45 | -0.2713 | 1.35 | **LOSS** |
| 171 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.76 | 441.23 | 16 | 13944.32 | +87.52 | +1.26% | 1.58R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 172 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.76 | 439.57 | 16 | 13944.32 | +60.96 | +0.87% | 1.09R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 173 | QCOM | 12-03 14:35 | 12-03 14:55 | 172.47 | 171.81 | 80 | 13797.6 | -52.8 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↓171.74 | 0.4068 | 2.03 | **LOSS** |
| 174 | PYPL | 12-03 14:40 | 12-03 15:00 | 63.73 | 63.51 | 218 | 13893.14 | -47.96 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 66.27 | ↓63.58 | 0.0372 | 1.68 | **LOSS** |
| 175 | CELH | 12-03 14:45 | 12-03 15:05 | 41.69 | 41.44 | 335 | 13966.15 | -83.75 | -0.6% | 0.57R | 20m | market | early-reversal | breakout | trend | neutral | 69.94 | ↓41.37 | 0.096 | 1.08 | **LOSS** |
| 176 | COIN | 12-03 14:50 | 12-03 15:40 | 272.56 | 270.91 | 51 | 13900.56 | -84.15 | -0.61% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 57.96 | ↓269.89 | 0.246 | 1.38 | **LOSS** |
| 177 | PLTR | 12-03 15:00 | 12-03 15:25 | 172.92 | 171.58 | 80 | 13833.6 | -107.2 | -0.77% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 61.73 | ↑170.59 | 0.0844 | 1.57 | **LOSS** |
| 178 | GS | 12-03 15:00 | 12-03 16:45 | 824.1 | 829.51 | 16 | 13185.6 | +86.56 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 179 | RIVN | 12-04 14:40 | 12-04 15:00 | 18.03 | 17.84 | 778 | 14027.34 | -147.82 | -1.05% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 68.81 | ↓17.9 | 0.1567 | 1.5 | **LOSS** |
| 180 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.35 | 180.66 | 76 | 13858.6 | -128.44 | -0.93% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 181 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 31 | 14060.05 | -103.54 | -0.74% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 182 | ORCL | 12-04 15:20 | 12-04 17:05 | 210.31 | 212.38 | 66 | 13880.46 | +136.62 | +0.98% | 0.57R | 105m | market | timeout | trend | trend | neutral | 58.55 | ↑208.95 | 0.5634 | 1.04 | **WIN** |
| 183 | GS | 12-04 15:20 | 12-04 15:45 | 843.81 | 838.44 | 16 | 13500.96 | -85.92 | -0.64% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 184 | AMZN | 12-05 14:30 | 12-05 15:50 | 230.47 | 230.17 | 60 | 13828.2 | -18 | -0.13% | 0.19R | 80m | market | stagnation | trend | trend | neutral | 70.28 | ↓230.48 | 0.2347 | 1.63 | **LOSS** |
| 185 | PLTR | 12-05 14:30 | 12-05 14:35 | 179.3 | 177.59 | 77 | 13806.1 | -131.67 | -0.95% | 1.36R | 5m | market | stop-loss | trend | trend | neutral | 71 | ↓178.92 | 0.3546 | 2.12 | **LOSS** |
| 186 | NFLX | 12-05 14:35 | 12-05 15:30 | 101.3 | 103.82 | 138 | 13979.4 | +347.76 | +2.49% | 1.57R | 55m | market | profit-target | breakout | breakout | neutral | 75.3 | ↑100.08 | -0.8676 | 6.72 | **WIN** |
| 187 | KLAC | 12-05 14:45 | 12-05 15:25 | 1234.53 | 1225.27 | 11 | 13579.83 | -101.86 | -0.75% | 0.86R | 40m | market | early-reversal | breakout | breakout | neutral | 78.46 | ↓1228 | 4.7797 | 1.44 | **LOSS** |
| 188 | MU | 12-05 14:55 | 12-05 15:50 | 233.65 | 232.89 | 59 | 13785.35 | -44.84 | -0.33% | 0.18R | 55m | market | stagnation | breakout | trend | neutral | 75.82 | ↓231.61 | 1.3967 | 1.34 | **LOSS** |
| 189 | AMD | 12-05 15:00 | 12-05 15:40 | 221.68 | 219.74 | 63 | 13965.84 | -122.22 | -0.88% | 0.52R | 40m | market | early-reversal | breakout | breakout | neutral | 74.44 | ↓219.52 | 1.1751 | 2.14 | **LOSS** |
| 190 | ARM | 12-05 15:05 | 12-05 15:40 | 143.18 | 142.38 | 97 | 13888.46 | -77.6 | -0.56% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 72.11 | ↑142.1 | 0.4954 | 1.65 | **LOSS** |
| 191 | CRWD | 12-05 15:05 | 12-05 16:15 | 522.46 | 522.31 | 26 | 13583.96 | -3.9 | -0.03% | 0.03R | 70m | market | breakeven-stop | breakout | breakout | neutral | 65.66 | ↓518.2 | 1.0709 | 2.27 | **LOSS** |
| 192 | META | 12-05 15:15 | 12-05 15:40 | 672.45 | 669.97 | 20 | 13449 | -49.6 | -0.37% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 78.53 | ↑666.64 | 1.4891 | 1.62 | **LOSS** |
| 193 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 75 | 13837.5 | -63 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 194 | AMD | 12-08 14:30 | 12-08 15:20 | 221.16 | 219.89 | 63 | 13933.08 | -80.01 | -0.57% | 0.81R | 50m | market | early-reversal | breakout | breakout | neutral | 75.13 | ↓220.53 | 0.0786 | 2.52 | **LOSS** |
| 195 | COIN | 12-08 14:30 | 12-08 14:55 | 275.35 | 272.41 | 50 | 13767.5 | -147 | -1.07% | 1.01R | 25m | market | early-reversal | breakout | breakout | neutral | 68.42 | ↓274.32 | 0.8829 | 2.42 | **LOSS** |
| 196 | SMCI | 12-08 14:30 | 12-08 15:20 | 35.11 | 34.93 | 397 | 13938.67 | -71.46 | -0.51% | 0.44R | 50m | market | stagnation | breakout | breakout | neutral | 70.34 | ↓35.16 | 0.0772 | 2.91 | **LOSS** |
| 197 | NOW | 12-08 14:30 | 12-08 14:50 | 864.99 | 858.12 | 16 | 13839.84 | -109.92 | -0.79% | 1.13R | 20m | market | early-reversal | breakout | breakout | neutral | 77.2 | ↓862.5 | 0.8471 | 1.94 | **LOSS** |
| 198 | GS | 12-08 14:30 | 12-08 16:00 | 863.65 | 861.83 | 16 | 13818.4 | -29.12 | -0.21% | 0.3R | 90m | market | stagnation | breakout | breakout | neutral | 82.55 | ↓861.35 | 0.8948 | 1.16 | **LOSS** |
| 199 | BA | 12-08 14:30 | 12-08 16:15 | 204.21 | 205.25 | 68 | 13886.28 | +70.72 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 200 | AMAT | 12-08 14:30 | 12-08 14:50 | 271.04 | 269.7 | 51 | 13823.04 | -68.34 | -0.49% | 0.7R | 20m | market | early-reversal | trend | breakout | neutral | 74.7 | ↓270.46 | -0.1345 | 1.98 | **LOSS** |
| 201 | TSM | 12-08 14:35 | 12-08 14:55 | 301.5 | 298.65 | 46 | 13869 | -131.1 | -0.95% | 0.97R | 20m | market | early-reversal | breakout | breakout | neutral | 76.79 | ↓299.86 | 1.0589 | 1.22 | **LOSS** |
| 202 | ASML | 12-08 14:40 | 12-08 15:30 | 1126.6 | 1123.86 | 12 | 13519.2 | -32.88 | -0.24% | 0.34R | 50m | market | stagnation | breakout | breakout | neutral | 79.93 | ↓1123.78 | 2.8507 | 1.11 | **LOSS** |
| 203 | UBER | 12-08 14:40 | 12-08 15:10 | 92.49 | 91.9 | 140 | 12948.6 | -82.6 | -0.64% | 0.91R | 30m | market | early-reversal | trend | breakout | neutral | 71.43 | ↓92 | -0.0091 | 1.46 | **LOSS** |
| 204 | CELH | 12-08 14:40 | 12-08 16:25 | 43.04 | 43.39 | 324 | 13944.96 | +113.4 | +0.81% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 73.7 | ↑42.59 | -0.042 | 1.29 | **WIN** |
| 205 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.14 | 447.07 | 31 | 13737.34 | +121.83 | +0.89% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 206 | CRWD | 12-09 14:50 | 12-09 15:45 | 525.35 | 524.65 | 26 | 13659.1 | -18.2 | -0.13% | 0.16R | 55m | market | stagnation | breakout | breakout | neutral | 73.73 | ↓519.04 | 1.0962 | 1.29 | **LOSS** |
| 207 | COIN | 12-09 15:00 | 12-09 16:45 | 276.97 | 283.02 | 50 | 13848.5 | +302.5 | +2.18% | 1.39R | 105m | market | timeout | trend | breakout | neutral | 60.48 | ↑272.61 | 0.279 | 1.18 | **WIN** |
| 208 | NVO | 12-10 14:50 | 12-10 16:35 | 48 | 48.03 | 291 | 13968 | +8.73 | +0.06% | 0.06R | 105m | market | timeout | breakout | breakout | neutral | 80.89 | ↑47.59 | 0.2635 | 2.17 | **WIN** |
| 209 | V | 12-11 14:35 | 12-11 16:20 | 335.03 | 339.99 | 41 | 13736.23 | +203.36 | +1.48% | 1.74R | 105m | market | timeout | breakout | breakout | neutral | 77.84 | ↑333.09 | 0.8597 | 2.04 | **WIN** |
| 210 | NVO | 12-11 14:45 | 12-11 16:30 | 50.06 | 50.35 | 279 | 13966.74 | +80.91 | +0.58% | 0.56R | 105m | market | timeout | breakout | breakout | neutral | 70.72 | ↑49.87 | 0.2689 | 1.47 | **WIN** |
| 211 | LLY | 12-11 15:15 | 12-11 16:45 | 1019.05 | 1018.51 | 13 | 13247.65 | -7.02 | -0.05% | 0.03R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 212 | NVDA | 12-12 14:30 | 12-12 14:55 | 181.88 | 181.03 | 76 | 13822.88 | -64.6 | -0.47% | 0.65R | 25m | market | early-reversal | trend | trend | neutral | 64.86 | ↓181.77 | 0.2908 | 3.41 | **LOSS** |
| 213 | TSLA | 12-12 14:30 | 12-12 15:10 | 452.91 | 454.45 | 31 | 14040.21 | +47.74 | +0.34% | 0.49R | 40m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **WIN** |
| 214 | NFLX | 12-12 14:30 | 12-12 15:20 | 96.13 | 95.97 | 146 | 14034.98 | -23.36 | -0.17% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 83.21 | ↓95.89 | 0.217 | 2.44 | **LOSS** |
| 215 | COIN | 12-12 14:30 | 12-12 15:05 | 274.83 | 272.83 | 50 | 13741.5 | -100 | -0.73% | 0.7R | 35m | market | early-reversal | breakout | breakout | neutral | 73.03 | ↓273.68 | 1.3234 | 1.92 | **LOSS** |
| 216 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 69 | 14028.39 | -61.41 | -0.44% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 217 | MA | 12-12 14:30 | 12-12 16:15 | 568.49 | 572.21 | 24 | 13643.76 | +89.28 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑567.53 | 1.2619 | 1.59 | **WIN** |
| 218 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.67 | 351 | 14025.96 | -101.79 | -0.73% | 0.81R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 219 | ADBE | 12-12 14:40 | 12-12 16:25 | 357.71 | 359.35 | 39 | 13950.69 | +63.96 | +0.46% | 0.38R | 105m | market | timeout | breakout | breakout | neutral | 66.06 | ↓355.45 | 0.1109 | 1.42 | **WIN** |
| 220 | CELH | 12-12 14:40 | 12-12 15:00 | 44.55 | 44.15 | 314 | 13988.7 | -125.6 | -0.9% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 68.46 | ↓44.42 | 0.0948 | 1.22 | **LOSS** |
| 221 | UNH | 12-12 14:45 | 12-12 15:05 | 344.28 | 342.79 | 40 | 13771.2 | -59.6 | -0.43% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↑341.93 | 0.9959 | 1.99 | **LOSS** |
| 222 | LRCX | 12-15 14:30 | 12-15 15:25 | 163.76 | 163.6 | 78 | 12773.28 | -12.48 | -0.1% | 0.09R | 55m | market | stagnation | breakout | breakout | neutral | 69.82 | ↓163.27 | -0.1389 | 2.51 | **LOSS** |
| 223 | ELF | 12-15 14:35 | 12-15 15:00 | 77.6 | 77.13 | 165 | 12804 | -77.55 | -0.61% | 0.73R | 25m | market | early-reversal | mixed | breakout | neutral | 61.2 | ↓77.55 | -0.1231 | 1.27 | **LOSS** |
| 224 | GE | 12-15 14:40 | 12-15 15:00 | 303.94 | 301.55 | 46 | 13981.24 | -109.94 | -0.79% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 69.28 | ↓302.85 | 0.316 | 1.12 | **LOSS** |
| 225 | AMAT | 12-15 14:40 | 12-15 15:00 | 265.33 | 263.39 | 52 | 13797.16 | -100.88 | -0.73% | 0.66R | 20m | market | early-reversal | breakout | trend | neutral | 72.5 | ↓263.95 | 0.5539 | 1.01 | **LOSS** |
| 226 | PLTR | 12-15 14:45 | 12-15 15:05 | 186.89 | 184.07 | 74 | 13829.86 | -208.68 | -1.51% | 1.12R | 20m | market | early-reversal | breakout | breakout | neutral | 73.42 | ↓186.54 | 0.4741 | 1.11 | **LOSS** |
| 227 | PYPL | 12-16 14:30 | 12-16 15:00 | 61.64 | 61.28 | 226 | 13930.64 | -81.36 | -0.58% | 0.83R | 30m | market | early-reversal | breakout | trend | neutral | 66.46 | ↓61.53 | 0.0163 | 1.07 | **LOSS** |
| 228 | ADBE | 12-16 14:35 | 12-16 14:55 | 355.33 | 354.1 | 39 | 13857.87 | -47.97 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 82.05 | ↑353.45 | 0.7775 | 1.58 | **LOSS** |
| 229 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 67 | 13978.21 | -54.94 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 230 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.62 | 223.43 | 62 | 13926.44 | -73.78 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 231 | COIN | 12-17 14:30 | 12-17 15:35 | 256.49 | 255.78 | 54 | 13850.46 | -38.34 | -0.28% | 0.33R | 65m | market | stagnation | breakout | breakout | neutral | 82.4 | ↓256.58 | 0.7197 | 1.9 | **LOSS** |
| 232 | NOW | 12-17 14:30 | 12-17 15:40 | 787.89 | 807.87 | 17 | 13394.13 | +339.66 | +2.54% | 3.63R | 70m | market | profit-target | trend | trend | neutral | 77.22 | ↑786.46 | 2.1159 | 1.76 | **WIN** |
| 233 | MDB | 12-17 14:30 | 12-17 15:15 | 425.29 | 423.29 | 32 | 13609.28 | -64 | -0.47% | 0.67R | 45m | market | early-reversal | trend | trend | neutral | 71.46 | ↓424.28 | 1.1976 | 1.23 | **LOSS** |
| 234 | GS | 12-17 14:30 | 12-17 15:20 | 889.97 | 889.37 | 14 | 12459.58 | -8.4 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 235 | GE | 12-17 14:30 | 12-17 14:50 | 300.81 | 299.15 | 46 | 13837.26 | -76.36 | -0.55% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↓300.1 | 0.3458 | 1.27 | **LOSS** |
| 236 | RIVN | 12-17 14:30 | 12-17 14:50 | 18.21 | 18.03 | 390 | 7101.9 | -70.2 | -0.99% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.48 | ↓18.19 | 0.0325 | 1.21 | **LOSS** |
| 237 | MU | 12-17 14:35 | 12-17 15:30 | 235.23 | 233.61 | 32 | 7527.36 | -51.84 | -0.69% | 0.58R | 55m | market | stagnation | trend | trend | noisyHighBeta | 74.36 | ↓235.12 | 0.4878 | 2.15 | **LOSS** |
| 238 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.3 | 85 | 150 | 12945 | -195 | -1.51% | 0.76R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 239 | NFLX | 12-17 15:10 | 12-17 15:50 | 97.11 | 96.4 | 144 | 13983.84 | -102.24 | -0.73% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 77.98 | ↓96.67 | 0.7084 | 1.02 | **LOSS** |
| 240 | SHOP | 12-17 15:10 | 12-17 15:50 | 168.49 | 167.07 | 83 | 13984.67 | -117.86 | -0.84% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 76.11 | ↓167.77 | 1.7597 | 1.13 | **LOSS** |
| 241 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.63 | 135.74 | 102 | 13936.26 | -90.78 | -0.65% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 242 | AMZN | 12-18 14:30 | 12-18 16:15 | 225.72 | 228.93 | 61 | 13768.92 | +195.81 | +1.42% | 2.03R | 105m | market | timeout | breakout | trend | neutral | 78.13 | ↑225.75 | 0.2451 | 5.96 | **WIN** |
| 243 | QCOM | 12-18 14:30 | 12-18 15:05 | 176.25 | 175.51 | 79 | 13923.75 | -58.46 | -0.42% | 0.48R | 35m | market | early-reversal | breakout | breakout | neutral | 74.21 | ↓176.12 | 0.3365 | 2.66 | **LOSS** |
| 244 | GE | 12-18 14:35 | 12-18 16:20 | 299.01 | 300.89 | 46 | 13754.46 | +86.48 | +0.63% | 0.8R | 105m | market | timeout | breakout | breakout | neutral | 74.1 | ↑298.21 | 0.5947 | 1.87 | **WIN** |
| 245 | NKE | 12-18 14:35 | 12-18 16:20 | 66.54 | 66.78 | 210 | 13973.4 | +50.4 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 69.5 | ↑66.32 | 0.0512 | 2.59 | **WIN** |
| 246 | LOW | 12-18 14:35 | 12-18 14:45 | 253.21 | 250.7 | 55 | 13926.55 | -138.05 | -0.99% | 1.39R | 10m | market | stop-loss | breakout | trend | neutral | 77.92 | ↓252.47 | 0.5498 | 1.93 | **LOSS** |
| 247 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 248 | NFLX | 12-19 14:30 | 12-19 15:00 | 95.13 | 94.73 | 147 | 13984.11 | -58.8 | -0.42% | 0.6R | 30m | market | early-reversal | breakout | breakout | neutral | 93.99 | ↓94.58 | 0.0925 | 2.17 | **LOSS** |
| 249 | INTC | 12-19 14:35 | 12-19 15:35 | 37.09 | 37.06 | 378 | 14020.02 | -11.34 | -0.08% | 0.08R | 60m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 250 | UNH | 12-19 14:35 | 12-19 15:30 | 331.9 | 331.63 | 42 | 13939.8 | -11.34 | -0.08% | 0.11R | 55m | market | stagnation | breakout | breakout | neutral | 87.67 | ↑330.52 | 0.5487 | 1.56 | **LOSS** |
| 251 | DELL | 12-19 14:40 | 12-19 15:20 | 126.41 | 125.61 | 110 | 13905.1 | -88 | -0.63% | 0.64R | 40m | market | early-reversal | breakout | breakout | neutral | 82.28 | ↓125.56 | 0.2439 | 1.35 | **LOSS** |
| 252 | ELF | 12-19 14:45 | 12-19 15:35 | 79.73 | 79.65 | 175 | 13952.75 | -14 | -0.1% | 0.08R | 50m | market | stagnation | breakout | breakout | neutral | 79.81 | ↑79.2 | 0.3519 | 1.33 | **LOSS** |
| 253 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.31 | 304.74 | 45 | 13738.95 | -25.65 | -0.19% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 254 | GS | 12-19 15:10 | 12-19 15:40 | 895.46 | 892.62 | 15 | 13431.9 | -42.6 | -0.32% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 255 | IBM | 12-19 15:15 | 12-19 15:45 | 304.96 | 303.23 | 45 | 13723.2 | -77.85 | -0.57% | 0.81R | 30m | market | early-reversal | trend | trend | neutral | 75.55 | ↓302.65 | 0.7648 | 2.69 | **LOSS** |
| 256 | DIS | 12-22 14:30 | 12-22 14:45 | 112.56 | 111.43 | 124 | 13957.44 | -140.12 | -1% | 1.43R | 15m | market | stop-loss | breakout | breakout | neutral | 62.09 | ↓112.26 | -0.2793 | 1.54 | **LOSS** |
| 257 | ELF | 12-22 14:30 | 12-22 14:55 | 81.15 | 80.72 | 172 | 13957.8 | -73.96 | -0.53% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 60.35 | ↓81.26 | 0.3141 | 1.7 | **LOSS** |
| 258 | META | 12-22 14:40 | 12-22 15:00 | 672.82 | 667.84 | 20 | 13456.4 | -99.6 | -0.74% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 64.58 | ↓667.88 | -0.1737 | 1.52 | **LOSS** |
| 259 | CRM | 12-22 15:05 | 12-22 15:55 | 262.48 | 262.53 | 53 | 13911.44 | +2.65 | +0.02% | 0.02R | 50m | market | breakeven-stop | trend | trend | neutral | 68.85 | ↑260.85 | 0.5289 | 1.17 | **WIN** |
| 260 | CELH | 12-23 14:35 | 12-23 14:55 | 45.2 | 44.62 | 309 | 13966.8 | -179.22 | -1.28% | 1.27R | 20m | market | early-reversal | breakout | breakout | neutral | 71.58 | ↓45.01 | 0.0991 | 1.49 | **LOSS** |
| 261 | GOOGL | 12-23 14:40 | 12-23 15:00 | 313.05 | 311.69 | 44 | 13774.2 | -59.84 | -0.43% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 262 | LMT | 12-24 14:30 | 12-24 16:15 | 487.67 | 488.22 | 28 | 13654.76 | +15.4 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 76.38 | ↓487.17 | 0.3584 | 1.07 | **WIN** |
| 263 | NVO | 12-24 14:30 | 12-24 14:50 | 53.15 | 52.83 | 263 | 13978.45 | -84.16 | -0.6% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 90.25 | ↓53.07 | 0.2167 | 1.8 | **LOSS** |
| 264 | ORCL | 12-24 15:00 | 12-24 15:40 | 197.71 | 196.77 | 70 | 13839.7 | -65.8 | -0.48% | 0.49R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↓196.66 | 0.6538 | 1.65 | **LOSS** |
| 265 | RIVN | 12-24 15:10 | 12-24 16:50 | 21.24 | 21.24 | 362 | 7688.88 | +0 | +0% | 0R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 66.06 | ↑21.08 | 0.0336 | 1.1 | **WIN** |
| 266 | SMCI | 12-29 14:40 | 12-29 15:00 | 31.11 | 30.81 | 447 | 13906.17 | -134.1 | -0.96% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 65.7 | ↑30.55 | 0.0788 | 1.92 | **LOSS** |
| 267 | XOM | 12-29 15:05 | 12-29 16:50 | 120.58 | 120.86 | 133 | 16037.14 | +37.24 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | cleanTrend | 75.48 | ↑119.97 | 0.3959 | 1.35 | **WIN** |
| 268 | ORCL | 12-30 14:30 | 12-30 15:20 | 197.51 | 196.71 | 70 | 13825.7 | -56 | -0.41% | 0.59R | 50m | market | stagnation | trend | trend | neutral | 75.78 | ↓197.12 | 0.3771 | 2.92 | **LOSS** |
| 269 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.43 | 87.6 | 161 | 13915.23 | +188.37 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 270 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.23 | 189.89 | 73 | 13959.79 | -97.82 | -0.7% | 0.91R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 271 | NVO | 01-02 14:35 | 01-02 16:20 | 51.59 | 52.1 | 261 | 13464.99 | +133.11 | +0.99% | 1.41R | 105m | market | timeout | breakout | trend | neutral | 72.46 | ↑51.57 | 0.0318 | 1.11 | **WIN** |
| 272 | TGT | 01-02 14:35 | 01-02 15:00 | 99.03 | 98.66 | 141 | 13963.23 | -52.17 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 77.5 | ↑98.41 | 0.0437 | 1.78 | **LOSS** |
| 273 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.08 | 160.87 | 86 | 14024.88 | -190.06 | -1.36% | 1.94R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 274 | QCOM | 01-02 14:45 | 01-02 15:25 | 173.64 | 172.83 | 80 | 13891.2 | -64.8 | -0.47% | 0.64R | 40m | market | early-reversal | breakout | breakout | neutral | 67.97 | ↓173.31 | 0.1721 | 1.41 | **LOSS** |
| 275 | COIN | 01-02 14:50 | 01-02 15:20 | 229.93 | 228.62 | 60 | 13795.8 | -78.6 | -0.57% | 0.48R | 30m | market | early-reversal | breakout | breakout | neutral | 73.04 | ↓228.09 | 0.0206 | 1.68 | **LOSS** |
| 276 | AMD | 01-02 14:55 | 01-02 15:15 | 225.97 | 224.22 | 61 | 13784.17 | -106.75 | -0.77% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 80.86 | ↓224.25 | 2.3926 | 1.15 | **LOSS** |
| 277 | TXN | 01-02 15:00 | 01-02 15:20 | 177.07 | 175.89 | 78 | 13811.46 | -92.04 | -0.67% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 69.1 | ↓176.43 | 0.4291 | 1.51 | **LOSS** |
| 278 | SNOW | 01-05 14:30 | 01-05 15:40 | 219.17 | 224.35 | 63 | 13807.71 | +326.34 | +2.36% | 3.37R | 70m | market | profit-target | trend | trend | neutral | 70.3 | ↑218.65 | 0.702 | 1.48 | **WIN** |
| 279 | ORCL | 01-05 14:35 | 01-05 14:45 | 201.15 | 196.41 | 69 | 13879.35 | -327.06 | -2.36% | 3.37R | 10m | market | stop-loss | trend | trend | neutral | 70.98 | ↓200.07 | 1.1997 | 5.63 | **LOSS** |
| 280 | PLTR | 01-05 14:40 | 01-05 15:30 | 174.64 | 173.51 | 73 | 12748.72 | -82.49 | -0.65% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 74.95 | ↓173.07 | 1.4103 | 1.85 | **LOSS** |
| 281 | ABNB | 01-05 14:45 | 01-05 16:30 | 135.01 | 136.8 | 103 | 13906.03 | +184.37 | +1.33% | 1.9R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 282 | TXN | 01-05 14:45 | 01-05 16:25 | 181.16 | 181.12 | 77 | 13949.32 | -3.08 | -0.02% | 0.03R | 100m | market | breakeven-stop | breakout | breakout | neutral | 72.02 | ↓180.13 | 0.6857 | 1.12 | **LOSS** |
| 283 | PYPL | 01-05 14:55 | 01-05 16:10 | 59.26 | 59.2 | 270 | 16000.2 | -16.2 | -0.1% | 0.13R | 75m | market | stagnation | trend | trend | cleanTrend | 74.35 | ↑58.8 | 0.159 | 1.15 | **LOSS** |
| 284 | V | 01-05 14:55 | 01-05 16:40 | 352.07 | 355.89 | 39 | 13730.73 | +148.98 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 76.51 | ↑349.89 | 1.142 | 1.54 | **WIN** |
| 285 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.39 | 86.01 | 82 | 14003.96 | +50.84 | +0.73% | 0.92R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 286 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.39 | 86.43 | 82 | 14003.96 | +85.28 | +1.22% | 1.54R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 287 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.89 | 223.97 | 61 | 13962.29 | -300.12 | -2.15% | 2.76R | 15m | market | stop-loss | breakout | breakout | neutral | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 288 | KLAC | 01-06 14:35 | 01-06 16:20 | 1384.72 | 1402.77 | 10 | 13847.2 | +180.5 | +1.3% | 1.53R | 105m | market | timeout | breakout | breakout | neutral | 85.33 | ↑1376.66 | 3.5174 | 1.79 | **WIN** |
| 289 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.7 | 89.01 | 160 | 14032 | +209.6 | +1.49% | 2.04R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 290 | DELL | 01-06 14:55 | 01-06 15:40 | 124.37 | 123.82 | 112 | 13929.44 | -61.6 | -0.44% | 0.37R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.57 | ↓123.28 | 0.1127 | 2.02 | **LOSS** |
| 291 | BA | 01-06 15:20 | 01-06 15:40 | 231.31 | 229.57 | 60 | 13878.6 | -104.4 | -0.75% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 292 | CELH | 01-07 15:25 | 01-07 16:20 | 49.66 | 51.02 | 280 | 13904.8 | +380.8 | +2.74% | 2.08R | 55m | market | profit-target | trend | trend | neutral | 67.65 | ↑49.38 | 0.2198 | 1.52 | **WIN** |
| 293 | NVO | 01-08 14:30 | 01-08 14:50 | 57.36 | 57.13 | 244 | 13995.84 | -56.12 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 72.67 | ↓57.21 | 0.155 | 1.22 | **LOSS** |
| 294 | TGT | 01-08 14:45 | 01-08 16:30 | 105.8 | 107.39 | 132 | 13965.6 | +209.88 | +1.5% | 1.63R | 105m | market | timeout | breakout | breakout | neutral | 78.85 | ↑104.67 | 0.3067 | 1.32 | **WIN** |
| 295 | HD | 01-08 15:15 | 01-08 17:00 | 356.85 | 360.83 | 39 | 13917.15 | +155.22 | +1.12% | 1.12R | 105m | market | timeout | trend | trend | neutral | 73.26 | ↑351.41 | 1.0435 | 1.16 | **WIN** |
| 296 | NVO | 01-08 15:20 | 01-08 16:10 | 57.66 | 57.6 | 242 | 13953.72 | -14.52 | -0.1% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 76.87 | ↑57.35 | 0.2754 | 1.09 | **LOSS** |
| 297 | BA | 01-09 14:35 | 01-09 15:35 | 231.46 | 231.24 | 60 | 13887.6 | -13.2 | -0.1% | 0.14R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 298 | HD | 01-09 14:35 | 01-09 15:00 | 364.41 | 362.26 | 38 | 13847.58 | -81.7 | -0.59% | 0.74R | 25m | market | early-reversal | trend | breakout | neutral | 64.78 | ↓363.89 | -0.1651 | 1.87 | **LOSS** |
| 299 | NKE | 01-09 14:50 | 01-09 15:00 | 66.41 | 64.72 | 210 | 13946.1 | -354.9 | -2.54% | 2.62R | 10m | market | stop-loss | breakout | breakout | neutral | 73.85 | ↓65.94 | 0.1621 | 1.17 | **LOSS** |
| 300 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.83 | 441.03 | 31 | 13758.73 | -86.8 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 301 | AVGO | 01-09 15:25 | 01-09 17:10 | 341.78 | 343.66 | 41 | 14012.98 | +77.08 | +0.55% | 0.43R | 105m | market | timeout | breakout | breakout | neutral | 66.92 | ↑338.14 | 1.9739 | 1.26 | **WIN** |
| 302 | AVGO | 01-12 14:30 | 01-12 15:20 | 351.27 | 349.22 | 36 | 12645.72 | -73.8 | -0.58% | 0.52R | 50m | market | stagnation | breakout | breakout | neutral | 61.59 | ↓347.77 | 0.1415 | 2.12 | **LOSS** |
| 303 | NFLX | 01-12 14:30 | 01-12 15:20 | 90.24 | 90 | 143 | 12904.32 | -34.32 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 77.85 | ↓90.04 | 0.1612 | 1.08 | **LOSS** |
| 304 | NVO | 01-12 14:35 | 01-12 15:25 | 59.82 | 59.59 | 233 | 13938.06 | -53.59 | -0.38% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 59.09 | ↓59.66 | 0.1259 | 2.2 | **LOSS** |
| 305 | AMD | 01-12 14:50 | 01-12 16:35 | 206.99 | 208.17 | 67 | 13868.33 | +79.06 | +0.57% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 61.22 | ↑204.37 | 0.1029 | 1.56 | **WIN** |
| 306 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.8 | 89.21 | 156 | 14008.8 | -92.04 | -0.66% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 307 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 308 | LRCX | 01-12 15:20 | 01-12 15:55 | 220.83 | 219.54 | 63 | 13912.29 | -81.27 | -0.58% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 59.24 | ↓219.52 | 0.499 | 1.38 | **LOSS** |
| 309 | NFLX | 01-13 14:30 | 01-13 15:00 | 90.52 | 90.01 | 154 | 13940.08 | -78.54 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | neutral | 69.77 | ↓90.02 | 0.0648 | 3.07 | **LOSS** |
| 310 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.5 | 168.03 | 82 | 13899 | -120.54 | -0.87% | 1.24R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 311 | CRWD | 01-13 14:35 | 01-13 14:45 | 471.92 | 471.42 | 29 | 13685.68 | -14.5 | -0.11% | 0.16R | 10m | market | breakeven-stop | trend | trend | neutral | 78.1 | ↑468.36 | 0.9225 | 1.25 | **LOSS** |
| 312 | NET | 01-13 14:40 | 01-13 15:00 | 188.73 | 187.83 | 74 | 13966.02 | -66.6 | -0.48% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 313 | CVX | 01-13 14:40 | 01-13 16:25 | 164.35 | 164.99 | 85 | 13969.75 | +54.4 | +0.39% | 0.56R | 105m | market | timeout | trend | trend | neutral | 73 | ↑163.8 | 0.247 | 1.17 | **WIN** |
| 314 | LMT | 01-13 14:40 | 01-13 16:25 | 556.67 | 560.1 | 25 | 13916.75 | +85.75 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 70.38 | ↑555.08 | 1.7667 | 1.3 | **WIN** |
| 315 | CRWD | 01-13 14:55 | 01-13 15:10 | 474.68 | 466.11 | 29 | 13765.72 | -248.53 | -1.81% | 2.1R | 15m | market | stop-loss | trend | trend | neutral | 73.49 | ↓472.37 | 1.9842 | 3.51 | **LOSS** |
| 316 | INTC | 01-13 15:15 | 01-13 15:40 | 47.27 | 46.69 | 163 | 7705.01 | -94.54 | -1.23% | 0.62R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 317 | COST | 01-14 14:35 | 01-14 14:45 | 952.31 | 945.14 | 14 | 13332.34 | -100.38 | -0.75% | 1.07R | 10m | market | stop-loss | breakout | breakout | neutral | 79.27 | ↓948.83 | 1.3799 | 1.67 | **LOSS** |
| 318 | TGT | 01-14 14:40 | 01-14 15:05 | 110.56 | 110 | 126 | 13930.56 | -70.56 | -0.51% | 0.67R | 25m | market | early-reversal | breakout | breakout | neutral | 80.73 | ↓109.85 | 0.2361 | 1.51 | **LOSS** |
| 319 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.43 | 441.68 | 31 | 13746.33 | -54.25 | -0.39% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 320 | PANW | 01-15 14:30 | 01-15 15:50 | 191.85 | 191.86 | 72 | 13813.2 | +0.72 | +0.01% | 0.01R | 80m | market | breakeven-stop | trend | trend | neutral | 73.16 | ↓191.53 | 0.5245 | 1.87 | **WIN** |
| 321 | NOW | 01-15 14:30 | 01-15 14:45 | 135.65 | 133.95 | 103 | 13971.95 | -175.1 | -1.25% | 1.51R | 15m | market | stop-loss | breakout | breakout | neutral | 84.4 | ↓135.59 | 0.3156 | 2 | **LOSS** |
| 322 | SMCI | 01-15 14:45 | 01-15 15:35 | 29.05 | 29.03 | 479 | 13914.95 | -9.58 | -0.07% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 75.51 | ↓29 | 0.2031 | 1.68 | **LOSS** |
| 323 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.91 | 82.42 | 170 | 13924.7 | +86.7 | +0.62% | 0.37R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 324 | DELL | 01-15 14:45 | 01-15 16:30 | 121.37 | 123.09 | 115 | 13957.55 | +197.8 | +1.42% | 1.12R | 105m | market | timeout | breakout | breakout | neutral | 67.31 | ↑121.28 | 0.5796 | 1.12 | **WIN** |
| 325 | TSM | 01-15 14:50 | 01-15 16:35 | 346.2 | 350.16 | 40 | 13848 | +158.4 | +1.14% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 81.51 | ↑342.43 | 5.1387 | 1.6 | **WIN** |
| 326 | BAC | 01-15 15:05 | 01-15 15:35 | 52.93 | 52.67 | 264 | 13973.52 | -68.64 | -0.49% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 70.28 | ↑52.58 | 0.0764 | 1.07 | **LOSS** |
| 327 | GS | 01-15 15:05 | 01-15 16:50 | 957.97 | 968.87 | 14 | 13411.58 | +152.6 | +1.14% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 328 | ARM | 01-16 14:30 | 01-16 14:55 | 106.75 | 106.11 | 130 | 13877.5 | -83.2 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | neutral | 69.27 | ↓106.58 | -0.1668 | 2.26 | **LOSS** |
| 329 | TSM | 01-16 14:30 | 01-16 14:50 | 348.85 | 347.26 | 40 | 13954 | -63.6 | -0.46% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 72.94 | ↓348.22 | 0.1862 | 2.97 | **LOSS** |
| 330 | PLTR | 01-16 14:30 | 01-16 14:40 | 181.07 | 177.28 | 76 | 13761.32 | -288.04 | -2.09% | 1.85R | 10m | market | stop-loss | breakout | breakout | neutral | 72.1 | ↓180.79 | -0.2065 | 9.2 | **LOSS** |
| 331 | IBM | 01-16 14:30 | 01-16 14:50 | 304.58 | 302.4 | 42 | 12792.36 | -91.56 | -0.72% | 0.8R | 20m | market | early-reversal | breakout | breakout | neutral | 64.62 | ↓303.75 | -0.6212 | 2.43 | **LOSS** |
| 332 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.32 | 189.09 | 73 | 13893.36 | -89.79 | -0.65% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 333 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 31 | 13818.25 | -85.87 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 334 | AVGO | 01-16 14:35 | 01-16 14:55 | 351.73 | 348.59 | 39 | 13717.47 | -122.46 | -0.89% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 80.32 | ↓349.03 | 0.5549 | 1.14 | **LOSS** |
| 335 | ASML | 01-16 14:35 | 01-16 14:55 | 1369.03 | 1356.51 | 10 | 13690.3 | -125.2 | -0.91% | 0.98R | 20m | market | early-reversal | breakout | breakout | neutral | 76.2 | ↓1363.72 | 1.928 | 1.36 | **LOSS** |
| 336 | MDB | 01-16 15:10 | 01-16 16:30 | 399.33 | 408.95 | 34 | 13577.22 | +327.08 | +2.41% | 1.46R | 80m | market | profit-target | breakout | breakout | neutral | 69.15 | ↑394.07 | 0.6032 | 1.11 | **WIN** |
| 337 | DELL | 01-16 15:15 | 01-16 15:35 | 122.93 | 122 | 113 | 13891.09 | -105.09 | -0.76% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 73.07 | ↑121.05 | 0.4447 | 1.2 | **LOSS** |
| 338 | SNOW | 01-16 15:25 | 01-16 15:45 | 212.27 | 210.71 | 65 | 13797.55 | -101.4 | -0.73% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 70.48 | ↑209.44 | 0.7425 | 1.37 | **LOSS** |
| 339 | WMT | 01-20 14:30 | 01-20 14:50 | 121.21 | 120.14 | 106 | 12848.26 | -113.42 | -0.88% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 75.65 | ↓120.96 | 0.5126 | 1.2 | **LOSS** |
| 340 | ARM | 01-20 14:40 | 01-20 16:20 | 108.19 | 108.47 | 128 | 13848.32 | +35.84 | +0.26% | 0.24R | 100m | market | trailing-stop | breakout | breakout | neutral | 65.37 | ↓107.29 | 0.0129 | 5.86 | **WIN** |
| 341 | ELF | 01-20 14:40 | 01-20 14:50 | 91.26 | 89.23 | 153 | 13962.78 | -310.59 | -2.22% | 1.44R | 10m | market | stop-loss | breakout | breakout | neutral | 60.08 | ↓90.1 | 0.1465 | 1.56 | **LOSS** |
| 342 | CELH | 01-20 14:45 | 01-20 16:20 | 55.92 | 57.36 | 250 | 13980 | +360 | +2.58% | 2.08R | 95m | market | profit-target | breakout | breakout | neutral | 69.83 | ↑55.79 | 0.3742 | 2.33 | **WIN** |
| 343 | XOM | 01-20 15:25 | 01-20 15:50 | 131.49 | 130.83 | 106 | 13937.94 | -69.96 | -0.5% | 0.52R | 25m | market | early-reversal | trend | trend | neutral | 71.16 | ↓131.05 | 0.3225 | 1.62 | **LOSS** |
| 344 | UNH | 01-21 14:30 | 01-21 16:15 | 342.77 | 346.48 | 40 | 13710.8 | +148.4 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 84.76 | ↑341.51 | 0.5588 | 1.35 | **WIN** |
| 345 | CVX | 01-21 14:35 | 01-21 14:55 | 168.27 | 167.07 | 83 | 13966.41 | -99.6 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 76.75 | ↓167.9 | 0.1545 | 1.4 | **LOSS** |
| 346 | LMT | 01-21 14:35 | 01-21 16:00 | 585.13 | 584.82 | 23 | 13457.99 | -7.13 | -0.05% | 0.07R | 85m | market | stagnation | breakout | breakout | neutral | 82.03 | ↑581.39 | 0.6397 | 1.75 | **LOSS** |
| 347 | DIS | 01-21 14:35 | 01-21 14:55 | 111.97 | 111.58 | 124 | 13884.28 | -48.36 | -0.35% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 82.66 | ↓111.64 | 0.2342 | 3.71 | **LOSS** |
| 348 | RIVN | 01-21 14:35 | 01-21 14:55 | 16.35 | 16.17 | 856 | 13995.6 | -154.08 | -1.1% | 1.08R | 20m | market | early-reversal | breakout | breakout | neutral | 80.65 | ↓16.31 | 0.0604 | 1.29 | **LOSS** |
| 349 | NKE | 01-21 14:40 | 01-21 16:05 | 64.38 | 64.27 | 216 | 13906.08 | -23.76 | -0.17% | 0.24R | 85m | market | breakeven-stop | breakout | breakout | neutral | 90.32 | ↓64.23 | 0.2055 | 1.75 | **LOSS** |
| 350 | HPE | 01-21 14:45 | 01-21 15:10 | 20.75 | 20.66 | 674 | 13985.5 | -60.66 | -0.43% | 0.4R | 25m | market | early-reversal | breakout | breakout | neutral | 78.29 | ↑20.61 | 0.0459 | 1.43 | **LOSS** |
| 351 | IBM | 01-21 14:45 | 01-21 16:05 | 295.81 | 295.39 | 47 | 13903.07 | -19.74 | -0.14% | 0.19R | 80m | market | stagnation | breakout | breakout | neutral | 73.27 | ↑294.49 | -0.3225 | 1.4 | **LOSS** |
| 352 | ADP | 01-21 15:00 | 01-21 15:40 | 258.92 | 257.34 | 54 | 13981.68 | -85.32 | -0.61% | 0.84R | 40m | market | early-reversal | trend | trend | neutral | 76.24 | ↓257.89 | 0.7795 | 2.04 | **LOSS** |
| 353 | GOOGL | 01-21 15:05 | 01-21 16:30 | 326.63 | 330.4 | 21 | 13718.46 | +79.17 | +1.15% | 1.12R | 85m | market | trim-profit-target | trend | trend | neutral | 70.59 | ↑323.18 | 0.4517 | 1.02 | **WIN** |
| 354 | GOOGL | 01-21 15:05 | 01-21 16:50 | 326.63 | 327.14 | 21 | 13718.46 | +10.71 | +0.16% | 0.16R | 105m | market | trailing-stop | trend | trend | neutral | 70.59 | ↓323.18 | 0.4517 | 1.02 | **WIN** |
| 355 | UBER | 01-21 15:10 | 01-21 16:55 | 84.82 | 85.21 | 164 | 13910.48 | +63.96 | +0.46% | 0.36R | 105m | market | timeout | breakout | trend | neutral | 67.14 | ↑83.89 | 0.3698 | 1.06 | **WIN** |
| 356 | PYPL | 01-22 14:30 | 01-22 16:15 | 56.77 | 57.41 | 245 | 13908.65 | +156.8 | +1.13% | 1.55R | 105m | market | timeout | trend | breakout | neutral | 68.71 | ↑56.75 | 0.211 | 2.13 | **WIN** |
| 357 | JPM | 01-22 14:30 | 01-22 14:50 | 306.29 | 304.96 | 45 | 13783.05 | -59.85 | -0.43% | 0.61R | 20m | market | early-reversal | breakout | trend | neutral | 67.19 | ↓306.06 | 0.1092 | 1.03 | **LOSS** |
| 358 | BAC | 01-22 14:30 | 01-22 15:00 | 52.93 | 52.67 | 264 | 13973.52 | -68.64 | -0.49% | 0.7R | 30m | market | early-reversal | breakout | breakout | neutral | 67.52 | ↓52.79 | -0.0065 | 2.21 | **LOSS** |
| 359 | BA | 01-22 14:30 | 01-22 14:55 | 252.81 | 251.66 | 55 | 13904.55 | -63.25 | -0.45% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 360 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.58 | 135.77 | 102 | 13931.16 | -82.62 | -0.59% | 0.78R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 361 | NVO | 01-22 14:35 | 01-22 16:20 | 61.3 | 62.05 | 210 | 12873 | +157.5 | +1.22% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 77.31 | ↑61.24 | 0.6333 | 1.55 | **WIN** |
| 362 | HD | 01-22 14:40 | 01-22 14:55 | 388.63 | 384.77 | 36 | 13990.68 | -138.96 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | trend | neutral | 73.65 | ↓388.59 | 1.4586 | 1.37 | **LOSS** |
| 363 | INTU | 01-22 14:40 | 01-22 16:25 | 533.88 | 541.73 | 26 | 13880.88 | +204.1 | +1.47% | 2.04R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑531.44 | 1.6871 | 1.46 | **WIN** |
| 364 | SNOW | 01-22 15:10 | 01-22 15:45 | 209.4 | 208.38 | 66 | 13820.4 | -67.32 | -0.49% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 65.77 | ↓208.38 | 0.4795 | 1.19 | **LOSS** |
| 365 | NFLX | 01-23 14:30 | 01-23 14:35 | 84.39 | 84.35 | 165 | 13924.35 | -6.6 | -0.05% | 0.07R | 5m | market | breakeven-stop | trend | trend | neutral | 74.13 | ↑84.13 | 0.1432 | 4.92 | **LOSS** |
| 366 | CRM | 01-23 14:30 | 01-23 14:50 | 230.3 | 229.16 | 60 | 13818 | -68.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 79.92 | ↓229.32 | 0.4051 | 2.01 | **LOSS** |
| 367 | ADBE | 01-23 14:30 | 01-23 15:10 | 303 | 301.95 | 46 | 13938 | -48.3 | -0.35% | 0.5R | 40m | market | early-reversal | breakout | breakout | neutral | 76.41 | ↓302.29 | 0.4992 | 1.19 | **LOSS** |
| 368 | NET | 01-23 14:40 | 01-23 16:25 | 175.08 | 176.08 | 79 | 13831.32 | +79 | +0.57% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 369 | NVO | 01-26 14:35 | 01-26 15:45 | 63.27 | 63.25 | 221 | 13982.67 | -4.42 | -0.03% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | neutral | 76.16 | ↓62.96 | 0.0318 | 1.61 | **LOSS** |
| 370 | GS | 01-26 14:40 | 01-26 15:00 | 933.3 | 929.72 | 15 | 13999.5 | -53.7 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 371 | ASML | 01-26 14:55 | 01-26 15:15 | 1408.18 | 1398.9 | 9 | 12673.62 | -83.52 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 79.89 | ↓1399.09 | 4.4717 | 1.22 | **LOSS** |
| 372 | KLAC | 01-26 14:55 | 01-26 15:15 | 1528.29 | 1520.54 | 9 | 13754.61 | -69.75 | -0.51% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 64.26 | ↓1520.6 | 6.1744 | 2.12 | **LOSS** |
| 373 | CRWD | 01-26 15:00 | 01-26 16:45 | 461.09 | 466.85 | 30 | 13832.7 | +172.8 | +1.25% | 1.17R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑459.32 | 1.7389 | 1.25 | **WIN** |
| 374 | ADBE | 01-26 15:15 | 01-26 16:05 | 304.68 | 304.26 | 45 | 13710.6 | -18.9 | -0.14% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 69.39 | ↓304.09 | 1.114 | 2.45 | **LOSS** |
| 375 | MU | 01-27 14:35 | 01-27 16:20 | 405.02 | 406.37 | 31 | 12555.62 | +41.85 | +0.33% | 0.2R | 105m | market | timeout | breakout | breakout | neutral | 79.1 | ↓404.15 | 1.3266 | 1.73 | **WIN** |
| 376 | MSFT | 01-27 14:40 | 01-27 15:25 | 477.79 | 475.86 | 29 | 13855.91 | -55.97 | -0.4% | 0.57R | 45m | market | early-reversal | breakout | breakout | neutral | 67.32 | ↓476.53 | 0.8073 | 2.94 | **LOSS** |
| 377 | KLAC | 01-27 14:40 | 01-27 16:25 | 1585.65 | 1611.03 | 8 | 12685.2 | +203.04 | +1.6% | 1.76R | 105m | market | timeout | breakout | trend | neutral | 79.03 | ↑1576.11 | 3.9449 | 1.06 | **WIN** |
| 378 | AMD | 01-27 15:00 | 01-27 15:50 | 254 | 253.05 | 54 | 13716 | -51.3 | -0.37% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 62.3 | ↑251.51 | 0.0138 | 1.29 | **LOSS** |
| 379 | GE | 01-27 15:00 | 01-27 15:35 | 299.44 | 297.97 | 46 | 13774.24 | -67.62 | -0.49% | 0.56R | 35m | market | early-reversal | breakout | trend | neutral | 76.66 | ↓297.35 | 0.7022 | 1.72 | **LOSS** |
| 380 | SMCI | 01-27 15:05 | 01-27 16:50 | 31.06 | 31.05 | 438 | 13604.28 | -4.38 | -0.03% | 0.02R | 105m | market | timeout | mixed | breakout | neutral | 57.21 | ↑30.37 | -0.1295 | 1.43 | **LOSS** |
| 381 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.26 | 82.94 | 167 | 13904.42 | -53.44 | -0.38% | 0.26R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 382 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.13 | 189.57 | 73 | 13806.49 | +32.12 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 383 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.62 | 241.94 | 57 | 13772.34 | +18.24 | +0.13% | 0.15R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 384 | ORCL | 01-28 14:35 | 01-28 15:00 | 176.18 | 178.08 | 79 | 13918.22 | +150.1 | +1.08% | 1.54R | 25m | market | trailing-stop | trend | trend | neutral | 79.75 | ↓175.51 | 0.2987 | 2.75 | **WIN** |
| 385 | MDB | 01-28 14:35 | 01-28 15:30 | 420.04 | 419.63 | 33 | 13861.32 | -13.53 | -0.1% | 0.13R | 55m | market | breakeven-stop | breakout | breakout | neutral | 77.09 | ↓418.71 | 0.73 | 1.19 | **LOSS** |
| 386 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.05 | 83.79 | 163 | 13863.15 | -205.38 | -1.48% | 1.41R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 387 | TXN | 01-28 15:25 | 01-28 17:10 | 211.35 | 215.02 | 34 | 7185.9 | +124.78 | +1.74% | 0.87R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.28 | ↑210.54 | 4.048 | 1.07 | **WIN** |
| 388 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.16 | 140.52 | 90 | 12884.4 | -237.6 | -1.84% | 1.28R | 20m | market | stop-loss | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 389 | AMAT | 01-29 14:30 | 01-29 14:50 | 341.8 | 338.91 | 40 | 13672 | -115.6 | -0.85% | 1.02R | 20m | market | early-reversal | trend | trend | neutral | 60.99 | ↓342.26 | 0.6263 | 2.12 | **LOSS** |
| 390 | LRCX | 01-29 14:35 | 01-29 14:55 | 249.84 | 244.01 | 51 | 12741.84 | -297.33 | -2.33% | 1.47R | 20m | market | stop-loss | breakout | breakout | neutral | 81.94 | ↓248.35 | 1.7014 | 1.8 | **LOSS** |
| 391 | BAC | 01-29 14:45 | 01-29 15:50 | 52.31 | 52.21 | 246 | 12868.26 | -24.6 | -0.19% | 0.24R | 65m | market | stagnation | breakout | breakout | neutral | 74.1 | ↓52.25 | 0.1812 | 1.95 | **LOSS** |
| 392 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.14 | 438.31 | 33 | 14062.62 | +401.61 | +2.86% | 2.17R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 393 | AVGO | 01-30 14:30 | 01-30 14:55 | 335.46 | 332.87 | 41 | 13753.86 | -106.19 | -0.77% | 0.79R | 25m | market | early-reversal | breakout | breakout | neutral | 79.92 | ↓333.96 | 0.8405 | 2.33 | **LOSS** |
| 394 | DDOG | 01-30 14:30 | 01-30 14:55 | 129.65 | 128.83 | 107 | 13872.55 | -87.74 | -0.63% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 72.66 | ↓128.99 | -0.2105 | 1.17 | **LOSS** |
| 395 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.64 | 1024.79 | 13 | 13489.32 | -167.05 | -1.24% | 1.77R | 15m | market | stop-loss | trend | trend | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 396 | SNOW | 01-30 14:35 | 01-30 14:45 | 202.99 | 200.31 | 68 | 13803.32 | -182.24 | -1.32% | 1.33R | 10m | market | stop-loss | breakout | breakout | neutral | 82.3 | ↓202.41 | 0.3186 | 1.73 | **LOSS** |
| 397 | CAT | 01-30 14:35 | 01-30 15:00 | 671.65 | 667.17 | 20 | 13433 | -89.6 | -0.67% | 0.56R | 25m | market | early-reversal | breakout | breakout | neutral | 74.09 | ↓667.39 | 0.2727 | 2.1 | **LOSS** |
| 398 | CVX | 01-30 14:40 | 01-30 15:30 | 173.44 | 173.11 | 80 | 13875.2 | -26.4 | -0.19% | 0.19R | 50m | market | stagnation | breakout | breakout | neutral | 65.51 | ↑172.74 | -0.0852 | 1.62 | **LOSS** |
| 399 | INTC | 01-30 15:15 | 01-30 16:05 | 48.72 | 48.51 | 158 | 7697.76 | -33.18 | -0.43% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 400 | TGT | 01-30 15:20 | 01-30 17:05 | 104.09 | 104.05 | 134 | 13948.06 | -5.36 | -0.04% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **LOSS** |
| 401 | ARM | 02-02 14:30 | 02-02 14:50 | 106.92 | 105.76 | 130 | 13899.6 | -150.8 | -1.08% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 59.78 | ↓106.54 | -0.0211 | 2.48 | **LOSS** |
| 402 | NET | 02-02 14:30 | 02-02 14:55 | 178.21 | 183.33 | 43 | 7663.03 | +220.16 | +2.87% | 2.96R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 403 | PYPL | 02-02 14:30 | 02-02 16:00 | 53 | 52.91 | 263 | 13939 | -23.67 | -0.17% | 0.24R | 90m | market | stagnation | trend | trend | neutral | 70.67 | ↓52.79 | 0.1068 | 2.22 | **LOSS** |
| 404 | WMT | 02-02 14:30 | 02-02 16:15 | 119.98 | 121.91 | 116 | 13917.68 | +223.88 | +1.61% | 2.3R | 105m | market | timeout | trend | trend | neutral | 66.44 | ↑119.64 | 0.2594 | 1.15 | **WIN** |
| 405 | IBM | 02-02 14:30 | 02-02 14:55 | 310.4 | 308.24 | 45 | 13968 | -97.2 | -0.7% | 0.99R | 25m | market | early-reversal | breakout | breakout | neutral | 73.61 | ↓308.99 | 0.7286 | 1.51 | **LOSS** |
| 406 | NFLX | 02-02 14:35 | 02-02 15:10 | 84.74 | 84.22 | 165 | 13982.1 | -85.8 | -0.61% | 0.85R | 35m | market | early-reversal | breakout | breakout | neutral | 74.45 | ↓84.02 | 0.102 | 2.08 | **LOSS** |
| 407 | COST | 02-02 14:35 | 02-02 16:20 | 946.61 | 954.51 | 14 | 13252.54 | +110.6 | +0.83% | 1.19R | 105m | market | timeout | trend | trend | neutral | 60.99 | ↑941.54 | 1.0978 | 1.01 | **WIN** |
| 408 | TGT | 02-02 14:35 | 02-02 14:55 | 106.31 | 105.52 | 131 | 13926.61 | -103.49 | -0.74% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 78.8 | ↓105.85 | 0.3038 | 1.53 | **LOSS** |
| 409 | CRM | 02-02 14:40 | 02-02 15:30 | 215.48 | 215.18 | 64 | 13790.72 | -19.2 | -0.14% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 410 | DELL | 02-02 14:45 | 02-02 16:30 | 116.32 | 116.8 | 120 | 13958.4 | +57.6 | +0.41% | 0.34R | 105m | market | timeout | breakout | breakout | neutral | 75.25 | ↓115.99 | 0.6109 | 1.4 | **WIN** |
| 411 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.51 | 341.23 | 40 | 13660.4 | -11.2 | -0.08% | 0.08R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 412 | AMZN | 02-02 15:15 | 02-02 15:40 | 245.28 | 244.31 | 57 | 13980.96 | -55.29 | -0.4% | 0.34R | 25m | market | early-reversal | trend | trend | neutral | 78.15 | ↑242.8 | 1.0771 | 1.34 | **LOSS** |
| 413 | IBM | 02-02 15:20 | 02-02 17:05 | 313.22 | 314.81 | 44 | 13781.68 | +69.96 | +0.51% | 0.42R | 105m | market | timeout | breakout | breakout | neutral | 71.49 | ↑310.37 | 1.5654 | 1.88 | **WIN** |
| 414 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 415 | BA | 02-03 14:30 | 02-03 14:50 | 237.28 | 235.31 | 58 | 13762.24 | -114.26 | -0.83% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 416 | COST | 02-03 14:30 | 02-03 16:15 | 978.12 | 984.77 | 14 | 13693.68 | +93.1 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 78.19 | ↑974.38 | 1.8119 | 1.39 | **WIN** |
| 417 | LMT | 02-03 14:35 | 02-03 14:55 | 643.82 | 640.93 | 21 | 13520.22 | -60.69 | -0.45% | 0.62R | 20m | market | early-reversal | trend | breakout | neutral | 69.78 | ↓641.52 | 0.8183 | 1.17 | **LOSS** |
| 418 | SBUX | 02-03 14:40 | 02-03 16:25 | 93.02 | 93.42 | 151 | 14046.02 | +60.4 | +0.43% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 419 | LOW | 02-03 14:40 | 02-03 15:00 | 275.1 | 273.66 | 50 | 13755 | -72 | -0.52% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 77.5 | ↓272.86 | 1.0035 | 1.15 | **LOSS** |
| 420 | AMAT | 02-03 14:45 | 02-03 14:55 | 333.49 | 325.02 | 41 | 13673.09 | -347.27 | -2.54% | 1.76R | 10m | market | stop-loss | breakout | breakout | neutral | 63.98 | ↓333.68 | 1.0772 | 3.01 | **LOSS** |
| 421 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 50 | 13739 | -0.5 | 0% | 0R | 40m | market | breakeven-stop | breakout | breakout | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 422 | WMT | 02-04 14:30 | 02-04 15:15 | 128.37 | 127.86 | 109 | 13992.33 | -55.59 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | 74.11 | ↓128.24 | 0.2366 | 1.22 | **LOSS** |
| 423 | DELL | 02-04 14:35 | 02-04 14:55 | 119.94 | 118.51 | 116 | 13913.04 | -165.88 | -1.19% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 74 | ↓119.25 | 0.3491 | 2.05 | **LOSS** |
| 424 | HPE | 02-04 14:35 | 02-04 15:30 | 22.38 | 22.29 | 625 | 13987.5 | -56.25 | -0.4% | 0.37R | 55m | market | stagnation | breakout | breakout | neutral | 78.38 | ↓22.24 | 0.0824 | 1.3 | **LOSS** |
| 425 | COST | 02-04 14:40 | 02-04 15:10 | 991.5 | 987.42 | 14 | 13881 | -57.12 | -0.41% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 83.86 | ↓987.26 | 0.7752 | 1.74 | **LOSS** |
| 426 | LOW | 02-04 14:40 | 02-04 15:30 | 279.21 | 278.26 | 50 | 13960.5 | -47.5 | -0.34% | 0.45R | 50m | market | stagnation | breakout | breakout | neutral | 78.29 | ↓278.01 | 0.8475 | 2.63 | **LOSS** |
| 427 | CRM | 02-04 15:25 | 02-04 16:15 | 197.52 | 196.67 | 70 | 13826.4 | -59.5 | -0.43% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 53.69 | ↑193.04 | 0.1561 | 1.58 | **LOSS** |
| 428 | UBER | 02-05 14:30 | 02-05 15:10 | 74.89 | 74.31 | 173 | 12955.97 | -100.34 | -0.77% | 0.49R | 40m | market | early-reversal | breakout | breakout | neutral | 56.07 | ↓74.36 | -0.1517 | 3.08 | **LOSS** |
| 429 | ASML | 02-05 14:40 | 02-05 15:00 | 1363.13 | 1340.76 | 10 | 13631.3 | -223.7 | -1.64% | 1.58R | 20m | market | stop-loss | breakout | breakout | neutral | 66.64 | ↓1349.73 | 4.9221 | 2.54 | **LOSS** |
| 430 | KLAC | 02-05 14:40 | 02-05 15:00 | 1328.98 | 1315.39 | 5 | 6644.9 | -67.95 | -1.02% | 0.84R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.75 | ↓1308.92 | 4.274 | 1.07 | **LOSS** |
| 431 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.4 | 181.94 | 39 | 13915.2 | +138.06 | +1.98% | 1.14R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 432 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.4 | 183.49 | 39 | 13915.2 | +198.51 | +2.85% | 1.64R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 433 | TSM | 02-06 14:40 | 02-06 15:50 | 344.91 | 344.4 | 40 | 13796.4 | -20.4 | -0.15% | 0.09R | 70m | market | stagnation | breakout | breakout | neutral | 78.24 | ↑341.86 | 3.0464 | 2.15 | **LOSS** |
| 434 | DIS | 02-06 14:40 | 02-06 15:00 | 107.02 | 106.38 | 130 | 13912.6 | -83.2 | -0.6% | 0.69R | 20m | market | early-reversal | breakout | breakout | neutral | 67.99 | ↓106.84 | 0.2989 | 1.79 | **LOSS** |
| 435 | HPE | 02-06 14:40 | 02-06 16:25 | 23.21 | 23.59 | 602 | 13972.42 | +228.76 | +1.64% | 1.38R | 105m | market | timeout | breakout | breakout | neutral | 70.47 | ↑23.13 | 0.111 | 1.13 | **WIN** |
| 436 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 34 | 13876.76 | -79.9 | -0.58% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 437 | UNH | 02-06 14:45 | 02-06 16:30 | 271 | 273.87 | 51 | 13821 | +146.37 | +1.06% | 1.06R | 105m | market | timeout | trend | trend | neutral | 67.37 | ↑270.95 | 0.7697 | 1.19 | **WIN** |
| 438 | DELL | 02-06 14:45 | 02-06 16:30 | 119.7 | 120.84 | 108 | 12927.6 | +123.12 | +0.95% | 0.69R | 105m | market | timeout | breakout | breakout | neutral | 81.66 | ↑119.11 | 1.0302 | 1.13 | **WIN** |
| 439 | LMT | 02-06 15:00 | 02-06 15:20 | 618.93 | 613.61 | 22 | 13616.46 | -117.04 | -0.86% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | 72.64 | ↓617.62 | 1.2905 | 6.48 | **LOSS** |
| 440 | AVGO | 02-06 15:20 | 02-06 17:05 | 325.54 | 331.04 | 23 | 7487.42 | +126.5 | +1.69% | 0.85R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.97 | ↑323.81 | 4.0832 | 1.61 | **WIN** |
| 441 | DIS | 02-06 15:20 | 02-06 17:05 | 107.02 | 107.94 | 130 | 13912.6 | +119.6 | +0.86% | 0.77R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑106.73 | 0.3985 | 1.25 | **WIN** |
| 442 | RIVN | 02-06 15:20 | 02-06 17:05 | 14.28 | 14.56 | 979 | 13980.12 | +274.12 | +1.96% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 92.5 | ↑14.06 | 0.0477 | 1.16 | **WIN** |
| 443 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.34 | 409.75 | 34 | 13951.56 | -20.06 | -0.14% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 444 | PANW | 02-09 15:15 | 02-09 15:35 | 161.15 | 160.07 | 44 | 7090.6 | -47.52 | -0.67% | 0.51R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 73.64 | ↑159.33 | 0.3913 | 1.01 | **LOSS** |
| 445 | DDOG | 02-09 15:15 | 02-09 15:35 | 113.54 | 111.78 | 67 | 7607.18 | -117.92 | -1.55% | 0.78R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.73 | ↓113.26 | 0.4062 | 1.37 | **LOSS** |
| 446 | HD | 02-10 14:30 | 02-10 15:20 | 385.23 | 384.97 | 36 | 13868.28 | -9.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 73.3 | ↓384.63 | 0.5713 | 1.87 | **LOSS** |
| 447 | MSFT | 02-10 15:00 | 02-10 15:20 | 422.34 | 420.04 | 33 | 13937.22 | -75.9 | -0.54% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 78.76 | ↑418.59 | 1.719 | 1.4 | **LOSS** |
| 448 | ORCL | 02-10 15:05 | 02-10 16:15 | 161.82 | 162.61 | 43 | 6958.26 | +33.97 | +0.49% | 0.26R | 70m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.49 | ↑159.99 | 0.9166 | 2.92 | **WIN** |
| 449 | NKE | 02-10 15:15 | 02-10 16:45 | 63.32 | 63.84 | 110 | 13930.4 | +57.2 | +0.82% | 0.85R | 90m | market | trim-profit-target | trend | trend | neutral | 73.08 | ↑62.97 | 0.1246 | 1.28 | **WIN** |
| 450 | NKE | 02-10 15:15 | 02-10 17:00 | 63.32 | 63.69 | 110 | 13930.4 | +40.7 | +0.58% | 0.6R | 105m | market | timeout | trend | trend | neutral | 73.08 | ↑62.97 | 0.1246 | 1.28 | **WIN** |
| 451 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.15 | 428.29 | 32 | 13924.8 | -219.52 | -1.58% | 1.34R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 452 | CVX | 02-11 14:40 | 02-11 15:40 | 184.99 | 184.89 | 72 | 13319.28 | -7.2 | -0.05% | 0.07R | 60m | market | stagnation | breakout | trend | neutral | 78.87 | ↓184.77 | 0.4201 | 1.18 | **LOSS** |
| 453 | GE | 02-11 14:45 | 02-11 15:05 | 320.97 | 319.01 | 43 | 13801.71 | -84.28 | -0.61% | 0.82R | 20m | market | early-reversal | breakout | breakout | neutral | 70.75 | ↓320.19 | 0.4384 | 1.4 | **LOSS** |
| 454 | DELL | 02-11 14:45 | 02-11 15:10 | 126.81 | 125.08 | 110 | 13949.1 | -190.3 | -1.36% | 1.15R | 25m | market | early-reversal | trend | trend | neutral | 63.16 | ↓125.97 | 0.2253 | 1.19 | **LOSS** |
| 455 | ADBE | 02-12 14:30 | 02-12 14:40 | 260.87 | 257.86 | 53 | 13826.11 | -159.53 | -1.15% | 1.6R | 10m | market | stop-loss | breakout | breakout | neutral | 66.71 | ↓260.15 | 0.0759 | 2.02 | **LOSS** |
| 456 | PANW | 02-12 14:30 | 02-12 14:45 | 167.32 | 164.81 | 83 | 13887.56 | -208.33 | -1.5% | 1.83R | 15m | market | stop-loss | trend | trend | neutral | 69.26 | ↓166.7 | -0.0172 | 1.27 | **LOSS** |
| 457 | TXN | 02-12 14:30 | 02-12 14:50 | 229.19 | 227.55 | 61 | 13980.59 | -100.04 | -0.72% | 1.03R | 20m | market | early-reversal | breakout | breakout | neutral | 77.83 | ↓228.26 | -0.0372 | 2.9 | **LOSS** |
| 458 | NOW | 02-12 14:35 | 02-12 15:25 | 103.3 | 102.57 | 74 | 7644.2 | -54.02 | -0.71% | 0.59R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 68.31 | ↓102.9 | 0.2383 | 3 | **LOSS** |
| 459 | MDB | 02-12 14:35 | 02-12 14:40 | 369.17 | 362.63 | 19 | 7014.23 | -124.26 | -1.77% | 1.82R | 5m | market | stop-loss | breakout | trend | noisyHighBeta | 73.15 | ↓368.82 | 1.5794 | 1.05 | **LOSS** |
| 460 | WMT | 02-12 14:35 | 02-12 16:20 | 131.56 | 133.38 | 106 | 13945.36 | +192.92 | +1.38% | 1.97R | 105m | market | timeout | breakout | breakout | neutral | 79.39 | ↑130.67 | 0.2757 | 1.2 | **WIN** |
| 461 | LLY | 02-12 15:15 | 02-12 15:55 | 1033.59 | 1028.21 | 13 | 13436.67 | -69.94 | -0.52% | 0.39R | 40m | market | early-reversal | breakout | breakout | neutral | 69.68 | ↑1022.5 | 1.332 | 1.18 | **LOSS** |
| 462 | CRWD | 02-13 14:30 | 02-13 16:15 | 418.68 | 423.94 | 30 | 12560.4 | +157.8 | +1.26% | 1.42R | 105m | market | timeout | breakout | breakout | neutral | 67.08 | ↑417.18 | 1.4772 | 1.29 | **WIN** |
| 463 | LRCX | 02-13 14:30 | 02-13 14:55 | 239.1 | 236.88 | 53 | 12672.3 | -117.66 | -0.93% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 68.03 | ↓238.55 | -0.0282 | 3.65 | **LOSS** |
| 464 | KLAC | 02-13 14:30 | 02-13 14:40 | 1476.65 | 1454.25 | 9 | 13289.85 | -201.6 | -1.52% | 1.75R | 10m | market | stop-loss | trend | breakout | neutral | 58.5 | ↓1470.53 | -0.0548 | 2 | **LOSS** |
| 465 | NVO | 02-13 14:35 | 02-13 15:15 | 49.64 | 49.37 | 282 | 13998.48 | -76.14 | -0.54% | 0.64R | 40m | market | early-reversal | breakout | trend | neutral | 77.08 | ↓49.57 | 0.2263 | 1.08 | **LOSS** |
| 466 | NKE | 02-13 14:35 | 02-13 15:25 | 62.49 | 62.42 | 223 | 13935.27 | -15.61 | -0.11% | 0.12R | 50m | market | stagnation | breakout | trend | neutral | 71.5 | ↓62.24 | 0.1172 | 1.61 | **LOSS** |
| 467 | KLAC | 02-13 14:45 | 02-13 15:45 | 1474.21 | 1466.24 | 8 | 11793.68 | -63.76 | -0.54% | 0.34R | 60m | market | stagnation | breakout | breakout | neutral | 56.75 | ↓1462.97 | -0.1379 | 2.08 | **LOSS** |
| 468 | TGT | 02-13 15:05 | 02-13 16:45 | 114.75 | 114.77 | 121 | 13884.75 | +2.42 | +0.02% | 0.02R | 100m | market | breakeven-stop | breakout | breakout | neutral | 65.91 | ↑113.6 | 0.3361 | 1.19 | **WIN** |
| 469 | COIN | 02-13 15:15 | 02-13 15:50 | 159.53 | 163.29 | 48 | 7657.44 | +180.48 | +2.36% | 1.18R | 35m | market | profit-target | breakout | trend | noisyHighBeta | 63.47 | ↑152.15 | 3.7261 | 1.04 | **WIN** |
| 470 | INTU | 02-13 15:25 | 02-13 15:45 | 399.74 | 396.4 | 35 | 13990.9 | -116.9 | -0.84% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 53.95 | ↑395.52 | 0.6509 | 1.01 | **LOSS** |
| 471 | BAC | 02-17 14:30 | 02-17 15:25 | 53.07 | 52.91 | 263 | 13957.41 | -42.08 | -0.3% | 0.43R | 55m | market | stagnation | breakout | breakout | neutral | 75.72 | ↓53.1 | 0.0181 | 1.85 | **LOSS** |
| 472 | JPM | 02-17 14:35 | 02-17 16:20 | 306.19 | 307.08 | 45 | 13778.55 | +40.05 | +0.29% | 0.41R | 105m | market | timeout | breakout | trend | neutral | 72.57 | ↑305.18 | 0.2566 | 1.03 | **WIN** |
| 473 | GS | 02-17 14:45 | 02-17 15:05 | 919.36 | 910.77 | 15 | 13790.4 | -128.85 | -0.93% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 474 | V | 02-17 14:45 | 02-17 15:10 | 319.41 | 318 | 43 | 13734.63 | -60.63 | -0.44% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 76.39 | ↑317.48 | 0.2266 | 1.6 | **LOSS** |
| 475 | ASML | 02-18 14:35 | 02-18 16:20 | 1438.81 | 1466.75 | 9 | 12949.29 | +251.46 | +1.94% | 2.77R | 105m | market | timeout | breakout | breakout | neutral | 71.43 | ↑1434.56 | 1.9464 | 1.25 | **WIN** |
| 476 | UBER | 02-18 14:35 | 02-18 16:20 | 71.74 | 72.48 | 194 | 13917.56 | +143.56 | +1.03% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 72.27 | ↑71.21 | 0.1884 | 1.29 | **WIN** |
| 477 | DIS | 02-18 14:35 | 02-18 16:20 | 106.88 | 107.2 | 130 | 13894.4 | +41.6 | +0.3% | 0.43R | 105m | market | timeout | breakout | breakout | neutral | 72.32 | ↓106.56 | 0.1546 | 1.49 | **WIN** |
| 478 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 479 | PYPL | 02-18 14:40 | 02-18 16:25 | 41.3 | 41.54 | 337 | 13918.1 | +80.88 | +0.58% | 0.7R | 105m | market | timeout | trend | breakout | neutral | 56.17 | ↑40.98 | -0.0265 | 1.35 | **WIN** |
| 480 | MDB | 02-18 15:10 | 02-18 16:55 | 361.27 | 362.34 | 21 | 7586.67 | +22.47 | +0.3% | 0.16R | 105m | market | timeout | breakout | trend | noisyHighBeta | 67.01 | ↑354 | 2.3504 | 1.05 | **WIN** |
| 481 | SMCI | 02-19 14:30 | 02-19 14:55 | 31.55 | 31.2 | 440 | 13882 | -154 | -1.11% | 0.56R | 25m | market | trailing-stop | trend | trend | neutral | 79.61 | ↓31.44 | 0.3964 | 9.57 | **LOSS** |
| 482 | XOM | 02-19 14:30 | 02-19 14:55 | 152.48 | 151.85 | 91 | 13875.68 | -57.33 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | trend | neutral | 79.88 | ↓152.56 | 0.1901 | 1.04 | **LOSS** |
| 483 | LMT | 02-19 14:35 | 02-19 15:00 | 664.56 | 661.55 | 21 | 13955.76 | -63.21 | -0.45% | 0.53R | 25m | market | early-reversal | breakout | breakout | neutral | 77.56 | ↓661.34 | 0.8997 | 1.54 | **LOSS** |
| 484 | AMD | 02-19 15:00 | 02-19 15:50 | 202.53 | 201.96 | 68 | 13772.04 | -38.76 | -0.28% | 0.21R | 50m | market | stagnation | trend | breakout | neutral | 69.22 | ↓201.1 | 0.6151 | 1.13 | **LOSS** |
| 485 | AVGO | 02-19 15:00 | 02-19 15:20 | 337.81 | 334.54 | 41 | 13850.21 | -134.07 | -0.97% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 70.49 | ↑333.31 | 0.3551 | 1.15 | **LOSS** |
| 486 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 487 | AMZN | 02-20 14:30 | 02-20 14:50 | 206.49 | 205.78 | 67 | 13834.83 | -47.57 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 79.64 | ↓205.54 | 0.2565 | 2.14 | **LOSS** |
| 488 | SNOW | 02-20 14:30 | 02-20 15:30 | 180.23 | 180.64 | 77 | 13877.71 | +31.57 | +0.23% | 0.28R | 60m | market | trailing-stop | breakout | breakout | neutral | 75.64 | ↓179.63 | 0.3307 | 1.34 | **WIN** |
| 489 | PYPL | 02-20 14:30 | 02-20 15:30 | 41.97 | 42.1 | 308 | 12926.76 | +40.04 | +0.31% | 0.38R | 60m | market | trailing-stop | trend | trend | neutral | 73.12 | ↓41.84 | 0.1345 | 1.32 | **WIN** |
| 490 | CAT | 02-20 15:00 | 02-20 15:30 | 768.87 | 764.18 | 18 | 13839.66 | -84.42 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | neutral | 74.85 | ↑760.33 | 1.1734 | 1.38 | **LOSS** |
| 491 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.04 | 79.82 | 173 | 13846.92 | -38.06 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 492 | TGT | 02-20 15:05 | 02-20 15:25 | 118.75 | 117.44 | 117 | 13893.75 | -153.27 | -1.1% | 0.9R | 20m | market | early-reversal | breakout | breakout | neutral | 75.49 | ↑117.06 | 0.4294 | 1.84 | **LOSS** |
| 493 | HPE | 02-20 15:15 | 02-20 15:35 | 21.85 | 21.73 | 641 | 14005.85 | -76.92 | -0.55% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 77.84 | ↑21.58 | 0.0676 | 1.43 | **LOSS** |
| 494 | TSM | 02-23 14:50 | 02-23 15:40 | 373.07 | 370.96 | 37 | 13803.59 | -78.07 | -0.57% | 0.57R | 50m | market | early-reversal | breakout | breakout | neutral | 57.09 | ↓370.54 | -0.1838 | 3.07 | **LOSS** |
| 495 | LLY | 02-23 15:05 | 02-23 16:50 | 1049.38 | 1055.27 | 13 | 13641.94 | +76.57 | +0.56% | 0.28R | 105m | market | timeout | trend | trend | neutral | 67.96 | ↑1043.18 | 8.7856 | 1.84 | **WIN** |
| 496 | MCD | 02-23 15:05 | 02-23 15:25 | 334.01 | 332.12 | 41 | 13694.41 | -77.49 | -0.57% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 79.7 | ↓333.18 | 1.3572 | 1.1 | **LOSS** |
| 497 | AAPL | 02-23 15:15 | 02-23 16:00 | 266.85 | 265.73 | 52 | 13876.2 | -58.24 | -0.42% | 0.38R | 45m | market | early-reversal | trend | trend | neutral | 63.51 | ↓265.35 | 0.4074 | 1.4 | **LOSS** |
| 498 | INTC | 02-24 14:35 | 02-24 16:05 | 44.02 | 45.83 | 293 | 12897.86 | +530.33 | +4.11% | 2.32R | 90m | market | profit-target | breakout | breakout | neutral | 62.02 | ↑44.07 | 0.1741 | 1.36 | **WIN** |
| 499 | MU | 02-24 14:35 | 02-24 14:50 | 425.84 | 424.32 | 32 | 13626.88 | -48.64 | -0.36% | 0.25R | 15m | market | trailing-stop | breakout | breakout | neutral | 78.66 | ↓424.99 | 0.7161 | 4.48 | **LOSS** |
| 500 | UBER | 02-24 14:35 | 02-24 14:50 | 71.9 | 70.86 | 194 | 13948.6 | -201.76 | -1.45% | 1.42R | 15m | market | stop-loss | breakout | breakout | neutral | 77.3 | ↓71.41 | 0.1245 | 2.76 | **LOSS** |

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

- ⚠️ **Profit factor 0.66 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.77R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:09:53.984Z*
