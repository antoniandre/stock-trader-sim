# Bot Trade Report — 8 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T14:10:25.351Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** observe
> **Behavior entry filter:** confirmationRequired, neutral, extendedBreakout

> **Setup filter:** breakout | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1,"breakoutTrailingStopPct":1.2,"stagnationMinutes":25,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendThresholdBoost":20,"trendSizeMultiplier":0.8,"breakoutSizeMultiplier":0.75,"earlyReversalMinutes":12,"earlyReversalFraction":0.3,"behaviorClassifierMode":"observe"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $186.79 (-0.19%) over 8 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 8 |
| Win rate | 0% (0W / 8L) |
| Net P&L | $-186.79 (-0.19%) |
| Gross profit | $0 |
| Gross loss | $186.79 |
| Profit factor | 0 |
| Avg win | $0 |
| Avg loss | $23.35 |
| Payoff ratio | 0:1 |
| Expectancy | $-23.35 / trade |
| Max drawdown | 0.19% |
| Sharpe ratio (ann.) | -14.11 |
| Trades / active day | 1 |
| Avg confidence | 94.88% |
| Avg trade duration | 32 min |
| Avg planned R:R | 3.13:1 |
| Avg risk ratio | 0.48R |
| Starting equity | $100,000 |
| Ending equity | $99,813.21 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $-186.79 | MISS |
| Win rate | 45-60% | 0% | MISS |
| Profit factor | >= 1.3 | 0 | MISS |
| Sharpe (ann.) | > 1.5 | -14.11 | MISS |
| R:R | 2:1 - 3:1 | 3.13:1 planned | MISS |
| Max drawdown | < 10% | 0.19% | PASS |
| Expectancy | positive | $-23.35 | MISS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 0% | $-150.81 | $-30.16 |
| Mid  10:30–11:30 | 3 | 0% | $-35.98 | $-11.99 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AAPL | 8 | 0 | 0% | $-186.79 | $-23.35 | 0 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 8 | 0 | 0% | $-186.79 | $-23.35 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 0 | 0% | $-186.79 | $-23.35 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmationRequired | 8 | 0 | 0% | $-186.79 | $-23.35 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| confirmation-required | 8 | 0 | 0% | $-186.79 | $-23.35 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-196.72 | 0 |
| +3 bps/side | $-216.6 | 0 |
| +5 bps/side | $-236.47 | 0 |
| +10 bps/side | $-286.16 | 0 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 4 |
| early-reversal | 2 |
| stop-loss | 1 |
| trailing-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AAPL | 07-02 13:45 | 07-02 14:05 | 212.4 | 211.63 | 34 | 7221.6 | -26.18 | -0.36% | 0.46R | 20m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 81.77 | ↑210.79 | 0.7211 | 1.7 | **LOSS** |
| 2 | AAPL | 08-07 13:35 | 08-07 14:05 | 219.09 | 218.52 | 33 | 7229.97 | -18.81 | -0.26% | 0.23R | 30m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 76.09 | ↓218.32 | 0.428 | 2.23 | **LOSS** |
| 3 | AAPL | 08-12 13:30 | 08-12 13:40 | 230.01 | 227.28 | 31 | 7130.31 | -84.63 | -1.19% | 1.7R | 10m | market | stop-loss | trend | breakout | confirmationRequired | confirmation-required | 73.18 | ↓229.26 | 0.0429 | 3.34 | **LOSS** |
| 4 | AAPL | 09-16 13:50 | 09-16 14:25 | 239.93 | 239.44 | 19 | 4558.67 | -9.31 | -0.2% | 0.29R | 35m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 92.06 | ↓238.23 | 0.7303 | 1.96 | **LOSS** |
| 5 | AAPL | 10-27 13:30 | 10-27 14:20 | 266.22 | 265.78 | 27 | 7187.94 | -11.88 | -0.17% | 0.24R | 50m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 75.45 | ↓265.84 | 0.2418 | 2.06 | **LOSS** |
| 6 | AAPL | 11-20 14:35 | 11-20 15:15 | 273.67 | 273.28 | 26 | 7115.42 | -10.14 | -0.14% | 0.19R | 40m | market | stagnation | trend | breakout | confirmationRequired | confirmation-required | 72.6 | ↓272.57 | 0.3305 | 1.1 | **LOSS** |
| 7 | AAPL | 02-04 14:30 | 02-04 15:10 | 274.78 | 274.77 | 17 | 4671.26 | -0.17 | 0% | 0R | 40m | market | trailing-stop | trend | breakout | confirmationRequired | confirmation-required | 85.63 | ↓273.89 | 0.3927 | 4.02 | **LOSS** |
| 8 | AAPL | 02-24 14:40 | 02-24 15:10 | 274.35 | 272.84 | 17 | 4663.95 | -25.67 | -0.55% | 0.69R | 30m | market | early-reversal | trend | breakout | confirmationRequired | confirmation-required | 90.51 | ↓271.81 | 0.9722 | 2.55 | **LOSS** |

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

- ⚠️ **Profit factor 0 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.48R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T14:10:25.351Z*
