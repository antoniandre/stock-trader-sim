# Bot Trade Report — 6 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:53:56.931Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $228.24 (+0.23%) over 6 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 6 |
| Win rate | 50% (3W / 3L) |
| Net P&L | $+228.24 (+0.23%) |
| Gross profit | $409.21 |
| Gross loss | $180.97 |
| Profit factor | 2.26 |
| Avg win | $136.4 |
| Avg loss | $60.32 |
| Payoff ratio | 2.26:1 |
| Expectancy | $+38.04 / trade |
| Max drawdown | 0.13% |
| Sharpe ratio (ann.) | 4.7 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 73 min |
| Avg risk ratio | 0.92R |
| Starting equity | $100,000 |
| Ending equity | $100,228.24 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+228.24 | $38.04 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CAT | 6 | 3 | 50% | $+228.24 | $+38.04 | 2.26 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 2 | 0 | 0% | $-173.61 | $-86.8 |
| trend | 4 | 3 | 75% | $+401.85 | $+100.46 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 6 | 3 | 50% | $+228.24 | $+38.04 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+211.69 | 2.12 |
| +3 bps/side | $+178.6 | 1.87 |
| +5 bps/side | $+145.49 | 1.65 |
| +10 bps/side | $+62.74 | 1.24 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| early-reversal | 2 |
| stagnation | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CAT | 05-02 13:35 | 05-02 13:55 | 321.97 | 319.86 | 43 | 13844.71 | -90.73 | -0.66% | 0.85R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 2 | CAT | 06-03 14:20 | 06-03 16:05 | 348.69 | 349.85 | 40 | 13947.6 | +46.4 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 3 | CAT | 07-23 13:40 | 07-23 14:00 | 425.63 | 423.04 | 32 | 13620.16 | -82.88 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 4 | CAT | 08-04 14:10 | 08-04 15:35 | 434.16 | 433.93 | 32 | 13893.12 | -7.36 | -0.05% | 0.07R | 85m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 5 | CAT | 10-08 14:10 | 10-08 15:55 | 498.2 | 506.95 | 28 | 13949.6 | +245 | +1.76% | 2.26R | 105m | market | timeout | trend | trend | neutral | 79.71 | ↑494.51 | 2.8882 | 1.25 | **WIN** |
| 6 | CAT | 04-17 14:00 | 04-17 15:45 | 787.14 | 794.07 | 17 | 13381.38 | +117.81 | +0.88% | 0.99R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑784.1 | 4.7842 | 2.19 | **WIN** |

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

- ✅ **Profit factor 2.26** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.92R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:53:56.931Z*
