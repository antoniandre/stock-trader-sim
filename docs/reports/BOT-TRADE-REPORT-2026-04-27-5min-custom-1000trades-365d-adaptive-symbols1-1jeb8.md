# Bot Trade Report — 50 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:55:19.631Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $209.96 (+0.21%) over 50 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 50 |
| Win rate | 44% (22W / 28L) |
| Net P&L | $+209.96 (+0.21%) |
| Gross profit | $2559.67 |
| Gross loss | $2349.71 |
| Profit factor | 1.09 |
| Avg win | $116.35 |
| Avg loss | $83.92 |
| Payoff ratio | 1.39:1 |
| Expectancy | $+4.2 / trade |
| Max drawdown | 0.88% |
| Sharpe ratio (ann.) | 0.61 |
| Trades / active day | 1.28 |
| Avg confidence | 100% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.86R |
| Starting equity | $100,000 |
| Ending equity | $100,209.96 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 10 | 50% | $+267.48 | $26.75 |
| Mid  10:30–11:30 | 17 | 29.41% | $-675.41 | $-39.73 |
| Noon 11:30–13:00 | 17 | 47.06% | $+244.59 | $14.39 |
| PM   13:00–14:00 | 6 | 66.67% | $+373.3 | $62.22 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 50 | 22 | 44% | $+209.96 | $+4.2 | 1.09 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 39 | 20 | 51.28% | $+396.75 | $+10.17 |
| breakout | 11 | 2 | 18.18% | $-186.79 | $-16.98 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 5 | 4 | 80% | $+176.34 | $+35.27 |
| neutral | 45 | 18 | 40% | $+33.62 | $+0.75 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | PM 13:00-14:00 | 5 | 3.61 | $+42.11 | 1 | ∞ | $+162.75 | 0% | ∞ | watch |
| Time slot | Open 9:30-10:30 | 6 | 2.02 | $+44.36 | 4 | 1.01 | $+0.34 | 0.14% | 0.76 | watch |
| Setup | trend | 26 | 1.78 | $+24.47 | 13 | 0.7 | $-18.41 | 0.32% | 0.57 | watch |
| Behavior | neutral | 26 | 1.59 | $+22.6 | 19 | 0.57 | $-29.16 | 0.75% | 0.47 | watch |
| Time slot | Noon 11:30-13:00 | 10 | 2.63 | $+45.05 | 7 | 0.55 | $-29.42 | 0.45% | 0.45 | watch |
| Symbol | TSLA | 30 | 1.81 | $+27.08 | 20 | 0.55 | $-30.12 | 0.8% | 0.45 | watch |
| Time slot | Mid 10:30-11:30 | 9 | 0.7 | $-12.75 | 8 | 0.26 | $-70.08 | 0.56% | 0.22 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+89.99 | 1.04 |
| +3 bps/side | $-149.85 | 0.94 |
| +5 bps/side | $-389.75 | 0.86 |
| +10 bps/side | $-989.39 | 0.68 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 21 |
| timeout | 13 |
| trim-profit-target | 5 |
| stagnation | 4 |
| stop-loss | 3 |
| profit-target | 2 |
| trailing-stop | 1 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-02 16:35 | 05-02 18:20 | 291.76 | 293.04 | 26 | 7585.76 | +33.28 | +0.44% | 0.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 77.09 | ↑285.22 | 1.7688 | 1.53 | **WIN** |
| 2 | TSLA | 05-08 15:30 | 05-08 16:25 | 287.6 | 287.17 | 48 | 13804.8 | -20.64 | -0.15% | 0.13R | 55m | market | stagnation | breakout | breakout | neutral | 85.5 | ↑283.36 | 1.9473 | 1.47 | **LOSS** |
| 3 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 43 | 13924.69 | -84.71 | -0.61% | 0.46R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 4 | TSLA | 05-13 16:55 | 05-13 17:50 | 326.17 | 334.8 | 42 | 13699.14 | +362.46 | +2.65% | 3.53R | 55m | market | profit-target | trend | trend | neutral | 77.76 | ↑321.81 | 0.4764 | 2.24 | **WIN** |
| 5 | TSLA | 05-19 17:10 | 05-19 17:50 | 341.89 | 340.6 | 41 | 14017.49 | -52.89 | -0.38% | 0.54R | 40m | market | early-reversal | trend | trend | neutral | 75.57 | ↑338.16 | 0.3835 | 2.23 | **LOSS** |
| 6 | TSLA | 05-22 15:20 | 05-22 15:40 | 344.05 | 342.24 | 40 | 13762 | -72.4 | -0.53% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 7 | TSLA | 05-22 17:25 | 05-22 19:10 | 344.87 | 346.91 | 40 | 13794.8 | +81.6 | +0.59% | 0.84R | 105m | market | timeout | trend | trend | neutral | 65.38 | ↑339.8 | 0.5483 | 1.68 | **WIN** |
| 8 | TSLA | 05-23 17:05 | 05-23 18:15 | 341.2 | 340.52 | 41 | 13989.2 | -27.88 | -0.2% | 0.29R | 70m | market | stagnation | trend | trend | neutral | 78.08 | ↑336.95 | 0.9299 | 1.04 | **LOSS** |
| 9 | TSLA | 05-27 16:10 | 05-27 17:55 | 359.14 | 362.91 | 39 | 14006.46 | +147.03 | +1.05% | 1.5R | 105m | market | timeout | trend | trend | neutral | 74 | ↑354.41 | 1.5487 | 1.07 | **WIN** |
| 10 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.94 | 361.1 | 38 | 13791.72 | -69.92 | -0.51% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 11 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.3 | 353.52 | 40 | 13972 | +168.8 | +1.21% | 0.92R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 12 | TSLA | 06-03 16:40 | 06-03 17:30 | 354.19 | 352.4 | 39 | 13813.41 | -69.81 | -0.51% | 0.73R | 50m | market | early-reversal | trend | trend | neutral | 77.67 | ↑348.67 | 1.527 | 1.56 | **LOSS** |
| 13 | TSLA | 06-09 17:45 | 06-09 19:30 | 299.13 | 304.57 | 25 | 7478.25 | +136 | +1.82% | 2.6R | 105m | market | timeout | trend | trend | noisyHighBeta | 75.72 | ↑292.64 | 0.7899 | 1.88 | **WIN** |
| 14 | TSLA | 06-13 16:45 | 06-13 17:40 | 327.27 | 331.79 | 11 | 7527.21 | +49.72 | +1.38% | 1.18R | 55m | market | trim-profit-target | trend | trend | noisyHighBeta | 75.86 | ↑318.75 | 2.6256 | 1.02 | **WIN** |
| 15 | TSLA | 06-13 16:45 | 06-13 18:20 | 327.27 | 327.75 | 12 | 7527.21 | +5.76 | +0.15% | 0.13R | 95m | market | trailing-stop | trend | trend | noisyHighBeta | 75.86 | ↑318.75 | 2.6256 | 1.02 | **WIN** |
| 16 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 43 | 13951.35 | -58.91 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 17 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.75 | 318.04 | 44 | 14069 | -75.24 | -0.53% | 0.32R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 18 | TSLA | 07-22 15:45 | 07-22 16:05 | 332.27 | 331.1 | 42 | 13955.34 | -49.14 | -0.35% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 62.38 | ↑327.84 | 0.8549 | 1.26 | **LOSS** |
| 19 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.12 | 321.26 | 22 | 13997.28 | +69.08 | +0.99% | 1.22R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 20 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.12 | 319.25 | 22 | 13997.28 | +24.86 | +0.36% | 0.44R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 21 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.87 | 308.27 | 45 | 13989.15 | -117 | -0.84% | 0.52R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 22 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 43 | 14047.24 | +356.9 | +2.54% | 3.39R | 25m | market | profit-target | breakout | breakout | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 23 | TSLA | 08-25 15:35 | 08-25 17:20 | 345.22 | 348.42 | 40 | 13808.8 | +128 | +0.93% | 1.33R | 105m | market | timeout | trend | trend | neutral | 77.63 | ↑340.37 | 1.36 | 2.88 | **WIN** |
| 24 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.16 | 339.81 | 41 | 13946.56 | -14.35 | -0.1% | 0.08R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 25 | TSLA | 09-10 14:45 | 09-10 16:20 | 353.43 | 353.58 | 39 | 13783.77 | +5.85 | +0.04% | 0.04R | 95m | market | breakeven-stop | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 26 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.34 | 361.09 | 19 | 13936.26 | +71.25 | +1.05% | 0.72R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 27 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.34 | 362.27 | 20 | 13936.26 | +98.6 | +1.38% | 0.95R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 28 | TSLA | 09-11 17:20 | 09-11 19:05 | 364.4 | 366.34 | 38 | 13847.2 | +73.72 | +0.53% | 0.76R | 105m | market | timeout | trend | trend | neutral | 62.93 | ↑357.75 | 0.7665 | 1.04 | **WIN** |
| 29 | TSLA | 09-12 16:50 | 09-12 17:05 | 395.53 | 391.64 | 35 | 13843.55 | -136.15 | -0.98% | 1.26R | 15m | market | stop-loss | trend | trend | neutral | 78.26 | ↑386.77 | 1.4538 | 1.78 | **LOSS** |
| 30 | TSLA | 09-16 14:45 | 09-16 15:05 | 421.01 | 416.42 | 33 | 13893.33 | -151.47 | -1.09% | 0.78R | 20m | market | early-reversal | trend | trend | neutral | 70.81 | ↑415.48 | 2.6448 | 1.06 | **LOSS** |
| 31 | TSLA | 09-16 15:15 | 09-16 15:40 | 420.17 | 417.43 | 33 | 13865.61 | -90.42 | -0.65% | 0.59R | 25m | market | early-reversal | trend | trend | neutral | 58.69 | ↑416.21 | 2.128 | 2.31 | **LOSS** |
| 32 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.92 | 455.47 | 15 | 13978.52 | +68.25 | +1.01% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 33 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.92 | 455.36 | 16 | 13978.52 | +71.04 | +0.98% | 0.75R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 34 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.83 | 421.98 | 32 | 13722.56 | -219.2 | -1.6% | 1.01R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 35 | TSLA | 10-23 16:30 | 10-23 17:30 | 437.24 | 445.84 | 16 | 13991.68 | +137.6 | +1.97% | 2.21R | 60m | market | trim-profit-target | trend | trend | neutral | 76.7 | ↑424.77 | 3.522 | 1.05 | **WIN** |
| 36 | TSLA | 10-23 16:30 | 10-23 18:15 | 437.24 | 444.11 | 16 | 13991.68 | +109.92 | +1.57% | 1.76R | 105m | market | timeout | trend | trend | neutral | 76.7 | ↑424.77 | 3.522 | 1.05 | **WIN** |
| 37 | TSLA | 11-05 16:30 | 11-05 17:00 | 452.5 | 450.08 | 31 | 14027.5 | -75.02 | -0.53% | 0.47R | 30m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑446.28 | 0.8032 | 1.48 | **LOSS** |
| 38 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.64 | 419.44 | 34 | 14063.76 | +197.2 | +1.4% | 1.01R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 39 | TSLA | 11-17 16:35 | 11-17 17:25 | 420.31 | 419.42 | 33 | 13870.23 | -29.37 | -0.21% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 65.5 | ↑413.31 | 3.0162 | 1.08 | **LOSS** |
| 40 | TSLA | 11-19 15:15 | 11-19 15:35 | 410.53 | 407.84 | 18 | 7389.54 | -48.42 | -0.66% | 0.38R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.99 | ↑406.75 | 1.7263 | 1.09 | **LOSS** |
| 41 | TSLA | 11-24 16:50 | 11-24 17:10 | 420.13 | 417.95 | 33 | 13864.29 | -71.94 | -0.52% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 63.31 | ↑413.24 | 3.3192 | 1.18 | **LOSS** |
| 42 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 31 | 14060.05 | -103.54 | -0.74% | 0.88R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 43 | TSLA | 12-15 16:25 | 12-15 16:45 | 481.21 | 476.65 | 29 | 13955.09 | -132.24 | -0.95% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 72.35 | ↑476.48 | 2.7317 | 1.33 | **LOSS** |
| 44 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.83 | 441.03 | 31 | 13758.73 | -86.8 | -0.63% | 0.46R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 45 | TSLA | 01-22 17:50 | 01-22 19:35 | 442.6 | 447.85 | 31 | 13720.6 | +162.75 | +1.19% | 1.7R | 105m | market | timeout | trend | trend | neutral | 74 | ↑436.51 | 1.2036 | 2.4 | **WIN** |
| 46 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 34 | 13876.76 | -79.9 | -0.58% | 0.47R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 47 | TSLA | 02-20 16:00 | 02-20 16:20 | 414.71 | 410.32 | 33 | 13685.43 | -144.87 | -1.06% | 0.85R | 20m | market | stop-loss | trend | trend | neutral | 77.95 | ↓410.66 | 0.6978 | 1.5 | **LOSS** |
| 48 | TSLA | 03-04 15:25 | 03-04 15:45 | 407.81 | 404 | 34 | 13865.54 | -129.54 | -0.93% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 70.86 | ↑401.99 | 3.2565 | 1.83 | **LOSS** |
| 49 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 38 | 13851 | -85.5 | -0.62% | 0.72R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 50 | TSLA | 04-14 14:25 | 04-14 15:00 | 363.09 | 361.71 | 38 | 13797.42 | -52.44 | -0.38% | 0.24R | 35m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |

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

- ⚠️ **Profit factor 1.09 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.86R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:55:19.631Z*
