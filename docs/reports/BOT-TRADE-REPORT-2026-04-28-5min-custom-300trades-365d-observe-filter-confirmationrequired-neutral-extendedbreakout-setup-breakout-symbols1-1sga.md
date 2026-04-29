# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:44:18.165Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $75.62 (-0.08%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 33.33% (3W / 6L) |
| Net P&L | $-75.62 (-0.08%) |
| Gross profit | $112.38 |
| Gross loss | $188 |
| Profit factor | 0.6 |
| Avg win | $37.46 |
| Avg loss | $31.33 |
| Payoff ratio | 1.2:1 |
| Expectancy | $-8.4 / trade |
| Max drawdown | 0.16% |
| Sharpe ratio (ann.) | -3.43 |
| Trades / active day | 1 |
| Avg confidence | 91.11% |
| Avg trade duration | 50 min |
| Avg planned R:R | 3.15:1 |
| Avg risk ratio | 0.69R |
| Starting equity | $100,000 |
| Ending equity | $99,924.38 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-75.62 | MISS |
| Win rate | 45-60% | 33.33% | MISS |
| Profit factor | >= 1.3 | 0.6 | MISS |
| Sharpe (ann.) | > 1.5 | -3.43 | MISS |
| R:R | 2:1 - 3:1 | 3.15:1 planned | MISS |
| Max drawdown | < 10% | 0.16% | PASS |
| Expectancy | positive | $-8.4 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+22.74 | $3.79 |
| Mid  10:30–11:30 | 2 | 0% | $-50.48 | $-25.24 |
| Noon 11:30–13:00 | 1 | 0% | $-47.88 | $-47.88 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TXN | 9 | 3 | 33.33% | $-75.62 | $-8.4 | 0.6 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 9 | 3 | 33.33% | $-75.62 | $-8.4 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 9 | 3 | 33.33% | $-75.62 | $-8.4 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 9 | 3 | 33.33% | $-75.62 | $-8.4 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 9 | 3 | 33.33% | $-75.62 | $-8.4 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TXN | 5 | 3.59 | $+16.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Behavior | confirmationRequired | 5 | 3.59 | $+16.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Trade state | confirmation-required | 5 | 3.59 | $+16.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Regime | trend | 5 | 3.59 | $+16.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Setup | breakout | 5 | 3.59 | $+16.21 | 4 | 0 | $-39.17 | 0.16% | 0 | watch |
| Time slot | Open 9:30-10:30 | 5 | 3.59 | $+16.21 | 1 | 0 | $-58.32 | 0.06% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-86.3 | 0.56 |
| +3 bps/side | $-107.68 | 0.49 |
| +5 bps/side | $-129.06 | 0.43 |
| +10 bps/side | $-182.52 | 0.31 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| early-reversal | 3 |
| stagnation | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TXN | 06-04 13:30 | 06-04 14:00 | 190.17 | 189.53 | 38 | 7226.46 | -24.32 | -0.34% | 0.49R | 30m | market | breakeven-stop | trend | breakout | confirmationRequired | confirmation-required | 80.4 | ↓189.64 | 0.3904 | 1.46 | **LOSS** |
| 2 | TXN | 06-16 13:30 | 06-16 15:15 | 197.72 | 199.23 | 30 | 5931.6 | +45.3 | +0.76% | 0.97R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 64.85 | ↑197.43 | -0.3746 | 1.55 | **WIN** |
| 3 | TXN | 08-05 13:40 | 08-05 14:10 | 185.54 | 185.26 | 25 | 4638.5 | -7 | -0.15% | 0.21R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 85.56 | ↓185.32 | 0.5342 | 1.66 | **LOSS** |
| 4 | TXN | 08-12 14:05 | 08-12 15:50 | 190.72 | 192.69 | 24 | 4577.28 | +47.28 | +1.03% | 1.06R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 86.27 | ↑187.83 | 1.1671 | 1.41 | **WIN** |
| 5 | TXN | 08-22 14:00 | 08-22 15:45 | 206.7 | 207.6 | 22 | 4547.4 | +19.8 | +0.44% | 0.56R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 88.15 | ↑204.43 | 1.2491 | 1.95 | **WIN** |
| 6 | TXN | 01-21 14:35 | 01-21 15:05 | 193.35 | 192.94 | 24 | 4640.4 | -9.84 | -0.21% | 0.28R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 88.54 | ↓192.87 | 0.6553 | 3.06 | **LOSS** |
| 7 | TXN | 02-12 14:30 | 02-12 14:45 | 229.19 | 227.92 | 32 | 7334.08 | -40.64 | -0.55% | 0.79R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 77.83 | ↓228.26 | -0.0372 | 2.9 | **LOSS** |
| 8 | TXN | 03-11 13:35 | 03-11 13:50 | 201.48 | 199.86 | 36 | 7253.28 | -58.32 | -0.8% | 0.92R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 65.9 | ↓200.75 | 0.0463 | 1.25 | **LOSS** |
| 9 | TXN | 03-31 16:40 | 03-31 16:55 | 193.15 | 191.89 | 38 | 7339.7 | -47.88 | -0.65% | 0.93R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 69.2 | ↑190.44 | 0.3564 | 1.62 | **LOSS** |

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

- ⚠️ **Profit factor 0.6 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.69R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:44:18.165Z*
