# Bot Trade Report — 11 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:21:59.864Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $11.44 (-0.01%) over 11 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 11 |
| Win rate | 36.36% (4W / 7L) |
| Net P&L | $-11.44 (-0.01%) |
| Gross profit | $351.45 |
| Gross loss | $362.89 |
| Profit factor | 0.97 |
| Avg win | $87.86 |
| Avg loss | $51.84 |
| Payoff ratio | 1.69:1 |
| Expectancy | $-1.04 / trade |
| Max drawdown | 0.28% |
| Sharpe ratio (ann.) | -0.23 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.56R |
| Starting equity | $100,000 |
| Ending equity | $99,988.56 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 36.36% | $-11.44 | $-1.04 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| AAPL | 11 | 4 | 36.36% | $-11.44 | $-1.04 | 0.97 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 4 | 36.36% | $-11.44 | $-1.04 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 10 | 4 | 40% | $+56.6 | $+5.66 |
| cleanTrend | 1 | 0 | 0% | $-68.04 | $-68.04 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Behavior | neutral | 6 | 0.72 | $-10.32 | 4 | 2.65 | $+29.63 | 0.06% | 1.63 | reject |
| Symbol | AAPL | 6 | 0.72 | $-10.32 | 5 | 1.36 | $+10.1 | 0.13% | 0.89 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.72 | $-10.32 | 5 | 1.36 | $+10.1 | 0.13% | 0.89 | reject |
| Setup | trend | 6 | 0.72 | $-10.32 | 5 | 1.36 | $+10.1 | 0.13% | 0.89 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-42.47 | 0.89 |
| +3 bps/side | $-104.55 | 0.75 |
| +5 bps/side | $-166.61 | 0.64 |
| +10 bps/side | $-321.8 | 0.43 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| timeout | 4 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | AAPL | 06-26 14:15 | 06-26 16:00 | 212.4 | 213.96 | 65 | 13806 | +101.4 | +0.73% | 0.81R | 105m | market | timeout | trend | trend | neutral | 66.16 | ↑211.73 | 0.4443 | 1.6 | **WIN** |
| 2 | AAPL | 07-02 14:00 | 07-02 15:45 | 218.61 | 219.54 | 64 | 13991.04 | +59.52 | +0.43% | 0.55R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑216.97 | 0.3897 | 1.89 | **WIN** |
| 3 | AAPL | 10-08 14:00 | 10-08 14:20 | 225.78 | 224.49 | 62 | 13998.36 | -79.98 | -0.57% | 0.81R | 20m | market | early-reversal | trend | trend | neutral | 78.6 | ↓224.58 | 0.4219 | 2.02 | **LOSS** |
| 4 | AAPL | 03-20 14:15 | 03-20 14:40 | 217.4 | 216.73 | 64 | 13913.6 | -42.88 | -0.31% | 0.38R | 25m | market | early-reversal | trend | trend | neutral | 70.31 | ↑215.15 | 0.283 | 1.18 | **LOSS** |
| 5 | AAPL | 06-04 14:00 | 06-04 14:20 | 205.61 | 204.78 | 68 | 13981.48 | -56.44 | -0.4% | 0.52R | 20m | market | early-reversal | trend | trend | neutral | 73.38 | ↓204.52 | 0.5322 | 2.23 | **LOSS** |
| 6 | AAPL | 07-03 14:00 | 07-03 14:50 | 213.91 | 213.24 | 65 | 13904.15 | -43.55 | -0.31% | 0.44R | 50m | market | early-reversal | trend | trend | neutral | 68.43 | ↓212.88 | 0.4674 | 1.21 | **LOSS** |
| 7 | AAPL | 08-13 14:15 | 08-13 15:05 | 232.68 | 232.47 | 60 | 13960.8 | -12.6 | -0.09% | 0.1R | 50m | market | breakeven-stop | trend | trend | neutral | 75.62 | ↑231.66 | 0.7139 | 1.35 | **LOSS** |
| 8 | AAPL | 09-12 14:05 | 09-12 15:50 | 232.83 | 234.28 | 60 | 13969.8 | +87 | +0.62% | 0.71R | 105m | market | timeout | trend | trend | neutral | 64.82 | ↑230.73 | 0.4094 | 1.94 | **WIN** |
| 9 | AAPL | 10-15 14:00 | 10-15 14:25 | 251.81 | 250.73 | 63 | 15864.03 | -68.04 | -0.43% | 0.48R | 25m | market | early-reversal | trend | trend | cleanTrend | 75.12 | ↑249.86 | 0.7842 | 1.14 | **LOSS** |
| 10 | AAPL | 04-08 14:00 | 04-08 14:30 | 259 | 257.9 | 54 | 13986 | -59.4 | -0.42% | 0.38R | 30m | market | early-reversal | trend | trend | neutral | 75.43 | ↓257.85 | 1.9907 | 1.54 | **LOSS** |
| 11 | AAPL | 04-22 14:10 | 04-22 15:55 | 270.84 | 272.87 | 51 | 13812.84 | +103.53 | +0.75% | 0.96R | 105m | market | timeout | trend | trend | neutral | 74.06 | ↑268.61 | 0.6558 | 1.34 | **WIN** |

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

- ⚠️ **Profit factor 0.97 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.56R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:21:59.864Z*
