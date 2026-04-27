# Bot Trade Report — 180 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:01:24.689Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $4030.26 (+4.03%) over 180 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 180 |
| Win rate | 39.44% (71W / 109L) |
| Net P&L | $+4030.26 (+4.03%) |
| Gross profit | $14496.49 |
| Gross loss | $10466.23 |
| Profit factor | 1.39 |
| Avg win | $204.18 |
| Avg loss | $96.02 |
| Payoff ratio | 2.13:1 |
| Expectancy | $+22.39 / trade |
| Max drawdown | 1.78% |
| Sharpe ratio (ann.) | 2.26 |
| Trades / active day | 1.41 |
| Avg confidence | 97.62% |
| Avg trade duration | 55 min |
| Avg risk ratio | 0.91R |
| Starting equity | $100,000 |
| Ending equity | $104,030.26 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 102 | 40.2% | $+1541.71 | $15.11 |
| Mid  10:30–11:30 | 78 | 38.46% | $+2488.55 | $31.9 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 56 | 26 | 46.43% | $+3142.86 | $+56.12 | 1.81 | eligible |
| MRVL | 35 | 12 | 34.29% | $+419.44 | $+11.98 | 1.23 | throttle |
| GOOGL | 27 | 10 | 37.04% | $+298.7 | $+11.06 | 1.23 | throttle |
| GS | 22 | 10 | 45.45% | $+276.84 | $+12.58 | 1.36 | eligible |
| TSLA | 40 | 13 | 32.5% | $-107.58 | $-2.69 | 0.96 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 180 | 71 | 39.44% | $+4030.26 | $+22.39 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 89 | 39 | 43.82% | $+2579.77 | $+28.99 |
| extendedBreakout | 29 | 11 | 37.93% | $+1224.22 | $+42.21 |
| noisyHighBeta | 17 | 7 | 41.18% | $+472.05 | $+27.77 |
| neutral | 45 | 14 | 31.11% | $-245.78 | $-5.46 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 29 | 1.35 | $+22.61 | 27 | 2.24 | $+92.11 | 1.15% | 1.95 | promote |
| Time slot | Mid 10:30-11:30 | 22 | 1.37 | $+17.47 | 56 | 1.59 | $+37.57 | 1.12% | 1.33 | promote |
| Setup | breakout | 108 | 1.42 | $+21.69 | 72 | 1.34 | $+23.45 | 1.82% | 1.13 | promote |
| Symbol | GS | 13 | 1.83 | $+25.07 | 9 | 0.87 | $-5.46 | 0.38% | 0.64 | watch |
| Behavior | falseBreakoutProne | 73 | 1.88 | $+40.52 | 16 | 0.7 | $-23.65 | 0.63% | 0.58 | watch |
| Time slot | Open 9:30-10:30 | 86 | 1.43 | $+22.76 | 16 | 0.68 | $-26 | 0.73% | 0.56 | watch |
| Symbol | MRVL | 24 | 2.13 | $+42.78 | 11 | 0.33 | $-55.2 | 0.81% | 0.25 | watch |
| Behavior | extendedBreakout | 14 | 0.01 | $-65.62 | 15 | 5.09 | $+142.86 | 0.27% | 4.13 | reject |
| Behavior | noisyHighBeta | 6 | 1.23 | $+14.2 | 11 | 1.39 | $+35.17 | 0.52% | 1.22 | reject |
| Symbol | GOOGL | 19 | 1.06 | $+3.25 | 8 | 1.83 | $+29.61 | 0.28% | 1.36 | reject |
| Behavior | neutral | 15 | 1.24 | $+14.49 | 30 | 0.78 | $-15.44 | 1.09% | 0.64 | reject |
| Symbol | TSLA | 23 | 1.2 | $+11.82 | 17 | 0.71 | $-22.32 | 0.48% | 0.59 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+3534.14 | 1.33 |
| +3 bps/side | $+2541.72 | 1.22 |
| +5 bps/side | $+1549.35 | 1.13 |
| +10 bps/side | $-931.53 | 0.93 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 58 |
| timeout | 42 |
| stagnation | 23 |
| profit-target | 19 |
| stop-loss | 16 |
| breakeven-stop | 11 |
| trailing-stop | 11 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 2 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 3 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 4 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 5 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 6 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 7 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 8 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 9 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 76 | 12731.52 | +402.04 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 10 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 11 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 230 | 14023.1 | +193.2 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 12 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 13 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 14 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 215 | 14045.95 | -30.1 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 15 | MRVL | 06-03 14:55 | 06-03 15:15 | 63.46 | 63.01 | 221 | 14024.66 | -99.45 | -0.71% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.86 | ↑62.24 | 0.3042 | 1.36 | **LOSS** |
| 16 | MRVL | 06-04 15:05 | 06-04 16:50 | 64.31 | 65.8 | 218 | 14019.58 | +324.82 | +2.32% | 1.98R | 105m | market | timeout | breakout | breakout | neutral | 79.14 | ↑63.22 | 0.2757 | 1.11 | **WIN** |
| 17 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 82 | 13967.06 | -58.22 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 18 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 19 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 20 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 21 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 209 | 14067.79 | +424.27 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 22 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 23 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 24 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 25 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 26 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 199 | 14107.11 | -71.64 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 27 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 28 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 29 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 30 | MRVL | 06-18 13:50 | 06-18 14:55 | 76.16 | 75.93 | 185 | 14089.6 | -42.55 | -0.3% | 0.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.17 | ↑75.19 | 1.3898 | 2.19 | **LOSS** |
| 31 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 32 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 33 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 645 | 13990.05 | +419.25 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 34 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 179 | 13052.68 | +341.89 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 35 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 36 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 37 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 608 | 14050.88 | -30.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 38 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 183 | 14136.75 | +243.39 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 39 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 628 | 14048.36 | -31.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 40 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 615 | 14040.45 | +344.4 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 41 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 42 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 43 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 601 | 14099.46 | -180.3 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 44 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 74 | 13900.9 | +71.78 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 45 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 669 | 14082.45 | -40.14 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 46 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 186 | 14150.88 | -91.14 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 47 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 183 | 14145.9 | +3.66 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 48 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 181 | 14157.82 | -68.78 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 49 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 50 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 51 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 52 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 695 | 14059.85 | -6.95 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 53 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 182 | 14163.24 | -103.74 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 54 | MRVL | 08-07 13:40 | 08-07 14:05 | 76.98 | 76.47 | 184 | 14164.32 | -93.84 | -0.66% | 0.69R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 55 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 672 | 14071.68 | -94.08 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 56 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 57 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 655 | 14062.85 | -65.5 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 58 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 59 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 584 | 14033.52 | +274.48 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 60 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 177 | 13129.86 | -30.09 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 61 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 62 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 63 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 64 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 59 | 13862.64 | -50.15 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 65 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 220 | 14119.6 | +176 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 66 | GS | 09-09 14:40 | 09-09 16:00 | 756.32 | 755.8 | 18 | 13613.76 | -9.36 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 80.5 | ↑749.54 | 3.765 | 2.24 | **LOSS** |
| 67 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 569 | 14088.44 | -96.73 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 68 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 69 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 70 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 570 | 14061.9 | +364.8 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 71 | MRVL | 09-18 13:45 | 09-18 14:50 | 74.17 | 74.16 | 176 | 13053.92 | -1.76 | -0.01% | 0.01R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 77.79 | ↓73.84 | 0.5868 | 1.35 | **LOSS** |
| 72 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 73 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 469 | 14112.21 | -272.02 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 74 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 477 | 14076.27 | +100.17 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 75 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 467 | 14080.05 | +219.49 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 76 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 423 | 14111.28 | -241.11 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 77 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 78 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 79 | INTC | 10-01 13:35 | 10-01 13:50 | 34.1 | 33.68 | 413 | 14083.3 | -173.46 | -1.23% | 1.32R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.06 | ↓33.85 | 0.117 | 2.89 | **LOSS** |
| 80 | TSLA | 10-01 14:20 | 10-01 15:20 | 455.01 | 453.68 | 30 | 13650.3 | -39.9 | -0.29% | 0.2R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 75.29 | ↑447.98 | 2.5993 | 1.16 | **LOSS** |
| 81 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 145 | 13009.4 | -76.85 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 82 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 83 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 84 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 85 | INTC | 10-15 14:30 | 10-15 15:30 | 36.69 | 36.65 | 383 | 14052.27 | -15.32 | -0.11% | 0.07R | 60m | market | stagnation | breakout | breakout | noisyHighBeta | 65.4 | ↑36.28 | 0.0913 | 2.3 | **LOSS** |
| 86 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 87 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 157 | 14150.41 | -12.56 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 88 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 349 | 12965.35 | +317.59 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 89 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 369 | 14114.25 | -162.36 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 90 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 167 | 14158.26 | -8.35 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 91 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 92 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 93 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 94 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 95 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 96 | GS | 11-04 15:10 | 11-04 15:45 | 802.24 | 798.84 | 17 | 13638.08 | -57.8 | -0.42% | 0.4R | 35m | market | early-reversal | breakout | breakout | neutral | 66.59 | ↑787.55 | 1.5299 | 1.87 | **LOSS** |
| 97 | MRVL | 11-06 14:30 | 11-06 14:55 | 96.54 | 95.41 | 135 | 13032.9 | -152.55 | -1.17% | 0.64R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.54 | ↓96.65 | -0.034 | 5.5 | **LOSS** |
| 98 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 371 | 14083.16 | -122.43 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 99 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 100 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 31 | 13587.3 | +265.05 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 101 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 34 | 13603.74 | +324.02 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 102 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 33 | 13647.15 | +197.01 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 103 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 403 | 14064.7 | +64.48 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 104 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 105 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 106 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.14 | 83.99 | 168 | 14135.52 | -25.2 | -0.18% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 107 | GOOGL | 11-21 14:45 | 11-21 15:05 | 299.96 | 296.39 | 46 | 13798.16 | -164.22 | -1.19% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 74.38 | ↓298.43 | 1.6687 | 2 | **LOSS** |
| 108 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 33 | 13631.31 | +187.44 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 109 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 385 | 14091 | -50.05 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 110 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 32 | 13830.08 | -84.48 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 111 | INTC | 11-28 14:35 | 11-28 15:20 | 37.9 | 38.99 | 345 | 13075.5 | +376.05 | +2.88% | 2.82R | 45m | market | profit-target | breakout | breakout | noisyHighBeta | 77.5 | ↑37.82 | 0.1255 | 1.99 | **WIN** |
| 112 | INTC | 11-28 15:25 | 11-28 17:10 | 39.11 | 40.01 | 361 | 14118.71 | +324.9 | +2.3% | 1.15R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.58 | ↑38.6 | 0.5535 | 1.53 | **WIN** |
| 113 | MRVL | 12-01 14:30 | 12-01 15:20 | 90.37 | 90.17 | 144 | 13013.28 | -28.8 | -0.22% | 0.11R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 60.32 | ↓89.69 | 0.2308 | 4.83 | **LOSS** |
| 114 | INTC | 12-02 14:45 | 12-02 15:25 | 41.13 | 42.27 | 344 | 14148.72 | +392.16 | +2.77% | 2.1R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 115 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 30 | 13603.8 | -94.8 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 116 | GOOGL | 12-05 14:30 | 12-05 15:20 | 321.93 | 321.76 | 43 | 13842.99 | -7.31 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓321.25 | 0.7143 | 2.86 | **LOSS** |
| 117 | INTC | 12-05 15:00 | 12-05 15:30 | 42.57 | 42.23 | 334 | 14218.38 | -113.56 | -0.8% | 0.48R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.93 | ↑41.95 | 0.3823 | 2.62 | **LOSS** |
| 118 | GS | 12-08 14:30 | 12-08 15:50 | 863.48 | 863.84 | 16 | 13815.68 | +5.76 | +0.04% | 0.06R | 80m | market | breakeven-stop | breakout | breakout | neutral | 82.55 | ↓861.35 | 0.8948 | 1.16 | **WIN** |
| 119 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 31 | 13734.55 | +127.41 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 120 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 30 | 13584.6 | -15.3 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 121 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 355 | 14185.8 | -99.4 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 122 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 123 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.28 | 85.01 | 152 | 13114.56 | -193.04 | -1.47% | 0.74R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 124 | INTC | 12-19 14:35 | 12-19 15:45 | 37.08 | 37.02 | 383 | 14201.64 | -22.98 | -0.16% | 0.17R | 70m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 125 | GOOGL | 12-23 14:40 | 12-23 15:00 | 312.98 | 311.76 | 44 | 13771.12 | -53.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 126 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 380 | 14170.2 | +334.4 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 127 | MRVL | 12-30 14:45 | 12-30 15:10 | 87.26 | 86.85 | 161 | 14048.86 | -66.01 | -0.47% | 0.57R | 25m | market | early-reversal | breakout | breakout | neutral | 81.65 | ↓86.44 | 0.3119 | 1.45 | **LOSS** |
| 128 | INTC | 01-02 14:40 | 01-02 15:20 | 38.78 | 39.04 | 341 | 13223.98 | +88.66 | +0.67% | 0.42R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 81.43 | ↓38.49 | 0.3298 | 2.36 | **WIN** |
| 129 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 130 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 131 | GS | 01-05 14:35 | 01-05 16:20 | 939.12 | 951.91 | 13 | 12208.56 | +166.27 | +1.36% | 1.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.15 | ↑931.29 | 5.883 | 1.95 | **WIN** |
| 132 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 133 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 134 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.74 | 441.12 | 31 | 13755.94 | -81.22 | -0.59% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 135 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 136 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 137 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 138 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 172 | 14085.08 | +94.6 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 139 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 140 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.66 | 443.07 | 31 | 13815.46 | -80.29 | -0.58% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 141 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 142 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 257 | 13310.03 | +403.49 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 143 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 144 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 166 | 14114.98 | -202.52 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 145 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 32 | 13633.92 | +394.88 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 146 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 147 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 299 | 14501.5 | +197.34 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 148 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 149 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 150 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 34 | 13874.04 | -74.46 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 151 | GS | 02-10 14:45 | 02-10 15:40 | 958.28 | 956.82 | 14 | 13415.92 | -20.44 | -0.15% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 71.91 | ↑953.51 | 1.4363 | 2.25 | **LOSS** |
| 152 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 153 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 154 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 155 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 315 | 14578.2 | -198.45 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 156 | GS | 02-17 14:45 | 02-17 15:05 | 919.18 | 910.96 | 15 | 13787.7 | -123.3 | -0.89% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 157 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 290 | 13502.4 | -321.9 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 158 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 159 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 176 | 14083.52 | -31.68 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 160 | TSLA | 02-24 15:25 | 02-24 15:50 | 407.63 | 405.1 | 34 | 13859.42 | -86.02 | -0.62% | 0.59R | 25m | market | early-reversal | breakout | breakout | neutral | 79.51 | ↑402.65 | 2.1488 | 2.05 | **LOSS** |
| 161 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 162 | MRVL | 03-04 14:30 | 03-04 14:45 | 78.8 | 77.59 | 160 | 12608 | -193.6 | -1.54% | 1.44R | 15m | market | stop-loss | mixed | breakout | neutral | 62.04 | ↓78.92 | -0.1287 | 2.55 | **LOSS** |
| 163 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 310 | 14470.8 | -117.8 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 164 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 33 | 13689.06 | -94.71 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 165 | MRVL | 03-16 13:35 | 03-16 14:15 | 91.16 | 90.57 | 142 | 12944.72 | -83.78 | -0.65% | 0.53R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.51 | ↓90.57 | 0.6166 | 1.71 | **LOSS** |
| 166 | GS | 03-17 13:35 | 03-17 13:55 | 818.04 | 815.02 | 15 | 12270.6 | -45.3 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.4 | ↑812.43 | 2.9774 | 1.98 | **LOSS** |
| 167 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 308 | 14469.84 | -388.08 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 168 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 36 | 13691.88 | +128.88 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 169 | MRVL | 03-26 13:35 | 03-26 14:05 | 100.05 | 99.3 | 140 | 14007 | -105 | -0.75% | 0.65R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.76 | ↓99.63 | 0.2735 | 3.14 | **LOSS** |
| 170 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 171 | GS | 03-31 13:45 | 03-31 14:35 | 821.73 | 819.24 | 17 | 13969.41 | -42.33 | -0.3% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.63 | ↓816.94 | 1.4478 | 1.73 | **LOSS** |
| 172 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 173 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 283 | 13269.87 | +316.96 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 174 | TSLA | 04-06 13:30 | 04-06 13:45 | 367.33 | 363.53 | 38 | 13958.54 | -144.4 | -1.03% | 1.3R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.54 | ↓365.47 | 0.6804 | 1.95 | **LOSS** |
| 175 | MRVL | 04-08 13:35 | 04-08 14:45 | 111.94 | 112.66 | 125 | 13992.5 | +90 | +0.64% | 0.35R | 70m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.99 | ↓111.73 | 0.3925 | 4.87 | **WIN** |
| 176 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 177 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 34 | 13612.58 | +199.24 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 178 | MRVL | 04-21 13:30 | 04-21 14:35 | 150.91 | 152.22 | 86 | 12978.26 | +112.66 | +0.87% | 0.78R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 67.11 | ↓150.06 | 0.4257 | 1.87 | **WIN** |
| 179 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |
| 180 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 36 | 13694.4 | -194.4 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |

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

- ⚠️ **Profit factor 1.39 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.91R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:01:24.689Z*
