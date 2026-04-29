# Bot Trade Report — 7 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:10:25.366Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $116.15 (-0.12%) over 7 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 7 |
| Win rate | 28.57% (2W / 5L) |
| Net P&L | $-116.15 (-0.12%) |
| Gross profit | $76.56 |
| Gross loss | $192.71 |
| Profit factor | 0.4 |
| Avg win | $38.28 |
| Avg loss | $38.54 |
| Payoff ratio | 0.99:1 |
| Expectancy | $-16.59 / trade |
| Max drawdown | 0.15% |
| Sharpe ratio (ann.) | -6.1 |
| Trades / active day | 1 |
| Avg confidence | 94.43% |
| Avg trade duration | 37 min |
| Avg planned R:R | 2.16:1 |
| Avg risk ratio | 0.53R |
| Starting equity | $100,000 |
| Ending equity | $99,883.85 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-116.15 | MISS |
| Win rate | 45-60% | 28.57% | MISS |
| Profit factor | >= 1.3 | 0.4 | MISS |
| Sharpe (ann.) | > 1.5 | -6.1 | MISS |
| R:R | 2:1 - 3:1 | 2.16:1 planned | PASS |
| Max drawdown | < 10% | 0.15% | PASS |
| Expectancy | positive | $-16.59 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 0% | $-121.99 | $-30.5 |
| Mid  10:30–11:30 | 2 | 50% | $-19.9 | $-9.95 |
| Noon 11:30–13:00 | 1 | 100% | $+25.74 | $25.74 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SMCI | 7 | 2 | 28.57% | $-116.15 | $-16.59 | 0.4 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 7 | 2 | 28.57% | $-116.15 | $-16.59 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 2 | 28.57% | $-116.15 | $-16.59 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 7 | 2 | 28.57% | $-116.15 | $-16.59 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 7 | 2 | 28.57% | $-116.15 | $-16.59 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-125.24 | 0.37 |
| +3 bps/side | $-143.42 | 0.33 |
| +5 bps/side | $-161.6 | 0.29 |
| +10 bps/side | $-207.04 | 0.2 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 3 |
| stagnation | 2 |
| trailing-stop | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SMCI | 05-21 13:35 | 05-21 14:00 | 43.95 | 43.64 | 154 | 6768.3 | -47.74 | -0.71% | 0.68R | 25m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.25 | ↓43.57 | 0.1426 | 2.24 | **LOSS** |
| 2 | SMCI | 08-11 13:40 | 08-11 14:20 | 45.83 | 45.75 | 160 | 7332.8 | -12.8 | -0.17% | 0.14R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 74.06 | ↓45.38 | 0.1338 | 1.83 | **LOSS** |
| 3 | SMCI | 09-22 16:25 | 09-22 17:30 | 47.47 | 47.73 | 99 | 4699.53 | +25.74 | +0.55% | 0.47R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.07 | ↑46.4 | 0.2241 | 2.81 | **WIN** |
| 4 | SMCI | 09-29 13:40 | 09-29 14:00 | 46.59 | 46.29 | 157 | 7314.63 | -47.1 | -0.64% | 0.57R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 72.48 | ↓46.4 | 0.1923 | 2.12 | **LOSS** |
| 5 | SMCI | 11-26 14:35 | 11-26 14:50 | 33.22 | 32.9 | 221 | 7341.62 | -70.72 | -0.96% | 0.91R | 15m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 79.92 | ↓33.15 | 0.1766 | 1.68 | **LOSS** |
| 6 | SMCI | 01-28 14:35 | 01-28 15:40 | 31.69 | 31.91 | 231 | 7320.39 | +50.82 | +0.69% | 0.67R | 65m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 77.99 | ↓31.57 | 0.1314 | 1.24 | **WIN** |
| 7 | SMCI | 04-01 13:30 | 04-01 14:00 | 23.08 | 23.01 | 205 | 4731.4 | -14.35 | -0.3% | 0.25R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 82.89 | ↓22.98 | 0.158 | 1.28 | **LOSS** |

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

- ⚠️ **Profit factor 0.4 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.53R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:10:25.366Z*
