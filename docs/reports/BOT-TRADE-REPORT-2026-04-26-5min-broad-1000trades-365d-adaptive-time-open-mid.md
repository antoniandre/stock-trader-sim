# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T10:45:55.253Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $7532.11 (-7.53%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 35.9% (359W / 641L) |
| Net P&L | $-7532.11 (-7.53%) |
| Gross profit | $39488.38 |
| Gross loss | $47020.49 |
| Profit factor | 0.84 |
| Avg win | $110 |
| Avg loss | $73.35 |
| Payoff ratio | 1.5:1 |
| Expectancy | $-7.53 / trade |
| Max drawdown | 9.66% |
| Sharpe ratio (ann.) | -1.93 |
| Trades / active day | 5.32 |
| Avg confidence | 99.3% |
| Avg trade duration | 56 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $92,467.89 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 339 | 35.4% | $-194.19 | $-0.57 |
| Mid  10:30–11:30 | 661 | 36.16% | $-7337.92 | $-11.1 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 32 | 17 | 53.13% | $+1111.31 | $+34.73 | 1.92 | eligible |
| NET | 22 | 13 | 59.09% | $+840.56 | $+38.21 | 2.06 | eligible |
| SBUX | 21 | 13 | 61.9% | $+838.31 | $+39.92 | 2.55 | eligible |
| INTC | 27 | 12 | 44.44% | $+693.21 | $+25.67 | 1.55 | eligible |
| ABNB | 15 | 8 | 53.33% | $+519.49 | $+34.63 | 2.34 | eligible |
| V | 2 | 2 | 100% | $+393.1 | $+196.55 | ∞ | watch |
| BA | 21 | 8 | 38.1% | $+333.58 | $+15.88 | 1.49 | throttle |
| GOOGL | 19 | 9 | 47.37% | $+319.19 | $+16.8 | 1.54 | eligible |
| HD | 8 | 3 | 37.5% | $+275.57 | $+34.45 | 2.15 | throttle |
| RIVN | 23 | 11 | 47.83% | $+272.56 | $+11.85 | 1.26 | eligible |
| TGT | 14 | 5 | 35.71% | $+263.64 | $+18.83 | 1.75 | throttle |
| ADP | 5 | 3 | 60% | $+214.36 | $+42.87 | 2.67 | eligible |
| DDOG | 17 | 9 | 52.94% | $+214.01 | $+12.59 | 1.4 | eligible |
| ORCL | 15 | 5 | 33.33% | $+190.88 | $+12.73 | 1.18 | throttle |
| LLY | 17 | 8 | 47.06% | $+138.28 | $+8.13 | 1.17 | eligible |
| INTU | 8 | 3 | 37.5% | $+122.41 | $+15.3 | 1.61 | throttle |
| GS | 15 | 6 | 40% | $+69.58 | $+4.64 | 1.14 | eligible |
| XOM | 5 | 3 | 60% | $+46.87 | $+9.37 | 1.44 | eligible |
| NVDA | 22 | 9 | 40.91% | $+42.83 | $+1.95 | 1.04 | eligible |
| MRVL | 31 | 14 | 45.16% | $+25.55 | $+0.82 | 1.02 | eligible |
| WMT | 6 | 2 | 33.33% | $+5.54 | $+0.92 | 1.02 | throttle |
| MA | 2 | 1 | 50% | $-0.95 | $-0.48 | 0.99 | watch |
| LMT | 6 | 3 | 50% | $-17.95 | $-2.99 | 0.89 | throttle |
| GE | 14 | 7 | 50% | $-41.34 | $-2.95 | 0.93 | throttle |
| NVO | 17 | 7 | 41.18% | $-56.45 | $-3.32 | 0.89 | throttle |
| UBER | 12 | 5 | 41.67% | $-59.24 | $-4.94 | 0.88 | throttle |
| ARM | 25 | 10 | 40% | $-64.01 | $-2.56 | 0.94 | throttle |
| MCD | 3 | 0 | 0% | $-76.05 | $-25.35 | 0 | watch |
| KLAC | 14 | 4 | 28.57% | $-82.49 | $-5.89 | 0.9 | throttle |
| BAC | 13 | 5 | 38.46% | $-85.43 | $-6.57 | 0.77 | throttle |
| UNH | 12 | 3 | 25% | $-93.99 | $-7.83 | 0.83 | throttle |
| TXN | 11 | 4 | 36.36% | $-101.99 | $-9.27 | 0.76 | throttle |
| NFLX | 19 | 4 | 21.05% | $-118.1 | $-6.22 | 0.8 | throttle |
| NOW | 11 | 3 | 27.27% | $-118.98 | $-10.82 | 0.82 | throttle |
| SHOP | 22 | 7 | 31.82% | $-127.23 | $-5.78 | 0.9 | throttle |
| COST | 9 | 2 | 22.22% | $-131.11 | $-14.57 | 0.56 | throttle |
| LOW | 10 | 4 | 40% | $-134.98 | $-13.5 | 0.73 | throttle |
| IBM | 12 | 4 | 33.33% | $-143.79 | $-11.98 | 0.72 | throttle |
| MSFT | 3 | 0 | 0% | $-153.5 | $-51.17 | 0 | watch |
| TSM | 10 | 2 | 20% | $-158.84 | $-15.88 | 0.62 | throttle |
| JPM | 5 | 0 | 0% | $-161.83 | $-32.37 | 0 | throttle |
| MU | 18 | 7 | 38.89% | $-163.91 | $-9.11 | 0.86 | throttle |
| CRM | 15 | 5 | 33.33% | $-186.72 | $-12.45 | 0.66 | throttle |
| COIN | 17 | 6 | 35.29% | $-192.49 | $-11.32 | 0.84 | throttle |
| SNOW | 17 | 4 | 23.53% | $-197.73 | $-11.63 | 0.79 | throttle |
| AAPL | 16 | 6 | 37.5% | $-225.86 | $-14.12 | 0.52 | throttle |
| CVX | 14 | 6 | 42.86% | $-237.44 | $-16.96 | 0.63 | throttle |
| DIS | 7 | 2 | 28.57% | $-237.94 | $-33.99 | 0.19 | throttle |
| PANW | 10 | 2 | 20% | $-267.03 | $-26.7 | 0.21 | throttle |
| LRCX | 15 | 5 | 33.33% | $-307.1 | $-20.47 | 0.67 | throttle |
| ADBE | 9 | 3 | 33.33% | $-312.5 | $-34.72 | 0.28 | throttle |
| ASML | 9 | 2 | 22.22% | $-321.87 | $-35.76 | 0.16 | throttle |
| MDB | 15 | 5 | 33.33% | $-322.63 | $-21.51 | 0.69 | throttle |
| AMZN | 15 | 5 | 33.33% | $-360.54 | $-24.04 | 0.48 | throttle |
| QCOM | 19 | 7 | 36.84% | $-373.71 | $-19.67 | 0.49 | throttle |
| CAT | 9 | 1 | 11.11% | $-378.16 | $-42.02 | 0.12 | throttle |
| PYPL | 11 | 3 | 27.27% | $-383.85 | $-34.9 | 0.47 | throttle |
| META | 15 | 4 | 26.67% | $-427.06 | $-28.47 | 0.37 | throttle |
| CRWD | 16 | 3 | 18.75% | $-458.94 | $-28.68 | 0.32 | throttle |
| HPE | 15 | 4 | 26.67% | $-503.03 | $-33.54 | 0.28 | throttle |
| AMD | 22 | 8 | 36.36% | $-505.89 | $-22.99 | 0.59 | throttle |
| AVGO | 14 | 2 | 14.29% | $-612.97 | $-43.78 | 0.22 | throttle |
| NKE | 9 | 2 | 22.22% | $-626.62 | $-69.62 | 0.16 | throttle |
| AMAT | 16 | 4 | 25% | $-686.15 | $-42.88 | 0.32 | throttle |
| PLTR | 23 | 5 | 21.74% | $-702.79 | $-30.56 | 0.6 | throttle |
| CELH | 22 | 5 | 22.73% | $-747.64 | $-33.98 | 0.54 | throttle |
| DELL | 21 | 7 | 33.33% | $-761.59 | $-36.27 | 0.35 | throttle |
| ELF | 18 | 5 | 27.78% | $-970.88 | $-53.94 | 0.27 | throttle |
| SMCI | 18 | 3 | 16.67% | $-1061.65 | $-58.98 | 0.12 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 680 | 258 | 37.94% | $-3516.57 | $-5.17 |
| breakout | 320 | 101 | 31.56% | $-4015.54 | $-12.55 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 49 | 26 | 53.06% | $+448.44 | $+9.15 |
| cleanTrend | 6 | 3 | 50% | $+19.73 | $+3.29 |
| neutral | 945 | 330 | 34.92% | $-8000.28 | $-8.47 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SBUX | 9 | 2.26 | $+29.21 | 12 | 2.73 | $+47.95 | 0.14% | 2.05 | promote |
| Symbol | INTU | 5 | 2.05 | $+11.46 | 3 | 1.45 | $+21.71 | 0.14% | 1.14 | promote |
| Symbol | NET | 13 | 2.33 | $+50.72 | 9 | 1.61 | $+20.13 | 0.23% | 1.21 | promote |
| Symbol | INTC | 17 | 1.69 | $+33.47 | 10 | 1.28 | $+12.42 | 0.24% | 1.04 | watch |
| Symbol | ABNB | 8 | 5.47 | $+61.18 | 7 | 1.11 | $+4.29 | 0.11% | 0.8 | watch |
| Symbol | GOOGL | 8 | 3.21 | $+36.1 | 11 | 1.07 | $+2.77 | 0.32% | 0.81 | watch |
| Symbol | RIVN | 16 | 1.48 | $+20.07 | 7 | 0.87 | $-6.94 | 0.35% | 0.72 | watch |
| Symbol | GS | 6 | 1.81 | $+23.85 | 9 | 0.78 | $-8.17 | 0.19% | 0.54 | watch |
| Symbol | ORCL | 7 | 2.05 | $+44.74 | 8 | 0.84 | $-15.29 | 0.47% | 0.72 | watch |
| Symbol | NVDA | 13 | 1.34 | $+14.91 | 9 | 0.73 | $-16.77 | 0.26% | 0.57 | watch |
| Symbol | BA | 12 | 2.7 | $+40.83 | 9 | 0.6 | $-17.38 | 0.38% | 0.42 | watch |
| Symbol | BAC | 7 | 1.71 | $+15.15 | 6 | 0.13 | $-31.91 | 0.19% | 0.04 | watch |
| Symbol | LLY | 9 | 2.7 | $+49.36 | 8 | 0.44 | $-38.24 | 0.31% | 0.36 | watch |
| Symbol | MRVL | 18 | 1.75 | $+31.67 | 13 | 0.42 | $-41.89 | 0.58% | 0.33 | watch |
| Symbol | TGT | 9 | 4.83 | $+54.4 | 5 | 0 | $-45.18 | 0.23% | 0 | watch |
| Symbol | GE | 9 | 1.74 | $+20.94 | 5 | 0.26 | $-45.97 | 0.25% | 0.18 | watch |
| Symbol | SNOW | 11 | 1.76 | $+16.98 | 6 | 0.46 | $-64.09 | 0.64% | 0.4 | watch |
| Symbol | LRCX | 9 | 1.33 | $+12.33 | 6 | 0.28 | $-69.68 | 0.58% | 0.23 | watch |
| Symbol | DDOG | 15 | 1.96 | $+24.53 | 2 | 0 | $-76.95 | 0.15% | 0 | watch |
| Symbol | IBM | 8 | 1.97 | $+22.5 | 4 | 0 | $-80.95 | 0.32% | 0 | watch |
| Symbol | MU | 14 | 1.64 | $+26.3 | 4 | 0.08 | $-133.04 | 0.58% | 0.06 | watch |
| Symbol | PLTR | 16 | 1.4 | $+18.5 | 7 | 0 | $-142.68 | 1% | 0 | watch |
| Symbol | TSLA | 17 | 0.99 | $-0.62 | 15 | 4.65 | $+74.79 | 0.14% | 3.61 | reject |
| Symbol | COIN | 12 | 0.63 | $-29.96 | 5 | 1.76 | $+33.42 | 0.22% | 1.48 | reject |
| Symbol | KLAC | 7 | 0.36 | $-41.67 | 7 | 1.59 | $+29.89 | 0.19% | 1.29 | reject |
| Symbol | CELH | 14 | 0.1 | $-63.49 | 8 | 1.22 | $+17.66 | 0.6% | 1.04 | reject |
| Symbol | CRWD | 11 | 0.07 | $-48.08 | 5 | 1.65 | $+13.98 | 0.07% | 1.01 | reject |
| Behavior | noisyHighBeta | 22 | 1.22 | $+6.72 | 27 | 1.35 | $+11.13 | 0.39% | 1.14 | reject |
| Symbol | UBER | 8 | 0.78 | $-9.91 | 4 | 1.16 | $+5.02 | 0.07% | 0.78 | reject |
| Symbol | COST | 7 | 0.28 | $-19.81 | 2 | 1.07 | $+3.78 | 0.11% | 0.84 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-10122.67 | 0.79 |
| +3 bps/side | $-15303.85 | 0.71 |
| +5 bps/side | $-20484.98 | 0.63 |
| +10 bps/side | $-33437.86 | 0.49 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 430 |
| timeout | 250 |
| stagnation | 133 |
| breakeven-stop | 54 |
| stop-loss | 47 |
| trim-profit-target | 44 |
| profit-target | 26 |
| trailing-stop | 16 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 14:50 | 04-29 15:35 | 185.7 | 185.07 | 75 | 13927.5 | -47.25 | -0.34% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 2 | COST | 04-29 14:50 | 04-29 16:30 | 987.94 | 986.89 | 14 | 13831.16 | -14.7 | -0.11% | 0.16R | 100m | market | stagnation | trend | trend | neutral | 70.56 | ↑982.51 | 3.3386 | 1.01 | **LOSS** |
| 3 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 4 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 5 | UBER | 05-01 14:05 | 05-01 15:20 | 81.59 | 81.5 | 171 | 13951.89 | -15.39 | -0.11% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 6 | GE | 05-01 14:15 | 05-01 16:00 | 203.55 | 204 | 68 | 13841.4 | +30.6 | +0.22% | 0.24R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 7 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 8 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 9 | RIVN | 05-01 14:25 | 05-01 15:30 | 14.06 | 14.03 | 547 | 7690.82 | -16.41 | -0.21% | 0.11R | 65m | market | stagnation | breakout | trend | noisyHighBeta | 69.94 | ↑13.86 | 0.1354 | 1.07 | **LOSS** |
| 10 | INTU | 05-01 14:30 | 05-01 15:55 | 631.54 | 630.89 | 22 | 13893.88 | -14.3 | -0.1% | 0.13R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 11 | ARM | 05-01 14:35 | 05-01 15:30 | 118.54 | 118.43 | 118 | 13987.72 | -12.98 | -0.09% | 0.05R | 55m | market | stagnation | trend | trend | neutral | 75.1 | ↑117.29 | 1.6688 | 1.2 | **LOSS** |
| 12 | CELH | 05-01 15:00 | 05-01 15:30 | 35.4 | 35.22 | 395 | 13983 | -71.1 | -0.51% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 13 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 14 | TXN | 05-01 15:10 | 05-01 15:55 | 161.4 | 160.32 | 86 | 13880.4 | -92.88 | -0.67% | 0.96R | 45m | market | early-reversal | trend | trend | neutral | 67.92 | ↓160.37 | 0.479 | 1.95 | **LOSS** |
| 15 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 16 | AMD | 05-01 15:15 | 05-01 15:35 | 100.12 | 99.46 | 139 | 13916.68 | -91.74 | -0.66% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 17 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.11 | 151.52 | 92 | 13994.12 | -54.28 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 18 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.4 | 73.05 | 190 | 13946 | -66.5 | -0.48% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 19 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 20 | SMCI | 05-01 15:25 | 05-01 15:45 | 33.3 | 32.93 | 231 | 7692.3 | -85.47 | -1.11% | 0.6R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 74.49 | ↑32.34 | 0.4172 | 1.01 | **LOSS** |
| 21 | JPM | 05-01 15:25 | 05-01 16:15 | 247.1 | 246.78 | 56 | 13837.6 | -17.92 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 22 | CAT | 05-02 13:35 | 05-02 13:55 | 321.91 | 319.92 | 43 | 13842.13 | -85.57 | -0.62% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 23 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.25 | 1152.26 | 12 | 13755 | +72.12 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 24 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.21 | 439.7 | 31 | 13708.51 | -77.81 | -0.57% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 25 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 26 | PLTR | 05-02 14:10 | 05-02 15:00 | 122.12 | 121.94 | 114 | 13921.68 | -20.52 | -0.15% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 76.95 | ↑120.96 | 1.1433 | 1.19 | **LOSS** |
| 27 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 28 | HPE | 05-02 14:10 | 05-02 14:40 | 16.96 | 16.88 | 825 | 13992 | -66 | -0.47% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 72.33 | ↓16.84 | 0.0808 | 1.74 | **LOSS** |
| 29 | COST | 05-02 14:25 | 05-02 14:45 | 1015.81 | 1010.68 | 13 | 13205.53 | -66.69 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 70.66 | ↓1013.12 | 3.2197 | 1.26 | **LOSS** |
| 30 | SBUX | 05-02 14:25 | 05-02 14:55 | 83.89 | 83.52 | 166 | 13925.74 | -61.42 | -0.44% | 0.39R | 30m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 31 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.73 | 140.91 | 50 | 13973 | +59 | +0.84% | 1.15R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 32 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.73 | 141.17 | 50 | 13973 | +72 | +1.03% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 33 | COIN | 05-02 15:00 | 05-02 15:10 | 208.43 | 205.65 | 67 | 13964.81 | -186.26 | -1.33% | 1.25R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 34 | UNH | 05-05 14:00 | 05-05 15:45 | 403.9 | 406.51 | 34 | 13732.6 | +88.74 | +0.65% | 0.86R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 35 | ABNB | 05-05 14:25 | 05-05 14:50 | 126.81 | 126.33 | 110 | 13949.1 | -52.8 | -0.38% | 0.25R | 25m | market | early-reversal | trend | trend | neutral | 69.42 | ↑125.58 | 0.5843 | 1.11 | **LOSS** |
| 36 | PANW | 05-05 15:00 | 05-05 15:50 | 190.31 | 190.22 | 73 | 13892.63 | -6.57 | -0.05% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 37 | XOM | 05-06 14:10 | 05-06 15:55 | 104.94 | 105.38 | 133 | 13957.02 | +58.52 | +0.42% | 0.49R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 38 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.3 | 106.77 | 131 | 13925.3 | +61.57 | +0.44% | 0.23R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 39 | AMZN | 05-07 14:10 | 05-07 14:55 | 189.67 | 188.91 | 73 | 13845.91 | -55.48 | -0.4% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 79.85 | ↑187.68 | 0.7723 | 2.79 | **LOSS** |
| 40 | NFLX | 05-07 14:15 | 05-07 15:00 | 1152.23 | 1152.71 | 12 | 13826.76 | +5.76 | +0.04% | 0.06R | 45m | market | breakeven-stop | trend | trend | neutral | 71.5 | ↑1144.48 | 1.5134 | 1.89 | **WIN** |
| 41 | ELF | 05-08 14:25 | 05-08 14:55 | 68.07 | 67.55 | 205 | 13954.35 | -106.6 | -0.76% | 0.72R | 30m | market | early-reversal | breakout | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 42 | BAC | 05-08 15:15 | 05-08 17:00 | 41.74 | 42.05 | 335 | 13982.9 | +103.85 | +0.74% | 1.06R | 105m | market | timeout | trend | trend | neutral | 65.76 | ↑41.48 | 0.1338 | 1.15 | **WIN** |
| 43 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 44 | GE | 05-08 15:25 | 05-08 17:10 | 215.07 | 215.89 | 65 | 13979.55 | +53.3 | +0.38% | 0.54R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 45 | HD | 05-08 15:25 | 05-08 17:10 | 366.72 | 367.52 | 38 | 13935.36 | +30.4 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 60.48 | ↑363.87 | 0.5541 | 2.42 | **WIN** |
| 46 | RIVN | 05-09 14:50 | 05-09 15:10 | 14.26 | 14.39 | 497 | 7087.22 | +64.61 | +0.91% | 0.5R | 20m | market | trailing-stop | breakout | trend | noisyHighBeta | 76.29 | ↑14.01 | 0.0875 | 1.36 | **WIN** |
| 47 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.64 | 374 | 13968.9 | -265.54 | -1.9% | 1.38R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 48 | COIN | 05-12 14:40 | 05-12 15:00 | 213.01 | 209.55 | 60 | 12780.6 | -207.6 | -1.62% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 49 | UBER | 05-12 14:55 | 05-12 16:25 | 85.19 | 86.3 | 82 | 13971.16 | +91.02 | +1.3% | 0.91R | 90m | market | trim-profit-target | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 50 | UBER | 05-12 14:55 | 05-12 16:40 | 85.19 | 86.19 | 82 | 13971.16 | +82 | +1.17% | 0.82R | 105m | market | timeout | trend | trend | neutral | 63.29 | ↑83.75 | 0.4449 | 2.33 | **WIN** |
| 51 | MU | 05-13 13:30 | 05-13 15:15 | 93.88 | 95.74 | 138 | 12955.44 | +256.68 | +1.98% | 2.57R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 52 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 53 | SNOW | 05-13 14:00 | 05-13 15:10 | 182.84 | 182.71 | 76 | 13895.84 | -9.88 | -0.07% | 0.1R | 70m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 54 | SHOP | 05-13 14:15 | 05-13 15:05 | 108.29 | 107.85 | 71 | 7688.59 | -31.24 | -0.41% | 0.21R | 50m | market | stagnation | trend | trend | noisyHighBeta | 71.98 | ↑107.45 | 0.7682 | 1.11 | **LOSS** |
| 55 | UBER | 05-13 14:20 | 05-13 14:40 | 90.93 | 90.18 | 154 | 14003.22 | -115.5 | -0.82% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 76.51 | ↑89.22 | 0.9267 | 1.1 | **LOSS** |
| 56 | PLTR | 05-13 14:50 | 05-13 15:45 | 125.01 | 128.46 | 61 | 7625.61 | +210.45 | +2.76% | 2R | 55m | market | profit-target | breakout | trend | noisyHighBeta | 67.25 | ↑123.12 | 1.6261 | 1.26 | **WIN** |
| 57 | AMD | 05-13 14:55 | 05-13 16:40 | 111.5 | 112.51 | 125 | 13937.5 | +126.25 | +0.91% | 0.84R | 105m | market | timeout | trend | trend | neutral | 75.8 | ↑110.2 | 0.7051 | 1.44 | **WIN** |
| 58 | ARM | 05-13 15:00 | 05-13 16:45 | 127.61 | 128.71 | 109 | 13909.49 | +119.9 | +0.86% | 1.08R | 105m | market | timeout | trend | trend | neutral | 70.44 | ↑126.26 | 0.7319 | 1.4 | **WIN** |
| 59 | DELL | 05-13 15:00 | 05-13 16:45 | 107.09 | 107.59 | 130 | 13921.7 | +65 | +0.47% | 0.61R | 105m | market | timeout | trend | trend | neutral | 66.45 | ↑106.33 | 0.9329 | 1.38 | **WIN** |
| 60 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.24 | 795.9 | 17 | 13366.08 | +164.22 | +1.23% | 1.73R | 105m | market | timeout | breakout | trend | neutral | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 61 | AMAT | 05-13 15:10 | 05-13 16:55 | 172.54 | 173.69 | 81 | 13975.74 | +93.15 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 73.42 | ↑170.64 | 1.0363 | 1.7 | **WIN** |
| 62 | META | 05-13 15:15 | 05-13 16:05 | 659.5 | 657.41 | 21 | 13849.5 | -43.89 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 79.04 | ↑651.78 | 4.8557 | 2.3 | **LOSS** |
| 63 | MU | 05-13 15:25 | 05-13 17:10 | 96.03 | 96.39 | 146 | 14020.38 | +52.56 | +0.37% | 0.47R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 64 | ELF | 05-14 14:00 | 05-14 14:20 | 79.79 | 78.98 | 175 | 13963.25 | -141.75 | -1.02% | 0.96R | 20m | market | early-reversal | trend | trend | neutral | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 65 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 66 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 67 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 68 | WMT | 05-14 14:20 | 05-14 15:10 | 96.95 | 96.87 | 144 | 13960.8 | -11.52 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 69 | TGT | 05-15 14:10 | 05-15 15:45 | 95.87 | 96.67 | 73 | 13997.02 | +58.4 | +0.83% | 0.69R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 70 | TGT | 05-15 14:10 | 05-15 15:55 | 95.87 | 96.7 | 73 | 13997.02 | +60.59 | +0.87% | 0.72R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 71 | COST | 05-15 14:50 | 05-15 16:40 | 1004.1 | 1008.18 | 13 | 13053.3 | +53.04 | +0.41% | 0.59R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 72 | NFLX | 05-15 14:55 | 05-15 15:30 | 1169.64 | 1165.81 | 11 | 12866.04 | -42.13 | -0.33% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 66.91 | ↑1158.19 | 5.2118 | 1.19 | **LOSS** |
| 73 | NVO | 05-15 15:15 | 05-15 17:00 | 65.59 | 66.1 | 213 | 13970.67 | +108.63 | +0.78% | 1.11R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 74 | INTU | 05-15 15:20 | 05-15 16:15 | 663.15 | 662.43 | 21 | 13926.15 | -15.12 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 75 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 650 | 13975 | +39 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 76 | WMT | 05-16 14:05 | 05-16 15:20 | 98.38 | 98.43 | 142 | 13969.96 | +7.1 | +0.05% | 0.05R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 77 | NKE | 05-16 14:10 | 05-16 15:00 | 63.36 | 63.31 | 220 | 13939.2 | -11 | -0.08% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 78 | ARM | 05-16 14:15 | 05-16 14:35 | 135.16 | 134.19 | 103 | 13921.48 | -99.91 | -0.72% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 73.79 | ↓134.56 | 0.5053 | 1.34 | **LOSS** |
| 79 | UBER | 05-16 15:05 | 05-16 16:50 | 91.84 | 92.56 | 152 | 13959.68 | +109.44 | +0.78% | 1.01R | 105m | market | timeout | trend | trend | neutral | 74.83 | ↑90.93 | 0.3759 | 1.39 | **WIN** |
| 80 | BAC | 05-19 14:05 | 05-19 14:25 | 45.04 | 44.88 | 311 | 14007.44 | -49.76 | -0.36% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 81 | TGT | 05-20 14:45 | 05-20 15:35 | 99.08 | 98.92 | 141 | 13970.28 | -22.56 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 82 | DELL | 05-21 13:40 | 05-21 14:00 | 115.7 | 114.94 | 111 | 12842.7 | -84.36 | -0.66% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 83.42 | ↓114.5 | 0.108 | 1.17 | **LOSS** |
| 83 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.79 | 171.64 | 82 | 13922.78 | +151.7 | +1.09% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 84 | ASML | 05-21 14:00 | 05-21 14:45 | 751.93 | 749.81 | 18 | 13534.74 | -38.16 | -0.28% | 0.4R | 45m | market | early-reversal | trend | trend | neutral | 73.36 | ↓750.62 | 1.4433 | 2.48 | **LOSS** |
| 85 | HPE | 05-21 14:00 | 05-21 14:35 | 17.97 | 17.9 | 778 | 13980.66 | -54.46 | -0.39% | 0.48R | 35m | market | early-reversal | trend | trend | neutral | 74.38 | ↓17.88 | 0.0552 | 2.42 | **LOSS** |
| 86 | NVO | 05-21 14:05 | 05-21 15:50 | 69.13 | 69.49 | 202 | 13964.26 | +72.72 | +0.52% | 0.57R | 105m | market | timeout | trend | trend | neutral | 71.49 | ↑68.69 | 0.1802 | 1.49 | **WIN** |
| 87 | META | 05-21 14:55 | 05-21 15:45 | 644.78 | 642.74 | 21 | 13540.38 | -42.84 | -0.32% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 88 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 89 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 90 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 91 | AVGO | 05-21 15:05 | 05-21 16:50 | 234.64 | 236.19 | 59 | 13843.76 | +91.45 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 78 | ↑231.9 | 0.9065 | 1.44 | **WIN** |
| 92 | NFLX | 05-21 15:05 | 05-21 15:45 | 1210.01 | 1206.17 | 11 | 13310.11 | -42.24 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 78.26 | ↑1201.77 | 5.443 | 1.67 | **LOSS** |
| 93 | COIN | 05-21 15:05 | 05-21 15:35 | 266.41 | 265.01 | 52 | 13853.32 | -72.8 | -0.53% | 0.44R | 30m | market | early-reversal | breakout | breakout | neutral | 61.31 | ↑262.51 | 0.9156 | 2.2 | **LOSS** |
| 94 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 225 | 13947.75 | +69.75 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 95 | NET | 05-21 15:10 | 05-21 16:55 | 158.29 | 159.44 | 88 | 13929.52 | +101.2 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 96 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.08 | 154.93 | 90 | 13957.2 | -13.5 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 97 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 104 | 13912.08 | -104 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 98 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.36 | 202.36 | 68 | 13828.48 | -68 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 99 | TGT | 05-22 14:00 | 05-22 15:10 | 94.95 | 94.85 | 147 | 13957.65 | -14.7 | -0.11% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 100 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.83 | 83.19 | 166 | 13915.78 | -106.24 | -0.76% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 101 | AVGO | 05-22 15:05 | 05-22 15:35 | 232.88 | 232.08 | 60 | 13972.8 | -48 | -0.34% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 65.02 | ↑229.61 | 0.7526 | 1.13 | **LOSS** |
| 102 | MU | 05-22 15:05 | 05-22 15:25 | 97.04 | 96.49 | 144 | 13973.76 | -79.2 | -0.57% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 72.95 | ↑95.9 | 0.2002 | 2.42 | **LOSS** |
| 103 | PLTR | 05-22 15:15 | 05-22 16:15 | 125.54 | 125.43 | 111 | 13934.94 | -12.21 | -0.09% | 0.07R | 60m | market | stagnation | trend | trend | neutral | 63.87 | ↑123.71 | 1.0303 | 1.17 | **LOSS** |
| 104 | TSLA | 05-22 15:20 | 05-22 15:40 | 343.98 | 342.31 | 40 | 13759.2 | -66.8 | -0.49% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 105 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.05 | 122.46 | 112 | 13781.6 | -66.08 | -0.48% | 0.38R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 106 | CRWD | 05-23 14:35 | 05-23 15:05 | 452.87 | 450.14 | 30 | 13586.1 | -81.9 | -0.6% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 74.01 | ↑446.5 | 0.9714 | 1.22 | **LOSS** |
| 107 | CELH | 05-23 14:45 | 05-23 15:05 | 35.9 | 35.73 | 388 | 13929.2 | -65.96 | -0.47% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 69.81 | ↑35.52 | 0.0118 | 1.57 | **LOSS** |
| 108 | GE | 05-27 13:35 | 05-27 15:20 | 236.41 | 240.04 | 59 | 13948.19 | +214.17 | +1.54% | 2.2R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 109 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.12 | 171.8 | 81 | 13941.72 | -25.92 | -0.19% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 110 | META | 05-27 14:00 | 05-27 14:45 | 638.74 | 636.98 | 21 | 13413.54 | -36.96 | -0.28% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 76.52 | ↑635.4 | 1.3684 | 1.48 | **LOSS** |
| 111 | AMD | 05-27 14:00 | 05-27 15:45 | 114.68 | 114.97 | 122 | 13990.96 | +35.38 | +0.25% | 0.16R | 105m | market | timeout | trend | trend | neutral | 73.39 | ↑113.53 | 0.8872 | 1.35 | **WIN** |
| 112 | LLY | 05-27 14:00 | 05-27 14:20 | 723.09 | 718.62 | 19 | 13738.71 | -84.93 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 113 | DELL | 05-27 14:00 | 05-27 14:35 | 114.72 | 114.28 | 122 | 13995.84 | -53.68 | -0.38% | 0.39R | 35m | market | early-reversal | trend | trend | neutral | 74.08 | ↓114.02 | 0.4954 | 1.46 | **LOSS** |
| 114 | AMZN | 05-27 14:10 | 05-27 15:00 | 204.86 | 204.64 | 68 | 13930.48 | -14.96 | -0.11% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 77.42 | ↑203.46 | 0.5602 | 1.11 | **LOSS** |
| 115 | AVGO | 05-27 14:10 | 05-27 14:35 | 234.43 | 232.94 | 59 | 13831.37 | -87.91 | -0.64% | 0.62R | 25m | market | early-reversal | trend | trend | neutral | 74.45 | ↓233.68 | 1.1642 | 1.1 | **LOSS** |
| 116 | UBER | 05-27 14:25 | 05-27 15:10 | 89.25 | 88.95 | 157 | 14012.25 | -47.1 | -0.34% | 0.28R | 45m | market | early-reversal | trend | trend | neutral | 71.73 | ↑88.52 | 0.2599 | 1.56 | **LOSS** |
| 117 | CRWD | 05-27 14:25 | 05-27 15:15 | 473 | 472.15 | 29 | 13717 | -24.65 | -0.18% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 77.19 | ↑469.22 | 3.9153 | 2.03 | **LOSS** |
| 118 | CELH | 05-27 15:00 | 05-27 15:20 | 37.42 | 37.1 | 372 | 13920.24 | -119.04 | -0.86% | 0.72R | 20m | market | early-reversal | trend | trend | neutral | 63.18 | ↑36.88 | 0.3071 | 1.08 | **LOSS** |
| 119 | ARM | 05-27 15:05 | 05-27 16:50 | 134.86 | 135.49 | 103 | 13890.58 | +64.89 | +0.47% | 0.54R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 120 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 779 | 13975.26 | -46.74 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 121 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 122 | LLY | 05-30 14:00 | 05-30 15:45 | 731.55 | 735.71 | 19 | 13899.45 | +79.04 | +0.57% | 0.79R | 105m | market | timeout | breakout | breakout | neutral | 73.04 | ↑723.06 | 1.4555 | 1.83 | **WIN** |
| 123 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.37 | 131.25 | 110 | 13900.7 | +536.8 | +3.86% | 2.27R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 124 | CELH | 05-30 14:35 | 05-30 15:10 | 37.22 | 37.02 | 374 | 13920.28 | -74.8 | -0.54% | 0.34R | 35m | market | early-reversal | breakout | breakout | neutral | 68.09 | ↑36.64 | 0.2419 | 2.27 | **LOSS** |
| 125 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 126 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.12 | 203.97 | 68 | 13880.16 | -10.2 | -0.07% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 127 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.7 | 136.34 | 101 | 13907.7 | -137.36 | -0.99% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 128 | NVO | 06-02 14:55 | 06-02 15:25 | 72.72 | 72.41 | 192 | 13962.24 | -59.52 | -0.43% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 71.35 | ↑71.96 | 0.2501 | 1.49 | **LOSS** |
| 129 | ARM | 06-03 13:40 | 06-03 15:25 | 128.38 | 129.7 | 109 | 13993.42 | +143.88 | +1.03% | 1.24R | 105m | market | timeout | trend | breakout | neutral | 61.42 | ↑127.89 | 0.1096 | 1.79 | **WIN** |
| 130 | CVX | 06-03 14:05 | 06-03 15:50 | 138.94 | 140.36 | 100 | 13894 | +142 | +1.02% | 1.46R | 105m | market | timeout | trend | trend | neutral | 64.13 | ↑138.16 | 0.3444 | 1.99 | **WIN** |
| 131 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 132 | CAT | 06-03 14:20 | 06-03 16:05 | 348.62 | 349.92 | 40 | 13944.8 | +52 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 133 | DIS | 06-03 14:20 | 06-03 16:05 | 114.12 | 114.51 | 122 | 13922.64 | +47.58 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑113.51 | 0.3433 | 1.91 | **WIN** |
| 134 | TGT | 06-03 14:20 | 06-03 16:05 | 94.73 | 96.04 | 147 | 13925.31 | +192.57 | +1.38% | 1.7R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 135 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.23 | 353.59 | 40 | 13969.2 | +174.4 | +1.25% | 0.95R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 136 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 221 | 13947.31 | -55.25 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 137 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.12 | 133.33 | 105 | 13872.6 | +127.05 | +0.92% | 1.08R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 138 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.57 | 204.82 | 68 | 13978.76 | -51 | -0.36% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑204.52 | 0.5322 | 2.23 | **LOSS** |
| 139 | NKE | 06-04 14:00 | 06-04 14:45 | 62.9 | 62.72 | 222 | 13963.8 | -39.96 | -0.29% | 0.41R | 45m | market | early-reversal | trend | trend | neutral | 77.24 | ↓62.69 | 0.2102 | 1.41 | **LOSS** |
| 140 | META | 06-04 14:15 | 06-04 14:40 | 686.08 | 683.09 | 23 | 15779.84 | -68.77 | -0.44% | 0.41R | 25m | market | early-reversal | trend | trend | cleanTrend | 76.97 | ↑679.39 | 3.9084 | 1.25 | **LOSS** |
| 141 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 13947.64 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 142 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 109 | 13947.64 | +163.5 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 143 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 144 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.63 | 123.26 | 114 | 13979.82 | +71.82 | +0.51% | 0.53R | 105m | market | timeout | breakout | trend | neutral | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 145 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 146 | NET | 06-05 15:10 | 06-05 15:35 | 180.5 | 179.34 | 77 | 13898.5 | -89.32 | -0.64% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 77.95 | ↑175.52 | 2.3598 | 1.02 | **LOSS** |
| 147 | NOW | 06-05 15:15 | 06-05 16:05 | 1030.8 | 1029.87 | 13 | 13400.4 | -12.09 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.07 | ↑1025.79 | 3.1614 | 3.46 | **LOSS** |
| 148 | TSM | 06-05 15:20 | 06-05 16:05 | 205.71 | 204.79 | 68 | 13988.28 | -62.56 | -0.45% | 0.64R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 149 | AVGO | 06-05 15:25 | 06-05 16:10 | 264.3 | 263.47 | 52 | 13743.6 | -43.16 | -0.31% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 71.88 | ↑261.54 | 0.7393 | 1.39 | **LOSS** |
| 150 | AMZN | 06-06 13:35 | 06-06 14:25 | 212.15 | 210.98 | 65 | 13789.75 | -76.05 | -0.55% | 0.47R | 50m | market | early-reversal | breakout | breakout | neutral | 63.62 | ↓211.45 | -0.0705 | 2.2 | **LOSS** |
| 151 | XOM | 06-06 13:35 | 06-06 15:20 | 103.75 | 104.13 | 135 | 14006.25 | +51.3 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 152 | DELL | 06-06 14:25 | 06-06 16:10 | 114.24 | 114.8 | 122 | 13937.28 | +68.32 | +0.49% | 0.53R | 105m | market | timeout | trend | trend | neutral | 72.16 | ↑113.92 | 0.3493 | 2.63 | **WIN** |
| 153 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.64 | 149.92 | 93 | 14009.52 | -66.96 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 154 | ARM | 06-06 15:05 | 06-06 15:25 | 134.97 | 134.28 | 103 | 13901.91 | -71.07 | -0.51% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 155 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 156 | SNOW | 06-06 15:05 | 06-06 15:25 | 212.82 | 212.03 | 65 | 13833.3 | -51.35 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 65.5 | ↑211.99 | 0.6038 | 1.39 | **LOSS** |
| 157 | MU | 06-09 13:55 | 06-09 15:40 | 110.27 | 110.52 | 127 | 14004.29 | +31.75 | +0.23% | 0.21R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 158 | INTC | 06-09 14:05 | 06-09 14:55 | 20.84 | 20.8 | 672 | 14004.48 | -26.88 | -0.19% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 72 | ↑20.61 | 0.1507 | 1.72 | **LOSS** |
| 159 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 109 | 7706.3 | -63.22 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 160 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 161 | DELL | 06-09 15:05 | 06-09 15:25 | 116.64 | 115.53 | 120 | 13996.8 | -133.2 | -0.95% | 1.36R | 20m | market | stop-loss | trend | trend | neutral | 76.86 | ↓115.88 | 0.6226 | 1.86 | **LOSS** |
| 162 | TXN | 06-09 15:10 | 06-09 16:05 | 198.48 | 198.24 | 70 | 13893.6 | -16.8 | -0.12% | 0.17R | 55m | market | stagnation | trend | trend | neutral | 68.13 | ↑197.13 | 1.3347 | 2.07 | **LOSS** |
| 163 | KLAC | 06-09 15:10 | 06-09 15:30 | 834.83 | 831.29 | 16 | 13357.28 | -56.64 | -0.42% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 68.82 | ↑826.47 | 6.4471 | 1.67 | **LOSS** |
| 164 | ELF | 06-10 13:45 | 06-10 14:45 | 119.1 | 119.75 | 117 | 13934.7 | +76.05 | +0.55% | 0.68R | 60m | market | trailing-stop | breakout | breakout | neutral | 64.5 | ↓117.77 | -0.04 | 1.19 | **WIN** |
| 165 | CVX | 06-10 14:10 | 06-10 15:45 | 143.43 | 144.53 | 48 | 13912.71 | +52.8 | +0.77% | 0.97R | 95m | market | trim-profit-target | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 166 | CVX | 06-10 14:10 | 06-10 15:55 | 143.43 | 144.4 | 49 | 13912.71 | +47.53 | +0.68% | 0.86R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 167 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 168 | NVO | 06-10 14:50 | 06-10 15:40 | 79.43 | 79.35 | 176 | 13979.68 | -14.08 | -0.1% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 76.71 | ↑78.54 | 1.0801 | 2.14 | **LOSS** |
| 169 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.3 | 203.48 | 68 | 13892.4 | -55.76 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 170 | RIVN | 06-11 13:30 | 06-11 13:55 | 14.65 | 14.53 | 887 | 12994.55 | -106.44 | -0.82% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 65.74 | ↓14.67 | 0.0171 | 1.11 | **LOSS** |
| 171 | QCOM | 06-11 14:00 | 06-11 14:20 | 161.36 | 160.84 | 86 | 13876.96 | -44.72 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 79.19 | ↑160.41 | 0.5678 | 1.63 | **LOSS** |
| 172 | GE | 06-11 14:05 | 06-11 15:50 | 245.07 | 246.25 | 57 | 13968.99 | +67.26 | +0.48% | 0.48R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 173 | UNH | 06-11 14:15 | 06-11 15:00 | 308.74 | 308.67 | 45 | 13893.3 | -3.15 | -0.02% | 0.02R | 45m | market | breakeven-stop | trend | trend | neutral | 72.91 | ↑306.28 | 1.403 | 1.5 | **LOSS** |
| 174 | CRWD | 06-11 14:20 | 06-11 16:05 | 474.65 | 475.92 | 29 | 13764.85 | +36.83 | +0.27% | 0.34R | 105m | market | timeout | trend | trend | neutral | 69.44 | ↑472.37 | 1.3192 | 3.22 | **WIN** |
| 175 | IBM | 06-11 14:30 | 06-11 16:15 | 278.03 | 279.58 | 50 | 13901.5 | +77.5 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 69.81 | ↑276.91 | 0.552 | 1.29 | **WIN** |
| 176 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 200 | 14018 | -72 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 177 | QCOM | 06-11 14:40 | 06-11 15:20 | 161.65 | 161.14 | 86 | 13901.9 | -43.86 | -0.32% | 0.46R | 40m | market | early-reversal | trend | trend | neutral | 70.77 | ↑160.86 | 0.7155 | 1.76 | **LOSS** |
| 178 | ELF | 06-11 14:45 | 06-11 16:30 | 122.63 | 123.85 | 113 | 13857.19 | +137.86 | +0.99% | 0.96R | 105m | market | timeout | breakout | breakout | neutral | 71.72 | ↑121.03 | 1.2031 | 1.35 | **WIN** |
| 179 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.08 | 256.27 | 54 | 13882.32 | -43.74 | -0.32% | 0.32R | 65m | market | early-reversal | breakout | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 180 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.86 | 174.35 | 80 | 13988.8 | -40.8 | -0.29% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 181 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 182 | SMCI | 06-12 15:00 | 06-12 15:50 | 43.73 | 43.68 | 319 | 13949.87 | -15.95 | -0.11% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 66.16 | ↑43.24 | 0.1179 | 1.27 | **LOSS** |
| 183 | ORCL | 06-13 14:05 | 06-13 15:50 | 207.02 | 212.76 | 67 | 13870.34 | +384.58 | +2.77% | 1.85R | 105m | market | timeout | breakout | breakout | neutral | 87.64 | ↑204.47 | 1.4876 | 1.16 | **WIN** |
| 184 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.49 | 1221.94 | 11 | 13480.39 | -39.05 | -0.29% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 185 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.59 | 142.35 | 98 | 14071.82 | -121.52 | -0.86% | 0.55R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 186 | RIVN | 06-16 13:45 | 06-16 14:50 | 13.75 | 14.08 | 1017 | 13983.75 | +335.61 | +2.4% | 2.26R | 65m | market | profit-target | breakout | breakout | neutral | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 187 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 188 | MU | 06-16 14:40 | 06-16 15:25 | 120.46 | 119.87 | 116 | 13973.36 | -68.44 | -0.49% | 0.49R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 189 | DDOG | 06-16 14:40 | 06-16 15:00 | 122.3 | 121.71 | 114 | 13942.2 | -67.26 | -0.48% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 58.58 | ↓121.71 | 0.393 | 1.13 | **LOSS** |
| 190 | CRWD | 06-17 14:10 | 06-17 15:45 | 484.77 | 484.84 | 28 | 13573.56 | +1.96 | +0.01% | 0.01R | 95m | market | breakeven-stop | trend | trend | neutral | 71.41 | ↑481.22 | 0.8725 | 1.47 | **WIN** |
| 191 | AMAT | 06-17 14:10 | 06-17 14:30 | 178.09 | 177.45 | 78 | 13891.02 | -49.92 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑176.88 | 0.4141 | 2.9 | **LOSS** |
| 192 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.59 | 70.6 | 195 | 13960.05 | -193.05 | -1.38% | 1.21R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 193 | AMD | 06-17 14:15 | 06-17 14:35 | 130.46 | 129.28 | 107 | 13959.22 | -126.26 | -0.9% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 54.5 | ↑128.73 | 0.7912 | 1.62 | **LOSS** |
| 194 | CRM | 06-17 14:15 | 06-17 14:40 | 268.58 | 266.99 | 52 | 13966.16 | -82.68 | -0.59% | 0.7R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 195 | CELH | 06-17 14:30 | 06-17 14:50 | 44.21 | 44 | 314 | 13881.94 | -65.94 | -0.48% | 0.28R | 20m | market | early-reversal | trend | trend | neutral | 62.04 | ↑43.37 | 0.092 | 1.12 | **LOSS** |
| 196 | PANW | 06-17 15:05 | 06-17 15:55 | 201.65 | 201.29 | 69 | 13913.85 | -24.84 | -0.18% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 79.8 | ↑199.85 | 0.9169 | 1.72 | **LOSS** |
| 197 | GE | 06-17 15:10 | 06-17 15:30 | 238.77 | 236.71 | 58 | 13848.66 | -119.48 | -0.86% | 1.23R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 198 | AMD | 06-18 14:00 | 06-18 14:50 | 128.82 | 127.76 | 108 | 13912.56 | -114.48 | -0.82% | 0.65R | 50m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 199 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.38 | 323.14 | 43 | 13948.34 | -53.32 | -0.38% | 0.29R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 200 | BAC | 06-18 14:00 | 06-18 14:50 | 44.88 | 44.86 | 312 | 14002.56 | -6.24 | -0.04% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 78.5 | ↑44.66 | 0.1465 | 1.35 | **LOSS** |
| 201 | MU | 06-18 14:30 | 06-18 14:50 | 122.5 | 121.6 | 114 | 13965 | -102.6 | -0.73% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 202 | SMCI | 06-18 14:30 | 06-18 14:50 | 44.08 | 43.88 | 317 | 13973.36 | -63.4 | -0.45% | 0.31R | 20m | market | early-reversal | trend | trend | neutral | 67.42 | ↑43.64 | 0.2247 | 1.18 | **LOSS** |
| 203 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.26 | 70.98 | 196 | 13966.96 | -54.88 | -0.39% | 0.56R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 204 | RIVN | 06-18 14:40 | 06-18 16:25 | 13.7 | 13.79 | 1024 | 14028.8 | +92.16 | +0.66% | 0.62R | 105m | market | timeout | trend | trend | neutral | 72.82 | ↑13.6 | 0.0773 | 1.09 | **WIN** |
| 205 | DDOG | 06-18 14:55 | 06-18 16:25 | 128.87 | 128.95 | 108 | 13917.96 | +8.64 | +0.06% | 0.08R | 90m | market | breakeven-stop | trend | trend | neutral | 73.75 | ↑127.41 | 1.0241 | 1.07 | **WIN** |
| 206 | COST | 06-23 13:35 | 06-23 14:00 | 992.3 | 988.88 | 14 | 13892.2 | -47.88 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 75.81 | ↓989.29 | 0.6317 | 3.16 | **LOSS** |
| 207 | IBM | 06-23 13:40 | 06-23 15:25 | 284.45 | 286.18 | 49 | 13938.05 | +84.77 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 208 | ARM | 06-23 14:00 | 06-23 15:05 | 147.14 | 147.09 | 95 | 13978.3 | -4.75 | -0.03% | 0.04R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 209 | SNOW | 06-23 14:00 | 06-23 14:50 | 213.51 | 213.36 | 65 | 13878.15 | -9.75 | -0.07% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 57.92 | ↑212.39 | 0.2054 | 4.27 | **LOSS** |
| 210 | TXN | 06-23 14:00 | 06-23 14:35 | 201.47 | 200.78 | 69 | 13901.43 | -47.61 | -0.34% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 76.34 | ↑199.76 | 0.6313 | 1.16 | **LOSS** |
| 211 | DDOG | 06-23 14:05 | 06-23 15:50 | 128.99 | 129.57 | 108 | 13930.92 | +62.64 | +0.45% | 0.5R | 105m | market | timeout | trend | trend | neutral | 67.14 | ↑127.72 | 0.218 | 1.29 | **WIN** |
| 212 | KLAC | 06-23 14:05 | 06-23 14:25 | 859.3 | 852.22 | 16 | 13748.8 | -113.28 | -0.82% | 1.17R | 20m | market | stop-loss | trend | trend | neutral | 78.91 | ↓855.15 | 2.4106 | 1.28 | **LOSS** |
| 213 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.45 | 378.03 | 36 | 13660.2 | -51.12 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 214 | PLTR | 06-23 14:15 | 06-23 15:15 | 140.33 | 140.29 | 100 | 14033 | -4 | -0.03% | 0.02R | 60m | market | breakeven-stop | trend | trend | neutral | 67.02 | ↑138.9 | 0.3683 | 1.29 | **LOSS** |
| 215 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 216 | NFLX | 06-23 14:20 | 06-23 15:25 | 1246.51 | 1245.57 | 11 | 13711.61 | -10.34 | -0.08% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 62.3 | ↑1234.5 | 2.6639 | 1.06 | **LOSS** |
| 217 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 218 | NET | 06-23 14:25 | 06-23 14:45 | 181.75 | 180.7 | 77 | 13994.75 | -80.85 | -0.58% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 219 | INTC | 06-24 14:00 | 06-24 15:10 | 21.88 | 22.48 | 640 | 14003.2 | +384 | +2.74% | 2.85R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 220 | ARM | 06-24 14:50 | 06-24 15:45 | 154.64 | 154.52 | 90 | 13917.6 | -10.8 | -0.08% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 63.25 | ↑153.56 | 1.6211 | 1.47 | **LOSS** |
| 221 | ORCL | 06-24 15:05 | 06-24 16:05 | 214.42 | 213.67 | 65 | 13937.3 | -48.75 | -0.35% | 0.44R | 60m | market | early-reversal | trend | trend | neutral | 71.45 | ↑212 | 1.9699 | 1.21 | **LOSS** |
| 222 | SHOP | 06-24 15:20 | 06-24 15:40 | 114.83 | 114.49 | 121 | 13894.43 | -41.14 | -0.3% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 72.99 | ↑113.56 | 1.1687 | 1.34 | **LOSS** |
| 223 | DELL | 06-24 15:20 | 06-24 15:40 | 121.61 | 121.02 | 114 | 13863.54 | -67.26 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 73.49 | ↑120.69 | 0.8721 | 1.35 | **LOSS** |
| 224 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 225 | NVDA | 06-25 14:15 | 06-25 15:05 | 151.98 | 151.76 | 92 | 13982.16 | -20.24 | -0.14% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 226 | RIVN | 06-26 13:45 | 06-26 15:30 | 13.93 | 13.96 | 1008 | 14041.44 | +30.24 | +0.22% | 0.18R | 105m | market | timeout | trend | breakout | neutral | 58.49 | ↓13.87 | 0.0226 | 2.31 | **WIN** |
| 227 | QCOM | 06-26 13:55 | 06-26 15:40 | 157.12 | 157.35 | 89 | 13983.68 | +20.47 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 70.88 | ↓156.53 | 0.2975 | 1.12 | **WIN** |
| 228 | META | 06-26 14:10 | 06-26 15:55 | 720.03 | 722.31 | 19 | 13680.57 | +43.32 | +0.32% | 0.41R | 105m | market | timeout | trend | trend | neutral | 73.45 | ↑714.81 | 2.6974 | 1.3 | **WIN** |
| 229 | PANW | 06-26 14:10 | 06-26 14:40 | 206.44 | 205.54 | 67 | 13831.48 | -60.3 | -0.44% | 0.59R | 30m | market | early-reversal | trend | trend | neutral | 69.17 | ↓205.5 | 0.5917 | 1.33 | **LOSS** |
| 230 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.79 | 132.19 | 107 | 13994.53 | +149.8 | +1.07% | 1.32R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 231 | SMCI | 06-26 14:30 | 06-26 15:15 | 48.72 | 48.17 | 157 | 7649.04 | -86.35 | -1.13% | 0.57R | 45m | market | early-reversal | breakout | trend | noisyHighBeta | 69.54 | ↑47.28 | 0.5854 | 1.04 | **LOSS** |
| 232 | CRM | 06-27 14:00 | 06-27 14:20 | 273.28 | 272.52 | 51 | 13937.28 | -38.76 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 233 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 234 | TSM | 06-27 14:05 | 06-27 15:50 | 226.74 | 228.22 | 61 | 13831.14 | +90.28 | +0.65% | 0.93R | 105m | market | timeout | trend | trend | neutral | 79.84 | ↑225.67 | 0.5609 | 1.03 | **WIN** |
| 235 | INTC | 06-27 14:10 | 06-27 14:30 | 23.35 | 23.06 | 602 | 14056.7 | -174.58 | -1.24% | 0.89R | 20m | market | early-reversal | breakout | trend | neutral | 77.39 | ↓23.07 | 0.1872 | 1.98 | **LOSS** |
| 236 | ADP | 06-27 14:15 | 06-27 14:55 | 305.99 | 304.91 | 45 | 13769.55 | -48.6 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 75.07 | ↑304.09 | 0.7715 | 1.37 | **LOSS** |
| 237 | ARM | 06-27 14:40 | 06-27 16:10 | 163.45 | 165.8 | 42 | 13893.25 | +98.7 | +1.44% | 1.23R | 90m | market | trim-profit-target | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 238 | ARM | 06-27 14:40 | 06-27 16:25 | 163.45 | 165.75 | 43 | 13893.25 | +98.9 | +1.41% | 1.21R | 105m | market | timeout | trend | trend | neutral | 53.25 | ↑161.92 | 1.49 | 1.49 | **WIN** |
| 239 | COST | 06-27 14:50 | 06-27 15:45 | 988.8 | 988.32 | 14 | 13843.2 | -6.72 | -0.05% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 240 | GE | 06-27 15:05 | 06-27 16:30 | 257.65 | 259.41 | 27 | 13913.1 | +47.52 | +0.68% | 0.97R | 85m | market | trim-profit-target | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 241 | GE | 06-27 15:05 | 06-27 16:50 | 257.65 | 258.83 | 27 | 13913.1 | +31.86 | +0.46% | 0.66R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑255.28 | 1.2796 | 1.89 | **WIN** |
| 242 | AMZN | 06-30 13:35 | 06-30 13:55 | 223.49 | 222.31 | 62 | 13856.38 | -73.16 | -0.53% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 81.68 | ↓222.76 | 1.0565 | 1.55 | **LOSS** |
| 243 | DDOG | 06-30 14:05 | 06-30 14:35 | 134.69 | 134.1 | 104 | 14007.76 | -61.36 | -0.44% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 78.15 | ↓133.9 | 0.5296 | 1.26 | **LOSS** |
| 244 | SMCI | 06-30 14:10 | 06-30 15:15 | 49.79 | 49.56 | 154 | 7667.66 | -35.42 | -0.46% | 0.23R | 65m | market | trailing-stop | trend | trend | noisyHighBeta | 74.94 | ↓49.18 | 0.5528 | 1.17 | **LOSS** |
| 245 | HPE | 06-30 14:40 | 06-30 15:00 | 20.98 | 20.85 | 666 | 13972.68 | -86.58 | -0.62% | 0.31R | 20m | market | early-reversal | breakout | trend | neutral | 57.89 | ↑20.69 | 0.7343 | 1.05 | **LOSS** |
| 246 | CELH | 06-30 15:00 | 06-30 15:20 | 47.23 | 47.04 | 294 | 13885.62 | -55.86 | -0.4% | 0.39R | 20m | market | early-reversal | breakout | breakout | neutral | 75.94 | ↑46.66 | 0.3782 | 1.33 | **LOSS** |
| 247 | TGT | 07-01 13:40 | 07-01 14:40 | 100.53 | 102.92 | 128 | 12867.84 | +305.92 | +2.38% | 3.09R | 60m | market | profit-target | breakout | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **WIN** |
| 248 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.21 | 95.18 | 150 | 13981.5 | +295.5 | +2.11% | 2.81R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 249 | HD | 07-01 14:20 | 07-01 16:05 | 370.12 | 378.88 | 37 | 13694.44 | +324.12 | +2.37% | 3.39R | 105m | market | timeout | trend | trend | neutral | 68.85 | ↑367.25 | 0.617 | 1.07 | **WIN** |
| 250 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 618 | 14016.24 | +278.1 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 251 | ELF | 07-01 14:55 | 07-01 16:20 | 128.31 | 128.29 | 109 | 13985.79 | -2.18 | -0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 71.03 | ↑127.52 | 0.7983 | 2.72 | **LOSS** |
| 252 | LMT | 07-01 15:10 | 07-01 16:20 | 467.63 | 467.27 | 29 | 13561.27 | -10.44 | -0.08% | 0.11R | 70m | market | stagnation | trend | trend | neutral | 73.98 | ↑463.76 | 0.9874 | 1.1 | **LOSS** |
| 253 | NKE | 07-02 14:00 | 07-02 14:40 | 74.54 | 73.65 | 187 | 13938.98 | -166.43 | -1.19% | 1.04R | 40m | market | trailing-stop | trend | trend | neutral | 70.02 | ↓74.16 | 0.3446 | 1.21 | **LOSS** |
| 254 | PYPL | 07-02 14:05 | 07-02 15:50 | 76.26 | 76.84 | 183 | 13955.58 | +106.14 | +0.76% | 1.09R | 105m | market | timeout | trend | trend | neutral | 70.33 | ↑75.68 | 0.1044 | 1.11 | **WIN** |
| 255 | TXN | 07-02 14:25 | 07-02 16:10 | 213.9 | 215.11 | 65 | 13903.5 | +78.65 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 73.05 | ↑212.03 | 0.5492 | 1.72 | **WIN** |
| 256 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 120 | 13910.4 | -37.2 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 257 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.5 | 78.95 | 178 | 13973 | +80.1 | +0.57% | 0.42R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 258 | MU | 07-02 14:45 | 07-02 15:45 | 122.14 | 122.08 | 114 | 13923.96 | -6.84 | -0.05% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 259 | COIN | 07-02 14:50 | 07-02 16:35 | 346.33 | 351.65 | 22 | 7619.26 | +117.04 | +1.54% | 1.02R | 105m | market | timeout | trend | trend | noisyHighBeta | 62.7 | ↑342.5 | 2.1416 | 1.1 | **WIN** |
| 260 | AMD | 07-02 14:55 | 07-02 16:40 | 138.42 | 139.03 | 100 | 13842 | +61 | +0.44% | 0.48R | 105m | market | timeout | trend | trend | neutral | 72.92 | ↑136.41 | 0.4506 | 1.18 | **WIN** |
| 261 | BA | 07-02 15:10 | 07-02 16:55 | 212.2 | 212.61 | 66 | 14005.2 | +27.06 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 262 | HPE | 07-02 15:15 | 07-02 16:40 | 20.83 | 21.07 | 335 | 13956.1 | +80.4 | +1.15% | 1.58R | 85m | market | trim-profit-target | trend | trend | neutral | 79 | ↑20.63 | 0.0888 | 1.13 | **WIN** |
| 263 | HPE | 07-02 15:15 | 07-02 17:00 | 20.83 | 21.07 | 335 | 13956.1 | +80.4 | +1.15% | 1.58R | 105m | market | timeout | trend | trend | neutral | 79 | ↑20.63 | 0.0888 | 1.13 | **WIN** |
| 264 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 265 | AAPL | 07-03 14:00 | 07-03 14:50 | 213.86 | 213.29 | 65 | 13900.9 | -37.05 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 68.43 | ↓212.88 | 0.4674 | 1.21 | **LOSS** |
| 266 | MDB | 07-03 14:10 | 07-03 14:35 | 212.49 | 211.34 | 65 | 13811.85 | -74.75 | -0.54% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 267 | NFLX | 07-03 14:15 | 07-03 14:35 | 1298.86 | 1293.98 | 10 | 12988.6 | -48.8 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↑1289.95 | 3.4993 | 1.68 | **LOSS** |
| 268 | DDOG | 07-03 14:40 | 07-03 15:55 | 151.99 | 153.92 | 46 | 13983.08 | +88.78 | +1.27% | 0.77R | 75m | market | trim-profit-target | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 269 | DDOG | 07-03 14:40 | 07-03 16:25 | 151.99 | 154.36 | 46 | 13983.08 | +109.02 | +1.56% | 0.95R | 105m | market | timeout | trend | trend | neutral | 74.85 | ↑149.79 | 5.0242 | 1.06 | **WIN** |
| 270 | DELL | 07-07 14:00 | 07-07 14:25 | 126.89 | 126.25 | 110 | 13957.9 | -70.4 | -0.5% | 0.71R | 25m | market | early-reversal | trend | trend | neutral | 71 | ↑125.88 | 0.2141 | 1.42 | **LOSS** |
| 271 | META | 07-07 14:20 | 07-07 14:50 | 726.87 | 724.48 | 19 | 13810.53 | -45.41 | -0.33% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 69.1 | ↑721.22 | 1.6015 | 1.52 | **LOSS** |
| 272 | UBER | 07-07 14:40 | 07-07 15:00 | 97.1 | 96.31 | 144 | 13982.4 | -113.76 | -0.81% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 78.9 | ↑95.89 | 0.918 | 2.36 | **LOSS** |
| 273 | CRM | 07-08 14:00 | 07-08 14:55 | 271.74 | 275.16 | 25 | 13858.74 | +85.5 | +1.26% | 1.8R | 55m | market | trim-profit-target | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 274 | CRM | 07-08 14:00 | 07-08 15:45 | 271.74 | 274.73 | 26 | 13858.74 | +77.74 | +1.1% | 1.57R | 105m | market | timeout | trend | trend | neutral | 79.06 | ↑270.78 | 0.5345 | 1.63 | **WIN** |
| 275 | NVO | 07-08 14:20 | 07-08 16:05 | 69.88 | 70.19 | 200 | 13976 | +62 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 78.57 | ↑69.52 | 0.1782 | 1.26 | **WIN** |
| 276 | AMD | 07-08 14:25 | 07-08 15:20 | 137.71 | 137.59 | 101 | 13908.71 | -12.12 | -0.09% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 68.41 | ↑136.77 | 0.6898 | 1.38 | **LOSS** |
| 277 | TXN | 07-08 14:30 | 07-08 16:15 | 217.07 | 218.51 | 64 | 13892.48 | +92.16 | +0.66% | 0.83R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑215.92 | 0.8367 | 1.64 | **WIN** |
| 278 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1076 | 14052.56 | +107.6 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 279 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 280 | INTC | 07-08 15:00 | 07-08 15:20 | 23.4 | 23.25 | 601 | 14063.4 | -90.15 | -0.64% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 281 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.01 | 95.11 | 147 | 13966.47 | +14.7 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 282 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.86 | 99.26 | 139 | 13880.54 | -83.4 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 283 | LOW | 07-08 15:05 | 07-08 15:25 | 226.65 | 225.1 | 61 | 13825.65 | -94.55 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 77.33 | ↓225.28 | 0.5327 | 2.06 | **LOSS** |
| 284 | HD | 07-08 15:10 | 07-08 16:00 | 369.73 | 369.32 | 37 | 13680.01 | -15.17 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 285 | COIN | 07-09 15:20 | 07-09 16:00 | 365.03 | 362.68 | 38 | 13871.14 | -89.3 | -0.64% | 0.57R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↑359.43 | 2.2588 | 1.34 | **LOSS** |
| 286 | AMAT | 07-10 14:15 | 07-10 16:00 | 198.23 | 198.88 | 70 | 13876.1 | +45.5 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 69.63 | ↑197.32 | 0.4532 | 1.33 | **WIN** |
| 287 | NKE | 07-10 14:15 | 07-10 16:00 | 74.85 | 75.2 | 186 | 13922.1 | +65.1 | +0.47% | 0.55R | 105m | market | timeout | trend | trend | neutral | 79.4 | ↑74 | 0.2429 | 1.34 | **WIN** |
| 288 | AAPL | 07-10 14:30 | 07-10 16:00 | 212.4 | 212.22 | 65 | 13806 | -11.7 | -0.08% | 0.11R | 90m | market | stagnation | trend | trend | neutral | 62.1 | ↑211.18 | 0.5531 | 1.16 | **LOSS** |
| 289 | RIVN | 07-10 14:50 | 07-10 15:15 | 13.42 | 13.36 | 1048 | 14064.16 | -62.88 | -0.45% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 58.72 | ↑13.31 | 0.0564 | 1.04 | **LOSS** |
| 290 | ARM | 07-11 14:00 | 07-11 15:20 | 149.18 | 149.18 | 94 | 14022.92 | +0 | +0% | 0R | 80m | market | breakeven-stop | breakout | trend | neutral | 64.05 | ↓147.38 | 0.2988 | 1.26 | **WIN** |
| 291 | GE | 07-11 14:05 | 07-11 15:00 | 255.53 | 255.22 | 54 | 13798.62 | -16.74 | -0.12% | 0.14R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 292 | CRM | 07-14 13:45 | 07-14 14:05 | 261.77 | 259.92 | 53 | 13873.81 | -98.05 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 80.11 | ↓260.45 | 0.2308 | 1.47 | **LOSS** |
| 293 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.04 | 138.8 | 101 | 13942.04 | +76.76 | +0.55% | 0.66R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 294 | LMT | 07-14 14:30 | 07-14 14:50 | 474.59 | 471.37 | 29 | 13763.11 | -93.38 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 79.84 | ↓471.63 | 1.7867 | 1.06 | **LOSS** |
| 295 | PLTR | 07-14 14:50 | 07-14 15:10 | 146.65 | 145.92 | 95 | 13931.75 | -69.35 | -0.5% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 70.5 | ↑145.37 | 1.0479 | 1.55 | **LOSS** |
| 296 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 297 | PLTR | 07-15 14:10 | 07-15 14:40 | 150.13 | 149.34 | 93 | 13962.09 | -73.47 | -0.53% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 56.84 | ↓148.88 | 0.379 | 1.06 | **LOSS** |
| 298 | KLAC | 07-15 14:10 | 07-15 15:00 | 937.86 | 936.55 | 14 | 13130.04 | -18.34 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 73.03 | ↓934.41 | 3.0322 | 2.16 | **LOSS** |
| 299 | ELF | 07-15 14:10 | 07-15 14:35 | 108.42 | 107.35 | 129 | 13986.18 | -138.03 | -0.99% | 0.91R | 25m | market | early-reversal | breakout | trend | neutral | 62.1 | ↓107.68 | 0.0045 | 1.05 | **LOSS** |
| 300 | AVGO | 07-15 14:15 | 07-15 14:50 | 281.95 | 280.67 | 49 | 13815.55 | -62.72 | -0.45% | 0.37R | 35m | market | early-reversal | trend | trend | neutral | 79.7 | ↓280.15 | 1.3428 | 1.71 | **LOSS** |
| 301 | DDOG | 07-15 15:25 | 07-15 15:50 | 141.61 | 141.08 | 99 | 14019.39 | -52.47 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 58.22 | ↑140.3 | 0.4975 | 3.66 | **LOSS** |
| 302 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 120 | 13906.8 | +46.8 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 303 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.69 | 318.1 | 43 | 13746.67 | -68.37 | -0.5% | 0.3R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 304 | PLTR | 07-17 14:05 | 07-17 15:50 | 152.53 | 153.6 | 92 | 14032.76 | +98.44 | +0.7% | 0.69R | 105m | market | timeout | trend | trend | neutral | 64.71 | ↑151.79 | 0.4528 | 1.53 | **WIN** |
| 305 | KLAC | 07-17 14:30 | 07-17 15:20 | 938.49 | 935.26 | 14 | 13138.86 | -45.22 | -0.34% | 0.28R | 50m | market | early-reversal | trend | trend | neutral | 53.12 | ↑927.38 | 4.2749 | 1.28 | **LOSS** |
| 306 | DDOG | 07-17 14:35 | 07-17 15:55 | 141.82 | 143.43 | 49 | 13898.36 | +78.89 | +1.14% | 1.52R | 80m | market | trim-profit-target | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 307 | DDOG | 07-17 14:35 | 07-17 16:20 | 141.82 | 143.91 | 49 | 13898.36 | +102.41 | +1.47% | 1.96R | 105m | market | timeout | trend | trend | neutral | 76.57 | ↑140.75 | 0.6149 | 1.3 | **WIN** |
| 308 | ELF | 07-17 14:35 | 07-17 15:05 | 110.23 | 109.48 | 126 | 13888.98 | -94.5 | -0.68% | 0.79R | 30m | market | early-reversal | trend | trend | neutral | 68.39 | ↓109.54 | 0.6311 | 1.28 | **LOSS** |
| 309 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 113 | 13905.78 | +219.22 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 310 | PANW | 07-17 15:10 | 07-17 16:30 | 196.62 | 196.48 | 71 | 13960.02 | -9.94 | -0.07% | 0.1R | 80m | market | stagnation | trend | trend | neutral | 79.2 | ↑194.61 | 0.8084 | 2.36 | **LOSS** |
| 311 | MDB | 07-17 15:15 | 07-17 17:00 | 216.85 | 218.84 | 64 | 13878.4 | +127.36 | +0.92% | 1.31R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑214.88 | 1.9932 | 1.24 | **WIN** |
| 312 | RIVN | 07-17 15:20 | 07-17 15:45 | 13.25 | 13.23 | 1061 | 14058.25 | -21.22 | -0.15% | 0.1R | 25m | market | trailing-stop | breakout | trend | neutral | 72.22 | ↑12.97 | 0.1663 | 1.23 | **LOSS** |
| 313 | CVX | 07-18 14:10 | 07-18 14:25 | 153.12 | 151.56 | 91 | 13933.92 | -141.96 | -1.02% | 1.46R | 15m | market | stop-loss | trend | trend | neutral | 75.08 | ↓152.03 | 0.4351 | 2.35 | **LOSS** |
| 314 | RIVN | 07-18 14:20 | 07-18 14:40 | 13.16 | 13.06 | 1068 | 14054.88 | -106.8 | -0.76% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 61.66 | ↑13.03 | 0.0348 | 2.41 | **LOSS** |
| 315 | CELH | 07-18 14:25 | 07-18 14:55 | 44.53 | 44.21 | 312 | 13893.36 | -99.84 | -0.72% | 0.69R | 30m | market | early-reversal | trend | breakout | neutral | 51.72 | ↓44.15 | -0.022 | 1.36 | **LOSS** |
| 316 | SNOW | 07-18 14:45 | 07-18 15:05 | 216.54 | 215.72 | 64 | 13858.56 | -52.48 | -0.38% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 70.52 | ↑214.63 | 1.092 | 1.82 | **LOSS** |
| 317 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 95 | 13956.37 | +100.7 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 318 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 13956.37 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 319 | QCOM | 07-18 15:05 | 07-18 15:35 | 155.23 | 154.68 | 90 | 13970.7 | -49.5 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 76.24 | ↑153.84 | 0.5348 | 1.02 | **LOSS** |
| 320 | RIVN | 07-18 15:05 | 07-18 16:25 | 13.34 | 13.35 | 1052 | 14033.68 | +10.52 | +0.07% | 0.04R | 80m | market | breakeven-stop | breakout | breakout | neutral | 73.05 | ↑13.08 | 0.084 | 1.59 | **WIN** |
| 321 | DELL | 07-18 15:15 | 07-18 16:30 | 129.72 | 130.64 | 53 | 13880.04 | +48.76 | +0.71% | 0.71R | 75m | market | trim-profit-target | trend | trend | neutral | 66.92 | ↑128.34 | 1.3348 | 1.05 | **WIN** |
| 322 | DELL | 07-18 15:15 | 07-18 17:00 | 129.72 | 131.26 | 54 | 13880.04 | +83.16 | +1.19% | 1.19R | 105m | market | timeout | trend | trend | neutral | 66.92 | ↑128.34 | 1.3348 | 1.05 | **WIN** |
| 323 | NET | 07-21 13:55 | 07-21 14:20 | 199.86 | 197.69 | 70 | 13990.2 | -151.9 | -1.09% | 0.97R | 25m | market | early-reversal | breakout | breakout | neutral | 77.08 | ↓198.13 | 0.8916 | 1.54 | **LOSS** |
| 324 | CRM | 07-21 14:00 | 07-21 14:20 | 264.24 | 262.6 | 52 | 13740.48 | -85.28 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 69.71 | ↓263.31 | 0.6632 | 1.32 | **LOSS** |
| 325 | SMCI | 07-21 14:00 | 07-21 15:35 | 53.27 | 53.24 | 262 | 13956.74 | -7.86 | -0.06% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 76.45 | ↓52.93 | 0.378 | 1.02 | **LOSS** |
| 326 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 327 | CRWD | 07-21 14:00 | 07-21 14:20 | 488.06 | 482.9 | 28 | 13665.68 | -144.48 | -1.06% | 1.04R | 20m | market | early-reversal | breakout | breakout | neutral | 77.39 | ↓482.72 | 2.7767 | 1.57 | **LOSS** |
| 328 | ARM | 07-21 14:10 | 07-21 15:15 | 161.55 | 163.14 | 43 | 13893.3 | +68.37 | +0.98% | 0.8R | 65m | market | trim-profit-target | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 329 | ARM | 07-21 14:10 | 07-21 15:55 | 161.55 | 162.84 | 43 | 13893.3 | +55.47 | +0.8% | 0.66R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑160.75 | 0.6626 | 1.76 | **WIN** |
| 330 | AMD | 07-21 14:30 | 07-21 15:05 | 159.73 | 159.04 | 87 | 13896.51 | -60.03 | -0.43% | 0.34R | 35m | market | early-reversal | trend | trend | neutral | 69.08 | ↑158.57 | 0.4791 | 2.52 | **LOSS** |
| 331 | MDB | 07-22 13:35 | 07-22 13:40 | 227.86 | 225.39 | 61 | 13899.46 | -150.67 | -1.08% | 1.32R | 5m | market | stop-loss | breakout | breakout | neutral | 87.17 | ↓226.5 | 0.7262 | 2.65 | **LOSS** |
| 332 | RIVN | 07-22 15:00 | 07-22 16:10 | 14.3 | 14.3 | 540 | 7722 | +0 | +0% | 0R | 70m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.92 | ↑14.03 | 0.1465 | 1.11 | **WIN** |
| 333 | CAT | 07-23 13:40 | 07-23 14:00 | 425.55 | 423.12 | 32 | 13617.6 | -77.76 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 334 | DIS | 07-23 14:00 | 07-23 14:20 | 122.44 | 122.1 | 114 | 13958.16 | -38.76 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 76.44 | ↑122.06 | 0.2652 | 1.15 | **LOSS** |
| 335 | XOM | 07-23 14:10 | 07-23 14:45 | 109.5 | 109.17 | 127 | 13906.5 | -41.91 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 336 | HPE | 07-23 14:15 | 07-23 15:30 | 20.99 | 20.99 | 666 | 13979.34 | +0 | +0% | 0R | 75m | market | breakeven-stop | trend | trend | neutral | 75.86 | ↑20.86 | 0.1216 | 1.28 | **WIN** |
| 337 | LLY | 07-23 14:25 | 07-23 16:10 | 786.32 | 795.24 | 17 | 13367.44 | +151.64 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 338 | BA | 07-23 15:05 | 07-23 16:30 | 231.57 | 233.9 | 30 | 13894.2 | +69.9 | +1.01% | 1.44R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 339 | BA | 07-23 15:05 | 07-23 16:50 | 231.57 | 233.91 | 30 | 13894.2 | +70.2 | +1.01% | 1.44R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 340 | ADBE | 07-24 14:00 | 07-24 14:15 | 375.99 | 372.62 | 37 | 13911.63 | -124.69 | -0.9% | 1.29R | 15m | market | stop-loss | trend | trend | neutral | 75.05 | ↓372.88 | 0.5707 | 1.17 | **LOSS** |
| 341 | CVX | 07-24 14:25 | 07-24 16:10 | 154.06 | 154.58 | 90 | 13865.4 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 70.82 | ↑153.15 | 0.2875 | 1.06 | **WIN** |
| 342 | MU | 07-24 15:00 | 07-24 15:30 | 112.58 | 111.86 | 124 | 13959.92 | -89.28 | -0.64% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 343 | ARM | 07-24 15:05 | 07-24 15:30 | 161.17 | 160.71 | 87 | 14021.79 | -40.02 | -0.29% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 73.63 | ↑159.51 | 0.3803 | 3.11 | **LOSS** |
| 344 | TSM | 07-25 14:00 | 07-25 14:50 | 244.35 | 244.19 | 57 | 13927.95 | -9.12 | -0.07% | 0.09R | 50m | market | breakeven-stop | trend | trend | neutral | 67.09 | ↑242.6 | 0.4724 | 1.57 | **LOSS** |
| 345 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 112 | 13950.72 | -14.56 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 346 | ARM | 07-25 14:35 | 07-25 16:20 | 162.93 | 163.89 | 86 | 14011.98 | +82.56 | +0.59% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 70.55 | ↑161.38 | 0.4531 | 1.82 | **WIN** |
| 347 | META | 07-28 13:45 | 07-28 14:10 | 723.2 | 720.27 | 19 | 13740.8 | -55.67 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | breakout | neutral | 74.41 | ↓720.83 | 0.5264 | 1.62 | **LOSS** |
| 348 | NOW | 07-28 14:00 | 07-28 14:20 | 995.08 | 985.42 | 14 | 13931.12 | -135.24 | -0.97% | 1.14R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 349 | ELF | 07-28 14:00 | 07-28 14:20 | 122 | 121.47 | 114 | 13908 | -60.42 | -0.43% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 350 | DELL | 07-28 14:40 | 07-28 15:00 | 132.95 | 131.65 | 105 | 13959.75 | -136.5 | -0.98% | 1.32R | 20m | market | stop-loss | trend | trend | neutral | 61.37 | ↓132.13 | 0.2872 | 1.42 | **LOSS** |
| 351 | CELH | 07-28 15:05 | 07-28 16:50 | 47.2 | 47.16 | 294 | 13876.8 | -11.76 | -0.08% | 0.09R | 105m | market | stagnation | breakout | breakout | neutral | 76.5 | ↑46.16 | 0.1319 | 1.32 | **LOSS** |
| 352 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.57 | 78.09 | 178 | 13985.46 | -85.44 | -0.61% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 353 | ADP | 07-30 13:35 | 07-30 15:20 | 311.51 | 315.13 | 44 | 13706.44 | +159.28 | +1.16% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 86.57 | ↑308.56 | 0.3705 | 1.4 | **WIN** |
| 354 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.42 | 158.35 | 88 | 13940.96 | -6.16 | -0.04% | 0.05R | 80m | market | stagnation | breakout | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 355 | SNOW | 07-31 14:00 | 07-31 15:20 | 226.77 | 226.6 | 61 | 13832.97 | -10.37 | -0.07% | 0.06R | 80m | market | breakeven-stop | breakout | breakout | neutral | 93.2 | ↑224.22 | 1.0668 | 1.87 | **LOSS** |
| 356 | MDB | 07-31 14:00 | 07-31 14:20 | 250.51 | 248.09 | 55 | 13778.05 | -133.1 | -0.97% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 77.98 | ↑247.21 | 0.9506 | 1.12 | **LOSS** |
| 357 | COST | 07-31 14:30 | 07-31 14:55 | 944.13 | 941.28 | 14 | 13217.82 | -39.9 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 78.59 | ↑936.64 | 2.7383 | 1.43 | **LOSS** |
| 358 | LOW | 08-01 15:10 | 08-01 15:30 | 226.68 | 225.63 | 61 | 13827.48 | -64.05 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 64.34 | ↑224.85 | 0.329 | 3.24 | **LOSS** |
| 359 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.81 | 308.33 | 44 | 13675.64 | -109.12 | -0.8% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 360 | CAT | 08-04 14:10 | 08-04 15:40 | 434.07 | 433.46 | 32 | 13890.24 | -19.52 | -0.14% | 0.2R | 90m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 361 | AMD | 08-04 14:30 | 08-04 14:50 | 177.31 | 176.2 | 74 | 13120.94 | -82.14 | -0.63% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 59.97 | ↑175.98 | 1.486 | 1.55 | **LOSS** |
| 362 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.36 | 89.37 | 86 | 7684.96 | +0.86 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **WIN** |
| 363 | UNH | 08-05 15:20 | 08-05 15:40 | 247.62 | 245.55 | 52 | 12876.24 | -107.64 | -0.84% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 364 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.87 | 444.3 | 31 | 13821.97 | -48.67 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 365 | AMZN | 08-06 14:40 | 08-06 16:25 | 216.47 | 218.58 | 64 | 13854.08 | +135.04 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.64 | ↑214.9 | 0.5168 | 1.27 | **WIN** |
| 366 | AAPL | 08-06 15:15 | 08-06 16:25 | 212.89 | 214.42 | 32 | 13837.85 | +48.96 | +0.72% | 0.96R | 70m | market | trim-profit-target | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 367 | AAPL | 08-06 15:15 | 08-06 17:00 | 212.89 | 214.14 | 33 | 13837.85 | +41.25 | +0.59% | 0.79R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 368 | TGT | 08-06 15:15 | 08-06 16:15 | 105.52 | 105.38 | 133 | 14034.16 | -18.62 | -0.13% | 0.19R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 369 | RIVN | 08-07 13:55 | 08-07 14:20 | 12.14 | 12.01 | 1156 | 14033.84 | -150.28 | -1.07% | 0.7R | 25m | market | early-reversal | breakout | breakout | neutral | 81.56 | ↓11.98 | 0.087 | 1.28 | **LOSS** |
| 370 | CVX | 08-08 14:00 | 08-08 14:10 | 155.32 | 153.75 | 90 | 13978.8 | -141.3 | -1.01% | 1.44R | 10m | market | stop-loss | trend | trend | neutral | 71.92 | ↓154.69 | 0.3514 | 1.15 | **LOSS** |
| 371 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.12 | 76.76 | 181 | 13958.72 | -65.16 | -0.47% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 372 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.02 | 91.75 | 152 | 13987.04 | -41.04 | -0.29% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 373 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 69 | 13860.72 | +4.83 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 374 | DIS | 08-08 14:10 | 08-08 14:30 | 114.09 | 113.55 | 122 | 13918.98 | -65.88 | -0.47% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↓113.71 | 0.3507 | 5.7 | **LOSS** |
| 375 | MU | 08-08 14:15 | 08-08 15:20 | 113.8 | 118.35 | 123 | 13997.4 | +559.65 | +4% | 4.21R | 65m | market | profit-target | trend | trend | neutral | 78.92 | ↑113.19 | 0.519 | 2.14 | **WIN** |
| 376 | ARM | 08-08 14:15 | 08-08 14:35 | 137.62 | 136.76 | 102 | 14037.24 | -87.72 | -0.62% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 377 | ARM | 08-08 15:15 | 08-08 15:35 | 138.56 | 137.77 | 101 | 13994.56 | -79.79 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 63.34 | ↑136.97 | 0.6604 | 2.49 | **LOSS** |
| 378 | KLAC | 08-11 13:45 | 08-11 14:05 | 931.97 | 923.52 | 15 | 13979.55 | -126.75 | -0.91% | 1.3R | 20m | market | stop-loss | breakout | breakout | neutral | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 379 | DELL | 08-11 14:00 | 08-11 14:45 | 139.84 | 139.33 | 99 | 13844.16 | -50.49 | -0.36% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 75.62 | ↑138.62 | 0.4975 | 1.02 | **LOSS** |
| 380 | CELH | 08-11 14:05 | 08-11 14:50 | 53.78 | 53.37 | 258 | 13875.24 | -105.78 | -0.76% | 0.41R | 45m | market | early-reversal | breakout | breakout | neutral | 78.21 | ↓53.24 | 0.585 | 1.13 | **LOSS** |
| 381 | AVGO | 08-11 14:10 | 08-11 14:30 | 307.77 | 306.22 | 45 | 13849.65 | -69.75 | -0.5% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 64.32 | ↑305.31 | 0.7829 | 1.01 | **LOSS** |
| 382 | UNH | 08-12 13:35 | 08-12 15:20 | 256.2 | 260.33 | 54 | 13834.8 | +223.02 | +1.61% | 2.3R | 105m | market | timeout | trend | breakout | neutral | 63.77 | ↑255.09 | 0.0349 | 1.15 | **WIN** |
| 383 | CVX | 08-12 14:10 | 08-12 14:30 | 155.91 | 155.15 | 89 | 13875.99 | -67.64 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑154.66 | 0.5235 | 1.2 | **LOSS** |
| 384 | BA | 08-12 14:10 | 08-12 14:30 | 231.01 | 229.98 | 60 | 13860.6 | -61.8 | -0.45% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 385 | LRCX | 08-12 14:10 | 08-12 15:25 | 103 | 104.55 | 67 | 13905 | +103.85 | +1.5% | 1.67R | 75m | market | trim-profit-target | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 386 | LRCX | 08-12 14:10 | 08-12 15:55 | 103 | 105.29 | 68 | 13905 | +155.72 | +2.22% | 2.47R | 105m | market | timeout | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 387 | ELF | 08-12 14:35 | 08-12 16:05 | 116.13 | 117.57 | 30 | 6967.8 | +43.2 | +1.24% | 0.65R | 90m | market | trim-profit-target | breakout | trend | noisyHighBeta | 71.43 | ↑114.83 | 0.3203 | 1.05 | **WIN** |
| 388 | ELF | 08-12 14:35 | 08-12 16:20 | 116.13 | 117.81 | 30 | 6967.8 | +50.4 | +1.45% | 0.76R | 105m | market | timeout | breakout | trend | noisyHighBeta | 71.43 | ↑114.83 | 0.3203 | 1.05 | **WIN** |
| 389 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 655 | 14062.85 | -65.5 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 390 | LLY | 08-13 13:55 | 08-13 14:15 | 657.69 | 652.09 | 21 | 13811.49 | -117.6 | -0.85% | 0.8R | 20m | market | early-reversal | breakout | breakout | neutral | 84.6 | ↓651.81 | 3.518 | 1.78 | **LOSS** |
| 391 | IBM | 08-13 14:00 | 08-13 14:55 | 240.26 | 240.08 | 58 | 13935.08 | -10.44 | -0.07% | 0.08R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 392 | MRVL | 08-13 14:10 | 08-13 15:00 | 79.92 | 79.11 | 175 | 13986 | -141.75 | -1.01% | 0.75R | 50m | market | early-reversal | trend | trend | neutral | 77.08 | ↓79.26 | 0.4703 | 2.17 | **LOSS** |
| 393 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.34 | 195.5 | 71 | 13940.14 | -59.64 | -0.43% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 394 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 645 | 14054.55 | +296.7 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 395 | CRM | 08-13 14:50 | 08-13 15:45 | 234.24 | 234.09 | 59 | 13820.16 | -8.85 | -0.06% | 0.07R | 55m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 396 | ADBE | 08-13 14:50 | 08-13 15:30 | 345.06 | 347.38 | 20 | 13802.4 | +46.4 | +0.67% | 0.88R | 40m | market | trim-profit-target | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 397 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.06 | 345.2 | 20 | 13802.4 | +2.8 | +0.04% | 0.05R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 398 | NFLX | 08-14 14:15 | 08-14 15:20 | 1233.57 | 1232.21 | 11 | 13569.27 | -14.96 | -0.11% | 0.13R | 65m | market | stagnation | trend | trend | neutral | 78.24 | ↑1221.66 | 2.6614 | 1.29 | **LOSS** |
| 399 | COST | 08-14 14:30 | 08-14 15:20 | 987 | 985.87 | 14 | 13818 | -15.82 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 67.37 | ↑984.9 | 1.7164 | 1.42 | **LOSS** |
| 400 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 68 | 13887.64 | -65.96 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 401 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 402 | MDB | 08-15 14:10 | 08-15 15:55 | 213.18 | 215.79 | 65 | 13856.7 | +169.65 | +1.22% | 0.98R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑210.83 | 1.7971 | 1.57 | **WIN** |
| 403 | UBER | 08-15 14:15 | 08-15 15:05 | 93.38 | 92.91 | 149 | 13913.62 | -70.03 | -0.5% | 0.47R | 50m | market | early-reversal | breakout | breakout | neutral | 72.71 | ↓92.37 | 0.3724 | 1.4 | **LOSS** |
| 404 | NET | 08-15 14:15 | 08-15 15:45 | 198.8 | 200.93 | 35 | 13916 | +74.55 | +1.07% | 1.22R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 405 | NET | 08-15 14:15 | 08-15 16:00 | 198.8 | 200.87 | 35 | 13916 | +72.45 | +1.04% | 1.18R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 406 | SMCI | 08-18 14:20 | 08-18 15:15 | 45.85 | 46.38 | 152 | 13938.4 | +80.56 | +1.16% | 0.94R | 55m | market | trim-profit-target | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 407 | SMCI | 08-18 14:20 | 08-18 16:05 | 45.85 | 46.22 | 152 | 13938.4 | +56.24 | +0.81% | 0.66R | 105m | market | timeout | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 408 | BAC | 08-18 14:20 | 08-18 14:55 | 47.52 | 47.36 | 294 | 13970.88 | -47.04 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 77.6 | ↑47.27 | 0.0877 | 1.23 | **LOSS** |
| 409 | TGT | 08-18 14:45 | 08-18 15:05 | 106.02 | 105.57 | 132 | 13994.64 | -59.4 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 77.98 | ↑105.13 | 0.6538 | 1.36 | **LOSS** |
| 410 | SHOP | 08-18 15:05 | 08-18 15:45 | 142.8 | 142.41 | 98 | 13994.4 | -38.22 | -0.27% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 67.34 | ↑141.46 | 0.2534 | 2.03 | **LOSS** |
| 411 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.92 | 129.88 | 107 | 14008.44 | -111.28 | -0.79% | 0.86R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 412 | ABNB | 08-19 14:25 | 08-19 14:45 | 127.79 | 127.28 | 109 | 13929.11 | -55.59 | -0.4% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 78.29 | ↑126.75 | 0.481 | 1.3 | **LOSS** |
| 413 | CAT | 08-19 14:40 | 08-19 15:00 | 421.74 | 419.36 | 33 | 13917.42 | -78.54 | -0.56% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 73.73 | ↑418.45 | 2.419 | 1.23 | **LOSS** |
| 414 | NOW | 08-20 15:15 | 08-20 15:50 | 894.24 | 890.36 | 15 | 13413.6 | -58.2 | -0.43% | 0.61R | 35m | market | early-reversal | trend | trend | neutral | 69.48 | ↓886.78 | 1.3916 | 1.25 | **LOSS** |
| 415 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.45 | 154.9 | 49 | 7715.05 | -124.95 | -1.62% | 0.81R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 416 | DDOG | 08-21 14:25 | 08-21 15:10 | 128.54 | 128.11 | 109 | 14010.86 | -46.87 | -0.33% | 0.38R | 45m | market | early-reversal | trend | trend | neutral | 51.64 | ↑127.88 | 0.1844 | 2.72 | **LOSS** |
| 417 | UNH | 08-21 14:45 | 08-21 15:50 | 304.99 | 304.83 | 25 | 7624.75 | -4 | -0.05% | 0.05R | 65m | market | stagnation | trend | trend | noisyHighBeta | 73.74 | ↑301.63 | 1.4825 | 1.32 | **LOSS** |
| 418 | ARM | 08-21 15:00 | 08-21 15:25 | 133.45 | 132.57 | 105 | 14012.25 | -92.4 | -0.66% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 70.99 | ↑132 | 0.7656 | 2.7 | **LOSS** |
| 419 | NVO | 08-21 15:00 | 08-21 16:45 | 55.45 | 55.62 | 252 | 13973.4 | +42.84 | +0.31% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.11 | ↑55.06 | 0.2703 | 1.08 | **WIN** |
| 420 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.61 | 335.04 | 42 | 13717.62 | +354.06 | +2.58% | 3.44R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 421 | NVDA | 08-22 14:00 | 08-22 15:45 | 176.46 | 177.94 | 79 | 13940.34 | +116.92 | +0.84% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 58.33 | ↑173.91 | -0.0644 | 3.33 | **WIN** |
| 422 | AMD | 08-22 14:00 | 08-22 15:45 | 165.72 | 167.61 | 84 | 13920.48 | +158.76 | +1.14% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 423 | CRWD | 08-22 14:05 | 08-22 14:20 | 419.83 | 419.42 | 33 | 13854.39 | -13.53 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | neutral | 77.34 | ↑417.75 | 0.6993 | 2.81 | **LOSS** |
| 424 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.51 | 12.82 | 1121 | 14023.71 | +347.51 | +2.48% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 425 | AMZN | 08-22 14:10 | 08-22 15:55 | 225.19 | 226.72 | 62 | 13961.78 | +94.86 | +0.68% | 0.76R | 105m | market | timeout | breakout | breakout | neutral | 75.23 | ↑222.99 | 0.5119 | 1.94 | **WIN** |
| 426 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 427 | COIN | 08-22 14:25 | 08-22 16:10 | 315.08 | 318.59 | 44 | 13863.52 | +154.44 | +1.11% | 0.56R | 105m | market | timeout | breakout | breakout | neutral | 76.34 | ↑310.67 | 3.5589 | 1.33 | **WIN** |
| 428 | LOW | 08-22 14:30 | 08-22 16:00 | 262.83 | 264.63 | 26 | 13929.99 | +46.8 | +0.68% | 0.65R | 90m | market | trim-profit-target | trend | trend | neutral | 74.02 | ↑259.79 | 1.4136 | 1.89 | **WIN** |
| 429 | LOW | 08-22 14:30 | 08-22 16:15 | 262.83 | 264.83 | 27 | 13929.99 | +54 | +0.76% | 0.73R | 105m | market | timeout | trend | trend | neutral | 74.02 | ↑259.79 | 1.4136 | 1.89 | **WIN** |
| 430 | MSFT | 08-22 14:40 | 08-22 15:25 | 509.85 | 508.18 | 27 | 13765.95 | -45.09 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 73.45 | ↓507.24 | 0.8376 | 2.69 | **LOSS** |
| 431 | ORCL | 08-22 14:40 | 08-22 15:25 | 237.39 | 236.72 | 59 | 14006.01 | -39.53 | -0.28% | 0.24R | 45m | market | early-reversal | trend | trend | neutral | 69.38 | ↑234.55 | 0.7442 | 1.06 | **LOSS** |
| 432 | MU | 08-22 14:40 | 08-22 15:10 | 120.33 | 119.71 | 116 | 13958.28 | -71.92 | -0.52% | 0.31R | 30m | market | early-reversal | trend | trend | neutral | 70.7 | ↑119.08 | 1.0606 | 1.19 | **LOSS** |
| 433 | BAC | 08-22 14:40 | 08-22 16:25 | 49.13 | 49.41 | 284 | 13952.92 | +79.52 | +0.57% | 0.77R | 105m | market | timeout | trend | trend | neutral | 67.58 | ↑48.84 | 0.2138 | 1.05 | **WIN** |
| 434 | HPE | 08-22 14:40 | 08-22 16:25 | 22.43 | 22.48 | 623 | 13973.89 | +31.15 | +0.22% | 0.18R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑22.16 | 0.1518 | 1.31 | **WIN** |
| 435 | IBM | 08-22 14:40 | 08-22 15:05 | 243.42 | 242.57 | 57 | 13874.94 | -48.45 | -0.35% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 76.51 | ↓242.41 | 0.8806 | 2.11 | **LOSS** |
| 436 | NFLX | 08-25 14:00 | 08-25 15:10 | 1226.71 | 1224.48 | 11 | 13493.81 | -24.53 | -0.18% | 0.24R | 70m | market | stagnation | trend | trend | neutral | 77.84 | ↑1218.56 | 4.6744 | 1.95 | **LOSS** |
| 437 | NKE | 08-25 14:00 | 08-25 14:20 | 79.74 | 79.19 | 175 | 13954.5 | -96.25 | -0.69% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↓79.36 | 0.2245 | 1.49 | **LOSS** |
| 438 | DELL | 08-25 15:10 | 08-25 15:55 | 132.13 | 131.71 | 105 | 13873.65 | -44.1 | -0.32% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 71.59 | ↑131.32 | 0.235 | 3.51 | **LOSS** |
| 439 | ORCL | 08-25 15:25 | 08-25 16:20 | 238.43 | 238.35 | 58 | 13828.94 | -4.64 | -0.03% | 0.04R | 55m | market | stagnation | trend | trend | neutral | 73.04 | ↑236.78 | 0.4119 | 1.96 | **LOSS** |
| 440 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.69 | 87.91 | 159 | 13942.71 | +34.98 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 441 | COIN | 08-27 14:05 | 08-27 14:55 | 310.71 | 310.56 | 44 | 13671.24 | -6.6 | -0.05% | 0.05R | 50m | market | stagnation | trend | trend | neutral | 67.7 | ↑309.3 | 1.2315 | 1.43 | **LOSS** |
| 442 | INTU | 08-28 14:30 | 08-28 15:25 | 670.57 | 669.31 | 20 | 13411.4 | -25.2 | -0.19% | 0.27R | 55m | market | stagnation | trend | trend | neutral | 79.04 | ↑665.43 | 1.5439 | 1.48 | **LOSS** |
| 443 | AMZN | 08-28 14:50 | 08-28 16:35 | 231.33 | 232.38 | 60 | 13879.8 | +63 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 66.5 | ↑229.85 | 0.5083 | 1.1 | **WIN** |
| 444 | CELH | 08-29 14:00 | 08-29 14:55 | 63.05 | 62.85 | 202 | 12736.1 | -40.4 | -0.32% | 0.16R | 55m | market | stagnation | breakout | breakout | neutral | 75.57 | ↑62.18 | 0.7881 | 1.23 | **LOSS** |
| 445 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.67 | 156.35 | 89 | 14032.63 | -117.48 | -0.84% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 446 | COIN | 09-02 14:30 | 09-02 14:50 | 309.7 | 307.63 | 45 | 13936.5 | -93.15 | -0.67% | 0.38R | 20m | market | early-reversal | breakout | breakout | neutral | 63.14 | ↑304.84 | 0.6174 | 1.21 | **LOSS** |
| 447 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 448 | TSM | 09-03 14:40 | 09-03 15:20 | 231.89 | 230.87 | 60 | 13913.4 | -61.2 | -0.44% | 0.63R | 40m | market | early-reversal | trend | trend | neutral | 79.01 | ↑230.25 | 0.9671 | 1.22 | **LOSS** |
| 449 | AVGO | 09-03 14:45 | 09-03 15:25 | 303.7 | 302.19 | 45 | 13666.5 | -67.95 | -0.5% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 69.6 | ↑299.96 | 1.3055 | 1.54 | **LOSS** |
| 450 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 584 | 14086.08 | +81.76 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 451 | NFLX | 09-04 14:30 | 09-04 16:15 | 1249.44 | 1254.3 | 11 | 13743.84 | +53.46 | +0.39% | 0.45R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑1241.75 | 7.9649 | 1.11 | **WIN** |
| 452 | DIS | 09-04 14:30 | 09-04 16:05 | 118.6 | 118.48 | 117 | 13876.2 | -14.04 | -0.1% | 0.14R | 95m | market | stagnation | trend | trend | neutral | 76.09 | ↑117.94 | 0.4323 | 1.34 | **LOSS** |
| 453 | SMCI | 09-04 14:35 | 09-04 14:55 | 40.74 | 40.55 | 343 | 13973.82 | -65.17 | -0.47% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑40.32 | 0.1624 | 1.17 | **LOSS** |
| 454 | AMAT | 09-04 14:35 | 09-04 16:20 | 157.88 | 157.87 | 88 | 13893.44 | -0.88 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 76.82 | ↑156.79 | 0.7312 | 1.04 | **LOSS** |
| 455 | MDB | 09-04 14:45 | 09-04 16:35 | 311.54 | 315.41 | 24 | 7476.96 | +92.88 | +1.24% | 1.15R | 110m | market | timeout | trend | trend | noisyHighBeta | 57.43 | ↑308.48 | -0.0258 | 1.35 | **WIN** |
| 456 | ASML | 09-04 15:00 | 09-04 15:55 | 753.53 | 752.86 | 18 | 13563.54 | -12.06 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 75.61 | ↑746.98 | 4.9787 | 1.51 | **LOSS** |
| 457 | HPE | 09-04 15:00 | 09-04 15:50 | 24.08 | 23.99 | 581 | 13990.48 | -52.29 | -0.37% | 0.24R | 50m | market | early-reversal | trend | trend | neutral | 77.49 | ↑23.59 | 0.3068 | 1.21 | **LOSS** |
| 458 | IBM | 09-04 15:00 | 09-04 16:45 | 246.47 | 248.12 | 56 | 13802.32 | +92.4 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 78.13 | ↑244.83 | 0.7761 | 1.49 | **WIN** |
| 459 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 121 | 7631.47 | +125.84 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 460 | PANW | 09-05 13:40 | 09-05 14:00 | 196.18 | 195.28 | 71 | 13928.78 | -63.9 | -0.46% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 461 | RIVN | 09-05 14:25 | 09-05 14:45 | 14.39 | 14.26 | 901 | 12965.39 | -117.13 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 74.53 | ↑14.21 | 0.189 | 1.13 | **LOSS** |
| 462 | CRM | 09-05 15:10 | 09-05 16:00 | 250.01 | 249.66 | 55 | 13750.55 | -19.25 | -0.14% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 45.95 | ↑248.1 | 1.2377 | 1.13 | **LOSS** |
| 463 | NOW | 09-05 15:20 | 09-05 15:55 | 914.82 | 911.95 | 15 | 13722.3 | -43.05 | -0.31% | 0.44R | 35m | market | early-reversal | trend | trend | neutral | 75.28 | ↑906.85 | 2.6273 | 1.17 | **LOSS** |
| 464 | COIN | 09-08 14:00 | 09-08 14:20 | 302.97 | 300.07 | 46 | 13936.62 | -133.4 | -0.96% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 66.96 | ↓300.78 | 0.926 | 1.12 | **LOSS** |
| 465 | ABNB | 09-08 14:10 | 09-08 15:05 | 125.13 | 125.12 | 112 | 14014.56 | -1.12 | -0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 75.97 | ↑124.09 | 0.3543 | 1.17 | **LOSS** |
| 466 | AMZN | 09-08 14:30 | 09-08 16:15 | 236.42 | 236.59 | 59 | 13948.78 | +10.03 | +0.07% | 0.09R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑234.61 | 0.6672 | 1.6 | **WIN** |
| 467 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.8 | 64.95 | 215 | 13932 | +32.25 | +0.23% | 0.16R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 468 | ADBE | 09-08 15:05 | 09-08 15:30 | 354.41 | 352.81 | 39 | 13821.99 | -62.4 | -0.45% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 78.94 | ↑349.77 | 1.3941 | 2 | **LOSS** |
| 469 | CRWD | 09-08 15:10 | 09-08 15:35 | 425.62 | 423.26 | 32 | 13619.84 | -75.52 | -0.55% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 66.74 | ↑421.55 | 2.0221 | 1.65 | **LOSS** |
| 470 | JPM | 09-09 14:35 | 09-09 16:00 | 297.17 | 296.74 | 47 | 13966.99 | -20.21 | -0.14% | 0.19R | 85m | market | stagnation | trend | trend | neutral | 73.4 | ↑295.1 | 0.816 | 2.37 | **LOSS** |
| 471 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 472 | AMAT | 09-09 15:15 | 09-09 16:05 | 163.8 | 163.7 | 85 | 13923 | -8.5 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 78.83 | ↑162.67 | 0.2955 | 1.17 | **LOSS** |
| 473 | HPE | 09-09 15:15 | 09-09 16:10 | 23.84 | 23.82 | 586 | 13970.24 | -11.72 | -0.08% | 0.11R | 55m | market | stagnation | trend | trend | neutral | 76.11 | ↑23.64 | 0.0799 | 1.71 | **LOSS** |
| 474 | BAC | 09-09 15:25 | 09-09 15:50 | 50.52 | 50.35 | 277 | 13994.04 | -47.09 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.86 | ↑50.04 | 0.2452 | 1.07 | **LOSS** |
| 475 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 476 | NVO | 09-10 14:30 | 09-10 15:20 | 54.95 | 54.78 | 255 | 14012.25 | -43.35 | -0.31% | 0.25R | 50m | market | stagnation | trend | trend | neutral | 68.11 | ↑54.39 | 0.1926 | 1.39 | **LOSS** |
| 477 | TSLA | 09-10 14:45 | 09-10 16:30 | 353.36 | 354.25 | 39 | 13781.04 | +34.71 | +0.25% | 0.24R | 105m | market | timeout | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 478 | DELL | 09-11 14:00 | 09-11 14:50 | 127.21 | 127.21 | 109 | 13865.89 | +0 | +0% | 0R | 50m | market | breakeven-stop | trend | trend | neutral | 71.9 | ↓126.5 | 0.5062 | 1.84 | **WIN** |
| 479 | NKE | 09-11 14:00 | 09-11 14:20 | 75.34 | 74.98 | 185 | 13937.9 | -66.6 | -0.48% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 79.46 | ↓74.98 | 0.278 | 1.24 | **LOSS** |
| 480 | NET | 09-11 14:15 | 09-11 15:25 | 226.43 | 229.05 | 31 | 14038.66 | +81.22 | +1.16% | 1.04R | 70m | market | trim-profit-target | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 481 | NET | 09-11 14:15 | 09-11 16:00 | 226.43 | 229.7 | 31 | 14038.66 | +101.37 | +1.44% | 1.29R | 105m | market | timeout | trend | trend | neutral | 74.19 | ↑225.25 | 1.3002 | 1.26 | **WIN** |
| 482 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.27 | 361.17 | 19 | 13933.53 | +74.1 | +1.09% | 0.75R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 483 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.27 | 362.34 | 20 | 13933.53 | +101.4 | +1.42% | 0.98R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 484 | QCOM | 09-11 14:35 | 09-11 16:20 | 160.5 | 160.77 | 87 | 13963.5 | +23.49 | +0.17% | 0.21R | 105m | market | timeout | trend | trend | neutral | 66.34 | ↑159.77 | 0.6266 | 1.1 | **WIN** |
| 485 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 486 | LRCX | 09-11 15:15 | 09-11 16:25 | 115.19 | 115 | 121 | 13937.99 | -22.99 | -0.16% | 0.19R | 70m | market | stagnation | trend | trend | neutral | 79.42 | ↑113.2 | 1.8468 | 1.06 | **LOSS** |
| 487 | ARM | 09-11 15:25 | 09-11 15:50 | 158.24 | 157.51 | 88 | 13925.12 | -64.24 | -0.46% | 0.61R | 25m | market | early-reversal | trend | trend | neutral | 63.48 | ↑156.18 | 1.0582 | 2.33 | **LOSS** |
| 488 | HPE | 09-11 15:25 | 09-11 16:05 | 24.81 | 24.7 | 563 | 13968.03 | -61.93 | -0.44% | 0.63R | 40m | market | early-reversal | trend | trend | neutral | 74.04 | ↓24.67 | 0.0727 | 1.16 | **LOSS** |
| 489 | UNH | 09-12 14:00 | 09-12 14:20 | 361.63 | 359.49 | 38 | 13741.94 | -81.32 | -0.59% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 77.47 | ↑357.84 | 1.3657 | 1.15 | **LOSS** |
| 490 | AAPL | 09-12 14:05 | 09-12 15:50 | 232.78 | 234.33 | 60 | 13966.8 | +93 | +0.67% | 0.77R | 105m | market | timeout | trend | trend | neutral | 64.82 | ↑230.73 | 0.4094 | 1.94 | **WIN** |
| 491 | MU | 09-12 14:20 | 09-12 16:05 | 156.1 | 156.46 | 90 | 14049 | +32.4 | +0.23% | 0.12R | 105m | market | timeout | breakout | breakout | neutral | 81.48 | ↑154.74 | 0.9647 | 1.91 | **WIN** |
| 492 | PLTR | 09-12 14:50 | 09-12 15:10 | 168.19 | 166.62 | 83 | 13959.77 | -130.31 | -0.93% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 76.58 | ↑166.22 | 0.7275 | 1.3 | **LOSS** |
| 493 | AMD | 09-12 14:55 | 09-12 16:40 | 157.69 | 159.35 | 88 | 13876.72 | +146.08 | +1.05% | 1.25R | 105m | market | timeout | breakout | breakout | neutral | 72.62 | ↑156.13 | 0.2411 | 2.1 | **WIN** |
| 494 | ELF | 09-12 15:20 | 09-12 15:50 | 140.14 | 139.45 | 99 | 13873.86 | -68.31 | -0.49% | 0.6R | 30m | market | early-reversal | breakout | breakout | neutral | 73.82 | ↑138 | 0.4712 | 1.52 | **LOSS** |
| 495 | NET | 09-15 13:40 | 09-15 15:25 | 224.25 | 227.14 | 62 | 13903.5 | +179.18 | +1.29% | 1.65R | 105m | market | timeout | trend | breakout | neutral | 60.32 | ↑222.82 | 0.1765 | 1.92 | **WIN** |
| 496 | NOW | 09-15 14:35 | 09-15 16:25 | 941.37 | 951.76 | 14 | 13179.18 | +145.46 | +1.1% | 1.57R | 110m | market | timeout | trend | trend | neutral | 70.81 | ↑935.67 | 1.4682 | 3.24 | **WIN** |
| 497 | CELH | 09-15 14:35 | 09-15 16:05 | 57.45 | 57.4 | 241 | 13845.45 | -12.05 | -0.09% | 0.06R | 90m | market | stagnation | breakout | breakout | neutral | 44.87 | ↑56.77 | -0.2798 | 1.32 | **LOSS** |
| 498 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 499 | AMZN | 09-15 14:55 | 09-15 15:15 | 233.45 | 232.8 | 59 | 13773.55 | -38.35 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑231.52 | 1.2211 | 1.56 | **LOSS** |
| 500 | META | 09-15 15:05 | 09-15 16:50 | 764.14 | 766.43 | 18 | 13754.52 | +41.22 | +0.3% | 0.43R | 105m | market | timeout | trend | trend | neutral | 67.92 | ↑758.68 | 1.5517 | 1.01 | **WIN** |
| 501 | AMZN | 09-16 14:10 | 09-16 14:40 | 235.13 | 234.33 | 59 | 13872.67 | -47.2 | -0.34% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 75.29 | ↑233.45 | 0.6254 | 1.7 | **LOSS** |
| 502 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 559 | 14086.8 | -44.72 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 503 | GE | 09-16 14:15 | 09-16 14:40 | 292.35 | 289.85 | 48 | 14032.8 | -120 | -0.86% | 0.87R | 25m | market | early-reversal | trend | trend | neutral | 77.08 | ↓290.63 | 1.4852 | 1.08 | **LOSS** |
| 504 | TSLA | 09-16 14:45 | 09-16 15:05 | 420.92 | 416.51 | 33 | 13890.36 | -145.53 | -1.05% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 505 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.09 | 417.51 | 33 | 13862.97 | -85.14 | -0.61% | 0.55R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 506 | LLY | 09-16 15:20 | 09-16 17:05 | 761.89 | 769.53 | 18 | 13714.02 | +137.52 | +1% | 1.41R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑753.77 | 2.3186 | 1.58 | **WIN** |
| 507 | MU | 09-17 14:15 | 09-17 14:35 | 160.26 | 159.31 | 87 | 13942.62 | -82.65 | -0.59% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 65 | ↑158.53 | 0.4402 | 1.01 | **LOSS** |
| 508 | LLY | 09-17 14:40 | 09-17 15:05 | 775.4 | 772.1 | 18 | 13957.2 | -59.4 | -0.43% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 78.52 | ↑767.66 | 1.991 | 1.39 | **LOSS** |
| 509 | QCOM | 09-18 14:00 | 09-18 14:35 | 168.3 | 167.49 | 83 | 13968.9 | -67.23 | -0.48% | 0.45R | 35m | market | early-reversal | trend | trend | neutral | 78.46 | ↓167.26 | 0.7365 | 1.87 | **LOSS** |
| 510 | COIN | 09-18 14:05 | 09-18 14:35 | 329.99 | 338.06 | 42 | 13859.58 | +338.94 | +2.45% | 1.56R | 30m | market | profit-target | trend | trend | neutral | 70.09 | ↑327.83 | 2.7118 | 1.04 | **WIN** |
| 511 | DDOG | 09-18 14:10 | 09-18 15:50 | 136.57 | 136.13 | 102 | 13930.14 | -44.88 | -0.32% | 0.31R | 100m | market | early-reversal | trend | trend | neutral | 71.78 | ↓135.82 | 0.4575 | 1.4 | **LOSS** |
| 512 | NVO | 09-18 14:30 | 09-18 14:50 | 62.14 | 61.82 | 124 | 7705.36 | -39.68 | -0.51% | 0.26R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 73.91 | ↑61.58 | 1.0802 | 1.4 | **LOSS** |
| 513 | IBM | 09-18 14:30 | 09-18 14:55 | 262.42 | 261.44 | 53 | 13908.26 | -51.94 | -0.37% | 0.51R | 25m | market | early-reversal | trend | trend | neutral | 68.44 | ↓260.9 | 0.796 | 2.99 | **LOSS** |
| 514 | INTU | 09-18 15:00 | 09-18 15:45 | 679.02 | 684.97 | 10 | 13580.4 | +59.5 | +0.88% | 1.26R | 45m | market | trim-profit-target | trend | trend | neutral | 79.23 | ↑672.97 | 4.011 | 1.74 | **WIN** |
| 515 | INTU | 09-18 15:00 | 09-18 16:45 | 679.02 | 684.26 | 10 | 13580.4 | +52.4 | +0.77% | 1.1R | 105m | market | timeout | trend | trend | neutral | 79.23 | ↑672.97 | 4.011 | 1.74 | **WIN** |
| 516 | SMCI | 09-19 14:00 | 09-19 14:20 | 46.39 | 46.15 | 301 | 13963.39 | -72.24 | -0.52% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 63.33 | ↑46.1 | 0.1307 | 1.4 | **LOSS** |
| 517 | SNOW | 09-19 14:00 | 09-19 15:45 | 225.2 | 227.74 | 62 | 13962.4 | +157.48 | +1.13% | 1.43R | 105m | market | timeout | trend | trend | neutral | 77.92 | ↑224.52 | 1.1048 | 1.3 | **WIN** |
| 518 | SBUX | 09-19 14:10 | 09-19 14:40 | 84.63 | 84.38 | 165 | 13963.95 | -41.25 | -0.3% | 0.38R | 30m | market | early-reversal | trend | trend | neutral | 77.88 | ↑83.88 | 0.2369 | 1.01 | **LOSS** |
| 519 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 468 | 14082.12 | -271.44 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 520 | KLAC | 09-22 14:00 | 09-22 14:20 | 1060.85 | 1053.49 | 13 | 13791.05 | -95.68 | -0.69% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 73.84 | ↓1058.46 | 4.6285 | 3.36 | **LOSS** |
| 521 | CRM | 09-22 14:30 | 09-22 16:15 | 247.71 | 248.37 | 56 | 13871.76 | +36.96 | +0.27% | 0.3R | 105m | market | timeout | trend | trend | neutral | 54.29 | ↑245.46 | 0.2287 | 1.58 | **WIN** |
| 522 | ORCL | 09-22 14:35 | 09-22 16:20 | 317.38 | 322.54 | 44 | 13964.72 | +227.04 | +1.63% | 0.93R | 105m | market | timeout | breakout | trend | neutral | 76.89 | ↑311.38 | 2.4313 | 1.1 | **WIN** |
| 523 | MU | 09-22 15:15 | 09-22 15:45 | 165.99 | 166.09 | 84 | 13943.16 | +8.4 | +0.06% | 0.08R | 30m | market | breakeven-stop | trend | trend | neutral | 64.13 | ↑164.32 | 0.7393 | 1.55 | **WIN** |
| 524 | ELF | 09-23 14:10 | 09-23 14:35 | 140.06 | 138.92 | 99 | 13865.94 | -112.86 | -0.81% | 0.89R | 25m | market | early-reversal | breakout | breakout | neutral | 71.08 | ↓138.71 | 0.4203 | 2.59 | **LOSS** |
| 525 | UNH | 09-23 14:20 | 09-23 14:40 | 349.28 | 347.3 | 40 | 13971.2 | -79.2 | -0.57% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 79.73 | ↓346.79 | 1.9194 | 1.23 | **LOSS** |
| 526 | DELL | 09-23 14:25 | 09-23 14:45 | 137.06 | 136.67 | 101 | 13843.06 | -39.39 | -0.28% | 0.31R | 20m | market | early-reversal | trend | trend | neutral | 70.76 | ↑136.1 | 0.321 | 1.06 | **LOSS** |
| 527 | QCOM | 09-24 14:20 | 09-24 15:45 | 171.08 | 172.57 | 40 | 13857.48 | +59.6 | +0.87% | 1.24R | 85m | market | trim-profit-target | trend | trend | neutral | 77.11 | ↑170.02 | 0.4606 | 1.78 | **WIN** |
| 528 | QCOM | 09-24 14:20 | 09-24 16:05 | 171.08 | 172.55 | 41 | 13857.48 | +60.27 | +0.86% | 1.23R | 105m | market | timeout | trend | trend | neutral | 77.11 | ↑170.02 | 0.4606 | 1.78 | **WIN** |
| 529 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 530 | PLTR | 09-25 14:15 | 09-25 16:00 | 180.83 | 183.37 | 77 | 13923.91 | +195.58 | +1.4% | 0.7R | 105m | market | timeout | breakout | breakout | neutral | 56.8 | ↑177.11 | 0.1758 | 1.15 | **WIN** |
| 531 | IBM | 09-25 14:45 | 09-25 16:30 | 280.43 | 282.68 | 49 | 13741.07 | +110.25 | +0.8% | 0.56R | 105m | market | timeout | trend | trend | neutral | 67.91 | ↑276.98 | 3.2596 | 1.01 | **WIN** |
| 532 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 176 | 13919.84 | +582.56 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 533 | CELH | 09-26 15:15 | 09-26 17:00 | 53.88 | 54.05 | 257 | 13847.16 | +43.69 | +0.32% | 0.36R | 105m | market | timeout | trend | trend | neutral | 64.47 | ↑53.34 | 0.3913 | 1.33 | **WIN** |
| 534 | CRWD | 09-29 14:00 | 09-29 14:45 | 488.41 | 486.96 | 28 | 13675.48 | -40.6 | -0.3% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 74.94 | ↓486.63 | 1.4939 | 2.13 | **LOSS** |
| 535 | SNOW | 09-29 14:00 | 09-29 15:15 | 228.49 | 228.6 | 61 | 13937.89 | +6.71 | +0.05% | 0.05R | 75m | market | breakeven-stop | trend | trend | neutral | 70.72 | ↑227.06 | 1.1204 | 1.13 | **WIN** |
| 536 | SMCI | 09-29 14:40 | 09-29 15:10 | 47.22 | 46.74 | 295 | 13929.9 | -141.6 | -1.02% | 0.7R | 30m | market | early-reversal | trend | trend | neutral | 68.64 | ↑46.6 | 0.3472 | 1.85 | **LOSS** |
| 537 | AMAT | 09-29 14:40 | 09-29 15:00 | 209.93 | 208.67 | 66 | 13855.38 | -83.16 | -0.6% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 75.25 | ↑207.58 | 1.1826 | 1.93 | **LOSS** |
| 538 | MDB | 09-29 15:00 | 09-29 16:45 | 317.86 | 318.24 | 44 | 13985.84 | +16.72 | +0.12% | 0.16R | 105m | market | timeout | trend | trend | neutral | 52.52 | ↑316.88 | 0.4923 | 1.3 | **WIN** |
| 539 | NVDA | 09-30 14:25 | 09-30 16:10 | 184.78 | 186.57 | 75 | 13858.5 | +134.25 | +0.97% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.72 | ↑183.64 | 0.7876 | 1.27 | **WIN** |
| 540 | AMD | 10-01 14:10 | 10-01 14:50 | 163.56 | 162.72 | 85 | 13902.6 | -71.4 | -0.51% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 65.95 | ↑162.31 | 0.6688 | 1.08 | **LOSS** |
| 541 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13975.73 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 542 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 16 | 13975.73 | +73.92 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 543 | LRCX | 10-01 14:10 | 10-01 14:55 | 134.68 | 136.01 | 51 | 13872.04 | +67.83 | +0.99% | 0.93R | 45m | market | trim-profit-target | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 544 | LRCX | 10-01 14:10 | 10-01 15:55 | 134.68 | 137.08 | 52 | 13872.04 | +124.8 | +1.78% | 1.66R | 105m | market | timeout | trend | trend | neutral | 62.56 | ↑133.41 | 0.3217 | 1.06 | **WIN** |
| 545 | COIN | 10-01 14:20 | 10-01 14:45 | 349.09 | 346.8 | 40 | 13963.6 | -91.6 | -0.66% | 0.39R | 25m | market | early-reversal | trend | trend | neutral | 74.66 | ↑345.34 | 3.8636 | 1.58 | **LOSS** |
| 546 | DDOG | 10-01 14:45 | 10-01 16:30 | 149.01 | 150.8 | 94 | 14006.94 | +168.26 | +1.2% | 1.03R | 105m | market | timeout | trend | trend | neutral | 70.2 | ↑147.76 | 2.1819 | 1.09 | **WIN** |
| 547 | LLY | 10-01 14:55 | 10-01 16:40 | 803.45 | 816.36 | 17 | 13658.65 | +219.47 | +1.61% | 1.29R | 105m | market | timeout | trend | trend | neutral | 72.52 | ↑792.74 | 10.7036 | 1.15 | **WIN** |
| 548 | META | 10-02 13:40 | 10-02 14:00 | 726.05 | 723.3 | 19 | 13794.95 | -52.25 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 549 | SBUX | 10-02 14:20 | 10-02 15:10 | 86.79 | 86.39 | 161 | 13973.19 | -64.4 | -0.46% | 0.39R | 50m | market | early-reversal | trend | trend | neutral | 79.02 | ↓86.08 | 0.5608 | 1.68 | **LOSS** |
| 550 | INTC | 10-02 15:15 | 10-02 16:50 | 36.5 | 37 | 105 | 7701.5 | +52.5 | +1.37% | 1.15R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 551 | INTC | 10-02 15:15 | 10-02 17:00 | 36.5 | 37.02 | 106 | 7701.5 | +55.12 | +1.42% | 1.19R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 552 | LLY | 10-03 14:15 | 10-03 15:15 | 831.8 | 838.82 | 9 | 15804.2 | +63.18 | +0.84% | 1.08R | 60m | market | trim-profit-target | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 553 | LLY | 10-03 14:15 | 10-03 16:00 | 831.8 | 837.33 | 10 | 15804.2 | +55.3 | +0.66% | 0.85R | 105m | market | timeout | trend | trend | cleanTrend | 71.26 | ↑824.4 | 1.9442 | 1.72 | **WIN** |
| 554 | NVO | 10-03 14:15 | 10-03 15:10 | 59.47 | 59.42 | 235 | 13975.45 | -11.75 | -0.08% | 0.09R | 55m | market | breakeven-stop | breakout | breakout | neutral | 66.19 | ↑58.84 | 0.0481 | 1.45 | **LOSS** |
| 555 | PYPL | 10-03 14:35 | 10-03 14:50 | 69.1 | 68.52 | 202 | 13958.2 | -117.16 | -0.84% | 0.77R | 15m | market | stop-loss | trend | trend | neutral | 52.45 | ↓68.47 | 0.0547 | 1.22 | **LOSS** |
| 556 | CAT | 10-03 14:35 | 10-03 15:20 | 501.62 | 499.46 | 27 | 13543.74 | -58.32 | -0.43% | 0.55R | 45m | market | early-reversal | trend | trend | neutral | 78.88 | ↑498.27 | 2.6344 | 2.3 | **LOSS** |
| 557 | TSM | 10-03 14:45 | 10-03 15:35 | 295.43 | 295.08 | 47 | 13885.21 | -16.45 | -0.12% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 63.62 | ↑292.97 | 1.7178 | 1.08 | **LOSS** |
| 558 | MU | 10-03 15:15 | 10-03 15:35 | 191.18 | 190.19 | 73 | 13956.14 | -72.27 | -0.52% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑188.7 | 1.7074 | 1.12 | **LOSS** |
| 559 | SNOW | 10-06 14:05 | 10-06 14:55 | 243.25 | 242.53 | 57 | 13865.25 | -41.04 | -0.3% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 70.27 | ↑241.93 | 1.8709 | 1.86 | **LOSS** |
| 560 | BA | 10-06 14:10 | 10-06 15:55 | 218.45 | 220.93 | 64 | 13980.8 | +158.72 | +1.14% | 1.37R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 561 | PYPL | 10-06 15:05 | 10-06 16:50 | 71 | 71.36 | 197 | 13987 | +70.92 | +0.51% | 0.56R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑70.41 | 0.4033 | 1.24 | **WIN** |
| 562 | ELF | 10-07 13:45 | 10-07 14:05 | 141.22 | 140.48 | 91 | 12851.02 | -67.34 | -0.52% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 68.01 | ↑139.72 | 0.482 | 1.29 | **LOSS** |
| 563 | IBM | 10-07 14:15 | 10-07 15:05 | 300.4 | 298.79 | 46 | 13818.4 | -74.06 | -0.54% | 0.37R | 50m | market | early-reversal | breakout | breakout | neutral | 76 | ↑298.13 | 2.255 | 1.12 | **LOSS** |
| 564 | UNH | 10-07 15:00 | 10-07 15:20 | 363.24 | 361.85 | 38 | 13803.12 | -52.82 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑360.44 | 0.5464 | 1.97 | **LOSS** |
| 565 | SNOW | 10-08 13:40 | 10-08 15:25 | 242.02 | 246.71 | 57 | 13795.14 | +267.33 | +1.94% | 2R | 105m | market | timeout | breakout | breakout | neutral | 72.69 | ↑239.9 | 0.9548 | 1.11 | **WIN** |
| 566 | NVO | 10-08 13:45 | 10-08 14:05 | 60.01 | 59.73 | 233 | 13982.33 | -65.24 | -0.47% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 74.82 | ↓59.72 | 0.1059 | 1.39 | **LOSS** |
| 567 | ORCL | 10-08 14:00 | 10-08 14:20 | 289.54 | 287.29 | 48 | 13897.92 | -108 | -0.78% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 568 | COIN | 10-08 14:25 | 10-08 14:45 | 385.32 | 382.84 | 36 | 13871.52 | -89.28 | -0.64% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 73.26 | ↑380.8 | 2.0391 | 2.03 | **LOSS** |
| 569 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.54 | 165.84 | 84 | 13989.36 | -58.8 | -0.42% | 0.3R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 570 | UNH | 10-08 14:30 | 10-08 15:20 | 372.72 | 371.22 | 37 | 13790.64 | -55.5 | -0.4% | 0.33R | 50m | market | early-reversal | breakout | breakout | neutral | 77.45 | ↑369.53 | 1.7674 | 1.51 | **LOSS** |
| 571 | TXN | 10-08 15:05 | 10-08 16:50 | 180.16 | 180.56 | 77 | 13872.32 | +30.8 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 78.46 | ↑178.6 | 0.619 | 1.85 | **WIN** |
| 572 | CELH | 10-08 15:10 | 10-08 16:55 | 62.26 | 62.51 | 222 | 13821.72 | +55.5 | +0.4% | 0.56R | 105m | market | timeout | trend | trend | neutral | 71.3 | ↑61.8 | 0.3568 | 1.52 | **WIN** |
| 573 | DELL | 10-08 15:20 | 10-08 15:40 | 164.41 | 162.52 | 46 | 7562.86 | -86.94 | -1.15% | 0.77R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 47.31 | ↑161.32 | 3.0318 | 1.09 | **LOSS** |
| 574 | ARM | 10-09 15:05 | 10-09 15:25 | 169.02 | 167.81 | 82 | 13859.64 | -99.22 | -0.72% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 69.25 | ↑164.84 | 1.1212 | 1.63 | **LOSS** |
| 575 | ORCL | 10-09 15:15 | 10-09 15:35 | 300.23 | 298.11 | 46 | 13810.58 | -97.52 | -0.71% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 69.43 | ↑293.64 | 2.5255 | 1.43 | **LOSS** |
| 576 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 577 | TXN | 10-10 14:35 | 10-10 14:55 | 181.27 | 179.83 | 77 | 13957.79 | -110.88 | -0.79% | 1.03R | 20m | market | stop-loss | trend | trend | neutral | 69.79 | ↓180.2 | 0.7573 | 1.05 | **LOSS** |
| 578 | AMAT | 10-10 14:35 | 10-10 14:55 | 224.04 | 222.38 | 62 | 13890.48 | -102.92 | -0.74% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 76.08 | ↓222.82 | 1.0299 | 1.85 | **LOSS** |
| 579 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 73 | 13866.35 | -137.24 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 580 | CRWD | 10-13 14:00 | 10-13 14:40 | 505.96 | 503.72 | 27 | 13660.92 | -60.48 | -0.44% | 0.45R | 40m | market | early-reversal | breakout | breakout | neutral | 71.4 | ↓504.12 | 1.8703 | 3.05 | **LOSS** |
| 581 | NOW | 10-13 14:00 | 10-13 16:00 | 910.59 | 914.27 | 15 | 13658.85 | +55.2 | +0.4% | 0.53R | 120m | market | timeout | trend | trend | neutral | 75.84 | ↑905.27 | 2.5542 | 1.21 | **WIN** |
| 582 | CVX | 10-13 14:00 | 10-13 14:20 | 151.21 | 150.57 | 92 | 13911.32 | -58.88 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 74.68 | ↑150.26 | 0.2203 | 1.29 | **LOSS** |
| 583 | AVGO | 10-13 14:05 | 10-13 14:25 | 358.31 | 353.5 | 19 | 6807.89 | -91.39 | -1.34% | 0.67R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 71.71 | ↑352.39 | 7.6795 | 1.28 | **LOSS** |
| 584 | META | 10-13 14:10 | 10-13 14:40 | 719.57 | 714.63 | 19 | 13671.83 | -93.86 | -0.69% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 70.9 | ↑713.65 | 1.5443 | 1.1 | **LOSS** |
| 585 | HD | 10-13 14:20 | 10-13 15:15 | 381.21 | 381.08 | 36 | 13723.56 | -4.68 | -0.03% | 0.04R | 55m | market | stagnation | trend | trend | neutral | 73.43 | ↑379.35 | 1.1319 | 1.02 | **LOSS** |
| 586 | RIVN | 10-13 14:30 | 10-13 14:55 | 13.08 | 13 | 1074 | 14047.92 | -85.92 | -0.61% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 55.22 | ↑12.96 | 0.0376 | 4.35 | **LOSS** |
| 587 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.74 | 422.06 | 32 | 13719.68 | -213.76 | -1.56% | 0.98R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 588 | QCOM | 10-13 15:00 | 10-13 16:45 | 160.28 | 161.09 | 87 | 13944.36 | +70.47 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 73.94 | ↑158.48 | 1.1807 | 1.34 | **WIN** |
| 589 | SBUX | 10-13 15:20 | 10-13 17:05 | 79.63 | 80.34 | 176 | 14014.88 | +124.96 | +0.89% | 1.27R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑78.95 | 0.1677 | 1.42 | **WIN** |
| 590 | ABNB | 10-14 14:05 | 10-14 15:15 | 120.69 | 122.26 | 58 | 14000.04 | +91.06 | +1.3% | 1.65R | 70m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 591 | ABNB | 10-14 14:05 | 10-14 15:50 | 120.69 | 123.35 | 58 | 14000.04 | +154.28 | +2.2% | 2.78R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑119.46 | 0.1706 | 1.74 | **WIN** |
| 592 | LOW | 10-14 14:15 | 10-14 16:00 | 237.26 | 238.5 | 58 | 13761.08 | +71.92 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 76.61 | ↑235.64 | 0.514 | 1.1 | **WIN** |
| 593 | PLTR | 10-14 14:25 | 10-14 15:55 | 178.37 | 178.38 | 78 | 13912.86 | +0.78 | +0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 55.43 | ↑174.39 | -0.2396 | 1.3 | **WIN** |
| 594 | WMT | 10-14 14:30 | 10-14 15:20 | 105.01 | 104.95 | 133 | 13966.33 | -7.98 | -0.06% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 64.76 | ↑104.03 | 0.7487 | 1.82 | **LOSS** |
| 595 | BAC | 10-14 14:40 | 10-14 16:25 | 49.84 | 50.1 | 280 | 13955.2 | +72.8 | +0.52% | 0.49R | 105m | market | timeout | trend | trend | neutral | 70.2 | ↑49.1 | 0.1676 | 1.36 | **WIN** |
| 596 | TGT | 10-14 15:05 | 10-14 16:00 | 88.78 | 88.7 | 158 | 14027.24 | -12.64 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 71.23 | ↑87.83 | 0.3663 | 1.07 | **LOSS** |
| 597 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.88 | 248.79 | 56 | 13937.28 | -5.04 | -0.04% | 0.04R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 598 | AAPL | 10-15 14:00 | 10-15 14:25 | 251.76 | 250.78 | 63 | 15860.88 | -61.74 | -0.39% | 0.43R | 25m | market | early-reversal | trend | trend | cleanTrend | 75.12 | ↑249.86 | 0.7842 | 1.14 | **LOSS** |
| 599 | LRCX | 10-15 14:00 | 10-15 14:50 | 144.19 | 143.55 | 97 | 13986.43 | -62.08 | -0.44% | 0.24R | 50m | market | early-reversal | trend | trend | neutral | 67.73 | ↓143.32 | 0.7586 | 1.18 | **LOSS** |
| 600 | HPE | 10-15 14:00 | 10-15 14:50 | 25.76 | 25.67 | 542 | 13961.92 | -48.78 | -0.35% | 0.24R | 50m | market | stagnation | breakout | breakout | neutral | 67.49 | ↓25.51 | 0.0925 | 1.16 | **LOSS** |
| 601 | SBUX | 10-15 14:00 | 10-15 15:30 | 82.69 | 82.7 | 169 | 13974.61 | +1.69 | +0.01% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 77.12 | ↑82.22 | 0.2984 | 1.07 | **WIN** |
| 602 | TGT | 10-15 14:00 | 10-15 15:10 | 90.92 | 90.87 | 154 | 14001.68 | -7.7 | -0.05% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 79.92 | ↑90.36 | 0.4165 | 1.06 | **LOSS** |
| 603 | SMCI | 10-15 14:25 | 10-15 14:45 | 55.03 | 54.62 | 139 | 7649.17 | -56.99 | -0.75% | 0.4R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.54 | ↑54.52 | 0.1897 | 1.5 | **LOSS** |
| 604 | KLAC | 10-15 15:15 | 10-15 15:45 | 1090.96 | 1082.18 | 12 | 13091.52 | -105.36 | -0.8% | 1.07R | 30m | market | stop-loss | trend | trend | neutral | 79.64 | ↑1076.68 | 14.1284 | 1.15 | **LOSS** |
| 605 | ADBE | 10-16 13:35 | 10-16 13:45 | 335.53 | 332.78 | 41 | 13756.73 | -112.75 | -0.82% | 1.17R | 10m | market | stop-loss | breakout | breakout | neutral | 86.58 | ↓334.81 | 0.4785 | 1.41 | **LOSS** |
| 606 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 204 | 7727.52 | -77.52 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 607 | CELH | 10-16 14:45 | 10-16 15:45 | 66.18 | 66.03 | 209 | 13831.62 | -31.35 | -0.23% | 0.16R | 60m | market | stagnation | trend | trend | neutral | 79.71 | ↑65.3 | 0.773 | 1.6 | **LOSS** |
| 608 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 609 | MRVL | 10-17 14:25 | 10-17 14:45 | 88.84 | 87.95 | 87 | 7729.08 | -77.43 | -1% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 55.9 | ↑87.65 | 0.1755 | 1.09 | **LOSS** |
| 610 | SBUX | 10-17 15:00 | 10-17 16:45 | 85.16 | 85.61 | 164 | 13966.24 | +73.8 | +0.53% | 0.7R | 105m | market | timeout | trend | trend | neutral | 59.03 | ↑84.66 | 0.1425 | 1.41 | **WIN** |
| 611 | BAC | 10-17 15:05 | 10-17 15:25 | 51.48 | 51.27 | 272 | 14002.56 | -57.12 | -0.41% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 72.33 | ↑51.04 | 0.2019 | 2.49 | **LOSS** |
| 612 | IBM | 10-20 14:10 | 10-20 14:30 | 285.31 | 283.81 | 49 | 13980.19 | -73.5 | -0.53% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 71.05 | ↓283.73 | 0.9442 | 1.48 | **LOSS** |
| 613 | NVDA | 10-20 14:25 | 10-20 14:45 | 184.98 | 183.91 | 75 | 13873.5 | -80.25 | -0.58% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 614 | AMD | 10-20 14:30 | 10-20 15:20 | 241.53 | 240.89 | 57 | 13767.21 | -36.48 | -0.26% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 63.44 | ↑238.52 | 1.8937 | 1.59 | **LOSS** |
| 615 | BAC | 10-20 14:30 | 10-20 16:15 | 52.02 | 52.03 | 269 | 13993.38 | +2.69 | +0.02% | 0.02R | 105m | market | timeout | trend | trend | neutral | 71.17 | ↑51.77 | 0.1029 | 1.36 | **WIN** |
| 616 | COIN | 10-20 14:35 | 10-20 15:25 | 349.16 | 352.78 | 10 | 7332.36 | +36.2 | +1.04% | 0.7R | 50m | market | trim-profit-target | trend | trend | noisyHighBeta | 58.31 | ↑345.9 | 4.2537 | 1.44 | **WIN** |
| 617 | COIN | 10-20 14:35 | 10-20 16:00 | 349.16 | 349.38 | 11 | 7332.36 | +2.42 | +0.06% | 0.04R | 85m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.31 | ↑345.9 | 4.2537 | 1.44 | **WIN** |
| 618 | AMAT | 10-20 14:40 | 10-20 15:25 | 230.9 | 230.03 | 60 | 13854 | -52.2 | -0.38% | 0.54R | 45m | market | early-reversal | trend | trend | neutral | 73.49 | ↑229.43 | 1.4729 | 1.97 | **LOSS** |
| 619 | TSM | 10-20 14:55 | 10-20 15:20 | 303.59 | 302.73 | 46 | 13965.14 | -39.56 | -0.28% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 70.38 | ↑301.77 | 1.5315 | 1.05 | **LOSS** |
| 620 | CRM | 10-21 14:20 | 10-21 16:05 | 260.38 | 263.19 | 53 | 13800.14 | +148.93 | +1.08% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 80.72 | ↑257.62 | 1.2409 | 1.18 | **WIN** |
| 621 | SNOW | 10-23 14:00 | 10-23 14:55 | 249.69 | 249.32 | 56 | 13982.64 | -20.72 | -0.15% | 0.13R | 55m | market | stagnation | breakout | trend | neutral | 77.86 | ↑247.48 | 2.2908 | 1.25 | **LOSS** |
| 622 | RIVN | 10-23 14:20 | 10-23 15:10 | 13.04 | 13.02 | 1077 | 14044.08 | -21.54 | -0.15% | 0.09R | 50m | market | stagnation | trend | breakout | neutral | 55.73 | ↑12.89 | 0.0181 | 1.21 | **LOSS** |
| 623 | CRWD | 10-23 14:35 | 10-23 15:25 | 517.78 | 517.46 | 26 | 13462.28 | -8.32 | -0.06% | 0.03R | 50m | market | stagnation | trend | trend | neutral | 72.51 | ↑514.96 | 5.4162 | 1.1 | **LOSS** |
| 624 | CELH | 10-24 13:45 | 10-24 14:05 | 63.58 | 63.07 | 218 | 13860.44 | -111.18 | -0.8% | 0.96R | 20m | market | early-reversal | breakout | breakout | neutral | 72.73 | ↓63.33 | -0.0025 | 1.1 | **LOSS** |
| 625 | SHOP | 10-24 14:00 | 10-24 14:45 | 173.1 | 172.36 | 80 | 13848 | -59.2 | -0.43% | 0.31R | 45m | market | early-reversal | breakout | breakout | neutral | 76.93 | ↑171.31 | 1.4345 | 1.27 | **LOSS** |
| 626 | LLY | 10-24 14:05 | 10-24 14:25 | 831.68 | 828.45 | 16 | 13306.88 | -51.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | trend | neutral | 73.64 | ↑823.63 | 1.3329 | 1.06 | **LOSS** |
| 627 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 165 | 13988.7 | -8.25 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 628 | GE | 10-24 14:15 | 10-24 14:35 | 309.79 | 308.43 | 45 | 13940.55 | -61.2 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 69.92 | ↓308.52 | 0.9026 | 1.35 | **LOSS** |
| 629 | AMD | 10-24 14:35 | 10-24 15:00 | 252.75 | 251.02 | 55 | 13901.25 | -95.15 | -0.68% | 0.34R | 25m | market | early-reversal | breakout | trend | neutral | 77.29 | ↑249.38 | 4.524 | 1.03 | **LOSS** |
| 630 | AAPL | 10-24 14:45 | 10-24 16:30 | 262.18 | 263.16 | 53 | 13895.54 | +51.94 | +0.37% | 0.53R | 105m | market | timeout | trend | trend | neutral | 74.48 | ↑260.66 | 0.4667 | 1.06 | **WIN** |
| 631 | AVGO | 10-24 15:20 | 10-24 16:15 | 356.62 | 356.03 | 39 | 13908.18 | -23.01 | -0.17% | 0.24R | 55m | market | stagnation | trend | trend | neutral | 63.26 | ↑353.44 | 1.7265 | 1.43 | **LOSS** |
| 632 | BA | 10-24 15:20 | 10-24 16:10 | 221.61 | 221.42 | 63 | 13961.43 | -11.97 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.98 | ↑220.23 | 0.7466 | 1.32 | **LOSS** |
| 633 | ABNB | 10-24 15:25 | 10-24 15:45 | 128.84 | 128.4 | 109 | 14043.56 | -47.96 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.74 | ↑128.23 | 0.2478 | 1.41 | **LOSS** |
| 634 | SBUX | 10-27 14:00 | 10-27 14:20 | 87.35 | 87.04 | 160 | 13976 | -49.6 | -0.35% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 74.79 | ↑86.66 | 0.1516 | 1.16 | **LOSS** |
| 635 | MDB | 10-27 14:05 | 10-27 14:30 | 346.02 | 340.28 | 40 | 13840.8 | -229.6 | -1.66% | 1.78R | 25m | market | stop-loss | trend | trend | neutral | 78.59 | ↓343.36 | 1.0255 | 2.54 | **LOSS** |
| 636 | ARM | 10-27 14:20 | 10-27 14:35 | 177.28 | 180.22 | 79 | 14005.12 | +232.26 | +1.66% | 0.95R | 15m | market | trailing-stop | trend | trend | neutral | 74.37 | ↑176.02 | 1.2808 | 1.8 | **WIN** |
| 637 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 159 | 13993.59 | +44.52 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 638 | HPE | 10-27 15:10 | 10-27 15:30 | 24.18 | 23.92 | 577 | 13951.86 | -150.02 | -1.08% | 0.98R | 20m | market | early-reversal | breakout | breakout | neutral | 66.88 | ↓23.98 | 0.1198 | 3.39 | **LOSS** |
| 639 | AMD | 10-28 14:00 | 10-28 14:25 | 263.91 | 262.49 | 52 | 13723.32 | -73.84 | -0.54% | 0.41R | 25m | market | early-reversal | breakout | breakout | neutral | 74.65 | ↑260.55 | 1.5104 | 1.11 | **LOSS** |
| 640 | PYPL | 10-28 14:20 | 10-28 14:40 | 78.99 | 77.77 | 89 | 7030.11 | -108.58 | -1.54% | 0.77R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 71.39 | ↑76.96 | 2.105 | 1.03 | **LOSS** |
| 641 | SNOW | 10-28 15:05 | 10-28 15:25 | 270.18 | 269.28 | 51 | 13779.18 | -45.9 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑267.78 | 0.7228 | 1.84 | **LOSS** |
| 642 | INTC | 10-28 15:15 | 10-28 16:55 | 41.54 | 42.14 | 93 | 7726.44 | +55.8 | +1.44% | 0.95R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 643 | INTC | 10-28 15:15 | 10-28 17:00 | 41.54 | 42.16 | 93 | 7726.44 | +57.66 | +1.49% | 0.98R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 644 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.82 | 271.79 | 51 | 13811.82 | +49.47 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 645 | NOW | 10-30 14:00 | 10-30 14:50 | 948.77 | 943.95 | 14 | 13282.78 | -67.48 | -0.51% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 75.07 | ↑927.98 | 4.2503 | 1.69 | **LOSS** |
| 646 | NET | 10-30 14:00 | 10-30 14:30 | 229.43 | 228.31 | 61 | 13995.23 | -68.32 | -0.49% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 63.97 | ↓228.04 | 0.5641 | 1.83 | **LOSS** |
| 647 | MDB | 10-30 14:00 | 10-30 14:20 | 351.03 | 347.34 | 39 | 13690.17 | -143.91 | -1.05% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 74.71 | ↓346.29 | 2.0383 | 2.13 | **LOSS** |
| 648 | PANW | 10-30 15:20 | 10-30 15:40 | 221.22 | 220.32 | 63 | 13936.86 | -56.7 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 56.6 | ↑219.56 | 0.814 | 1.02 | **LOSS** |
| 649 | NET | 10-30 15:20 | 10-30 15:40 | 230.99 | 229.88 | 60 | 13859.4 | -66.6 | -0.48% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 63.56 | ↑228.6 | 0.8422 | 1.1 | **LOSS** |
| 650 | MDB | 10-30 15:20 | 10-30 15:30 | 355.26 | 351.64 | 39 | 13855.14 | -141.18 | -1.02% | 1.21R | 10m | market | stop-loss | trend | trend | neutral | 61.83 | ↑349.52 | 3.7156 | 1.81 | **LOSS** |
| 651 | INTU | 10-31 14:00 | 10-31 14:20 | 665.51 | 663.04 | 21 | 13975.71 | -51.87 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑661.19 | 0.1938 | 2.54 | **LOSS** |
| 652 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.14 | 455.29 | 15 | 13564.2 | +47.25 | +0.7% | 0.54R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 653 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.14 | 454.34 | 15 | 13564.2 | +33 | +0.49% | 0.38R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 654 | CVX | 10-31 14:05 | 10-31 14:25 | 158.73 | 157.62 | 88 | 13968.24 | -97.68 | -0.7% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 78.66 | ↓157.51 | 1.0483 | 1.01 | **LOSS** |
| 655 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.34 | 95.78 | 146 | 14065.64 | -81.76 | -0.58% | 0.29R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 656 | DDOG | 10-31 14:45 | 10-31 15:05 | 162.86 | 162.05 | 86 | 14005.96 | -69.66 | -0.5% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 71.44 | ↑161.57 | 1.218 | 1.59 | **LOSS** |
| 657 | ORCL | 10-31 15:05 | 10-31 15:25 | 265.28 | 262.27 | 52 | 13794.56 | -156.52 | -1.13% | 1.09R | 20m | market | stop-loss | trend | trend | neutral | 72.41 | ↑261.99 | 1.4291 | 1.3 | **LOSS** |
| 658 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.5 | 207.33 | 67 | 13969.5 | -78.39 | -0.56% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 659 | AMZN | 11-03 14:30 | 11-03 14:50 | 258.39 | 254.84 | 54 | 13953.06 | -191.7 | -1.37% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 76.99 | ↓257.17 | 2.7097 | 5.92 | **LOSS** |
| 660 | MSFT | 11-03 14:30 | 11-03 15:15 | 522.28 | 520.04 | 26 | 13579.28 | -58.24 | -0.43% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 64.19 | ↓521.9 | 0.2996 | 3.01 | **LOSS** |
| 661 | UBER | 11-03 14:30 | 11-03 15:00 | 97.91 | 97.53 | 142 | 13903.22 | -53.96 | -0.39% | 0.56R | 30m | market | early-reversal | breakout | breakout | neutral | 78.2 | ↓97.66 | 0.2553 | 1.69 | **LOSS** |
| 662 | BA | 11-03 14:30 | 11-03 16:15 | 202.59 | 204.88 | 69 | 13978.71 | +158.01 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 663 | LLY | 11-03 14:30 | 11-03 15:20 | 879.13 | 875.99 | 14 | 12307.82 | -43.96 | -0.36% | 0.45R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 664 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 149 | 13994.08 | -163.9 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 665 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.35 | 203.93 | 68 | 13963.8 | -96.56 | -0.69% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 666 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 55 | 14062.4 | -97.9 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 667 | PYPL | 11-03 14:35 | 11-03 14:50 | 69.84 | 68.94 | 200 | 13968 | -180 | -1.29% | 1.74R | 15m | market | stop-loss | trend | trend | neutral | 64.97 | ↓69.76 | 0.2984 | 1.18 | **LOSS** |
| 668 | ASML | 11-03 14:45 | 11-03 15:40 | 1068.74 | 1068.35 | 13 | 13893.62 | -5.07 | -0.04% | 0.06R | 55m | market | stagnation | trend | trend | neutral | 65.33 | ↓1066.72 | 2.4972 | 1.64 | **LOSS** |
| 669 | SMCI | 11-03 14:45 | 11-03 15:15 | 52.62 | 52.21 | 243 | 12786.66 | -99.63 | -0.78% | 0.55R | 30m | market | early-reversal | breakout | trend | neutral | 79.6 | ↓52.43 | 0.262 | 1.12 | **LOSS** |
| 670 | AVGO | 11-04 14:55 | 11-04 15:45 | 366.14 | 365.03 | 38 | 13913.32 | -42.18 | -0.3% | 0.21R | 50m | market | stagnation | breakout | breakout | neutral | 56.55 | ↑362.68 | -0.1898 | 4.32 | **LOSS** |
| 671 | GS | 11-04 15:05 | 11-04 16:10 | 795.41 | 795.9 | 17 | 13521.97 | +8.33 | +0.06% | 0.07R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 672 | LLY | 11-04 15:25 | 11-04 15:40 | 913.18 | 897.83 | 14 | 12784.52 | -214.9 | -1.68% | 1.17R | 15m | market | stop-loss | breakout | breakout | neutral | 65.69 | ↓895.05 | 0.2443 | 1.78 | **LOSS** |
| 673 | NVO | 11-04 15:25 | 11-04 15:45 | 49.21 | 48.82 | 284 | 13975.64 | -110.76 | -0.79% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 51.88 | ↓48.63 | -0.1481 | 2.41 | **LOSS** |
| 674 | AMAT | 11-05 14:30 | 11-05 16:15 | 235.24 | 237.98 | 55 | 12938.2 | +150.7 | +1.16% | 1.18R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑233.51 | -0.3934 | 1.8 | **WIN** |
| 675 | LRCX | 11-05 14:30 | 11-05 16:15 | 159.76 | 161.75 | 80 | 12780.8 | +159.2 | +1.25% | 1.16R | 105m | market | timeout | breakout | breakout | neutral | 69.67 | ↑159.05 | -0.2161 | 1.41 | **WIN** |
| 676 | SBUX | 11-05 14:35 | 11-05 15:00 | 79.8 | 79.29 | 175 | 13965 | -89.25 | -0.64% | 0.65R | 25m | market | early-reversal | trend | trend | neutral | 78.79 | ↓79.73 | 0.3476 | 1.94 | **LOSS** |
| 677 | MCD | 11-05 14:40 | 11-05 15:30 | 307.79 | 306.6 | 45 | 13850.55 | -53.55 | -0.39% | 0.25R | 50m | market | stagnation | breakout | breakout | neutral | 76.23 | ↓305.84 | 2.0202 | 1.75 | **LOSS** |
| 678 | CAT | 11-05 14:45 | 11-05 16:10 | 559.91 | 559.16 | 24 | 13437.84 | -18 | -0.13% | 0.13R | 85m | market | breakeven-stop | breakout | breakout | neutral | 82.94 | ↓555.89 | 1.2443 | 1.27 | **LOSS** |
| 679 | GOOGL | 11-05 14:50 | 11-05 16:10 | 282.47 | 282.53 | 49 | 13841.03 | +2.94 | +0.02% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | neutral | 75.59 | ↑279.55 | 0.6978 | 1.13 | **WIN** |
| 680 | LLY | 11-05 15:20 | 11-05 16:05 | 933.28 | 944.63 | 7 | 13999.2 | +79.45 | +1.22% | 0.93R | 45m | market | trim-profit-target | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 681 | LLY | 11-05 15:20 | 11-05 17:05 | 933.28 | 952.93 | 8 | 13999.2 | +157.2 | +2.11% | 1.61R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑929.31 | 8.3812 | 1.06 | **WIN** |
| 682 | SBUX | 11-07 14:35 | 11-07 16:20 | 83.42 | 84.72 | 154 | 12846.68 | +200.2 | +1.56% | 1.84R | 105m | market | timeout | breakout | breakout | neutral | 71.01 | ↑82.66 | 0.0289 | 1.34 | **WIN** |
| 683 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 371 | 14083.16 | -122.43 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 684 | AAPL | 11-10 14:30 | 11-10 15:35 | 271.59 | 271.17 | 51 | 13851.09 | -21.42 | -0.15% | 0.21R | 65m | market | breakeven-stop | breakout | breakout | neutral | 80.22 | ↓270.77 | 0.4078 | 1.35 | **LOSS** |
| 685 | NFLX | 11-10 14:30 | 11-10 16:00 | 1118.89 | 1118.22 | 12 | 13426.68 | -8.04 | -0.06% | 0.09R | 90m | market | breakeven-stop | breakout | breakout | neutral | 80.29 | ↓1113.99 | 3.63 | 1.25 | **LOSS** |
| 686 | PANW | 11-10 14:30 | 11-10 14:50 | 214.63 | 213.58 | 65 | 13950.95 | -68.25 | -0.49% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 687 | BAC | 11-10 14:30 | 11-10 14:50 | 53.88 | 53.62 | 259 | 13954.92 | -67.34 | -0.48% | 0.69R | 20m | market | early-reversal | breakout | breakout | neutral | 68.2 | ↓53.76 | 0.0305 | 1.27 | **LOSS** |
| 688 | META | 11-10 14:35 | 11-10 15:50 | 628.59 | 628.81 | 22 | 13828.98 | +4.84 | +0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **WIN** |
| 689 | QCOM | 11-10 14:40 | 11-10 15:00 | 173.45 | 171.95 | 80 | 13876 | -120 | -0.86% | 0.83R | 20m | market | early-reversal | breakout | trend | neutral | 76.44 | ↓173.57 | 0.9063 | 1.48 | **LOSS** |
| 690 | KLAC | 11-10 14:40 | 11-10 15:05 | 1223.57 | 1214.94 | 10 | 12235.7 | -86.3 | -0.71% | 0.61R | 25m | market | early-reversal | breakout | trend | neutral | 74.84 | ↓1221.2 | 7.5413 | 1.07 | **LOSS** |
| 691 | TSLA | 11-10 14:55 | 11-10 16:25 | 439.35 | 446.85 | 8 | 7468.95 | +60 | +1.71% | 1.14R | 90m | market | trim-profit-target | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 692 | TSLA | 11-10 14:55 | 11-10 16:40 | 439.35 | 446.41 | 9 | 7468.95 | +63.54 | +1.61% | 1.07R | 105m | market | timeout | trend | trend | noisyHighBeta | 74.29 | ↑437.43 | 0.764 | 1.14 | **WIN** |
| 693 | RIVN | 11-10 15:05 | 11-10 16:45 | 15.29 | 15.87 | 505 | 7721.45 | +292.9 | +3.79% | 1.9R | 100m | market | profit-target | trend | trend | noisyHighBeta | 48.26 | ↑15.22 | 0.0622 | 1.09 | **WIN** |
| 694 | ASML | 11-10 15:25 | 11-10 15:50 | 1034.92 | 1026.95 | 13 | 13453.96 | -103.61 | -0.77% | 0.82R | 25m | market | stop-loss | trend | trend | neutral | 71.52 | ↓1031.84 | 6.0405 | 1.51 | **LOSS** |
| 695 | NOW | 11-10 15:25 | 11-10 15:45 | 865.92 | 861.28 | 16 | 13854.72 | -74.24 | -0.54% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↑861.35 | 1.8126 | 1.15 | **LOSS** |
| 696 | SBUX | 11-11 14:30 | 11-11 16:15 | 85.41 | 86.69 | 164 | 14007.24 | +209.92 | +1.5% | 2.14R | 105m | market | timeout | trend | trend | neutral | 65.95 | ↑85.42 | 0.1195 | 1.12 | **WIN** |
| 697 | QCOM | 11-11 14:35 | 11-11 16:05 | 173.56 | 173.22 | 80 | 13884.8 | -27.2 | -0.2% | 0.29R | 90m | market | breakeven-stop | breakout | breakout | neutral | 77.51 | ↓172.92 | 0.4108 | 1.33 | **LOSS** |
| 698 | ADBE | 11-11 14:45 | 11-11 15:45 | 332.21 | 331.32 | 42 | 13952.82 | -37.38 | -0.27% | 0.39R | 60m | market | stagnation | trend | trend | neutral | 72.56 | ↓331.28 | 0.8535 | 1.53 | **LOSS** |
| 699 | LOW | 11-11 14:50 | 11-11 15:10 | 235.43 | 233.82 | 59 | 13890.37 | -94.99 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 62.79 | ↓234.97 | 0.7323 | 1.03 | **LOSS** |
| 700 | TXN | 11-11 15:00 | 11-11 15:50 | 161.72 | 161.29 | 85 | 13746.2 | -36.55 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 76.74 | ↓161.04 | 0.4419 | 1.75 | **LOSS** |
| 701 | ABNB | 11-11 15:20 | 11-11 17:05 | 122.18 | 122.79 | 115 | 14050.7 | +70.15 | +0.5% | 0.56R | 105m | market | timeout | trend | trend | neutral | 77.03 | ↑121.24 | 0.4843 | 2 | **WIN** |
| 702 | CRM | 11-12 14:30 | 11-12 15:00 | 247.8 | 246.24 | 52 | 12885.6 | -81.12 | -0.63% | 0.9R | 30m | market | early-reversal | trend | trend | neutral | 71.38 | ↓247.15 | 0.3776 | 1.43 | **LOSS** |
| 703 | JPM | 11-12 14:35 | 11-12 16:20 | 320.62 | 320.55 | 43 | 13786.66 | -3.01 | -0.02% | 0.03R | 105m | market | timeout | breakout | breakout | neutral | 74.44 | ↓318.84 | 0.2818 | 2 | **LOSS** |
| 704 | BAC | 11-12 14:35 | 11-12 16:20 | 54.34 | 54.44 | 257 | 13965.38 | +25.7 | +0.18% | 0.26R | 105m | market | timeout | breakout | breakout | neutral | 78.1 | ↓54.09 | 0.027 | 1.22 | **WIN** |
| 705 | LLY | 11-12 14:35 | 11-12 15:20 | 1009.88 | 1004.61 | 13 | 13128.44 | -68.51 | -0.52% | 0.74R | 45m | market | early-reversal | breakout | breakout | neutral | 84.12 | ↓1004.3 | 1.7316 | 1.33 | **LOSS** |
| 706 | DELL | 11-12 14:40 | 11-12 16:25 | 141.55 | 142.31 | 98 | 13871.9 | +74.48 | +0.54% | 0.56R | 105m | market | timeout | breakout | breakout | neutral | 62.78 | ↑140.42 | -0.0264 | 1.13 | **WIN** |
| 707 | AMD | 11-12 15:00 | 11-12 15:45 | 255.26 | 261.26 | 13 | 6892.02 | +78 | +2.35% | 1.18R | 45m | market | trim-profit-target | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 708 | AMD | 11-12 15:00 | 11-12 15:55 | 255.26 | 258.72 | 14 | 6892.02 | +48.44 | +1.36% | 0.68R | 55m | market | trailing-stop | trend | trend | noisyHighBeta | 69.02 | ↑254.34 | 3.7794 | 1.68 | **WIN** |
| 709 | QCOM | 11-12 15:00 | 11-12 15:20 | 176.83 | 175.77 | 79 | 13969.57 | -83.74 | -0.6% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 74.13 | ↓176.35 | 0.6498 | 2.31 | **LOSS** |
| 710 | LRCX | 11-12 15:05 | 11-12 15:25 | 161.17 | 159.68 | 87 | 14021.79 | -129.63 | -0.92% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 67.29 | ↓160.56 | 0.2963 | 1.2 | **LOSS** |
| 711 | MU | 11-13 14:30 | 11-13 14:40 | 246.92 | 238.97 | 56 | 13827.52 | -445.2 | -3.22% | 3.79R | 10m | market | stop-loss | breakout | trend | neutral | 69.78 | ↓245.61 | 0.1631 | 5.26 | **LOSS** |
| 712 | ABNB | 11-13 14:30 | 11-13 14:50 | 122.92 | 122.32 | 114 | 14012.88 | -68.4 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓122.55 | 0.1176 | 1.18 | **LOSS** |
| 713 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.12 | 189.92 | 75 | 13959 | +285 | +2.04% | 1.28R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 714 | AVGO | 11-14 14:50 | 11-14 15:10 | 337.73 | 335.17 | 41 | 13846.93 | -104.96 | -0.76% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 45.85 | ↑334 | -0.8612 | 1.66 | **LOSS** |
| 715 | MRVL | 11-14 14:55 | 11-14 15:15 | 88.26 | 87.18 | 159 | 14033.34 | -171.72 | -1.22% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 62.24 | ↑86 | 0.2286 | 1.2 | **LOSS** |
| 716 | ORCL | 11-14 15:05 | 11-14 16:25 | 218.29 | 223.73 | 64 | 13970.56 | +348.16 | +2.49% | 1.25R | 80m | market | profit-target | breakout | breakout | neutral | 51.85 | ↑214.55 | -0.1836 | 1.14 | **WIN** |
| 717 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 35 | 14003.85 | +333.55 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 718 | ARM | 11-17 14:30 | 11-17 15:05 | 142.9 | 141.35 | 90 | 12861 | -139.5 | -1.08% | 1.01R | 35m | market | early-reversal | breakout | breakout | neutral | 65.57 | ↓141.94 | 0.0466 | 4.93 | **LOSS** |
| 719 | ASML | 11-17 14:30 | 11-17 16:05 | 1017.07 | 1017.28 | 13 | 13221.91 | +2.73 | +0.02% | 0.03R | 95m | market | breakeven-stop | trend | breakout | neutral | 69.98 | ↓1013.35 | 0.2463 | 2.9 | **WIN** |
| 720 | SBUX | 11-17 14:35 | 11-17 14:55 | 86.58 | 85.93 | 162 | 14025.96 | -105.3 | -0.75% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 75.58 | ↓86.05 | 0.3247 | 1.27 | **LOSS** |
| 721 | ELF | 11-17 14:35 | 11-17 15:35 | 74.98 | 75.29 | 172 | 12896.56 | +53.32 | +0.41% | 0.32R | 60m | market | trailing-stop | breakout | breakout | neutral | 62.31 | ↑73.84 | -0.2168 | 1.73 | **WIN** |
| 722 | GOOGL | 11-17 14:45 | 11-17 15:05 | 292.55 | 289.7 | 48 | 14042.4 | -136.8 | -0.97% | 0.55R | 20m | market | early-reversal | breakout | breakout | neutral | 81.5 | ↓290.22 | 3.7071 | 1.98 | **LOSS** |
| 723 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 34 | 14060.7 | +202.98 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 724 | INTU | 11-18 14:45 | 11-18 15:05 | 656.58 | 652.16 | 21 | 13788.18 | -92.82 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 71.13 | ↓654.94 | 1.7238 | 2.41 | **LOSS** |
| 725 | GOOGL | 11-19 14:30 | 11-19 14:55 | 292.52 | 300.38 | 44 | 12870.88 | +345.84 | +2.69% | 2.47R | 25m | market | profit-target | breakout | breakout | neutral | 67.68 | ↑290.78 | 0.049 | 5.16 | **WIN** |
| 726 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 97 | 13902.04 | +147.44 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 727 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 403 | 14064.7 | +64.48 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 728 | CAT | 11-19 14:45 | 11-19 15:50 | 556.27 | 555.94 | 25 | 13906.75 | -8.25 | -0.06% | 0.09R | 65m | market | stagnation | breakout | breakout | neutral | 71.25 | ↓552.77 | 0.8768 | 1.71 | **LOSS** |
| 729 | NVO | 11-19 14:45 | 11-19 15:35 | 48.41 | 48.33 | 289 | 13990.49 | -23.12 | -0.17% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 68.73 | ↓48.23 | 0.0771 | 1.21 | **LOSS** |
| 730 | TSM | 11-19 14:50 | 11-19 16:00 | 281.68 | 281.58 | 49 | 13802.32 | -4.9 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓279.69 | 0.3004 | 1.73 | **LOSS** |
| 731 | ORCL | 11-19 15:00 | 11-19 15:40 | 228.07 | 224.87 | 56 | 12771.92 | -179.2 | -1.4% | 0.75R | 40m | market | early-reversal | breakout | breakout | neutral | 68.66 | ↓223.69 | 0.7165 | 1.8 | **LOSS** |
| 732 | AAPL | 11-19 15:10 | 11-19 15:55 | 271.21 | 270.28 | 51 | 13831.71 | -47.43 | -0.34% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 71.19 | ↑269.24 | 0.6054 | 1 | **LOSS** |
| 733 | JPM | 11-19 15:10 | 11-19 15:30 | 304.16 | 302.72 | 46 | 13991.36 | -66.24 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.8 | ↓303.2 | 0.7662 | 2.85 | **LOSS** |
| 734 | TSLA | 11-19 15:15 | 11-19 15:45 | 410.45 | 406.91 | 18 | 7388.1 | -63.72 | -0.86% | 0.5R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↓406.75 | 1.7263 | 1.09 | **LOSS** |
| 735 | AAPL | 11-20 14:30 | 11-20 16:05 | 272.63 | 272.72 | 51 | 13904.13 | +4.59 | +0.03% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 69.09 | ↓272.4 | 0.0598 | 3.59 | **WIN** |
| 736 | PLTR | 11-20 14:30 | 11-20 15:05 | 173.31 | 170.89 | 44 | 7625.64 | -106.48 | -1.4% | 0.74R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 78.02 | ↓172.89 | 2.1297 | 2.13 | **LOSS** |
| 737 | TGT | 11-20 14:30 | 11-20 14:50 | 86.83 | 86.17 | 162 | 14066.46 | -106.92 | -0.76% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 738 | CELH | 11-20 14:30 | 11-20 14:50 | 42.22 | 41.49 | 302 | 12750.44 | -220.46 | -1.73% | 1.23R | 20m | market | early-reversal | breakout | breakout | neutral | 68.15 | ↓42.2 | 0.0388 | 1.62 | **LOSS** |
| 739 | TXN | 11-20 14:35 | 11-20 15:25 | 158.72 | 158.26 | 88 | 13967.36 | -40.48 | -0.29% | 0.41R | 50m | market | stagnation | trend | trend | neutral | 71.35 | ↓158.42 | 0.2053 | 1.28 | **LOSS** |
| 740 | MDB | 11-20 15:10 | 11-20 15:55 | 350.25 | 348.41 | 39 | 13659.75 | -71.76 | -0.53% | 0.34R | 45m | market | early-reversal | trend | trend | neutral | 77.59 | ↓348.97 | 3.7502 | 1.03 | **LOSS** |
| 741 | GOOGL | 11-21 14:30 | 11-21 15:15 | 298.47 | 296.38 | 47 | 14028.09 | -98.23 | -0.7% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 742 | META | 11-21 14:30 | 11-21 14:55 | 592.86 | 588.35 | 23 | 13635.78 | -103.73 | -0.76% | 0.89R | 25m | market | early-reversal | trend | trend | neutral | 64.75 | ↓591.13 | 0.6814 | 1.94 | **LOSS** |
| 743 | HD | 11-21 14:35 | 11-21 15:40 | 338.33 | 338.08 | 41 | 13871.53 | -10.25 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 744 | MCD | 11-21 14:45 | 11-21 16:10 | 308.34 | 308.07 | 45 | 13875.3 | -12.15 | -0.09% | 0.13R | 85m | market | stagnation | breakout | breakout | neutral | 77.27 | ↓307.97 | 1.2787 | 1.11 | **LOSS** |
| 745 | AAPL | 11-24 14:30 | 11-24 14:50 | 274.92 | 273.47 | 50 | 13746 | -72.5 | -0.53% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 67.43 | ↓273.82 | 0.0722 | 1.64 | **LOSS** |
| 746 | NET | 11-24 14:30 | 11-24 16:05 | 190.05 | 192.44 | 36 | 13873.65 | +86.04 | +1.26% | 1.21R | 95m | market | trim-profit-target | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 747 | NET | 11-24 14:30 | 11-24 16:15 | 190.05 | 192.16 | 37 | 13873.65 | +78.07 | +1.11% | 1.07R | 105m | market | timeout | trend | trend | neutral | 56.55 | ↑189.3 | -0.2639 | 4.66 | **WIN** |
| 748 | KLAC | 11-24 14:45 | 11-24 16:30 | 1126.07 | 1140.03 | 12 | 13512.84 | +167.52 | +1.24% | 0.93R | 105m | market | timeout | breakout | breakout | neutral | 68.14 | ↑1120.91 | 4.8438 | 1.11 | **WIN** |
| 749 | MRVL | 11-24 15:25 | 11-24 17:00 | 80.91 | 81.59 | 47 | 7686.45 | +31.96 | +0.84% | 0.42R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 750 | MRVL | 11-24 15:25 | 11-24 17:10 | 80.91 | 81.61 | 48 | 7686.45 | +33.6 | +0.87% | 0.44R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑80.1 | 0.6718 | 1.78 | **WIN** |
| 751 | AAPL | 11-25 14:30 | 11-25 15:20 | 278.66 | 278.35 | 50 | 13933 | -15.5 | -0.11% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 64.39 | ↓277.73 | 0.1033 | 2.31 | **LOSS** |
| 752 | UNH | 11-25 14:35 | 11-25 15:00 | 326.98 | 324.92 | 42 | 13733.16 | -86.52 | -0.63% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↓324.84 | 0.2322 | 1.38 | **LOSS** |
| 753 | MA | 11-25 14:35 | 11-25 14:55 | 545.85 | 542.02 | 25 | 13646.25 | -95.75 | -0.7% | 1R | 20m | market | early-reversal | breakout | trend | neutral | 74.84 | ↓544.28 | 0.2295 | 1.1 | **LOSS** |
| 754 | PYPL | 11-25 14:40 | 11-25 15:00 | 61.55 | 60.85 | 226 | 13910.3 | -158.2 | -1.14% | 1.15R | 20m | market | early-reversal | breakout | breakout | neutral | 71.63 | ↓61.34 | 0.1448 | 1.35 | **LOSS** |
| 755 | LOW | 11-25 14:40 | 11-25 16:25 | 233.32 | 236.48 | 59 | 13765.88 | +186.44 | +1.35% | 1.75R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑232.36 | -0.0421 | 2.03 | **WIN** |
| 756 | ADP | 11-25 14:45 | 11-25 16:30 | 253.64 | 254.99 | 50 | 12682 | +67.5 | +0.53% | 0.76R | 105m | market | timeout | breakout | breakout | neutral | 75.92 | ↑252.32 | 0.3525 | 1.57 | **WIN** |
| 757 | ABNB | 11-25 15:25 | 11-25 17:10 | 116.92 | 117.31 | 120 | 14030.4 | +46.8 | +0.33% | 0.32R | 105m | market | timeout | trend | trend | neutral | 71.97 | ↑115.77 | 0.4527 | 1.95 | **WIN** |
| 758 | GE | 11-26 14:30 | 11-26 14:50 | 296.44 | 294.71 | 47 | 13932.68 | -81.31 | -0.58% | 0.83R | 20m | market | early-reversal | trend | breakout | neutral | 78.94 | ↓296.29 | 0.3988 | 1.65 | **LOSS** |
| 759 | LRCX | 11-26 14:30 | 11-26 15:10 | 153.81 | 152.96 | 84 | 12920.04 | -71.4 | -0.55% | 0.79R | 40m | market | early-reversal | trend | trend | neutral | 78.35 | ↓153.56 | 0.504 | 1.09 | **LOSS** |
| 760 | SMCI | 11-26 14:40 | 11-26 14:55 | 33.32 | 32.66 | 417 | 13894.44 | -275.22 | -1.98% | 1.78R | 15m | market | stop-loss | breakout | breakout | neutral | 81.14 | ↓33.18 | 0.2153 | 1.27 | **LOSS** |
| 761 | UBER | 11-28 14:35 | 11-28 16:20 | 86.67 | 87.17 | 161 | 13953.87 | +80.5 | +0.58% | 0.79R | 105m | market | timeout | trend | trend | neutral | 71.22 | ↑86.48 | 0.114 | 1.04 | **WIN** |
| 762 | PANW | 11-28 14:40 | 11-28 16:25 | 189.34 | 190.22 | 73 | 13821.82 | +64.24 | +0.46% | 0.61R | 105m | market | timeout | breakout | breakout | neutral | 87.43 | ↑188.26 | 0.4452 | 1.29 | **WIN** |
| 763 | RIVN | 11-28 14:45 | 11-28 16:30 | 16.86 | 16.94 | 426 | 7182.36 | +34.08 | +0.47% | 0.27R | 105m | market | timeout | breakout | trend | noisyHighBeta | 68.26 | ↑16.69 | 0.0984 | 1.05 | **WIN** |
| 764 | MU | 11-28 15:00 | 11-28 15:20 | 236.84 | 234.18 | 32 | 7578.88 | -85.12 | -1.12% | 0.73R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.65 | ↓236.4 | 1.4354 | 1.2 | **LOSS** |
| 765 | AMZN | 12-01 14:30 | 12-01 14:50 | 234.86 | 233.95 | 59 | 13856.74 | -53.69 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 76.88 | ↓234.07 | 0.3701 | 2.96 | **LOSS** |
| 766 | DIS | 12-01 14:30 | 12-01 15:20 | 105.32 | 105.39 | 132 | 13902.24 | +9.24 | +0.07% | 0.1R | 50m | market | breakeven-stop | trend | trend | neutral | 67.1 | ↓105.07 | 0.0713 | 1.04 | **WIN** |
| 767 | CVX | 12-01 14:35 | 12-01 16:20 | 152.54 | 153.07 | 91 | 13881.14 | +48.23 | +0.35% | 0.5R | 105m | market | timeout | trend | trend | neutral | 72.47 | ↑152.24 | 0.1354 | 2.93 | **WIN** |
| 768 | CELH | 12-01 14:35 | 12-01 15:25 | 41.4 | 41.55 | 333 | 13786.2 | +49.95 | +0.36% | 0.31R | 50m | market | trailing-stop | breakout | breakout | neutral | 71.67 | ↓41.25 | 0.0702 | 3.18 | **WIN** |
| 769 | AMD | 12-01 14:45 | 12-01 15:05 | 219.47 | 217.68 | 59 | 12948.73 | -105.61 | -0.82% | 0.71R | 20m | market | early-reversal | breakout | breakout | neutral | 68.38 | ↑216.03 | 0.2333 | 2.2 | **LOSS** |
| 770 | ASML | 12-01 14:50 | 12-01 16:35 | 1072.88 | 1077.5 | 13 | 13947.44 | +60.06 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | neutral | 81.32 | ↑1062.78 | 4.7465 | 1.33 | **WIN** |
| 771 | ELF | 12-01 14:50 | 12-01 15:45 | 77.27 | 77.26 | 180 | 13908.6 | -1.8 | -0.01% | 0.01R | 55m | market | breakeven-stop | breakout | breakout | neutral | 64.83 | ↓76.81 | 0.0261 | 2.35 | **LOSS** |
| 772 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 83 | 12813.54 | +314.57 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 773 | AMAT | 12-02 14:30 | 12-02 16:15 | 258.11 | 258.69 | 49 | 12647.39 | +28.42 | +0.22% | 0.31R | 105m | market | timeout | trend | trend | neutral | 77.42 | ↓257.29 | 0.2583 | 1.76 | **WIN** |
| 774 | TSM | 12-02 14:35 | 12-02 15:25 | 292.35 | 291.76 | 47 | 13740.45 | -27.73 | -0.2% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 69.75 | ↓291.8 | 0.3957 | 6.95 | **LOSS** |
| 775 | CRWD | 12-02 14:35 | 12-02 15:25 | 515.04 | 512.98 | 27 | 13906.08 | -55.62 | -0.4% | 0.5R | 50m | market | stagnation | breakout | breakout | neutral | 81.95 | ↓512.99 | 1.1955 | 1.3 | **LOSS** |
| 776 | NET | 12-02 14:35 | 12-02 15:55 | 203.19 | 203.22 | 69 | 14020.11 | +2.07 | +0.01% | 0.01R | 80m | market | trailing-stop | breakout | breakout | neutral | 79.68 | ↓202.86 | 0.5356 | 1.7 | **WIN** |
| 777 | INTC | 12-02 14:45 | 12-02 15:25 | 41.13 | 42.27 | 342 | 14066.46 | +389.88 | +2.77% | 2.1R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 778 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 779 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 780 | QCOM | 12-03 14:35 | 12-03 14:55 | 172.43 | 171.85 | 81 | 13966.83 | -46.98 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 69.42 | ↓171.74 | 0.4068 | 2.03 | **LOSS** |
| 781 | MCD | 12-03 14:35 | 12-03 15:25 | 305.69 | 305.46 | 45 | 13756.05 | -10.35 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | neutral | 78.4 | ↑304.56 | 0.7957 | 1.34 | **LOSS** |
| 782 | COIN | 12-03 14:50 | 12-03 15:40 | 272.5 | 270.96 | 51 | 13897.5 | -78.54 | -0.57% | 0.29R | 50m | market | stagnation | breakout | breakout | neutral | 57.96 | ↓269.89 | 0.246 | 1.38 | **LOSS** |
| 783 | PLTR | 12-03 15:00 | 12-03 15:25 | 172.88 | 171.62 | 81 | 14003.28 | -102.06 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 61.73 | ↑170.59 | 0.0844 | 1.57 | **LOSS** |
| 784 | GS | 12-03 15:00 | 12-03 16:45 | 823.94 | 829.67 | 17 | 14006.98 | +97.41 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 785 | RIVN | 12-04 14:40 | 12-04 15:00 | 18.03 | 17.84 | 781 | 14081.43 | -148.39 | -1.05% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 68.81 | ↓17.9 | 0.1567 | 1.5 | **LOSS** |
| 786 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.31 | 180.7 | 76 | 13855.56 | -122.36 | -0.88% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 787 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 31 | 14057.26 | -97.96 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 788 | ORCL | 12-04 15:20 | 12-04 17:05 | 210.26 | 212.42 | 66 | 13877.16 | +142.56 | +1.03% | 0.6R | 105m | market | timeout | trend | trend | neutral | 58.55 | ↑208.95 | 0.5634 | 1.04 | **WIN** |
| 789 | GS | 12-04 15:20 | 12-04 15:45 | 843.64 | 838.61 | 16 | 13498.24 | -80.48 | -0.6% | 0.86R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 790 | PLTR | 12-05 14:30 | 12-05 14:35 | 179.26 | 177.63 | 78 | 13982.28 | -127.14 | -0.91% | 1.3R | 5m | market | stop-loss | trend | trend | neutral | 71 | ↓178.92 | 0.3546 | 2.12 | **LOSS** |
| 791 | NFLX | 12-05 14:35 | 12-05 15:30 | 101.28 | 103.84 | 138 | 13976.64 | +353.28 | +2.53% | 1.59R | 55m | market | profit-target | breakout | breakout | neutral | 75.3 | ↑100.08 | -0.8676 | 6.72 | **WIN** |
| 792 | KLAC | 12-05 14:45 | 12-05 15:25 | 1234.28 | 1225.51 | 11 | 13577.08 | -96.47 | -0.71% | 0.82R | 40m | market | early-reversal | breakout | breakout | neutral | 78.46 | ↓1228 | 4.7797 | 1.44 | **LOSS** |
| 793 | ARM | 12-05 15:05 | 12-05 15:40 | 143.15 | 142.41 | 97 | 13885.55 | -71.78 | -0.52% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 72.11 | ↑142.1 | 0.4954 | 1.65 | **LOSS** |
| 794 | MDB | 12-05 15:05 | 12-05 15:35 | 404.72 | 402.38 | 17 | 6880.24 | -39.78 | -0.58% | 0.46R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 70.75 | ↑398.55 | 0.3094 | 1.07 | **LOSS** |
| 795 | META | 12-05 15:15 | 12-05 15:40 | 672.31 | 670.11 | 20 | 13446.2 | -44 | -0.33% | 0.42R | 25m | market | early-reversal | trend | trend | neutral | 78.53 | ↑666.64 | 1.4891 | 1.62 | **LOSS** |
| 796 | COIN | 12-08 14:30 | 12-08 14:55 | 275.29 | 272.47 | 50 | 13764.5 | -141 | -1.02% | 0.96R | 25m | market | early-reversal | breakout | breakout | neutral | 68.42 | ↓274.32 | 0.8829 | 2.42 | **LOSS** |
| 797 | SMCI | 12-08 14:30 | 12-08 15:20 | 35.1 | 34.94 | 395 | 13864.5 | -63.2 | -0.46% | 0.4R | 50m | market | stagnation | breakout | breakout | neutral | 70.34 | ↓35.16 | 0.0772 | 2.91 | **LOSS** |
| 798 | NOW | 12-08 14:30 | 12-08 14:50 | 864.81 | 858.29 | 16 | 13836.96 | -104.32 | -0.75% | 1.07R | 20m | market | early-reversal | breakout | breakout | neutral | 77.2 | ↓862.5 | 0.8471 | 1.94 | **LOSS** |
| 799 | BA | 12-08 14:30 | 12-08 16:15 | 204.17 | 205.29 | 69 | 14087.73 | +77.28 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 800 | AMAT | 12-08 14:30 | 12-08 14:50 | 270.99 | 269.75 | 51 | 13820.49 | -63.24 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | 74.7 | ↓270.46 | -0.1345 | 1.98 | **LOSS** |
| 801 | ASML | 12-08 14:40 | 12-08 15:30 | 1126.38 | 1124.09 | 12 | 13516.56 | -27.48 | -0.2% | 0.28R | 50m | market | stagnation | breakout | breakout | neutral | 79.93 | ↓1123.78 | 2.8507 | 1.11 | **LOSS** |
| 802 | UBER | 12-08 14:40 | 12-08 15:10 | 92.47 | 91.92 | 134 | 12390.98 | -73.7 | -0.59% | 0.84R | 30m | market | early-reversal | trend | breakout | neutral | 71.43 | ↓92 | -0.0091 | 1.46 | **LOSS** |
| 803 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 31 | 13734.55 | +127.41 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 804 | NVO | 12-10 14:50 | 12-10 16:35 | 47.99 | 48.04 | 291 | 13965.09 | +14.55 | +0.1% | 0.09R | 105m | market | timeout | breakout | breakout | neutral | 80.89 | ↑47.59 | 0.2635 | 2.17 | **WIN** |
| 805 | V | 12-11 14:35 | 12-11 16:20 | 334.96 | 340.06 | 41 | 13733.36 | +209.1 | +1.52% | 1.79R | 105m | market | timeout | breakout | breakout | neutral | 77.84 | ↑333.09 | 0.8597 | 2.04 | **WIN** |
| 806 | LLY | 12-11 15:15 | 12-11 16:45 | 1018.85 | 1018.71 | 13 | 13245.05 | -1.82 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 66.05 | ↑1003.93 | 2.527 | 2.23 | **LOSS** |
| 807 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 31 | 14037.42 | -15.81 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 808 | NFLX | 12-12 14:30 | 12-12 15:20 | 96.11 | 95.99 | 146 | 14032.06 | -17.52 | -0.12% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 83.21 | ↓95.89 | 0.217 | 2.44 | **LOSS** |
| 809 | BA | 12-12 14:30 | 12-12 14:50 | 203.27 | 202.46 | 69 | 14025.63 | -55.89 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 810 | MA | 12-12 14:30 | 12-12 16:15 | 568.38 | 572.33 | 24 | 13641.12 | +94.8 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑567.53 | 1.2619 | 1.59 | **WIN** |
| 811 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 353 | 14105.88 | -98.84 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 812 | ADBE | 12-12 14:40 | 12-12 16:25 | 357.64 | 359.42 | 39 | 13947.96 | +69.42 | +0.5% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 66.06 | ↑355.45 | 0.1109 | 1.42 | **WIN** |
| 813 | CELH | 12-12 14:40 | 12-12 15:00 | 44.54 | 44.16 | 310 | 13807.4 | -117.8 | -0.85% | 0.97R | 20m | market | early-reversal | breakout | breakout | neutral | 68.46 | ↓44.42 | 0.0948 | 1.22 | **LOSS** |
| 814 | UNH | 12-12 14:45 | 12-12 15:10 | 344.21 | 341.97 | 40 | 13768.4 | -89.6 | -0.65% | 0.8R | 25m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↓341.93 | 0.9959 | 1.99 | **LOSS** |
| 815 | LRCX | 12-15 14:30 | 12-15 15:25 | 163.73 | 163.63 | 78 | 12770.94 | -7.8 | -0.06% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | 69.82 | ↓163.27 | -0.1389 | 2.51 | **LOSS** |
| 816 | ELF | 12-15 14:35 | 12-15 15:00 | 77.58 | 77.15 | 156 | 12102.48 | -67.08 | -0.55% | 0.65R | 25m | market | early-reversal | mixed | breakout | neutral | 61.2 | ↓77.55 | -0.1231 | 1.27 | **LOSS** |
| 817 | GE | 12-15 14:40 | 12-15 15:00 | 303.88 | 301.61 | 46 | 13978.48 | -104.42 | -0.75% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 69.28 | ↓302.85 | 0.316 | 1.12 | **LOSS** |
| 818 | AMAT | 12-15 14:40 | 12-15 15:00 | 265.28 | 263.44 | 52 | 13794.56 | -95.68 | -0.69% | 0.63R | 20m | market | early-reversal | breakout | trend | neutral | 72.5 | ↓263.95 | 0.5539 | 1.01 | **LOSS** |
| 819 | AMD | 12-15 14:45 | 12-15 15:05 | 215.21 | 211.66 | 64 | 13773.44 | -227.2 | -1.65% | 1.42R | 20m | market | stop-loss | breakout | breakout | neutral | 74.74 | ↓213.33 | 0.1714 | 1.36 | **LOSS** |
| 820 | PLTR | 12-15 14:45 | 12-15 15:05 | 186.85 | 184.1 | 74 | 13826.9 | -203.5 | -1.47% | 1.09R | 20m | market | early-reversal | breakout | breakout | neutral | 73.42 | ↓186.54 | 0.4741 | 1.11 | **LOSS** |
| 821 | PYPL | 12-16 14:30 | 12-16 15:00 | 61.63 | 61.3 | 226 | 13928.38 | -74.58 | -0.54% | 0.77R | 30m | market | early-reversal | breakout | trend | neutral | 66.46 | ↓61.53 | 0.0163 | 1.07 | **LOSS** |
| 822 | BA | 12-16 14:50 | 12-16 15:10 | 208.59 | 207.85 | 67 | 13975.53 | -49.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 823 | AMZN | 12-17 14:30 | 12-17 14:50 | 224.58 | 223.47 | 62 | 13923.96 | -68.82 | -0.49% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↓224.55 | 0.3606 | 1.62 | **LOSS** |
| 824 | NOW | 12-17 14:30 | 12-17 15:40 | 787.74 | 808.03 | 17 | 13391.58 | +344.93 | +2.58% | 3.69R | 70m | market | profit-target | trend | trend | neutral | 77.22 | ↑786.46 | 2.1159 | 1.76 | **WIN** |
| 825 | MDB | 12-17 14:30 | 12-17 15:15 | 425.2 | 423.37 | 32 | 13606.4 | -58.56 | -0.43% | 0.61R | 45m | market | early-reversal | trend | trend | neutral | 71.46 | ↓424.28 | 1.1976 | 1.23 | **LOSS** |
| 826 | GS | 12-17 14:30 | 12-17 15:25 | 889.8 | 889.29 | 14 | 12457.2 | -7.14 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 827 | CVX | 12-17 14:30 | 12-17 15:25 | 148.35 | 148.22 | 94 | 13944.9 | -12.22 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 69.95 | ↑148.03 | 0.0995 | 4.64 | **LOSS** |
| 828 | RIVN | 12-17 14:30 | 12-17 14:50 | 18.21 | 18.03 | 391 | 7120.11 | -70.38 | -0.99% | 0.53R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.48 | ↓18.19 | 0.0325 | 1.21 | **LOSS** |
| 829 | MU | 12-17 14:35 | 12-17 15:30 | 235.18 | 233.66 | 32 | 7525.76 | -48.64 | -0.65% | 0.54R | 55m | market | stagnation | trend | trend | noisyHighBeta | 74.36 | ↓235.12 | 0.4878 | 2.15 | **LOSS** |
| 830 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.28 | 85.01 | 150 | 12942 | -190.5 | -1.47% | 0.74R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 831 | NFLX | 12-17 15:10 | 12-17 15:50 | 97.09 | 96.42 | 144 | 13980.96 | -96.48 | -0.69% | 0.47R | 40m | market | early-reversal | trend | trend | neutral | 77.98 | ↓96.67 | 0.7084 | 1.02 | **LOSS** |
| 832 | SHOP | 12-17 15:10 | 12-17 15:50 | 168.46 | 167.1 | 83 | 13982.18 | -112.88 | -0.81% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 76.11 | ↓167.77 | 1.7597 | 1.13 | **LOSS** |
| 833 | ABNB | 12-17 15:10 | 12-17 15:40 | 136.6 | 135.77 | 102 | 13933.2 | -84.66 | -0.61% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 76.37 | ↓135.51 | 1.1583 | 1.67 | **LOSS** |
| 834 | QCOM | 12-18 14:30 | 12-18 15:10 | 176.22 | 174.74 | 79 | 13921.38 | -116.92 | -0.84% | 0.97R | 40m | market | early-reversal | breakout | breakout | neutral | 74.21 | ↓176.12 | 0.3365 | 2.66 | **LOSS** |
| 835 | NKE | 12-18 14:35 | 12-18 16:20 | 66.53 | 66.79 | 209 | 13904.77 | +54.34 | +0.39% | 0.56R | 105m | market | timeout | trend | trend | neutral | 69.5 | ↑66.32 | 0.0512 | 2.59 | **WIN** |
| 836 | LOW | 12-18 14:35 | 12-18 14:45 | 253.16 | 250.75 | 55 | 13923.8 | -132.55 | -0.95% | 1.34R | 10m | market | stop-loss | breakout | trend | neutral | 77.92 | ↓252.47 | 0.5498 | 1.93 | **LOSS** |
| 837 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.28 | 179.38 | 78 | 13905.84 | +85.8 | +0.62% | 0.72R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 838 | NFLX | 12-19 14:30 | 12-19 15:20 | 95.11 | 94.61 | 147 | 13981.17 | -73.5 | -0.53% | 0.76R | 50m | market | early-reversal | breakout | breakout | neutral | 93.99 | ↓94.58 | 0.0925 | 2.17 | **LOSS** |
| 839 | INTC | 12-19 14:35 | 12-19 15:45 | 37.08 | 37.02 | 380 | 14090.4 | -22.8 | -0.16% | 0.17R | 70m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 840 | DELL | 12-19 14:40 | 12-19 15:20 | 126.39 | 125.64 | 110 | 13902.9 | -82.5 | -0.59% | 0.6R | 40m | market | early-reversal | breakout | breakout | neutral | 82.28 | ↓125.56 | 0.2439 | 1.35 | **LOSS** |
| 841 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 46 | 14041.5 | -20.7 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 842 | GS | 12-19 15:10 | 12-19 15:40 | 895.28 | 892.8 | 15 | 13429.2 | -37.2 | -0.28% | 0.35R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 843 | IBM | 12-19 15:15 | 12-19 15:45 | 304.9 | 303.29 | 45 | 13720.5 | -72.45 | -0.53% | 0.76R | 30m | market | early-reversal | trend | trend | neutral | 75.55 | ↓302.65 | 0.7648 | 2.69 | **LOSS** |
| 844 | DIS | 12-22 14:30 | 12-22 14:45 | 112.53 | 111.46 | 124 | 13953.72 | -132.68 | -0.95% | 1.36R | 15m | market | stop-loss | breakout | breakout | neutral | 62.09 | ↓112.26 | -0.2793 | 1.54 | **LOSS** |
| 845 | META | 12-22 14:40 | 12-22 15:00 | 672.68 | 667.97 | 20 | 13453.6 | -94.2 | -0.7% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 64.58 | ↓667.88 | -0.1737 | 1.52 | **LOSS** |
| 846 | CRM | 12-22 15:05 | 12-22 15:55 | 262.43 | 262.59 | 53 | 13908.79 | +8.48 | +0.06% | 0.06R | 50m | market | breakeven-stop | trend | trend | neutral | 68.85 | ↑260.85 | 0.5289 | 1.17 | **WIN** |
| 847 | CELH | 12-23 14:35 | 12-23 14:55 | 45.19 | 44.63 | 305 | 13782.95 | -170.8 | -1.24% | 1.23R | 20m | market | early-reversal | breakout | breakout | neutral | 71.58 | ↓45.01 | 0.0991 | 1.49 | **LOSS** |
| 848 | GOOGL | 12-23 14:40 | 12-23 15:00 | 312.98 | 311.76 | 44 | 13771.12 | -53.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 849 | LMT | 12-24 14:30 | 12-24 15:45 | 487.58 | 487.89 | 28 | 13652.24 | +8.68 | +0.06% | 0.09R | 75m | market | breakeven-stop | trend | trend | neutral | 76.38 | ↓487.17 | 0.3584 | 1.07 | **WIN** |
| 850 | NVO | 12-24 14:30 | 12-24 15:05 | 53.14 | 52.75 | 263 | 13975.82 | -102.57 | -0.73% | 0.66R | 35m | market | early-reversal | breakout | breakout | neutral | 90.25 | ↓53.07 | 0.2167 | 1.8 | **LOSS** |
| 851 | ORCL | 12-24 15:00 | 12-24 15:40 | 197.67 | 196.81 | 71 | 14034.57 | -61.06 | -0.44% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↓196.66 | 0.6538 | 1.65 | **LOSS** |
| 852 | RIVN | 12-24 15:10 | 12-24 16:55 | 21.23 | 21.26 | 364 | 7727.72 | +10.92 | +0.14% | 0.1R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.06 | ↑21.08 | 0.0336 | 1.1 | **WIN** |
| 853 | ELF | 12-26 14:45 | 12-26 14:55 | 80.88 | 79.91 | 172 | 13911.36 | -166.84 | -1.2% | 1.33R | 10m | market | stop-loss | breakout | breakout | neutral | 81.53 | ↓80.6 | 0.5297 | 5.15 | **LOSS** |
| 854 | SMCI | 12-29 14:40 | 12-29 15:00 | 31.1 | 30.82 | 445 | 13839.5 | -124.6 | -0.9% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 65.7 | ↑30.55 | 0.0788 | 1.92 | **LOSS** |
| 855 | XOM | 12-29 15:05 | 12-29 16:50 | 120.56 | 120.88 | 133 | 16034.48 | +42.56 | +0.27% | 0.39R | 105m | market | timeout | trend | trend | cleanTrend | 75.48 | ↑119.97 | 0.3959 | 1.35 | **WIN** |
| 856 | ORCL | 12-30 14:30 | 12-30 15:20 | 197.47 | 196.75 | 71 | 14020.37 | -51.12 | -0.36% | 0.51R | 50m | market | stagnation | trend | trend | neutral | 75.78 | ↓197.12 | 0.3771 | 2.92 | **LOSS** |
| 857 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 161 | 13913.62 | +193.2 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 858 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 859 | TGT | 01-02 14:35 | 01-02 15:00 | 99.01 | 98.68 | 141 | 13960.41 | -46.53 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 77.5 | ↑98.41 | 0.0437 | 1.78 | **LOSS** |
| 860 | AAPL | 01-02 14:40 | 01-02 15:20 | 275.6 | 273.67 | 50 | 13780 | -96.5 | -0.7% | 1R | 40m | market | early-reversal | trend | trend | neutral | 78.82 | ↓273.86 | 0.2361 | 1.97 | **LOSS** |
| 861 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 862 | QCOM | 01-02 14:45 | 01-02 15:25 | 173.6 | 172.87 | 80 | 13888 | -58.4 | -0.42% | 0.58R | 40m | market | early-reversal | breakout | breakout | neutral | 67.97 | ↓173.31 | 0.1721 | 1.41 | **LOSS** |
| 863 | GE | 01-02 14:45 | 01-02 16:30 | 312.37 | 314.17 | 44 | 13744.28 | +79.2 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | neutral | 74.94 | ↑310.53 | 0.0088 | 1.76 | **WIN** |
| 864 | COIN | 01-02 14:50 | 01-02 16:35 | 229.88 | 235.68 | 60 | 13792.8 | +348 | +2.52% | 2.1R | 105m | market | profit-target | breakout | breakout | neutral | 73.04 | ↑228.09 | 0.0206 | 1.68 | **WIN** |
| 865 | AMD | 01-02 14:55 | 01-02 15:15 | 225.93 | 224.26 | 61 | 13781.73 | -101.87 | -0.74% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 80.86 | ↓224.25 | 2.3926 | 1.15 | **LOSS** |
| 866 | GS | 01-02 15:00 | 01-02 15:20 | 889.89 | 885.58 | 15 | 13348.35 | -64.65 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.71 | ↓885.26 | 1.3176 | 1.22 | **LOSS** |
| 867 | TXN | 01-02 15:00 | 01-02 15:20 | 177.04 | 175.93 | 78 | 13809.12 | -86.58 | -0.63% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 69.1 | ↓176.43 | 0.4291 | 1.51 | **LOSS** |
| 868 | SNOW | 01-05 14:30 | 01-05 15:25 | 219.13 | 224.33 | 63 | 13805.19 | +327.6 | +2.37% | 3.39R | 55m | market | profit-target | trend | trend | neutral | 70.3 | ↑218.65 | 0.702 | 1.48 | **WIN** |
| 869 | ORCL | 01-05 14:35 | 01-05 14:45 | 201.11 | 196.45 | 69 | 13876.59 | -321.54 | -2.32% | 3.31R | 10m | market | stop-loss | trend | trend | neutral | 70.98 | ↓200.07 | 1.1997 | 5.63 | **LOSS** |
| 870 | PLTR | 01-05 14:40 | 01-05 15:30 | 174.61 | 173.55 | 73 | 12746.53 | -77.38 | -0.61% | 0.34R | 50m | market | early-reversal | trend | trend | neutral | 74.95 | ↓173.07 | 1.4103 | 1.85 | **LOSS** |
| 871 | V | 01-05 14:40 | 01-05 16:25 | 350.66 | 355.26 | 40 | 14026.4 | +184 | +1.31% | 1.87R | 105m | market | timeout | trend | trend | neutral | 66.69 | ↑348.77 | 0.6698 | 2.06 | **WIN** |
| 872 | ABNB | 01-05 14:45 | 01-05 16:30 | 134.98 | 136.83 | 104 | 14037.92 | +192.4 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | neutral | 70.33 | ↑133.73 | 0.2153 | 1.6 | **WIN** |
| 873 | PYPL | 01-05 14:55 | 01-05 16:10 | 59.25 | 59.21 | 270 | 15997.5 | -10.8 | -0.07% | 0.09R | 75m | market | stagnation | trend | trend | cleanTrend | 74.35 | ↑58.8 | 0.159 | 1.15 | **LOSS** |
| 874 | SBUX | 01-05 14:55 | 01-05 16:05 | 85.37 | 86.02 | 82 | 14000.68 | +53.3 | +0.76% | 0.96R | 70m | market | trim-profit-target | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 875 | SBUX | 01-05 14:55 | 01-05 16:40 | 85.37 | 86.44 | 82 | 14000.68 | +87.74 | +1.25% | 1.58R | 105m | market | timeout | trend | trend | neutral | 70.09 | ↑85.07 | 0.1424 | 1.45 | **WIN** |
| 876 | ADP | 01-05 15:00 | 01-05 16:45 | 255.46 | 257.61 | 54 | 13794.84 | +116.1 | +0.84% | 1.2R | 105m | market | timeout | trend | trend | neutral | 67.65 | ↑253.97 | 0.4011 | 1.59 | **WIN** |
| 877 | SNOW | 01-06 14:35 | 01-06 14:50 | 228.85 | 224.01 | 61 | 13959.85 | -295.24 | -2.11% | 2.71R | 15m | market | stop-loss | breakout | breakout | neutral | 80.82 | ↓228 | 0.5362 | 1.36 | **LOSS** |
| 878 | KLAC | 01-06 14:35 | 01-06 16:20 | 1384.45 | 1403.05 | 10 | 13844.5 | +186 | +1.34% | 1.58R | 105m | market | timeout | breakout | breakout | neutral | 85.33 | ↑1376.66 | 3.5174 | 1.79 | **WIN** |
| 879 | SBUX | 01-06 14:40 | 01-06 16:25 | 87.68 | 89.02 | 160 | 14028.8 | +214.4 | +1.53% | 2.1R | 105m | market | timeout | trend | breakout | neutral | 74.65 | ↑87.24 | 0.0328 | 5.88 | **WIN** |
| 880 | DELL | 01-06 14:55 | 01-06 15:40 | 124.34 | 123.85 | 112 | 13926.08 | -54.88 | -0.39% | 0.33R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.57 | ↓123.28 | 0.1127 | 2.02 | **LOSS** |
| 881 | BA | 01-06 15:20 | 01-06 15:40 | 231.26 | 229.61 | 60 | 13875.6 | -99 | -0.71% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 882 | CELH | 01-07 15:25 | 01-07 16:20 | 49.65 | 51.03 | 277 | 13753.05 | +382.26 | +2.78% | 2.11R | 55m | market | profit-target | trend | trend | neutral | 67.65 | ↑49.38 | 0.2198 | 1.52 | **WIN** |
| 883 | NVO | 01-08 14:30 | 01-08 14:50 | 57.35 | 57.14 | 243 | 13936.05 | -51.03 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 72.67 | ↓57.21 | 0.155 | 1.22 | **LOSS** |
| 884 | HD | 01-08 15:15 | 01-08 17:00 | 356.78 | 360.91 | 39 | 13914.42 | +161.07 | +1.16% | 1.16R | 105m | market | timeout | trend | trend | neutral | 73.26 | ↑351.41 | 1.0435 | 1.16 | **WIN** |
| 885 | BA | 01-09 14:35 | 01-09 15:35 | 231.41 | 231.29 | 60 | 13884.6 | -7.2 | -0.05% | 0.07R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 886 | HD | 01-09 14:35 | 01-09 15:00 | 364.34 | 362.34 | 38 | 13844.92 | -76 | -0.55% | 0.69R | 25m | market | early-reversal | trend | breakout | neutral | 64.78 | ↓363.89 | -0.1651 | 1.87 | **LOSS** |
| 887 | NKE | 01-09 14:50 | 01-09 15:00 | 66.4 | 64.73 | 210 | 13944 | -350.7 | -2.52% | 2.6R | 10m | market | stop-loss | breakout | breakout | neutral | 73.85 | ↓65.94 | 0.1621 | 1.17 | **LOSS** |
| 888 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.74 | 441.12 | 31 | 13755.94 | -81.22 | -0.59% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 889 | AVGO | 01-09 15:25 | 01-09 17:10 | 341.71 | 343.73 | 40 | 13668.4 | +80.8 | +0.59% | 0.46R | 105m | market | timeout | breakout | breakout | neutral | 66.92 | ↑338.14 | 1.9739 | 1.26 | **WIN** |
| 890 | NFLX | 01-12 14:30 | 01-12 15:20 | 90.22 | 90.02 | 143 | 12901.46 | -28.6 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.85 | ↑90.04 | 0.1612 | 1.08 | **LOSS** |
| 891 | AMD | 01-12 14:50 | 01-12 16:35 | 206.95 | 208.21 | 67 | 13865.65 | +84.42 | +0.61% | 0.47R | 105m | market | timeout | breakout | breakout | neutral | 61.22 | ↑204.37 | 0.1029 | 1.56 | **WIN** |
| 892 | SBUX | 01-12 15:00 | 01-12 15:20 | 89.79 | 89.23 | 157 | 14097.03 | -87.92 | -0.62% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑88.77 | 0.1419 | 1.26 | **LOSS** |
| 893 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 894 | LRCX | 01-12 15:20 | 01-12 15:55 | 220.79 | 219.58 | 63 | 13909.77 | -76.23 | -0.55% | 0.33R | 35m | market | early-reversal | trend | trend | neutral | 59.24 | ↓219.52 | 0.499 | 1.38 | **LOSS** |
| 895 | NFLX | 01-13 14:30 | 01-13 15:00 | 90.5 | 90.03 | 154 | 13937 | -72.38 | -0.52% | 0.74R | 30m | market | early-reversal | trend | trend | neutral | 69.77 | ↓90.02 | 0.0648 | 3.07 | **LOSS** |
| 896 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.47 | 168.06 | 82 | 13896.54 | -115.62 | -0.83% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 897 | CRWD | 01-13 14:35 | 01-13 14:45 | 471.82 | 471.52 | 29 | 13682.78 | -8.7 | -0.06% | 0.09R | 10m | market | breakeven-stop | trend | trend | neutral | 78.1 | ↑468.36 | 0.9225 | 1.25 | **LOSS** |
| 898 | NET | 01-13 14:40 | 01-13 15:00 | 188.7 | 187.86 | 74 | 13963.8 | -62.16 | -0.45% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 62.77 | ↓187.87 | 0.6826 | 1.15 | **LOSS** |
| 899 | CVX | 01-13 14:40 | 01-13 16:25 | 164.32 | 165.02 | 85 | 13967.2 | +59.5 | +0.43% | 0.61R | 105m | market | timeout | trend | trend | neutral | 73 | ↑163.8 | 0.247 | 1.17 | **WIN** |
| 900 | LMT | 01-13 14:40 | 01-13 16:25 | 556.56 | 560.21 | 25 | 13914 | +91.25 | +0.66% | 0.73R | 105m | market | timeout | breakout | breakout | neutral | 70.38 | ↑555.08 | 1.7667 | 1.3 | **WIN** |
| 901 | INTC | 01-13 15:15 | 01-13 15:40 | 47.26 | 46.7 | 164 | 7750.64 | -91.84 | -1.18% | 0.59R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 78.48 | ↑46.52 | 0.6865 | 2.2 | **LOSS** |
| 902 | COST | 01-14 14:35 | 01-14 14:50 | 952.12 | 944.38 | 14 | 13329.68 | -108.36 | -0.81% | 1.16R | 15m | market | stop-loss | breakout | breakout | neutral | 79.27 | ↓948.83 | 1.3799 | 1.67 | **LOSS** |
| 903 | TGT | 01-14 14:40 | 01-14 15:05 | 110.54 | 110.03 | 127 | 14038.58 | -64.77 | -0.46% | 0.61R | 25m | market | early-reversal | breakout | breakout | neutral | 80.73 | ↓109.85 | 0.2361 | 1.51 | **LOSS** |
| 904 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 31 | 13743.54 | -48.67 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 905 | PANW | 01-15 14:30 | 01-15 15:50 | 191.81 | 191.9 | 72 | 13810.32 | +6.48 | +0.05% | 0.07R | 80m | market | breakeven-stop | trend | trend | neutral | 73.16 | ↓191.53 | 0.5245 | 1.87 | **WIN** |
| 906 | NOW | 01-15 14:30 | 01-15 14:45 | 135.63 | 133.98 | 103 | 13969.89 | -169.95 | -1.22% | 1.47R | 15m | market | stop-loss | breakout | breakout | neutral | 84.4 | ↓135.59 | 0.3156 | 2 | **LOSS** |
| 907 | SMCI | 01-15 14:45 | 01-15 15:35 | 29.05 | 29.03 | 476 | 13827.8 | -9.52 | -0.07% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 75.51 | ↓29 | 0.2031 | 1.68 | **LOSS** |
| 908 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 171 | 14003.19 | +94.05 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 909 | TSM | 01-15 14:50 | 01-15 16:35 | 346.13 | 350.23 | 40 | 13845.2 | +164 | +1.18% | 0.59R | 105m | market | timeout | breakout | breakout | neutral | 81.51 | ↑342.43 | 5.1387 | 1.6 | **WIN** |
| 910 | BAC | 01-15 15:05 | 01-15 15:35 | 52.92 | 52.68 | 264 | 13970.88 | -63.36 | -0.45% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 70.28 | ↑52.58 | 0.0764 | 1.07 | **LOSS** |
| 911 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 912 | ARM | 01-16 14:30 | 01-16 14:55 | 106.73 | 106.13 | 131 | 13981.63 | -78.6 | -0.56% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.27 | ↓106.58 | -0.1668 | 2.26 | **LOSS** |
| 913 | TSM | 01-16 14:30 | 01-16 14:55 | 348.78 | 343.99 | 40 | 13951.2 | -191.6 | -1.37% | 1.61R | 25m | market | stop-loss | breakout | breakout | neutral | 72.94 | ↓348.22 | 0.1862 | 2.97 | **LOSS** |
| 914 | PLTR | 01-16 14:30 | 01-16 14:40 | 181.03 | 177.32 | 77 | 13939.31 | -285.67 | -2.05% | 1.81R | 10m | market | stop-loss | breakout | breakout | neutral | 72.1 | ↓180.79 | -0.2065 | 9.2 | **LOSS** |
| 915 | IBM | 01-16 14:30 | 01-16 14:50 | 304.52 | 302.46 | 42 | 12789.84 | -86.52 | -0.68% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 64.62 | ↓303.75 | -0.6212 | 2.43 | **LOSS** |
| 916 | NVDA | 01-16 14:35 | 01-16 14:55 | 190.28 | 189.13 | 73 | 13890.44 | -83.95 | -0.6% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 65.97 | ↓189.62 | -0.1223 | 2.58 | **LOSS** |
| 917 | ASML | 01-16 14:35 | 01-16 14:55 | 1368.76 | 1356.78 | 10 | 13687.6 | -119.8 | -0.88% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 76.2 | ↓1363.72 | 1.928 | 1.36 | **LOSS** |
| 918 | MDB | 01-16 15:10 | 01-16 16:20 | 399.25 | 408.73 | 34 | 13574.5 | +322.32 | +2.37% | 1.44R | 70m | market | profit-target | breakout | breakout | neutral | 69.15 | ↑394.07 | 0.6032 | 1.11 | **WIN** |
| 919 | DELL | 01-16 15:15 | 01-16 15:35 | 122.9 | 122.02 | 113 | 13887.7 | -99.44 | -0.72% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 73.07 | ↑121.05 | 0.4447 | 1.2 | **LOSS** |
| 920 | SNOW | 01-16 15:25 | 01-16 15:45 | 212.22 | 210.76 | 66 | 14006.52 | -96.36 | -0.69% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 70.48 | ↑209.44 | 0.7425 | 1.37 | **LOSS** |
| 921 | WMT | 01-20 14:30 | 01-20 14:50 | 121.18 | 120.16 | 106 | 12845.08 | -108.12 | -0.84% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 75.65 | ↓120.96 | 0.5126 | 1.2 | **LOSS** |
| 922 | ELF | 01-20 14:40 | 01-20 14:50 | 91.24 | 89.24 | 152 | 13868.48 | -304 | -2.19% | 1.42R | 10m | market | stop-loss | breakout | breakout | neutral | 60.08 | ↓90.1 | 0.1465 | 1.56 | **LOSS** |
| 923 | CELH | 01-20 14:45 | 01-20 16:20 | 55.91 | 57.37 | 247 | 13809.77 | +360.62 | +2.61% | 2.1R | 95m | market | profit-target | breakout | breakout | neutral | 69.83 | ↑55.79 | 0.3742 | 2.33 | **WIN** |
| 924 | XOM | 01-20 15:25 | 01-20 15:50 | 131.46 | 130.86 | 106 | 13934.76 | -63.6 | -0.46% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.16 | ↓131.05 | 0.3225 | 1.62 | **LOSS** |
| 925 | UNH | 01-21 14:30 | 01-21 16:15 | 342.7 | 346.55 | 40 | 13708 | +154 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 84.76 | ↑341.51 | 0.5588 | 1.35 | **WIN** |
| 926 | CVX | 01-21 14:35 | 01-21 14:55 | 168.24 | 167.1 | 83 | 13963.92 | -94.62 | -0.68% | 0.97R | 20m | market | early-reversal | breakout | breakout | neutral | 76.75 | ↓167.9 | 0.1545 | 1.4 | **LOSS** |
| 927 | LMT | 01-21 14:35 | 01-21 16:20 | 585.02 | 586.81 | 23 | 13455.46 | +41.17 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 82.03 | ↑581.39 | 0.6397 | 1.75 | **WIN** |
| 928 | DIS | 01-21 14:35 | 01-21 14:55 | 111.95 | 111.6 | 124 | 13881.8 | -43.4 | -0.31% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 82.66 | ↓111.64 | 0.2342 | 3.71 | **LOSS** |
| 929 | RIVN | 01-21 14:35 | 01-21 14:55 | 16.34 | 16.17 | 860 | 14052.4 | -146.2 | -1.04% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 80.65 | ↓16.31 | 0.0604 | 1.29 | **LOSS** |
| 930 | NKE | 01-21 14:40 | 01-21 16:05 | 64.36 | 64.29 | 216 | 13901.76 | -15.12 | -0.11% | 0.15R | 85m | market | breakeven-stop | breakout | breakout | neutral | 90.32 | ↓64.23 | 0.2055 | 1.75 | **LOSS** |
| 931 | HPE | 01-21 14:45 | 01-21 15:10 | 20.75 | 20.66 | 672 | 13944 | -60.48 | -0.43% | 0.4R | 25m | market | early-reversal | breakout | breakout | neutral | 78.29 | ↑20.61 | 0.0459 | 1.43 | **LOSS** |
| 932 | ADP | 01-21 15:00 | 01-21 15:40 | 258.87 | 257.39 | 54 | 13978.98 | -79.92 | -0.57% | 0.78R | 40m | market | early-reversal | trend | trend | neutral | 76.24 | ↓257.89 | 0.7795 | 2.04 | **LOSS** |
| 933 | GOOGL | 01-21 15:05 | 01-21 16:30 | 326.57 | 330.47 | 21 | 13715.94 | +81.9 | +1.19% | 1.16R | 85m | market | trim-profit-target | trend | trend | neutral | 70.59 | ↑323.18 | 0.4517 | 1.02 | **WIN** |
| 934 | GOOGL | 01-21 15:05 | 01-21 16:50 | 326.57 | 327.2 | 21 | 13715.94 | +13.23 | +0.19% | 0.18R | 105m | market | trailing-stop | trend | trend | neutral | 70.59 | ↓323.18 | 0.4517 | 1.02 | **WIN** |
| 935 | UBER | 01-21 15:10 | 01-21 16:55 | 84.81 | 85.22 | 164 | 13908.84 | +67.24 | +0.48% | 0.38R | 105m | market | timeout | breakout | trend | neutral | 67.14 | ↑83.89 | 0.3698 | 1.06 | **WIN** |
| 936 | PYPL | 01-22 14:30 | 01-22 16:15 | 56.76 | 57.42 | 245 | 13906.2 | +161.7 | +1.16% | 1.59R | 105m | market | timeout | trend | breakout | neutral | 68.71 | ↑56.75 | 0.211 | 2.13 | **WIN** |
| 937 | JPM | 01-22 14:30 | 01-22 14:50 | 306.23 | 305.02 | 45 | 13780.35 | -54.45 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | trend | neutral | 67.19 | ↓306.06 | 0.1092 | 1.03 | **LOSS** |
| 938 | BA | 01-22 14:30 | 01-22 14:55 | 252.76 | 251.71 | 55 | 13901.8 | -57.75 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 939 | ABNB | 01-22 14:35 | 01-22 15:05 | 136.56 | 135.8 | 103 | 14065.68 | -78.28 | -0.56% | 0.74R | 30m | market | early-reversal | breakout | breakout | neutral | 73.55 | ↓136.11 | 0.5181 | 1.44 | **LOSS** |
| 940 | NVO | 01-22 14:35 | 01-22 16:20 | 61.29 | 62.06 | 210 | 12870.9 | +161.7 | +1.26% | 1.02R | 105m | market | timeout | breakout | breakout | neutral | 77.31 | ↑61.24 | 0.6333 | 1.55 | **WIN** |
| 941 | HD | 01-22 14:40 | 01-22 14:55 | 388.56 | 384.84 | 36 | 13988.16 | -133.92 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | trend | neutral | 73.65 | ↓388.59 | 1.4586 | 1.37 | **LOSS** |
| 942 | INTU | 01-22 14:40 | 01-22 16:25 | 533.77 | 541.84 | 26 | 13878.02 | +209.82 | +1.51% | 2.1R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑531.44 | 1.6871 | 1.46 | **WIN** |
| 943 | NFLX | 01-23 14:30 | 01-23 14:35 | 84.38 | 84.36 | 165 | 13922.7 | -3.3 | -0.02% | 0.03R | 5m | market | breakeven-stop | trend | trend | neutral | 74.13 | ↑84.13 | 0.1432 | 4.92 | **LOSS** |
| 944 | CRM | 01-23 14:30 | 01-23 14:50 | 230.25 | 229.2 | 60 | 13815 | -63 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 79.92 | ↓229.32 | 0.4051 | 2.01 | **LOSS** |
| 945 | ADBE | 01-23 14:30 | 01-23 15:10 | 302.94 | 302.01 | 46 | 13935.24 | -42.78 | -0.31% | 0.44R | 40m | market | early-reversal | breakout | breakout | neutral | 76.41 | ↓302.29 | 0.4992 | 1.19 | **LOSS** |
| 946 | NET | 01-23 14:40 | 01-23 16:25 | 175.04 | 176.12 | 80 | 14003.2 | +86.4 | +0.62% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 68.63 | ↓174.15 | 0.454 | 1.27 | **WIN** |
| 947 | NVO | 01-26 14:35 | 01-26 15:45 | 63.25 | 63.26 | 221 | 13978.25 | +2.21 | +0.02% | 0.03R | 70m | market | breakeven-stop | breakout | breakout | neutral | 76.16 | ↓62.96 | 0.0318 | 1.61 | **WIN** |
| 948 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 949 | ASML | 01-26 14:55 | 01-26 15:15 | 1407.9 | 1399.18 | 9 | 12671.1 | -78.48 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 79.89 | ↓1399.09 | 4.4717 | 1.22 | **LOSS** |
| 950 | KLAC | 01-26 14:55 | 01-26 15:15 | 1527.99 | 1520.84 | 9 | 13751.91 | -64.35 | -0.47% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 64.26 | ↓1520.6 | 6.1744 | 2.12 | **LOSS** |
| 951 | CRWD | 01-26 15:00 | 01-26 16:45 | 461 | 466.94 | 30 | 13830 | +178.2 | +1.29% | 1.21R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑459.32 | 1.7389 | 1.25 | **WIN** |
| 952 | MU | 01-27 14:35 | 01-27 16:20 | 404.94 | 406.45 | 31 | 12553.14 | +46.81 | +0.37% | 0.23R | 105m | market | timeout | breakout | breakout | neutral | 79.1 | ↓404.15 | 1.3266 | 1.73 | **WIN** |
| 953 | MSFT | 01-27 14:40 | 01-27 15:25 | 477.69 | 475.96 | 29 | 13853.01 | -50.17 | -0.36% | 0.51R | 45m | market | early-reversal | breakout | breakout | neutral | 67.32 | ↓476.53 | 0.8073 | 2.94 | **LOSS** |
| 954 | KLAC | 01-27 14:40 | 01-27 16:25 | 1585.34 | 1611.36 | 8 | 12682.72 | +208.16 | +1.64% | 1.8R | 105m | market | timeout | breakout | trend | neutral | 79.03 | ↑1576.11 | 3.9449 | 1.06 | **WIN** |
| 955 | AMD | 01-27 15:00 | 01-27 15:50 | 253.95 | 253.1 | 54 | 13713.3 | -45.9 | -0.33% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 62.3 | ↑251.51 | 0.0138 | 1.29 | **LOSS** |
| 956 | GE | 01-27 15:00 | 01-27 15:35 | 299.38 | 298.03 | 46 | 13771.48 | -62.1 | -0.45% | 0.51R | 35m | market | early-reversal | breakout | trend | neutral | 76.66 | ↓297.35 | 0.7022 | 1.72 | **LOSS** |
| 957 | ARM | 01-27 15:05 | 01-27 15:25 | 116.8 | 116.16 | 119 | 13899.2 | -76.16 | -0.55% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 76.3 | ↑115.62 | 0.3598 | 1.11 | **LOSS** |
| 958 | SMCI | 01-27 15:05 | 01-27 16:50 | 31.05 | 31.06 | 417 | 12947.85 | +4.17 | +0.03% | 0.02R | 105m | market | timeout | mixed | breakout | neutral | 57.21 | ↑30.37 | -0.1295 | 1.43 | **WIN** |
| 959 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 168 | 13984.32 | -47.04 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 960 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 74 | 13993.4 | +37 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 961 | AMZN | 01-27 15:15 | 01-27 17:00 | 241.57 | 241.99 | 57 | 13769.49 | +23.94 | +0.17% | 0.19R | 105m | market | timeout | trend | trend | neutral | 61.76 | ↑239.62 | 0.2565 | 1.15 | **WIN** |
| 962 | ORCL | 01-28 14:35 | 01-28 15:00 | 176.14 | 178.12 | 79 | 13915.06 | +156.42 | +1.12% | 1.6R | 25m | market | trailing-stop | trend | trend | neutral | 79.75 | ↓175.51 | 0.2987 | 2.75 | **WIN** |
| 963 | MDB | 01-28 14:35 | 01-28 15:30 | 419.96 | 419.71 | 33 | 13858.68 | -8.25 | -0.06% | 0.08R | 55m | market | breakeven-stop | breakout | breakout | neutral | 77.09 | ↓418.71 | 0.73 | 1.19 | **LOSS** |
| 964 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 165 | 14029.95 | -201.3 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 965 | TXN | 01-28 15:25 | 01-28 17:10 | 211.3 | 215.07 | 34 | 7184.2 | +128.18 | +1.78% | 0.89R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.28 | ↑210.54 | 4.048 | 1.07 | **WIN** |
| 966 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 967 | BAC | 01-29 14:30 | 01-29 15:20 | 52.4 | 52.28 | 267 | 13990.8 | -32.04 | -0.23% | 0.33R | 50m | market | stagnation | breakout | breakout | neutral | 86.97 | ↓52.25 | 0.1065 | 1.4 | **LOSS** |
| 968 | AMAT | 01-29 14:30 | 01-29 14:50 | 341.73 | 338.97 | 40 | 13669.2 | -110.4 | -0.81% | 0.98R | 20m | market | early-reversal | trend | trend | neutral | 60.99 | ↓342.26 | 0.6263 | 2.12 | **LOSS** |
| 969 | LRCX | 01-29 14:35 | 01-29 14:55 | 249.79 | 244.06 | 51 | 12739.29 | -292.23 | -2.29% | 1.44R | 20m | market | stop-loss | breakout | breakout | neutral | 81.94 | ↓248.35 | 1.7014 | 1.8 | **LOSS** |
| 970 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 33 | 14059.98 | +407.22 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 971 | AVGO | 01-30 14:30 | 01-30 14:55 | 335.39 | 332.94 | 41 | 13750.99 | -100.45 | -0.73% | 0.75R | 25m | market | early-reversal | breakout | breakout | neutral | 79.92 | ↓333.96 | 0.8405 | 2.33 | **LOSS** |
| 972 | DDOG | 01-30 14:30 | 01-30 14:55 | 129.63 | 128.85 | 108 | 14000.04 | -84.24 | -0.6% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 72.66 | ↓128.99 | -0.2105 | 1.17 | **LOSS** |
| 973 | LLY | 01-30 14:30 | 01-30 14:45 | 1037.43 | 1024.99 | 13 | 13486.59 | -161.72 | -1.2% | 1.71R | 15m | market | stop-loss | trend | trend | neutral | 65.48 | ↓1034.95 | 0.2707 | 1.06 | **LOSS** |
| 974 | SNOW | 01-30 14:35 | 01-30 14:55 | 202.95 | 199.27 | 69 | 14003.55 | -253.92 | -1.81% | 1.83R | 20m | market | stop-loss | breakout | breakout | neutral | 82.3 | ↓202.41 | 0.3186 | 1.73 | **LOSS** |
| 975 | CAT | 01-30 14:35 | 01-30 15:00 | 671.51 | 667.3 | 20 | 13430.2 | -84.2 | -0.63% | 0.53R | 25m | market | early-reversal | breakout | breakout | neutral | 74.09 | ↓667.39 | 0.2727 | 2.1 | **LOSS** |
| 976 | CVX | 01-30 14:40 | 01-30 15:30 | 173.4 | 173.15 | 80 | 13872 | -20 | -0.14% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 65.51 | ↑172.74 | -0.0852 | 1.62 | **LOSS** |
| 977 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 159 | 7744.89 | -30.21 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 978 | TGT | 01-30 15:20 | 01-30 17:05 | 104.07 | 104.07 | 134 | 13945.38 | +0 | +0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 63.79 | ↑103.33 | 0.2133 | 2.24 | **WIN** |
| 979 | NET | 02-02 14:30 | 02-02 14:55 | 178.17 | 183.37 | 43 | 7661.31 | +223.6 | +2.92% | 3.01R | 25m | market | profit-target | trend | trend | noisyHighBeta | 56.75 | ↑177.3 | -0.0618 | 1.12 | **WIN** |
| 980 | PYPL | 02-02 14:30 | 02-02 16:00 | 52.99 | 52.92 | 263 | 13936.37 | -18.41 | -0.13% | 0.19R | 90m | market | stagnation | trend | trend | neutral | 70.67 | ↓52.79 | 0.1068 | 2.22 | **LOSS** |
| 981 | WMT | 02-02 14:30 | 02-02 16:15 | 119.96 | 121.93 | 116 | 13915.36 | +228.52 | +1.64% | 2.34R | 105m | market | timeout | trend | trend | neutral | 66.44 | ↑119.64 | 0.2594 | 1.15 | **WIN** |
| 982 | IBM | 02-02 14:30 | 02-02 14:55 | 310.33 | 308.3 | 45 | 13964.85 | -91.35 | -0.65% | 0.92R | 25m | market | early-reversal | breakout | breakout | neutral | 73.61 | ↓308.99 | 0.7286 | 1.51 | **LOSS** |
| 983 | NFLX | 02-02 14:35 | 02-02 15:10 | 84.72 | 84.23 | 165 | 13978.8 | -80.85 | -0.58% | 0.81R | 35m | market | early-reversal | breakout | breakout | neutral | 74.45 | ↓84.02 | 0.102 | 2.08 | **LOSS** |
| 984 | COST | 02-02 14:35 | 02-02 16:20 | 946.42 | 954.7 | 14 | 13249.88 | +115.92 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | neutral | 60.99 | ↑941.54 | 1.0978 | 1.01 | **WIN** |
| 985 | CRM | 02-02 14:40 | 02-02 15:30 | 215.44 | 215.23 | 64 | 13788.16 | -13.44 | -0.1% | 0.12R | 50m | market | stagnation | breakout | breakout | neutral | 73.55 | ↓214.41 | 0.3867 | 1.19 | **LOSS** |
| 986 | DELL | 02-02 14:45 | 02-02 16:30 | 116.29 | 116.82 | 119 | 13838.51 | +63.07 | +0.46% | 0.38R | 105m | market | timeout | breakout | breakout | neutral | 75.25 | ↓115.99 | 0.6109 | 1.4 | **WIN** |
| 987 | CRWD | 02-02 14:50 | 02-02 15:40 | 445.94 | 444.79 | 31 | 13824.14 | -35.65 | -0.26% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 68.88 | ↑442.27 | -0.228 | 1.24 | **LOSS** |
| 988 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 41 | 13999.04 | -5.74 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 989 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 990 | BA | 02-03 14:30 | 02-03 14:50 | 237.23 | 235.36 | 59 | 13996.57 | -110.33 | -0.79% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 991 | LMT | 02-03 14:35 | 02-03 14:55 | 643.69 | 641.06 | 21 | 13517.49 | -55.23 | -0.41% | 0.56R | 20m | market | early-reversal | trend | breakout | neutral | 69.78 | ↓641.52 | 0.8183 | 1.17 | **LOSS** |
| 992 | SBUX | 02-03 14:40 | 02-03 16:25 | 93 | 93.44 | 151 | 14043 | +66.44 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 68.32 | ↓92.6 | 0.0927 | 1.31 | **WIN** |
| 993 | LOW | 02-03 14:40 | 02-03 15:00 | 275.04 | 273.72 | 50 | 13752 | -66 | -0.48% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 77.5 | ↓272.86 | 1.0035 | 1.15 | **LOSS** |
| 994 | AMAT | 02-03 14:45 | 02-03 14:55 | 333.42 | 325.08 | 41 | 13670.22 | -341.94 | -2.5% | 1.74R | 10m | market | stop-loss | breakout | breakout | neutral | 63.98 | ↓333.68 | 1.0772 | 3.01 | **LOSS** |
| 995 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.73 | 274.83 | 50 | 13736.5 | +5 | +0.04% | 0.06R | 40m | market | breakeven-stop | breakout | breakout | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **WIN** |
| 996 | WMT | 02-04 14:30 | 02-04 15:20 | 128.35 | 127.41 | 109 | 13990.15 | -102.46 | -0.73% | 1.04R | 50m | market | early-reversal | trend | trend | neutral | 74.11 | ↓128.24 | 0.2366 | 1.22 | **LOSS** |
| 997 | DELL | 02-04 14:35 | 02-04 14:55 | 119.92 | 118.53 | 116 | 13910.72 | -161.24 | -1.16% | 0.97R | 20m | market | early-reversal | breakout | breakout | neutral | 74 | ↓119.25 | 0.3491 | 2.05 | **LOSS** |
| 998 | HPE | 02-04 14:35 | 02-04 15:30 | 22.38 | 22.29 | 622 | 13920.36 | -55.98 | -0.4% | 0.37R | 55m | market | stagnation | breakout | breakout | neutral | 78.38 | ↓22.24 | 0.0824 | 1.3 | **LOSS** |
| 999 | LOW | 02-04 14:40 | 02-04 15:30 | 279.15 | 278.31 | 50 | 13957.5 | -42 | -0.3% | 0.4R | 50m | market | stagnation | breakout | breakout | neutral | 78.29 | ↓278.01 | 0.8475 | 2.63 | **LOSS** |
| 1000 | CRM | 02-04 15:25 | 02-04 16:15 | 197.48 | 196.71 | 70 | 13823.6 | -53.9 | -0.39% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 53.69 | ↑193.04 | 0.1561 | 1.58 | **LOSS** |

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

- ⚠️ **Profit factor 0.84 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T10:45:55.253Z*
