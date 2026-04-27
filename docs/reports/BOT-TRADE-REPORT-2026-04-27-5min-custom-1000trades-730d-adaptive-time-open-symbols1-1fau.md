# Bot Trade Report — 11 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:58:56.669Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $50.64 (+0.05%) over 11 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 11 |
| Win rate | 36.36% (4W / 7L) |
| Net P&L | $+50.64 (+0.05%) |
| Gross profit | $484.81 |
| Gross loss | $434.17 |
| Profit factor | 1.12 |
| Avg win | $121.2 |
| Avg loss | $62.02 |
| Payoff ratio | 1.95:1 |
| Expectancy | $+4.6 / trade |
| Max drawdown | 0.39% |
| Sharpe ratio (ann.) | 0.68 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 64 min |
| Avg risk ratio | 0.88R |
| Starting equity | $100,000 |
| Ending equity | $100,050.64 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 11 | 36.36% | $+50.64 | $4.6 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CAT | 11 | 4 | 36.36% | $+50.64 | $+4.6 | 1.12 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 9 | 4 | 44.44% | $+224.25 | $+24.92 |
| breakout | 2 | 0 | 0% | $-173.61 | $-86.8 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 9 | 4 | 44.44% | $+147.39 | $+16.38 |
| noisyHighBeta | 2 | 0 | 0% | $-96.75 | $-48.37 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 5 | 0.3 | $-35.52 | 4 | 55.6 | $+100.46 | 0.01% | 17.3 | reject |
| Symbol | CAT | 6 | 0.22 | $-44.72 | 5 | 4.53 | $+63.79 | 0.09% | 3.12 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.22 | $-44.72 | 5 | 4.53 | $+63.79 | 0.09% | 3.12 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+22.8 | 1.05 |
| +3 bps/side | $-32.88 | 0.93 |
| +5 bps/side | $-88.57 | 0.83 |
| +10 bps/side | $-227.79 | 0.62 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| timeout | 4 |
| early-reversal | 4 |
| stagnation | 2 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CAT | 05-09 14:00 | 05-09 15:45 | 348.72 | 350.61 | 40 | 13948.8 | +75.6 | +0.54% | 0.77R | 105m | market | timeout | trend | trend | neutral | 75.19 | ↑346.97 | 0.8997 | 1.01 | **WIN** |
| 2 | CAT | 08-26 14:05 | 08-26 14:50 | 353.64 | 351.53 | 39 | 13791.96 | -82.29 | -0.6% | 0.86R | 45m | market | early-reversal | trend | trend | neutral | 75.83 | ↓352.11 | 1.4451 | 1.42 | **LOSS** |
| 3 | CAT | 11-01 14:05 | 11-01 14:45 | 381.97 | 379.91 | 36 | 13750.92 | -74.16 | -0.54% | 0.77R | 40m | market | early-reversal | trend | trend | neutral | 73.92 | ↓379.61 | 0.6298 | 1.52 | **LOSS** |
| 4 | CAT | 04-14 14:05 | 04-14 15:15 | 300.77 | 300.36 | 25 | 7519.25 | -10.25 | -0.14% | 0.14R | 70m | market | stagnation | trend | trend | noisyHighBeta | 73.45 | ↓298.87 | 1.7355 | 1.02 | **LOSS** |
| 5 | CAT | 04-15 14:10 | 04-15 14:15 | 301.81 | 298.35 | 25 | 7545.25 | -86.5 | -1.15% | 1.64R | 5m | market | stop-loss | trend | trend | noisyHighBeta | 61.23 | ↓299.98 | 0.4541 | 1.08 | **LOSS** |
| 6 | CAT | 05-02 13:35 | 05-02 13:55 | 321.97 | 319.86 | 43 | 13844.71 | -90.73 | -0.66% | 0.85R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 7 | CAT | 06-03 14:20 | 06-03 16:05 | 348.69 | 349.85 | 40 | 13947.6 | +46.4 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 8 | CAT | 07-23 13:40 | 07-23 14:00 | 425.63 | 423.04 | 32 | 13620.16 | -82.88 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 9 | CAT | 08-04 14:10 | 08-04 15:35 | 434.16 | 433.93 | 32 | 13893.12 | -7.36 | -0.05% | 0.07R | 85m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 10 | CAT | 10-08 14:10 | 10-08 15:55 | 498.2 | 506.95 | 28 | 13949.6 | +245 | +1.76% | 2.26R | 105m | market | timeout | trend | trend | neutral | 79.71 | ↑494.51 | 2.8882 | 1.25 | **WIN** |
| 11 | CAT | 04-17 14:00 | 04-17 15:45 | 787.14 | 794.07 | 17 | 13381.38 | +117.81 | +0.88% | 0.99R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑784.1 | 4.7842 | 2.19 | **WIN** |

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

- ⚠️ **Profit factor 1.12 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.88R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:58:56.669Z*
