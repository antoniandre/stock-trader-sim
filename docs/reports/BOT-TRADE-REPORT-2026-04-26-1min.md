# Bot Trade Report — 65 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T02:35:54.544Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 4 | **Behavior classifier:** observe

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $595.74 (+0.6%) over 65 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 65 |
| Win rate | 50.77% (33W / 32L) |
| Net P&L | $+595.74 (+0.6%) |
| Gross profit | $1716.55 |
| Gross loss | $1120.81 |
| Profit factor | 1.53 |
| Avg win | $52.02 |
| Avg loss | $35.03 |
| Payoff ratio | 1.49:1 |
| Expectancy | $+9.17 / trade |
| Max drawdown | 0.26% |
| Sharpe ratio (ann.) | 3.3 |
| Trades / active day | 2.03 |
| Avg confidence | 89.49% |
| Avg trade duration | 14 min |
| Avg risk ratio | 0.79R |
| Starting equity | $100,000 |
| Ending equity | $100,595.74 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 19 | 57.89% | $+218.32 | $11.49 |
| Mid  10:30–11:30 | 34 | 47.06% | $+213.89 | $6.29 |
| Noon 11:30–13:00 | 10 | 50% | $+61.33 | $6.13 |
| PM   13:00–14:00 | 2 | 50% | $+102.2 | $51.1 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 24 | 14 | 58.33% | $+325.62 | $+13.57 | 1.91 | eligible |
| AMZN | 11 | 8 | 72.73% | $+209.03 | $+19 | 2.58 | eligible |
| GOOGL | 11 | 6 | 54.55% | $+120.16 | $+10.92 | 1.47 | eligible |
| META | 19 | 5 | 26.32% | $-59.07 | $-3.11 | 0.84 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 45 | 23 | 51.11% | $+197.37 | $+4.39 |
| trend | 20 | 10 | 50% | $+398.37 | $+19.92 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 51 | 26 | 50.98% | $+463.44 | $+9.09 |
| thinChop | 6 | 4 | 66.67% | $+76.36 | $+12.73 |
| noisyHighBeta | 8 | 3 | 37.5% | $+55.94 | $+6.99 |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+475.62 | 1.4 |
| +3 bps/side | $+235.27 | 1.18 |
| +5 bps/side | $-4.96 | 1 |
| +10 bps/side | $-605.73 | 0.66 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 17 |
| trailing-stop | 14 |
| stop-loss | 12 |
| stagnation | 10 |
| profit-target | 5 |
| early-reversal | 5 |
| trim-profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 01-28 14:36 | 01-28 14:46 | 190.62 | 191.38 | 41 | 7815.42 | +31.16 | +0.4% | 0.8R | 10m | market | trailing-stop | mixed | mean-revert | neutral | 29.78 | ↓191.24 | 0.4576 | 1.39 | **WIN** |
| 2 | META | 01-29 14:31 | 01-29 14:34 | 730.87 | 730.57 | 13 | 9501.31 | -3.9 | -0.04% | 0.03R | 3m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 38.94 | ↓735.02 | 4.2221 | 9.97 | **LOSS** |
| 3 | META | 01-29 14:35 | 01-29 14:38 | 724.8 | 724.32 | 11 | 7972.8 | -5.28 | -0.07% | 0.05R | 3m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 45.55 | ↓731.87 | 2.2596 | 1.92 | **LOSS** |
| 4 | META | 01-29 16:58 | 01-29 17:16 | 724.74 | 733.25 | 13 | 9421.62 | +110.63 | +1.17% | 2.25R | 18m | market | profit-target | mixed | mean-revert | noisyHighBeta | 51.3 | ↑724.58 | 1.2332 | 1.34 | **WIN** |
| 5 | AMZN | 02-02 14:52 | 02-02 15:13 | 243.02 | 244.64 | 46 | 11178.92 | +74.52 | +0.67% | 1.34R | 21m | market | timeout | trend | trend | thinChop | 73.6 | ↑241.07 | 0.674 | 1 | **WIN** |
| 6 | GOOGL | 02-02 14:56 | 02-02 15:17 | 341.11 | 344.23 | 32 | 10915.52 | +99.84 | +0.91% | 1.82R | 21m | market | timeout | trend | trend | thinChop | 75.25 | ↑338 | 0.6032 | 1.07 | **WIN** |
| 7 | NVDA | 02-03 14:32 | 02-03 14:40 | 185.15 | 183.57 | 42 | 7776.3 | -66.36 | -0.85% | 1.1R | 8m | market | stop-loss | mixed | mean-revert | neutral | 48.47 | ↓185.62 | 0.0456 | 5.65 | **LOSS** |
| 8 | META | 02-03 14:43 | 02-03 14:56 | 709.53 | 705.3 | 13 | 9223.89 | -54.99 | -0.6% | 0.68R | 13m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.98 | ↓710.35 | 1.0528 | 0.85 | **LOSS** |
| 9 | GOOGL | 02-03 14:57 | 02-03 15:01 | 344.91 | 342.54 | 28 | 9657.48 | -66.36 | -0.69% | 1.21R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 62.36 | ↓346.17 | 0.2625 | 0.88 | **LOSS** |
| 10 | GOOGL | 02-04 14:31 | 02-04 14:37 | 340.77 | 341.25 | 28 | 9541.56 | +13.44 | +0.14% | 0.27R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 57.93 | ↓341.51 | 0.5273 | 2.65 | **WIN** |
| 11 | GOOGL | 02-05 14:59 | 02-05 15:06 | 321.15 | 318.2 | 29 | 9313.35 | -85.55 | -0.92% | 1R | 7m | market | stop-loss | mixed | mean-revert | thinChop | 39.68 | ↑317.04 | -0.6121 | 0.9 | **LOSS** |
| 12 | NVDA | 02-06 14:34 | 02-06 14:44 | 177.54 | 179.88 | 63 | 11185.02 | +147.42 | +1.32% | 1.74R | 10m | market | profit-target | trend | trend | neutral | 60.18 | ↑176.11 | 1.072 | 3.49 | **WIN** |
| 13 | NVDA | 02-06 15:01 | 02-06 15:22 | 180.37 | 181.91 | 54 | 9739.98 | +83.16 | +0.85% | 1.04R | 21m | market | timeout | mixed | mean-revert | neutral | 48.19 | ↑179.34 | 0.8708 | 1.27 | **WIN** |
| 14 | NVDA | 02-06 15:27 | 02-06 15:48 | 182.35 | 182.22 | 61 | 11123.35 | -7.93 | -0.07% | 0.11R | 21m | market | stagnation | trend | trend | neutral | 78.98 | ↑179.79 | 0.5864 | 1.57 | **LOSS** |
| 15 | AMZN | 02-06 15:50 | 02-06 15:54 | 205.34 | 204.1 | 47 | 9650.98 | -58.28 | -0.6% | 1.15R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.76 | ↑203.51 | 0.3854 | 1.55 | **LOSS** |
| 16 | META | 02-06 15:50 | 02-06 16:11 | 655.2 | 657.63 | 12 | 7862.4 | +29.16 | +0.37% | 0.74R | 21m | market | timeout | mixed | mean-revert | thinChop | 45.25 | ↑656.25 | 0.6409 | 0.92 | **WIN** |
| 17 | AMZN | 02-06 17:38 | 02-06 17:59 | 208.34 | 210.66 | 47 | 9791.98 | +109.04 | +1.11% | 1.76R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 67.43 | ↑204.37 | 0.7736 | 1.46 | **WIN** |
| 18 | NVDA | 02-09 15:11 | 02-09 15:17 | 191.29 | 191.56 | 51 | 9755.79 | +13.77 | +0.14% | 0.19R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 53.18 | ↑190.07 | 0.4215 | 1.24 | **WIN** |
| 19 | META | 02-09 16:59 | 02-09 17:20 | 678.91 | 682.69 | 14 | 9504.74 | +52.92 | +0.56% | 1.12R | 21m | market | timeout | mixed | mean-revert | neutral | 59.98 | ↑668.27 | 2.3565 | 0.95 | **WIN** |
| 20 | NVDA | 02-10 14:33 | 02-10 14:45 | 190.93 | 189.05 | 49 | 9355.57 | -92.12 | -0.98% | 1.78R | 12m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 48.67 | ↓191.64 | 0.3062 | 2.14 | **LOSS** |
| 21 | AMZN | 02-10 15:13 | 02-10 15:34 | 210.63 | 211.87 | 41 | 8635.83 | +50.84 | +0.59% | 1.05R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 58.5 | ↑208.69 | 0.8283 | 1.16 | **WIN** |
| 22 | NVDA | 02-11 14:45 | 02-11 14:52 | 193.29 | 191.81 | 58 | 11210.82 | -85.84 | -0.77% | 0.95R | 7m | market | stop-loss | trend | trend | neutral | 55.91 | ↓192.1 | 0.4851 | 1.26 | **LOSS** |
| 23 | META | 02-11 16:00 | 02-11 16:16 | 670.18 | 669.14 | 13 | 8712.34 | -13.52 | -0.16% | 0.23R | 16m | market | stagnation | mixed | mean-revert | neutral | 62.68 | ↓669.39 | 2.0658 | 1.27 | **LOSS** |
| 24 | NVDA | 02-12 14:41 | 02-12 14:57 | 191.89 | 191.5 | 50 | 9594.5 | -19.5 | -0.2% | 0.26R | 16m | market | stagnation | mixed | mean-revert | neutral | 43.79 | ↓192.52 | 0.2942 | 1.86 | **LOSS** |
| 25 | GOOGL | 02-12 16:46 | 02-12 17:02 | 314.26 | 312.91 | 31 | 9742.06 | -41.85 | -0.43% | 0.78R | 16m | market | early-reversal | mixed | mean-revert | neutral | 62.27 | ↑311.84 | 1.1898 | 0.89 | **LOSS** |
| 26 | NVDA | 02-13 15:38 | 02-13 15:46 | 184.11 | 182.95 | 49 | 9021.39 | -56.84 | -0.63% | 1.26R | 8m | market | stop-loss | mixed | mean-revert | neutral | 58.84 | ↓183.94 | 0.313 | 1.66 | **LOSS** |
| 27 | META | 02-13 15:40 | 02-13 16:01 | 645.04 | 647.65 | 10 | 6450.4 | +26.1 | +0.4% | 0.8R | 21m | market | timeout | mixed | mean-revert | neutral | 43.49 | ↑642.98 | 0.5847 | 1.09 | **WIN** |
| 28 | GOOGL | 02-20 14:30 | 02-20 14:38 | 305.57 | 309.93 | 36 | 11000.52 | +156.96 | +1.43% | 2.55R | 8m | market | profit-target | trend | trend | neutral | 65.55 | ↑305.12 | 0.3954 | 2.45 | **WIN** |
| 29 | AMZN | 02-20 14:36 | 02-20 14:48 | 206.45 | 206.68 | 54 | 11148.3 | +12.42 | +0.11% | 0.18R | 12m | market | trailing-stop | trend | trend | neutral | 69.54 | ↑205.57 | 0.439 | 1.63 | **WIN** |
| 30 | META | 02-20 15:10 | 02-20 15:16 | 656.41 | 651.07 | 17 | 11158.97 | -90.78 | -0.81% | 1.31R | 6m | market | stop-loss | trend | trend | neutral | 69.77 | ↑649.83 | 1.6189 | 1.81 | **LOSS** |
| 31 | AMZN | 02-20 15:11 | 02-20 15:27 | 210.12 | 208.9 | 53 | 11136.36 | -64.66 | -0.58% | 0.72R | 16m | market | early-reversal | trend | trend | neutral | 79.91 | ↑207.36 | 0.9656 | 1.18 | **LOSS** |
| 32 | NVDA | 02-20 15:44 | 02-20 16:05 | 189.28 | 189.61 | 59 | 11167.52 | +19.47 | +0.17% | 0.34R | 21m | market | timeout | trend | trend | neutral | 75.09 | ↑187.81 | 0.2733 | 2.37 | **WIN** |
| 33 | META | 02-26 14:41 | 02-26 14:58 | 659.11 | 658.54 | 17 | 11204.87 | -9.69 | -0.09% | 0.11R | 17m | market | stagnation | trend | trend | neutral | 60.91 | ↑653.2 | 1.0125 | 1.35 | **LOSS** |
| 34 | META | 03-03 14:30 | 03-03 14:33 | 651.61 | 651.53 | 14 | 9122.54 | -1.12 | -0.01% | 0.02R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 43.92 | ↓649.43 | 0.3545 | 1.05 | **LOSS** |
| 35 | NVDA | 03-04 14:33 | 03-04 14:38 | 181.23 | 181.18 | 54 | 9786.42 | -2.7 | -0.03% | 0.04R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 59.23 | ↑180.77 | 0.2553 | 1.55 | **LOSS** |
| 36 | AMZN | 03-04 14:51 | 03-04 15:04 | 213.64 | 214.91 | 26 | 11109.28 | +33.02 | +0.59% | 0.88R | 13m | market | trim-profit-target | trend | trend | neutral | 76.87 | ↑211.93 | 0.7737 | 1.09 | **WIN** |
| 37 | AMZN | 03-04 14:51 | 03-04 15:05 | 213.64 | 214.69 | 26 | 11109.28 | +27.3 | +0.49% | 0.73R | 14m | market | trailing-stop | trend | trend | neutral | 76.87 | ↑211.93 | 0.7737 | 1.09 | **WIN** |
| 38 | META | 03-04 15:00 | 03-04 15:16 | 668.22 | 666.26 | 16 | 10691.52 | -31.36 | -0.29% | 0.56R | 16m | market | early-reversal | trend | trend | neutral | 77.37 | ↑662.85 | 2.0618 | 2.94 | **LOSS** |
| 39 | AMZN | 03-05 14:35 | 03-05 14:45 | 218.98 | 219.23 | 51 | 11167.98 | +12.75 | +0.11% | 0.19R | 10m | market | trailing-stop | trend | trend | neutral | 78.29 | ↑217.98 | 0.4031 | 1.14 | **WIN** |
| 40 | GOOGL | 03-09 14:27 | 03-09 14:48 | 296.96 | 299.14 | 33 | 9799.68 | +71.94 | +0.73% | 1.43R | 21m | market | timeout | mixed | mean-revert | neutral | 56.96 | ↑296.16 | 0.4407 | 1.14 | **WIN** |
| 41 | GOOGL | 03-11 14:35 | 03-11 14:56 | 309.67 | 310.32 | 30 | 9290.1 | +19.5 | +0.21% | 0.42R | 21m | market | timeout | mixed | mean-revert | neutral | 38.39 | ↑308.77 | 0.2733 | 0.9 | **WIN** |
| 42 | NVDA | 03-23 13:30 | 03-23 13:35 | 176.09 | 176.67 | 52 | 9156.68 | +30.16 | +0.33% | 0.66R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 44.6 | ↓176.39 | 0.6439 | 18.24 | **WIN** |
| 43 | GOOGL | 03-25 13:40 | 03-25 13:47 | 294.48 | 292.85 | 28 | 8245.44 | -45.64 | -0.55% | 0.65R | 7m | market | stop-loss | mixed | mean-revert | neutral | 70.18 | ↓294.23 | 1.006 | 0.9 | **LOSS** |
| 44 | META | 03-30 13:33 | 03-30 13:49 | 533.38 | 532.85 | 18 | 9600.84 | -9.54 | -0.1% | 0.12R | 16m | market | stagnation | mixed | mean-revert | neutral | 67.65 | ↓534.89 | 2.3165 | 1.03 | **LOSS** |
| 45 | NVDA | 03-31 14:18 | 03-31 14:35 | 170.84 | 170.72 | 65 | 11104.6 | -7.8 | -0.07% | 0.14R | 17m | market | stagnation | trend | trend | neutral | 70.84 | ↑168.99 | 0.3899 | 1.06 | **LOSS** |
| 46 | META | 03-31 17:17 | 03-31 17:33 | 571.95 | 571.59 | 19 | 10867.05 | -6.84 | -0.06% | 0.12R | 16m | market | stagnation | trend | trend | neutral | 68.23 | ↑558.2 | 1.497 | 1.15 | **LOSS** |
| 47 | NVDA | 04-01 13:43 | 04-01 14:04 | 175.27 | 175.82 | 45 | 7887.15 | +24.75 | +0.31% | 0.47R | 21m | market | timeout | mixed | mean-revert | thinChop | 47.47 | ↓175.9 | 0.1884 | 0.94 | **WIN** |
| 48 | META | 04-01 13:43 | 04-01 13:46 | 579.89 | 575.7 | 16 | 9278.24 | -67.04 | -0.72% | 0.91R | 3m | market | stop-loss | mixed | mean-revert | neutral | 64.29 | ↓580.67 | 2.5338 | 1.22 | **LOSS** |
| 49 | NVDA | 04-02 14:50 | 04-02 15:02 | 175.34 | 175.74 | 55 | 9643.7 | +22 | +0.23% | 0.36R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 37.43 | ↑173.82 | 0.3024 | 2 | **WIN** |
| 50 | META | 04-02 14:51 | 04-02 15:07 | 571.35 | 570.05 | 17 | 9712.95 | -22.1 | -0.23% | 0.41R | 16m | market | early-reversal | mixed | mean-revert | neutral | 24.94 | ↑567.76 | 0.6098 | 1.39 | **LOSS** |
| 51 | NVDA | 04-08 13:39 | 04-08 13:56 | 183.25 | 183.08 | 53 | 9712.25 | -9.01 | -0.09% | 0.16R | 17m | market | stagnation | mixed | mean-revert | neutral | 31.89 | ↓184.02 | 1.1473 | 2.56 | **LOSS** |
| 52 | GOOGL | 04-08 13:51 | 04-08 14:07 | 316.08 | 315.36 | 21 | 6637.68 | -15.12 | -0.23% | 0.45R | 16m | market | early-reversal | mixed | mean-revert | neutral | 45.96 | ↓318.25 | 1.1427 | 0.87 | **LOSS** |
| 53 | AMZN | 04-08 13:53 | 04-08 14:14 | 220.12 | 220.8 | 31 | 6823.72 | +21.08 | +0.31% | 0.62R | 21m | market | timeout | mixed | mean-revert | neutral | 28.43 | ↓222.02 | 0.6143 | 0.99 | **WIN** |
| 54 | META | 04-08 16:47 | 04-08 17:04 | 627.49 | 627.11 | 17 | 10667.33 | -6.46 | -0.06% | 0.1R | 17m | market | stagnation | trend | trend | neutral | 79.13 | ↑605.7 | 3.232 | 1.28 | **LOSS** |
| 55 | NVDA | 04-10 14:01 | 04-10 14:22 | 186.47 | 187.47 | 45 | 8391.15 | +45 | +0.54% | 1.08R | 21m | market | timeout | mixed | mean-revert | neutral | 39.93 | ↑186.31 | 0.4297 | 0.98 | **WIN** |
| 56 | META | 04-13 14:08 | 04-13 14:16 | 630.53 | 627.03 | 15 | 9457.95 | -52.5 | -0.56% | 1.12R | 8m | market | stop-loss | mixed | mean-revert | neutral | 60.26 | ↓628.44 | 1.09 | 1.35 | **LOSS** |
| 57 | NVDA | 04-15 13:44 | 04-15 13:56 | 196.95 | 197.89 | 22 | 8665.8 | +20.68 | +0.48% | 0.7R | 12m | market | trim-profit-target | mixed | mean-revert | neutral | 56.99 | ↑197.64 | 0.3088 | 1.58 | **WIN** |
| 58 | NVDA | 04-15 13:44 | 04-15 14:05 | 196.95 | 198.48 | 22 | 8665.8 | +33.66 | +0.78% | 1.13R | 21m | market | timeout | mixed | mean-revert | neutral | 56.99 | ↑197.64 | 0.3088 | 1.58 | **WIN** |
| 59 | META | 04-17 13:31 | 04-17 13:46 | 676.49 | 685.33 | 11 | 7441.39 | +97.24 | +1.31% | 2.62R | 15m | market | profit-target | mixed | mean-revert | neutral | 51.61 | ↑677.81 | 0.8933 | 1.15 | **WIN** |
| 60 | NVDA | 04-17 13:33 | 04-17 13:54 | 199.44 | 201.14 | 40 | 7977.6 | +68 | +0.85% | 1.33R | 21m | market | timeout | mixed | mean-revert | neutral | 58.29 | ↑200 | 0.434 | 1.04 | **WIN** |
| 61 | GOOGL | 04-23 13:36 | 04-23 13:57 | 339.36 | 340.01 | 20 | 6787.2 | +13 | +0.19% | 0.38R | 21m | market | timeout | mixed | mean-revert | neutral | 46.94 | ↑340.02 | 0.1468 | 0.99 | **WIN** |
| 62 | AMZN | 04-24 13:42 | 04-24 13:58 | 259 | 258.75 | 36 | 9324 | -9 | -0.1% | 0.13R | 16m | market | stagnation | mixed | mean-revert | neutral | 44.73 | ↓259.84 | 0.9149 | 1.24 | **LOSS** |
| 63 | NVDA | 04-24 13:43 | 04-24 13:51 | 201.93 | 202.11 | 47 | 9490.71 | +8.46 | +0.09% | 0.1R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 63.93 | ↓202.19 | 0.7316 | 1.22 | **WIN** |
| 64 | NVDA | 04-24 14:39 | 04-24 14:55 | 204.77 | 207.31 | 54 | 11057.58 | +137.16 | +1.24% | 2.48R | 16m | market | profit-target | trend | trend | neutral | 77.96 | ↑202.51 | 0.4424 | 2.11 | **WIN** |
| 65 | NVDA | 04-24 14:59 | 04-24 15:18 | 208.76 | 208.55 | 53 | 11064.28 | -11.13 | -0.1% | 0.18R | 19m | market | trailing-stop | trend | trend | neutral | 77.49 | ↑204.21 | 1.1357 | 1.17 | **LOSS** |

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

- ✅ **Profit factor 1.53** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.79R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T02:35:54.544Z*
