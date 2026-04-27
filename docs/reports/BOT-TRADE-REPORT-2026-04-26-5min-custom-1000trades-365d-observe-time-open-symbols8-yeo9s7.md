# Bot Trade Report — 196 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T06:59:26.973Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 8 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"observe"}`

## Verdict

✅ **PROFITABLE** — net gain of $947.18 (+0.95%) over 196 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 196 |
| Win rate | 38.78% (76W / 120L) |
| Net P&L | $+947.18 (+0.95%) |
| Gross profit | $11907.46 |
| Gross loss | $10960.28 |
| Profit factor | 1.09 |
| Avg win | $156.68 |
| Avg loss | $91.34 |
| Payoff ratio | 1.72:1 |
| Expectancy | $+4.83 / trade |
| Max drawdown | 2.5% |
| Sharpe ratio (ann.) | 0.76 |
| Trades / active day | 1.88 |
| Avg confidence | 98.05% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.87R |
| Starting equity | $100,000 |
| Ending equity | $100,947.18 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 196 | 38.78% | $+947.18 | $4.83 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 23 | 11 | 47.83% | $+553.41 | $+24.06 | 1.61 | eligible |
| NVDA | 23 | 8 | 34.78% | $+339.88 | $+14.78 | 1.26 | throttle |
| MRVL | 30 | 13 | 43.33% | $+329.84 | $+10.99 | 1.2 | eligible |
| GS | 15 | 7 | 46.67% | $+241.45 | $+16.1 | 1.5 | eligible |
| BA | 24 | 9 | 37.5% | $+189.57 | $+7.9 | 1.18 | throttle |
| INTC | 34 | 14 | 41.18% | $+161.29 | $+4.74 | 1.06 | eligible |
| SHOP | 23 | 8 | 34.78% | $+22.03 | $+0.96 | 1.02 | throttle |
| TSLA | 24 | 6 | 25% | $-890.29 | $-37.1 | 0.52 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 159 | 63 | 39.62% | $+784.48 | $+4.93 |
| trend | 37 | 13 | 35.14% | $+162.7 | $+4.4 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 135 | 57 | 42.22% | $+1758.6 | $+13.03 |
| neutral | 46 | 17 | 36.96% | $+131.97 | $+2.87 |
| noisyHighBeta | 2 | 0 | 0% | $-128.65 | $-64.32 |
| extendedBreakout | 13 | 2 | 15.38% | $-814.74 | $-62.67 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | MRVL | 15 | 1.41 | $+23.62 | 15 | 0.97 | $-1.63 | 0.44% | 0.76 | watch |
| Behavior | falseBreakoutProne | 80 | 1.56 | $+28.09 | 55 | 0.87 | $-8.89 | 1.23% | 0.71 | watch |
| Time slot | Open 9:30-10:30 | 117 | 1.33 | $+16.23 | 79 | 0.82 | $-12.05 | 1.56% | 0.66 | watch |
| Symbol | BA | 15 | 1.5 | $+21.75 | 9 | 0.64 | $-15.19 | 0.3% | 0.44 | watch |
| Symbol | GOOGL | 18 | 1.9 | $+35.16 | 5 | 0.61 | $-15.9 | 0.2% | 0.43 | watch |
| Setup | breakout | 95 | 1.4 | $+20.48 | 64 | 0.75 | $-18.14 | 1.7% | 0.61 | watch |
| Symbol | GS | 9 | 6.4 | $+67.54 | 6 | 0 | $-61.06 | 0.37% | 0 | watch |
| Symbol | INTC | 21 | 2.12 | $+46.46 | 13 | 0.54 | $-62.65 | 0.88% | 0.47 | watch |
| Symbol | NVDA | 12 | 1.21 | $+10.03 | 11 | 1.31 | $+19.96 | 0.7% | 1.08 | reject |
| Symbol | TSLA | 12 | 0.14 | $-94.05 | 12 | 1.45 | $+19.86 | 0.43% | 1.14 | reject |
| Setup | trend | 22 | 0.95 | $-2.11 | 15 | 1.4 | $+13.94 | 0.45% | 1.05 | reject |
| Behavior | neutral | 28 | 1.02 | $+0.88 | 18 | 1.12 | $+5.96 | 0.45% | 0.89 | reject |
| Symbol | SHOP | 15 | 1.01 | $+0.69 | 8 | 1.03 | $+1.46 | 0.35% | 0.8 | reject |
| Behavior | extendedBreakout | 8 | 0.44 | $-32.2 | 5 | 0 | $-111.42 | 0.56% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.03% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+415.64 | 1.04 |
| +3 bps/side | $-647.63 | 0.95 |
| +5 bps/side | $-1710.85 | 0.86 |
| +10 bps/side | $-4368.92 | 0.7 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 66 |
| timeout | 54 |
| stagnation | 22 |
| stop-loss | 17 |
| breakeven-stop | 13 |
| profit-target | 11 |
| trailing-stop | 10 |
| trim-profit-target | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 04-30 14:15 | 04-30 16:00 | 106.01 | 106.64 | 132 | 13993.32 | +83.16 | +0.59% | 0.44R | 105m | market | timeout | breakout | breakout | neutral | 62.6 | ↑105.07 | -0.624 | 1.18 | **WIN** |
| 2 | MRVL | 05-01 14:20 | 05-01 15:50 | 61.05 | 60.93 | 229 | 13980.45 | -27.48 | -0.2% | 0.1R | 90m | market | breakeven-stop | trend | trend | neutral | 75.72 | ↑60.01 | 0.8924 | 1.13 | **LOSS** |
| 3 | BA | 05-01 14:25 | 05-01 14:45 | 184.43 | 183.81 | 75 | 13832.25 | -46.5 | -0.34% | 0.37R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 4 | BA | 05-02 14:10 | 05-02 14:40 | 186.91 | 186.14 | 74 | 13831.34 | -56.98 | -0.41% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 5 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.65 | 95.03 | 146 | 13964.9 | -90.52 | -0.65% | 0.61R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 6 | TSLA | 05-08 13:35 | 05-08 14:05 | 285.51 | 281.33 | 45 | 12847.95 | -188.1 | -1.46% | 0.84R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.37 | ↓284.05 | 1.9615 | 2.64 | **LOSS** |
| 7 | BA | 05-09 13:30 | 05-09 14:10 | 194.48 | 193.4 | 71 | 13808.08 | -76.68 | -0.56% | 0.59R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 63.32 | ↓194.31 | 0.0305 | 1.35 | **LOSS** |
| 8 | TSLA | 05-09 13:45 | 05-09 14:35 | 299.76 | 299.49 | 43 | 12889.68 | -11.61 | -0.09% | 0.05R | 50m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.46 | ↓297.01 | 2.3692 | 1.55 | **LOSS** |
| 9 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.58 | 66.44 | 213 | 13968.54 | +183.18 | +1.31% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 10 | SHOP | 05-13 13:30 | 05-13 15:15 | 106.71 | 108.23 | 121 | 12911.91 | +183.92 | +1.42% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.7 | ↑106.8 | 0.1729 | 1.73 | **WIN** |
| 11 | BA | 05-13 13:35 | 05-13 15:20 | 202.32 | 203.46 | 69 | 13960.08 | +78.66 | +0.56% | 0.77R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 12 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.54 | 130.12 | 110 | 13919.4 | +393.8 | +2.83% | 4.04R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 13 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.77 | 321.92 | 43 | 13922.11 | -79.55 | -0.57% | 0.43R | 40m | market | early-reversal | breakout | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 14 | INTC | 05-13 14:05 | 05-13 14:25 | 22.88 | 22.59 | 611 | 13979.68 | -177.19 | -1.27% | 1.17R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 15 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.32 | 159.92 | 86 | 13873.52 | -120.4 | -0.87% | 1.24R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 16 | TSLA | 05-14 14:05 | 05-14 14:25 | 343.98 | 339.88 | 40 | 13759.2 | -164 | -1.19% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.93 | ↓340.64 | 1.6752 | 1.14 | **LOSS** |
| 17 | BA | 05-14 14:10 | 05-14 15:00 | 206.75 | 205.83 | 67 | 13852.25 | -61.64 | -0.44% | 0.3R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 18 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.26 | 164.14 | 43 | 13954.36 | +80.84 | +1.16% | 1.08R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 19 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.26 | 166.5 | 43 | 13954.36 | +182.32 | +2.61% | 2.44R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 20 | TSLA | 05-16 13:35 | 05-16 13:55 | 350.88 | 347.82 | 39 | 13684.32 | -119.34 | -0.87% | 0.74R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.99 | ↓349.36 | 0.7035 | 3.08 | **LOSS** |
| 21 | SHOP | 05-16 13:35 | 05-16 13:55 | 112.18 | 111.59 | 124 | 13910.32 | -73.16 | -0.53% | 0.62R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 22 | NVDA | 05-19 13:35 | 05-19 15:20 | 134.24 | 134.88 | 104 | 13960.96 | +66.56 | +0.48% | 0.36R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 43.34 | ↑133.1 | -0.76 | 2.06 | **WIN** |
| 23 | GOOGL | 05-21 13:45 | 05-21 15:20 | 167.52 | 172.81 | 77 | 12899.04 | +407.33 | +3.16% | 3.4R | 95m | market | profit-target | breakout | breakout | falseBreakoutProne | 87.57 | ↑165.79 | 0.3588 | 1.34 | **WIN** |
| 24 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.73 | 175.94 | 81 | 13910.13 | +341.01 | +2.45% | 2.45R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 25 | MRVL | 05-22 13:45 | 05-22 15:30 | 60.97 | 61.81 | 229 | 13962.13 | +192.36 | +1.38% | 1.03R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 68.83 | ↑60.51 | -0.0945 | 2.81 | **WIN** |
| 26 | NVDA | 05-22 14:00 | 05-22 14:20 | 133.77 | 132.77 | 105 | 14045.85 | -105 | -0.75% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 27 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.93 | 172.21 | 82 | 14016.26 | +104.96 | +0.75% | 0.81R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 28 | GS | 05-27 13:35 | 05-27 15:20 | 606.92 | 611.01 | 23 | 13959.16 | +94.07 | +0.67% | 0.96R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 29 | MRVL | 05-28 13:35 | 05-28 14:30 | 65.33 | 65.19 | 215 | 14045.95 | -30.1 | -0.21% | 0.15R | 55m | market | stagnation | trend | breakout | falseBreakoutProne | 57.32 | ↓64.95 | -0.1116 | 1.26 | **LOSS** |
| 30 | BA | 05-29 14:00 | 05-29 14:30 | 203.77 | 208.95 | 68 | 13856.36 | +352.24 | +2.54% | 3.63R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 31 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.1 | 136.34 | 95 | 13024.5 | -72.2 | -0.55% | 0.52R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 32 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.89 | 141.52 | 100 | 13989 | +163 | +1.17% | 1.46R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 33 | INTC | 06-03 14:15 | 06-03 16:00 | 19.96 | 20.25 | 700 | 13972 | +203 | +1.45% | 1.28R | 105m | market | timeout | trend | trend | neutral | 58.76 | ↑19.69 | 0.0221 | 2.12 | **WIN** |
| 34 | GOOGL | 06-05 13:40 | 06-05 14:00 | 170.33 | 169.62 | 83 | 14137.39 | -58.93 | -0.42% | 0.51R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 35 | GOOGL | 06-06 13:30 | 06-06 15:15 | 171.7 | 171.89 | 76 | 13049.2 | +14.44 | +0.11% | 0.11R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 64.41 | ↓171.53 | -0.232 | 1.85 | **WIN** |
| 36 | GS | 06-06 13:30 | 06-06 14:20 | 618.3 | 615.47 | 21 | 12984.3 | -59.43 | -0.46% | 0.52R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 67.6 | ↓616.1 | 0.8374 | 2.41 | **LOSS** |
| 37 | TSLA | 06-06 13:35 | 06-06 13:50 | 299.73 | 293.42 | 46 | 13787.58 | -290.26 | -2.11% | 1.06R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.97 | ↓299.02 | 3.9483 | 5.4 | **LOSS** |
| 38 | MRVL | 06-06 13:35 | 06-06 14:55 | 67.31 | 69.34 | 208 | 14000.48 | +422.24 | +3.02% | 1.61R | 80m | market | profit-target | breakout | breakout | falseBreakoutProne | 64.61 | ↑66.9 | -0.03 | 1.73 | **WIN** |
| 39 | INTC | 06-09 13:40 | 06-09 15:25 | 20.52 | 20.73 | 682 | 13994.64 | +143.22 | +1.02% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 59.47 | ↓20.53 | 0.0868 | 1.69 | **WIN** |
| 40 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.7 | 70.12 | 199 | 14069.3 | -115.42 | -0.82% | 0.58R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 41 | INTC | 06-10 14:25 | 06-10 15:30 | 20.78 | 20.75 | 674 | 14005.72 | -20.22 | -0.14% | 0.12R | 65m | market | stagnation | trend | trend | neutral | 61.33 | ↑20.5 | 0.0271 | 1.26 | **LOSS** |
| 42 | SHOP | 06-11 13:50 | 06-11 15:35 | 114.37 | 114.59 | 122 | 13953.14 | +26.84 | +0.19% | 0.12R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.76 | ↑113.51 | 1.2379 | 1.41 | **WIN** |
| 43 | INTC | 06-13 13:35 | 06-13 13:55 | 20.55 | 20.32 | 682 | 14015.1 | -156.86 | -1.12% | 1.6R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 68.32 | ↓20.44 | -0.0779 | 6.48 | **LOSS** |
| 44 | GS | 06-16 13:30 | 06-16 15:15 | 624.2 | 630.59 | 20 | 12484 | +127.8 | +1.02% | 1.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 67.72 | ↑622.27 | 0.2086 | 1.51 | **WIN** |
| 45 | SHOP | 06-16 13:35 | 06-16 15:20 | 107.83 | 108.98 | 129 | 13910.07 | +148.35 | +1.07% | 0.9R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.84 | ↑107.85 | 0.093 | 1.35 | **WIN** |
| 46 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 678 | 13993.92 | +94.92 | +0.68% | 0.66R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 47 | MRVL | 06-16 14:10 | 06-16 15:25 | 70.89 | 70.53 | 198 | 14036.22 | -71.28 | -0.51% | 0.31R | 75m | market | early-reversal | breakout | breakout | extendedBreakout | 89.81 | ↑69.26 | 0.6852 | 1.18 | **LOSS** |
| 48 | BA | 06-16 14:10 | 06-16 14:40 | 203.78 | 202.97 | 68 | 13857.04 | -55.08 | -0.4% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 49 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.9 | 617 | 12907.64 | -12.34 | -0.1% | 0.14R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 50 | MRVL | 06-17 14:10 | 06-17 14:30 | 71.59 | 70.6 | 196 | 14031.64 | -194.04 | -1.38% | 1.21R | 20m | market | stop-loss | trend | trend | neutral | 77.03 | ↓70.93 | 0.1959 | 1.07 | **LOSS** |
| 51 | TSLA | 06-18 13:35 | 06-18 15:20 | 320.6 | 324.73 | 43 | 13785.8 | +177.59 | +1.29% | 1.3R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 62.57 | ↑317.42 | 0.1986 | 1.4 | **WIN** |
| 52 | GS | 06-18 13:45 | 06-18 15:30 | 633.23 | 635.09 | 22 | 13931.06 | +40.92 | +0.29% | 0.41R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.8 | ↑630.67 | 0.5193 | 2.91 | **WIN** |
| 53 | MRVL | 06-18 13:50 | 06-18 14:55 | 76.16 | 75.93 | 184 | 14013.44 | -42.32 | -0.3% | 0.15R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 85.17 | ↑75.19 | 1.3898 | 2.19 | **LOSS** |
| 54 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 662 | 14001.3 | +191.98 | +1.37% | 1.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 55 | INTC | 06-23 13:35 | 06-23 14:45 | 21.35 | 21.35 | 657 | 14026.95 | +0 | +0% | 0R | 70m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 56 | BA | 06-23 14:15 | 06-23 15:15 | 201.61 | 201.52 | 69 | 13911.09 | -6.21 | -0.04% | 0.06R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 57 | SHOP | 06-23 14:20 | 06-23 14:40 | 108.5 | 108.01 | 129 | 13996.5 | -63.21 | -0.45% | 0.32R | 20m | market | early-reversal | breakout | breakout | neutral | 69.31 | ↑106.51 | 0.4005 | 1.4 | **LOSS** |
| 58 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.34 | 647 | 14033.43 | +420.55 | +3% | 4.29R | 70m | market | profit-target | breakout | breakout | falseBreakoutProne | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 59 | SHOP | 06-24 13:35 | 06-24 15:20 | 112.89 | 114.76 | 115 | 12982.35 | +215.05 | +1.66% | 1.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.66 | ↑112.59 | 0.5732 | 2.95 | **WIN** |
| 60 | NVDA | 06-24 13:40 | 06-24 14:00 | 147.71 | 146.93 | 95 | 14032.45 | -74.1 | -0.53% | 0.76R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 61 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.32 | 169.01 | 83 | 14053.56 | -25.73 | -0.18% | 0.26R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 62 | NVDA | 06-25 14:15 | 06-25 15:05 | 151.98 | 151.76 | 92 | 13982.16 | -20.24 | -0.14% | 0.15R | 50m | market | stagnation | trend | trend | neutral | 73.81 | ↑150.77 | 1.0286 | 1.53 | **LOSS** |
| 63 | GS | 06-26 13:30 | 06-26 15:15 | 677.5 | 684.31 | 20 | 13550 | +136.2 | +1.01% | 1.44R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 87.45 | ↑675.18 | 1.4198 | 9.58 | **WIN** |
| 64 | INTC | 06-27 13:40 | 06-27 14:30 | 23.11 | 23.06 | 609 | 14073.99 | -30.45 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 65 | SHOP | 06-27 14:00 | 06-27 14:30 | 114.33 | 113.88 | 122 | 13948.26 | -54.9 | -0.39% | 0.44R | 30m | market | early-reversal | trend | trend | neutral | 62.87 | ↓113.59 | 0.4083 | 1.14 | **LOSS** |
| 66 | MRVL | 07-02 13:30 | 07-02 15:15 | 77.25 | 78.58 | 181 | 13982.25 | +240.73 | +1.72% | 1.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 57.74 | ↑76.96 | -0.0519 | 4.29 | **WIN** |
| 67 | INTC | 07-03 13:40 | 07-03 14:30 | 22.37 | 22.32 | 629 | 14070.73 | -31.45 | -0.22% | 0.28R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.69 | ↓22.22 | 0.0634 | 3.08 | **LOSS** |
| 68 | BA | 07-03 13:40 | 07-03 15:25 | 214.67 | 215.97 | 65 | 13953.55 | +84.5 | +0.61% | 0.87R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 69 | INTC | 07-08 13:45 | 07-08 15:15 | 22.83 | 23.39 | 617 | 14086.11 | +345.52 | +2.45% | 2.88R | 90m | market | profit-target | breakout | breakout | falseBreakoutProne | 94.7 | ↑22.52 | 0.1552 | 3.39 | **WIN** |
| 70 | NVDA | 07-09 13:35 | 07-09 14:00 | 163.98 | 163.5 | 85 | 13938.3 | -40.8 | -0.29% | 0.41R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.88 | ↓162.95 | 0.7714 | 4 | **LOSS** |
| 71 | BA | 07-09 13:40 | 07-09 14:00 | 226.95 | 224.09 | 56 | 12709.2 | -160.16 | -1.26% | 1.05R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 95.05 | ↓225.45 | 1.42 | 2.98 | **LOSS** |
| 72 | TSLA | 07-10 13:35 | 07-10 13:55 | 307.58 | 303.19 | 41 | 12610.78 | -179.99 | -1.43% | 1.27R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.39 | ↓304.18 | 1.5609 | 3.79 | **LOSS** |
| 73 | GOOGL | 07-14 13:30 | 07-14 13:40 | 182.41 | 180.18 | 71 | 12951.11 | -158.33 | -1.22% | 1.74R | 10m | market | stop-loss | trend | breakout | falseBreakoutProne | 78.96 | ↓182.27 | 0.0927 | 6.37 | **LOSS** |
| 74 | BA | 07-14 13:35 | 07-14 13:55 | 230.81 | 228.84 | 60 | 13848.6 | -118.2 | -0.85% | 1.01R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 75 | SHOP | 07-16 14:25 | 07-16 15:20 | 115.89 | 116.28 | 121 | 14022.69 | +47.19 | +0.34% | 0.24R | 55m | market | trailing-stop | breakout | breakout | neutral | 56.77 | ↑114.39 | -0.2086 | 2.33 | **WIN** |
| 76 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 602 | 14122.92 | -180.6 | -1.28% | 1.54R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 77 | GOOGL | 07-21 13:30 | 07-21 15:15 | 187.85 | 188.82 | 75 | 14088.75 | +72.75 | +0.52% | 0.74R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 93.82 | ↓187.49 | 0.3015 | 7.57 | **WIN** |
| 78 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.86 | 127.52 | 109 | 14045.74 | -146.06 | -1.04% | 1.44R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 79 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.56 | 124.43 | 112 | 13950.72 | -14.56 | -0.1% | 0.14R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 80 | INTC | 07-28 13:30 | 07-28 13:45 | 21.05 | 20.99 | 670 | 14103.5 | -40.2 | -0.29% | 0.41R | 15m | market | breakeven-stop | breakout | breakout | extendedBreakout | 84.21 | ↓20.92 | 0.091 | 3.48 | **LOSS** |
| 81 | MRVL | 07-28 13:40 | 07-28 14:30 | 76.08 | 75.59 | 185 | 14074.8 | -90.65 | -0.64% | 0.67R | 50m | market | early-reversal | breakout | breakout | falseBreakoutProne | 85.74 | ↓75.73 | 0.4297 | 1.13 | **LOSS** |
| 82 | TSLA | 08-04 13:35 | 08-04 14:25 | 310 | 308.94 | 44 | 13640 | -46.64 | -0.34% | 0.26R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 78.29 | ↓308.35 | 1.111 | 1.74 | **LOSS** |
| 83 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.38 | 192.85 | 73 | 14043.74 | +34.31 | +0.24% | 0.34R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 84 | GS | 08-04 13:35 | 08-04 15:25 | 721.25 | 723.86 | 19 | 13703.75 | +49.59 | +0.36% | 0.51R | 110m | market | timeout | breakout | breakout | falseBreakoutProne | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 85 | INTC | 08-05 13:40 | 08-05 14:30 | 20.23 | 20.22 | 697 | 14100.31 | -6.97 | -0.05% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 85.39 | ↓19.98 | 0.1283 | 6.84 | **LOSS** |
| 86 | MRVL | 08-07 13:40 | 08-07 14:05 | 76.98 | 76.47 | 182 | 14010.36 | -92.82 | -0.66% | 0.69R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 87 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.88 | 200.95 | 70 | 14061.6 | +4.9 | +0.03% | 0.03R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **WIN** |
| 88 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.29 | 150.49 | 92 | 13918.68 | -73.6 | -0.53% | 0.71R | 15m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 89 | INTC | 08-11 13:35 | 08-11 13:55 | 20.94 | 20.8 | 673 | 14092.62 | -94.22 | -0.67% | 0.61R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 82.78 | ↓20.81 | 0.1873 | 5.97 | **LOSS** |
| 90 | GOOGL | 08-12 13:30 | 08-12 13:50 | 203.39 | 202.45 | 69 | 14033.91 | -64.86 | -0.46% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.93 | ↓202.65 | 0.1965 | 1.86 | **LOSS** |
| 91 | BA | 08-12 13:30 | 08-12 15:15 | 228.6 | 231.79 | 61 | 13944.6 | +194.59 | +1.4% | 2R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 74.26 | ↑227.99 | -0.0565 | 1.61 | **WIN** |
| 92 | BA | 08-13 13:30 | 08-13 14:15 | 234.47 | 233.18 | 59 | 13833.73 | -76.11 | -0.55% | 0.79R | 45m | market | early-reversal | breakout | breakout | falseBreakoutProne | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 93 | NVDA | 08-14 13:45 | 08-14 14:55 | 182.34 | 182.21 | 77 | 14040.18 | -10.01 | -0.07% | 0.09R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 61.59 | ↑181.02 | -0.0546 | 1.51 | **LOSS** |
| 94 | GOOGL | 08-15 14:10 | 08-15 15:00 | 205.96 | 205.46 | 68 | 14005.28 | -34 | -0.24% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 95 | INTC | 08-19 13:50 | 08-19 14:15 | 26.07 | 25.92 | 501 | 13061.07 | -75.15 | -0.58% | 0.29R | 25m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 83.01 | ↓25.72 | 0.5297 | 2.38 | **LOSS** |
| 96 | TSLA | 08-19 13:55 | 08-19 14:35 | 338.97 | 334.85 | 40 | 13558.8 | -164.8 | -1.22% | 1.4R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 73.24 | ↓335.97 | 0.5198 | 2.45 | **LOSS** |
| 97 | NVDA | 08-21 13:35 | 08-21 13:55 | 176.81 | 174.27 | 79 | 13967.99 | -200.66 | -1.44% | 1.8R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 69.72 | ↓175.91 | 0.5481 | 2.79 | **LOSS** |
| 98 | BA | 08-22 13:35 | 08-22 15:20 | 228.97 | 230.99 | 61 | 13967.17 | +123.22 | +0.88% | 1.26R | 105m | market | timeout | breakout | breakout | extendedBreakout | 82.19 | ↑227.86 | 0.5057 | 1.31 | **WIN** |
| 99 | SHOP | 08-22 14:05 | 08-22 15:50 | 141.09 | 141.99 | 92 | 12980.28 | +82.8 | +0.64% | 0.49R | 105m | market | timeout | breakout | breakout | extendedBreakout | 77.78 | ↑137.54 | 0.6418 | 2.33 | **WIN** |
| 100 | MRVL | 08-22 14:10 | 08-22 15:05 | 74.18 | 74.01 | 175 | 12981.5 | -29.75 | -0.23% | 0.15R | 55m | market | stagnation | breakout | breakout | extendedBreakout | 82.46 | ↑72.75 | 0.593 | 1.32 | **LOSS** |
| 101 | GS | 08-22 14:10 | 08-22 15:55 | 734.12 | 742.37 | 19 | 13948.28 | +156.75 | +1.12% | 1.6R | 105m | market | timeout | breakout | breakout | neutral | 87.91 | ↑726.12 | 2.2498 | 1.97 | **WIN** |
| 102 | BA | 08-26 13:30 | 08-26 15:15 | 229.63 | 232.1 | 61 | 14007.43 | +150.67 | +1.08% | 1.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 73.61 | ↑229.55 | 0.0351 | 2.21 | **WIN** |
| 103 | SHOP | 08-28 13:35 | 08-28 13:55 | 143.59 | 142.62 | 97 | 13928.23 | -94.09 | -0.68% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.32 | ↓142.62 | 0.7064 | 2.39 | **LOSS** |
| 104 | GOOGL | 08-28 13:40 | 08-28 15:25 | 209.79 | 211.18 | 67 | 14055.93 | +93.13 | +0.66% | 0.94R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.22 | ↑208.95 | 0.4227 | 1.4 | **WIN** |
| 105 | INTC | 09-04 14:25 | 09-04 16:10 | 24.12 | 24.26 | 583 | 14061.96 | +81.62 | +0.58% | 0.73R | 105m | market | timeout | trend | trend | neutral | 70.34 | ↑23.93 | 0.0285 | 1.24 | **WIN** |
| 106 | TSLA | 09-05 13:30 | 09-05 14:10 | 349.63 | 348.95 | 36 | 12586.68 | -24.48 | -0.19% | 0.18R | 40m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 95.02 | ↓350.07 | 2.7501 | 9.63 | **LOSS** |
| 107 | GOOGL | 09-05 13:40 | 09-05 14:10 | 234.96 | 234.11 | 60 | 14097.6 | -51 | -0.36% | 0.51R | 30m | market | early-reversal | breakout | breakout | extendedBreakout | 91.97 | ↓233.67 | 1.0329 | 1.13 | **LOSS** |
| 108 | MRVL | 09-08 13:35 | 09-08 15:20 | 64.18 | 64.98 | 218 | 13991.24 | +174.4 | +1.25% | 1.32R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 78.09 | ↑63.84 | 0.2539 | 1.42 | **WIN** |
| 109 | NVDA | 09-08 13:40 | 09-08 14:15 | 170.05 | 169.28 | 82 | 13944.1 | -63.14 | -0.45% | 0.63R | 35m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.2 | ↓169.29 | 0.6814 | 2.66 | **LOSS** |
| 110 | MRVL | 09-10 13:30 | 09-10 13:50 | 68.09 | 67.29 | 206 | 14026.54 | -164.8 | -1.17% | 1.41R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 87.39 | ↓68.12 | 0.1225 | 2.27 | **LOSS** |
| 111 | GS | 09-10 14:00 | 09-10 14:35 | 771.05 | 768.1 | 18 | 13878.9 | -53.1 | -0.38% | 0.54R | 35m | market | early-reversal | trend | trend | neutral | 70.44 | ↓768.24 | 1.7496 | 1.62 | **LOSS** |
| 112 | GS | 09-11 13:40 | 09-11 15:25 | 779.41 | 785.8 | 18 | 14029.38 | +115.02 | +0.82% | 1.17R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 84.04 | ↑776.56 | 1.4196 | 1.74 | **WIN** |
| 113 | GOOGL | 09-15 13:35 | 09-15 13:45 | 250.65 | 247.26 | 56 | 14036.4 | -189.84 | -1.35% | 1.5R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 93.04 | ↓248.08 | 1.4761 | 3.74 | **LOSS** |
| 114 | INTC | 09-15 13:40 | 09-15 14:55 | 24.67 | 25.31 | 571 | 14086.57 | +365.44 | +2.59% | 2.82R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 73.45 | ↑24.48 | 0.0686 | 6.55 | **WIN** |
| 115 | INTC | 09-16 14:10 | 09-16 15:00 | 25.2 | 25.12 | 561 | 14137.2 | -44.88 | -0.32% | 0.26R | 50m | market | stagnation | trend | trend | neutral | 64.38 | ↑24.96 | 0.066 | 1.26 | **LOSS** |
| 116 | SHOP | 09-18 14:05 | 09-18 14:30 | 151.21 | 150.3 | 92 | 13911.32 | -83.72 | -0.6% | 0.48R | 25m | market | early-reversal | breakout | breakout | neutral | 79.96 | ↑149.88 | 0.8373 | 1.12 | **LOSS** |
| 117 | TSLA | 09-19 13:35 | 09-19 14:40 | 426.3 | 425.13 | 32 | 13641.6 | -37.44 | -0.27% | 0.24R | 65m | market | stagnation | trend | breakout | falseBreakoutProne | 57.78 | ↓424.49 | -0.1957 | 1.41 | **LOSS** |
| 118 | INTC | 09-22 13:40 | 09-22 14:00 | 30.09 | 29.51 | 469 | 14112.21 | -272.02 | -1.93% | 1.68R | 20m | market | stop-loss | breakout | breakout | neutral | 84.54 | ↓29.73 | 0.0822 | 4.9 | **LOSS** |
| 119 | INTC | 09-23 13:35 | 09-23 15:20 | 29.51 | 29.72 | 477 | 14076.27 | +100.17 | +0.71% | 1.01R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 90.07 | ↓29.3 | 0.0979 | 11.97 | **WIN** |
| 120 | BA | 09-23 13:40 | 09-23 15:25 | 215.85 | 216.21 | 65 | 14030.25 | +23.4 | +0.17% | 0.19R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 70.63 | ↓215.93 | 0.6238 | 2 | **WIN** |
| 121 | INTC | 09-24 13:35 | 09-24 15:20 | 30.15 | 30.62 | 468 | 14110.2 | +219.96 | +1.56% | 1.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 81.69 | ↑29.86 | 0.1067 | 4.18 | **WIN** |
| 122 | MRVL | 09-24 13:50 | 09-24 14:10 | 78.15 | 77.2 | 179 | 13988.85 | -170.05 | -1.22% | 0.66R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.89 | ↓77.53 | 0.8047 | 1.69 | **LOSS** |
| 123 | NVDA | 09-25 14:00 | 09-25 15:45 | 176.32 | 179.49 | 79 | 13929.28 | +250.43 | +1.8% | 1.68R | 105m | market | timeout | breakout | breakout | neutral | 57.45 | ↑174.53 | -0.5666 | 1.31 | **WIN** |
| 124 | INTC | 09-25 14:20 | 09-25 14:40 | 33.36 | 32.79 | 423 | 14111.28 | -241.11 | -1.71% | 0.86R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 75.99 | ↑32.38 | 0.6068 | 1.15 | **LOSS** |
| 125 | GOOGL | 09-26 13:30 | 09-26 13:50 | 248.8 | 247.33 | 56 | 13932.8 | -82.32 | -0.59% | 0.84R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 72.95 | ↓247.99 | 0.5452 | 1.76 | **LOSS** |
| 126 | GS | 09-26 13:35 | 09-26 14:25 | 803.89 | 803.27 | 17 | 13666.13 | -10.54 | -0.08% | 0.11R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 95.05 | ↓801.99 | 1.1497 | 1.89 | **LOSS** |
| 127 | BA | 09-26 13:40 | 09-26 14:55 | 220.43 | 220.15 | 63 | 13887.09 | -17.64 | -0.13% | 0.11R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 86.14 | ↓220.69 | 1.3581 | 2.08 | **LOSS** |
| 128 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.83 | 455.56 | 15 | 13524.9 | +70.95 | +1.05% | 0.81R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 129 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.83 | 455.45 | 15 | 13524.9 | +69.3 | +1.02% | 0.78R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 130 | MRVL | 10-06 13:35 | 10-06 13:55 | 89.72 | 89.19 | 144 | 12919.68 | -76.32 | -0.59% | 0.47R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 91.1 | ↓89.51 | 0.6021 | 2.51 | **LOSS** |
| 131 | GS | 10-06 13:40 | 10-06 13:50 | 800.66 | 792.98 | 17 | 13611.22 | -130.56 | -0.96% | 1.37R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 75.08 | ↓799.54 | 2.1042 | 3.86 | **LOSS** |
| 132 | BA | 10-06 14:10 | 10-06 15:55 | 218.45 | 220.93 | 64 | 13980.8 | +158.72 | +1.14% | 1.37R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 133 | BA | 10-07 13:30 | 10-07 14:10 | 222.3 | 221.15 | 63 | 14004.9 | -72.45 | -0.52% | 0.74R | 40m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.2 | ↓221.69 | 0.2238 | 2.95 | **LOSS** |
| 134 | INTC | 10-07 13:35 | 10-07 15:00 | 37.4 | 37.24 | 377 | 14099.8 | -60.32 | -0.43% | 0.52R | 85m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 78.26 | ↓37.08 | 0.0821 | 8.05 | **LOSS** |
| 135 | NVDA | 10-08 13:30 | 10-08 15:15 | 187.88 | 187.99 | 74 | 13903.12 | +8.14 | +0.06% | 0.09R | 105m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 76.48 | ↓187.55 | 0.1179 | 4.94 | **WIN** |
| 136 | SHOP | 10-08 14:25 | 10-08 14:50 | 166.54 | 165.84 | 84 | 13989.36 | -58.8 | -0.42% | 0.3R | 25m | market | early-reversal | trend | trend | neutral | 79.36 | ↑165.09 | 1.1648 | 1.22 | **LOSS** |
| 137 | NVDA | 10-09 13:50 | 10-09 14:15 | 194.84 | 193.73 | 72 | 14028.48 | -79.92 | -0.57% | 0.58R | 25m | market | early-reversal | breakout | breakout | extendedBreakout | 84.37 | ↑192.92 | 1.424 | 3.01 | **LOSS** |
| 138 | NVDA | 10-10 14:20 | 10-10 14:55 | 194.91 | 194.09 | 72 | 14033.52 | -59.04 | -0.42% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 61.54 | ↓193.7 | 0.5163 | 1.61 | **LOSS** |
| 139 | TSLA | 10-13 13:35 | 10-13 14:25 | 423.48 | 423.21 | 32 | 13551.36 | -8.64 | -0.06% | 0.04R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 64.58 | ↓422.99 | 0.2768 | 1.13 | **LOSS** |
| 140 | GOOGL | 10-13 13:35 | 10-13 14:25 | 240.75 | 240.54 | 58 | 13963.5 | -12.18 | -0.09% | 0.1R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 66.1 | ↓240.56 | 0.1219 | 1.69 | **LOSS** |
| 141 | NVDA | 10-13 14:00 | 10-13 14:20 | 189.95 | 188.07 | 73 | 13866.35 | -137.24 | -0.99% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 60.78 | ↓188.68 | 0.736 | 1.46 | **LOSS** |
| 142 | GS | 10-16 13:30 | 10-16 13:40 | 776.74 | 769.7 | 18 | 13981.32 | -126.72 | -0.91% | 1.3R | 10m | market | stop-loss | breakout | breakout | falseBreakoutProne | 77.18 | ↓774.28 | -0.5502 | 1.11 | **LOSS** |
| 143 | MRVL | 10-16 13:40 | 10-16 14:50 | 90.13 | 90.05 | 155 | 13970.15 | -12.4 | -0.09% | 0.08R | 70m | market | stagnation | breakout | breakout | falseBreakoutProne | 67.01 | ↑90.24 | 0.4889 | 1.86 | **LOSS** |
| 144 | INTC | 10-17 13:50 | 10-17 14:25 | 37.15 | 38.06 | 349 | 12965.35 | +317.59 | +2.45% | 1.26R | 35m | market | profit-target | breakout | breakout | falseBreakoutProne | 60.21 | ↑36.75 | -0.0537 | 4.98 | **WIN** |
| 145 | NVDA | 10-17 14:20 | 10-17 14:40 | 183.46 | 182.12 | 76 | 13942.96 | -101.84 | -0.73% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.47 | ↓181.9 | 0.4689 | 2.45 | **LOSS** |
| 146 | SHOP | 10-20 13:30 | 10-20 15:15 | 160.67 | 164.65 | 80 | 12853.6 | +318.4 | +2.48% | 2.76R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 69.41 | ↑160.43 | 0.2516 | 2.86 | **WIN** |
| 147 | BA | 10-20 13:35 | 10-20 13:55 | 216.32 | 215.45 | 64 | 13844.48 | -55.68 | -0.4% | 0.56R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | 66.64 | ↓216.26 | 0.2559 | 3.33 | **LOSS** |
| 148 | INTC | 10-20 13:45 | 10-20 14:10 | 38.25 | 37.81 | 369 | 14114.25 | -162.36 | -1.15% | 1.34R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 78.64 | ↓38.04 | 0.2202 | 4.6 | **LOSS** |
| 149 | SHOP | 10-24 13:35 | 10-24 14:50 | 171.9 | 171.84 | 81 | 13923.9 | -4.86 | -0.03% | 0.03R | 75m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 79.76 | ↓170.75 | 0.8118 | 2.67 | **LOSS** |
| 150 | SHOP | 10-27 13:30 | 10-27 13:50 | 175.48 | 174.58 | 79 | 13862.92 | -71.1 | -0.51% | 0.58R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 69.99 | ↓175.63 | -0.1329 | 2.55 | **LOSS** |
| 151 | INTC | 10-27 13:35 | 10-27 15:10 | 39.87 | 39.87 | 326 | 12997.62 | +0 | +0% | 0R | 95m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 89.24 | ↓39.46 | 0.2454 | 4.34 | **WIN** |
| 152 | TSLA | 10-27 13:35 | 10-27 15:20 | 445.57 | 454.39 | 31 | 13812.67 | +273.42 | +1.98% | 1.64R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 82.63 | ↑442.73 | 1.3176 | 2.23 | **WIN** |
| 153 | GOOGL | 10-27 13:45 | 10-27 14:05 | 266.24 | 264.92 | 52 | 13844.48 | -68.64 | -0.5% | 0.6R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 88.44 | ↓265.3 | 0.9039 | 1.3 | **LOSS** |
| 154 | MRVL | 10-28 13:30 | 10-28 13:50 | 89.67 | 88.62 | 156 | 13988.52 | -163.8 | -1.17% | 1.58R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 83.81 | ↓89.49 | 0.1548 | 2.61 | **LOSS** |
| 155 | NVDA | 10-28 13:30 | 10-28 13:50 | 195.36 | 193.04 | 71 | 13870.56 | -164.72 | -1.19% | 1.59R | 20m | market | stop-loss | breakout | breakout | falseBreakoutProne | 92.09 | ↓194.42 | 0.78 | 3.84 | **LOSS** |
| 156 | TSLA | 10-31 13:30 | 10-31 15:15 | 448.46 | 456.65 | 28 | 12556.88 | +229.32 | +1.83% | 1.91R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 66.79 | ↑448.16 | -0.2875 | 3.3 | **WIN** |
| 157 | INTC | 03-10 13:35 | 03-10 14:00 | 46.68 | 46.3 | 302 | 14097.36 | -114.76 | -0.81% | 0.45R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.33 | ↓46.45 | 0.4781 | 1.71 | **LOSS** |
| 158 | TSLA | 03-11 14:00 | 03-11 14:20 | 414.82 | 411.95 | 33 | 13689.06 | -94.71 | -0.69% | 0.56R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 93.49 | ↑410.35 | 2.9838 | 4.11 | **LOSS** |
| 159 | GOOGL | 03-11 14:25 | 03-11 15:05 | 310.96 | 310.03 | 45 | 13993.2 | -41.85 | -0.3% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |
| 160 | MRVL | 03-13 13:30 | 03-13 14:45 | 88.94 | 88.85 | 147 | 13074.18 | -13.23 | -0.1% | 0.09R | 75m | market | trailing-stop | breakout | breakout | noisyHighBeta | 69.27 | ↓88.75 | -0.1655 | 1.17 | **LOSS** |
| 161 | NVDA | 03-13 13:30 | 03-13 14:00 | 185.35 | 184.03 | 75 | 13901.25 | -99 | -0.71% | 1R | 30m | market | early-reversal | breakout | breakout | falseBreakoutProne | 70.44 | ↓185.35 | 0.1277 | 3.05 | **LOSS** |
| 162 | BA | 03-16 13:40 | 03-16 15:25 | 213.09 | 214.11 | 65 | 13850.85 | +66.3 | +0.48% | 0.53R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.4 | ↓212.61 | 0.6865 | 1.66 | **WIN** |
| 163 | GS | 03-17 13:35 | 03-17 13:55 | 818.04 | 815.02 | 15 | 12270.6 | -45.3 | -0.37% | 0.46R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 86.4 | ↑812.43 | 2.9774 | 1.98 | **LOSS** |
| 164 | BA | 03-17 13:40 | 03-17 13:55 | 216.8 | 214.24 | 64 | 13875.2 | -163.84 | -1.18% | 1.69R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 73.27 | ↓216.18 | 0.537 | 1.24 | **LOSS** |
| 165 | SHOP | 03-17 13:45 | 03-17 14:10 | 132.19 | 131.15 | 98 | 12954.62 | -101.92 | -0.79% | 0.56R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 83.47 | ↓131.01 | 1.1137 | 1.75 | **LOSS** |
| 166 | INTC | 03-20 13:40 | 03-20 13:55 | 46.98 | 45.72 | 300 | 14094 | -378 | -2.68% | 1.72R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 62.17 | ↓46.86 | 0.2505 | 1.2 | **LOSS** |
| 167 | TSLA | 03-23 13:35 | 03-23 15:20 | 380.33 | 383.91 | 36 | 13691.88 | +128.88 | +0.94% | 0.98R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.86 | ↑376.89 | 1.6737 | 3.27 | **WIN** |
| 168 | SHOP | 03-23 13:45 | 03-23 14:35 | 121.33 | 120.87 | 107 | 12982.31 | -49.22 | -0.38% | 0.22R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 84.45 | ↓120.76 | 0.6346 | 1.48 | **LOSS** |
| 169 | NVDA | 03-23 14:20 | 03-23 14:40 | 178.09 | 177.37 | 78 | 13891.02 | -56.16 | -0.4% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 57.25 | ↑177.24 | 1.1472 | 1.96 | **LOSS** |
| 170 | MRVL | 03-24 14:15 | 03-24 15:45 | 91.39 | 92.7 | 76 | 13982.67 | +99.56 | +1.43% | 0.87R | 90m | market | trim-profit-target | trend | trend | neutral | 65.03 | ↑90.6 | 0.1789 | 1.13 | **WIN** |
| 171 | MRVL | 03-24 14:15 | 03-24 16:00 | 91.39 | 92.24 | 77 | 13982.67 | +65.45 | +0.93% | 0.56R | 105m | market | timeout | trend | trend | neutral | 65.03 | ↑90.6 | 0.1789 | 1.13 | **WIN** |
| 172 | TSLA | 03-25 13:30 | 03-25 14:55 | 393.28 | 393.09 | 35 | 13764.8 | -6.65 | -0.05% | 0.06R | 85m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 78.7 | ↓392.3 | 1.7852 | 4.78 | **LOSS** |
| 173 | SHOP | 03-25 13:35 | 03-25 14:00 | 120.35 | 119.19 | 107 | 12877.45 | -124.12 | -0.96% | 0.57R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 79.42 | ↓120.1 | 0.6263 | 1.33 | **LOSS** |
| 174 | BA | 03-25 13:45 | 03-25 14:35 | 199.12 | 198.79 | 70 | 13938.4 | -23.1 | -0.17% | 0.24R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 72.04 | ↓198.84 | 0.6479 | 1.95 | **LOSS** |
| 175 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.43 | 362.32 | 38 | 13848.34 | -80.18 | -0.58% | 0.67R | 35m | market | early-reversal | breakout | breakout | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 176 | GOOGL | 03-31 13:45 | 03-31 15:30 | 278.93 | 281.44 | 50 | 13946.5 | +125.5 | +0.9% | 0.97R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 79.74 | ↑278.33 | 0.967 | 1.55 | **WIN** |
| 177 | GS | 03-31 13:45 | 03-31 14:35 | 821.73 | 819.24 | 17 | 13969.41 | -42.33 | -0.3% | 0.33R | 50m | market | stagnation | breakout | breakout | falseBreakoutProne | 87.63 | ↓816.94 | 1.4478 | 1.73 | **LOSS** |
| 178 | TSLA | 03-31 14:20 | 03-31 14:40 | 365.75 | 364.17 | 38 | 13898.5 | -60.04 | -0.43% | 0.36R | 20m | market | early-reversal | trend | trend | neutral | 67.6 | ↓364.02 | 2.8915 | 1.08 | **LOSS** |
| 179 | INTC | 04-01 13:35 | 04-01 14:35 | 46.89 | 48.01 | 276 | 12941.64 | +309.12 | +2.39% | 1.2R | 60m | market | profit-target | breakout | breakout | falseBreakoutProne | 77.74 | ↑46.49 | 0.5677 | 4.08 | **WIN** |
| 180 | MRVL | 04-08 13:35 | 04-08 14:45 | 111.94 | 112.66 | 125 | 13992.5 | +90 | +0.64% | 0.35R | 70m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 86.99 | ↓111.73 | 0.3925 | 4.87 | **WIN** |
| 181 | NVDA | 04-10 13:40 | 04-10 15:25 | 185.9 | 189.45 | 75 | 13942.5 | +266.25 | +1.91% | 2.73R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 75.43 | ↑185.58 | 0.4573 | 1.7 | **WIN** |
| 182 | MRVL | 04-10 13:45 | 04-10 15:30 | 126.17 | 127.46 | 111 | 14004.87 | +143.19 | +1.02% | 0.51R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 76.87 | ↑126.09 | 1.7603 | 1.69 | **WIN** |
| 183 | INTC | 04-13 13:30 | 04-13 13:55 | 64.21 | 63.74 | 202 | 12970.42 | -94.94 | -0.73% | 0.5R | 25m | market | early-reversal | breakout | breakout | falseBreakoutProne | 68.43 | ↓63.67 | 0.0728 | 1.29 | **LOSS** |
| 184 | SHOP | 04-13 13:45 | 04-13 15:30 | 113.39 | 114.23 | 123 | 13946.97 | +103.32 | +0.74% | 0.54R | 105m | market | timeout | breakout | breakout | falseBreakoutProne | 89.5 | ↑111.95 | 0.8024 | 1.39 | **WIN** |
| 185 | TSLA | 04-13 13:50 | 04-13 14:10 | 354.54 | 352.26 | 39 | 13827.06 | -88.92 | -0.64% | 0.69R | 20m | market | early-reversal | breakout | breakout | extendedBreakout | 84.4 | ↓350.85 | 1.4118 | 2.18 | **LOSS** |
| 186 | MRVL | 04-15 13:55 | 04-15 15:15 | 135.96 | 136.02 | 103 | 14003.88 | +6.18 | +0.04% | 0.02R | 80m | market | breakeven-stop | breakout | breakout | falseBreakoutProne | 57.11 | ↑134.35 | 0.2593 | 1.24 | **WIN** |
| 187 | BA | 04-17 14:00 | 04-17 14:45 | 229.4 | 228.54 | 61 | 13993.4 | -52.46 | -0.37% | 0.25R | 45m | market | early-reversal | breakout | breakout | extendedBreakout | 84.93 | ↑226.9 | 2.7682 | 1.47 | **LOSS** |
| 188 | MRVL | 04-17 14:05 | 04-17 15:50 | 136.24 | 138.74 | 103 | 14032.72 | +257.5 | +1.83% | 1.03R | 105m | market | timeout | trend | trend | neutral | 64.97 | ↑134.55 | 0.362 | 1.89 | **WIN** |
| 189 | MRVL | 04-21 13:30 | 04-21 14:35 | 150.91 | 152.22 | 86 | 12978.26 | +112.66 | +0.87% | 0.78R | 65m | market | trailing-stop | breakout | breakout | falseBreakoutProne | 67.11 | ↓150.06 | 0.4257 | 1.87 | **WIN** |
| 190 | MRVL | 04-22 13:35 | 04-22 13:55 | 153.87 | 151.87 | 91 | 14002.17 | -182 | -1.3% | 0.98R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 60.53 | ↓153.6 | 0.4329 | 1.7 | **LOSS** |
| 191 | MRVL | 04-22 14:10 | 04-22 15:55 | 154.64 | 154.79 | 90 | 13917.6 | +13.5 | +0.1% | 0.05R | 105m | market | timeout | breakout | trend | neutral | 64.52 | ↑153.34 | 0.5511 | 1.08 | **WIN** |
| 192 | MRVL | 04-23 13:50 | 04-23 14:10 | 163.77 | 161.48 | 85 | 13920.45 | -194.65 | -1.4% | 0.78R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 77.19 | ↓162.88 | 1.4196 | 1.13 | **LOSS** |
| 193 | GS | 04-23 14:20 | 04-23 15:35 | 941.87 | 941.09 | 14 | 13186.18 | -10.92 | -0.08% | 0.11R | 75m | market | stagnation | trend | trend | neutral | 72.79 | ↑938.59 | 1.646 | 1.07 | **LOSS** |
| 194 | INTC | 04-24 13:30 | 04-24 13:45 | 84.82 | 81.94 | 152 | 12892.64 | -437.76 | -3.4% | 1.89R | 15m | market | stop-loss | breakout | breakout | falseBreakoutProne | 51.35 | ↓84 | 3.0839 | 19.5 | **LOSS** |
| 195 | TSLA | 04-24 13:35 | 04-24 13:55 | 380.4 | 375 | 36 | 13694.4 | -194.4 | -1.42% | 1.37R | 20m | market | early-reversal | breakout | breakout | falseBreakoutProne | 80.56 | ↓376.96 | 1.0198 | 3.13 | **LOSS** |
| 196 | NVDA | 04-24 13:45 | 04-24 15:00 | 202.77 | 208.46 | 69 | 13991.13 | +392.61 | +2.81% | 2.38R | 75m | market | profit-target | breakout | breakout | falseBreakoutProne | 67.79 | ↑202.26 | 0.8648 | 1.35 | **WIN** |

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

- ⚠️ **Profit factor 1.09 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.87R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.03 bps | 2026-04-26T06:59:26.973Z*
