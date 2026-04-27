# Bot Trade Report — 57 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:33:54.628Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1128.28 (-1.13%) over 57 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 57 |
| Win rate | 24.56% (14W / 43L) |
| Net P&L | $-1128.28 (-1.13%) |
| Gross profit | $2888.47 |
| Gross loss | $4016.75 |
| Profit factor | 0.72 |
| Avg win | $206.32 |
| Avg loss | $93.41 |
| Payoff ratio | 2.21:1 |
| Expectancy | $-19.79 / trade |
| Max drawdown | 2.05% |
| Sharpe ratio (ann.) | -2.23 |
| Trades / active day | 1.04 |
| Avg confidence | 99.47% |
| Avg trade duration | 48 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $98,871.72 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 18 | 22.22% | $-545.88 | $-30.33 |
| Mid  10:30–11:30 | 39 | 25.64% | $-582.4 | $-14.93 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| PLTR | 57 | 14 | 24.56% | $-1128.28 | $-19.79 | 0.72 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 39 | 10 | 25.64% | $-805.99 | $-20.67 |
| breakout | 18 | 4 | 22.22% | $-322.29 | $-17.9 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 18 | 5 | 27.78% | $-341.44 | $-18.97 |
| neutral | 39 | 9 | 23.08% | $-786.84 | $-20.18 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | PLTR | 34 | 1.39 | $+20.6 | 23 | 0.18 | $-79.5 | 1.94% | 0.15 | watch |
| Setup | breakout | 5 | 3.71 | $+160.27 | 13 | 0.14 | $-86.44 | 1.12% | 0.12 | watch |
| Time slot | Mid 10:30-11:30 | 25 | 1.5 | $+25.92 | 14 | 0.14 | $-87.89 | 1.44% | 0.12 | watch |
| Behavior | neutral | 21 | 1.68 | $+41.74 | 18 | 0.1 | $-92.41 | 1.66% | 0.08 | watch |
| Behavior | noisyHighBeta | 13 | 0.65 | $-13.55 | 5 | 0.56 | $-33.05 | 0.28% | 0.5 | reject |
| Time slot | Open 9:30-10:30 | 9 | 1.11 | $+5.8 | 9 | 0.24 | $-66.46 | 0.6% | 0.2 | reject |
| Setup | trend | 29 | 0.93 | $-3.49 | 10 | 0.23 | $-70.49 | 0.81% | 0.2 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1263.04 | 0.69 |
| +3 bps/side | $-1532.66 | 0.65 |
| +5 bps/side | $-1802.26 | 0.6 |
| +10 bps/side | $-2476.19 | 0.51 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 29 |
| timeout | 8 |
| stagnation | 8 |
| profit-target | 5 |
| stop-loss | 4 |
| trim-profit-target | 1 |
| trailing-stop | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PLTR | 05-14 14:05 | 05-14 15:50 | 21.63 | 22.05 | 647 | 13994.61 | +271.74 | +1.94% | 1.36R | 105m | market | timeout | trend | trend | neutral | 79.08 | ↑21.47 | 0.1733 | 3.24 | **WIN** |
| 2 | PLTR | 05-17 14:00 | 05-17 14:15 | 22.11 | 21.82 | 634 | 14017.74 | -183.86 | -1.31% | 1.41R | 15m | market | stop-loss | breakout | breakout | neutral | 68.35 | ↓21.91 | 0.0326 | 2.47 | **LOSS** |
| 3 | PLTR | 05-30 15:25 | 05-30 17:10 | 21.41 | 21.93 | 654 | 14002.14 | +340.08 | +2.43% | 3.33R | 105m | market | timeout | trend | trend | neutral | 69.16 | ↑21.26 | 0.0893 | 3.48 | **WIN** |
| 4 | PLTR | 06-04 15:20 | 06-04 17:05 | 21.64 | 21.87 | 649 | 14044.36 | +149.27 | +1.06% | 1.29R | 105m | market | timeout | trend | trend | neutral | 69.67 | ↑21.46 | 0.092 | 5.3 | **WIN** |
| 5 | PLTR | 06-06 15:15 | 06-06 15:35 | 23.73 | 23.56 | 593 | 14071.89 | -100.81 | -0.72% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 73.78 | ↑23.36 | 0.1711 | 1.1 | **LOSS** |
| 6 | PLTR | 06-25 14:25 | 06-25 14:45 | 24.56 | 24.37 | 315 | 7736.4 | -59.85 | -0.77% | 0.57R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 62.35 | ↑24.26 | 0.0331 | 1.58 | **LOSS** |
| 7 | PLTR | 07-05 14:00 | 07-05 15:45 | 26.74 | 26.89 | 525 | 14038.5 | +78.75 | +0.56% | 0.43R | 105m | market | timeout | trend | trend | neutral | 77.57 | ↓26.55 | 0.1291 | 2.65 | **WIN** |
| 8 | PLTR | 07-10 15:25 | 07-10 16:15 | 27.84 | 27.8 | 505 | 14059.2 | -20.2 | -0.14% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 59.52 | ↑27.62 | 0.0327 | 1.31 | **LOSS** |
| 9 | PLTR | 07-12 14:05 | 07-12 14:55 | 28.03 | 27.92 | 501 | 14043.03 | -55.11 | -0.39% | 0.3R | 50m | market | early-reversal | trend | trend | neutral | 68 | ↓27.84 | 0.1375 | 1.16 | **LOSS** |
| 10 | PLTR | 08-08 14:25 | 08-08 15:35 | 27.9 | 28.56 | 277 | 7728.3 | +182.82 | +2.37% | 1.19R | 70m | market | profit-target | trend | trend | noisyHighBeta | 71.28 | ↑27.46 | 0.2606 | 1.09 | **WIN** |
| 11 | PLTR | 08-19 14:05 | 08-19 14:35 | 32.57 | 32.31 | 432 | 14070.24 | -112.32 | -0.8% | 0.42R | 30m | market | early-reversal | trend | trend | neutral | 58.98 | ↑32.24 | 0.0315 | 1.08 | **LOSS** |
| 12 | PLTR | 08-29 15:10 | 08-29 15:50 | 31.8 | 31.66 | 442 | 14055.6 | -61.88 | -0.44% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 62.77 | ↑31.44 | 0.3418 | 1.52 | **LOSS** |
| 13 | PLTR | 09-13 15:20 | 09-13 15:50 | 35.9 | 35.75 | 391 | 14036.9 | -58.65 | -0.42% | 0.43R | 30m | market | early-reversal | trend | trend | neutral | 73.39 | ↑35.46 | 0.1849 | 1.14 | **LOSS** |
| 14 | PLTR | 10-02 14:15 | 10-02 14:55 | 37.12 | 36.97 | 378 | 14031.36 | -56.7 | -0.4% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 65.19 | ↑36.65 | 0.0291 | 1.07 | **LOSS** |
| 15 | PLTR | 10-18 14:45 | 10-18 15:05 | 42.59 | 42.44 | 329 | 14012.11 | -49.35 | -0.35% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 61.18 | ↑42.26 | 0.1331 | 1.04 | **LOSS** |
| 16 | PLTR | 11-01 14:10 | 11-01 15:20 | 42.36 | 42.32 | 331 | 14021.16 | -13.24 | -0.09% | 0.06R | 70m | market | stagnation | trend | trend | neutral | 68.25 | ↑41.98 | 0.1825 | 1.23 | **LOSS** |
| 17 | PLTR | 11-11 15:10 | 11-11 16:30 | 60.69 | 61.6 | 63 | 7707.63 | +57.33 | +1.5% | 0.75R | 80m | market | trim-profit-target | trend | trend | noisyHighBeta | 70.79 | ↑59.84 | 0.6205 | 1.12 | **WIN** |
| 18 | PLTR | 11-11 15:10 | 11-11 16:45 | 60.69 | 61.11 | 64 | 7707.63 | +26.88 | +0.69% | 0.35R | 95m | market | trailing-stop | trend | trend | noisyHighBeta | 70.79 | ↑59.84 | 0.6205 | 1.12 | **WIN** |
| 19 | PLTR | 11-27 15:00 | 11-27 15:20 | 66.95 | 66.16 | 209 | 13992.55 | -165.11 | -1.18% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 71.94 | ↓66.68 | 0.4719 | 1.18 | **LOSS** |
| 20 | PLTR | 12-13 15:10 | 12-13 15:30 | 74.71 | 73.95 | 103 | 7695.13 | -78.28 | -1.02% | 0.51R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 65.71 | ↓74.35 | 0.5 | 1.06 | **LOSS** |
| 21 | PLTR | 12-24 14:55 | 12-24 15:20 | 84.4 | 83.37 | 91 | 7680.4 | -93.73 | -1.22% | 0.61R | 25m | market | early-reversal | trend | trend | noisyHighBeta | 73.55 | ↓83.61 | 1.0714 | 1.77 | **LOSS** |
| 22 | PLTR | 01-03 14:30 | 01-03 15:40 | 76.13 | 78.16 | 183 | 13931.79 | +371.49 | +2.67% | 2.36R | 70m | market | profit-target | breakout | breakout | neutral | 76.45 | ↑75.92 | 0.437 | 1.98 | **WIN** |
| 23 | PLTR | 01-15 14:55 | 01-15 15:45 | 68.25 | 67.99 | 113 | 7712.25 | -29.38 | -0.38% | 0.19R | 50m | market | stagnation | trend | trend | noisyHighBeta | 68.39 | ↓68.11 | 0.4488 | 1.42 | **LOSS** |
| 24 | PLTR | 01-16 14:30 | 01-16 16:05 | 69.26 | 71.16 | 202 | 13990.52 | +383.8 | +2.74% | 2.88R | 95m | market | profit-target | trend | breakout | neutral | 65.86 | ↑69.17 | 0.1616 | 1.83 | **WIN** |
| 25 | PLTR | 01-22 15:15 | 01-22 17:00 | 75.39 | 76.56 | 187 | 14097.93 | +218.79 | +1.55% | 0.78R | 105m | market | timeout | trend | trend | neutral | 73.16 | ↑74.48 | 0.4169 | 1.15 | **WIN** |
| 26 | PLTR | 01-23 14:35 | 01-23 15:15 | 77.77 | 77.15 | 181 | 14076.37 | -112.22 | -0.8% | 0.63R | 40m | market | early-reversal | breakout | breakout | neutral | 61.83 | ↓77.38 | 0.1373 | 2 | **LOSS** |
| 27 | PLTR | 01-28 14:30 | 01-28 14:40 | 75.65 | 74.09 | 186 | 14070.9 | -290.16 | -2.06% | 1.41R | 10m | market | stop-loss | trend | trend | neutral | 78.95 | ↓75.76 | 0.4857 | 1.52 | **LOSS** |
| 28 | PLTR | 01-28 15:10 | 01-28 15:35 | 76.97 | 78.85 | 182 | 14008.54 | +342.16 | +2.44% | 1.22R | 25m | market | profit-target | breakout | breakout | neutral | 63.29 | ↑75.79 | 0.7504 | 1.47 | **WIN** |
| 29 | PLTR | 01-30 14:45 | 01-30 15:05 | 81.41 | 80 | 95 | 7733.95 | -133.95 | -1.73% | 1.05R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 60.97 | ↓80.35 | 0.3142 | 1.02 | **LOSS** |
| 30 | PLTR | 01-31 14:50 | 01-31 16:35 | 83.9 | 84.63 | 92 | 7718.8 | +67.16 | +0.87% | 0.47R | 105m | market | timeout | trend | trend | noisyHighBeta | 69.37 | ↑83.1 | 0.5836 | 2.6 | **WIN** |
| 31 | PLTR | 02-12 14:50 | 02-12 15:45 | 115.21 | 115.14 | 67 | 7719.07 | -4.69 | -0.06% | 0.03R | 55m | market | stagnation | breakout | trend | noisyHighBeta | 59.36 | ↑113.69 | 0.1317 | 2.44 | **LOSS** |
| 32 | PLTR | 02-13 15:20 | 02-13 16:10 | 118.11 | 117.61 | 65 | 7677.15 | -32.5 | -0.42% | 0.22R | 50m | market | stagnation | trend | trend | noisyHighBeta | 55.68 | ↑116.53 | 0.018 | 1.13 | **LOSS** |
| 33 | PLTR | 03-19 15:20 | 03-19 17:05 | 85.88 | 85.61 | 90 | 7729.2 | -24.3 | -0.31% | 0.18R | 105m | market | timeout | breakout | trend | noisyHighBeta | 63.28 | ↑84.36 | 0.2347 | 1.02 | **LOSS** |
| 34 | PLTR | 04-01 15:20 | 04-01 15:40 | 85.2 | 84.61 | 91 | 7753.2 | -53.69 | -0.69% | 0.41R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 76.5 | ↑83.8 | 0.2502 | 1.01 | **LOSS** |
| 35 | PLTR | 04-25 14:10 | 04-25 14:40 | 109.93 | 108.43 | 65 | 7145.45 | -97.5 | -1.36% | 0.75R | 30m | market | early-reversal | breakout | trend | noisyHighBeta | 71.01 | ↓108.32 | 0.5966 | 1.21 | **LOSS** |
| 36 | PLTR | 05-13 14:50 | 05-13 15:45 | 125.03 | 128.44 | 61 | 7626.83 | +208.01 | +2.73% | 1.98R | 55m | market | profit-target | breakout | trend | noisyHighBeta | 67.25 | ↑123.12 | 1.6261 | 1.26 | **WIN** |
| 37 | PLTR | 05-22 15:15 | 05-22 16:15 | 125.57 | 125.4 | 112 | 14063.84 | -19.04 | -0.14% | 0.1R | 60m | market | stagnation | trend | trend | neutral | 63.87 | ↑123.71 | 1.0303 | 1.17 | **LOSS** |
| 38 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.07 | 122.44 | 113 | 13906.91 | -71.19 | -0.51% | 0.4R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 39 | PLTR | 06-16 13:35 | 06-16 14:15 | 143.62 | 142.32 | 98 | 14074.76 | -127.4 | -0.91% | 0.58R | 40m | market | early-reversal | breakout | breakout | neutral | 83.27 | ↓142.51 | 0.9574 | 3.22 | **LOSS** |
| 40 | PLTR | 07-14 14:50 | 07-14 15:10 | 146.68 | 145.89 | 96 | 14081.28 | -75.84 | -0.54% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 70.5 | ↑145.37 | 1.0479 | 1.55 | **LOSS** |
| 41 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.45 | 158.32 | 88 | 13943.6 | -11.44 | -0.08% | 0.09R | 80m | market | stagnation | breakout | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 42 | PLTR | 08-21 14:25 | 08-21 14:45 | 157.48 | 154.87 | 49 | 7716.52 | -127.89 | -1.66% | 0.83R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 58.95 | ↓155.75 | 0.5341 | 1.64 | **LOSS** |
| 43 | PLTR | 09-02 14:25 | 09-02 14:45 | 157.7 | 156.32 | 89 | 14035.3 | -122.82 | -0.88% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 88.08 | ↑154.56 | -0.157 | 1.28 | **LOSS** |
| 44 | PLTR | 09-12 14:50 | 09-12 15:10 | 168.22 | 166.58 | 83 | 13962.26 | -136.12 | -0.97% | 0.97R | 20m | market | early-reversal | trend | trend | neutral | 76.58 | ↑166.22 | 0.7275 | 1.3 | **LOSS** |
| 45 | PLTR | 09-25 14:15 | 09-25 16:00 | 180.87 | 183.34 | 77 | 13926.99 | +190.19 | +1.37% | 0.69R | 105m | market | timeout | breakout | breakout | neutral | 56.8 | ↑177.11 | 0.1758 | 1.15 | **WIN** |
| 46 | PLTR | 10-14 14:25 | 10-14 15:55 | 178.4 | 178.35 | 78 | 13915.2 | -3.9 | -0.03% | 0.02R | 90m | market | breakeven-stop | breakout | breakout | neutral | 55.43 | ↑174.39 | -0.2396 | 1.3 | **LOSS** |
| 47 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.39 | 203.89 | 68 | 13966.52 | -102 | -0.73% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 48 | PLTR | 11-20 14:30 | 11-20 15:05 | 173.34 | 170.86 | 44 | 7626.96 | -109.12 | -1.43% | 0.76R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 78.02 | ↓172.89 | 2.1297 | 2.13 | **LOSS** |
| 49 | PLTR | 12-03 15:00 | 12-03 15:25 | 172.92 | 171.58 | 81 | 14006.52 | -108.54 | -0.77% | 0.52R | 25m | market | early-reversal | breakout | breakout | neutral | 61.73 | ↑170.59 | 0.0844 | 1.57 | **LOSS** |
| 50 | PLTR | 12-15 14:45 | 12-15 15:05 | 186.89 | 184.07 | 74 | 13829.86 | -208.68 | -1.51% | 1.12R | 20m | market | early-reversal | breakout | breakout | neutral | 73.42 | ↓186.54 | 0.4741 | 1.11 | **LOSS** |
| 51 | PLTR | 01-05 14:40 | 01-05 15:30 | 174.64 | 173.51 | 73 | 12748.72 | -82.49 | -0.65% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 74.95 | ↓173.07 | 1.4103 | 1.85 | **LOSS** |
| 52 | PLTR | 01-16 14:30 | 01-16 14:40 | 181.07 | 177.28 | 77 | 13942.39 | -291.83 | -2.09% | 1.85R | 10m | market | stop-loss | breakout | breakout | neutral | 72.1 | ↓180.79 | -0.2065 | 9.2 | **LOSS** |
| 53 | PLTR | 02-24 15:25 | 02-24 15:45 | 129.55 | 128.46 | 107 | 13861.85 | -116.63 | -0.84% | 0.42R | 20m | market | early-reversal | breakout | breakout | neutral | 45.67 | ↓128.56 | -0.4742 | 1.12 | **LOSS** |
| 54 | PLTR | 03-06 15:10 | 03-06 15:45 | 154.86 | 153.62 | 89 | 13782.54 | -110.36 | -0.8% | 0.4R | 35m | market | early-reversal | breakout | breakout | neutral | 63 | ↑152.76 | 0.59 | 2.29 | **LOSS** |
| 55 | PLTR | 03-18 14:05 | 03-18 14:25 | 156.67 | 154.1 | 88 | 13786.96 | -226.16 | -1.64% | 1.89R | 20m | market | stop-loss | trend | trend | neutral | 72.58 | ↓155.65 | 0.2712 | 1.09 | **LOSS** |
| 56 | PLTR | 04-02 14:35 | 04-02 15:25 | 147.44 | 147.02 | 93 | 13711.92 | -39.06 | -0.28% | 0.14R | 50m | market | stagnation | breakout | breakout | neutral | 53.16 | ↑143.51 | -0.0911 | 1.23 | **LOSS** |
| 57 | PLTR | 04-13 15:05 | 04-13 15:25 | 133.6 | 132.92 | 57 | 7615.2 | -38.76 | -0.51% | 0.37R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 61.04 | ↑131.43 | 1.2259 | 1.23 | **LOSS** |

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

- ⚠️ **Profit factor 0.72 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:33:54.628Z*
