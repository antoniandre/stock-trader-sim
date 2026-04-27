# Bot Trade Report — 226 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:59:23.643Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 8 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $3448.21 (+3.45%) over 226 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 226 |
| Win rate | 42.48% (96W / 130L) |
| Net P&L | $+3448.21 (+3.45%) |
| Gross profit | $14270.48 |
| Gross loss | $10822.27 |
| Profit factor | 1.32 |
| Avg win | $148.65 |
| Avg loss | $83.25 |
| Payoff ratio | 1.79:1 |
| Expectancy | $+15.26 / trade |
| Max drawdown | 1.31% |
| Sharpe ratio (ann.) | 1.98 |
| Trades / active day | 1.74 |
| Avg confidence | 99.27% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.78R |
| Starting equity | $100,000 |
| Ending equity | $103,448.21 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 226 | 42.48% | $+3448.21 | $15.26 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 40 | 18 | 45% | $+1292.96 | $+32.32 | 1.56 | eligible |
| MRVL | 38 | 18 | 47.37% | $+1052.9 | $+27.71 | 1.59 | eligible |
| TSLA | 37 | 15 | 40.54% | $+513.01 | $+13.87 | 1.27 | eligible |
| NVDA | 31 | 13 | 41.94% | $+321.95 | $+10.39 | 1.27 | eligible |
| BA | 21 | 11 | 52.38% | $+221.55 | $+10.55 | 1.25 | eligible |
| SHOP | 20 | 7 | 35% | $+133.22 | $+6.66 | 1.11 | throttle |
| GOOGL | 20 | 6 | 30% | $+45.32 | $+2.27 | 1.06 | throttle |
| GS | 19 | 8 | 42.11% | $-132.7 | $-6.98 | 0.79 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 111 | 44 | 39.64% | $+2157.7 | $+19.44 |
| trend | 115 | 52 | 45.22% | $+1290.51 | $+11.22 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 155 | 68 | 43.87% | $+2129.84 | $+13.74 |
| extendedBreakout | 32 | 12 | 37.5% | $+867.43 | $+27.11 |
| noisyHighBeta | 33 | 14 | 42.42% | $+381.82 | $+11.57 |
| falseBreakoutProne | 5 | 2 | 40% | $+110.99 | $+22.2 |
| thinChop | 1 | 0 | 0% | $-41.87 | $-41.87 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | breakout | 55 | 1.48 | $+22.65 | 56 | 1.23 | $+16.28 | 1.2% | 1.03 | watch |
| Time slot | Mid 10:30-11:30 | 135 | 1.58 | $+22.09 | 91 | 1.08 | $+5.12 | 1.34% | 0.88 | watch |
| Behavior | noisyHighBeta | 19 | 1.34 | $+16.34 | 14 | 1.05 | $+5.1 | 0.76% | 0.92 | watch |
| Setup | trend | 80 | 1.67 | $+21.7 | 35 | 0.72 | $-12.73 | 0.9% | 0.54 | watch |
| Behavior | neutral | 97 | 1.92 | $+30.49 | 58 | 0.75 | $-14.27 | 1.4% | 0.59 | watch |
| Symbol | MRVL | 28 | 2.07 | $+43.21 | 10 | 0.76 | $-15.7 | 0.3% | 0.61 | watch |
| Symbol | GS | 8 | 1.32 | $+8.09 | 11 | 0.55 | $-17.95 | 0.28% | 0.37 | watch |
| Symbol | BA | 11 | 10.03 | $+66.55 | 10 | 0.37 | $-51.05 | 0.61% | 0.28 | watch |
| Symbol | SHOP | 12 | 3.31 | $+61.83 | 8 | 0.35 | $-76.08 | 0.84% | 0.31 | watch |
| Symbol | INTC | 23 | 1.18 | $+8.67 | 17 | 1.9 | $+64.33 | 0.72% | 1.64 | reject |
| Behavior | extendedBreakout | 16 | 0.86 | $-7.85 | 16 | 2.17 | $+62.07 | 0.34% | 1.78 | reject |
| Symbol | NVDA | 16 | 0.73 | $-11.92 | 15 | 2.07 | $+34.18 | 0.26% | 1.57 | reject |
| Symbol | TSLA | 25 | 1.13 | $+5.99 | 12 | 1.49 | $+30.27 | 0.44% | 1.23 | reject |
| Symbol | GOOGL | 12 | 1.16 | $+6.26 | 8 | 0.92 | $-3.72 | 0.37% | 0.69 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+2849.47 | 1.25 |
| +3 bps/side | $+1651.84 | 1.14 |
| +5 bps/side | $+454.3 | 1.04 |
| +10 bps/side | $-2539.48 | 0.83 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 85 |
| timeout | 62 |
| stagnation | 29 |
| profit-target | 16 |
| trim-profit-target | 10 |
| stop-loss | 10 |
| breakeven-stop | 8 |
| trailing-stop | 6 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 2 | MRVL | 05-01 14:30 | 05-01 15:30 | 61.43 | 61.39 | 227 | 13944.61 | -9.08 | -0.07% | 0.04R | 60m | market | stagnation | trend | trend | neutral | 65.67 | ↑60.26 | 0.9581 | 1.33 | **LOSS** |
| 3 | GS | 05-01 15:10 | 05-01 16:00 | 555.82 | 555.36 | 25 | 13895.5 | -11.5 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 4 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 121 | 13887.17 | -71.39 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 5 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.38 | 682 | 13987.82 | -88.66 | -0.63% | 0.58R | 25m | market | early-reversal | breakout | trend | neutral | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 6 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 7 | GS | 05-08 15:20 | 05-08 17:10 | 565.81 | 571.01 | 24 | 13579.44 | +124.8 | +0.92% | 1.31R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 8 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 9 | GOOGL | 05-14 14:50 | 05-14 16:35 | 164.56 | 166.13 | 85 | 13987.6 | +133.45 | +0.95% | 0.86R | 105m | market | timeout | trend | trend | neutral | 72.45 | ↑161.77 | 1.1375 | 1.32 | **WIN** |
| 10 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.56 | 650 | 13975 | +39 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 11 | GOOGL | 05-21 14:55 | 05-21 16:20 | 171.69 | 171.6 | 81 | 13906.89 | -7.29 | -0.05% | 0.04R | 85m | market | stagnation | trend | trend | neutral | 79.73 | ↑168.55 | 1.8998 | 1.34 | **LOSS** |
| 12 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 650 | 13988 | -39 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 13 | MRVL | 05-21 15:05 | 05-21 16:50 | 61.99 | 62.3 | 225 | 13947.75 | +69.75 | +0.5% | 0.6R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 14 | NVDA | 05-21 15:05 | 05-21 16:20 | 135.33 | 136.83 | 51 | 13938.99 | +76.5 | +1.11% | 1.59R | 75m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 15 | NVDA | 05-21 15:05 | 05-21 16:50 | 135.33 | 137.25 | 52 | 13938.99 | +99.84 | +1.42% | 2.03R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑134.18 | 0.264 | 1.3 | **WIN** |
| 16 | TSLA | 05-22 15:20 | 05-22 15:40 | 343.98 | 342.31 | 40 | 13759.2 | -66.8 | -0.49% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 17 | TSLA | 05-30 14:40 | 05-30 15:10 | 362.86 | 361.18 | 38 | 13788.68 | -63.84 | -0.46% | 0.4R | 30m | market | early-reversal | trend | trend | neutral | 73.21 | ↑358.34 | 0.9887 | 1.32 | **LOSS** |
| 18 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.23 | 353.59 | 39 | 13619.97 | +170.04 | +1.25% | 0.95R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 19 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.11 | 62.86 | 221 | 13947.31 | -55.25 | -0.4% | 0.38R | 35m | market | early-reversal | breakout | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 20 | MRVL | 06-04 14:55 | 06-04 16:10 | 63.98 | 64.75 | 109 | 13947.64 | +83.93 | +1.2% | 0.91R | 75m | market | trim-profit-target | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 21 | MRVL | 06-04 14:55 | 06-04 16:40 | 63.98 | 65.48 | 109 | 13947.64 | +163.5 | +2.34% | 1.77R | 105m | market | timeout | trend | trend | neutral | 59.82 | ↑63.11 | 0.1928 | 2.42 | **WIN** |
| 22 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 23 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.7 | 110.94 | 126 | 13948.2 | +30.24 | +0.22% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 24 | MRVL | 06-09 14:30 | 06-09 14:50 | 71.11 | 70.47 | 197 | 14008.67 | -126.08 | -0.9% | 0.54R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 67.45 | ↑70.25 | 0.5731 | 1.23 | **LOSS** |
| 25 | NVDA | 06-09 14:30 | 06-09 14:55 | 144.78 | 144.19 | 96 | 13898.88 | -56.64 | -0.41% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 63.45 | ↑143.87 | 0.5143 | 1.96 | **LOSS** |
| 26 | BA | 06-09 14:45 | 06-09 16:30 | 214.76 | 216.3 | 65 | 13959.4 | +100.1 | +0.72% | 1.03R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 27 | INTC | 06-10 14:30 | 06-10 15:30 | 20.83 | 20.75 | 671 | 13976.93 | -53.68 | -0.38% | 0.32R | 60m | market | early-reversal | trend | trend | neutral | 64.56 | ↑20.52 | 0.0423 | 1.52 | **LOSS** |
| 28 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.09 | 69.73 | 199 | 13947.91 | -71.64 | -0.51% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 29 | NVDA | 06-12 14:40 | 06-12 15:30 | 144.79 | 144.4 | 96 | 13899.84 | -37.44 | -0.27% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 79.91 | ↑143.7 | 0.5966 | 1.35 | **LOSS** |
| 30 | NVDA | 06-16 15:00 | 06-16 16:45 | 145.36 | 145.63 | 96 | 13954.56 | +25.92 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 65.59 | ↑144.43 | 0.3785 | 3.27 | **WIN** |
| 31 | NVDA | 06-18 14:35 | 06-18 14:55 | 145.58 | 145.05 | 96 | 13975.68 | -50.88 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 65.26 | ↑144.42 | 0.2824 | 1.14 | **LOSS** |
| 32 | TSLA | 06-23 14:40 | 06-23 15:30 | 354.94 | 353.94 | 39 | 13842.66 | -39 | -0.28% | 0.14R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 88.13 | ↑343.02 | 8.4922 | 1.17 | **LOSS** |
| 33 | INTC | 06-24 14:30 | 06-24 16:15 | 22.16 | 22.51 | 630 | 13960.8 | +220.5 | +1.58% | 1.07R | 105m | market | timeout | trend | trend | neutral | 75.58 | ↑21.87 | 0.2142 | 2.13 | **WIN** |
| 34 | SHOP | 06-24 15:20 | 06-24 15:40 | 114.83 | 114.49 | 122 | 14009.26 | -41.48 | -0.3% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 72.99 | ↑113.56 | 1.1687 | 1.34 | **LOSS** |
| 35 | NVDA | 06-25 14:30 | 06-25 15:05 | 152.36 | 151.76 | 91 | 13864.76 | -54.6 | -0.39% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 77.94 | ↑151 | 1.0532 | 1.05 | **LOSS** |
| 36 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.13 | 617 | 13993.56 | +277.65 | +1.98% | 2.36R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 37 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.5 | 78.95 | 178 | 13973 | +80.1 | +0.57% | 0.42R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 38 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 120 | 13910.4 | -37.2 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 39 | BA | 07-02 15:10 | 07-02 16:55 | 212.2 | 212.61 | 66 | 14005.2 | +27.06 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 40 | MRVL | 07-08 14:40 | 07-08 15:20 | 73.16 | 72.88 | 191 | 13973.56 | -53.48 | -0.38% | 0.37R | 40m | market | early-reversal | trend | trend | neutral | 72.85 | ↑72.42 | 0.3051 | 1.25 | **LOSS** |
| 41 | INTC | 07-08 15:00 | 07-08 15:20 | 23.4 | 23.25 | 600 | 14040 | -90 | -0.64% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 78.61 | ↑22.96 | 0.3384 | 1.13 | **LOSS** |
| 42 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.41 | 117.76 | 121 | 13964.61 | +284.35 | +2.04% | 2.91R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 43 | TSLA | 07-16 14:30 | 07-16 15:20 | 319.69 | 318.1 | 43 | 13746.67 | -68.37 | -0.5% | 0.3R | 50m | market | early-reversal | breakout | breakout | neutral | 78.44 | ↑316.63 | 1.4422 | 1.43 | **LOSS** |
| 44 | SHOP | 07-16 14:30 | 07-16 15:20 | 117.25 | 116.28 | 119 | 13952.75 | -115.43 | -0.83% | 0.52R | 50m | market | early-reversal | breakout | breakout | neutral | 66.14 | ↑114.74 | 0.0075 | 2.38 | **LOSS** |
| 45 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.06 | 125 | 113 | 13905.78 | +219.22 | +1.58% | 1.39R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 46 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.2 | 72.83 | 97 | 14006.8 | +61.11 | +0.87% | 1.04R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 47 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.2 | 72.84 | 97 | 14006.8 | +62.08 | +0.89% | 1.06R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 48 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.07 | 74.13 | 95 | 13956.37 | +100.7 | +1.45% | 1.26R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 49 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.07 | 73.99 | 96 | 13956.37 | +88.32 | +1.26% | 1.1R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 50 | BA | 07-23 15:05 | 07-23 16:30 | 231.57 | 233.9 | 30 | 13894.2 | +69.9 | +1.01% | 1.44R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 51 | BA | 07-23 15:05 | 07-23 16:50 | 231.57 | 233.91 | 30 | 13894.2 | +70.2 | +1.01% | 1.44R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 52 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.57 | 78.09 | 178 | 13985.46 | -85.44 | -0.61% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 53 | TSLA | 08-06 15:10 | 08-06 15:45 | 319.05 | 317.9 | 43 | 13719.15 | -49.45 | -0.36% | 0.38R | 35m | market | early-reversal | trend | trend | neutral | 76.39 | ↑314.82 | 2.2409 | 1.06 | **LOSS** |
| 54 | GOOGL | 08-08 15:00 | 08-08 15:50 | 202.18 | 201.53 | 69 | 13950.42 | -44.85 | -0.32% | 0.37R | 50m | market | early-reversal | trend | trend | neutral | 72.4 | ↑200.35 | 1.5086 | 1.17 | **LOSS** |
| 55 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 653 | 14019.91 | -65.3 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 56 | INTC | 08-13 14:30 | 08-13 16:15 | 21.79 | 22.25 | 643 | 14010.97 | +295.78 | +2.11% | 1.82R | 105m | market | timeout | trend | trend | neutral | 64.29 | ↑21.56 | 0.013 | 1.16 | **WIN** |
| 57 | MRVL | 08-13 14:40 | 08-13 15:00 | 80.04 | 79.11 | 175 | 14007 | -162.75 | -1.16% | 0.88R | 20m | market | early-reversal | trend | trend | neutral | 61.57 | ↓79.47 | 0.5948 | 1.22 | **LOSS** |
| 58 | GOOGL | 08-14 15:05 | 08-14 15:25 | 204.23 | 203.26 | 68 | 13887.64 | -65.96 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 76.59 | ↑202.44 | 0.4853 | 1.11 | **LOSS** |
| 59 | SHOP | 08-18 15:05 | 08-18 15:45 | 142.8 | 142.41 | 98 | 13994.4 | -38.22 | -0.27% | 0.39R | 40m | market | early-reversal | trend | trend | neutral | 67.34 | ↑141.46 | 0.2534 | 2.03 | **LOSS** |
| 60 | INTC | 08-18 15:20 | 08-18 16:15 | 24.26 | 24.17 | 579 | 14046.54 | -52.11 | -0.37% | 0.27R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 52.86 | ↑23.87 | 0.0359 | 1.15 | **LOSS** |
| 61 | INTC | 08-20 15:20 | 08-20 15:40 | 23.84 | 23.66 | 589 | 14041.76 | -106.02 | -0.76% | 0.55R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 64.32 | ↓23.73 | -0.3005 | 1.59 | **LOSS** |
| 62 | TSLA | 09-03 14:40 | 09-03 15:30 | 340.09 | 339.88 | 41 | 13943.69 | -8.61 | -0.06% | 0.05R | 50m | market | stagnation | breakout | trend | neutral | 79.78 | ↑333.45 | 2.5132 | 1.23 | **LOSS** |
| 63 | INTC | 09-04 14:30 | 09-04 16:15 | 24.11 | 24.23 | 582 | 14032.02 | +69.84 | +0.5% | 0.61R | 105m | market | timeout | trend | trend | neutral | 73.45 | ↑23.96 | 0.0378 | 2.9 | **WIN** |
| 64 | MRVL | 09-04 15:05 | 09-04 16:50 | 63.07 | 64.11 | 222 | 14001.54 | +230.88 | +1.65% | 1.42R | 105m | market | timeout | trend | trend | noisyHighBeta | 79.18 | ↑62.42 | 0.2288 | 1.09 | **WIN** |
| 65 | MRVL | 09-08 14:35 | 09-08 16:20 | 64.8 | 64.95 | 216 | 13996.8 | +32.4 | +0.23% | 0.16R | 105m | market | timeout | trend | trend | neutral | 71.43 | ↑64.31 | 0.415 | 1 | **WIN** |
| 66 | GS | 09-09 14:35 | 09-09 16:20 | 753.23 | 755.34 | 18 | 13558.14 | +37.98 | +0.28% | 0.4R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑748.55 | 3.0454 | 9.25 | **WIN** |
| 67 | TSLA | 09-10 14:45 | 09-10 16:30 | 353.36 | 354.25 | 39 | 13781.04 | +34.71 | +0.25% | 0.24R | 105m | market | timeout | trend | trend | neutral | 74.98 | ↑349.54 | 1.3269 | 1.5 | **WIN** |
| 68 | SHOP | 09-11 14:50 | 09-11 15:10 | 146.02 | 145.53 | 96 | 14017.92 | -47.04 | -0.34% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 56.59 | ↑145.16 | 1.0062 | 1.43 | **LOSS** |
| 69 | GS | 09-15 14:40 | 09-15 15:45 | 789.64 | 783.06 | 17 | 13423.88 | -111.86 | -0.83% | 1.19R | 65m | market | stop-loss | trend | trend | neutral | 69.3 | ↓787.28 | 2.0298 | 1.22 | **LOSS** |
| 70 | INTC | 09-24 14:40 | 09-24 15:00 | 30.97 | 30.76 | 453 | 14029.41 | -95.13 | -0.68% | 0.38R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 80.93 | ↑30.44 | 0.3128 | 1.93 | **LOSS** |
| 71 | MRVL | 09-25 15:20 | 09-25 16:00 | 79.09 | 82.4 | 177 | 13998.93 | +585.87 | +4.19% | 3.35R | 40m | market | profit-target | mixed | breakout | neutral | 65.02 | ↑77.63 | -0.3652 | 1.7 | **WIN** |
| 72 | NVDA | 09-30 14:30 | 09-30 15:35 | 185.96 | 185.84 | 75 | 13947 | -9 | -0.06% | 0.04R | 65m | market | stagnation | trend | trend | neutral | 66.67 | ↑183.92 | 0.939 | 2.59 | **LOSS** |
| 73 | INTC | 10-02 15:15 | 10-02 16:50 | 36.5 | 37 | 192 | 14016 | +96 | +1.37% | 1.15R | 95m | market | trim-profit-target | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 74 | INTC | 10-02 15:15 | 10-02 17:00 | 36.5 | 37.02 | 192 | 14016 | +99.84 | +1.42% | 1.19R | 105m | market | timeout | trend | trend | noisyHighBeta | 66.67 | ↑35.98 | 0.1541 | 1.24 | **WIN** |
| 75 | BA | 10-06 14:30 | 10-06 16:00 | 220.63 | 220.42 | 63 | 13899.69 | -13.23 | -0.1% | 0.1R | 90m | market | stagnation | trend | trend | neutral | 72.99 | ↑217.95 | 0.8588 | 1.53 | **LOSS** |
| 76 | TSLA | 10-13 14:35 | 10-13 14:50 | 428.74 | 422.06 | 32 | 13719.68 | -213.76 | -1.56% | 0.98R | 15m | market | stop-loss | trend | trend | neutral | 67.12 | ↓423.72 | 2.5762 | 1.2 | **LOSS** |
| 77 | INTC | 10-15 14:30 | 10-15 15:30 | 36.69 | 36.65 | 383 | 14052.27 | -15.32 | -0.11% | 0.07R | 60m | market | stagnation | breakout | breakout | noisyHighBeta | 65.4 | ↑36.28 | 0.0913 | 2.3 | **LOSS** |
| 78 | INTC | 10-16 14:35 | 10-16 14:55 | 37.88 | 37.5 | 371 | 14053.48 | -140.98 | -1% | 0.63R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.23 | ↑37.33 | 0.1232 | 1.2 | **LOSS** |
| 79 | BA | 10-24 15:20 | 10-24 16:10 | 221.61 | 221.42 | 63 | 13961.43 | -11.97 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 78.98 | ↑220.23 | 0.7466 | 1.32 | **LOSS** |
| 80 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 81 | TSLA | 10-27 15:15 | 10-27 17:00 | 453.68 | 457.65 | 30 | 13610.4 | +119.1 | +0.88% | 0.84R | 105m | market | timeout | breakout | breakout | extendedBreakout | 71.84 | ↑447.06 | 4.2216 | 2.76 | **WIN** |
| 82 | INTC | 10-28 15:15 | 10-28 16:55 | 41.54 | 42.14 | 169 | 14040.52 | +101.4 | +1.44% | 0.95R | 100m | market | trim-profit-target | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 83 | INTC | 10-28 15:15 | 10-28 17:00 | 41.54 | 42.16 | 169 | 14040.52 | +104.78 | +1.49% | 0.98R | 105m | market | timeout | trend | trend | noisyHighBeta | 73.83 | ↑40.86 | 0.4258 | 1.07 | **WIN** |
| 84 | SHOP | 10-28 15:15 | 10-28 15:40 | 177.45 | 176.92 | 79 | 14018.55 | -41.87 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | thinChop | 68.51 | ↑175.21 | 0.3323 | 1.33 | **LOSS** |
| 85 | GOOGL | 10-29 15:00 | 10-29 16:45 | 270.82 | 271.79 | 51 | 13811.82 | +49.47 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 78.06 | ↑269.16 | 0.609 | 1.45 | **WIN** |
| 86 | MRVL | 10-31 14:35 | 10-31 15:00 | 96.34 | 95.78 | 146 | 14065.64 | -81.76 | -0.58% | 0.29R | 25m | market | early-reversal | trend | trend | neutral | 77.99 | ↑94.67 | 1.6743 | 1.68 | **LOSS** |
| 87 | MRVL | 11-03 14:30 | 11-03 14:50 | 93.92 | 92.82 | 150 | 14088 | -165 | -1.17% | 0.82R | 20m | market | early-reversal | trend | trend | neutral | 58.96 | ↓94.02 | 0.3885 | 1.51 | **LOSS** |
| 88 | NVDA | 11-03 14:30 | 11-03 15:00 | 208.5 | 207.33 | 67 | 13969.5 | -78.39 | -0.56% | 0.5R | 30m | market | early-reversal | trend | trend | neutral | 72.19 | ↓208.48 | 1.0601 | 3.37 | **LOSS** |
| 89 | BA | 11-03 14:30 | 11-03 16:15 | 202.59 | 204.88 | 69 | 13978.71 | +158.01 | +1.13% | 1.61R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 90 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 91 | GS | 11-04 15:05 | 11-04 16:10 | 795.41 | 795.9 | 17 | 13521.97 | +8.33 | +0.06% | 0.07R | 65m | market | breakeven-stop | trend | trend | neutral | 59.44 | ↑784.31 | 0.4472 | 1.84 | **WIN** |
| 92 | GOOGL | 11-05 14:50 | 11-05 16:10 | 282.47 | 282.53 | 49 | 13841.03 | +2.94 | +0.02% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | neutral | 75.59 | ↑279.55 | 0.6978 | 1.13 | **WIN** |
| 93 | MRVL | 11-06 14:30 | 11-06 14:55 | 96.54 | 95.41 | 134 | 12936.36 | -151.42 | -1.17% | 0.64R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.54 | ↓96.65 | -0.034 | 5.5 | **LOSS** |
| 94 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 370 | 14045.2 | -122.1 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 95 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 96 | INTC | 11-10 14:40 | 11-10 15:00 | 39.44 | 39.19 | 356 | 14040.64 | -89 | -0.63% | 0.53R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.21 | ↓39.17 | 0.453 | 2.72 | **LOSS** |
| 97 | MRVL | 11-12 14:30 | 11-12 15:45 | 90.61 | 90.98 | 155 | 14044.55 | +57.35 | +0.41% | 0.4R | 75m | market | trailing-stop | breakout | breakout | noisyHighBeta | 67.43 | ↓90.72 | -0.0489 | 1.6 | **WIN** |
| 98 | NVDA | 11-14 14:40 | 11-14 16:25 | 186.12 | 189.92 | 75 | 13959 | +285 | +2.04% | 1.28R | 105m | market | timeout | breakout | breakout | neutral | 45.83 | ↑182.97 | -0.697 | 1.4 | **WIN** |
| 99 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 34 | 13603.74 | +324.02 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 100 | GOOGL | 11-17 14:35 | 11-17 15:00 | 292.41 | 290.59 | 44 | 12866.04 | -80.08 | -0.62% | 0.39R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 83.82 | ↓289.61 | 2.9257 | 4.62 | **LOSS** |
| 101 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 33 | 13647.15 | +197.01 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 102 | GOOGL | 11-19 14:30 | 11-19 14:55 | 292.52 | 300.38 | 44 | 12870.88 | +345.84 | +2.69% | 2.47R | 25m | market | profit-target | breakout | breakout | neutral | 67.68 | ↑290.78 | 0.049 | 5.16 | **WIN** |
| 103 | NVDA | 11-19 14:35 | 11-19 16:20 | 184.95 | 185.25 | 75 | 13871.25 | +22.5 | +0.16% | 0.13R | 105m | market | timeout | breakout | breakout | neutral | 60.43 | ↓184.25 | -0.0575 | 1.37 | **WIN** |
| 104 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 97 | 13902.04 | +147.44 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 105 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 106 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 107 | GOOGL | 11-21 14:30 | 11-21 15:15 | 298.47 | 296.38 | 47 | 14028.09 | -98.23 | -0.7% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 69.25 | ↓298.19 | 1.0906 | 5.68 | **LOSS** |
| 108 | MRVL | 11-24 14:40 | 11-24 16:20 | 79.61 | 81.53 | 177 | 14090.97 | +339.84 | +2.41% | 1.46R | 100m | market | profit-target | breakout | breakout | noisyHighBeta | 66.17 | ↑79.1 | 0.2558 | 1.41 | **WIN** |
| 109 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 33 | 13631.31 | +187.44 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 110 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 383 | 14017.8 | -49.79 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 111 | MRVL | 11-26 14:40 | 11-26 16:25 | 85.66 | 87.74 | 165 | 14133.9 | +343.2 | +2.43% | 2.13R | 105m | market | profit-target | breakout | breakout | extendedBreakout | 90.74 | ↑84.94 | 0.6685 | 1.83 | **WIN** |
| 112 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 32 | 13830.08 | -84.48 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 113 | GOOGL | 11-28 14:30 | 11-28 14:40 | 326.26 | 322.82 | 43 | 14029.18 | -147.92 | -1.05% | 1.5R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 92.91 | ↓325.19 | 1.0737 | 6.62 | **LOSS** |
| 114 | MRVL | 12-01 14:30 | 12-01 15:20 | 90.37 | 90.17 | 144 | 13013.28 | -28.8 | -0.22% | 0.11R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 60.32 | ↓89.69 | 0.2308 | 4.83 | **LOSS** |
| 115 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 83 | 12813.54 | +314.57 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 116 | MRVL | 12-02 14:35 | 12-02 15:15 | 93.29 | 92.52 | 152 | 14180.08 | -117.04 | -0.83% | 0.72R | 40m | market | early-reversal | breakout | breakout | noisyHighBeta | 62.95 | ↓92.9 | -0.0217 | 1.49 | **LOSS** |
| 117 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 75 | 13903.5 | -102.75 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 118 | BA | 12-02 14:55 | 12-02 16:40 | 200.4 | 201.76 | 70 | 14028 | +95.2 | +0.68% | 0.36R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.88 | ↑197.67 | 2.7712 | 1.42 | **WIN** |
| 119 | TSLA | 12-03 14:30 | 12-03 15:50 | 435.67 | 441.32 | 16 | 13941.44 | +90.4 | +1.3% | 1.63R | 80m | market | trim-profit-target | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 120 | TSLA | 12-03 14:30 | 12-03 16:15 | 435.67 | 439.66 | 16 | 13941.44 | +63.84 | +0.92% | 1.15R | 105m | market | timeout | trend | trend | neutral | 69.32 | ↑434.54 | 1.3794 | 5.36 | **WIN** |
| 121 | GS | 12-03 15:00 | 12-03 16:45 | 823.94 | 829.67 | 16 | 13183.04 | +91.68 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 69.43 | ↑819.28 | 0.9864 | 1.2 | **WIN** |
| 122 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 30 | 13603.8 | -94.8 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 123 | NVDA | 12-04 14:45 | 12-04 15:05 | 182.31 | 180.7 | 76 | 13855.56 | -122.36 | -0.88% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 68.78 | ↓181.61 | 0.2036 | 2.61 | **LOSS** |
| 124 | GS | 12-04 15:20 | 12-04 15:45 | 843.64 | 838.61 | 16 | 13498.24 | -80.48 | -0.6% | 0.86R | 25m | market | early-reversal | trend | trend | neutral | 69.2 | ↓840.22 | 1.5946 | 1.51 | **LOSS** |
| 125 | GOOGL | 12-05 14:30 | 12-05 15:20 | 321.93 | 321.76 | 43 | 13842.99 | -7.31 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓321.25 | 0.7143 | 2.86 | **LOSS** |
| 126 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.47 | 183.69 | 75 | 13835.25 | -58.5 | -0.42% | 0.6R | 20m | market | early-reversal | breakout | breakout | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 127 | GS | 12-08 14:30 | 12-08 15:50 | 863.48 | 863.84 | 16 | 13815.68 | +5.76 | +0.04% | 0.06R | 80m | market | breakeven-stop | breakout | breakout | neutral | 82.55 | ↓861.35 | 0.8948 | 1.16 | **WIN** |
| 128 | BA | 12-08 14:30 | 12-08 16:15 | 204.17 | 205.29 | 69 | 14087.73 | +77.28 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 129 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 31 | 13734.55 | +127.41 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 130 | MRVL | 12-10 14:30 | 12-10 15:25 | 91.56 | 91.39 | 154 | 14100.24 | -26.18 | -0.19% | 0.17R | 55m | market | stagnation | breakout | breakout | noisyHighBeta | 86.79 | ↓91.52 | 0.4154 | 1.89 | **LOSS** |
| 131 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 31 | 14037.42 | -15.81 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 132 | NVDA | 12-12 14:30 | 12-12 14:55 | 181.84 | 181.07 | 76 | 13819.84 | -58.52 | -0.42% | 0.58R | 25m | market | early-reversal | trend | trend | neutral | 64.86 | ↓181.77 | 0.2908 | 3.41 | **LOSS** |
| 133 | BA | 12-12 14:30 | 12-12 14:50 | 203.27 | 202.46 | 69 | 14025.63 | -55.89 | -0.4% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 134 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 351 | 14025.96 | -98.28 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 135 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 136 | BA | 12-16 14:50 | 12-16 15:10 | 208.59 | 207.85 | 67 | 13975.53 | -49.58 | -0.35% | 0.5R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 137 | GS | 12-17 14:30 | 12-17 15:25 | 889.8 | 889.29 | 14 | 12457.2 | -7.14 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 71.4 | ↓889.24 | 0.8565 | 1.25 | **LOSS** |
| 138 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.28 | 85.01 | 152 | 13114.56 | -193.04 | -1.47% | 0.74R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 139 | SHOP | 12-17 14:55 | 12-17 15:45 | 169.06 | 168.37 | 83 | 14031.98 | -57.27 | -0.41% | 0.26R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.69 | ↓167.51 | 1.5636 | 2.72 | **LOSS** |
| 140 | BA | 12-19 14:35 | 12-19 16:20 | 212.44 | 214.69 | 66 | 14021.04 | +148.5 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.82 | ↑211.65 | 0.3886 | 1.35 | **WIN** |
| 141 | GOOGL | 12-19 15:05 | 12-19 15:55 | 305.25 | 304.8 | 45 | 13736.25 | -20.25 | -0.15% | 0.16R | 50m | market | stagnation | trend | trend | neutral | 64.04 | ↑303.37 | 0.4801 | 1.34 | **LOSS** |
| 142 | GS | 12-19 15:10 | 12-19 15:40 | 895.28 | 892.8 | 15 | 13429.2 | -37.2 | -0.28% | 0.35R | 30m | market | early-reversal | trend | trend | neutral | 77.85 | ↑890.85 | 3.3771 | 2.29 | **LOSS** |
| 143 | TSLA | 12-22 14:45 | 12-22 15:05 | 497.86 | 488.92 | 28 | 13940.08 | -250.32 | -1.8% | 1.54R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 84.32 | ↓494.62 | 3.1468 | 2.38 | **LOSS** |
| 144 | GOOGL | 12-23 14:40 | 12-23 15:00 | 312.98 | 311.76 | 44 | 13771.12 | -53.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 145 | MRVL | 12-30 14:30 | 12-30 16:15 | 86.42 | 87.62 | 163 | 14086.46 | +195.6 | +1.39% | 1.99R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑86.3 | 0.17 | 1.74 | **WIN** |
| 146 | BA | 12-30 14:35 | 12-30 14:55 | 221.52 | 220.05 | 63 | 13955.76 | -92.61 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.37 | ↓220.3 | 0.4956 | 4.46 | **LOSS** |
| 147 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 376 | 14021.04 | +330.88 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 148 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 149 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 150 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 151 | GS | 01-02 15:00 | 01-02 15:20 | 889.89 | 885.58 | 15 | 13348.35 | -64.65 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 75.71 | ↓885.26 | 1.3176 | 1.22 | **LOSS** |
| 152 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 153 | BA | 01-05 14:35 | 01-05 15:20 | 229.92 | 228.42 | 61 | 14025.12 | -91.5 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 93.04 | ↓229.18 | 1.0395 | 2.27 | **LOSS** |
| 154 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 328 | 14048.24 | +544.48 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 155 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 156 | SHOP | 01-13 14:30 | 01-13 14:50 | 169.47 | 168.06 | 83 | 14066.01 | -117.03 | -0.83% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 74.12 | ↓168.93 | 0.7858 | 1.09 | **LOSS** |
| 157 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 304 | 14129.92 | +24.32 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 158 | TSLA | 01-15 14:30 | 01-15 14:55 | 443.34 | 441.77 | 31 | 13743.54 | -48.67 | -0.35% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 79.23 | ↓442.94 | 1.4247 | 1.76 | **LOSS** |
| 159 | BA | 01-15 14:30 | 01-15 16:15 | 245.06 | 247.46 | 57 | 13968.42 | +136.8 | +0.98% | 1.4R | 105m | market | timeout | trend | breakout | neutral | 78.39 | ↑244.84 | 0.3451 | 1.82 | **WIN** |
| 160 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 282 | 14153.58 | -375.06 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 161 | NVDA | 01-15 14:40 | 01-15 15:15 | 188.84 | 187.89 | 73 | 13785.32 | -69.35 | -0.5% | 0.53R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 162 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 173 | 14166.97 | +95.15 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 163 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 164 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 294 | 14067.9 | +399.84 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 165 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 251 | 12999.29 | +394.07 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 166 | GS | 01-21 15:05 | 01-21 16:50 | 957.92 | 960.49 | 14 | 13410.88 | +35.98 | +0.27% | 0.36R | 105m | market | timeout | trend | trend | neutral | 75.05 | ↑953.86 | 3.3253 | 1 | **WIN** |
| 167 | GOOGL | 01-22 14:30 | 01-22 14:50 | 334.15 | 332.51 | 41 | 13700.15 | -67.24 | -0.49% | 0.58R | 20m | market | early-reversal | breakout | trend | neutral | 71.4 | ↓333.55 | 1.4353 | 1.99 | **LOSS** |
| 168 | BA | 01-22 14:30 | 01-22 14:55 | 252.76 | 251.71 | 55 | 13901.8 | -57.75 | -0.42% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 169 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 170 | MRVL | 01-27 15:05 | 01-27 15:50 | 83.24 | 82.96 | 170 | 14150.8 | -47.6 | -0.34% | 0.24R | 45m | market | early-reversal | breakout | trend | neutral | 68.27 | ↑82.54 | 0.3404 | 1.37 | **LOSS** |
| 171 | NVDA | 01-27 15:10 | 01-27 16:55 | 189.1 | 189.6 | 73 | 13804.3 | +36.5 | +0.26% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.29 | ↑187.26 | 0.4444 | 2.31 | **WIN** |
| 172 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 166 | 14114.98 | -202.52 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 173 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 174 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 32 | 13633.92 | +394.88 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 175 | INTC | 01-30 15:15 | 01-30 16:05 | 48.71 | 48.52 | 291 | 14174.61 | -55.29 | -0.39% | 0.2R | 50m | market | stagnation | trend | trend | noisyHighBeta | 50.29 | ↓48.73 | 0.1227 | 1.84 | **LOSS** |
| 176 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 177 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 292 | 14162 | +192.72 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 178 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 179 | BA | 02-03 14:30 | 02-03 14:50 | 237.23 | 235.36 | 59 | 13996.57 | -110.33 | -0.79% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 180 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 286 | 14185.6 | +363.22 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 181 | NVDA | 02-06 14:35 | 02-06 15:50 | 178.37 | 181.98 | 39 | 13912.86 | +140.79 | +2.02% | 1.16R | 75m | market | trim-profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 182 | NVDA | 02-06 14:35 | 02-06 16:15 | 178.37 | 183.53 | 39 | 13912.86 | +201.24 | +2.89% | 1.66R | 100m | market | profit-target | trend | trend | neutral | 76.36 | ↑177.1 | 1.0937 | 2.03 | **WIN** |
| 183 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 34 | 13874.04 | -74.46 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 184 | TSLA | 02-06 15:25 | 02-06 16:15 | 410.25 | 409.83 | 34 | 13948.5 | -14.28 | -0.1% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 76.46 | ↑405.96 | 3.5207 | 1.2 | **LOSS** |
| 185 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 73 | 13837.88 | +158.41 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 186 | SHOP | 02-09 14:40 | 02-09 14:50 | 115.02 | 112.99 | 121 | 13917.42 | -245.63 | -1.76% | 1.38R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 92.62 | ↓113.54 | 0.6835 | 3.04 | **LOSS** |
| 187 | GS | 02-09 15:15 | 02-09 17:00 | 940 | 943.53 | 14 | 13160 | +49.42 | +0.38% | 0.45R | 105m | market | timeout | trend | trend | neutral | 66.47 | ↑936.17 | 2.4908 | 1.14 | **WIN** |
| 188 | GS | 02-10 14:45 | 02-10 15:40 | 958.28 | 956.82 | 14 | 13415.92 | -20.44 | -0.15% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 71.91 | ↑953.51 | 1.4363 | 2.25 | **LOSS** |
| 189 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 293 | 14260.31 | +2.93 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 190 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 191 | TSLA | 02-12 14:30 | 02-12 14:50 | 433.09 | 430.17 | 32 | 13858.88 | -93.44 | -0.67% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.11 | ↓432.47 | 1.3102 | 2.03 | **LOSS** |
| 192 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 303 | 14274.33 | -9.09 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 193 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 308 | 14254.24 | -194.04 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 194 | GS | 02-17 14:45 | 02-17 15:05 | 919.18 | 910.96 | 15 | 13787.7 | -123.3 | -0.89% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 195 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 284 | 13223.04 | -315.24 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 196 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 197 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 198 | SHOP | 02-20 14:50 | 02-20 15:50 | 125.59 | 128.58 | 111 | 13940.49 | +331.89 | +2.38% | 1.52R | 60m | market | profit-target | breakout | breakout | noisyHighBeta | 72.03 | ↑124.33 | 0.4708 | 1.13 | **WIN** |
| 199 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 176 | 14083.52 | -31.68 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 200 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 201 | BA | 02-24 14:40 | 02-24 15:30 | 233 | 233.16 | 60 | 13980 | +9.6 | +0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 202 | TSLA | 02-24 15:20 | 02-24 15:55 | 405.93 | 404.56 | 34 | 13801.62 | -46.58 | -0.34% | 0.35R | 35m | market | early-reversal | trend | trend | neutral | 76.6 | ↑402.17 | 1.8481 | 2.8 | **LOSS** |
| 203 | NVDA | 02-24 15:25 | 02-24 16:30 | 192.08 | 191.91 | 73 | 14021.84 | -12.41 | -0.09% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 53.67 | ↑190.05 | 0.116 | 1.1 | **LOSS** |
| 204 | MRVL | 02-25 14:30 | 02-25 16:00 | 79.33 | 79.23 | 178 | 14120.74 | -17.8 | -0.13% | 0.19R | 90m | market | trailing-stop | trend | trend | neutral | 65.19 | ↓79.31 | 0.0286 | 1.21 | **LOSS** |
| 205 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 309 | 14198.55 | -151.41 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 206 | NVDA | 03-04 14:30 | 03-04 14:55 | 182.25 | 180.95 | 76 | 13851 | -98.8 | -0.71% | 0.87R | 25m | market | early-reversal | breakout | trend | neutral | 79.95 | ↓181.5 | 0.3508 | 3.45 | **LOSS** |
| 207 | SHOP | 03-04 15:00 | 03-04 15:50 | 128.26 | 128.1 | 109 | 13980.34 | -17.44 | -0.12% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 90.65 | ↑125.83 | 1.5289 | 1.12 | **LOSS** |
| 208 | MRVL | 03-09 15:25 | 03-09 17:10 | 88.6 | 89.93 | 159 | 14087.4 | +211.47 | +1.5% | 0.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.97 | ↑86.31 | 0.0387 | 1.81 | **WIN** |
| 209 | NVDA | 03-10 14:30 | 03-10 16:15 | 184.5 | 185.25 | 75 | 13837.5 | +56.25 | +0.41% | 0.44R | 105m | market | timeout | trend | trend | neutral | 73.06 | ↑183.17 | 0.7699 | 1.9 | **WIN** |
| 210 | INTC | 03-10 14:45 | 03-10 16:30 | 47.04 | 47.23 | 301 | 14159.04 | +57.19 | +0.4% | 0.23R | 105m | market | timeout | trend | breakout | falseBreakoutProne | 56.15 | ↑46.64 | 0.5205 | 1.54 | **WIN** |
| 211 | BA | 03-10 14:55 | 03-10 15:00 | 225.76 | 219.89 | 62 | 13997.12 | -363.94 | -2.6% | 3.66R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 212 | GS | 03-23 15:00 | 03-23 15:25 | 847.83 | 845.31 | 16 | 13565.28 | -40.32 | -0.3% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 70.46 | ↑839.76 | 8.9736 | 1.01 | **LOSS** |
| 213 | MRVL | 03-24 14:50 | 03-24 16:25 | 92.04 | 91.8 | 153 | 14082.12 | -36.72 | -0.26% | 0.2R | 95m | market | breakeven-stop | trend | trend | neutral | 74.8 | ↑90.82 | 0.2653 | 1.02 | **LOSS** |
| 214 | INTC | 03-25 14:40 | 03-25 15:15 | 47.43 | 47.18 | 299 | 14181.57 | -74.75 | -0.53% | 0.27R | 35m | market | early-reversal | trend | trend | noisyHighBeta | 76.92 | ↑46.52 | 0.763 | 2.35 | **LOSS** |
| 215 | NVDA | 03-25 14:40 | 03-25 15:05 | 180.59 | 179.82 | 77 | 13905.43 | -59.29 | -0.43% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 69.6 | ↑179.32 | 1.1321 | 1.44 | **LOSS** |
| 216 | SHOP | 03-30 15:00 | 03-30 15:20 | 113.93 | 113.23 | 123 | 14013.39 | -86.1 | -0.61% | 0.41R | 20m | market | early-reversal | breakout | breakout | neutral | 60.25 | ↑112.31 | 0.4161 | 1.22 | **LOSS** |
| 217 | TSLA | 04-01 14:35 | 04-01 16:20 | 379.43 | 381.8 | 36 | 13659.48 | +85.32 | +0.62% | 0.5R | 105m | market | timeout | trend | trend | neutral | 53.19 | ↑376.68 | 0.9618 | 1.43 | **WIN** |
| 218 | MRVL | 04-09 14:45 | 04-09 15:25 | 120.72 | 119.61 | 117 | 14124.24 | -129.87 | -0.92% | 0.48R | 40m | market | early-reversal | trend | trend | noisyHighBeta | 63.97 | ↓119.09 | 1.4962 | 1.04 | **LOSS** |
| 219 | NVDA | 04-09 15:15 | 04-09 15:35 | 183.5 | 182.92 | 76 | 13946 | -44.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 74.85 | ↑181.9 | 0.336 | 1.65 | **LOSS** |
| 220 | GOOGL | 04-14 15:20 | 04-14 17:05 | 330.74 | 332.22 | 42 | 13891.08 | +62.16 | +0.45% | 0.64R | 105m | market | timeout | trend | trend | neutral | 75.74 | ↑327 | 1.9502 | 1.33 | **WIN** |
| 221 | INTC | 04-15 14:35 | 04-15 15:30 | 65.26 | 65.07 | 217 | 14161.42 | -41.23 | -0.29% | 0.15R | 55m | market | stagnation | breakout | trend | neutral | 72.1 | ↑64.19 | 0.4537 | 1.03 | **LOSS** |
| 222 | TSLA | 04-15 14:55 | 04-15 15:50 | 381.45 | 390.69 | 36 | 13732.2 | +332.64 | +2.42% | 1.86R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 89.8 | ↑373.88 | 3.9618 | 1.64 | **WIN** |
| 223 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 35 | 14012.95 | +205.1 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 224 | BA | 04-22 15:25 | 04-22 16:15 | 229.26 | 228.61 | 61 | 13984.86 | -39.65 | -0.28% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.18 | ↑225.65 | 1.5193 | 1.31 | **LOSS** |
| 225 | NVDA | 04-24 14:35 | 04-24 15:25 | 204.77 | 208.8 | 34 | 13924.36 | +137.02 | +1.97% | 1.42R | 50m | market | trim-profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |
| 226 | NVDA | 04-24 14:35 | 04-24 15:30 | 204.77 | 209.69 | 34 | 13924.36 | +167.28 | +2.4% | 1.73R | 55m | market | profit-target | trend | trend | neutral | 73.18 | ↑202.6 | 1.2486 | 1.79 | **WIN** |

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

- ⚠️ **Profit factor 1.32 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.78R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:59:23.643Z*
