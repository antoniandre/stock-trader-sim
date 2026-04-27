# Bot Trade Report — 270 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T07:00:26.131Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 8 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $5338.88 (+5.34%) over 270 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 270 |
| Win rate | 40.74% (110W / 160L) |
| Net P&L | $+5338.88 (+5.34%) |
| Gross profit | $20180.94 |
| Gross loss | $14842.06 |
| Profit factor | 1.36 |
| Avg win | $183.46 |
| Avg loss | $92.76 |
| Payoff ratio | 1.98:1 |
| Expectancy | $+19.77 / trade |
| Max drawdown | 1.82% |
| Sharpe ratio (ann.) | 2.32 |
| Trades / active day | 1.71 |
| Avg confidence | 98.05% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.89R |
| Starting equity | $100,000 |
| Ending equity | $105,338.88 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 158 | 41.77% | $+2676.43 | $16.94 |
| Mid  10:30–11:30 | 112 | 39.29% | $+2662.45 | $23.77 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 56 | 26 | 46.43% | $+3142.86 | $+56.12 | 1.81 | eligible |
| NVDA | 32 | 16 | 50% | $+1282.91 | $+40.09 | 2.02 | eligible |
| MRVL | 35 | 12 | 34.29% | $+419.44 | $+11.98 | 1.23 | throttle |
| GOOGL | 27 | 10 | 37.04% | $+298.7 | $+11.06 | 1.23 | throttle |
| BA | 28 | 12 | 42.86% | $+288.66 | $+10.31 | 1.24 | eligible |
| GS | 22 | 10 | 45.45% | $+276.84 | $+12.58 | 1.36 | eligible |
| TSLA | 40 | 13 | 32.5% | $-107.58 | $-2.69 | 0.96 | throttle |
| SHOP | 30 | 11 | 36.67% | $-262.95 | $-8.76 | 0.86 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 270 | 110 | 40.74% | $+5338.88 | $+19.77 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 132 | 59 | 44.7% | $+3817.94 | $+28.92 |
| extendedBreakout | 46 | 16 | 34.78% | $+937.79 | $+20.39 |
| noisyHighBeta | 21 | 9 | 42.86% | $+634.89 | $+30.23 |
| neutral | 71 | 26 | 36.62% | $-51.74 | $-0.73 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | INTC | 30 | 1.31 | $+20.19 | 26 | 2.29 | $+97.58 | 1.15% | 2.01 | promote |
| Symbol | NVDA | 19 | 1.35 | $+14.76 | 13 | 3.14 | $+77.12 | 0.2% | 2.52 | promote |
| Behavior | falseBreakoutProne | 106 | 1.64 | $+29.77 | 26 | 1.44 | $+25.46 | 0.77% | 1.18 | promote |
| Time slot | Mid 10:30-11:30 | 32 | 1.48 | $+19.84 | 80 | 1.39 | $+25.35 | 1.1% | 1.16 | promote |
| Setup | breakout | 162 | 1.36 | $+17.66 | 108 | 1.36 | $+22.94 | 1.87% | 1.13 | promote |
| Time slot | Open 9:30-10:30 | 130 | 1.34 | $+17.13 | 28 | 1.26 | $+16.08 | 0.92% | 1.03 | watch |
| Symbol | BA | 15 | 1.44 | $+17.63 | 13 | 1.04 | $+1.86 | 0.42% | 0.77 | watch |
| Symbol | GS | 13 | 1.83 | $+25.07 | 9 | 0.87 | $-5.46 | 0.38% | 0.64 | watch |
| Symbol | MRVL | 24 | 2.13 | $+42.78 | 11 | 0.33 | $-55.2 | 0.81% | 0.25 | watch |
| Behavior | extendedBreakout | 20 | 0.38 | $-35.2 | 26 | 2.29 | $+63.15 | 0.38% | 1.86 | reject |
| Behavior | noisyHighBeta | 7 | 1.08 | $+5.02 | 14 | 1.47 | $+42.84 | 0.77% | 1.29 | reject |
| Symbol | GOOGL | 19 | 1.06 | $+3.25 | 8 | 1.83 | $+29.61 | 0.28% | 1.36 | reject |
| Behavior | neutral | 29 | 1.26 | $+12.89 | 42 | 0.85 | $-10.13 | 1.32% | 0.69 | reject |
| Symbol | TSLA | 24 | 1.13 | $+7.81 | 16 | 0.76 | $-18.44 | 0.48% | 0.63 | reject |
| Symbol | SHOP | 18 | 1.13 | $+6.04 | 12 | 0.67 | $-30.97 | 0.84% | 0.57 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+4593.16 | 1.3 |
| +3 bps/side | $+3101.53 | 1.19 |
| +5 bps/side | $+1609.96 | 1.09 |
| +10 bps/side | $-2118.94 | 0.89 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 95 |
| timeout | 74 |
| stagnation | 29 |
| profit-target | 23 |
| stop-loss | 21 |
| breakeven-stop | 16 |
| trailing-stop | 12 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | TSLA | 05-01 14:30 | 05-01 15:20 | 288.86 | 286.88 | 48 | 13865.28 | -95.04 | -0.69% | 0.35R | 50m | market | early-reversal | breakout | breakout | noisyHighBeta | 65.83 | ↑284.08 | 1.4137 | 1.11 | **LOSS** |
| 3 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.77 | 114.18 | 122 | 14001.94 | -71.98 | -0.51% | 0.63R | 20m | market | early-reversal | breakout | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 4 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 5 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 6 | BA | 05-08 15:05 | 05-08 16:50 | 191.02 | 193.97 | 73 | 13944.46 | +215.35 | +1.54% | 1.69R | 105m | market | timeout | breakout | breakout | extendedBreakout | 88.79 | ↑189.16 | 1.0321 | 9.36 | **WIN** |
| 7 | TSLA | 05-08 15:25 | 05-08 17:05 | 286.76 | 286.51 | 48 | 13764.48 | -12 | -0.09% | 0.08R | 100m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 85.41 | ↑283.16 | 1.7508 | 1.21 | **LOSS** |
| 8 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 72 | 14002.56 | -77.76 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 9 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 10 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 11 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 12 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 13 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 14 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 15 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 16 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 17 | BA | 05-14 14:15 | 05-14 15:00 | 207.38 | 205.83 | 67 | 13894.46 | -103.85 | -0.75% | 0.49R | 45m | market | early-reversal | breakout | breakout | neutral | 66.36 | ↓206.41 | 0.5537 | 2.08 | **LOSS** |
| 18 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 19 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 20 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 76 | 12731.52 | +402.04 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 21 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 22 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 230 | 14023.1 | +193.2 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 23 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 24 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 25 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 26 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 215 | 14045.95 | -30.1 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 27 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 28 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 29 | MRVL | 06-03 14:55 | 06-03 15:15 | 63.46 | 63.01 | 221 | 14024.66 | -99.45 | -0.71% | 0.68R | 20m | market | early-reversal | breakout | breakout | neutral | 81.86 | ↑62.24 | 0.3042 | 1.36 | **LOSS** |
| 30 | MRVL | 06-04 15:05 | 06-04 16:50 | 64.31 | 65.8 | 218 | 14019.58 | +324.82 | +2.32% | 1.98R | 105m | market | timeout | breakout | breakout | neutral | 79.14 | ↑63.22 | 0.2757 | 1.11 | **WIN** |
| 31 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 82 | 13967.06 | -58.22 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 32 | SHOP | 06-05 14:40 | 06-05 16:25 | 105.73 | 106.24 | 132 | 13956.36 | +67.32 | +0.48% | 0.41R | 105m | market | timeout | breakout | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **WIN** |
| 33 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 34 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 35 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 36 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 209 | 14067.79 | +424.27 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 37 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 681 | 13974.12 | +143.01 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 38 | BA | 06-09 14:50 | 06-09 15:15 | 215.82 | 215.16 | 64 | 13812.48 | -42.24 | -0.31% | 0.44R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 76.86 | ↑213.75 | 1.44 | 3.15 | **LOSS** |
| 39 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 40 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 681 | 13994.55 | -156.63 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 41 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 42 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 129 | 13910.07 | +148.35 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 43 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 677 | 13973.28 | +94.78 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 44 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 199 | 14107.11 | -71.64 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 45 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 616 | 12886.72 | -12.32 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 46 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 47 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 48 | MRVL | 06-18 13:50 | 06-18 14:55 | 76.16 | 75.93 | 185 | 14089.6 | -42.55 | -0.3% | 0.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.17 | ↑75.19 | 1.3898 | 2.19 | **LOSS** |
| 49 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 661 | 13980.15 | +191.69 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 50 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 656 | 14005.6 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 51 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 52 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 645 | 13990.05 | +419.25 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 53 | MRVL | 06-24 13:35 | 06-24 15:15 | 72.92 | 74.83 | 179 | 13052.68 | +341.89 | +2.62% | 1.85R | 100m | market | profit-target | breakout | breakout | falseBreakoutProne | 81.01 | ↑72.43 | 0.2348 | 1.55 | **WIN** |
| 54 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 55 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 56 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 57 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 58 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 608 | 14050.88 | -30.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 59 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 183 | 14136.75 | +243.39 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 60 | SHOP | 07-02 14:30 | 07-02 15:25 | 115.92 | 115.61 | 121 | 14026.32 | -37.51 | -0.27% | 0.24R | 55m | market | stagnation | breakout | breakout | neutral | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 61 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 628 | 14048.36 | -31.4 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 62 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 63 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 615 | 14040.45 | +344.4 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 64 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 65 | BA | 07-09 13:40 | 07-09 14:00 | 226.95 | 224.09 | 56 | 12709.2 | -160.16 | -1.26% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.05 | ↓225.45 | 1.42 | 2.98 | **LOSS** |
| 66 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 67 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 68 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 69 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 601 | 14099.46 | -180.3 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 70 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 74 | 13900.9 | +71.78 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 71 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 669 | 14082.45 | -40.14 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 72 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 186 | 14150.88 | -91.14 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 73 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.3 | 77.32 | 183 | 14145.9 | +3.66 | +0.03% | 0.04R | 10m | market | breakeven-stop | breakout | breakout | extendedBreakout | 86.82 | ↓77.02 | 0.2956 | 2.31 | **WIN** |
| 74 | MRVL | 07-29 14:05 | 07-29 14:55 | 78.22 | 77.84 | 181 | 14157.82 | -68.78 | -0.49% | 0.39R | 50m | market | early-reversal | breakout | breakout | extendedBreakout | 83.87 | ↓77.59 | 0.6079 | 1.64 | **LOSS** |
| 75 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 76 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 77 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 78 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 695 | 14059.85 | -6.95 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 79 | MRVL | 08-05 13:45 | 08-05 14:05 | 77.82 | 77.25 | 182 | 14163.24 | -103.74 | -0.73% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 80 | MRVL | 08-07 13:40 | 08-07 14:05 | 76.98 | 76.47 | 184 | 14164.32 | -93.84 | -0.66% | 0.69R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 81 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 92 | 13918.68 | -73.6 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 82 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 672 | 14071.68 | -94.08 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 83 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 84 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 85 | INTC | 08-12 15:10 | 08-12 15:30 | 21.47 | 21.37 | 655 | 14062.85 | -65.5 | -0.47% | 0.57R | 20m | market | early-reversal | breakout | breakout | neutral | 85.22 | ↑21.13 | 0.0031 | 2.31 | **LOSS** |
| 86 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 87 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 88 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 41 | 13897.77 | -168.92 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 89 | INTC | 08-22 13:35 | 08-22 15:20 | 24.03 | 24.5 | 584 | 14033.52 | +274.48 | +1.96% | 2.8R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 90 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 91 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.09 | 141.99 | 92 | 12980.28 | +82.8 | +0.64% | 0.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 92 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 177 | 13129.86 | -30.09 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 93 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 94 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 95 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 97 | 13928.23 | -94.09 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 96 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 97 | SHOP | 09-04 13:45 | 09-04 14:05 | 142.23 | 140.57 | 98 | 13938.54 | -162.68 | -1.17% | 1.23R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.94 | ↓141.9 | 0.4522 | 3.41 | **LOSS** |
| 98 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 99 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 59 | 13862.64 | -50.15 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 100 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 220 | 14119.6 | +176 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 101 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 102 | GS | 09-09 14:40 | 09-09 16:00 | 756.32 | 755.8 | 18 | 13613.76 | -9.36 | -0.07% | 0.09R | 80m | market | breakeven-stop | breakout | breakout | extendedBreakout | 80.5 | ↑749.54 | 3.765 | 2.24 | **LOSS** |
| 103 | INTC | 09-10 13:45 | 09-10 14:05 | 24.76 | 24.59 | 569 | 14088.44 | -96.73 | -0.69% | 0.75R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.11 | ↓24.71 | 0.0749 | 1.2 | **LOSS** |
| 104 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 105 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 106 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 570 | 14061.9 | +364.8 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 107 | MRVL | 09-18 13:45 | 09-18 14:50 | 74.17 | 74.16 | 176 | 13053.92 | -1.76 | -0.01% | 0.01R | 65m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 77.79 | ↓73.84 | 0.5868 | 1.35 | **LOSS** |
| 108 | SHOP | 09-18 14:05 | 09-18 14:30 | 151.21 | 150.3 | 92 | 13911.32 | -83.72 | -0.6% | 0.48R | 25m | market | early-reversal | breakout | breakout | neutral | 79.96 | ↑149.88 | 0.8373 | 1.12 | **LOSS** |
| 109 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 110 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 469 | 14112.21 | -272.02 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 111 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 477 | 14076.27 | +100.17 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 112 | BA | 09-23 13:40 | 09-23 15:25 | 215.85 | 216.21 | 65 | 14030.25 | +23.4 | +0.17% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.63 | ↓215.93 | 0.6238 | 2 | **WIN** |
| 113 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 467 | 14080.05 | +219.49 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 114 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 115 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 423 | 14111.28 | -241.11 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 116 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 117 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 118 | BA | 09-26 13:40 | 09-26 14:55 | 220.43 | 220.15 | 63 | 13887.09 | -17.64 | -0.13% | 0.11R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.14 | ↓220.69 | 1.3581 | 2.08 | **LOSS** |
| 119 | NVDA | 09-29 13:40 | 09-29 14:15 | 183.65 | 182.71 | 76 | 13957.4 | -71.44 | -0.51% | 0.55R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 97.23 | ↓182.52 | 1.2549 | 3.87 | **LOSS** |
| 120 | INTC | 10-01 13:35 | 10-01 13:50 | 34.1 | 33.68 | 413 | 14083.3 | -173.46 | -1.23% | 1.32R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 87.06 | ↓33.85 | 0.117 | 2.89 | **LOSS** |
| 121 | TSLA | 10-01 14:20 | 10-01 15:20 | 455.01 | 453.68 | 30 | 13650.3 | -39.9 | -0.29% | 0.2R | 60m | market | stagnation | breakout | breakout | extendedBreakout | 75.29 | ↑447.98 | 2.5993 | 1.16 | **LOSS** |
| 122 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 145 | 13009.4 | -76.85 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 123 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 124 | BA | 10-07 13:30 | 10-07 14:10 | 222.3 | 221.15 | 63 | 14004.9 | -72.45 | -0.52% | 0.74R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.2 | ↓221.69 | 0.2238 | 2.95 | **LOSS** |
| 125 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 74 | 13903.12 | +8.14 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 126 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 127 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 128 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 129 | SHOP | 10-13 13:45 | 10-13 14:05 | 154.02 | 152.61 | 90 | 13861.8 | -126.9 | -0.92% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.21 | ↓152.76 | -0.1914 | 1.18 | **LOSS** |
| 130 | INTC | 10-15 14:30 | 10-15 15:30 | 36.69 | 36.65 | 383 | 14052.27 | -15.32 | -0.11% | 0.07R | 60m | market | stagnation | breakout | breakout | noisyHighBeta | 65.4 | ↑36.28 | 0.0913 | 2.3 | **LOSS** |
| 131 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 132 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 157 | 14150.41 | -12.56 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 133 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 349 | 12965.35 | +317.59 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 134 | BA | 10-20 13:35 | 10-20 13:55 | 216.32 | 215.45 | 64 | 13844.48 | -55.68 | -0.4% | 0.56R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 66.64 | ↓216.26 | 0.2559 | 3.33 | **LOSS** |
| 135 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 369 | 14114.25 | -162.36 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 136 | NVDA | 10-20 14:25 | 10-20 14:45 | 184.98 | 183.91 | 75 | 13873.5 | -80.25 | -0.58% | 0.64R | 20m | market | early-reversal | breakout | breakout | neutral | 66.46 | ↑183.03 | 0.1059 | 1.47 | **LOSS** |
| 137 | NVDA | 10-22 13:50 | 10-22 14:10 | 183.44 | 181.83 | 76 | 13941.44 | -122.36 | -0.88% | 1.26R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 72.07 | ↓181.78 | 0.2359 | 1.41 | **LOSS** |
| 138 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 81 | 13923.9 | -4.86 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 139 | MRVL | 10-24 14:10 | 10-24 15:25 | 84.78 | 84.73 | 167 | 14158.26 | -8.35 | -0.06% | 0.04R | 75m | market | stagnation | breakout | breakout | neutral | 71.12 | ↑84 | 0.3551 | 1.16 | **LOSS** |
| 140 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 141 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 142 | MRVL | 10-27 14:35 | 10-27 16:20 | 88.01 | 88.29 | 160 | 14081.6 | +44.8 | +0.32% | 0.19R | 105m | market | timeout | breakout | breakout | neutral | 83.3 | ↑86.6 | 0.5588 | 1.48 | **WIN** |
| 143 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 144 | TSLA | 11-03 14:55 | 11-03 15:15 | 473.6 | 469.73 | 26 | 12313.6 | -100.62 | -0.82% | 0.54R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.19 | ↑464.75 | 4.8262 | 1.31 | **LOSS** |
| 145 | GS | 11-04 15:10 | 11-04 15:45 | 802.24 | 798.84 | 17 | 13638.08 | -57.8 | -0.42% | 0.4R | 35m | market | early-reversal | breakout | breakout | neutral | 66.59 | ↑787.55 | 1.5299 | 1.87 | **LOSS** |
| 146 | NVDA | 11-05 14:50 | 11-05 16:35 | 200.26 | 201.46 | 70 | 14018.2 | +84 | +0.6% | 0.55R | 105m | market | timeout | breakout | breakout | neutral | 60.4 | ↑198.89 | -0.1305 | 1.48 | **WIN** |
| 147 | MRVL | 11-06 14:30 | 11-06 14:55 | 96.54 | 95.41 | 135 | 13032.9 | -152.55 | -1.17% | 0.64R | 25m | market | early-reversal | breakout | breakout | noisyHighBeta | 63.54 | ↓96.65 | -0.034 | 5.5 | **LOSS** |
| 148 | INTC | 11-07 15:05 | 11-07 15:25 | 37.96 | 37.63 | 371 | 14083.16 | -122.43 | -0.87% | 0.44R | 20m | market | early-reversal | breakout | breakout | neutral | 57.82 | ↓37.66 | 0.0959 | 1.6 | **LOSS** |
| 149 | GOOGL | 11-10 14:35 | 11-10 15:45 | 287.09 | 286.98 | 45 | 12919.05 | -4.95 | -0.04% | 0.04R | 70m | market | breakeven-stop | breakout | breakout | extendedBreakout | 83.99 | ↓284.79 | 1.3703 | 1.59 | **LOSS** |
| 150 | TSLA | 11-10 14:40 | 11-10 16:25 | 438.3 | 446.85 | 31 | 13587.3 | +265.05 | +1.95% | 1.46R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 68.97 | ↑437.6 | 0.1736 | 1.3 | **WIN** |
| 151 | TSLA | 11-14 15:25 | 11-14 16:50 | 400.11 | 409.64 | 34 | 13603.74 | +324.02 | +2.38% | 1.19R | 85m | market | profit-target | breakout | breakout | neutral | 74.92 | ↑393.05 | 0.6497 | 1.34 | **WIN** |
| 152 | TSLA | 11-17 14:45 | 11-17 16:30 | 413.55 | 419.52 | 33 | 13647.15 | +197.01 | +1.44% | 1.04R | 105m | market | timeout | breakout | breakout | neutral | 66.29 | ↑407.3 | 0.1064 | 1.51 | **WIN** |
| 153 | NVDA | 11-19 14:35 | 11-19 16:20 | 184.95 | 185.25 | 75 | 13871.25 | +22.5 | +0.16% | 0.13R | 105m | market | timeout | breakout | breakout | neutral | 60.43 | ↓184.25 | -0.0575 | 1.37 | **WIN** |
| 154 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.32 | 144.84 | 97 | 13902.04 | +147.44 | +1.06% | 0.99R | 105m | market | timeout | breakout | breakout | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 155 | INTC | 11-19 14:45 | 11-19 15:55 | 34.9 | 35.06 | 403 | 14064.7 | +64.48 | +0.46% | 0.43R | 70m | market | trailing-stop | breakout | breakout | neutral | 65.64 | ↓34.65 | -0.0073 | 1.54 | **WIN** |
| 156 | TSLA | 11-19 15:00 | 11-19 15:35 | 410.99 | 407.92 | 34 | 13973.66 | -104.38 | -0.75% | 0.53R | 35m | market | early-reversal | breakout | breakout | noisyHighBeta | 69.63 | ↑405.36 | 0.8818 | 1.76 | **LOSS** |
| 157 | TSLA | 11-20 14:35 | 11-20 16:05 | 420.94 | 421.11 | 33 | 13891.02 | +5.61 | +0.04% | 0.04R | 90m | market | trailing-stop | breakout | breakout | extendedBreakout | 80.88 | ↓418.74 | 4.058 | 3.9 | **WIN** |
| 158 | MRVL | 11-20 15:00 | 11-20 15:50 | 84.14 | 83.99 | 168 | 14135.52 | -25.2 | -0.18% | 0.09R | 50m | market | stagnation | breakout | breakout | neutral | 71.79 | ↑83.56 | 0.9253 | 1.17 | **LOSS** |
| 159 | GOOGL | 11-21 14:45 | 11-21 15:05 | 299.96 | 296.39 | 46 | 13798.16 | -164.22 | -1.19% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 74.38 | ↓298.43 | 1.6687 | 2 | **LOSS** |
| 160 | TSLA | 11-24 15:00 | 11-24 16:45 | 413.07 | 418.75 | 33 | 13631.31 | +187.44 | +1.38% | 0.98R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 84.31 | ↑408.87 | 4.2623 | 2.08 | **WIN** |
| 161 | INTC | 11-26 14:30 | 11-26 15:20 | 36.6 | 36.47 | 385 | 14091 | -50.05 | -0.36% | 0.46R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 80.16 | ↓36.44 | 0.1225 | 2.55 | **LOSS** |
| 162 | TSLA | 11-28 14:30 | 11-28 14:50 | 432.19 | 429.55 | 32 | 13830.08 | -84.48 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 90.62 | ↓430.38 | 1.3785 | 1.37 | **LOSS** |
| 163 | INTC | 11-28 14:35 | 11-28 15:20 | 37.9 | 38.99 | 345 | 13075.5 | +376.05 | +2.88% | 2.82R | 45m | market | profit-target | breakout | breakout | noisyHighBeta | 77.5 | ↑37.82 | 0.1255 | 1.99 | **WIN** |
| 164 | INTC | 11-28 15:25 | 11-28 17:10 | 39.11 | 40.01 | 361 | 14118.71 | +324.9 | +2.3% | 1.15R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.58 | ↑38.6 | 0.5535 | 1.53 | **WIN** |
| 165 | MRVL | 12-01 14:30 | 12-01 15:20 | 90.37 | 90.17 | 144 | 13013.28 | -28.8 | -0.22% | 0.11R | 50m | market | stagnation | breakout | breakout | noisyHighBeta | 60.32 | ↓89.69 | 0.2308 | 4.83 | **LOSS** |
| 166 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.38 | 158.17 | 83 | 12813.54 | +314.57 | +2.45% | 2.13R | 90m | market | profit-target | breakout | breakout | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 167 | NVDA | 12-02 14:35 | 12-02 15:10 | 185.38 | 184.01 | 75 | 13903.5 | -102.75 | -0.74% | 0.76R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 89.29 | ↓184.24 | 1.1127 | 2.77 | **LOSS** |
| 168 | INTC | 12-02 14:45 | 12-02 15:25 | 41.13 | 42.27 | 344 | 14148.72 | +392.16 | +2.77% | 2.1R | 40m | market | profit-target | breakout | breakout | neutral | 79.8 | ↑40.86 | 0.1962 | 1.8 | **WIN** |
| 169 | BA | 12-02 14:55 | 12-02 16:40 | 200.4 | 201.76 | 70 | 14028 | +95.2 | +0.68% | 0.36R | 105m | market | timeout | breakout | breakout | extendedBreakout | 87.88 | ↑197.67 | 2.7712 | 1.42 | **WIN** |
| 170 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.46 | 450.3 | 30 | 13603.8 | -94.8 | -0.7% | 0.83R | 20m | market | early-reversal | breakout | breakout | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 171 | GOOGL | 12-05 14:30 | 12-05 15:20 | 321.93 | 321.76 | 43 | 13842.99 | -7.31 | -0.05% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 87.7 | ↓321.25 | 0.7143 | 2.86 | **LOSS** |
| 172 | INTC | 12-05 15:00 | 12-05 15:30 | 42.57 | 42.23 | 334 | 14218.38 | -113.56 | -0.8% | 0.48R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 93.93 | ↑41.95 | 0.3823 | 2.62 | **LOSS** |
| 173 | GS | 12-08 14:30 | 12-08 15:50 | 863.48 | 863.84 | 16 | 13815.68 | +5.76 | +0.04% | 0.06R | 80m | market | breakeven-stop | breakout | breakout | neutral | 82.55 | ↓861.35 | 0.8948 | 1.16 | **WIN** |
| 174 | BA | 12-08 14:45 | 12-08 15:05 | 205.74 | 204.81 | 68 | 13990.32 | -63.24 | -0.45% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.5 | ↑204.46 | 0.6304 | 1.32 | **LOSS** |
| 175 | TSLA | 12-09 14:45 | 12-09 16:30 | 443.05 | 447.16 | 31 | 13734.55 | +127.41 | +0.93% | 1.11R | 105m | market | timeout | breakout | breakout | neutral | 68.83 | ↑439.71 | 1.0788 | 1.28 | **WIN** |
| 176 | TSLA | 12-12 14:30 | 12-12 15:20 | 452.82 | 452.31 | 30 | 13584.6 | -15.3 | -0.11% | 0.16R | 50m | market | trailing-stop | breakout | breakout | neutral | 87.44 | ↓451.24 | 0.5688 | 3.58 | **LOSS** |
| 177 | INTC | 12-12 14:35 | 12-12 15:00 | 39.96 | 39.68 | 355 | 14185.8 | -99.4 | -0.7% | 0.78R | 25m | market | early-reversal | breakout | breakout | neutral | 69.87 | ↓39.52 | 0.0079 | 1.14 | **LOSS** |
| 178 | TSLA | 12-15 14:35 | 12-15 15:00 | 478.48 | 473.21 | 29 | 13875.92 | -152.83 | -1.1% | 0.93R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 90.93 | ↓475.07 | 5.1277 | 7 | **LOSS** |
| 179 | MRVL | 12-17 14:55 | 12-17 15:35 | 86.28 | 85.01 | 152 | 13114.56 | -193.04 | -1.47% | 0.74R | 40m | market | early-reversal | breakout | breakout | neutral | 64.54 | ↓85.68 | 0.6191 | 1.59 | **LOSS** |
| 180 | SHOP | 12-17 14:55 | 12-17 15:45 | 169.06 | 168.37 | 83 | 14031.98 | -57.27 | -0.41% | 0.26R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 80.69 | ↓167.51 | 1.5636 | 2.72 | **LOSS** |
| 181 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.28 | 179.38 | 78 | 13905.84 | +85.8 | +0.62% | 0.72R | 105m | market | timeout | breakout | breakout | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 182 | INTC | 12-19 14:35 | 12-19 15:45 | 37.08 | 37.02 | 383 | 14201.64 | -22.98 | -0.16% | 0.17R | 70m | market | stagnation | breakout | breakout | neutral | 80.6 | ↓36.96 | 0.0554 | 2.07 | **LOSS** |
| 183 | BA | 12-19 14:35 | 12-19 16:20 | 212.44 | 214.69 | 66 | 14021.04 | +148.5 | +1.06% | 1.51R | 105m | market | timeout | breakout | breakout | extendedBreakout | 83.82 | ↑211.65 | 0.3886 | 1.35 | **WIN** |
| 184 | GOOGL | 12-23 14:40 | 12-23 15:00 | 312.98 | 311.76 | 44 | 13771.12 | -53.68 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 185 | BA | 12-30 14:35 | 12-30 14:55 | 221.52 | 220.05 | 63 | 13955.76 | -92.61 | -0.66% | 0.94R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 85.37 | ↓220.3 | 0.4956 | 4.46 | **LOSS** |
| 186 | INTC | 12-30 14:40 | 12-30 16:20 | 37.29 | 38.17 | 380 | 14170.2 | +334.4 | +2.36% | 2.68R | 100m | market | profit-target | breakout | breakout | extendedBreakout | 86.32 | ↑37.09 | 0.1623 | 1.21 | **WIN** |
| 187 | MRVL | 12-30 14:45 | 12-30 15:10 | 87.26 | 86.85 | 161 | 14048.86 | -66.01 | -0.47% | 0.57R | 25m | market | early-reversal | breakout | breakout | neutral | 81.65 | ↓86.44 | 0.3119 | 1.45 | **LOSS** |
| 188 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.19 | 189.93 | 73 | 13956.87 | -91.98 | -0.66% | 0.86R | 50m | market | early-reversal | breakout | breakout | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 189 | INTC | 01-02 14:40 | 01-02 15:20 | 38.78 | 39.04 | 341 | 13223.98 | +88.66 | +0.67% | 0.42R | 40m | market | trailing-stop | breakout | breakout | extendedBreakout | 81.43 | ↓38.49 | 0.3298 | 2.36 | **WIN** |
| 190 | GOOGL | 01-02 14:40 | 01-02 15:00 | 320.93 | 319.29 | 43 | 13799.99 | -70.52 | -0.51% | 0.6R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 87.13 | ↓319.91 | 1.0725 | 2.3 | **LOSS** |
| 191 | SHOP | 01-02 14:40 | 01-02 15:10 | 163.05 | 160.9 | 86 | 14022.3 | -184.9 | -1.32% | 1.89R | 30m | market | stop-loss | breakout | breakout | neutral | 78.6 | ↓162.42 | -0.0008 | 1.27 | **LOSS** |
| 192 | TSLA | 01-05 14:30 | 01-05 16:15 | 450.96 | 453.77 | 31 | 13979.76 | +87.11 | +0.62% | 0.68R | 105m | market | timeout | breakout | breakout | extendedBreakout | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 193 | GS | 01-05 14:35 | 01-05 16:20 | 939.12 | 951.91 | 13 | 12208.56 | +166.27 | +1.36% | 1.6R | 105m | market | timeout | breakout | breakout | extendedBreakout | 92.15 | ↑931.29 | 5.883 | 1.95 | **WIN** |
| 194 | BA | 01-05 14:35 | 01-05 15:20 | 229.92 | 228.42 | 61 | 14025.12 | -91.5 | -0.65% | 0.93R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 93.04 | ↓229.18 | 1.0395 | 2.27 | **LOSS** |
| 195 | INTC | 01-07 14:35 | 01-07 15:30 | 41.68 | 43.91 | 315 | 13129.2 | +702.45 | +5.35% | 3.64R | 55m | market | profit-target | breakout | breakout | extendedBreakout | 81.67 | ↑41.18 | 0.323 | 2.25 | **WIN** |
| 196 | INTC | 01-09 14:35 | 01-09 15:00 | 42.83 | 44.49 | 335 | 14348.05 | +556.1 | +3.88% | 2.54R | 25m | market | profit-target | breakout | breakout | extendedBreakout | 84.62 | ↑42.51 | 0.3796 | 1.63 | **WIN** |
| 197 | BA | 01-09 14:35 | 01-09 15:35 | 231.41 | 231.29 | 60 | 13884.6 | -7.2 | -0.05% | 0.07R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 198 | TSLA | 01-09 15:25 | 01-09 15:45 | 443.74 | 441.12 | 31 | 13755.94 | -81.22 | -0.59% | 0.43R | 20m | market | early-reversal | breakout | breakout | neutral | 65.38 | ↑437.05 | 1.4027 | 1.85 | **LOSS** |
| 199 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.04 | 328.25 | 39 | 12949.56 | -147.81 | -1.14% | 0.89R | 20m | market | early-reversal | breakout | breakout | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 200 | SHOP | 01-13 14:35 | 01-13 14:45 | 169.92 | 168.45 | 82 | 13933.44 | -120.54 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | extendedBreakout | 73.49 | ↓169.75 | 0.8873 | 4.45 | **LOSS** |
| 201 | INTC | 01-13 14:50 | 01-13 15:45 | 46.48 | 46.56 | 310 | 14408.8 | +24.8 | +0.17% | 0.09R | 55m | market | trailing-stop | breakout | breakout | noisyHighBeta | 81.43 | ↓46.03 | 0.5001 | 2 | **WIN** |
| 202 | INTC | 01-15 14:35 | 01-15 14:55 | 50.19 | 48.86 | 287 | 14404.53 | -381.71 | -2.65% | 2.04R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 78.34 | ↓49.88 | 0.2795 | 2.1 | **LOSS** |
| 203 | NVDA | 01-15 14:40 | 01-15 15:15 | 188.84 | 187.89 | 74 | 13974.16 | -70.3 | -0.5% | 0.53R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 91.48 | ↑187.31 | 1.4937 | 2.18 | **LOSS** |
| 204 | MRVL | 01-15 14:45 | 01-15 16:30 | 81.89 | 82.44 | 172 | 14085.08 | +94.6 | +0.67% | 0.4R | 105m | market | timeout | breakout | breakout | neutral | 72.98 | ↑81.31 | 0.4917 | 1.37 | **WIN** |
| 205 | GS | 01-15 15:05 | 01-15 16:50 | 957.78 | 969.06 | 14 | 13408.92 | +157.92 | +1.18% | 0.65R | 105m | market | timeout | breakout | breakout | neutral | 73.89 | ↑946.26 | 5.2806 | 1.24 | **WIN** |
| 206 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.66 | 443.07 | 31 | 13815.46 | -80.29 | -0.58% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 207 | INTC | 01-20 14:30 | 01-20 14:55 | 47.85 | 49.21 | 300 | 14355 | +408 | +2.84% | 2.04R | 25m | market | profit-target | breakout | breakout | noisyHighBeta | 64.92 | ↑47.7 | -0.039 | 5.07 | **WIN** |
| 208 | INTC | 01-21 14:35 | 01-21 15:20 | 51.79 | 53.36 | 257 | 13310.03 | +403.49 | +3.03% | 1.58R | 45m | market | profit-target | breakout | breakout | extendedBreakout | 91.45 | ↑51.49 | 0.7511 | 3.92 | **WIN** |
| 209 | BA | 01-22 14:35 | 01-22 14:55 | 253.88 | 251.71 | 55 | 13963.4 | -119.35 | -0.85% | 1.21R | 20m | market | stop-loss | breakout | breakout | extendedBreakout | 68.99 | ↓253.18 | 0.8981 | 3.53 | **LOSS** |
| 210 | GS | 01-26 14:40 | 01-26 15:00 | 933.11 | 929.91 | 15 | 13996.65 | -48 | -0.34% | 0.49R | 20m | market | early-reversal | breakout | breakout | neutral | 79.49 | ↑928.75 | 1.8344 | 2.44 | **LOSS** |
| 211 | MRVL | 01-28 14:35 | 01-28 14:55 | 85.03 | 83.81 | 166 | 14114.98 | -202.52 | -1.43% | 1.36R | 20m | market | early-reversal | breakout | breakout | neutral | 77.27 | ↓84.83 | 0.1532 | 1.49 | **LOSS** |
| 212 | SHOP | 01-29 14:30 | 01-29 14:50 | 143.13 | 140.55 | 90 | 12881.7 | -232.2 | -1.8% | 1.25R | 20m | market | early-reversal | breakout | breakout | neutral | 60.44 | ↓142.53 | -0.0411 | 2.51 | **LOSS** |
| 213 | TSLA | 01-30 14:30 | 01-30 15:50 | 426.06 | 438.4 | 32 | 13633.92 | +394.88 | +2.9% | 2.2R | 80m | market | profit-target | breakout | breakout | neutral | 69.64 | ↑426.5 | 0.6744 | 4.37 | **WIN** |
| 214 | GOOGL | 02-02 14:55 | 02-02 15:55 | 341.44 | 341.3 | 40 | 13657.6 | -5.6 | -0.04% | 0.04R | 60m | market | breakeven-stop | breakout | breakout | neutral | 68.67 | ↑338.38 | 0.3948 | 1.16 | **LOSS** |
| 215 | INTC | 02-02 15:20 | 02-02 17:05 | 48.5 | 49.16 | 299 | 14501.5 | +197.34 | +1.36% | 0.68R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 71.5 | ↑47.69 | 0.4275 | 1.21 | **WIN** |
| 216 | GS | 02-03 14:30 | 02-03 14:50 | 957.43 | 950.31 | 14 | 13404.02 | -99.68 | -0.74% | 1.06R | 20m | market | early-reversal | breakout | breakout | neutral | 71 | ↓956.06 | 0.8881 | 2.55 | **LOSS** |
| 217 | BA | 02-05 14:40 | 02-05 15:00 | 239.31 | 237.38 | 58 | 13879.98 | -111.94 | -0.81% | 0.84R | 20m | market | early-reversal | breakout | breakout | neutral | 72.21 | ↓236.76 | 1.32 | 1.27 | **LOSS** |
| 218 | INTC | 02-06 14:30 | 02-06 14:50 | 49.6 | 50.87 | 292 | 14483.2 | +370.84 | +2.56% | 1.58R | 20m | market | profit-target | breakout | breakout | noisyHighBeta | 68.51 | ↑49.49 | 0.1937 | 4.83 | **WIN** |
| 219 | NVDA | 02-06 14:40 | 02-06 16:25 | 179.98 | 183.88 | 77 | 13858.46 | +300.3 | +2.17% | 1.17R | 105m | market | timeout | breakout | breakout | neutral | 78.9 | ↑177.71 | 1.3618 | 1.87 | **WIN** |
| 220 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.06 | 405.87 | 34 | 13874.04 | -74.46 | -0.54% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 221 | NVDA | 02-09 14:35 | 02-09 16:20 | 189.56 | 191.73 | 74 | 14027.44 | +160.58 | +1.14% | 1.12R | 105m | market | timeout | breakout | breakout | noisyHighBeta | 67 | ↑187.22 | 0.4617 | 2.42 | **WIN** |
| 222 | SHOP | 02-09 14:40 | 02-09 14:50 | 115.02 | 112.99 | 121 | 13917.42 | -245.63 | -1.76% | 1.38R | 10m | market | stop-loss | breakout | breakout | noisyHighBeta | 92.62 | ↓113.54 | 0.6835 | 3.04 | **LOSS** |
| 223 | GS | 02-10 14:45 | 02-10 15:40 | 958.28 | 956.82 | 14 | 13415.92 | -20.44 | -0.15% | 0.21R | 55m | market | stagnation | breakout | breakout | neutral | 71.91 | ↑953.51 | 1.4363 | 2.25 | **LOSS** |
| 224 | INTC | 02-11 14:35 | 02-11 15:00 | 48.67 | 48.68 | 299 | 14552.33 | +2.99 | +0.02% | 0.02R | 25m | market | trailing-stop | breakout | breakout | extendedBreakout | 91.26 | ↓48.32 | 0.3041 | 1.23 | **WIN** |
| 225 | TSLA | 02-11 14:40 | 02-11 15:00 | 435.06 | 428.37 | 32 | 13921.92 | -214.08 | -1.54% | 1.31R | 20m | market | stop-loss | breakout | breakout | neutral | 74.57 | ↓433.46 | 1.9648 | 1.24 | **LOSS** |
| 226 | INTC | 02-13 15:05 | 02-13 16:10 | 47.11 | 47.08 | 309 | 14556.99 | -9.27 | -0.06% | 0.03R | 65m | market | stagnation | breakout | breakout | noisyHighBeta | 57.01 | ↑46.32 | -0.025 | 1.81 | **LOSS** |
| 227 | INTC | 02-17 14:45 | 02-17 15:05 | 46.28 | 45.65 | 315 | 14578.2 | -198.45 | -1.36% | 0.77R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 42.99 | ↓46.22 | -0.2589 | 3.21 | **LOSS** |
| 228 | GS | 02-17 14:45 | 02-17 15:05 | 919.18 | 910.96 | 15 | 13787.7 | -123.3 | -0.89% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | 71.17 | ↓916.45 | 3.1737 | 1.17 | **LOSS** |
| 229 | INTC | 02-17 15:15 | 02-17 15:35 | 46.56 | 45.45 | 290 | 13502.4 | -321.9 | -2.38% | 1.19R | 20m | market | stop-loss | breakout | breakout | noisyHighBeta | 65.65 | ↓46.05 | -0.2221 | 1.54 | **LOSS** |
| 230 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.42 | 189.72 | 74 | 13943.08 | +96.2 | +0.69% | 0.64R | 105m | market | timeout | breakout | breakout | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 231 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.34 | 314.41 | 45 | 13875.3 | +273.15 | +1.97% | 2.53R | 105m | market | timeout | breakout | breakout | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 232 | SHOP | 02-20 14:50 | 02-20 15:50 | 125.59 | 128.58 | 111 | 13940.49 | +331.89 | +2.38% | 1.52R | 60m | market | profit-target | breakout | breakout | noisyHighBeta | 72.03 | ↑124.33 | 0.4708 | 1.13 | **WIN** |
| 233 | MRVL | 02-20 15:00 | 02-20 15:50 | 80.02 | 79.84 | 176 | 14083.52 | -31.68 | -0.22% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 67.66 | ↑79.17 | 0.1205 | 3.44 | **LOSS** |
| 234 | NVDA | 02-23 14:30 | 02-23 15:05 | 193.1 | 191.64 | 72 | 13903.2 | -105.12 | -0.76% | 1.04R | 35m | market | early-reversal | breakout | breakout | extendedBreakout | 82.91 | ↓192.77 | 0.4635 | 4.01 | **LOSS** |
| 235 | BA | 02-24 14:40 | 02-24 15:30 | 233 | 233.16 | 60 | 13980 | +9.6 | +0.07% | 0.1R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 236 | TSLA | 02-24 15:25 | 02-24 15:50 | 407.63 | 405.1 | 34 | 13859.42 | -86.02 | -0.62% | 0.59R | 25m | market | early-reversal | breakout | breakout | neutral | 79.51 | ↑402.65 | 2.1488 | 2.05 | **LOSS** |
| 237 | INTC | 02-27 15:00 | 02-27 15:20 | 45.95 | 45.46 | 315 | 14474.25 | -154.35 | -1.07% | 0.58R | 20m | market | early-reversal | trend | breakout | neutral | 58.62 | ↓45.34 | 0.0473 | 1.81 | **LOSS** |
| 238 | MRVL | 03-04 14:30 | 03-04 14:45 | 78.8 | 77.59 | 160 | 12608 | -193.6 | -1.54% | 1.44R | 15m | market | stop-loss | mixed | breakout | neutral | 62.04 | ↓78.92 | -0.1287 | 2.55 | **LOSS** |
| 239 | SHOP | 03-04 15:00 | 03-04 15:50 | 128.26 | 128.1 | 109 | 13980.34 | -17.44 | -0.12% | 0.07R | 50m | market | stagnation | breakout | breakout | extendedBreakout | 90.65 | ↑125.83 | 1.5289 | 1.12 | **LOSS** |
| 240 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 310 | 14470.8 | -117.8 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 241 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 33 | 13689.06 | -94.71 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 242 | NVDA | 03-13 13:30 | 03-13 14:00 | 185.35 | 184.03 | 75 | 13901.25 | -99 | -0.71% | 1R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.44 | ↓185.35 | 0.1277 | 3.05 | **LOSS** |
| 243 | MRVL | 03-16 13:35 | 03-16 14:15 | 91.16 | 90.57 | 142 | 12944.72 | -83.78 | -0.65% | 0.53R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.51 | ↓90.57 | 0.6166 | 1.71 | **LOSS** |
| 244 | BA | 03-16 13:40 | 03-16 15:25 | 213.09 | 214.11 | 65 | 13850.85 | +66.3 | +0.48% | 0.53R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.4 | ↓212.61 | 0.6865 | 1.66 | **WIN** |
| 245 | GS | 03-17 13:35 | 03-17 13:55 | 818.04 | 815.02 | 15 | 12270.6 | -45.3 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.4 | ↑812.43 | 2.9774 | 1.98 | **LOSS** |
| 246 | SHOP | 03-17 13:45 | 03-17 14:10 | 132.19 | 131.15 | 98 | 12954.62 | -101.92 | -0.79% | 0.56R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.47 | ↓131.01 | 1.1137 | 1.75 | **LOSS** |
| 247 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 308 | 14469.84 | -388.08 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 248 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 36 | 13691.88 | +128.88 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 249 | MRVL | 03-26 13:35 | 03-26 14:05 | 100.05 | 99.3 | 140 | 14007 | -105 | -0.75% | 0.65R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.76 | ↓99.63 | 0.2735 | 3.14 | **LOSS** |
| 250 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.16 | 112.53 | 123 | 13918.68 | -77.49 | -0.56% | 0.58R | 20m | market | early-reversal | breakout | breakout | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 251 | BA | 03-31 13:30 | 03-31 15:15 | 191.23 | 195.1 | 73 | 13959.79 | +282.51 | +2.02% | 2.89R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.97 | ↑190.97 | -0.2013 | 1.92 | **WIN** |
| 252 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 253 | GS | 03-31 13:45 | 03-31 14:35 | 821.73 | 819.24 | 17 | 13969.41 | -42.33 | -0.3% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.63 | ↓816.94 | 1.4478 | 1.73 | **LOSS** |
| 254 | GOOGL | 04-01 13:30 | 04-01 15:15 | 294.23 | 296.85 | 47 | 13828.81 | +123.14 | +0.89% | 1.09R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.46 | ↑292.94 | 0.8343 | 2.94 | **WIN** |
| 255 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 283 | 13269.87 | +316.96 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 256 | TSLA | 04-06 13:30 | 04-06 13:45 | 367.33 | 363.53 | 38 | 13958.54 | -144.4 | -1.03% | 1.3R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 90.54 | ↓365.47 | 0.6804 | 1.95 | **LOSS** |
| 257 | MRVL | 04-08 13:35 | 04-08 14:45 | 111.94 | 112.66 | 125 | 13992.5 | +90 | +0.64% | 0.35R | 70m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.99 | ↓111.73 | 0.3925 | 4.87 | **WIN** |
| 258 | NVDA | 04-10 13:40 | 04-10 15:25 | 185.9 | 189.45 | 75 | 13942.5 | +266.25 | +1.91% | 2.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.43 | ↑185.58 | 0.4573 | 1.7 | **WIN** |
| 259 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 207 | 13291.47 | -97.29 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 260 | SHOP | 04-13 13:45 | 04-13 15:30 | 113.39 | 114.23 | 123 | 13946.97 | +103.32 | +0.74% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.5 | ↑111.95 | 0.8024 | 1.39 | **WIN** |
| 261 | NVDA | 04-14 13:30 | 04-14 15:15 | 192.27 | 193.1 | 73 | 14035.71 | +60.59 | +0.43% | 0.61R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.34 | ↑192.17 | 0.6125 | 5.29 | **WIN** |
| 262 | NVDA | 04-15 13:30 | 04-15 15:15 | 198.09 | 199.63 | 71 | 14064.39 | +109.34 | +0.78% | 1.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.07 | ↑197.63 | 0.3965 | 4.04 | **WIN** |
| 263 | SHOP | 04-15 13:50 | 04-15 14:10 | 123.98 | 123.23 | 112 | 13885.76 | -84 | -0.6% | 0.43R | 20m | market | early-reversal | breakout | breakout | noisyHighBeta | 90.89 | ↑122.32 | 1.2537 | 1.48 | **LOSS** |
| 264 | BA | 04-17 14:00 | 04-17 14:45 | 229.4 | 228.54 | 61 | 13993.4 | -52.46 | -0.37% | 0.25R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 84.93 | ↑226.9 | 2.7682 | 1.47 | **LOSS** |
| 265 | TSLA | 04-17 14:35 | 04-17 16:20 | 400.37 | 406.23 | 34 | 13612.58 | +199.24 | +1.46% | 0.92R | 105m | market | timeout | breakout | breakout | neutral | 56.16 | ↑395.57 | 2.1264 | 1.85 | **WIN** |
| 266 | MRVL | 04-21 13:30 | 04-21 14:35 | 150.91 | 152.22 | 86 | 12978.26 | +112.66 | +0.87% | 0.78R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 67.11 | ↓150.06 | 0.4257 | 1.87 | **WIN** |
| 267 | BA | 04-22 15:25 | 04-22 16:15 | 229.26 | 228.61 | 61 | 13984.86 | -39.65 | -0.28% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.18 | ↑225.65 | 1.5193 | 1.31 | **LOSS** |
| 268 | INTC | 04-23 15:10 | 04-23 15:35 | 67.84 | 67.57 | 212 | 14382.08 | -57.24 | -0.4% | 0.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.62 | ↑67.2 | 0.4745 | 1.34 | **LOSS** |
| 269 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 36 | 13694.4 | -194.4 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |
| 270 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |

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

- ⚠️ **Profit factor 1.36 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.89R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T07:00:26.131Z*
