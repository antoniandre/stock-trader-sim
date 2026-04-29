# Bot Trade Report — 300 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T12:51:31.374Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 70 | **Behavior classifier:** observe
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** PLTR

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $1259.89 (-1.26%) over 300 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 300 |
| Win rate | 30.67% (92W / 208L) |
| Net P&L | $-1259.89 (-1.26%) |
| Gross profit | $6318.52 |
| Gross loss | $7578.41 |
| Profit factor | 0.83 |
| Avg win | $68.68 |
| Avg loss | $36.43 |
| Payoff ratio | 1.89:1 |
| Expectancy | $-4.2 / trade |
| Max drawdown | 1.71% |
| Sharpe ratio (ann.) | -1.47 |
| Trades / active day | 4.17 |
| Avg confidence | 93.77% |
| Avg trade duration | 46 min |
| Avg planned R:R | 2.97:1 |
| Avg risk ratio | 0.87R |
| Starting equity | $100,000 |
| Ending equity | $98,740.11 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-1259.89 | MISS |
| Win rate | 45-60% | 30.67% | MISS |
| Profit factor | >= 1.3 | 0.83 | MISS |
| Sharpe (ann.) | > 1.5 | -1.47 | MISS |
| R:R | 2:1 - 3:1 | 2.97:1 planned | PASS |
| Max drawdown | < 10% | 1.71% | PASS |
| Expectancy | positive | $-4.2 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 280 | 30.36% | $-1500.22 | $-5.36 |
| Mid  10:30–11:30 | 5 | 20% | $-5.7 | $-1.14 |
| Noon 11:30–13:00 | 7 | 28.57% | $+4.7 | $0.67 |
| PM   13:00–14:00 | 8 | 50% | $+241.33 | $30.17 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTC | 14 | 6 | 42.86% | $+291.36 | $+20.81 | 1.92 | eligible |
| TXN | 5 | 3 | 60% | $+276.03 | $+55.21 | 9.81 | eligible |
| ORCL | 9 | 5 | 55.56% | $+273.35 | $+30.37 | 4.73 | eligible |
| TSLA | 12 | 6 | 50% | $+187.73 | $+15.64 | 1.76 | eligible |
| MU | 10 | 6 | 60% | $+180.17 | $+18.02 | 1.91 | eligible |
| AVGO | 6 | 2 | 33.33% | $+178.81 | $+29.8 | 2.74 | throttle |
| COIN | 6 | 3 | 50% | $+177.46 | $+29.58 | 1.65 | eligible |
| META | 6 | 3 | 50% | $+126.09 | $+21.02 | 3.26 | eligible |
| TSM | 5 | 3 | 60% | $+110.23 | $+22.05 | 2.73 | eligible |
| HD | 1 | 1 | 100% | $+97.68 | $+97.68 | ∞ | watch |
| NET | 7 | 3 | 42.86% | $+96.73 | $+13.82 | 1.46 | eligible |
| MRVL | 5 | 2 | 40% | $+91.96 | $+18.39 | 2.02 | eligible |
| AMAT | 4 | 2 | 50% | $+35.61 | $+8.9 | 1.69 | eligible |
| NVO | 7 | 3 | 42.86% | $+25.25 | $+3.61 | 1.36 | eligible |
| RIVN | 6 | 2 | 33.33% | $+25.23 | $+4.2 | 1.19 | throttle |
| GS | 1 | 1 | 100% | $+23.3 | $+23.3 | ∞ | watch |
| LRCX | 5 | 1 | 20% | $+10.44 | $+2.09 | 1.12 | throttle |
| NVDA | 6 | 2 | 33.33% | $+5.67 | $+0.95 | 1.03 | throttle |
| NFLX | 3 | 1 | 33.33% | $-3.96 | $-1.32 | 0.91 | watch |
| WMT | 1 | 0 | 0% | $-5.18 | $-5.18 | 0 | watch |
| DELL | 8 | 2 | 25% | $-6.53 | $-0.82 | 0.97 | throttle |
| BAC | 2 | 1 | 50% | $-7.54 | $-3.77 | 0.84 | watch |
| LOW | 1 | 0 | 0% | $-7.74 | $-7.74 | 0 | watch |
| BA | 5 | 2 | 40% | $-8.98 | $-1.8 | 0.81 | throttle |
| MSFT | 2 | 1 | 50% | $-9.44 | $-4.72 | 0.3 | watch |
| GOOGL | 7 | 3 | 42.86% | $-19.83 | $-2.83 | 0.86 | throttle |
| GE | 4 | 1 | 25% | $-22.17 | $-5.54 | 0.78 | throttle |
| V | 1 | 0 | 0% | $-32.7 | $-32.7 | 0 | watch |
| DIS | 1 | 0 | 0% | $-34.32 | $-34.32 | 0 | watch |
| ABNB | 3 | 0 | 0% | $-38.2 | $-12.73 | 0 | watch |
| SBUX | 5 | 1 | 20% | $-38.39 | $-7.68 | 0.7 | throttle |
| ADBE | 2 | 0 | 0% | $-41.47 | $-20.73 | 0 | watch |
| XOM | 1 | 0 | 0% | $-44.85 | $-44.85 | 0 | watch |
| UNH | 8 | 3 | 37.5% | $-45.43 | $-5.68 | 0.81 | throttle |
| TGT | 6 | 2 | 33.33% | $-46.43 | $-7.74 | 0.66 | throttle |
| PYPL | 5 | 2 | 40% | $-50.06 | $-10.01 | 0.36 | throttle |
| AAPL | 4 | 2 | 50% | $-53.57 | $-13.39 | 0.48 | throttle |
| CRM | 5 | 1 | 20% | $-55.78 | $-11.16 | 0.47 | throttle |
| IBM | 2 | 0 | 0% | $-59.1 | $-29.55 | 0 | watch |
| KLAC | 2 | 0 | 0% | $-65.31 | $-32.65 | 0 | watch |
| UBER | 9 | 1 | 11.11% | $-70.57 | $-7.84 | 0.73 | throttle |
| NOW | 5 | 1 | 20% | $-75.15 | $-15.03 | 0.24 | throttle |
| PANW | 6 | 2 | 33.33% | $-75.58 | $-12.6 | 0.51 | throttle |
| ELF | 6 | 2 | 33.33% | $-81.36 | $-13.56 | 0.64 | throttle |
| SNOW | 7 | 2 | 28.57% | $-86.42 | $-12.35 | 0.47 | throttle |
| NKE | 7 | 2 | 28.57% | $-94.27 | $-13.47 | 0.43 | throttle |
| HPE | 2 | 0 | 0% | $-97.2 | $-48.6 | 0 | watch |
| SMCI | 4 | 1 | 25% | $-110.35 | $-27.59 | 0.44 | throttle |
| CELH | 4 | 0 | 0% | $-110.88 | $-27.72 | 0 | throttle |
| QCOM | 4 | 0 | 0% | $-115.76 | $-28.94 | 0 | throttle |
| CVX | 2 | 0 | 0% | $-125.56 | $-62.78 | 0 | watch |
| AMZN | 5 | 1 | 20% | $-139.69 | $-27.94 | 0.11 | throttle |
| SHOP | 5 | 0 | 0% | $-143.16 | $-28.63 | 0 | throttle |
| CAT | 4 | 0 | 0% | $-161.38 | $-40.34 | 0 | throttle |
| CRWD | 8 | 1 | 12.5% | $-172.56 | $-21.57 | 0.35 | throttle |
| ARM | 6 | 0 | 0% | $-181.21 | $-30.2 | 0 | throttle |
| LLY | 7 | 2 | 28.57% | $-189.6 | $-27.09 | 0.34 | throttle |
| DDOG | 5 | 1 | 20% | $-193.88 | $-38.78 | 0.06 | throttle |
| MDB | 5 | 0 | 0% | $-251.36 | $-50.27 | 0 | throttle |
| AMD | 6 | 0 | 0% | $-300.07 | $-50.01 | 0 | throttle |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| PLTR | excluded by CLI filter |
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 300 | 92 | 30.67% | $-1259.89 | $-4.2 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| mixed | 1 | 0 | 0% | $-60.45 | $-60.45 |
| trend | 299 | 92 | 30.77% | $-1199.44 | $-4.01 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extendedBreakout | 3 | 2 | 66.67% | $+140.95 | $+46.98 |
| regimeInstability | 3 | 1 | 33.33% | $+39.44 | $+13.15 |
| neutral | 6 | 2 | 33.33% | $-18.61 | $-3.1 |
| noisyHighBeta | 1 | 0 | 0% | $-142.29 | $-142.29 |
| confirmationRequired | 233 | 74 | 31.76% | $-534.89 | $-2.3 |
| falseBreakoutProne | 54 | 13 | 24.07% | $-744.49 | $-13.79 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| extended-chase | 3 | 2 | 66.67% | $+140.95 | $+46.98 |
| regime-instability | 3 | 1 | 33.33% | $+39.44 | $+13.15 |
| neutral | 6 | 2 | 33.33% | $-18.61 | $-3.1 |
| noisy-high-beta | 1 | 0 | 0% | $-142.29 | $-142.29 |
| confirmation-required | 233 | 74 | 31.76% | $-534.89 | $-2.3 |
| false-breakout-risk | 54 | 13 | 24.07% | $-744.49 | $-13.79 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | ORCL | 5 | 5.59 | $+50.85 | 4 | 2.07 | $+4.77 | 0.02% | 0.93 | watch |
| Symbol | MU | 7 | 2.48 | $+23.73 | 3 | 1.16 | $+4.69 | 0.09% | 0.94 | watch |
| Symbol | COIN | 6 | 1.65 | $+29.58 | 0 | 0 | $+0 | 0% | 0 | watch |
| Time slot | PM 13:00-14:00 | 6 | 4.25 | $+42.18 | 2 | 0.68 | $-5.88 | 0.04% | 0.35 | watch |
| Symbol | INTC | 11 | 2.98 | $+32.63 | 3 | 0.5 | $-22.51 | 0.13% | 0.42 | watch |
| Symbol | NET | 5 | 2.29 | $+34.53 | 2 | 0 | $-37.97 | 0.08% | 0 | watch |
| Symbol | UNH | 6 | 1.35 | $+8.24 | 2 | 0 | $-47.42 | 0.09% | 0 | watch |
| Symbol | NVDA | 5 | 1.62 | $+16.24 | 1 | 0 | $-75.52 | 0.08% | 0 | watch |
| Symbol | AVGO | 5 | 12.86 | $+51.91 | 1 | 0 | $-80.75 | 0.08% | 0 | watch |
| Behavior | neutral | 5 | 0.68 | $-8.62 | 1 | ∞ | $+24.5 | 0% | ∞ | reject |
| Trade state | neutral | 5 | 0.68 | $-8.62 | 1 | ∞ | $+24.5 | 0% | ∞ | reject |
| Symbol | GOOGL | 5 | 0.62 | $-10.74 | 2 | ∞ | $+16.93 | 0% | ∞ | reject |
| Symbol | NKE | 5 | 0.02 | $-24.47 | 2 | 1.69 | $+14.04 | 0.04% | 1.33 | reject |
| Symbol | SNOW | 5 | 0.3 | $-17.72 | 2 | 1.06 | $+1.09 | 0.03% | 0.81 | reject |
| Behavior | falseBreakoutProne | 37 | 0.58 | $-16.7 | 17 | 0.77 | $-7.45 | 0.25% | 0.58 | reject |
| Trade state | false-breakout-risk | 37 | 0.58 | $-16.7 | 17 | 0.77 | $-7.45 | 0.25% | 0.58 | reject |
| Regime | trend | 180 | 1 | $-0.06 | 119 | 0.58 | $-9.99 | 1.46% | 0.43 | reject |
| Setup | breakout | 180 | 1 | $-0.06 | 120 | 0.57 | $-10.41 | 1.52% | 0.43 | reject |
| Behavior | confirmationRequired | 136 | 1.2 | $+4.44 | 97 | 0.48 | $-11.73 | 1.34% | 0.35 | reject |
| Trade state | confirmation-required | 136 | 1.2 | $+4.44 | 97 | 0.48 | $-11.73 | 1.34% | 0.35 | reject |
| Time slot | Open 9:30-10:30 | 167 | 0.97 | $-0.8 | 113 | 0.52 | $-12.09 | 1.61% | 0.39 | reject |
| Symbol | UBER | 5 | 1.16 | $+5.22 | 4 | 0 | $-24.16 | 0.1% | 0 | reject |
| Symbol | PANW | 5 | 0.71 | $-6.42 | 1 | 0 | $-43.47 | 0.04% | 0 | reject |
| Symbol | CRWD | 6 | 0.56 | $-11.98 | 2 | 0 | $-50.35 | 0.1% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-1657.44 | 0.79 |
| +3 bps/side | $-2452.73 | 0.71 |
| +5 bps/side | $-3248.09 | 0.64 |
| +10 bps/side | $-5236.13 | 0.5 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 112 |
| timeout | 66 |
| stagnation | 54 |
| stop-loss | 28 |
| trailing-stop | 18 |
| breakeven-stop | 12 |
| profit-target | 10 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | PANW | 04-29 13:40 | 04-29 13:55 | 184.92 | 183.93 | 36 | 6657.12 | -35.64 | -0.54% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.5 | ↓184.06 | 0.9403 | 1.24 | **LOSS** |
| 2 | CRWD | 05-01 13:30 | 05-01 13:55 | 432.03 | 428.98 | 17 | 7344.51 | -51.85 | -0.71% | 1.01R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.62 | ↓431.22 | 1.1077 | 1.25 | **LOSS** |
| 3 | CAT | 05-01 13:40 | 05-01 14:30 | 316.8 | 316.2 | 14 | 4435.2 | -8.4 | -0.19% | 0.16R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 92.82 | ↓315.42 | 2.4983 | 1.23 | **LOSS** |
| 4 | NOW | 05-01 13:45 | 05-01 15:30 | 967.63 | 971.03 | 7 | 6773.41 | +23.8 | +0.35% | 0.34R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.55 | ↑967.04 | 5.5439 | 1.12 | **WIN** |
| 5 | INTC | 05-01 15:30 | 05-01 15:45 | 20.56 | 20.44 | 357 | 7339.92 | -42.84 | -0.58% | 0.52R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↑20.33 | 0.0628 | 1.45 | **LOSS** |
| 6 | QCOM | 05-02 13:30 | 05-02 13:45 | 138.57 | 137.87 | 75 | 10392.75 | -52.5 | -0.51% | 0.54R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 66.14 | ↓138.11 | -0.0013 | 1.64 | **LOSS** |
| 7 | MU | 05-02 13:30 | 05-02 13:45 | 80.35 | 79.33 | 104 | 8356.4 | -106.08 | -1.27% | 1.13R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.67 | ↓80.12 | 0.1463 | 1.73 | **LOSS** |
| 8 | BAC | 05-02 13:30 | 05-02 13:45 | 41.04 | 40.78 | 179 | 7346.16 | -46.54 | -0.63% | 0.86R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.23 | ↓40.99 | 0.0953 | 1.73 | **LOSS** |
| 9 | DIS | 05-02 13:30 | 05-02 13:45 | 92.79 | 92.46 | 104 | 9650.16 | -34.32 | -0.36% | 0.45R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.03 | ↓92.59 | 0.2055 | 3.87 | **LOSS** |
| 10 | V | 05-02 13:30 | 05-02 13:50 | 349.46 | 348.37 | 30 | 10483.8 | -32.7 | -0.31% | 0.38R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.45 | ↓348.92 | 0.3916 | 1.62 | **LOSS** |
| 11 | ORCL | 05-02 13:35 | 05-02 14:40 | 150.38 | 150.57 | 45 | 6767.1 | +8.55 | +0.13% | 0.13R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.67 | ↓149.63 | 0.6028 | 1.23 | **WIN** |
| 12 | UBER | 05-02 13:35 | 05-02 13:55 | 83.08 | 82.73 | 88 | 7311.04 | -30.8 | -0.42% | 0.47R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.99 | ↓82.61 | 0.2144 | 1.45 | **LOSS** |
| 13 | CAT | 05-02 13:35 | 05-02 13:50 | 321.97 | 319.56 | 22 | 7083.34 | -53.02 | -0.75% | 0.96R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 14 | IBM | 05-02 13:40 | 05-02 13:55 | 243.7 | 242.18 | 30 | 7311 | -45.6 | -0.62% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.98 | ↓243.37 | 0.8439 | 1.31 | **LOSS** |
| 15 | WMT | 05-02 13:45 | 05-02 14:15 | 99.09 | 99.02 | 74 | 7332.66 | -5.18 | -0.07% | 0.1R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 79.07 | ↑98.63 | 0.3215 | 1.32 | **LOSS** |
| 16 | MSFT | 05-02 13:50 | 05-02 14:30 | 436.81 | 436.25 | 24 | 10483.44 | -13.44 | -0.13% | 0.13R | 40m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.17 | ↑433.46 | 0.9941 | 1.47 | **LOSS** |
| 17 | AMD | 05-05 13:35 | 05-05 14:30 | 100.6 | 100.29 | 66 | 6639.6 | -20.46 | -0.31% | 0.31R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 18 | NOW | 05-05 13:55 | 05-05 14:20 | 991.77 | 985.46 | 7 | 6942.39 | -44.17 | -0.64% | 0.89R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 67.02 | ↑983.69 | 1.6238 | 1.18 | **LOSS** |
| 19 | AMZN | 05-07 13:35 | 05-07 15:10 | 187.67 | 188.11 | 39 | 7319.13 | +17.16 | +0.23% | 0.33R | 95m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 72.68 | ↓186.52 | 0.2359 | 2.11 | **WIN** |
| 20 | NKE | 05-07 13:35 | 05-07 15:10 | 58.02 | 58.04 | 126 | 7310.52 | +2.52 | +0.03% | 0.04R | 95m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80 | ↓57.83 | 0.1688 | 1.14 | **WIN** |
| 21 | PYPL | 05-08 13:40 | 05-08 14:10 | 69.75 | 69.65 | 105 | 7323.75 | -10.5 | -0.14% | 0.14R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.01 | ↓69.55 | 0.2884 | 1.99 | **LOSS** |
| 22 | XOM | 05-08 13:40 | 05-08 14:10 | 106.3 | 105.65 | 69 | 7334.7 | -44.85 | -0.61% | 0.79R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.68 | ↓105.93 | 0.2538 | 1.67 | **LOSS** |
| 23 | ELF | 05-08 14:25 | 05-08 14:50 | 68.08 | 67.83 | 107 | 7284.56 | -26.75 | -0.37% | 0.35R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.12 | ↑67.25 | 0.284 | 1.28 | **LOSS** |
| 24 | UBER | 05-09 13:30 | 05-09 13:45 | 84.05 | 83.33 | 124 | 10422.2 | -89.28 | -0.86% | 0.96R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.62 | ↓83.64 | -0.0738 | 1.81 | **LOSS** |
| 25 | PANW | 05-12 13:45 | 05-12 15:30 | 190.56 | 191.38 | 35 | 6669.6 | +28.7 | +0.43% | 0.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.02 | ↑190.23 | 0.8232 | 1.14 | **WIN** |
| 26 | INTC | 05-12 17:35 | 05-12 17:50 | 22.61 | 22.36 | 209 | 4725.49 | -52.25 | -1.11% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 80 | ↑22.18 | 0.0972 | 5.23 | **LOSS** |
| 27 | AMD | 05-13 13:30 | 05-13 13:45 | 110.26 | 109.57 | 66 | 7277.16 | -45.54 | -0.63% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.01 | ↓109.9 | 0.2104 | 2.2 | **LOSS** |
| 28 | AVGO | 05-13 13:30 | 05-13 15:05 | 224.51 | 230.8 | 43 | 9653.93 | +270.47 | +2.8% | 3.68R | 95m | market | profit-target | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.7 | ↑223.7 | 0.6728 | 3.15 | **WIN** |
| 29 | TSM | 05-13 13:30 | 05-13 15:15 | 189.9 | 192.59 | 38 | 7216.2 | +102.22 | +1.42% | 1.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.81 | ↑189.19 | -0.0487 | 3.71 | **WIN** |
| 30 | MRVL | 05-13 13:30 | 05-13 15:15 | 65.59 | 66.42 | 112 | 7346.08 | +92.96 | +1.27% | 1.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.31 | ↑65.23 | 0.0296 | 3.99 | **WIN** |
| 31 | META | 05-13 13:35 | 05-13 15:20 | 649.67 | 658.27 | 7 | 4547.69 | +60.2 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.95 | ↑646.68 | 1.5396 | 1.15 | **WIN** |
| 32 | MU | 05-13 13:35 | 05-13 15:20 | 94.54 | 95.73 | 62 | 5861.48 | +73.78 | +1.26% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 73.86 | ↑93.88 | 0.031 | 1.46 | **WIN** |
| 33 | ARM | 05-13 13:35 | 05-13 14:40 | 125.88 | 125.41 | 37 | 4657.56 | -17.39 | -0.37% | 0.48R | 65m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.18 | ↓125.69 | 0.1399 | 1.61 | **LOSS** |
| 34 | BA | 05-13 13:35 | 05-13 15:20 | 202.36 | 203.42 | 17 | 3440.12 | +18.02 | +0.52% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.22 | ↓201.8 | 0.5045 | 2.74 | **WIN** |
| 35 | NVDA | 05-13 13:40 | 05-13 15:00 | 126.57 | 130.09 | 37 | 4683.09 | +130.24 | +2.78% | 3.97R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 90.17 | ↑125.55 | 0.8701 | 1.81 | **WIN** |
| 36 | CRWD | 05-13 13:45 | 05-13 15:30 | 435.22 | 440.93 | 16 | 6963.52 | +91.36 | +1.31% | 1.87R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.59 | ↑431.76 | 1.4639 | 1.46 | **WIN** |
| 37 | DELL | 05-13 13:50 | 05-13 15:35 | 106.07 | 107.57 | 44 | 4667.08 | +66 | +1.41% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.92 | ↑105.45 | 0.5401 | 1.35 | **WIN** |
| 38 | INTC | 05-13 14:05 | 05-13 14:20 | 22.89 | 22.63 | 206 | 4715.34 | -53.56 | -1.14% | 1.05R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.43 | ↓22.64 | 0.1634 | 3.41 | **LOSS** |
| 39 | TSLA | 05-13 17:30 | 05-13 19:15 | 331.88 | 336.37 | 12 | 3982.56 | +53.88 | +1.35% | 1.42R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 95.83 | ↑322.7 | 1.9893 | 4.95 | **WIN** |
| 40 | LLY | 05-14 13:30 | 05-14 13:45 | 756.92 | 751.21 | 13 | 9839.96 | -74.23 | -0.75% | 1.07R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.74 | ↓753.89 | 0.5558 | 2.55 | **LOSS** |
| 41 | GOOGL | 05-14 13:35 | 05-14 13:45 | 161.35 | 159.89 | 45 | 7260.75 | -65.7 | -0.9% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 77.48 | ↓160.57 | 0.1501 | 1.67 | **LOSS** |
| 42 | NET | 05-14 13:35 | 05-14 13:45 | 153.81 | 152.02 | 47 | 7229.07 | -84.13 | -1.16% | 1.29R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.91 | ↓153.34 | 0.3643 | 2.18 | **LOSS** |
| 43 | NVO | 05-14 13:35 | 05-14 13:50 | 66.65 | 65.95 | 71 | 4732.15 | -49.7 | -1.05% | 1.44R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 83.15 | ↓66.53 | 0.184 | 1.56 | **LOSS** |
| 44 | PYPL | 05-14 13:40 | 05-14 14:00 | 73.21 | 72.9 | 100 | 7321 | -31 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.42 | ↓73.03 | 0.186 | 1.36 | **LOSS** |
| 45 | TSLA | 05-16 13:30 | 05-16 13:50 | 349.52 | 347.45 | 23 | 8038.96 | -47.61 | -0.59% | 0.53R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.42 | ↓348.18 | 0.1512 | 3.16 | **LOSS** |
| 46 | MU | 05-16 13:30 | 05-16 14:40 | 96.45 | 96.87 | 38 | 3665.1 | +15.96 | +0.44% | 0.63R | 70m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 84.53 | ↓96.22 | 0.1541 | 1.16 | **WIN** |
| 47 | TGT | 05-16 13:30 | 05-16 15:15 | 97.93 | 98.3 | 75 | 7344.75 | +27.75 | +0.38% | 0.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 70.89 | ↑97.78 | 0.0772 | 1.29 | **WIN** |
| 48 | SHOP | 05-16 13:35 | 05-16 13:50 | 112.21 | 111.42 | 65 | 7293.65 | -51.35 | -0.7% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.59 | ↓111.64 | 0.0806 | 2.22 | **LOSS** |
| 49 | NET | 05-16 13:35 | 05-16 15:20 | 155.2 | 156.46 | 47 | 7294.4 | +59.22 | +0.81% | 0.92R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 71.33 | ↑154.13 | -0.0164 | 1.15 | **WIN** |
| 50 | NFLX | 05-16 13:45 | 05-16 14:00 | 1193.96 | 1188.76 | 6 | 7163.76 | -31.2 | -0.44% | 0.63R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.35 | ↓1187.66 | 1.4009 | 1.93 | **LOSS** |
| 51 | CRWD | 05-16 13:45 | 05-16 14:35 | 437.5 | 437.12 | 10 | 4375 | -3.8 | -0.09% | 0.13R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.28 | ↓435.59 | 0.5501 | 1.28 | **LOSS** |
| 52 | LLY | 05-16 13:45 | 05-16 14:10 | 751.31 | 746.38 | 9 | 6761.79 | -44.37 | -0.66% | 0.71R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 75.97 | ↓745.56 | 2.8189 | 1.73 | **LOSS** |
| 53 | DELL | 05-16 13:45 | 05-16 14:40 | 112.58 | 112.38 | 65 | 7317.7 | -13 | -0.18% | 0.26R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 75.48 | ↓112.12 | 0.2001 | 1.53 | **LOSS** |
| 54 | TSLA | 05-20 13:35 | 05-20 13:45 | 354.23 | 345.68 | 11 | 3896.53 | -94.05 | -2.41% | 2.41R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 89.04 | ↓351.62 | 2.5553 | 3.4 | **LOSS** |
| 55 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.95 | 43.64 | 154 | 6768.3 | -47.74 | -0.71% | 0.68R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 56 | GOOGL | 05-21 14:00 | 05-21 14:20 | 169.82 | 169 | 27 | 4585.14 | -22.14 | -0.48% | 0.42R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 94.29 | ↑167.05 | 0.9481 | 2.24 | **LOSS** |
| 57 | CRWD | 05-21 16:05 | 05-21 17:10 | 447.68 | 447.3 | 10 | 4476.8 | -3.8 | -0.08% | 0.11R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 90.09 | ↑438.66 | 1.4315 | 2.85 | **LOSS** |
| 58 | ELF | 05-22 13:35 | 05-22 15:25 | 80.37 | 81.29 | 91 | 7313.67 | +83.72 | +1.14% | 1.16R | 110m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.6 | ↑80 | 0.0474 | 1.57 | **WIN** |
| 59 | GOOGL | 05-22 13:40 | 05-22 14:35 | 172.9 | 174.39 | 60 | 10374 | +89.4 | +0.86% | 0.77R | 55m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.05 | ↓171.82 | 0.3159 | 2.75 | **WIN** |
| 60 | NKE | 05-22 13:40 | 05-22 13:55 | 61.15 | 60.91 | 171 | 10456.65 | -41.04 | -0.39% | 0.43R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 65.51 | ↑60.75 | 0.0405 | 2.59 | **LOSS** |
| 61 | NVDA | 05-22 14:00 | 05-22 14:15 | 133.8 | 132.97 | 55 | 7359 | -45.65 | -0.62% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.41 | ↑132.57 | 0.1455 | 1.59 | **LOSS** |
| 62 | SNOW | 05-27 13:30 | 05-27 14:55 | 204.47 | 204.3 | 47 | 9610.09 | -7.99 | -0.08% | 0.09R | 85m | market | breakeven-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.92 | ↓203.67 | 0.0146 | 1.92 | **LOSS** |
| 63 | ORCL | 05-27 13:35 | 05-27 15:20 | 159.88 | 161.75 | 45 | 7194.6 | +84.15 | +1.17% | 1.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75 | ↑159.5 | 0.3557 | 1.71 | **WIN** |
| 64 | MU | 05-27 13:35 | 05-27 15:20 | 94.67 | 96.05 | 62 | 5869.54 | +85.56 | +1.46% | 1.55R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.36 | ↑94.59 | 0.1301 | 1.3 | **WIN** |
| 65 | TSM | 05-27 13:35 | 05-27 15:20 | 194.96 | 195.82 | 37 | 7213.52 | +31.82 | +0.44% | 0.63R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.27 | ↑194.31 | 0.4077 | 2.38 | **WIN** |
| 66 | SBUX | 05-27 13:35 | 05-27 14:05 | 86.2 | 85.97 | 85 | 7327 | -19.55 | -0.27% | 0.39R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.67 | ↓85.81 | 0.1802 | 4.03 | **LOSS** |
| 67 | NKE | 05-27 13:35 | 05-27 13:55 | 61.14 | 60.93 | 120 | 7336.8 | -25.2 | -0.34% | 0.4R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.78 | ↓61.11 | 0.1357 | 1.57 | **LOSS** |
| 68 | AMAT | 05-27 13:40 | 05-27 15:25 | 160.76 | 161.53 | 45 | 7234.2 | +34.65 | +0.48% | 0.62R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.08 | ↑160.12 | 0.4118 | 1.56 | **WIN** |
| 69 | CELH | 05-27 13:40 | 05-27 14:10 | 36.84 | 36.66 | 199 | 7331.16 | -35.82 | -0.49% | 0.42R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.22 | ↓36.56 | 0.1227 | 1.55 | **LOSS** |
| 70 | MDB | 05-27 13:45 | 05-27 14:20 | 188.88 | 188.74 | 55 | 10388.4 | -7.7 | -0.07% | 0.08R | 35m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 70 | ↑188.58 | 0.8834 | 1.35 | **LOSS** |
| 71 | UNH | 05-28 13:30 | 05-28 15:15 | 297.42 | 300.9 | 15 | 4461.3 | +52.2 | +1.17% | 1.6R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.39 | ↑295.98 | 1.0916 | 1.62 | **WIN** |
| 72 | ARM | 05-28 17:10 | 05-28 17:35 | 137.38 | 136.86 | 22 | 3022.36 | -11.44 | -0.38% | 0.54R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.73 | ↑135.15 | 0.5002 | 1.28 | **LOSS** |
| 73 | UNH | 05-29 13:35 | 05-29 14:05 | 302.02 | 300.85 | 34 | 10268.68 | -39.78 | -0.39% | 0.46R | 30m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 62.43 | ↓300.24 | -0.1861 | 3.14 | **LOSS** |
| 74 | NKE | 05-29 13:35 | 05-29 13:50 | 62.52 | 62.33 | 117 | 7314.84 | -22.23 | -0.3% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.31 | ↑62.35 | 0.0497 | 1.87 | **LOSS** |
| 75 | UNH | 05-30 13:50 | 05-30 15:35 | 301 | 302.24 | 34 | 10234 | +42.16 | +0.41% | 0.55R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.66 | ↑299.19 | 0.5744 | 2.64 | **WIN** |
| 76 | NVDA | 06-02 13:30 | 06-02 13:55 | 137.13 | 136.31 | 76 | 10421.88 | -62.32 | -0.6% | 0.57R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.98 | ↓136.59 | 0.3005 | 2.2 | **LOSS** |
| 77 | PANW | 06-02 13:30 | 06-02 13:50 | 193.75 | 192.12 | 37 | 7168.75 | -60.31 | -0.84% | 1.11R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.07 | ↓193.34 | 0.6325 | 1.26 | **LOSS** |
| 78 | CRWD | 06-02 13:30 | 06-02 13:50 | 472.61 | 466.7 | 15 | 7089.15 | -88.65 | -1.25% | 1.79R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 78.75 | ↓472.16 | 1.9472 | 4.69 | **LOSS** |
| 79 | UNH | 06-02 13:30 | 06-02 13:55 | 308.44 | 306.6 | 31 | 9561.64 | -57.04 | -0.6% | 0.69R | 25m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.03 | ↓306.63 | 0.5382 | 6.14 | **LOSS** |
| 80 | AMD | 06-02 13:35 | 06-02 13:50 | 113.43 | 112.87 | 41 | 4650.63 | -22.96 | -0.49% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.29 | ↑112.74 | 0.6463 | 2.28 | **LOSS** |
| 81 | COIN | 06-02 13:35 | 06-02 13:40 | 249.46 | 245.39 | 29 | 7234.34 | -118.03 | -1.63% | 2.26R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 74.5 | ↓247.66 | 0.3814 | 1.11 | **LOSS** |
| 82 | SNOW | 06-02 13:35 | 06-02 13:50 | 210.01 | 206.93 | 22 | 4620.22 | -67.76 | -1.47% | 1.81R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 92.36 | ↓208.68 | 1.298 | 1.72 | **LOSS** |
| 83 | MDB | 06-02 13:35 | 06-02 13:40 | 191.33 | 188.26 | 24 | 4591.92 | -73.68 | -1.6% | 2.29R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.83 | ↓190.88 | 1.456 | 2.07 | **LOSS** |
| 84 | NVDA | 06-03 13:50 | 06-03 15:35 | 139.92 | 141.49 | 52 | 7275.84 | +81.64 | +1.12% | 1.4R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.15 | ↑138.91 | 0.3709 | 2.46 | **WIN** |
| 85 | COIN | 06-03 14:15 | 06-03 16:10 | 254.39 | 257.95 | 18 | 4579.02 | +64.08 | +1.4% | 1.26R | 115m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.56 | ↑250.39 | 1.8391 | 1.8 | **WIN** |
| 86 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 87 | AVGO | 06-04 13:30 | 06-04 13:50 | 261.12 | 261.73 | 18 | 4700.16 | +10.98 | +0.23% | 0.32R | 20m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 87.17 | ↓259.87 | 1.0726 | 2.1 | **WIN** |
| 88 | TSM | 06-04 13:30 | 06-04 14:00 | 202.13 | 200.7 | 23 | 4648.99 | -32.89 | -0.71% | 1.01R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.55 | ↓201.71 | 0.6812 | 4.45 | **LOSS** |
| 89 | SMCI | 06-04 13:30 | 06-04 13:45 | 44.65 | 44.01 | 216 | 9644.4 | -138.24 | -1.43% | 1.04R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 77.82 | ↓44.24 | 0.3239 | 5.28 | **LOSS** |
| 90 | MDB | 06-04 13:30 | 06-04 14:00 | 195.79 | 195.38 | 24 | 4698.96 | -9.84 | -0.21% | 0.3R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.97 | ↓195.4 | 0.5475 | 2.25 | **LOSS** |
| 91 | UNH | 06-04 13:30 | 06-04 13:50 | 305.75 | 304.48 | 34 | 10395.5 | -43.18 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.52 | ↓305.14 | 0.1405 | 2.33 | **LOSS** |
| 92 | LLY | 06-04 13:30 | 06-04 15:15 | 763.43 | 765.99 | 13 | 9924.59 | +33.28 | +0.34% | 0.49R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 63.16 | ↓760.92 | 1.0651 | 1.86 | **WIN** |
| 93 | TXN | 06-04 13:30 | 06-04 14:00 | 190.17 | 189.53 | 38 | 7226.46 | -24.32 | -0.34% | 0.49R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 94 | UBER | 06-04 13:35 | 06-04 13:50 | 84.33 | 84.04 | 87 | 7336.71 | -25.23 | -0.34% | 0.48R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.43 | ↓83.86 | 0.1937 | 2.77 | **LOSS** |
| 95 | SNOW | 06-04 13:35 | 06-04 13:55 | 212.67 | 210.93 | 22 | 4678.74 | -38.28 | -0.82% | 1R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.1 | ↓212.45 | 0.5645 | 2.03 | **LOSS** |
| 96 | ELF | 06-04 13:35 | 06-04 13:45 | 116.58 | 114.69 | 63 | 7344.54 | -119.07 | -1.62% | 2.16R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.21 | ↓116.1 | 0.364 | 1.53 | **LOSS** |
| 97 | DDOG | 06-04 13:40 | 06-04 13:55 | 120.75 | 120.07 | 60 | 7245 | -40.8 | -0.56% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.02 | ↓120.15 | 0.4871 | 1.25 | **LOSS** |
| 98 | CELH | 06-04 14:20 | 06-04 14:35 | 39.93 | 39.74 | 262 | 10461.66 | -49.78 | -0.48% | 0.34R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.46 | ↑39.65 | 0.2412 | 1.55 | **LOSS** |
| 99 | AMZN | 06-05 13:30 | 06-05 13:45 | 210.51 | 208.6 | 49 | 10314.99 | -93.59 | -0.91% | 1.3R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 74.16 | ↓209.79 | 0.2995 | 5.84 | **LOSS** |
| 100 | GOOGL | 06-05 13:40 | 06-05 13:55 | 170.37 | 169.61 | 43 | 7325.91 | -32.68 | -0.45% | 0.54R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.41 | ↓170.07 | 0.6457 | 1.15 | **LOSS** |
| 101 | NET | 06-05 14:00 | 06-05 15:00 | 174.83 | 179.29 | 42 | 7342.86 | +187.32 | +2.55% | 2.63R | 60m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 71.73 | ↑172.8 | 0.375 | 1.52 | **WIN** |
| 102 | SHOP | 06-05 14:40 | 06-05 15:00 | 105.75 | 105.29 | 48 | 5076 | -22.08 | -0.43% | 0.36R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 68.21 | ↑103.78 | 0.2625 | 1.19 | **LOSS** |
| 103 | META | 06-06 13:30 | 06-06 14:25 | 697.4 | 696.91 | 7 | 4881.8 | -3.43 | -0.07% | 0.07R | 55m | market | stagnation | trend | breakout | regimeInstability | regime-instability | 65.66 | ↓697.75 | 0.1907 | 3.64 | **LOSS** |
| 104 | ORCL | 06-06 13:30 | 06-06 13:50 | 174.36 | 173.64 | 55 | 9589.8 | -39.6 | -0.41% | 0.51R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.67 | ↓173.99 | 0.1742 | 1.61 | **LOSS** |
| 105 | SBUX | 06-06 13:30 | 06-06 13:45 | 89.29 | 88.82 | 107 | 9554.03 | -50.29 | -0.53% | 0.54R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.39 | ↓88.96 | -0.0533 | 1.87 | **LOSS** |
| 106 | TGT | 06-06 13:30 | 06-06 15:15 | 95.32 | 95.9 | 110 | 10485.2 | +63.8 | +0.61% | 0.78R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.69 | ↓95.03 | 0.0221 | 3.25 | **WIN** |
| 107 | NVO | 06-06 13:35 | 06-06 15:20 | 74.33 | 74.46 | 141 | 10480.53 | +18.33 | +0.17% | 0.22R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 78.73 | ↓74.19 | 0.2439 | 2.63 | **WIN** |
| 108 | AMZN | 06-06 13:40 | 06-06 14:10 | 212.79 | 212.02 | 34 | 7234.86 | -26.18 | -0.36% | 0.31R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 68.63 | ↓211.6 | 0.1685 | 1.19 | **LOSS** |
| 109 | PANW | 06-06 13:40 | 06-06 14:10 | 199.77 | 199.48 | 52 | 10388.04 | -15.08 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.26 | ↓199.11 | 0.3282 | 1.34 | **LOSS** |
| 110 | TGT | 06-09 13:40 | 06-09 13:45 | 99.21 | 97.75 | 47 | 4662.87 | -68.62 | -1.47% | 2.1R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 95.74 | ↓98.82 | 0.4457 | 1.33 | **LOSS** |
| 111 | UBER | 06-09 13:45 | 06-09 14:00 | 87.45 | 87.1 | 54 | 4722.3 | -18.9 | -0.4% | 0.43R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.36 | ↑86.86 | 0.2547 | 1.33 | **LOSS** |
| 112 | MU | 06-09 14:00 | 06-09 15:25 | 110.89 | 110.78 | 53 | 5877.17 | -5.83 | -0.1% | 0.09R | 85m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 70.54 | ↓109.73 | 0.252 | 1.97 | **LOSS** |
| 113 | CVX | 06-10 13:30 | 06-10 13:45 | 143.17 | 142.17 | 67 | 9592.39 | -67 | -0.7% | 1R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.24 | ↓142.78 | -0.0599 | 1.64 | **LOSS** |
| 114 | DDOG | 06-10 13:45 | 06-10 14:00 | 123.71 | 121.9 | 59 | 7298.89 | -106.79 | -1.46% | 1.8R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 69.64 | ↓123.35 | 0.2302 | 1.16 | **LOSS** |
| 115 | ELF | 06-10 14:10 | 06-10 14:25 | 121.68 | 120.51 | 38 | 4623.84 | -44.46 | -0.96% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 88.59 | ↑119.25 | 0.6102 | 3.58 | **LOSS** |
| 116 | INTC | 06-10 17:00 | 06-10 17:50 | 21.33 | 22.18 | 221 | 4713.93 | +187.85 | +3.98% | 5.69R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 98.02 | ↑20.78 | 0.0971 | 6.13 | **WIN** |
| 117 | ARM | 06-11 13:35 | 06-11 13:45 | 143.58 | 141.22 | 33 | 4738.14 | -77.88 | -1.64% | 1.95R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 77.98 | ↓143.16 | 0.6473 | 2.44 | **LOSS** |
| 118 | COIN | 06-11 13:35 | 06-11 13:55 | 258.51 | 254.79 | 28 | 7238.28 | -104.16 | -1.44% | 1.92R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 62.01 | ↓256.35 | 0.1412 | 1.1 | **LOSS** |
| 119 | DDOG | 06-12 13:50 | 06-12 14:05 | 123.57 | 122.77 | 38 | 4695.66 | -30.4 | -0.65% | 0.57R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.44 | ↑122.48 | 0.8886 | 1.15 | **LOSS** |
| 120 | SNOW | 06-12 13:50 | 06-12 14:05 | 211.63 | 211.03 | 22 | 4655.86 | -13.2 | -0.28% | 0.4R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.71 | ↑210.84 | 0.5133 | 3.96 | **LOSS** |
| 121 | AVGO | 06-12 14:10 | 06-12 14:50 | 257.13 | 256.88 | 18 | 4628.34 | -4.5 | -0.1% | 0.1R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.71 | ↑254.35 | 0.8364 | 1.87 | **LOSS** |
| 122 | ORCL | 06-13 13:35 | 06-13 14:55 | 204.62 | 210.82 | 35 | 7161.7 | +217 | +3.03% | 2.59R | 80m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 75.28 | ↑203.49 | 0.373 | 2.32 | **WIN** |
| 123 | TSLA | 06-13 16:30 | 06-13 18:10 | 326.45 | 328.36 | 12 | 3917.4 | +22.92 | +0.59% | 0.51R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 74.81 | ↑318.34 | 1.9969 | 1.47 | **WIN** |
| 124 | MU | 06-16 13:30 | 06-16 15:15 | 118.6 | 120.66 | 49 | 5811.4 | +100.94 | +1.74% | 1.54R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 80.62 | ↑118.27 | 0.283 | 2.36 | **WIN** |
| 125 | TXN | 06-16 13:30 | 06-16 15:15 | 197.72 | 199.23 | 30 | 5931.6 | +45.3 | +0.76% | 0.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 126 | LRCX | 06-16 13:35 | 06-16 15:20 | 91.91 | 93.12 | 79 | 7260.89 | +95.59 | +1.32% | 1.21R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 76.5 | ↑91.63 | 0.1251 | 2.86 | **WIN** |
| 127 | AMAT | 06-16 13:45 | 06-16 15:30 | 174.53 | 175.79 | 42 | 7330.26 | +52.92 | +0.72% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 77.18 | ↑173.77 | 0.3066 | 1.28 | **WIN** |
| 128 | RIVN | 06-16 13:45 | 06-16 15:30 | 13.76 | 14.02 | 344 | 4733.44 | +89.44 | +1.89% | 1.78R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.19 | ↑13.66 | 0.0213 | 1.11 | **WIN** |
| 129 | INTC | 06-16 13:50 | 06-16 15:35 | 20.64 | 20.78 | 229 | 4726.56 | +32.06 | +0.68% | 0.66R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.07 | ↑20.47 | 0.0657 | 1.64 | **WIN** |
| 130 | INTC | 06-17 13:35 | 06-17 13:50 | 20.92 | 20.89 | 323 | 6757.16 | -9.69 | -0.14% | 0.2R | 15m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80 | ↓20.81 | 0.0134 | 2.12 | **LOSS** |
| 131 | MU | 06-17 13:45 | 06-17 14:40 | 122.02 | 122.06 | 44 | 5368.88 | +1.76 | +0.03% | 0.03R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 77.56 | ↓121.6 | 0.5096 | 2.14 | **WIN** |
| 132 | DELL | 06-17 13:55 | 06-17 15:40 | 115.53 | 117.42 | 63 | 7278.39 | +119.07 | +1.64% | 2.1R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 78.82 | ↑114.57 | 0.3272 | 1.65 | **WIN** |
| 133 | CRM | 06-17 14:20 | 06-17 14:35 | 270.18 | 267.73 | 27 | 7294.86 | -66.15 | -0.91% | 0.96R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.87 | ↑267.08 | 1.4065 | 2.29 | **LOSS** |
| 134 | GE | 06-17 15:10 | 06-17 15:25 | 238.82 | 237.15 | 30 | 7164.6 | -50.1 | -0.7% | 1R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 63.47 | ↑236.55 | -0.0641 | 2.64 | **LOSS** |
| 135 | MRVL | 06-17 17:05 | 06-17 17:30 | 70.34 | 71.28 | 95 | 6682.3 | +89.3 | +1.34% | 1.51R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.71 | ↑70.03 | -0.1539 | 2.74 | **WIN** |
| 136 | RIVN | 06-18 13:35 | 06-18 15:20 | 13.61 | 13.74 | 540 | 7349.4 | +70.2 | +0.96% | 1.22R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 78.57 | ↑13.5 | 0.0001 | 1.78 | **WIN** |
| 137 | SMCI | 06-18 13:50 | 06-18 15:35 | 43.77 | 44.14 | 239 | 10461.03 | +88.43 | +0.85% | 0.71R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 64.8 | ↑43.42 | 0.084 | 2.67 | **WIN** |
| 138 | INTC | 06-18 13:55 | 06-18 15:40 | 21.15 | 21.44 | 347 | 7339.05 | +100.63 | +1.37% | 1.76R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.07 | ↑20.92 | 0.0278 | 1.85 | **WIN** |
| 139 | AVGO | 06-18 14:10 | 06-18 14:45 | 254.63 | 254.1 | 28 | 7129.64 | -14.84 | -0.21% | 0.19R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 67.56 | ↑251.99 | 0.8009 | 1.14 | **LOSS** |
| 140 | INTC | 06-23 13:35 | 06-23 14:40 | 21.36 | 21.37 | 222 | 4741.92 | +2.22 | +0.05% | 0.07R | 65m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 83.51 | ↓21.28 | 0.0021 | 1.62 | **WIN** |
| 141 | ARM | 06-23 14:00 | 06-23 14:35 | 147.17 | 147.06 | 32 | 4709.44 | -3.52 | -0.07% | 0.09R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 71.81 | ↑145.36 | 0.2798 | 1.32 | **LOSS** |
| 142 | LRCX | 06-23 14:00 | 06-23 14:30 | 92.45 | 92.4 | 51 | 4714.95 | -2.55 | -0.05% | 0.05R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87 | ↑91.59 | 0.5071 | 1.35 | **LOSS** |
| 143 | CRM | 06-24 13:35 | 06-24 15:20 | 267.6 | 270.56 | 17 | 4549.2 | +50.32 | +1.11% | 1.59R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 85.48 | ↑266.83 | 0.6705 | 1.36 | **WIN** |
| 144 | ORCL | 06-24 13:35 | 06-24 14:05 | 211.62 | 210.9 | 22 | 4655.64 | -15.84 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.77 | ↓210.26 | 1.0072 | 1.16 | **LOSS** |
| 145 | INTC | 06-24 13:35 | 06-24 14:45 | 21.69 | 22.33 | 339 | 7352.91 | +216.96 | +2.95% | 4.21R | 70m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 68.85 | ↑21.57 | 0.1238 | 2.32 | **WIN** |
| 146 | COIN | 06-24 13:35 | 06-24 14:10 | 316.51 | 332.68 | 23 | 7279.73 | +371.91 | +5.11% | 4.33R | 35m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 80.79 | ↑314.31 | 1.6507 | 1.32 | **WIN** |
| 147 | NOW | 06-24 13:35 | 06-24 13:55 | 990.55 | 985.98 | 4 | 3962.2 | -18.28 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 82.89 | ↓989.94 | 2.4193 | 3.67 | **LOSS** |
| 148 | PYPL | 06-24 13:35 | 06-24 13:55 | 73.45 | 72.87 | 64 | 4700.8 | -37.12 | -0.79% | 1.08R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.24 | ↓73.13 | 0.3185 | 1.56 | **LOSS** |
| 149 | NVDA | 06-24 13:40 | 06-24 13:55 | 147.74 | 147.03 | 32 | 4727.68 | -22.72 | -0.48% | 0.69R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.28 | ↑146.44 | 0.6831 | 3.9 | **LOSS** |
| 150 | AMZN | 06-24 13:45 | 06-24 14:00 | 213.79 | 212.46 | 22 | 4703.38 | -29.26 | -0.62% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.73 | ↓212.62 | 0.7151 | 1.16 | **LOSS** |
| 151 | META | 06-24 13:45 | 06-24 14:00 | 712.03 | 705.9 | 6 | 4272.18 | -36.78 | -0.86% | 1.09R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.88 | ↓710.12 | 3.5297 | 2.62 | **LOSS** |
| 152 | QCOM | 06-24 13:45 | 06-24 14:00 | 155.83 | 154.92 | 30 | 4674.9 | -27.3 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 153 | GOOGL | 06-25 13:30 | 06-25 13:45 | 169.35 | 168.98 | 61 | 10330.35 | -22.57 | -0.22% | 0.31R | 15m | market | breakeven-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.9 | ↓168.9 | 0.1138 | 3.07 | **LOSS** |
| 154 | AVGO | 06-25 13:30 | 06-25 14:00 | 266.9 | 266.75 | 17 | 4537.3 | -2.55 | -0.06% | 0.09R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 95.37 | ↓266.09 | 0.7073 | 1.21 | **LOSS** |
| 155 | AMD | 06-25 13:35 | 06-25 13:50 | 141.74 | 140.22 | 74 | 10488.76 | -112.48 | -1.07% | 0.91R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.57 | ↓140.94 | 0.8304 | 3.54 | **LOSS** |
| 156 | CRWD | 06-25 13:35 | 06-25 14:20 | 495.11 | 494.03 | 14 | 6931.54 | -15.12 | -0.22% | 0.31R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 81.8 | ↓494.13 | 1.7125 | 2.89 | **LOSS** |
| 157 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 158 | GE | 06-26 13:45 | 06-26 14:15 | 253.81 | 253.61 | 18 | 4568.58 | -3.6 | -0.08% | 0.11R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.54 | ↑252.51 | 0.7105 | 1.44 | **LOSS** |
| 159 | RIVN | 06-26 13:50 | 06-26 14:30 | 14.04 | 14.03 | 749 | 10515.96 | -7.49 | -0.07% | 0.06R | 40m | market | stagnation | trend | breakout | neutral | neutral | 66.4 | ↑13.92 | 0.0396 | 2.22 | **LOSS** |
| 160 | INTC | 06-27 13:40 | 06-27 14:25 | 23.11 | 23.07 | 456 | 10538.16 | -18.24 | -0.17% | 0.22R | 45m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.27 | ↓22.9 | 0.1116 | 5.02 | **LOSS** |
| 161 | CRM | 06-30 13:30 | 06-30 13:45 | 275.88 | 274.11 | 16 | 4414.08 | -28.32 | -0.64% | 0.91R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 92.59 | ↓275.49 | 0.3147 | 1.2 | **LOSS** |
| 162 | SBUX | 06-30 13:35 | 06-30 13:50 | 94.13 | 93.23 | 50 | 4706.5 | -45 | -0.96% | 1.35R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.25 | ↓93.5 | 0.2684 | 1.26 | **LOSS** |
| 163 | UNH | 07-01 13:50 | 07-01 15:35 | 317.19 | 323.98 | 14 | 4440.66 | +95.06 | +2.14% | 2.43R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.71 | ↑314.19 | 1.0022 | 2.1 | **WIN** |
| 164 | CELH | 07-01 13:50 | 07-01 14:20 | 47.6 | 47.55 | 220 | 10472 | -11 | -0.11% | 0.1R | 30m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 63.81 | ↑47.19 | 0.117 | 1.73 | **LOSS** |
| 165 | NKE | 07-02 13:30 | 07-02 13:45 | 74.31 | 74.03 | 130 | 9660.3 | -36.4 | -0.38% | 0.47R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.71 | ↓73.93 | 0.1824 | 3.95 | **LOSS** |
| 166 | AAPL | 07-02 13:35 | 07-02 15:20 | 211.17 | 211.99 | 49 | 10347.33 | +40.18 | +0.39% | 0.56R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 74.68 | ↑209.91 | 0.3049 | 2.56 | **WIN** |
| 167 | SHOP | 07-02 14:30 | 07-02 15:15 | 115.95 | 115.78 | 40 | 4638 | -6.8 | -0.15% | 0.14R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.97 | ↑113.95 | 0.5717 | 1.29 | **LOSS** |
| 168 | DELL | 07-02 14:45 | 07-02 15:15 | 123.64 | 123.32 | 85 | 10509.4 | -27.2 | -0.26% | 0.33R | 30m | market | stagnation | trend | breakout | neutral | neutral | 81.02 | ↑122.28 | 0.2899 | 4.87 | **LOSS** |
| 169 | CRM | 07-03 13:30 | 07-03 14:35 | 272.29 | 272.12 | 17 | 4628.93 | -2.89 | -0.06% | 0.09R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.79 | ↓271.56 | 0.7389 | 1.97 | **LOSS** |
| 170 | PANW | 07-03 13:30 | 07-03 15:15 | 199.29 | 202.08 | 18 | 3587.22 | +50.22 | +1.4% | 2R | 105m | market | timeout | trend | breakout | regimeInstability | regime-instability | 89.06 | ↑199.23 | 0.3117 | 1.81 | **WIN** |
| 171 | SNOW | 07-03 13:35 | 07-03 15:20 | 220.2 | 222.04 | 21 | 4624.2 | +38.64 | +0.84% | 1.2R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.62 | ↑219.05 | 0.4824 | 1.53 | **WIN** |
| 172 | INTC | 07-03 13:40 | 07-03 14:25 | 22.37 | 22.35 | 212 | 4742.44 | -4.24 | -0.09% | 0.11R | 45m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.69 | ↑22.22 | 0.0634 | 3.08 | **LOSS** |
| 173 | ABNB | 07-03 13:40 | 07-03 14:20 | 137.35 | 137.19 | 34 | 4669.9 | -5.44 | -0.12% | 0.17R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 90.4 | ↓136.81 | 0.4503 | 1.11 | **LOSS** |
| 174 | BA | 07-03 13:40 | 07-03 15:25 | 214.71 | 215.92 | 16 | 3435.36 | +19.36 | +0.56% | 0.8R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.03 | ↑213.52 | 0.5167 | 1.39 | **WIN** |
| 175 | NET | 07-03 13:50 | 07-03 15:35 | 189.12 | 191.51 | 25 | 4728 | +59.75 | +1.26% | 1.52R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.55 | ↑187.72 | 0.9403 | 1.29 | **WIN** |
| 176 | UBER | 07-07 13:40 | 07-07 15:25 | 95.13 | 96.86 | 110 | 10464.3 | +190.3 | +1.82% | 1.9R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 76.15 | ↑94.96 | 0.3361 | 3.29 | **WIN** |
| 177 | COIN | 07-07 13:45 | 07-07 14:05 | 360.88 | 358.15 | 18 | 6495.84 | -49.14 | -0.76% | 0.64R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.45 | ↑354.92 | 0.4228 | 2.85 | **LOSS** |
| 178 | RIVN | 07-08 17:50 | 07-08 18:10 | 13.33 | 13.29 | 356 | 4745.48 | -14.24 | -0.3% | 0.43R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.12 | ↑13.11 | 0.0247 | 2.97 | **LOSS** |
| 179 | COIN | 07-09 13:30 | 07-09 13:55 | 358.64 | 359.28 | 20 | 7172.8 | +12.8 | +0.18% | 0.26R | 25m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.46 | ↓357.65 | 0.5578 | 1.49 | **WIN** |
| 180 | LLY | 07-09 13:30 | 07-09 13:45 | 792.88 | 785.85 | 13 | 10307.44 | -91.39 | -0.89% | 1.27R | 15m | market | stop-loss | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.63 | ↓789.83 | 0.6056 | 3.45 | **LOSS** |
| 181 | META | 07-09 13:35 | 07-09 15:20 | 729.76 | 734.89 | 6 | 4378.56 | +30.78 | +0.7% | 1R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 86.51 | ↑727.39 | 1.0668 | 4.23 | **WIN** |
| 182 | TSM | 07-09 13:40 | 07-09 13:55 | 232.41 | 231.41 | 31 | 7204.71 | -31 | -0.43% | 0.61R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.25 | ↓231.7 | 0.4906 | 1.48 | **LOSS** |
| 183 | GE | 07-09 13:40 | 07-09 13:55 | 250.55 | 248.9 | 29 | 7265.95 | -47.85 | -0.66% | 0.94R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.26 | ↓250.15 | 0.4523 | 1.34 | **LOSS** |
| 184 | CELH | 07-09 16:20 | 07-09 16:45 | 46.36 | 46.22 | 102 | 4728.72 | -14.28 | -0.3% | 0.43R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.11 | ↑45.7 | 0.137 | 5.13 | **LOSS** |
| 185 | AMAT | 07-10 13:40 | 07-10 13:55 | 197.73 | 196.85 | 53 | 10479.69 | -46.64 | -0.45% | 0.64R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.37 | ↓197.43 | 0.2549 | 3.11 | **LOSS** |
| 186 | HPE | 07-10 15:40 | 07-10 16:10 | 21.47 | 21.45 | 220 | 4723.4 | -4.4 | -0.09% | 0.13R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 94.89 | ↑21.02 | 0.1184 | 3.71 | **LOSS** |
| 187 | BA | 07-14 13:35 | 07-14 13:50 | 230.86 | 229.79 | 23 | 5309.78 | -24.61 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.67 | ↓230.85 | 0.2692 | 1.79 | **LOSS** |
| 188 | SHOP | 07-14 17:05 | 07-14 17:15 | 118.48 | 117.55 | 39 | 4620.72 | -36.27 | -0.78% | 1.11R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.6 | ↑115.06 | 0.7675 | 2.8 | **LOSS** |
| 189 | DELL | 07-15 13:40 | 07-15 13:55 | 128.13 | 127.14 | 57 | 7303.41 | -56.43 | -0.77% | 1.04R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.56 | ↓127.6 | 0.323 | 1.26 | **LOSS** |
| 190 | MDB | 07-15 13:45 | 07-15 14:20 | 207.37 | 206.86 | 35 | 7257.95 | -17.85 | -0.25% | 0.29R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.38 | ↓204.74 | 0.3351 | 1.11 | **LOSS** |
| 191 | NET | 07-15 13:50 | 07-15 14:05 | 184.49 | 182.94 | 39 | 7195.11 | -60.45 | -0.84% | 0.83R | 15m | market | early-reversal | mixed | breakout | confirmationRequired | confirmation-required | 67.27 | ↓183.3 | -0.1892 | 1.28 | **LOSS** |
| 192 | ABNB | 07-17 13:30 | 07-17 14:00 | 138.39 | 138.11 | 53 | 7334.67 | -14.84 | -0.2% | 0.29R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 68.22 | ↓138.4 | 0.1644 | 1.15 | **LOSS** |
| 193 | HPE | 07-17 13:40 | 07-17 13:55 | 21.14 | 20.85 | 320 | 6764.8 | -92.8 | -1.37% | 1.17R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.09 | ↓21.02 | 0.1245 | 1.98 | **LOSS** |
| 194 | TGT | 07-17 13:40 | 07-17 14:30 | 102.57 | 102.44 | 102 | 10462.14 | -13.26 | -0.13% | 0.19R | 50m | market | breakeven-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 70.93 | ↓102.29 | 0.2008 | 1.58 | **LOSS** |
| 195 | ORCL | 07-17 13:55 | 07-17 15:35 | 249.27 | 249.15 | 19 | 4736.13 | -2.28 | -0.05% | 0.05R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 97.19 | ↑246.13 | 2.2017 | 1.12 | **LOSS** |
| 196 | TSLA | 07-18 13:30 | 07-18 14:30 | 325.38 | 326.52 | 25 | 8134.5 | +28.5 | +0.35% | 0.47R | 60m | market | trailing-stop | trend | breakout | falseBreakoutProne | false-breakout-risk | 80.09 | ↓324.11 | 0.3929 | 3.84 | **WIN** |
| 197 | INTC | 07-18 13:30 | 07-18 13:40 | 23.46 | 23.16 | 314 | 7366.44 | -94.2 | -1.28% | 1.54R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 81.94 | ↓23.35 | 0.1194 | 7.19 | **LOSS** |
| 198 | ARM | 07-18 13:40 | 07-18 13:55 | 160.74 | 159.41 | 42 | 6751.08 | -55.86 | -0.83% | 0.93R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 81.21 | ↓159.81 | 0.5552 | 2.73 | **LOSS** |
| 199 | ELF | 07-18 16:45 | 07-18 18:30 | 115.94 | 117.44 | 40 | 4637.6 | +60 | +1.29% | 1.29R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.52 | ↑113.54 | 0.9668 | 1.48 | **WIN** |
| 200 | CVX | 07-21 13:30 | 07-21 13:45 | 151.55 | 150.33 | 48 | 7274.4 | -58.56 | -0.81% | 0.7R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 80.42 | ↓151.14 | 0.0925 | 3.38 | **LOSS** |
| 201 | LRCX | 07-21 13:35 | 07-21 13:40 | 102.41 | 101.56 | 46 | 4710.86 | -39.1 | -0.83% | 1.19R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 86.04 | ↓101.88 | 0.221 | 1.12 | **LOSS** |
| 202 | UBER | 07-21 13:40 | 07-21 14:10 | 91.68 | 91.32 | 114 | 10451.52 | -41.04 | -0.39% | 0.51R | 30m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.23 | ↓91.37 | 0.2434 | 1.8 | **LOSS** |
| 203 | CRWD | 07-21 13:45 | 07-21 14:20 | 484.3 | 482.8 | 15 | 7264.5 | -22.5 | -0.31% | 0.39R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.38 | ↓481.12 | 1.7113 | 2.09 | **LOSS** |
| 204 | NET | 07-21 13:45 | 07-21 14:15 | 199.29 | 198.86 | 36 | 7174.44 | -15.48 | -0.22% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 78.31 | ↑197.5 | 0.5778 | 1.49 | **LOSS** |
| 205 | RIVN | 07-22 13:35 | 07-22 13:50 | 13.96 | 13.7 | 340 | 4746.4 | -88.4 | -1.86% | 1.75R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 82.29 | ↓13.83 | 0.0228 | 1.41 | **LOSS** |
| 206 | SBUX | 07-22 13:45 | 07-22 14:50 | 95.14 | 94.99 | 77 | 7325.78 | -11.55 | -0.16% | 0.18R | 65m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.38 | ↑94.11 | 0.2112 | 1.33 | **LOSS** |
| 207 | NKE | 07-22 13:45 | 07-22 14:00 | 75.4 | 74.98 | 97 | 7313.8 | -40.74 | -0.56% | 0.77R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.93 | ↓75.13 | 0.0967 | 1.47 | **LOSS** |
| 208 | TGT | 07-22 13:45 | 07-22 14:10 | 104.91 | 104.36 | 70 | 7343.7 | -38.5 | -0.52% | 0.46R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.02 | ↓104.31 | 0.3853 | 1.66 | **LOSS** |
| 209 | AMD | 07-23 13:40 | 07-23 13:55 | 157.43 | 156.63 | 46 | 7241.78 | -36.8 | -0.51% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.9 | ↓157.17 | 0.5518 | 1.35 | **LOSS** |
| 210 | CAT | 07-23 13:40 | 07-23 13:55 | 425.63 | 423.21 | 17 | 7235.71 | -41.14 | -0.57% | 0.81R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 211 | BA | 07-23 16:00 | 07-23 16:30 | 234.71 | 233.85 | 15 | 3520.65 | -12.9 | -0.37% | 0.53R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.33 | ↑231.98 | 0.9135 | 1.93 | **LOSS** |
| 212 | NVO | 07-24 13:30 | 07-24 14:10 | 70.89 | 70.77 | 103 | 7301.67 | -12.36 | -0.17% | 0.24R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.33 | ↓70.77 | -0.0077 | 1.69 | **LOSS** |
| 213 | AVGO | 07-24 13:35 | 07-24 13:50 | 289.28 | 286.05 | 25 | 7232 | -80.75 | -1.12% | 1R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.76 | ↓288.43 | 1.9615 | 1.44 | **LOSS** |
| 214 | UBER | 07-24 13:35 | 07-24 15:20 | 92.37 | 92.1 | 79 | 7297.23 | -21.33 | -0.29% | 0.32R | 105m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 75.31 | ↓91.79 | 0.0272 | 1.24 | **LOSS** |
| 215 | PYPL | 07-24 13:35 | 07-24 15:15 | 78.11 | 78.11 | 94 | 7342.34 | +0 | +0% | 0R | 100m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 81.31 | ↓77.86 | 0.1157 | 2.06 | **WIN** |
| 216 | DELL | 07-24 13:35 | 07-24 13:55 | 128.82 | 128.34 | 57 | 7342.74 | -27.36 | -0.37% | 0.53R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.85 | ↓128.19 | 0.2022 | 2.29 | **LOSS** |
| 217 | GE | 07-24 13:40 | 07-24 15:25 | 266.35 | 269.29 | 27 | 7191.45 | +79.38 | +1.1% | 1.57R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 74.08 | ↑265.31 | 0.6152 | 1.53 | **WIN** |
| 218 | TSLA | 07-25 13:30 | 07-25 13:45 | 311.19 | 309.32 | 26 | 8090.94 | -48.62 | -0.6% | 0.58R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 75.81 | ↓310.21 | 1.1278 | 2.56 | **LOSS** |
| 219 | UNH | 07-25 13:30 | 07-25 13:50 | 284.09 | 282.42 | 36 | 10227.24 | -60.12 | -0.59% | 0.7R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.69 | ↓282.94 | -0.1482 | 1.68 | **LOSS** |
| 220 | DDOG | 07-25 13:35 | 07-25 15:20 | 148.49 | 148.76 | 49 | 7276.01 | +13.23 | +0.18% | 0.26R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79 | ↑147.86 | 0.3474 | 1.18 | **WIN** |
| 221 | NOW | 07-28 13:30 | 07-28 14:10 | 989.37 | 987.52 | 9 | 8904.33 | -16.65 | -0.19% | 0.24R | 40m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.93 | ↓985.05 | 1.5785 | 2.09 | **LOSS** |
| 222 | INTC | 07-28 13:35 | 07-28 13:50 | 21.14 | 20.96 | 224 | 4735.36 | -40.32 | -0.85% | 1.21R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 87.23 | ↓21 | 0.1099 | 8.97 | **LOSS** |
| 223 | ELF | 07-28 14:00 | 07-28 14:20 | 122.03 | 121.45 | 60 | 7321.8 | -34.8 | -0.48% | 0.59R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.91 | ↓121.38 | 0.2853 | 1.62 | **LOSS** |
| 224 | MRVL | 07-29 13:30 | 07-29 13:40 | 77.32 | 77.3 | 61 | 4716.52 | -1.22 | -0.03% | 0.04R | 10m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 86.82 | ↓77.02 | 0.2956 | 2.31 | **LOSS** |
| 225 | DELL | 07-29 13:30 | 07-29 13:45 | 135.33 | 134.54 | 35 | 4736.55 | -27.65 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 89.41 | ↓135.29 | 0.3907 | 1.98 | **LOSS** |
| 226 | ORCL | 07-29 13:35 | 07-29 14:05 | 251.92 | 251.06 | 18 | 4534.56 | -15.48 | -0.34% | 0.49R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 96.14 | ↓251.09 | 0.9485 | 2.18 | **LOSS** |
| 227 | SNOW | 07-31 13:45 | 07-31 15:25 | 224.43 | 226.18 | 21 | 4713.03 | +36.75 | +0.78% | 0.72R | 100m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 86.39 | ↓223.01 | 0.3172 | 1.1 | **WIN** |
| 228 | AAPL | 08-04 13:30 | 08-04 15:15 | 205.58 | 205.77 | 51 | 10484.58 | +9.69 | +0.09% | 0.1R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 65.15 | ↓205.16 | 0.3696 | 2.6 | **WIN** |
| 229 | GOOGL | 08-04 13:35 | 08-04 15:20 | 192.42 | 192.81 | 24 | 4618.08 | +9.36 | +0.2% | 0.29R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 91.28 | ↓191.62 | 0.627 | 3.3 | **WIN** |
| 230 | META | 08-04 13:35 | 08-04 14:00 | 764.16 | 761.57 | 6 | 4584.96 | -15.54 | -0.34% | 0.46R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.76 | ↓762.46 | 2.1693 | 3.3 | **LOSS** |
| 231 | MSFT | 08-04 13:35 | 08-04 15:20 | 532.85 | 533.35 | 8 | 4262.8 | +4 | +0.09% | 0.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 82.14 | ↓530.84 | 1.3137 | 1.29 | **WIN** |
| 232 | GS | 08-04 13:35 | 08-04 15:25 | 721.39 | 723.72 | 10 | 7213.9 | +23.3 | +0.32% | 0.46R | 110m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 72.07 | ↑718.85 | 1.1834 | 1.76 | **WIN** |
| 233 | LRCX | 08-04 13:35 | 08-04 13:55 | 97.91 | 97.51 | 48 | 4699.68 | -19.2 | -0.41% | 0.51R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.55 | ↓97.41 | 0.4154 | 1.38 | **LOSS** |
| 234 | ORCL | 08-04 13:40 | 08-04 15:10 | 249.09 | 249.45 | 29 | 7223.61 | +10.44 | +0.14% | 0.18R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 80.12 | ↓247.91 | 0.662 | 1.26 | **WIN** |
| 235 | UBER | 08-04 13:40 | 08-04 13:55 | 88.26 | 87.77 | 53 | 4677.78 | -25.97 | -0.56% | 0.78R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.8 | ↓88.05 | 0.3843 | 1.38 | **LOSS** |
| 236 | ABNB | 08-04 13:45 | 08-04 14:35 | 129.96 | 129.64 | 56 | 7277.76 | -17.92 | -0.25% | 0.31R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 80.57 | ↓129.6 | 0.4488 | 1.9 | **LOSS** |
| 237 | AMZN | 08-05 13:35 | 08-05 14:10 | 215.54 | 215.31 | 34 | 7328.36 | -7.82 | -0.11% | 0.14R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.14 | ↑214.64 | 0.2154 | 1.45 | **LOSS** |
| 238 | UBER | 08-05 13:40 | 08-05 14:10 | 90.35 | 90.19 | 52 | 4698.2 | -8.32 | -0.18% | 0.23R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 97.6 | ↑89.75 | 0.3437 | 3.63 | **LOSS** |
| 239 | TXN | 08-05 13:40 | 08-05 14:10 | 185.54 | 185.26 | 25 | 4638.5 | -7 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 240 | MRVL | 08-05 13:45 | 08-05 14:00 | 77.83 | 77.09 | 94 | 7316.02 | -69.56 | -0.95% | 0.98R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.37 | ↓77.23 | 0.1498 | 1.41 | **LOSS** |
| 241 | TSLA | 08-06 13:40 | 08-06 15:25 | 313.41 | 318.29 | 28 | 8775.48 | +136.64 | +1.56% | 1.79R | 105m | market | timeout | trend | breakout | falseBreakoutProne | false-breakout-risk | 68.52 | ↑310.84 | 0.5053 | 1.42 | **WIN** |
| 242 | AAPL | 08-07 13:35 | 08-07 14:05 | 219.09 | 218.52 | 33 | 7229.97 | -18.81 | -0.26% | 0.23R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 243 | ARM | 08-07 13:40 | 08-07 14:05 | 139 | 138.28 | 21 | 2919 | -15.12 | -0.52% | 0.63R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.15 | ↓138.69 | 0.5859 | 1.61 | **LOSS** |
| 244 | MRVL | 08-07 13:40 | 08-07 14:00 | 77 | 76.68 | 61 | 4697 | -19.52 | -0.42% | 0.44R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.56 | ↓76.76 | 0.4182 | 1.91 | **LOSS** |
| 245 | TSLA | 08-08 13:35 | 08-08 15:20 | 328.54 | 333.32 | 12 | 3942.48 | +57.36 | +1.45% | 1.67R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.85 | ↑325.67 | 1.855 | 2.23 | **WIN** |
| 246 | PANW | 08-08 13:35 | 08-08 13:50 | 170.03 | 168.42 | 27 | 4590.81 | -43.47 | -0.95% | 1.23R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 91.99 | ↓169.75 | 0.7108 | 1.26 | **LOSS** |
| 247 | NFLX | 08-08 14:20 | 08-08 14:35 | 1206.06 | 1201.02 | 3 | 3618.18 | -15.12 | -0.42% | 0.6R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 96.55 | ↑1191.79 | 6.4732 | 1.63 | **LOSS** |
| 248 | MU | 08-08 14:30 | 08-08 15:20 | 115.19 | 118.33 | 32 | 3686.08 | +100.48 | +2.73% | 2.65R | 50m | market | profit-target | trend | breakout | confirmationRequired | confirmation-required | 87.57 | ↑113.77 | 0.7716 | 2.98 | **WIN** |
| 249 | TSLA | 08-11 13:30 | 08-11 14:00 | 339.95 | 339.64 | 24 | 8158.8 | -7.44 | -0.09% | 0.08R | 30m | market | stagnation | trend | breakout | falseBreakoutProne | false-breakout-risk | 79.45 | ↓338.44 | 1.6387 | 4.12 | **LOSS** |
| 250 | SHOP | 08-11 13:30 | 08-11 13:45 | 151.32 | 150.46 | 31 | 4690.92 | -26.66 | -0.57% | 0.76R | 15m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 83.4 | ↓150.64 | 0.2011 | 4.34 | **LOSS** |
| 251 | CRWD | 08-11 13:35 | 08-11 13:45 | 429.75 | 425.15 | 17 | 7305.75 | -78.2 | -1.07% | 1.53R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 78.91 | ↓427.46 | 0.7366 | 1.46 | **LOSS** |
| 252 | SMCI | 08-11 13:40 | 08-11 14:20 | 45.83 | 45.75 | 160 | 7332.8 | -12.8 | -0.17% | 0.14R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 253 | LRCX | 08-11 13:40 | 08-11 13:55 | 103.92 | 103.38 | 45 | 4676.4 | -24.3 | -0.52% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 84.19 | ↓103.53 | 0.3151 | 2.26 | **LOSS** |
| 254 | QCOM | 08-11 13:45 | 08-11 14:00 | 150.88 | 150.19 | 31 | 4677.28 | -21.39 | -0.46% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 255 | KLAC | 08-11 13:45 | 08-11 14:05 | 932.16 | 923.34 | 5 | 4660.8 | -44.1 | -0.95% | 1.36R | 20m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 85.96 | ↓930.7 | 3.6648 | 1.37 | **LOSS** |
| 256 | AAPL | 08-12 13:30 | 08-12 13:40 | 230.01 | 227.28 | 31 | 7130.31 | -84.63 | -1.19% | 1.7R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 257 | TXN | 08-12 13:30 | 08-12 14:30 | 186.58 | 191.33 | 51 | 9515.58 | +242.25 | +2.55% | 3.64R | 60m | market | profit-target | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.74 | ↑186.07 | -0.0234 | 1.81 | **WIN** |
| 258 | MDB | 08-12 13:35 | 08-12 13:50 | 203.56 | 200.77 | 51 | 10381.56 | -142.29 | -1.37% | 1.88R | 15m | market | stop-loss | trend | breakout | noisyHighBeta | noisy-high-beta | 63.98 | ↓203.01 | -0.1816 | 1.8 | **LOSS** |
| 259 | BAC | 08-12 13:35 | 08-12 15:20 | 47 | 47.39 | 100 | 4700 | +39 | +0.83% | 1.19R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.91 | ↑46.84 | 0.0902 | 1.66 | **WIN** |
| 260 | QCOM | 08-12 14:15 | 08-12 14:35 | 152.21 | 151.74 | 31 | 4718.51 | -14.57 | -0.31% | 0.41R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.67 | ↑150.77 | 0.7869 | 1.48 | **LOSS** |
| 261 | TSLA | 08-13 13:30 | 08-13 14:00 | 346.57 | 344.85 | 25 | 8664.25 | -43 | -0.5% | 0.62R | 30m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 74.88 | ↓344.47 | 1.1247 | 2.86 | **LOSS** |
| 262 | BA | 08-13 13:30 | 08-13 14:10 | 234.52 | 233.93 | 15 | 3517.8 | -8.85 | -0.25% | 0.36R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 82.9 | ↓234.1 | 0.5502 | 1.68 | **LOSS** |
| 263 | NVO | 08-13 13:30 | 08-13 15:15 | 50.46 | 51.04 | 93 | 4692.78 | +53.94 | +1.15% | 1.64R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 83.33 | ↑50.39 | 0.0377 | 2.21 | **WIN** |
| 264 | NKE | 08-13 13:35 | 08-13 15:20 | 76.32 | 77.43 | 62 | 4731.84 | +68.82 | +1.45% | 2.07R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 89.11 | ↑75.8 | 0.166 | 1.79 | **WIN** |
| 265 | LLY | 08-13 13:40 | 08-13 15:25 | 649.72 | 655.47 | 11 | 7146.92 | +63.25 | +0.88% | 1.05R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 76.81 | ↑648.65 | 1.0009 | 1.68 | **WIN** |
| 266 | KLAC | 08-13 13:40 | 08-13 14:00 | 948.01 | 944.98 | 7 | 6636.07 | -21.21 | -0.32% | 0.46R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.26 | ↓944.47 | 2.7277 | 2.09 | **LOSS** |
| 267 | PYPL | 08-13 13:45 | 08-13 15:30 | 69.2 | 69.62 | 68 | 4705.6 | +28.56 | +0.61% | 0.87R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.64 | ↑68.77 | 0.2369 | 1.27 | **WIN** |
| 268 | IBM | 08-13 14:00 | 08-13 14:30 | 240.31 | 239.86 | 30 | 7209.3 | -13.5 | -0.19% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.1 | ↑238.39 | 1.1583 | 1.43 | **LOSS** |
| 269 | RIVN | 08-13 14:20 | 08-13 14:50 | 12.11 | 12.07 | 607 | 7350.77 | -24.28 | -0.33% | 0.39R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.69 | ↑11.99 | 0.054 | 1.46 | **LOSS** |
| 270 | LLY | 08-15 13:30 | 08-15 13:50 | 693.93 | 690.15 | 13 | 9021.09 | -49.14 | -0.54% | 0.77R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 81.03 | ↓692.05 | 2.2105 | 3.28 | **LOSS** |
| 271 | NVO | 08-15 13:30 | 08-15 15:15 | 51.66 | 51.92 | 91 | 4701.06 | +23.66 | +0.5% | 0.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 92.5 | ↑51.54 | 0.2405 | 2.93 | **WIN** |
| 272 | CRM | 08-15 13:35 | 08-15 14:10 | 239.28 | 238.82 | 19 | 4546.32 | -8.74 | -0.19% | 0.27R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 86.24 | ↓237.54 | 0.34 | 2.03 | **LOSS** |
| 273 | MU | 08-18 13:30 | 08-18 13:55 | 122.64 | 122.08 | 63 | 7726.32 | -35.28 | -0.46% | 0.66R | 25m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.45 | ↓122.02 | 0.1639 | 6.42 | **LOSS** |
| 274 | SBUX | 08-18 13:35 | 08-18 15:20 | 91.75 | 92.85 | 80 | 7340 | +88 | +1.2% | 1.71R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 75.12 | ↑91.22 | 0.0459 | 1.57 | **WIN** |
| 275 | NVO | 08-19 13:30 | 08-19 13:55 | 54.77 | 54.7 | 105 | 5750.85 | -7.35 | -0.13% | 0.16R | 25m | market | trailing-stop | trend | breakout | regimeInstability | regime-instability | 73.26 | ↓54.78 | -0.0126 | 2.64 | **LOSS** |
| 276 | CAT | 08-19 13:40 | 08-19 13:50 | 417.72 | 414.26 | 17 | 7101.24 | -58.82 | -0.83% | 1.19R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 75.51 | ↓416.8 | 1.2247 | 1.46 | **LOSS** |
| 277 | TGT | 08-19 13:40 | 08-19 14:00 | 107.03 | 106.63 | 44 | 4709.32 | -17.6 | -0.37% | 0.53R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.43 | ↓106.39 | 0.2896 | 1.14 | **LOSS** |
| 278 | LOW | 08-19 13:40 | 08-19 14:20 | 256.74 | 256.31 | 18 | 4621.32 | -7.74 | -0.17% | 0.24R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 89.96 | ↓255.83 | 0.7387 | 1.77 | **LOSS** |
| 279 | ADBE | 08-19 13:45 | 08-19 13:50 | 362.66 | 359.7 | 13 | 4714.58 | -38.48 | -0.82% | 1.17R | 5m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 82.7 | ↓360.86 | 0.8616 | 1.66 | **LOSS** |
| 280 | TSLA | 08-19 13:55 | 08-19 14:25 | 339.03 | 338.68 | 18 | 6102.54 | -6.3 | -0.1% | 0.11R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 73.24 | ↑335.97 | 0.5198 | 2.45 | **LOSS** |
| 281 | DDOG | 08-19 14:15 | 08-19 14:35 | 130.95 | 130.43 | 56 | 7333.2 | -29.12 | -0.4% | 0.43R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 70.26 | ↑129.95 | 0.3091 | 1.2 | **LOSS** |
| 282 | NVDA | 08-21 13:35 | 08-21 13:50 | 176.85 | 175.57 | 59 | 10434.15 | -75.52 | -0.72% | 0.9R | 15m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 69.72 | ↓175.91 | 0.5481 | 2.79 | **LOSS** |
| 283 | DELL | 08-21 13:35 | 08-21 13:50 | 130.08 | 128.97 | 36 | 4682.88 | -39.96 | -0.85% | 1.12R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 85.25 | ↓129.72 | 0.3346 | 1.29 | **LOSS** |
| 284 | LLY | 08-21 13:40 | 08-21 13:55 | 715.79 | 711.29 | 6 | 4294.74 | -27 | -0.63% | 0.9R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.21 | ↓711.27 | 3.009 | 3.71 | **LOSS** |
| 285 | INTC | 08-22 13:35 | 08-22 15:05 | 24.04 | 24.38 | 197 | 4735.88 | +66.98 | +1.41% | 2.01R | 90m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 90.84 | ↑23.89 | 0.0982 | 4.87 | **WIN** |
| 286 | MU | 08-22 13:35 | 08-22 13:55 | 117.42 | 116.7 | 71 | 8336.82 | -51.12 | -0.61% | 0.74R | 20m | market | early-reversal | trend | breakout | falseBreakoutProne | false-breakout-risk | 71.93 | ↓117.09 | 0.067 | 1.5 | **LOSS** |
| 287 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 288 | UNH | 08-22 13:45 | 08-22 14:15 | 309.31 | 307.8 | 23 | 7114.13 | -34.73 | -0.49% | 0.58R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 71.8 | ↓308.93 | 0.794 | 1.64 | **LOSS** |
| 289 | ADBE | 08-22 14:00 | 08-22 14:40 | 360.94 | 360.71 | 13 | 4692.22 | -2.99 | -0.06% | 0.09R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 91.79 | ↑357.14 | 1.4333 | 2 | **LOSS** |
| 290 | HD | 08-22 14:00 | 08-22 15:45 | 405 | 413.88 | 11 | 4455 | +97.68 | +2.19% | 3.13R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 87.31 | ↑402.17 | 0.9964 | 3.29 | **WIN** |
| 291 | TXN | 08-22 14:00 | 08-22 15:45 | 206.7 | 207.6 | 22 | 4547.4 | +19.8 | +0.44% | 0.56R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 292 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 293 | SNOW | 08-22 14:05 | 08-22 14:20 | 199.29 | 197.96 | 26 | 5181.54 | -34.58 | -0.67% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 294 | AMAT | 08-22 14:10 | 08-22 14:50 | 164.41 | 164.22 | 28 | 4603.48 | -5.32 | -0.12% | 0.14R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 87.66 | ↑162.46 | 0.8897 | 2.84 | **LOSS** |
| 295 | GOOGL | 08-22 17:15 | 08-22 19:00 | 206.5 | 206.99 | 50 | 10325 | +24.5 | +0.24% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 76.9 | ↑203.92 | 0.2482 | 3.69 | **WIN** |
| 296 | NFLX | 08-25 13:35 | 08-25 15:20 | 1217.62 | 1224.68 | 6 | 7305.72 | +42.36 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 79.12 | ↑1208.78 | 1.0376 | 1.21 | **WIN** |
| 297 | NVO | 08-25 13:35 | 08-25 14:30 | 57.78 | 57.77 | 127 | 7338.06 | -1.27 | -0.02% | 0.03R | 55m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 76.38 | ↓57.54 | 0.126 | 2.86 | **LOSS** |
| 298 | NOW | 08-27 13:35 | 08-27 13:50 | 881.53 | 877.56 | 5 | 4407.65 | -19.85 | -0.45% | 0.64R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 91.34 | ↓879.67 | 2.7234 | 2.79 | **LOSS** |
| 299 | AMD | 08-28 13:35 | 08-28 13:50 | 170.23 | 167.94 | 27 | 4596.21 | -61.83 | -1.35% | 1.45R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 300 | ORCL | 08-28 13:35 | 08-28 15:20 | 238.57 | 239.96 | 19 | 4532.83 | +26.41 | +0.58% | 0.83R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 84.35 | ↑237.49 | 0.2539 | 2.24 | **WIN** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio** | Balanced stop 1.2%, target 2.4% — true 2R trade |
| 2 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 3 | **Market session gate** | New entries blocked outside 13:30–18:00 UTC — no extended-hours or late entries |
| 4 | **RSI > 80 hard block (trend)** | RSI > 80 on a trend setup = chasing overbought momentum; blocked (breakout exempt) |
| 5 | **Breakout quality threshold** | `breakoutThresholdAdj` -5 → breakout entry bar is 50 (raised from 50 to filter weak breakouts) |
| 6 | **Break-even stop** | Once position reaches 1R, exit on any return to entry — prevents winner turning loser |
| 7 | **Trailing stop** | 1% for trend, 1.2% for breakout — exits when price retraces from high-watermark |
| 8 | **Stagnation exit** | 25 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −30% of stop after 12 min — pre-stop cut for entries that go wrong immediately |
| 11 | **Rolling symbol throttle** | Pause symbol for 20 days after 4 consecutive bad trades |
| 12 | **Fake-breakout MACD gate** | Blocks: MACD line < 0.04 + VolR ≥ 3.5 + RSI > 66 — near-zero MACD on high-volume "breakout" = false momentum burst |
| 13 | **Double-breakout gate** | Blocks breakout setup when regime is already "breakout" — chasing an extended move; trend regime + breakout setup is profitable, breakout regime + breakout setup is not |
| 14 | **ATR expansion gate (breakout)** | Per-bar ATR must exceed 20-bar baseline by 5%+ — no expansion = false breakout risk |
| 15 | **Trend entry quality** | Trend threshold 75 (boost +20); trend position 80% of standard |
| 16 | **VWAP + ORB + TF15 scoring** | VWAP position, opening-range breakout, and 15-min HTF trend each score entry quality |
| 17 | **MACD histogram** | Bullish histogram: +7 entry; bearish: −7. Both line and histogram confirm: ±3 bonus |
| 18 | **SPY breadth + vol-regime** | SPY trend penalises individual stock risk; volatile ATR regime suppresses trend entries |
| 19 | **Slippage model** | 0.05 bps/side on every fill — realistic market-order cost |
| 20 | **Daily loss limit** | 5% account equity — session blocked after limit reached |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.83 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.87R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T12:51:31.374Z*
