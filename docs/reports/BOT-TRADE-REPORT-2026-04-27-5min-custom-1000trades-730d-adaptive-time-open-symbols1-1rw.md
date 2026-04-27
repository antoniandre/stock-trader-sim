# Bot Trade Report — 6 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T10:58:48.307Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $297.41 (+0.3%) over 6 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 6 |
| Win rate | 50% (3W / 3L) |
| Net P&L | $+297.41 (+0.3%) |
| Gross profit | $416.88 |
| Gross loss | $119.47 |
| Profit factor | 3.49 |
| Avg win | $138.96 |
| Avg loss | $39.82 |
| Payoff ratio | 3.49:1 |
| Expectancy | $+49.57 / trade |
| Max drawdown | 0.07% |
| Sharpe ratio (ann.) | 5.88 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 77 min |
| Avg risk ratio | 0.93R |
| Starting equity | $100,000 |
| Ending equity | $100,297.41 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+297.41 | $49.57 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| HD | 6 | 3 | 50% | $+297.41 | $+49.57 | 3.49 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 5 | 2 | 40% | $+231.55 | $+46.31 |
| breakout | 1 | 1 | 100% | $+65.86 | $+65.86 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 6 | 3 | 50% | $+297.41 | $+49.57 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+280.83 | 3.2 |
| +3 bps/side | $+247.66 | 2.72 |
| +5 bps/side | $+214.49 | 2.33 |
| +10 bps/side | $+131.59 | 1.65 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 3 |
| early-reversal | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | HD | 07-29 14:00 | 07-29 14:20 | 362.18 | 360.75 | 38 | 13762.84 | -54.34 | -0.39% | 0.56R | 20m | market | early-reversal | trend | trend | neutral | 66.5 | ↑360.38 | 0.3934 | 1.24 | **LOSS** |
| 2 | HD | 08-06 14:05 | 08-06 15:20 | 353.22 | 352.94 | 39 | 13775.58 | -10.92 | -0.08% | 0.11R | 75m | market | breakeven-stop | trend | trend | neutral | 67.4 | ↓350.44 | 0.2369 | 1.08 | **LOSS** |
| 3 | HD | 08-23 14:10 | 08-23 15:55 | 371.03 | 372.81 | 37 | 13728.11 | +65.86 | +0.48% | 0.69R | 105m | market | timeout | breakout | breakout | neutral | 71.95 | ↑367.87 | 0.5107 | 1.35 | **WIN** |
| 4 | HD | 03-19 14:15 | 03-19 15:05 | 353.71 | 352.32 | 39 | 13794.69 | -54.21 | -0.39% | 0.56R | 50m | market | early-reversal | trend | trend | neutral | 70.86 | ↓351.92 | 0.7652 | 1.34 | **LOSS** |
| 5 | HD | 03-20 14:00 | 03-20 15:45 | 358.27 | 359.51 | 39 | 13972.53 | +48.36 | +0.35% | 0.5R | 105m | market | timeout | trend | trend | neutral | 76.43 | ↑355.38 | 1.5249 | 1.45 | **WIN** |
| 6 | HD | 07-01 14:25 | 07-01 16:10 | 371.08 | 379.26 | 37 | 13729.96 | +302.66 | +2.2% | 3.14R | 105m | market | timeout | trend | trend | neutral | 72.26 | ↑367.75 | 0.8124 | 1.17 | **WIN** |

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

- ✅ **Profit factor 3.49** — healthy; validate on a fresh out-of-sample date range before going live
- ⚠️ **Avg R = 0.93R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T10:58:48.307Z*
