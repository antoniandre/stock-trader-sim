# Bot Trade Report — 300 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T12:17:09.140Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":10,"trendSizeMultiplier":1,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $2101.83 (-2.1%) over 300 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 300 |
| Win rate | 30.67% (92W / 208L) |
| Net P&L | $-2101.83 (-2.1%) |
| Gross profit | $3524.89 |
| Gross loss | $5626.72 |
| Profit factor | 0.63 |
| Avg win | $38.31 |
| Avg loss | $27.05 |
| Payoff ratio | 1.42:1 |
| Expectancy | $-7.01 / trade |
| Max drawdown | 2.24% |
| Sharpe ratio (ann.) | -4.22 |
| Trades / active day | 9.68 |
| Avg confidence | 97.45% |
| Avg trade duration | 48 min |
| Avg planned R:R | 3.1:1 |
| Avg risk ratio | 0.72R |
| Starting equity | $100,000 |
| Ending equity | $97,898.17 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-2101.83 | MISS |
| Win rate | 45-60% | 30.67% | MISS |
| Profit factor | >= 1.3 | 0.63 | MISS |
| Sharpe (ann.) | > 1.5 | -4.22 | MISS |
| R:R | 2:1 - 3:1 | 3.1:1 planned | MISS |
| Max drawdown | < 10% | 2.24% | PASS |
| Expectancy | positive | $-7.01 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 126 | 29.37% | $-1145.09 | $-9.09 |
| Mid  10:30–11:30 | 46 | 28.26% | $-620.6 | $-13.49 |
| Noon 11:30–13:00 | 79 | 30.38% | $-283.67 | $-3.59 |
| PM   13:00–14:00 | 49 | 36.73% | $-52.47 | $-1.07 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 13 | 7 | 53.85% | $+376.75 | $+28.98 | 4.37 | eligible |
| NET | 6 | 3 | 50% | $+175.82 | $+29.3 | 2.67 | eligible |
| KLAC | 5 | 3 | 60% | $+139.84 | $+27.97 | 3.12 | eligible |
| AVGO | 8 | 1 | 12.5% | $+113.87 | $+14.23 | 1.73 | throttle |
| RIVN | 9 | 6 | 66.67% | $+107.8 | $+11.98 | 1.99 | eligible |
| TSM | 6 | 2 | 33.33% | $+74.42 | $+12.4 | 2.25 | throttle |
| TGT | 7 | 3 | 42.86% | $+54.75 | $+7.82 | 1.49 | eligible |
| ABNB | 6 | 3 | 50% | $+43.71 | $+7.29 | 1.7 | eligible |
| COST | 1 | 1 | 100% | $+33.12 | $+33.12 | ∞ | watch |
| META | 8 | 2 | 25% | $+23.1 | $+2.89 | 1.46 | throttle |
| CRM | 3 | 1 | 33.33% | $+6.72 | $+2.24 | 1.62 | watch |
| TSLA | 8 | 2 | 25% | $+4.73 | $+0.59 | 1.03 | throttle |
| UNH | 7 | 4 | 57.14% | $+4.19 | $+0.6 | 1.04 | eligible |
| GS | 4 | 1 | 25% | $+3.05 | $+0.76 | 1.08 | throttle |
| MSFT | 2 | 1 | 50% | $+2.76 | $+1.38 | 1.21 | watch |
| QCOM | 5 | 2 | 40% | $+0.44 | $+0.09 | 1.01 | eligible |
| LMT | 1 | 0 | 0% | $-0.48 | $-0.48 | 0 | watch |
| NFLX | 4 | 1 | 25% | $-0.88 | $-0.22 | 0.98 | throttle |
| DELL | 7 | 3 | 42.86% | $-4.02 | $-0.57 | 0.97 | throttle |
| CVX | 4 | 2 | 50% | $-8.3 | $-2.07 | 0.89 | throttle |
| NKE | 9 | 5 | 55.56% | $-8.7 | $-0.97 | 0.83 | throttle |
| ADBE | 2 | 0 | 0% | $-12.73 | $-6.36 | 0 | watch |
| JPM | 1 | 0 | 0% | $-19.5 | $-19.5 | 0 | watch |
| AMZN | 9 | 3 | 33.33% | $-22.59 | $-2.51 | 0.69 | throttle |
| DDOG | 6 | 2 | 33.33% | $-25.2 | $-4.2 | 0.84 | throttle |
| LRCX | 7 | 4 | 57.14% | $-25.57 | $-3.65 | 0.6 | throttle |
| AMAT | 4 | 1 | 25% | $-28.6 | $-7.15 | 0.43 | throttle |
| AAPL | 4 | 1 | 25% | $-29.13 | $-7.28 | 0.33 | throttle |
| WMT | 2 | 0 | 0% | $-31.91 | $-15.95 | 0 | watch |
| V | 1 | 0 | 0% | $-32.7 | $-32.7 | 0 | watch |
| SBUX | 4 | 1 | 25% | $-39.29 | $-9.82 | 0.22 | throttle |
| NOW | 3 | 1 | 33.33% | $-39.97 | $-13.32 | 0.37 | watch |
| PYPL | 2 | 0 | 0% | $-41.5 | $-20.75 | 0 | watch |
| XOM | 3 | 1 | 33.33% | $-44.05 | $-14.68 | 0.46 | watch |
| IBM | 1 | 0 | 0% | $-45.6 | $-45.6 | 0 | watch |
| ORCL | 4 | 1 | 25% | $-47.14 | $-11.78 | 0.15 | throttle |
| BA | 5 | 1 | 20% | $-53.37 | $-10.67 | 0.25 | throttle |
| DIS | 3 | 0 | 0% | $-57.84 | $-19.28 | 0 | watch |
| CAT | 2 | 0 | 0% | $-61.42 | $-30.71 | 0 | watch |
| INTU | 2 | 0 | 0% | $-67.17 | $-33.58 | 0 | watch |
| MU | 5 | 1 | 20% | $-73.94 | $-14.79 | 0.44 | throttle |
| SNOW | 5 | 0 | 0% | $-76.96 | $-15.39 | 0 | throttle |
| ARM | 6 | 2 | 33.33% | $-77.9 | $-12.98 | 0.26 | throttle |
| TXN | 6 | 2 | 33.33% | $-81.72 | $-13.62 | 0.21 | throttle |
| NVDA | 5 | 1 | 20% | $-82 | $-16.4 | 0.07 | throttle |
| BAC | 2 | 0 | 0% | $-85.6 | $-42.8 | 0 | watch |
| UBER | 5 | 1 | 20% | $-88.28 | $-17.66 | 0.09 | throttle |
| MRVL | 6 | 2 | 33.33% | $-90.56 | $-15.09 | 0.14 | throttle |
| CELH | 7 | 3 | 42.86% | $-103.35 | $-14.76 | 0.27 | throttle |
| COIN | 5 | 1 | 20% | $-109.89 | $-21.98 | 0.37 | throttle |
| ELF | 9 | 5 | 55.56% | $-110.24 | $-12.25 | 0.59 | throttle |
| INTC | 5 | 0 | 0% | $-111.82 | $-22.36 | 0 | throttle |
| PANW | 5 | 0 | 0% | $-122.5 | $-24.5 | 0 | throttle |
| LLY | 5 | 2 | 40% | $-123.7 | $-24.74 | 0.2 | throttle |
| HPE | 4 | 0 | 0% | $-125.23 | $-31.31 | 0 | throttle |
| AMD | 5 | 1 | 20% | $-125.57 | $-25.11 | 0.05 | throttle |
| PLTR | 5 | 0 | 0% | $-130.26 | $-26.05 | 0 | throttle |
| SHOP | 4 | 0 | 0% | $-140.85 | $-35.21 | 0 | throttle |
| MDB | 5 | 0 | 0% | $-145.52 | $-29.1 | 0 | throttle |
| NVO | 4 | 0 | 0% | $-146.23 | $-36.56 | 0 | throttle |
| SMCI | 4 | 1 | 25% | $-181.6 | $-45.4 | 0.09 | throttle |
| CRWD | 5 | 1 | 20% | $-185.52 | $-37.1 | 0.09 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| momentum-pilot | 116 | 43 | 37.07% | $+103.55 | $+0.89 |
| breakout | 69 | 18 | 26.09% | $-1197.71 | $-17.36 |
| trend | 115 | 31 | 26.96% | $-1007.67 | $-8.76 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 8 | 4 | 50% | $+155.76 | $+19.47 |
| mixed | 20 | 6 | 30% | $-47.95 | $-2.4 |
| trend | 272 | 82 | 30.15% | $-2209.64 | $-8.12 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| regimeInstability | 126 | 44 | 34.92% | $-46.26 | $-0.37 |
| neutral | 1 | 0 | 0% | $-49.78 | $-49.78 |
| thinChop | 8 | 2 | 25% | $-61.74 | $-7.72 |
| falseBreakoutProne | 16 | 3 | 18.75% | $-378.03 | $-23.63 |
| confirmationRequired | 149 | 43 | 28.86% | $-1566.02 | $-10.51 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| regime-instability | 126 | 44 | 34.92% | $-46.26 | $-0.37 |
| neutral | 1 | 0 | 0% | $-49.78 | $-49.78 |
| thin-chop | 8 | 2 | 25% | $-61.74 | $-7.72 |
| false-breakout-risk | 16 | 3 | 18.75% | $-378.03 | $-23.63 |
| confirmation-required | 149 | 43 | 28.86% | $-1566.02 | $-10.51 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | META | 5 | 2.11 | $+7.67 | 3 | 0 | $-5.08 | 0.02% | 0 | watch |
| Symbol | AVGO | 5 | 5.45 | $+44.16 | 3 | 0 | $-35.65 | 0.11% | 0 | watch |
| Symbol | ELF | 7 | 3.84 | $+16.77 | 2 | 0 | $-113.82 | 0.23% | 0 | watch |
| Symbol | ABNB | 5 | 0.33 | $-8.43 | 1 | ∞ | $+85.84 | 0% | ∞ | reject |
| Symbol | LRCX | 5 | 0.38 | $-7.99 | 2 | ∞ | $+7.2 | 0% | ∞ | reject |
| Behavior | regimeInstability | 86 | 0.67 | $-2.48 | 40 | 1.62 | $+4.18 | 0.07% | 1.15 | reject |
| Trade state | regime-instability | 86 | 0.67 | $-2.48 | 40 | 1.62 | $+4.18 | 0.07% | 1.15 | reject |
| Setup | momentum-pilot | 78 | 0.95 | $-0.28 | 38 | 1.55 | $+3.3 | 0.05% | 1.1 | reject |
| Time slot | PM 13:00-14:00 | 38 | 0.73 | $-1.85 | 11 | 1.18 | $+1.63 | 0.09% | 0.79 | reject |
| Time slot | Noon 11:30-13:00 | 61 | 0.7 | $-4.02 | 18 | 0.85 | $-2.15 | 0.19% | 0.57 | reject |
| Symbol | AMZN | 5 | 0.96 | $-0.25 | 4 | 0.5 | $-5.33 | 0.04% | 0.38 | reject |
| Setup | trend | 73 | 0.5 | $-10.05 | 42 | 0.72 | $-6.52 | 0.63% | 0.5 | reject |
| Regime | mixed | 15 | 1.02 | $+0.14 | 5 | 0 | $-10.02 | 0.05% | 0 | reject |
| Time slot | Open 9:30-10:30 | 54 | 0.69 | $-5.8 | 72 | 0.61 | $-11.55 | 1.05% | 0.48 | reject |
| Regime | trend | 162 | 0.65 | $-5.37 | 110 | 0.53 | $-12.19 | 1.49% | 0.4 | reject |
| Behavior | confirmationRequired | 84 | 0.6 | $-8.24 | 65 | 0.57 | $-13.44 | 0.94% | 0.44 | reject |
| Trade state | confirmation-required | 84 | 0.6 | $-8.24 | 65 | 0.57 | $-13.44 | 0.94% | 0.44 | reject |
| Time slot | Mid 10:30-11:30 | 27 | 0.45 | $-12.68 | 19 | 0.32 | $-14.65 | 0.3% | 0.21 | reject |
| Symbol | MRVL | 5 | 0.18 | $-14.2 | 1 | 0 | $-19.57 | 0.02% | 0 | reject |
| Symbol | ARM | 5 | 0.33 | $-11.54 | 1 | 0 | $-20.21 | 0.02% | 0 | reject |
| Setup | breakout | 29 | 0.72 | $-7.42 | 40 | 0.43 | $-24.56 | 0.99% | 0.34 | reject |
| Behavior | falseBreakoutProne | 6 | 1.13 | $+5.24 | 10 | 0.21 | $-40.95 | 0.41% | 0.14 | reject |
| Trade state | false-breakout-risk | 6 | 1.13 | $+5.24 | 10 | 0.21 | $-40.95 | 0.41% | 0.14 | reject |
| Symbol | CELH | 6 | 0.42 | $-8.93 | 1 | 0 | $-49.78 | 0.05% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-2448.26 | 0.58 |
| +3 bps/side | $-3141.09 | 0.51 |
| +5 bps/side | $-3833.92 | 0.45 |
| +10 bps/side | $-5566.1 | 0.33 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 114 |
| stagnation | 70 |
| timeout | 61 |
| stop-loss | 19 |
| trim-profit-target | 16 |
| trailing-stop | 11 |
| profit-target | 6 |
| breakeven-stop | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AAPL | 04-28 17:45 | 04-28 19:30 | 209.45 | 210.54 | 13 | 2722.85 | +14.17 | +0.52% | 0.74R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 66.42 | ↑209.07 | 0.1551 | 1.5 | **WIN** |
| 2 | NFLX | 04-28 17:55 | 04-28 18:15 | 1102.45 | 1098.96 | 2 | 2204.9 | -6.98 | -0.32% | 0.46R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 67.37 | ↑1094.93 | 1.1876 | 1.54 | **LOSS** |
| 3 | PLTR | 04-29 13:30 | 04-29 13:50 | 114.57 | 113.98 | 24 | 2749.68 | -14.16 | -0.51% | 0.52R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 54.03 | ↓114.57 | 0.4261 | 2.63 | **LOSS** |
| 4 | PANW | 04-29 13:40 | 04-29 13:55 | 184.92 | 183.93 | 36 | 6657.12 | -35.64 | -0.54% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 5 | AMAT | 04-29 13:50 | 04-29 14:20 | 150.3 | 149.75 | 18 | 2705.4 | -9.9 | -0.37% | 0.41R | 30m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 52.05 | ↑149.2 | 0.2638 | 1.89 | **LOSS** |
| 6 | META | 04-29 14:00 | 04-29 14:20 | 552.46 | 550.39 | 5 | 2762.3 | -10.35 | -0.37% | 0.41R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 57.34 | ↑548.77 | 0.8205 | 1.74 | **LOSS** |
| 7 | NFLX | 04-29 14:05 | 04-29 14:20 | 1110.41 | 1105.9 | 2 | 2220.82 | -9.02 | -0.41% | 0.49R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 49.92 | ↑1102.43 | 0.9097 | 1.68 | **LOSS** |
| 8 | PANW | 04-29 14:50 | 04-29 15:20 | 185.73 | 185.58 | 52 | 9657.96 | -7.8 | -0.08% | 0.1R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 57.58 | ↑184.47 | 1.0502 | 1.11 | **LOSS** |
| 9 | UBER | 04-29 16:30 | 04-29 16:45 | 79.13 | 78.61 | 35 | 2769.55 | -18.2 | -0.66% | 0.94R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 69.28 | ↑78.58 | 0.0519 | 2.16 | **LOSS** |
| 10 | COIN | 04-29 16:40 | 04-29 16:55 | 206.87 | 204.33 | 13 | 2689.31 | -33.02 | -1.23% | 1.76R | 15m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 62.01 | ↓205.75 | 0.1587 | 9.18 | **LOSS** |
| 11 | MRVL | 04-29 17:20 | 04-29 18:30 | 58.95 | 59.46 | 23 | 2770.65 | +11.73 | +0.87% | 1.24R | 70m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 51.54 | ↑58.59 | 0.0326 | 1.89 | **WIN** |
| 12 | MRVL | 04-29 17:20 | 04-29 19:00 | 58.95 | 59.1 | 24 | 2770.65 | +3.6 | +0.25% | 0.36R | 100m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 51.54 | ↑58.59 | 0.0326 | 1.89 | **WIN** |
| 13 | NVDA | 04-29 17:45 | 04-29 18:55 | 109.66 | 109.51 | 89 | 9759.74 | -13.35 | -0.14% | 0.2R | 70m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 68.13 | ↑108.69 | 0.0652 | 2.18 | **LOSS** |
| 14 | META | 04-29 17:45 | 04-29 18:55 | 555.06 | 554.72 | 17 | 9436.02 | -5.78 | -0.06% | 0.09R | 70m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 59.15 | ↑550.54 | 0.4733 | 2.55 | **LOSS** |
| 15 | NFLX | 04-29 17:45 | 04-29 18:05 | 1121.99 | 1118.33 | 8 | 8975.92 | -29.28 | -0.33% | 0.47R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 69.42 | ↑1108.08 | 2.0405 | 2.45 | **LOSS** |
| 16 | ARM | 04-29 17:45 | 04-29 18:50 | 113.07 | 112.92 | 56 | 6331.92 | -8.4 | -0.13% | 0.19R | 65m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 63.58 | ↑112.34 | 0.0897 | 2.32 | **LOSS** |
| 17 | PLTR | 04-29 17:45 | 04-29 18:05 | 115.83 | 115.38 | 24 | 2779.92 | -10.8 | -0.39% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 69.14 | ↑114.52 | 0.1447 | 2.12 | **LOSS** |
| 18 | UBER | 04-29 17:45 | 04-29 19:30 | 79.24 | 79.49 | 35 | 2773.4 | +8.75 | +0.32% | 0.46R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 59.56 | ↑78.64 | 0.1352 | 2.44 | **WIN** |
| 19 | PANW | 04-29 17:45 | 04-29 18:20 | 186.64 | 186.43 | 14 | 2612.96 | -2.94 | -0.11% | 0.16R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 70 | ↑185.04 | 0.1596 | 1.53 | **LOSS** |
| 20 | CRWD | 04-29 17:45 | 04-29 18:15 | 431.85 | 431.32 | 6 | 2591.1 | -3.18 | -0.12% | 0.17R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 62.5 | ↑428.19 | 1.1028 | 2.04 | **LOSS** |
| 21 | SNOW | 04-29 17:45 | 04-29 18:45 | 160.79 | 160.68 | 17 | 2733.43 | -1.87 | -0.07% | 0.1R | 60m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 60.35 | ↑160.11 | -0.1269 | 7.43 | **LOSS** |
| 22 | DIS | 04-29 17:45 | 04-29 18:15 | 91.61 | 91.43 | 84 | 7695.24 | -15.12 | -0.2% | 0.29R | 30m | market | stagnation | trend | trend | regimeInstability | regime-instability | 66.22 | ↑90.8 | 0.0806 | 1.42 | **LOSS** |
| 23 | LRCX | 04-29 17:45 | 04-29 19:30 | 71.1 | 71.32 | 39 | 2772.9 | +8.58 | +0.31% | 0.44R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 65 | ↑71.01 | -0.0479 | 2.69 | **WIN** |
| 24 | AMZN | 04-29 17:55 | 04-29 18:45 | 187.66 | 187.52 | 52 | 9758.32 | -7.28 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 76.07 | ↑185.78 | 0.1439 | 1.68 | **LOSS** |
| 25 | AMD | 04-30 15:40 | 04-30 15:55 | 95.85 | 95.48 | 26 | 2492.1 | -9.62 | -0.39% | 0.42R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 78.14 | ↑93.8 | 0.2119 | 1.83 | **LOSS** |
| 26 | CELH | 04-30 16:35 | 04-30 18:20 | 35.01 | 35.15 | 79 | 2765.79 | +11.06 | +0.4% | 0.57R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 63.7 | ↑34.68 | 0.0635 | 2.34 | **WIN** |
| 27 | AAPL | 04-30 17:30 | 04-30 18:00 | 211.6 | 211.14 | 13 | 2750.8 | -5.98 | -0.22% | 0.31R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 63.18 | ↑209.4 | 0.2348 | 1.51 | **LOSS** |
| 28 | MU | 04-30 17:30 | 04-30 18:00 | 75.7 | 75.62 | 36 | 2725.2 | -2.88 | -0.11% | 0.16R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 63.86 | ↑74.88 | -0.0222 | 2.07 | **LOSS** |
| 29 | LRCX | 04-30 17:30 | 04-30 19:15 | 70.35 | 70.76 | 39 | 2743.65 | +15.99 | +0.58% | 0.83R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 60.06 | ↑69.61 | 0.0077 | 1.6 | **WIN** |
| 30 | RIVN | 04-30 17:30 | 04-30 18:00 | 13.32 | 13.34 | 478 | 6366.96 | +9.56 | +0.15% | 0.16R | 30m | market | trailing-stop | trend | trend | confirmationRequired | confirmation-required | 74.7 | ↑13.09 | 0.0405 | 1.16 | **WIN** |
| 31 | ARM | 04-30 17:35 | 04-30 18:35 | 110.98 | 111.82 | 12 | 2774.5 | +10.08 | +0.76% | 1.09R | 60m | market | trim-profit-target | mixed | momentum-pilot | regimeInstability | regime-instability | 69.94 | ↑109.59 | -0.0707 | 2.32 | **WIN** |
| 32 | ARM | 04-30 17:35 | 04-30 19:20 | 110.98 | 112.35 | 13 | 2774.5 | +17.81 | +1.23% | 1.76R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 69.94 | ↑109.59 | -0.0707 | 2.32 | **WIN** |
| 33 | AMAT | 04-30 17:35 | 04-30 19:20 | 148.03 | 149.24 | 18 | 2664.54 | +21.78 | +0.82% | 1.17R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 63.91 | ↑146.93 | -0.0514 | 1.89 | **WIN** |
| 34 | SBUX | 04-30 17:35 | 04-30 18:25 | 79.65 | 79.59 | 123 | 9796.95 | -7.38 | -0.08% | 0.1R | 50m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 68.31 | ↑78.49 | 0.1342 | 1.17 | **LOSS** |
| 35 | AMD | 04-30 17:40 | 04-30 19:25 | 96.03 | 96.14 | 66 | 6337.98 | +7.26 | +0.11% | 0.16R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 72 | ↑94.23 | 0.1572 | 1.14 | **WIN** |
| 36 | INTC | 04-30 17:40 | 04-30 17:55 | 19.91 | 19.85 | 140 | 2787.4 | -8.4 | -0.3% | 0.43R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 68.75 | ↑19.76 | 0.0103 | 1.52 | **LOSS** |
| 37 | SNOW | 04-30 17:40 | 04-30 17:55 | 158.15 | 157.68 | 17 | 2688.55 | -7.99 | -0.3% | 0.43R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 65.77 | ↑156.58 | 0.0794 | 2.61 | **LOSS** |
| 38 | CRWD | 05-01 13:30 | 05-01 13:55 | 432.03 | 428.98 | 17 | 7344.51 | -51.85 | -0.71% | 1.01R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 39 | CAT | 05-01 13:40 | 05-01 14:30 | 316.8 | 316.2 | 14 | 4435.2 | -8.4 | -0.19% | 0.16R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 40 | NOW | 05-01 13:45 | 05-01 15:30 | 967.63 | 971.03 | 7 | 6773.41 | +23.8 | +0.35% | 0.34R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 41 | INTC | 05-01 14:00 | 05-01 14:20 | 20.3 | 20.2 | 137 | 2781.1 | -13.7 | -0.49% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 52.27 | ↑20.18 | 0.0338 | 2.4 | **LOSS** |
| 42 | UBER | 05-01 14:05 | 05-01 14:40 | 81.61 | 81.42 | 120 | 9793.2 | -22.8 | -0.23% | 0.22R | 35m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 75.95 | ↑81.05 | 0.297 | 1.23 | **LOSS** |
| 43 | BA | 05-01 14:20 | 05-01 14:35 | 184.44 | 183.71 | 15 | 2766.6 | -10.95 | -0.4% | 0.43R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 67.89 | ↑183.23 | 0.4622 | 1.76 | **LOSS** |
| 44 | INTU | 05-01 14:30 | 05-01 15:55 | 631.67 | 630.76 | 15 | 9475.05 | -13.65 | -0.14% | 0.18R | 85m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 45 | CELH | 05-01 15:00 | 05-01 15:30 | 35.41 | 35.21 | 276 | 9773.16 | -55.2 | -0.56% | 0.8R | 30m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 76 | ↓35.24 | 0.0724 | 1.51 | **LOSS** |
| 46 | GS | 05-01 15:10 | 05-01 15:55 | 555.93 | 554.63 | 17 | 9450.81 | -22.1 | -0.23% | 0.33R | 45m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 69.37 | ↑551.1 | 3.0106 | 1.1 | **LOSS** |
| 47 | TXN | 05-01 15:10 | 05-01 15:40 | 161.43 | 161.19 | 60 | 9685.8 | -14.4 | -0.15% | 0.21R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 67.92 | ↑160.37 | 0.479 | 1.95 | **LOSS** |
| 48 | AMD | 05-01 15:15 | 05-01 15:30 | 100.14 | 99.44 | 97 | 9713.58 | -67.9 | -0.7% | 0.83R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 75.2 | ↑99.03 | 0.6823 | 2.17 | **LOSS** |
| 49 | ARM | 05-01 15:15 | 05-01 15:30 | 119.53 | 118.41 | 53 | 6335.09 | -59.36 | -0.94% | 0.96R | 15m | market | stop-loss | trend | trend | confirmationRequired | confirmation-required | 77.28 | ↑117.66 | 1.4811 | 1.93 | **LOSS** |
| 50 | AMAT | 05-01 15:15 | 05-01 15:35 | 152.14 | 151.49 | 50 | 7607 | -32.5 | -0.43% | 0.61R | 20m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 76.7 | ↑150.67 | 0.4148 | 1.49 | **LOSS** |
| 51 | LRCX | 05-01 15:15 | 05-01 15:30 | 73.42 | 73.11 | 133 | 9764.86 | -41.23 | -0.42% | 0.48R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 78.32 | ↑72.34 | 0.5466 | 2.04 | **LOSS** |
| 52 | MRVL | 05-01 15:20 | 05-01 15:35 | 61.75 | 61.41 | 103 | 6360.25 | -35.02 | -0.55% | 0.52R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 76.99 | ↑60.73 | 0.8119 | 1.6 | **LOSS** |
| 53 | INTC | 05-01 15:25 | 05-01 15:50 | 20.51 | 20.37 | 477 | 9783.27 | -66.78 | -0.68% | 0.62R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 69.53 | ↑20.32 | 0.0481 | 4.02 | **LOSS** |
| 54 | JPM | 05-01 15:25 | 05-01 15:55 | 247.15 | 246.65 | 39 | 9638.85 | -19.5 | -0.2% | 0.29R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 70.21 | ↑245.21 | 0.8949 | 1.96 | **LOSS** |
| 55 | ELF | 05-01 16:25 | 05-01 17:00 | 62.22 | 62.24 | 45 | 2799.9 | +0.9 | +0.03% | 0.04R | 35m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 57.14 | ↑62.04 | 0.0238 | 2.33 | **WIN** |
| 56 | ADBE | 05-02 13:30 | 05-02 14:00 | 381.91 | 381.06 | 6 | 2291.46 | -5.1 | -0.22% | 0.31R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 61 | ↓381.05 | -0.131 | 2.74 | **LOSS** |
| 57 | QCOM | 05-02 13:30 | 05-02 13:45 | 138.57 | 137.87 | 75 | 10392.75 | -52.5 | -0.51% | 0.54R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 58 | MU | 05-02 13:30 | 05-02 13:45 | 80.35 | 79.33 | 104 | 8356.4 | -106.08 | -1.27% | 1.13R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 59 | BAC | 05-02 13:30 | 05-02 13:45 | 41.04 | 40.78 | 179 | 7346.16 | -46.54 | -0.63% | 0.86R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 60 | DIS | 05-02 13:30 | 05-02 13:45 | 92.79 | 92.46 | 104 | 9650.16 | -34.32 | -0.36% | 0.45R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.03 | ↓92.59 | 0.2055 | 3.87 | **LOSS** |
| 61 | V | 05-02 13:30 | 05-02 13:50 | 349.46 | 348.37 | 30 | 10483.8 | -32.7 | -0.31% | 0.38R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 62 | CRM | 05-02 13:35 | 05-02 14:05 | 274.09 | 273.76 | 26 | 7126.34 | -8.58 | -0.12% | 0.17R | 30m | market | stagnation | breakout | breakout | confirmationRequired | confirmation-required | 63.96 | ↑273.42 | 0.0846 | 1.78 | **LOSS** |
| 63 | ORCL | 05-02 13:35 | 05-02 14:40 | 150.38 | 150.57 | 45 | 6767.1 | +8.55 | +0.13% | 0.13R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 64 | UBER | 05-02 13:35 | 05-02 13:55 | 83.08 | 82.73 | 88 | 7311.04 | -30.8 | -0.42% | 0.47R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.99 | ↓82.61 | 0.2144 | 1.45 | **LOSS** |
| 65 | CAT | 05-02 13:35 | 05-02 13:50 | 321.97 | 319.56 | 22 | 7083.34 | -53.02 | -0.75% | 0.96R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 66 | IBM | 05-02 13:40 | 05-02 13:55 | 243.7 | 242.18 | 30 | 7311 | -45.6 | -0.62% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.98 | ↓243.37 | 0.8439 | 1.31 | **LOSS** |
| 67 | WMT | 05-02 13:45 | 05-02 14:15 | 99.09 | 99.02 | 74 | 7332.66 | -5.18 | -0.07% | 0.1R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.07 | ↑98.63 | 0.3215 | 1.32 | **LOSS** |
| 68 | MSFT | 05-02 13:50 | 05-02 14:30 | 436.81 | 436.25 | 24 | 10483.44 | -13.44 | -0.13% | 0.13R | 40m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 69 | NFLX | 05-02 14:00 | 05-02 15:45 | 1146.48 | 1152.03 | 8 | 9171.84 | +44.4 | +0.48% | 0.69R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 69.31 | ↑1141.22 | 1.1408 | 1.12 | **WIN** |
| 70 | CRWD | 05-02 14:00 | 05-02 14:30 | 442.3 | 439.61 | 22 | 9730.6 | -59.18 | -0.61% | 0.53R | 30m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 61.18 | ↑439.05 | 1.2846 | 1.63 | **LOSS** |
| 71 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 39 | 7290.66 | -32.37 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 72 | INTC | 05-02 14:25 | 05-02 14:40 | 20.57 | 20.47 | 135 | 2776.95 | -13.5 | -0.49% | 0.43R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 67.08 | ↑20.42 | 0.0966 | 1.89 | **LOSS** |
| 73 | QCOM | 05-02 14:55 | 05-02 16:20 | 139.76 | 140.88 | 35 | 9783.2 | +39.2 | +0.8% | 1.1R | 85m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 74 | QCOM | 05-02 14:55 | 05-02 16:40 | 139.76 | 141.14 | 35 | 9783.2 | +48.3 | +0.99% | 1.36R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 76.92 | ↑138.68 | 0.7922 | 1.51 | **WIN** |
| 75 | COIN | 05-02 15:00 | 05-02 15:10 | 208.47 | 205.61 | 46 | 9589.62 | -131.56 | -1.37% | 1.29R | 10m | market | stop-loss | trend | trend | confirmationRequired | confirmation-required | 77.71 | ↓205.44 | 0.7853 | 3.16 | **LOSS** |
| 76 | ELF | 05-02 15:50 | 05-02 16:55 | 66.46 | 67.18 | 51 | 6845.38 | +36.72 | +1.08% | 1.54R | 65m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 77 | ELF | 05-02 15:50 | 05-02 17:40 | 66.46 | 67.13 | 52 | 6845.38 | +34.84 | +1.01% | 1.44R | 110m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 59.76 | ↑64.8 | 0.6942 | 1.35 | **WIN** |
| 78 | CRM | 05-02 16:00 | 05-02 16:30 | 276.1 | 275.87 | 10 | 2761 | -2.3 | -0.08% | 0.11R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 73.62 | ↑274.24 | 0.6244 | 1.47 | **LOSS** |
| 79 | PLTR | 05-02 16:00 | 05-02 17:15 | 123.21 | 122.83 | 79 | 9733.59 | -30.02 | -0.31% | 0.34R | 75m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 63.93 | ↑121.73 | 0.4969 | 1.64 | **LOSS** |
| 80 | ABNB | 05-02 16:00 | 05-02 17:00 | 124.51 | 125.7 | 11 | 2739.22 | +13.09 | +0.96% | 1.03R | 60m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 52.73 | ↑123.15 | 0.2763 | 3.84 | **WIN** |
| 81 | ABNB | 05-02 16:00 | 05-02 17:25 | 124.51 | 125.17 | 11 | 2739.22 | +7.26 | +0.53% | 0.57R | 85m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 52.73 | ↑123.15 | 0.2763 | 3.84 | **WIN** |
| 82 | GS | 05-02 16:00 | 05-02 16:50 | 567.91 | 567.6 | 4 | 2271.64 | -1.24 | -0.05% | 0.07R | 50m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 62.83 | ↑564.01 | 1.3277 | 2.48 | **LOSS** |
| 83 | BA | 05-02 16:00 | 05-02 16:30 | 187.01 | 186.5 | 14 | 2618.14 | -7.14 | -0.27% | 0.39R | 30m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 56.63 | ↑186.3 | 0.2619 | 1.58 | **LOSS** |
| 84 | TXN | 05-02 16:00 | 05-02 16:20 | 166.08 | 165.64 | 58 | 9632.64 | -25.52 | -0.26% | 0.37R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 77.57 | ↑164.11 | 0.8117 | 1.71 | **LOSS** |
| 85 | LRCX | 05-02 16:00 | 05-02 16:20 | 75.47 | 75.17 | 37 | 2792.39 | -11.1 | -0.4% | 0.57R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 74.92 | ↑74.8 | 0.294 | 1.93 | **LOSS** |
| 86 | KLAC | 05-02 16:00 | 05-02 16:35 | 706.86 | 702.01 | 13 | 9189.18 | -63.05 | -0.69% | 0.99R | 35m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 65.3 | ↑701.75 | 5.0071 | 1.1 | **LOSS** |
| 87 | MRVL | 05-02 16:00 | 05-02 17:05 | 63.04 | 62.9 | 44 | 2773.76 | -6.16 | -0.22% | 0.31R | 65m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 75.33 | ↑62.62 | 0.1429 | 2.21 | **LOSS** |
| 88 | NKE | 05-02 16:00 | 05-02 17:05 | 58.08 | 58.03 | 47 | 2729.76 | -2.35 | -0.09% | 0.11R | 65m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 51.33 | ↑57.93 | 0.0066 | 1.71 | **LOSS** |
| 89 | TGT | 05-02 16:00 | 05-02 17:20 | 97.6 | 97.36 | 28 | 2732.8 | -6.72 | -0.25% | 0.36R | 80m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 57.79 | ↓97.41 | -0.042 | 3.31 | **LOSS** |
| 90 | AMZN | 05-02 16:05 | 05-02 16:55 | 191.4 | 191.27 | 14 | 2679.6 | -1.82 | -0.07% | 0.08R | 50m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 66.09 | ↑189.13 | 0.9394 | 2.29 | **LOSS** |
| 91 | COIN | 05-02 16:05 | 05-02 16:35 | 207.59 | 207.42 | 37 | 7680.83 | -6.29 | -0.08% | 0.08R | 30m | market | stagnation | trend | trend | regimeInstability | regime-instability | 54.22 | ↑205.93 | 0.7587 | 1.57 | **LOSS** |
| 92 | NET | 05-02 16:10 | 05-02 16:50 | 125.81 | 125.5 | 22 | 2767.82 | -6.82 | -0.25% | 0.36R | 40m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 66.91 | ↑124.72 | 0.2001 | 1.96 | **LOSS** |
| 93 | TSLA | 05-02 16:35 | 05-02 17:10 | 291.76 | 291.36 | 18 | 5251.68 | -7.2 | -0.14% | 0.13R | 35m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 77.09 | ↑285.22 | 1.7688 | 1.53 | **LOSS** |
| 94 | SBUX | 05-02 16:40 | 05-02 16:55 | 84.57 | 84.31 | 91 | 7695.87 | -23.66 | -0.31% | 0.44R | 15m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 79.76 | ↑83.49 | 0.2297 | 1.08 | **LOSS** |
| 95 | ARM | 05-02 16:45 | 05-02 17:05 | 123.11 | 122.57 | 33 | 4062.63 | -17.82 | -0.44% | 0.63R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 73.23 | ↑121.01 | 0.6264 | 1.76 | **LOSS** |
| 96 | NVDA | 05-05 13:30 | 05-05 14:00 | 113.96 | 113.73 | 21 | 2393.16 | -4.83 | -0.2% | 0.25R | 30m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 45 | ↓113.55 | -0.3941 | 3.6 | **LOSS** |
| 97 | AMD | 05-05 13:35 | 05-05 14:30 | 100.6 | 100.29 | 66 | 6639.6 | -20.46 | -0.31% | 0.31R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 98 | UNH | 05-05 13:40 | 05-05 15:10 | 402.5 | 405.31 | 3 | 2415 | +8.43 | +0.7% | 1R | 90m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 80.98 | ↑400.96 | 0.5045 | 1.58 | **WIN** |
| 99 | UNH | 05-05 13:40 | 05-05 15:25 | 402.5 | 405.74 | 3 | 2415 | +9.72 | +0.8% | 1.14R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 80.98 | ↑400.96 | 0.5045 | 1.58 | **WIN** |
| 100 | GOOGL | 05-05 13:45 | 05-05 14:00 | 165.31 | 164.66 | 16 | 2644.96 | -10.4 | -0.39% | 0.56R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 70.14 | ↑164.31 | 0.088 | 2.24 | **LOSS** |
| 101 | NOW | 05-05 13:55 | 05-05 14:20 | 991.77 | 985.46 | 7 | 6942.39 | -44.17 | -0.64% | 0.89R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 102 | PANW | 05-05 15:00 | 05-05 15:30 | 190.35 | 190.04 | 51 | 9707.85 | -15.81 | -0.16% | 0.23R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 74.81 | ↑188.9 | 0.5593 | 1.42 | **LOSS** |
| 103 | PLTR | 05-05 16:20 | 05-05 16:50 | 124.99 | 124.45 | 61 | 7624.39 | -32.94 | -0.43% | 0.61R | 30m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 71.09 | ↑123.14 | 0.4883 | 1.54 | **LOSS** |
| 104 | CELH | 05-05 17:40 | 05-05 18:40 | 34.61 | 34.58 | 283 | 9794.63 | -8.49 | -0.09% | 0.13R | 60m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 73.03 | ↑34.17 | 0.073 | 1.31 | **LOSS** |
| 105 | AAPL | 05-06 13:35 | 05-06 13:45 | 199.93 | 197.7 | 12 | 2399.16 | -26.76 | -1.12% | 1.58R | 10m | market | stop-loss | mixed | momentum-pilot | regimeInstability | regime-instability | 53.98 | ↓198.99 | -0.6124 | 1.77 | **LOSS** |
| 106 | XOM | 05-06 14:10 | 05-06 15:55 | 104.96 | 105.36 | 93 | 9761.28 | +37.2 | +0.38% | 0.44R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 107 | CVX | 05-06 14:15 | 05-06 14:40 | 136.63 | 136.25 | 20 | 2732.6 | -7.6 | -0.28% | 0.3R | 25m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 58.8 | ↑136.01 | -0.0009 | 1.51 | **LOSS** |
| 108 | AVGO | 05-06 15:25 | 05-06 15:40 | 201.03 | 200.13 | 13 | 2613.39 | -11.7 | -0.45% | 0.64R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 79.64 | ↑198.34 | 0.0054 | 1.47 | **LOSS** |
| 109 | AMZN | 05-06 16:10 | 05-06 16:20 | 187.78 | 186.23 | 14 | 2628.92 | -21.7 | -0.83% | 1.19R | 10m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 65.55 | ↑186.04 | 0.2801 | 2.78 | **LOSS** |
| 110 | AVGO | 05-06 16:10 | 05-06 16:20 | 201.75 | 199.88 | 13 | 2622.75 | -24.31 | -0.93% | 1.33R | 10m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 67.69 | ↑198.91 | 0.6105 | 2.29 | **LOSS** |
| 111 | ABNB | 05-06 16:10 | 05-06 16:20 | 124.1 | 123.15 | 22 | 2730.2 | -20.9 | -0.77% | 1.1R | 10m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 64.02 | ↓123.42 | -0.0951 | 1.6 | **LOSS** |
| 112 | AMZN | 05-07 13:30 | 05-07 14:45 | 186.8 | 189.71 | 7 | 2615.2 | +20.37 | +1.56% | 2.23R | 75m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 62.24 | ↑186.14 | 0.0942 | 4.27 | **WIN** |
| 113 | AMZN | 05-07 13:30 | 05-07 15:10 | 186.8 | 188.11 | 7 | 2615.2 | +9.17 | +0.7% | 1R | 100m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 62.24 | ↓186.14 | 0.0942 | 4.27 | **WIN** |
| 114 | SHOP | 05-07 13:35 | 05-07 14:15 | 95.67 | 95.01 | 76 | 7270.92 | -50.16 | -0.69% | 0.64R | 40m | market | early-reversal | breakout | breakout | confirmationRequired | confirmation-required | 65.56 | ↓95.25 | 0.1611 | 1.97 | **LOSS** |
| 115 | NKE | 05-07 13:35 | 05-07 15:10 | 58.02 | 58.04 | 126 | 7310.52 | +2.52 | +0.03% | 0.04R | 95m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 116 | ADBE | 05-07 13:40 | 05-07 13:55 | 385.88 | 384.79 | 7 | 2701.16 | -7.63 | -0.28% | 0.4R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 58.94 | ↓385.33 | 0.1731 | 2.18 | **LOSS** |
| 117 | MDB | 05-07 13:55 | 05-07 14:10 | 174.11 | 173.28 | 16 | 2785.76 | -13.28 | -0.48% | 0.48R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 56.99 | ↑172.97 | 0.5089 | 2.32 | **LOSS** |
| 118 | TGT | 05-07 14:40 | 05-07 14:55 | 95.23 | 94.9 | 29 | 2761.67 | -9.57 | -0.35% | 0.5R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 71.36 | ↑94.71 | 0.3788 | 2.4 | **LOSS** |
| 119 | NVDA | 05-07 15:50 | 05-07 16:05 | 114.16 | 113.85 | 24 | 2739.84 | -7.44 | -0.27% | 0.39R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 65.76 | ↑113.25 | 0.1119 | 1.69 | **LOSS** |
| 120 | MU | 05-07 15:55 | 05-07 16:25 | 81.54 | 81.35 | 75 | 6115.5 | -14.25 | -0.23% | 0.33R | 30m | market | stagnation | trend | trend | thinChop | thin-chop | 64.67 | ↑80.85 | 0.1015 | 1.86 | **LOSS** |
| 121 | LMT | 05-07 16:25 | 05-07 18:10 | 472.1 | 472.07 | 16 | 7553.6 | -0.48 | -0.01% | 0.01R | 105m | market | timeout | trend | trend | thinChop | thin-chop | 65.62 | ↑470.02 | 0.8808 | 1.5 | **LOSS** |
| 122 | AVGO | 05-07 16:45 | 05-07 17:30 | 203.11 | 202.89 | 37 | 7515.07 | -8.14 | -0.11% | 0.16R | 45m | market | stagnation | trend | trend | regimeInstability | regime-instability | 60.83 | ↑200.88 | 0.4076 | 1.16 | **LOSS** |
| 123 | NOW | 05-07 16:45 | 05-07 17:05 | 983.67 | 980.87 | 7 | 6885.69 | -19.6 | -0.28% | 0.4R | 20m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 59.34 | ↑976.15 | 2.811 | 2.11 | **LOSS** |
| 124 | INTU | 05-07 16:45 | 05-07 18:05 | 637.58 | 633.12 | 12 | 7650.96 | -53.52 | -0.7% | 1R | 80m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 66.87 | ↓632.73 | 1.306 | 1.48 | **LOSS** |
| 125 | LRCX | 05-07 16:55 | 05-07 17:25 | 74.33 | 74 | 37 | 2750.21 | -12.21 | -0.44% | 0.63R | 30m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 72.44 | ↑73.52 | 0.1753 | 1.85 | **LOSS** |
| 126 | MRVL | 05-07 17:10 | 05-07 17:25 | 55.46 | 55.09 | 122 | 6766.12 | -45.14 | -0.67% | 0.66R | 15m | market | early-reversal | breakout | breakout | confirmationRequired | confirmation-required | 74.22 | ↑54.81 | 0.0499 | 1.63 | **LOSS** |
| 127 | PYPL | 05-08 13:40 | 05-08 14:10 | 69.75 | 69.65 | 105 | 7323.75 | -10.5 | -0.14% | 0.14R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 128 | XOM | 05-08 13:40 | 05-08 14:10 | 106.3 | 105.65 | 69 | 7334.7 | -44.85 | -0.61% | 0.79R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 129 | ELF | 05-08 14:25 | 05-08 14:50 | 68.08 | 67.83 | 108 | 7352.64 | -27 | -0.37% | 0.35R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 130 | META | 05-08 15:20 | 05-08 17:05 | 604.67 | 607.86 | 4 | 2418.68 | +12.76 | +0.53% | 0.76R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 67.54 | ↑602.57 | 0.6979 | 2.24 | **WIN** |
| 131 | MSFT | 05-08 15:20 | 05-08 17:05 | 440.01 | 442.71 | 6 | 2640.06 | +16.2 | +0.61% | 0.87R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 64.93 | ↑438.54 | 0.6682 | 3.55 | **WIN** |
| 132 | NKE | 05-08 15:20 | 05-08 17:00 | 59.55 | 59.98 | 23 | 2798.85 | +9.89 | +0.72% | 0.86R | 100m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 61.17 | ↑59.24 | 0.1565 | 1.5 | **WIN** |
| 133 | NKE | 05-08 15:20 | 05-08 17:05 | 59.55 | 60.01 | 24 | 2798.85 | +11.04 | +0.77% | 0.92R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 61.17 | ↑59.24 | 0.1565 | 1.5 | **WIN** |
| 134 | TSM | 05-08 15:25 | 05-08 15:55 | 175.91 | 175.62 | 15 | 2638.65 | -4.35 | -0.16% | 0.23R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 62.84 | ↑174.74 | 0.3853 | 1.83 | **LOSS** |
| 135 | TGT | 05-08 15:25 | 05-08 17:10 | 97.16 | 98.08 | 28 | 2720.48 | +25.76 | +0.95% | 1.36R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 56.9 | ↑96.79 | 0.2348 | 1.59 | **WIN** |
| 136 | TXN | 05-08 15:30 | 05-08 17:15 | 166.66 | 167.44 | 16 | 2666.56 | +12.48 | +0.47% | 0.67R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 66.91 | ↑165.79 | 0.4575 | 2.14 | **WIN** |
| 137 | NVDA | 05-08 15:35 | 05-08 17:20 | 117.66 | 117.93 | 22 | 2588.52 | +5.94 | +0.23% | 0.26R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 56.94 | ↑117.18 | -0.2455 | 1.71 | **WIN** |
| 138 | ORCL | 05-08 15:40 | 05-08 15:55 | 151.39 | 150.65 | 50 | 7569.5 | -37 | -0.49% | 0.7R | 15m | market | early-reversal | trend | trend | thinChop | thin-chop | 58.09 | ↑149.8 | 0.4766 | 1.35 | **LOSS** |
| 139 | ABNB | 05-08 15:40 | 05-08 16:25 | 127.07 | 126.93 | 77 | 9784.39 | -10.78 | -0.11% | 0.16R | 45m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 68.8 | ↑125.05 | 0.7853 | 1.35 | **LOSS** |
| 140 | DDOG | 05-08 15:40 | 05-08 17:25 | 108.14 | 109.04 | 90 | 9732.6 | +81 | +0.83% | 1.09R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 55.15 | ↑107.26 | 0.2842 | 2.14 | **WIN** |
| 141 | XOM | 05-08 15:40 | 05-08 15:55 | 107.04 | 106.64 | 91 | 9740.64 | -36.4 | -0.37% | 0.53R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 62.66 | ↑106.2 | 0.402 | 2.46 | **LOSS** |
| 142 | HPE | 05-08 15:40 | 05-08 15:55 | 17.06 | 16.96 | 574 | 9792.44 | -57.4 | -0.59% | 0.68R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 52.94 | ↑16.92 | 0.0935 | 2.02 | **LOSS** |
| 143 | ELF | 05-08 15:40 | 05-08 16:25 | 68.51 | 68.41 | 143 | 9796.93 | -14.3 | -0.15% | 0.16R | 45m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 63.78 | ↑67.84 | 0.3917 | 5.89 | **LOSS** |
| 144 | MDB | 05-08 15:45 | 05-08 16:00 | 179.22 | 178.15 | 42 | 7527.24 | -44.94 | -0.6% | 0.86R | 15m | market | early-reversal | trend | trend | thinChop | thin-chop | 69.85 | ↑176.79 | 0.8866 | 1.28 | **LOSS** |
| 145 | QCOM | 05-08 16:15 | 05-08 17:45 | 146.73 | 146.52 | 66 | 9684.18 | -13.86 | -0.14% | 0.2R | 90m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 77.38 | ↑144.96 | 0.5208 | 1.95 | **LOSS** |
| 146 | NET | 05-08 16:55 | 05-08 17:35 | 124.96 | 124.78 | 78 | 9746.88 | -14.04 | -0.14% | 0.2R | 40m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 64.23 | ↑123.24 | 0.5628 | 2.76 | **LOSS** |
| 147 | MDB | 05-08 17:00 | 05-08 17:55 | 179.91 | 179.79 | 54 | 9715.14 | -6.48 | -0.07% | 0.1R | 55m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 67.48 | ↑177.39 | 0.7506 | 1.43 | **LOSS** |
| 148 | TSLA | 05-09 17:45 | 05-09 18:00 | 300.93 | 299.56 | 9 | 2708.37 | -12.33 | -0.46% | 0.66R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 77.25 | ↓300.3 | -0.0538 | 1.96 | **LOSS** |
| 149 | ABNB | 05-09 17:55 | 05-09 18:15 | 126.27 | 125.87 | 77 | 9722.79 | -30.8 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 68.09 | ↑124.73 | 0.3196 | 1.95 | **LOSS** |
| 150 | KLAC | 05-12 15:50 | 05-12 17:35 | 753.02 | 759.56 | 13 | 9789.26 | +85.02 | +0.87% | 1.24R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 72 | ↑748.33 | 7.4136 | 2.75 | **WIN** |
| 151 | GOOGL | 05-12 16:30 | 05-12 18:15 | 158.05 | 158.68 | 17 | 2686.85 | +10.71 | +0.4% | 0.57R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 66.67 | ↑157.2 | -0.0295 | 1.7 | **WIN** |
| 152 | LLY | 05-12 16:40 | 05-12 17:40 | 759.64 | 759.68 | 8 | 6077.12 | +0.32 | +0.01% | 0.01R | 60m | market | breakeven-stop | trend | trend | confirmationRequired | confirmation-required | 74.57 | ↑741.47 | 4.7499 | 2.96 | **WIN** |
| 153 | CRWD | 05-12 16:45 | 05-12 18:30 | 424.19 | 427.08 | 6 | 2545.14 | +17.34 | +0.68% | 0.97R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 56.31 | ↑421.38 | 0.4319 | 2.77 | **WIN** |
| 154 | AMAT | 05-12 16:55 | 05-12 18:10 | 168.94 | 168.8 | 57 | 9629.58 | -7.98 | -0.08% | 0.11R | 75m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 79.55 | ↑167.17 | 0.4777 | 1.74 | **LOSS** |
| 155 | MDB | 05-12 17:00 | 05-12 17:20 | 190.13 | 189.62 | 14 | 2661.82 | -7.14 | -0.27% | 0.39R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 73.1 | ↑188.55 | 0.4417 | 2.03 | **LOSS** |
| 156 | MU | 05-12 17:05 | 05-12 17:20 | 93.57 | 93.28 | 29 | 2713.53 | -8.41 | -0.31% | 0.44R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 74.92 | ↑93.08 | 0.1049 | 2.25 | **LOSS** |
| 157 | CELH | 05-12 17:55 | 05-12 18:55 | 36.61 | 36.94 | 33 | 2452.87 | +10.89 | +0.9% | 1.29R | 60m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 62.42 | ↑36.63 | 0.0921 | 2.17 | **WIN** |
| 158 | CELH | 05-12 17:55 | 05-12 19:40 | 36.61 | 37.1 | 34 | 2452.87 | +16.66 | +1.34% | 1.91R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 62.42 | ↑36.63 | 0.0921 | 2.17 | **WIN** |
| 159 | AVGO | 05-13 13:30 | 05-13 15:05 | 224.51 | 230.8 | 43 | 9653.93 | +270.47 | +2.8% | 3.68R | 95m | market | profit-target | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.7 | ↑223.7 | 0.6728 | 3.15 | **WIN** |
| 160 | TSM | 05-13 13:30 | 05-13 15:15 | 189.9 | 192.59 | 38 | 7216.2 | +102.22 | +1.42% | 1.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 161 | META | 05-13 13:35 | 05-13 15:20 | 649.67 | 658.27 | 7 | 4547.69 | +60.2 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 162 | BA | 05-13 13:35 | 05-13 15:20 | 202.36 | 203.42 | 17 | 3440.12 | +18.02 | +0.52% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 163 | DELL | 05-13 13:50 | 05-13 15:35 | 106.07 | 107.57 | 44 | 4667.08 | +66 | +1.41% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 164 | SNOW | 05-13 14:00 | 05-13 15:05 | 182.88 | 182.78 | 53 | 9692.64 | -5.3 | -0.05% | 0.07R | 65m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 75.44 | ↑181.93 | 0.4473 | 1.56 | **LOSS** |
| 165 | GOOGL | 05-13 14:15 | 05-13 16:00 | 159.03 | 159.81 | 17 | 2703.51 | +13.26 | +0.49% | 0.46R | 105m | market | timeout | mixed | momentum-pilot | regimeInstability | regime-instability | 53.37 | ↑157.5 | -0.1348 | 1.58 | **WIN** |
| 166 | TXN | 05-13 14:55 | 05-13 16:40 | 188.54 | 189.2 | 14 | 2639.56 | +9.24 | +0.35% | 0.5R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 66.45 | ↑187.82 | 0.2635 | 1.96 | **WIN** |
| 167 | KLAC | 05-13 15:05 | 05-13 16:50 | 786.39 | 795.74 | 12 | 9436.68 | +112.2 | +1.19% | 1.68R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 79.1 | ↑779.46 | 6.7608 | 3.34 | **WIN** |
| 168 | META | 05-13 15:25 | 05-13 15:55 | 660.37 | 659.05 | 14 | 9245.18 | -18.48 | -0.2% | 0.29R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 71.87 | ↑653.04 | 4.7839 | 3.4 | **LOSS** |
| 169 | DELL | 05-13 15:40 | 05-13 16:10 | 107.85 | 107.57 | 90 | 9706.5 | -25.2 | -0.26% | 0.36R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 66.67 | ↑106.87 | 0.8481 | 6.04 | **LOSS** |
| 170 | HPE | 05-13 15:40 | 05-13 15:55 | 18.03 | 17.98 | 543 | 9790.29 | -27.15 | -0.28% | 0.4R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 67.86 | ↑17.91 | 0.0585 | 2.64 | **LOSS** |
| 171 | NET | 05-13 15:45 | 05-13 17:10 | 148.99 | 150.21 | 32 | 9684.35 | +39.04 | +0.82% | 1.17R | 85m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 172 | NET | 05-13 15:45 | 05-13 17:30 | 148.99 | 150.64 | 33 | 9684.35 | +54.45 | +1.11% | 1.59R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 79.73 | ↑146.7 | 1.1986 | 1.08 | **WIN** |
| 173 | AVGO | 05-13 16:25 | 05-13 16:55 | 233.94 | 233.75 | 29 | 6784.26 | -5.51 | -0.08% | 0.11R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 67.87 | ↑229.28 | 1.4154 | 1.08 | **LOSS** |
| 174 | ELF | 05-13 16:25 | 05-13 17:50 | 76.91 | 77.7 | 63 | 9767.57 | +49.77 | +1.03% | 1.37R | 85m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 175 | ELF | 05-13 16:25 | 05-13 18:10 | 76.91 | 77.48 | 64 | 9767.57 | +36.48 | +0.74% | 0.99R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 71.97 | ↑76.2 | 0.1427 | 1.98 | **WIN** |
| 176 | CELH | 05-13 16:30 | 05-13 17:05 | 37.78 | 37.67 | 259 | 9785.02 | -28.49 | -0.29% | 0.41R | 35m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 75 | ↑37.37 | 0.0887 | 2.45 | **LOSS** |
| 177 | TSLA | 05-13 16:50 | 05-13 17:50 | 325.16 | 334.8 | 8 | 2601.28 | +77.12 | +2.96% | 4.23R | 60m | market | profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 71.9 | ↑321.71 | 0.259 | 1.92 | **WIN** |
| 178 | SMCI | 05-13 17:15 | 05-13 17:50 | 38.51 | 38.61 | 178 | 6854.78 | +17.8 | +0.26% | 0.22R | 35m | market | trailing-stop | trend | trend | confirmationRequired | confirmation-required | 55.3 | ↑37.34 | 0.1012 | 1.7 | **WIN** |
| 179 | SBUX | 05-13 17:25 | 05-13 19:10 | 86.62 | 86.72 | 113 | 9788.06 | +11.3 | +0.12% | 0.17R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 79.73 | ↑85.89 | 0.1051 | 1.56 | **WIN** |
| 180 | GOOGL | 05-14 13:30 | 05-14 13:45 | 160.41 | 159.89 | 17 | 2726.97 | -8.84 | -0.32% | 0.46R | 15m | market | trailing-stop | trend | momentum-pilot | regimeInstability | regime-instability | 68.52 | ↓160.22 | 0.0071 | 1.87 | **LOSS** |
| 181 | SNOW | 05-14 13:30 | 05-14 13:45 | 182.9 | 181.22 | 14 | 2560.6 | -23.52 | -0.92% | 1.31R | 15m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 62.09 | ↓182.86 | -0.1839 | 1.83 | **LOSS** |
| 182 | LLY | 05-14 13:30 | 05-14 13:45 | 756.92 | 751.21 | 13 | 9839.96 | -74.23 | -0.75% | 1.07R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 183 | NET | 05-14 13:35 | 05-14 13:45 | 153.81 | 152.02 | 47 | 7229.07 | -84.13 | -1.16% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 184 | NVO | 05-14 13:35 | 05-14 13:50 | 66.65 | 65.95 | 71 | 4732.15 | -49.7 | -1.05% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 185 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.21 | 72.9 | 100 | 7321 | -31 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 186 | ELF | 05-14 14:00 | 05-14 14:15 | 79.81 | 78.92 | 122 | 9736.82 | -108.58 | -1.12% | 1.06R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 77.94 | ↓79.24 | 0.4534 | 1.39 | **LOSS** |
| 187 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 30 | 9737.4 | +54.6 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 188 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 30 | 9737.4 | +125.4 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 189 | DIS | 05-14 15:25 | 05-14 15:50 | 112.15 | 111.8 | 24 | 2691.6 | -8.4 | -0.31% | 0.44R | 25m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 76.13 | ↑111.29 | 0.1108 | 1.79 | **LOSS** |
| 190 | COIN | 05-14 16:00 | 05-14 16:35 | 261.16 | 260.85 | 10 | 2611.6 | -3.1 | -0.12% | 0.11R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 62.7 | ↑258.02 | 0.5722 | 1.81 | **LOSS** |
| 191 | KLAC | 05-14 16:30 | 05-14 17:15 | 799.99 | 799 | 3 | 2399.97 | -2.97 | -0.12% | 0.17R | 45m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 56.55 | ↑795.43 | 0.6583 | 1.95 | **LOSS** |
| 192 | RIVN | 05-14 16:35 | 05-14 18:20 | 14.74 | 14.97 | 365 | 5380.1 | +83.95 | +1.56% | 1.59R | 105m | market | timeout | trend | trend | regimeInstability | regime-instability | 63.73 | ↑14.48 | 0.0668 | 1.11 | **WIN** |
| 193 | TSLA | 05-14 17:50 | 05-14 18:25 | 347.25 | 346.67 | 8 | 2778 | -4.64 | -0.17% | 0.19R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 52.44 | ↑343.99 | 0.2867 | 2.8 | **LOSS** |
| 194 | NKE | 05-15 13:50 | 05-15 14:20 | 62.08 | 61.98 | 40 | 2483.2 | -4 | -0.16% | 0.16R | 30m | market | stagnation | mixed | momentum-pilot | regimeInstability | regime-instability | 49.75 | ↑61.52 | -0.1353 | 1.99 | **LOSS** |
| 195 | COST | 05-15 14:50 | 05-15 16:40 | 1004.3 | 1007.98 | 9 | 9038.7 | +33.12 | +0.37% | 0.53R | 110m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75.04 | ↑997.78 | 1.6085 | 1.14 | **WIN** |
| 196 | TGT | 05-15 15:05 | 05-15 15:35 | 96.78 | 96.44 | 79 | 7645.62 | -26.86 | -0.35% | 0.5R | 30m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 79.81 | ↑95.59 | 0.3793 | 1.3 | **LOSS** |
| 197 | NVO | 05-15 15:20 | 05-15 15:35 | 65.7 | 65.49 | 117 | 7686.9 | -24.57 | -0.32% | 0.46R | 15m | market | early-reversal | trend | trend | regimeInstability | regime-instability | 57.06 | ↑65.22 | 0.2397 | 1.08 | **LOSS** |
| 198 | RIVN | 05-15 15:50 | 05-15 17:10 | 15.3 | 15.45 | 251 | 7695.9 | +37.65 | +0.98% | 0.92R | 80m | market | trim-profit-target | trend | trend | thinChop | thin-chop | 69.3 | ↑15.11 | 0.0762 | 1.31 | **WIN** |
| 199 | RIVN | 05-15 15:50 | 05-15 17:20 | 15.3 | 15.39 | 252 | 7695.9 | +22.68 | +0.59% | 0.56R | 90m | market | trailing-stop | trend | trend | thinChop | thin-chop | 69.3 | ↑15.11 | 0.0762 | 1.31 | **WIN** |
| 200 | NVO | 05-15 16:05 | 05-15 16:25 | 66.05 | 65.84 | 148 | 9775.4 | -31.08 | -0.32% | 0.46R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 77.23 | ↑65.38 | 0.1931 | 1.67 | **LOSS** |
| 201 | DELL | 05-15 16:45 | 05-15 17:30 | 111.18 | 111.05 | 88 | 9783.84 | -11.44 | -0.12% | 0.17R | 45m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 78.02 | ↑109.77 | 0.3998 | 1.5 | **LOSS** |
| 202 | TSLA | 05-16 13:30 | 05-16 13:50 | 349.52 | 347.45 | 23 | 8038.96 | -47.61 | -0.59% | 0.53R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.42 | ↓348.18 | 0.1512 | 3.16 | **LOSS** |
| 203 | TSM | 05-16 13:30 | 05-16 14:05 | 194.59 | 194.2 | 14 | 2724.26 | -5.46 | -0.2% | 0.29R | 35m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 66.98 | ↓194.22 | -0.0127 | 1.53 | **LOSS** |
| 204 | SHOP | 05-16 13:35 | 05-16 13:50 | 112.21 | 111.42 | 65 | 7293.65 | -51.35 | -0.7% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 205 | LLY | 05-16 13:35 | 05-16 15:20 | 744.51 | 747.89 | 9 | 6700.59 | +30.42 | +0.45% | 0.54R | 105m | market | timeout | breakout | breakout | confirmationRequired | confirmation-required | 63.72 | ↓742.59 | 1.2121 | 2.2 | **WIN** |
| 206 | DELL | 05-16 13:45 | 05-16 14:40 | 112.58 | 112.38 | 65 | 7317.7 | -13 | -0.18% | 0.26R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 207 | NKE | 05-16 14:10 | 05-16 14:55 | 63.37 | 63.24 | 154 | 9758.98 | -20.02 | -0.21% | 0.25R | 45m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 77.53 | ↓63.01 | 0.2723 | 2.19 | **LOSS** |
| 208 | WMT | 05-16 14:35 | 05-16 15:20 | 98.68 | 98.41 | 99 | 9769.32 | -26.73 | -0.27% | 0.23R | 45m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 73.1 | ↑97.8 | 0.6763 | 1.18 | **LOSS** |
| 209 | DELL | 05-16 17:00 | 05-16 18:45 | 113.65 | 114.11 | 24 | 2727.6 | +11.04 | +0.4% | 0.57R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 56.32 | ↑112.92 | 0.1405 | 1.98 | **WIN** |
| 210 | ORCL | 05-19 14:05 | 05-19 14:20 | 161.2 | 160.59 | 17 | 2740.4 | -10.37 | -0.38% | 0.49R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 53.85 | ↑160.16 | 0.0232 | 1.59 | **LOSS** |
| 211 | BAC | 05-19 14:05 | 05-19 14:25 | 45.05 | 44.87 | 217 | 9775.85 | -39.06 | -0.4% | 0.55R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 70.47 | ↑44.72 | 0.0448 | 1.85 | **LOSS** |
| 212 | RIVN | 05-19 15:45 | 05-19 17:30 | 15.85 | 16.18 | 163 | 2583.55 | +53.79 | +2.08% | 2.93R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 72.92 | ↑15.55 | 0.0438 | 1.55 | **WIN** |
| 213 | NVO | 05-19 16:25 | 05-19 16:40 | 66.71 | 66.43 | 146 | 9739.66 | -40.88 | -0.42% | 0.6R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 77.27 | ↑65.96 | 0.2627 | 1.17 | **LOSS** |
| 214 | SMCI | 05-19 17:00 | 05-19 17:30 | 45.51 | 45.29 | 61 | 2776.11 | -13.42 | -0.48% | 0.58R | 30m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 58.39 | ↓45.43 | -0.0315 | 1.68 | **LOSS** |
| 215 | TSLA | 05-19 17:05 | 05-19 17:50 | 341.16 | 340.6 | 8 | 2729.28 | -4.48 | -0.16% | 0.23R | 45m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 74.89 | ↑338.05 | 0.1968 | 1.55 | **LOSS** |
| 216 | NKE | 05-20 13:30 | 05-20 14:50 | 62.42 | 62.9 | 22 | 2746.48 | +10.56 | +0.77% | 1.1R | 80m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 69.23 | ↑62.44 | -0.0014 | 2.29 | **WIN** |
| 217 | NKE | 05-20 13:30 | 05-20 15:15 | 62.42 | 62.85 | 22 | 2746.48 | +9.46 | +0.69% | 0.99R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 69.23 | ↑62.44 | -0.0014 | 2.29 | **WIN** |
| 218 | TSLA | 05-20 13:35 | 05-20 13:45 | 354.23 | 345.68 | 11 | 3896.53 | -94.05 | -2.41% | 2.41R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 89.04 | ↓351.62 | 2.5553 | 3.4 | **LOSS** |
| 219 | RIVN | 05-20 16:40 | 05-20 16:55 | 17.1 | 17.02 | 164 | 2804.4 | -13.12 | -0.47% | 0.54R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 60.78 | ↑16.87 | 0.031 | 1.58 | **LOSS** |
| 220 | GOOGL | 05-21 13:30 | 05-21 14:05 | 165.01 | 169.51 | 16 | 2640.16 | +72 | +2.73% | 3.85R | 35m | market | profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 65.45 | ↑164.72 | -0.2991 | 2.08 | **WIN** |
| 221 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.95 | 43.64 | 154 | 6768.3 | -47.74 | -0.71% | 0.68R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 222 | META | 05-21 13:40 | 05-21 14:10 | 640.68 | 639.76 | 4 | 2562.72 | -3.68 | -0.14% | 0.2R | 30m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 78.5 | ↑637.18 | 0.438 | 2.59 | **LOSS** |
| 223 | META | 05-21 14:55 | 05-21 15:25 | 644.91 | 644.28 | 15 | 9673.65 | -9.45 | -0.1% | 0.14R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 58.68 | ↑639.75 | 2.0467 | 1.14 | **LOSS** |
| 224 | AVGO | 05-21 15:05 | 05-21 15:35 | 234.69 | 234.44 | 41 | 9622.29 | -10.25 | -0.11% | 0.16R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 78 | ↑231.9 | 0.9065 | 1.44 | **LOSS** |
| 225 | SHOP | 05-21 15:05 | 05-21 15:20 | 105.27 | 104.83 | 26 | 2737.02 | -11.44 | -0.42% | 0.55R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 57.93 | ↓104.82 | -0.136 | 2.69 | **LOSS** |
| 226 | GOOGL | 05-21 15:10 | 05-21 15:35 | 172.8 | 171.56 | 36 | 6220.8 | -44.64 | -0.72% | 0.61R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 75.56 | ↑169.43 | 2.1842 | 1.22 | **LOSS** |
| 227 | GOOGL | 05-22 13:35 | 05-22 14:10 | 171.77 | 175.9 | 39 | 6699.03 | +161.07 | +2.4% | 2.4R | 35m | market | profit-target | breakout | breakout | confirmationRequired | confirmation-required | 73.2 | ↑171.51 | 0.0722 | 1.68 | **WIN** |
| 228 | NKE | 05-22 13:35 | 05-22 14:20 | 61 | 60.85 | 172 | 10492 | -25.8 | -0.25% | 0.3R | 45m | market | stagnation | breakout | breakout | falseBreakoutProne | false-breakout-risk | 64.69 | ↓60.64 | -0.0302 | 4.89 | **LOSS** |
| 229 | META | 05-22 13:50 | 05-22 14:35 | 639.05 | 638.52 | 4 | 2556.2 | -2.12 | -0.08% | 0.1R | 45m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 64.07 | ↓635.91 | -0.1051 | 4.04 | **LOSS** |
| 230 | ORCL | 05-22 14:00 | 05-22 14:20 | 158.87 | 158.35 | 16 | 2541.92 | -8.32 | -0.33% | 0.47R | 20m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 86.71 | ↑157.85 | -0.0192 | 2.72 | **LOSS** |
| 231 | INTC | 05-22 14:00 | 05-22 14:15 | 20.82 | 20.74 | 118 | 2456.76 | -9.44 | -0.38% | 0.39R | 15m | market | early-reversal | trend | momentum-pilot | thinChop | thin-chop | 56 | ↑20.65 | -0.0019 | 2.19 | **LOSS** |
| 232 | AVGO | 05-22 15:05 | 05-22 15:30 | 232.93 | 232.18 | 42 | 9783.06 | -31.5 | -0.32% | 0.45R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 65.02 | ↑229.61 | 0.7526 | 1.13 | **LOSS** |
| 233 | GS | 05-22 15:35 | 05-22 16:05 | 600.92 | 599.59 | 12 | 7211.04 | -15.96 | -0.22% | 0.31R | 30m | market | stagnation | trend | trend | thinChop | thin-chop | 66.16 | ↑596.54 | 1.2402 | 1.06 | **LOSS** |
| 234 | RIVN | 05-22 17:20 | 05-22 19:05 | 15.95 | 16.01 | 154 | 2456.3 | +9.24 | +0.38% | 0.54R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 46.05 | ↑15.92 | -0.0074 | 1.99 | **WIN** |
| 235 | QCOM | 05-23 17:25 | 05-23 18:20 | 146.04 | 145.59 | 46 | 6717.84 | -20.7 | -0.31% | 0.44R | 55m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 77.07 | ↑143.59 | 0.547 | 1.78 | **LOSS** |
| 236 | GOOGL | 05-27 13:30 | 05-27 15:15 | 170.97 | 172.17 | 43 | 7351.71 | +51.6 | +0.7% | 0.75R | 105m | market | timeout | breakout | breakout | confirmationRequired | confirmation-required | 60.08 | ↑170.83 | 0.175 | 2.07 | **WIN** |
| 237 | AMZN | 05-27 13:30 | 05-27 15:15 | 203.38 | 205.05 | 13 | 2643.94 | +21.71 | +0.82% | 1.12R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 63.65 | ↑203.6 | -0.027 | 2.79 | **WIN** |
| 238 | TSM | 05-27 13:35 | 05-27 15:20 | 194.96 | 195.82 | 37 | 7213.52 | +31.82 | +0.44% | 0.63R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 239 | GS | 05-27 13:35 | 05-27 15:20 | 607.04 | 610.89 | 11 | 6677.44 | +42.35 | +0.63% | 0.9R | 105m | market | timeout | breakout | breakout | confirmationRequired | confirmation-required | 70.89 | ↑606.08 | 1.0498 | 1.66 | **WIN** |
| 240 | SBUX | 05-27 13:35 | 05-27 14:05 | 86.2 | 85.97 | 85 | 7327 | -19.55 | -0.27% | 0.39R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 241 | LLY | 05-27 14:00 | 05-27 14:15 | 723.23 | 719.69 | 13 | 9401.99 | -46.02 | -0.49% | 0.7R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 71.92 | ↑717.27 | 1.5869 | 1.41 | **LOSS** |
| 242 | AVGO | 05-27 14:10 | 05-27 14:35 | 234.48 | 232.89 | 41 | 9613.68 | -65.19 | -0.68% | 0.66R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 74.45 | ↓233.68 | 1.1642 | 1.1 | **LOSS** |
| 243 | AMD | 05-27 14:30 | 05-27 14:55 | 115.07 | 114.66 | 85 | 9780.95 | -34.85 | -0.36% | 0.31R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 63.7 | ↑114.12 | 1.1264 | 3.06 | **LOSS** |
| 244 | ARM | 05-27 15:05 | 05-27 15:20 | 134.89 | 134.46 | 47 | 6339.83 | -20.21 | -0.32% | 0.37R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 76.34 | ↑132.99 | 1.8425 | 2.19 | **LOSS** |
| 245 | HPE | 05-27 15:10 | 05-27 15:35 | 17.94 | 17.88 | 545 | 9777.3 | -32.7 | -0.33% | 0.47R | 25m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 71.64 | ↑17.8 | 0.1144 | 1.43 | **LOSS** |
| 246 | AAPL | 05-27 15:55 | 05-27 16:25 | 200.19 | 199.97 | 48 | 9609.12 | -10.56 | -0.11% | 0.16R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 76.64 | ↑198.52 | 0.6872 | 1.42 | **LOSS** |
| 247 | LLY | 05-27 16:40 | 05-27 16:55 | 730.81 | 728.18 | 13 | 9500.53 | -34.19 | -0.36% | 0.51R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 66.22 | ↑721.17 | 1.7683 | 1.5 | **LOSS** |
| 248 | GOOGL | 05-28 13:30 | 05-28 14:00 | 174.05 | 173.48 | 14 | 2436.7 | -7.98 | -0.33% | 0.47R | 30m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 85.98 | ↓173.63 | 0.2155 | 1.75 | **LOSS** |
| 249 | AMZN | 05-28 13:30 | 05-28 13:45 | 207.06 | 206.09 | 13 | 2691.78 | -12.61 | -0.47% | 0.67R | 15m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 77.44 | ↓206.69 | -0.0125 | 2.76 | **LOSS** |
| 250 | PLTR | 05-28 13:30 | 05-28 13:45 | 124.93 | 124.2 | 58 | 7245.94 | -42.34 | -0.58% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.9 | ↓124.82 | 0.285 | 3.59 | **LOSS** |
| 251 | UNH | 05-28 13:30 | 05-28 15:15 | 297.42 | 300.9 | 15 | 4461.3 | +52.2 | +1.17% | 1.6R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 252 | SHOP | 05-28 17:15 | 05-28 17:30 | 107.69 | 107.38 | 90 | 9692.1 | -27.9 | -0.29% | 0.41R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 71.77 | ↑106.48 | 0.2939 | 4.58 | **LOSS** |
| 253 | UNH | 05-29 13:30 | 05-29 14:15 | 300.67 | 299.77 | 9 | 2706.03 | -8.1 | -0.3% | 0.38R | 45m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 59.22 | ↓299.33 | -0.4474 | 4.87 | **LOSS** |
| 254 | DDOG | 05-29 16:15 | 05-29 17:15 | 117.68 | 117.52 | 23 | 2706.64 | -3.68 | -0.14% | 0.2R | 60m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 63.34 | ↑116.89 | 0.1857 | 2.08 | **LOSS** |
| 255 | CRM | 05-29 16:25 | 05-29 18:10 | 260.6 | 262.36 | 10 | 2606 | +17.6 | +0.68% | 0.69R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 64.75 | ↑259 | 0.2826 | 2.32 | **WIN** |
| 256 | UNH | 05-30 13:50 | 05-30 15:35 | 301 | 302.24 | 34 | 10234 | +42.16 | +0.41% | 0.55R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 257 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.13 | 136.31 | 76 | 10421.88 | -62.32 | -0.6% | 0.57R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 258 | PANW | 06-02 13:30 | 06-02 13:50 | 193.75 | 192.12 | 37 | 7168.75 | -60.31 | -0.84% | 1.11R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 259 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.61 | 466.7 | 15 | 7089.15 | -88.65 | -1.25% | 1.79R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 260 | UNH | 06-02 13:30 | 06-02 13:55 | 308.44 | 306.6 | 31 | 9561.64 | -57.04 | -0.6% | 0.69R | 25m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.03 | ↓306.63 | 0.5382 | 6.14 | **LOSS** |
| 261 | AMZN | 06-02 13:35 | 06-02 13:45 | 206.28 | 204.43 | 13 | 2681.64 | -24.05 | -0.9% | 1.29R | 10m | market | stop-loss | trend | momentum-pilot | regimeInstability | regime-instability | 75.64 | ↓205.68 | 0.6536 | 2.35 | **LOSS** |
| 262 | MDB | 06-02 13:35 | 06-02 13:40 | 191.33 | 188.26 | 24 | 4591.92 | -73.68 | -1.6% | 2.29R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.83 | ↓190.88 | 1.456 | 2.07 | **LOSS** |
| 263 | MRVL | 06-02 17:20 | 06-02 17:40 | 61.77 | 61.58 | 103 | 6362.31 | -19.57 | -0.31% | 0.44R | 20m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 74.03 | ↑60.74 | 0.1636 | 1.5 | **LOSS** |
| 264 | MU | 06-03 13:55 | 06-03 15:40 | 99.05 | 101.11 | 28 | 2773.4 | +57.68 | +2.08% | 1.93R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 54.17 | ↑98.23 | 0.0567 | 2.35 | **WIN** |
| 265 | COIN | 06-03 14:15 | 06-03 16:10 | 254.39 | 257.95 | 18 | 4579.02 | +64.08 | +1.4% | 1.26R | 115m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.56 | ↑250.39 | 1.8391 | 1.8 | **WIN** |
| 266 | ABNB | 06-03 14:55 | 06-03 16:40 | 132.15 | 133.31 | 74 | 9779.1 | +85.84 | +0.88% | 1.04R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 73.92 | ↑130.83 | 0.8193 | 1.41 | **WIN** |
| 267 | KLAC | 06-03 15:35 | 06-03 17:20 | 776.04 | 776.76 | 12 | 9312.48 | +8.64 | +0.09% | 0.13R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 72.85 | ↑772.22 | 4.3454 | 1.28 | **WIN** |
| 268 | RIVN | 06-03 16:15 | 06-03 16:45 | 14.62 | 14.59 | 671 | 9810.02 | -20.13 | -0.21% | 0.28R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 66.27 | ↑14.51 | 0.0195 | 3.39 | **LOSS** |
| 269 | GOOGL | 06-04 13:30 | 06-04 13:45 | 167.65 | 167.16 | 15 | 2514.75 | -7.35 | -0.29% | 0.41R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 58.7 | ↓167.35 | -0.3421 | 1.88 | **LOSS** |
| 270 | AMZN | 06-04 13:30 | 06-04 13:45 | 206.95 | 206.37 | 11 | 2276.45 | -6.38 | -0.28% | 0.4R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 65.19 | ↓206.77 | -0.266 | 1.88 | **LOSS** |
| 271 | TSM | 06-04 13:30 | 06-04 14:00 | 202.13 | 200.7 | 23 | 4648.99 | -32.89 | -0.71% | 1.01R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 272 | SMCI | 06-04 13:30 | 06-04 13:45 | 44.65 | 44.01 | 216 | 9644.4 | -138.24 | -1.43% | 1.04R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.82 | ↓44.24 | 0.3239 | 5.28 | **LOSS** |
| 273 | UNH | 06-04 13:30 | 06-04 13:50 | 305.75 | 304.48 | 34 | 10395.5 | -43.18 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 274 | TXN | 06-04 13:30 | 06-04 14:00 | 190.17 | 189.53 | 38 | 7226.46 | -24.32 | -0.34% | 0.49R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 275 | UBER | 06-04 13:35 | 06-04 13:50 | 84.33 | 84.04 | 87 | 7336.71 | -25.23 | -0.34% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.43 | ↓83.86 | 0.1937 | 2.77 | **LOSS** |
| 276 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.67 | 210.93 | 22 | 4678.74 | -38.28 | -0.82% | 1R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 277 | ELF | 06-04 13:35 | 06-04 13:45 | 116.58 | 114.69 | 63 | 7344.54 | -119.07 | -1.62% | 2.16R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.21 | ↓116.1 | 0.364 | 1.53 | **LOSS** |
| 278 | DDOG | 06-04 13:40 | 06-04 13:55 | 120.75 | 120.07 | 60 | 7245 | -40.8 | -0.56% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 279 | CELH | 06-04 14:20 | 06-04 14:35 | 39.93 | 39.74 | 262 | 10461.66 | -49.78 | -0.48% | 0.34R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.46 | ↑39.65 | 0.2412 | 1.55 | **LOSS** |
| 280 | HPE | 06-04 17:45 | 06-04 18:10 | 17.92 | 17.86 | 133 | 2383.36 | -7.98 | -0.33% | 0.47R | 25m | market | early-reversal | trend | momentum-pilot | regimeInstability | regime-instability | 58.02 | ↓17.93 | -0.0193 | 1.89 | **LOSS** |
| 281 | GOOGL | 06-05 13:40 | 06-05 13:55 | 170.37 | 169.61 | 43 | 7325.91 | -32.68 | -0.45% | 0.54R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 282 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 42 | 7342.86 | +187.32 | +2.55% | 2.63R | 60m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 283 | DDOG | 06-05 14:10 | 06-05 15:55 | 122.65 | 123.24 | 79 | 9689.35 | +46.61 | +0.48% | 0.49R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 79.22 | ↑121.62 | 0.6152 | 1.19 | **WIN** |
| 284 | LRCX | 06-05 14:50 | 06-05 16:05 | 85.41 | 85.97 | 16 | 2733.12 | +8.96 | +0.66% | 0.67R | 75m | market | trim-profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 47.65 | ↑85.03 | 0.1044 | 1.77 | **WIN** |
| 285 | LRCX | 06-05 14:50 | 06-05 16:35 | 85.41 | 85.75 | 16 | 2733.12 | +5.44 | +0.4% | 0.4R | 105m | market | timeout | trend | momentum-pilot | regimeInstability | regime-instability | 47.65 | ↑85.03 | 0.1044 | 1.77 | **WIN** |
| 286 | TSM | 06-05 15:20 | 06-05 15:50 | 205.75 | 205.39 | 47 | 9670.25 | -16.92 | -0.17% | 0.24R | 30m | market | stagnation | trend | trend | confirmationRequired | confirmation-required | 75.09 | ↑204.22 | 0.4561 | 1.52 | **LOSS** |
| 287 | RIVN | 06-05 15:55 | 06-05 16:05 | 14.28 | 14.11 | 446 | 6368.88 | -75.82 | -1.19% | 1.35R | 10m | market | stop-loss | trend | trend | confirmationRequired | confirmation-required | 79 | ↑13.99 | 0.0763 | 2.11 | **LOSS** |
| 288 | DDOG | 06-05 17:10 | 06-05 17:50 | 123.16 | 123.09 | 22 | 2709.52 | -1.54 | -0.06% | 0.09R | 40m | market | stagnation | trend | momentum-pilot | regimeInstability | regime-instability | 46.75 | ↑122.57 | -0.1262 | 2.55 | **LOSS** |
| 289 | TGT | 06-06 13:30 | 06-06 15:15 | 95.32 | 95.9 | 110 | 10485.2 | +63.8 | +0.61% | 0.78R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 290 | BA | 06-06 13:40 | 06-06 13:55 | 210.98 | 209.37 | 13 | 2742.74 | -20.93 | -0.76% | 1.09R | 15m | market | early-reversal | mixed | momentum-pilot | regimeInstability | regime-instability | 55.39 | ↓210.38 | -0.2657 | 1.88 | **LOSS** |
| 291 | DELL | 06-06 14:25 | 06-06 16:10 | 114.27 | 114.77 | 85 | 9712.95 | +42.5 | +0.44% | 0.48R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 72.16 | ↑113.92 | 0.3493 | 2.63 | **WIN** |
| 292 | TGT | 06-09 13:40 | 06-09 13:45 | 99.21 | 97.75 | 47 | 4662.87 | -68.62 | -1.47% | 2.1R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 293 | DELL | 06-09 15:05 | 06-09 15:15 | 116.67 | 115.79 | 84 | 9800.28 | -73.92 | -0.75% | 1.07R | 10m | market | stop-loss | trend | trend | confirmationRequired | confirmation-required | 76.86 | ↓115.88 | 0.6226 | 1.86 | **LOSS** |
| 294 | TXN | 06-09 15:10 | 06-09 15:25 | 198.52 | 197.72 | 49 | 9727.48 | -39.2 | -0.4% | 0.57R | 15m | market | early-reversal | trend | trend | confirmationRequired | confirmation-required | 68.13 | ↑197.13 | 1.3347 | 2.07 | **LOSS** |
| 295 | TSLA | 06-09 17:45 | 06-09 19:30 | 299.13 | 304.57 | 18 | 5384.34 | +97.92 | +1.82% | 2.6R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 75.72 | ↑292.64 | 0.7899 | 1.88 | **WIN** |
| 296 | CVX | 06-10 13:30 | 06-10 13:45 | 143.17 | 142.17 | 67 | 9592.39 | -67 | -0.7% | 1R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.24 | ↓142.78 | -0.0599 | 1.64 | **LOSS** |
| 297 | TGT | 06-10 13:30 | 06-10 14:50 | 98.61 | 101.57 | 26 | 2563.86 | +76.96 | +3% | 4.29R | 80m | market | profit-target | trend | momentum-pilot | regimeInstability | regime-instability | 66.52 | ↑98.28 | -0.0482 | 1.96 | **WIN** |
| 298 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.71 | 121.9 | 59 | 7298.89 | -106.79 | -1.46% | 1.8R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 299 | CVX | 06-10 14:10 | 06-10 15:45 | 143.46 | 144.5 | 34 | 9755.28 | +35.36 | +0.72% | 0.91R | 95m | market | trim-profit-target | trend | trend | confirmationRequired | confirmation-required | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |
| 300 | CVX | 06-10 14:10 | 06-10 15:55 | 143.46 | 144.37 | 34 | 9755.28 | +30.94 | +0.63% | 0.8R | 105m | market | timeout | trend | trend | confirmationRequired | confirmation-required | 71.29 | ↑142.81 | 0.3722 | 1.12 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio** | Balanced stop 1.2%, target 2.4% — true 2R trade |
| 2 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 3 | **Market session gate** | New entries blocked outside 13:30–18:00 UTC — no extended-hours or late entries |
| 4 | **RSI > 80 hard block (trend)** | RSI > 80 on a trend setup = chasing overbought momentum; blocked (breakout exempt) |
| 5 | **Breakout quality threshold** | `breakoutThresholdAdj` +10 → breakout entry bar is 65 (raised from 50 to filter weak breakouts) |
| 6 | **Break-even stop** | Once position reaches 1R, exit on any return to entry — prevents winner turning loser |
| 7 | **Trailing stop** | 1% for trend, 1.2% for breakout — exits when price retraces from high-watermark |
| 8 | **Stagnation exit** | 25 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −30% of stop after 12 min — pre-stop cut for entries that go wrong immediately |
| 11 | **Rolling symbol throttle** | Pause symbol for 20 days after 4 consecutive bad trades |
| 12 | **Fake-breakout MACD gate** | Blocks: MACD line < 0.04 + VolR ≥ 3.5 + RSI > 66 — near-zero MACD on high-volume "breakout" = false momentum burst |
| 13 | **ATR expansion gate (breakout)** | Per-bar ATR must exceed 20-bar baseline by 5%+ — no expansion = false breakout risk |
| 14 | **VWAP + ORB + TF15 scoring** | VWAP position, opening-range breakout, and 15-min HTF trend each score entry quality |
| 15 | **MACD histogram** | Bullish histogram: +7 entry; bearish: −7. Both line and histogram confirm: ±3 bonus |
| 16 | **SPY breadth + vol-regime** | SPY trend penalises individual stock risk; volatile ATR regime suppresses trend entries |
| 17 | **Slippage model** | 0.05 bps/side on every fill — realistic market-order cost |
| 18 | **Daily loss limit** | 5% account equity — session blocked after limit reached |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.63 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.72R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T12:17:09.140Z*
