# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:53:56.001Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $626.52 (+0.63%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 58.33% (7W / 5L) |
| Net P&L | $+626.52 (+0.63%) |
| Gross profit | $1012.99 |
| Gross loss | $386.47 |
| Profit factor | 2.62 |
| Avg win | $144.71 |
| Avg loss | $77.29 |
| Payoff ratio | 1.87:1 |
| Expectancy | $+52.21 / trade |
| Max drawdown | 0.27% |
| Sharpe ratio (ann.) | 4.72 |
| Trades / active day | 1.33 |
| Avg confidence | 100% |
| Avg trade duration | 67 min |
| Avg risk ratio | 0.8R |
| Starting equity | $100,000 |
| Ending equity | $100,626.52 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 58.33% | $+626.52 | $52.21 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 12 | 7 | 58.33% | $+626.52 | $+52.21 | 2.62 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 7 | 58.33% | $+626.52 | $+52.21 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 12 | 7 | 58.33% | $+626.52 | $+52.21 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | TSLA | 7 | 1.15 | $+5.89 | 5 | 5.94 | $+117.06 | 0.12% | 4.62 | reject |
| Behavior | neutral | 7 | 1.15 | $+5.89 | 5 | 5.94 | $+117.06 | 0.12% | 4.62 | reject |
| Time slot | Open 9:30-10:30 | 7 | 1.15 | $+5.89 | 5 | 5.94 | $+117.06 | 0.12% | 4.62 | reject |
| Setup | trend | 7 | 1.15 | $+5.89 | 5 | 5.94 | $+117.06 | 0.12% | 4.62 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+601.55 | 2.5 |
| +3 bps/side | $+551.6 | 2.29 |
| +5 bps/side | $+501.62 | 2.1 |
| +10 bps/side | $+376.76 | 1.72 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| trim-profit-target | 3 |
| timeout | 3 |
| profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 05-13 14:15 | 05-13 14:40 | 324.06 | 321.86 | 43 | 13934.58 | -94.6 | -0.68% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 68.82 | ↑321.15 | 1.7391 | 1.01 | **LOSS** |
| 2 | TSLA | 06-18 14:00 | 06-18 14:50 | 324.45 | 323.08 | 43 | 13951.35 | -58.91 | -0.42% | 0.32R | 50m | market | early-reversal | trend | trend | neutral | 70.08 | ↑320.76 | 1.7512 | 1.16 | **LOSS** |
| 3 | TSLA | 08-04 14:00 | 08-04 14:30 | 310.87 | 308.27 | 44 | 13678.28 | -114.4 | -0.84% | 0.52R | 30m | market | early-reversal | trend | trend | neutral | 74.52 | ↓308.57 | 1.7595 | 1.15 | **LOSS** |
| 4 | TSLA | 09-11 14:20 | 09-11 15:30 | 357.34 | 361.09 | 19 | 13936.26 | +71.25 | +1.05% | 0.72R | 70m | market | trim-profit-target | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 5 | TSLA | 09-11 14:20 | 09-11 16:05 | 357.34 | 362.27 | 20 | 13936.26 | +98.6 | +1.38% | 0.95R | 105m | market | timeout | breakout | trend | neutral | 72.93 | ↑351.89 | 0.7171 | 1.05 | **WIN** |
| 6 | TSLA | 10-01 14:10 | 10-01 15:15 | 450.92 | 455.47 | 15 | 13978.52 | +68.25 | +1.01% | 0.78R | 65m | market | trim-profit-target | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 7 | TSLA | 10-01 14:10 | 10-01 15:55 | 450.92 | 455.36 | 16 | 13978.52 | +71.04 | +0.98% | 0.75R | 105m | market | timeout | trend | trend | neutral | 68.48 | ↑446.74 | 1.9177 | 1.4 | **WIN** |
| 8 | TSLA | 10-31 14:05 | 10-31 15:30 | 452.23 | 455.2 | 15 | 13566.9 | +44.55 | +0.66% | 0.51R | 85m | market | trim-profit-target | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 9 | TSLA | 10-31 14:05 | 10-31 15:50 | 452.23 | 454.25 | 15 | 13566.9 | +30.3 | +0.45% | 0.35R | 105m | market | timeout | trend | trend | neutral | 77.75 | ↑448.93 | 1.8292 | 1.11 | **WIN** |
| 10 | TSLA | 03-31 14:20 | 03-31 14:40 | 365.83 | 364.09 | 38 | 13901.54 | -66.12 | -0.48% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 67.6 | ↓364.02 | 2.8915 | 1.08 | **LOSS** |
| 11 | TSLA | 04-14 14:25 | 04-14 15:00 | 363.09 | 361.71 | 38 | 13797.42 | -52.44 | -0.38% | 0.24R | 35m | market | early-reversal | trend | trend | neutral | 76.27 | ↑359.49 | 2.6675 | 1.13 | **LOSS** |
| 12 | TSLA | 04-15 14:05 | 04-15 15:50 | 373.61 | 390.61 | 37 | 13823.57 | +629 | +4.55% | 3.67R | 105m | market | profit-target | trend | trend | neutral | 76.02 | ↑369.15 | 1.9261 | 1.56 | **WIN** |

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

- ✅ **Profit factor 2.62** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.8R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:53:56.001Z*
