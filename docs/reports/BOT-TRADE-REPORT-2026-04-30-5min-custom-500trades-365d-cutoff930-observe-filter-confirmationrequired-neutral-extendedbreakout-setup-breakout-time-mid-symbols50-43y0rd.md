# Bot Trade Report — 27 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-30T03:49:49.627Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 500 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 50 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** 930 | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"lastEntryUtcMin":930,"behaviorClassifierMode":"observe","observeBreakoutClassifierBlocks":true}`

## Verdict

✅ **PROFITABLE** — net gain of $836.44 (+0.84%) over 27 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 27 |
| Win rate | 48.15% (13W / 14L) |
| Net P&L | $+836.44 (+0.84%) |
| Gross profit | $1652.68 |
| Gross loss | $816.24 |
| Profit factor | 2.02 |
| Avg win | $127.13 |
| Avg loss | $58.3 |
| Payoff ratio | 2.18:1 |
| Expectancy | $+30.98 / trade |
| Max drawdown | 0.28% |
| Sharpe ratio (ann.) | 4.52 |
| Trades / active day | 1.29 |
| Avg confidence | 94.67% |
| Avg trade duration | 50.93 min |
| Avg planned R:R | 2:1 |
| Avg risk ratio | 1.19R |
| Starting equity | $100,000 |
| Ending equity | $100,836.44 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+836.44 | ✅ |
| Win rate | 45–60% | 48.15% | ✅ |
| Profit factor | ≥ 1.3 | 2.02 | ✅ |
| Sharpe (ann.) | > 1.5 | 4.52 | ✅ |
| R:R | 2:1 – 3:1 | 2:1 planned | ✅ |
| Max drawdown | < 10% | 0.28% | ✅ |
| Expectancy | positive | $+30.98/trade | ✅ |

> **All targets passed.** Ready for paper-trade validation.

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 27 | 48.15% | $+836.44 | $30.98 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NOW | 1 | 1 | 100% | $+284.54 | $+284.54 | ∞ | watch |
| MU | 1 | 1 | 100% | $+259.4 | $+259.4 | ∞ | watch |
| AMD | 1 | 1 | 100% | $+236.9 | $+236.9 | ∞ | watch |
| GOOGL | 1 | 1 | 100% | $+202.3 | $+202.3 | ∞ | watch |
| NVDA | 3 | 2 | 66.67% | $+172.62 | $+57.54 | 4.67 | watch |
| AMZN | 2 | 2 | 100% | $+153.91 | $+76.96 | ∞ | watch |
| ARM | 1 | 1 | 100% | $+59.22 | $+59.22 | ∞ | watch |
| ORCL | 1 | 1 | 100% | $+52.92 | $+52.92 | ∞ | watch |
| PYPL | 1 | 1 | 100% | $+28.83 | $+28.83 | ∞ | watch |
| TSLA | 1 | 1 | 100% | $+26.3 | $+26.3 | ∞ | watch |
| SHOP | 1 | 0 | 0% | $-5.76 | $-5.76 | 0 | watch |
| APP | 1 | 0 | 0% | $-8.58 | $-8.58 | 0 | watch |
| META | 1 | 0 | 0% | $-23.76 | $-23.76 | 0 | watch |
| NFLX | 1 | 0 | 0% | $-42.68 | $-42.68 | 0 | watch |
| JPM | 1 | 0 | 0% | $-47.6 | $-47.6 | 0 | watch |
| PLTR | 4 | 1 | 25% | $-71.81 | $-17.95 | 0.64 | throttle |
| SPOT | 1 | 0 | 0% | $-83.44 | $-83.44 | 0 | watch |
| COIN | 1 | 0 | 0% | $-95.42 | $-95.42 | 0 | watch |
| CVX | 1 | 0 | 0% | $-113.4 | $-113.4 | 0 | watch |
| CAT | 2 | 0 | 0% | $-148.05 | $-74.03 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 27 | 13 | 48.15% | $+836.44 | $30.98 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 27 | 13 | 48.15% | $+836.44 | $30.98 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 8 | 42.11% | $+662.25 | $34.86 |
| extendedBreakout | 8 | 5 | 62.5% | $+174.19 | $21.77 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 19 | 8 | 42.11% | $+662.25 | $34.86 |
| extended-chase | 8 | 5 | 62.5% | $+174.19 | $21.77 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 12 | 1.52 | $+18.94 | 7 | 3.05 | $+62.14 | 0.11% | 2.44 | promote |
| Trade state | neutral | 12 | 1.52 | $+18.94 | 7 | 3.05 | $+62.14 | 0.11% | 2.44 | promote |
| Regime | trend | 16 | 1.42 | $+13.39 | 11 | 3.02 | $+56.56 | 0.15% | 2.49 | promote |
| Time slot | Mid 10:30-11:30 | 16 | 1.42 | $+13.39 | 11 | 3.02 | $+56.56 | 0.15% | 2.49 | promote |
| Setup | breakout | 16 | 1.42 | $+13.39 | 11 | 3.02 | $+56.56 | 0.15% | 2.49 | promote |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+790.91 | 2.04 |
| +3 bps/side | $+699.86 | 2.08 |
| +5 bps/side | $+608.8 | 2.13 |
| +10 bps/side | $+381.16 | 2.25 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 7 |
| early-reversal | 6 |
| stop-loss | 4 |
| profit-target | 4 |
| trailing-stop | 3 |
| stagnation | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CAT | 2025-11-06 14:30 | 2025-11-06 14:45 | 580.25 | 573.77 | 16 | 9284 | $103.68 | 1.12% | 1.35R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 2 | CAT | 2025-11-12 14:35 | 2025-11-12 14:45 | 578.52 | 573.59 | 9 | 5206.68 | $44.37 | 0.85% | 1.21R | 10m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 3 | SPOT | 2025-11-13 14:30 | 2025-11-13 14:45 | 662.62 | 656.66 | 14 | 9276.68 | $83.44 | 0.90% | 1.06R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 76.66 | ↓658.64 | 0.6221 | 4.01 | **LOSS** |
| 4 | SHOP | 2025-11-19 14:50 | 2025-11-19 16:20 | 145 | 144.92 | 72 | 10440 | $5.76 | 0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 5 | NVDA | 2025-12-08 14:30 | 2025-12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | $47.04 | 0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 6 | NVDA | 2025-12-19 14:30 | 2025-12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +$59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 7 | AMD | 2025-12-19 14:30 | 2025-12-19 15:00 | 206.28 | 211.43 | 46 | 9488.88 | +$236.90 | +2.50% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 8 | APP | 2025-12-19 14:30 | 2025-12-19 15:10 | 713.14 | 712.48 | 13 | 9270.82 | $8.58 | 0.09% | 0.07R | 40m | market | stagnation | trend | breakout | neutral | neutral | 77.66 | ↓710.41 | 0.9395 | 4.48 | **LOSS** |
| 9 | PLTR | 2025-12-19 14:40 | 2025-12-19 15:45 | 189.74 | 189.61 | 55 | 10435.7 | $7.15 | 0.07% | 0.06R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 10 | TSLA | 2026-01-05 14:30 | 2026-01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +$26.30 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 11 | ORCL | 2026-01-09 15:25 | 2026-01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +$52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 12 | PLTR | 2026-01-14 14:30 | 2026-01-14 14:35 | 181.2 | 177.96 | 57 | 10328.4 | $184.68 | 1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 13 | ARM | 2026-01-20 14:40 | 2026-01-20 15:45 | 108.19 | 109.13 | 63 | 6815.97 | +$59.22 | +0.87% | 0.8R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↑107.29 | 0.0129 | 5.86 | **WIN** |
| 14 | MU | 2026-01-21 14:35 | 2026-01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +$259.40 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 15 | META | 2026-01-22 14:30 | 2026-01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | $23.76 | 0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 16 | PYPL | 2026-01-22 14:35 | 2026-01-22 16:20 | 57.04 | 57.35 | 93 | 5304.72 | +$28.83 | +0.54% | 0.66R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 72.38 | ↑56.87 | 0.2635 | 2.58 | **WIN** |
| 17 | PLTR | 2026-01-23 14:40 | 2026-01-23 15:25 | 168.03 | 167.89 | 62 | 10417.86 | $8.68 | 0.08% | 0.09R | 45m | market | stagnation | trend | breakout | neutral | neutral | 79.11 | ↓167.45 | 0.3451 | 2.78 | **LOSS** |
| 18 | COIN | 2026-01-28 14:30 | 2026-01-28 14:35 | 214.17 | 210.5 | 26 | 5568.42 | $95.42 | 1.71% | 2.11R | 5m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 19 | JPM | 2026-02-17 14:45 | 2026-02-17 15:00 | 307.63 | 306.23 | 34 | 10459.42 | $47.60 | 0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 20 | AMZN | 2026-02-18 14:30 | 2026-02-18 16:15 | 203.73 | 206.44 | 28 | 5704.44 | +$75.88 | +1.33% | 1.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 21 | PLTR | 2026-02-18 14:35 | 2026-02-18 15:05 | 136.11 | 139.41 | 39 | 5308.29 | +$128.70 | +2.42% | 2.12R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 79.77 | ↑135.76 | 0.3061 | 2.56 | **WIN** |
| 22 | GOOGL | 2026-02-20 14:30 | 2026-02-20 16:15 | 308.4 | 314.35 | 34 | 10485.6 | +$202.30 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 23 | NFLX | 2026-03-04 14:30 | 2026-03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | $42.68 | 0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 24 | AMZN | 2026-03-04 14:45 | 2026-03-04 16:30 | 212.78 | 215.67 | 27 | 5745.06 | +$78.03 | +1.36% | 1.6R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 25 | NOW | 2026-03-05 14:30 | 2026-03-05 15:00 | 116.86 | 120.33 | 82 | 9582.52 | +$284.54 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 26 | CVX | 2026-03-06 14:30 | 2026-03-06 14:35 | 192.01 | 189.91 | 54 | 10368.54 | $113.40 | 1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 27 | NVDA | 2026-04-24 14:40 | 2026-04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +$160.50 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

## Readiness Assessment

- ✅ **Profit factor 2.02** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.19R** — exits are capturing meaningful profit relative to risk

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-30T03:49:49.627Z*
