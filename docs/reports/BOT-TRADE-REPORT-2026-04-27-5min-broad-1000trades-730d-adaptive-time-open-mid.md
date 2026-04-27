# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:35:27.057Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $15032.72 (-15.03%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 30.7% (307W / 693L) |
| Net P&L | $-15032.72 (-15.03%) |
| Gross profit | $34883.68 |
| Gross loss | $49916.4 |
| Profit factor | 0.7 |
| Avg win | $113.63 |
| Avg loss | $72.03 |
| Payoff ratio | 1.58:1 |
| Expectancy | $-15.03 / trade |
| Max drawdown | 17.31% |
| Sharpe ratio (ann.) | -4.45 |
| Trades / active day | 5.21 |
| Avg confidence | 99.33% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $84,967.28 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 347 | 27.95% | $-5885.38 | $-16.96 |
| Mid  10:30–11:30 | 653 | 32.16% | $-9147.34 | $-14.01 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| ARM | 25 | 13 | 52% | $+965.35 | $+38.61 | 2 | eligible |
| PLTR | 32 | 12 | 37.5% | $+778.28 | $+24.32 | 1.45 | throttle |
| CRM | 22 | 11 | 50% | $+752.73 | $+34.22 | 2.05 | eligible |
| AMZN | 22 | 10 | 45.45% | $+422.33 | $+19.2 | 1.6 | eligible |
| TSM | 25 | 12 | 48% | $+420.8 | $+16.83 | 1.55 | eligible |
| CRWD | 19 | 8 | 42.11% | $+375.41 | $+19.76 | 1.37 | eligible |
| BA | 25 | 9 | 36% | $+345.57 | $+13.82 | 1.36 | throttle |
| LRCX | 11 | 6 | 54.55% | $+342.89 | $+31.17 | 2.15 | eligible |
| SNOW | 20 | 9 | 45% | $+314.09 | $+15.7 | 1.67 | eligible |
| SMCI | 21 | 6 | 28.57% | $+259.25 | $+12.35 | 1.24 | throttle |
| SBUX | 14 | 6 | 42.86% | $+228.45 | $+16.32 | 1.56 | eligible |
| AMAT | 19 | 7 | 36.84% | $+213.52 | $+11.24 | 1.23 | throttle |
| ABNB | 20 | 5 | 25% | $+167.33 | $+8.37 | 1.25 | throttle |
| CAT | 10 | 3 | 30% | $+166.42 | $+16.64 | 1.51 | throttle |
| AAPL | 16 | 6 | 37.5% | $+151.49 | $+9.47 | 1.26 | throttle |
| TXN | 11 | 3 | 27.27% | $+133.7 | $+12.15 | 1.42 | throttle |
| XOM | 7 | 3 | 42.86% | $+90.96 | $+12.99 | 1.38 | eligible |
| MSFT | 6 | 2 | 33.33% | $+75.27 | $+12.55 | 1.44 | throttle |
| NVO | 8 | 3 | 37.5% | $+69.2 | $+8.65 | 1.25 | throttle |
| CVX | 5 | 3 | 60% | $+37.83 | $+7.57 | 1.28 | eligible |
| V | 5 | 1 | 20% | $+28.93 | $+5.79 | 1.43 | throttle |
| TGT | 16 | 6 | 37.5% | $-39.59 | $-2.47 | 0.93 | throttle |
| GE | 19 | 6 | 31.58% | $-66.99 | $-3.53 | 0.91 | throttle |
| DIS | 5 | 2 | 40% | $-72.63 | $-14.53 | 0.7 | throttle |
| MA | 3 | 0 | 0% | $-75.98 | $-25.33 | 0 | watch |
| COST | 5 | 1 | 20% | $-81 | $-16.2 | 0.4 | throttle |
| ASML | 10 | 3 | 30% | $-95.86 | $-9.59 | 0.81 | throttle |
| HD | 9 | 3 | 33.33% | $-125.66 | $-13.96 | 0.53 | throttle |
| BAC | 9 | 3 | 33.33% | $-127.22 | $-14.14 | 0.57 | throttle |
| NOW | 11 | 3 | 27.27% | $-157.52 | $-14.32 | 0.71 | throttle |
| LMT | 3 | 0 | 0% | $-186.15 | $-62.05 | 0 | watch |
| ADP | 2 | 0 | 0% | $-196.31 | $-98.15 | 0 | watch |
| AVGO | 20 | 8 | 40% | $-217.22 | $-10.86 | 0.82 | throttle |
| SHOP | 16 | 6 | 37.5% | $-235.68 | $-14.73 | 0.69 | throttle |
| MCD | 5 | 0 | 0% | $-247.15 | $-49.43 | 0 | throttle |
| CELH | 17 | 5 | 29.41% | $-260.11 | $-15.3 | 0.78 | throttle |
| NKE | 12 | 3 | 25% | $-261.93 | $-21.83 | 0.44 | throttle |
| UBER | 15 | 6 | 40% | $-273.51 | $-18.23 | 0.46 | throttle |
| DDOG | 19 | 6 | 31.58% | $-292.76 | $-15.41 | 0.61 | throttle |
| WMT | 5 | 0 | 0% | $-304.36 | $-60.87 | 0 | throttle |
| IBM | 7 | 1 | 14.29% | $-324.75 | $-46.39 | 0.13 | throttle |
| KLAC | 12 | 2 | 16.67% | $-333.76 | $-27.81 | 0.32 | throttle |
| LLY | 17 | 4 | 23.53% | $-378.87 | $-22.29 | 0.54 | throttle |
| PYPL | 13 | 2 | 15.38% | $-420.05 | $-32.31 | 0.48 | throttle |
| LOW | 8 | 0 | 0% | $-448.69 | $-56.09 | 0 | throttle |
| GOOGL | 11 | 3 | 27.27% | $-456.73 | $-41.52 | 0.34 | throttle |
| HPE | 11 | 2 | 18.18% | $-468.02 | $-42.55 | 0.3 | throttle |
| UNH | 14 | 5 | 35.71% | $-475.45 | $-33.96 | 0.38 | throttle |
| NET | 21 | 6 | 28.57% | $-475.58 | $-22.65 | 0.45 | throttle |
| INTC | 17 | 5 | 29.41% | $-481.26 | $-28.31 | 0.41 | throttle |
| META | 17 | 7 | 41.18% | $-483.51 | $-28.44 | 0.42 | throttle |
| GS | 12 | 2 | 16.67% | $-495.09 | $-41.26 | 0.26 | throttle |
| RIVN | 20 | 8 | 40% | $-495.75 | $-24.79 | 0.63 | throttle |
| NVDA | 24 | 10 | 41.67% | $-508.02 | $-21.17 | 0.63 | throttle |
| NFLX | 16 | 3 | 18.75% | $-513.48 | $-32.09 | 0.31 | throttle |
| INTU | 9 | 1 | 11.11% | $-546 | $-60.67 | 0.01 | throttle |
| ADBE | 12 | 3 | 25% | $-547.29 | $-45.61 | 0.21 | throttle |
| ORCL | 14 | 4 | 28.57% | $-557.6 | $-39.83 | 0.29 | throttle |
| JPM | 10 | 0 | 0% | $-590.69 | $-59.07 | 0 | throttle |
| ELF | 17 | 5 | 29.41% | $-615.27 | $-36.19 | 0.4 | throttle |
| MRVL | 16 | 2 | 12.5% | $-671.21 | $-41.95 | 0.48 | throttle |
| SQ | 13 | 3 | 23.08% | $-690.89 | $-53.15 | 0.3 | throttle |
| DELL | 18 | 5 | 27.78% | $-703.52 | $-39.08 | 0.51 | throttle |
| PANW | 14 | 2 | 14.29% | $-745.54 | $-53.25 | 0.23 | throttle |
| AMD | 22 | 4 | 18.18% | $-860.43 | $-39.11 | 0.37 | throttle |
| COIN | 14 | 2 | 14.29% | $-878.81 | $-62.77 | 0.11 | throttle |
| MU | 13 | 1 | 7.69% | $-911.12 | $-70.09 | 0.1 | throttle |
| TSLA | 25 | 7 | 28% | $-916.36 | $-36.65 | 0.44 | throttle |
| MDB | 22 | 7 | 31.82% | $-1007.88 | $-45.81 | 0.41 | throttle |
| QCOM | 17 | 2 | 11.76% | $-1053.27 | $-61.96 | 0.11 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 694 | 222 | 31.99% | $-8167.95 | $-11.77 |
| breakout | 306 | 85 | 27.78% | $-6864.77 | $-22.43 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 3 | 0 | 0% | $-107.92 | $-35.97 |
| noisyHighBeta | 97 | 29 | 29.9% | $-1441.5 | $-14.86 |
| neutral | 900 | 278 | 30.89% | $-13483.3 | $-14.98 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | PLTR | 16 | 1.32 | $+15.67 | 16 | 1.56 | $+32.97 | 0.4% | 1.36 | promote |
| Symbol | LRCX | 5 | 92.13 | $+48.12 | 6 | 1.35 | $+17.05 | 0.3% | 1.05 | watch |
| Symbol | CRM | 10 | 3.31 | $+55.83 | 12 | 1.41 | $+16.21 | 0.42% | 1.07 | watch |
| Symbol | SBUX | 11 | 1.68 | $+19.47 | 3 | 1.16 | $+4.75 | 0.09% | 0.76 | watch |
| Symbol | ARM | 15 | 3.85 | $+62.54 | 10 | 1.04 | $+2.72 | 0.5% | 0.85 | watch |
| Symbol | AAPL | 9 | 1.5 | $+19.71 | 7 | 0.88 | $-3.7 | 0.12% | 0.61 | watch |
| Symbol | GE | 11 | 1.5 | $+17.41 | 8 | 0.3 | $-32.31 | 0.27% | 0.18 | watch |
| Symbol | SNOW | 16 | 2.6 | $+29.5 | 4 | 0.1 | $-39.49 | 0.16% | 0.02 | watch |
| Symbol | TXN | 8 | 2.52 | $+33.99 | 3 | 0 | $-46.07 | 0.14% | 0 | watch |
| Symbol | SHOP | 11 | 1.44 | $+14.27 | 5 | 0 | $-78.53 | 0.39% | 0 | watch |
| Symbol | SMCI | 16 | 2.18 | $+45.51 | 5 | 0 | $-93.77 | 0.47% | 0 | watch |
| Symbol | CRWD | 11 | 0.4 | $-40.08 | 8 | 3.98 | $+102.03 | 0.24% | 3.24 | reject |
| Symbol | CAT | 7 | 1.01 | $+0.43 | 3 | 3.42 | $+54.47 | 0.05% | 2.29 | reject |
| Symbol | AMZN | 7 | 0.11 | $-45.43 | 15 | 3.16 | $+49.36 | 0.19% | 2.25 | reject |
| Symbol | TSM | 10 | 0.16 | $-27.73 | 15 | 2.62 | $+46.54 | 0.24% | 2.06 | reject |
| Symbol | ABNB | 9 | 0.48 | $-19.94 | 11 | 2.06 | $+31.53 | 0.19% | 1.46 | reject |
| Symbol | BA | 14 | 1 | $+0.13 | 11 | 1.74 | $+31.25 | 0.45% | 1.38 | reject |
| Symbol | TGT | 8 | 0.1 | $-31.77 | 8 | 1.68 | $+26.82 | 0.12% | 1.32 | reject |
| Symbol | AMAT | 9 | 1.13 | $+5.32 | 10 | 1.29 | $+16.57 | 0.4% | 1.04 | reject |
| Symbol | BAC | 7 | 0.44 | $-22.01 | 2 | 2.49 | $+13.43 | 0.02% | 0.97 | reject |
| Symbol | LLY | 8 | 0.09 | $-54.03 | 9 | 1.15 | $+5.93 | 0.3% | 0.88 | reject |
| Symbol | NOW | 6 | 0.53 | $-26.73 | 5 | 1.01 | $+0.57 | 0.2% | 0.79 | reject |
| Time slot | Open 9:30-10:30 | 347 | 0.66 | $-16.96 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | RIVN | 13 | 0.55 | $-37.97 | 7 | 0.99 | $-0.3 | 0.25% | 0.73 | reject |
| Symbol | NVDA | 15 | 0.5 | $-29.79 | 9 | 0.88 | $-6.79 | 0.49% | 0.72 | reject |
| Symbol | PYPL | 9 | 0.23 | $-43.59 | 4 | 0.91 | $-6.94 | 0.22% | 0.75 | reject |
| Symbol | HD | 5 | 0.46 | $-15.53 | 4 | 0.61 | $-12.01 | 0.07% | 0.32 | reject |
| Setup | trend | 484 | 0.75 | $-10.15 | 210 | 0.69 | $-15.5 | 4.8% | 0.53 | reject |
| Behavior | neutral | 530 | 0.69 | $-14.49 | 370 | 0.72 | $-15.69 | 6.75% | 0.56 | reject |
| Time slot | Mid 10:30-11:30 | 253 | 0.78 | $-8.89 | 400 | 0.69 | $-17.25 | 7.84% | 0.54 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-17555.79 | 0.66 |
| +3 bps/side | $-22601.8 | 0.59 |
| +5 bps/side | $-27647.92 | 0.53 |
| +10 bps/side | $-40263.31 | 0.41 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 440 |
| timeout | 201 |
| stagnation | 143 |
| breakeven-stop | 60 |
| stop-loss | 58 |
| trim-profit-target | 45 |
| trailing-stop | 27 |
| profit-target | 26 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MU | 04-30 14:10 | 04-30 14:30 | 116.07 | 115.33 | 120 | 13928.4 | -88.8 | -0.64% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 74.87 | ↓115.53 | 0.4208 | 1.13 | **LOSS** |
| 2 | NET | 04-30 14:15 | 04-30 15:05 | 90.96 | 90.54 | 153 | 13916.88 | -64.26 | -0.46% | 0.48R | 50m | market | early-reversal | trend | trend | neutral | 72.57 | ↓90.07 | 0.3165 | 1.53 | **LOSS** |
| 3 | META | 04-30 14:40 | 04-30 15:00 | 438.08 | 435.86 | 31 | 13580.48 | -68.82 | -0.51% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 62.25 | ↑433.89 | 1.608 | 1.33 | **LOSS** |
| 4 | META | 05-01 14:15 | 05-01 15:05 | 436.57 | 433.65 | 32 | 13970.24 | -93.44 | -0.67% | 0.58R | 50m | market | early-reversal | trend | trend | neutral | 57.81 | ↓432.43 | 0.7382 | 1.4 | **LOSS** |
| 5 | UBER | 05-01 14:55 | 05-01 16:05 | 67.19 | 67.13 | 208 | 13975.52 | -12.48 | -0.09% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 56.77 | ↑66.74 | 0.1682 | 1.11 | **LOSS** |
| 6 | SQ | 05-02 15:00 | 05-02 15:30 | 68.72 | 68.45 | 203 | 13950.16 | -54.81 | -0.39% | 0.33R | 30m | market | early-reversal | trend | trend | neutral | 63.33 | ↑68.13 | 0.2795 | 1.5 | **LOSS** |
| 7 | QCOM | 05-02 15:15 | 05-02 15:35 | 181.49 | 180.17 | 77 | 13974.73 | -101.64 | -0.73% | 0.62R | 20m | market | early-reversal | trend | trend | neutral | 71.83 | ↑179.14 | 2.9688 | 1.18 | **LOSS** |
| 8 | DELL | 05-06 13:55 | 05-06 14:55 | 127.31 | 127.24 | 109 | 13876.79 | -7.63 | -0.05% | 0.05R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.72 | ↓126.06 | -0.051 | 1.38 | **LOSS** |
| 9 | COIN | 05-06 14:00 | 05-06 14:30 | 234.06 | 232.06 | 32 | 7489.92 | -64 | -0.85% | 0.46R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 77.48 | ↓230.68 | 2.5605 | 1.04 | **LOSS** |
| 10 | SNOW | 05-06 14:05 | 05-06 14:30 | 161.31 | 160.71 | 86 | 13872.66 | -51.6 | -0.37% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 61.54 | ↑160.3 | 0.4 | 1.15 | **LOSS** |
| 11 | CELH | 05-06 14:05 | 05-06 15:50 | 77.54 | 78.07 | 180 | 13957.2 | +95.4 | +0.68% | 0.41R | 105m | market | timeout | trend | trend | neutral | 72.66 | ↑76.82 | 0.4048 | 1.21 | **WIN** |
| 12 | SHOP | 05-06 14:15 | 05-06 16:00 | 75.89 | 76.53 | 184 | 13963.76 | +117.76 | +0.84% | 0.69R | 105m | market | timeout | trend | trend | neutral | 71.49 | ↑75.35 | 0.3675 | 1.17 | **WIN** |
| 13 | UBER | 05-06 14:45 | 05-06 16:15 | 71.88 | 71.9 | 194 | 13944.72 | +3.88 | +0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 72.51 | ↓71.31 | 0.6195 | 1.45 | **WIN** |
| 14 | GOOGL | 05-07 13:45 | 05-07 14:05 | 170.89 | 169.88 | 81 | 13842.09 | -81.81 | -0.59% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 77.47 | ↓170.13 | 0.7463 | 1.66 | **LOSS** |
| 15 | LOW | 05-07 14:00 | 05-07 14:35 | 234.35 | 233.51 | 59 | 13826.65 | -49.56 | -0.36% | 0.51R | 35m | market | early-reversal | trend | trend | neutral | 79.67 | ↓233.56 | 0.4416 | 1.48 | **LOSS** |
| 16 | MA | 05-07 14:10 | 05-07 14:30 | 452.47 | 450.93 | 30 | 13574.1 | -46.2 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 77.29 | ↑450.27 | 1.0932 | 1.53 | **LOSS** |
| 17 | PYPL | 05-07 15:20 | 05-07 15:55 | 66.69 | 66.47 | 209 | 13938.21 | -45.98 | -0.33% | 0.47R | 35m | market | early-reversal | trend | trend | neutral | 66.9 | ↑66.31 | 0.2429 | 2.01 | **LOSS** |
| 18 | TSM | 05-08 13:45 | 05-08 14:35 | 143.27 | 142.92 | 97 | 13897.19 | -33.95 | -0.24% | 0.34R | 50m | market | stagnation | breakout | breakout | neutral | 79.73 | ↓142.04 | 0.1438 | 2.09 | **LOSS** |
| 19 | AVGO | 05-08 14:00 | 05-08 15:45 | 1317.42 | 1325.64 | 10 | 13174.2 | +82.2 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | neutral | 65.52 | ↑1302.41 | 1.957 | 2.4 | **WIN** |
| 20 | DELL | 05-08 14:00 | 05-08 15:00 | 131.17 | 131 | 106 | 13904.02 | -18.02 | -0.13% | 0.1R | 60m | market | stagnation | breakout | breakout | neutral | 77 | ↑129.87 | 0.5566 | 5.17 | **LOSS** |
| 21 | SBUX | 05-08 14:00 | 05-08 15:45 | 73.19 | 73.92 | 191 | 13979.29 | +139.43 | +1% | 1.25R | 105m | market | timeout | trend | trend | neutral | 72.09 | ↑72.88 | 0.2555 | 1.71 | **WIN** |
| 22 | ARM | 05-08 14:40 | 05-08 15:05 | 109.61 | 108.86 | 127 | 13920.47 | -95.25 | -0.68% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 72.33 | ↑107.83 | 0.4327 | 1.37 | **LOSS** |
| 23 | SMCI | 05-08 14:50 | 05-08 15:10 | 840.75 | 835.77 | 9 | 7566.75 | -44.82 | -0.59% | 0.34R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 63.86 | ↑823.06 | 3.5839 | 1.19 | **LOSS** |
| 24 | CAT | 05-09 14:00 | 05-09 15:45 | 348.72 | 350.61 | 40 | 13948.8 | +75.6 | +0.54% | 0.77R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑346.97 | 0.8997 | 1.01 | **WIN** |
| 25 | BA | 05-09 14:15 | 05-09 15:05 | 181.34 | 180.94 | 77 | 13963.18 | -30.8 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.01 | ↑180.36 | 0.3339 | 1.25 | **LOSS** |
| 26 | SBUX | 05-09 14:15 | 05-09 16:00 | 74.61 | 74.93 | 187 | 13952.07 | +59.84 | +0.43% | 0.58R | 105m | market | timeout | trend | trend | neutral | 75.65 | ↑74.13 | 0.2592 | 1.07 | **WIN** |
| 27 | INTC | 05-09 14:35 | 05-09 14:55 | 30.38 | 30.21 | 460 | 13974.8 | -78.2 | -0.56% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 75.51 | ↑30.07 | 0.0884 | 1.28 | **LOSS** |
| 28 | CELH | 05-09 15:05 | 05-09 16:10 | 83.51 | 85.54 | 167 | 13946.17 | +339.01 | +2.43% | 1.22R | 65m | market | profit-target | breakout | trend | neutral | 73.55 | ↑81.8 | 1.8825 | 1.86 | **WIN** |
| 29 | SQ | 05-09 15:15 | 05-09 17:00 | 72.37 | 72.81 | 106 | 7671.22 | +46.64 | +0.61% | 0.87R | 105m | market | timeout | trend | trend | noisyHighBeta | 78.53 | ↑71.67 | 0.2376 | 2.95 | **WIN** |
| 30 | AMZN | 05-09 15:25 | 05-09 16:30 | 190.66 | 190.55 | 73 | 13918.18 | -8.03 | -0.06% | 0.09R | 65m | market | stagnation | trend | trend | neutral | 78.91 | ↑189.09 | 0.6054 | 1.09 | **LOSS** |
| 31 | AVGO | 05-10 13:45 | 05-10 14:05 | 1344.02 | 1332.9 | 10 | 13440.2 | -111.2 | -0.83% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 87.84 | ↓1340.06 | 6.4002 | 2.66 | **LOSS** |
| 32 | DDOG | 05-10 15:15 | 05-10 15:45 | 118.62 | 118.25 | 118 | 13997.16 | -43.66 | -0.31% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 70.83 | ↑117.49 | 0.4001 | 1.04 | **LOSS** |
| 33 | MDB | 05-13 14:35 | 05-13 15:00 | 360.33 | 359.16 | 38 | 13692.54 | -44.46 | -0.32% | 0.36R | 25m | market | early-reversal | trend | trend | neutral | 70.58 | ↑358.22 | 1.1904 | 2.4 | **LOSS** |
| 34 | SBUX | 05-13 14:35 | 05-13 14:55 | 76.77 | 76.33 | 182 | 13972.14 | -80.08 | -0.57% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 68.32 | ↓76.34 | 0.1461 | 1.01 | **LOSS** |
| 35 | PLTR | 05-14 14:05 | 05-14 15:50 | 21.63 | 22.05 | 647 | 13994.61 | +271.74 | +1.94% | 1.36R | 105m | market | timeout | trend | trend | neutral | 79.08 | ↑21.47 | 0.1733 | 3.24 | **WIN** |
| 36 | SMCI | 05-14 14:05 | 05-14 14:45 | 797.68 | 807.75 | 17 | 13560.56 | +171.19 | +1.26% | 0.82R | 40m | market | trailing-stop | trend | trend | neutral | 62.4 | ↑785.14 | 0.691 | 2.75 | **WIN** |
| 37 | TSLA | 05-14 15:05 | 05-14 15:55 | 178.57 | 177.84 | 78 | 13928.46 | -56.94 | -0.41% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 64.13 | ↑176.52 | 1.4235 | 1.26 | **LOSS** |
| 38 | COIN | 05-14 15:15 | 05-14 15:40 | 205.6 | 204.4 | 37 | 7607.2 | -44.4 | -0.58% | 0.37R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 64.36 | ↑201.67 | 1.0248 | 1 | **LOSS** |
| 39 | NFLX | 05-15 14:05 | 05-15 14:55 | 619.32 | 617.25 | 22 | 13625.04 | -45.54 | -0.33% | 0.46R | 50m | market | early-reversal | trend | trend | neutral | 72.78 | ↓615.61 | 1.8472 | 1.08 | **LOSS** |
| 40 | SMCI | 05-15 14:15 | 05-15 15:15 | 858.38 | 890.73 | 8 | 6867.04 | +258.8 | +3.77% | 2.01R | 60m | market | profit-target | breakout | trend | noisyHighBeta | 71.96 | ↑850.75 | 9.5601 | 1.06 | **WIN** |
| 41 | NVDA | 05-15 14:20 | 05-15 16:05 | 935.05 | 943.42 | 14 | 13090.7 | +117.18 | +0.9% | 0.69R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑927.41 | 4.8345 | 1.16 | **WIN** |
| 42 | AMD | 05-15 14:30 | 05-15 15:20 | 157.77 | 157.22 | 88 | 13883.76 | -48.4 | -0.35% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 75.94 | ↑156.34 | 1.2032 | 1.93 | **LOSS** |
| 43 | MU | 05-15 14:35 | 05-15 15:25 | 127.47 | 126.83 | 109 | 13894.23 | -69.76 | -0.5% | 0.5R | 50m | market | early-reversal | trend | trend | neutral | 79.88 | ↑126.4 | 0.9584 | 1.7 | **LOSS** |
| 44 | LLY | 05-15 14:35 | 05-15 16:05 | 776.97 | 776.51 | 18 | 13985.46 | -8.28 | -0.06% | 0.09R | 90m | market | stagnation | trend | trend | neutral | 75.9 | ↑772.9 | 4.0664 | 1.07 | **LOSS** |
| 45 | ELF | 05-15 14:45 | 05-15 16:00 | 168.08 | 167.25 | 83 | 13950.64 | -68.89 | -0.49% | 0.48R | 75m | market | early-reversal | trend | trend | neutral | 67 | ↑166.23 | 1.39 | 1.89 | **LOSS** |
| 46 | AVGO | 05-15 15:05 | 05-15 17:05 | 1399.57 | 1411.2 | 10 | 13995.7 | +116.3 | +0.83% | 1.19R | 120m | market | timeout | trend | trend | neutral | 79.62 | ↑1384.05 | 5.416 | 1.17 | **WIN** |
| 47 | MDB | 05-15 15:20 | 05-15 16:15 | 369.35 | 371.78 | 18 | 13665.95 | +43.74 | +0.66% | 0.94R | 55m | market | trim-profit-target | trend | trend | neutral | 72.47 | ↑365.78 | 2.6947 | 1.53 | **WIN** |
| 48 | MDB | 05-15 15:20 | 05-15 17:05 | 369.35 | 374.89 | 19 | 13665.95 | +105.26 | +1.5% | 2.14R | 105m | market | timeout | trend | trend | neutral | 72.47 | ↑365.78 | 2.6947 | 1.53 | **WIN** |
| 49 | CELH | 05-15 15:25 | 05-15 15:45 | 93.81 | 93.35 | 82 | 7692.42 | -37.72 | -0.49% | 0.64R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 69.76 | ↑92.96 | 0.6294 | 1.29 | **LOSS** |
| 50 | MRVL | 05-16 13:30 | 05-16 15:10 | 71.01 | 73.1 | 197 | 13988.97 | +411.73 | +2.94% | 3.92R | 100m | market | profit-target | breakout | breakout | neutral | 80.86 | ↑71.02 | 0.2578 | 1.11 | **WIN** |
| 51 | AMD | 05-16 14:00 | 05-16 15:45 | 163.47 | 167.14 | 85 | 13894.95 | +311.95 | +2.25% | 1.74R | 105m | market | timeout | trend | trend | neutral | 75.79 | ↑161.88 | 1.03 | 2.38 | **WIN** |
| 52 | DDOG | 05-16 14:30 | 05-16 15:20 | 120.22 | 121.11 | 58 | 13945.52 | +51.62 | +0.74% | 0.87R | 50m | market | trim-profit-target | trend | trend | neutral | 67.21 | ↑119.27 | 0.2423 | 2.02 | **WIN** |
| 53 | DDOG | 05-16 14:30 | 05-16 16:15 | 120.22 | 121 | 58 | 13945.52 | +45.24 | +0.65% | 0.76R | 105m | market | timeout | trend | trend | neutral | 67.21 | ↑119.27 | 0.2423 | 2.02 | **WIN** |
| 54 | PLTR | 05-17 14:00 | 05-17 14:15 | 22.11 | 21.82 | 634 | 14017.74 | -183.86 | -1.31% | 1.41R | 15m | market | stop-loss | breakout | breakout | neutral | 68.35 | ↓21.91 | 0.0326 | 2.47 | **LOSS** |
| 55 | NFLX | 05-17 14:10 | 05-17 14:45 | 622.95 | 619.74 | 22 | 13704.9 | -70.62 | -0.52% | 0.55R | 35m | market | early-reversal | trend | trend | neutral | 74.63 | ↓619.23 | 2.8462 | 1.2 | **LOSS** |
| 56 | TSLA | 05-17 14:30 | 05-17 16:15 | 177.6 | 179.23 | 78 | 13852.8 | +127.14 | +0.92% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 63.89 | ↑174.61 | 0.2856 | 2.59 | **WIN** |
| 57 | PYPL | 05-17 14:30 | 05-17 15:00 | 64.65 | 64.41 | 216 | 13964.4 | -51.84 | -0.37% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 71.37 | ↓64.4 | 0.1736 | 2.72 | **LOSS** |
| 58 | RIVN | 05-17 14:50 | 05-17 16:10 | 10.34 | 10.32 | 744 | 7692.96 | -14.88 | -0.19% | 0.17R | 80m | market | stagnation | trend | trend | noisyHighBeta | 78.41 | ↑10.16 | 0.0363 | 1.05 | **LOSS** |
| 59 | AMAT | 05-20 14:00 | 05-20 15:45 | 216.98 | 219.34 | 64 | 13886.72 | +151.04 | +1.09% | 1.27R | 105m | market | timeout | trend | trend | neutral | 77.5 | ↑215.72 | 1.281 | 1.22 | **WIN** |
| 60 | BA | 05-20 14:05 | 05-20 15:50 | 187.43 | 188.32 | 74 | 13869.82 | +65.86 | +0.47% | 0.67R | 105m | market | timeout | trend | trend | neutral | 73.33 | ↑186.11 | 0.5791 | 2.35 | **WIN** |
| 61 | LLY | 05-20 14:20 | 05-20 14:40 | 779.97 | 777.41 | 17 | 13259.49 | -43.52 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 69.74 | ↑776.32 | 1.83 | 1.21 | **LOSS** |
| 62 | QCOM | 05-20 14:40 | 05-20 16:25 | 197.3 | 198.47 | 70 | 13811 | +81.9 | +0.59% | 0.84R | 105m | market | timeout | trend | trend | neutral | 71.68 | ↑196.11 | 0.8977 | 1.14 | **WIN** |
| 63 | JPM | 05-21 13:45 | 05-21 14:35 | 199.09 | 198.48 | 70 | 13936.3 | -42.7 | -0.31% | 0.44R | 50m | market | stagnation | breakout | breakout | neutral | 66.95 | ↑198.07 | -0.0564 | 1.13 | **LOSS** |
| 64 | TSLA | 05-21 14:00 | 05-21 14:20 | 179.67 | 177.65 | 77 | 13834.59 | -155.54 | -1.12% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 71.81 | ↓178.36 | 1.1911 | 1.39 | **LOSS** |
| 65 | DDOG | 05-21 14:20 | 05-21 16:05 | 122.56 | 122.94 | 114 | 13971.84 | +43.32 | +0.31% | 0.41R | 105m | market | timeout | trend | trend | neutral | 67.64 | ↑121.77 | 0.18 | 1.91 | **WIN** |
| 66 | CRWD | 05-21 14:30 | 05-21 15:30 | 349.12 | 348.61 | 40 | 13964.8 | -20.4 | -0.15% | 0.12R | 60m | market | stagnation | trend | trend | neutral | 52 | ↑345.6 | 0.3984 | 1.17 | **LOSS** |
| 67 | SMCI | 05-21 14:35 | 05-21 16:20 | 913.7 | 935.65 | 8 | 7309.6 | +175.6 | +2.4% | 1.34R | 105m | market | timeout | breakout | trend | noisyHighBeta | 56.73 | ↑895.89 | 2.2754 | 1.82 | **WIN** |
| 68 | ARM | 05-21 14:40 | 05-21 15:35 | 112.95 | 112.98 | 123 | 13892.85 | +3.69 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | trend | neutral | 78.42 | ↑111.91 | 0.717 | 2.03 | **WIN** |
| 69 | DELL | 05-21 14:55 | 05-21 16:40 | 148.39 | 149.46 | 94 | 13948.66 | +100.58 | +0.72% | 0.87R | 105m | market | timeout | trend | trend | neutral | 79.19 | ↑146.38 | 0.4703 | 1.81 | **WIN** |
| 70 | META | 05-22 14:10 | 05-22 15:00 | 471.04 | 470.67 | 29 | 13660.16 | -10.73 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 73.41 | ↑469.59 | 1.4282 | 1.28 | **LOSS** |
| 71 | ELF | 05-22 14:25 | 05-22 14:55 | 159.79 | 158.5 | 87 | 13901.73 | -112.23 | -0.81% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 58.74 | ↑157.8 | 0.2229 | 2.34 | **LOSS** |
| 72 | RIVN | 05-22 15:25 | 05-22 17:10 | 10.46 | 10.53 | 736 | 7698.56 | +51.52 | +0.67% | 0.56R | 105m | market | timeout | trend | trend | noisyHighBeta | 72.73 | ↑10.24 | 0.0742 | 1.32 | **WIN** |
| 73 | LLY | 05-23 13:35 | 05-23 13:50 | 813.25 | 804.5 | 17 | 13825.25 | -148.75 | -1.08% | 1.54R | 15m | market | stop-loss | breakout | breakout | neutral | 73.76 | ↓811.78 | 2.0946 | 5.2 | **LOSS** |
| 74 | ADBE | 05-23 14:00 | 05-23 14:55 | 489.03 | 486.8 | 28 | 13692.84 | -62.44 | -0.46% | 0.66R | 55m | market | early-reversal | trend | trend | neutral | 69.75 | ↓487.25 | 1.3427 | 1.13 | **LOSS** |
| 75 | DDOG | 05-23 14:10 | 05-23 14:55 | 124.77 | 123.87 | 112 | 13974.24 | -100.8 | -0.72% | 0.75R | 45m | market | early-reversal | trend | trend | neutral | 69.92 | ↓123.82 | 0.6173 | 1.29 | **LOSS** |
| 76 | ELF | 05-23 14:40 | 05-23 16:10 | 184.14 | 188.06 | 19 | 6997.32 | +74.48 | +2.13% | 1.07R | 90m | market | trim-profit-target | breakout | trend | noisyHighBeta | 78.49 | ↑178.47 | 7.6217 | 1.02 | **WIN** |
| 77 | ELF | 05-23 14:40 | 05-23 16:25 | 184.14 | 188.67 | 19 | 6997.32 | +86.07 | +2.46% | 1.23R | 105m | market | timeout | breakout | trend | noisyHighBeta | 78.49 | ↑178.47 | 7.6217 | 1.02 | **WIN** |
| 78 | PANW | 05-24 13:35 | 05-24 13:55 | 316.34 | 314.6 | 44 | 13918.96 | -76.56 | -0.55% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 99.81 | ↓314.95 | 0.6112 | 1.28 | **LOSS** |
| 79 | META | 05-24 14:05 | 05-24 15:50 | 472.84 | 476.31 | 29 | 13712.36 | +100.63 | +0.73% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 81.92 | ↑469.23 | 1.9165 | 1.44 | **WIN** |
| 80 | AMD | 05-24 14:05 | 05-24 15:50 | 164.76 | 166.46 | 85 | 14004.6 | +144.5 | +1.03% | 0.78R | 105m | market | timeout | breakout | breakout | neutral | 84.02 | ↑162.89 | 1.1974 | 1.45 | **WIN** |
| 81 | TSLA | 05-24 14:05 | 05-24 15:25 | 177.1 | 178.38 | 39 | 13813.8 | +49.92 | +0.72% | 0.62R | 80m | market | trim-profit-target | trend | trend | neutral | 75.51 | ↑175.88 | 0.5949 | 1.36 | **WIN** |
| 82 | TSLA | 05-24 14:05 | 05-24 15:50 | 177.1 | 177.9 | 39 | 13813.8 | +31.2 | +0.45% | 0.39R | 105m | market | timeout | trend | trend | neutral | 75.51 | ↑175.88 | 0.5949 | 1.36 | **WIN** |
| 83 | DELL | 05-24 14:05 | 05-24 14:30 | 161.6 | 166.08 | 86 | 13897.6 | +385.28 | +2.77% | 1.43R | 25m | market | profit-target | breakout | breakout | neutral | 90.7 | ↑158.27 | 2.0259 | 1.16 | **WIN** |
| 84 | CRWD | 05-24 14:15 | 05-24 15:35 | 348.17 | 353.32 | 20 | 13926.8 | +103 | +1.48% | 1.74R | 80m | market | trim-profit-target | trend | trend | neutral | 69.97 | ↑345.63 | 0.8419 | 1.04 | **WIN** |
| 85 | CRWD | 05-24 14:15 | 05-24 16:00 | 348.17 | 354.05 | 20 | 13926.8 | +117.6 | +1.69% | 1.99R | 105m | market | timeout | trend | trend | neutral | 69.97 | ↑345.63 | 0.8419 | 1.04 | **WIN** |
| 86 | MU | 05-24 14:30 | 05-24 14:50 | 128.88 | 128.27 | 108 | 13919.04 | -65.88 | -0.47% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 79.19 | ↑127.63 | 0.91 | 1.82 | **LOSS** |
| 87 | SMCI | 05-24 14:45 | 05-24 15:20 | 889.18 | 877.38 | 8 | 7113.44 | -94.4 | -1.33% | 0.67R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 72.34 | ↑868.06 | 11.1563 | 1.11 | **LOSS** |
| 88 | ARM | 05-24 14:50 | 05-24 16:35 | 114.54 | 114.82 | 122 | 13973.88 | +34.16 | +0.24% | 0.29R | 105m | market | timeout | trend | trend | neutral | 74 | ↑113.13 | 0.6852 | 2.18 | **WIN** |
| 89 | QCOM | 05-24 15:15 | 05-24 15:35 | 211.27 | 209.09 | 66 | 13943.82 | -143.88 | -1.03% | 1.47R | 20m | market | stop-loss | trend | trend | neutral | 78.67 | ↑208.46 | 2.5859 | 1.56 | **LOSS** |
| 90 | AMD | 05-28 14:45 | 05-28 15:05 | 172.1 | 170.83 | 81 | 13940.1 | -102.87 | -0.74% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 74.48 | ↑168.14 | 1.0196 | 1.77 | **LOSS** |
| 91 | INTC | 05-28 14:45 | 05-28 15:35 | 31.28 | 31.26 | 447 | 13982.16 | -8.94 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.97 | ↑31.01 | 0.1351 | 1.11 | **LOSS** |
| 92 | AMZN | 05-29 14:15 | 05-29 15:05 | 183.5 | 183.08 | 76 | 13946 | -31.92 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 75.14 | ↑182.7 | 0.4864 | 1.91 | **LOSS** |
| 93 | NET | 05-29 14:30 | 05-29 15:25 | 74.39 | 74.32 | 188 | 13985.32 | -13.16 | -0.09% | 0.11R | 55m | market | stagnation | trend | trend | neutral | 58.09 | ↑73.75 | 0.1402 | 1.17 | **LOSS** |
| 94 | LLY | 05-29 14:40 | 05-29 15:30 | 812.17 | 811.24 | 17 | 13806.89 | -15.81 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 61.26 | ↑807.56 | 2.1101 | 1.35 | **LOSS** |
| 95 | TSLA | 05-30 14:05 | 05-30 14:25 | 182.36 | 180.87 | 76 | 13859.36 | -113.24 | -0.82% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 79.54 | ↑180.16 | 1.2053 | 1.14 | **LOSS** |
| 96 | HPE | 05-30 14:05 | 05-30 14:25 | 18.64 | 18.52 | 751 | 13998.64 | -90.12 | -0.64% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 68.84 | ↓18.56 | 0.0712 | 2.47 | **LOSS** |
| 97 | TGT | 05-30 14:05 | 05-30 14:25 | 149.27 | 148.26 | 93 | 13882.11 | -93.93 | -0.68% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 70 | ↓148.54 | 0.4338 | 1.01 | **LOSS** |
| 98 | MRVL | 05-30 14:20 | 05-30 14:40 | 77.23 | 76.47 | 182 | 14055.86 | -138.32 | -0.98% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 63.92 | ↓76.44 | 0.2038 | 1.24 | **LOSS** |
| 99 | PLTR | 05-30 15:25 | 05-30 17:10 | 21.41 | 21.93 | 654 | 14002.14 | +340.08 | +2.43% | 3.33R | 105m | market | timeout | trend | trend | neutral | 69.16 | ↑21.26 | 0.0893 | 3.48 | **WIN** |
| 100 | DIS | 05-31 13:40 | 05-31 14:05 | 102.91 | 102.36 | 136 | 13995.76 | -74.8 | -0.53% | 0.76R | 25m | market | early-reversal | breakout | breakout | neutral | 81.74 | ↓102.68 | 0.1262 | 1.45 | **LOSS** |
| 101 | SHOP | 05-31 14:00 | 05-31 14:20 | 59.17 | 58.5 | 236 | 13964.12 | -158.12 | -1.13% | 1.22R | 20m | market | early-reversal | trend | trend | neutral | 78.64 | ↓58.8 | 0.1793 | 2.33 | **LOSS** |
| 102 | BAC | 05-31 14:00 | 05-31 14:20 | 39.14 | 38.97 | 357 | 13972.98 | -60.69 | -0.43% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 67.11 | ↓38.94 | 0.1067 | 2.34 | **LOSS** |
| 103 | TGT | 05-31 14:25 | 05-31 16:10 | 151.4 | 151.7 | 92 | 13928.8 | +27.6 | +0.2% | 0.24R | 105m | market | timeout | trend | trend | neutral | 67.26 | ↑150.38 | 0.3447 | 1.17 | **WIN** |
| 104 | COIN | 06-04 14:00 | 06-04 14:35 | 236.87 | 234.52 | 32 | 7579.84 | -75.2 | -0.99% | 0.7R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 78.5 | ↓233.98 | 1.9305 | 1.45 | **LOSS** |
| 105 | ABNB | 06-04 14:00 | 06-04 14:20 | 147.47 | 146.95 | 94 | 13862.18 | -48.88 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 79.04 | ↓146.93 | 0.4784 | 3.53 | **LOSS** |
| 106 | SQ | 06-04 14:00 | 06-04 14:30 | 65.18 | 64.89 | 214 | 13948.52 | -62.06 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 65.36 | ↑64.61 | 0.0795 | 2.09 | **LOSS** |
| 107 | NET | 06-04 14:05 | 06-04 14:50 | 68.02 | 67.79 | 205 | 13944.1 | -47.15 | -0.34% | 0.43R | 45m | market | early-reversal | trend | trend | neutral | 71.94 | ↓67.69 | 0.2497 | 1.1 | **LOSS** |
| 108 | UNH | 06-04 14:25 | 06-04 14:45 | 503.72 | 502.15 | 27 | 13600.44 | -42.39 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 73.8 | ↑498.28 | 1.2474 | 2.29 | **LOSS** |
| 109 | PLTR | 06-04 15:20 | 06-04 17:05 | 21.64 | 21.87 | 649 | 14044.36 | +149.27 | +1.06% | 1.29R | 105m | market | timeout | trend | trend | neutral | 69.67 | ↑21.46 | 0.092 | 5.3 | **WIN** |
| 110 | MRVL | 06-05 14:10 | 06-05 15:05 | 68.96 | 68.83 | 111 | 7654.56 | -14.43 | -0.19% | 0.12R | 55m | market | stagnation | trend | trend | noisyHighBeta | 76.97 | ↓68.56 | 0.539 | 1.72 | **LOSS** |
| 111 | RIVN | 06-05 14:35 | 06-05 14:55 | 11.48 | 11.27 | 670 | 7691.6 | -140.7 | -1.83% | 0.92R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 60.54 | ↓11.34 | 0.042 | 1.09 | **LOSS** |
| 112 | KLAC | 06-05 14:40 | 06-05 16:35 | 775.03 | 778.12 | 18 | 13950.54 | +55.62 | +0.4% | 0.32R | 115m | market | timeout | breakout | trend | neutral | 72.93 | ↑768.61 | 7.1324 | 2.19 | **WIN** |
| 113 | SMCI | 06-05 14:55 | 06-05 15:30 | 812.79 | 807.07 | 17 | 13817.43 | -97.24 | -0.7% | 0.49R | 35m | market | early-reversal | breakout | breakout | neutral | 71.82 | ↑797.01 | 9.7392 | 1.43 | **LOSS** |
| 114 | UBER | 06-05 15:00 | 06-05 15:35 | 65.63 | 65.34 | 213 | 13979.19 | -61.77 | -0.44% | 0.58R | 35m | market | early-reversal | trend | trend | neutral | 65.06 | ↑65.02 | 0.2813 | 2 | **LOSS** |
| 115 | AVGO | 06-05 15:10 | 06-05 16:55 | 1386.77 | 1401.23 | 10 | 13867.7 | +144.6 | +1.04% | 1.27R | 105m | market | timeout | trend | trend | neutral | 77.63 | ↑1369.38 | 14.9042 | 1.77 | **WIN** |
| 116 | TSM | 06-05 15:10 | 06-05 16:00 | 163.11 | 162.97 | 85 | 13864.35 | -11.9 | -0.09% | 0.12R | 50m | market | stagnation | trend | trend | neutral | 75.81 | ↑161.1 | 2.6345 | 1.01 | **LOSS** |
| 117 | CELH | 06-05 15:10 | 06-05 16:55 | 73.49 | 74.82 | 191 | 14036.59 | +254.03 | +1.81% | 1.4R | 105m | market | timeout | trend | trend | neutral | 75 | ↑72.47 | 0.4398 | 1.1 | **WIN** |
| 118 | ABNB | 06-06 14:00 | 06-06 14:30 | 147.98 | 147.41 | 94 | 13910.12 | -53.58 | -0.39% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 77.81 | ↓146.8 | 0.3011 | 1.89 | **LOSS** |
| 119 | MDB | 06-06 14:00 | 06-06 14:40 | 234.9 | 233.65 | 32 | 7516.8 | -40 | -0.53% | 0.54R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 59.29 | ↓232.72 | 0.2042 | 1.07 | **LOSS** |
| 120 | NKE | 06-06 14:00 | 06-06 14:20 | 94.98 | 94.57 | 147 | 13962.06 | -60.27 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 73.33 | ↓94.59 | 0.1754 | 1.61 | **LOSS** |
| 121 | ADBE | 06-06 14:20 | 06-06 15:50 | 464.42 | 464.42 | 30 | 13932.6 | +0 | +0% | 0R | 90m | market | breakeven-stop | trend | trend | neutral | 75.12 | ↓461.61 | 1.5859 | 1.25 | **WIN** |
| 122 | LLY | 06-06 14:20 | 06-06 14:40 | 846.74 | 841.51 | 16 | 13547.84 | -83.68 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 79.7 | ↓841.28 | 2.1378 | 2.1 | **LOSS** |
| 123 | AMD | 06-06 14:25 | 06-06 15:15 | 167.64 | 167.35 | 83 | 13914.12 | -24.07 | -0.17% | 0.11R | 50m | market | breakeven-stop | breakout | trend | neutral | 65.91 | ↑165.23 | 0.2158 | 1 | **LOSS** |
| 124 | PLTR | 06-06 15:15 | 06-06 15:35 | 23.73 | 23.56 | 593 | 14071.89 | -100.81 | -0.72% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 73.78 | ↑23.36 | 0.1711 | 1.1 | **LOSS** |
| 125 | HPE | 06-06 15:25 | 06-06 15:55 | 20.02 | 19.91 | 698 | 13973.96 | -76.78 | -0.55% | 0.46R | 30m | market | early-reversal | breakout | breakout | neutral | 88.2 | ↑19.62 | 0.0713 | 4.08 | **LOSS** |
| 126 | CELH | 06-06 15:25 | 06-06 15:35 | 75.53 | 74.62 | 186 | 14048.58 | -169.26 | -1.2% | 1.11R | 10m | market | stop-loss | breakout | breakout | neutral | 83.28 | ↑73.94 | 0.2284 | 3.55 | **LOSS** |
| 127 | MRVL | 06-07 14:00 | 06-07 14:20 | 68.82 | 68.39 | 112 | 7707.84 | -48.16 | -0.62% | 0.71R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 59.75 | ↓68.39 | 0.0548 | 1.52 | **LOSS** |
| 128 | ADBE | 06-07 14:15 | 06-07 14:35 | 465.17 | 463.73 | 30 | 13955.1 | -43.2 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 78.96 | ↑462.01 | 0.4993 | 3.12 | **LOSS** |
| 129 | NKE | 06-07 14:15 | 06-07 15:45 | 96.65 | 97.58 | 72 | 13917.6 | +66.96 | +0.96% | 1.37R | 90m | market | trim-profit-target | trend | trend | neutral | 65.09 | ↑96.13 | 0.0895 | 1.02 | **WIN** |
| 130 | NKE | 06-07 14:15 | 06-07 16:00 | 96.65 | 97.59 | 72 | 13917.6 | +67.68 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 65.09 | ↑96.13 | 0.0895 | 1.02 | **WIN** |
| 131 | CAT | 06-07 14:35 | 06-07 14:55 | 332.34 | 331.03 | 42 | 13958.28 | -55.02 | -0.39% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 64.97 | ↑328.64 | 0.873 | 1.23 | **LOSS** |
| 132 | SHOP | 06-07 14:40 | 06-07 15:00 | 61.78 | 61.56 | 226 | 13962.28 | -49.72 | -0.36% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 55.7 | ↑61.43 | 0.1003 | 2.04 | **LOSS** |
| 133 | MDB | 06-07 14:55 | 06-07 15:15 | 231.93 | 229.96 | 60 | 13915.8 | -118.2 | -0.85% | 0.93R | 20m | market | stop-loss | trend | trend | neutral | 75.7 | ↑228.09 | 0.3295 | 1.73 | **LOSS** |
| 134 | WMT | 06-10 13:35 | 06-10 13:55 | 66.91 | 66.57 | 192 | 12846.72 | -65.28 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 72.66 | ↓66.78 | 0.1446 | 1.57 | **LOSS** |
| 135 | DDOG | 06-10 14:00 | 06-10 15:00 | 112.6 | 112.43 | 124 | 13962.4 | -21.08 | -0.15% | 0.12R | 60m | market | stagnation | breakout | trend | neutral | 75.58 | ↑111.77 | 0.5881 | 1.15 | **LOSS** |
| 136 | DELL | 06-10 14:15 | 06-10 15:55 | 133.4 | 133.08 | 53 | 7070.2 | -16.96 | -0.24% | 0.13R | 100m | market | trailing-stop | breakout | trend | noisyHighBeta | 72.85 | ↓131.67 | 0.9097 | 2.62 | **LOSS** |
| 137 | SMCI | 06-10 14:20 | 06-10 15:55 | 785.32 | 788.16 | 17 | 13350.44 | +48.28 | +0.36% | 0.23R | 95m | market | trailing-stop | breakout | breakout | neutral | 61.14 | ↓771.25 | 1.937 | 1.16 | **WIN** |
| 138 | ARM | 06-10 14:25 | 06-10 15:55 | 139.87 | 139.85 | 100 | 13987 | -2 | -0.01% | 0.01R | 90m | market | breakeven-stop | breakout | trend | neutral | 63.23 | ↑135.28 | 0.5967 | 1.43 | **LOSS** |
| 139 | HPE | 06-10 14:25 | 06-10 16:10 | 20.24 | 20.49 | 690 | 13965.6 | +172.5 | +1.24% | 1.27R | 105m | market | timeout | trend | trend | neutral | 67.72 | ↑20.09 | 0.044 | 1 | **WIN** |
| 140 | QCOM | 06-10 14:30 | 06-10 16:15 | 209.15 | 209.85 | 66 | 13803.9 | +46.2 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑207.5 | 0.7771 | 1.57 | **WIN** |
| 141 | MDB | 06-10 14:45 | 06-10 15:05 | 229.17 | 227.08 | 61 | 13979.37 | -127.49 | -0.91% | 0.97R | 20m | market | stop-loss | trend | trend | neutral | 66.42 | ↑226.84 | 0.4116 | 1.02 | **LOSS** |
| 142 | AMAT | 06-10 14:45 | 06-10 16:30 | 226.23 | 228.21 | 61 | 13800.03 | +120.78 | +0.88% | 1.26R | 105m | market | timeout | trend | trend | neutral | 72.6 | ↑224.05 | 1.1902 | 1.75 | **WIN** |
| 143 | AMD | 06-10 14:55 | 06-10 15:15 | 165.29 | 163.08 | 84 | 13884.36 | -185.64 | -1.34% | 1.11R | 20m | market | stop-loss | breakout | breakout | neutral | 82.16 | ↑162.33 | -0.8062 | 1.27 | **LOSS** |
| 144 | LRCX | 06-10 15:00 | 06-10 16:45 | 994.56 | 1001.38 | 14 | 13923.84 | +95.48 | +0.69% | 0.68R | 105m | market | timeout | breakout | breakout | neutral | 77.5 | ↑979.64 | 6.7585 | 3.3 | **WIN** |
| 145 | TSM | 06-10 15:05 | 06-10 16:10 | 168.18 | 168.14 | 83 | 13958.94 | -3.32 | -0.02% | 0.03R | 65m | market | breakeven-stop | trend | trend | neutral | 79.69 | ↑166.23 | 1.173 | 1.14 | **LOSS** |
| 146 | MU | 06-10 15:20 | 06-10 15:55 | 135.18 | 134.46 | 103 | 13923.54 | -74.16 | -0.53% | 0.75R | 35m | market | early-reversal | trend | trend | neutral | 78.07 | ↑133.41 | 0.9818 | 1.65 | **LOSS** |
| 147 | AVGO | 06-10 15:25 | 06-10 15:55 | 1447.22 | 1442.84 | 9 | 13024.98 | -39.42 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 70.72 | ↑1433.8 | 7.2642 | 2.43 | **LOSS** |
| 148 | RIVN | 06-10 15:25 | 06-10 15:40 | 11.85 | 11.72 | 1180 | 13983 | -153.4 | -1.1% | 1.02R | 15m | market | stop-loss | trend | trend | neutral | 70.18 | ↑11.63 | 0.0691 | 1.94 | **LOSS** |
| 149 | AAPL | 06-11 14:00 | 06-11 15:35 | 199.77 | 205.1 | 70 | 13983.9 | +373.1 | +2.67% | 2.38R | 95m | market | profit-target | breakout | breakout | neutral | 86.87 | ↑197.22 | 1.2309 | 1.44 | **WIN** |
| 150 | ARM | 06-11 14:05 | 06-11 15:45 | 143.34 | 145.32 | 24 | 7023.66 | +47.52 | +1.38% | 0.72R | 100m | market | trim-profit-target | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 151 | ARM | 06-11 14:05 | 06-11 15:50 | 143.34 | 145.41 | 25 | 7023.66 | +51.75 | +1.44% | 0.75R | 105m | market | timeout | breakout | trend | noisyHighBeta | 71.45 | ↑141.47 | 0.6171 | 1.49 | **WIN** |
| 152 | DELL | 06-11 14:20 | 06-11 15:05 | 133.52 | 132.73 | 105 | 14019.6 | -82.95 | -0.59% | 0.38R | 45m | market | early-reversal | trend | trend | neutral | 58.55 | ↓132.27 | 0.0849 | 1.28 | **LOSS** |
| 153 | ELF | 06-11 14:20 | 06-11 16:10 | 184.05 | 185.48 | 76 | 13987.8 | +108.68 | +0.78% | 0.81R | 110m | market | timeout | breakout | breakout | neutral | 60.07 | ↑181.8 | 0.4826 | 1.37 | **WIN** |
| 154 | NOW | 06-11 14:35 | 06-11 15:25 | 716.36 | 714.74 | 22 | 15759.92 | -35.64 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | cleanTrend | 68.97 | ↑712.58 | 2.8919 | 1.37 | **LOSS** |
| 155 | AVGO | 06-11 14:40 | 06-11 16:25 | 1443.94 | 1450.73 | 9 | 12995.46 | +61.11 | +0.47% | 0.54R | 105m | market | timeout | trend | trend | neutral | 53.29 | ↑1433.34 | 3.1328 | 2.31 | **WIN** |
| 156 | INTC | 06-11 14:40 | 06-11 15:00 | 31.03 | 30.81 | 450 | 13963.5 | -99 | -0.71% | 0.95R | 20m | market | early-reversal | trend | trend | neutral | 59.67 | ↑30.78 | 0.04 | 1.52 | **LOSS** |
| 157 | KLAC | 06-12 13:55 | 06-12 14:45 | 823.93 | 821.77 | 17 | 14006.81 | -36.72 | -0.26% | 0.27R | 50m | market | stagnation | breakout | breakout | neutral | 95.53 | ↓817.85 | 7.0041 | 1.2 | **LOSS** |
| 158 | TSLA | 06-12 14:10 | 06-12 15:40 | 174.32 | 178.77 | 80 | 13945.6 | +356 | +2.55% | 1.53R | 90m | market | profit-target | trend | trend | neutral | 78.02 | ↑172.96 | 1.1756 | 1.06 | **WIN** |
| 159 | QCOM | 06-12 14:10 | 06-12 14:40 | 214.54 | 213.36 | 65 | 13945.1 | -76.7 | -0.55% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 77.82 | ↑212.77 | 1.3169 | 1.16 | **LOSS** |
| 160 | SMCI | 06-12 14:25 | 06-12 14:50 | 799.28 | 792.27 | 17 | 13587.76 | -119.17 | -0.88% | 0.54R | 25m | market | early-reversal | trend | trend | neutral | 76.96 | ↓793.66 | 4.9498 | 2.26 | **LOSS** |
| 161 | SMCI | 06-13 14:00 | 06-13 14:55 | 806.17 | 826.8 | 16 | 12898.72 | +330.08 | +2.56% | 1.28R | 55m | market | profit-target | breakout | breakout | neutral | 63.8 | ↑796.61 | 4.5052 | 2.43 | **WIN** |
| 162 | INTU | 06-13 14:20 | 06-13 14:40 | 598.48 | 595.26 | 23 | 13765.04 | -74.06 | -0.54% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 66.08 | ↑592.51 | 1.191 | 1.03 | **LOSS** |
| 163 | DELL | 06-13 15:05 | 06-13 15:40 | 135.54 | 134.8 | 103 | 13960.62 | -76.22 | -0.55% | 0.45R | 35m | market | early-reversal | trend | trend | neutral | 62.54 | ↑134.12 | 0.907 | 1.55 | **LOSS** |
| 164 | SMCI | 06-13 15:10 | 06-13 16:10 | 843.07 | 865.72 | 16 | 13489.12 | +362.4 | +2.69% | 1.35R | 60m | market | profit-target | breakout | breakout | neutral | 74.52 | ↑814.09 | 16.0611 | 1.57 | **WIN** |
| 165 | NVDA | 06-14 14:05 | 06-14 15:05 | 131.57 | 131.31 | 106 | 13946.42 | -27.56 | -0.2% | 0.16R | 60m | market | stagnation | trend | trend | neutral | 75 | ↑130.03 | 0.4877 | 2.23 | **LOSS** |
| 166 | INTU | 06-14 14:20 | 06-14 14:40 | 600.03 | 596.91 | 23 | 13800.69 | -71.76 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 70.78 | ↓597.44 | 1.3598 | 1.42 | **LOSS** |
| 167 | NOW | 06-14 14:30 | 06-14 14:50 | 728.83 | 725.63 | 19 | 13847.77 | -60.8 | -0.44% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.99 | ↑725.28 | 3.6684 | 1.73 | **LOSS** |
| 168 | SHOP | 06-14 15:10 | 06-14 16:55 | 67.17 | 68.02 | 208 | 13971.36 | +176.8 | +1.27% | 1.41R | 105m | market | timeout | trend | trend | neutral | 56.29 | ↑66.54 | 0.5539 | 1.65 | **WIN** |
| 169 | ADP | 06-17 13:50 | 06-17 14:10 | 245.18 | 242.63 | 57 | 13975.26 | -145.35 | -1.04% | 1.49R | 20m | market | stop-loss | breakout | breakout | neutral | 67.27 | ↓244.01 | 0.4404 | 1.69 | **LOSS** |
| 170 | SBUX | 06-17 14:15 | 06-17 16:00 | 80.31 | 81.1 | 174 | 13973.94 | +137.46 | +0.98% | 1.34R | 105m | market | timeout | trend | trend | neutral | 69.41 | ↑79.93 | 0.2337 | 1.04 | **WIN** |
| 171 | AAPL | 06-17 14:55 | 06-17 15:15 | 216.99 | 216.22 | 64 | 13887.36 | -49.28 | -0.35% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.29 | ↑214.82 | 1.1471 | 1.21 | **LOSS** |
| 172 | GE | 06-17 14:55 | 06-17 16:40 | 160.15 | 162.81 | 87 | 13933.05 | +231.42 | +1.66% | 1.8R | 105m | market | timeout | trend | trend | neutral | 69.99 | ↑158.68 | 1.1764 | 1.56 | **WIN** |
| 173 | KLAC | 06-17 15:00 | 06-17 16:05 | 831.39 | 830.19 | 16 | 13302.24 | -19.2 | -0.14% | 0.2R | 65m | market | stagnation | trend | trend | neutral | 62.18 | ↓829.05 | 2.8666 | 1.68 | **LOSS** |
| 174 | BA | 06-17 15:20 | 06-17 15:45 | 179.43 | 178.73 | 78 | 13995.54 | -54.6 | -0.39% | 0.56R | 25m | market | early-reversal | trend | trend | neutral | 77.34 | ↑177.61 | 0.4497 | 1.89 | **LOSS** |
| 175 | ADBE | 06-18 14:05 | 06-18 14:30 | 530.27 | 525.87 | 26 | 13787.02 | -114.4 | -0.83% | 0.65R | 25m | market | early-reversal | trend | trend | neutral | 68.53 | ↑523.37 | 2.0578 | 1.5 | **LOSS** |
| 176 | SMCI | 06-18 14:05 | 06-18 14:55 | 923.89 | 921.56 | 8 | 7391.12 | -18.64 | -0.25% | 0.13R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 56.64 | ↑908.44 | 0.1143 | 2.38 | **LOSS** |
| 177 | DELL | 06-18 14:05 | 06-18 14:55 | 149.29 | 150.5 | 94 | 14033.26 | +113.74 | +0.81% | 0.41R | 50m | market | trailing-stop | breakout | trend | neutral | 73.66 | ↑147.08 | 1.2704 | 1.43 | **WIN** |
| 178 | ARM | 06-18 14:15 | 06-18 15:30 | 164.98 | 166.82 | 46 | 7589.08 | +84.64 | +1.12% | 0.56R | 75m | market | trailing-stop | breakout | trend | noisyHighBeta | 61.42 | ↑162.59 | 0.68 | 1.11 | **WIN** |
| 179 | NET | 06-18 14:25 | 06-18 15:10 | 78.22 | 77.98 | 178 | 13923.16 | -42.72 | -0.31% | 0.36R | 45m | market | early-reversal | trend | trend | neutral | 58.77 | ↓77.78 | 0.1791 | 1.31 | **LOSS** |
| 180 | AMAT | 06-18 14:40 | 06-18 15:05 | 246.91 | 246.18 | 56 | 13826.96 | -40.88 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 73.1 | ↑244.6 | 0.9873 | 1.01 | **LOSS** |
| 181 | NKE | 06-20 15:00 | 06-20 15:20 | 95.9 | 95.46 | 146 | 14001.4 | -64.24 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑95.16 | 0.2626 | 1.42 | **LOSS** |
| 182 | CRM | 06-20 15:20 | 06-20 16:25 | 241.28 | 241.02 | 58 | 13994.24 | -15.08 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 77.92 | ↑238.68 | 2.2356 | 1.04 | **LOSS** |
| 183 | INTC | 06-21 14:10 | 06-21 14:30 | 31.19 | 30.98 | 448 | 13973.12 | -94.08 | -0.67% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 66.67 | ↓30.98 | 0.0773 | 1.15 | **LOSS** |
| 184 | INTU | 06-21 15:00 | 06-21 15:20 | 627.04 | 624.36 | 22 | 13794.88 | -58.96 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 65.36 | ↑622.42 | 1.9836 | 2.6 | **LOSS** |
| 185 | SHOP | 06-21 15:10 | 06-21 15:30 | 64.27 | 64.03 | 218 | 14010.86 | -52.32 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 63.27 | ↑63.86 | 0.0871 | 1.46 | **LOSS** |
| 186 | AMZN | 06-24 14:20 | 06-24 14:40 | 190.86 | 188.03 | 73 | 13932.78 | -206.59 | -1.48% | 1.4R | 20m | market | stop-loss | trend | trend | neutral | 74.27 | ↓189.58 | 1.004 | 1.3 | **LOSS** |
| 187 | BA | 06-24 14:40 | 06-24 15:25 | 179.94 | 179.16 | 77 | 13855.38 | -60.06 | -0.43% | 0.54R | 45m | market | early-reversal | trend | trend | neutral | 71.39 | ↑178.48 | 0.7501 | 2.82 | **LOSS** |
| 188 | DDOG | 06-24 15:05 | 06-24 16:50 | 119.57 | 119.52 | 117 | 13989.69 | -5.85 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 64.67 | ↑118.66 | 0.6923 | 1.67 | **LOSS** |
| 189 | AAPL | 06-24 15:15 | 06-24 16:00 | 212.3 | 211.61 | 66 | 14011.8 | -45.54 | -0.33% | 0.42R | 45m | market | early-reversal | trend | trend | neutral | 71.54 | ↑208.99 | 0.5474 | 2.88 | **LOSS** |
| 190 | TSLA | 06-25 14:00 | 06-25 14:50 | 185.87 | 185.34 | 75 | 13940.25 | -39.75 | -0.29% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 58.69 | ↓184.02 | 0.1721 | 1.62 | **LOSS** |
| 191 | TSM | 06-25 14:00 | 06-25 14:40 | 170.86 | 169.89 | 81 | 13839.66 | -78.57 | -0.57% | 0.58R | 40m | market | early-reversal | trend | trend | neutral | 74.22 | ↓170.02 | 0.7102 | 1.33 | **LOSS** |
| 192 | NVDA | 06-25 14:05 | 06-25 14:35 | 122.62 | 121.69 | 62 | 7602.44 | -57.66 | -0.76% | 0.48R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 62.65 | ↑121.53 | 0.7382 | 1.77 | **LOSS** |
| 193 | ABNB | 06-25 14:05 | 06-25 15:35 | 150.69 | 150.57 | 92 | 13863.48 | -11.04 | -0.08% | 0.1R | 90m | market | stagnation | trend | trend | neutral | 68.3 | ↑150.06 | 0.3884 | 1.37 | **LOSS** |
| 194 | AMZN | 06-25 14:10 | 06-25 15:55 | 187.93 | 188.45 | 74 | 13906.82 | +38.48 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 64.56 | ↑186.92 | 0.3443 | 1.23 | **WIN** |
| 195 | GOOGL | 06-25 14:15 | 06-25 16:00 | 181.42 | 182.44 | 77 | 13969.34 | +78.54 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 77.51 | ↑180.5 | 0.5082 | 1.46 | **WIN** |
| 196 | GE | 06-25 14:20 | 06-25 14:50 | 162.24 | 161.59 | 86 | 13952.64 | -55.9 | -0.4% | 0.32R | 30m | market | early-reversal | trend | trend | neutral | 54.08 | ↑161.17 | 0.2939 | 1.48 | **LOSS** |
| 197 | PLTR | 06-25 14:25 | 06-25 14:45 | 24.56 | 24.37 | 315 | 7736.4 | -59.85 | -0.77% | 0.57R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 62.35 | ↑24.26 | 0.0331 | 1.58 | **LOSS** |
| 198 | RIVN | 06-25 14:35 | 06-25 15:20 | 11.51 | 11.72 | 606 | 13961.63 | +127.26 | +1.82% | 0.91R | 45m | market | trim-profit-target | trend | trend | neutral | 72.51 | ↑11.31 | 0.1223 | 1.44 | **WIN** |
| 199 | RIVN | 06-25 14:35 | 06-25 15:35 | 11.51 | 11.54 | 607 | 13961.63 | +18.21 | +0.26% | 0.13R | 60m | market | trailing-stop | trend | trend | neutral | 72.51 | ↑11.31 | 0.1223 | 1.44 | **WIN** |
| 200 | SHOP | 06-25 14:45 | 06-25 16:30 | 64.79 | 64.73 | 216 | 13994.64 | -12.96 | -0.09% | 0.13R | 105m | market | breakeven-stop | trend | trend | neutral | 64.38 | ↓64.47 | 0.1659 | 1.26 | **LOSS** |
| 201 | NVDA | 06-26 14:05 | 06-26 14:25 | 127.75 | 125.06 | 60 | 7665 | -161.4 | -2.11% | 1.13R | 20m | market | stop-loss | trend | trend | noisyHighBeta | 59.45 | ↓126.69 | 0.0367 | 2.68 | **LOSS** |
| 202 | TSLA | 06-26 14:05 | 06-26 14:25 | 193.67 | 192.08 | 72 | 13944.24 | -114.48 | -0.82% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 77.15 | ↑191.83 | 1.8169 | 1.27 | **LOSS** |
| 203 | AAPL | 06-26 14:15 | 06-26 16:00 | 212.4 | 213.96 | 66 | 14018.4 | +102.96 | +0.73% | 0.81R | 105m | market | timeout | trend | trend | neutral | 66.16 | ↑211.73 | 0.4443 | 1.6 | **WIN** |
| 204 | DDOG | 06-26 15:00 | 06-26 15:30 | 123.38 | 122.83 | 113 | 13941.94 | -62.15 | -0.45% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 77.91 | ↑121.55 | 0.9535 | 1.29 | **LOSS** |
| 205 | MDB | 06-26 15:00 | 06-26 15:15 | 238.55 | 234.93 | 58 | 13835.9 | -209.96 | -1.52% | 1.06R | 15m | market | stop-loss | breakout | trend | neutral | 78.37 | ↓235.78 | 2.5467 | 3.97 | **LOSS** |
| 206 | AMZN | 06-27 13:30 | 06-27 13:50 | 195.77 | 194.89 | 71 | 13899.67 | -62.48 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 79.42 | ↓195.51 | 0.1538 | 3.67 | **LOSS** |
| 207 | NET | 06-27 13:45 | 06-27 14:05 | 80.86 | 80.45 | 172 | 13907.92 | -70.52 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 73.15 | ↑80.27 | 0.1384 | 1.76 | **LOSS** |
| 208 | ADBE | 06-27 14:00 | 06-27 15:00 | 539.53 | 545.15 | 12 | 13488.25 | +67.44 | +1.04% | 1.28R | 60m | market | trim-profit-target | trend | trend | neutral | 77.65 | ↑536.79 | 2.5807 | 3.05 | **WIN** |
| 209 | ADBE | 06-27 14:00 | 06-27 15:45 | 539.53 | 545.67 | 13 | 13488.25 | +79.82 | +1.14% | 1.41R | 105m | market | timeout | trend | trend | neutral | 77.65 | ↑536.79 | 2.5807 | 3.05 | **WIN** |
| 210 | NOW | 06-27 14:25 | 06-27 16:10 | 766.27 | 776.41 | 18 | 13792.86 | +182.52 | +1.32% | 1.89R | 105m | market | timeout | trend | trend | neutral | 76.51 | ↑763.64 | 2.1986 | 1.41 | **WIN** |
| 211 | PANW | 06-27 14:40 | 06-27 15:35 | 341.75 | 340.81 | 40 | 13670 | -37.6 | -0.28% | 0.28R | 55m | market | breakeven-stop | trend | trend | neutral | 75.8 | ↑337.44 | 4.4159 | 1.96 | **LOSS** |
| 212 | KLAC | 06-28 13:55 | 06-28 14:55 | 835.59 | 833.36 | 16 | 13369.44 | -35.68 | -0.27% | 0.35R | 60m | market | stagnation | breakout | breakout | neutral | 76.66 | ↓830.45 | 3.852 | 1.16 | **LOSS** |
| 213 | ASML | 06-28 14:00 | 06-28 14:35 | 1044.22 | 1040.01 | 13 | 13574.86 | -54.73 | -0.4% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 66.5 | ↓1037.94 | 1.2568 | 1.13 | **LOSS** |
| 214 | BAC | 06-28 14:00 | 06-28 15:40 | 39.74 | 39.72 | 404 | 16054.96 | -8.08 | -0.05% | 0.07R | 100m | market | breakeven-stop | trend | trend | cleanTrend | 77.39 | ↓39.56 | 0.158 | 1.9 | **LOSS** |
| 215 | AMAT | 06-28 14:00 | 06-28 14:35 | 240.03 | 238.96 | 58 | 13921.74 | -62.06 | -0.45% | 0.46R | 35m | market | early-reversal | trend | trend | neutral | 75.63 | ↑237.27 | 1.2037 | 1.33 | **LOSS** |
| 216 | ORCL | 06-28 14:05 | 06-28 15:00 | 142.17 | 141.92 | 98 | 13932.66 | -24.5 | -0.18% | 0.25R | 55m | market | stagnation | trend | trend | neutral | 69.92 | ↓141.24 | 0.2275 | 1.74 | **LOSS** |
| 217 | PYPL | 06-28 14:05 | 06-28 14:40 | 58.76 | 58.45 | 238 | 13984.88 | -73.78 | -0.53% | 0.75R | 35m | market | early-reversal | trend | trend | neutral | 60.16 | ↑58.3 | 0.0637 | 1.17 | **LOSS** |
| 218 | GS | 06-28 14:05 | 06-28 15:00 | 454.27 | 453.99 | 30 | 13628.1 | -8.4 | -0.06% | 0.08R | 55m | market | stagnation | trend | trend | neutral | 78.94 | ↑452.45 | 1.9032 | 1.58 | **LOSS** |
| 219 | DELL | 06-28 14:10 | 06-28 14:30 | 141.44 | 139.32 | 99 | 14002.56 | -209.88 | -1.5% | 1.17R | 20m | market | early-reversal | breakout | breakout | neutral | 60.85 | ↓140.14 | 0.0592 | 1.45 | **LOSS** |
| 220 | JPM | 06-28 14:35 | 06-28 15:00 | 202.24 | 201.18 | 69 | 13954.56 | -73.14 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 79.46 | ↑200.58 | 0.8218 | 1.38 | **LOSS** |
| 221 | LOW | 06-28 14:45 | 06-28 15:05 | 221.52 | 220.42 | 63 | 13955.76 | -69.3 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 62.06 | ↑220.21 | 0.4944 | 1.48 | **LOSS** |
| 222 | ORCL | 07-01 14:05 | 07-01 14:35 | 143.59 | 143.12 | 97 | 13928.23 | -45.59 | -0.33% | 0.46R | 30m | market | early-reversal | breakout | breakout | neutral | 76 | ↓142.85 | 0.264 | 1.65 | **LOSS** |
| 223 | SNOW | 07-01 14:25 | 07-01 16:10 | 140.05 | 140.65 | 99 | 13864.95 | +59.4 | +0.43% | 0.25R | 105m | market | timeout | breakout | breakout | neutral | 81.4 | ↑138.12 | 1.059 | 1.28 | **WIN** |
| 224 | NVO | 07-01 15:10 | 07-01 15:40 | 145.47 | 144.98 | 96 | 13965.12 | -47.04 | -0.34% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 73.75 | ↑144.45 | 0.4408 | 2.7 | **LOSS** |
| 225 | IBM | 07-01 15:10 | 07-01 16:00 | 175.41 | 174.95 | 79 | 13857.39 | -36.34 | -0.26% | 0.37R | 50m | market | stagnation | trend | trend | neutral | 67.52 | ↑174.53 | 0.6266 | 1.3 | **LOSS** |
| 226 | NVDA | 07-01 15:25 | 07-01 15:45 | 124.16 | 123.17 | 112 | 13905.92 | -110.88 | -0.8% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 70.96 | ↑121.58 | 0.1831 | 1.78 | **LOSS** |
| 227 | AAPL | 07-02 14:00 | 07-02 15:45 | 218.61 | 219.54 | 64 | 13991.04 | +59.52 | +0.43% | 0.55R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑216.97 | 0.3897 | 1.89 | **WIN** |
| 228 | TSLA | 07-02 14:00 | 07-02 14:55 | 225.93 | 227.21 | 31 | 7003.83 | +39.68 | +0.57% | 0.29R | 55m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.94 | ↑222.78 | 3.6444 | 1.02 | **WIN** |
| 229 | GE | 07-02 14:25 | 07-02 14:45 | 162.06 | 161.01 | 86 | 13937.16 | -90.3 | -0.65% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 79.74 | ↓161.08 | 0.6726 | 2.64 | **LOSS** |
| 230 | MU | 07-03 13:30 | 07-03 13:35 | 134.02 | 132.78 | 104 | 13938.08 | -128.96 | -0.93% | 1.33R | 5m | market | stop-loss | breakout | breakout | neutral | 73.47 | ↓133.5 | 0.2242 | 2.54 | **LOSS** |
| 231 | CRWD | 07-03 14:15 | 07-03 14:35 | 389.27 | 387.32 | 36 | 14013.72 | -70.2 | -0.5% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 61.39 | ↑385.85 | 0.3785 | 1.49 | **LOSS** |
| 232 | AVGO | 07-03 14:20 | 07-03 15:25 | 1694.78 | 1708.01 | 4 | 13558.24 | +52.92 | +0.78% | 0.72R | 65m | market | trim-profit-target | trend | trend | neutral | 78.11 | ↑1684.76 | 10.5746 | 1.74 | **WIN** |
| 233 | AVGO | 07-03 14:20 | 07-03 16:05 | 1694.78 | 1721.7 | 4 | 13558.24 | +107.68 | +1.59% | 1.47R | 105m | market | timeout | trend | trend | neutral | 78.11 | ↑1684.76 | 10.5746 | 1.74 | **WIN** |
| 234 | CELH | 07-03 14:20 | 07-03 14:50 | 58.19 | 57.67 | 132 | 7681.08 | -68.64 | -0.89% | 0.85R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 73.16 | ↓57.72 | 0.2733 | 1.16 | **LOSS** |
| 235 | KLAC | 07-03 15:05 | 07-03 16:45 | 849.28 | 847.02 | 16 | 13588.48 | -36.16 | -0.27% | 0.34R | 100m | market | breakeven-stop | trend | trend | neutral | 66.85 | ↓845.5 | 3.7643 | 1.38 | **LOSS** |
| 236 | TSM | 07-03 15:15 | 07-03 15:35 | 181.49 | 180.84 | 77 | 13974.73 | -50.05 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 74.94 | ↑179.41 | 0.9855 | 1.09 | **LOSS** |
| 237 | QCOM | 07-03 15:20 | 07-03 15:40 | 204.14 | 203.07 | 68 | 13881.52 | -72.76 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 79.67 | ↑201.96 | 0.8799 | 1 | **LOSS** |
| 238 | PLTR | 07-05 14:00 | 07-05 15:45 | 26.74 | 26.89 | 525 | 14038.5 | +78.75 | +0.56% | 0.43R | 105m | market | timeout | trend | trend | neutral | 77.57 | ↓26.55 | 0.1291 | 2.65 | **WIN** |
| 239 | PANW | 07-05 14:00 | 07-05 14:20 | 345.66 | 344.05 | 37 | 12789.42 | -59.57 | -0.47% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 63.28 | ↑341.29 | 0.1495 | 1.56 | **LOSS** |
| 240 | PANW | 07-05 14:30 | 07-05 14:50 | 344.51 | 342.29 | 40 | 13780.4 | -88.8 | -0.64% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 57.78 | ↑341.99 | 0.6938 | 1.14 | **LOSS** |
| 241 | ELF | 07-05 14:55 | 07-05 15:40 | 203.13 | 202.14 | 68 | 13812.84 | -67.32 | -0.49% | 0.45R | 45m | market | early-reversal | trend | trend | neutral | 59.05 | ↑200.87 | 0.2812 | 1.74 | **LOSS** |
| 242 | INTC | 07-05 15:00 | 07-05 16:10 | 31.91 | 32.16 | 218 | 13944.67 | +54.5 | +0.78% | 1.01R | 70m | market | trim-profit-target | trend | trend | neutral | 80 | ↑31.48 | 0.121 | 1.55 | **WIN** |
| 243 | INTC | 07-05 15:00 | 07-05 16:35 | 31.91 | 31.92 | 219 | 13944.67 | +2.19 | +0.03% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 80 | ↑31.48 | 0.121 | 1.55 | **WIN** |
| 244 | META | 07-05 15:05 | 07-05 16:45 | 528.78 | 528.83 | 26 | 13748.28 | +1.3 | +0.01% | 0.01R | 100m | market | breakeven-stop | trend | trend | neutral | 73.43 | ↑522.84 | 4.6588 | 1.11 | **WIN** |
| 245 | COIN | 07-05 15:20 | 07-05 16:40 | 219.68 | 219.73 | 63 | 13839.84 | +3.15 | +0.02% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | neutral | 71.2 | ↑214.08 | -0.9049 | 2.6 | **WIN** |
| 246 | MRVL | 07-08 14:05 | 07-08 14:25 | 74.04 | 73.7 | 189 | 13993.56 | -64.26 | -0.46% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↑73.24 | 0.372 | 1.66 | **LOSS** |
| 247 | BA | 07-08 14:45 | 07-08 15:05 | 191.38 | 190.67 | 73 | 13970.74 | -51.83 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 67.61 | ↑189.95 | 1.6959 | 1.07 | **LOSS** |
| 248 | HD | 07-08 14:50 | 07-08 15:15 | 340.45 | 339.3 | 41 | 13958.45 | -47.15 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 75.12 | ↑338.42 | 1.1483 | 1.45 | **LOSS** |
| 249 | TSLA | 07-08 15:00 | 07-08 16:30 | 255.08 | 254.74 | 30 | 7652.4 | -10.2 | -0.13% | 0.08R | 90m | market | trailing-stop | trend | trend | noisyHighBeta | 79.33 | ↑249.93 | 1.0287 | 1.61 | **LOSS** |
| 250 | RIVN | 07-08 15:00 | 07-08 15:25 | 15.73 | 15.52 | 488 | 7676.24 | -102.48 | -1.34% | 0.67R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 77.18 | ↑15.27 | 0.2517 | 2.42 | **LOSS** |
| 251 | MRVL | 07-08 15:25 | 07-08 15:45 | 74.31 | 73.96 | 188 | 13970.28 | -65.8 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 62.81 | ↑73.58 | 0.4167 | 2.78 | **LOSS** |
| 252 | AVGO | 07-09 13:30 | 07-09 13:50 | 1762.35 | 1749.36 | 7 | 12336.45 | -90.93 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 83.79 | ↓1757.53 | 0.1881 | 3 | **LOSS** |
| 253 | ELF | 07-09 13:45 | 07-09 14:25 | 209.42 | 207.95 | 66 | 13821.72 | -97.02 | -0.7% | 0.67R | 40m | market | early-reversal | breakout | breakout | neutral | 83.43 | ↓207.09 | 0.9115 | 2.1 | **LOSS** |
| 254 | DELL | 07-09 13:55 | 07-09 14:05 | 150.26 | 147.62 | 93 | 13974.18 | -245.52 | -1.76% | 1.28R | 10m | market | stop-loss | breakout | breakout | neutral | 69.01 | ↓148.37 | 0.6477 | 1.58 | **LOSS** |
| 255 | HPE | 07-09 14:05 | 07-09 14:25 | 21.23 | 21.06 | 659 | 13990.57 | -112.03 | -0.8% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 83.96 | ↓21.07 | 0.0452 | 1.4 | **LOSS** |
| 256 | TSLA | 07-09 15:05 | 07-09 15:35 | 259.76 | 257.86 | 29 | 7533.04 | -55.1 | -0.73% | 0.49R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 63.92 | ↑256.34 | 1.694 | 1.34 | **LOSS** |
| 257 | BAC | 07-09 15:05 | 07-09 16:20 | 41.29 | 41.58 | 169 | 13956.02 | +49.01 | +0.7% | 1R | 75m | market | trim-profit-target | trend | trend | neutral | 76.51 | ↑40.9 | 0.1319 | 1.66 | **WIN** |
| 258 | BAC | 07-09 15:05 | 07-09 16:50 | 41.29 | 41.72 | 169 | 13956.02 | +72.67 | +1.04% | 1.49R | 105m | market | timeout | trend | trend | neutral | 76.51 | ↑40.9 | 0.1319 | 1.66 | **WIN** |
| 259 | HPE | 07-09 15:10 | 07-09 16:55 | 21.35 | 21.39 | 655 | 13984.25 | +26.2 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 67.39 | ↑21.14 | 0.1148 | 1.6 | **WIN** |
| 260 | ORCL | 07-10 15:15 | 07-10 16:05 | 142.08 | 141.9 | 98 | 13923.84 | -17.64 | -0.13% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 56.74 | ↑141.28 | 0.3001 | 2.35 | **LOSS** |
| 261 | PLTR | 07-10 15:25 | 07-10 16:15 | 27.84 | 27.8 | 505 | 14059.2 | -20.2 | -0.14% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 59.52 | ↑27.62 | 0.0327 | 1.31 | **LOSS** |
| 262 | UNH | 07-11 14:00 | 07-11 15:45 | 503.88 | 508 | 27 | 13604.76 | +111.24 | +0.82% | 1.17R | 105m | market | timeout | trend | trend | neutral | 69.53 | ↑501.77 | 1.1223 | 2.55 | **WIN** |
| 263 | GS | 07-11 14:05 | 07-11 14:25 | 481.84 | 479.23 | 29 | 13973.36 | -75.69 | -0.54% | 0.77R | 20m | market | early-reversal | trend | trend | neutral | 63.78 | ↓479.52 | 0.925 | 2.64 | **LOSS** |
| 264 | LOW | 07-11 14:05 | 07-11 15:35 | 227.42 | 227.16 | 61 | 13872.62 | -15.86 | -0.11% | 0.09R | 90m | market | breakeven-stop | trend | trend | neutral | 79.64 | ↓226.03 | 2.0923 | 1.33 | **LOSS** |
| 265 | CAT | 07-11 14:55 | 07-11 15:40 | 333.93 | 332.83 | 41 | 13691.13 | -45.1 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 73.38 | ↑331.88 | 1.9776 | 1.76 | **LOSS** |
| 266 | SQ | 07-11 15:15 | 07-11 15:20 | 67.04 | 66.43 | 208 | 13944.32 | -126.88 | -0.91% | 1.14R | 5m | market | stop-loss | trend | trend | neutral | 59.33 | ↓66.48 | 0.5888 | 2.13 | **LOSS** |
| 267 | AVGO | 07-12 14:00 | 07-12 14:25 | 1717.35 | 1704.09 | 8 | 13738.8 | -106.08 | -0.77% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 59.69 | ↓1708.79 | 7.6726 | 1.1 | **LOSS** |
| 268 | ASML | 07-12 14:00 | 07-12 15:45 | 1090.49 | 1094.4 | 12 | 13085.88 | +46.92 | +0.36% | 0.46R | 105m | market | timeout | breakout | breakout | neutral | 71.15 | ↑1075.29 | 4.1348 | 1.55 | **WIN** |
| 269 | CRWD | 07-12 14:00 | 07-12 14:20 | 373.89 | 372.18 | 37 | 13833.93 | -63.27 | -0.46% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 73.52 | ↑371.76 | 0.9257 | 2.78 | **LOSS** |
| 270 | PLTR | 07-12 14:05 | 07-12 14:55 | 28.03 | 27.92 | 501 | 14043.03 | -55.11 | -0.39% | 0.3R | 50m | market | early-reversal | trend | trend | neutral | 68 | ↓27.84 | 0.1375 | 1.16 | **LOSS** |
| 271 | TGT | 07-12 14:20 | 07-12 15:10 | 152.83 | 152.61 | 91 | 13907.53 | -20.02 | -0.14% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 61.13 | ↑151.92 | 0.1744 | 1.54 | **LOSS** |
| 272 | MDB | 07-12 14:25 | 07-12 14:45 | 251.13 | 249.49 | 55 | 13812.15 | -90.2 | -0.65% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 59.23 | ↓249.27 | 0.4482 | 1.09 | **LOSS** |
| 273 | CRM | 07-12 14:30 | 07-12 14:50 | 254.54 | 253.39 | 54 | 13745.16 | -62.1 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 70.93 | ↑253.06 | 0.4578 | 2.86 | **LOSS** |
| 274 | NVDA | 07-12 14:35 | 07-12 15:30 | 130.49 | 130.3 | 107 | 13962.43 | -20.33 | -0.15% | 0.08R | 55m | market | stagnation | trend | trend | neutral | 65.8 | ↑128.99 | 0.4897 | 1.8 | **LOSS** |
| 275 | AMD | 07-12 14:40 | 07-12 15:20 | 185.66 | 184.74 | 75 | 13924.5 | -69 | -0.5% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 76.34 | ↑183.29 | 1.0717 | 3.2 | **LOSS** |
| 276 | LRCX | 07-12 14:40 | 07-12 16:05 | 1078.75 | 1078.53 | 12 | 12945 | -2.64 | -0.02% | 0.02R | 85m | market | breakeven-stop | trend | trend | neutral | 65.36 | ↑1068.98 | 1.3141 | 1.15 | **LOSS** |
| 277 | GS | 07-15 13:35 | 07-15 13:45 | 490.68 | 483.07 | 28 | 13739.04 | -213.08 | -1.55% | 2.21R | 10m | market | stop-loss | breakout | breakout | neutral | 80.16 | ↓487.76 | 0.6454 | 2.04 | **LOSS** |
| 278 | NFLX | 07-15 13:45 | 07-15 15:30 | 658.97 | 662.29 | 21 | 13838.37 | +69.72 | +0.5% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 67 | ↑652.67 | -0.2368 | 1.13 | **WIN** |
| 279 | CRWD | 07-15 13:55 | 07-15 15:40 | 378.19 | 380.06 | 37 | 13993.03 | +69.19 | +0.49% | 0.35R | 105m | market | timeout | breakout | breakout | neutral | 63.23 | ↑371.42 | 1.0256 | 1.54 | **WIN** |
| 280 | DDOG | 07-15 14:00 | 07-15 14:40 | 130.22 | 129.59 | 107 | 13933.54 | -67.41 | -0.48% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74 | ↑129.06 | 0.3381 | 2.13 | **LOSS** |
| 281 | XOM | 07-15 14:05 | 07-15 15:50 | 114.46 | 115.94 | 122 | 13964.12 | +180.56 | +1.29% | 1.84R | 105m | market | timeout | trend | trend | neutral | 67.06 | ↑114.15 | 0.2351 | 2.23 | **WIN** |
| 282 | PANW | 07-15 14:15 | 07-15 15:45 | 341.26 | 340.77 | 40 | 13650.4 | -19.6 | -0.14% | 0.11R | 90m | market | stagnation | trend | trend | neutral | 59.7 | ↑335.52 | 0.6016 | 2.01 | **LOSS** |
| 283 | NET | 07-15 14:25 | 07-15 15:15 | 84.21 | 83.99 | 165 | 13894.65 | -36.3 | -0.26% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 72.1 | ↓83.42 | 0.3404 | 1.85 | **LOSS** |
| 284 | SQ | 07-15 15:00 | 07-15 16:45 | 71.46 | 71.88 | 195 | 13934.7 | +81.9 | +0.59% | 0.74R | 105m | market | timeout | trend | trend | neutral | 78.99 | ↑70.49 | 0.6048 | 1.49 | **WIN** |
| 285 | GS | 07-16 13:40 | 07-16 15:25 | 498.55 | 503.43 | 27 | 13460.85 | +131.76 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | neutral | 81.23 | ↑495.98 | 2.0953 | 1.42 | **WIN** |
| 286 | TXN | 07-16 14:00 | 07-16 14:20 | 205.05 | 203.52 | 68 | 13943.4 | -104.04 | -0.75% | 1.07R | 20m | market | early-reversal | trend | trend | neutral | 70.3 | ↓203.96 | 0.5833 | 1.28 | **LOSS** |
| 287 | GE | 07-16 14:15 | 07-16 16:00 | 161.4 | 162.87 | 86 | 13880.4 | +126.42 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 70.48 | ↑160.3 | 0.3374 | 1.92 | **WIN** |
| 288 | UBER | 07-16 14:40 | 07-16 15:00 | 74.83 | 74.52 | 186 | 13918.38 | -57.66 | -0.41% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 57.71 | ↑74.08 | 0.5936 | 1 | **LOSS** |
| 289 | XOM | 07-17 14:00 | 07-17 14:30 | 118 | 117.47 | 118 | 13924 | -62.54 | -0.45% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 77.87 | ↓117.55 | 0.4399 | 1.42 | **LOSS** |
| 290 | JPM | 07-17 14:10 | 07-17 14:35 | 215.79 | 214.8 | 64 | 13810.56 | -63.36 | -0.46% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 74.28 | ↑214.14 | 0.6738 | 1.18 | **LOSS** |
| 291 | TXN | 07-17 14:25 | 07-17 15:25 | 209.4 | 209.24 | 66 | 13820.4 | -10.56 | -0.08% | 0.09R | 60m | market | stagnation | trend | trend | neutral | 72.75 | ↑207.7 | 0.7702 | 1.06 | **LOSS** |
| 292 | GE | 07-18 13:35 | 07-18 14:40 | 159.33 | 159.14 | 88 | 14021.04 | -16.72 | -0.12% | 0.17R | 65m | market | stagnation | breakout | breakout | neutral | 69.99 | ↑158.71 | 0.0726 | 1.65 | **LOSS** |
| 293 | HPE | 07-18 14:00 | 07-18 14:40 | 21.13 | 21 | 662 | 13988.06 | -86.06 | -0.62% | 0.67R | 40m | market | early-reversal | trend | trend | neutral | 67.24 | ↓21.04 | 0.0535 | 1.03 | **LOSS** |
| 294 | INTC | 07-18 14:10 | 07-18 14:30 | 35.87 | 35.52 | 389 | 13953.43 | -136.15 | -0.98% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 71.22 | ↓35.42 | 0.2613 | 1.14 | **LOSS** |
| 295 | UNH | 07-18 14:10 | 07-18 14:40 | 578.18 | 573.8 | 24 | 13876.32 | -105.12 | -0.76% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 67.17 | ↓572.73 | 1.1587 | 1.18 | **LOSS** |
| 296 | META | 07-19 14:25 | 07-19 15:05 | 486.01 | 483.35 | 28 | 13608.28 | -74.48 | -0.55% | 0.44R | 40m | market | early-reversal | trend | trend | neutral | 66.62 | ↓483.52 | 2.8918 | 1.64 | **LOSS** |
| 297 | GE | 07-22 14:30 | 07-22 14:50 | 162.09 | 161.36 | 86 | 13939.74 | -62.78 | -0.45% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 76.6 | ↑161.04 | 0.6147 | 1.31 | **LOSS** |
| 298 | NFLX | 07-22 14:35 | 07-22 15:15 | 650.96 | 647.67 | 21 | 13670.16 | -69.09 | -0.51% | 0.36R | 40m | market | early-reversal | breakout | breakout | neutral | 72.79 | ↑643.11 | 3.0908 | 1.26 | **LOSS** |
| 299 | SNOW | 07-22 14:40 | 07-22 15:20 | 131.17 | 130.66 | 106 | 13904.02 | -54.06 | -0.39% | 0.48R | 40m | market | early-reversal | trend | trend | neutral | 62.49 | ↑130.35 | 0.2529 | 2.13 | **LOSS** |
| 300 | ABNB | 07-22 14:50 | 07-22 15:10 | 149.89 | 148.83 | 93 | 13939.77 | -98.58 | -0.71% | 1.01R | 20m | market | early-reversal | trend | trend | neutral | 76.55 | ↑148.24 | 0.4186 | 1.7 | **LOSS** |
| 301 | BAC | 07-23 14:00 | 07-23 14:20 | 42.7 | 42.57 | 328 | 14005.6 | -42.64 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 71.12 | ↑42.4 | 0.0495 | 1.43 | **LOSS** |
| 302 | GS | 07-23 14:00 | 07-23 14:50 | 492.4 | 491.08 | 28 | 13787.2 | -36.96 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 75.29 | ↓488.64 | 0.633 | 1.32 | **LOSS** |
| 303 | ARM | 07-23 14:05 | 07-23 15:15 | 166.91 | 172.05 | 46 | 7677.86 | +236.44 | +3.08% | 2.35R | 70m | market | profit-target | trend | trend | noisyHighBeta | 74.93 | ↑165.54 | 0.4865 | 1.04 | **WIN** |
| 304 | BA | 07-23 14:20 | 07-23 15:50 | 181.2 | 185.46 | 77 | 13952.4 | +328.02 | +2.35% | 3.36R | 90m | market | profit-target | trend | trend | neutral | 77.08 | ↑180.44 | 0.7222 | 1.14 | **WIN** |
| 305 | LLY | 07-23 14:20 | 07-23 16:10 | 880.66 | 883.35 | 15 | 13209.9 | +40.35 | +0.31% | 0.37R | 110m | market | timeout | trend | trend | neutral | 77.72 | ↑871.57 | 2.2089 | 1.18 | **WIN** |
| 306 | MDB | 07-23 14:25 | 07-23 14:45 | 258.62 | 256.88 | 53 | 13706.86 | -92.22 | -0.67% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 65.92 | ↓257.05 | 1.2676 | 2.36 | **LOSS** |
| 307 | TSM | 07-23 15:10 | 07-23 16:30 | 170.5 | 170.35 | 81 | 13810.5 | -12.15 | -0.09% | 0.11R | 80m | market | stagnation | trend | trend | neutral | 70.24 | ↑169.1 | 0.0765 | 1.74 | **LOSS** |
| 308 | SMCI | 07-23 15:15 | 07-23 16:20 | 796.91 | 794.92 | 17 | 13547.47 | -33.83 | -0.25% | 0.26R | 65m | market | breakeven-stop | breakout | trend | neutral | 74.05 | ↑774.63 | 2.6544 | 1.15 | **LOSS** |
| 309 | SNOW | 07-23 15:15 | 07-23 16:25 | 133.3 | 133.16 | 104 | 13863.2 | -14.56 | -0.11% | 0.16R | 70m | market | stagnation | breakout | breakout | neutral | 73.96 | ↑131.63 | 0.0282 | 3.05 | **LOSS** |
| 310 | AMD | 07-23 15:20 | 07-23 15:40 | 156.94 | 155.92 | 89 | 13967.66 | -90.78 | -0.65% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 70.29 | ↓155.66 | 0.2486 | 4.02 | **LOSS** |
| 311 | AAPL | 07-23 15:25 | 07-23 16:15 | 226.75 | 226.21 | 62 | 14058.5 | -33.48 | -0.24% | 0.34R | 50m | market | stagnation | trend | trend | neutral | 78.41 | ↑224.8 | 0.4321 | 1.83 | **LOSS** |
| 312 | SBUX | 07-25 14:05 | 07-25 14:30 | 75.48 | 75 | 185 | 13963.8 | -88.8 | -0.64% | 0.9R | 25m | market | early-reversal | trend | trend | neutral | 79.88 | ↓75.22 | 0.2452 | 2.56 | **LOSS** |
| 313 | UNH | 07-25 14:10 | 07-25 14:35 | 568.93 | 566.73 | 24 | 13654.32 | -52.8 | -0.39% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 75.08 | ↓566.8 | 1.9421 | 1.23 | **LOSS** |
| 314 | RIVN | 07-25 14:25 | 07-25 15:15 | 16.68 | 16.55 | 837 | 13961.16 | -108.81 | -0.78% | 0.39R | 50m | market | early-reversal | breakout | breakout | neutral | 59.58 | ↑16.2 | 0.0428 | 1.3 | **LOSS** |
| 315 | NFLX | 07-25 15:10 | 07-25 16:05 | 640.62 | 640.2 | 21 | 13453.02 | -8.82 | -0.07% | 0.08R | 55m | market | stagnation | trend | trend | neutral | 75.02 | ↑632.73 | 0.7019 | 1.93 | **LOSS** |
| 316 | CRM | 07-25 15:10 | 07-25 16:55 | 256.33 | 262.65 | 54 | 13841.82 | +341.28 | +2.47% | 3.17R | 105m | market | profit-target | trend | trend | neutral | 67.95 | ↑254.1 | 1.103 | 1.22 | **WIN** |
| 317 | NVO | 07-25 15:10 | 07-25 15:30 | 129.85 | 129.19 | 107 | 13893.95 | -70.62 | -0.51% | 0.55R | 20m | market | early-reversal | breakout | breakout | neutral | 74.39 | ↑127.97 | -0.7348 | 2.06 | **LOSS** |
| 318 | SNOW | 07-25 15:20 | 07-25 16:35 | 129.08 | 132.15 | 108 | 13940.64 | +331.56 | +2.38% | 3.05R | 75m | market | profit-target | trend | trend | neutral | 78.94 | ↑127.12 | 0.7518 | 1.72 | **WIN** |
| 319 | LOW | 07-26 13:35 | 07-26 14:05 | 241.64 | 240.11 | 57 | 13773.48 | -87.21 | -0.63% | 0.73R | 30m | market | early-reversal | breakout | breakout | neutral | 74.58 | ↓240.66 | 0.1619 | 1.49 | **LOSS** |
| 320 | V | 07-26 13:40 | 07-26 15:00 | 259.16 | 258.9 | 54 | 13994.64 | -14.04 | -0.1% | 0.14R | 80m | market | stagnation | breakout | breakout | neutral | 72.49 | ↓257.99 | 0.1673 | 1.11 | **LOSS** |
| 321 | CRM | 07-26 13:55 | 07-26 14:40 | 262.43 | 260.92 | 53 | 13908.79 | -80.03 | -0.58% | 0.7R | 45m | market | early-reversal | breakout | breakout | neutral | 66.95 | ↓260.65 | 0.0215 | 1.88 | **LOSS** |
| 322 | ELF | 07-26 14:00 | 07-26 14:55 | 178.77 | 178.68 | 78 | 13944.06 | -7.02 | -0.05% | 0.03R | 55m | market | stagnation | breakout | breakout | neutral | 78.86 | ↑177.55 | 1.573 | 1.2 | **LOSS** |
| 323 | MA | 07-26 14:10 | 07-26 15:00 | 438.15 | 437.65 | 31 | 13582.65 | -15.5 | -0.11% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 65.17 | ↑435.43 | 0.9151 | 1.51 | **LOSS** |
| 324 | SBUX | 07-26 15:05 | 07-26 16:50 | 74.6 | 74.65 | 187 | 13950.2 | +9.35 | +0.07% | 0.1R | 105m | market | timeout | trend | trend | neutral | 71.58 | ↑74.12 | 0.1682 | 2.82 | **WIN** |
| 325 | PYPL | 07-29 14:00 | 07-29 14:20 | 58.83 | 58.57 | 237 | 13942.71 | -61.62 | -0.44% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 67.33 | ↑58.52 | 0.1735 | 1.3 | **LOSS** |
| 326 | HD | 07-29 14:00 | 07-29 14:20 | 362.18 | 360.75 | 38 | 13762.84 | -54.34 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 66.5 | ↑360.38 | 0.3934 | 1.24 | **LOSS** |
| 327 | NKE | 07-29 14:00 | 07-29 14:50 | 73.38 | 73.28 | 190 | 13942.2 | -19 | -0.14% | 0.2R | 50m | market | stagnation | breakout | trend | neutral | 75.96 | ↑73 | 0.1233 | 4.13 | **LOSS** |
| 328 | SBUX | 07-29 14:05 | 07-29 14:35 | 75.3 | 75.03 | 186 | 14005.8 | -50.22 | -0.36% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 69.94 | ↓74.75 | 0.1606 | 2.29 | **LOSS** |
| 329 | CRM | 07-31 14:00 | 07-31 14:45 | 260.76 | 259.24 | 53 | 13820.28 | -80.56 | -0.58% | 0.63R | 45m | market | early-reversal | breakout | breakout | neutral | 74.39 | ↑257.86 | 0.5212 | 1.46 | **LOSS** |
| 330 | PYPL | 07-31 14:00 | 07-31 14:50 | 66.47 | 66.04 | 210 | 13958.7 | -90.3 | -0.65% | 0.4R | 50m | market | early-reversal | breakout | breakout | neutral | 81.64 | ↓65.54 | 0.5015 | 1.14 | **LOSS** |
| 331 | NKE | 07-31 14:10 | 07-31 14:35 | 75.02 | 74.72 | 214 | 16054.28 | -64.2 | -0.4% | 0.55R | 25m | market | early-reversal | trend | trend | cleanTrend | 77.36 | ↑74.55 | 0.2834 | 1.54 | **LOSS** |
| 332 | META | 07-31 14:15 | 07-31 14:40 | 474.67 | 472.67 | 29 | 13765.43 | -58 | -0.42% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.86 | ↑470.45 | 2.5948 | 1.45 | **LOSS** |
| 333 | SQ | 07-31 14:15 | 07-31 14:40 | 61.53 | 61.24 | 227 | 13967.31 | -65.83 | -0.47% | 0.34R | 25m | market | early-reversal | trend | trend | neutral | 71.79 | ↑61.12 | 0.3198 | 1.39 | **LOSS** |
| 334 | PANW | 07-31 14:30 | 07-31 15:00 | 324.85 | 323.87 | 42 | 13643.7 | -41.16 | -0.3% | 0.3R | 30m | market | early-reversal | trend | trend | neutral | 75.12 | ↑322.15 | 1.5709 | 1.7 | **LOSS** |
| 335 | IBM | 07-31 14:35 | 07-31 16:20 | 192.99 | 193.65 | 72 | 13895.28 | +47.52 | +0.34% | 0.49R | 105m | market | timeout | trend | trend | neutral | 71.4 | ↑191.91 | 0.5144 | 1.54 | **WIN** |
| 336 | AVGO | 07-31 15:15 | 07-31 15:35 | 158.02 | 157.06 | 48 | 7584.96 | -46.08 | -0.61% | 0.48R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 63.7 | ↑154.93 | 2.9009 | 1.16 | **LOSS** |
| 337 | GE | 08-01 13:35 | 08-01 14:45 | 173.01 | 172.5 | 81 | 14013.81 | -41.31 | -0.29% | 0.24R | 70m | market | stagnation | breakout | breakout | neutral | 60.87 | ↓172.25 | 0.482 | 1.97 | **LOSS** |
| 338 | MSFT | 08-01 13:40 | 08-01 14:40 | 424.53 | 423.85 | 32 | 13584.96 | -21.76 | -0.16% | 0.14R | 60m | market | stagnation | breakout | breakout | neutral | 64.25 | ↓421.07 | 0.6287 | 1.75 | **LOSS** |
| 339 | ADBE | 08-01 14:00 | 08-01 14:20 | 560.91 | 554.44 | 24 | 13461.84 | -155.28 | -1.15% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | 70.67 | ↓556.15 | 1.1029 | 1.11 | **LOSS** |
| 340 | ASML | 08-05 15:05 | 08-05 16:45 | 812.32 | 818.82 | 17 | 13809.44 | +110.5 | +0.8% | 0.46R | 100m | market | trailing-stop | breakout | breakout | neutral | 69.3 | ↑795.83 | -0.2618 | 1.65 | **WIN** |
| 341 | CRWD | 08-05 15:20 | 08-05 15:40 | 222.78 | 219.55 | 62 | 13812.36 | -200.26 | -1.45% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 61.33 | ↑215.85 | 1.025 | 1.15 | **LOSS** |
| 342 | AMAT | 08-05 15:20 | 08-05 15:45 | 183.39 | 181.96 | 42 | 7702.38 | -60.06 | -0.78% | 0.42R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 65.98 | ↑179.32 | 0.5327 | 1.29 | **LOSS** |
| 343 | MSFT | 08-06 14:05 | 08-06 15:25 | 403.11 | 401.11 | 34 | 13705.74 | -68 | -0.5% | 0.4R | 80m | market | early-reversal | trend | trend | neutral | 73.14 | ↓400.91 | 1.8152 | 1.14 | **LOSS** |
| 344 | TSM | 08-06 14:05 | 08-06 15:50 | 153.23 | 154.36 | 46 | 7048.58 | +51.98 | +0.74% | 0.37R | 105m | market | timeout | breakout | trend | noisyHighBeta | 74.35 | ↑150.8 | 1.3555 | 1.07 | **WIN** |
| 345 | HD | 08-06 14:05 | 08-06 15:20 | 353.22 | 352.94 | 39 | 13775.58 | -10.92 | -0.08% | 0.11R | 75m | market | breakeven-stop | trend | trend | neutral | 67.4 | ↓350.44 | 0.2369 | 1.08 | **LOSS** |
| 346 | META | 08-06 14:30 | 08-06 16:15 | 490.73 | 499.75 | 15 | 7360.95 | +135.3 | +1.84% | 1.12R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.26 | ↑485.09 | 4.5138 | 1.25 | **WIN** |
| 347 | ASML | 08-06 14:45 | 08-06 15:05 | 856.25 | 853 | 16 | 13700 | -52 | -0.38% | 0.3R | 20m | market | early-reversal | trend | trend | neutral | 66.55 | ↑846.08 | 8.1652 | 1.32 | **LOSS** |
| 348 | ELF | 08-06 15:20 | 08-06 17:05 | 183.49 | 184.43 | 76 | 13945.24 | +71.44 | +0.51% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.54 | ↑180.18 | 2.4014 | 1.29 | **WIN** |
| 349 | NFLX | 08-07 14:00 | 08-07 15:45 | 626.61 | 626.4 | 22 | 13785.42 | -4.62 | -0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 69.95 | ↓623.06 | 2.1484 | 1.24 | **LOSS** |
| 350 | SNOW | 08-07 14:00 | 08-07 15:25 | 119.88 | 119.9 | 117 | 14025.96 | +2.34 | +0.02% | 0.01R | 85m | market | breakeven-stop | trend | trend | neutral | 72.52 | ↓119.06 | 0.6857 | 1.43 | **WIN** |
| 351 | CELH | 08-07 14:00 | 08-07 14:20 | 42.67 | 42.26 | 167 | 7125.89 | -68.47 | -0.96% | 0.48R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 76.91 | ↑41.77 | 0.1958 | 1.04 | **LOSS** |
| 352 | UBER | 08-07 14:05 | 08-07 14:35 | 68.11 | 67.44 | 112 | 7628.32 | -75.04 | -0.98% | 0.49R | 30m | market | early-reversal | trend | trend | noisyHighBeta | 70.98 | ↓67.42 | 0.7565 | 1.24 | **LOSS** |
| 353 | V | 08-07 14:05 | 08-07 15:10 | 261.61 | 261.12 | 53 | 13865.33 | -25.97 | -0.19% | 0.25R | 65m | market | stagnation | trend | trend | neutral | 62.45 | ↑260.2 | 0.3701 | 1.41 | **LOSS** |
| 354 | ADP | 08-07 14:10 | 08-07 14:30 | 264.83 | 263.85 | 52 | 13771.16 | -50.96 | -0.37% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 71.82 | ↑262.63 | 0.4419 | 1.32 | **LOSS** |
| 355 | AMZN | 08-07 14:45 | 08-07 15:10 | 167.49 | 166.64 | 45 | 7537.05 | -38.25 | -0.51% | 0.49R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 60.36 | ↑166.08 | 0.7285 | 1.77 | **LOSS** |
| 356 | INTC | 08-07 15:05 | 08-07 15:40 | 20.2 | 20.07 | 379 | 7655.8 | -49.27 | -0.64% | 0.55R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 71.55 | ↑19.99 | 0.0388 | 1.76 | **LOSS** |
| 357 | COST | 08-08 14:00 | 08-08 15:15 | 836.33 | 835.77 | 16 | 13381.28 | -8.96 | -0.07% | 0.07R | 75m | market | breakeven-stop | trend | trend | neutral | 79.96 | ↑830.03 | 4.2719 | 2.05 | **LOSS** |
| 358 | IBM | 08-08 14:00 | 08-08 15:15 | 190.98 | 190.87 | 73 | 13941.54 | -8.03 | -0.06% | 0.08R | 75m | market | stagnation | breakout | breakout | neutral | 77.7 | ↑189.55 | 0.5996 | 1.56 | **LOSS** |
| 359 | META | 08-08 14:05 | 08-08 15:10 | 501.1 | 500.3 | 15 | 7516.5 | -12 | -0.16% | 0.12R | 65m | market | stagnation | trend | trend | noisyHighBeta | 65.61 | ↓498.93 | 2.5234 | 1.14 | **LOSS** |
| 360 | TXN | 08-08 14:05 | 08-08 15:50 | 188.44 | 192.82 | 74 | 13944.56 | +324.12 | +2.32% | 1.97R | 105m | market | timeout | breakout | trend | neutral | 66.41 | ↑187.1 | 0.4812 | 1.06 | **WIN** |
| 361 | RIVN | 08-08 14:10 | 08-08 14:40 | 14.62 | 14.58 | 479 | 7002.98 | -19.16 | -0.27% | 0.14R | 30m | market | trailing-stop | breakout | trend | noisyHighBeta | 79.1 | ↑14.27 | 0.1327 | 1.02 | **LOSS** |
| 362 | MU | 08-08 14:15 | 08-08 15:10 | 90.49 | 90.33 | 84 | 7601.16 | -13.44 | -0.18% | 0.09R | 55m | market | stagnation | trend | trend | noisyHighBeta | 73.4 | ↑89.2 | 0.592 | 1.18 | **LOSS** |
| 363 | COIN | 08-08 14:15 | 08-08 16:00 | 189.87 | 192.53 | 40 | 7594.8 | +106.4 | +1.4% | 0.7R | 105m | market | timeout | trend | trend | noisyHighBeta | 78.99 | ↑186.5 | 2.3629 | 1.06 | **WIN** |
| 364 | QCOM | 08-08 14:25 | 08-08 15:15 | 162.64 | 162.24 | 47 | 7644.08 | -18.8 | -0.25% | 0.13R | 50m | market | stagnation | trend | trend | noisyHighBeta | 67.68 | ↑160.71 | 1.3131 | 1.09 | **LOSS** |
| 365 | PLTR | 08-08 14:25 | 08-08 15:35 | 27.9 | 28.56 | 277 | 7728.3 | +182.82 | +2.37% | 1.19R | 70m | market | profit-target | trend | trend | noisyHighBeta | 71.28 | ↑27.46 | 0.2606 | 1.09 | **WIN** |
| 366 | LRCX | 08-08 14:25 | 08-08 16:10 | 781.65 | 786.94 | 9 | 7034.85 | +47.61 | +0.68% | 0.37R | 105m | market | timeout | trend | trend | noisyHighBeta | 67.45 | ↑776.56 | 7.2109 | 1.76 | **WIN** |
| 367 | TSLA | 08-08 14:35 | 08-08 15:45 | 197.59 | 197.16 | 38 | 7508.42 | -16.34 | -0.22% | 0.13R | 70m | market | stagnation | trend | trend | noisyHighBeta | 68.05 | ↑195 | 1.1259 | 1.6 | **LOSS** |
| 368 | NOW | 08-08 14:35 | 08-08 15:10 | 797.42 | 794.41 | 17 | 13556.14 | -51.17 | -0.38% | 0.28R | 35m | market | early-reversal | trend | trend | neutral | 64.4 | ↓793.71 | 3.4104 | 1.84 | **LOSS** |
| 369 | AMD | 08-08 14:40 | 08-08 16:20 | 133.77 | 134.87 | 28 | 7624.89 | +30.8 | +0.82% | 0.45R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 72.88 | ↑131.98 | 0.8145 | 1.62 | **WIN** |
| 370 | AMD | 08-08 14:40 | 08-08 16:25 | 133.77 | 134.62 | 29 | 7624.89 | +24.65 | +0.64% | 0.35R | 105m | market | timeout | trend | trend | noisyHighBeta | 72.88 | ↑131.98 | 0.8145 | 1.62 | **WIN** |
| 371 | AMAT | 08-08 14:45 | 08-08 15:10 | 188.97 | 187.81 | 40 | 7558.8 | -46.4 | -0.61% | 0.42R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 70.55 | ↑185.83 | 2.1428 | 1.2 | **LOSS** |
| 372 | NVDA | 08-08 15:20 | 08-08 17:05 | 102.85 | 103.41 | 74 | 7610.9 | +41.44 | +0.54% | 0.27R | 105m | market | timeout | trend | trend | noisyHighBeta | 64.59 | ↑100.87 | 0.639 | 1.61 | **WIN** |
| 373 | SNOW | 08-08 15:20 | 08-08 15:45 | 120.7 | 120.23 | 63 | 7604.1 | -29.61 | -0.39% | 0.44R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 61.12 | ↑119.33 | 0.9296 | 1.27 | **LOSS** |
| 374 | MRVL | 08-08 15:25 | 08-08 16:15 | 59.56 | 59.49 | 129 | 7683.24 | -9.03 | -0.12% | 0.09R | 50m | market | stagnation | trend | trend | noisyHighBeta | 68.73 | ↑58.73 | 0.6144 | 1.62 | **LOSS** |
| 375 | CRM | 08-09 14:00 | 08-09 15:45 | 251.16 | 251.58 | 55 | 13813.8 | +23.1 | +0.17% | 0.2R | 105m | market | timeout | trend | trend | neutral | 64.81 | ↑249.86 | 0.58 | 1.4 | **WIN** |
| 376 | MDB | 08-09 14:00 | 08-09 15:45 | 237.03 | 238.1 | 54 | 12799.62 | +57.78 | +0.45% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 67.59 | ↑233.84 | -0.0777 | 1.61 | **WIN** |
| 377 | NOW | 08-09 14:05 | 08-09 14:30 | 812.41 | 807.75 | 17 | 13810.97 | -79.22 | -0.57% | 0.68R | 25m | market | early-reversal | trend | trend | neutral | 70.97 | ↓809.74 | 3.123 | 2.85 | **LOSS** |
| 378 | COST | 08-09 14:05 | 08-09 15:50 | 849.49 | 852.87 | 16 | 13591.84 | +54.08 | +0.4% | 0.57R | 105m | market | timeout | trend | trend | neutral | 79.14 | ↑843.74 | 2.4328 | 1.53 | **WIN** |
| 379 | COST | 08-12 14:05 | 08-12 15:20 | 861.43 | 860.86 | 16 | 13782.88 | -9.12 | -0.07% | 0.1R | 75m | market | breakeven-stop | trend | trend | neutral | 65.86 | ↓855.59 | 1.2685 | 1.31 | **LOSS** |
| 380 | UNH | 08-12 14:45 | 08-12 15:05 | 567.23 | 564.4 | 24 | 13613.52 | -67.92 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 71.13 | ↓564.37 | 2.1081 | 1.35 | **LOSS** |
| 381 | KLAC | 08-12 14:45 | 08-12 15:25 | 763.21 | 753.02 | 10 | 7632.1 | -101.9 | -1.34% | 1.21R | 40m | market | stop-loss | breakout | trend | noisyHighBeta | 65.01 | ↓756.02 | 4.3138 | 1.1 | **LOSS** |
| 382 | ADBE | 08-13 14:00 | 08-13 14:20 | 533.06 | 531.33 | 26 | 13859.56 | -44.98 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 62.83 | ↑530.81 | 0.6439 | 2.91 | **LOSS** |
| 383 | SHOP | 08-13 14:05 | 08-13 15:50 | 69.27 | 69.62 | 202 | 13992.54 | +70.7 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 79.57 | ↑68.92 | 0.1695 | 1.18 | **WIN** |
| 384 | SNOW | 08-13 14:55 | 08-13 16:40 | 126.05 | 127.07 | 111 | 13991.55 | +113.22 | +0.81% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.64 | ↑124.83 | 0.786 | 1.48 | **WIN** |
| 385 | SQ | 08-13 14:55 | 08-13 16:30 | 63.27 | 63.19 | 220 | 13919.4 | -17.6 | -0.13% | 0.16R | 95m | market | stagnation | trend | trend | neutral | 79.51 | ↑62.61 | 0.4875 | 1.03 | **LOSS** |
| 386 | BA | 08-13 15:15 | 08-13 15:55 | 166.11 | 166.18 | 84 | 13953.24 | +5.88 | +0.04% | 0.06R | 40m | market | breakeven-stop | breakout | breakout | neutral | 82.65 | ↑163.98 | 0.1657 | 2.12 | **WIN** |
| 387 | ARM | 08-13 15:25 | 08-13 17:10 | 121.98 | 125.15 | 63 | 7684.74 | +199.71 | +2.6% | 2.22R | 105m | market | timeout | trend | trend | noisyHighBeta | 65.08 | ↑120.39 | 1.1062 | 1.09 | **WIN** |
| 388 | WMT | 08-14 14:10 | 08-14 15:00 | 68.56 | 68.45 | 204 | 13986.24 | -22.44 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 73.63 | ↑68.31 | 0.181 | 1.06 | **LOSS** |
| 389 | COIN | 08-15 14:10 | 08-15 15:05 | 201.42 | 200.87 | 69 | 13897.98 | -37.95 | -0.27% | 0.17R | 55m | market | stagnation | breakout | trend | neutral | 79.24 | ↑199.4 | 1.8843 | 1.1 | **LOSS** |
| 390 | DDOG | 08-15 15:15 | 08-15 15:35 | 118.27 | 117.91 | 118 | 13955.86 | -42.48 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 70.91 | ↑117.31 | 0.918 | 1.47 | **LOSS** |
| 391 | BA | 08-15 15:15 | 08-15 15:35 | 173.3 | 172.65 | 80 | 13864 | -52 | -0.38% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.07 | ↑172.04 | 0.9815 | 2.33 | **LOSS** |
| 392 | BA | 08-16 14:10 | 08-16 14:30 | 178.81 | 178.13 | 78 | 13947.18 | -53.04 | -0.38% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↑177.73 | 0.9905 | 1.46 | **LOSS** |
| 393 | NET | 08-19 14:00 | 08-19 14:40 | 83.13 | 83.78 | 83 | 13882.71 | +53.95 | +0.78% | 1.11R | 40m | market | trim-profit-target | trend | trend | neutral | 71.43 | ↑82.71 | 0.2412 | 1.84 | **WIN** |
| 394 | NET | 08-19 14:00 | 08-19 15:45 | 83.13 | 83.97 | 84 | 13882.71 | +70.56 | +1.01% | 1.44R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑82.71 | 0.2412 | 1.84 | **WIN** |
| 395 | PLTR | 08-19 14:05 | 08-19 14:35 | 32.57 | 32.31 | 432 | 14070.24 | -112.32 | -0.8% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 58.98 | ↑32.24 | 0.0315 | 1.08 | **LOSS** |
| 396 | TSLA | 08-19 14:10 | 08-19 15:05 | 220.31 | 220.03 | 63 | 13879.53 | -17.64 | -0.13% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 64.78 | ↑217.34 | 0.6184 | 2.05 | **LOSS** |
| 397 | SNOW | 08-19 14:10 | 08-19 15:50 | 131.15 | 132.05 | 53 | 14033.05 | +47.7 | +0.69% | 0.65R | 100m | market | trim-profit-target | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 398 | SNOW | 08-19 14:10 | 08-19 15:55 | 131.15 | 131.54 | 54 | 14033.05 | +21.06 | +0.3% | 0.28R | 105m | market | timeout | trend | trend | neutral | 79.95 | ↑130.04 | 0.6725 | 1.11 | **WIN** |
| 399 | AMD | 08-19 14:30 | 08-19 14:55 | 153.59 | 152.65 | 91 | 13976.69 | -85.54 | -0.61% | 0.31R | 25m | market | early-reversal | breakout | breakout | neutral | 71.42 | ↑150.9 | 0.9266 | 1.41 | **LOSS** |
| 400 | INTC | 08-19 14:45 | 08-19 16:00 | 21.23 | 21.24 | 656 | 13926.88 | +6.56 | +0.05% | 0.05R | 75m | market | trailing-stop | trend | trend | neutral | 65.14 | ↓21.02 | 0.0843 | 1.73 | **WIN** |
| 401 | LOW | 08-20 14:05 | 08-20 14:25 | 245.55 | 244.17 | 56 | 13750.8 | -77.28 | -0.56% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 62.93 | ↑243.28 | 0.2712 | 2.43 | **LOSS** |
| 402 | SBUX | 08-20 15:00 | 08-20 15:30 | 93.62 | 93.34 | 149 | 13949.38 | -41.72 | -0.3% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 72 | ↑92.71 | 0.2051 | 1.03 | **LOSS** |
| 403 | TXN | 08-20 15:15 | 08-20 16:35 | 201.72 | 201.71 | 64 | 12910.08 | -0.64 | 0% | 0R | 80m | market | breakeven-stop | breakout | breakout | neutral | 59.11 | ↑199.92 | -0.2655 | 9.34 | **LOSS** |
| 404 | CELH | 08-21 14:00 | 08-21 14:20 | 41.27 | 40.88 | 340 | 14031.8 | -132.6 | -0.94% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 77.37 | ↓41 | 0.3432 | 1.11 | **LOSS** |
| 405 | MDB | 08-21 14:10 | 08-21 15:00 | 257.48 | 256.71 | 54 | 13903.92 | -41.58 | -0.3% | 0.42R | 50m | market | breakeven-stop | trend | trend | neutral | 68.36 | ↓256.24 | 0.3182 | 2.02 | **LOSS** |
| 406 | COIN | 08-21 14:40 | 08-21 14:50 | 200.64 | 197.48 | 38 | 7624.32 | -120.08 | -1.57% | 1.05R | 10m | market | stop-loss | trend | trend | noisyHighBeta | 75.58 | ↓198.64 | 1.4326 | 1.16 | **LOSS** |
| 407 | PYPL | 08-22 13:45 | 08-22 14:05 | 72.56 | 71.97 | 192 | 13931.52 | -113.28 | -0.81% | 1.13R | 20m | market | early-reversal | breakout | breakout | neutral | 77.49 | ↓72.32 | 0.1639 | 1.32 | **LOSS** |
| 408 | SMCI | 08-23 13:45 | 08-23 14:40 | 617.44 | 617 | 22 | 13583.68 | -9.68 | -0.07% | 0.07R | 55m | market | stagnation | breakout | breakout | neutral | 69.2 | ↓611.41 | 0.9213 | 1.2 | **LOSS** |
| 409 | NVDA | 08-23 14:00 | 08-23 14:45 | 128.46 | 127.11 | 108 | 13873.68 | -145.8 | -1.05% | 0.61R | 45m | market | early-reversal | breakout | breakout | neutral | 81.45 | ↓126.92 | 0.7607 | 1.12 | **LOSS** |
| 410 | GOOGL | 08-23 14:00 | 08-23 14:45 | 165.72 | 164.53 | 84 | 13920.48 | -99.96 | -0.72% | 1.01R | 45m | market | early-reversal | trend | trend | neutral | 71.08 | ↓165 | 0.1746 | 2.03 | **LOSS** |
| 411 | AVGO | 08-23 14:00 | 08-23 14:45 | 167.13 | 164.4 | 83 | 13871.79 | -226.59 | -1.63% | 1.14R | 45m | market | early-reversal | breakout | breakout | neutral | 71.11 | ↓165.29 | 0.3153 | 1.56 | **LOSS** |
| 412 | QCOM | 08-23 14:00 | 08-23 14:45 | 173.98 | 171.5 | 80 | 13918.4 | -198.4 | -1.43% | 1.2R | 45m | market | stop-loss | breakout | breakout | neutral | 78.71 | ↓171.92 | 0.7458 | 1.38 | **LOSS** |
| 413 | TSM | 08-23 14:00 | 08-23 14:45 | 172.03 | 170.49 | 81 | 13934.43 | -124.74 | -0.9% | 0.76R | 45m | market | early-reversal | breakout | breakout | neutral | 83.6 | ↓169.37 | 0.7171 | 1.29 | **LOSS** |
| 414 | CRWD | 08-23 14:00 | 08-23 14:15 | 273.23 | 270.36 | 51 | 13934.73 | -146.37 | -1.05% | 1.33R | 15m | market | stop-loss | trend | trend | neutral | 74.42 | ↓270.88 | 0.3966 | 1.49 | **LOSS** |
| 415 | RIVN | 08-23 14:00 | 08-23 15:20 | 13.35 | 13.73 | 1045 | 13950.75 | +397.1 | +2.85% | 1.71R | 80m | market | profit-target | breakout | breakout | neutral | 78.29 | ↑13.17 | 0.0644 | 1.23 | **WIN** |
| 416 | NFLX | 08-23 14:05 | 08-23 14:25 | 695.23 | 692.1 | 20 | 13904.6 | -62.6 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 70.6 | ↓692.63 | 0.8525 | 1.21 | **LOSS** |
| 417 | ABNB | 08-23 14:05 | 08-23 14:55 | 117.72 | 117.65 | 118 | 13890.96 | -8.26 | -0.06% | 0.08R | 50m | market | breakeven-stop | trend | trend | neutral | 73.68 | ↓117.32 | 0.2829 | 1.39 | **LOSS** |
| 418 | KLAC | 08-23 14:05 | 08-23 14:30 | 820.93 | 816.12 | 17 | 13955.81 | -81.77 | -0.59% | 0.48R | 25m | market | early-reversal | breakout | breakout | neutral | 68.4 | ↓817.44 | -0.7089 | 2.1 | **LOSS** |
| 419 | MRVL | 08-23 14:05 | 08-23 14:45 | 71.98 | 70.87 | 194 | 13964.12 | -215.34 | -1.54% | 0.85R | 40m | market | early-reversal | breakout | trend | neutral | 77.5 | ↓71.1 | 0.3735 | 1.02 | **LOSS** |
| 420 | DELL | 08-23 14:05 | 08-23 14:45 | 112.32 | 110.85 | 124 | 13927.68 | -182.28 | -1.31% | 0.83R | 40m | market | early-reversal | trend | trend | neutral | 70.3 | ↓111.46 | 0.442 | 1.95 | **LOSS** |
| 421 | HD | 08-23 14:10 | 08-23 15:55 | 371.03 | 372.81 | 37 | 13728.11 | +65.86 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | neutral | 71.95 | ↑367.87 | 0.5107 | 1.35 | **WIN** |
| 422 | SHOP | 08-23 14:35 | 08-23 16:20 | 75.82 | 76.05 | 184 | 13950.88 | +42.32 | +0.3% | 0.28R | 105m | market | timeout | trend | trend | neutral | 73.45 | ↑75.58 | 0.3394 | 2.12 | **WIN** |
| 423 | BAC | 08-23 15:10 | 08-23 15:40 | 40.09 | 39.89 | 349 | 13991.41 | -69.8 | -0.5% | 0.71R | 30m | market | early-reversal | trend | trend | neutral | 65.04 | ↑39.77 | 0.1904 | 3.12 | **LOSS** |
| 424 | HPE | 08-23 15:10 | 08-23 15:50 | 19.25 | 19.19 | 726 | 13975.5 | -43.56 | -0.31% | 0.41R | 40m | market | early-reversal | trend | trend | neutral | 59.82 | ↑19.09 | 0.089 | 1.73 | **LOSS** |
| 425 | RIVN | 08-26 14:00 | 08-26 14:20 | 14.55 | 14.35 | 962 | 13997.1 | -192.4 | -1.37% | 0.69R | 20m | market | early-reversal | breakout | breakout | neutral | 71.69 | ↓14.24 | 0.1183 | 1.47 | **LOSS** |
| 426 | CAT | 08-26 14:05 | 08-26 14:50 | 353.64 | 351.53 | 39 | 13791.96 | -82.29 | -0.6% | 0.86R | 45m | market | early-reversal | trend | trend | neutral | 75.83 | ↓352.11 | 1.4451 | 1.42 | **LOSS** |
| 427 | SBUX | 08-27 14:30 | 08-27 16:15 | 96.44 | 97.7 | 145 | 13983.8 | +182.7 | +1.31% | 1.7R | 105m | market | timeout | trend | trend | neutral | 77.8 | ↑95.99 | 0.1814 | 1.7 | **WIN** |
| 428 | AAPL | 08-29 13:45 | 08-29 14:05 | 231.64 | 230.25 | 60 | 13898.4 | -83.4 | -0.6% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | 82.26 | ↓230.42 | 0.9865 | 1.95 | **LOSS** |
| 429 | ARM | 08-29 14:40 | 08-29 15:00 | 132.33 | 131.07 | 58 | 7675.14 | -73.08 | -0.95% | 0.48R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.17 | ↑130.71 | 1.7853 | 5.35 | **LOSS** |
| 430 | ELF | 08-29 14:45 | 08-29 15:00 | 155.24 | 153.5 | 90 | 13971.6 | -156.6 | -1.12% | 1.07R | 15m | market | stop-loss | trend | trend | neutral | 73.87 | ↑152.6 | 0.0586 | 1.14 | **LOSS** |
| 431 | PLTR | 08-29 15:10 | 08-29 15:50 | 31.8 | 31.66 | 442 | 14055.6 | -61.88 | -0.44% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 62.77 | ↑31.44 | 0.3418 | 1.52 | **LOSS** |
| 432 | BA | 08-29 15:20 | 08-29 16:30 | 173.12 | 174.84 | 40 | 13849.6 | +68.8 | +0.99% | 1.41R | 70m | market | trim-profit-target | trend | trend | neutral | 73.52 | ↑171.68 | 0.3524 | 1.25 | **WIN** |
| 433 | BA | 08-29 15:20 | 08-29 17:05 | 173.12 | 173.89 | 40 | 13849.6 | +30.8 | +0.44% | 0.63R | 105m | market | timeout | trend | trend | neutral | 73.52 | ↑171.68 | 0.3524 | 1.25 | **WIN** |
| 434 | AMZN | 08-30 13:35 | 08-30 14:55 | 173.96 | 173.84 | 77 | 13394.92 | -9.24 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | neutral | 80.6 | ↓173.43 | -0.128 | 2.25 | **LOSS** |
| 435 | AMD | 08-30 13:45 | 08-30 14:10 | 148.14 | 147.33 | 94 | 13925.16 | -76.14 | -0.55% | 0.43R | 25m | market | early-reversal | breakout | breakout | neutral | 80.91 | ↓147.73 | 0.0006 | 1.15 | **LOSS** |
| 436 | INTC | 08-30 14:45 | 08-30 15:35 | 21.93 | 21.9 | 635 | 13925.55 | -19.05 | -0.14% | 0.07R | 50m | market | stagnation | breakout | trend | neutral | 75.74 | ↑21.63 | 0.4983 | 1.25 | **LOSS** |
| 437 | TSLA | 09-04 14:30 | 09-04 15:25 | 220.39 | 219.74 | 63 | 13884.57 | -40.95 | -0.29% | 0.16R | 55m | market | stagnation | breakout | breakout | neutral | 84.64 | ↑217.1 | 2.107 | 2.69 | **LOSS** |
| 438 | UBER | 09-04 14:30 | 09-04 15:10 | 72.58 | 72.35 | 192 | 13935.36 | -44.16 | -0.32% | 0.29R | 40m | market | early-reversal | trend | trend | neutral | 63.35 | ↑72.06 | 0.1492 | 1.86 | **LOSS** |
| 439 | SQ | 09-05 14:00 | 09-05 14:25 | 65.16 | 64.72 | 214 | 13944.24 | -94.16 | -0.68% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 77.93 | ↑64.35 | 0.0758 | 1.48 | **LOSS** |
| 440 | GS | 09-05 14:00 | 09-05 14:40 | 495.26 | 493.61 | 28 | 13867.28 | -46.2 | -0.33% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 69.92 | ↑491.53 | 0.6454 | 1.18 | **LOSS** |
| 441 | ORCL | 09-05 14:15 | 09-05 15:40 | 141.81 | 141.47 | 98 | 13897.38 | -33.32 | -0.24% | 0.34R | 85m | market | breakeven-stop | trend | trend | neutral | 75.45 | ↓141.16 | 0.3024 | 1.02 | **LOSS** |
| 442 | ABNB | 09-05 14:35 | 09-05 14:55 | 116.38 | 115.54 | 120 | 13965.6 | -100.8 | -0.72% | 1R | 20m | market | early-reversal | trend | trend | neutral | 65.58 | ↓115.63 | 0.3222 | 1.92 | **LOSS** |
| 443 | LLY | 09-06 13:30 | 09-06 13:40 | 926.4 | 917.44 | 13 | 12043.2 | -116.48 | -0.97% | 1.39R | 10m | market | stop-loss | breakout | breakout | neutral | 69.57 | ↓924.14 | 0.1312 | 1.89 | **LOSS** |
| 444 | MA | 09-09 14:00 | 09-09 14:50 | 484.74 | 484.23 | 28 | 13572.72 | -14.28 | -0.11% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 77.46 | ↑482.86 | 1.9943 | 1.14 | **LOSS** |
| 445 | TGT | 09-09 14:15 | 09-09 14:45 | 152.81 | 152.33 | 91 | 13905.71 | -43.68 | -0.31% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 78.52 | ↑152.09 | 0.3573 | 1.05 | **LOSS** |
| 446 | MDB | 09-10 14:05 | 09-10 14:15 | 293.6 | 289.47 | 47 | 13799.2 | -194.11 | -1.41% | 1.47R | 10m | market | stop-loss | trend | trend | neutral | 77.19 | ↓290.95 | 1.3743 | 1.29 | **LOSS** |
| 447 | HD | 09-10 15:00 | 09-10 15:50 | 368.28 | 367.44 | 37 | 13626.36 | -31.08 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 60.18 | ↑365.64 | 0.7341 | 1.5 | **LOSS** |
| 448 | COIN | 09-12 14:10 | 09-12 15:00 | 160.1 | 159.85 | 47 | 7524.7 | -11.75 | -0.16% | 0.08R | 50m | market | trailing-stop | trend | trend | noisyHighBeta | 59.28 | ↑158.67 | 0.5283 | 1.85 | **LOSS** |
| 449 | CRWD | 09-12 14:15 | 09-12 14:45 | 256.31 | 254.93 | 54 | 13840.74 | -74.52 | -0.54% | 0.56R | 30m | market | early-reversal | trend | trend | neutral | 69.64 | ↓254.67 | 0.7525 | 1.3 | **LOSS** |
| 450 | IBM | 09-12 14:15 | 09-12 14:35 | 210.96 | 209.28 | 66 | 13923.36 | -110.88 | -0.8% | 1.14R | 20m | market | stop-loss | trend | trend | neutral | 67.22 | ↓209.6 | 0.5138 | 1.28 | **LOSS** |
| 451 | NVDA | 09-12 14:20 | 09-12 15:20 | 119.36 | 119.07 | 116 | 13845.76 | -33.64 | -0.24% | 0.12R | 60m | market | stagnation | trend | trend | neutral | 69.37 | ↑117.67 | 0.9629 | 1.05 | **LOSS** |
| 452 | DDOG | 09-12 14:30 | 09-12 14:50 | 110.83 | 110.17 | 126 | 13964.58 | -83.16 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 72.31 | ↓110.17 | 0.3762 | 1.69 | **LOSS** |
| 453 | SHOP | 09-13 14:00 | 09-13 15:00 | 72.42 | 73.08 | 96 | 13977.06 | +63.36 | +0.91% | 1.06R | 60m | market | trim-profit-target | trend | trend | neutral | 62.62 | ↑72.19 | 0.157 | 1.76 | **WIN** |
| 454 | SHOP | 09-13 14:00 | 09-13 15:45 | 72.42 | 72.9 | 97 | 13977.06 | +46.56 | +0.66% | 0.77R | 105m | market | timeout | trend | trend | neutral | 62.62 | ↑72.19 | 0.157 | 1.76 | **WIN** |
| 455 | DELL | 09-13 14:05 | 09-13 14:25 | 114.3 | 112.9 | 122 | 13944.6 | -170.8 | -1.22% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 65.67 | ↓113.02 | 0.2289 | 2.77 | **LOSS** |
| 456 | TGT | 09-13 14:05 | 09-13 15:00 | 151.36 | 151.38 | 92 | 13925.12 | +1.84 | +0.01% | 0.01R | 55m | market | breakeven-stop | trend | trend | neutral | 69.88 | ↑150.47 | 0.5989 | 1.05 | **WIN** |
| 457 | QCOM | 09-13 14:20 | 09-13 14:45 | 167.7 | 167.03 | 83 | 13919.1 | -55.61 | -0.4% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 73.89 | ↑166.8 | 0.5078 | 1.39 | **LOSS** |
| 458 | LOW | 09-13 14:30 | 09-13 15:05 | 256.78 | 255.93 | 54 | 13866.12 | -45.9 | -0.33% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 78.99 | ↑255.14 | 1.4119 | 1.27 | **LOSS** |
| 459 | PANW | 09-13 14:35 | 09-13 14:55 | 351.83 | 350.07 | 39 | 13721.37 | -68.64 | -0.5% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 71.34 | ↑349.33 | 1.2607 | 1.47 | **LOSS** |
| 460 | BA | 09-13 14:40 | 09-13 16:00 | 161.69 | 160.44 | 86 | 13905.34 | -107.5 | -0.77% | 0.63R | 80m | market | early-reversal | breakout | breakout | neutral | 57.07 | ↓159.78 | -0.6947 | 1.29 | **LOSS** |
| 461 | GE | 09-13 14:45 | 09-13 16:10 | 173.3 | 175.86 | 40 | 13864 | +102.4 | +1.48% | 2.11R | 85m | market | trim-profit-target | trend | trend | neutral | 77.86 | ↑171.78 | 0.8188 | 1.37 | **WIN** |
| 462 | GE | 09-13 14:45 | 09-13 16:30 | 173.3 | 176.14 | 40 | 13864 | +113.6 | +1.64% | 2.34R | 105m | market | timeout | trend | trend | neutral | 77.86 | ↑171.78 | 0.8188 | 1.37 | **WIN** |
| 463 | SMCI | 09-13 14:50 | 09-13 15:25 | 465.48 | 460.88 | 15 | 6982.2 | -69 | -0.99% | 0.5R | 35m | market | early-reversal | breakout | trend | noisyHighBeta | 74.23 | ↑458.2 | 5.7042 | 1.36 | **LOSS** |
| 464 | PLTR | 09-13 15:20 | 09-13 15:50 | 35.9 | 35.75 | 391 | 14036.9 | -58.65 | -0.42% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 73.39 | ↑35.46 | 0.1849 | 1.14 | **LOSS** |
| 465 | COIN | 09-13 15:25 | 09-13 16:25 | 166.45 | 166.27 | 46 | 7656.7 | -8.28 | -0.11% | 0.09R | 60m | market | breakeven-stop | trend | trend | noisyHighBeta | 59.64 | ↑164.14 | 0.5235 | 1.89 | **LOSS** |
| 466 | SQ | 09-16 14:15 | 09-16 14:30 | 65.31 | 64.4 | 213 | 13911.03 | -193.83 | -1.39% | 1.43R | 15m | market | stop-loss | trend | trend | neutral | 74.87 | ↓64.78 | 0.1548 | 1.08 | **LOSS** |
| 467 | TSLA | 09-17 14:00 | 09-17 14:20 | 234.48 | 232.17 | 59 | 13834.32 | -136.29 | -0.99% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 75.17 | ↓232.07 | 1.4214 | 1.66 | **LOSS** |
| 468 | TXN | 09-17 14:05 | 09-17 15:50 | 200.68 | 201.94 | 69 | 13846.92 | +86.94 | +0.63% | 0.9R | 105m | market | timeout | trend | trend | neutral | 75.03 | ↑200.05 | 0.6016 | 2.17 | **WIN** |
| 469 | NKE | 09-17 14:05 | 09-17 15:50 | 80.34 | 80.73 | 174 | 13979.16 | +67.86 | +0.49% | 0.7R | 105m | market | timeout | trend | trend | neutral | 71.82 | ↑80.08 | 0.111 | 1.62 | **WIN** |
| 470 | HPE | 09-17 14:20 | 09-17 14:55 | 18.31 | 18.22 | 763 | 13970.53 | -68.67 | -0.49% | 0.36R | 35m | market | early-reversal | trend | trend | neutral | 74.69 | ↑18.01 | 0.2658 | 1.14 | **LOSS** |
| 471 | MU | 09-17 14:25 | 09-17 14:55 | 88.97 | 88.65 | 156 | 13879.32 | -49.92 | -0.36% | 0.3R | 30m | market | early-reversal | trend | trend | neutral | 76.47 | ↑88.28 | 0.471 | 1.06 | **LOSS** |
| 472 | INTC | 09-17 14:35 | 09-17 15:30 | 22.02 | 22.15 | 348 | 7662.96 | +45.24 | +0.59% | 0.3R | 55m | market | trailing-stop | breakout | trend | noisyHighBeta | 42.3 | ↑21.58 | 0.2408 | 1.25 | **WIN** |
| 473 | AMD | 09-17 15:15 | 09-17 15:35 | 153.88 | 152.48 | 90 | 13849.2 | -126 | -0.91% | 1.07R | 20m | market | early-reversal | trend | trend | neutral | 76.37 | ↓152.49 | 0.3089 | 1.17 | **LOSS** |
| 474 | SHOP | 09-18 13:40 | 09-18 14:00 | 75.45 | 74.98 | 186 | 14033.7 | -87.42 | -0.62% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 84.8 | ↓75.11 | 0.159 | 1.4 | **LOSS** |
| 475 | UBER | 09-19 14:00 | 09-19 14:50 | 75.91 | 75.73 | 183 | 13891.53 | -32.94 | -0.24% | 0.15R | 50m | market | stagnation | breakout | breakout | neutral | 71.58 | ↑75.22 | 0.3472 | 1.29 | **LOSS** |
| 476 | ABNB | 09-19 14:00 | 09-19 14:50 | 130.19 | 130.09 | 107 | 13930.33 | -10.7 | -0.08% | 0.04R | 50m | market | stagnation | breakout | breakout | neutral | 79.57 | ↑128.81 | 1.3834 | 1.92 | **LOSS** |
| 477 | JPM | 09-19 14:05 | 09-19 15:50 | 210.3 | 210.12 | 66 | 13879.8 | -11.88 | -0.09% | 0.09R | 105m | market | stagnation | breakout | trend | neutral | 60.82 | ↑209.01 | 0.2467 | 1.03 | **LOSS** |
| 478 | GS | 09-19 14:10 | 09-19 14:55 | 499.81 | 503.25 | 13 | 13494.87 | +44.72 | +0.69% | 0.57R | 45m | market | trim-profit-target | trend | trend | neutral | 73.09 | ↑497.96 | 3.0285 | 2.35 | **WIN** |
| 479 | GS | 09-19 14:10 | 09-19 15:50 | 499.81 | 499.66 | 14 | 13494.87 | -2.1 | -0.03% | 0.02R | 100m | market | breakeven-stop | trend | trend | neutral | 73.09 | ↓497.96 | 3.0285 | 2.35 | **LOSS** |
| 480 | NFLX | 09-19 14:30 | 09-19 15:20 | 712.68 | 712.3 | 19 | 13540.92 | -7.22 | -0.05% | 0.05R | 50m | market | stagnation | breakout | breakout | neutral | 88.64 | ↑702.53 | 3.7099 | 1.74 | **LOSS** |
| 481 | PYPL | 09-19 14:40 | 09-19 16:25 | 76.71 | 77.37 | 181 | 13884.51 | +119.46 | +0.86% | 0.82R | 105m | market | timeout | trend | trend | neutral | 72.79 | ↑76.04 | 0.9501 | 1.52 | **WIN** |
| 482 | META | 09-19 14:45 | 09-19 15:55 | 557.11 | 557.23 | 25 | 13927.75 | +3 | +0.02% | 0.03R | 70m | market | breakeven-stop | trend | trend | neutral | 73.08 | ↑550.76 | 4.3207 | 1.2 | **WIN** |
| 483 | CRM | 09-19 15:10 | 09-19 16:35 | 261.59 | 268.82 | 53 | 13864.27 | +383.19 | +2.76% | 3.94R | 85m | market | profit-target | trend | trend | neutral | 63.6 | ↑259.94 | 1.8689 | 1.35 | **WIN** |
| 484 | NET | 09-19 15:10 | 09-19 16:00 | 80.99 | 81.64 | 86 | 13930.28 | +55.9 | +0.8% | 1.14R | 50m | market | trim-profit-target | trend | trend | neutral | 77.8 | ↑80.19 | 0.5828 | 1.44 | **WIN** |
| 485 | NET | 09-19 15:10 | 09-19 16:55 | 80.99 | 82.12 | 86 | 13930.28 | +97.18 | +1.4% | 2R | 105m | market | timeout | trend | trend | neutral | 77.8 | ↑80.19 | 0.5828 | 1.44 | **WIN** |
| 486 | SNOW | 09-19 15:15 | 09-19 15:55 | 114.07 | 113.97 | 123 | 14030.61 | -12.3 | -0.09% | 0.1R | 40m | market | breakeven-stop | trend | trend | neutral | 77.62 | ↑112.67 | 0.5526 | 2.19 | **LOSS** |
| 487 | CAT | 09-19 15:15 | 09-19 17:00 | 368.33 | 373.35 | 37 | 13628.21 | +185.74 | +1.36% | 1.94R | 105m | market | timeout | trend | trend | neutral | 79.61 | ↑365.72 | 2.3381 | 2.13 | **WIN** |
| 488 | ORCL | 09-20 15:20 | 09-20 15:40 | 168.78 | 168.24 | 82 | 13839.96 | -44.28 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 72.97 | ↑167.72 | 0.2687 | 1.29 | **LOSS** |
| 489 | NET | 09-23 15:20 | 09-23 16:50 | 85.01 | 84.88 | 164 | 13941.64 | -21.32 | -0.15% | 0.21R | 90m | market | breakeven-stop | trend | trend | neutral | 73.69 | ↑84.11 | 0.5433 | 1.41 | **LOSS** |
| 490 | TGT | 09-24 14:30 | 09-24 15:20 | 157.39 | 156.96 | 88 | 13850.32 | -37.84 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 78.02 | ↑156.53 | 0.4209 | 1.71 | **LOSS** |
| 491 | NVO | 09-24 14:55 | 09-24 16:40 | 125.16 | 126.52 | 111 | 13892.76 | +150.96 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 57.38 | ↑124.55 | 0.258 | 1.1 | **WIN** |
| 492 | SBUX | 09-24 14:55 | 09-24 15:20 | 95.86 | 95.54 | 146 | 13995.56 | -46.72 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 72.55 | ↑95.14 | 0.1263 | 1.62 | **LOSS** |
| 493 | LRCX | 09-25 13:45 | 09-25 15:30 | 801.66 | 806.15 | 17 | 13628.22 | +76.33 | +0.56% | 0.8R | 105m | market | timeout | breakout | breakout | neutral | 80.58 | ↑796.29 | 0.3041 | 2.1 | **WIN** |
| 494 | GE | 09-25 14:00 | 09-25 14:25 | 190.64 | 190.07 | 73 | 13916.72 | -41.61 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 69.55 | ↑189.73 | 0.3348 | 1.36 | **LOSS** |
| 495 | WMT | 09-25 14:00 | 09-25 14:20 | 81.25 | 80.82 | 172 | 13975 | -73.96 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 74.71 | ↓80.98 | 0.1226 | 1.06 | **LOSS** |
| 496 | AMAT | 09-25 14:00 | 09-25 14:45 | 199.21 | 198.29 | 70 | 13944.7 | -64.4 | -0.46% | 0.47R | 45m | market | early-reversal | trend | breakout | neutral | 73.08 | ↑197.14 | 0.4383 | 1.17 | **LOSS** |
| 497 | SNOW | 09-25 14:05 | 09-25 14:50 | 114.81 | 114.73 | 122 | 14006.82 | -9.76 | -0.07% | 0.05R | 45m | market | trailing-stop | trend | trend | neutral | 73.62 | ↓113.86 | 0.6824 | 1.29 | **LOSS** |
| 498 | CRWD | 09-25 14:10 | 09-25 14:30 | 291.55 | 288.64 | 47 | 13702.85 | -136.77 | -1% | 1.43R | 20m | market | stop-loss | trend | trend | neutral | 69.2 | ↓289.91 | 0.2117 | 1.18 | **LOSS** |
| 499 | AAPL | 09-26 14:40 | 09-26 15:10 | 228.12 | 227.03 | 61 | 13915.32 | -66.49 | -0.48% | 0.69R | 30m | market | early-reversal | trend | trend | neutral | 70.78 | ↑226.73 | 0.6878 | 1.47 | **LOSS** |
| 500 | SMCI | 09-27 13:35 | 09-27 14:10 | 412.73 | 411.22 | 31 | 12794.63 | -46.81 | -0.37% | 0.21R | 35m | market | trailing-stop | breakout | breakout | neutral | 64.33 | ↓407.63 | 2.7998 | 1.85 | **LOSS** |
| 501 | V | 09-27 13:35 | 09-27 15:20 | 275.78 | 277.69 | 50 | 13789 | +95.5 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 80.78 | ↑274.12 | 0.2526 | 1.57 | **WIN** |
| 502 | CELH | 09-27 15:20 | 09-27 15:40 | 32.61 | 32.22 | 430 | 14022.3 | -167.7 | -1.2% | 1.19R | 20m | market | stop-loss | trend | trend | neutral | 66.67 | ↓32.28 | 0.3005 | 1.38 | **LOSS** |
| 503 | PANW | 09-30 14:00 | 09-30 15:00 | 341.21 | 340.5 | 40 | 13648.4 | -28.4 | -0.21% | 0.27R | 60m | market | stagnation | trend | trend | neutral | 76.56 | ↓339.41 | 1.131 | 1.39 | **LOSS** |
| 504 | LOW | 09-30 14:05 | 09-30 14:25 | 269.29 | 268.35 | 51 | 13733.79 | -47.94 | -0.35% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 75.15 | ↓268.29 | 0.5683 | 1.08 | **LOSS** |
| 505 | UNH | 10-01 14:30 | 10-01 15:20 | 587.9 | 586.9 | 23 | 13521.7 | -23 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 58.55 | ↑584.72 | 0.8087 | 1.08 | **LOSS** |
| 506 | BA | 10-01 15:00 | 10-01 15:20 | 154.27 | 153.48 | 90 | 13884.3 | -71.1 | -0.51% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 69.43 | ↑152.14 | 0.4164 | 1.73 | **LOSS** |
| 507 | AVGO | 10-02 14:00 | 10-02 15:45 | 170.92 | 172.1 | 81 | 13844.52 | +95.58 | +0.69% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 62.94 | ↑169.43 | 0.3773 | 1.88 | **WIN** |
| 508 | PLTR | 10-02 14:15 | 10-02 14:55 | 37.12 | 36.97 | 378 | 14031.36 | -56.7 | -0.4% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 65.19 | ↑36.65 | 0.0291 | 1.07 | **LOSS** |
| 509 | AMD | 10-02 14:25 | 10-02 14:55 | 162.58 | 161.93 | 85 | 13819.3 | -55.25 | -0.4% | 0.31R | 30m | market | early-reversal | trend | trend | neutral | 74.85 | ↑160.69 | 0.262 | 1.18 | **LOSS** |
| 510 | CRM | 10-02 14:30 | 10-02 16:15 | 277.04 | 277.84 | 50 | 13852 | +40 | +0.29% | 0.26R | 105m | market | timeout | trend | trend | neutral | 76.09 | ↑275.29 | 0.9969 | 1.04 | **WIN** |
| 511 | KLAC | 10-02 14:30 | 10-02 16:20 | 778.54 | 784.41 | 17 | 13235.18 | +99.79 | +0.75% | 0.56R | 110m | market | timeout | trend | trend | neutral | 71.96 | ↑776.39 | 5.7363 | 1.25 | **WIN** |
| 512 | MRVL | 10-02 15:10 | 10-02 16:45 | 72.69 | 72.58 | 192 | 13956.48 | -21.12 | -0.15% | 0.14R | 95m | market | stagnation | trend | trend | neutral | 78.05 | ↑71.8 | 0.5154 | 1.77 | **LOSS** |
| 513 | MU | 10-03 14:00 | 10-03 14:20 | 102.33 | 101.22 | 136 | 13916.88 | -150.96 | -1.08% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 72.05 | ↑100.93 | 0.3642 | 1.12 | **LOSS** |
| 514 | TSM | 10-03 14:45 | 10-03 15:55 | 179.87 | 179.77 | 77 | 13849.99 | -7.7 | -0.06% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 66.25 | ↑178.7 | 0.9317 | 1.22 | **LOSS** |
| 515 | SNOW | 10-04 14:30 | 10-04 15:15 | 112.53 | 113.95 | 62 | 13953.72 | +88.04 | +1.26% | 1.18R | 45m | market | trim-profit-target | trend | trend | neutral | 77.36 | ↑111.96 | 0.5018 | 3.08 | **WIN** |
| 516 | SNOW | 10-04 14:30 | 10-04 16:15 | 112.53 | 114.2 | 62 | 13953.72 | +103.54 | +1.48% | 1.38R | 105m | market | timeout | trend | trend | neutral | 77.36 | ↑111.96 | 0.5018 | 3.08 | **WIN** |
| 517 | DDOG | 10-04 15:00 | 10-04 16:45 | 120.28 | 121.67 | 116 | 13952.48 | +161.24 | +1.16% | 1.66R | 105m | market | timeout | trend | trend | neutral | 72.03 | ↑119.36 | 0.6786 | 1.52 | **WIN** |
| 518 | LLY | 10-07 14:00 | 10-07 14:20 | 902.49 | 898.75 | 15 | 13537.35 | -56.1 | -0.41% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 75.45 | ↓898.3 | 4.3622 | 2.59 | **LOSS** |
| 519 | HPE | 10-07 14:00 | 10-07 14:50 | 20.83 | 20.8 | 670 | 13956.1 | -20.1 | -0.14% | 0.2R | 50m | market | stagnation | breakout | trend | neutral | 75 | ↑20.73 | 0.0741 | 1.08 | **LOSS** |
| 520 | COIN | 10-07 14:10 | 10-07 14:50 | 174.09 | 172.88 | 40 | 6963.6 | -48.4 | -0.7% | 0.51R | 40m | market | early-reversal | breakout | trend | noisyHighBeta | 73.68 | ↓173.36 | 1.4541 | 1.37 | **LOSS** |
| 521 | UBER | 10-07 14:10 | 10-07 15:50 | 75.16 | 75.18 | 185 | 13904.6 | +3.7 | +0.03% | 0.03R | 100m | market | breakeven-stop | trend | trend | neutral | 73.35 | ↑74.6 | 0.2925 | 1.2 | **WIN** |
| 522 | PYPL | 10-07 14:20 | 10-07 15:05 | 80.06 | 79.69 | 174 | 13930.44 | -64.38 | -0.46% | 0.55R | 45m | market | early-reversal | trend | trend | neutral | 65.84 | ↑79.43 | 0.1631 | 1.18 | **LOSS** |
| 523 | NVDA | 10-07 15:25 | 10-07 17:10 | 128.65 | 129.49 | 108 | 13894.2 | +90.72 | +0.65% | 0.67R | 105m | market | timeout | trend | trend | neutral | 77.57 | ↑126.86 | 0.8278 | 1.13 | **WIN** |
| 524 | NVDA | 10-08 14:00 | 10-08 15:45 | 131.29 | 132.12 | 106 | 13916.74 | +87.98 | +0.63% | 0.39R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑130.46 | 0.3253 | 1.35 | **WIN** |
| 525 | AAPL | 10-08 14:00 | 10-08 14:20 | 225.78 | 224.49 | 62 | 13998.36 | -79.98 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 78.6 | ↓224.58 | 0.4219 | 2.02 | **LOSS** |
| 526 | ABNB | 10-08 14:00 | 10-08 15:10 | 133.04 | 132.88 | 104 | 13836.16 | -16.64 | -0.12% | 0.15R | 70m | market | breakeven-stop | breakout | breakout | neutral | 75.99 | ↓132 | 0.4469 | 1.5 | **LOSS** |
| 527 | ORCL | 10-08 14:20 | 10-08 14:55 | 173.12 | 172.49 | 80 | 13849.6 | -50.4 | -0.36% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 73.61 | ↑172.1 | 0.5563 | 3.49 | **LOSS** |
| 528 | DIS | 10-08 14:30 | 10-08 16:15 | 93.17 | 93.26 | 150 | 13975.5 | +13.5 | +0.1% | 0.14R | 105m | market | timeout | trend | trend | neutral | 68 | ↑92.37 | 0.1498 | 1.17 | **WIN** |
| 529 | SQ | 10-08 14:40 | 10-08 16:25 | 66.97 | 67.8 | 208 | 13929.76 | +172.64 | +1.24% | 1.18R | 105m | market | timeout | trend | trend | neutral | 61.52 | ↑66.4 | 0.2661 | 1.69 | **WIN** |
| 530 | TXN | 10-08 15:00 | 10-08 16:45 | 202.25 | 202.82 | 69 | 13955.25 | +39.33 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 78.07 | ↑200.41 | 0.3205 | 1.18 | **WIN** |
| 531 | MDB | 10-09 14:00 | 10-09 15:25 | 263.92 | 268.7 | 26 | 13723.84 | +124.28 | +1.81% | 2.38R | 85m | market | trim-profit-target | trend | trend | neutral | 67.63 | ↑262.63 | 0.7757 | 1.2 | **WIN** |
| 532 | MDB | 10-09 14:00 | 10-09 15:45 | 263.92 | 269.5 | 26 | 13723.84 | +145.08 | +2.11% | 2.78R | 105m | market | timeout | trend | trend | neutral | 67.63 | ↑262.63 | 0.7757 | 1.2 | **WIN** |
| 533 | AMAT | 10-09 14:05 | 10-09 15:50 | 203.29 | 205.23 | 68 | 13823.72 | +131.92 | +0.95% | 1.36R | 105m | market | timeout | trend | trend | neutral | 77.14 | ↑202.39 | 0.6013 | 2.71 | **WIN** |
| 534 | ELF | 10-09 14:05 | 10-09 14:25 | 106.61 | 105.35 | 131 | 13965.91 | -165.06 | -1.18% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 77.77 | ↓105.83 | 0.8652 | 1.15 | **LOSS** |
| 535 | QCOM | 10-09 14:15 | 10-09 14:45 | 168.06 | 167.52 | 82 | 13780.92 | -44.28 | -0.32% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 68.92 | ↑166.42 | 0.4554 | 1.29 | **LOSS** |
| 536 | RIVN | 10-09 14:15 | 10-09 14:35 | 10.84 | 10.67 | 1289 | 13972.76 | -219.13 | -1.57% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 79.03 | ↓10.77 | 0.0834 | 1.77 | **LOSS** |
| 537 | TSLA | 10-09 14:30 | 10-09 14:50 | 247.33 | 245.32 | 56 | 13850.48 | -112.56 | -0.81% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 60.36 | ↑243.23 | 0.1999 | 1.74 | **LOSS** |
| 538 | LRCX | 10-09 14:30 | 10-09 16:15 | 82.41 | 82.55 | 170 | 14009.7 | +23.8 | +0.17% | 0.18R | 105m | market | timeout | trend | trend | neutral | 76.42 | ↑81.76 | 0.3513 | 3.31 | **WIN** |
| 539 | SMCI | 10-09 15:15 | 10-09 15:35 | 48.89 | 48.31 | 146 | 7137.94 | -84.68 | -1.19% | 0.6R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 70.8 | ↑47.46 | 0.98 | 1.02 | **LOSS** |
| 540 | TXN | 10-09 15:15 | 10-09 16:05 | 204.86 | 204.47 | 68 | 13930.48 | -26.52 | -0.19% | 0.27R | 50m | market | stagnation | trend | trend | neutral | 72.73 | ↑203.31 | 0.384 | 2.43 | **LOSS** |
| 541 | CAT | 10-09 15:20 | 10-09 17:05 | 395.1 | 395.05 | 35 | 13828.5 | -1.75 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 67.77 | ↑391.83 | 1.424 | 1.83 | **LOSS** |
| 542 | NVDA | 10-10 14:10 | 10-10 15:55 | 133.82 | 134.84 | 104 | 13917.28 | +106.08 | +0.76% | 0.59R | 105m | market | timeout | trend | trend | neutral | 72.53 | ↑132.56 | 0.1852 | 1.23 | **WIN** |
| 543 | TGT | 10-10 14:10 | 10-10 14:45 | 155.4 | 154.88 | 89 | 13830.6 | -46.28 | -0.33% | 0.4R | 35m | market | early-reversal | trend | trend | neutral | 65.37 | ↑153.92 | 0.2794 | 1.92 | **LOSS** |
| 544 | NET | 10-10 15:05 | 10-10 16:25 | 92.73 | 92.65 | 150 | 13909.5 | -12 | -0.09% | 0.06R | 80m | market | stagnation | trend | trend | neutral | 78.77 | ↑90.84 | 2.1557 | 1.08 | **LOSS** |
| 545 | ARM | 10-10 15:10 | 10-10 15:30 | 149.86 | 149.05 | 93 | 13936.98 | -75.33 | -0.54% | 0.45R | 20m | market | early-reversal | trend | breakout | neutral | 66.29 | ↑147.36 | 0.3487 | 1.37 | **LOSS** |
| 546 | CELH | 10-10 15:20 | 10-10 15:40 | 35.11 | 34.64 | 219 | 7689.09 | -102.93 | -1.34% | 0.67R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 67.94 | ↑33.73 | 1.0748 | 1.04 | **LOSS** |
| 547 | ARM | 10-11 14:15 | 10-11 14:40 | 151.51 | 150.6 | 92 | 13938.92 | -83.72 | -0.6% | 0.63R | 25m | market | early-reversal | breakout | breakout | neutral | 68.97 | ↑149.9 | 0.1466 | 1.39 | **LOSS** |
| 548 | NVDA | 10-14 14:35 | 10-14 14:55 | 139.46 | 138.39 | 100 | 13946 | -107 | -0.77% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 75.94 | ↓138.54 | 1.2688 | 1.06 | **LOSS** |
| 549 | GOOGL | 10-15 14:00 | 10-15 14:30 | 167.16 | 165.79 | 83 | 13874.28 | -113.71 | -0.82% | 1.05R | 30m | market | early-reversal | trend | trend | neutral | 72.09 | ↓166.33 | 0.4606 | 1.81 | **LOSS** |
| 550 | BA | 10-15 15:05 | 10-15 15:55 | 151.57 | 151.39 | 92 | 13944.44 | -16.56 | -0.12% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 67.19 | ↑150.01 | 0.5046 | 1.16 | **LOSS** |
| 551 | NVDA | 10-16 14:25 | 10-16 14:45 | 134.48 | 133.06 | 103 | 13851.44 | -146.26 | -1.06% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 68.7 | ↓133.03 | 0.6234 | 1.17 | **LOSS** |
| 552 | V | 10-17 14:00 | 10-17 14:50 | 289.8 | 289.53 | 48 | 13910.4 | -12.96 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 69.52 | ↓288.85 | 0.6756 | 1.18 | **LOSS** |
| 553 | COIN | 10-18 14:30 | 10-18 14:50 | 216.07 | 214.74 | 35 | 7562.45 | -46.55 | -0.62% | 0.31R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.25 | ↑212.37 | 2.6607 | 1.58 | **LOSS** |
| 554 | PLTR | 10-18 14:45 | 10-18 15:05 | 42.59 | 42.44 | 329 | 14012.11 | -49.35 | -0.35% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 61.18 | ↑42.26 | 0.1331 | 1.04 | **LOSS** |
| 555 | KLAC | 10-18 15:25 | 10-18 15:50 | 681.21 | 679.2 | 11 | 7493.31 | -22.11 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 61.32 | ↑675.39 | 1.5797 | 2.05 | **LOSS** |
| 556 | ELF | 10-21 14:15 | 10-21 15:10 | 115.13 | 114.48 | 121 | 13930.73 | -78.65 | -0.56% | 0.28R | 55m | market | stagnation | breakout | breakout | neutral | 78.47 | ↓113.67 | 1.6667 | 1.58 | **LOSS** |
| 557 | QCOM | 10-22 14:15 | 10-22 15:15 | 170.59 | 170.47 | 81 | 13817.79 | -9.72 | -0.07% | 0.09R | 60m | market | stagnation | trend | trend | neutral | 77.44 | ↑169.74 | 0.7469 | 1.51 | **LOSS** |
| 558 | RIVN | 10-22 14:40 | 10-22 15:00 | 10.19 | 10.09 | 1368 | 13939.92 | -136.8 | -0.98% | 1.29R | 20m | market | stop-loss | trend | trend | neutral | 66.04 | ↓10.1 | 0.0311 | 1.26 | **LOSS** |
| 559 | TSM | 10-23 14:40 | 10-23 15:30 | 201.1 | 201 | 69 | 13875.9 | -6.9 | -0.05% | 0.05R | 50m | market | breakeven-stop | trend | trend | neutral | 68.46 | ↑198.7 | 0.2717 | 2.09 | **LOSS** |
| 560 | GE | 10-23 14:45 | 10-23 15:30 | 184.05 | 183.08 | 76 | 13987.8 | -73.72 | -0.53% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 67.38 | ↑181.95 | 1.7016 | 2.05 | **LOSS** |
| 561 | NOW | 10-24 14:00 | 10-24 14:50 | 970.84 | 962.55 | 14 | 13591.76 | -116.06 | -0.85% | 0.43R | 50m | market | early-reversal | breakout | breakout | neutral | 81.09 | ↑959.16 | 16.2954 | 2.15 | **LOSS** |
| 562 | TGT | 10-24 14:05 | 10-24 14:40 | 149.92 | 149.47 | 93 | 13942.56 | -41.85 | -0.3% | 0.43R | 35m | market | early-reversal | trend | trend | neutral | 67.81 | ↑149.37 | 0.4359 | 1.17 | **LOSS** |
| 563 | CELH | 10-25 13:30 | 10-25 13:35 | 31.91 | 31.89 | 438 | 13976.58 | -8.76 | -0.06% | 0.08R | 5m | market | breakeven-stop | breakout | breakout | neutral | 90.63 | ↓31.91 | 0.1111 | 1.99 | **LOSS** |
| 564 | MDB | 10-25 13:45 | 10-25 14:05 | 270.61 | 269.1 | 51 | 13801.11 | -77.01 | -0.56% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 76.31 | ↓269.62 | 1.0273 | 3.22 | **LOSS** |
| 565 | NFLX | 10-25 14:00 | 10-25 14:50 | 764.3 | 763.78 | 18 | 13757.4 | -9.36 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.71 | ↓761.8 | 2.1275 | 3.53 | **LOSS** |
| 566 | SNOW | 10-25 14:00 | 10-25 14:20 | 117.02 | 116.45 | 120 | 14042.4 | -68.4 | -0.49% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 75.26 | ↓116.61 | 0.5915 | 1.74 | **LOSS** |
| 567 | MRVL | 10-25 14:00 | 10-25 14:50 | 83.06 | 82.85 | 168 | 13954.08 | -35.28 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.54 | ↓82.81 | 0.3328 | 2.92 | **LOSS** |
| 568 | CRWD | 10-28 14:00 | 10-28 14:50 | 302.48 | 302.07 | 46 | 13914.08 | -18.86 | -0.14% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 62.38 | ↑299.22 | 0.9414 | 1.19 | **LOSS** |
| 569 | NET | 10-28 14:05 | 10-28 14:55 | 90 | 89.67 | 155 | 13950 | -51.15 | -0.37% | 0.53R | 50m | market | early-reversal | trend | trend | neutral | 75.35 | ↓89.59 | 0.1667 | 1.69 | **LOSS** |
| 570 | AMD | 10-28 14:10 | 10-28 15:00 | 159.42 | 158.98 | 87 | 13869.54 | -38.28 | -0.28% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 72.79 | ↑158.2 | 0.6226 | 1.16 | **LOSS** |
| 571 | ARM | 10-28 14:10 | 10-28 15:45 | 146.94 | 151.58 | 95 | 13959.3 | +440.8 | +3.16% | 3.4R | 95m | market | profit-target | trend | trend | neutral | 76.34 | ↑145.93 | 0.5947 | 1.17 | **WIN** |
| 572 | CRM | 10-29 14:05 | 10-29 15:50 | 297.08 | 297.35 | 47 | 13962.76 | +12.69 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | neutral | 76.68 | ↑295.35 | 0.5754 | 2.07 | **WIN** |
| 573 | UBER | 10-29 14:10 | 10-29 15:30 | 78.73 | 79.38 | 88 | 13935.21 | +57.2 | +0.83% | 1.04R | 80m | market | trim-profit-target | trend | trend | neutral | 75.58 | ↑78.27 | 0.1865 | 1.41 | **WIN** |
| 574 | UBER | 10-29 14:10 | 10-29 15:55 | 78.73 | 79.53 | 89 | 13935.21 | +71.2 | +1.02% | 1.28R | 105m | market | timeout | trend | trend | neutral | 75.58 | ↑78.27 | 0.1865 | 1.41 | **WIN** |
| 575 | AVGO | 10-29 14:20 | 10-29 15:30 | 174.15 | 173.92 | 80 | 13932 | -18.4 | -0.13% | 0.16R | 70m | market | stagnation | trend | trend | neutral | 71.6 | ↑172.64 | 0.3745 | 1.41 | **LOSS** |
| 576 | ARM | 10-29 14:25 | 10-29 15:35 | 152.32 | 153.65 | 46 | 14013.44 | +61.18 | +0.87% | 0.69R | 70m | market | trim-profit-target | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 577 | ARM | 10-29 14:25 | 10-29 16:10 | 152.32 | 154.66 | 46 | 14013.44 | +107.64 | +1.54% | 1.22R | 105m | market | timeout | trend | trend | neutral | 63.41 | ↑150.36 | 0.4804 | 1.34 | **WIN** |
| 578 | DDOG | 10-29 14:45 | 10-29 15:05 | 128.55 | 127.99 | 108 | 13883.4 | -60.48 | -0.44% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 77.12 | ↑127.67 | 0.6143 | 1.39 | **LOSS** |
| 579 | SNOW | 10-30 14:00 | 10-30 14:45 | 120.67 | 120.2 | 116 | 13997.72 | -54.52 | -0.39% | 0.43R | 45m | market | early-reversal | breakout | breakout | neutral | 77.97 | ↑119.28 | 0.3544 | 1.1 | **LOSS** |
| 580 | MDB | 10-30 14:00 | 10-30 15:45 | 281.8 | 284.46 | 49 | 13808.2 | +130.34 | +0.94% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 73.24 | ↑279.53 | 1.2213 | 3.19 | **WIN** |
| 581 | ADBE | 10-30 14:10 | 10-30 15:20 | 488.7 | 488.37 | 28 | 13683.6 | -9.24 | -0.07% | 0.1R | 70m | market | stagnation | trend | trend | neutral | 72.48 | ↓486.44 | 0.7837 | 1.13 | **LOSS** |
| 582 | BAC | 10-30 14:10 | 10-30 14:30 | 42.91 | 42.62 | 326 | 13988.66 | -94.54 | -0.68% | 0.62R | 20m | market | early-reversal | trend | trend | neutral | 60.86 | ↑42.51 | 0.0687 | 1.11 | **LOSS** |
| 583 | TSLA | 10-30 14:20 | 10-30 15:35 | 261.28 | 261.09 | 29 | 7577.12 | -5.51 | -0.07% | 0.05R | 75m | market | stagnation | trend | trend | noisyHighBeta | 57.73 | ↑258.52 | 0.1485 | 1.64 | **LOSS** |
| 584 | NVO | 10-30 14:55 | 10-30 16:40 | 111.87 | 112.09 | 125 | 13983.75 | +27.5 | +0.2% | 0.16R | 105m | market | timeout | breakout | breakout | neutral | 82.6 | ↑109.08 | -0.1995 | 1.2 | **WIN** |
| 585 | TXN | 11-01 14:00 | 11-01 14:50 | 205.35 | 204.81 | 68 | 13963.8 | -36.72 | -0.26% | 0.37R | 50m | market | stagnation | trend | trend | neutral | 73.86 | ↓204.46 | 0.7318 | 1.52 | **LOSS** |
| 586 | CAT | 11-01 14:05 | 11-01 14:45 | 381.97 | 379.91 | 36 | 13750.92 | -74.16 | -0.54% | 0.77R | 40m | market | early-reversal | trend | trend | neutral | 73.92 | ↓379.61 | 0.6298 | 1.52 | **LOSS** |
| 587 | SBUX | 11-01 14:05 | 11-01 15:35 | 99.05 | 99 | 141 | 13966.05 | -7.05 | -0.05% | 0.06R | 90m | market | breakeven-stop | trend | trend | neutral | 73.67 | ↑98.54 | 0.3233 | 1.12 | **LOSS** |
| 588 | PLTR | 11-01 14:10 | 11-01 15:20 | 42.36 | 42.32 | 331 | 14021.16 | -13.24 | -0.09% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 68.25 | ↑41.98 | 0.1825 | 1.23 | **LOSS** |
| 589 | NVDA | 11-01 14:15 | 11-01 14:40 | 137.15 | 136.36 | 101 | 13852.15 | -79.79 | -0.58% | 0.35R | 25m | market | early-reversal | trend | trend | neutral | 67.42 | ↑135.87 | 0.9392 | 1.76 | **LOSS** |
| 590 | JPM | 11-01 14:15 | 11-01 15:50 | 225.09 | 224.82 | 62 | 13955.58 | -16.74 | -0.12% | 0.17R | 95m | market | stagnation | trend | trend | neutral | 75.13 | ↓224.19 | 0.4859 | 1.18 | **LOSS** |
| 591 | ELF | 11-01 14:15 | 11-01 14:35 | 108.3 | 107.5 | 128 | 13862.4 | -102.4 | -0.74% | 0.91R | 20m | market | early-reversal | breakout | breakout | neutral | 78.88 | ↓107.08 | 0.3979 | 1.36 | **LOSS** |
| 592 | CRM | 11-01 14:25 | 11-01 15:55 | 294.8 | 294.71 | 47 | 13855.6 | -4.23 | -0.03% | 0.04R | 90m | market | breakeven-stop | trend | trend | neutral | 61.63 | ↑293.15 | 0.7853 | 1.76 | **LOSS** |
| 593 | AMAT | 11-01 14:30 | 11-01 14:50 | 184.43 | 183.35 | 76 | 14016.68 | -82.08 | -0.59% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 76.3 | ↓183.42 | 0.9461 | 1.03 | **LOSS** |
| 594 | MU | 11-04 14:40 | 11-04 15:00 | 102.13 | 101.55 | 136 | 13889.68 | -78.88 | -0.57% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 82.67 | ↓101.7 | 0.4182 | 1.7 | **LOSS** |
| 595 | MRVL | 11-04 15:15 | 11-04 16:40 | 85.24 | 85.09 | 163 | 13894.12 | -24.45 | -0.18% | 0.11R | 85m | market | breakeven-stop | trend | trend | neutral | 55.33 | ↑84.3 | 0.2356 | 1.01 | **LOSS** |
| 596 | ABNB | 11-05 14:30 | 11-05 16:15 | 138.49 | 140.18 | 100 | 13849 | +169 | +1.22% | 1.74R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑138.03 | 0.1618 | 2.3 | **WIN** |
| 597 | DELL | 11-05 14:30 | 11-05 14:40 | 132.47 | 131.08 | 97 | 12849.59 | -134.83 | -1.05% | 1.35R | 10m | market | stop-loss | breakout | breakout | neutral | 60.82 | ↓131.99 | -0.249 | 3.1 | **LOSS** |
| 598 | PYPL | 11-05 15:00 | 11-05 16:00 | 79.01 | 78.95 | 176 | 13905.76 | -10.56 | -0.08% | 0.09R | 60m | market | stagnation | trend | trend | neutral | 72.62 | ↑78.67 | 0.2414 | 1.35 | **LOSS** |
| 599 | KLAC | 11-05 15:00 | 11-05 15:20 | 677.44 | 675.11 | 20 | 13548.8 | -46.6 | -0.34% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 75.14 | ↑674.4 | 2.3347 | 1.55 | **LOSS** |
| 600 | UBER | 11-05 15:20 | 11-05 15:50 | 74.02 | 73.77 | 188 | 13915.76 | -47 | -0.34% | 0.35R | 30m | market | early-reversal | trend | trend | neutral | 69.57 | ↑73.67 | 0.0858 | 1.03 | **LOSS** |
| 601 | MSFT | 11-06 14:35 | 11-06 15:50 | 416.54 | 416.31 | 33 | 13745.82 | -7.59 | -0.06% | 0.09R | 75m | market | breakeven-stop | breakout | breakout | neutral | 78.89 | ↓414.65 | 0.4784 | 4.42 | **LOSS** |
| 602 | XOM | 11-06 14:40 | 11-06 16:25 | 119.97 | 120.58 | 116 | 13916.52 | +70.76 | +0.51% | 0.48R | 105m | market | timeout | breakout | breakout | neutral | 61.13 | ↓120.02 | 0.3836 | 2.65 | **WIN** |
| 603 | IBM | 11-06 15:00 | 11-06 15:40 | 213.12 | 211.9 | 65 | 13852.8 | -79.3 | -0.57% | 0.47R | 40m | market | early-reversal | trend | trend | neutral | 75.44 | ↓212.5 | 1.3461 | 1.02 | **LOSS** |
| 604 | AMZN | 11-06 15:05 | 11-06 16:50 | 202.4 | 205.38 | 68 | 13763.2 | +202.64 | +1.47% | 1.56R | 105m | market | timeout | trend | trend | neutral | 79.03 | ↑200.63 | 0.6038 | 1.36 | **WIN** |
| 605 | LMT | 11-06 15:05 | 11-06 15:40 | 551.27 | 548.75 | 25 | 13781.75 | -63 | -0.46% | 0.36R | 35m | market | early-reversal | trend | trend | neutral | 60.15 | ↓549.01 | 1.1597 | 1.31 | **LOSS** |
| 606 | DIS | 11-06 15:05 | 11-06 15:30 | 99.05 | 98.49 | 141 | 13966.05 | -78.96 | -0.57% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 79.83 | ↓98.93 | 0.6426 | 1.01 | **LOSS** |
| 607 | WMT | 11-06 15:20 | 11-06 15:40 | 84.35 | 83.95 | 165 | 13917.75 | -66 | -0.47% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.63 | ↓84.22 | 0.1758 | 1.02 | **LOSS** |
| 608 | AMZN | 11-07 14:30 | 11-07 16:15 | 208.56 | 210.72 | 67 | 13973.52 | +144.72 | +1.04% | 1.41R | 105m | market | timeout | breakout | breakout | neutral | 76.63 | ↑208.07 | 0.4212 | 1.57 | **WIN** |
| 609 | CRM | 11-07 14:35 | 11-07 14:55 | 310.88 | 309.75 | 45 | 13989.6 | -50.85 | -0.36% | 0.51R | 20m | market | early-reversal | breakout | breakout | neutral | 87.13 | ↑308.96 | 0.4379 | 1.39 | **LOSS** |
| 610 | MDB | 11-07 14:40 | 11-07 16:25 | 287.23 | 289.11 | 48 | 13787.04 | +90.24 | +0.65% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 71.99 | ↑285.44 | 0.3515 | 1.13 | **WIN** |
| 611 | AMD | 11-07 14:55 | 11-07 16:00 | 148.48 | 148.37 | 93 | 13808.64 | -10.23 | -0.07% | 0.08R | 65m | market | stagnation | trend | trend | neutral | 79.87 | ↑147.55 | 0.9161 | 1.52 | **LOSS** |
| 612 | TSM | 11-07 14:55 | 11-07 16:40 | 200.02 | 200.99 | 69 | 13801.38 | +66.93 | +0.48% | 0.38R | 105m | market | timeout | trend | trend | neutral | 78.58 | ↑198.58 | 1.5655 | 1.02 | **WIN** |
| 613 | LRCX | 11-07 14:55 | 11-07 15:15 | 78.28 | 77.81 | 179 | 14012.12 | -84.13 | -0.6% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 63.43 | ↓77.82 | 0.2736 | 1.37 | **LOSS** |
| 614 | LOW | 11-07 14:55 | 11-07 15:15 | 266.03 | 264.96 | 52 | 13833.56 | -55.64 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 77.62 | ↓265.05 | 1.496 | 1.01 | **LOSS** |
| 615 | NET | 11-07 15:05 | 11-07 15:40 | 95.12 | 94.67 | 147 | 13982.64 | -66.15 | -0.47% | 0.31R | 35m | market | early-reversal | trend | trend | neutral | 78.84 | ↓94.85 | 0.8115 | 1.51 | **LOSS** |
| 616 | PANW | 11-08 14:30 | 11-08 14:40 | 389.89 | 386.21 | 35 | 13646.15 | -128.8 | -0.94% | 1.34R | 10m | market | stop-loss | trend | trend | neutral | 75.43 | ↓389.45 | 0.8567 | 2.37 | **LOSS** |
| 617 | HD | 11-08 14:30 | 11-08 15:00 | 404.25 | 402.65 | 34 | 13744.5 | -54.4 | -0.4% | 0.57R | 30m | market | early-reversal | breakout | breakout | neutral | 80.16 | ↓403.69 | 0.9584 | 1.59 | **LOSS** |
| 618 | LLY | 11-08 14:35 | 11-08 16:20 | 808.76 | 825.54 | 17 | 13748.92 | +285.26 | +2.07% | 2.96R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑805.67 | 2.712 | 1.12 | **WIN** |
| 619 | UNH | 11-08 14:40 | 11-08 15:00 | 615.99 | 612.35 | 22 | 13551.78 | -80.08 | -0.59% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 80.29 | ↓613.58 | 2.1822 | 1.4 | **LOSS** |
| 620 | INTU | 11-08 14:45 | 11-08 15:35 | 678.66 | 677.43 | 20 | 13573.2 | -24.6 | -0.18% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 76.37 | ↓676.25 | 2.2635 | 1.48 | **LOSS** |
| 621 | SHOP | 11-08 15:00 | 11-08 15:20 | 86.3 | 85.76 | 162 | 13980.6 | -87.48 | -0.63% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 64.18 | ↓85.89 | 0.1902 | 1.1 | **LOSS** |
| 622 | CRM | 11-08 15:20 | 11-08 17:05 | 314.23 | 317.17 | 44 | 13826.12 | +129.36 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | 79.2 | ↑312.29 | 0.6599 | 1.24 | **WIN** |
| 623 | GS | 11-08 15:25 | 11-08 16:35 | 591.63 | 589.28 | 23 | 13607.49 | -54.05 | -0.4% | 0.48R | 70m | market | early-reversal | trend | trend | neutral | 65.7 | ↓587.39 | 1.4525 | 1.04 | **LOSS** |
| 624 | NFLX | 11-11 14:30 | 11-11 14:40 | 803.43 | 797.39 | 17 | 13658.31 | -102.68 | -0.75% | 1.07R | 10m | market | stop-loss | breakout | breakout | neutral | 79.32 | ↓801.33 | 1.0649 | 1.67 | **LOSS** |
| 625 | JPM | 11-11 14:30 | 11-11 16:05 | 240.89 | 240.65 | 57 | 13730.73 | -13.68 | -0.1% | 0.14R | 95m | market | stagnation | breakout | breakout | neutral | 69.8 | ↓240.58 | 0.0695 | 1.92 | **LOSS** |
| 626 | MCD | 11-11 14:40 | 11-11 15:15 | 302.9 | 301.83 | 46 | 13933.4 | -49.22 | -0.35% | 0.5R | 35m | market | early-reversal | breakout | breakout | neutral | 84.72 | ↓301.21 | 0.2391 | 2.97 | **LOSS** |
| 627 | TGT | 11-11 14:40 | 11-11 16:25 | 152.36 | 153.53 | 91 | 13864.76 | +106.47 | +0.77% | 1.1R | 105m | market | timeout | breakout | breakout | neutral | 79.17 | ↑151.52 | 0.1724 | 1.5 | **WIN** |
| 628 | CRM | 11-11 15:05 | 11-11 16:05 | 334.84 | 340.25 | 21 | 14063.28 | +113.61 | +1.62% | 0.86R | 60m | market | trim-profit-target | trend | trend | neutral | 74.61 | ↑333.23 | 4.5728 | 1.09 | **WIN** |
| 629 | CRM | 11-11 15:05 | 11-11 16:45 | 334.84 | 337.98 | 21 | 14063.28 | +65.94 | +0.94% | 0.5R | 100m | market | trailing-stop | trend | trend | neutral | 74.61 | ↓333.23 | 4.5728 | 1.09 | **WIN** |
| 630 | PLTR | 11-11 15:10 | 11-11 16:30 | 60.69 | 61.6 | 63 | 7707.63 | +57.33 | +1.5% | 0.75R | 80m | market | trim-profit-target | trend | trend | noisyHighBeta | 70.79 | ↑59.84 | 0.6205 | 1.12 | **WIN** |
| 631 | PLTR | 11-11 15:10 | 11-11 16:45 | 60.69 | 61.11 | 64 | 7707.63 | +26.88 | +0.69% | 0.35R | 95m | market | trailing-stop | trend | trend | noisyHighBeta | 70.79 | ↑59.84 | 0.6205 | 1.12 | **WIN** |
| 632 | NOW | 11-11 15:10 | 11-11 15:30 | 1025.16 | 1022.08 | 13 | 13327.08 | -40.04 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 67.51 | ↑1020.48 | 1.7727 | 1.09 | **LOSS** |
| 633 | DDOG | 11-12 14:30 | 11-12 15:05 | 124.01 | 123.36 | 112 | 13889.12 | -72.8 | -0.52% | 0.65R | 35m | market | early-reversal | breakout | breakout | neutral | 83.13 | ↓123.18 | 0.0947 | 1.5 | **LOSS** |
| 634 | TGT | 11-12 14:35 | 11-12 14:45 | 155.39 | 154.05 | 89 | 13829.71 | -119.26 | -0.86% | 1.23R | 10m | market | stop-loss | breakout | breakout | neutral | 79.62 | ↓154.97 | 0.2562 | 1.4 | **LOSS** |
| 635 | NVDA | 11-12 14:50 | 11-12 15:50 | 147.27 | 149.05 | 47 | 13843.38 | +83.66 | +1.21% | 1.01R | 60m | market | trim-profit-target | trend | trend | neutral | 62.04 | ↑147.01 | 0.5791 | 1.27 | **WIN** |
| 636 | NVDA | 11-12 14:50 | 11-12 16:35 | 147.27 | 148.73 | 47 | 13843.38 | +68.62 | +0.99% | 0.83R | 105m | market | timeout | trend | trend | neutral | 62.04 | ↑147.01 | 0.5791 | 1.27 | **WIN** |
| 637 | GOOGL | 11-12 14:55 | 11-12 15:15 | 181.81 | 180.02 | 76 | 13817.56 | -136.04 | -0.98% | 1.4R | 20m | market | stop-loss | trend | trend | neutral | 73.9 | ↓181.05 | 0.3034 | 1.25 | **LOSS** |
| 638 | TSM | 11-14 14:55 | 11-14 15:40 | 191.05 | 190.24 | 73 | 13946.65 | -59.13 | -0.42% | 0.44R | 45m | market | early-reversal | trend | trend | neutral | 76.35 | ↓189.95 | 0.6929 | 2.15 | **LOSS** |
| 639 | AMAT | 11-14 15:05 | 11-14 15:45 | 186.92 | 186.34 | 74 | 13832.08 | -42.92 | -0.31% | 0.26R | 40m | market | early-reversal | trend | trend | neutral | 69.27 | ↓186.33 | 0.919 | 1.15 | **LOSS** |
| 640 | UBER | 11-14 15:25 | 11-14 16:20 | 71.92 | 71.94 | 194 | 13952.48 | +3.88 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | trend | neutral | 68.56 | ↑71.39 | 0.1592 | 1.5 | **WIN** |
| 641 | NKE | 11-15 14:45 | 11-15 15:20 | 76.8 | 76.52 | 167 | 12825.6 | -46.76 | -0.36% | 0.51R | 35m | market | early-reversal | breakout | breakout | neutral | 71.81 | ↑76.34 | 0.0177 | 2.68 | **LOSS** |
| 642 | TSLA | 11-15 15:00 | 11-15 15:20 | 318.57 | 313.9 | 24 | 7645.68 | -112.08 | -1.47% | 0.74R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 53.51 | ↓315.97 | 1.1572 | 2.64 | **LOSS** |
| 643 | DIS | 11-15 15:25 | 11-15 15:50 | 113.5 | 112.81 | 123 | 13960.5 | -84.87 | -0.61% | 0.35R | 25m | market | early-reversal | trend | trend | neutral | 79.19 | ↑112.41 | 1.0751 | 1.38 | **LOSS** |
| 644 | ARM | 11-18 14:30 | 11-18 14:50 | 128.8 | 126.83 | 109 | 14039.2 | -214.73 | -1.53% | 2.19R | 20m | market | stop-loss | trend | trend | neutral | 72.64 | ↓128.63 | 0.3122 | 4.7 | **LOSS** |
| 645 | AMZN | 11-18 14:35 | 11-18 14:55 | 204.06 | 203.16 | 68 | 13876.08 | -61.2 | -0.44% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 75.87 | ↓203.7 | 0.6013 | 1.2 | **LOSS** |
| 646 | MCD | 11-18 14:35 | 11-18 15:10 | 295 | 293.2 | 47 | 13865 | -84.6 | -0.61% | 0.87R | 35m | market | early-reversal | trend | trend | neutral | 75 | ↓294.53 | 0.6535 | 6.71 | **LOSS** |
| 647 | CRWD | 11-18 14:45 | 11-18 16:35 | 339.42 | 346.23 | 41 | 13916.22 | +279.21 | +2.01% | 2.68R | 110m | market | timeout | trend | trend | neutral | 71.03 | ↑338.74 | 1.1731 | 2.05 | **WIN** |
| 648 | AMD | 11-18 15:00 | 11-18 15:50 | 139.91 | 139.55 | 99 | 13851.09 | -35.64 | -0.26% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 77.71 | ↑139.02 | 1.2972 | 1.51 | **LOSS** |
| 649 | DELL | 11-18 15:00 | 11-18 16:10 | 136.05 | 137.15 | 51 | 13877.1 | +56.1 | +0.81% | 0.55R | 70m | market | trim-profit-target | trend | trend | neutral | 74.24 | ↑135.59 | 1.1761 | 2.47 | **WIN** |
| 650 | DELL | 11-18 15:00 | 11-18 16:45 | 136.05 | 137.63 | 51 | 13877.1 | +80.58 | +1.16% | 0.79R | 105m | market | timeout | trend | trend | neutral | 74.24 | ↑135.59 | 1.1761 | 2.47 | **WIN** |
| 651 | LMT | 11-19 14:35 | 11-19 14:55 | 538.24 | 534.75 | 23 | 12379.52 | -80.27 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | neutral | 77.4 | ↓536.59 | 0.7228 | 3.78 | **LOSS** |
| 652 | ARM | 11-19 14:40 | 11-19 15:00 | 130.11 | 128.85 | 99 | 12880.89 | -124.74 | -0.97% | 1.21R | 20m | market | early-reversal | breakout | breakout | neutral | 76.31 | ↓129.43 | 0.3519 | 2.87 | **LOSS** |
| 653 | NET | 11-19 14:45 | 11-19 15:05 | 93.95 | 93.21 | 137 | 12871.15 | -101.38 | -0.79% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 71.26 | ↓93.37 | 0.3796 | 1.43 | **LOSS** |
| 654 | ARM | 11-19 15:25 | 11-19 15:45 | 131.36 | 130.84 | 107 | 14055.52 | -55.64 | -0.4% | 0.34R | 20m | market | early-reversal | breakout | trend | neutral | 70.69 | ↑129.7 | 0.6939 | 1.08 | **LOSS** |
| 655 | ABNB | 11-20 14:30 | 11-20 16:15 | 133.07 | 134.66 | 105 | 13972.35 | +166.95 | +1.19% | 1.7R | 105m | market | timeout | breakout | breakout | neutral | 85.61 | ↑132.38 | 0.0645 | 1.41 | **WIN** |
| 656 | UNH | 11-20 14:35 | 11-20 16:20 | 587.88 | 591.9 | 23 | 13521.24 | +92.46 | +0.68% | 0.97R | 105m | market | timeout | breakout | breakout | neutral | 80.87 | ↑584.44 | 0.3028 | 1.82 | **WIN** |
| 657 | QCOM | 11-21 14:30 | 11-21 14:55 | 156.08 | 154.92 | 82 | 12798.56 | -95.12 | -0.74% | 0.61R | 25m | market | early-reversal | breakout | breakout | neutral | 65.66 | ↓155.83 | 0.1445 | 4.24 | **LOSS** |
| 658 | CRM | 11-21 14:45 | 11-21 16:05 | 331.2 | 339.3 | 42 | 13910.4 | +340.2 | +2.45% | 2.55R | 80m | market | profit-target | breakout | breakout | neutral | 80.54 | ↑331.02 | 1.7809 | 1.19 | **WIN** |
| 659 | ORCL | 11-21 14:45 | 11-21 16:30 | 192.67 | 194.75 | 72 | 13872.24 | +149.76 | +1.08% | 1.37R | 105m | market | timeout | breakout | breakout | neutral | 72.83 | ↑192.81 | 0.9469 | 1.37 | **WIN** |
| 660 | MRVL | 11-21 14:45 | 11-21 15:05 | 91.47 | 90.76 | 152 | 13903.44 | -107.92 | -0.78% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 77.13 | ↓91.22 | 0.6672 | 1.24 | **LOSS** |
| 661 | GE | 11-21 15:05 | 11-21 16:50 | 179.98 | 180.12 | 77 | 13858.46 | +10.78 | +0.08% | 0.11R | 105m | market | timeout | trend | trend | neutral | 75.08 | ↑178.85 | 0.616 | 1.83 | **WIN** |
| 662 | NFLX | 11-21 15:15 | 11-21 15:35 | 893.77 | 885.86 | 15 | 13406.55 | -118.65 | -0.89% | 1.27R | 20m | market | early-reversal | breakout | breakout | neutral | 74.83 | ↓885.58 | 2.9064 | 1.89 | **LOSS** |
| 663 | LLY | 11-22 14:30 | 11-22 14:50 | 759.77 | 752.63 | 16 | 12156.32 | -114.24 | -0.94% | 1.34R | 20m | market | early-reversal | trend | breakout | neutral | 71.31 | ↓758.83 | 0.6632 | 3.86 | **LOSS** |
| 664 | NVO | 11-22 14:30 | 11-22 14:50 | 104.22 | 103.86 | 134 | 13965.48 | -48.24 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 68.85 | ↓104.1 | 0.0115 | 1.2 | **LOSS** |
| 665 | TGT | 11-22 14:30 | 11-22 16:15 | 123.06 | 124.82 | 113 | 13905.78 | +198.88 | +1.43% | 1.86R | 105m | market | timeout | breakout | breakout | neutral | 82.75 | ↑122.52 | 0.0777 | 2.23 | **WIN** |
| 666 | CELH | 11-22 14:30 | 11-22 15:20 | 29.38 | 29.33 | 261 | 7668.18 | -13.05 | -0.17% | 0.16R | 50m | market | stagnation | breakout | trend | noisyHighBeta | 69.81 | ↓29.25 | 0.1029 | 1.1 | **LOSS** |
| 667 | HD | 11-22 14:35 | 11-22 16:20 | 414.84 | 416.47 | 33 | 13689.72 | +53.79 | +0.39% | 0.56R | 105m | market | timeout | trend | trend | neutral | 75.51 | ↑412.62 | 0.9209 | 1.63 | **WIN** |
| 668 | ABNB | 11-22 14:45 | 11-22 16:30 | 137.52 | 138.14 | 101 | 13889.52 | +62.62 | +0.45% | 0.46R | 105m | market | trailing-stop | breakout | breakout | neutral | 81.66 | ↓135.72 | 0.5785 | 1.38 | **WIN** |
| 669 | BA | 11-22 14:45 | 11-22 16:30 | 146.06 | 147.02 | 95 | 13875.7 | +91.2 | +0.66% | 0.89R | 105m | market | timeout | breakout | breakout | neutral | 82.61 | ↑144.74 | 0.3908 | 1.92 | **WIN** |
| 670 | MDB | 11-22 14:50 | 11-22 15:00 | 334.31 | 326.73 | 41 | 13706.71 | -310.78 | -2.27% | 1.14R | 10m | market | stop-loss | breakout | breakout | neutral | 79.78 | ↓331.36 | 3.2237 | 1.13 | **LOSS** |
| 671 | META | 11-25 14:30 | 11-25 15:15 | 565.52 | 565.69 | 24 | 13572.48 | +4.08 | +0.03% | 0.04R | 45m | market | breakeven-stop | breakout | breakout | neutral | 81.29 | ↓563.94 | 0.376 | 2.28 | **WIN** |
| 672 | AAPL | 11-25 14:30 | 11-25 15:15 | 232.47 | 231.56 | 60 | 13948.2 | -54.6 | -0.39% | 0.56R | 45m | market | early-reversal | breakout | breakout | neutral | 80.71 | ↓232.14 | 0.1145 | 2.11 | **LOSS** |
| 673 | ABNB | 11-25 14:30 | 11-25 15:00 | 139 | 138.78 | 100 | 13900 | -22 | -0.16% | 0.23R | 30m | market | breakeven-stop | breakout | breakout | neutral | 65.17 | ↓138.62 | -0.1729 | 1.54 | **LOSS** |
| 674 | GE | 11-25 14:30 | 11-25 14:50 | 183.37 | 182.18 | 76 | 13936.12 | -90.44 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | neutral | 88.93 | ↓182.77 | 0.2156 | 2.09 | **LOSS** |
| 675 | TSLA | 11-25 14:35 | 11-25 14:50 | 359.76 | 349.96 | 38 | 13670.88 | -372.4 | -2.72% | 2.18R | 15m | market | stop-loss | breakout | breakout | neutral | 70.69 | ↓359.14 | 0.7185 | 1.56 | **LOSS** |
| 676 | AVGO | 11-25 14:40 | 11-25 14:50 | 166.79 | 164.94 | 83 | 13843.57 | -153.55 | -1.11% | 1.59R | 10m | market | stop-loss | breakout | breakout | neutral | 84.11 | ↓166.01 | 0.4215 | 1.84 | **LOSS** |
| 677 | INTU | 11-25 14:40 | 11-25 15:15 | 650.74 | 648.34 | 21 | 13665.54 | -50.4 | -0.37% | 0.51R | 35m | market | early-reversal | breakout | breakout | neutral | 68.73 | ↓645.44 | -0.009 | 1.17 | **LOSS** |
| 678 | AMZN | 11-26 14:30 | 11-26 16:15 | 203.95 | 206.12 | 68 | 13868.6 | +147.56 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | neutral | 78.41 | ↑203.19 | 0.2945 | 4.11 | **WIN** |
| 679 | ORCL | 11-26 14:35 | 11-26 14:55 | 192.15 | 190.18 | 72 | 13834.8 | -141.84 | -1.03% | 1.45R | 20m | market | stop-loss | breakout | breakout | neutral | 70.78 | ↓191.26 | 0.0306 | 2.39 | **LOSS** |
| 680 | TGT | 11-27 14:30 | 11-27 14:50 | 128.45 | 127.65 | 108 | 13872.6 | -86.4 | -0.62% | 0.89R | 20m | market | early-reversal | trend | breakout | neutral | 62.64 | ↓128.19 | -0.0787 | 3.05 | **LOSS** |
| 681 | SQ | 11-27 14:35 | 11-27 14:50 | 90.47 | 89.46 | 154 | 13932.38 | -155.54 | -1.12% | 1.56R | 15m | market | stop-loss | breakout | breakout | neutral | 73.08 | ↓90.1 | -0.0672 | 2.95 | **LOSS** |
| 682 | PLTR | 11-27 15:00 | 11-27 15:20 | 66.95 | 66.16 | 209 | 13992.55 | -165.11 | -1.18% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 71.94 | ↓66.68 | 0.4719 | 1.18 | **LOSS** |
| 683 | NKE | 11-27 15:15 | 11-27 16:20 | 78.73 | 78.65 | 177 | 13935.21 | -14.16 | -0.1% | 0.13R | 65m | market | stagnation | trend | trend | neutral | 73.67 | ↓78.66 | 0.1947 | 1.13 | **LOSS** |
| 684 | ASML | 11-29 14:45 | 11-29 16:30 | 682.52 | 695.38 | 20 | 13650.4 | +257.2 | +1.88% | 2.69R | 105m | market | timeout | breakout | breakout | neutral | 78.89 | ↑681.56 | 4.4344 | 1.68 | **WIN** |
| 685 | ARM | 11-29 14:55 | 11-29 16:30 | 135.89 | 135.6 | 103 | 13996.67 | -29.87 | -0.21% | 0.23R | 95m | market | breakeven-stop | trend | trend | neutral | 79.17 | ↓134.82 | 0.7415 | 1.92 | **LOSS** |
| 686 | MDB | 11-29 14:55 | 11-29 15:20 | 328.37 | 326.67 | 42 | 13791.54 | -71.4 | -0.52% | 0.63R | 25m | market | early-reversal | breakout | breakout | neutral | 72.9 | ↓326.97 | 1.2641 | 1.19 | **LOSS** |
| 687 | NET | 11-29 15:05 | 11-29 15:25 | 101.05 | 100.35 | 138 | 13944.9 | -96.6 | -0.69% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 76.57 | ↓100.3 | 0.3058 | 1.03 | **LOSS** |
| 688 | BA | 11-29 15:15 | 11-29 16:10 | 155.33 | 156.48 | 42 | 13203.05 | +48.3 | +0.74% | 0.89R | 55m | market | trim-profit-target | trend | trend | neutral | 78.11 | ↑154.87 | 0.8356 | 1.35 | **WIN** |
| 689 | BA | 11-29 15:15 | 11-29 16:55 | 155.33 | 155.23 | 43 | 13203.05 | -4.3 | -0.06% | 0.07R | 100m | market | breakeven-stop | trend | trend | neutral | 78.11 | ↓154.87 | 0.8356 | 1.35 | **LOSS** |
| 690 | ELF | 11-29 15:15 | 11-29 15:35 | 130.34 | 129.17 | 58 | 7559.72 | -67.86 | -0.9% | 0.73R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 66.02 | ↓129.49 | 0.3864 | 2.18 | **LOSS** |
| 691 | AMAT | 12-02 14:30 | 12-02 16:15 | 177.41 | 182.05 | 78 | 13837.98 | +361.92 | +2.62% | 3.4R | 105m | market | timeout | trend | breakout | neutral | 57.32 | ↑176.51 | -0.5433 | 2.65 | **WIN** |
| 692 | CELH | 12-02 14:30 | 12-02 14:35 | 29.15 | 28.5 | 445 | 12971.75 | -289.25 | -2.23% | 1.7R | 5m | market | stop-loss | breakout | breakout | neutral | 65.02 | ↓29.17 | -0.0131 | 2.29 | **LOSS** |
| 693 | AMD | 12-02 14:35 | 12-02 15:40 | 140.23 | 139.98 | 99 | 13882.77 | -24.75 | -0.18% | 0.2R | 65m | market | stagnation | breakout | breakout | neutral | 76.58 | ↓139.54 | 0.195 | 2.31 | **LOSS** |
| 694 | NVO | 12-02 14:40 | 12-02 15:30 | 108.71 | 108.57 | 128 | 13914.88 | -17.92 | -0.13% | 0.19R | 50m | market | stagnation | breakout | breakout | neutral | 80.28 | ↑108.59 | 0.3571 | 1.12 | **LOSS** |
| 695 | MU | 12-02 14:45 | 12-02 15:15 | 99.37 | 98.65 | 139 | 13812.43 | -100.08 | -0.72% | 0.8R | 30m | market | early-reversal | breakout | breakout | neutral | 83.28 | ↓98.62 | 0.259 | 1.5 | **LOSS** |
| 696 | META | 12-02 14:55 | 12-02 16:40 | 586.24 | 590.72 | 23 | 13483.52 | +103.04 | +0.76% | 0.99R | 105m | market | timeout | trend | trend | neutral | 78.59 | ↑582.9 | 2.2004 | 1.41 | **WIN** |
| 697 | NFLX | 12-02 15:00 | 12-02 15:20 | 901.95 | 897.8 | 15 | 13529.25 | -62.25 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 76.91 | ↑895.94 | 2.1289 | 1.75 | **LOSS** |
| 698 | MRVL | 12-02 15:00 | 12-02 15:20 | 96.86 | 95.45 | 144 | 13947.84 | -203.04 | -1.46% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 78.19 | ↓96.26 | 0.8646 | 1.28 | **LOSS** |
| 699 | GOOGL | 12-02 15:10 | 12-02 15:40 | 171.96 | 171.3 | 81 | 13928.76 | -53.46 | -0.38% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 77.54 | ↑170.65 | 0.7357 | 1.13 | **LOSS** |
| 700 | UBER | 12-02 15:25 | 12-02 15:55 | 72.79 | 72.48 | 191 | 13902.89 | -59.21 | -0.43% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 69.68 | ↑72.34 | 0.1157 | 1.31 | **LOSS** |
| 701 | DDOG | 12-03 14:30 | 12-03 15:55 | 154.29 | 154.34 | 90 | 13886.1 | +4.5 | +0.03% | 0.04R | 85m | market | breakeven-stop | trend | trend | neutral | 75.18 | ↓153.66 | 0.2279 | 1.26 | **WIN** |
| 702 | GS | 12-03 14:30 | 12-03 14:50 | 611.59 | 608.49 | 22 | 13454.98 | -68.2 | -0.51% | 0.73R | 20m | market | early-reversal | trend | breakout | neutral | 68.63 | ↓610.18 | 0.1362 | 2.19 | **LOSS** |
| 703 | NVDA | 12-03 14:35 | 12-03 14:55 | 140.23 | 139.41 | 99 | 13882.77 | -81.18 | -0.58% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 68.55 | ↓139.36 | 0.2025 | 1.24 | **LOSS** |
| 704 | COIN | 12-03 15:15 | 12-03 15:50 | 311.01 | 306.46 | 24 | 7464.24 | -109.2 | -1.46% | 0.73R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 64.1 | ↓309.13 | 1.9285 | 1.55 | **LOSS** |
| 705 | LLY | 12-04 14:35 | 12-04 14:55 | 829.16 | 823.84 | 16 | 13266.56 | -85.12 | -0.64% | 0.86R | 20m | market | early-reversal | breakout | breakout | neutral | 80.08 | ↓825.43 | 2.0812 | 2.08 | **LOSS** |
| 706 | PANW | 12-04 14:40 | 12-04 16:25 | 398.55 | 403.97 | 34 | 13550.7 | +184.28 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | neutral | 81.22 | ↑395.6 | 0.9667 | 1.15 | **WIN** |
| 707 | UNH | 12-04 14:40 | 12-04 15:00 | 619.55 | 612.15 | 22 | 13630.1 | -162.8 | -1.19% | 1.28R | 20m | market | early-reversal | breakout | breakout | neutral | 73.1 | ↓617.93 | 1.8997 | 3.01 | **LOSS** |
| 708 | PYPL | 12-04 14:55 | 12-04 15:15 | 86.14 | 85.22 | 161 | 13868.54 | -148.12 | -1.07% | 1.18R | 20m | market | early-reversal | trend | trend | neutral | 64.14 | ↓86.1 | 0.1846 | 1.44 | **LOSS** |
| 709 | GE | 12-04 15:05 | 12-04 15:25 | 182.04 | 181.28 | 76 | 13835.04 | -57.76 | -0.42% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 61.28 | ↑180.62 | 0.2421 | 2.76 | **LOSS** |
| 710 | TSM | 12-04 15:10 | 12-04 16:45 | 199.98 | 201.48 | 34 | 13798.62 | +51 | +0.75% | 0.88R | 95m | market | trim-profit-target | trend | trend | neutral | 67.48 | ↑199.33 | 0.6336 | 1.09 | **WIN** |
| 711 | TSM | 12-04 15:10 | 12-04 16:55 | 199.98 | 201.38 | 35 | 13798.62 | +49 | +0.7% | 0.82R | 105m | market | timeout | trend | trend | neutral | 67.48 | ↑199.33 | 0.6336 | 1.09 | **WIN** |
| 712 | ASML | 12-05 14:35 | 12-05 14:50 | 729.14 | 721.55 | 19 | 13853.66 | -144.21 | -1.04% | 1.49R | 15m | market | stop-loss | breakout | trend | neutral | 76.67 | ↓728.38 | 1.1999 | 1.47 | **LOSS** |
| 713 | CVX | 12-05 14:55 | 12-05 15:15 | 160.12 | 158.98 | 87 | 13930.44 | -99.18 | -0.71% | 1.01R | 20m | market | early-reversal | trend | trend | neutral | 74.62 | ↓159.73 | 0.3288 | 3.39 | **LOSS** |
| 714 | ABNB | 12-06 14:35 | 12-06 14:55 | 138.6 | 137.92 | 101 | 13998.6 | -68.68 | -0.49% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 72.96 | ↓138.27 | -0.0044 | 1.57 | **LOSS** |
| 715 | DDOG | 12-06 14:35 | 12-06 15:00 | 166.84 | 165.99 | 83 | 13847.72 | -70.55 | -0.51% | 0.69R | 25m | market | early-reversal | breakout | breakout | neutral | 84.85 | ↓166.21 | 0.3208 | 1.2 | **LOSS** |
| 716 | AMZN | 12-06 14:45 | 12-06 16:30 | 223.7 | 224.94 | 62 | 13869.4 | +76.88 | +0.55% | 0.7R | 105m | market | timeout | trend | breakout | neutral | 69.64 | ↑222.25 | 0.41 | 1.17 | **WIN** |
| 717 | TSLA | 12-06 14:45 | 12-06 15:05 | 375.01 | 372.25 | 37 | 13875.37 | -102.12 | -0.74% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 57.54 | ↓374.58 | 0.7332 | 1.52 | **LOSS** |
| 718 | TXN | 12-06 15:10 | 12-06 15:30 | 194.42 | 193.52 | 72 | 13998.24 | -64.8 | -0.46% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 74.69 | ↓193.85 | 0.3488 | 1.09 | **LOSS** |
| 719 | SMCI | 12-06 15:20 | 12-06 15:40 | 43.87 | 43.12 | 163 | 7150.81 | -122.25 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 75.7 | ↑42.69 | 0.5214 | 1.04 | **LOSS** |
| 720 | ORCL | 12-06 15:25 | 12-06 16:45 | 190.9 | 190.98 | 73 | 13935.7 | +5.84 | +0.04% | 0.04R | 80m | market | breakeven-stop | trend | trend | neutral | 79.96 | ↑189.7 | 1.052 | 1.65 | **WIN** |
| 721 | ORCL | 12-09 14:40 | 12-09 15:00 | 195.55 | 192.81 | 71 | 13884.05 | -194.54 | -1.4% | 1.19R | 20m | market | early-reversal | breakout | breakout | neutral | 80.43 | ↓194.53 | 0.4334 | 1.7 | **LOSS** |
| 722 | BA | 12-09 14:40 | 12-09 15:55 | 156.34 | 160.27 | 89 | 13914.26 | +349.77 | +2.51% | 3.26R | 75m | market | profit-target | breakout | breakout | neutral | 71.26 | ↑155.57 | 0.1577 | 1.61 | **WIN** |
| 723 | CVX | 12-09 14:45 | 12-09 16:25 | 157.65 | 158.98 | 44 | 13873.2 | +58.52 | +0.84% | 1.2R | 100m | market | trim-profit-target | breakout | trend | neutral | 74.72 | ↑157.18 | 0.2672 | 1.05 | **WIN** |
| 724 | CVX | 12-09 14:45 | 12-09 16:30 | 157.65 | 158.97 | 44 | 13873.2 | +58.08 | +0.84% | 1.2R | 105m | market | timeout | breakout | trend | neutral | 74.72 | ↑157.18 | 0.2672 | 1.05 | **WIN** |
| 725 | ARM | 12-09 14:50 | 12-09 15:10 | 142.74 | 141.98 | 98 | 13988.52 | -74.48 | -0.53% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 71.23 | ↓142.16 | 0.0943 | 2.89 | **LOSS** |
| 726 | QCOM | 12-09 15:00 | 12-09 16:05 | 161.52 | 161.51 | 86 | 13890.72 | -0.86 | -0.01% | 0.01R | 65m | market | breakeven-stop | breakout | breakout | neutral | 73.22 | ↓160.25 | 0.4569 | 1.63 | **LOSS** |
| 727 | MDB | 12-09 15:05 | 12-09 15:40 | 357.25 | 354.46 | 21 | 7502.25 | -58.59 | -0.78% | 0.39R | 35m | market | early-reversal | breakout | trend | noisyHighBeta | 69.16 | ↓356.24 | 3.363 | 1.18 | **LOSS** |
| 728 | ELF | 12-09 15:20 | 12-09 15:45 | 145.97 | 145.02 | 52 | 7590.44 | -49.4 | -0.65% | 0.33R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 75.42 | ↓145.56 | 2.1277 | 1.16 | **LOSS** |
| 729 | BA | 12-10 14:30 | 12-10 15:35 | 160.77 | 164.67 | 81 | 13022.37 | +315.9 | +2.43% | 2.51R | 65m | market | profit-target | breakout | breakout | neutral | 67.28 | ↑160.51 | -0.3697 | 3.91 | **WIN** |
| 730 | INTU | 12-10 15:00 | 12-10 15:25 | 658.3 | 655.9 | 21 | 13824.3 | -50.4 | -0.36% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 73.09 | ↑652.59 | 1.5377 | 2.53 | **LOSS** |
| 731 | ABNB | 12-10 15:25 | 12-10 15:45 | 138.73 | 138.3 | 100 | 13873 | -43 | -0.31% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 74 | ↑138.16 | 0.376 | 1.16 | **LOSS** |
| 732 | CRWD | 12-11 14:30 | 12-11 16:15 | 351.18 | 355.64 | 39 | 13696.02 | +173.94 | +1.27% | 1.81R | 105m | market | timeout | trend | breakout | neutral | 63.27 | ↑350.29 | -0.741 | 1.71 | **WIN** |
| 733 | BA | 12-11 14:30 | 12-11 15:20 | 168.15 | 167.7 | 77 | 12947.55 | -34.65 | -0.27% | 0.24R | 50m | market | stagnation | breakout | breakout | neutral | 63.18 | ↓167.31 | 0.1878 | 1.65 | **LOSS** |
| 734 | LRCX | 12-11 14:40 | 12-11 15:50 | 76.18 | 76.15 | 184 | 14017.12 | -5.52 | -0.04% | 0.04R | 70m | market | trailing-stop | breakout | breakout | neutral | 67.96 | ↓75.96 | 0.1632 | 1.44 | **LOSS** |
| 735 | KLAC | 12-11 14:40 | 12-11 15:40 | 650.04 | 648.25 | 21 | 13650.84 | -37.59 | -0.28% | 0.4R | 60m | market | breakeven-stop | breakout | breakout | neutral | 67.69 | ↓648.9 | 0.6668 | 1.23 | **LOSS** |
| 736 | CRM | 12-11 14:45 | 12-11 16:30 | 355.86 | 356.3 | 39 | 13878.54 | +17.16 | +0.12% | 0.15R | 105m | market | timeout | breakout | breakout | neutral | 82.71 | ↓354.55 | 0.9523 | 2.19 | **WIN** |
| 737 | TSM | 12-11 14:45 | 12-11 15:35 | 194.78 | 193.86 | 71 | 13829.38 | -65.32 | -0.47% | 0.64R | 50m | market | early-reversal | breakout | breakout | neutral | 81.02 | ↓194.24 | 0.522 | 1.35 | **LOSS** |
| 738 | SHOP | 12-11 14:45 | 12-11 15:35 | 114.99 | 114.49 | 121 | 13913.79 | -60.5 | -0.43% | 0.47R | 50m | market | early-reversal | breakout | breakout | neutral | 72.01 | ↓114.8 | 0.1382 | 1.94 | **LOSS** |
| 739 | NET | 12-11 14:45 | 12-11 15:05 | 113.58 | 112.94 | 122 | 13856.76 | -78.08 | -0.56% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 84.12 | ↑112.94 | 0.5047 | 1.56 | **LOSS** |
| 740 | ASML | 12-11 14:55 | 12-11 15:45 | 714.46 | 708.6 | 19 | 13574.74 | -111.34 | -0.82% | 1.17R | 50m | market | stop-loss | breakout | trend | neutral | 70.96 | ↓713.6 | 1.6683 | 1.44 | **LOSS** |
| 741 | CRM | 12-13 14:35 | 12-13 14:50 | 362.96 | 359.19 | 39 | 14155.44 | -147.03 | -1.04% | 1.49R | 15m | market | stop-loss | breakout | breakout | neutral | 81.08 | ↓362.28 | 0.4023 | 1.14 | **LOSS** |
| 742 | ASML | 12-13 14:40 | 12-13 15:25 | 722.43 | 720.03 | 19 | 13726.17 | -45.6 | -0.33% | 0.47R | 45m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↓720.44 | 0.4174 | 2.75 | **LOSS** |
| 743 | COST | 12-13 14:45 | 12-13 15:20 | 1005.53 | 997.44 | 13 | 13071.89 | -105.17 | -0.8% | 0.74R | 35m | market | early-reversal | breakout | breakout | neutral | 64.21 | ↑987.14 | -0.6708 | 1.44 | **LOSS** |
| 744 | LRCX | 12-13 14:45 | 12-13 15:05 | 77.19 | 76.4 | 181 | 13971.39 | -142.99 | -1.02% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 70.34 | ↓76.43 | 0.1901 | 1.38 | **LOSS** |
| 745 | PLTR | 12-13 15:10 | 12-13 15:30 | 74.71 | 73.95 | 103 | 7695.13 | -78.28 | -1.02% | 0.51R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 65.71 | ↓74.35 | 0.5 | 1.06 | **LOSS** |
| 746 | TSM | 12-16 14:45 | 12-16 15:10 | 204.95 | 202.38 | 68 | 13936.6 | -174.76 | -1.25% | 1.19R | 25m | market | early-reversal | breakout | breakout | neutral | 74.09 | ↓204.51 | 0.9766 | 1.48 | **LOSS** |
| 747 | CRWD | 12-16 15:00 | 12-16 15:20 | 374.71 | 371.99 | 37 | 13864.27 | -100.64 | -0.73% | 0.59R | 20m | market | early-reversal | breakout | trend | neutral | 67.47 | ↑370.75 | 1.8003 | 1.22 | **LOSS** |
| 748 | AMAT | 12-16 15:00 | 12-16 15:20 | 171.67 | 170.45 | 81 | 13905.27 | -98.82 | -0.71% | 0.95R | 20m | market | early-reversal | trend | trend | neutral | 77.9 | ↓170.37 | 0.4189 | 1.14 | **LOSS** |
| 749 | MRVL | 12-16 15:00 | 12-16 15:20 | 123.43 | 122.23 | 112 | 13824.16 | -134.4 | -0.97% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 64.38 | ↑121.24 | 0.6134 | 1.24 | **LOSS** |
| 750 | ADBE | 12-16 15:10 | 12-16 15:40 | 470.35 | 466.64 | 29 | 13640.15 | -107.59 | -0.79% | 0.65R | 30m | market | early-reversal | trend | trend | neutral | 76.19 | ↓466.55 | 2.4931 | 1.45 | **LOSS** |
| 751 | GOOGL | 12-16 15:20 | 12-16 15:55 | 194.54 | 196.57 | 35 | 13812.34 | +71.05 | +1.04% | 0.7R | 35m | market | trim-profit-target | trend | trend | neutral | 68.03 | ↑194.11 | 0.8212 | 1.03 | **WIN** |
| 752 | GOOGL | 12-16 15:20 | 12-16 17:05 | 194.54 | 197.01 | 36 | 13812.34 | +88.92 | +1.27% | 0.85R | 105m | market | timeout | trend | trend | neutral | 68.03 | ↑194.11 | 0.8212 | 1.03 | **WIN** |
| 753 | INTC | 12-16 15:20 | 12-16 16:10 | 20.52 | 20.41 | 679 | 13933.08 | -74.69 | -0.54% | 0.38R | 50m | market | early-reversal | trend | trend | neutral | 59.83 | ↓20.31 | 0.0198 | 1.01 | **LOSS** |
| 754 | BA | 12-17 14:40 | 12-17 15:10 | 175.7 | 174.38 | 73 | 12826.1 | -96.36 | -0.75% | 0.97R | 30m | market | early-reversal | breakout | breakout | neutral | 74.31 | ↓174.67 | 0.0763 | 1.8 | **LOSS** |
| 755 | NKE | 12-17 15:15 | 12-17 15:35 | 78.56 | 78.08 | 178 | 13983.68 | -85.44 | -0.61% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 77.24 | ↑77.91 | 0.2049 | 1.28 | **LOSS** |
| 756 | MU | 12-18 14:35 | 12-18 14:55 | 111.43 | 109.9 | 124 | 13817.32 | -189.72 | -1.37% | 1.26R | 20m | market | early-reversal | breakout | breakout | neutral | 84.28 | ↓110.34 | 0.3394 | 1.88 | **LOSS** |
| 757 | TXN | 12-18 14:35 | 12-18 15:00 | 190.61 | 190 | 73 | 13914.53 | -44.53 | -0.32% | 0.46R | 25m | market | early-reversal | breakout | breakout | neutral | 87.07 | ↑189.29 | 0.1993 | 2.66 | **LOSS** |
| 758 | AMAT | 12-18 14:35 | 12-18 16:20 | 172.38 | 173.58 | 81 | 13962.78 | +97.2 | +0.7% | 1R | 105m | market | timeout | breakout | breakout | neutral | 87.44 | ↑171.33 | 0.3524 | 1.59 | **WIN** |
| 759 | NVDA | 12-18 15:25 | 12-18 16:15 | 135.6 | 135.18 | 102 | 13831.2 | -42.84 | -0.31% | 0.22R | 50m | market | stagnation | trend | trend | neutral | 67.92 | ↓134.74 | 1.4211 | 1.81 | **LOSS** |
| 760 | GS | 12-20 14:35 | 12-20 14:55 | 563.44 | 559.72 | 22 | 12395.68 | -81.84 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 73.51 | ↓559.27 | -0.1415 | 1.99 | **LOSS** |
| 761 | AVGO | 12-20 15:00 | 12-20 15:20 | 225.38 | 223.41 | 34 | 7662.92 | -66.98 | -0.87% | 0.44R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.03 | ↑222.87 | 0.975 | 1.8 | **LOSS** |
| 762 | ABNB | 12-20 15:15 | 12-20 17:00 | 131.79 | 134.38 | 106 | 13969.74 | +274.54 | +1.97% | 1.66R | 105m | market | timeout | breakout | breakout | neutral | 70.16 | ↑130.49 | 0.4932 | 2.08 | **WIN** |
| 763 | RIVN | 12-20 15:15 | 12-20 15:55 | 13.49 | 13.79 | 283 | 7648.83 | +84.9 | +2.22% | 1.11R | 40m | market | trim-profit-target | breakout | trend | noisyHighBeta | 65.59 | ↑13.13 | 0.0465 | 1.08 | **WIN** |
| 764 | RIVN | 12-20 15:15 | 12-20 16:05 | 13.49 | 13.92 | 284 | 7648.83 | +122.12 | +3.19% | 1.6R | 50m | market | profit-target | breakout | trend | noisyHighBeta | 65.59 | ↑13.13 | 0.0465 | 1.08 | **WIN** |
| 765 | INTC | 12-23 14:30 | 12-24 14:30 | 19.68 | 19.99 | 708 | 13933.44 | +219.48 | +1.58% | 1.72R | 1440m | market | timeout | breakout | breakout | neutral | 60.34 | ↓19.66 | -0.0147 | 2.17 | **WIN** |
| 766 | SMCI | 12-23 14:45 | 12-23 15:05 | 32.38 | 32.08 | 239 | 7738.82 | -71.7 | -0.93% | 0.47R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 54.46 | ↓32.14 | 0.0127 | 1.34 | **LOSS** |
| 767 | HPE | 12-23 14:50 | 12-23 15:10 | 21.8 | 21.57 | 640 | 13952 | -147.2 | -1.06% | 1.07R | 20m | market | early-reversal | trend | trend | neutral | 79.83 | ↓21.74 | 0.0756 | 2.21 | **LOSS** |
| 768 | AAPL | 12-24 14:30 | 12-24 16:15 | 257.01 | 257.35 | 54 | 13878.54 | +18.36 | +0.13% | 0.14R | 105m | market | timeout | trend | breakout | neutral | 71.1 | ↑256.37 | 0.4318 | 1.44 | **WIN** |
| 769 | AMZN | 12-24 14:45 | 12-24 15:10 | 228.47 | 227.75 | 61 | 13936.67 | -43.92 | -0.32% | 0.38R | 25m | market | early-reversal | breakout | breakout | neutral | 76.51 | ↑227.29 | 0.5611 | 1.19 | **LOSS** |
| 770 | PLTR | 12-24 14:55 | 12-24 15:20 | 84.4 | 83.37 | 91 | 7680.4 | -93.73 | -1.22% | 0.61R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 73.55 | ↓83.61 | 1.0714 | 1.77 | **LOSS** |
| 771 | GE | 12-24 15:10 | 12-24 16:50 | 170.22 | 169.98 | 82 | 13958.04 | -19.68 | -0.14% | 0.16R | 100m | market | stagnation | trend | trend | neutral | 77.38 | ↓169.67 | 0.4229 | 1.64 | **LOSS** |
| 772 | LLY | 12-24 15:20 | 12-24 15:55 | 797.67 | 793.53 | 17 | 13560.39 | -70.38 | -0.52% | 0.58R | 35m | market | early-reversal | trend | trend | neutral | 79.15 | ↑792.96 | 5.7258 | 1.18 | **LOSS** |
| 773 | SBUX | 12-24 15:25 | 12-24 17:10 | 88.76 | 89.42 | 158 | 14024.08 | +104.28 | +0.74% | 0.68R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑88.14 | 0.2917 | 1.75 | **WIN** |
| 774 | TGT | 12-26 14:30 | 12-26 16:10 | 133.21 | 135.33 | 52 | 13853.84 | +110.24 | +1.59% | 2.27R | 100m | market | trim-profit-target | trend | trend | neutral | 69.25 | ↑132.98 | 0.2186 | 1.82 | **WIN** |
| 775 | TGT | 12-26 14:30 | 12-26 16:15 | 133.21 | 135.39 | 52 | 13853.84 | +113.36 | +1.64% | 2.34R | 105m | market | timeout | trend | trend | neutral | 69.25 | ↑132.98 | 0.2186 | 1.82 | **WIN** |
| 776 | AMD | 12-26 14:40 | 12-26 14:50 | 127.22 | 125.76 | 109 | 13866.98 | -159.14 | -1.15% | 1.55R | 10m | market | stop-loss | trend | trend | neutral | 71.43 | ↓126.35 | 0.215 | 1.25 | **LOSS** |
| 777 | INTC | 12-26 15:00 | 12-26 15:40 | 20.66 | 20.57 | 676 | 13966.16 | -60.84 | -0.44% | 0.35R | 40m | market | early-reversal | breakout | breakout | neutral | 63.64 | ↑20.38 | 0.0523 | 1.2 | **LOSS** |
| 778 | ABNB | 12-26 15:25 | 12-26 15:45 | 135.78 | 135.28 | 103 | 13985.34 | -51.5 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 66.47 | ↑134.89 | 0.2748 | 1.38 | **LOSS** |
| 779 | NVDA | 12-30 15:10 | 12-30 15:30 | 138.41 | 137.09 | 100 | 13841 | -132 | -0.95% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 57.27 | ↑136.54 | 0.1919 | 1.22 | **LOSS** |
| 780 | CELH | 12-31 15:15 | 12-31 16:00 | 26.6 | 26.61 | 486 | 12927.6 | +4.86 | +0.04% | 0.02R | 45m | market | trailing-stop | breakout | breakout | neutral | 65.68 | ↓26.33 | 0.0634 | 1.14 | **WIN** |
| 781 | LRCX | 01-02 14:30 | 01-02 15:20 | 73.09 | 72.76 | 191 | 13960.19 | -63.03 | -0.45% | 0.56R | 50m | market | stagnation | breakout | breakout | neutral | 79.35 | ↓73.09 | 0.1794 | 2.1 | **LOSS** |
| 782 | QCOM | 01-02 14:40 | 01-02 15:30 | 155.75 | 155.27 | 89 | 13861.75 | -42.72 | -0.31% | 0.37R | 50m | market | stagnation | breakout | breakout | neutral | 66.43 | ↓155.56 | 0.3979 | 2.12 | **LOSS** |
| 783 | ARM | 01-02 14:40 | 01-02 16:00 | 125.98 | 126.88 | 111 | 13983.78 | +99.9 | +0.71% | 0.56R | 80m | market | trailing-stop | breakout | breakout | neutral | 67.15 | ↓125.71 | 0.2982 | 2.04 | **WIN** |
| 784 | TSM | 01-02 14:40 | 01-02 16:25 | 200.58 | 202.62 | 69 | 13840.02 | +140.76 | +1.02% | 1.13R | 105m | market | timeout | breakout | breakout | neutral | 67.83 | ↑199.02 | 0.3484 | 2.52 | **WIN** |
| 785 | SNOW | 01-02 14:40 | 01-02 16:00 | 157.15 | 157.1 | 89 | 13986.35 | -4.45 | -0.03% | 0.03R | 80m | market | trailing-stop | breakout | breakout | neutral | 75.42 | ↓156.34 | 0.3689 | 1.59 | **LOSS** |
| 786 | AMAT | 01-02 14:40 | 01-02 15:30 | 164.73 | 164.53 | 85 | 14002.05 | -17 | -0.12% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 63.07 | ↓164.49 | 0.3832 | 1.39 | **LOSS** |
| 787 | MRVL | 01-02 14:40 | 01-02 16:25 | 112.3 | 113.91 | 123 | 13812.9 | +198.03 | +1.43% | 1.15R | 105m | market | timeout | breakout | breakout | neutral | 64.25 | ↑111.75 | 0.2719 | 1.21 | **WIN** |
| 788 | MU | 01-02 14:45 | 01-02 16:30 | 86.11 | 86.75 | 160 | 13777.6 | +102.4 | +0.74% | 0.67R | 105m | market | timeout | breakout | breakout | neutral | 71.88 | ↑85.31 | 0.2723 | 1.47 | **WIN** |
| 789 | SQ | 01-02 14:45 | 01-02 15:35 | 86.37 | 85.81 | 161 | 13905.57 | -90.16 | -0.65% | 0.45R | 50m | market | stagnation | trend | breakout | neutral | 57.85 | ↓86.08 | 0.0577 | 2.68 | **LOSS** |
| 790 | AVGO | 01-02 14:50 | 01-02 15:20 | 237.78 | 235.44 | 58 | 13791.24 | -135.72 | -0.98% | 0.68R | 30m | market | early-reversal | breakout | breakout | neutral | 66.21 | ↓234.88 | 0.5538 | 1.33 | **LOSS** |
| 791 | META | 01-02 14:55 | 01-02 15:55 | 598.32 | 598.43 | 23 | 13761.36 | +2.53 | +0.02% | 0.02R | 60m | market | breakeven-stop | breakout | breakout | neutral | 69.56 | ↑592.62 | 1.862 | 1.43 | **WIN** |
| 792 | COIN | 01-02 14:55 | 01-02 15:15 | 261.58 | 257.48 | 53 | 13863.74 | -217.3 | -1.57% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 68.23 | ↓257.26 | 2.9909 | 1.89 | **LOSS** |
| 793 | PANW | 01-02 14:55 | 01-02 15:20 | 184.08 | 182.42 | 75 | 13806 | -124.5 | -0.9% | 1.15R | 25m | market | early-reversal | trend | trend | neutral | 71.59 | ↓183.15 | 0.4039 | 1.83 | **LOSS** |
| 794 | CRWD | 01-02 14:55 | 01-02 15:20 | 348.76 | 345.13 | 40 | 13950.4 | -145.2 | -1.04% | 0.83R | 25m | market | early-reversal | breakout | trend | neutral | 66.2 | ↓346.14 | 1.0719 | 1.02 | **LOSS** |
| 795 | DDOG | 01-02 14:55 | 01-02 15:20 | 144.51 | 143.48 | 96 | 13872.96 | -98.88 | -0.71% | 0.76R | 25m | market | early-reversal | trend | breakout | neutral | 63.51 | ↓143.71 | 0.2011 | 1.76 | **LOSS** |
| 796 | ADBE | 01-02 15:00 | 01-02 15:20 | 450.11 | 446.95 | 30 | 13503.3 | -94.8 | -0.7% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 68.56 | ↓447.88 | 1.3949 | 2.19 | **LOSS** |
| 797 | SMCI | 01-02 15:00 | 01-02 15:20 | 31.16 | 30.79 | 248 | 7727.68 | -91.76 | -1.19% | 0.6R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 68.33 | ↓30.98 | 0.2319 | 1.32 | **LOSS** |
| 798 | SHOP | 01-02 15:00 | 01-02 15:20 | 107.82 | 106.71 | 129 | 13908.78 | -143.19 | -1.03% | 0.77R | 20m | market | early-reversal | breakout | trend | neutral | 58.88 | ↓106.98 | 0.3193 | 1.05 | **LOSS** |
| 799 | SBUX | 01-02 15:00 | 01-02 15:25 | 92.53 | 92.22 | 151 | 13972.03 | -46.81 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 78.41 | ↓92.28 | 0.3906 | 1.15 | **LOSS** |
| 800 | AMZN | 01-02 15:10 | 01-02 15:30 | 225.01 | 222.58 | 62 | 13950.62 | -150.66 | -1.08% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 72.12 | ↓222.51 | 1.009 | 1.27 | **LOSS** |
| 801 | ORCL | 01-02 15:10 | 01-02 15:30 | 168.48 | 167.08 | 82 | 13815.36 | -114.8 | -0.83% | 1.11R | 20m | market | early-reversal | trend | trend | neutral | 74.2 | ↓167.73 | 0.482 | 1.78 | **LOSS** |
| 802 | PYPL | 01-02 15:10 | 01-02 15:30 | 86.81 | 86.37 | 160 | 13889.6 | -70.4 | -0.51% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 78.71 | ↑86.01 | 0.3148 | 1.16 | **LOSS** |
| 803 | INTU | 01-02 15:10 | 01-02 15:30 | 637.59 | 631.21 | 21 | 13389.39 | -133.98 | -1% | 1.25R | 20m | market | stop-loss | trend | trend | neutral | 68.77 | ↓633.21 | 1.8204 | 2.26 | **LOSS** |
| 804 | PLTR | 01-03 14:30 | 01-03 15:40 | 76.13 | 78.16 | 183 | 13931.79 | +371.49 | +2.67% | 2.36R | 70m | market | profit-target | breakout | breakout | neutral | 76.45 | ↑75.92 | 0.437 | 1.98 | **WIN** |
| 805 | NET | 01-03 14:30 | 01-03 15:15 | 114.05 | 112.93 | 122 | 13914.1 | -136.64 | -0.98% | 1.23R | 45m | market | early-reversal | breakout | breakout | neutral | 66.37 | ↓113.95 | 0.1361 | 1.43 | **LOSS** |
| 806 | JPM | 01-03 14:35 | 01-03 14:45 | 244.81 | 242.6 | 57 | 13954.17 | -125.97 | -0.9% | 1.25R | 10m | market | stop-loss | breakout | breakout | neutral | 78.8 | ↓244.05 | 0.694 | 2.01 | **LOSS** |
| 807 | GE | 01-03 14:35 | 01-03 14:55 | 171.28 | 170.14 | 81 | 13873.68 | -92.34 | -0.67% | 0.96R | 20m | market | early-reversal | breakout | breakout | neutral | 77.06 | ↓170.13 | 0.4753 | 1.45 | **LOSS** |
| 808 | AMAT | 01-03 14:35 | 01-03 16:20 | 166.13 | 167.58 | 84 | 13954.92 | +121.8 | +0.87% | 1.24R | 105m | market | timeout | breakout | breakout | neutral | 78.77 | ↑165.61 | 0.4189 | 2 | **WIN** |
| 809 | UBER | 01-03 15:00 | 01-03 16:45 | 63.99 | 64.42 | 218 | 13949.82 | +93.74 | +0.67% | 0.57R | 105m | market | timeout | trend | trend | neutral | 65.41 | ↑63.89 | 0.2663 | 1.05 | **WIN** |
| 810 | XOM | 01-06 14:35 | 01-06 14:55 | 109.43 | 109.06 | 128 | 14007.04 | -47.36 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 72.78 | ↓108.95 | 0.1005 | 1.28 | **LOSS** |
| 811 | META | 01-06 14:40 | 01-06 15:00 | 612.96 | 608.32 | 22 | 13485.12 | -102.08 | -0.76% | 1.09R | 20m | market | early-reversal | breakout | breakout | neutral | 75.37 | ↓612.64 | 1.2597 | 3.23 | **LOSS** |
| 812 | CAT | 01-06 14:45 | 01-06 15:20 | 368.77 | 367.45 | 37 | 13644.49 | -48.84 | -0.36% | 0.51R | 35m | market | early-reversal | breakout | breakout | neutral | 78.62 | ↓367.81 | 1.2372 | 1.7 | **LOSS** |
| 813 | CRM | 01-06 14:50 | 01-06 15:10 | 336.23 | 334.52 | 42 | 14121.66 | -71.82 | -0.51% | 0.65R | 20m | market | early-reversal | trend | breakout | neutral | 65.56 | ↑333.47 | 0.5121 | 1.46 | **LOSS** |
| 814 | AMZN | 01-06 15:00 | 01-06 16:45 | 226.58 | 228.15 | 61 | 13821.38 | +95.77 | +0.69% | 0.78R | 105m | market | timeout | trend | trend | neutral | 73.69 | ↑226.06 | 0.5481 | 1.04 | **WIN** |
| 815 | TSM | 01-06 15:10 | 01-06 16:55 | 218.51 | 219.47 | 63 | 13766.13 | +60.48 | +0.44% | 0.22R | 105m | market | timeout | trend | trend | neutral | 79.41 | ↑218.39 | 2.651 | 1.2 | **WIN** |
| 816 | SBUX | 01-06 15:20 | 01-06 15:45 | 93.98 | 93.69 | 149 | 14003.02 | -43.21 | -0.31% | 0.36R | 25m | market | early-reversal | trend | trend | neutral | 73.78 | ↑93.43 | 0.2 | 1.57 | **LOSS** |
| 817 | IBM | 01-07 14:35 | 01-07 15:05 | 225.99 | 225.22 | 61 | 13785.39 | -46.97 | -0.34% | 0.49R | 30m | market | early-reversal | breakout | breakout | neutral | 84.08 | ↓224.72 | 0.2618 | 2.29 | **LOSS** |
| 818 | UBER | 01-07 14:45 | 01-07 15:05 | 67.87 | 67.3 | 205 | 13913.35 | -116.85 | -0.84% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 76.5 | ↓67.91 | 0.2433 | 1.39 | **LOSS** |
| 819 | LLY | 01-07 14:45 | 01-07 15:35 | 775.87 | 773.81 | 17 | 13189.79 | -35.02 | -0.27% | 0.39R | 50m | market | stagnation | breakout | breakout | neutral | 75.18 | ↓768.08 | 0.5028 | 1.72 | **LOSS** |
| 820 | GOOGL | 01-07 14:50 | 01-07 15:10 | 200.22 | 198.48 | 69 | 13815.18 | -120.06 | -0.87% | 1.02R | 20m | market | early-reversal | breakout | breakout | neutral | 81.65 | ↓198.7 | 0.6261 | 2.08 | **LOSS** |
| 821 | MSFT | 01-07 14:55 | 01-07 15:15 | 430.63 | 428.33 | 32 | 13780.16 | -73.6 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↓429.04 | 0.781 | 2.16 | **LOSS** |
| 822 | UNH | 01-07 15:00 | 01-07 15:20 | 518.41 | 515.19 | 26 | 13478.66 | -83.72 | -0.62% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 71.8 | ↓517.29 | 0.8636 | 1.73 | **LOSS** |
| 823 | JPM | 01-13 14:40 | 01-13 15:10 | 243.13 | 241.37 | 52 | 12642.76 | -91.52 | -0.72% | 1.03R | 30m | market | early-reversal | breakout | breakout | neutral | 77.49 | ↓242.25 | 0.2844 | 2.91 | **LOSS** |
| 824 | HD | 01-13 14:45 | 01-13 15:25 | 394.26 | 392.1 | 32 | 12616.32 | -69.12 | -0.55% | 0.77R | 40m | market | early-reversal | breakout | breakout | neutral | 70.27 | ↓390.4 | 0.0634 | 1.22 | **LOSS** |
| 825 | AVGO | 01-13 14:50 | 01-13 15:10 | 228.22 | 225.58 | 61 | 13921.42 | -161.04 | -1.16% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 66.68 | ↓225.58 | 0.5338 | 1.76 | **LOSS** |
| 826 | SNOW | 01-13 14:50 | 01-13 15:10 | 164.13 | 162.65 | 78 | 12802.14 | -115.44 | -0.9% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 58.8 | ↑160.73 | -0.5254 | 1.16 | **LOSS** |
| 827 | ELF | 01-13 14:55 | 01-13 16:40 | 127.82 | 128.47 | 101 | 12909.82 | +65.65 | +0.51% | 0.28R | 105m | market | timeout | breakout | breakout | neutral | 60.02 | ↑126.1 | -0.2604 | 1.13 | **WIN** |
| 828 | CRWD | 01-14 14:30 | 01-14 16:15 | 345.75 | 347.96 | 40 | 13830 | +88.4 | +0.64% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 81.07 | ↑344.97 | 1.3892 | 1.83 | **WIN** |
| 829 | NVDA | 01-14 14:35 | 01-14 14:50 | 136.1 | 133.78 | 102 | 13882.2 | -236.64 | -1.7% | 1.59R | 15m | market | stop-loss | breakout | breakout | neutral | 83.69 | ↓135.65 | 0.6056 | 1.57 | **LOSS** |
| 830 | AMZN | 01-14 14:35 | 01-14 14:55 | 221.12 | 220.22 | 63 | 13930.56 | -56.7 | -0.41% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 73.93 | ↓220.48 | 0.2992 | 1.21 | **LOSS** |
| 831 | MRVL | 01-14 14:35 | 01-14 14:45 | 117.25 | 115.56 | 118 | 13835.5 | -199.42 | -1.44% | 1.45R | 10m | market | stop-loss | breakout | breakout | neutral | 83.18 | ↓116.91 | 0.466 | 2.43 | **LOSS** |
| 832 | GE | 01-14 14:40 | 01-14 16:25 | 173.76 | 174.98 | 80 | 13900.8 | +97.6 | +0.7% | 1R | 105m | market | timeout | trend | breakout | neutral | 72.09 | ↑173.21 | 0.4135 | 1.55 | **WIN** |
| 833 | PANW | 01-14 15:15 | 01-14 15:35 | 169.56 | 167.81 | 82 | 13903.92 | -143.5 | -1.03% | 1.13R | 20m | market | early-reversal | trend | trend | neutral | 72.68 | ↓168.65 | 0.6108 | 1 | **LOSS** |
| 834 | MSFT | 01-15 14:30 | 01-15 16:15 | 421.31 | 426.81 | 30 | 12639.3 | +165 | +1.31% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 68.79 | ↑420.62 | -0.2636 | 1.76 | **WIN** |
| 835 | HPE | 01-15 14:30 | 01-15 15:20 | 23.13 | 23.09 | 555 | 12837.15 | -22.2 | -0.17% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 63.9 | ↓23.16 | 0.0124 | 1.23 | **LOSS** |
| 836 | NKE | 01-15 14:30 | 01-15 14:50 | 72.08 | 71.58 | 193 | 13911.44 | -96.5 | -0.69% | 0.99R | 20m | market | early-reversal | breakout | breakout | neutral | 80.77 | ↓72.03 | 0.0849 | 1.32 | **LOSS** |
| 837 | TSM | 01-15 14:35 | 01-15 16:20 | 203 | 205.19 | 68 | 13804 | +148.92 | +1.08% | 0.94R | 105m | market | timeout | breakout | breakout | neutral | 63.79 | ↑201.41 | 0.3458 | 2.55 | **WIN** |
| 838 | AMZN | 01-15 14:45 | 01-15 15:35 | 222.82 | 222.61 | 62 | 13814.84 | -13.02 | -0.09% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 83.51 | ↓222.52 | 0.7062 | 1.5 | **LOSS** |
| 839 | MCD | 01-15 14:45 | 01-15 15:30 | 282.82 | 281.68 | 49 | 13858.18 | -55.86 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | 75.44 | ↓283.2 | 0.598 | 2.89 | **LOSS** |
| 840 | INTU | 01-15 14:45 | 01-15 15:20 | 626.32 | 622.37 | 22 | 13779.04 | -86.9 | -0.63% | 0.61R | 35m | market | early-reversal | trend | trend | neutral | 61.55 | ↑620.3 | 0.4689 | 1.89 | **LOSS** |
| 841 | TSLA | 01-15 14:55 | 01-15 15:45 | 415.48 | 414.43 | 18 | 7478.64 | -18.9 | -0.25% | 0.13R | 50m | market | stagnation | trend | trend | noisyHighBeta | 79.99 | ↑411.19 | 1.7658 | 1.76 | **LOSS** |
| 842 | PLTR | 01-15 14:55 | 01-15 15:45 | 68.25 | 67.99 | 113 | 7712.25 | -29.38 | -0.38% | 0.19R | 50m | market | stagnation | trend | trend | noisyHighBeta | 68.39 | ↓68.11 | 0.4488 | 1.42 | **LOSS** |
| 843 | NFLX | 01-15 15:00 | 01-15 15:55 | 842.72 | 840.91 | 16 | 13483.52 | -28.96 | -0.21% | 0.26R | 55m | market | stagnation | trend | trend | neutral | 76.68 | ↓838.42 | 1.4588 | 1.71 | **LOSS** |
| 844 | ASML | 01-15 15:00 | 01-15 15:45 | 742.51 | 739.78 | 18 | 13365.18 | -49.14 | -0.37% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 78.29 | ↓737.13 | 1.7025 | 1.36 | **LOSS** |
| 845 | SQ | 01-15 15:05 | 01-15 15:30 | 86.77 | 85.95 | 160 | 13883.2 | -131.2 | -0.95% | 0.48R | 25m | market | early-reversal | trend | trend | neutral | 79.79 | ↓86.08 | 0.9315 | 1.01 | **LOSS** |
| 846 | CELH | 01-15 15:20 | 01-15 15:55 | 27.93 | 27.78 | 274 | 7652.82 | -41.1 | -0.54% | 0.27R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 77.11 | ↓27.78 | 0.3411 | 1 | **LOSS** |
| 847 | PLTR | 01-16 14:30 | 01-16 16:05 | 69.26 | 71.16 | 202 | 13990.52 | +383.8 | +2.74% | 2.88R | 95m | market | profit-target | trend | breakout | neutral | 65.86 | ↑69.17 | 0.1616 | 1.83 | **WIN** |
| 848 | RIVN | 01-16 14:30 | 01-16 15:40 | 14.15 | 14.18 | 916 | 12961.4 | +27.48 | +0.21% | 0.19R | 70m | market | trailing-stop | breakout | breakout | neutral | 61.76 | ↓14.08 | 0.0365 | 1.45 | **WIN** |
| 849 | ABNB | 01-17 14:35 | 01-17 15:25 | 134.07 | 133.78 | 104 | 13943.28 | -30.16 | -0.22% | 0.31R | 50m | market | stagnation | breakout | breakout | neutral | 75.07 | ↓133.54 | 0.161 | 1.48 | **LOSS** |
| 850 | PYPL | 01-17 14:35 | 01-17 16:20 | 90.53 | 92.28 | 153 | 13851.09 | +267.75 | +1.93% | 2.27R | 105m | market | timeout | breakout | breakout | neutral | 64.88 | ↑90.4 | 0.1822 | 1.98 | **WIN** |
| 851 | BA | 01-17 14:35 | 01-17 15:25 | 171.21 | 170.86 | 82 | 14039.22 | -28.7 | -0.2% | 0.29R | 50m | market | stagnation | breakout | breakout | neutral | 74.84 | ↓170.42 | 0.1709 | 1.87 | **LOSS** |
| 852 | MCD | 01-17 14:35 | 01-17 15:30 | 283.16 | 282.86 | 49 | 13874.84 | -14.7 | -0.11% | 0.16R | 55m | market | stagnation | breakout | breakout | neutral | 81.57 | ↓282.19 | 0.4867 | 1.64 | **LOSS** |
| 853 | XOM | 01-17 14:40 | 01-17 15:05 | 112.68 | 112.08 | 124 | 13972.32 | -74.4 | -0.53% | 0.76R | 25m | market | early-reversal | breakout | breakout | neutral | 81.84 | ↓111.98 | 0.2221 | 2.18 | **LOSS** |
| 854 | QCOM | 01-17 14:45 | 01-17 15:40 | 165.22 | 164.8 | 84 | 13878.48 | -35.28 | -0.25% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 62.17 | ↑164.04 | 0.2952 | 1.13 | **LOSS** |
| 855 | SHOP | 01-17 14:45 | 01-17 15:10 | 105.2 | 104.44 | 132 | 13886.4 | -100.32 | -0.72% | 0.76R | 25m | market | early-reversal | breakout | breakout | neutral | 63.65 | ↓105.18 | 0.0799 | 1.37 | **LOSS** |
| 856 | META | 01-17 15:00 | 01-17 15:20 | 618.27 | 607.26 | 22 | 13601.94 | -242.22 | -1.78% | 1.6R | 20m | market | stop-loss | trend | trend | neutral | 60.04 | ↓617.05 | 0.5049 | 2.61 | **LOSS** |
| 857 | ORCL | 01-21 14:45 | 01-21 15:05 | 164.92 | 163.51 | 84 | 13853.28 | -118.44 | -0.85% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | 79.98 | ↓164.61 | 0.6315 | 1.73 | **LOSS** |
| 858 | MDB | 01-21 15:20 | 01-21 15:50 | 261.08 | 258.56 | 53 | 13837.24 | -133.56 | -0.97% | 0.67R | 30m | market | early-reversal | breakout | breakout | neutral | 75.51 | ↓258.4 | 1.2841 | 1.34 | **LOSS** |
| 859 | ABNB | 01-22 14:30 | 01-22 15:20 | 134.76 | 134.52 | 104 | 14015.04 | -24.96 | -0.18% | 0.19R | 50m | market | stagnation | breakout | breakout | neutral | 80.32 | ↑134.2 | 0.374 | 1.29 | **LOSS** |
| 860 | AMAT | 01-22 14:30 | 01-22 16:15 | 197.59 | 199.82 | 66 | 13040.94 | +147.18 | +1.13% | 1.35R | 105m | market | timeout | breakout | breakout | neutral | 69.33 | ↑196.82 | 0.0497 | 2.82 | **WIN** |
| 861 | LRCX | 01-22 14:30 | 01-22 16:15 | 83.22 | 84.65 | 156 | 12982.32 | +223.08 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | neutral | 62.33 | ↑83.04 | 0.0269 | 1.84 | **WIN** |
| 862 | AMD | 01-22 14:40 | 01-22 15:30 | 124.17 | 123.71 | 112 | 13907.04 | -51.52 | -0.37% | 0.39R | 50m | market | stagnation | trend | breakout | neutral | 63.98 | ↑123.17 | -0.0358 | 1.14 | **LOSS** |
| 863 | META | 01-22 15:00 | 01-22 15:50 | 627.27 | 626.86 | 22 | 13799.94 | -9.02 | -0.07% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 77.3 | ↑623.19 | 2.1237 | 1.23 | **LOSS** |
| 864 | TSM | 01-22 15:00 | 01-22 16:45 | 222.25 | 224.17 | 62 | 13779.5 | +119.04 | +0.86% | 0.63R | 105m | market | timeout | trend | trend | neutral | 62.31 | ↑221.41 | 0.5388 | 1.4 | **WIN** |
| 865 | NET | 01-22 15:00 | 01-22 15:55 | 121 | 120.83 | 115 | 13915 | -19.55 | -0.14% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 71.27 | ↓120.43 | 0.2158 | 1.37 | **LOSS** |
| 866 | LLY | 01-22 15:00 | 01-22 16:10 | 749.03 | 754.46 | 9 | 13482.54 | +48.87 | +0.72% | 1.03R | 70m | market | trim-profit-target | trend | trend | neutral | 77.49 | ↑746.28 | 2.4118 | 1.09 | **WIN** |
| 867 | LLY | 01-22 15:00 | 01-22 16:45 | 749.03 | 757.19 | 9 | 13482.54 | +73.44 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑746.28 | 2.4118 | 1.09 | **WIN** |
| 868 | CRM | 01-22 15:05 | 01-22 15:40 | 330.95 | 329.64 | 42 | 13899.9 | -55.02 | -0.4% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 66.35 | ↓329.73 | 0.7354 | 1.78 | **LOSS** |
| 869 | INTC | 01-22 15:05 | 01-22 15:25 | 22.11 | 21.84 | 631 | 13951.41 | -170.37 | -1.22% | 0.76R | 20m | market | early-reversal | breakout | breakout | neutral | 55.63 | ↓21.86 | -0.0346 | 1.64 | **LOSS** |
| 870 | PLTR | 01-22 15:15 | 01-22 17:00 | 75.39 | 76.56 | 187 | 14097.93 | +218.79 | +1.55% | 0.78R | 105m | market | timeout | trend | trend | neutral | 73.16 | ↑74.48 | 0.4169 | 1.15 | **WIN** |
| 871 | PLTR | 01-23 14:35 | 01-23 15:15 | 77.77 | 77.15 | 181 | 14076.37 | -112.22 | -0.8% | 0.63R | 40m | market | early-reversal | breakout | breakout | neutral | 61.83 | ↓77.38 | 0.1373 | 2 | **LOSS** |
| 872 | JPM | 01-23 14:35 | 01-23 15:20 | 266.33 | 264.6 | 52 | 13849.16 | -89.96 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | neutral | 79.25 | ↓265.3 | 0.4005 | 2.72 | **LOSS** |
| 873 | BAC | 01-23 14:35 | 01-23 15:35 | 46.52 | 46.46 | 300 | 13956 | -18 | -0.13% | 0.19R | 60m | market | stagnation | breakout | breakout | neutral | 74.16 | ↓46.4 | 0.0371 | 1.11 | **LOSS** |
| 874 | DDOG | 01-23 14:40 | 01-23 15:30 | 142.18 | 142.02 | 98 | 13933.64 | -15.68 | -0.11% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 73.65 | ↓142.17 | 0.5137 | 1.59 | **LOSS** |
| 875 | NVO | 01-23 14:45 | 01-23 15:05 | 81.42 | 80.9 | 171 | 13922.82 | -88.92 | -0.64% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 71.76 | ↓81.18 | 0.0614 | 2.34 | **LOSS** |
| 876 | COIN | 01-23 14:50 | 01-23 15:05 | 300.3 | 292.09 | 25 | 7507.5 | -205.25 | -2.73% | 1.65R | 15m | market | stop-loss | trend | trend | noisyHighBeta | 70.32 | ↓298.36 | 1.1658 | 1.87 | **LOSS** |
| 877 | CAT | 01-23 15:00 | 01-23 16:45 | 401.39 | 408.18 | 34 | 13647.26 | +230.86 | +1.69% | 2.41R | 105m | market | timeout | trend | trend | neutral | 74.18 | ↑399.27 | 0.4194 | 1.8 | **WIN** |
| 878 | AAPL | 01-23 15:05 | 01-23 15:50 | 225.96 | 225.12 | 62 | 14009.52 | -52.08 | -0.37% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 75.35 | ↓225.3 | 0.7539 | 1.71 | **LOSS** |
| 879 | UNH | 01-23 15:15 | 01-23 16:35 | 524.58 | 528.41 | 13 | 13639.08 | +49.79 | +0.73% | 0.61R | 80m | market | trim-profit-target | trend | trend | neutral | 61.46 | ↑524.87 | 0.9852 | 1.01 | **WIN** |
| 880 | UNH | 01-23 15:15 | 01-23 17:10 | 524.58 | 526.86 | 13 | 13639.08 | +29.64 | +0.43% | 0.36R | 115m | market | timeout | trend | trend | neutral | 61.46 | ↑524.87 | 0.9852 | 1.01 | **WIN** |
| 881 | GOOGL | 01-24 14:30 | 01-24 15:10 | 199.83 | 198.71 | 69 | 13788.27 | -77.28 | -0.56% | 0.8R | 40m | market | early-reversal | breakout | breakout | neutral | 85.61 | ↓199.2 | 0.2405 | 3.19 | **LOSS** |
| 882 | CRM | 01-24 14:30 | 01-24 14:50 | 338.63 | 336.25 | 41 | 13883.83 | -97.58 | -0.7% | 1R | 20m | market | early-reversal | trend | trend | neutral | 75.88 | ↓337.57 | 0.584 | 2.11 | **LOSS** |
| 883 | BA | 01-24 14:40 | 01-24 15:00 | 179.82 | 178.72 | 78 | 14025.96 | -85.8 | -0.61% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 67.31 | ↑177.8 | 0.1715 | 1.86 | **LOSS** |
| 884 | DIS | 01-24 15:00 | 01-24 16:45 | 111.72 | 112.94 | 125 | 13965 | +152.5 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 70.89 | ↑111.27 | 0.2242 | 1.07 | **WIN** |
| 885 | BA | 01-27 14:40 | 01-27 15:00 | 178.02 | 176.96 | 79 | 14063.58 | -83.74 | -0.6% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↓176.94 | 0.2054 | 1.24 | **LOSS** |
| 886 | INTU | 01-27 14:40 | 01-27 16:05 | 605.73 | 605.96 | 22 | 13326.06 | +5.06 | +0.04% | 0.05R | 85m | market | breakeven-stop | breakout | breakout | neutral | 73.21 | ↑598.39 | 0.2425 | 1.38 | **WIN** |
| 887 | PANW | 01-27 14:50 | 01-27 16:35 | 189.84 | 190.31 | 73 | 13858.32 | +34.31 | +0.25% | 0.22R | 105m | market | timeout | breakout | breakout | neutral | 65.14 | ↑187.14 | -0.0095 | 1.16 | **WIN** |
| 888 | SNOW | 01-27 14:55 | 01-27 16:10 | 177.66 | 177.89 | 79 | 14035.14 | +18.17 | +0.13% | 0.09R | 75m | market | trailing-stop | breakout | breakout | neutral | 80.06 | ↑175.03 | 0.5184 | 1.24 | **WIN** |
| 889 | NOW | 01-27 15:20 | 01-27 16:30 | 1148.36 | 1145.4 | 12 | 13780.32 | -35.52 | -0.26% | 0.2R | 70m | market | breakeven-stop | trend | trend | neutral | 75.83 | ↑1134.42 | 4.4484 | 1.48 | **LOSS** |
| 890 | CRWD | 01-27 15:25 | 01-27 16:05 | 378.17 | 377.38 | 36 | 13614.12 | -28.44 | -0.21% | 0.11R | 40m | market | breakeven-stop | trend | trend | neutral | 54.27 | ↑370.24 | 0.076 | 1.22 | **LOSS** |
| 891 | AMZN | 01-28 14:30 | 01-28 15:40 | 235.06 | 239.41 | 29 | 13868.54 | +126.15 | +1.85% | 2.47R | 70m | market | trim-profit-target | trend | trend | neutral | 72.7 | ↑234.86 | 0.3872 | 1.89 | **WIN** |
| 892 | AMZN | 01-28 14:30 | 01-28 16:15 | 235.06 | 240.53 | 30 | 13868.54 | +164.1 | +2.33% | 3.11R | 105m | market | timeout | trend | trend | neutral | 72.7 | ↑234.86 | 0.3872 | 1.89 | **WIN** |
| 893 | QCOM | 01-28 14:30 | 01-28 14:45 | 172.53 | 170.02 | 80 | 13802.4 | -200.8 | -1.45% | 1.38R | 15m | market | stop-loss | trend | trend | neutral | 77.69 | ↓172.21 | 0.6719 | 2.32 | **LOSS** |
| 894 | PLTR | 01-28 14:30 | 01-28 14:40 | 75.65 | 74.09 | 186 | 14070.9 | -290.16 | -2.06% | 1.41R | 10m | market | stop-loss | trend | trend | neutral | 78.95 | ↓75.76 | 0.4857 | 1.52 | **LOSS** |
| 895 | MCD | 01-28 14:40 | 01-28 15:10 | 294.33 | 293.42 | 47 | 13833.51 | -42.77 | -0.31% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 65.33 | ↓293.31 | 0.4263 | 1.54 | **LOSS** |
| 896 | CRWD | 01-28 14:55 | 01-28 15:30 | 386.94 | 398.67 | 36 | 13929.84 | +422.28 | +3.03% | 2.02R | 35m | market | profit-target | breakout | breakout | neutral | 85.18 | ↑381.29 | 3.413 | 3.16 | **WIN** |
| 897 | PLTR | 01-28 15:10 | 01-28 15:35 | 76.97 | 78.85 | 182 | 14008.54 | +342.16 | +2.44% | 1.22R | 25m | market | profit-target | breakout | breakout | neutral | 63.29 | ↑75.79 | 0.7504 | 1.47 | **WIN** |
| 898 | MSFT | 01-28 15:15 | 01-28 17:00 | 439.77 | 442.39 | 31 | 13632.87 | +81.22 | +0.6% | 0.64R | 105m | market | timeout | trend | trend | neutral | 70 | ↑435.03 | 1.242 | 1.06 | **WIN** |
| 899 | NFLX | 01-29 14:40 | 01-29 14:50 | 984.96 | 974.28 | 14 | 13789.44 | -149.52 | -1.08% | 1.54R | 10m | market | stop-loss | trend | breakout | neutral | 75.78 | ↓980.84 | 1.553 | 1.32 | **LOSS** |
| 900 | AMAT | 01-29 15:05 | 01-29 15:25 | 175.85 | 174.37 | 80 | 14068 | -118.4 | -0.84% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 57.03 | ↓175.38 | 0.3734 | 1.25 | **LOSS** |
| 901 | CELH | 01-29 15:15 | 01-29 15:35 | 25.14 | 24.95 | 554 | 13927.56 | -105.26 | -0.76% | 0.57R | 20m | market | early-reversal | trend | breakout | neutral | 58.59 | ↑24.87 | -0.0094 | 2.22 | **LOSS** |
| 902 | RIVN | 01-30 14:30 | 01-30 15:55 | 12.57 | 12.58 | 1110 | 13952.7 | +11.1 | +0.08% | 0.07R | 85m | market | trailing-stop | trend | trend | neutral | 59.48 | ↓12.57 | 0.0236 | 1.61 | **WIN** |
| 903 | V | 01-30 14:35 | 01-30 15:25 | 341.84 | 341.5 | 40 | 13673.6 | -13.6 | -0.1% | 0.14R | 50m | market | stagnation | breakout | trend | neutral | 78.49 | ↓341.2 | 0.9537 | 1.35 | **LOSS** |
| 904 | AMAT | 01-30 14:35 | 01-30 16:00 | 179.28 | 179.18 | 78 | 13983.84 | -7.8 | -0.06% | 0.05R | 85m | market | stagnation | breakout | trend | neutral | 78.34 | ↓178.87 | 0.6029 | 1.04 | **LOSS** |
| 905 | ARM | 01-30 14:40 | 01-30 16:25 | 150.65 | 152.87 | 93 | 14010.45 | +206.46 | +1.47% | 1.34R | 105m | market | timeout | breakout | breakout | neutral | 75.78 | ↑150.31 | 0.8005 | 2.03 | **WIN** |
| 906 | PYPL | 01-30 14:40 | 01-30 15:15 | 90.19 | 89.69 | 154 | 13889.26 | -77 | -0.55% | 0.61R | 35m | market | early-reversal | breakout | trend | neutral | 75.53 | ↓90.12 | 0.2922 | 2.22 | **LOSS** |
| 907 | TXN | 01-30 14:40 | 01-30 15:30 | 182.45 | 182.07 | 76 | 13866.2 | -28.88 | -0.21% | 0.3R | 50m | market | stagnation | breakout | breakout | neutral | 73.78 | ↓181.88 | 0.2759 | 1.25 | **LOSS** |
| 908 | PLTR | 01-30 14:45 | 01-30 15:05 | 81.41 | 80 | 95 | 7733.95 | -133.95 | -1.73% | 1.05R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 60.97 | ↓80.35 | 0.3142 | 1.02 | **LOSS** |
| 909 | GE | 01-30 14:45 | 01-30 15:05 | 202.42 | 201.63 | 69 | 13966.98 | -54.51 | -0.39% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 73.87 | ↓201.76 | 0.6259 | 1.58 | **LOSS** |
| 910 | DELL | 01-30 14:45 | 01-30 15:30 | 104.9 | 103.8 | 132 | 13846.8 | -145.2 | -1.05% | 1.09R | 45m | market | early-reversal | breakout | breakout | neutral | 72.49 | ↓104.33 | 0.3089 | 1.95 | **LOSS** |
| 911 | KLAC | 01-30 15:00 | 01-30 15:30 | 730.33 | 726.57 | 19 | 13876.27 | -71.44 | -0.51% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 73.66 | ↓727.06 | 4.3751 | 1.79 | **LOSS** |
| 912 | AMZN | 01-31 14:35 | 01-31 15:25 | 238.33 | 238.03 | 58 | 13823.14 | -17.4 | -0.13% | 0.16R | 50m | market | stagnation | trend | breakout | neutral | 66.23 | ↓237.8 | 0.385 | 2.66 | **LOSS** |
| 913 | TSLA | 01-31 14:35 | 01-31 15:55 | 409.38 | 415.25 | 9 | 7368.84 | +52.83 | +1.43% | 0.85R | 80m | market | trim-profit-target | trend | trend | noisyHighBeta | 55.45 | ↑406.01 | 0.3174 | 1.09 | **WIN** |
| 914 | TSLA | 01-31 14:35 | 01-31 16:20 | 409.38 | 415.71 | 9 | 7368.84 | +56.97 | +1.55% | 0.92R | 105m | market | timeout | trend | trend | noisyHighBeta | 55.45 | ↑406.01 | 0.3174 | 1.09 | **WIN** |
| 915 | SHOP | 01-31 14:35 | 01-31 16:20 | 120.53 | 120.52 | 115 | 13860.95 | -1.15 | -0.01% | 0.01R | 105m | market | breakeven-stop | trend | trend | neutral | 57.88 | ↓120.32 | 0.1265 | 1.08 | **LOSS** |
| 916 | ABNB | 01-31 14:35 | 01-31 14:55 | 134 | 133.17 | 104 | 13936 | -86.32 | -0.62% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 67.51 | ↓133.32 | -0.018 | 1.7 | **LOSS** |
| 917 | ARM | 01-31 14:45 | 01-31 15:40 | 157.27 | 161.23 | 89 | 13997.03 | +352.44 | +2.52% | 2.07R | 55m | market | profit-target | breakout | trend | neutral | 72.98 | ↑156.52 | 0.716 | 1.06 | **WIN** |
| 918 | TSM | 01-31 14:50 | 01-31 16:30 | 210.5 | 214.14 | 33 | 13893 | +120.12 | +1.73% | 1.66R | 100m | market | trim-profit-target | trend | trend | neutral | 62.33 | ↑209.29 | 0.4434 | 1.05 | **WIN** |
| 919 | TSM | 01-31 14:50 | 01-31 16:35 | 210.5 | 213.54 | 33 | 13893 | +100.32 | +1.44% | 1.38R | 105m | market | timeout | trend | trend | neutral | 62.33 | ↑209.29 | 0.4434 | 1.05 | **WIN** |
| 920 | PLTR | 01-31 14:50 | 01-31 16:35 | 83.9 | 84.63 | 92 | 7718.8 | +67.16 | +0.87% | 0.47R | 105m | market | timeout | trend | trend | noisyHighBeta | 69.37 | ↑83.1 | 0.5836 | 2.6 | **WIN** |
| 921 | RIVN | 01-31 15:00 | 01-31 15:50 | 12.88 | 12.82 | 1006 | 12957.28 | -60.36 | -0.47% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 66.35 | ↓12.71 | 0.0438 | 1.27 | **LOSS** |
| 922 | NVDA | 01-31 15:10 | 01-31 16:35 | 125.54 | 125.61 | 60 | 7532.4 | +4.2 | +0.06% | 0.04R | 85m | market | trailing-stop | trend | trend | noisyHighBeta | 57.54 | ↓124.67 | 0.5785 | 1.84 | **WIN** |
| 923 | MU | 01-31 15:10 | 01-31 16:40 | 93.44 | 93.42 | 148 | 13829.12 | -2.96 | -0.02% | 0.01R | 90m | market | breakeven-stop | trend | trend | neutral | 58.95 | ↑92.32 | 0.0795 | 1.49 | **LOSS** |
| 924 | META | 02-03 14:40 | 02-03 15:00 | 697.34 | 689.21 | 20 | 13946.8 | -162.6 | -1.17% | 0.94R | 20m | market | early-reversal | breakout | breakout | neutral | 66.07 | ↓686.47 | -0.9734 | 1.46 | **LOSS** |
| 925 | INTC | 02-03 15:20 | 02-03 16:15 | 19.58 | 19.56 | 660 | 12922.8 | -13.2 | -0.1% | 0.05R | 55m | market | stagnation | breakout | breakout | neutral | 53.08 | ↑19.12 | -0.0787 | 1.61 | **LOSS** |
| 926 | UNH | 02-03 15:20 | 02-03 17:05 | 549.46 | 550.01 | 25 | 13736.5 | +13.75 | +0.1% | 0.09R | 105m | market | timeout | trend | trend | neutral | 66 | ↑546.24 | 0.4146 | 1.05 | **WIN** |
| 927 | CVX | 02-04 14:40 | 02-04 16:25 | 152.27 | 152.88 | 91 | 13856.57 | +55.51 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | neutral | 72.73 | ↑150.62 | 0.2322 | 1.67 | **WIN** |
| 928 | AMZN | 02-04 14:55 | 02-04 16:40 | 239.9 | 241.98 | 58 | 13914.2 | +120.64 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | neutral | 74.04 | ↑239 | 0.317 | 1.31 | **WIN** |
| 929 | SMCI | 02-04 14:55 | 02-04 15:25 | 28.48 | 28.25 | 271 | 7718.08 | -62.33 | -0.81% | 0.41R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 67.9 | ↓28.14 | 0.2452 | 1.01 | **LOSS** |
| 930 | NET | 02-04 14:55 | 02-04 16:30 | 139.87 | 141.06 | 49 | 13847.13 | +58.31 | +0.85% | 0.64R | 95m | market | trim-profit-target | trend | trend | neutral | 64.21 | ↑139.12 | 0.2954 | 1.02 | **WIN** |
| 931 | NET | 02-04 14:55 | 02-04 16:40 | 139.87 | 140.78 | 50 | 13847.13 | +45.5 | +0.65% | 0.49R | 105m | market | timeout | trend | trend | neutral | 64.21 | ↑139.12 | 0.2954 | 1.02 | **WIN** |
| 932 | BAC | 02-04 14:55 | 02-04 16:40 | 46.73 | 46.88 | 299 | 13972.27 | +44.85 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 66.36 | ↑46.54 | 0.0826 | 1.89 | **WIN** |
| 933 | AVGO | 02-04 15:00 | 02-04 15:50 | 221.63 | 220.95 | 62 | 13741.06 | -42.16 | -0.31% | 0.24R | 50m | market | stagnation | breakout | trend | neutral | 68.43 | ↑218.41 | 0.334 | 1.02 | **LOSS** |
| 934 | ARM | 02-04 15:00 | 02-04 15:50 | 160.37 | 159.99 | 88 | 14112.56 | -33.44 | -0.24% | 0.15R | 50m | market | stagnation | breakout | breakout | neutral | 64.36 | ↑158.19 | 0.4567 | 1.95 | **LOSS** |
| 935 | XOM | 02-04 15:00 | 02-04 16:45 | 109.05 | 109.68 | 128 | 13958.4 | +80.64 | +0.58% | 0.71R | 105m | market | timeout | trend | trend | neutral | 77.52 | ↑108.28 | 0.4645 | 1.06 | **WIN** |
| 936 | AMD | 02-04 15:05 | 02-04 15:40 | 117.48 | 116.78 | 118 | 13862.64 | -82.6 | -0.6% | 0.4R | 35m | market | early-reversal | breakout | trend | neutral | 75 | ↑115.91 | 0.5804 | 1.69 | **LOSS** |
| 937 | GOOGL | 02-04 15:10 | 02-04 16:40 | 204.96 | 204.77 | 68 | 13937.28 | -12.92 | -0.09% | 0.09R | 90m | market | breakeven-stop | trend | trend | neutral | 70.93 | ↓203.94 | 0.4519 | 1.42 | **LOSS** |
| 938 | ASML | 02-04 15:10 | 02-04 15:30 | 742.63 | 739.66 | 18 | 13367.34 | -53.46 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 72.84 | ↓739.51 | 2.4749 | 2.38 | **LOSS** |
| 939 | RIVN | 02-04 15:10 | 02-04 16:20 | 12.85 | 12.83 | 1086 | 13955.1 | -21.72 | -0.16% | 0.09R | 70m | market | stagnation | trend | trend | neutral | 69.57 | ↑12.7 | 0.0951 | 1.01 | **LOSS** |
| 940 | LLY | 02-05 14:30 | 02-05 15:25 | 836.23 | 835.72 | 16 | 13379.68 | -8.16 | -0.06% | 0.09R | 55m | market | stagnation | breakout | breakout | neutral | 81.27 | ↓836.79 | 2.6349 | 1.83 | **LOSS** |
| 941 | TSM | 02-05 14:55 | 02-05 16:40 | 206.45 | 208.66 | 68 | 14038.6 | +150.28 | +1.07% | 1.51R | 105m | market | timeout | trend | trend | neutral | 74.89 | ↑205.4 | 0.415 | 1.31 | **WIN** |
| 942 | NVO | 02-06 14:30 | 02-06 16:15 | 86.79 | 88.01 | 134 | 11629.86 | +163.48 | +1.41% | 1.62R | 105m | market | timeout | mixed | breakout | neutral | 63.14 | ↑86.88 | -0.1536 | 1.63 | **WIN** |
| 943 | CAT | 02-06 15:00 | 02-06 15:55 | 366.39 | 365.9 | 38 | 13922.82 | -18.62 | -0.13% | 0.18R | 55m | market | stagnation | trend | trend | neutral | 77.49 | ↑365.34 | 1.6348 | 2.15 | **LOSS** |
| 944 | SNOW | 02-06 15:10 | 02-06 15:30 | 189.39 | 188.63 | 74 | 14014.86 | -56.24 | -0.4% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 61.61 | ↑188.51 | 0.4061 | 1.26 | **LOSS** |
| 945 | MDB | 02-06 15:20 | 02-06 15:45 | 285.08 | 283.1 | 48 | 13683.84 | -95.04 | -0.69% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 75.94 | ↓282.75 | 0.9618 | 1.54 | **LOSS** |
| 946 | NOW | 02-07 14:30 | 02-07 15:00 | 1035.93 | 1026.12 | 13 | 13467.09 | -127.53 | -0.95% | 1.36R | 30m | market | stop-loss | breakout | breakout | neutral | 80.95 | ↓1031.82 | 0.6827 | 1.41 | **LOSS** |
| 947 | ADBE | 02-07 14:35 | 02-07 15:00 | 440.21 | 438.19 | 31 | 13646.51 | -62.62 | -0.46% | 0.66R | 25m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓439.32 | 0.3419 | 1.69 | **LOSS** |
| 948 | GS | 02-07 14:55 | 02-07 15:15 | 663.79 | 659.74 | 21 | 13939.59 | -85.05 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 77.17 | ↓660.66 | 1.1549 | 1.86 | **LOSS** |
| 949 | TSM | 02-10 14:30 | 02-10 14:50 | 209.63 | 207.65 | 67 | 14045.21 | -132.66 | -0.94% | 1.21R | 20m | market | early-reversal | breakout | breakout | neutral | 69.7 | ↓209.12 | 0.195 | 5.04 | **LOSS** |
| 950 | CRWD | 02-10 14:30 | 02-10 16:15 | 427.02 | 430.98 | 32 | 13664.64 | +126.72 | +0.93% | 1.33R | 105m | market | timeout | breakout | breakout | neutral | 65.84 | ↑426.25 | -0.5709 | 1.97 | **WIN** |
| 951 | XOM | 02-10 14:30 | 02-10 15:00 | 110.48 | 110.03 | 126 | 13920.48 | -56.7 | -0.41% | 0.59R | 30m | market | early-reversal | trend | breakout | neutral | 67.06 | ↓110.3 | -0.0512 | 1.73 | **LOSS** |
| 952 | CVX | 02-10 14:30 | 02-10 15:20 | 154.98 | 154.59 | 90 | 13948.2 | -35.1 | -0.25% | 0.36R | 50m | market | stagnation | trend | breakout | neutral | 67.95 | ↓154.69 | -0.0853 | 1.95 | **LOSS** |
| 953 | PANW | 02-10 14:35 | 02-10 14:50 | 198.4 | 196.3 | 70 | 13888 | -147 | -1.06% | 1.41R | 15m | market | stop-loss | breakout | breakout | neutral | 89.28 | ↓196.92 | 0.3446 | 1.66 | **LOSS** |
| 954 | CRM | 02-10 14:45 | 02-10 15:05 | 330.48 | 329.28 | 42 | 13880.16 | -50.4 | -0.36% | 0.47R | 20m | market | early-reversal | breakout | trend | neutral | 78.18 | ↓330.42 | 1.2213 | 1.78 | **LOSS** |
| 955 | DELL | 02-10 14:50 | 02-10 15:40 | 109.8 | 109.59 | 126 | 13834.8 | -26.46 | -0.19% | 0.18R | 50m | market | stagnation | breakout | breakout | neutral | 88.05 | ↑108.94 | 0.6465 | 1.23 | **LOSS** |
| 956 | ORCL | 02-10 15:00 | 02-10 16:05 | 177.92 | 179.3 | 39 | 13877.76 | +53.82 | +0.78% | 1.01R | 65m | market | trim-profit-target | trend | trend | neutral | 79.51 | ↑176.75 | 0.8477 | 1.58 | **WIN** |
| 957 | ORCL | 02-10 15:00 | 02-10 16:45 | 177.92 | 178.39 | 39 | 13877.76 | +18.33 | +0.26% | 0.34R | 105m | market | timeout | trend | trend | neutral | 79.51 | ↑176.75 | 0.8477 | 1.58 | **WIN** |
| 958 | AMZN | 02-10 15:05 | 02-10 16:15 | 232.17 | 232.25 | 60 | 13930.2 | +4.8 | +0.03% | 0.04R | 70m | market | breakeven-stop | trend | trend | neutral | 73.79 | ↑230.8 | 0.5745 | 1.38 | **WIN** |
| 959 | NKE | 02-10 15:05 | 02-10 15:55 | 70.42 | 70.35 | 198 | 13943.16 | -13.86 | -0.1% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.78 | ↑69.98 | 0.1471 | 1.21 | **LOSS** |
| 960 | DDOG | 02-10 15:15 | 02-10 17:00 | 145.73 | 147.27 | 95 | 13844.35 | +146.3 | +1.06% | 0.92R | 105m | market | timeout | trend | trend | neutral | 76.99 | ↑145.47 | 0.8971 | 1.85 | **WIN** |
| 961 | IBM | 02-11 14:35 | 02-11 14:55 | 252.77 | 251.12 | 55 | 13902.35 | -90.75 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | neutral | 80.5 | ↓252.07 | 0.6369 | 1.77 | **LOSS** |
| 962 | ARM | 02-11 14:55 | 02-11 15:15 | 162.71 | 160.61 | 47 | 7647.37 | -98.7 | -1.29% | 1.25R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 66.82 | ↓161.69 | 0.2506 | 2.5 | **LOSS** |
| 963 | AAPL | 02-11 15:00 | 02-11 16:05 | 231.23 | 233.64 | 30 | 13873.8 | +72.3 | +1.04% | 1.08R | 65m | market | trim-profit-target | trend | trend | neutral | 75.07 | ↑230.4 | 0.5416 | 1.66 | **WIN** |
| 964 | AAPL | 02-11 15:00 | 02-11 16:45 | 231.23 | 234.83 | 30 | 13873.8 | +108 | +1.56% | 1.63R | 105m | market | timeout | trend | trend | neutral | 75.07 | ↑230.4 | 0.5416 | 1.66 | **WIN** |
| 965 | TSLA | 02-12 14:40 | 02-12 15:05 | 337.5 | 333.84 | 41 | 13837.5 | -150.06 | -1.08% | 0.65R | 25m | market | early-reversal | breakout | breakout | neutral | 79.34 | ↓333.69 | 0.5165 | 1.46 | **LOSS** |
| 966 | UNH | 02-12 14:45 | 02-12 14:55 | 541.24 | 535.06 | 25 | 13531 | -154.5 | -1.14% | 1.33R | 10m | market | stop-loss | breakout | breakout | neutral | 73.11 | ↓537.23 | 0.8001 | 2.71 | **LOSS** |
| 967 | PLTR | 02-12 14:50 | 02-12 15:45 | 115.21 | 115.14 | 67 | 7719.07 | -4.69 | -0.06% | 0.03R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 59.36 | ↑113.69 | 0.1317 | 2.44 | **LOSS** |
| 968 | GE | 02-12 14:55 | 02-12 15:20 | 210.55 | 209.76 | 66 | 13896.3 | -52.14 | -0.38% | 0.54R | 25m | market | early-reversal | trend | breakout | neutral | 63.69 | ↑209.02 | 0.1321 | 3.02 | **LOSS** |
| 969 | RIVN | 02-12 14:55 | 02-12 15:15 | 12.63 | 12.48 | 1104 | 13943.52 | -165.6 | -1.19% | 0.84R | 20m | market | early-reversal | trend | trend | neutral | 78.08 | ↓12.53 | 0.0039 | 2.03 | **LOSS** |
| 970 | ABNB | 02-12 15:00 | 02-12 16:45 | 136.39 | 138.05 | 102 | 13911.78 | +169.32 | +1.22% | 1.37R | 105m | market | timeout | trend | trend | neutral | 67.02 | ↑135.41 | 0.3016 | 1.02 | **WIN** |
| 971 | NVDA | 02-13 14:30 | 02-13 16:00 | 133.11 | 135.76 | 52 | 13843.44 | +137.8 | +1.99% | 2.4R | 90m | market | trim-profit-target | trend | trend | neutral | 67.49 | ↑132.44 | 0.325 | 6.43 | **WIN** |
| 972 | NVDA | 02-13 14:30 | 02-13 16:15 | 133.11 | 135.75 | 52 | 13843.44 | +137.28 | +1.98% | 2.39R | 105m | market | timeout | trend | trend | neutral | 67.49 | ↑132.44 | 0.325 | 6.43 | **WIN** |
| 973 | QCOM | 02-13 14:30 | 02-13 14:50 | 172.35 | 171.29 | 80 | 13788 | -84.8 | -0.62% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 75.15 | ↓171.53 | 0.3132 | 1.49 | **LOSS** |
| 974 | ELF | 02-13 14:30 | 02-13 14:45 | 76.46 | 76.19 | 182 | 13915.72 | -49.14 | -0.35% | 0.28R | 15m | market | trailing-stop | trend | trend | neutral | 64.12 | ↓76.33 | 0.5501 | 1.48 | **LOSS** |
| 975 | PLTR | 02-13 15:20 | 02-13 16:10 | 118.11 | 117.61 | 65 | 7677.15 | -32.5 | -0.42% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 55.68 | ↑116.53 | 0.018 | 1.13 | **LOSS** |
| 976 | AMD | 02-14 14:40 | 02-14 15:15 | 114.06 | 113.18 | 121 | 13801.26 | -106.48 | -0.77% | 0.88R | 35m | market | early-reversal | breakout | breakout | neutral | 90.79 | ↓113.62 | 0.4469 | 1.87 | **LOSS** |
| 977 | AAPL | 02-14 14:45 | 02-14 15:40 | 243.85 | 243.55 | 57 | 13899.45 | -17.1 | -0.12% | 0.17R | 55m | market | stagnation | trend | trend | neutral | 73.29 | ↓242.96 | 0.32 | 2.28 | **LOSS** |
| 978 | JPM | 02-14 14:55 | 02-14 15:15 | 279.31 | 278.05 | 49 | 13686.19 | -61.74 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 75.56 | ↓278.34 | 0.9048 | 1 | **LOSS** |
| 979 | AMAT | 02-18 14:30 | 02-18 14:45 | 173.09 | 169.39 | 75 | 12981.75 | -277.5 | -2.14% | 2.06R | 15m | market | stop-loss | breakout | breakout | neutral | 68.97 | ↓172.71 | -0.4061 | 1.66 | **LOSS** |
| 980 | TGT | 02-18 14:45 | 02-18 15:05 | 129.81 | 129.21 | 107 | 13889.67 | -64.2 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 77.43 | ↑129.05 | 0.2816 | 1.95 | **LOSS** |
| 981 | CELH | 02-18 14:45 | 02-18 16:30 | 22.72 | 23.13 | 613 | 13927.36 | +251.33 | +1.8% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 60 | ↑22.63 | 0.0453 | 2 | **WIN** |
| 982 | SMCI | 02-18 15:05 | 02-18 15:30 | 54.61 | 54.14 | 257 | 14034.77 | -120.79 | -0.86% | 0.43R | 25m | market | early-reversal | breakout | trend | neutral | 78.34 | ↑53.51 | 2.0127 | 1.08 | **LOSS** |
| 983 | LRCX | 02-18 15:05 | 02-18 16:50 | 84.97 | 86.03 | 165 | 14020.05 | +174.9 | +1.25% | 0.69R | 105m | market | timeout | breakout | trend | neutral | 69.09 | ↑84.54 | 0.4882 | 2.73 | **WIN** |
| 984 | INTC | 02-18 15:10 | 02-18 16:05 | 25.92 | 25.9 | 272 | 7050.24 | -5.44 | -0.08% | 0.04R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 78.52 | ↑25.52 | 0.6234 | 1.21 | **LOSS** |
| 985 | LMT | 02-19 15:00 | 02-19 15:45 | 435.55 | 434.21 | 32 | 13937.6 | -42.88 | -0.31% | 0.44R | 45m | market | early-reversal | trend | trend | neutral | 74.85 | ↓433.04 | 1.092 | 1.13 | **LOSS** |
| 986 | TGT | 02-19 15:10 | 02-19 15:45 | 131.24 | 130.82 | 106 | 13911.44 | -44.52 | -0.32% | 0.46R | 35m | market | early-reversal | trend | trend | neutral | 72.14 | ↓130.57 | 0.2354 | 2 | **LOSS** |
| 987 | LLY | 02-20 15:25 | 02-20 15:45 | 878 | 875.25 | 15 | 13170 | -41.25 | -0.31% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 66.93 | ↑874.38 | 2.9221 | 1.19 | **LOSS** |
| 988 | DELL | 02-21 15:00 | 02-21 15:20 | 120.93 | 119.86 | 115 | 13906.95 | -123.05 | -0.88% | 1.05R | 20m | market | early-reversal | trend | trend | neutral | 65.42 | ↓120.65 | 0.3571 | 1.14 | **LOSS** |
| 989 | BA | 02-24 14:40 | 02-24 14:50 | 179.43 | 177.79 | 78 | 13995.54 | -127.92 | -0.91% | 1.25R | 10m | market | stop-loss | trend | breakout | neutral | 77.07 | ↓178.58 | 0.4755 | 1.44 | **LOSS** |
| 990 | AAPL | 02-24 14:55 | 02-24 15:35 | 248.19 | 246.39 | 56 | 13898.64 | -100.8 | -0.73% | 0.78R | 40m | market | early-reversal | trend | trend | neutral | 72.78 | ↓246.36 | 0.1914 | 1.94 | **LOSS** |
| 991 | HD | 02-25 14:45 | 02-25 16:30 | 394.22 | 394.84 | 35 | 13797.7 | +21.7 | +0.16% | 0.11R | 105m | market | timeout | breakout | breakout | neutral | 81.32 | ↑391.33 | 1.8285 | 1.97 | **WIN** |
| 992 | COST | 02-25 15:25 | 02-25 16:15 | 1051.62 | 1050.71 | 13 | 13671.06 | -11.83 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 68.23 | ↑1045.08 | 3.7087 | 1.74 | **LOSS** |
| 993 | AVGO | 02-26 14:30 | 02-26 16:15 | 207.05 | 212.22 | 62 | 12837.1 | +320.54 | +2.5% | 2.14R | 105m | market | profit-target | breakout | trend | neutral | 66.92 | ↑206.99 | 0.0078 | 1.04 | **WIN** |
| 994 | NFLX | 02-26 14:30 | 02-26 15:35 | 984.49 | 993.92 | 7 | 13782.86 | +66.01 | +0.96% | 1.37R | 65m | market | trim-profit-target | trend | trend | neutral | 68.17 | ↑981.92 | 1.6469 | 2.91 | **WIN** |
| 995 | NFLX | 02-26 14:30 | 02-26 16:20 | 984.49 | 997.45 | 7 | 13782.86 | +90.72 | +1.32% | 1.89R | 110m | market | timeout | trend | trend | neutral | 68.17 | ↑981.92 | 1.6469 | 2.91 | **WIN** |
| 996 | NOW | 02-26 14:30 | 02-26 15:30 | 930.73 | 942.73 | 7 | 13030.22 | +84 | +1.29% | 1.84R | 60m | market | trim-profit-target | trend | trend | neutral | 68.81 | ↑930.46 | 2.5105 | 3.95 | **WIN** |
| 997 | NOW | 02-26 14:30 | 02-26 16:15 | 930.73 | 948.15 | 7 | 13030.22 | +121.94 | +1.87% | 2.67R | 105m | market | timeout | trend | trend | neutral | 68.81 | ↑930.46 | 2.5105 | 3.95 | **WIN** |
| 998 | WMT | 02-26 14:30 | 02-26 14:55 | 98.27 | 97.73 | 142 | 13954.34 | -76.68 | -0.55% | 0.79R | 25m | market | early-reversal | trend | trend | neutral | 76.5 | ↓97.96 | 0.1627 | 1.51 | **LOSS** |
| 999 | CRM | 02-26 14:35 | 02-26 16:05 | 310.82 | 310.84 | 45 | 13986.9 | +0.9 | +0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 79.46 | ↓310.64 | 0.5488 | 2.56 | **WIN** |
| 1000 | TSM | 02-26 14:35 | 02-26 16:20 | 193.37 | 195.08 | 72 | 13922.64 | +123.12 | +0.88% | 0.88R | 105m | market | timeout | breakout | breakout | neutral | 81.03 | ↑192.61 | 0.4355 | 1.17 | **WIN** |

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

- ⚠️ **Profit factor 0.7 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:35:27.057Z*
