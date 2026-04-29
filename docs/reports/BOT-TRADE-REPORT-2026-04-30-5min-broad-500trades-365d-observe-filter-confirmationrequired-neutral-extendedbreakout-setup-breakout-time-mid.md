# Bot Trade Report — 31 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-29T17:05:24.357Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 500 | **Lookback:** 365 days | **Universe:** broad | **Symbols scanned:** 50 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"behaviorClassifierMode":"observe","observeBreakoutClassifierBlocks":true}`

## Verdict

✅ **PROFITABLE** — net gain of $874.69 (+0.87%) over 31 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 31 |
| Win rate | 48.39% (15W / 16L) |
| Net P&L | $+874.69 (+0.87%) |
| Gross profit | $1709.04 |
| Gross loss | $834.35 |
| Profit factor | 2.05 |
| Avg win | $113.94 |
| Avg loss | $52.15 |
| Payoff ratio | 2.18:1 |
| Expectancy | $+28.22 / trade |
| Max drawdown | 0.26% |
| Sharpe ratio (ann.) | 4.51 |
| Trades / active day | 1.41 |
| Avg confidence | 95.42% |
| Avg trade duration | 49 min |
| Avg planned R:R | 2.7:1 |
| Avg risk ratio | 1.11R |
| Starting equity | $100,000 |
| Ending equity | $100,874.69 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+874.69 | PASS |
| Win rate | 45-60% | 48.39% | PASS |
| Profit factor | >= 1.3 | 2.05 | PASS |
| Sharpe (ann.) | > 1.5 | 4.51 | PASS |
| R:R | 2:1 - 3:1 | 2.7:1 planned | PASS |
| Max drawdown | < 10% | 0.26% | PASS |
| Expectancy | positive | $+28.22 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 31 | 48.39% | $+874.69 | $28.22 |

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
| LLY | 3 | 2 | 66.67% | $+16.04 | $+5.35 | 1.4 | watch |
| SHOP | 1 | 0 | 0% | $-5.76 | $-5.76 | 0 | watch |
| META | 1 | 0 | 0% | $-23.76 | $-23.76 | 0 | watch |
| GE | 1 | 0 | 0% | $-33.6 | $-33.6 | 0 | watch |
| BA | 2 | 0 | 0% | $-36.21 | $-18.1 | 0 | watch |
| NFLX | 1 | 0 | 0% | $-42.68 | $-42.68 | 0 | watch |
| JPM | 1 | 0 | 0% | $-47.6 | $-47.6 | 0 | watch |
| PLTR | 4 | 1 | 25% | $-71.81 | $-17.95 | 0.64 | throttle |
| COIN | 1 | 0 | 0% | $-95.42 | $-95.42 | 0 | watch |
| CVX | 1 | 0 | 0% | $-113.4 | $-113.4 | 0 | watch |
| CAT | 2 | 0 | 0% | $-148.05 | $-74.03 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 31 | 15 | 48.39% | $+874.69 | $+28.22 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 31 | 15 | 48.39% | $+874.69 | $+28.22 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 20 | 9 | 45% | $+725.67 | $+36.28 |
| extendedBreakout | 11 | 6 | 54.55% | $+149.02 | $+13.55 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 20 | 9 | 45% | $+725.67 | $+36.28 |
| extended-chase | 11 | 6 | 54.55% | $+149.02 | $+13.55 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 13 | 1.74 | $+22.36 | 7 | 3.05 | $+62.14 | 0.11% | 2.44 | promote |
| Trade state | neutral | 13 | 1.74 | $+22.36 | 7 | 3.05 | $+62.14 | 0.11% | 2.44 | promote |
| Regime | trend | 18 | 1.49 | $+13.8 | 13 | 2.88 | $+48.18 | 0.18% | 2.37 | promote |
| Time slot | Mid 10:30-11:30 | 18 | 1.49 | $+13.8 | 13 | 2.88 | $+48.18 | 0.18% | 2.37 | promote |
| Setup | breakout | 18 | 1.49 | $+13.8 | 13 | 2.88 | $+48.18 | 0.18% | 2.37 | promote |
| Behavior | extendedBreakout | 5 | 0.61 | $-8.47 | 6 | 2.59 | $+31.9 | 0.12% | 2.23 | reject |
| Trade state | extended-chase | 5 | 0.61 | $-8.47 | 6 | 2.59 | $+31.9 | 0.12% | 2.23 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+824.24 | 1.96 |
| +3 bps/side | $+723.29 | 1.79 |
| +5 bps/side | $+622.35 | 1.64 |
| +10 bps/side | $+370.03 | 1.33 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 8 |
| timeout | 8 |
| stop-loss | 4 |
| trailing-stop | 4 |
| profit-target | 4 |
| stagnation | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | LLY | 11-03 14:35 | 11-03 14:50 | 882.57 | 875.85 | 6 | 5295.42 | -40.32 | -0.76% | 0.86R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 74.53 | ↓879.33 | 2.6734 | 3.18 | **LOSS** |
| 2 | CAT | 11-06 14:30 | 11-06 14:45 | 580.25 | 573.77 | 16 | 9284 | -103.68 | -1.12% | 1.35R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.29 | ↓577.94 | 0.9796 | 3.6 | **LOSS** |
| 3 | CAT | 11-12 14:35 | 11-12 14:45 | 578.52 | 573.59 | 9 | 5206.68 | -44.37 | -0.85% | 1.21R | 10m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.61 | ↓577.07 | 0.8672 | 3.95 | **LOSS** |
| 4 | SHOP | 11-19 14:50 | 11-19 16:20 | 145 | 144.92 | 72 | 10440 | -5.76 | -0.06% | 0.05R | 90m | market | breakeven-stop | trend | breakout | neutral | neutral | 80.82 | ↓143.44 | 0.6359 | 2.66 | **LOSS** |
| 5 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | -47.04 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 6 | LLY | 12-18 14:30 | 12-18 14:50 | 1061.88 | 1063.72 | 9 | 9556.92 | +16.56 | +0.17% | 0.19R | 20m | market | trailing-stop | trend | breakout | neutral | neutral | 80.65 | ↓1054.96 | 0.8773 | 3.45 | **WIN** |
| 7 | GE | 12-18 14:40 | 12-18 15:00 | 299.65 | 298.69 | 35 | 10487.75 | -33.6 | -0.32% | 0.37R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 77.45 | ↓298.79 | 0.9954 | 2.73 | **LOSS** |
| 8 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 9 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 46 | 9488.88 | +236.9 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 10 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 55 | 10435.7 | -7.15 | -0.07% | 0.06R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 11 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 12 | BA | 01-09 14:35 | 01-09 15:05 | 231.46 | 231.12 | 34 | 7869.64 | -11.56 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | neutral | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 13 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 14 | PLTR | 01-14 14:30 | 01-14 14:35 | 181.2 | 177.96 | 57 | 10328.4 | -184.68 | -1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 15 | ARM | 01-20 14:40 | 01-20 15:45 | 108.19 | 109.13 | 63 | 6815.97 | +59.22 | +0.87% | 0.8R | 65m | market | trailing-stop | trend | breakout | neutral | neutral | 65.37 | ↑107.29 | 0.0129 | 5.86 | **WIN** |
| 16 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 17 | LLY | 01-21 14:35 | 01-21 16:20 | 1058.45 | 1066.41 | 5 | 5292.25 | +39.8 | +0.75% | 0.99R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.7 | ↑1051.19 | 2.4185 | 2.97 | **WIN** |
| 18 | META | 01-22 14:30 | 01-22 14:45 | 634.28 | 631.31 | 8 | 5074.24 | -23.76 | -0.47% | 0.45R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 80.7 | ↓631.58 | 3.7515 | 5.18 | **LOSS** |
| 19 | PYPL | 01-22 14:35 | 01-22 16:20 | 57.04 | 57.35 | 93 | 5304.72 | +28.83 | +0.54% | 0.66R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 72.38 | ↑56.87 | 0.2635 | 2.58 | **WIN** |
| 20 | BA | 01-22 14:35 | 01-22 14:50 | 253.93 | 252.48 | 17 | 4316.81 | -24.65 | -0.57% | 0.81R | 15m | market | early-reversal | trend | breakout | extendedBreakout | extended-chase | 68.99 | ↓253.18 | 0.8981 | 3.53 | **LOSS** |
| 21 | PLTR | 01-23 14:40 | 01-23 15:25 | 168.03 | 167.89 | 62 | 10417.86 | -8.68 | -0.08% | 0.09R | 45m | market | stagnation | trend | breakout | neutral | neutral | 79.11 | ↓167.45 | 0.3451 | 2.78 | **LOSS** |
| 22 | COIN | 01-28 14:30 | 01-28 14:35 | 214.17 | 210.5 | 26 | 5568.42 | -95.42 | -1.71% | 2.11R | 5m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 73.82 | ↓213.51 | 0.7861 | 2.59 | **LOSS** |
| 23 | JPM | 02-17 14:45 | 02-17 15:00 | 307.63 | 306.23 | 34 | 10459.42 | -47.6 | -0.46% | 0.55R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 74.34 | ↓306.38 | 0.6901 | 3.81 | **LOSS** |
| 24 | AMZN | 02-18 14:30 | 02-18 16:15 | 203.73 | 206.44 | 28 | 5704.44 | +75.88 | +1.33% | 1.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.27 | ↑203.02 | 0.3049 | 3.2 | **WIN** |
| 25 | PLTR | 02-18 14:35 | 02-18 15:05 | 136.11 | 139.41 | 39 | 5308.29 | +128.7 | +2.42% | 2.12R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 79.77 | ↑135.76 | 0.3061 | 2.56 | **WIN** |
| 26 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 34 | 10485.6 | +202.3 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 27 | NFLX | 03-04 14:30 | 03-04 14:45 | 98.9 | 98.46 | 97 | 9593.3 | -42.68 | -0.44% | 0.48R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.24 | ↓98.26 | 0.1991 | 4.98 | **LOSS** |
| 28 | AMZN | 03-04 14:45 | 03-04 16:30 | 212.78 | 215.67 | 27 | 5745.06 | +78.03 | +1.36% | 1.6R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 81 | ↑211.73 | 0.8732 | 3.75 | **WIN** |
| 29 | NOW | 03-05 14:30 | 03-05 15:00 | 116.86 | 120.33 | 82 | 9582.52 | +284.54 | +2.97% | 2.86R | 30m | market | profit-target | trend | breakout | neutral | neutral | 70.88 | ↑116.07 | 0.0046 | 3.41 | **WIN** |
| 30 | CVX | 03-06 14:30 | 03-06 14:35 | 192.01 | 189.91 | 54 | 10368.54 | -113.4 | -1.09% | 1.4R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 72.74 | ↓191.59 | 0.4013 | 2.75 | **LOSS** |
| 31 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ✅ **Profit factor 2.05** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.11R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-29T17:05:24.357Z*
