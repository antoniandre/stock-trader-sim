# Bot Trade Report — 7 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:11:44.291Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $188.59 (-0.19%) over 7 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 7 |
| Win rate | 14.29% (1W / 6L) |
| Net P&L | $-188.59 (-0.19%) |
| Gross profit | $2.94 |
| Gross loss | $191.53 |
| Profit factor | 0.02 |
| Avg win | $2.94 |
| Avg loss | $31.92 |
| Payoff ratio | 0.09:1 |
| Expectancy | $-26.94 / trade |
| Max drawdown | 0.19% |
| Sharpe ratio (ann.) | -14.61 |
| Trades / active day | 1 |
| Avg confidence | 92.57% |
| Avg trade duration | 26 min |
| Avg planned R:R | 3.22:1 |
| Avg risk ratio | 0.59R |
| Starting equity | $100,000 |
| Ending equity | $99,811.41 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-188.59 | MISS |
| Win rate | 45-60% | 14.29% | MISS |
| Profit factor | >= 1.3 | 0.02 | MISS |
| Sharpe (ann.) | > 1.5 | -14.61 | MISS |
| R:R | 2:1 - 3:1 | 3.22:1 planned | MISS |
| Max drawdown | < 10% | 0.19% | PASS |
| Expectancy | positive | $-26.94 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 0% | $-155.45 | $-31.09 |
| Mid  10:30–11:30 | 2 | 50% | $-33.14 | $-16.57 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| QCOM | 7 | 1 | 14.29% | $-188.59 | $-26.94 | 0.02 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 7 | 1 | 14.29% | $-188.59 | $-26.94 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 1 | 14.29% | $-188.59 | $-26.94 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 7 | 1 | 14.29% | $-188.59 | $-26.94 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 7 | 1 | 14.29% | $-188.59 | $-26.94 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-196.69 | 0.01 |
| +3 bps/side | $-212.92 | 0 |
| +5 bps/side | $-229.13 | 0 |
| +10 bps/side | $-269.65 | 0 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 4 |
| stagnation | 1 |
| trailing-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | QCOM | 06-24 13:45 | 06-24 14:00 | 155.83 | 154.92 | 30 | 4674.9 | -27.3 | -0.58% | 0.83R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.92 | ↓155.46 | 0.6004 | 1.61 | **LOSS** |
| 2 | QCOM | 08-11 13:45 | 08-11 14:00 | 150.88 | 150.19 | 31 | 4677.28 | -21.39 | -0.46% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 86.98 | ↓150.26 | 0.7222 | 1.41 | **LOSS** |
| 3 | QCOM | 08-12 14:15 | 08-12 14:35 | 152.21 | 151.74 | 31 | 4718.51 | -14.57 | -0.31% | 0.41R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.67 | ↑150.77 | 0.7869 | 1.48 | **LOSS** |
| 4 | QCOM | 09-16 13:30 | 09-16 14:05 | 163.09 | 162.89 | 29 | 4729.61 | -5.8 | -0.12% | 0.17R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 83.94 | ↓162.52 | 0.2241 | 2.43 | **LOSS** |
| 5 | QCOM | 11-11 14:35 | 11-11 15:50 | 173.6 | 173.67 | 42 | 7291.2 | +2.94 | +0.04% | 0.06R | 75m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.51 | ↓172.92 | 0.4108 | 1.33 | **WIN** |
| 6 | QCOM | 12-18 14:30 | 12-18 14:45 | 176.25 | 175.37 | 41 | 7226.25 | -36.08 | -0.5% | 0.57R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.21 | ↓176.12 | 0.3365 | 2.66 | **LOSS** |
| 7 | QCOM | 03-11 13:35 | 03-11 13:45 | 137.92 | 136.29 | 53 | 7309.76 | -86.39 | -1.18% | 1.46R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 74.78 | ↓137.17 | 0.0641 | 1.53 | **LOSS** |

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

- ⚠️ **Profit factor 0.02 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.59R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:11:44.291Z*
