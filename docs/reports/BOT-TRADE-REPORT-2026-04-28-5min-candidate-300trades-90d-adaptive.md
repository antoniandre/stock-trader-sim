# Bot Trade Report — 2 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T12:27:08.325Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 90 days | **Universe:** candidate | **Symbols scanned:** 10 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":10,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $77.68 (+0.08%) over 2 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 2 |
| Win rate | 50% (1W / 1L) |
| Net P&L | $+77.68 (+0.08%) |
| Gross profit | $160.5 |
| Gross loss | $82.82 |
| Profit factor | 1.94 |
| Avg win | $160.5 |
| Avg loss | $82.82 |
| Payoff ratio | 1.94:1 |
| Expectancy | $+38.84 / trade |
| Max drawdown | 0.08% |
| Sharpe ratio (ann.) | 3.58 |
| Trades / active day | 1 |
| Avg confidence | 93.5% |
| Avg trade duration | 68 min |
| Avg planned R:R | 2.1:1 |
| Avg risk ratio | 1.04R |
| Starting equity | $100,000 |
| Ending equity | $100,077.68 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+77.68 | PASS |
| Win rate | 45-60% | 50% | PASS |
| Profit factor | >= 1.3 | 1.94 | PASS |
| Sharpe (ann.) | > 1.5 | 3.58 | PASS |
| R:R | 2:1 - 3:1 | 2.1:1 planned | PASS |
| Max drawdown | < 10% | 0.08% | PASS |
| Expectancy | positive | $+38.84 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 2 | 50% | $+77.68 | $38.84 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 1 | 1 | 100% | $+160.5 | $+160.5 | ∞ | watch |
| TGT | 1 | 0 | 0% | $-82.82 | $-82.82 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 2 | 1 | 50% | $+77.68 | $+38.84 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 2 | 1 | 50% | $+77.68 | $+38.84 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 1 | 50% | $+77.68 | $+38.84 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 2 | 1 | 50% | $+77.68 | $+38.84 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+73.67 | 1.87 |
| +3 bps/side | $+65.66 | 1.74 |
| +5 bps/side | $+57.65 | 1.62 |
| +10 bps/side | $+37.63 | 1.37 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TGT | 02-20 15:00 | 02-20 15:30 | 117.97 | 116.96 | 82 | 9673.54 | -82.82 | -0.86% | 0.8R | 30m | market | early-reversal | trend | breakout | neutral | neutral | 72.15 | ↓116.75 | 0.2483 | 3.42 | **LOSS** |
| 2 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 50 | 10315 | +160.5 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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
| 11 | **Rolling symbol throttle** | Pause symbol for 40 days after 3 consecutive bad trades |
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

- ✅ **Profit factor 1.94** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.04R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T12:27:08.325Z*
