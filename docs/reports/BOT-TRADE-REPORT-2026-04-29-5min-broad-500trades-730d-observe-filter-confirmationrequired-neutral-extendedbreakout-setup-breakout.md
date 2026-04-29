# Bot Trade Report — 82 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-29T03:02:35.909Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 500 | **Lookback:** 730 days | **Universe:** broad | **Symbols scanned:** 40 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"behaviorClassifierMode":"observe","observeBreakoutClassifierBlocks":true}`

## Verdict

✅ **PROFITABLE** — net gain of $15.83 (+0.02%) over 82 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 82 |
| Win rate | 31.71% (26W / 56L) |
| Net P&L | $+15.83 (+0.02%) |
| Gross profit | $2891.08 |
| Gross loss | $2875.25 |
| Profit factor | 1.01 |
| Avg win | $111.2 |
| Avg loss | $51.34 |
| Payoff ratio | 2.17:1 |
| Expectancy | $+0.19 / trade |
| Max drawdown | 1.29% |
| Sharpe ratio (ann.) | 0.03 |
| Trades / active day | 1.19 |
| Avg confidence | 95.54% |
| Avg trade duration | 141 min |
| Avg planned R:R | 2.68:1 |
| Avg risk ratio | 0.97R |
| Starting equity | $100,000 |
| Ending equity | $100,015.83 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+15.83 | PASS |
| Win rate | 45-60% | 31.71% | MISS |
| Profit factor | >= 1.3 | 1.01 | MISS |
| Sharpe (ann.) | > 1.5 | 0.03 | MISS |
| R:R | 2:1 - 3:1 | 2.68:1 planned | PASS |
| Max drawdown | < 10% | 1.29% | PASS |
| Expectancy | positive | $+0.19 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 26 | 26.92% | $-493.52 | $-18.98 |
| Mid  10:30–11:30 | 49 | 34.69% | $+274.23 | $5.6 |
| Noon 11:30–13:00 | 2 | 0% | $-19.78 | $-9.89 |
| PM   13:00–14:00 | 5 | 40% | $+254.9 | $50.98 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 7 | 4 | 57.14% | $+511.91 | $+73.13 | 3.67 | eligible |
| NOW | 1 | 1 | 100% | $+284.54 | $+284.54 | ∞ | watch |
| GOOGL | 5 | 3 | 60% | $+214.7 | $+42.94 | 6.39 | eligible |
| AMZN | 4 | 3 | 75% | $+194.5 | $+48.63 | 3.78 | eligible |
| META | 6 | 2 | 33.33% | $+174.09 | $+29.02 | 4.19 | throttle |
| AMD | 5 | 1 | 20% | $+150.42 | $+30.08 | 2.74 | throttle |
| NVDA | 5 | 2 | 40% | $+49.94 | $+9.99 | 1.29 | eligible |
| PYPL | 1 | 1 | 100% | $+28.83 | $+28.83 | ∞ | watch |
| ARM | 2 | 1 | 50% | $+8.26 | $+4.13 | 1.16 | watch |
| SHOP | 1 | 0 | 0% | $-5.76 | $-5.76 | 0 | watch |
| MSFT | 1 | 0 | 0% | $-10.08 | $-10.08 | 0 | watch |
| ADBE | 1 | 0 | 0% | $-16.4 | $-16.4 | 0 | watch |
| AVGO | 2 | 0 | 0% | $-25.12 | $-12.56 | 0 | watch |
| ORCL | 2 | 1 | 50% | $-34.2 | $-17.1 | 0.61 | watch |
| MDB | 4 | 2 | 50% | $-37.88 | $-9.47 | 0.68 | throttle |
| NET | 1 | 0 | 0% | $-49.5 | $-49.5 | 0 | watch |
| SNOW | 2 | 0 | 0% | $-54.36 | $-27.18 | 0 | watch |
| INTC | 1 | 0 | 0% | $-57.33 | $-57.33 | 0 | watch |
| XOM | 1 | 0 | 0% | $-64.26 | $-64.26 | 0 | watch |
| PANW | 1 | 0 | 0% | $-74.1 | $-74.1 | 0 | watch |
| CRWD | 1 | 0 | 0% | $-74.1 | $-74.1 | 0 | watch |
| DDOG | 3 | 2 | 66.67% | $-80.13 | $-26.71 | 0.38 | watch |
| PLTR | 5 | 1 | 20% | $-80.81 | $-16.16 | 0.61 | throttle |
| JPM | 3 | 0 | 0% | $-82.41 | $-27.47 | 0 | watch |
| MU | 4 | 1 | 25% | $-96.59 | $-24.15 | 0.73 | throttle |
| SMCI | 1 | 0 | 0% | $-99.84 | $-99.84 | 0 | watch |
| NFLX | 3 | 0 | 0% | $-99.88 | $-33.29 | 0 | watch |
| CVX | 1 | 0 | 0% | $-113.4 | $-113.4 | 0 | watch |
| TSM | 4 | 1 | 25% | $-142.54 | $-35.64 | 0.22 | throttle |
| CAT | 2 | 0 | 0% | $-148.05 | $-74.03 | 0 | watch |
| COIN | 2 | 0 | 0% | $-154.62 | $-77.31 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 82 | 26 | 31.71% | $+15.83 | $+0.19 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 82 | 26 | 31.71% | $+15.83 | $+0.19 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 53 | 17 | 32.08% | $+16.95 | $+0.32 |
| extendedBreakout | 29 | 9 | 31.03% | $-1.12 | $-0.04 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 53 | 17 | 32.08% | $+16.95 | $+0.32 |
| extended-chase | 29 | 9 | 31.03% | $-1.12 | $-0.04 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 31 | 0.46 | $-27.02 | 22 | 2.19 | $+38.84 | 0.25% | 1.76 | reject |
| Trade state | neutral | 31 | 0.46 | $-27.02 | 22 | 2.19 | $+38.84 | 0.25% | 1.76 | reject |
| Time slot | Mid 10:30-11:30 | 24 | 0.26 | $-27.26 | 25 | 2.28 | $+37.14 | 0.2% | 1.86 | reject |
| Regime | trend | 49 | 0.51 | $-19.19 | 33 | 2 | $+28.97 | 0.35% | 1.62 | reject |
| Setup | breakout | 49 | 0.51 | $-19.19 | 33 | 2 | $+28.97 | 0.35% | 1.62 | reject |
| Time slot | Open 9:30-10:30 | 20 | 0.42 | $-29.23 | 6 | 1.55 | $+15.2 | 0.14% | 1.18 | reject |
| Behavior | extendedBreakout | 18 | 0.73 | $-5.7 | 11 | 1.43 | $+9.23 | 0.17% | 1.18 | reject |
| Trade state | extended-chase | 18 | 0.73 | $-5.7 | 11 | 1.43 | $+9.23 | 0.17% | 1.18 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-116.47 | 0.96 |
| +3 bps/side | $-381.08 | 0.88 |
| +5 bps/side | $-645.71 | 0.81 |
| +10 bps/side | $-1307.27 | 0.65 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 31 |
| timeout | 15 |
| stop-loss | 11 |
| stagnation | 10 |
| trailing-stop | 6 |
| profit-target | 6 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-07 13:40 | 05-07 14:05 | 170.34 | 169.88 | 33 | 5621.22 | -15.18 | -0.27% | 0.33R | 25m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 73.1 | ↓170.01 | 0.6105 | 2.63 | **LOSS** |
| 2 | DDOG | 06-11 13:30 | 06-11 13:35 | 114.88 | 113.34 | 84 | 9649.92 | -129.36 | -1.34% | 1.91R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 68.22 | ↓114.41 | 0.1532 | 3.06 | **LOSS** |
| 3 | MU | 06-24 13:30 | 06-24 13:45 | 142.8 | 139.87 | 54 | 7711.2 | -158.22 | -2.05% | 1.72R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 79.22 | ↓142.2 | 0.309 | 2.65 | **LOSS** |
| 4 | TSLA | 06-25 14:10 | 06-25 14:25 | 187.08 | 185.82 | 47 | 8792.76 | -59.22 | -0.67% | 0.52R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 63.91 | ↑185.01 | 0.4926 | 2.95 | **LOSS** |
| 5 | MU | 07-03 13:30 | 07-03 13:35 | 134.02 | 132.78 | 62 | 8309.24 | -76.88 | -0.93% | 1.33R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.47 | ↓133.5 | 0.2242 | 2.54 | **LOSS** |
| 6 | MDB | 07-05 14:20 | 07-05 14:35 | 270.1 | 268.51 | 38 | 10263.8 | -60.42 | -0.59% | 0.5R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 72.65 | ↑266.74 | 0.852 | 2.99 | **LOSS** |
| 7 | PANW | 07-23 15:15 | 07-23 15:30 | 340.14 | 337.67 | 30 | 10204.2 | -74.1 | -0.73% | 1.04R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 79.87 | ↑336.69 | 1.3323 | 2.97 | **LOSS** |
| 8 | MSFT | 08-01 13:40 | 08-01 14:25 | 424.53 | 424.11 | 24 | 10188.72 | -10.08 | -0.1% | 0.09R | 45m | market | stagnation | trend | breakout | neutral | neutral | 64.25 | ↓421.07 | 0.6287 | 1.75 | **LOSS** |
| 9 | SMCI | 08-23 14:10 | 08-23 14:35 | 623.72 | 617.48 | 16 | 9979.52 | -99.84 | -1% | 0.68R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 70.95 | ↓617.21 | 3.4917 | 1.62 | **LOSS** |
| 10 | SNOW | 10-09 13:45 | 10-09 14:00 | 116.47 | 116.04 | 46 | 5357.62 | -19.78 | -0.37% | 0.41R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 78.58 | ↓116.03 | 0.5317 | 3.83 | **LOSS** |
| 11 | MDB | 10-25 13:45 | 10-25 14:05 | 270.61 | 269.1 | 38 | 10283.18 | -57.38 | -0.56% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 76.31 | ↓269.62 | 1.0273 | 3.22 | **LOSS** |
| 12 | AVGO | 10-29 16:40 | 10-29 18:10 | 177.57 | 177.47 | 20 | 3551.4 | -2 | -0.06% | 0.07R | 90m | market | breakeven-stop | trend | breakout | extendedBreakout | extended-chase | 79.81 | ↑173.99 | 0.6689 | 4.94 | **LOSS** |
| 13 | MDB | 10-30 14:10 | 10-30 15:30 | 284.06 | 284.38 | 36 | 10226.16 | +11.52 | +0.11% | 0.09R | 80m | market | trailing-stop | trend | breakout | neutral | neutral | 79.15 | ↑281.21 | 1.8626 | 4.18 | **WIN** |
| 14 | TSLA | 11-01 13:35 | 11-01 13:50 | 253.54 | 249.93 | 35 | 8873.9 | -126.35 | -1.42% | 1.43R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 66.41 | ↓252.66 | 0.1524 | 1.76 | **LOSS** |
| 15 | DDOG | 11-07 14:30 | 11-07 14:40 | 130.31 | 130.63 | 74 | 9642.94 | +23.68 | +0.25% | 0.18R | 10m | market | trailing-stop | trend | breakout | neutral | neutral | 73.49 | ↑129.32 | 0.2437 | 2.71 | **WIN** |
| 16 | ARM | 11-19 14:40 | 11-19 14:55 | 130.11 | 129.13 | 52 | 6765.72 | -50.96 | -0.75% | 0.94R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 76.31 | ↓129.43 | 0.3519 | 2.87 | **LOSS** |
| 17 | TSM | 11-21 14:45 | 11-21 15:00 | 191.14 | 188.41 | 54 | 10321.56 | -147.42 | -1.43% | 1.27R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 76.75 | ↓190.14 | 0.951 | 4.18 | **LOSS** |
| 18 | AMZN | 11-25 14:30 | 11-25 14:50 | 201.15 | 199.69 | 48 | 9655.2 | -70.08 | -0.73% | 1.04R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.1 | ↓200.49 | 0.2072 | 4.06 | **LOSS** |
| 19 | CRWD | 11-25 14:30 | 11-25 14:45 | 375.5 | 370.56 | 15 | 5632.5 | -74.1 | -1.32% | 1.89R | 15m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 80.03 | ↓373.62 | 0.6407 | 3.03 | **LOSS** |
| 20 | AMZN | 11-26 14:30 | 11-26 16:15 | 203.95 | 206.12 | 51 | 10401.45 | +110.67 | +1.06% | 1.51R | 105m | market | timeout | trend | breakout | neutral | neutral | 78.41 | ↑203.19 | 0.2945 | 4.11 | **WIN** |
| 21 | TSLA | 11-29 17:55 | 12-02 14:30 | 345.3 | 357.72 | 25 | 8632.5 | +310.5 | +3.6% | 5.14R | 4115m | market | timeout | trend | breakout | neutral | neutral | 72 | ↑340.45 | 0.793 | 4.87 | **WIN** |
| 22 | AMD | 12-02 14:45 | 12-02 15:15 | 140.35 | 140.26 | 74 | 10385.9 | -6.66 | -0.06% | 0.06R | 30m | market | stagnation | trend | breakout | neutral | neutral | 77.26 | ↓139.8 | 0.4649 | 2.89 | **LOSS** |
| 23 | TSM | 01-02 14:50 | 01-02 15:15 | 202.82 | 201.99 | 28 | 5678.96 | -23.24 | -0.41% | 0.39R | 25m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 79.77 | ↑200.24 | 0.8284 | 3.28 | **LOSS** |
| 24 | COIN | 01-03 14:30 | 01-03 14:45 | 261.49 | 260.01 | 40 | 10459.6 | -59.2 | -0.57% | 0.47R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 64.7 | ↓260.99 | 1.1766 | 4.82 | **LOSS** |
| 25 | JPM | 01-13 14:40 | 01-13 15:05 | 243.13 | 242.52 | 43 | 10454.59 | -26.23 | -0.25% | 0.36R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 77.49 | ↓242.25 | 0.2844 | 2.91 | **LOSS** |
| 26 | AMD | 01-17 14:35 | 01-17 14:50 | 122 | 121.13 | 43 | 5246 | -37.41 | -0.71% | 0.7R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 78.98 | ↓121.49 | 0.3222 | 3.56 | **LOSS** |
| 27 | NVDA | 01-22 14:45 | 01-22 15:00 | 147.32 | 146.24 | 39 | 5745.48 | -42.12 | -0.73% | 0.69R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 75.73 | ↑145.83 | 1.4564 | 3.28 | **LOSS** |
| 28 | JPM | 01-23 14:35 | 01-23 15:00 | 266.33 | 266.11 | 39 | 10386.87 | -8.58 | -0.08% | 0.11R | 25m | market | stagnation | trend | breakout | neutral | neutral | 79.25 | ↑265.3 | 0.4005 | 2.72 | **LOSS** |
| 29 | META | 01-24 14:30 | 01-24 15:00 | 642.12 | 641.62 | 15 | 9631.8 | -7.5 | -0.08% | 0.11R | 30m | market | stagnation | trend | breakout | neutral | neutral | 74 | ↓639.41 | 1.4315 | 9.6 | **LOSS** |
| 30 | TSM | 01-30 14:30 | 01-30 15:00 | 207.6 | 207.34 | 46 | 9549.6 | -11.96 | -0.13% | 0.11R | 30m | market | stagnation | trend | breakout | neutral | neutral | 74.27 | ↓206.97 | 0.7769 | 5.98 | **LOSS** |
| 31 | GOOGL | 01-30 14:35 | 01-30 15:40 | 199.69 | 198.81 | 28 | 5591.32 | -24.64 | -0.44% | 0.42R | 65m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 68.64 | ↓198.9 | 0.6771 | 4.45 | **LOSS** |
| 32 | NFLX | 01-30 14:35 | 01-30 14:55 | 993.42 | 989.49 | 10 | 9934.2 | -39.3 | -0.4% | 0.53R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 75.47 | ↓986.88 | 2.3404 | 2.94 | **LOSS** |
| 33 | GOOGL | 01-31 14:30 | 01-31 16:15 | 203.46 | 204.45 | 28 | 5696.88 | +27.72 | +0.49% | 0.7R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.52 | ↑202.93 | 0.4347 | 2.54 | **WIN** |
| 34 | AMD | 02-04 14:35 | 02-04 14:50 | 116.03 | 115.56 | 49 | 5685.47 | -23.03 | -0.41% | 0.53R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 75.79 | ↑115.83 | 0.3313 | 2.9 | **LOSS** |
| 35 | NFLX | 02-04 14:35 | 02-04 15:00 | 1000.01 | 996.43 | 5 | 5000.05 | -17.9 | -0.36% | 0.47R | 25m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 73.45 | ↓995.5 | 1.8048 | 3.54 | **LOSS** |
| 36 | AMD | 02-13 14:30 | 02-13 14:45 | 112.97 | 112.59 | 51 | 5761.47 | -19.38 | -0.34% | 0.49R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 79.62 | ↑112.36 | 0.4267 | 5.23 | **LOSS** |
| 37 | MDB | 02-26 14:30 | 02-26 16:15 | 265.31 | 268.73 | 20 | 5306.2 | +68.4 | +1.29% | 1.18R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 69.16 | ↑264.64 | 0.7949 | 3.82 | **WIN** |
| 38 | MU | 02-27 14:30 | 02-27 14:35 | 99.29 | 97.72 | 77 | 7645.33 | -120.89 | -1.58% | 1.25R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 74.29 | ↓98.93 | 0.2226 | 3.35 | **LOSS** |
| 39 | META | 03-20 14:00 | 03-20 15:45 | 600 | 608.11 | 17 | 10200 | +137.87 | +1.35% | 0.94R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.67 | ↑592.95 | 3.8948 | 1.61 | **WIN** |
| 40 | META | 04-22 16:15 | 04-22 16:35 | 505.19 | 502.65 | 7 | 3536.33 | -17.78 | -0.5% | 0.61R | 20m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.41 | ↑493.37 | 3.1744 | 2.99 | **LOSS** |
| 41 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 42 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 43 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 44 | AVGO | 08-07 13:45 | 08-07 14:10 | 308.66 | 307.3 | 17 | 5247.22 | -23.12 | -0.44% | 0.48R | 25m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 78.63 | ↓307.04 | 1.4997 | 2.75 | **LOSS** |
| 45 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 46 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 47 | SNOW | 08-22 14:05 | 08-22 14:20 | 199.29 | 197.96 | 26 | 5181.54 | -34.58 | -0.67% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 48 | GOOGL | 08-22 17:15 | 08-22 19:00 | 206.5 | 206.99 | 50 | 10325 | +24.5 | +0.24% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 76.9 | ↑203.92 | 0.2482 | 3.69 | **WIN** |
| 49 | ADBE | 10-06 17:30 | 10-06 18:05 | 353.58 | 352.76 | 20 | 7071.6 | -16.4 | -0.23% | 0.33R | 35m | market | breakeven-stop | trend | breakout | neutral | neutral | 74.46 | ↑346.99 | 1.1142 | 3 | **LOSS** |
| 50 | ORCL | 10-08 14:00 | 10-08 14:15 | 289.59 | 287.17 | 36 | 10425.24 | -87.12 | -0.84% | 0.75R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 51 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 14 | 10065.58 | -5.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 52 | CAT | 11-06 14:30 | 11-06 14:45 | 580.25 | 573.77 | 16 | 9284 | -103.68 | -1.12% | 1.35R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 53 | CAT | 11-12 14:35 | 11-12 14:45 | 578.52 | 573.59 | 9 | 5206.68 | -44.37 | -0.85% | 1.21R | 10m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 54 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 55 | INTC | 11-28 17:55 | 12-01 14:20 | 40.61 | 39.98 | 91 | 3695.51 | -57.33 | -1.55% | 1.44R | 4105m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 56 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | -47.04 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 57 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 58 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 46 | 9488.88 | +236.9 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 59 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 55 | 10435.7 | -7.15 | -0.07% | 0.06R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 60 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 61 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 62 | PLTR | 01-14 14:30 | 01-14 14:35 | 181.2 | 177.96 | 57 | 10328.4 | -184.68 | -1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 63 | ARM | 01-20 14:40 | 01-20 15:45 | 108.19 | 109.13 | 63 | 6815.97 | +59.22 | +0.87% | 0.8R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↑107.29 | 0.0129 | 5.86 | **WIN** |
| 64 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 65 | META | 01-22 14:30 | 01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | -23.76 | -0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 66 | PYPL | 01-22 14:35 | 01-22 16:20 | 57.04 | 57.35 | 93 | 5304.72 | +28.83 | +0.54% | 0.66R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 72.38 | ↑56.87 | 0.2635 | 2.58 | **WIN** |
| 67 | TSLA | 01-22 17:55 | 01-22 18:25 | 445.72 | 444.81 | 7 | 3120.04 | -6.37 | -0.2% | 0.29R | 30m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 79.71 | ↑437.04 | 1.567 | 3.76 | **LOSS** |
| 68 | PLTR | 01-23 14:40 | 01-23 15:25 | 168.03 | 167.89 | 62 | 10417.86 | -8.68 | -0.08% | 0.09R | 45m | market | stagnation | trend | breakout | neutral | neutral | 79.11 | ↓167.45 | 0.3451 | 2.78 | **LOSS** |
| 69 | COIN | 01-28 14:30 | 01-28 14:35 | 214.17 | 210.5 | 26 | 5568.42 | -95.42 | -1.71% | 2.11R | 5m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 70 | JPM | 02-17 14:45 | 02-17 15:00 | 307.63 | 306.23 | 34 | 10459.42 | -47.6 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 71 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.73 | 206.44 | 28 | 5704.44 | +75.88 | +1.33% | 1.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 72 | PLTR | 02-18 14:35 | 02-18 15:05 | 136.11 | 139.41 | 39 | 5308.29 | +128.7 | +2.42% | 2.12R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 79.77 | ↑135.76 | 0.3061 | 2.56 | **WIN** |
| 73 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 34 | 10485.6 | +202.3 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 74 | NFLX | 03-04 14:30 | 03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | -42.68 | -0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 75 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.78 | 215.67 | 27 | 5745.06 | +78.03 | +1.36% | 1.6R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 76 | NOW | 03-05 14:30 | 03-05 15:00 | 116.86 | 120.33 | 82 | 9582.52 | +284.54 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 77 | CVX | 03-06 14:30 | 03-06 14:35 | 192.01 | 189.91 | 54 | 10368.54 | -113.4 | -1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 78 | DDOG | 03-17 13:30 | 03-17 14:00 | 129.91 | 130.26 | 73 | 9483.43 | +25.55 | +0.27% | 0.26R | 30m | market | trailing-stop | trend | breakout | neutral | neutral | 70.93 | ↓128.94 | 0.3164 | 2.33 | **WIN** |
| 79 | PLTR | 03-25 13:30 | 03-25 13:55 | 158.84 | 158.59 | 36 | 5718.24 | -9 | -0.16% | 0.14R | 25m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 66.83 | ↓158.24 | 0.6127 | 2.86 | **LOSS** |
| 80 | XOM | 04-02 13:30 | 04-02 13:45 | 165.1 | 164.08 | 63 | 10401.3 | -64.26 | -0.62% | 0.53R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 69.84 | ↓164.59 | 0.4226 | 1.6 | **LOSS** |
| 81 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 24 | 8906.88 | +231.6 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 82 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ⚠️ **Profit factor 1.01 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.97R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-29T03:02:35.909Z*
