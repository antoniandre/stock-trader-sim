# Bot Trade Report — 11 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-28T04:19:23.803Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 300 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 10 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $222.73 (+0.22%) over 11 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 11 |
| Win rate | 36.36% (4W / 7L) |
| Net P&L | $+222.73 (+0.22%) |
| Gross profit | $940.65 |
| Gross loss | $717.92 |
| Profit factor | 1.31 |
| Avg win | $235.16 |
| Avg loss | $102.56 |
| Payoff ratio | 2.29:1 |
| Expectancy | $+20.25 / trade |
| Max drawdown | 0.31% |
| Sharpe ratio (ann.) | 1.72 |
| Trades / active day | 1.1 |
| Avg confidence | 97.55% |
| Avg trade duration | 56 min |
| Avg planned R:R | 2.62:1 |
| Avg risk ratio | 1.19R |
| Starting equity | $100,000 |
| Ending equity | $100,222.73 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+222.73 | PASS |
| Win rate | 45-60% | 36.36% | MISS |
| Profit factor | >= 1.3 | 1.31 | PASS |
| Sharpe (ann.) | > 1.5 | 1.72 | PASS |
| R:R | 2:1 - 3:1 | 2.62:1 planned | PASS |
| Max drawdown | < 10% | 0.31% | PASS |
| Expectancy | positive | $+20.25 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 40% | $+360.86 | $72.17 |
| Mid  10:30–11:30 | 6 | 33.33% | $-138.13 | $-23.02 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AMD | 1 | 1 | 100% | $+319.3 | $+319.3 | ∞ | watch |
| TSLA | 1 | 1 | 100% | $+308.8 | $+308.8 | ∞ | watch |
| META | 3 | 1 | 33.33% | $+58.14 | $+19.38 | 1.89 | watch |
| SMCI | 1 | 0 | 0% | $-148 | $-148 | 0 | watch |
| PLTR | 5 | 1 | 20% | $-315.51 | $-63.1 | 0.37 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 9 | 4 | 44.44% | $+376.81 | $+41.87 |
| momentum-pilot | 1 | 0 | 0% | $-6.08 | $-6.08 |
| trend | 1 | 0 | 0% | $-148 | $-148 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 10 | 4 | 40% | $+462.43 | $+46.24 |
| breakout | 1 | 0 | 0% | $-239.7 | $-239.7 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 11 | 4 | 36.36% | $+222.73 | $+20.25 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 11 | 4 | 36.36% | $+222.73 | $+20.25 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Regime | trend | 6 | 2.02 | $+37.23 | 4 | 1.92 | $+59.77 | 0.26% | 1.65 | promote |
| Behavior | neutral | 6 | 2.02 | $+37.23 | 5 | 1 | $-0.13 | 0.31% | 0.87 | watch |
| Trade state | neutral | 6 | 2.02 | $+37.23 | 5 | 1 | $-0.13 | 0.31% | 0.87 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+194.82 | 1.26 |
| +3 bps/side | $+139.01 | 1.18 |
| +5 bps/side | $+83.16 | 1.1 |
| +10 bps/side | $-56.38 | 0.94 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| stagnation | 3 |
| early-reversal | 3 |
| timeout | 2 |
| profit-target | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | META | 06-04 13:30 | 06-04 15:15 | 675.83 | 682.32 | 19 | 12840.77 | +123.31 | +0.96% | 1.37R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.65 | ↑673.32 | 0.2011 | 2.53 | **WIN** |
| 2 | PLTR | 07-17 13:55 | 07-17 14:50 | 152.4 | 152.21 | 32 | 4876.8 | -6.08 | -0.12% | 0.13R | 55m | market | stagnation | trend | momentum-pilot | neutral | neutral | 64.93 | ↑151.61 | 0.4131 | 1.9 | **LOSS** |
| 3 | SMCI | 09-29 14:40 | 09-29 15:10 | 47.23 | 46.73 | 296 | 13980.08 | -148 | -1.06% | 0.73R | 30m | market | early-reversal | trend | trend | neutral | neutral | 68.64 | ↑46.6 | 0.3472 | 1.85 | **LOSS** |
| 4 | META | 10-02 13:40 | 10-02 14:00 | 726.19 | 723.16 | 19 | 13797.61 | -57.57 | -0.42% | 0.6R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 71.19 | ↓723.54 | 0.859 | 2.56 | **LOSS** |
| 5 | META | 10-15 13:40 | 10-15 15:15 | 718.97 | 718.57 | 19 | 13660.43 | -7.6 | -0.06% | 0.09R | 95m | market | stagnation | trend | breakout | neutral | neutral | 67.95 | ↓717.05 | 0.4863 | 3.31 | **LOSS** |
| 6 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 62 | 12789.36 | +319.3 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 7 | PLTR | 12-19 14:40 | 12-19 15:45 | 189.74 | 189.61 | 73 | 13851.02 | -9.49 | -0.07% | 0.06R | 65m | market | stagnation | trend | breakout | neutral | neutral | 80.15 | ↓188.66 | 0.4737 | 2.84 | **LOSS** |
| 8 | PLTR | 01-14 14:30 | 01-14 14:35 | 181.2 | 177.96 | 77 | 13952.4 | -249.48 | -1.79% | 2.29R | 5m | market | stop-loss | trend | breakout | neutral | neutral | 73.77 | ↓179.76 | 0.3634 | 4.45 | **LOSS** |
| 9 | PLTR | 01-23 14:40 | 01-23 16:25 | 168.03 | 170.31 | 83 | 13946.49 | +189.24 | +1.36% | 1.51R | 105m | market | timeout | trend | breakout | neutral | neutral | 79.11 | ↑167.45 | 0.3451 | 2.78 | **WIN** |
| 10 | PLTR | 02-26 14:40 | 02-26 15:15 | 136.03 | 133.68 | 102 | 13875.06 | -239.7 | -1.73% | 1.49R | 35m | market | early-reversal | breakout | breakout | neutral | neutral | 63.03 | ↓135.1 | 0.0268 | 3.62 | **LOSS** |
| 11 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 32 | 11875.84 | +308.8 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |

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

- ⚠️ **Profit factor 1.31 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ✅ **Avg R = 1.19R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-28T04:19:23.803Z*
