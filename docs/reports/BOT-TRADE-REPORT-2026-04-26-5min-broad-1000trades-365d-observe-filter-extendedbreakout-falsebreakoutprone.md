# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T03:26:03.293Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** extendedBreakout, falseBreakoutProne

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $8559.64 (-8.56%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 32.5% (325W / 675L) |
| Net P&L | $-8559.64 (-8.56%) |
| Gross profit | $51815.73 |
| Gross loss | $60375.37 |
| Profit factor | 0.86 |
| Avg win | $159.43 |
| Avg loss | $89.44 |
| Payoff ratio | 1.78:1 |
| Expectancy | $-8.56 / trade |
| Max drawdown | 12.32% |
| Sharpe ratio (ann.) | -1.53 |
| Trades / active day | 5.68 |
| Avg confidence | 97.64% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.85R |
| Starting equity | $100,000 |
| Ending equity | $91,440.36 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 739 | 33.15% | $-6045.02 | $-8.18 |
| Mid  10:30–11:30 | 202 | 31.68% | $-1631.72 | $-8.08 |
| Noon 11:30–13:00 | 32 | 28.13% | $-247.94 | $-7.75 |
| PM   13:00–14:00 | 27 | 25.93% | $-634.96 | $-23.52 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 40 | 18 | 45% | $+2784.67 | $+69.62 | 2.14 | eligible |
| MRVL | 24 | 9 | 37.5% | $+662.21 | $+27.59 | 1.51 | throttle |
| SMCI | 33 | 13 | 39.39% | $+652.97 | $+19.79 | 1.26 | throttle |
| COST | 7 | 4 | 57.14% | $+578.33 | $+82.62 | 10.64 | eligible |
| ASML | 12 | 5 | 41.67% | $+521.61 | $+43.47 | 2.61 | eligible |
| AMAT | 13 | 6 | 46.15% | $+481.43 | $+37.03 | 2.31 | eligible |
| TSM | 21 | 8 | 38.1% | $+409.57 | $+19.5 | 1.51 | throttle |
| GS | 12 | 7 | 58.33% | $+393.26 | $+32.77 | 2.17 | eligible |
| ORCL | 23 | 9 | 39.13% | $+307.54 | $+13.37 | 1.22 | throttle |
| QCOM | 9 | 4 | 44.44% | $+294.96 | $+32.77 | 2.06 | eligible |
| HD | 5 | 2 | 40% | $+280.33 | $+56.07 | 3.55 | eligible |
| LLY | 17 | 8 | 47.06% | $+208.7 | $+12.28 | 1.24 | eligible |
| PYPL | 19 | 8 | 42.11% | $+203.87 | $+10.73 | 1.29 | eligible |
| TGT | 12 | 6 | 50% | $+190.68 | $+15.89 | 1.42 | eligible |
| DDOG | 16 | 5 | 31.25% | $+184.91 | $+11.56 | 1.17 | throttle |
| V | 5 | 2 | 40% | $+120.82 | $+24.16 | 2.54 | eligible |
| BA | 21 | 9 | 42.86% | $+116.77 | $+5.56 | 1.12 | eligible |
| TXN | 8 | 4 | 50% | $+113.62 | $+14.2 | 1.38 | eligible |
| JPM | 10 | 5 | 50% | $+64.6 | $+6.46 | 1.17 | eligible |
| ADP | 1 | 1 | 100% | $+58.08 | $+58.08 | ∞ | watch |
| NVO | 21 | 8 | 38.1% | $+46.93 | $+2.23 | 1.04 | throttle |
| PLTR | 26 | 11 | 42.31% | $+46 | $+1.77 | 1.03 | eligible |
| MSFT | 9 | 4 | 44.44% | $+19.86 | $+2.21 | 1.06 | eligible |
| LOW | 4 | 1 | 25% | $+5.11 | $+1.28 | 1.03 | watch |
| NET | 18 | 7 | 38.89% | $-1.61 | $-0.09 | 1 | throttle |
| NFLX | 12 | 4 | 33.33% | $-30.01 | $-2.5 | 0.95 | throttle |
| MA | 4 | 1 | 25% | $-37.49 | $-9.37 | 0.8 | watch |
| AAPL | 13 | 5 | 38.46% | $-47.65 | $-3.67 | 0.93 | throttle |
| WMT | 5 | 1 | 20% | $-52 | $-10.4 | 0.78 | throttle |
| COIN | 31 | 11 | 35.48% | $-60.64 | $-1.96 | 0.98 | throttle |
| LRCX | 13 | 3 | 23.08% | $-112.31 | $-8.64 | 0.83 | throttle |
| SBUX | 14 | 4 | 28.57% | $-117.26 | $-8.38 | 0.84 | throttle |
| IBM | 12 | 2 | 16.67% | $-118.37 | $-9.86 | 0.78 | throttle |
| NKE | 16 | 6 | 37.5% | $-122.26 | $-7.64 | 0.86 | throttle |
| GOOGL | 21 | 6 | 28.57% | $-127.09 | $-6.05 | 0.88 | throttle |
| BAC | 6 | 2 | 33.33% | $-140.15 | $-23.36 | 0.5 | throttle |
| DIS | 6 | 2 | 33.33% | $-150.53 | $-25.09 | 0.63 | throttle |
| MDB | 18 | 5 | 27.78% | $-189.28 | $-10.52 | 0.88 | throttle |
| CRM | 14 | 4 | 28.57% | $-194.91 | $-13.92 | 0.71 | throttle |
| AMZN | 12 | 4 | 33.33% | $-207.82 | $-17.32 | 0.59 | throttle |
| KLAC | 9 | 2 | 22.22% | $-211.77 | $-23.53 | 0.51 | throttle |
| NVDA | 18 | 5 | 27.78% | $-271 | $-15.06 | 0.75 | throttle |
| PANW | 13 | 4 | 30.77% | $-273.63 | $-21.05 | 0.58 | throttle |
| SHOP | 17 | 5 | 29.41% | $-287.02 | $-16.88 | 0.7 | throttle |
| GE | 11 | 3 | 27.27% | $-325.03 | $-29.55 | 0.39 | throttle |
| INTU | 4 | 0 | 0% | $-365.72 | $-91.43 | 0 | watch |
| ABNB | 9 | 1 | 11.11% | $-367.4 | $-40.82 | 0.21 | throttle |
| HPE | 7 | 2 | 28.57% | $-368.51 | $-52.64 | 0.28 | throttle |
| CAT | 11 | 2 | 18.18% | $-373 | $-33.91 | 0.33 | throttle |
| UNH | 21 | 8 | 38.1% | $-383.26 | $-18.25 | 0.68 | throttle |
| CVX | 7 | 0 | 0% | $-400.96 | $-57.28 | 0 | throttle |
| TSLA | 26 | 9 | 34.62% | $-404.08 | $-15.54 | 0.77 | throttle |
| NOW | 10 | 2 | 20% | $-405.95 | $-40.6 | 0.49 | throttle |
| MU | 23 | 9 | 39.13% | $-429.68 | $-18.68 | 0.75 | throttle |
| DELL | 15 | 3 | 20% | $-437.34 | $-29.16 | 0.59 | throttle |
| LMT | 7 | 1 | 14.29% | $-508.55 | $-72.65 | 0.02 | throttle |
| XOM | 7 | 0 | 0% | $-513.57 | $-73.37 | 0 | throttle |
| ADBE | 13 | 1 | 7.69% | $-535.06 | $-41.16 | 0.41 | throttle |
| META | 18 | 4 | 22.22% | $-571.52 | $-31.75 | 0.42 | throttle |
| UBER | 20 | 5 | 25% | $-633.05 | $-31.65 | 0.5 | throttle |
| AMD | 27 | 7 | 25.93% | $-668.57 | $-24.76 | 0.7 | throttle |
| ELF | 20 | 5 | 25% | $-702.39 | $-35.12 | 0.56 | throttle |
| SNOW | 13 | 2 | 15.38% | $-815.69 | $-62.75 | 0.27 | throttle |
| RIVN | 23 | 8 | 34.78% | $-844.33 | $-36.71 | 0.62 | throttle |
| CRWD | 17 | 4 | 23.53% | $-928.83 | $-54.64 | 0.18 | throttle |
| AVGO | 18 | 3 | 16.67% | $-979.32 | $-54.41 | 0.27 | throttle |
| ARM | 15 | 2 | 13.33% | $-1232.25 | $-82.15 | 0.19 | throttle |
| CELH | 18 | 4 | 22.22% | $-1359.61 | $-75.53 | 0.28 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 1000 | 325 | 32.5% | $-8559.64 | $-8.56 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 675 | 226 | 33.48% | $-4088.54 | $-6.06 |
| extendedBreakout | 325 | 99 | 30.46% | $-4471.1 | $-13.76 |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-11295.83 | 0.82 |
| +3 bps/side | $-16768.3 | 0.75 |
| +5 bps/side | $-22240.82 | 0.68 |
| +10 bps/side | $-35922.29 | 0.55 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 399 |
| timeout | 238 |
| stagnation | 131 |
| stop-loss | 99 |
| breakeven-stop | 53 |
| profit-target | 45 |
| trailing-stop | 35 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 14:20 | 184.89 | 183.83 | 69 | 12757.41 | -73.14 | -0.57% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | CRWD | 05-01 13:30 | 05-01 13:55 | 431.94 | 429.06 | 32 | 13822.08 | -92.16 | -0.67% | 0.96R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 3 | MSFT | 05-01 13:40 | 05-01 14:00 | 434.46 | 429.69 | 32 | 13902.72 | -152.64 | -1.1% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.46 | ↓433.92 | 10.8676 | 2.55 | **LOSS** |
| 4 | AVGO | 05-01 13:40 | 05-01 15:25 | 197.94 | 198.86 | 65 | 12866.1 | +59.8 | +0.46% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.09 | ↑197.41 | 1.5614 | 3.56 | **WIN** |
| 5 | CAT | 05-01 13:40 | 05-01 14:30 | 316.73 | 316.26 | 44 | 13936.12 | -20.68 | -0.15% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 6 | DELL | 05-01 13:40 | 05-01 14:10 | 94.58 | 94.03 | 137 | 12957.46 | -75.35 | -0.58% | 0.49R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.36 | ↓93.91 | 0.7297 | 1.37 | **LOSS** |
| 7 | ORCL | 05-01 13:45 | 05-01 15:20 | 148.07 | 147.98 | 87 | 12882.09 | -7.83 | -0.06% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.11 | ↑146.73 | 1.7074 | 3.12 | **LOSS** |
| 8 | NOW | 05-01 13:45 | 05-01 15:30 | 967.44 | 971.23 | 14 | 13544.16 | +53.06 | +0.39% | 0.38R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 9 | DDOG | 05-01 13:45 | 05-01 14:10 | 104.91 | 103.96 | 133 | 13953.03 | -126.35 | -0.91% | 0.64R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 96.82 | ↓104.51 | 0.7912 | 1.4 | **LOSS** |
| 10 | AMD | 05-02 13:30 | 05-02 13:50 | 99.11 | 98.46 | 131 | 12983.41 | -85.15 | -0.66% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.68 | ↓98.89 | -0.2 | 4.18 | **LOSS** |
| 11 | QCOM | 05-02 13:30 | 05-02 13:50 | 138.54 | 137.88 | 93 | 12884.22 | -61.38 | -0.48% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 12 | MU | 05-02 13:30 | 05-02 13:50 | 80.33 | 79.31 | 174 | 13977.42 | -177.48 | -1.27% | 1.13R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 13 | BAC | 05-02 13:30 | 05-02 13:50 | 41.03 | 40.75 | 341 | 13991.23 | -95.48 | -0.68% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 14 | COST | 05-02 13:30 | 05-02 14:30 | 1014.3 | 1012.4 | 13 | 13185.9 | -24.7 | -0.19% | 0.27R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.19 | ↓1013.58 | 1.0251 | 1.56 | **LOSS** |
| 15 | V | 05-02 13:30 | 05-02 14:00 | 349.39 | 348.13 | 37 | 12927.43 | -46.62 | -0.36% | 0.44R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 16 | CRM | 05-02 13:35 | 05-02 14:40 | 274.03 | 273.85 | 51 | 13975.53 | -9.18 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 63.96 | ↓273.42 | 0.0846 | 1.78 | **LOSS** |
| 17 | ORCL | 05-02 13:35 | 05-02 15:20 | 150.35 | 151.08 | 86 | 12930.1 | +62.78 | +0.49% | 0.5R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 18 | UBER | 05-02 13:35 | 05-02 15:20 | 83.06 | 84.22 | 168 | 13954.08 | +194.88 | +1.4% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.99 | ↑82.61 | 0.2144 | 1.45 | **WIN** |
| 19 | LMT | 05-02 13:35 | 05-02 14:35 | 488.67 | 487.66 | 28 | 13682.76 | -28.28 | -0.21% | 0.3R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.17 | ↓487.17 | 2.1118 | 1.82 | **LOSS** |
| 20 | HD | 05-02 13:35 | 05-02 14:00 | 364.83 | 363.44 | 38 | 13863.54 | -52.82 | -0.38% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.2 | ↓363.45 | 0.7376 | 1.2 | **LOSS** |
| 21 | PLTR | 05-02 13:40 | 05-02 15:25 | 120.89 | 121.87 | 115 | 13902.35 | +112.7 | +0.81% | 0.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.82 | ↑120.31 | 0.4497 | 4.08 | **WIN** |
| 22 | NOW | 05-02 13:40 | 05-02 14:35 | 984.61 | 976.55 | 14 | 13784.54 | -112.84 | -0.82% | 0.75R | 55m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.34 | ↓980.72 | 1.7513 | 1.42 | **LOSS** |
| 23 | IBM | 05-02 13:40 | 05-02 15:25 | 243.65 | 244.01 | 57 | 13888.05 | +20.52 | +0.15% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.98 | ↑243.37 | 0.8439 | 1.31 | **WIN** |
| 24 | WMT | 05-02 13:45 | 05-02 14:35 | 99.07 | 98.86 | 141 | 13968.87 | -29.61 | -0.21% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.07 | ↓98.63 | 0.3215 | 1.32 | **LOSS** |
| 25 | MSFT | 05-02 13:50 | 05-02 14:40 | 436.72 | 435.55 | 32 | 13975.04 | -37.44 | -0.27% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 26 | AMZN | 05-02 16:10 | 05-02 16:30 | 192.37 | 191.64 | 72 | 13850.64 | -52.56 | -0.38% | 0.42R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 69.76 | ↑189.19 | 0.9985 | 1.31 | **LOSS** |
| 27 | AMD | 05-05 13:35 | 05-05 14:30 | 100.58 | 100.31 | 127 | 12773.66 | -34.29 | -0.27% | 0.27R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 28 | NOW | 05-05 13:55 | 05-05 14:20 | 991.57 | 985.66 | 14 | 13881.98 | -82.74 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 29 | CELH | 05-06 13:30 | 05-06 13:35 | 34.78 | 32.56 | 370 | 12868.6 | -821.4 | -6.38% | 3.19R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 53.83 | ↓34.4 | -0.1172 | 3.69 | **LOSS** |
| 30 | AMZN | 05-07 13:35 | 05-07 15:20 | 187.64 | 188.23 | 74 | 13885.36 | +43.66 | +0.31% | 0.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 31 | PLTR | 05-07 13:35 | 05-07 14:25 | 111.05 | 110.75 | 116 | 12881.8 | -34.8 | -0.27% | 0.2R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.66 | ↑109.39 | 0.0881 | 2.76 | **LOSS** |
| 32 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 33 | NKE | 05-07 13:35 | 05-07 15:10 | 58.01 | 58.05 | 241 | 13980.41 | +9.64 | +0.07% | 0.1R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 34 | RIVN | 05-07 13:35 | 05-07 13:55 | 13.64 | 13.44 | 945 | 12889.8 | -189 | -1.47% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.43 | ↓13.35 | 0.0225 | 1.69 | **LOSS** |
| 35 | DIS | 05-07 13:40 | 05-07 14:00 | 102.17 | 100.79 | 137 | 13997.29 | -189.06 | -1.35% | 0.68R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.06 | ↓101.44 | 2.2882 | 2.62 | **LOSS** |
| 36 | NVO | 05-07 13:45 | 05-07 14:35 | 68.74 | 68.35 | 189 | 12991.86 | -73.71 | -0.57% | 0.35R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.89 | ↓68.58 | 0.4826 | 1.91 | **LOSS** |
| 37 | MRVL | 05-07 17:10 | 05-07 17:30 | 55.45 | 55.08 | 252 | 13973.4 | -93.24 | -0.67% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 38 | AMD | 05-08 13:35 | 05-08 14:25 | 103.84 | 103.6 | 134 | 13914.56 | -32.16 | -0.23% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 79.36 | ↓103.31 | 1.2511 | 1.96 | **LOSS** |
| 39 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 40 | PLTR | 05-08 13:40 | 05-08 15:25 | 115.79 | 117.88 | 112 | 12968.48 | +234.08 | +1.8% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.5 | ↑114.31 | 1.5125 | 2.37 | **WIN** |
| 41 | PYPL | 05-08 13:40 | 05-08 14:45 | 69.74 | 69.66 | 200 | 13948 | -16 | -0.11% | 0.11R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 42 | XOM | 05-08 13:40 | 05-08 14:10 | 106.28 | 105.67 | 131 | 13922.68 | -79.91 | -0.57% | 0.74R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 43 | GE | 05-08 13:40 | 05-08 14:35 | 212.97 | 212.74 | 65 | 13843.05 | -14.95 | -0.11% | 0.14R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.61 | ↑212.15 | 0.4951 | 1.58 | **LOSS** |
| 44 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 45 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 46 | AMD | 05-08 15:40 | 05-08 16:25 | 104.11 | 103.72 | 134 | 13950.74 | -52.26 | -0.37% | 0.31R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 59.47 | ↓103.7 | 0.3679 | 1.25 | **LOSS** |
| 47 | MU | 05-08 15:45 | 05-08 17:30 | 85.51 | 85.81 | 163 | 13938.13 | +48.9 | +0.35% | 0.35R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.41 | ↑84.19 | 0.5086 | 2.02 | **WIN** |
| 48 | RIVN | 05-08 16:05 | 05-08 17:20 | 13.47 | 13.82 | 1037 | 13968.39 | +362.95 | +2.6% | 1.73R | 75m | market | profit-target | breakout | breakout | extendedBreakout | 86.52 | ↑13.15 | 0.0965 | 2.22 | **WIN** |
| 49 | UBER | 05-09 13:30 | 05-09 13:50 | 84.04 | 83.4 | 154 | 12942.16 | -98.56 | -0.76% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.62 | ↓83.64 | -0.0738 | 1.81 | **LOSS** |
| 50 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 72 | 14002.56 | -77.76 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 51 | SMCI | 05-09 13:35 | 05-09 14:00 | 32.7 | 32.48 | 428 | 13995.6 | -94.16 | -0.67% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.56 | ↓32.57 | 0.0095 | 1.51 | **LOSS** |
| 52 | TXN | 05-09 13:35 | 05-09 13:55 | 171.76 | 170.88 | 75 | 12882 | -66 | -0.51% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.12 | ↓171.21 | 0.6463 | 2.59 | **LOSS** |
| 53 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 54 | COIN | 05-09 13:45 | 05-09 14:05 | 212.76 | 210.15 | 65 | 13829.4 | -169.65 | -1.23% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.46 | ↑207.08 | 0.0494 | 1.49 | **LOSS** |
| 55 | PANW | 05-12 13:45 | 05-12 15:30 | 190.52 | 191.42 | 67 | 12764.84 | +60.3 | +0.47% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 56 | NKE | 05-12 14:00 | 05-12 14:25 | 63.24 | 62.62 | 221 | 13976.04 | -137.02 | -0.98% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓62.7 | 1.0815 | 1.41 | **LOSS** |
| 57 | ARM | 05-12 16:10 | 05-12 16:30 | 124.72 | 124.17 | 112 | 13968.64 | -61.6 | -0.44% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.27 | ↑122.91 | 0.4147 | 2.75 | **LOSS** |
| 58 | INTC | 05-12 17:35 | 05-12 17:50 | 22.6 | 22.36 | 619 | 13989.4 | -148.56 | -1.06% | 1.38R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 59 | UBER | 05-12 17:40 | 05-12 18:00 | 87.36 | 86.86 | 160 | 13977.6 | -80 | -0.57% | 0.75R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.29 | ↑85.18 | 0.2579 | 2.95 | **LOSS** |
| 60 | AMD | 05-13 13:30 | 05-13 13:50 | 110.23 | 109.7 | 126 | 13888.98 | -66.78 | -0.48% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.01 | ↓109.9 | 0.2104 | 2.2 | **LOSS** |
| 61 | TSM | 05-13 13:30 | 05-13 15:15 | 189.87 | 192.63 | 73 | 13860.51 | +201.48 | +1.45% | 2.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 62 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 63 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 64 | META | 05-13 13:35 | 05-13 15:20 | 649.54 | 658.4 | 21 | 13640.34 | +186.06 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 65 | NFLX | 05-13 13:35 | 05-13 15:20 | 1128.54 | 1137.39 | 12 | 13542.48 | +106.2 | +0.78% | 1.05R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.1 | ↑1120.51 | 0.5982 | 2.23 | **WIN** |
| 66 | ARM | 05-13 13:35 | 05-13 14:40 | 125.86 | 125.44 | 111 | 13970.46 | -46.62 | -0.33% | 0.43R | 65m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 67 | COIN | 05-13 13:35 | 05-13 15:20 | 238.38 | 245.36 | 54 | 12872.52 | +376.92 | +2.93% | 1.47R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 96.92 | ↑236.46 | 6.9211 | 4.45 | **WIN** |
| 68 | NET | 05-13 13:35 | 05-13 15:20 | 145.85 | 147.81 | 95 | 13855.75 | +186.2 | +1.34% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.56 | ↑144.81 | 0.3181 | 1.23 | **WIN** |
| 69 | CAT | 05-13 13:35 | 05-13 13:55 | 351.7 | 349.52 | 36 | 12661.2 | -78.48 | -0.62% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.35 | ↓350.65 | 1.0052 | 1.12 | **LOSS** |
| 70 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 71 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 72 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.13 | 441.02 | 32 | 13924.16 | +188.48 | +1.35% | 1.93R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 73 | DELL | 05-13 13:50 | 05-13 15:35 | 106.05 | 107.59 | 131 | 13892.55 | +201.74 | +1.45% | 1.84R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 74 | SMCI | 05-13 13:55 | 05-13 14:40 | 36.04 | 37.8 | 388 | 13983.52 | +682.88 | +4.88% | 2.44R | 45m | market | profit-target | breakout | breakout | falseBreakoutProne | 89.53 | ↑35.38 | 0.5657 | 1.49 | **WIN** |
| 75 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 610 | 13956.8 | -176.9 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 76 | PLTR | 05-13 14:45 | 05-13 15:45 | 125.01 | 128.46 | 112 | 14001.12 | +386.4 | +2.76% | 1.97R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 65.77 | ↑123 | 1.5757 | 1.67 | **WIN** |
| 77 | AVGO | 05-13 15:00 | 05-13 15:20 | 231.88 | 230.96 | 60 | 13912.8 | -55.2 | -0.4% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.02 | ↑227.92 | 2.7447 | 1.3 | **LOSS** |
| 78 | TSLA | 05-13 17:35 | 05-13 19:20 | 333.02 | 335.14 | 41 | 13653.82 | +86.92 | +0.64% | 0.63R | 105m | market | timeout | breakout | breakout | extendedBreakout | 96.17 | ↑323.62 | 2.3858 | 6.25 | **WIN** |
| 79 | COIN | 05-14 13:30 | 05-14 13:50 | 261.27 | 257.47 | 53 | 13847.31 | -201.4 | -1.45% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 54.53 | ↓258.97 | 1.311 | 2.61 | **LOSS** |
| 80 | LLY | 05-14 13:30 | 05-14 13:50 | 756.77 | 749.68 | 18 | 13621.86 | -127.62 | -0.94% | 1.34R | 20m | market | stop-loss | trend | breakout | falseBreakoutProne | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 81 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 82 | NET | 05-14 13:35 | 05-14 13:45 | 153.78 | 152.05 | 91 | 13993.98 | -157.43 | -1.12% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 83 | NVO | 05-14 13:35 | 05-14 13:50 | 66.64 | 65.97 | 209 | 13927.76 | -140.03 | -1.01% | 1.38R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 84 | CELH | 05-14 13:35 | 05-14 14:40 | 38.99 | 38.96 | 330 | 12866.7 | -9.9 | -0.08% | 0.06R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 80.9 | ↓38.74 | 0.2514 | 1.69 | **LOSS** |
| 85 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.19 | 72.92 | 191 | 13979.29 | -51.57 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 86 | TSLA | 05-14 14:05 | 05-14 14:25 | 343.98 | 339.88 | 40 | 13759.2 | -164 | -1.19% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.93 | ↓340.64 | 1.6752 | 1.14 | **LOSS** |
| 87 | CELH | 05-14 16:00 | 05-14 16:20 | 39.5 | 39.35 | 351 | 13864.5 | -52.65 | -0.38% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.55 | ↑39.14 | 0.1112 | 1.2 | **LOSS** |
| 88 | SMCI | 05-15 13:30 | 05-15 13:45 | 45.23 | 44.03 | 286 | 12935.78 | -343.2 | -2.65% | 1.33R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 56.34 | ↓44.77 | -0.3135 | 2.34 | **LOSS** |
| 89 | JPM | 05-15 13:40 | 05-15 13:45 | 269.12 | 267.07 | 52 | 13994.24 | -106.6 | -0.76% | 1.09R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 76.67 | ↓268.38 | 0.6217 | 2.74 | **LOSS** |
| 90 | V | 05-15 13:40 | 05-15 14:35 | 361.12 | 360.93 | 38 | 13722.56 | -7.22 | -0.05% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.5 | ↓359.87 | 0.8029 | 4.46 | **LOSS** |
| 91 | ADP | 05-15 13:40 | 05-15 15:25 | 314.09 | 315.41 | 44 | 13819.96 | +58.08 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.29 | ↑312.99 | 1.5099 | 1.22 | **WIN** |
| 92 | MU | 05-16 13:30 | 05-16 15:15 | 96.43 | 97.42 | 144 | 13885.92 | +142.56 | +1.03% | 1.47R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.53 | ↑96.22 | 0.1541 | 1.16 | **WIN** |
| 93 | COIN | 05-16 13:30 | 05-16 14:05 | 251.86 | 257.93 | 55 | 13852.3 | +333.85 | +2.41% | 1.23R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.23 | ↑251.46 | 0.1892 | 1.63 | **WIN** |
| 94 | SMCI | 05-16 13:30 | 05-16 14:20 | 46.05 | 47.21 | 304 | 13999.2 | +352.64 | +2.52% | 1.29R | 50m | market | profit-target | breakout | breakout | falseBreakoutProne | 76.48 | ↑45.7 | 0.3935 | 4.7 | **WIN** |
| 95 | TGT | 05-16 13:30 | 05-16 15:15 | 97.91 | 98.32 | 142 | 13903.22 | +58.22 | +0.42% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 96 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 97 | NET | 05-16 13:35 | 05-16 15:20 | 155.17 | 156.49 | 90 | 13965.3 | +118.8 | +0.85% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 98 | LLY | 05-16 13:35 | 05-16 15:20 | 744.36 | 748.04 | 18 | 13398.48 | +66.24 | +0.49% | 0.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 99 | NFLX | 05-16 13:45 | 05-16 14:30 | 1193.72 | 1186.56 | 11 | 13130.92 | -78.76 | -0.6% | 0.86R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 100 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.41 | 437.21 | 32 | 13997.12 | -6.4 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 101 | DELL | 05-16 13:45 | 05-16 14:40 | 112.55 | 112.41 | 124 | 13956.2 | -17.36 | -0.12% | 0.17R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 102 | ADBE | 05-16 13:55 | 05-16 14:15 | 420.4 | 418.5 | 33 | 13873.2 | -62.7 | -0.45% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↑415.86 | 3.7059 | 1.35 | **LOSS** |
| 103 | COIN | 05-16 14:15 | 05-16 14:35 | 262.98 | 260.26 | 53 | 13937.94 | -144.16 | -1.03% | 0.52R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.1 | ↑257.39 | 3.9015 | 1.26 | **LOSS** |
| 104 | COIN | 05-16 15:55 | 05-16 16:15 | 268.16 | 265.51 | 52 | 13944.32 | -137.8 | -0.99% | 0.79R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 76.56 | ↑260.7 | 3.4978 | 1.8 | **LOSS** |
| 105 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 106 | SMCI | 05-19 17:05 | 05-19 17:25 | 45.73 | 45.54 | 307 | 14039.11 | -58.33 | -0.42% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.65 | ↑45.44 | 0.0211 | 2.11 | **LOSS** |
| 107 | NVO | 05-20 13:40 | 05-20 14:40 | 69.14 | 69.09 | 186 | 12860.04 | -9.3 | -0.07% | 0.06R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 94.03 | ↓69.09 | 0.5109 | 2.82 | **LOSS** |
| 108 | RIVN | 05-20 13:55 | 05-20 14:45 | 16.96 | 16.9 | 826 | 14008.96 | -49.56 | -0.35% | 0.18R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.21 | ↑16.69 | 0.1387 | 1.39 | **LOSS** |
| 109 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.94 | 43.65 | 295 | 12962.3 | -85.55 | -0.66% | 0.63R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 110 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 76 | 12731.52 | +402.04 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 111 | CELH | 05-21 15:35 | 05-21 15:55 | 37.51 | 37.32 | 369 | 13841.19 | -70.11 | -0.51% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.66 | ↑37.08 | -0.1456 | 1.95 | **LOSS** |
| 112 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 113 | DDOG | 05-22 13:35 | 05-22 14:40 | 115.75 | 115.73 | 120 | 13890 | -2.4 | -0.02% | 0.03R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 67.5 | ↓115.09 | -0.0783 | 1.65 | **LOSS** |
| 114 | SNOW | 05-22 13:35 | 05-22 14:10 | 198.02 | 195.85 | 65 | 12871.3 | -141.05 | -1.1% | 0.55R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 88.83 | ↓196.38 | 3.2399 | 3.05 | **LOSS** |
| 115 | NKE | 05-22 13:35 | 05-22 14:25 | 60.99 | 60.82 | 229 | 13966.71 | -38.93 | -0.28% | 0.34R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.69 | ↓60.64 | -0.0302 | 4.89 | **LOSS** |
| 116 | TGT | 05-22 13:35 | 05-22 15:15 | 94.43 | 94.48 | 148 | 13975.64 | +7.4 | +0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 58.78 | ↓93.74 | 0.1907 | 1.41 | **WIN** |
| 117 | ELF | 05-22 13:35 | 05-22 15:25 | 80.35 | 81.31 | 174 | 13980.9 | +167.04 | +1.19% | 1.21R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 77.6 | ↑80 | 0.0474 | 1.57 | **WIN** |
| 118 | COIN | 05-22 13:40 | 05-22 14:00 | 267.89 | 264.93 | 52 | 13930.28 | -153.92 | -1.1% | 0.57R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.67 | ↓267.35 | 1.1903 | 2.69 | **LOSS** |
| 119 | MDB | 05-22 13:45 | 05-22 14:35 | 188.54 | 187.95 | 74 | 13951.96 | -43.66 | -0.31% | 0.25R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.82 | ↓188.33 | 0.1922 | 1.41 | **LOSS** |
| 120 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 229 | 13962.13 | +192.36 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 121 | PLTR | 05-22 13:50 | 05-22 15:35 | 123.52 | 125.85 | 114 | 14081.28 | +265.62 | +1.89% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑122.43 | 0.1249 | 1.77 | **WIN** |
| 122 | SMCI | 05-22 13:50 | 05-22 14:50 | 41.87 | 41.82 | 335 | 14026.45 | -16.75 | -0.12% | 0.07R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 50.56 | ↓41.54 | -0.1242 | 1.34 | **LOSS** |
| 123 | META | 05-22 13:55 | 05-22 14:20 | 641.31 | 639.15 | 21 | 13467.51 | -45.36 | -0.34% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↑636.77 | 0.3277 | 1.82 | **LOSS** |
| 124 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 125 | INTU | 05-27 13:30 | 05-27 13:45 | 733.66 | 726.5 | 17 | 12472.22 | -121.72 | -0.98% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.5 | ↓730.5 | 1.0404 | 1.38 | **LOSS** |
| 126 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.85 | 161.78 | 87 | 13906.95 | +167.91 | +1.21% | 1.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 127 | QCOM | 05-27 13:35 | 05-27 15:20 | 147.38 | 148.86 | 94 | 13853.72 | +139.12 | +1% | 1.08R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.04 | ↑147.11 | 0.2285 | 1.17 | **WIN** |
| 128 | MU | 05-27 13:35 | 05-27 15:20 | 94.65 | 96.07 | 147 | 13913.55 | +208.74 | +1.5% | 1.6R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 72.36 | ↑94.59 | 0.1301 | 1.3 | **WIN** |
| 129 | TSM | 05-27 13:35 | 05-27 15:20 | 194.92 | 195.86 | 71 | 13839.32 | +66.74 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 130 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 131 | SBUX | 05-27 13:35 | 05-27 14:10 | 86.19 | 85.74 | 162 | 13962.78 | -72.9 | -0.52% | 0.74R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 132 | NKE | 05-27 13:35 | 05-27 15:20 | 61.13 | 62.17 | 228 | 13937.64 | +237.12 | +1.7% | 2.02R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.78 | ↑61.11 | 0.1357 | 1.57 | **WIN** |
| 133 | DIS | 05-27 13:40 | 05-27 15:25 | 111.1 | 112.1 | 125 | 13887.5 | +125 | +0.9% | 1.29R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 70.72 | ↑110.71 | 0.0835 | 1.89 | **WIN** |
| 134 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.73 | 161.56 | 87 | 13983.51 | +72.21 | +0.52% | 0.67R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 135 | CELH | 05-27 13:40 | 05-27 15:25 | 36.83 | 37.21 | 376 | 13848.08 | +142.88 | +1.03% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.22 | ↑36.56 | 0.1227 | 1.55 | **WIN** |
| 136 | SNOW | 05-27 13:45 | 05-27 14:20 | 205.92 | 204.84 | 67 | 13796.64 | -72.36 | -0.52% | 0.48R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.97 | ↓204.39 | 0.6946 | 1.93 | **LOSS** |
| 137 | MDB | 05-27 13:45 | 05-27 14:55 | 188.84 | 188.48 | 74 | 13974.16 | -26.64 | -0.19% | 0.22R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 70 | ↓188.58 | 0.8834 | 1.35 | **LOSS** |
| 138 | GE | 05-27 13:45 | 05-27 15:30 | 238.52 | 240.42 | 58 | 13834.16 | +110.2 | +0.8% | 1.14R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.1 | ↑236.93 | 0.9036 | 1.33 | **WIN** |
| 139 | ELF | 05-27 15:25 | 05-27 15:45 | 88.99 | 88.64 | 157 | 13971.43 | -54.95 | -0.39% | 0.35R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.1 | ↑86.86 | 1.2357 | 2.42 | **LOSS** |
| 140 | META | 05-28 13:30 | 05-28 13:50 | 649.52 | 646.01 | 21 | 13639.92 | -73.71 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.02 | ↓647.61 | 0.5383 | 4.4 | **LOSS** |
| 141 | PLTR | 05-28 13:30 | 05-28 13:55 | 124.91 | 123.28 | 113 | 14114.83 | -184.19 | -1.3% | 1.37R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 142 | UNH | 05-28 13:30 | 05-28 15:15 | 297.36 | 300.96 | 47 | 13975.92 | +169.2 | +1.21% | 1.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 143 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 214 | 13980.62 | -29.96 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 144 | ARM | 05-28 17:10 | 05-28 17:35 | 137.36 | 136.89 | 101 | 13873.36 | -47.47 | -0.34% | 0.49R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 89.73 | ↑135.15 | 0.5002 | 1.28 | **LOSS** |
| 145 | UNH | 05-29 13:35 | 05-29 14:15 | 301.96 | 299.83 | 46 | 13890.16 | -97.98 | -0.71% | 0.84R | 40m | market | early-reversal | trend | breakout | falseBreakoutProne | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 146 | NKE | 05-29 13:35 | 05-29 13:55 | 62.51 | 62.29 | 224 | 14002.24 | -49.28 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.31 | ↓62.35 | 0.0497 | 1.87 | **LOSS** |
| 147 | ELF | 05-30 13:30 | 05-30 13:45 | 114.96 | 112.08 | 112 | 12875.52 | -322.56 | -2.51% | 1.5R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 64.38 | ↓114.22 | 0.3278 | 1.72 | **LOSS** |
| 148 | COST | 05-30 13:35 | 05-30 15:20 | 1029.36 | 1042.12 | 13 | 13381.68 | +165.88 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.08 | ↑1018.28 | 1.9104 | 1.79 | **WIN** |
| 149 | UNH | 05-30 13:50 | 05-30 15:35 | 300.94 | 302.3 | 46 | 13843.24 | +62.56 | +0.45% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 150 | PLTR | 05-30 14:15 | 05-30 15:05 | 127.68 | 131.25 | 102 | 13023.36 | +364.14 | +2.8% | 1.41R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 74.77 | ↑125.34 | 0.916 | 4.28 | **WIN** |
| 151 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 152 | PANW | 06-02 13:30 | 06-02 13:50 | 193.71 | 192.16 | 72 | 13947.12 | -111.6 | -0.8% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 153 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.51 | 466.79 | 29 | 13702.79 | -165.88 | -1.21% | 1.73R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 154 | META | 06-02 13:35 | 06-02 13:55 | 659.55 | 652.58 | 21 | 13850.55 | -146.37 | -1.06% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.08 | ↓653.72 | 3.2668 | 2.03 | **LOSS** |
| 155 | AMD | 06-02 13:35 | 06-02 14:15 | 113.4 | 112.7 | 123 | 13948.2 | -86.1 | -0.62% | 0.65R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.29 | ↓112.74 | 0.6463 | 2.28 | **LOSS** |
| 156 | AVGO | 06-02 13:35 | 06-02 13:55 | 248.6 | 246.46 | 52 | 12927.2 | -111.28 | -0.86% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓247 | 1.9006 | 1.18 | **LOSS** |
| 157 | PLTR | 06-02 13:35 | 06-02 13:45 | 133.98 | 132.08 | 105 | 14067.9 | -199.5 | -1.42% | 1.16R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.42 | ↓133.08 | 1.5619 | 1.85 | **LOSS** |
| 158 | COIN | 06-02 13:35 | 06-02 13:40 | 249.41 | 245.44 | 56 | 13966.96 | -222.32 | -1.59% | 2.21R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 159 | SNOW | 06-02 13:35 | 06-02 13:50 | 209.97 | 206.97 | 66 | 13858.02 | -198 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 160 | MDB | 06-02 13:35 | 06-02 13:40 | 191.29 | 188.29 | 73 | 13964.17 | -219 | -1.57% | 2.24R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 91.83 | ↓190.88 | 1.456 | 2.07 | **LOSS** |
| 161 | XOM | 06-02 13:35 | 06-02 14:00 | 103.25 | 102.78 | 135 | 13938.75 | -63.45 | -0.46% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.3 | ↓103.11 | 0.2555 | 2 | **LOSS** |
| 162 | UNH | 06-02 13:35 | 06-02 13:55 | 312.06 | 306.66 | 41 | 12794.46 | -221.4 | -1.73% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.75 | ↓309.2 | 1.2285 | 6.95 | **LOSS** |
| 163 | ELF | 06-02 17:20 | 06-02 17:50 | 112.66 | 112.15 | 124 | 13969.84 | -63.24 | -0.45% | 0.54R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.96 | ↓112.4 | -0.3135 | 1.27 | **LOSS** |
| 164 | AVGO | 06-03 13:40 | 06-03 15:25 | 251.48 | 255.9 | 55 | 13831.4 | +243.1 | +1.76% | 2.1R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.58 | ↑250.89 | 0.3016 | 2.61 | **WIN** |
| 165 | RIVN | 06-03 13:40 | 06-03 14:30 | 14.55 | 14.54 | 894 | 13007.7 | -8.94 | -0.07% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.82 | ↑14.4 | 0.1001 | 1.24 | **LOSS** |
| 166 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 167 | SMCI | 06-03 14:35 | 06-03 16:20 | 42.89 | 43.81 | 327 | 14025.03 | +300.84 | +2.15% | 1.17R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.02 | ↑41.83 | 0.4437 | 1.21 | **WIN** |
| 168 | AVGO | 06-04 13:30 | 06-04 14:00 | 261.07 | 258.77 | 53 | 13836.71 | -121.9 | -0.88% | 1.22R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 87.17 | ↓259.87 | 1.0726 | 2.1 | **LOSS** |
| 169 | TSM | 06-04 13:30 | 06-04 14:00 | 202.09 | 200.74 | 69 | 13944.21 | -93.15 | -0.67% | 0.96R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 170 | MDB | 06-04 13:30 | 06-04 15:15 | 195.75 | 198.41 | 71 | 13898.25 | +188.86 | +1.36% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.97 | ↑195.4 | 0.5475 | 2.25 | **WIN** |
| 171 | UNH | 06-04 13:30 | 06-04 13:55 | 305.69 | 303.54 | 45 | 13756.05 | -96.75 | -0.7% | 1R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 172 | LLY | 06-04 13:30 | 06-04 15:15 | 763.28 | 766.14 | 18 | 13739.04 | +51.48 | +0.37% | 0.53R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 63.16 | ↓760.92 | 1.0651 | 1.86 | **WIN** |
| 173 | TXN | 06-04 13:30 | 06-04 14:00 | 190.13 | 189.57 | 73 | 13879.49 | -40.88 | -0.29% | 0.41R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 174 | META | 06-04 13:35 | 06-04 15:20 | 679.79 | 681.32 | 20 | 13595.8 | +30.6 | +0.23% | 0.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.64 | ↑675.82 | 1.0565 | 2.57 | **WIN** |
| 175 | UBER | 06-04 13:35 | 06-04 14:05 | 84.31 | 83.44 | 166 | 13995.46 | -144.42 | -1.03% | 1.45R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.43 | ↓83.86 | 0.1937 | 2.77 | **LOSS** |
| 176 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.62 | 210.98 | 65 | 13820.3 | -106.6 | -0.77% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 177 | ELF | 06-04 13:35 | 06-04 13:45 | 116.55 | 114.72 | 119 | 13869.45 | -217.77 | -1.57% | 2.09R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.21 | ↓116.1 | 0.364 | 1.53 | **LOSS** |
| 178 | DDOG | 06-04 13:40 | 06-04 14:00 | 120.72 | 119.73 | 115 | 13882.8 | -113.85 | -0.82% | 1.15R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 179 | SMCI | 06-04 15:00 | 06-04 15:30 | 44.02 | 43.82 | 320 | 14086.4 | -64 | -0.45% | 0.3R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 56.72 | ↓43.81 | 0.0529 | 1.49 | **LOSS** |
| 180 | AMZN | 06-05 13:30 | 06-05 13:50 | 210.46 | 209.21 | 66 | 13890.36 | -82.5 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 181 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 82 | 13967.06 | -58.22 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 182 | PLTR | 06-05 13:40 | 06-05 14:00 | 132.23 | 130.35 | 106 | 14016.38 | -199.28 | -1.42% | 1.25R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.64 | ↓130.89 | 0.0474 | 2.28 | **LOSS** |
| 183 | MDB | 06-05 13:55 | 06-05 14:30 | 232.64 | 230.21 | 55 | 12795.2 | -133.65 | -1.04% | 0.52R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 90.56 | ↓230.39 | 7.9008 | 1.28 | **LOSS** |
| 184 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 185 | META | 06-06 13:30 | 06-06 14:40 | 697.26 | 696.87 | 18 | 12550.68 | -7.02 | -0.06% | 0.06R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 186 | AAPL | 06-06 13:30 | 06-06 13:50 | 205.12 | 204.16 | 62 | 12717.44 | -59.52 | -0.47% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.95 | ↓204.58 | -0.1146 | 2.13 | **LOSS** |
| 187 | MU | 06-06 13:30 | 06-06 15:15 | 109.63 | 110.28 | 117 | 12826.71 | +76.05 | +0.59% | 0.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.47 | ↑109.09 | -0.1609 | 1.77 | **WIN** |
| 188 | PYPL | 06-06 13:30 | 06-06 13:50 | 73.47 | 73.13 | 190 | 13959.3 | -64.6 | -0.46% | 0.61R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 65.18 | ↓73.38 | 0.0047 | 2.35 | **LOSS** |
| 189 | JPM | 06-06 13:30 | 06-06 15:15 | 265.14 | 265.79 | 52 | 13787.28 | +33.8 | +0.25% | 0.36R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.37 | ↑264.86 | -0.1276 | 1.75 | **WIN** |
| 190 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 191 | TGT | 06-06 13:30 | 06-06 15:15 | 95.3 | 95.92 | 136 | 12960.8 | +84.32 | +0.65% | 0.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 192 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 193 | CRWD | 06-06 13:35 | 06-06 14:30 | 471.62 | 471.75 | 29 | 13676.98 | +3.77 | +0.03% | 0.03R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.46 | ↓468.35 | 1.8232 | 1.77 | **WIN** |
| 194 | CAT | 06-06 13:35 | 06-06 14:00 | 356.89 | 355.6 | 39 | 13918.71 | -50.31 | -0.36% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.5 | ↓356.13 | 0.6147 | 3.19 | **LOSS** |
| 195 | NVO | 06-06 13:35 | 06-06 15:20 | 74.31 | 74.48 | 187 | 13895.97 | +31.79 | +0.23% | 0.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.73 | ↓74.19 | 0.2439 | 2.63 | **WIN** |
| 196 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 208 | 14000.48 | +422.24 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 197 | ABNB | 06-06 13:40 | 06-06 14:05 | 142.7 | 141.59 | 90 | 12843 | -99.9 | -0.78% | 0.53R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.75 | ↓141.78 | 0.8906 | 2.3 | **LOSS** |
| 198 | PANW | 06-06 13:40 | 06-06 14:25 | 199.73 | 199.09 | 70 | 13981.1 | -44.8 | -0.32% | 0.44R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.26 | ↓199.11 | 0.3282 | 1.34 | **LOSS** |
| 199 | NET | 06-06 13:40 | 06-06 14:05 | 180.77 | 179.57 | 71 | 12834.67 | -85.2 | -0.66% | 0.48R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.41 | ↓178.82 | -0.3706 | 1.46 | **LOSS** |
| 200 | GE | 06-06 13:40 | 06-06 14:00 | 256.88 | 256.1 | 54 | 13871.52 | -42.12 | -0.3% | 0.42R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.73 | ↓255.21 | 0.6662 | 1.5 | **LOSS** |
| 201 | PLTR | 06-06 13:55 | 06-06 14:15 | 125.49 | 124.55 | 112 | 14054.88 | -105.28 | -0.75% | 0.45R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.93 | ↑124.03 | 0.9447 | 1.39 | **LOSS** |
| 202 | KLAC | 06-09 13:35 | 06-09 14:25 | 823.92 | 823.55 | 16 | 13182.72 | -5.92 | -0.04% | 0.06R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.74 | ↑822.65 | 1.4407 | 1.17 | **LOSS** |
| 203 | CELH | 06-09 13:35 | 06-09 14:25 | 42.14 | 42.12 | 303 | 12768.42 | -6.06 | -0.05% | 0.03R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.65 | ↓42 | 0.2824 | 1.11 | **LOSS** |
| 204 | ORCL | 06-09 13:40 | 06-09 15:25 | 176.72 | 177.4 | 79 | 13960.88 | +53.72 | +0.38% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.66 | ↓175.24 | 0.4223 | 1.33 | **WIN** |
| 205 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 680 | 13953.6 | +142.8 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 206 | TGT | 06-09 13:40 | 06-09 13:45 | 99.19 | 97.77 | 141 | 13985.79 | -200.22 | -1.43% | 2.04R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 207 | UBER | 06-09 13:45 | 06-09 15:05 | 87.44 | 87.33 | 159 | 13902.96 | -17.49 | -0.13% | 0.14R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 208 | SMCI | 06-09 14:25 | 06-09 14:50 | 43.26 | 42.9 | 325 | 14059.5 | -117 | -0.83% | 0.49R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 85.71 | ↑42.68 | 0.393 | 1.46 | **LOSS** |
| 209 | BA | 06-09 14:50 | 06-09 15:15 | 215.82 | 215.16 | 65 | 14028.3 | -42.9 | -0.31% | 0.44R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 76.86 | ↑213.75 | 1.44 | 3.15 | **LOSS** |
| 210 | XOM | 06-10 13:30 | 06-10 13:50 | 106.55 | 106.15 | 120 | 12786 | -48 | -0.38% | 0.54R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.37 | ↓106.33 | -0.0398 | 1.25 | **LOSS** |
| 211 | TSM | 06-10 13:35 | 06-10 15:15 | 211.65 | 211.44 | 66 | 13968.9 | -13.86 | -0.1% | 0.14R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.36 | ↓211.23 | 0.7821 | 2.35 | **LOSS** |
| 212 | LLY | 06-10 13:40 | 06-10 15:30 | 786.05 | 794.64 | 17 | 13362.85 | +146.03 | +1.09% | 1.49R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 67.08 | ↑785.26 | 1.6434 | 1.19 | **WIN** |
| 213 | NVO | 06-10 13:40 | 06-10 15:05 | 77.75 | 79.67 | 165 | 12828.75 | +316.8 | +2.47% | 2.25R | 85m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.51 | ↑77.77 | 0.4269 | 1.56 | **WIN** |
| 214 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.69 | 121.92 | 112 | 13853.28 | -198.24 | -1.43% | 1.77R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 215 | INTC | 06-10 17:00 | 06-10 17:50 | 21.32 | 22.18 | 655 | 13964.6 | +563.3 | +4.03% | 5.76R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 216 | ARM | 06-11 13:35 | 06-11 13:45 | 143.55 | 141.25 | 97 | 13924.35 | -223.1 | -1.6% | 1.9R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.98 | ↓143.16 | 0.6473 | 2.44 | **LOSS** |
| 217 | SBUX | 06-11 13:35 | 06-11 15:20 | 94.03 | 94.64 | 138 | 12976.14 | +84.18 | +0.65% | 0.71R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 94.98 | ↑93.45 | 0.5126 | 2.05 | **WIN** |
| 218 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 219 | AVGO | 06-11 14:00 | 06-11 15:45 | 249.68 | 250.62 | 56 | 13982.08 | +52.64 | +0.38% | 0.28R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.62 | ↑247.75 | 1.1406 | 1.12 | **WIN** |
| 220 | SMCI | 06-11 15:00 | 06-11 15:20 | 44.54 | 44.15 | 316 | 14074.64 | -123.24 | -0.88% | 0.57R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.75 | ↑43.62 | 0.3207 | 2.31 | **LOSS** |
| 221 | ORCL | 06-12 13:35 | 06-12 14:30 | 194.6 | 200.82 | 66 | 12843.6 | +410.52 | +3.2% | 1.6R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.33 | ↑192.33 | 3.8358 | 2.56 | **WIN** |
| 222 | CRWD | 06-12 13:40 | 06-12 14:00 | 485.52 | 481.2 | 28 | 13594.56 | -120.96 | -0.89% | 1R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.82 | ↓482.32 | 1.0978 | 3.04 | **LOSS** |
| 223 | DDOG | 06-12 13:45 | 06-12 14:10 | 123.29 | 122.24 | 104 | 12822.16 | -109.2 | -0.85% | 0.78R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89 | ↓122.29 | 0.7035 | 2.1 | **LOSS** |
| 224 | SNOW | 06-12 13:50 | 06-12 14:10 | 211.59 | 210.21 | 65 | 13753.35 | -89.7 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.71 | ↓210.84 | 0.5133 | 3.96 | **LOSS** |
| 225 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.58 | 210.87 | 68 | 13911.44 | +427.72 | +3.07% | 2.62R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 226 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 683 | 14035.65 | -157.09 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 227 | LMT | 06-13 13:35 | 06-13 13:55 | 486.43 | 481.29 | 26 | 12647.18 | -133.64 | -1.06% | 1.34R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 98.1 | ↓481.73 | 2.6569 | 1.69 | **LOSS** |
| 228 | MU | 06-16 13:30 | 06-16 15:15 | 118.58 | 120.68 | 118 | 13992.44 | +247.8 | +1.77% | 1.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 229 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 230 | TXN | 06-16 13:30 | 06-16 15:15 | 197.68 | 199.27 | 56 | 11070.08 | +89.04 | +0.8% | 1.03R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 231 | AMD | 06-16 13:35 | 06-16 14:15 | 120.5 | 124.26 | 115 | 13857.5 | +432.4 | +3.12% | 2.17R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 84.82 | ↑119.69 | 0.9613 | 2.52 | **WIN** |
| 232 | COIN | 06-16 13:35 | 06-16 15:20 | 248.94 | 253.73 | 56 | 13940.64 | +268.24 | +1.92% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.93 | ↑247.5 | 1.6228 | 1.37 | **WIN** |
| 233 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 129 | 13910.07 | +148.35 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 234 | MA | 06-16 13:35 | 06-16 15:10 | 572.36 | 572.16 | 24 | 13736.64 | -4.8 | -0.03% | 0.04R | 95m | market | stagnation | breakout | breakout | falseBreakoutProne | 88.16 | ↑569.61 | 1.3516 | 1.19 | **LOSS** |
| 235 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.89 | 93.14 | 152 | 13967.28 | +190 | +1.36% | 1.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 236 | PLTR | 06-16 13:40 | 06-16 14:05 | 144.49 | 143.09 | 97 | 14015.53 | -135.8 | -0.97% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 86.6 | ↓142.94 | 1.2454 | 2.2 | **LOSS** |
| 237 | WMT | 06-16 13:40 | 06-16 14:35 | 95.34 | 95.12 | 146 | 13919.64 | -32.12 | -0.23% | 0.33R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 72.52 | ↓95.1 | 0.094 | 1.49 | **LOSS** |
| 238 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.49 | 175.83 | 80 | 13959.2 | +107.2 | +0.77% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 239 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 679 | 14014.56 | +95.06 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 240 | ASML | 06-16 13:50 | 06-16 15:35 | 771.19 | 776.38 | 15 | 11567.85 | +77.85 | +0.67% | 0.96R | 105m | market | timeout | mixed | breakout | falseBreakoutProne | 69.1 | ↑769.38 | -0.9416 | 1.54 | **WIN** |
| 241 | ADBE | 06-16 14:00 | 06-16 14:20 | 404.62 | 399.13 | 34 | 13757.08 | -186.66 | -1.36% | 1.24R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.04 | ↓399.94 | 2.3777 | 1.36 | **LOSS** |
| 242 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 198 | 14036.22 | -71.28 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 243 | AMD | 06-16 14:20 | 06-16 16:05 | 125.11 | 126.93 | 111 | 13887.21 | +202.02 | +1.45% | 0.87R | 105m | market | timeout | breakout | breakout | extendedBreakout | 97.1 | ↑122.36 | 2.3391 | 2.66 | **WIN** |
| 244 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 618 | 12928.56 | -12.36 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 245 | MU | 06-17 13:35 | 06-17 14:40 | 122.27 | 122.08 | 105 | 12838.35 | -19.95 | -0.16% | 0.17R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↓121.29 | 0.3381 | 1.18 | **LOSS** |
| 246 | CVX | 06-17 13:35 | 06-17 15:00 | 148.37 | 148.27 | 86 | 12759.82 | -8.6 | -0.07% | 0.1R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.21 | ↓147.77 | 0.4112 | 1.42 | **LOSS** |
| 247 | ORCL | 06-17 13:45 | 06-17 14:35 | 214.46 | 214 | 60 | 12867.6 | -27.6 | -0.21% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.6 | ↓213.02 | 0.5016 | 1.44 | **LOSS** |
| 248 | ARM | 06-17 13:45 | 06-17 14:40 | 145.39 | 146.49 | 87 | 12648.93 | +95.7 | +0.76% | 0.61R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 75.74 | ↓143.64 | 0.4938 | 1.52 | **WIN** |
| 249 | KLAC | 06-17 13:50 | 06-17 15:35 | 904.08 | 907.72 | 14 | 12657.12 | +50.96 | +0.4% | 0.57R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.69 | ↑896.95 | 2.6145 | 2.48 | **WIN** |
| 250 | DELL | 06-17 13:55 | 06-17 15:40 | 115.5 | 117.44 | 121 | 13975.5 | +234.74 | +1.68% | 2.15R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 251 | CRM | 06-17 14:20 | 06-17 14:40 | 270.12 | 266.99 | 51 | 13776.12 | -159.63 | -1.16% | 1.22R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 81.87 | ↓267.08 | 1.4065 | 2.29 | **LOSS** |
| 252 | MRVL | 06-17 17:05 | 06-17 17:50 | 70.32 | 70.57 | 185 | 13009.2 | +46.25 | +0.36% | 0.4R | 45m | market | trailing-stop | trend | breakout | falseBreakoutProne | 77.71 | ↓70.03 | -0.1539 | 2.74 | **WIN** |
| 253 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 254 | JPM | 06-18 13:35 | 06-18 15:20 | 273.13 | 274.76 | 51 | 13929.63 | +83.13 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.43 | ↓271.81 | 0.4584 | 1.47 | **WIN** |
| 255 | RIVN | 06-18 13:35 | 06-18 15:20 | 13.6 | 13.75 | 1030 | 14008 | +154.5 | +1.1% | 1.39R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.57 | ↑13.5 | 0.0001 | 1.78 | **WIN** |
| 256 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 257 | MRVL | 06-18 13:50 | 06-18 14:55 | 76.16 | 75.93 | 185 | 14089.6 | -42.55 | -0.3% | 0.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.17 | ↑75.19 | 1.3898 | 2.19 | **LOSS** |
| 258 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 663 | 14022.45 | +192.27 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 259 | CRM | 06-20 13:30 | 06-20 13:50 | 262.21 | 260.67 | 53 | 13897.13 | -81.62 | -0.59% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.75 | ↓261.57 | 0.2649 | 2.17 | **LOSS** |
| 260 | AAPL | 06-20 13:35 | 06-20 13:55 | 200.52 | 199.72 | 69 | 13835.88 | -55.2 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.2 | ↓199.57 | 0.7936 | 2.76 | **LOSS** |
| 261 | AMD | 06-20 13:35 | 06-20 14:15 | 131.72 | 130.62 | 98 | 12908.56 | -107.8 | -0.84% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.04 | ↓130.29 | 0.6851 | 2.57 | **LOSS** |
| 262 | NFLX | 06-20 13:35 | 06-20 13:55 | 1246.57 | 1237.5 | 11 | 13712.27 | -99.77 | -0.73% | 1.04R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.55 | ↓1239.91 | 0.2945 | 3.83 | **LOSS** |
| 263 | MDB | 06-20 13:35 | 06-20 13:55 | 211.21 | 207.96 | 60 | 12672.6 | -195 | -1.54% | 1.35R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 85.66 | ↓210.8 | 1.5576 | 1.88 | **LOSS** |
| 264 | WMT | 06-20 13:35 | 06-20 13:50 | 96.32 | 95.55 | 145 | 13966.4 | -111.65 | -0.8% | 1.14R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.9 | ↓95.99 | 0.1675 | 1.81 | **LOSS** |
| 265 | DELL | 06-20 13:40 | 06-20 14:20 | 118.44 | 117.74 | 118 | 13975.92 | -82.6 | -0.59% | 0.5R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.74 | ↓118.56 | 0.2368 | 1.28 | **LOSS** |
| 266 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 659 | 14069.65 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 267 | PYPL | 06-23 13:35 | 06-23 14:30 | 71.76 | 71.63 | 194 | 13921.44 | -25.22 | -0.18% | 0.2R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 93.4 | ↓71.52 | 0.244 | 1.6 | **LOSS** |
| 268 | CAT | 06-23 13:35 | 06-23 14:25 | 365.58 | 364.35 | 38 | 13892.04 | -46.74 | -0.34% | 0.49R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.36 | ↓363.99 | 0.6127 | 2.8 | **LOSS** |
| 269 | RIVN | 06-23 13:50 | 06-23 15:35 | 13.72 | 13.84 | 1023 | 14035.56 | +122.76 | +0.87% | 0.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.44 | ↑13.58 | -0.0091 | 1.76 | **WIN** |
| 270 | LRCX | 06-23 14:00 | 06-23 14:50 | 92.43 | 92.28 | 151 | 13956.93 | -22.65 | -0.16% | 0.17R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 271 | AMD | 06-24 13:30 | 06-24 15:15 | 134.65 | 136.58 | 95 | 12791.75 | +183.35 | +1.43% | 1.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.21 | ↑134.19 | 0.8528 | 7.2 | **WIN** |
| 272 | CRM | 06-24 13:35 | 06-24 15:20 | 267.55 | 270.62 | 52 | 13912.6 | +159.64 | +1.15% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 273 | ORCL | 06-24 13:35 | 06-24 15:20 | 211.58 | 214.33 | 66 | 13964.28 | +181.5 | +1.3% | 1.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 97.77 | ↑210.26 | 1.0072 | 1.16 | **WIN** |
| 274 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 648 | 14055.12 | +421.2 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 275 | TSM | 06-24 13:35 | 06-24 15:20 | 216.56 | 218.87 | 60 | 12993.6 | +138.6 | +1.07% | 1.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.51 | ↑215.78 | 0.9191 | 7.36 | **WIN** |
| 276 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 277 | NOW | 06-24 13:35 | 06-24 13:55 | 990.35 | 986.17 | 14 | 13864.9 | -58.52 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 278 | PYPL | 06-24 13:35 | 06-24 13:55 | 73.43 | 72.89 | 190 | 13951.7 | -102.6 | -0.74% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.24 | ↓73.13 | 0.3185 | 1.56 | **LOSS** |
| 279 | BAC | 06-24 13:35 | 06-24 13:55 | 47.13 | 46.95 | 296 | 13950.48 | -53.28 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.98 | ↓46.98 | 0.2285 | 1.12 | **LOSS** |
| 280 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 179 | 13052.68 | +341.89 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 281 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 282 | AVGO | 06-24 13:40 | 06-24 14:35 | 263.22 | 262.61 | 49 | 12897.78 | -29.89 | -0.23% | 0.16R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.46 | ↓263.33 | 2.0874 | 1.24 | **LOSS** |
| 283 | MU | 06-24 13:40 | 06-24 15:25 | 125.72 | 126.39 | 111 | 13954.92 | +74.37 | +0.53% | 0.42R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.94 | ↓125.52 | 0.6157 | 1.59 | **WIN** |
| 284 | AMAT | 06-24 13:40 | 06-24 15:25 | 177.14 | 178.29 | 73 | 12931.22 | +83.95 | +0.65% | 0.69R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.92 | ↑176.74 | 1.0258 | 1.39 | **WIN** |
| 285 | AMZN | 06-24 13:45 | 06-24 14:05 | 213.74 | 212.34 | 65 | 13893.1 | -91 | -0.66% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 286 | META | 06-24 13:45 | 06-24 14:05 | 711.89 | 704.17 | 19 | 13525.91 | -146.68 | -1.08% | 1.37R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 287 | QCOM | 06-24 13:45 | 06-24 14:05 | 155.8 | 155 | 89 | 13866.2 | -71.2 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 288 | SNOW | 06-24 13:45 | 06-24 14:05 | 222.04 | 220.18 | 58 | 12878.32 | -107.88 | -0.84% | 0.71R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.83 | ↓220.92 | 1.6512 | 2.36 | **LOSS** |
| 289 | UBER | 06-24 14:20 | 06-24 16:05 | 90.55 | 91.28 | 154 | 13944.7 | +112.42 | +0.81% | 0.44R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.99 | ↑89.24 | 1.5565 | 1.94 | **WIN** |
| 290 | CELH | 06-24 15:35 | 06-24 15:50 | 46.94 | 46.25 | 295 | 13847.3 | -203.55 | -1.47% | 1.35R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 79.46 | ↑45.67 | 0.7104 | 1.14 | **LOSS** |
| 291 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 292 | AVGO | 06-25 13:30 | 06-25 14:00 | 266.85 | 266.8 | 52 | 13876.2 | -2.6 | -0.02% | 0.03R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 95.37 | ↓266.09 | 0.7073 | 1.21 | **LOSS** |
| 293 | AMD | 06-25 13:35 | 06-25 13:55 | 141.71 | 140.88 | 99 | 14029.29 | -82.17 | -0.59% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.57 | ↓140.94 | 0.8304 | 3.54 | **LOSS** |
| 294 | CRWD | 06-25 13:35 | 06-25 14:45 | 495.01 | 493.79 | 28 | 13860.28 | -34.16 | -0.25% | 0.36R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.8 | ↓494.13 | 1.7125 | 2.89 | **LOSS** |
| 295 | SMCI | 06-25 13:50 | 06-25 14:20 | 45.35 | 45.73 | 310 | 14058.5 | +117.8 | +0.84% | 0.42R | 30m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 82.57 | ↑44.9 | 0.5873 | 2.52 | **WIN** |
| 296 | SMCI | 06-25 17:20 | 06-25 18:40 | 45.82 | 45.84 | 307 | 14066.74 | +6.14 | +0.04% | 0.04R | 80m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 83.21 | ↑45.54 | 0.0665 | 1.56 | **WIN** |
| 297 | PLTR | 06-26 13:30 | 06-26 14:05 | 145.33 | 144.8 | 96 | 13951.68 | -50.88 | -0.36% | 0.42R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 84.83 | ↓145.5 | 0.3745 | 5.23 | **LOSS** |
| 298 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 299 | JPM | 06-26 13:35 | 06-26 15:25 | 287.46 | 288.37 | 48 | 13798.08 | +43.68 | +0.32% | 0.46R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 89.74 | ↑286.59 | 0.5538 | 1.77 | **WIN** |
| 300 | GE | 06-26 13:45 | 06-26 15:30 | 253.76 | 254.02 | 55 | 13956.8 | +14.3 | +0.1% | 0.14R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.54 | ↓252.51 | 0.7105 | 1.44 | **WIN** |
| 301 | COIN | 06-26 16:20 | 06-26 18:05 | 370.72 | 379.27 | 37 | 13716.64 | +316.35 | +2.31% | 2.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 55.55 | ↑367.22 | -0.0756 | 2.81 | **WIN** |
| 302 | AMD | 06-27 13:35 | 06-27 13:50 | 147.58 | 145.3 | 95 | 14020.1 | -216.6 | -1.54% | 1.59R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓146.01 | 0.4222 | 2.69 | **LOSS** |
| 303 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 611 | 14120.21 | -30.55 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 304 | NKE | 06-27 15:50 | 06-27 16:35 | 73.45 | 72.88 | 190 | 13955.5 | -108.3 | -0.78% | 0.73R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑71.95 | 1.2742 | 1.21 | **LOSS** |
| 305 | CRM | 06-30 13:30 | 06-30 13:50 | 275.82 | 274.48 | 50 | 13791 | -67 | -0.49% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.59 | ↓275.49 | 0.3147 | 1.2 | **LOSS** |
| 306 | JPM | 06-30 13:30 | 06-30 15:10 | 290.6 | 290.47 | 48 | 13948.8 | -6.24 | -0.04% | 0.06R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.05 | ↓291.04 | 0.1761 | 1.84 | **LOSS** |
| 307 | AVGO | 06-30 13:35 | 06-30 14:25 | 274.07 | 273.42 | 51 | 13977.57 | -33.15 | -0.24% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.52 | ↓273.71 | 0.7768 | 1.16 | **LOSS** |
| 308 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.11 | 93.25 | 148 | 13928.28 | -127.28 | -0.91% | 1.28R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 309 | HPE | 06-30 14:00 | 06-30 15:45 | 20.75 | 20.89 | 674 | 13985.5 | +94.36 | +0.67% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.86 | ↑20.6 | 0.6063 | 1.37 | **WIN** |
| 310 | TGT | 07-01 13:35 | 07-01 14:40 | 100.2 | 102.92 | 139 | 13927.8 | +378.08 | +2.71% | 3.87R | 65m | market | profit-target | breakout | breakout | falseBreakoutProne | 80.07 | ↑99.62 | 0.2691 | 3.39 | **WIN** |
| 311 | UNH | 07-01 13:50 | 07-01 15:35 | 317.13 | 324.05 | 44 | 13953.72 | +304.48 | +2.18% | 2.48R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 312 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 182 | 14059.5 | +242.06 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 313 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.12 | 212.04 | 66 | 13933.92 | +60.72 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 314 | COIN | 07-02 13:45 | 07-02 14:05 | 343.25 | 341 | 40 | 13730 | -90 | -0.66% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.49 | ↓342.46 | 0.8493 | 1.99 | **LOSS** |
| 315 | SHOP | 07-02 14:35 | 07-02 15:15 | 116.6 | 115.81 | 120 | 13992 | -94.8 | -0.68% | 0.58R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 99.49 | ↑114.43 | 0.7294 | 3.24 | **LOSS** |
| 316 | ARM | 07-03 13:30 | 07-03 13:45 | 156.32 | 154.77 | 89 | 13912.48 | -137.95 | -0.99% | 1.41R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.31 | ↓156.26 | 0.1619 | 1.76 | **LOSS** |
| 317 | PANW | 07-03 13:30 | 07-03 15:15 | 199.25 | 202.12 | 70 | 13947.5 | +200.9 | +1.44% | 2.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.06 | ↑199.23 | 0.3117 | 1.81 | **WIN** |
| 318 | ELF | 07-03 13:30 | 07-03 13:50 | 131.64 | 130.7 | 98 | 12900.72 | -92.12 | -0.71% | 0.91R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.39 | ↓131.51 | 0.1655 | 1.85 | **LOSS** |
| 319 | MU | 07-03 13:35 | 07-03 14:40 | 123.14 | 123.05 | 114 | 14037.96 | -10.26 | -0.07% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.69 | ↓122.92 | 0.0328 | 1.24 | **LOSS** |
| 320 | ORCL | 07-03 13:40 | 07-03 14:25 | 234.01 | 232.2 | 60 | 14040.6 | -108.6 | -0.77% | 0.57R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.78 | ↓233.12 | 1.936 | 1.41 | **LOSS** |
| 321 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 631 | 14115.47 | -31.55 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 322 | ABNB | 07-03 13:40 | 07-03 14:30 | 137.32 | 137.18 | 101 | 13869.32 | -14.14 | -0.1% | 0.14R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 90.4 | ↓136.81 | 0.4503 | 1.11 | **LOSS** |
| 323 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 324 | RIVN | 07-03 13:45 | 07-03 14:20 | 13.27 | 13.17 | 1059 | 14052.93 | -105.9 | -0.75% | 0.56R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.03 | ↓13.12 | 0.0389 | 1.15 | **LOSS** |
| 325 | DDOG | 07-03 13:50 | 07-03 15:20 | 149.1 | 154.06 | 93 | 13866.3 | +461.28 | +3.33% | 1.67R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 91.86 | ↑148.07 | 3.5654 | 2.04 | **WIN** |
| 326 | NET | 07-03 13:55 | 07-03 15:40 | 189.51 | 191.33 | 73 | 13834.23 | +132.86 | +0.96% | 1.12R | 105m | market | timeout | breakout | breakout | extendedBreakout | 91.8 | ↑188.06 | 1.1341 | 1.36 | **WIN** |
| 327 | UBER | 07-07 13:40 | 07-07 15:25 | 95.11 | 96.88 | 147 | 13981.17 | +260.19 | +1.86% | 1.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 328 | COIN | 07-07 13:45 | 07-07 14:05 | 360.81 | 358.22 | 36 | 12989.16 | -93.24 | -0.72% | 0.61R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 329 | ORCL | 07-08 13:35 | 07-08 13:55 | 240.1 | 237.77 | 54 | 12965.4 | -125.82 | -0.97% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.32 | ↓238.93 | 0.6439 | 4.21 | **LOSS** |
| 330 | AMD | 07-08 13:40 | 07-08 15:25 | 136.53 | 137.45 | 102 | 13926.06 | +93.84 | +0.67% | 0.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.27 | ↓136.57 | 0.3518 | 1.3 | **WIN** |
| 331 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 618 | 14108.94 | +346.08 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 332 | SMCI | 07-08 13:45 | 07-08 15:30 | 48.17 | 48.47 | 292 | 14065.64 | +87.6 | +0.62% | 0.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.31 | ↑47.77 | 0.2213 | 1.96 | **WIN** |
| 333 | LLY | 07-08 13:45 | 07-08 15:30 | 784.33 | 787.74 | 17 | 13333.61 | +57.97 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↑779.99 | 2.7967 | 1.18 | **WIN** |
| 334 | MSFT | 07-09 13:30 | 07-09 14:45 | 502.19 | 502.49 | 27 | 13559.13 | +8.1 | +0.06% | 0.09R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 91.2 | ↓501.53 | 0.5456 | 7.73 | **WIN** |
| 335 | MU | 07-09 13:30 | 07-09 13:45 | 125.9 | 124.31 | 111 | 13974.9 | -176.49 | -1.26% | 1.8R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 65.72 | ↓125.5 | -0.015 | 2.04 | **LOSS** |
| 336 | COIN | 07-09 13:30 | 07-09 14:00 | 358.57 | 357.8 | 39 | 13984.23 | -30.03 | -0.21% | 0.3R | 30m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.46 | ↓357.65 | 0.5578 | 1.49 | **LOSS** |
| 337 | LLY | 07-09 13:30 | 07-09 13:50 | 792.72 | 788.24 | 16 | 12683.52 | -71.68 | -0.57% | 0.81R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 338 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 339 | META | 07-09 13:35 | 07-09 15:20 | 729.62 | 735.04 | 19 | 13862.78 | +102.98 | +0.74% | 1.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.51 | ↑727.39 | 1.0668 | 4.23 | **WIN** |
| 340 | SMCI | 07-09 13:35 | 07-09 13:55 | 49.42 | 48.95 | 285 | 14084.7 | -133.95 | -0.95% | 0.86R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.97 | ↓49 | 0.0334 | 1.15 | **LOSS** |
| 341 | TSM | 07-09 13:40 | 07-09 14:10 | 232.36 | 231.61 | 60 | 13941.6 | -45 | -0.32% | 0.46R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 342 | CAT | 07-09 13:40 | 07-09 14:00 | 402.5 | 401.11 | 34 | 13685 | -47.26 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.17 | ↓400.82 | 1.1439 | 1.54 | **LOSS** |
| 343 | GE | 07-09 13:40 | 07-09 14:00 | 250.5 | 247.69 | 55 | 13777.5 | -154.55 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 344 | BA | 07-09 13:40 | 07-09 14:00 | 226.95 | 224.09 | 56 | 12709.2 | -160.16 | -1.26% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.05 | ↓225.45 | 1.42 | 2.98 | **LOSS** |
| 345 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 346 | PLTR | 07-10 13:40 | 07-10 14:00 | 144.77 | 142.42 | 97 | 14042.69 | -227.95 | -1.62% | 1.72R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.03 | ↓144.34 | 0.7482 | 1.14 | **LOSS** |
| 347 | AMAT | 07-10 13:40 | 07-10 14:00 | 197.69 | 196.97 | 71 | 14035.99 | -51.12 | -0.36% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 348 | HPE | 07-10 15:40 | 07-10 17:25 | 21.46 | 21.54 | 652 | 13991.92 | +52.16 | +0.37% | 0.52R | 105m | market | timeout | breakout | breakout | extendedBreakout | 94.89 | ↑21.02 | 0.1184 | 3.71 | **WIN** |
| 349 | NVDA | 07-11 13:45 | 07-11 15:10 | 166.33 | 166.18 | 84 | 13971.72 | -12.6 | -0.09% | 0.12R | 85m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.23 | ↓165.18 | 0.3329 | 2.78 | **LOSS** |
| 350 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 351 | PYPL | 07-14 13:30 | 07-14 15:15 | 73.34 | 73.78 | 175 | 12834.5 | +77 | +0.6% | 0.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.46 | ↑72.77 | -0.6572 | 1.79 | **WIN** |
| 352 | COIN | 07-14 13:35 | 07-14 14:25 | 395.93 | 390.75 | 35 | 13857.55 | -181.3 | -1.31% | 0.91R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.71 | ↓394.17 | 0.495 | 2.31 | **LOSS** |
| 353 | BA | 07-14 13:35 | 07-14 13:55 | 230.81 | 228.84 | 60 | 13848.6 | -118.2 | -0.85% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 354 | CRM | 07-14 13:40 | 07-14 14:05 | 260.74 | 259.92 | 52 | 13558.48 | -42.64 | -0.31% | 0.44R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.48 | ↓259.88 | 0.0062 | 1.19 | **LOSS** |
| 355 | ABNB | 07-14 13:45 | 07-14 14:05 | 137.43 | 136.69 | 101 | 13880.43 | -74.74 | -0.54% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.53 | ↓136.57 | 0.0934 | 1.41 | **LOSS** |
| 356 | SHOP | 07-14 17:05 | 07-14 17:15 | 118.46 | 117.57 | 118 | 13978.28 | -105.02 | -0.75% | 1.07R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 91.6 | ↑115.06 | 0.7675 | 2.8 | **LOSS** |
| 357 | SMCI | 07-15 13:35 | 07-15 14:20 | 52.25 | 52.5 | 248 | 12958 | +62 | +0.48% | 0.26R | 45m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 80.5 | ↓52.06 | 0.3183 | 1.82 | **WIN** |
| 358 | DELL | 07-15 13:40 | 07-15 14:00 | 128.11 | 127.22 | 109 | 13963.99 | -97.01 | -0.69% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.56 | ↓127.6 | 0.323 | 1.26 | **LOSS** |
| 359 | MDB | 07-15 13:45 | 07-15 14:30 | 207.33 | 206.33 | 67 | 13891.11 | -67 | -0.48% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 360 | NET | 07-15 13:50 | 07-15 14:15 | 184.46 | 183.52 | 76 | 14018.96 | -71.44 | -0.51% | 0.5R | 25m | market | early-reversal | mixed | breakout | falseBreakoutProne | 67.27 | ↑183.3 | -0.1892 | 1.28 | **LOSS** |
| 361 | ABNB | 07-17 13:30 | 07-17 14:10 | 138.37 | 137.84 | 100 | 13837 | -53 | -0.38% | 0.54R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.22 | ↓138.4 | 0.1644 | 1.15 | **LOSS** |
| 362 | GE | 07-17 13:40 | 07-17 14:00 | 268.73 | 266.17 | 47 | 12630.31 | -120.32 | -0.95% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 57.75 | ↓265.04 | 0.0421 | 3.4 | **LOSS** |
| 363 | HPE | 07-17 13:40 | 07-17 14:00 | 21.13 | 20.9 | 611 | 12910.43 | -140.53 | -1.09% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.09 | ↓21.02 | 0.1245 | 1.98 | **LOSS** |
| 364 | TGT | 07-17 13:40 | 07-17 14:30 | 102.55 | 102.46 | 136 | 13946.8 | -12.24 | -0.09% | 0.13R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 365 | RIVN | 07-17 13:40 | 07-17 14:15 | 12.99 | 12.85 | 1080 | 14029.2 | -151.2 | -1.08% | 0.66R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.67 | ↓12.89 | 0.1511 | 3.55 | **LOSS** |
| 366 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.22 | 249.2 | 56 | 13956.32 | -1.12 | -0.01% | 0.01R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 367 | RIVN | 07-17 15:15 | 07-17 15:45 | 13.23 | 13.23 | 1059 | 14010.57 | +0 | +0% | 0R | 30m | market | trailing-stop | breakout | breakout | extendedBreakout | 72.22 | ↑12.95 | 0.1616 | 1.36 | **WIN** |
| 368 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 603 | 14146.38 | -180.9 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 369 | RIVN | 07-18 13:30 | 07-18 13:35 | 13.07 | 12.88 | 1072 | 14011.04 | -203.68 | -1.45% | 1.58R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 64.2 | ↓13.06 | -0.0184 | 1.48 | **LOSS** |
| 370 | DELL | 07-18 13:35 | 07-18 15:20 | 127.27 | 129.07 | 110 | 13999.7 | +198 | +1.41% | 1.78R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.92 | ↑126.77 | 0.4922 | 5.09 | **WIN** |
| 371 | ARM | 07-18 13:40 | 07-18 14:00 | 160.71 | 159.3 | 86 | 13821.06 | -121.26 | -0.88% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 372 | MRVL | 07-18 15:50 | 07-18 16:25 | 74.38 | 74.13 | 190 | 14132.2 | -47.5 | -0.34% | 0.43R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 86.69 | ↑72.94 | 0.4777 | 2.46 | **LOSS** |
| 373 | ELF | 07-18 16:45 | 07-18 18:30 | 115.91 | 117.46 | 120 | 13909.2 | +186 | +1.34% | 1.34R | 105m | market | timeout | breakout | breakout | extendedBreakout | 72.52 | ↑113.54 | 0.9668 | 1.48 | **WIN** |
| 374 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 74 | 13900.9 | +71.78 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 375 | CVX | 07-21 13:30 | 07-21 13:50 | 151.52 | 150.18 | 92 | 13939.84 | -123.28 | -0.88% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 376 | AAPL | 07-21 13:35 | 07-21 13:55 | 213.92 | 213.95 | 65 | 13904.8 | +1.95 | +0.01% | 0.01R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.77 | ↓213.09 | 0.3134 | 4.01 | **WIN** |
| 377 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.39 | 101.58 | 136 | 13925.04 | -110.16 | -0.79% | 1.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 378 | NKE | 07-21 13:35 | 07-21 15:20 | 73.95 | 74.52 | 189 | 13976.55 | +107.73 | +0.77% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.84 | ↑73.47 | 0.1352 | 2.5 | **WIN** |
| 379 | META | 07-21 13:40 | 07-21 14:30 | 714.3 | 713.79 | 19 | 13571.7 | -9.69 | -0.07% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.02 | ↓711.75 | 2.8441 | 2.04 | **LOSS** |
| 380 | UBER | 07-21 13:40 | 07-21 14:15 | 91.66 | 91.25 | 153 | 14023.98 | -62.73 | -0.45% | 0.58R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 381 | CRWD | 07-21 13:45 | 07-21 14:35 | 484.2 | 483.15 | 28 | 13557.6 | -29.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 382 | NET | 07-21 13:45 | 07-21 14:20 | 199.25 | 197.69 | 70 | 13947.5 | -109.2 | -0.78% | 0.73R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.31 | ↓197.5 | 0.5778 | 1.49 | **LOSS** |
| 383 | LLY | 07-22 13:35 | 07-22 15:20 | 771.67 | 774.27 | 18 | 13890.06 | +46.8 | +0.34% | 0.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.01 | ↑768.57 | 0.2771 | 2.44 | **WIN** |
| 384 | ADBE | 07-22 13:45 | 07-22 14:05 | 373.38 | 371.3 | 37 | 13815.06 | -76.96 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.44 | ↓372.51 | 1.2979 | 1.65 | **LOSS** |
| 385 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.12 | 95.01 | 147 | 13982.64 | -16.17 | -0.12% | 0.13R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 386 | NKE | 07-22 13:45 | 07-22 14:05 | 75.38 | 74.8 | 185 | 13945.3 | -107.3 | -0.77% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 387 | TGT | 07-22 13:45 | 07-22 14:35 | 104.89 | 104.77 | 133 | 13950.37 | -15.96 | -0.11% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.02 | ↑104.31 | 0.3853 | 1.66 | **LOSS** |
| 388 | IBM | 07-23 13:35 | 07-23 14:40 | 285.48 | 285.3 | 49 | 13988.52 | -8.82 | -0.06% | 0.09R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.28 | ↑284.91 | 0.3782 | 1.13 | **LOSS** |
| 389 | AMD | 07-23 13:40 | 07-23 14:30 | 157.4 | 156.33 | 89 | 14008.6 | -95.23 | -0.68% | 0.7R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.9 | ↓157.17 | 0.5518 | 1.35 | **LOSS** |
| 390 | CELH | 07-23 13:40 | 07-23 14:00 | 45.27 | 44.87 | 306 | 13852.62 | -122.4 | -0.88% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.21 | ↓45.33 | 0.3128 | 1.61 | **LOSS** |
| 391 | SMCI | 07-23 13:45 | 07-23 15:30 | 51.27 | 51.91 | 274 | 14047.98 | +175.36 | +1.25% | 1.02R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.68 | ↑51.06 | 0.2989 | 1.26 | **WIN** |
| 392 | NVO | 07-24 13:30 | 07-24 14:15 | 70.87 | 70.61 | 197 | 13961.39 | -51.22 | -0.37% | 0.53R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 393 | AMZN | 07-24 13:35 | 07-24 14:20 | 231.18 | 231.27 | 60 | 13870.8 | +5.4 | +0.04% | 0.06R | 45m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 84.41 | ↓230.43 | 0.3778 | 8.32 | **WIN** |
| 394 | AMD | 07-24 13:35 | 07-24 14:00 | 160.98 | 159.91 | 87 | 14005.26 | -93.09 | -0.66% | 0.9R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.57 | ↓159.74 | 0.3077 | 2.5 | **LOSS** |
| 395 | AVGO | 07-24 13:35 | 07-24 13:55 | 289.23 | 285.26 | 48 | 13883.04 | -190.56 | -1.37% | 1.22R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 396 | UBER | 07-24 13:35 | 07-24 15:20 | 92.35 | 92.12 | 151 | 13944.85 | -34.73 | -0.25% | 0.27R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 397 | PYPL | 07-24 13:35 | 07-24 15:15 | 78.09 | 78.13 | 178 | 13900.02 | +7.12 | +0.05% | 0.07R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 81.31 | ↓77.86 | 0.1157 | 2.06 | **WIN** |
| 398 | DELL | 07-24 13:35 | 07-24 13:55 | 128.8 | 128.36 | 109 | 14039.2 | -47.96 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.85 | ↓128.19 | 0.2022 | 2.29 | **LOSS** |
| 399 | MDB | 07-25 13:30 | 07-25 14:30 | 237.56 | 243.57 | 58 | 13778.48 | +348.58 | +2.53% | 3.61R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.71 | ↑237.19 | 0.7381 | 1.73 | **WIN** |
| 400 | UNH | 07-25 13:30 | 07-25 13:50 | 284.04 | 282.48 | 45 | 12781.8 | -70.2 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 401 | NKE | 07-25 13:30 | 07-25 13:45 | 76.37 | 75.64 | 183 | 13975.71 | -133.59 | -0.96% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.46 | ↓76.33 | -0.0076 | 3.21 | **LOSS** |
| 402 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.46 | 148.79 | 94 | 13955.24 | +31.02 | +0.22% | 0.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 403 | PLTR | 07-25 13:40 | 07-25 15:25 | 158.05 | 159.19 | 88 | 13908.4 | +100.32 | +0.72% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.65 | ↑157.79 | 0.5393 | 2.2 | **WIN** |
| 404 | NET | 07-25 13:45 | 07-25 15:30 | 195.77 | 198.97 | 71 | 13899.67 | +227.2 | +1.63% | 2.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.11 | ↑195 | 0.6994 | 1.17 | **WIN** |
| 405 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 671 | 14124.55 | -40.26 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 406 | ABNB | 07-28 13:35 | 07-28 14:00 | 142.91 | 142.3 | 93 | 13290.63 | -56.73 | -0.43% | 0.61R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.83 | ↓142.66 | 0.1324 | 1.13 | **LOSS** |
| 407 | ASML | 07-28 13:40 | 07-28 14:10 | 733.88 | 730.99 | 17 | 12475.96 | -49.13 | -0.39% | 0.48R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.76 | ↓732.79 | 4.3311 | 2.08 | **LOSS** |
| 408 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 186 | 14150.88 | -91.14 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 409 | CRM | 07-29 13:30 | 07-29 13:50 | 273.56 | 272.41 | 51 | 13951.56 | -58.65 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 93.05 | ↓272.97 | 0.3837 | 3.46 | **LOSS** |
| 410 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 183 | 14145.9 | +3.66 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 411 | DELL | 07-29 13:30 | 07-29 13:55 | 135.3 | 134.75 | 103 | 13935.9 | -56.65 | -0.41% | 0.59R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓135.29 | 0.3907 | 1.98 | **LOSS** |
| 412 | ORCL | 07-29 13:35 | 07-29 14:25 | 251.87 | 250.4 | 56 | 14104.72 | -82.32 | -0.58% | 0.83R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 413 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 180 | 14079.6 | -68.4 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 414 | SMCI | 07-30 13:30 | 07-30 14:05 | 59.92 | 61.59 | 216 | 12942.72 | +360.72 | +2.79% | 2.1R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 61.99 | ↑59.7 | -0.1878 | 1.62 | **WIN** |
| 415 | META | 07-31 13:30 | 07-31 14:20 | 780.47 | 775.59 | 17 | 13267.99 | -82.96 | -0.63% | 0.32R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.85 | ↓775.75 | 19.2052 | 7.15 | **LOSS** |
| 416 | NET | 07-31 13:40 | 07-31 15:25 | 205.7 | 208.05 | 68 | 13987.6 | +159.8 | +1.14% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.76 | ↑204.98 | 0.4714 | 1.39 | **WIN** |
| 417 | MA | 07-31 13:40 | 07-31 15:25 | 569.6 | 575.79 | 24 | 13670.4 | +148.56 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.42 | ↑566.65 | 0.7985 | 1.79 | **WIN** |
| 418 | SNOW | 07-31 13:45 | 07-31 15:30 | 224.39 | 226.7 | 61 | 13687.79 | +140.91 | +1.03% | 0.95R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.39 | ↑223.01 | 0.3172 | 1.1 | **WIN** |
| 419 | LLY | 08-01 13:50 | 08-01 14:10 | 763.93 | 758.66 | 16 | 12222.88 | -84.32 | -0.69% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.51 | ↓758.94 | 2.1923 | 1.24 | **LOSS** |
| 420 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.54 | 205.81 | 68 | 13976.72 | +18.36 | +0.13% | 0.15R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 421 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 422 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.74 | 533.46 | 26 | 13851.24 | +18.72 | +0.14% | 0.2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 423 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 424 | AVGO | 08-04 13:35 | 08-04 14:40 | 296.2 | 295.76 | 47 | 13921.4 | -20.68 | -0.15% | 0.15R | 65m | market | stagnation | breakout | breakout | falseBreakoutProne | 81.25 | ↑293.84 | 1.0727 | 1.63 | **LOSS** |
| 425 | ARM | 08-04 13:35 | 08-04 13:55 | 140.38 | 139.09 | 99 | 13897.62 | -127.71 | -0.92% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.44 | ↓139.79 | 0.3632 | 1.18 | **LOSS** |
| 426 | SMCI | 08-04 13:35 | 08-04 14:25 | 58.78 | 58.72 | 221 | 12990.38 | -13.26 | -0.1% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.99 | ↑58.32 | 0.3921 | 1.57 | **LOSS** |
| 427 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 428 | DIS | 08-04 13:35 | 08-04 14:05 | 119.3 | 118.79 | 117 | 13958.1 | -59.67 | -0.43% | 0.53R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.87 | ↓118.78 | 0.4471 | 1.32 | **LOSS** |
| 429 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.89 | 97.53 | 143 | 13998.27 | -51.48 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 430 | UBER | 08-04 13:40 | 08-04 14:00 | 88.24 | 87.92 | 158 | 13941.92 | -50.56 | -0.36% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 431 | RIVN | 08-04 13:40 | 08-04 14:00 | 12.74 | 12.65 | 1098 | 13988.52 | -98.82 | -0.71% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.48 | ↓12.62 | 0.0527 | 1.42 | **LOSS** |
| 432 | PLTR | 08-04 13:45 | 08-04 14:05 | 160.15 | 159 | 81 | 12972.15 | -93.15 | -0.72% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.52 | ↓159.48 | 0.8038 | 2.14 | **LOSS** |
| 433 | AMZN | 08-05 13:35 | 08-05 14:25 | 215.49 | 214.63 | 64 | 13791.36 | -55.04 | -0.4% | 0.53R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.14 | ↓214.64 | 0.2154 | 1.45 | **LOSS** |
| 434 | NET | 08-05 13:35 | 08-05 14:25 | 212.06 | 211.49 | 61 | 12935.66 | -34.77 | -0.27% | 0.3R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.74 | ↓209.85 | -0.0465 | 1.15 | **LOSS** |
| 435 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 698 | 14120.54 | -6.98 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 436 | UBER | 08-05 13:40 | 08-05 14:30 | 90.33 | 89.71 | 155 | 14001.15 | -96.1 | -0.69% | 0.88R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.6 | ↓89.75 | 0.3437 | 3.63 | **LOSS** |
| 437 | TXN | 08-05 13:40 | 08-05 14:20 | 185.51 | 184.78 | 75 | 13913.25 | -54.75 | -0.39% | 0.56R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 438 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 181 | 14085.42 | -103.17 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 439 | PYPL | 08-06 13:30 | 08-06 13:50 | 68.69 | 68.36 | 187 | 12845.03 | -61.71 | -0.48% | 0.69R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.76 | ↓68.59 | -0.013 | 4 | **LOSS** |
| 440 | NKE | 08-06 13:30 | 08-06 13:55 | 75.24 | 74.95 | 185 | 13919.4 | -53.65 | -0.39% | 0.56R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 75.2 | ↓74.92 | 0.0378 | 3.11 | **LOSS** |
| 441 | AAPL | 08-06 13:40 | 08-06 15:25 | 209.84 | 214.16 | 61 | 12800.24 | +263.52 | +2.06% | 2.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.59 | ↑208.26 | 0.8569 | 2.01 | **WIN** |
| 442 | AAPL | 08-07 13:35 | 08-07 14:25 | 219.05 | 218.23 | 64 | 14019.2 | -52.48 | -0.37% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 443 | COIN | 08-07 13:35 | 08-07 14:25 | 314.02 | 312.32 | 41 | 12874.82 | -69.7 | -0.54% | 0.39R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.29 | ↓313.58 | 2.1366 | 4.29 | **LOSS** |
| 444 | AMD | 08-07 13:40 | 08-07 15:25 | 168.94 | 173.84 | 82 | 13853.08 | +401.8 | +2.9% | 2.21R | 105m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.18 | ↑168.15 | 1.0964 | 1.74 | **WIN** |
| 445 | UBER | 08-07 13:40 | 08-07 13:55 | 91.04 | 89.48 | 153 | 13929.12 | -238.68 | -1.71% | 1.37R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.27 | ↓90.86 | 0.4629 | 1.86 | **LOSS** |
| 446 | SBUX | 08-07 13:40 | 08-07 14:00 | 90.91 | 90.27 | 153 | 13909.23 | -97.92 | -0.7% | 0.95R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.52 | ↓90.6 | 0.2161 | 1.39 | **LOSS** |
| 447 | KLAC | 08-07 13:55 | 08-07 14:20 | 912.55 | 907.9 | 15 | 13688.25 | -69.75 | -0.51% | 0.65R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.68 | ↓913 | 9.0318 | 2.7 | **LOSS** |
| 448 | ELF | 08-07 17:50 | 08-07 18:15 | 99.03 | 98.43 | 140 | 13864.2 | -84 | -0.61% | 0.43R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.49 | ↑96.61 | 0.4267 | 1.76 | **LOSS** |
| 449 | AMD | 08-08 13:35 | 08-08 14:10 | 174.9 | 173.32 | 80 | 13992 | -126.4 | -0.9% | 0.98R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.32 | ↓173.89 | 0.5268 | 2.99 | **LOSS** |
| 450 | PANW | 08-08 13:35 | 08-08 13:55 | 170 | 168.99 | 82 | 13940 | -82.82 | -0.59% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 451 | DDOG | 08-08 13:35 | 08-08 13:55 | 139.54 | 137.7 | 100 | 13954 | -184 | -1.32% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.07 | ↓138.67 | 1.3902 | 1.26 | **LOSS** |
| 452 | LLY | 08-08 13:35 | 08-08 13:55 | 654.36 | 648.32 | 21 | 13741.56 | -126.84 | -0.92% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.7 | ↓652.1 | 2.3997 | 1.72 | **LOSS** |
| 453 | NFLX | 08-08 14:20 | 08-08 14:50 | 1205.82 | 1198.98 | 11 | 13264.02 | -75.24 | -0.57% | 0.81R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 454 | MU | 08-08 14:30 | 08-08 15:20 | 115.17 | 118.35 | 122 | 14050.74 | +387.96 | +2.76% | 2.68R | 50m | market | profit-target | breakout | breakout | extendedBreakout | 87.57 | ↑113.77 | 0.7716 | 2.98 | **WIN** |
| 455 | MU | 08-08 15:25 | 08-08 15:45 | 119.16 | 118.42 | 118 | 14060.88 | -87.32 | -0.62% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.45 | ↑115.74 | 1.7368 | 2.27 | **LOSS** |
| 456 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 92 | 13918.68 | -73.6 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 457 | PANW | 08-11 13:30 | 08-11 15:15 | 169.03 | 170.28 | 82 | 13860.46 | +102.5 | +0.74% | 1.06R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.47 | ↑168.15 | -0.1141 | 1.22 | **WIN** |
| 458 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 675 | 14134.5 | -94.5 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 459 | CRWD | 08-11 13:35 | 08-11 13:45 | 429.67 | 425.23 | 32 | 13749.44 | -142.08 | -1.03% | 1.47R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 78.91 | ↓427.46 | 0.7366 | 1.46 | **LOSS** |
| 460 | SMCI | 08-11 13:40 | 08-11 14:30 | 45.82 | 45.56 | 308 | 14112.56 | -80.08 | -0.57% | 0.48R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 461 | LRCX | 08-11 13:40 | 08-11 14:00 | 103.9 | 103.16 | 134 | 13922.6 | -99.16 | -0.71% | 0.9R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.19 | ↓103.53 | 0.3151 | 2.26 | **LOSS** |
| 462 | QCOM | 08-11 13:45 | 08-11 14:05 | 150.85 | 149.87 | 92 | 13878.2 | -90.16 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 463 | ASML | 08-11 13:45 | 08-11 14:10 | 731.05 | 728.98 | 19 | 13889.95 | -39.33 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.3 | ↓729.69 | 2.0012 | 2.82 | **LOSS** |
| 464 | CELH | 08-11 13:50 | 08-11 15:35 | 53.12 | 53.69 | 260 | 13811.2 | +148.2 | +1.07% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.43 | ↑53.08 | 0.4977 | 1.13 | **WIN** |
| 465 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 466 | AAPL | 08-12 13:30 | 08-12 13:40 | 229.97 | 227.32 | 60 | 13798.2 | -159 | -1.15% | 1.64R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 467 | PANW | 08-12 13:30 | 08-12 13:55 | 172.54 | 171.24 | 81 | 13975.74 | -105.3 | -0.75% | 0.86R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.12 | ↓171.94 | 0.2889 | 2.46 | **LOSS** |
| 468 | GE | 08-12 13:30 | 08-12 13:50 | 278.17 | 277 | 50 | 13908.5 | -58.5 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.64 | ↓277.39 | 0.1867 | 2.28 | **LOSS** |
| 469 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 470 | META | 08-12 13:35 | 08-12 13:55 | 787.18 | 779.76 | 16 | 12594.88 | -118.72 | -0.94% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.84 | ↓783.63 | 1.5034 | 4.68 | **LOSS** |
| 471 | PYPL | 08-12 13:35 | 08-12 15:20 | 68.23 | 68.31 | 204 | 13918.92 | +16.32 | +0.12% | 0.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.91 | ↓67.97 | 0.1445 | 1.29 | **WIN** |
| 472 | BAC | 08-12 13:35 | 08-12 15:20 | 46.99 | 47.4 | 297 | 13956.03 | +121.77 | +0.87% | 1.24R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 473 | ORCL | 08-12 13:40 | 08-12 13:55 | 257.12 | 253.04 | 54 | 13884.48 | -220.32 | -1.59% | 2.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 74.72 | ↓255.28 | 0.2684 | 2.37 | **LOSS** |
| 474 | UNH | 08-12 13:55 | 08-12 15:10 | 260.27 | 260.41 | 49 | 12753.23 | +6.86 | +0.05% | 0.05R | 75m | market | breakeven-stop | breakout | breakout | extendedBreakout | 87.79 | ↑258.02 | 1.0408 | 4.08 | **WIN** |
| 475 | TXN | 08-12 14:05 | 08-12 15:50 | 190.68 | 192.73 | 73 | 13919.64 | +149.65 | +1.08% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.27 | ↑187.83 | 1.1671 | 1.41 | **WIN** |
| 476 | QCOM | 08-12 14:15 | 08-12 14:40 | 152.18 | 151.72 | 91 | 13848.38 | -41.86 | -0.3% | 0.39R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 83.67 | ↑150.77 | 0.7869 | 1.48 | **LOSS** |
| 477 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 478 | NVO | 08-13 13:30 | 08-13 15:15 | 50.45 | 51.05 | 277 | 13974.65 | +166.2 | +1.19% | 1.7R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 479 | HD | 08-13 13:40 | 08-13 15:25 | 402.15 | 404.58 | 34 | 13673.1 | +82.62 | +0.6% | 0.86R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.48 | ↑400.5 | 1.1159 | 1.52 | **WIN** |
| 480 | V | 08-13 13:40 | 08-13 14:30 | 342.35 | 341.73 | 40 | 13694 | -24.8 | -0.18% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.22 | ↓341.12 | 1.1232 | 2.59 | **LOSS** |
| 481 | KLAC | 08-13 13:40 | 08-13 14:00 | 947.82 | 945.17 | 14 | 13269.48 | -37.1 | -0.28% | 0.4R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.26 | ↓944.47 | 2.7277 | 2.09 | **LOSS** |
| 482 | PYPL | 08-13 13:45 | 08-13 15:30 | 69.19 | 69.63 | 201 | 13907.19 | +88.44 | +0.64% | 0.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.64 | ↑68.77 | 0.2369 | 1.27 | **WIN** |
| 483 | UNH | 08-13 13:55 | 08-13 14:25 | 270.9 | 268.16 | 51 | 13815.9 | -139.74 | -1.01% | 0.89R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 86.28 | ↓267.18 | 2.3683 | 1.56 | **LOSS** |
| 484 | AMD | 08-13 14:15 | 08-13 14:35 | 186.54 | 183.94 | 75 | 13990.5 | -195 | -1.39% | 0.7R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 89.19 | ↓184.32 | 3.1328 | 1.67 | **LOSS** |
| 485 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 486 | MDB | 08-15 13:30 | 08-15 14:25 | 208.16 | 214.14 | 62 | 12905.92 | +370.76 | +2.87% | 4.1R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.36 | ↑207.76 | 0.3631 | 1.25 | **WIN** |
| 487 | NVO | 08-15 13:30 | 08-15 15:15 | 51.65 | 51.93 | 271 | 13997.15 | +75.88 | +0.54% | 0.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 488 | CRM | 08-15 13:35 | 08-15 15:20 | 239.23 | 241.04 | 58 | 13875.34 | +104.98 | +0.76% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.24 | ↑237.54 | 0.34 | 2.03 | **WIN** |
| 489 | UNH | 08-15 13:35 | 08-15 13:45 | 300.14 | 298.95 | 46 | 13806.44 | -54.74 | -0.4% | 0.2R | 10m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.19 | ↓299.04 | 7.3176 | 6.17 | **LOSS** |
| 490 | UNH | 08-15 15:15 | 08-15 17:00 | 307.34 | 308.61 | 45 | 13830.3 | +57.15 | +0.41% | 0.31R | 105m | market | timeout | breakout | breakout | extendedBreakout | 74.28 | ↑301.46 | 4.9878 | 1.21 | **WIN** |
| 491 | NVO | 08-18 13:35 | 08-18 13:55 | 54.86 | 54.25 | 256 | 14044.16 | -156.16 | -1.11% | 0.77R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.82 | ↓54.61 | 0.5586 | 2.83 | **LOSS** |
| 492 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.73 | 92.87 | 152 | 13942.96 | +173.28 | +1.24% | 1.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 493 | MDB | 08-18 13:45 | 08-18 15:30 | 224.96 | 228.2 | 62 | 13947.52 | +200.88 | +1.44% | 1.21R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.75 | ↑222.91 | 1.3885 | 1.12 | **WIN** |
| 494 | NVO | 08-19 13:30 | 08-19 13:55 | 54.76 | 54.71 | 256 | 14018.56 | -12.8 | -0.09% | 0.11R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 495 | HD | 08-19 13:35 | 08-19 15:15 | 408.29 | 408.27 | 31 | 12656.99 | -0.62 | 0% | 0R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.97 | ↓406.13 | 1.451 | 1.16 | **LOSS** |
| 496 | ARM | 08-19 13:40 | 08-19 13:45 | 142.72 | 140.59 | 97 | 13843.84 | -206.61 | -1.49% | 2.13R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.59 | ↓142.02 | 0.2804 | 1.16 | **LOSS** |
| 497 | CAT | 08-19 13:40 | 08-19 15:25 | 417.64 | 419.47 | 33 | 13782.12 | +60.39 | +0.44% | 0.63R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.51 | ↑416.8 | 1.2247 | 1.46 | **WIN** |
| 498 | TGT | 08-19 13:40 | 08-19 14:00 | 107.01 | 106.65 | 131 | 14018.31 | -47.16 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.43 | ↑106.39 | 0.2896 | 1.14 | **LOSS** |
| 499 | LOW | 08-19 13:40 | 08-19 15:20 | 256.69 | 256.49 | 54 | 13861.26 | -10.8 | -0.08% | 0.11R | 100m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 500 | ADBE | 08-19 13:45 | 08-19 13:50 | 362.59 | 359.77 | 38 | 13778.42 | -107.16 | -0.78% | 1.11R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 82.7 | ↓360.86 | 0.8616 | 1.66 | **LOSS** |
| 501 | INTC | 08-19 13:50 | 08-19 14:15 | 26.07 | 25.92 | 503 | 13113.21 | -75.45 | -0.58% | 0.29R | 25m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 83.01 | ↓25.72 | 0.5297 | 2.38 | **LOSS** |
| 502 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 503 | COST | 08-20 13:35 | 08-20 14:00 | 991.87 | 989.98 | 14 | 13886.18 | -26.46 | -0.19% | 0.27R | 25m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.11 | ↓988.29 | 1.5736 | 1.66 | **LOSS** |
| 504 | DIS | 08-20 13:40 | 08-20 14:00 | 117.69 | 116.86 | 118 | 13887.42 | -97.94 | -0.71% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.15 | ↓117.14 | 0.2421 | 1.5 | **LOSS** |
| 505 | COIN | 08-20 15:20 | 08-20 15:50 | 303.42 | 301.1 | 46 | 13957.32 | -106.72 | -0.76% | 0.63R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.44 | ↑296.78 | -0.2263 | 1.14 | **LOSS** |
| 506 | HPE | 08-20 15:20 | 08-20 15:45 | 21.04 | 20.96 | 570 | 11992.8 | -45.6 | -0.38% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.01 | ↑20.8 | -0.1327 | 1.37 | **LOSS** |
| 507 | NVDA | 08-21 13:35 | 08-21 13:55 | 176.81 | 174.27 | 79 | 13967.99 | -200.66 | -1.44% | 1.8R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.72 | ↓175.91 | 0.5481 | 2.79 | **LOSS** |
| 508 | DELL | 08-21 13:35 | 08-21 13:55 | 130.05 | 128.69 | 107 | 13915.35 | -145.52 | -1.05% | 1.38R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 509 | LLY | 08-21 13:40 | 08-21 14:00 | 715.64 | 711.32 | 19 | 13597.16 | -82.08 | -0.6% | 0.86R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 510 | MA | 08-22 13:30 | 08-22 14:20 | 598.31 | 598.12 | 23 | 13761.13 | -4.37 | -0.03% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.88 | ↓597.64 | 0.9013 | 1.99 | **LOSS** |
| 511 | MU | 08-22 13:35 | 08-22 13:55 | 117.4 | 116.72 | 120 | 14088 | -81.6 | -0.58% | 0.71R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 512 | UBER | 08-22 13:35 | 08-22 13:55 | 95.51 | 95.56 | 146 | 13944.46 | +7.3 | +0.05% | 0.07R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 87.59 | ↑94.92 | 0.2746 | 2.38 | **WIN** |
| 513 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 514 | V | 08-22 13:35 | 08-22 15:20 | 348.28 | 349.78 | 40 | 13931.2 | +60 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.17 | ↑347.52 | 0.5668 | 1.32 | **WIN** |
| 515 | LMT | 08-22 13:40 | 08-22 14:05 | 452.09 | 449.1 | 30 | 13562.7 | -89.7 | -0.66% | 0.94R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 74.62 | ↓451.64 | 0.546 | 3.87 | **LOSS** |
| 516 | NVO | 08-22 13:40 | 08-22 14:00 | 57.45 | 57.12 | 226 | 12983.7 | -74.58 | -0.57% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.33 | ↓57.08 | 0.3126 | 1.63 | **LOSS** |
| 517 | QCOM | 08-22 13:45 | 08-22 15:30 | 156.3 | 158.62 | 89 | 13910.7 | +206.48 | +1.48% | 2.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.52 | ↑155.78 | 0.4832 | 1.59 | **WIN** |
| 518 | ADBE | 08-22 14:00 | 08-22 14:55 | 360.86 | 360.14 | 38 | 13712.68 | -27.36 | -0.2% | 0.29R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 91.79 | ↑357.14 | 1.4333 | 2 | **LOSS** |
| 519 | ASML | 08-22 14:00 | 08-22 15:55 | 752.4 | 753.53 | 18 | 13543.2 | +20.34 | +0.15% | 0.21R | 115m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓745.02 | 2.4897 | 1.11 | **WIN** |
| 520 | HD | 08-22 14:00 | 08-22 15:45 | 404.92 | 413.97 | 34 | 13767.28 | +307.7 | +2.24% | 3.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 521 | TXN | 08-22 14:00 | 08-22 15:45 | 206.66 | 207.64 | 67 | 13846.22 | +65.66 | +0.47% | 0.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 522 | AMZN | 08-22 14:05 | 08-22 15:50 | 224.39 | 226.91 | 62 | 13912.18 | +156.24 | +1.12% | 1.33R | 105m | market | timeout | breakout | breakout | extendedBreakout | 70.44 | ↑222.64 | 0.3249 | 2.51 | **WIN** |
| 523 | META | 08-22 14:05 | 08-22 14:25 | 751.08 | 746.57 | 18 | 13519.44 | -81.18 | -0.6% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.66 | ↑744.56 | 2.3554 | 2.33 | **LOSS** |
| 524 | AVGO | 08-22 14:05 | 08-22 15:45 | 297.85 | 297.28 | 46 | 13701.1 | -26.22 | -0.19% | 0.15R | 100m | market | breakeven-stop | breakout | breakout | extendedBreakout | 81.61 | ↑292.68 | 1.7299 | 1.14 | **LOSS** |
| 525 | MU | 08-22 14:05 | 08-22 14:55 | 120.04 | 119.97 | 117 | 14044.68 | -8.19 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 79.27 | ↑117.97 | 0.5634 | 1.89 | **LOSS** |
| 526 | TSM | 08-22 14:05 | 08-22 15:50 | 231.38 | 233.15 | 60 | 13882.8 | +106.2 | +0.76% | 0.95R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 527 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.09 | 141.99 | 92 | 12980.28 | +82.8 | +0.64% | 0.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 528 | PANW | 08-22 14:05 | 08-22 14:55 | 186.52 | 186 | 75 | 13989 | -39 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 86.27 | ↑185.01 | 0.8172 | 1.31 | **LOSS** |
| 529 | SNOW | 08-22 14:05 | 08-22 14:55 | 199.25 | 199.12 | 69 | 13748.25 | -8.97 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 530 | PYPL | 08-22 14:05 | 08-22 15:50 | 69.17 | 69.12 | 202 | 13972.34 | -10.1 | -0.07% | 0.07R | 105m | market | stagnation | breakout | breakout | extendedBreakout | 83.9 | ↑68.47 | 0.316 | 1.25 | **LOSS** |
| 531 | NKE | 08-22 14:05 | 08-22 15:50 | 78.22 | 78.85 | 178 | 13923.16 | +112.14 | +0.81% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 95.74 | ↑77.22 | 0.4594 | 1.2 | **WIN** |
| 532 | CRWD | 08-22 14:10 | 08-22 15:40 | 421.89 | 421.64 | 33 | 13922.37 | -8.25 | -0.06% | 0.09R | 90m | market | stagnation | breakout | breakout | extendedBreakout | 81.25 | ↑418.85 | 1.0936 | 2.39 | **LOSS** |
| 533 | AMAT | 08-22 14:10 | 08-22 15:00 | 164.38 | 164.27 | 85 | 13972.3 | -9.35 | -0.07% | 0.08R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 534 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 176 | 13055.68 | -29.92 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 535 | RIVN | 08-22 14:20 | 08-22 16:05 | 12.57 | 12.8 | 1111 | 13965.27 | +255.53 | +1.83% | 0.98R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.51 | ↑12.39 | 0.1257 | 1.24 | **WIN** |
| 536 | GOOGL | 08-22 17:25 | 08-22 18:50 | 207.2 | 207.03 | 67 | 13882.4 | -11.39 | -0.08% | 0.11R | 85m | market | stagnation | breakout | breakout | extendedBreakout | 84.29 | ↑204.18 | 0.5012 | 1.92 | **LOSS** |
| 537 | NFLX | 08-25 13:35 | 08-25 15:20 | 1217.38 | 1224.93 | 11 | 13391.18 | +83.05 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.12 | ↑1208.78 | 1.0376 | 1.21 | **WIN** |
| 538 | NVO | 08-25 13:35 | 08-25 14:30 | 57.77 | 57.78 | 242 | 13980.34 | +2.42 | +0.02% | 0.03R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.38 | ↓57.54 | 0.126 | 2.86 | **WIN** |
| 539 | NKE | 08-25 13:35 | 08-25 14:20 | 79.57 | 79.19 | 175 | 13924.75 | -66.5 | -0.48% | 0.69R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.7 | ↓79.26 | 0.0895 | 1.56 | **LOSS** |
| 540 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 541 | NOW | 08-27 13:35 | 08-27 15:05 | 881.35 | 880.53 | 15 | 13220.25 | -12.3 | -0.09% | 0.13R | 90m | market | stagnation | breakout | breakout | falseBreakoutProne | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 542 | NET | 08-27 13:40 | 08-27 15:25 | 201.39 | 204.97 | 69 | 13895.91 | +247.02 | +1.78% | 1.84R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 68.24 | ↑200.93 | 0.5224 | 1.95 | **WIN** |
| 543 | MDB | 08-27 13:45 | 08-27 14:35 | 283.52 | 282.55 | 49 | 13892.48 | -47.53 | -0.34% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 93.96 | ↑280.22 | 19.2424 | 1.88 | **LOSS** |
| 544 | ELF | 08-27 13:50 | 08-27 15:40 | 119.93 | 122.04 | 107 | 12832.51 | +225.77 | +1.76% | 1.63R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 96.62 | ↑118.28 | 1.1861 | 1.98 | **WIN** |
| 545 | ELF | 08-27 17:55 | 08-27 18:50 | 125.04 | 124.2 | 111 | 13879.44 | -93.24 | -0.67% | 0.96R | 55m | market | early-reversal | breakout | breakout | extendedBreakout | 74.49 | ↑121.58 | 1.186 | 2.43 | **LOSS** |
| 546 | AMD | 08-28 13:35 | 08-28 13:50 | 170.19 | 167.97 | 82 | 13955.58 | -182.04 | -1.3% | 1.4R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 547 | ORCL | 08-28 13:35 | 08-28 15:20 | 238.52 | 240.01 | 59 | 14072.68 | +87.91 | +0.62% | 0.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.35 | ↑237.49 | 0.2539 | 2.24 | **WIN** |
| 548 | MU | 08-28 13:35 | 08-28 13:55 | 121.02 | 118.84 | 116 | 14038.32 | -252.88 | -1.8% | 2.12R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.41 | ↓120.31 | 0.2623 | 2.27 | **LOSS** |
| 549 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 97 | 13928.23 | -94.09 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 550 | ELF | 08-28 13:45 | 08-28 15:30 | 128.02 | 130.74 | 108 | 13826.16 | +293.76 | +2.12% | 2.55R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.37 | ↑127.48 | 0.7557 | 3.86 | **WIN** |
| 551 | CELH | 08-29 13:45 | 08-29 15:10 | 62.38 | 62.34 | 204 | 12725.52 | -8.16 | -0.06% | 0.03R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 72.15 | ↓61.99 | 0.5071 | 1.98 | **LOSS** |
| 552 | HPE | 09-03 13:30 | 09-03 13:50 | 22.98 | 22.75 | 608 | 13971.84 | -139.84 | -1% | 1.43R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.72 | ↓22.97 | 0.0741 | 1.25 | **LOSS** |
| 553 | UBER | 09-03 13:35 | 09-03 13:55 | 93.92 | 93.01 | 148 | 13900.16 | -134.68 | -0.97% | 1.39R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.46 | ↓93.4 | 0.0909 | 1.57 | **LOSS** |
| 554 | ASML | 09-03 13:45 | 09-03 14:35 | 736.65 | 735.99 | 19 | 13996.35 | -12.54 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 89.6 | ↑732.83 | 2.2307 | 1.33 | **LOSS** |
| 555 | ELF | 09-03 13:50 | 09-03 14:15 | 130.48 | 129.15 | 99 | 12917.52 | -131.67 | -1.02% | 0.94R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 94.99 | ↓129.24 | 0.9861 | 1.12 | **LOSS** |
| 556 | RIVN | 09-03 14:05 | 09-03 15:50 | 14.53 | 14.88 | 964 | 14006.92 | +337.4 | +2.41% | 1.28R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 81.16 | ↑14.25 | 0.2065 | 1.19 | **WIN** |
| 557 | AVGO | 09-04 13:30 | 09-04 13:40 | 307.79 | 303.63 | 45 | 13850.55 | -187.2 | -1.35% | 1.8R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 95.99 | ↓307.09 | 1.0027 | 5.58 | **LOSS** |
| 558 | NFLX | 09-04 13:40 | 09-04 14:00 | 1245.03 | 1238.63 | 11 | 13695.33 | -70.4 | -0.51% | 0.73R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.16 | ↓1241.48 | 6.1692 | 2.12 | **LOSS** |
| 559 | LRCX | 09-04 14:20 | 09-04 16:05 | 99.39 | 100.15 | 140 | 13914.6 | +106.4 | +0.76% | 0.75R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.84 | ↑98.15 | 0.5023 | 1.35 | **WIN** |
| 560 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 561 | NET | 09-05 13:30 | 09-05 13:50 | 213.18 | 211.91 | 61 | 13003.98 | -77.47 | -0.6% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.97 | ↓213.08 | 0.2674 | 3.33 | **LOSS** |
| 562 | CRM | 09-05 13:35 | 09-05 14:55 | 247.34 | 247.15 | 56 | 13851.04 | -10.64 | -0.08% | 0.1R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.66 | ↓246.29 | 0.5948 | 1.57 | **LOSS** |
| 563 | ADBE | 09-05 13:35 | 09-05 14:10 | 353.01 | 349.79 | 39 | 13767.39 | -125.58 | -0.91% | 1.3R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.68 | ↓350.85 | 1.6664 | 4.86 | **LOSS** |
| 564 | DDOG | 09-05 13:35 | 09-05 14:20 | 134.43 | 133.59 | 103 | 13846.29 | -86.52 | -0.62% | 0.89R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.69 | ↓133.92 | 0.254 | 1.7 | **LOSS** |
| 565 | PYPL | 09-05 13:35 | 09-05 13:55 | 69.89 | 69.49 | 200 | 13978 | -80 | -0.57% | 0.7R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.23 | ↓69.37 | 0.215 | 1.68 | **LOSS** |
| 566 | KLAC | 09-05 13:35 | 09-05 14:15 | 886.49 | 882.17 | 15 | 13297.35 | -64.8 | -0.49% | 0.7R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 79.24 | ↓884.63 | 5.1704 | 2.26 | **LOSS** |
| 567 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 59 | 13862.64 | -50.15 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 568 | TSM | 09-05 13:40 | 09-05 14:05 | 241.79 | 240.7 | 53 | 12814.87 | -57.77 | -0.45% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.7 | ↓240.79 | 1.3629 | 2.93 | **LOSS** |
| 569 | CRWD | 09-05 13:40 | 09-05 13:55 | 417.46 | 412.62 | 33 | 13776.18 | -159.72 | -1.16% | 1.53R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 61.48 | ↓415.34 | 0.438 | 1.2 | **LOSS** |
| 570 | SNOW | 09-05 13:40 | 09-05 14:10 | 225.81 | 224.43 | 61 | 13774.41 | -84.18 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.3 | ↓224.98 | 0.5106 | 1.54 | **LOSS** |
| 571 | ELF | 09-05 13:40 | 09-05 14:20 | 137.82 | 136.92 | 94 | 12955.08 | -84.6 | -0.65% | 0.54R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.28 | ↓136.36 | 0.6852 | 1.26 | **LOSS** |
| 572 | RIVN | 09-05 13:40 | 09-05 14:15 | 14.19 | 14.09 | 920 | 13054.8 | -92 | -0.7% | 0.56R | 35m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.07 | ↓13.97 | 0.0939 | 2.1 | **LOSS** |
| 573 | ASML | 09-05 13:45 | 09-05 14:10 | 778.52 | 775.04 | 17 | 13234.84 | -59.16 | -0.45% | 0.54R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 92.34 | ↓775.83 | 5.0424 | 2.8 | **LOSS** |
| 574 | UNH | 09-05 13:45 | 09-05 14:10 | 314.49 | 313.08 | 44 | 13837.56 | -62.04 | -0.45% | 0.64R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.09 | ↓311.92 | 0.6952 | 2.55 | **LOSS** |
| 575 | RIVN | 09-05 14:30 | 09-05 14:50 | 14.45 | 14.22 | 888 | 12831.6 | -204.24 | -1.59% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.27 | ↓14.23 | 0.2023 | 1.25 | **LOSS** |
| 576 | NET | 09-08 13:35 | 09-08 14:20 | 219.21 | 217.45 | 64 | 14029.44 | -112.64 | -0.8% | 1.03R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.44 | ↓218.17 | 1.1201 | 1.88 | **LOSS** |
| 577 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 220 | 14119.6 | +176 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 578 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 579 | META | 09-08 13:40 | 09-08 14:05 | 765.32 | 761.06 | 18 | 13775.76 | -76.68 | -0.56% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.29 | ↓762.73 | 2.8627 | 1.11 | **LOSS** |
| 580 | ORCL | 09-08 13:40 | 09-08 14:15 | 238.99 | 237.32 | 59 | 14100.41 | -98.53 | -0.7% | 0.43R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.79 | ↓237.83 | 1.4607 | 1.42 | **LOSS** |
| 581 | PLTR | 09-08 13:40 | 09-08 15:00 | 156.75 | 156.52 | 89 | 13950.75 | -20.47 | -0.15% | 0.11R | 80m | market | stagnation | breakout | breakout | falseBreakoutProne | 65.82 | ↓156.45 | 0.5453 | 1.47 | **LOSS** |
| 582 | COIN | 09-09 13:30 | 09-09 15:15 | 307.88 | 309.9 | 42 | 12930.96 | +84.84 | +0.66% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 65.52 | ↓306.45 | -0.06 | 1.23 | **WIN** |
| 583 | SMCI | 09-09 13:30 | 09-09 13:50 | 40.53 | 40.36 | 348 | 14104.44 | -59.16 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.24 | ↓40.44 | -0.0005 | 2.38 | **LOSS** |
| 584 | AMD | 09-09 13:35 | 09-09 13:50 | 154.08 | 152.45 | 90 | 13867.2 | -146.7 | -1.06% | 1.47R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 84.54 | ↓153.27 | 0.4219 | 3.06 | **LOSS** |
| 585 | GS | 09-09 14:40 | 09-09 16:00 | 756.32 | 755.8 | 18 | 13613.76 | -9.36 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 80.5 | ↑749.54 | 3.765 | 2.24 | **LOSS** |
| 586 | SMCI | 09-09 15:25 | 09-09 17:10 | 41.59 | 42.27 | 339 | 14099.01 | +230.52 | +1.64% | 1.37R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81.84 | ↑40.65 | 0.2968 | 1.84 | **WIN** |
| 587 | MU | 09-10 13:30 | 09-10 14:50 | 140.29 | 140.32 | 92 | 12906.68 | +2.76 | +0.02% | 0.01R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 90.78 | ↓140.24 | 0.633 | 6.2 | **WIN** |
| 588 | TSM | 09-10 13:30 | 09-10 15:15 | 259.48 | 263.76 | 49 | 12714.52 | +209.72 | +1.65% | 1.83R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.53 | ↑259.18 | 0.4067 | 4.21 | **WIN** |
| 589 | MRVL | 09-10 13:30 | 09-10 13:50 | 68.09 | 67.29 | 207 | 14094.63 | -165.6 | -1.17% | 1.41R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.39 | ↓68.12 | 0.1225 | 2.27 | **LOSS** |
| 590 | SMCI | 09-10 13:35 | 09-10 14:30 | 44.21 | 44.73 | 297 | 13130.37 | +154.44 | +1.18% | 1.04R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 92.58 | ↓43.94 | 0.3146 | 2.03 | **WIN** |
| 591 | PANW | 09-10 13:35 | 09-10 14:05 | 201.7 | 200.93 | 69 | 13917.3 | -53.13 | -0.38% | 0.54R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.2 | ↓200.8 | 0.6846 | 2.24 | **LOSS** |
| 592 | DELL | 09-10 13:35 | 09-10 13:55 | 125.38 | 124.73 | 103 | 12914.14 | -66.95 | -0.52% | 0.5R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↓124.5 | 0.6563 | 1.36 | **LOSS** |
| 593 | MDB | 09-10 13:40 | 09-10 14:05 | 341.74 | 339.74 | 38 | 12986.12 | -76 | -0.59% | 0.6R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.2 | ↓339.78 | 2.2171 | 1.2 | **LOSS** |
| 594 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 569 | 14088.44 | -96.73 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 595 | NOW | 09-10 13:45 | 09-10 14:05 | 944.28 | 937.88 | 14 | 13219.92 | -89.6 | -0.68% | 0.97R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.39 | ↓938.4 | 1.3648 | 1.13 | **LOSS** |
| 596 | ARM | 09-10 13:55 | 09-10 15:40 | 149.21 | 151.3 | 93 | 13876.53 | +194.37 | +1.4% | 0.82R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.83 | ↑147.98 | 1.9869 | 2.59 | **WIN** |
| 597 | RIVN | 09-10 17:10 | 09-10 18:50 | 14.01 | 14.02 | 1000 | 14010 | +10 | +0.07% | 0.09R | 100m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 71.08 | ↑13.86 | 0.0255 | 1.79 | **WIN** |
| 598 | AMAT | 09-11 13:35 | 09-11 15:20 | 168.27 | 169.91 | 77 | 12956.79 | +126.28 | +0.97% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.28 | ↑167.16 | 0.6438 | 2.11 | **WIN** |
| 599 | RIVN | 09-11 13:35 | 09-11 14:00 | 14.47 | 14.29 | 892 | 12907.24 | -160.56 | -1.24% | 0.78R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.77 | ↓14.34 | 0.0133 | 1.75 | **LOSS** |
| 600 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 601 | INTU | 09-11 13:45 | 09-11 14:05 | 665.74 | 660.83 | 21 | 13980.54 | -103.11 | -0.74% | 0.99R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.05 | ↓663.92 | 1.8587 | 1.14 | **LOSS** |
| 602 | SMCI | 09-11 13:55 | 09-11 14:15 | 44.29 | 43.71 | 320 | 14172.8 | -185.6 | -1.31% | 0.91R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.82 | ↓43.98 | 0.0436 | 1.16 | **LOSS** |
| 603 | CAT | 09-11 14:00 | 09-11 14:20 | 435.28 | 432.88 | 32 | 13928.96 | -76.8 | -0.55% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.28 | ↓433.3 | 1.7475 | 5.99 | **LOSS** |
| 604 | MSFT | 09-12 13:40 | 09-12 15:25 | 506.95 | 510.56 | 27 | 13687.65 | +97.47 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.7 | ↑505.56 | 1.1579 | 1.6 | **WIN** |
| 605 | ADBE | 09-15 13:30 | 09-15 13:50 | 353.71 | 351.82 | 39 | 13794.69 | -73.71 | -0.53% | 0.69R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 62.56 | ↓353.28 | 0.554 | 2.33 | **LOSS** |
| 606 | SNOW | 09-15 13:30 | 09-15 15:15 | 224.15 | 226.66 | 62 | 13897.3 | +155.62 | +1.12% | 1.49R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.23 | ↑223.8 | 0.0256 | 1.74 | **WIN** |
| 607 | NVO | 09-15 13:30 | 09-15 13:50 | 56.71 | 56.04 | 229 | 12986.59 | -153.43 | -1.18% | 1.26R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.79 | ↓56.72 | 0.2786 | 1.15 | **LOSS** |
| 608 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 609 | PYPL | 09-15 13:40 | 09-15 14:00 | 67.81 | 67.5 | 205 | 13901.05 | -63.55 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.9 | ↓67.57 | 0.1129 | 1.18 | **LOSS** |
| 610 | ASML | 09-15 13:45 | 09-15 15:30 | 842.18 | 858.92 | 15 | 12632.7 | +251.1 | +1.99% | 2.37R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.04 | ↑840.18 | 7.076 | 2.75 | **WIN** |
| 611 | UBER | 09-15 13:50 | 09-15 14:15 | 98.27 | 97.73 | 141 | 13856.07 | -76.14 | -0.55% | 0.49R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.22 | ↑96.75 | 0.4259 | 1.24 | **LOSS** |
| 612 | MDB | 09-15 13:55 | 09-15 14:15 | 341.9 | 335.35 | 41 | 14017.9 | -268.55 | -1.92% | 1.68R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.93 | ↓339.12 | 2.3834 | 1.2 | **LOSS** |
| 613 | CRWD | 09-15 14:00 | 09-15 14:20 | 448.91 | 443.78 | 31 | 13916.21 | -159.03 | -1.14% | 1.48R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.35 | ↓443.63 | 2.1537 | 1.34 | **LOSS** |
| 614 | QCOM | 09-16 13:30 | 09-16 15:15 | 163.06 | 164.65 | 85 | 13860.1 | +135.15 | +0.98% | 1.4R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.94 | ↑162.52 | 0.2241 | 2.43 | **WIN** |
| 615 | GE | 09-16 13:35 | 09-16 13:55 | 290.97 | 289.66 | 47 | 13675.59 | -61.57 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.6 | ↓290.04 | 0.7858 | 1.52 | **LOSS** |
| 616 | AMAT | 09-16 13:35 | 09-16 13:50 | 173.83 | 172.28 | 80 | 13906.4 | -124 | -0.89% | 1.27R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 85.64 | ↓173.47 | 0.4738 | 1.22 | **LOSS** |
| 617 | KLAC | 09-16 13:35 | 09-16 13:45 | 1001.63 | 993.43 | 13 | 13021.19 | -106.6 | -0.82% | 1.17R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.75 | ↓999.43 | 4.8186 | 3.58 | **LOSS** |
| 618 | AAPL | 09-16 13:50 | 09-16 14:40 | 239.89 | 239.22 | 58 | 13913.62 | -38.86 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 92.06 | ↓238.23 | 0.7303 | 1.96 | **LOSS** |
| 619 | RIVN | 09-16 13:50 | 09-16 14:10 | 14.12 | 13.85 | 991 | 13992.92 | -267.57 | -1.91% | 1.22R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75 | ↓13.95 | 0.1083 | 1.24 | **LOSS** |
| 620 | ABNB | 09-17 13:35 | 09-17 14:30 | 124.06 | 123.99 | 112 | 13894.72 | -7.84 | -0.06% | 0.07R | 55m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.38 | ↑123.06 | 0.5967 | 1.41 | **LOSS** |
| 621 | INTU | 09-17 13:40 | 09-17 14:30 | 661.41 | 660.92 | 21 | 13889.61 | -10.29 | -0.07% | 0.09R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 83.63 | ↑659.44 | 2.8021 | 1.81 | **LOSS** |
| 622 | HPE | 09-17 13:45 | 09-17 14:05 | 24.89 | 24.79 | 561 | 13963.29 | -56.1 | -0.4% | 0.44R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 75.8 | ↑24.76 | 0.066 | 2.25 | **LOSS** |
| 623 | LRCX | 09-17 13:50 | 09-17 14:40 | 122.19 | 121.39 | 114 | 13929.66 | -91.2 | -0.65% | 0.65R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 71.66 | ↓120.95 | 0.346 | 2.64 | **LOSS** |
| 624 | AMAT | 09-17 14:00 | 09-17 15:00 | 177.89 | 177.54 | 78 | 13875.42 | -27.3 | -0.2% | 0.24R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 92.63 | ↑176.09 | 0.9433 | 1.71 | **LOSS** |
| 625 | ELF | 09-17 17:10 | 09-17 17:35 | 147.94 | 147.4 | 94 | 13906.36 | -50.76 | -0.37% | 0.5R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 71.05 | ↑147.33 | -0.137 | 2.48 | **LOSS** |
| 626 | META | 09-18 13:40 | 09-18 15:05 | 785.85 | 784.72 | 17 | 13359.45 | -19.21 | -0.14% | 0.14R | 85m | market | stagnation | breakout | breakout | falseBreakoutProne | 75.76 | ↑779.68 | 2.5571 | 1.43 | **LOSS** |
| 627 | QCOM | 09-18 13:40 | 09-18 14:50 | 167.33 | 167.18 | 83 | 13888.39 | -12.45 | -0.09% | 0.09R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.33 | ↓167.03 | 0.413 | 3.99 | **LOSS** |
| 628 | PLTR | 09-18 13:45 | 09-18 15:30 | 173.32 | 174.17 | 80 | 13865.6 | +68 | +0.49% | 0.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.36 | ↓172.96 | 2.2484 | 1.24 | **WIN** |
| 629 | INTU | 09-18 15:35 | 09-18 15:45 | 691.5 | 684.97 | 20 | 13830 | -130.6 | -0.94% | 1.16R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 88.66 | ↑678.24 | 6.0432 | 1.71 | **LOSS** |
| 630 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 631 | SBUX | 09-19 14:15 | 09-19 14:35 | 84.83 | 84.42 | 164 | 13912.12 | -67.24 | -0.48% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.11 | ↑84.01 | 0.2952 | 1.16 | **LOSS** |
| 632 | ORCL | 09-22 13:30 | 09-22 13:55 | 309.88 | 307.61 | 45 | 13944.6 | -102.15 | -0.73% | 0.47R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 59.78 | ↓309.27 | 0.8707 | 2.2 | **LOSS** |
| 633 | ASML | 09-22 13:40 | 09-22 14:15 | 958.72 | 954.65 | 13 | 12463.36 | -52.91 | -0.42% | 0.47R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.19 | ↓959.19 | 4.1997 | 1.66 | **LOSS** |
| 634 | SMCI | 09-22 13:45 | 09-22 14:15 | 46.58 | 46.28 | 304 | 14160.32 | -91.2 | -0.64% | 0.48R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.23 | ↑45.87 | -0.0026 | 1.85 | **LOSS** |
| 635 | SMCI | 09-22 16:05 | 09-22 16:35 | 46.7 | 47.91 | 302 | 14103.4 | +365.42 | +2.59% | 3.01R | 30m | market | profit-target | breakout | breakout | falseBreakoutProne | 71.28 | ↑46.19 | 0.075 | 3.14 | **WIN** |
| 636 | NVDA | 09-22 16:10 | 09-22 17:55 | 180.42 | 183.03 | 77 | 13892.34 | +200.97 | +1.45% | 1.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 85.4 | ↑176.54 | 0.6529 | 4.89 | **WIN** |
| 637 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 477 | 14076.27 | +100.17 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 638 | BA | 09-23 13:40 | 09-23 15:25 | 215.85 | 216.21 | 65 | 14030.25 | +23.4 | +0.17% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.63 | ↓215.93 | 0.6238 | 2 | **WIN** |
| 639 | ASML | 09-23 13:45 | 09-23 14:35 | 975.1 | 973.12 | 14 | 13651.4 | -27.72 | -0.2% | 0.29R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 80.37 | ↑968.79 | 2.0287 | 1.8 | **LOSS** |
| 640 | CRM | 09-24 13:35 | 09-24 14:00 | 247.79 | 246.53 | 56 | 13876.24 | -70.56 | -0.51% | 0.73R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | 78.19 | ↓246.89 | 0.0882 | 1.74 | **LOSS** |
| 641 | UNH | 09-24 13:35 | 09-24 13:45 | 354.17 | 350.36 | 39 | 13812.63 | -148.59 | -1.08% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.22 | ↓353.21 | 0.683 | 3.05 | **LOSS** |
| 642 | MRVL | 09-24 13:50 | 09-24 14:10 | 78.15 | 77.2 | 180 | 14067 | -171 | -1.22% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.89 | ↓77.53 | 0.8047 | 1.69 | **LOSS** |
| 643 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 644 | IBM | 09-26 13:30 | 09-26 14:30 | 284.88 | 284.67 | 49 | 13959.12 | -10.29 | -0.07% | 0.09R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.68 | ↓283.72 | 0.4052 | 2.83 | **LOSS** |
| 645 | MSFT | 09-26 13:35 | 09-26 14:00 | 513.23 | 511.78 | 27 | 13857.21 | -39.15 | -0.28% | 0.4R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.26 | ↓511.54 | 0.6153 | 2.31 | **LOSS** |
| 646 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 647 | JPM | 09-26 13:40 | 09-26 14:00 | 316.92 | 315.53 | 44 | 13944.48 | -61.16 | -0.44% | 0.63R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.81 | ↓316.22 | 0.6192 | 1.47 | **LOSS** |
| 648 | BAC | 09-26 13:40 | 09-26 14:10 | 52.46 | 52.3 | 266 | 13954.36 | -42.56 | -0.3% | 0.43R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.8 | ↓52.32 | 0.1059 | 2.41 | **LOSS** |
| 649 | BA | 09-26 13:40 | 09-26 14:55 | 220.43 | 220.15 | 63 | 13887.09 | -17.64 | -0.13% | 0.11R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.14 | ↓220.69 | 1.3581 | 2.08 | **LOSS** |
| 650 | RIVN | 09-26 13:40 | 09-26 14:05 | 16.02 | 15.87 | 809 | 12960.18 | -121.35 | -0.94% | 0.66R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 58.89 | ↓15.92 | 0.0725 | 1.13 | **LOSS** |
| 651 | SNOW | 09-26 13:45 | 09-26 14:05 | 225.28 | 223.6 | 61 | 13742.08 | -102.48 | -0.75% | 1.07R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.75 | ↓223.6 | 0.4509 | 1.85 | **LOSS** |
| 652 | AMD | 09-29 13:30 | 09-29 15:15 | 161.16 | 163.37 | 86 | 13859.76 | +190.06 | +1.37% | 1.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.28 | ↑160.72 | 0.2469 | 1.2 | **WIN** |
| 653 | AVGO | 09-29 13:35 | 09-29 13:55 | 340.42 | 337.35 | 40 | 13616.8 | -122.8 | -0.9% | 1.29R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.56 | ↓338.91 | 0.6918 | 2.06 | **LOSS** |
| 654 | TSM | 09-29 13:35 | 09-29 14:00 | 278.33 | 277.14 | 50 | 13916.5 | -59.5 | -0.43% | 0.61R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.55 | ↓277.3 | 0.6404 | 1.24 | **LOSS** |
| 655 | ARM | 09-29 13:40 | 09-29 14:00 | 142.07 | 141.14 | 97 | 13780.79 | -90.21 | -0.65% | 0.77R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.24 | ↓141.55 | 0.3643 | 1.26 | **LOSS** |
| 656 | COIN | 09-29 13:40 | 09-29 14:15 | 319 | 328.32 | 43 | 13717 | +400.76 | +2.92% | 3.21R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 75.77 | ↑318.11 | 1.0036 | 1.41 | **WIN** |
| 657 | SMCI | 09-29 13:40 | 09-29 14:00 | 46.58 | 46.3 | 304 | 14160.32 | -85.12 | -0.6% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.48 | ↓46.4 | 0.1923 | 2.12 | **LOSS** |
| 658 | PYPL | 09-29 13:40 | 09-29 14:55 | 68.49 | 70.85 | 203 | 13903.47 | +479.08 | +3.45% | 4.93R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 85.2 | ↑68.24 | 0.1549 | 1.45 | **WIN** |
| 659 | SBUX | 09-29 13:40 | 09-29 15:25 | 84.35 | 85.29 | 165 | 13917.75 | +155.1 | +1.11% | 1.59R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.41 | ↑84 | 0.1632 | 1.88 | **WIN** |
| 660 | MU | 09-29 13:45 | 09-29 14:35 | 164.67 | 164.49 | 78 | 12844.26 | -14.04 | -0.11% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 86.38 | ↑163.09 | 1.405 | 2.34 | **LOSS** |
| 661 | KLAC | 09-29 13:45 | 09-29 14:05 | 1085.65 | 1080.26 | 12 | 13027.8 | -64.68 | -0.5% | 0.71R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.22 | ↓1082.31 | 5.8509 | 2.48 | **LOSS** |
| 662 | SHOP | 09-29 17:55 | 09-29 18:50 | 148.22 | 148.12 | 94 | 13932.68 | -9.4 | -0.07% | 0.04R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 77.06 | ↑144.78 | 1.7367 | 1.47 | **LOSS** |
| 663 | ELF | 09-30 13:45 | 09-30 14:00 | 134.53 | 134.74 | 103 | 13856.59 | +21.63 | +0.16% | 0.17R | 15m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 73.16 | ↓133.99 | 0.5789 | 1.1 | **WIN** |
| 664 | SMCI | 09-30 13:55 | 09-30 14:15 | 48.01 | 47.62 | 295 | 14162.95 | -115.05 | -0.81% | 0.53R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.02 | ↑47.37 | 0.3296 | 1.14 | **LOSS** |
| 665 | NOW | 10-01 13:30 | 10-01 13:50 | 930.48 | 926.32 | 15 | 13957.2 | -62.4 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88 | ↓928.19 | 3.2696 | 1.1 | **LOSS** |
| 666 | AAPL | 10-01 13:35 | 10-01 13:45 | 258.07 | 255.43 | 54 | 13935.78 | -142.56 | -1.02% | 1.46R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 82.16 | ↓256.81 | 0.6605 | 2.53 | **LOSS** |
| 667 | TSM | 10-01 13:35 | 10-01 15:20 | 282.05 | 285.2 | 49 | 13820.45 | +154.35 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.02 | ↑280.93 | 0.9152 | 2.11 | **WIN** |
| 668 | COIN | 10-01 13:35 | 10-01 15:20 | 344.6 | 345.72 | 40 | 13784 | +44.8 | +0.33% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.91 | ↓343.66 | 2.4689 | 2.26 | **WIN** |
| 669 | LLY | 10-01 13:35 | 10-01 15:05 | 784.09 | 806.34 | 17 | 13329.53 | +378.25 | +2.84% | 3.16R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 82.1 | ↑778.42 | 5.1507 | 1.73 | **WIN** |
| 670 | DDOG | 10-01 13:40 | 10-01 15:25 | 147.5 | 150.13 | 87 | 12832.5 | +228.81 | +1.78% | 1.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.06 | ↑146.63 | 1.401 | 1.42 | **WIN** |
| 671 | SNOW | 10-01 13:40 | 10-01 14:20 | 228.53 | 227.26 | 60 | 13711.8 | -76.2 | -0.56% | 0.64R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.88 | ↓227.33 | 0.6648 | 1.58 | **LOSS** |
| 672 | DELL | 10-01 13:40 | 10-01 14:00 | 147.21 | 145.29 | 87 | 12807.27 | -167.04 | -1.3% | 1R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 96.21 | ↓145.4 | 1.6678 | 3.56 | **LOSS** |
| 673 | MDB | 10-01 13:45 | 10-01 14:05 | 320.21 | 318.57 | 43 | 13769.03 | -70.52 | -0.51% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.66 | ↓317.96 | 2.0827 | 1.78 | **LOSS** |
| 674 | TSLA | 10-01 14:20 | 10-01 15:20 | 455.01 | 453.68 | 30 | 13650.3 | -39.9 | -0.29% | 0.2R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 75.29 | ↑447.98 | 2.5993 | 1.16 | **LOSS** |
| 675 | AMAT | 10-01 14:20 | 10-01 15:15 | 210.21 | 210.17 | 66 | 13873.86 | -2.64 | -0.02% | 0.02R | 55m | market | breakeven-stop | breakout | breakout | extendedBreakout | 75.73 | ↑207.04 | 1.2274 | 1.88 | **LOSS** |
| 676 | LRCX | 10-01 14:35 | 10-01 14:55 | 136.77 | 136.01 | 102 | 13950.54 | -77.52 | -0.56% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 73.37 | ↑134.38 | 0.7952 | 1.31 | **LOSS** |
| 677 | NVO | 10-01 15:05 | 10-01 16:50 | 58.22 | 58.75 | 240 | 13972.8 | +127.2 | +0.91% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 90.73 | ↑57.27 | 0.6747 | 1.6 | **WIN** |
| 678 | ORCL | 10-02 13:30 | 10-02 13:40 | 294.22 | 289.76 | 47 | 13828.34 | -209.62 | -1.52% | 1.97R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.9 | ↓293.08 | 1.125 | 1.97 | **LOSS** |
| 679 | COIN | 10-02 13:35 | 10-02 14:15 | 359.91 | 361.38 | 35 | 12596.85 | +51.45 | +0.41% | 0.34R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 90.09 | ↓357.02 | 2.0145 | 1.85 | **WIN** |
| 680 | NKE | 10-02 13:35 | 10-02 13:55 | 76.61 | 76.13 | 168 | 12870.48 | -80.64 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.53 | ↓76.11 | 0.4951 | 1.5 | **LOSS** |
| 681 | CELH | 10-02 13:35 | 10-02 14:05 | 58.18 | 57.91 | 238 | 13846.84 | -64.26 | -0.46% | 0.61R | 30m | market | early-reversal | trend | breakout | falseBreakoutProne | 77.88 | ↓58.06 | 0.1853 | 1.43 | **LOSS** |
| 682 | PYPL | 10-02 13:40 | 10-02 14:05 | 68.14 | 67.42 | 205 | 13968.7 | -147.6 | -1.06% | 1.36R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.68 | ↓67.77 | 0.2863 | 2.5 | **LOSS** |
| 683 | SBUX | 10-02 13:50 | 10-02 14:10 | 86.56 | 85.94 | 161 | 13936.16 | -99.82 | -0.72% | 0.83R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.37 | ↑85.75 | 0.3954 | 1.14 | **LOSS** |
| 684 | COIN | 10-02 16:10 | 10-02 16:35 | 368.72 | 366.99 | 38 | 14011.36 | -65.74 | -0.47% | 0.4R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 86.8 | ↑362.88 | 1.8177 | 2.95 | **LOSS** |
| 685 | IBM | 10-03 13:30 | 10-03 13:55 | 291.44 | 289.51 | 48 | 13989.12 | -92.64 | -0.66% | 0.94R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.72 | ↓290.24 | 0.7519 | 1.39 | **LOSS** |
| 686 | TSM | 10-03 13:35 | 10-03 13:55 | 292.88 | 291.74 | 48 | 14058.24 | -54.72 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.84 | ↓292.27 | 0.8491 | 3.42 | **LOSS** |
| 687 | BAC | 10-03 13:35 | 10-03 14:00 | 51.03 | 50.71 | 274 | 13982.22 | -87.68 | -0.63% | 0.9R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.28 | ↓50.87 | 0.0622 | 1.12 | **LOSS** |
| 688 | UBER | 10-03 13:40 | 10-03 14:30 | 97.53 | 97.44 | 142 | 13849.26 | -12.78 | -0.09% | 0.13R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 89.19 | ↓97.35 | 0.4561 | 1.5 | **LOSS** |
| 689 | COIN | 10-06 13:35 | 10-06 13:55 | 388.51 | 384.57 | 36 | 13986.36 | -141.84 | -1.01% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.97 | ↓388.48 | 2.729 | 1.64 | **LOSS** |
| 690 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 144 | 12919.68 | -76.32 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 691 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 692 | HPE | 10-06 13:40 | 10-06 14:00 | 25.21 | 24.97 | 554 | 13966.34 | -132.96 | -0.95% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.75 | ↓25.13 | 0.1346 | 1.49 | **LOSS** |
| 693 | ELF | 10-06 13:40 | 10-06 14:30 | 138.92 | 137.75 | 100 | 13892 | -117 | -0.84% | 0.66R | 50m | market | early-reversal | trend | breakout | falseBreakoutProne | 58.33 | ↓138.06 | -0.0669 | 2.89 | **LOSS** |
| 694 | TSM | 10-06 13:45 | 10-06 14:30 | 305.55 | 303.34 | 42 | 12833.1 | -92.82 | -0.72% | 0.55R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.75 | ↓304.58 | 2.93 | 1.81 | **LOSS** |
| 695 | PANW | 10-06 13:45 | 10-06 14:05 | 212.07 | 210.43 | 65 | 13784.55 | -106.6 | -0.77% | 0.87R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 74.8 | ↓211.14 | 0.8134 | 1.23 | **LOSS** |
| 696 | LMT | 10-06 13:55 | 10-06 14:15 | 513.39 | 511.34 | 27 | 13861.53 | -55.35 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 76.12 | ↓511.97 | 1.7713 | 2 | **LOSS** |
| 697 | DDOG | 10-06 17:30 | 10-06 17:50 | 159.63 | 158.61 | 87 | 13887.81 | -88.74 | -0.64% | 0.91R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.63 | ↑156.48 | 0.7461 | 4.01 | **LOSS** |
| 698 | CRM | 10-06 17:35 | 10-06 18:30 | 247.89 | 247.45 | 52 | 12890.28 | -22.88 | -0.18% | 0.18R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 97.17 | ↑239.72 | 1.6913 | 2.55 | **LOSS** |
| 699 | ADBE | 10-06 17:35 | 10-06 18:05 | 354.89 | 352.83 | 39 | 13840.71 | -80.34 | -0.58% | 0.83R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 88.66 | ↑347.38 | 1.4735 | 2.57 | **LOSS** |
| 700 | BA | 10-07 13:30 | 10-07 14:10 | 222.3 | 221.15 | 63 | 14004.9 | -72.45 | -0.52% | 0.74R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.2 | ↓221.69 | 0.2238 | 2.95 | **LOSS** |
| 701 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 377 | 14099.8 | -60.32 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 702 | IBM | 10-07 13:35 | 10-07 13:55 | 298.19 | 296.41 | 43 | 12822.17 | -76.54 | -0.6% | 0.82R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.04 | ↓297.18 | 0.9379 | 4.83 | **LOSS** |
| 703 | PLTR | 10-07 13:40 | 10-07 15:00 | 184.52 | 183.65 | 76 | 14023.52 | -66.12 | -0.47% | 0.39R | 80m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.64 | ↓182.69 | 0.7237 | 3.38 | **LOSS** |
| 704 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 74 | 13903.12 | +8.14 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 705 | TSM | 10-08 13:35 | 10-08 15:20 | 298.99 | 304.24 | 47 | 14052.53 | +246.75 | +1.76% | 2.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.05 | ↑296.7 | 0.4771 | 1.16 | **WIN** |
| 706 | DDOG | 10-08 13:35 | 10-08 14:30 | 157.3 | 162.07 | 88 | 13842.4 | +419.76 | +3.03% | 3.79R | 55m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.22 | ↑156.47 | 0.5621 | 3.27 | **WIN** |
| 707 | UNH | 10-08 13:35 | 10-08 13:55 | 368.07 | 368.18 | 37 | 13618.59 | +4.07 | +0.03% | 0.04R | 20m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 72.5 | ↓367.23 | 0.8676 | 1.74 | **WIN** |
| 708 | JPM | 10-09 13:35 | 10-09 13:50 | 307.99 | 304.35 | 43 | 13243.57 | -156.52 | -1.18% | 1.69R | 15m | market | stop-loss | trend | breakout | falseBreakoutProne | 71.61 | ↓306.43 | -0.2052 | 1.88 | **LOSS** |
| 709 | COST | 10-09 13:40 | 10-09 15:25 | 937.65 | 941.08 | 14 | 13127.1 | +48.02 | +0.37% | 0.45R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.71 | ↑935.02 | 4.1372 | 3.5 | **WIN** |
| 710 | NFLX | 10-09 13:45 | 10-09 14:15 | 1231.11 | 1227.49 | 11 | 13542.21 | -39.82 | -0.29% | 0.41R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.16 | ↑1224.14 | 2.8625 | 2.87 | **LOSS** |
| 711 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 712 | AMD | 10-09 13:50 | 10-09 14:10 | 238.77 | 235.44 | 58 | 13848.66 | -193.14 | -1.39% | 0.72R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.6 | ↓236.72 | 1.3492 | 1.73 | **LOSS** |
| 713 | ARM | 10-09 13:50 | 10-09 14:40 | 165.23 | 164.59 | 84 | 13879.32 | -53.76 | -0.39% | 0.2R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 58.56 | ↑163.17 | 0.8854 | 1.31 | **LOSS** |
| 714 | CRWD | 10-09 15:55 | 10-09 16:45 | 509.44 | 509.16 | 27 | 13754.88 | -7.56 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.87 | ↑505.67 | -0.3442 | 2.71 | **LOSS** |
| 715 | NET | 10-10 13:35 | 10-10 14:00 | 225.19 | 222.26 | 62 | 13961.78 | -181.66 | -1.3% | 1.86R | 25m | market | stop-loss | breakout | breakout | falseBreakoutProne | 86.8 | ↓224.33 | 0.6668 | 1.39 | **LOSS** |
| 716 | JPM | 10-10 13:35 | 10-10 13:55 | 309.74 | 308.41 | 45 | 13938.3 | -59.85 | -0.43% | 0.61R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.31 | ↓308.59 | 0.7275 | 2.93 | **LOSS** |
| 717 | WMT | 10-10 13:35 | 10-10 14:25 | 103.02 | 102.58 | 135 | 13907.7 | -59.4 | -0.43% | 0.61R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.41 | ↓102.66 | 0.3179 | 1.5 | **LOSS** |
| 718 | COIN | 10-10 13:40 | 10-10 14:05 | 400.28 | 395.52 | 32 | 12808.96 | -152.32 | -1.19% | 1.17R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 93.38 | ↓394.65 | 2.295 | 2.51 | **LOSS** |
| 719 | ORCL | 10-13 13:30 | 10-13 15:15 | 302.04 | 307.76 | 46 | 13893.84 | +263.12 | +1.89% | 1.52R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.28 | ↑301.08 | 0.795 | 4.6 | **WIN** |
| 720 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 721 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 722 | SHOP | 10-13 13:45 | 10-13 14:05 | 154.02 | 152.61 | 91 | 14015.82 | -128.31 | -0.92% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.21 | ↓152.76 | -0.1914 | 1.18 | **LOSS** |
| 723 | AVGO | 10-13 13:55 | 10-13 14:55 | 355.81 | 355.62 | 39 | 13876.59 | -7.41 | -0.05% | 0.03R | 60m | market | stagnation | breakout | breakout | falseBreakoutProne | 68.95 | ↑351.22 | 6.4546 | 2.01 | **LOSS** |
| 724 | TSM | 10-13 14:05 | 10-13 15:00 | 300.8 | 300.28 | 46 | 13836.8 | -23.92 | -0.17% | 0.09R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 86.75 | ↑296.37 | 4.3791 | 1.12 | **LOSS** |
| 725 | ABNB | 10-15 13:30 | 10-15 13:50 | 125.7 | 125 | 102 | 12821.4 | -71.4 | -0.56% | 0.64R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.09 | ↓125.25 | -0.0497 | 2.07 | **LOSS** |
| 726 | GE | 10-15 13:30 | 10-15 14:25 | 303.52 | 302.66 | 45 | 13658.4 | -38.7 | -0.28% | 0.4R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 69.63 | ↓303.36 | -0.2157 | 2.49 | **LOSS** |
| 727 | ORCL | 10-15 13:40 | 10-15 14:45 | 306.97 | 306.3 | 45 | 13813.65 | -30.15 | -0.22% | 0.15R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 69.71 | ↓306.03 | 0.4393 | 1.24 | **LOSS** |
| 728 | MU | 10-15 15:05 | 10-15 15:25 | 191.9 | 190.63 | 73 | 14008.7 | -92.71 | -0.66% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 66.69 | ↑190.16 | 0.0107 | 2.2 | **LOSS** |
| 729 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 730 | DELL | 10-16 13:30 | 10-16 13:55 | 156.12 | 155.1 | 83 | 12957.96 | -84.66 | -0.65% | 0.8R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.26 | ↓155.62 | 0.3024 | 2.59 | **LOSS** |
| 731 | AMZN | 10-16 13:35 | 10-16 14:25 | 217.83 | 217.56 | 64 | 13941.12 | -17.28 | -0.12% | 0.17R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.07 | ↓217.2 | 0.579 | 2.4 | **LOSS** |
| 732 | SNOW | 10-16 13:35 | 10-16 14:25 | 248.25 | 245.85 | 52 | 12909 | -124.8 | -0.97% | 0.78R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.39 | ↓247.22 | 0.6278 | 3 | **LOSS** |
| 733 | SBUX | 10-16 13:35 | 10-16 13:55 | 84.39 | 83.92 | 165 | 13924.35 | -77.55 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 80.08 | ↓84.08 | 0.2108 | 2.97 | **LOSS** |
| 734 | PLTR | 10-16 13:40 | 10-16 15:20 | 182.01 | 182 | 77 | 14014.77 | -0.77 | -0.01% | 0.01R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 74.27 | ↓181.2 | 0.6585 | 1.47 | **LOSS** |
| 735 | SMCI | 10-16 13:40 | 10-16 13:45 | 55.47 | 54.41 | 255 | 14144.85 | -270.3 | -1.91% | 1.54R | 5m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.71 | ↓54.93 | 0.2493 | 1.89 | **LOSS** |
| 736 | MDB | 10-16 13:40 | 10-16 13:50 | 329.25 | 324.34 | 39 | 12840.75 | -191.49 | -1.49% | 1.42R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 88.15 | ↓328.34 | 1.582 | 3.81 | **LOSS** |
| 737 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 156 | 14060.28 | -12.48 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 738 | CELH | 10-16 14:35 | 10-16 15:45 | 66.09 | 66.03 | 209 | 13812.81 | -12.54 | -0.09% | 0.06R | 70m | market | stagnation | breakout | breakout | extendedBreakout | 89.84 | ↑65.06 | 0.7034 | 1.97 | **LOSS** |
| 739 | CRM | 10-17 13:30 | 10-17 13:55 | 250.45 | 247.72 | 51 | 12772.95 | -139.23 | -1.09% | 0.92R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.54 | ↓248.86 | -0.1933 | 1.16 | **LOSS** |
| 740 | CVX | 10-17 13:35 | 10-17 13:55 | 153.54 | 152.39 | 91 | 13972.14 | -104.65 | -0.75% | 1.07R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.06 | ↓153.15 | 0.4053 | 1.2 | **LOSS** |
| 741 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 349 | 12965.35 | +317.59 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 742 | AAPL | 10-20 13:30 | 10-20 15:15 | 258.43 | 263 | 54 | 13955.22 | +246.78 | +1.77% | 2.13R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.09 | ↑257.71 | 1.2232 | 3.71 | **WIN** |
| 743 | ASML | 10-20 13:35 | 10-20 13:55 | 1041.04 | 1034.58 | 13 | 13533.52 | -83.98 | -0.62% | 0.89R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.08 | ↓1039.15 | 2.9202 | 1.67 | **LOSS** |
| 744 | BA | 10-20 13:35 | 10-20 13:55 | 216.32 | 215.45 | 64 | 13844.48 | -55.68 | -0.4% | 0.56R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 66.64 | ↓216.26 | 0.2559 | 3.33 | **LOSS** |
| 745 | UNH | 10-20 13:35 | 10-20 13:55 | 361.86 | 360.35 | 38 | 13750.68 | -57.38 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.04 | ↓359.91 | 1.0435 | 2.12 | **LOSS** |
| 746 | LRCX | 10-20 13:35 | 10-20 14:25 | 145.88 | 145.41 | 88 | 12837.44 | -41.36 | -0.32% | 0.36R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 82.38 | ↓145.32 | 0.629 | 1.62 | **LOSS** |
| 747 | META | 10-20 13:40 | 10-20 15:25 | 725.14 | 729.98 | 19 | 13777.66 | +91.96 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.72 | ↑723.58 | 2.3066 | 1.15 | **WIN** |
| 748 | COIN | 10-20 13:40 | 10-20 15:25 | 346.07 | 352.78 | 40 | 13842.8 | +268.4 | +1.94% | 1.25R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 71.73 | ↑342.09 | 3.2326 | 1.23 | **WIN** |
| 749 | NFLX | 10-20 13:45 | 10-20 15:30 | 1220.51 | 1234.35 | 11 | 13425.61 | +152.24 | +1.13% | 1.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.96 | ↑1215.27 | 4.5448 | 1.7 | **WIN** |
| 750 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 369 | 14114.25 | -162.36 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 751 | CRWD | 10-20 13:50 | 10-20 15:35 | 494.67 | 495.03 | 28 | 13850.76 | +10.08 | +0.07% | 0.08R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.54 | ↑491.22 | 2.3054 | 1.41 | **WIN** |
| 752 | AMD | 10-20 14:00 | 10-20 15:45 | 239.91 | 240.86 | 58 | 13914.78 | +55.1 | +0.4% | 0.24R | 105m | market | timeout | breakout | breakout | extendedBreakout | 69.48 | ↑237.65 | 1.5228 | 3.43 | **WIN** |
| 753 | ARM | 10-20 14:00 | 10-20 14:20 | 172.53 | 170.77 | 80 | 13802.4 | -140.8 | -1.02% | 0.97R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.41 | ↓171.47 | 1.7039 | 1.24 | **LOSS** |
| 754 | AMZN | 10-21 13:40 | 10-21 15:25 | 220.34 | 221.87 | 63 | 13881.42 | +96.39 | +0.69% | 0.99R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 83.36 | ↑219.4 | 0.813 | 1.47 | **WIN** |
| 755 | ADBE | 10-21 15:05 | 10-21 15:25 | 357.19 | 355.35 | 38 | 13573.22 | -69.92 | -0.52% | 0.74R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 100 | ↑350.75 | 3.3441 | 2.28 | **LOSS** |
| 756 | NVDA | 10-22 13:50 | 10-22 14:10 | 183.44 | 181.83 | 76 | 13941.44 | -122.36 | -0.88% | 1.26R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 72.07 | ↓181.78 | 0.2359 | 1.41 | **LOSS** |
| 757 | XOM | 10-23 13:35 | 10-23 14:10 | 116.32 | 115.48 | 120 | 13958.4 | -100.8 | -0.72% | 0.85R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87 | ↓116.27 | 0.4997 | 1.22 | **LOSS** |
| 758 | CVX | 10-23 13:35 | 10-23 13:55 | 158.1 | 157.5 | 88 | 13912.8 | -52.8 | -0.38% | 0.45R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.87 | ↓157.62 | 0.6451 | 2.45 | **LOSS** |
| 759 | AMAT | 10-23 13:35 | 10-23 15:20 | 224.56 | 228.44 | 62 | 13922.72 | +240.56 | +1.73% | 1.68R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.49 | ↑222.58 | 1.2178 | 1.38 | **WIN** |
| 760 | KLAC | 10-23 13:45 | 10-23 15:30 | 1143.78 | 1157.59 | 12 | 13725.36 | +165.72 | +1.21% | 1.22R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.69 | ↑1138.96 | 8.1997 | 1.13 | **WIN** |
| 761 | NET | 10-23 13:50 | 10-23 14:15 | 214.17 | 213.48 | 65 | 13921.05 | -44.85 | -0.32% | 0.46R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.94 | ↓213.08 | 1.2398 | 3.06 | **LOSS** |
| 762 | TSLA | 10-23 16:40 | 10-23 18:25 | 441.29 | 448.2 | 31 | 13679.99 | +214.21 | +1.57% | 1.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81.72 | ↑425.33 | 3.8929 | 1.48 | **WIN** |
| 763 | TGT | 10-24 13:30 | 10-24 13:50 | 95.36 | 94.67 | 147 | 14017.92 | -101.43 | -0.72% | 1.03R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 81.2 | ↓95.2 | 0.1371 | 2.42 | **LOSS** |
| 764 | AVGO | 10-24 13:35 | 10-24 14:25 | 354.25 | 352.83 | 39 | 13815.75 | -55.38 | -0.4% | 0.38R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.03 | ↓352.84 | 2.0817 | 2.4 | **LOSS** |
| 765 | TSM | 10-24 13:35 | 10-24 13:55 | 296.77 | 295.69 | 47 | 13948.19 | -50.76 | -0.36% | 0.48R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.27 | ↓296.09 | 0.2874 | 1.6 | **LOSS** |
| 766 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 81 | 13923.9 | -4.86 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 767 | JPM | 10-24 13:35 | 10-24 15:20 | 297.92 | 301.16 | 46 | 13704.32 | +149.04 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.4 | ↑296.94 | 0.1863 | 1.18 | **WIN** |
| 768 | IBM | 10-24 13:45 | 10-24 15:30 | 294.75 | 303.55 | 44 | 12969 | +387.2 | +2.99% | 2.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.3 | ↑289.67 | 2.0856 | 1.39 | **WIN** |
| 769 | COIN | 10-24 13:50 | 10-24 14:45 | 344.4 | 344.49 | 40 | 13776 | +3.6 | +0.03% | 0.02R | 55m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.36 | ↑340.33 | 3.4254 | 4 | **WIN** |
| 770 | IBM | 10-24 15:35 | 10-24 16:50 | 304.84 | 304.46 | 46 | 14022.64 | -17.48 | -0.12% | 0.13R | 75m | market | trailing-stop | breakout | breakout | extendedBreakout | 93.45 | ↑296.23 | 4.1097 | 1.38 | **LOSS** |
| 771 | TSM | 10-27 13:30 | 10-27 13:45 | 299.38 | 296.62 | 47 | 14070.86 | -129.72 | -0.92% | 1.31R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 72.45 | ↓299.52 | 0.6186 | 5.14 | **LOSS** |
| 772 | PANW | 10-27 13:30 | 10-27 14:20 | 219.82 | 219.19 | 63 | 13848.66 | -39.69 | -0.29% | 0.41R | 50m | market | stagnation | trend | breakout | falseBreakoutProne | 71.56 | ↓219.84 | 0.1674 | 3.82 | **LOSS** |
| 773 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 774 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 326 | 12997.62 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 775 | PLTR | 10-27 13:35 | 10-27 15:10 | 190.44 | 190.55 | 68 | 12949.92 | +7.48 | +0.06% | 0.05R | 95m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 89.66 | ↓189.75 | 0.6907 | 3.78 | **WIN** |
| 776 | GE | 10-27 13:35 | 10-27 14:25 | 308.87 | 308.02 | 45 | 13899.15 | -38.25 | -0.28% | 0.4R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 77.12 | ↓307.97 | 0.4661 | 1.74 | **LOSS** |
| 777 | TGT | 10-27 13:35 | 10-27 15:20 | 96.94 | 97.15 | 144 | 13959.36 | +30.24 | +0.22% | 0.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 86.83 | ↓96.52 | 0.2605 | 2.59 | **WIN** |
| 778 | MU | 10-27 13:40 | 10-27 14:00 | 222.4 | 218.36 | 63 | 14011.2 | -254.52 | -1.82% | 1.53R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 65.07 | ↓222.7 | 1.1579 | 1.21 | **LOSS** |
| 779 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 780 | UBER | 10-27 13:45 | 10-27 14:35 | 95.87 | 95.44 | 145 | 13901.15 | -62.35 | -0.45% | 0.58R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.83 | ↓95.24 | 0.0704 | 1.51 | **LOSS** |
| 781 | PYPL | 10-27 16:35 | 10-27 17:00 | 71.66 | 71.31 | 195 | 13973.7 | -68.25 | -0.49% | 0.7R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 81.68 | ↑70.87 | 0.1479 | 4.9 | **LOSS** |
| 782 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 71 | 13870.56 | -164.72 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 783 | MRVL | 10-28 13:30 | 10-28 13:50 | 89.67 | 88.62 | 157 | 14078.19 | -164.85 | -1.17% | 1.58R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.81 | ↓89.49 | 0.1548 | 2.61 | **LOSS** |
| 784 | MSFT | 10-28 13:40 | 10-28 14:30 | 546.39 | 543.89 | 25 | 13659.75 | -62.5 | -0.46% | 0.37R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 71.91 | ↓546.99 | 3.3311 | 2.88 | **LOSS** |
| 785 | INTC | 10-28 13:40 | 10-28 14:50 | 40.25 | 40.83 | 350 | 14087.5 | +203 | +1.44% | 1.19R | 70m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 63.22 | ↑40.15 | 0.1432 | 7.04 | **WIN** |
| 786 | PYPL | 10-28 13:45 | 10-28 14:40 | 77.25 | 77.77 | 181 | 13982.25 | +94.12 | +0.67% | 0.34R | 55m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 76.2 | ↑76.04 | 1.5831 | 1.87 | **WIN** |
| 787 | SMCI | 10-28 14:00 | 10-28 15:45 | 52.39 | 53.3 | 269 | 14092.91 | +244.79 | +1.74% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 72.4 | ↑52.06 | 0.4011 | 1.22 | **WIN** |
| 788 | ELF | 10-28 17:05 | 10-28 17:25 | 131.74 | 130.96 | 105 | 13832.7 | -81.9 | -0.59% | 0.74R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.59 | ↑127.92 | 1.1516 | 1.38 | **LOSS** |
| 789 | PLTR | 10-29 13:45 | 10-29 15:30 | 195.08 | 196.44 | 71 | 13850.68 | +96.56 | +0.7% | 0.56R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.82 | ↑192.63 | 0.9894 | 2.12 | **WIN** |
| 790 | RIVN | 10-29 13:50 | 10-29 14:10 | 13.84 | 13.75 | 1007 | 13936.88 | -90.63 | -0.65% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 89.34 | ↑13.7 | 0.0948 | 2.01 | **LOSS** |
| 791 | CAT | 10-29 13:55 | 10-29 14:15 | 590.73 | 585.64 | 23 | 13586.79 | -117.07 | -0.86% | 0.43R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 94.73 | ↑576.45 | 14.9891 | 1.26 | **LOSS** |
| 792 | MA | 10-30 13:35 | 10-30 13:55 | 562.16 | 554.12 | 22 | 12367.52 | -176.88 | -1.43% | 1.61R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.34 | ↓555.69 | 0.5079 | 1.8 | **LOSS** |
| 793 | MDB | 10-30 13:40 | 10-30 15:05 | 344.98 | 353.31 | 40 | 13799.2 | +333.2 | +2.41% | 1.7R | 85m | market | profit-target | breakout | breakout | falseBreakoutProne | 58.87 | ↑341.78 | 0.7503 | 1.19 | **WIN** |
| 794 | LRCX | 10-30 13:40 | 10-30 14:20 | 163.98 | 162.97 | 77 | 12626.46 | -77.77 | -0.62% | 0.44R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.96 | ↓163.06 | 0.3665 | 1.65 | **LOSS** |
| 795 | CRM | 10-30 13:50 | 10-30 15:35 | 257.01 | 257.82 | 54 | 13878.54 | +43.74 | +0.32% | 0.33R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 77.76 | ↑253.49 | 0.5737 | 1.51 | **WIN** |
| 796 | DIS | 10-30 13:50 | 10-30 15:35 | 111.81 | 112.84 | 124 | 13864.44 | +127.72 | +0.92% | 1.31R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.87 | ↑110.84 | 0.0429 | 1.65 | **WIN** |
| 797 | IBM | 10-30 13:50 | 10-30 15:00 | 312.4 | 312.07 | 44 | 13745.6 | -14.52 | -0.11% | 0.1R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.4 | ↑308.43 | 0.0511 | 1.21 | **LOSS** |
| 798 | SBUX | 10-30 13:55 | 10-30 15:05 | 85.48 | 85.26 | 163 | 13933.24 | -35.86 | -0.26% | 0.13R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.2 | ↑83.65 | 0.0163 | 1.56 | **LOSS** |
| 799 | NOW | 10-30 14:10 | 10-30 14:30 | 963.18 | 948.01 | 14 | 13484.52 | -212.38 | -1.57% | 0.79R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.15 | ↑932.74 | 8.457 | 1.17 | **LOSS** |
| 800 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 801 | NFLX | 10-31 13:30 | 10-31 15:15 | 1112.22 | 1130.6 | 12 | 13346.64 | +220.56 | +1.65% | 2.29R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.39 | ↑1109.99 | 0.4267 | 4.85 | **WIN** |
| 802 | PLTR | 10-31 13:30 | 10-31 15:15 | 201.4 | 202.3 | 69 | 13896.6 | +62.1 | +0.45% | 0.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.35 | ↑200.52 | 0.1287 | 3.59 | **WIN** |
| 803 | COIN | 10-31 13:30 | 10-31 14:10 | 340.18 | 351.34 | 41 | 13947.38 | +457.56 | +3.28% | 1.8R | 40m | market | profit-target | breakout | breakout | falseBreakoutProne | 65 | ↑338.88 | -0.8298 | 2.83 | **WIN** |
| 804 | ARM | 10-31 13:35 | 10-31 13:55 | 169.16 | 167.72 | 81 | 13701.96 | -116.64 | -0.85% | 0.94R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 61.35 | ↓168.66 | -0.0903 | 1.67 | **LOSS** |
| 805 | CVX | 10-31 13:35 | 10-31 14:25 | 157.82 | 157.62 | 88 | 13888.16 | -17.6 | -0.13% | 0.12R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.11 | ↓156.82 | 0.2258 | 1.9 | **LOSS** |
| 806 | DDOG | 10-31 13:40 | 10-31 15:25 | 160.37 | 161.57 | 87 | 13952.19 | +104.4 | +0.75% | 0.62R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 61.62 | ↓160.31 | 0.4161 | 2.5 | **WIN** |
| 807 | LLY | 11-03 14:35 | 11-03 14:55 | 882.39 | 877.21 | 15 | 13235.85 | -77.7 | -0.59% | 0.67R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 74.53 | ↓879.33 | 2.6734 | 3.18 | **LOSS** |
| 808 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 809 | LLY | 11-05 14:45 | 11-05 16:30 | 930.9 | 945.23 | 15 | 13963.5 | +214.95 | +1.54% | 1.56R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.32 | ↑923.66 | 6.6497 | 1.43 | **WIN** |
| 810 | MU | 11-06 14:40 | 11-06 14:55 | 246.11 | 241.41 | 52 | 12797.72 | -244.4 | -1.91% | 1.49R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 77.81 | ↓242.39 | 1.3152 | 2.12 | **LOSS** |
| 811 | DDOG | 11-06 14:55 | 11-06 15:35 | 188.13 | 186.83 | 68 | 12792.84 | -88.4 | -0.69% | 0.35R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 89.99 | ↑185.62 | 7.9257 | 1.52 | **LOSS** |
| 812 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 813 | AMZN | 11-10 14:35 | 11-10 15:05 | 250.59 | 249.19 | 55 | 13782.45 | -77 | -0.56% | 0.61R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 89.26 | ↓249.58 | 1.7204 | 1.68 | **LOSS** |
| 814 | NFLX | 11-10 14:35 | 11-10 15:55 | 1123.49 | 1120.86 | 12 | 13481.88 | -31.56 | -0.23% | 0.33R | 80m | market | stagnation | breakout | breakout | extendedBreakout | 82.57 | ↓1119.35 | 4.7983 | 3.07 | **LOSS** |
| 815 | ORCL | 11-10 14:35 | 11-10 14:50 | 246.96 | 242.62 | 57 | 14076.72 | -247.38 | -1.76% | 1.29R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 84.81 | ↓245.34 | 2.0692 | 1.53 | **LOSS** |
| 816 | INTC | 11-10 14:40 | 11-10 15:00 | 39.44 | 39.19 | 358 | 14119.52 | -89.5 | -0.63% | 0.53R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.21 | ↓39.17 | 0.453 | 2.72 | **LOSS** |
| 817 | TSM | 11-10 14:40 | 11-10 15:05 | 296.73 | 295.18 | 43 | 12759.39 | -66.65 | -0.52% | 0.4R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 89.13 | ↓295.63 | 2.5995 | 1.36 | **LOSS** |
| 818 | PLTR | 11-10 14:50 | 11-10 15:55 | 190.14 | 190.23 | 73 | 13880.22 | +6.57 | +0.05% | 0.03R | 65m | market | trailing-stop | breakout | breakout | extendedBreakout | 95.49 | ↑187.85 | 3.4637 | 1.39 | **WIN** |
| 819 | LLY | 11-10 15:00 | 11-10 15:30 | 979.06 | 970.38 | 14 | 13706.84 | -121.52 | -0.89% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 94.84 | ↑966.14 | 15.7637 | 1.73 | **LOSS** |
| 820 | RIVN | 11-10 17:35 | 11-10 18:40 | 16.31 | 16.45 | 854 | 13928.74 | +119.56 | +0.86% | 0.5R | 65m | market | trailing-stop | breakout | breakout | extendedBreakout | 84.75 | ↑15.68 | 0.2288 | 1.57 | **WIN** |
| 821 | NVO | 11-11 14:30 | 11-11 15:30 | 47.42 | 48.59 | 274 | 12993.08 | +320.58 | +2.47% | 2.84R | 60m | market | profit-target | breakout | breakout | extendedBreakout | 90.45 | ↑47.3 | 0.2599 | 1.7 | **WIN** |
| 822 | IBM | 11-11 14:35 | 11-11 14:45 | 314.73 | 313.9 | 44 | 13848.12 | -36.52 | -0.26% | 0.37R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 93.34 | ↓312.62 | 1.0688 | 2.1 | **LOSS** |
| 823 | NKE | 11-11 14:35 | 11-11 16:20 | 62.17 | 62.78 | 224 | 13926.08 | +136.64 | +0.98% | 1.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.36 | ↑61.71 | 0.1563 | 2.52 | **WIN** |
| 824 | AAPL | 11-11 14:45 | 11-11 15:05 | 274.1 | 272.74 | 51 | 13979.1 | -69.36 | -0.5% | 0.71R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90 | ↓272.32 | 0.6193 | 1.42 | **LOSS** |
| 825 | CAT | 11-12 14:35 | 11-12 14:45 | 578.4 | 573.71 | 24 | 13881.6 | -112.56 | -0.81% | 1.16R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 826 | UNH | 11-12 14:35 | 11-12 16:20 | 334.04 | 337.07 | 41 | 13695.64 | +124.23 | +0.91% | 1.28R | 105m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.36 | ↓330.78 | 1.3594 | 1.38 | **WIN** |
| 827 | IBM | 11-12 14:35 | 11-12 14:55 | 324.18 | 322.48 | 39 | 12643.02 | -66.3 | -0.52% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.6 | ↓322.43 | 1.5716 | 2.86 | **LOSS** |
| 828 | NKE | 11-12 14:35 | 11-12 15:20 | 64.66 | 64.3 | 216 | 13966.56 | -77.76 | -0.56% | 0.62R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 82.68 | ↓64.31 | 0.1392 | 1.14 | **LOSS** |
| 829 | AMD | 11-12 15:20 | 11-12 15:55 | 261.68 | 258.72 | 53 | 13869.04 | -156.88 | -1.13% | 0.57R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 68.89 | ↑255.89 | 5.0713 | 1.25 | **LOSS** |
| 830 | TSLA | 11-14 16:25 | 11-14 17:30 | 408.56 | 407.4 | 34 | 13891.04 | -39.44 | -0.28% | 0.17R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 84.36 | ↑397.05 | 5.5753 | 1.6 | **LOSS** |
| 831 | AVGO | 11-17 14:50 | 11-17 15:05 | 351.56 | 345.15 | 39 | 13710.84 | -249.99 | -1.82% | 1.33R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 86.34 | ↓347.05 | 1.4597 | 1.67 | **LOSS** |
| 832 | SHOP | 11-19 14:55 | 11-19 15:45 | 146.06 | 145.08 | 95 | 13875.7 | -93.1 | -0.67% | 0.49R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 84.36 | ↑143.78 | 0.8444 | 1.3 | **LOSS** |
| 833 | META | 11-20 14:35 | 11-20 14:55 | 605.87 | 602.09 | 23 | 13935.01 | -86.94 | -0.62% | 0.68R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.44 | ↓602.22 | 3.6323 | 1.88 | **LOSS** |
| 834 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 835 | COST | 11-20 14:35 | 11-20 15:40 | 900.6 | 900.01 | 15 | 13509 | -8.85 | -0.07% | 0.1R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 85.24 | ↑897.13 | 2.7266 | 1.53 | **LOSS** |
| 836 | WMT | 11-20 14:40 | 11-20 16:25 | 105.86 | 107.24 | 131 | 13867.66 | +180.78 | +1.3% | 0.82R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.97 | ↑104.68 | 1.1993 | 3.09 | **WIN** |
| 837 | ADBE | 11-21 17:10 | 11-21 18:00 | 323.34 | 323.03 | 42 | 13580.28 | -13.02 | -0.1% | 0.13R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 81.41 | ↑316.47 | 1.8321 | 1.32 | **LOSS** |
| 838 | TSLA | 11-24 15:05 | 11-24 16:50 | 414.06 | 419.79 | 33 | 13663.98 | +189.09 | +1.38% | 0.93R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.98 | ↑409.24 | 4.6503 | 1.52 | **WIN** |
| 839 | NVO | 11-25 14:30 | 11-25 15:20 | 46.42 | 46.32 | 281 | 13044.02 | -28.1 | -0.22% | 0.19R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 82.39 | ↓46.27 | 0.2625 | 1.59 | **LOSS** |
| 840 | CELH | 11-25 14:35 | 11-25 16:20 | 39.39 | 39.88 | 323 | 12722.97 | +158.27 | +1.24% | 0.83R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.36 | ↑39.2 | 0.092 | 1.12 | **WIN** |
| 841 | ORCL | 11-25 17:30 | 11-25 17:50 | 198.55 | 197.44 | 70 | 13898.5 | -77.7 | -0.56% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 70.18 | ↑191.92 | 1.5524 | 1.33 | **LOSS** |
| 842 | TSM | 11-26 14:30 | 11-26 14:50 | 291.26 | 289.31 | 48 | 13980.48 | -93.6 | -0.67% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 88.6 | ↓290.6 | 1.8061 | 2.61 | **LOSS** |
| 843 | COIN | 11-26 14:40 | 11-26 14:55 | 258.47 | 254.17 | 54 | 13957.38 | -232.2 | -1.66% | 1.5R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 94.84 | ↓257.03 | 2.6006 | 2.34 | **LOSS** |
| 844 | UNH | 11-26 14:40 | 11-26 14:50 | 334.35 | 330.74 | 41 | 13708.35 | -148.01 | -1.08% | 1.48R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 88.65 | ↓331.41 | 1.2436 | 2.74 | **LOSS** |
| 845 | MRVL | 11-26 14:40 | 11-26 16:25 | 85.66 | 87.74 | 164 | 14048.24 | +341.12 | +2.43% | 2.13R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 90.74 | ↑84.94 | 0.6685 | 1.83 | **WIN** |
| 846 | DELL | 11-26 16:35 | 11-26 17:05 | 134.95 | 133.79 | 103 | 13899.85 | -119.48 | -0.86% | 0.69R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 80.57 | ↑131.28 | 1.7199 | 1.12 | **LOSS** |
| 847 | GOOGL | 11-28 14:30 | 11-28 14:40 | 326.26 | 322.82 | 42 | 13702.92 | -144.48 | -1.05% | 1.5R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 92.91 | ↓325.19 | 1.0737 | 6.62 | **LOSS** |
| 848 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 32 | 13830.08 | -84.48 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 849 | COIN | 11-28 14:40 | 11-28 16:00 | 275.41 | 274.9 | 47 | 12944.27 | -23.97 | -0.19% | 0.14R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 91.19 | ↓273.19 | 1.7657 | 1.92 | **LOSS** |
| 850 | INTC | 11-28 14:45 | 11-28 15:55 | 38.55 | 39.55 | 338 | 13029.9 | +338 | +2.59% | 1.98R | 70m | market | profit-target | breakout | breakout | extendedBreakout | 83.53 | ↑38.11 | 0.289 | 1.86 | **WIN** |
| 851 | INTC | 11-28 17:55 | 12-01 14:20 | 40.6 | 39.99 | 349 | 14169.4 | -212.89 | -1.5% | 1.39R | 4105m | market | stop-loss | breakout | breakout | extendedBreakout | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 852 | CVX | 12-01 14:40 | 12-01 16:05 | 153.02 | 152.93 | 91 | 13924.82 | -8.19 | -0.06% | 0.09R | 85m | market | stagnation | breakout | breakout | extendedBreakout | 76.63 | ↓152.47 | 0.2387 | 2.57 | **LOSS** |
| 853 | LOW | 12-01 14:50 | 12-01 16:35 | 245.54 | 248.75 | 57 | 13995.78 | +182.97 | +1.31% | 1.87R | 105m | market | timeout | breakout | breakout | extendedBreakout | 79.75 | ↑244.24 | 0.4321 | 3.19 | **WIN** |
| 854 | CELH | 12-01 15:00 | 12-01 15:20 | 42.15 | 41.75 | 329 | 13867.35 | -131.6 | -0.95% | 0.62R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.21 | ↑41.53 | 0.2557 | 1.33 | **LOSS** |
| 855 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 75 | 13903.5 | -102.75 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 856 | PLTR | 12-02 14:35 | 12-02 15:25 | 173.35 | 172.97 | 74 | 12827.9 | -28.12 | -0.22% | 0.21R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 89.14 | ↓172.28 | 0.6003 | 2.82 | **LOSS** |
| 857 | AMAT | 12-02 14:35 | 12-02 15:25 | 260.43 | 259.11 | 53 | 13802.79 | -69.96 | -0.51% | 0.72R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 86.35 | ↓258.39 | 0.6237 | 1.64 | **LOSS** |
| 858 | IBM | 12-02 14:35 | 12-02 14:40 | 309.75 | 307.11 | 45 | 13938.75 | -118.8 | -0.85% | 1.21R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 85.83 | ↓308.81 | 0.7004 | 1.11 | **LOSS** |
| 859 | AMD | 12-02 14:40 | 12-02 15:05 | 225.7 | 223.33 | 61 | 13767.7 | -144.57 | -1.05% | 0.91R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 87.82 | ↓223.37 | 0.994 | 1.7 | **LOSS** |
| 860 | CRWD | 12-02 14:40 | 12-02 15:25 | 516.2 | 512.98 | 26 | 13421.2 | -83.72 | -0.62% | 0.71R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 84.69 | ↓514.33 | 1.8564 | 2.22 | **LOSS** |
| 861 | INTC | 12-02 14:50 | 12-02 15:35 | 41.41 | 42.65 | 341 | 14120.81 | +422.84 | +2.99% | 2.08R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 83.33 | ↑40.97 | 0.2581 | 2.35 | **WIN** |
| 862 | BA | 12-02 14:55 | 12-02 16:40 | 200.4 | 201.76 | 70 | 14028 | +95.2 | +0.68% | 0.36R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.88 | ↑197.67 | 2.7712 | 1.42 | **WIN** |
| 863 | INTC | 12-02 15:40 | 12-02 16:10 | 43.09 | 42.67 | 329 | 14176.61 | -138.18 | -0.97% | 0.49R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 84.26 | ↑41.89 | 0.7762 | 1.58 | **LOSS** |
| 864 | XOM | 12-03 14:35 | 12-03 15:25 | 117.1 | 116.91 | 119 | 13934.9 | -22.61 | -0.16% | 0.23R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 91.11 | ↓116.78 | 0.3025 | 1.29 | **LOSS** |
| 865 | HD | 12-03 14:35 | 12-03 14:55 | 358.26 | 356.81 | 39 | 13972.14 | -56.55 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 94.59 | ↓356.27 | 1.0488 | 2.29 | **LOSS** |
| 866 | SBUX | 12-03 14:35 | 12-03 14:55 | 86.78 | 86.29 | 161 | 13971.58 | -78.89 | -0.56% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.33 | ↓86.34 | 0.3349 | 1.62 | **LOSS** |
| 867 | LOW | 12-03 14:35 | 12-03 14:55 | 246.98 | 246.06 | 56 | 13830.88 | -51.52 | -0.37% | 0.53R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.15 | ↓245.85 | 0.467 | 1.12 | **LOSS** |
| 868 | TGT | 12-03 14:40 | 12-03 15:00 | 92.86 | 92.33 | 151 | 14021.86 | -80.03 | -0.57% | 0.76R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.59 | ↑92.12 | 0.5095 | 2.02 | **LOSS** |
| 869 | UBER | 12-03 14:45 | 12-03 15:05 | 91.31 | 90.52 | 140 | 12783.4 | -110.6 | -0.87% | 0.7R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.53 | ↓90.76 | 0.6733 | 2.22 | **LOSS** |
| 870 | ADBE | 12-05 14:35 | 12-05 15:50 | 337.19 | 346.15 | 41 | 13824.79 | +367.36 | +2.66% | 3.24R | 75m | market | profit-target | breakout | breakout | extendedBreakout | 95.16 | ↑335.1 | 1.2311 | 2.9 | **WIN** |
| 871 | CRM | 12-05 14:40 | 12-05 16:25 | 257.38 | 260.62 | 49 | 12611.62 | +158.76 | +1.26% | 0.85R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.77 | ↑254.34 | 1.3762 | 1.24 | **WIN** |
| 872 | INTC | 12-05 15:00 | 12-05 15:30 | 42.57 | 42.23 | 333 | 14175.81 | -113.22 | -0.8% | 0.48R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.93 | ↑41.95 | 0.3823 | 2.62 | **LOSS** |
| 873 | ELF | 12-05 15:15 | 12-05 16:40 | 83.04 | 82.92 | 167 | 13867.68 | -20.04 | -0.14% | 0.12R | 85m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.31 | ↓82.09 | 0.5441 | 1.84 | **LOSS** |
| 874 | MSFT | 12-08 14:35 | 12-08 15:40 | 488.89 | 488.39 | 28 | 13688.92 | -14 | -0.1% | 0.14R | 65m | market | stagnation | breakout | breakout | extendedBreakout | 83.47 | ↓487.06 | 1.1243 | 2.66 | **LOSS** |
| 875 | NOW | 12-08 14:35 | 12-08 14:45 | 870.11 | 859.16 | 15 | 13051.65 | -164.25 | -1.26% | 1.8R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 81.98 | ↓867.54 | 1.9732 | 6.14 | **LOSS** |
| 876 | NET | 12-08 14:35 | 12-08 15:10 | 204.85 | 204.96 | 68 | 13929.8 | +7.48 | +0.05% | 0.07R | 35m | market | breakeven-stop | breakout | breakout | extendedBreakout | 85.67 | ↓203.99 | 0.5174 | 1.26 | **WIN** |
| 877 | MDB | 12-08 14:35 | 12-08 14:55 | 422.98 | 416.44 | 30 | 12689.4 | -196.2 | -1.55% | 1.4R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.7 | ↓420.28 | 2.1684 | 1.58 | **LOSS** |
| 878 | LMT | 12-08 14:35 | 12-08 15:40 | 457.56 | 457.83 | 30 | 13726.8 | +8.1 | +0.06% | 0.09R | 65m | market | breakeven-stop | breakout | breakout | extendedBreakout | 82.74 | ↓455.84 | 1.145 | 2.28 | **WIN** |
| 879 | DDOG | 12-08 14:40 | 12-08 15:20 | 154.44 | 153.82 | 90 | 13899.6 | -55.8 | -0.4% | 0.49R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 83.98 | ↓153.83 | 0.4257 | 2.52 | **LOSS** |
| 880 | AMZN | 12-10 14:35 | 12-10 15:35 | 231.2 | 231 | 60 | 13872 | -12 | -0.09% | 0.13R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 83.26 | ↓230.04 | 0.288 | 4.17 | **LOSS** |
| 881 | PLTR | 12-10 14:35 | 12-10 14:45 | 186.57 | 183.78 | 75 | 13992.75 | -209.25 | -1.5% | 1.69R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 86.69 | ↓185.22 | 0.621 | 3.77 | **LOSS** |
| 882 | NVO | 12-10 14:45 | 12-10 16:30 | 47.85 | 48.07 | 293 | 14020.05 | +64.46 | +0.46% | 0.46R | 105m | market | timeout | breakout | breakout | extendedBreakout | 78.14 | ↑47.43 | 0.198 | 2.61 | **WIN** |
| 883 | RIVN | 12-10 14:45 | 12-10 15:05 | 18.19 | 17.86 | 766 | 13933.54 | -252.78 | -1.81% | 1.27R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.77 | ↓18 | 0.095 | 3.96 | **LOSS** |
| 884 | V | 12-11 14:40 | 12-11 16:25 | 335.99 | 339.66 | 38 | 12767.62 | +139.46 | +1.09% | 1.24R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.54 | ↑333.68 | 1.3798 | 1.23 | **WIN** |
| 885 | NFLX | 12-12 14:35 | 12-12 15:05 | 96.58 | 96.09 | 145 | 14004.1 | -71.05 | -0.51% | 0.55R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 84.94 | ↓96.12 | 0.3535 | 1.7 | **LOSS** |
| 886 | SMCI | 12-12 14:35 | 12-12 14:55 | 34.43 | 33.95 | 411 | 14150.73 | -197.28 | -1.39% | 1.14R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.62 | ↓34.3 | 0.1875 | 2.99 | **LOSS** |
| 887 | GE | 12-12 14:35 | 12-12 16:05 | 296.42 | 298.11 | 47 | 13931.74 | +79.43 | +0.57% | 0.63R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 84.75 | ↓294.93 | 1.1893 | 2.06 | **WIN** |
| 888 | DIS | 12-12 14:45 | 12-12 15:20 | 113.13 | 112.67 | 123 | 13914.99 | -56.58 | -0.41% | 0.59R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 93.7 | ↓112.31 | 0.4394 | 1.15 | **LOSS** |
| 889 | TSLA | 12-12 14:50 | 12-12 15:05 | 462 | 455.67 | 30 | 13860 | -189.9 | -1.37% | 1.32R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 93.08 | ↓457.5 | 3.0837 | 3.08 | **LOSS** |
| 890 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 891 | LLY | 12-15 14:35 | 12-15 15:05 | 1054.21 | 1047.98 | 13 | 13704.73 | -80.99 | -0.59% | 0.76R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 90.7 | ↓1044.33 | 4.1075 | 1.1 | **LOSS** |
| 892 | DELL | 12-16 14:45 | 12-16 15:05 | 134.46 | 133.38 | 103 | 13849.38 | -111.24 | -0.8% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 79.63 | ↓133.24 | 0.6323 | 2.59 | **LOSS** |
| 893 | SHOP | 12-17 14:55 | 12-17 15:45 | 169.06 | 168.37 | 82 | 13862.92 | -56.58 | -0.41% | 0.26R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.69 | ↓167.51 | 1.5636 | 2.72 | **LOSS** |
| 894 | ADBE | 12-17 15:10 | 12-17 15:50 | 356.15 | 354.36 | 39 | 13889.85 | -69.81 | -0.5% | 0.62R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 90.61 | ↓352.97 | 2.0816 | 1.31 | **LOSS** |
| 895 | SBUX | 12-18 14:45 | 12-18 16:30 | 88.88 | 90.27 | 144 | 12798.72 | +200.16 | +1.56% | 1.11R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.63 | ↑88.72 | 0.7831 | 1.46 | **WIN** |
| 896 | ORCL | 12-19 14:35 | 12-19 15:25 | 191.7 | 191.13 | 73 | 13994.1 | -41.61 | -0.3% | 0.16R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 82.2 | ↓190.02 | 2.7936 | 3.51 | **LOSS** |
| 897 | BA | 12-19 14:35 | 12-19 16:20 | 212.44 | 214.69 | 66 | 14021.04 | +148.5 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.82 | ↑211.65 | 0.3886 | 1.35 | **WIN** |
| 898 | NVDA | 12-19 14:40 | 12-19 15:20 | 179.72 | 178.54 | 77 | 13838.44 | -90.86 | -0.66% | 0.64R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 83.13 | ↓178.33 | 0.8424 | 2.38 | **LOSS** |
| 899 | LRCX | 12-19 14:40 | 12-19 15:30 | 171.37 | 170.75 | 75 | 12852.75 | -46.5 | -0.36% | 0.27R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.03 | ↑170.17 | 1.1446 | 1.18 | **LOSS** |
| 900 | AMD | 12-19 14:45 | 12-19 15:35 | 210.48 | 210.18 | 66 | 13891.68 | -19.8 | -0.14% | 0.1R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 85.02 | ↑207.71 | 1.5072 | 2.7 | **LOSS** |
| 901 | UBER | 12-22 14:35 | 12-22 15:25 | 81.94 | 81.61 | 156 | 12782.64 | -51.48 | -0.4% | 0.38R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 96.01 | ↓81.49 | 0.482 | 1.19 | **LOSS** |
| 902 | NET | 12-22 14:50 | 12-22 15:40 | 202.79 | 201.7 | 69 | 13992.51 | -75.21 | -0.54% | 0.51R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 85.33 | ↑199.7 | 0.8747 | 1.27 | **LOSS** |
| 903 | NVO | 12-23 14:50 | 12-23 15:10 | 52.87 | 52.33 | 265 | 14010.55 | -143.1 | -1.02% | 0.51R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.88 | ↓52.47 | 1.3404 | 2.28 | **LOSS** |
| 904 | COST | 12-24 14:30 | 12-24 16:15 | 864.2 | 873.59 | 16 | 13827.2 | +150.24 | +1.09% | 1.56R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.8 | ↑863.72 | 0.8383 | 1.88 | **WIN** |
| 905 | MU | 12-24 14:35 | 12-24 16:20 | 283.45 | 285.89 | 49 | 13889.05 | +119.56 | +0.86% | 0.92R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.23 | ↓282.15 | 0.8531 | 3.08 | **WIN** |
| 906 | LMT | 12-24 14:40 | 12-24 15:00 | 489.64 | 488.04 | 28 | 13709.92 | -44.8 | -0.33% | 0.47R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.75 | ↓487.78 | 0.9485 | 1.17 | **LOSS** |
| 907 | TGT | 12-26 14:35 | 12-26 15:25 | 98.48 | 99.11 | 142 | 13984.16 | +89.46 | +0.64% | 0.91R | 50m | market | trailing-stop | breakout | breakout | extendedBreakout | 90.07 | ↓98.07 | 0.3862 | 3.45 | **WIN** |
| 908 | CELH | 12-26 14:40 | 12-26 15:00 | 45.9 | 45.69 | 301 | 13815.9 | -63.21 | -0.46% | 0.62R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 91.64 | ↓45.54 | 0.2343 | 2.09 | **LOSS** |
| 909 | SBUX | 12-29 14:40 | 12-29 15:00 | 86.53 | 86.18 | 161 | 13931.33 | -56.35 | -0.4% | 0.57R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.92 | ↓86.2 | 0.3361 | 1.61 | **LOSS** |
| 910 | META | 12-30 14:30 | 12-30 15:20 | 666.77 | 666.51 | 20 | 13335.4 | -5.2 | -0.04% | 0.06R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.02 | ↓663.76 | 1.2226 | 2.27 | **LOSS** |
| 911 | BA | 12-30 14:35 | 12-30 14:55 | 221.52 | 220.05 | 63 | 13955.76 | -92.61 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.37 | ↓220.3 | 0.4956 | 4.46 | **LOSS** |
| 912 | UNH | 12-30 14:35 | 12-30 15:35 | 334.28 | 334.1 | 41 | 13705.48 | -7.38 | -0.05% | 0.07R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 83.38 | ↓332.02 | 0.4838 | 2.73 | **LOSS** |
| 913 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 380 | 14170.2 | +334.4 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 914 | MRVL | 12-30 14:50 | 12-30 15:10 | 87.59 | 86.85 | 161 | 14101.99 | -119.14 | -0.84% | 0.97R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.96 | ↓86.69 | 0.4069 | 1.48 | **LOSS** |
| 915 | TSM | 01-02 14:35 | 01-02 15:25 | 315.83 | 315.15 | 40 | 12633.2 | -27.2 | -0.22% | 0.19R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 83.49 | ↓314.57 | 1.0809 | 2.41 | **LOSS** |
| 916 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 917 | AMZN | 01-02 14:40 | 01-02 14:55 | 234.85 | 232.78 | 59 | 13856.15 | -122.13 | -0.88% | 1.26R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 87.3 | ↓233.39 | 0.3246 | 2.97 | **LOSS** |
| 918 | AVGO | 01-02 14:40 | 01-02 15:20 | 357.83 | 354.48 | 36 | 12881.88 | -120.6 | -0.94% | 0.9R | 40m | market | early-reversal | breakout | breakout | extendedBreakout | 84.26 | ↓355.66 | 1.3661 | 1.85 | **LOSS** |
| 919 | INTC | 01-02 14:40 | 01-02 15:20 | 38.78 | 39.04 | 340 | 13185.2 | +88.4 | +0.67% | 0.42R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 81.43 | ↓38.49 | 0.3298 | 2.36 | **WIN** |
| 920 | UBER | 01-02 14:40 | 01-02 16:25 | 82.99 | 83.37 | 167 | 13859.33 | +63.46 | +0.46% | 0.65R | 105m | market | timeout | breakout | breakout | extendedBreakout | 81.47 | ↑82.32 | 0.0788 | 2.52 | **WIN** |
| 921 | AAPL | 01-02 14:45 | 01-02 15:05 | 277.44 | 276.2 | 50 | 13872 | -62 | -0.45% | 0.64R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.03 | ↑274.94 | 0.5394 | 2.88 | **LOSS** |
| 922 | RIVN | 01-02 14:45 | 01-02 15:05 | 20.66 | 20.32 | 620 | 12809.2 | -210.8 | -1.65% | 1.09R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 92.51 | ↓20.28 | 0.1516 | 1.51 | **LOSS** |
| 923 | CAT | 01-02 15:00 | 01-02 16:45 | 586.71 | 591.9 | 23 | 13494.33 | +119.37 | +0.88% | 1.21R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.71 | ↑579.33 | 2.0866 | 1.19 | **WIN** |
| 924 | SMCI | 01-02 15:05 | 01-02 15:20 | 31.37 | 30.69 | 450 | 14116.5 | -306 | -2.17% | 1.09R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 92.54 | ↓30.71 | 0.4815 | 1.2 | **LOSS** |
| 925 | UNH | 01-02 16:15 | 01-02 16:45 | 339.34 | 338.08 | 41 | 13912.94 | -51.66 | -0.37% | 0.52R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.19 | ↑331.39 | 1.8687 | 1.18 | **LOSS** |
| 926 | COIN | 01-02 16:30 | 01-02 16:50 | 236.35 | 234.4 | 59 | 13944.65 | -115.05 | -0.83% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.32 | ↑231.12 | 2.094 | 1.11 | **LOSS** |
| 927 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 30 | 13528.8 | +84.3 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 928 | JPM | 01-05 14:35 | 01-05 16:20 | 331.82 | 335.28 | 42 | 13936.44 | +145.32 | +1.04% | 1.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.18 | ↑329.35 | 1.2403 | 1.29 | **WIN** |
| 929 | BAC | 01-05 14:35 | 01-05 16:20 | 57.15 | 57.22 | 244 | 13944.6 | +17.08 | +0.12% | 0.17R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.62 | ↑56.69 | 0.2108 | 1.5 | **WIN** |
| 930 | GS | 01-05 14:35 | 01-05 16:20 | 939.12 | 951.91 | 13 | 12208.56 | +166.27 | +1.36% | 1.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.15 | ↑931.29 | 5.883 | 1.95 | **WIN** |
| 931 | BA | 01-05 14:35 | 01-05 15:20 | 229.92 | 228.42 | 61 | 14025.12 | -91.5 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 93.04 | ↓229.18 | 1.0395 | 2.27 | **LOSS** |
| 932 | LMT | 01-05 14:35 | 01-05 14:55 | 514.83 | 507.96 | 24 | 12355.92 | -164.88 | -1.33% | 1.53R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 97.02 | ↓512.65 | 3.5445 | 5.81 | **LOSS** |
| 933 | PANW | 01-05 14:40 | 01-05 16:25 | 184.07 | 184.32 | 75 | 13805.25 | +18.75 | +0.14% | 0.16R | 105m | market | timeout | breakout | breakout | extendedBreakout | 89.02 | ↓182.42 | 1.0403 | 1.62 | **WIN** |
| 934 | PYPL | 01-05 14:45 | 01-05 16:30 | 59.01 | 59.23 | 237 | 13985.37 | +52.14 | +0.37% | 0.53R | 105m | market | timeout | trend | breakout | extendedBreakout | 66.14 | ↑58.69 | 0.0982 | 3.03 | **WIN** |
| 935 | IBM | 01-05 14:45 | 01-05 15:10 | 298.95 | 297.12 | 46 | 13751.7 | -84.18 | -0.61% | 0.62R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.93 | ↓297.8 | 1.8341 | 1.62 | **LOSS** |
| 936 | NKE | 01-05 14:45 | 01-05 16:30 | 64.57 | 65.16 | 216 | 13947.12 | +127.44 | +0.91% | 1.3R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.98 | ↑64 | 0.2406 | 1.5 | **WIN** |
| 937 | ABNB | 01-05 15:00 | 01-05 16:45 | 136.19 | 137.17 | 102 | 13891.38 | +99.96 | +0.72% | 0.9R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.41 | ↑134.37 | 0.4917 | 1.69 | **WIN** |
| 938 | QCOM | 01-06 14:35 | 01-06 15:20 | 179.8 | 180.97 | 78 | 14024.4 | +91.26 | +0.65% | 0.92R | 45m | market | trailing-stop | breakout | breakout | extendedBreakout | 85.07 | ↓178.57 | 0.383 | 2.12 | **WIN** |
| 939 | NVO | 01-06 14:40 | 01-06 15:30 | 58.03 | 57.57 | 222 | 12882.66 | -102.12 | -0.79% | 0.53R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 85.19 | ↓57.56 | 0.6032 | 1.88 | **LOSS** |
| 940 | MU | 01-06 14:50 | 01-06 15:40 | 331.95 | 331.54 | 42 | 13941.9 | -17.22 | -0.12% | 0.06R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.87 | ↑324.7 | 4.3284 | 1.31 | **LOSS** |
| 941 | LRCX | 01-06 14:50 | 01-06 15:40 | 204.07 | 203.44 | 68 | 13876.76 | -42.84 | -0.31% | 0.22R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 91.54 | ↑200.55 | 1.6581 | 1.97 | **LOSS** |
| 942 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 314 | 13087.52 | +700.22 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 943 | NET | 01-07 14:40 | 01-07 15:00 | 200.74 | 198.84 | 69 | 13851.06 | -131.1 | -0.95% | 1.07R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.26 | ↓200.35 | 1.0626 | 1.33 | **LOSS** |
| 944 | LLY | 01-07 14:40 | 01-07 15:15 | 1113.13 | 1105.02 | 11 | 12244.43 | -89.21 | -0.73% | 0.66R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 92.63 | ↑1093.85 | 8.6799 | 3.07 | **LOSS** |
| 945 | NVO | 01-07 15:05 | 01-07 15:25 | 57.66 | 57.21 | 243 | 14011.38 | -109.35 | -0.78% | 0.8R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.34 | ↓57.24 | 0.3419 | 1.59 | **LOSS** |
| 946 | CELH | 01-07 15:55 | 01-07 17:40 | 50.93 | 51.25 | 271 | 13802.03 | +86.72 | +0.63% | 0.43R | 105m | market | timeout | breakout | breakout | extendedBreakout | 74.73 | ↑49.76 | 0.4696 | 1.22 | **WIN** |
| 947 | COST | 01-08 14:40 | 01-08 16:25 | 908.7 | 926.98 | 15 | 13630.5 | +274.2 | +2.01% | 2.42R | 105m | market | timeout | breakout | breakout | extendedBreakout | 93.35 | ↑901.02 | 3.373 | 2.06 | **WIN** |
| 948 | ELF | 01-08 16:45 | 01-08 17:05 | 86.78 | 86.29 | 160 | 13884.8 | -78.4 | -0.56% | 0.5R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 86.66 | ↑83.81 | 1.0835 | 1.48 | **LOSS** |
| 949 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 334 | 14305.22 | +554.44 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 950 | ASML | 01-09 14:35 | 01-09 16:20 | 1235.31 | 1261.07 | 10 | 12353.1 | +257.6 | +2.09% | 2.2R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.71 | ↑1228.73 | 6.2457 | 1.64 | **WIN** |
| 951 | AMAT | 01-09 14:35 | 01-09 15:05 | 293.01 | 291.09 | 44 | 12892.44 | -84.48 | -0.66% | 0.59R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.84 | ↓290.54 | 1.2357 | 2.2 | **LOSS** |
| 952 | LOW | 01-09 14:35 | 01-09 15:00 | 261.94 | 259.76 | 53 | 13882.82 | -115.54 | -0.83% | 1.02R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 79.56 | ↓261.57 | 0.5699 | 2.76 | **LOSS** |
| 953 | KLAC | 01-09 15:25 | 01-09 15:45 | 1393.35 | 1385.39 | 10 | 13933.5 | -79.6 | -0.57% | 0.34R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 78.04 | ↑1370.02 | 15.9027 | 1.6 | **LOSS** |
| 954 | PLTR | 01-12 14:35 | 01-12 15:05 | 180.68 | 179.35 | 77 | 13912.36 | -102.41 | -0.74% | 1.01R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 86.77 | ↓179.26 | 0.4601 | 2.1 | **LOSS** |
| 955 | CAT | 01-12 14:40 | 01-12 16:25 | 625.49 | 625.36 | 22 | 13760.78 | -2.86 | -0.02% | 0.03R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.8 | ↑620.2 | 0.8592 | 2.65 | **LOSS** |
| 956 | GOOGL | 01-13 14:30 | 01-13 15:25 | 336.38 | 335.56 | 41 | 13791.58 | -33.62 | -0.24% | 0.34R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 89.34 | ↓336.02 | 1.0741 | 6.16 | **LOSS** |
| 957 | NFLX | 01-13 14:35 | 01-13 14:40 | 91.01 | 90.19 | 153 | 13924.53 | -125.46 | -0.9% | 1.29R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 76.63 | ↓90.38 | 0.1609 | 2.33 | **LOSS** |
| 958 | SHOP | 01-13 14:35 | 01-13 14:45 | 169.92 | 168.45 | 82 | 13933.44 | -120.54 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 73.49 | ↓169.75 | 0.8873 | 4.45 | **LOSS** |
| 959 | AMD | 01-13 14:40 | 01-13 15:05 | 221.45 | 219.66 | 62 | 13729.9 | -110.98 | -0.81% | 0.46R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 85.14 | ↓219.48 | 2.7931 | 4.03 | **LOSS** |
| 960 | CRWD | 01-13 14:40 | 01-13 15:05 | 474.06 | 469.82 | 29 | 13747.74 | -122.96 | -0.89% | 1.27R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 83.31 | ↓470.18 | 1.339 | 1.29 | **LOSS** |
| 961 | BA | 01-13 14:40 | 01-13 15:00 | 244.23 | 242.95 | 57 | 13921.11 | -72.96 | -0.52% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.25 | ↓243.3 | 1.0654 | 1.14 | **LOSS** |
| 962 | XOM | 01-13 14:45 | 01-13 15:05 | 126.43 | 125.76 | 110 | 13907.3 | -73.7 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.68 | ↑125.59 | 0.6062 | 1.21 | **LOSS** |
| 963 | INTC | 01-13 15:00 | 01-13 15:45 | 46.93 | 46.56 | 307 | 14407.51 | -113.59 | -0.79% | 0.42R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 77.99 | ↓46.22 | 0.5915 | 2.43 | **LOSS** |
| 964 | COIN | 01-14 14:50 | 01-14 15:10 | 261.96 | 260.01 | 53 | 13883.88 | -103.35 | -0.74% | 0.46R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.58 | ↑257.75 | 1.7207 | 1.4 | **LOSS** |
| 965 | INTC | 01-14 15:30 | 01-14 15:50 | 48.6 | 47.95 | 296 | 14385.6 | -192.4 | -1.34% | 0.67R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 53.07 | ↓48.14 | 0.1544 | 1.55 | **LOSS** |
| 966 | SMCI | 01-15 14:35 | 01-15 15:25 | 29.16 | 29.05 | 445 | 12976.2 | -48.95 | -0.38% | 0.3R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 83.62 | ↑28.97 | 0.1461 | 2.19 | **LOSS** |
| 967 | NVDA | 01-15 14:40 | 01-15 15:15 | 188.84 | 187.89 | 73 | 13785.32 | -69.35 | -0.5% | 0.53R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 968 | ARM | 01-15 14:40 | 01-15 15:25 | 108.45 | 107.18 | 117 | 12688.65 | -148.59 | -1.17% | 0.89R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 83.35 | ↓108.18 | 0.866 | 1.83 | **LOSS** |
| 969 | TSM | 01-15 14:55 | 01-15 16:40 | 347.41 | 349.77 | 40 | 13896.4 | +94.4 | +0.68% | 0.34R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.1 | ↑342.99 | 5.45 | 1.52 | **WIN** |
| 970 | MU | 01-20 14:50 | 01-20 15:10 | 379.16 | 370.79 | 36 | 13649.76 | -301.32 | -2.21% | 1.11R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 83.2 | ↓375.17 | 5.1165 | 2.28 | **LOSS** |
| 971 | CELH | 01-20 15:25 | 01-20 15:45 | 57.26 | 56.7 | 241 | 13799.66 | -134.96 | -0.98% | 0.51R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.75 | ↑56.11 | 0.6654 | 1.15 | **LOSS** |
| 972 | INTC | 01-20 15:30 | 01-20 15:50 | 49.87 | 49.24 | 288 | 14362.56 | -181.44 | -1.26% | 0.63R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 89.3 | ↑48.78 | 0.6488 | 1.25 | **LOSS** |
| 973 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 255 | 13206.45 | +400.35 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 974 | LLY | 01-21 14:35 | 01-21 16:20 | 1058.24 | 1066.62 | 13 | 13757.12 | +108.94 | +0.79% | 1.04R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.7 | ↑1051.19 | 2.4185 | 2.97 | **WIN** |
| 975 | TXN | 01-21 14:35 | 01-21 16:20 | 193.31 | 194.84 | 72 | 13918.32 | +110.16 | +0.79% | 1.05R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.54 | ↑192.87 | 0.6553 | 3.06 | **WIN** |
| 976 | ELF | 01-21 14:35 | 01-21 14:55 | 91.55 | 90.81 | 141 | 12908.55 | -104.34 | -0.81% | 0.72R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.51 | ↓91.45 | 0.4477 | 1.48 | **LOSS** |
| 977 | UNH | 01-21 14:45 | 01-21 16:30 | 344.67 | 346.61 | 40 | 13786.8 | +77.6 | +0.56% | 0.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 84.43 | ↑342.66 | 1.3477 | 1.37 | **WIN** |
| 978 | ABNB | 01-21 16:00 | 01-21 16:20 | 134.86 | 133.99 | 103 | 13890.58 | -89.61 | -0.65% | 0.93R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 99.7 | ↑132.57 | 1.0082 | 1.15 | **LOSS** |
| 979 | META | 01-22 14:30 | 01-22 14:55 | 634.16 | 629.99 | 20 | 12683.2 | -83.4 | -0.66% | 0.63R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 980 | PYPL | 01-22 14:35 | 01-22 16:20 | 57.03 | 57.36 | 245 | 13972.35 | +80.85 | +0.58% | 0.71R | 105m | market | timeout | breakout | breakout | extendedBreakout | 72.38 | ↑56.87 | 0.2635 | 2.58 | **WIN** |
| 981 | BA | 01-22 14:35 | 01-22 14:55 | 253.88 | 251.71 | 55 | 13963.4 | -119.35 | -0.85% | 1.21R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 68.99 | ↓253.18 | 0.8981 | 3.53 | **LOSS** |
| 982 | UNH | 01-22 14:45 | 01-22 15:35 | 353.63 | 352.77 | 39 | 13791.57 | -33.54 | -0.24% | 0.29R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 82.53 | ↓352.21 | 1.7469 | 1.4 | **LOSS** |
| 983 | NVO | 01-22 14:50 | 01-22 16:30 | 62.08 | 62.06 | 225 | 13968 | -4.5 | -0.03% | 0.02R | 100m | market | stagnation | breakout | breakout | extendedBreakout | 85.88 | ↑61.45 | 0.7953 | 1.63 | **LOSS** |
| 984 | DDOG | 01-22 15:00 | 01-22 16:15 | 131.13 | 131.06 | 98 | 12850.74 | -6.86 | -0.05% | 0.03R | 75m | market | stagnation | breakout | breakout | extendedBreakout | 85.91 | ↑129.66 | 2.0323 | 1.22 | **LOSS** |
| 985 | TSLA | 01-22 17:55 | 01-22 19:40 | 445.63 | 448.04 | 31 | 13814.53 | +74.71 | +0.54% | 0.77R | 105m | market | timeout | breakout | breakout | extendedBreakout | 79.71 | ↑437.04 | 1.567 | 3.76 | **WIN** |
| 986 | NOW | 01-23 14:30 | 01-23 16:10 | 129.97 | 133.14 | 106 | 13776.82 | +336.02 | +2.44% | 3.34R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 82.71 | ↑129.39 | 0.3215 | 1.82 | **WIN** |
| 987 | MSFT | 01-23 15:05 | 01-23 16:50 | 461.89 | 468.6 | 30 | 13856.7 | +201.3 | +1.45% | 1.73R | 105m | market | timeout | breakout | breakout | extendedBreakout | 86.51 | ↑454.89 | 2.1043 | 1.11 | **WIN** |
| 988 | ORCL | 01-26 14:30 | 01-26 15:00 | 180.57 | 181 | 77 | 13903.89 | +33.11 | +0.24% | 0.33R | 30m | market | trailing-stop | breakout | breakout | extendedBreakout | 88.75 | ↓179.85 | 0.4731 | 3.86 | **WIN** |
| 989 | CELH | 01-26 14:35 | 01-26 14:50 | 57.28 | 56.41 | 224 | 12830.72 | -194.88 | -1.52% | 1.52R | 15m | market | stop-loss | breakout | breakout | extendedBreakout | 85.71 | ↓56.83 | 0.2776 | 1.86 | **LOSS** |
| 990 | ASML | 01-27 14:35 | 01-27 16:20 | 1433.95 | 1460.56 | 9 | 12905.55 | +239.49 | +1.86% | 2.66R | 105m | market | timeout | breakout | breakout | extendedBreakout | 90.67 | ↑1429.34 | 1.8778 | 3.59 | **WIN** |
| 991 | CRWD | 01-27 14:35 | 01-27 15:45 | 479.09 | 479.13 | 28 | 13414.52 | +1.12 | +0.01% | 0.01R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 85.96 | ↓478.44 | 1.2338 | 2.94 | **WIN** |
| 992 | AMAT | 01-27 14:45 | 01-27 16:30 | 330.16 | 335.4 | 42 | 13866.72 | +220.08 | +1.59% | 1.62R | 105m | market | timeout | breakout | breakout | extendedBreakout | 93.51 | ↑327.08 | 1.6886 | 1.42 | **WIN** |
| 993 | LRCX | 01-27 14:50 | 01-27 16:35 | 234.75 | 239.02 | 59 | 13850.25 | +251.93 | +1.82% | 1.29R | 105m | market | timeout | breakout | breakout | extendedBreakout | 89.92 | ↑232.26 | 2.1784 | 1.68 | **WIN** |
| 994 | ADBE | 01-28 14:30 | 01-28 15:50 | 300.83 | 300.63 | 46 | 13838.18 | -9.2 | -0.07% | 0.1R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 85.42 | ↓300.3 | 0.5379 | 2.62 | **LOSS** |
| 995 | COIN | 01-28 14:30 | 01-28 14:35 | 214.13 | 210.55 | 65 | 13918.45 | -232.7 | -1.67% | 2.06R | 5m | market | stop-loss | breakout | breakout | extendedBreakout | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 996 | TXN | 01-28 14:40 | 01-28 15:05 | 212.05 | 209.94 | 66 | 13995.3 | -139.26 | -1% | 0.5R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 87.18 | ↓209.06 | 3.1246 | 2.94 | **LOSS** |
| 997 | MDB | 01-28 14:50 | 01-28 15:10 | 426.07 | 423.06 | 32 | 13634.24 | -96.32 | -0.71% | 0.73R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.67 | ↑421.4 | 2.3287 | 1.54 | **LOSS** |
| 998 | INTC | 01-28 17:00 | 01-28 17:20 | 49.2 | 48.79 | 292 | 14366.4 | -119.72 | -0.83% | 0.65R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 81.92 | ↑48.14 | 0.4328 | 1.32 | **LOSS** |
| 999 | XOM | 01-29 14:35 | 01-29 14:55 | 141.93 | 140.54 | 90 | 12773.7 | -125.1 | -0.98% | 1.04R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.77 | ↓141.71 | 0.6423 | 6.2 | **LOSS** |
| 1000 | CVX | 01-29 14:35 | 01-29 14:55 | 174.53 | 173.37 | 74 | 12915.22 | -85.84 | -0.66% | 0.85R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 89.94 | ↓174.06 | 0.7794 | 3.32 | **LOSS** |

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

- ⚠️ **Profit factor 0.86 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.85R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T03:26:03.293Z*
