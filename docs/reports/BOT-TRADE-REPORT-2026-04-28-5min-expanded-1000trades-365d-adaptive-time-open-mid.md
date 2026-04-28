# Bot Trade Report — 1000 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T20:38:12.451Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** expanded | **Symbols scanned:** 126 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $3078.1 (-3.08%) over 1000 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 1000 |
| Win rate | 34.8% (348W / 652L) |
| Net P&L | $-3078.1 (-3.08%) |
| Gross profit | $21648.7 |
| Gross loss | $24726.8 |
| Profit factor | 0.88 |
| Avg win | $62.21 |
| Avg loss | $37.92 |
| Payoff ratio | 1.64:1 |
| Expectancy | $-3.08 / trade |
| Max drawdown | 4.64% |
| Sharpe ratio (ann.) | -1.4 |
| Trades / active day | 12.99 |
| Avg confidence | 97.94% |
| Avg trade duration | 57 min |
| Avg risk ratio | 0.75R |
| Starting equity | $100,000 |
| Ending equity | $96,921.9 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 658 | 33.28% | $-1988.1 | $-3.02 |
| Mid  10:30–11:30 | 342 | 37.72% | $-1090 | $-3.19 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TGT | 12 | 6 | 50% | $+708.14 | $+59.01 | 4.7 | eligible |
| AI | 14 | 7 | 50% | $+695.49 | $+49.68 | 2.38 | eligible |
| UPS | 9 | 5 | 55.56% | $+498.79 | $+55.42 | 4.59 | eligible |
| SLB | 14 | 7 | 50% | $+473.5 | $+33.82 | 3.06 | eligible |
| INTC | 24 | 10 | 41.67% | $+460.07 | $+19.17 | 2.17 | eligible |
| GE | 9 | 7 | 77.78% | $+345.99 | $+38.44 | 3.36 | eligible |
| ABNB | 8 | 4 | 50% | $+310.89 | $+38.86 | 5.59 | eligible |
| NET | 11 | 5 | 45.45% | $+310.65 | $+28.24 | 1.77 | eligible |
| ABBV | 8 | 5 | 62.5% | $+269.96 | $+33.75 | 6.8 | eligible |
| FTNT | 14 | 9 | 64.29% | $+231.31 | $+16.52 | 2.62 | eligible |
| HD | 9 | 2 | 22.22% | $+224.74 | $+24.97 | 3.3 | throttle |
| SBUX | 10 | 4 | 40% | $+221.49 | $+22.15 | 2.63 | eligible |
| AAPL | 12 | 6 | 50% | $+218.09 | $+18.17 | 2.33 | eligible |
| SHOP | 15 | 5 | 33.33% | $+192.08 | $+12.81 | 1.47 | throttle |
| BA | 20 | 9 | 45% | $+178.32 | $+8.92 | 1.51 | eligible |
| PEP | 7 | 4 | 57.14% | $+161.91 | $+23.13 | 3.86 | eligible |
| AXP | 5 | 3 | 60% | $+155.85 | $+31.17 | 5.03 | eligible |
| PATH | 14 | 7 | 50% | $+149.97 | $+10.71 | 1.51 | eligible |
| RIVN | 9 | 4 | 44.44% | $+149.16 | $+16.57 | 1.61 | eligible |
| BAC | 6 | 5 | 83.33% | $+140.38 | $+23.4 | 3.51 | eligible |
| TSM | 12 | 8 | 66.67% | $+127.46 | $+10.62 | 2.17 | eligible |
| GOOG | 9 | 3 | 33.33% | $+83.48 | $+9.28 | 1.48 | throttle |
| LRCX | 14 | 8 | 57.14% | $+77.97 | $+5.57 | 1.24 | eligible |
| ASML | 3 | 1 | 33.33% | $+73.39 | $+24.46 | 3.36 | watch |
| PLTR | 15 | 6 | 40% | $+65.78 | $+4.39 | 1.19 | eligible |
| SCHW | 3 | 2 | 66.67% | $+64.67 | $+21.56 | 7.42 | watch |
| REGN | 9 | 1 | 11.11% | $+64.2 | $+7.13 | 1.18 | throttle |
| ETN | 4 | 3 | 75% | $+63.14 | $+15.79 | 6.64 | watch |
| GS | 8 | 3 | 37.5% | $+62.16 | $+7.77 | 1.51 | throttle |
| TSLA | 11 | 5 | 45.45% | $+61.73 | $+5.61 | 1.3 | eligible |
| MU | 13 | 6 | 46.15% | $+59.24 | $+4.56 | 1.21 | eligible |
| MRK | 10 | 2 | 20% | $+51.54 | $+5.15 | 1.15 | throttle |
| WFC | 2 | 2 | 100% | $+48.29 | $+24.15 | ∞ | watch |
| NVO | 8 | 3 | 37.5% | $+46.77 | $+5.85 | 1.26 | throttle |
| CL | 5 | 1 | 20% | $+40.71 | $+8.14 | 2.04 | throttle |
| CVX | 11 | 5 | 45.45% | $+34.72 | $+3.16 | 1.14 | eligible |
| ADSK | 5 | 2 | 40% | $+34.66 | $+6.93 | 1.58 | eligible |
| MDT | 2 | 1 | 50% | $+29.88 | $+14.94 | 4.82 | watch |
| AMZN | 11 | 5 | 45.45% | $+29.04 | $+2.64 | 1.12 | eligible |
| CMG | 9 | 4 | 44.44% | $+25.5 | $+2.83 | 1.18 | eligible |
| IBM | 4 | 1 | 25% | $+21.31 | $+5.33 | 1.62 | watch |
| TXN | 9 | 4 | 44.44% | $+19.99 | $+2.22 | 1.11 | eligible |
| MA | 5 | 2 | 40% | $+13.37 | $+2.67 | 1.58 | eligible |
| TJX | 4 | 1 | 25% | $+10.33 | $+2.58 | 1.3 | watch |
| EOG | 10 | 3 | 30% | $+8.93 | $+0.89 | 1.04 | throttle |
| WMT | 6 | 2 | 33.33% | $+6.67 | $+1.11 | 1.12 | throttle |
| MSFT | 10 | 3 | 30% | $+5.17 | $+0.52 | 1.12 | throttle |
| HON | 1 | 0 | 0% | $-6.36 | $-6.36 | 0 | watch |
| ADP | 4 | 1 | 25% | $-7.61 | $-1.9 | 0.9 | watch |
| MDB | 6 | 2 | 33.33% | $-7.89 | $-1.31 | 0.95 | throttle |
| KO | 1 | 0 | 0% | $-10 | $-10 | 0 | watch |
| COP | 10 | 4 | 40% | $-16.22 | $-1.62 | 0.91 | throttle |
| V | 2 | 0 | 0% | $-19.81 | $-9.91 | 0 | watch |
| DE | 4 | 1 | 25% | $-21.18 | $-5.29 | 0.66 | watch |
| META | 12 | 3 | 25% | $-22.63 | $-1.89 | 0.88 | throttle |
| ORCL | 6 | 1 | 16.67% | $-24.65 | $-4.11 | 0.82 | throttle |
| INTU | 4 | 1 | 25% | $-29.98 | $-7.49 | 0.29 | watch |
| PG | 5 | 2 | 40% | $-30.44 | $-6.09 | 0.66 | throttle |
| JNJ | 3 | 0 | 0% | $-30.56 | $-10.19 | 0 | watch |
| RTX | 3 | 0 | 0% | $-31.35 | $-10.45 | 0 | watch |
| MRVL | 19 | 9 | 47.37% | $-31.67 | $-1.67 | 0.95 | throttle |
| ABT | 5 | 1 | 20% | $-34.47 | $-6.89 | 0.68 | throttle |
| SMCI | 9 | 4 | 44.44% | $-34.54 | $-3.84 | 0.86 | throttle |
| ADBE | 8 | 3 | 37.5% | $-44.9 | $-5.61 | 0.55 | throttle |
| PYPL | 5 | 1 | 20% | $-51.91 | $-10.38 | 0.66 | throttle |
| VZ | 3 | 0 | 0% | $-52.64 | $-17.55 | 0 | watch |
| MCD | 4 | 0 | 0% | $-53.58 | $-13.39 | 0 | watch |
| T | 6 | 0 | 0% | $-55.22 | $-9.2 | 0 | throttle |
| U | 10 | 3 | 30% | $-55.84 | $-5.58 | 0.65 | throttle |
| TMUS | 6 | 1 | 16.67% | $-59.68 | $-9.95 | 0.12 | throttle |
| PM | 6 | 1 | 16.67% | $-65.34 | $-10.89 | 0.18 | throttle |
| VRTX | 4 | 0 | 0% | $-65.91 | $-16.48 | 0 | watch |
| COST | 9 | 3 | 33.33% | $-66.09 | $-7.34 | 0.48 | throttle |
| DIS | 8 | 2 | 25% | $-68.33 | $-8.54 | 0.48 | throttle |
| XOM | 7 | 2 | 28.57% | $-70.61 | $-10.09 | 0.58 | throttle |
| QCOM | 12 | 5 | 41.67% | $-72.74 | $-6.06 | 0.67 | throttle |
| BLK | 4 | 0 | 0% | $-74.09 | $-18.52 | 0 | watch |
| WDAY | 8 | 3 | 37.5% | $-86.72 | $-10.84 | 0.55 | throttle |
| LLY | 9 | 3 | 33.33% | $-89.24 | $-9.92 | 0.71 | throttle |
| DELL | 15 | 5 | 33.33% | $-96.58 | $-6.44 | 0.72 | throttle |
| TMO | 7 | 1 | 14.29% | $-99.43 | $-14.2 | 0.16 | throttle |
| ANET | 10 | 4 | 40% | $-100.39 | $-10.04 | 0.76 | throttle |
| C | 8 | 4 | 50% | $-102.07 | $-12.76 | 0.49 | throttle |
| FDX | 5 | 1 | 20% | $-102.73 | $-20.55 | 0.19 | throttle |
| HPE | 8 | 1 | 12.5% | $-103.31 | $-12.91 | 0.53 | throttle |
| RBLX | 15 | 5 | 33.33% | $-104.88 | $-6.99 | 0.76 | throttle |
| SNOW | 13 | 4 | 30.77% | $-110.07 | $-8.47 | 0.52 | throttle |
| AMAT | 8 | 2 | 25% | $-118.4 | $-14.8 | 0.44 | throttle |
| UNH | 9 | 3 | 33.33% | $-119.6 | $-13.29 | 0.37 | throttle |
| URI | 7 | 2 | 28.57% | $-120.37 | $-17.2 | 0.35 | throttle |
| PANW | 8 | 2 | 25% | $-121.57 | $-15.2 | 0.2 | throttle |
| CSCO | 3 | 0 | 0% | $-123.73 | $-41.24 | 0 | watch |
| LOW | 5 | 2 | 40% | $-125.75 | $-25.15 | 0.16 | throttle |
| AMD | 10 | 2 | 20% | $-131.49 | $-13.15 | 0.57 | throttle |
| PFE | 6 | 0 | 0% | $-136.43 | $-22.74 | 0 | throttle |
| MS | 6 | 1 | 16.67% | $-137.74 | $-22.96 | 0.25 | throttle |
| ZS | 8 | 2 | 25% | $-139.87 | $-17.48 | 0.27 | throttle |
| UBER | 11 | 3 | 27.27% | $-155.53 | $-14.14 | 0.54 | throttle |
| KLAC | 7 | 1 | 14.29% | $-166.3 | $-23.76 | 0.49 | throttle |
| CAT | 6 | 2 | 33.33% | $-168.38 | $-28.06 | 0.33 | throttle |
| ISRG | 6 | 1 | 16.67% | $-177.46 | $-29.58 | 0.1 | throttle |
| OKTA | 7 | 1 | 14.29% | $-183.99 | $-26.28 | 0.19 | throttle |
| JPM | 10 | 3 | 30% | $-185.13 | $-18.51 | 0.24 | throttle |
| ROST | 4 | 0 | 0% | $-186.51 | $-46.63 | 0 | watch |
| ARM | 13 | 3 | 23.08% | $-195.27 | $-15.02 | 0.41 | throttle |
| TEAM | 6 | 1 | 16.67% | $-196.9 | $-32.82 | 0.25 | throttle |
| GM | 5 | 2 | 40% | $-213.46 | $-42.69 | 0.19 | throttle |
| AVGO | 10 | 4 | 40% | $-214.12 | $-21.41 | 0.2 | throttle |
| COIN | 6 | 2 | 33.33% | $-230.66 | $-38.44 | 0.29 | throttle |
| NKE | 10 | 4 | 40% | $-239.05 | $-23.9 | 0.23 | throttle |
| NVDA | 15 | 5 | 33.33% | $-242.13 | $-16.14 | 0.33 | throttle |
| MO | 5 | 3 | 60% | $-242.52 | $-48.5 | 0.14 | throttle |
| NOW | 6 | 1 | 16.67% | $-257.14 | $-42.86 | 0.14 | throttle |
| CRM | 7 | 0 | 0% | $-274.61 | $-39.23 | 0 | throttle |
| F | 13 | 3 | 23.08% | $-307.02 | $-23.62 | 0.26 | throttle |
| ELF | 8 | 2 | 25% | $-373.61 | $-46.7 | 0.35 | throttle |
| AMGN | 9 | 1 | 11.11% | $-384.28 | $-42.7 | 0.03 | throttle |
| CYBR | 11 | 3 | 27.27% | $-422.44 | $-38.4 | 0.21 | throttle |
| CRWD | 9 | 1 | 11.11% | $-457.04 | $-50.78 | 0.06 | throttle |
| LULU | 9 | 3 | 33.33% | $-695.17 | $-77.24 | 0.2 | throttle |
| CELH | 11 | 1 | 9.09% | $-749.65 | $-68.15 | 0.03 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| GOOGL | Alpaca 429 for GOOGL: {"message": "too many requests."}
 |
| NFLX | Alpaca 429 for NFLX: {"message": "too many requests."}
 |
| DDOG | Alpaca 429 for DDOG: {"message": "too many requests."}
 |
| SQ | insufficient OHLC bars (0 < 120) |
| LMT | Alpaca 429 for LMT: {"message": "too many requests."}
 |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| momentum-pilot | 558 | 199 | 35.66% | $-699.69 | $-1.25 |
| trend | 377 | 135 | 35.81% | $-358.37 | $-0.95 |
| breakout | 65 | 14 | 21.54% | $-2020.04 | $-31.08 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| cleanTrend | 1 | 1 | 100% | $+408.63 | $+408.63 |
| falseBreakoutProne | 6 | 3 | 50% | $+75.44 | $+12.57 |
| noisyHighBeta | 28 | 9 | 32.14% | $+51.52 | $+1.84 |
| thinChop | 68 | 18 | 26.47% | $-167.01 | $-2.46 |
| neutral | 897 | 317 | 35.34% | $-3446.68 | $-3.84 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | UPS | 6 | 4.91 | $+65.53 | 3 | 3.75 | $+35.21 | 0.04% | 2.39 | promote |
| Symbol | BA | 11 | 1.33 | $+8.21 | 9 | 2.12 | $+9.77 | 0.07% | 1.5 | promote |
| Symbol | TSM | 7 | 2.08 | $+12.33 | 5 | 2.43 | $+8.23 | 0.02% | 1.61 | promote |
| Symbol | BAC | 5 | 2.82 | $+20.4 | 1 | ∞ | $+38.38 | 0% | ∞ | watch |
| Symbol | GE | 7 | 3.36 | $+41.97 | 2 | 3.36 | $+26.1 | 0.02% | 1.94 | watch |
| Symbol | ABBV | 6 | 5.99 | $+38.73 | 2 | ∞ | $+18.81 | 0% | ∞ | watch |
| Symbol | NET | 5 | 2.2 | $+49.36 | 6 | 1.32 | $+10.64 | 0.18% | 1.07 | watch |
| Symbol | PATH | 9 | 2.63 | $+12.88 | 5 | 1.15 | $+6.81 | 0.15% | 0.99 | watch |
| Symbol | SLB | 9 | 6.9 | $+51.92 | 5 | 1.04 | $+1.24 | 0.14% | 0.76 | watch |
| Symbol | AI | 8 | 6.29 | $+88.43 | 6 | 0.97 | $-1.99 | 0.37% | 0.85 | watch |
| Symbol | NVO | 5 | 1.53 | $+11.8 | 3 | 0.83 | $-4.08 | 0.07% | 0.55 | watch |
| Symbol | MU | 7 | 1.74 | $+16.38 | 6 | 0.55 | $-9.23 | 0.11% | 0.37 | watch |
| Symbol | INTC | 18 | 2.71 | $+29.23 | 6 | 0.21 | $-11 | 0.07% | 0.13 | watch |
| Symbol | FTNT | 9 | 6.32 | $+32.11 | 5 | 0.35 | $-11.53 | 0.09% | 0.2 | watch |
| Symbol | CMG | 6 | 1.75 | $+12.14 | 3 | 0 | $-15.77 | 0.05% | 0 | watch |
| Symbol | COP | 7 | 1.48 | $+6.71 | 3 | 0.28 | $-21.06 | 0.09% | 0.19 | watch |
| Symbol | EOG | 8 | 1.35 | $+6.82 | 2 | 0 | $-22.79 | 0.05% | 0 | watch |
| Symbol | GS | 5 | 3.51 | $+26.38 | 3 | 0 | $-23.25 | 0.07% | 0 | watch |
| Symbol | PEP | 6 | 10.01 | $+32.78 | 1 | 0 | $-34.78 | 0.03% | 0 | watch |
| Symbol | TGT | 10 | 7.52 | $+77.99 | 2 | 0 | $-35.89 | 0.07% | 0 | watch |
| Symbol | PLTR | 12 | 1.74 | $+14.84 | 3 | 0 | $-37.42 | 0.11% | 0 | watch |
| Symbol | GOOG | 6 | 4.61 | $+33.74 | 3 | 0 | $-39.66 | 0.12% | 0 | watch |
| Symbol | MRK | 5 | 3.02 | $+52.81 | 5 | 0.01 | $-42.5 | 0.21% | 0 | watch |
| Symbol | CVX | 7 | 5.97 | $+29.87 | 4 | 0.15 | $-43.6 | 0.2% | 0.11 | watch |
| Symbol | REGN | 6 | 2.37 | $+39.99 | 3 | 0 | $-58.59 | 0.18% | 0 | watch |
| Symbol | ANET | 6 | 2.63 | $+33.47 | 4 | 0 | $-75.31 | 0.3% | 0 | watch |
| Symbol | AMZN | 9 | 0.6 | $-10.74 | 2 | 30.93 | $+62.86 | 0% | 13.03 | reject |
| Symbol | AAPL | 7 | 0.38 | $-13.01 | 5 | 18.23 | $+61.83 | 0.02% | 12.93 | reject |
| Symbol | SHOP | 6 | 0.13 | $-26.31 | 9 | 2.52 | $+38.88 | 0.23% | 1.99 | reject |
| Symbol | HPE | 5 | 0 | $-36.68 | 3 | 3.07 | $+26.7 | 0.04% | 1.98 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-4635.95 | 0.82 |
| +3 bps/side | $-7751.63 | 0.72 |
| +5 bps/side | $-10867.49 | 0.64 |
| +10 bps/side | $-18656.89 | 0.48 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 396 |
| timeout | 254 |
| stagnation | 165 |
| stop-loss | 59 |
| trim-profit-target | 56 |
| breakeven-stop | 40 |
| profit-target | 19 |
| trailing-stop | 11 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PLTR | 04-29 13:30 | 04-29 14:20 | 114.57 | 113.95 | 24 | 2749.68 | -14.88 | -0.54% | 0.55R | 50m | market | stagnation | trend | momentum-pilot | noisyHighBeta | 54.03 | ↓114.57 | 0.4261 | 2.63 | **LOSS** |
| 2 | AMAT | 04-29 13:50 | 04-29 14:25 | 150.3 | 149.56 | 32 | 4809.6 | -23.68 | -0.49% | 0.54R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 52.05 | ↑149.2 | 0.2638 | 1.89 | **LOSS** |
| 3 | F | 04-29 13:50 | 04-29 14:25 | 10.08 | 10.02 | 486 | 4898.88 | -29.16 | -0.6% | 0.5R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 52.75 | ↓10 | -0.0001 | 2.84 | **LOSS** |
| 4 | META | 04-29 14:00 | 04-29 14:25 | 552.46 | 548.97 | 8 | 4419.68 | -27.92 | -0.63% | 0.7R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 57.34 | ↓548.77 | 0.8205 | 1.74 | **LOSS** |
| 5 | WFC | 04-29 14:35 | 04-29 16:20 | 70.28 | 70.53 | 69 | 4849.32 | +17.25 | +0.36% | 0.31R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.15 | ↑69.94 | 0.135 | 6.43 | **WIN** |
| 6 | UPS | 04-29 14:40 | 04-29 15:30 | 97.4 | 96.94 | 50 | 4870 | -23 | -0.47% | 0.36R | 50m | market | early-reversal | trend | momentum-pilot | neutral | 37.09 | ↓96.93 | -0.0535 | 2.37 | **LOSS** |
| 7 | COP | 04-29 14:40 | 04-29 15:30 | 92.05 | 91.88 | 53 | 4878.65 | -9.01 | -0.18% | 0.26R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 54.55 | ↑91.55 | -0.3971 | 3.81 | **LOSS** |
| 8 | PANW | 04-29 14:50 | 04-29 15:35 | 185.73 | 185.04 | 75 | 13929.75 | -51.75 | -0.37% | 0.46R | 45m | market | early-reversal | trend | trend | neutral | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 9 | SLB | 04-29 15:05 | 04-29 15:30 | 34.13 | 33.95 | 100 | 3413 | -18 | -0.53% | 0.56R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 83.9 | ↑33.65 | 0.0067 | 1.47 | **LOSS** |
| 10 | BA | 04-30 14:00 | 04-30 15:45 | 179.43 | 181.86 | 14 | 2512.02 | +34.02 | +1.35% | 1.15R | 105m | market | timeout | mixed | momentum-pilot | falseBreakoutProne | 34.91 | ↑178.63 | -0.9046 | 2.29 | **WIN** |
| 11 | NVDA | 04-30 14:10 | 04-30 15:55 | 105.82 | 106.6 | 46 | 4867.72 | +35.88 | +0.74% | 0.57R | 105m | market | timeout | mixed | momentum-pilot | neutral | 59.58 | ↑105.03 | -0.7381 | 1.91 | **WIN** |
| 12 | F | 04-30 14:20 | 04-30 14:45 | 9.99 | 9.93 | 438 | 4375.62 | -26.28 | -0.6% | 0.5R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 42.86 | ↓9.95 | -0.0538 | 2.37 | **LOSS** |
| 13 | INTC | 04-30 14:25 | 04-30 14:45 | 19.84 | 19.65 | 246 | 4880.64 | -46.74 | -0.96% | 0.74R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 52.66 | ↓19.74 | -0.1262 | 2.48 | **LOSS** |
| 14 | PATH | 04-30 14:25 | 04-30 16:10 | 11.67 | 11.81 | 413 | 4819.71 | +57.82 | +1.2% | 0.89R | 105m | market | timeout | mixed | momentum-pilot | neutral | 38.06 | ↑11.57 | -0.0655 | 2.58 | **WIN** |
| 15 | PFE | 04-30 14:25 | 04-30 14:45 | 24.34 | 24.21 | 201 | 4892.34 | -26.13 | -0.53% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.18 | ↑24.15 | 0.0764 | 1.77 | **LOSS** |
| 16 | ANET | 04-30 15:05 | 04-30 15:25 | 80.76 | 80.24 | 173 | 13971.48 | -89.96 | -0.64% | 0.65R | 20m | market | early-reversal | breakout | breakout | neutral | 80.31 | ↑79.45 | -0.1347 | 2.64 | **LOSS** |
| 17 | EOG | 04-30 15:05 | 04-30 15:40 | 111.01 | 110.04 | 36 | 3996.36 | -34.92 | -0.87% | 1.24R | 35m | market | stop-loss | mixed | momentum-pilot | neutral | 70.16 | ↓110.48 | -0.7382 | 1.89 | **LOSS** |
| 18 | RBLX | 04-30 15:10 | 04-30 15:35 | 66.07 | 65.77 | 73 | 4823.11 | -21.9 | -0.45% | 0.43R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 72.78 | ↑65.08 | -0.1127 | 2.03 | **LOSS** |
| 19 | CVX | 05-01 13:30 | 05-01 15:15 | 136.53 | 137.12 | 35 | 4778.55 | +20.65 | +0.43% | 0.61R | 105m | market | timeout | trend | momentum-pilot | neutral | 65.28 | ↓136.1 | 0.2002 | 1.65 | **WIN** |
| 20 | COST | 05-01 13:30 | 05-01 13:55 | 997.03 | 992.02 | 4 | 3988.12 | -20.04 | -0.5% | 0.71R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 65.1 | ↓993.78 | 1.4105 | 2.62 | **LOSS** |
| 21 | COP | 05-01 13:30 | 05-01 14:55 | 89.46 | 90.83 | 27 | 4830.84 | +36.99 | +1.53% | 2.15R | 85m | market | trim-profit-target | trend | momentum-pilot | neutral | 67.34 | ↑89.03 | 0.1075 | 2.25 | **WIN** |
| 22 | COP | 05-01 13:30 | 05-01 15:15 | 89.46 | 90.41 | 27 | 4830.84 | +25.65 | +1.06% | 1.49R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.34 | ↓89.03 | 0.1075 | 2.25 | **WIN** |
| 23 | INTC | 05-01 14:00 | 05-01 14:20 | 20.3 | 20.2 | 241 | 4892.3 | -24.1 | -0.49% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 52.27 | ↑20.18 | 0.0338 | 2.4 | **LOSS** |
| 24 | MS | 05-01 14:00 | 05-01 14:50 | 116.06 | 115.97 | 120 | 13927.2 | -10.8 | -0.08% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 68.82 | ↑115.53 | 0.3462 | 1.5 | **LOSS** |
| 25 | WFC | 05-01 14:00 | 05-01 15:45 | 72.06 | 72.22 | 194 | 13979.64 | +31.04 | +0.22% | 0.18R | 105m | market | timeout | trend | trend | neutral | 66.58 | ↑71.43 | 0.2516 | 1.81 | **WIN** |
| 26 | AXP | 05-01 14:00 | 05-01 15:45 | 269.76 | 271.65 | 51 | 13757.76 | +96.39 | +0.7% | 0.73R | 105m | market | timeout | trend | trend | neutral | 77.62 | ↑268.38 | 1.4152 | 1.69 | **WIN** |
| 27 | VRTX | 05-01 14:00 | 05-01 14:50 | 505.09 | 503.5 | 8 | 4040.72 | -12.72 | -0.31% | 0.31R | 50m | market | early-reversal | mixed | momentum-pilot | neutral | 44.81 | ↑501.59 | -0.9955 | 2.28 | **LOSS** |
| 28 | EOG | 05-01 14:00 | 05-01 15:00 | 112.8 | 112.5 | 124 | 13987.2 | -37.2 | -0.27% | 0.23R | 60m | market | stagnation | trend | trend | neutral | 79.67 | ↓111.8 | 0.7578 | 1.3 | **LOSS** |
| 29 | UBER | 05-01 14:05 | 05-01 15:20 | 81.61 | 81.48 | 171 | 13955.31 | -22.23 | -0.16% | 0.15R | 75m | market | stagnation | trend | trend | neutral | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 30 | GE | 05-01 14:15 | 05-01 16:00 | 203.59 | 203.96 | 68 | 13844.12 | +25.16 | +0.18% | 0.2R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 31 | BA | 05-01 14:20 | 05-01 14:40 | 184.44 | 183.61 | 19 | 3504.36 | -15.77 | -0.45% | 0.49R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.89 | ↑183.23 | 0.4622 | 1.76 | **LOSS** |
| 32 | FTNT | 05-01 14:25 | 05-01 15:45 | 105.85 | 105.71 | 132 | 13972.2 | -18.48 | -0.13% | 0.12R | 80m | market | stagnation | trend | trend | neutral | 77.42 | ↓105.1 | 0.7448 | 1.17 | **LOSS** |
| 33 | INTU | 05-01 14:30 | 05-01 15:55 | 631.67 | 630.76 | 22 | 13896.74 | -20.02 | -0.14% | 0.18R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 34 | DE | 05-01 14:55 | 05-01 15:15 | 483.52 | 481.93 | 28 | 13538.56 | -44.52 | -0.33% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 69.26 | ↑479.33 | 6.3644 | 1.23 | **LOSS** |
| 35 | CELH | 05-01 15:00 | 05-01 15:30 | 35.41 | 35.21 | 395 | 13986.95 | -79 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | neutral | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 36 | GS | 05-01 15:10 | 05-01 16:00 | 555.93 | 555.25 | 25 | 13898.25 | -17 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 37 | TXN | 05-01 15:10 | 05-01 15:50 | 161.43 | 160.94 | 86 | 13882.98 | -42.14 | -0.3% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 67.92 | ↑160.37 | 0.479 | 1.95 | **LOSS** |
| 38 | NVDA | 05-01 15:15 | 05-01 15:35 | 114.79 | 114.16 | 122 | 14004.38 | -76.86 | -0.55% | 0.68R | 20m | market | early-reversal | trend | breakout | neutral | 81.88 | ↑113.3 | 0.1318 | 4.81 | **LOSS** |
| 39 | AMD | 05-01 15:15 | 05-01 15:35 | 100.14 | 99.44 | 139 | 13919.46 | -97.3 | -0.7% | 0.83R | 20m | market | early-reversal | trend | trend | neutral | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 40 | INTC | 05-01 15:15 | 05-01 15:50 | 20.5 | 20.37 | 628 | 12874 | -81.64 | -0.63% | 0.63R | 35m | market | early-reversal | trend | breakout | neutral | 71.54 | ↑20.25 | 0.0179 | 6.15 | **LOSS** |
| 41 | ARM | 05-01 15:15 | 05-01 15:30 | 119.53 | 118.41 | 76 | 9084.28 | -85.12 | -0.94% | 0.96R | 15m | market | stop-loss | trend | trend | neutral | 77.28 | ↑117.66 | 1.4811 | 1.93 | **LOSS** |
| 42 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.14 | 151.49 | 91 | 13844.74 | -59.15 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 43 | LRCX | 05-01 15:15 | 05-01 15:35 | 73.42 | 73.03 | 190 | 13949.8 | -74.1 | -0.53% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 44 | MRVL | 05-01 15:20 | 05-01 15:40 | 61.75 | 61.22 | 158 | 9756.5 | -83.74 | -0.86% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 76.99 | ↑60.73 | 0.8119 | 1.6 | **LOSS** |
| 45 | JPM | 05-01 15:25 | 05-01 16:15 | 247.15 | 246.73 | 56 | 13840.4 | -23.52 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 46 | ADBE | 05-02 13:30 | 05-02 14:20 | 381.91 | 381.29 | 12 | 4582.92 | -7.44 | -0.16% | 0.23R | 50m | market | stagnation | trend | momentum-pilot | neutral | 61 | ↓381.05 | -0.131 | 2.74 | **LOSS** |
| 47 | JPM | 05-02 13:30 | 05-02 13:50 | 252.74 | 249.73 | 51 | 12889.74 | -153.51 | -1.19% | 1.57R | 20m | market | stop-loss | trend | breakout | neutral | 76.27 | ↓252.16 | 0.3868 | 1.27 | **LOSS** |
| 48 | TJX | 05-02 13:30 | 05-02 14:40 | 129.05 | 128.95 | 21 | 2710.05 | -2.1 | -0.08% | 0.11R | 70m | market | stagnation | trend | momentum-pilot | thinChop | 71.79 | ↓128.79 | 0.038 | 1.83 | **LOSS** |
| 49 | VZ | 05-02 13:30 | 05-02 13:50 | 43.77 | 43.57 | 111 | 4858.47 | -22.2 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.65 | ↓43.62 | -0.0001 | 3.7 | **LOSS** |
| 50 | PG | 05-02 13:30 | 05-02 13:50 | 161.69 | 160.33 | 30 | 4850.7 | -40.8 | -0.84% | 1.2R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 67.66 | ↓161.25 | 0.0277 | 1.64 | **LOSS** |
| 51 | CAT | 05-02 13:35 | 05-02 13:55 | 321.97 | 319.86 | 43 | 13844.71 | -90.73 | -0.66% | 0.85R | 20m | market | early-reversal | trend | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 52 | FTNT | 05-02 13:40 | 05-02 14:35 | 105.61 | 105.65 | 44 | 4646.84 | +1.76 | +0.04% | 0.05R | 55m | market | breakeven-stop | trend | momentum-pilot | neutral | 53.09 | ↓105.38 | -0.0201 | 1.49 | **WIN** |
| 53 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.3 | 439.61 | 31 | 13711.3 | -83.39 | -0.61% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 54 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 56 | 10468.64 | -46.48 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 55 | HPE | 05-02 14:10 | 05-02 14:40 | 16.96 | 16.88 | 825 | 13992 | -66 | -0.47% | 0.37R | 30m | market | early-reversal | trend | trend | neutral | 72.33 | ↓16.84 | 0.0808 | 1.74 | **LOSS** |
| 56 | CMG | 05-02 14:10 | 05-02 14:30 | 51.46 | 51.16 | 272 | 13997.12 | -81.6 | -0.58% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 77.68 | ↓51.26 | 0.2374 | 1.16 | **LOSS** |
| 57 | INTC | 05-02 14:25 | 05-02 16:10 | 20.57 | 20.64 | 237 | 4875.09 | +16.59 | +0.34% | 0.3R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.08 | ↑20.42 | 0.0966 | 1.89 | **WIN** |
| 58 | COST | 05-02 14:25 | 05-02 14:45 | 1016.02 | 1010.48 | 13 | 13208.26 | -72.02 | -0.55% | 0.79R | 20m | market | early-reversal | trend | trend | neutral | 70.66 | ↓1013.12 | 3.2197 | 1.26 | **LOSS** |
| 59 | SBUX | 05-02 14:25 | 05-02 14:50 | 83.91 | 83.6 | 166 | 13929.06 | -51.46 | -0.37% | 0.33R | 25m | market | early-reversal | trend | trend | neutral | 78.05 | ↑83.08 | 0.6799 | 1.04 | **LOSS** |
| 60 | REGN | 05-02 14:45 | 05-02 15:05 | 612.34 | 608.69 | 22 | 13471.48 | -80.3 | -0.6% | 0.67R | 20m | market | early-reversal | trend | breakout | neutral | 62.81 | ↑606.78 | 6.6581 | 2.07 | **LOSS** |
| 61 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.76 | 140.88 | 50 | 13976 | +56 | +0.8% | 1.1R | 85m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 62 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.76 | 141.14 | 50 | 13976 | +69 | +0.99% | 1.36R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 63 | META | 05-02 15:00 | 05-02 15:30 | 597.85 | 595.54 | 23 | 13750.55 | -53.13 | -0.39% | 0.32R | 30m | market | early-reversal | trend | trend | neutral | 75.91 | ↑589.59 | 5.1083 | 1.5 | **LOSS** |
| 64 | COIN | 05-02 15:00 | 05-02 15:10 | 208.47 | 205.61 | 67 | 13967.49 | -191.62 | -1.37% | 1.29R | 10m | market | stop-loss | trend | trend | neutral | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 65 | ANET | 05-02 15:15 | 05-02 17:00 | 91.22 | 91.77 | 153 | 13956.66 | +84.15 | +0.6% | 0.8R | 105m | market | timeout | trend | trend | neutral | 64.37 | ↑90.58 | 0.5339 | 3.13 | **WIN** |
| 66 | URI | 05-02 15:15 | 05-02 17:00 | 663.34 | 670.06 | 7 | 4643.38 | +47.04 | +1.01% | 1.42R | 105m | market | timeout | trend | momentum-pilot | neutral | 62.52 | ↑658.48 | 4.3557 | 1.51 | **WIN** |
| 67 | NVDA | 05-05 13:30 | 05-05 14:05 | 113.96 | 113.58 | 38 | 4330.48 | -14.44 | -0.33% | 0.41R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 45 | ↓113.55 | -0.3941 | 3.6 | **LOSS** |
| 68 | UBER | 05-05 13:35 | 05-05 15:20 | 85.06 | 85.65 | 57 | 4848.42 | +33.63 | +0.69% | 0.72R | 105m | market | timeout | trend | momentum-pilot | neutral | 57.19 | ↑84.6 | 0.0336 | 1.87 | **WIN** |
| 69 | UNH | 05-05 13:40 | 05-05 15:10 | 402.5 | 405.31 | 6 | 4830 | +16.86 | +0.7% | 1R | 90m | market | trim-profit-target | trend | momentum-pilot | neutral | 80.98 | ↑400.96 | 0.5045 | 1.58 | **WIN** |
| 70 | UNH | 05-05 13:40 | 05-05 15:25 | 402.5 | 405.74 | 6 | 4830 | +19.44 | +0.8% | 1.14R | 105m | market | timeout | trend | momentum-pilot | neutral | 80.98 | ↑400.96 | 0.5045 | 1.58 | **WIN** |
| 71 | GOOG | 05-05 13:45 | 05-05 14:30 | 166.86 | 166.19 | 29 | 4838.94 | -19.43 | -0.4% | 0.57R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 66.61 | ↓165.82 | 0.04 | 1.52 | **LOSS** |
| 72 | ZS | 05-05 13:45 | 05-05 15:30 | 231.96 | 234.19 | 21 | 4871.16 | +46.83 | +0.96% | 1.37R | 105m | market | timeout | trend | momentum-pilot | neutral | 63.68 | ↑230.93 | 0.0585 | 2.06 | **WIN** |
| 73 | CYBR | 05-05 13:55 | 05-05 14:15 | 365.65 | 363.07 | 26 | 9506.9 | -67.08 | -0.71% | 1.01R | 20m | market | early-reversal | trend | breakout | neutral | 83.04 | ↓362.96 | 0.8601 | 1.93 | **LOSS** |
| 74 | ASML | 05-05 14:00 | 05-05 14:20 | 690.5 | 687.19 | 5 | 3452.5 | -16.55 | -0.48% | 0.69R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 48.43 | ↓688.67 | -0.6823 | 2.34 | **LOSS** |
| 75 | OKTA | 05-05 14:00 | 05-05 14:20 | 116.25 | 115.63 | 120 | 13950 | -74.4 | -0.53% | 0.52R | 20m | market | early-reversal | trend | breakout | neutral | 81.75 | ↑115.5 | 0.4576 | 2.37 | **LOSS** |
| 76 | FTNT | 05-05 14:00 | 05-05 15:25 | 107.38 | 108.63 | 65 | 13959.4 | +81.25 | +1.16% | 1.51R | 85m | market | trim-profit-target | trend | trend | neutral | 64.85 | ↑106.61 | 0.1829 | 3.31 | **WIN** |
| 77 | FTNT | 05-05 14:00 | 05-05 15:45 | 107.38 | 108.49 | 65 | 13959.4 | +72.15 | +1.03% | 1.34R | 105m | market | timeout | trend | trend | neutral | 64.85 | ↑106.61 | 0.1829 | 3.31 | **WIN** |
| 78 | COST | 05-05 14:50 | 05-05 15:25 | 1014.54 | 1010.93 | 4 | 4058.16 | -14.44 | -0.36% | 0.51R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 54.96 | ↑1009.22 | 0.3729 | 1.94 | **LOSS** |
| 79 | PANW | 05-05 15:00 | 05-05 15:50 | 190.35 | 190.18 | 73 | 13895.55 | -12.41 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 80 | AAPL | 05-06 13:30 | 05-06 13:50 | 199.51 | 197.41 | 20 | 3990.2 | -42 | -1.05% | 1.5R | 20m | market | stop-loss | mixed | momentum-pilot | neutral | 46.38 | ↓198.78 | -0.7629 | 3.92 | **LOSS** |
| 81 | EOG | 05-06 14:00 | 05-06 15:10 | 109.32 | 109.23 | 44 | 4810.08 | -3.96 | -0.08% | 0.08R | 70m | market | breakeven-stop | trend | momentum-pilot | neutral | 55.36 | ↓108.8 | -0.0478 | 1.69 | **LOSS** |
| 82 | GM | 05-06 14:05 | 05-06 15:10 | 45.59 | 45.6 | 107 | 4878.13 | +1.07 | +0.02% | 0.02R | 65m | market | breakeven-stop | trend | momentum-pilot | neutral | 55.27 | ↑45.2 | -0.0721 | 2.38 | **WIN** |
| 83 | XOM | 05-06 14:10 | 05-06 15:55 | 104.96 | 105.36 | 133 | 13959.68 | +53.2 | +0.38% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 84 | CVX | 05-06 14:15 | 05-06 14:50 | 136.63 | 136.12 | 35 | 4782.05 | -17.85 | -0.37% | 0.4R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 58.8 | ↓136.01 | -0.0009 | 1.51 | **LOSS** |
| 85 | PATH | 05-06 14:20 | 05-06 16:05 | 11.93 | 11.95 | 1174 | 14005.82 | +23.48 | +0.17% | 0.17R | 105m | market | timeout | breakout | breakout | neutral | 65 | ↑11.8 | -0.0003 | 1.17 | **WIN** |
| 86 | TMUS | 05-06 14:20 | 05-06 15:10 | 250.36 | 249.7 | 55 | 13769.8 | -36.3 | -0.26% | 0.37R | 50m | market | stagnation | trend | trend | neutral | 79.86 | ↓249.04 | 0.4382 | 1.67 | **LOSS** |
| 87 | AVGO | 05-06 15:25 | 05-06 15:45 | 201.03 | 200.24 | 23 | 4623.69 | -18.17 | -0.39% | 0.56R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 79.64 | ↑198.34 | 0.0054 | 1.47 | **LOSS** |
| 88 | AMZN | 05-07 13:30 | 05-07 14:45 | 186.8 | 189.71 | 13 | 4856.8 | +37.83 | +1.56% | 2.23R | 75m | market | trim-profit-target | trend | momentum-pilot | neutral | 62.24 | ↑186.14 | 0.0942 | 4.27 | **WIN** |
| 89 | AMZN | 05-07 13:30 | 05-07 15:15 | 186.8 | 188.41 | 13 | 4856.8 | +20.93 | +0.86% | 1.23R | 105m | market | timeout | trend | momentum-pilot | neutral | 62.24 | ↓186.14 | 0.0942 | 4.27 | **WIN** |
| 90 | PLTR | 05-07 13:30 | 05-07 14:40 | 109.66 | 109.95 | 23 | 2522.18 | +6.67 | +0.26% | 0.22R | 70m | market | trailing-stop | trend | momentum-pilot | noisyHighBeta | 56.61 | ↓108.8 | -0.1111 | 5.57 | **WIN** |
| 91 | AMGN | 05-07 13:30 | 05-07 13:55 | 272.35 | 271.47 | 17 | 4629.95 | -14.96 | -0.32% | 0.46R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 66.15 | ↓272.08 | 0.3124 | 1.6 | **LOSS** |
| 92 | TMO | 05-07 13:30 | 05-07 13:50 | 411.94 | 408.64 | 11 | 4531.34 | -36.3 | -0.8% | 1.14R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58.4 | ↓411.28 | -0.9466 | 3.73 | **LOSS** |
| 93 | ADBE | 05-07 13:40 | 05-07 14:00 | 385.88 | 384.45 | 12 | 4630.56 | -17.16 | -0.37% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58.94 | ↓385.33 | 0.1731 | 2.18 | **LOSS** |
| 94 | MDB | 05-07 13:55 | 05-07 14:15 | 174.11 | 172.94 | 28 | 4875.08 | -32.76 | -0.67% | 0.68R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 56.99 | ↓172.97 | 0.5089 | 2.32 | **LOSS** |
| 95 | TGT | 05-07 14:40 | 05-07 15:00 | 95.23 | 94.85 | 51 | 4856.73 | -19.38 | -0.4% | 0.57R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.36 | ↑94.71 | 0.3788 | 2.4 | **LOSS** |
| 96 | RBLX | 05-08 13:35 | 05-08 14:25 | 70.95 | 70.75 | 69 | 4895.55 | -13.8 | -0.28% | 0.29R | 50m | market | stagnation | trend | momentum-pilot | neutral | 48.25 | ↓70.85 | 0.0205 | 2.12 | **LOSS** |
| 97 | MS | 05-08 13:40 | 05-08 14:10 | 121.41 | 120.45 | 115 | 13962.15 | -110.4 | -0.79% | 0.81R | 30m | market | early-reversal | trend | breakout | neutral | 68.43 | ↓120.87 | 0.2337 | 1.37 | **LOSS** |
| 98 | WDAY | 05-08 14:20 | 05-08 14:40 | 257.69 | 256.64 | 54 | 13915.26 | -56.7 | -0.41% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 78.32 | ↑255.3 | 2.153 | 1.1 | **LOSS** |
| 99 | OKTA | 05-08 14:20 | 05-08 15:00 | 119.48 | 118.94 | 117 | 13979.16 | -63.18 | -0.45% | 0.45R | 40m | market | early-reversal | trend | trend | neutral | 68.97 | ↓118.62 | 0.4867 | 1.68 | **LOSS** |
| 100 | ELF | 05-08 14:25 | 05-08 14:55 | 68.08 | 67.54 | 205 | 13956.4 | -110.7 | -0.79% | 0.75R | 30m | market | early-reversal | trend | breakout | neutral | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 101 | TMO | 05-08 14:30 | 05-08 14:55 | 411.56 | 410.15 | 11 | 4527.16 | -15.51 | -0.34% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 65.92 | ↑408.25 | 0.396 | 1.73 | **LOSS** |
| 102 | F | 05-08 14:30 | 05-08 14:50 | 10.39 | 10.28 | 471 | 4893.69 | -51.81 | -1.06% | 1.02R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 54.74 | ↓10.33 | 0.0209 | 2.65 | **LOSS** |
| 103 | GM | 05-08 14:40 | 05-08 15:00 | 47.1 | 46.75 | 297 | 13988.7 | -103.95 | -0.74% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 76.43 | ↓46.78 | 0.4835 | 1.33 | **LOSS** |
| 104 | INTC | 05-08 15:05 | 05-08 16:50 | 20.9 | 21.08 | 234 | 4890.6 | +42.12 | +0.86% | 0.86R | 105m | market | timeout | trend | momentum-pilot | neutral | 64.86 | ↑20.82 | -0.0387 | 1.47 | **WIN** |
| 105 | BAC | 05-08 15:15 | 05-08 17:00 | 41.75 | 42.04 | 335 | 13986.25 | +97.15 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 65.76 | ↑41.48 | 0.1338 | 1.15 | **WIN** |
| 106 | META | 05-08 15:20 | 05-08 17:05 | 604.67 | 607.86 | 8 | 4837.36 | +25.52 | +0.53% | 0.76R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.54 | ↑602.57 | 0.6979 | 2.24 | **WIN** |
| 107 | MSFT | 05-08 15:20 | 05-08 17:05 | 440.01 | 442.71 | 11 | 4840.11 | +29.7 | +0.61% | 0.87R | 105m | market | timeout | trend | momentum-pilot | neutral | 64.93 | ↑438.54 | 0.6682 | 3.55 | **WIN** |
| 108 | PANW | 05-08 15:20 | 05-08 17:05 | 187.07 | 187.61 | 23 | 4302.61 | +12.42 | +0.29% | 0.41R | 105m | market | timeout | mixed | momentum-pilot | neutral | 66.58 | ↑185.9 | -0.1982 | 1.75 | **WIN** |
| 109 | JPM | 05-08 15:20 | 05-08 17:05 | 253.99 | 255.12 | 19 | 4825.81 | +21.47 | +0.44% | 0.63R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.98 | ↑252.78 | 0.6743 | 1.94 | **WIN** |
| 110 | GS | 05-08 15:20 | 05-08 17:10 | 565.92 | 570.89 | 24 | 13582.08 | +119.28 | +0.88% | 1.26R | 110m | market | timeout | trend | trend | neutral | 66.14 | ↑561.53 | 2.561 | 2.47 | **WIN** |
| 111 | CAT | 05-08 15:20 | 05-08 17:05 | 325.76 | 328.17 | 15 | 4886.4 | +36.15 | +0.74% | 1.06R | 105m | market | timeout | trend | momentum-pilot | neutral | 58.89 | ↑324.18 | 1.193 | 3.8 | **WIN** |
| 112 | HD | 05-08 15:20 | 05-08 17:05 | 365.1 | 367.95 | 7 | 2555.7 | +19.95 | +0.78% | 1.11R | 105m | market | timeout | trend | momentum-pilot | thinChop | 51.87 | ↑363.55 | 0.3117 | 1.98 | **WIN** |
| 113 | NKE | 05-08 15:20 | 05-08 17:00 | 59.55 | 59.98 | 41 | 4883.1 | +17.63 | +0.72% | 0.86R | 100m | market | trim-profit-target | trend | momentum-pilot | neutral | 61.17 | ↑59.24 | 0.1565 | 1.5 | **WIN** |
| 114 | NKE | 05-08 15:20 | 05-08 17:05 | 59.55 | 60.01 | 41 | 4883.1 | +18.86 | +0.77% | 0.92R | 105m | market | timeout | trend | momentum-pilot | neutral | 61.17 | ↑59.24 | 0.1565 | 1.5 | **WIN** |
| 115 | AI | 05-08 15:20 | 05-08 17:05 | 23.21 | 23.59 | 603 | 13995.63 | +229.14 | +1.64% | 1.31R | 105m | market | timeout | trend | trend | neutral | 60.33 | ↑23 | 0.1896 | 3.11 | **WIN** |
| 116 | MS | 05-08 15:20 | 05-08 17:05 | 121.94 | 123.07 | 40 | 4877.6 | +45.2 | +0.93% | 1.33R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.75 | ↑121.05 | 0.4301 | 1.48 | **WIN** |
| 117 | AMGN | 05-08 15:20 | 05-08 17:05 | 272.32 | 273.35 | 12 | 3267.84 | +12.36 | +0.38% | 0.54R | 105m | market | timeout | mixed | momentum-pilot | neutral | 85.67 | ↑268.73 | -0.7873 | 2.08 | **WIN** |
| 118 | AMZN | 05-08 15:25 | 05-08 17:10 | 191.7 | 193.45 | 25 | 4792.5 | +43.75 | +0.91% | 1.2R | 105m | market | timeout | trend | momentum-pilot | neutral | 69.72 | ↑190.26 | 0.4058 | 2.4 | **WIN** |
| 119 | TSM | 05-08 15:25 | 05-08 17:10 | 175.91 | 177.17 | 27 | 4749.57 | +34.02 | +0.72% | 1.03R | 105m | market | timeout | trend | momentum-pilot | neutral | 62.84 | ↑174.74 | 0.3853 | 1.83 | **WIN** |
| 120 | GE | 05-08 15:25 | 05-08 17:10 | 215.12 | 215.84 | 65 | 13982.8 | +46.8 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 77.33 | ↑213.22 | 1.1311 | 2.13 | **WIN** |
| 121 | TGT | 05-08 15:25 | 05-08 17:10 | 97.16 | 98.08 | 50 | 4858 | +46 | +0.95% | 1.36R | 105m | market | timeout | mixed | momentum-pilot | neutral | 56.9 | ↑96.79 | 0.2348 | 1.59 | **WIN** |
| 122 | LOW | 05-08 15:25 | 05-08 17:10 | 224.73 | 225.9 | 12 | 2696.76 | +14.04 | +0.52% | 0.74R | 105m | market | timeout | trend | momentum-pilot | thinChop | 63.24 | ↑223.87 | 0.0767 | 1.63 | **WIN** |
| 123 | ADSK | 05-08 15:25 | 05-08 17:10 | 287.81 | 289.39 | 48 | 13814.88 | +75.84 | +0.55% | 0.79R | 105m | market | timeout | trend | trend | neutral | 65.17 | ↑286.22 | 1.0663 | 1.19 | **WIN** |
| 124 | OKTA | 05-08 15:25 | 05-08 16:20 | 120.14 | 120.05 | 40 | 4805.6 | -3.6 | -0.07% | 0.09R | 55m | market | stagnation | trend | momentum-pilot | neutral | 61.3 | ↑119.26 | 0.5172 | 1.52 | **LOSS** |
| 125 | AMZN | 05-09 13:30 | 05-09 13:50 | 194.11 | 192.92 | 21 | 4076.31 | -24.99 | -0.61% | 0.87R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 55.59 | ↓193.84 | -0.0527 | 2.39 | **LOSS** |
| 126 | AMD | 05-09 13:30 | 05-09 13:40 | 103.23 | 101.71 | 45 | 4645.35 | -68.4 | -1.47% | 1.48R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 54.21 | ↓103.07 | -0.1654 | 4.1 | **LOSS** |
| 127 | SMCI | 05-09 13:30 | 05-09 14:05 | 32.59 | 32.34 | 85 | 2770.15 | -21.25 | -0.77% | 0.64R | 35m | market | early-reversal | trend | momentum-pilot | noisyHighBeta | 57.89 | ↓32.49 | -0.0233 | 2.11 | **LOSS** |
| 128 | U | 05-09 13:30 | 05-09 14:25 | 21.05 | 21.01 | 119 | 2504.95 | -4.76 | -0.19% | 0.14R | 55m | market | trailing-stop | trend | momentum-pilot | noisyHighBeta | 45.56 | ↓20.97 | -0.0598 | 1.47 | **LOSS** |
| 129 | ARM | 05-09 13:35 | 05-09 13:55 | 117.93 | 116.86 | 27 | 3184.11 | -28.89 | -0.91% | 0.85R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 54.5 | ↓117.34 | -0.2536 | 1.61 | **LOSS** |
| 130 | RBLX | 05-09 14:00 | 05-09 14:20 | 72.27 | 71.72 | 193 | 13948.11 | -106.15 | -0.76% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 74.92 | ↓71.74 | 0.2936 | 1.58 | **LOSS** |
| 131 | F | 05-09 14:00 | 05-09 14:20 | 10.49 | 10.41 | 1333 | 13983.17 | -106.64 | -0.76% | 0.93R | 20m | market | early-reversal | trend | trend | neutral | 67.9 | ↓10.43 | 0.0304 | 2.04 | **LOSS** |
| 132 | CELH | 05-09 15:00 | 05-09 15:15 | 37.35 | 36.63 | 374 | 13968.9 | -269.28 | -1.93% | 1.4R | 15m | market | stop-loss | trend | trend | neutral | 72.88 | ↓36.76 | 0.4745 | 1.11 | **LOSS** |
| 133 | RBLX | 05-09 15:00 | 05-09 15:40 | 72.15 | 71.79 | 67 | 4834.05 | -24.12 | -0.5% | 0.51R | 40m | market | early-reversal | mixed | momentum-pilot | neutral | 50.64 | ↓71.81 | 0.3007 | 2.52 | **LOSS** |
| 134 | T | 05-09 15:05 | 05-09 15:55 | 27.96 | 27.94 | 500 | 13980 | -10 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 72.15 | ↑27.79 | 0.0671 | 3.37 | **LOSS** |
| 135 | PLTR | 05-09 15:15 | 05-09 15:45 | 117.83 | 117.22 | 22 | 2592.26 | -13.42 | -0.52% | 0.41R | 30m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | 46.15 | ↓117.51 | -0.447 | 2.3 | **LOSS** |
| 136 | ABBV | 05-12 13:35 | 05-12 15:15 | 187.28 | 191.8 | 24 | 4494.72 | +108.48 | +2.41% | 2.94R | 100m | market | profit-target | trend | momentum-pilot | neutral | 56.61 | ↑185.89 | -0.3424 | 1.56 | **WIN** |
| 137 | PEP | 05-12 13:35 | 05-12 13:55 | 131.78 | 131.3 | 21 | 2767.38 | -10.08 | -0.36% | 0.51R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 65.65 | ↓131.08 | 0.0723 | 4.29 | **LOSS** |
| 138 | PG | 05-12 13:45 | 05-12 15:30 | 158.97 | 159.42 | 17 | 2702.49 | +7.65 | +0.28% | 0.4R | 105m | market | timeout | trend | momentum-pilot | thinChop | 63.59 | ↑158.29 | 0.1532 | 1.67 | **WIN** |
| 139 | MA | 05-12 14:00 | 05-12 15:45 | 571.18 | 573.43 | 8 | 4569.44 | +18 | +0.39% | 0.42R | 105m | market | timeout | trend | momentum-pilot | neutral | 54.74 | ↑570.13 | 0.6053 | 2.17 | **WIN** |
| 140 | JNJ | 05-12 15:00 | 05-12 15:50 | 155.07 | 154.86 | 31 | 4807.17 | -6.51 | -0.14% | 0.2R | 50m | market | stagnation | trend | momentum-pilot | neutral | 79.03 | ↑153.8 | 0.0143 | 1.51 | **LOSS** |
| 141 | ZS | 05-12 15:05 | 05-12 15:50 | 239.38 | 238.54 | 20 | 4787.6 | -16.8 | -0.35% | 0.49R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 45.14 | ↑238.39 | 1.7169 | 1.55 | **LOSS** |
| 142 | GS | 05-13 13:30 | 05-13 15:20 | 595.91 | 601.07 | 8 | 4767.28 | +41.28 | +0.87% | 1.24R | 110m | market | timeout | trend | momentum-pilot | neutral | 68.87 | ↑595.1 | 0.1292 | 1.86 | **WIN** |
| 143 | AMAT | 05-13 13:30 | 05-13 15:15 | 170.24 | 172.14 | 28 | 4766.72 | +53.2 | +1.12% | 1.6R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.42 | ↑169.63 | -0.2075 | 3.79 | **WIN** |
| 144 | MU | 05-13 13:35 | 05-13 15:20 | 94.54 | 95.73 | 118 | 11155.72 | +140.42 | +1.26% | 1.43R | 105m | market | timeout | trend | breakout | neutral | 73.86 | ↑93.88 | 0.031 | 1.46 | **WIN** |
| 145 | JPM | 05-13 13:35 | 05-13 15:20 | 261.41 | 262.68 | 10 | 2614.1 | +12.7 | +0.49% | 0.7R | 105m | market | timeout | trend | momentum-pilot | thinChop | 61.96 | ↑260.95 | 0.1198 | 1.54 | **WIN** |
| 146 | TSLA | 05-13 14:00 | 05-13 14:40 | 323.83 | 321.86 | 36 | 11657.88 | -70.92 | -0.61% | 0.46R | 40m | market | early-reversal | trend | breakout | neutral | 68.88 | ↑320.2 | 1.0408 | 2.95 | **LOSS** |
| 147 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 76 | 13898.88 | -7.6 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | neutral | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 148 | PATH | 05-13 14:00 | 05-13 15:45 | 13.18 | 13.23 | 1063 | 14010.34 | +53.15 | +0.38% | 0.54R | 105m | market | timeout | trend | trend | neutral | 78.67 | ↑13.12 | 0.0376 | 1.7 | **WIN** |
| 149 | LLY | 05-13 14:05 | 05-13 14:25 | 757.97 | 751.48 | 6 | 4547.82 | -38.94 | -0.86% | 0.73R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 50.44 | ↓753 | -0.5237 | 1.55 | **LOSS** |
| 150 | C | 05-13 14:15 | 05-13 14:40 | 75.85 | 75.53 | 184 | 13956.4 | -58.88 | -0.42% | 0.56R | 25m | market | early-reversal | trend | trend | neutral | 73.4 | ↓75.47 | 0.1744 | 1.15 | **LOSS** |
| 151 | LULU | 05-13 14:15 | 05-13 14:45 | 310.25 | 308.22 | 45 | 13961.25 | -91.35 | -0.65% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 78.56 | ↑307.45 | 2.196 | 1.29 | **LOSS** |
| 152 | PLTR | 05-13 14:50 | 05-13 15:45 | 125.03 | 128.44 | 61 | 7626.83 | +208.01 | +2.73% | 1.98R | 55m | market | profit-target | trend | trend | noisyHighBeta | 67.25 | ↑123.12 | 1.6261 | 1.26 | **WIN** |
| 153 | AMD | 05-13 14:55 | 05-13 16:40 | 111.52 | 112.48 | 125 | 13940 | +120 | +0.86% | 0.8R | 105m | market | timeout | trend | trend | neutral | 75.8 | ↑110.2 | 0.7051 | 1.44 | **WIN** |
| 154 | TXN | 05-13 14:55 | 05-13 16:40 | 188.54 | 189.2 | 25 | 4713.5 | +16.5 | +0.35% | 0.5R | 105m | market | timeout | trend | momentum-pilot | neutral | 66.45 | ↑187.82 | 0.2635 | 1.96 | **WIN** |
| 155 | ARM | 05-13 15:00 | 05-13 16:45 | 127.63 | 128.69 | 71 | 9061.73 | +75.26 | +0.83% | 1.04R | 105m | market | timeout | trend | trend | neutral | 70.44 | ↑126.26 | 0.7319 | 1.4 | **WIN** |
| 156 | DELL | 05-13 15:00 | 05-13 16:45 | 107.11 | 107.57 | 130 | 13924.3 | +59.8 | +0.43% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.45 | ↑106.33 | 0.9329 | 1.38 | **WIN** |
| 157 | URI | 05-13 15:00 | 05-13 16:05 | 728.47 | 727.7 | 19 | 13840.93 | -14.63 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 72.19 | ↑725.05 | 3.8246 | 1.58 | **LOSS** |
| 158 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.39 | 795.74 | 17 | 13368.63 | +158.95 | +1.19% | 1.68R | 105m | market | timeout | trend | trend | neutral | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 159 | META | 05-13 15:15 | 05-13 16:05 | 659.63 | 657.28 | 21 | 13852.23 | -49.35 | -0.36% | 0.51R | 50m | market | early-reversal | trend | trend | neutral | 79.04 | ↑651.78 | 4.8557 | 2.3 | **LOSS** |
| 160 | COP | 05-13 15:15 | 05-13 17:00 | 93.73 | 94.28 | 149 | 13965.77 | +81.95 | +0.59% | 0.84R | 105m | market | timeout | trend | trend | neutral | 70.45 | ↑93.09 | 0.3011 | 3 | **WIN** |
| 161 | EOG | 05-13 15:15 | 05-13 16:55 | 116.04 | 116.82 | 60 | 13924.8 | +46.8 | +0.67% | 0.96R | 100m | market | trim-profit-target | trend | trend | neutral | 69.16 | ↑115.18 | 0.3633 | 3.37 | **WIN** |
| 162 | EOG | 05-13 15:15 | 05-13 17:00 | 116.04 | 116.9 | 60 | 13924.8 | +51.6 | +0.74% | 1.06R | 105m | market | timeout | trend | trend | neutral | 69.16 | ↑115.18 | 0.3633 | 3.37 | **WIN** |
| 163 | MU | 05-13 15:25 | 05-13 17:10 | 96.05 | 96.37 | 116 | 11141.8 | +37.12 | +0.33% | 0.42R | 105m | market | timeout | trend | trend | neutral | 66.99 | ↑95.02 | 0.773 | 2.05 | **WIN** |
| 164 | NVDA | 05-14 13:30 | 05-14 13:40 | 134.77 | 133.56 | 36 | 4851.72 | -43.56 | -0.9% | 1.29R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 63.16 | ↓134.06 | 1.0688 | 10.46 | **LOSS** |
| 165 | ABNB | 05-14 13:30 | 05-14 14:00 | 139.1 | 138.33 | 35 | 4868.5 | -26.95 | -0.55% | 0.79R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 68.57 | ↓138.91 | 0.3618 | 1.93 | **LOSS** |
| 166 | CRWD | 05-14 13:30 | 05-14 13:45 | 444.8 | 439.55 | 11 | 4892.8 | -57.75 | -1.18% | 1.69R | 15m | market | stop-loss | mixed | momentum-pilot | neutral | 66.73 | ↓443.6 | -0.6512 | 6.34 | **LOSS** |
| 167 | SNOW | 05-14 13:30 | 05-14 13:45 | 182.9 | 181.22 | 25 | 4572.5 | -42 | -0.92% | 1.31R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 62.09 | ↓182.86 | -0.1839 | 1.83 | **LOSS** |
| 168 | BA | 05-14 13:30 | 05-14 13:50 | 205.83 | 204.89 | 17 | 3499.11 | -15.98 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.65 | ↓205.91 | -0.0423 | 2.04 | **LOSS** |
| 169 | MSFT | 05-14 13:45 | 05-14 15:00 | 452.31 | 451.89 | 10 | 4523.1 | -4.2 | -0.09% | 0.13R | 75m | market | stagnation | trend | momentum-pilot | neutral | 71.29 | ↓451.19 | 0.8411 | 1.7 | **LOSS** |
| 170 | COST | 05-14 13:55 | 05-14 14:45 | 998.71 | 996.68 | 3 | 2996.13 | -6.09 | -0.2% | 0.29R | 50m | market | stagnation | mixed | momentum-pilot | falseBreakoutProne | 51.25 | ↑994.41 | 0.6677 | 1.46 | **LOSS** |
| 171 | PG | 05-14 13:55 | 05-14 14:15 | 159.11 | 158.38 | 29 | 4614.19 | -21.17 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 55.58 | ↓158.52 | -0.016 | 1.78 | **LOSS** |
| 172 | HD | 05-14 14:00 | 05-14 14:55 | 375.24 | 375 | 7 | 2626.68 | -1.68 | -0.06% | 0.09R | 55m | market | stagnation | trend | momentum-pilot | thinChop | 56.06 | ↑373.32 | -0.1476 | 2.33 | **LOSS** |
| 173 | ELF | 05-14 14:00 | 05-14 14:20 | 79.81 | 78.96 | 175 | 13966.75 | -148.75 | -1.07% | 1.01R | 20m | market | early-reversal | trend | trend | neutral | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 174 | GOOG | 05-14 14:15 | 05-14 15:10 | 163.52 | 165.36 | 42 | 13899.2 | +77.28 | +1.13% | 1.13R | 55m | market | trim-profit-target | trend | trend | neutral | 70.9 | ↑162.17 | 0.5232 | 1.14 | **WIN** |
| 175 | GOOG | 05-14 14:15 | 05-14 16:00 | 163.52 | 167.06 | 43 | 13899.2 | +152.22 | +2.16% | 2.16R | 105m | market | timeout | trend | trend | neutral | 70.9 | ↑162.17 | 0.5232 | 1.14 | **WIN** |
| 176 | WMT | 05-14 14:20 | 05-14 15:10 | 96.97 | 96.85 | 144 | 13963.68 | -17.28 | -0.12% | 0.17R | 50m | market | stagnation | trend | trend | neutral | 79.19 | ↑96.45 | 0.207 | 1.13 | **LOSS** |
| 177 | AVGO | 05-14 14:30 | 05-14 16:15 | 232.09 | 232.18 | 20 | 4641.8 | +1.8 | +0.04% | 0.03R | 105m | market | timeout | mixed | momentum-pilot | neutral | 47.92 | ↑230.8 | -0.3706 | 1.86 | **WIN** |
| 178 | F | 05-14 14:30 | 05-14 14:50 | 10.68 | 10.64 | 457 | 4880.76 | -18.28 | -0.37% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 72.92 | ↑10.6 | 0.0106 | 2.6 | **LOSS** |
| 179 | CMG | 05-14 15:20 | 05-14 17:05 | 51.72 | 52.19 | 270 | 13964.4 | +126.9 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 74.07 | ↑51.27 | 0.2176 | 1.06 | **WIN** |
| 180 | DIS | 05-14 15:25 | 05-14 15:50 | 112.15 | 111.8 | 43 | 4822.45 | -15.05 | -0.31% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 76.13 | ↑111.29 | 0.1108 | 1.79 | **LOSS** |
| 181 | INTC | 05-15 13:40 | 05-15 14:30 | 21.35 | 21.32 | 229 | 4889.15 | -6.87 | -0.14% | 0.2R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 53.12 | ↓21.29 | -0.0857 | 3.73 | **LOSS** |
| 182 | PG | 05-15 13:45 | 05-15 15:30 | 159.65 | 161.33 | 30 | 4789.5 | +50.4 | +1.05% | 1.5R | 105m | market | timeout | trend | momentum-pilot | neutral | 74.14 | ↑159.12 | 0.1743 | 1.56 | **WIN** |
| 183 | NKE | 05-15 13:50 | 05-15 14:30 | 62.08 | 61.84 | 72 | 4469.76 | -17.28 | -0.39% | 0.38R | 40m | market | early-reversal | mixed | momentum-pilot | neutral | 49.75 | ↑61.52 | -0.1353 | 1.99 | **LOSS** |
| 184 | TGT | 05-15 14:10 | 05-15 15:45 | 95.89 | 96.65 | 73 | 13999.94 | +55.48 | +0.79% | 0.65R | 95m | market | trim-profit-target | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 185 | TGT | 05-15 14:10 | 05-15 15:55 | 95.89 | 96.68 | 73 | 13999.94 | +57.67 | +0.82% | 0.68R | 105m | market | timeout | trend | trend | neutral | 55.18 | ↑94.93 | 0.0809 | 1 | **WIN** |
| 186 | CL | 05-15 14:10 | 05-15 15:00 | 89 | 88.95 | 157 | 13973 | -7.85 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 77.29 | ↑88.52 | 0.272 | 1.82 | **LOSS** |
| 187 | AMGN | 05-15 14:35 | 05-15 14:55 | 267.61 | 266.67 | 52 | 13915.72 | -48.88 | -0.35% | 0.4R | 20m | market | early-reversal | trend | trend | neutral | 76.53 | ↑265.76 | 1.2722 | 1.11 | **LOSS** |
| 188 | COST | 05-15 14:50 | 05-15 16:40 | 1004.3 | 1007.98 | 13 | 13055.9 | +47.84 | +0.37% | 0.53R | 110m | market | timeout | trend | trend | neutral | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 189 | CSCO | 05-15 14:50 | 05-15 15:15 | 65.52 | 65.15 | 213 | 13955.76 | -78.81 | -0.56% | 0.5R | 25m | market | early-reversal | trend | trend | neutral | 69.75 | ↑64.47 | 0.8944 | 1.25 | **LOSS** |
| 190 | PFE | 05-15 15:00 | 05-15 15:35 | 22.44 | 22.36 | 623 | 13980.12 | -49.84 | -0.36% | 0.51R | 35m | market | early-reversal | trend | trend | neutral | 78.21 | ↓22.28 | 0.0862 | 1.35 | **LOSS** |
| 191 | LOW | 05-15 15:05 | 05-15 16:50 | 230.41 | 231.06 | 14 | 3225.74 | +9.1 | +0.28% | 0.4R | 105m | market | timeout | trend | momentum-pilot | neutral | 87.86 | ↑228.52 | 0.1764 | 1.55 | **WIN** |
| 192 | AI | 05-15 15:10 | 05-15 16:55 | 23.35 | 23.55 | 207 | 4833.45 | +41.4 | +0.86% | 0.92R | 105m | market | timeout | mixed | momentum-pilot | neutral | 50.98 | ↑23.23 | -0.1677 | 1.91 | **WIN** |
| 193 | NVO | 05-15 15:15 | 05-15 17:00 | 65.6 | 66.08 | 213 | 13972.8 | +102.24 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 50.56 | ↑65.2 | 0.2221 | 1.13 | **WIN** |
| 194 | WDAY | 05-15 15:15 | 05-15 17:05 | 274.46 | 275.61 | 50 | 13723 | +57.5 | +0.42% | 0.6R | 110m | market | timeout | trend | trend | neutral | 60.63 | ↑272.24 | 0.8157 | 1.28 | **WIN** |
| 195 | BA | 05-15 15:20 | 05-15 15:50 | 208.07 | 207.4 | 17 | 3537.19 | -11.39 | -0.32% | 0.46R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 61.89 | ↑207.19 | 0.5645 | 1.53 | **LOSS** |
| 196 | INTU | 05-15 15:20 | 05-15 16:10 | 663.28 | 662.82 | 21 | 13928.88 | -9.66 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 197 | U | 05-15 15:20 | 05-15 16:20 | 21.2 | 21.44 | 115 | 4897.2 | +27.6 | +1.13% | 1.33R | 60m | market | trim-profit-target | mixed | momentum-pilot | neutral | 67.12 | ↑21.01 | -0.1195 | 2.75 | **WIN** |
| 198 | U | 05-15 15:20 | 05-15 17:05 | 21.2 | 21.54 | 116 | 4897.2 | +39.44 | +1.6% | 1.88R | 105m | market | timeout | mixed | momentum-pilot | neutral | 67.12 | ↑21.01 | -0.1195 | 2.75 | **WIN** |
| 199 | INTC | 05-15 15:25 | 05-15 17:10 | 21.5 | 21.55 | 650 | 13975 | +32.5 | +0.23% | 0.33R | 105m | market | timeout | trend | trend | neutral | 51.43 | ↑21.36 | 0.0348 | 1.39 | **WIN** |
| 200 | TSM | 05-16 13:30 | 05-16 14:20 | 194.59 | 194.1 | 25 | 4864.75 | -12.25 | -0.25% | 0.36R | 50m | market | stagnation | trend | momentum-pilot | neutral | 66.98 | ↓194.22 | -0.0127 | 1.53 | **LOSS** |
| 201 | EOG | 05-16 13:35 | 05-16 13:55 | 116.13 | 115.46 | 42 | 4877.46 | -28.14 | -0.58% | 0.83R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 75.62 | ↓116.07 | 0.2146 | 3.46 | **LOSS** |
| 202 | PM | 05-16 13:55 | 05-16 14:15 | 169.68 | 168.83 | 28 | 4751.04 | -23.8 | -0.5% | 0.71R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 63.22 | ↓169.35 | 0.1989 | 2.53 | **LOSS** |
| 203 | ARM | 05-16 14:00 | 05-16 14:40 | 134.75 | 133.27 | 23 | 3099.25 | -34.04 | -1.1% | 1.08R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 72.09 | ↓134.11 | 0.2287 | 1.84 | **LOSS** |
| 204 | WMT | 05-16 14:05 | 05-16 15:20 | 98.4 | 98.41 | 142 | 13972.8 | +1.42 | +0.01% | 0.01R | 75m | market | breakeven-stop | trend | trend | neutral | 77.46 | ↑97.31 | 0.4845 | 1.01 | **WIN** |
| 205 | CYBR | 05-16 14:05 | 05-16 15:05 | 356.74 | 354.5 | 39 | 13912.86 | -87.36 | -0.63% | 0.9R | 60m | market | early-reversal | trend | trend | neutral | 66.51 | ↓356.27 | 0.4424 | 1.59 | **LOSS** |
| 206 | NKE | 05-16 14:10 | 05-16 15:00 | 63.37 | 63.3 | 220 | 13941.4 | -15.4 | -0.11% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 207 | DE | 05-16 14:10 | 05-16 15:20 | 526.1 | 525.48 | 26 | 13678.6 | -16.12 | -0.12% | 0.17R | 70m | market | breakeven-stop | trend | trend | neutral | 74.58 | ↑522.84 | 3.0417 | 2.98 | **LOSS** |
| 208 | AMD | 05-16 14:15 | 05-16 14:30 | 118.26 | 116.7 | 41 | 4848.66 | -63.96 | -1.32% | 1.33R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 54.36 | ↓117.29 | 0.7781 | 2.02 | **LOSS** |
| 209 | OKTA | 05-16 14:15 | 05-16 15:05 | 126.74 | 126.1 | 110 | 13941.4 | -70.4 | -0.5% | 0.63R | 50m | market | early-reversal | trend | trend | neutral | 77.33 | ↓126.08 | 0.4351 | 2.26 | **LOSS** |
| 210 | LULU | 05-16 14:20 | 05-16 14:50 | 322.67 | 321.59 | 43 | 13874.81 | -46.44 | -0.33% | 0.47R | 30m | market | early-reversal | trend | trend | neutral | 77.59 | ↑320.79 | 1.0873 | 1 | **LOSS** |
| 211 | MRK | 05-16 14:25 | 05-16 15:15 | 75.62 | 75.38 | 185 | 13989.7 | -44.4 | -0.32% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 77.84 | ↓75.12 | 0.2509 | 1.03 | **LOSS** |
| 212 | UBER | 05-16 15:05 | 05-16 16:50 | 91.86 | 92.54 | 152 | 13962.72 | +103.36 | +0.74% | 0.96R | 105m | market | timeout | trend | trend | neutral | 74.83 | ↑90.93 | 0.3759 | 1.39 | **WIN** |
| 213 | CELH | 05-16 15:15 | 05-16 16:30 | 39.3 | 39.62 | 62 | 4873.2 | +19.84 | +0.81% | 1.16R | 75m | market | trim-profit-target | trend | momentum-pilot | neutral | 65.89 | ↑39.08 | 0.0666 | 2.35 | **WIN** |
| 214 | CELH | 05-16 15:15 | 05-16 16:40 | 39.3 | 39.19 | 62 | 4873.2 | -6.82 | -0.28% | 0.4R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | 65.89 | ↓39.08 | 0.0666 | 2.35 | **LOSS** |
| 215 | JPM | 05-19 13:50 | 05-19 14:20 | 268.22 | 267.43 | 17 | 4559.74 | -13.43 | -0.29% | 0.41R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 52.56 | ↑266.74 | -0.155 | 1.5 | **LOSS** |
| 216 | ORCL | 05-19 14:05 | 05-19 14:25 | 161.2 | 160.48 | 30 | 4836 | -21.6 | -0.45% | 0.58R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 53.85 | ↓160.16 | 0.0232 | 1.59 | **LOSS** |
| 217 | BAC | 05-19 14:05 | 05-19 14:25 | 45.05 | 44.87 | 311 | 14010.55 | -55.98 | -0.4% | 0.55R | 20m | market | early-reversal | trend | trend | neutral | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 218 | DELL | 05-19 14:15 | 05-19 14:45 | 114.63 | 114.16 | 42 | 4814.46 | -19.74 | -0.41% | 0.42R | 30m | market | early-reversal | mixed | momentum-pilot | neutral | 53.14 | ↓114.07 | 0.0504 | 3.84 | **LOSS** |
| 219 | NKE | 05-20 13:30 | 05-20 14:50 | 62.42 | 62.9 | 39 | 4868.76 | +18.72 | +0.77% | 1.1R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 69.23 | ↑62.44 | -0.0014 | 2.29 | **WIN** |
| 220 | NKE | 05-20 13:30 | 05-20 15:15 | 62.42 | 62.85 | 39 | 4868.76 | +16.77 | +0.69% | 0.99R | 105m | market | timeout | trend | momentum-pilot | neutral | 69.23 | ↑62.44 | -0.0014 | 2.29 | **WIN** |
| 221 | DELL | 05-20 14:05 | 05-20 14:25 | 115.4 | 114.89 | 42 | 4846.8 | -21.42 | -0.44% | 0.6R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 66.29 | ↓114.84 | 0.0884 | 1.48 | **LOSS** |
| 222 | TGT | 05-20 14:45 | 05-20 15:35 | 99.1 | 98.9 | 141 | 13973.1 | -28.2 | -0.2% | 0.29R | 50m | market | stagnation | trend | trend | neutral | 74.17 | ↑98.54 | 0.3865 | 1.41 | **LOSS** |
| 223 | TMO | 05-20 15:20 | 05-20 15:45 | 415.3 | 413.24 | 11 | 4568.3 | -22.66 | -0.5% | 0.71R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 58.48 | ↑412.64 | 0.2005 | 1.58 | **LOSS** |
| 224 | PFE | 05-20 15:20 | 05-20 15:40 | 23.48 | 23.4 | 208 | 4883.84 | -16.64 | -0.34% | 0.42R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 35.04 | ↓23.43 | 0.0669 | 2.58 | **LOSS** |
| 225 | PLTR | 05-21 13:30 | 05-21 13:50 | 126.75 | 125.59 | 35 | 4436.25 | -40.6 | -0.92% | 1.14R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 53.52 | ↓126.23 | -0.1387 | 4.35 | **LOSS** |
| 226 | DELL | 05-21 13:35 | 05-21 13:55 | 114.97 | 114.88 | 42 | 4828.74 | -3.78 | -0.08% | 0.11R | 20m | market | breakeven-stop | trend | momentum-pilot | neutral | 70.09 | ↓114.24 | -0.0235 | 2.24 | **LOSS** |
| 227 | NVDA | 05-21 13:40 | 05-21 14:30 | 134.23 | 133.75 | 31 | 4161.13 | -14.88 | -0.36% | 0.46R | 50m | market | stagnation | trend | momentum-pilot | neutral | 55.99 | ↓133.73 | -0.0357 | 2.34 | **LOSS** |
| 228 | META | 05-21 13:40 | 05-21 14:30 | 640.68 | 640.11 | 7 | 4484.76 | -3.99 | -0.09% | 0.13R | 50m | market | stagnation | trend | momentum-pilot | neutral | 78.5 | ↑637.18 | 0.438 | 2.59 | **LOSS** |
| 229 | INTC | 05-21 13:40 | 05-21 14:10 | 21.37 | 21.29 | 229 | 4893.73 | -18.32 | -0.37% | 0.53R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 75.76 | ↓21.31 | 0.0044 | 2.24 | **LOSS** |
| 230 | PYPL | 05-21 13:40 | 05-21 14:00 | 73.05 | 72.77 | 43 | 3141.15 | -12.04 | -0.38% | 0.54R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 85.94 | ↓72.7 | 0.0502 | 1.47 | **LOSS** |
| 231 | HPE | 05-21 14:00 | 05-21 14:35 | 17.97 | 17.9 | 778 | 13980.66 | -54.46 | -0.39% | 0.48R | 35m | market | early-reversal | trend | trend | neutral | 74.38 | ↓17.88 | 0.0552 | 2.42 | **LOSS** |
| 232 | NVO | 05-21 14:05 | 05-21 15:50 | 69.14 | 69.48 | 202 | 13966.28 | +68.68 | +0.49% | 0.54R | 105m | market | timeout | trend | trend | neutral | 71.49 | ↑68.69 | 0.1802 | 1.49 | **WIN** |
| 233 | U | 05-21 14:05 | 05-21 14:25 | 22.35 | 22.08 | 125 | 2793.75 | -33.75 | -1.21% | 1.02R | 20m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | 62.15 | ↓22.22 | -0.0188 | 2.15 | **LOSS** |
| 234 | COIN | 05-21 14:55 | 05-21 16:40 | 264.21 | 269.13 | 18 | 4755.78 | +88.56 | +1.86% | 1.58R | 105m | market | timeout | trend | momentum-pilot | neutral | 54.16 | ↑261.91 | 0.414 | 2.11 | **WIN** |
| 235 | INTC | 05-21 15:00 | 05-21 16:10 | 21.52 | 21.46 | 649 | 13966.48 | -38.94 | -0.28% | 0.4R | 70m | market | stagnation | trend | trend | neutral | 61.82 | ↑21.37 | 0.0628 | 1.16 | **LOSS** |
| 236 | AVGO | 05-21 15:05 | 05-21 15:55 | 234.69 | 234.55 | 59 | 13846.71 | -8.26 | -0.06% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 78 | ↑231.9 | 0.9065 | 1.44 | **LOSS** |
| 237 | SHOP | 05-21 15:05 | 05-21 15:25 | 105.27 | 104.79 | 46 | 4842.42 | -22.08 | -0.46% | 0.61R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 57.93 | ↓104.82 | -0.136 | 2.69 | **LOSS** |
| 238 | TXN | 05-21 15:05 | 05-21 15:30 | 189.34 | 188.75 | 25 | 4733.5 | -14.75 | -0.31% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 80.03 | ↑187.83 | 0.1472 | 1.6 | **LOSS** |
| 239 | MRVL | 05-21 15:05 | 05-21 16:50 | 62 | 62.29 | 225 | 13950 | +65.25 | +0.47% | 0.56R | 105m | market | timeout | trend | trend | neutral | 66.67 | ↑61.38 | 0.2472 | 1.8 | **WIN** |
| 240 | PATH | 05-21 15:05 | 05-21 15:35 | 12.44 | 12.4 | 394 | 4901.36 | -15.76 | -0.32% | 0.46R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 57.69 | ↓12.4 | 0.0008 | 1.95 | **LOSS** |
| 241 | NET | 05-21 15:10 | 05-21 16:55 | 158.32 | 159.41 | 88 | 13932.16 | +95.92 | +0.69% | 0.99R | 105m | market | timeout | trend | trend | neutral | 61.15 | ↑156.99 | 0.3396 | 1.94 | **WIN** |
| 242 | TJX | 05-21 15:10 | 05-21 15:35 | 132.41 | 131.72 | 35 | 4634.35 | -24.15 | -0.52% | 0.69R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 65.34 | ↓131.74 | -0.6331 | 1.59 | **LOSS** |
| 243 | QCOM | 05-21 15:20 | 05-21 17:05 | 155.11 | 154.9 | 90 | 13959.9 | -18.9 | -0.14% | 0.2R | 105m | market | stagnation | trend | trend | neutral | 77.16 | ↑153.6 | 0.4341 | 1.07 | **LOSS** |
| 244 | PANW | 05-22 13:30 | 05-22 14:30 | 183.42 | 184.31 | 21 | 3851.82 | +18.69 | +0.49% | 0.62R | 60m | market | trailing-stop | mixed | momentum-pilot | neutral | 64.37 | ↓183.51 | -0.2669 | 1.55 | **WIN** |
| 245 | MSFT | 05-22 13:35 | 05-22 14:50 | 456.97 | 456.58 | 6 | 2741.82 | -2.34 | -0.09% | 0.13R | 75m | market | breakeven-stop | trend | momentum-pilot | thinChop | 65.79 | ↓456.19 | 0.1982 | 2.57 | **LOSS** |
| 246 | PLTR | 05-22 13:35 | 05-22 15:20 | 122.37 | 126.11 | 40 | 4894.8 | +149.6 | +3.06% | 2.91R | 105m | market | timeout | mixed | momentum-pilot | neutral | 67.64 | ↑122.42 | -0.14 | 1.91 | **WIN** |
| 247 | MRVL | 05-22 13:40 | 05-22 15:25 | 60.7 | 61.51 | 80 | 4856 | +64.8 | +1.33% | 1.02R | 105m | market | timeout | mixed | momentum-pilot | neutral | 55.74 | ↑60.35 | -0.1614 | 4.3 | **WIN** |
| 248 | MU | 05-22 13:55 | 05-22 15:40 | 96.05 | 96.45 | 30 | 2881.5 | +12 | +0.42% | 0.35R | 105m | market | timeout | mixed | momentum-pilot | falseBreakoutProne | 54 | ↑95.07 | -0.3586 | 1.57 | **WIN** |
| 249 | TSM | 05-22 13:55 | 05-22 15:40 | 193.4 | 194.03 | 25 | 4835 | +15.75 | +0.33% | 0.42R | 105m | market | timeout | trend | momentum-pilot | neutral | 74.94 | ↑192.36 | 0.1339 | 1.71 | **WIN** |
| 250 | RBLX | 05-22 13:55 | 05-22 14:55 | 82.24 | 82.05 | 59 | 4852.16 | -11.21 | -0.23% | 0.24R | 60m | market | stagnation | trend | momentum-pilot | neutral | 77.56 | ↓81.67 | 0.0576 | 1.92 | **LOSS** |
| 251 | AMZN | 05-22 14:00 | 05-22 14:20 | 203.4 | 202.32 | 68 | 13831.2 | -73.44 | -0.53% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 68.18 | ↑201.57 | 0.2458 | 1.01 | **LOSS** |
| 252 | ORCL | 05-22 14:00 | 05-22 14:20 | 158.87 | 158.35 | 21 | 3336.27 | -10.92 | -0.33% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 86.71 | ↑157.85 | -0.0192 | 2.72 | **LOSS** |
| 253 | TGT | 05-22 14:00 | 05-22 15:10 | 94.97 | 94.83 | 147 | 13960.59 | -20.58 | -0.15% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 72.49 | ↓94.31 | 0.3681 | 1.3 | **LOSS** |
| 254 | AI | 05-22 14:00 | 05-22 15:45 | 22.31 | 22.58 | 405 | 9035.55 | +109.35 | +1.21% | 0.96R | 105m | market | timeout | breakout | breakout | neutral | 85.14 | ↑22.1 | -0.0595 | 1.67 | **WIN** |
| 255 | LRCX | 05-22 14:05 | 05-22 14:25 | 83.85 | 83.17 | 166 | 13919.1 | -112.88 | -0.81% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 70.68 | ↑82.89 | 0.0909 | 1.02 | **LOSS** |
| 256 | AVGO | 05-22 15:05 | 05-22 15:30 | 232.93 | 232.18 | 60 | 13975.8 | -45 | -0.32% | 0.45R | 25m | market | early-reversal | trend | trend | neutral | 65.02 | ↑229.61 | 0.7526 | 1.13 | **LOSS** |
| 257 | TSLA | 05-22 15:20 | 05-22 15:40 | 344.05 | 342.24 | 24 | 8257.2 | -43.44 | -0.53% | 0.45R | 20m | market | early-reversal | trend | trend | neutral | 72.98 | ↑338.09 | 2.2186 | 1.32 | **LOSS** |
| 258 | INTC | 05-23 14:00 | 05-23 14:25 | 20.18 | 20.03 | 211 | 4257.98 | -31.65 | -0.74% | 0.74R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 46.79 | ↓20.06 | -0.124 | 1.73 | **LOSS** |
| 259 | SBUX | 05-23 14:00 | 05-23 14:50 | 84.14 | 83.83 | 50 | 4207 | -15.5 | -0.37% | 0.46R | 50m | market | early-reversal | mixed | momentum-pilot | neutral | 45.79 | ↑83.41 | -0.1217 | 2.02 | **LOSS** |
| 260 | AMD | 05-23 14:05 | 05-23 14:55 | 109.16 | 109.1 | 44 | 4803.04 | -2.64 | -0.05% | 0.04R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 38.34 | ↑108.53 | -0.9197 | 1.56 | **LOSS** |
| 261 | PLTR | 05-23 14:05 | 05-23 14:55 | 123.07 | 122.44 | 112 | 13783.84 | -70.56 | -0.51% | 0.4R | 50m | market | early-reversal | breakout | breakout | neutral | 70.29 | ↑121.94 | -0.5842 | 1.11 | **LOSS** |
| 262 | CYBR | 05-23 14:15 | 05-23 15:05 | 378.84 | 377.58 | 36 | 13638.24 | -45.36 | -0.33% | 0.42R | 50m | market | breakeven-stop | trend | trend | neutral | 68.25 | ↓376.27 | 1.4926 | 2.14 | **LOSS** |
| 263 | DELL | 05-23 14:20 | 05-23 14:55 | 111.31 | 110.94 | 41 | 4563.71 | -15.17 | -0.33% | 0.28R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 36.49 | ↑110.59 | -0.5114 | 1.53 | **LOSS** |
| 264 | CRWD | 05-23 14:35 | 05-23 15:05 | 452.96 | 450.05 | 30 | 13588.8 | -87.3 | -0.64% | 0.6R | 30m | market | early-reversal | trend | trend | neutral | 74.01 | ↑446.5 | 0.9714 | 1.22 | **LOSS** |
| 265 | CELH | 05-23 14:45 | 05-23 15:05 | 35.91 | 35.72 | 388 | 13933.08 | -73.72 | -0.53% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 69.81 | ↑35.52 | 0.0118 | 1.57 | **LOSS** |
| 266 | AI | 05-23 15:15 | 05-23 15:55 | 22.67 | 22.56 | 216 | 4896.72 | -23.76 | -0.49% | 0.57R | 40m | market | early-reversal | mixed | momentum-pilot | neutral | 51.8 | ↓22.54 | -0.0817 | 1.58 | **LOSS** |
| 267 | AMZN | 05-27 13:30 | 05-27 15:15 | 203.38 | 205.05 | 24 | 4881.12 | +40.08 | +0.82% | 1.12R | 105m | market | timeout | trend | momentum-pilot | neutral | 63.65 | ↑203.6 | -0.027 | 2.79 | **WIN** |
| 268 | V | 05-27 13:30 | 05-27 14:35 | 357.08 | 356.81 | 7 | 2499.56 | -1.89 | -0.08% | 0.11R | 65m | market | stagnation | trend | momentum-pilot | thinChop | 57.56 | ↓356.38 | -0.0233 | 2.07 | **LOSS** |
| 269 | GE | 05-27 13:35 | 05-27 15:20 | 236.46 | 239.99 | 58 | 13714.68 | +204.74 | +1.49% | 2.13R | 105m | market | timeout | trend | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 270 | IBM | 05-27 13:35 | 05-27 13:55 | 261.44 | 260.49 | 10 | 2614.4 | -9.5 | -0.36% | 0.51R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 70.71 | ↓260.62 | 0.179 | 1.56 | **LOSS** |
| 271 | XOM | 05-27 13:40 | 05-27 14:00 | 103.84 | 103.22 | 47 | 4880.48 | -29.14 | -0.6% | 0.86R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 65.1 | ↓103.51 | 0.0762 | 1.87 | **LOSS** |
| 272 | LLY | 05-27 14:00 | 05-27 14:20 | 723.23 | 718.48 | 19 | 13741.37 | -90.25 | -0.66% | 0.94R | 20m | market | early-reversal | trend | trend | neutral | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 273 | GOOG | 05-27 14:00 | 05-27 14:55 | 173.36 | 172.99 | 80 | 13868.8 | -29.6 | -0.21% | 0.23R | 55m | market | stagnation | trend | trend | neutral | 77.4 | ↑172.29 | 0.5019 | 1.61 | **LOSS** |
| 274 | REGN | 05-27 14:05 | 05-27 14:55 | 600.4 | 599.91 | 23 | 13809.2 | -11.27 | -0.08% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 69.16 | ↑596.26 | 2.1849 | 2.34 | **LOSS** |
| 275 | AVGO | 05-27 14:10 | 05-27 14:35 | 234.48 | 232.89 | 59 | 13834.32 | -93.81 | -0.68% | 0.66R | 25m | market | early-reversal | trend | trend | neutral | 74.45 | ↓233.68 | 1.1642 | 1.1 | **LOSS** |
| 276 | UBER | 05-27 14:10 | 05-27 15:35 | 88.78 | 88.62 | 55 | 4882.9 | -8.8 | -0.18% | 0.15R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | 62.29 | ↓88.3 | 0.1064 | 1.49 | **LOSS** |
| 277 | AXP | 05-27 14:20 | 05-27 16:05 | 290.91 | 292.18 | 48 | 13963.68 | +60.96 | +0.44% | 0.62R | 105m | market | timeout | trend | trend | neutral | 76.47 | ↑289.33 | 0.9895 | 1.16 | **WIN** |
| 278 | UPS | 05-27 14:20 | 05-27 15:05 | 97.12 | 96.77 | 144 | 13985.28 | -50.4 | -0.36% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 74.72 | ↓96.56 | 0.2509 | 2.66 | **LOSS** |
| 279 | CRWD | 05-27 14:25 | 05-27 15:15 | 473.09 | 472.06 | 29 | 13719.61 | -29.87 | -0.22% | 0.18R | 50m | market | stagnation | trend | trend | neutral | 77.19 | ↑469.22 | 3.9153 | 2.03 | **LOSS** |
| 280 | URI | 05-27 14:30 | 05-27 15:20 | 716.46 | 715.28 | 12 | 8597.52 | -14.16 | -0.16% | 0.23R | 50m | market | stagnation | trend | breakout | neutral | 83.87 | ↑712.28 | 1.7582 | 1.18 | **LOSS** |
| 281 | SLB | 05-27 14:30 | 05-27 15:05 | 33.76 | 33.64 | 145 | 4895.2 | -17.4 | -0.36% | 0.41R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 59.31 | ↓33.67 | 0.0057 | 1.56 | **LOSS** |
| 282 | PFE | 05-27 14:45 | 05-27 15:10 | 23.56 | 23.48 | 207 | 4876.92 | -16.56 | -0.34% | 0.49R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 50.98 | ↑23.47 | 0.0182 | 1.55 | **LOSS** |
| 283 | CELH | 05-27 15:00 | 05-27 15:20 | 37.43 | 37.09 | 372 | 13923.96 | -126.48 | -0.91% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 63.18 | ↑36.88 | 0.3071 | 1.08 | **LOSS** |
| 284 | ARM | 05-27 15:05 | 05-27 16:50 | 134.89 | 135.46 | 67 | 9037.63 | +38.19 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 76.34 | ↑132.99 | 1.8425 | 2.19 | **WIN** |
| 285 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 779 | 13975.26 | -46.74 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | neutral | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 286 | U | 05-27 15:10 | 05-27 16:15 | 21.22 | 21.2 | 362 | 7681.64 | -7.24 | -0.09% | 0.1R | 65m | market | breakeven-stop | trend | trend | noisyHighBeta | 58.54 | ↑21.02 | 0.0799 | 1.34 | **LOSS** |
| 287 | AMZN | 05-28 13:30 | 05-28 13:50 | 207.06 | 206.21 | 23 | 4762.38 | -19.55 | -0.41% | 0.59R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 77.44 | ↓206.69 | -0.0125 | 2.76 | **LOSS** |
| 288 | CRM | 05-28 13:30 | 05-28 13:50 | 278.08 | 276.95 | 14 | 3893.12 | -15.82 | -0.41% | 0.59R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 49.23 | ↓277.25 | -0.2189 | 1.76 | **LOSS** |
| 289 | ARM | 05-28 13:30 | 05-28 13:50 | 135.14 | 134.49 | 22 | 2973.08 | -14.3 | -0.48% | 0.67R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 55.05 | ↓135.13 | -0.3759 | 2.31 | **LOSS** |
| 290 | SNOW | 05-28 13:30 | 05-28 13:45 | 208.25 | 206.45 | 16 | 3332 | -28.8 | -0.86% | 1.23R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 88.62 | ↓208.43 | 0.0642 | 3.15 | **LOSS** |
| 291 | MSFT | 05-28 13:35 | 05-28 13:55 | 462.33 | 460.36 | 5 | 2311.65 | -9.85 | -0.43% | 0.61R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 80.58 | ↓461.49 | 0.4603 | 1.48 | **LOSS** |
| 292 | UNH | 05-29 13:30 | 05-29 14:20 | 300.67 | 299.03 | 16 | 4810.72 | -26.24 | -0.55% | 0.7R | 50m | market | early-reversal | trend | momentum-pilot | neutral | 59.22 | ↓299.33 | -0.4474 | 4.87 | **LOSS** |
| 293 | ABBV | 05-29 13:40 | 05-29 15:25 | 184.67 | 185.48 | 24 | 4432.08 | +19.44 | +0.44% | 0.63R | 105m | market | timeout | trend | momentum-pilot | neutral | 72.89 | ↑184.07 | -0.0166 | 1.56 | **WIN** |
| 294 | TMO | 05-29 13:40 | 05-29 14:05 | 406.45 | 404.43 | 8 | 3251.6 | -16.16 | -0.5% | 0.71R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 84.16 | ↓404.35 | 0.1328 | 2.88 | **LOSS** |
| 295 | ABT | 05-29 13:50 | 05-29 14:40 | 132.89 | 132.71 | 36 | 4784.04 | -6.48 | -0.14% | 0.2R | 50m | market | stagnation | trend | momentum-pilot | neutral | 57.77 | ↓132.44 | -0.0085 | 1.64 | **LOSS** |
| 296 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 51 | 10394.31 | +260.1 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 297 | F | 05-29 14:00 | 05-29 14:20 | 10.28 | 10.21 | 475 | 4883 | -33.25 | -0.68% | 0.97R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 57.45 | ↓10.23 | 0.0093 | 1.99 | **LOSS** |
| 298 | RTX | 05-29 14:10 | 05-29 15:55 | 134.08 | 133.94 | 104 | 13944.32 | -14.56 | -0.1% | 0.14R | 105m | market | stagnation | trend | trend | neutral | 66.9 | ↑133.3 | 0.1926 | 1.23 | **LOSS** |
| 299 | LULU | 05-29 14:55 | 05-29 15:20 | 322.43 | 320.9 | 43 | 13864.49 | -65.79 | -0.47% | 0.6R | 25m | market | early-reversal | trend | trend | neutral | 70.13 | ↑319.35 | 0.8475 | 2.93 | **LOSS** |
| 300 | OKTA | 05-29 15:25 | 05-29 15:45 | 107.1 | 106.5 | 24 | 2570.4 | -14.4 | -0.56% | 0.65R | 20m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | 90.2 | ↑105.41 | 0.1135 | 2.19 | **LOSS** |
| 301 | DE | 05-30 13:30 | 05-30 13:45 | 506.09 | 505.56 | 4 | 2024.36 | -2.12 | -0.1% | 0.14R | 15m | market | breakeven-stop | trend | momentum-pilot | thinChop | 52.53 | ↓505.03 | -0.2839 | 2.4 | **LOSS** |
| 302 | PEP | 05-30 13:40 | 05-30 14:10 | 132.59 | 132.03 | 21 | 2784.39 | -11.76 | -0.42% | 0.6R | 30m | market | early-reversal | trend | momentum-pilot | thinChop | 77.16 | ↓132.11 | 0.2006 | 1.47 | **LOSS** |
| 303 | LLY | 05-30 13:55 | 05-30 15:40 | 727.18 | 735.32 | 6 | 4363.08 | +48.84 | +1.12% | 1.6R | 105m | market | timeout | trend | momentum-pilot | neutral | 66.93 | ↑721.55 | 0.7003 | 1.57 | **WIN** |
| 304 | RTX | 05-30 14:00 | 05-30 14:55 | 135.75 | 135.67 | 103 | 13982.25 | -8.24 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 75 | ↓135.32 | 0.2199 | 1.93 | **LOSS** |
| 305 | TSLA | 05-30 14:15 | 05-30 15:15 | 360.46 | 359.83 | 11 | 3965.06 | -6.93 | -0.17% | 0.14R | 60m | market | stagnation | trend | momentum-pilot | neutral | 55.74 | ↑356.97 | -0.0185 | 1.53 | **LOSS** |
| 306 | WDAY | 05-30 14:40 | 05-30 15:00 | 244.68 | 243.54 | 57 | 13946.76 | -64.98 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 63.42 | ↓243.17 | 0.8478 | 1.33 | **LOSS** |
| 307 | SNOW | 05-30 15:00 | 05-30 16:05 | 204.16 | 203.93 | 68 | 13882.88 | -15.64 | -0.11% | 0.16R | 65m | market | stagnation | trend | trend | neutral | 80 | ↑202.22 | 0.2666 | 1.03 | **LOSS** |
| 308 | ZS | 05-30 15:25 | 05-30 15:45 | 273.69 | 271.73 | 51 | 13958.19 | -99.96 | -0.72% | 0.8R | 20m | market | early-reversal | trend | trend | neutral | 53.07 | ↑270.84 | 4.3262 | 1.21 | **LOSS** |
| 309 | NVDA | 06-02 13:35 | 06-02 13:55 | 137.73 | 136.31 | 101 | 13910.73 | -143.42 | -1.03% | 0.92R | 20m | market | early-reversal | trend | breakout | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 310 | AMZN | 06-02 13:35 | 06-02 13:45 | 206.28 | 204.43 | 23 | 4744.44 | -42.55 | -0.9% | 1.29R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 75.64 | ↓205.68 | 0.6536 | 2.35 | **LOSS** |
| 311 | SMCI | 06-02 13:35 | 06-02 13:55 | 40.46 | 39.82 | 121 | 4895.66 | -77.44 | -1.58% | 1.19R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 56.07 | ↓40.08 | 0.1115 | 2.04 | **LOSS** |
| 312 | ADP | 06-02 14:30 | 06-02 15:20 | 324.85 | 323.94 | 14 | 4547.9 | -12.74 | -0.28% | 0.39R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 44.04 | ↑323.14 | -0.5797 | 2.53 | **LOSS** |
| 313 | CVX | 06-02 14:35 | 06-02 15:00 | 138.32 | 137.83 | 35 | 4841.2 | -17.15 | -0.35% | 0.37R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 68.4 | ↑137.61 | 0.3134 | 2.22 | **LOSS** |
| 314 | NVO | 06-02 14:55 | 06-02 15:25 | 72.73 | 72.39 | 192 | 13964.16 | -65.28 | -0.47% | 0.59R | 30m | market | early-reversal | trend | trend | neutral | 71.35 | ↑71.96 | 0.2501 | 1.49 | **LOSS** |
| 315 | RBLX | 06-02 15:10 | 06-02 15:30 | 89.2 | 88.77 | 156 | 13915.2 | -67.08 | -0.48% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.69 | ↑88.03 | 0.6221 | 1.11 | **LOSS** |
| 316 | COIN | 06-02 15:20 | 06-02 17:05 | 245.82 | 246.07 | 17 | 4178.94 | +4.25 | +0.1% | 0.13R | 105m | market | timeout | mixed | momentum-pilot | neutral | 53.43 | ↑245.59 | -0.4499 | 2.08 | **WIN** |
| 317 | MDT | 06-03 13:35 | 06-03 15:20 | 84.17 | 84.82 | 58 | 4881.86 | +37.7 | +0.77% | 1.1R | 105m | market | timeout | trend | momentum-pilot | neutral | 75.49 | ↑83.84 | 0.1908 | 1.72 | **WIN** |
| 318 | SHOP | 06-03 13:50 | 06-03 14:10 | 105.76 | 104.95 | 39 | 4124.64 | -31.59 | -0.77% | 0.82R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 39.45 | ↓105.05 | -0.1966 | 2.53 | **LOSS** |
| 319 | MU | 06-03 13:55 | 06-03 15:40 | 99.05 | 101.11 | 39 | 3862.95 | +80.34 | +2.08% | 1.93R | 105m | market | timeout | trend | momentum-pilot | neutral | 54.17 | ↑98.23 | 0.0567 | 2.35 | **WIN** |
| 320 | INTC | 06-03 14:00 | 06-03 15:45 | 19.81 | 20.19 | 239 | 4734.59 | +90.82 | +1.92% | 2.09R | 105m | market | timeout | trend | momentum-pilot | neutral | 52.1 | ↑19.62 | -0.0206 | 3.48 | **WIN** |
| 321 | MDB | 06-03 14:00 | 06-03 15:10 | 193.53 | 193.57 | 25 | 4838.25 | +1 | +0.02% | 0.02R | 70m | market | breakeven-stop | trend | momentum-pilot | neutral | 57.6 | ↑192.3 | 0.2998 | 2.03 | **WIN** |
| 322 | CVX | 06-03 14:05 | 06-03 15:50 | 138.97 | 140.33 | 100 | 13897 | +136 | +0.98% | 1.4R | 105m | market | timeout | trend | trend | neutral | 64.13 | ↑138.16 | 0.3444 | 1.99 | **WIN** |
| 323 | UBER | 06-03 14:10 | 06-03 14:30 | 82.96 | 82.5 | 49 | 4065.04 | -22.54 | -0.55% | 0.46R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 38.75 | ↓82.53 | -0.4231 | 1.63 | **LOSS** |
| 324 | CYBR | 06-03 14:15 | 06-03 14:50 | 398.4 | 395.77 | 35 | 13944 | -92.05 | -0.66% | 0.94R | 35m | market | early-reversal | trend | trend | neutral | 74.84 | ↓396.99 | 1.5683 | 1.48 | **LOSS** |
| 325 | CAT | 06-03 14:20 | 06-03 16:05 | 348.69 | 349.85 | 40 | 13947.6 | +46.4 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 326 | DIS | 06-03 14:20 | 06-03 16:05 | 114.15 | 114.48 | 122 | 13926.3 | +40.26 | +0.29% | 0.41R | 105m | market | timeout | trend | trend | neutral | 77.93 | ↑113.51 | 0.3433 | 1.91 | **WIN** |
| 327 | TGT | 06-03 14:20 | 06-03 16:05 | 94.75 | 96.02 | 147 | 13928.25 | +186.69 | +1.34% | 1.65R | 105m | market | timeout | trend | trend | neutral | 78.02 | ↑94 | 0.3318 | 1.03 | **WIN** |
| 328 | SLB | 06-03 14:20 | 06-03 16:05 | 33.6 | 34.19 | 416 | 13977.6 | +245.44 | +1.76% | 1.63R | 105m | market | timeout | trend | trend | neutral | 59.72 | ↑33.34 | 0.055 | 2.35 | **WIN** |
| 329 | TMO | 06-03 14:35 | 06-03 16:20 | 398.11 | 399.7 | 12 | 4777.32 | +19.08 | +0.4% | 0.45R | 105m | market | timeout | trend | momentum-pilot | neutral | 54.36 | ↑395.27 | 0.0497 | 1.91 | **WIN** |
| 330 | EOG | 06-03 14:35 | 06-03 16:20 | 112.52 | 113.41 | 124 | 13952.48 | +110.36 | +0.79% | 0.9R | 105m | market | timeout | trend | trend | neutral | 62.25 | ↑111.65 | 0.3262 | 1.33 | **WIN** |
| 331 | REGN | 06-03 14:40 | 06-03 15:30 | 494.35 | 494.34 | 9 | 4449.15 | -0.09 | 0% | 0R | 50m | market | breakeven-stop | mixed | momentum-pilot | neutral | 62.68 | ↑491.54 | -0.5809 | 1.58 | **LOSS** |
| 332 | VRTX | 06-03 14:45 | 06-03 15:55 | 445.81 | 445.48 | 10 | 4458.1 | -3.3 | -0.07% | 0.08R | 70m | market | stagnation | trend | momentum-pilot | neutral | 52.16 | ↑443.48 | -0.0478 | 1.77 | **LOSS** |
| 333 | TSLA | 06-03 14:50 | 06-03 16:35 | 349.3 | 353.52 | 34 | 11876.2 | +143.48 | +1.21% | 0.92R | 105m | market | timeout | trend | trend | neutral | 61.9 | ↑346.69 | 1.2791 | 1.12 | **WIN** |
| 334 | MRVL | 06-03 14:50 | 06-03 15:25 | 63.12 | 62.84 | 221 | 13949.52 | -61.88 | -0.44% | 0.42R | 35m | market | early-reversal | trend | trend | neutral | 79.67 | ↑62.16 | 0.2374 | 1.23 | **LOSS** |
| 335 | ANET | 06-03 14:50 | 06-03 16:35 | 93.09 | 93.86 | 150 | 13963.5 | +115.5 | +0.83% | 0.9R | 105m | market | timeout | trend | trend | neutral | 79.19 | ↑91.99 | 0.9089 | 1.39 | **WIN** |
| 336 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 105 | 13875.75 | +121.8 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | neutral | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 337 | TEAM | 06-03 14:55 | 06-03 15:15 | 208.58 | 207.47 | 67 | 13974.86 | -74.37 | -0.53% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 71.23 | ↑206.36 | 0.4342 | 3.63 | **LOSS** |
| 338 | URI | 06-03 15:00 | 06-03 17:05 | 702.19 | 703.19 | 19 | 13341.61 | +19 | +0.14% | 0.2R | 125m | market | stagnation | trend | trend | neutral | 72.52 | ↑699.89 | 4.1364 | 1 | **WIN** |
| 339 | AI | 06-03 15:05 | 06-03 16:10 | 25.79 | 25.67 | 299 | 7711.21 | -35.88 | -0.47% | 0.33R | 65m | market | early-reversal | trend | trend | noisyHighBeta | 76.86 | ↑25.39 | 0.1471 | 1.46 | **LOSS** |
| 340 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 19 | 12840.77 | +123.31 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 341 | CYBR | 06-04 13:30 | 06-04 15:15 | 396.39 | 399.61 | 11 | 4360.29 | +35.42 | +0.81% | 1.16R | 105m | market | timeout | mixed | momentum-pilot | neutral | 56.22 | ↓396.15 | -0.5054 | 2.8 | **WIN** |
| 342 | AAPL | 06-04 13:35 | 06-04 14:30 | 204.8 | 204.67 | 23 | 4710.4 | -2.99 | -0.06% | 0.09R | 55m | market | stagnation | trend | momentum-pilot | neutral | 70.6 | ↓203.7 | 0.0508 | 3.33 | **LOSS** |
| 343 | SHOP | 06-04 13:35 | 06-04 13:55 | 105.73 | 104.84 | 42 | 4440.66 | -37.38 | -0.84% | 1.18R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 44.36 | ↓105.23 | -0.2966 | 1.47 | **LOSS** |
| 344 | AMGN | 06-04 13:35 | 06-04 13:55 | 292.95 | 290.19 | 16 | 4687.2 | -44.16 | -0.94% | 1.34R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 59.43 | ↓292.21 | 0.2129 | 2.44 | **LOSS** |
| 345 | ETN | 06-04 13:40 | 06-04 14:00 | 328.73 | 327.61 | 10 | 3287.3 | -11.2 | -0.34% | 0.49R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 89.53 | ↓327.99 | 0.2639 | 1.65 | **LOSS** |
| 346 | NKE | 06-04 14:00 | 06-04 14:45 | 62.91 | 62.7 | 222 | 13966.02 | -46.62 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 77.24 | ↓62.69 | 0.2102 | 1.41 | **LOSS** |
| 347 | EOG | 06-04 14:00 | 06-04 14:25 | 114.41 | 114 | 122 | 13958.02 | -50.02 | -0.36% | 0.51R | 25m | market | early-reversal | trend | trend | neutral | 76.61 | ↓113.85 | 0.1795 | 1.43 | **LOSS** |
| 348 | MRK | 06-04 14:20 | 06-04 15:10 | 78.94 | 78.75 | 177 | 13972.38 | -33.63 | -0.24% | 0.2R | 50m | market | stagnation | trend | trend | neutral | 72.99 | ↑78.5 | 0.5109 | 1.2 | **LOSS** |
| 349 | MRVL | 06-04 14:30 | 06-04 15:30 | 63.4 | 64.38 | 38 | 4881.8 | +37.24 | +1.55% | 1.05R | 60m | market | trim-profit-target | trend | momentum-pilot | neutral | 49.93 | ↑62.89 | 0.0912 | 1.68 | **WIN** |
| 350 | MRVL | 06-04 14:30 | 06-04 16:15 | 63.4 | 65.27 | 39 | 4881.8 | +72.93 | +2.95% | 1.99R | 105m | market | timeout | trend | momentum-pilot | neutral | 49.93 | ↑62.89 | 0.0912 | 1.68 | **WIN** |
| 351 | REGN | 06-04 15:10 | 06-04 15:30 | 498.25 | 495.75 | 28 | 13951 | -70 | -0.5% | 0.63R | 20m | market | early-reversal | trend | trend | neutral | 59.18 | ↓495.77 | 1.3061 | 2.45 | **LOSS** |
| 352 | INTC | 06-04 15:15 | 06-04 15:35 | 20.37 | 20.25 | 240 | 4888.8 | -28.8 | -0.59% | 0.81R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 75.58 | ↑20.22 | -0.0138 | 2.29 | **LOSS** |
| 353 | ARM | 06-04 15:15 | 06-04 16:15 | 130.06 | 129.6 | 24 | 3121.44 | -11.04 | -0.35% | 0.5R | 60m | market | early-reversal | trend | momentum-pilot | neutral | 73.78 | ↑129.34 | 0.1153 | 4.54 | **LOSS** |
| 354 | U | 06-04 15:20 | 06-04 17:05 | 27.47 | 27.84 | 101 | 2774.47 | +37.37 | +1.35% | 1.02R | 105m | market | timeout | trend | momentum-pilot | noisyHighBeta | 66.08 | ↑27.09 | 0.3223 | 2.14 | **WIN** |
| 355 | ADBE | 06-05 13:30 | 06-05 15:15 | 417.03 | 419.79 | 11 | 4587.33 | +30.36 | +0.66% | 0.94R | 105m | market | timeout | trend | momentum-pilot | neutral | 74.75 | ↑416.29 | 0.2078 | 1.62 | **WIN** |
| 356 | PLTR | 06-05 13:30 | 06-05 15:15 | 130.99 | 131.88 | 19 | 2488.81 | +16.91 | +0.68% | 0.77R | 105m | market | timeout | trend | momentum-pilot | noisyHighBeta | 51.27 | ↑130.45 | -0.2136 | 5.23 | **WIN** |
| 357 | SNOW | 06-05 13:30 | 06-05 15:15 | 211.5 | 213.49 | 19 | 4018.5 | +37.81 | +0.94% | 0.73R | 105m | market | timeout | mixed | momentum-pilot | neutral | 51.09 | ↑211.46 | -0.552 | 2.07 | **WIN** |
| 358 | MRVL | 06-05 13:30 | 06-05 13:35 | 67.37 | 66.16 | 41 | 2762.17 | -49.61 | -1.8% | 1.57R | 5m | market | stop-loss | trend | momentum-pilot | noisyHighBeta | 61.15 | ↓67.26 | 0.1129 | 1.72 | **LOSS** |
| 359 | ISRG | 06-05 13:30 | 06-05 13:45 | 562.32 | 557.33 | 4 | 2249.28 | -19.96 | -0.89% | 1.27R | 15m | market | stop-loss | trend | momentum-pilot | thinChop | 71.38 | ↓561.59 | 0.3197 | 2.45 | **LOSS** |
| 360 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 80 | 13986.4 | +356.8 | +2.55% | 2.63R | 60m | market | profit-target | trend | breakout | neutral | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 361 | CMG | 06-05 14:10 | 06-05 15:30 | 53.2 | 53.2 | 263 | 13991.6 | +0 | +0% | 0R | 80m | market | breakeven-stop | trend | trend | neutral | 77.63 | ↓52.71 | 0.1968 | 1.02 | **WIN** |
| 362 | QCOM | 06-05 14:35 | 06-05 16:20 | 148.64 | 149.46 | 27 | 4013.28 | +22.14 | +0.55% | 0.77R | 105m | market | timeout | mixed | momentum-pilot | neutral | 44.65 | ↑148.22 | -0.3335 | 1.59 | **WIN** |
| 363 | LRCX | 06-05 14:35 | 06-05 16:05 | 85.03 | 85.97 | 28 | 4846.71 | +26.32 | +1.11% | 0.95R | 90m | market | trim-profit-target | mixed | momentum-pilot | neutral | 53.39 | ↑84.97 | 0.0696 | 2.07 | **WIN** |
| 364 | LRCX | 06-05 14:35 | 06-05 16:20 | 85.03 | 85.85 | 29 | 4846.71 | +23.78 | +0.96% | 0.82R | 105m | market | timeout | mixed | momentum-pilot | neutral | 53.39 | ↑84.97 | 0.0696 | 2.07 | **WIN** |
| 365 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 92 | 9729 | -42.32 | -0.43% | 0.36R | 20m | market | early-reversal | trend | breakout | neutral | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 366 | GS | 06-05 14:40 | 06-05 16:25 | 601.05 | 607.01 | 4 | 2404.2 | +23.84 | +0.99% | 1.41R | 105m | market | timeout | mixed | momentum-pilot | thinChop | 51.27 | ↑598.14 | -0.7363 | 3.73 | **WIN** |
| 367 | TEAM | 06-05 15:15 | 06-05 16:40 | 219.47 | 219.25 | 44 | 9656.68 | -9.68 | -0.1% | 0.11R | 85m | market | stagnation | trend | trend | neutral | 76.12 | ↑215.72 | 2.1009 | 1.42 | **LOSS** |
| 368 | ANET | 06-05 15:15 | 06-05 16:30 | 95.95 | 95.72 | 146 | 14008.7 | -33.58 | -0.24% | 0.34R | 75m | market | stagnation | trend | trend | neutral | 76.88 | ↑95.03 | 0.1623 | 1.59 | **LOSS** |
| 369 | TSM | 06-05 15:20 | 06-05 16:05 | 205.75 | 204.75 | 68 | 13991 | -68 | -0.49% | 0.7R | 45m | market | early-reversal | trend | trend | neutral | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 370 | MA | 06-06 13:30 | 06-06 14:35 | 589.32 | 588.84 | 4 | 2357.28 | -1.92 | -0.08% | 0.11R | 65m | market | stagnation | trend | momentum-pilot | thinChop | 75.67 | ↑588.23 | 0.2002 | 4.46 | **LOSS** |
| 371 | CSCO | 06-06 13:30 | 06-06 13:50 | 65.63 | 65.42 | 196 | 12863.48 | -41.16 | -0.32% | 0.46R | 20m | market | early-reversal | trend | breakout | neutral | 71.54 | ↓65.51 | 0.0576 | 1.61 | **LOSS** |
| 372 | RTX | 06-06 13:30 | 06-06 14:15 | 140.05 | 139.6 | 19 | 2660.95 | -8.55 | -0.32% | 0.46R | 45m | market | early-reversal | trend | momentum-pilot | thinChop | 65.54 | ↓139.88 | 0.088 | 2.09 | **LOSS** |
| 373 | CL | 06-06 13:30 | 06-06 14:15 | 90.65 | 90.33 | 30 | 2719.5 | -9.6 | -0.35% | 0.5R | 45m | market | early-reversal | trend | momentum-pilot | thinChop | 63.19 | ↓90.48 | 0.0632 | 2.94 | **LOSS** |
| 374 | XOM | 06-06 13:35 | 06-06 15:20 | 103.77 | 104.11 | 134 | 13905.18 | +45.56 | +0.33% | 0.47R | 105m | market | timeout | trend | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 375 | BA | 06-06 13:40 | 06-06 14:00 | 210.98 | 209.25 | 17 | 3586.66 | -29.41 | -0.82% | 1.17R | 20m | market | stop-loss | mixed | momentum-pilot | neutral | 55.39 | ↓210.38 | -0.2657 | 1.88 | **LOSS** |
| 376 | DELL | 06-06 14:25 | 06-06 16:10 | 114.27 | 114.77 | 122 | 13940.94 | +61 | +0.44% | 0.48R | 105m | market | timeout | trend | trend | neutral | 72.16 | ↑113.92 | 0.3493 | 2.63 | **WIN** |
| 377 | AI | 06-06 14:40 | 06-06 15:30 | 26.51 | 26.31 | 291 | 7714.41 | -58.2 | -0.75% | 0.51R | 50m | market | early-reversal | trend | trend | noisyHighBeta | 75.32 | ↑26.11 | 0.2437 | 1.65 | **LOSS** |
| 378 | ANET | 06-06 14:50 | 06-06 16:35 | 96.99 | 97.17 | 144 | 13966.56 | +25.92 | +0.19% | 0.27R | 105m | market | timeout | trend | trend | neutral | 71.59 | ↑96.3 | 0.3723 | 1.21 | **WIN** |
| 379 | QCOM | 06-06 15:05 | 06-06 15:25 | 150.67 | 149.89 | 93 | 14012.31 | -72.54 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 67.5 | ↑149.8 | 0.5055 | 1.61 | **LOSS** |
| 380 | ARM | 06-06 15:05 | 06-06 15:25 | 134.99 | 134.25 | 67 | 9044.33 | -49.58 | -0.55% | 0.73R | 20m | market | early-reversal | trend | breakout | neutral | 75.32 | ↑133.28 | 1.0957 | 2.28 | **LOSS** |
| 381 | SHOP | 06-06 15:05 | 06-06 16:50 | 110.73 | 110.91 | 126 | 13951.98 | +22.68 | +0.16% | 0.2R | 105m | market | timeout | trend | trend | neutral | 71.06 | ↑109.16 | 1.4711 | 1.25 | **WIN** |
| 382 | PATH | 06-06 15:20 | 06-06 16:15 | 13.31 | 13.29 | 210 | 2795.1 | -4.2 | -0.15% | 0.17R | 55m | market | stagnation | trend | momentum-pilot | noisyHighBeta | 64.08 | ↑13.19 | 0.0228 | 1.84 | **LOSS** |
| 383 | ASML | 06-09 13:30 | 06-09 15:15 | 762.93 | 780.35 | 6 | 4577.58 | +104.52 | +2.28% | 3.26R | 105m | market | timeout | trend | momentum-pilot | neutral | 61.68 | ↑760.82 | -0.6796 | 4.95 | **WIN** |
| 384 | META | 06-09 13:35 | 06-09 13:55 | 703.23 | 700.37 | 6 | 4219.38 | -17.16 | -0.41% | 0.59R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 68.93 | ↓699.42 | 0.708 | 1.82 | **LOSS** |
| 385 | COP | 06-09 13:40 | 06-09 14:20 | 87.89 | 87.52 | 55 | 4833.95 | -20.35 | -0.42% | 0.6R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 75.88 | ↓87.75 | 0.112 | 3.62 | **LOSS** |
| 386 | GS | 06-09 13:45 | 06-09 14:05 | 618.44 | 613.37 | 7 | 4329.08 | -35.49 | -0.82% | 1.17R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 66.35 | ↓616 | 0.8609 | 1.62 | **LOSS** |
| 387 | T | 06-09 13:45 | 06-09 14:35 | 28.05 | 28.01 | 174 | 4880.7 | -6.96 | -0.14% | 0.2R | 50m | market | stagnation | trend | momentum-pilot | neutral | 51.85 | ↑27.96 | -0.0059 | 2.1 | **LOSS** |
| 388 | MU | 06-09 14:00 | 06-09 15:25 | 110.89 | 110.78 | 101 | 11199.89 | -11.11 | -0.1% | 0.09R | 85m | market | breakeven-stop | trend | breakout | neutral | 70.54 | ↓109.73 | 0.252 | 1.97 | **LOSS** |
| 389 | MRVL | 06-09 14:10 | 06-09 14:55 | 70.71 | 70.1 | 108 | 7636.68 | -65.88 | -0.86% | 0.61R | 45m | market | early-reversal | trend | trend | noisyHighBeta | 63.81 | ↓69.97 | 0.4907 | 1.06 | **LOSS** |
| 390 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 48 | 10310.88 | +69.6 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 391 | DELL | 06-09 15:05 | 06-09 15:15 | 116.67 | 115.79 | 120 | 14000.4 | -105.6 | -0.75% | 1.07R | 10m | market | stop-loss | trend | trend | neutral | 76.86 | ↓115.88 | 0.6226 | 1.86 | **LOSS** |
| 392 | TXN | 06-09 15:10 | 06-09 15:35 | 198.52 | 197.92 | 70 | 13896.4 | -42 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 68.13 | ↑197.13 | 1.3347 | 2.07 | **LOSS** |
| 393 | KLAC | 06-09 15:10 | 06-09 15:30 | 835 | 831.12 | 16 | 13360 | -62.08 | -0.46% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 68.82 | ↑826.47 | 6.4471 | 1.67 | **LOSS** |
| 394 | REGN | 06-09 15:25 | 06-09 16:00 | 501.98 | 500.44 | 9 | 4517.82 | -13.86 | -0.31% | 0.41R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 42.95 | ↓501.01 | 1.0696 | 1.61 | **LOSS** |
| 395 | TGT | 06-10 13:30 | 06-10 14:50 | 98.61 | 101.57 | 49 | 4831.89 | +145.04 | +3% | 4.29R | 80m | market | profit-target | trend | momentum-pilot | neutral | 66.52 | ↑98.28 | -0.0482 | 1.96 | **WIN** |
| 396 | SLB | 06-10 13:30 | 06-10 14:50 | 34.62 | 35.5 | 141 | 4881.42 | +124.08 | +2.54% | 3.63R | 80m | market | profit-target | trend | momentum-pilot | neutral | 59.77 | ↑34.53 | -0.038 | 1.53 | **WIN** |
| 397 | META | 06-10 13:35 | 06-10 14:20 | 701.79 | 699.52 | 6 | 4210.74 | -13.62 | -0.32% | 0.46R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 64.47 | ↓699.28 | -0.6457 | 2.62 | **LOSS** |
| 398 | T | 06-10 13:35 | 06-10 14:25 | 28.16 | 28.1 | 173 | 4871.68 | -10.38 | -0.21% | 0.3R | 50m | market | stagnation | trend | momentum-pilot | neutral | 66.35 | ↓28.05 | 0.0076 | 1.89 | **LOSS** |
| 399 | ELF | 06-10 13:45 | 06-10 14:45 | 119.12 | 119.73 | 117 | 13937.04 | +71.37 | +0.51% | 0.63R | 60m | market | trailing-stop | breakout | breakout | neutral | 64.5 | ↓117.77 | -0.04 | 1.19 | **WIN** |
| 400 | U | 06-10 13:55 | 06-10 14:20 | 24.48 | 24.3 | 138 | 3378.24 | -24.84 | -0.74% | 0.54R | 25m | market | early-reversal | mixed | momentum-pilot | falseBreakoutProne | 32.05 | ↓24.35 | -0.1744 | 1.92 | **LOSS** |
| 401 | UPS | 06-10 14:00 | 06-10 15:20 | 101.06 | 101.99 | 69 | 13946.28 | +64.17 | +0.92% | 1.26R | 80m | market | trim-profit-target | trend | trend | neutral | 75.04 | ↑100.34 | 0.2089 | 1.11 | **WIN** |
| 402 | UPS | 06-10 14:00 | 06-10 15:45 | 101.06 | 102.34 | 69 | 13946.28 | +88.32 | +1.27% | 1.74R | 105m | market | timeout | trend | trend | neutral | 75.04 | ↑100.34 | 0.2089 | 1.11 | **WIN** |
| 403 | F | 06-10 14:00 | 06-10 15:40 | 10.5 | 10.58 | 664 | 13954.5 | +53.12 | +0.76% | 1.09R | 100m | market | trim-profit-target | trend | trend | neutral | 76.92 | ↑10.44 | 0.0179 | 2.09 | **WIN** |
| 404 | F | 06-10 14:00 | 06-10 15:45 | 10.5 | 10.57 | 665 | 13954.5 | +46.55 | +0.67% | 0.96R | 105m | market | timeout | trend | trend | neutral | 76.92 | ↑10.44 | 0.0179 | 2.09 | **WIN** |
| 405 | CVX | 06-10 14:10 | 06-10 15:45 | 143.46 | 144.5 | 48 | 13915.62 | +49.92 | +0.72% | 0.91R | 95m | market | trim-profit-target | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 406 | CVX | 06-10 14:10 | 06-10 15:55 | 143.46 | 144.37 | 49 | 13915.62 | +44.59 | +0.63% | 0.8R | 105m | market | timeout | trend | trend | neutral | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 407 | PATH | 06-10 14:10 | 06-10 14:55 | 13.34 | 13.44 | 525 | 14007 | +52.5 | +0.75% | 0.95R | 45m | market | trim-profit-target | trend | trend | neutral | 78.21 | ↑13.22 | 0.0419 | 1 | **WIN** |
| 408 | PATH | 06-10 14:10 | 06-10 15:30 | 13.34 | 13.34 | 525 | 14007 | +0 | +0% | 0R | 80m | market | breakeven-stop | trend | trend | neutral | 78.21 | ↓13.22 | 0.0419 | 1 | **WIN** |
| 409 | AI | 06-10 14:15 | 06-10 15:05 | 26.33 | 26.3 | 533 | 14033.89 | -15.99 | -0.11% | 0.08R | 50m | market | stagnation | trend | trend | neutral | 65.91 | ↑26.11 | 0.0607 | 1.47 | **LOSS** |
| 410 | PFE | 06-10 14:35 | 06-10 15:50 | 24.3 | 24.28 | 575 | 13972.5 | -11.5 | -0.08% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 71.94 | ↑24.12 | 0.0519 | 1.89 | **LOSS** |
| 411 | AMGN | 06-10 14:40 | 06-10 15:05 | 295.15 | 293.73 | 47 | 13872.05 | -66.74 | -0.48% | 0.69R | 25m | market | early-reversal | trend | trend | neutral | 68.58 | ↑292.96 | 0.8401 | 1.41 | **LOSS** |
| 412 | NVO | 06-10 14:50 | 06-10 15:40 | 79.44 | 79.33 | 176 | 13981.44 | -19.36 | -0.14% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 76.71 | ↑78.54 | 1.0801 | 2.14 | **LOSS** |
| 413 | AAPL | 06-10 14:55 | 06-10 15:15 | 204.34 | 203.44 | 68 | 13895.12 | -61.2 | -0.44% | 0.61R | 20m | market | early-reversal | trend | trend | neutral | 73.12 | ↑202.61 | 0.7011 | 1.1 | **LOSS** |
| 414 | LRCX | 06-10 15:25 | 06-10 17:10 | 90.28 | 91.22 | 54 | 4875.12 | +50.76 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | neutral | 63.64 | ↑89.56 | 0.399 | 1.85 | **WIN** |
| 415 | AAPL | 06-11 13:30 | 06-11 13:45 | 204.09 | 202.52 | 23 | 4694.07 | -36.11 | -0.77% | 1.1R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 75.34 | ↓203.64 | 0.3777 | 1.64 | **LOSS** |
| 416 | QCOM | 06-11 14:00 | 06-11 14:20 | 161.39 | 160.81 | 86 | 13879.54 | -49.88 | -0.36% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.19 | ↑160.41 | 0.5678 | 1.63 | **LOSS** |
| 417 | WDAY | 06-11 14:00 | 06-11 15:20 | 254.92 | 254.75 | 10 | 2549.2 | -1.7 | -0.07% | 0.1R | 80m | market | stagnation | trend | momentum-pilot | thinChop | 65.79 | ↓254.23 | 0.154 | 2.71 | **LOSS** |
| 418 | GE | 06-11 14:05 | 06-11 15:50 | 245.12 | 246.2 | 57 | 13971.84 | +61.56 | +0.44% | 0.44R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 419 | UNH | 06-11 14:15 | 06-11 15:05 | 308.8 | 307.78 | 45 | 13896 | -45.9 | -0.33% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 72.91 | ↓306.28 | 1.403 | 1.5 | **LOSS** |
| 420 | CRWD | 06-11 14:20 | 06-11 16:05 | 474.75 | 475.82 | 29 | 13767.75 | +31.03 | +0.23% | 0.29R | 105m | market | timeout | trend | trend | neutral | 69.44 | ↑472.37 | 1.3192 | 3.22 | **WIN** |
| 421 | SBUX | 06-11 14:30 | 06-11 15:25 | 94.5 | 94.21 | 51 | 4819.5 | -14.79 | -0.31% | 0.22R | 55m | market | stagnation | trend | momentum-pilot | neutral | 80.77 | ↑93.79 | 0.9482 | 1.55 | **LOSS** |
| 422 | MRVL | 06-11 14:35 | 06-11 15:05 | 70.11 | 69.72 | 199 | 13951.89 | -77.61 | -0.56% | 0.46R | 30m | market | early-reversal | trend | trend | neutral | 61.06 | ↓69.64 | 0.313 | 1 | **LOSS** |
| 423 | QCOM | 06-11 14:40 | 06-11 15:20 | 161.68 | 161.11 | 86 | 13904.48 | -49.02 | -0.35% | 0.5R | 40m | market | early-reversal | trend | trend | neutral | 70.77 | ↓160.86 | 0.7155 | 1.76 | **LOSS** |
| 424 | ELF | 06-11 14:45 | 06-11 16:30 | 122.66 | 123.83 | 113 | 13860.58 | +132.21 | +0.95% | 0.92R | 105m | market | timeout | trend | breakout | neutral | 71.72 | ↑121.03 | 1.2031 | 1.35 | **WIN** |
| 425 | CELH | 06-11 15:15 | 06-11 15:45 | 42.81 | 42.67 | 108 | 4623.48 | -15.12 | -0.33% | 0.33R | 30m | market | early-reversal | mixed | momentum-pilot | neutral | 43.63 | ↓42.65 | -0.0864 | 3.86 | **LOSS** |
| 426 | NVDA | 06-12 13:30 | 06-12 15:15 | 143.48 | 144.55 | 34 | 4878.32 | +36.38 | +0.75% | 0.79R | 105m | market | timeout | trend | momentum-pilot | neutral | 56.12 | ↑142.94 | -0.1283 | 6.2 | **WIN** |
| 427 | JNJ | 06-12 13:30 | 06-12 13:50 | 156.13 | 155.49 | 15 | 2341.95 | -9.6 | -0.41% | 0.59R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 73.28 | ↓155.92 | -0.0792 | 4.04 | **LOSS** |
| 428 | ABBV | 06-12 13:35 | 06-12 13:55 | 193.05 | 192 | 25 | 4826.25 | -26.25 | -0.54% | 0.77R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 65.94 | ↓192.34 | -0.1008 | 1.45 | **LOSS** |
| 429 | MSFT | 06-12 13:40 | 06-12 15:25 | 475.77 | 476.75 | 5 | 2378.85 | +4.9 | +0.21% | 0.3R | 105m | market | timeout | trend | momentum-pilot | thinChop | 81.21 | ↑474.89 | 0.2627 | 2.92 | **WIN** |
| 430 | NET | 06-12 13:45 | 06-12 14:10 | 181.18 | 179.21 | 27 | 4891.86 | -53.19 | -1.09% | 1.14R | 25m | market | early-reversal | breakout | momentum-pilot | neutral | 63.35 | ↓179.1 | -0.1594 | 1.92 | **LOSS** |
| 431 | ETN | 06-12 13:50 | 06-12 15:35 | 327.13 | 328.58 | 14 | 4579.82 | +20.3 | +0.44% | 0.63R | 105m | market | timeout | mixed | momentum-pilot | neutral | 60.05 | ↑325.56 | -0.282 | 1.87 | **WIN** |
| 432 | CRM | 06-12 14:00 | 06-12 15:40 | 266.7 | 266.65 | 18 | 4800.6 | -0.9 | -0.02% | 0.03R | 100m | market | breakeven-stop | trend | momentum-pilot | neutral | 54.44 | ↓265.28 | -0.2905 | 2.4 | **LOSS** |
| 433 | AVGO | 06-12 14:10 | 06-12 15:15 | 257.13 | 256.22 | 38 | 9770.94 | -34.58 | -0.35% | 0.35R | 65m | market | early-reversal | trend | breakout | neutral | 97.71 | ↓254.35 | 0.8364 | 1.87 | **LOSS** |
| 434 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.9 | 174.31 | 80 | 13992 | -47.2 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 435 | PANW | 06-12 15:00 | 06-12 15:55 | 197.71 | 197.54 | 24 | 4745.04 | -4.08 | -0.09% | 0.13R | 55m | market | stagnation | mixed | momentum-pilot | neutral | 52.51 | ↑197.22 | 0.5934 | 2.17 | **LOSS** |
| 436 | PLTR | 06-13 13:30 | 06-13 14:10 | 136.14 | 135.93 | 32 | 4356.48 | -6.72 | -0.15% | 0.15R | 40m | market | trailing-stop | trend | momentum-pilot | neutral | 56.03 | ↓135.22 | -0.3675 | 5.45 | **LOSS** |
| 437 | ZS | 06-13 13:30 | 06-13 13:55 | 303.53 | 302.19 | 13 | 3945.89 | -17.42 | -0.44% | 0.63R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 66.51 | ↓303.38 | -0.3786 | 1.92 | **LOSS** |
| 438 | RBLX | 06-13 13:30 | 06-13 14:20 | 95.59 | 95.12 | 51 | 4875.09 | -23.97 | -0.49% | 0.59R | 50m | market | stagnation | trend | momentum-pilot | neutral | 57.26 | ↓94.96 | -0.0915 | 7.65 | **LOSS** |
| 439 | MRK | 06-13 13:30 | 06-13 13:50 | 82.28 | 81.8 | 59 | 4854.52 | -28.32 | -0.58% | 0.83R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 62.05 | ↓82.09 | 0.0096 | 1.91 | **LOSS** |
| 440 | UPS | 06-13 13:30 | 06-13 13:45 | 101.37 | 100.49 | 31 | 3142.47 | -27.28 | -0.87% | 1.24R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 87.35 | ↓100.98 | 0.06 | 1.68 | **LOSS** |
| 441 | WMT | 06-13 13:35 | 06-13 13:55 | 95.37 | 94.9 | 51 | 4863.87 | -23.97 | -0.49% | 0.7R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 63.71 | ↓94.95 | 0.0779 | 1.81 | **LOSS** |
| 442 | FTNT | 06-13 13:35 | 06-13 13:55 | 102.71 | 101.93 | 46 | 4724.66 | -35.88 | -0.76% | 1.09R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.47 | ↓102.13 | -0.1543 | 3.73 | **LOSS** |
| 443 | TSLA | 06-13 13:45 | 06-13 14:10 | 318.79 | 316.69 | 8 | 2550.32 | -16.8 | -0.66% | 0.62R | 25m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | 49.03 | ↓316.97 | -0.7902 | 2.45 | **LOSS** |
| 444 | MO | 06-13 14:20 | 06-13 14:40 | 60.51 | 60.21 | 231 | 13977.81 | -69.3 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↓60.25 | 0.1465 | 1.25 | **LOSS** |
| 445 | PATH | 06-13 14:35 | 06-13 14:55 | 12.5 | 12.43 | 392 | 4900 | -27.44 | -0.56% | 0.44R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 36.36 | ↑12.4 | -0.0939 | 2 | **LOSS** |
| 446 | GOOG | 06-13 14:50 | 06-13 16:35 | 176.86 | 178.12 | 23 | 4067.78 | +28.98 | +0.71% | 1.01R | 105m | market | timeout | mixed | momentum-pilot | neutral | 72.86 | ↑175.39 | -0.2993 | 1.58 | **WIN** |
| 447 | AMD | 06-13 15:00 | 06-13 16:35 | 117.28 | 117.19 | 41 | 4808.48 | -3.69 | -0.08% | 0.09R | 95m | market | stagnation | mixed | momentum-pilot | neutral | 62.53 | ↑116.13 | -0.4792 | 1.6 | **LOSS** |
| 448 | UBER | 06-13 15:20 | 06-13 15:40 | 85.44 | 85.12 | 57 | 4870.08 | -18.24 | -0.37% | 0.53R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 78.27 | ↑84.69 | -0.1367 | 1.56 | **LOSS** |
| 449 | MSFT | 06-16 13:30 | 06-16 15:15 | 477.32 | 479.84 | 5 | 2386.6 | +12.6 | +0.53% | 0.76R | 105m | market | timeout | trend | momentum-pilot | thinChop | 77.82 | ↑476.79 | -0.0298 | 1.47 | **WIN** |
| 450 | TSM | 06-16 13:30 | 06-16 14:50 | 213.75 | 216.4 | 11 | 4702.5 | +29.15 | +1.24% | 1.77R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 72.74 | ↑213.42 | -0.0631 | 4.26 | **WIN** |
| 451 | TSM | 06-16 13:30 | 06-16 15:15 | 213.75 | 217.23 | 11 | 4702.5 | +38.28 | +1.63% | 2.33R | 105m | market | timeout | trend | momentum-pilot | neutral | 72.74 | ↑213.42 | -0.0631 | 4.26 | **WIN** |
| 452 | UBER | 06-16 13:30 | 06-16 14:20 | 85.62 | 85.56 | 149 | 12757.38 | -8.94 | -0.07% | 0.07R | 50m | market | stagnation | trend | breakout | neutral | 76.94 | ↑85.51 | -0.0221 | 1.88 | **LOSS** |
| 453 | NOW | 06-16 13:30 | 06-16 15:15 | 997.75 | 1011.38 | 3 | 2993.25 | +40.89 | +1.37% | 1.96R | 105m | market | timeout | trend | momentum-pilot | neutral | 91.42 | ↑995.47 | -0.5236 | 4.56 | **WIN** |
| 454 | XOM | 06-16 13:30 | 06-16 13:55 | 112.84 | 111.55 | 43 | 4852.12 | -55.47 | -1.14% | 1.63R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 63.72 | ↓112.36 | 0.0968 | 1.6 | **LOSS** |
| 455 | ADSK | 06-16 13:30 | 06-16 15:15 | 295.12 | 297.17 | 9 | 2656.08 | +18.45 | +0.69% | 0.99R | 105m | market | timeout | trend | momentum-pilot | thinChop | 71.74 | ↑294.36 | -0.3975 | 2.32 | **WIN** |
| 456 | ANET | 06-16 13:30 | 06-16 15:15 | 93.35 | 95.25 | 52 | 4854.2 | +98.8 | +2.04% | 2.91R | 105m | market | timeout | trend | momentum-pilot | neutral | 65.01 | ↑93.13 | -0.1617 | 1.87 | **WIN** |
| 457 | AAPL | 06-16 13:35 | 06-16 15:20 | 197.53 | 197.36 | 24 | 4740.72 | -4.08 | -0.09% | 0.13R | 105m | market | stagnation | trend | momentum-pilot | neutral | 62.16 | ↓197.2 | -0.0028 | 1.56 | **LOSS** |
| 458 | FDX | 06-16 13:35 | 06-16 15:20 | 226.23 | 226.86 | 38 | 8596.74 | +23.94 | +0.28% | 0.4R | 105m | market | timeout | trend | breakout | neutral | 82.92 | ↓225.98 | -0.026 | 1.15 | **WIN** |
| 459 | COST | 06-16 13:40 | 06-16 14:35 | 997.42 | 996.18 | 2 | 1994.84 | -2.48 | -0.12% | 0.17R | 55m | market | stagnation | trend | momentum-pilot | thinChop | 63.87 | ↓994.4 | -0.7588 | 1.47 | **LOSS** |
| 460 | RIVN | 06-16 13:45 | 06-16 15:30 | 13.76 | 14.02 | 712 | 9797.12 | +185.12 | +1.89% | 1.78R | 105m | market | timeout | trend | breakout | neutral | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 461 | HON | 06-16 13:45 | 06-16 14:35 | 225.75 | 225.22 | 12 | 2709 | -6.36 | -0.23% | 0.33R | 50m | market | stagnation | trend | momentum-pilot | thinChop | 66.37 | ↓225.61 | 0.2044 | 2 | **LOSS** |
| 462 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 51 | 10394.82 | -45.39 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 463 | MU | 06-16 14:40 | 06-16 15:25 | 120.48 | 119.85 | 93 | 11204.64 | -58.59 | -0.52% | 0.51R | 45m | market | early-reversal | trend | trend | neutral | 73.04 | ↑119.28 | 1.2965 | 1.19 | **LOSS** |
| 464 | CYBR | 06-16 14:40 | 06-16 15:55 | 398.48 | 398.01 | 35 | 13946.8 | -16.45 | -0.12% | 0.1R | 75m | market | stagnation | trend | trend | neutral | 69.82 | ↑395.29 | 2.0928 | 1.03 | **LOSS** |
| 465 | ZS | 06-16 15:10 | 06-16 16:20 | 308.26 | 307.85 | 45 | 13871.7 | -18.45 | -0.13% | 0.19R | 70m | market | stagnation | trend | trend | neutral | 61.65 | ↑306.45 | 1.471 | 1.17 | **LOSS** |
| 466 | INTC | 06-17 13:30 | 06-17 14:55 | 20.85 | 20.86 | 123 | 2564.55 | +1.23 | +0.05% | 0.07R | 85m | market | breakeven-stop | trend | momentum-pilot | noisyHighBeta | 75.76 | ↓20.76 | -0.0058 | 2.48 | **WIN** |
| 467 | LRCX | 06-17 13:30 | 06-17 14:50 | 93.91 | 94.57 | 26 | 4883.32 | +17.16 | +0.7% | 1R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 78.91 | ↑93.67 | 0.0803 | 2.18 | **WIN** |
| 468 | LRCX | 06-17 13:30 | 06-17 15:15 | 93.91 | 94.27 | 26 | 4883.32 | +9.36 | +0.38% | 0.54R | 105m | market | timeout | trend | momentum-pilot | neutral | 78.91 | ↓93.67 | 0.0803 | 2.18 | **WIN** |
| 469 | CSCO | 06-17 13:30 | 06-17 14:20 | 65.9 | 65.82 | 47 | 3097.3 | -3.76 | -0.12% | 0.17R | 50m | market | stagnation | trend | momentum-pilot | neutral | 82.35 | ↓65.75 | 0.0553 | 2.67 | **LOSS** |
| 470 | SLB | 06-17 13:30 | 06-17 15:15 | 36.27 | 36.45 | 135 | 4896.45 | +24.3 | +0.5% | 0.71R | 105m | market | timeout | trend | momentum-pilot | neutral | 81.89 | ↑36.13 | 0.0022 | 1.67 | **WIN** |
| 471 | AMAT | 06-17 14:10 | 06-17 14:30 | 178.13 | 177.42 | 78 | 13894.14 | -55.38 | -0.4% | 0.57R | 20m | market | early-reversal | trend | trend | neutral | 76.62 | ↑176.88 | 0.4141 | 2.9 | **LOSS** |
| 472 | URI | 06-17 14:10 | 06-17 14:30 | 709.96 | 704.88 | 13 | 9229.48 | -66.04 | -0.72% | 0.82R | 20m | market | early-reversal | trend | breakout | neutral | 86.19 | ↑701.67 | 2.8995 | 1.31 | **LOSS** |
| 473 | CRM | 06-17 14:15 | 06-17 14:40 | 268.63 | 266.94 | 52 | 13968.76 | -87.88 | -0.63% | 0.75R | 25m | market | early-reversal | trend | trend | neutral | 79.08 | ↓266.54 | 1.1114 | 1.27 | **LOSS** |
| 474 | FTNT | 06-17 14:20 | 06-17 15:25 | 103.23 | 104.12 | 67 | 13936.05 | +59.63 | +0.86% | 1.23R | 65m | market | trim-profit-target | trend | trend | neutral | 78 | ↑102.68 | 0.2034 | 2.15 | **WIN** |
| 475 | FTNT | 06-17 14:20 | 06-17 16:05 | 103.23 | 103.95 | 68 | 13936.05 | +48.96 | +0.7% | 1R | 105m | market | timeout | trend | trend | neutral | 78 | ↑102.68 | 0.2034 | 2.15 | **WIN** |
| 476 | PANW | 06-17 15:05 | 06-17 15:55 | 201.69 | 201.25 | 69 | 13916.61 | -30.36 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 79.8 | ↑199.85 | 0.9169 | 1.72 | **LOSS** |
| 477 | GE | 06-17 15:10 | 06-17 15:30 | 238.82 | 236.67 | 58 | 13851.56 | -124.7 | -0.9% | 1.29R | 20m | market | stop-loss | trend | breakout | neutral | 63.47 | ↓236.55 | -0.0641 | 2.64 | **LOSS** |
| 478 | BA | 06-17 15:10 | 06-17 15:15 | 204.09 | 201.96 | 47 | 9592.23 | -100.11 | -1.04% | 1.49R | 5m | market | stop-loss | trend | breakout | neutral | 75.96 | ↓201.86 | -0.0497 | 12.23 | **LOSS** |
| 479 | TEAM | 06-17 15:10 | 06-17 15:35 | 201.62 | 200.94 | 69 | 13911.78 | -46.92 | -0.34% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 58.86 | ↑200.32 | 0.191 | 1.5 | **LOSS** |
| 480 | BAC | 06-18 13:30 | 06-18 14:45 | 44.55 | 44.9 | 55 | 4900.5 | +19.25 | +0.79% | 1.13R | 75m | market | trim-profit-target | trend | momentum-pilot | neutral | 71.2 | ↑44.43 | 0.0232 | 1.71 | **WIN** |
| 481 | BAC | 06-18 13:30 | 06-18 15:15 | 44.55 | 44.82 | 55 | 4900.5 | +14.85 | +0.61% | 0.87R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.2 | ↑44.43 | 0.0232 | 1.71 | **WIN** |
| 482 | CMG | 06-18 13:30 | 06-18 14:40 | 51.66 | 52.2 | 47 | 4856.04 | +25.38 | +1.05% | 1.5R | 70m | market | trim-profit-target | trend | momentum-pilot | neutral | 79.12 | ↑51.65 | 0.0334 | 1.46 | **WIN** |
| 483 | CMG | 06-18 13:30 | 06-18 15:15 | 51.66 | 52.04 | 47 | 4856.04 | +17.86 | +0.74% | 1.06R | 105m | market | timeout | trend | momentum-pilot | neutral | 79.12 | ↓51.65 | 0.0334 | 1.46 | **WIN** |
| 484 | COP | 06-18 13:30 | 06-18 13:50 | 96.07 | 95.78 | 43 | 4131.01 | -12.47 | -0.3% | 0.43R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 48.27 | ↑95.81 | -0.134 | 2.18 | **LOSS** |
| 485 | SLB | 06-18 13:30 | 06-18 14:00 | 36.35 | 36.15 | 135 | 4907.25 | -27 | -0.55% | 0.79R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 56.8 | ↓36.24 | -0.0191 | 1.94 | **LOSS** |
| 486 | ETN | 06-18 13:35 | 06-18 14:40 | 332.42 | 335.63 | 7 | 4653.88 | +22.47 | +0.97% | 1.39R | 65m | market | trim-profit-target | trend | momentum-pilot | neutral | 59.95 | ↑331.45 | -0.0914 | 3.05 | **WIN** |
| 487 | ETN | 06-18 13:35 | 06-18 15:20 | 332.42 | 336.93 | 7 | 4653.88 | +31.57 | +1.36% | 1.94R | 105m | market | timeout | trend | momentum-pilot | neutral | 59.95 | ↑331.45 | -0.0914 | 3.05 | **WIN** |
| 488 | HPE | 06-18 13:40 | 06-18 15:25 | 17.99 | 17.98 | 271 | 4875.29 | -2.71 | -0.06% | 0.08R | 105m | market | breakeven-stop | trend | momentum-pilot | neutral | 56.69 | ↓17.91 | -0.0151 | 1.75 | **LOSS** |
| 489 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 36 | 11680.2 | -49.32 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 490 | UNH | 06-18 14:10 | 06-18 15:00 | 310.1 | 309.42 | 15 | 4651.5 | -10.2 | -0.22% | 0.31R | 50m | market | stagnation | trend | momentum-pilot | neutral | 61.36 | ↓308.74 | 0.5386 | 2.05 | **LOSS** |
| 491 | PATH | 06-18 14:15 | 06-18 14:35 | 12.44 | 12.38 | 394 | 4901.36 | -23.64 | -0.48% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 50 | ↓12.37 | -0.0131 | 2.83 | **LOSS** |
| 492 | U | 06-18 14:25 | 06-18 14:50 | 24.08 | 23.94 | 581 | 13990.48 | -81.34 | -0.58% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 75.86 | ↑23.86 | 0.1103 | 1.63 | **LOSS** |
| 493 | MU | 06-18 14:30 | 06-18 14:50 | 122.52 | 121.58 | 91 | 11149.32 | -85.54 | -0.77% | 0.88R | 20m | market | early-reversal | trend | trend | neutral | 72.73 | ↓121.34 | 0.5047 | 1.09 | **LOSS** |
| 494 | SMCI | 06-18 14:30 | 06-18 14:50 | 44.09 | 43.87 | 317 | 13976.53 | -69.74 | -0.5% | 0.34R | 20m | market | early-reversal | trend | trend | neutral | 67.42 | ↑43.64 | 0.2247 | 1.18 | **LOSS** |
| 495 | PYPL | 06-18 14:30 | 06-18 15:20 | 71.28 | 70.96 | 196 | 13970.88 | -62.72 | -0.45% | 0.64R | 50m | market | early-reversal | trend | trend | neutral | 63.08 | ↑70.6 | 0.1065 | 1.01 | **LOSS** |
| 496 | RIVN | 06-18 14:40 | 06-18 16:25 | 13.71 | 13.78 | 1023 | 14025.33 | +71.61 | +0.51% | 0.48R | 105m | market | timeout | trend | trend | neutral | 72.82 | ↑13.6 | 0.0773 | 1.09 | **WIN** |
| 497 | MRK | 06-18 15:20 | 06-18 15:40 | 79.35 | 79.15 | 123 | 9760.05 | -24.6 | -0.25% | 0.33R | 20m | market | breakeven-stop | trend | breakout | neutral | 92 | ↑77.79 | 0.1151 | 2.7 | **LOSS** |
| 498 | MSFT | 06-20 13:30 | 06-20 13:50 | 483.47 | 481.24 | 5 | 2417.35 | -11.15 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 73.5 | ↓482.49 | 0.5803 | 3.4 | **LOSS** |
| 499 | JPM | 06-20 13:30 | 06-20 14:20 | 276.75 | 275.53 | 17 | 4704.75 | -20.74 | -0.44% | 0.63R | 50m | market | early-reversal | trend | momentum-pilot | neutral | 65.95 | ↓276.2 | 0.0139 | 1.88 | **LOSS** |
| 500 | VZ | 06-20 13:30 | 06-20 13:50 | 42.04 | 41.85 | 116 | 4876.64 | -22.04 | -0.45% | 0.64R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 63.51 | ↓41.91 | -0.0199 | 3.13 | **LOSS** |
| 501 | CVX | 06-20 13:45 | 06-20 14:35 | 149.1 | 148.88 | 32 | 4771.2 | -7.04 | -0.15% | 0.21R | 50m | market | stagnation | trend | momentum-pilot | neutral | 63.08 | ↑148.72 | -0.0278 | 1.97 | **LOSS** |
| 502 | NVO | 06-20 14:00 | 06-20 14:20 | 73.96 | 73.52 | 62 | 4585.52 | -27.28 | -0.59% | 0.53R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 43.53 | ↑73.51 | -0.2786 | 5.33 | **LOSS** |
| 503 | INTC | 06-23 13:30 | 06-23 14:55 | 21.28 | 21.25 | 223 | 4745.44 | -6.69 | -0.14% | 0.2R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | 81.61 | ↓21.27 | -0.0206 | 2.47 | **LOSS** |
| 504 | TMUS | 06-23 13:30 | 06-23 13:55 | 223.45 | 222.6 | 12 | 2681.4 | -10.2 | -0.38% | 0.54R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 66.22 | ↓223.42 | -0.0719 | 1.68 | **LOSS** |
| 505 | IBM | 06-23 13:40 | 06-23 15:25 | 284.5 | 286.13 | 34 | 9673 | +55.42 | +0.57% | 0.81R | 105m | market | timeout | trend | breakout | neutral | 86.53 | ↑283.69 | 0.428 | 1.9 | **WIN** |
| 506 | TXN | 06-23 13:45 | 06-23 15:30 | 199.56 | 200.49 | 24 | 4789.44 | +22.32 | +0.47% | 0.67R | 105m | market | timeout | trend | momentum-pilot | neutral | 65.89 | ↑199.42 | 0.3773 | 2.77 | **WIN** |
| 507 | T | 06-23 13:45 | 06-23 14:05 | 28.15 | 28.06 | 99 | 2786.85 | -8.91 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 70.23 | ↓28.04 | 0.0136 | 1.9 | **LOSS** |
| 508 | SNOW | 06-23 13:50 | 06-23 14:55 | 213 | 213.04 | 22 | 4686 | +0.88 | +0.02% | 0.02R | 65m | market | breakeven-stop | trend | momentum-pilot | neutral | 55.74 | ↓211.45 | -0.0987 | 3.58 | **WIN** |
| 509 | ARM | 06-23 14:00 | 06-23 15:05 | 147.17 | 147.06 | 61 | 8977.37 | -6.71 | -0.07% | 0.09R | 65m | market | stagnation | trend | breakout | neutral | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 510 | TMO | 06-23 14:00 | 06-23 15:25 | 397.65 | 396.61 | 12 | 4771.8 | -12.48 | -0.26% | 0.37R | 85m | market | stagnation | trend | momentum-pilot | neutral | 56.05 | ↓395.94 | 0.167 | 1.79 | **LOSS** |
| 511 | KLAC | 06-23 14:05 | 06-23 14:25 | 859.47 | 852.05 | 16 | 13751.52 | -118.72 | -0.86% | 1.23R | 20m | market | stop-loss | trend | trend | neutral | 78.91 | ↓855.15 | 2.4106 | 1.28 | **LOSS** |
| 512 | ADBE | 06-23 14:10 | 06-23 14:55 | 379.53 | 377.96 | 36 | 13663.08 | -56.52 | -0.41% | 0.59R | 45m | market | early-reversal | trend | trend | neutral | 71.37 | ↑376.74 | 0.8389 | 1.76 | **LOSS** |
| 513 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 52 | 10485.8 | -8.84 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 514 | CMG | 06-23 14:15 | 06-23 15:05 | 53.48 | 53.42 | 262 | 14011.76 | -15.72 | -0.11% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 68.55 | ↑52.9 | 0.1431 | 1.16 | **LOSS** |
| 515 | NET | 06-23 14:25 | 06-23 14:45 | 181.79 | 180.66 | 77 | 13997.83 | -87.01 | -0.62% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 61.6 | ↑179.99 | 0.3357 | 1.4 | **LOSS** |
| 516 | FTNT | 06-23 14:30 | 06-23 16:15 | 101.99 | 102.42 | 137 | 13972.63 | +58.91 | +0.42% | 0.48R | 105m | market | timeout | trend | trend | neutral | 75.68 | ↑100.88 | 0.6561 | 1.28 | **WIN** |
| 517 | PLTR | 06-23 14:40 | 06-23 15:00 | 141.64 | 140.68 | 99 | 14022.36 | -95.04 | -0.68% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 77.35 | ↑139.72 | 0.8496 | 1.71 | **LOSS** |
| 518 | F | 06-23 14:45 | 06-23 15:35 | 10.72 | 10.71 | 1303 | 13968.16 | -13.03 | -0.09% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 57.45 | ↑10.65 | 0.0435 | 1.41 | **LOSS** |
| 519 | NVDA | 06-24 13:35 | 06-24 14:05 | 146.48 | 146.53 | 33 | 4833.84 | +1.65 | +0.03% | 0.04R | 30m | market | breakeven-stop | trend | momentum-pilot | neutral | 80.56 | ↓145.98 | 0.5368 | 1.67 | **WIN** |
| 520 | SMCI | 06-24 13:35 | 06-24 15:15 | 41.71 | 42.73 | 67 | 2794.57 | +68.34 | +2.45% | 1.68R | 100m | market | profit-target | mixed | momentum-pilot | noisyHighBeta | 64.89 | ↑41.4 | -0.0504 | 2.16 | **WIN** |
| 521 | URI | 06-24 13:40 | 06-24 14:00 | 727.86 | 722.28 | 13 | 9462.18 | -72.54 | -0.77% | 1.1R | 20m | market | stop-loss | trend | breakout | neutral | 97.32 | ↓727.11 | 4.6096 | 2.81 | **LOSS** |
| 522 | RBLX | 06-24 13:50 | 06-24 14:55 | 104.06 | 104.77 | 23 | 4786.76 | +16.33 | +0.68% | 0.77R | 65m | market | trim-profit-target | trend | momentum-pilot | neutral | 69.34 | ↑103.59 | 0.0168 | 1.7 | **WIN** |
| 523 | RBLX | 06-24 13:50 | 06-24 15:35 | 104.06 | 105.05 | 23 | 4786.76 | +22.77 | +0.95% | 1.08R | 105m | market | timeout | trend | momentum-pilot | neutral | 69.34 | ↑103.59 | 0.0168 | 1.7 | **WIN** |
| 524 | PLTR | 06-24 13:55 | 06-24 15:35 | 140.54 | 141.58 | 17 | 4778.36 | +17.68 | +0.74% | 0.53R | 100m | market | trim-profit-target | trend | momentum-pilot | neutral | 57.58 | ↑139.65 | 0.0967 | 1.46 | **WIN** |
| 525 | PLTR | 06-24 13:55 | 06-24 15:40 | 140.54 | 141.74 | 17 | 4778.36 | +20.4 | +0.85% | 0.61R | 105m | market | timeout | trend | momentum-pilot | neutral | 57.58 | ↑139.65 | 0.0967 | 1.46 | **WIN** |
| 526 | INTC | 06-24 14:00 | 06-24 15:10 | 21.89 | 22.47 | 638 | 13965.82 | +370.04 | +2.65% | 2.76R | 70m | market | profit-target | trend | trend | neutral | 75.47 | ↑21.73 | 0.1755 | 2.7 | **WIN** |
| 527 | ORCL | 06-24 15:05 | 06-24 16:05 | 214.47 | 213.62 | 65 | 13940.55 | -55.25 | -0.4% | 0.51R | 60m | market | early-reversal | trend | trend | neutral | 71.45 | ↑212 | 1.9699 | 1.21 | **LOSS** |
| 528 | AXP | 06-24 15:05 | 06-24 16:05 | 305.71 | 305.29 | 45 | 13756.95 | -18.9 | -0.14% | 0.2R | 60m | market | stagnation | trend | trend | neutral | 68.47 | ↑304.3 | 1.5355 | 2.11 | **LOSS** |
| 529 | SHOP | 06-24 15:20 | 06-24 15:40 | 114.85 | 114.46 | 121 | 13896.85 | -47.19 | -0.34% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 72.99 | ↑113.56 | 1.1687 | 1.34 | **LOSS** |
| 530 | DELL | 06-24 15:20 | 06-24 15:40 | 121.63 | 121 | 115 | 13987.45 | -72.45 | -0.52% | 0.74R | 20m | market | early-reversal | trend | trend | neutral | 73.49 | ↑120.69 | 0.8721 | 1.35 | **LOSS** |
| 531 | MSFT | 06-25 13:30 | 06-25 14:35 | 493.55 | 492.99 | 9 | 4441.95 | -5.04 | -0.11% | 0.16R | 65m | market | stagnation | trend | momentum-pilot | neutral | 72.87 | ↓492.86 | 0.0319 | 1.55 | **LOSS** |
| 532 | UBER | 06-25 13:30 | 06-25 13:40 | 92.67 | 91.49 | 52 | 4818.84 | -61.36 | -1.27% | 1.69R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 63.85 | ↓92.29 | -0.0104 | 5.7 | **LOSS** |
| 533 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 73 | 13927.67 | -65.7 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 534 | COP | 06-25 14:30 | 06-25 15:15 | 89.92 | 89.56 | 155 | 13937.6 | -55.8 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | 58.89 | ↓89.35 | 0.0713 | 2.1 | **LOSS** |
| 535 | MSFT | 06-26 13:30 | 06-26 14:40 | 494.78 | 493.88 | 6 | 2968.68 | -5.4 | -0.18% | 0.26R | 70m | market | stagnation | trend | momentum-pilot | neutral | 89.26 | ↓494.41 | 0.5916 | 1.8 | **LOSS** |
| 536 | CRWD | 06-26 13:30 | 06-26 13:50 | 498.44 | 496.37 | 9 | 4485.96 | -18.63 | -0.42% | 0.6R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.38 | ↓498.56 | 0.1189 | 1.97 | **LOSS** |
| 537 | BAC | 06-26 13:30 | 06-26 15:15 | 47.15 | 47.42 | 99 | 4667.85 | +26.73 | +0.57% | 0.81R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.31 | ↑47.09 | 0.0088 | 1.72 | **WIN** |
| 538 | UNH | 06-26 13:30 | 06-26 14:20 | 304.91 | 304.17 | 16 | 4878.56 | -11.84 | -0.24% | 0.33R | 50m | market | stagnation | trend | momentum-pilot | neutral | 66.97 | ↓304.37 | 0.3379 | 2.05 | **LOSS** |
| 539 | DIS | 06-26 13:30 | 06-26 13:50 | 120.38 | 119.74 | 28 | 3370.64 | -17.92 | -0.53% | 0.76R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 88.73 | ↓120.36 | 0.0815 | 2.36 | **LOSS** |
| 540 | RIVN | 06-26 13:50 | 06-26 14:40 | 14.04 | 14.01 | 999 | 14025.96 | -29.97 | -0.21% | 0.17R | 50m | market | stagnation | trend | breakout | neutral | 66.4 | ↑13.92 | 0.0396 | 2.22 | **LOSS** |
| 541 | QCOM | 06-26 13:55 | 06-26 15:25 | 157.15 | 157.05 | 89 | 13986.35 | -8.9 | -0.06% | 0.09R | 90m | market | stagnation | trend | trend | neutral | 70.88 | ↓156.53 | 0.2975 | 1.12 | **LOSS** |
| 542 | CYBR | 06-26 13:55 | 06-26 15:40 | 400.32 | 405.89 | 10 | 4003.2 | +55.7 | +1.39% | 1.65R | 105m | market | timeout | mixed | momentum-pilot | neutral | 49.92 | ↑399.37 | -0.3595 | 2.77 | **WIN** |
| 543 | AI | 06-26 14:00 | 06-26 15:40 | 24.01 | 24.8 | 584 | 14021.84 | +461.36 | +3.29% | 2.81R | 100m | market | profit-target | trend | trend | neutral | 66.67 | ↑23.82 | 0.0594 | 1.29 | **WIN** |
| 544 | GM | 06-26 14:05 | 06-26 15:50 | 48.48 | 48.98 | 100 | 4848 | +50 | +1.03% | 1.47R | 105m | market | timeout | trend | momentum-pilot | neutral | 62.05 | ↑48.15 | 0.0408 | 2.73 | **WIN** |
| 545 | META | 06-26 14:10 | 06-26 15:00 | 720.17 | 719.7 | 19 | 13683.23 | -8.93 | -0.07% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 73.45 | ↑714.81 | 2.6974 | 1.3 | **LOSS** |
| 546 | PANW | 06-26 14:10 | 06-26 14:35 | 206.48 | 205.8 | 67 | 13834.16 | -45.56 | -0.33% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 69.17 | ↑205.5 | 0.5917 | 1.33 | **LOSS** |
| 547 | HPE | 06-26 14:10 | 06-26 15:00 | 18.56 | 18.5 | 225 | 4176 | -13.5 | -0.32% | 0.41R | 50m | market | early-reversal | mixed | momentum-pilot | neutral | 47.78 | ↓18.52 | -0.0138 | 2.6 | **LOSS** |
| 548 | WDAY | 06-26 14:10 | 06-26 16:05 | 233.95 | 235.05 | 18 | 4211.1 | +19.8 | +0.47% | 0.48R | 115m | market | timeout | mixed | momentum-pilot | neutral | 49.35 | ↑232.68 | -0.3794 | 1.91 | **WIN** |
| 549 | FTNT | 06-26 14:15 | 06-26 16:00 | 104.15 | 104.62 | 44 | 4582.6 | +20.68 | +0.45% | 0.64R | 105m | market | timeout | mixed | momentum-pilot | neutral | 54.53 | ↑103.72 | -0.0994 | 1.88 | **WIN** |
| 550 | SLB | 06-26 14:15 | 06-26 15:40 | 33.51 | 33.47 | 419 | 14040.69 | -16.76 | -0.12% | 0.16R | 85m | market | stagnation | trend | trend | neutral | 55.43 | ↓33.35 | 0.0473 | 1.06 | **LOSS** |
| 551 | ABNB | 06-26 14:20 | 06-26 16:05 | 130.82 | 132.16 | 107 | 13997.74 | +143.38 | +1.02% | 1.26R | 105m | market | timeout | trend | trend | neutral | 60.74 | ↑129.61 | 0.1957 | 1 | **WIN** |
| 552 | ABBV | 06-26 14:30 | 06-26 15:20 | 188.48 | 187.95 | 26 | 4900.48 | -13.78 | -0.28% | 0.4R | 50m | market | stagnation | trend | momentum-pilot | neutral | 76.63 | ↑187.34 | 0.5983 | 1.82 | **LOSS** |
| 553 | C | 06-26 14:40 | 06-26 15:30 | 84.37 | 84.18 | 165 | 13921.05 | -31.35 | -0.23% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.07 | ↑83.86 | 0.4487 | 1.55 | **LOSS** |
| 554 | META | 06-27 13:30 | 06-27 14:30 | 730.52 | 730.06 | 6 | 4383.12 | -2.76 | -0.06% | 0.09R | 60m | market | stagnation | trend | momentum-pilot | neutral | 70.28 | ↓730.08 | 0.3173 | 3.13 | **LOSS** |
| 555 | SNOW | 06-27 13:30 | 06-27 13:50 | 223.18 | 222.5 | 21 | 4686.78 | -14.28 | -0.3% | 0.43R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 66.51 | ↓222.91 | 0.3122 | 2.18 | **LOSS** |
| 556 | GE | 06-27 13:30 | 06-27 15:15 | 253.57 | 257.82 | 17 | 4310.69 | +72.25 | +1.68% | 2.4R | 105m | market | timeout | trend | momentum-pilot | neutral | 57.65 | ↑253.03 | -0.3384 | 1.59 | **WIN** |
| 557 | GOOG | 06-27 13:30 | 06-27 14:25 | 174.99 | 174.74 | 28 | 4899.72 | -7 | -0.14% | 0.2R | 55m | market | stagnation | trend | momentum-pilot | neutral | 74.77 | ↓175.07 | 0.1427 | 2.54 | **LOSS** |
| 558 | INTC | 06-27 13:35 | 06-27 14:55 | 22.9 | 22.94 | 214 | 4900.6 | +8.56 | +0.17% | 0.24R | 80m | market | trailing-stop | trend | momentum-pilot | neutral | 56.36 | ↓22.77 | 0.0865 | 2.55 | **WIN** |
| 559 | TSM | 06-27 13:35 | 06-27 15:20 | 225.91 | 228.26 | 21 | 4744.11 | +49.35 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | neutral | 75 | ↑224.99 | 0.1159 | 1.57 | **WIN** |
| 560 | SLB | 06-27 13:35 | 06-27 15:20 | 33.96 | 34.12 | 144 | 4890.24 | +23.04 | +0.47% | 0.67R | 105m | market | timeout | trend | momentum-pilot | neutral | 78.05 | ↑33.89 | 0.0262 | 4.17 | **WIN** |
| 561 | PEP | 06-27 13:40 | 06-27 15:20 | 129.41 | 130.28 | 9 | 2458.79 | +7.83 | +0.67% | 0.96R | 100m | market | trim-profit-target | trend | momentum-pilot | thinChop | 88.53 | ↑128.89 | 0.1051 | 1.68 | **WIN** |
| 562 | PEP | 06-27 13:40 | 06-27 15:25 | 129.41 | 130.46 | 10 | 2458.79 | +10.5 | +0.81% | 1.16R | 105m | market | timeout | trend | momentum-pilot | thinChop | 88.53 | ↑128.89 | 0.1051 | 1.68 | **WIN** |
| 563 | SNOW | 06-27 13:55 | 06-27 14:25 | 223.66 | 222.76 | 21 | 4696.86 | -18.9 | -0.4% | 0.57R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 67.23 | ↓222.91 | 0.3847 | 2.35 | **LOSS** |
| 564 | CRM | 06-27 14:00 | 06-27 14:20 | 273.34 | 272.47 | 51 | 13940.34 | -44.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.17 | ↓271.92 | 0.56 | 1.33 | **LOSS** |
| 565 | ADP | 06-27 14:15 | 06-27 14:55 | 306.05 | 304.85 | 45 | 13772.25 | -54 | -0.39% | 0.56R | 40m | market | early-reversal | trend | trend | neutral | 75.07 | ↑304.09 | 0.7715 | 1.37 | **LOSS** |
| 566 | COST | 06-27 14:50 | 06-27 15:45 | 988.99 | 988.12 | 14 | 13845.86 | -12.18 | -0.09% | 0.13R | 55m | market | stagnation | trend | trend | neutral | 65.72 | ↑984.9 | 1.9502 | 1.59 | **LOSS** |
| 567 | ISRG | 06-27 15:20 | 06-27 17:20 | 540.79 | 541.55 | 25 | 13519.75 | +19 | +0.14% | 0.2R | 120m | market | stagnation | trend | trend | neutral | 69.85 | ↑538.04 | 1.8587 | 1.08 | **WIN** |
| 568 | NOW | 06-30 13:30 | 06-30 13:45 | 1029.25 | 1019.94 | 4 | 4117 | -37.24 | -0.9% | 1.29R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 45.59 | ↓1029.14 | -0.7314 | 2.86 | **LOSS** |
| 569 | HD | 06-30 13:30 | 06-30 13:50 | 369.53 | 367.69 | 12 | 4434.36 | -22.08 | -0.5% | 0.71R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 74.85 | ↓369.56 | 0.0419 | 1.77 | **LOSS** |
| 570 | PM | 06-30 13:30 | 06-30 13:55 | 182.04 | 181.26 | 15 | 2730.6 | -11.7 | -0.43% | 0.61R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 72.53 | ↓181.36 | 0.0279 | 2.03 | **LOSS** |
| 571 | AMZN | 06-30 13:35 | 06-30 13:55 | 223.54 | 222.27 | 62 | 13859.48 | -78.74 | -0.57% | 0.5R | 20m | market | early-reversal | trend | breakout | neutral | 81.68 | ↓222.76 | 1.0565 | 1.55 | **LOSS** |
| 572 | TEAM | 06-30 13:35 | 06-30 13:45 | 204.27 | 201.98 | 23 | 4698.21 | -52.67 | -1.12% | 1.4R | 10m | market | stop-loss | mixed | momentum-pilot | neutral | 67.19 | ↓203.53 | -0.5153 | 1.57 | **LOSS** |
| 573 | MA | 06-30 13:50 | 06-30 14:35 | 555.8 | 553.74 | 6 | 3334.8 | -12.36 | -0.37% | 0.53R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 82.88 | ↓554.33 | 0.0668 | 2.09 | **LOSS** |
| 574 | CYBR | 06-30 13:55 | 06-30 15:00 | 402.57 | 402.22 | 12 | 4830.84 | -4.2 | -0.09% | 0.13R | 65m | market | breakeven-stop | mixed | momentum-pilot | neutral | 54.88 | ↓400.71 | -0.6919 | 3.12 | **LOSS** |
| 575 | CELH | 06-30 15:00 | 06-30 15:20 | 47.24 | 47.03 | 294 | 13888.56 | -61.74 | -0.44% | 0.43R | 20m | market | early-reversal | trend | breakout | neutral | 75.94 | ↑46.66 | 0.3782 | 1.33 | **LOSS** |
| 576 | GE | 06-30 15:25 | 06-30 17:10 | 256.76 | 257.18 | 19 | 4878.44 | +7.98 | +0.16% | 0.23R | 105m | market | timeout | trend | momentum-pilot | neutral | 51.22 | ↑255.67 | 0.0067 | 1.87 | **WIN** |
| 577 | INTC | 07-01 13:30 | 07-01 13:50 | 22.47 | 22.36 | 218 | 4898.46 | -23.98 | -0.49% | 0.7R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 70.73 | ↓22.42 | -0.0245 | 2.35 | **LOSS** |
| 578 | LULU | 07-01 13:30 | 07-01 14:40 | 239.27 | 242.47 | 7 | 3349.78 | +22.4 | +1.34% | 1.91R | 70m | market | trim-profit-target | trend | momentum-pilot | neutral | 92.96 | ↑238.94 | 0.3419 | 3.45 | **WIN** |
| 579 | LULU | 07-01 13:30 | 07-01 15:15 | 239.27 | 243.46 | 7 | 3349.78 | +29.33 | +1.75% | 2.5R | 105m | market | timeout | trend | momentum-pilot | neutral | 92.96 | ↑238.94 | 0.3419 | 3.45 | **WIN** |
| 580 | MCD | 07-01 13:35 | 07-01 13:55 | 294.56 | 293.3 | 11 | 3240.16 | -13.86 | -0.43% | 0.61R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 88.62 | ↓293.78 | 0.3274 | 1.83 | **LOSS** |
| 581 | TGT | 07-01 13:40 | 07-01 14:00 | 100.55 | 100.18 | 139 | 13976.45 | -51.43 | -0.37% | 0.48R | 20m | market | early-reversal | trend | breakout | neutral | 81.53 | ↑99.85 | 0.3703 | 1.85 | **LOSS** |
| 582 | CRM | 07-01 14:00 | 07-01 14:25 | 273.36 | 272.5 | 17 | 4647.12 | -14.62 | -0.31% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 64.73 | ↑271.77 | 0.1571 | 1.92 | **LOSS** |
| 583 | TGT | 07-01 14:10 | 07-01 15:10 | 101.18 | 103.75 | 159 | 16087.62 | +408.63 | +2.54% | 2.49R | 60m | market | profit-target | trend | trend | cleanTrend | 75.8 | ↑100.15 | 0.6252 | 1.05 | **WIN** |
| 584 | SBUX | 07-01 14:15 | 07-01 16:00 | 93.23 | 95.16 | 150 | 13984.5 | +289.5 | +2.07% | 2.76R | 105m | market | timeout | trend | trend | neutral | 77.49 | ↑92.66 | 0.3386 | 1.29 | **WIN** |
| 585 | MRK | 07-01 14:20 | 07-01 15:30 | 79.93 | 82.2 | 174 | 13907.82 | +394.98 | +2.84% | 4.06R | 70m | market | profit-target | trend | trend | neutral | 71.57 | ↑79.37 | 0.1942 | 1 | **WIN** |
| 586 | UPS | 07-01 14:20 | 07-01 15:50 | 102.74 | 105.25 | 136 | 13972.64 | +341.36 | +2.44% | 3.49R | 90m | market | profit-target | trend | trend | neutral | 79.55 | ↑101.83 | 0.4156 | 1.71 | **WIN** |
| 587 | PEP | 07-01 14:20 | 07-01 15:30 | 133.93 | 135.53 | 52 | 13928.72 | +83.2 | +1.19% | 1.7R | 70m | market | trim-profit-target | trend | trend | neutral | 78.19 | ↑133.35 | 0.5374 | 1.15 | **WIN** |
| 588 | PEP | 07-01 14:20 | 07-01 16:05 | 133.93 | 136.18 | 52 | 13928.72 | +117 | +1.68% | 2.4R | 105m | market | timeout | trend | trend | neutral | 78.19 | ↑133.35 | 0.5374 | 1.15 | **WIN** |
| 589 | HD | 07-01 14:25 | 07-01 16:10 | 371.08 | 379.26 | 37 | 13729.96 | +302.66 | +2.2% | 3.14R | 105m | market | timeout | trend | trend | neutral | 72.26 | ↑367.75 | 0.8124 | 1.17 | **WIN** |
| 590 | SLB | 07-01 14:30 | 07-01 15:25 | 33.98 | 34.88 | 144 | 4893.12 | +129.6 | +2.65% | 3.79R | 55m | market | profit-target | trend | momentum-pilot | neutral | 57.84 | ↑33.7 | 0.0077 | 2.06 | **WIN** |
| 591 | REGN | 07-01 14:35 | 07-01 15:50 | 529.95 | 545.93 | 26 | 13778.7 | +415.48 | +3.02% | 4.14R | 75m | market | profit-target | trend | trend | neutral | 63.48 | ↑526.36 | 1.5171 | 2.12 | **WIN** |
| 592 | ABBV | 07-01 14:40 | 07-01 16:25 | 188.31 | 190.35 | 74 | 13934.94 | +150.96 | +1.08% | 1.54R | 105m | market | timeout | trend | trend | neutral | 72.85 | ↑185.72 | 0.6286 | 1.09 | **WIN** |
| 593 | INTC | 07-01 14:45 | 07-01 16:30 | 22.68 | 23.12 | 618 | 14016.24 | +271.92 | +1.94% | 2.31R | 105m | market | timeout | trend | trend | neutral | 66.39 | ↑22.48 | 0.0697 | 2.69 | **WIN** |
| 594 | ELF | 07-01 14:55 | 07-01 16:20 | 128.34 | 128.27 | 109 | 13989.06 | -7.63 | -0.05% | 0.05R | 85m | market | breakeven-stop | trend | trend | neutral | 71.03 | ↑127.52 | 0.7983 | 2.72 | **LOSS** |
| 595 | AAPL | 07-02 13:30 | 07-02 14:10 | 209.75 | 212.26 | 11 | 4824.25 | +27.61 | +1.2% | 1.71R | 40m | market | trim-profit-target | trend | momentum-pilot | neutral | 67.23 | ↑209.27 | 0.0828 | 3.01 | **WIN** |
| 596 | AAPL | 07-02 13:30 | 07-02 15:15 | 209.75 | 212.06 | 12 | 4824.25 | +27.72 | +1.1% | 1.57R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.23 | ↑209.27 | 0.0828 | 3.01 | **WIN** |
| 597 | ZS | 07-02 13:30 | 07-02 15:15 | 309.41 | 309.77 | 15 | 4641.15 | +5.4 | +0.12% | 0.17R | 105m | market | timeout | trend | momentum-pilot | neutral | 69.85 | ↑308.53 | 0.1312 | 7.19 | **WIN** |
| 598 | MO | 07-02 13:30 | 07-02 14:50 | 58.68 | 58.71 | 47 | 2757.96 | +1.41 | +0.05% | 0.07R | 80m | market | breakeven-stop | trend | momentum-pilot | thinChop | 74.39 | ↓58.55 | 0.0331 | 2.01 | **WIN** |
| 599 | ABBV | 07-02 13:35 | 07-02 14:45 | 191.54 | 191.28 | 25 | 4788.5 | -6.5 | -0.14% | 0.2R | 70m | market | stagnation | trend | momentum-pilot | neutral | 81.08 | ↓190.76 | 0.2364 | 1.47 | **LOSS** |
| 600 | MS | 07-02 13:40 | 07-02 14:00 | 142.17 | 141.44 | 34 | 4833.78 | -24.82 | -0.51% | 0.73R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.56 | ↓141.69 | 0.0806 | 1.69 | **LOSS** |
| 601 | NET | 07-02 13:50 | 07-02 15:10 | 185.75 | 185.02 | 26 | 4829.5 | -18.98 | -0.39% | 0.35R | 80m | market | early-reversal | mixed | momentum-pilot | neutral | 63.23 | ↓184.65 | -0.1602 | 1.88 | **LOSS** |
| 602 | NKE | 07-02 14:00 | 07-02 14:40 | 74.55 | 73.63 | 187 | 13940.85 | -172.04 | -1.23% | 1.08R | 40m | market | trailing-stop | trend | trend | neutral | 70.02 | ↓74.16 | 0.3446 | 1.21 | **LOSS** |
| 603 | BLK | 07-02 14:00 | 07-02 15:10 | 1061.87 | 1060.71 | 2 | 2123.74 | -2.32 | -0.11% | 0.16R | 70m | market | stagnation | trend | momentum-pilot | thinChop | 66.9 | ↑1056.8 | 3.0217 | 1.72 | **LOSS** |
| 604 | AMGN | 07-02 14:00 | 07-02 14:20 | 296.51 | 294.43 | 47 | 13935.97 | -97.76 | -0.7% | 0.89R | 20m | market | early-reversal | trend | trend | neutral | 77.29 | ↑293.18 | 1.2048 | 1.04 | **LOSS** |
| 605 | ISRG | 07-02 14:00 | 07-02 14:30 | 547.52 | 543.72 | 25 | 13688 | -95 | -0.69% | 0.79R | 30m | market | early-reversal | trend | trend | neutral | 77.34 | ↓542.25 | 2.2685 | 1.06 | **LOSS** |
| 606 | ORCL | 07-02 14:05 | 07-02 15:50 | 219.9 | 224.91 | 22 | 4837.8 | +110.22 | +2.28% | 3.08R | 105m | market | timeout | trend | momentum-pilot | neutral | 59.56 | ↑218.51 | -0.0505 | 1.91 | **WIN** |
| 607 | PYPL | 07-02 14:05 | 07-02 15:50 | 76.28 | 76.82 | 183 | 13959.24 | +98.82 | +0.71% | 1.01R | 105m | market | timeout | trend | trend | neutral | 70.33 | ↑75.68 | 0.1044 | 1.11 | **WIN** |
| 608 | ABNB | 07-02 14:15 | 07-02 14:35 | 136.07 | 135.47 | 36 | 4898.52 | -21.6 | -0.44% | 0.63R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 57.05 | ↑135.11 | -0.1332 | 2.56 | **LOSS** |
| 609 | AI | 07-02 14:15 | 07-02 14:55 | 25.04 | 25.46 | 281 | 14097.52 | +118.02 | +1.68% | 1.3R | 40m | market | trim-profit-target | trend | trend | neutral | 78.38 | ↑24.8 | 0.1037 | 1.45 | **WIN** |
| 610 | AI | 07-02 14:15 | 07-02 15:50 | 25.04 | 25.66 | 282 | 14097.52 | +174.84 | +2.48% | 1.92R | 95m | market | profit-target | trend | trend | neutral | 78.38 | ↑24.8 | 0.1037 | 1.45 | **WIN** |
| 611 | ANET | 07-02 14:15 | 07-02 14:40 | 99.88 | 99.46 | 140 | 13983.2 | -58.8 | -0.42% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 67.35 | ↑99.07 | 0.1645 | 1.34 | **LOSS** |
| 612 | TXN | 07-02 14:25 | 07-02 16:10 | 213.95 | 215.07 | 65 | 13906.75 | +72.8 | +0.52% | 0.74R | 105m | market | timeout | trend | trend | neutral | 73.05 | ↑212.03 | 0.5492 | 1.72 | **WIN** |
| 613 | MU | 07-02 14:30 | 07-02 16:15 | 121.42 | 122.84 | 32 | 3885.44 | +45.44 | +1.17% | 0.87R | 105m | market | timeout | trend | momentum-pilot | neutral | 53.91 | ↑120.15 | -0.1664 | 6.71 | **WIN** |
| 614 | MDB | 07-02 14:30 | 07-02 14:50 | 207.29 | 205.52 | 22 | 4560.38 | -38.94 | -0.85% | 0.9R | 20m | market | stop-loss | mixed | momentum-pilot | neutral | 56.47 | ↓206.7 | -0.2703 | 1.73 | **LOSS** |
| 615 | MRVL | 07-02 14:30 | 07-02 16:15 | 78.52 | 78.94 | 178 | 13976.56 | +74.76 | +0.53% | 0.39R | 105m | market | timeout | trend | trend | neutral | 73.37 | ↑77.43 | 0.4526 | 1.16 | **WIN** |
| 616 | LULU | 07-02 14:35 | 07-02 14:40 | 249.66 | 241.34 | 55 | 13731.3 | -457.6 | -3.33% | 2.23R | 5m | market | stop-loss | breakout | trend | neutral | 65.48 | ↓248.71 | 0.675 | 1.72 | **LOSS** |
| 617 | AMD | 07-02 14:55 | 07-02 16:40 | 138.45 | 139 | 101 | 13983.45 | +55.55 | +0.4% | 0.43R | 105m | market | timeout | trend | trend | neutral | 72.92 | ↑136.41 | 0.4506 | 1.18 | **WIN** |
| 618 | COIN | 07-02 14:55 | 07-02 15:45 | 347.97 | 347.48 | 22 | 7655.34 | -10.78 | -0.14% | 0.1R | 50m | market | stagnation | trend | trend | noisyHighBeta | 60.83 | ↑342.75 | 2.4477 | 1.08 | **LOSS** |
| 619 | SMCI | 07-02 15:00 | 07-02 15:50 | 48.12 | 47.94 | 159 | 7651.08 | -28.62 | -0.37% | 0.28R | 50m | market | stagnation | trend | trend | noisyHighBeta | 62.99 | ↑47.62 | 0.0645 | 1.43 | **LOSS** |
| 620 | FDX | 07-02 15:10 | 07-02 16:50 | 237.62 | 237.24 | 58 | 13781.96 | -22.04 | -0.16% | 0.23R | 100m | market | stagnation | trend | trend | neutral | 74.85 | ↑235.9 | 0.4785 | 1.58 | **LOSS** |
| 621 | INTC | 07-02 15:15 | 07-02 16:40 | 22.11 | 22.06 | 214 | 4731.54 | -10.7 | -0.23% | 0.16R | 85m | market | breakeven-stop | mixed | momentum-pilot | neutral | 65.45 | ↑21.91 | -0.1441 | 1.65 | **LOSS** |
| 622 | HD | 07-02 15:25 | 07-02 15:50 | 373.36 | 372.16 | 11 | 4106.96 | -13.2 | -0.32% | 0.46R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 67.75 | ↑371.72 | -0.3764 | 2.5 | **LOSS** |
| 623 | LOW | 07-02 15:25 | 07-02 15:50 | 228.38 | 227.65 | 20 | 4567.6 | -14.6 | -0.32% | 0.46R | 25m | market | early-reversal | mixed | momentum-pilot | neutral | 65.85 | ↑227.3 | -0.2946 | 3.25 | **LOSS** |
| 624 | AVGO | 07-03 13:30 | 07-03 14:35 | 271.93 | 273.9 | 8 | 4622.81 | +15.76 | +0.72% | 1.03R | 65m | market | trim-profit-target | trend | momentum-pilot | neutral | 70.33 | ↑271.42 | -0.1682 | 3.25 | **WIN** |
| 625 | AVGO | 07-03 13:30 | 07-03 15:15 | 271.93 | 274.75 | 9 | 4622.81 | +25.38 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | neutral | 70.33 | ↑271.42 | -0.1682 | 3.25 | **WIN** |
| 626 | BA | 07-03 13:30 | 07-03 14:30 | 213.3 | 215.83 | 8 | 3626.1 | +20.24 | +1.19% | 1.7R | 60m | market | trim-profit-target | trend | momentum-pilot | neutral | 81.51 | ↑212.79 | 0.1431 | 2.35 | **WIN** |
| 627 | BA | 07-03 13:30 | 07-03 15:15 | 213.3 | 216.05 | 9 | 3626.1 | +24.75 | +1.29% | 1.84R | 105m | market | timeout | trend | momentum-pilot | neutral | 81.51 | ↑212.79 | 0.1431 | 2.35 | **WIN** |
| 628 | MRVL | 07-03 13:30 | 07-03 13:50 | 74.94 | 74.46 | 62 | 4646.28 | -29.76 | -0.64% | 0.67R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 68.77 | ↓74.87 | -0.2265 | 1.59 | **LOSS** |
| 629 | C | 07-03 13:30 | 07-03 15:15 | 87.23 | 88.27 | 39 | 3401.97 | +40.56 | +1.19% | 1.7R | 105m | market | timeout | trend | momentum-pilot | neutral | 86.84 | ↑87.1 | 0.1129 | 1.94 | **WIN** |
| 630 | TMO | 07-03 13:30 | 07-03 13:50 | 430.96 | 429.56 | 11 | 4740.56 | -15.4 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 63 | ↓430.73 | 0.3431 | 1.74 | **LOSS** |
| 631 | MA | 07-03 13:35 | 07-03 15:20 | 564.03 | 567.68 | 5 | 2820.15 | +18.25 | +0.65% | 0.93R | 105m | market | timeout | trend | momentum-pilot | neutral | 85.13 | ↑562.85 | 0.7398 | 1.56 | **WIN** |
| 632 | F | 07-03 13:35 | 07-03 13:55 | 11.91 | 11.84 | 1173 | 13970.43 | -82.11 | -0.59% | 0.84R | 20m | market | early-reversal | trend | breakout | neutral | 77.55 | ↓11.84 | 0.0234 | 2.18 | **LOSS** |
| 633 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 51 | 9645.12 | +121.89 | +1.26% | 1.52R | 105m | market | timeout | trend | breakout | neutral | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 634 | KLAC | 07-03 14:00 | 07-03 14:50 | 926.3 | 924.33 | 5 | 4631.5 | -9.85 | -0.21% | 0.3R | 50m | market | stagnation | trend | momentum-pilot | neutral | 62.67 | ↑921.24 | 0.641 | 1.97 | **LOSS** |
| 635 | AMD | 07-03 14:10 | 07-03 14:30 | 139.01 | 138.16 | 35 | 4865.35 | -29.75 | -0.61% | 0.56R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 54.59 | ↓138.22 | -0.11 | 1.55 | **LOSS** |
| 636 | MDB | 07-03 14:10 | 07-03 14:35 | 212.54 | 211.29 | 65 | 13815.1 | -81.25 | -0.59% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 79.14 | ↓211.58 | 1.9351 | 1.05 | **LOSS** |
| 637 | ARM | 07-03 14:25 | 07-03 14:45 | 156.52 | 155.82 | 20 | 3130.4 | -14 | -0.45% | 0.42R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.98 | ↑155.74 | 0.4305 | 2.22 | **LOSS** |
| 638 | CYBR | 07-03 14:50 | 07-03 16:35 | 397.18 | 397.79 | 35 | 13901.3 | +21.35 | +0.15% | 0.19R | 105m | market | timeout | trend | trend | neutral | 67.44 | ↑395.91 | 2.4365 | 1.71 | **WIN** |
| 639 | SNOW | 07-03 15:15 | 07-03 15:50 | 222.61 | 221.64 | 21 | 4674.81 | -20.37 | -0.44% | 0.63R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 58.4 | ↑221.01 | 1.3913 | 1.56 | **LOSS** |
| 640 | ADSK | 07-07 13:30 | 07-07 13:50 | 319.14 | 317.8 | 8 | 2553.12 | -10.72 | -0.42% | 0.6R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 58.3 | ↓318.42 | 0.3587 | 1.74 | **LOSS** |
| 641 | META | 07-07 13:45 | 07-07 15:30 | 722.01 | 724.05 | 6 | 4332.06 | +12.24 | +0.28% | 0.4R | 105m | market | timeout | trend | momentum-pilot | neutral | 55.31 | ↑718.14 | 0.4042 | 3.38 | **WIN** |
| 642 | DELL | 07-07 14:00 | 07-07 14:20 | 126.91 | 126.49 | 110 | 13960.1 | -46.2 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | neutral | 71 | ↑125.88 | 0.2141 | 1.42 | **LOSS** |
| 643 | PATH | 07-07 14:00 | 07-07 14:20 | 13.25 | 13.14 | 319 | 4226.75 | -35.09 | -0.83% | 0.87R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 42.11 | ↓13.16 | -0.0659 | 4.3 | **LOSS** |
| 644 | FDX | 07-07 14:05 | 07-07 14:25 | 241.98 | 239.76 | 20 | 4839.6 | -44.4 | -0.92% | 1.31R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 55.67 | ↓241.19 | 0.0071 | 1.87 | **LOSS** |
| 645 | FTNT | 07-07 14:30 | 07-07 15:45 | 107.17 | 107 | 131 | 14039.27 | -22.27 | -0.16% | 0.15R | 75m | market | stagnation | trend | trend | neutral | 67.54 | ↑106.14 | 0.3527 | 1.47 | **LOSS** |
| 646 | UBER | 07-07 14:40 | 07-07 15:00 | 97.12 | 96.29 | 144 | 13985.28 | -119.52 | -0.85% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 78.9 | ↑95.89 | 0.918 | 2.36 | **LOSS** |
| 647 | RBLX | 07-07 15:20 | 07-07 17:05 | 107.16 | 107.79 | 130 | 13930.8 | +81.9 | +0.59% | 0.84R | 105m | market | timeout | trend | trend | neutral | 72.37 | ↑105.59 | 0.7377 | 1.25 | **WIN** |
| 648 | CRWD | 07-08 13:30 | 07-08 14:20 | 506.57 | 505.39 | 6 | 3039.42 | -7.08 | -0.23% | 0.33R | 50m | market | stagnation | trend | momentum-pilot | neutral | 89.77 | ↓506.61 | 0.4936 | 2.24 | **LOSS** |
| 649 | ISRG | 07-08 13:30 | 07-08 13:50 | 537.84 | 536.24 | 8 | 4302.72 | -12.8 | -0.3% | 0.43R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 56.03 | ↓536.56 | -0.7497 | 3.62 | **LOSS** |
| 650 | UNH | 07-08 13:35 | 07-08 14:05 | 305.5 | 304 | 11 | 3360.5 | -16.5 | -0.49% | 0.7R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 84.68 | ↓304.96 | 0.4477 | 1.8 | **LOSS** |
| 651 | IBM | 07-08 13:45 | 07-08 14:05 | 294.83 | 293.9 | 9 | 2653.47 | -8.37 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 76.67 | ↓294.02 | 0.4391 | 1.52 | **LOSS** |
| 652 | NVO | 07-08 14:20 | 07-08 16:05 | 69.89 | 70.18 | 200 | 13978 | +58 | +0.41% | 0.59R | 105m | market | timeout | trend | trend | neutral | 78.57 | ↑69.52 | 0.1782 | 1.26 | **WIN** |
| 653 | QCOM | 07-08 14:30 | 07-08 15:45 | 160.05 | 160.12 | 30 | 4801.5 | +2.1 | +0.04% | 0.06R | 75m | market | breakeven-stop | trend | momentum-pilot | neutral | 72.82 | ↑159.3 | 0.3477 | 1.52 | **WIN** |
| 654 | TXN | 07-08 14:30 | 07-08 16:15 | 217.11 | 218.47 | 64 | 13895.04 | +87.04 | +0.63% | 0.79R | 105m | market | timeout | trend | trend | neutral | 79.87 | ↑215.92 | 0.8367 | 1.64 | **WIN** |
| 655 | RIVN | 07-08 14:30 | 07-08 16:15 | 13.06 | 13.16 | 1074 | 14026.44 | +107.4 | +0.77% | 0.62R | 105m | market | timeout | trend | trend | neutral | 78.79 | ↑12.93 | 0.0926 | 1.14 | **WIN** |
| 656 | MRK | 07-08 14:30 | 07-08 14:55 | 82.2 | 81.87 | 170 | 13974 | -56.1 | -0.4% | 0.41R | 25m | market | early-reversal | trend | trend | neutral | 74.18 | ↑81.52 | 0.2055 | 1.66 | **LOSS** |
| 657 | MU | 07-08 14:35 | 07-08 15:25 | 124.4 | 124.3 | 90 | 11196 | -9 | -0.08% | 0.06R | 50m | market | stagnation | trend | trend | neutral | 70.83 | ↑122.98 | 1.1044 | 1.04 | **LOSS** |
| 658 | KLAC | 07-08 15:00 | 07-08 15:20 | 920.9 | 916.68 | 5 | 4604.5 | -21.1 | -0.46% | 0.51R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58.75 | ↓916.61 | 2.4579 | 2.11 | **LOSS** |
| 659 | SBUX | 07-08 15:00 | 07-08 16:45 | 95.03 | 95.09 | 147 | 13969.41 | +8.82 | +0.06% | 0.09R | 105m | market | timeout | trend | trend | neutral | 65.33 | ↑94.53 | 0.3282 | 1.69 | **WIN** |
| 660 | LRCX | 07-08 15:05 | 07-08 15:25 | 99.88 | 99.24 | 140 | 13983.2 | -89.6 | -0.64% | 0.91R | 20m | market | early-reversal | trend | trend | neutral | 64.24 | ↓99.26 | 0.4218 | 2.7 | **LOSS** |
| 661 | LOW | 07-08 15:05 | 07-08 15:25 | 226.69 | 225.06 | 61 | 13828.09 | -99.43 | -0.72% | 1.03R | 20m | market | early-reversal | trend | trend | neutral | 77.33 | ↓225.28 | 0.5327 | 2.06 | **LOSS** |
| 662 | GM | 07-08 15:05 | 07-08 15:20 | 52.86 | 52.3 | 264 | 13955.04 | -147.84 | -1.06% | 1.51R | 15m | market | stop-loss | trend | trend | neutral | 74.65 | ↓52.42 | 0.264 | 1.4 | **LOSS** |
| 663 | HD | 07-08 15:10 | 07-08 16:00 | 369.8 | 369.25 | 37 | 13682.6 | -20.35 | -0.15% | 0.21R | 50m | market | stagnation | trend | trend | neutral | 61.98 | ↑367.72 | 0.6383 | 1.3 | **LOSS** |
| 664 | ASML | 07-09 13:30 | 07-09 14:15 | 798.68 | 796.25 | 6 | 4792.08 | -14.58 | -0.3% | 0.43R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 71.07 | ↓796.51 | -0.1252 | 1.61 | **LOSS** |
| 665 | JNJ | 07-09 13:30 | 07-09 13:50 | 156.7 | 155.85 | 17 | 2663.9 | -14.45 | -0.54% | 0.77R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 74.8 | ↓156.29 | 0.1815 | 1.96 | **LOSS** |
| 666 | AXP | 07-09 13:45 | 07-09 14:05 | 320.43 | 319.11 | 15 | 4806.45 | -19.8 | -0.41% | 0.59R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 63.09 | ↓319.57 | -0.1068 | 1.64 | **LOSS** |
| 667 | TEAM | 07-09 14:00 | 07-09 14:20 | 221.89 | 220.63 | 62 | 13757.18 | -78.12 | -0.57% | 0.7R | 20m | market | early-reversal | trend | trend | neutral | 72.2 | ↓220.79 | 0.6823 | 1.46 | **LOSS** |
| 668 | CYBR | 07-09 14:00 | 07-09 14:35 | 400.46 | 398.16 | 34 | 13615.64 | -78.2 | -0.57% | 0.81R | 35m | market | early-reversal | trend | trend | neutral | 77.32 | ↓400.06 | 1.4555 | 1.49 | **LOSS** |
| 669 | COIN | 07-09 15:20 | 07-09 16:00 | 365.1 | 362.6 | 38 | 13873.8 | -95 | -0.68% | 0.61R | 40m | market | early-reversal | trend | trend | neutral | 70.58 | ↑359.43 | 2.2588 | 1.34 | **LOSS** |
| 670 | AXP | 07-10 13:30 | 07-10 15:15 | 320.79 | 323.27 | 15 | 4811.85 | +37.2 | +0.77% | 1.1R | 105m | market | timeout | trend | momentum-pilot | neutral | 74.91 | ↑319.7 | 0.0415 | 2.31 | **WIN** |
| 671 | JPM | 07-10 13:45 | 07-10 15:30 | 284.83 | 286.81 | 12 | 3417.96 | +23.76 | +0.7% | 1R | 105m | market | timeout | trend | momentum-pilot | neutral | 92.21 | ↑284.09 | 0.1516 | 1.79 | **WIN** |
| 672 | SBUX | 07-10 14:00 | 07-10 14:50 | 95.16 | 95.04 | 46 | 4377.36 | -5.52 | -0.13% | 0.15R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 54.35 | ↓94.47 | -0.1428 | 2.07 | **LOSS** |
| 673 | AMAT | 07-10 14:15 | 07-10 16:00 | 198.27 | 198.84 | 70 | 13878.9 | +39.9 | +0.29% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.63 | ↑197.32 | 0.4532 | 1.33 | **WIN** |
| 674 | MRK | 07-10 14:20 | 07-10 15:20 | 84.6 | 84.44 | 165 | 13959 | -26.4 | -0.19% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.45 | ↑83.9 | 0.129 | 1.28 | **LOSS** |
| 675 | VRTX | 07-10 14:25 | 07-10 15:20 | 482.47 | 481.66 | 29 | 13991.63 | -23.49 | -0.17% | 0.24R | 55m | market | stagnation | trend | trend | neutral | 67.54 | ↑479.83 | 1.8682 | 1.26 | **LOSS** |
| 676 | SLB | 07-10 14:30 | 07-10 14:50 | 36.92 | 36.68 | 380 | 14029.6 | -91.2 | -0.65% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 71.96 | ↑36.32 | 0.1619 | 1.37 | **LOSS** |
| 677 | HPE | 07-10 14:40 | 07-10 15:45 | 20.94 | 21.45 | 233 | 4879.02 | +118.83 | +2.44% | 3.49R | 65m | market | profit-target | trend | momentum-pilot | neutral | 64.1 | ↑20.84 | 0.0159 | 1.53 | **WIN** |
| 678 | FDX | 07-10 14:40 | 07-10 15:35 | 239.84 | 239.16 | 58 | 13910.72 | -39.44 | -0.28% | 0.4R | 55m | market | stagnation | trend | trend | neutral | 79.62 | ↑238.63 | 0.6261 | 1.32 | **LOSS** |
| 679 | RIVN | 07-10 14:50 | 07-10 15:15 | 13.42 | 13.36 | 1046 | 14037.32 | -62.76 | -0.45% | 0.4R | 25m | market | early-reversal | trend | trend | neutral | 58.72 | ↑13.31 | 0.0564 | 1.04 | **LOSS** |
| 680 | REGN | 07-10 15:25 | 07-10 15:50 | 565.47 | 560.59 | 24 | 13571.28 | -117.12 | -0.86% | 1.21R | 25m | market | stop-loss | trend | trend | neutral | 75.41 | ↓561.04 | 4.5426 | 1.37 | **LOSS** |
| 681 | NVDA | 07-11 13:30 | 07-11 14:50 | 165.08 | 166.95 | 14 | 4787.32 | +26.18 | +1.13% | 1.61R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 61.87 | ↑164.55 | -0.0683 | 4.29 | **WIN** |
| 682 | NVDA | 07-11 13:30 | 07-11 15:15 | 165.08 | 166.26 | 15 | 4787.32 | +17.7 | +0.71% | 1.01R | 105m | market | timeout | trend | momentum-pilot | neutral | 61.87 | ↓164.55 | -0.0683 | 4.29 | **WIN** |
| 683 | AMZN | 07-11 13:30 | 07-11 14:50 | 224.14 | 223.94 | 21 | 4706.94 | -4.2 | -0.09% | 0.13R | 80m | market | stagnation | trend | momentum-pilot | neutral | 78.96 | ↓223.98 | 0.0703 | 3.92 | **LOSS** |
| 684 | MDT | 07-11 13:35 | 07-11 14:25 | 90.08 | 89.91 | 46 | 4143.68 | -7.82 | -0.19% | 0.23R | 50m | market | stagnation | trend | momentum-pilot | neutral | 65.35 | ↓90.02 | -0.0739 | 5.7 | **LOSS** |
| 685 | MCD | 07-11 13:40 | 07-11 15:00 | 301.29 | 299.9 | 9 | 2711.61 | -12.51 | -0.46% | 0.66R | 80m | market | early-reversal | trend | momentum-pilot | thinChop | 54.92 | ↓299.58 | -0.1436 | 1.7 | **LOSS** |
| 686 | TSM | 07-11 13:55 | 07-11 14:15 | 231.29 | 230.57 | 21 | 4857.09 | -15.12 | -0.31% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 73.1 | ↓230.61 | 0.1686 | 4.51 | **LOSS** |
| 687 | GE | 07-11 14:05 | 07-11 15:00 | 255.58 | 255.17 | 54 | 13801.32 | -22.14 | -0.16% | 0.19R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 688 | RBLX | 07-11 14:15 | 07-11 14:55 | 107.63 | 106.96 | 129 | 13884.27 | -86.43 | -0.62% | 0.65R | 40m | market | early-reversal | trend | trend | neutral | 79.91 | ↑106.43 | 0.6966 | 1.01 | **LOSS** |
| 689 | SLB | 07-11 14:25 | 07-11 14:45 | 37.11 | 36.99 | 378 | 14027.58 | -45.36 | -0.32% | 0.38R | 20m | market | early-reversal | trend | trend | neutral | 68.5 | ↑36.71 | 0.0688 | 2.13 | **LOSS** |
| 690 | F | 07-14 13:30 | 07-14 13:50 | 11.87 | 11.79 | 411 | 4878.57 | -32.88 | -0.67% | 0.96R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58 | ↓11.83 | -0.0092 | 1.52 | **LOSS** |
| 691 | CRM | 07-14 13:45 | 07-14 14:05 | 261.82 | 259.87 | 53 | 13876.46 | -103.35 | -0.74% | 1.06R | 20m | market | early-reversal | trend | breakout | neutral | 80.11 | ↓260.45 | 0.2308 | 1.47 | **LOSS** |
| 692 | RBLX | 07-14 14:10 | 07-14 15:55 | 109.24 | 110.6 | 127 | 13873.48 | +172.72 | +1.24% | 0.94R | 105m | market | timeout | trend | trend | neutral | 77.64 | ↑108.5 | 0.6415 | 1.08 | **WIN** |
| 693 | ABNB | 07-14 14:30 | 07-14 16:15 | 138.07 | 138.77 | 101 | 13945.07 | +70.7 | +0.51% | 0.61R | 105m | market | timeout | trend | trend | neutral | 75.78 | ↑137.21 | 0.4993 | 1.39 | **WIN** |
| 694 | MDB | 07-14 14:35 | 07-14 15:05 | 204.53 | 203.7 | 23 | 4704.19 | -19.09 | -0.41% | 0.44R | 30m | market | early-reversal | mixed | momentum-pilot | neutral | 68.24 | ↓203.99 | -0.4263 | 4.04 | **LOSS** |
| 695 | PLTR | 07-14 14:40 | 07-14 15:20 | 146.24 | 145.58 | 33 | 4825.92 | -21.78 | -0.45% | 0.31R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 63.83 | ↑145.11 | 0.8914 | 1.71 | **LOSS** |
| 696 | ANET | 07-14 15:00 | 07-14 15:20 | 109.51 | 108.12 | 128 | 14017.28 | -177.92 | -1.27% | 1.27R | 20m | market | stop-loss | breakout | breakout | neutral | 76.58 | ↑107.83 | 0.0267 | 1.87 | **LOSS** |
| 697 | FTNT | 07-14 15:00 | 07-14 15:40 | 102.67 | 102.26 | 136 | 13963.12 | -55.76 | -0.4% | 0.57R | 40m | market | early-reversal | trend | trend | neutral | 76.13 | ↑101.79 | 0.7646 | 2.11 | **LOSS** |
| 698 | ARM | 07-14 15:15 | 07-14 17:00 | 142.73 | 143.97 | 20 | 2854.6 | +24.8 | +0.87% | 1.24R | 105m | market | timeout | mixed | momentum-pilot | neutral | 59.97 | ↑142.34 | -0.9448 | 1.76 | **WIN** |
| 699 | SHOP | 07-14 15:25 | 07-14 17:10 | 115.44 | 117.74 | 121 | 13968.24 | +278.3 | +1.99% | 2.84R | 105m | market | timeout | trend | trend | neutral | 74.59 | ↑114.03 | 0.7618 | 1.53 | **WIN** |
| 700 | AAPL | 07-15 13:30 | 07-15 13:50 | 210.52 | 209.74 | 23 | 4841.96 | -17.94 | -0.37% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 65.96 | ↓209.93 | 0.013 | 1.94 | **LOSS** |
| 701 | LLY | 07-15 13:30 | 07-15 14:05 | 803.32 | 796.64 | 4 | 3213.28 | -26.72 | -0.83% | 1.19R | 35m | market | stop-loss | trend | momentum-pilot | neutral | 91.37 | ↓802.06 | 0.5786 | 1.9 | **LOSS** |
| 702 | NET | 07-15 13:45 | 07-15 14:05 | 183.99 | 182.94 | 26 | 4783.74 | -27.3 | -0.57% | 0.58R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 57.5 | ↓183.09 | -0.334 | 2.7 | **LOSS** |
| 703 | PM | 07-15 13:55 | 07-15 14:15 | 181.22 | 180.46 | 27 | 4892.94 | -20.52 | -0.42% | 0.6R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 60 | ↓180.64 | 0.0504 | 1.96 | **LOSS** |
| 704 | NKE | 07-15 14:00 | 07-15 14:20 | 72.79 | 72.52 | 67 | 4876.93 | -18.09 | -0.37% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 66.78 | ↓72.48 | 0.0586 | 3.38 | **LOSS** |
| 705 | NVDA | 07-15 14:10 | 07-15 15:00 | 171.08 | 170.79 | 28 | 4790.24 | -8.12 | -0.17% | 0.15R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 39.9 | ↓170.64 | 0.9612 | 2.1 | **LOSS** |
| 706 | PLTR | 07-15 14:10 | 07-15 14:40 | 150.16 | 149.31 | 93 | 13964.88 | -79.05 | -0.57% | 0.45R | 30m | market | early-reversal | trend | trend | neutral | 56.84 | ↓148.88 | 0.379 | 1.06 | **LOSS** |
| 707 | ELF | 07-15 14:10 | 07-15 14:35 | 108.44 | 107.33 | 129 | 13988.76 | -143.19 | -1.02% | 0.94R | 25m | market | early-reversal | breakout | trend | neutral | 62.1 | ↓107.68 | 0.0045 | 1.05 | **LOSS** |
| 708 | AI | 07-15 14:10 | 07-15 14:30 | 27.55 | 27.02 | 513 | 14133.15 | -271.89 | -1.92% | 1.4R | 20m | market | stop-loss | breakout | trend | neutral | 69.68 | ↓27.15 | 0.0663 | 1 | **LOSS** |
| 709 | AVGO | 07-15 14:15 | 07-15 14:50 | 282.01 | 280.61 | 49 | 13818.49 | -68.6 | -0.5% | 0.41R | 35m | market | early-reversal | trend | trend | neutral | 79.7 | ↓280.15 | 1.3428 | 1.71 | **LOSS** |
| 710 | NVO | 07-16 13:30 | 07-16 13:55 | 67.93 | 67.64 | 72 | 4890.96 | -20.88 | -0.43% | 0.61R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 67.73 | ↓67.77 | -0.0212 | 2.71 | **LOSS** |
| 711 | DIS | 07-16 13:30 | 07-16 13:50 | 120.24 | 119.8 | 23 | 2765.52 | -10.12 | -0.37% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 67.22 | ↓119.9 | 0.049 | 1.88 | **LOSS** |
| 712 | CYBR | 07-16 13:30 | 07-16 14:10 | 381.08 | 376.71 | 33 | 12575.64 | -144.21 | -1.15% | 1.64R | 40m | market | stop-loss | trend | breakout | neutral | 81.55 | ↓380.54 | 0.4322 | 4.51 | **LOSS** |
| 713 | MRK | 07-16 13:30 | 07-16 14:05 | 82.4 | 82.12 | 59 | 4861.6 | -16.52 | -0.34% | 0.49R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 70.78 | ↓82.11 | 0.0696 | 3.38 | **LOSS** |
| 714 | GM | 07-16 13:30 | 07-16 14:35 | 53.21 | 53.07 | 91 | 4842.11 | -12.74 | -0.26% | 0.37R | 65m | market | stagnation | trend | momentum-pilot | neutral | 57.73 | ↓53.06 | -0.0179 | 1.92 | **LOSS** |
| 715 | BLK | 07-16 14:00 | 07-16 15:05 | 1070.69 | 1069.84 | 13 | 13918.97 | -11.05 | -0.08% | 0.11R | 65m | market | stagnation | trend | trend | neutral | 71.16 | ↓1068.04 | 5.2027 | 4.63 | **LOSS** |
| 716 | GS | 07-16 14:10 | 07-16 14:30 | 704.53 | 696.1 | 5 | 3522.65 | -42.15 | -1.2% | 1.05R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 51.05 | ↓701.01 | -0.2762 | 1.57 | **LOSS** |
| 717 | SHOP | 07-16 14:15 | 07-16 14:50 | 114.56 | 117.54 | 29 | 3322.24 | +86.42 | +2.6% | 2.11R | 35m | market | profit-target | mixed | momentum-pilot | falseBreakoutProne | 43.68 | ↑113.98 | -0.4243 | 4.28 | **WIN** |
| 718 | LULU | 07-16 14:15 | 07-16 14:35 | 227.35 | 224.22 | 61 | 13868.35 | -190.93 | -1.38% | 1.31R | 20m | market | stop-loss | trend | trend | neutral | 71.95 | ↓225.87 | 0.7546 | 1.09 | **LOSS** |
| 719 | AMGN | 07-16 14:30 | 07-16 15:15 | 297.62 | 295.63 | 46 | 13690.52 | -91.54 | -0.67% | 0.96R | 45m | market | early-reversal | trend | trend | neutral | 74.3 | ↓295.4 | 0.9508 | 1.12 | **LOSS** |
| 720 | PM | 07-16 14:45 | 07-16 16:30 | 182.15 | 182.69 | 26 | 4735.9 | +14.04 | +0.3% | 0.43R | 105m | market | timeout | trend | momentum-pilot | neutral | 52.91 | ↑180.93 | 0.2003 | 1.53 | **WIN** |
| 721 | SNOW | 07-17 13:30 | 07-17 13:55 | 212.97 | 212.19 | 22 | 4685.34 | -17.16 | -0.37% | 0.53R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 64.86 | ↓213.02 | 0.1771 | 1.51 | **LOSS** |
| 722 | MCD | 07-17 13:30 | 07-17 14:35 | 300.52 | 300.22 | 16 | 4808.32 | -4.8 | -0.1% | 0.14R | 65m | market | stagnation | trend | momentum-pilot | neutral | 67.27 | ↓300.66 | 0.2705 | 2.36 | **LOSS** |
| 723 | DIS | 07-17 13:30 | 07-17 15:15 | 120.57 | 121.55 | 23 | 2773.11 | +22.54 | +0.81% | 1.16R | 105m | market | timeout | trend | momentum-pilot | thinChop | 64.29 | ↑120.31 | 0.0974 | 2.24 | **WIN** |
| 724 | NVDA | 07-17 13:50 | 07-17 14:15 | 173.36 | 172.63 | 28 | 4854.08 | -20.44 | -0.42% | 0.6R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 57.28 | ↑171.9 | 0.3402 | 2.29 | **LOSS** |
| 725 | LRCX | 07-17 13:50 | 07-17 14:50 | 100.17 | 100.98 | 24 | 4808.16 | +19.44 | +0.81% | 0.86R | 60m | market | trim-profit-target | trend | momentum-pilot | neutral | 53.53 | ↑99.43 | 0.0387 | 1.49 | **WIN** |
| 726 | LRCX | 07-17 13:50 | 07-17 15:30 | 100.17 | 100.16 | 24 | 4808.16 | -0.24 | -0.01% | 0.01R | 100m | market | breakeven-stop | trend | momentum-pilot | neutral | 53.53 | ↓99.43 | 0.0387 | 1.49 | **LOSS** |
| 727 | BLK | 07-17 13:55 | 07-17 14:25 | 1101.79 | 1097.4 | 12 | 13221.48 | -52.68 | -0.4% | 0.57R | 30m | market | early-reversal | trend | breakout | neutral | 79.98 | ↓1093.61 | 5.4488 | 1.57 | **LOSS** |
| 728 | MO | 07-17 14:10 | 07-17 14:20 | 59.42 | 58.52 | 235 | 13963.7 | -211.5 | -1.51% | 1.82R | 10m | market | stop-loss | trend | trend | neutral | 64.72 | ↓58.91 | 0.0011 | 4.54 | **LOSS** |
| 729 | OKTA | 07-17 14:25 | 07-17 16:10 | 92.45 | 92.44 | 151 | 13959.95 | -1.51 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | neutral | 73.38 | ↑91.94 | 0.2966 | 1.39 | **LOSS** |
| 730 | ELF | 07-17 14:35 | 07-17 15:05 | 110.26 | 109.46 | 126 | 13892.76 | -100.8 | -0.73% | 0.85R | 30m | market | early-reversal | trend | trend | neutral | 68.39 | ↓109.54 | 0.6311 | 1.28 | **LOSS** |
| 731 | ADBE | 07-17 14:40 | 07-17 16:25 | 363.63 | 365.47 | 13 | 4727.19 | +23.92 | +0.51% | 0.73R | 105m | market | timeout | trend | momentum-pilot | neutral | 54.79 | ↑361.57 | -0.1845 | 2.05 | **WIN** |
| 732 | SHOP | 07-17 14:40 | 07-17 16:25 | 123.08 | 124.98 | 113 | 13908.04 | +214.7 | +1.54% | 1.35R | 105m | market | timeout | trend | trend | neutral | 78.04 | ↑122.1 | 0.8956 | 1.01 | **WIN** |
| 733 | FTNT | 07-17 14:55 | 07-17 15:45 | 104.83 | 104.75 | 133 | 13942.39 | -10.64 | -0.08% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 74.81 | ↑104.11 | 0.3245 | 1.43 | **LOSS** |
| 734 | C | 07-17 15:00 | 07-17 15:55 | 91.48 | 92.24 | 26 | 4848.44 | +19.76 | +0.83% | 1.19R | 55m | market | trim-profit-target | trend | momentum-pilot | neutral | 59.86 | ↑90.75 | 0.2664 | 1.56 | **WIN** |
| 735 | C | 07-17 15:00 | 07-17 16:45 | 91.48 | 92.43 | 27 | 4848.44 | +25.65 | +1.04% | 1.49R | 105m | market | timeout | trend | momentum-pilot | neutral | 59.86 | ↑90.75 | 0.2664 | 1.56 | **WIN** |
| 736 | BLK | 07-17 15:05 | 07-17 16:10 | 1101.55 | 1099.54 | 4 | 4406.2 | -8.04 | -0.18% | 0.22R | 65m | market | stagnation | trend | momentum-pilot | neutral | 73.4 | ↑1098.13 | 4.8937 | 2.47 | **LOSS** |
| 737 | PANW | 07-17 15:10 | 07-17 16:25 | 196.66 | 196.54 | 71 | 13962.86 | -8.52 | -0.06% | 0.09R | 75m | market | stagnation | trend | trend | neutral | 79.2 | ↑194.61 | 0.8084 | 2.36 | **LOSS** |
| 738 | MRVL | 07-17 15:10 | 07-17 16:40 | 72.22 | 72.82 | 96 | 13938.46 | +57.6 | +0.83% | 0.99R | 90m | market | trim-profit-target | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 739 | MRVL | 07-17 15:10 | 07-17 16:55 | 72.22 | 72.83 | 97 | 13938.46 | +59.17 | +0.84% | 1R | 105m | market | timeout | trend | trend | neutral | 68.35 | ↑71.23 | 0.3339 | 2.16 | **WIN** |
| 740 | PFE | 07-17 15:20 | 07-17 15:45 | 24.74 | 24.66 | 197 | 4873.78 | -15.76 | -0.32% | 0.46R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 59.05 | ↑24.62 | 0.0258 | 2.49 | **LOSS** |
| 741 | QCOM | 07-18 13:30 | 07-18 13:50 | 153.84 | 153.36 | 18 | 2769.12 | -8.64 | -0.31% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 70.06 | ↓153.5 | -0.0468 | 1.75 | **LOSS** |
| 742 | LRCX | 07-18 13:30 | 07-18 13:50 | 101.54 | 100.98 | 48 | 4873.92 | -26.88 | -0.55% | 0.79R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 68.93 | ↓101.32 | 0.0224 | 2.9 | **LOSS** |
| 743 | CVX | 07-18 14:10 | 07-18 14:25 | 153.15 | 151.53 | 91 | 13936.65 | -147.42 | -1.06% | 1.51R | 15m | market | stop-loss | trend | trend | neutral | 75.08 | ↓152.03 | 0.4351 | 2.35 | **LOSS** |
| 744 | CELH | 07-18 14:20 | 07-18 14:55 | 44.44 | 44.2 | 109 | 4843.96 | -26.16 | -0.54% | 0.59R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 44.83 | ↓44.06 | -0.0514 | 2.42 | **LOSS** |
| 745 | INTC | 07-18 14:30 | 07-18 16:00 | 23.2 | 23.35 | 94 | 4384.8 | +14.1 | +0.65% | 0.45R | 90m | market | trim-profit-target | mixed | momentum-pilot | neutral | 55.05 | ↑23.17 | 0.0421 | 1.57 | **WIN** |
| 746 | INTC | 07-18 14:30 | 07-18 16:15 | 23.2 | 23.24 | 95 | 4384.8 | +3.8 | +0.17% | 0.12R | 105m | market | timeout | mixed | momentum-pilot | neutral | 55.05 | ↓23.17 | 0.0421 | 1.57 | **WIN** |
| 747 | MRVL | 07-18 14:50 | 07-18 16:25 | 73.08 | 74.11 | 95 | 13958.28 | +97.85 | +1.41% | 1.23R | 95m | market | trim-profit-target | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 748 | MRVL | 07-18 14:50 | 07-18 16:35 | 73.08 | 73.97 | 96 | 13958.28 | +85.44 | +1.22% | 1.06R | 105m | market | timeout | trend | trend | neutral | 63.89 | ↑72.36 | 0.1546 | 1.08 | **WIN** |
| 749 | ZS | 07-18 14:50 | 07-18 16:30 | 288.21 | 287.73 | 16 | 4611.36 | -7.68 | -0.17% | 0.24R | 100m | market | stagnation | trend | momentum-pilot | neutral | 63.21 | ↑286.33 | 0.1199 | 1.87 | **LOSS** |
| 750 | DELL | 07-18 15:15 | 07-18 16:30 | 129.74 | 130.61 | 53 | 13882.18 | +46.11 | +0.67% | 0.67R | 75m | market | trim-profit-target | trend | trend | neutral | 66.92 | ↑128.34 | 1.3348 | 1.05 | **WIN** |
| 751 | DELL | 07-18 15:15 | 07-18 17:00 | 129.74 | 131.23 | 54 | 13882.18 | +80.46 | +1.15% | 1.15R | 105m | market | timeout | trend | trend | neutral | 66.92 | ↑128.34 | 1.3348 | 1.05 | **WIN** |
| 752 | AMD | 07-21 13:30 | 07-21 13:50 | 158.98 | 158.18 | 28 | 4451.44 | -22.4 | -0.5% | 0.71R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 72.6 | ↓158.67 | 0.0311 | 3.73 | **LOSS** |
| 753 | XOM | 07-21 13:30 | 07-21 13:50 | 108.59 | 107.86 | 45 | 4886.55 | -32.85 | -0.67% | 0.96R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 68.62 | ↓108.2 | -0.0154 | 2.58 | **LOSS** |
| 754 | CVX | 07-21 13:40 | 07-21 14:05 | 150.89 | 149.36 | 32 | 4828.48 | -48.96 | -1.01% | 0.81R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 70.78 | ↓150.9 | 0.3454 | 1.78 | **LOSS** |
| 755 | MU | 07-21 13:50 | 07-21 15:35 | 114.78 | 115.41 | 34 | 3902.52 | +21.42 | +0.55% | 0.59R | 105m | market | timeout | trend | momentum-pilot | neutral | 51.04 | ↑113.94 | 0.1033 | 1.73 | **WIN** |
| 756 | SHOP | 07-21 14:00 | 07-21 14:20 | 128.88 | 127.5 | 109 | 14047.92 | -150.42 | -1.07% | 1.49R | 20m | market | stop-loss | trend | trend | neutral | 79.41 | ↓127.84 | 0.3979 | 1.93 | **LOSS** |
| 757 | CRWD | 07-21 14:00 | 07-21 14:20 | 488.15 | 482.8 | 28 | 13668.2 | -149.8 | -1.1% | 1.08R | 20m | market | early-reversal | trend | breakout | neutral | 77.39 | ↓482.72 | 2.7767 | 1.57 | **LOSS** |
| 758 | ISRG | 07-21 14:00 | 07-21 14:45 | 522.47 | 520.87 | 26 | 13584.22 | -41.6 | -0.31% | 0.44R | 45m | market | early-reversal | trend | trend | neutral | 76.53 | ↓519.03 | 1.2696 | 1.22 | **LOSS** |
| 759 | ROST | 07-21 14:10 | 07-21 14:45 | 132.9 | 132.14 | 105 | 13954.5 | -79.8 | -0.57% | 0.81R | 35m | market | early-reversal | trend | trend | neutral | 79.95 | ↓131.88 | 0.6041 | 1.29 | **LOSS** |
| 760 | MS | 07-21 14:35 | 07-21 16:20 | 141.77 | 141.71 | 98 | 13893.46 | -5.88 | -0.04% | 0.06R | 105m | market | timeout | trend | trend | neutral | 64.84 | ↓141.12 | 0.2576 | 1.28 | **LOSS** |
| 761 | MO | 07-21 14:50 | 07-21 16:35 | 58.71 | 58.8 | 237 | 13914.27 | +21.33 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 78.4 | ↑58.38 | 0.1524 | 1.21 | **WIN** |
| 762 | ABT | 07-21 15:05 | 07-21 15:35 | 125.94 | 125.52 | 111 | 13979.34 | -46.62 | -0.33% | 0.47R | 30m | market | early-reversal | trend | trend | neutral | 74.37 | ↑124.48 | 0.3598 | 1.12 | **LOSS** |
| 763 | NOW | 07-22 13:30 | 07-22 13:50 | 971.96 | 959.32 | 2 | 1943.92 | -25.28 | -1.3% | 1.86R | 20m | market | stop-loss | trend | momentum-pilot | thinChop | 64.2 | ↓968.82 | 0.5104 | 2.09 | **LOSS** |
| 764 | UNH | 07-22 13:30 | 07-22 15:15 | 283.29 | 285.64 | 14 | 3966.06 | +32.9 | +0.83% | 1.19R | 105m | market | timeout | mixed | momentum-pilot | neutral | 60.63 | ↑282.9 | -0.1712 | 2.6 | **WIN** |
| 765 | LLY | 07-22 13:30 | 07-22 15:15 | 769.6 | 773.06 | 6 | 4617.6 | +20.76 | +0.45% | 0.64R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.46 | ↓767.37 | -0.2563 | 5.87 | **WIN** |
| 766 | WMT | 07-22 13:30 | 07-22 14:05 | 96.3 | 95.82 | 28 | 2696.4 | -13.44 | -0.5% | 0.71R | 35m | market | early-reversal | trend | momentum-pilot | thinChop | 62.5 | ↓96.11 | -0.0411 | 3.19 | **LOSS** |
| 767 | TXN | 07-22 13:30 | 07-22 13:40 | 216.03 | 213.16 | 22 | 4752.66 | -63.14 | -1.33% | 1.9R | 10m | market | stop-loss | mixed | momentum-pilot | neutral | 51.9 | ↓215.22 | -0.2715 | 1.85 | **LOSS** |
| 768 | SBUX | 07-22 13:30 | 07-22 14:15 | 94.06 | 95.22 | 26 | 4891.12 | +30.16 | +1.23% | 1.76R | 45m | market | trim-profit-target | trend | momentum-pilot | neutral | 60.34 | ↑93.75 | -0.1104 | 4.86 | **WIN** |
| 769 | SBUX | 07-22 13:30 | 07-22 15:15 | 94.06 | 95.18 | 26 | 4891.12 | +29.12 | +1.19% | 1.7R | 105m | market | timeout | trend | momentum-pilot | neutral | 60.34 | ↑93.75 | -0.1104 | 4.86 | **WIN** |
| 770 | FDX | 07-22 13:30 | 07-22 14:10 | 228.16 | 227.17 | 21 | 4791.36 | -20.79 | -0.43% | 0.61R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 64.34 | ↓227.66 | -0.2154 | 2.16 | **LOSS** |
| 771 | COP | 07-22 13:30 | 07-22 15:15 | 91.72 | 92.19 | 53 | 4861.16 | +24.91 | +0.51% | 0.73R | 105m | market | timeout | trend | momentum-pilot | neutral | 64.65 | ↓91.51 | -0.057 | 2.07 | **WIN** |
| 772 | SLB | 07-22 13:30 | 07-22 15:15 | 33.86 | 33.98 | 145 | 4909.7 | +17.4 | +0.35% | 0.5R | 105m | market | timeout | trend | momentum-pilot | neutral | 66 | ↓33.72 | -0.0416 | 2.03 | **WIN** |
| 773 | TMUS | 07-22 13:30 | 07-22 14:05 | 234.33 | 236 | 5 | 2343.3 | +8.35 | +0.71% | 1.01R | 35m | market | trim-profit-target | trend | momentum-pilot | thinChop | 81.39 | ↓234.05 | 0.028 | 1.69 | **WIN** |
| 774 | TMUS | 07-22 13:30 | 07-22 14:45 | 234.33 | 234.3 | 5 | 2343.3 | -0.15 | -0.01% | 0.01R | 75m | market | trailing-stop | trend | momentum-pilot | thinChop | 81.39 | ↓234.05 | 0.028 | 1.69 | **LOSS** |
| 775 | VZ | 07-22 13:35 | 07-22 14:35 | 43.03 | 42.95 | 105 | 4518.15 | -8.4 | -0.19% | 0.27R | 60m | market | breakeven-stop | trend | momentum-pilot | neutral | 65.83 | ↓42.88 | -0.0423 | 1.72 | **LOSS** |
| 776 | MA | 07-22 13:45 | 07-22 14:05 | 560.33 | 558.18 | 4 | 2241.32 | -8.6 | -0.38% | 0.54R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 62.48 | ↓557.43 | 0.2033 | 1.92 | **LOSS** |
| 777 | T | 07-22 13:45 | 07-22 14:10 | 27.65 | 27.57 | 101 | 2792.65 | -8.08 | -0.29% | 0.41R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 81.08 | ↓27.52 | 0.0162 | 1.52 | **LOSS** |
| 778 | MCD | 07-22 13:55 | 07-22 14:10 | 299.87 | 297.38 | 9 | 2698.83 | -22.41 | -0.83% | 1.19R | 15m | market | stop-loss | trend | momentum-pilot | thinChop | 76.96 | ↓298.62 | 0.1383 | 1.73 | **LOSS** |
| 779 | INTC | 07-22 14:05 | 07-22 14:25 | 23.47 | 23.32 | 209 | 4905.23 | -31.35 | -0.64% | 0.53R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 60.22 | ↓23.31 | 0.0164 | 2.14 | **LOSS** |
| 780 | TEAM | 07-22 14:05 | 07-22 15:50 | 199.92 | 200.86 | 69 | 13794.48 | +64.86 | +0.47% | 0.35R | 105m | market | timeout | trend | breakout | neutral | 73.72 | ↑197.41 | 0.6597 | 2.13 | **WIN** |
| 781 | SHOP | 07-22 15:10 | 07-22 15:30 | 125.18 | 124.26 | 36 | 4506.48 | -33.12 | -0.73% | 0.85R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 73.12 | ↓124.34 | -0.9327 | 1.78 | **LOSS** |
| 782 | NVDA | 07-23 13:30 | 07-23 13:50 | 170.05 | 168.92 | 20 | 3401 | -22.6 | -0.66% | 0.94R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 89.36 | ↓169.67 | 0.4128 | 7.17 | **LOSS** |
| 783 | DIS | 07-23 13:30 | 07-23 14:20 | 122.21 | 122.07 | 22 | 2688.62 | -3.08 | -0.11% | 0.16R | 50m | market | stagnation | trend | momentum-pilot | thinChop | 73.13 | ↓121.95 | 0.0589 | 1.85 | **LOSS** |
| 784 | COP | 07-23 13:30 | 07-23 13:50 | 93.81 | 93.52 | 52 | 4878.12 | -15.08 | -0.31% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.53 | ↓93.71 | 0.0483 | 1.74 | **LOSS** |
| 785 | JPM | 07-23 13:35 | 07-23 13:55 | 294.49 | 293.53 | 16 | 4711.84 | -15.36 | -0.33% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 78.33 | ↓293.9 | 0.1463 | 1.6 | **LOSS** |
| 786 | WDAY | 07-23 13:35 | 07-23 15:20 | 240.42 | 242.39 | 14 | 3365.88 | +27.58 | +0.82% | 1.17R | 105m | market | timeout | trend | momentum-pilot | neutral | 82.52 | ↑239.46 | 0.1919 | 1.71 | **WIN** |
| 787 | CAT | 07-23 13:40 | 07-23 14:00 | 425.63 | 423.04 | 32 | 13620.16 | -82.88 | -0.61% | 0.87R | 20m | market | early-reversal | trend | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 788 | REGN | 07-23 14:05 | 07-23 15:15 | 572.32 | 571.63 | 24 | 13735.68 | -16.56 | -0.12% | 0.12R | 70m | market | stagnation | trend | trend | neutral | 73.75 | ↑568.91 | 3.3638 | 1.09 | **LOSS** |
| 789 | XOM | 07-23 14:10 | 07-23 14:45 | 109.52 | 109.15 | 127 | 13909.04 | -46.99 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 790 | HPE | 07-23 14:15 | 07-23 15:30 | 21 | 20.98 | 666 | 13986 | -13.32 | -0.1% | 0.09R | 75m | market | breakeven-stop | trend | trend | neutral | 75.86 | ↑20.86 | 0.1216 | 1.28 | **LOSS** |
| 791 | UPS | 07-23 14:15 | 07-23 15:05 | 102.39 | 102.11 | 137 | 14027.43 | -38.36 | -0.27% | 0.39R | 50m | market | stagnation | trend | trend | neutral | 74.69 | ↓101.93 | 0.3672 | 1.32 | **LOSS** |
| 792 | LLY | 07-23 14:25 | 07-23 16:10 | 786.47 | 795.08 | 17 | 13369.99 | +146.37 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 71.16 | ↑782.79 | 2.6242 | 1.28 | **WIN** |
| 793 | CMG | 07-23 14:35 | 07-23 15:25 | 52.88 | 52.8 | 264 | 13960.32 | -21.12 | -0.15% | 0.19R | 50m | market | stagnation | trend | trend | neutral | 67.53 | ↑52.5 | 0.1457 | 1.01 | **LOSS** |
| 794 | INTU | 07-23 14:40 | 07-23 16:30 | 767.32 | 771.35 | 3 | 2301.96 | +12.09 | +0.53% | 0.76R | 110m | market | timeout | trend | momentum-pilot | thinChop | 48.95 | ↑762.92 | -0.1324 | 1.62 | **WIN** |
| 795 | LRCX | 07-23 14:50 | 07-23 15:10 | 97.29 | 96.83 | 42 | 4086.18 | -19.32 | -0.47% | 0.59R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 54.31 | ↓97.12 | -0.2833 | 1.67 | **LOSS** |
| 796 | SLB | 07-23 14:50 | 07-23 16:35 | 35.12 | 35.47 | 400 | 14048 | +140 | +1% | 1.08R | 105m | market | timeout | trend | trend | neutral | 72.97 | ↑34.89 | 0.1937 | 1.19 | **WIN** |
| 797 | BA | 07-23 15:05 | 07-23 16:30 | 231.62 | 233.85 | 22 | 10422.9 | +49.06 | +0.96% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 798 | BA | 07-23 15:05 | 07-23 16:50 | 231.62 | 233.86 | 23 | 10422.9 | +51.52 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 799 | SHOP | 07-23 15:10 | 07-23 16:00 | 121.41 | 121.21 | 40 | 4856.4 | -8 | -0.16% | 0.2R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 58.75 | ↑120.73 | -0.7531 | 2.14 | **LOSS** |
| 800 | AI | 07-23 15:20 | 07-23 16:10 | 28.89 | 28.81 | 170 | 4911.3 | -13.6 | -0.28% | 0.35R | 50m | market | stagnation | trend | momentum-pilot | neutral | 65.03 | ↓28.78 | 0.0547 | 1.56 | **LOSS** |
| 801 | GE | 07-24 13:30 | 07-24 15:15 | 264.91 | 269.04 | 18 | 4768.38 | +74.34 | +1.56% | 2.23R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.57 | ↑264.31 | 0.3071 | 1.82 | **WIN** |
| 802 | DELL | 07-24 13:30 | 07-24 14:10 | 127.9 | 127.94 | 38 | 4860.2 | +1.52 | +0.03% | 0.04R | 40m | market | breakeven-stop | trend | momentum-pilot | neutral | 65.28 | ↓127.76 | 0.0712 | 1.88 | **WIN** |
| 803 | BAC | 07-24 13:35 | 07-24 15:20 | 48.51 | 48.89 | 101 | 4899.51 | +38.38 | +0.78% | 1.11R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.43 | ↑48.4 | 0.0268 | 1.49 | **WIN** |
| 804 | MRVL | 07-24 13:35 | 07-24 13:55 | 73.67 | 73.2 | 66 | 4862.22 | -31.02 | -0.64% | 0.91R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 66.79 | ↓73.43 | 0.1171 | 2.29 | **LOSS** |
| 805 | LLY | 07-24 13:45 | 07-24 14:05 | 804 | 799.54 | 6 | 4824 | -26.76 | -0.55% | 0.79R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 66.8 | ↓803.04 | 1.0387 | 2.8 | **LOSS** |
| 806 | WMT | 07-24 13:50 | 07-24 14:55 | 96.33 | 96.27 | 29 | 2793.57 | -1.74 | -0.06% | 0.09R | 65m | market | stagnation | trend | momentum-pilot | thinChop | 73.68 | ↑95.7 | 0.0613 | 1.53 | **LOSS** |
| 807 | DIS | 07-24 13:55 | 07-24 14:20 | 123.37 | 122.78 | 22 | 2714.14 | -12.98 | -0.48% | 0.69R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 61.87 | ↓122.94 | 0.0223 | 1.63 | **LOSS** |
| 808 | F | 07-24 14:05 | 07-24 14:25 | 11.42 | 11.37 | 427 | 4876.34 | -21.35 | -0.44% | 0.63R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 76.19 | ↑11.33 | -0.0056 | 1.9 | **LOSS** |
| 809 | CVX | 07-24 14:25 | 07-24 15:20 | 154.09 | 154 | 90 | 13868.1 | -8.1 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 70.82 | ↑153.15 | 0.2875 | 1.06 | **LOSS** |
| 810 | SMCI | 07-24 14:55 | 07-24 15:45 | 52.34 | 52.13 | 267 | 13974.78 | -56.07 | -0.4% | 0.35R | 50m | market | stagnation | trend | trend | neutral | 66.67 | ↑51.74 | 0.0607 | 1.02 | **LOSS** |
| 811 | MU | 07-24 15:00 | 07-24 15:30 | 112.61 | 111.83 | 99 | 11148.39 | -77.22 | -0.69% | 0.78R | 30m | market | early-reversal | trend | trend | neutral | 73.68 | ↑111.43 | 0.6602 | 3.45 | **LOSS** |
| 812 | ARM | 07-24 15:05 | 07-24 15:30 | 161.2 | 160.68 | 56 | 9027.2 | -29.12 | -0.32% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 73.63 | ↑159.51 | 0.3803 | 3.11 | **LOSS** |
| 813 | URI | 07-24 15:05 | 07-24 16:05 | 864.3 | 863.11 | 16 | 13828.8 | -19.04 | -0.14% | 0.15R | 60m | market | stagnation | trend | trend | neutral | 71.8 | ↑851.75 | 16.19 | 1.02 | **LOSS** |
| 814 | TJX | 07-25 13:30 | 07-25 13:55 | 126.91 | 126.53 | 22 | 2792.02 | -8.36 | -0.3% | 0.43R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 68.01 | ↓126.81 | 0.0624 | 3.18 | **LOSS** |
| 815 | TSM | 07-25 13:45 | 07-25 14:40 | 242.49 | 244.76 | 10 | 4849.8 | +22.7 | +0.94% | 1.34R | 55m | market | trim-profit-target | trend | momentum-pilot | neutral | 53.79 | ↑241.96 | 0.0959 | 2.61 | **WIN** |
| 816 | TSM | 07-25 13:45 | 07-25 15:30 | 242.49 | 244.71 | 10 | 4849.8 | +22.2 | +0.92% | 1.31R | 105m | market | timeout | trend | momentum-pilot | neutral | 53.79 | ↑241.96 | 0.0959 | 2.61 | **WIN** |
| 817 | GOOG | 07-25 13:45 | 07-25 14:10 | 195.17 | 194.26 | 25 | 4879.25 | -22.75 | -0.47% | 0.61R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 63.38 | ↑193.72 | -0.1537 | 1.55 | **LOSS** |
| 818 | NVDA | 07-25 13:55 | 07-25 14:45 | 174.37 | 174.13 | 28 | 4882.36 | -6.72 | -0.14% | 0.2R | 50m | market | stagnation | trend | momentum-pilot | neutral | 61.54 | ↑173.69 | 0.0492 | 3.03 | **LOSS** |
| 819 | ORCL | 07-25 14:05 | 07-25 14:25 | 244.48 | 243.55 | 20 | 4889.6 | -18.6 | -0.38% | 0.54R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 71.02 | ↑243.16 | 0.1842 | 2.24 | **LOSS** |
| 820 | SHOP | 07-25 14:15 | 07-25 15:10 | 124.58 | 124.4 | 112 | 13952.96 | -20.16 | -0.14% | 0.19R | 55m | market | breakeven-stop | trend | trend | neutral | 78.14 | ↑123.78 | 0.5741 | 1.33 | **LOSS** |
| 821 | RBLX | 07-25 14:20 | 07-25 15:10 | 121.69 | 121.13 | 114 | 13872.66 | -63.84 | -0.46% | 0.35R | 50m | market | early-reversal | trend | trend | neutral | 74.2 | ↑120.8 | 0.6144 | 1.69 | **LOSS** |
| 822 | RIVN | 07-25 14:45 | 07-25 15:40 | 14.21 | 14.24 | 987 | 14025.27 | +29.61 | +0.21% | 0.18R | 55m | market | trailing-stop | trend | trend | neutral | 71.15 | ↑14.05 | 0.129 | 1.3 | **WIN** |
| 823 | TSLA | 07-25 15:20 | 07-25 16:40 | 318.12 | 321.26 | 13 | 8271.12 | +40.82 | +0.99% | 1.22R | 80m | market | trim-profit-target | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 824 | TSLA | 07-25 15:20 | 07-25 17:05 | 318.12 | 319.25 | 13 | 8271.12 | +14.69 | +0.36% | 0.44R | 105m | market | timeout | trend | trend | neutral | 77.37 | ↑312.28 | 2.5166 | 1.56 | **WIN** |
| 825 | META | 07-28 13:30 | 07-28 14:20 | 722.09 | 719.81 | 3 | 2166.27 | -6.84 | -0.32% | 0.46R | 50m | market | stagnation | trend | momentum-pilot | thinChop | 65.76 | ↓719.69 | -0.9873 | 4.97 | **LOSS** |
| 826 | ANET | 07-28 13:30 | 07-28 14:20 | 115.64 | 115.43 | 42 | 4856.88 | -8.82 | -0.18% | 0.26R | 50m | market | stagnation | trend | momentum-pilot | neutral | 63.45 | ↓115.4 | 0.0108 | 4.13 | **LOSS** |
| 827 | PATH | 07-28 13:55 | 07-28 14:35 | 12.28 | 12.19 | 376 | 4617.28 | -33.84 | -0.73% | 0.68R | 40m | market | early-reversal | mixed | momentum-pilot | neutral | 54.29 | ↓12.21 | -0.0074 | 2.1 | **LOSS** |
| 828 | NOW | 07-28 14:00 | 07-28 14:20 | 995.28 | 985.23 | 14 | 13933.92 | -140.7 | -1.01% | 1.19R | 20m | market | early-reversal | trend | trend | neutral | 76.16 | ↓989.16 | 5.3555 | 1.28 | **LOSS** |
| 829 | NET | 07-28 14:00 | 07-28 14:15 | 202.1 | 199.88 | 69 | 13944.9 | -153.18 | -1.1% | 1.39R | 15m | market | stop-loss | trend | trend | neutral | 73.82 | ↓200.56 | 0.4546 | 1.01 | **LOSS** |
| 830 | INTU | 07-28 14:00 | 07-28 14:20 | 793.66 | 789.53 | 3 | 2380.98 | -12.39 | -0.52% | 0.74R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 62.16 | ↓791.64 | 0.6075 | 1.82 | **LOSS** |
| 831 | ELF | 07-28 14:00 | 07-28 14:20 | 122.03 | 121.45 | 114 | 13911.42 | -66.12 | -0.48% | 0.59R | 20m | market | early-reversal | trend | breakout | neutral | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 832 | CELH | 07-28 15:05 | 07-28 16:50 | 47.21 | 47.15 | 206 | 9725.26 | -12.36 | -0.13% | 0.14R | 105m | market | stagnation | trend | breakout | neutral | 76.5 | ↑46.16 | 0.1319 | 1.32 | **LOSS** |
| 833 | ADBE | 07-29 13:30 | 07-29 13:50 | 372.4 | 370.92 | 7 | 2606.8 | -10.36 | -0.4% | 0.57R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 73.9 | ↓371.59 | 0.0984 | 4.78 | **LOSS** |
| 834 | QCOM | 07-29 13:30 | 07-29 14:40 | 162.65 | 162.18 | 30 | 4879.5 | -14.1 | -0.29% | 0.41R | 70m | market | stagnation | trend | momentum-pilot | neutral | 69.58 | ↓162.63 | 0.0077 | 1.67 | **LOSS** |
| 835 | SHOP | 07-29 13:30 | 07-29 13:50 | 127.52 | 126.8 | 26 | 3315.52 | -18.72 | -0.56% | 0.8R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 84.59 | ↓127.1 | 0.0768 | 3.12 | **LOSS** |
| 836 | NOW | 07-29 13:30 | 07-29 13:55 | 1004.51 | 997.88 | 12 | 12054.12 | -79.56 | -0.66% | 0.94R | 25m | market | early-reversal | trend | breakout | neutral | 77.04 | ↓1003.04 | 1.5204 | 1.4 | **LOSS** |
| 837 | GS | 07-29 13:30 | 07-29 14:30 | 728.06 | 726.56 | 5 | 3640.3 | -7.5 | -0.21% | 0.3R | 60m | market | stagnation | trend | momentum-pilot | neutral | 72.05 | ↓727.17 | -0.4747 | 1.95 | **LOSS** |
| 838 | KLAC | 07-29 13:30 | 07-29 14:20 | 932.62 | 927.56 | 5 | 4663.1 | -25.3 | -0.54% | 0.77R | 50m | market | early-reversal | trend | momentum-pilot | neutral | 60.25 | ↓931.02 | -0.6442 | 3.09 | **LOSS** |
| 839 | GOOG | 07-29 13:30 | 07-29 13:50 | 194.07 | 193.05 | 25 | 4851.75 | -25.5 | -0.53% | 0.76R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 76.66 | ↓193.91 | 0.0675 | 2.66 | **LOSS** |
| 840 | ADSK | 07-29 13:30 | 07-29 13:50 | 307.09 | 306.1 | 9 | 2763.81 | -8.91 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 79.94 | ↓306.48 | 0.1253 | 2.57 | **LOSS** |
| 841 | CL | 07-29 13:30 | 07-29 13:55 | 87.31 | 87.05 | 32 | 2793.92 | -8.32 | -0.3% | 0.43R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 74.24 | ↑87.05 | -0.0057 | 1.56 | **LOSS** |
| 842 | ABBV | 07-29 13:50 | 07-29 15:10 | 189.88 | 191.4 | 12 | 4747 | +18.24 | +0.8% | 1.14R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 64.77 | ↑189.11 | -0.0386 | 4.4 | **WIN** |
| 843 | ABBV | 07-29 13:50 | 07-29 15:35 | 189.88 | 191.37 | 13 | 4747 | +19.37 | +0.78% | 1.11R | 105m | market | timeout | trend | momentum-pilot | neutral | 64.77 | ↑189.11 | -0.0386 | 4.4 | **WIN** |
| 844 | PG | 07-29 13:50 | 07-29 14:30 | 157.33 | 156.31 | 26 | 4090.58 | -26.52 | -0.65% | 0.66R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 55.88 | ↓156.15 | -0.1041 | 1.76 | **LOSS** |
| 845 | LULU | 07-29 14:10 | 07-29 14:40 | 218.47 | 217.64 | 21 | 4587.87 | -17.43 | -0.38% | 0.54R | 30m | market | early-reversal | mixed | momentum-pilot | neutral | 67.81 | ↑217.01 | -0.3415 | 1.78 | **LOSS** |
| 846 | MU | 07-29 14:30 | 07-29 15:00 | 112.82 | 112.25 | 34 | 3835.88 | -19.38 | -0.51% | 0.45R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 66.74 | ↓112.23 | 0.4285 | 1.5 | **LOSS** |
| 847 | MRVL | 07-29 14:30 | 07-29 14:50 | 78.59 | 78.07 | 178 | 13989.02 | -92.56 | -0.66% | 0.51R | 20m | market | early-reversal | trend | trend | neutral | 79.14 | ↑77.86 | 0.7622 | 1.06 | **LOSS** |
| 848 | PM | 07-29 14:55 | 07-29 15:50 | 160.92 | 160.82 | 86 | 13839.12 | -8.6 | -0.06% | 0.09R | 55m | market | stagnation | trend | trend | neutral | 79.53 | ↑159.47 | 0.9375 | 1.46 | **LOSS** |
| 849 | TSM | 07-30 13:30 | 07-30 13:50 | 243.2 | 242.48 | 19 | 4620.8 | -13.68 | -0.3% | 0.43R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58.15 | ↓242.95 | 0.0158 | 1.78 | **LOSS** |
| 850 | JPM | 07-30 13:30 | 07-30 15:15 | 298.66 | 298.64 | 9 | 2687.94 | -0.18 | -0.01% | 0.01R | 105m | market | timeout | trend | momentum-pilot | thinChop | 70.25 | ↓298.2 | -0.116 | 2.73 | **LOSS** |
| 851 | GS | 07-30 13:30 | 07-30 13:50 | 735.6 | 732.25 | 6 | 4413.6 | -20.1 | -0.46% | 0.66R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 64.31 | ↓734.35 | 0.7012 | 1.5 | **LOSS** |
| 852 | ADP | 07-30 13:30 | 07-30 15:20 | 310.32 | 315.06 | 15 | 4654.8 | +71.1 | +1.53% | 1.72R | 110m | market | timeout | trend | momentum-pilot | neutral | 79.79 | ↑306.34 | 0.1159 | 1.56 | **WIN** |
| 853 | LOW | 07-30 13:30 | 07-30 13:45 | 231.11 | 228.62 | 14 | 3235.54 | -34.86 | -1.08% | 1.54R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 85.14 | ↓230.84 | 0.3317 | 2.23 | **LOSS** |
| 854 | C | 07-30 13:35 | 07-30 15:20 | 95.09 | 95.39 | 46 | 4374.14 | +13.8 | +0.32% | 0.46R | 105m | market | timeout | trend | momentum-pilot | neutral | 59.92 | ↑95 | -0.0397 | 1.51 | **WIN** |
| 855 | AMGN | 07-30 13:35 | 07-30 13:55 | 304.88 | 303.95 | 8 | 2439.04 | -7.44 | -0.31% | 0.44R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 70.9 | ↑304.43 | 0.2877 | 1.64 | **LOSS** |
| 856 | PLTR | 07-30 13:40 | 07-30 15:00 | 158.45 | 158.32 | 88 | 13943.6 | -11.44 | -0.08% | 0.09R | 80m | market | stagnation | trend | breakout | neutral | 73.47 | ↓158.1 | 0.2566 | 1.54 | **LOSS** |
| 857 | MU | 07-30 14:05 | 07-30 14:55 | 114.14 | 113.97 | 98 | 11185.72 | -16.66 | -0.15% | 0.14R | 50m | market | stagnation | trend | trend | neutral | 69.57 | ↑113.33 | 0.2261 | 1.05 | **LOSS** |
| 858 | CMG | 07-30 15:00 | 07-30 15:20 | 44.15 | 44.01 | 58 | 2560.7 | -8.12 | -0.32% | 0.46R | 20m | market | early-reversal | mixed | momentum-pilot | noisyHighBeta | 55.25 | ↓44.06 | -0.0926 | 2.82 | **LOSS** |
| 859 | U | 07-30 15:20 | 07-30 15:40 | 33.1 | 33.09 | 422 | 13968.2 | -4.22 | -0.03% | 0.04R | 20m | market | breakeven-stop | trend | trend | neutral | 67.29 | ↑32.78 | 0.1011 | 2.14 | **LOSS** |
| 860 | OKTA | 07-30 15:25 | 07-30 17:10 | 99.43 | 100.88 | 30 | 2982.9 | +43.5 | +1.46% | 2.09R | 105m | market | timeout | mixed | momentum-pilot | neutral | 82.26 | ↑98.66 | -0.1729 | 1.95 | **WIN** |
| 861 | SNOW | 07-31 13:35 | 07-31 14:35 | 223.05 | 227.32 | 10 | 4684.05 | +42.7 | +1.91% | 2.12R | 60m | market | trim-profit-target | breakout | momentum-pilot | neutral | 81.58 | ↑222.93 | -0.0539 | 1.5 | **WIN** |
| 862 | SNOW | 07-31 13:35 | 07-31 15:20 | 223.05 | 226.56 | 11 | 4684.05 | +38.61 | +1.57% | 1.74R | 105m | market | timeout | breakout | momentum-pilot | neutral | 81.58 | ↑222.93 | -0.0539 | 1.5 | **WIN** |
| 863 | COST | 07-31 13:40 | 07-31 14:55 | 934.17 | 941.09 | 1 | 1868.34 | +6.92 | +0.74% | 1.06R | 75m | market | trim-profit-target | mixed | momentum-pilot | thinChop | 63.92 | ↑930.98 | -0.7177 | 2.54 | **WIN** |
| 864 | COST | 07-31 13:40 | 07-31 15:25 | 934.17 | 940.57 | 1 | 1868.34 | +6.4 | +0.69% | 0.99R | 105m | market | timeout | mixed | momentum-pilot | thinChop | 63.92 | ↑930.98 | -0.7177 | 2.54 | **WIN** |
| 865 | AMD | 07-31 13:55 | 07-31 14:45 | 180.66 | 179.96 | 27 | 4877.82 | -18.9 | -0.39% | 0.28R | 50m | market | stagnation | trend | momentum-pilot | neutral | 66.92 | ↓180.04 | 0.1812 | 1.97 | **LOSS** |
| 866 | UBER | 07-31 14:00 | 07-31 15:45 | 87.84 | 88.66 | 55 | 4831.2 | +45.1 | +0.93% | 0.99R | 105m | market | timeout | trend | momentum-pilot | neutral | 66.39 | ↑87.31 | 0.0541 | 2.18 | **WIN** |
| 867 | HPE | 07-31 14:05 | 07-31 14:50 | 21.12 | 21.01 | 231 | 4878.72 | -25.41 | -0.52% | 0.63R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 74.29 | ↓21.02 | 0.0187 | 1.5 | **LOSS** |
| 868 | REGN | 07-31 14:45 | 07-31 15:10 | 558.41 | 553.15 | 8 | 4467.28 | -42.08 | -0.94% | 1.18R | 25m | market | stop-loss | trend | momentum-pilot | neutral | 71.96 | ↓555.49 | -0.7671 | 1.88 | **LOSS** |
| 869 | HD | 08-01 13:45 | 08-01 14:05 | 369.91 | 368.74 | 12 | 4438.92 | -14.04 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 52.99 | ↓368.57 | -0.0927 | 1.88 | **LOSS** |
| 870 | ABT | 08-01 14:00 | 08-01 14:20 | 127.45 | 126.73 | 38 | 4843.1 | -27.36 | -0.56% | 0.74R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 58.08 | ↓126.88 | -0.2307 | 2.27 | **LOSS** |
| 871 | FTNT | 08-04 13:30 | 08-04 14:40 | 97.9 | 98.71 | 25 | 4895 | +20.25 | +0.83% | 1.19R | 70m | market | trim-profit-target | trend | momentum-pilot | neutral | 57.64 | ↑97.46 | 0.0098 | 1.83 | **WIN** |
| 872 | FTNT | 08-04 13:30 | 08-04 15:15 | 97.9 | 98.33 | 25 | 4895 | +10.75 | +0.44% | 0.63R | 105m | market | timeout | trend | momentum-pilot | neutral | 57.64 | ↓97.46 | 0.0098 | 1.83 | **WIN** |
| 873 | DE | 08-04 13:45 | 08-04 15:30 | 504.65 | 509.27 | 9 | 4541.85 | +41.58 | +0.92% | 1.31R | 105m | market | timeout | trend | momentum-pilot | neutral | 58.08 | ↑502.27 | 0.1792 | 1.9 | **WIN** |
| 874 | INTC | 08-04 14:00 | 08-04 14:20 | 19.58 | 19.45 | 251 | 4914.58 | -32.63 | -0.66% | 0.94R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 52.22 | ↓19.45 | 0.0573 | 1.79 | **LOSS** |
| 875 | CAT | 08-04 14:10 | 08-04 15:35 | 434.16 | 433.93 | 32 | 13893.12 | -7.36 | -0.05% | 0.07R | 85m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 876 | ANET | 08-04 14:10 | 08-04 15:00 | 119.93 | 119.45 | 116 | 13911.88 | -55.68 | -0.4% | 0.36R | 50m | market | early-reversal | trend | trend | neutral | 78.53 | ↓119.19 | 0.8485 | 1.91 | **LOSS** |
| 877 | AI | 08-04 14:15 | 08-04 14:40 | 22.82 | 22.68 | 617 | 14079.94 | -86.38 | -0.61% | 0.46R | 25m | market | early-reversal | trend | trend | neutral | 72.73 | ↓22.74 | 0.0532 | 2.15 | **LOSS** |
| 878 | COP | 08-04 14:50 | 08-04 15:15 | 93.81 | 93.32 | 149 | 13977.69 | -73.01 | -0.52% | 0.74R | 25m | market | early-reversal | trend | trend | neutral | 68.08 | ↑93.14 | 0.1344 | 1.33 | **LOSS** |
| 879 | SLB | 08-04 14:50 | 08-04 15:40 | 32.99 | 32.87 | 122 | 4024.78 | -14.64 | -0.36% | 0.51R | 50m | market | early-reversal | mixed | momentum-pilot | neutral | 49.19 | ↓32.88 | -0.0601 | 2.01 | **LOSS** |
| 880 | EOG | 08-04 14:50 | 08-04 15:15 | 117.52 | 117.15 | 41 | 4818.32 | -15.17 | -0.31% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 58.84 | ↑116.89 | 0.0954 | 3.07 | **LOSS** |
| 881 | SBUX | 08-04 15:00 | 08-04 16:40 | 89.38 | 89.36 | 86 | 7686.68 | -1.72 | -0.02% | 0.02R | 100m | market | breakeven-stop | trend | trend | noisyHighBeta | 68.37 | ↑88.63 | 0.6848 | 1.34 | **LOSS** |
| 882 | ABT | 08-04 15:05 | 08-04 15:55 | 129.53 | 129.26 | 107 | 13859.71 | -28.89 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 69.76 | ↑128.57 | 0.4934 | 1.91 | **LOSS** |
| 883 | MRK | 08-04 15:15 | 08-04 17:00 | 79.36 | 79.4 | 61 | 4840.96 | +2.44 | +0.05% | 0.07R | 105m | market | timeout | trend | momentum-pilot | neutral | 67.48 | ↑78.97 | -0.067 | 1.59 | **WIN** |
| 884 | PYPL | 08-05 13:30 | 08-05 13:40 | 68.63 | 67.94 | 71 | 4872.73 | -48.99 | -1.01% | 1.44R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 68.27 | ↓68.46 | 0.0909 | 2.8 | **LOSS** |
| 885 | CAT | 08-05 13:30 | 08-05 13:50 | 436.9 | 430.54 | 11 | 4805.9 | -69.96 | -1.46% | 2.09R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 68.28 | ↓434.43 | -0.0462 | 2.94 | **LOSS** |
| 886 | BA | 08-05 13:30 | 08-05 14:20 | 223.94 | 223.48 | 16 | 3583.04 | -7.36 | -0.21% | 0.3R | 50m | market | stagnation | trend | momentum-pilot | neutral | 74.63 | ↓223.32 | 0.2449 | 1.68 | **LOSS** |
| 887 | RIVN | 08-05 13:40 | 08-05 14:00 | 12.46 | 12.32 | 394 | 4909.24 | -55.16 | -1.12% | 0.99R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 51.58 | ↓12.39 | -0.0333 | 1.69 | **LOSS** |
| 888 | KO | 08-05 14:30 | 08-05 14:55 | 69.32 | 69.07 | 40 | 2772.8 | -10 | -0.36% | 0.51R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 62.18 | ↓69.03 | 0.0465 | 2.28 | **LOSS** |
| 889 | LLY | 08-05 14:45 | 08-05 15:05 | 769.52 | 762.77 | 6 | 4617.12 | -40.5 | -0.88% | 1.26R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 50.6 | ↓763.43 | -0.5043 | 1.59 | **LOSS** |
| 890 | MRK | 08-05 14:45 | 08-05 15:00 | 80.78 | 80.11 | 173 | 13974.94 | -115.91 | -0.83% | 1.19R | 15m | market | stop-loss | trend | trend | neutral | 71.98 | ↓80.1 | 0.1629 | 1.03 | **LOSS** |
| 891 | F | 08-05 15:05 | 08-05 16:50 | 11.02 | 11.04 | 405 | 4463.1 | +8.1 | +0.18% | 0.26R | 105m | market | timeout | mixed | momentum-pilot | neutral | 50.91 | ↑10.99 | -0.0016 | 2.8 | **WIN** |
| 892 | BA | 08-05 15:10 | 08-05 16:55 | 223.13 | 224.55 | 14 | 3123.82 | +19.88 | +0.64% | 0.91R | 105m | market | timeout | mixed | momentum-pilot | neutral | 40.77 | ↑223.33 | -0.0947 | 2.88 | **WIN** |
| 893 | CVX | 08-05 15:20 | 08-05 17:05 | 151.28 | 152.22 | 32 | 4840.96 | +30.08 | +0.62% | 0.89R | 105m | market | timeout | trend | momentum-pilot | neutral | 71.37 | ↑150.6 | -0.0015 | 2.45 | **WIN** |
| 894 | UNH | 08-05 15:20 | 08-05 15:40 | 247.67 | 245.5 | 36 | 8916.12 | -78.12 | -0.88% | 0.81R | 20m | market | early-reversal | trend | breakout | neutral | 69.61 | ↑242.76 | 0.376 | 3.06 | **LOSS** |
| 895 | UPS | 08-05 15:20 | 08-05 17:05 | 86.07 | 86.68 | 163 | 14029.41 | +99.43 | +0.71% | 1.01R | 105m | market | timeout | trend | trend | neutral | 69.55 | ↑85.49 | 0.193 | 1.38 | **WIN** |
| 896 | NVDA | 08-06 13:30 | 08-06 14:20 | 178.04 | 177.67 | 24 | 4272.96 | -8.88 | -0.21% | 0.28R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 46.94 | ↓177.4 | -0.3256 | 5.52 | **LOSS** |
| 897 | CRWD | 08-06 13:30 | 08-06 13:50 | 445.96 | 444.21 | 31 | 13824.76 | -54.25 | -0.39% | 0.56R | 20m | market | early-reversal | trend | breakout | neutral | 75.16 | ↓445.26 | 0.3959 | 1.61 | **LOSS** |
| 898 | WMT | 08-06 13:30 | 08-06 15:15 | 100.06 | 102.63 | 24 | 2401.44 | +61.68 | +2.57% | 3.67R | 105m | market | profit-target | trend | momentum-pilot | thinChop | 82.5 | ↑99.87 | 0.0078 | 1.63 | **WIN** |
| 899 | TSLA | 08-06 13:35 | 08-06 14:55 | 312.34 | 316.78 | 6 | 4060.42 | +26.64 | +1.42% | 1.89R | 80m | market | trim-profit-target | trend | momentum-pilot | neutral | 64.27 | ↑310.46 | 0.2878 | 1.91 | **WIN** |
| 900 | TSLA | 08-06 13:35 | 08-06 15:20 | 312.34 | 318.39 | 7 | 4060.42 | +42.35 | +1.94% | 2.59R | 105m | market | timeout | trend | momentum-pilot | neutral | 64.27 | ↑310.46 | 0.2878 | 1.91 | **WIN** |
| 901 | PYPL | 08-06 13:40 | 08-06 14:20 | 68.65 | 68.27 | 71 | 4874.15 | -26.98 | -0.55% | 0.79R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 67.87 | ↓68.59 | 0.0701 | 2.6 | **LOSS** |
| 902 | NVO | 08-06 13:40 | 08-06 14:15 | 46.29 | 45.82 | 105 | 4860.45 | -49.35 | -1.02% | 0.7R | 35m | market | early-reversal | mixed | momentum-pilot | neutral | 52.4 | ↓46.08 | -0.4113 | 2.55 | **LOSS** |
| 903 | T | 08-06 13:50 | 08-06 14:10 | 28.06 | 27.95 | 99 | 2777.94 | -10.89 | -0.39% | 0.56R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 81.93 | ↓27.93 | 0.0187 | 1.7 | **LOSS** |
| 904 | TJX | 08-06 14:15 | 08-06 16:00 | 130.32 | 130.74 | 107 | 13944.24 | +44.94 | +0.32% | 0.46R | 105m | market | timeout | trend | trend | neutral | 64.37 | ↑129.8 | 0.2012 | 1.36 | **WIN** |
| 905 | TMUS | 08-06 14:35 | 08-06 15:40 | 240.62 | 240.41 | 58 | 13955.96 | -12.18 | -0.09% | 0.1R | 65m | market | stagnation | trend | trend | neutral | 58.95 | ↑238.59 | 0.4422 | 1.48 | **LOSS** |
| 906 | CL | 08-06 14:35 | 08-06 16:20 | 83.92 | 84.4 | 166 | 13930.72 | +79.68 | +0.57% | 0.81R | 105m | market | timeout | trend | trend | neutral | 71.28 | ↑83.31 | 0.149 | 1.05 | **WIN** |
| 907 | AMZN | 08-06 14:40 | 08-06 16:25 | 216.51 | 218.54 | 64 | 13856.64 | +129.92 | +0.94% | 1.34R | 105m | market | timeout | trend | trend | neutral | 78.64 | ↑214.9 | 0.5168 | 1.27 | **WIN** |
| 908 | ROST | 08-06 14:50 | 08-06 15:40 | 144.76 | 144.41 | 96 | 13896.96 | -33.6 | -0.24% | 0.34R | 50m | market | stagnation | trend | trend | neutral | 73.73 | ↑143.71 | 0.5579 | 1.2 | **LOSS** |
| 909 | AAPL | 08-06 15:15 | 08-06 16:25 | 212.94 | 214.37 | 32 | 13841.1 | +45.76 | +0.67% | 0.89R | 70m | market | trim-profit-target | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 910 | AAPL | 08-06 15:15 | 08-06 17:00 | 212.94 | 214.09 | 33 | 13841.1 | +37.95 | +0.54% | 0.72R | 105m | market | timeout | trend | trend | neutral | 71.13 | ↑210.41 | 2.118 | 1.02 | **WIN** |
| 911 | TGT | 08-06 15:15 | 08-06 16:15 | 105.54 | 105.36 | 133 | 14036.82 | -23.94 | -0.17% | 0.24R | 60m | market | stagnation | trend | trend | neutral | 67.75 | ↑104.57 | 0.5654 | 1.68 | **LOSS** |
| 912 | WDAY | 08-06 15:15 | 08-06 15:40 | 229.73 | 228.88 | 60 | 13783.8 | -51 | -0.37% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 72.5 | ↑228.41 | 1.0841 | 1.88 | **LOSS** |
| 913 | RBLX | 08-06 15:15 | 08-06 17:00 | 131.92 | 132.72 | 58 | 7651.36 | +46.4 | +0.61% | 0.62R | 105m | market | timeout | trend | trend | noisyHighBeta | 57.02 | ↑130.28 | 1.0286 | 1.71 | **WIN** |
| 914 | DELL | 08-06 15:25 | 08-06 16:30 | 127.58 | 127.49 | 34 | 4337.72 | -3.06 | -0.07% | 0.07R | 65m | market | stagnation | mixed | momentum-pilot | neutral | 56.43 | ↑126.45 | -0.7685 | 1.55 | **LOSS** |
| 915 | BA | 08-07 13:30 | 08-07 14:15 | 226.72 | 226.8 | 16 | 3627.52 | +1.28 | +0.04% | 0.06R | 45m | market | breakeven-stop | trend | momentum-pilot | neutral | 75.82 | ↓226.48 | 0.0182 | 2.96 | **WIN** |
| 916 | HD | 08-07 13:30 | 08-07 14:00 | 389.83 | 388.4 | 12 | 4677.96 | -17.16 | -0.37% | 0.53R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 67.84 | ↓389.21 | -0.0224 | 1.71 | **LOSS** |
| 917 | RIVN | 08-07 13:30 | 08-07 14:50 | 11.98 | 11.95 | 1079 | 12926.42 | -32.37 | -0.25% | 0.25R | 80m | market | trailing-stop | trend | breakout | neutral | 72.34 | ↓11.89 | 0.0236 | 1.93 | **LOSS** |
| 918 | MSFT | 08-08 13:30 | 08-08 14:20 | 522.86 | 522.41 | 9 | 4705.74 | -4.05 | -0.09% | 0.13R | 50m | market | stagnation | trend | momentum-pilot | neutral | 81.94 | ↓523.16 | 0.0581 | 2.86 | **LOSS** |
| 919 | HD | 08-08 13:30 | 08-08 14:40 | 387.58 | 386.8 | 12 | 4650.96 | -9.36 | -0.2% | 0.29R | 70m | market | stagnation | trend | momentum-pilot | neutral | 77.13 | ↓387.42 | 0.487 | 4.09 | **LOSS** |
| 920 | RIVN | 08-08 13:30 | 08-08 13:40 | 12.19 | 12.03 | 402 | 4900.38 | -64.32 | -1.31% | 1.62R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 65.52 | ↓12.2 | 0.0552 | 1.67 | **LOSS** |
| 921 | AVGO | 08-08 13:35 | 08-08 15:20 | 304.82 | 305.53 | 16 | 4877.12 | +11.36 | +0.23% | 0.33R | 105m | market | timeout | trend | momentum-pilot | neutral | 81.62 | ↓304.48 | 0.4228 | 3.21 | **WIN** |
| 922 | MRVL | 08-08 14:00 | 08-08 14:20 | 77.14 | 76.74 | 181 | 13962.34 | -72.4 | -0.52% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 78.27 | ↑76.43 | 0.438 | 1.76 | **LOSS** |
| 923 | SBUX | 08-08 14:00 | 08-08 14:50 | 92.04 | 91.73 | 152 | 13990.08 | -47.12 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 70.06 | ↑91.49 | 0.1299 | 1.77 | **LOSS** |
| 924 | SCHW | 08-08 14:00 | 08-08 14:50 | 96.72 | 96.65 | 144 | 13927.68 | -10.08 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 77.36 | ↑96.32 | 0.1976 | 1.76 | **LOSS** |
| 925 | ROST | 08-08 14:00 | 08-08 14:45 | 145.6 | 145.16 | 33 | 4804.8 | -14.52 | -0.3% | 0.43R | 45m | market | early-reversal | trend | momentum-pilot | neutral | 65.14 | ↓144.93 | 0.0689 | 1.85 | **LOSS** |
| 926 | MS | 08-08 14:05 | 08-08 14:55 | 142.73 | 142.41 | 97 | 13844.81 | -31.04 | -0.22% | 0.31R | 50m | market | stagnation | trend | trend | neutral | 77.34 | ↑141.99 | 0.2731 | 1.85 | **LOSS** |
| 927 | C | 08-08 14:05 | 08-08 14:25 | 92.56 | 92.22 | 151 | 13976.56 | -51.34 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 77.05 | ↑91.8 | 0.2085 | 1.51 | **LOSS** |
| 928 | DIS | 08-08 14:10 | 08-08 14:30 | 114.12 | 113.53 | 122 | 13922.64 | -71.98 | -0.52% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 73.28 | ↓113.71 | 0.3507 | 5.7 | **LOSS** |
| 929 | PM | 08-08 14:10 | 08-08 15:05 | 169.6 | 169.42 | 82 | 13907.2 | -14.76 | -0.11% | 0.16R | 55m | market | stagnation | trend | trend | neutral | 73.26 | ↓169 | 0.2825 | 1.43 | **LOSS** |
| 930 | ARM | 08-08 14:15 | 08-08 14:35 | 137.65 | 136.73 | 66 | 9084.9 | -60.72 | -0.67% | 0.75R | 20m | market | early-reversal | trend | trend | neutral | 76.79 | ↑136.69 | 0.5552 | 3.19 | **LOSS** |
| 931 | AAPL | 08-08 14:30 | 08-08 16:15 | 223.42 | 227.01 | 62 | 13852.04 | +222.58 | +1.61% | 1.66R | 105m | market | timeout | trend | trend | neutral | 77.34 | ↑221.79 | 0.8259 | 1.49 | **WIN** |
| 932 | ABT | 08-08 14:40 | 08-08 16:25 | 133.35 | 134.07 | 104 | 13868.4 | +74.88 | +0.54% | 0.77R | 105m | market | timeout | trend | trend | neutral | 78.67 | ↑132.82 | 0.3692 | 2.15 | **WIN** |
| 933 | SMCI | 08-11 13:30 | 08-11 14:30 | 45.23 | 45.55 | 61 | 2759.03 | +19.52 | +0.71% | 0.74R | 60m | market | trailing-stop | trend | momentum-pilot | noisyHighBeta | 55.28 | ↓45.23 | 0.0352 | 2.29 | **WIN** |
| 934 | TXN | 08-11 13:30 | 08-11 13:50 | 188.44 | 187.8 | 26 | 4899.44 | -16.64 | -0.34% | 0.49R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 68.75 | ↓188.01 | 0.1346 | 3.03 | **LOSS** |
| 935 | NKE | 08-11 13:30 | 08-11 13:40 | 74.61 | 73.97 | 65 | 4849.65 | -41.6 | -0.86% | 1.23R | 10m | market | stop-loss | trend | momentum-pilot | neutral | 71.49 | ↓74.52 | 0.1072 | 2.24 | **LOSS** |
| 936 | TGT | 08-11 13:30 | 08-11 13:45 | 106.2 | 105.16 | 46 | 4885.2 | -47.84 | -0.98% | 1.4R | 15m | market | stop-loss | trend | momentum-pilot | neutral | 72.19 | ↓105.98 | 0.0552 | 2.53 | **LOSS** |
| 937 | TSM | 08-11 13:35 | 08-11 15:20 | 242.78 | 244.57 | 14 | 3398.92 | +25.06 | +0.74% | 1.06R | 105m | market | timeout | trend | momentum-pilot | neutral | 85.32 | ↑242.3 | 0.4037 | 2.03 | **WIN** |
| 938 | NOW | 08-11 13:35 | 08-11 14:00 | 878.2 | 875.15 | 5 | 4391 | -15.25 | -0.35% | 0.5R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 59.66 | ↑870.49 | 2.2427 | 1.96 | **LOSS** |
| 939 | KLAC | 08-11 13:45 | 08-11 14:05 | 932.16 | 923.34 | 10 | 9321.6 | -88.2 | -0.95% | 1.36R | 20m | market | stop-loss | trend | breakout | neutral | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 940 | U | 08-11 13:45 | 08-11 14:50 | 33.77 | 33.72 | 82 | 2769.14 | -4.1 | -0.15% | 0.1R | 65m | market | stagnation | trend | momentum-pilot | noisyHighBeta | 58.9 | ↓33.55 | -0.008 | 2.5 | **LOSS** |
| 941 | ADSK | 08-11 13:50 | 08-11 14:10 | 291.98 | 289.48 | 16 | 4671.68 | -40 | -0.86% | 1.23R | 20m | market | stop-loss | trend | momentum-pilot | neutral | 59.08 | ↓290.95 | 0.0686 | 3.26 | **LOSS** |
| 942 | DELL | 08-11 14:00 | 08-11 14:45 | 139.87 | 139.3 | 100 | 13987 | -57 | -0.41% | 0.53R | 45m | market | early-reversal | trend | trend | neutral | 75.62 | ↑138.62 | 0.4975 | 1.02 | **LOSS** |
| 943 | RBLX | 08-11 14:05 | 08-11 14:55 | 131.47 | 131.22 | 106 | 13935.82 | -26.5 | -0.19% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 68.55 | ↑129.99 | 0.5034 | 1.41 | **LOSS** |
| 944 | MO | 08-11 14:55 | 08-11 16:40 | 65 | 65.37 | 42 | 2730 | +15.54 | +0.57% | 0.81R | 105m | market | timeout | trend | momentum-pilot | thinChop | 57.23 | ↑64.82 | 0.1759 | 1.8 | **WIN** |
| 945 | VRTX | 08-11 15:10 | 08-11 15:30 | 379.39 | 378.07 | 20 | 7587.8 | -26.4 | -0.35% | 0.49R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 70.12 | ↑375.85 | 3.2327 | 1.14 | **LOSS** |
| 946 | ORCL | 08-12 13:30 | 08-12 13:55 | 254.49 | 252.99 | 19 | 4835.31 | -28.5 | -0.59% | 0.84R | 25m | market | breakeven-stop | trend | momentum-pilot | neutral | 58.12 | ↓253.81 | -0.168 | 2.21 | **LOSS** |
| 947 | ABNB | 08-12 13:30 | 08-12 15:15 | 119.88 | 120.95 | 40 | 4795.2 | +42.8 | +0.89% | 1.27R | 105m | market | timeout | trend | momentum-pilot | neutral | 65.48 | ↑119.4 | -0.0389 | 1.75 | **WIN** |
| 948 | AMAT | 08-12 13:35 | 08-12 13:55 | 185.7 | 184.86 | 26 | 4828.2 | -21.84 | -0.45% | 0.64R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 61.35 | ↓185.26 | -0.1065 | 4.06 | **LOSS** |
| 949 | AMGN | 08-12 14:00 | 08-12 14:20 | 285.79 | 284.31 | 17 | 4858.43 | -25.16 | -0.52% | 0.74R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 45.95 | ↓284.37 | -0.6594 | 2.09 | **LOSS** |
| 950 | CL | 08-12 14:00 | 08-12 14:20 | 84.85 | 84.45 | 33 | 2800.05 | -13.2 | -0.47% | 0.67R | 20m | market | early-reversal | trend | momentum-pilot | thinChop | 54.43 | ↓84.46 | 0.0322 | 1.52 | **LOSS** |
| 951 | EOG | 08-12 14:05 | 08-12 14:55 | 119.25 | 118.99 | 117 | 13952.25 | -30.42 | -0.22% | 0.31R | 50m | market | stagnation | trend | breakout | neutral | 78.21 | ↑118.23 | 0.4167 | 1.91 | **LOSS** |
| 952 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 45 | 10397.7 | -50.85 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 953 | V | 08-12 14:10 | 08-12 14:35 | 338.02 | 336.74 | 14 | 4732.28 | -17.92 | -0.38% | 0.54R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 63.73 | ↓336.62 | 0.3263 | 1.74 | **LOSS** |
| 954 | LRCX | 08-12 14:10 | 08-12 15:25 | 103.02 | 104.53 | 67 | 13907.7 | +101.17 | +1.47% | 1.63R | 75m | market | trim-profit-target | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 955 | LRCX | 08-12 14:10 | 08-12 15:55 | 103.02 | 105.27 | 68 | 13907.7 | +153 | +2.18% | 2.42R | 105m | market | timeout | trend | trend | neutral | 64.05 | ↑102.38 | 0.0885 | 1.61 | **WIN** |
| 956 | LULU | 08-12 14:10 | 08-12 15:55 | 189.59 | 191.27 | 73 | 13840.07 | +122.64 | +0.89% | 1.03R | 105m | market | timeout | breakout | trend | neutral | 66.18 | ↑188.5 | 0.3924 | 1.03 | **WIN** |
| 957 | ADBE | 08-12 14:15 | 08-12 15:20 | 336.15 | 335.6 | 14 | 4706.1 | -7.7 | -0.16% | 0.17R | 65m | market | stagnation | trend | momentum-pilot | neutral | 58.02 | ↑333.09 | -0.3359 | 1.56 | **LOSS** |
| 958 | JPM | 08-12 14:25 | 08-12 14:55 | 294.22 | 293.2 | 16 | 4707.52 | -16.32 | -0.35% | 0.49R | 30m | market | early-reversal | trend | momentum-pilot | neutral | 72.52 | ↑292.06 | 0.9407 | 1.56 | **LOSS** |
| 959 | C | 08-12 14:40 | 08-12 15:25 | 95.05 | 94.64 | 147 | 13972.35 | -60.27 | -0.43% | 0.61R | 45m | market | early-reversal | trend | trend | neutral | 72.99 | ↑94.39 | 0.7235 | 1.08 | **LOSS** |
| 960 | INTC | 08-12 15:05 | 08-12 16:00 | 21.37 | 21.33 | 230 | 4915.1 | -9.2 | -0.19% | 0.23R | 55m | market | stagnation | mixed | momentum-pilot | neutral | 71.3 | ↑21.1 | -0.0197 | 1.81 | **LOSS** |
| 961 | BA | 08-12 15:05 | 08-12 15:40 | 232.2 | 230.83 | 15 | 3483 | -20.55 | -0.59% | 0.84R | 35m | market | early-reversal | trend | momentum-pilot | neutral | 75.38 | ↑230.09 | 1.4114 | 1.73 | **LOSS** |
| 962 | QCOM | 08-12 15:10 | 08-12 16:55 | 152.94 | 152.94 | 22 | 3364.68 | +0 | +0% | 0R | 105m | market | timeout | trend | momentum-pilot | neutral | 82.65 | ↑151.5 | 1.1173 | 1.64 | **WIN** |
| 963 | ABNB | 08-12 15:20 | 08-12 16:00 | 121.75 | 121.35 | 40 | 4870 | -16 | -0.33% | 0.47R | 40m | market | early-reversal | trend | momentum-pilot | neutral | 62.68 | ↑120.45 | 0.6035 | 1.47 | **LOSS** |
| 964 | AAPL | 08-13 13:30 | 08-13 15:15 | 231.31 | 232.3 | 21 | 4857.51 | +20.79 | +0.43% | 0.61R | 105m | market | timeout | trend | momentum-pilot | neutral | 74.46 | ↓231.45 | 0.0194 | 2.37 | **WIN** |
| 965 | AMAT | 08-13 13:30 | 08-13 14:30 | 189.87 | 189.7 | 25 | 4746.75 | -4.25 | -0.09% | 0.13R | 60m | market | stagnation | trend | momentum-pilot | neutral | 79.38 | ↓189.76 | 0.117 | 1.77 | **LOSS** |
| 966 | SHOP | 08-13 13:35 | 08-13 15:00 | 150.22 | 150.25 | 32 | 4807.04 | +0.96 | +0.02% | 0.03R | 85m | market | breakeven-stop | trend | momentum-pilot | neutral | 81.66 | ↓150.1 | 0.0041 | 2.16 | **WIN** |
| 967 | LLY | 08-13 13:55 | 08-13 14:15 | 657.82 | 651.96 | 14 | 9209.48 | -82.04 | -0.89% | 0.84R | 20m | market | early-reversal | trend | breakout | neutral | 84.6 | ↓651.81 | 3.518 | 1.78 | **LOSS** |
| 968 | IBM | 08-13 14:00 | 08-13 14:55 | 240.31 | 240.03 | 58 | 13937.98 | -16.24 | -0.12% | 0.13R | 55m | market | stagnation | trend | breakout | neutral | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 969 | MRVL | 08-13 14:10 | 08-13 14:30 | 79.93 | 79.46 | 175 | 13987.75 | -82.25 | -0.59% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 77.08 | ↑79.26 | 0.4703 | 2.17 | **LOSS** |
| 970 | PATH | 08-13 14:10 | 08-13 15:50 | 10.63 | 10.81 | 658 | 13999.71 | +118.44 | +1.69% | 1.61R | 100m | market | trim-profit-target | trend | trend | neutral | 60.95 | ↑10.55 | 0.0322 | 1.06 | **WIN** |
| 971 | PATH | 08-13 14:10 | 08-13 15:55 | 10.63 | 10.84 | 659 | 13999.71 | +138.39 | +1.98% | 1.89R | 105m | market | timeout | trend | trend | neutral | 60.95 | ↑10.55 | 0.0322 | 1.06 | **WIN** |
| 972 | SNOW | 08-13 14:20 | 08-13 14:40 | 196.38 | 195.46 | 71 | 13942.98 | -65.32 | -0.47% | 0.44R | 20m | market | early-reversal | trend | trend | neutral | 69.4 | ↑194.8 | 0.6179 | 1.97 | **LOSS** |
| 973 | CRM | 08-13 14:50 | 08-13 15:40 | 234.29 | 234.16 | 59 | 13823.11 | -7.67 | -0.06% | 0.07R | 50m | market | stagnation | trend | trend | neutral | 77.58 | ↑232.49 | 0.506 | 1.32 | **LOSS** |
| 974 | ADBE | 08-13 14:50 | 08-13 15:55 | 345.13 | 345.13 | 40 | 13805.2 | +0 | +0% | 0R | 65m | market | breakeven-stop | trend | trend | neutral | 73.37 | ↑343.16 | 2.1332 | 1.03 | **WIN** |
| 975 | ZS | 08-13 15:10 | 08-13 15:35 | 279.85 | 277.98 | 17 | 4757.45 | -31.79 | -0.67% | 0.96R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 71.99 | ↑277.81 | 1.1417 | 1.69 | **LOSS** |
| 976 | CMG | 08-13 15:10 | 08-13 15:35 | 43.19 | 43.03 | 113 | 4880.47 | -18.08 | -0.37% | 0.52R | 25m | market | early-reversal | trend | momentum-pilot | neutral | 69.39 | ↑42.85 | 0.0679 | 1.78 | **LOSS** |
| 977 | PEP | 08-13 15:10 | 08-13 16:00 | 148.85 | 148.48 | 94 | 13991.9 | -34.78 | -0.25% | 0.36R | 50m | market | stagnation | trend | trend | neutral | 65.36 | ↑147.91 | 0.4929 | 1.23 | **LOSS** |
| 978 | ADP | 08-13 15:15 | 08-13 15:35 | 303.44 | 302.11 | 9 | 2730.96 | -11.97 | -0.44% | 0.63R | 20m | market | early-reversal | mixed | momentum-pilot | thinChop | 73.63 | ↓302.06 | -0.2319 | 1.68 | **LOSS** |
| 979 | ROST | 08-13 15:15 | 08-13 15:35 | 150.16 | 149.53 | 93 | 13964.88 | -58.59 | -0.42% | 0.6R | 20m | market | early-reversal | trend | trend | neutral | 60.72 | ↑149.34 | 0.4978 | 2.74 | **LOSS** |
| 980 | ISRG | 08-13 15:25 | 08-13 15:45 | 481.04 | 478.33 | 10 | 4810.4 | -27.1 | -0.56% | 0.8R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 67.26 | ↑477.56 | 0.1286 | 3.2 | **LOSS** |
| 981 | SCHW | 08-14 13:35 | 08-14 14:50 | 96.33 | 97.75 | 25 | 4816.5 | +35.5 | +1.47% | 1.35R | 75m | market | trim-profit-target | trend | momentum-pilot | neutral | 57.94 | ↑96.33 | 0.1014 | 2.74 | **WIN** |
| 982 | SCHW | 08-14 13:35 | 08-14 15:20 | 96.33 | 97.9 | 25 | 4816.5 | +39.25 | +1.63% | 1.5R | 105m | market | timeout | trend | momentum-pilot | neutral | 57.94 | ↑96.33 | 0.1014 | 2.74 | **WIN** |
| 983 | DELL | 08-14 13:55 | 08-14 15:40 | 138.92 | 138.89 | 35 | 4862.2 | -1.05 | -0.02% | 0.02R | 105m | market | timeout | trend | momentum-pilot | neutral | 55.43 | ↓138.39 | 0.2087 | 1.61 | **LOSS** |
| 984 | UPS | 08-14 14:00 | 08-14 15:45 | 88.03 | 88.84 | 55 | 4841.65 | +44.55 | +0.92% | 1.02R | 105m | market | timeout | mixed | momentum-pilot | neutral | 52.93 | ↑87.4 | 0.1267 | 1.55 | **WIN** |
| 985 | ABNB | 08-14 14:15 | 08-14 15:05 | 124.32 | 124.23 | 36 | 4475.52 | -3.24 | -0.07% | 0.08R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 46.02 | ↑123.6 | -0.1546 | 1.81 | **LOSS** |
| 986 | GOOG | 08-14 15:05 | 08-14 15:25 | 205.24 | 204.2 | 68 | 13956.32 | -70.72 | -0.51% | 0.73R | 20m | market | early-reversal | trend | trend | neutral | 77.04 | ↑203.69 | 0.4744 | 1.68 | **LOSS** |
| 987 | TMUS | 08-15 13:45 | 08-15 14:10 | 252.78 | 251.86 | 10 | 2527.8 | -9.2 | -0.36% | 0.51R | 25m | market | early-reversal | trend | momentum-pilot | thinChop | 74.32 | ↓251.88 | 0.0936 | 1.82 | **LOSS** |
| 988 | PATH | 08-15 13:50 | 08-15 14:05 | 10.95 | 10.83 | 1282 | 14037.9 | -153.84 | -1.1% | 1.34R | 15m | market | stop-loss | trend | breakout | neutral | 66.67 | ↓10.87 | 0.0277 | 1.55 | **LOSS** |
| 989 | COIN | 08-15 14:05 | 08-15 14:25 | 322.21 | 319.84 | 11 | 3544.31 | -26.07 | -0.74% | 0.56R | 20m | market | early-reversal | mixed | momentum-pilot | falseBreakoutProne | 42.46 | ↓319.88 | -0.2211 | 1.61 | **LOSS** |
| 990 | MDB | 08-15 14:10 | 08-15 15:55 | 213.23 | 215.74 | 65 | 13859.95 | +163.15 | +1.18% | 0.94R | 105m | market | timeout | trend | trend | neutral | 77.79 | ↑210.83 | 1.7971 | 1.57 | **WIN** |
| 991 | UBER | 08-15 14:15 | 08-15 15:05 | 93.4 | 92.89 | 149 | 13916.6 | -75.99 | -0.55% | 0.51R | 50m | market | early-reversal | trend | breakout | neutral | 72.71 | ↓92.37 | 0.3724 | 1.4 | **LOSS** |
| 992 | NET | 08-15 14:15 | 08-15 15:45 | 198.84 | 200.89 | 35 | 13918.8 | +71.75 | +1.03% | 1.17R | 90m | market | trim-profit-target | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 993 | NET | 08-15 14:15 | 08-15 16:00 | 198.84 | 200.83 | 35 | 13918.8 | +69.65 | +1% | 1.14R | 105m | market | timeout | trend | trend | neutral | 70.16 | ↑197.11 | 0.8686 | 1.3 | **WIN** |
| 994 | CELH | 08-15 14:20 | 08-15 14:50 | 57.55 | 57.14 | 241 | 13869.55 | -98.81 | -0.71% | 0.53R | 30m | market | early-reversal | trend | trend | neutral | 63.95 | ↓57.17 | 0.2336 | 3.92 | **LOSS** |
| 995 | XOM | 08-15 14:35 | 08-15 15:25 | 106.96 | 106.84 | 41 | 4385.36 | -4.92 | -0.11% | 0.16R | 50m | market | stagnation | mixed | momentum-pilot | neutral | 42.65 | ↑106.43 | -0.1931 | 1.47 | **LOSS** |
| 996 | WDAY | 08-15 14:45 | 08-15 15:05 | 224.93 | 224.11 | 21 | 4723.53 | -17.22 | -0.36% | 0.51R | 20m | market | early-reversal | mixed | momentum-pilot | neutral | 50.51 | ↓224.23 | 0.8083 | 2.34 | **LOSS** |
| 997 | TSLA | 08-18 13:30 | 08-18 13:50 | 333.02 | 331.45 | 12 | 3996.24 | -18.84 | -0.47% | 0.67R | 20m | market | early-reversal | trend | momentum-pilot | neutral | 74.06 | ↓332.12 | -0.0371 | 3.64 | **LOSS** |
| 998 | AI | 08-18 13:45 | 08-18 15:15 | 18.02 | 18.45 | 156 | 2811.12 | +67.08 | +2.39% | 2.1R | 90m | market | profit-target | trend | momentum-pilot | noisyHighBeta | 56.33 | ↑17.97 | 0.006 | 1.97 | **WIN** |
| 999 | SMCI | 08-18 14:20 | 08-18 15:15 | 45.86 | 46.37 | 152 | 13941.44 | +77.52 | +1.11% | 0.9R | 55m | market | trim-profit-target | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 1000 | SMCI | 08-18 14:20 | 08-18 16:05 | 45.86 | 46.21 | 152 | 13941.44 | +53.2 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |

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

- ⚠️ **Profit factor 0.88 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.75R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T20:38:12.451Z*
