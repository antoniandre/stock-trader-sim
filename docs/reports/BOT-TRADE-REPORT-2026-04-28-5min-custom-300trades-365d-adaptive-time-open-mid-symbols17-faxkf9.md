# Bot Trade Report — 107 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T21:33:01.395Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 17 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1599.46 (-1.6%) over 107 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 107 |
| Win rate | 25.23% (27W / 80L) |
| Net P&L | $-1599.46 (-1.6%) |
| Gross profit | $3729.37 |
| Gross loss | $5328.83 |
| Profit factor | 0.7 |
| Avg win | $138.12 |
| Avg loss | $66.61 |
| Payoff ratio | 2.07:1 |
| Expectancy | $-14.95 / trade |
| Max drawdown | 2.3% |
| Sharpe ratio (ann.) | -2.22 |
| Trades / active day | 1.47 |
| Avg confidence | 96.32% |
| Avg trade duration | 50 min |
| Avg planned R:R | 2.7:1 |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $98,400.54 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-1599.46 | MISS |
| Win rate | 45-60% | 25.23% | MISS |
| Profit factor | >= 1.3 | 0.7 | MISS |
| Sharpe (ann.) | > 1.5 | -2.22 | MISS |
| R:R | 2:1 - 3:1 | 2.7:1 planned | PASS |
| Max drawdown | < 10% | 2.3% | PASS |
| Expectancy | positive | $-14.95 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 33 | 24.24% | $+3.57 | $0.11 |
| Mid  10:30–11:30 | 74 | 25.68% | $-1603.03 | $-21.66 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SHOP | 4 | 3 | 75% | $+590.54 | $+147.64 | 10.84 | watch |
| MU | 6 | 2 | 33.33% | $+298.29 | $+49.72 | 2.55 | throttle |
| TSLA | 7 | 2 | 28.57% | $+288.75 | $+41.25 | 1.91 | throttle |
| BA | 7 | 4 | 57.14% | $+178.24 | $+25.46 | 2.29 | eligible |
| DELL | 6 | 2 | 33.33% | $+60.27 | $+10.05 | 1.52 | throttle |
| META | 4 | 1 | 25% | $+57.7 | $+14.43 | 1.88 | watch |
| GOOGL | 4 | 1 | 25% | $+37.39 | $+9.35 | 1.16 | watch |
| NVDA | 10 | 5 | 50% | $-73.05 | $-7.31 | 0.87 | throttle |
| CRWD | 5 | 1 | 20% | $-112.43 | $-22.49 | 0.57 | throttle |
| SMCI | 2 | 0 | 0% | $-218.74 | $-109.37 | 0 | watch |
| AMZN | 8 | 2 | 25% | $-226.05 | $-28.26 | 0.33 | throttle |
| ARM | 5 | 1 | 20% | $-232.88 | $-46.58 | 0.09 | throttle |
| MSFT | 10 | 2 | 20% | $-242.31 | $-24.23 | 0.05 | throttle |
| AAPL | 9 | 0 | 0% | $-247.36 | $-27.48 | 0 | throttle |
| AMD | 7 | 1 | 14.29% | $-330.66 | $-47.24 | 0.49 | throttle |
| COIN | 4 | 0 | 0% | $-403.6 | $-100.9 | 0 | watch |
| PLTR | 9 | 0 | 0% | $-1023.56 | $-113.73 | 0 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 89 | 25 | 28.09% | $-1250.97 | $-14.06 |
| momentum-pilot | 16 | 2 | 12.5% | $-110.4 | $-6.9 |
| trend | 2 | 0 | 0% | $-238.09 | $-119.04 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| thinChop | 15 | 2 | 13.33% | $-104.32 | $-6.95 |
| neutral | 92 | 25 | 27.17% | $-1495.14 | $-16.25 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| thin-chop | 15 | 2 | 13.33% | $-104.32 | $-6.95 |
| neutral | 92 | 25 | 27.17% | $-1495.14 | $-16.25 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 27 | 0.78 | $-6.99 | 6 | 1.82 | $+32.06 | 0.24% | 1.49 | reject |
| Symbol | NVDA | 6 | 0.48 | $-31.87 | 4 | 1.63 | $+29.55 | 0.1% | 1.29 | reject |
| Setup | breakout | 50 | 0.61 | $-22.27 | 39 | 0.93 | $-3.53 | 0.87% | 0.75 | reject |
| Behavior | neutral | 52 | 0.58 | $-24.37 | 40 | 0.89 | $-5.69 | 0.96% | 0.72 | reject |
| Behavior | thinChop | 12 | 0.15 | $-6.39 | 3 | 0 | $-9.2 | 0.03% | 0 | reject |
| Setup | momentum-pilot | 13 | 0.14 | $-6.37 | 3 | 0 | $-9.2 | 0.03% | 0 | reject |
| Time slot | Mid 10:30-11:30 | 37 | 0.49 | $-31.23 | 37 | 0.77 | $-12.1 | 0.77% | 0.61 | reject |
| Symbol | AAPL | 5 | 0 | $-35.2 | 4 | 0 | $-17.84 | 0.07% | 0 | reject |
| Symbol | AMZN | 6 | 0.47 | $-21.59 | 2 | 0 | $-48.24 | 0.1% | 0 | reject |
| Symbol | AMD | 5 | 0.68 | $-29.01 | 2 | 0 | $-92.8 | 0.19% | 0 | reject |
| Symbol | MSFT | 8 | 0.25 | $-5.09 | 2 | 0 | $-100.78 | 0.2% | 0 | reject |
| Symbol | PLTR | 6 | 0 | $-78.32 | 3 | 0 | $-184.55 | 0.55% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1835.08 | 0.67 |
| +3 bps/side | $-2306.29 | 0.61 |
| +5 bps/side | $-2777.55 | 0.55 |
| +10 bps/side | $-3955.51 | 0.44 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 52 |
| timeout | 19 |
| breakeven-stop | 11 |
| stagnation | 11 |
| stop-loss | 7 |
| profit-target | 5 |
| trailing-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMZN | 05-07 14:15 | 05-07 14:50 | 190.1 | 188.98 | 73 | 13877.3 | -81.76 | -0.59% | 0.56R | 35m | market | early-reversal | trend | breakout | neutral | neutral | 80.59 | ↑187.96 | 0.9161 | 1.69 | **LOSS** |
| 2 | MU | 05-13 13:35 | 05-13 15:20 | 94.54 | 95.73 | 118 | 11155.72 | +140.42 | +1.26% | 1.43R | 105m | market | timeout | trend | breakout | neutral | neutral | 73.86 | ↑93.88 | 0.031 | 1.46 | **WIN** |
| 3 | COIN | 05-21 15:05 | 05-21 15:35 | 266.46 | 264.96 | 52 | 13855.92 | -78 | -0.56% | 0.47R | 30m | market | early-reversal | breakout | breakout | neutral | neutral | 61.31 | ↑262.51 | 0.9156 | 2.2 | **LOSS** |
| 4 | MSFT | 05-22 13:35 | 05-22 14:50 | 456.97 | 456.58 | 6 | 2741.82 | -2.34 | -0.09% | 0.13R | 75m | market | breakeven-stop | trend | momentum-pilot | thinChop | thin-chop | 65.79 | ↓456.19 | 0.1982 | 2.57 | **LOSS** |
| 5 | MSFT | 05-28 13:35 | 05-28 13:55 | 462.33 | 460.36 | 5 | 2311.65 | -9.85 | -0.43% | 0.61R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 80.58 | ↓461.49 | 0.4603 | 1.48 | **LOSS** |
| 6 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 7 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 19 | 12840.77 | +123.31 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 8 | AMZN | 06-06 13:35 | 06-06 14:25 | 212.19 | 210.93 | 65 | 13792.35 | -81.9 | -0.59% | 0.51R | 50m | market | early-reversal | breakout | breakout | neutral | neutral | 63.62 | ↓211.45 | -0.0705 | 2.2 | **LOSS** |
| 9 | ARM | 06-06 15:05 | 06-06 15:25 | 134.99 | 134.25 | 67 | 9044.33 | -49.58 | -0.55% | 0.73R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 10 | MSFT | 06-12 13:40 | 06-12 15:25 | 475.77 | 476.75 | 5 | 2378.85 | +4.9 | +0.21% | 0.3R | 105m | market | timeout | trend | momentum-pilot | thinChop | thin-chop | 81.21 | ↑474.89 | 0.2627 | 2.92 | **WIN** |
| 11 | MSFT | 06-16 13:35 | 06-16 15:20 | 478.26 | 480.02 | 5 | 2391.3 | +8.8 | +0.37% | 0.53R | 105m | market | timeout | trend | momentum-pilot | thinChop | thin-chop | 81.01 | ↑477.27 | 0.2409 | 2.17 | **WIN** |
| 12 | MSFT | 06-20 13:30 | 06-20 13:50 | 483.47 | 481.24 | 5 | 2417.35 | -11.15 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 73.5 | ↓482.49 | 0.5803 | 3.4 | **LOSS** |
| 13 | AMZN | 06-30 13:35 | 06-30 13:55 | 223.54 | 222.27 | 62 | 13859.48 | -78.74 | -0.57% | 0.5R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.68 | ↓222.76 | 1.0565 | 1.55 | **LOSS** |
| 14 | DELL | 07-02 14:45 | 07-02 15:35 | 123.64 | 123.49 | 113 | 13971.32 | -16.95 | -0.12% | 0.15R | 50m | market | stagnation | trend | breakout | neutral | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 15 | MU | 07-02 14:45 | 07-02 15:40 | 122.16 | 122.08 | 59 | 7207.44 | -4.72 | -0.07% | 0.06R | 55m | market | stagnation | breakout | breakout | neutral | neutral | 84.91 | ↑120.47 | 0.1605 | 1.37 | **LOSS** |
| 16 | AMZN | 07-09 13:30 | 07-09 14:50 | 221.59 | 221.49 | 10 | 2215.9 | -1 | -0.05% | 0.07R | 80m | market | breakeven-stop | trend | momentum-pilot | thinChop | thin-chop | 74.82 | ↓221.25 | -0.1256 | 1.61 | **LOSS** |
| 17 | PLTR | 07-17 13:55 | 07-17 14:50 | 152.4 | 152.21 | 32 | 4876.8 | -6.08 | -0.12% | 0.13R | 55m | market | stagnation | trend | momentum-pilot | neutral | neutral | 64.93 | ↑151.61 | 0.4131 | 1.9 | **LOSS** |
| 18 | CRWD | 07-21 14:00 | 07-21 14:20 | 488.15 | 482.8 | 28 | 13668.2 | -149.8 | -1.1% | 1.08R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.39 | ↓482.72 | 2.7767 | 1.57 | **LOSS** |
| 19 | AAPL | 07-22 13:35 | 07-22 14:10 | 213.67 | 212.93 | 12 | 2564.04 | -8.88 | -0.35% | 0.5R | 35m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 58.51 | ↓212.86 | -0.1472 | 1.76 | **LOSS** |
| 20 | AAPL | 07-24 13:30 | 07-24 13:50 | 215.38 | 213.55 | 12 | 2584.56 | -21.96 | -0.85% | 1.21R | 20m | market | stop-loss | trend | momentum-pilot | thinChop | thin-chop | 65.08 | ↓214.89 | 0.0355 | 4.49 | **LOSS** |
| 21 | SMCI | 07-25 14:35 | 07-25 15:15 | 53.29 | 53.02 | 262 | 13961.98 | -70.74 | -0.51% | 0.36R | 40m | market | early-reversal | breakout | breakout | neutral | neutral | 63.26 | ↑52.48 | -0.0124 | 1.32 | **LOSS** |
| 22 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.45 | 158.32 | 88 | 13943.6 | -11.44 | -0.08% | 0.09R | 80m | market | stagnation | trend | breakout | neutral | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 23 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.96 | 444.21 | 31 | 13824.76 | -54.25 | -0.39% | 0.56R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 24 | TSLA | 08-22 13:50 | 08-22 14:15 | 326.68 | 334.98 | 36 | 11760.48 | +298.8 | +2.54% | 3.39R | 25m | market | profit-target | trend | breakout | neutral | neutral | 76.06 | ↑324.13 | 0.982 | 1.83 | **WIN** |
| 25 | MSFT | 08-22 14:05 | 08-22 15:20 | 508.88 | 508.58 | 5 | 2544.4 | -1.5 | -0.06% | 0.09R | 75m | market | stagnation | trend | momentum-pilot | thinChop | thin-chop | 60.87 | ↑505.63 | 0.1489 | 2.05 | **LOSS** |
| 26 | AMZN | 08-22 14:10 | 08-22 15:55 | 225.23 | 226.68 | 62 | 13964.26 | +89.9 | +0.64% | 0.72R | 105m | market | timeout | trend | breakout | neutral | neutral | 75.23 | ↑222.99 | 0.5119 | 1.94 | **WIN** |
| 27 | MSFT | 08-28 13:30 | 08-28 13:50 | 509.7 | 505.63 | 5 | 2548.5 | -20.35 | -0.8% | 1.14R | 20m | market | stop-loss | trend | momentum-pilot | thinChop | thin-chop | 77.81 | ↓508.72 | 0.3979 | 1.91 | **LOSS** |
| 28 | MSFT | 09-26 13:30 | 09-26 14:05 | 511.55 | 509.7 | 5 | 2557.75 | -9.25 | -0.36% | 0.51R | 35m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 76.85 | ↓510.27 | 0.1789 | 2.33 | **LOSS** |
| 29 | SMCI | 09-29 14:40 | 09-29 15:10 | 47.23 | 46.73 | 296 | 13980.08 | -148 | -1.06% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | neutral | 68.64 | ↑46.6 | 0.3472 | 1.85 | **LOSS** |
| 30 | META | 10-02 13:40 | 10-02 14:00 | 726.19 | 723.16 | 19 | 13797.61 | -57.57 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 31 | AAPL | 10-10 13:30 | 10-10 14:25 | 255.42 | 254.96 | 9 | 2298.78 | -4.14 | -0.18% | 0.26R | 55m | market | stagnation | trend | momentum-pilot | thinChop | thin-chop | 76.18 | ↓255.11 | 0.2282 | 1.91 | **LOSS** |
| 32 | PLTR | 10-15 13:30 | 10-15 13:50 | 183.64 | 182.43 | 76 | 13956.64 | -91.96 | -0.66% | 0.53R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 62.95 | ↓183.05 | -0.1029 | 1.7 | **LOSS** |
| 33 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 19 | 13660.43 | -7.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 34 | PLTR | 11-03 14:35 | 11-03 14:55 | 205.39 | 203.89 | 68 | 13966.52 | -102 | -0.73% | 0.68R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.28 | ↓204.88 | 0.9683 | 1.61 | **LOSS** |
| 35 | NVDA | 11-05 14:50 | 11-05 16:35 | 200.3 | 201.42 | 69 | 13820.7 | +77.28 | +0.56% | 0.51R | 105m | market | timeout | breakout | breakout | neutral | neutral | 60.4 | ↑198.89 | -0.1305 | 1.48 | **WIN** |
| 36 | GOOGL | 11-05 14:55 | 11-05 15:45 | 283.6 | 283.24 | 49 | 13896.4 | -17.64 | -0.13% | 0.13R | 50m | market | stagnation | trend | breakout | neutral | neutral | 77.18 | ↑280.12 | 0.9762 | 1.51 | **LOSS** |
| 37 | MU | 11-06 14:35 | 11-06 14:55 | 243.7 | 241.36 | 42 | 10235.4 | -98.28 | -0.96% | 0.86R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 72.14 | ↓240.89 | 0.8639 | 2.13 | **LOSS** |
| 38 | PLTR | 11-06 14:45 | 11-06 14:50 | 190.4 | 186.99 | 73 | 13899.2 | -248.93 | -1.79% | 1.38R | 5m | market | stop-loss | breakout | breakout | neutral | neutral | 62.28 | ↓188.86 | 0.2888 | 1.49 | **LOSS** |
| 39 | META | 11-10 14:35 | 11-10 15:50 | 628.71 | 628.69 | 22 | 13831.62 | -0.44 | 0% | 0R | 75m | market | breakeven-stop | trend | breakout | neutral | neutral | 66.34 | ↓627.13 | 3.2793 | 2.32 | **LOSS** |
| 40 | NVDA | 11-19 14:35 | 11-19 16:20 | 184.99 | 185.22 | 75 | 13874.25 | +17.25 | +0.12% | 0.1R | 105m | market | timeout | breakout | breakout | neutral | neutral | 60.43 | ↓184.25 | -0.0575 | 1.37 | **WIN** |
| 41 | SHOP | 11-19 14:40 | 11-19 16:25 | 143.35 | 144.81 | 97 | 13904.95 | +141.62 | +1.02% | 0.95R | 105m | market | timeout | breakout | breakout | neutral | neutral | 71.69 | ↓142.54 | 0.3031 | 1.31 | **WIN** |
| 42 | AAPL | 11-20 14:40 | 11-20 15:05 | 275 | 273.75 | 50 | 13750 | -62.5 | -0.45% | 0.56R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 75.91 | ↓273.09 | 0.6442 | 1.67 | **LOSS** |
| 43 | AMZN | 11-24 14:30 | 11-24 16:15 | 225.21 | 225.63 | 57 | 12836.97 | +23.94 | +0.19% | 0.22R | 105m | market | timeout | trend | breakout | neutral | neutral | 74.47 | ↑224.19 | 0.5714 | 1.95 | **WIN** |
| 44 | AAPL | 11-24 14:30 | 11-24 14:50 | 274.98 | 273.41 | 50 | 13749 | -78.5 | -0.57% | 0.73R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 67.43 | ↓273.82 | 0.0722 | 1.64 | **LOSS** |
| 45 | AMD | 12-01 14:45 | 12-01 15:05 | 219.51 | 217.64 | 59 | 12951.09 | -110.33 | -0.85% | 0.74R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 68.38 | ↑216.03 | 0.2333 | 2.2 | **LOSS** |
| 46 | AMD | 12-02 14:30 | 12-02 15:20 | 223.59 | 222.77 | 43 | 9614.37 | -35.26 | -0.37% | 0.37R | 50m | market | stagnation | trend | breakout | neutral | neutral | 84.28 | ↓222.34 | 0.4825 | 5.36 | **LOSS** |
| 47 | SHOP | 12-02 14:30 | 12-02 16:00 | 154.41 | 158.14 | 90 | 13896.9 | +335.7 | +2.42% | 2.1R | 90m | market | profit-target | trend | breakout | neutral | neutral | 64.41 | ↑153.64 | -0.2692 | 2.43 | **WIN** |
| 48 | MU | 12-02 14:35 | 12-02 15:00 | 243.91 | 242.15 | 45 | 10975.95 | -79.2 | -0.72% | 0.65R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 66.95 | ↑240.89 | 0.1426 | 1.7 | **LOSS** |
| 49 | NVDA | 12-04 14:35 | 12-04 14:55 | 182.94 | 180.67 | 70 | 12805.8 | -158.9 | -1.24% | 1.55R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 78.49 | ↓181.18 | 0.0172 | 2.29 | **LOSS** |
| 50 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 26 | 11792.3 | -86.84 | -0.74% | 0.88R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 51 | CRWD | 12-05 15:05 | 12-05 16:15 | 522.46 | 522.31 | 26 | 13583.96 | -3.9 | -0.03% | 0.03R | 70m | market | breakeven-stop | breakout | breakout | neutral | neutral | 65.66 | ↓518.2 | 1.0709 | 2.27 | **LOSS** |
| 52 | AMD | 12-08 14:30 | 12-08 15:20 | 221.16 | 219.89 | 63 | 13933.08 | -80.01 | -0.57% | 0.81R | 50m | market | early-reversal | trend | breakout | neutral | neutral | 75.13 | ↓220.53 | 0.0786 | 2.52 | **LOSS** |
| 53 | COIN | 12-08 14:30 | 12-08 14:55 | 275.35 | 272.41 | 50 | 13767.5 | -147 | -1.07% | 1.01R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 68.42 | ↓274.32 | 0.8829 | 2.42 | **LOSS** |
| 54 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 75 | 13837.5 | -63 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 55 | BA | 12-08 14:45 | 12-08 15:05 | 205.78 | 204.77 | 51 | 10494.78 | -51.51 | -0.49% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.5 | ↑204.46 | 0.6304 | 1.32 | **LOSS** |
| 56 | COIN | 12-12 14:30 | 12-12 15:05 | 274.83 | 272.83 | 50 | 13741.5 | -100 | -0.73% | 0.7R | 35m | market | early-reversal | trend | breakout | neutral | neutral | 73.03 | ↓273.68 | 1.3234 | 1.92 | **LOSS** |
| 57 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 51 | 10368.81 | -45.39 | -0.44% | 0.62R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 58 | AMD | 12-15 14:45 | 12-15 15:05 | 215.26 | 211.61 | 64 | 13776.64 | -233.6 | -1.7% | 1.47R | 20m | market | stop-loss | trend | breakout | neutral | neutral | 74.74 | ↓213.33 | 0.1714 | 1.36 | **LOSS** |
| 59 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 50 | 10431.5 | -41 | -0.39% | 0.56R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 60 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 61 | 12583.08 | +314.15 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 61 | BA | 12-19 14:30 | 12-19 16:15 | 211.9 | 214.87 | 45 | 9535.5 | +133.65 | +1.4% | 2R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.47 | ↑211.22 | 0.1487 | 1.43 | **WIN** |
| 62 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 78 | 13908.96 | +79.56 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 63 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 73 | 13851.02 | -9.49 | -0.07% | 0.06R | 65m | market | stagnation | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 64 | DELL | 12-19 14:40 | 12-19 15:20 | 126.41 | 125.61 | 71 | 8975.11 | -56.8 | -0.63% | 0.64R | 40m | market | early-reversal | trend | breakout | neutral | neutral | 82.28 | ↓125.56 | 0.2439 | 1.35 | **LOSS** |
| 65 | GOOGL | 12-23 14:40 | 12-23 15:00 | 313.05 | 311.69 | 44 | 13774.2 | -59.84 | -0.43% | 0.61R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 75 | ↓311.44 | 0.6531 | 2.15 | **LOSS** |
| 66 | AMZN | 01-02 14:30 | 01-02 14:55 | 233.37 | 232.73 | 10 | 2333.7 | -6.4 | -0.27% | 0.39R | 25m | market | breakeven-stop | trend | momentum-pilot | thinChop | thin-chop | 77.19 | ↓232.62 | -0.0675 | 5.3 | **LOSS** |
| 67 | NVDA | 01-02 14:30 | 01-02 15:20 | 191.23 | 189.89 | 73 | 13959.79 | -97.82 | -0.7% | 0.91R | 50m | market | early-reversal | trend | breakout | neutral | neutral | 75.06 | ↓190.64 | 0.018 | 4.19 | **LOSS** |
| 68 | AAPL | 01-02 14:35 | 01-02 15:20 | 274.17 | 273.61 | 10 | 2741.7 | -5.6 | -0.2% | 0.29R | 45m | market | breakeven-stop | trend | momentum-pilot | thinChop | thin-chop | 69.54 | ↓273.25 | 0.0408 | 1.72 | **LOSS** |
| 69 | COIN | 01-02 14:50 | 01-02 15:20 | 229.93 | 228.62 | 60 | 13795.8 | -78.6 | -0.57% | 0.48R | 30m | market | early-reversal | breakout | breakout | neutral | neutral | 73.04 | ↓228.09 | 0.0206 | 1.68 | **LOSS** |
| 70 | PLTR | 01-06 14:30 | 01-06 16:00 | 176.86 | 176.5 | 72 | 12733.92 | -25.92 | -0.2% | 0.29R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 74.08 | ↓176.51 | 0.3008 | 2 | **LOSS** |
| 71 | BA | 01-09 14:30 | 01-09 16:15 | 230.44 | 233.4 | 42 | 9678.48 | +124.32 | +1.28% | 1.83R | 105m | market | timeout | trend | breakout | neutral | neutral | 77.98 | ↑229.82 | 0.0066 | 3.19 | **WIN** |
| 72 | GOOGL | 01-12 15:20 | 01-12 15:40 | 332.11 | 328.19 | 39 | 12952.29 | -152.88 | -1.18% | 0.92R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 57.32 | ↓327.9 | -0.4724 | 3.4 | **LOSS** |
| 73 | CRWD | 01-15 14:30 | 01-15 14:50 | 467.7 | 465.64 | 27 | 12627.9 | -55.62 | -0.44% | 0.51R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.36 | ↓466.2 | 1.2778 | 1.44 | **LOSS** |
| 74 | PLTR | 01-16 14:30 | 01-16 14:40 | 181.07 | 177.28 | 76 | 13761.32 | -288.04 | -2.09% | 1.85R | 10m | market | stop-loss | trend | breakout | neutral | neutral | 72.1 | ↓180.79 | -0.2065 | 9.2 | **LOSS** |
| 75 | ARM | 01-16 14:30 | 01-16 14:55 | 106.75 | 106.11 | 85 | 9073.75 | -54.4 | -0.6% | 0.83R | 25m | market | early-reversal | breakout | breakout | neutral | neutral | 69.27 | ↓106.58 | -0.1668 | 2.26 | **LOSS** |
| 76 | TSLA | 01-16 14:35 | 01-16 14:55 | 445.75 | 442.98 | 26 | 11589.5 | -72.02 | -0.62% | 0.78R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 75.71 | ↓443.77 | -0.0116 | 3.12 | **LOSS** |
| 77 | ARM | 01-20 14:40 | 01-20 16:20 | 108.19 | 108.47 | 84 | 9087.96 | +23.52 | +0.26% | 0.24R | 100m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↓107.29 | 0.0129 | 5.86 | **WIN** |
| 78 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 27 | 10153.08 | +350.19 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 79 | MSFT | 01-27 14:40 | 01-27 15:25 | 477.79 | 475.86 | 29 | 13855.91 | -55.97 | -0.4% | 0.57R | 45m | market | early-reversal | trend | breakout | neutral | neutral | 67.32 | ↓476.53 | 0.8073 | 2.94 | **LOSS** |
| 80 | AMD | 01-28 14:35 | 01-28 15:00 | 256.05 | 254.66 | 54 | 13826.7 | -75.06 | -0.54% | 0.61R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 73.09 | ↓254.97 | 1.0678 | 1.6 | **LOSS** |
| 81 | SHOP | 02-02 14:30 | 02-02 16:15 | 133.45 | 135.1 | 105 | 14012.25 | +173.25 | +1.24% | 1.06R | 105m | market | timeout | breakout | breakout | neutral | neutral | 57.44 | ↑132.91 | -0.3756 | 2.24 | **WIN** |
| 82 | ARM | 02-02 14:30 | 02-02 14:50 | 106.92 | 105.76 | 85 | 9088.2 | -98.6 | -1.08% | 1.01R | 20m | market | early-reversal | breakout | breakout | neutral | neutral | 59.78 | ↓106.54 | -0.0211 | 2.48 | **LOSS** |
| 83 | DELL | 02-02 14:45 | 02-02 16:30 | 116.32 | 116.8 | 120 | 13958.4 | +57.6 | +0.41% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 75.25 | ↓115.99 | 0.6109 | 1.4 | **WIN** |
| 84 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 35 | 9617.3 | -0.35 | 0% | 0R | 40m | market | breakeven-stop | trend | breakout | neutral | neutral | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 85 | DELL | 02-04 14:30 | 02-04 15:20 | 119.17 | 118.95 | 108 | 12870.36 | -23.76 | -0.18% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | neutral | 70.68 | ↓118.94 | 0.1636 | 3.47 | **LOSS** |
| 86 | TSLA | 02-06 14:45 | 02-06 15:10 | 408.14 | 405.79 | 29 | 11836.06 | -68.15 | -0.58% | 0.47R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 78.75 | ↑403.96 | 2.1141 | 1.76 | **LOSS** |
| 87 | BA | 02-12 14:35 | 02-12 16:05 | 240.03 | 241.32 | 43 | 10321.29 | +55.47 | +0.54% | 0.77R | 90m | market | trailing-stop | trend | breakout | neutral | neutral | 74 | ↓238.97 | 0.5097 | 1.8 | **WIN** |
| 88 | CRWD | 02-13 14:40 | 02-13 16:25 | 419.47 | 424.05 | 33 | 13842.51 | +151.14 | +1.09% | 1.01R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.44 | ↑417.36 | 1.9275 | 1.77 | **WIN** |
| 89 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 90 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 91 | DELL | 02-20 15:00 | 02-20 16:10 | 120.81 | 120.63 | 106 | 12805.86 | -19.08 | -0.15% | 0.12R | 70m | market | breakeven-stop | trend | breakout | neutral | neutral | 78.25 | ↓119.14 | 0.3271 | 1.51 | **LOSS** |
| 92 | MSFT | 02-24 14:40 | 02-24 14:55 | 389.06 | 384.9 | 35 | 13617.1 | -145.6 | -1.07% | 1.53R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 73.12 | ↓385.21 | -0.0585 | 1.57 | **LOSS** |
| 93 | AAPL | 02-24 14:40 | 02-24 15:10 | 274.35 | 272.84 | 33 | 9053.55 | -49.83 | -0.55% | 0.69R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 90.51 | ↓271.81 | 0.9722 | 2.55 | **LOSS** |
| 94 | BA | 02-24 14:40 | 02-24 15:30 | 233.05 | 233.11 | 45 | 10487.25 | +2.7 | +0.03% | 0.04R | 50m | market | breakeven-stop | trend | breakout | neutral | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 95 | TSLA | 02-24 15:25 | 02-24 15:45 | 407.71 | 406.25 | 29 | 11823.59 | -42.34 | -0.36% | 0.34R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 79.51 | ↑402.65 | 2.1488 | 2.05 | **LOSS** |
| 96 | MU | 02-25 14:30 | 02-25 15:40 | 429.92 | 429.48 | 23 | 9888.16 | -10.12 | -0.1% | 0.08R | 70m | market | breakeven-stop | trend | breakout | neutral | neutral | 76.48 | ↓428.42 | 0.345 | 4.62 | **LOSS** |
| 97 | ARM | 02-25 14:45 | 02-25 15:15 | 131.59 | 130.81 | 69 | 9079.71 | -53.82 | -0.59% | 0.55R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 81.34 | ↓130.39 | 0.4275 | 2.42 | **LOSS** |
| 98 | PLTR | 02-26 14:40 | 02-26 15:15 | 136.03 | 133.68 | 102 | 13875.06 | -239.7 | -1.73% | 1.49R | 35m | market | early-reversal | breakout | breakout | neutral | neutral | 63.03 | ↓135.1 | 0.0268 | 3.62 | **LOSS** |
| 99 | AMZN | 03-05 14:35 | 03-05 15:00 | 219.89 | 218.46 | 63 | 13853.07 | -90.09 | -0.65% | 0.86R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 74.61 | ↓218.62 | 0.497 | 2.17 | **LOSS** |
| 100 | AMD | 03-11 13:35 | 03-11 14:20 | 207.73 | 206.08 | 67 | 13917.91 | -110.55 | -0.79% | 0.7R | 45m | market | early-reversal | trend | breakout | neutral | neutral | 74.69 | ↓206.72 | 0.0332 | 2.02 | **LOSS** |
| 101 | NVDA | 03-25 14:45 | 03-25 15:05 | 180.95 | 179.78 | 77 | 13933.15 | -90.09 | -0.65% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | neutral | 66.46 | ↑179.43 | 1.1532 | 1.53 | **LOSS** |
| 102 | SHOP | 03-30 13:35 | 03-30 13:55 | 113.19 | 112.5 | 87 | 9847.53 | -60.03 | -0.61% | 0.63R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 85.2 | ↑112.35 | 0.3072 | 1.59 | **LOSS** |
| 103 | TSLA | 03-31 13:30 | 03-31 14:05 | 364.5 | 362.25 | 22 | 8019 | -49.5 | -0.62% | 0.72R | 35m | market | early-reversal | trend | breakout | neutral | neutral | 89.75 | ↓363.41 | 1.3936 | 1.72 | **LOSS** |
| 104 | AAPL | 04-15 13:30 | 04-15 13:50 | 259.78 | 258.22 | 10 | 2597.8 | -15.6 | -0.6% | 0.86R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 69.42 | ↓259.16 | 0.0575 | 2.81 | **LOSS** |
| 105 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 32 | 11875.84 | +308.8 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 106 | DELL | 04-21 13:35 | 04-21 15:20 | 208.31 | 210.09 | 67 | 13956.77 | +119.26 | +0.85% | 0.82R | 105m | market | timeout | trend | breakout | neutral | neutral | 74.15 | ↑207.49 | 0.8827 | 2.03 | **WIN** |
| 107 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 67 | 13822.1 | +215.07 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ⚠️ **Profit factor 0.7 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T21:33:01.395Z*
