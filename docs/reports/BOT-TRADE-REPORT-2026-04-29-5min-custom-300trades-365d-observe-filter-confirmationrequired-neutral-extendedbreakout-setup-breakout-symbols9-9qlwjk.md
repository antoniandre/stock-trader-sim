# Bot Trade Report — 14 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T19:53:03.609Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 9 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":20,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":10,"earlyReversalFraction":0.25,"behaviorClassifierMode":"observe","observeBreakoutClassifierBlocks":true}`

## Verdict

✅ **PROFITABLE** — net gain of $637.49 (+0.64%) over 14 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 14 |
| Win rate | 57.14% (8W / 6L) |
| Net P&L | $+637.49 (+0.64%) |
| Gross profit | $965.41 |
| Gross loss | $327.92 |
| Profit factor | 2.94 |
| Avg win | $120.68 |
| Avg loss | $54.65 |
| Payoff ratio | 2.21:1 |
| Expectancy | $+45.54 / trade |
| Max drawdown | 0.19% |
| Sharpe ratio (ann.) | 6.44 |
| Trades / active day | 1.08 |
| Avg confidence | 97% |
| Avg trade duration | 348 min |
| Avg planned R:R | 2.59:1 |
| Avg risk ratio | 1.23R |
| Starting equity | $100,000 |
| Ending equity | $100,637.49 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+637.49 | PASS |
| Win rate | 45-60% | 57.14% | PASS |
| Profit factor | >= 1.3 | 2.94 | PASS |
| Sharpe (ann.) | > 1.5 | 6.44 | PASS |
| R:R | 2:1 - 3:1 | 2.59:1 planned | PASS |
| Max drawdown | < 10% | 0.19% | PASS |
| Expectancy | positive | $+45.54 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+189.95 | $31.66 |
| Mid  10:30–11:30 | 6 | 83.33% | $+511.24 | $85.21 |
| PM   13:00–14:00 | 2 | 0% | $-63.7 | $-31.85 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 4 | 3 | 75% | $+386.98 | $+96.75 | 61.75 | eligible |
| MU | 1 | 1 | 100% | $+259.4 | $+259.4 | ∞ | watch |
| NVDA | 4 | 2 | 50% | $+92.06 | $+23.02 | 1.72 | eligible |
| TSM | 1 | 1 | 100% | $+40.08 | $+40.08 | ∞ | watch |
| ORCL | 2 | 1 | 50% | $-34.2 | $-17.1 | 0.61 | watch |
| NET | 1 | 0 | 0% | $-49.5 | $-49.5 | 0 | watch |
| INTC | 1 | 0 | 0% | $-57.33 | $-57.33 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 14 | 8 | 57.14% | $+637.49 | $+45.54 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 14 | 8 | 57.14% | $+637.49 | $+45.54 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 5 | 55.56% | $+499.36 | $+55.48 |
| extendedBreakout | 5 | 3 | 60% | $+138.13 | $+27.63 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 5 | 55.56% | $+499.36 | $+55.48 |
| extended-chase | 5 | 3 | 60% | $+138.13 | $+27.63 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 5 | 0.81 | $-8.33 | 1 | ∞ | $+231.6 | 0% | ∞ | reject |
| Behavior | neutral | 5 | 0.22 | $-41.01 | 4 | ∞ | $+176.11 | 0% | ∞ | reject |
| Trade state | neutral | 5 | 0.22 | $-41.01 | 4 | ∞ | $+176.11 | 0% | ∞ | reject |
| Regime | trend | 8 | 0.73 | $-10.86 | 6 | 114.71 | $+120.73 | 0.01% | 72.56 | reject |
| Setup | breakout | 8 | 0.73 | $-10.86 | 6 | 114.71 | $+120.73 | 0.01% | 72.56 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+615.24 | 2.82 |
| +3 bps/side | $+570.69 | 2.6 |
| +5 bps/side | $+526.13 | 2.4 |
| +10 bps/side | $+414.8 | 1.98 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 4 |
| timeout | 4 |
| profit-target | 3 |
| stop-loss | 1 |
| trailing-stop | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 06-02 13:35 | 06-02 13:50 | 137.73 | 136.67 | 76 | 10467.48 | -80.56 | -0.77% | 0.69R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 71.1 | ↓136.93 | 0.4762 | 1.72 | **LOSS** |
| 2 | NET | 06-25 13:40 | 06-25 14:10 | 190.79 | 189.89 | 55 | 10493.45 | -49.5 | -0.47% | 0.64R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 78.7 | ↓190.17 | 0.5152 | 3.61 | **LOSS** |
| 3 | TSLA | 08-22 13:45 | 08-22 14:15 | 325.95 | 334.98 | 15 | 4889.25 | +135.45 | +2.77% | 3.79R | 30m | market | profit-target | trend | breakout | extendedBreakout | extended-chase | 71.42 | ↑323.64 | 0.7398 | 2.8 | **WIN** |
| 4 | TSM | 08-22 14:05 | 08-22 15:50 | 231.43 | 233.1 | 24 | 5554.32 | +40.08 | +0.72% | 0.9R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 77.39 | ↑228.69 | 0.499 | 3.05 | **WIN** |
| 5 | ORCL | 10-08 14:00 | 10-08 14:15 | 289.59 | 287.17 | 36 | 10425.24 | -87.12 | -0.84% | 0.75R | 15m | market | early-reversal | trend | breakout | neutral | neutral | 70.8 | ↓287.03 | 1.2969 | 1.39 | **LOSS** |
| 6 | INTC | 11-28 17:55 | 12-01 14:20 | 40.61 | 39.98 | 91 | 3695.51 | -57.33 | -1.55% | 1.44R | 4105m | market | stop-loss | trend | breakout | extendedBreakout | extended-chase | 77.05 | ↓39.48 | 0.2902 | 3.42 | **LOSS** |
| 7 | NVDA | 12-08 14:30 | 12-08 14:50 | 184.5 | 183.66 | 56 | 10332 | -47.04 | -0.46% | 0.66R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 81.49 | ↓184.21 | 0.28 | 4.84 | **LOSS** |
| 8 | NVDA | 12-19 14:30 | 12-19 16:15 | 178.32 | 179.34 | 58 | 10342.56 | +59.16 | +0.57% | 0.66R | 105m | market | timeout | trend | breakout | neutral | neutral | 80.73 | ↑177.63 | 0.3363 | 2.58 | **WIN** |
| 9 | TSLA | 01-05 14:30 | 01-05 16:15 | 451.05 | 453.68 | 10 | 4510.5 | +26.3 | +0.58% | 0.64R | 105m | market | timeout | trend | breakout | extendedBreakout | extended-chase | 76.8 | ↑448.77 | 2.2097 | 5.67 | **WIN** |
| 10 | ORCL | 01-09 15:25 | 01-09 16:25 | 193.71 | 194.69 | 54 | 10460.34 | +52.92 | +0.51% | 0.4R | 60m | market | trailing-stop | trend | breakout | neutral | neutral | 77.48 | ↑191.41 | 0.756 | 2.59 | **WIN** |
| 11 | MU | 01-21 14:35 | 01-21 15:40 | 376.04 | 389.01 | 20 | 7520.8 | +259.4 | +3.45% | 2.57R | 65m | market | profit-target | trend | breakout | neutral | neutral | 78.77 | ↑371.41 | 1.5537 | 3.55 | **WIN** |
| 12 | TSLA | 01-22 17:55 | 01-22 18:25 | 445.72 | 444.81 | 7 | 3120.04 | -6.37 | -0.2% | 0.29R | 30m | market | stagnation | trend | breakout | extendedBreakout | extended-chase | 79.71 | ↑437.04 | 1.567 | 3.76 | **LOSS** |
| 13 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 24 | 8906.88 | +231.6 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |
| 14 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ✅ **Profit factor 2.94** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.23R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T19:53:03.609Z*
