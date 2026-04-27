# Bot Trade Report — 78 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:42:46.914Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $738.68 (-0.74%) over 78 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 78 |
| Win rate | 33.33% (26W / 52L) |
| Net P&L | $-738.68 (-0.74%) |
| Gross profit | $2432.76 |
| Gross loss | $3171.44 |
| Profit factor | 0.77 |
| Avg win | $93.57 |
| Avg loss | $60.99 |
| Payoff ratio | 1.53:1 |
| Expectancy | $-9.47 / trade |
| Max drawdown | 1.09% |
| Sharpe ratio (ann.) | -1.78 |
| Trades / active day | 1.24 |
| Avg confidence | 99.67% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.71R |
| Starting equity | $100,000 |
| Ending equity | $99,261.32 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 16 | 25% | $+10.3 | $0.64 |
| Mid  10:30–11:30 | 30 | 46.67% | $-11.71 | $-0.39 |
| Noon 11:30–13:00 | 24 | 33.33% | $-361.71 | $-15.07 |
| PM   13:00–14:00 | 8 | 0% | $-375.56 | $-46.94 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| BA | 30 | 10 | 33.33% | $-34.36 | $-1.15 | 0.97 | throttle |
| GS | 23 | 9 | 39.13% | $-228.28 | $-9.93 | 0.77 | throttle |
| UNH | 25 | 7 | 28% | $-476.04 | $-19.04 | 0.53 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 64 | 22 | 34.38% | $-256.92 | $-4.01 |
| breakout | 14 | 4 | 28.57% | $-481.76 | $-34.41 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 2 | 0 | 0% | $-13.24 | $-6.62 |
| neutral | 76 | 26 | 34.21% | $-725.44 | $-9.55 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 16 | 1.34 | $+11.06 | 14 | 0.69 | $-13.47 | 0.35% | 0.48 | watch |
| Symbol | BA | 18 | 1.44 | $+16.18 | 12 | 0.33 | $-27.13 | 0.4% | 0.23 | watch |
| Time slot | Noon 11:30-13:00 | 12 | 0.49 | $-22.22 | 12 | 0.77 | $-7.92 | 0.25% | 0.56 | reject |
| Symbol | GS | 11 | 0.81 | $-8.26 | 12 | 0.74 | $-11.45 | 0.45% | 0.54 | reject |
| Symbol | UNH | 17 | 0.48 | $-21.35 | 8 | 0.63 | $-14.13 | 0.23% | 0.43 | reject |
| Setup | trend | 40 | 1.06 | $+2.17 | 24 | 0.61 | $-14.33 | 0.56% | 0.43 | reject |
| Behavior | neutral | 44 | 0.92 | $-3.39 | 32 | 0.57 | $-18 | 0.73% | 0.4 | reject |
| Setup | breakout | 6 | 0.38 | $-41.59 | 8 | 0.47 | $-29.03 | 0.38% | 0.34 | reject |
| Time slot | Open 9:30-10:30 | 14 | 1.23 | $+9.91 | 2 | 0 | $-64.2 | 0.13% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-942.27 | 0.72 |
| +3 bps/side | $-1349.46 | 0.62 |
| +5 bps/side | $-1756.59 | 0.55 |
| +10 bps/side | $-2774.59 | 0.4 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 31 |
| timeout | 21 |
| stagnation | 15 |
| stop-loss | 5 |
| trim-profit-target | 3 |
| breakeven-stop | 2 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 75 | 13834.5 | -51.75 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 2 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 3 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 74 | 13833.56 | -61.42 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 4 | UNH | 05-05 14:00 | 05-05 15:45 | 403.98 | 406.43 | 34 | 13735.32 | +83.3 | +0.61% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.61 | ↑402.05 | 1.1273 | 1.65 | **WIN** |
| 5 | GS | 05-08 15:20 | 05-08 17:10 | 565.92 | 570.89 | 24 | 13582.08 | +119.28 | +0.88% | 1.26R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 6 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 7 | BA | 05-14 15:45 | 05-14 16:05 | 208.73 | 207.41 | 66 | 13776.18 | -87.12 | -0.63% | 0.63R | 20m | market | early-reversal | trend | breakout | neutral | 52.56 | ↑206.7 | 0.617 | 2.45 | **LOSS** |
| 8 | UNH | 05-19 16:25 | 05-19 17:30 | 313.65 | 313.39 | 24 | 7527.6 | -6.24 | -0.08% | 0.06R | 65m | market | stagnation | trend | trend | noisyHighBeta | 78.79 | ↑304.66 | 2.5615 | 3.18 | **LOSS** |
| 9 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 10 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 65 | 13962.65 | +94.25 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 11 | BA | 06-09 17:20 | 06-09 17:40 | 218.62 | 217.48 | 64 | 13991.68 | -72.96 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 75.61 | ↑215.54 | 0.7142 | 1.49 | **LOSS** |
| 12 | UNH | 06-11 14:15 | 06-11 15:05 | 308.8 | 307.78 | 45 | 13896 | -45.9 | -0.33% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 72.91 | ↓306.28 | 1.403 | 1.5 | **LOSS** |
| 13 | UNH | 06-12 15:50 | 06-12 17:35 | 315.77 | 316.7 | 44 | 13893.88 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | 57.08 | ↑312.45 | 1.2798 | 1.44 | **WIN** |
| 14 | BA | 06-12 17:10 | 06-12 17:30 | 205.88 | 204.3 | 68 | 13999.84 | -107.44 | -0.77% | 1.04R | 20m | market | stop-loss | trend | trend | neutral | 72.85 | ↑203.8 | 0.4887 | 1.35 | **LOSS** |
| 15 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 68 | 13859.76 | -60.52 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 16 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 17 | BA | 07-23 15:05 | 07-23 16:30 | 231.62 | 233.85 | 30 | 13897.2 | +66.9 | +0.96% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 18 | BA | 07-23 15:05 | 07-23 16:50 | 231.62 | 233.86 | 30 | 13897.2 | +67.2 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 19 | UNH | 08-05 15:20 | 08-05 15:40 | 247.67 | 245.5 | 52 | 12878.84 | -112.84 | -0.88% | 0.81R | 20m | market | early-reversal | breakout | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 20 | UNH | 08-05 16:30 | 08-05 16:50 | 249.01 | 247.76 | 56 | 13944.56 | -70 | -0.5% | 0.35R | 20m | market | early-reversal | trend | trend | neutral | 56.1 | ↑244.16 | 1.3979 | 2.27 | **LOSS** |
| 21 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 60 | 13863.6 | -67.8 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 22 | UNH | 08-15 15:30 | 08-15 17:15 | 307.5 | 309.67 | 45 | 13837.5 | +97.65 | +0.71% | 0.58R | 105m | market | timeout | trend | trend | neutral | 66.25 | ↑301.9 | 3.8404 | 1.01 | **WIN** |
| 23 | UNH | 08-21 14:45 | 08-21 15:50 | 305.05 | 304.77 | 25 | 7626.25 | -7 | -0.09% | 0.09R | 65m | market | stagnation | trend | trend | noisyHighBeta | 73.74 | ↑301.63 | 1.4825 | 1.32 | **LOSS** |
| 24 | GS | 08-22 14:10 | 08-22 15:55 | 734.26 | 742.22 | 19 | 13950.94 | +151.24 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 25 | GS | 09-09 14:35 | 09-09 16:20 | 753.38 | 755.19 | 18 | 13560.84 | +32.58 | +0.24% | 0.34R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 26 | UNH | 09-09 16:35 | 09-09 18:20 | 345.94 | 348.37 | 40 | 13837.6 | +97.2 | +0.7% | 0.54R | 105m | market | timeout | trend | trend | neutral | 69.91 | ↑336.27 | 3.5867 | 1.04 | **WIN** |
| 27 | GS | 09-10 14:00 | 09-10 14:35 | 771.21 | 767.95 | 18 | 13881.78 | -58.68 | -0.42% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 28 | UNH | 09-11 15:40 | 09-11 16:00 | 359.57 | 357.5 | 38 | 13663.66 | -78.66 | -0.58% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75.3 | ↑354.29 | 3.0598 | 2.35 | **LOSS** |
| 29 | UNH | 09-12 14:00 | 09-12 14:20 | 361.7 | 359.42 | 38 | 13744.6 | -86.64 | -0.63% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 77.47 | ↑357.84 | 1.3657 | 1.15 | **LOSS** |
| 30 | GS | 09-15 14:40 | 09-15 15:45 | 789.8 | 782.9 | 17 | 13426.6 | -117.3 | -0.87% | 1.24R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 31 | UNH | 09-19 15:30 | 09-19 17:15 | 338.74 | 339.25 | 41 | 13888.34 | +20.91 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.32 | ↑336.54 | 0.4519 | 1.53 | **WIN** |
| 32 | UNH | 09-23 14:20 | 09-23 14:40 | 349.35 | 347.23 | 40 | 13974 | -84.8 | -0.61% | 0.66R | 20m | market | early-reversal | trend | trend | neutral | 79.73 | ↓346.79 | 1.9194 | 1.23 | **LOSS** |
| 33 | BA | 10-06 14:10 | 10-06 15:55 | 218.49 | 220.89 | 64 | 13983.36 | +153.6 | +1.1% | 1.33R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 34 | UNH | 10-07 15:00 | 10-07 15:20 | 363.31 | 361.78 | 38 | 13805.78 | -58.14 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↑360.44 | 0.5464 | 1.97 | **LOSS** |
| 35 | GS | 10-14 15:55 | 10-14 16:15 | 777.71 | 771.71 | 18 | 13998.78 | -108 | -0.77% | 0.86R | 20m | market | early-reversal | trend | trend | neutral | 68.27 | ↑758.94 | 2.5555 | 1.27 | **LOSS** |
| 36 | GS | 10-14 17:15 | 10-14 18:40 | 779.47 | 778.32 | 17 | 13250.99 | -19.55 | -0.15% | 0.21R | 85m | market | breakeven-stop | trend | trend | neutral | 62.93 | ↑762.4 | 3.3509 | 2 | **LOSS** |
| 37 | GS | 10-29 15:40 | 10-29 16:00 | 800.41 | 794.92 | 17 | 13606.97 | -93.33 | -0.69% | 0.99R | 20m | market | early-reversal | trend | trend | neutral | 72.15 | ↑792.92 | 1.5953 | 3.31 | **LOSS** |
| 38 | BA | 11-03 14:30 | 11-03 16:15 | 202.63 | 204.84 | 69 | 13981.47 | +152.49 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 39 | GS | 11-18 16:30 | 11-18 17:20 | 781.55 | 777.63 | 17 | 13286.35 | -66.64 | -0.5% | 0.71R | 50m | market | early-reversal | trend | trend | neutral | 77.45 | ↑773.2 | 1.4057 | 1.15 | **LOSS** |
| 40 | UNH | 11-21 16:50 | 11-21 17:50 | 322.07 | 321.76 | 43 | 13849.01 | -13.33 | -0.1% | 0.14R | 60m | market | stagnation | trend | trend | neutral | 68.16 | ↑317.31 | 1.9935 | 1.03 | **LOSS** |
| 41 | UNH | 12-02 14:55 | 12-02 15:15 | 328.63 | 326.73 | 42 | 13802.46 | -79.8 | -0.58% | 0.83R | 20m | market | early-reversal | trend | breakout | neutral | 65 | ↑325.45 | -0.2713 | 1.35 | **LOSS** |
| 42 | GS | 12-03 15:00 | 12-03 16:45 | 824.1 | 829.51 | 16 | 13185.6 | +86.56 | +0.66% | 0.94R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 43 | BA | 12-08 14:30 | 12-08 16:15 | 204.21 | 205.25 | 68 | 13886.28 | +70.72 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 44 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 69 | 14028.39 | -61.41 | -0.44% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 45 | UNH | 12-12 14:45 | 12-12 15:05 | 344.28 | 342.79 | 40 | 13771.2 | -59.6 | -0.43% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | 84.95 | ↑341.93 | 0.9959 | 1.99 | **LOSS** |
| 46 | BA | 12-12 17:15 | 12-12 18:05 | 204.99 | 204.82 | 68 | 13939.32 | -11.56 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 70.32 | ↑203.26 | 0.4041 | 2.4 | **LOSS** |
| 47 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 67 | 13978.21 | -54.94 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 48 | GS | 12-17 14:30 | 12-17 15:20 | 889.97 | 889.37 | 14 | 12459.58 | -8.4 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 49 | BA | 12-19 16:15 | 12-19 17:05 | 215.09 | 214.61 | 65 | 13980.85 | -31.2 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 70.69 | ↑213.3 | 1.3541 | 1.69 | **LOSS** |
| 50 | BA | 01-02 15:30 | 01-02 16:35 | 220.25 | 222.71 | 31 | 13875.75 | +76.26 | +1.12% | 1.23R | 65m | market | trim-profit-target | trend | trend | neutral | 72.61 | ↑218.21 | 0.6644 | 1.35 | **WIN** |
| 51 | BA | 01-02 15:30 | 01-02 17:15 | 220.25 | 222.86 | 32 | 13875.75 | +83.52 | +1.19% | 1.31R | 105m | market | timeout | trend | trend | neutral | 72.61 | ↑218.21 | 0.6644 | 1.35 | **WIN** |
| 52 | UNH | 01-06 17:30 | 01-06 17:50 | 352.68 | 351.01 | 39 | 13754.52 | -65.13 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 70.21 | ↑349.46 | 0.9119 | 1.34 | **LOSS** |
| 53 | BA | 01-13 16:40 | 01-13 17:40 | 246.63 | 246.14 | 56 | 13811.28 | -27.44 | -0.2% | 0.26R | 60m | market | stagnation | trend | trend | neutral | 70.64 | ↑244.16 | 1.2193 | 1.62 | **LOSS** |
| 54 | GS | 01-15 15:05 | 01-15 16:50 | 957.97 | 968.87 | 14 | 13411.58 | +152.6 | +1.14% | 0.63R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 55 | UNH | 01-20 17:00 | 01-20 17:55 | 337.92 | 337.67 | 41 | 13854.72 | -10.25 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | neutral | 78.34 | ↑333.14 | 1.3816 | 1.37 | **LOSS** |
| 56 | GS | 01-21 15:05 | 01-21 16:50 | 958.11 | 960.3 | 14 | 13413.54 | +30.66 | +0.23% | 0.31R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 57 | GS | 01-26 14:40 | 01-26 15:00 | 933.3 | 929.72 | 15 | 13999.5 | -53.7 | -0.38% | 0.54R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 58 | BA | 01-28 17:10 | 01-28 18:00 | 244.97 | 244.58 | 57 | 13963.29 | -22.23 | -0.16% | 0.23R | 50m | market | stagnation | trend | trend | neutral | 74.89 | ↑241.05 | 0.7215 | 2.04 | **LOSS** |
| 59 | GS | 02-03 14:30 | 02-03 14:50 | 957.62 | 950.12 | 14 | 13406.68 | -105 | -0.78% | 1.11R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 60 | UNH | 02-06 14:45 | 02-06 16:30 | 271 | 273.87 | 51 | 13821 | +146.37 | +1.06% | 1.06R | 105m | market | timeout | trend | trend | neutral | 67.37 | ↑270.95 | 0.7697 | 1.19 | **WIN** |
| 61 | GS | 02-09 15:15 | 02-09 17:00 | 940.19 | 943.34 | 14 | 13162.66 | +44.1 | +0.34% | 0.4R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 62 | BA | 02-10 14:30 | 02-10 14:50 | 246.51 | 244.31 | 56 | 13804.56 | -123.2 | -0.89% | 1.27R | 20m | market | stop-loss | trend | trend | neutral | 69.61 | ↓246 | 0.3275 | 1.22 | **LOSS** |
| 63 | GS | 02-10 14:45 | 02-10 15:10 | 958.47 | 955.05 | 14 | 13418.58 | -47.88 | -0.36% | 0.51R | 25m | market | early-reversal | breakout | breakout | neutral | 71.91 | ↓953.51 | 1.4363 | 2.25 | **LOSS** |
| 64 | GS | 02-24 14:40 | 02-24 14:50 | 906.55 | 894.79 | 15 | 13598.25 | -176.4 | -1.3% | 1.55R | 10m | market | stop-loss | breakout | breakout | neutral | 79.74 | ↓896.16 | 2.0987 | 1.63 | **LOSS** |
| 65 | BA | 02-24 14:40 | 02-24 15:30 | 233.05 | 233.11 | 60 | 13983 | +3.6 | +0.03% | 0.04R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 66 | UNH | 02-25 14:35 | 02-25 16:20 | 279.38 | 280.39 | 49 | 13689.62 | +49.49 | +0.36% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | 86.81 | ↓278.58 | 0.5161 | 1.63 | **WIN** |
| 67 | BA | 03-02 16:45 | 03-02 17:05 | 230.18 | 229.23 | 60 | 13810.8 | -57 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 70.74 | ↑227.6 | 0.5987 | 2.2 | **LOSS** |
| 68 | BA | 03-13 15:45 | 03-13 17:00 | 209.74 | 209.63 | 66 | 13842.84 | -7.26 | -0.05% | 0.05R | 75m | market | stagnation | trend | trend | neutral | 69.41 | ↑207.52 | 0.4468 | 2.69 | **LOSS** |
| 69 | UNH | 03-16 14:00 | 03-16 14:30 | 286.12 | 284.71 | 48 | 13733.76 | -67.68 | -0.49% | 0.54R | 30m | market | early-reversal | trend | trend | neutral | 72.12 | ↑283.61 | 0.9389 | 1.06 | **LOSS** |
| 70 | GS | 03-16 15:40 | 03-16 15:55 | 804.36 | 797.92 | 17 | 13674.12 | -109.48 | -0.8% | 1.14R | 15m | market | stop-loss | trend | trend | neutral | 57.21 | ↓798.57 | 3.5466 | 2.94 | **LOSS** |
| 71 | UNH | 03-24 15:15 | 03-24 15:35 | 273.27 | 272.37 | 51 | 13936.77 | -45.9 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 73.36 | ↑271.06 | 0.6058 | 2.47 | **LOSS** |
| 72 | BA | 03-25 14:00 | 03-25 14:20 | 200.31 | 199.43 | 69 | 13821.39 | -60.72 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |
| 73 | UNH | 03-30 16:25 | 03-30 16:45 | 261.29 | 260.28 | 53 | 13848.37 | -53.53 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 58.09 | ↑258.91 | 0.5333 | 1.16 | **LOSS** |
| 74 | GS | 03-31 16:35 | 03-31 17:35 | 832.11 | 841.42 | 8 | 13313.76 | +74.48 | +1.12% | 1.6R | 60m | market | trim-profit-target | trend | trend | neutral | 72.3 | ↑822.17 | 1.6616 | 2.02 | **WIN** |
| 75 | GS | 03-31 16:35 | 03-31 18:20 | 832.11 | 843.37 | 8 | 13313.76 | +90.08 | +1.35% | 1.93R | 105m | market | timeout | trend | trend | neutral | 72.3 | ↑822.17 | 1.6616 | 2.02 | **WIN** |
| 76 | UNH | 04-07 17:40 | 04-07 18:00 | 312.36 | 310.85 | 44 | 13743.84 | -66.44 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 69.46 | ↑306.21 | 1.2981 | 1.26 | **LOSS** |
| 77 | GS | 04-14 16:05 | 04-14 16:55 | 908.28 | 906.38 | 15 | 13624.2 | -28.5 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 70.17 | ↑900.03 | 2.7464 | 1.92 | **LOSS** |
| 78 | BA | 04-22 15:40 | 04-22 16:15 | 230.32 | 228.57 | 60 | 13819.2 | -105 | -0.76% | 0.6R | 35m | market | early-reversal | trend | trend | neutral | 74.72 | ↑226.07 | 1.8383 | 1.65 | **LOSS** |

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

- ⚠️ **Profit factor 0.77 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.71R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:42:46.914Z*
