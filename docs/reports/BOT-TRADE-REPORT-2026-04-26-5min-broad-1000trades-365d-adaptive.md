# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T09:29:16.353Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1639.86 (-1.64%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 34.6% (346W / 654L) |
| Net P&L | $-1639.86 (-1.64%) |
| Gross profit | $34013.69 |
| Gross loss | $35653.55 |
| Profit factor | 0.95 |
| Avg win | $98.31 |
| Avg loss | $54.52 |
| Payoff ratio | 1.8:1 |
| Expectancy | $-1.64 / trade |
| Max drawdown | 5.16% |
| Sharpe ratio (ann.) | -0.57 |
| Trades / active day | 10.31 |
| Avg confidence | 95.08% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $98,360.14 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 593 | 36.42% | $+1618.92 | $2.73 |
| Mid  10:30–11:30 | 165 | 38.18% | $+16.71 | $0.1 |
| Noon 11:30–13:00 | 165 | 26.06% | $-2480.84 | $-15.04 |
| PM   13:00–14:00 | 77 | 31.17% | $-794.65 | $-10.32 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 32 | 13 | 40.63% | $+1001.18 | $+31.29 | 2 | eligible |
| NET | 34 | 17 | 50% | $+807.85 | $+23.76 | 1.62 | eligible |
| GOOGL | 20 | 12 | 60% | $+600.14 | $+30.01 | 2.38 | eligible |
| RIVN | 29 | 11 | 37.93% | $+558.48 | $+19.26 | 1.41 | throttle |
| ORCL | 18 | 10 | 55.56% | $+532.87 | $+29.6 | 2.38 | eligible |
| GS | 13 | 9 | 69.23% | $+478.69 | $+36.82 | 3.22 | eligible |
| HD | 8 | 4 | 50% | $+462.19 | $+57.77 | 4.65 | eligible |
| SHOP | 24 | 11 | 45.83% | $+454.82 | $+18.95 | 1.63 | eligible |
| MU | 20 | 7 | 35% | $+380.93 | $+19.05 | 1.48 | throttle |
| BA | 20 | 8 | 40% | $+280.19 | $+14.01 | 1.4 | eligible |
| TSLA | 20 | 8 | 40% | $+280.17 | $+14.01 | 1.47 | eligible |
| TGT | 19 | 8 | 42.11% | $+261.92 | $+13.79 | 1.61 | eligible |
| MRVL | 23 | 11 | 47.83% | $+256.11 | $+11.14 | 1.37 | eligible |
| PLTR | 25 | 9 | 36% | $+217.36 | $+8.69 | 1.18 | throttle |
| GE | 15 | 8 | 53.33% | $+204.78 | $+13.65 | 1.58 | eligible |
| IBM | 7 | 4 | 57.14% | $+204.6 | $+29.23 | 4.17 | eligible |
| QCOM | 13 | 6 | 46.15% | $+182.34 | $+14.03 | 1.64 | eligible |
| NVDA | 19 | 7 | 36.84% | $+166.1 | $+8.74 | 1.31 | throttle |
| ADP | 3 | 2 | 66.67% | $+147.64 | $+49.21 | 4.04 | watch |
| MA | 4 | 2 | 50% | $+147 | $+36.75 | 26.13 | watch |
| ASML | 8 | 3 | 37.5% | $+110.47 | $+13.81 | 1.91 | throttle |
| SNOW | 20 | 6 | 30% | $+85.71 | $+4.29 | 1.13 | throttle |
| BAC | 10 | 4 | 40% | $+84.96 | $+8.5 | 1.35 | eligible |
| AAPL | 15 | 6 | 40% | $+53.41 | $+3.56 | 1.13 | eligible |
| NKE | 18 | 7 | 38.89% | $+39.72 | $+2.21 | 1.07 | throttle |
| TSM | 12 | 4 | 33.33% | $+0.15 | $+0.01 | 1 | throttle |
| JPM | 7 | 3 | 42.86% | $-4.41 | $-0.63 | 0.96 | throttle |
| V | 4 | 1 | 25% | $-13.37 | $-3.34 | 0.74 | watch |
| XOM | 6 | 2 | 33.33% | $-30.88 | $-5.15 | 0.78 | throttle |
| COST | 10 | 2 | 20% | $-41.8 | $-4.18 | 0.79 | throttle |
| NVO | 22 | 9 | 40.91% | $-47.28 | $-2.15 | 0.92 | throttle |
| UBER | 20 | 6 | 30% | $-52.69 | $-2.63 | 0.92 | throttle |
| UNH | 16 | 6 | 37.5% | $-63.05 | $-3.94 | 0.89 | throttle |
| COIN | 22 | 6 | 27.27% | $-69.9 | $-3.18 | 0.95 | throttle |
| CRM | 12 | 3 | 25% | $-76.63 | $-6.39 | 0.78 | throttle |
| ARM | 23 | 8 | 34.78% | $-82.62 | $-3.59 | 0.89 | throttle |
| SMCI | 24 | 7 | 29.17% | $-98.24 | $-4.09 | 0.92 | throttle |
| AMZN | 17 | 7 | 41.18% | $-99.19 | $-5.83 | 0.76 | throttle |
| AMAT | 12 | 3 | 25% | $-102.63 | $-8.55 | 0.67 | throttle |
| MSFT | 8 | 4 | 50% | $-112.68 | $-14.08 | 0.46 | throttle |
| KLAC | 11 | 3 | 27.27% | $-159.36 | $-14.49 | 0.66 | throttle |
| ABNB | 9 | 1 | 11.11% | $-163.37 | $-18.15 | 0.44 | throttle |
| WMT | 6 | 1 | 16.67% | $-165.14 | $-27.52 | 0.04 | throttle |
| DDOG | 21 | 8 | 38.1% | $-171.37 | $-8.16 | 0.83 | throttle |
| SBUX | 11 | 4 | 36.36% | $-174.58 | $-15.87 | 0.49 | throttle |
| ELF | 20 | 7 | 35% | $-179.41 | $-8.97 | 0.76 | throttle |
| LLY | 19 | 8 | 42.11% | $-186.45 | $-9.81 | 0.73 | throttle |
| LMT | 6 | 0 | 0% | $-207.18 | $-34.53 | 0 | throttle |
| LOW | 6 | 0 | 0% | $-223.09 | $-37.18 | 0 | throttle |
| MDB | 14 | 2 | 14.29% | $-228.61 | $-16.33 | 0.62 | throttle |
| LRCX | 13 | 4 | 30.77% | $-234.27 | $-18.02 | 0.58 | throttle |
| META | 15 | 2 | 13.33% | $-254.36 | $-16.96 | 0.53 | throttle |
| DIS | 10 | 2 | 20% | $-260.78 | $-26.08 | 0.34 | throttle |
| CAT | 13 | 3 | 23.08% | $-273.73 | $-21.06 | 0.3 | throttle |
| INTU | 6 | 0 | 0% | $-292.57 | $-48.76 | 0 | throttle |
| CVX | 10 | 4 | 40% | $-298.62 | $-29.86 | 0.49 | throttle |
| NFLX | 12 | 3 | 25% | $-322.31 | $-26.86 | 0.32 | throttle |
| TXN | 9 | 2 | 22.22% | $-323.78 | $-35.98 | 0.23 | throttle |
| AVGO | 15 | 3 | 20% | $-324.15 | $-21.61 | 0.41 | throttle |
| AMD | 19 | 7 | 36.84% | $-329.26 | $-17.33 | 0.69 | throttle |
| PYPL | 11 | 1 | 9.09% | $-370.42 | $-33.67 | 0.03 | throttle |
| HPE | 12 | 4 | 33.33% | $-384.03 | $-32 | 0.24 | throttle |
| NOW | 10 | 1 | 10% | $-384.71 | $-38.47 | 0.08 | throttle |
| CRWD | 15 | 3 | 20% | $-446.45 | $-29.76 | 0.33 | throttle |
| ADBE | 9 | 2 | 22.22% | $-453.98 | $-50.44 | 0.1 | throttle |
| DELL | 21 | 4 | 19.05% | $-508.65 | $-24.22 | 0.47 | throttle |
| CELH | 13 | 2 | 15.38% | $-614.12 | $-47.24 | 0.23 | throttle |
| PANW | 12 | 1 | 8.33% | $-809.52 | $-67.46 | 0.04 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 473 | 153 | 32.35% | $-3955.08 | $-8.36 |
| breakout | 527 | 193 | 36.62% | $+2315.22 | $+4.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 390 | 143 | 36.67% | $+1650.38 | $+4.23 |
| extendedBreakout | 60 | 21 | 35% | $+95.94 | $+1.6 |
| noisyHighBeta | 37 | 14 | 37.84% | $-430.6 | $-11.64 |
| neutral | 513 | 168 | 32.75% | $-2955.58 | $-5.76 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | HD | 5 | 4.32 | $+54.5 | 3 | 5.24 | $+63.23 | 0.04% | 3.7 | promote |
| Symbol | SHOP | 14 | 1.33 | $+9.16 | 10 | 1.98 | $+32.66 | 0.33% | 1.48 | promote |
| Symbol | GS | 7 | 7.67 | $+48.7 | 6 | 1.84 | $+22.96 | 0.11% | 1.34 | promote |
| Symbol | NET | 16 | 1.87 | $+31.93 | 18 | 1.42 | $+16.5 | 0.29% | 1.14 | promote |
| Symbol | MU | 12 | 1.7 | $+20.39 | 8 | 1.31 | $+17.04 | 0.36% | 1.09 | watch |
| Symbol | RIVN | 16 | 1.56 | $+24.68 | 13 | 1.25 | $+12.59 | 0.26% | 1.02 | watch |
| Symbol | MRVL | 11 | 1.34 | $+11.68 | 12 | 1.41 | $+10.64 | 0.31% | 1.06 | watch |
| Symbol | INTC | 24 | 2.23 | $+38.67 | 8 | 1.3 | $+9.14 | 0.2% | 0.96 | watch |
| Symbol | GOOGL | 8 | 5.11 | $+71.05 | 12 | 1.11 | $+2.65 | 0.15% | 0.74 | watch |
| Symbol | GE | 11 | 1.76 | $+17.84 | 4 | 1.09 | $+2.14 | 0.08% | 0.75 | watch |
| Symbol | NVDA | 16 | 1.38 | $+11.46 | 3 | 0.64 | $-5.76 | 0.05% | 0.25 | watch |
| Setup | breakout | 297 | 1.4 | $+14.12 | 230 | 0.78 | $-8.17 | 2.27% | 0.6 | watch |
| Time slot | Open 9:30-10:30 | 332 | 1.36 | $+12.17 | 261 | 0.76 | $-9.27 | 3.01% | 0.59 | watch |
| Symbol | TSLA | 11 | 2.27 | $+33.21 | 9 | 0.73 | $-9.47 | 0.26% | 0.54 | watch |
| Behavior | falseBreakoutProne | 225 | 1.54 | $+16.47 | 165 | 0.67 | $-12.45 | 2.36% | 0.51 | watch |
| Symbol | TGT | 14 | 2.23 | $+27.2 | 5 | 0 | $-23.76 | 0.12% | 0 | watch |
| Symbol | ORCL | 11 | 9.39 | $+65.95 | 7 | 0.36 | $-27.51 | 0.3% | 0.27 | watch |
| Symbol | CRM | 7 | 1.52 | $+12.88 | 5 | 0 | $-33.36 | 0.17% | 0 | watch |
| Symbol | COST | 7 | 1.72 | $+9.31 | 3 | 0 | $-35.65 | 0.11% | 0 | watch |
| Symbol | UBER | 13 | 1.84 | $+22.65 | 7 | 0 | $-49.59 | 0.35% | 0 | watch |
| Symbol | UNH | 10 | 2.75 | $+31.09 | 6 | 0 | $-62.33 | 0.37% | 0 | watch |
| Symbol | PLTR | 19 | 1.94 | $+34.49 | 6 | 0.13 | $-72.98 | 0.44% | 0.1 | watch |
| Symbol | SNOW | 8 | 0.25 | $-29.11 | 12 | 1.92 | $+26.55 | 0.15% | 1.44 | reject |
| Symbol | QCOM | 8 | 1.28 | $+6.32 | 5 | 2.23 | $+26.36 | 0.11% | 1.6 | reject |
| Symbol | BAC | 5 | 0.7 | $-9.09 | 5 | 2.39 | $+26.08 | 0.05% | 1.54 | reject |
| Symbol | BA | 14 | 1.29 | $+11.07 | 6 | 1.71 | $+20.88 | 0.13% | 1.32 | reject |
| Symbol | AAPL | 5 | 0.25 | $-23.81 | 10 | 1.69 | $+17.25 | 0.12% | 1.21 | reject |
| Symbol | SBUX | 6 | 0.08 | $-41.4 | 5 | 2 | $+14.77 | 0.07% | 1.26 | reject |
| Symbol | MSFT | 5 | 0.09 | $-29.68 | 3 | 1.79 | $+11.91 | 0.05% | 1.06 | reject |
| Symbol | MDB | 6 | 0 | $-50.58 | 8 | 1.25 | $+9.36 | 0.25% | 0.97 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-3849.51 | 0.9 |
| +3 bps/side | $-8268.73 | 0.79 |
| +5 bps/side | $-12688.05 | 0.71 |
| +10 bps/side | $-23736.39 | 0.54 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 403 |
| timeout | 268 |
| stagnation | 160 |
| stop-loss | 57 |
| breakeven-stop | 48 |
| trim-profit-target | 28 |
| profit-target | 26 |
| trailing-stop | 10 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 14:50 | 04-29 15:35 | 185.7 | 185.07 | 75 | 13927.5 | -47.25 | -0.34% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 2 | COST | 04-29 14:50 | 04-29 16:30 | 987.94 | 986.89 | 14 | 13831.16 | -14.7 | -0.11% | 0.16R | 100m | market | stagnation | trend | trend | neutral | 70.56 | ↑982.51 | 3.3386 | 1.01 | **LOSS** |
| 3 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.64 | 109.53 | 127 | 13924.28 | -13.97 | -0.1% | 0.14R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 4 | META | 04-29 17:45 | 04-29 19:00 | 554.95 | 554.66 | 25 | 13873.75 | -7.25 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 5 | NFLX | 04-29 17:45 | 04-29 18:05 | 1121.77 | 1118.55 | 12 | 13461.24 | -38.64 | -0.29% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑1108.08 | 2.0405 | 2.45 | **LOSS** |
| 6 | ARM | 04-29 17:45 | 04-29 18:50 | 113.04 | 112.95 | 123 | 13903.92 | -11.07 | -0.08% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 63.58 | ↑112.34 | 0.0897 | 2.32 | **LOSS** |
| 7 | DIS | 04-29 17:45 | 04-29 18:35 | 91.59 | 91.51 | 152 | 13921.68 | -12.16 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 66.22 | ↑90.8 | 0.0806 | 1.42 | **LOSS** |
| 8 | MRVL | 04-29 17:45 | 04-29 18:50 | 59.32 | 59.34 | 236 | 13999.52 | +4.72 | +0.03% | 0.04R | 65m | market | breakeven-stop | trend | trend | neutral | 70.89 | ↑58.64 | 0.105 | 1 | **WIN** |
| 9 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.62 | 187.55 | 74 | 13883.88 | -5.18 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 10 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 11 | SMCI | 04-30 15:30 | 04-30 16:20 | 30.71 | 30.52 | 250 | 7677.5 | -47.5 | -0.62% | 0.31R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.16 | ↑29.86 | 0.2995 | 1.82 | **LOSS** |
| 12 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 13 | RIVN | 04-30 17:30 | 04-30 19:15 | 13.31 | 13.49 | 1049 | 13962.19 | +188.82 | +1.35% | 1.47R | 105m | market | timeout | trend | trend | neutral | 74.7 | ↑13.09 | 0.0405 | 1.16 | **WIN** |
| 14 | SBUX | 04-30 17:35 | 04-30 18:30 | 79.63 | 79.28 | 175 | 13935.25 | -61.25 | -0.44% | 0.53R | 55m | market | early-reversal | trend | trend | neutral | 68.31 | ↑78.49 | 0.1342 | 1.17 | **LOSS** |
| 15 | AMD | 04-30 17:40 | 04-30 19:25 | 96.01 | 96.16 | 145 | 13921.45 | +21.75 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 72 | ↑94.23 | 0.1572 | 1.14 | **WIN** |
| 16 | CRWD | 05-01 13:30 | 05-01 13:55 | 431.94 | 429.06 | 22 | 9502.68 | -63.36 | -0.67% | 0.96R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 17 | MSFT | 05-01 13:40 | 05-01 14:00 | 434.46 | 429.69 | 20 | 8689.2 | -95.4 | -1.1% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.46 | ↓433.92 | 10.8676 | 2.55 | **LOSS** |
| 18 | AVGO | 05-01 13:40 | 05-01 15:25 | 197.94 | 198.86 | 45 | 8907.3 | +41.4 | +0.46% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.09 | ↑197.41 | 1.5614 | 3.56 | **WIN** |
| 19 | CAT | 05-01 13:40 | 05-01 14:30 | 316.73 | 316.26 | 28 | 8868.44 | -13.16 | -0.15% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 20 | DELL | 05-01 13:40 | 05-01 14:10 | 94.58 | 94.03 | 94 | 8890.52 | -51.7 | -0.58% | 0.49R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.36 | ↓93.91 | 0.7297 | 1.37 | **LOSS** |
| 21 | NOW | 05-01 13:45 | 05-01 15:30 | 967.44 | 971.23 | 9 | 8706.96 | +34.11 | +0.39% | 0.38R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 22 | DDOG | 05-01 13:45 | 05-01 14:10 | 104.91 | 103.96 | 79 | 8287.89 | -75.05 | -0.91% | 0.64R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 96.82 | ↓104.51 | 0.7912 | 1.4 | **LOSS** |
| 23 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 24 | UBER | 05-01 14:05 | 05-01 15:20 | 81.59 | 81.5 | 171 | 13951.89 | -15.39 | -0.11% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 25 | GE | 05-01 14:15 | 05-01 16:00 | 203.55 | 204 | 68 | 13841.4 | +30.6 | +0.22% | 0.24R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 26 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 27 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 28 | RIVN | 05-01 14:25 | 05-01 15:30 | 14.06 | 14.03 | 547 | 7690.82 | -16.41 | -0.21% | 0.11R | 65m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 29 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 26 | 7510.36 | -51.48 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 30 | INTU | 05-01 14:30 | 05-01 15:55 | 631.54 | 630.89 | 22 | 13893.88 | -14.3 | -0.1% | 0.13R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 31 | ARM | 05-01 14:35 | 05-01 15:30 | 118.54 | 118.43 | 118 | 13987.72 | -12.98 | -0.09% | 0.05R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑117.29 | 1.6688 | 1.2 | **LOSS** |
| 32 | CELH | 05-01 15:00 | 05-01 15:30 | 35.4 | 35.22 | 395 | 13983 | -71.1 | -0.51% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 33 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 34 | TXN | 05-01 15:10 | 05-01 15:55 | 161.4 | 160.32 | 86 | 13880.4 | -92.88 | -0.67% | 0.96R | 45m | market | early-reversal | trend | trend | neutral | 67.92 | ↓160.37 | 0.479 | 1.95 | **LOSS** |
| 35 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 36 | AMD | 05-01 15:15 | 05-01 15:35 | 100.12 | 99.46 | 139 | 13916.68 | -91.74 | -0.66% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 37 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.11 | 151.52 | 92 | 13994.12 | -54.28 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 38 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.4 | 73.05 | 190 | 13946 | -66.5 | -0.48% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 39 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 40 | SMCI | 05-01 15:25 | 05-01 15:45 | 33.3 | 32.93 | 231 | 7692.3 | -85.47 | -1.11% | 0.6R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.49 | ↑32.34 | 0.4172 | 1.01 | **LOSS** |
| 41 | JPM | 05-01 15:25 | 05-01 16:15 | 247.1 | 246.78 | 56 | 13837.6 | -17.92 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 42 | ELF | 05-01 16:35 | 05-01 16:55 | 62.76 | 62.36 | 223 | 13995.48 | -89.2 | -0.64% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 68.38 | ↑62.07 | 0.0812 | 2.71 | **LOSS** |
| 43 | MU | 05-02 13:30 | 05-02 13:50 | 80.33 | 79.31 | 112 | 8996.96 | -114.24 | -1.27% | 1.13R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 44 | BAC | 05-02 13:30 | 05-02 13:50 | 41.03 | 40.75 | 220 | 9026.6 | -61.6 | -0.68% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 45 | COST | 05-02 13:30 | 05-02 14:30 | 1014.3 | 1012.4 | 8 | 8114.4 | -15.2 | -0.19% | 0.27R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.19 | ↓1013.58 | 1.0251 | 1.56 | **LOSS** |
| 46 | V | 05-02 13:30 | 05-02 14:00 | 349.39 | 348.13 | 25 | 8734.75 | -31.5 | -0.36% | 0.44R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 47 | AMD | 05-02 13:35 | 05-02 13:55 | 99.32 | 98.67 | 98 | 9733.36 | -63.7 | -0.65% | 0.54R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.6 | ↓98.96 | -0.0578 | 1.5 | **LOSS** |
| 48 | CRM | 05-02 13:35 | 05-02 14:40 | 274.03 | 273.85 | 35 | 9591.05 | -6.3 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 63.96 | ↓273.42 | 0.0846 | 1.78 | **LOSS** |
| 49 | ORCL | 05-02 13:35 | 05-02 15:20 | 150.35 | 151.08 | 59 | 8870.65 | +43.07 | +0.49% | 0.5R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 50 | UBER | 05-02 13:35 | 05-02 15:20 | 83.06 | 84.22 | 108 | 8970.48 | +125.28 | +1.4% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.99 | ↑82.61 | 0.2144 | 1.45 | **WIN** |
| 51 | CAT | 05-02 13:35 | 05-02 13:55 | 321.91 | 319.92 | 43 | 13842.13 | -85.57 | -0.62% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 52 | LMT | 05-02 13:35 | 05-02 14:35 | 488.67 | 487.66 | 18 | 8796.06 | -18.18 | -0.21% | 0.3R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.17 | ↓487.17 | 2.1118 | 1.82 | **LOSS** |
| 53 | HD | 05-02 13:35 | 05-02 14:00 | 364.83 | 363.44 | 26 | 9485.58 | -36.14 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 54 | PLTR | 05-02 13:40 | 05-02 15:25 | 120.89 | 121.87 | 74 | 8945.86 | +72.52 | +0.81% | 0.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.82 | ↑120.31 | 0.4497 | 4.08 | **WIN** |
| 55 | NOW | 05-02 13:40 | 05-02 14:35 | 984.61 | 976.55 | 9 | 8861.49 | -72.54 | -0.82% | 0.75R | 55m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.34 | ↓980.72 | 1.7513 | 1.42 | **LOSS** |
| 56 | IBM | 05-02 13:40 | 05-02 15:25 | 243.65 | 244.01 | 40 | 9746 | +14.4 | +0.15% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.98 | ↑243.37 | 0.8439 | 1.31 | **WIN** |
| 57 | WMT | 05-02 13:45 | 05-02 14:35 | 99.07 | 98.86 | 91 | 9015.37 | -19.11 | -0.21% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.07 | ↓98.63 | 0.3215 | 1.32 | **LOSS** |
| 58 | MSFT | 05-02 13:50 | 05-02 14:40 | 436.72 | 435.55 | 22 | 9607.84 | -25.74 | -0.27% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 59 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.25 | 1152.26 | 12 | 13755 | +72.12 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 60 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.21 | 439.7 | 31 | 13708.51 | -77.81 | -0.57% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 61 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 62 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 63 | HPE | 05-02 14:10 | 05-02 14:40 | 16.96 | 16.88 | 825 | 13992 | -66 | -0.47% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 72.33 | ↓16.84 | 0.0808 | 1.74 | **LOSS** |
| 64 | SBUX | 05-02 14:25 | 05-02 14:55 | 83.89 | 83.52 | 166 | 13925.74 | -61.42 | -0.44% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 65 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.73 | 140.91 | 50 | 13973 | +59 | +0.84% | 1.15R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 66 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.73 | 141.17 | 50 | 13973 | +72 | +1.03% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 67 | COIN | 05-02 15:00 | 05-02 15:10 | 208.43 | 205.65 | 67 | 13964.81 | -186.26 | -1.33% | 1.25R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 68 | ELF | 05-02 15:50 | 05-02 16:55 | 66.44 | 67.19 | 105 | 13952.4 | +78.75 | +1.13% | 1.61R | 65m | market | trim-profit-target | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 69 | ELF | 05-02 15:50 | 05-02 17:40 | 66.44 | 67.14 | 105 | 13952.4 | +73.5 | +1.05% | 1.5R | 110m | market | timeout | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 70 | INTC | 05-02 16:00 | 05-02 16:20 | 20.72 | 20.64 | 675 | 13986 | -54 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 71.08 | ↑20.52 | 0.0779 | 3.2 | **LOSS** |
| 71 | PLTR | 05-02 16:00 | 05-02 17:15 | 123.19 | 122.85 | 113 | 13920.47 | -38.42 | -0.28% | 0.3R | 75m | market | stagnation | trend | trend | neutral | 63.93 | ↑121.73 | 0.4969 | 1.64 | **LOSS** |
| 72 | CVX | 05-02 16:00 | 05-02 16:20 | 139.31 | 138.66 | 100 | 13931 | -65 | -0.47% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 77.72 | ↑137.37 | 0.5221 | 2.96 | **LOSS** |
| 73 | TXN | 05-02 16:00 | 05-02 16:25 | 166.05 | 165.32 | 84 | 13948.2 | -61.32 | -0.44% | 0.63R | 25m | market | early-reversal | trend | trend | neutral | 77.57 | ↑164.11 | 0.8117 | 1.71 | **LOSS** |
| 74 | KLAC | 05-02 16:00 | 05-02 16:35 | 706.72 | 702.15 | 19 | 13427.68 | -86.83 | -0.65% | 0.93R | 35m | market | early-reversal | trend | trend | neutral | 65.3 | ↑701.75 | 5.0071 | 1.1 | **LOSS** |
| 75 | COIN | 05-02 16:05 | 05-02 17:05 | 207.55 | 207.44 | 67 | 13905.85 | -7.37 | -0.05% | 0.05R | 60m | market | stagnation | trend | trend | neutral | 54.22 | ↑205.93 | 0.7587 | 1.57 | **LOSS** |
| 76 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 47 | 9041.39 | -34.31 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 77 | CVX | 05-02 16:30 | 05-02 16:50 | 139.48 | 138.34 | 100 | 13948 | -114 | -0.82% | 1.05R | 20m | market | stop-loss | trend | trend | neutral | 78.83 | ↑137.61 | 0.673 | 1.66 | **LOSS** |
| 78 | TSLA | 05-02 16:35 | 05-02 18:20 | 291.7 | 293.1 | 26 | 7584.2 | +36.4 | +0.48% | 0.46R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.09 | ↑285.22 | 1.7688 | 1.53 | **WIN** |
| 79 | SBUX | 05-02 16:40 | 05-02 17:45 | 84.55 | 84.43 | 165 | 13950.75 | -19.8 | -0.14% | 0.2R | 65m | market | stagnation | trend | trend | neutral | 79.76 | ↑83.49 | 0.2297 | 1.08 | **LOSS** |
| 80 | ARM | 05-02 16:45 | 05-02 17:05 | 123.09 | 122.59 | 113 | 13909.17 | -56.5 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 73.23 | ↑121.01 | 0.6264 | 1.76 | **LOSS** |
| 81 | AMD | 05-05 13:45 | 05-05 14:30 | 100.98 | 100.31 | 89 | 8987.22 | -59.63 | -0.66% | 0.58R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.78 | ↓100.45 | 0.3484 | 1.42 | **LOSS** |
| 82 | NOW | 05-05 13:55 | 05-05 14:20 | 991.57 | 985.66 | 9 | 8924.13 | -53.19 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 83 | UNH | 05-05 14:00 | 05-05 15:45 | 403.9 | 406.51 | 34 | 13732.6 | +88.74 | +0.65% | 0.86R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 84 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 85 | PANW | 05-05 15:00 | 05-05 15:50 | 190.31 | 190.22 | 73 | 13892.63 | -6.57 | -0.05% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 86 | PLTR | 05-05 16:20 | 05-05 16:50 | 124.97 | 124.47 | 61 | 7623.17 | -30.5 | -0.4% | 0.57R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 71.09 | ↑123.14 | 0.4883 | 1.54 | **LOSS** |
| 87 | CELH | 05-05 17:40 | 05-05 18:40 | 34.6 | 34.58 | 404 | 13978.4 | -8.08 | -0.06% | 0.09R | 60m | market | breakeven-stop | trend | trend | neutral | 73.03 | ↑34.17 | 0.073 | 1.31 | **LOSS** |
| 88 | XOM | 05-06 14:10 | 05-06 15:55 | 104.94 | 105.38 | 133 | 13957.02 | +58.52 | +0.42% | 0.49R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 89 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.3 | 106.77 | 131 | 13925.3 | +61.57 | +0.44% | 0.23R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 90 | SMCI | 05-06 15:35 | 05-06 15:55 | 32.8 | 32.49 | 234 | 7675.2 | -72.54 | -0.95% | 0.7R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.16 | ↑32.21 | 0.1398 | 1.06 | **LOSS** |
| 91 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 48 | 9006.72 | +28.32 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 92 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 102 | 9756.3 | -63.24 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 93 | NKE | 05-07 13:35 | 05-07 15:10 | 58.01 | 58.05 | 156 | 9049.56 | +6.24 | +0.07% | 0.1R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 94 | DIS | 05-07 13:40 | 05-07 14:00 | 102.17 | 100.79 | 88 | 8990.96 | -121.44 | -1.35% | 0.68R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.06 | ↓101.44 | 2.2882 | 2.62 | **LOSS** |
| 95 | NVO | 05-07 13:45 | 05-07 14:35 | 68.74 | 68.35 | 130 | 8936.2 | -50.7 | -0.57% | 0.35R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.89 | ↓68.58 | 0.4826 | 1.91 | **LOSS** |
| 96 | NFLX | 05-07 14:15 | 05-07 15:00 | 1152.23 | 1152.71 | 12 | 13826.76 | +5.76 | +0.04% | 0.06R | 45m | market | breakeven-stop | trend | trend | neutral | 71.5 | ↑1144.48 | 1.5134 | 1.89 | **WIN** |
| 97 | AVGO | 05-07 16:45 | 05-07 17:35 | 203.07 | 202.41 | 68 | 13808.76 | -44.88 | -0.33% | 0.47R | 50m | market | early-reversal | trend | trend | neutral | 60.83 | ↑200.88 | 0.4076 | 1.16 | **LOSS** |
| 98 | NOW | 05-07 16:45 | 05-07 17:35 | 983.47 | 981.52 | 14 | 13768.58 | -27.3 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 59.34 | ↑976.15 | 2.811 | 2.11 | **LOSS** |
| 99 | INTU | 05-07 16:45 | 05-07 18:05 | 637.45 | 633.25 | 21 | 13386.45 | -88.2 | -0.66% | 0.94R | 80m | market | early-reversal | trend | trend | neutral | 66.87 | ↓632.73 | 1.306 | 1.48 | **LOSS** |
| 100 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.45 | 55.08 | 164 | 9093.8 | -60.68 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 101 | AMD | 05-08 13:35 | 05-08 14:25 | 103.84 | 103.6 | 86 | 8930.24 | -20.64 | -0.23% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.36 | ↓103.31 | 1.2511 | 1.96 | **LOSS** |
| 102 | PLTR | 05-08 13:40 | 05-08 15:25 | 115.79 | 117.88 | 77 | 8915.83 | +160.93 | +1.8% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.5 | ↑114.31 | 1.5125 | 2.37 | **WIN** |
| 103 | PYPL | 05-08 13:40 | 05-08 14:45 | 69.74 | 69.66 | 130 | 9066.2 | -10.4 | -0.11% | 0.11R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 104 | XOM | 05-08 13:40 | 05-08 14:10 | 106.28 | 105.67 | 85 | 9033.8 | -51.85 | -0.57% | 0.74R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 105 | GE | 05-08 13:40 | 05-08 14:35 | 212.97 | 212.74 | 42 | 8944.74 | -9.66 | -0.11% | 0.14R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.61 | ↑212.15 | 0.4951 | 1.58 | **LOSS** |
| 106 | ELF | 05-08 14:25 | 05-08 14:55 | 68.07 | 67.55 | 205 | 13954.35 | -106.6 | -0.76% | 0.72R | 30m | market | early-reversal | breakout | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 107 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 43 | 8213.86 | +126.85 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 108 | BAC | 05-08 15:15 | 05-08 17:00 | 41.74 | 42.05 | 335 | 13982.9 | +103.85 | +0.74% | 1.06R | 105m | market | timeout | trend | trend | neutral | 65.76 | ↑41.48 | 0.1338 | 1.15 | **WIN** |
| 109 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 110 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 31 | 8889.56 | -7.75 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 111 | GE | 05-08 15:25 | 05-08 17:10 | 215.07 | 215.89 | 65 | 13979.55 | +53.3 | +0.38% | 0.54R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 112 | HD | 05-08 15:25 | 05-08 17:10 | 366.72 | 367.52 | 38 | 13935.36 | +30.4 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 60.48 | ↑363.87 | 0.5541 | 2.42 | **WIN** |
| 113 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.85 | 193.49 | 36 | 13813.2 | +59.04 | +0.85% | 1.1R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 114 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.85 | 193.46 | 36 | 13813.2 | +57.96 | +0.84% | 1.09R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 115 | CAT | 05-08 15:35 | 05-08 17:20 | 326.79 | 327.48 | 42 | 13725.18 | +28.98 | +0.21% | 0.3R | 105m | market | timeout | trend | trend | neutral | 73.35 | ↑324.49 | 1.3771 | 1.33 | **WIN** |
| 116 | MSFT | 05-08 15:40 | 05-08 16:00 | 443.34 | 441.96 | 31 | 13743.54 | -42.78 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 72.65 | ↑439 | 1.3245 | 2.61 | **LOSS** |
| 117 | CRM | 05-08 15:40 | 05-08 16:30 | 282.56 | 281.98 | 49 | 13845.44 | -28.42 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 68.45 | ↑280.2 | 0.8715 | 1.79 | **LOSS** |
| 118 | TSM | 05-08 15:40 | 05-08 16:00 | 176.65 | 175.93 | 79 | 13955.35 | -56.88 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 69.52 | ↑174.95 | 0.5299 | 1.65 | **LOSS** |
| 119 | ABNB | 05-08 15:40 | 05-08 17:25 | 127.05 | 126.94 | 110 | 13975.5 | -12.1 | -0.09% | 0.13R | 105m | market | stagnation | trend | trend | neutral | 68.8 | ↑125.05 | 0.7853 | 1.35 | **LOSS** |
| 120 | DDOG | 05-08 15:40 | 05-08 17:25 | 108.12 | 109.06 | 129 | 13947.48 | +121.26 | +0.87% | 1.14R | 105m | market | timeout | trend | trend | neutral | 55.15 | ↑107.26 | 0.2842 | 2.14 | **WIN** |
| 121 | XOM | 05-08 15:40 | 05-08 16:35 | 107.02 | 106.98 | 130 | 13912.6 | -5.2 | -0.04% | 0.06R | 55m | market | stagnation | trend | trend | neutral | 62.66 | ↑106.2 | 0.402 | 2.46 | **LOSS** |
| 122 | CVX | 05-08 15:40 | 05-08 16:10 | 138.7 | 138.22 | 100 | 13870 | -48 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 67.16 | ↑137.56 | 0.4712 | 2.23 | **LOSS** |
| 123 | TXN | 05-08 15:40 | 05-08 16:00 | 167.83 | 167.06 | 83 | 13929.89 | -63.91 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 68.66 | ↑165.91 | 0.5807 | 1.49 | **LOSS** |
| 124 | HPE | 05-08 15:40 | 05-08 16:00 | 17.06 | 17 | 820 | 13989.2 | -49.2 | -0.35% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 52.94 | ↑16.92 | 0.0935 | 2.02 | **LOSS** |
| 125 | TGT | 05-08 15:40 | 05-08 17:25 | 97.76 | 97.99 | 143 | 13979.68 | +32.89 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 59.46 | ↑96.87 | 0.2971 | 1.92 | **WIN** |
| 126 | ELF | 05-08 15:40 | 05-08 17:25 | 68.5 | 68.63 | 204 | 13974 | +26.52 | +0.19% | 0.2R | 105m | market | timeout | trend | trend | neutral | 63.78 | ↑67.84 | 0.3917 | 5.89 | **WIN** |
| 127 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 966 | 12886.44 | +386.4 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 128 | MU | 05-08 15:45 | 05-08 17:30 | 85.51 | 85.81 | 106 | 9064.06 | +31.8 | +0.35% | 0.35R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.41 | ↑84.19 | 0.5086 | 2.02 | **WIN** |
| 129 | NKE | 05-08 15:45 | 05-08 16:05 | 60.01 | 59.65 | 233 | 13982.33 | -83.88 | -0.6% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 68.07 | ↑59.34 | 0.2597 | 2.09 | **LOSS** |
| 130 | LOW | 05-08 15:50 | 05-08 17:25 | 225.64 | 225.52 | 62 | 13989.68 | -7.44 | -0.05% | 0.07R | 95m | market | stagnation | trend | trend | neutral | 66.48 | ↑223.99 | 0.4304 | 1.27 | **LOSS** |
| 131 | QCOM | 05-08 16:15 | 05-08 17:45 | 146.7 | 146.55 | 95 | 13936.5 | -14.25 | -0.1% | 0.14R | 90m | market | stagnation | trend | trend | neutral | 77.38 | ↑144.96 | 0.5208 | 1.95 | **LOSS** |
| 132 | NKE | 05-08 16:15 | 05-08 17:10 | 59.96 | 59.9 | 233 | 13970.68 | -13.98 | -0.1% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 77.2 | ↑59.44 | 0.1923 | 2.09 | **LOSS** |
| 133 | DIS | 05-08 16:20 | 05-08 17:05 | 105.97 | 105.65 | 131 | 13882.07 | -41.92 | -0.3% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 73.03 | ↑105.03 | 0.2034 | 1.01 | **LOSS** |
| 134 | NET | 05-08 16:55 | 05-08 17:45 | 124.94 | 124.84 | 111 | 13868.34 | -11.1 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 64.23 | ↑123.24 | 0.5628 | 2.76 | **LOSS** |
| 135 | TXN | 05-08 16:55 | 05-08 17:15 | 168.43 | 167.47 | 82 | 13811.26 | -78.72 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 67.9 | ↑166.36 | 0.6834 | 1.66 | **LOSS** |
| 136 | MDB | 05-08 17:00 | 05-08 18:00 | 179.87 | 179.54 | 77 | 13849.99 | -25.41 | -0.18% | 0.26R | 60m | market | stagnation | trend | trend | neutral | 67.48 | ↑177.39 | 0.7506 | 1.43 | **LOSS** |
| 137 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 46 | 8946.08 | -49.68 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 138 | SMCI | 05-09 13:35 | 05-09 14:00 | 32.7 | 32.48 | 277 | 9057.9 | -60.94 | -0.67% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.56 | ↓32.57 | 0.0095 | 1.51 | **LOSS** |
| 139 | COIN | 05-09 13:45 | 05-09 14:05 | 212.76 | 210.15 | 45 | 9574.2 | -117.45 | -1.23% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.46 | ↑207.08 | 0.0494 | 1.49 | **LOSS** |
| 140 | TSLA | 05-09 13:55 | 05-09 14:35 | 302.98 | 299.49 | 30 | 9089.4 | -104.7 | -1.15% | 0.58R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.88 | ↓298.1 | 3.2305 | 1.6 | **LOSS** |
| 141 | RIVN | 05-09 14:45 | 05-09 15:10 | 14.25 | 14.39 | 542 | 7723.5 | +75.88 | +0.98% | 0.51R | 25m | market | trailing-stop | breakout | breakout | noisyHighBeta | 67.59 | ↑13.98 | 0.0712 | 1.82 | **WIN** |
| 142 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.64 | 374 | 13968.9 | -265.54 | -1.9% | 1.38R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 143 | ABNB | 05-09 17:55 | 05-09 18:15 | 126.24 | 125.89 | 110 | 13886.4 | -38.5 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 68.09 | ↑124.73 | 0.3196 | 1.95 | **LOSS** |
| 144 | NKE | 05-12 14:00 | 05-12 14:25 | 63.24 | 62.62 | 143 | 9043.32 | -88.66 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓62.7 | 1.0815 | 1.41 | **LOSS** |
| 145 | COIN | 05-12 14:40 | 05-12 15:00 | 213.01 | 209.55 | 60 | 12780.6 | -207.6 | -1.62% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 146 | UBER | 05-12 14:55 | 05-12 16:25 | 85.19 | 86.3 | 82 | 13971.16 | +91.02 | +1.3% | 0.91R | 90m | market | trim-profit-target | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 147 | UBER | 05-12 14:55 | 05-12 16:40 | 85.19 | 86.19 | 82 | 13971.16 | +82 | +1.17% | 0.82R | 105m | market | timeout | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 148 | KLAC | 05-12 15:50 | 05-12 17:35 | 752.87 | 759.71 | 18 | 13551.66 | +123.12 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 72 | ↑748.33 | 7.4136 | 2.75 | **WIN** |
| 149 | ARM | 05-12 16:10 | 05-12 16:30 | 124.72 | 124.17 | 67 | 8356.24 | -36.85 | -0.44% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.27 | ↑122.91 | 0.4147 | 2.75 | **LOSS** |
| 150 | LLY | 05-12 16:40 | 05-12 17:40 | 759.49 | 759.83 | 18 | 13670.82 | +6.12 | +0.04% | 0.06R | 60m | market | breakeven-stop | trend | trend | neutral | 74.57 | ↑741.47 | 4.7499 | 2.96 | **WIN** |
| 151 | AMAT | 05-12 16:55 | 05-12 18:10 | 168.91 | 168.83 | 82 | 13850.62 | -6.56 | -0.05% | 0.07R | 75m | market | stagnation | trend | trend | neutral | 79.55 | ↑167.17 | 0.4777 | 1.74 | **LOSS** |
| 152 | MRVL | 05-12 17:05 | 05-12 17:25 | 65.11 | 64.8 | 214 | 13933.54 | -66.34 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑64.06 | 0.2549 | 1.05 | **LOSS** |
| 153 | INTC | 05-12 17:35 | 05-12 17:50 | 22.6 | 22.36 | 373 | 8429.8 | -89.52 | -1.06% | 1.38R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 154 | UBER | 05-12 17:35 | 05-12 18:40 | 86.86 | 86.81 | 161 | 13984.46 | -8.05 | -0.06% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 61.52 | ↑85.07 | 0.2097 | 1.36 | **LOSS** |
| 155 | MU | 05-13 13:30 | 05-13 15:15 | 93.88 | 95.74 | 138 | 12955.44 | +256.68 | +1.98% | 2.57R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 156 | TSM | 05-13 13:30 | 05-13 15:15 | 189.87 | 192.63 | 47 | 8923.89 | +129.72 | +1.45% | 2.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 157 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 83 | 8856.93 | +126.16 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 158 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 137 | 8984.46 | +117.82 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 159 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 14 | 9093.56 | +124.04 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 160 | NFLX | 05-13 13:35 | 05-13 15:20 | 1128.54 | 1137.39 | 8 | 9028.32 | +70.8 | +0.78% | 1.05R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.1 | ↑1120.51 | 0.5982 | 2.23 | **WIN** |
| 161 | ARM | 05-13 13:35 | 05-13 14:40 | 125.86 | 125.44 | 72 | 9061.92 | -30.24 | -0.33% | 0.43R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 162 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 61 | 8896.85 | +119.56 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 163 | CAT | 05-13 13:35 | 05-13 13:55 | 351.7 | 349.52 | 25 | 8792.5 | -54.5 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.35 | ↓350.65 | 1.0052 | 1.12 | **LOSS** |
| 164 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 44 | 8902.08 | +50.16 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 165 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 71 | 8984.34 | +254.18 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 166 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.13 | 441.02 | 20 | 8702.6 | +117.8 | +1.35% | 1.93R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 167 | DELL | 05-13 13:50 | 05-13 15:35 | 106.05 | 107.59 | 85 | 9014.25 | +130.9 | +1.45% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 168 | SMCI | 05-13 13:55 | 05-13 14:40 | 36.04 | 37.8 | 249 | 8973.96 | +438.24 | +4.88% | 2.44R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 89.53 | ↑35.38 | 0.5657 | 1.49 | **WIN** |
| 169 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 170 | SNOW | 05-13 14:00 | 05-13 15:10 | 182.84 | 182.71 | 76 | 13895.84 | -9.88 | -0.07% | 0.1R | 70m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 171 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 368 | 8419.84 | -106.72 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 172 | UBER | 05-13 14:20 | 05-13 14:40 | 90.93 | 90.18 | 154 | 14003.22 | -115.5 | -0.82% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 76.51 | ↑89.22 | 0.9267 | 1.1 | **LOSS** |
| 173 | PLTR | 05-13 14:45 | 05-13 15:45 | 125.01 | 128.46 | 72 | 9000.72 | +248.4 | +2.76% | 1.97R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 65.77 | ↑123 | 1.5757 | 1.67 | **WIN** |
| 174 | AVGO | 05-13 15:00 | 05-13 15:20 | 231.88 | 230.96 | 36 | 8347.68 | -33.12 | -0.4% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.02 | ↑227.92 | 2.7447 | 1.3 | **LOSS** |
| 175 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.24 | 795.9 | 17 | 13366.08 | +164.22 | +1.23% | 1.73R | 105m | market | timeout | breakout | trend | neutral | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 176 | AMAT | 05-13 15:10 | 05-13 16:55 | 172.54 | 173.69 | 81 | 13975.74 | +93.15 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 73.42 | ↑170.64 | 1.0363 | 1.7 | **WIN** |
| 177 | META | 05-13 15:25 | 05-13 16:00 | 660.24 | 658.17 | 21 | 13865.04 | -43.47 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 178 | MU | 05-13 15:25 | 05-13 17:10 | 96.03 | 96.39 | 146 | 14020.38 | +52.56 | +0.37% | 0.47R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 179 | COIN | 05-13 15:30 | 05-13 16:45 | 248.06 | 254.67 | 56 | 13891.36 | +370.16 | +2.66% | 1.51R | 75m | market | profit-target | trend | trend | neutral | 71.52 | ↑239.19 | 6.0007 | 1.13 | **WIN** |
| 180 | ORCL | 05-13 15:40 | 05-13 17:00 | 162.13 | 162 | 86 | 13943.18 | -11.18 | -0.08% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 76.6 | ↑160.23 | 0.952 | 1.11 | **LOSS** |
| 181 | DELL | 05-13 15:40 | 05-13 16:15 | 107.83 | 107.5 | 129 | 13910.07 | -42.57 | -0.31% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 66.67 | ↑106.87 | 0.8481 | 6.04 | **LOSS** |
| 182 | HPE | 05-13 15:40 | 05-13 16:00 | 18.03 | 17.95 | 775 | 13973.25 | -62 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 67.86 | ↑17.91 | 0.0585 | 2.64 | **LOSS** |
| 183 | UBER | 05-13 15:45 | 05-13 16:05 | 91.38 | 90.95 | 153 | 13981.14 | -65.79 | -0.47% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 72.58 | ↑89.85 | 0.6691 | 1.01 | **LOSS** |
| 184 | NET | 05-13 15:45 | 05-13 17:10 | 148.96 | 150.24 | 46 | 13853.28 | +58.88 | +0.86% | 1.23R | 85m | market | trim-profit-target | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 185 | NET | 05-13 15:45 | 05-13 17:30 | 148.96 | 150.67 | 47 | 13853.28 | +80.37 | +1.15% | 1.64R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 186 | MRVL | 05-13 15:45 | 05-13 16:05 | 66.86 | 66.43 | 209 | 13973.74 | -89.87 | -0.64% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 60.31 | ↑66.15 | 0.4147 | 1.03 | **LOSS** |
| 187 | MDB | 05-13 15:55 | 05-13 16:55 | 196.61 | 196.23 | 71 | 13959.31 | -26.98 | -0.19% | 0.27R | 60m | market | stagnation | trend | trend | neutral | 71.52 | ↑194.9 | 1.4222 | 1.68 | **LOSS** |
| 188 | AVGO | 05-13 16:25 | 05-13 17:00 | 233.89 | 232.93 | 59 | 13799.51 | -56.64 | -0.41% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 67.87 | ↑229.28 | 1.4154 | 1.08 | **LOSS** |
| 189 | ELF | 05-13 16:25 | 05-13 17:50 | 76.9 | 77.71 | 91 | 13995.8 | +73.71 | +1.05% | 1.4R | 85m | market | trim-profit-target | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 190 | ELF | 05-13 16:25 | 05-13 18:10 | 76.9 | 77.49 | 91 | 13995.8 | +53.69 | +0.77% | 1.03R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 191 | CELH | 05-13 16:30 | 05-13 17:10 | 37.77 | 37.52 | 203 | 7667.31 | -50.75 | -0.66% | 0.94R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 75 | ↑37.37 | 0.0887 | 2.45 | **LOSS** |
| 192 | SMCI | 05-13 17:15 | 05-13 19:00 | 38.5 | 38.73 | 200 | 7700 | +46 | +0.6% | 0.51R | 105m | market | timeout | trend | trend | noisyHighBeta | 55.3 | ↑37.34 | 0.1012 | 1.7 | **WIN** |
| 193 | SBUX | 05-13 17:25 | 05-13 19:10 | 86.6 | 86.74 | 161 | 13942.6 | +22.54 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑85.89 | 0.1051 | 1.56 | **WIN** |
| 194 | LLY | 05-14 13:30 | 05-14 13:50 | 756.77 | 749.68 | 12 | 9081.24 | -85.08 | -0.94% | 1.34R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 195 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 60 | 9679.2 | -84 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 196 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 58 | 8919.24 | -100.34 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 197 | NVO | 05-14 13:35 | 05-14 13:50 | 66.64 | 65.97 | 135 | 8996.4 | -90.45 | -1.01% | 1.38R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 198 | CELH | 05-14 13:35 | 05-14 14:40 | 38.99 | 38.96 | 228 | 8889.72 | -6.84 | -0.08% | 0.06R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 80.9 | ↓38.74 | 0.2514 | 1.69 | **LOSS** |
| 199 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.19 | 72.92 | 124 | 9075.56 | -33.48 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 200 | ELF | 05-14 14:00 | 05-14 14:20 | 79.79 | 78.98 | 175 | 13963.25 | -141.75 | -1.02% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 201 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 202 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 203 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 204 | WMT | 05-14 14:20 | 05-14 15:10 | 96.95 | 96.87 | 144 | 13960.8 | -11.52 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 205 | BA | 05-14 15:45 | 05-14 16:05 | 208.69 | 207.45 | 67 | 13982.23 | -83.08 | -0.59% | 0.59R | 20m | market | early-reversal | trend | breakout | neutral | 52.56 | ↑206.7 | 0.617 | 2.45 | **LOSS** |
| 206 | NVDA | 05-14 16:30 | 05-14 16:55 | 135.37 | 134.67 | 103 | 13943.11 | -72.1 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 207 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 524 | 7723.76 | +120.52 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | noisyHighBeta | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 208 | JPM | 05-15 13:40 | 05-15 13:45 | 269.12 | 267.07 | 33 | 8880.96 | -67.65 | -0.76% | 1.09R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 76.67 | ↓268.38 | 0.6217 | 2.74 | **LOSS** |
| 209 | V | 05-15 13:40 | 05-15 14:35 | 361.12 | 360.93 | 25 | 9028 | -4.75 | -0.05% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.5 | ↓359.87 | 0.8029 | 4.46 | **LOSS** |
| 210 | ADP | 05-15 13:40 | 05-15 15:25 | 314.09 | 315.41 | 28 | 8794.52 | +36.96 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.29 | ↑312.99 | 1.5099 | 1.22 | **WIN** |
| 211 | RIVN | 05-15 14:00 | 05-15 14:25 | 15.28 | 15.09 | 506 | 7731.68 | -96.14 | -1.24% | 0.62R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.73 | ↓15.06 | 0.0463 | 1.62 | **LOSS** |
| 212 | TGT | 05-15 14:10 | 05-15 15:45 | 95.87 | 96.67 | 73 | 13997.02 | +58.4 | +0.83% | 0.69R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 213 | TGT | 05-15 14:10 | 05-15 15:55 | 95.87 | 96.7 | 73 | 13997.02 | +60.59 | +0.87% | 0.72R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 214 | COST | 05-15 14:50 | 05-15 16:40 | 1004.1 | 1008.18 | 13 | 13053.3 | +53.04 | +0.41% | 0.59R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 215 | NFLX | 05-15 14:55 | 05-15 15:30 | 1169.64 | 1165.81 | 11 | 12866.04 | -42.13 | -0.33% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 66.91 | ↑1158.19 | 5.2118 | 1.19 | **LOSS** |
| 216 | NVO | 05-15 15:15 | 05-15 17:00 | 65.59 | 66.1 | 213 | 13970.67 | +108.63 | +0.78% | 1.11R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 217 | INTU | 05-15 15:20 | 05-15 16:15 | 663.15 | 662.43 | 21 | 13926.15 | -15.12 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 218 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 648 | 13932 | +38.88 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 219 | RIVN | 05-15 15:40 | 05-15 17:25 | 15.33 | 15.32 | 504 | 7726.32 | -5.04 | -0.07% | 0.06R | 105m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.95 | ↑15.1 | 0.0711 | 1.98 | **LOSS** |
| 220 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.76 | 135.7 | 103 | 13983.28 | -6.18 | -0.04% | 0.06R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 221 | MU | 05-15 16:35 | 05-15 18:15 | 94.88 | 94.82 | 147 | 13947.36 | -8.82 | -0.06% | 0.09R | 100m | market | stagnation | trend | trend | neutral | 75.72 | ↑93.29 | 0.4705 | 1.32 | **LOSS** |
| 222 | SMCI | 05-15 16:45 | 05-15 17:05 | 45.31 | 44.96 | 157 | 7113.67 | -54.95 | -0.77% | 0.45R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 75.08 | ↑43.61 | 0.5857 | 1.26 | **LOSS** |
| 223 | DELL | 05-15 16:45 | 05-15 17:35 | 111.15 | 111.02 | 126 | 14004.9 | -16.38 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 78.02 | ↑109.77 | 0.3998 | 1.5 | **LOSS** |
| 224 | MU | 05-16 13:30 | 05-16 15:15 | 96.43 | 97.42 | 94 | 9064.42 | +93.06 | +1.03% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.53 | ↑96.22 | 0.1541 | 1.16 | **WIN** |
| 225 | SMCI | 05-16 13:30 | 05-16 14:05 | 46.05 | 46.51 | 197 | 9071.85 | +90.62 | +1% | 0.51R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓45.7 | 0.3935 | 4.7 | **WIN** |
| 226 | TGT | 05-16 13:30 | 05-16 15:15 | 97.91 | 98.32 | 93 | 9105.63 | +38.13 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 227 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 81 | 9086.58 | -47.79 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 228 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 58 | 8999.86 | +76.56 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 229 | LLY | 05-16 13:35 | 05-16 15:20 | 744.36 | 748.04 | 13 | 9676.68 | +47.84 | +0.49% | 0.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 230 | NFLX | 05-16 13:45 | 05-16 14:30 | 1193.72 | 1186.56 | 8 | 9549.76 | -57.28 | -0.6% | 0.86R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 231 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.41 | 437.21 | 20 | 8748.2 | -4 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 232 | DELL | 05-16 13:45 | 05-16 14:40 | 112.55 | 112.41 | 80 | 9004 | -11.2 | -0.12% | 0.17R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 233 | ADBE | 05-16 13:55 | 05-16 14:15 | 420.4 | 418.5 | 21 | 8828.4 | -39.9 | -0.45% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↑415.86 | 3.7059 | 1.35 | **LOSS** |
| 234 | WMT | 05-16 14:05 | 05-16 15:20 | 98.38 | 98.43 | 142 | 13969.96 | +7.1 | +0.05% | 0.05R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 235 | NKE | 05-16 14:10 | 05-16 15:00 | 63.36 | 63.31 | 220 | 13939.2 | -11 | -0.08% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 236 | SMCI | 05-16 14:15 | 05-16 14:35 | 47.58 | 46.55 | 149 | 7089.42 | -153.47 | -2.16% | 1.08R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 75.72 | ↓46.83 | 0.8383 | 1.21 | **LOSS** |
| 237 | UBER | 05-16 15:05 | 05-16 16:50 | 91.84 | 92.56 | 152 | 13959.68 | +109.44 | +0.78% | 1.01R | 105m | market | timeout | trend | trend | neutral | 74.83 | ↑90.93 | 0.3759 | 1.39 | **WIN** |
| 238 | UNH | 05-16 16:40 | 05-16 18:00 | 284.6 | 285.67 | 27 | 7684.2 | +28.89 | +0.38% | 0.2R | 80m | market | trailing-stop | breakout | breakout | noisyHighBeta | 68.58 | ↑276.97 | 0.499 | 2.69 | **WIN** |
| 239 | ELF | 05-16 17:40 | 05-16 18:45 | 79.35 | 79.26 | 176 | 13965.6 | -15.84 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 76.47 | ↑77.91 | 0.2957 | 1.37 | **LOSS** |
| 240 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 67 | 8994.08 | +42.88 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 241 | BAC | 05-19 14:05 | 05-19 14:25 | 45.04 | 44.88 | 310 | 13962.4 | -49.6 | -0.36% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 242 | RIVN | 05-19 16:10 | 05-19 17:55 | 15.96 | 16.24 | 880 | 14044.8 | +246.4 | +1.75% | 1.9R | 105m | market | timeout | trend | trend | neutral | 70.97 | ↑15.61 | 0.0869 | 2.2 | **WIN** |
| 243 | UNH | 05-19 16:25 | 05-19 17:30 | 313.59 | 313.45 | 24 | 7526.16 | -3.36 | -0.04% | 0.03R | 65m | market | stagnation | trend | trend | noisyHighBeta | 78.79 | ↑304.66 | 2.5615 | 3.18 | **LOSS** |
| 244 | NVO | 05-19 16:25 | 05-19 17:10 | 66.7 | 66.47 | 209 | 13940.3 | -48.07 | -0.34% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 77.27 | ↑65.96 | 0.2627 | 1.17 | **LOSS** |
| 245 | MU | 05-19 17:00 | 05-19 17:20 | 98.94 | 98.65 | 141 | 13950.54 | -40.89 | -0.29% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 70.97 | ↑97.51 | 0.245 | 1.21 | **LOSS** |
| 246 | SMCI | 05-19 17:05 | 05-19 17:25 | 45.73 | 45.54 | 214 | 9786.22 | -40.66 | -0.42% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.65 | ↑45.44 | 0.0211 | 2.11 | **LOSS** |
| 247 | NET | 05-19 17:35 | 05-19 18:15 | 158.57 | 157.57 | 88 | 13954.16 | -88 | -0.63% | 0.9R | 40m | market | early-reversal | trend | trend | neutral | 75.75 | ↑156.75 | 0.3478 | 1.69 | **LOSS** |
| 248 | RIVN | 05-20 13:55 | 05-20 14:45 | 16.96 | 16.9 | 536 | 9090.56 | -32.16 | -0.35% | 0.18R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.21 | ↑16.69 | 0.1387 | 1.39 | **LOSS** |
| 249 | TGT | 05-20 14:45 | 05-20 15:35 | 99.08 | 98.92 | 141 | 13970.28 | -22.56 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 250 | DELL | 05-21 13:40 | 05-21 14:00 | 115.7 | 114.94 | 111 | 12842.7 | -84.36 | -0.66% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 83.42 | ↓114.5 | 0.108 | 1.17 | **LOSS** |
| 251 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.79 | 171.64 | 82 | 13922.78 | +151.7 | +1.09% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 252 | ASML | 05-21 14:00 | 05-21 14:45 | 751.93 | 749.81 | 18 | 13534.74 | -38.16 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 73.36 | ↓750.62 | 1.4433 | 2.48 | **LOSS** |
| 253 | HPE | 05-21 14:00 | 05-21 14:35 | 17.97 | 17.9 | 777 | 13962.69 | -54.39 | -0.39% | 0.48R | 35m | market | early-reversal | trend | trend | neutral | 74.38 | ↓17.88 | 0.0552 | 2.42 | **LOSS** |
| 254 | NVO | 05-21 14:05 | 05-21 15:50 | 69.13 | 69.49 | 202 | 13964.26 | +72.72 | +0.52% | 0.57R | 105m | market | timeout | trend | trend | neutral | 71.49 | ↑68.69 | 0.1802 | 1.49 | **WIN** |
| 255 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 256 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 257 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 258 | AVGO | 05-21 15:05 | 05-21 16:50 | 234.64 | 236.19 | 59 | 13843.76 | +91.45 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 78 | ↑231.9 | 0.9065 | 1.44 | **WIN** |
| 259 | NFLX | 05-21 15:05 | 05-21 15:45 | 1210.01 | 1206.17 | 11 | 13310.11 | -42.24 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.26 | ↑1201.77 | 5.443 | 1.67 | **LOSS** |
| 260 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 261 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.08 | 154.93 | 90 | 13957.2 | -13.5 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 262 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.59 | 447.39 | 31 | 13875.29 | -6.2 | -0.04% | 0.06R | 65m | market | stagnation | breakout | breakout | neutral | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 263 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 52 | 8929.96 | +218.92 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 264 | DDOG | 05-22 13:35 | 05-22 14:40 | 115.75 | 115.73 | 84 | 9723 | -1.68 | -0.02% | 0.03R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 67.5 | ↓115.09 | -0.0783 | 1.65 | **LOSS** |
| 265 | TGT | 05-22 13:35 | 05-22 15:15 | 94.43 | 94.48 | 103 | 9726.29 | +5.15 | +0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 58.78 | ↓93.74 | 0.1907 | 1.41 | **WIN** |
| 266 | MDB | 05-22 13:45 | 05-22 14:35 | 188.54 | 187.95 | 51 | 9615.54 | -30.09 | -0.31% | 0.25R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.82 | ↓188.33 | 0.1922 | 1.41 | **LOSS** |
| 267 | PLTR | 05-22 13:50 | 05-22 15:35 | 123.52 | 125.85 | 73 | 9016.96 | +170.09 | +1.89% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑122.43 | 0.1249 | 1.77 | **WIN** |
| 268 | SMCI | 05-22 13:50 | 05-22 14:50 | 41.87 | 41.82 | 234 | 9797.58 | -11.7 | -0.12% | 0.07R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 50.56 | ↓41.54 | -0.1242 | 1.34 | **LOSS** |
| 269 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 15 | 9619.65 | -32.4 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 270 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 271 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 272 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.83 | 83.19 | 166 | 13915.78 | -106.24 | -0.76% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 273 | AVGO | 05-22 15:05 | 05-22 15:35 | 232.88 | 232.08 | 60 | 13972.8 | -48 | -0.34% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 65.02 | ↑229.61 | 0.7526 | 1.13 | **LOSS** |
| 274 | MU | 05-22 15:05 | 05-22 15:25 | 97.04 | 96.49 | 144 | 13973.76 | -79.2 | -0.57% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 275 | TGT | 05-22 16:10 | 05-22 16:30 | 95.71 | 95.4 | 146 | 13973.66 | -45.26 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 58.73 | ↑94.91 | 0.2533 | 1.01 | **LOSS** |
| 276 | NVO | 05-22 16:25 | 05-22 18:10 | 67.98 | 68.27 | 205 | 13935.9 | +59.45 | +0.43% | 0.61R | 105m | market | timeout | trend | trend | neutral | 75.27 | ↑67.24 | 0.1864 | 1.72 | **WIN** |
| 277 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.09 | 204.23 | 68 | 13946.12 | -58.48 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 278 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.05 | 122.46 | 112 | 13781.6 | -66.08 | -0.48% | 0.38R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 279 | TSLA | 05-23 17:05 | 05-23 18:15 | 341.13 | 340.59 | 40 | 13645.2 | -21.6 | -0.16% | 0.23R | 70m | market | stagnation | trend | trend | neutral | 78.08 | ↑336.95 | 0.9299 | 1.04 | **LOSS** |
| 280 | AMD | 05-23 17:15 | 05-23 19:00 | 110.49 | 110.55 | 126 | 13921.74 | +7.56 | +0.05% | 0.07R | 105m | market | timeout | trend | trend | neutral | 72.27 | ↑109.17 | 0.2445 | 1.47 | **WIN** |
| 281 | MU | 05-23 17:20 | 05-23 17:40 | 93.74 | 93.43 | 149 | 13967.26 | -46.19 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 75.14 | ↑91.96 | 0.3904 | 1.38 | **LOSS** |
| 282 | QCOM | 05-23 17:25 | 05-23 18:20 | 146.01 | 145.62 | 95 | 13870.95 | -37.05 | -0.27% | 0.39R | 55m | market | stagnation | trend | trend | neutral | 77.07 | ↑143.59 | 0.547 | 1.78 | **LOSS** |
| 283 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 57 | 9743.01 | +72.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 284 | INTU | 05-27 13:30 | 05-27 13:45 | 733.66 | 726.5 | 12 | 8803.92 | -85.92 | -0.98% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.5 | ↓730.5 | 1.0404 | 1.38 | **LOSS** |
| 285 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.85 | 161.78 | 56 | 8951.6 | +108.08 | +1.21% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 286 | QCOM | 05-27 13:35 | 05-27 15:20 | 147.38 | 148.86 | 66 | 9727.08 | +97.68 | +1% | 1.08R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.04 | ↑147.11 | 0.2285 | 1.17 | **WIN** |
| 287 | TSM | 05-27 13:35 | 05-27 15:20 | 194.92 | 195.86 | 46 | 8966.32 | +43.24 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 288 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 15 | 9103.8 | +61.35 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 289 | GE | 05-27 13:35 | 05-27 15:20 | 236.41 | 240.04 | 59 | 13948.19 | +214.17 | +1.54% | 2.2R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 290 | SBUX | 05-27 13:35 | 05-27 14:10 | 86.19 | 85.74 | 104 | 8963.76 | -46.8 | -0.52% | 0.74R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 291 | NKE | 05-27 13:35 | 05-27 15:20 | 61.13 | 62.17 | 147 | 8986.11 | +152.88 | +1.7% | 2.02R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.78 | ↑61.11 | 0.1357 | 1.57 | **WIN** |
| 292 | DIS | 05-27 13:40 | 05-27 15:25 | 111.1 | 112.1 | 88 | 9776.8 | +88 | +0.9% | 1.29R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 70.72 | ↑110.71 | 0.0835 | 1.89 | **WIN** |
| 293 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.73 | 161.56 | 56 | 9000.88 | +46.48 | +0.52% | 0.67R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 294 | CELH | 05-27 13:40 | 05-27 15:25 | 36.83 | 37.21 | 244 | 8986.52 | +92.72 | +1.03% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.22 | ↑36.56 | 0.1227 | 1.55 | **WIN** |
| 295 | SNOW | 05-27 13:45 | 05-27 14:20 | 205.92 | 204.84 | 43 | 8854.56 | -46.44 | -0.52% | 0.48R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.97 | ↓204.39 | 0.6946 | 1.93 | **LOSS** |
| 296 | MDB | 05-27 13:45 | 05-27 14:55 | 188.84 | 188.48 | 48 | 9064.32 | -17.28 | -0.19% | 0.22R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 70 | ↓188.58 | 0.8834 | 1.35 | **LOSS** |
| 297 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 298 | LLY | 05-27 14:00 | 05-27 14:20 | 723.09 | 718.62 | 19 | 13738.71 | -84.93 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 299 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 300 | UBER | 05-27 14:25 | 05-27 15:10 | 89.25 | 88.95 | 157 | 14012.25 | -47.1 | -0.34% | 0.28R | 45m | market | early-reversal | trend | trend | neutral | 71.73 | ↑88.52 | 0.2599 | 1.56 | **LOSS** |
| 301 | ARM | 05-27 15:05 | 05-27 16:50 | 134.86 | 135.49 | 103 | 13890.58 | +64.89 | +0.47% | 0.54R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 302 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 778 | 13957.32 | -46.68 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 303 | ELF | 05-27 15:25 | 05-27 15:45 | 88.99 | 88.64 | 94 | 8365.06 | -32.9 | -0.39% | 0.35R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.1 | ↑86.86 | 1.2357 | 2.42 | **LOSS** |
| 304 | AAPL | 05-27 15:55 | 05-27 16:45 | 200.15 | 199.92 | 69 | 13810.35 | -15.87 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 76.64 | ↑198.52 | 0.6872 | 1.42 | **LOSS** |
| 305 | ELF | 05-27 16:05 | 05-27 17:00 | 89.11 | 89.08 | 156 | 13901.16 | -4.68 | -0.03% | 0.03R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑87.19 | 0.9246 | 1.32 | **LOSS** |
| 306 | LLY | 05-27 16:40 | 05-27 17:00 | 730.66 | 727.63 | 19 | 13882.54 | -57.57 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 66.22 | ↑721.17 | 1.7683 | 1.5 | **LOSS** |
| 307 | SNOW | 05-27 16:45 | 05-27 17:05 | 207.56 | 206.87 | 67 | 13906.52 | -46.23 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 80.24 | ↑205.3 | 0.3425 | 4.2 | **LOSS** |
| 308 | PLTR | 05-28 13:30 | 05-28 13:55 | 124.91 | 123.28 | 73 | 9118.43 | -118.99 | -1.3% | 1.37R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 309 | UNH | 05-28 13:30 | 05-28 15:15 | 297.36 | 300.96 | 32 | 9515.52 | +115.2 | +1.21% | 1.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 310 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 149 | 9734.17 | -20.86 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 311 | SHOP | 05-28 17:15 | 05-28 19:00 | 107.67 | 107.93 | 130 | 13997.1 | +33.8 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑106.48 | 0.2939 | 4.58 | **WIN** |
| 312 | UNH | 05-29 13:35 | 05-29 14:15 | 301.96 | 299.83 | 32 | 9662.72 | -68.16 | -0.71% | 0.84R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 313 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 314 | DDOG | 05-29 16:25 | 05-29 17:15 | 117.96 | 117.54 | 118 | 13919.28 | -49.56 | -0.36% | 0.51R | 50m | market | early-reversal | trend | trend | neutral | 69.89 | ↑117.17 | 0.2742 | 2.36 | **LOSS** |
| 315 | COST | 05-30 13:35 | 05-30 15:20 | 1029.36 | 1042.12 | 8 | 8234.88 | +102.08 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑1018.28 | 1.9104 | 1.79 | **WIN** |
| 316 | UNH | 05-30 13:50 | 05-30 15:35 | 300.94 | 302.3 | 32 | 9630.08 | +43.52 | +0.45% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 317 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.37 | 131.25 | 111 | 14027.07 | +541.68 | +3.86% | 2.27R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 318 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.12 | 203.97 | 68 | 13880.16 | -10.2 | -0.07% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 319 | NVO | 05-30 15:30 | 05-30 16:25 | 70.95 | 70.8 | 197 | 13977.15 | -29.55 | -0.21% | 0.3R | 55m | market | stagnation | trend | trend | neutral | 78.32 | ↑69.94 | 0.3909 | 1.52 | **LOSS** |
| 320 | COST | 05-30 15:35 | 05-30 16:25 | 1045.22 | 1044.8 | 13 | 13587.86 | -5.46 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 51.58 | ↑1033.4 | 7.9373 | 1.86 | **LOSS** |
| 321 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 65 | 8911.5 | -49.4 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 322 | PANW | 06-02 13:30 | 06-02 13:50 | 193.71 | 192.16 | 46 | 8910.66 | -71.3 | -0.8% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 323 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.51 | 466.79 | 20 | 9450.2 | -114.4 | -1.21% | 1.73R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 324 | AMD | 06-02 13:35 | 06-02 14:15 | 113.4 | 112.7 | 79 | 8958.6 | -55.3 | -0.62% | 0.65R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.29 | ↓112.74 | 0.6463 | 2.28 | **LOSS** |
| 325 | AVGO | 06-02 13:35 | 06-02 13:55 | 248.6 | 246.46 | 36 | 8949.6 | -77.04 | -0.86% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓247 | 1.9006 | 1.18 | **LOSS** |
| 326 | PLTR | 06-02 13:35 | 06-02 13:45 | 133.98 | 132.08 | 68 | 9110.64 | -129.2 | -1.42% | 1.16R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.42 | ↓133.08 | 1.5619 | 1.85 | **LOSS** |
| 327 | COIN | 06-02 13:35 | 06-02 13:40 | 249.41 | 245.44 | 39 | 9726.99 | -154.83 | -1.59% | 2.21R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 328 | SNOW | 06-02 13:35 | 06-02 13:50 | 209.97 | 206.97 | 42 | 8818.74 | -126 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 329 | MDB | 06-02 13:35 | 06-02 13:40 | 191.29 | 188.29 | 43 | 8225.47 | -129 | -1.57% | 2.24R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 91.83 | ↓190.88 | 1.456 | 2.07 | **LOSS** |
| 330 | XOM | 06-02 13:35 | 06-02 14:00 | 103.25 | 102.78 | 88 | 9086 | -41.36 | -0.46% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.3 | ↓103.11 | 0.2555 | 2 | **LOSS** |
| 331 | NVO | 06-02 14:55 | 06-02 15:25 | 72.72 | 72.41 | 192 | 13962.24 | -59.52 | -0.43% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 71.35 | ↑71.96 | 0.2501 | 1.49 | **LOSS** |
| 332 | RIVN | 06-03 13:40 | 06-03 14:30 | 14.55 | 14.54 | 619 | 9006.45 | -6.19 | -0.07% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.82 | ↑14.4 | 0.1001 | 1.24 | **LOSS** |
| 333 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 70 | 9792.3 | +114.1 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 334 | CVX | 06-03 14:05 | 06-03 15:50 | 138.94 | 140.36 | 100 | 13894 | +142 | +1.02% | 1.46R | 105m | market | timeout | trend | trend | neutral | 64.13 | ↑138.16 | 0.3444 | 1.99 | **WIN** |
| 335 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 699 | 13952.04 | +202.71 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 336 | CAT | 06-03 14:20 | 06-03 16:05 | 348.62 | 349.92 | 40 | 13944.8 | +52 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 337 | DIS | 06-03 14:20 | 06-03 16:05 | 114.12 | 114.51 | 122 | 13922.64 | +47.58 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑113.51 | 0.3433 | 1.91 | **WIN** |
| 338 | TGT | 06-03 14:20 | 06-03 16:05 | 94.73 | 96.04 | 147 | 13925.31 | +192.57 | +1.38% | 1.7R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 339 | SMCI | 06-03 14:35 | 06-03 16:20 | 42.89 | 43.81 | 195 | 8363.55 | +179.4 | +2.15% | 1.17R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.02 | ↑41.83 | 0.4437 | 1.21 | **WIN** |
| 340 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.23 | 353.59 | 39 | 13619.97 | +170.04 | +1.25% | 0.95R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 341 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 342 | KLAC | 06-03 15:35 | 06-03 17:20 | 775.88 | 776.92 | 18 | 13965.84 | +18.72 | +0.13% | 0.19R | 105m | market | timeout | trend | trend | neutral | 72.85 | ↑772.22 | 4.3454 | 1.28 | **WIN** |
| 343 | DELL | 06-03 15:55 | 06-03 17:30 | 111.88 | 111.81 | 68 | 7607.84 | -4.76 | -0.06% | 0.09R | 95m | market | stagnation | trend | trend | noisyHighBeta | 74.37 | ↑110.58 | 0.6522 | 1.76 | **LOSS** |
| 344 | TGT | 06-03 16:10 | 06-03 16:35 | 96.12 | 95.83 | 146 | 14033.52 | -42.34 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 70.86 | ↑94.87 | 0.5013 | 1.5 | **LOSS** |
| 345 | RIVN | 06-03 16:15 | 06-03 17:25 | 14.62 | 14.61 | 963 | 14079.06 | -9.63 | -0.07% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 66.27 | ↑14.51 | 0.0195 | 3.39 | **LOSS** |
| 346 | TSM | 06-04 13:30 | 06-04 14:00 | 202.09 | 200.74 | 44 | 8891.96 | -59.4 | -0.67% | 0.96R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 347 | UNH | 06-04 13:30 | 06-04 13:55 | 305.69 | 303.54 | 29 | 8865.01 | -62.35 | -0.7% | 1R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 348 | TXN | 06-04 13:30 | 06-04 14:00 | 190.13 | 189.57 | 51 | 9696.63 | -28.56 | -0.29% | 0.41R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 349 | DDOG | 06-04 13:40 | 06-04 14:00 | 120.72 | 119.73 | 74 | 8933.28 | -73.26 | -0.82% | 1.15R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 350 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.57 | 204.82 | 68 | 13978.76 | -51 | -0.36% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑204.52 | 0.5322 | 2.23 | **LOSS** |
| 351 | SMCI | 06-04 15:00 | 06-04 15:30 | 44.02 | 43.82 | 223 | 9816.46 | -44.6 | -0.45% | 0.3R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 56.72 | ↓43.81 | 0.0529 | 1.49 | **LOSS** |
| 352 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 43 | 9049.78 | -53.75 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 353 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 53 | 9027.49 | -37.63 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 354 | PLTR | 06-05 13:40 | 06-05 14:00 | 132.23 | 130.35 | 74 | 9785.02 | -139.12 | -1.42% | 1.25R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.64 | ↓130.89 | 0.0474 | 2.28 | **LOSS** |
| 355 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 356 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.63 | 123.26 | 114 | 13979.82 | +71.82 | +0.51% | 0.53R | 105m | market | timeout | breakout | trend | neutral | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 357 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 358 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 359 | NOW | 06-05 15:15 | 06-05 16:05 | 1030.8 | 1029.87 | 13 | 13400.4 | -12.09 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.07 | ↑1025.79 | 3.1614 | 3.46 | **LOSS** |
| 360 | TSM | 06-05 15:20 | 06-05 16:05 | 205.71 | 204.79 | 68 | 13988.28 | -62.56 | -0.45% | 0.64R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 361 | LRCX | 06-05 15:30 | 06-05 16:15 | 86.03 | 85.58 | 162 | 13936.86 | -72.9 | -0.52% | 0.74R | 45m | market | early-reversal | trend | trend | neutral | 72.75 | ↑85.24 | 0.2421 | 1.62 | **LOSS** |
| 362 | MU | 06-05 15:35 | 06-05 16:15 | 108.57 | 108.16 | 129 | 14005.53 | -52.89 | -0.38% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 74.3 | ↑107.28 | 0.9372 | 1.41 | **LOSS** |
| 363 | RIVN | 06-05 15:55 | 06-05 16:05 | 14.27 | 14.12 | 987 | 14084.49 | -148.05 | -1.05% | 1.19R | 10m | market | stop-loss | trend | trend | neutral | 79 | ↑13.99 | 0.0763 | 2.11 | **LOSS** |
| 364 | META | 06-06 13:30 | 06-06 14:40 | 697.26 | 696.87 | 12 | 8367.12 | -4.68 | -0.06% | 0.06R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 365 | PYPL | 06-06 13:30 | 06-06 13:50 | 73.47 | 73.13 | 133 | 9771.51 | -45.22 | -0.46% | 0.61R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 65.18 | ↓73.38 | 0.0047 | 2.35 | **LOSS** |
| 366 | JPM | 06-06 13:30 | 06-06 15:15 | 265.14 | 265.79 | 36 | 9545.04 | +23.4 | +0.25% | 0.36R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.37 | ↑264.86 | -0.1276 | 1.75 | **WIN** |
| 367 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 14 | 8656.2 | -39.62 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 368 | UNH | 06-06 13:30 | 06-06 14:35 | 300.27 | 298.8 | 30 | 9008.1 | -44.1 | -0.49% | 0.53R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.21 | ↓299.6 | -0.1053 | 2.42 | **LOSS** |
| 369 | TGT | 06-06 13:30 | 06-06 15:15 | 95.3 | 95.92 | 94 | 8958.2 | +58.28 | +0.65% | 0.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 370 | XOM | 06-06 13:35 | 06-06 15:20 | 103.75 | 104.13 | 134 | 13902.5 | +50.92 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 371 | CAT | 06-06 13:35 | 06-06 14:00 | 356.89 | 355.6 | 25 | 8922.25 | -32.25 | -0.36% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.5 | ↓356.13 | 0.6147 | 3.19 | **LOSS** |
| 372 | NVO | 06-06 13:35 | 06-06 15:20 | 74.31 | 74.48 | 121 | 8991.51 | +20.57 | +0.23% | 0.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.73 | ↓74.19 | 0.2439 | 2.63 | **WIN** |
| 373 | PANW | 06-06 13:40 | 06-06 14:25 | 199.73 | 199.09 | 45 | 8987.85 | -28.8 | -0.32% | 0.44R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.26 | ↓199.11 | 0.3282 | 1.34 | **LOSS** |
| 374 | GE | 06-06 13:40 | 06-06 14:00 | 256.88 | 256.1 | 35 | 8990.8 | -27.3 | -0.3% | 0.42R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.73 | ↓255.21 | 0.6662 | 1.5 | **LOSS** |
| 375 | PLTR | 06-06 13:55 | 06-06 14:15 | 125.49 | 124.55 | 78 | 9788.22 | -73.32 | -0.75% | 0.45R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.93 | ↑124.03 | 0.9447 | 1.39 | **LOSS** |
| 376 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.64 | 149.92 | 93 | 14009.52 | -66.96 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 377 | ARM | 06-06 15:05 | 06-06 15:25 | 134.97 | 134.28 | 103 | 13901.91 | -71.07 | -0.51% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 378 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 379 | PLTR | 06-06 17:15 | 06-06 19:00 | 126.38 | 127.72 | 61 | 7709.18 | +81.74 | +1.06% | 1.19R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 66.63 | ↑124.56 | 0.275 | 3 | **WIN** |
| 380 | KLAC | 06-09 13:35 | 06-09 14:25 | 823.92 | 823.55 | 10 | 8239.2 | -3.7 | -0.04% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.74 | ↑822.65 | 1.4407 | 1.17 | **LOSS** |
| 381 | ORCL | 06-09 13:40 | 06-09 15:25 | 176.72 | 177.4 | 51 | 9012.72 | +34.68 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.66 | ↓175.24 | 0.4223 | 1.33 | **WIN** |
| 382 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 477 | 9788.04 | +100.17 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 383 | TGT | 06-09 13:40 | 06-09 13:45 | 99.19 | 97.77 | 91 | 9026.29 | -129.22 | -1.43% | 2.04R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 384 | UBER | 06-09 13:45 | 06-09 15:05 | 87.44 | 87.33 | 104 | 9093.76 | -11.44 | -0.13% | 0.14R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 385 | CELH | 06-09 14:00 | 06-09 14:20 | 42.73 | 42.22 | 195 | 8332.35 | -99.45 | -1.19% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 89.55 | ↑42.15 | 0.5749 | 1.82 | **LOSS** |
| 386 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 108 | 7635.6 | -62.64 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 387 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 97 | 14043.66 | -57.23 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 388 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 389 | KLAC | 06-09 15:10 | 06-09 15:30 | 834.83 | 831.29 | 16 | 13357.28 | -56.64 | -0.42% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 68.82 | ↑826.47 | 6.4471 | 1.67 | **LOSS** |
| 390 | PLTR | 06-09 15:50 | 06-09 17:25 | 129.52 | 130.99 | 29 | 7641.68 | +42.63 | +1.13% | 1.08R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 69.99 | ↑127.18 | 0.5949 | 1.58 | **WIN** |
| 391 | PLTR | 06-09 15:50 | 06-09 17:35 | 129.52 | 130.76 | 30 | 7641.68 | +37.2 | +0.96% | 0.91R | 105m | market | timeout | trend | trend | noisyHighBeta | 69.99 | ↑127.18 | 0.5949 | 1.58 | **WIN** |
| 392 | BA | 06-09 17:20 | 06-09 17:40 | 218.58 | 217.52 | 64 | 13989.12 | -67.84 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.61 | ↑215.54 | 0.7142 | 1.49 | **LOSS** |
| 393 | NVO | 06-09 17:25 | 06-09 18:40 | 75.42 | 75.39 | 185 | 13952.7 | -5.55 | -0.04% | 0.04R | 75m | market | stagnation | trend | trend | neutral | 73.82 | ↑74.91 | 0.1941 | 1.5 | **LOSS** |
| 394 | TSM | 06-10 13:35 | 06-10 15:15 | 211.65 | 211.44 | 42 | 8889.3 | -8.82 | -0.1% | 0.14R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.36 | ↓211.23 | 0.7821 | 2.35 | **LOSS** |
| 395 | LLY | 06-10 13:40 | 06-10 15:30 | 786.05 | 794.64 | 12 | 9432.6 | +103.08 | +1.09% | 1.49R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 396 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.69 | 121.92 | 79 | 9771.51 | -139.83 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 397 | ELF | 06-10 13:45 | 06-10 14:45 | 119.1 | 119.75 | 117 | 13934.7 | +76.05 | +0.55% | 0.68R | 60m | market | trailing-stop | breakout | breakout | neutral | 64.5 | ↓117.77 | -0.04 | 1.19 | **WIN** |
| 398 | CVX | 06-10 14:10 | 06-10 15:45 | 143.43 | 144.53 | 48 | 13912.71 | +52.8 | +0.77% | 0.97R | 95m | market | trim-profit-target | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 399 | CVX | 06-10 14:10 | 06-10 15:55 | 143.43 | 144.4 | 49 | 13912.71 | +47.53 | +0.68% | 0.86R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 400 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 673 | 13984.94 | -20.19 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 401 | NVO | 06-10 14:50 | 06-10 15:40 | 79.43 | 79.35 | 176 | 13979.68 | -14.08 | -0.1% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.71 | ↑78.54 | 1.0801 | 2.14 | **LOSS** |
| 402 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.3 | 203.48 | 68 | 13892.4 | -55.76 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 403 | LRCX | 06-10 15:55 | 06-10 17:40 | 90.64 | 91.1 | 154 | 13958.56 | +70.84 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 62.65 | ↑89.75 | 0.3895 | 1.04 | **WIN** |
| 404 | PYPL | 06-10 16:45 | 06-10 17:05 | 75.16 | 74.84 | 186 | 13979.76 | -59.52 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 77.2 | ↑74.32 | 0.1754 | 1.91 | **LOSS** |
| 405 | INTC | 06-10 17:00 | 06-10 17:50 | 21.32 | 22.18 | 393 | 8378.76 | +337.98 | +4.03% | 5.76R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 406 | RIVN | 06-11 13:30 | 06-11 13:55 | 14.65 | 14.53 | 891 | 13053.15 | -106.92 | -0.82% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 65.74 | ↓14.67 | 0.0171 | 1.11 | **LOSS** |
| 407 | UNH | 06-11 13:35 | 06-11 15:20 | 307.32 | 307.49 | 29 | 8912.28 | +4.93 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.83 | ↓305.77 | 0.7643 | 3.96 | **WIN** |
| 408 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 79 | 9035.23 | +17.38 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 409 | GE | 06-11 14:05 | 06-11 15:50 | 245.07 | 246.25 | 57 | 13968.99 | +67.26 | +0.48% | 0.48R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 410 | IBM | 06-11 14:30 | 06-11 16:15 | 278.03 | 279.58 | 50 | 13901.5 | +77.5 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 69.81 | ↑276.91 | 0.552 | 1.29 | **WIN** |
| 411 | SHOP | 06-11 16:45 | 06-11 18:00 | 115.98 | 115.1 | 120 | 13917.6 | -105.6 | -0.76% | 0.85R | 75m | market | breakeven-stop | trend | trend | neutral | 67.55 | ↓114.59 | 0.1966 | 1 | **LOSS** |
| 412 | CRWD | 06-12 13:40 | 06-12 14:00 | 485.52 | 481.2 | 18 | 8739.36 | -77.76 | -0.89% | 1R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.82 | ↓482.32 | 1.0978 | 3.04 | **LOSS** |
| 413 | ORCL | 06-12 13:50 | 06-12 15:35 | 198.21 | 200.7 | 45 | 8919.45 | +112.05 | +1.26% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.43 | ↑194.7 | 5.2334 | 1.83 | **WIN** |
| 414 | SNOW | 06-12 13:50 | 06-12 14:10 | 211.59 | 210.21 | 46 | 9733.14 | -63.48 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.71 | ↓210.84 | 0.5133 | 3.96 | **LOSS** |
| 415 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.08 | 256.27 | 54 | 13882.32 | -43.74 | -0.32% | 0.32R | 65m | market | early-reversal | breakout | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 416 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.86 | 174.35 | 80 | 13988.8 | -40.8 | -0.29% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 417 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 418 | INTC | 06-12 16:20 | 06-12 18:05 | 20.75 | 20.8 | 372 | 7719 | +18.6 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | noisyHighBeta | 70.89 | ↑20.57 | 0.0381 | 1.21 | **WIN** |
| 419 | BA | 06-12 17:10 | 06-12 17:30 | 205.84 | 204.34 | 68 | 13997.12 | -102 | -0.73% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 72.85 | ↑203.8 | 0.4887 | 1.35 | **LOSS** |
| 420 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.58 | 210.87 | 44 | 9001.52 | +276.76 | +3.07% | 2.62R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 421 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 478 | 9822.9 | -109.94 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 422 | ORCL | 06-13 15:30 | 06-13 17:10 | 211.37 | 213.39 | 33 | 13950.42 | +66.66 | +0.96% | 0.84R | 100m | market | trim-profit-target | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 423 | ORCL | 06-13 15:30 | 06-13 17:15 | 211.37 | 213.04 | 33 | 13950.42 | +55.11 | +0.79% | 0.69R | 105m | market | timeout | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 424 | TSLA | 06-13 16:30 | 06-13 18:15 | 326.39 | 328.29 | 21 | 6854.19 | +39.9 | +0.58% | 0.5R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 74.81 | ↑318.34 | 1.9969 | 1.47 | **WIN** |
| 425 | COIN | 06-13 17:40 | 06-13 18:00 | 241.28 | 240.23 | 57 | 13752.96 | -59.85 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 62.13 | ↑238.38 | 0.7294 | 1.21 | **LOSS** |
| 426 | MU | 06-16 13:30 | 06-16 15:15 | 118.58 | 120.68 | 76 | 9012.08 | +159.6 | +1.77% | 1.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 427 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 14 | 8738.8 | +89.46 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 428 | TXN | 06-16 13:30 | 06-16 15:15 | 197.68 | 199.27 | 37 | 7314.16 | +58.83 | +0.8% | 1.03R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 429 | AMD | 06-16 13:35 | 06-16 14:15 | 120.5 | 124.26 | 75 | 9037.5 | +282 | +3.12% | 2.17R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.82 | ↑119.69 | 0.9613 | 2.52 | **WIN** |
| 430 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.49 | 1221.94 | 11 | 13480.39 | -39.05 | -0.29% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 431 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 83 | 8949.89 | +95.45 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 432 | MA | 06-16 13:35 | 06-16 15:10 | 572.36 | 572.16 | 15 | 8585.4 | -3 | -0.03% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.16 | ↑569.61 | 1.3516 | 1.19 | **LOSS** |
| 433 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.89 | 93.14 | 98 | 9005.22 | +122.5 | +1.36% | 1.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 434 | WMT | 06-16 13:40 | 06-16 14:35 | 95.34 | 95.12 | 102 | 9724.68 | -22.44 | -0.23% | 0.33R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 72.52 | ↓95.1 | 0.094 | 1.49 | **LOSS** |
| 435 | SMCI | 06-16 13:45 | 06-16 15:20 | 43 | 44.07 | 210 | 9030 | +224.7 | +2.49% | 1.68R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.57 | ↑42.59 | 0.2988 | 2.22 | **WIN** |
| 436 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.49 | 175.83 | 51 | 8898.99 | +68.34 | +0.77% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 437 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 441 | 9102.24 | +61.74 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 438 | ASML | 06-16 13:50 | 06-16 15:35 | 771.19 | 776.38 | 10 | 7711.9 | +51.9 | +0.67% | 0.96R | 105m | market | timeout | mixed | breakout | falseBreakoutProne | 69.1 | ↑769.38 | -0.9416 | 1.54 | **WIN** |
| 439 | ADBE | 06-16 14:00 | 06-16 14:20 | 404.62 | 399.13 | 20 | 8092.4 | -109.8 | -1.36% | 1.24R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.04 | ↓399.94 | 2.3777 | 1.36 | **LOSS** |
| 440 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 441 | AMD | 06-16 14:20 | 06-16 16:05 | 125.11 | 126.93 | 67 | 8382.37 | +121.94 | +1.45% | 0.87R | 105m | market | timeout | breakout | breakout | extendedBreakout | 97.1 | ↑122.36 | 2.3391 | 2.66 | **WIN** |
| 442 | PANW | 06-16 15:45 | 06-16 16:15 | 199.68 | 199.12 | 70 | 13977.6 | -39.2 | -0.28% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 76.38 | ↑198.29 | 0.5704 | 1.4 | **LOSS** |
| 443 | DELL | 06-17 13:55 | 06-17 15:40 | 115.5 | 117.44 | 84 | 9702 | +162.96 | +1.68% | 2.15R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 444 | ARM | 06-17 14:00 | 06-17 14:40 | 147.4 | 146.49 | 56 | 8254.4 | -50.96 | -0.62% | 0.43R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 80.84 | ↓145.26 | 1.0799 | 1.68 | **LOSS** |
| 445 | AMAT | 06-17 14:10 | 06-17 14:30 | 178.09 | 177.45 | 78 | 13891.02 | -49.92 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑176.88 | 0.4141 | 2.9 | **LOSS** |
| 446 | AMD | 06-17 14:15 | 06-17 14:35 | 130.46 | 129.28 | 107 | 13959.22 | -126.26 | -0.9% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 54.5 | ↑128.73 | 0.7912 | 1.62 | **LOSS** |
| 447 | CRM | 06-17 14:15 | 06-17 14:40 | 268.58 | 266.99 | 52 | 13966.16 | -82.68 | -0.59% | 0.7R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 448 | GE | 06-17 15:10 | 06-17 15:30 | 238.77 | 236.71 | 58 | 13848.66 | -119.48 | -0.86% | 1.23R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 449 | INTC | 06-17 17:20 | 06-17 17:45 | 21.29 | 21.17 | 362 | 7706.98 | -43.44 | -0.56% | 0.74R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 74.75 | ↑21.01 | 0.0882 | 2.12 | **LOSS** |
| 450 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 28 | 8976.8 | +115.64 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 451 | JPM | 06-18 13:35 | 06-18 15:20 | 273.13 | 274.76 | 33 | 9013.29 | +53.79 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.43 | ↓271.81 | 0.4584 | 1.47 | **WIN** |
| 452 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 15 | 9498.45 | +27.9 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 453 | SMCI | 06-18 13:50 | 06-18 15:35 | 43.76 | 44.15 | 224 | 9802.24 | +87.36 | +0.89% | 0.75R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.8 | ↑43.42 | 0.084 | 2.67 | **WIN** |
| 454 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 431 | 9115.65 | +124.99 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 455 | AMD | 06-18 14:00 | 06-18 14:50 | 128.82 | 127.76 | 108 | 13912.56 | -114.48 | -0.82% | 0.65R | 50m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 456 | BAC | 06-18 14:00 | 06-18 14:50 | 44.88 | 44.86 | 311 | 13957.68 | -6.22 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 78.5 | ↑44.66 | 0.1465 | 1.35 | **LOSS** |
| 457 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.26 | 70.98 | 196 | 13966.96 | -54.88 | -0.39% | 0.56R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 458 | INTC | 06-18 15:45 | 06-18 16:35 | 21.51 | 21.48 | 653 | 14046.03 | -19.59 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 69.66 | ↑21.19 | 0.1326 | 1.83 | **LOSS** |
| 459 | SMCI | 06-18 15:45 | 06-18 16:05 | 44.32 | 44.15 | 317 | 14049.44 | -53.89 | -0.38% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 58.65 | ↑43.84 | 0.2158 | 1.42 | **LOSS** |
| 460 | SMCI | 06-18 17:00 | 06-18 17:20 | 45.61 | 44.87 | 183 | 8346.63 | -135.42 | -1.62% | 1.37R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 82.02 | ↑44.23 | 0.2451 | 3.3 | **LOSS** |
| 461 | CRM | 06-20 13:30 | 06-20 13:50 | 262.21 | 260.67 | 37 | 9701.77 | -56.98 | -0.59% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.75 | ↓261.57 | 0.2649 | 2.17 | **LOSS** |
| 462 | AAPL | 06-20 13:35 | 06-20 13:55 | 200.52 | 199.72 | 45 | 9023.4 | -36 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.2 | ↓199.57 | 0.7936 | 2.76 | **LOSS** |
| 463 | WMT | 06-20 13:35 | 06-20 13:50 | 96.32 | 95.55 | 101 | 9728.32 | -77.77 | -0.8% | 1.14R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.9 | ↓95.99 | 0.1675 | 1.81 | **LOSS** |
| 464 | DELL | 06-20 13:40 | 06-20 14:20 | 118.44 | 117.74 | 75 | 8883 | -52.5 | -0.59% | 0.5R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.74 | ↓118.56 | 0.2368 | 1.28 | **LOSS** |
| 465 | SMCI | 06-20 14:00 | 06-20 14:20 | 45.94 | 44.91 | 198 | 9096.12 | -203.94 | -2.24% | 1.85R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 73.08 | ↓45.64 | 0.281 | 1.71 | **LOSS** |
| 466 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 427 | 9116.45 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 467 | CAT | 06-23 13:35 | 06-23 14:25 | 365.58 | 364.35 | 24 | 8773.92 | -29.52 | -0.34% | 0.49R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.36 | ↓363.99 | 0.6127 | 2.8 | **LOSS** |
| 468 | COST | 06-23 13:35 | 06-23 14:00 | 992.3 | 988.88 | 14 | 13892.2 | -47.88 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 75.81 | ↓989.29 | 0.6317 | 3.16 | **LOSS** |
| 469 | IBM | 06-23 13:40 | 06-23 15:25 | 284.45 | 286.18 | 49 | 13938.05 | +84.77 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 470 | TSLA | 06-23 13:50 | 06-23 14:30 | 340.1 | 351.31 | 26 | 8842.6 | +291.46 | +3.3% | 1.67R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.15 | ↑334.6 | 3.4844 | 1.39 | **WIN** |
| 471 | RIVN | 06-23 13:50 | 06-23 15:35 | 13.72 | 13.84 | 716 | 9823.52 | +85.92 | +0.87% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.44 | ↑13.58 | -0.0091 | 1.76 | **WIN** |
| 472 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.51 | 213.36 | 65 | 13878.15 | -9.75 | -0.07% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 473 | LRCX | 06-23 14:00 | 06-23 14:50 | 92.43 | 92.28 | 91 | 8411.13 | -13.65 | -0.16% | 0.17R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 474 | AMD | 06-23 14:05 | 06-23 14:30 | 133.17 | 131.62 | 105 | 13982.85 | -162.75 | -1.16% | 0.59R | 25m | market | early-reversal | breakout | trend | neutral | 71.93 | ↓131.31 | 0.9482 | 1.01 | **LOSS** |
| 475 | DDOG | 06-23 14:05 | 06-23 15:50 | 128.99 | 129.57 | 108 | 13930.92 | +62.64 | +0.45% | 0.5R | 105m | market | timeout | trend | trend | neutral | 67.14 | ↑127.72 | 0.218 | 1.29 | **WIN** |
| 476 | KLAC | 06-23 14:05 | 06-23 14:25 | 859.3 | 852.22 | 16 | 13748.8 | -113.28 | -0.82% | 1.17R | 20m | market | stop-loss | trend | trend | neutral | 78.91 | ↓855.15 | 2.4106 | 1.28 | **LOSS** |
| 477 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.45 | 378.03 | 36 | 13660.2 | -51.12 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 478 | PLTR | 06-23 14:15 | 06-23 15:15 | 140.33 | 140.29 | 100 | 14033 | -4 | -0.03% | 0.02R | 60m | market | breakeven-stop | trend | trend | neutral | 67.02 | ↑138.9 | 0.3683 | 1.29 | **LOSS** |
| 479 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 480 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 481 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 482 | TSLA | 06-23 14:40 | 06-23 15:30 | 354.94 | 353.94 | 23 | 8163.62 | -23 | -0.28% | 0.14R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 88.13 | ↑343.02 | 8.4922 | 1.17 | **LOSS** |
| 483 | AVGO | 06-23 17:15 | 06-23 19:00 | 251.83 | 253.45 | 55 | 13850.65 | +89.1 | +0.64% | 0.78R | 105m | market | timeout | trend | trend | neutral | 62.92 | ↑249.22 | 0.4843 | 1.7 | **WIN** |
| 484 | MSFT | 06-23 17:20 | 06-23 19:05 | 485.05 | 485.4 | 28 | 13581.4 | +9.8 | +0.07% | 0.1R | 105m | market | timeout | trend | trend | neutral | 75.4 | ↑478.25 | 1.5633 | 2.81 | **WIN** |
| 485 | CRWD | 06-23 17:20 | 06-23 18:15 | 486.05 | 490.86 | 14 | 13609.4 | +67.34 | +0.99% | 1.41R | 55m | market | trim-profit-target | trend | trend | neutral | 57.27 | ↑478.96 | 0.7979 | 1.16 | **WIN** |
| 486 | CRWD | 06-23 17:20 | 06-23 19:05 | 486.05 | 488.44 | 14 | 13609.4 | +33.46 | +0.49% | 0.7R | 105m | market | timeout | trend | trend | neutral | 57.27 | ↑478.96 | 0.7979 | 1.16 | **WIN** |
| 487 | NKE | 06-23 17:20 | 06-23 19:05 | 60.57 | 61.23 | 231 | 13991.67 | +152.46 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 70.13 | ↑60.07 | 0.0505 | 1.51 | **WIN** |
| 488 | SHOP | 06-23 17:30 | 06-23 18:35 | 109.25 | 109.11 | 128 | 13984 | -17.92 | -0.13% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 62.06 | ↑107.69 | 0.1283 | 1.34 | **LOSS** |
| 489 | NET | 06-23 17:40 | 06-23 19:25 | 182.46 | 184 | 76 | 13866.96 | +117.04 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑180.39 | 0.1582 | 1.81 | **WIN** |
| 490 | CRM | 06-24 13:35 | 06-24 15:20 | 267.55 | 270.62 | 33 | 8829.15 | +101.31 | +1.15% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 491 | ORCL | 06-24 13:35 | 06-24 15:20 | 211.58 | 214.33 | 42 | 8886.36 | +115.5 | +1.3% | 1.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 97.77 | ↑210.26 | 1.0072 | 1.16 | **WIN** |
| 492 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 453 | 9825.57 | +294.45 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 493 | COIN | 06-24 13:35 | 06-24 14:10 | 316.44 | 332.75 | 28 | 8860.32 | +456.68 | +5.15% | 4.36R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.79 | ↑314.31 | 1.6507 | 1.32 | **WIN** |
| 494 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 79 | 8918.31 | +147.73 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 495 | NOW | 06-24 13:35 | 06-24 13:55 | 990.35 | 986.17 | 9 | 8913.15 | -37.62 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 496 | BAC | 06-24 13:35 | 06-24 13:55 | 47.13 | 46.95 | 177 | 8342.01 | -31.86 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.98 | ↓46.98 | 0.2285 | 1.12 | **LOSS** |
| 497 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 122 | 8896.24 | +233.02 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 498 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 61 | 9010.31 | -47.58 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 499 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 42 | 8977.08 | -58.8 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 500 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 12 | 8542.68 | -92.64 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 501 | QCOM | 06-24 13:45 | 06-24 14:05 | 155.8 | 155 | 58 | 9036.4 | -46.4 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 502 | AMD | 06-24 13:55 | 06-24 15:40 | 136.24 | 137.15 | 66 | 8991.84 | +60.06 | +0.67% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.2 | ↑134.73 | 1.5651 | 1.86 | **WIN** |
| 503 | UBER | 06-24 14:20 | 06-24 16:05 | 90.55 | 91.28 | 93 | 8421.15 | +67.89 | +0.81% | 0.44R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.99 | ↑89.24 | 1.5565 | 1.94 | **WIN** |
| 504 | COIN | 06-24 14:35 | 06-24 15:40 | 335.6 | 334.35 | 25 | 8390 | -31.25 | -0.37% | 0.19R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 90.01 | ↑327.78 | 7.3187 | 1.13 | **LOSS** |
| 505 | DELL | 06-24 15:20 | 06-24 15:40 | 121.61 | 121.02 | 115 | 13985.15 | -67.85 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 73.49 | ↑120.69 | 0.8721 | 1.35 | **LOSS** |
| 506 | CELH | 06-24 15:35 | 06-24 15:50 | 46.94 | 46.25 | 179 | 8402.26 | -123.51 | -1.47% | 1.35R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 79.46 | ↑45.67 | 0.7104 | 1.14 | **LOSS** |
| 507 | COIN | 06-24 16:00 | 06-24 16:20 | 338.09 | 335.66 | 22 | 7437.98 | -53.46 | -0.72% | 0.52R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 51.17 | ↑330.92 | 4.2825 | 1.47 | **LOSS** |
| 508 | INTC | 06-24 16:15 | 06-24 17:20 | 22.53 | 22.45 | 625 | 14081.25 | -50 | -0.36% | 0.38R | 65m | market | early-reversal | trend | trend | neutral | 48.55 | ↑22.18 | 0.1503 | 1.16 | **LOSS** |
| 509 | SMCI | 06-24 16:35 | 06-24 17:20 | 43 | 42.74 | 179 | 7697 | -46.54 | -0.6% | 0.54R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 57.05 | ↑42.16 | 0.1931 | 1.4 | **LOSS** |
| 510 | AMAT | 06-24 16:35 | 06-24 17:05 | 179.25 | 178.76 | 78 | 13981.5 | -38.22 | -0.27% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 66.17 | ↑177.73 | 0.3206 | 2.28 | **LOSS** |
| 511 | COIN | 06-24 16:55 | 06-24 18:40 | 341.34 | 347.62 | 22 | 7509.48 | +138.16 | +1.84% | 1.98R | 105m | market | timeout | trend | trend | noisyHighBeta | 70.16 | ↑331.83 | 1.379 | 2.87 | **WIN** |
| 512 | UBER | 06-24 17:10 | 06-24 17:35 | 92.47 | 91.9 | 151 | 13962.97 | -86.07 | -0.62% | 0.89R | 25m | market | early-reversal | trend | trend | neutral | 75 | ↑90.52 | 0.2882 | 1.19 | **LOSS** |
| 513 | ABNB | 06-24 17:35 | 06-24 17:55 | 132.66 | 132.25 | 105 | 13929.3 | -43.05 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.13 | ↑131.36 | 0.2275 | 1.86 | **LOSS** |
| 514 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 54 | 9143.28 | -16.74 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 515 | AVGO | 06-25 13:30 | 06-25 14:00 | 266.85 | 266.8 | 34 | 9072.9 | -1.7 | -0.02% | 0.03R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 95.37 | ↓266.09 | 0.7073 | 1.21 | **LOSS** |
| 516 | PLTR | 06-25 13:30 | 06-25 14:05 | 145.49 | 145.27 | 63 | 9165.87 | -13.86 | -0.15% | 0.18R | 35m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.95 | ↓145.36 | 0.4254 | 4.54 | **LOSS** |
| 517 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 518 | LLY | 06-25 16:30 | 06-25 16:50 | 797.72 | 795.36 | 17 | 13561.24 | -40.12 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 66.11 | ↑787.37 | 3.6999 | 1.52 | **LOSS** |
| 519 | ELF | 06-25 17:45 | 06-25 18:35 | 125.1 | 124.98 | 111 | 13886.1 | -13.32 | -0.1% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 65.41 | ↑122.45 | 0.7257 | 1.33 | **LOSS** |
| 520 | PLTR | 06-26 13:30 | 06-26 14:05 | 145.33 | 144.8 | 62 | 9010.46 | -32.86 | -0.36% | 0.42R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 84.83 | ↓145.5 | 0.3745 | 5.23 | **LOSS** |
| 521 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 13 | 8807.5 | +88.53 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 522 | JPM | 06-26 13:35 | 06-26 15:25 | 287.46 | 288.37 | 31 | 8911.26 | +28.21 | +0.32% | 0.46R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 89.74 | ↑286.59 | 0.5538 | 1.77 | **WIN** |
| 523 | GE | 06-26 13:45 | 06-26 15:30 | 253.76 | 254.02 | 35 | 8881.6 | +9.1 | +0.1% | 0.14R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.54 | ↓252.51 | 0.7105 | 1.44 | **WIN** |
| 524 | PANW | 06-26 14:10 | 06-26 14:40 | 206.44 | 205.54 | 67 | 13831.48 | -60.3 | -0.44% | 0.59R | 30m | market | early-reversal | trend | trend | neutral | 69.17 | ↓205.5 | 0.5917 | 1.33 | **LOSS** |
| 525 | COIN | 06-26 16:20 | 06-26 18:05 | 370.72 | 379.27 | 26 | 9638.72 | +222.3 | +2.31% | 2.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 55.55 | ↑367.22 | -0.0756 | 2.81 | **WIN** |
| 526 | CAT | 06-26 16:20 | 06-26 17:45 | 381.17 | 381.04 | 36 | 13722.12 | -4.68 | -0.03% | 0.04R | 85m | market | stagnation | trend | trend | neutral | 76.99 | ↑378.66 | 0.9477 | 2.68 | **LOSS** |
| 527 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 393 | 9082.23 | -19.65 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 528 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 529 | TSM | 06-27 14:05 | 06-27 15:50 | 226.74 | 228.22 | 61 | 13831.14 | +90.28 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 530 | ADP | 06-27 14:15 | 06-27 14:55 | 305.99 | 304.91 | 45 | 13769.55 | -48.6 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 75.07 | ↑304.09 | 0.7715 | 1.37 | **LOSS** |
| 531 | ARM | 06-27 14:40 | 06-27 16:10 | 163.45 | 165.8 | 42 | 13893.25 | +98.7 | +1.44% | 1.23R | 90m | market | trim-profit-target | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 532 | ARM | 06-27 14:40 | 06-27 16:25 | 163.45 | 165.75 | 43 | 13893.25 | +98.9 | +1.41% | 1.21R | 105m | market | timeout | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 533 | COST | 06-27 14:50 | 06-27 15:45 | 988.8 | 988.32 | 14 | 13843.2 | -6.72 | -0.05% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 534 | GE | 06-27 15:05 | 06-27 16:30 | 257.65 | 259.41 | 27 | 13913.1 | +47.52 | +0.68% | 0.97R | 85m | market | trim-profit-target | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 535 | GE | 06-27 15:05 | 06-27 16:50 | 257.65 | 258.83 | 27 | 13913.1 | +31.86 | +0.46% | 0.66R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 536 | NKE | 06-27 15:45 | 06-27 16:30 | 73.21 | 73.19 | 191 | 13983.11 | -3.82 | -0.03% | 0.03R | 45m | market | breakeven-stop | trend | trend | neutral | 76.06 | ↑71.92 | 1.3669 | 1.23 | **LOSS** |
| 537 | TGT | 06-27 16:05 | 06-27 16:55 | 99.74 | 99.57 | 140 | 13963.6 | -23.8 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 73.29 | ↑98.99 | 0.2903 | 2.76 | **LOSS** |
| 538 | HD | 06-27 16:10 | 06-27 17:00 | 369.31 | 368.48 | 37 | 13664.47 | -30.71 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 75.19 | ↑366.27 | 0.9883 | 2.68 | **LOSS** |
| 539 | LOW | 06-27 16:20 | 06-27 17:05 | 224.86 | 224.22 | 62 | 13941.32 | -39.68 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 69.77 | ↑223.24 | 0.6804 | 2.22 | **LOSS** |
| 540 | JPM | 06-30 13:30 | 06-30 15:10 | 290.6 | 290.47 | 31 | 9008.6 | -4.03 | -0.04% | 0.06R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.05 | ↓291.04 | 0.1761 | 1.84 | **LOSS** |
| 541 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.11 | 93.25 | 95 | 8940.45 | -81.7 | -0.91% | 1.28R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 542 | HPE | 06-30 14:00 | 06-30 15:45 | 20.75 | 20.89 | 433 | 8984.75 | +60.62 | +0.67% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.86 | ↑20.6 | 0.6063 | 1.37 | **WIN** |
| 543 | TGT | 07-01 13:35 | 07-01 14:40 | 100.2 | 102.92 | 90 | 9018 | +244.8 | +2.71% | 3.87R | 65m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.07 | ↑99.62 | 0.2691 | 3.39 | **WIN** |
| 544 | UNH | 07-01 13:50 | 07-01 15:35 | 317.13 | 324.05 | 30 | 9513.9 | +207.6 | +2.18% | 2.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 545 | HD | 07-01 14:20 | 07-01 16:05 | 370.12 | 378.88 | 37 | 13694.44 | +324.12 | +2.37% | 3.39R | 105m | market | timeout | trend | trend | neutral | 68.85 | ↑367.25 | 0.617 | 1.07 | **WIN** |
| 546 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 620 | 14061.6 | +279 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 547 | ELF | 07-01 14:55 | 07-01 16:20 | 128.31 | 128.29 | 109 | 13985.79 | -2.18 | -0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 71.03 | ↑127.52 | 0.7983 | 2.72 | **LOSS** |
| 548 | LMT | 07-01 15:10 | 07-01 16:20 | 467.63 | 467.27 | 29 | 13561.27 | -10.44 | -0.08% | 0.11R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 549 | PYPL | 07-01 15:30 | 07-01 15:50 | 75.22 | 75.01 | 185 | 13915.7 | -38.85 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 73.25 | ↑74.55 | 0.2107 | 1.37 | **LOSS** |
| 550 | TGT | 07-01 15:55 | 07-01 16:40 | 104.9 | 104.55 | 134 | 14056.6 | -46.9 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 79.63 | ↑102.68 | 1.3228 | 1.32 | **LOSS** |
| 551 | TXN | 07-01 16:05 | 07-01 16:55 | 210.19 | 209.26 | 66 | 13872.54 | -61.38 | -0.44% | 0.63R | 50m | market | early-reversal | trend | trend | neutral | 79.71 | ↑207.49 | 0.5542 | 1.76 | **LOSS** |
| 552 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 116 | 8961 | +154.28 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 553 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.12 | 212.04 | 43 | 9078.16 | +39.56 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 554 | NKE | 07-02 13:35 | 07-02 14:40 | 74.45 | 73.65 | 122 | 9082.9 | -97.6 | -1.07% | 1.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.55 | ↓74.03 | 0.2479 | 1.6 | **LOSS** |
| 555 | COIN | 07-02 13:45 | 07-02 14:05 | 343.25 | 341 | 26 | 8924.5 | -58.5 | -0.66% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↓342.46 | 0.8493 | 1.99 | **LOSS** |
| 556 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 120 | 13910.4 | -37.2 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 557 | MU | 07-02 14:45 | 07-02 15:45 | 122.14 | 122.08 | 114 | 13923.96 | -6.84 | -0.05% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 558 | COIN | 07-02 14:50 | 07-02 16:35 | 346.33 | 351.65 | 22 | 7619.26 | +117.04 | +1.54% | 1.02R | 105m | market | timeout | trend | trend | noisyHighBeta | 62.7 | ↑342.5 | 2.1416 | 1.1 | **WIN** |
| 559 | COIN | 07-02 16:40 | 07-02 17:15 | 352.75 | 351.44 | 21 | 7407.75 | -27.51 | -0.37% | 0.48R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 77.32 | ↑345.11 | 2.1426 | 1.13 | **LOSS** |
| 560 | ARM | 07-03 13:30 | 07-03 13:45 | 156.32 | 154.77 | 58 | 9066.56 | -89.9 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.31 | ↓156.26 | 0.1619 | 1.76 | **LOSS** |
| 561 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.15 | 222.08 | 41 | 9026.15 | +79.13 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 562 | ORCL | 07-03 13:40 | 07-03 14:25 | 234.01 | 232.2 | 38 | 8892.38 | -68.78 | -0.77% | 0.57R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.78 | ↓233.12 | 1.936 | 1.41 | **LOSS** |
| 563 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 441 | 9865.17 | -22.05 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 564 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 42 | 9016.14 | +54.6 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 565 | RIVN | 07-03 13:45 | 07-03 14:20 | 13.27 | 13.17 | 683 | 9063.41 | -68.3 | -0.75% | 0.56R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.03 | ↓13.12 | 0.0389 | 1.15 | **LOSS** |
| 566 | DDOG | 07-03 13:50 | 07-03 15:20 | 149.1 | 154.06 | 61 | 9095.1 | +302.56 | +3.33% | 1.67R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.86 | ↑148.07 | 3.5654 | 2.04 | **WIN** |
| 567 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 568 | PLTR | 07-03 13:55 | 07-03 14:25 | 135.46 | 134.66 | 67 | 9075.82 | -53.6 | -0.59% | 0.44R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.32 | ↑134.12 | 0.5278 | 2.03 | **LOSS** |
| 569 | CRWD | 07-03 14:00 | 07-03 14:55 | 513.6 | 512.11 | 16 | 8217.6 | -23.84 | -0.29% | 0.32R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 97.66 | ↓507.58 | 5.0394 | 2.52 | **LOSS** |
| 570 | MDB | 07-03 14:10 | 07-03 14:35 | 212.49 | 211.34 | 65 | 13811.85 | -74.75 | -0.54% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 571 | NFLX | 07-03 14:15 | 07-03 14:35 | 1298.86 | 1293.98 | 10 | 12988.6 | -48.8 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↑1289.95 | 3.4993 | 1.68 | **LOSS** |
| 572 | ORCL | 07-03 15:30 | 07-03 16:50 | 236.32 | 236.21 | 59 | 13942.88 | -6.49 | -0.05% | 0.06R | 80m | market | stagnation | trend | trend | neutral | 72.01 | ↑233.21 | 1.5604 | 1.29 | **LOSS** |
| 573 | INTC | 07-03 15:30 | 07-03 15:50 | 22.56 | 22.41 | 625 | 14100 | -93.75 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 66.29 | ↑22.37 | 0.0956 | 1.24 | **LOSS** |
| 574 | DDOG | 07-03 15:35 | 07-03 15:55 | 155.5 | 153.92 | 90 | 13995 | -142.2 | -1.02% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 75.11 | ↑151.32 | 3.9925 | 1.62 | **LOSS** |
| 575 | UBER | 07-07 13:40 | 07-07 15:25 | 95.11 | 96.88 | 95 | 9035.45 | +168.15 | +1.86% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 576 | COIN | 07-07 13:55 | 07-07 14:15 | 362.05 | 357.72 | 25 | 9051.25 | -108.25 | -1.2% | 0.92R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.92 | ↓357.59 | 1.316 | 2.22 | **LOSS** |
| 577 | DELL | 07-07 14:00 | 07-07 14:25 | 126.89 | 126.25 | 110 | 13957.9 | -70.4 | -0.5% | 0.71R | 25m | market | early-reversal | trend | trend | neutral | 71 | ↑125.88 | 0.2141 | 1.42 | **LOSS** |
| 578 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 579 | AMD | 07-08 13:40 | 07-08 15:25 | 136.53 | 137.45 | 71 | 9693.63 | +65.32 | +0.67% | 0.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.27 | ↓136.57 | 0.3518 | 1.3 | **WIN** |
| 580 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 398 | 9086.34 | +222.88 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 581 | SMCI | 07-08 13:45 | 07-08 15:30 | 48.17 | 48.47 | 187 | 9007.79 | +56.1 | +0.62% | 0.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.31 | ↑47.77 | 0.2213 | 1.96 | **WIN** |
| 582 | LLY | 07-08 13:45 | 07-08 15:30 | 784.33 | 787.74 | 11 | 8627.63 | +37.51 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 583 | CRM | 07-08 14:00 | 07-08 14:55 | 271.74 | 275.16 | 25 | 13858.74 | +85.5 | +1.26% | 1.8R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 584 | CRM | 07-08 14:00 | 07-08 15:45 | 271.74 | 274.73 | 26 | 13858.74 | +77.74 | +1.1% | 1.57R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 585 | NVO | 07-08 14:20 | 07-08 16:05 | 69.88 | 70.19 | 200 | 13976 | +62 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 78.57 | ↑69.52 | 0.1782 | 1.26 | **WIN** |
| 586 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 587 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.86 | 99.26 | 140 | 13980.4 | -84 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 588 | LOW | 07-08 15:05 | 07-08 15:25 | 226.65 | 225.1 | 61 | 13825.65 | -94.55 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 77.33 | ↓225.28 | 0.5327 | 2.06 | **LOSS** |
| 589 | HD | 07-08 15:10 | 07-08 16:00 | 369.73 | 369.32 | 37 | 13680.01 | -15.17 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 590 | INTC | 07-08 17:25 | 07-08 18:55 | 23.64 | 23.58 | 597 | 14113.08 | -35.82 | -0.25% | 0.29R | 90m | market | stagnation | trend | trend | neutral | 79.1 | ↑23.15 | 0.0633 | 2 | **LOSS** |
| 591 | PANW | 07-08 17:35 | 07-08 18:50 | 203.63 | 203.39 | 68 | 13846.84 | -16.32 | -0.12% | 0.17R | 75m | market | stagnation | trend | trend | neutral | 76.01 | ↑202.22 | 0.3858 | 1.29 | **LOSS** |
| 592 | MSFT | 07-09 13:30 | 07-09 14:45 | 502.19 | 502.49 | 19 | 9541.61 | +5.7 | +0.06% | 0.09R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 91.2 | ↓501.53 | 0.5456 | 7.73 | **WIN** |
| 593 | COIN | 07-09 13:30 | 07-09 14:00 | 358.57 | 357.8 | 25 | 8964.25 | -19.25 | -0.21% | 0.3R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.46 | ↓357.65 | 0.5578 | 1.49 | **LOSS** |
| 594 | LLY | 07-09 13:30 | 07-09 13:50 | 792.72 | 788.24 | 11 | 8719.92 | -49.28 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 595 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 55 | 9018.9 | -26.4 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 596 | AVGO | 07-09 13:35 | 07-09 14:25 | 277.02 | 276.37 | 32 | 8864.64 | -20.8 | -0.23% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.66 | ↓275.15 | -0.0736 | 1.57 | **LOSS** |
| 597 | TSM | 07-09 13:40 | 07-09 14:10 | 232.36 | 231.61 | 38 | 8829.68 | -28.5 | -0.32% | 0.46R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 598 | CAT | 07-09 13:40 | 07-09 14:00 | 402.5 | 401.11 | 22 | 8855 | -30.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.17 | ↓400.82 | 1.1439 | 1.54 | **LOSS** |
| 599 | GE | 07-09 13:40 | 07-09 14:00 | 250.5 | 247.69 | 36 | 9018 | -101.16 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 600 | NET | 07-09 15:40 | 07-09 16:05 | 195.22 | 194.6 | 72 | 14055.84 | -44.64 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 78.16 | ↑193.99 | 0.3661 | 1.46 | **LOSS** |
| 601 | CELH | 07-09 16:10 | 07-09 17:00 | 46.08 | 46.07 | 302 | 13916.16 | -3.02 | -0.02% | 0.03R | 50m | market | breakeven-stop | breakout | breakout | neutral | 86.83 | ↑45.56 | 0.0537 | 2.56 | **LOSS** |
| 602 | AMAT | 07-10 13:40 | 07-10 14:00 | 197.69 | 196.97 | 49 | 9686.81 | -35.28 | -0.36% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 603 | NKE | 07-10 14:15 | 07-10 16:00 | 74.85 | 75.2 | 187 | 13996.95 | +65.45 | +0.47% | 0.55R | 105m | market | timeout | trend | trend | neutral | 79.4 | ↑74 | 0.2429 | 1.34 | **WIN** |
| 604 | HPE | 07-10 15:40 | 07-10 17:25 | 21.46 | 21.54 | 390 | 8369.4 | +31.2 | +0.37% | 0.52R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.89 | ↑21.02 | 0.1184 | 3.71 | **WIN** |
| 605 | ARM | 07-11 13:50 | 07-11 15:35 | 148.9 | 150.12 | 65 | 9678.5 | +79.3 | +0.82% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.33 | ↑146.74 | 0.1052 | 1.11 | **WIN** |
| 606 | GE | 07-11 14:05 | 07-11 15:00 | 255.53 | 255.22 | 54 | 13798.62 | -16.74 | -0.12% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 607 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.29 | 180.31 | 78 | 13984.62 | +79.56 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 608 | PLTR | 07-14 13:35 | 07-14 14:15 | 145.22 | 144.16 | 62 | 9003.64 | -65.72 | -0.73% | 0.72R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.08 | ↓144.38 | 0.0018 | 2.96 | **LOSS** |
| 609 | BA | 07-14 13:35 | 07-14 13:55 | 230.81 | 228.84 | 39 | 9001.59 | -76.83 | -0.85% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 610 | CRM | 07-14 13:40 | 07-14 14:05 | 260.74 | 259.92 | 32 | 8343.68 | -26.24 | -0.31% | 0.44R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.48 | ↓259.88 | 0.0062 | 1.19 | **LOSS** |
| 611 | ABNB | 07-14 13:45 | 07-14 14:05 | 137.43 | 136.69 | 66 | 9070.38 | -48.84 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.53 | ↓136.57 | 0.0934 | 1.41 | **LOSS** |
| 612 | LMT | 07-14 14:30 | 07-14 14:50 | 474.59 | 471.37 | 29 | 13763.11 | -93.38 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 79.84 | ↓471.63 | 1.7867 | 1.06 | **LOSS** |
| 613 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 614 | MDB | 07-15 13:45 | 07-15 14:30 | 207.33 | 206.33 | 43 | 8915.19 | -43 | -0.48% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 615 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 53 | 9776.38 | -49.82 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 616 | KLAC | 07-15 14:10 | 07-15 15:00 | 937.86 | 936.55 | 14 | 13130.04 | -18.34 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 73.03 | ↓934.41 | 3.0322 | 2.16 | **LOSS** |
| 617 | ELF | 07-15 14:10 | 07-15 14:35 | 108.42 | 107.35 | 129 | 13986.18 | -138.03 | -0.99% | 0.91R | 25m | market | early-reversal | breakout | trend | neutral | 62.1 | ↓107.68 | 0.0045 | 1.05 | **LOSS** |
| 618 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.61 | 141.08 | 98 | 13877.78 | -51.94 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 619 | AAPL | 07-15 15:35 | 07-15 15:55 | 211.83 | 210.72 | 66 | 13980.78 | -73.26 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 71.52 | ↑210.12 | 0.4876 | 1.46 | **LOSS** |
| 620 | RIVN | 07-15 15:40 | 07-15 16:00 | 12.97 | 12.89 | 1083 | 14046.51 | -86.64 | -0.62% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 86.49 | ↑12.8 | 0.0351 | 3.24 | **LOSS** |
| 621 | NET | 07-15 16:25 | 07-15 18:10 | 186.47 | 187.42 | 75 | 13985.25 | +71.25 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 73.82 | ↑184.01 | 0.6906 | 1.08 | **WIN** |
| 622 | TSLA | 07-16 13:30 | 07-16 15:15 | 314.7 | 319.47 | 27 | 8496.9 | +128.79 | +1.52% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 56.59 | ↑314.34 | -0.832 | 2.95 | **WIN** |
| 623 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 624 | SHOP | 07-16 16:30 | 07-16 18:15 | 118.43 | 119.35 | 118 | 13974.74 | +108.56 | +0.78% | 0.53R | 105m | market | timeout | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 625 | LRCX | 07-16 17:20 | 07-16 19:05 | 99.39 | 99.87 | 140 | 13914.6 | +67.2 | +0.48% | 0.69R | 105m | market | timeout | trend | trend | neutral | 78.39 | ↑97.7 | 0.3926 | 2.31 | **WIN** |
| 626 | ORCL | 07-16 17:45 | 07-16 19:20 | 238.55 | 240.31 | 29 | 14074.45 | +51.04 | +0.74% | 1.06R | 95m | market | trim-profit-target | trend | trend | neutral | 69.01 | ↑235.55 | 0.814 | 1.44 | **WIN** |
| 627 | ORCL | 07-16 17:45 | 07-16 19:30 | 238.55 | 240.41 | 30 | 14074.45 | +55.8 | +0.78% | 1.11R | 105m | market | timeout | trend | trend | neutral | 69.01 | ↑235.55 | 0.814 | 1.44 | **WIN** |
| 628 | TGT | 07-17 13:40 | 07-17 14:30 | 102.55 | 102.46 | 95 | 9742.25 | -8.55 | -0.09% | 0.13R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 629 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.22 | 249.2 | 36 | 8971.92 | -0.72 | -0.01% | 0.01R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 630 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.82 | 143.43 | 49 | 13898.36 | +78.89 | +1.14% | 1.52R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 631 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.82 | 143.91 | 49 | 13898.36 | +102.41 | +1.47% | 1.96R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 632 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 114 | 14028.84 | +221.16 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 633 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 97 | 14006.8 | +61.11 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 634 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 97 | 14006.8 | +62.08 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 635 | BAC | 07-17 15:35 | 07-17 17:20 | 46.54 | 46.76 | 300 | 13962 | +66 | +0.47% | 0.67R | 105m | market | timeout | trend | trend | neutral | 74.73 | ↑46.15 | 0.0989 | 1.53 | **WIN** |
| 636 | INTC | 07-17 15:40 | 07-17 16:10 | 22.98 | 22.91 | 614 | 14109.72 | -42.98 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 75.58 | ↑22.76 | 0.0612 | 1.82 | **LOSS** |
| 637 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 391 | 9172.86 | -117.3 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 638 | DELL | 07-18 13:35 | 07-18 15:20 | 127.27 | 129.07 | 70 | 8908.9 | +126 | +1.41% | 1.78R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.92 | ↑126.77 | 0.4922 | 5.09 | **WIN** |
| 639 | ARM | 07-18 13:40 | 07-18 14:00 | 160.71 | 159.3 | 56 | 8999.76 | -78.96 | -0.88% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 640 | TSLA | 07-18 13:45 | 07-18 14:35 | 326.13 | 325.92 | 27 | 8805.51 | -5.67 | -0.06% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.78 | ↓324.69 | 1.3279 | 2.69 | **LOSS** |
| 641 | CVX | 07-18 14:10 | 07-18 14:25 | 153.12 | 151.56 | 91 | 13933.92 | -141.96 | -1.02% | 1.46R | 15m | market | stop-loss | trend | trend | neutral | 75.08 | ↓152.03 | 0.4351 | 2.35 | **LOSS** |
| 642 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.54 | 215.72 | 64 | 13858.56 | -52.48 | -0.38% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 643 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 96 | 14029.44 | +101.76 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 644 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 14029.44 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 645 | QCOM | 07-18 15:05 | 07-18 15:35 | 155.23 | 154.68 | 90 | 13970.7 | -49.5 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 76.24 | ↑153.84 | 0.5348 | 1.02 | **LOSS** |
| 646 | DDOG | 07-18 15:55 | 07-18 16:15 | 145.7 | 144.91 | 96 | 13987.2 | -75.84 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 61.21 | ↑144.46 | 0.5887 | 2.17 | **LOSS** |
| 647 | DELL | 07-18 16:05 | 07-18 17:50 | 130.96 | 131.24 | 106 | 13881.76 | +29.68 | +0.21% | 0.28R | 105m | market | timeout | trend | trend | neutral | 75.66 | ↑128.76 | 0.9556 | 1.21 | **WIN** |
| 648 | MRVL | 07-18 17:30 | 07-18 17:50 | 74.61 | 74.39 | 188 | 14026.68 | -41.36 | -0.29% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 53.64 | ↑73.47 | 0.2617 | 2.12 | **LOSS** |
| 649 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 48 | 9016.8 | +46.56 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 650 | CVX | 07-21 13:30 | 07-21 13:50 | 151.52 | 150.18 | 59 | 8939.68 | -79.06 | -0.88% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 651 | PYPL | 07-21 13:35 | 07-21 14:05 | 75.95 | 75.61 | 118 | 8962.1 | -40.12 | -0.45% | 0.56R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.33 | ↓75.57 | 0.2953 | 2.63 | **LOSS** |
| 652 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.39 | 101.58 | 88 | 9010.32 | -71.28 | -0.79% | 1.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 653 | NKE | 07-21 13:35 | 07-21 15:20 | 73.95 | 74.52 | 122 | 9021.9 | +69.54 | +0.77% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.84 | ↑73.47 | 0.1352 | 2.5 | **WIN** |
| 654 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 12 | 8571.6 | -6.12 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 655 | UBER | 07-21 13:40 | 07-21 14:15 | 91.66 | 91.25 | 99 | 9074.34 | -40.59 | -0.45% | 0.58R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 656 | COIN | 07-21 13:45 | 07-21 14:05 | 431.96 | 428.05 | 19 | 8207.24 | -74.29 | -0.91% | 0.62R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.27 | ↑425.57 | 3.874 | 2.51 | **LOSS** |
| 657 | CRWD | 07-21 13:45 | 07-21 14:35 | 484.2 | 483.15 | 18 | 8715.6 | -18.9 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 658 | NET | 07-21 13:45 | 07-21 14:20 | 199.25 | 197.69 | 45 | 8966.25 | -70.2 | -0.78% | 0.73R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 659 | CRM | 07-21 14:00 | 07-21 14:20 | 264.24 | 262.6 | 53 | 14004.72 | -86.92 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 660 | SMCI | 07-21 14:00 | 07-21 15:35 | 53.27 | 53.24 | 263 | 14010.01 | -7.89 | -0.06% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 76.45 | ↓52.93 | 0.378 | 1.02 | **LOSS** |
| 661 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 662 | ARM | 07-21 14:10 | 07-21 15:15 | 161.55 | 163.14 | 43 | 13893.3 | +68.37 | +0.98% | 0.8R | 65m | market | trim-profit-target | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 663 | ARM | 07-21 14:10 | 07-21 15:55 | 161.55 | 162.84 | 43 | 13893.3 | +55.47 | +0.8% | 0.66R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 664 | AMD | 07-21 14:30 | 07-21 15:05 | 159.73 | 159.04 | 87 | 13896.51 | -60.03 | -0.43% | 0.34R | 35m | market | early-reversal | trend | trend | neutral | 69.08 | ↑158.57 | 0.4791 | 2.52 | **LOSS** |
| 665 | LRCX | 07-21 15:40 | 07-21 16:10 | 102.58 | 102.12 | 136 | 13950.88 | -62.56 | -0.45% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 61.47 | ↑102.03 | 0.2663 | 2.02 | **LOSS** |
| 666 | PANW | 07-21 17:45 | 07-21 18:10 | 203.1 | 196.63 | 68 | 13810.8 | -439.96 | -3.19% | 4.56R | 25m | market | stop-loss | trend | trend | neutral | 75.56 | ↓200.38 | 0.5238 | 2.43 | **LOSS** |
| 667 | LLY | 07-22 13:35 | 07-22 15:20 | 771.67 | 774.27 | 11 | 8488.37 | +28.6 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 668 | ADBE | 07-22 13:45 | 07-22 14:05 | 373.38 | 371.3 | 24 | 8961.12 | -49.92 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.44 | ↓372.51 | 1.2979 | 1.65 | **LOSS** |
| 669 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.12 | 95.01 | 94 | 8941.28 | -10.34 | -0.12% | 0.13R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 670 | NKE | 07-22 13:45 | 07-22 14:05 | 75.38 | 74.8 | 120 | 9045.6 | -69.6 | -0.77% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 671 | TGT | 07-22 13:45 | 07-22 14:35 | 104.89 | 104.77 | 86 | 9020.54 | -10.32 | -0.11% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.02 | ↑104.31 | 0.3853 | 1.66 | **LOSS** |
| 672 | TSLA | 07-22 15:45 | 07-22 16:05 | 332.2 | 331.17 | 42 | 13952.4 | -43.26 | -0.31% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 62.38 | ↑327.84 | 0.8549 | 1.26 | **LOSS** |
| 673 | IBM | 07-23 13:35 | 07-23 14:40 | 285.48 | 285.3 | 31 | 8849.88 | -5.58 | -0.06% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.28 | ↑284.91 | 0.3782 | 1.13 | **LOSS** |
| 674 | CAT | 07-23 13:40 | 07-23 14:00 | 425.55 | 423.12 | 32 | 13617.6 | -77.76 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 675 | CELH | 07-23 13:40 | 07-23 14:00 | 45.27 | 44.87 | 198 | 8963.46 | -79.2 | -0.88% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.21 | ↓45.33 | 0.3128 | 1.61 | **LOSS** |
| 676 | DIS | 07-23 14:00 | 07-23 14:20 | 122.44 | 122.1 | 114 | 13958.16 | -38.76 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 76.44 | ↑122.06 | 0.2652 | 1.15 | **LOSS** |
| 677 | XOM | 07-23 14:10 | 07-23 14:45 | 109.5 | 109.17 | 127 | 13906.5 | -41.91 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 678 | HPE | 07-23 14:15 | 07-23 15:30 | 20.99 | 20.99 | 665 | 13958.35 | +0 | +0% | 0R | 75m | market | breakeven-stop | trend | trend | neutral | 75.86 | ↑20.86 | 0.1216 | 1.28 | **WIN** |
| 679 | LLY | 07-23 14:25 | 07-23 16:10 | 786.32 | 795.24 | 17 | 13367.44 | +151.64 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 680 | HD | 07-23 17:35 | 07-23 18:15 | 377.81 | 376.6 | 37 | 13978.97 | -44.77 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.19 | ↑374.28 | 0.7867 | 4.2 | **LOSS** |
| 681 | NVO | 07-24 13:30 | 07-24 14:15 | 70.87 | 70.61 | 128 | 9071.36 | -33.28 | -0.37% | 0.53R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 682 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 39 | 9016.02 | +3.51 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 683 | AVGO | 07-24 13:35 | 07-24 13:55 | 289.23 | 285.26 | 31 | 8966.13 | -123.07 | -1.37% | 1.22R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 684 | UBER | 07-24 13:35 | 07-24 15:20 | 92.35 | 92.12 | 98 | 9050.3 | -22.54 | -0.25% | 0.27R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 685 | DELL | 07-24 13:35 | 07-24 13:55 | 128.8 | 128.36 | 70 | 9016 | -30.8 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↓128.19 | 0.2022 | 2.29 | **LOSS** |
| 686 | GE | 07-24 13:40 | 07-24 15:25 | 266.3 | 269.34 | 34 | 9054.2 | +103.36 | +1.14% | 1.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.08 | ↑265.31 | 0.6152 | 1.53 | **WIN** |
| 687 | ADBE | 07-24 14:00 | 07-24 14:15 | 375.99 | 372.62 | 37 | 13911.63 | -124.69 | -0.9% | 1.29R | 15m | market | stop-loss | trend | trend | neutral | 75.05 | ↓372.88 | 0.5707 | 1.17 | **LOSS** |
| 688 | CVX | 07-24 14:25 | 07-24 16:10 | 154.06 | 154.58 | 90 | 13865.4 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 70.82 | ↑153.15 | 0.2875 | 1.06 | **WIN** |
| 689 | MU | 07-24 15:00 | 07-24 15:30 | 112.58 | 111.86 | 124 | 13959.92 | -89.28 | -0.64% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 690 | ARM | 07-24 15:05 | 07-24 15:30 | 161.17 | 160.71 | 86 | 13860.62 | -39.56 | -0.29% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 73.63 | ↑159.51 | 0.3803 | 3.11 | **LOSS** |
| 691 | MDB | 07-25 13:30 | 07-25 14:30 | 237.56 | 243.57 | 41 | 9739.96 | +246.41 | +2.53% | 3.61R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.71 | ↑237.19 | 0.7381 | 1.73 | **WIN** |
| 692 | UNH | 07-25 13:30 | 07-25 13:50 | 284.04 | 282.48 | 31 | 8805.24 | -48.36 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 693 | NKE | 07-25 13:30 | 07-25 13:45 | 76.37 | 75.64 | 128 | 9775.36 | -93.44 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.46 | ↓76.33 | -0.0076 | 3.21 | **LOSS** |
| 694 | RIVN | 07-25 13:30 | 07-25 15:15 | 14.01 | 14.4 | 600 | 8406 | +234 | +2.78% | 3.05R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 91.4 | ↑13.94 | 0.0865 | 2.15 | **WIN** |
| 695 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.46 | 148.79 | 61 | 9056.06 | +20.13 | +0.22% | 0.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 696 | PLTR | 07-25 13:40 | 07-25 15:25 | 158.05 | 159.19 | 57 | 9008.85 | +64.98 | +0.72% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.65 | ↑157.79 | 0.5393 | 2.2 | **WIN** |
| 697 | NET | 07-25 13:45 | 07-25 15:30 | 195.77 | 198.97 | 46 | 9005.42 | +147.2 | +1.63% | 2.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.11 | ↑195 | 0.6994 | 1.17 | **WIN** |
| 698 | TSM | 07-25 14:00 | 07-25 14:50 | 244.35 | 244.19 | 57 | 13927.95 | -9.12 | -0.07% | 0.09R | 50m | market | breakeven-stop | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 699 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 113 | 14075.28 | -14.69 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 700 | ARM | 07-25 14:35 | 07-25 16:20 | 162.93 | 163.89 | 85 | 13849.05 | +81.6 | +0.59% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 70.55 | ↑161.38 | 0.4531 | 1.82 | **WIN** |
| 701 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.06 | 321.32 | 22 | 13994.64 | +71.72 | +1.02% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 702 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.06 | 319.31 | 22 | 13994.64 | +27.5 | +0.39% | 0.48R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 703 | NVO | 07-25 16:00 | 07-25 16:50 | 71.47 | 71.29 | 195 | 13936.65 | -35.1 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 64.8 | ↑71.04 | 0.0861 | 6.75 | **LOSS** |
| 704 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 404 | 8504.2 | -24.24 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 705 | ABNB | 07-28 13:35 | 07-28 14:00 | 142.91 | 142.3 | 63 | 9003.33 | -38.43 | -0.43% | 0.61R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.83 | ↓142.66 | 0.1324 | 1.13 | **LOSS** |
| 706 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 119 | 9053.52 | -58.31 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 707 | NOW | 07-28 14:00 | 07-28 14:20 | 995.08 | 985.42 | 14 | 13931.12 | -135.24 | -0.97% | 1.14R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 708 | NET | 07-28 14:00 | 07-28 14:15 | 202.06 | 199.92 | 69 | 13942.14 | -147.66 | -1.06% | 1.34R | 15m | market | stop-loss | breakout | trend | neutral | 73.82 | ↓200.56 | 0.4546 | 1.01 | **LOSS** |
| 709 | ELF | 07-28 14:00 | 07-28 14:20 | 122 | 121.47 | 114 | 13908 | -60.42 | -0.43% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 710 | DELL | 07-28 14:40 | 07-28 15:00 | 132.95 | 131.65 | 105 | 13959.75 | -136.5 | -0.98% | 1.32R | 20m | market | stop-loss | trend | trend | neutral | 61.37 | ↓132.13 | 0.2872 | 1.42 | **LOSS** |
| 711 | NET | 07-28 15:10 | 07-28 15:30 | 201.87 | 200.46 | 69 | 13929.03 | -97.29 | -0.7% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 48.36 | ↓200.61 | 0.5308 | 1.07 | **LOSS** |
| 712 | CRM | 07-29 13:30 | 07-29 13:50 | 273.56 | 272.41 | 33 | 9027.48 | -37.95 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.05 | ↓272.97 | 0.3837 | 3.46 | **LOSS** |
| 713 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 108 | 8348.4 | +2.16 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 714 | DELL | 07-29 13:30 | 07-29 13:55 | 135.3 | 134.75 | 67 | 9065.1 | -36.85 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓135.29 | 0.3907 | 1.98 | **LOSS** |
| 715 | ORCL | 07-29 13:35 | 07-29 14:25 | 251.87 | 250.4 | 36 | 9067.32 | -52.92 | -0.58% | 0.83R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 716 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 108 | 8447.76 | -41.04 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 717 | ADP | 07-30 13:35 | 07-30 15:20 | 311.51 | 315.13 | 44 | 13706.44 | +159.28 | +1.16% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 86.57 | ↑308.56 | 0.3705 | 1.4 | **WIN** |
| 718 | DELL | 07-30 14:15 | 07-30 14:35 | 134.86 | 134.2 | 103 | 13890.58 | -67.98 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 70.67 | ↑134.07 | 0.0745 | 1.24 | **LOSS** |
| 719 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 11 | 8585.17 | -53.68 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 720 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 44 | 9050.8 | +103.4 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 721 | MA | 07-31 13:40 | 07-31 15:25 | 569.6 | 575.79 | 15 | 8544 | +92.85 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.42 | ↑566.65 | 0.7985 | 1.79 | **WIN** |
| 722 | SNOW | 07-31 13:45 | 07-31 15:30 | 224.39 | 226.7 | 40 | 8975.6 | +92.4 | +1.03% | 0.95R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.39 | ↑223.01 | 0.3172 | 1.1 | **WIN** |
| 723 | COST | 07-31 14:30 | 07-31 14:55 | 944.13 | 941.28 | 14 | 13217.82 | -39.9 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 78.59 | ↑936.64 | 2.7383 | 1.43 | **LOSS** |
| 724 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 37 | 7693.04 | -69.93 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 725 | LOW | 08-01 15:10 | 08-01 15:30 | 226.68 | 225.63 | 61 | 13827.48 | -64.05 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 64.34 | ↑224.85 | 0.329 | 3.24 | **LOSS** |
| 726 | LOW | 08-01 15:50 | 08-01 16:40 | 226.81 | 226.64 | 61 | 13835.41 | -10.37 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 69.05 | ↑225.19 | 0.583 | 2.14 | **LOSS** |
| 727 | BA | 08-01 16:05 | 08-01 16:25 | 222.22 | 221.43 | 63 | 13999.86 | -49.77 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 77.45 | ↑219.43 | 0.5907 | 1.9 | **LOSS** |
| 728 | COST | 08-01 16:30 | 08-01 17:00 | 954.75 | 951.09 | 14 | 13366.5 | -51.24 | -0.38% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 77.76 | ↑948.28 | 2.9841 | 2.59 | **LOSS** |
| 729 | LMT | 08-01 17:20 | 08-01 19:05 | 422.9 | 422.45 | 33 | 13955.7 | -14.85 | -0.11% | 0.16R | 105m | market | stagnation | trend | trend | neutral | 77.73 | ↑420 | 0.7624 | 2.81 | **LOSS** |
| 730 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.54 | 205.81 | 47 | 9660.38 | +12.69 | +0.13% | 0.15R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 731 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 51 | 9811.38 | +23.97 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 732 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.74 | 533.46 | 17 | 9056.58 | +12.24 | +0.14% | 0.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 733 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 29 | 8990 | -30.74 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 734 | AVGO | 08-04 13:35 | 08-04 14:40 | 296.2 | 295.76 | 30 | 8886 | -13.2 | -0.15% | 0.15R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.25 | ↑293.84 | 1.0727 | 1.63 | **LOSS** |
| 735 | ARM | 08-04 13:35 | 08-04 13:55 | 140.38 | 139.09 | 64 | 8984.32 | -82.56 | -0.92% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.44 | ↓139.79 | 0.3632 | 1.18 | **LOSS** |
| 736 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 12 | 8655 | +31.32 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 737 | DIS | 08-04 13:35 | 08-04 14:05 | 119.3 | 118.79 | 75 | 8947.5 | -38.25 | -0.43% | 0.53R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.87 | ↓118.78 | 0.4471 | 1.32 | **LOSS** |
| 738 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.89 | 97.53 | 92 | 9005.88 | -33.12 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 739 | UBER | 08-04 13:40 | 08-04 14:00 | 88.24 | 87.92 | 103 | 9088.72 | -32.96 | -0.36% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 740 | RIVN | 08-04 13:40 | 08-04 14:00 | 12.74 | 12.65 | 712 | 9070.88 | -64.08 | -0.71% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.48 | ↓12.62 | 0.0527 | 1.42 | **LOSS** |
| 741 | PLTR | 08-04 13:45 | 08-04 14:05 | 160.15 | 159 | 56 | 8968.4 | -64.4 | -0.72% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.52 | ↓159.48 | 0.8038 | 2.14 | **LOSS** |
| 742 | CAT | 08-04 14:10 | 08-04 15:40 | 434.07 | 433.46 | 32 | 13890.24 | -19.52 | -0.14% | 0.2R | 90m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 743 | AMD | 08-04 14:30 | 08-04 14:50 | 177.31 | 176.2 | 74 | 13120.94 | -82.14 | -0.63% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 59.97 | ↑175.98 | 1.486 | 1.55 | **LOSS** |
| 744 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.36 | 89.37 | 85 | 7595.6 | +0.85 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **WIN** |
| 745 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.57 | 178.96 | 78 | 13928.46 | +30.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 746 | KLAC | 08-04 16:20 | 08-04 16:40 | 913.41 | 908.48 | 15 | 13701.15 | -73.95 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↑904.38 | 6.5249 | 1.78 | **LOSS** |
| 747 | NET | 08-04 17:55 | 08-04 18:20 | 210.93 | 209.74 | 66 | 13921.38 | -78.54 | -0.56% | 0.8R | 25m | market | early-reversal | trend | trend | neutral | 63.26 | ↑208.92 | 0.3948 | 3.15 | **LOSS** |
| 748 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 41 | 8835.09 | -35.26 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 749 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 449 | 9083.27 | -4.49 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 750 | TXN | 08-05 13:40 | 08-05 14:20 | 185.51 | 184.78 | 48 | 8904.48 | -35.04 | -0.39% | 0.56R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 751 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 116 | 9027.12 | -66.12 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 752 | TSLA | 08-05 13:50 | 08-05 14:10 | 312.15 | 308.35 | 31 | 9676.65 | -117.8 | -1.22% | 1.12R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57 | ↓308.63 | 0.1486 | 1.47 | **LOSS** |
| 753 | UNH | 08-05 15:20 | 08-05 15:40 | 247.62 | 245.55 | 52 | 12876.24 | -107.64 | -0.84% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 754 | UNH | 08-05 16:30 | 08-05 16:50 | 248.96 | 247.81 | 56 | 13941.76 | -64.4 | -0.46% | 0.32R | 20m | market | early-reversal | trend | trend | neutral | 56.1 | ↑244.16 | 1.3979 | 2.27 | **LOSS** |
| 755 | TGT | 08-05 17:15 | 08-05 18:20 | 102.04 | 101.88 | 137 | 13979.48 | -21.92 | -0.16% | 0.23R | 65m | market | stagnation | trend | trend | neutral | 78.99 | ↑100.63 | 0.1822 | 1.74 | **LOSS** |
| 756 | SHOP | 08-05 17:35 | 08-05 18:25 | 125.95 | 125.79 | 111 | 13980.45 | -17.76 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 67.32 | ↑124.73 | 0.3198 | 1.17 | **LOSS** |
| 757 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.87 | 444.3 | 31 | 13821.97 | -48.67 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 758 | NKE | 08-06 13:30 | 08-06 13:55 | 75.24 | 74.95 | 130 | 9781.2 | -37.7 | -0.39% | 0.56R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.2 | ↓74.92 | 0.0378 | 3.11 | **LOSS** |
| 759 | AAPL | 08-06 15:15 | 08-06 16:25 | 212.89 | 214.42 | 32 | 13837.85 | +48.96 | +0.72% | 0.96R | 70m | market | trim-profit-target | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 760 | AAPL | 08-06 15:15 | 08-06 17:00 | 212.89 | 214.14 | 33 | 13837.85 | +41.25 | +0.59% | 0.79R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 761 | TGT | 08-06 15:15 | 08-06 16:15 | 105.52 | 105.38 | 133 | 14034.16 | -18.62 | -0.13% | 0.19R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 762 | COIN | 08-06 16:05 | 08-06 16:40 | 298.98 | 299.07 | 25 | 7474.5 | +2.25 | +0.03% | 0.04R | 35m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 66.68 | ↑296.24 | 0.0607 | 3.39 | **WIN** |
| 763 | MDB | 08-06 17:05 | 08-06 18:50 | 232.49 | 232.39 | 60 | 13949.4 | -6 | -0.04% | 0.06R | 105m | market | stagnation | trend | trend | neutral | 64.08 | ↑230.78 | 0.3577 | 1.09 | **LOSS** |
| 764 | DDOG | 08-06 17:35 | 08-06 18:15 | 135.7 | 135.31 | 103 | 13977.1 | -40.17 | -0.29% | 0.41R | 40m | market | early-reversal | trend | trend | neutral | 71.52 | ↑134.55 | 0.2537 | 1.12 | **LOSS** |
| 765 | AAPL | 08-07 13:35 | 08-07 14:25 | 219.05 | 218.23 | 41 | 8981.05 | -33.62 | -0.37% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 766 | ARM | 08-07 13:40 | 08-07 14:05 | 138.97 | 138.31 | 64 | 8894.08 | -42.24 | -0.47% | 0.57R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.15 | ↓138.69 | 0.5859 | 1.61 | **LOSS** |
| 767 | SBUX | 08-07 13:40 | 08-07 14:00 | 90.91 | 90.27 | 99 | 9000.09 | -63.36 | -0.7% | 0.95R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.52 | ↓90.6 | 0.2161 | 1.39 | **LOSS** |
| 768 | RIVN | 08-07 13:55 | 08-07 14:20 | 12.14 | 12.01 | 1158 | 14058.12 | -150.54 | -1.07% | 0.7R | 25m | market | early-reversal | breakout | breakout | neutral | 81.56 | ↓11.98 | 0.087 | 1.28 | **LOSS** |
| 769 | ELF | 08-07 17:50 | 08-07 18:15 | 99.03 | 98.43 | 90 | 8912.7 | -54 | -0.61% | 0.43R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.49 | ↑96.61 | 0.4267 | 1.76 | **LOSS** |
| 770 | PANW | 08-08 13:35 | 08-08 13:55 | 170 | 168.99 | 49 | 8330 | -49.49 | -0.59% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 771 | DDOG | 08-08 13:35 | 08-08 13:55 | 139.54 | 137.7 | 59 | 8232.86 | -108.56 | -1.32% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.07 | ↓138.67 | 1.3902 | 1.26 | **LOSS** |
| 772 | LLY | 08-08 13:35 | 08-08 13:55 | 654.36 | 648.32 | 13 | 8506.68 | -78.52 | -0.92% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 773 | CVX | 08-08 14:00 | 08-08 14:10 | 155.32 | 153.75 | 89 | 13823.48 | -139.73 | -1.01% | 1.44R | 10m | market | stop-loss | trend | trend | neutral | 71.92 | ↓154.69 | 0.3514 | 1.15 | **LOSS** |
| 774 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 775 | DIS | 08-08 14:10 | 08-08 14:30 | 114.09 | 113.55 | 122 | 13918.98 | -65.88 | -0.47% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↓113.71 | 0.3507 | 5.7 | **LOSS** |
| 776 | MU | 08-08 14:15 | 08-08 15:20 | 113.8 | 118.35 | 123 | 13997.4 | +559.65 | +4% | 4.21R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 777 | ARM | 08-08 14:15 | 08-08 14:35 | 137.62 | 136.76 | 101 | 13899.62 | -86.86 | -0.62% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 778 | NFLX | 08-08 14:20 | 08-08 14:50 | 1205.82 | 1198.98 | 6 | 7234.92 | -41.04 | -0.57% | 0.81R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 779 | AAPL | 08-08 14:30 | 08-08 16:15 | 223.37 | 227.05 | 62 | 13848.94 | +228.16 | +1.65% | 1.7R | 105m | market | timeout | trend | trend | neutral | 77.34 | ↑221.79 | 0.8259 | 1.49 | **WIN** |
| 780 | MU | 08-08 15:25 | 08-08 15:45 | 119.16 | 118.42 | 71 | 8460.36 | -52.54 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 781 | MA | 08-08 16:05 | 08-08 17:50 | 571.79 | 574.29 | 24 | 13722.96 | +60 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑567.79 | 1.7432 | 1.31 | **WIN** |
| 782 | UNH | 08-08 16:20 | 08-08 16:40 | 250.24 | 249.24 | 55 | 13763.2 | -55 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 76.19 | ↑247.61 | 0.6931 | 1.59 | **LOSS** |
| 783 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 60 | 9077.4 | -48 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 784 | SMCI | 08-11 13:40 | 08-11 14:30 | 45.82 | 45.56 | 197 | 9026.54 | -51.22 | -0.57% | 0.48R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 785 | QCOM | 08-11 13:45 | 08-11 14:05 | 150.85 | 149.87 | 59 | 8900.15 | -57.82 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 786 | ASML | 08-11 13:45 | 08-11 14:10 | 731.05 | 728.98 | 12 | 8772.6 | -24.84 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.3 | ↓729.69 | 2.0012 | 2.82 | **LOSS** |
| 787 | CELH | 08-11 13:50 | 08-11 15:35 | 53.12 | 53.69 | 168 | 8924.16 | +95.76 | +1.07% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.43 | ↑53.08 | 0.4977 | 1.13 | **WIN** |
| 788 | DELL | 08-11 14:00 | 08-11 14:45 | 139.84 | 139.33 | 99 | 13844.16 | -50.49 | -0.36% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 75.62 | ↑138.62 | 0.4975 | 1.02 | **LOSS** |
| 789 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 45 | 9152.55 | -42.3 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 790 | AAPL | 08-12 13:30 | 08-12 13:40 | 229.97 | 227.32 | 42 | 9658.74 | -111.3 | -1.15% | 1.64R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 791 | GE | 08-12 13:30 | 08-12 13:50 | 278.17 | 277 | 32 | 8901.44 | -37.44 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.64 | ↓277.39 | 0.1867 | 2.28 | **LOSS** |
| 792 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 39 | 8915.4 | +124.41 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 793 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 11 | 8658.98 | -81.62 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 794 | PYPL | 08-12 13:35 | 08-12 15:20 | 68.23 | 68.31 | 131 | 8938.13 | +10.48 | +0.12% | 0.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.91 | ↓67.97 | 0.1445 | 1.29 | **WIN** |
| 795 | BAC | 08-12 13:35 | 08-12 15:20 | 46.99 | 47.4 | 192 | 9022.08 | +78.72 | +0.87% | 1.24R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 796 | ORCL | 08-12 13:40 | 08-12 13:55 | 257.12 | 253.04 | 35 | 8999.2 | -142.8 | -1.59% | 2.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.72 | ↓255.28 | 0.2684 | 2.37 | **LOSS** |
| 797 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 38 | 8909.86 | -49.02 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 798 | NVO | 08-13 13:30 | 08-13 15:15 | 50.45 | 51.05 | 180 | 9081 | +108 | +1.19% | 1.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 799 | NKE | 08-13 13:35 | 08-13 15:20 | 76.3 | 77.45 | 118 | 9003.4 | +135.7 | +1.51% | 2.16R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.11 | ↑75.8 | 0.166 | 1.79 | **WIN** |
| 800 | LLY | 08-13 13:40 | 08-13 15:25 | 649.59 | 655.6 | 13 | 8444.67 | +78.13 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.81 | ↑648.65 | 1.0009 | 1.68 | **WIN** |
| 801 | HD | 08-13 13:40 | 08-13 15:25 | 402.15 | 404.58 | 22 | 8847.3 | +53.46 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 802 | V | 08-13 13:40 | 08-13 14:30 | 342.35 | 341.73 | 26 | 8901.1 | -16.12 | -0.18% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.22 | ↓341.12 | 1.1232 | 2.59 | **LOSS** |
| 803 | IBM | 08-13 14:00 | 08-13 14:55 | 240.26 | 240.08 | 58 | 13935.08 | -10.44 | -0.07% | 0.08R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 804 | AAPL | 08-13 14:15 | 08-13 15:05 | 232.63 | 232.52 | 60 | 13957.8 | -6.6 | -0.05% | 0.06R | 50m | market | breakeven-stop | trend | trend | neutral | 75.62 | ↑231.66 | 0.7139 | 1.35 | **LOSS** |
| 805 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.34 | 195.5 | 71 | 13940.14 | -59.64 | -0.43% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 806 | CRM | 08-13 14:50 | 08-13 15:45 | 234.24 | 234.09 | 59 | 13820.16 | -8.85 | -0.06% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 807 | ADBE | 08-13 14:50 | 08-13 15:30 | 345.06 | 347.38 | 20 | 13802.4 | +46.4 | +0.67% | 0.88R | 40m | market | trim-profit-target | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 808 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.06 | 345.2 | 20 | 13802.4 | +2.8 | +0.04% | 0.05R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 809 | SNOW | 08-13 15:30 | 08-13 15:50 | 198.26 | 197.07 | 70 | 13878.2 | -83.3 | -0.6% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 66.67 | ↑195.55 | 0.9436 | 1.28 | **LOSS** |
| 810 | LLY | 08-13 15:55 | 08-13 16:25 | 660.99 | 658.2 | 21 | 13880.79 | -58.59 | -0.42% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 79.62 | ↑654.13 | 3.3587 | 1.15 | **LOSS** |
| 811 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 53 | 9664.02 | -6.89 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 812 | COST | 08-14 14:30 | 08-14 15:20 | 987 | 985.87 | 14 | 13818 | -15.82 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 67.37 | ↑984.9 | 1.7164 | 1.42 | **LOSS** |
| 813 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 69 | 14091.87 | -66.93 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 814 | LLY | 08-14 17:50 | 08-14 19:35 | 679.38 | 682.21 | 20 | 13587.6 | +56.6 | +0.42% | 0.6R | 105m | market | timeout | trend | trend | neutral | 63.97 | ↑668.61 | 1.092 | 1.48 | **WIN** |
| 815 | NVO | 08-15 13:30 | 08-15 15:15 | 51.65 | 51.93 | 163 | 8418.95 | +45.64 | +0.54% | 0.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 816 | LLY | 08-15 13:35 | 08-15 13:55 | 696.07 | 689.48 | 12 | 8352.84 | -79.08 | -0.95% | 1.36R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.05 | ↓693.66 | 2.9049 | 3.21 | **LOSS** |
| 817 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 818 | UBER | 08-15 14:15 | 08-15 15:05 | 93.38 | 92.91 | 150 | 14007 | -70.5 | -0.5% | 0.47R | 50m | market | early-reversal | breakout | breakout | neutral | 72.71 | ↓92.37 | 0.3724 | 1.4 | **LOSS** |
| 819 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 820 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 821 | SNOW | 08-15 15:10 | 08-15 16:55 | 199 | 199.73 | 70 | 13930 | +51.1 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 65.32 | ↑197.7 | 0.874 | 2.18 | **WIN** |
| 822 | INTC | 08-15 16:30 | 08-15 17:20 | 25.42 | 25.38 | 305 | 7753.1 | -12.2 | -0.16% | 0.11R | 50m | market | stagnation | trend | trend | noisyHighBeta | 75.74 | ↑24.77 | 0.1672 | 1.51 | **LOSS** |
| 823 | LLY | 08-15 17:25 | 08-15 17:45 | 705.17 | 701.54 | 19 | 13398.23 | -68.97 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 77.6 | ↑692.99 | 3.1845 | 2.44 | **LOSS** |
| 824 | NOW | 08-15 17:30 | 08-15 18:30 | 867.12 | 866.18 | 16 | 13873.92 | -15.04 | -0.11% | 0.16R | 60m | market | stagnation | trend | trend | neutral | 76.55 | ↑858.94 | 2.2062 | 4.24 | **LOSS** |
| 825 | NVO | 08-18 13:35 | 08-18 13:55 | 54.86 | 54.25 | 154 | 8448.44 | -93.94 | -1.11% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.82 | ↓54.61 | 0.5586 | 2.83 | **LOSS** |
| 826 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.73 | 92.87 | 98 | 8989.54 | +111.72 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 827 | MDB | 08-18 13:45 | 08-18 15:30 | 224.96 | 228.2 | 40 | 8998.4 | +129.6 | +1.44% | 1.21R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.75 | ↑222.91 | 1.3885 | 1.12 | **WIN** |
| 828 | UNH | 08-18 13:45 | 08-18 14:05 | 311.74 | 309.63 | 28 | 8728.72 | -59.08 | -0.68% | 0.45R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.86 | ↓310.53 | 0.2466 | 1.48 | **LOSS** |
| 829 | NFLX | 08-18 14:20 | 08-18 14:40 | 1251.07 | 1244.52 | 11 | 13761.77 | -72.05 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 70.33 | ↑1241.88 | 2.2788 | 1.17 | **LOSS** |
| 830 | BAC | 08-18 14:20 | 08-18 14:55 | 47.52 | 47.36 | 294 | 13970.88 | -47.04 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 77.6 | ↑47.27 | 0.0877 | 1.23 | **LOSS** |
| 831 | TGT | 08-18 14:45 | 08-18 15:05 | 106.02 | 105.57 | 132 | 13994.64 | -59.4 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 832 | ELF | 08-18 15:45 | 08-18 16:30 | 122.52 | 122.12 | 62 | 7596.24 | -24.8 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 61.15 | ↑121.52 | 0.8956 | 1.3 | **LOSS** |
| 833 | COIN | 08-18 15:50 | 08-18 16:40 | 322.16 | 320.74 | 43 | 13852.88 | -61.06 | -0.44% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 77.62 | ↑314.48 | 1.8812 | 1.29 | **LOSS** |
| 834 | MDB | 08-18 16:20 | 08-18 16:40 | 229.95 | 228.77 | 60 | 13797 | -70.8 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 78.87 | ↑225.63 | 1.3761 | 1.8 | **LOSS** |
| 835 | ARM | 08-18 17:30 | 08-18 18:05 | 141.45 | 140.94 | 98 | 13862.1 | -49.98 | -0.36% | 0.51R | 35m | market | early-reversal | trend | trend | neutral | 69.63 | ↑139.81 | 0.4246 | 1.95 | **LOSS** |
| 836 | MDB | 08-18 17:40 | 08-18 18:05 | 231.22 | 230.58 | 60 | 13873.2 | -38.4 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 71.17 | ↑226.26 | 0.9495 | 2.55 | **LOSS** |
| 837 | NVO | 08-19 13:30 | 08-19 13:55 | 54.76 | 54.71 | 166 | 9090.16 | -8.3 | -0.09% | 0.11R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 838 | CAT | 08-19 13:40 | 08-19 15:25 | 417.64 | 419.47 | 21 | 8770.44 | +38.43 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.51 | ↑416.8 | 1.2247 | 1.46 | **WIN** |
| 839 | LOW | 08-19 13:40 | 08-19 15:20 | 256.69 | 256.49 | 35 | 8984.15 | -7 | -0.08% | 0.11R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 840 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 26 | 8813.22 | -107.12 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 841 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.92 | 129.88 | 107 | 14008.44 | -111.28 | -0.79% | 0.86R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 842 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 843 | UBER | 08-19 15:30 | 08-19 15:55 | 96.51 | 96.21 | 145 | 13993.95 | -43.5 | -0.31% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 62.34 | ↑95.31 | 0.5087 | 2.04 | **LOSS** |
| 844 | DIS | 08-20 13:40 | 08-20 14:00 | 117.69 | 116.86 | 77 | 9062.13 | -63.91 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.15 | ↓117.14 | 0.2421 | 1.5 | **LOSS** |
| 845 | HPE | 08-20 15:20 | 08-20 15:45 | 21.04 | 20.96 | 342 | 7195.68 | -27.36 | -0.38% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.01 | ↑20.8 | -0.1327 | 1.37 | **LOSS** |
| 846 | CRWD | 08-20 15:25 | 08-20 15:45 | 417.63 | 416.48 | 23 | 9605.49 | -26.45 | -0.28% | 0.4R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.51 | ↑414.64 | -0.8738 | 3.49 | **LOSS** |
| 847 | DELL | 08-21 13:35 | 08-21 13:55 | 130.05 | 128.69 | 69 | 8973.45 | -93.84 | -1.05% | 1.38R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 848 | LLY | 08-21 13:40 | 08-21 14:00 | 715.64 | 711.32 | 12 | 8587.68 | -51.84 | -0.6% | 0.86R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 849 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.45 | 154.9 | 49 | 7715.05 | -124.95 | -1.62% | 0.81R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 850 | SMCI | 08-21 14:25 | 08-21 14:45 | 42.93 | 42.67 | 326 | 13995.18 | -84.76 | -0.61% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 55.76 | ↑42.61 | 0.1509 | 1.04 | **LOSS** |
| 851 | NVO | 08-21 15:00 | 08-21 16:45 | 55.45 | 55.62 | 252 | 13973.4 | +42.84 | +0.31% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.11 | ↑55.06 | 0.2703 | 1.08 | **WIN** |
| 852 | MA | 08-22 13:30 | 08-22 14:20 | 598.31 | 598.12 | 15 | 8974.65 | -2.85 | -0.03% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.88 | ↓597.64 | 0.9013 | 1.99 | **LOSS** |
| 853 | MU | 08-22 13:35 | 08-22 13:55 | 117.4 | 116.72 | 84 | 9861.6 | -57.12 | -0.58% | 0.71R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 854 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 36 | 8242.92 | +72.72 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 855 | V | 08-22 13:35 | 08-22 15:20 | 348.28 | 349.78 | 26 | 9055.28 | +39 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.17 | ↑347.52 | 0.5668 | 1.32 | **WIN** |
| 856 | LMT | 08-22 13:40 | 08-22 14:05 | 452.09 | 449.1 | 21 | 9493.89 | -62.79 | -0.66% | 0.94R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.62 | ↓451.64 | 0.546 | 3.87 | **LOSS** |
| 857 | QCOM | 08-22 13:45 | 08-22 15:30 | 156.3 | 158.62 | 58 | 9065.4 | +134.56 | +1.48% | 2.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.52 | ↑155.78 | 0.4832 | 1.59 | **WIN** |
| 858 | AMD | 08-22 14:00 | 08-22 15:45 | 165.72 | 167.61 | 84 | 13920.48 | +158.76 | +1.14% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 859 | ASML | 08-22 14:00 | 08-22 15:55 | 752.4 | 753.53 | 11 | 8276.4 | +12.43 | +0.15% | 0.21R | 115m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓745.02 | 2.4897 | 1.11 | **WIN** |
| 860 | HD | 08-22 14:00 | 08-22 15:45 | 404.92 | 413.97 | 20 | 8098.4 | +181 | +2.24% | 3.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 861 | TXN | 08-22 14:00 | 08-22 15:45 | 206.66 | 207.64 | 40 | 8266.4 | +39.2 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 862 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 37 | 8302.43 | +93.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 863 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 11 | 8261.88 | -49.61 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 864 | AVGO | 08-22 14:05 | 08-22 15:45 | 297.85 | 297.28 | 28 | 8339.8 | -15.96 | -0.19% | 0.15R | 100m | market | breakeven-stop | breakout | breakout | extendedBreakout | 81.61 | ↑292.68 | 1.7299 | 1.14 | **LOSS** |
| 865 | MU | 08-22 14:05 | 08-22 14:55 | 120.04 | 119.97 | 69 | 8282.76 | -4.83 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 866 | TSM | 08-22 14:05 | 08-22 15:50 | 231.38 | 233.15 | 36 | 8329.68 | +63.72 | +0.76% | 0.95R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 867 | PANW | 08-22 14:05 | 08-22 14:55 | 186.52 | 186 | 44 | 8206.88 | -22.88 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 86.27 | ↑185.01 | 0.8172 | 1.31 | **LOSS** |
| 868 | SNOW | 08-22 14:05 | 08-22 14:55 | 199.25 | 199.12 | 41 | 8169.25 | -5.33 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 869 | PYPL | 08-22 14:05 | 08-22 15:50 | 69.17 | 69.12 | 120 | 8300.4 | -6 | -0.07% | 0.07R | 105m | market | stagnation | breakout | breakout | extendedBreakout | 83.9 | ↑68.47 | 0.316 | 1.25 | **LOSS** |
| 870 | NKE | 08-22 14:05 | 08-22 15:50 | 78.22 | 78.85 | 107 | 8369.54 | +67.41 | +0.81% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.74 | ↑77.22 | 0.4594 | 1.2 | **WIN** |
| 871 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.51 | 12.82 | 1122 | 14036.22 | +347.82 | +2.48% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 872 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 873 | AMAT | 08-22 14:10 | 08-22 15:00 | 164.38 | 164.27 | 51 | 8383.38 | -5.61 | -0.07% | 0.08R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 874 | MSFT | 08-22 14:40 | 08-22 15:25 | 509.85 | 508.18 | 27 | 13765.95 | -45.09 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 73.45 | ↓507.24 | 0.8376 | 2.69 | **LOSS** |
| 875 | ORCL | 08-22 14:40 | 08-22 15:25 | 237.39 | 236.72 | 59 | 14006.01 | -39.53 | -0.28% | 0.24R | 45m | market | early-reversal | trend | trend | neutral | 69.38 | ↑234.55 | 0.7442 | 1.06 | **LOSS** |
| 876 | BAC | 08-22 14:40 | 08-22 16:25 | 49.13 | 49.41 | 285 | 14002.05 | +79.8 | +0.57% | 0.77R | 105m | market | timeout | trend | trend | neutral | 67.58 | ↑48.84 | 0.2138 | 1.05 | **WIN** |
| 877 | MRVL | 08-22 14:40 | 08-22 15:05 | 74.57 | 74.01 | 188 | 14019.16 | -105.28 | -0.75% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 79.5 | ↑73.48 | 0.8717 | 1.69 | **LOSS** |
| 878 | HPE | 08-22 14:40 | 08-22 16:25 | 22.43 | 22.48 | 622 | 13951.46 | +31.1 | +0.22% | 0.18R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑22.16 | 0.1518 | 1.31 | **WIN** |
| 879 | IBM | 08-22 14:40 | 08-22 15:05 | 243.42 | 242.57 | 57 | 13874.94 | -48.45 | -0.35% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 76.51 | ↓242.41 | 0.8806 | 2.11 | **LOSS** |
| 880 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.86 | 1096 | 14083.6 | +10.96 | +0.08% | 0.09R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 881 | GOOGL | 08-22 17:10 | 08-22 18:25 | 205.59 | 207.65 | 34 | 13980.12 | +70.04 | +1% | 1.43R | 75m | market | trim-profit-target | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 882 | GOOGL | 08-22 17:10 | 08-22 18:55 | 205.59 | 206.85 | 34 | 13980.12 | +42.84 | +0.61% | 0.87R | 105m | market | timeout | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 883 | HPE | 08-22 17:25 | 08-22 17:45 | 22.7 | 22.52 | 615 | 13960.5 | -110.7 | -0.79% | 1.13R | 20m | market | stop-loss | trend | trend | neutral | 74.6 | ↑22.44 | 0.0513 | 1.42 | **LOSS** |
| 884 | NVO | 08-25 13:35 | 08-25 14:30 | 57.77 | 57.78 | 157 | 9069.89 | +1.57 | +0.02% | 0.03R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.38 | ↓57.54 | 0.126 | 2.86 | **WIN** |
| 885 | NKE | 08-25 13:35 | 08-25 14:20 | 79.57 | 79.19 | 114 | 9070.98 | -43.32 | -0.48% | 0.69R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.7 | ↓79.26 | 0.0895 | 1.56 | **LOSS** |
| 886 | RIVN | 08-25 13:45 | 08-25 14:25 | 13.23 | 13.25 | 692 | 9155.16 | +13.84 | +0.15% | 0.12R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 73.47 | ↓13.1 | 0.071 | 1.29 | **WIN** |
| 887 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 42 | 9644.46 | +103.74 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 888 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.69 | 87.91 | 159 | 13942.71 | +34.98 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 889 | NOW | 08-27 13:35 | 08-27 15:05 | 881.35 | 880.53 | 10 | 8813.5 | -8.2 | -0.09% | 0.13R | 90m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 890 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 48 | 9666.72 | +171.84 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 891 | MDB | 08-27 13:45 | 08-27 14:35 | 283.52 | 282.55 | 31 | 8789.12 | -30.07 | -0.34% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.96 | ↑280.22 | 19.2424 | 1.88 | **LOSS** |
| 892 | MU | 08-27 16:10 | 08-27 16:30 | 118.44 | 117.66 | 118 | 13975.92 | -92.04 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑117.42 | 0.3013 | 1.79 | **LOSS** |
| 893 | COIN | 08-28 13:30 | 08-28 13:50 | 314.82 | 312.1 | 28 | 8814.96 | -76.16 | -0.86% | 1.09R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↓314.9 | 0.239 | 3.36 | **LOSS** |
| 894 | AMD | 08-28 13:35 | 08-28 13:50 | 170.19 | 167.97 | 52 | 8849.88 | -115.44 | -1.3% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 895 | MU | 08-28 13:35 | 08-28 13:55 | 121.02 | 118.84 | 69 | 8350.38 | -150.42 | -1.8% | 2.12R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 896 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 63 | 9046.17 | -61.11 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 897 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 43 | 9020.97 | +59.77 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 898 | ELF | 08-28 13:45 | 08-28 15:30 | 128.02 | 130.74 | 70 | 8961.4 | +190.4 | +2.12% | 2.55R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.37 | ↑127.48 | 0.7557 | 3.86 | **WIN** |
| 899 | SNOW | 08-28 13:55 | 08-28 14:15 | 233.69 | 239.44 | 38 | 8880.22 | +218.5 | +2.46% | 1.23R | 20m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.34 | ↑229.2 | 8.5987 | 1.54 | **WIN** |
| 900 | INTU | 08-28 14:30 | 08-28 15:25 | 670.57 | 669.31 | 20 | 13411.4 | -25.2 | -0.19% | 0.27R | 55m | market | stagnation | trend | trend | neutral | 79.04 | ↑665.43 | 1.5439 | 1.48 | **LOSS** |
| 901 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 902 | ARM | 08-28 15:40 | 08-28 16:35 | 143.13 | 142.97 | 97 | 13883.61 | -15.52 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 76.32 | ↑141.61 | 0.4577 | 2.69 | **LOSS** |
| 903 | SNOW | 08-28 17:05 | 08-28 18:50 | 242.32 | 245.9 | 57 | 13812.24 | +204.06 | +1.48% | 1.36R | 105m | market | timeout | breakout | breakout | neutral | 85.04 | ↑234.12 | 0.6388 | 1.89 | **WIN** |
| 904 | RIVN | 08-28 17:35 | 08-28 17:55 | 13.44 | 13.4 | 1048 | 14085.12 | -41.92 | -0.3% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑13.24 | 0.0614 | 4.12 | **LOSS** |
| 905 | CELH | 08-29 14:00 | 08-29 14:55 | 63.05 | 62.85 | 203 | 12799.15 | -40.6 | -0.32% | 0.16R | 55m | market | stagnation | breakout | breakout | neutral | 75.57 | ↑62.18 | 0.7881 | 1.23 | **LOSS** |
| 906 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.67 | 156.35 | 89 | 14032.63 | -117.48 | -0.84% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 907 | RIVN | 09-02 17:30 | 09-02 17:50 | 13.56 | 13.52 | 1039 | 14088.84 | -41.56 | -0.29% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.1 | ↑13.36 | 0.0598 | 1.15 | **LOSS** |
| 908 | MRVL | 09-02 17:40 | 09-02 19:15 | 63.48 | 64.13 | 110 | 13965.6 | +71.5 | +1.02% | 1.46R | 95m | market | trim-profit-target | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 909 | MRVL | 09-02 17:40 | 09-02 19:25 | 63.48 | 63.96 | 110 | 13965.6 | +52.8 | +0.76% | 1.09R | 105m | market | timeout | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 910 | HPE | 09-03 13:30 | 09-03 13:50 | 22.98 | 22.75 | 394 | 9054.12 | -90.62 | -1% | 1.43R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.72 | ↓22.97 | 0.0741 | 1.25 | **LOSS** |
| 911 | UBER | 09-03 13:35 | 09-03 13:55 | 93.92 | 93.01 | 96 | 9016.32 | -87.36 | -0.97% | 1.39R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.46 | ↓93.4 | 0.0909 | 1.57 | **LOSS** |
| 912 | ASML | 09-03 13:45 | 09-03 14:35 | 736.65 | 735.99 | 12 | 8839.8 | -7.92 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.6 | ↑732.83 | 2.2307 | 1.33 | **LOSS** |
| 913 | RIVN | 09-03 14:05 | 09-03 15:50 | 14.53 | 14.88 | 576 | 8369.28 | +201.6 | +2.41% | 1.28R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 81.16 | ↑14.25 | 0.2065 | 1.19 | **WIN** |
| 914 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 915 | TSM | 09-03 14:40 | 09-03 15:20 | 231.89 | 230.87 | 60 | 13913.4 | -61.2 | -0.44% | 0.63R | 40m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 916 | AVGO | 09-03 14:45 | 09-03 15:25 | 303.7 | 302.19 | 45 | 13666.5 | -67.95 | -0.5% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 69.6 | ↑299.96 | 1.3055 | 1.54 | **LOSS** |
| 917 | NFLX | 09-03 15:05 | 09-03 15:25 | 1225.4 | 1217.24 | 11 | 13479.4 | -89.76 | -0.67% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 76.17 | ↑1213.16 | 2.2553 | 1.11 | **LOSS** |
| 918 | DELL | 09-03 16:55 | 09-03 17:15 | 123.92 | 123.03 | 112 | 13879.04 | -99.68 | -0.72% | 1.03R | 20m | market | early-reversal | trend | trend | neutral | 75.27 | ↑122.18 | 0.2413 | 3.54 | **LOSS** |
| 919 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.39 | 100.15 | 84 | 8348.76 | +63.84 | +0.76% | 0.75R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 920 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 584 | 14086.08 | +81.76 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 921 | DIS | 09-04 14:30 | 09-04 16:05 | 118.6 | 118.48 | 117 | 13876.2 | -14.04 | -0.1% | 0.14R | 95m | market | stagnation | trend | trend | neutral | 76.09 | ↑117.94 | 0.4323 | 1.34 | **LOSS** |
| 922 | SMCI | 09-04 14:35 | 09-04 14:55 | 40.74 | 40.55 | 343 | 13973.82 | -65.17 | -0.47% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑40.32 | 0.1624 | 1.17 | **LOSS** |
| 923 | AMAT | 09-04 14:35 | 09-04 16:20 | 157.88 | 157.87 | 88 | 13893.44 | -0.88 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 76.82 | ↑156.79 | 0.7312 | 1.04 | **LOSS** |
| 924 | ASML | 09-04 15:00 | 09-04 15:55 | 753.53 | 752.86 | 18 | 13563.54 | -12.06 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 75.61 | ↑746.98 | 4.9787 | 1.51 | **LOSS** |
| 925 | IBM | 09-04 15:00 | 09-04 16:45 | 246.47 | 248.12 | 56 | 13802.32 | +92.4 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 78.13 | ↑244.83 | 0.7761 | 1.49 | **WIN** |
| 926 | WMT | 09-04 15:40 | 09-04 16:00 | 101.22 | 100.92 | 138 | 13968.36 | -41.4 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 78.63 | ↑100.42 | 0.3938 | 1.09 | **LOSS** |
| 927 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 42 | 8953.56 | -53.34 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 928 | CRM | 09-05 13:35 | 09-05 14:55 | 247.34 | 247.15 | 36 | 8904.24 | -6.84 | -0.08% | 0.1R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.66 | ↓246.29 | 0.5948 | 1.57 | **LOSS** |
| 929 | ADBE | 09-05 13:35 | 09-05 14:10 | 353.01 | 349.79 | 25 | 8825.25 | -80.5 | -0.91% | 1.3R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.68 | ↓350.85 | 1.6664 | 4.86 | **LOSS** |
| 930 | DDOG | 09-05 13:35 | 09-05 14:20 | 134.43 | 133.59 | 67 | 9006.81 | -56.28 | -0.62% | 0.89R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.69 | ↓133.92 | 0.254 | 1.7 | **LOSS** |
| 931 | PYPL | 09-05 13:35 | 09-05 13:55 | 69.89 | 69.49 | 128 | 8945.92 | -51.2 | -0.57% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.23 | ↓69.37 | 0.215 | 1.68 | **LOSS** |
| 932 | LRCX | 09-05 13:35 | 09-05 14:10 | 102.41 | 101.86 | 88 | 9012.08 | -48.4 | -0.54% | 0.61R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.22 | ↓102.13 | 0.2613 | 3.66 | **LOSS** |
| 933 | KLAC | 09-05 13:35 | 09-05 14:15 | 886.49 | 882.17 | 9 | 7978.41 | -38.88 | -0.49% | 0.7R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 934 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 36 | 8458.56 | -30.6 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 935 | TSM | 09-05 13:40 | 09-05 14:05 | 241.79 | 240.7 | 37 | 8946.23 | -40.33 | -0.45% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.7 | ↓240.79 | 1.3629 | 2.93 | **LOSS** |
| 936 | PANW | 09-05 13:40 | 09-05 14:00 | 196.18 | 195.28 | 70 | 13732.6 | -63 | -0.46% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 937 | CRWD | 09-05 13:40 | 09-05 13:55 | 417.46 | 412.62 | 23 | 9601.58 | -111.32 | -1.16% | 1.53R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 61.48 | ↓415.34 | 0.438 | 1.2 | **LOSS** |
| 938 | SNOW | 09-05 13:40 | 09-05 14:10 | 225.81 | 224.43 | 43 | 9709.83 | -59.34 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.3 | ↓224.98 | 0.5106 | 1.54 | **LOSS** |
| 939 | RIVN | 09-05 13:40 | 09-05 14:15 | 14.19 | 14.09 | 636 | 9024.84 | -63.6 | -0.7% | 0.56R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.07 | ↓13.97 | 0.0939 | 2.1 | **LOSS** |
| 940 | ASML | 09-05 13:45 | 09-05 14:10 | 778.52 | 775.04 | 11 | 8563.72 | -38.28 | -0.45% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.34 | ↓775.83 | 5.0424 | 2.8 | **LOSS** |
| 941 | UNH | 09-05 13:45 | 09-05 14:10 | 314.49 | 313.08 | 28 | 8805.72 | -39.48 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 942 | RIVN | 09-05 14:25 | 09-05 14:45 | 14.39 | 14.26 | 903 | 12994.17 | -117.39 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 74.53 | ↑14.21 | 0.189 | 1.13 | **LOSS** |
| 943 | SNOW | 09-08 13:35 | 09-08 14:40 | 228.48 | 228.13 | 39 | 8910.72 | -13.65 | -0.15% | 0.21R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 944 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 41 | 8987.61 | -72.16 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 945 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 53 | 9012.65 | -40.81 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 946 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 11 | 8418.52 | -46.86 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 947 | ORCL | 09-08 13:40 | 09-08 14:15 | 238.99 | 237.32 | 38 | 9081.62 | -63.46 | -0.7% | 0.43R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.79 | ↓237.83 | 1.4607 | 1.42 | **LOSS** |
| 948 | COIN | 09-08 14:00 | 09-08 14:20 | 302.97 | 300.07 | 46 | 13936.62 | -133.4 | -0.96% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↓300.78 | 0.926 | 1.12 | **LOSS** |
| 949 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 111 | 13889.43 | -1.11 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 950 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 951 | LLY | 09-08 16:55 | 09-08 17:15 | 732.03 | 729.82 | 19 | 13908.57 | -41.99 | -0.3% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 70.55 | ↑726.19 | 0.3824 | 8.21 | **LOSS** |
| 952 | AMD | 09-09 13:35 | 09-09 13:50 | 154.08 | 152.45 | 58 | 8936.64 | -94.54 | -1.06% | 1.47R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.54 | ↓153.27 | 0.4219 | 3.06 | **LOSS** |
| 953 | JPM | 09-09 14:35 | 09-09 16:00 | 297.17 | 296.74 | 47 | 13966.99 | -20.21 | -0.14% | 0.19R | 85m | market | stagnation | trend | trend | neutral | 73.4 | ↑295.1 | 0.816 | 2.37 | **LOSS** |
| 954 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 955 | BAC | 09-09 15:25 | 09-09 15:50 | 50.52 | 50.35 | 277 | 13994.04 | -47.09 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.86 | ↑50.04 | 0.2452 | 1.07 | **LOSS** |
| 956 | NVO | 09-09 15:35 | 09-09 15:55 | 53.91 | 53.69 | 259 | 13962.69 | -56.98 | -0.41% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 67.34 | ↑53.19 | 0.0258 | 3.28 | **LOSS** |
| 957 | MU | 09-09 16:00 | 09-09 17:45 | 134.73 | 134.95 | 104 | 14011.92 | +22.88 | +0.16% | 0.23R | 105m | market | timeout | trend | trend | neutral | 75.3 | ↑132.83 | 0.5719 | 1.14 | **WIN** |
| 958 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.09 | 229.03 | 36 | 8319.24 | -74.16 | -0.89% | 0.9R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 959 | NOW | 09-10 13:45 | 09-10 14:05 | 944.28 | 937.88 | 9 | 8498.52 | -57.6 | -0.68% | 0.97R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.39 | ↓938.4 | 1.3648 | 1.13 | **LOSS** |
| 960 | MDB | 09-10 13:45 | 09-10 14:05 | 344.08 | 339.74 | 26 | 8946.08 | -112.84 | -1.26% | 1.14R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.58 | ↓340.58 | 2.8005 | 1.29 | **LOSS** |
| 961 | ARM | 09-10 13:55 | 09-10 15:40 | 149.21 | 151.3 | 60 | 8952.6 | +125.4 | +1.4% | 0.82R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.83 | ↑147.98 | 1.9869 | 2.59 | **WIN** |
| 962 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 963 | NVO | 09-10 14:30 | 09-10 15:20 | 54.95 | 54.78 | 254 | 13957.3 | -43.18 | -0.31% | 0.25R | 50m | market | stagnation | trend | trend | neutral | 68.11 | ↑54.39 | 0.1926 | 1.39 | **LOSS** |
| 964 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 12 | 9352.92 | +76.68 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 965 | INTU | 09-11 13:45 | 09-11 14:05 | 665.74 | 660.83 | 13 | 8654.62 | -63.83 | -0.74% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.05 | ↓663.92 | 1.8587 | 1.14 | **LOSS** |
| 966 | CAT | 09-11 14:00 | 09-11 14:20 | 435.28 | 432.88 | 19 | 8270.32 | -45.6 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.28 | ↓433.3 | 1.7475 | 5.99 | **LOSS** |
| 967 | NKE | 09-11 14:00 | 09-11 14:20 | 75.34 | 74.98 | 186 | 14013.24 | -66.96 | -0.48% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 79.46 | ↓74.98 | 0.278 | 1.24 | **LOSS** |
| 968 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 31 | 14038.66 | +81.22 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 969 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 14038.66 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 970 | QCOM | 09-11 14:35 | 09-11 16:20 | 160.5 | 160.77 | 87 | 13963.5 | +23.49 | +0.17% | 0.21R | 105m | market | timeout | trend | trend | neutral | 66.34 | ↑159.77 | 0.6266 | 1.1 | **WIN** |
| 971 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 972 | LMT | 09-11 15:50 | 09-11 17:35 | 471.28 | 471.02 | 29 | 13667.12 | -7.54 | -0.06% | 0.09R | 105m | market | stagnation | trend | trend | neutral | 64.97 | ↑468.4 | 1.8951 | 2.88 | **LOSS** |
| 973 | CELH | 09-11 17:05 | 09-11 17:45 | 58.57 | 58.34 | 237 | 13881.09 | -54.51 | -0.39% | 0.56R | 40m | market | early-reversal | trend | trend | neutral | 69.42 | ↑57.72 | 0.2782 | 1.2 | **LOSS** |
| 974 | MSFT | 09-12 13:40 | 09-12 15:25 | 506.95 | 510.56 | 19 | 9632.05 | +68.59 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.7 | ↑505.56 | 1.1579 | 1.6 | **WIN** |
| 975 | AAPL | 09-12 14:05 | 09-12 15:50 | 232.78 | 234.33 | 60 | 13966.8 | +93 | +0.67% | 0.77R | 105m | market | timeout | trend | trend | neutral | 64.82 | ↑230.73 | 0.4094 | 1.94 | **WIN** |
| 976 | PLTR | 09-12 14:50 | 09-12 15:10 | 168.19 | 166.62 | 83 | 13959.77 | -130.31 | -0.93% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 76.58 | ↑166.22 | 0.7275 | 1.3 | **LOSS** |
| 977 | ELF | 09-12 15:20 | 09-12 15:50 | 140.14 | 139.45 | 99 | 13873.86 | -68.31 | -0.49% | 0.6R | 30m | market | early-reversal | breakout | breakout | neutral | 73.82 | ↑138 | 0.4712 | 1.52 | **LOSS** |
| 978 | ADBE | 09-15 13:30 | 09-15 13:50 | 353.71 | 351.82 | 25 | 8842.75 | -47.25 | -0.53% | 0.69R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.56 | ↓353.28 | 0.554 | 2.33 | **LOSS** |
| 979 | SNOW | 09-15 13:30 | 09-15 15:15 | 224.15 | 226.66 | 40 | 8966 | +100.4 | +1.12% | 1.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.23 | ↑223.8 | 0.0256 | 1.74 | **WIN** |
| 980 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 36 | 9023.4 | -122.04 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 981 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 371 | 9152.57 | +237.44 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 982 | PANW | 09-15 13:40 | 09-15 15:25 | 200.01 | 200.8 | 45 | 9000.45 | +35.55 | +0.39% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.11 | ↑198.53 | 0.2926 | 1.15 | **WIN** |
| 983 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 984 | PYPL | 09-15 13:40 | 09-15 14:00 | 67.81 | 67.5 | 133 | 9018.73 | -41.23 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.9 | ↓67.57 | 0.1129 | 1.18 | **LOSS** |
| 985 | ASML | 09-15 13:45 | 09-15 15:30 | 842.18 | 858.92 | 10 | 8421.8 | +167.4 | +1.99% | 2.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.04 | ↑840.18 | 7.076 | 2.75 | **WIN** |
| 986 | UBER | 09-15 13:50 | 09-15 14:15 | 98.27 | 97.73 | 92 | 9040.84 | -49.68 | -0.55% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.22 | ↑96.75 | 0.4259 | 1.24 | **LOSS** |
| 987 | CRWD | 09-15 14:00 | 09-15 14:20 | 448.91 | 443.78 | 18 | 8080.38 | -92.34 | -1.14% | 1.48R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.35 | ↓443.63 | 2.1537 | 1.34 | **LOSS** |
| 988 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 989 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.45 | 232.8 | 59 | 13773.55 | -38.35 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 990 | DDOG | 09-15 15:45 | 09-15 16:10 | 139.44 | 138.77 | 100 | 13944 | -67 | -0.48% | 0.66R | 25m | market | early-reversal | breakout | breakout | neutral | 73.47 | ↑137.99 | 0.219 | 3.72 | **LOSS** |
| 991 | NET | 09-15 16:20 | 09-15 16:55 | 229.14 | 228.05 | 61 | 13977.54 | -66.49 | -0.48% | 0.69R | 35m | market | early-reversal | trend | trend | neutral | 78.33 | ↑225.88 | 1.3733 | 2.17 | **LOSS** |
| 992 | DELL | 09-15 16:30 | 09-15 17:05 | 127.82 | 127.45 | 109 | 13932.38 | -40.33 | -0.29% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 79.65 | ↑126.59 | 0.2823 | 2.34 | **LOSS** |
| 993 | RIVN | 09-15 17:40 | 09-15 18:00 | 13.75 | 13.61 | 563 | 7741.25 | -78.82 | -1.02% | 1.21R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 71.76 | ↓13.6 | 0.0304 | 1.37 | **LOSS** |
| 994 | QCOM | 09-16 13:30 | 09-16 15:15 | 163.06 | 164.65 | 51 | 8316.06 | +81.09 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.94 | ↑162.52 | 0.2241 | 2.43 | **WIN** |
| 995 | GE | 09-16 13:35 | 09-16 13:55 | 290.97 | 289.66 | 31 | 9020.07 | -40.61 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.6 | ↓290.04 | 0.7858 | 1.52 | **LOSS** |
| 996 | AMAT | 09-16 13:35 | 09-16 13:50 | 173.83 | 172.28 | 51 | 8865.33 | -79.05 | -0.89% | 1.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.64 | ↓173.47 | 0.4738 | 1.22 | **LOSS** |
| 997 | KLAC | 09-16 13:35 | 09-16 13:45 | 1001.63 | 993.43 | 9 | 9014.67 | -73.8 | -0.82% | 1.17R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.75 | ↓999.43 | 4.8186 | 3.58 | **LOSS** |
| 998 | AAPL | 09-16 13:50 | 09-16 14:40 | 239.89 | 239.22 | 40 | 9595.6 | -26.8 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.06 | ↓238.23 | 0.7303 | 1.96 | **LOSS** |
| 999 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.13 | 234.33 | 59 | 13872.67 | -47.2 | -0.34% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 1000 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 561 | 14137.2 | -44.88 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |

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

- ⚠️ **Profit factor 0.95 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T09:29:16.353Z*
