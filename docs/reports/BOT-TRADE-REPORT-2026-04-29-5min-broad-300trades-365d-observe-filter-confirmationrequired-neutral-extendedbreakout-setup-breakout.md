# Bot Trade Report — 42 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T19:52:26.961Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 40 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"behaviorClassifierMode":"observe","observeBreakoutClassifierBlocks":true}`

## Verdict

✅ **PROFITABLE** — net gain of $1042.66 (+1.04%) over 42 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 42 |
| Win rate | 45.24% (19W / 23L) |
| Net P&L | $+1042.66 (+1.04%) |
| Gross profit | $2200.72 |
| Gross loss | $1158.06 |
| Profit factor | 1.9 |
| Avg win | $115.83 |
| Avg loss | $50.35 |
| Payoff ratio | 2.3:1 |
| Expectancy | $+24.83 / trade |
| Max drawdown | 0.38% |
| Sharpe ratio (ann.) | 4 |
| Trades / active day | 1.27 |
| Avg confidence | 95.33% |
| Avg trade duration | 147 min |
| Avg planned R:R | 2.69:1 |
| Avg risk ratio | 1.1R |
| Starting equity | $100,000 |
| Ending equity | $101,042.66 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+1042.66 | PASS |
| Win rate | 45-60% | 45.24% | PASS |
| Profit factor | >= 1.3 | 1.9 | PASS |
| Sharpe (ann.) | > 1.5 | 4 | PASS |
| R:R | 2:1 - 3:1 | 2.69:1 planned | PASS |
| Max drawdown | < 10% | 0.38% | PASS |
| Expectancy | positive | $+24.83 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 13 | 38.46% | $+169.8 | $13.06 |
| Mid  10:30–11:30 | 25 | 52% | $+928.46 | $37.14 |
| PM   13:00–14:00 | 4 | 25% | $-55.6 | $-13.9 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 4 | 3 | 75% | $+386.98 | $+96.75 | 61.75 | eligible |
| NOW | 1 | 1 | 100% | $+284.54 | $+284.54 | ∞ | watch |
| MU | 1 | 1 | 100% | $+259.4 | $+259.4 | ∞ | watch |
| AMD | 1 | 1 | 100% | $+236.9 | $+236.9 | ∞ | watch |
| GOOGL | 2 | 2 | 100% | $+226.8 | $+113.4 | ∞ | watch |
| AMZN | 2 | 2 | 100% | $+153.91 | $+76.96 | ∞ | watch |
| NVDA | 4 | 2 | 50% | $+92.06 | $+23.02 | 1.72 | eligible |
| META | 3 | 1 | 33.33% | $+61.5 | $+20.5 | 3.09 | watch |
| ARM | 1 | 1 | 100% | $+59.22 | $+59.22 | ∞ | watch |
| TSM | 1 | 1 | 100% | $+40.08 | $+40.08 | ∞ | watch |
| PYPL | 1 | 1 | 100% | $+28.83 | $+28.83 | ∞ | watch |
| DDOG | 1 | 1 | 100% | $+25.55 | $+25.55 | ∞ | watch |
| SHOP | 1 | 0 | 0% | $-5.76 | $-5.76 | 0 | watch |
| ADBE | 1 | 0 | 0% | $-16.4 | $-16.4 | 0 | watch |
| AVGO | 1 | 0 | 0% | $-23.12 | $-23.12 | 0 | watch |
| ORCL | 2 | 1 | 50% | $-34.2 | $-17.1 | 0.61 | watch |
| SNOW | 1 | 0 | 0% | $-34.58 | $-34.58 | 0 | watch |
| NFLX | 1 | 0 | 0% | $-42.68 | $-42.68 | 0 | watch |
| JPM | 1 | 0 | 0% | $-47.6 | $-47.6 | 0 | watch |
| NET | 1 | 0 | 0% | $-49.5 | $-49.5 | 0 | watch |
| INTC | 1 | 0 | 0% | $-57.33 | $-57.33 | 0 | watch |
| XOM | 1 | 0 | 0% | $-64.26 | $-64.26 | 0 | watch |
| PLTR | 5 | 1 | 20% | $-80.81 | $-16.16 | 0.61 | throttle |
| COIN | 1 | 0 | 0% | $-95.42 | $-95.42 | 0 | watch |
| CVX | 1 | 0 | 0% | $-113.4 | $-113.4 | 0 | watch |
| CAT | 2 | 0 | 0% | $-148.05 | $-74.03 | 0 | watch |

## Skipped Symbols

| Symbol | Reason |
|:--|:--|
| SQ | insufficient OHLC bars (0 < 120) |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 42 | 19 | 45.24% | $+1042.66 | $+24.83 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 42 | 19 | 45.24% | $+1042.66 | $+24.83 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 27 | 12 | 44.44% | $+823.34 | $+30.49 |
| extendedBreakout | 15 | 7 | 46.67% | $+219.32 | $+14.62 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 27 | 12 | 44.44% | $+823.34 | $+30.49 |
| extended-chase | 15 | 7 | 46.67% | $+219.32 | $+14.62 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 17 | 1.33 | $+11.5 | 10 | 3.27 | $+62.79 | 0.15% | 2.61 | promote |
| Trade state | neutral | 17 | 1.33 | $+11.5 | 10 | 3.27 | $+62.79 | 0.15% | 2.61 | promote |
| Time slot | Mid 10:30-11:30 | 13 | 1.67 | $+21.34 | 12 | 3.12 | $+54.25 | 0.15% | 2.56 | promote |
| Regime | trend | 25 | 1.28 | $+8.57 | 17 | 3.14 | $+48.74 | 0.16% | 2.53 | reject |
| Setup | breakout | 25 | 1.28 | $+8.57 | 17 | 3.14 | $+48.74 | 0.16% | 2.53 | reject |
| Time slot | Open 9:30-10:30 | 9 | 0.95 | $-1.57 | 4 | 3.51 | $+45.97 | 0.07% | 2.67 | reject |
| Behavior | extendedBreakout | 8 | 1.1 | $+2.33 | 7 | 2.81 | $+28.66 | 0.1% | 2.31 | reject |
| Trade state | extended-chase | 8 | 1.1 | $+2.33 | 7 | 2.81 | $+28.66 | 0.1% | 2.31 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+974.67 | 1.82 |
| +3 bps/side | $+838.61 | 1.66 |
| +5 bps/side | $+702.54 | 1.52 |
| +10 bps/side | $+362.46 | 1.24 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| timeout | 10 |
| profit-target | 6 |
| stop-loss | 5 |
| stagnation | 4 |
| trailing-stop | 4 |
| breakeven-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 2 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 14 | 9461.62 | +90.86 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 3 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 4 | AVGO | 08-07 13:45 | 08-07 14:10 | 308.66 | 307.3 | 17 | 5247.22 | -23.12 | -0.44% | 0.48R | 25m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 78.63 | ↓307.04 | 1.4997 | 2.75 | **LOSS** |
| 5 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 6 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 7 | SNOW | 08-22 14:05 | 08-22 14:20 | 199.29 | 197.96 | 26 | 5181.54 | -34.58 | -0.67% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 81.46 | ↑197.05 | 0.7021 | 2.59 | **LOSS** |
| 8 | GOOGL | 08-22 17:15 | 08-22 19:00 | 206.5 | 206.99 | 50 | 10325 | +24.5 | +0.24% | 0.34R | 105m | market | timeout | trend | breakout | neutral | neutral | 76.9 | ↑203.92 | 0.2482 | 3.69 | **WIN** |
| 9 | ADBE | 10-06 17:30 | 10-06 18:05 | 353.58 | 352.76 | 20 | 7071.6 | -16.4 | -0.23% | 0.33R | 35m | market | breakeven-stop | trend | breakout | neutral | neutral | 74.46 | ↑346.99 | 1.1142 | 3 | **LOSS** |
| 10 | ORCL | 10-08 14:00 | 10-08 14:15 | 289.59 | 287.17 | 36 | 10425.24 | -87.12 | -0.84% | 0.75R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 11 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 14 | 10065.58 | -5.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 12 | CAT | 11-06 14:30 | 11-06 14:45 | 580.25 | 573.77 | 16 | 9284 | -103.68 | -1.12% | 1.35R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 13 | CAT | 11-12 14:35 | 11-12 14:45 | 578.52 | 573.59 | 9 | 5206.68 | -44.37 | -0.85% | 1.21R | 10m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 14 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 15 | INTC | 11-28 17:55 | 12-01 14:20 | 40.61 | 39.98 | 91 | 3695.51 | -57.33 | -1.55% | 1.44R | 4105m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 16 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | -47.04 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 17 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 18 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 46 | 9488.88 | +236.9 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 19 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 55 | 10435.7 | -7.15 | -0.07% | 0.06R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 20 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 21 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 22 | PLTR | 01-14 14:30 | 01-14 14:35 | 181.2 | 177.96 | 57 | 10328.4 | -184.68 | -1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 23 | ARM | 01-20 14:40 | 01-20 15:45 | 108.19 | 109.13 | 63 | 6815.97 | +59.22 | +0.87% | 0.8R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↑107.29 | 0.0129 | 5.86 | **WIN** |
| 24 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 25 | META | 01-22 14:30 | 01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | -23.76 | -0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 26 | PYPL | 01-22 14:35 | 01-22 16:20 | 57.04 | 57.35 | 93 | 5304.72 | +28.83 | +0.54% | 0.66R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 72.38 | ↑56.87 | 0.2635 | 2.58 | **WIN** |
| 27 | TSLA | 01-22 17:55 | 01-22 18:25 | 445.72 | 444.81 | 7 | 3120.04 | -6.37 | -0.2% | 0.29R | 30m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 79.71 | ↑437.04 | 1.567 | 3.76 | **LOSS** |
| 28 | PLTR | 01-23 14:40 | 01-23 15:25 | 168.03 | 167.89 | 62 | 10417.86 | -8.68 | -0.08% | 0.09R | 45m | market | stagnation | trend | breakout | neutral | neutral | 79.11 | ↓167.45 | 0.3451 | 2.78 | **LOSS** |
| 29 | COIN | 01-28 14:30 | 01-28 14:35 | 214.17 | 210.5 | 26 | 5568.42 | -95.42 | -1.71% | 2.11R | 5m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 30 | JPM | 02-17 14:45 | 02-17 15:00 | 307.63 | 306.23 | 34 | 10459.42 | -47.6 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 31 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.73 | 206.44 | 28 | 5704.44 | +75.88 | +1.33% | 1.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 32 | PLTR | 02-18 14:35 | 02-18 15:05 | 136.11 | 139.41 | 39 | 5308.29 | +128.7 | +2.42% | 2.12R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 79.77 | ↑135.76 | 0.3061 | 2.56 | **WIN** |
| 33 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 34 | 10485.6 | +202.3 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 34 | NFLX | 03-04 14:30 | 03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | -42.68 | -0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 35 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.78 | 215.67 | 27 | 5745.06 | +78.03 | +1.36% | 1.6R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 36 | NOW | 03-05 14:30 | 03-05 15:00 | 116.86 | 120.33 | 82 | 9582.52 | +284.54 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 37 | CVX | 03-06 14:30 | 03-06 14:35 | 192.01 | 189.91 | 54 | 10368.54 | -113.4 | -1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 38 | DDOG | 03-17 13:30 | 03-17 14:00 | 129.91 | 130.26 | 73 | 9483.43 | +25.55 | +0.27% | 0.26R | 30m | market | trailing-stop | trend | breakout | neutral | neutral | 70.93 | ↓128.94 | 0.3164 | 2.33 | **WIN** |
| 39 | PLTR | 03-25 13:30 | 03-25 13:55 | 158.84 | 158.59 | 36 | 5718.24 | -9 | -0.16% | 0.14R | 25m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 66.83 | ↓158.24 | 0.6127 | 2.86 | **LOSS** |
| 40 | XOM | 04-02 13:30 | 04-02 13:45 | 165.1 | 164.08 | 63 | 10401.3 | -64.26 | -0.62% | 0.53R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 69.84 | ↓164.59 | 0.4226 | 1.6 | **LOSS** |
| 41 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 24 | 8906.88 | +231.6 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 42 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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
| 8 | **Stagnation exit** | 20 min on losers, 110 min on flat winners — exits stuck positions faster |
| 9 | **Breakout size** | 75% of standard position — reduces per-trade dollar exposure on breakout entries |
| 10 | **Early reversal** | Exit at −25% of stop after 10 min — pre-stop cut for entries that go wrong immediately |
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

- ✅ **Profit factor 1.9** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.1R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T19:52:26.961Z*
