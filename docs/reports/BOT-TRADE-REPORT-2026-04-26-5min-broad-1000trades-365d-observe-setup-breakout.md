# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:37:31.875Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** none | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $2854.18 (-2.85%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 33.2% (332W / 668L) |
| Net P&L | $-2854.18 (-2.85%) |
| Gross profit | $53775.69 |
| Gross loss | $56629.87 |
| Profit factor | 0.95 |
| Avg win | $161.97 |
| Avg loss | $84.78 |
| Payoff ratio | 1.91:1 |
| Expectancy | $-2.85 / trade |
| Max drawdown | 8.71% |
| Sharpe ratio (ann.) | -0.52 |
| Trades / active day | 6.8 |
| Avg confidence | 97.93% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.81R |
| Starting equity | $100,000 |
| Ending equity | $97,145.82 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 768 | 33.85% | $-2547.72 | $-3.32 |
| Mid  10:30–11:30 | 133 | 30.08% | $-1023.06 | $-7.69 |
| Noon 11:30–13:00 | 65 | 33.85% | $+706.61 | $10.87 |
| PM   13:00–14:00 | 34 | 29.41% | $+9.99 | $0.29 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| COIN | 32 | 15 | 46.88% | $+1366.73 | $+42.71 | 1.58 | eligible |
| SMCI | 31 | 11 | 35.48% | $+1021.79 | $+32.96 | 1.43 | throttle |
| PLTR | 39 | 17 | 43.59% | $+733.17 | $+18.8 | 1.32 | eligible |
| MRVL | 26 | 10 | 38.46% | $+696.6 | $+26.79 | 1.54 | throttle |
| TSM | 19 | 8 | 42.11% | $+672.97 | $+35.42 | 1.98 | eligible |
| INTC | 29 | 11 | 37.93% | $+628.41 | $+21.67 | 1.35 | throttle |
| NVDA | 20 | 9 | 45% | $+614.35 | $+30.72 | 1.78 | eligible |
| AMAT | 12 | 7 | 58.33% | $+582.99 | $+48.58 | 2.98 | eligible |
| SHOP | 21 | 10 | 47.62% | $+566.34 | $+26.97 | 1.74 | eligible |
| RIVN | 37 | 14 | 37.84% | $+457.55 | $+12.37 | 1.16 | throttle |
| TSLA | 26 | 9 | 34.62% | $+355.32 | $+13.67 | 1.23 | throttle |
| HD | 5 | 2 | 40% | $+326.63 | $+65.33 | 6.13 | eligible |
| GS | 13 | 7 | 53.85% | $+325.94 | $+25.07 | 1.83 | eligible |
| TGT | 12 | 5 | 41.67% | $+313.43 | $+26.12 | 1.57 | eligible |
| ORCL | 21 | 8 | 38.1% | $+290.24 | $+13.82 | 1.21 | throttle |
| ADP | 3 | 3 | 100% | $+284.86 | $+94.95 | ∞ | watch |
| TXN | 7 | 4 | 57.14% | $+199.04 | $+28.43 | 2.23 | eligible |
| QCOM | 9 | 3 | 33.33% | $+176.5 | $+19.61 | 1.58 | throttle |
| LOW | 2 | 1 | 50% | $+175.64 | $+87.82 | 17.26 | watch |
| UNH | 19 | 7 | 36.84% | $+142.44 | $+7.5 | 1.13 | throttle |
| BA | 17 | 7 | 41.18% | $+136.58 | $+8.03 | 1.19 | eligible |
| NFLX | 12 | 4 | 33.33% | $+124.72 | $+10.39 | 1.29 | throttle |
| COST | 6 | 2 | 33.33% | $+106.01 | $+17.67 | 1.98 | throttle |
| GOOGL | 20 | 8 | 40% | $+100.59 | $+5.03 | 1.1 | eligible |
| SNOW | 20 | 7 | 35% | $+88.82 | $+4.44 | 1.06 | throttle |
| ASML | 12 | 4 | 33.33% | $-13.05 | $-1.09 | 0.96 | throttle |
| V | 4 | 1 | 25% | $-18.64 | $-4.66 | 0.76 | watch |
| AAPL | 14 | 5 | 35.71% | $-25 | $-1.79 | 0.96 | throttle |
| MA | 4 | 1 | 25% | $-37.49 | $-9.37 | 0.8 | watch |
| MCD | 2 | 0 | 0% | $-38.19 | $-19.09 | 0 | watch |
| AMD | 28 | 10 | 35.71% | $-44.11 | $-1.58 | 0.98 | throttle |
| WMT | 5 | 1 | 20% | $-52 | $-10.4 | 0.78 | throttle |
| LLY | 15 | 7 | 46.67% | $-61.45 | $-4.1 | 0.92 | throttle |
| MU | 24 | 10 | 41.67% | $-63.16 | $-2.63 | 0.96 | throttle |
| NVO | 18 | 6 | 33.33% | $-65.36 | $-3.63 | 0.92 | throttle |
| NET | 19 | 6 | 31.58% | $-70.34 | $-3.7 | 0.95 | throttle |
| DDOG | 14 | 5 | 35.71% | $-89.92 | $-6.42 | 0.91 | throttle |
| DIS | 5 | 2 | 40% | $-93.95 | $-18.79 | 0.73 | throttle |
| IBM | 9 | 2 | 22.22% | $-96.36 | $-10.71 | 0.52 | throttle |
| JPM | 10 | 4 | 40% | $-110.82 | $-11.08 | 0.74 | throttle |
| NKE | 16 | 6 | 37.5% | $-139.45 | $-8.72 | 0.84 | throttle |
| AMZN | 11 | 4 | 36.36% | $-149.74 | $-13.61 | 0.67 | throttle |
| LRCX | 11 | 3 | 27.27% | $-162.9 | $-14.81 | 0.71 | throttle |
| SBUX | 13 | 4 | 30.77% | $-169.88 | $-13.07 | 0.72 | throttle |
| KLAC | 11 | 3 | 27.27% | $-177.86 | $-16.17 | 0.68 | throttle |
| PYPL | 19 | 6 | 31.58% | $-200.34 | $-10.54 | 0.79 | throttle |
| BAC | 6 | 1 | 16.67% | $-224.57 | $-37.43 | 0.35 | throttle |
| DELL | 15 | 4 | 26.67% | $-233.88 | $-15.59 | 0.74 | throttle |
| MSFT | 8 | 3 | 37.5% | $-239.2 | $-29.9 | 0.34 | throttle |
| XOM | 5 | 1 | 20% | $-241.24 | $-48.25 | 0.17 | throttle |
| CVX | 5 | 0 | 0% | $-306.93 | $-61.39 | 0 | throttle |
| LMT | 4 | 0 | 0% | $-306.97 | $-76.74 | 0 | watch |
| CRM | 13 | 3 | 23.08% | $-353.67 | $-27.21 | 0.47 | throttle |
| ABNB | 8 | 0 | 0% | $-382.47 | $-47.81 | 0 | throttle |
| MDB | 16 | 4 | 25% | $-412.64 | $-25.79 | 0.71 | throttle |
| GE | 11 | 2 | 18.18% | $-419.97 | $-38.18 | 0.35 | throttle |
| META | 20 | 5 | 25% | $-451.97 | $-22.6 | 0.52 | throttle |
| INTU | 5 | 0 | 0% | $-458.54 | $-91.71 | 0 | throttle |
| PANW | 17 | 5 | 29.41% | $-459.8 | $-27.05 | 0.5 | throttle |
| NOW | 9 | 1 | 11.11% | $-506.01 | $-56.22 | 0.09 | throttle |
| HPE | 8 | 2 | 25% | $-518.27 | $-64.78 | 0.22 | throttle |
| AVGO | 20 | 4 | 20% | $-556.39 | $-27.82 | 0.54 | throttle |
| UBER | 18 | 4 | 22.22% | $-594.03 | $-33 | 0.49 | throttle |
| CAT | 11 | 1 | 9.09% | $-652.84 | $-59.35 | 0.08 | throttle |
| ADBE | 10 | 1 | 10% | $-669.54 | $-66.95 | 0.16 | throttle |
| ARM | 20 | 5 | 25% | $-676.19 | $-33.81 | 0.48 | throttle |
| ELF | 17 | 3 | 17.65% | $-733.83 | $-43.17 | 0.43 | throttle |
| CRWD | 15 | 2 | 13.33% | $-762.87 | $-50.86 | 0.21 | throttle |
| CELH | 17 | 2 | 11.76% | $-1300.01 | $-76.47 | 0.18 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 1000 | 332 | 33.2% | $-2854.18 | $-2.85 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 43 | 17 | 39.53% | $+817.59 | $+19.01 |
| neutral | 179 | 59 | 32.96% | $+471.29 | $+2.63 |
| thinChop | 9 | 2 | 22.22% | $-343.78 | $-38.2 |
| extendedBreakout | 125 | 36 | 28.8% | $-1657.97 | $-13.26 |
| falseBreakoutProne | 644 | 218 | 33.85% | $-2141.31 | $-3.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | AMAT | 5 | 4.36 | $+40.58 | 7 | 2.62 | $+54.3 | 0.23% | 2.03 | promote |
| Symbol | QCOM | 6 | 1.31 | $+13.5 | 3 | 3.41 | $+31.83 | 0.04% | 1.8 | promote |
| Symbol | SHOP | 13 | 1.74 | $+25.27 | 8 | 1.74 | $+29.74 | 0.18% | 1.32 | promote |
| Symbol | NVDA | 10 | 1.89 | $+33.24 | 10 | 1.67 | $+28.19 | 0.34% | 1.29 | promote |
| Symbol | TSM | 7 | 3.37 | $+51.57 | 12 | 1.58 | $+26 | 0.27% | 1.23 | promote |
| Symbol | TXN | 6 | 1.88 | $+23.79 | 1 | ∞ | $+56.32 | 0% | ∞ | watch |
| Symbol | TGT | 8 | 1.92 | $+31.56 | 4 | 1.22 | $+15.25 | 0.17% | 1.02 | watch |
| Symbol | SMCI | 19 | 1.71 | $+52.52 | 12 | 1.02 | $+1.99 | 0.56% | 0.87 | watch |
| Symbol | PLTR | 22 | 1.88 | $+51.73 | 17 | 0.59 | $-23.82 | 0.41% | 0.44 | watch |
| Symbol | INTC | 21 | 1.75 | $+41.52 | 8 | 0.61 | $-30.45 | 0.43% | 0.5 | watch |
| Symbol | BA | 13 | 1.44 | $+19.92 | 4 | 0.16 | $-30.59 | 0.15% | 0.05 | watch |
| Symbol | JPM | 5 | 1.42 | $+9.55 | 5 | 0.48 | $-31.72 | 0.3% | 0.37 | watch |
| Symbol | GS | 7 | 10.19 | $+77.99 | 6 | 0.34 | $-36.66 | 0.33% | 0.25 | watch |
| Symbol | MRVL | 18 | 2.59 | $+60 | 8 | 0.37 | $-47.92 | 0.56% | 0.28 | watch |
| Symbol | NET | 13 | 1.33 | $+19.35 | 6 | 0.43 | $-53.65 | 0.57% | 0.37 | watch |
| Symbol | ORCL | 13 | 2.27 | $+56.2 | 8 | 0.44 | $-55.04 | 0.53% | 0.37 | watch |
| Symbol | GOOGL | 12 | 2.36 | $+48.31 | 8 | 0.16 | $-59.9 | 0.57% | 0.12 | watch |
| Symbol | MU | 17 | 2.59 | $+53.46 | 7 | 0 | $-138.85 | 0.97% | 0 | watch |
| Symbol | COIN | 18 | 0.74 | $-25.73 | 14 | 3.95 | $+130.7 | 0.29% | 3.39 | reject |
| Symbol | TSLA | 10 | 0.17 | $-89.45 | 16 | 3.8 | $+78.11 | 0.17% | 2.84 | reject |
| Symbol | SNOW | 9 | 0.39 | $-46.43 | 11 | 1.7 | $+46.06 | 0.26% | 1.44 | reject |
| Time slot | Noon 11:30-13:00 | 31 | 0.59 | $-27.29 | 34 | 2.25 | $+45.66 | 0.39% | 1.7 | reject |
| Symbol | NFLX | 6 | 0.65 | $-17.26 | 6 | 2.58 | $+38.05 | 0.11% | 1.74 | reject |
| Behavior | noisyHighBeta | 14 | 0.88 | $-7.78 | 29 | 1.43 | $+31.95 | 1.28% | 1.22 | reject |
| Symbol | RIVN | 18 | 0.92 | $-6.52 | 19 | 1.41 | $+30.25 | 0.44% | 1.2 | reject |
| Symbol | MDB | 11 | 0.49 | $-50.25 | 5 | 1.42 | $+28.03 | 0.33% | 1.2 | reject |
| Symbol | NKE | 12 | 0.67 | $-18.99 | 4 | 1.56 | $+22.12 | 0.08% | 1.18 | reject |
| Time slot | PM 13:00-14:00 | 15 | 0.61 | $-27.1 | 19 | 1.49 | $+21.92 | 0.47% | 1.15 | reject |
| Symbol | DDOG | 9 | 0.75 | $-20.13 | 5 | 1.38 | $+18.26 | 0.15% | 1.08 | reject |
| Symbol | KLAC | 5 | 0.21 | $-37.71 | 6 | 1.03 | $+1.78 | 0.24% | 0.82 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-5596.37 | 0.9 |
| +3 bps/side | $-11081.04 | 0.82 |
| +5 bps/side | $-16565.65 | 0.75 |
| +10 bps/side | $-30277.27 | 0.6 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 407 |
| timeout | 246 |
| stagnation | 132 |
| stop-loss | 84 |
| breakeven-stop | 55 |
| profit-target | 48 |
| trailing-stop | 28 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 14:20 | 184.89 | 183.83 | 69 | 12757.41 | -73.14 | -0.57% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 3 | RIVN | 04-30 15:45 | 04-30 16:05 | 13.34 | 13.13 | 1049 | 13993.66 | -220.29 | -1.57% | 1.15R | 20m | market | stop-loss | breakout | breakout | neutral | 90.7 | ↑13.01 | 0.0536 | 1.7 | **LOSS** |
| 4 | RIVN | 04-30 17:40 | 04-30 18:00 | 13.51 | 13.34 | 1033 | 13955.83 | -175.61 | -1.26% | 1.25R | 20m | market | stop-loss | breakout | breakout | neutral | 79 | ↑13.11 | 0.06 | 2.52 | **LOSS** |
| 5 | CRWD | 05-01 13:30 | 05-01 13:55 | 431.94 | 429.06 | 32 | 13822.08 | -92.16 | -0.67% | 0.96R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 6 | MSFT | 05-01 13:40 | 05-01 14:00 | 434.46 | 429.69 | 32 | 13902.72 | -152.64 | -1.1% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.46 | ↓433.92 | 10.8676 | 2.55 | **LOSS** |
| 7 | AVGO | 05-01 13:40 | 05-01 15:25 | 197.94 | 198.86 | 65 | 12866.1 | +59.8 | +0.46% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.09 | ↑197.41 | 1.5614 | 3.56 | **WIN** |
| 8 | CAT | 05-01 13:40 | 05-01 14:30 | 316.73 | 316.26 | 44 | 13936.12 | -20.68 | -0.15% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 9 | DELL | 05-01 13:40 | 05-01 14:10 | 94.58 | 94.03 | 137 | 12957.46 | -75.35 | -0.58% | 0.49R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.36 | ↓93.91 | 0.7297 | 1.37 | **LOSS** |
| 10 | ORCL | 05-01 13:45 | 05-01 15:20 | 148.07 | 147.98 | 87 | 12882.09 | -7.83 | -0.06% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.11 | ↑146.73 | 1.7074 | 3.12 | **LOSS** |
| 11 | NOW | 05-01 13:45 | 05-01 15:30 | 967.44 | 971.23 | 14 | 13544.16 | +53.06 | +0.39% | 0.38R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 12 | DDOG | 05-01 13:45 | 05-01 14:10 | 104.91 | 103.96 | 133 | 13953.03 | -126.35 | -0.91% | 0.64R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 96.82 | ↓104.51 | 0.7912 | 1.4 | **LOSS** |
| 13 | NET | 05-01 13:45 | 05-01 14:10 | 124.15 | 123.14 | 112 | 13904.8 | -113.12 | -0.81% | 0.5R | 25m | market | early-reversal | breakout | breakout | neutral | 80.23 | ↓124.03 | 1 | 2.94 | **LOSS** |
| 14 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 15 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 16 | INTC | 05-01 15:30 | 05-01 15:50 | 20.55 | 20.38 | 681 | 13994.55 | -115.77 | -0.83% | 0.75R | 20m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↑20.33 | 0.0628 | 1.45 | **LOSS** |
| 17 | AMD | 05-02 13:30 | 05-02 13:50 | 99.11 | 98.46 | 131 | 12983.41 | -85.15 | -0.66% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.68 | ↓98.89 | -0.2 | 4.18 | **LOSS** |
| 18 | QCOM | 05-02 13:30 | 05-02 13:50 | 138.54 | 137.88 | 93 | 12884.22 | -61.38 | -0.48% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 19 | MU | 05-02 13:30 | 05-02 13:50 | 80.33 | 79.31 | 174 | 13977.42 | -177.48 | -1.27% | 1.13R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 20 | BAC | 05-02 13:30 | 05-02 13:50 | 41.03 | 40.75 | 341 | 13991.23 | -95.48 | -0.68% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 21 | COST | 05-02 13:30 | 05-02 14:30 | 1014.3 | 1012.4 | 13 | 13185.9 | -24.7 | -0.19% | 0.27R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.19 | ↓1013.58 | 1.0251 | 1.56 | **LOSS** |
| 22 | V | 05-02 13:30 | 05-02 14:00 | 349.39 | 348.13 | 37 | 12927.43 | -46.62 | -0.36% | 0.44R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 23 | CRM | 05-02 13:35 | 05-02 14:40 | 274.03 | 273.85 | 51 | 13975.53 | -9.18 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 63.96 | ↓273.42 | 0.0846 | 1.78 | **LOSS** |
| 24 | ORCL | 05-02 13:35 | 05-02 15:20 | 150.35 | 151.08 | 86 | 12930.1 | +62.78 | +0.49% | 0.5R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 25 | UBER | 05-02 13:35 | 05-02 15:20 | 83.06 | 84.22 | 168 | 13954.08 | +194.88 | +1.4% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.99 | ↑82.61 | 0.2144 | 1.45 | **WIN** |
| 26 | CAT | 05-02 13:35 | 05-02 13:55 | 321.91 | 319.92 | 43 | 13842.13 | -85.57 | -0.62% | 0.79R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 27 | LMT | 05-02 13:35 | 05-02 14:35 | 488.67 | 487.66 | 28 | 13682.76 | -28.28 | -0.21% | 0.3R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.17 | ↓487.17 | 2.1118 | 1.82 | **LOSS** |
| 28 | HD | 05-02 13:35 | 05-02 14:00 | 364.83 | 363.44 | 38 | 13863.54 | -52.82 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 29 | PLTR | 05-02 13:40 | 05-02 15:25 | 120.89 | 121.87 | 115 | 13902.35 | +112.7 | +0.81% | 0.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.82 | ↑120.31 | 0.4497 | 4.08 | **WIN** |
| 30 | NOW | 05-02 13:40 | 05-02 14:35 | 984.61 | 976.55 | 14 | 13784.54 | -112.84 | -0.82% | 0.75R | 55m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.34 | ↓980.72 | 1.7513 | 1.42 | **LOSS** |
| 31 | IBM | 05-02 13:40 | 05-02 15:25 | 243.65 | 244.01 | 57 | 13888.05 | +20.52 | +0.15% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.98 | ↑243.37 | 0.8439 | 1.31 | **WIN** |
| 32 | WMT | 05-02 13:45 | 05-02 14:35 | 99.07 | 98.86 | 141 | 13968.87 | -29.61 | -0.21% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.07 | ↓98.63 | 0.3215 | 1.32 | **LOSS** |
| 33 | MSFT | 05-02 13:50 | 05-02 14:40 | 436.72 | 435.55 | 32 | 13975.04 | -37.44 | -0.27% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 34 | META | 05-02 14:05 | 05-02 15:50 | 590.81 | 597.99 | 23 | 13588.63 | +165.14 | +1.22% | 0.81R | 105m | market | timeout | breakout | breakout | neutral | 67.98 | ↑584 | 2.6409 | 1.25 | **WIN** |
| 35 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 72 | 13850.64 | -52.56 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 36 | AMD | 05-05 13:35 | 05-05 14:30 | 100.58 | 100.31 | 127 | 12773.66 | -34.29 | -0.27% | 0.27R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 37 | NOW | 05-05 13:55 | 05-05 14:20 | 991.57 | 985.66 | 14 | 13881.98 | -82.74 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 38 | CELH | 05-06 13:30 | 05-06 13:35 | 34.78 | 32.56 | 370 | 12868.6 | -821.4 | -6.38% | 3.19R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 53.83 | ↓34.4 | -0.1172 | 3.69 | **LOSS** |
| 39 | DDOG | 05-06 14:40 | 05-06 16:25 | 106.3 | 106.77 | 131 | 13925.3 | +61.57 | +0.44% | 0.23R | 105m | market | timeout | breakout | breakout | neutral | 77.53 | ↑103.36 | -0.378 | 1.12 | **WIN** |
| 40 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 74 | 13885.36 | +43.66 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 41 | PLTR | 05-07 13:35 | 05-07 14:25 | 111.05 | 110.75 | 116 | 12881.8 | -34.8 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.66 | ↑109.39 | 0.0881 | 2.76 | **LOSS** |
| 42 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 43 | NKE | 05-07 13:35 | 05-07 15:10 | 58.01 | 58.05 | 241 | 13980.41 | +9.64 | +0.07% | 0.1R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 44 | RIVN | 05-07 13:35 | 05-07 13:55 | 13.64 | 13.44 | 942 | 12848.88 | -188.4 | -1.47% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.43 | ↓13.35 | 0.0225 | 1.69 | **LOSS** |
| 45 | DIS | 05-07 13:40 | 05-07 14:00 | 102.17 | 100.79 | 137 | 13997.29 | -189.06 | -1.35% | 0.68R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.06 | ↓101.44 | 2.2882 | 2.62 | **LOSS** |
| 46 | NVO | 05-07 13:45 | 05-07 14:35 | 68.74 | 68.35 | 189 | 12991.86 | -73.71 | -0.57% | 0.35R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.89 | ↓68.58 | 0.4826 | 1.91 | **LOSS** |
| 47 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.45 | 55.08 | 252 | 13973.4 | -93.24 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 48 | AMD | 05-08 13:35 | 05-08 14:25 | 103.84 | 103.6 | 134 | 13914.56 | -32.16 | -0.23% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.36 | ↓103.31 | 1.2511 | 1.96 | **LOSS** |
| 49 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 50 | PLTR | 05-08 13:40 | 05-08 15:25 | 115.79 | 117.88 | 112 | 12968.48 | +234.08 | +1.8% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.5 | ↑114.31 | 1.5125 | 2.37 | **WIN** |
| 51 | PYPL | 05-08 13:40 | 05-08 14:45 | 69.74 | 69.66 | 200 | 13948 | -16 | -0.11% | 0.11R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 52 | XOM | 05-08 13:40 | 05-08 14:10 | 106.28 | 105.67 | 131 | 13922.68 | -79.91 | -0.57% | 0.74R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 53 | GE | 05-08 13:40 | 05-08 14:35 | 212.97 | 212.74 | 65 | 13843.05 | -14.95 | -0.11% | 0.14R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.61 | ↑212.15 | 0.4951 | 1.58 | **LOSS** |
| 54 | ELF | 05-08 14:25 | 05-08 14:55 | 68.07 | 67.55 | 205 | 13954.35 | -106.6 | -0.76% | 0.72R | 30m | market | early-reversal | breakout | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 55 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 56 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 57 | AMD | 05-08 15:40 | 05-08 16:25 | 104.11 | 103.72 | 134 | 13950.74 | -52.26 | -0.37% | 0.31R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 59.47 | ↓103.7 | 0.3679 | 1.25 | **LOSS** |
| 58 | RIVN | 05-08 15:40 | 05-08 17:00 | 13.34 | 13.74 | 961 | 12819.74 | +384.4 | +3% | 1.88R | 80m | market | profit-target | breakout | breakout | neutral | 53.57 | ↑13.09 | 0.0816 | 1.6 | **WIN** |
| 59 | MU | 05-08 15:45 | 05-08 17:30 | 85.51 | 85.81 | 163 | 13938.13 | +48.9 | +0.35% | 0.35R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.41 | ↑84.19 | 0.5086 | 2.02 | **WIN** |
| 60 | UBER | 05-09 13:30 | 05-09 13:50 | 84.04 | 83.4 | 154 | 12942.16 | -98.56 | -0.76% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.62 | ↓83.64 | -0.0738 | 1.81 | **LOSS** |
| 61 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 72 | 14002.56 | -77.76 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 62 | SMCI | 05-09 13:35 | 05-09 14:00 | 32.7 | 32.48 | 428 | 13995.6 | -94.16 | -0.67% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.56 | ↓32.57 | 0.0095 | 1.51 | **LOSS** |
| 63 | TXN | 05-09 13:35 | 05-09 13:55 | 171.76 | 170.88 | 75 | 12882 | -66 | -0.51% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.12 | ↓171.21 | 0.6463 | 2.59 | **LOSS** |
| 64 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 65 | COIN | 05-09 13:45 | 05-09 14:05 | 212.76 | 210.15 | 65 | 13829.4 | -169.65 | -1.23% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.46 | ↑207.08 | 0.0494 | 1.49 | **LOSS** |
| 66 | RIVN | 05-09 14:45 | 05-09 15:15 | 14.25 | 14.29 | 980 | 13965 | +39.2 | +0.28% | 0.15R | 30m | market | trailing-stop | breakout | breakout | noisyHighBeta | 67.59 | ↑13.98 | 0.0712 | 1.82 | **WIN** |
| 67 | PANW | 05-12 13:45 | 05-12 15:30 | 190.52 | 191.42 | 67 | 12764.84 | +60.3 | +0.47% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 68 | NKE | 05-12 14:00 | 05-12 14:25 | 63.24 | 62.62 | 221 | 13976.04 | -137.02 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓62.7 | 1.0815 | 1.41 | **LOSS** |
| 69 | COIN | 05-12 14:40 | 05-12 15:00 | 213.01 | 209.55 | 60 | 12780.6 | -207.6 | -1.62% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 56.92 | ↓210.41 | 2.3802 | 2.39 | **LOSS** |
| 70 | ARM | 05-12 16:10 | 05-12 16:30 | 124.72 | 124.17 | 112 | 13968.64 | -61.6 | -0.44% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.27 | ↑122.91 | 0.4147 | 2.75 | **LOSS** |
| 71 | INTC | 05-12 17:35 | 05-12 17:50 | 22.6 | 22.36 | 618 | 13966.8 | -148.32 | -1.06% | 1.38R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 72 | UBER | 05-12 17:40 | 05-12 18:00 | 87.36 | 86.86 | 160 | 13977.6 | -80 | -0.57% | 0.75R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.29 | ↑85.18 | 0.2579 | 2.95 | **LOSS** |
| 73 | AMD | 05-13 13:30 | 05-13 13:50 | 110.23 | 109.7 | 126 | 13888.98 | -66.78 | -0.48% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.01 | ↓109.9 | 0.2104 | 2.2 | **LOSS** |
| 74 | MU | 05-13 13:30 | 05-13 15:15 | 93.88 | 95.74 | 138 | 12955.44 | +256.68 | +1.98% | 2.57R | 105m | market | timeout | breakout | breakout | neutral | 65.77 | ↑93.44 | -0.1274 | 1.27 | **WIN** |
| 75 | TSM | 05-13 13:30 | 05-13 15:15 | 189.87 | 192.63 | 73 | 13860.51 | +201.48 | +1.45% | 2.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 76 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 77 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 78 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 21 | 13640.34 | +186.06 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 79 | NFLX | 05-13 13:35 | 05-13 15:20 | 1128.54 | 1137.39 | 12 | 13542.48 | +106.2 | +0.78% | 1.05R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.1 | ↑1120.51 | 0.5982 | 2.23 | **WIN** |
| 80 | ARM | 05-13 13:35 | 05-13 14:40 | 125.86 | 125.44 | 111 | 13970.46 | -46.62 | -0.33% | 0.43R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 81 | COIN | 05-13 13:35 | 05-13 15:20 | 238.38 | 245.36 | 53 | 12634.14 | +369.94 | +2.93% | 1.47R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 96.92 | ↑236.46 | 6.9211 | 4.45 | **WIN** |
| 82 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 95 | 13855.75 | +186.2 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 83 | CAT | 05-13 13:35 | 05-13 13:55 | 351.7 | 349.52 | 36 | 12661.2 | -78.48 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.35 | ↓350.65 | 1.0052 | 1.12 | **LOSS** |
| 84 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 85 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 86 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.13 | 441.02 | 32 | 13924.16 | +188.48 | +1.35% | 1.93R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 87 | DELL | 05-13 13:50 | 05-13 15:35 | 106.05 | 107.59 | 131 | 13892.55 | +201.74 | +1.45% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 88 | SMCI | 05-13 13:55 | 05-13 14:40 | 36.04 | 37.8 | 388 | 13983.52 | +682.88 | +4.88% | 2.44R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 89.53 | ↑35.38 | 0.5657 | 1.49 | **WIN** |
| 89 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 90 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 610 | 13956.8 | -176.9 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 91 | PLTR | 05-13 14:45 | 05-13 15:45 | 125.01 | 128.46 | 112 | 14001.12 | +386.4 | +2.76% | 1.97R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 65.77 | ↑123 | 1.5757 | 1.67 | **WIN** |
| 92 | AVGO | 05-13 15:00 | 05-13 15:20 | 231.88 | 230.96 | 60 | 13912.8 | -55.2 | -0.4% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.02 | ↑227.92 | 2.7447 | 1.3 | **LOSS** |
| 93 | COIN | 05-14 13:30 | 05-14 13:50 | 261.27 | 257.47 | 53 | 13847.31 | -201.4 | -1.45% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 54.53 | ↓258.97 | 1.311 | 2.61 | **LOSS** |
| 94 | LLY | 05-14 13:30 | 05-14 13:50 | 756.77 | 749.68 | 18 | 13621.86 | -127.62 | -0.94% | 1.34R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 95 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 96 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 91 | 13993.98 | -157.43 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 97 | NVO | 05-14 13:35 | 05-14 13:50 | 66.64 | 65.97 | 209 | 13927.76 | -140.03 | -1.01% | 1.38R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 98 | CELH | 05-14 13:35 | 05-14 14:40 | 38.99 | 38.96 | 330 | 12866.7 | -9.9 | -0.08% | 0.06R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 80.9 | ↓38.74 | 0.2514 | 1.69 | **LOSS** |
| 99 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.19 | 72.92 | 191 | 13979.29 | -51.57 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 100 | BA | 05-14 14:15 | 05-14 15:00 | 207.38 | 205.83 | 67 | 13894.46 | -103.85 | -0.75% | 0.49R | 45m | market | early-reversal | breakout | breakout | neutral | 66.36 | ↓206.41 | 0.5537 | 2.08 | **LOSS** |
| 101 | BA | 05-14 15:45 | 05-14 16:05 | 208.69 | 207.45 | 67 | 13982.23 | -83.08 | -0.59% | 0.59R | 20m | market | early-reversal | trend | breakout | neutral | 52.56 | ↑206.7 | 0.617 | 2.45 | **LOSS** |
| 102 | CELH | 05-14 16:00 | 05-14 16:20 | 39.5 | 39.35 | 351 | 13864.5 | -52.65 | -0.38% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.55 | ↑39.14 | 0.1112 | 1.2 | **LOSS** |
| 103 | SMCI | 05-15 13:30 | 05-15 13:45 | 45.23 | 44.03 | 286 | 12935.78 | -343.2 | -2.65% | 1.33R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 56.34 | ↓44.77 | -0.3135 | 2.34 | **LOSS** |
| 104 | JPM | 05-15 13:40 | 05-15 13:45 | 269.12 | 267.07 | 52 | 13994.24 | -106.6 | -0.76% | 1.09R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 76.67 | ↓268.38 | 0.6217 | 2.74 | **LOSS** |
| 105 | V | 05-15 13:40 | 05-15 14:35 | 361.12 | 360.93 | 38 | 13722.56 | -7.22 | -0.05% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.5 | ↓359.87 | 0.8029 | 4.46 | **LOSS** |
| 106 | ADP | 05-15 13:40 | 05-15 15:25 | 314.09 | 315.41 | 44 | 13819.96 | +58.08 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.29 | ↑312.99 | 1.5099 | 1.22 | **WIN** |
| 107 | SMCI | 05-15 16:45 | 05-15 17:05 | 45.31 | 44.96 | 309 | 14000.79 | -108.15 | -0.77% | 0.45R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 75.08 | ↑43.61 | 0.5857 | 1.26 | **LOSS** |
| 108 | MU | 05-16 13:30 | 05-16 15:15 | 96.43 | 97.42 | 145 | 13982.35 | +143.55 | +1.03% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.53 | ↑96.22 | 0.1541 | 1.16 | **WIN** |
| 109 | COIN | 05-16 13:30 | 05-16 14:05 | 251.86 | 257.93 | 55 | 13852.3 | +333.85 | +2.41% | 1.23R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.23 | ↑251.46 | 0.1892 | 1.63 | **WIN** |
| 110 | SMCI | 05-16 13:30 | 05-16 14:20 | 46.05 | 47.21 | 304 | 13999.2 | +352.64 | +2.52% | 1.29R | 50m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.48 | ↑45.7 | 0.3935 | 4.7 | **WIN** |
| 111 | TGT | 05-16 13:30 | 05-16 15:15 | 97.91 | 98.32 | 142 | 13903.22 | +58.22 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 112 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 113 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 90 | 13965.3 | +118.8 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 114 | LLY | 05-16 13:35 | 05-16 15:20 | 744.36 | 748.04 | 18 | 13398.48 | +66.24 | +0.49% | 0.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 115 | NFLX | 05-16 13:45 | 05-16 14:30 | 1193.72 | 1186.56 | 11 | 13130.92 | -78.76 | -0.6% | 0.86R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 116 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.41 | 437.21 | 32 | 13997.12 | -6.4 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 117 | DELL | 05-16 13:45 | 05-16 14:40 | 112.55 | 112.41 | 124 | 13956.2 | -17.36 | -0.12% | 0.17R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 118 | ADBE | 05-16 13:55 | 05-16 14:15 | 420.4 | 418.5 | 33 | 13873.2 | -62.7 | -0.45% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↑415.86 | 3.7059 | 1.35 | **LOSS** |
| 119 | COIN | 05-16 14:15 | 05-16 14:35 | 262.98 | 260.26 | 53 | 13937.94 | -144.16 | -1.03% | 0.52R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.1 | ↑257.39 | 3.9015 | 1.26 | **LOSS** |
| 120 | COIN | 05-16 15:55 | 05-16 16:15 | 268.16 | 265.51 | 52 | 13944.32 | -137.8 | -0.99% | 0.79R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 76.56 | ↑260.7 | 3.4978 | 1.8 | **LOSS** |
| 121 | UNH | 05-16 16:35 | 05-16 17:05 | 281.98 | 288.87 | 45 | 12689.1 | +310.05 | +2.44% | 1.33R | 30m | market | profit-target | breakout | breakout | noisyHighBeta | 64.26 | ↑276.57 | -0.1336 | 1.97 | **WIN** |
| 122 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 123 | RIVN | 05-19 16:15 | 05-19 16:35 | 16.04 | 15.95 | 871 | 13970.84 | -78.39 | -0.56% | 0.59R | 20m | market | early-reversal | breakout | breakout | neutral | 77.04 | ↑15.63 | 0.1024 | 2.65 | **LOSS** |
| 124 | UNH | 05-19 16:30 | 05-19 17:25 | 314.67 | 314.45 | 44 | 13845.48 | -9.68 | -0.07% | 0.05R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 76.61 | ↑305.22 | 2.7844 | 3.32 | **LOSS** |
| 125 | SMCI | 05-19 17:05 | 05-19 17:25 | 45.73 | 45.54 | 307 | 14039.11 | -58.33 | -0.42% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.65 | ↑45.44 | 0.0211 | 2.11 | **LOSS** |
| 126 | NVO | 05-20 13:40 | 05-20 14:40 | 69.14 | 69.09 | 186 | 12860.04 | -9.3 | -0.07% | 0.06R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 94.03 | ↓69.09 | 0.5109 | 2.82 | **LOSS** |
| 127 | RIVN | 05-20 13:55 | 05-20 14:45 | 16.96 | 16.9 | 823 | 13958.08 | -49.38 | -0.35% | 0.18R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.21 | ↑16.69 | 0.1387 | 1.39 | **LOSS** |
| 128 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.94 | 43.65 | 294 | 12918.36 | -85.26 | -0.66% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 129 | DELL | 05-21 13:40 | 05-21 14:00 | 115.7 | 114.94 | 111 | 12842.7 | -84.36 | -0.66% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 83.42 | ↓114.5 | 0.108 | 1.17 | **LOSS** |
| 130 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 76 | 12731.52 | +402.04 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 131 | COIN | 05-21 15:05 | 05-21 15:35 | 266.41 | 265.01 | 52 | 13853.32 | -72.8 | -0.53% | 0.44R | 30m | market | early-reversal | breakout | breakout | neutral | 61.31 | ↑262.51 | 0.9156 | 2.2 | **LOSS** |
| 132 | CELH | 05-21 15:35 | 05-21 15:55 | 37.51 | 37.32 | 369 | 13841.19 | -70.11 | -0.51% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.66 | ↑37.08 | -0.1456 | 1.95 | **LOSS** |
| 133 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.59 | 447.39 | 31 | 13875.29 | -6.2 | -0.04% | 0.06R | 65m | market | stagnation | breakout | breakout | neutral | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 134 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 135 | DDOG | 05-22 13:35 | 05-22 14:40 | 115.75 | 115.73 | 120 | 13890 | -2.4 | -0.02% | 0.03R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 67.5 | ↓115.09 | -0.0783 | 1.65 | **LOSS** |
| 136 | SNOW | 05-22 13:35 | 05-22 14:10 | 198.02 | 195.85 | 65 | 12871.3 | -141.05 | -1.1% | 0.55R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 88.83 | ↓196.38 | 3.2399 | 3.05 | **LOSS** |
| 137 | NKE | 05-22 13:35 | 05-22 14:25 | 60.99 | 60.82 | 229 | 13966.71 | -38.93 | -0.28% | 0.34R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.69 | ↓60.64 | -0.0302 | 4.89 | **LOSS** |
| 138 | TGT | 05-22 13:35 | 05-22 15:15 | 94.43 | 94.48 | 148 | 13975.64 | +7.4 | +0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 58.78 | ↓93.74 | 0.1907 | 1.41 | **WIN** |
| 139 | ELF | 05-22 13:35 | 05-22 15:25 | 80.35 | 81.31 | 174 | 13980.9 | +167.04 | +1.19% | 1.21R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 77.6 | ↑80 | 0.0474 | 1.57 | **WIN** |
| 140 | MDB | 05-22 13:45 | 05-22 14:35 | 188.54 | 187.95 | 74 | 13951.96 | -43.66 | -0.31% | 0.25R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.82 | ↓188.33 | 0.1922 | 1.41 | **LOSS** |
| 141 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 229 | 13962.13 | +192.36 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 142 | PLTR | 05-22 13:50 | 05-22 15:35 | 123.52 | 125.85 | 114 | 14081.28 | +265.62 | +1.89% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑122.43 | 0.1249 | 1.77 | **WIN** |
| 143 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 21 | 13467.51 | -45.36 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 144 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 145 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.05 | 122.46 | 113 | 13904.65 | -66.67 | -0.48% | 0.38R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 146 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 147 | INTU | 05-27 13:30 | 05-27 13:45 | 733.66 | 726.5 | 17 | 12472.22 | -121.72 | -0.98% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.5 | ↓730.5 | 1.0404 | 1.38 | **LOSS** |
| 148 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.85 | 161.78 | 87 | 13906.95 | +167.91 | +1.21% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 149 | QCOM | 05-27 13:35 | 05-27 15:20 | 147.38 | 148.86 | 94 | 13853.72 | +139.12 | +1% | 1.08R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.04 | ↑147.11 | 0.2285 | 1.17 | **WIN** |
| 150 | MU | 05-27 13:35 | 05-27 15:20 | 94.65 | 96.07 | 148 | 14008.2 | +210.16 | +1.5% | 1.6R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 72.36 | ↑94.59 | 0.1301 | 1.3 | **WIN** |
| 151 | TSM | 05-27 13:35 | 05-27 15:20 | 194.92 | 195.86 | 71 | 13839.32 | +66.74 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 152 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 153 | GE | 05-27 13:35 | 05-27 15:20 | 236.41 | 240.04 | 59 | 13948.19 | +214.17 | +1.54% | 2.2R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 154 | SBUX | 05-27 13:35 | 05-27 14:10 | 86.19 | 85.74 | 162 | 13962.78 | -72.9 | -0.52% | 0.74R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 155 | NKE | 05-27 13:35 | 05-27 15:20 | 61.13 | 62.17 | 228 | 13937.64 | +237.12 | +1.7% | 2.02R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.78 | ↑61.11 | 0.1357 | 1.57 | **WIN** |
| 156 | DIS | 05-27 13:40 | 05-27 15:25 | 111.1 | 112.1 | 125 | 13887.5 | +125 | +0.9% | 1.29R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 70.72 | ↑110.71 | 0.0835 | 1.89 | **WIN** |
| 157 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.73 | 161.56 | 87 | 13983.51 | +72.21 | +0.52% | 0.67R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 158 | CELH | 05-27 13:40 | 05-27 15:25 | 36.83 | 37.21 | 376 | 13848.08 | +142.88 | +1.03% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.22 | ↑36.56 | 0.1227 | 1.55 | **WIN** |
| 159 | SNOW | 05-27 13:45 | 05-27 14:20 | 205.92 | 204.84 | 67 | 13796.64 | -72.36 | -0.52% | 0.48R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.97 | ↓204.39 | 0.6946 | 1.93 | **LOSS** |
| 160 | MDB | 05-27 13:45 | 05-27 14:55 | 188.84 | 188.48 | 74 | 13974.16 | -26.64 | -0.19% | 0.22R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 70 | ↓188.58 | 0.8834 | 1.35 | **LOSS** |
| 161 | ELF | 05-27 15:25 | 05-27 15:45 | 88.99 | 88.64 | 157 | 13971.43 | -54.95 | -0.39% | 0.35R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.1 | ↑86.86 | 1.2357 | 2.42 | **LOSS** |
| 162 | SNOW | 05-27 16:45 | 05-27 17:05 | 207.56 | 206.87 | 67 | 13906.52 | -46.23 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 80.24 | ↑205.3 | 0.3425 | 4.2 | **LOSS** |
| 163 | META | 05-28 13:30 | 05-28 13:50 | 649.52 | 646.01 | 21 | 13639.92 | -73.71 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.02 | ↓647.61 | 0.5383 | 4.4 | **LOSS** |
| 164 | PLTR | 05-28 13:30 | 05-28 13:55 | 124.91 | 123.28 | 113 | 14114.83 | -184.19 | -1.3% | 1.37R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 165 | UNH | 05-28 13:30 | 05-28 15:15 | 297.36 | 300.96 | 47 | 13975.92 | +169.2 | +1.21% | 1.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 166 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 214 | 13980.62 | -29.96 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 167 | ARM | 05-28 17:10 | 05-28 17:35 | 137.36 | 136.89 | 101 | 13873.36 | -47.47 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 89.73 | ↑135.15 | 0.5002 | 1.28 | **LOSS** |
| 168 | UNH | 05-29 13:35 | 05-29 14:15 | 301.96 | 299.83 | 46 | 13890.16 | -97.98 | -0.71% | 0.84R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 169 | NKE | 05-29 13:35 | 05-29 13:55 | 62.51 | 62.29 | 224 | 14002.24 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.31 | ↓62.35 | 0.0497 | 1.87 | **LOSS** |
| 170 | ELF | 05-30 13:30 | 05-30 13:45 | 114.96 | 112.08 | 112 | 12875.52 | -322.56 | -2.51% | 1.5R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 64.38 | ↓114.22 | 0.3278 | 1.72 | **LOSS** |
| 171 | COST | 05-30 13:35 | 05-30 15:20 | 1029.36 | 1042.12 | 13 | 13381.68 | +165.88 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑1018.28 | 1.9104 | 1.79 | **WIN** |
| 172 | UNH | 05-30 13:50 | 05-30 15:35 | 300.94 | 302.3 | 46 | 13843.24 | +62.56 | +0.45% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 173 | LLY | 05-30 14:00 | 05-30 15:45 | 731.55 | 735.71 | 19 | 13899.45 | +79.04 | +0.57% | 0.79R | 105m | market | timeout | breakout | breakout | neutral | 73.04 | ↑723.06 | 1.4555 | 1.83 | **WIN** |
| 174 | PLTR | 05-30 14:10 | 05-30 15:05 | 126.37 | 131.25 | 111 | 14027.07 | +541.68 | +3.86% | 2.27R | 55m | market | profit-target | breakout | breakout | neutral | 71.23 | ↑124.6 | 0.6822 | 2.16 | **WIN** |
| 175 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 176 | PANW | 06-02 13:30 | 06-02 13:50 | 193.71 | 192.16 | 72 | 13947.12 | -111.6 | -0.8% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 177 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.51 | 466.79 | 29 | 13702.79 | -165.88 | -1.21% | 1.73R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 178 | META | 06-02 13:35 | 06-02 13:55 | 659.55 | 652.58 | 21 | 13850.55 | -146.37 | -1.06% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.08 | ↓653.72 | 3.2668 | 2.03 | **LOSS** |
| 179 | AMD | 06-02 13:35 | 06-02 14:15 | 113.4 | 112.7 | 123 | 13948.2 | -86.1 | -0.62% | 0.65R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.29 | ↓112.74 | 0.6463 | 2.28 | **LOSS** |
| 180 | AVGO | 06-02 13:35 | 06-02 13:55 | 248.6 | 246.46 | 52 | 12927.2 | -111.28 | -0.86% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓247 | 1.9006 | 1.18 | **LOSS** |
| 181 | PLTR | 06-02 13:35 | 06-02 13:45 | 133.98 | 132.08 | 105 | 14067.9 | -199.5 | -1.42% | 1.16R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.42 | ↓133.08 | 1.5619 | 1.85 | **LOSS** |
| 182 | COIN | 06-02 13:35 | 06-02 13:40 | 249.41 | 245.44 | 56 | 13966.96 | -222.32 | -1.59% | 2.21R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 183 | SNOW | 06-02 13:35 | 06-02 13:50 | 209.97 | 206.97 | 66 | 13858.02 | -198 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 184 | MDB | 06-02 13:35 | 06-02 13:40 | 191.29 | 188.29 | 73 | 13964.17 | -219 | -1.57% | 2.24R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 91.83 | ↓190.88 | 1.456 | 2.07 | **LOSS** |
| 185 | XOM | 06-02 13:35 | 06-02 14:00 | 103.25 | 102.78 | 135 | 13938.75 | -63.45 | -0.46% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.3 | ↓103.11 | 0.2555 | 2 | **LOSS** |
| 186 | UNH | 06-02 13:35 | 06-02 13:55 | 312.06 | 306.66 | 41 | 12794.46 | -221.4 | -1.73% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.75 | ↓309.2 | 1.2285 | 6.95 | **LOSS** |
| 187 | ELF | 06-02 17:20 | 06-02 17:50 | 112.66 | 112.15 | 123 | 13857.18 | -62.73 | -0.45% | 0.54R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.96 | ↓112.4 | -0.3135 | 1.27 | **LOSS** |
| 188 | AVGO | 06-03 13:40 | 06-03 15:25 | 251.48 | 255.9 | 55 | 13831.4 | +243.1 | +1.76% | 2.1R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.58 | ↑250.89 | 0.3016 | 2.61 | **WIN** |
| 189 | ARM | 06-03 13:40 | 06-03 15:25 | 128.38 | 129.7 | 108 | 13865.04 | +142.56 | +1.03% | 1.24R | 105m | market | timeout | trend | breakout | neutral | 61.42 | ↑127.89 | 0.1096 | 1.79 | **WIN** |
| 190 | RIVN | 06-03 13:40 | 06-03 14:30 | 14.55 | 14.54 | 890 | 12949.5 | -8.9 | -0.07% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.82 | ↑14.4 | 0.1001 | 1.24 | **LOSS** |
| 191 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 192 | SMCI | 06-03 14:35 | 06-03 16:20 | 42.89 | 43.81 | 327 | 14025.03 | +300.84 | +2.15% | 1.17R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.02 | ↑41.83 | 0.4437 | 1.21 | **WIN** |
| 193 | MRVL | 06-03 14:55 | 06-03 15:15 | 63.46 | 63.01 | 221 | 14024.66 | -99.45 | -0.71% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.86 | ↑62.24 | 0.3042 | 1.36 | **LOSS** |
| 194 | AVGO | 06-04 13:30 | 06-04 14:00 | 261.07 | 258.77 | 53 | 13836.71 | -121.9 | -0.88% | 1.22R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 87.17 | ↓259.87 | 1.0726 | 2.1 | **LOSS** |
| 195 | TSM | 06-04 13:30 | 06-04 14:00 | 202.09 | 200.74 | 69 | 13944.21 | -93.15 | -0.67% | 0.96R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 196 | MDB | 06-04 13:30 | 06-04 15:15 | 195.75 | 198.41 | 71 | 13898.25 | +188.86 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.97 | ↑195.4 | 0.5475 | 2.25 | **WIN** |
| 197 | UNH | 06-04 13:30 | 06-04 13:55 | 305.69 | 303.54 | 45 | 13756.05 | -96.75 | -0.7% | 1R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 198 | LLY | 06-04 13:30 | 06-04 15:15 | 763.28 | 766.14 | 18 | 13739.04 | +51.48 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.16 | ↓760.92 | 1.0651 | 1.86 | **WIN** |
| 199 | TXN | 06-04 13:30 | 06-04 14:00 | 190.13 | 189.57 | 73 | 13879.49 | -40.88 | -0.29% | 0.41R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 200 | META | 06-04 13:35 | 06-04 15:20 | 679.79 | 681.32 | 20 | 13595.8 | +30.6 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.64 | ↑675.82 | 1.0565 | 2.57 | **WIN** |
| 201 | UBER | 06-04 13:35 | 06-04 14:05 | 84.31 | 83.44 | 166 | 13995.46 | -144.42 | -1.03% | 1.45R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.43 | ↓83.86 | 0.1937 | 2.77 | **LOSS** |
| 202 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.62 | 210.98 | 65 | 13820.3 | -106.6 | -0.77% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 203 | DDOG | 06-04 13:40 | 06-04 14:00 | 120.72 | 119.73 | 115 | 13882.8 | -113.85 | -0.82% | 1.15R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 204 | SMCI | 06-04 15:00 | 06-04 15:30 | 44.02 | 43.82 | 320 | 14086.4 | -64 | -0.45% | 0.3R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 56.72 | ↓43.81 | 0.0529 | 1.49 | **LOSS** |
| 205 | MRVL | 06-04 15:05 | 06-04 16:50 | 64.31 | 65.8 | 218 | 14019.58 | +324.82 | +2.32% | 1.98R | 105m | market | timeout | breakout | breakout | neutral | 79.14 | ↑63.22 | 0.2757 | 1.11 | **WIN** |
| 206 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 66 | 13890.36 | -82.5 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 207 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 82 | 13967.06 | -58.22 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 208 | PLTR | 06-05 13:40 | 06-05 14:00 | 132.23 | 130.35 | 106 | 14016.38 | -199.28 | -1.42% | 1.25R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.64 | ↓130.89 | 0.0474 | 2.28 | **LOSS** |
| 209 | MDB | 06-05 13:55 | 06-05 14:30 | 232.64 | 230.21 | 55 | 12795.2 | -133.65 | -1.04% | 0.52R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 90.56 | ↓230.39 | 7.9008 | 1.28 | **LOSS** |
| 210 | NET | 06-05 14:00 | 06-05 15:00 | 174.8 | 179.33 | 80 | 13984 | +362.4 | +2.59% | 2.67R | 60m | market | profit-target | breakout | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 211 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 212 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 213 | META | 06-06 13:30 | 06-06 14:40 | 697.26 | 696.87 | 18 | 12550.68 | -7.02 | -0.06% | 0.06R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 214 | AAPL | 06-06 13:30 | 06-06 13:50 | 205.12 | 204.16 | 62 | 12717.44 | -59.52 | -0.47% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.95 | ↓204.58 | -0.1146 | 2.13 | **LOSS** |
| 215 | MU | 06-06 13:30 | 06-06 15:15 | 109.63 | 110.28 | 118 | 12936.34 | +76.7 | +0.59% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.47 | ↑109.09 | -0.1609 | 1.77 | **WIN** |
| 216 | PYPL | 06-06 13:30 | 06-06 13:50 | 73.47 | 73.13 | 190 | 13959.3 | -64.6 | -0.46% | 0.61R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 65.18 | ↓73.38 | 0.0047 | 2.35 | **LOSS** |
| 217 | JPM | 06-06 13:30 | 06-06 15:15 | 265.14 | 265.79 | 52 | 13787.28 | +33.8 | +0.25% | 0.36R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.37 | ↑264.86 | -0.1276 | 1.75 | **WIN** |
| 218 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 219 | TGT | 06-06 13:30 | 06-06 15:15 | 95.3 | 95.92 | 136 | 12960.8 | +84.32 | +0.65% | 0.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 220 | AMZN | 06-06 13:35 | 06-06 14:25 | 212.15 | 210.98 | 65 | 13789.75 | -76.05 | -0.55% | 0.47R | 50m | market | early-reversal | breakout | breakout | neutral | 63.62 | ↓211.45 | -0.0705 | 2.2 | **LOSS** |
| 221 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 222 | XOM | 06-06 13:35 | 06-06 15:20 | 103.75 | 104.13 | 134 | 13902.5 | +50.92 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 223 | CAT | 06-06 13:35 | 06-06 14:00 | 356.89 | 355.6 | 39 | 13918.71 | -50.31 | -0.36% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.5 | ↓356.13 | 0.6147 | 3.19 | **LOSS** |
| 224 | NVO | 06-06 13:35 | 06-06 15:20 | 74.31 | 74.48 | 187 | 13895.97 | +31.79 | +0.23% | 0.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.73 | ↓74.19 | 0.2439 | 2.63 | **WIN** |
| 225 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 208 | 14000.48 | +422.24 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 226 | ABNB | 06-06 13:40 | 06-06 14:05 | 142.7 | 141.59 | 90 | 12843 | -99.9 | -0.78% | 0.53R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.75 | ↓141.78 | 0.8906 | 2.3 | **LOSS** |
| 227 | PANW | 06-06 13:40 | 06-06 14:25 | 199.73 | 199.09 | 70 | 13981.1 | -44.8 | -0.32% | 0.44R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.26 | ↓199.11 | 0.3282 | 1.34 | **LOSS** |
| 228 | NET | 06-06 13:40 | 06-06 14:05 | 180.77 | 179.57 | 71 | 12834.67 | -85.2 | -0.66% | 0.48R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.41 | ↓178.82 | -0.3706 | 1.46 | **LOSS** |
| 229 | GE | 06-06 13:40 | 06-06 14:00 | 256.88 | 256.1 | 54 | 13871.52 | -42.12 | -0.3% | 0.42R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.73 | ↓255.21 | 0.6662 | 1.5 | **LOSS** |
| 230 | ARM | 06-06 15:05 | 06-06 15:25 | 134.97 | 134.28 | 103 | 13901.91 | -71.07 | -0.51% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 231 | KLAC | 06-09 13:35 | 06-09 14:25 | 823.92 | 823.55 | 16 | 13182.72 | -5.92 | -0.04% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.74 | ↑822.65 | 1.4407 | 1.17 | **LOSS** |
| 232 | CELH | 06-09 13:35 | 06-09 14:25 | 42.14 | 42.12 | 303 | 12768.42 | -6.06 | -0.05% | 0.03R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.65 | ↓42 | 0.2824 | 1.11 | **LOSS** |
| 233 | ORCL | 06-09 13:40 | 06-09 15:25 | 176.72 | 177.4 | 79 | 13960.88 | +53.72 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.66 | ↓175.24 | 0.4223 | 1.33 | **WIN** |
| 234 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 679 | 13933.08 | +142.59 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 235 | TGT | 06-09 13:40 | 06-09 13:45 | 99.19 | 97.77 | 141 | 13985.79 | -200.22 | -1.43% | 2.04R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 236 | UBER | 06-09 13:45 | 06-09 15:05 | 87.44 | 87.33 | 159 | 13902.96 | -17.49 | -0.13% | 0.14R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 237 | MU | 06-09 13:55 | 06-09 15:40 | 110.27 | 110.52 | 127 | 14004.29 | +31.75 | +0.23% | 0.21R | 105m | market | trailing-stop | breakout | breakout | neutral | 64.04 | ↓109.47 | 0.1484 | 1.54 | **WIN** |
| 238 | SMCI | 06-09 14:25 | 06-09 14:50 | 43.26 | 42.9 | 325 | 14059.5 | -117 | -0.83% | 0.49R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 85.71 | ↑42.68 | 0.393 | 1.46 | **LOSS** |
| 239 | BA | 06-09 14:50 | 06-09 15:15 | 215.82 | 215.16 | 64 | 13812.48 | -42.24 | -0.31% | 0.44R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 76.86 | ↑213.75 | 1.44 | 3.15 | **LOSS** |
| 240 | XOM | 06-10 13:30 | 06-10 13:50 | 106.55 | 106.15 | 120 | 12786 | -48 | -0.38% | 0.54R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.37 | ↓106.33 | -0.0398 | 1.25 | **LOSS** |
| 241 | TSM | 06-10 13:35 | 06-10 15:15 | 211.65 | 211.44 | 66 | 13968.9 | -13.86 | -0.1% | 0.14R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.36 | ↓211.23 | 0.7821 | 2.35 | **LOSS** |
| 242 | LLY | 06-10 13:40 | 06-10 15:30 | 786.05 | 794.64 | 17 | 13362.85 | +146.03 | +1.09% | 1.49R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 243 | NVO | 06-10 13:40 | 06-10 15:05 | 77.75 | 79.67 | 165 | 12828.75 | +316.8 | +2.47% | 2.25R | 85m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.51 | ↑77.77 | 0.4269 | 1.56 | **WIN** |
| 244 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.69 | 121.92 | 112 | 13853.28 | -198.24 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 245 | INTC | 06-10 17:00 | 06-10 17:50 | 21.32 | 22.18 | 654 | 13943.28 | +562.44 | +4.03% | 5.76R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 246 | RIVN | 06-11 13:30 | 06-11 13:55 | 14.65 | 14.53 | 884 | 12950.6 | -106.08 | -0.82% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 65.74 | ↓14.67 | 0.0171 | 1.11 | **LOSS** |
| 247 | SBUX | 06-11 13:35 | 06-11 15:20 | 94.03 | 94.64 | 138 | 12976.14 | +84.18 | +0.65% | 0.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 94.98 | ↑93.45 | 0.5126 | 2.05 | **WIN** |
| 248 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 249 | AVGO | 06-11 14:00 | 06-11 15:45 | 249.68 | 250.62 | 56 | 13982.08 | +52.64 | +0.38% | 0.28R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.62 | ↑247.75 | 1.1406 | 1.12 | **WIN** |
| 250 | ORCL | 06-12 13:35 | 06-12 14:30 | 194.6 | 200.82 | 66 | 12843.6 | +410.52 | +3.2% | 1.6R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.33 | ↑192.33 | 3.8358 | 2.56 | **WIN** |
| 251 | CRWD | 06-12 13:40 | 06-12 14:00 | 485.52 | 481.2 | 28 | 13594.56 | -120.96 | -0.89% | 1R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.82 | ↓482.32 | 1.0978 | 3.04 | **LOSS** |
| 252 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.08 | 256.27 | 54 | 13882.32 | -43.74 | -0.32% | 0.32R | 65m | market | early-reversal | breakout | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 253 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.58 | 210.87 | 68 | 13911.44 | +427.72 | +3.07% | 2.62R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 254 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 683 | 14035.65 | -157.09 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 255 | LMT | 06-13 13:35 | 06-13 13:55 | 486.43 | 481.29 | 26 | 12647.18 | -133.64 | -1.06% | 1.34R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 98.1 | ↓481.73 | 2.6569 | 1.69 | **LOSS** |
| 256 | MU | 06-16 13:30 | 06-16 15:15 | 118.58 | 120.68 | 118 | 13992.44 | +247.8 | +1.77% | 1.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 257 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 258 | TXN | 06-16 13:30 | 06-16 15:15 | 197.68 | 199.27 | 56 | 11070.08 | +89.04 | +0.8% | 1.03R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 259 | AMD | 06-16 13:35 | 06-16 14:15 | 120.5 | 124.26 | 115 | 13857.5 | +432.4 | +3.12% | 2.17R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.82 | ↑119.69 | 0.9613 | 2.52 | **WIN** |
| 260 | NFLX | 06-16 13:35 | 06-16 13:55 | 1225.49 | 1221.94 | 11 | 13480.39 | -39.05 | -0.29% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 62.3 | ↑1221.24 | 0.5118 | 2.21 | **LOSS** |
| 261 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.59 | 142.35 | 98 | 14071.82 | -121.52 | -0.86% | 0.55R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 262 | COIN | 06-16 13:35 | 06-16 15:20 | 248.94 | 253.73 | 55 | 13691.7 | +263.45 | +1.92% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.93 | ↑247.5 | 1.6228 | 1.37 | **WIN** |
| 263 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 129 | 13910.07 | +148.35 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 264 | MA | 06-16 13:35 | 06-16 15:10 | 572.36 | 572.16 | 24 | 13736.64 | -4.8 | -0.03% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.16 | ↑569.61 | 1.3516 | 1.19 | **LOSS** |
| 265 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.89 | 93.14 | 152 | 13967.28 | +190 | +1.36% | 1.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 266 | WMT | 06-16 13:40 | 06-16 14:35 | 95.34 | 95.12 | 146 | 13919.64 | -32.12 | -0.23% | 0.33R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 72.52 | ↓95.1 | 0.094 | 1.49 | **LOSS** |
| 267 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.49 | 175.83 | 80 | 13959.2 | +107.2 | +0.77% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 268 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 679 | 14014.56 | +95.06 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 269 | ASML | 06-16 13:50 | 06-16 15:35 | 771.19 | 776.38 | 15 | 11567.85 | +77.85 | +0.67% | 0.96R | 105m | market | timeout | mixed | breakout | falseBreakoutProne | 69.1 | ↑769.38 | -0.9416 | 1.54 | **WIN** |
| 270 | ADBE | 06-16 14:00 | 06-16 14:20 | 404.62 | 399.13 | 34 | 13757.08 | -186.66 | -1.36% | 1.24R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.04 | ↓399.94 | 2.3777 | 1.36 | **LOSS** |
| 271 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 199 | 14107.11 | -71.64 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 272 | AMD | 06-16 14:20 | 06-16 16:05 | 125.11 | 126.93 | 111 | 13887.21 | +202.02 | +1.45% | 0.87R | 105m | market | timeout | breakout | breakout | extendedBreakout | 97.1 | ↑122.36 | 2.3391 | 2.66 | **WIN** |
| 273 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 617 | 12907.64 | -12.34 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 274 | MU | 06-17 13:35 | 06-17 14:40 | 122.27 | 122.08 | 105 | 12838.35 | -19.95 | -0.16% | 0.17R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↓121.29 | 0.3381 | 1.18 | **LOSS** |
| 275 | CVX | 06-17 13:35 | 06-17 15:00 | 148.37 | 148.27 | 86 | 12759.82 | -8.6 | -0.07% | 0.1R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.21 | ↓147.77 | 0.4112 | 1.42 | **LOSS** |
| 276 | ORCL | 06-17 13:45 | 06-17 14:35 | 214.46 | 214 | 60 | 12867.6 | -27.6 | -0.21% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.6 | ↓213.02 | 0.5016 | 1.44 | **LOSS** |
| 277 | ARM | 06-17 13:45 | 06-17 14:40 | 145.39 | 146.49 | 87 | 12648.93 | +95.7 | +0.76% | 0.61R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 75.74 | ↓143.64 | 0.4938 | 1.52 | **WIN** |
| 278 | KLAC | 06-17 13:50 | 06-17 15:35 | 904.08 | 907.72 | 14 | 12657.12 | +50.96 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.69 | ↑896.95 | 2.6145 | 2.48 | **WIN** |
| 279 | DELL | 06-17 13:55 | 06-17 15:40 | 115.5 | 117.44 | 121 | 13975.5 | +234.74 | +1.68% | 2.15R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 280 | CRM | 06-17 14:20 | 06-17 14:40 | 270.12 | 266.99 | 51 | 13776.12 | -159.63 | -1.16% | 1.22R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 81.87 | ↓267.08 | 1.4065 | 2.29 | **LOSS** |
| 281 | GE | 06-17 15:10 | 06-17 15:30 | 238.77 | 236.71 | 58 | 13848.66 | -119.48 | -0.86% | 1.23R | 20m | market | stop-loss | breakout | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 282 | MRVL | 06-17 17:05 | 06-17 17:50 | 70.32 | 70.57 | 186 | 13079.52 | +46.5 | +0.36% | 0.4R | 45m | market | trailing-stop | trend | breakout | falseBreakoutProne | 77.71 | ↓70.03 | -0.1539 | 2.74 | **WIN** |
| 283 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 284 | JPM | 06-18 13:35 | 06-18 15:20 | 273.13 | 274.76 | 51 | 13929.63 | +83.13 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.43 | ↓271.81 | 0.4584 | 1.47 | **WIN** |
| 285 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 286 | MRVL | 06-18 13:50 | 06-18 14:55 | 76.16 | 75.93 | 185 | 14089.6 | -42.55 | -0.3% | 0.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.17 | ↑75.19 | 1.3898 | 2.19 | **LOSS** |
| 287 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 663 | 14022.45 | +192.27 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 288 | AMD | 06-18 14:00 | 06-18 14:50 | 128.82 | 127.76 | 108 | 13912.56 | -114.48 | -0.82% | 0.65R | 50m | market | early-reversal | breakout | breakout | neutral | 63.53 | ↓127.83 | 0.278 | 2.49 | **LOSS** |
| 289 | AVGO | 06-18 14:10 | 06-18 14:50 | 254.58 | 253.28 | 55 | 14001.9 | -71.5 | -0.51% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 67.56 | ↑251.99 | 0.8009 | 1.14 | **LOSS** |
| 290 | CRM | 06-20 13:30 | 06-20 13:50 | 262.21 | 260.67 | 53 | 13897.13 | -81.62 | -0.59% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.75 | ↓261.57 | 0.2649 | 2.17 | **LOSS** |
| 291 | AAPL | 06-20 13:35 | 06-20 13:55 | 200.52 | 199.72 | 69 | 13835.88 | -55.2 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.2 | ↓199.57 | 0.7936 | 2.76 | **LOSS** |
| 292 | AMD | 06-20 13:35 | 06-20 14:15 | 131.72 | 130.62 | 98 | 12908.56 | -107.8 | -0.84% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.04 | ↓130.29 | 0.6851 | 2.57 | **LOSS** |
| 293 | NFLX | 06-20 13:35 | 06-20 13:55 | 1246.57 | 1237.5 | 11 | 13712.27 | -99.77 | -0.73% | 1.04R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.55 | ↓1239.91 | 0.2945 | 3.83 | **LOSS** |
| 294 | SNOW | 06-20 13:35 | 06-20 13:55 | 215.19 | 213.48 | 64 | 13772.16 | -109.44 | -0.79% | 0.87R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.98 | ↓214.06 | 0.6969 | 2.52 | **LOSS** |
| 295 | MDB | 06-20 13:35 | 06-20 13:55 | 211.21 | 207.96 | 60 | 12672.6 | -195 | -1.54% | 1.35R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.66 | ↓210.8 | 1.5576 | 1.88 | **LOSS** |
| 296 | WMT | 06-20 13:35 | 06-20 13:50 | 96.32 | 95.55 | 145 | 13966.4 | -111.65 | -0.8% | 1.14R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.9 | ↓95.99 | 0.1675 | 1.81 | **LOSS** |
| 297 | DELL | 06-20 13:40 | 06-20 14:20 | 118.44 | 117.74 | 118 | 13975.92 | -82.6 | -0.59% | 0.5R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.74 | ↓118.56 | 0.2368 | 1.28 | **LOSS** |
| 298 | SMCI | 06-20 14:00 | 06-20 14:20 | 45.94 | 44.91 | 306 | 14057.64 | -315.18 | -2.24% | 1.85R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 73.08 | ↓45.64 | 0.281 | 1.71 | **LOSS** |
| 299 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 658 | 14048.3 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 300 | PYPL | 06-23 13:35 | 06-23 14:30 | 71.76 | 71.63 | 194 | 13921.44 | -25.22 | -0.18% | 0.2R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 93.4 | ↓71.52 | 0.244 | 1.6 | **LOSS** |
| 301 | CAT | 06-23 13:35 | 06-23 14:25 | 365.58 | 364.35 | 38 | 13892.04 | -46.74 | -0.34% | 0.49R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.36 | ↓363.99 | 0.6127 | 2.8 | **LOSS** |
| 302 | COST | 06-23 13:35 | 06-23 14:00 | 992.3 | 988.88 | 14 | 13892.2 | -47.88 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 75.81 | ↓989.29 | 0.6317 | 3.16 | **LOSS** |
| 303 | IBM | 06-23 13:40 | 06-23 15:25 | 284.45 | 286.18 | 49 | 13938.05 | +84.77 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 304 | RIVN | 06-23 13:50 | 06-23 15:35 | 13.72 | 13.84 | 1016 | 13939.52 | +121.92 | +0.87% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.44 | ↑13.58 | -0.0091 | 1.76 | **WIN** |
| 305 | ARM | 06-23 14:00 | 06-23 15:05 | 147.14 | 147.09 | 95 | 13978.3 | -4.75 | -0.03% | 0.04R | 65m | market | stagnation | breakout | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 306 | LRCX | 06-23 14:00 | 06-23 14:50 | 92.43 | 92.28 | 151 | 13956.93 | -22.65 | -0.16% | 0.17R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 307 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 308 | AMD | 06-24 13:30 | 06-24 15:15 | 134.65 | 136.58 | 95 | 12791.75 | +183.35 | +1.43% | 1.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.21 | ↑134.19 | 0.8528 | 7.2 | **WIN** |
| 309 | CRM | 06-24 13:35 | 06-24 15:20 | 267.55 | 270.62 | 52 | 13912.6 | +159.64 | +1.15% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 310 | ORCL | 06-24 13:35 | 06-24 15:20 | 211.58 | 214.33 | 66 | 13964.28 | +181.5 | +1.3% | 1.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 97.77 | ↑210.26 | 1.0072 | 1.16 | **WIN** |
| 311 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 647 | 14033.43 | +420.55 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 312 | TSM | 06-24 13:35 | 06-24 15:20 | 216.56 | 218.87 | 60 | 12993.6 | +138.6 | +1.07% | 1.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.51 | ↑215.78 | 0.9191 | 7.36 | **WIN** |
| 313 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 314 | NOW | 06-24 13:35 | 06-24 13:55 | 990.35 | 986.17 | 14 | 13864.9 | -58.52 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 315 | PYPL | 06-24 13:35 | 06-24 13:55 | 73.43 | 72.89 | 190 | 13951.7 | -102.6 | -0.74% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.24 | ↓73.13 | 0.3185 | 1.56 | **LOSS** |
| 316 | BAC | 06-24 13:35 | 06-24 13:55 | 47.13 | 46.95 | 296 | 13950.48 | -53.28 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.98 | ↓46.98 | 0.2285 | 1.12 | **LOSS** |
| 317 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 179 | 13052.68 | +341.89 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 318 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 319 | AVGO | 06-24 13:40 | 06-24 14:35 | 263.22 | 262.61 | 48 | 12634.56 | -29.28 | -0.23% | 0.16R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.46 | ↓263.33 | 2.0874 | 1.24 | **LOSS** |
| 320 | MU | 06-24 13:40 | 06-24 15:25 | 125.72 | 126.39 | 112 | 14080.64 | +75.04 | +0.53% | 0.42R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.94 | ↓125.52 | 0.6157 | 1.59 | **WIN** |
| 321 | AMAT | 06-24 13:40 | 06-24 15:25 | 177.14 | 178.29 | 73 | 12931.22 | +83.95 | +0.65% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑176.74 | 1.0258 | 1.39 | **WIN** |
| 322 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 65 | 13893.1 | -91 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 323 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 19 | 13525.91 | -146.68 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 324 | QCOM | 06-24 13:45 | 06-24 14:05 | 155.8 | 155 | 89 | 13866.2 | -71.2 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 325 | UBER | 06-24 14:20 | 06-24 16:05 | 90.55 | 91.28 | 154 | 13944.7 | +112.42 | +0.81% | 0.44R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.99 | ↑89.24 | 1.5565 | 1.94 | **WIN** |
| 326 | CELH | 06-24 15:35 | 06-24 15:50 | 46.94 | 46.25 | 295 | 13847.3 | -203.55 | -1.47% | 1.35R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 79.46 | ↑45.67 | 0.7104 | 1.14 | **LOSS** |
| 327 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 328 | AMD | 06-25 13:35 | 06-25 13:55 | 141.71 | 140.88 | 99 | 14029.29 | -82.17 | -0.59% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.57 | ↓140.94 | 0.8304 | 3.54 | **LOSS** |
| 329 | CRWD | 06-25 13:35 | 06-25 14:45 | 495.01 | 493.79 | 28 | 13860.28 | -34.16 | -0.25% | 0.36R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.8 | ↓494.13 | 1.7125 | 2.89 | **LOSS** |
| 330 | NET | 06-25 13:40 | 06-25 14:10 | 190.75 | 189.93 | 73 | 13924.75 | -59.86 | -0.43% | 0.59R | 30m | market | early-reversal | breakout | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 331 | AMD | 06-25 14:35 | 06-25 14:55 | 143.47 | 142.61 | 97 | 13916.59 | -83.42 | -0.6% | 0.36R | 20m | market | early-reversal | breakout | breakout | neutral | 67.13 | ↑141.09 | 1.1589 | 1.25 | **LOSS** |
| 332 | ELF | 06-25 17:45 | 06-25 18:35 | 125.1 | 124.98 | 111 | 13886.1 | -13.32 | -0.1% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 65.41 | ↑122.45 | 0.7257 | 1.33 | **LOSS** |
| 333 | PLTR | 06-26 13:30 | 06-26 14:05 | 145.33 | 144.8 | 97 | 14097.01 | -51.41 | -0.36% | 0.42R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 84.83 | ↓145.5 | 0.3745 | 5.23 | **LOSS** |
| 334 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 335 | JPM | 06-26 13:35 | 06-26 15:25 | 287.46 | 288.37 | 48 | 13798.08 | +43.68 | +0.32% | 0.46R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 89.74 | ↑286.59 | 0.5538 | 1.77 | **WIN** |
| 336 | GE | 06-26 13:45 | 06-26 15:30 | 253.76 | 254.02 | 55 | 13956.8 | +14.3 | +0.1% | 0.14R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.54 | ↓252.51 | 0.7105 | 1.44 | **WIN** |
| 337 | COIN | 06-26 16:20 | 06-26 18:05 | 370.72 | 379.27 | 37 | 13716.64 | +316.35 | +2.31% | 2.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 55.55 | ↑367.22 | -0.0756 | 2.81 | **WIN** |
| 338 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 610 | 14097.1 | -30.5 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 339 | NKE | 06-27 15:50 | 06-27 16:35 | 73.45 | 72.88 | 190 | 13955.5 | -108.3 | -0.78% | 0.73R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑71.95 | 1.2742 | 1.21 | **LOSS** |
| 340 | CRM | 06-30 13:30 | 06-30 13:50 | 275.82 | 274.48 | 50 | 13791 | -67 | -0.49% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.59 | ↓275.49 | 0.3147 | 1.2 | **LOSS** |
| 341 | JPM | 06-30 13:30 | 06-30 15:10 | 290.6 | 290.47 | 48 | 13948.8 | -6.24 | -0.04% | 0.06R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.05 | ↓291.04 | 0.1761 | 1.84 | **LOSS** |
| 342 | SMCI | 06-30 13:35 | 06-30 14:20 | 48.94 | 50.1 | 286 | 13996.84 | +331.76 | +2.37% | 1.49R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.88 | ↑48.67 | 0.1708 | 1.8 | **WIN** |
| 343 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.11 | 93.25 | 148 | 13928.28 | -127.28 | -0.91% | 1.28R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 344 | HPE | 06-30 14:00 | 06-30 15:45 | 20.75 | 20.89 | 674 | 13985.5 | +94.36 | +0.67% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.86 | ↑20.6 | 0.6063 | 1.37 | **WIN** |
| 345 | TGT | 07-01 13:35 | 07-01 14:40 | 100.2 | 102.92 | 139 | 13927.8 | +378.08 | +2.71% | 3.87R | 65m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.07 | ↑99.62 | 0.2691 | 3.39 | **WIN** |
| 346 | UNH | 07-01 13:50 | 07-01 15:35 | 317.13 | 324.05 | 44 | 13953.72 | +304.48 | +2.18% | 2.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 347 | SMCI | 07-01 16:20 | 07-01 16:40 | 48.47 | 48.12 | 290 | 14056.3 | -101.5 | -0.72% | 0.56R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 89.72 | ↑47.5 | 0.1262 | 1.32 | **LOSS** |
| 348 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 183 | 14136.75 | +243.39 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 349 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.12 | 212.04 | 66 | 13933.92 | +60.72 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 350 | COIN | 07-02 13:45 | 07-02 14:05 | 343.25 | 341 | 40 | 13730 | -90 | -0.66% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↓342.46 | 0.8493 | 1.99 | **LOSS** |
| 351 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 121 | 14026.32 | -37.51 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 352 | MU | 07-02 14:45 | 07-02 15:45 | 122.14 | 122.08 | 115 | 14046.1 | -6.9 | -0.05% | 0.04R | 60m | market | stagnation | breakout | breakout | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 353 | DELL | 07-02 14:45 | 07-02 15:35 | 123.62 | 123.51 | 113 | 13969.06 | -12.43 | -0.09% | 0.12R | 50m | market | stagnation | breakout | breakout | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 354 | ARM | 07-03 13:30 | 07-03 13:45 | 156.32 | 154.77 | 89 | 13912.48 | -137.95 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.31 | ↓156.26 | 0.1619 | 1.76 | **LOSS** |
| 355 | PANW | 07-03 13:30 | 07-03 15:15 | 199.25 | 202.12 | 70 | 13947.5 | +200.9 | +1.44% | 2.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.06 | ↑199.23 | 0.3117 | 1.81 | **WIN** |
| 356 | MU | 07-03 13:35 | 07-03 14:40 | 123.14 | 123.05 | 114 | 14037.96 | -10.26 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.69 | ↓122.92 | 0.0328 | 1.24 | **LOSS** |
| 357 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.15 | 222.08 | 63 | 13869.45 | +121.59 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 358 | ORCL | 07-03 13:40 | 07-03 14:25 | 234.01 | 232.2 | 60 | 14040.6 | -108.6 | -0.77% | 0.57R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.78 | ↓233.12 | 1.936 | 1.41 | **LOSS** |
| 359 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 630 | 14093.1 | -31.5 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 360 | ABNB | 07-03 13:40 | 07-03 14:30 | 137.32 | 137.18 | 101 | 13869.32 | -14.14 | -0.1% | 0.14R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 90.4 | ↓136.81 | 0.4503 | 1.11 | **LOSS** |
| 361 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 362 | RIVN | 07-03 13:45 | 07-03 14:20 | 13.27 | 13.17 | 1052 | 13960.04 | -105.2 | -0.75% | 0.56R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.03 | ↓13.12 | 0.0389 | 1.15 | **LOSS** |
| 363 | DDOG | 07-03 13:50 | 07-03 15:20 | 149.1 | 154.06 | 93 | 13866.3 | +461.28 | +3.33% | 1.67R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.86 | ↑148.07 | 3.5654 | 2.04 | **WIN** |
| 364 | NET | 07-03 13:50 | 07-03 15:35 | 189.09 | 191.55 | 74 | 13992.66 | +182.04 | +1.3% | 1.57R | 105m | market | timeout | breakout | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 365 | UBER | 07-07 13:40 | 07-07 15:25 | 95.11 | 96.88 | 147 | 13981.17 | +260.19 | +1.86% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 366 | COIN | 07-07 13:45 | 07-07 14:05 | 360.81 | 358.22 | 36 | 12989.16 | -93.24 | -0.72% | 0.61R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 367 | PLTR | 07-07 15:45 | 07-07 17:30 | 137.7 | 138.44 | 102 | 14045.4 | +75.48 | +0.54% | 0.49R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 74.37 | ↑135.1 | 0.7158 | 2.44 | **WIN** |
| 368 | ORCL | 07-08 13:35 | 07-08 13:55 | 240.1 | 237.77 | 54 | 12965.4 | -125.82 | -0.97% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.32 | ↓238.93 | 0.6439 | 4.21 | **LOSS** |
| 369 | AMD | 07-08 13:40 | 07-08 15:25 | 136.53 | 137.45 | 102 | 13926.06 | +93.84 | +0.67% | 0.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.27 | ↓136.57 | 0.3518 | 1.3 | **WIN** |
| 370 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 617 | 14086.11 | +345.52 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 371 | LLY | 07-08 13:45 | 07-08 15:30 | 784.33 | 787.74 | 17 | 13333.61 | +57.97 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 372 | MSFT | 07-09 13:30 | 07-09 14:45 | 502.19 | 502.49 | 27 | 13559.13 | +8.1 | +0.06% | 0.09R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 91.2 | ↓501.53 | 0.5456 | 7.73 | **WIN** |
| 373 | MU | 07-09 13:30 | 07-09 13:45 | 125.9 | 124.31 | 112 | 14100.8 | -178.08 | -1.26% | 1.8R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 65.72 | ↓125.5 | -0.015 | 2.04 | **LOSS** |
| 374 | COIN | 07-09 13:30 | 07-09 14:00 | 358.57 | 357.8 | 39 | 13984.23 | -30.03 | -0.21% | 0.3R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.46 | ↓357.65 | 0.5578 | 1.49 | **LOSS** |
| 375 | LLY | 07-09 13:30 | 07-09 13:50 | 792.72 | 788.24 | 16 | 12683.52 | -71.68 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 376 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 377 | META | 07-09 13:35 | 07-09 15:20 | 729.62 | 735.04 | 19 | 13862.78 | +102.98 | +0.74% | 1.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.51 | ↑727.39 | 1.0668 | 4.23 | **WIN** |
| 378 | AVGO | 07-09 13:35 | 07-09 14:25 | 277.02 | 276.37 | 50 | 13851 | -32.5 | -0.23% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.66 | ↓275.15 | -0.0736 | 1.57 | **LOSS** |
| 379 | TSM | 07-09 13:40 | 07-09 14:10 | 232.36 | 231.61 | 60 | 13941.6 | -45 | -0.32% | 0.46R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 380 | CAT | 07-09 13:40 | 07-09 14:00 | 402.5 | 401.11 | 34 | 13685 | -47.26 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.17 | ↓400.82 | 1.1439 | 1.54 | **LOSS** |
| 381 | GE | 07-09 13:40 | 07-09 14:00 | 250.5 | 247.69 | 55 | 13777.5 | -154.55 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 382 | BA | 07-09 13:40 | 07-09 14:00 | 226.95 | 224.09 | 56 | 12709.2 | -160.16 | -1.26% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.05 | ↓225.45 | 1.42 | 2.98 | **LOSS** |
| 383 | COIN | 07-09 15:25 | 07-09 15:50 | 366.69 | 364.16 | 38 | 13934.22 | -96.14 | -0.69% | 0.57R | 25m | market | early-reversal | breakout | breakout | neutral | 75.82 | ↑359.82 | 2.5189 | 1.47 | **LOSS** |
| 384 | CELH | 07-09 16:10 | 07-09 17:00 | 46.08 | 46.07 | 300 | 13824 | -3 | -0.02% | 0.03R | 50m | market | breakeven-stop | breakout | breakout | neutral | 86.83 | ↑45.56 | 0.0537 | 2.56 | **LOSS** |
| 385 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 386 | AMAT | 07-10 13:40 | 07-10 14:00 | 197.69 | 196.97 | 71 | 14035.99 | -51.12 | -0.36% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 387 | HPE | 07-10 15:40 | 07-10 17:25 | 21.46 | 21.54 | 652 | 13991.92 | +52.16 | +0.37% | 0.52R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.89 | ↑21.02 | 0.1184 | 3.71 | **WIN** |
| 388 | ARM | 07-11 13:50 | 07-11 15:35 | 148.9 | 150.12 | 93 | 13847.7 | +113.46 | +0.82% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.33 | ↑146.74 | 0.1052 | 1.11 | **WIN** |
| 389 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 390 | PYPL | 07-14 13:30 | 07-14 15:15 | 73.34 | 73.78 | 175 | 12834.5 | +77 | +0.6% | 0.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.46 | ↑72.77 | -0.6572 | 1.79 | **WIN** |
| 391 | COIN | 07-14 13:35 | 07-14 14:25 | 395.93 | 390.75 | 35 | 13857.55 | -181.3 | -1.31% | 0.91R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.71 | ↓394.17 | 0.495 | 2.31 | **LOSS** |
| 392 | CRM | 07-14 13:40 | 07-14 14:05 | 260.74 | 259.92 | 52 | 13558.48 | -42.64 | -0.31% | 0.44R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.48 | ↓259.88 | 0.0062 | 1.19 | **LOSS** |
| 393 | ABNB | 07-14 13:45 | 07-14 14:05 | 137.43 | 136.69 | 101 | 13880.43 | -74.74 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.53 | ↓136.57 | 0.0934 | 1.41 | **LOSS** |
| 394 | SHOP | 07-14 17:05 | 07-14 17:15 | 118.46 | 117.57 | 118 | 13978.28 | -105.02 | -0.75% | 1.07R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 91.6 | ↑115.06 | 0.7675 | 2.8 | **LOSS** |
| 395 | AMD | 07-15 13:35 | 07-15 13:55 | 157.31 | 155.44 | 89 | 14000.59 | -166.43 | -1.19% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.25 | ↓156.22 | 2.6201 | 5.45 | **LOSS** |
| 396 | SMCI | 07-15 13:35 | 07-15 14:20 | 52.25 | 52.5 | 247 | 12905.75 | +61.75 | +0.48% | 0.26R | 45m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 80.5 | ↓52.06 | 0.3183 | 1.82 | **WIN** |
| 397 | DELL | 07-15 13:40 | 07-15 14:00 | 128.11 | 127.22 | 109 | 13963.99 | -97.01 | -0.69% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.56 | ↓127.6 | 0.323 | 1.26 | **LOSS** |
| 398 | MDB | 07-15 13:45 | 07-15 14:30 | 207.33 | 206.33 | 67 | 13891.11 | -67 | -0.48% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 399 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 76 | 14018.96 | -71.44 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 400 | RIVN | 07-15 15:40 | 07-15 16:00 | 12.97 | 12.89 | 1075 | 13942.75 | -86 | -0.62% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 86.49 | ↑12.8 | 0.0351 | 3.24 | **LOSS** |
| 401 | ELF | 07-15 17:05 | 07-15 17:35 | 109.19 | 108.66 | 127 | 13867.13 | -67.31 | -0.49% | 0.52R | 30m | market | early-reversal | breakout | breakout | thinChop | 58.65 | ↑107.87 | 0.4632 | 1.21 | **LOSS** |
| 402 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 403 | ABNB | 07-17 13:30 | 07-17 14:10 | 138.37 | 137.84 | 100 | 13837 | -53 | -0.38% | 0.54R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.22 | ↓138.4 | 0.1644 | 1.15 | **LOSS** |
| 404 | GE | 07-17 13:40 | 07-17 14:00 | 268.73 | 266.17 | 47 | 12630.31 | -120.32 | -0.95% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57.75 | ↓265.04 | 0.0421 | 3.4 | **LOSS** |
| 405 | HPE | 07-17 13:40 | 07-17 14:00 | 21.13 | 20.9 | 611 | 12910.43 | -140.53 | -1.09% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓21.02 | 0.1245 | 1.98 | **LOSS** |
| 406 | TGT | 07-17 13:40 | 07-17 14:30 | 102.55 | 102.46 | 136 | 13946.8 | -12.24 | -0.09% | 0.13R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 407 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.22 | 249.2 | 56 | 13956.32 | -1.12 | -0.01% | 0.01R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 408 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 603 | 14146.38 | -180.9 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 409 | ARM | 07-18 13:40 | 07-18 14:00 | 160.71 | 159.3 | 87 | 13981.77 | -122.67 | -0.88% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 410 | MRVL | 07-18 15:50 | 07-18 16:25 | 74.38 | 74.13 | 190 | 14132.2 | -47.5 | -0.34% | 0.43R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 86.69 | ↑72.94 | 0.4777 | 2.46 | **LOSS** |
| 411 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 74 | 13900.9 | +71.78 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 412 | CVX | 07-21 13:30 | 07-21 13:50 | 151.52 | 150.18 | 92 | 13939.84 | -123.28 | -0.88% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 413 | AAPL | 07-21 13:35 | 07-21 13:55 | 213.92 | 213.95 | 65 | 13904.8 | +1.95 | +0.01% | 0.01R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.77 | ↓213.09 | 0.3134 | 4.01 | **WIN** |
| 414 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.39 | 101.58 | 136 | 13925.04 | -110.16 | -0.79% | 1.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 415 | NKE | 07-21 13:35 | 07-21 15:20 | 73.95 | 74.52 | 189 | 13976.55 | +107.73 | +0.77% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.84 | ↑73.47 | 0.1352 | 2.5 | **WIN** |
| 416 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 19 | 13571.7 | -9.69 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 417 | UBER | 07-21 13:40 | 07-21 14:15 | 91.66 | 91.25 | 153 | 14023.98 | -62.73 | -0.45% | 0.58R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 418 | CRWD | 07-21 13:45 | 07-21 14:35 | 484.2 | 483.15 | 28 | 13557.6 | -29.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 419 | NET | 07-21 13:45 | 07-21 14:20 | 199.25 | 197.69 | 70 | 13947.5 | -109.2 | -0.78% | 0.73R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 420 | LLY | 07-22 13:35 | 07-22 15:20 | 771.67 | 774.27 | 18 | 13890.06 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 421 | ADBE | 07-22 13:45 | 07-22 14:05 | 373.38 | 371.3 | 37 | 13815.06 | -76.96 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.44 | ↓372.51 | 1.2979 | 1.65 | **LOSS** |
| 422 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.12 | 95.01 | 147 | 13982.64 | -16.17 | -0.12% | 0.13R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 423 | NKE | 07-22 13:45 | 07-22 14:05 | 75.38 | 74.8 | 185 | 13945.3 | -107.3 | -0.77% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 424 | TGT | 07-22 13:45 | 07-22 14:35 | 104.89 | 104.77 | 133 | 13950.37 | -15.96 | -0.11% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.02 | ↑104.31 | 0.3853 | 1.66 | **LOSS** |
| 425 | IBM | 07-23 13:35 | 07-23 14:40 | 285.48 | 285.3 | 49 | 13988.52 | -8.82 | -0.06% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.28 | ↑284.91 | 0.3782 | 1.13 | **LOSS** |
| 426 | AMD | 07-23 13:40 | 07-23 14:30 | 157.4 | 156.33 | 88 | 13851.2 | -94.16 | -0.68% | 0.7R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.9 | ↓157.17 | 0.5518 | 1.35 | **LOSS** |
| 427 | CAT | 07-23 13:40 | 07-23 14:00 | 425.55 | 423.12 | 32 | 13617.6 | -77.76 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 428 | CELH | 07-23 13:40 | 07-23 14:00 | 45.27 | 44.87 | 306 | 13852.62 | -122.4 | -0.88% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.21 | ↓45.33 | 0.3128 | 1.61 | **LOSS** |
| 429 | BA | 07-23 16:00 | 07-23 16:30 | 234.66 | 233.9 | 59 | 13844.94 | -44.84 | -0.32% | 0.46R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 86.33 | ↑231.98 | 0.9135 | 1.93 | **LOSS** |
| 430 | NVO | 07-24 13:30 | 07-24 14:15 | 70.87 | 70.61 | 197 | 13961.39 | -51.22 | -0.37% | 0.53R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 431 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 60 | 13870.8 | +5.4 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 432 | AVGO | 07-24 13:35 | 07-24 13:55 | 289.23 | 285.26 | 48 | 13883.04 | -190.56 | -1.37% | 1.22R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 433 | UBER | 07-24 13:35 | 07-24 15:20 | 92.35 | 92.12 | 151 | 13944.85 | -34.73 | -0.25% | 0.27R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 434 | PYPL | 07-24 13:35 | 07-24 15:15 | 78.09 | 78.13 | 178 | 13900.02 | +7.12 | +0.05% | 0.07R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.31 | ↓77.86 | 0.1157 | 2.06 | **WIN** |
| 435 | MDB | 07-25 13:30 | 07-25 14:30 | 237.56 | 243.57 | 58 | 13778.48 | +348.58 | +2.53% | 3.61R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.71 | ↑237.19 | 0.7381 | 1.73 | **WIN** |
| 436 | UNH | 07-25 13:30 | 07-25 13:50 | 284.04 | 282.48 | 45 | 12781.8 | -70.2 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 437 | NKE | 07-25 13:30 | 07-25 13:45 | 76.37 | 75.64 | 183 | 13975.71 | -133.59 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.46 | ↓76.33 | -0.0076 | 3.21 | **LOSS** |
| 438 | RIVN | 07-25 13:30 | 07-25 15:15 | 14.01 | 14.4 | 994 | 13925.94 | +387.66 | +2.78% | 3.05R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 91.4 | ↑13.94 | 0.0865 | 2.15 | **WIN** |
| 439 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.46 | 148.79 | 94 | 13955.24 | +31.02 | +0.22% | 0.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 440 | PLTR | 07-25 13:40 | 07-25 15:25 | 158.05 | 159.19 | 89 | 14066.45 | +101.46 | +0.72% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.65 | ↑157.79 | 0.5393 | 2.2 | **WIN** |
| 441 | ARM | 07-25 14:35 | 07-25 16:20 | 162.93 | 163.89 | 85 | 13849.05 | +81.6 | +0.59% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 70.55 | ↑161.38 | 0.4531 | 1.82 | **WIN** |
| 442 | SMCI | 07-25 14:35 | 07-25 15:25 | 53.28 | 53.18 | 263 | 14012.64 | -26.3 | -0.19% | 0.13R | 50m | market | stagnation | breakout | breakout | neutral | 63.26 | ↑52.48 | -0.0124 | 1.32 | **LOSS** |
| 443 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 671 | 14124.55 | -40.26 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 444 | ABNB | 07-28 13:35 | 07-28 14:00 | 142.91 | 142.3 | 93 | 13290.63 | -56.73 | -0.43% | 0.61R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.83 | ↓142.66 | 0.1324 | 1.13 | **LOSS** |
| 445 | ASML | 07-28 13:40 | 07-28 14:10 | 733.88 | 730.99 | 17 | 12475.96 | -49.13 | -0.39% | 0.48R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.76 | ↓732.79 | 4.3311 | 2.08 | **LOSS** |
| 446 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 186 | 14150.88 | -91.14 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 447 | META | 07-28 13:45 | 07-28 14:10 | 723.2 | 720.27 | 19 | 13740.8 | -55.67 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | breakout | neutral | 74.41 | ↓720.83 | 0.5264 | 1.62 | **LOSS** |
| 448 | ELF | 07-28 14:00 | 07-28 14:20 | 122 | 121.47 | 114 | 13908 | -60.42 | -0.43% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 449 | CRM | 07-29 13:30 | 07-29 13:50 | 273.56 | 272.41 | 51 | 13951.56 | -58.65 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.05 | ↓272.97 | 0.3837 | 3.46 | **LOSS** |
| 450 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 183 | 14145.9 | +3.66 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 451 | DELL | 07-29 13:30 | 07-29 13:55 | 135.3 | 134.75 | 103 | 13935.9 | -56.65 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓135.29 | 0.3907 | 1.98 | **LOSS** |
| 452 | ORCL | 07-29 13:35 | 07-29 14:25 | 251.87 | 250.4 | 56 | 14104.72 | -82.32 | -0.58% | 0.83R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 453 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 181 | 14157.82 | -68.78 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 454 | SMCI | 07-30 13:30 | 07-30 14:05 | 59.92 | 61.59 | 216 | 12942.72 | +360.72 | +2.79% | 2.1R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 61.99 | ↑59.7 | -0.1878 | 1.62 | **WIN** |
| 455 | ADP | 07-30 13:35 | 07-30 15:20 | 311.51 | 315.13 | 44 | 13706.44 | +159.28 | +1.16% | 1.2R | 105m | market | timeout | breakout | breakout | neutral | 86.57 | ↑308.56 | 0.3705 | 1.4 | **WIN** |
| 456 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 68 | 13987.6 | +159.8 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 457 | MA | 07-31 13:40 | 07-31 15:25 | 569.6 | 575.79 | 24 | 13670.4 | +148.56 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.42 | ↑566.65 | 0.7985 | 1.79 | **WIN** |
| 458 | SNOW | 07-31 13:45 | 07-31 15:30 | 224.39 | 226.7 | 62 | 13912.18 | +143.22 | +1.03% | 0.95R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.39 | ↑223.01 | 0.3172 | 1.1 | **WIN** |
| 459 | MDB | 07-31 14:00 | 07-31 14:20 | 250.51 | 248.09 | 55 | 13778.05 | -133.1 | -0.97% | 0.61R | 20m | market | early-reversal | breakout | breakout | neutral | 77.98 | ↑247.21 | 0.9506 | 1.12 | **LOSS** |
| 460 | LLY | 08-01 13:50 | 08-01 14:10 | 763.93 | 758.66 | 16 | 12222.88 | -84.32 | -0.69% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.51 | ↓758.94 | 2.1923 | 1.24 | **LOSS** |
| 461 | NET | 08-01 14:30 | 08-01 14:50 | 207.92 | 206.03 | 67 | 13930.64 | -126.63 | -0.91% | 0.46R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 50.12 | ↑199.14 | -0.8173 | 1.37 | **LOSS** |
| 462 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.54 | 205.81 | 68 | 13976.72 | +18.36 | +0.13% | 0.15R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 463 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 464 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.74 | 533.46 | 26 | 13851.24 | +18.72 | +0.14% | 0.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 465 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 466 | AVGO | 08-04 13:35 | 08-04 14:40 | 296.2 | 295.76 | 47 | 13921.4 | -20.68 | -0.15% | 0.15R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.25 | ↑293.84 | 1.0727 | 1.63 | **LOSS** |
| 467 | ARM | 08-04 13:35 | 08-04 13:55 | 140.38 | 139.09 | 99 | 13897.62 | -127.71 | -0.92% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.44 | ↓139.79 | 0.3632 | 1.18 | **LOSS** |
| 468 | SMCI | 08-04 13:35 | 08-04 14:25 | 58.78 | 58.72 | 221 | 12990.38 | -13.26 | -0.1% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.99 | ↑58.32 | 0.3921 | 1.57 | **LOSS** |
| 469 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 470 | DIS | 08-04 13:35 | 08-04 14:05 | 119.3 | 118.79 | 117 | 13958.1 | -59.67 | -0.43% | 0.53R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.87 | ↓118.78 | 0.4471 | 1.32 | **LOSS** |
| 471 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.89 | 97.53 | 143 | 13998.27 | -51.48 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 472 | UBER | 08-04 13:40 | 08-04 14:00 | 88.24 | 87.92 | 158 | 13941.92 | -50.56 | -0.36% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 473 | RIVN | 08-04 13:40 | 08-04 14:00 | 12.74 | 12.65 | 1097 | 13975.78 | -98.73 | -0.71% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.48 | ↓12.62 | 0.0527 | 1.42 | **LOSS** |
| 474 | PLTR | 08-04 13:45 | 08-04 14:05 | 160.15 | 159 | 81 | 12972.15 | -93.15 | -0.72% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.52 | ↓159.48 | 0.8038 | 2.14 | **LOSS** |
| 475 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 64 | 13791.36 | -55.04 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 476 | PLTR | 08-05 13:35 | 08-05 14:40 | 173.71 | 172.32 | 81 | 14070.51 | -112.59 | -0.8% | 0.4R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.37 | ↓173.02 | 3.4269 | 4.06 | **LOSS** |
| 477 | NET | 08-05 13:35 | 08-05 14:25 | 212.06 | 211.49 | 61 | 12935.66 | -34.77 | -0.27% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.74 | ↓209.85 | -0.0465 | 1.15 | **LOSS** |
| 478 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 698 | 14120.54 | -6.98 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 479 | UBER | 08-05 13:40 | 08-05 14:30 | 90.33 | 89.71 | 155 | 14001.15 | -96.1 | -0.69% | 0.88R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.6 | ↓89.75 | 0.3437 | 3.63 | **LOSS** |
| 480 | TXN | 08-05 13:40 | 08-05 14:20 | 185.51 | 184.78 | 75 | 13913.25 | -54.75 | -0.39% | 0.56R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 481 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 182 | 14163.24 | -103.74 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 482 | UNH | 08-05 15:20 | 08-05 15:40 | 247.62 | 245.55 | 52 | 12876.24 | -107.64 | -0.84% | 0.77R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 483 | INTC | 08-05 16:00 | 08-05 16:20 | 20.49 | 20.42 | 689 | 14117.61 | -48.23 | -0.34% | 0.38R | 20m | market | early-reversal | breakout | breakout | neutral | 69.57 | ↑20.25 | 0.0672 | 1.87 | **LOSS** |
| 484 | PLTR | 08-06 13:30 | 08-06 14:40 | 174.52 | 179.12 | 80 | 13961.6 | +368 | +2.64% | 2.51R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.03 | ↑173.38 | 0.3031 | 3.27 | **WIN** |
| 485 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.87 | 444.3 | 31 | 13821.97 | -48.67 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 486 | PYPL | 08-06 13:30 | 08-06 13:50 | 68.69 | 68.36 | 187 | 12845.03 | -61.71 | -0.48% | 0.69R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.76 | ↓68.59 | -0.013 | 4 | **LOSS** |
| 487 | NKE | 08-06 13:30 | 08-06 13:55 | 75.24 | 74.95 | 185 | 13919.4 | -53.65 | -0.39% | 0.56R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.2 | ↓74.92 | 0.0378 | 3.11 | **LOSS** |
| 488 | AAPL | 08-06 13:40 | 08-06 15:25 | 209.84 | 214.16 | 61 | 12800.24 | +263.52 | +2.06% | 2.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.59 | ↑208.26 | 0.8569 | 2.01 | **WIN** |
| 489 | RIVN | 08-06 15:35 | 08-06 15:55 | 12.15 | 11.88 | 1150 | 13972.5 | -310.5 | -2.22% | 1.11R | 20m | market | stop-loss | breakout | breakout | thinChop | 72.62 | ↓11.96 | -0.0222 | 1.35 | **LOSS** |
| 490 | COIN | 08-06 16:05 | 08-06 16:40 | 298.98 | 299.07 | 46 | 13753.08 | +4.14 | +0.03% | 0.04R | 35m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 66.68 | ↑296.24 | 0.0607 | 3.39 | **WIN** |
| 491 | AAPL | 08-07 13:35 | 08-07 14:25 | 219.05 | 218.23 | 64 | 14019.2 | -52.48 | -0.37% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 492 | AMD | 08-07 13:40 | 08-07 15:25 | 168.94 | 173.84 | 82 | 13853.08 | +401.8 | +2.9% | 2.21R | 105m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.18 | ↑168.15 | 1.0964 | 1.74 | **WIN** |
| 493 | UBER | 08-07 13:40 | 08-07 13:55 | 91.04 | 89.48 | 153 | 13929.12 | -238.68 | -1.71% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.27 | ↓90.86 | 0.4629 | 1.86 | **LOSS** |
| 494 | SBUX | 08-07 13:40 | 08-07 14:00 | 90.91 | 90.27 | 153 | 13909.23 | -97.92 | -0.7% | 0.95R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.52 | ↓90.6 | 0.2161 | 1.39 | **LOSS** |
| 495 | KLAC | 08-07 13:55 | 08-07 14:20 | 912.55 | 907.9 | 15 | 13688.25 | -69.75 | -0.51% | 0.65R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.68 | ↓913 | 9.0318 | 2.7 | **LOSS** |
| 496 | PLTR | 08-07 14:00 | 08-07 14:50 | 182.35 | 181.9 | 77 | 14040.95 | -34.65 | -0.25% | 0.18R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 70.88 | ↑180.71 | 1.1645 | 2.73 | **LOSS** |
| 497 | ELF | 08-07 17:50 | 08-07 18:15 | 99.03 | 98.43 | 140 | 13864.2 | -84 | -0.61% | 0.43R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.49 | ↑96.61 | 0.4267 | 1.76 | **LOSS** |
| 498 | AMD | 08-08 13:35 | 08-08 14:10 | 174.9 | 173.32 | 80 | 13992 | -126.4 | -0.9% | 0.98R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.32 | ↓173.89 | 0.5268 | 2.99 | **LOSS** |
| 499 | PLTR | 08-08 13:35 | 08-08 14:25 | 187.26 | 187.06 | 75 | 14044.5 | -15 | -0.11% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93 | ↑186.3 | 1.423 | 3.68 | **LOSS** |
| 500 | PANW | 08-08 13:35 | 08-08 13:55 | 170 | 168.99 | 82 | 13940 | -82.82 | -0.59% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 501 | DDOG | 08-08 13:35 | 08-08 13:55 | 139.54 | 137.7 | 100 | 13954 | -184 | -1.32% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.07 | ↓138.67 | 1.3902 | 1.26 | **LOSS** |
| 502 | LLY | 08-08 13:35 | 08-08 13:55 | 654.36 | 648.32 | 21 | 13741.56 | -126.84 | -0.92% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 503 | NFLX | 08-08 14:20 | 08-08 14:50 | 1205.82 | 1198.98 | 11 | 13264.02 | -75.24 | -0.57% | 0.81R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 504 | MU | 08-08 14:30 | 08-08 15:20 | 115.17 | 118.35 | 122 | 14050.74 | +387.96 | +2.76% | 2.68R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 87.57 | ↑113.77 | 0.7716 | 2.98 | **WIN** |
| 505 | MU | 08-08 15:25 | 08-08 15:45 | 119.16 | 118.42 | 118 | 14060.88 | -87.32 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 506 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 92 | 13918.68 | -73.6 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 507 | PANW | 08-11 13:30 | 08-11 15:15 | 169.03 | 170.28 | 82 | 13860.46 | +102.5 | +0.74% | 1.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.47 | ↑168.15 | -0.1141 | 1.22 | **WIN** |
| 508 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 673 | 14092.62 | -94.22 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 509 | SMCI | 08-11 13:40 | 08-11 14:30 | 45.82 | 45.56 | 307 | 14066.74 | -79.82 | -0.57% | 0.48R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 510 | LRCX | 08-11 13:40 | 08-11 14:00 | 103.9 | 103.16 | 134 | 13922.6 | -99.16 | -0.71% | 0.9R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.19 | ↓103.53 | 0.3151 | 2.26 | **LOSS** |
| 511 | QCOM | 08-11 13:45 | 08-11 14:05 | 150.85 | 149.87 | 92 | 13878.2 | -90.16 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 512 | ASML | 08-11 13:45 | 08-11 14:10 | 731.05 | 728.98 | 19 | 13889.95 | -39.33 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.3 | ↓729.69 | 2.0012 | 2.82 | **LOSS** |
| 513 | KLAC | 08-11 13:45 | 08-11 14:05 | 931.97 | 923.52 | 15 | 13979.55 | -126.75 | -0.91% | 1.3R | 20m | market | stop-loss | breakout | breakout | neutral | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 514 | CELH | 08-11 13:50 | 08-11 15:35 | 53.12 | 53.69 | 260 | 13811.2 | +148.2 | +1.07% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.43 | ↑53.08 | 0.4977 | 1.13 | **WIN** |
| 515 | AMD | 08-11 14:15 | 08-11 16:00 | 176.54 | 176.69 | 79 | 13946.66 | +11.85 | +0.08% | 0.04R | 105m | market | timeout | breakout | breakout | neutral | 68.74 | ↑172.77 | 0.9341 | 1.54 | **WIN** |
| 516 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 517 | AAPL | 08-12 13:30 | 08-12 13:40 | 229.97 | 227.32 | 60 | 13798.2 | -159 | -1.15% | 1.64R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 518 | PLTR | 08-12 13:30 | 08-12 13:50 | 185.65 | 183.81 | 70 | 12995.5 | -128.8 | -0.99% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.78 | ↓185.33 | -0.419 | 1.67 | **LOSS** |
| 519 | PANW | 08-12 13:30 | 08-12 13:55 | 172.54 | 171.24 | 81 | 13975.74 | -105.3 | -0.75% | 0.86R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.12 | ↓171.94 | 0.2889 | 2.46 | **LOSS** |
| 520 | GE | 08-12 13:30 | 08-12 13:50 | 278.17 | 277 | 50 | 13908.5 | -58.5 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.64 | ↓277.39 | 0.1867 | 2.28 | **LOSS** |
| 521 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 522 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 16 | 12594.88 | -118.72 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 523 | MDB | 08-12 13:35 | 08-12 13:50 | 203.52 | 200.81 | 68 | 13839.36 | -184.28 | -1.33% | 1.82R | 15m | market | stop-loss | trend | breakout | noisyHighBeta | 63.98 | ↓203.01 | -0.1816 | 1.8 | **LOSS** |
| 524 | PYPL | 08-12 13:35 | 08-12 15:20 | 68.23 | 68.31 | 204 | 13918.92 | +16.32 | +0.12% | 0.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.91 | ↓67.97 | 0.1445 | 1.29 | **WIN** |
| 525 | BAC | 08-12 13:35 | 08-12 15:20 | 46.99 | 47.4 | 297 | 13956.03 | +121.77 | +0.87% | 1.24R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 526 | ORCL | 08-12 13:40 | 08-12 13:55 | 257.12 | 253.04 | 54 | 13884.48 | -220.32 | -1.59% | 2.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.72 | ↓255.28 | 0.2684 | 2.37 | **LOSS** |
| 527 | TXN | 08-12 14:05 | 08-12 15:50 | 190.68 | 192.73 | 73 | 13919.64 | +149.65 | +1.08% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.27 | ↑187.83 | 1.1671 | 1.41 | **WIN** |
| 528 | QCOM | 08-12 14:15 | 08-12 14:40 | 152.18 | 151.72 | 91 | 13848.38 | -41.86 | -0.3% | 0.39R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 83.67 | ↑150.77 | 0.7869 | 1.48 | **LOSS** |
| 529 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 530 | NVO | 08-13 13:30 | 08-13 15:15 | 50.45 | 51.05 | 277 | 13974.65 | +166.2 | +1.19% | 1.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 531 | HD | 08-13 13:40 | 08-13 15:25 | 402.15 | 404.58 | 34 | 13673.1 | +82.62 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 532 | V | 08-13 13:40 | 08-13 14:30 | 342.35 | 341.73 | 40 | 13694 | -24.8 | -0.18% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.22 | ↓341.12 | 1.1232 | 2.59 | **LOSS** |
| 533 | KLAC | 08-13 13:40 | 08-13 14:00 | 947.82 | 945.17 | 14 | 13269.48 | -37.1 | -0.28% | 0.4R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.26 | ↓944.47 | 2.7277 | 2.09 | **LOSS** |
| 534 | PYPL | 08-13 13:45 | 08-13 15:30 | 69.19 | 69.63 | 201 | 13907.19 | +88.44 | +0.64% | 0.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.64 | ↑68.77 | 0.2369 | 1.27 | **WIN** |
| 535 | IBM | 08-13 14:00 | 08-13 14:55 | 240.26 | 240.08 | 58 | 13935.08 | -10.44 | -0.07% | 0.08R | 55m | market | stagnation | breakout | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 536 | AMD | 08-13 14:15 | 08-13 14:35 | 186.54 | 183.94 | 75 | 13990.5 | -195 | -1.39% | 0.7R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 89.19 | ↓184.32 | 3.1328 | 1.67 | **LOSS** |
| 537 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 538 | NVO | 08-15 13:30 | 08-15 15:15 | 51.65 | 51.93 | 271 | 13997.15 | +75.88 | +0.54% | 0.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 539 | CRM | 08-15 13:35 | 08-15 15:20 | 239.23 | 241.04 | 58 | 13875.34 | +104.98 | +0.76% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.24 | ↑237.54 | 0.34 | 2.03 | **WIN** |
| 540 | UNH | 08-15 13:35 | 08-15 13:45 | 300.14 | 298.95 | 46 | 13806.44 | -54.74 | -0.4% | 0.2R | 10m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.19 | ↓299.04 | 7.3176 | 6.17 | **LOSS** |
| 541 | NVO | 08-18 13:35 | 08-18 13:55 | 54.86 | 54.25 | 256 | 14044.16 | -156.16 | -1.11% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.82 | ↓54.61 | 0.5586 | 2.83 | **LOSS** |
| 542 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.73 | 92.87 | 152 | 13942.96 | +173.28 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 543 | NVO | 08-19 13:30 | 08-19 13:55 | 54.76 | 54.71 | 256 | 14018.56 | -12.8 | -0.09% | 0.11R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 544 | HD | 08-19 13:35 | 08-19 15:15 | 408.29 | 408.27 | 31 | 12656.99 | -0.62 | 0% | 0R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.97 | ↓406.13 | 1.451 | 1.16 | **LOSS** |
| 545 | ARM | 08-19 13:40 | 08-19 13:45 | 142.72 | 140.59 | 97 | 13843.84 | -206.61 | -1.49% | 2.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.59 | ↓142.02 | 0.2804 | 1.16 | **LOSS** |
| 546 | CAT | 08-19 13:40 | 08-19 15:25 | 417.64 | 419.47 | 33 | 13782.12 | +60.39 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.51 | ↑416.8 | 1.2247 | 1.46 | **WIN** |
| 547 | TGT | 08-19 13:40 | 08-19 14:00 | 107.01 | 106.65 | 131 | 14018.31 | -47.16 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.43 | ↑106.39 | 0.2896 | 1.14 | **LOSS** |
| 548 | LOW | 08-19 13:40 | 08-19 15:20 | 256.69 | 256.49 | 54 | 13861.26 | -10.8 | -0.08% | 0.11R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 549 | ADBE | 08-19 13:45 | 08-19 13:50 | 362.59 | 359.77 | 38 | 13778.42 | -107.16 | -0.78% | 1.11R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 82.7 | ↓360.86 | 0.8616 | 1.66 | **LOSS** |
| 550 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 551 | DDOG | 08-19 14:15 | 08-19 14:40 | 130.92 | 129.88 | 106 | 13877.52 | -110.24 | -0.79% | 0.86R | 25m | market | early-reversal | breakout | breakout | neutral | 70.26 | ↓129.95 | 0.3091 | 1.2 | **LOSS** |
| 552 | COST | 08-20 13:35 | 08-20 14:00 | 991.87 | 989.98 | 14 | 13886.18 | -26.46 | -0.19% | 0.27R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.11 | ↓988.29 | 1.5736 | 1.66 | **LOSS** |
| 553 | DIS | 08-20 13:40 | 08-20 14:00 | 117.69 | 116.86 | 118 | 13887.42 | -97.94 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.15 | ↓117.14 | 0.2421 | 1.5 | **LOSS** |
| 554 | COIN | 08-20 15:20 | 08-20 15:50 | 303.42 | 301.1 | 45 | 13653.9 | -104.4 | -0.76% | 0.63R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.44 | ↑296.78 | -0.2263 | 1.14 | **LOSS** |
| 555 | HPE | 08-20 15:20 | 08-20 15:45 | 21.04 | 20.96 | 570 | 11992.8 | -45.6 | -0.38% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.01 | ↑20.8 | -0.1327 | 1.37 | **LOSS** |
| 556 | CRWD | 08-20 15:25 | 08-20 15:45 | 417.63 | 416.48 | 33 | 13781.79 | -37.95 | -0.28% | 0.4R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.51 | ↑414.64 | -0.8738 | 3.49 | **LOSS** |
| 557 | DELL | 08-21 13:35 | 08-21 13:55 | 130.05 | 128.69 | 107 | 13915.35 | -145.52 | -1.05% | 1.38R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 558 | LLY | 08-21 13:40 | 08-21 14:00 | 715.64 | 711.32 | 19 | 13597.16 | -82.08 | -0.6% | 0.86R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 559 | MA | 08-22 13:30 | 08-22 14:20 | 598.31 | 598.12 | 23 | 13761.13 | -4.37 | -0.03% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.88 | ↓597.64 | 0.9013 | 1.99 | **LOSS** |
| 560 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 586 | 14081.58 | +275.42 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 561 | MU | 08-22 13:35 | 08-22 13:55 | 117.4 | 116.72 | 120 | 14088 | -81.6 | -0.58% | 0.71R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 562 | UBER | 08-22 13:35 | 08-22 13:55 | 95.51 | 95.56 | 146 | 13944.46 | +7.3 | +0.05% | 0.07R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 87.59 | ↑94.92 | 0.2746 | 2.38 | **WIN** |
| 563 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 564 | V | 08-22 13:35 | 08-22 15:20 | 348.28 | 349.78 | 40 | 13931.2 | +60 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.17 | ↑347.52 | 0.5668 | 1.32 | **WIN** |
| 565 | LMT | 08-22 13:40 | 08-22 14:05 | 452.09 | 449.1 | 30 | 13562.7 | -89.7 | -0.66% | 0.94R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.62 | ↓451.64 | 0.546 | 3.87 | **LOSS** |
| 566 | NVO | 08-22 13:40 | 08-22 14:00 | 57.45 | 57.12 | 226 | 12983.7 | -74.58 | -0.57% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.33 | ↓57.08 | 0.3126 | 1.63 | **LOSS** |
| 567 | QCOM | 08-22 13:45 | 08-22 15:30 | 156.3 | 158.62 | 89 | 13910.7 | +206.48 | +1.48% | 2.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.52 | ↑155.78 | 0.4832 | 1.59 | **WIN** |
| 568 | SMCI | 08-22 13:45 | 08-22 15:30 | 42.66 | 43.61 | 330 | 14077.8 | +313.5 | +2.23% | 1.86R | 105m | market | timeout | breakout | breakout | neutral | 61.97 | ↑42.24 | 0.0577 | 1.32 | **WIN** |
| 569 | AMD | 08-22 14:00 | 08-22 15:45 | 165.72 | 167.61 | 84 | 13920.48 | +158.76 | +1.14% | 0.9R | 105m | market | timeout | breakout | breakout | neutral | 60.21 | ↑163.91 | 0.1054 | 3.49 | **WIN** |
| 570 | ADBE | 08-22 14:00 | 08-22 14:55 | 360.86 | 360.14 | 38 | 13712.68 | -27.36 | -0.2% | 0.29R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 91.79 | ↑357.14 | 1.4333 | 2 | **LOSS** |
| 571 | ASML | 08-22 14:00 | 08-22 15:55 | 752.4 | 753.53 | 18 | 13543.2 | +20.34 | +0.15% | 0.21R | 115m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓745.02 | 2.4897 | 1.11 | **WIN** |
| 572 | HD | 08-22 14:00 | 08-22 15:45 | 404.92 | 413.97 | 34 | 13767.28 | +307.7 | +2.24% | 3.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 573 | TXN | 08-22 14:00 | 08-22 15:45 | 206.66 | 207.64 | 67 | 13846.22 | +65.66 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 574 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 62 | 13912.18 | +156.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 575 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 18 | 13519.44 | -81.18 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 576 | AVGO | 08-22 14:05 | 08-22 15:45 | 297.85 | 297.28 | 46 | 13701.1 | -26.22 | -0.19% | 0.15R | 100m | market | breakeven-stop | breakout | breakout | extendedBreakout | 81.61 | ↑292.68 | 1.7299 | 1.14 | **LOSS** |
| 577 | MU | 08-22 14:05 | 08-22 14:55 | 120.04 | 119.97 | 117 | 14044.68 | -8.19 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 578 | TSM | 08-22 14:05 | 08-22 15:50 | 231.38 | 233.15 | 60 | 13882.8 | +106.2 | +0.76% | 0.95R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 579 | PLTR | 08-22 14:05 | 08-22 15:05 | 158.31 | 162.13 | 89 | 14089.59 | +339.98 | +2.41% | 1.33R | 60m | market | profit-target | trend | breakout | noisyHighBeta | 55.67 | ↑155.74 | -0.1394 | 1.98 | **WIN** |
| 580 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.09 | 141.99 | 92 | 12980.28 | +82.8 | +0.64% | 0.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 581 | PANW | 08-22 14:05 | 08-22 14:55 | 186.52 | 186 | 75 | 13989 | -39 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 86.27 | ↑185.01 | 0.8172 | 1.31 | **LOSS** |
| 582 | SNOW | 08-22 14:05 | 08-22 14:55 | 199.25 | 199.12 | 69 | 13748.25 | -8.97 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 583 | PYPL | 08-22 14:05 | 08-22 15:50 | 69.17 | 69.12 | 202 | 13972.34 | -10.1 | -0.07% | 0.07R | 105m | market | stagnation | breakout | breakout | extendedBreakout | 83.9 | ↑68.47 | 0.316 | 1.25 | **LOSS** |
| 584 | NKE | 08-22 14:05 | 08-22 15:50 | 78.22 | 78.85 | 178 | 13923.16 | +112.14 | +0.81% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.74 | ↑77.22 | 0.4594 | 1.2 | **WIN** |
| 585 | RIVN | 08-22 14:05 | 08-22 15:50 | 12.51 | 12.82 | 1113 | 13923.63 | +345.03 | +2.48% | 1.62R | 105m | market | timeout | breakout | breakout | neutral | 78.87 | ↑12.35 | 0.0886 | 1.94 | **WIN** |
| 586 | MDB | 08-22 14:10 | 08-22 14:30 | 219.25 | 217.76 | 59 | 12935.75 | -87.91 | -0.68% | 0.49R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 78.12 | ↑215.14 | 1.31 | 1.11 | **LOSS** |
| 587 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 588 | AMAT | 08-22 14:10 | 08-22 15:00 | 164.38 | 164.27 | 85 | 13972.3 | -9.35 | -0.07% | 0.08R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 589 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 177 | 13129.86 | -30.09 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 590 | RIVN | 08-22 16:40 | 08-22 17:25 | 12.85 | 12.86 | 1087 | 13967.95 | +10.87 | +0.08% | 0.09R | 45m | market | breakeven-stop | trend | breakout | neutral | 59.6 | ↑12.6 | 0.0581 | 1.23 | **WIN** |
| 591 | GOOGL | 08-22 17:15 | 08-22 19:00 | 206.46 | 207.03 | 68 | 14039.28 | +38.76 | +0.28% | 0.4R | 105m | market | timeout | trend | breakout | neutral | 76.9 | ↑203.92 | 0.2482 | 3.69 | **WIN** |
| 592 | INTC | 08-22 17:25 | 08-22 17:55 | 24.94 | 24.73 | 566 | 14116.04 | -118.86 | -0.84% | 0.79R | 30m | market | early-reversal | breakout | breakout | noisyHighBeta | 76.76 | ↑24.45 | 0.053 | 3.74 | **LOSS** |
| 593 | NFLX | 08-25 13:35 | 08-25 15:20 | 1217.38 | 1224.93 | 11 | 13391.18 | +83.05 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.12 | ↑1208.78 | 1.0376 | 1.21 | **WIN** |
| 594 | NVO | 08-25 13:35 | 08-25 14:30 | 57.77 | 57.78 | 242 | 13980.34 | +2.42 | +0.02% | 0.03R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.38 | ↓57.54 | 0.126 | 2.86 | **WIN** |
| 595 | NKE | 08-25 13:35 | 08-25 14:20 | 79.57 | 79.19 | 175 | 13924.75 | -66.5 | -0.48% | 0.69R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.7 | ↓79.26 | 0.0895 | 1.56 | **LOSS** |
| 596 | RIVN | 08-25 13:45 | 08-25 14:25 | 13.23 | 13.25 | 1056 | 13970.88 | +21.12 | +0.15% | 0.12R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 73.47 | ↓13.1 | 0.071 | 1.29 | **WIN** |
| 597 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 598 | PLTR | 08-26 14:30 | 08-26 15:25 | 160.66 | 160.14 | 88 | 14138.08 | -45.76 | -0.32% | 0.21R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 81.7 | ↑157.41 | 0.3663 | 1.47 | **LOSS** |
| 599 | SBUX | 08-27 13:30 | 08-27 15:15 | 87.69 | 87.91 | 159 | 13942.71 | +34.98 | +0.25% | 0.36R | 105m | market | timeout | breakout | breakout | neutral | 77.14 | ↑87.37 | 0.0765 | 1.58 | **WIN** |
| 600 | NOW | 08-27 13:35 | 08-27 15:05 | 881.35 | 880.53 | 15 | 13220.25 | -12.3 | -0.09% | 0.13R | 90m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 601 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 69 | 13895.91 | +247.02 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 602 | ELF | 08-27 13:50 | 08-27 15:40 | 119.93 | 122.04 | 107 | 12832.51 | +225.77 | +1.76% | 1.63R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 96.62 | ↑118.28 | 1.1861 | 1.98 | **WIN** |
| 603 | ELF | 08-27 17:55 | 08-27 18:50 | 125.04 | 124.2 | 111 | 13879.44 | -93.24 | -0.67% | 0.96R | 55m | market | early-reversal | breakout | breakout | extendedBreakout | 74.49 | ↑121.58 | 1.186 | 2.43 | **LOSS** |
| 604 | AMD | 08-28 13:35 | 08-28 13:50 | 170.19 | 167.97 | 82 | 13955.58 | -182.04 | -1.3% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 605 | ORCL | 08-28 13:35 | 08-28 15:20 | 238.52 | 240.01 | 59 | 14072.68 | +87.91 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.35 | ↑237.49 | 0.2539 | 2.24 | **WIN** |
| 606 | MU | 08-28 13:35 | 08-28 13:55 | 121.02 | 118.84 | 116 | 14038.32 | -252.88 | -1.8% | 2.12R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 607 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 97 | 13928.23 | -94.09 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 608 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 609 | SNOW | 08-28 13:45 | 08-28 14:15 | 232.21 | 239.44 | 55 | 12771.55 | +397.65 | +3.11% | 1.56R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 82.4 | ↑228.12 | 7.4764 | 2.11 | **WIN** |
| 610 | SNOW | 08-28 17:05 | 08-28 18:50 | 242.32 | 245.9 | 57 | 13812.24 | +204.06 | +1.48% | 1.36R | 105m | market | timeout | breakout | breakout | neutral | 85.04 | ↑234.12 | 0.6388 | 1.89 | **WIN** |
| 611 | CELH | 08-29 13:45 | 08-29 15:10 | 62.38 | 62.34 | 204 | 12725.52 | -8.16 | -0.06% | 0.03R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.15 | ↓61.99 | 0.5071 | 1.98 | **LOSS** |
| 612 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.67 | 156.35 | 89 | 14032.63 | -117.48 | -0.84% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 613 | COIN | 09-02 14:30 | 09-02 14:50 | 309.7 | 307.63 | 44 | 13626.8 | -91.08 | -0.67% | 0.38R | 20m | market | early-reversal | breakout | breakout | neutral | 63.14 | ↑304.84 | 0.6174 | 1.21 | **LOSS** |
| 614 | HPE | 09-03 13:30 | 09-03 13:50 | 22.98 | 22.75 | 608 | 13971.84 | -139.84 | -1% | 1.43R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.72 | ↓22.97 | 0.0741 | 1.25 | **LOSS** |
| 615 | UBER | 09-03 13:35 | 09-03 13:55 | 93.92 | 93.01 | 148 | 13900.16 | -134.68 | -0.97% | 1.39R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.46 | ↓93.4 | 0.0909 | 1.57 | **LOSS** |
| 616 | ASML | 09-03 13:45 | 09-03 14:35 | 736.65 | 735.99 | 19 | 13996.35 | -12.54 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.6 | ↑732.83 | 2.2307 | 1.33 | **LOSS** |
| 617 | RIVN | 09-03 14:05 | 09-03 15:50 | 14.53 | 14.88 | 962 | 13977.86 | +336.7 | +2.41% | 1.28R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 81.16 | ↑14.25 | 0.2065 | 1.19 | **WIN** |
| 618 | AVGO | 09-04 13:30 | 09-04 13:40 | 307.79 | 303.63 | 45 | 13850.55 | -187.2 | -1.35% | 1.8R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.99 | ↓307.09 | 1.0027 | 5.58 | **LOSS** |
| 619 | NFLX | 09-04 13:40 | 09-04 14:00 | 1245.03 | 1238.63 | 11 | 13695.33 | -70.4 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.16 | ↓1241.48 | 6.1692 | 2.12 | **LOSS** |
| 620 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.39 | 100.15 | 140 | 13914.6 | +106.4 | +0.76% | 0.75R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 621 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 622 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 61 | 13003.98 | -77.47 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 623 | CRM | 09-05 13:35 | 09-05 14:55 | 247.34 | 247.15 | 56 | 13851.04 | -10.64 | -0.08% | 0.1R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.66 | ↓246.29 | 0.5948 | 1.57 | **LOSS** |
| 624 | ADBE | 09-05 13:35 | 09-05 14:10 | 353.01 | 349.79 | 39 | 13767.39 | -125.58 | -0.91% | 1.3R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.68 | ↓350.85 | 1.6664 | 4.86 | **LOSS** |
| 625 | DDOG | 09-05 13:35 | 09-05 14:20 | 134.43 | 133.59 | 103 | 13846.29 | -86.52 | -0.62% | 0.89R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.69 | ↓133.92 | 0.254 | 1.7 | **LOSS** |
| 626 | PYPL | 09-05 13:35 | 09-05 13:55 | 69.89 | 69.49 | 200 | 13978 | -80 | -0.57% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.23 | ↓69.37 | 0.215 | 1.68 | **LOSS** |
| 627 | KLAC | 09-05 13:35 | 09-05 14:15 | 886.49 | 882.17 | 15 | 13297.35 | -64.8 | -0.49% | 0.7R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 628 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 59 | 13862.64 | -50.15 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 629 | TSM | 09-05 13:40 | 09-05 14:05 | 241.79 | 240.7 | 53 | 12814.87 | -57.77 | -0.45% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.7 | ↓240.79 | 1.3629 | 2.93 | **LOSS** |
| 630 | PANW | 09-05 13:40 | 09-05 14:00 | 196.18 | 195.28 | 71 | 13928.78 | -63.9 | -0.46% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 79.3 | ↑194.73 | 0.1105 | 1.1 | **LOSS** |
| 631 | CRWD | 09-05 13:40 | 09-05 13:55 | 417.46 | 412.62 | 33 | 13776.18 | -159.72 | -1.16% | 1.53R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 61.48 | ↓415.34 | 0.438 | 1.2 | **LOSS** |
| 632 | SNOW | 09-05 13:40 | 09-05 14:10 | 225.81 | 224.43 | 62 | 14000.22 | -85.56 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.3 | ↓224.98 | 0.5106 | 1.54 | **LOSS** |
| 633 | RIVN | 09-05 13:40 | 09-05 14:15 | 14.19 | 14.09 | 918 | 13026.42 | -91.8 | -0.7% | 0.56R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.07 | ↓13.97 | 0.0939 | 2.1 | **LOSS** |
| 634 | ASML | 09-05 13:45 | 09-05 14:10 | 778.52 | 775.04 | 17 | 13234.84 | -59.16 | -0.45% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.34 | ↓775.83 | 5.0424 | 2.8 | **LOSS** |
| 635 | UNH | 09-05 13:45 | 09-05 14:10 | 314.49 | 313.08 | 44 | 13837.56 | -62.04 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 636 | RIVN | 09-05 14:25 | 09-05 14:45 | 14.39 | 14.26 | 897 | 12907.83 | -116.61 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | breakout | neutral | 74.53 | ↑14.21 | 0.189 | 1.13 | **LOSS** |
| 637 | RIVN | 09-05 16:50 | 09-05 17:10 | 14.49 | 14.4 | 966 | 13997.34 | -86.94 | -0.62% | 0.52R | 20m | market | early-reversal | breakout | breakout | thinChop | 49.62 | ↑14.27 | 0.0263 | 1.36 | **LOSS** |
| 638 | SNOW | 09-08 13:35 | 09-08 14:40 | 228.48 | 228.13 | 61 | 13937.28 | -21.35 | -0.15% | 0.21R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 82.91 | ↓227.54 | 0.5413 | 1.34 | **LOSS** |
| 639 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 64 | 14029.44 | -112.64 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 640 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 220 | 14119.6 | +176 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 641 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 642 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 18 | 13775.76 | -76.68 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 643 | ORCL | 09-08 13:40 | 09-08 14:15 | 238.99 | 237.32 | 59 | 14100.41 | -98.53 | -0.7% | 0.43R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.79 | ↓237.83 | 1.4607 | 1.42 | **LOSS** |
| 644 | PLTR | 09-08 13:40 | 09-08 15:00 | 156.75 | 156.52 | 90 | 14107.5 | -20.7 | -0.15% | 0.11R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 65.82 | ↓156.45 | 0.5453 | 1.47 | **LOSS** |
| 645 | LLY | 09-08 16:55 | 09-08 17:15 | 732.03 | 729.82 | 19 | 13908.57 | -41.99 | -0.3% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 70.55 | ↑726.19 | 0.3824 | 8.21 | **LOSS** |
| 646 | PLTR | 09-09 13:30 | 09-09 13:50 | 158.74 | 157.85 | 89 | 14127.86 | -79.21 | -0.56% | 0.68R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.18 | ↓158.31 | 0.0905 | 2.23 | **LOSS** |
| 647 | SMCI | 09-09 13:30 | 09-09 13:50 | 40.53 | 40.36 | 348 | 14104.44 | -59.16 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.24 | ↓40.44 | -0.0005 | 2.38 | **LOSS** |
| 648 | AMD | 09-09 13:35 | 09-09 13:50 | 154.08 | 152.45 | 90 | 13867.2 | -146.7 | -1.06% | 1.47R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.54 | ↓153.27 | 0.4219 | 3.06 | **LOSS** |
| 649 | JPM | 09-09 14:40 | 09-09 15:00 | 298.79 | 296.9 | 46 | 13744.34 | -86.94 | -0.63% | 0.78R | 20m | market | early-reversal | breakout | breakout | neutral | 78.05 | ↑295.46 | 1.0486 | 1.7 | **LOSS** |
| 650 | GS | 09-09 14:40 | 09-09 16:00 | 756.32 | 755.8 | 18 | 13613.76 | -9.36 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 80.5 | ↑749.54 | 3.765 | 2.24 | **LOSS** |
| 651 | SMCI | 09-09 15:25 | 09-09 17:10 | 41.59 | 42.27 | 339 | 14099.01 | +230.52 | +1.64% | 1.37R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81.84 | ↑40.65 | 0.2968 | 1.84 | **WIN** |
| 652 | UNH | 09-09 15:25 | 09-09 17:10 | 340.22 | 345.98 | 41 | 13949.02 | +236.16 | +1.69% | 1.67R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.41 | ↑332.07 | 3.8569 | 1.78 | **WIN** |
| 653 | NVO | 09-09 15:35 | 09-09 15:55 | 53.91 | 53.69 | 259 | 13962.69 | -56.98 | -0.41% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 67.34 | ↑53.19 | 0.0258 | 3.28 | **LOSS** |
| 654 | PLTR | 09-09 15:55 | 09-09 17:40 | 160.83 | 161.84 | 87 | 13992.21 | +87.87 | +0.63% | 0.75R | 105m | market | timeout | breakout | breakout | neutral | 88.65 | ↑158.62 | 0.5612 | 3.84 | **WIN** |
| 655 | MU | 09-10 13:30 | 09-10 14:50 | 140.29 | 140.32 | 92 | 12906.68 | +2.76 | +0.02% | 0.01R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.78 | ↓140.24 | 0.633 | 6.2 | **WIN** |
| 656 | TSM | 09-10 13:30 | 09-10 15:15 | 259.48 | 263.76 | 49 | 12714.52 | +209.72 | +1.65% | 1.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.53 | ↑259.18 | 0.4067 | 4.21 | **WIN** |
| 657 | MRVL | 09-10 13:30 | 09-10 13:50 | 68.09 | 67.29 | 208 | 14162.72 | -166.4 | -1.17% | 1.41R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.39 | ↓68.12 | 0.1225 | 2.27 | **LOSS** |
| 658 | SMCI | 09-10 13:35 | 09-10 14:30 | 44.21 | 44.73 | 297 | 13130.37 | +154.44 | +1.18% | 1.04R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 92.58 | ↓43.94 | 0.3146 | 2.03 | **WIN** |
| 659 | DELL | 09-10 13:35 | 09-10 13:55 | 125.38 | 124.73 | 102 | 12788.76 | -66.3 | -0.52% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↓124.5 | 0.6563 | 1.36 | **LOSS** |
| 660 | SNOW | 09-10 13:40 | 09-10 14:10 | 231.09 | 229.03 | 60 | 13865.4 | -123.6 | -0.89% | 0.9R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.75 | ↓229.59 | 1.1173 | 1.39 | **LOSS** |
| 661 | MDB | 09-10 13:40 | 09-10 14:05 | 341.74 | 339.74 | 37 | 12644.38 | -74 | -0.59% | 0.6R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.2 | ↓339.78 | 2.2171 | 1.2 | **LOSS** |
| 662 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 570 | 14113.2 | -96.9 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 663 | NOW | 09-10 13:45 | 09-10 14:05 | 944.28 | 937.88 | 14 | 13219.92 | -89.6 | -0.68% | 0.97R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.39 | ↓938.4 | 1.3648 | 1.13 | **LOSS** |
| 664 | ARM | 09-10 13:55 | 09-10 15:40 | 149.21 | 151.3 | 93 | 13876.53 | +194.37 | +1.4% | 0.82R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.83 | ↑147.98 | 1.9869 | 2.59 | **WIN** |
| 665 | RIVN | 09-10 17:10 | 09-10 18:50 | 14.01 | 14.02 | 998 | 13981.98 | +9.98 | +0.07% | 0.09R | 100m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 71.08 | ↑13.86 | 0.0255 | 1.79 | **WIN** |
| 666 | AMAT | 09-11 13:35 | 09-11 15:20 | 168.27 | 169.91 | 77 | 12956.79 | +126.28 | +0.97% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.28 | ↑167.16 | 0.6438 | 2.11 | **WIN** |
| 667 | RIVN | 09-11 13:35 | 09-11 14:00 | 14.47 | 14.29 | 890 | 12878.3 | -160.2 | -1.24% | 0.78R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.77 | ↓14.34 | 0.0133 | 1.75 | **LOSS** |
| 668 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 669 | INTU | 09-11 13:45 | 09-11 14:05 | 665.74 | 660.83 | 21 | 13980.54 | -103.11 | -0.74% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.05 | ↓663.92 | 1.8587 | 1.14 | **LOSS** |
| 670 | SMCI | 09-11 13:55 | 09-11 14:15 | 44.29 | 43.71 | 320 | 14172.8 | -185.6 | -1.31% | 0.91R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.82 | ↓43.98 | 0.0436 | 1.16 | **LOSS** |
| 671 | CAT | 09-11 14:00 | 09-11 14:20 | 435.28 | 432.88 | 32 | 13928.96 | -76.8 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.28 | ↓433.3 | 1.7475 | 5.99 | **LOSS** |
| 672 | MSFT | 09-12 13:40 | 09-12 15:25 | 506.95 | 510.56 | 27 | 13687.65 | +97.47 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.7 | ↑505.56 | 1.1579 | 1.6 | **WIN** |
| 673 | ELF | 09-12 15:20 | 09-12 15:50 | 140.14 | 139.45 | 99 | 13873.86 | -68.31 | -0.49% | 0.6R | 30m | market | early-reversal | breakout | breakout | neutral | 73.82 | ↑138 | 0.4712 | 1.52 | **LOSS** |
| 674 | ADBE | 09-15 13:30 | 09-15 13:50 | 353.71 | 351.82 | 39 | 13794.69 | -73.71 | -0.53% | 0.69R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.56 | ↓353.28 | 0.554 | 2.33 | **LOSS** |
| 675 | SNOW | 09-15 13:30 | 09-15 15:15 | 224.15 | 226.66 | 62 | 13897.3 | +155.62 | +1.12% | 1.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.23 | ↑223.8 | 0.0256 | 1.74 | **WIN** |
| 676 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 677 | PANW | 09-15 13:40 | 09-15 15:25 | 200.01 | 200.8 | 69 | 13800.69 | +54.51 | +0.39% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.11 | ↑198.53 | 0.2926 | 1.15 | **WIN** |
| 678 | PYPL | 09-15 13:40 | 09-15 14:00 | 67.81 | 67.5 | 205 | 13901.05 | -63.55 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.9 | ↓67.57 | 0.1129 | 1.18 | **LOSS** |
| 679 | ASML | 09-15 13:45 | 09-15 15:30 | 842.18 | 858.92 | 15 | 12632.7 | +251.1 | +1.99% | 2.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.04 | ↑840.18 | 7.076 | 2.75 | **WIN** |
| 680 | UBER | 09-15 13:50 | 09-15 14:15 | 98.27 | 97.73 | 141 | 13856.07 | -76.14 | -0.55% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.22 | ↑96.75 | 0.4259 | 1.24 | **LOSS** |
| 681 | CRWD | 09-15 14:00 | 09-15 14:20 | 448.91 | 443.78 | 31 | 13916.21 | -159.03 | -1.14% | 1.48R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.35 | ↓443.63 | 2.1537 | 1.34 | **LOSS** |
| 682 | CELH | 09-15 14:35 | 09-15 16:05 | 57.45 | 57.4 | 241 | 13845.45 | -12.05 | -0.09% | 0.06R | 90m | market | stagnation | breakout | breakout | neutral | 44.87 | ↑56.77 | -0.2798 | 1.32 | **LOSS** |
| 683 | DDOG | 09-15 15:45 | 09-15 16:10 | 139.44 | 138.77 | 100 | 13944 | -67 | -0.48% | 0.66R | 25m | market | early-reversal | breakout | breakout | neutral | 73.47 | ↑137.99 | 0.219 | 3.72 | **LOSS** |
| 684 | QCOM | 09-16 13:30 | 09-16 15:15 | 163.06 | 164.65 | 85 | 13860.1 | +135.15 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.94 | ↑162.52 | 0.2241 | 2.43 | **WIN** |
| 685 | GE | 09-16 13:35 | 09-16 13:55 | 290.97 | 289.66 | 47 | 13675.59 | -61.57 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.6 | ↓290.04 | 0.7858 | 1.52 | **LOSS** |
| 686 | AMAT | 09-16 13:35 | 09-16 13:50 | 173.83 | 172.28 | 80 | 13906.4 | -124 | -0.89% | 1.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.64 | ↓173.47 | 0.4738 | 1.22 | **LOSS** |
| 687 | KLAC | 09-16 13:35 | 09-16 13:45 | 1001.63 | 993.43 | 13 | 13021.19 | -106.6 | -0.82% | 1.17R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.75 | ↓999.43 | 4.8186 | 3.58 | **LOSS** |
| 688 | AAPL | 09-16 13:50 | 09-16 14:40 | 239.89 | 239.22 | 58 | 13913.62 | -38.86 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.06 | ↓238.23 | 0.7303 | 1.96 | **LOSS** |
| 689 | ABNB | 09-17 13:35 | 09-17 14:30 | 124.06 | 123.99 | 112 | 13894.72 | -7.84 | -0.06% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.38 | ↑123.06 | 0.5967 | 1.41 | **LOSS** |
| 690 | INTU | 09-17 13:40 | 09-17 14:30 | 661.41 | 660.92 | 21 | 13889.61 | -10.29 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↑659.44 | 2.8021 | 1.81 | **LOSS** |
| 691 | HPE | 09-17 13:45 | 09-17 14:05 | 24.89 | 24.79 | 561 | 13963.29 | -56.1 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.8 | ↑24.76 | 0.066 | 2.25 | **LOSS** |
| 692 | LRCX | 09-17 13:50 | 09-17 14:40 | 122.19 | 121.39 | 114 | 13929.66 | -91.2 | -0.65% | 0.65R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.66 | ↓120.95 | 0.346 | 2.64 | **LOSS** |
| 693 | AMAT | 09-17 14:00 | 09-17 15:00 | 177.89 | 177.54 | 78 | 13875.42 | -27.3 | -0.2% | 0.24R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 92.63 | ↑176.09 | 0.9433 | 1.71 | **LOSS** |
| 694 | CELH | 09-17 15:15 | 09-17 16:30 | 56.81 | 56.74 | 243 | 13804.83 | -17.01 | -0.12% | 0.15R | 75m | market | stagnation | breakout | breakout | neutral | 74.67 | ↑55.95 | 0.2635 | 2.14 | **LOSS** |
| 695 | PANW | 09-18 13:30 | 09-18 15:15 | 205.56 | 206.18 | 68 | 13978.08 | +42.16 | +0.3% | 0.35R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.17 | ↑205.09 | 0.5795 | 3.91 | **WIN** |
| 696 | META | 09-18 13:40 | 09-18 15:05 | 785.85 | 784.72 | 17 | 13359.45 | -19.21 | -0.14% | 0.14R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 697 | QCOM | 09-18 13:40 | 09-18 14:50 | 167.33 | 167.18 | 83 | 13888.39 | -12.45 | -0.09% | 0.09R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.33 | ↓167.03 | 0.413 | 3.99 | **LOSS** |
| 698 | SHOP | 09-18 14:05 | 09-18 14:30 | 151.21 | 150.3 | 92 | 13911.32 | -83.72 | -0.6% | 0.48R | 25m | market | early-reversal | breakout | breakout | neutral | 79.96 | ↑149.88 | 0.8373 | 1.12 | **LOSS** |
| 699 | COIN | 09-18 14:10 | 09-18 15:15 | 332.99 | 345.41 | 41 | 13652.59 | +509.22 | +3.73% | 2.25R | 65m | market | profit-target | breakout | breakout | neutral | 77.92 | ↑328.69 | 3.1016 | 2.09 | **WIN** |
| 700 | INTU | 09-18 15:35 | 09-18 15:45 | 691.5 | 684.97 | 20 | 13830 | -130.6 | -0.94% | 1.16R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 88.66 | ↑678.24 | 6.0432 | 1.71 | **LOSS** |
| 701 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 702 | PLTR | 09-19 13:35 | 09-19 15:20 | 179.54 | 181.08 | 78 | 14004.12 | +120.12 | +0.86% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66 | ↑178.71 | 0.3623 | 1.55 | **WIN** |
| 703 | SBUX | 09-19 14:15 | 09-19 14:35 | 84.83 | 84.42 | 164 | 13912.12 | -67.24 | -0.48% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.11 | ↑84.01 | 0.2952 | 1.16 | **LOSS** |
| 704 | ORCL | 09-22 13:30 | 09-22 13:55 | 309.88 | 307.61 | 45 | 13944.6 | -102.15 | -0.73% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 59.78 | ↓309.27 | 0.8707 | 2.2 | **LOSS** |
| 705 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 468 | 14082.12 | -271.44 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 706 | ASML | 09-22 13:40 | 09-22 14:15 | 958.72 | 954.65 | 13 | 12463.36 | -52.91 | -0.42% | 0.47R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.19 | ↓959.19 | 4.1997 | 1.66 | **LOSS** |
| 707 | SMCI | 09-22 13:45 | 09-22 14:15 | 46.58 | 46.28 | 303 | 14113.74 | -90.9 | -0.64% | 0.48R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.23 | ↑45.87 | -0.0026 | 1.85 | **LOSS** |
| 708 | RIVN | 09-22 13:45 | 09-22 14:35 | 14.56 | 14.94 | 959 | 13963.04 | +364.42 | +2.61% | 1.73R | 50m | market | profit-target | breakout | breakout | falseBreakoutProne | 78.95 | ↑14.41 | 0.0465 | 2.38 | **WIN** |
| 709 | NVDA | 09-22 16:05 | 09-22 16:35 | 178.87 | 183.16 | 78 | 13951.86 | +334.62 | +2.4% | 3.43R | 30m | market | profit-target | breakout | breakout | neutral | 81.1 | ↑175.97 | 0.3519 | 3.58 | **WIN** |
| 710 | SMCI | 09-22 16:05 | 09-22 16:35 | 46.7 | 47.91 | 302 | 14103.4 | +365.42 | +2.59% | 3.01R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 71.28 | ↑46.19 | 0.075 | 3.14 | **WIN** |
| 711 | ARM | 09-22 16:15 | 09-22 17:10 | 144.89 | 144.82 | 96 | 13909.44 | -6.72 | -0.05% | 0.07R | 55m | market | stagnation | breakout | breakout | thinChop | 78.14 | ↑142.72 | 0.3302 | 1.34 | **LOSS** |
| 712 | SMCI | 09-22 16:45 | 09-22 17:30 | 48.11 | 47.74 | 295 | 14192.45 | -109.15 | -0.77% | 0.47R | 45m | market | early-reversal | breakout | breakout | neutral | 89.55 | ↑46.74 | 0.4563 | 1.37 | **LOSS** |
| 713 | RIVN | 09-22 17:40 | 09-22 19:25 | 15.13 | 15.31 | 926 | 14010.38 | +166.68 | +1.19% | 1.02R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.53 | ↑14.81 | 0.0235 | 1.72 | **WIN** |
| 714 | BA | 09-23 13:40 | 09-23 15:25 | 215.85 | 216.21 | 65 | 14030.25 | +23.4 | +0.17% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.63 | ↓215.93 | 0.6238 | 2 | **WIN** |
| 715 | ASML | 09-23 13:45 | 09-23 14:35 | 975.1 | 973.12 | 14 | 13651.4 | -27.72 | -0.2% | 0.29R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.37 | ↑968.79 | 2.0287 | 1.8 | **LOSS** |
| 716 | PLTR | 09-23 13:45 | 09-23 14:05 | 184.82 | 182.16 | 76 | 14046.32 | -202.16 | -1.44% | 1.07R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.35 | ↓183.95 | 1.1704 | 1.3 | **LOSS** |
| 717 | ELF | 09-23 14:10 | 09-23 14:35 | 140.06 | 138.92 | 99 | 13865.94 | -112.86 | -0.81% | 0.89R | 25m | market | early-reversal | breakout | breakout | neutral | 71.08 | ↓138.71 | 0.4203 | 2.59 | **LOSS** |
| 718 | CRM | 09-24 13:35 | 09-24 14:00 | 247.79 | 246.53 | 56 | 13876.24 | -70.56 | -0.51% | 0.73R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 78.19 | ↓246.89 | 0.0882 | 1.74 | **LOSS** |
| 719 | UNH | 09-24 13:35 | 09-24 13:45 | 354.17 | 350.36 | 39 | 13812.63 | -148.59 | -1.08% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.22 | ↓353.21 | 0.683 | 3.05 | **LOSS** |
| 720 | MRVL | 09-24 13:50 | 09-24 14:10 | 78.15 | 77.2 | 181 | 14145.15 | -171.95 | -1.22% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.89 | ↓77.53 | 0.8047 | 1.69 | **LOSS** |
| 721 | RIVN | 09-24 16:40 | 09-24 17:30 | 15.75 | 15.7 | 891 | 14033.25 | -44.55 | -0.32% | 0.31R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 69.23 | ↑15.34 | 0.07 | 2.07 | **LOSS** |
| 722 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 723 | PLTR | 09-25 14:15 | 09-25 16:00 | 180.83 | 183.37 | 78 | 14104.74 | +198.12 | +1.4% | 0.7R | 105m | market | timeout | breakout | breakout | neutral | 56.8 | ↑177.11 | 0.1758 | 1.15 | **WIN** |
| 724 | SMCI | 09-25 15:40 | 09-25 16:25 | 45.97 | 45.83 | 308 | 14158.76 | -43.12 | -0.3% | 0.34R | 45m | market | early-reversal | breakout | breakout | neutral | 79.55 | ↑45.04 | -0.0416 | 2.27 | **LOSS** |
| 725 | RIVN | 09-25 15:40 | 09-25 16:00 | 15.97 | 15.88 | 878 | 14021.66 | -79.02 | -0.56% | 0.47R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 79.66 | ↑15.58 | 0.0744 | 1.96 | **LOSS** |
| 726 | PANW | 09-25 15:45 | 09-25 16:10 | 203.34 | 202.39 | 68 | 13827.12 | -64.6 | -0.47% | 0.67R | 25m | market | early-reversal | breakout | breakout | neutral | 77.41 | ↑200.39 | 0.6177 | 2.35 | **LOSS** |
| 727 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 728 | IBM | 09-26 13:30 | 09-26 14:30 | 284.88 | 284.67 | 49 | 13959.12 | -10.29 | -0.07% | 0.09R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.68 | ↓283.72 | 0.4052 | 2.83 | **LOSS** |
| 729 | MSFT | 09-26 13:35 | 09-26 14:00 | 513.23 | 511.78 | 27 | 13857.21 | -39.15 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.26 | ↓511.54 | 0.6153 | 2.31 | **LOSS** |
| 730 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 731 | JPM | 09-26 13:40 | 09-26 14:00 | 316.92 | 315.53 | 44 | 13944.48 | -61.16 | -0.44% | 0.63R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.81 | ↓316.22 | 0.6192 | 1.47 | **LOSS** |
| 732 | BAC | 09-26 13:40 | 09-26 14:10 | 52.46 | 52.3 | 266 | 13954.36 | -42.56 | -0.3% | 0.43R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.8 | ↓52.32 | 0.1059 | 2.41 | **LOSS** |
| 733 | BA | 09-26 13:40 | 09-26 14:55 | 220.43 | 220.15 | 63 | 13887.09 | -17.64 | -0.13% | 0.11R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.14 | ↓220.69 | 1.3581 | 2.08 | **LOSS** |
| 734 | RIVN | 09-26 13:40 | 09-26 14:05 | 16.02 | 15.87 | 812 | 13008.24 | -121.8 | -0.94% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 58.89 | ↓15.92 | 0.0725 | 1.13 | **LOSS** |
| 735 | SNOW | 09-26 13:45 | 09-26 14:05 | 225.28 | 223.6 | 62 | 13967.36 | -104.16 | -0.75% | 1.07R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.75 | ↓223.6 | 0.4509 | 1.85 | **LOSS** |
| 736 | RIVN | 09-26 16:20 | 09-26 16:40 | 15.88 | 15.83 | 882 | 14006.16 | -44.1 | -0.31% | 0.32R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓15.83 | -0.0219 | 2.13 | **LOSS** |
| 737 | AMD | 09-29 13:30 | 09-29 15:15 | 161.16 | 163.37 | 86 | 13859.76 | +190.06 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.28 | ↑160.72 | 0.2469 | 1.2 | **WIN** |
| 738 | AVGO | 09-29 13:35 | 09-29 13:55 | 340.42 | 337.35 | 40 | 13616.8 | -122.8 | -0.9% | 1.29R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.56 | ↓338.91 | 0.6918 | 2.06 | **LOSS** |
| 739 | TSM | 09-29 13:35 | 09-29 14:00 | 278.33 | 277.14 | 50 | 13916.5 | -59.5 | -0.43% | 0.61R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↓277.3 | 0.6404 | 1.24 | **LOSS** |
| 740 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 76 | 13957.4 | -71.44 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 741 | ARM | 09-29 13:40 | 09-29 14:00 | 142.07 | 141.14 | 98 | 13922.86 | -91.14 | -0.65% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.24 | ↓141.55 | 0.3643 | 1.26 | **LOSS** |
| 742 | COIN | 09-29 13:40 | 09-29 14:15 | 319 | 328.32 | 43 | 13717 | +400.76 | +2.92% | 3.21R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.77 | ↑318.11 | 1.0036 | 1.41 | **WIN** |
| 743 | PYPL | 09-29 13:40 | 09-29 14:55 | 68.49 | 70.85 | 203 | 13903.47 | +479.08 | +3.45% | 4.93R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 85.2 | ↑68.24 | 0.1549 | 1.45 | **WIN** |
| 744 | SBUX | 09-29 13:40 | 09-29 15:25 | 84.35 | 85.29 | 165 | 13917.75 | +155.1 | +1.11% | 1.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.41 | ↑84 | 0.1632 | 1.88 | **WIN** |
| 745 | MU | 09-29 13:45 | 09-29 14:35 | 164.67 | 164.49 | 78 | 12844.26 | -14.04 | -0.11% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.38 | ↑163.09 | 1.405 | 2.34 | **LOSS** |
| 746 | KLAC | 09-29 13:45 | 09-29 14:05 | 1085.65 | 1080.26 | 12 | 13027.8 | -64.68 | -0.5% | 0.71R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.22 | ↓1082.31 | 5.8509 | 2.48 | **LOSS** |
| 747 | AMAT | 09-29 14:40 | 09-29 15:00 | 209.93 | 208.67 | 66 | 13855.38 | -83.16 | -0.6% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 75.25 | ↑207.58 | 1.1826 | 1.93 | **LOSS** |
| 748 | SHOP | 09-29 17:00 | 09-29 17:10 | 143.92 | 145.8 | 97 | 13960.24 | +182.36 | +1.31% | 1.7R | 10m | market | trailing-stop | breakout | breakout | neutral | 76.28 | ↑142.05 | 0.3214 | 6.59 | **WIN** |
| 749 | SHOP | 09-29 17:55 | 09-29 18:50 | 148.22 | 148.12 | 94 | 13932.68 | -9.4 | -0.07% | 0.04R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 77.06 | ↑144.78 | 1.7367 | 1.47 | **LOSS** |
| 750 | LLY | 09-30 16:35 | 09-30 18:20 | 746.61 | 758.79 | 18 | 13438.98 | +219.24 | +1.63% | 2.33R | 105m | market | timeout | breakout | breakout | neutral | 85.28 | ↑734.51 | 2.5349 | 3.01 | **WIN** |
| 751 | NOW | 10-01 13:30 | 10-01 13:50 | 930.48 | 926.32 | 15 | 13957.2 | -62.4 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88 | ↓928.19 | 3.2696 | 1.1 | **LOSS** |
| 752 | AAPL | 10-01 13:35 | 10-01 13:45 | 258.07 | 255.43 | 54 | 13935.78 | -142.56 | -1.02% | 1.46R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.16 | ↓256.81 | 0.6605 | 2.53 | **LOSS** |
| 753 | TSM | 10-01 13:35 | 10-01 15:20 | 282.05 | 285.2 | 49 | 13820.45 | +154.35 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.02 | ↑280.93 | 0.9152 | 2.11 | **WIN** |
| 754 | COIN | 10-01 13:35 | 10-01 15:20 | 344.6 | 345.72 | 40 | 13784 | +44.8 | +0.33% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.91 | ↓343.66 | 2.4689 | 2.26 | **WIN** |
| 755 | DDOG | 10-01 13:40 | 10-01 15:25 | 147.5 | 150.13 | 87 | 12832.5 | +228.81 | +1.78% | 1.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.06 | ↑146.63 | 1.401 | 1.42 | **WIN** |
| 756 | DELL | 10-01 13:40 | 10-01 14:00 | 147.21 | 145.29 | 87 | 12807.27 | -167.04 | -1.3% | 1R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 96.21 | ↓145.4 | 1.6678 | 3.56 | **LOSS** |
| 757 | MDB | 10-01 13:45 | 10-01 14:05 | 320.21 | 318.57 | 43 | 13769.03 | -70.52 | -0.51% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.66 | ↓317.96 | 2.0827 | 1.78 | **LOSS** |
| 758 | TSLA | 10-01 14:20 | 10-01 15:20 | 455.01 | 453.68 | 30 | 13650.3 | -39.9 | -0.29% | 0.2R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 75.29 | ↑447.98 | 2.5993 | 1.16 | **LOSS** |
| 759 | LRCX | 10-01 14:35 | 10-01 14:55 | 136.77 | 136.01 | 102 | 13950.54 | -77.52 | -0.56% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 73.37 | ↑134.38 | 0.7952 | 1.31 | **LOSS** |
| 760 | NVO | 10-01 15:05 | 10-01 16:50 | 58.22 | 58.75 | 240 | 13972.8 | +127.2 | +0.91% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 90.73 | ↑57.27 | 0.6747 | 1.6 | **WIN** |
| 761 | CELH | 10-01 15:15 | 10-01 15:45 | 57.5 | 57.27 | 240 | 13800 | -55.2 | -0.4% | 0.35R | 30m | market | early-reversal | breakout | breakout | thinChop | 50.37 | ↑57 | -0.1466 | 1.12 | **LOSS** |
| 762 | ORCL | 10-02 13:30 | 10-02 13:40 | 294.22 | 289.76 | 47 | 13828.34 | -209.62 | -1.52% | 1.97R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.9 | ↓293.08 | 1.125 | 1.97 | **LOSS** |
| 763 | COIN | 10-02 13:35 | 10-02 14:15 | 359.91 | 361.38 | 35 | 12596.85 | +51.45 | +0.41% | 0.34R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 90.09 | ↓357.02 | 2.0145 | 1.85 | **WIN** |
| 764 | NKE | 10-02 13:35 | 10-02 13:55 | 76.61 | 76.13 | 168 | 12870.48 | -80.64 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.53 | ↓76.11 | 0.4951 | 1.5 | **LOSS** |
| 765 | CELH | 10-02 13:35 | 10-02 14:05 | 58.18 | 57.91 | 238 | 13846.84 | -64.26 | -0.46% | 0.61R | 30m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.88 | ↓58.06 | 0.1853 | 1.43 | **LOSS** |
| 766 | META | 10-02 13:40 | 10-02 14:00 | 726.05 | 723.3 | 19 | 13794.95 | -52.25 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 767 | PYPL | 10-02 13:40 | 10-02 14:05 | 68.14 | 67.42 | 205 | 13968.7 | -147.6 | -1.06% | 1.36R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.68 | ↓67.77 | 0.2863 | 2.5 | **LOSS** |
| 768 | SBUX | 10-02 13:50 | 10-02 14:10 | 86.56 | 85.94 | 161 | 13936.16 | -99.82 | -0.72% | 0.83R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.37 | ↑85.75 | 0.3954 | 1.14 | **LOSS** |
| 769 | COIN | 10-02 16:05 | 10-02 17:50 | 367.68 | 370.39 | 38 | 13971.84 | +102.98 | +0.74% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | 75.19 | ↑362.44 | 1.6747 | 2.94 | **WIN** |
| 770 | IBM | 10-03 13:30 | 10-03 13:55 | 291.44 | 289.51 | 48 | 13989.12 | -92.64 | -0.66% | 0.94R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.72 | ↓290.24 | 0.7519 | 1.39 | **LOSS** |
| 771 | TSM | 10-03 13:35 | 10-03 13:55 | 292.88 | 291.74 | 48 | 14058.24 | -54.72 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.84 | ↓292.27 | 0.8491 | 3.42 | **LOSS** |
| 772 | BAC | 10-03 13:35 | 10-03 14:00 | 51.03 | 50.71 | 274 | 13982.22 | -87.68 | -0.63% | 0.9R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.28 | ↓50.87 | 0.0622 | 1.12 | **LOSS** |
| 773 | UBER | 10-03 13:40 | 10-03 14:30 | 97.53 | 97.44 | 142 | 13849.26 | -12.78 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 89.19 | ↓97.35 | 0.4561 | 1.5 | **LOSS** |
| 774 | NVO | 10-03 14:15 | 10-03 15:10 | 59.47 | 59.42 | 235 | 13975.45 | -11.75 | -0.08% | 0.09R | 55m | market | breakeven-stop | breakout | breakout | neutral | 66.19 | ↑58.84 | 0.0481 | 1.45 | **LOSS** |
| 775 | COIN | 10-06 13:35 | 10-06 13:55 | 388.51 | 384.57 | 36 | 13986.36 | -141.84 | -1.01% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.97 | ↓388.48 | 2.729 | 1.64 | **LOSS** |
| 776 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 145 | 13009.4 | -76.85 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 777 | SMCI | 10-06 13:40 | 10-06 14:05 | 55.32 | 54.71 | 237 | 13110.84 | -144.57 | -1.1% | 0.55R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.13 | ↓54.91 | 0.7875 | 4.2 | **LOSS** |
| 778 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 779 | HPE | 10-06 13:40 | 10-06 14:00 | 25.21 | 24.97 | 554 | 13966.34 | -132.96 | -0.95% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.75 | ↓25.13 | 0.1346 | 1.49 | **LOSS** |
| 780 | ELF | 10-06 13:40 | 10-06 14:30 | 138.92 | 137.75 | 100 | 13892 | -117 | -0.84% | 0.66R | 50m | market | early-reversal | trend | breakout | falseBreakoutProne | 58.33 | ↓138.06 | -0.0669 | 2.89 | **LOSS** |
| 781 | TSM | 10-06 13:45 | 10-06 14:30 | 305.55 | 303.34 | 42 | 12833.1 | -92.82 | -0.72% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.75 | ↓304.58 | 2.93 | 1.81 | **LOSS** |
| 782 | PANW | 10-06 13:45 | 10-06 14:05 | 212.07 | 210.43 | 65 | 13784.55 | -106.6 | -0.77% | 0.87R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.8 | ↓211.14 | 0.8134 | 1.23 | **LOSS** |
| 783 | LMT | 10-06 13:55 | 10-06 14:15 | 513.39 | 511.34 | 27 | 13861.53 | -55.35 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.12 | ↓511.97 | 1.7713 | 2 | **LOSS** |
| 784 | TGT | 10-06 17:25 | 10-06 17:55 | 89.61 | 89.2 | 156 | 13979.16 | -63.96 | -0.46% | 0.66R | 30m | market | early-reversal | trend | breakout | neutral | 79.33 | ↑88.76 | 0.0018 | 8.03 | **LOSS** |
| 785 | ADBE | 10-06 17:30 | 10-06 18:05 | 353.51 | 352.83 | 39 | 13786.89 | -26.52 | -0.19% | 0.27R | 35m | market | breakeven-stop | breakout | breakout | neutral | 74.46 | ↑346.99 | 1.1142 | 3 | **LOSS** |
| 786 | CRM | 10-06 17:35 | 10-06 18:30 | 247.89 | 247.45 | 52 | 12890.28 | -22.88 | -0.18% | 0.18R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 97.17 | ↑239.72 | 1.6913 | 2.55 | **LOSS** |
| 787 | BA | 10-07 13:30 | 10-07 14:10 | 222.3 | 221.15 | 63 | 14004.9 | -72.45 | -0.52% | 0.74R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.2 | ↓221.69 | 0.2238 | 2.95 | **LOSS** |
| 788 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 376 | 14062.4 | -60.16 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 789 | PLTR | 10-07 13:40 | 10-07 15:00 | 184.52 | 183.65 | 76 | 14023.52 | -66.12 | -0.47% | 0.39R | 80m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.64 | ↓182.69 | 0.7237 | 3.38 | **LOSS** |
| 790 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 75 | 14091 | +8.25 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 791 | TSM | 10-08 13:35 | 10-08 15:20 | 298.99 | 304.24 | 47 | 14052.53 | +246.75 | +1.76% | 2.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.05 | ↑296.7 | 0.4771 | 1.16 | **WIN** |
| 792 | UNH | 10-08 13:35 | 10-08 13:55 | 368.07 | 368.18 | 38 | 13986.66 | +4.18 | +0.03% | 0.04R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.5 | ↓367.23 | 0.8676 | 1.74 | **WIN** |
| 793 | SNOW | 10-08 13:40 | 10-08 15:25 | 242.02 | 246.71 | 57 | 13795.14 | +267.33 | +1.94% | 2R | 105m | market | timeout | breakout | breakout | neutral | 72.69 | ↑239.9 | 0.9548 | 1.11 | **WIN** |
| 794 | NVO | 10-08 13:45 | 10-08 14:05 | 60.01 | 59.73 | 233 | 13982.33 | -65.24 | -0.47% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 74.82 | ↓59.72 | 0.1059 | 1.39 | **LOSS** |
| 795 | UNH | 10-08 14:30 | 10-08 15:20 | 372.72 | 371.22 | 37 | 13790.64 | -55.5 | -0.4% | 0.33R | 50m | market | early-reversal | breakout | breakout | neutral | 77.45 | ↑369.53 | 1.7674 | 1.51 | **LOSS** |
| 796 | JPM | 10-09 13:35 | 10-09 13:50 | 307.99 | 304.35 | 43 | 13243.57 | -156.52 | -1.18% | 1.69R | 15m | market | stop-loss | trend | breakout | falseBreakoutProne | 71.61 | ↓306.43 | -0.2052 | 1.88 | **LOSS** |
| 797 | COST | 10-09 13:40 | 10-09 15:25 | 937.65 | 941.08 | 14 | 13127.1 | +48.02 | +0.37% | 0.45R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.71 | ↑935.02 | 4.1372 | 3.5 | **WIN** |
| 798 | NFLX | 10-09 13:45 | 10-09 14:15 | 1231.11 | 1227.49 | 11 | 13542.21 | -39.82 | -0.29% | 0.41R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.16 | ↑1224.14 | 2.8625 | 2.87 | **LOSS** |
| 799 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 800 | AMD | 10-09 13:50 | 10-09 14:10 | 238.77 | 235.44 | 58 | 13848.66 | -193.14 | -1.39% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.6 | ↓236.72 | 1.3492 | 1.73 | **LOSS** |
| 801 | ARM | 10-09 13:50 | 10-09 14:40 | 165.23 | 164.59 | 84 | 13879.32 | -53.76 | -0.39% | 0.2R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 58.56 | ↑163.17 | 0.8854 | 1.31 | **LOSS** |
| 802 | CRWD | 10-09 15:55 | 10-09 16:45 | 509.44 | 509.16 | 27 | 13754.88 | -7.56 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.87 | ↑505.67 | -0.3442 | 2.71 | **LOSS** |
| 803 | NET | 10-10 13:35 | 10-10 14:00 | 225.19 | 222.26 | 62 | 13961.78 | -181.66 | -1.3% | 1.86R | 25m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 804 | WMT | 10-10 13:35 | 10-10 14:25 | 103.02 | 102.58 | 135 | 13907.7 | -59.4 | -0.43% | 0.61R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓102.66 | 0.3179 | 1.5 | **LOSS** |
| 805 | COIN | 10-10 13:40 | 10-10 14:05 | 400.28 | 395.52 | 32 | 12808.96 | -152.32 | -1.19% | 1.17R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 93.38 | ↓394.65 | 2.295 | 2.51 | **LOSS** |
| 806 | ORCL | 10-13 13:30 | 10-13 15:15 | 302.04 | 307.76 | 46 | 13893.84 | +263.12 | +1.89% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.28 | ↑301.08 | 0.795 | 4.6 | **WIN** |
| 807 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 808 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 809 | SHOP | 10-13 13:45 | 10-13 14:05 | 154.02 | 152.61 | 91 | 14015.82 | -128.31 | -0.92% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.21 | ↓152.76 | -0.1914 | 1.18 | **LOSS** |
| 810 | AVGO | 10-13 13:55 | 10-13 14:55 | 355.81 | 355.62 | 39 | 13876.59 | -7.41 | -0.05% | 0.03R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 68.95 | ↑351.22 | 6.4546 | 2.01 | **LOSS** |
| 811 | TSM | 10-13 14:05 | 10-13 15:00 | 300.8 | 300.28 | 46 | 13836.8 | -23.92 | -0.17% | 0.09R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 86.75 | ↑296.37 | 4.3791 | 1.12 | **LOSS** |
| 812 | PLTR | 10-14 14:25 | 10-14 15:55 | 178.37 | 178.38 | 79 | 14091.23 | +0.79 | +0.01% | 0.01R | 90m | market | breakeven-stop | breakout | breakout | neutral | 55.43 | ↑174.39 | -0.2396 | 1.3 | **WIN** |
| 813 | PLTR | 10-15 13:30 | 10-15 13:50 | 183.61 | 182.47 | 77 | 14137.97 | -87.78 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 62.95 | ↓183.05 | -0.1029 | 1.7 | **LOSS** |
| 814 | ABNB | 10-15 13:30 | 10-15 13:50 | 125.7 | 125 | 102 | 12821.4 | -71.4 | -0.56% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.09 | ↓125.25 | -0.0497 | 2.07 | **LOSS** |
| 815 | GE | 10-15 13:30 | 10-15 14:25 | 303.52 | 302.66 | 45 | 13658.4 | -38.7 | -0.28% | 0.4R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 69.63 | ↓303.36 | -0.2157 | 2.49 | **LOSS** |
| 816 | IBM | 10-15 13:35 | 10-15 14:55 | 283.34 | 282.76 | 49 | 13883.66 | -28.42 | -0.2% | 0.26R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.81 | ↓281.48 | 0.9245 | 1.36 | **LOSS** |
| 817 | META | 10-15 13:40 | 10-15 15:20 | 718.83 | 718.14 | 19 | 13657.77 | -13.11 | -0.1% | 0.14R | 100m | market | stagnation | trend | breakout | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 818 | ORCL | 10-15 13:40 | 10-15 14:45 | 306.97 | 306.3 | 45 | 13813.65 | -30.15 | -0.22% | 0.15R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 69.71 | ↓306.03 | 0.4393 | 1.24 | **LOSS** |
| 819 | RIVN | 10-15 13:55 | 10-15 14:55 | 13.5 | 13.49 | 1037 | 13999.5 | -10.37 | -0.07% | 0.06R | 60m | market | stagnation | breakout | breakout | neutral | 76.7 | ↑13.34 | 0.0581 | 2.64 | **LOSS** |
| 820 | MU | 10-15 15:05 | 10-15 15:25 | 191.9 | 190.63 | 73 | 14008.7 | -92.71 | -0.66% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.69 | ↑190.16 | 0.0107 | 2.2 | **LOSS** |
| 821 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 822 | DELL | 10-16 13:30 | 10-16 13:55 | 156.12 | 155.1 | 82 | 12801.84 | -83.64 | -0.65% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.26 | ↓155.62 | 0.3024 | 2.59 | **LOSS** |
| 823 | AMZN | 10-16 13:35 | 10-16 14:25 | 217.83 | 217.56 | 64 | 13941.12 | -17.28 | -0.12% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.07 | ↓217.2 | 0.579 | 2.4 | **LOSS** |
| 824 | ADBE | 10-16 13:35 | 10-16 13:45 | 335.53 | 332.78 | 41 | 13756.73 | -112.75 | -0.82% | 1.17R | 10m | market | stop-loss | breakout | breakout | neutral | 86.58 | ↓334.81 | 0.4785 | 1.41 | **LOSS** |
| 825 | NOW | 10-16 13:35 | 10-16 13:55 | 928.69 | 923.06 | 13 | 12072.97 | -73.19 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 83.75 | ↓923.39 | -0.5889 | 1.38 | **LOSS** |
| 826 | SNOW | 10-16 13:35 | 10-16 14:25 | 248.25 | 245.85 | 52 | 12909 | -124.8 | -0.97% | 0.78R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.39 | ↓247.22 | 0.6278 | 3 | **LOSS** |
| 827 | SBUX | 10-16 13:35 | 10-16 13:55 | 84.39 | 83.92 | 165 | 13924.35 | -77.55 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 80.08 | ↓84.08 | 0.2108 | 2.97 | **LOSS** |
| 828 | SMCI | 10-16 13:40 | 10-16 13:45 | 55.47 | 54.41 | 255 | 14144.85 | -270.3 | -1.91% | 1.54R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.71 | ↓54.93 | 0.2493 | 1.89 | **LOSS** |
| 829 | MDB | 10-16 13:40 | 10-16 13:50 | 329.25 | 324.34 | 38 | 12511.5 | -186.58 | -1.49% | 1.42R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.15 | ↓328.34 | 1.582 | 3.81 | **LOSS** |
| 830 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 156 | 14060.28 | -12.48 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 831 | ELF | 10-16 14:35 | 10-16 15:20 | 140.3 | 139.34 | 99 | 13889.7 | -95.04 | -0.68% | 0.56R | 45m | market | early-reversal | breakout | breakout | noisyHighBeta | 95.82 | ↑137.95 | 0.7279 | 3.8 | **LOSS** |
| 832 | CELH | 10-16 14:35 | 10-16 15:45 | 66.09 | 66.03 | 209 | 13812.81 | -12.54 | -0.09% | 0.06R | 70m | market | stagnation | breakout | breakout | extendedBreakout | 89.84 | ↑65.06 | 0.7034 | 1.97 | **LOSS** |
| 833 | CRM | 10-17 13:30 | 10-17 13:55 | 250.45 | 247.72 | 51 | 12772.95 | -139.23 | -1.09% | 0.92R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.54 | ↓248.86 | -0.1933 | 1.16 | **LOSS** |
| 834 | CVX | 10-17 13:35 | 10-17 13:55 | 153.54 | 152.39 | 91 | 13972.14 | -104.65 | -0.75% | 1.07R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.06 | ↓153.15 | 0.4053 | 1.2 | **LOSS** |
| 835 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 348 | 12928.2 | +316.68 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 836 | AAPL | 10-20 13:30 | 10-20 15:15 | 258.43 | 263 | 54 | 13955.22 | +246.78 | +1.77% | 2.13R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.09 | ↑257.71 | 1.2232 | 3.71 | **WIN** |
| 837 | ASML | 10-20 13:35 | 10-20 13:55 | 1041.04 | 1034.58 | 13 | 13533.52 | -83.98 | -0.62% | 0.89R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.08 | ↓1039.15 | 2.9202 | 1.67 | **LOSS** |
| 838 | BA | 10-20 13:35 | 10-20 13:55 | 216.32 | 215.45 | 64 | 13844.48 | -55.68 | -0.4% | 0.56R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 66.64 | ↓216.26 | 0.2559 | 3.33 | **LOSS** |
| 839 | UNH | 10-20 13:35 | 10-20 13:55 | 361.86 | 360.35 | 38 | 13750.68 | -57.38 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.04 | ↓359.91 | 1.0435 | 2.12 | **LOSS** |
| 840 | LRCX | 10-20 13:35 | 10-20 14:25 | 145.88 | 145.41 | 88 | 12837.44 | -41.36 | -0.32% | 0.36R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.38 | ↓145.32 | 0.629 | 1.62 | **LOSS** |
| 841 | COIN | 10-20 13:40 | 10-20 15:25 | 346.07 | 352.78 | 40 | 13842.8 | +268.4 | +1.94% | 1.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.73 | ↑342.09 | 3.2326 | 1.23 | **WIN** |
| 842 | NFLX | 10-20 13:45 | 10-20 15:30 | 1220.51 | 1234.35 | 11 | 13425.61 | +152.24 | +1.13% | 1.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.96 | ↑1215.27 | 4.5448 | 1.7 | **WIN** |
| 843 | CRWD | 10-20 13:50 | 10-20 15:35 | 494.67 | 495.03 | 28 | 13850.76 | +10.08 | +0.07% | 0.08R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.54 | ↑491.22 | 2.3054 | 1.41 | **WIN** |
| 844 | AMD | 10-20 14:00 | 10-20 15:45 | 239.91 | 240.86 | 58 | 13914.78 | +55.1 | +0.4% | 0.24R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.48 | ↑237.65 | 1.5228 | 3.43 | **WIN** |
| 845 | ARM | 10-20 14:00 | 10-20 14:20 | 172.53 | 170.77 | 80 | 13802.4 | -140.8 | -1.02% | 0.97R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.41 | ↓171.47 | 1.7039 | 1.24 | **LOSS** |
| 846 | NVDA | 10-20 14:25 | 10-20 14:45 | 184.98 | 183.91 | 76 | 14058.48 | -81.32 | -0.58% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 847 | AMZN | 10-21 13:40 | 10-21 15:25 | 220.34 | 221.87 | 63 | 13881.42 | +96.39 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.36 | ↑219.4 | 0.813 | 1.47 | **WIN** |
| 848 | NVDA | 10-22 13:50 | 10-22 14:10 | 183.44 | 181.83 | 76 | 13941.44 | -122.36 | -0.88% | 1.26R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 72.07 | ↓181.78 | 0.2359 | 1.41 | **LOSS** |
| 849 | NET | 10-22 15:50 | 10-22 16:10 | 210.97 | 209.34 | 62 | 13080.14 | -101.06 | -0.77% | 0.86R | 20m | market | early-reversal | breakout | breakout | thinChop | 56.9 | ↓209.94 | -0.8584 | 1.14 | **LOSS** |
| 850 | SNOW | 10-23 13:35 | 10-23 15:25 | 246.24 | 249.92 | 56 | 13789.44 | +206.08 | +1.49% | 1.82R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 77.12 | ↑245.55 | 1.2385 | 1.44 | **WIN** |
| 851 | XOM | 10-23 13:35 | 10-23 14:10 | 116.32 | 115.48 | 120 | 13958.4 | -100.8 | -0.72% | 0.85R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87 | ↓116.27 | 0.4997 | 1.22 | **LOSS** |
| 852 | CVX | 10-23 13:35 | 10-23 13:55 | 158.1 | 157.5 | 88 | 13912.8 | -52.8 | -0.38% | 0.45R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.87 | ↓157.62 | 0.6451 | 2.45 | **LOSS** |
| 853 | AMAT | 10-23 13:35 | 10-23 15:20 | 224.56 | 228.44 | 62 | 13922.72 | +240.56 | +1.73% | 1.68R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.49 | ↑222.58 | 1.2178 | 1.38 | **WIN** |
| 854 | KLAC | 10-23 13:45 | 10-23 15:30 | 1143.78 | 1157.59 | 12 | 13725.36 | +165.72 | +1.21% | 1.22R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.69 | ↑1138.96 | 8.1997 | 1.13 | **WIN** |
| 855 | TSLA | 10-23 16:40 | 10-23 18:25 | 441.29 | 448.2 | 31 | 13679.99 | +214.21 | +1.57% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81.72 | ↑425.33 | 3.8929 | 1.48 | **WIN** |
| 856 | TGT | 10-24 13:30 | 10-24 13:50 | 95.36 | 94.67 | 147 | 14017.92 | -101.43 | -0.72% | 1.03R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.2 | ↓95.2 | 0.1371 | 2.42 | **LOSS** |
| 857 | AVGO | 10-24 13:35 | 10-24 14:25 | 354.25 | 352.83 | 39 | 13815.75 | -55.38 | -0.4% | 0.38R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.03 | ↓352.84 | 2.0817 | 2.4 | **LOSS** |
| 858 | TSM | 10-24 13:35 | 10-24 13:55 | 296.77 | 295.69 | 47 | 13948.19 | -50.76 | -0.36% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.27 | ↓296.09 | 0.2874 | 1.6 | **LOSS** |
| 859 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 81 | 13923.9 | -4.86 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 860 | JPM | 10-24 13:35 | 10-24 15:20 | 297.92 | 301.16 | 46 | 13704.32 | +149.04 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.4 | ↑296.94 | 0.1863 | 1.18 | **WIN** |
| 861 | COIN | 10-24 13:50 | 10-24 14:45 | 344.4 | 344.49 | 40 | 13776 | +3.6 | +0.03% | 0.02R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.36 | ↑340.33 | 3.4254 | 4 | **WIN** |
| 862 | TSM | 10-27 13:30 | 10-27 13:45 | 299.38 | 296.62 | 47 | 14070.86 | -129.72 | -0.92% | 1.31R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 72.45 | ↓299.52 | 0.6186 | 5.14 | **LOSS** |
| 863 | PANW | 10-27 13:30 | 10-27 14:20 | 219.82 | 219.19 | 63 | 13848.66 | -39.69 | -0.29% | 0.41R | 50m | market | stagnation | trend | breakout | falseBreakoutProne | 71.56 | ↓219.84 | 0.1674 | 3.82 | **LOSS** |
| 864 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 865 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 326 | 12997.62 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 866 | PLTR | 10-27 13:35 | 10-27 15:10 | 190.44 | 190.55 | 68 | 12949.92 | +7.48 | +0.06% | 0.05R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 89.66 | ↓189.75 | 0.6907 | 3.78 | **WIN** |
| 867 | GE | 10-27 13:35 | 10-27 14:25 | 308.87 | 308.02 | 45 | 13899.15 | -38.25 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.12 | ↓307.97 | 0.4661 | 1.74 | **LOSS** |
| 868 | MU | 10-27 13:40 | 10-27 14:00 | 222.4 | 218.36 | 63 | 14011.2 | -254.52 | -1.82% | 1.53R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 65.07 | ↓222.7 | 1.1579 | 1.21 | **LOSS** |
| 869 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 870 | META | 10-27 13:45 | 10-27 14:45 | 753.48 | 752.98 | 18 | 13562.64 | -9 | -0.07% | 0.1R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.77 | ↑751.59 | 3.1006 | 1.83 | **LOSS** |
| 871 | UBER | 10-27 13:45 | 10-27 14:35 | 95.87 | 95.44 | 145 | 13901.15 | -62.35 | -0.45% | 0.58R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.83 | ↓95.24 | 0.0704 | 1.51 | **LOSS** |
| 872 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 873 | HPE | 10-27 15:10 | 10-27 15:30 | 24.18 | 23.92 | 576 | 13927.68 | -149.76 | -1.08% | 0.98R | 20m | market | early-reversal | breakout | breakout | neutral | 66.88 | ↓23.98 | 0.1198 | 3.39 | **LOSS** |
| 874 | PYPL | 10-27 16:35 | 10-27 17:00 | 71.66 | 71.31 | 195 | 13973.7 | -68.25 | -0.49% | 0.7R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 81.68 | ↑70.87 | 0.1479 | 4.9 | **LOSS** |
| 875 | PANW | 10-28 13:30 | 10-28 13:40 | 222.9 | 220.94 | 62 | 13819.8 | -121.52 | -0.88% | 1.26R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.84 | ↓222.44 | 0.5365 | 1.25 | **LOSS** |
| 876 | MSFT | 10-28 13:40 | 10-28 14:30 | 546.39 | 543.89 | 25 | 13659.75 | -62.5 | -0.46% | 0.37R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.91 | ↓546.99 | 3.3311 | 2.88 | **LOSS** |
| 877 | PYPL | 10-28 13:45 | 10-28 14:40 | 77.25 | 77.77 | 181 | 13982.25 | +94.12 | +0.67% | 0.34R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 76.2 | ↑76.04 | 1.5831 | 1.87 | **WIN** |
| 878 | SMCI | 10-28 14:00 | 10-28 15:45 | 52.39 | 53.3 | 269 | 14092.91 | +244.79 | +1.74% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.4 | ↑52.06 | 0.4011 | 1.22 | **WIN** |
| 879 | ELF | 10-28 16:50 | 10-28 18:35 | 129.87 | 131.49 | 106 | 13766.22 | +171.72 | +1.25% | 1.79R | 105m | market | timeout | breakout | breakout | neutral | 99.54 | ↑127.29 | 0.6779 | 4.43 | **WIN** |
| 880 | PLTR | 10-29 13:45 | 10-29 15:30 | 195.08 | 196.44 | 72 | 14045.76 | +97.92 | +0.7% | 0.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.82 | ↑192.63 | 0.9894 | 2.12 | **WIN** |
| 881 | RIVN | 10-29 13:50 | 10-29 14:10 | 13.84 | 13.75 | 1011 | 13992.24 | -90.99 | -0.65% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.34 | ↑13.7 | 0.0948 | 2.01 | **LOSS** |
| 882 | CAT | 10-29 13:55 | 10-29 14:15 | 590.73 | 585.64 | 23 | 13586.79 | -117.07 | -0.86% | 0.43R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 94.73 | ↑576.45 | 14.9891 | 1.26 | **LOSS** |
| 883 | MA | 10-30 13:35 | 10-30 13:55 | 562.16 | 554.12 | 22 | 12367.52 | -176.88 | -1.43% | 1.61R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.34 | ↓555.69 | 0.5079 | 1.8 | **LOSS** |
| 884 | MDB | 10-30 13:40 | 10-30 15:05 | 344.98 | 353.31 | 40 | 13799.2 | +333.2 | +2.41% | 1.7R | 85m | market | profit-target | breakout | breakout | falseBreakoutProne | 58.87 | ↑341.78 | 0.7503 | 1.19 | **WIN** |
| 885 | LRCX | 10-30 13:40 | 10-30 14:20 | 163.98 | 162.97 | 77 | 12626.46 | -77.77 | -0.62% | 0.44R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.96 | ↓163.06 | 0.3665 | 1.65 | **LOSS** |
| 886 | CRM | 10-30 13:50 | 10-30 15:35 | 257.01 | 257.82 | 54 | 13878.54 | +43.74 | +0.32% | 0.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.76 | ↑253.49 | 0.5737 | 1.51 | **WIN** |
| 887 | DIS | 10-30 13:50 | 10-30 15:35 | 111.81 | 112.84 | 124 | 13864.44 | +127.72 | +0.92% | 1.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.87 | ↑110.84 | 0.0429 | 1.65 | **WIN** |
| 888 | IBM | 10-30 13:50 | 10-30 15:00 | 312.4 | 312.07 | 44 | 13745.6 | -14.52 | -0.11% | 0.1R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.4 | ↑308.43 | 0.0511 | 1.21 | **LOSS** |
| 889 | SBUX | 10-30 13:55 | 10-30 15:05 | 85.48 | 85.26 | 163 | 13933.24 | -35.86 | -0.26% | 0.13R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.2 | ↑83.65 | 0.0163 | 1.56 | **LOSS** |
| 890 | NOW | 10-30 14:00 | 10-30 14:50 | 948.77 | 943.95 | 14 | 13282.78 | -67.48 | -0.51% | 0.26R | 50m | market | stagnation | breakout | breakout | neutral | 75.07 | ↑927.98 | 4.2503 | 1.69 | **LOSS** |
| 891 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 892 | NFLX | 10-31 13:30 | 10-31 15:15 | 1112.22 | 1130.6 | 12 | 13346.64 | +220.56 | +1.65% | 2.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.39 | ↑1109.99 | 0.4267 | 4.85 | **WIN** |
| 893 | PLTR | 10-31 13:30 | 10-31 15:15 | 201.4 | 202.3 | 70 | 14098 | +63 | +0.45% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.35 | ↑200.52 | 0.1287 | 3.59 | **WIN** |
| 894 | COIN | 10-31 13:30 | 10-31 14:10 | 340.18 | 351.34 | 41 | 13947.38 | +457.56 | +3.28% | 1.8R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 65 | ↑338.88 | -0.8298 | 2.83 | **WIN** |
| 895 | ARM | 10-31 13:35 | 10-31 13:55 | 169.16 | 167.72 | 82 | 13871.12 | -118.08 | -0.85% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.35 | ↓168.66 | -0.0903 | 1.67 | **LOSS** |
| 896 | CVX | 10-31 13:35 | 10-31 14:25 | 157.82 | 157.62 | 88 | 13888.16 | -17.6 | -0.13% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.11 | ↓156.82 | 0.2258 | 1.9 | **LOSS** |
| 897 | DDOG | 10-31 13:40 | 10-31 15:25 | 160.37 | 161.57 | 87 | 13952.19 | +104.4 | +0.75% | 0.62R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.62 | ↓160.31 | 0.4161 | 2.5 | **WIN** |
| 898 | LLY | 11-03 14:30 | 11-03 15:20 | 879.13 | 875.99 | 14 | 12307.82 | -43.96 | -0.36% | 0.45R | 50m | market | stagnation | breakout | breakout | neutral | 66.92 | ↓873.97 | 1.6065 | 1.82 | **LOSS** |
| 899 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.35 | 203.93 | 68 | 13963.8 | -96.56 | -0.69% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 900 | NET | 11-03 14:35 | 11-03 15:15 | 255.68 | 253.9 | 54 | 13806.72 | -96.12 | -0.7% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 75.44 | ↓256 | 1.7451 | 1.39 | **LOSS** |
| 901 | MSFT | 11-03 14:40 | 11-03 15:05 | 524.02 | 521.26 | 26 | 13624.52 | -71.76 | -0.53% | 0.57R | 25m | market | early-reversal | trend | breakout | neutral | 67.77 | ↓522.3 | 1.0328 | 1.23 | **LOSS** |
| 902 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 903 | AVGO | 11-04 14:55 | 11-04 15:45 | 366.14 | 365.03 | 37 | 13547.18 | -41.07 | -0.3% | 0.21R | 50m | market | stagnation | breakout | breakout | neutral | 56.55 | ↑362.68 | -0.1898 | 4.32 | **LOSS** |
| 904 | GS | 11-04 15:10 | 11-04 15:45 | 802.24 | 798.84 | 17 | 13638.08 | -57.8 | -0.42% | 0.4R | 35m | market | early-reversal | breakout | breakout | neutral | 66.59 | ↑787.55 | 1.5299 | 1.87 | **LOSS** |
| 905 | NVO | 11-04 15:25 | 11-04 15:45 | 49.21 | 48.82 | 284 | 13975.64 | -110.76 | -0.79% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 51.88 | ↓48.63 | -0.1481 | 2.41 | **LOSS** |
| 906 | AMAT | 11-05 14:30 | 11-05 16:15 | 235.24 | 237.98 | 55 | 12938.2 | +150.7 | +1.16% | 1.18R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑233.51 | -0.3934 | 1.8 | **WIN** |
| 907 | MCD | 11-05 14:35 | 11-05 15:30 | 307.22 | 306.6 | 42 | 12903.24 | -26.04 | -0.2% | 0.14R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 74.41 | ↓305.34 | 1.669 | 2.81 | **LOSS** |
| 908 | NVDA | 11-05 14:50 | 11-05 16:35 | 200.26 | 201.46 | 70 | 14018.2 | +84 | +0.6% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 60.4 | ↑198.89 | -0.1305 | 1.48 | **WIN** |
| 909 | TSLA | 11-05 16:30 | 11-05 17:00 | 452.41 | 450.17 | 30 | 13572.3 | -67.2 | -0.5% | 0.45R | 30m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑446.28 | 0.8032 | 1.48 | **LOSS** |
| 910 | NKE | 11-05 16:40 | 11-05 18:25 | 61.96 | 62.45 | 225 | 13941 | +110.25 | +0.79% | 0.98R | 105m | market | timeout | breakout | breakout | neutral | 65.31 | ↑61.3 | 0.0208 | 5.12 | **WIN** |
| 911 | TGT | 11-05 16:45 | 11-05 18:10 | 90.7 | 92.86 | 154 | 13967.8 | +332.64 | +2.38% | 3.4R | 85m | market | profit-target | breakout | breakout | neutral | 79.57 | ↑89.56 | 0.0167 | 2.65 | **WIN** |
| 912 | SHOP | 11-05 17:00 | 11-05 18:45 | 163.13 | 165.8 | 85 | 13866.05 | +226.95 | +1.64% | 1.59R | 105m | market | timeout | breakout | breakout | thinChop | 63.47 | ↑160.24 | 0.3841 | 1.16 | **WIN** |
| 913 | MRVL | 11-06 14:30 | 11-06 14:55 | 96.54 | 95.41 | 134 | 12936.36 | -151.42 | -1.17% | 0.64R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.54 | ↓96.65 | -0.034 | 5.5 | **LOSS** |
| 914 | SNOW | 11-06 14:35 | 11-06 14:55 | 274.04 | 268.41 | 47 | 12879.88 | -264.61 | -2.05% | 1.71R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 81.15 | ↓272.22 | 0.7218 | 2.19 | **LOSS** |
| 915 | MU | 11-06 14:40 | 11-06 14:55 | 246.11 | 241.41 | 52 | 12797.72 | -244.4 | -1.91% | 1.49R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 77.81 | ↓242.39 | 1.3152 | 2.12 | **LOSS** |
| 916 | PLTR | 11-06 14:45 | 11-06 14:50 | 190.36 | 187.02 | 74 | 14086.64 | -247.16 | -1.75% | 1.35R | 5m | market | stop-loss | breakout | breakout | neutral | 62.28 | ↓188.86 | 0.2888 | 1.49 | **LOSS** |
| 917 | DDOG | 11-06 14:55 | 11-06 15:35 | 188.13 | 186.83 | 68 | 12792.84 | -88.4 | -0.69% | 0.35R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 89.99 | ↑185.62 | 7.9257 | 1.52 | **LOSS** |
| 918 | CRWD | 11-06 17:50 | 11-06 18:10 | 527.82 | 524.23 | 26 | 13723.32 | -93.34 | -0.68% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 67.71 | ↑522.2 | 0.3844 | 2.31 | **LOSS** |
| 919 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 371 | 14083.16 | -122.43 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 920 | COIN | 11-07 17:20 | 11-07 18:35 | 297.18 | 304.73 | 47 | 13967.46 | +354.85 | +2.54% | 2R | 75m | market | profit-target | breakout | breakout | noisyHighBeta | 88.36 | ↑291.29 | 1.3693 | 4.83 | **WIN** |
| 921 | AAPL | 11-10 14:30 | 11-10 15:35 | 271.59 | 271.17 | 51 | 13851.09 | -21.42 | -0.15% | 0.21R | 65m | market | breakeven-stop | breakout | breakout | neutral | 80.22 | ↓270.77 | 0.4078 | 1.35 | **LOSS** |
| 922 | NFLX | 11-10 14:30 | 11-10 16:00 | 1118.89 | 1118.22 | 12 | 13426.68 | -8.04 | -0.06% | 0.09R | 90m | market | breakeven-stop | breakout | breakout | neutral | 80.29 | ↓1113.99 | 3.63 | 1.25 | **LOSS** |
| 923 | UBER | 11-10 14:30 | 11-10 15:15 | 93.03 | 92.63 | 149 | 13861.47 | -59.6 | -0.43% | 0.61R | 45m | market | early-reversal | breakout | breakout | neutral | 77.73 | ↓92.87 | 0.3663 | 1.2 | **LOSS** |
| 924 | PANW | 11-10 14:30 | 11-10 14:50 | 214.63 | 213.58 | 64 | 13736.32 | -67.2 | -0.49% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 70.12 | ↓214.67 | 0.7707 | 1.71 | **LOSS** |
| 925 | PYPL | 11-10 14:30 | 11-10 14:50 | 67.17 | 66.63 | 208 | 13971.36 | -112.32 | -0.8% | 1.07R | 20m | market | early-reversal | breakout | breakout | neutral | 68.36 | ↓67.14 | 0.2605 | 1.7 | **LOSS** |
| 926 | BAC | 11-10 14:30 | 11-10 14:50 | 53.88 | 53.62 | 259 | 13954.92 | -67.34 | -0.48% | 0.69R | 20m | market | early-reversal | breakout | breakout | neutral | 68.2 | ↓53.76 | 0.0305 | 1.27 | **LOSS** |
| 927 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 928 | AMZN | 11-10 14:35 | 11-10 15:05 | 250.59 | 249.19 | 55 | 13782.45 | -77 | -0.56% | 0.61R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.26 | ↓249.58 | 1.7204 | 1.68 | **LOSS** |
| 929 | META | 11-10 14:35 | 11-10 15:50 | 628.59 | 628.81 | 22 | 13828.98 | +4.84 | +0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **WIN** |
| 930 | ORCL | 11-10 14:35 | 11-10 14:50 | 246.96 | 242.62 | 57 | 14076.72 | -247.38 | -1.76% | 1.29R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 84.81 | ↓245.34 | 2.0692 | 1.53 | **LOSS** |
| 931 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 31 | 13587.3 | +265.05 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 932 | TSM | 11-10 14:40 | 11-10 15:05 | 296.73 | 295.18 | 43 | 12759.39 | -66.65 | -0.52% | 0.4R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 89.13 | ↓295.63 | 2.5995 | 1.36 | **LOSS** |
| 933 | PLTR | 11-10 14:50 | 11-10 15:55 | 190.14 | 190.23 | 74 | 14070.36 | +6.66 | +0.05% | 0.03R | 65m | market | trailing-stop | breakout | breakout | extendedBreakout | 95.49 | ↑187.85 | 3.4637 | 1.39 | **WIN** |
| 934 | RIVN | 11-10 16:35 | 11-10 17:50 | 15.78 | 16.45 | 886 | 13981.08 | +593.62 | +4.25% | 2.44R | 75m | market | profit-target | trend | breakout | noisyHighBeta | 65.45 | ↑15.42 | 0.1168 | 1.41 | **WIN** |
| 935 | RIVN | 11-10 17:55 | 11-10 18:40 | 16.65 | 16.45 | 845 | 14069.25 | -169 | -1.2% | 0.71R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 91.44 | ↑15.81 | 0.2752 | 1.29 | **LOSS** |
| 936 | QCOM | 11-11 14:35 | 11-11 16:05 | 173.56 | 173.22 | 80 | 13884.8 | -27.2 | -0.2% | 0.29R | 90m | market | breakeven-stop | breakout | breakout | neutral | 77.51 | ↓172.92 | 0.4108 | 1.33 | **LOSS** |
| 937 | IBM | 11-11 14:35 | 11-11 14:45 | 314.73 | 313.9 | 44 | 13848.12 | -36.52 | -0.26% | 0.37R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 93.34 | ↓312.62 | 1.0688 | 2.1 | **LOSS** |
| 938 | SBUX | 11-11 14:35 | 11-11 15:25 | 86.04 | 85.9 | 162 | 13938.48 | -22.68 | -0.16% | 0.2R | 50m | market | stagnation | breakout | breakout | neutral | 76.33 | ↓85.62 | 0.2123 | 1.26 | **LOSS** |
| 939 | NKE | 11-11 14:35 | 11-11 16:20 | 62.17 | 62.78 | 224 | 13926.08 | +136.64 | +0.98% | 1.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.36 | ↑61.71 | 0.1563 | 2.52 | **WIN** |
| 940 | RIVN | 11-11 14:35 | 11-11 15:30 | 16.73 | 17.34 | 839 | 14036.47 | +511.79 | +3.65% | 1.83R | 55m | market | profit-target | breakout | breakout | noisyHighBeta | 61.17 | ↑16.62 | -0.0093 | 1.68 | **WIN** |
| 941 | ELF | 11-11 17:00 | 11-11 18:30 | 79.47 | 79.24 | 174 | 13827.78 | -40.02 | -0.29% | 0.34R | 90m | market | breakeven-stop | breakout | breakout | thinChop | 79.77 | ↑78.64 | -0.0171 | 1.65 | **LOSS** |
| 942 | JPM | 11-12 14:35 | 11-12 16:20 | 320.62 | 320.55 | 43 | 13786.66 | -3.01 | -0.02% | 0.03R | 105m | market | timeout | breakout | breakout | neutral | 74.44 | ↓318.84 | 0.2818 | 2 | **LOSS** |
| 943 | CAT | 11-12 14:35 | 11-12 14:45 | 578.4 | 573.71 | 24 | 13881.6 | -112.56 | -0.81% | 1.16R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 944 | UNH | 11-12 14:35 | 11-12 16:20 | 334.04 | 337.07 | 41 | 13695.64 | +124.23 | +0.91% | 1.28R | 105m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.36 | ↓330.78 | 1.3594 | 1.38 | **WIN** |
| 945 | NKE | 11-12 14:35 | 11-12 15:20 | 64.66 | 64.3 | 216 | 13966.56 | -77.76 | -0.56% | 0.62R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 82.68 | ↓64.31 | 0.1392 | 1.14 | **LOSS** |
| 946 | DELL | 11-12 14:40 | 11-12 16:25 | 141.55 | 142.31 | 98 | 13871.9 | +74.48 | +0.54% | 0.56R | 105m | market | timeout | breakout | breakout | neutral | 62.78 | ↑140.42 | -0.0264 | 1.13 | **WIN** |
| 947 | AMD | 11-12 15:10 | 11-12 16:00 | 260.21 | 257.96 | 49 | 12750.29 | -110.25 | -0.86% | 0.43R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 73.17 | ↑255.14 | 4.5359 | 2.02 | **LOSS** |
| 948 | RIVN | 11-13 14:50 | 11-13 15:00 | 17.59 | 17.1 | 802 | 14107.18 | -392.98 | -2.79% | 1.4R | 10m | market | stop-loss | trend | breakout | noisyHighBeta | 62.81 | ↓17.44 | 0.1125 | 1.96 | **LOSS** |
| 949 | AVGO | 11-14 14:50 | 11-14 15:10 | 337.73 | 335.17 | 41 | 13846.93 | -104.96 | -0.76% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 45.85 | ↑334 | -0.8612 | 1.66 | **LOSS** |
| 950 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 34 | 13603.74 | +324.02 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 951 | KLAC | 11-14 15:45 | 11-14 16:10 | 1173.74 | 1165.88 | 11 | 12911.14 | -86.46 | -0.67% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 70.89 | ↑1157.19 | 2.2365 | 1.18 | **LOSS** |
| 952 | ARM | 11-14 16:25 | 11-14 17:10 | 143.38 | 142.69 | 97 | 13907.86 | -66.93 | -0.48% | 0.38R | 45m | market | early-reversal | breakout | breakout | neutral | 76 | ↑140.6 | 0.7563 | 2.07 | **LOSS** |
| 953 | MU | 11-17 14:30 | 11-17 15:05 | 256.26 | 253.89 | 49 | 12556.74 | -116.13 | -0.92% | 0.59R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 68.88 | ↓253.01 | -0.128 | 3.5 | **LOSS** |
| 954 | ASML | 11-17 14:30 | 11-17 16:05 | 1017.07 | 1017.28 | 13 | 13221.91 | +2.73 | +0.02% | 0.03R | 95m | market | breakeven-stop | trend | breakout | neutral | 69.98 | ↓1013.35 | 0.2463 | 2.9 | **WIN** |
| 955 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 33 | 13647.15 | +197.01 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 956 | SMCI | 11-17 16:25 | 11-17 16:55 | 35.1 | 34.93 | 403 | 14145.3 | -68.51 | -0.48% | 0.29R | 30m | market | early-reversal | breakout | breakout | noisyHighBeta | 61.62 | ↓35 | -0.3758 | 1.27 | **LOSS** |
| 957 | COIN | 11-18 14:35 | 11-18 14:55 | 268.79 | 264.27 | 52 | 13977.08 | -235.04 | -1.68% | 0.87R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 74.79 | ↓266.72 | 1.0425 | 2.1 | **LOSS** |
| 958 | NFLX | 11-18 14:45 | 11-18 16:00 | 111.59 | 111.38 | 125 | 13948.75 | -26.25 | -0.19% | 0.18R | 75m | market | stagnation | breakout | breakout | neutral | 60.29 | ↓110.31 | 0.1571 | 2.1 | **LOSS** |
| 959 | INTU | 11-18 14:45 | 11-18 15:05 | 656.58 | 652.16 | 21 | 13788.18 | -92.82 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 71.13 | ↓654.94 | 1.7238 | 2.41 | **LOSS** |
| 960 | RIVN | 11-18 16:15 | 11-18 17:20 | 14.87 | 14.87 | 945 | 14052.15 | +0 | +0% | 0R | 65m | market | breakeven-stop | breakout | breakout | noisyHighBeta | 73.28 | ↑14.66 | 0.0365 | 2.04 | **WIN** |
| 961 | TSLA | 11-18 17:40 | 11-18 18:00 | 407.81 | 405.94 | 34 | 13865.54 | -63.58 | -0.46% | 0.43R | 20m | market | early-reversal | trend | breakout | noisyHighBeta | 68.21 | ↑400.54 | 1.8939 | 1.31 | **LOSS** |
| 962 | PLTR | 11-18 17:40 | 11-18 18:20 | 171.64 | 170.79 | 82 | 14074.48 | -69.7 | -0.5% | 0.45R | 40m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.01 | ↑168.57 | 0.808 | 1.14 | **LOSS** |
| 963 | NVDA | 11-19 14:35 | 11-19 16:20 | 184.95 | 185.25 | 76 | 14056.2 | +22.8 | +0.16% | 0.13R | 105m | market | timeout | breakout | breakout | neutral | 60.43 | ↓184.25 | -0.0575 | 1.37 | **WIN** |
| 964 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 98 | 14045.36 | +148.96 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 965 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 403 | 14064.7 | +64.48 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 966 | NVO | 11-19 14:45 | 11-19 15:35 | 48.41 | 48.33 | 289 | 13990.49 | -23.12 | -0.17% | 0.22R | 50m | market | stagnation | breakout | breakout | neutral | 68.73 | ↓48.23 | 0.0771 | 1.21 | **LOSS** |
| 967 | ASML | 11-19 14:55 | 11-19 15:40 | 1031.94 | 1028.84 | 13 | 13415.22 | -40.3 | -0.3% | 0.41R | 45m | market | early-reversal | breakout | breakout | neutral | 83.13 | ↑1022.52 | 4.1618 | 1.58 | **LOSS** |
| 968 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 969 | CELH | 11-19 17:00 | 11-19 17:20 | 41.59 | 41.19 | 332 | 13807.88 | -132.8 | -0.96% | 1.14R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 85.54 | ↑40.96 | 0.1847 | 1.3 | **LOSS** |
| 970 | TGT | 11-20 14:30 | 11-20 14:50 | 86.83 | 86.17 | 161 | 13979.63 | -106.26 | -0.76% | 0.95R | 20m | market | early-reversal | breakout | breakout | neutral | 77.91 | ↓86.54 | 0.0462 | 1.7 | **LOSS** |
| 971 | META | 11-20 14:35 | 11-20 14:55 | 605.87 | 602.09 | 23 | 13935.01 | -86.94 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.44 | ↓602.22 | 3.6323 | 1.88 | **LOSS** |
| 972 | AAPL | 11-20 14:35 | 11-20 15:50 | 273.61 | 273.32 | 51 | 13954.11 | -14.79 | -0.11% | 0.15R | 75m | market | stagnation | breakout | breakout | neutral | 72.6 | ↓272.57 | 0.3305 | 1.1 | **LOSS** |
| 973 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 974 | COST | 11-20 14:35 | 11-20 15:40 | 900.6 | 900.01 | 15 | 13509 | -8.85 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 85.24 | ↑897.13 | 2.7266 | 1.53 | **LOSS** |
| 975 | WMT | 11-20 14:40 | 11-20 16:25 | 105.86 | 107.24 | 131 | 13867.66 | +180.78 | +1.3% | 0.82R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.97 | ↑104.68 | 1.1993 | 3.09 | **WIN** |
| 976 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.14 | 83.99 | 167 | 14051.38 | -25.05 | -0.18% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 977 | HD | 11-21 14:35 | 11-21 15:40 | 338.33 | 338.08 | 41 | 13871.53 | -10.25 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | neutral | 79.13 | ↓335.84 | 0.4622 | 1.24 | **LOSS** |
| 978 | GOOGL | 11-21 14:45 | 11-21 15:05 | 299.96 | 296.39 | 46 | 13798.16 | -164.22 | -1.19% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 74.38 | ↓298.43 | 1.6687 | 2 | **LOSS** |
| 979 | LLY | 11-21 14:45 | 11-21 15:05 | 1058.93 | 1047.41 | 13 | 13766.09 | -149.76 | -1.09% | 1.45R | 20m | market | stop-loss | breakout | breakout | neutral | 76.6 | ↓1049.14 | 1.5193 | 1.29 | **LOSS** |
| 980 | MCD | 11-21 14:45 | 11-21 16:10 | 308.34 | 308.07 | 45 | 13875.3 | -12.15 | -0.09% | 0.13R | 85m | market | stagnation | breakout | breakout | neutral | 77.27 | ↓307.97 | 1.2787 | 1.11 | **LOSS** |
| 981 | AMAT | 11-21 16:20 | 11-21 18:05 | 222.05 | 223.59 | 63 | 13989.15 | +97.02 | +0.69% | 0.41R | 105m | market | timeout | breakout | breakout | thinChop | 67.68 | ↑218.76 | -0.1622 | 1.28 | **WIN** |
| 982 | LRCX | 11-21 16:20 | 11-21 18:05 | 139.32 | 140.44 | 100 | 13932 | +112 | +0.8% | 0.4R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 61.46 | ↑137.5 | -0.441 | 1.6 | **WIN** |
| 983 | TXN | 11-21 16:35 | 11-21 18:20 | 157.61 | 158.25 | 88 | 13869.68 | +56.32 | +0.41% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 71.04 | ↑155.48 | 0.7796 | 1.5 | **WIN** |
| 984 | ADBE | 11-21 17:05 | 11-21 18:50 | 322.52 | 325.54 | 43 | 13868.36 | +129.86 | +0.94% | 1.29R | 105m | market | timeout | breakout | breakout | neutral | 80.23 | ↑316.22 | 1.5936 | 2.6 | **WIN** |
| 985 | INTC | 11-21 17:05 | 11-21 17:35 | 34.31 | 34.13 | 410 | 14067.1 | -73.8 | -0.52% | 0.33R | 30m | market | early-reversal | breakout | breakout | noisyHighBeta | 79.34 | ↑33.48 | 0.1605 | 1.22 | **LOSS** |
| 986 | AAPL | 11-24 14:30 | 11-24 14:50 | 274.92 | 273.47 | 50 | 13746 | -72.5 | -0.53% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 67.43 | ↓273.82 | 0.0722 | 1.64 | **LOSS** |
| 987 | AMD | 11-24 14:30 | 11-24 16:15 | 209.65 | 212.69 | 61 | 12788.65 | +185.44 | +1.45% | 1.08R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 65.62 | ↑208.5 | 0.2636 | 1.63 | **WIN** |
| 988 | COIN | 11-24 14:30 | 11-24 16:15 | 247.37 | 251.87 | 57 | 14100.09 | +256.5 | +1.82% | 1.33R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 69.2 | ↑246.35 | 0.8775 | 1.42 | **WIN** |
| 989 | MDB | 11-24 14:30 | 11-24 16:15 | 328.13 | 331.67 | 39 | 12797.07 | +138.06 | +1.08% | 0.94R | 105m | market | timeout | breakout | breakout | neutral | 64.32 | ↑327.01 | 0.1465 | 2.41 | **WIN** |
| 990 | AVGO | 11-24 14:35 | 11-24 15:40 | 360.54 | 369.39 | 35 | 12618.9 | +309.75 | +2.45% | 1.62R | 65m | market | profit-target | breakout | breakout | noisyHighBeta | 87.22 | ↑356.66 | 2.3634 | 2.41 | **WIN** |
| 991 | DELL | 11-24 14:40 | 11-24 16:25 | 126.7 | 128.12 | 101 | 12796.7 | +143.42 | +1.12% | 0.78R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 80.19 | ↑125.94 | 0.8559 | 1.3 | **WIN** |
| 992 | TSM | 11-24 14:45 | 11-24 16:30 | 279.48 | 284.22 | 50 | 13974 | +237 | +1.7% | 1.5R | 105m | market | timeout | breakout | breakout | neutral | 65.72 | ↑277.75 | -0.0179 | 1.65 | **WIN** |
| 993 | KLAC | 11-24 14:45 | 11-24 16:30 | 1126.07 | 1140.03 | 12 | 13512.84 | +167.52 | +1.24% | 0.93R | 105m | market | timeout | breakout | breakout | neutral | 68.14 | ↑1120.91 | 4.8438 | 1.11 | **WIN** |
| 994 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 33 | 13631.31 | +187.44 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 995 | ORCL | 11-24 15:00 | 11-24 15:20 | 202.55 | 201.05 | 69 | 13975.95 | -103.5 | -0.74% | 0.37R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.47 | ↑197.5 | 0.0621 | 1.5 | **LOSS** |
| 996 | UNH | 11-25 14:35 | 11-25 15:00 | 326.98 | 324.92 | 42 | 13733.16 | -86.52 | -0.63% | 0.72R | 25m | market | early-reversal | breakout | breakout | neutral | 75.97 | ↓324.84 | 0.2322 | 1.38 | **LOSS** |
| 997 | PYPL | 11-25 14:40 | 11-25 15:00 | 61.55 | 60.85 | 227 | 13971.85 | -158.9 | -1.14% | 1.15R | 20m | market | early-reversal | breakout | breakout | neutral | 71.63 | ↓61.34 | 0.1448 | 1.35 | **LOSS** |
| 998 | LOW | 11-25 14:40 | 11-25 16:25 | 233.32 | 236.48 | 59 | 13765.88 | +186.44 | +1.35% | 1.75R | 105m | market | timeout | breakout | breakout | neutral | 67.68 | ↑232.36 | -0.0421 | 2.03 | **WIN** |
| 999 | ADP | 11-25 14:45 | 11-25 16:30 | 253.64 | 254.99 | 50 | 12682 | +67.5 | +0.53% | 0.76R | 105m | market | timeout | breakout | breakout | neutral | 75.92 | ↑252.32 | 0.3525 | 1.57 | **WIN** |
| 1000 | ABNB | 11-25 15:30 | 11-25 16:25 | 117.58 | 117.54 | 118 | 13874.44 | -4.72 | -0.03% | 0.03R | 55m | market | stagnation | breakout | breakout | neutral | 75.81 | ↑116.01 | 0.567 | 1.44 | **LOSS** |

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
- ⚠️ **Avg R = 0.81R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:37:31.875Z*
