# Bot Trade Report — 5 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T20:37:28.983Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 200 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 5 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $686.24 (+0.69%) over 5 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 5 |
| Win rate | 60% (3W / 2L) |
| Net P&L | $+686.24 (+0.69%) |
| Gross profit | $751.41 |
| Gross loss | $65.17 |
| Profit factor | 11.53 |
| Avg win | $250.47 |
| Avg loss | $32.59 |
| Payoff ratio | 7.69:1 |
| Expectancy | $+137.25 / trade |
| Max drawdown | 0.07% |
| Sharpe ratio (ann.) | 12.49 |
| Trades / active day | 1 |
| Avg confidence | 94.6% |
| Avg trade duration | 65 min |
| Avg planned R:R | 2.97:1 |
| Avg risk ratio | 1.38R |
| Starting equity | $100,000 |
| Ending equity | $100,686.24 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+686.24 | PASS |
| Win rate | 45-60% | 60% | PASS |
| Profit factor | >= 1.3 | 11.53 | PASS |
| Sharpe (ann.) | > 1.5 | 12.49 | PASS |
| R:R | 2:1 - 3:1 | 2.97:1 planned | PASS |
| Max drawdown | < 10% | 0.07% | PASS |
| Expectancy | positive | $+137.25 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 4 | 50% | $+366.94 | $91.74 |
| Mid  10:30–11:30 | 1 | 100% | $+319.3 | $319.3 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMD | 1 | 1 | 100% | $+319.3 | $+319.3 | ∞ | watch |
| TSLA | 1 | 1 | 100% | $+308.8 | $+308.8 | ∞ | watch |
| META | 3 | 1 | 33.33% | $+58.14 | $+19.38 | 1.89 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 5 | 3 | 60% | $+686.24 | $+137.25 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 5 | 3 | 60% | $+686.24 | $+137.25 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 5 | 3 | 60% | $+686.24 | $+137.25 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 5 | 3 | 60% | $+686.24 | $+137.25 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+673.18 | 10.53 |
| +3 bps/side | $+647.06 | 8.93 |
| +5 bps/side | $+620.93 | 7.71 |
| +10 bps/side | $+555.63 | 5.63 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| profit-target | 2 |
| timeout | 1 |
| early-reversal | 1 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 19 | 12840.77 | +123.31 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 2 | META | 10-02 13:40 | 10-02 14:00 | 726.19 | 723.16 | 19 | 13797.61 | -57.57 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 3 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 19 | 13660.43 | -7.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 4 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 62 | 12789.36 | +319.3 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 5 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 32 | 11875.84 | +308.8 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |

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

- ✅ **Profit factor 11.53** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.38R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T20:37:28.983Z*
