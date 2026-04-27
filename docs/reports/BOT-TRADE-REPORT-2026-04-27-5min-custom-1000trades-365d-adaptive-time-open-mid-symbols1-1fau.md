# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:22:03.291Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $350.39 (-0.35%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 23.08% (3W / 10L) |
| Net P&L | $-350.39 (-0.35%) |
| Gross profit | $234.77 |
| Gross loss | $585.16 |
| Profit factor | 0.4 |
| Avg win | $78.26 |
| Avg loss | $58.52 |
| Payoff ratio | 1.34:1 |
| Expectancy | $-26.95 / trade |
| Max drawdown | 0.49% |
| Sharpe ratio (ann.) | -6.28 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 58 min |
| Avg risk ratio | 0.53R |
| Starting equity | $100,000 |
| Ending equity | $99,649.61 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 5 | 40% | $-16.76 | $-3.35 |
| Mid  10:30–11:30 | 8 | 12.5% | $-333.63 | $-41.7 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| CAT | 13 | 3 | 23.08% | $-350.39 | $-26.95 | 0.4 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 7 | 1 | 14.29% | $-314.1 | $-44.87 |
| trend | 6 | 2 | 33.33% | $-36.29 | $-6.05 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 3 | 23.08% | $-350.39 | $-26.95 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | CAT | 7 | 0.13 | $-43.63 | 6 | 0.81 | $-7.5 | 0.19% | 0.56 | reject |
| Behavior | neutral | 7 | 0.13 | $-43.63 | 6 | 0.81 | $-7.5 | 0.19% | 0.56 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-385.9 | 0.37 |
| +3 bps/side | $-456.88 | 0.32 |
| +5 bps/side | $-527.88 | 0.27 |
| +10 bps/side | $-705.4 | 0.18 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| timeout | 3 |
| stagnation | 2 |
| breakeven-stop | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | CAT | 05-02 13:35 | 05-02 13:55 | 321.97 | 319.86 | 43 | 13844.71 | -90.73 | -0.66% | 0.85R | 20m | market | early-reversal | breakout | breakout | neutral | 80.19 | ↓320.57 | 1.2388 | 1.86 | **LOSS** |
| 2 | CAT | 06-03 14:20 | 06-03 16:05 | 348.69 | 349.85 | 40 | 13947.6 | +46.4 | +0.33% | 0.47R | 105m | market | timeout | trend | trend | neutral | 74.25 | ↑346.77 | 0.9755 | 1.35 | **WIN** |
| 3 | CAT | 07-23 13:40 | 07-23 14:00 | 425.63 | 423.04 | 32 | 13620.16 | -82.88 | -0.61% | 0.87R | 20m | market | early-reversal | breakout | breakout | neutral | 79.06 | ↓423.77 | 1.4348 | 1.35 | **LOSS** |
| 4 | CAT | 08-04 14:10 | 08-04 15:35 | 434.16 | 433.93 | 32 | 13893.12 | -7.36 | -0.05% | 0.07R | 85m | market | stagnation | trend | trend | neutral | 70.98 | ↓432.39 | 1.3959 | 1.15 | **LOSS** |
| 5 | CAT | 08-19 14:40 | 08-19 15:00 | 421.82 | 419.28 | 33 | 13920.06 | -83.82 | -0.6% | 0.58R | 20m | market | early-reversal | trend | trend | neutral | 73.73 | ↑418.45 | 2.419 | 1.23 | **LOSS** |
| 6 | CAT | 10-03 14:35 | 10-03 15:20 | 501.72 | 499.36 | 27 | 13546.44 | -63.72 | -0.47% | 0.6R | 45m | market | early-reversal | trend | trend | neutral | 78.88 | ↑498.27 | 2.6344 | 2.3 | **LOSS** |
| 7 | CAT | 11-05 14:45 | 11-05 16:10 | 560.02 | 559.05 | 24 | 13440.48 | -23.28 | -0.17% | 0.17R | 85m | market | breakeven-stop | breakout | breakout | neutral | 82.94 | ↓555.89 | 1.2443 | 1.27 | **LOSS** |
| 8 | CAT | 11-19 14:45 | 11-19 15:50 | 556.38 | 555.83 | 25 | 13909.5 | -13.75 | -0.1% | 0.14R | 65m | market | stagnation | breakout | breakout | neutral | 71.25 | ↓552.77 | 0.8768 | 1.71 | **LOSS** |
| 9 | CAT | 01-30 14:35 | 01-30 15:00 | 671.65 | 667.17 | 20 | 13433 | -89.6 | -0.67% | 0.56R | 25m | market | early-reversal | breakout | breakout | neutral | 74.09 | ↓667.39 | 0.2727 | 2.1 | **LOSS** |
| 10 | CAT | 02-20 15:00 | 02-20 15:30 | 768.87 | 764.18 | 18 | 13839.66 | -84.42 | -0.61% | 0.62R | 30m | market | early-reversal | breakout | breakout | neutral | 74.85 | ↑760.33 | 1.1734 | 1.38 | **LOSS** |
| 11 | CAT | 03-04 14:45 | 03-04 16:30 | 737.17 | 741.09 | 18 | 13269.06 | +70.56 | +0.53% | 0.48R | 105m | market | timeout | breakout | breakout | neutral | 77.19 | ↑736.17 | 3.3703 | 1.57 | **WIN** |
| 12 | CAT | 03-24 15:15 | 03-24 15:55 | 717.14 | 714.74 | 19 | 13625.66 | -45.6 | -0.33% | 0.43R | 40m | market | early-reversal | trend | trend | neutral | 72.48 | ↑708.26 | 3.7299 | 1.85 | **LOSS** |
| 13 | CAT | 04-17 14:00 | 04-17 15:45 | 787.14 | 794.07 | 17 | 13381.38 | +117.81 | +0.88% | 0.99R | 105m | market | timeout | trend | trend | neutral | 75.87 | ↑784.1 | 4.7842 | 2.19 | **WIN** |

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

- ⚠️ **Profit factor 0.4 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.53R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:22:03.291Z*
