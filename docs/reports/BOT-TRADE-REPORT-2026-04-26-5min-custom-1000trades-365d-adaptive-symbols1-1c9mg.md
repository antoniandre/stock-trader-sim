# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T16:01:06.659Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $869.54 (-0.87%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 0% (0W / 13L) |
| Net P&L | $-869.54 (-0.87%) |
| Gross profit | $0 |
| Gross loss | $869.54 |
| Profit factor | 0 |
| Avg win | $0 |
| Avg loss | $66.89 |
| Payoff ratio | 0:1 |
| Expectancy | $-66.89 / trade |
| Max drawdown | 0.87% |
| Sharpe ratio (ann.) | -42.89 |
| Trades / active day | 1 |
| Avg confidence | 99.15% |
| Avg trade duration | 28 min |
| Avg risk ratio | 0.55R |
| Starting equity | $100,000 |
| Ending equity | $99,130.46 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 0% | $-62.16 | $-62.16 |
| Mid  10:30–11:30 | 5 | 0% | $-354.16 | $-70.83 |
| Noon 11:30–13:00 | 7 | 0% | $-453.22 | $-64.75 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INFY | 13 | 0 | 0% | $-869.54 | $-66.89 | 0 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 8 | 0 | 0% | $-485.57 | $-60.7 |
| breakout | 5 | 0 | 0% | $-383.97 | $-76.79 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 0 | 0% | $-869.54 | $-66.89 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 6 | 0 | $-56.49 | 2 | 0 | $-73.31 | 0.15% | 0 | reject |
| Symbol | INFY | 7 | 0 | $-56.61 | 6 | 0 | $-78.88 | 0.47% | 0 | reject |
| Behavior | neutral | 7 | 0 | $-56.61 | 6 | 0 | $-78.88 | 0.47% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-905.53 | 0 |
| +3 bps/side | $-977.5 | 0 |
| +5 bps/side | $-1049.46 | 0 |
| +10 bps/side | $-1229.39 | 0 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 11 |
| stagnation | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INFY | 05-02 14:15 | 05-02 14:40 | 18.01 | 17.93 | 777 | 13993.77 | -62.16 | -0.44% | 0.53R | 25m | market | early-reversal | trend | trend | neutral | 72.66 | ↓17.97 | 0.076 | 2.19 | **LOSS** |
| 2 | INFY | 09-11 16:25 | 09-11 16:45 | 17.08 | 17.01 | 819 | 13988.52 | -57.33 | -0.41% | 0.52R | 20m | market | early-reversal | breakout | breakout | neutral | 76.03 | ↑16.73 | 0.0603 | 3.48 | **LOSS** |
| 3 | INFY | 09-17 14:45 | 09-17 15:35 | 17.69 | 17.66 | 790 | 13975.1 | -23.7 | -0.17% | 0.24R | 50m | market | stagnation | trend | trend | neutral | 75.71 | ↑17.5 | 0.1775 | 1.8 | **LOSS** |
| 4 | INFY | 10-09 15:20 | 10-09 15:40 | 17.1 | 17.02 | 817 | 13970.7 | -65.36 | -0.47% | 0.67R | 20m | market | early-reversal | trend | trend | neutral | 71.43 | ↑16.97 | 0.0629 | 1.58 | **LOSS** |
| 5 | INFY | 11-05 14:30 | 11-05 14:50 | 16.44 | 16.34 | 795 | 13069.8 | -79.5 | -0.61% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 77.27 | ↓16.43 | 0.0059 | 1.14 | **LOSS** |
| 6 | INFY | 11-21 15:45 | 11-21 16:15 | 17.42 | 17.35 | 801 | 13953.42 | -56.07 | -0.4% | 0.57R | 30m | market | early-reversal | trend | trend | neutral | 72.63 | ↑17.25 | 0.0323 | 1.13 | **LOSS** |
| 7 | INFY | 12-18 16:00 | 12-18 16:25 | 18.71 | 18.64 | 745 | 13938.95 | -52.15 | -0.37% | 0.49R | 25m | market | early-reversal | trend | trend | neutral | 74.59 | ↑18.51 | 0.1173 | 1.22 | **LOSS** |
| 8 | INFY | 01-02 14:40 | 01-02 15:00 | 18.16 | 18.06 | 767 | 13928.72 | -76.7 | -0.55% | 0.64R | 20m | market | early-reversal | breakout | trend | neutral | 77 | ↓18.14 | 0.028 | 1.02 | **LOSS** |
| 9 | INFY | 01-15 16:10 | 01-15 17:15 | 18.92 | 18.88 | 736 | 13925.12 | -29.44 | -0.21% | 0.2R | 65m | market | stagnation | breakout | breakout | neutral | 68.42 | ↑18.68 | -0.142 | 2.63 | **LOSS** |
| 10 | INFY | 02-02 16:15 | 02-02 16:35 | 17.91 | 17.82 | 777 | 13916.07 | -69.93 | -0.5% | 0.71R | 20m | market | early-reversal | trend | trend | neutral | 65.82 | ↑17.75 | 0.0668 | 1.58 | **LOSS** |
| 11 | INFY | 02-24 15:25 | 02-24 15:50 | 14.05 | 13.94 | 990 | 13909.5 | -108.9 | -0.78% | 0.44R | 25m | market | early-reversal | breakout | breakout | neutral | 56.8 | ↑13.82 | 0.0035 | 1.1 | **LOSS** |
| 12 | INFY | 03-06 15:30 | 03-06 15:50 | 14.47 | 14.38 | 960 | 13891.2 | -86.4 | -0.62% | 0.35R | 20m | market | early-reversal | breakout | breakout | neutral | 51.79 | ↑14.33 | -0.0092 | 2.08 | **LOSS** |
| 13 | INFY | 03-31 16:40 | 03-31 17:00 | 13.63 | 13.53 | 1019 | 13888.97 | -101.9 | -0.73% | 0.96R | 20m | market | early-reversal | breakout | breakout | neutral | 72.37 | ↑13.44 | 0.0182 | 2.19 | **LOSS** |

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

- ⚠️ **Profit factor 0 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.55R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T16:01:06.659Z*
