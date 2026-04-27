# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:11:34.729Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $9904.47 (-9.9%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 31.5% (315W / 685L) |
| Net P&L | $-9904.47 (-9.9%) |
| Gross profit | $40816.69 |
| Gross loss | $50721.16 |
| Profit factor | 0.8 |
| Avg win | $129.58 |
| Avg loss | $74.05 |
| Payoff ratio | 1.75:1 |
| Expectancy | $-9.9 / trade |
| Max drawdown | 11.05% |
| Sharpe ratio (ann.) | -2.57 |
| Trades / active day | 9.9 |
| Avg confidence | 98.75% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $90,095.53 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 600 | 33.67% | $-3670.07 | $-6.12 |
| Mid  10:30–11:30 | 160 | 34.38% | $-1218.13 | $-7.61 |
| Noon 11:30–13:00 | 170 | 25.29% | $-3212.33 | $-18.9 |
| PM   13:00–14:00 | 70 | 21.43% | $-1803.94 | $-25.77 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NET | 31 | 16 | 51.61% | $+864.39 | $+27.88 | 1.68 | eligible |
| NVDA | 20 | 8 | 40% | $+677.31 | $+33.87 | 2.04 | eligible |
| HD | 9 | 4 | 44.44% | $+572.44 | $+63.6 | 4.82 | eligible |
| GOOGL | 18 | 10 | 55.56% | $+564.65 | $+31.37 | 1.76 | eligible |
| GS | 14 | 9 | 64.29% | $+548.9 | $+39.21 | 2.92 | eligible |
| UNH | 15 | 8 | 53.33% | $+512.29 | $+34.15 | 1.72 | eligible |
| ORCL | 20 | 8 | 40% | $+457.67 | $+22.88 | 1.49 | eligible |
| MRVL | 24 | 10 | 41.67% | $+441.07 | $+18.38 | 1.54 | eligible |
| BA | 20 | 8 | 40% | $+387.93 | $+19.4 | 1.45 | eligible |
| SNOW | 21 | 7 | 33.33% | $+326.31 | $+15.54 | 1.38 | throttle |
| COIN | 23 | 6 | 26.09% | $+287.08 | $+12.48 | 1.15 | throttle |
| RIVN | 31 | 14 | 45.16% | $+283.16 | $+9.13 | 1.13 | eligible |
| TGT | 19 | 8 | 42.11% | $+267.07 | $+14.06 | 1.47 | eligible |
| MA | 4 | 2 | 50% | $+177.07 | $+44.27 | 9.66 | watch |
| INTC | 28 | 9 | 32.14% | $+159.99 | $+5.71 | 1.1 | throttle |
| ADP | 3 | 2 | 66.67% | $+151.04 | $+50.35 | 3.8 | watch |
| MU | 26 | 9 | 34.62% | $+113.24 | $+4.36 | 1.09 | throttle |
| ASML | 9 | 3 | 33.33% | $+98.77 | $+10.97 | 1.42 | throttle |
| SHOP | 18 | 7 | 38.89% | $+97.94 | $+5.44 | 1.12 | throttle |
| TSM | 14 | 5 | 35.71% | $+66.26 | $+4.73 | 1.13 | throttle |
| BAC | 10 | 4 | 40% | $+19.55 | $+1.96 | 1.06 | eligible |
| QCOM | 14 | 5 | 35.71% | $+8.74 | $+0.62 | 1.02 | throttle |
| IBM | 9 | 4 | 44.44% | $-2.56 | $-0.28 | 0.99 | throttle |
| GE | 15 | 7 | 46.67% | $-16.93 | $-1.13 | 0.97 | throttle |
| PLTR | 23 | 7 | 30.43% | $-33.19 | $-1.44 | 0.98 | throttle |
| V | 4 | 1 | 25% | $-40.72 | $-10.18 | 0.57 | watch |
| COST | 10 | 2 | 20% | $-41.15 | $-4.11 | 0.84 | throttle |
| JPM | 8 | 3 | 37.5% | $-41.54 | $-5.19 | 0.78 | throttle |
| SBUX | 12 | 4 | 33.33% | $-75.16 | $-6.26 | 0.8 | throttle |
| MSFT | 8 | 5 | 62.5% | $-94.19 | $-11.77 | 0.62 | throttle |
| CRM | 13 | 4 | 30.77% | $-110.19 | $-8.48 | 0.76 | throttle |
| AMAT | 14 | 4 | 28.57% | $-139.03 | $-9.93 | 0.71 | throttle |
| ARM | 19 | 6 | 31.58% | $-160.93 | $-8.47 | 0.77 | throttle |
| XOM | 7 | 2 | 28.57% | $-164.13 | $-23.45 | 0.38 | throttle |
| AAPL | 11 | 4 | 36.36% | $-188.31 | $-17.12 | 0.51 | throttle |
| UBER | 19 | 5 | 26.32% | $-232.87 | $-12.26 | 0.76 | throttle |
| KLAC | 12 | 4 | 33.33% | $-234.32 | $-19.53 | 0.59 | throttle |
| WMT | 6 | 1 | 16.67% | $-253.1 | $-42.18 | 0.01 | throttle |
| LOW | 6 | 0 | 0% | $-258.68 | $-43.11 | 0 | throttle |
| AMZN | 16 | 5 | 31.25% | $-264.67 | $-16.54 | 0.54 | throttle |
| TSLA | 23 | 7 | 30.43% | $-274.1 | $-11.92 | 0.8 | throttle |
| NKE | 16 | 5 | 31.25% | $-282.44 | $-17.65 | 0.66 | throttle |
| MDB | 17 | 3 | 17.65% | $-309.46 | $-18.2 | 0.69 | throttle |
| DDOG | 21 | 8 | 38.1% | $-343.37 | $-16.35 | 0.74 | throttle |
| TXN | 10 | 2 | 20% | $-357.58 | $-35.76 | 0.29 | throttle |
| ABNB | 10 | 1 | 10% | $-362.94 | $-36.29 | 0.25 | throttle |
| NVO | 16 | 4 | 25% | $-381.94 | $-23.87 | 0.49 | throttle |
| ELF | 23 | 8 | 34.78% | $-389.8 | $-16.95 | 0.67 | throttle |
| INTU | 6 | 0 | 0% | $-394.02 | $-65.67 | 0 | throttle |
| DIS | 10 | 2 | 20% | $-397.69 | $-39.77 | 0.28 | throttle |
| NFLX | 13 | 3 | 23.08% | $-410.76 | $-31.6 | 0.29 | throttle |
| AMD | 19 | 6 | 31.58% | $-418.35 | $-22.02 | 0.68 | throttle |
| LMT | 8 | 0 | 0% | $-421.07 | $-52.63 | 0 | throttle |
| LLY | 16 | 6 | 37.5% | $-425.14 | $-26.57 | 0.51 | throttle |
| CVX | 11 | 3 | 27.27% | $-433.62 | $-39.42 | 0.35 | throttle |
| PYPL | 12 | 2 | 16.67% | $-485.66 | $-40.47 | 0.13 | throttle |
| SMCI | 24 | 5 | 20.83% | $-497.37 | $-20.72 | 0.78 | throttle |
| LRCX | 11 | 2 | 18.18% | $-501.63 | $-45.6 | 0.25 | throttle |
| META | 16 | 2 | 12.5% | $-512.96 | $-32.06 | 0.4 | throttle |
| CAT | 11 | 2 | 18.18% | $-520.68 | $-47.33 | 0.12 | throttle |
| NOW | 10 | 1 | 10% | $-523.95 | $-52.39 | 0.08 | throttle |
| HPE | 13 | 3 | 23.08% | $-549.83 | $-42.29 | 0.22 | throttle |
| AVGO | 13 | 2 | 15.38% | $-575.01 | $-44.23 | 0.19 | throttle |
| DELL | 19 | 3 | 15.79% | $-667.14 | $-35.11 | 0.42 | throttle |
| ADBE | 8 | 1 | 12.5% | $-739.56 | $-92.44 | 0 | throttle |
| CRWD | 14 | 1 | 7.14% | $-837.51 | $-59.82 | 0.18 | throttle |
| PANW | 13 | 2 | 15.38% | $-992.33 | $-76.33 | 0.06 | throttle |
| CELH | 14 | 1 | 7.14% | $-1629.76 | $-116.41 | 0.08 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 540 | 177 | 32.78% | $-3905.46 | $-7.23 |
| trend | 460 | 138 | 30% | $-5999.01 | $-13.04 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 0 | 0% | $-55 | $-55 |
| extendedBreakout | 60 | 19 | 31.67% | $-502.97 | $-8.38 |
| noisyHighBeta | 31 | 9 | 29.03% | $-593.99 | $-19.16 |
| thinChop | 68 | 19 | 27.94% | $-764.44 | $-11.24 |
| falseBreakoutProne | 381 | 124 | 32.55% | $-3122.51 | $-8.2 |
| neutral | 459 | 144 | 31.37% | $-4865.56 | $-10.6 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | NVDA | 16 | 1.5 | $+17.68 | 4 | 5.69 | $+98.6 | 0.08% | 4.03 | promote |
| Symbol | HD | 5 | 3.41 | $+48.52 | 4 | 7.7 | $+82.47 | 0.04% | 4.63 | promote |
| Symbol | BA | 14 | 1.33 | $+14.11 | 6 | 1.73 | $+31.73 | 0.18% | 1.35 | promote |
| Symbol | NET | 16 | 1.63 | $+28.25 | 15 | 1.75 | $+27.49 | 0.28% | 1.36 | promote |
| Symbol | GS | 8 | 4.54 | $+48.42 | 6 | 1.92 | $+26.93 | 0.12% | 1.39 | promote |
| Symbol | MRVL | 10 | 1.66 | $+29.4 | 14 | 1.39 | $+10.51 | 0.33% | 0.99 | watch |
| Symbol | MU | 17 | 1.3 | $+10.68 | 9 | 0.89 | $-7.6 | 0.54% | 0.74 | watch |
| Symbol | INTC | 16 | 1.4 | $+22.41 | 12 | 0.74 | $-16.54 | 0.32% | 0.59 | watch |
| Symbol | TSM | 9 | 1.59 | $+19.57 | 5 | 0.48 | $-21.98 | 0.2% | 0.33 | watch |
| Symbol | TGT | 14 | 2.03 | $+30.16 | 5 | 0 | $-31.02 | 0.16% | 0 | watch |
| Symbol | CRM | 7 | 1.39 | $+12.41 | 6 | 0.14 | $-32.85 | 0.23% | 0.06 | watch |
| Symbol | GOOGL | 9 | 5 | $+97.97 | 9 | 0.4 | $-35.24 | 0.39% | 0.28 | watch |
| Behavior | thinChop | 35 | 1.47 | $+13.16 | 33 | 0.27 | $-37.12 | 1.3% | 0.18 | watch |
| Symbol | GE | 9 | 2.11 | $+23.92 | 6 | 0.4 | $-38.69 | 0.23% | 0.31 | watch |
| Symbol | COST | 7 | 1.65 | $+11.68 | 3 | 0 | $-40.97 | 0.12% | 0 | watch |
| Symbol | RIVN | 20 | 1.82 | $+37.97 | 11 | 0.59 | $-43.3 | 0.67% | 0.51 | watch |
| Symbol | TSLA | 12 | 1.44 | $+21.68 | 11 | 0.35 | $-48.57 | 0.57% | 0.28 | watch |
| Symbol | UNH | 10 | 3.08 | $+80.95 | 5 | 0.07 | $-59.44 | 0.32% | 0.02 | watch |
| Symbol | UBER | 12 | 1.86 | $+27.73 | 7 | 0 | $-80.8 | 0.57% | 0 | watch |
| Symbol | PLTR | 15 | 1.62 | $+40.97 | 8 | 0.13 | $-80.96 | 0.74% | 0.09 | watch |
| Symbol | ORCL | 15 | 3.63 | $+66.97 | 5 | 0 | $-109.38 | 0.55% | 0 | watch |
| Symbol | SNOW | 8 | 0.28 | $-36.83 | 13 | 2.36 | $+47.77 | 0.23% | 1.8 | reject |
| Symbol | BAC | 5 | 0.42 | $-26.58 | 5 | 2.57 | $+30.49 | 0.05% | 1.66 | reject |
| Symbol | QCOM | 8 | 0.42 | $-21.48 | 6 | 2.07 | $+30.1 | 0.15% | 1.46 | reject |
| Symbol | SBUX | 7 | 0.32 | $-28.76 | 5 | 2.73 | $+25.23 | 0.05% | 1.49 | reject |
| Symbol | MSFT | 5 | 0.26 | $-29.75 | 3 | 2.08 | $+18.19 | 0.05% | 1.2 | reject |
| Symbol | MDB | 7 | 0 | $-62.75 | 10 | 1.23 | $+12.98 | 0.33% | 0.99 | reject |
| Symbol | SHOP | 7 | 1.03 | $+1.2 | 11 | 1.17 | $+8.14 | 0.45% | 0.9 | reject |
| Symbol | ARM | 11 | 0.4 | $-20.3 | 8 | 1.19 | $+7.79 | 0.33% | 0.91 | reject |
| Symbol | AAPL | 6 | 0.2 | $-35.02 | 5 | 1.18 | $+4.36 | 0.08% | 0.69 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-12598.12 | 0.76 |
| +3 bps/side | $-17985.53 | 0.68 |
| +5 bps/side | $-23372.79 | 0.61 |
| +10 bps/side | $-36841.47 | 0.47 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 421 |
| timeout | 245 |
| stagnation | 164 |
| stop-loss | 65 |
| breakeven-stop | 41 |
| profit-target | 31 |
| trim-profit-target | 22 |
| trailing-stop | 11 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 14:20 | 184.92 | 183.79 | 69 | 12759.48 | -77.97 | -0.61% | 0.69R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | PANW | 04-29 14:50 | 04-29 15:35 | 185.73 | 185.04 | 75 | 13929.75 | -51.75 | -0.37% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 3 | COST | 04-29 14:50 | 04-29 16:30 | 988.13 | 986.7 | 14 | 13833.82 | -20.02 | -0.14% | 0.2R | 100m | market | stagnation | trend | trend | thinChop | 70.56 | ↑982.51 | 3.3386 | 1.01 | **LOSS** |
| 4 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.66 | 109.51 | 127 | 13926.82 | -19.05 | -0.14% | 0.2R | 70m | market | stagnation | trend | trend | neutral | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 5 | META | 04-29 17:45 | 04-29 18:55 | 555.06 | 554.72 | 25 | 13876.5 | -8.5 | -0.06% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 6 | NFLX | 04-29 17:45 | 04-29 18:05 | 1121.99 | 1118.33 | 12 | 13463.88 | -43.92 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↑1108.08 | 2.0405 | 2.45 | **LOSS** |
| 7 | ARM | 04-29 17:45 | 04-29 18:50 | 113.07 | 112.92 | 123 | 13907.61 | -18.45 | -0.13% | 0.19R | 65m | market | stagnation | trend | trend | neutral | 63.58 | ↑112.34 | 0.0897 | 2.32 | **LOSS** |
| 8 | DIS | 04-29 17:45 | 04-29 18:35 | 91.61 | 91.49 | 152 | 13924.72 | -18.24 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 66.22 | ↑90.8 | 0.0806 | 1.42 | **LOSS** |
| 9 | MRVL | 04-29 17:45 | 04-29 18:55 | 59.33 | 59.17 | 235 | 13942.55 | -37.6 | -0.27% | 0.39R | 70m | market | stagnation | trend | trend | neutral | 70.89 | ↑58.64 | 0.105 | 1 | **LOSS** |
| 10 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.66 | 187.52 | 74 | 13886.84 | -10.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 11 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.03 | 106.62 | 132 | 13995.96 | +77.88 | +0.56% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 12 | SMCI | 04-30 15:30 | 04-30 16:20 | 30.72 | 30.51 | 455 | 13977.6 | -95.55 | -0.68% | 0.34R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.16 | ↑29.86 | 0.2995 | 1.82 | **LOSS** |
| 13 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 14 | RIVN | 04-30 17:30 | 04-30 19:15 | 13.32 | 13.48 | 1048 | 13959.36 | +167.68 | +1.2% | 1.3R | 105m | market | timeout | trend | trend | neutral | 74.7 | ↑13.09 | 0.0405 | 1.16 | **WIN** |
| 15 | SBUX | 04-30 17:35 | 04-30 18:25 | 79.65 | 79.59 | 175 | 13938.75 | -10.5 | -0.08% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 68.31 | ↑78.49 | 0.1342 | 1.17 | **LOSS** |
| 16 | AMD | 04-30 17:40 | 04-30 19:25 | 96.03 | 96.14 | 145 | 13924.35 | +15.95 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 72 | ↑94.23 | 0.1572 | 1.14 | **WIN** |
| 17 | CRWD | 05-01 13:30 | 05-01 13:55 | 432.03 | 428.98 | 32 | 13824.96 | -97.6 | -0.71% | 1.01R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 18 | MSFT | 05-01 13:40 | 05-01 14:00 | 434.55 | 429.6 | 32 | 13905.6 | -158.4 | -1.14% | 0.57R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.46 | ↓433.92 | 10.8676 | 2.55 | **LOSS** |
| 19 | AVGO | 05-01 13:40 | 05-01 15:25 | 197.98 | 198.82 | 65 | 12868.7 | +54.6 | +0.42% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.09 | ↑197.41 | 1.5614 | 3.56 | **WIN** |
| 20 | CAT | 05-01 13:40 | 05-01 14:30 | 316.8 | 316.2 | 44 | 13939.2 | -26.4 | -0.19% | 0.16R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 21 | DELL | 05-01 13:40 | 05-01 14:10 | 94.6 | 94.01 | 137 | 12960.2 | -80.83 | -0.62% | 0.52R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.36 | ↓93.91 | 0.7297 | 1.37 | **LOSS** |
| 22 | ORCL | 05-01 13:45 | 05-01 15:00 | 148.1 | 148 | 87 | 12884.7 | -8.7 | -0.07% | 0.05R | 75m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.11 | ↑146.73 | 1.7074 | 3.12 | **LOSS** |
| 23 | NOW | 05-01 13:45 | 05-01 15:30 | 967.63 | 971.03 | 14 | 13546.82 | +47.6 | +0.35% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 24 | DDOG | 05-01 13:45 | 05-01 14:10 | 104.93 | 103.94 | 133 | 13955.69 | -131.67 | -0.94% | 0.66R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 96.82 | ↓104.51 | 0.7912 | 1.4 | **LOSS** |
| 25 | NET | 05-01 13:45 | 05-01 14:10 | 124.17 | 123.11 | 112 | 13907.04 | -118.72 | -0.85% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 26 | UBER | 05-01 14:05 | 05-01 15:20 | 81.61 | 81.48 | 171 | 13955.31 | -22.23 | -0.16% | 0.15R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 27 | GE | 05-01 14:15 | 05-01 16:00 | 203.59 | 203.96 | 68 | 13844.12 | +25.16 | +0.18% | 0.2R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 28 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.06 | 60.92 | 229 | 13982.74 | -32.06 | -0.23% | 0.12R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 29 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 75 | 13834.5 | -51.75 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 30 | RIVN | 05-01 14:25 | 05-01 15:20 | 14.07 | 14.06 | 994 | 13985.58 | -9.94 | -0.07% | 0.04R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 31 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.91 | 286.83 | 48 | 13867.68 | -99.84 | -0.72% | 0.36R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 32 | INTU | 05-01 14:30 | 05-01 15:55 | 631.67 | 630.76 | 22 | 13896.74 | -20.02 | -0.14% | 0.18R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 33 | ARM | 05-01 14:35 | 05-01 15:30 | 118.56 | 118.41 | 118 | 13990.08 | -17.7 | -0.13% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑117.29 | 1.6688 | 1.2 | **LOSS** |
| 34 | CELH | 05-01 15:00 | 05-01 15:30 | 35.41 | 35.21 | 395 | 13986.95 | -79 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 35 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 36 | TXN | 05-01 15:10 | 05-01 15:50 | 161.43 | 160.94 | 86 | 13882.98 | -42.14 | -0.3% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 67.92 | ↑160.37 | 0.479 | 1.95 | **LOSS** |
| 37 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.79 | 114.16 | 122 | 14004.38 | -76.86 | -0.55% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 38 | AMD | 05-01 15:15 | 05-01 15:35 | 100.14 | 99.44 | 139 | 13919.46 | -97.3 | -0.7% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 39 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.14 | 151.49 | 92 | 13996.88 | -59.8 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 40 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.42 | 73.03 | 190 | 13949.8 | -74.1 | -0.53% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 41 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.37 | 682 | 13987.82 | -95.48 | -0.68% | 0.62R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 42 | SMCI | 05-01 15:25 | 05-01 15:45 | 33.31 | 32.92 | 419 | 13956.89 | -163.41 | -1.17% | 0.64R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.49 | ↑32.34 | 0.4172 | 1.01 | **LOSS** |
| 43 | JPM | 05-01 15:25 | 05-01 16:15 | 247.15 | 246.73 | 56 | 13840.4 | -23.52 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 44 | ELF | 05-01 16:35 | 05-01 16:55 | 62.78 | 62.35 | 223 | 13999.94 | -95.89 | -0.68% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 68.38 | ↑62.07 | 0.0812 | 2.71 | **LOSS** |
| 45 | AMD | 05-02 13:30 | 05-02 13:50 | 99.13 | 98.44 | 131 | 12986.03 | -90.39 | -0.7% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.68 | ↓98.89 | -0.2 | 4.18 | **LOSS** |
| 46 | QCOM | 05-02 13:30 | 05-02 13:50 | 138.57 | 137.85 | 93 | 12887.01 | -66.96 | -0.52% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 47 | MU | 05-02 13:30 | 05-02 13:50 | 80.35 | 79.3 | 174 | 13980.9 | -182.7 | -1.31% | 1.17R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 48 | BAC | 05-02 13:30 | 05-02 13:50 | 41.04 | 40.74 | 341 | 13994.64 | -102.3 | -0.73% | 1R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 49 | COST | 05-02 13:30 | 05-02 14:30 | 1014.51 | 1012.19 | 13 | 13188.63 | -30.16 | -0.23% | 0.33R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.19 | ↓1013.58 | 1.0251 | 1.56 | **LOSS** |
| 50 | V | 05-02 13:30 | 05-02 14:00 | 349.46 | 348.06 | 37 | 12930.02 | -51.8 | -0.4% | 0.49R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 51 | CRM | 05-02 13:35 | 05-02 14:40 | 274.09 | 273.79 | 51 | 13978.59 | -15.3 | -0.11% | 0.16R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 63.96 | ↓273.42 | 0.0846 | 1.78 | **LOSS** |
| 52 | ORCL | 05-02 13:35 | 05-02 15:20 | 150.38 | 151.05 | 86 | 12932.68 | +57.62 | +0.45% | 0.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 53 | UBER | 05-02 13:35 | 05-02 15:20 | 83.08 | 84.21 | 168 | 13957.44 | +189.84 | +1.36% | 1.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.99 | ↑82.61 | 0.2144 | 1.45 | **WIN** |
| 54 | CAT | 05-02 13:35 | 05-02 13:55 | 321.97 | 319.86 | 43 | 13844.71 | -90.73 | -0.66% | 0.85R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 55 | LMT | 05-02 13:35 | 05-02 14:35 | 488.76 | 487.56 | 28 | 13685.28 | -33.6 | -0.25% | 0.36R | 60m | market | stagnation | breakout | breakout | thinChop | 89.17 | ↓487.17 | 2.1118 | 1.82 | **LOSS** |
| 56 | HD | 05-02 13:35 | 05-02 13:55 | 364.9 | 363.73 | 38 | 13866.2 | -44.46 | -0.32% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 57 | PLTR | 05-02 13:40 | 05-02 15:25 | 120.92 | 121.85 | 115 | 13905.8 | +106.95 | +0.77% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.82 | ↑120.31 | 0.4497 | 4.08 | **WIN** |
| 58 | NOW | 05-02 13:40 | 05-02 14:35 | 984.8 | 976.36 | 14 | 13787.2 | -118.16 | -0.86% | 0.78R | 55m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.34 | ↓980.72 | 1.7513 | 1.42 | **LOSS** |
| 59 | IBM | 05-02 13:40 | 05-02 15:25 | 243.7 | 243.96 | 57 | 13890.9 | +14.82 | +0.11% | 0.14R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.98 | ↑243.37 | 0.8439 | 1.31 | **WIN** |
| 60 | WMT | 05-02 13:45 | 05-02 14:35 | 99.09 | 98.84 | 141 | 13971.69 | -35.25 | -0.25% | 0.36R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.07 | ↓98.63 | 0.3215 | 1.32 | **LOSS** |
| 61 | MSFT | 05-02 13:50 | 05-02 14:40 | 436.81 | 435.47 | 31 | 13541.11 | -41.54 | -0.31% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 62 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.48 | 1152.03 | 12 | 13757.76 | +66.6 | +0.48% | 0.69R | 105m | market | timeout | trend | trend | neutral | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 63 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.3 | 439.61 | 31 | 13711.3 | -83.39 | -0.61% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 64 | META | 05-02 14:05 | 05-02 15:50 | 590.93 | 597.87 | 23 | 13591.39 | +159.62 | +1.17% | 0.78R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 65 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 74 | 13833.56 | -61.42 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 66 | HPE | 05-02 14:10 | 05-02 14:40 | 16.96 | 16.88 | 825 | 13992 | -66 | -0.47% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 72.33 | ↓16.84 | 0.0808 | 1.74 | **LOSS** |
| 67 | SBUX | 05-02 14:25 | 05-02 14:50 | 83.91 | 83.6 | 166 | 13929.06 | -51.46 | -0.37% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 68 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.76 | 140.88 | 50 | 13976 | +56 | +0.8% | 1.1R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 69 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.76 | 141.14 | 50 | 13976 | +69 | +0.99% | 1.36R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 70 | COIN | 05-02 15:00 | 05-02 15:10 | 208.47 | 205.61 | 67 | 13967.49 | -191.62 | -1.37% | 1.29R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 71 | ELF | 05-02 15:50 | 05-02 16:55 | 66.46 | 67.18 | 105 | 13956.6 | +75.6 | +1.08% | 1.54R | 65m | market | trim-profit-target | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 72 | ELF | 05-02 15:50 | 05-02 17:40 | 66.46 | 67.13 | 105 | 13956.6 | +70.35 | +1.01% | 1.44R | 110m | market | timeout | trend | trend | neutral | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 73 | INTC | 05-02 16:00 | 05-02 16:20 | 20.72 | 20.64 | 675 | 13986 | -54 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 71.08 | ↑20.52 | 0.0779 | 3.2 | **LOSS** |
| 74 | PLTR | 05-02 16:00 | 05-02 17:15 | 123.21 | 122.83 | 113 | 13922.73 | -42.94 | -0.31% | 0.34R | 75m | market | early-reversal | trend | trend | neutral | 63.93 | ↑121.73 | 0.4969 | 1.64 | **LOSS** |
| 75 | CVX | 05-02 16:00 | 05-02 16:20 | 139.34 | 138.63 | 100 | 13934 | -71 | -0.51% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 77.72 | ↑137.37 | 0.5221 | 2.96 | **LOSS** |
| 76 | TXN | 05-02 16:00 | 05-02 16:25 | 166.08 | 165.28 | 84 | 13950.72 | -67.2 | -0.48% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 77.57 | ↑164.11 | 0.8117 | 1.71 | **LOSS** |
| 77 | KLAC | 05-02 16:00 | 05-02 16:35 | 706.86 | 702.01 | 19 | 13430.34 | -92.15 | -0.69% | 0.99R | 35m | market | early-reversal | trend | trend | neutral | 65.3 | ↑701.75 | 5.0071 | 1.1 | **LOSS** |
| 78 | COIN | 05-02 16:05 | 05-02 17:05 | 207.59 | 207.4 | 67 | 13908.53 | -12.73 | -0.09% | 0.09R | 60m | market | stagnation | trend | trend | neutral | 54.22 | ↑205.93 | 0.7587 | 1.57 | **LOSS** |
| 79 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.41 | 191.6 | 72 | 13853.52 | -58.32 | -0.42% | 0.47R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 80 | CVX | 05-02 16:30 | 05-02 16:45 | 139.51 | 138.36 | 100 | 13951 | -115 | -0.82% | 1.05R | 15m | market | stop-loss | trend | trend | neutral | 78.83 | ↑137.61 | 0.673 | 1.66 | **LOSS** |
| 81 | TSLA | 05-02 16:35 | 05-02 18:20 | 291.76 | 293.04 | 47 | 13712.72 | +60.16 | +0.44% | 0.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.09 | ↑285.22 | 1.7688 | 1.53 | **WIN** |
| 82 | SBUX | 05-02 16:40 | 05-02 17:45 | 84.57 | 84.42 | 165 | 13954.05 | -24.75 | -0.18% | 0.26R | 65m | market | stagnation | trend | trend | neutral | 79.76 | ↑83.49 | 0.2297 | 1.08 | **LOSS** |
| 83 | ARM | 05-02 16:45 | 05-02 17:05 | 123.11 | 122.57 | 113 | 13911.43 | -61.02 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.23 | ↑121.01 | 0.6264 | 1.76 | **LOSS** |
| 84 | AMD | 05-05 13:35 | 05-05 14:30 | 100.6 | 100.29 | 127 | 12776.2 | -39.37 | -0.31% | 0.31R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 85 | NOW | 05-05 13:55 | 05-05 14:20 | 991.77 | 985.46 | 14 | 13884.78 | -88.34 | -0.64% | 0.89R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 86 | UNH | 05-05 14:00 | 05-05 15:45 | 403.98 | 406.43 | 34 | 13735.32 | +83.3 | +0.61% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 87 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.83 | 126.3 | 110 | 13951.3 | -58.3 | -0.42% | 0.27R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 88 | PANW | 05-05 15:00 | 05-05 15:50 | 190.35 | 190.18 | 73 | 13895.55 | -12.41 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 89 | PLTR | 05-05 16:20 | 05-05 16:50 | 124.99 | 124.45 | 112 | 13998.88 | -60.48 | -0.43% | 0.61R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 71.09 | ↑123.14 | 0.4883 | 1.54 | **LOSS** |
| 90 | CELH | 05-05 17:40 | 05-05 18:40 | 34.61 | 34.58 | 404 | 13982.44 | -12.12 | -0.09% | 0.13R | 60m | market | breakeven-stop | trend | trend | neutral | 73.03 | ↑34.17 | 0.073 | 1.31 | **LOSS** |
| 91 | CELH | 05-06 13:30 | 05-06 13:35 | 34.79 | 32.55 | 370 | 12872.3 | -828.8 | -6.44% | 3.22R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 53.83 | ↓34.4 | -0.1172 | 3.69 | **LOSS** |
| 92 | XOM | 05-06 14:10 | 05-06 15:55 | 104.96 | 105.36 | 133 | 13959.68 | +53.2 | +0.38% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 93 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.32 | 106.75 | 131 | 13927.92 | +56.33 | +0.4% | 0.21R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 94 | SMCI | 05-06 15:35 | 05-06 15:55 | 32.81 | 32.48 | 425 | 13944.25 | -140.25 | -1.01% | 0.75R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.16 | ↑32.21 | 0.1398 | 1.06 | **LOSS** |
| 95 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.67 | 188.2 | 74 | 13887.58 | +39.22 | +0.28% | 0.4R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 96 | PLTR | 05-07 13:35 | 05-07 14:25 | 111.07 | 110.72 | 116 | 12884.12 | -40.6 | -0.32% | 0.24R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.66 | ↑109.39 | 0.0881 | 2.76 | **LOSS** |
| 97 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.67 | 95.01 | 146 | 13967.82 | -96.36 | -0.69% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 98 | NKE | 05-07 13:35 | 05-07 15:10 | 58.02 | 58.04 | 241 | 13982.82 | +4.82 | +0.03% | 0.04R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 99 | RIVN | 05-07 13:35 | 05-07 13:55 | 13.64 | 13.43 | 945 | 12889.8 | -198.45 | -1.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.43 | ↓13.35 | 0.0225 | 1.69 | **LOSS** |
| 100 | DIS | 05-07 13:40 | 05-07 14:00 | 102.19 | 100.77 | 136 | 13897.84 | -193.12 | -1.39% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.06 | ↓101.44 | 2.2882 | 2.62 | **LOSS** |
| 101 | NVO | 05-07 13:45 | 05-07 14:35 | 68.75 | 68.34 | 189 | 12993.75 | -77.49 | -0.6% | 0.37R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.89 | ↓68.58 | 0.4826 | 1.91 | **LOSS** |
| 102 | NFLX | 05-07 14:15 | 05-07 15:00 | 1152.46 | 1152.48 | 12 | 13829.52 | +0.24 | +0% | 0R | 45m | market | breakeven-stop | trend | trend | neutral | 71.5 | ↑1144.48 | 1.5134 | 1.89 | **WIN** |
| 103 | MU | 05-07 15:55 | 05-07 17:35 | 81.54 | 81.42 | 171 | 13943.34 | -20.52 | -0.15% | 0.21R | 100m | market | stagnation | trend | trend | thinChop | 64.67 | ↑80.85 | 0.1015 | 1.86 | **LOSS** |
| 104 | LMT | 05-07 16:25 | 05-07 18:10 | 472.1 | 472.07 | 29 | 13690.9 | -0.87 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | thinChop | 65.62 | ↑470.02 | 0.8808 | 1.5 | **LOSS** |
| 105 | AVGO | 05-07 16:45 | 05-07 17:35 | 203.11 | 202.37 | 68 | 13811.48 | -50.32 | -0.36% | 0.51R | 50m | market | early-reversal | trend | trend | neutral | 60.83 | ↑200.88 | 0.4076 | 1.16 | **LOSS** |
| 106 | NOW | 05-07 16:45 | 05-07 17:35 | 983.67 | 981.32 | 14 | 13771.38 | -32.9 | -0.24% | 0.34R | 50m | market | stagnation | trend | trend | neutral | 59.34 | ↑976.15 | 2.811 | 2.11 | **LOSS** |
| 107 | INTU | 05-07 16:45 | 05-07 18:05 | 637.58 | 633.12 | 21 | 13389.18 | -93.66 | -0.7% | 1R | 80m | market | early-reversal | trend | trend | neutral | 66.87 | ↓632.73 | 1.306 | 1.48 | **LOSS** |
| 108 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.46 | 55.07 | 252 | 13975.92 | -98.28 | -0.7% | 0.69R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 109 | AMD | 05-08 13:35 | 05-08 14:25 | 103.86 | 103.58 | 134 | 13917.24 | -37.52 | -0.27% | 0.14R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.36 | ↓103.31 | 1.2511 | 1.96 | **LOSS** |
| 110 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.56 | 281.27 | 45 | 12850.2 | -193.05 | -1.5% | 0.87R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 111 | PLTR | 05-08 13:40 | 05-08 15:25 | 115.82 | 117.86 | 112 | 12971.84 | +228.48 | +1.76% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.5 | ↑114.31 | 1.5125 | 2.37 | **WIN** |
| 112 | PYPL | 05-08 13:40 | 05-08 14:45 | 69.75 | 69.65 | 200 | 13950 | -20 | -0.14% | 0.14R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 113 | XOM | 05-08 13:40 | 05-08 14:10 | 106.3 | 105.65 | 131 | 13925.3 | -85.15 | -0.61% | 0.79R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 114 | GE | 05-08 13:40 | 05-08 14:35 | 213.02 | 212.69 | 65 | 13846.3 | -21.45 | -0.15% | 0.19R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.61 | ↑212.15 | 0.4951 | 1.58 | **LOSS** |
| 115 | ELF | 05-08 14:25 | 05-08 14:55 | 68.08 | 67.54 | 205 | 13956.4 | -110.7 | -0.79% | 0.75R | 30m | market | early-reversal | breakout | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 116 | BA | 05-08 15:05 | 05-08 16:50 | 191.06 | 193.93 | 73 | 13947.38 | +209.51 | +1.5% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 117 | BAC | 05-08 15:15 | 05-08 17:00 | 41.75 | 42.04 | 334 | 13944.5 | +96.86 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 65.76 | ↑41.48 | 0.1338 | 1.15 | **WIN** |
| 118 | GS | 05-08 15:20 | 05-08 17:10 | 565.92 | 570.89 | 24 | 13582.08 | +119.28 | +0.88% | 1.26R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 119 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.81 | 286.46 | 48 | 13766.88 | -16.8 | -0.12% | 0.11R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 120 | GE | 05-08 15:25 | 05-08 17:10 | 215.12 | 215.84 | 65 | 13982.8 | +46.8 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 121 | HD | 05-08 15:25 | 05-08 17:10 | 366.79 | 367.45 | 38 | 13938.02 | +25.08 | +0.18% | 0.26R | 105m | market | timeout | trend | trend | thinChop | 60.48 | ↑363.87 | 0.5541 | 2.42 | **WIN** |
| 122 | AMZN | 05-08 15:30 | 05-08 17:10 | 191.89 | 193.45 | 36 | 13816.08 | +56.16 | +0.81% | 1.05R | 100m | market | trim-profit-target | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 123 | AMZN | 05-08 15:30 | 05-08 17:15 | 191.89 | 193.42 | 36 | 13816.08 | +55.08 | +0.8% | 1.04R | 105m | market | timeout | trend | trend | neutral | 72.13 | ↑190.34 | 0.4757 | 1.67 | **WIN** |
| 124 | MSFT | 05-08 15:35 | 05-08 17:20 | 441.75 | 443.16 | 31 | 13694.25 | +43.71 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | thinChop | 68.73 | ↑438.74 | 1.0933 | 1.31 | **WIN** |
| 125 | CAT | 05-08 15:35 | 05-08 17:20 | 326.85 | 327.42 | 42 | 13727.7 | +23.94 | +0.17% | 0.24R | 105m | market | timeout | trend | trend | neutral | 73.35 | ↑324.49 | 1.3771 | 1.33 | **WIN** |
| 126 | CRM | 05-08 15:40 | 05-08 16:30 | 282.62 | 281.92 | 49 | 13848.38 | -34.3 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 68.45 | ↑280.2 | 0.8715 | 1.79 | **LOSS** |
| 127 | ORCL | 05-08 15:40 | 05-08 16:00 | 151.39 | 150.7 | 92 | 13927.88 | -63.48 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | thinChop | 58.09 | ↑149.8 | 0.4766 | 1.35 | **LOSS** |
| 128 | TSM | 05-08 15:40 | 05-08 16:00 | 176.68 | 175.89 | 79 | 13957.72 | -62.41 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 69.52 | ↑174.95 | 0.5299 | 1.65 | **LOSS** |
| 129 | ABNB | 05-08 15:40 | 05-08 17:25 | 127.07 | 126.92 | 110 | 13977.7 | -16.5 | -0.12% | 0.17R | 105m | market | stagnation | trend | trend | neutral | 68.8 | ↑125.05 | 0.7853 | 1.35 | **LOSS** |
| 130 | DDOG | 05-08 15:40 | 05-08 17:25 | 108.14 | 109.04 | 129 | 13950.06 | +116.1 | +0.83% | 1.09R | 105m | market | timeout | trend | trend | neutral | 55.15 | ↑107.26 | 0.2842 | 2.14 | **WIN** |
| 131 | XOM | 05-08 15:40 | 05-08 16:30 | 107.04 | 106.97 | 130 | 13915.2 | -9.1 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 62.66 | ↑106.2 | 0.402 | 2.46 | **LOSS** |
| 132 | CVX | 05-08 15:40 | 05-08 16:05 | 138.73 | 138.32 | 100 | 13873 | -41 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 67.16 | ↑137.56 | 0.4712 | 2.23 | **LOSS** |
| 133 | TXN | 05-08 15:40 | 05-08 16:00 | 167.86 | 167.03 | 83 | 13932.38 | -68.89 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 68.66 | ↑165.91 | 0.5807 | 1.49 | **LOSS** |
| 134 | HPE | 05-08 15:40 | 05-08 16:00 | 17.06 | 17 | 820 | 13989.2 | -49.2 | -0.35% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 52.94 | ↑16.92 | 0.0935 | 2.02 | **LOSS** |
| 135 | TGT | 05-08 15:40 | 05-08 17:25 | 97.78 | 97.97 | 143 | 13982.54 | +27.17 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 59.46 | ↑96.87 | 0.2971 | 1.92 | **WIN** |
| 136 | ELF | 05-08 15:40 | 05-08 17:25 | 68.51 | 68.62 | 204 | 13976.04 | +22.44 | +0.16% | 0.17R | 105m | market | timeout | trend | trend | neutral | 63.78 | ↑67.84 | 0.3917 | 5.89 | **WIN** |
| 137 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 964 | 12859.76 | +385.6 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 138 | MU | 05-08 15:45 | 05-08 17:30 | 85.52 | 85.8 | 163 | 13939.76 | +45.64 | +0.33% | 0.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.41 | ↑84.19 | 0.5086 | 2.02 | **WIN** |
| 139 | MDB | 05-08 15:45 | 05-08 16:05 | 179.22 | 178.45 | 78 | 13979.16 | -60.06 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | thinChop | 69.85 | ↑176.79 | 0.8866 | 1.28 | **LOSS** |
| 140 | NKE | 05-08 15:45 | 05-08 16:05 | 60.02 | 59.64 | 233 | 13984.66 | -88.54 | -0.63% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 68.07 | ↑59.34 | 0.2597 | 2.09 | **LOSS** |
| 141 | LOW | 05-08 15:50 | 05-08 17:25 | 225.68 | 225.48 | 62 | 13992.16 | -12.4 | -0.09% | 0.13R | 95m | market | stagnation | trend | trend | thinChop | 66.48 | ↑223.99 | 0.4304 | 1.27 | **LOSS** |
| 142 | QCOM | 05-08 16:15 | 05-08 17:45 | 146.73 | 146.52 | 95 | 13939.35 | -19.95 | -0.14% | 0.2R | 90m | market | stagnation | trend | trend | neutral | 77.38 | ↑144.96 | 0.5208 | 1.95 | **LOSS** |
| 143 | NKE | 05-08 16:15 | 05-08 17:10 | 59.97 | 59.89 | 233 | 13973.01 | -18.64 | -0.13% | 0.17R | 55m | market | stagnation | trend | trend | neutral | 77.2 | ↑59.44 | 0.1923 | 2.09 | **LOSS** |
| 144 | DIS | 05-08 16:20 | 05-08 16:45 | 105.99 | 105.67 | 131 | 13884.69 | -41.92 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 73.03 | ↑105.03 | 0.2034 | 1.01 | **LOSS** |
| 145 | NET | 05-08 16:55 | 05-08 17:45 | 124.96 | 124.82 | 111 | 13870.56 | -15.54 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.23 | ↑123.24 | 0.5628 | 2.76 | **LOSS** |
| 146 | TXN | 05-08 16:55 | 05-08 17:15 | 168.46 | 167.44 | 82 | 13813.72 | -83.64 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 67.9 | ↑166.36 | 0.6834 | 1.66 | **LOSS** |
| 147 | MDB | 05-08 17:00 | 05-08 17:55 | 179.91 | 179.79 | 77 | 13853.07 | -9.24 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 67.48 | ↑177.39 | 0.7506 | 1.43 | **LOSS** |
| 148 | UBER | 05-09 13:30 | 05-09 13:50 | 84.05 | 83.39 | 154 | 12943.7 | -101.64 | -0.79% | 0.88R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.62 | ↓83.64 | -0.0738 | 1.81 | **LOSS** |
| 149 | BA | 05-09 13:30 | 05-09 14:10 | 194.52 | 193.36 | 72 | 14005.44 | -83.52 | -0.6% | 0.63R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 150 | SMCI | 05-09 13:35 | 05-09 14:00 | 32.71 | 32.47 | 426 | 13934.46 | -102.24 | -0.73% | 0.59R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.56 | ↓32.57 | 0.0095 | 1.51 | **LOSS** |
| 151 | TXN | 05-09 13:35 | 05-09 13:55 | 171.79 | 170.84 | 74 | 12712.46 | -70.3 | -0.55% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.12 | ↓171.21 | 0.6463 | 2.59 | **LOSS** |
| 152 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.82 | 299.43 | 43 | 12892.26 | -16.77 | -0.13% | 0.07R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 153 | COIN | 05-09 13:45 | 05-09 14:05 | 212.81 | 210.11 | 65 | 13832.65 | -175.5 | -1.27% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.46 | ↑207.08 | 0.0494 | 1.49 | **LOSS** |
| 154 | RIVN | 05-09 14:45 | 05-09 15:15 | 14.26 | 14.29 | 982 | 14003.32 | +29.46 | +0.21% | 0.11R | 30m | market | trailing-stop | breakout | breakout | noisyHighBeta | 67.59 | ↑13.98 | 0.0712 | 1.82 | **WIN** |
| 155 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.63 | 371 | 13856.85 | -267.12 | -1.93% | 1.4R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 156 | ABNB | 05-09 17:55 | 05-09 18:15 | 126.27 | 125.87 | 110 | 13889.7 | -44 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 68.09 | ↑124.73 | 0.3196 | 1.95 | **LOSS** |
| 157 | PANW | 05-12 13:45 | 05-12 15:30 | 190.56 | 191.38 | 67 | 12767.52 | +54.94 | +0.43% | 0.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 158 | NKE | 05-12 14:00 | 05-12 14:25 | 63.25 | 62.61 | 221 | 13978.25 | -141.44 | -1.01% | 0.51R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓62.7 | 1.0815 | 1.41 | **LOSS** |
| 159 | COIN | 05-12 14:40 | 05-12 15:00 | 213.06 | 209.51 | 60 | 12783.6 | -213 | -1.67% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 160 | UBER | 05-12 14:55 | 05-12 16:25 | 85.2 | 86.29 | 82 | 13972.8 | +89.38 | +1.28% | 0.9R | 90m | market | trim-profit-target | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 161 | UBER | 05-12 14:55 | 05-12 16:40 | 85.2 | 86.17 | 82 | 13972.8 | +79.54 | +1.14% | 0.8R | 105m | market | timeout | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 162 | KLAC | 05-12 15:50 | 05-12 17:35 | 753.02 | 759.56 | 18 | 13554.36 | +117.72 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | neutral | 72 | ↑748.33 | 7.4136 | 2.75 | **WIN** |
| 163 | ARM | 05-12 16:10 | 05-12 16:30 | 124.74 | 124.15 | 112 | 13970.88 | -66.08 | -0.47% | 0.53R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.27 | ↑122.91 | 0.4147 | 2.75 | **LOSS** |
| 164 | LLY | 05-12 16:40 | 05-12 17:40 | 759.64 | 759.68 | 18 | 13673.52 | +0.72 | +0.01% | 0.01R | 60m | market | breakeven-stop | trend | trend | neutral | 74.57 | ↑741.47 | 4.7499 | 2.96 | **WIN** |
| 165 | AMAT | 05-12 16:55 | 05-12 18:10 | 168.94 | 168.8 | 82 | 13853.08 | -11.48 | -0.08% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 79.55 | ↑167.17 | 0.4777 | 1.74 | **LOSS** |
| 166 | MRVL | 05-12 17:05 | 05-12 17:25 | 65.12 | 64.79 | 214 | 13935.68 | -70.62 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑64.06 | 0.2549 | 1.05 | **LOSS** |
| 167 | INTC | 05-12 17:35 | 05-12 17:50 | 22.61 | 22.36 | 618 | 13972.98 | -154.5 | -1.11% | 1.44R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 168 | UBER | 05-12 17:35 | 05-12 18:40 | 86.87 | 86.8 | 161 | 13986.07 | -11.27 | -0.08% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 61.52 | ↑85.07 | 0.2097 | 1.36 | **LOSS** |
| 169 | MU | 05-13 13:30 | 05-13 15:15 | 93.9 | 95.72 | 138 | 12958.2 | +251.16 | +1.94% | 2.52R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 170 | TSM | 05-13 13:30 | 05-13 15:15 | 189.9 | 192.59 | 73 | 13862.7 | +196.37 | +1.42% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 171 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.73 | 108.21 | 121 | 12914.33 | +179.08 | +1.39% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 172 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.59 | 66.42 | 212 | 13905.08 | +175.96 | +1.27% | 1.13R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 173 | META | 05-13 13:35 | 05-13 15:20 | 649.67 | 658.27 | 21 | 13643.07 | +180.6 | +1.32% | 1.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 174 | NFLX | 05-13 13:35 | 05-13 15:20 | 1128.76 | 1137.16 | 12 | 13545.12 | +100.8 | +0.74% | 1R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.1 | ↑1120.51 | 0.5982 | 2.23 | **WIN** |
| 175 | ARM | 05-13 13:35 | 05-13 14:40 | 125.88 | 125.41 | 111 | 13972.68 | -52.17 | -0.37% | 0.48R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 176 | COIN | 05-13 13:35 | 05-13 15:20 | 238.43 | 245.31 | 53 | 12636.79 | +364.64 | +2.89% | 1.45R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 96.92 | ↑236.46 | 6.9211 | 4.45 | **WIN** |
| 177 | NET | 05-13 13:35 | 05-13 15:20 | 145.88 | 147.78 | 95 | 13858.6 | +180.5 | +1.3% | 1.43R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 178 | CAT | 05-13 13:35 | 05-13 13:55 | 351.77 | 349.45 | 36 | 12663.72 | -83.52 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.35 | ↓350.65 | 1.0052 | 1.12 | **LOSS** |
| 179 | BA | 05-13 13:35 | 05-13 15:20 | 202.36 | 203.42 | 69 | 13962.84 | +73.14 | +0.52% | 0.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 180 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.57 | 130.09 | 110 | 13922.7 | +387.2 | +2.78% | 3.97R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 181 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.22 | 440.93 | 32 | 13927.04 | +182.72 | +1.31% | 1.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 182 | DELL | 05-13 13:50 | 05-13 15:35 | 106.07 | 107.57 | 131 | 13895.17 | +196.5 | +1.41% | 1.78R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 183 | SMCI | 05-13 13:55 | 05-13 14:40 | 36.05 | 37.79 | 386 | 13915.3 | +671.64 | +4.83% | 2.42R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 89.53 | ↑35.38 | 0.5657 | 1.49 | **WIN** |
| 184 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 76 | 13898.88 | -7.6 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 185 | INTC | 05-13 14:05 | 05-13 14:25 | 22.89 | 22.59 | 609 | 13940.01 | -182.7 | -1.31% | 1.2R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 186 | UBER | 05-13 14:20 | 05-13 14:40 | 90.95 | 90.16 | 154 | 14006.3 | -121.66 | -0.87% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 76.51 | ↑89.22 | 0.9267 | 1.1 | **LOSS** |
| 187 | PLTR | 05-13 14:45 | 05-13 15:45 | 125.03 | 128.44 | 112 | 14003.36 | +381.92 | +2.73% | 1.95R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 65.77 | ↑123 | 1.5757 | 1.67 | **WIN** |
| 188 | AVGO | 05-13 15:00 | 05-13 15:20 | 231.93 | 230.91 | 60 | 13915.8 | -61.2 | -0.44% | 0.51R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.02 | ↑227.92 | 2.7447 | 1.3 | **LOSS** |
| 189 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.39 | 795.74 | 17 | 13368.63 | +158.95 | +1.19% | 1.68R | 105m | market | timeout | breakout | trend | neutral | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 190 | AMAT | 05-13 15:10 | 05-13 16:55 | 172.58 | 173.65 | 81 | 13978.98 | +86.67 | +0.62% | 0.89R | 105m | market | timeout | trend | trend | neutral | 73.42 | ↑170.64 | 1.0363 | 1.7 | **WIN** |
| 191 | META | 05-13 15:25 | 05-13 16:00 | 660.37 | 658.04 | 21 | 13867.77 | -48.93 | -0.35% | 0.5R | 35m | market | early-reversal | trend | trend | neutral | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 192 | MU | 05-13 15:25 | 05-13 17:10 | 96.05 | 96.37 | 145 | 13927.25 | +46.4 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 193 | ORCL | 05-13 15:40 | 05-13 17:00 | 162.17 | 161.96 | 86 | 13946.62 | -18.06 | -0.13% | 0.19R | 80m | market | stagnation | trend | trend | neutral | 76.6 | ↑160.23 | 0.952 | 1.11 | **LOSS** |
| 194 | DELL | 05-13 15:40 | 05-13 16:15 | 107.85 | 107.48 | 129 | 13912.65 | -47.73 | -0.34% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 66.67 | ↑106.87 | 0.8481 | 6.04 | **LOSS** |
| 195 | HPE | 05-13 15:40 | 05-13 16:00 | 18.03 | 17.95 | 775 | 13973.25 | -62 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 67.86 | ↑17.91 | 0.0585 | 2.64 | **LOSS** |
| 196 | UBER | 05-13 15:45 | 05-13 16:05 | 91.4 | 90.93 | 153 | 13984.2 | -71.91 | -0.51% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 72.58 | ↑89.85 | 0.6691 | 1.01 | **LOSS** |
| 197 | NET | 05-13 15:45 | 05-13 17:10 | 148.99 | 150.21 | 47 | 14005.06 | +57.34 | +0.82% | 1.17R | 85m | market | trim-profit-target | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 198 | NET | 05-13 15:45 | 05-13 17:30 | 148.99 | 150.64 | 47 | 14005.06 | +77.55 | +1.11% | 1.59R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 199 | MDB | 05-13 15:55 | 05-13 16:55 | 196.65 | 196.19 | 71 | 13962.15 | -32.66 | -0.23% | 0.33R | 60m | market | stagnation | trend | trend | neutral | 71.52 | ↑194.9 | 1.4222 | 1.68 | **LOSS** |
| 200 | AVGO | 05-13 16:25 | 05-13 17:00 | 233.94 | 232.88 | 59 | 13802.46 | -62.54 | -0.45% | 0.59R | 35m | market | early-reversal | trend | trend | neutral | 67.87 | ↑229.28 | 1.4154 | 1.08 | **LOSS** |
| 201 | ELF | 05-13 16:25 | 05-13 17:50 | 76.91 | 77.7 | 90 | 13920.71 | +71.1 | +1.03% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 202 | ELF | 05-13 16:25 | 05-13 18:10 | 76.91 | 77.48 | 91 | 13920.71 | +51.87 | +0.74% | 0.99R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 203 | CELH | 05-13 16:30 | 05-13 17:10 | 37.78 | 37.51 | 366 | 13827.48 | -98.82 | -0.71% | 1.01R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 75 | ↑37.37 | 0.0887 | 2.45 | **LOSS** |
| 204 | SMCI | 05-13 17:15 | 05-13 19:00 | 38.51 | 38.72 | 364 | 14017.64 | +76.44 | +0.55% | 0.47R | 105m | market | timeout | trend | trend | noisyHighBeta | 55.3 | ↑37.34 | 0.1012 | 1.7 | **WIN** |
| 205 | SBUX | 05-13 17:25 | 05-13 19:10 | 86.62 | 86.72 | 161 | 13945.82 | +16.1 | +0.12% | 0.17R | 105m | market | timeout | trend | trend | neutral | 79.73 | ↑85.89 | 0.1051 | 1.56 | **WIN** |
| 206 | LLY | 05-14 13:30 | 05-14 13:50 | 756.92 | 749.53 | 18 | 13624.56 | -133.02 | -0.98% | 1.4R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 207 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.35 | 159.89 | 86 | 13876.1 | -125.56 | -0.9% | 1.29R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 208 | NET | 05-14 13:35 | 05-14 13:45 | 153.81 | 152.02 | 91 | 13996.71 | -162.89 | -1.16% | 1.29R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 209 | NVO | 05-14 13:35 | 05-14 13:50 | 66.65 | 65.95 | 209 | 13929.85 | -146.3 | -1.05% | 1.44R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 210 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.21 | 72.9 | 191 | 13983.11 | -59.21 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 211 | ELF | 05-14 14:00 | 05-14 14:20 | 79.81 | 78.96 | 175 | 13966.75 | -148.75 | -1.07% | 1.01R | 20m | market | early-reversal | trend | trend | neutral | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 212 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 213 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 43 | 13956.94 | +78.26 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 214 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13956.94 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 215 | WMT | 05-14 14:20 | 05-14 15:10 | 96.97 | 96.85 | 144 | 13963.68 | -17.28 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 216 | BA | 05-14 15:45 | 05-14 16:05 | 208.73 | 207.41 | 67 | 13984.91 | -88.44 | -0.63% | 0.63R | 20m | market | early-reversal | trend | breakout | neutral | 52.56 | ↑206.7 | 0.617 | 2.45 | **LOSS** |
| 217 | NVDA | 05-14 16:30 | 05-14 16:50 | 135.4 | 134.98 | 103 | 13946.2 | -43.26 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 79.63 | ↑133.5 | 0.5884 | 1.36 | **LOSS** |
| 218 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 951 | 14017.74 | +218.73 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | noisyHighBeta | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 219 | SMCI | 05-15 13:30 | 05-15 13:45 | 45.24 | 44.02 | 285 | 12893.4 | -347.7 | -2.7% | 1.35R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 56.34 | ↓44.77 | -0.3135 | 2.34 | **LOSS** |
| 220 | JPM | 05-15 13:40 | 05-15 13:45 | 269.17 | 267.02 | 51 | 13727.67 | -109.65 | -0.8% | 1.14R | 5m | market | stop-loss | breakout | breakout | thinChop | 76.67 | ↓268.38 | 0.6217 | 2.74 | **LOSS** |
| 221 | V | 05-15 13:40 | 05-15 14:35 | 361.19 | 360.85 | 38 | 13725.22 | -12.92 | -0.09% | 0.13R | 55m | market | stagnation | breakout | breakout | thinChop | 82.5 | ↓359.87 | 0.8029 | 4.46 | **LOSS** |
| 222 | ADP | 05-15 13:40 | 05-15 15:25 | 314.16 | 315.34 | 44 | 13823.04 | +51.92 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | thinChop | 87.29 | ↑312.99 | 1.5099 | 1.22 | **WIN** |
| 223 | RIVN | 05-15 14:00 | 05-15 14:25 | 15.29 | 15.08 | 919 | 14051.51 | -192.99 | -1.37% | 0.69R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.73 | ↓15.06 | 0.0463 | 1.62 | **LOSS** |
| 224 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 73 | 13999.94 | +55.48 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 225 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13999.94 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 226 | COST | 05-15 14:50 | 05-15 16:40 | 1004.3 | 1007.98 | 13 | 13055.9 | +47.84 | +0.37% | 0.53R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 227 | NFLX | 05-15 14:55 | 05-15 15:30 | 1169.87 | 1165.58 | 11 | 12868.57 | -47.19 | -0.37% | 0.53R | 35m | market | early-reversal | trend | trend | neutral | 66.91 | ↑1158.19 | 5.2118 | 1.19 | **LOSS** |
| 228 | NVO | 05-15 15:15 | 05-15 17:00 | 65.6 | 66.08 | 212 | 13907.2 | +101.76 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 229 | INTU | 05-15 15:20 | 05-15 16:10 | 663.28 | 662.82 | 21 | 13928.88 | -9.66 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 230 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.55 | 647 | 13910.5 | +32.35 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 231 | RIVN | 05-15 15:40 | 05-15 17:25 | 15.33 | 15.31 | 914 | 14011.62 | -18.28 | -0.13% | 0.11R | 105m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.95 | ↑15.1 | 0.0711 | 1.98 | **LOSS** |
| 232 | NVDA | 05-15 16:35 | 05-15 18:05 | 135.79 | 135.68 | 103 | 13986.37 | -11.33 | -0.08% | 0.11R | 90m | market | stagnation | trend | trend | neutral | 78.33 | ↑133.93 | 0.4857 | 1.64 | **LOSS** |
| 233 | MU | 05-15 16:35 | 05-15 17:50 | 94.9 | 94.83 | 147 | 13950.3 | -10.29 | -0.07% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 75.72 | ↑93.29 | 0.4705 | 1.32 | **LOSS** |
| 234 | SMCI | 05-15 16:45 | 05-15 17:05 | 45.32 | 44.95 | 308 | 13958.56 | -113.96 | -0.82% | 0.48R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 75.08 | ↑43.61 | 0.5857 | 1.26 | **LOSS** |
| 235 | DELL | 05-15 16:45 | 05-15 17:35 | 111.18 | 110.99 | 126 | 14008.68 | -23.94 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 78.02 | ↑109.77 | 0.3998 | 1.5 | **LOSS** |
| 236 | MU | 05-16 13:30 | 05-16 15:15 | 96.45 | 97.4 | 145 | 13985.25 | +137.75 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.53 | ↓96.22 | 0.1541 | 1.16 | **WIN** |
| 237 | SMCI | 05-16 13:30 | 05-16 14:20 | 46.06 | 47.2 | 303 | 13956.18 | +345.42 | +2.48% | 1.27R | 50m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.48 | ↑45.7 | 0.3935 | 4.7 | **WIN** |
| 238 | TGT | 05-16 13:30 | 05-16 15:15 | 97.93 | 98.3 | 143 | 14003.99 | +52.91 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 239 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.21 | 111.56 | 124 | 13914.04 | -80.6 | -0.58% | 0.67R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 240 | NET | 05-16 13:35 | 05-16 15:20 | 155.2 | 156.46 | 90 | 13968 | +113.4 | +0.81% | 0.92R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 241 | LLY | 05-16 13:35 | 05-16 15:20 | 744.51 | 747.89 | 18 | 13401.18 | +60.84 | +0.45% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 242 | NFLX | 05-16 13:45 | 05-16 14:30 | 1193.96 | 1186.33 | 11 | 13133.56 | -83.93 | -0.64% | 0.91R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 243 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.5 | 437.12 | 32 | 14000 | -12.16 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 244 | DELL | 05-16 13:45 | 05-16 14:40 | 112.58 | 112.38 | 124 | 13959.92 | -24.8 | -0.18% | 0.26R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 245 | ADBE | 05-16 13:55 | 05-16 14:15 | 420.48 | 418.42 | 33 | 13875.84 | -67.98 | -0.49% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↑415.86 | 3.7059 | 1.35 | **LOSS** |
| 246 | WMT | 05-16 14:05 | 05-16 15:20 | 98.4 | 98.41 | 142 | 13972.8 | +1.42 | +0.01% | 0.01R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 247 | NKE | 05-16 14:10 | 05-16 15:00 | 63.37 | 63.3 | 220 | 13941.4 | -15.4 | -0.11% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 248 | UNH | 05-16 16:35 | 05-16 17:05 | 282.04 | 288.82 | 45 | 12691.8 | +305.1 | +2.4% | 1.31R | 30m | market | profit-target | breakout | breakout | noisyHighBeta | 64.26 | ↑276.57 | -0.1336 | 1.97 | **WIN** |
| 249 | ELF | 05-16 17:40 | 05-16 18:45 | 79.37 | 79.24 | 176 | 13969.12 | -22.88 | -0.16% | 0.23R | 65m | market | stagnation | trend | trend | neutral | 76.47 | ↑77.91 | 0.2957 | 1.37 | **LOSS** |
| 250 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.27 | 134.85 | 104 | 13964.08 | +60.32 | +0.43% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 251 | BAC | 05-19 14:05 | 05-19 14:25 | 45.05 | 44.87 | 310 | 13965.5 | -55.8 | -0.4% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 252 | UNH | 05-19 15:25 | 05-19 16:55 | 308.18 | 313.8 | 22 | 13868.1 | +123.64 | +1.82% | 1.38R | 90m | market | trim-profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 253 | UNH | 05-19 15:25 | 05-19 17:05 | 308.18 | 315.43 | 23 | 13868.1 | +166.75 | +2.35% | 1.78R | 100m | market | profit-target | breakout | trend | thinChop | 75.83 | ↑303.04 | 2.7425 | 1 | **WIN** |
| 254 | RIVN | 05-19 16:00 | 05-19 17:45 | 15.92 | 16.21 | 880 | 14009.6 | +255.2 | +1.82% | 2.3R | 105m | market | timeout | trend | trend | thinChop | 72.22 | ↑15.58 | 0.067 | 1.21 | **WIN** |
| 255 | NVO | 05-19 16:25 | 05-19 16:45 | 66.71 | 66.51 | 209 | 13942.39 | -41.8 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 77.27 | ↑65.96 | 0.2627 | 1.17 | **LOSS** |
| 256 | MU | 05-19 17:00 | 05-19 17:20 | 98.96 | 98.63 | 141 | 13953.36 | -46.53 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 70.97 | ↑97.51 | 0.245 | 1.21 | **LOSS** |
| 257 | SMCI | 05-19 17:05 | 05-19 17:25 | 45.74 | 45.53 | 306 | 13996.44 | -64.26 | -0.46% | 0.52R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.65 | ↑45.44 | 0.0211 | 2.11 | **LOSS** |
| 258 | TSLA | 05-19 17:10 | 05-19 17:50 | 341.89 | 340.6 | 40 | 13675.6 | -51.6 | -0.38% | 0.54R | 40m | market | early-reversal | trend | trend | neutral | 75.57 | ↑338.16 | 0.3835 | 2.23 | **LOSS** |
| 259 | NET | 05-19 17:35 | 05-19 18:15 | 158.6 | 157.54 | 88 | 13956.8 | -93.28 | -0.67% | 0.96R | 40m | market | early-reversal | trend | trend | neutral | 75.75 | ↑156.75 | 0.3478 | 1.69 | **LOSS** |
| 260 | NVO | 05-20 13:40 | 05-20 14:40 | 69.15 | 69.08 | 186 | 12861.9 | -13.02 | -0.1% | 0.09R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 94.03 | ↓69.09 | 0.5109 | 2.82 | **LOSS** |
| 261 | RIVN | 05-20 13:55 | 05-20 14:45 | 16.96 | 16.9 | 828 | 14042.88 | -49.68 | -0.35% | 0.18R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.21 | ↑16.69 | 0.1387 | 1.39 | **LOSS** |
| 262 | TGT | 05-20 14:45 | 05-20 15:35 | 99.1 | 98.9 | 141 | 13973.1 | -28.2 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 263 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.95 | 43.64 | 293 | 12877.35 | -90.83 | -0.71% | 0.68R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 264 | DELL | 05-21 13:40 | 05-21 14:00 | 115.73 | 114.91 | 111 | 12846.03 | -91.02 | -0.71% | 0.96R | 20m | market | early-reversal | breakout | breakout | neutral | 83.42 | ↓114.5 | 0.108 | 1.17 | **LOSS** |
| 265 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.55 | 172.78 | 77 | 12901.35 | +402.71 | +3.12% | 3.35R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 266 | ASML | 05-21 14:00 | 05-21 14:45 | 752.08 | 749.66 | 18 | 13537.44 | -43.56 | -0.32% | 0.46R | 45m | market | early-reversal | trend | trend | thinChop | 73.36 | ↓750.62 | 1.4433 | 2.48 | **LOSS** |
| 267 | HPE | 05-21 14:00 | 05-21 14:35 | 17.97 | 17.9 | 777 | 13962.69 | -54.39 | -0.39% | 0.48R | 35m | market | early-reversal | trend | trend | neutral | 74.38 | ↓17.88 | 0.0552 | 2.42 | **LOSS** |
| 268 | META | 05-21 14:55 | 05-21 15:40 | 644.91 | 642.9 | 21 | 13543.11 | -42.21 | -0.31% | 0.44R | 45m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 269 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.36 | 136.81 | 51 | 13942.08 | +73.95 | +1.07% | 1.53R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 270 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.36 | 137.22 | 52 | 13942.08 | +96.72 | +1.37% | 1.96R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 271 | AVGO | 05-21 15:05 | 05-21 15:55 | 234.69 | 234.55 | 59 | 13846.71 | -8.26 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 78 | ↑231.9 | 0.9065 | 1.44 | **LOSS** |
| 272 | NFLX | 05-21 15:05 | 05-21 15:45 | 1210.25 | 1205.93 | 11 | 13312.75 | -47.52 | -0.36% | 0.51R | 40m | market | early-reversal | trend | trend | neutral | 78.26 | ↑1201.77 | 5.443 | 1.67 | **LOSS** |
| 273 | NET | 05-21 15:10 | 05-21 16:55 | 158.32 | 159.41 | 88 | 13932.16 | +95.92 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 274 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.11 | 154.9 | 90 | 13959.9 | -18.9 | -0.14% | 0.2R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 275 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.68 | 447.3 | 31 | 13878.08 | -11.78 | -0.08% | 0.11R | 65m | market | stagnation | breakout | breakout | neutral | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 276 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.77 | 175.9 | 81 | 13913.37 | +334.53 | +2.4% | 2.4R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 277 | DDOG | 05-22 13:35 | 05-22 14:40 | 115.78 | 115.7 | 120 | 13893.6 | -9.6 | -0.07% | 0.09R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 67.5 | ↓115.09 | -0.0783 | 1.65 | **LOSS** |
| 278 | SNOW | 05-22 13:35 | 05-22 14:10 | 198.06 | 195.81 | 65 | 12873.9 | -146.25 | -1.14% | 0.57R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 88.83 | ↓196.38 | 3.2399 | 3.05 | **LOSS** |
| 279 | TGT | 05-22 13:35 | 05-22 15:15 | 94.45 | 94.46 | 148 | 13978.6 | +1.48 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 58.78 | ↓93.74 | 0.1907 | 1.41 | **WIN** |
| 280 | MDB | 05-22 13:45 | 05-22 14:35 | 188.57 | 187.92 | 74 | 13954.18 | -48.1 | -0.34% | 0.27R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.82 | ↓188.33 | 0.1922 | 1.41 | **LOSS** |
| 281 | PLTR | 05-22 13:50 | 05-22 15:35 | 123.54 | 125.83 | 113 | 13960.02 | +258.77 | +1.85% | 1.45R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑122.43 | 0.1249 | 1.77 | **WIN** |
| 282 | META | 05-22 13:55 | 05-22 14:20 | 641.44 | 639.02 | 21 | 13470.24 | -50.82 | -0.38% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 283 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.8 | 132.74 | 105 | 14049 | -111.3 | -0.79% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 284 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.4 | 202.32 | 68 | 13831.2 | -73.44 | -0.53% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 285 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.85 | 83.17 | 166 | 13919.1 | -112.88 | -0.81% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 286 | MU | 05-22 15:05 | 05-22 15:25 | 97.06 | 96.47 | 144 | 13976.64 | -84.96 | -0.61% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 287 | GS | 05-22 15:35 | 05-22 16:25 | 600.92 | 599.72 | 23 | 13821.16 | -27.6 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | thinChop | 66.16 | ↑596.54 | 1.2402 | 1.06 | **LOSS** |
| 288 | TGT | 05-22 16:10 | 05-22 16:30 | 95.73 | 95.38 | 146 | 13976.58 | -51.1 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 58.73 | ↑94.91 | 0.2533 | 1.01 | **LOSS** |
| 289 | AMZN | 05-22 17:55 | 05-22 18:15 | 205.13 | 204.19 | 68 | 13948.84 | -63.92 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 75.28 | ↑202.98 | 0.1344 | 9.58 | **LOSS** |
| 290 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.07 | 122.44 | 113 | 13906.91 | -71.19 | -0.51% | 0.4R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 291 | CELH | 05-23 14:45 | 05-23 15:05 | 35.91 | 35.72 | 384 | 13789.44 | -72.96 | -0.53% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 69.81 | ↑35.52 | 0.0118 | 1.57 | **LOSS** |
| 292 | AMD | 05-23 17:15 | 05-23 19:00 | 110.52 | 110.52 | 126 | 13925.52 | +0 | +0% | 0R | 105m | market | timeout | trend | trend | neutral | 72.27 | ↑109.17 | 0.2445 | 1.47 | **WIN** |
| 293 | LRCX | 05-23 17:15 | 05-23 18:15 | 81.12 | 81.03 | 172 | 13952.64 | -15.48 | -0.11% | 0.16R | 60m | market | stagnation | trend | trend | thinChop | 76.92 | ↑80.4 | 0.1356 | 1.21 | **LOSS** |
| 294 | MU | 05-23 17:20 | 05-23 17:40 | 93.76 | 93.41 | 149 | 13970.24 | -52.15 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75.14 | ↑91.96 | 0.3904 | 1.38 | **LOSS** |
| 295 | QCOM | 05-23 17:25 | 05-23 18:20 | 146.04 | 145.59 | 95 | 13873.8 | -42.75 | -0.31% | 0.44R | 55m | market | early-reversal | trend | trend | neutral | 77.07 | ↑143.59 | 0.547 | 1.78 | **LOSS** |
| 296 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.97 | 172.17 | 82 | 14019.54 | +98.4 | +0.7% | 0.75R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 297 | INTU | 05-27 13:30 | 05-27 13:45 | 733.8 | 726.36 | 17 | 12474.6 | -126.48 | -1.01% | 1.44R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.5 | ↓730.5 | 1.0404 | 1.38 | **LOSS** |
| 298 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.88 | 161.75 | 87 | 13909.56 | +162.69 | +1.17% | 1.43R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 299 | TSM | 05-27 13:35 | 05-27 15:20 | 194.96 | 195.82 | 71 | 13842.16 | +61.06 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 300 | GS | 05-27 13:35 | 05-27 15:20 | 607.04 | 610.89 | 23 | 13961.92 | +88.55 | +0.63% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 301 | GE | 05-27 13:35 | 05-27 15:20 | 236.46 | 239.99 | 59 | 13951.14 | +208.27 | +1.49% | 2.13R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 302 | SBUX | 05-27 13:35 | 05-27 14:10 | 86.2 | 85.73 | 162 | 13964.4 | -76.14 | -0.55% | 0.79R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 303 | NKE | 05-27 13:35 | 05-27 15:20 | 61.14 | 62.16 | 228 | 13939.92 | +232.56 | +1.67% | 1.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.78 | ↑61.11 | 0.1357 | 1.57 | **WIN** |
| 304 | DIS | 05-27 13:40 | 05-27 15:25 | 111.13 | 112.07 | 125 | 13891.25 | +117.5 | +0.85% | 1.21R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 70.72 | ↑110.71 | 0.0835 | 1.89 | **WIN** |
| 305 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.76 | 161.53 | 87 | 13986.12 | +66.99 | +0.48% | 0.62R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 306 | SNOW | 05-27 13:45 | 05-27 14:20 | 205.96 | 204.8 | 67 | 13799.32 | -77.72 | -0.56% | 0.51R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.97 | ↓204.39 | 0.6946 | 1.93 | **LOSS** |
| 307 | MDB | 05-27 13:45 | 05-27 14:45 | 188.88 | 188.77 | 74 | 13977.12 | -8.14 | -0.06% | 0.07R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 70 | ↓188.58 | 0.8834 | 1.35 | **LOSS** |
| 308 | META | 05-27 14:00 | 05-27 14:30 | 638.86 | 636.91 | 21 | 13416.06 | -40.95 | -0.31% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 309 | LLY | 05-27 14:00 | 05-27 14:20 | 723.23 | 718.48 | 19 | 13741.37 | -90.25 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 310 | DELL | 05-27 14:00 | 05-27 14:35 | 114.74 | 114.25 | 121 | 13883.54 | -59.29 | -0.43% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 74.08 | ↓114.02 | 0.4954 | 1.46 | **LOSS** |
| 311 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.9 | 204.6 | 68 | 13933.2 | -20.4 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 312 | UBER | 05-27 14:25 | 05-27 15:10 | 89.26 | 88.94 | 156 | 13924.56 | -49.92 | -0.36% | 0.3R | 45m | market | early-reversal | trend | trend | neutral | 71.73 | ↑88.52 | 0.2599 | 1.56 | **LOSS** |
| 313 | ARM | 05-27 15:05 | 05-27 16:50 | 134.89 | 135.46 | 103 | 13893.67 | +58.71 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 314 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 778 | 13957.32 | -46.68 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 315 | ELF | 05-27 15:25 | 05-27 15:45 | 89.01 | 88.63 | 157 | 13974.57 | -59.66 | -0.43% | 0.39R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.1 | ↑86.86 | 1.2357 | 2.42 | **LOSS** |
| 316 | AAPL | 05-27 15:55 | 05-27 16:45 | 200.19 | 199.88 | 69 | 13813.11 | -21.39 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 76.64 | ↑198.52 | 0.6872 | 1.42 | **LOSS** |
| 317 | LLY | 05-27 16:40 | 05-27 17:00 | 730.81 | 727.49 | 19 | 13885.39 | -63.08 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 66.22 | ↑721.17 | 1.7683 | 1.5 | **LOSS** |
| 318 | SNOW | 05-27 16:45 | 05-27 17:05 | 207.6 | 206.83 | 67 | 13909.2 | -51.59 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 80.24 | ↑205.3 | 0.3425 | 4.2 | **LOSS** |
| 319 | PLTR | 05-28 13:30 | 05-28 13:55 | 124.93 | 123.26 | 112 | 13992.16 | -187.04 | -1.34% | 1.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 320 | UNH | 05-28 13:30 | 05-28 15:15 | 297.42 | 300.9 | 47 | 13978.74 | +163.56 | +1.17% | 1.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 321 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.34 | 65.18 | 214 | 13982.76 | -34.24 | -0.24% | 0.18R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 322 | SHOP | 05-28 17:15 | 05-28 18:20 | 107.69 | 107.63 | 130 | 13999.7 | -7.8 | -0.06% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 71.77 | ↑106.48 | 0.2939 | 4.58 | **LOSS** |
| 323 | UNH | 05-29 13:35 | 05-29 14:15 | 302.02 | 299.77 | 46 | 13892.92 | -103.5 | -0.74% | 0.87R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 324 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 325 | DDOG | 05-29 16:25 | 05-29 17:15 | 117.98 | 117.52 | 118 | 13921.64 | -54.28 | -0.39% | 0.56R | 50m | market | early-reversal | trend | trend | neutral | 69.89 | ↑117.17 | 0.2742 | 2.36 | **LOSS** |
| 326 | COST | 05-30 13:35 | 05-30 15:20 | 1029.56 | 1041.91 | 13 | 13384.28 | +160.55 | +1.2% | 1.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑1018.28 | 1.9104 | 1.79 | **WIN** |
| 327 | UNH | 05-30 13:50 | 05-30 15:35 | 301 | 302.24 | 46 | 13846 | +57.04 | +0.41% | 0.55R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 328 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.39 | 131.22 | 111 | 14029.29 | +536.13 | +3.82% | 2.25R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 329 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.94 | 361.1 | 38 | 13791.72 | -69.92 | -0.51% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 330 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.16 | 203.93 | 68 | 13882.88 | -15.64 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 331 | NVO | 05-30 15:30 | 05-30 16:25 | 70.96 | 70.78 | 196 | 13908.16 | -35.28 | -0.25% | 0.36R | 55m | market | stagnation | trend | trend | neutral | 78.32 | ↑69.94 | 0.3909 | 1.52 | **LOSS** |
| 332 | COST | 05-30 15:35 | 05-30 16:25 | 1045.43 | 1044.59 | 13 | 13590.59 | -10.92 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | thinChop | 51.58 | ↑1033.4 | 7.9373 | 1.86 | **LOSS** |
| 333 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.13 | 136.31 | 95 | 13027.35 | -77.9 | -0.6% | 0.57R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 334 | PANW | 06-02 13:30 | 06-02 13:50 | 193.75 | 192.12 | 72 | 13950 | -117.36 | -0.84% | 1.11R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 335 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.61 | 466.7 | 29 | 13705.69 | -171.39 | -1.25% | 1.79R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 336 | AMD | 06-02 13:35 | 06-02 14:00 | 113.43 | 112.85 | 123 | 13951.89 | -71.34 | -0.51% | 0.53R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.29 | ↑112.74 | 0.6463 | 2.28 | **LOSS** |
| 337 | AVGO | 06-02 13:35 | 06-02 13:55 | 248.65 | 246.41 | 52 | 12929.8 | -116.48 | -0.9% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓247 | 1.9006 | 1.18 | **LOSS** |
| 338 | PLTR | 06-02 13:35 | 06-02 13:45 | 134 | 132.05 | 105 | 14070 | -204.75 | -1.46% | 1.2R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.42 | ↓133.08 | 1.5619 | 1.85 | **LOSS** |
| 339 | COIN | 06-02 13:35 | 06-02 13:40 | 249.46 | 245.39 | 55 | 13720.3 | -223.85 | -1.63% | 2.26R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 340 | XOM | 06-02 13:35 | 06-02 14:00 | 103.27 | 102.76 | 135 | 13941.45 | -68.85 | -0.49% | 0.7R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.3 | ↓103.11 | 0.2555 | 2 | **LOSS** |
| 341 | UNH | 06-02 13:35 | 06-02 13:55 | 312.13 | 306.6 | 41 | 12797.33 | -226.73 | -1.77% | 1.64R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.75 | ↓309.2 | 1.2285 | 6.95 | **LOSS** |
| 342 | RIVN | 06-03 13:40 | 06-03 14:30 | 14.56 | 14.54 | 896 | 13045.76 | -17.92 | -0.14% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.82 | ↑14.4 | 0.1001 | 1.24 | **LOSS** |
| 343 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.92 | 141.49 | 100 | 13992 | +157 | +1.12% | 1.4R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 344 | CVX | 06-03 14:05 | 06-03 15:50 | 138.97 | 140.33 | 100 | 13897 | +136 | +0.98% | 1.4R | 105m | market | timeout | trend | trend | neutral | 64.13 | ↑138.16 | 0.3444 | 1.99 | **WIN** |
| 345 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 698 | 13932.08 | +202.42 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 346 | CAT | 06-03 14:20 | 06-03 16:05 | 348.69 | 349.85 | 40 | 13947.6 | +46.4 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 347 | DIS | 06-03 14:20 | 06-03 16:05 | 114.15 | 114.48 | 122 | 13926.3 | +40.26 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑113.51 | 0.3433 | 1.91 | **WIN** |
| 348 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 147 | 13928.25 | +186.69 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 349 | SMCI | 06-03 14:35 | 06-03 16:20 | 42.9 | 43.8 | 326 | 13985.4 | +293.4 | +2.1% | 1.15R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.02 | ↑41.83 | 0.4437 | 1.21 | **WIN** |
| 350 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 105 | 13875.75 | +121.8 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 351 | CELH | 06-03 15:15 | 06-03 15:40 | 39.09 | 38.87 | 353 | 13798.77 | -77.66 | -0.56% | 0.35R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 60.03 | ↑38.54 | 0.1264 | 1.25 | **LOSS** |
| 352 | KLAC | 06-03 15:35 | 06-03 17:20 | 776.04 | 776.76 | 18 | 13968.72 | +12.96 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | neutral | 72.85 | ↑772.22 | 4.3454 | 1.28 | **WIN** |
| 353 | TGT | 06-03 16:10 | 06-03 16:30 | 96.14 | 95.84 | 146 | 14036.44 | -43.8 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 70.86 | ↑94.87 | 0.5013 | 1.5 | **LOSS** |
| 354 | TSM | 06-04 13:30 | 06-04 14:00 | 202.13 | 200.7 | 69 | 13946.97 | -98.67 | -0.71% | 1.01R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 355 | UNH | 06-04 13:30 | 06-04 13:50 | 305.75 | 304.48 | 46 | 14064.5 | -58.42 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 356 | TXN | 06-04 13:30 | 06-04 14:00 | 190.17 | 189.53 | 73 | 13882.41 | -46.72 | -0.34% | 0.49R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 357 | DDOG | 06-04 13:40 | 06-04 14:00 | 120.75 | 119.71 | 115 | 13886.25 | -119.6 | -0.86% | 1.21R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 358 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.61 | 204.78 | 68 | 13981.48 | -56.44 | -0.4% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↓204.52 | 0.5322 | 2.23 | **LOSS** |
| 359 | SMCI | 06-04 15:00 | 06-04 15:30 | 44.03 | 43.81 | 318 | 14001.54 | -69.96 | -0.5% | 0.33R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 56.72 | ↓43.81 | 0.0529 | 1.49 | **LOSS** |
| 360 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.51 | 209.17 | 66 | 13893.66 | -88.44 | -0.64% | 0.91R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 361 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.37 | 169.59 | 82 | 13970.34 | -63.96 | -0.46% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 362 | PLTR | 06-05 13:40 | 06-05 14:00 | 132.26 | 130.32 | 106 | 14019.56 | -205.64 | -1.47% | 1.29R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.64 | ↓130.89 | 0.0474 | 2.28 | **LOSS** |
| 363 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 80 | 13986.4 | +356.8 | +2.55% | 2.63R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 364 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.65 | 123.24 | 113 | 13859.45 | +66.67 | +0.48% | 0.49R | 105m | market | timeout | breakout | trend | neutral | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 365 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 132 | 13959 | -60.72 | -0.43% | 0.36R | 20m | market | early-reversal | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 366 | NET | 06-05 15:10 | 06-05 15:35 | 180.54 | 179.3 | 77 | 13901.58 | -95.48 | -0.69% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 367 | NOW | 06-05 15:15 | 06-05 16:05 | 1031.01 | 1029.66 | 13 | 13403.13 | -17.55 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | thinChop | 78.07 | ↑1025.79 | 3.1614 | 3.46 | **LOSS** |
| 368 | TSM | 06-05 15:20 | 06-05 16:05 | 205.75 | 204.75 | 68 | 13991 | -68 | -0.49% | 0.7R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 369 | LRCX | 06-05 15:30 | 06-05 16:15 | 86.04 | 85.57 | 162 | 13938.48 | -76.14 | -0.55% | 0.79R | 45m | market | early-reversal | trend | trend | neutral | 72.75 | ↑85.24 | 0.2421 | 1.62 | **LOSS** |
| 370 | MU | 06-05 15:35 | 06-05 16:15 | 108.59 | 108.14 | 129 | 14008.11 | -58.05 | -0.41% | 0.42R | 40m | market | early-reversal | trend | trend | neutral | 74.3 | ↑107.28 | 0.9372 | 1.41 | **LOSS** |
| 371 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.74 | 171.85 | 76 | 13052.24 | +8.36 | +0.06% | 0.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 372 | META | 06-06 13:30 | 06-06 14:25 | 697.4 | 696.91 | 18 | 12553.2 | -8.82 | -0.07% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 373 | AAPL | 06-06 13:30 | 06-06 13:50 | 205.16 | 204.12 | 62 | 12719.92 | -64.48 | -0.51% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.95 | ↓204.58 | -0.1146 | 2.13 | **LOSS** |
| 374 | PYPL | 06-06 13:30 | 06-06 13:50 | 73.49 | 73.11 | 190 | 13963.1 | -72.2 | -0.52% | 0.68R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 65.18 | ↓73.38 | 0.0047 | 2.35 | **LOSS** |
| 375 | JPM | 06-06 13:30 | 06-06 15:15 | 265.19 | 265.73 | 52 | 13789.88 | +28.08 | +0.2% | 0.29R | 105m | market | timeout | trend | breakout | thinChop | 65.37 | ↑264.86 | -0.1276 | 1.75 | **WIN** |
| 376 | GS | 06-06 13:30 | 06-06 14:20 | 618.42 | 615.34 | 21 | 12986.82 | -64.68 | -0.5% | 0.56R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 377 | TGT | 06-06 13:30 | 06-06 15:15 | 95.32 | 95.9 | 136 | 12963.52 | +78.88 | +0.61% | 0.78R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 378 | XOM | 06-06 13:35 | 06-06 15:20 | 103.77 | 104.11 | 134 | 13905.18 | +45.56 | +0.33% | 0.47R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 379 | ABNB | 06-06 13:40 | 06-06 14:05 | 142.73 | 141.56 | 90 | 12845.7 | -105.3 | -0.82% | 0.56R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.75 | ↓141.78 | 0.8906 | 2.3 | **LOSS** |
| 380 | NET | 06-06 13:40 | 06-06 14:05 | 180.81 | 179.53 | 71 | 12837.51 | -90.88 | -0.71% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.41 | ↓178.82 | -0.3706 | 1.46 | **LOSS** |
| 381 | GE | 06-06 13:40 | 06-06 14:00 | 256.93 | 256.05 | 54 | 13874.22 | -47.52 | -0.34% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.73 | ↓255.21 | 0.6662 | 1.5 | **LOSS** |
| 382 | DELL | 06-06 14:25 | 06-06 16:10 | 114.27 | 114.77 | 122 | 13940.94 | +61 | +0.44% | 0.48R | 105m | market | timeout | trend | trend | neutral | 72.16 | ↑113.92 | 0.3493 | 2.63 | **WIN** |
| 383 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.67 | 149.89 | 92 | 13861.64 | -71.76 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 384 | ARM | 06-06 15:05 | 06-06 15:25 | 134.99 | 134.25 | 103 | 13903.97 | -76.22 | -0.55% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 385 | KLAC | 06-09 13:35 | 06-09 14:25 | 824.08 | 823.38 | 17 | 14009.36 | -11.9 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.74 | ↑822.65 | 1.4407 | 1.17 | **LOSS** |
| 386 | ORCL | 06-09 13:40 | 06-09 15:25 | 176.76 | 177.36 | 79 | 13964.04 | +47.4 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.66 | ↓175.24 | 0.4223 | 1.33 | **WIN** |
| 387 | TGT | 06-09 13:40 | 06-09 13:45 | 99.21 | 97.75 | 141 | 13988.61 | -205.86 | -1.47% | 2.1R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 388 | UBER | 06-09 13:45 | 06-09 14:35 | 87.45 | 87.4 | 160 | 13992 | -8 | -0.06% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 389 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.71 | 70.1 | 197 | 13929.87 | -120.17 | -0.86% | 0.61R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 390 | SMCI | 06-09 14:25 | 06-09 14:50 | 43.27 | 42.89 | 324 | 14019.48 | -123.12 | -0.88% | 0.52R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 85.71 | ↑42.68 | 0.393 | 1.46 | **LOSS** |
| 391 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.81 | 144.16 | 97 | 14046.57 | -63.05 | -0.45% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 392 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 65 | 13962.65 | +94.25 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 393 | KLAC | 06-09 15:10 | 06-09 15:30 | 835 | 831.12 | 16 | 13360 | -62.08 | -0.46% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 68.82 | ↑826.47 | 6.4471 | 1.67 | **LOSS** |
| 394 | BA | 06-09 17:20 | 06-09 17:40 | 218.62 | 217.48 | 64 | 13991.68 | -72.96 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 75.61 | ↑215.54 | 0.7142 | 1.49 | **LOSS** |
| 395 | NVO | 06-09 17:25 | 06-09 18:40 | 75.44 | 75.37 | 185 | 13956.4 | -12.95 | -0.09% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 73.82 | ↑74.91 | 0.1941 | 1.5 | **LOSS** |
| 396 | TSLA | 06-09 17:45 | 06-09 19:30 | 299.13 | 304.57 | 46 | 13759.98 | +250.24 | +1.82% | 2.6R | 105m | market | timeout | trend | trend | noisyHighBeta | 75.72 | ↑292.64 | 0.7899 | 1.88 | **WIN** |
| 397 | XOM | 06-10 13:30 | 06-10 13:50 | 106.57 | 106.13 | 120 | 12788.4 | -52.8 | -0.41% | 0.59R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.37 | ↓106.33 | -0.0398 | 1.25 | **LOSS** |
| 398 | TSLA | 06-10 13:35 | 06-10 14:40 | 313.54 | 313.28 | 44 | 13795.76 | -11.44 | -0.08% | 0.05R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.25 | ↓313.22 | 3.6775 | 1.35 | **LOSS** |
| 399 | TSM | 06-10 13:35 | 06-10 15:15 | 211.7 | 211.4 | 66 | 13972.2 | -19.8 | -0.14% | 0.19R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.36 | ↓211.23 | 0.7821 | 2.35 | **LOSS** |
| 400 | LLY | 06-10 13:40 | 06-10 15:30 | 786.21 | 794.48 | 17 | 13365.57 | +140.59 | +1.05% | 1.44R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 401 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.71 | 121.9 | 113 | 13979.23 | -204.53 | -1.46% | 1.8R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 402 | ELF | 06-10 13:45 | 06-10 14:45 | 119.12 | 119.73 | 117 | 13937.04 | +71.37 | +0.51% | 0.63R | 60m | market | trailing-stop | breakout | breakout | neutral | 64.5 | ↓117.77 | -0.04 | 1.19 | **WIN** |
| 403 | CVX | 06-10 14:10 | 06-10 15:45 | 143.46 | 144.5 | 48 | 13915.62 | +49.92 | +0.72% | 0.91R | 95m | market | trim-profit-target | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 404 | CVX | 06-10 14:10 | 06-10 15:55 | 143.46 | 144.37 | 49 | 13915.62 | +44.59 | +0.63% | 0.8R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 405 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.34 | 203.44 | 68 | 13895.12 | -61.2 | -0.44% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 406 | TSLA | 06-10 15:10 | 06-10 15:30 | 319.71 | 316.76 | 43 | 13747.53 | -126.85 | -0.92% | 0.74R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 62.06 | ↑314.58 | 3.2784 | 1.13 | **LOSS** |
| 407 | LRCX | 06-10 15:55 | 06-10 17:40 | 90.66 | 91.08 | 153 | 13870.98 | +64.26 | +0.46% | 0.66R | 105m | market | timeout | trend | trend | neutral | 62.65 | ↑89.75 | 0.3895 | 1.04 | **WIN** |
| 408 | PYPL | 06-10 16:45 | 06-10 17:05 | 75.18 | 74.82 | 185 | 13908.3 | -66.6 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 77.2 | ↑74.32 | 0.1754 | 1.91 | **LOSS** |
| 409 | SBUX | 06-11 13:35 | 06-11 15:20 | 94.05 | 94.62 | 138 | 12978.9 | +78.66 | +0.61% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 94.98 | ↑93.45 | 0.5126 | 2.05 | **WIN** |
| 410 | GE | 06-11 14:05 | 06-11 15:50 | 245.12 | 246.2 | 57 | 13971.84 | +61.56 | +0.44% | 0.44R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 411 | IBM | 06-11 14:30 | 06-11 16:15 | 278.09 | 279.52 | 50 | 13904.5 | +71.5 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | thinChop | 69.81 | ↑276.91 | 0.552 | 1.29 | **WIN** |
| 412 | ELF | 06-11 14:45 | 06-11 16:30 | 122.66 | 123.83 | 114 | 13983.24 | +133.38 | +0.95% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 71.72 | ↑121.03 | 1.2031 | 1.35 | **WIN** |
| 413 | ORCL | 06-12 13:35 | 06-12 14:30 | 194.64 | 200.78 | 66 | 12846.24 | +405.24 | +3.15% | 1.58R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.33 | ↑192.33 | 3.8358 | 2.56 | **WIN** |
| 414 | CRWD | 06-12 13:40 | 06-12 14:00 | 485.61 | 481.1 | 28 | 13597.08 | -126.28 | -0.93% | 1.04R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.82 | ↓482.32 | 1.0978 | 3.04 | **LOSS** |
| 415 | SNOW | 06-12 13:50 | 06-12 14:10 | 211.63 | 210.16 | 65 | 13755.95 | -95.55 | -0.69% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.71 | ↓210.84 | 0.5133 | 3.96 | **LOSS** |
| 416 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.13 | 256.22 | 54 | 13885.02 | -49.14 | -0.35% | 0.35R | 65m | market | early-reversal | breakout | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 417 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.9 | 174.31 | 80 | 13992 | -47.2 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 418 | NVDA | 06-12 14:40 | 06-12 15:20 | 144.82 | 144.39 | 97 | 14047.54 | -41.71 | -0.3% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 419 | BA | 06-12 17:10 | 06-12 17:30 | 205.88 | 204.3 | 68 | 13999.84 | -107.44 | -0.77% | 1.04R | 20m | market | stop-loss | trend | trend | neutral | 72.85 | ↑203.8 | 0.4887 | 1.35 | **LOSS** |
| 420 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.62 | 210.82 | 68 | 13914.16 | +421.6 | +3.03% | 2.59R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 421 | INTC | 06-13 13:35 | 06-13 13:55 | 20.56 | 20.32 | 679 | 13960.24 | -162.96 | -1.17% | 1.67R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 422 | LMT | 06-13 13:35 | 06-13 13:55 | 486.53 | 481.19 | 26 | 12649.78 | -138.84 | -1.1% | 1.39R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 98.1 | ↓481.73 | 2.6569 | 1.69 | **LOSS** |
| 423 | ORCL | 06-13 15:30 | 06-13 17:10 | 211.42 | 213.35 | 33 | 13953.72 | +63.69 | +0.91% | 0.8R | 100m | market | trim-profit-target | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 424 | ORCL | 06-13 15:30 | 06-13 17:15 | 211.42 | 213 | 33 | 13953.72 | +52.14 | +0.75% | 0.66R | 105m | market | timeout | trend | trend | neutral | 70.64 | ↑207.37 | 2.4525 | 1.65 | **WIN** |
| 425 | NET | 06-13 15:55 | 06-13 16:25 | 172.4 | 171.74 | 81 | 13964.4 | -53.46 | -0.38% | 0.54R | 30m | market | early-reversal | trend | trend | thinChop | 79.54 | ↑169.74 | 0.688 | 1.05 | **LOSS** |
| 426 | COIN | 06-13 17:40 | 06-13 18:00 | 241.33 | 240.18 | 57 | 13755.81 | -65.55 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 62.13 | ↑238.38 | 0.7294 | 1.21 | **LOSS** |
| 427 | MU | 06-16 13:30 | 06-16 15:15 | 118.6 | 120.66 | 118 | 13994.8 | +243.08 | +1.74% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 428 | GS | 06-16 13:30 | 06-16 15:15 | 624.32 | 630.46 | 20 | 12486.4 | +122.8 | +0.98% | 1.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 429 | TXN | 06-16 13:30 | 06-16 15:15 | 197.72 | 199.23 | 58 | 11467.76 | +87.58 | +0.76% | 0.97R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 430 | AMD | 06-16 13:35 | 06-16 14:15 | 120.52 | 124.24 | 115 | 13859.8 | +427.8 | +3.09% | 2.15R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.82 | ↑119.69 | 0.9613 | 2.52 | **WIN** |
| 431 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.73 | 1221.7 | 11 | 13483.03 | -44.33 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 432 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.62 | 142.32 | 98 | 14074.76 | -127.4 | -0.91% | 0.58R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 433 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.85 | 108.96 | 129 | 13912.65 | +143.19 | +1.03% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 434 | MA | 06-16 13:35 | 06-16 15:10 | 572.48 | 572.04 | 24 | 13739.52 | -10.56 | -0.08% | 0.11R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.16 | ↑569.61 | 1.3516 | 1.19 | **LOSS** |
| 435 | WMT | 06-16 13:40 | 06-16 14:35 | 95.36 | 95.1 | 146 | 13922.56 | -37.96 | -0.27% | 0.39R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 72.52 | ↓95.1 | 0.094 | 1.49 | **LOSS** |
| 436 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.53 | 175.79 | 80 | 13962.4 | +100.8 | +0.72% | 0.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 437 | RIVN | 06-16 13:45 | 06-16 15:30 | 13.76 | 14.02 | 1020 | 14035.2 | +265.2 | +1.89% | 1.78R | 105m | market | timeout | breakout | breakout | neutral | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 438 | ASML | 06-16 13:50 | 06-16 15:35 | 771.35 | 776.22 | 15 | 11570.25 | +73.05 | +0.63% | 0.9R | 105m | market | timeout | mixed | breakout | falseBreakoutProne | 69.1 | ↑769.38 | -0.9416 | 1.54 | **WIN** |
| 439 | ADBE | 06-16 14:00 | 06-16 14:20 | 404.7 | 399.05 | 34 | 13759.8 | -192.1 | -1.4% | 1.27R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.04 | ↓399.94 | 2.3777 | 1.36 | **LOSS** |
| 440 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 68 | 13859.76 | -60.52 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 441 | AMD | 06-16 14:20 | 06-16 16:05 | 125.13 | 126.91 | 112 | 14014.56 | +199.36 | +1.42% | 0.85R | 105m | market | timeout | breakout | breakout | extendedBreakout | 97.1 | ↑122.36 | 2.3391 | 2.66 | **WIN** |
| 442 | PANW | 06-16 15:45 | 06-16 16:15 | 199.72 | 199.08 | 69 | 13780.68 | -44.16 | -0.32% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 76.38 | ↑198.29 | 0.5704 | 1.4 | **LOSS** |
| 443 | ELF | 06-16 16:20 | 06-16 16:45 | 128.1 | 127.69 | 109 | 13962.9 | -44.69 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 66.23 | ↑126.87 | 0.5356 | 2.55 | **LOSS** |
| 444 | CELH | 06-16 17:25 | 06-16 17:45 | 44.14 | 43.88 | 312 | 13771.68 | -81.12 | -0.59% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 73.27 | ↑43.73 | 0.0051 | 1.35 | **LOSS** |
| 445 | MU | 06-17 13:35 | 06-17 14:40 | 122.29 | 122.06 | 104 | 12718.16 | -23.92 | -0.19% | 0.21R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↓121.29 | 0.3381 | 1.18 | **LOSS** |
| 446 | CVX | 06-17 13:35 | 06-17 14:55 | 148.4 | 148.31 | 86 | 12762.4 | -7.74 | -0.06% | 0.09R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.21 | ↓147.77 | 0.4112 | 1.42 | **LOSS** |
| 447 | ORCL | 06-17 13:45 | 06-17 14:35 | 214.51 | 213.95 | 60 | 12870.6 | -33.6 | -0.26% | 0.27R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.6 | ↓213.02 | 0.5016 | 1.44 | **LOSS** |
| 448 | ARM | 06-17 13:45 | 06-17 14:40 | 145.42 | 146.46 | 87 | 12651.54 | +90.48 | +0.72% | 0.58R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 75.74 | ↓143.64 | 0.4938 | 1.52 | **WIN** |
| 449 | KLAC | 06-17 13:50 | 06-17 15:35 | 904.26 | 907.54 | 14 | 12659.64 | +45.92 | +0.36% | 0.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.69 | ↑896.95 | 2.6145 | 2.48 | **WIN** |
| 450 | DELL | 06-17 13:55 | 06-17 15:40 | 115.53 | 117.42 | 121 | 13979.13 | +228.69 | +1.64% | 2.1R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 451 | AMAT | 06-17 14:10 | 06-17 14:30 | 178.13 | 177.42 | 78 | 13894.14 | -55.38 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑176.88 | 0.4141 | 2.9 | **LOSS** |
| 452 | AMD | 06-17 14:15 | 06-17 14:35 | 130.49 | 129.25 | 107 | 13962.43 | -132.68 | -0.95% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 54.5 | ↑128.73 | 0.7912 | 1.62 | **LOSS** |
| 453 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 454 | GE | 06-17 15:10 | 06-17 15:30 | 238.82 | 236.67 | 58 | 13851.56 | -124.7 | -0.9% | 1.29R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 455 | AMAT | 06-17 16:00 | 06-17 16:20 | 178.32 | 177.42 | 78 | 13908.96 | -70.2 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | thinChop | 68 | ↑177.11 | 0.2299 | 1.04 | **LOSS** |
| 456 | ELF | 06-17 17:25 | 06-17 17:45 | 125.33 | 124.75 | 111 | 13911.63 | -64.38 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑123.49 | 0.2864 | 1.57 | **LOSS** |
| 457 | JPM | 06-18 13:35 | 06-18 15:20 | 273.19 | 274.7 | 51 | 13932.69 | +77.01 | +0.55% | 0.79R | 105m | market | timeout | breakout | breakout | thinChop | 90.43 | ↓271.81 | 0.4584 | 1.47 | **WIN** |
| 458 | RIVN | 06-18 13:35 | 06-18 15:20 | 13.61 | 13.74 | 1034 | 14072.74 | +134.42 | +0.96% | 1.22R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.57 | ↑13.5 | 0.0001 | 1.78 | **WIN** |
| 459 | GS | 06-18 13:45 | 06-18 15:30 | 633.36 | 634.96 | 22 | 13933.92 | +35.2 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 460 | AMD | 06-18 14:00 | 06-18 14:45 | 128.84 | 128.29 | 108 | 13914.72 | -59.4 | -0.43% | 0.34R | 45m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 461 | BAC | 06-18 14:00 | 06-18 14:50 | 44.89 | 44.85 | 311 | 13960.79 | -12.44 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.5 | ↑44.66 | 0.1465 | 1.35 | **LOSS** |
| 462 | MU | 06-18 14:30 | 06-18 14:50 | 122.52 | 121.58 | 114 | 13967.28 | -107.16 | -0.77% | 0.88R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 463 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.28 | 70.96 | 195 | 13899.6 | -62.4 | -0.45% | 0.64R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 464 | CRM | 06-20 13:30 | 06-20 13:50 | 262.26 | 260.62 | 53 | 13899.78 | -86.92 | -0.63% | 0.85R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.75 | ↓261.57 | 0.2649 | 2.17 | **LOSS** |
| 465 | AAPL | 06-20 13:35 | 06-20 13:55 | 200.56 | 199.68 | 69 | 13838.64 | -60.72 | -0.44% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.2 | ↓199.57 | 0.7936 | 2.76 | **LOSS** |
| 466 | AMD | 06-20 13:35 | 06-20 14:15 | 131.75 | 130.59 | 98 | 12911.5 | -113.68 | -0.88% | 0.67R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.04 | ↓130.29 | 0.6851 | 2.57 | **LOSS** |
| 467 | MDB | 06-20 13:35 | 06-20 13:55 | 211.25 | 207.92 | 60 | 12675 | -199.8 | -1.58% | 1.39R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.66 | ↓210.8 | 1.5576 | 1.88 | **LOSS** |
| 468 | WMT | 06-20 13:35 | 06-20 13:50 | 96.34 | 95.53 | 145 | 13969.3 | -117.45 | -0.84% | 1.2R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.9 | ↓95.99 | 0.1675 | 1.81 | **LOSS** |
| 469 | DELL | 06-20 13:40 | 06-20 14:20 | 118.46 | 117.72 | 118 | 13978.28 | -87.32 | -0.62% | 0.53R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.74 | ↓118.56 | 0.2368 | 1.28 | **LOSS** |
| 470 | SMCI | 06-20 14:00 | 06-20 14:20 | 45.95 | 44.9 | 304 | 13968.8 | -319.2 | -2.29% | 1.89R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 73.08 | ↓45.64 | 0.281 | 1.71 | **LOSS** |
| 471 | INTC | 06-23 13:35 | 06-23 14:40 | 21.36 | 21.37 | 652 | 13926.72 | +6.52 | +0.05% | 0.07R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 472 | CAT | 06-23 13:35 | 06-23 14:25 | 365.65 | 364.28 | 38 | 13894.7 | -52.06 | -0.37% | 0.53R | 50m | market | early-reversal | breakout | breakout | thinChop | 81.36 | ↓363.99 | 0.6127 | 2.8 | **LOSS** |
| 473 | COST | 06-23 13:35 | 06-23 14:00 | 992.5 | 988.69 | 14 | 13895 | -53.34 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | thinChop | 75.81 | ↓989.29 | 0.6317 | 3.16 | **LOSS** |
| 474 | TSLA | 06-23 13:40 | 06-23 14:10 | 334.58 | 343.77 | 38 | 12714.04 | +349.22 | +2.75% | 1.66R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 86.87 | ↑333.01 | 1.9842 | 2.83 | **WIN** |
| 475 | IBM | 06-23 13:40 | 06-23 15:25 | 284.5 | 286.13 | 49 | 13940.5 | +79.87 | +0.57% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 476 | RIVN | 06-23 13:50 | 06-23 15:35 | 13.73 | 13.84 | 1027 | 14100.71 | +112.97 | +0.8% | 0.55R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.44 | ↑13.58 | -0.0091 | 1.76 | **WIN** |
| 477 | ARM | 06-23 14:00 | 06-23 15:05 | 147.17 | 147.06 | 94 | 13833.98 | -10.34 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 478 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.56 | 213.31 | 65 | 13881.4 | -16.25 | -0.12% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 479 | LRCX | 06-23 14:00 | 06-23 14:50 | 92.45 | 92.26 | 151 | 13959.95 | -28.69 | -0.21% | 0.23R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 480 | AMD | 06-23 14:05 | 06-23 14:30 | 133.2 | 131.59 | 105 | 13986 | -169.05 | -1.21% | 0.61R | 25m | market | early-reversal | breakout | trend | neutral | 71.93 | ↓131.31 | 0.9482 | 1.01 | **LOSS** |
| 481 | DDOG | 06-23 14:05 | 06-23 15:50 | 129.01 | 129.55 | 108 | 13933.08 | +58.32 | +0.42% | 0.47R | 105m | market | timeout | trend | trend | neutral | 67.14 | ↑127.72 | 0.218 | 1.29 | **WIN** |
| 482 | KLAC | 06-23 14:05 | 06-23 14:25 | 859.47 | 852.05 | 16 | 13751.52 | -118.72 | -0.86% | 1.23R | 20m | market | stop-loss | trend | trend | neutral | 78.91 | ↓855.15 | 2.4106 | 1.28 | **LOSS** |
| 483 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.53 | 377.96 | 36 | 13663.08 | -56.52 | -0.41% | 0.59R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 484 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 485 | TSLA | 06-23 14:20 | 06-23 16:05 | 350.07 | 354.74 | 40 | 14002.8 | +186.8 | +1.33% | 0.67R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.3 | ↑339.94 | 6.6463 | 2.31 | **WIN** |
| 486 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.52 | 107.99 | 129 | 13999.08 | -68.37 | -0.49% | 0.35R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 487 | NET | 06-23 14:25 | 06-23 14:45 | 181.79 | 180.66 | 77 | 13997.83 | -87.01 | -0.62% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 488 | CRWD | 06-23 15:40 | 06-23 16:05 | 485.27 | 483.73 | 28 | 13587.56 | -43.12 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | thinChop | 73.68 | ↑476.66 | 2.2235 | 1.07 | **LOSS** |
| 489 | AVGO | 06-23 17:15 | 06-23 19:00 | 251.88 | 253.4 | 55 | 13853.4 | +83.6 | +0.6% | 0.73R | 105m | market | timeout | trend | trend | neutral | 62.92 | ↑249.22 | 0.4843 | 1.7 | **WIN** |
| 490 | MSFT | 06-23 17:20 | 06-23 19:05 | 485.14 | 485.31 | 28 | 13583.92 | +4.76 | +0.04% | 0.06R | 105m | market | timeout | trend | trend | thinChop | 75.4 | ↑478.25 | 1.5633 | 2.81 | **WIN** |
| 491 | NKE | 06-23 17:20 | 06-23 19:05 | 60.58 | 61.22 | 231 | 13993.98 | +147.84 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 70.13 | ↑60.07 | 0.0505 | 1.51 | **WIN** |
| 492 | RIVN | 06-23 17:35 | 06-23 17:55 | 13.88 | 13.82 | 1017 | 14115.96 | -61.02 | -0.43% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 73.11 | ↑13.75 | -0.0252 | 1.3 | **LOSS** |
| 493 | NET | 06-23 17:40 | 06-23 19:25 | 182.5 | 183.96 | 76 | 13870 | +110.96 | +0.8% | 1.14R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑180.39 | 0.1582 | 1.81 | **WIN** |
| 494 | CRM | 06-24 13:35 | 06-24 15:20 | 267.6 | 270.56 | 52 | 13915.2 | +153.92 | +1.11% | 1.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 495 | ORCL | 06-24 13:35 | 06-24 15:20 | 211.62 | 214.29 | 66 | 13966.92 | +176.22 | +1.26% | 1.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 97.77 | ↑210.26 | 1.0072 | 1.16 | **WIN** |
| 496 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.33 | 642 | 13924.98 | +410.88 | +2.95% | 4.21R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 497 | TSM | 06-24 13:35 | 06-24 15:20 | 216.61 | 218.83 | 60 | 12996.6 | +133.2 | +1.02% | 1.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.51 | ↑215.78 | 0.9191 | 7.36 | **WIN** |
| 498 | COIN | 06-24 13:35 | 06-24 14:10 | 316.51 | 332.68 | 44 | 13926.44 | +711.48 | +5.11% | 4.33R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.79 | ↑314.31 | 1.6507 | 1.32 | **WIN** |
| 499 | NOW | 06-24 13:35 | 06-24 13:55 | 990.55 | 985.98 | 14 | 13867.7 | -63.98 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 500 | BAC | 06-24 13:35 | 06-24 13:55 | 47.14 | 46.94 | 296 | 13953.44 | -59.2 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.98 | ↓46.98 | 0.2285 | 1.12 | **LOSS** |
| 501 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.94 | 74.81 | 177 | 12910.38 | +330.99 | +2.56% | 1.8R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 502 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.74 | 146.9 | 95 | 14035.3 | -79.8 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 503 | MU | 06-24 13:40 | 06-24 15:25 | 125.74 | 126.36 | 111 | 13957.14 | +68.82 | +0.49% | 0.39R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.94 | ↓125.52 | 0.6157 | 1.59 | **WIN** |
| 504 | AMAT | 06-24 13:40 | 06-24 15:25 | 177.18 | 178.25 | 73 | 12934.14 | +78.11 | +0.6% | 0.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑176.74 | 1.0258 | 1.39 | **WIN** |
| 505 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.79 | 212.29 | 65 | 13896.35 | -97.5 | -0.7% | 0.89R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 506 | META | 06-24 13:45 | 06-24 14:05 | 712.03 | 704.03 | 19 | 13528.57 | -152 | -1.12% | 1.42R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 507 | QCOM | 06-24 13:45 | 06-24 14:05 | 155.83 | 154.97 | 89 | 13868.87 | -76.54 | -0.55% | 0.79R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 508 | UBER | 06-24 14:20 | 06-24 16:05 | 90.57 | 91.26 | 154 | 13947.78 | +106.26 | +0.76% | 0.41R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.99 | ↑89.24 | 1.5565 | 1.94 | **WIN** |
| 509 | COIN | 06-24 14:35 | 06-24 15:00 | 335.67 | 333.12 | 41 | 13762.47 | -104.55 | -0.76% | 0.38R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.01 | ↑327.78 | 7.3187 | 1.13 | **LOSS** |
| 510 | ARM | 06-24 14:50 | 06-24 15:45 | 154.67 | 154.49 | 90 | 13920.3 | -16.2 | -0.12% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 63.25 | ↑153.56 | 1.6211 | 1.47 | **LOSS** |
| 511 | DELL | 06-24 15:20 | 06-24 15:40 | 121.63 | 121 | 115 | 13987.45 | -72.45 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 73.49 | ↑120.69 | 0.8721 | 1.35 | **LOSS** |
| 512 | COIN | 06-24 16:00 | 06-24 16:20 | 338.16 | 335.59 | 41 | 13864.56 | -105.37 | -0.76% | 0.55R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 51.17 | ↑330.92 | 4.2825 | 1.47 | **LOSS** |
| 513 | INTC | 06-24 16:15 | 06-24 17:20 | 22.53 | 22.44 | 621 | 13991.13 | -55.89 | -0.4% | 0.43R | 65m | market | early-reversal | trend | trend | neutral | 48.55 | ↑22.18 | 0.1503 | 1.16 | **LOSS** |
| 514 | ARM | 06-24 16:35 | 06-24 17:05 | 156.06 | 155.45 | 89 | 13889.34 | -54.29 | -0.39% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 58.55 | ↑154.35 | 0.4636 | 1.45 | **LOSS** |
| 515 | AMAT | 06-24 16:35 | 06-24 16:55 | 179.29 | 178.73 | 78 | 13984.62 | -43.68 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 66.17 | ↑177.73 | 0.3206 | 2.28 | **LOSS** |
| 516 | COIN | 06-24 16:50 | 06-24 18:35 | 339.52 | 345.97 | 41 | 13920.32 | +264.45 | +1.9% | 2.02R | 105m | market | timeout | trend | trend | thinChop | 70.47 | ↑331.51 | 1.2126 | 1.04 | **WIN** |
| 517 | ABNB | 06-24 17:35 | 06-24 17:55 | 132.69 | 132.22 | 105 | 13932.45 | -49.35 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 77.13 | ↑131.36 | 0.2275 | 1.86 | **LOSS** |
| 518 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.35 | 168.98 | 83 | 14056.05 | -30.71 | -0.22% | 0.31R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 519 | LLY | 06-25 16:30 | 06-25 16:50 | 797.88 | 795.2 | 17 | 13563.96 | -45.56 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 66.11 | ↑787.37 | 3.6999 | 1.52 | **LOSS** |
| 520 | ELF | 06-25 17:45 | 06-25 18:35 | 125.12 | 124.96 | 111 | 13888.32 | -17.76 | -0.13% | 0.17R | 50m | market | stagnation | breakout | breakout | neutral | 65.41 | ↑122.45 | 0.7257 | 1.33 | **LOSS** |
| 521 | PLTR | 06-26 13:30 | 06-26 14:05 | 145.36 | 144.77 | 96 | 13954.56 | -56.64 | -0.41% | 0.48R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 84.83 | ↓145.5 | 0.3745 | 5.23 | **LOSS** |
| 522 | GS | 06-26 13:30 | 06-26 15:15 | 677.63 | 684.17 | 20 | 13552.6 | +130.8 | +0.97% | 1.39R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 523 | JPM | 06-26 13:35 | 06-26 15:25 | 287.51 | 288.32 | 48 | 13800.48 | +38.88 | +0.28% | 0.4R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 89.74 | ↑286.59 | 0.5538 | 1.77 | **WIN** |
| 524 | GE | 06-26 13:45 | 06-26 15:30 | 253.81 | 253.97 | 55 | 13959.55 | +8.8 | +0.06% | 0.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.54 | ↓252.51 | 0.7105 | 1.44 | **WIN** |
| 525 | RIVN | 06-26 13:45 | 06-26 15:30 | 13.94 | 13.95 | 1012 | 14107.28 | +10.12 | +0.07% | 0.06R | 105m | market | timeout | trend | breakout | neutral | 58.49 | ↓13.87 | 0.0226 | 2.31 | **WIN** |
| 526 | PANW | 06-26 14:10 | 06-26 14:35 | 206.48 | 205.8 | 67 | 13834.16 | -45.56 | -0.33% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 69.17 | ↑205.5 | 0.5917 | 1.33 | **LOSS** |
| 527 | DELL | 06-26 14:40 | 06-26 15:05 | 126.79 | 126.29 | 110 | 13946.9 | -55 | -0.39% | 0.36R | 25m | market | early-reversal | trend | trend | cleanTrend | 68.67 | ↑125.39 | 1.5224 | 3.95 | **LOSS** |
| 528 | COIN | 06-26 16:20 | 06-26 18:05 | 370.8 | 379.19 | 37 | 13719.6 | +310.43 | +2.26% | 2.26R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 55.55 | ↑367.22 | -0.0756 | 2.81 | **WIN** |
| 529 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 605 | 13981.55 | -30.25 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 530 | TSM | 06-27 14:05 | 06-27 15:50 | 226.78 | 228.18 | 61 | 13833.58 | +85.4 | +0.62% | 0.89R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 531 | ADP | 06-27 14:15 | 06-27 14:55 | 306.05 | 304.85 | 45 | 13772.25 | -54 | -0.39% | 0.56R | 40m | market | early-reversal | trend | trend | neutral | 75.07 | ↑304.09 | 0.7715 | 1.37 | **LOSS** |
| 532 | COST | 06-27 14:50 | 06-27 15:45 | 988.99 | 988.12 | 14 | 13845.86 | -12.18 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 533 | GE | 06-27 15:05 | 06-27 16:50 | 257.7 | 258.78 | 54 | 13915.8 | +58.32 | +0.42% | 0.6R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 534 | NKE | 06-27 15:45 | 06-27 16:30 | 73.22 | 73.17 | 191 | 13985.02 | -9.55 | -0.07% | 0.06R | 45m | market | breakeven-stop | trend | trend | neutral | 76.06 | ↑71.92 | 1.3669 | 1.23 | **LOSS** |
| 535 | TGT | 06-27 16:05 | 06-27 16:55 | 99.76 | 99.55 | 140 | 13966.4 | -29.4 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 73.29 | ↑98.99 | 0.2903 | 2.76 | **LOSS** |
| 536 | CELH | 06-27 16:05 | 06-27 16:40 | 45.89 | 45.74 | 300 | 13767 | -45 | -0.33% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 62.55 | ↑45.45 | 0.0746 | 1.96 | **LOSS** |
| 537 | HD | 06-27 16:10 | 06-27 17:00 | 369.38 | 368.41 | 37 | 13667.06 | -35.89 | -0.26% | 0.37R | 50m | market | stagnation | trend | trend | neutral | 75.19 | ↑366.27 | 0.9883 | 2.68 | **LOSS** |
| 538 | LOW | 06-27 16:20 | 06-27 17:05 | 224.9 | 224.18 | 62 | 13943.8 | -44.64 | -0.32% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 69.77 | ↑223.24 | 0.6804 | 2.22 | **LOSS** |
| 539 | JPM | 06-30 13:30 | 06-30 15:05 | 290.66 | 290.47 | 48 | 13951.68 | -9.12 | -0.07% | 0.1R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.05 | ↓291.04 | 0.1761 | 1.84 | **LOSS** |
| 540 | SMCI | 06-30 13:35 | 06-30 14:35 | 48.95 | 50.18 | 285 | 13950.75 | +350.55 | +2.51% | 1.58R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.88 | ↑48.67 | 0.1708 | 1.8 | **WIN** |
| 541 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.13 | 93.23 | 148 | 13931.24 | -133.2 | -0.96% | 1.35R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 542 | HPE | 06-30 14:00 | 06-30 15:45 | 20.76 | 20.89 | 672 | 13950.72 | +87.36 | +0.63% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.86 | ↑20.6 | 0.6063 | 1.37 | **WIN** |
| 543 | TGT | 07-01 13:35 | 07-01 14:40 | 100.22 | 102.9 | 139 | 13930.58 | +372.52 | +2.67% | 3.81R | 65m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.07 | ↑99.62 | 0.2691 | 3.39 | **WIN** |
| 544 | UNH | 07-01 13:50 | 07-01 15:35 | 317.19 | 323.98 | 44 | 13956.36 | +298.76 | +2.14% | 2.43R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 545 | HD | 07-01 14:20 | 07-01 16:05 | 370.2 | 378.8 | 37 | 13697.4 | +318.2 | +2.32% | 3.31R | 105m | market | timeout | trend | trend | thinChop | 68.85 | ↑367.25 | 0.617 | 1.07 | **WIN** |
| 546 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.12 | 616 | 13970.88 | +271.04 | +1.94% | 2.31R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 547 | ELF | 07-01 14:55 | 07-01 16:20 | 128.34 | 128.27 | 109 | 13989.06 | -7.63 | -0.05% | 0.05R | 85m | market | breakeven-stop | trend | trend | neutral | 71.03 | ↑127.52 | 0.7983 | 2.72 | **LOSS** |
| 548 | LMT | 07-01 15:10 | 07-01 16:20 | 467.72 | 467.18 | 29 | 13563.88 | -15.66 | -0.12% | 0.17R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 549 | PYPL | 07-01 15:30 | 07-01 15:50 | 75.24 | 74.99 | 185 | 13919.4 | -46.25 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.25 | ↑74.55 | 0.2107 | 1.37 | **LOSS** |
| 550 | NVO | 07-01 15:55 | 07-01 16:25 | 70.29 | 70.05 | 198 | 13917.42 | -47.52 | -0.34% | 0.49R | 30m | market | early-reversal | trend | trend | thinChop | 73.06 | ↑69.16 | 0.4151 | 1.08 | **LOSS** |
| 551 | TGT | 07-01 15:55 | 07-01 16:40 | 104.92 | 104.53 | 134 | 14059.28 | -52.26 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 79.63 | ↑102.68 | 1.3228 | 1.32 | **LOSS** |
| 552 | TXN | 07-01 16:05 | 07-01 16:55 | 210.24 | 209.22 | 66 | 13875.84 | -67.32 | -0.49% | 0.7R | 50m | market | early-reversal | trend | trend | thinChop | 79.71 | ↑207.49 | 0.5542 | 1.76 | **LOSS** |
| 553 | SMCI | 07-01 16:20 | 07-01 16:40 | 48.48 | 48.11 | 289 | 14010.72 | -106.93 | -0.76% | 0.59R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 89.72 | ↑47.5 | 0.1262 | 1.32 | **LOSS** |
| 554 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.27 | 78.56 | 181 | 13985.87 | +233.49 | +1.67% | 1.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 555 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.17 | 211.99 | 66 | 13937.22 | +54.12 | +0.39% | 0.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 556 | NKE | 07-02 13:35 | 07-02 14:40 | 74.47 | 73.63 | 188 | 14000.36 | -157.92 | -1.13% | 1.22R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.55 | ↓74.03 | 0.2479 | 1.6 | **LOSS** |
| 557 | COIN | 07-02 13:45 | 07-02 14:05 | 343.32 | 340.93 | 41 | 14076.12 | -97.99 | -0.7% | 0.54R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↓342.46 | 0.8493 | 1.99 | **LOSS** |
| 558 | MU | 07-02 14:45 | 07-02 15:40 | 122.16 | 122.08 | 114 | 13926.24 | -9.12 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 559 | DELL | 07-02 14:45 | 07-02 15:35 | 123.64 | 123.49 | 113 | 13971.32 | -16.95 | -0.12% | 0.15R | 50m | market | stagnation | breakout | breakout | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 560 | COIN | 07-02 14:50 | 07-02 16:35 | 346.4 | 351.58 | 40 | 13856 | +207.2 | +1.5% | 0.99R | 105m | market | timeout | trend | trend | noisyHighBeta | 62.7 | ↑342.5 | 2.1416 | 1.1 | **WIN** |
| 561 | COIN | 07-02 16:40 | 07-02 17:15 | 352.82 | 351.37 | 39 | 13759.98 | -56.55 | -0.41% | 0.53R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 77.32 | ↑345.11 | 2.1426 | 1.13 | **LOSS** |
| 562 | COIN | 07-02 17:20 | 07-02 17:35 | 353.77 | 350.26 | 39 | 13797.03 | -136.89 | -0.99% | 1.25R | 15m | market | stop-loss | trend | trend | thinChop | 66.75 | ↑345.8 | 1.7317 | 1.07 | **LOSS** |
| 563 | MU | 07-03 13:35 | 07-03 14:40 | 123.16 | 123.02 | 113 | 13917.08 | -15.82 | -0.11% | 0.15R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.69 | ↓122.92 | 0.0328 | 1.24 | **LOSS** |
| 564 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.2 | 222.04 | 63 | 13872.6 | +115.92 | +0.84% | 1.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 565 | ORCL | 07-03 13:40 | 07-03 14:25 | 234.06 | 232.15 | 60 | 14043.6 | -114.6 | -0.82% | 0.61R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.78 | ↓233.12 | 1.936 | 1.41 | **LOSS** |
| 566 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 627 | 14025.99 | -31.35 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 567 | BA | 07-03 13:40 | 07-03 15:25 | 214.71 | 215.92 | 65 | 13956.15 | +78.65 | +0.56% | 0.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 568 | RIVN | 07-03 13:45 | 07-03 14:15 | 13.28 | 13.19 | 1062 | 14103.36 | -95.58 | -0.68% | 0.5R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.03 | ↓13.12 | 0.0389 | 1.15 | **LOSS** |
| 569 | DDOG | 07-03 13:50 | 07-03 15:20 | 149.13 | 154.03 | 93 | 13869.09 | +455.7 | +3.29% | 1.65R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.86 | ↑148.07 | 3.5654 | 2.04 | **WIN** |
| 570 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 74 | 13994.88 | +176.86 | +1.26% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 571 | CRWD | 07-03 14:00 | 07-03 14:55 | 513.71 | 512 | 27 | 13870.17 | -46.17 | -0.33% | 0.36R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 97.66 | ↓507.58 | 5.0394 | 2.52 | **LOSS** |
| 572 | MDB | 07-03 14:10 | 07-03 14:35 | 212.54 | 211.29 | 65 | 13815.1 | -81.25 | -0.59% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 573 | NFLX | 07-03 14:15 | 07-03 14:35 | 1299.12 | 1293.72 | 10 | 12991.2 | -54 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↑1289.95 | 3.4993 | 1.68 | **LOSS** |
| 574 | ORCL | 07-03 15:30 | 07-03 16:50 | 236.37 | 236.16 | 59 | 13945.83 | -12.39 | -0.09% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 72.01 | ↑233.21 | 1.5604 | 1.29 | **LOSS** |
| 575 | INTC | 07-03 15:30 | 07-03 15:50 | 22.56 | 22.41 | 621 | 14009.76 | -93.15 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 66.29 | ↑22.37 | 0.0956 | 1.24 | **LOSS** |
| 576 | DDOG | 07-03 15:35 | 07-03 15:55 | 155.53 | 153.89 | 90 | 13997.7 | -147.6 | -1.05% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 75.11 | ↑151.32 | 3.9925 | 1.62 | **LOSS** |
| 577 | UBER | 07-07 13:40 | 07-07 15:25 | 95.13 | 96.86 | 147 | 13984.11 | +254.31 | +1.82% | 1.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 578 | COIN | 07-07 13:45 | 07-07 14:05 | 360.88 | 358.15 | 36 | 12991.68 | -98.28 | -0.76% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 579 | META | 07-07 14:20 | 07-07 14:50 | 727.02 | 724.34 | 19 | 13813.38 | -50.92 | -0.37% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 580 | PLTR | 07-07 15:40 | 07-07 17:25 | 137.19 | 138.16 | 102 | 13993.38 | +98.94 | +0.71% | 0.68R | 105m | market | timeout | trend | trend | noisyHighBeta | 72.14 | ↑134.9 | 0.6198 | 2.31 | **WIN** |
| 581 | ORCL | 07-08 13:35 | 07-08 13:55 | 240.15 | 237.72 | 54 | 12968.1 | -131.22 | -1.01% | 1.03R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.32 | ↓238.93 | 0.6439 | 4.21 | **LOSS** |
| 582 | AMD | 07-08 13:40 | 07-08 15:25 | 136.56 | 137.43 | 102 | 13929.12 | +88.74 | +0.64% | 0.67R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.27 | ↓136.57 | 0.3518 | 1.3 | **WIN** |
| 583 | INTC | 07-08 13:45 | 07-08 15:15 | 22.84 | 23.39 | 613 | 14000.92 | +337.15 | +2.41% | 2.84R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 584 | LLY | 07-08 13:45 | 07-08 15:30 | 784.48 | 787.58 | 17 | 13336.16 | +52.7 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 585 | CRM | 07-08 14:00 | 07-08 14:55 | 271.8 | 275.1 | 25 | 13861.8 | +82.5 | +1.21% | 1.73R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 586 | CRM | 07-08 14:00 | 07-08 15:45 | 271.8 | 274.68 | 26 | 13861.8 | +74.88 | +1.06% | 1.51R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 587 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1079 | 14091.74 | +107.9 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 588 | MRVL | 07-08 14:40 | 07-08 15:15 | 73.18 | 72.9 | 191 | 13977.38 | -53.48 | -0.38% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 589 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.88 | 99.24 | 139 | 13883.32 | -88.96 | -0.64% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 590 | LOW | 07-08 15:05 | 07-08 15:25 | 226.69 | 225.06 | 61 | 13828.09 | -99.43 | -0.72% | 1.03R | 20m | market | early-reversal | trend | trend | neutral | 77.33 | ↓225.28 | 0.5327 | 2.06 | **LOSS** |
| 591 | HD | 07-08 15:10 | 07-08 16:00 | 369.8 | 369.25 | 37 | 13682.6 | -20.35 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 592 | INTC | 07-08 17:25 | 07-08 18:55 | 23.64 | 23.57 | 594 | 14042.16 | -41.58 | -0.3% | 0.35R | 90m | market | stagnation | trend | trend | neutral | 79.1 | ↑23.15 | 0.0633 | 2 | **LOSS** |
| 593 | PANW | 07-08 17:35 | 07-08 18:25 | 203.67 | 203.55 | 68 | 13849.56 | -8.16 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.01 | ↑202.22 | 0.3858 | 1.29 | **LOSS** |
| 594 | RIVN | 07-08 17:45 | 07-08 18:20 | 13.3 | 13.24 | 1061 | 14111.3 | -63.66 | -0.45% | 0.64R | 35m | market | early-reversal | trend | trend | neutral | 73.33 | ↑13.11 | 0.0158 | 1.55 | **LOSS** |
| 595 | MSFT | 07-09 13:30 | 07-09 14:45 | 502.29 | 502.39 | 27 | 13561.83 | +2.7 | +0.02% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | thinChop | 91.2 | ↓501.53 | 0.5456 | 7.73 | **WIN** |
| 596 | LLY | 07-09 13:30 | 07-09 13:45 | 792.88 | 785.85 | 16 | 12686.08 | -112.48 | -0.89% | 1.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 597 | NVDA | 07-09 13:35 | 07-09 14:00 | 164.01 | 163.47 | 85 | 13940.85 | -45.9 | -0.33% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 598 | AVGO | 07-09 13:35 | 07-09 14:25 | 277.08 | 276.31 | 50 | 13854 | -38.5 | -0.28% | 0.34R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.66 | ↓275.15 | -0.0736 | 1.57 | **LOSS** |
| 599 | TSM | 07-09 13:40 | 07-09 14:10 | 232.41 | 231.56 | 60 | 13944.6 | -51 | -0.37% | 0.53R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 600 | CAT | 07-09 13:40 | 07-09 14:00 | 402.58 | 401.03 | 34 | 13687.72 | -52.7 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.17 | ↓400.82 | 1.1439 | 1.54 | **LOSS** |
| 601 | GE | 07-09 13:40 | 07-09 14:00 | 250.55 | 247.64 | 55 | 13780.25 | -160.05 | -1.16% | 1.66R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 602 | NET | 07-09 15:40 | 07-09 16:05 | 195.26 | 194.56 | 72 | 14058.72 | -50.4 | -0.36% | 0.51R | 25m | market | early-reversal | trend | trend | neutral | 78.16 | ↑193.99 | 0.3661 | 1.46 | **LOSS** |
| 603 | CELH | 07-09 16:10 | 07-09 17:00 | 46.09 | 46.06 | 299 | 13780.91 | -8.97 | -0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 86.83 | ↑45.56 | 0.0537 | 2.56 | **LOSS** |
| 604 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.64 | 303.13 | 42 | 12920.88 | -189.42 | -1.47% | 1.3R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 605 | AMAT | 07-10 13:40 | 07-10 14:00 | 197.73 | 196.93 | 70 | 13841.1 | -56 | -0.4% | 0.57R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 606 | NKE | 07-10 14:15 | 07-10 16:00 | 74.87 | 75.19 | 186 | 13925.82 | +59.52 | +0.43% | 0.5R | 105m | market | timeout | trend | trend | neutral | 79.4 | ↑74 | 0.2429 | 1.34 | **WIN** |
| 607 | RIVN | 07-10 14:50 | 07-10 15:15 | 13.42 | 13.36 | 1051 | 14104.42 | -63.06 | -0.45% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 58.72 | ↑13.31 | 0.0564 | 1.04 | **LOSS** |
| 608 | HPE | 07-10 15:40 | 07-10 17:25 | 21.47 | 21.54 | 650 | 13955.5 | +45.5 | +0.33% | 0.46R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.89 | ↑21.02 | 0.1184 | 3.71 | **WIN** |
| 609 | ARM | 07-11 13:50 | 07-11 15:35 | 148.93 | 150.09 | 93 | 13850.49 | +107.88 | +0.78% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.33 | ↑146.74 | 0.1052 | 1.11 | **WIN** |
| 610 | GE | 07-11 14:05 | 07-11 15:00 | 255.58 | 255.17 | 54 | 13801.32 | -22.14 | -0.16% | 0.19R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 611 | GOOGL | 07-11 15:30 | 07-11 17:15 | 179.33 | 180.27 | 78 | 13987.74 | +73.32 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑177.77 | 0.3579 | 1.06 | **WIN** |
| 612 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.45 | 180.14 | 71 | 12953.95 | -164.01 | -1.27% | 1.81R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 613 | PYPL | 07-14 13:30 | 07-14 15:15 | 73.35 | 73.76 | 175 | 12836.25 | +71.75 | +0.56% | 0.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.46 | ↑72.77 | -0.6572 | 1.79 | **WIN** |
| 614 | BA | 07-14 13:35 | 07-14 13:55 | 230.86 | 228.79 | 60 | 13851.6 | -124.2 | -0.9% | 1.07R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 615 | CRM | 07-14 13:40 | 07-14 14:05 | 260.8 | 259.87 | 53 | 13822.4 | -49.29 | -0.36% | 0.51R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.48 | ↓259.88 | 0.0062 | 1.19 | **LOSS** |
| 616 | ABNB | 07-14 13:45 | 07-14 14:05 | 137.46 | 136.66 | 101 | 13883.46 | -80.8 | -0.58% | 0.83R | 20m | market | early-reversal | breakout | breakout | thinChop | 77.53 | ↓136.57 | 0.0934 | 1.41 | **LOSS** |
| 617 | LMT | 07-14 14:30 | 07-14 14:40 | 474.69 | 471.12 | 29 | 13766.01 | -103.53 | -0.75% | 1.07R | 10m | market | stop-loss | trend | trend | thinChop | 79.84 | ↓471.63 | 1.7867 | 1.06 | **LOSS** |
| 618 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.44 | 117.74 | 121 | 13968.24 | +278.3 | +1.99% | 2.84R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 619 | SMCI | 07-14 17:35 | 07-14 17:55 | 50.65 | 50.2 | 276 | 13979.4 | -124.2 | -0.89% | 1.07R | 20m | market | stop-loss | trend | trend | neutral | 79.37 | ↑49.66 | 0.3118 | 1.32 | **LOSS** |
| 620 | DELL | 07-15 13:40 | 07-15 14:00 | 128.13 | 127.19 | 109 | 13966.17 | -102.46 | -0.73% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.56 | ↓127.6 | 0.323 | 1.26 | **LOSS** |
| 621 | MDB | 07-15 13:45 | 07-15 14:30 | 207.37 | 206.29 | 67 | 13893.79 | -72.36 | -0.52% | 0.6R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 622 | NET | 07-15 13:50 | 07-15 14:10 | 184.49 | 183.59 | 76 | 14021.24 | -68.4 | -0.49% | 0.49R | 20m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 623 | KLAC | 07-15 14:10 | 07-15 15:00 | 938.04 | 936.36 | 14 | 13132.56 | -23.52 | -0.18% | 0.26R | 50m | market | stagnation | trend | trend | thinChop | 73.03 | ↓934.41 | 3.0322 | 2.16 | **LOSS** |
| 624 | ELF | 07-15 14:10 | 07-15 14:35 | 108.44 | 107.33 | 129 | 13988.76 | -143.19 | -1.02% | 0.94R | 25m | market | early-reversal | breakout | trend | neutral | 62.1 | ↓107.68 | 0.0045 | 1.05 | **LOSS** |
| 625 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.64 | 141.05 | 98 | 13880.72 | -57.82 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 626 | AAPL | 07-15 15:35 | 07-15 15:55 | 211.87 | 210.67 | 65 | 13771.55 | -78 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 71.52 | ↑210.12 | 0.4876 | 1.46 | **LOSS** |
| 627 | NET | 07-15 15:40 | 07-15 16:00 | 185.78 | 185.18 | 75 | 13933.5 | -45 | -0.32% | 0.44R | 20m | market | early-reversal | trend | trend | thinChop | 63.47 | ↑183.7 | 0.5731 | 1.5 | **LOSS** |
| 628 | RIVN | 07-15 15:40 | 07-15 16:00 | 12.98 | 12.88 | 1086 | 14096.28 | -108.6 | -0.77% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 86.49 | ↑12.8 | 0.0351 | 3.24 | **LOSS** |
| 629 | TSLA | 07-16 13:30 | 07-16 15:15 | 314.77 | 319.41 | 41 | 12905.57 | +190.24 | +1.47% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 56.59 | ↑314.34 | -0.832 | 2.95 | **WIN** |
| 630 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.92 | 116.26 | 121 | 14026.32 | +41.14 | +0.29% | 0.2R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 631 | SHOP | 07-16 16:30 | 07-16 18:00 | 118.45 | 118.5 | 118 | 13977.1 | +5.9 | +0.04% | 0.03R | 90m | market | breakeven-stop | trend | trend | neutral | 64.3 | ↑116.4 | 0.6897 | 2.13 | **WIN** |
| 632 | CAT | 07-17 13:30 | 07-17 14:20 | 417.87 | 415.4 | 33 | 13789.71 | -81.51 | -0.59% | 0.84R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.77 | ↓416.21 | 0.9779 | 1.29 | **LOSS** |
| 633 | HPE | 07-17 13:40 | 07-17 14:00 | 21.14 | 20.89 | 609 | 12874.26 | -152.25 | -1.18% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓21.02 | 0.1245 | 1.98 | **LOSS** |
| 634 | TGT | 07-17 13:40 | 07-17 14:30 | 102.57 | 102.44 | 137 | 14052.09 | -17.81 | -0.13% | 0.19R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 635 | COIN | 07-17 14:00 | 07-17 15:10 | 408.16 | 405.25 | 34 | 13877.44 | -98.94 | -0.71% | 0.57R | 70m | market | trailing-stop | breakout | breakout | neutral | 62.08 | ↓401.34 | -0.0601 | 1.53 | **LOSS** |
| 636 | PLTR | 07-17 14:05 | 07-17 15:50 | 152.56 | 153.57 | 92 | 14035.52 | +92.92 | +0.66% | 0.65R | 105m | market | timeout | trend | trend | neutral | 64.71 | ↑151.79 | 0.4528 | 1.53 | **WIN** |
| 637 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.85 | 143.4 | 49 | 13901.3 | +75.95 | +1.09% | 1.45R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 638 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.85 | 143.88 | 49 | 13901.3 | +99.47 | +1.43% | 1.91R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 639 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.08 | 124.98 | 114 | 14031.12 | +216.6 | +1.54% | 1.35R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 640 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.22 | 72.82 | 97 | 14010.68 | +58.2 | +0.83% | 0.99R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 641 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.22 | 72.83 | 97 | 14010.68 | +59.17 | +0.84% | 1R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 642 | BAC | 07-17 15:35 | 07-17 17:20 | 46.55 | 46.75 | 300 | 13965 | +60 | +0.43% | 0.61R | 105m | market | timeout | trend | trend | neutral | 74.73 | ↑46.15 | 0.0989 | 1.53 | **WIN** |
| 643 | INTC | 07-17 15:40 | 07-17 16:10 | 22.98 | 22.9 | 611 | 14040.78 | -48.88 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 75.58 | ↑22.76 | 0.0612 | 1.82 | **LOSS** |
| 644 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 598 | 14029.08 | -179.4 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 645 | ARM | 07-18 13:40 | 07-18 14:00 | 160.74 | 159.27 | 86 | 13823.64 | -126.42 | -0.91% | 1.02R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 646 | TSLA | 07-18 13:45 | 07-18 14:35 | 326.19 | 325.86 | 43 | 14026.17 | -14.19 | -0.1% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.78 | ↓324.69 | 1.3279 | 2.69 | **LOSS** |
| 647 | CVX | 07-18 14:10 | 07-18 14:25 | 153.15 | 151.53 | 91 | 13936.65 | -147.42 | -1.06% | 1.51R | 15m | market | stop-loss | trend | trend | neutral | 75.08 | ↓152.03 | 0.4351 | 2.35 | **LOSS** |
| 648 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.58 | 215.67 | 64 | 13861.12 | -58.24 | -0.42% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 649 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 96 | 14031.36 | +98.88 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 650 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 14031.36 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 651 | QCOM | 07-18 15:05 | 07-18 15:35 | 155.26 | 154.65 | 90 | 13973.4 | -54.9 | -0.39% | 0.56R | 30m | market | early-reversal | trend | trend | thinChop | 76.24 | ↑153.84 | 0.5348 | 1.02 | **LOSS** |
| 652 | DDOG | 07-18 15:55 | 07-18 16:15 | 145.73 | 144.88 | 96 | 13990.08 | -81.6 | -0.58% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 61.21 | ↑144.46 | 0.5887 | 2.17 | **LOSS** |
| 653 | MRVL | 07-18 17:30 | 07-18 17:50 | 74.63 | 74.37 | 188 | 14030.44 | -48.88 | -0.35% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 53.64 | ↑73.47 | 0.2617 | 2.12 | **LOSS** |
| 654 | CVX | 07-21 13:30 | 07-21 13:50 | 151.55 | 150.15 | 92 | 13942.6 | -128.8 | -0.92% | 0.79R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 655 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.41 | 101.56 | 136 | 13927.76 | -115.6 | -0.83% | 1.19R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 656 | NKE | 07-21 13:35 | 07-21 15:20 | 73.97 | 74.5 | 189 | 13980.33 | +100.17 | +0.72% | 0.88R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.84 | ↑73.47 | 0.1352 | 2.5 | **WIN** |
| 657 | META | 07-21 13:40 | 07-21 14:30 | 714.45 | 713.64 | 19 | 13574.55 | -15.39 | -0.11% | 0.16R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 658 | UBER | 07-21 13:40 | 07-21 14:15 | 91.68 | 91.23 | 153 | 14027.04 | -68.85 | -0.49% | 0.64R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 659 | CRWD | 07-21 13:45 | 07-21 14:35 | 484.3 | 483.05 | 28 | 13560.4 | -35 | -0.26% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 660 | NET | 07-21 13:45 | 07-21 14:20 | 199.29 | 197.65 | 70 | 13950.3 | -114.8 | -0.82% | 0.77R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 661 | CRM | 07-21 14:00 | 07-21 14:20 | 264.29 | 262.55 | 52 | 13743.08 | -90.48 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 662 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.88 | 127.5 | 109 | 14047.92 | -150.42 | -1.07% | 1.49R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 663 | AMD | 07-21 14:30 | 07-21 15:05 | 159.76 | 159.01 | 87 | 13899.12 | -65.25 | -0.47% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 69.08 | ↑158.57 | 0.4791 | 2.52 | **LOSS** |
| 664 | PANW | 07-21 17:45 | 07-21 18:10 | 203.14 | 196.59 | 68 | 13813.52 | -445.4 | -3.22% | 4.6R | 25m | market | stop-loss | trend | trend | neutral | 75.56 | ↓200.38 | 0.5238 | 2.43 | **LOSS** |
| 665 | LLY | 07-22 13:35 | 07-22 15:20 | 771.83 | 774.11 | 18 | 13892.94 | +41.04 | +0.3% | 0.43R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 666 | ADBE | 07-22 13:45 | 07-22 14:05 | 373.46 | 371.23 | 37 | 13818.02 | -82.51 | -0.6% | 0.86R | 20m | market | early-reversal | breakout | breakout | thinChop | 84.44 | ↓372.51 | 1.2979 | 1.65 | **LOSS** |
| 667 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.14 | 94.99 | 146 | 13890.44 | -21.9 | -0.16% | 0.18R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 668 | NKE | 07-22 13:45 | 07-22 14:05 | 75.4 | 74.79 | 185 | 13949 | -112.85 | -0.81% | 1.11R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 669 | TGT | 07-22 13:45 | 07-22 14:35 | 104.91 | 104.75 | 133 | 13953.03 | -21.28 | -0.15% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.02 | ↑104.31 | 0.3853 | 1.66 | **LOSS** |
| 670 | TSLA | 07-22 15:45 | 07-22 16:05 | 332.27 | 331.1 | 42 | 13955.34 | -49.14 | -0.35% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 62.38 | ↑327.84 | 0.8549 | 1.26 | **LOSS** |
| 671 | IBM | 07-23 13:35 | 07-23 14:15 | 285.53 | 284.65 | 49 | 13990.97 | -43.12 | -0.31% | 0.44R | 40m | market | early-reversal | breakout | breakout | thinChop | 80.28 | ↓284.91 | 0.3782 | 1.13 | **LOSS** |
| 672 | CELH | 07-23 13:40 | 07-23 14:00 | 45.28 | 44.86 | 304 | 13765.12 | -127.68 | -0.93% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.21 | ↓45.33 | 0.3128 | 1.61 | **LOSS** |
| 673 | DIS | 07-23 14:00 | 07-23 14:20 | 122.46 | 122.07 | 114 | 13960.44 | -44.46 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | thinChop | 76.44 | ↓122.06 | 0.2652 | 1.15 | **LOSS** |
| 674 | XOM | 07-23 14:10 | 07-23 14:45 | 109.52 | 109.15 | 127 | 13909.04 | -46.99 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 675 | HPE | 07-23 14:15 | 07-23 15:30 | 21 | 20.98 | 664 | 13944 | -13.28 | -0.1% | 0.09R | 75m | market | breakeven-stop | trend | trend | neutral | 75.86 | ↑20.86 | 0.1216 | 1.28 | **LOSS** |
| 676 | LLY | 07-23 14:25 | 07-23 16:10 | 786.47 | 795.08 | 17 | 13369.99 | +146.37 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 677 | HD | 07-23 17:35 | 07-23 18:00 | 377.88 | 376.7 | 37 | 13981.56 | -43.66 | -0.31% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 78.19 | ↑374.28 | 0.7867 | 4.2 | **LOSS** |
| 678 | NVO | 07-24 13:30 | 07-24 14:15 | 70.89 | 70.59 | 196 | 13894.44 | -58.8 | -0.42% | 0.6R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 679 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.23 | 231.22 | 60 | 13873.8 | -0.6 | 0% | 0R | 45m | market | breakeven-stop | breakout | breakout | thinChop | 84.41 | ↓230.43 | 0.3778 | 8.32 | **LOSS** |
| 680 | AVGO | 07-24 13:35 | 07-24 13:55 | 289.28 | 285.21 | 48 | 13885.44 | -195.36 | -1.41% | 1.26R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 681 | UBER | 07-24 13:35 | 07-24 15:20 | 92.37 | 92.1 | 151 | 13947.87 | -40.77 | -0.29% | 0.32R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 682 | PYPL | 07-24 13:35 | 07-24 15:15 | 78.11 | 78.11 | 178 | 13903.58 | +0 | +0% | 0R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.31 | ↓77.86 | 0.1157 | 2.06 | **WIN** |
| 683 | GE | 07-24 13:40 | 07-24 15:25 | 266.35 | 269.29 | 52 | 13850.2 | +152.88 | +1.1% | 1.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.08 | ↑265.31 | 0.6152 | 1.53 | **WIN** |
| 684 | ADBE | 07-24 14:00 | 07-24 14:15 | 376.06 | 372.54 | 37 | 13914.22 | -130.24 | -0.94% | 1.34R | 15m | market | stop-loss | trend | trend | thinChop | 75.05 | ↓372.88 | 0.5707 | 1.17 | **LOSS** |
| 685 | CVX | 07-24 14:25 | 07-24 15:20 | 154.09 | 154 | 90 | 13868.1 | -8.1 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 70.82 | ↑153.15 | 0.2875 | 1.06 | **LOSS** |
| 686 | SMCI | 07-24 14:55 | 07-24 15:45 | 52.34 | 52.13 | 267 | 13974.78 | -56.07 | -0.4% | 0.35R | 50m | market | stagnation | trend | trend | neutral | 66.67 | ↑51.74 | 0.0607 | 1.02 | **LOSS** |
| 687 | MU | 07-24 15:00 | 07-24 15:30 | 112.61 | 111.83 | 124 | 13963.64 | -96.72 | -0.69% | 0.78R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 688 | MDB | 07-25 13:30 | 07-25 14:30 | 237.61 | 243.52 | 58 | 13781.38 | +342.78 | +2.49% | 3.56R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.71 | ↑237.19 | 0.7381 | 1.73 | **WIN** |
| 689 | UNH | 07-25 13:30 | 07-25 13:50 | 284.09 | 282.42 | 46 | 13068.14 | -76.82 | -0.59% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 690 | NKE | 07-25 13:30 | 07-25 13:45 | 76.39 | 75.62 | 183 | 13979.37 | -140.91 | -1.01% | 1.44R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.46 | ↓76.33 | -0.0076 | 3.21 | **LOSS** |
| 691 | RIVN | 07-25 13:30 | 07-25 15:15 | 14.02 | 14.39 | 1004 | 14076.08 | +371.48 | +2.64% | 2.9R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 91.4 | ↑13.94 | 0.0865 | 2.15 | **WIN** |
| 692 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.49 | 148.76 | 94 | 13958.06 | +25.38 | +0.18% | 0.26R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 693 | TSM | 07-25 14:00 | 07-25 14:50 | 244.4 | 244.14 | 57 | 13930.8 | -14.82 | -0.11% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 694 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.58 | 124.4 | 112 | 13952.96 | -20.16 | -0.14% | 0.19R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 695 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.12 | 321.26 | 22 | 13997.28 | +69.08 | +0.99% | 1.22R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 696 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.12 | 319.25 | 22 | 13997.28 | +24.86 | +0.36% | 0.44R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 697 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 665 | 13998.25 | -39.9 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 698 | ABNB | 07-28 13:35 | 07-28 14:00 | 142.94 | 142.27 | 97 | 13865.18 | -64.99 | -0.47% | 0.67R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.83 | ↓142.66 | 0.1324 | 1.13 | **LOSS** |
| 699 | ASML | 07-28 13:40 | 07-28 14:10 | 734.03 | 730.84 | 17 | 12478.51 | -54.23 | -0.43% | 0.52R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.76 | ↓732.79 | 4.3311 | 2.08 | **LOSS** |
| 700 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.1 | 75.57 | 184 | 14002.4 | -97.52 | -0.7% | 0.74R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 701 | NOW | 07-28 14:00 | 07-28 14:20 | 995.28 | 985.23 | 14 | 13933.92 | -140.7 | -1.01% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 702 | ELF | 07-28 14:00 | 07-28 14:20 | 122.03 | 121.45 | 114 | 13911.42 | -66.12 | -0.48% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 703 | DELL | 07-28 14:40 | 07-28 14:55 | 132.98 | 131.97 | 105 | 13962.9 | -106.05 | -0.76% | 1.03R | 15m | market | stop-loss | trend | trend | neutral | 61.37 | ↓132.13 | 0.2872 | 1.42 | **LOSS** |
| 704 | IBM | 07-28 15:30 | 07-28 16:05 | 263.98 | 262.39 | 53 | 13990.94 | -84.27 | -0.6% | 0.86R | 35m | market | early-reversal | trend | trend | thinChop | 72.74 | ↑261.77 | 0.8646 | 1.02 | **LOSS** |
| 705 | CRM | 07-29 13:30 | 07-29 13:50 | 273.62 | 272.35 | 51 | 13954.62 | -64.77 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | thinChop | 93.05 | ↓272.97 | 0.3837 | 3.46 | **LOSS** |
| 706 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.32 | 77.3 | 181 | 13994.92 | -3.62 | -0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **LOSS** |
| 707 | ORCL | 07-29 13:35 | 07-29 14:15 | 251.92 | 250.75 | 56 | 14107.52 | -65.52 | -0.46% | 0.66R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 708 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.24 | 77.83 | 179 | 14004.96 | -73.39 | -0.52% | 0.41R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 709 | ADP | 07-30 13:35 | 07-30 15:20 | 311.58 | 315.06 | 44 | 13709.52 | +153.12 | +1.12% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 86.57 | ↑308.56 | 0.3705 | 1.4 | **WIN** |
| 710 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.45 | 158.32 | 88 | 13943.6 | -11.44 | -0.08% | 0.09R | 80m | market | stagnation | breakout | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 711 | META | 07-31 13:30 | 07-31 14:20 | 780.63 | 775.44 | 17 | 13270.71 | -88.23 | -0.66% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 712 | NET | 07-31 13:40 | 07-31 15:25 | 205.74 | 208.01 | 68 | 13990.32 | +154.36 | +1.1% | 0.93R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 713 | MA | 07-31 13:40 | 07-31 15:25 | 569.71 | 575.67 | 24 | 13673.04 | +143.04 | +1.05% | 1.5R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.42 | ↑566.65 | 0.7985 | 1.79 | **WIN** |
| 714 | SNOW | 07-31 13:45 | 07-31 15:30 | 224.43 | 226.66 | 62 | 13914.66 | +138.26 | +0.99% | 0.92R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.39 | ↑223.01 | 0.3172 | 1.1 | **WIN** |
| 715 | COST | 07-31 14:30 | 07-31 14:55 | 944.32 | 941.09 | 14 | 13220.48 | -45.22 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | thinChop | 78.59 | ↑936.64 | 2.7383 | 1.43 | **LOSS** |
| 716 | LLY | 08-01 13:50 | 08-01 14:10 | 764.09 | 758.51 | 16 | 12225.44 | -89.28 | -0.73% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.51 | ↓758.94 | 2.1923 | 1.24 | **LOSS** |
| 717 | LOW | 08-01 15:10 | 08-01 15:30 | 226.73 | 225.58 | 61 | 13830.53 | -70.15 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 64.34 | ↑224.85 | 0.329 | 3.24 | **LOSS** |
| 718 | LOW | 08-01 15:50 | 08-01 16:40 | 226.86 | 226.6 | 61 | 13838.46 | -15.86 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 69.05 | ↑225.19 | 0.583 | 2.14 | **LOSS** |
| 719 | PLTR | 08-01 16:00 | 08-01 16:50 | 157.18 | 156.93 | 89 | 13989.02 | -22.25 | -0.16% | 0.18R | 50m | market | stagnation | trend | trend | neutral | 74.76 | ↑154.02 | 0.4798 | 1.29 | **LOSS** |
| 720 | BA | 08-01 16:05 | 08-01 16:25 | 222.26 | 221.38 | 63 | 14002.38 | -55.44 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 77.45 | ↑219.43 | 0.5907 | 1.9 | **LOSS** |
| 721 | COST | 08-01 16:30 | 08-01 17:00 | 954.94 | 950.9 | 14 | 13369.16 | -56.56 | -0.42% | 0.6R | 30m | market | early-reversal | trend | trend | thinChop | 77.76 | ↑948.28 | 2.9841 | 2.59 | **LOSS** |
| 722 | LMT | 08-01 17:20 | 08-01 19:05 | 422.98 | 422.37 | 33 | 13958.34 | -20.13 | -0.14% | 0.2R | 105m | market | stagnation | trend | trend | neutral | 77.73 | ↑420 | 0.7624 | 2.81 | **LOSS** |
| 723 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.58 | 205.77 | 67 | 13773.86 | +12.73 | +0.09% | 0.1R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 724 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.42 | 192.81 | 73 | 14046.66 | +28.47 | +0.2% | 0.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 725 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.85 | 533.35 | 26 | 13854.1 | +13 | +0.09% | 0.13R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 726 | TSLA | 08-04 13:35 | 08-04 14:25 | 310.06 | 308.88 | 45 | 13952.7 | -53.1 | -0.38% | 0.29R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 727 | AVGO | 08-04 13:35 | 08-04 14:40 | 296.26 | 295.7 | 47 | 13924.22 | -26.32 | -0.19% | 0.19R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.25 | ↑293.84 | 1.0727 | 1.63 | **LOSS** |
| 728 | ARM | 08-04 13:35 | 08-04 13:55 | 140.41 | 139.06 | 99 | 13900.59 | -133.65 | -0.96% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.44 | ↓139.79 | 0.3632 | 1.18 | **LOSS** |
| 729 | SMCI | 08-04 13:35 | 08-04 14:25 | 58.79 | 58.71 | 219 | 12875.01 | -17.52 | -0.14% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.99 | ↑58.32 | 0.3921 | 1.57 | **LOSS** |
| 730 | GS | 08-04 13:35 | 08-04 15:25 | 721.39 | 723.72 | 19 | 13706.41 | +44.27 | +0.32% | 0.46R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 731 | DIS | 08-04 13:35 | 08-04 14:05 | 119.32 | 118.77 | 117 | 13960.44 | -64.35 | -0.46% | 0.57R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.87 | ↓118.78 | 0.4471 | 1.32 | **LOSS** |
| 732 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.91 | 97.51 | 142 | 13903.22 | -56.8 | -0.41% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 733 | UBER | 08-04 13:40 | 08-04 14:00 | 88.26 | 87.91 | 158 | 13945.08 | -55.3 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 734 | RIVN | 08-04 13:40 | 08-04 14:00 | 12.75 | 12.64 | 1108 | 14127 | -121.88 | -0.86% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.48 | ↓12.62 | 0.0527 | 1.42 | **LOSS** |
| 735 | PLTR | 08-04 13:45 | 08-04 14:05 | 160.19 | 158.97 | 81 | 12975.39 | -98.82 | -0.76% | 0.49R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.52 | ↓159.48 | 0.8038 | 2.14 | **LOSS** |
| 736 | CAT | 08-04 14:10 | 08-04 15:35 | 434.16 | 433.93 | 32 | 13893.12 | -7.36 | -0.05% | 0.07R | 85m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 737 | AMD | 08-04 14:30 | 08-04 14:50 | 177.35 | 176.16 | 74 | 13123.9 | -88.06 | -0.67% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 59.97 | ↑175.98 | 1.486 | 1.55 | **LOSS** |
| 738 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.38 | 89.36 | 156 | 13943.28 | -3.12 | -0.02% | 0.02R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **LOSS** |
| 739 | NVDA | 08-04 16:00 | 08-04 17:45 | 178.61 | 178.93 | 78 | 13931.58 | +24.96 | +0.18% | 0.26R | 105m | market | timeout | trend | trend | neutral | 71.77 | ↑177.24 | 0.4412 | 1.19 | **WIN** |
| 740 | KLAC | 08-04 16:20 | 08-04 16:40 | 913.6 | 908.3 | 15 | 13704 | -79.5 | -0.58% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↑904.38 | 6.5249 | 1.78 | **LOSS** |
| 741 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.54 | 214.59 | 64 | 13794.56 | -60.8 | -0.44% | 0.58R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 742 | PLTR | 08-05 13:35 | 08-05 14:40 | 173.75 | 172.29 | 81 | 14073.75 | -118.26 | -0.84% | 0.42R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.37 | ↓173.02 | 3.4269 | 4.06 | **LOSS** |
| 743 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.21 | 692 | 13999.16 | -13.84 | -0.1% | 0.09R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 744 | UBER | 08-05 13:40 | 08-05 14:30 | 90.35 | 89.7 | 155 | 14004.25 | -100.75 | -0.72% | 0.92R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.6 | ↓89.75 | 0.3437 | 3.63 | **LOSS** |
| 745 | TXN | 08-05 13:40 | 08-05 14:20 | 185.54 | 184.75 | 75 | 13915.5 | -59.25 | -0.43% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 746 | TSLA | 08-05 13:50 | 08-05 14:10 | 312.22 | 308.29 | 44 | 13737.68 | -172.92 | -1.26% | 1.16R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57 | ↓308.63 | 0.1486 | 1.47 | **LOSS** |
| 747 | UNH | 08-05 15:20 | 08-05 15:40 | 247.67 | 245.5 | 52 | 12878.84 | -112.84 | -0.88% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 748 | TGT | 08-05 17:15 | 08-05 18:20 | 102.06 | 101.86 | 137 | 13982.22 | -27.4 | -0.2% | 0.29R | 65m | market | stagnation | trend | trend | neutral | 78.99 | ↑100.63 | 0.1822 | 1.74 | **LOSS** |
| 749 | SHOP | 08-05 17:35 | 08-05 18:25 | 125.97 | 125.77 | 111 | 13982.67 | -22.2 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 67.32 | ↑124.73 | 0.3198 | 1.17 | **LOSS** |
| 750 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.96 | 444.21 | 31 | 13824.76 | -54.25 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 751 | PYPL | 08-06 13:30 | 08-06 13:50 | 68.7 | 68.35 | 187 | 12846.9 | -65.45 | -0.51% | 0.73R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.76 | ↓68.59 | -0.013 | 4 | **LOSS** |
| 752 | NKE | 08-06 13:30 | 08-06 13:55 | 75.25 | 74.93 | 185 | 13921.25 | -59.2 | -0.43% | 0.61R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.2 | ↓74.92 | 0.0378 | 3.11 | **LOSS** |
| 753 | TGT | 08-06 15:15 | 08-06 16:15 | 105.54 | 105.36 | 133 | 14036.82 | -23.94 | -0.17% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 754 | RIVN | 08-06 15:35 | 08-06 15:55 | 12.16 | 11.87 | 1160 | 14105.6 | -336.4 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | thinChop | 72.62 | ↓11.96 | -0.0222 | 1.35 | **LOSS** |
| 755 | COIN | 08-06 16:05 | 08-06 16:40 | 299.04 | 299.01 | 46 | 13755.84 | -1.38 | -0.01% | 0.01R | 35m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 66.68 | ↑296.24 | 0.0607 | 3.39 | **LOSS** |
| 756 | MDB | 08-06 17:05 | 08-06 18:35 | 232.54 | 232.39 | 60 | 13952.4 | -9 | -0.06% | 0.09R | 90m | market | stagnation | trend | trend | neutral | 64.08 | ↑230.78 | 0.3577 | 1.09 | **LOSS** |
| 757 | DDOG | 08-06 17:35 | 08-06 18:15 | 135.73 | 135.28 | 103 | 13980.19 | -46.35 | -0.33% | 0.47R | 40m | market | early-reversal | trend | trend | neutral | 71.52 | ↑134.55 | 0.2537 | 1.12 | **LOSS** |
| 758 | DELL | 08-07 13:35 | 08-07 14:20 | 132.07 | 131.18 | 98 | 12942.86 | -87.22 | -0.67% | 0.66R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.97 | ↓131.37 | 0.6529 | 1.95 | **LOSS** |
| 759 | ELF | 08-07 17:50 | 08-07 18:10 | 99.05 | 98.44 | 140 | 13867 | -85.4 | -0.62% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.49 | ↑96.61 | 0.4267 | 1.76 | **LOSS** |
| 760 | PANW | 08-08 13:35 | 08-08 13:50 | 170.03 | 168.42 | 81 | 13772.43 | -130.41 | -0.95% | 1.23R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 761 | DDOG | 08-08 13:35 | 08-08 13:55 | 139.57 | 137.68 | 100 | 13957 | -189 | -1.35% | 0.95R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.07 | ↓138.67 | 1.3902 | 1.26 | **LOSS** |
| 762 | LLY | 08-08 13:35 | 08-08 13:55 | 654.49 | 648.19 | 21 | 13744.29 | -132.3 | -0.96% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 763 | CVX | 08-08 14:00 | 08-08 14:10 | 155.35 | 153.72 | 89 | 13826.15 | -145.07 | -1.05% | 1.5R | 10m | market | stop-loss | trend | trend | neutral | 71.92 | ↓154.69 | 0.3514 | 1.15 | **LOSS** |
| 764 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 182 | 14039.48 | -72.8 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 765 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 70 | 14064.4 | -0.7 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 766 | DIS | 08-08 14:10 | 08-08 14:30 | 114.12 | 113.53 | 122 | 13922.64 | -71.98 | -0.52% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↓113.71 | 0.3507 | 5.7 | **LOSS** |
| 767 | MU | 08-08 14:15 | 08-08 15:20 | 113.83 | 118.33 | 123 | 14001.09 | +553.5 | +3.95% | 4.16R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 768 | NFLX | 08-08 14:20 | 08-08 14:40 | 1206.06 | 1202.14 | 11 | 13266.66 | -43.12 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 769 | MU | 08-08 15:25 | 08-08 15:45 | 119.18 | 118.4 | 118 | 14063.24 | -92.04 | -0.65% | 0.52R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 770 | MA | 08-08 16:05 | 08-08 17:50 | 571.91 | 574.18 | 24 | 13725.84 | +54.48 | +0.4% | 0.57R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑567.79 | 1.7432 | 1.31 | **WIN** |
| 771 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.32 | 150.46 | 92 | 13921.44 | -79.12 | -0.57% | 0.76R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 772 | SMCI | 08-11 13:40 | 08-11 14:30 | 45.83 | 45.55 | 304 | 13932.32 | -85.12 | -0.61% | 0.52R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 773 | QCOM | 08-11 13:45 | 08-11 14:05 | 150.88 | 149.84 | 92 | 13880.96 | -95.68 | -0.69% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 774 | ASML | 08-11 13:45 | 08-11 14:10 | 731.2 | 728.84 | 19 | 13892.8 | -44.84 | -0.32% | 0.46R | 25m | market | early-reversal | breakout | breakout | thinChop | 86.3 | ↓729.69 | 2.0012 | 2.82 | **LOSS** |
| 775 | CELH | 08-11 13:50 | 08-11 15:35 | 53.13 | 53.68 | 259 | 13760.67 | +142.45 | +1.04% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.43 | ↑53.08 | 0.4977 | 1.13 | **WIN** |
| 776 | GOOGL | 08-12 13:30 | 08-12 13:45 | 203.43 | 201.83 | 69 | 14036.67 | -110.4 | -0.79% | 1.13R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 777 | GE | 08-12 13:30 | 08-12 13:50 | 278.23 | 276.94 | 50 | 13911.5 | -64.5 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.64 | ↓277.39 | 0.1867 | 2.28 | **LOSS** |
| 778 | BA | 08-12 13:30 | 08-12 15:15 | 228.64 | 231.74 | 61 | 13947.04 | +189.1 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 779 | META | 08-12 13:35 | 08-12 13:55 | 787.33 | 779.6 | 16 | 12597.28 | -123.68 | -0.98% | 1.32R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 780 | BAC | 08-12 13:35 | 08-12 15:20 | 47 | 47.39 | 297 | 13959 | +115.83 | +0.83% | 1.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 781 | ORCL | 08-12 13:40 | 08-12 13:55 | 257.17 | 252.99 | 54 | 13887.18 | -225.72 | -1.63% | 2.33R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.72 | ↓255.28 | 0.2684 | 2.37 | **LOSS** |
| 782 | BA | 08-13 13:30 | 08-13 14:15 | 234.52 | 233.13 | 59 | 13836.68 | -82.01 | -0.59% | 0.84R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 783 | NVO | 08-13 13:30 | 08-13 15:15 | 50.46 | 51.04 | 276 | 13926.96 | +160.08 | +1.15% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 784 | HD | 08-13 13:40 | 08-13 15:25 | 402.23 | 404.5 | 34 | 13675.82 | +77.18 | +0.56% | 0.8R | 105m | market | timeout | breakout | breakout | thinChop | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 785 | V | 08-13 13:40 | 08-13 14:30 | 342.42 | 341.66 | 40 | 13696.8 | -30.4 | -0.22% | 0.31R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.22 | ↓341.12 | 1.1232 | 2.59 | **LOSS** |
| 786 | IBM | 08-13 14:00 | 08-13 14:55 | 240.31 | 240.03 | 58 | 13937.98 | -16.24 | -0.12% | 0.13R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 787 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.38 | 195.46 | 71 | 13942.98 | -65.32 | -0.47% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 788 | CRM | 08-13 14:50 | 08-13 15:40 | 234.29 | 234.16 | 59 | 13823.11 | -7.67 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 789 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.13 | 345.13 | 40 | 13805.2 | +0 | +0% | 0R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 790 | SNOW | 08-13 15:30 | 08-13 15:50 | 198.3 | 197.03 | 70 | 13881 | -88.9 | -0.64% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 66.67 | ↑195.55 | 0.9436 | 1.28 | **LOSS** |
| 791 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.38 | 182.17 | 76 | 13860.88 | -15.96 | -0.12% | 0.15R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 792 | COST | 08-14 14:30 | 08-14 15:20 | 987.19 | 985.68 | 14 | 13820.66 | -21.14 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | thinChop | 67.37 | ↑984.9 | 1.7164 | 1.42 | **LOSS** |
| 793 | NVO | 08-15 13:30 | 08-15 15:15 | 51.66 | 51.92 | 270 | 13948.2 | +70.2 | +0.5% | 0.71R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 794 | UNH | 08-15 13:35 | 08-15 13:45 | 300.2 | 298.89 | 46 | 13809.2 | -60.26 | -0.44% | 0.22R | 10m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.19 | ↓299.04 | 7.3176 | 6.17 | **LOSS** |
| 795 | UBER | 08-15 14:15 | 08-15 15:05 | 93.4 | 92.89 | 149 | 13916.6 | -75.99 | -0.55% | 0.51R | 50m | market | early-reversal | breakout | breakout | neutral | 72.71 | ↓92.37 | 0.3724 | 1.4 | **LOSS** |
| 796 | NET | 08-15 14:15 | 08-15 15:45 | 198.84 | 200.89 | 35 | 13918.8 | +71.75 | +1.03% | 1.17R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 797 | NET | 08-15 14:15 | 08-15 16:00 | 198.84 | 200.83 | 35 | 13918.8 | +69.65 | +1% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 798 | SNOW | 08-15 15:10 | 08-15 16:55 | 199.04 | 199.69 | 70 | 13932.8 | +45.5 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 65.32 | ↑197.7 | 0.874 | 2.18 | **WIN** |
| 799 | INTC | 08-15 15:45 | 08-15 17:30 | 25.21 | 25.46 | 555 | 13991.55 | +138.75 | +0.99% | 0.61R | 105m | market | timeout | trend | trend | thinChop | 65.93 | ↑24.68 | 0.0921 | 1.04 | **WIN** |
| 800 | NOW | 08-15 17:30 | 08-15 18:25 | 867.29 | 866.85 | 16 | 13876.64 | -7.04 | -0.05% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 76.55 | ↑858.94 | 2.2062 | 4.24 | **LOSS** |
| 801 | NVO | 08-18 13:35 | 08-18 13:55 | 54.87 | 54.24 | 254 | 13936.98 | -160.02 | -1.15% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.82 | ↓54.61 | 0.5586 | 2.83 | **LOSS** |
| 802 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.75 | 92.85 | 152 | 13946 | +167.2 | +1.2% | 1.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 803 | MDB | 08-18 13:45 | 08-18 15:30 | 225 | 228.16 | 62 | 13950 | +195.92 | +1.4% | 1.18R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.75 | ↑222.91 | 1.3885 | 1.12 | **WIN** |
| 804 | NFLX | 08-18 14:20 | 08-18 14:40 | 1251.32 | 1244.27 | 11 | 13764.52 | -77.55 | -0.56% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 70.33 | ↑1241.88 | 2.2788 | 1.17 | **LOSS** |
| 805 | BAC | 08-18 14:20 | 08-18 14:55 | 47.53 | 47.35 | 294 | 13973.82 | -52.92 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 77.6 | ↑47.27 | 0.0877 | 1.23 | **LOSS** |
| 806 | TGT | 08-18 14:45 | 08-18 15:05 | 106.04 | 105.55 | 132 | 13997.28 | -64.68 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 807 | ARM | 08-18 15:45 | 08-18 16:05 | 140.63 | 140.18 | 99 | 13922.37 | -44.55 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | thinChop | 70.72 | ↑139.35 | 0.2341 | 1.3 | **LOSS** |
| 808 | ELF | 08-18 15:45 | 08-18 16:30 | 122.54 | 122.1 | 113 | 13847.02 | -49.72 | -0.36% | 0.51R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 61.15 | ↑121.52 | 0.8956 | 1.3 | **LOSS** |
| 809 | COIN | 08-18 15:50 | 08-18 16:40 | 322.22 | 320.68 | 43 | 13855.46 | -66.22 | -0.48% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 77.62 | ↑314.48 | 1.8812 | 1.29 | **LOSS** |
| 810 | MDB | 08-18 16:20 | 08-18 16:40 | 229.99 | 228.73 | 60 | 13799.4 | -75.6 | -0.55% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 78.87 | ↑225.63 | 1.3761 | 1.8 | **LOSS** |
| 811 | MDB | 08-18 17:40 | 08-18 18:05 | 231.27 | 230.53 | 60 | 13876.2 | -44.4 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 71.17 | ↑226.26 | 0.9495 | 2.55 | **LOSS** |
| 812 | NVO | 08-19 13:30 | 08-19 13:55 | 54.77 | 54.7 | 254 | 13911.58 | -17.78 | -0.13% | 0.16R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 813 | HD | 08-19 13:35 | 08-19 15:15 | 408.37 | 408.19 | 31 | 12659.47 | -5.58 | -0.04% | 0.05R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.97 | ↓406.13 | 1.451 | 1.16 | **LOSS** |
| 814 | CAT | 08-19 13:40 | 08-19 13:50 | 417.72 | 414.26 | 33 | 13784.76 | -114.18 | -0.83% | 1.19R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.51 | ↓416.8 | 1.2247 | 1.46 | **LOSS** |
| 815 | LOW | 08-19 13:40 | 08-19 15:20 | 256.74 | 256.44 | 54 | 13863.96 | -16.2 | -0.12% | 0.17R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 816 | TSLA | 08-19 13:55 | 08-19 14:35 | 339.03 | 334.79 | 41 | 13900.23 | -173.84 | -1.25% | 1.44R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 817 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.95 | 129.86 | 106 | 13880.7 | -115.54 | -0.83% | 0.9R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 818 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.81 | 127.26 | 109 | 13931.29 | -59.95 | -0.43% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 819 | DIS | 08-20 13:40 | 08-20 14:00 | 117.71 | 116.84 | 118 | 13889.78 | -102.66 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.15 | ↓117.14 | 0.2421 | 1.5 | **LOSS** |
| 820 | HPE | 08-20 15:20 | 08-20 15:45 | 21.05 | 20.95 | 568 | 11956.4 | -56.8 | -0.48% | 0.42R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.01 | ↑20.8 | -0.1327 | 1.37 | **LOSS** |
| 821 | CRWD | 08-20 15:25 | 08-20 15:45 | 417.71 | 416.39 | 33 | 13784.43 | -43.56 | -0.32% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.51 | ↑414.64 | -0.8738 | 3.49 | **LOSS** |
| 822 | GE | 08-20 15:30 | 08-20 15:50 | 268.65 | 267.3 | 52 | 13969.8 | -70.2 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | thinChop | 79.86 | ↑265.78 | 0.5907 | 1.09 | **LOSS** |
| 823 | DELL | 08-21 13:35 | 08-21 13:55 | 130.08 | 128.67 | 107 | 13918.56 | -150.87 | -1.08% | 1.42R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 824 | LLY | 08-21 13:40 | 08-21 14:00 | 715.79 | 711.17 | 19 | 13600.01 | -87.78 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 825 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.48 | 154.87 | 89 | 14015.72 | -232.29 | -1.66% | 0.83R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 826 | SMCI | 08-21 14:25 | 08-21 14:45 | 42.94 | 42.66 | 325 | 13955.5 | -91 | -0.65% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 55.76 | ↑42.61 | 0.1509 | 1.04 | **LOSS** |
| 827 | NVO | 08-21 15:00 | 08-21 16:45 | 55.46 | 55.61 | 251 | 13920.46 | +37.65 | +0.27% | 0.39R | 105m | market | timeout | trend | trend | neutral | 74.11 | ↑55.06 | 0.2703 | 1.08 | **WIN** |
| 828 | LLY | 08-22 13:30 | 08-22 13:50 | 718.9 | 715.02 | 17 | 12221.3 | -65.96 | -0.54% | 0.77R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 73.9 | ↓717.77 | -0.4693 | 6.33 | **LOSS** |
| 829 | MA | 08-22 13:30 | 08-22 14:20 | 598.43 | 598 | 23 | 13763.89 | -9.89 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | thinChop | 89.88 | ↓597.64 | 0.9013 | 1.99 | **LOSS** |
| 830 | MU | 08-22 13:35 | 08-22 13:55 | 117.42 | 116.7 | 119 | 13972.98 | -85.68 | -0.61% | 0.74R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 831 | BA | 08-22 13:35 | 08-22 15:20 | 229.01 | 230.94 | 61 | 13969.61 | +117.73 | +0.84% | 1.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 832 | V | 08-22 13:35 | 08-22 15:20 | 348.35 | 349.71 | 40 | 13934 | +54.4 | +0.39% | 0.56R | 105m | market | timeout | breakout | breakout | thinChop | 87.17 | ↑347.52 | 0.5668 | 1.32 | **WIN** |
| 833 | LMT | 08-22 13:40 | 08-22 14:05 | 452.18 | 449.01 | 30 | 13565.4 | -95.1 | -0.7% | 1R | 25m | market | early-reversal | trend | breakout | thinChop | 74.62 | ↓451.64 | 0.546 | 3.87 | **LOSS** |
| 834 | NVO | 08-22 13:40 | 08-22 14:00 | 57.46 | 57.11 | 225 | 12928.5 | -78.75 | -0.61% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.33 | ↓57.08 | 0.3126 | 1.63 | **LOSS** |
| 835 | QCOM | 08-22 13:45 | 08-22 15:30 | 156.33 | 158.59 | 89 | 13913.37 | +201.14 | +1.45% | 2.07R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.52 | ↑155.78 | 0.4832 | 1.59 | **WIN** |
| 836 | AMD | 08-22 14:00 | 08-22 15:45 | 165.75 | 167.58 | 84 | 13923 | +153.72 | +1.1% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 837 | ASML | 08-22 14:00 | 08-22 15:55 | 752.55 | 753.38 | 18 | 13545.9 | +14.94 | +0.11% | 0.16R | 115m | market | stagnation | breakout | breakout | thinChop | 87.7 | ↓745.02 | 2.4897 | 1.11 | **WIN** |
| 838 | HD | 08-22 14:00 | 08-22 15:45 | 405 | 413.88 | 34 | 13770 | +301.92 | +2.19% | 3.13R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 839 | TXN | 08-22 14:00 | 08-22 15:45 | 206.7 | 207.6 | 67 | 13848.9 | +60.3 | +0.44% | 0.56R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 840 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.43 | 226.87 | 62 | 13914.66 | +151.28 | +1.09% | 1.3R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 841 | META | 08-22 14:05 | 08-22 14:25 | 751.23 | 746.42 | 18 | 13522.14 | -86.58 | -0.64% | 0.78R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 842 | AVGO | 08-22 14:05 | 08-22 15:45 | 297.91 | 297.22 | 46 | 13703.86 | -31.74 | -0.23% | 0.18R | 100m | market | breakeven-stop | breakout | breakout | extendedBreakout | 81.61 | ↑292.68 | 1.7299 | 1.14 | **LOSS** |
| 843 | MU | 08-22 14:05 | 08-22 14:55 | 120.07 | 119.95 | 117 | 14048.19 | -14.04 | -0.1% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 844 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 60 | 13885.8 | +100.2 | +0.72% | 0.9R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 845 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.12 | 141.96 | 92 | 12983.04 | +77.28 | +0.6% | 0.46R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 846 | PANW | 08-22 14:05 | 08-22 14:25 | 186.55 | 185.87 | 74 | 13804.7 | -50.32 | -0.36% | 0.51R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.27 | ↑185.01 | 0.8172 | 1.31 | **LOSS** |
| 847 | SNOW | 08-22 14:05 | 08-22 14:55 | 199.29 | 199.08 | 70 | 13950.3 | -14.7 | -0.11% | 0.14R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 848 | PYPL | 08-22 14:05 | 08-22 15:50 | 69.18 | 69.11 | 201 | 13905.18 | -14.07 | -0.1% | 0.1R | 105m | market | stagnation | breakout | breakout | extendedBreakout | 83.9 | ↑68.47 | 0.316 | 1.25 | **LOSS** |
| 849 | NKE | 08-22 14:05 | 08-22 15:10 | 78.24 | 78.19 | 178 | 13926.72 | -8.9 | -0.06% | 0.08R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 95.74 | ↓77.22 | 0.4594 | 1.2 | **LOSS** |
| 850 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.52 | 12.81 | 1123 | 14059.96 | +325.67 | +2.32% | 1.52R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 851 | MDB | 08-22 14:10 | 08-22 14:30 | 219.29 | 217.72 | 59 | 12938.11 | -92.63 | -0.72% | 0.52R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 78.12 | ↑215.14 | 1.31 | 1.11 | **LOSS** |
| 852 | GS | 08-22 14:10 | 08-22 15:55 | 734.26 | 742.22 | 19 | 13950.94 | +151.24 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 853 | AMAT | 08-22 14:10 | 08-22 15:00 | 164.41 | 164.23 | 85 | 13974.85 | -15.3 | -0.11% | 0.13R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 854 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.2 | 73.99 | 175 | 12985 | -36.75 | -0.28% | 0.19R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 855 | MSFT | 08-22 14:40 | 08-22 15:25 | 509.95 | 508.08 | 27 | 13768.65 | -50.49 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 73.45 | ↓507.24 | 0.8376 | 2.69 | **LOSS** |
| 856 | ORCL | 08-22 14:40 | 08-22 15:25 | 237.44 | 236.67 | 59 | 14008.96 | -45.43 | -0.32% | 0.27R | 45m | market | early-reversal | trend | trend | neutral | 69.38 | ↑234.55 | 0.7442 | 1.06 | **LOSS** |
| 857 | BAC | 08-22 14:40 | 08-22 16:25 | 49.14 | 49.4 | 284 | 13955.76 | +73.84 | +0.53% | 0.72R | 105m | market | timeout | trend | trend | neutral | 67.58 | ↑48.84 | 0.2138 | 1.05 | **WIN** |
| 858 | HPE | 08-22 14:40 | 08-22 16:25 | 22.43 | 22.47 | 621 | 13929.03 | +24.84 | +0.18% | 0.15R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑22.16 | 0.1518 | 1.31 | **WIN** |
| 859 | IBM | 08-22 14:40 | 08-22 15:05 | 243.47 | 242.52 | 57 | 13877.79 | -54.15 | -0.39% | 0.56R | 25m | market | early-reversal | trend | trend | thinChop | 76.51 | ↓242.41 | 0.8806 | 2.11 | **LOSS** |
| 860 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.85 | 1098 | 14109.3 | +0 | +0% | 0R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 861 | GOOGL | 08-22 17:10 | 08-22 18:25 | 205.63 | 207.61 | 34 | 13982.84 | +67.32 | +0.96% | 1.37R | 75m | market | trim-profit-target | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 862 | GOOGL | 08-22 17:10 | 08-22 18:55 | 205.63 | 206.81 | 34 | 13982.84 | +40.12 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 63.27 | ↑203.79 | 0.1067 | 7.45 | **WIN** |
| 863 | RIVN | 08-25 13:45 | 08-25 14:25 | 13.24 | 13.24 | 1066 | 14113.84 | +0 | +0% | 0R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 73.47 | ↓13.1 | 0.071 | 1.29 | **WIN** |
| 864 | BA | 08-26 13:30 | 08-26 15:15 | 229.67 | 232.05 | 61 | 14009.87 | +145.18 | +1.04% | 1.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 865 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.7 | 87.9 | 159 | 13944.3 | +31.8 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 866 | NOW | 08-27 13:35 | 08-27 15:00 | 881.53 | 880.99 | 15 | 13222.95 | -8.1 | -0.06% | 0.09R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 867 | NET | 08-27 13:40 | 08-27 15:25 | 201.43 | 204.93 | 69 | 13898.67 | +241.5 | +1.74% | 1.79R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 868 | MU | 08-27 16:10 | 08-27 16:30 | 118.46 | 117.64 | 118 | 13978.28 | -96.76 | -0.69% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↑117.42 | 0.3013 | 1.79 | **LOSS** |
| 869 | COIN | 08-28 13:30 | 08-28 13:50 | 314.89 | 312.03 | 41 | 12910.49 | -117.26 | -0.91% | 1.15R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↓314.9 | 0.239 | 3.36 | **LOSS** |
| 870 | AMD | 08-28 13:35 | 08-28 13:50 | 170.23 | 167.94 | 82 | 13958.86 | -187.78 | -1.35% | 1.45R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 871 | MU | 08-28 13:35 | 08-28 13:55 | 121.04 | 118.82 | 116 | 14040.64 | -257.52 | -1.83% | 2.15R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 872 | SNOW | 08-28 13:45 | 08-28 14:15 | 232.26 | 239.39 | 55 | 12774.3 | +392.15 | +3.07% | 1.54R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 82.4 | ↑228.12 | 7.4764 | 2.11 | **WIN** |
| 873 | ELF | 08-28 13:45 | 08-28 15:30 | 128.04 | 130.71 | 108 | 13828.32 | +288.36 | +2.09% | 2.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.37 | ↑127.48 | 0.7557 | 3.86 | **WIN** |
| 874 | INTU | 08-28 14:30 | 08-28 14:55 | 670.71 | 668.67 | 20 | 13414.2 | -40.8 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 79.04 | ↑665.43 | 1.5439 | 1.48 | **LOSS** |
| 875 | ARM | 08-28 15:40 | 08-28 16:35 | 143.16 | 142.94 | 97 | 13886.52 | -21.34 | -0.15% | 0.21R | 55m | market | stagnation | trend | trend | neutral | 76.32 | ↑141.61 | 0.4577 | 2.69 | **LOSS** |
| 876 | SNOW | 08-28 17:05 | 08-28 18:50 | 242.37 | 245.85 | 57 | 13815.09 | +198.36 | +1.44% | 1.32R | 105m | market | timeout | breakout | breakout | neutral | 85.04 | ↑234.12 | 0.6388 | 1.89 | **WIN** |
| 877 | CELH | 08-29 13:45 | 08-29 15:10 | 62.4 | 62.33 | 203 | 12667.2 | -14.21 | -0.11% | 0.06R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.15 | ↓61.99 | 0.5071 | 1.98 | **LOSS** |
| 878 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.7 | 156.32 | 88 | 13877.6 | -121.44 | -0.88% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 879 | MRVL | 09-02 17:40 | 09-02 19:15 | 63.49 | 64.12 | 110 | 14031.29 | +69.3 | +0.99% | 1.41R | 95m | market | trim-profit-target | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 880 | MRVL | 09-02 17:40 | 09-02 19:25 | 63.49 | 63.95 | 111 | 14031.29 | +51.06 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 79.7 | ↑62.88 | 0.1293 | 1.51 | **WIN** |
| 881 | HPE | 09-03 13:30 | 09-03 13:50 | 22.99 | 22.75 | 606 | 13931.94 | -145.44 | -1.04% | 1.49R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.72 | ↓22.97 | 0.0741 | 1.25 | **LOSS** |
| 882 | UBER | 09-03 13:35 | 09-03 13:55 | 93.94 | 92.99 | 149 | 13997.06 | -141.55 | -1.01% | 1.44R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.46 | ↓93.4 | 0.0909 | 1.57 | **LOSS** |
| 883 | ASML | 09-03 13:45 | 09-03 14:35 | 736.8 | 735.84 | 18 | 13262.4 | -17.28 | -0.13% | 0.19R | 50m | market | stagnation | breakout | breakout | thinChop | 89.6 | ↑732.83 | 2.2307 | 1.33 | **LOSS** |
| 884 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.16 | 339.81 | 41 | 13946.56 | -14.35 | -0.1% | 0.08R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 885 | TSM | 09-03 14:40 | 09-03 15:15 | 231.94 | 231.21 | 60 | 13916.4 | -43.8 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 886 | AVGO | 09-03 14:45 | 09-03 15:25 | 303.76 | 302.13 | 45 | 13669.2 | -73.35 | -0.54% | 0.47R | 40m | market | early-reversal | trend | trend | neutral | 69.6 | ↑299.96 | 1.3055 | 1.54 | **LOSS** |
| 887 | NFLX | 09-03 15:05 | 09-03 15:25 | 1225.65 | 1217 | 11 | 13482.15 | -95.15 | -0.71% | 1.01R | 20m | market | early-reversal | trend | trend | neutral | 76.17 | ↑1213.16 | 2.2553 | 1.11 | **LOSS** |
| 888 | DELL | 09-03 16:55 | 09-03 17:15 | 123.95 | 123.01 | 112 | 13882.4 | -105.28 | -0.76% | 1.09R | 20m | market | stop-loss | trend | trend | neutral | 75.27 | ↑122.18 | 0.2413 | 3.54 | **LOSS** |
| 889 | SHOP | 09-04 13:45 | 09-04 14:05 | 142.26 | 140.54 | 98 | 13941.48 | -168.56 | -1.21% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.94 | ↓141.9 | 0.4522 | 3.41 | **LOSS** |
| 890 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.41 | 100.13 | 140 | 13917.4 | +100.8 | +0.72% | 0.71R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 891 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.25 | 581 | 14013.72 | +75.53 | +0.54% | 0.68R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 892 | DIS | 09-04 14:30 | 09-04 16:05 | 118.62 | 118.46 | 117 | 13878.54 | -18.72 | -0.13% | 0.19R | 95m | market | stagnation | trend | trend | thinChop | 76.09 | ↑117.94 | 0.4323 | 1.34 | **LOSS** |
| 893 | SMCI | 09-04 14:35 | 09-04 14:55 | 40.75 | 40.54 | 342 | 13936.5 | -71.82 | -0.52% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑40.32 | 0.1624 | 1.17 | **LOSS** |
| 894 | AMAT | 09-04 14:35 | 09-04 16:20 | 157.91 | 157.84 | 88 | 13896.08 | -6.16 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 76.82 | ↑156.79 | 0.7312 | 1.04 | **LOSS** |
| 895 | MDB | 09-04 14:45 | 09-04 16:35 | 311.61 | 315.34 | 44 | 13710.84 | +164.12 | +1.2% | 1.11R | 110m | market | timeout | trend | trend | noisyHighBeta | 57.43 | ↑308.48 | -0.0258 | 1.35 | **WIN** |
| 896 | ASML | 09-04 15:00 | 09-04 15:55 | 753.68 | 752.71 | 18 | 13566.24 | -17.46 | -0.13% | 0.19R | 55m | market | stagnation | trend | trend | thinChop | 75.61 | ↑746.98 | 4.9787 | 1.51 | **LOSS** |
| 897 | IBM | 09-04 15:00 | 09-04 16:45 | 246.52 | 248.07 | 56 | 13805.12 | +86.8 | +0.63% | 0.9R | 105m | market | timeout | trend | trend | thinChop | 78.13 | ↑244.83 | 0.7761 | 1.49 | **WIN** |
| 898 | WMT | 09-04 15:40 | 09-04 16:00 | 101.24 | 100.9 | 137 | 13869.88 | -46.58 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | thinChop | 78.63 | ↑100.42 | 0.3938 | 1.09 | **LOSS** |
| 899 | INTC | 09-04 17:10 | 09-04 17:30 | 24.47 | 24.37 | 573 | 14021.31 | -57.3 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 66.34 | ↑24.14 | 0.0514 | 2.74 | **LOSS** |
| 900 | MDB | 09-04 17:40 | 09-04 18:35 | 317.92 | 317.66 | 44 | 13988.48 | -11.44 | -0.08% | 0.11R | 55m | market | stagnation | trend | trend | noisyHighBeta | 75 | ↑311.73 | 1.0645 | 1.21 | **LOSS** |
| 901 | NET | 09-05 13:30 | 09-05 13:50 | 213.22 | 211.87 | 61 | 13006.42 | -82.35 | -0.63% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 902 | CRM | 09-05 13:35 | 09-05 14:55 | 247.39 | 247.1 | 56 | 13853.84 | -16.24 | -0.12% | 0.15R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.66 | ↓246.29 | 0.5948 | 1.57 | **LOSS** |
| 903 | ADBE | 09-05 13:35 | 09-05 14:10 | 353.08 | 349.72 | 39 | 13770.12 | -131.04 | -0.95% | 1.36R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.68 | ↓350.85 | 1.6664 | 4.86 | **LOSS** |
| 904 | DDOG | 09-05 13:35 | 09-05 14:20 | 134.46 | 133.56 | 103 | 13849.38 | -92.7 | -0.67% | 0.96R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.69 | ↓133.92 | 0.254 | 1.7 | **LOSS** |
| 905 | PYPL | 09-05 13:35 | 09-05 13:55 | 69.9 | 69.48 | 199 | 13910.1 | -83.58 | -0.6% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.23 | ↓69.37 | 0.215 | 1.68 | **LOSS** |
| 906 | KLAC | 09-05 13:35 | 09-05 14:15 | 886.67 | 881.99 | 15 | 13300.05 | -70.2 | -0.53% | 0.76R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 907 | GOOGL | 09-05 13:40 | 09-05 14:10 | 235 | 234.07 | 60 | 14100 | -55.8 | -0.4% | 0.57R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 908 | TSM | 09-05 13:40 | 09-05 14:05 | 241.84 | 240.65 | 53 | 12817.52 | -63.07 | -0.49% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.7 | ↓240.79 | 1.3629 | 2.93 | **LOSS** |
| 909 | PANW | 09-05 13:40 | 09-05 14:00 | 196.22 | 195.24 | 70 | 13735.4 | -68.6 | -0.5% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 910 | CRWD | 09-05 13:40 | 09-05 13:55 | 417.54 | 412.53 | 33 | 13778.82 | -165.33 | -1.2% | 1.58R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 61.48 | ↓415.34 | 0.438 | 1.2 | **LOSS** |
| 911 | SNOW | 09-05 13:40 | 09-05 14:10 | 225.85 | 224.39 | 62 | 14002.7 | -90.52 | -0.65% | 0.66R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.3 | ↓224.98 | 0.5106 | 1.54 | **LOSS** |
| 912 | RIVN | 09-05 13:40 | 09-05 14:15 | 14.2 | 14.08 | 923 | 13106.6 | -110.76 | -0.85% | 0.67R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.07 | ↓13.97 | 0.0939 | 2.1 | **LOSS** |
| 913 | UNH | 09-05 13:45 | 09-05 14:10 | 314.56 | 313.01 | 44 | 13840.64 | -68.2 | -0.49% | 0.7R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 914 | SNOW | 09-08 13:35 | 09-08 14:30 | 228.52 | 228.38 | 61 | 13939.72 | -8.54 | -0.06% | 0.09R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 915 | NET | 09-08 13:35 | 09-08 14:20 | 219.25 | 217.41 | 64 | 14032 | -117.76 | -0.84% | 1.08R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 916 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.08 | 169.25 | 82 | 13946.56 | -68.06 | -0.49% | 0.69R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 917 | META | 09-08 13:40 | 09-08 14:05 | 765.48 | 760.91 | 18 | 13778.64 | -82.26 | -0.6% | 0.86R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 918 | ORCL | 09-08 13:40 | 09-08 14:15 | 239.04 | 237.27 | 58 | 13864.32 | -102.66 | -0.74% | 0.46R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.79 | ↓237.83 | 1.4607 | 1.42 | **LOSS** |
| 919 | COIN | 09-08 14:00 | 09-08 14:20 | 303.03 | 300.01 | 46 | 13939.38 | -138.92 | -1% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↓300.78 | 0.926 | 1.12 | **LOSS** |
| 920 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.15 | 125.1 | 111 | 13891.65 | -5.55 | -0.04% | 0.05R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 921 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.46 | 236.54 | 59 | 13951.14 | +4.72 | +0.03% | 0.04R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 922 | INTC | 09-08 15:40 | 09-08 16:00 | 24.73 | 24.56 | 567 | 14021.91 | -96.39 | -0.69% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 70.94 | ↑24.46 | 0.0559 | 1.52 | **LOSS** |
| 923 | LLY | 09-08 16:55 | 09-08 17:15 | 732.18 | 729.67 | 19 | 13911.42 | -47.69 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 70.55 | ↑726.19 | 0.3824 | 8.21 | **LOSS** |
| 924 | AMD | 09-09 13:35 | 09-09 13:50 | 154.11 | 152.42 | 90 | 13869.9 | -152.1 | -1.1% | 1.53R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.54 | ↓153.27 | 0.4219 | 3.06 | **LOSS** |
| 925 | JPM | 09-09 14:35 | 09-09 15:55 | 297.23 | 297.05 | 47 | 13969.81 | -8.46 | -0.06% | 0.08R | 80m | market | stagnation | trend | trend | neutral | 73.4 | ↑295.1 | 0.816 | 2.37 | **LOSS** |
| 926 | GS | 09-09 14:35 | 09-09 16:20 | 753.38 | 755.19 | 18 | 13560.84 | +32.58 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 927 | BAC | 09-09 15:25 | 09-09 15:45 | 50.53 | 50.37 | 277 | 13996.81 | -44.32 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 79.86 | ↑50.04 | 0.2452 | 1.07 | **LOSS** |
| 928 | NVO | 09-09 15:35 | 09-09 15:55 | 53.92 | 53.68 | 258 | 13911.36 | -61.92 | -0.45% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 67.34 | ↑53.19 | 0.0258 | 3.28 | **LOSS** |
| 929 | MU | 09-09 16:00 | 09-09 17:45 | 134.76 | 134.93 | 103 | 13880.28 | +17.51 | +0.13% | 0.19R | 105m | market | timeout | trend | trend | neutral | 75.3 | ↑132.83 | 0.5719 | 1.14 | **WIN** |
| 930 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.14 | 228.99 | 60 | 13868.4 | -129 | -0.93% | 0.94R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 931 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.58 | 566 | 14014.16 | -101.88 | -0.73% | 0.79R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 932 | NOW | 09-10 13:45 | 09-10 14:05 | 944.47 | 937.7 | 14 | 13222.58 | -94.78 | -0.72% | 1.03R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.39 | ↓938.4 | 1.3648 | 1.13 | **LOSS** |
| 933 | ARM | 09-10 13:55 | 09-10 15:40 | 149.24 | 151.27 | 93 | 13879.32 | +188.79 | +1.36% | 0.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.83 | ↑147.98 | 1.9869 | 2.59 | **WIN** |
| 934 | GS | 09-10 14:00 | 09-10 14:35 | 771.21 | 767.95 | 18 | 13881.78 | -58.68 | -0.42% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 935 | GS | 09-11 13:40 | 09-11 15:25 | 779.57 | 785.65 | 18 | 14032.26 | +109.44 | +0.78% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 936 | INTU | 09-11 13:45 | 09-11 14:05 | 665.87 | 660.7 | 20 | 13317.4 | -103.4 | -0.78% | 1.04R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.05 | ↓663.92 | 1.8587 | 1.14 | **LOSS** |
| 937 | CAT | 09-11 14:00 | 09-11 14:20 | 435.37 | 432.79 | 32 | 13931.84 | -82.56 | -0.59% | 0.7R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.28 | ↓433.3 | 1.7475 | 5.99 | **LOSS** |
| 938 | NKE | 09-11 14:00 | 09-11 14:20 | 75.36 | 74.96 | 185 | 13941.6 | -74 | -0.53% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 79.46 | ↓74.98 | 0.278 | 1.24 | **LOSS** |
| 939 | NET | 09-11 14:15 | 09-11 15:25 | 226.47 | 229 | 31 | 14041.14 | +78.43 | +1.12% | 1R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 940 | NET | 09-11 14:15 | 09-11 16:00 | 226.47 | 229.66 | 31 | 14041.14 | +98.89 | +1.41% | 1.26R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 941 | QCOM | 09-11 14:35 | 09-11 16:20 | 160.53 | 160.74 | 87 | 13966.11 | +18.27 | +0.13% | 0.16R | 105m | market | timeout | trend | trend | neutral | 66.34 | ↑159.77 | 0.6266 | 1.1 | **WIN** |
| 942 | LMT | 09-11 15:50 | 09-11 17:35 | 471.38 | 470.92 | 29 | 13670.02 | -13.34 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 64.97 | ↑468.4 | 1.8951 | 2.88 | **LOSS** |
| 943 | CELH | 09-11 17:05 | 09-11 17:45 | 58.58 | 58.33 | 235 | 13766.3 | -58.75 | -0.43% | 0.61R | 40m | market | early-reversal | trend | trend | neutral | 69.42 | ↑57.72 | 0.2782 | 1.2 | **LOSS** |
| 944 | MSFT | 09-12 13:40 | 09-12 15:25 | 507.05 | 510.46 | 27 | 13690.35 | +92.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.7 | ↑505.56 | 1.1579 | 1.6 | **WIN** |
| 945 | AAPL | 09-12 14:05 | 09-12 15:50 | 232.83 | 234.28 | 59 | 13736.97 | +85.55 | +0.62% | 0.71R | 105m | market | timeout | trend | trend | neutral | 64.82 | ↑230.73 | 0.4094 | 1.94 | **WIN** |
| 946 | PLTR | 09-12 14:50 | 09-12 15:10 | 168.22 | 166.58 | 83 | 13962.26 | -136.12 | -0.97% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 76.58 | ↑166.22 | 0.7275 | 1.3 | **LOSS** |
| 947 | ELF | 09-12 15:20 | 09-12 15:50 | 140.17 | 139.43 | 99 | 13876.83 | -73.26 | -0.53% | 0.65R | 30m | market | early-reversal | breakout | breakout | neutral | 73.82 | ↑138 | 0.4712 | 1.52 | **LOSS** |
| 948 | ADBE | 09-15 13:30 | 09-15 13:50 | 353.78 | 351.75 | 39 | 13797.42 | -79.17 | -0.57% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.56 | ↓353.28 | 0.554 | 2.33 | **LOSS** |
| 949 | SNOW | 09-15 13:30 | 09-15 15:15 | 224.2 | 226.61 | 62 | 13900.4 | +149.42 | +1.07% | 1.43R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.23 | ↑223.8 | 0.0256 | 1.74 | **WIN** |
| 950 | ELF | 09-15 13:30 | 09-15 13:35 | 137.35 | 135.39 | 94 | 12910.9 | -184.24 | -1.43% | 1.34R | 5m | market | stop-loss | breakout | breakout | neutral | 59.19 | ↓136.79 | -0.7498 | 1.65 | **LOSS** |
| 951 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.7 | 247.21 | 56 | 14039.2 | -195.44 | -1.39% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 952 | INTC | 09-15 13:40 | 09-15 14:55 | 24.68 | 25.31 | 567 | 13993.56 | +357.21 | +2.55% | 2.77R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 953 | PANW | 09-15 13:40 | 09-15 14:55 | 200.05 | 200.12 | 69 | 13803.45 | +4.83 | +0.03% | 0.04R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.11 | ↑198.53 | 0.2926 | 1.15 | **WIN** |
| 954 | NET | 09-15 13:40 | 09-15 15:25 | 224.29 | 227.1 | 62 | 13905.98 | +174.22 | +1.25% | 1.6R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 955 | PYPL | 09-15 13:40 | 09-15 14:00 | 67.82 | 67.49 | 205 | 13903.1 | -67.65 | -0.49% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.9 | ↓67.57 | 0.1129 | 1.18 | **LOSS** |
| 956 | ASML | 09-15 13:45 | 09-15 15:30 | 842.35 | 858.75 | 15 | 12635.25 | +246 | +1.95% | 2.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.04 | ↑840.18 | 7.076 | 2.75 | **WIN** |
| 957 | UBER | 09-15 13:50 | 09-15 14:15 | 98.29 | 97.71 | 142 | 13957.18 | -82.36 | -0.59% | 0.53R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.22 | ↑96.75 | 0.4259 | 1.24 | **LOSS** |
| 958 | MDB | 09-15 13:55 | 09-15 14:15 | 341.97 | 335.28 | 40 | 13678.8 | -267.6 | -1.96% | 1.72R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.93 | ↓339.12 | 2.3834 | 1.2 | **LOSS** |
| 959 | CRWD | 09-15 14:00 | 09-15 14:15 | 449 | 444.66 | 30 | 13470 | -130.2 | -0.97% | 1.26R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 83.35 | ↓443.63 | 2.1537 | 1.34 | **LOSS** |
| 960 | GS | 09-15 14:40 | 09-15 15:45 | 789.8 | 782.9 | 17 | 13426.6 | -117.3 | -0.87% | 1.24R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 961 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.5 | 232.75 | 59 | 13776.5 | -44.25 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 962 | DDOG | 09-15 15:45 | 09-15 16:05 | 139.46 | 138.99 | 100 | 13946 | -47 | -0.34% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 73.47 | ↑137.99 | 0.219 | 3.72 | **LOSS** |
| 963 | NET | 09-15 16:20 | 09-15 16:55 | 229.18 | 228.01 | 61 | 13979.98 | -71.37 | -0.51% | 0.73R | 35m | market | early-reversal | trend | trend | neutral | 78.33 | ↑225.88 | 1.3733 | 2.17 | **LOSS** |
| 964 | DELL | 09-15 16:30 | 09-15 17:00 | 127.84 | 127.45 | 108 | 13806.72 | -42.12 | -0.31% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 79.65 | ↑126.59 | 0.2823 | 2.34 | **LOSS** |
| 965 | RIVN | 09-15 17:40 | 09-15 18:00 | 13.76 | 13.61 | 1024 | 14090.24 | -153.6 | -1.09% | 1.3R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 71.76 | ↓13.6 | 0.0304 | 1.37 | **LOSS** |
| 966 | QCOM | 09-16 13:30 | 09-16 15:15 | 163.09 | 164.61 | 85 | 13862.65 | +129.2 | +0.93% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.94 | ↑162.52 | 0.2241 | 2.43 | **WIN** |
| 967 | GE | 09-16 13:35 | 09-16 13:55 | 291.03 | 289.61 | 48 | 13969.44 | -68.16 | -0.49% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.6 | ↓290.04 | 0.7858 | 1.52 | **LOSS** |
| 968 | AMAT | 09-16 13:35 | 09-16 13:45 | 173.87 | 172.54 | 80 | 13909.6 | -106.4 | -0.76% | 1.09R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.64 | ↓173.47 | 0.4738 | 1.22 | **LOSS** |
| 969 | KLAC | 09-16 13:35 | 09-16 13:45 | 1001.83 | 993.23 | 13 | 13023.79 | -111.8 | -0.86% | 1.23R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.75 | ↓999.43 | 4.8186 | 3.58 | **LOSS** |
| 970 | AAPL | 09-16 13:50 | 09-16 14:40 | 239.93 | 239.17 | 58 | 13915.94 | -44.08 | -0.32% | 0.46R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.06 | ↓238.23 | 0.7303 | 1.96 | **LOSS** |
| 971 | RIVN | 09-16 13:50 | 09-16 14:10 | 14.12 | 13.84 | 997 | 14077.64 | -279.16 | -1.98% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75 | ↓13.95 | 0.1083 | 1.24 | **LOSS** |
| 972 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.18 | 234.28 | 59 | 13875.62 | -53.1 | -0.38% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 973 | INTC | 09-16 14:10 | 09-16 15:00 | 25.21 | 25.12 | 557 | 14041.97 | -50.13 | -0.36% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 974 | TSLA | 09-16 14:45 | 09-16 15:05 | 421.01 | 416.42 | 33 | 13893.33 | -151.47 | -1.09% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 975 | HPE | 09-17 13:45 | 09-17 14:05 | 24.9 | 24.79 | 559 | 13919.1 | -61.49 | -0.44% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.8 | ↑24.76 | 0.066 | 2.25 | **LOSS** |
| 976 | LRCX | 09-17 13:50 | 09-17 14:40 | 122.22 | 121.36 | 114 | 13933.08 | -98.04 | -0.7% | 0.7R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.66 | ↓120.95 | 0.346 | 2.64 | **LOSS** |
| 977 | MRVL | 09-17 14:05 | 09-17 15:50 | 70.57 | 71.08 | 199 | 14043.43 | +101.49 | +0.72% | 0.62R | 105m | market | timeout | breakout | breakout | neutral | 81.15 | ↑69.72 | 0.3295 | 1.19 | **WIN** |
| 978 | NFLX | 09-17 16:50 | 09-17 17:10 | 1226.9 | 1223.11 | 11 | 13495.9 | -41.69 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 76.82 | ↑1218.18 | 2.6823 | 3.92 | **LOSS** |
| 979 | META | 09-18 13:40 | 09-18 14:00 | 786 | 782.83 | 17 | 13362 | -53.89 | -0.4% | 0.41R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 980 | QCOM | 09-18 13:40 | 09-18 14:50 | 167.36 | 167.15 | 83 | 13890.88 | -17.43 | -0.13% | 0.13R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.33 | ↓167.03 | 0.413 | 3.99 | **LOSS** |
| 981 | MRVL | 09-18 13:45 | 09-18 14:55 | 74.18 | 73.93 | 174 | 12907.32 | -43.5 | -0.34% | 0.18R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 77.79 | ↓73.84 | 0.5868 | 1.35 | **LOSS** |
| 982 | COIN | 09-18 14:05 | 09-18 14:35 | 330.05 | 337.99 | 42 | 13862.1 | +333.48 | +2.41% | 1.54R | 30m | market | profit-target | trend | trend | neutral | 70.09 | ↑327.83 | 2.7118 | 1.04 | **WIN** |
| 983 | SHOP | 09-18 14:05 | 09-18 14:30 | 151.24 | 150.27 | 92 | 13914.08 | -89.24 | -0.64% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 79.96 | ↑149.88 | 0.8373 | 1.12 | **LOSS** |
| 984 | IBM | 09-18 14:30 | 09-18 14:55 | 262.48 | 261.39 | 53 | 13911.44 | -57.77 | -0.42% | 0.58R | 25m | market | early-reversal | trend | trend | neutral | 68.44 | ↓260.9 | 0.796 | 2.99 | **LOSS** |
| 985 | NET | 09-18 15:30 | 09-18 17:25 | 220.35 | 221.5 | 64 | 14102.4 | +73.6 | +0.52% | 0.74R | 115m | market | timeout | trend | trend | thinChop | 78.24 | ↑218.46 | 1.2859 | 1.3 | **WIN** |
| 986 | INTC | 09-18 15:50 | 09-18 16:10 | 32.31 | 31.89 | 434 | 14022.54 | -182.28 | -1.3% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 77.18 | ↑31.4 | 0.1395 | 1.45 | **LOSS** |
| 987 | SMCI | 09-18 16:00 | 09-18 16:55 | 45.83 | 45.66 | 304 | 13932.32 | -51.68 | -0.37% | 0.44R | 55m | market | stagnation | trend | trend | neutral | 73.45 | ↑45.2 | 0.197 | 1.07 | **LOSS** |
| 988 | TSM | 09-18 17:20 | 09-18 17:40 | 269.35 | 267.65 | 52 | 14006.2 | -88.4 | -0.63% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑264.12 | 0.4861 | 3.71 | **LOSS** |
| 989 | SNOW | 09-19 14:00 | 09-19 15:45 | 225.24 | 227.7 | 62 | 13964.88 | +152.52 | +1.09% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑224.52 | 1.1048 | 1.3 | **WIN** |
| 990 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.65 | 84.36 | 165 | 13967.25 | -47.85 | -0.34% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 991 | UNH | 09-19 15:30 | 09-19 17:15 | 338.74 | 339.25 | 41 | 13888.34 | +20.91 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.32 | ↑336.54 | 0.4519 | 1.53 | **WIN** |
| 992 | AAPL | 09-19 16:10 | 09-19 17:55 | 244.39 | 245.19 | 57 | 13930.23 | +45.6 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑241.91 | 0.7438 | 1.5 | **WIN** |
| 993 | JPM | 09-19 16:20 | 09-19 17:10 | 314.24 | 313.45 | 44 | 13826.56 | -34.76 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | thinChop | 76.23 | ↑311.06 | 0.5591 | 2.31 | **LOSS** |
| 994 | ORCL | 09-22 13:30 | 09-22 13:55 | 309.94 | 307.55 | 45 | 13947.3 | -107.55 | -0.77% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 59.78 | ↓309.27 | 0.8707 | 2.2 | **LOSS** |
| 995 | ASML | 09-22 13:40 | 09-22 14:15 | 958.91 | 954.46 | 13 | 12465.83 | -57.85 | -0.46% | 0.51R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.19 | ↓959.19 | 4.1997 | 1.66 | **LOSS** |
| 996 | CRM | 09-22 14:30 | 09-22 16:15 | 247.76 | 248.32 | 56 | 13874.56 | +31.36 | +0.23% | 0.25R | 105m | market | timeout | trend | trend | neutral | 54.29 | ↑245.46 | 0.2287 | 1.58 | **WIN** |
| 997 | MU | 09-22 15:15 | 09-22 15:45 | 166.02 | 166.06 | 84 | 13945.68 | +3.36 | +0.02% | 0.03R | 30m | market | breakeven-stop | trend | trend | neutral | 64.13 | ↑164.32 | 0.7393 | 1.55 | **WIN** |
| 998 | NVDA | 09-22 16:00 | 09-22 16:35 | 177.38 | 183.12 | 79 | 14013.02 | +453.46 | +3.24% | 4.63R | 35m | market | profit-target | trend | trend | neutral | 71.72 | ↑175.72 | 0.1278 | 5.33 | **WIN** |
| 999 | ARM | 09-22 16:10 | 09-22 17:25 | 143.86 | 144.83 | 48 | 13954.42 | +46.56 | +0.67% | 0.96R | 75m | market | trim-profit-target | trend | trend | neutral | 64.75 | ↑142.65 | 0.1891 | 1.72 | **WIN** |
| 1000 | ARM | 09-22 16:10 | 09-22 17:55 | 143.86 | 144.78 | 49 | 13954.42 | +45.08 | +0.64% | 0.91R | 105m | market | timeout | trend | trend | neutral | 64.75 | ↑142.65 | 0.1891 | 1.72 | **WIN** |

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

- ⚠️ **Profit factor 0.8 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:11:34.729Z*
