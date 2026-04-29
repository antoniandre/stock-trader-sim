# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:45:25.724Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $223.73 (-0.22%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 10% (1W / 9L) |
| Net P&L | $-223.73 (-0.22%) |
| Gross profit | $95.85 |
| Gross loss | $319.58 |
| Profit factor | 0.3 |
| Avg win | $95.85 |
| Avg loss | $35.51 |
| Payoff ratio | 2.7:1 |
| Expectancy | $-22.37 / trade |
| Max drawdown | 0.22% |
| Sharpe ratio (ann.) | -7.99 |
| Trades / active day | 1 |
| Avg confidence | 94.7% |
| Avg trade duration | 33 min |
| Avg planned R:R | 2.56:1 |
| Avg risk ratio | 0.73R |
| Starting equity | $100,000 |
| Ending equity | $99,776.27 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-223.73 | MISS |
| Win rate | 45-60% | 10% | MISS |
| Profit factor | >= 1.3 | 0.3 | MISS |
| Sharpe (ann.) | > 1.5 | -7.99 | MISS |
| R:R | 2:1 - 3:1 | 2.56:1 planned | PASS |
| Max drawdown | < 10% | 0.22% | PASS |
| Expectancy | positive | $-22.37 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 8 | 12.5% | $-178.51 | $-22.31 |
| Mid  10:30–11:30 | 2 | 0% | $-45.22 | $-22.61 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMD | 10 | 1 | 10% | $-223.73 | $-22.37 | 0.3 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 10 | 1 | 10% | $-223.73 | $-22.37 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 1 | 10% | $-223.73 | $-22.37 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 10 | 1 | 10% | $-223.73 | $-22.37 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 10 | 1 | 10% | $-223.73 | $-22.37 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | AMD | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |
| Behavior | confirmationRequired | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |
| Trade state | confirmation-required | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |
| Regime | trend | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |
| Setup | breakout | 6 | 0.51 | $-15.29 | 4 | 0 | $-33 | 0.13% | 0 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.51 | $-15.29 | 2 | 0 | $-43.38 | 0.09% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-236.5 | 0.29 |
| +3 bps/side | $-262.05 | 0.26 |
| +5 bps/side | $-287.6 | 0.24 |
| +10 bps/side | $-351.47 | 0.19 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| stagnation | 2 |
| stop-loss | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMD | 05-05 13:35 | 05-05 14:30 | 100.6 | 100.29 | 66 | 6639.6 | -20.46 | -0.31% | 0.31R | 55m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 77.41 | ↓100.34 | 0.1418 | 3.29 | **LOSS** |
| 2 | AMD | 05-13 13:30 | 05-13 13:45 | 110.26 | 109.57 | 66 | 7277.16 | -45.54 | -0.63% | 0.66R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 76.01 | ↓109.9 | 0.2104 | 2.2 | **LOSS** |
| 3 | AMD | 06-02 13:35 | 06-02 13:50 | 113.43 | 112.87 | 41 | 4650.63 | -22.96 | -0.49% | 0.51R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 83.29 | ↑112.74 | 0.6463 | 2.28 | **LOSS** |
| 4 | AMD | 07-23 13:40 | 07-23 13:55 | 157.43 | 156.63 | 46 | 7241.78 | -36.8 | -0.51% | 0.53R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.9 | ↓157.17 | 0.5518 | 1.35 | **LOSS** |
| 5 | AMD | 08-28 13:35 | 08-28 13:50 | 170.23 | 167.94 | 27 | 4596.21 | -61.83 | -1.35% | 1.45R | 15m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 84 | ↓169.7 | 0.3883 | 1.62 | **LOSS** |
| 6 | AMD | 09-29 13:30 | 09-29 15:15 | 161.2 | 163.33 | 45 | 7254 | +95.85 | +1.32% | 1.89R | 105m | market | timeout | trend | breakout | confirmationRequired | confirmation-required | 81.28 | ↑160.72 | 0.2469 | 1.2 | **WIN** |
| 7 | AMD | 12-02 14:30 | 12-02 15:05 | 223.59 | 223.29 | 21 | 4695.39 | -6.3 | -0.13% | 0.13R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 84.28 | ↓222.34 | 0.4825 | 5.36 | **LOSS** |
| 8 | AMD | 01-28 14:35 | 01-28 15:00 | 256.05 | 254.66 | 28 | 7169.4 | -38.92 | -0.54% | 0.61R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 73.09 | ↓254.97 | 1.0678 | 1.6 | **LOSS** |
| 9 | AMD | 03-11 13:35 | 03-11 13:50 | 207.73 | 206.66 | 35 | 7270.55 | -37.45 | -0.52% | 0.46R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 74.69 | ↓206.72 | 0.0332 | 2.02 | **LOSS** |
| 10 | AMD | 03-18 13:55 | 03-18 14:25 | 199.74 | 198.37 | 36 | 7190.64 | -49.32 | -0.69% | 0.7R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 78.54 | ↓197.81 | 0.461 | 2.14 | **LOSS** |

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

- ⚠️ **Profit factor 0.3 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.73R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:45:25.724Z*
