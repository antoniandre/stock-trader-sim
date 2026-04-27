# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T05:51:52.812Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 1Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":0.4,"enableMeanRevert":true,"stopFloorPct":0.5,"rewardTargetPct":1.2,"stagnationMinutes":15,"enableBreakout":false,"atrMultiplier":2.5,"breakevenTriggerR":0.8,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $9427.99 (-9.43%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 43.1% (431W / 569L) |
| Net P&L | $-9427.99 (-9.43%) |
| Gross profit | $15474.89 |
| Gross loss | $24902.88 |
| Profit factor | 0.62 |
| Avg win | $35.9 |
| Avg loss | $43.77 |
| Payoff ratio | 0.82:1 |
| Expectancy | $-9.43 / trade |
| Max drawdown | 9.89% |
| Sharpe ratio (ann.) | -5.55 |
| Trades / active day | 4.88 |
| Avg confidence | 90.96% |
| Avg trade duration | 19 min |
| Avg risk ratio | 0.81R |
| Starting equity | $100,000 |
| Ending equity | $90,572.01 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 275 | 40.73% | $-2266.66 | $-8.24 |
| Mid  10:30–11:30 | 429 | 42.19% | $-5204.61 | $-12.13 |
| Noon 11:30–13:00 | 219 | 47.95% | $-1376.41 | $-6.28 |
| PM   13:00–14:00 | 77 | 42.86% | $-580.31 | $-7.54 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SBUX | 24 | 12 | 50% | $+173.69 | $+7.24 | 1.36 | eligible |
| ADP | 7 | 3 | 42.86% | $-25.8 | $-3.69 | 0.71 | throttle |
| TXN | 20 | 10 | 50% | $-38.65 | $-1.93 | 0.86 | throttle |
| LOW | 9 | 4 | 44.44% | $-40.44 | $-4.49 | 0.53 | throttle |
| MA | 6 | 3 | 50% | $-45.86 | $-7.64 | 0.63 | throttle |
| IBM | 30 | 16 | 53.33% | $-101.25 | $-3.38 | 0.81 | throttle |
| TGT | 29 | 13 | 44.83% | $-341.43 | $-11.77 | 0.6 | throttle |
| INTU | 28 | 12 | 42.86% | $-343.57 | $-12.27 | 0.42 | throttle |
| LRCX | 69 | 30 | 43.48% | $-376.3 | $-5.45 | 0.76 | throttle |
| HPE | 46 | 19 | 41.3% | $-610.63 | $-13.27 | 0.45 | throttle |
| AMAT | 47 | 22 | 46.81% | $-612.86 | $-13.04 | 0.44 | throttle |
| CELH | 97 | 43 | 44.33% | $-671.22 | $-6.92 | 0.71 | throttle |
| NKE | 24 | 8 | 33.33% | $-684.02 | $-28.5 | 0.33 | throttle |
| KLAC | 49 | 18 | 36.73% | $-686.33 | $-14.01 | 0.43 | throttle |
| DELL | 75 | 28 | 37.33% | $-893.51 | $-11.91 | 0.58 | throttle |
| MRVL | 130 | 58 | 44.62% | $-1282.89 | $-9.87 | 0.59 | throttle |
| ELF | 128 | 50 | 39.06% | $-1384.5 | $-10.82 | 0.61 | throttle |
| RIVN | 182 | 82 | 45.05% | $-1462.42 | $-8.04 | 0.69 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| NVDA | Alpaca 429 for NVDA: {"message": "too many requests."}
 |
| GOOGL | Alpaca 429 for GOOGL: {"message": "too many requests."}
 |
| AMZN | Alpaca 429 for AMZN: {"message": "too many requests."}
 |
| META | Alpaca 429 for META: {"message": "too many requests."}
 |
| MSFT | Alpaca 429 for MSFT: {"message": "too many requests."}
 |
| AAPL | Alpaca 429 for AAPL: {"message": "too many requests."}
 |
| AMD | Alpaca 429 for AMD: {"message": "too many requests."}
 |
| TSLA | Alpaca 429 for TSLA: {"message": "too many requests."}
 |
| AVGO | Alpaca 429 for AVGO: {"message": "too many requests."}
 |
| NFLX | Alpaca 429 for NFLX: {"message": "too many requests."}
 |
| CRM | Alpaca 429 for CRM: {"message": "too many requests."}
 |
| ORCL | Alpaca 429 for ORCL: {"message": "too many requests."}
 |
| ADBE | Alpaca 429 for ADBE: {"message": "too many requests."}
 |
| QCOM | Alpaca 429 for QCOM: {"message": "too many requests."}
 |
| INTC | Alpaca 429 for INTC: {"message": "too many requests."}
 |
| MU | Alpaca 429 for MU: {"message": "too many requests."}
 |
| ARM | Alpaca 429 for ARM: {"message": "too many requests."}
 |
| TSM | Alpaca 429 for TSM: {"message": "too many requests."}
 |
| ASML | Alpaca 429 for ASML: {"message": "too many requests."}
 |
| PLTR | Alpaca 429 for PLTR: {"message": "too many requests."}
 |
| COIN | Alpaca 429 for COIN: {"message": "too many requests."}
 |
| SMCI | Alpaca 429 for SMCI: {"message": "too many requests."}
 |
| SHOP | Alpaca 429 for SHOP: {"message": "too many requests."}
 |
| UBER | Alpaca 429 for UBER: {"message": "too many requests."}
 |
| ABNB | Alpaca 429 for ABNB: {"message": "too many requests."}
 |
| PANW | Alpaca 429 for PANW: {"message": "too many requests."}
 |
| CRWD | Alpaca 429 for CRWD: {"message": "too many requests."}
 |
| NOW | Alpaca 429 for NOW: {"message": "too many requests."}
 |
| DDOG | Alpaca 429 for DDOG: {"message": "too many requests."}
 |
| SNOW | Alpaca 429 for SNOW: {"message": "too many requests."}
 |
| NET | Alpaca 429 for NET: {"message": "too many requests."}
 |
| MDB | Alpaca 429 for MDB: {"message": "too many requests."}
 |
| SQ | Alpaca 429 for SQ: {"message": "too many requests."}
 |
| PYPL | Alpaca 429 for PYPL: {"message": "too many requests."}
 |
| JPM | Alpaca 429 for JPM: {"message": "too many requests."}
 |
| BAC | Alpaca 429 for BAC: {"message": "too many requests."}
 |
| GS | Alpaca 429 for GS: {"message": "too many requests."}
 |
| XOM | Alpaca 429 for XOM: {"message": "too many requests."}
 |
| CVX | Alpaca 429 for CVX: {"message": "too many requests."}
 |
| CAT | Alpaca 429 for CAT: {"message": "too many requests."}
 |
| GE | Alpaca 429 for GE: {"message": "too many requests."}
 |
| BA | Alpaca 429 for BA: {"message": "too many requests."}
 |
| LMT | Alpaca 429 for LMT: {"message": "too many requests."}
 |
| UNH | Alpaca 429 for UNH: {"message": "too many requests."}
 |
| LLY | Alpaca 429 for LLY: {"message": "too many requests."}
 |
| NVO | Alpaca 429 for NVO: {"message": "too many requests."}
 |
| COST | Alpaca 429 for COST: {"message": "too many requests."}
 |
| WMT | Alpaca 429 for WMT: {"message": "too many requests."}
 |
| HD | Alpaca 429 for HD: {"message": "too many requests."}
 |
| MCD | Alpaca 429 for MCD: {"message": "too many requests."}
 |
| DIS | Alpaca 429 for DIS: {"message": "too many requests."}
 |
| V | Alpaca 429 for V: {"message": "too many requests."}
 |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mean-revert | 630 | 292 | 46.35% | $-2846.34 | $-4.52 |
| trend | 370 | 139 | 37.57% | $-6581.65 | $-17.79 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| falseBreakoutProne | 7 | 3 | 42.86% | $+4.7 | $+0.67 |
| cleanTrend | 1 | 1 | 100% | $+0 | $+0 |
| sustainedSell | 1 | 0 | 0% | $-2.4 | $-2.4 |
| thinChop | 60 | 28 | 46.67% | $-128.63 | $-2.14 |
| noisyHighBeta | 195 | 85 | 43.59% | $-1156.25 | $-5.93 |
| neutral | 736 | 314 | 42.66% | $-8145.41 | $-11.07 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SBUX | 17 | 2.13 | $+16.76 | 7 | 0.53 | $-15.89 | 0.15% | 0.38 | watch |
| Symbol | LOW | 6 | 0.16 | $-11.52 | 3 | 8.55 | $+9.56 | 0% | 2.05 | reject |
| Behavior | falseBreakoutProne | 7 | 1.04 | $+0.67 | 0 | 0 | $+0 | 0% | 0 | reject |
| Time slot | Open 9:30-10:30 | 275 | 0.65 | $-8.24 | 0 | 0 | $+0 | 0% | 0 | reject |
| Symbol | CELH | 64 | 0.61 | $-9.39 | 33 | 0.91 | $-2.12 | 0.46% | 0.59 | reject |
| Setup | mean-revert | 402 | 0.74 | $-5.64 | 228 | 0.87 | $-2.53 | 1.08% | 0.59 | reject |
| Symbol | TXN | 8 | 0.94 | $-0.66 | 12 | 0.82 | $-2.78 | 0.17% | 0.44 | reject |
| Symbol | IBM | 15 | 0.85 | $-3.17 | 15 | 0.75 | $-3.58 | 0.14% | 0.45 | reject |
| Symbol | LRCX | 27 | 0.52 | $-8.11 | 42 | 0.86 | $-3.75 | 0.48% | 0.62 | reject |
| Behavior | thinChop | 42 | 0.84 | $-1.18 | 18 | 0.45 | $-4.39 | 0.08% | 0.3 | reject |
| Symbol | ELF | 82 | 0.49 | $-14.05 | 46 | 0.82 | $-5.05 | 0.7% | 0.6 | reject |
| Time slot | Noon 11:30-13:00 | 114 | 0.74 | $-5.17 | 105 | 0.63 | $-7.5 | 0.97% | 0.39 | reject |
| Behavior | noisyHighBeta | 98 | 0.77 | $-4.35 | 97 | 0.63 | $-7.52 | 1.01% | 0.46 | reject |
| Symbol | DELL | 40 | 0.45 | $-15.17 | 35 | 0.72 | $-8.19 | 0.42% | 0.54 | reject |
| Symbol | TGT | 16 | 0.56 | $-12.37 | 13 | 0.64 | $-11.04 | 0.24% | 0.45 | reject |
| Time slot | Mid 10:30-11:30 | 162 | 0.53 | $-13.77 | 267 | 0.61 | $-11.14 | 3.06% | 0.43 | reject |
| Symbol | AMAT | 20 | 0.44 | $-14.96 | 27 | 0.45 | $-11.61 | 0.31% | 0.28 | reject |
| Behavior | neutral | 451 | 0.62 | $-10.2 | 285 | 0.58 | $-12.44 | 3.67% | 0.39 | reject |
| Symbol | HPE | 28 | 0.49 | $-13.02 | 18 | 0.39 | $-13.66 | 0.3% | 0.24 | reject |
| Symbol | MRVL | 90 | 0.69 | $-7.64 | 40 | 0.35 | $-14.89 | 0.67% | 0.21 | reject |
| Symbol | KLAC | 29 | 0.43 | $-11.7 | 20 | 0.44 | $-17.35 | 0.39% | 0.3 | reject |
| Symbol | INTU | 12 | 0.61 | $-4.73 | 16 | 0.35 | $-17.92 | 0.29% | 0.21 | reject |
| Symbol | RIVN | 129 | 0.88 | $-2.83 | 53 | 0.34 | $-20.7 | 1.11% | 0.24 | reject |
| Time slot | PM 13:00-14:00 | 49 | 1.01 | $+0.22 | 28 | 0.32 | $-21.12 | 0.62% | 0.21 | reject |
| Setup | trend | 198 | 0.51 | $-14.17 | 172 | 0.4 | $-21.95 | 3.78% | 0.28 | reject |
| Symbol | NKE | 11 | 0.16 | $-32.36 | 13 | 0.45 | $-25.24 | 0.44% | 0.34 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-11051.33 | 0.57 |
| +3 bps/side | $-14297.99 | 0.49 |
| +5 bps/side | $-17544.36 | 0.42 |
| +10 bps/side | $-25661.07 | 0.29 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stop-loss | 290 |
| trailing-stop | 216 |
| timeout | 184 |
| stagnation | 113 |
| early-reversal | 90 |
| profit-target | 47 |
| trim-profit-target | 36 |
| breakeven-stop | 24 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | MRVL | 04-29 13:33 | 04-29 13:55 | 58.48 | 58.44 | 167 | 9766.16 | -6.68 | -0.07% | 0.1R | 22m | market | trailing-stop | mixed | mean-revert | neutral | 50.83 | ↓58.64 | 0.0653 | 1.3 | **LOSS** |
| 2 | SBUX | 04-30 14:10 | 04-30 14:21 | 78.35 | 77.67 | 112 | 8775.2 | -76.16 | -0.87% | 0.87R | 11m | market | stop-loss | mixed | mean-revert | neutral | 55.57 | ↓77.61 | -0.0474 | 0.93 | **LOSS** |
| 3 | DELL | 04-30 14:17 | 04-30 14:35 | 88.75 | 89.53 | 108 | 9585 | +84.24 | +0.88% | 1.76R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 44.23 | ↑88.39 | -0.0541 | 2.25 | **WIN** |
| 4 | RIVN | 04-30 14:55 | 04-30 15:05 | 13.04 | 13.03 | 751 | 9793.04 | -7.51 | -0.08% | 0.11R | 10m | market | trailing-stop | mixed | mean-revert | neutral | 54.79 | ↑12.93 | 0.0343 | 4.74 | **LOSS** |
| 5 | RIVN | 04-30 15:44 | 04-30 16:00 | 13.3 | 13.25 | 842 | 11198.6 | -42.1 | -0.38% | 0.76R | 16m | market | early-reversal | trend | trend | neutral | 73.81 | ↑13 | 0.0291 | 2.89 | **LOSS** |
| 6 | KLAC | 04-30 16:27 | 04-30 16:56 | 687.42 | 687.63 | 14 | 9623.88 | +2.94 | +0.03% | 0.06R | 29m | market | timeout | mixed | mean-revert | neutral | 48.12 | ↑684.5 | 1.3622 | 0.99 | **WIN** |
| 7 | ADP | 04-30 17:10 | 04-30 17:32 | 299.22 | 300.21 | 9 | 2692.98 | +8.91 | +0.33% | 0.66R | 22m | market | timeout | mixed | mean-revert | thinChop | 57.51 | ↑295.1 | 0.8073 | 1.17 | **WIN** |
| 8 | DELL | 05-01 13:51 | 05-01 13:59 | 94.43 | 93.79 | 103 | 9726.29 | -65.92 | -0.68% | 1.24R | 8m | market | stop-loss | mixed | mean-revert | neutral | 62.84 | ↓94.13 | 0.6488 | 0.87 | **LOSS** |
| 9 | RIVN | 05-01 14:11 | 05-01 14:20 | 13.94 | 13.83 | 441 | 6147.54 | -48.51 | -0.79% | 0.9R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 59.14 | ↓13.83 | 0.0172 | 1.27 | **LOSS** |
| 10 | MRVL | 05-01 14:16 | 05-01 14:37 | 61.03 | 61.49 | 183 | 11168.49 | +84.18 | +0.75% | 1.14R | 21m | market | timeout | trend | trend | neutral | 70.28 | ↑59.89 | 0.2315 | 1.27 | **WIN** |
| 11 | RIVN | 05-01 14:27 | 05-01 14:48 | 14.04 | 14.13 | 438 | 6149.52 | +39.42 | +0.64% | 0.91R | 21m | market | timeout | trend | trend | noisyHighBeta | 73.44 | ↑13.86 | 0.0354 | 1.26 | **WIN** |
| 12 | MRVL | 05-01 15:22 | 05-01 15:34 | 61.75 | 61.38 | 181 | 11176.75 | -66.97 | -0.6% | 1.2R | 12m | market | stop-loss | trend | trend | neutral | 69.01 | ↑60.71 | 0.0908 | 1.7 | **LOSS** |
| 13 | INTU | 05-01 15:56 | 05-01 16:22 | 631.4 | 629.03 | 10 | 6314 | -23.7 | -0.38% | 0.76R | 26m | market | timeout | bearish | mean-revert | neutral | 33.95 | ↓630.1 | 0.6091 | 1.05 | **LOSS** |
| 14 | ELF | 05-01 17:45 | 05-01 18:01 | 62.29 | 62.24 | 121 | 7537.09 | -6.05 | -0.08% | 0.16R | 16m | market | stagnation | bearish | mean-revert | neutral | 49.05 | ↑62.16 | 0.0339 | 2.45 | **LOSS** |
| 15 | KLAC | 05-01 17:52 | 05-01 18:23 | 685.89 | 685.49 | 11 | 7544.79 | -4.4 | -0.06% | 0.12R | 31m | market | stagnation | mixed | mean-revert | neutral | 58.13 | ↑684.92 | 0.6941 | 1.7 | **LOSS** |
| 16 | TXN | 05-02 13:47 | 05-02 14:06 | 163.18 | 163.08 | 38 | 6200.84 | -3.8 | -0.06% | 0.1R | 19m | market | stagnation | bearish | mean-revert | neutral | 27.58 | ↓163.87 | 0.84 | 0.87 | **LOSS** |
| 17 | IBM | 05-02 13:49 | 05-02 14:10 | 242.51 | 244.44 | 40 | 9700.4 | +77.2 | +0.8% | 1.6R | 21m | market | timeout | mixed | mean-revert | neutral | 32.03 | ↑243.11 | 0.497 | 1.54 | **WIN** |
| 18 | ELF | 05-02 13:55 | 05-02 14:12 | 64.43 | 65.76 | 123 | 7924.89 | +163.59 | +2.06% | 2.26R | 17m | market | profit-target | bearish | mean-revert | neutral | 58.24 | ↑64.03 | 0.4387 | 1.04 | **WIN** |
| 19 | MRVL | 05-02 14:20 | 05-02 14:36 | 62.56 | 62.43 | 148 | 9258.88 | -19.24 | -0.21% | 0.42R | 16m | market | stagnation | mixed | mean-revert | neutral | 41.75 | ↓62.74 | 0.0594 | 0.85 | **LOSS** |
| 20 | RIVN | 05-02 14:20 | 05-02 14:31 | 13.8 | 13.71 | 491 | 6775.8 | -44.19 | -0.65% | 1.27R | 11m | market | stop-loss | mixed | mean-revert | neutral | 52.83 | ↓13.78 | 0.0223 | 1.57 | **LOSS** |
| 21 | LOW | 05-02 14:42 | 05-02 15:03 | 224.99 | 225.28 | 11 | 2474.89 | +3.19 | +0.13% | 0.26R | 21m | market | timeout | mixed | mean-revert | thinChop | 20.6 | ↓225.78 | 0.1671 | 0.9 | **WIN** |
| 22 | CELH | 05-02 14:46 | 05-02 15:08 | 35.32 | 35.39 | 277 | 9783.64 | +19.39 | +0.2% | 0.4R | 22m | market | timeout | mixed | mean-revert | neutral | 30.15 | ↓35.39 | 0.0224 | 1.34 | **WIN** |
| 23 | ELF | 05-02 15:13 | 05-02 15:29 | 66.01 | 65.75 | 148 | 9769.48 | -38.48 | -0.39% | 0.78R | 16m | market | early-reversal | mixed | mean-revert | neutral | 42.3 | ↑64.43 | 0.2015 | 2.39 | **LOSS** |
| 24 | ELF | 05-02 16:23 | 05-02 16:44 | 67.32 | 67.46 | 166 | 11175.12 | +23.24 | +0.21% | 0.42R | 21m | market | timeout | trend | trend | neutral | 79.52 | ↑64.93 | 0.2776 | 2.6 | **WIN** |
| 25 | KLAC | 05-02 17:41 | 05-02 18:11 | 699.97 | 700.97 | 13 | 9099.61 | +13 | +0.14% | 0.26R | 30m | market | timeout | mixed | mean-revert | neutral | 47.6 | ↓701.54 | 2.487 | 1.52 | **WIN** |
| 26 | INTU | 05-05 14:02 | 05-05 14:19 | 638.68 | 637.65 | 17 | 10857.56 | -17.51 | -0.16% | 0.32R | 17m | market | stagnation | trend | trend | neutral | 78.89 | ↑634.97 | 1.367 | 1.33 | **LOSS** |
| 27 | MRVL | 05-05 14:04 | 05-05 14:20 | 62.26 | 62.08 | 157 | 9774.82 | -28.26 | -0.29% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | neutral | 61.28 | ↑61.78 | 0.1594 | 1.79 | **LOSS** |
| 28 | CELH | 05-06 14:19 | 05-06 14:34 | 32.99 | 33.39 | 239 | 7884.61 | +95.6 | +1.21% | 1.16R | 15m | market | profit-target | mixed | mean-revert | neutral | 51.59 | ↑33.44 | 0.0606 | 1.22 | **WIN** |
| 29 | RIVN | 05-06 14:51 | 05-06 15:09 | 13.56 | 13.64 | 360 | 9776.76 | +28.8 | +0.59% | 1.18R | 18m | market | trim-profit-target | mixed | mean-revert | neutral | 59.26 | ↑13.45 | 0.038 | 1.2 | **WIN** |
| 30 | RIVN | 05-06 14:51 | 05-06 15:12 | 13.56 | 13.61 | 361 | 9776.76 | +18.05 | +0.37% | 0.74R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 59.26 | ↑13.45 | 0.038 | 1.2 | **WIN** |
| 31 | CELH | 05-06 15:38 | 05-06 15:59 | 34.13 | 34.43 | 287 | 9795.31 | +86.1 | +0.88% | 1.49R | 21m | market | timeout | mixed | mean-revert | neutral | 48.92 | ↑33.47 | 0.0892 | 1.2 | **WIN** |
| 32 | CELH | 05-06 16:20 | 05-06 16:31 | 34.52 | 34.33 | 284 | 9803.68 | -53.96 | -0.55% | 1R | 11m | market | stop-loss | mixed | mean-revert | neutral | 58.52 | ↑33.56 | 0.0877 | 2.38 | **LOSS** |
| 33 | ELF | 05-06 17:16 | 05-06 17:43 | 67.51 | 66.92 | 131 | 8843.81 | -77.29 | -0.87% | 1.74R | 27m | market | stop-loss | mixed | mean-revert | neutral | 38.58 | ↓67.15 | 0.0389 | 1.04 | **LOSS** |
| 34 | MRVL | 05-07 14:05 | 05-07 14:17 | 55.06 | 55.73 | 46 | 2532.76 | +30.82 | +1.22% | 1.65R | 12m | market | profit-target | mixed | mean-revert | thinChop | 60.13 | ↑54.73 | -0.2348 | 1.12 | **WIN** |
| 35 | NKE | 05-07 14:07 | 05-07 14:24 | 58.37 | 58.38 | 136 | 7938.32 | +1.36 | +0.02% | 0.04R | 17m | market | breakeven-stop | bearish | mean-revert | neutral | 27.85 | ↑58.35 | 0.1153 | 1.32 | **WIN** |
| 36 | CELH | 05-07 14:24 | 05-07 14:28 | 35.4 | 35.12 | 225 | 7965 | -63 | -0.79% | 1.32R | 4m | market | stop-loss | bearish | mean-revert | neutral | 42.86 | ↓35.27 | 0.0336 | 1.54 | **LOSS** |
| 37 | RIVN | 05-07 14:45 | 05-07 14:51 | 13.59 | 13.44 | 199 | 2704.41 | -29.85 | -1.1% | 1.15R | 6m | market | stop-loss | mixed | mean-revert | thinChop | 39.36 | ↓13.49 | 0.0374 | 1.05 | **LOSS** |
| 38 | ELF | 05-07 15:02 | 05-07 15:30 | 65.65 | 65.82 | 140 | 9191 | +23.8 | +0.26% | 0.52R | 28m | market | timeout | mixed | mean-revert | neutral | 66.36 | ↑65.56 | 0.0712 | 1.07 | **WIN** |
| 39 | MRVL | 05-08 14:06 | 05-08 14:09 | 58.2 | 57.79 | 192 | 11174.4 | -78.72 | -0.7% | 1.35R | 3m | market | stop-loss | trend | trend | neutral | 74.47 | ↑57.48 | 0.2555 | 3.78 | **LOSS** |
| 40 | ELF | 05-08 14:20 | 05-08 14:35 | 67.65 | 67.95 | 165 | 11162.25 | +49.5 | +0.44% | 0.52R | 15m | market | trailing-stop | trend | trend | neutral | 67.42 | ↑67.08 | 0.1372 | 1.12 | **WIN** |
| 41 | RIVN | 05-08 15:41 | 05-08 15:51 | 13.26 | 13.28 | 843 | 11178.18 | +16.86 | +0.15% | 0.26R | 10m | market | trailing-stop | trend | trend | neutral | 74.19 | ↑13.09 | 0.0523 | 2.03 | **WIN** |
| 42 | RIVN | 05-08 16:03 | 05-08 16:18 | 13.41 | 13.48 | 417 | 11183.94 | +29.19 | +0.52% | 1.04R | 15m | market | trim-profit-target | trend | trend | neutral | 60.34 | ↑13.13 | 0.0463 | 1.3 | **WIN** |
| 43 | RIVN | 05-08 16:03 | 05-08 16:20 | 13.41 | 13.47 | 417 | 11183.94 | +25.02 | +0.45% | 0.9R | 17m | market | trailing-stop | trend | trend | neutral | 60.34 | ↑13.13 | 0.0463 | 1.3 | **WIN** |
| 44 | RIVN | 05-08 17:01 | 05-08 17:20 | 13.77 | 13.78 | 711 | 9790.47 | +7.11 | +0.07% | 0.08R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 71.08 | ↑13.3 | 0.0916 | 1.13 | **WIN** |
| 45 | CELH | 05-09 13:59 | 05-09 14:10 | 36.34 | 36.8 | 148 | 5378.32 | +68.08 | +1.27% | 2.54R | 11m | market | profit-target | mixed | mean-revert | noisyHighBeta | 62.5 | ↑36.14 | 0.184 | 3.4 | **WIN** |
| 46 | RIVN | 05-09 14:00 | 05-09 14:05 | 13.97 | 14 | 440 | 6146.8 | +13.2 | +0.21% | 0.28R | 5m | market | trailing-stop | trend | trend | noisyHighBeta | 78.67 | ↑13.79 | 0.0348 | 2.2 | **WIN** |
| 47 | CELH | 05-09 14:39 | 05-09 15:00 | 36.88 | 37.24 | 146 | 5384.48 | +52.56 | +0.98% | 1.96R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 54.17 | ↑36.56 | 0.0805 | 1.81 | **WIN** |
| 48 | RIVN | 05-09 14:45 | 05-09 15:00 | 14.19 | 14.53 | 434 | 6158.46 | +147.56 | +2.4% | 2.93R | 15m | market | profit-target | trend | trend | noisyHighBeta | 64.77 | ↑13.94 | 0.0385 | 2.82 | **WIN** |
| 49 | CELH | 05-09 15:10 | 05-09 15:16 | 37.02 | 36.72 | 115 | 4257.3 | -34.5 | -0.81% | 1.62R | 6m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 47.24 | ↓36.77 | 0.0383 | 1.48 | **LOSS** |
| 50 | MRVL | 05-09 15:12 | 05-09 15:25 | 60.21 | 59.8 | 162 | 9754.02 | -66.42 | -0.68% | 1.36R | 13m | market | stop-loss | mixed | mean-revert | neutral | 50.3 | ↓60.02 | 0.125 | 1.33 | **LOSS** |
| 51 | RIVN | 05-09 15:12 | 05-09 15:17 | 14.56 | 14.35 | 674 | 9813.44 | -141.54 | -1.44% | 1.4R | 5m | market | stop-loss | mixed | mean-revert | neutral | 60.94 | ↑14.27 | 0.1106 | 1.21 | **LOSS** |
| 52 | RIVN | 05-09 16:05 | 05-09 16:21 | 14.24 | 14.21 | 378 | 5382.72 | -11.34 | -0.21% | 0.38R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 53.85 | ↓14.28 | 0.0031 | 1.18 | **LOSS** |
| 53 | RIVN | 05-09 17:46 | 05-09 18:01 | 14.37 | 14.28 | 428 | 6150.36 | -38.52 | -0.63% | 1.26R | 15m | market | stop-loss | trend | trend | noisyHighBeta | 76.47 | ↑14.27 | 0.0228 | 1.09 | **LOSS** |
| 54 | DELL | 05-12 13:44 | 05-12 13:46 | 103.06 | 102.85 | 95 | 9790.7 | -19.95 | -0.2% | 0.26R | 2m | market | trailing-stop | mixed | mean-revert | neutral | 58.64 | ↓103.38 | 1.7497 | 0.99 | **LOSS** |
| 55 | RIVN | 05-12 14:05 | 05-12 14:17 | 14.79 | 14.8 | 364 | 5383.56 | +3.64 | +0.07% | 0.08R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 55 | ↑14.78 | 0.0424 | 1.81 | **WIN** |
| 56 | LRCX | 05-12 14:19 | 05-12 14:35 | 81.5 | 81.07 | 115 | 9372.5 | -49.45 | -0.53% | 1.06R | 16m | market | early-reversal | mixed | mean-revert | neutral | 30.81 | ↓81.57 | 0.1678 | 1.72 | **LOSS** |
| 57 | MRVL | 05-13 14:00 | 05-13 14:21 | 66.16 | 66.32 | 169 | 11181.04 | +27.04 | +0.24% | 0.48R | 21m | market | timeout | trend | trend | neutral | 76.83 | ↑65.49 | 0.2373 | 1.34 | **WIN** |
| 58 | KLAC | 05-13 15:05 | 05-13 15:30 | 785.3 | 788.45 | 14 | 10994.2 | +44.1 | +0.4% | 0.8R | 25m | market | timeout | trend | trend | neutral | 65.54 | ↑775.74 | 4.2324 | 1.05 | **WIN** |
| 59 | LRCX | 05-13 16:01 | 05-13 16:19 | 85.33 | 85.27 | 114 | 9727.62 | -6.84 | -0.07% | 0.14R | 18m | market | stagnation | mixed | mean-revert | neutral | 33.93 | ↑84.25 | 0.0937 | 1.02 | **LOSS** |
| 60 | ELF | 05-13 16:26 | 05-13 16:33 | 76.96 | 76.53 | 145 | 11159.2 | -62.35 | -0.56% | 1.12R | 7m | market | stop-loss | trend | trend | neutral | 67.73 | ↑76.2 | 0.1428 | 2.39 | **LOSS** |
| 61 | ELF | 05-13 16:38 | 05-13 16:56 | 77.17 | 76.91 | 145 | 11189.65 | -37.7 | -0.34% | 0.68R | 18m | market | early-reversal | trend | trend | neutral | 73.46 | ↑76.25 | 0.1655 | 1.56 | **LOSS** |
| 62 | ELF | 05-14 14:52 | 05-14 15:04 | 79.15 | 78.41 | 123 | 9735.45 | -91.02 | -0.93% | 1.79R | 12m | market | stop-loss | mixed | mean-revert | neutral | 50.88 | ↓79.24 | 0.1446 | 1.25 | **LOSS** |
| 63 | CELH | 05-14 16:14 | 05-14 16:35 | 39.31 | 39.48 | 231 | 9080.61 | +39.27 | +0.43% | 0.86R | 21m | market | timeout | mixed | mean-revert | neutral | 41.82 | ↑39.16 | 0.0555 | 1.05 | **WIN** |
| 64 | RIVN | 05-15 13:54 | 05-15 14:02 | 15.02 | 15.3 | 358 | 5377.16 | +100.24 | +1.86% | 1.59R | 8m | market | profit-target | mixed | mean-revert | noisyHighBeta | 63.89 | ↑14.96 | 0.0505 | 1.59 | **WIN** |
| 65 | RIVN | 05-15 14:04 | 05-15 14:17 | 15.29 | 15.14 | 403 | 6161.87 | -60.45 | -0.98% | 0.93R | 13m | market | stop-loss | trend | trend | noisyHighBeta | 67.31 | ↑15.05 | 0.0802 | 1.07 | **LOSS** |
| 66 | INTU | 05-15 15:17 | 05-15 15:40 | 660.41 | 662.87 | 16 | 10566.56 | +39.36 | +0.37% | 0.74R | 23m | market | timeout | trend | trend | neutral | 71.64 | ↑655.99 | 0.7876 | 2.98 | **WIN** |
| 67 | RIVN | 05-15 15:50 | 05-15 16:06 | 15.27 | 15.38 | 176 | 5375.04 | +19.36 | +0.72% | 1.29R | 16m | market | trim-profit-target | mixed | mean-revert | noisyHighBeta | 62.16 | ↑15.1 | 0.041 | 1.63 | **WIN** |
| 68 | RIVN | 05-15 15:50 | 05-15 16:11 | 15.27 | 15.37 | 176 | 5375.04 | +17.6 | +0.65% | 1.16R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 62.16 | ↑15.1 | 0.041 | 1.63 | **WIN** |
| 69 | KLAC | 05-15 17:53 | 05-15 18:09 | 806.34 | 805.63 | 12 | 9676.08 | -8.52 | -0.09% | 0.18R | 16m | market | stagnation | mixed | mean-revert | neutral | 55.61 | ↑803.23 | 1.5433 | 1.24 | **LOSS** |
| 70 | CELH | 05-16 15:46 | 05-16 15:52 | 39.82 | 39.59 | 281 | 11189.42 | -64.63 | -0.58% | 1.16R | 6m | market | stop-loss | trend | trend | neutral | 76.03 | ↑39.18 | 0.1117 | 2.01 | **LOSS** |
| 71 | ELF | 05-16 16:39 | 05-16 16:55 | 78.81 | 78.59 | 142 | 11191.02 | -31.24 | -0.28% | 0.55R | 16m | market | early-reversal | trend | trend | neutral | 72.39 | ↑77.78 | 0.1687 | 1.56 | **LOSS** |
| 72 | RIVN | 05-19 14:28 | 05-19 14:49 | 15.61 | 15.61 | 430 | 6712.3 | +0 | +0% | 0R | 21m | market | timeout | bearish | mean-revert | neutral | 47.92 | ↑15.46 | 0.0208 | 1.55 | **WIN** |
| 73 | RIVN | 05-19 16:09 | 05-19 16:23 | 15.89 | 16 | 308 | 9788.24 | +33.88 | +0.69% | 1.38R | 14m | market | trim-profit-target | mixed | mean-revert | neutral | 53.73 | ↑15.59 | 0.0392 | 2.44 | **WIN** |
| 74 | RIVN | 05-19 16:09 | 05-19 16:30 | 15.89 | 16.05 | 308 | 9788.24 | +49.28 | +1.01% | 2.02R | 21m | market | timeout | mixed | mean-revert | neutral | 53.73 | ↑15.59 | 0.0392 | 2.44 | **WIN** |
| 75 | RIVN | 05-19 17:39 | 05-19 18:00 | 16.13 | 16.22 | 608 | 9807.04 | +54.72 | +0.56% | 1.12R | 21m | market | timeout | mixed | mean-revert | neutral | 42.11 | ↑15.75 | 0.0182 | 1.14 | **WIN** |
| 76 | CELH | 05-20 14:00 | 05-20 14:16 | 38.32 | 38.25 | 256 | 9809.92 | -17.92 | -0.18% | 0.35R | 16m | market | stagnation | mixed | mean-revert | neutral | 45.88 | ↑38.17 | 0.1721 | 1.72 | **LOSS** |
| 77 | DELL | 05-20 14:05 | 05-20 14:25 | 115.46 | 115.21 | 97 | 11199.62 | -24.25 | -0.22% | 0.44R | 20m | market | stagnation | trend | trend | neutral | 65.57 | ↑114.78 | 0.2054 | 2.49 | **LOSS** |
| 78 | ELF | 05-20 14:55 | 05-20 15:05 | 81.19 | 80.73 | 120 | 9742.8 | -55.2 | -0.57% | 1.04R | 10m | market | stop-loss | mixed | mean-revert | neutral | 50.4 | ↑80.59 | 0.4192 | 1.31 | **LOSS** |
| 79 | RIVN | 05-20 16:46 | 05-20 17:07 | 17.01 | 17.03 | 317 | 5392.17 | +6.34 | +0.12% | 0.24R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 54.72 | ↑16.88 | 0.0221 | 1.19 | **WIN** |
| 80 | HPE | 05-21 14:13 | 05-21 14:34 | 17.89 | 17.91 | 547 | 9785.83 | +10.94 | +0.11% | 0.22R | 21m | market | timeout | mixed | mean-revert | neutral | 53.85 | ↑17.89 | 0.0327 | 3.95 | **WIN** |
| 81 | INTU | 05-22 13:44 | 05-22 14:05 | 662.86 | 665.97 | 4 | 2651.44 | +12.44 | +0.47% | 0.94R | 21m | market | timeout | mixed | mean-revert | thinChop | 52.16 | ↑662.74 | 0.0302 | 1.21 | **WIN** |
| 82 | ELF | 05-22 14:11 | 05-22 14:14 | 81.14 | 80.58 | 137 | 11116.18 | -76.72 | -0.69% | 1.38R | 3m | market | stop-loss | trend | trend | neutral | 72.05 | ↑80.28 | 0.4467 | 1.24 | **LOSS** |
| 83 | RIVN | 05-23 14:19 | 05-23 14:40 | 15.53 | 15.64 | 303 | 4705.59 | +33.33 | +0.71% | 1.42R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 40 | ↑15.51 | 0.0002 | 2.38 | **WIN** |
| 84 | CELH | 05-23 14:35 | 05-23 14:56 | 35.73 | 35.82 | 313 | 11183.49 | +28.17 | +0.25% | 0.5R | 21m | market | timeout | trend | trend | neutral | 64.49 | ↑35.37 | 0.0808 | 1.74 | **WIN** |
| 85 | ELF | 05-23 17:31 | 05-23 17:45 | 81.87 | 81.42 | 136 | 11134.32 | -61.2 | -0.55% | 1.1R | 14m | market | stop-loss | trend | trend | neutral | 72.3 | ↑80.5 | 0.2472 | 2.15 | **LOSS** |
| 86 | CELH | 05-27 14:00 | 05-27 14:13 | 36.89 | 36.63 | 254 | 9370.06 | -66.04 | -0.7% | 0.9R | 13m | market | stop-loss | mixed | mean-revert | neutral | 49.63 | ↓36.8 | 0.1604 | 1.54 | **LOSS** |
| 87 | ELF | 05-27 14:33 | 05-27 14:55 | 87.36 | 87.08 | 127 | 11094.72 | -35.56 | -0.32% | 0.64R | 22m | market | timeout | trend | trend | neutral | 76.57 | ↑85.96 | 0.4403 | 1.85 | **LOSS** |
| 88 | CELH | 05-27 15:00 | 05-27 15:09 | 37.46 | 37.19 | 299 | 11200.54 | -80.73 | -0.72% | 1.44R | 9m | market | stop-loss | trend | trend | neutral | 79.46 | ↑36.85 | 0.1026 | 1.94 | **LOSS** |
| 89 | ELF | 05-28 13:43 | 05-28 14:06 | 91.45 | 91.9 | 106 | 9693.7 | +47.7 | +0.49% | 0.58R | 23m | market | timeout | mixed | mean-revert | neutral | 45.36 | ↑91.56 | 0.1778 | 1.02 | **WIN** |
| 90 | RIVN | 05-28 14:12 | 05-28 14:30 | 15.59 | 15.57 | 719 | 11209.21 | -14.38 | -0.13% | 0.2R | 18m | market | stagnation | trend | trend | neutral | 71.91 | ↑15.47 | 0.0243 | 4.07 | **LOSS** |
| 91 | MRVL | 05-28 14:20 | 05-28 14:36 | 65.41 | 65.2 | 149 | 9746.09 | -31.29 | -0.32% | 0.64R | 16m | market | early-reversal | mixed | mean-revert | neutral | 34.98 | ↓65.32 | 0.0734 | 1.85 | **LOSS** |
| 92 | RIVN | 05-28 15:53 | 05-28 15:59 | 15.69 | 15.59 | 715 | 11218.35 | -71.5 | -0.64% | 1.28R | 6m | market | stop-loss | trend | trend | neutral | 73.33 | ↑15.53 | 0.0292 | 1.31 | **LOSS** |
| 93 | ELF | 05-29 15:54 | 05-29 15:57 | 114.27 | 113.55 | 47 | 5370.69 | -33.84 | -0.63% | 1.15R | 3m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 45.18 | ↓114.23 | 0.0653 | 2.01 | **LOSS** |
| 94 | CELH | 05-30 13:50 | 05-30 14:04 | 36.34 | 36.41 | 71 | 2580.14 | +4.97 | +0.19% | 0.26R | 14m | market | trailing-stop | mixed | mean-revert | thinChop | 63.27 | ↑36.34 | 0.1003 | 1.73 | **WIN** |
| 95 | DELL | 05-30 13:59 | 05-30 14:10 | 113.31 | 114.89 | 82 | 9291.42 | +129.56 | +1.39% | 1.81R | 11m | market | profit-target | mixed | mean-revert | neutral | 31.72 | ↑114.42 | -0.5778 | 1.46 | **WIN** |
| 96 | ELF | 05-30 16:47 | 05-30 16:56 | 113.22 | 112.28 | 42 | 4755.24 | -39.48 | -0.83% | 1.66R | 9m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 47.93 | ↓112.67 | 0.2507 | 1.56 | **LOSS** |
| 97 | MRVL | 06-02 13:30 | 06-02 13:41 | 59.86 | 60.25 | 143 | 8559.98 | +55.77 | +0.65% | 0.76R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 53.02 | ↑59.89 | 0.0714 | 1.02 | **WIN** |
| 98 | MRVL | 06-02 14:23 | 06-02 14:41 | 60.88 | 61.22 | 91 | 11141.04 | +30.94 | +0.56% | 1.12R | 18m | market | trim-profit-target | trend | trend | neutral | 73.23 | ↑60.11 | 0.1455 | 1.54 | **WIN** |
| 99 | MRVL | 06-02 14:23 | 06-02 14:44 | 60.88 | 61.25 | 92 | 11141.04 | +34.04 | +0.61% | 1.22R | 21m | market | timeout | trend | trend | neutral | 73.23 | ↑60.11 | 0.1455 | 1.54 | **WIN** |
| 100 | INTU | 06-02 14:27 | 06-02 14:46 | 759.47 | 758.13 | 14 | 10632.58 | -18.76 | -0.18% | 0.36R | 19m | market | stagnation | trend | trend | neutral | 77.13 | ↑755.09 | 0.9153 | 1.06 | **LOSS** |
| 101 | ELF | 06-02 15:00 | 06-02 15:06 | 113.71 | 113.53 | 47 | 5344.37 | -8.46 | -0.16% | 0.29R | 6m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 58.79 | ↑113.15 | 0.2933 | 3.02 | **LOSS** |
| 102 | RIVN | 06-03 14:00 | 06-03 14:07 | 14.64 | 14.51 | 766 | 11214.24 | -99.58 | -0.89% | 1.25R | 7m | market | stop-loss | trend | trend | neutral | 69.74 | ↑14.43 | 0.071 | 1.07 | **LOSS** |
| 103 | MRVL | 06-03 14:07 | 06-03 14:28 | 61.92 | 62.3 | 42 | 2600.64 | +15.96 | +0.61% | 1.22R | 21m | market | timeout | mixed | mean-revert | thinChop | 47.52 | ↑61.79 | 0.0891 | 1.39 | **WIN** |
| 104 | ELF | 06-03 14:39 | 06-03 14:55 | 115.09 | 114.88 | 53 | 6099.77 | -11.13 | -0.18% | 0.24R | 16m | market | stagnation | trend | trend | noisyHighBeta | 61.16 | ↑113.85 | 0.3382 | 1.16 | **LOSS** |
| 105 | MRVL | 06-03 14:47 | 06-03 15:04 | 62.81 | 63.24 | 89 | 11180.18 | +38.27 | +0.68% | 1.36R | 17m | market | trim-profit-target | trend | trend | neutral | 79.56 | ↑62.06 | 0.1365 | 4.48 | **WIN** |
| 106 | MRVL | 06-03 14:47 | 06-03 15:06 | 62.81 | 63.09 | 89 | 11180.18 | +24.92 | +0.45% | 0.9R | 19m | market | trailing-stop | trend | trend | neutral | 79.56 | ↑62.06 | 0.1365 | 4.48 | **WIN** |
| 107 | KLAC | 06-03 15:31 | 06-03 16:15 | 774.97 | 777.02 | 14 | 10849.58 | +28.7 | +0.26% | 0.37R | 44m | market | timeout | trend | trend | neutral | 70.42 | ↑771.43 | 3.2697 | 1.06 | **WIN** |
| 108 | MRVL | 06-04 13:30 | 06-04 13:43 | 63.04 | 63.29 | 104 | 6556.16 | +26 | +0.4% | 0.8R | 13m | market | trailing-stop | bearish | mean-revert | neutral | 31.45 | ↑63.07 | 0.2008 | 1.07 | **WIN** |
| 109 | CELH | 06-04 14:00 | 06-04 14:18 | 39.5 | 39.75 | 37 | 2923 | +9.25 | +0.63% | 1.26R | 18m | market | trim-profit-target | mixed | mean-revert | thinChop | 35.26 | ↑39.5 | 0.0737 | 1.53 | **WIN** |
| 110 | CELH | 06-04 14:00 | 06-04 14:21 | 39.5 | 39.78 | 37 | 2923 | +10.36 | +0.71% | 1.42R | 21m | market | timeout | mixed | mean-revert | thinChop | 35.26 | ↑39.5 | 0.0737 | 1.53 | **WIN** |
| 111 | HPE | 06-04 14:21 | 06-04 14:40 | 17.82 | 17.8 | 518 | 9230.76 | -10.36 | -0.11% | 0.14R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 54.05 | ↓18.02 | 0.0025 | 1.06 | **LOSS** |
| 112 | MRVL | 06-04 16:30 | 06-04 16:51 | 64.92 | 65.51 | 151 | 9802.92 | +89.09 | +0.91% | 1.82R | 21m | market | timeout | mixed | mean-revert | neutral | 51.87 | ↑64.17 | 0.0701 | 0.88 | **WIN** |
| 113 | LRCX | 06-05 13:45 | 06-05 13:52 | 85.27 | 84.76 | 90 | 7674.3 | -45.9 | -0.6% | 1.2R | 7m | market | stop-loss | bearish | mean-revert | neutral | 45.27 | ↓85.5 | 0.1544 | 1.86 | **LOSS** |
| 114 | HPE | 06-05 14:09 | 06-05 14:30 | 17.67 | 17.77 | 491 | 8675.97 | +49.1 | +0.57% | 0.95R | 21m | market | timeout | mixed | mean-revert | neutral | 48.94 | ↑17.67 | 0.0033 | 1.61 | **WIN** |
| 115 | RIVN | 06-05 14:09 | 06-05 14:17 | 13.8 | 13.87 | 664 | 9163.2 | +46.48 | +0.51% | 0.82R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 50 | ↑13.8 | -0.0081 | 1.63 | **WIN** |
| 116 | CELH | 06-05 14:17 | 06-05 14:32 | 40.39 | 40.41 | 133 | 5371.87 | +2.66 | +0.05% | 0.1R | 15m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 57.5 | ↑40.08 | 0.1042 | 1.26 | **WIN** |
| 117 | MRVL | 06-05 14:49 | 06-05 15:10 | 66.35 | 66.83 | 67 | 4445.45 | +32.16 | +0.72% | 1.11R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 61.26 | ↑66.17 | 0.1393 | 0.97 | **WIN** |
| 118 | ELF | 06-05 15:33 | 06-05 15:39 | 117.72 | 117.05 | 50 | 5886 | -33.5 | -0.57% | 1.14R | 6m | market | stop-loss | bearish | mean-revert | neutral | 29.26 | ↓117.89 | -0.0067 | 1.07 | **LOSS** |
| 119 | CELH | 06-06 13:46 | 06-06 13:56 | 40.86 | 40.55 | 239 | 9765.54 | -74.09 | -0.76% | 1.1R | 10m | market | stop-loss | mixed | mean-revert | neutral | 46.01 | ↓40.9 | 0.2447 | 1.62 | **LOSS** |
| 120 | MRVL | 06-06 14:08 | 06-06 14:26 | 68.43 | 68.37 | 163 | 11154.09 | -9.78 | -0.09% | 0.12R | 18m | market | stagnation | trend | trend | neutral | 62.33 | ↑67.4 | 0.3039 | 1.15 | **LOSS** |
| 121 | DELL | 06-06 14:27 | 06-06 14:48 | 114.32 | 115.02 | 98 | 11203.36 | +68.6 | +0.61% | 1.22R | 21m | market | timeout | trend | trend | neutral | 79.86 | ↑113.82 | 0.2608 | 1.05 | **WIN** |
| 122 | MRVL | 06-06 14:49 | 06-06 14:59 | 69.34 | 69.33 | 161 | 11163.74 | -1.61 | -0.01% | 0.02R | 10m | market | trailing-stop | trend | trend | neutral | 77.05 | ↑68 | 0.2204 | 1.05 | **LOSS** |
| 123 | CELH | 06-09 14:00 | 06-09 14:16 | 42.71 | 42.59 | 262 | 11190.02 | -31.44 | -0.28% | 0.44R | 16m | market | stagnation | trend | trend | neutral | 76.15 | ↑42.15 | 0.242 | 1.12 | **LOSS** |
| 124 | MRVL | 06-09 14:16 | 06-09 14:37 | 70.96 | 71.11 | 86 | 6102.56 | +12.9 | +0.21% | 0.42R | 21m | market | timeout | trend | trend | noisyHighBeta | 66.52 | ↑70.08 | 0.1907 | 1.04 | **WIN** |
| 125 | KLAC | 06-10 15:34 | 06-10 16:09 | 839.22 | 846.58 | 11 | 9231.42 | +80.96 | +0.88% | 1.76R | 35m | market | timeout | mixed | mean-revert | neutral | 44.13 | ↑839.4 | 1.1965 | 1.37 | **WIN** |
| 126 | LRCX | 06-10 16:01 | 06-10 16:17 | 91.03 | 90.84 | 122 | 11105.66 | -23.18 | -0.21% | 0.42R | 16m | market | stagnation | trend | trend | neutral | 76.92 | ↑89.78 | 0.1645 | 2.35 | **LOSS** |
| 127 | SBUX | 06-11 13:48 | 06-11 14:09 | 93.6 | 93.99 | 104 | 9734.4 | +40.56 | +0.42% | 0.68R | 21m | market | timeout | mixed | mean-revert | neutral | 47.64 | ↑93.47 | 0.536 | 1.27 | **WIN** |
| 128 | ELF | 06-11 14:14 | 06-11 14:22 | 120.6 | 120.6 | 80 | 9648 | +0 | +0% | 0R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 51.19 | ↓120.63 | 0.2908 | 1.08 | **WIN** |
| 129 | ELF | 06-12 14:28 | 06-12 14:32 | 127.83 | 127.07 | 87 | 11121.21 | -66.12 | -0.59% | 1.11R | 4m | market | stop-loss | trend | trend | neutral | 72.81 | ↑125.77 | 0.5922 | 2.37 | **LOSS** |
| 130 | ELF | 06-13 13:44 | 06-13 13:55 | 129.27 | 128.4 | 64 | 8273.28 | -55.68 | -0.67% | 0.71R | 11m | market | stop-loss | bearish | mean-revert | neutral | 58 | ↓129.67 | 0.3534 | 1.25 | **LOSS** |
| 131 | NKE | 06-16 13:58 | 06-16 14:19 | 61.54 | 61.98 | 149 | 9169.46 | +65.56 | +0.71% | 1.42R | 21m | market | timeout | mixed | mean-revert | neutral | 46.38 | ↑61.58 | 0.1372 | 1.59 | **WIN** |
| 132 | MRVL | 06-16 14:03 | 06-16 14:23 | 70.29 | 70.66 | 159 | 11176.11 | +58.83 | +0.53% | 0.87R | 20m | market | trailing-stop | trend | trend | neutral | 75.07 | ↑68.89 | 0.4228 | 1.26 | **WIN** |
| 133 | RIVN | 06-16 14:15 | 06-16 14:22 | 13.96 | 13.96 | 802 | 11195.92 | +0 | +0% | 0R | 7m | market | trailing-stop | trend | trend | neutral | 78.46 | ↑13.75 | 0.0605 | 4.09 | **WIN** |
| 134 | KLAC | 06-16 15:29 | 06-16 16:00 | 885.49 | 887.08 | 9 | 7969.41 | +14.31 | +0.18% | 0.36R | 31m | market | timeout | bearish | mean-revert | neutral | 30.48 | ↓888.08 | 2.7823 | 1.53 | **WIN** |
| 135 | ELF | 06-16 16:00 | 06-16 16:22 | 126.56 | 127.57 | 19 | 2404.64 | +19.19 | +0.8% | 1.6R | 22m | market | timeout | mixed | mean-revert | thinChop | 37.32 | ↑126.77 | 0.21 | 1.01 | **WIN** |
| 136 | DELL | 06-17 14:12 | 06-17 14:24 | 116.49 | 115.83 | 96 | 11183.04 | -63.36 | -0.57% | 1.14R | 12m | market | stop-loss | trend | trend | neutral | 76.94 | ↑114.9 | 0.5192 | 1.25 | **LOSS** |
| 137 | MRVL | 06-17 17:23 | 06-17 17:26 | 72.06 | 72.1 | 155 | 11169.3 | +6.2 | +0.06% | 0.04R | 3m | market | trailing-stop | trend | trend | neutral | 75.44 | ↑70.28 | 0.5356 | 1.19 | **WIN** |
| 138 | RIVN | 06-18 13:35 | 06-18 13:43 | 13.46 | 13.62 | 728 | 9798.88 | +116.48 | +1.19% | 2.13R | 8m | market | profit-target | mixed | mean-revert | neutral | 58.21 | ↑13.49 | 0.0191 | 1.22 | **WIN** |
| 139 | MRVL | 06-18 14:01 | 06-18 14:12 | 76.08 | 76.31 | 112 | 8520.96 | +25.76 | +0.3% | 0.2R | 11m | market | trailing-stop | bearish | mean-revert | neutral | 50.49 | ↑75.47 | 0.622 | 1.1 | **WIN** |
| 140 | DELL | 06-18 14:28 | 06-18 14:36 | 118.21 | 118.26 | 74 | 8747.54 | +3.7 | +0.04% | 0.08R | 8m | market | breakeven-stop | mixed | mean-revert | neutral | 47.12 | ↑117.96 | 0.1771 | 1.34 | **WIN** |
| 141 | MRVL | 06-18 14:33 | 06-18 14:40 | 76.9 | 77.19 | 127 | 9766.3 | +36.83 | +0.38% | 0.55R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 64.12 | ↑75.78 | 0.2556 | 1.47 | **WIN** |
| 142 | RIVN | 06-18 15:48 | 06-18 16:04 | 13.81 | 13.76 | 711 | 9818.91 | -35.55 | -0.36% | 0.72R | 16m | market | early-reversal | mixed | mean-revert | neutral | 52.94 | ↑13.67 | 0.0324 | 1.42 | **LOSS** |
| 143 | CELH | 06-18 16:19 | 06-18 16:40 | 44.25 | 44.5 | 207 | 9159.75 | +51.75 | +0.56% | 1.12R | 21m | market | timeout | mixed | mean-revert | neutral | 48.15 | ↑44.24 | 0.0411 | 2.71 | **WIN** |
| 144 | ELF | 06-18 17:23 | 06-18 17:39 | 123.97 | 123.37 | 51 | 6322.47 | -30.6 | -0.48% | 0.96R | 16m | market | early-reversal | mixed | mean-revert | neutral | 45.35 | ↓124.84 | 0.022 | 1.12 | **LOSS** |
| 145 | MRVL | 06-20 13:34 | 06-20 13:37 | 75.38 | 75.52 | 110 | 8291.8 | +15.4 | +0.19% | 0.16R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 53.4 | ↓75.96 | 0.1218 | 1.02 | **WIN** |
| 146 | TXN | 06-20 13:35 | 06-20 13:48 | 199.39 | 199.88 | 41 | 8174.99 | +20.09 | +0.25% | 0.48R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 63.62 | ↓199.89 | 0.3716 | 1.21 | **WIN** |
| 147 | RIVN | 06-20 13:35 | 06-20 13:51 | 13.83 | 13.8 | 674 | 9321.42 | -20.22 | -0.22% | 0.26R | 16m | market | early-reversal | mixed | mean-revert | neutral | 51.67 | ↓13.9 | 0.0235 | 1.74 | **LOSS** |
| 148 | LRCX | 06-23 14:04 | 06-23 14:21 | 92.45 | 92.4 | 120 | 11094 | -6 | -0.05% | 0.1R | 17m | market | stagnation | trend | trend | neutral | 79.84 | ↑91.58 | 0.2968 | 1.11 | **LOSS** |
| 149 | RIVN | 06-23 14:18 | 06-23 14:34 | 13.88 | 13.86 | 808 | 11215.04 | -16.16 | -0.14% | 0.28R | 16m | market | stagnation | trend | trend | neutral | 77.5 | ↑13.66 | 0.0587 | 1.91 | **LOSS** |
| 150 | KLAC | 06-23 14:45 | 06-23 15:19 | 854.48 | 854.21 | 9 | 7690.32 | -2.43 | -0.03% | 0.06R | 34m | market | timeout | mixed | mean-revert | neutral | 52.85 | ↓855.19 | 0.822 | 1.48 | **LOSS** |
| 151 | HPE | 06-24 13:44 | 06-24 14:00 | 18.07 | 18.02 | 542 | 9793.94 | -27.1 | -0.28% | 0.4R | 16m | market | early-reversal | mixed | mean-revert | neutral | 74.53 | ↓18.06 | 0.0822 | 1.48 | **LOSS** |
| 152 | ADP | 06-24 13:46 | 06-24 13:59 | 309.91 | 308.12 | 8 | 2479.28 | -14.32 | -0.58% | 1.16R | 13m | market | stop-loss | mixed | mean-revert | thinChop | 55.02 | ↓310.13 | 0.6713 | 2.47 | **LOSS** |
| 153 | CELH | 06-24 13:53 | 06-24 13:56 | 45.3 | 45.37 | 216 | 9784.8 | +15.12 | +0.15% | 0.18R | 3m | market | trailing-stop | mixed | mean-revert | neutral | 60.07 | ↑45.07 | 0.4335 | 1.74 | **WIN** |
| 154 | LOW | 06-24 13:54 | 06-24 14:10 | 218.69 | 218.04 | 44 | 9622.36 | -28.6 | -0.3% | 0.6R | 16m | market | early-reversal | mixed | mean-revert | neutral | 54.49 | ↓219.18 | 0.2686 | 1.2 | **LOSS** |
| 155 | RIVN | 06-24 13:56 | 06-24 14:08 | 13.74 | 13.74 | 191 | 2624.34 | +0 | +0% | 0R | 12m | market | trailing-stop | mixed | mean-revert | thinChop | 47.17 | ↓13.79 | 0.014 | 0.87 | **WIN** |
| 156 | MRVL | 06-24 14:33 | 06-24 14:54 | 73.98 | 74.48 | 83 | 6140.34 | +41.5 | +0.68% | 1.33R | 21m | market | timeout | trend | trend | noisyHighBeta | 70.06 | ↑72.99 | 0.1525 | 1.3 | **WIN** |
| 157 | ELF | 06-24 15:01 | 06-24 15:18 | 123.26 | 122.87 | 79 | 9737.54 | -30.81 | -0.32% | 0.64R | 17m | market | early-reversal | mixed | mean-revert | neutral | 54.49 | ↓123.35 | 0.0684 | 2.52 | **LOSS** |
| 158 | MRVL | 06-24 15:07 | 06-24 15:23 | 75.02 | 74.63 | 149 | 11177.98 | -58.11 | -0.52% | 1.04R | 16m | market | early-reversal | trend | trend | neutral | 70.28 | ↑73.25 | 0.2267 | 1.65 | **LOSS** |
| 159 | CELH | 06-24 15:44 | 06-24 15:47 | 46.61 | 46.33 | 210 | 9788.1 | -58.8 | -0.6% | 1.15R | 3m | market | stop-loss | mixed | mean-revert | neutral | 52.83 | ↑45.72 | 0.1698 | 1.08 | **LOSS** |
| 160 | MRVL | 06-25 13:45 | 06-25 13:51 | 75.7 | 75.16 | 71 | 5374.7 | -38.34 | -0.71% | 0.85R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 42.86 | ↓75.72 | 0.1898 | 1.2 | **LOSS** |
| 161 | ELF | 06-25 15:34 | 06-25 15:58 | 122.59 | 122.74 | 79 | 9684.61 | +11.85 | +0.12% | 0.21R | 24m | market | timeout | mixed | mean-revert | neutral | 52.6 | ↑121.78 | 0.3911 | 0.95 | **WIN** |
| 162 | LOW | 06-25 16:13 | 06-25 16:29 | 221.67 | 221.21 | 50 | 11083.5 | -23 | -0.21% | 0.42R | 16m | market | stagnation | trend | trend | neutral | 79.75 | ↑219.51 | 0.4828 | 1.05 | **LOSS** |
| 163 | ELF | 06-25 16:46 | 06-25 17:07 | 123.49 | 123.39 | 90 | 11114.1 | -9 | -0.08% | 0.16R | 21m | market | stagnation | trend | trend | neutral | 48.56 | ↑122.11 | 0.2241 | 2.22 | **LOSS** |
| 164 | CELH | 06-26 14:00 | 06-26 14:16 | 46.89 | 46.82 | 238 | 11159.82 | -16.66 | -0.15% | 0.26R | 16m | market | stagnation | trend | trend | neutral | 62.55 | ↑46.47 | 0.1654 | 1.51 | **LOSS** |
| 165 | LOW | 06-26 14:01 | 06-26 14:19 | 220.85 | 220.65 | 30 | 6625.5 | -6 | -0.09% | 0.18R | 18m | market | stagnation | mixed | mean-revert | neutral | 24.41 | ↓221.84 | -0.0335 | 1.05 | **LOSS** |
| 166 | DELL | 06-26 14:13 | 06-26 14:30 | 126.17 | 125.73 | 88 | 11102.96 | -38.72 | -0.35% | 0.7R | 17m | market | early-reversal | trend | trend | neutral | 76.87 | ↑124.41 | 0.5416 | 1.58 | **LOSS** |
| 167 | MRVL | 06-26 14:25 | 06-26 14:37 | 79.34 | 79.46 | 68 | 5395.12 | +8.16 | +0.15% | 0.23R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 55.22 | ↑79.23 | 0.2335 | 2.44 | **WIN** |
| 168 | MRVL | 06-26 16:06 | 06-26 16:18 | 80.72 | 80.25 | 66 | 5327.52 | -31.02 | -0.58% | 1.16R | 12m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 55.74 | ↑79.58 | 0.154 | 1.01 | **LOSS** |
| 169 | DELL | 06-30 13:32 | 06-30 13:53 | 123.5 | 123.67 | 65 | 8027.5 | +11.05 | +0.14% | 0.27R | 21m | market | timeout | mixed | mean-revert | neutral | 49.19 | ↑123.87 | 0.1441 | 1.22 | **WIN** |
| 170 | CELH | 06-30 14:31 | 06-30 14:52 | 46.55 | 46.74 | 168 | 7820.4 | +31.92 | +0.41% | 0.82R | 21m | market | timeout | mixed | mean-revert | falseBreakoutProne | 40.94 | ↑46.54 | 0.0638 | 2.92 | **WIN** |
| 171 | HPE | 06-30 14:50 | 06-30 15:02 | 20.83 | 20.82 | 309 | 6436.47 | -3.09 | -0.05% | 0.1R | 12m | market | trailing-stop | bearish | mean-revert | neutral | 37.5 | ↑20.69 | 0.026 | 1.17 | **LOSS** |
| 172 | NKE | 06-30 15:30 | 06-30 15:40 | 71.24 | 71.27 | 96 | 6839.04 | +2.88 | +0.04% | 0.08R | 10m | market | breakeven-stop | mixed | mean-revert | neutral | 45.87 | ↑70.87 | 0.0943 | 0.88 | **WIN** |
| 173 | TGT | 07-01 14:20 | 07-01 14:41 | 102.08 | 103.05 | 109 | 11126.72 | +105.73 | +0.95% | 1.9R | 21m | market | timeout | trend | trend | neutral | 76.02 | ↑100.37 | 0.5423 | 2.31 | **WIN** |
| 174 | ELF | 07-01 14:39 | 07-01 14:55 | 127.82 | 127.68 | 22 | 2812.04 | -3.08 | -0.11% | 0.17R | 16m | market | stagnation | mixed | mean-revert | thinChop | 63.65 | ↑127 | 0.764 | 1.09 | **LOSS** |
| 175 | NKE | 07-02 14:39 | 07-02 14:44 | 75.8 | 73.63 | 129 | 9778.2 | -279.93 | -2.86% | 2.42R | 5m | market | stop-loss | mixed | mean-revert | neutral | 62.04 | ↓75.08 | 0.3446 | 1.19 | **LOSS** |
| 176 | TGT | 07-02 14:44 | 07-02 14:46 | 104.27 | 103.52 | 93 | 9697.11 | -69.75 | -0.72% | 1.44R | 2m | market | stop-loss | mixed | mean-revert | neutral | 46.67 | ↓104.2 | 0.177 | 2.45 | **LOSS** |
| 177 | ELF | 07-02 14:45 | 07-02 15:13 | 127.85 | 129.01 | 22 | 2812.7 | +25.52 | +0.91% | 1.44R | 28m | market | timeout | mixed | mean-revert | thinChop | 52.31 | ↑127.88 | 0.2929 | 0.96 | **WIN** |
| 178 | ELF | 07-02 16:30 | 07-02 16:51 | 128.81 | 129.12 | 75 | 9660.75 | +23.25 | +0.24% | 0.48R | 21m | market | timeout | mixed | mean-revert | neutral | 29.22 | ↑128.29 | 0.1734 | 1.54 | **WIN** |
| 179 | ELF | 07-02 17:45 | 07-02 18:01 | 130.21 | 129.83 | 85 | 11067.85 | -32.3 | -0.29% | 0.58R | 16m | market | early-reversal | trend | trend | neutral | 78.93 | ↑128.56 | 0.2119 | 3.44 | **LOSS** |
| 180 | KLAC | 07-03 14:03 | 07-03 14:27 | 926.3 | 925.58 | 12 | 11115.6 | -8.64 | -0.08% | 0.16R | 24m | market | stagnation | trend | trend | neutral | 65.84 | ↑921.25 | 1.1835 | 1.48 | **LOSS** |
| 181 | ELF | 07-03 16:52 | 07-07 13:33 | 131.23 | 127.62 | 74 | 9711.02 | -267.14 | -2.75% | 5.5R | 5561m | market | stop-loss | mixed | mean-revert | neutral | 51.86 | ↓131.03 | 0.2489 | 1.77 | **LOSS** |
| 182 | KLAC | 07-08 13:57 | 07-08 14:25 | 915.02 | 908.7 | 7 | 6405.14 | -44.24 | -0.69% | 1.38R | 28m | market | stop-loss | mixed | mean-revert | neutral | 59.02 | ↓916.62 | 2.0111 | 1.14 | **LOSS** |
| 183 | LRCX | 07-08 14:07 | 07-08 14:29 | 98.94 | 99.03 | 61 | 6035.34 | +5.49 | +0.09% | 0.18R | 22m | market | timeout | bearish | mean-revert | neutral | 33.72 | ↓99.1 | 0.0781 | 0.97 | **WIN** |
| 184 | RIVN | 07-08 14:27 | 07-08 14:48 | 13.03 | 13.13 | 860 | 11205.8 | +86 | +0.77% | 1.54R | 21m | market | timeout | trend | trend | neutral | 70.21 | ↑12.92 | 0.0242 | 3.05 | **WIN** |
| 185 | RIVN | 07-08 15:01 | 07-08 15:14 | 13.26 | 13.17 | 846 | 11217.96 | -76.14 | -0.68% | 1.36R | 13m | market | stop-loss | trend | trend | neutral | 72.73 | ↑13.03 | 0.0323 | 1.06 | **LOSS** |
| 186 | NKE | 07-09 14:00 | 07-09 14:17 | 74.49 | 74.44 | 131 | 9758.19 | -6.55 | -0.07% | 0.14R | 17m | market | stagnation | mixed | mean-revert | neutral | 39.13 | ↓74.52 | 0.0975 | 2.46 | **LOSS** |
| 187 | RIVN | 07-09 14:28 | 07-09 14:31 | 13.21 | 13.12 | 405 | 5350.05 | -36.45 | -0.68% | 1.36R | 3m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 35.29 | ↓13.22 | -0.0009 | 1.73 | **LOSS** |
| 188 | CELH | 07-09 16:46 | 07-09 17:02 | 46.26 | 46.05 | 166 | 7679.16 | -34.86 | -0.45% | 0.9R | 16m | market | early-reversal | bearish | mean-revert | neutral | 47.22 | ↑45.77 | 0.1168 | 0.92 | **LOSS** |
| 189 | CELH | 07-09 17:46 | 07-09 18:03 | 46.31 | 46.1 | 203 | 9400.93 | -42.63 | -0.45% | 0.9R | 17m | market | early-reversal | mixed | mean-revert | neutral | 41.18 | ↑45.9 | 0.0375 | 0.95 | **LOSS** |
| 190 | ADP | 07-10 13:35 | 07-10 13:55 | 307.07 | 306.31 | 8 | 2456.56 | -6.08 | -0.25% | 0.5R | 20m | market | early-reversal | mixed | mean-revert | thinChop | 35.65 | ↓307.02 | 0.2273 | 1.53 | **LOSS** |
| 191 | RIVN | 07-10 13:51 | 07-10 14:05 | 13.24 | 13.33 | 370 | 9797.6 | +33.3 | +0.68% | 1.28R | 14m | market | trim-profit-target | mixed | mean-revert | neutral | 45.16 | ↑13.28 | 0.0122 | 2.34 | **WIN** |
| 192 | RIVN | 07-10 13:51 | 07-10 14:09 | 13.24 | 13.33 | 370 | 9797.6 | +33.3 | +0.68% | 1.28R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 45.16 | ↑13.28 | 0.0122 | 2.34 | **WIN** |
| 193 | TGT | 07-10 14:00 | 07-10 14:21 | 104.27 | 104.98 | 107 | 11156.89 | +75.97 | +0.68% | 1.36R | 21m | market | timeout | trend | trend | neutral | 76.64 | ↑103.29 | 0.3138 | 1.53 | **WIN** |
| 194 | RIVN | 07-10 14:57 | 07-10 15:13 | 13.46 | 13.43 | 833 | 11212.18 | -24.99 | -0.22% | 0.44R | 16m | market | early-reversal | trend | trend | neutral | 76.19 | ↑13.32 | 0.0319 | 1.97 | **LOSS** |
| 195 | RIVN | 07-11 14:04 | 07-11 14:08 | 13.42 | 13.33 | 835 | 11205.7 | -75.15 | -0.67% | 1.34R | 4m | market | stop-loss | trend | trend | neutral | 79.25 | ↑13.23 | 0.0326 | 2.53 | **LOSS** |
| 196 | CELH | 07-14 14:28 | 07-14 14:49 | 44.67 | 44.81 | 136 | 6075.12 | +19.04 | +0.31% | 0.62R | 21m | market | timeout | bearish | mean-revert | neutral | 36.47 | ↑44.53 | 0.009 | 2.16 | **WIN** |
| 197 | RIVN | 07-15 15:43 | 07-15 15:48 | 12.97 | 12.97 | 993 | 12879.21 | +0 | +0% | 0R | 5m | market | breakeven-stop | trend | trend | cleanTrend | 74.42 | ↑12.79 | 0.0417 | 2.95 | **WIN** |
| 198 | CELH | 07-15 16:14 | 07-15 16:30 | 45.52 | 45.48 | 215 | 9786.8 | -8.6 | -0.09% | 0.18R | 16m | market | stagnation | mixed | mean-revert | neutral | 60 | ↑45.22 | 0.0783 | 1.68 | **LOSS** |
| 199 | ELF | 07-15 17:35 | 07-15 17:58 | 108.69 | 108.64 | 89 | 9673.41 | -4.45 | -0.05% | 0.09R | 23m | market | timeout | mixed | mean-revert | neutral | 59.01 | ↑107.97 | 0.3807 | 0.94 | **LOSS** |
| 200 | LRCX | 07-16 14:43 | 07-16 14:59 | 97.84 | 97.78 | 100 | 9784 | -6 | -0.06% | 0.12R | 16m | market | stagnation | mixed | mean-revert | neutral | 52.2 | ↑97.24 | 0.1368 | 0.9 | **LOSS** |
| 201 | ELF | 07-16 16:21 | 07-16 16:44 | 106.62 | 106.55 | 91 | 9702.42 | -6.37 | -0.07% | 0.14R | 23m | market | stagnation | mixed | mean-revert | neutral | 58.98 | ↑106.35 | 0.1151 | 1.07 | **LOSS** |
| 202 | HPE | 07-17 13:48 | 07-17 13:57 | 20.98 | 20.85 | 427 | 8958.46 | -55.51 | -0.62% | 0.9R | 9m | market | stop-loss | mixed | mean-revert | neutral | 41.75 | ↓21.01 | 0.1354 | 1.15 | **LOSS** |
| 203 | DELL | 07-17 14:07 | 07-17 14:17 | 123.63 | 122.94 | 21 | 2596.23 | -14.49 | -0.56% | 1.12R | 10m | market | stop-loss | mixed | mean-revert | thinChop | 41.89 | ↓123.82 | 0.1068 | 1.41 | **LOSS** |
| 204 | MRVL | 07-17 14:16 | 07-17 14:37 | 71.13 | 71.51 | 107 | 7610.91 | +40.66 | +0.53% | 1.06R | 21m | market | timeout | bearish | mean-revert | neutral | 33.66 | ↑70.92 | 0.0396 | 1.18 | **WIN** |
| 205 | KLAC | 07-17 15:24 | 07-17 15:40 | 936.01 | 932.78 | 10 | 9360.1 | -32.3 | -0.35% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 35.31 | ↑930.75 | 1.6531 | 1.58 | **LOSS** |
| 206 | RIVN | 07-17 15:33 | 07-17 15:40 | 13.37 | 13.41 | 838 | 11204.06 | +33.52 | +0.3% | 0.49R | 7m | market | trailing-stop | trend | trend | neutral | 74.55 | ↑12.99 | 0.0715 | 1.95 | **WIN** |
| 207 | ELF | 07-17 16:53 | 07-17 17:15 | 111.33 | 111 | 99 | 11021.67 | -32.67 | -0.3% | 0.6R | 22m | market | timeout | trend | trend | neutral | 74.9 | ↑110.03 | 0.2418 | 1.12 | **LOSS** |
| 208 | RIVN | 07-18 14:06 | 07-18 14:16 | 13.17 | 13.04 | 851 | 11207.67 | -110.63 | -0.99% | 1.36R | 10m | market | stop-loss | trend | trend | neutral | 73.49 | ↑12.97 | 0.0433 | 2.62 | **LOSS** |
| 209 | DELL | 07-18 14:08 | 07-18 14:15 | 128.21 | 128 | 68 | 8718.28 | -14.28 | -0.16% | 0.32R | 7m | market | trailing-stop | bearish | mean-revert | neutral | 28.66 | ↑127.76 | 0.3632 | 2.17 | **LOSS** |
| 210 | MRVL | 07-18 14:50 | 07-18 14:59 | 73.35 | 72.84 | 153 | 11222.55 | -78.03 | -0.7% | 1.4R | 9m | market | stop-loss | trend | trend | neutral | 69.18 | ↑72.26 | 0.1886 | 2.94 | **LOSS** |
| 211 | ELF | 07-18 16:07 | 07-18 16:24 | 114.14 | 114.03 | 85 | 9701.9 | -9.35 | -0.1% | 0.2R | 17m | market | stagnation | mixed | mean-revert | neutral | 45.92 | ↑113.3 | 0.4758 | 0.89 | **LOSS** |
| 212 | RIVN | 07-21 13:36 | 07-21 13:44 | 14 | 13.81 | 384 | 5376 | -72.96 | -1.36% | 1.35R | 8m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.29 | ↓14.05 | 0.0485 | 3.87 | **LOSS** |
| 213 | LRCX | 07-21 13:43 | 07-21 14:04 | 101.85 | 101.9 | 96 | 9777.6 | +4.8 | +0.05% | 0.08R | 21m | market | breakeven-stop | mixed | mean-revert | neutral | 68.45 | ↓101.94 | 0.3471 | 1.86 | **WIN** |
| 214 | MRVL | 07-21 14:04 | 07-21 14:20 | 72.92 | 72.87 | 48 | 3500.16 | -2.4 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | sustainedSell | 30.2 | ↓72.9 | -0.0984 | 1.83 | **LOSS** |
| 215 | TGT | 07-21 14:18 | 07-21 14:39 | 103.03 | 103.18 | 85 | 8757.55 | +12.75 | +0.15% | 0.3R | 21m | market | timeout | mixed | mean-revert | neutral | 44.33 | ↑102.92 | 0.0786 | 1.72 | **WIN** |
| 216 | RIVN | 07-22 13:52 | 07-22 13:54 | 13.91 | 13.7 | 376 | 5230.16 | -78.96 | -1.51% | 1.96R | 2m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 43.62 | ↓13.91 | 0.0492 | 1.05 | **LOSS** |
| 217 | TGT | 07-22 14:01 | 07-22 14:13 | 104.88 | 104.19 | 93 | 9753.84 | -64.17 | -0.66% | 1.32R | 12m | market | stop-loss | mixed | mean-revert | neutral | 61.09 | ↓104.51 | 0.4391 | 1.63 | **LOSS** |
| 218 | MRVL | 07-22 15:02 | 07-22 15:23 | 71.81 | 72.07 | 125 | 8976.25 | +32.5 | +0.36% | 0.72R | 21m | market | timeout | mixed | mean-revert | neutral | 48.57 | ↑71.46 | 0.0788 | 1.94 | **WIN** |
| 219 | RIVN | 07-23 17:51 | 07-23 18:07 | 13.96 | 13.95 | 374 | 5221.04 | -3.74 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 47.06 | ↓13.96 | 0.0189 | 1.3 | **LOSS** |
| 220 | AMAT | 07-24 13:35 | 07-24 13:54 | 187.78 | 187.36 | 45 | 8450.1 | -18.9 | -0.22% | 0.41R | 19m | market | early-reversal | mixed | mean-revert | neutral | 55.43 | ↓188 | 0.1278 | 1.22 | **LOSS** |
| 221 | CELH | 07-24 14:16 | 07-24 14:32 | 46 | 45.87 | 243 | 11178 | -31.59 | -0.28% | 0.56R | 16m | market | early-reversal | trend | trend | neutral | 73.13 | ↑45.62 | 0.0977 | 3.46 | **LOSS** |
| 222 | RIVN | 07-25 14:06 | 07-25 14:17 | 14.14 | 14.03 | 790 | 11170.6 | -86.9 | -0.78% | 1.53R | 11m | market | stop-loss | trend | trend | neutral | 73.53 | ↑13.97 | 0.0497 | 2.56 | **LOSS** |
| 223 | MRVL | 07-25 14:09 | 07-25 14:25 | 74.37 | 74.23 | 150 | 11155.5 | -21 | -0.19% | 0.38R | 16m | market | stagnation | trend | trend | neutral | 71.37 | ↑73.7 | 0.0963 | 4.06 | **LOSS** |
| 224 | ELF | 07-25 15:43 | 07-25 16:13 | 121.16 | 121.33 | 91 | 11025.56 | +15.47 | +0.14% | 0.28R | 30m | market | timeout | trend | trend | neutral | 65.11 | ↑119.64 | 0.3424 | 1 | **WIN** |
| 225 | ELF | 07-28 14:20 | 07-28 14:36 | 121.57 | 121.3 | 79 | 9604.03 | -21.33 | -0.22% | 0.41R | 16m | market | stagnation | mixed | mean-revert | neutral | 57.92 | ↓121.66 | 0.4178 | 1.9 | **LOSS** |
| 226 | MRVL | 07-29 14:08 | 07-29 14:25 | 78.31 | 78.12 | 143 | 11198.33 | -27.17 | -0.24% | 0.48R | 17m | market | early-reversal | trend | trend | neutral | 75.87 | ↑77.58 | 0.256 | 1.2 | **LOSS** |
| 227 | CELH | 07-29 14:10 | 07-29 14:31 | 47.66 | 47.98 | 234 | 11152.44 | +74.88 | +0.67% | 1.12R | 21m | market | timeout | trend | trend | neutral | 71.11 | ↑47.34 | 0.1204 | 1.33 | **WIN** |
| 228 | CELH | 07-29 15:05 | 07-29 15:10 | 48.02 | 47.54 | 168 | 8067.36 | -80.64 | -1% | 2R | 5m | market | stop-loss | bearish | mean-revert | neutral | 26.7 | ↓47.74 | 0.0338 | 1.13 | **LOSS** |
| 229 | MRVL | 07-30 13:56 | 07-30 14:12 | 83.76 | 83.36 | 101 | 8459.76 | -40.4 | -0.48% | 0.36R | 16m | market | early-reversal | mixed | mean-revert | neutral | 49.49 | ↓83.96 | 0.6195 | 1 | **LOSS** |
| 230 | ADP | 07-30 14:45 | 07-30 15:08 | 312.13 | 315.16 | 7 | 2184.91 | +21.21 | +0.97% | 1.94R | 23m | market | timeout | mixed | mean-revert | thinChop | 46.12 | ↑311.45 | 0.8057 | 1.43 | **WIN** |
| 231 | SBUX | 07-30 15:51 | 07-30 16:11 | 92.52 | 93.08 | 52 | 9714.6 | +29.12 | +0.61% | 0.97R | 20m | market | trim-profit-target | mixed | mean-revert | neutral | 44.51 | ↑92.79 | 0.1132 | 2.05 | **WIN** |
| 232 | SBUX | 07-30 15:51 | 07-30 16:12 | 92.52 | 92.95 | 53 | 9714.6 | +22.79 | +0.46% | 0.73R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 44.51 | ↑92.79 | 0.1132 | 2.05 | **WIN** |
| 233 | RIVN | 07-31 13:35 | 07-31 13:51 | 13.02 | 12.97 | 659 | 8580.18 | -32.95 | -0.38% | 0.57R | 16m | market | early-reversal | mixed | mean-revert | neutral | 47.62 | ↓13.04 | 0.0195 | 1.5 | **LOSS** |
| 234 | CELH | 07-31 14:16 | 07-31 14:35 | 47.22 | 47.19 | 207 | 9774.54 | -6.21 | -0.06% | 0.12R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 55.83 | ↑46.98 | 0.1331 | 1.38 | **LOSS** |
| 235 | MRVL | 07-31 14:41 | 07-31 14:50 | 82.4 | 81.67 | 118 | 9723.2 | -86.14 | -0.89% | 1.78R | 9m | market | stop-loss | mixed | mean-revert | neutral | 48.47 | ↓82.32 | 0.0754 | 1.34 | **LOSS** |
| 236 | LRCX | 07-31 15:49 | 07-31 16:05 | 95.06 | 94.98 | 64 | 6083.84 | -5.12 | -0.08% | 0.16R | 16m | market | stagnation | bearish | mean-revert | neutral | 44.26 | ↑93.63 | 0.1428 | 1.57 | **LOSS** |
| 237 | MRVL | 08-01 14:40 | 08-01 14:53 | 75.61 | 75.07 | 129 | 9753.69 | -69.66 | -0.71% | 1.39R | 13m | market | stop-loss | mixed | mean-revert | neutral | 56.7 | ↑74.77 | 0.27 | 1.7 | **LOSS** |
| 238 | LRCX | 08-01 16:00 | 08-01 16:21 | 96.19 | 96.32 | 116 | 11158.04 | +15.08 | +0.14% | 0.28R | 21m | market | timeout | trend | trend | neutral | 75.41 | ↑93.88 | 0.2519 | 5.51 | **WIN** |
| 239 | AMAT | 08-01 16:02 | 08-01 16:19 | 181.3 | 181.09 | 61 | 11059.3 | -12.81 | -0.12% | 0.24R | 17m | market | stagnation | trend | trend | neutral | 75.63 | ↑178.02 | 0.5052 | 1.27 | **LOSS** |
| 240 | RIVN | 08-04 13:51 | 08-04 14:04 | 12.75 | 12.64 | 766 | 9766.5 | -84.26 | -0.86% | 1.09R | 13m | market | stop-loss | mixed | mean-revert | neutral | 65.75 | ↓12.68 | 0.0874 | 0.89 | **LOSS** |
| 241 | LOW | 08-04 15:13 | 08-04 15:30 | 232.65 | 232.13 | 48 | 11167.2 | -24.96 | -0.22% | 0.44R | 17m | market | stagnation | trend | trend | neutral | 78.12 | ↑229.98 | 0.62 | 1.31 | **LOSS** |
| 242 | MRVL | 08-05 13:50 | 08-05 14:04 | 77.55 | 77.09 | 126 | 9771.3 | -57.96 | -0.59% | 1.07R | 14m | market | stop-loss | mixed | mean-revert | neutral | 73.08 | ↓77.23 | 0.3 | 1.36 | **LOSS** |
| 243 | RIVN | 08-05 15:17 | 08-05 15:31 | 12.25 | 12.25 | 631 | 7729.75 | +0 | +0% | 0R | 14m | market | breakeven-stop | mixed | mean-revert | neutral | 52.63 | ↓12.29 | 0.0134 | 1.53 | **WIN** |
| 244 | ELF | 08-06 17:29 | 08-06 17:50 | 111.45 | 111.18 | 99 | 11033.55 | -26.73 | -0.24% | 0.48R | 21m | market | timeout | trend | trend | neutral | 66.95 | ↑109.67 | 0.334 | 1.58 | **LOSS** |
| 245 | DELL | 08-07 14:01 | 08-07 14:17 | 132.3 | 131.82 | 66 | 8731.8 | -31.68 | -0.36% | 0.62R | 16m | market | early-reversal | bearish | mean-revert | neutral | 37.16 | ↓132.42 | 0.5001 | 2.07 | **LOSS** |
| 246 | RIVN | 08-07 14:01 | 08-07 14:09 | 12.08 | 12.11 | 808 | 9760.64 | +24.24 | +0.25% | 0.33R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 69.86 | ↑11.99 | 0.0574 | 1.53 | **WIN** |
| 247 | MRVL | 08-07 14:02 | 08-07 14:14 | 76.82 | 76.28 | 127 | 9756.14 | -68.58 | -0.7% | 1.4R | 12m | market | stop-loss | mixed | mean-revert | neutral | 53.65 | ↓76.85 | 0.159 | 1.86 | **LOSS** |
| 248 | SBUX | 08-07 14:05 | 08-07 14:12 | 90.21 | 89.62 | 72 | 6495.12 | -42.48 | -0.65% | 1.3R | 7m | market | stop-loss | bearish | mean-revert | neutral | 35.21 | ↓90.51 | 0.0779 | 1.33 | **LOSS** |
| 249 | ELF | 08-07 17:27 | 08-07 17:41 | 96.18 | 98.44 | 68 | 6540.24 | +153.68 | +2.35% | 4.7R | 14m | market | profit-target | mixed | mean-revert | neutral | 46.23 | ↑96.42 | 0.1035 | 1.8 | **WIN** |
| 250 | ELF | 08-07 17:57 | 08-07 18:08 | 99.45 | 98.11 | 111 | 11038.95 | -148.74 | -1.35% | 2.65R | 11m | market | stop-loss | trend | trend | neutral | 70.02 | ↑96.55 | 0.6208 | 1.39 | **LOSS** |
| 251 | MRVL | 08-08 13:34 | 08-08 13:49 | 75.73 | 76.65 | 122 | 9239.06 | +112.24 | +1.21% | 2.42R | 15m | market | profit-target | mixed | mean-revert | neutral | 51.4 | ↑75.85 | 0.0762 | 1.74 | **WIN** |
| 252 | DELL | 08-08 14:27 | 08-08 14:49 | 137.5 | 138.07 | 81 | 11137.5 | +46.17 | +0.41% | 0.82R | 22m | market | timeout | trend | trend | neutral | 70.38 | ↑136.22 | 0.4288 | 2.73 | **WIN** |
| 253 | ELF | 08-08 14:27 | 08-08 14:30 | 105.78 | 105.05 | 104 | 11001.12 | -75.92 | -0.69% | 1.28R | 3m | market | stop-loss | trend | trend | neutral | 78.31 | ↑104.06 | 0.444 | 1.92 | **LOSS** |
| 254 | CELH | 08-08 14:29 | 08-08 14:35 | 52.15 | 52.12 | 187 | 9752.05 | -5.61 | -0.06% | 0.1R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 62.17 | ↓52.49 | 0.1453 | 1.26 | **LOSS** |
| 255 | NKE | 08-11 13:40 | 08-11 13:46 | 74.21 | 73.73 | 128 | 9498.88 | -61.44 | -0.65% | 1.23R | 6m | market | stop-loss | mixed | mean-revert | neutral | 50.85 | ↓74.4 | 0.0649 | 1.64 | **LOSS** |
| 256 | DELL | 08-11 14:01 | 08-11 14:17 | 139.83 | 139.83 | 80 | 11186.4 | +0 | +0% | 0R | 16m | market | breakeven-stop | trend | trend | neutral | 74.48 | ↑138.46 | 0.3313 | 2.65 | **WIN** |
| 257 | CELH | 08-11 14:14 | 08-11 14:32 | 53.62 | 53.49 | 182 | 9758.84 | -23.66 | -0.24% | 0.4R | 18m | market | early-reversal | mixed | mean-revert | neutral | 57.32 | ↑53.31 | 0.1911 | 0.97 | **LOSS** |
| 258 | ELF | 08-11 15:48 | 08-11 16:09 | 110.86 | 111.97 | 48 | 5321.28 | +53.28 | +1% | 1.75R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 61.15 | ↑109.86 | 0.3526 | 1.36 | **WIN** |
| 259 | ELF | 08-11 16:21 | 08-11 16:29 | 111.85 | 111.97 | 47 | 5256.95 | +5.64 | +0.11% | 0.22R | 8m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 60.14 | ↑110.09 | 0.3842 | 2.06 | **WIN** |
| 260 | ELF | 08-11 17:27 | 08-11 17:42 | 112.87 | 113.19 | 54 | 6094.98 | +17.28 | +0.28% | 0.56R | 15m | market | trailing-stop | trend | trend | noisyHighBeta | 75.46 | ↑110.38 | 0.2259 | 1.91 | **WIN** |
| 261 | DELL | 08-12 14:00 | 08-12 14:19 | 140.57 | 140.49 | 69 | 9699.33 | -5.52 | -0.06% | 0.12R | 19m | market | stagnation | mixed | mean-revert | neutral | 45.94 | ↓140.9 | 0.352 | 2.22 | **LOSS** |
| 262 | NKE | 08-12 14:05 | 08-12 14:25 | 75.21 | 75.18 | 148 | 11131.08 | -4.44 | -0.04% | 0.08R | 20m | market | trailing-stop | trend | trend | neutral | 76.73 | ↑74.63 | 0.1138 | 1.19 | **LOSS** |
| 263 | ELF | 08-12 14:11 | 08-12 14:27 | 114.26 | 115.8 | 68 | 7769.68 | +104.72 | +1.35% | 1.65R | 16m | market | profit-target | mixed | mean-revert | falseBreakoutProne | 51.92 | ↑114.2 | 0.393 | 2.22 | **WIN** |
| 264 | KLAC | 08-12 14:22 | 08-12 14:48 | 925.78 | 924.7 | 12 | 11109.36 | -12.96 | -0.12% | 0.24R | 26m | market | stagnation | trend | trend | neutral | 75.02 | ↑919.31 | 2.2696 | 1.81 | **LOSS** |
| 265 | TGT | 08-12 14:25 | 08-12 14:41 | 106.99 | 106.82 | 91 | 9736.09 | -15.47 | -0.16% | 0.32R | 16m | market | stagnation | mixed | mean-revert | neutral | 37.41 | ↑106.37 | 0.396 | 2.22 | **LOSS** |
| 266 | ELF | 08-12 14:35 | 08-12 14:49 | 114.99 | 116.55 | 46 | 5289.54 | +71.76 | +1.36% | 1.43R | 14m | market | profit-target | mixed | mean-revert | noisyHighBeta | 50.52 | ↑114.69 | 0.4249 | 1.94 | **WIN** |
| 267 | ELF | 08-12 14:50 | 08-12 15:12 | 117.36 | 117.58 | 52 | 6102.72 | +11.44 | +0.19% | 0.25R | 22m | market | timeout | trend | trend | noisyHighBeta | 65.72 | ↑115.11 | 0.6192 | 1.08 | **WIN** |
| 268 | ELF | 08-12 15:19 | 08-12 15:42 | 117.08 | 117.82 | 24 | 2809.92 | +17.76 | +0.63% | 1.26R | 23m | market | timeout | mixed | mean-revert | thinChop | 54.13 | ↑115.44 | 0.5707 | 0.91 | **WIN** |
| 269 | MRVL | 08-13 13:56 | 08-13 14:10 | 78.84 | 79.1 | 32 | 2522.88 | +8.32 | +0.33% | 0.62R | 14m | market | trailing-stop | mixed | mean-revert | thinChop | 38.8 | ↑79.03 | 0.147 | 1.47 | **WIN** |
| 270 | MRVL | 08-13 14:14 | 08-13 14:26 | 79.93 | 79.44 | 140 | 11190.2 | -68.6 | -0.61% | 1.03R | 12m | market | stop-loss | trend | trend | neutral | 72.24 | ↑79.21 | 0.2012 | 2.77 | **LOSS** |
| 271 | RIVN | 08-13 14:31 | 08-13 14:47 | 12.09 | 12.08 | 807 | 9756.63 | -8.07 | -0.08% | 0.16R | 16m | market | trailing-stop | mixed | mean-revert | neutral | 60 | ↑12.02 | 0.0344 | 1.36 | **LOSS** |
| 272 | KLAC | 08-14 16:09 | 08-14 16:57 | 949.14 | 951.03 | 2 | 1898.28 | +3.78 | +0.2% | 0.4R | 48m | market | timeout | mixed | mean-revert | thinChop | 41.07 | ↑943.33 | 1.5224 | 1.12 | **WIN** |
| 273 | CELH | 08-15 14:15 | 08-15 14:30 | 57.43 | 57.36 | 194 | 11141.42 | -13.58 | -0.12% | 0.24R | 15m | market | trailing-stop | trend | trend | neutral | 78.23 | ↑56.96 | 0.1038 | 3.19 | **LOSS** |
| 274 | AMAT | 08-15 14:18 | 08-15 14:33 | 166.13 | 165.19 | 58 | 9635.54 | -54.52 | -0.57% | 0.93R | 15m | market | stop-loss | mixed | mean-revert | neutral | 49.03 | ↓165.3 | 0.1805 | 1.19 | **LOSS** |
| 275 | RIVN | 08-15 16:35 | 08-15 16:45 | 12.31 | 12.39 | 453 | 11152.86 | +36.24 | +0.65% | 1.3R | 10m | market | trim-profit-target | trend | trend | neutral | 80 | ↑12.21 | 0.0267 | 1.5 | **WIN** |
| 276 | RIVN | 08-15 16:35 | 08-15 16:49 | 12.31 | 12.37 | 453 | 11152.86 | +27.18 | +0.49% | 0.98R | 14m | market | trailing-stop | trend | trend | neutral | 80 | ↑12.21 | 0.0267 | 1.5 | **WIN** |
| 277 | ELF | 08-18 14:17 | 08-18 14:26 | 121.82 | 121.07 | 31 | 3776.42 | -23.25 | -0.62% | 1.24R | 9m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 47.92 | ↓121 | 0.7746 | 0.89 | **LOSS** |
| 278 | CELH | 08-18 14:51 | 08-18 15:08 | 59.84 | 59.75 | 163 | 9753.92 | -14.67 | -0.15% | 0.3R | 17m | market | stagnation | mixed | mean-revert | neutral | 41.2 | ↓59.73 | 0.1148 | 3.18 | **LOSS** |
| 279 | LRCX | 08-19 14:29 | 08-19 14:45 | 100.16 | 99.9 | 97 | 9715.52 | -25.22 | -0.26% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | neutral | 41.9 | ↑99.43 | 0.1332 | 1.62 | **LOSS** |
| 280 | KLAC | 08-19 14:29 | 08-19 14:47 | 884.19 | 878.5 | 8 | 7073.52 | -45.52 | -0.64% | 1.28R | 18m | market | stop-loss | bearish | mean-revert | neutral | 48.44 | ↓885.11 | 0.7826 | 4.83 | **LOSS** |
| 281 | CELH | 08-20 14:01 | 08-20 14:09 | 61.99 | 61.52 | 180 | 11158.2 | -84.6 | -0.76% | 1.38R | 8m | market | stop-loss | trend | trend | neutral | 66.96 | ↑61.24 | 0.1871 | 1.14 | **LOSS** |
| 282 | TGT | 08-20 14:50 | 08-20 14:58 | 97.59 | 96.74 | 100 | 9759 | -85 | -0.87% | 1.64R | 8m | market | stop-loss | mixed | mean-revert | neutral | 52.57 | ↑96.24 | 0.2418 | 1.37 | **LOSS** |
| 283 | TGT | 08-20 15:37 | 08-20 15:49 | 97.02 | 97.16 | 100 | 9702 | +14 | +0.14% | 0.28R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 51.97 | ↑96.33 | 0.077 | 1.88 | **WIN** |
| 284 | RIVN | 08-22 13:43 | 08-22 13:54 | 12.31 | 12.3 | 793 | 9761.83 | -7.93 | -0.08% | 0.07R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 65.45 | ↓12.31 | 0.0487 | 1.37 | **LOSS** |
| 285 | RIVN | 08-22 14:06 | 08-22 14:18 | 12.49 | 12.55 | 894 | 11166.06 | +53.64 | +0.48% | 0.57R | 12m | market | trailing-stop | trend | trend | neutral | 69.88 | ↑12.34 | 0.0451 | 1.76 | **WIN** |
| 286 | DELL | 08-22 14:09 | 08-22 14:21 | 131.3 | 130.58 | 85 | 11160.5 | -61.2 | -0.55% | 0.93R | 12m | market | trailing-stop | trend | trend | neutral | 78.02 | ↑129.69 | 0.7376 | 1.47 | **LOSS** |
| 287 | AMAT | 08-22 14:14 | 08-22 14:30 | 164.41 | 163.79 | 68 | 11179.88 | -42.16 | -0.38% | 0.76R | 16m | market | early-reversal | trend | trend | neutral | 79.18 | ↑162.47 | 0.7139 | 5.19 | **LOSS** |
| 288 | HPE | 08-22 14:18 | 08-22 14:20 | 22.33 | 22.19 | 438 | 9780.54 | -61.32 | -0.63% | 1.26R | 2m | market | stop-loss | mixed | mean-revert | neutral | 54.55 | ↑22.09 | 0.0881 | 1.67 | **LOSS** |
| 289 | MRVL | 08-22 14:19 | 08-22 14:22 | 74.03 | 73.23 | 132 | 9771.96 | -105.6 | -1.08% | 1.64R | 3m | market | stop-loss | mixed | mean-revert | neutral | 60.79 | ↑73.06 | 0.4897 | 1.04 | **LOSS** |
| 290 | CELH | 08-22 14:22 | 08-22 14:27 | 62.58 | 62.14 | 144 | 9011.52 | -63.36 | -0.7% | 1.4R | 5m | market | stop-loss | bearish | mean-revert | neutral | 39.46 | ↓62.5 | 0.1108 | 1.96 | **LOSS** |
| 291 | RIVN | 08-22 14:30 | 08-22 14:47 | 12.67 | 12.66 | 881 | 11162.27 | -8.81 | -0.08% | 0.1R | 17m | market | stagnation | trend | trend | neutral | 49.41 | ↑12.42 | 0.0485 | 2.02 | **LOSS** |
| 292 | INTU | 08-22 14:52 | 08-22 15:07 | 659.15 | 659.94 | 3 | 1977.45 | +2.37 | +0.12% | 0.24R | 15m | market | trailing-stop | mixed | mean-revert | thinChop | 51.59 | ↑652.46 | 1.7933 | 1.22 | **WIN** |
| 293 | RIVN | 08-22 14:54 | 08-22 14:59 | 12.78 | 12.7 | 874 | 11169.72 | -69.92 | -0.63% | 1.09R | 5m | market | stop-loss | trend | trend | neutral | 68.33 | ↑12.49 | 0.0391 | 1.49 | **LOSS** |
| 294 | LRCX | 08-25 13:45 | 08-25 14:06 | 100.86 | 101.3 | 96 | 9682.56 | +42.24 | +0.44% | 0.85R | 21m | market | timeout | mixed | mean-revert | neutral | 66.67 | ↑101.03 | 0.2285 | 0.95 | **WIN** |
| 295 | RIVN | 08-25 15:42 | 08-25 15:53 | 13.11 | 13.02 | 745 | 9766.95 | -67.05 | -0.69% | 1.38R | 11m | market | stop-loss | mixed | mean-revert | neutral | 62.5 | ↓13.22 | 0.0067 | 1.73 | **LOSS** |
| 296 | RIVN | 08-26 14:07 | 08-26 14:11 | 13.1 | 13.01 | 191 | 2502.1 | -17.19 | -0.69% | 1.28R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 47.17 | ↓13.1 | 0.0064 | 1.14 | **LOSS** |
| 297 | RIVN | 08-27 14:12 | 08-27 14:27 | 13.48 | 13.4 | 827 | 11147.96 | -66.16 | -0.59% | 1.18R | 15m | market | stop-loss | trend | trend | neutral | 73.91 | ↑13.36 | 0.0287 | 1.03 | **LOSS** |
| 298 | ELF | 08-27 14:31 | 08-27 14:54 | 121.14 | 121.37 | 91 | 11023.74 | +20.93 | +0.19% | 0.31R | 23m | market | timeout | trend | trend | neutral | 79.97 | ↑119.03 | 1.279 | 1.99 | **WIN** |
| 299 | ELF | 08-27 15:11 | 08-27 15:30 | 122.48 | 122.28 | 90 | 11023.2 | -18 | -0.16% | 0.32R | 19m | market | stagnation | trend | trend | neutral | 73.92 | ↑119.85 | 0.9825 | 1.18 | **LOSS** |
| 300 | ELF | 08-27 15:59 | 08-27 16:16 | 122.88 | 122.07 | 90 | 11059.2 | -72.9 | -0.66% | 1.22R | 17m | market | early-reversal | trend | trend | neutral | 67.23 | ↑120.44 | 0.8068 | 2.01 | **LOSS** |
| 301 | INTU | 08-28 13:37 | 08-28 13:53 | 663.23 | 662.89 | 14 | 9285.22 | -4.76 | -0.05% | 0.1R | 16m | market | stagnation | mixed | mean-revert | neutral | 51.24 | ↓664.56 | 0.6091 | 1.6 | **LOSS** |
| 302 | DELL | 08-28 13:47 | 08-28 13:56 | 134.46 | 133.56 | 72 | 9681.12 | -64.8 | -0.67% | 1.16R | 9m | market | stop-loss | mixed | mean-revert | neutral | 47.53 | ↓134.48 | 0.4798 | 1.15 | **LOSS** |
| 303 | MRVL | 08-29 14:04 | 08-29 14:22 | 64.95 | 64.72 | 150 | 9742.5 | -34.5 | -0.35% | 0.33R | 18m | market | stagnation | mixed | mean-revert | neutral | 58.24 | ↑64.36 | -0.1528 | 1.3 | **LOSS** |
| 304 | ELF | 08-29 14:13 | 08-29 14:26 | 131.28 | 130.14 | 74 | 9714.72 | -84.36 | -0.87% | 1.14R | 13m | market | stop-loss | mixed | mean-revert | neutral | 65.78 | ↓130.72 | 0.5252 | 2.45 | **LOSS** |
| 305 | CELH | 08-29 14:30 | 08-29 14:40 | 63.01 | 63.04 | 154 | 9703.54 | +4.62 | +0.05% | 0.08R | 10m | market | trailing-stop | mixed | mean-revert | neutral | 59.8 | ↑62.31 | 0.1791 | 3.45 | **WIN** |
| 306 | RIVN | 09-02 17:38 | 09-02 17:54 | 13.53 | 13.52 | 720 | 9741.6 | -7.2 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | neutral | 54.76 | ↑13.37 | 0.0194 | 1.66 | **LOSS** |
| 307 | RIVN | 09-03 13:52 | 09-03 14:04 | 14.17 | 14.49 | 688 | 9748.96 | +220.16 | +2.26% | 2.69R | 12m | market | profit-target | mixed | mean-revert | neutral | 64.65 | ↑14.11 | 0.0828 | 1.21 | **WIN** |
| 308 | RIVN | 09-03 14:05 | 09-03 14:13 | 14.51 | 14.37 | 769 | 11158.19 | -107.66 | -0.96% | 1.16R | 8m | market | stop-loss | trend | trend | neutral | 73.58 | ↑14.22 | 0.1097 | 1.56 | **LOSS** |
| 309 | RIVN | 09-03 14:41 | 09-03 14:46 | 14.75 | 14.75 | 756 | 11151 | +0 | +0% | 0R | 5m | market | trailing-stop | trend | trend | neutral | 68.29 | ↑14.41 | 0.0622 | 6.51 | **WIN** |
| 310 | ELF | 09-03 17:37 | 09-03 18:00 | 129.38 | 129.5 | 22 | 2846.36 | +2.64 | +0.09% | 0.18R | 23m | market | timeout | mixed | mean-revert | thinChop | 65.91 | ↑128.99 | 0.3231 | 1.24 | **WIN** |
| 311 | HPE | 09-04 14:54 | 09-04 15:10 | 24.09 | 24.04 | 464 | 11177.76 | -23.2 | -0.21% | 0.38R | 16m | market | stagnation | trend | trend | neutral | 73.61 | ↑23.56 | 0.0805 | 1.47 | **LOSS** |
| 312 | LRCX | 09-05 13:45 | 09-05 14:01 | 102.1 | 101.91 | 84 | 8576.4 | -15.96 | -0.19% | 0.38R | 16m | market | stagnation | mixed | mean-revert | neutral | 51.47 | ↓102.15 | 0.4363 | 0.98 | **LOSS** |
| 313 | MRVL | 09-05 13:45 | 09-05 13:50 | 64.1 | 64.18 | 75 | 4807.5 | +6 | +0.12% | 0.1R | 5m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 47.17 | ↓64.15 | 0.0305 | 0.88 | **WIN** |
| 314 | DELL | 09-05 14:00 | 09-05 14:08 | 126.77 | 126.04 | 51 | 6465.27 | -37.23 | -0.58% | 1.16R | 8m | market | stop-loss | mixed | mean-revert | neutral | 22.02 | ↓127.57 | -0.1143 | 1.67 | **LOSS** |
| 315 | RIVN | 09-05 14:00 | 09-05 14:05 | 14.32 | 14.33 | 375 | 5370 | +3.75 | +0.07% | 0.06R | 5m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 56.92 | ↑14.15 | 0.1215 | 2.87 | **WIN** |
| 316 | TXN | 09-05 14:01 | 09-05 14:10 | 189.13 | 187.91 | 59 | 11158.67 | -71.98 | -0.65% | 1.3R | 9m | market | stop-loss | trend | trend | neutral | 69.67 | ↓187.66 | 0.2939 | 3.89 | **LOSS** |
| 317 | ELF | 09-05 14:20 | 09-05 14:36 | 137.37 | 136.28 | 70 | 9615.9 | -76.3 | -0.79% | 1.52R | 16m | market | stop-loss | mixed | mean-revert | neutral | 44.07 | ↓137.21 | 0.6054 | 1.31 | **LOSS** |
| 318 | RIVN | 09-05 14:36 | 09-05 14:50 | 14.34 | 14.22 | 374 | 5363.16 | -44.88 | -0.84% | 0.75R | 14m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 59.23 | ↓14.21 | 0.044 | 1.7 | **LOSS** |
| 319 | RIVN | 09-05 15:48 | 09-05 16:04 | 14.33 | 14.29 | 537 | 7695.21 | -21.48 | -0.28% | 0.47R | 16m | market | early-reversal | mixed | mean-revert | falseBreakoutProne | 45.68 | ↑14.24 | 0.0163 | 1.44 | **LOSS** |
| 320 | IBM | 09-08 14:00 | 09-08 14:19 | 251.21 | 251.3 | 44 | 11053.24 | +3.96 | +0.04% | 0.08R | 19m | market | breakeven-stop | trend | trend | neutral | 76.59 | ↑248.96 | 0.5685 | 1.38 | **WIN** |
| 321 | KLAC | 09-09 14:34 | 09-09 15:00 | 912.99 | 914.55 | 10 | 9129.9 | +15.6 | +0.17% | 0.34R | 26m | market | timeout | mixed | mean-revert | neutral | 51.18 | ↑914.09 | 1.6229 | 1.26 | **WIN** |
| 322 | AMAT | 09-10 13:38 | 09-10 13:41 | 164.46 | 163.16 | 59 | 9703.14 | -76.7 | -0.79% | 1.58R | 3m | market | stop-loss | mixed | mean-revert | neutral | 64.09 | ↓164.65 | 0.3622 | 0.9 | **LOSS** |
| 323 | MRVL | 09-10 13:40 | 09-10 13:54 | 67.8 | 67.28 | 144 | 9763.2 | -74.88 | -0.77% | 0.72R | 14m | market | stop-loss | mixed | mean-revert | neutral | 64.89 | ↓68.04 | 0.303 | 0.95 | **LOSS** |
| 324 | DELL | 09-10 13:50 | 09-10 13:58 | 124.56 | 124.57 | 52 | 6477.12 | +0.52 | +0.01% | 0.02R | 8m | market | trailing-stop | bearish | mean-revert | neutral | 44.96 | ↓124.92 | 0.708 | 0.85 | **WIN** |
| 325 | RIVN | 09-10 15:20 | 09-10 15:29 | 13.87 | 13.79 | 345 | 4785.15 | -27.6 | -0.58% | 1.16R | 9m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 45.45 | ↓13.86 | 0.0101 | 1.04 | **LOSS** |
| 326 | CELH | 09-10 15:53 | 09-10 16:17 | 56.13 | 56.39 | 173 | 9710.49 | +44.98 | +0.46% | 0.92R | 24m | market | timeout | mixed | mean-revert | neutral | 49.71 | ↑55.87 | 0.1132 | 2.17 | **WIN** |
| 327 | DELL | 09-11 14:04 | 09-11 14:25 | 127.23 | 127.67 | 87 | 11069.01 | +38.28 | +0.35% | 0.7R | 21m | market | timeout | trend | trend | neutral | 71.56 | ↑126.38 | 0.3449 | 2.7 | **WIN** |
| 328 | TGT | 09-11 14:06 | 09-11 14:22 | 91.77 | 91.54 | 100 | 9177 | -23 | -0.25% | 0.5R | 16m | market | early-reversal | mixed | mean-revert | neutral | 59.93 | ↓91.67 | 0.2153 | 1.24 | **LOSS** |
| 329 | MRVL | 09-11 14:10 | 09-11 14:31 | 67.64 | 67.7 | 142 | 9604.88 | +8.52 | +0.09% | 0.18R | 21m | market | timeout | mixed | mean-revert | neutral | 36.23 | ↑67.6 | 0.0866 | 1.5 | **WIN** |
| 330 | AMAT | 09-11 14:11 | 09-11 14:27 | 169.54 | 169.11 | 57 | 9663.78 | -24.51 | -0.25% | 0.5R | 16m | market | early-reversal | mixed | mean-revert | neutral | 45.89 | ↑168.75 | 0.5139 | 2.35 | **LOSS** |
| 331 | DELL | 09-11 14:42 | 09-11 14:47 | 128.77 | 127.79 | 86 | 11074.22 | -84.28 | -0.76% | 1.52R | 5m | market | stop-loss | trend | trend | neutral | 70.41 | ↑127.16 | 0.3304 | 1.23 | **LOSS** |
| 332 | RIVN | 09-11 15:03 | 09-11 15:19 | 14.5 | 14.47 | 364 | 5278 | -10.92 | -0.21% | 0.42R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 30.77 | ↑14.41 | 0.0057 | 0.91 | **LOSS** |
| 333 | CELH | 09-11 15:33 | 09-11 15:56 | 57.59 | 57.94 | 169 | 9732.71 | +59.15 | +0.61% | 1.22R | 23m | market | timeout | mixed | mean-revert | neutral | 56.3 | ↑57.54 | 0.0759 | 2.07 | **WIN** |
| 334 | LRCX | 09-12 13:42 | 09-12 13:50 | 116.67 | 116.89 | 83 | 9683.61 | +18.26 | +0.19% | 0.23R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 66.23 | ↑116.67 | 0.3574 | 1.15 | **WIN** |
| 335 | MRVL | 09-15 14:02 | 09-15 14:23 | 67.2 | 67.61 | 43 | 2889.6 | +17.63 | +0.61% | 1.22R | 21m | market | timeout | mixed | mean-revert | thinChop | 61.31 | ↑66.98 | 0.0973 | 0.87 | **WIN** |
| 336 | TXN | 09-15 14:06 | 09-15 14:22 | 177.57 | 177.33 | 15 | 2663.55 | -3.6 | -0.14% | 0.28R | 16m | market | stagnation | mixed | mean-revert | thinChop | 43.37 | ↑176.69 | -0.101 | 2.32 | **LOSS** |
| 337 | ELF | 09-15 14:23 | 09-15 14:46 | 139.94 | 141.31 | 79 | 11055.26 | +108.23 | +0.98% | 1.29R | 23m | market | timeout | trend | trend | neutral | 78.38 | ↑137.24 | 0.936 | 1.19 | **WIN** |
| 338 | ELF | 09-15 15:14 | 09-15 15:35 | 141.62 | 142.42 | 68 | 9630.16 | +54.4 | +0.56% | 1.12R | 21m | market | timeout | mixed | mean-revert | neutral | 62.22 | ↑138.7 | 0.7757 | 1.04 | **WIN** |
| 339 | RIVN | 09-15 17:30 | 09-15 17:48 | 13.74 | 13.73 | 446 | 6128.04 | -4.46 | -0.07% | 0.14R | 18m | market | stagnation | trend | trend | noisyHighBeta | 64.58 | ↑13.59 | 0.0144 | 4.79 | **LOSS** |
| 340 | RIVN | 09-16 14:02 | 09-16 14:08 | 14.11 | 13.98 | 380 | 5361.8 | -49.4 | -0.92% | 0.84R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 65.44 | ↓14.01 | 0.0809 | 0.94 | **LOSS** |
| 341 | DELL | 09-17 14:04 | 09-17 14:05 | 132.04 | 130.99 | 74 | 9770.96 | -77.7 | -0.8% | 1.36R | 1m | market | stop-loss | mixed | mean-revert | neutral | 55.21 | ↓131.21 | 0.771 | 0.92 | **LOSS** |
| 342 | ELF | 09-17 14:10 | 09-17 14:20 | 149.44 | 149.22 | 61 | 9115.84 | -13.42 | -0.15% | 0.28R | 10m | market | trailing-stop | bearish | mean-revert | neutral | 30.63 | ↓149.38 | 0.9213 | 2.46 | **LOSS** |
| 343 | ELF | 09-17 14:24 | 09-17 14:29 | 149.42 | 148.34 | 65 | 9712.3 | -70.2 | -0.72% | 1.44R | 5m | market | stop-loss | mixed | mean-revert | neutral | 33.56 | ↓149.45 | 0.3647 | 1.75 | **LOSS** |
| 344 | CELH | 09-17 15:28 | 09-17 15:43 | 56.69 | 57 | 86 | 9750.68 | +26.66 | +0.55% | 1.1R | 15m | market | trim-profit-target | mixed | mean-revert | neutral | 55.19 | ↑56.08 | 0.1748 | 1.37 | **WIN** |
| 345 | CELH | 09-17 15:28 | 09-17 15:49 | 56.69 | 57.01 | 86 | 9750.68 | +27.52 | +0.56% | 1.12R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 55.19 | ↑56.08 | 0.1748 | 1.37 | **WIN** |
| 346 | MRVL | 09-17 15:48 | 09-17 15:53 | 71.61 | 71.16 | 136 | 9738.96 | -61.2 | -0.63% | 1.26R | 5m | market | stop-loss | mixed | mean-revert | neutral | 56.64 | ↑70.77 | 0.0864 | 1.61 | **LOSS** |
| 347 | AMAT | 09-18 13:56 | 09-18 14:17 | 186.7 | 189.08 | 52 | 9708.4 | +123.76 | +1.27% | 1.98R | 21m | market | profit-target | mixed | mean-revert | neutral | 44.83 | ↑186.54 | 1.2067 | 1.32 | **WIN** |
| 348 | LRCX | 09-18 13:56 | 09-18 14:12 | 126.29 | 127.38 | 33 | 8461.43 | +35.97 | +0.86% | 1.59R | 16m | market | trim-profit-target | bearish | mean-revert | neutral | 31.37 | ↑126.16 | 0.6069 | 1.76 | **WIN** |
| 349 | LRCX | 09-18 13:56 | 09-18 14:16 | 126.29 | 127.24 | 34 | 8461.43 | +32.3 | +0.75% | 1.39R | 20m | market | trailing-stop | bearish | mean-revert | neutral | 31.37 | ↑126.16 | 0.6069 | 1.76 | **WIN** |
| 350 | MRVL | 09-18 17:23 | 09-18 17:44 | 74.56 | 74.8 | 131 | 9767.36 | +31.44 | +0.32% | 0.64R | 21m | market | timeout | mixed | mean-revert | neutral | 39.47 | ↑74.29 | 0.0552 | 2.68 | **WIN** |
| 351 | MRVL | 09-19 13:56 | 09-19 14:01 | 74.85 | 74.4 | 33 | 2470.05 | -14.85 | -0.6% | 1.11R | 5m | market | stop-loss | mixed | mean-revert | thinChop | 43.08 | ↓74.96 | 0.0937 | 1.71 | **LOSS** |
| 352 | SBUX | 09-19 14:07 | 09-19 14:28 | 84.3 | 84.74 | 132 | 11127.6 | +58.08 | +0.52% | 1.04R | 21m | market | timeout | trend | trend | neutral | 79.79 | ↑83.77 | 0.1116 | 1.18 | **WIN** |
| 353 | DELL | 09-19 14:45 | 09-19 15:09 | 133.19 | 132.98 | 21 | 2796.99 | -4.41 | -0.16% | 0.32R | 24m | market | stagnation | mixed | mean-revert | thinChop | 40.85 | ↓133.14 | 0.1102 | 0.89 | **LOSS** |
| 354 | HPE | 09-22 13:55 | 09-22 14:06 | 25.11 | 25.25 | 190 | 9566.91 | +26.6 | +0.56% | 1.12R | 11m | market | trim-profit-target | mixed | mean-revert | neutral | 63.37 | ↑25.06 | 0.0311 | 2.98 | **WIN** |
| 355 | HPE | 09-22 13:55 | 09-22 14:09 | 25.11 | 25.18 | 191 | 9566.91 | +13.37 | +0.28% | 0.56R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 63.37 | ↑25.06 | 0.0311 | 2.98 | **WIN** |
| 356 | KLAC | 09-22 14:00 | 09-22 14:13 | 1062.38 | 1055.75 | 10 | 10623.8 | -66.3 | -0.62% | 1.24R | 13m | market | stop-loss | trend | trend | neutral | 73.6 | ↓1056.91 | 3.1332 | 1.82 | **LOSS** |
| 357 | IBM | 09-22 14:00 | 09-22 14:21 | 268.61 | 269.86 | 36 | 9669.96 | +45 | +0.47% | 0.94R | 21m | market | timeout | mixed | mean-revert | neutral | 63.25 | ↑268.49 | 0.5382 | 3.8 | **WIN** |
| 358 | RIVN | 09-22 14:21 | 09-22 14:28 | 14.82 | 14.86 | 413 | 6120.66 | +16.52 | +0.27% | 0.5R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 70.31 | ↑14.54 | 0.0486 | 1.18 | **WIN** |
| 359 | KLAC | 09-22 15:14 | 09-22 15:33 | 1064.79 | 1061.98 | 10 | 10647.9 | -28.1 | -0.26% | 0.52R | 19m | market | early-reversal | trend | trend | neutral | 65.11 | ↑1058.32 | 2.5813 | 1.5 | **LOSS** |
| 360 | KLAC | 09-22 16:21 | 09-22 16:38 | 1071.2 | 1067.32 | 10 | 10712 | -38.8 | -0.36% | 0.65R | 17m | market | early-reversal | trend | trend | neutral | 76.91 | ↑1060.22 | 3.5612 | 1.14 | **LOSS** |
| 361 | AMAT | 09-23 14:01 | 09-23 14:22 | 202.84 | 202.68 | 48 | 9736.32 | -7.68 | -0.08% | 0.16R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 59.15 | ↑201.8 | 0.6892 | 2.29 | **LOSS** |
| 362 | MRVL | 09-23 14:09 | 09-23 14:16 | 75.74 | 75.76 | 147 | 11133.78 | +2.94 | +0.03% | 0.06R | 7m | market | breakeven-stop | trend | trend | neutral | 77.02 | ↑74.91 | 0.1876 | 2.45 | **WIN** |
| 363 | RIVN | 09-23 14:11 | 09-23 14:15 | 15.36 | 15.25 | 182 | 2795.52 | -20.02 | -0.72% | 1.22R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 36.76 | ↓15.29 | 0.0305 | 0.86 | **LOSS** |
| 364 | CELH | 09-23 16:24 | 09-23 16:40 | 52.1 | 52.01 | 214 | 11149.4 | -19.26 | -0.17% | 0.34R | 16m | market | stagnation | trend | trend | neutral | 76.36 | ↑51.31 | 0.1388 | 1.24 | **LOSS** |
| 365 | MRVL | 09-24 13:52 | 09-24 14:01 | 77.57 | 77.56 | 114 | 8842.98 | -1.14 | -0.01% | 0.01R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 62.45 | ↓77.51 | 0.5868 | 1.17 | **LOSS** |
| 366 | AMAT | 09-24 14:13 | 09-24 14:29 | 202.65 | 202.12 | 55 | 11145.75 | -29.15 | -0.26% | 0.52R | 16m | market | early-reversal | trend | trend | neutral | 69.75 | ↑199.88 | 0.5342 | 1.19 | **LOSS** |
| 367 | TXN | 09-24 14:21 | 09-24 14:37 | 183.72 | 183.62 | 50 | 9186 | -5 | -0.05% | 0.1R | 16m | market | stagnation | mixed | mean-revert | neutral | 50.64 | ↑183.36 | 0.3685 | 1.7 | **LOSS** |
| 368 | RIVN | 09-24 14:37 | 09-24 14:58 | 15.41 | 15.52 | 313 | 4823.33 | +34.43 | +0.71% | 1.31R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 52.33 | ↑15.21 | 0.0517 | 1.57 | **WIN** |
| 369 | MRVL | 09-24 17:47 | 09-24 17:56 | 80.63 | 81.07 | 36 | 2902.68 | +15.84 | +0.55% | 0.51R | 9m | market | trailing-stop | mixed | mean-revert | thinChop | 61.23 | ↑78.38 | 0.4227 | 1.11 | **WIN** |
| 370 | MRVL | 09-24 17:59 | 09-24 18:09 | 81.52 | 80.88 | 137 | 11168.24 | -87.68 | -0.79% | 1.03R | 10m | market | stop-loss | trend | trend | neutral | 56.25 | ↑78.48 | 0.3485 | 1.44 | **LOSS** |
| 371 | IBM | 09-25 14:41 | 09-25 14:45 | 281.17 | 279.17 | 39 | 10965.63 | -78 | -0.71% | 1.42R | 4m | market | stop-loss | trend | trend | neutral | 73.58 | ↑276.3 | 1.0869 | 1.28 | **LOSS** |
| 372 | IBM | 09-25 15:00 | 09-25 15:16 | 283.02 | 282.41 | 39 | 11037.78 | -23.79 | -0.22% | 0.44R | 16m | market | stagnation | trend | trend | neutral | 71.57 | ↑277.47 | 0.8632 | 1.36 | **LOSS** |
| 373 | RIVN | 09-25 15:54 | 09-25 16:10 | 15.91 | 15.8 | 267 | 4247.97 | -29.37 | -0.69% | 1.38R | 16m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 49.06 | ↑15.61 | 0.0475 | 1.62 | **LOSS** |
| 374 | MRVL | 09-25 15:55 | 09-25 16:11 | 82.81 | 82.63 | 134 | 11096.54 | -24.12 | -0.22% | 0.24R | 16m | market | stagnation | trend | trend | neutral | 73.43 | ↑79 | 0.7673 | 1.01 | **LOSS** |
| 375 | MRVL | 09-25 16:50 | 09-25 17:02 | 83.98 | 83.94 | 116 | 9741.68 | -4.64 | -0.05% | 0.07R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 50.21 | ↑80.18 | 0.2208 | 1.33 | **LOSS** |
| 376 | ELF | 09-26 13:54 | 09-26 14:02 | 131.61 | 131 | 73 | 9607.53 | -44.53 | -0.46% | 0.88R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 63.24 | ↓131.34 | 0.453 | 1.91 | **LOSS** |
| 377 | RIVN | 09-26 14:00 | 09-26 14:01 | 16.16 | 15.98 | 379 | 6124.64 | -68.22 | -1.11% | 1.68R | 1m | market | stop-loss | trend | trend | noisyHighBeta | 64.44 | ↓16 | 0.0509 | 1.83 | **LOSS** |
| 378 | RIVN | 09-26 14:02 | 09-26 14:06 | 15.97 | 15.83 | 488 | 7793.36 | -68.32 | -0.88% | 1.06R | 4m | market | stop-loss | mixed | mean-revert | falseBreakoutProne | 43.97 | ↓16 | 0.0345 | 1.39 | **LOSS** |
| 379 | MRVL | 09-26 14:03 | 09-26 14:06 | 83.12 | 82.22 | 53 | 4405.36 | -47.7 | -1.08% | 1.26R | 3m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 41.2 | ↓82.85 | 0.0926 | 1.5 | **LOSS** |
| 380 | SBUX | 09-29 13:36 | 09-29 13:57 | 83.81 | 84.8 | 116 | 9721.96 | +114.84 | +1.18% | 1.97R | 21m | market | profit-target | mixed | mean-revert | neutral | 63.19 | ↑83.93 | 0.186 | 7.01 | **WIN** |
| 381 | HPE | 09-29 13:46 | 09-29 14:05 | 24.52 | 24.5 | 308 | 7552.16 | -6.16 | -0.08% | 0.13R | 19m | market | stagnation | bearish | mean-revert | neutral | 48.18 | ↓24.59 | 0.1302 | 1.32 | **LOSS** |
| 382 | SBUX | 09-29 14:06 | 09-29 14:22 | 85.27 | 85.07 | 131 | 11170.37 | -26.2 | -0.23% | 0.46R | 16m | market | early-reversal | trend | trend | neutral | 65.79 | ↑84.28 | 0.2133 | 1.3 | **LOSS** |
| 383 | RIVN | 09-29 14:20 | 09-29 14:37 | 15.21 | 15.19 | 301 | 4578.21 | -6.02 | -0.13% | 0.22R | 17m | market | stagnation | mixed | mean-revert | noisyHighBeta | 43.42 | ↓15.22 | 0.0105 | 1.36 | **LOSS** |
| 384 | MRVL | 09-29 14:32 | 09-29 14:42 | 84.29 | 83.62 | 42 | 3540.18 | -28.14 | -0.79% | 1.58R | 10m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 28.44 | ↓84.29 | 0.0396 | 1.57 | **LOSS** |
| 385 | AMAT | 09-29 14:43 | 09-29 14:48 | 210.28 | 208.92 | 53 | 11144.84 | -72.08 | -0.65% | 1.3R | 5m | market | stop-loss | trend | trend | neutral | 73.95 | ↑207.31 | 0.4295 | 1.65 | **LOSS** |
| 386 | IBM | 09-30 14:03 | 09-30 14:19 | 284.09 | 283.74 | 39 | 11079.51 | -13.65 | -0.12% | 0.24R | 16m | market | stagnation | trend | trend | neutral | 79.1 | ↑282.22 | 0.522 | 2.02 | **LOSS** |
| 387 | MRVL | 09-30 14:09 | 09-30 14:27 | 83.45 | 83.44 | 62 | 5173.9 | -0.62 | -0.01% | 0.02R | 18m | market | trailing-stop | bearish | mean-revert | falseBreakoutProne | 54.48 | ↑83.08 | 0.2288 | 1.14 | **LOSS** |
| 388 | ELF | 09-30 14:10 | 09-30 14:24 | 135.51 | 135.51 | 57 | 7724.07 | +0 | +0% | 0R | 14m | market | trailing-stop | mixed | mean-revert | falseBreakoutProne | 55.92 | ↓135.65 | 0.7748 | 1.47 | **WIN** |
| 389 | AMAT | 09-30 14:18 | 09-30 14:39 | 209.22 | 209.53 | 53 | 11088.66 | +16.43 | +0.15% | 0.3R | 21m | market | timeout | trend | trend | neutral | 74.9 | ↑206.64 | 0.6355 | 3.06 | **WIN** |
| 390 | NKE | 10-01 13:43 | 10-01 13:52 | 72.49 | 71.88 | 91 | 6596.59 | -55.51 | -0.84% | 0.42R | 9m | market | stop-loss | mixed | mean-revert | neutral | 72.16 | ↓72.99 | 0.539 | 1.13 | **LOSS** |
| 391 | DELL | 10-01 13:48 | 10-01 13:57 | 146.08 | 145.94 | 60 | 8764.8 | -8.4 | -0.1% | 0.11R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 74.6 | ↑145.61 | 1.391 | 0.95 | **LOSS** |
| 392 | RIVN | 10-01 13:49 | 10-01 14:05 | 14.94 | 14.88 | 195 | 2913.3 | -11.7 | -0.4% | 0.5R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 58.82 | ↓14.91 | 0.0532 | 1.1 | **LOSS** |
| 393 | MRVL | 10-01 14:17 | 10-01 14:38 | 81.95 | 82.61 | 60 | 4917 | +39.6 | +0.81% | 1.45R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 29.34 | ↑81.96 | 0.0233 | 1.54 | **WIN** |
| 394 | LRCX | 10-01 14:34 | 10-01 14:52 | 136.29 | 136.03 | 82 | 11175.78 | -21.32 | -0.19% | 0.38R | 18m | market | stagnation | trend | trend | neutral | 75.14 | ↑134.07 | 0.4774 | 1.14 | **LOSS** |
| 395 | KLAC | 10-01 16:03 | 10-01 16:20 | 1112.02 | 1110.7 | 10 | 11120.2 | -13.2 | -0.12% | 0.24R | 17m | market | stagnation | breakout | trend | neutral | 78.01 | ↑1089.7 | 4.8037 | 1.23 | **LOSS** |
| 396 | MRVL | 10-02 14:02 | 10-02 14:14 | 85.9 | 86.09 | 113 | 9706.7 | +21.47 | +0.22% | 0.32R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 70.85 | ↑85.47 | 0.3206 | 1.64 | **WIN** |
| 397 | MRVL | 10-02 14:19 | 10-02 14:32 | 85.94 | 85.86 | 113 | 9711.22 | -9.04 | -0.09% | 0.15R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 47.86 | ↑85.65 | 0.1727 | 0.9 | **LOSS** |
| 398 | ELF | 10-02 17:38 | 10-02 18:01 | 136.19 | 136.22 | 81 | 11031.39 | +2.43 | +0.02% | 0.04R | 23m | market | timeout | trend | trend | neutral | 79.25 | ↑133.93 | 0.5036 | 1.58 | **WIN** |
| 399 | CELH | 10-03 14:06 | 10-03 14:20 | 60.23 | 60.28 | 129 | 7769.67 | +6.45 | +0.08% | 0.16R | 14m | market | trailing-stop | bearish | mean-revert | neutral | 28.57 | ↓60.25 | 0.1499 | 0.9 | **WIN** |
| 400 | ELF | 10-03 17:51 | 10-03 18:16 | 136.71 | 136.82 | 59 | 8065.89 | +6.49 | +0.08% | 0.16R | 25m | market | timeout | bearish | mean-revert | neutral | 30.09 | ↑136.56 | 0.2181 | 1.54 | **WIN** |
| 401 | DELL | 10-06 13:54 | 10-06 13:58 | 147.13 | 145.77 | 52 | 7650.76 | -70.72 | -0.92% | 1.16R | 4m | market | stop-loss | bearish | mean-revert | neutral | 47.81 | ↓147.68 | 1.023 | 0.91 | **LOSS** |
| 402 | AMAT | 10-06 13:57 | 10-06 14:15 | 224.76 | 224.62 | 34 | 7641.84 | -4.76 | -0.06% | 0.11R | 18m | market | stagnation | bearish | mean-revert | neutral | 43.89 | ↓225.05 | 0.982 | 0.97 | **LOSS** |
| 403 | MRVL | 10-07 13:49 | 10-07 13:53 | 90.14 | 89.38 | 32 | 2884.48 | -24.32 | -0.84% | 1.11R | 4m | market | stop-loss | mixed | mean-revert | thinChop | 57.85 | ↓90.01 | 0.3641 | 1.41 | **LOSS** |
| 404 | HPE | 10-07 13:51 | 10-07 14:02 | 25.65 | 25.39 | 368 | 9439.2 | -95.68 | -1.01% | 1.2R | 11m | market | stop-loss | mixed | mean-revert | neutral | 48.75 | ↓25.73 | 0.1495 | 3.43 | **LOSS** |
| 405 | IBM | 10-07 13:51 | 10-07 13:57 | 298.22 | 296.53 | 30 | 8946.6 | -50.7 | -0.57% | 0.98R | 6m | market | stop-loss | mixed | mean-revert | neutral | 55.8 | ↓298.07 | 1.573 | 0.86 | **LOSS** |
| 406 | ELF | 10-07 15:06 | 10-07 15:08 | 140.3 | 139.48 | 53 | 7435.9 | -43.46 | -0.58% | 1.16R | 2m | market | stop-loss | bearish | mean-revert | neutral | 40.24 | ↓140.68 | 0.291 | 1.65 | **LOSS** |
| 407 | CELH | 10-07 17:09 | 10-07 17:25 | 60.41 | 60.28 | 185 | 11175.85 | -24.05 | -0.22% | 0.44R | 16m | market | stagnation | trend | trend | neutral | 74.74 | ↑59.61 | 0.1214 | 1.34 | **LOSS** |
| 408 | CELH | 10-08 13:59 | 10-08 14:19 | 61.44 | 61.76 | 79 | 9768.96 | +25.28 | +0.52% | 0.81R | 20m | market | trim-profit-target | mixed | mean-revert | neutral | 39.13 | ↑61.66 | 0.0873 | 3.1 | **WIN** |
| 409 | CELH | 10-08 13:59 | 10-08 14:22 | 61.44 | 61.78 | 80 | 9768.96 | +27.2 | +0.55% | 0.86R | 23m | market | timeout | mixed | mean-revert | neutral | 39.13 | ↑61.66 | 0.0873 | 3.1 | **WIN** |
| 410 | TGT | 10-08 14:02 | 10-08 14:21 | 90.52 | 90.34 | 123 | 11133.96 | -22.14 | -0.2% | 0.4R | 19m | market | stagnation | trend | trend | neutral | 68.8 | ↑90.03 | 0.1261 | 1.68 | **LOSS** |
| 411 | DELL | 10-08 14:16 | 10-08 14:32 | 163.4 | 162.77 | 55 | 8987 | -34.65 | -0.39% | 0.37R | 16m | market | early-reversal | bearish | mean-revert | neutral | 51.75 | ↑159.99 | 1.3489 | 1.23 | **LOSS** |
| 412 | HPE | 10-08 14:25 | 10-08 14:46 | 25.9 | 25.98 | 431 | 11162.9 | +34.48 | +0.31% | 0.58R | 21m | market | timeout | trend | trend | neutral | 68.69 | ↑25.49 | 0.0905 | 2.86 | **WIN** |
| 413 | CELH | 10-08 14:43 | 10-08 15:04 | 61.73 | 61.87 | 151 | 9321.23 | +21.14 | +0.23% | 0.46R | 21m | market | timeout | mixed | mean-revert | neutral | 52.08 | ↑61.71 | 0.0538 | 0.97 | **WIN** |
| 414 | HPE | 10-10 13:32 | 10-10 13:36 | 26.16 | 25.97 | 374 | 9783.84 | -71.06 | -0.73% | 1.46R | 4m | market | stop-loss | mixed | mean-revert | neutral | 44.94 | ↓26.23 | 0.0307 | 1.81 | **LOSS** |
| 415 | CELH | 10-10 13:37 | 10-10 13:42 | 64.13 | 63.58 | 152 | 9747.76 | -83.6 | -0.86% | 1.1R | 5m | market | stop-loss | mixed | mean-revert | neutral | 55.29 | ↓64.29 | 0.1701 | 0.88 | **LOSS** |
| 416 | MRVL | 10-10 14:42 | 10-10 14:58 | 93.45 | 92.15 | 104 | 9718.8 | -135.2 | -1.39% | 2.48R | 16m | market | stop-loss | mixed | mean-revert | neutral | 45.21 | ↓93.32 | 0.1342 | 1.11 | **LOSS** |
| 417 | RIVN | 10-10 15:57 | 10-10 16:13 | 12.86 | 12.83 | 589 | 7574.54 | -17.67 | -0.23% | 0.46R | 16m | market | stagnation | mixed | mean-revert | neutral | 54.29 | ↓12.95 | 0.0158 | 0.96 | **LOSS** |
| 418 | RIVN | 10-13 13:30 | 10-13 13:39 | 12.95 | 12.84 | 670 | 8676.5 | -73.7 | -0.85% | 1.7R | 9m | market | stop-loss | bearish | mean-revert | neutral | 37.5 | ↓12.96 | 0.0305 | 2.23 | **LOSS** |
| 419 | AMAT | 10-13 13:46 | 10-13 13:54 | 218.34 | 218.59 | 41 | 8951.94 | +10.25 | +0.11% | 0.18R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 50.66 | ↓218.7 | 1.6333 | 1 | **WIN** |
| 420 | AMAT | 10-13 14:05 | 10-13 14:21 | 220.79 | 219.1 | 50 | 11039.5 | -84.5 | -0.77% | 1.54R | 16m | market | stop-loss | trend | trend | neutral | 73.06 | ↓219 | 0.7565 | 1 | **LOSS** |
| 421 | TGT | 10-13 14:07 | 10-13 14:09 | 87.85 | 87.33 | 109 | 9575.65 | -56.68 | -0.59% | 1.18R | 2m | market | stop-loss | mixed | mean-revert | neutral | 49.11 | ↓87.44 | 0.2547 | 1.02 | **LOSS** |
| 422 | HPE | 10-13 14:11 | 10-13 14:20 | 25.29 | 25.13 | 386 | 9761.94 | -61.76 | -0.63% | 1.26R | 9m | market | stop-loss | mixed | mean-revert | neutral | 45.16 | ↓25.2 | 0.0545 | 1.38 | **LOSS** |
| 423 | MRVL | 10-13 14:42 | 10-13 14:58 | 87.93 | 87.7 | 60 | 5275.8 | -13.8 | -0.26% | 0.42R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 64.53 | ↓88.16 | 0.1825 | 1.78 | **LOSS** |
| 424 | HPE | 10-14 15:39 | 10-14 15:55 | 25.08 | 25.26 | 194 | 9756.12 | +34.92 | +0.72% | 1.44R | 16m | market | trim-profit-target | mixed | mean-revert | neutral | 39.66 | ↑24.85 | 0.0245 | 2.36 | **WIN** |
| 425 | HPE | 10-14 15:39 | 10-14 16:00 | 25.08 | 25.19 | 195 | 9756.12 | +21.45 | +0.44% | 0.88R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 39.66 | ↑24.85 | 0.0245 | 2.36 | **WIN** |
| 426 | RIVN | 10-14 16:57 | 10-14 17:18 | 13.02 | 13.05 | 746 | 9712.92 | +22.38 | +0.23% | 0.46R | 21m | market | timeout | mixed | mean-revert | neutral | 44.83 | ↑12.82 | 0.0183 | 0.91 | **WIN** |
| 427 | RIVN | 10-15 13:34 | 10-15 13:39 | 13.23 | 13.25 | 735 | 9724.05 | +14.7 | +0.15% | 0.27R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 50 | ↓13.25 | 0.0211 | 5.94 | **WIN** |
| 428 | SBUX | 10-15 14:00 | 10-15 14:16 | 82.82 | 82.71 | 135 | 11180.7 | -14.85 | -0.13% | 0.26R | 16m | market | stagnation | trend | trend | neutral | 68.46 | ↑82.16 | 0.185 | 1.15 | **LOSS** |
| 429 | KLAC | 10-15 14:23 | 10-15 14:45 | 1078.93 | 1082.39 | 10 | 10789.3 | +34.6 | +0.32% | 0.46R | 22m | market | timeout | trend | trend | neutral | 69.91 | ↑1066.35 | 8.8969 | 1.43 | **WIN** |
| 430 | ELF | 10-15 14:38 | 10-15 14:59 | 137.28 | 137.37 | 38 | 5216.64 | +3.42 | +0.07% | 0.12R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 63.2 | ↑135.8 | 0.8438 | 0.95 | **WIN** |
| 431 | ELF | 10-15 15:04 | 10-15 15:20 | 138.15 | 137.92 | 44 | 6078.6 | -10.12 | -0.17% | 0.34R | 16m | market | stagnation | trend | trend | noisyHighBeta | 69.59 | ↑136.11 | 0.8064 | 1.02 | **LOSS** |
| 432 | ELF | 10-15 15:29 | 10-15 15:41 | 139.43 | 138.39 | 43 | 5995.49 | -44.72 | -0.75% | 1.27R | 12m | market | stop-loss | breakout | trend | noisyHighBeta | 68.11 | ↑136.44 | 0.8113 | 2.1 | **LOSS** |
| 433 | MRVL | 10-15 15:48 | 10-15 16:04 | 89.03 | 88.98 | 68 | 6054.04 | -3.4 | -0.06% | 0.12R | 16m | market | trailing-stop | trend | trend | noisyHighBeta | 72.61 | ↑87.83 | 0.1793 | 3.08 | **LOSS** |
| 434 | KLAC | 10-16 13:54 | 10-16 14:23 | 1091.11 | 1085.97 | 7 | 7637.77 | -35.98 | -0.47% | 0.46R | 29m | market | timeout | mixed | mean-revert | neutral | 58.91 | ↓1101.92 | 4.6537 | 1.13 | **LOSS** |
| 435 | MRVL | 10-16 14:26 | 10-16 14:46 | 89.73 | 90.29 | 54 | 9690.84 | +30.24 | +0.62% | 1.24R | 20m | market | trim-profit-target | mixed | mean-revert | neutral | 57.96 | ↑89.86 | 0.0928 | 1.32 | **WIN** |
| 436 | MRVL | 10-16 14:26 | 10-16 14:47 | 89.73 | 90.24 | 54 | 9690.84 | +27.54 | +0.57% | 1.14R | 21m | market | timeout | mixed | mean-revert | neutral | 57.96 | ↑89.86 | 0.0928 | 1.32 | **WIN** |
| 437 | CELH | 10-16 14:36 | 10-16 14:45 | 66.04 | 65.65 | 169 | 11160.76 | -65.91 | -0.59% | 1.18R | 9m | market | stop-loss | trend | trend | neutral | 79.84 | ↑64.87 | 0.2533 | 1.6 | **LOSS** |
| 438 | ELF | 10-16 14:58 | 10-16 15:05 | 140.25 | 140.25 | 38 | 5329.5 | +0 | +0% | 0R | 7m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 60.05 | ↑139.18 | 1.0739 | 1.4 | **WIN** |
| 439 | HPE | 10-16 17:14 | 10-16 17:20 | 22.7 | 22.84 | 359 | 8149.3 | +50.26 | +0.62% | 0.85R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 55.2 | ↑22.74 | 0.0882 | 1.36 | **WIN** |
| 440 | SBUX | 10-17 13:49 | 10-17 14:04 | 84.71 | 84.22 | 32 | 2710.72 | -15.68 | -0.58% | 1.16R | 15m | market | stop-loss | mixed | mean-revert | thinChop | 44.9 | ↓84.75 | 0.0463 | 1.35 | **LOSS** |
| 441 | HPE | 10-17 14:00 | 10-17 14:04 | 22.68 | 22.67 | 129 | 2925.72 | -1.29 | -0.04% | 0.06R | 4m | market | trailing-stop | mixed | mean-revert | thinChop | 66.67 | ↑22.58 | 0.072 | 1.22 | **LOSS** |
| 442 | LRCX | 10-17 14:08 | 10-17 14:21 | 141.56 | 141.74 | 44 | 6228.64 | +7.92 | +0.13% | 0.26R | 13m | market | trailing-stop | bearish | mean-revert | neutral | 36.54 | ↓141.77 | 0.0439 | 2.18 | **WIN** |
| 443 | INTU | 10-17 14:13 | 10-17 14:35 | 657.46 | 657.49 | 17 | 11176.82 | +0.51 | +0% | 0R | 22m | market | timeout | trend | trend | neutral | 79.36 | ↑652.79 | 2.3299 | 1.09 | **WIN** |
| 444 | DELL | 10-17 14:18 | 10-17 14:36 | 149.45 | 148.09 | 16 | 2391.2 | -21.76 | -0.91% | 1.65R | 18m | market | stop-loss | mixed | mean-revert | thinChop | 48.45 | ↓149.79 | 0.0036 | 0.91 | **LOSS** |
| 445 | MRVL | 10-17 14:32 | 10-17 14:36 | 88.29 | 87.74 | 60 | 5297.4 | -33 | -0.62% | 1.24R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 51.67 | ↓87.74 | 0.1891 | 1.58 | **LOSS** |
| 446 | RIVN | 10-20 13:38 | 10-20 13:47 | 12.85 | 12.84 | 757 | 9727.45 | -7.57 | -0.08% | 0.11R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 56.82 | ↓12.84 | 0.0192 | 1.34 | **LOSS** |
| 447 | DELL | 10-20 13:58 | 10-20 14:14 | 150.72 | 149.73 | 19 | 2863.68 | -18.81 | -0.66% | 1.32R | 16m | market | stop-loss | mixed | mean-revert | thinChop | 60.8 | ↓150.18 | 0.2458 | 1.75 | **LOSS** |
| 448 | CELH | 10-20 14:05 | 10-20 14:21 | 65.47 | 64.96 | 149 | 9755.03 | -75.99 | -0.78% | 1.56R | 16m | market | stop-loss | mixed | mean-revert | neutral | 58.55 | ↓65.39 | 0.1547 | 1.43 | **LOSS** |
| 449 | KLAC | 10-20 14:47 | 10-20 15:10 | 1155.58 | 1156.71 | 9 | 10400.22 | +10.17 | +0.1% | 0.2R | 23m | market | timeout | trend | trend | neutral | 70.45 | ↑1145.19 | 7.5273 | 1.66 | **WIN** |
| 450 | RIVN | 10-21 14:10 | 10-21 14:12 | 13.17 | 13.17 | 844 | 11115.48 | +0 | +0% | 0R | 2m | market | trailing-stop | trend | trend | neutral | 66.2 | ↑13.01 | 0.0301 | 1.37 | **WIN** |
| 451 | RIVN | 10-21 14:16 | 10-21 14:28 | 13.24 | 13.34 | 419 | 11108.36 | +41.9 | +0.76% | 1.13R | 12m | market | trim-profit-target | trend | trend | neutral | 73.97 | ↑13.05 | 0.0501 | 2.13 | **WIN** |
| 452 | RIVN | 10-21 14:16 | 10-21 14:33 | 13.24 | 13.39 | 420 | 11108.36 | +63 | +1.13% | 1.69R | 17m | market | profit-target | trend | trend | neutral | 73.97 | ↑13.05 | 0.0501 | 2.13 | **WIN** |
| 453 | HPE | 10-21 14:43 | 10-21 15:04 | 23.03 | 23.1 | 424 | 9764.72 | +29.68 | +0.3% | 0.59R | 21m | market | timeout | mixed | mean-revert | neutral | 51.11 | ↑22.92 | 0.0436 | 2.69 | **WIN** |
| 454 | ELF | 10-21 16:23 | 10-21 16:40 | 128.63 | 127.9 | 75 | 9647.25 | -54.75 | -0.57% | 1.14R | 17m | market | stop-loss | mixed | mean-revert | neutral | 56.59 | ↑127.13 | 0.312 | 2.08 | **LOSS** |
| 455 | CELH | 10-22 14:00 | 10-22 14:16 | 63.5 | 63.32 | 40 | 2540 | -7.2 | -0.28% | 0.47R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 58.21 | ↓63.77 | 0.1167 | 0.86 | **LOSS** |
| 456 | RIVN | 10-22 14:23 | 10-22 14:27 | 13.17 | 13.09 | 739 | 9732.63 | -59.12 | -0.61% | 1.22R | 4m | market | stop-loss | mixed | mean-revert | neutral | 52.17 | ↓13.16 | 0.0112 | 2.09 | **LOSS** |
| 457 | INTU | 10-22 14:49 | 10-22 15:10 | 678.36 | 680.06 | 14 | 9497.04 | +23.8 | +0.25% | 0.5R | 21m | market | timeout | mixed | mean-revert | neutral | 62.72 | ↑678.38 | 1.3582 | 2.31 | **WIN** |
| 458 | IBM | 10-22 15:22 | 10-22 15:43 | 286.31 | 286.86 | 27 | 7730.37 | +14.85 | +0.19% | 0.38R | 21m | market | timeout | bearish | mean-revert | neutral | 37 | ↑285.76 | 0.1672 | 1.22 | **WIN** |
| 459 | TGT | 10-23 13:48 | 10-23 13:53 | 94.42 | 94.42 | 98 | 9253.16 | +0 | +0% | 0R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 51.41 | ↓94.59 | 0.1037 | 2.41 | **WIN** |
| 460 | CELH | 10-23 13:59 | 10-23 14:10 | 62.55 | 62.18 | 40 | 2502 | -14.8 | -0.59% | 1.18R | 11m | market | stop-loss | mixed | mean-revert | thinChop | 61.86 | ↓62.44 | 0.2267 | 1.02 | **LOSS** |
| 461 | DELL | 10-23 14:00 | 10-23 14:16 | 153.13 | 152.77 | 59 | 9034.67 | -21.24 | -0.24% | 0.48R | 16m | market | early-reversal | mixed | mean-revert | neutral | 55.82 | ↓152.79 | 0.5416 | 1.16 | **LOSS** |
| 462 | AMAT | 10-23 14:07 | 10-23 14:28 | 226.22 | 227.74 | 43 | 9727.46 | +65.36 | +0.67% | 1.34R | 21m | market | timeout | mixed | mean-revert | neutral | 43.95 | ↑225.63 | 0.6461 | 1.25 | **WIN** |
| 463 | RIVN | 10-23 15:03 | 10-23 15:06 | 13.12 | 13.04 | 847 | 11112.64 | -67.76 | -0.61% | 1.22R | 3m | market | stop-loss | trend | trend | neutral | 66 | ↑12.94 | 0.0176 | 2.26 | **LOSS** |
| 464 | IBM | 10-23 15:43 | 10-23 16:04 | 279.22 | 281.49 | 35 | 9772.7 | +79.45 | +0.81% | 1.62R | 21m | market | timeout | mixed | mean-revert | neutral | 44.77 | ↑274.85 | 0.3647 | 2.06 | **WIN** |
| 465 | IBM | 10-23 16:36 | 10-23 16:55 | 283.18 | 283.69 | 34 | 9628.12 | +17.34 | +0.18% | 0.36R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 35.92 | ↑275.88 | 0.2763 | 3.76 | **WIN** |
| 466 | TGT | 10-24 13:41 | 10-24 13:57 | 95.01 | 94.74 | 103 | 9786.03 | -27.81 | -0.28% | 0.41R | 16m | market | early-reversal | mixed | mean-revert | neutral | 65.6 | ↓95.25 | 0.3315 | 1.53 | **LOSS** |
| 467 | HPE | 10-24 13:45 | 10-24 13:57 | 23.34 | 23.32 | 272 | 6348.48 | -5.44 | -0.09% | 0.1R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 56.74 | ↓23.42 | 0.054 | 0.98 | **LOSS** |
| 468 | RIVN | 10-24 14:02 | 10-24 14:14 | 13.17 | 13.17 | 738 | 9719.46 | +0 | +0% | 0R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 50 | ↓13.19 | 0.0116 | 3.48 | **WIN** |
| 469 | IBM | 10-24 14:04 | 10-24 14:24 | 294.62 | 294.69 | 33 | 9722.46 | +2.31 | +0.02% | 0.04R | 20m | market | trailing-stop | mixed | mean-revert | neutral | 42.86 | ↑292.15 | 1.3934 | 1.17 | **WIN** |
| 470 | KLAC | 10-24 14:55 | 10-24 15:16 | 1182.48 | 1183 | 8 | 9459.84 | +4.16 | +0.04% | 0.08R | 21m | market | timeout | mixed | mean-revert | neutral | 61.71 | ↑1179.97 | 6.093 | 1.07 | **WIN** |
| 471 | KLAC | 10-27 13:57 | 10-27 14:14 | 1219.6 | 1212.9 | 9 | 10976.4 | -60.3 | -0.55% | 0.63R | 17m | market | early-reversal | trend | trend | neutral | 75.16 | ↓1212.46 | 8.5925 | 1.41 | **LOSS** |
| 472 | IBM | 10-27 14:14 | 10-27 14:38 | 306.45 | 307.06 | 32 | 9806.4 | +19.52 | +0.2% | 0.4R | 24m | market | timeout | mixed | mean-revert | neutral | 52.53 | ↑306.46 | 0.3952 | 0.99 | **WIN** |
| 473 | RIVN | 10-27 14:17 | 10-27 14:38 | 13.16 | 13.22 | 453 | 5961.48 | +27.18 | +0.46% | 0.92R | 21m | market | timeout | bearish | mean-revert | neutral | 33.33 | ↑13.14 | 0.0174 | 1.09 | **WIN** |
| 474 | HPE | 10-27 15:12 | 10-27 15:21 | 24.18 | 23.98 | 462 | 11171.16 | -92.4 | -0.83% | 0.72R | 9m | market | stop-loss | trend | trend | neutral | 69.89 | ↓23.97 | 0.0609 | 2.38 | **LOSS** |
| 475 | RIVN | 10-27 15:14 | 10-27 15:35 | 13.34 | 13.32 | 833 | 11112.22 | -16.66 | -0.15% | 0.3R | 21m | market | stagnation | trend | trend | neutral | 71.7 | ↑13.19 | 0.0121 | 1.37 | **LOSS** |
| 476 | IBM | 10-27 15:35 | 10-27 15:49 | 311.74 | 309.96 | 35 | 10910.9 | -62.3 | -0.57% | 1.14R | 14m | market | stop-loss | trend | trend | neutral | 78.62 | ↑307.49 | 0.5091 | 5.91 | **LOSS** |
| 477 | LRCX | 10-29 14:03 | 10-29 14:15 | 162.17 | 161.19 | 60 | 9730.2 | -58.8 | -0.6% | 1.2R | 12m | market | stop-loss | mixed | mean-revert | neutral | 61.46 | ↓161.58 | 0.8112 | 1.59 | **LOSS** |
| 478 | LRCX | 10-30 13:55 | 10-30 14:10 | 163.66 | 163.79 | 59 | 9655.94 | +7.67 | +0.08% | 0.11R | 15m | market | trailing-stop | mixed | mean-revert | neutral | 58.12 | ↑163.64 | 0.555 | 1 | **WIN** |
| 479 | RIVN | 10-30 14:06 | 10-30 14:22 | 13.25 | 13.22 | 676 | 8957 | -20.28 | -0.23% | 0.27R | 16m | market | stagnation | mixed | mean-revert | neutral | 39.8 | ↓13.28 | -0.0228 | 1.23 | **LOSS** |
| 480 | AMAT | 10-30 14:09 | 10-30 14:20 | 240.56 | 239.22 | 37 | 8900.72 | -49.58 | -0.56% | 0.98R | 11m | market | stop-loss | mixed | mean-revert | neutral | 52.95 | ↓239.61 | 0.6618 | 1.1 | **LOSS** |
| 481 | LRCX | 10-30 14:12 | 10-30 14:29 | 163.41 | 162.92 | 39 | 6372.99 | -19.11 | -0.3% | 0.6R | 17m | market | early-reversal | bearish | mean-revert | neutral | 33.17 | ↓163.73 | 0.0507 | 1.4 | **LOSS** |
| 482 | DELL | 10-30 14:21 | 10-30 14:45 | 162.43 | 163.29 | 14 | 2274.02 | +12.04 | +0.53% | 1.06R | 24m | market | timeout | mixed | mean-revert | thinChop | 29.55 | ↑161.86 | 0.0313 | 1.01 | **WIN** |
| 483 | SBUX | 10-30 14:34 | 10-30 14:38 | 84.96 | 85.03 | 115 | 9770.4 | +8.05 | +0.08% | 0.13R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 47.62 | ↑84 | 0.0972 | 1.05 | **WIN** |
| 484 | SBUX | 10-30 14:40 | 10-30 15:01 | 84.89 | 85.69 | 115 | 9762.35 | +92 | +0.94% | 1.31R | 21m | market | timeout | mixed | mean-revert | neutral | 40.18 | ↑84.05 | 0.0465 | 1.37 | **WIN** |
| 485 | ELF | 10-30 16:04 | 10-30 16:35 | 125.37 | 125.21 | 74 | 9277.38 | -11.84 | -0.13% | 0.26R | 31m | market | stagnation | mixed | mean-revert | neutral | 56.38 | ↑125.12 | 0.1401 | 2.09 | **LOSS** |
| 486 | INTU | 10-31 14:00 | 10-31 14:14 | 665.19 | 661.38 | 16 | 10643.04 | -60.96 | -0.57% | 1.14R | 14m | market | stop-loss | trend | trend | neutral | 77.97 | ↓659.38 | 1.1746 | 1.29 | **LOSS** |
| 487 | RIVN | 10-31 14:05 | 10-31 14:09 | 13.04 | 12.96 | 519 | 6767.76 | -41.52 | -0.61% | 1.22R | 4m | market | stop-loss | mixed | mean-revert | falseBreakoutProne | 42.86 | ↓13 | 0.0174 | 2.58 | **LOSS** |
| 488 | MRVL | 10-31 14:37 | 10-31 14:50 | 96.35 | 97.08 | 57 | 11080.25 | +41.61 | +0.76% | 1.46R | 13m | market | trim-profit-target | trend | trend | neutral | 77.61 | ↑94.56 | 0.2846 | 1.99 | **WIN** |
| 489 | MRVL | 10-31 14:37 | 10-31 14:53 | 96.35 | 96.71 | 58 | 11080.25 | +20.88 | +0.37% | 0.71R | 16m | market | trailing-stop | trend | trend | neutral | 77.61 | ↑94.56 | 0.2846 | 1.99 | **WIN** |
| 490 | SBUX | 10-31 14:54 | 10-31 15:08 | 81.87 | 81.38 | 105 | 8596.35 | -51.45 | -0.6% | 1.2R | 14m | market | stop-loss | mixed | mean-revert | neutral | 43.57 | ↓81.91 | 0.0516 | 2.4 | **LOSS** |
| 491 | MRVL | 11-03 14:30 | 11-03 14:35 | 94.77 | 93.13 | 117 | 11088.09 | -191.88 | -1.73% | 1.47R | 5m | market | stop-loss | trend | trend | neutral | 60.8 | ↓94.24 | 0.1169 | 1.05 | **LOSS** |
| 492 | DELL | 11-03 14:50 | 11-03 14:54 | 165.2 | 163.94 | 59 | 9746.8 | -74.34 | -0.76% | 1.31R | 4m | market | stop-loss | mixed | mean-revert | neutral | 39.53 | ↓165.58 | 0.5843 | 2.92 | **LOSS** |
| 493 | AMAT | 11-04 15:08 | 11-04 15:29 | 234.99 | 236.3 | 11 | 2584.89 | +14.41 | +0.56% | 1.12R | 21m | market | timeout | mixed | mean-revert | thinChop | 53.51 | ↑233.82 | 0.1573 | 1.19 | **WIN** |
| 494 | CELH | 11-04 15:12 | 11-04 15:33 | 58.82 | 58.97 | 162 | 9528.84 | +24.3 | +0.26% | 0.52R | 21m | market | timeout | mixed | mean-revert | neutral | 48.99 | ↑58.32 | 0.1044 | 2.05 | **WIN** |
| 495 | KLAC | 11-04 15:32 | 11-04 15:56 | 1221.79 | 1220.11 | 2 | 2443.58 | -3.36 | -0.14% | 0.28R | 24m | market | trailing-stop | mixed | mean-revert | thinChop | 51.58 | ↑1216.87 | 1.6832 | 1.26 | **LOSS** |
| 496 | MRVL | 11-04 15:48 | 11-04 16:04 | 90.17 | 90.1 | 104 | 9377.68 | -7.28 | -0.08% | 0.16R | 16m | market | stagnation | mixed | mean-revert | neutral | 28.73 | ↑89.55 | 0.0396 | 1.62 | **LOSS** |
| 497 | MRVL | 11-05 14:48 | 11-05 14:55 | 90.41 | 91.56 | 123 | 11120.43 | +141.45 | +1.27% | 1.95R | 7m | market | profit-target | trend | trend | neutral | 71.57 | ↑89.45 | 0.4223 | 1.01 | **WIN** |
| 498 | RIVN | 11-05 15:03 | 11-05 15:13 | 13.79 | 14.07 | 704 | 9708.16 | +197.12 | +2.03% | 1.54R | 10m | market | profit-target | mixed | mean-revert | neutral | 59.23 | ↑13.6 | 0.1651 | 0.86 | **WIN** |
| 499 | CELH | 11-05 15:06 | 11-05 15:14 | 60.77 | 60.33 | 138 | 8386.26 | -60.72 | -0.72% | 1.41R | 8m | market | stop-loss | bearish | mean-revert | neutral | 44.78 | ↓60.75 | 0.261 | 2.04 | **LOSS** |
| 500 | DELL | 11-05 15:11 | 11-05 15:13 | 153.15 | 151.8 | 53 | 8116.95 | -71.55 | -0.88% | 1.76R | 2m | market | stop-loss | mixed | mean-revert | neutral | 44.96 | ↓152.4 | 0.3297 | 1.54 | **LOSS** |
| 501 | RIVN | 11-05 15:19 | 11-05 15:27 | 13.92 | 14.08 | 699 | 9730.08 | +111.84 | +1.15% | 1.05R | 8m | market | profit-target | mixed | mean-revert | neutral | 61.7 | ↑13.67 | 0.0834 | 1.03 | **WIN** |
| 502 | MRVL | 11-05 15:28 | 11-05 15:49 | 92.61 | 92.66 | 120 | 11113.2 | +6 | +0.05% | 0.1R | 21m | market | trailing-stop | trend | trend | neutral | 70.6 | ↑91.2 | 0.233 | 1.13 | **WIN** |
| 503 | RIVN | 11-05 15:33 | 11-05 15:47 | 14.18 | 14.4 | 785 | 11131.3 | +172.7 | +1.55% | 1.8R | 14m | market | profit-target | trend | trend | neutral | 78.26 | ↑13.73 | 0.0739 | 1.17 | **WIN** |
| 504 | RIVN | 11-05 15:50 | 11-05 15:53 | 14.38 | 14.26 | 679 | 9764.02 | -81.48 | -0.83% | 1.34R | 3m | market | stop-loss | mixed | mean-revert | neutral | 65.22 | ↑13.81 | 0.0993 | 1.05 | **LOSS** |
| 505 | LRCX | 11-05 16:05 | 11-05 16:21 | 162.15 | 162.03 | 60 | 9729 | -7.2 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | neutral | 40.68 | ↑161.19 | 0.0658 | 3.38 | **LOSS** |
| 506 | RIVN | 11-05 16:38 | 11-05 16:59 | 14.52 | 14.64 | 768 | 11151.36 | +92.16 | +0.83% | 1.66R | 21m | market | timeout | trend | trend | neutral | 65.45 | ↑13.93 | 0.0347 | 1.33 | **WIN** |
| 507 | NKE | 11-05 16:40 | 11-05 16:41 | 61.69 | 61.69 | 180 | 11104.2 | +0 | +0% | 0R | 1m | market | trailing-stop | trend | trend | neutral | 77.83 | ↑61.17 | 0.1086 | 2.51 | **WIN** |
| 508 | RIVN | 11-05 17:05 | 11-05 17:18 | 14.82 | 14.94 | 376 | 11159.46 | +45.12 | +0.81% | 1.21R | 13m | market | trim-profit-target | trend | trend | neutral | 75.86 | ↑14.04 | 0.0618 | 1.02 | **WIN** |
| 509 | RIVN | 11-05 17:05 | 11-05 17:21 | 14.82 | 15.05 | 377 | 11159.46 | +86.71 | +1.55% | 2.31R | 16m | market | profit-target | trend | trend | neutral | 75.86 | ↑14.04 | 0.0618 | 1.02 | **WIN** |
| 510 | TGT | 11-05 17:06 | 11-05 17:12 | 92.5 | 91.76 | 120 | 11100 | -88.8 | -0.8% | 1.14R | 6m | market | stop-loss | trend | trend | neutral | 78.63 | ↑90.19 | 0.5986 | 1.75 | **LOSS** |
| 511 | SBUX | 11-05 17:09 | 11-05 17:30 | 81.28 | 81.84 | 120 | 9753.6 | +67.2 | +0.69% | 1.38R | 21m | market | timeout | mixed | mean-revert | neutral | 46.73 | ↑80.23 | 0.1818 | 9.57 | **WIN** |
| 512 | ELF | 11-05 17:12 | 11-05 17:39 | 119.68 | 120.29 | 81 | 9694.08 | +49.41 | +0.51% | 0.91R | 27m | market | timeout | mixed | mean-revert | neutral | 57.82 | ↑118.1 | 0.6034 | 0.97 | **WIN** |
| 513 | RIVN | 11-05 17:35 | 11-05 17:39 | 15.18 | 15.23 | 644 | 9775.92 | +32.2 | +0.33% | 0.3R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 60 | ↑14.25 | 0.1059 | 0.88 | **WIN** |
| 514 | RIVN | 11-05 17:41 | 11-05 17:51 | 15.19 | 15.38 | 547 | 8308.93 | +103.93 | +1.25% | 1.24R | 10m | market | profit-target | bearish | mean-revert | neutral | 51.72 | ↑14.29 | 0.0742 | 0.97 | **WIN** |
| 515 | ELF | 11-06 15:59 | 11-06 16:08 | 79.12 | 78.62 | 106 | 8386.72 | -53 | -0.63% | 0.53R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 59.05 | ↓81.07 | 0.2357 | 1.22 | **LOSS** |
| 516 | SBUX | 11-07 15:21 | 11-07 15:37 | 84.96 | 84.74 | 113 | 9600.48 | -24.86 | -0.26% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | neutral | 50.58 | ↑84.05 | 0.2047 | 1.09 | **LOSS** |
| 517 | LRCX | 11-07 15:30 | 11-07 15:37 | 157.77 | 156.88 | 53 | 8361.81 | -47.17 | -0.56% | 1.1R | 7m | market | stop-loss | mixed | mean-revert | neutral | 38.21 | ↓157.55 | 0.0272 | 0.96 | **LOSS** |
| 518 | RIVN | 11-10 14:37 | 11-10 14:42 | 15.34 | 15.03 | 278 | 4264.52 | -86.18 | -2.02% | 1.21R | 5m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 55.76 | ↓15.42 | 0.0403 | 1.05 | **LOSS** |
| 519 | HPE | 11-10 14:50 | 11-10 15:02 | 24.19 | 24.03 | 274 | 6628.06 | -43.84 | -0.66% | 0.97R | 12m | market | stop-loss | bearish | mean-revert | neutral | 47.62 | ↓24.25 | 0.1536 | 0.95 | **LOSS** |
| 520 | KLAC | 11-10 14:51 | 11-10 15:09 | 1219.43 | 1214.69 | 8 | 9755.44 | -37.92 | -0.39% | 0.78R | 18m | market | early-reversal | mixed | mean-revert | neutral | 48.78 | ↓1221.75 | 7.0973 | 1.63 | **LOSS** |
| 521 | ELF | 11-10 14:53 | 11-10 15:01 | 80.06 | 80.33 | 66 | 5283.96 | +17.82 | +0.34% | 0.27R | 8m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 55.97 | ↑79.69 | 1.2487 | 1.88 | **WIN** |
| 522 | RIVN | 11-10 15:10 | 11-10 15:14 | 15.32 | 15.35 | 401 | 6143.32 | +12.03 | +0.2% | 0.2R | 4m | market | trailing-stop | trend | trend | noisyHighBeta | 64.58 | ↑15.22 | 0.0187 | 1.25 | **WIN** |
| 523 | RIVN | 11-10 15:17 | 11-10 15:27 | 15.33 | 15.53 | 333 | 5104.89 | +66.6 | +1.3% | 1.2R | 10m | market | profit-target | mixed | mean-revert | noisyHighBeta | 74.29 | ↑15.24 | 0.0509 | 0.93 | **WIN** |
| 524 | CELH | 11-10 15:26 | 11-10 15:30 | 44.43 | 44.09 | 109 | 4842.87 | -37.06 | -0.77% | 1.54R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 44.94 | ↓44.41 | 0.0533 | 1.38 | **LOSS** |
| 525 | RIVN | 11-10 15:34 | 11-10 15:50 | 15.6 | 15.51 | 394 | 6146.4 | -35.46 | -0.58% | 0.72R | 16m | market | early-reversal | trend | trend | noisyHighBeta | 74.76 | ↑15.29 | 0.077 | 1.08 | **LOSS** |
| 526 | ELF | 11-10 16:26 | 11-10 16:39 | 80.08 | 80.09 | 76 | 6086.08 | +0.76 | +0.01% | 0.02R | 13m | market | trailing-stop | trend | trend | noisyHighBeta | 76.53 | ↑79.69 | 0.1403 | 1.02 | **WIN** |
| 527 | RIVN | 11-10 16:28 | 11-10 16:45 | 15.72 | 15.77 | 391 | 6146.52 | +19.55 | +0.32% | 0.48R | 17m | market | trailing-stop | trend | trend | noisyHighBeta | 73.91 | ↑15.38 | 0.0313 | 7.34 | **WIN** |
| 528 | RIVN | 11-10 16:50 | 11-10 17:00 | 15.9 | 15.93 | 387 | 6153.3 | +11.61 | +0.19% | 0.19R | 10m | market | trailing-stop | trend | trend | noisyHighBeta | 66.94 | ↑15.46 | 0.0636 | 1.01 | **WIN** |
| 529 | RIVN | 11-10 17:31 | 11-10 17:41 | 16.25 | 16.25 | 688 | 11180 | +0 | +0% | 0R | 10m | market | trailing-stop | trend | trend | neutral | 74.55 | ↑15.64 | 0.0518 | 1.14 | **WIN** |
| 530 | RIVN | 11-10 17:45 | 11-10 18:03 | 16.47 | 16.58 | 339 | 11183.13 | +37.29 | +0.67% | 0.83R | 18m | market | trim-profit-target | trend | trend | neutral | 67.74 | ↑15.72 | 0.0754 | 2.29 | **WIN** |
| 531 | RIVN | 11-10 17:45 | 11-10 18:06 | 16.47 | 16.66 | 340 | 11183.13 | +64.6 | +1.15% | 1.42R | 21m | market | timeout | trend | trend | neutral | 67.74 | ↑15.72 | 0.0754 | 2.29 | **WIN** |
| 532 | RIVN | 11-11 14:39 | 11-11 14:46 | 16.73 | 16.69 | 368 | 6156.64 | -14.72 | -0.24% | 0.14R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 70.21 | ↑16.61 | 0.0879 | 1.18 | **LOSS** |
| 533 | IBM | 11-11 14:47 | 11-11 14:52 | 314.36 | 311.64 | 31 | 9745.16 | -84.32 | -0.87% | 1.1R | 5m | market | stop-loss | mixed | mean-revert | neutral | 64.41 | ↓314.19 | 1.6953 | 1.44 | **LOSS** |
| 534 | RIVN | 11-11 14:53 | 11-11 14:55 | 17 | 17.01 | 362 | 6154 | +3.62 | +0.06% | 0.03R | 2m | market | trailing-stop | trend | trend | noisyHighBeta | 60.31 | ↑16.72 | 0.1188 | 1.1 | **WIN** |
| 535 | NKE | 11-11 14:56 | 11-11 15:12 | 62.84 | 62.75 | 177 | 11122.68 | -15.93 | -0.14% | 0.26R | 16m | market | stagnation | trend | trend | neutral | 68.64 | ↑61.99 | 0.3505 | 1.02 | **LOSS** |
| 536 | RIVN | 11-11 15:03 | 11-11 15:07 | 17.19 | 16.93 | 358 | 6154.02 | -93.08 | -1.51% | 1.06R | 4m | market | stop-loss | trend | trend | noisyHighBeta | 78.95 | ↑16.86 | 0.1401 | 1.19 | **LOSS** |
| 537 | RIVN | 11-11 15:17 | 11-11 15:30 | 17.42 | 17.63 | 353 | 6149.26 | +74.13 | +1.21% | 0.92R | 13m | market | profit-target | trend | trend | noisyHighBeta | 63.8 | ↑16.91 | 0.1179 | 1.19 | **WIN** |
| 538 | RIVN | 11-11 15:31 | 11-11 15:34 | 17.67 | 17.34 | 348 | 6149.16 | -114.84 | -1.87% | 1.56R | 3m | market | stop-loss | trend | trend | noisyHighBeta | 78.02 | ↑17.11 | 0.1498 | 1.57 | **LOSS** |
| 539 | LRCX | 11-11 16:27 | 11-11 16:48 | 159.17 | 160.08 | 56 | 8913.52 | +50.96 | +0.57% | 1.14R | 21m | market | timeout | mixed | mean-revert | neutral | 53.97 | ↑160.07 | 0.2186 | 0.97 | **WIN** |
| 540 | CELH | 11-11 16:54 | 11-11 17:15 | 43.77 | 44.14 | 122 | 5339.94 | +45.14 | +0.85% | 1.7R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 64.1 | ↑43.59 | 0.1099 | 0.91 | **WIN** |
| 541 | SBUX | 11-12 14:45 | 11-12 15:06 | 88.04 | 88.75 | 97 | 8539.88 | +68.87 | +0.81% | 1.33R | 21m | market | timeout | bearish | mean-revert | neutral | 33.19 | ↑88.36 | 0.4544 | 1.33 | **WIN** |
| 542 | MRVL | 11-12 14:47 | 11-12 15:05 | 90.44 | 91.98 | 59 | 5335.96 | +90.86 | +1.7% | 3.09R | 18m | market | profit-target | mixed | mean-revert | noisyHighBeta | 35.29 | ↑90.73 | 0.2427 | 1.66 | **WIN** |
| 543 | NKE | 11-12 14:57 | 11-12 15:14 | 64.54 | 64.52 | 98 | 6324.92 | -1.96 | -0.03% | 0.06R | 17m | market | trailing-stop | bearish | mean-revert | neutral | 39.69 | ↓64.64 | 0.2144 | 0.87 | **LOSS** |
| 544 | HPE | 11-12 15:05 | 11-12 15:12 | 23.44 | 23.44 | 416 | 9751.04 | +0 | +0% | 0R | 7m | market | breakeven-stop | mixed | mean-revert | neutral | 53.03 | ↑23.4 | 0.0634 | 1.53 | **WIN** |
| 545 | MRVL | 11-12 16:21 | 11-12 16:33 | 91.74 | 91.77 | 66 | 6054.84 | +1.98 | +0.03% | 0.06R | 12m | market | breakeven-stop | trend | trend | noisyHighBeta | 74.4 | ↑91.22 | 0.1158 | 3.2 | **WIN** |
| 546 | CELH | 11-12 16:32 | 11-12 16:48 | 45.19 | 44.9 | 135 | 6100.65 | -39.15 | -0.64% | 1.28R | 16m | market | stop-loss | trend | trend | noisyHighBeta | 70.78 | ↑44.16 | 0.1689 | 1.19 | **LOSS** |
| 547 | ELF | 11-12 17:52 | 11-12 18:17 | 78.89 | 78.91 | 67 | 5285.63 | +1.34 | +0.03% | 0.06R | 25m | market | timeout | mixed | mean-revert | noisyHighBeta | 53.22 | ↑78.15 | 0.2075 | 1.67 | **WIN** |
| 548 | TXN | 11-13 14:38 | 11-13 14:54 | 164.73 | 164.63 | 67 | 11036.91 | -6.7 | -0.06% | 0.12R | 16m | market | stagnation | trend | trend | neutral | 75.86 | ↑163.88 | 0.3372 | 1.44 | **LOSS** |
| 549 | RIVN | 11-13 14:53 | 11-13 14:59 | 17.65 | 17.29 | 348 | 6142.2 | -125.28 | -2.04% | 1.81R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 63.69 | ↓17.44 | 0.0379 | 2.03 | **LOSS** |
| 550 | CELH | 11-13 14:59 | 11-13 15:04 | 45.54 | 44.9 | 64 | 2914.56 | -40.96 | -1.41% | 2.1R | 5m | market | stop-loss | mixed | mean-revert | thinChop | 59.18 | ↓45.5 | 0.1024 | 1.22 | **LOSS** |
| 551 | MRVL | 11-13 15:04 | 11-13 15:15 | 86.38 | 88.25 | 54 | 4664.52 | +100.98 | +2.16% | 2.37R | 11m | market | profit-target | mixed | mean-revert | noisyHighBeta | 53.15 | ↑86.12 | -0.0061 | 0.86 | **WIN** |
| 552 | HPE | 11-13 15:15 | 11-13 15:19 | 23.61 | 23.44 | 473 | 11167.53 | -80.41 | -0.72% | 1.44R | 4m | market | stop-loss | trend | trend | neutral | 72.73 | ↑23.36 | 0.0522 | 2.5 | **LOSS** |
| 553 | MRVL | 11-13 15:18 | 11-13 15:34 | 87.88 | 87.33 | 55 | 4833.4 | -30.25 | -0.63% | 0.78R | 16m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 76.41 | ↑86.51 | 0.3913 | 1.39 | **LOSS** |
| 554 | DELL | 11-13 15:18 | 11-13 15:21 | 138.73 | 137.92 | 70 | 9711.1 | -56.7 | -0.58% | 1.16R | 3m | market | stop-loss | mixed | mean-revert | neutral | 56.6 | ↓138.77 | -0.0277 | 2.27 | **LOSS** |
| 555 | MRVL | 11-13 17:35 | 11-13 17:46 | 87.54 | 87 | 53 | 4639.62 | -28.62 | -0.62% | 1.24R | 11m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 36.95 | ↑86.86 | 0.104 | 1.19 | **LOSS** |
| 556 | DELL | 11-14 15:03 | 11-14 15:11 | 134.25 | 133.18 | 66 | 8860.5 | -70.62 | -0.8% | 1.19R | 8m | market | stop-loss | mixed | mean-revert | neutral | 49.66 | ↑132.78 | 0.3515 | 1.62 | **LOSS** |
| 557 | MRVL | 11-14 15:07 | 11-14 15:22 | 87.79 | 87.14 | 111 | 9744.69 | -72.15 | -0.74% | 0.96R | 15m | market | stop-loss | mixed | mean-revert | neutral | 50 | ↑86.39 | 0.3818 | 0.87 | **LOSS** |
| 558 | TGT | 11-14 15:26 | 11-14 15:47 | 90.44 | 90.87 | 108 | 9767.52 | +46.44 | +0.48% | 0.96R | 21m | market | timeout | mixed | mean-revert | neutral | 55.56 | ↑90.15 | 0.1082 | 1.57 | **WIN** |
| 559 | AMAT | 11-14 15:43 | 11-14 15:56 | 222.38 | 222.44 | 50 | 11119 | +3 | +0.03% | 0.05R | 13m | market | breakeven-stop | trend | trend | neutral | 70.42 | ↑215.85 | 0.526 | 1.12 | **WIN** |
| 560 | MRVL | 11-14 15:46 | 11-14 15:52 | 88.94 | 88.34 | 125 | 11117.5 | -75 | -0.67% | 1.22R | 6m | market | stop-loss | trend | trend | neutral | 78.56 | ↑86.76 | 0.2544 | 1.21 | **LOSS** |
| 561 | LRCX | 11-17 15:01 | 11-17 15:04 | 152.37 | 151.17 | 64 | 9751.68 | -76.8 | -0.79% | 1.25R | 3m | market | stop-loss | mixed | mean-revert | neutral | 42.86 | ↓151.68 | 0.6857 | 2.12 | **LOSS** |
| 562 | ELF | 11-17 15:10 | 11-17 15:18 | 76.15 | 76.03 | 127 | 9671.05 | -15.24 | -0.16% | 0.18R | 8m | market | trailing-stop | mixed | mean-revert | neutral | 65.82 | ↑74.65 | 0.4944 | 1.53 | **LOSS** |
| 563 | DELL | 11-17 15:50 | 11-17 16:03 | 124.51 | 124.56 | 62 | 7719.62 | +3.1 | +0.04% | 0.08R | 13m | market | breakeven-stop | mixed | mean-revert | neutral | 54.26 | ↓125.37 | 0.0982 | 1.03 | **WIN** |
| 564 | CELH | 11-17 17:18 | 11-17 17:35 | 40.99 | 40.77 | 205 | 8402.95 | -45.1 | -0.54% | 1.08R | 17m | market | early-reversal | mixed | mean-revert | neutral | 46.05 | ↓41.14 | 0.0246 | 1.11 | **LOSS** |
| 565 | RIVN | 11-18 15:35 | 11-18 15:48 | 14.65 | 14.67 | 354 | 5186.1 | +7.08 | +0.14% | 0.21R | 13m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 52.7 | ↑14.6 | 0.0279 | 1.3 | **WIN** |
| 566 | IBM | 11-18 15:59 | 11-18 16:20 | 292.19 | 292.43 | 23 | 6720.37 | +5.52 | +0.08% | 0.16R | 21m | market | timeout | mixed | mean-revert | neutral | 55.04 | ↑292.24 | 0.2787 | 0.99 | **WIN** |
| 567 | ELF | 11-18 16:48 | 11-18 17:09 | 72.64 | 72.41 | 131 | 9515.84 | -30.13 | -0.32% | 0.57R | 21m | market | timeout | mixed | mean-revert | neutral | 67.04 | ↑71.91 | 0.2847 | 1.13 | **LOSS** |
| 568 | KLAC | 11-18 17:40 | 11-18 17:56 | 1137.51 | 1134.12 | 9 | 10237.59 | -30.51 | -0.3% | 0.6R | 16m | market | early-reversal | trend | trend | neutral | 65.9 | ↑1119.67 | 0.8899 | 2.11 | **LOSS** |
| 569 | MRVL | 11-19 14:54 | 11-19 15:04 | 80.91 | 81.07 | 75 | 6068.25 | +12 | +0.2% | 0.33R | 10m | market | trailing-stop | trend | trend | noisyHighBeta | 72.1 | ↑79.98 | 0.3666 | 1.46 | **WIN** |
| 570 | LOW | 11-19 14:54 | 11-19 15:05 | 226.4 | 226.65 | 41 | 9282.4 | +10.25 | +0.11% | 0.13R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 37.97 | ↓228.04 | 0.66 | 1.45 | **WIN** |
| 571 | RIVN | 11-19 15:20 | 11-19 15:39 | 14.78 | 14.76 | 309 | 4567.02 | -6.18 | -0.14% | 0.26R | 19m | market | stagnation | mixed | mean-revert | noisyHighBeta | 41.38 | ↑14.7 | 0.0184 | 0.91 | **LOSS** |
| 572 | CELH | 11-19 17:00 | 11-19 17:16 | 41.58 | 41.39 | 147 | 6112.26 | -27.93 | -0.46% | 0.92R | 16m | market | early-reversal | trend | trend | noisyHighBeta | 76.28 | ↑40.93 | 0.1276 | 1.47 | **LOSS** |
| 573 | HPE | 11-19 17:04 | 11-19 17:20 | 20.77 | 20.72 | 429 | 8910.33 | -21.45 | -0.24% | 0.48R | 16m | market | early-reversal | mixed | mean-revert | neutral | 52.46 | ↓20.87 | 0.0174 | 0.98 | **LOSS** |
| 574 | MA | 11-20 14:30 | 11-20 14:44 | 534.38 | 535.59 | 20 | 10687.6 | +24.2 | +0.23% | 0.46R | 14m | market | trailing-stop | trend | trend | neutral | 76.6 | ↓533.44 | 0.6653 | 1.28 | **WIN** |
| 575 | KLAC | 11-20 14:31 | 11-20 14:40 | 1198.19 | 1185.06 | 9 | 10783.71 | -118.17 | -1.1% | 1.51R | 9m | market | stop-loss | breakout | trend | neutral | 77.82 | ↓1194.06 | 2.8092 | 1.02 | **LOSS** |
| 576 | MRVL | 11-20 14:36 | 11-20 14:44 | 84.26 | 83.24 | 132 | 11122.32 | -134.64 | -1.21% | 0.75R | 8m | market | stop-loss | trend | trend | neutral | 75.51 | ↓83.67 | 0.6807 | 1.43 | **LOSS** |
| 577 | DELL | 11-20 14:36 | 11-20 14:54 | 124.15 | 124 | 49 | 6083.35 | -7.35 | -0.12% | 0.07R | 18m | market | stagnation | trend | trend | noisyHighBeta | 71.99 | ↑123.7 | 1.0106 | 1.12 | **LOSS** |
| 578 | RIVN | 11-20 15:26 | 11-20 15:47 | 15.59 | 15.53 | 394 | 6142.46 | -23.64 | -0.38% | 0.44R | 21m | market | timeout | trend | trend | noisyHighBeta | 58.59 | ↑15.41 | 0.0537 | 1.29 | **LOSS** |
| 579 | HPE | 11-20 15:48 | 11-20 15:51 | 21.14 | 21.02 | 461 | 9745.54 | -55.32 | -0.57% | 1.14R | 3m | market | stop-loss | mixed | mean-revert | neutral | 52.24 | ↓21.07 | 0.0247 | 1.06 | **LOSS** |
| 580 | INTU | 11-21 14:45 | 11-21 14:51 | 670.79 | 669.29 | 14 | 9391.06 | -21 | -0.22% | 0.17R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 53.97 | ↓673.04 | 6.755 | 2.19 | **LOSS** |
| 581 | DELL | 11-21 14:46 | 11-21 14:55 | 118.95 | 119.94 | 35 | 4163.25 | +34.65 | +0.83% | 0.95R | 9m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 51.03 | ↑119.02 | 0.4656 | 0.91 | **WIN** |
| 582 | CELH | 11-21 14:56 | 11-21 15:02 | 39.45 | 39.35 | 92 | 3629.4 | -9.2 | -0.25% | 0.37R | 6m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 46.39 | ↓39.38 | 0.0555 | 1.69 | **LOSS** |
| 583 | INTU | 11-21 15:03 | 11-21 15:10 | 666.7 | 667.65 | 12 | 8000.4 | +11.4 | +0.14% | 0.21R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 32.17 | ↓671.97 | 0.8124 | 1.27 | **WIN** |
| 584 | TGT | 11-21 15:05 | 11-21 15:20 | 86.14 | 86.14 | 129 | 11112.06 | +0 | +0% | 0R | 15m | market | trailing-stop | trend | trend | neutral | 79 | ↑85.14 | 0.3091 | 1.98 | **WIN** |
| 585 | DELL | 11-21 15:09 | 11-21 15:17 | 119.44 | 118.1 | 28 | 3344.32 | -37.52 | -1.12% | 1.53R | 8m | market | stop-loss | bearish | mean-revert | noisyHighBeta | 42.03 | ↓119.27 | 0.1398 | 1.46 | **LOSS** |
| 586 | ELF | 11-21 15:12 | 11-21 15:21 | 69.04 | 68.53 | 36 | 2485.44 | -18.36 | -0.74% | 0.97R | 9m | market | stop-loss | mixed | mean-revert | thinChop | 55.97 | ↓68.76 | 0.1601 | 1.12 | **LOSS** |
| 587 | ELF | 11-21 15:30 | 11-21 15:39 | 68.78 | 68.2 | 94 | 6465.32 | -54.52 | -0.84% | 1.01R | 9m | market | stop-loss | mixed | mean-revert | neutral | 45.82 | ↓68.77 | -0.0029 | 0.95 | **LOSS** |
| 588 | TXN | 11-21 15:36 | 11-21 15:51 | 154.91 | 155.99 | 25 | 7900.41 | +27 | +0.7% | 1.4R | 15m | market | trim-profit-target | mixed | mean-revert | neutral | 53.78 | ↑154.69 | 0.2103 | 1.63 | **WIN** |
| 589 | TXN | 11-21 15:36 | 11-21 15:57 | 154.91 | 156.4 | 26 | 7900.41 | +38.74 | +0.96% | 1.92R | 21m | market | timeout | mixed | mean-revert | neutral | 53.78 | ↑154.69 | 0.2103 | 1.63 | **WIN** |
| 590 | MA | 11-21 15:46 | 11-21 16:02 | 539.62 | 537.43 | 12 | 6475.44 | -26.28 | -0.41% | 0.82R | 16m | market | early-reversal | bearish | mean-revert | neutral | 32.43 | ↓538.13 | 0.456 | 1.43 | **LOSS** |
| 591 | LRCX | 11-21 16:03 | 11-21 16:18 | 137.02 | 137.42 | 36 | 4932.72 | +14.4 | +0.29% | 0.53R | 15m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 37.26 | ↓137.38 | 0.0588 | 1.29 | **WIN** |
| 592 | MRVL | 11-21 16:45 | 11-21 16:54 | 76.74 | 76.9 | 45 | 3453.3 | +7.2 | +0.21% | 0.36R | 9m | market | trailing-stop | bearish | mean-revert | noisyHighBeta | 39.39 | ↑75.57 | 0.2873 | 1.8 | **WIN** |
| 593 | AMAT | 11-21 16:58 | 11-21 17:15 | 226.98 | 226.15 | 49 | 11122.02 | -40.67 | -0.37% | 0.74R | 17m | market | early-reversal | trend | trend | neutral | 76.71 | ↑220.57 | 0.9265 | 1.7 | **LOSS** |
| 594 | LRCX | 11-21 16:58 | 11-21 17:02 | 142.52 | 141.59 | 43 | 6128.36 | -39.99 | -0.65% | 1.23R | 4m | market | stop-loss | trend | trend | noisyHighBeta | 74.18 | ↑138.25 | 0.5962 | 1.24 | **LOSS** |
| 595 | RIVN | 11-21 17:00 | 11-21 17:19 | 14.85 | 14.81 | 413 | 6133.05 | -16.52 | -0.27% | 0.39R | 19m | market | early-reversal | trend | trend | noisyHighBeta | 78.57 | ↑14.32 | 0.1003 | 2.98 | **LOSS** |
| 596 | SBUX | 11-21 17:07 | 11-21 17:28 | 86.19 | 86.46 | 130 | 11204.7 | +35.1 | +0.31% | 0.62R | 21m | market | timeout | trend | trend | neutral | 72.31 | ↑84.45 | 0.258 | 1.75 | **WIN** |
| 597 | AMAT | 11-21 17:16 | 11-21 17:33 | 225.97 | 225.34 | 23 | 5197.31 | -14.49 | -0.28% | 0.56R | 17m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 38.79 | ↑221.4 | 0.4806 | 2.2 | **LOSS** |
| 598 | RIVN | 11-24 14:45 | 11-24 14:49 | 15.03 | 14.77 | 357 | 5365.71 | -92.82 | -1.73% | 1.29R | 4m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.69 | ↓15.03 | 0.0318 | 1.15 | **LOSS** |
| 599 | HPE | 11-24 14:50 | 11-24 15:07 | 20.75 | 20.92 | 470 | 9752.5 | +79.9 | +0.82% | 0.98R | 17m | market | trailing-stop | mixed | mean-revert | neutral | 38.35 | ↑20.81 | 0.033 | 2.38 | **WIN** |
| 600 | DELL | 11-24 14:56 | 11-24 15:01 | 126.46 | 128.07 | 39 | 4931.94 | +62.79 | +1.27% | 1.63R | 5m | market | profit-target | mixed | mean-revert | noisyHighBeta | 39.68 | ↑126.24 | 0.5947 | 0.99 | **WIN** |
| 601 | KLAC | 11-24 14:59 | 11-24 15:08 | 1134.33 | 1127.12 | 9 | 10208.97 | -64.89 | -0.64% | 1.1R | 9m | market | stop-loss | trend | trend | neutral | 74.15 | ↑1123.65 | 6.2802 | 1.5 | **LOSS** |
| 602 | LRCX | 11-24 15:00 | 11-24 15:09 | 148.94 | 147.86 | 41 | 6106.54 | -44.28 | -0.73% | 0.95R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 70.17 | ↑146.88 | 0.7557 | 2.64 | **LOSS** |
| 603 | MRVL | 11-24 15:00 | 11-24 15:16 | 80.72 | 80.57 | 75 | 6054 | -11.25 | -0.19% | 0.25R | 16m | market | stagnation | trend | trend | noisyHighBeta | 63.62 | ↑79.51 | 0.3889 | 1.01 | **LOSS** |
| 604 | AMAT | 11-24 15:08 | 11-24 15:24 | 228.55 | 228.43 | 21 | 4799.55 | -2.52 | -0.05% | 0.09R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 43.33 | ↑228.27 | 0.4364 | 1.38 | **LOSS** |
| 605 | DELL | 11-24 15:11 | 11-24 15:19 | 128.43 | 127.25 | 41 | 5265.63 | -48.38 | -0.92% | 0.91R | 8m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 66.81 | ↑126.75 | 0.6578 | 1.05 | **LOSS** |
| 606 | IBM | 11-24 16:12 | 11-24 16:33 | 303.3 | 303.92 | 22 | 6672.6 | +13.64 | +0.2% | 0.4R | 21m | market | timeout | bearish | mean-revert | neutral | 37.93 | ↑301.85 | 0.1641 | 1.46 | **WIN** |
| 607 | CELH | 11-25 15:00 | 11-25 15:16 | 39.73 | 39.7 | 280 | 11124.4 | -8.4 | -0.08% | 0.1R | 16m | market | stagnation | trend | trend | neutral | 68.55 | ↑39.4 | 0.2172 | 2.63 | **LOSS** |
| 608 | RIVN | 11-25 15:15 | 11-25 15:22 | 15.14 | 15.17 | 354 | 5359.56 | +10.62 | +0.2% | 0.23R | 7m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 33.06 | ↑15.15 | 0.0107 | 1.09 | **WIN** |
| 609 | ELF | 11-25 16:52 | 11-25 17:09 | 72.07 | 71.72 | 153 | 11026.71 | -53.55 | -0.49% | 0.98R | 17m | market | early-reversal | trend | trend | neutral | 65.67 | ↑71.18 | 0.13 | 1.35 | **LOSS** |
| 610 | HPE | 11-26 14:42 | 11-26 14:54 | 21.41 | 21.23 | 449 | 9613.09 | -80.82 | -0.84% | 0.88R | 12m | market | stop-loss | mixed | mean-revert | neutral | 53.01 | ↓21.46 | 0.0212 | 1.46 | **LOSS** |
| 611 | RIVN | 11-26 14:51 | 11-26 14:54 | 15.91 | 15.7 | 385 | 6125.35 | -80.85 | -1.32% | 1.69R | 3m | market | stop-loss | trend | trend | noisyHighBeta | 78.82 | ↓15.73 | 0.0715 | 1.3 | **LOSS** |
| 612 | CELH | 11-26 14:55 | 11-26 15:06 | 41.38 | 41.62 | 147 | 6082.86 | +35.28 | +0.58% | 0.74R | 11m | market | trailing-stop | trend | trend | noisyHighBeta | 68.85 | ↑41 | 0.186 | 1.21 | **WIN** |
| 613 | ELF | 11-26 15:14 | 11-26 15:36 | 74.15 | 74.34 | 130 | 9639.5 | +24.7 | +0.26% | 0.3R | 22m | market | timeout | mixed | mean-revert | neutral | 66.88 | ↑73.43 | 0.6146 | 1.18 | **WIN** |
| 614 | DELL | 11-26 15:26 | 11-26 15:39 | 132.09 | 131.17 | 46 | 6076.14 | -42.32 | -0.7% | 0.97R | 13m | market | stop-loss | trend | trend | noisyHighBeta | 56.64 | ↑130.35 | 0.3756 | 1.47 | **LOSS** |
| 615 | AMAT | 11-26 16:00 | 11-26 16:12 | 247.65 | 247.74 | 24 | 5943.6 | +2.16 | +0.04% | 0.08R | 12m | market | breakeven-stop | trend | trend | noisyHighBeta | 78.52 | ↑244.54 | 0.4521 | 1.31 | **WIN** |
| 616 | LRCX | 11-26 16:06 | 11-26 16:22 | 155.68 | 155.59 | 71 | 11053.28 | -6.39 | -0.06% | 0.12R | 16m | market | stagnation | trend | trend | neutral | 79.47 | ↑154.02 | 0.3877 | 1.36 | **LOSS** |
| 617 | RIVN | 11-28 14:58 | 11-28 15:14 | 17.01 | 16.94 | 360 | 6123.6 | -25.2 | -0.41% | 0.45R | 16m | market | early-reversal | trend | trend | noisyHighBeta | 69.23 | ↑16.77 | 0.1276 | 1.64 | **LOSS** |
| 618 | DELL | 11-28 15:12 | 11-28 15:28 | 131.89 | 131.24 | 27 | 3561.03 | -17.55 | -0.49% | 0.98R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 48.65 | ↓131.61 | 0.0661 | 1.75 | **LOSS** |
| 619 | ELF | 11-28 15:59 | 11-28 16:01 | 76.76 | 76.14 | 126 | 9671.76 | -78.12 | -0.81% | 1.56R | 2m | market | stop-loss | mixed | mean-revert | neutral | 60.55 | ↓76.21 | 0.3477 | 5.22 | **LOSS** |
| 620 | MRVL | 11-28 16:27 | 11-28 16:43 | 88.93 | 88.87 | 60 | 5335.8 | -3.6 | -0.07% | 0.14R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 42.86 | ↑87.6 | 0.0855 | 1.34 | **LOSS** |
| 621 | RIVN | 12-01 14:40 | 12-01 14:49 | 16.98 | 17.21 | 304 | 5161.92 | +69.92 | +1.35% | 0.91R | 9m | market | profit-target | mixed | mean-revert | noisyHighBeta | 56.94 | ↑16.95 | 0.0373 | 1.15 | **WIN** |
| 622 | ELF | 12-01 14:48 | 12-01 15:09 | 77.12 | 78.35 | 143 | 11028.16 | +175.89 | +1.59% | 1.81R | 21m | market | timeout | trend | trend | neutral | 61.85 | ↑76.49 | 0.1604 | 3.19 | **WIN** |
| 623 | RIVN | 12-01 14:51 | 12-01 14:58 | 17.29 | 17.35 | 354 | 6120.66 | +21.24 | +0.35% | 0.36R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 67.52 | ↑17.07 | 0.0874 | 2.97 | **WIN** |
| 624 | CELH | 12-01 14:59 | 12-01 15:04 | 41.84 | 42.12 | 266 | 11129.44 | +74.48 | +0.67% | 1.16R | 5m | market | trailing-stop | trend | trend | neutral | 76.88 | ↑41.4 | 0.1292 | 1.06 | **WIN** |
| 625 | RIVN | 12-01 14:59 | 12-01 15:05 | 17.4 | 17.22 | 352 | 6124.8 | -63.36 | -1.03% | 1.13R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 71.43 | ↓17.17 | 0.1078 | 1.07 | **LOSS** |
| 626 | RIVN | 12-01 15:14 | 12-01 15:23 | 17.36 | 17.18 | 298 | 5173.28 | -53.64 | -1.04% | 0.99R | 9m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 44.85 | ↓17.25 | 0.0686 | 0.9 | **LOSS** |
| 627 | ELF | 12-01 15:20 | 12-01 15:25 | 77.77 | 77.84 | 118 | 9176.86 | +8.26 | +0.09% | 0.13R | 5m | market | trailing-stop | bearish | mean-revert | neutral | 60.38 | ↑77.44 | 0.3365 | 2.09 | **WIN** |
| 628 | RIVN | 12-01 16:08 | 12-01 16:29 | 17.22 | 17.33 | 282 | 4856.04 | +31.02 | +0.64% | 1.28R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 52.78 | ↑17.24 | 0.0246 | 0.96 | **WIN** |
| 629 | DELL | 12-02 14:43 | 12-02 15:04 | 135.74 | 137.31 | 48 | 6515.52 | +75.36 | +1.16% | 0.87R | 21m | market | profit-target | mixed | mean-revert | neutral | 72.25 | ↑136.78 | 1.3184 | 0.86 | **WIN** |
| 630 | MRVL | 12-02 14:58 | 12-02 15:07 | 93.79 | 93.16 | 65 | 6096.35 | -40.95 | -0.67% | 0.85R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 68.69 | ↓93.14 | 0.2725 | 1.88 | **LOSS** |
| 631 | RIVN | 12-02 15:02 | 12-02 15:18 | 17.23 | 17.35 | 302 | 5203.46 | +36.24 | +0.7% | 1.06R | 16m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 50 | ↑17.18 | 0.0207 | 1.38 | **WIN** |
| 632 | RIVN | 12-02 15:19 | 12-02 15:27 | 17.33 | 17.2 | 309 | 5354.97 | -40.17 | -0.75% | 1.19R | 8m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 59.37 | ↓17.23 | 0.0426 | 1.37 | **LOSS** |
| 633 | KLAC | 12-02 15:32 | 12-02 16:00 | 1181.07 | 1182.21 | 6 | 7086.42 | +6.84 | +0.1% | 0.2R | 28m | market | timeout | bearish | mean-revert | neutral | 46.26 | ↓1183.34 | 3.9503 | 6.9 | **WIN** |
| 634 | RIVN | 12-02 17:39 | 12-02 17:55 | 17.45 | 17.38 | 235 | 4100.75 | -16.45 | -0.4% | 0.8R | 16m | market | early-reversal | bearish | mean-revert | noisyHighBeta | 33.87 | ↑17.26 | 0.0318 | 3.57 | **LOSS** |
| 635 | SBUX | 12-03 14:37 | 12-03 14:53 | 86.6 | 86.44 | 129 | 11171.4 | -20.64 | -0.18% | 0.32R | 16m | market | stagnation | trend | trend | neutral | 74.75 | ↑86.14 | 0.2374 | 1.07 | **LOSS** |
| 636 | ELF | 12-03 14:54 | 12-03 14:59 | 81.05 | 80.1 | 136 | 11022.8 | -129.2 | -1.17% | 1.07R | 5m | market | stop-loss | trend | trend | neutral | 52.66 | ↑79.65 | 1.1471 | 1.04 | **LOSS** |
| 637 | TGT | 12-03 15:05 | 12-03 15:21 | 92.13 | 91.67 | 91 | 8383.83 | -41.86 | -0.5% | 1R | 16m | market | early-reversal | mixed | mean-revert | neutral | 33.94 | ↓92.3 | 0.137 | 1.02 | **LOSS** |
| 638 | LRCX | 12-03 15:11 | 12-03 15:32 | 155.85 | 156.87 | 62 | 9662.7 | +63.24 | +0.65% | 1.3R | 21m | market | timeout | mixed | mean-revert | neutral | 63.38 | ↑155.14 | 0.2374 | 1.31 | **WIN** |
| 639 | ELF | 12-03 15:44 | 12-03 15:52 | 80.94 | 80.18 | 136 | 11007.84 | -103.36 | -0.94% | 1.38R | 8m | market | stop-loss | trend | trend | neutral | 50.37 | ↓80.21 | 0.0703 | 1.94 | **LOSS** |
| 640 | CELH | 12-03 16:01 | 12-03 16:22 | 41.95 | 42.21 | 265 | 11116.75 | +68.9 | +0.62% | 1.24R | 21m | market | timeout | trend | trend | neutral | 79.89 | ↑41.5 | 0.1196 | 2.48 | **WIN** |
| 641 | MRVL | 12-03 16:49 | 12-03 16:55 | 97.08 | 96.19 | 35 | 3397.8 | -31.15 | -0.92% | 1.46R | 6m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 49.06 | ↓99.07 | 0.0718 | 0.88 | **LOSS** |
| 642 | KLAC | 12-03 17:21 | 12-03 17:28 | 1196.5 | 1201.31 | 9 | 10768.5 | +43.29 | +0.4% | 0.8R | 7m | market | trailing-stop | trend | trend | neutral | 74.7 | ↑1184.75 | 1.5488 | 3.46 | **WIN** |
| 643 | RIVN | 12-04 14:50 | 12-04 14:57 | 18.01 | 17.95 | 340 | 6123.4 | -20.4 | -0.33% | 0.25R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 46.86 | ↓17.93 | 0.0863 | 1.68 | **LOSS** |
| 644 | MRVL | 12-04 16:26 | 12-04 16:42 | 99.88 | 99.56 | 44 | 4394.72 | -14.08 | -0.32% | 0.64R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 57.53 | ↓100.37 | 0.121 | 1.43 | **LOSS** |
| 645 | DELL | 12-04 17:20 | 12-04 17:36 | 138.43 | 137.95 | 70 | 9690.1 | -33.6 | -0.35% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 42.69 | ↑136.5 | 0.1021 | 1.64 | **LOSS** |
| 646 | RIVN | 12-05 14:40 | 12-05 14:47 | 18.45 | 18.16 | 332 | 6125.4 | -96.28 | -1.57% | 1.03R | 7m | market | stop-loss | trend | trend | noisyHighBeta | 69.83 | ↓18.26 | 0.0945 | 2.02 | **LOSS** |
| 647 | MRVL | 12-05 14:41 | 12-05 14:57 | 100.97 | 100.49 | 40 | 4038.8 | -19.2 | -0.48% | 0.32R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 71.31 | ↓101.7 | 1.0155 | 0.91 | **LOSS** |
| 648 | ELF | 12-05 16:06 | 12-05 16:15 | 84.35 | 83.88 | 72 | 6073.2 | -33.84 | -0.56% | 1.12R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 78.29 | ↑82.85 | 0.4011 | 1.12 | **LOSS** |
| 649 | HPE | 12-05 16:44 | 12-05 17:00 | 22.78 | 22.79 | 333 | 7585.74 | +3.33 | +0.04% | 0.08R | 16m | market | trailing-stop | bearish | mean-revert | neutral | 31.25 | ↑22.47 | 0.0056 | 0.88 | **WIN** |
| 650 | IBM | 12-08 14:47 | 12-08 15:03 | 313 | 311.85 | 31 | 9703 | -35.65 | -0.37% | 0.7R | 16m | market | early-reversal | mixed | mean-revert | neutral | 55.34 | ↓313.58 | 1.3602 | 1.46 | **LOSS** |
| 651 | HPE | 12-08 15:00 | 12-08 15:18 | 24.23 | 24.2 | 253 | 6130.19 | -7.59 | -0.12% | 0.14R | 18m | market | stagnation | trend | trend | noisyHighBeta | 64.75 | ↑23.99 | 0.115 | 1.19 | **LOSS** |
| 652 | RIVN | 12-08 15:00 | 12-08 15:12 | 17.52 | 17.37 | 472 | 8269.44 | -70.8 | -0.86% | 0.79R | 12m | market | stop-loss | mixed | mean-revert | neutral | 46.55 | ↓17.54 | -0.0274 | 1.1 | **LOSS** |
| 653 | DELL | 12-08 15:19 | 12-08 15:25 | 141.4 | 140.12 | 44 | 6221.6 | -56.32 | -0.91% | 1.82R | 6m | market | stop-loss | bearish | mean-revert | neutral | 40.05 | ↓141.46 | 0.2101 | 1.57 | **LOSS** |
| 654 | CELH | 12-08 15:22 | 12-08 15:30 | 43.65 | 43.31 | 255 | 11130.75 | -86.7 | -0.78% | 1.56R | 8m | market | stop-loss | trend | trend | neutral | 69.19 | ↑42.84 | 0.1086 | 1.75 | **LOSS** |
| 655 | MRVL | 12-08 17:44 | 12-08 17:59 | 91.32 | 92.07 | 46 | 4200.72 | +34.5 | +0.82% | 0.71R | 15m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 48.17 | ↑90.45 | 0.2488 | 1.01 | **WIN** |
| 656 | HPE | 12-09 15:31 | 12-09 15:52 | 24.34 | 24.42 | 251 | 6109.34 | +20.08 | +0.33% | 0.66R | 21m | market | timeout | trend | trend | noisyHighBeta | 73.03 | ↑24.07 | 0.073 | 1.64 | **WIN** |
| 657 | MRVL | 12-10 14:48 | 12-10 15:09 | 91.3 | 91.41 | 58 | 5295.4 | +6.38 | +0.12% | 0.13R | 21m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 44.1 | ↓91.57 | 0.4356 | 1.23 | **WIN** |
| 658 | NKE | 12-10 14:49 | 12-10 15:10 | 64.48 | 64.63 | 173 | 11155.04 | +25.95 | +0.23% | 0.46R | 21m | market | timeout | trend | trend | neutral | 60.09 | ↑64.13 | 0.1627 | 1.46 | **WIN** |
| 659 | AMAT | 12-10 14:50 | 12-10 14:53 | 269.07 | 267.44 | 36 | 9686.52 | -58.68 | -0.61% | 1.22R | 3m | market | stop-loss | mixed | mean-revert | neutral | 68.16 | ↓268.31 | 0.5896 | 0.95 | **LOSS** |
| 660 | RIVN | 12-10 14:54 | 12-10 15:04 | 18.27 | 18.02 | 608 | 11108.16 | -152 | -1.37% | 1.01R | 10m | market | stop-loss | trend | trend | neutral | 77.99 | ↓18.04 | 0.1177 | 1.34 | **LOSS** |
| 661 | DELL | 12-10 15:10 | 12-10 15:26 | 136.85 | 137.68 | 35 | 9716.35 | +29.05 | +0.61% | 1.22R | 16m | market | trim-profit-target | mixed | mean-revert | neutral | 57.39 | ↑137.01 | -0.0099 | 3.93 | **WIN** |
| 662 | DELL | 12-10 15:10 | 12-10 15:28 | 136.85 | 137.44 | 36 | 9716.35 | +21.24 | +0.43% | 0.86R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 57.39 | ↑137.01 | -0.0099 | 3.93 | **WIN** |
| 663 | MRVL | 12-10 15:53 | 12-10 16:09 | 91.91 | 91.64 | 58 | 5330.78 | -15.66 | -0.29% | 0.52R | 16m | market | early-reversal | mixed | mean-revert | noisyHighBeta | 55.49 | ↑91.6 | 0.1298 | 1.06 | **LOSS** |
| 664 | HPE | 12-10 16:26 | 12-10 16:45 | 25.07 | 25.05 | 244 | 6117.08 | -4.88 | -0.08% | 0.16R | 19m | market | stagnation | trend | trend | noisyHighBeta | 74.67 | ↑24.79 | 0.055 | 4.41 | **LOSS** |
| 665 | RIVN | 12-11 15:16 | 12-11 15:25 | 16.73 | 16.72 | 576 | 9636.48 | -5.76 | -0.06% | 0.06R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 56.25 | ↓16.78 | -0.0235 | 1.43 | **LOSS** |
| 666 | ELF | 12-11 15:48 | 12-11 16:00 | 78.15 | 78.29 | 102 | 7971.3 | +14.28 | +0.18% | 0.36R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 26.38 | ↓78.6 | -0.0941 | 0.99 | **WIN** |
| 667 | NKE | 12-12 14:50 | 12-12 15:06 | 68.8 | 68.5 | 141 | 9700.8 | -42.3 | -0.44% | 0.86R | 16m | market | early-reversal | mixed | mean-revert | neutral | 61.36 | ↓68.7 | 0.273 | 0.98 | **LOSS** |
| 668 | RIVN | 12-12 14:58 | 12-12 15:00 | 19.11 | 18.9 | 319 | 6096.09 | -66.99 | -1.1% | 0.55R | 2m | market | trailing-stop | trend | trend | noisyHighBeta | 72.34 | ↑18.47 | 0.4217 | 1.06 | **LOSS** |
| 669 | ELF | 12-12 15:10 | 12-12 15:26 | 78.21 | 77.92 | 123 | 9619.83 | -35.67 | -0.37% | 0.4R | 16m | market | stagnation | mixed | mean-revert | neutral | 54.04 | ↓78.31 | 0.1746 | 1 | **LOSS** |
| 670 | AMAT | 12-15 14:45 | 12-15 14:53 | 265.4 | 263.19 | 42 | 11146.8 | -92.82 | -0.83% | 1.3R | 8m | market | stop-loss | trend | trend | neutral | 69.9 | ↓264.21 | 1.5462 | 1.03 | **LOSS** |
| 671 | KLAC | 12-15 14:46 | 12-15 15:02 | 1243.4 | 1236.65 | 7 | 8703.8 | -47.25 | -0.54% | 0.57R | 16m | market | early-reversal | mixed | mean-revert | neutral | 74.57 | ↓1241.74 | 13.1041 | 2.87 | **LOSS** |
| 672 | TGT | 12-15 14:49 | 12-15 14:53 | 97.12 | 96.46 | 100 | 9712 | -66 | -0.68% | 1.36R | 4m | market | stop-loss | mixed | mean-revert | neutral | 47.62 | ↓97.38 | 0.0683 | 1.38 | **LOSS** |
| 673 | RIVN | 12-15 16:30 | 12-15 16:36 | 18.99 | 18.72 | 321 | 6095.79 | -86.67 | -1.42% | 1.87R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 79.55 | ↓18.85 | 0.0547 | 1.08 | **LOSS** |
| 674 | ELF | 12-15 16:33 | 12-15 16:43 | 78.26 | 77.82 | 141 | 11034.66 | -62.04 | -0.56% | 1.12R | 10m | market | stop-loss | trend | trend | neutral | 79.09 | ↑77.26 | 0.332 | 1 | **LOSS** |
| 675 | DELL | 12-16 14:48 | 12-16 15:01 | 134.64 | 133.84 | 82 | 11040.48 | -65.6 | -0.59% | 0.67R | 13m | market | stop-loss | trend | trend | neutral | 79.55 | ↑133.17 | 0.8615 | 1.3 | **LOSS** |
| 676 | KLAC | 12-16 14:54 | 12-16 15:09 | 1227.28 | 1225.35 | 2 | 2454.56 | -3.86 | -0.16% | 0.29R | 15m | market | trailing-stop | mixed | mean-revert | thinChop | 45.25 | ↓1228.35 | 0.4131 | 1.06 | **LOSS** |
| 677 | NKE | 12-16 15:00 | 12-16 15:04 | 67.73 | 67.36 | 141 | 9549.93 | -52.17 | -0.55% | 1.1R | 4m | market | stop-loss | mixed | mean-revert | neutral | 51.3 | ↓67.79 | 0.0286 | 1.9 | **LOSS** |
| 678 | RIVN | 12-16 15:03 | 12-16 15:09 | 18.79 | 18.64 | 269 | 5054.51 | -40.35 | -0.8% | 0.85R | 6m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 50 | ↓18.73 | 0.0381 | 0.93 | **LOSS** |
| 679 | ELF | 12-16 17:00 | 12-16 17:08 | 81.02 | 80.31 | 136 | 11018.72 | -96.56 | -0.88% | 1.76R | 8m | market | stop-loss | trend | trend | neutral | 79.59 | ↑79.18 | 0.4687 | 1.26 | **LOSS** |
| 680 | CELH | 12-16 17:44 | 12-16 18:05 | 43.1 | 43.28 | 206 | 8878.6 | +37.08 | +0.42% | 0.84R | 21m | market | timeout | mixed | mean-revert | neutral | 62.38 | ↑43.15 | 0.1049 | 1.13 | **WIN** |
| 681 | ELF | 12-17 15:01 | 12-17 15:15 | 79.52 | 79.35 | 116 | 9224.32 | -19.72 | -0.21% | 0.29R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 49.13 | ↓79.64 | 0.2564 | 1.59 | **LOSS** |
| 682 | RIVN | 12-17 15:12 | 12-17 15:18 | 18.14 | 18.12 | 294 | 5333.16 | -5.88 | -0.11% | 0.13R | 6m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 59.43 | ↓18.14 | 0.0308 | 1.27 | **LOSS** |
| 683 | MRVL | 12-17 15:24 | 12-17 15:31 | 86.99 | 86.19 | 127 | 11047.73 | -101.6 | -0.92% | 1.56R | 7m | market | stop-loss | trend | trend | neutral | 77.78 | ↑86.12 | 0.2311 | 1.9 | **LOSS** |
| 684 | MRVL | 12-17 16:30 | 12-17 16:46 | 83.77 | 83.57 | 91 | 7623.07 | -18.2 | -0.24% | 0.42R | 16m | market | early-reversal | mixed | mean-revert | neutral | 55.3 | ↓85.25 | 0.0415 | 1.94 | **LOSS** |
| 685 | LRCX | 12-18 14:52 | 12-18 15:04 | 167.52 | 167.11 | 66 | 11056.32 | -27.06 | -0.24% | 0.3R | 12m | market | trailing-stop | trend | trend | neutral | 59.38 | ↑165.72 | 1.8943 | 1.3 | **LOSS** |
| 686 | SBUX | 12-18 15:00 | 12-18 15:12 | 89.65 | 89.12 | 125 | 11206.25 | -66.25 | -0.59% | 1.18R | 12m | market | stop-loss | trend | trend | neutral | 74.07 | ↑88.94 | 0.4403 | 1.68 | **LOSS** |
| 687 | TGT | 12-18 15:02 | 12-18 15:15 | 100.49 | 100.87 | 111 | 11154.39 | +42.18 | +0.38% | 0.76R | 13m | market | trailing-stop | trend | trend | neutral | 70.06 | ↑99.83 | 0.2494 | 2 | **WIN** |
| 688 | TXN | 12-18 15:11 | 12-18 15:32 | 177.08 | 177.19 | 55 | 9739.4 | +6.05 | +0.06% | 0.12R | 21m | market | timeout | mixed | mean-revert | neutral | 53.28 | ↑177.04 | 0.2804 | 2.06 | **WIN** |
| 689 | RIVN | 12-18 16:42 | 12-18 16:57 | 18.87 | 18.74 | 323 | 6095.01 | -41.99 | -0.69% | 1.38R | 15m | market | stop-loss | trend | trend | noisyHighBeta | 74.6 | ↑18.72 | 0.0485 | 1.33 | **LOSS** |
| 690 | LRCX | 12-19 14:49 | 12-19 15:05 | 169.57 | 170.64 | 23 | 7800.22 | +24.61 | +0.63% | 0.84R | 16m | market | trim-profit-target | bearish | mean-revert | neutral | 24.58 | ↑170.08 | 0.9125 | 1.29 | **WIN** |
| 691 | LRCX | 12-19 14:49 | 12-19 15:07 | 169.57 | 170.33 | 23 | 7800.22 | +17.48 | +0.45% | 0.6R | 18m | market | trailing-stop | bearish | mean-revert | neutral | 24.58 | ↑170.08 | 0.9125 | 1.29 | **WIN** |
| 692 | RIVN | 12-19 14:53 | 12-19 15:01 | 21.27 | 21.15 | 286 | 6083.22 | -34.32 | -0.56% | 0.28R | 8m | market | trailing-stop | trend | trend | noisyHighBeta | 56.62 | ↑21 | 0.1706 | 1.83 | **LOSS** |
| 693 | DELL | 12-19 15:00 | 12-19 15:16 | 126.68 | 126.27 | 87 | 11021.16 | -35.67 | -0.32% | 0.64R | 16m | market | early-reversal | trend | trend | neutral | 62.34 | ↑125.7 | 0.4029 | 4.81 | **LOSS** |
| 694 | NKE | 12-19 15:10 | 12-19 15:22 | 59.15 | 59.97 | 152 | 8990.8 | +124.64 | +1.39% | 1.93R | 12m | market | profit-target | mixed | mean-revert | neutral | 54.13 | ↑59.28 | -0.1761 | 1.03 | **WIN** |
| 695 | IBM | 12-19 15:24 | 12-19 15:27 | 306.35 | 304.66 | 36 | 11028.6 | -60.84 | -0.55% | 1.1R | 3m | market | stop-loss | trend | trend | neutral | 78.84 | ↑303.04 | 0.9701 | 2.55 | **LOSS** |
| 696 | CELH | 12-19 15:24 | 12-19 15:30 | 42.64 | 42.39 | 261 | 11129.04 | -65.25 | -0.59% | 1.13R | 6m | market | stop-loss | trend | trend | neutral | 65 | ↑41.83 | 0.1927 | 1.22 | **LOSS** |
| 697 | KLAC | 12-19 15:27 | 12-19 15:48 | 1253.74 | 1252.25 | 7 | 8776.18 | -10.43 | -0.12% | 0.24R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 38.6 | ↓1257.11 | 3.1096 | 0.92 | **LOSS** |
| 698 | NKE | 12-19 15:49 | 12-19 15:59 | 60.04 | 59.62 | 145 | 8705.8 | -60.9 | -0.7% | 1.4R | 10m | market | stop-loss | mixed | mean-revert | neutral | 36.11 | ↑59.45 | 0.0826 | 1.31 | **LOSS** |
| 699 | TXN | 12-22 14:44 | 12-22 15:04 | 178.57 | 178.42 | 45 | 8035.65 | -6.75 | -0.08% | 0.12R | 20m | market | stagnation | bearish | mean-revert | neutral | 68.19 | ↓179.02 | 0.3886 | 1.02 | **LOSS** |
| 700 | DELL | 12-22 15:01 | 12-22 15:06 | 126.65 | 125.9 | 21 | 2659.65 | -15.75 | -0.59% | 1.18R | 5m | market | stop-loss | mixed | mean-revert | thinChop | 39.5 | ↓126.92 | 0.0953 | 1.61 | **LOSS** |
| 701 | CELH | 12-22 15:36 | 12-22 15:59 | 44.25 | 44.37 | 220 | 9735 | +26.4 | +0.27% | 0.54R | 23m | market | timeout | mixed | mean-revert | neutral | 53.97 | ↑44.02 | 0.0667 | 0.86 | **WIN** |
| 702 | MRVL | 12-23 14:54 | 12-23 15:02 | 85.53 | 84.99 | 113 | 9664.89 | -61.02 | -0.63% | 1.26R | 8m | market | stop-loss | mixed | mean-revert | neutral | 53.06 | ↓85.63 | 0.1652 | 1.52 | **LOSS** |
| 703 | ELF | 12-23 16:03 | 12-23 16:21 | 77.34 | 77.65 | 124 | 9590.16 | +38.44 | +0.4% | 0.8R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 63.24 | ↑77.51 | 0.1008 | 1.46 | **WIN** |
| 704 | NKE | 12-24 14:47 | 12-24 15:03 | 59.61 | 60.47 | 132 | 7868.52 | +113.52 | +1.44% | 1.69R | 16m | market | profit-target | bearish | mean-revert | neutral | 60.17 | ↑59.66 | 0.5218 | 0.92 | **WIN** |
| 705 | ELF | 12-24 17:37 | 12-24 17:53 | 79.95 | 79.78 | 137 | 10953.15 | -23.29 | -0.21% | 0.4R | 16m | market | stagnation | breakout | trend | neutral | 78.09 | ↑78.27 | 0.3438 | 1.06 | **LOSS** |
| 706 | LRCX | 12-26 14:36 | 12-26 14:48 | 179.06 | 178.02 | 62 | 11101.72 | -64.48 | -0.58% | 1.16R | 12m | market | stop-loss | trend | trend | neutral | 79.04 | ↓178.57 | 0.4688 | 1.74 | **LOSS** |
| 707 | TGT | 12-26 14:45 | 12-26 15:04 | 98.53 | 99.87 | 113 | 11133.89 | +151.42 | +1.36% | 1.51R | 19m | market | profit-target | trend | trend | neutral | 73.83 | ↑98.07 | 0.5053 | 1.2 | **WIN** |
| 708 | ELF | 12-26 14:47 | 12-26 14:50 | 80.54 | 80.24 | 136 | 10953.44 | -40.8 | -0.37% | 0.54R | 3m | market | trailing-stop | breakout | trend | neutral | 79.24 | ↓80.35 | 0.4947 | 2.01 | **LOSS** |
| 709 | TGT | 12-26 15:06 | 12-26 15:17 | 99.43 | 99.57 | 98 | 9744.14 | +13.72 | +0.14% | 0.11R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 60.91 | ↑99.22 | 0.4945 | 1.58 | **WIN** |
| 710 | NKE | 12-29 14:50 | 12-29 14:57 | 61.71 | 61.36 | 181 | 11169.51 | -63.35 | -0.57% | 1.08R | 7m | market | stop-loss | trend | trend | neutral | 75.6 | ↑61.27 | 0.2024 | 1.66 | **LOSS** |
| 711 | CELH | 12-29 14:58 | 12-29 15:14 | 46.48 | 46.37 | 62 | 2881.76 | -6.82 | -0.24% | 0.44R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 52.25 | ↓46.42 | 0.148 | 0.91 | **LOSS** |
| 712 | MRVL | 12-30 14:48 | 12-30 15:01 | 87.15 | 87.52 | 127 | 11068.05 | +46.99 | +0.42% | 0.74R | 13m | market | trailing-stop | trend | trend | neutral | 66.59 | ↑86.36 | 0.1966 | 1.2 | **WIN** |
| 713 | RIVN | 01-02 14:31 | 01-02 14:34 | 19.98 | 19.98 | 554 | 11068.92 | +0 | +0% | 0R | 3m | market | trailing-stop | trend | trend | neutral | 70.11 | ↑19.88 | 0.0203 | 1.03 | **WIN** |
| 714 | MRVL | 01-02 14:53 | 01-02 15:05 | 88.55 | 89.21 | 54 | 9651.95 | +35.64 | +0.75% | 1.01R | 12m | market | trim-profit-target | mixed | mean-revert | neutral | 57.42 | ↑88.32 | 0.5866 | 0.92 | **WIN** |
| 715 | MRVL | 01-02 14:53 | 01-02 15:14 | 88.55 | 88.8 | 55 | 9651.95 | +13.75 | +0.28% | 0.38R | 21m | market | trailing-stop | mixed | mean-revert | neutral | 57.42 | ↑88.32 | 0.5866 | 0.92 | **WIN** |
| 716 | LRCX | 01-02 14:55 | 01-02 15:12 | 181.24 | 182.42 | 24 | 8699.52 | +28.32 | +0.65% | 1.27R | 17m | market | trim-profit-target | mixed | mean-revert | neutral | 48.79 | ↑180.26 | 1.4261 | 1.12 | **WIN** |
| 717 | LRCX | 01-02 14:55 | 01-02 15:16 | 181.24 | 182.51 | 24 | 8699.52 | +30.48 | +0.7% | 1.37R | 21m | market | timeout | mixed | mean-revert | neutral | 48.79 | ↑180.26 | 1.4261 | 1.12 | **WIN** |
| 718 | CELH | 01-02 15:11 | 01-02 15:27 | 46.81 | 46.76 | 208 | 9736.48 | -10.4 | -0.11% | 0.18R | 16m | market | stagnation | mixed | mean-revert | neutral | 55.86 | ↑46.39 | 0.2512 | 1.28 | **LOSS** |
| 719 | ELF | 01-02 16:22 | 01-02 16:43 | 77.62 | 77.49 | 142 | 11022.04 | -18.46 | -0.17% | 0.32R | 21m | market | stagnation | trend | trend | neutral | 51.79 | ↑76.59 | 0.1762 | 2.34 | **LOSS** |
| 720 | MRVL | 01-02 16:24 | 01-02 16:41 | 89.67 | 89.71 | 123 | 11029.41 | +4.92 | +0.04% | 0.08R | 17m | market | breakeven-stop | trend | trend | neutral | 73 | ↑88.78 | 0.2481 | 1.17 | **WIN** |
| 721 | CELH | 01-05 14:46 | 01-05 14:50 | 47.84 | 48 | 171 | 8180.64 | +27.36 | +0.33% | 0.49R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 28.25 | ↓48.16 | -0.0023 | 1.27 | **WIN** |
| 722 | MRVL | 01-05 14:51 | 01-05 14:54 | 91.48 | 91.42 | 64 | 5854.72 | -3.84 | -0.07% | 0.08R | 3m | market | trailing-stop | bearish | mean-revert | neutral | 30.85 | ↓92.61 | 0.2876 | 1.54 | **LOSS** |
| 723 | TGT | 01-05 14:52 | 01-05 15:08 | 101.12 | 100.94 | 96 | 9707.52 | -17.28 | -0.18% | 0.36R | 16m | market | stagnation | mixed | mean-revert | neutral | 50.92 | ↓101.32 | 0.2159 | 3.23 | **LOSS** |
| 724 | KLAC | 01-05 15:01 | 01-05 15:23 | 1336.83 | 1352.8 | 4 | 5347.32 | +63.88 | +1.19% | 1.4R | 22m | market | timeout | bearish | mean-revert | neutral | 39.91 | ↑1337.35 | 11.9483 | 1.05 | **WIN** |
| 725 | RIVN | 01-05 15:01 | 01-05 15:07 | 19.66 | 19.72 | 309 | 6074.94 | +18.54 | +0.31% | 0.32R | 6m | market | trailing-stop | trend | trend | noisyHighBeta | 63.91 | ↑19.41 | 0.033 | 3.26 | **WIN** |
| 726 | LRCX | 01-05 15:04 | 01-05 15:25 | 194.65 | 195.54 | 57 | 11095.05 | +50.73 | +0.46% | 0.6R | 21m | market | timeout | trend | trend | neutral | 68.7 | ↑193.05 | 0.7829 | 1.48 | **WIN** |
| 727 | TGT | 01-05 15:34 | 01-05 15:53 | 100.84 | 100.75 | 59 | 5949.56 | -5.31 | -0.09% | 0.18R | 19m | market | stagnation | bearish | mean-revert | neutral | 24.33 | ↓101.22 | 0.0015 | 1.63 | **LOSS** |
| 728 | SBUX | 01-06 14:41 | 01-06 15:02 | 87.53 | 88.5 | 128 | 11203.84 | +124.16 | +1.11% | 1.63R | 21m | market | timeout | trend | trend | neutral | 68.26 | ↑86.86 | 0.0743 | 1.84 | **WIN** |
| 729 | TXN | 01-06 14:47 | 01-06 15:04 | 186.24 | 188.42 | 52 | 9684.48 | +113.36 | +1.17% | 1.56R | 17m | market | profit-target | mixed | mean-revert | neutral | 63.43 | ↑185.2 | 2.0761 | 1.64 | **WIN** |
| 730 | INTU | 01-06 14:50 | 01-06 14:56 | 644.36 | 640.6 | 17 | 10954.12 | -63.92 | -0.58% | 1.16R | 6m | market | stop-loss | trend | trend | neutral | 79.21 | ↑637.74 | 2.1452 | 1.6 | **LOSS** |
| 731 | AMAT | 01-06 14:53 | 01-06 15:08 | 294.42 | 296.35 | 18 | 10893.54 | +34.74 | +0.66% | 1.22R | 15m | market | trim-profit-target | trend | trend | neutral | 72.16 | ↑291.25 | 2.0204 | 1.25 | **WIN** |
| 732 | AMAT | 01-06 14:53 | 01-06 15:12 | 294.42 | 296.21 | 19 | 10893.54 | +34.01 | +0.61% | 1.13R | 19m | market | trailing-stop | trend | trend | neutral | 72.16 | ↑291.25 | 2.0204 | 1.25 | **WIN** |
| 733 | LRCX | 01-06 14:53 | 01-06 15:03 | 203.5 | 206.05 | 54 | 10989 | +137.7 | +1.25% | 1.47R | 10m | market | profit-target | trend | trend | neutral | 73.16 | ↑200.3 | 1.4439 | 1.1 | **WIN** |
| 734 | KLAC | 01-06 15:00 | 01-06 15:16 | 1396.23 | 1391.07 | 7 | 9773.61 | -36.12 | -0.37% | 0.74R | 16m | market | early-reversal | trend | trend | neutral | 66.03 | ↑1385.25 | 5.908 | 2.99 | **LOSS** |
| 735 | HPE | 01-06 15:06 | 01-06 15:23 | 24.27 | 24.25 | 459 | 11139.93 | -9.18 | -0.08% | 0.16R | 17m | market | stagnation | trend | trend | neutral | 79.79 | ↑24.09 | 0.0438 | 1.15 | **LOSS** |
| 736 | LRCX | 01-06 15:08 | 01-06 15:17 | 205.24 | 204.98 | 47 | 9646.28 | -12.22 | -0.13% | 0.18R | 9m | market | trailing-stop | mixed | mean-revert | neutral | 61.71 | ↑202.14 | 1.4659 | 1.37 | **LOSS** |
| 737 | RIVN | 01-06 15:46 | 01-06 16:07 | 19.39 | 19.4 | 265 | 5138.35 | +2.65 | +0.05% | 0.08R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 44.9 | ↓19.42 | 0.0252 | 2.03 | **WIN** |
| 738 | ELF | 01-06 16:03 | 01-06 16:18 | 79.91 | 80.06 | 137 | 10947.67 | +20.55 | +0.19% | 0.38R | 15m | market | trailing-stop | trend | trend | neutral | 62.87 | ↑78.61 | 0.2246 | 2.81 | **WIN** |
| 739 | LRCX | 01-06 16:18 | 01-06 16:38 | 207.7 | 208.75 | 26 | 11008.1 | +27.3 | +0.51% | 0.88R | 20m | market | trim-profit-target | trend | trend | neutral | 71.15 | ↑204.02 | 0.6134 | 1.45 | **WIN** |
| 740 | LRCX | 01-06 16:18 | 01-06 16:39 | 207.7 | 209.09 | 27 | 11008.1 | +37.53 | +0.67% | 1.16R | 21m | market | timeout | trend | trend | neutral | 71.15 | ↑204.02 | 0.6134 | 1.45 | **WIN** |
| 741 | TXN | 01-06 16:19 | 01-06 16:40 | 191.59 | 191.42 | 44 | 8429.96 | -7.48 | -0.09% | 0.18R | 21m | market | stagnation | mixed | mean-revert | neutral | 45.13 | ↑188.1 | 0.3654 | 1.11 | **LOSS** |
| 742 | LRCX | 01-06 16:42 | 01-06 17:04 | 207.84 | 208.2 | 47 | 9768.48 | +16.92 | +0.17% | 0.31R | 22m | market | timeout | mixed | mean-revert | neutral | 47.7 | ↑204.84 | 0.414 | 1.33 | **WIN** |
| 743 | RIVN | 01-06 17:05 | 01-06 17:21 | 19.69 | 19.59 | 309 | 6084.21 | -30.9 | -0.51% | 1.02R | 16m | market | early-reversal | trend | trend | noisyHighBeta | 66.18 | ↑19.43 | 0.0293 | 1.23 | **LOSS** |
| 744 | LRCX | 01-06 17:15 | 01-06 17:30 | 209.8 | 208.49 | 53 | 11119.4 | -69.43 | -0.62% | 1.24R | 15m | market | stop-loss | trend | trend | neutral | 73.42 | ↑205.13 | 0.3041 | 2.01 | **LOSS** |
| 745 | CELH | 01-07 15:01 | 01-07 15:02 | 49.37 | 49.06 | 59 | 2912.83 | -18.29 | -0.63% | 1.26R | 1m | market | stop-loss | mixed | mean-revert | thinChop | 67.92 | ↓49.28 | 0.1767 | 1.71 | **LOSS** |
| 746 | CELH | 01-07 15:14 | 01-07 15:35 | 49.48 | 49.75 | 225 | 11133 | +60.75 | +0.55% | 0.98R | 21m | market | timeout | trend | trend | neutral | 47.35 | ↑49.25 | 0.0402 | 1.39 | **WIN** |
| 747 | CELH | 01-07 15:58 | 01-07 16:19 | 50.95 | 51.12 | 218 | 11107.1 | +37.06 | +0.33% | 0.48R | 21m | market | timeout | trend | trend | neutral | 69.11 | ↑49.73 | 0.2848 | 3.1 | **WIN** |
| 748 | RIVN | 01-07 16:16 | 01-07 16:21 | 19.8 | 19.67 | 307 | 6078.6 | -39.91 | -0.66% | 1.32R | 5m | market | stop-loss | trend | trend | noisyHighBeta | 76.54 | ↑19.26 | 0.0436 | 1.75 | **LOSS** |
| 749 | RIVN | 01-07 16:22 | 01-07 16:43 | 19.67 | 19.82 | 270 | 5310.9 | +40.5 | +0.76% | 1.33R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 62.37 | ↑19.28 | 0.037 | 1.69 | **WIN** |
| 750 | ELF | 01-07 16:32 | 01-07 16:53 | 79.75 | 80.11 | 113 | 9011.75 | +40.68 | +0.45% | 0.9R | 21m | market | timeout | mixed | mean-revert | neutral | 45.33 | ↑78.86 | 0.2344 | 1.08 | **WIN** |
| 751 | ELF | 01-07 17:03 | 01-07 17:32 | 80.14 | 80.53 | 120 | 9616.8 | +46.8 | +0.49% | 0.92R | 29m | market | timeout | mixed | mean-revert | neutral | 60.4 | ↑79 | 0.1392 | 1.89 | **WIN** |
| 752 | ELF | 01-07 17:36 | 01-07 17:52 | 80.67 | 80.5 | 136 | 10971.12 | -23.12 | -0.21% | 0.31R | 16m | market | stagnation | trend | trend | neutral | 57.21 | ↑79.11 | 0.2335 | 1.2 | **LOSS** |
| 753 | RIVN | 01-07 17:56 | 01-07 18:03 | 20.33 | 20.12 | 299 | 6078.67 | -62.79 | -1.03% | 1.78R | 7m | market | stop-loss | trend | trend | noisyHighBeta | 62.63 | ↑19.54 | 0.0171 | 2.89 | **LOSS** |
| 754 | RIVN | 01-08 14:45 | 01-08 14:46 | 20.52 | 20.5 | 296 | 6073.92 | -5.92 | -0.1% | 0.05R | 1m | market | trailing-stop | trend | trend | noisyHighBeta | 70.5 | ↑20.32 | 0.0523 | 2.41 | **LOSS** |
| 755 | NKE | 01-08 15:56 | 01-08 16:10 | 64.08 | 64.09 | 125 | 8010 | +1.25 | +0.02% | 0.04R | 14m | market | breakeven-stop | bearish | mean-revert | neutral | 41.83 | ↑63.57 | 0.0545 | 1.6 | **WIN** |
| 756 | ELF | 01-08 16:06 | 01-08 16:23 | 84.56 | 85.57 | 114 | 9639.84 | +115.14 | +1.19% | 2.13R | 17m | market | profit-target | mixed | mean-revert | neutral | 68.49 | ↑83.34 | 0.4005 | 1.78 | **WIN** |
| 757 | CELH | 01-08 16:50 | 01-08 17:06 | 52 | 51.82 | 214 | 11128 | -38.52 | -0.35% | 0.7R | 16m | market | early-reversal | trend | trend | neutral | 78.57 | ↑50.95 | 0.2186 | 1.79 | **LOSS** |
| 758 | ELF | 01-08 17:03 | 01-08 17:14 | 86.55 | 85.9 | 111 | 9607.05 | -72.15 | -0.75% | 1.5R | 11m | market | stop-loss | mixed | mean-revert | neutral | 71.56 | ↑83.99 | 0.5366 | 3.6 | **LOSS** |
| 759 | AMAT | 01-09 14:51 | 01-09 15:06 | 292.02 | 292.07 | 26 | 7592.52 | +1.3 | +0.02% | 0.03R | 15m | market | trailing-stop | bearish | mean-revert | neutral | 48.21 | ↑291.86 | 2.1469 | 1.66 | **WIN** |
| 760 | LRCX | 01-09 14:52 | 01-09 15:03 | 209.19 | 212 | 30 | 6275.7 | +84.3 | +1.34% | 1.46R | 11m | market | profit-target | bearish | mean-revert | neutral | 41.34 | ↑208.86 | 1.6637 | 0.92 | **WIN** |
| 761 | NKE | 01-09 14:55 | 01-09 15:01 | 66.56 | 65.93 | 167 | 11115.52 | -105.21 | -0.95% | 1.9R | 6m | market | stop-loss | trend | trend | neutral | 78.01 | ↓65.94 | 0.2479 | 1.28 | **LOSS** |
| 762 | NKE | 01-09 15:02 | 01-09 15:03 | 65.8 | 64.86 | 128 | 8422.4 | -120.32 | -1.43% | 2.38R | 1m | market | stop-loss | bearish | mean-revert | neutral | 34.75 | ↓65.96 | 0.1113 | 7.69 | **LOSS** |
| 763 | CELH | 01-09 15:04 | 01-09 15:25 | 52.37 | 52.92 | 186 | 9740.82 | +102.3 | +1.05% | 1.88R | 21m | market | timeout | mixed | mean-revert | neutral | 57.43 | ↑52.18 | 0.2632 | 1.32 | **WIN** |
| 764 | AMAT | 01-09 15:07 | 01-09 15:28 | 291.89 | 292.51 | 33 | 9632.37 | +20.46 | +0.21% | 0.34R | 21m | market | timeout | mixed | mean-revert | neutral | 41.76 | ↑292.03 | 0.8897 | 1.07 | **WIN** |
| 765 | KLAC | 01-09 15:16 | 01-09 15:37 | 1384.37 | 1390.34 | 8 | 11074.96 | +47.76 | +0.43% | 0.68R | 21m | market | timeout | trend | trend | neutral | 61.57 | ↑1362.31 | 8.8168 | 2.6 | **WIN** |
| 766 | LRCX | 01-09 15:18 | 01-09 15:31 | 212.47 | 213.07 | 52 | 11048.44 | +31.2 | +0.28% | 0.36R | 13m | market | trailing-stop | trend | trend | neutral | 58.27 | ↑210.27 | 0.7068 | 7.83 | **WIN** |
| 767 | MRVL | 01-09 15:29 | 01-09 15:36 | 83.7 | 83.69 | 132 | 11048.4 | -1.32 | -0.01% | 0.02R | 7m | market | breakeven-stop | trend | trend | neutral | 74.14 | ↑83.12 | 0.1741 | 1.52 | **LOSS** |
| 768 | CELH | 01-09 15:31 | 01-09 15:53 | 52.47 | 52.85 | 168 | 8814.96 | +63.84 | +0.72% | 1.44R | 22m | market | timeout | mixed | mean-revert | neutral | 53.52 | ↑52.38 | 0.1016 | 1.1 | **WIN** |
| 769 | LRCX | 01-09 16:22 | 01-09 16:32 | 216.36 | 215.05 | 45 | 9736.2 | -58.95 | -0.61% | 1.22R | 10m | market | stop-loss | mixed | mean-revert | neutral | 46.74 | ↑212.57 | 0.5004 | 1.24 | **LOSS** |
| 770 | RIVN | 01-09 16:46 | 01-09 17:03 | 19.77 | 19.74 | 238 | 4705.26 | -7.14 | -0.15% | 0.21R | 17m | market | stagnation | mixed | mean-revert | noisyHighBeta | 58.62 | ↓19.77 | 0.0598 | 1 | **LOSS** |
| 771 | ELF | 01-09 16:57 | 01-09 17:15 | 85.93 | 85.77 | 57 | 4898.01 | -9.12 | -0.19% | 0.38R | 18m | market | stagnation | mixed | mean-revert | noisyHighBeta | 64.72 | ↓85.78 | 0.2534 | 1.64 | **LOSS** |
| 772 | LRCX | 01-09 17:50 | 01-09 18:06 | 217.64 | 216.76 | 51 | 11099.64 | -44.88 | -0.4% | 0.8R | 16m | market | early-reversal | trend | trend | neutral | 77.9 | ↑213.57 | 0.5116 | 1.15 | **LOSS** |
| 773 | AMAT | 01-12 14:43 | 01-12 14:48 | 308.47 | 305.27 | 36 | 11104.92 | -115.2 | -1.04% | 1.35R | 5m | market | stop-loss | trend | trend | neutral | 79.4 | ↓304.85 | 1.6049 | 1.04 | **LOSS** |
| 774 | AMAT | 01-12 14:49 | 01-12 15:00 | 305.31 | 307.64 | 4 | 2442.48 | +9.32 | +0.76% | 1.03R | 11m | market | trim-profit-target | mixed | mean-revert | thinChop | 55.78 | ↑305.45 | 1.0832 | 0.96 | **WIN** |
| 775 | AMAT | 01-12 14:49 | 01-12 15:01 | 305.31 | 307.13 | 4 | 2442.48 | +7.28 | +0.6% | 0.81R | 12m | market | trailing-stop | mixed | mean-revert | thinChop | 55.78 | ↑305.45 | 1.0832 | 0.96 | **WIN** |
| 776 | AMAT | 01-12 15:02 | 01-12 15:04 | 309.16 | 306.99 | 36 | 11129.76 | -78.12 | -0.7% | 1.19R | 2m | market | stop-loss | trend | trend | neutral | 65.94 | ↑306.07 | 1.0396 | 1.71 | **LOSS** |
| 777 | LRCX | 01-12 15:03 | 01-12 15:24 | 219.03 | 220.61 | 35 | 7666.05 | +55.3 | +0.72% | 1.31R | 21m | market | timeout | bearish | mean-revert | neutral | 53.05 | ↑219.44 | 0.2172 | 1.76 | **WIN** |
| 778 | AMAT | 01-12 15:06 | 01-12 15:26 | 306.84 | 306.87 | 8 | 2454.72 | +0.24 | +0.01% | 0.02R | 20m | market | breakeven-stop | mixed | mean-revert | thinChop | 50.5 | ↑306.16 | 0.6852 | 0.88 | **WIN** |
| 779 | LRCX | 01-12 15:45 | 01-12 16:00 | 220.53 | 219.02 | 36 | 7939.08 | -54.36 | -0.68% | 1.36R | 15m | market | stop-loss | bearish | mean-revert | neutral | 31.35 | ↓219.87 | 0.2209 | 1.2 | **LOSS** |
| 780 | CELH | 01-12 16:22 | 01-12 16:43 | 53.15 | 53.46 | 210 | 11161.5 | +65.1 | +0.58% | 1.16R | 21m | market | timeout | trend | trend | neutral | 76.04 | ↑52.66 | 0.1183 | 1.77 | **WIN** |
| 781 | ELF | 01-12 16:36 | 01-12 16:53 | 87.46 | 86.7 | 69 | 6034.74 | -52.44 | -0.87% | 1.74R | 17m | market | stop-loss | trend | trend | noisyHighBeta | 69.78 | ↑85.79 | 0.5294 | 1.86 | **LOSS** |
| 782 | RIVN | 01-12 16:39 | 01-12 16:55 | 19.33 | 19.29 | 314 | 6069.62 | -12.56 | -0.21% | 0.42R | 16m | market | early-reversal | trend | trend | noisyHighBeta | 75.86 | ↑19.1 | 0.0359 | 1.15 | **LOSS** |
| 783 | HPE | 01-13 14:50 | 01-13 15:00 | 22.39 | 22.26 | 122 | 2731.58 | -15.86 | -0.58% | 1.05R | 10m | market | stop-loss | mixed | mean-revert | thinChop | 34.31 | ↓22.47 | 0.064 | 1.76 | **LOSS** |
| 784 | MRVL | 01-13 15:03 | 01-13 15:19 | 83.48 | 83.17 | 101 | 8431.48 | -31.31 | -0.37% | 0.74R | 16m | market | early-reversal | bearish | mean-revert | neutral | 30.94 | ↓83.62 | 0.0685 | 2.03 | **LOSS** |
| 785 | ELF | 01-13 16:10 | 01-13 16:27 | 87.35 | 87.07 | 32 | 2795.2 | -8.96 | -0.32% | 0.64R | 17m | market | early-reversal | mixed | mean-revert | thinChop | 48.9 | ↑86.88 | 0.2483 | 0.88 | **LOSS** |
| 786 | DELL | 01-14 14:36 | 01-14 14:56 | 119.49 | 120.92 | 76 | 9081.24 | +108.68 | +1.2% | 1.85R | 20m | market | profit-target | mixed | mean-revert | neutral | 47.41 | ↑119.86 | 0.121 | 0.92 | **WIN** |
| 787 | DELL | 01-14 15:00 | 01-14 15:16 | 120.35 | 121.42 | 80 | 9628 | +85.6 | +0.89% | 1.78R | 16m | market | trailing-stop | mixed | mean-revert | neutral | 55.53 | ↑120.23 | 0.2378 | 2.19 | **WIN** |
| 788 | MRVL | 01-14 16:32 | 01-14 16:48 | 80.2 | 79.73 | 78 | 6255.6 | -36.66 | -0.59% | 1.18R | 16m | market | stop-loss | mixed | mean-revert | neutral | 56.37 | ↓80.72 | 0.074 | 0.86 | **LOSS** |
| 789 | CELH | 01-14 17:31 | 01-14 17:53 | 53.27 | 53.32 | 183 | 9748.41 | +9.15 | +0.09% | 0.18R | 22m | market | timeout | mixed | mean-revert | neutral | 50.83 | ↑52.63 | 0.162 | 1.44 | **WIN** |
| 790 | LRCX | 01-15 14:44 | 01-15 14:49 | 226.42 | 223.6 | 49 | 11094.58 | -138.18 | -1.25% | 0.92R | 5m | market | stop-loss | trend | trend | neutral | 53.07 | ↓225.14 | 3.8407 | 1.13 | **LOSS** |
| 791 | IBM | 01-15 14:49 | 01-15 15:05 | 310.09 | 308.4 | 7 | 2170.63 | -11.83 | -0.55% | 1.1R | 16m | market | early-reversal | mixed | mean-revert | thinChop | 32.04 | ↓310.66 | 0.5139 | 1 | **LOSS** |
| 792 | CELH | 01-15 14:59 | 01-15 15:12 | 53.75 | 53.85 | 207 | 11126.25 | +20.7 | +0.19% | 0.34R | 13m | market | trailing-stop | trend | trend | neutral | 67.66 | ↑53.45 | 0.0708 | 1.71 | **WIN** |
| 793 | ADP | 01-15 15:00 | 01-15 15:21 | 261.97 | 261.72 | 42 | 11002.74 | -10.5 | -0.1% | 0.2R | 21m | market | stagnation | trend | trend | neutral | 74.82 | ↑260.2 | 0.7269 | 1.47 | **LOSS** |
| 794 | DELL | 01-15 15:01 | 01-15 15:23 | 122.07 | 122.56 | 79 | 9643.53 | +38.71 | +0.4% | 0.69R | 22m | market | timeout | mixed | mean-revert | neutral | 73.68 | ↑121.72 | 0.6254 | 1.49 | **WIN** |
| 795 | MRVL | 01-15 15:09 | 01-15 15:21 | 82.88 | 82.2 | 133 | 11023.04 | -90.44 | -0.82% | 1.41R | 12m | market | stop-loss | trend | trend | neutral | 61.41 | ↑81.62 | 0.2734 | 1.29 | **LOSS** |
| 796 | CELH | 01-15 15:18 | 01-15 15:20 | 53.79 | 53.39 | 181 | 9735.99 | -72.4 | -0.74% | 1.48R | 2m | market | stop-loss | mixed | mean-revert | neutral | 52.72 | ↓53.6 | 0.1281 | 1.47 | **LOSS** |
| 797 | DELL | 01-15 15:38 | 01-15 15:49 | 123.36 | 122.65 | 90 | 11102.4 | -63.9 | -0.58% | 1.16R | 11m | market | stop-loss | trend | trend | neutral | 65.45 | ↑122.16 | 0.3279 | 3.35 | **LOSS** |
| 798 | ELF | 01-15 16:09 | 01-15 16:25 | 88.58 | 88.26 | 108 | 9566.64 | -34.56 | -0.36% | 0.71R | 16m | market | early-reversal | mixed | mean-revert | neutral | 49 | ↑87.07 | 0.5186 | 1.23 | **LOSS** |
| 799 | MRVL | 01-16 14:56 | 01-16 15:00 | 81.91 | 81.46 | 102 | 8354.82 | -45.9 | -0.55% | 1.08R | 4m | market | stop-loss | mixed | mean-revert | neutral | 58.81 | ↓81.87 | 0.2651 | 1.35 | **LOSS** |
| 800 | CELH | 01-20 14:53 | 01-20 15:00 | 55.62 | 55.69 | 171 | 9511.02 | +11.97 | +0.13% | 0.24R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 35.37 | ↓55.75 | 0.2102 | 0.92 | **WIN** |
| 801 | NKE | 01-20 15:00 | 01-20 15:07 | 64.1 | 63.57 | 152 | 9743.2 | -80.56 | -0.83% | 1.38R | 7m | market | stop-loss | mixed | mean-revert | neutral | 55.12 | ↓64.03 | 0.0604 | 1.34 | **LOSS** |
| 802 | KLAC | 01-20 15:06 | 01-20 15:18 | 1540.84 | 1528.2 | 5 | 7704.2 | -63.2 | -0.82% | 1.28R | 12m | market | stop-loss | mixed | mean-revert | neutral | 53.99 | ↓1540.68 | -0.6573 | 1.35 | **LOSS** |
| 803 | RIVN | 01-20 15:11 | 01-20 15:26 | 16.02 | 16.06 | 561 | 8987.22 | +22.44 | +0.25% | 0.4R | 15m | market | trailing-stop | mixed | mean-revert | neutral | 56.9 | ↑16 | 0.0038 | 1.43 | **WIN** |
| 804 | CELH | 01-20 15:17 | 01-20 15:34 | 56.78 | 57.05 | 196 | 11128.88 | +52.92 | +0.48% | 0.62R | 17m | market | trailing-stop | trend | trend | neutral | 78.19 | ↑55.94 | 0.2697 | 1.21 | **WIN** |
| 805 | CELH | 01-20 15:35 | 01-20 15:43 | 57.03 | 56.59 | 171 | 9752.13 | -75.24 | -0.77% | 1.45R | 8m | market | stop-loss | mixed | mean-revert | neutral | 59.02 | ↑56.2 | 0.2367 | 1.29 | **LOSS** |
| 806 | ELF | 01-20 16:03 | 01-20 16:14 | 87.5 | 87.63 | 88 | 7700 | +11.44 | +0.15% | 0.3R | 11m | market | trailing-stop | mixed | mean-revert | neutral | 53.2 | ↓88.82 | -0.0948 | 1.15 | **WIN** |
| 807 | CELH | 01-20 16:31 | 01-20 16:46 | 57.85 | 57.51 | 193 | 11165.05 | -65.62 | -0.59% | 1.18R | 15m | market | stop-loss | trend | trend | neutral | 79.14 | ↑56.51 | 0.1937 | 3.15 | **LOSS** |
| 808 | AMAT | 01-20 16:44 | 01-20 17:02 | 321.55 | 323.37 | 12 | 7717.2 | +21.84 | +0.57% | 1.14R | 18m | market | trim-profit-target | mixed | mean-revert | neutral | 51.91 | ↑320.56 | 0.4699 | 1.56 | **WIN** |
| 809 | AMAT | 01-20 16:44 | 01-20 17:03 | 321.55 | 322.59 | 12 | 7717.2 | +12.48 | +0.32% | 0.64R | 19m | market | trailing-stop | mixed | mean-revert | neutral | 51.91 | ↑320.56 | 0.4699 | 1.56 | **WIN** |
| 810 | INTU | 01-21 14:41 | 01-21 15:02 | 531.78 | 532.8 | 18 | 9572.04 | +18.36 | +0.19% | 0.28R | 21m | market | timeout | mixed | mean-revert | neutral | 60.47 | ↑532.43 | 1.2142 | 1.29 | **WIN** |
| 811 | HPE | 01-21 14:49 | 01-21 15:05 | 20.75 | 20.7 | 537 | 11142.75 | -26.85 | -0.24% | 0.35R | 16m | market | early-reversal | trend | trend | neutral | 77.19 | ↑20.58 | 0.053 | 2.5 | **LOSS** |
| 812 | MRVL | 01-21 14:57 | 01-21 15:13 | 81.94 | 81.84 | 135 | 11061.9 | -13.5 | -0.12% | 0.2R | 16m | market | stagnation | trend | trend | neutral | 66.03 | ↑81.29 | 0.2733 | 1.8 | **LOSS** |
| 813 | RIVN | 01-21 15:49 | 01-21 16:02 | 16.41 | 16.49 | 295 | 9681.9 | +23.6 | +0.49% | 0.98R | 13m | market | trim-profit-target | mixed | mean-revert | neutral | 61.29 | ↑16.32 | 0.0365 | 2.08 | **WIN** |
| 814 | RIVN | 01-21 15:49 | 01-21 16:03 | 16.41 | 16.48 | 295 | 9681.9 | +20.65 | +0.43% | 0.86R | 14m | market | trailing-stop | mixed | mean-revert | neutral | 61.29 | ↑16.32 | 0.0365 | 2.08 | **WIN** |
| 815 | DELL | 01-21 16:55 | 01-21 17:02 | 112.47 | 111.79 | 86 | 9672.42 | -58.48 | -0.6% | 1.2R | 7m | market | stop-loss | mixed | mean-revert | neutral | 57.83 | ↓111.8 | 0.0798 | 0.9 | **LOSS** |
| 816 | DELL | 01-22 14:57 | 01-22 15:03 | 117.09 | 116.25 | 94 | 11006.46 | -78.96 | -0.72% | 1.03R | 6m | market | stop-loss | trend | trend | neutral | 60.88 | ↑115.89 | 0.5879 | 1.54 | **LOSS** |
| 817 | DELL | 01-22 15:19 | 01-22 15:24 | 117.75 | 117.74 | 94 | 11068.5 | -0.94 | -0.01% | 0.02R | 5m | market | trailing-stop | trend | trend | neutral | 72.46 | ↑116.38 | 0.3225 | 1.22 | **LOSS** |
| 818 | RIVN | 01-22 15:19 | 01-22 15:35 | 16.87 | 16.76 | 574 | 9683.38 | -63.14 | -0.65% | 0.98R | 16m | market | stop-loss | mixed | mean-revert | neutral | 57.69 | ↓16.79 | 0.0547 | 1.34 | **LOSS** |
| 819 | MRVL | 01-22 15:29 | 01-22 15:50 | 83.97 | 83.96 | 115 | 9656.55 | -1.15 | -0.01% | 0.02R | 21m | market | timeout | mixed | mean-revert | neutral | 55.36 | ↓84.52 | 0.1329 | 1.77 | **LOSS** |
| 820 | ELF | 01-22 16:00 | 01-22 16:16 | 94.13 | 93.81 | 102 | 9601.26 | -32.64 | -0.34% | 0.68R | 16m | market | early-reversal | mixed | mean-revert | neutral | 58.09 | ↑93.63 | 0.4085 | 3.77 | **LOSS** |
| 821 | KLAC | 01-22 16:21 | 01-22 16:45 | 1520.01 | 1517.3 | 7 | 10640.07 | -18.97 | -0.18% | 0.36R | 24m | market | stagnation | trend | trend | neutral | 62 | ↑1516.96 | 0.6911 | 1.77 | **LOSS** |
| 822 | LRCX | 01-23 15:39 | 01-23 15:55 | 221.49 | 220.16 | 27 | 5980.23 | -35.91 | -0.6% | 1.2R | 16m | market | stop-loss | bearish | mean-revert | neutral | 32.76 | ↑217.63 | 0.5112 | 1.74 | **LOSS** |
| 823 | ELF | 01-23 16:47 | 01-23 17:05 | 93.95 | 93.55 | 96 | 9019.2 | -38.4 | -0.43% | 0.86R | 18m | market | early-reversal | mixed | mean-revert | neutral | 32.46 | ↓94.61 | -0.023 | 2.55 | **LOSS** |
| 824 | LRCX | 01-26 14:39 | 01-26 14:46 | 217.89 | 221 | 41 | 8933.49 | +127.51 | +1.43% | 1.86R | 7m | market | profit-target | mixed | mean-revert | neutral | 50.58 | ↑217.79 | 0.259 | 0.91 | **WIN** |
| 825 | KLAC | 01-26 14:45 | 01-26 14:49 | 1532.68 | 1521.08 | 7 | 10728.76 | -81.2 | -0.76% | 1.1R | 4m | market | stop-loss | trend | trend | neutral | 67.03 | ↑1518.16 | 4.2833 | 1.25 | **LOSS** |
| 826 | DELL | 01-26 14:45 | 01-26 14:58 | 115.88 | 115.9 | 83 | 9618.04 | +1.66 | +0.02% | 0.03R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 47.9 | ↓116.23 | 0.2203 | 1.19 | **WIN** |
| 827 | LRCX | 01-26 15:00 | 01-26 15:10 | 222.43 | 220.96 | 50 | 11121.5 | -73.5 | -0.66% | 1.32R | 10m | market | stop-loss | trend | trend | neutral | 65.71 | ↑219.37 | 0.8551 | 3.64 | **LOSS** |
| 828 | MRVL | 01-26 16:05 | 01-26 16:06 | 81.84 | 81.51 | 135 | 11048.4 | -44.55 | -0.4% | 0.27R | 1m | market | trailing-stop | trend | trend | neutral | 61.31 | ↑81.18 | 0.1851 | 1.08 | **LOSS** |
| 829 | AMAT | 01-27 14:52 | 01-27 15:04 | 332.45 | 333.14 | 33 | 10970.85 | +22.77 | +0.21% | 0.27R | 12m | market | trailing-stop | trend | trend | neutral | 79.15 | ↑327.78 | 2.6212 | 1.44 | **WIN** |
| 830 | LRCX | 01-27 15:00 | 01-27 15:06 | 236.03 | 234.66 | 47 | 11093.41 | -64.39 | -0.58% | 1.16R | 6m | market | stop-loss | trend | trend | neutral | 70.96 | ↑232.6 | 1.5404 | 1.96 | **LOSS** |
| 831 | TGT | 01-27 15:03 | 01-27 15:12 | 104.27 | 103.64 | 93 | 9697.11 | -58.59 | -0.6% | 1.2R | 9m | market | stop-loss | mixed | mean-revert | neutral | 47.21 | ↓104.33 | 0.0219 | 1.92 | **LOSS** |
| 832 | RIVN | 01-27 15:21 | 01-27 15:33 | 15.33 | 15.34 | 631 | 9673.23 | +6.31 | +0.07% | 0.14R | 12m | market | breakeven-stop | mixed | mean-revert | neutral | 48.33 | ↓15.38 | 0.0014 | 1.62 | **WIN** |
| 833 | LRCX | 01-28 14:39 | 01-28 14:46 | 240.43 | 239.84 | 25 | 6010.75 | -14.75 | -0.25% | 0.19R | 7m | market | trailing-stop | trend | trend | noisyHighBeta | 58.86 | ↓240.33 | 0.3057 | 1.71 | **LOSS** |
| 834 | AMAT | 01-28 14:40 | 01-28 14:48 | 340.74 | 338 | 32 | 10903.68 | -87.68 | -0.8% | 0.6R | 8m | market | stop-loss | trend | trend | neutral | 70.31 | ↓340.47 | 1.5881 | 1.15 | **LOSS** |
| 835 | TXN | 01-28 14:43 | 01-28 14:48 | 211.81 | 212.15 | 52 | 11014.12 | +17.68 | +0.16% | 0.09R | 5m | market | trailing-stop | trend | trend | neutral | 66.24 | ↑208.88 | 3.2869 | 1.1 | **WIN** |
| 836 | KLAC | 01-28 14:49 | 01-28 14:58 | 1631.95 | 1622.36 | 5 | 8159.75 | -47.95 | -0.59% | 1.16R | 9m | market | stop-loss | mixed | mean-revert | neutral | 50.15 | ↓1637.73 | 4.0175 | 0.99 | **LOSS** |
| 837 | TXN | 01-28 14:59 | 01-28 15:08 | 211.91 | 209.9 | 46 | 9747.86 | -92.46 | -0.95% | 1.03R | 9m | market | stop-loss | mixed | mean-revert | neutral | 46.35 | ↓210.35 | 1.6355 | 1.86 | **LOSS** |
| 838 | DELL | 01-28 15:29 | 01-28 15:50 | 117.37 | 117.39 | 94 | 11032.78 | +1.88 | +0.02% | 0.04R | 21m | market | trailing-stop | trend | trend | neutral | 78.53 | ↑115.79 | 0.3979 | 3.86 | **WIN** |
| 839 | IBM | 01-29 14:36 | 01-29 14:43 | 315.85 | 317.39 | 30 | 9475.5 | +46.2 | +0.49% | 0.31R | 7m | market | trailing-stop | mixed | mean-revert | neutral | 48.34 | ↑316.27 | 4.1541 | 1.18 | **WIN** |
| 840 | SBUX | 01-29 15:15 | 01-29 15:16 | 94.99 | 93.96 | 103 | 9783.97 | -106.09 | -1.08% | 2.12R | 1m | market | stop-loss | mixed | mean-revert | neutral | 62.72 | ↓94.85 | 0.1702 | 3.02 | **LOSS** |
| 841 | ELF | 01-29 17:26 | 01-29 17:43 | 86.65 | 86.09 | 127 | 11004.55 | -71.12 | -0.65% | 1.3R | 17m | market | stop-loss | trend | trend | neutral | 71.69 | ↑84.18 | 0.3706 | 1.72 | **LOSS** |
| 842 | LRCX | 01-30 14:47 | 01-30 14:52 | 249.49 | 249.17 | 36 | 8981.64 | -11.52 | -0.13% | 0.13R | 5m | market | trailing-stop | mixed | mean-revert | neutral | 50.76 | ↓249.62 | 0.7629 | 0.94 | **LOSS** |
| 843 | LRCX | 02-02 14:44 | 02-02 15:05 | 238.76 | 240.59 | 22 | 5252.72 | +40.26 | +0.77% | 0.43R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 65.84 | ↑238.23 | 1.5999 | 1.98 | **WIN** |
| 844 | DELL | 02-02 14:55 | 02-02 15:11 | 115.96 | 117.09 | 39 | 9160.84 | +44.07 | +0.97% | 1.62R | 16m | market | trim-profit-target | mixed | mean-revert | neutral | 50.76 | ↑116.11 | 0.3097 | 1.25 | **WIN** |
| 845 | DELL | 02-02 14:55 | 02-02 15:13 | 115.96 | 116.91 | 40 | 9160.84 | +38 | +0.82% | 1.37R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 50.76 | ↑116.11 | 0.3097 | 1.25 | **WIN** |
| 846 | TXN | 02-02 15:29 | 02-02 15:50 | 220.15 | 220.2 | 44 | 9686.6 | +2.2 | +0.02% | 0.04R | 21m | market | timeout | mixed | mean-revert | neutral | 63.6 | ↑217.76 | 0.8092 | 1.04 | **WIN** |
| 847 | ELF | 02-02 17:04 | 02-02 17:14 | 88.14 | 87.49 | 124 | 10929.36 | -80.6 | -0.74% | 1.48R | 10m | market | stop-loss | trend | trend | neutral | 79.45 | ↑85.8 | 0.4982 | 2.06 | **LOSS** |
| 848 | SBUX | 02-03 14:32 | 02-03 14:46 | 92.71 | 92.69 | 121 | 11217.91 | -2.42 | -0.02% | 0.04R | 14m | market | trailing-stop | trend | trend | neutral | 74.1 | ↑92.12 | 0.0779 | 1.32 | **LOSS** |
| 849 | MRVL | 02-03 14:33 | 02-03 14:39 | 78.19 | 77.48 | 87 | 6802.53 | -61.77 | -0.91% | 1.6R | 6m | market | stop-loss | mixed | mean-revert | neutral | 53.64 | ↓78.52 | 0.0605 | 1.1 | **LOSS** |
| 850 | HPE | 02-03 14:36 | 02-03 14:43 | 22.17 | 21.85 | 439 | 9732.63 | -140.48 | -1.44% | 1.62R | 7m | market | stop-loss | mixed | mean-revert | neutral | 59.62 | ↓22.24 | 0.0869 | 2.52 | **LOSS** |
| 851 | TXN | 02-03 14:52 | 02-03 14:56 | 227.04 | 225.41 | 36 | 8173.44 | -58.68 | -0.72% | 1.22R | 4m | market | stop-loss | bearish | mean-revert | neutral | 47.1 | ↓227.16 | 0.6258 | 2.52 | **LOSS** |
| 852 | LOW | 02-03 14:53 | 02-03 15:10 | 274.1 | 273.72 | 10 | 2741 | -3.8 | -0.14% | 0.25R | 17m | market | stagnation | mixed | mean-revert | thinChop | 57.63 | ↓273.56 | 1.0392 | 1.07 | **LOSS** |
| 853 | CELH | 02-03 15:06 | 02-03 15:18 | 52.04 | 51.67 | 214 | 11136.56 | -79.18 | -0.71% | 1.2R | 12m | market | stop-loss | trend | trend | neutral | 58.69 | ↓51.67 | 0.1139 | 1.69 | **LOSS** |
| 854 | ELF | 02-03 15:07 | 02-03 15:30 | 87.46 | 88.63 | 88 | 7696.48 | +102.96 | +1.34% | 1.33R | 23m | market | timeout | bearish | mean-revert | neutral | 54.11 | ↑87.79 | 0.3472 | 1.04 | **WIN** |
| 855 | RIVN | 02-03 15:40 | 02-03 15:45 | 14.8 | 14.68 | 747 | 11055.6 | -89.64 | -0.81% | 1.5R | 5m | market | stop-loss | trend | trend | neutral | 61.11 | ↑14.52 | 0.0386 | 2.03 | **LOSS** |
| 856 | IBM | 02-03 16:32 | 02-03 16:49 | 291.39 | 290.78 | 30 | 8741.7 | -18.3 | -0.21% | 0.42R | 17m | market | stagnation | mixed | mean-revert | neutral | 37.04 | ↓295.01 | 0.4675 | 0.93 | **LOSS** |
| 857 | LOW | 02-04 14:42 | 02-04 14:56 | 278.16 | 278.56 | 38 | 10570.08 | +15.2 | +0.14% | 0.25R | 14m | market | trailing-stop | trend | trend | neutral | 70.64 | ↑277.95 | 0.9199 | 1.13 | **WIN** |
| 858 | DELL | 02-04 14:48 | 02-04 14:52 | 120.55 | 119.3 | 92 | 11090.6 | -115 | -1.04% | 1.11R | 4m | market | stop-loss | trend | trend | neutral | 66.2 | ↓119.65 | 0.6125 | 1.28 | **LOSS** |
| 859 | HPE | 02-04 14:50 | 02-04 15:01 | 22.23 | 22.35 | 124 | 2756.52 | +14.88 | +0.54% | 0.7R | 11m | market | trailing-stop | mixed | mean-revert | thinChop | 33.64 | ↑22.31 | 0.0853 | 0.99 | **WIN** |
| 860 | TXN | 02-04 14:56 | 02-04 15:06 | 226.67 | 225.03 | 12 | 2720.04 | -19.68 | -0.72% | 1.33R | 10m | market | stop-loss | mixed | mean-revert | thinChop | 55.84 | ↓224.96 | 0.6663 | 0.9 | **LOSS** |
| 861 | TGT | 02-04 15:02 | 02-04 15:24 | 113.67 | 113.71 | 54 | 6138.18 | +2.16 | +0.04% | 0.08R | 22m | market | timeout | bearish | mean-revert | neutral | 40.11 | ↓113.9 | 0.2387 | 0.9 | **WIN** |
| 862 | RIVN | 02-04 15:16 | 02-04 15:32 | 14.44 | 14.34 | 670 | 9674.8 | -67 | -0.69% | 0.92R | 16m | market | stop-loss | mixed | mean-revert | neutral | 66 | ↓14.42 | 0.0176 | 0.9 | **LOSS** |
| 863 | INTU | 02-04 15:33 | 02-04 15:45 | 441.04 | 443.3 | 22 | 9702.88 | +49.72 | +0.51% | 0.65R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 69.2 | ↑425.13 | 4.4548 | 1.13 | **WIN** |
| 864 | DELL | 02-04 15:38 | 02-04 15:43 | 120.39 | 121.21 | 92 | 11075.88 | +75.44 | +0.68% | 1.26R | 5m | market | trailing-stop | trend | trend | neutral | 72.76 | ↑119.14 | 0.1933 | 4.98 | **WIN** |
| 865 | MA | 02-05 14:41 | 02-05 14:57 | 555.62 | 553.45 | 17 | 9445.54 | -36.89 | -0.39% | 0.53R | 16m | market | early-reversal | mixed | mean-revert | neutral | 56.81 | ↓557.46 | 0.8606 | 0.98 | **LOSS** |
| 866 | TXN | 02-05 15:03 | 02-05 15:11 | 221.21 | 221.38 | 30 | 6636.3 | +5.1 | +0.08% | 0.14R | 8m | market | trailing-stop | bearish | mean-revert | neutral | 37.92 | ↓221.55 | -0.1169 | 1.9 | **WIN** |
| 867 | INTU | 02-05 15:41 | 02-05 15:46 | 445.09 | 442 | 12 | 5341.08 | -37.08 | -0.69% | 1.38R | 5m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 54.91 | ↓449.32 | 0.0652 | 1.98 | **LOSS** |
| 868 | LRCX | 02-05 15:42 | 02-05 15:48 | 211.01 | 209.25 | 29 | 6119.29 | -51.04 | -0.83% | 1.17R | 6m | market | stop-loss | trend | trend | noisyHighBeta | 79.34 | ↓209.74 | 0.3599 | 1.79 | **LOSS** |
| 869 | MRVL | 02-05 16:44 | 02-05 16:56 | 72.82 | 73.16 | 63 | 4587.66 | +21.42 | +0.47% | 0.72R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 54.88 | ↑72.1 | 0.3604 | 0.99 | **WIN** |
| 870 | RIVN | 02-05 17:46 | 02-05 17:48 | 14.27 | 14.19 | 774 | 11044.98 | -61.92 | -0.56% | 1.12R | 2m | market | stop-loss | trend | trend | neutral | 73.68 | ↑14.18 | 0.0271 | 1.88 | **LOSS** |
| 871 | MA | 02-06 14:35 | 02-06 14:46 | 552.33 | 548.7 | 17 | 9389.61 | -61.71 | -0.66% | 1.32R | 11m | market | stop-loss | mixed | mean-revert | neutral | 50.55 | ↓554 | 0.7141 | 0.92 | **LOSS** |
| 872 | IBM | 02-06 14:41 | 02-06 14:53 | 294.38 | 293.47 | 38 | 11186.44 | -34.58 | -0.31% | 0.41R | 12m | market | trailing-stop | trend | trend | neutral | 71.95 | ↓292.66 | 0.8873 | 1.43 | **LOSS** |
| 873 | KLAC | 02-06 14:42 | 02-06 14:55 | 1398.19 | 1405.96 | 6 | 8389.14 | +46.62 | +0.56% | 0.36R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 82.79 | ↑1399.79 | 18.5656 | 0.96 | **WIN** |
| 874 | INTU | 02-06 14:46 | 02-06 14:56 | 443.3 | 438.99 | 12 | 5319.6 | -51.72 | -0.97% | 0.98R | 10m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 53.08 | ↓444.41 | 2.3751 | 1.2 | **LOSS** |
| 875 | LRCX | 02-06 14:52 | 02-06 14:56 | 226.85 | 224.63 | 49 | 11115.65 | -108.78 | -0.98% | 1.09R | 4m | market | stop-loss | trend | trend | neutral | 71.47 | ↑222.67 | 2.2382 | 1.6 | **LOSS** |
| 876 | AMAT | 02-06 14:56 | 02-06 15:14 | 319.38 | 318.55 | 16 | 5110.08 | -13.28 | -0.26% | 0.37R | 18m | market | stagnation | mixed | mean-revert | noisyHighBeta | 65.02 | ↑317.04 | 2.5249 | 1.27 | **LOSS** |
| 877 | HPE | 02-06 15:13 | 02-06 15:23 | 23.28 | 23.28 | 418 | 9731.04 | +0 | +0% | 0R | 10m | market | trailing-stop | mixed | mean-revert | neutral | 49.3 | ↑23.21 | 0.0461 | 1.99 | **WIN** |
| 878 | RIVN | 02-06 15:16 | 02-06 15:26 | 14.15 | 14.27 | 390 | 11037 | +46.8 | +0.85% | 1R | 10m | market | trim-profit-target | trend | trend | neutral | 61.05 | ↑14.01 | 0.0267 | 1.78 | **WIN** |
| 879 | RIVN | 02-06 15:16 | 02-06 15:27 | 14.15 | 14.23 | 390 | 11037 | +31.2 | +0.57% | 0.67R | 11m | market | trailing-stop | trend | trend | neutral | 61.05 | ↑14.01 | 0.0267 | 1.78 | **WIN** |
| 880 | AMAT | 02-06 15:17 | 02-06 15:38 | 319.08 | 319.22 | 16 | 5105.28 | +2.24 | +0.04% | 0.06R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 48.14 | ↑317.82 | 0.578 | 3.39 | **WIN** |
| 881 | CELH | 02-06 15:36 | 02-06 15:45 | 49.44 | 49.52 | 225 | 11124 | +18 | +0.16% | 0.31R | 9m | market | trailing-stop | trend | trend | neutral | 78.34 | ↑48.98 | 0.1704 | 1.42 | **WIN** |
| 882 | DELL | 02-06 15:42 | 02-06 15:48 | 121.65 | 121.98 | 91 | 11070.15 | +30.03 | +0.27% | 0.51R | 6m | market | trailing-stop | trend | trend | neutral | 71.38 | ↑119.56 | 0.4561 | 4.6 | **WIN** |
| 883 | ELF | 02-06 17:00 | 02-06 17:22 | 83.85 | 84 | 72 | 6037.2 | +10.8 | +0.18% | 0.32R | 22m | market | timeout | trend | trend | noisyHighBeta | 63.56 | ↑81.74 | 0.3014 | 1.05 | **WIN** |
| 884 | ELF | 02-06 17:43 | 02-06 18:03 | 83.8 | 83.65 | 51 | 4273.8 | -7.65 | -0.18% | 0.36R | 20m | market | stagnation | bearish | mean-revert | noisyHighBeta | 51.32 | ↑82.13 | 0.2196 | 2.14 | **LOSS** |
| 885 | MRVL | 02-09 15:08 | 02-09 15:12 | 81.08 | 80.54 | 136 | 11026.88 | -73.44 | -0.67% | 1.2R | 4m | market | stop-loss | trend | trend | neutral | 67.23 | ↑79.81 | 0.1968 | 1.64 | **LOSS** |
| 886 | LRCX | 02-09 15:24 | 02-09 15:38 | 227.51 | 230.63 | 19 | 4322.69 | +59.28 | +1.37% | 2.74R | 14m | market | profit-target | mixed | mean-revert | noisyHighBeta | 44.93 | ↑226.86 | 0.1861 | 1.39 | **WIN** |
| 887 | LRCX | 02-09 15:55 | 02-09 16:12 | 229.8 | 229.3 | 15 | 3447 | -7.5 | -0.22% | 0.44R | 17m | market | stagnation | mixed | mean-revert | noisyHighBeta | 43.2 | ↑227.8 | 0.3025 | 1.11 | **LOSS** |
| 888 | MRVL | 02-10 14:35 | 02-10 14:38 | 83.26 | 82.58 | 73 | 6077.98 | -49.64 | -0.82% | 1.39R | 3m | market | stop-loss | trend | trend | noisyHighBeta | 72.21 | ↓82.9 | 0.1435 | 1.73 | **LOSS** |
| 889 | SBUX | 02-10 14:35 | 02-10 14:50 | 98.9 | 98.9 | 82 | 8109.8 | +0 | +0% | 0R | 15m | market | breakeven-stop | mixed | mean-revert | neutral | 44.3 | ↓99.22 | 0.0606 | 0.9 | **WIN** |
| 890 | TGT | 02-10 14:35 | 02-10 14:46 | 115.79 | 116.44 | 42 | 9726.36 | +27.3 | +0.56% | 1.12R | 11m | market | trim-profit-target | mixed | mean-revert | neutral | 52.53 | ↓116.08 | 0.1386 | 1.07 | **WIN** |
| 891 | TGT | 02-10 14:35 | 02-10 14:55 | 115.79 | 116.25 | 42 | 9726.36 | +19.32 | +0.4% | 0.8R | 20m | market | trailing-stop | mixed | mean-revert | neutral | 52.53 | ↓116.08 | 0.1386 | 1.07 | **WIN** |
| 892 | INTU | 02-10 14:49 | 02-10 15:10 | 445.73 | 447.89 | 13 | 5794.49 | +28.08 | +0.48% | 0.56R | 21m | market | timeout | trend | trend | noisyHighBeta | 70.43 | ↑439.23 | 1.5761 | 1.42 | **WIN** |
| 893 | RIVN | 02-10 14:56 | 02-10 15:07 | 15.15 | 15.33 | 401 | 6075.15 | +72.18 | +1.19% | 1.49R | 11m | market | profit-target | trend | trend | noisyHighBeta | 76.19 | ↑14.98 | 0.0546 | 1.81 | **WIN** |
| 894 | DELL | 02-10 14:58 | 02-10 15:19 | 125.49 | 126.18 | 48 | 6023.52 | +33.12 | +0.55% | 0.95R | 21m | market | timeout | trend | trend | noisyHighBeta | 74.5 | ↑124.5 | 0.6747 | 2.51 | **WIN** |
| 895 | ELF | 02-10 15:22 | 02-10 15:44 | 76.98 | 77.56 | 37 | 2848.26 | +21.46 | +0.75% | 0.96R | 22m | market | timeout | mixed | mean-revert | thinChop | 52.32 | ↑76.96 | 0.5113 | 1.34 | **WIN** |
| 896 | ELF | 02-10 16:17 | 02-10 16:24 | 77.6 | 77.17 | 68 | 5276.8 | -29.24 | -0.55% | 1.1R | 7m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 57.69 | ↓77.21 | 0.1924 | 1.37 | **LOSS** |
| 897 | KLAC | 02-10 16:44 | 02-10 17:05 | 1423.46 | 1429.82 | 3 | 4270.38 | +19.08 | +0.45% | 0.9R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 37.85 | ↑1423.18 | 1.3458 | 1.35 | **WIN** |
| 898 | DELL | 02-11 15:10 | 02-11 15:12 | 126.16 | 125.42 | 47 | 5929.52 | -34.78 | -0.59% | 1.18R | 2m | market | stop-loss | bearish | mean-revert | neutral | 40.1 | ↓126.13 | 0.0703 | 1.75 | **LOSS** |
| 899 | TXN | 02-11 15:58 | 02-11 16:19 | 228.86 | 228.98 | 48 | 10985.28 | +5.76 | +0.05% | 0.1R | 21m | market | timeout | trend | trend | neutral | 65.65 | ↑227.59 | 0.4107 | 1.09 | **WIN** |
| 900 | MRVL | 02-11 16:18 | 02-11 16:30 | 80.78 | 80.87 | 106 | 8562.68 | +9.54 | +0.11% | 0.22R | 12m | market | trailing-stop | mixed | mean-revert | neutral | 33.86 | ↓80.9 | 0.1089 | 0.95 | **WIN** |
| 901 | KLAC | 02-11 16:21 | 02-11 16:36 | 1482.58 | 1473.48 | 7 | 10378.06 | -63.7 | -0.61% | 1.22R | 15m | market | stop-loss | trend | trend | neutral | 65.85 | ↓1479.41 | 3.6279 | 1.44 | **LOSS** |
| 902 | AMAT | 02-11 16:28 | 02-11 16:49 | 336.88 | 336.93 | 14 | 4716.32 | +0.7 | +0.01% | 0.02R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 56.62 | ↓337.64 | 0.7053 | 0.93 | **WIN** |
| 903 | NKE | 02-12 15:22 | 02-12 15:38 | 62.61 | 62.53 | 177 | 11081.97 | -14.16 | -0.13% | 0.26R | 16m | market | stagnation | trend | trend | neutral | 75 | ↑62.33 | 0.0409 | 2.05 | **LOSS** |
| 904 | ADP | 02-12 16:34 | 02-12 16:45 | 210.27 | 209 | 45 | 9462.15 | -57.15 | -0.6% | 1.2R | 11m | market | stop-loss | mixed | mean-revert | neutral | 51.68 | ↓211.64 | 0.1082 | 2.11 | **LOSS** |
| 905 | HPE | 02-12 16:46 | 02-12 16:54 | 22.28 | 22.14 | 349 | 7775.72 | -48.86 | -0.63% | 1.24R | 8m | market | stop-loss | mixed | mean-revert | neutral | 71.05 | ↓22.55 | 0.0403 | 0.92 | **LOSS** |
| 906 | MRVL | 02-12 17:05 | 02-12 17:12 | 77.92 | 77.92 | 105 | 8181.6 | +0 | +0% | 0R | 7m | market | breakeven-stop | mixed | mean-revert | neutral | 38.89 | ↓79.71 | 0.0154 | 1.49 | **WIN** |
| 907 | IBM | 02-13 14:51 | 02-13 14:57 | 259.56 | 257.08 | 9 | 2336.04 | -22.32 | -0.96% | 1.3R | 6m | market | stop-loss | mixed | mean-revert | thinChop | 55.21 | ↓259.83 | 0.3231 | 1.16 | **LOSS** |
| 908 | MRVL | 02-13 14:52 | 02-13 14:56 | 78.51 | 78.75 | 123 | 9656.73 | +29.52 | +0.31% | 0.28R | 4m | market | trailing-stop | mixed | mean-revert | neutral | 45.91 | ↑78.55 | 0.1376 | 1.64 | **WIN** |
| 909 | NKE | 02-13 14:57 | 02-13 15:05 | 62.83 | 62.28 | 99 | 6220.17 | -54.45 | -0.88% | 1.26R | 8m | market | stop-loss | bearish | mean-revert | neutral | 51.14 | ↓62.76 | 0.2598 | 1.02 | **LOSS** |
| 910 | MRVL | 02-13 14:59 | 02-13 15:14 | 78.86 | 78.88 | 36 | 2838.96 | +0.72 | +0.03% | 0.03R | 15m | market | trailing-stop | mixed | mean-revert | thinChop | 53.1 | ↑78.64 | 0.102 | 1.06 | **WIN** |
| 911 | LRCX | 02-13 15:09 | 02-13 15:17 | 240.15 | 237.89 | 46 | 11046.9 | -103.96 | -0.94% | 0.82R | 8m | market | stop-loss | breakout | trend | neutral | 55.36 | ↓238.06 | 0.5115 | 1.01 | **LOSS** |
| 912 | DELL | 02-13 15:12 | 02-13 15:33 | 119.14 | 120.31 | 72 | 8578.08 | +84.24 | +0.98% | 1.34R | 21m | market | timeout | mixed | mean-revert | neutral | 70.64 | ↑117.37 | 0.8242 | 1.09 | **WIN** |
| 913 | HPE | 02-13 15:13 | 02-13 15:34 | 22.64 | 22.77 | 491 | 11116.24 | +63.83 | +0.57% | 0.86R | 21m | market | timeout | trend | trend | neutral | 72.66 | ↑22.31 | 0.0677 | 2.56 | **WIN** |
| 914 | INTU | 02-13 15:28 | 02-13 15:36 | 398.97 | 398.2 | 28 | 11171.16 | -21.56 | -0.19% | 0.34R | 8m | market | trailing-stop | trend | trend | neutral | 59.22 | ↑395.56 | 0.4095 | 1.98 | **LOSS** |
| 915 | KLAC | 02-13 15:35 | 02-13 15:43 | 1489.79 | 1478.05 | 7 | 10428.53 | -82.18 | -0.79% | 1.49R | 8m | market | stop-loss | trend | trend | neutral | 67.73 | ↑1464.84 | 5.8414 | 1.46 | **LOSS** |
| 916 | INTU | 02-13 15:38 | 02-13 15:43 | 397.86 | 395.5 | 23 | 9150.78 | -54.28 | -0.59% | 0.95R | 5m | market | stop-loss | mixed | mean-revert | neutral | 54.95 | ↓395.87 | 0.6589 | 0.95 | **LOSS** |
| 917 | MRVL | 02-13 15:38 | 02-13 15:56 | 79.09 | 79.21 | 122 | 9648.98 | +14.64 | +0.15% | 0.28R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 50.96 | ↑78.98 | 0.1159 | 1.53 | **WIN** |
| 918 | RIVN | 02-13 16:00 | 02-13 16:12 | 16.86 | 16.97 | 261 | 4400.46 | +28.71 | +0.65% | 0.52R | 12m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 57.42 | ↓17 | 0.0189 | 1.3 | **WIN** |
| 919 | MRVL | 02-13 16:12 | 02-13 16:33 | 79.29 | 79.45 | 122 | 9673.38 | +19.52 | +0.2% | 0.4R | 21m | market | timeout | mixed | mean-revert | neutral | 39.74 | ↑79.08 | 0.0585 | 1.87 | **WIN** |
| 920 | RIVN | 02-13 16:39 | 02-13 17:00 | 17.27 | 17.53 | 308 | 5319.16 | +80.08 | +1.51% | 1.86R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 44 | ↑17.03 | 0.0416 | 1.65 | **WIN** |
| 921 | ELF | 02-13 17:04 | 02-13 17:14 | 77.37 | 78.36 | 78 | 6034.86 | +77.22 | +1.28% | 2.56R | 10m | market | profit-target | trend | trend | noisyHighBeta | 70.05 | ↑76.03 | 0.3258 | 1.58 | **WIN** |
| 922 | CELH | 02-13 17:54 | 02-13 18:10 | 45.66 | 45.53 | 244 | 11141.04 | -31.72 | -0.28% | 0.56R | 16m | market | early-reversal | trend | trend | neutral | 75 | ↑45.08 | 0.0748 | 2.08 | **LOSS** |
| 923 | TGT | 02-17 14:32 | 02-17 14:35 | 118.21 | 117.04 | 94 | 11111.74 | -109.98 | -0.99% | 1.32R | 3m | market | stop-loss | breakout | trend | neutral | 78.67 | ↓117.95 | 0.421 | 1.01 | **LOSS** |
| 924 | ELF | 02-17 15:00 | 02-17 15:06 | 86.14 | 87.36 | 61 | 5254.54 | +74.42 | +1.42% | 1.22R | 6m | market | profit-target | mixed | mean-revert | noisyHighBeta | 62.14 | ↑85.52 | 1.0204 | 1.45 | **WIN** |
| 925 | ELF | 02-17 15:13 | 02-17 15:24 | 87.31 | 88.36 | 60 | 5238.6 | +63 | +1.2% | 1.13R | 11m | market | profit-target | mixed | mean-revert | noisyHighBeta | 60.59 | ↑86.15 | 0.7262 | 1.71 | **WIN** |
| 926 | AMAT | 02-17 15:23 | 02-17 15:29 | 350.65 | 350.8 | 10 | 3506.5 | +1.5 | +0.04% | 0.05R | 6m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 52.09 | ↓353.22 | -0.1528 | 1.06 | **WIN** |
| 927 | ELF | 02-17 15:26 | 02-17 15:31 | 87.63 | 86.59 | 60 | 5257.8 | -62.4 | -1.19% | 1.72R | 5m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 50.47 | ↓86.64 | 0.4781 | 1.56 | **LOSS** |
| 928 | AMAT | 02-17 17:01 | 02-17 17:22 | 358.83 | 360.09 | 13 | 4664.79 | +16.38 | +0.35% | 0.7R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 44.54 | ↑354.7 | 0.1384 | 0.85 | **WIN** |
| 929 | RIVN | 02-18 14:50 | 02-18 15:06 | 16.85 | 16.85 | 282 | 4751.7 | +0 | +0% | 0R | 16m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 44.2 | ↓16.87 | 0.0828 | 1.05 | **WIN** |
| 930 | LRCX | 02-18 14:56 | 02-18 15:10 | 237.92 | 239.19 | 46 | 10944.32 | +58.42 | +0.53% | 0.76R | 14m | market | trailing-stop | trend | trend | neutral | 65.15 | ↑235.92 | 0.3094 | 1.57 | **WIN** |
| 931 | AMAT | 02-18 15:02 | 02-18 15:08 | 369.27 | 368.65 | 16 | 5908.32 | -9.92 | -0.17% | 0.26R | 6m | market | trailing-stop | trend | trend | noisyHighBeta | 79.49 | ↑365.74 | 1.3211 | 1.86 | **LOSS** |
| 932 | INTU | 02-18 15:06 | 02-18 15:27 | 392.26 | 394.04 | 15 | 5883.9 | +26.7 | +0.45% | 0.69R | 21m | market | timeout | trend | trend | noisyHighBeta | 73.61 | ↑386.31 | 2.5295 | 2.77 | **WIN** |
| 933 | ADP | 02-18 15:07 | 02-18 15:28 | 215.72 | 216.35 | 51 | 11001.72 | +32.13 | +0.29% | 0.58R | 21m | market | timeout | trend | trend | neutral | 76.96 | ↑213.69 | 0.5237 | 2.35 | **WIN** |
| 934 | CELH | 02-18 15:30 | 02-18 15:39 | 44.46 | 44.17 | 250 | 11115 | -72.5 | -0.65% | 1.3R | 9m | market | stop-loss | trend | trend | neutral | 59.61 | ↑43.94 | 0.0991 | 3.62 | **LOSS** |
| 935 | RIVN | 02-18 15:40 | 02-18 15:49 | 16.91 | 16.81 | 360 | 6087.6 | -36 | -0.59% | 1.18R | 9m | market | stop-loss | trend | trend | noisyHighBeta | 74.14 | ↓16.85 | 0.0209 | 1.32 | **LOSS** |
| 936 | ELF | 02-18 17:07 | 02-18 17:15 | 88.64 | 88.09 | 68 | 6027.52 | -37.4 | -0.62% | 1.24R | 8m | market | stop-loss | trend | trend | noisyHighBeta | 71.71 | ↑87.65 | 0.1739 | 1.89 | **LOSS** |
| 937 | DELL | 02-19 14:51 | 02-19 15:07 | 119.55 | 119.44 | 67 | 8009.85 | -7.37 | -0.09% | 0.09R | 16m | market | stagnation | mixed | mean-revert | neutral | 47.39 | ↓120.32 | 0.6748 | 1.07 | **LOSS** |
| 938 | MRVL | 02-19 15:00 | 02-19 15:14 | 78.56 | 78.86 | 36 | 2828.16 | +10.8 | +0.38% | 0.76R | 14m | market | trailing-stop | mixed | mean-revert | thinChop | 61.65 | ↑78.33 | 0.0763 | 0.86 | **WIN** |
| 939 | DELL | 02-19 15:44 | 02-19 16:00 | 119.17 | 119.08 | 67 | 7984.39 | -6.03 | -0.08% | 0.16R | 16m | market | stagnation | mixed | mean-revert | neutral | 50.34 | ↓119.84 | 0.0274 | 0.88 | **LOSS** |
| 940 | RIVN | 02-19 15:50 | 02-19 16:06 | 15.52 | 15.5 | 282 | 4376.64 | -5.64 | -0.13% | 0.26R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 36.84 | ↓15.67 | 0.0028 | 1.37 | **LOSS** |
| 941 | ELF | 02-19 16:14 | 02-19 16:32 | 89.08 | 90.1 | 68 | 6057.44 | +69.36 | +1.15% | 1.69R | 18m | market | profit-target | trend | trend | noisyHighBeta | 68.11 | ↑87.9 | 0.2463 | 1.2 | **WIN** |
| 942 | ELF | 02-19 16:48 | 02-19 17:10 | 89.64 | 89.18 | 59 | 5288.76 | -27.14 | -0.51% | 1.02R | 22m | market | timeout | mixed | mean-revert | noisyHighBeta | 59.91 | ↑88.76 | 0.4918 | 0.9 | **LOSS** |
| 943 | CELH | 02-19 17:55 | 02-19 17:59 | 44.07 | 43.81 | 252 | 11105.64 | -65.52 | -0.59% | 1.18R | 4m | market | stop-loss | trend | trend | neutral | 72.07 | ↑43.29 | 0.0764 | 1.77 | **LOSS** |
| 944 | AMAT | 02-20 14:40 | 02-20 14:47 | 372.73 | 375.15 | 29 | 10809.17 | +70.18 | +0.65% | 1.02R | 7m | market | trailing-stop | trend | trend | neutral | 67.56 | ↑372.01 | 1.0092 | 10.93 | **WIN** |
| 945 | LRCX | 02-20 14:40 | 02-20 14:49 | 241.34 | 243.26 | 23 | 11101.64 | +44.16 | +0.8% | 1.1R | 9m | market | trim-profit-target | trend | trend | neutral | 77.08 | ↑239.43 | 1.1808 | 1.07 | **WIN** |
| 946 | LRCX | 02-20 14:40 | 02-20 14:52 | 241.34 | 241.98 | 23 | 11101.64 | +14.72 | +0.27% | 0.37R | 12m | market | trailing-stop | trend | trend | neutral | 77.08 | ↑239.43 | 1.1808 | 1.07 | **WIN** |
| 947 | KLAC | 02-20 14:45 | 02-20 14:50 | 1485.17 | 1475.45 | 7 | 10396.19 | -68.04 | -0.65% | 1.3R | 5m | market | stop-loss | trend | trend | neutral | 74.6 | ↓1476.75 | 4.9009 | 1.33 | **LOSS** |
| 948 | INTU | 02-20 15:06 | 02-20 15:12 | 389.56 | 390.71 | 25 | 9739 | +28.75 | +0.3% | 0.39R | 6m | market | trailing-stop | mixed | mean-revert | neutral | 62.43 | ↑385.66 | 1.8157 | 2.56 | **WIN** |
| 949 | TGT | 02-20 15:08 | 02-20 15:15 | 118.83 | 117.76 | 94 | 11170.02 | -100.58 | -0.9% | 0.95R | 7m | market | stop-loss | trend | trend | neutral | 78.64 | ↑117.03 | 0.6135 | 1.46 | **LOSS** |
| 950 | MRVL | 02-20 15:09 | 02-20 15:16 | 80.06 | 79.3 | 138 | 11048.28 | -104.88 | -0.95% | 1.36R | 7m | market | stop-loss | trend | trend | neutral | 73.65 | ↓79.28 | 0.2374 | 1.86 | **LOSS** |
| 951 | INTU | 02-20 15:13 | 02-20 15:29 | 389.93 | 388.65 | 25 | 9748.25 | -32 | -0.33% | 0.38R | 16m | market | early-reversal | mixed | mean-revert | neutral | 57.83 | ↑386.88 | 1.6178 | 1.38 | **LOSS** |
| 952 | HPE | 02-20 15:14 | 02-20 15:30 | 21.81 | 21.77 | 446 | 9727.26 | -17.84 | -0.18% | 0.2R | 16m | market | trailing-stop | mixed | mean-revert | neutral | 70.83 | ↑21.54 | 0.1191 | 0.92 | **LOSS** |
| 953 | RIVN | 02-20 15:14 | 02-20 15:30 | 15.2 | 15.17 | 340 | 5168 | -10.2 | -0.2% | 0.17R | 16m | market | stagnation | mixed | mean-revert | noisyHighBeta | 57.89 | ↓15.19 | 0.0177 | 0.9 | **LOSS** |
| 954 | IBM | 02-20 15:16 | 02-20 15:35 | 256.34 | 256.14 | 38 | 9740.92 | -7.6 | -0.08% | 0.16R | 19m | market | stagnation | mixed | mean-revert | neutral | 53.77 | ↑255.33 | 0.379 | 1.88 | **LOSS** |
| 955 | DELL | 02-20 15:19 | 02-20 15:29 | 122.45 | 121.39 | 90 | 11020.5 | -95.4 | -0.87% | 1.12R | 10m | market | stop-loss | trend | trend | neutral | 72.75 | ↑120.27 | 0.7205 | 1.29 | **LOSS** |
| 956 | CELH | 02-20 15:51 | 02-20 16:08 | 47.99 | 47.96 | 136 | 6526.64 | -4.08 | -0.06% | 0.12R | 17m | market | stagnation | bearish | mean-revert | neutral | 42.35 | ↑47.68 | 0.0367 | 0.85 | **LOSS** |
| 957 | AMAT | 02-23 14:35 | 02-23 14:51 | 377.24 | 377.04 | 29 | 10939.96 | -5.8 | -0.05% | 0.08R | 16m | market | stagnation | trend | trend | neutral | 73.59 | ↑376.36 | 0.7406 | 1.55 | **LOSS** |
| 958 | LRCX | 02-23 14:40 | 02-23 14:58 | 245.15 | 244.9 | 37 | 9070.55 | -9.25 | -0.1% | 0.1R | 18m | market | trailing-stop | mixed | mean-revert | neutral | 52.41 | ↓246.71 | 0.6055 | 2.46 | **LOSS** |
| 959 | DELL | 02-23 14:40 | 02-23 14:44 | 123.1 | 121.89 | 79 | 9724.9 | -95.59 | -0.98% | 1.01R | 4m | market | stop-loss | mixed | mean-revert | neutral | 59.75 | ↓123.23 | 0.3364 | 0.97 | **LOSS** |
| 960 | CELH | 02-23 14:59 | 02-23 15:08 | 48.98 | 48.66 | 52 | 2546.96 | -16.64 | -0.65% | 1.16R | 9m | market | stop-loss | mixed | mean-revert | thinChop | 51.53 | ↓49.12 | 0.0721 | 1.08 | **LOSS** |
| 961 | AMAT | 02-24 14:32 | 02-24 14:33 | 372.44 | 368.52 | 26 | 9683.44 | -101.92 | -1.05% | 1.69R | 1m | market | stop-loss | mixed | mean-revert | neutral | 53.19 | ↓374.34 | 0.4879 | 2.38 | **LOSS** |
| 962 | INTU | 02-24 14:51 | 02-24 14:57 | 368.45 | 363.5 | 26 | 9579.7 | -128.7 | -1.34% | 1.12R | 6m | market | stop-loss | mixed | mean-revert | neutral | 58.14 | ↓366.59 | 2.5196 | 0.92 | **LOSS** |
| 963 | RIVN | 02-24 14:51 | 02-24 15:03 | 15.2 | 15.07 | 400 | 6080 | -52 | -0.86% | 0.84R | 12m | market | stop-loss | trend | trend | noisyHighBeta | 73.05 | ↑15.03 | 0.0622 | 2.04 | **LOSS** |
| 964 | DELL | 02-24 14:55 | 02-24 15:14 | 120.96 | 120.79 | 62 | 7499.52 | -10.54 | -0.14% | 0.23R | 19m | market | stagnation | bearish | mean-revert | neutral | 49.12 | ↓121.21 | 0.429 | 1.45 | **LOSS** |
| 965 | ELF | 02-24 14:59 | 02-24 15:17 | 93.06 | 93.02 | 57 | 5304.42 | -2.28 | -0.04% | 0.04R | 18m | market | trailing-stop | mixed | mean-revert | noisyHighBeta | 47.95 | ↓93.22 | 0.5806 | 0.93 | **LOSS** |
| 966 | LRCX | 02-24 15:14 | 02-24 15:17 | 242.61 | 241.17 | 27 | 6550.47 | -38.88 | -0.59% | 1.13R | 3m | market | stop-loss | bearish | mean-revert | neutral | 26.84 | ↓242.81 | 0.0979 | 1.56 | **LOSS** |
| 967 | TXN | 02-24 15:30 | 02-24 15:48 | 223.16 | 223.19 | 50 | 11158 | +1.5 | +0.01% | 0.02R | 18m | market | breakeven-stop | trend | trend | neutral | 78.12 | ↑220.79 | 0.5534 | 1.1 | **WIN** |
| 968 | IBM | 02-24 15:35 | 02-24 15:44 | 234.67 | 234.73 | 37 | 8682.79 | +2.22 | +0.03% | 0.06R | 9m | market | breakeven-stop | mixed | mean-revert | neutral | 52.64 | ↑232.09 | 0.7613 | 1.49 | **WIN** |
| 969 | LRCX | 02-24 16:16 | 02-24 16:30 | 246.27 | 246.19 | 45 | 11082.15 | -3.6 | -0.03% | 0.06R | 14m | market | trailing-stop | trend | trend | neutral | 79.72 | ↑242.92 | 0.5403 | 1.5 | **LOSS** |
| 970 | HPE | 02-25 14:36 | 02-25 14:53 | 20.32 | 20.32 | 479 | 9733.28 | +0 | +0% | 0R | 17m | market | breakeven-stop | mixed | mean-revert | neutral | 56.52 | ↓20.4 | 0.0531 | 0.95 | **WIN** |
| 971 | IBM | 02-25 14:51 | 02-25 15:07 | 234.82 | 237.08 | 13 | 6105.32 | +29.38 | +0.96% | 1.28R | 16m | market | trim-profit-target | trend | trend | noisyHighBeta | 64.14 | ↑233.3 | 0.7163 | 1.39 | **WIN** |
| 972 | IBM | 02-25 14:51 | 02-25 15:12 | 234.82 | 238.15 | 13 | 6105.32 | +43.29 | +1.42% | 1.89R | 21m | market | profit-target | trend | trend | noisyHighBeta | 64.14 | ↑233.3 | 0.7163 | 1.39 | **WIN** |
| 973 | MRVL | 02-25 14:58 | 02-25 15:14 | 80.3 | 80.02 | 137 | 11001.1 | -38.36 | -0.35% | 0.7R | 16m | market | early-reversal | trend | trend | neutral | 71.71 | ↓79.82 | 0.3352 | 5.17 | **LOSS** |
| 974 | KLAC | 02-25 15:01 | 02-25 15:16 | 1569 | 1564.14 | 7 | 10983 | -34.02 | -0.31% | 0.46R | 15m | market | trailing-stop | trend | trend | neutral | 74.07 | ↑1556.47 | 12.606 | 1.44 | **LOSS** |
| 975 | RIVN | 02-25 15:04 | 02-25 15:10 | 15.7 | 15.56 | 704 | 11052.8 | -98.56 | -0.89% | 1.44R | 6m | market | stop-loss | trend | trend | neutral | 68.18 | ↓15.55 | 0.0746 | 1.27 | **LOSS** |
| 976 | INTU | 02-25 15:35 | 02-25 15:50 | 368.73 | 368.98 | 21 | 7743.33 | +5.25 | +0.07% | 0.14R | 15m | market | trailing-stop | bearish | mean-revert | neutral | 36.67 | ↑363.2 | 0.6955 | 1.37 | **WIN** |
| 977 | LOW | 02-25 16:16 | 02-25 16:37 | 265.27 | 265.81 | 32 | 8488.64 | +17.28 | +0.2% | 0.4R | 21m | market | timeout | mixed | mean-revert | neutral | 58.68 | ↓267.64 | 0.2025 | 3.46 | **WIN** |
| 978 | MRVL | 02-25 17:34 | 02-25 17:55 | 80.53 | 80.48 | 120 | 9663.6 | -6 | -0.06% | 0.12R | 21m | market | stagnation | mixed | mean-revert | neutral | 38.93 | ↑80.09 | 0.1098 | 1.52 | **LOSS** |
| 979 | MA | 02-26 14:43 | 02-26 14:56 | 514.71 | 518.08 | 10 | 10808.91 | +33.7 | +0.65% | 1.03R | 13m | market | trim-profit-target | trend | trend | neutral | 77.27 | ↑512.39 | 1.0329 | 1.32 | **WIN** |
| 980 | MA | 02-26 14:43 | 02-26 15:02 | 514.71 | 516.63 | 11 | 10808.91 | +21.12 | +0.37% | 0.59R | 19m | market | trailing-stop | trend | trend | neutral | 77.27 | ↑512.39 | 1.0329 | 1.32 | **WIN** |
| 981 | IBM | 02-26 14:44 | 02-26 15:02 | 244.76 | 245.62 | 25 | 6119 | +21.5 | +0.35% | 0.36R | 18m | market | trailing-stop | trend | trend | noisyHighBeta | 74.72 | ↑242.64 | 1.5339 | 1.31 | **WIN** |
| 982 | HPE | 02-26 14:46 | 02-26 15:06 | 20.72 | 20.82 | 288 | 5967.36 | +28.8 | +0.48% | 0.55R | 20m | market | trailing-stop | bearish | mean-revert | neutral | 36.15 | ↑20.84 | 0.0241 | 1.4 | **WIN** |
| 983 | ELF | 02-26 14:49 | 02-26 14:53 | 95.84 | 97.2 | 100 | 9584 | +136 | +1.42% | 1.23R | 4m | market | profit-target | mixed | mean-revert | neutral | 74.68 | ↑95.72 | 0.8702 | 1.88 | **WIN** |
| 984 | RIVN | 02-26 14:56 | 02-26 15:09 | 15.73 | 15.61 | 702 | 11042.46 | -84.24 | -0.76% | 1.03R | 13m | market | stop-loss | trend | trend | neutral | 56.19 | ↑15.54 | 0.0648 | 2.45 | **LOSS** |
| 985 | INTU | 02-26 14:57 | 02-26 15:02 | 401 | 398 | 15 | 6015 | -45 | -0.75% | 0.89R | 5m | market | stop-loss | trend | trend | noisyHighBeta | 58.64 | ↑395.94 | 2.5999 | 1.12 | **LOSS** |
| 986 | SBUX | 02-26 15:00 | 02-26 15:16 | 98.72 | 98.22 | 80 | 7897.6 | -40 | -0.51% | 1.02R | 16m | market | early-reversal | bearish | mean-revert | neutral | 37.03 | ↓99.06 | 0.0988 | 2.85 | **LOSS** |
| 987 | HPE | 02-26 15:16 | 02-26 15:24 | 20.77 | 20.65 | 435 | 9034.95 | -52.2 | -0.58% | 1.05R | 8m | market | stop-loss | mixed | mean-revert | neutral | 39.22 | ↓20.82 | 0.0065 | 1.05 | **LOSS** |
| 988 | IBM | 02-26 15:18 | 02-26 15:30 | 246.11 | 244.66 | 18 | 4429.98 | -26.1 | -0.59% | 0.94R | 12m | market | stop-loss | mixed | mean-revert | noisyHighBeta | 45.16 | ↓244.89 | 0.429 | 1.12 | **LOSS** |
| 989 | KLAC | 02-26 16:15 | 02-26 16:36 | 1508.23 | 1516.12 | 6 | 9049.38 | +47.34 | +0.52% | 1.04R | 21m | market | timeout | mixed | mean-revert | neutral | 49.87 | ↑1504.25 | 3.3574 | 2.47 | **WIN** |
| 990 | DELL | 02-27 14:35 | 02-27 14:40 | 143.41 | 139.32 | 39 | 5592.99 | -159.51 | -2.85% | 1.43R | 5m | market | stop-loss | breakout | trend | noisyHighBeta | 70.06 | ↓141.39 | 2.6093 | 2.11 | **LOSS** |
| 991 | CELH | 02-27 14:52 | 02-27 15:04 | 54.57 | 54.21 | 178 | 9713.46 | -64.08 | -0.66% | 0.59R | 12m | market | stop-loss | mixed | mean-revert | neutral | 54.07 | ↓54.64 | 0.0755 | 2.01 | **LOSS** |
| 992 | MRVL | 02-27 14:53 | 02-27 15:14 | 79.23 | 79.86 | 120 | 9507.6 | +75.6 | +0.8% | 0.95R | 21m | market | timeout | mixed | mean-revert | neutral | 42.37 | ↑79.46 | 0.0472 | 1.15 | **WIN** |
| 993 | AMAT | 02-27 15:05 | 02-27 15:17 | 376.16 | 375.98 | 29 | 10908.64 | -5.22 | -0.05% | 0.1R | 12m | market | trailing-stop | trend | trend | neutral | 72.34 | ↑371.83 | 0.6699 | 3.9 | **LOSS** |
| 994 | INTU | 02-27 15:07 | 02-27 15:15 | 401.99 | 401.55 | 15 | 6029.85 | -6.6 | -0.11% | 0.12R | 8m | market | trailing-stop | trend | trend | noisyHighBeta | 65.92 | ↑396.55 | 1.6083 | 1.42 | **LOSS** |
| 995 | LRCX | 02-27 15:08 | 02-27 15:23 | 239.21 | 237.83 | 46 | 11003.66 | -63.48 | -0.58% | 1.16R | 15m | market | stop-loss | trend | trend | neutral | 74.95 | ↑236.36 | 0.3634 | 1.34 | **LOSS** |
| 996 | HPE | 02-27 16:09 | 02-27 16:30 | 21.59 | 21.69 | 277 | 5980.43 | +27.7 | +0.46% | 0.92R | 21m | market | timeout | bearish | mean-revert | neutral | 38.98 | ↑21.46 | 0.0031 | 1.12 | **WIN** |
| 997 | IBM | 02-27 16:44 | 02-27 17:05 | 238.92 | 239.27 | 21 | 5017.32 | +7.35 | +0.15% | 0.3R | 21m | market | timeout | mixed | mean-revert | noisyHighBeta | 57.42 | ↑237.02 | 0.4275 | 2.07 | **WIN** |
| 998 | RIVN | 02-27 17:41 | 02-27 17:58 | 15.4 | 15.35 | 627 | 9655.8 | -31.35 | -0.32% | 0.64R | 17m | market | early-reversal | mixed | mean-revert | neutral | 46.15 | ↑15.19 | 0.0302 | 2.6 | **LOSS** |
| 999 | INTU | 03-02 14:47 | 03-02 15:00 | 417.23 | 417.11 | 23 | 9596.29 | -2.76 | -0.03% | 0.03R | 13m | market | trailing-stop | mixed | mean-revert | neutral | 67.32 | ↑415.22 | 2.9297 | 1.07 | **LOSS** |
| 1000 | DELL | 03-02 15:25 | 03-02 15:46 | 148.64 | 151.15 | 35 | 5202.4 | +87.85 | +1.69% | 2.6R | 21m | market | profit-target | mixed | mean-revert | noisyHighBeta | 55.31 | ↑148.36 | 0.1862 | 1.29 | **WIN** |

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

- ⚠️ **Profit factor 0.62 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.81R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T05:51:52.812Z*
