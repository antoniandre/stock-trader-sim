# Bot Trade Report — 10 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:58:55.949Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $125.78 (-0.13%) over 10 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 10 |
| Win rate | 30% (3W / 7L) |
| Net P&L | $-125.78 (-0.13%) |
| Gross profit | $322.86 |
| Gross loss | $448.64 |
| Profit factor | 0.72 |
| Avg win | $107.62 |
| Avg loss | $64.09 |
| Payoff ratio | 1.68:1 |
| Expectancy | $-12.58 / trade |
| Max drawdown | 0.28% |
| Sharpe ratio (ann.) | -2.24 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 59 min |
| Avg risk ratio | 0.6R |
| Starting equity | $100,000 |
| Ending equity | $99,874.22 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 10 | 30% | $-125.78 | $-12.58 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMAT | 10 | 3 | 30% | $-125.78 | $-12.58 | 0.72 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 7 | 3 | 42.86% | $+62.4 | $+8.91 |
| breakout | 3 | 0 | 0% | $-188.18 | $-62.73 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 10 | 3 | 30% | $-125.78 | $-12.58 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | AMAT | 6 | 1.17 | $+6.99 | 4 | 0.19 | $-41.93 | 0.17% | 0.1 | reject |
| Behavior | neutral | 6 | 1.17 | $+6.99 | 4 | 0.19 | $-41.93 | 0.17% | 0.1 | reject |
| Time slot | Open 9:30-10:30 | 6 | 1.17 | $+6.99 | 4 | 0.19 | $-41.93 | 0.17% | 0.1 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-153.55 | 0.67 |
| +3 bps/side | $-209.09 | 0.59 |
| +5 bps/side | $-264.64 | 0.52 |
| +10 bps/side | $-403.51 | 0.37 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| timeout | 3 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AMAT | 05-20 14:00 | 05-20 15:45 | 216.98 | 219.34 | 64 | 13886.72 | +151.04 | +1.09% | 1.27R | 105m | market | timeout | trend | trend | neutral | 77.5 | ↑215.72 | 1.281 | 1.22 | **WIN** |
| 2 | AMAT | 06-28 14:00 | 06-28 14:35 | 240.03 | 238.96 | 58 | 13921.74 | -62.06 | -0.45% | 0.46R | 35m | market | early-reversal | trend | trend | neutral | 75.63 | ↑237.27 | 1.2037 | 1.33 | **LOSS** |
| 3 | AMAT | 09-25 14:00 | 09-25 14:45 | 199.21 | 198.29 | 70 | 13944.7 | -64.4 | -0.46% | 0.47R | 45m | market | early-reversal | trend | breakout | neutral | 73.08 | ↑197.14 | 0.4383 | 1.17 | **LOSS** |
| 4 | AMAT | 10-02 14:15 | 10-02 15:05 | 203.37 | 202.89 | 68 | 13829.16 | -32.64 | -0.24% | 0.16R | 50m | market | stagnation | breakout | breakout | neutral | 74.63 | ↑199.38 | 0.7425 | 1.17 | **LOSS** |
| 5 | AMAT | 10-09 14:05 | 10-09 15:50 | 203.29 | 205.23 | 68 | 13823.72 | +131.92 | +0.95% | 1.36R | 105m | market | timeout | trend | trend | neutral | 77.14 | ↑202.39 | 0.6013 | 2.71 | **WIN** |
| 6 | AMAT | 03-14 14:00 | 03-14 14:20 | 154.88 | 153.97 | 90 | 13939.2 | -81.9 | -0.59% | 0.42R | 20m | market | early-reversal | trend | trend | neutral | 77.24 | ↑153.9 | 1.2277 | 1.94 | **LOSS** |
| 7 | AMAT | 04-24 14:00 | 04-24 14:35 | 149.29 | 148.31 | 93 | 13883.97 | -91.14 | -0.66% | 0.48R | 35m | market | early-reversal | breakout | breakout | neutral | 88.43 | ↑147.15 | 0.8851 | 1.35 | **LOSS** |
| 8 | AMAT | 06-12 14:20 | 06-12 15:10 | 174.9 | 174.31 | 80 | 13992 | -47.2 | -0.34% | 0.45R | 50m | market | early-reversal | trend | trend | neutral | 78.24 | ↓173.92 | 0.7901 | 1.88 | **LOSS** |
| 9 | AMAT | 07-10 14:15 | 07-10 16:00 | 198.27 | 198.84 | 70 | 13878.9 | +39.9 | +0.29% | 0.37R | 105m | market | timeout | trend | trend | neutral | 69.63 | ↑197.32 | 0.4532 | 1.33 | **WIN** |
| 10 | AMAT | 09-30 14:20 | 09-30 14:55 | 209.48 | 208.43 | 66 | 13825.68 | -69.3 | -0.5% | 0.57R | 35m | market | early-reversal | trend | trend | neutral | 79.98 | ↑207.12 | 0.6333 | 1.44 | **LOSS** |

## Improvements Applied in This Run

| # | Improvement | Detail |
|--:|:--|:--|
| 1 | **R ratio fixed** | Balanced stop 1.7%→1.2%, target 1.5%→2.4% — now a true 2R trade |
| 2 | **Trailing stop** | Exits once price retraces 0.8% from the session high-watermark |
| 3 | **EOD force-close** | All positions flattened at 19:50 UTC (3:50 PM ET) — no overnight holds |
| 4 | **Market session gate** | New entries blocked outside 13:30–19:30 UTC (9:30–3:30 PM ET) — eliminates extended-hours overnight holds |
| 5 | **RSI > 80 hard block (trend)** | RSI > 80 in a trend setup = chasing overbought momentum; entry blocked (breakout setup exempt) |
| 6 | **Higher buy threshold** | Balanced buyThreshold raised 52→55 — filters marginal entries |
| 7 | **Break-even stop** | Once position reaches 1R (highWatermark ≥ entry×1.012), exit if price returns to entry — stops winners from turning losers |
| 8 | **dailyLossesPct auto-injected** | REST API injects live daily-loss % from server tradeState when client omits it |
| 9 | **VWAP in entry scoring** | +5 pts above VWAP, −8 pts significantly below, +4 pts below VWAP for mean-revert |
| 10 | **Slippage model** | 0.05 bps applied to every fill (buy high, sell low) — realistic market-order cost |
| 11 | **RSI-14 scoring** | Overbought (>70): −8 entry, +8 risk. Sweet-spot (50–70): +6. Oversold mean-revert: +10 |
| 12 | **EMA 9/21 crossover** | Bullish cross: +6 entry; bearish cross: −6 entry |
| 13 | **MACD** | Positive line: +5 entry; negative: −5 entry |
| 14 | **Daily loss limit** | 5% account equity — new entries blocked for the session once hit |
| 15 | **Recovery: trailing + breakeven stops** | Protect profits; broker-level stop-limit order recommended on live |
| 16 | **Recovery: EOD + timeout** | EOD flatten + 20-candle/2h timeout prevent overnight and orphaned positions |

## Remaining Gaps Before Live Real-Money

- ⚠️ **Profit factor 0.72 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.6R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:58:55.949Z*
