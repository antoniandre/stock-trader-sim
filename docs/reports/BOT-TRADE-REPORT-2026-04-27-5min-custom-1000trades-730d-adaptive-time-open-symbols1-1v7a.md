# Bot Trade Report — 7 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T10:58:49.949Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $134.6 (+0.13%) over 7 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 7 |
| Win rate | 57.14% (4W / 3L) |
| Net P&L | $+134.6 (+0.13%) |
| Gross profit | $354.48 |
| Gross loss | $219.88 |
| Profit factor | 1.61 |
| Avg win | $88.62 |
| Avg loss | $73.29 |
| Payoff ratio | 1.21:1 |
| Expectancy | $+19.23 / trade |
| Max drawdown | 0.11% |
| Sharpe ratio (ann.) | 3.08 |
| Trades / active day | 1 |
| Avg confidence | 98.14% |
| Avg trade duration | 72 min |
| Avg risk ratio | 0.76R |
| Starting equity | $100,000 |
| Ending equity | $100,134.6 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 57.14% | $+134.6 | $19.23 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| XOM | 7 | 4 | 57.14% | $+134.6 | $+19.23 | 1.61 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 5 | 3 | 60% | $+198.68 | $+39.74 |
| breakout | 2 | 1 | 50% | $-64.08 | $-32.04 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 7 | 4 | 57.14% | $+134.6 | $+19.23 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+115.26 | 1.51 |
| +3 bps/side | $+76.59 | 1.31 |
| +5 bps/side | $+37.92 | 1.15 |
| +10 bps/side | $-58.78 | 0.8 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| early-reversal | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | XOM | 07-15 14:05 | 07-15 15:50 | 114.46 | 115.94 | 122 | 13964.12 | +180.56 | +1.29% | 1.84R | 105m | market | timeout | trend | trend | neutral | 67.06 | ↑114.15 | 0.2351 | 2.23 | **WIN** |
| 2 | XOM | 07-17 14:00 | 07-17 14:30 | 118 | 117.47 | 118 | 13924 | -62.54 | -0.45% | 0.64R | 30m | market | early-reversal | trend | trend | neutral | 77.87 | ↓117.55 | 0.4399 | 1.42 | **LOSS** |
| 3 | XOM | 05-06 14:10 | 05-06 15:55 | 104.96 | 105.36 | 133 | 13959.68 | +53.2 | +0.38% | 0.44R | 105m | market | timeout | trend | trend | neutral | 74.67 | ↑104.22 | 0.2246 | 1.84 | **WIN** |
| 4 | XOM | 06-06 13:35 | 06-06 15:20 | 103.77 | 104.11 | 135 | 14008.95 | +45.9 | +0.33% | 0.47R | 105m | market | timeout | breakout | breakout | neutral | 77.61 | ↑103.43 | 0.1678 | 1.45 | **WIN** |
| 5 | XOM | 07-23 14:10 | 07-23 14:45 | 109.52 | 109.15 | 128 | 14018.56 | -47.36 | -0.34% | 0.49R | 35m | market | early-reversal | trend | trend | neutral | 74.59 | ↓109.22 | 0.217 | 1.48 | **LOSS** |
| 6 | XOM | 03-17 14:00 | 03-17 15:45 | 159.4 | 160.26 | 87 | 13867.8 | +74.82 | +0.54% | 0.71R | 105m | market | timeout | trend | trend | neutral | 75.51 | ↑158.13 | 0.3798 | 1.16 | **WIN** |
| 7 | XOM | 04-02 13:30 | 04-02 13:50 | 165.1 | 163.69 | 78 | 12877.8 | -109.98 | -0.85% | 0.72R | 20m | market | early-reversal | breakout | breakout | neutral | 69.84 | ↓164.59 | 0.4226 | 1.6 | **LOSS** |

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

- ✅ **Profit factor 1.61** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.76R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T10:58:49.949Z*
