# Bot Trade Report — 5 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T19:46:18.290Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 50 | **Lookback:** 90 days | **Universe:** expanded | **Symbols scanned:** 5 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** breakout | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $338.15 (+0.34%) over 5 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 5 |
| Win rate | 60% (3W / 2L) |
| Net P&L | $+338.15 (+0.34%) |
| Gross profit | $573.84 |
| Gross loss | $235.69 |
| Profit factor | 2.43 |
| Avg win | $191.28 |
| Avg loss | $117.85 |
| Payoff ratio | 1.62:1 |
| Expectancy | $+67.63 / trade |
| Max drawdown | 0.23% |
| Sharpe ratio (ann.) | 5.89 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 71 min |
| Avg planned R:R | 2.77:1 |
| Avg risk ratio | 1.35R |
| Starting equity | $100,000 |
| Ending equity | $100,338.15 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+338.15 | PASS |
| Win rate | 45-60% | 60% | PASS |
| Profit factor | >= 1.3 | 2.43 | PASS |
| Sharpe (ann.) | > 1.5 | 5.89 | PASS |
| R:R | 2:1 - 3:1 | 2.77:1 planned | PASS |
| Max drawdown | < 10% | 0.23% | PASS |
| Expectancy | positive | $+67.63 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 5 | 60% | $+338.15 | $67.63 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NVDA | 2 | 2 | 100% | $+306.09 | $+153.04 | ∞ | watch |
| GOOGL | 1 | 1 | 100% | $+267.75 | $+267.75 | ∞ | watch |
| AMZN | 1 | 0 | 0% | $-90.09 | $-90.09 | 0 | watch |
| MSFT | 1 | 0 | 0% | $-145.6 | $-145.6 | 0 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 5 | 3 | 60% | $+338.15 | $+67.63 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 5 | 3 | 60% | $+338.15 | $+67.63 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 5 | 3 | 60% | $+338.15 | $+67.63 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+324.29 | 2.34 |
| +3 bps/side | $+296.58 | 2.18 |
| +5 bps/side | $+268.87 | 2.02 |
| +10 bps/side | $+199.58 | 1.69 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| stop-loss | 1 |
| early-reversal | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NVDA | 02-18 14:40 | 02-18 16:25 | 188.46 | 189.69 | 74 | 13946.04 | +91.02 | +0.65% | 0.6R | 105m | market | timeout | breakout | breakout | neutral | neutral | 70.05 | ↑188.07 | 0.4164 | 1.49 | **WIN** |
| 2 | GOOGL | 02-20 14:30 | 02-20 16:15 | 308.4 | 314.35 | 45 | 13878 | +267.75 | +1.93% | 2.47R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.43 | ↑306.85 | 0.28 | 2.81 | **WIN** |
| 3 | MSFT | 02-24 14:40 | 02-24 14:55 | 389.06 | 384.9 | 35 | 13617.1 | -145.6 | -1.07% | 1.53R | 15m | market | stop-loss | trend | breakout | neutral | neutral | 73.12 | ↓385.21 | -0.0585 | 1.57 | **LOSS** |
| 4 | AMZN | 03-05 14:35 | 03-05 15:00 | 219.89 | 218.46 | 63 | 13853.07 | -90.09 | -0.65% | 0.86R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 74.61 | ↓218.62 | 0.497 | 2.17 | **LOSS** |
| 5 | NVDA | 04-24 14:40 | 04-24 16:25 | 206.3 | 209.51 | 67 | 13822.1 | +215.07 | +1.56% | 1.27R | 105m | market | timeout | trend | breakout | neutral | neutral | 68.13 | ↑203.14 | 1.4655 | 3.5 | **WIN** |

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

- ✅ **Profit factor 2.43** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.35R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T19:46:18.290Z*
