# Bot Trade Report — 14 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:58:53.667Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $72.47 (-0.07%) over 14 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 14 |
| Win rate | 35.71% (5W / 9L) |
| Net P&L | $-72.47 (-0.07%) |
| Gross profit | $458.81 |
| Gross loss | $531.28 |
| Profit factor | 0.86 |
| Avg win | $91.76 |
| Avg loss | $59.03 |
| Payoff ratio | 1.55:1 |
| Expectancy | $-5.18 / trade |
| Max drawdown | 0.21% |
| Sharpe ratio (ann.) | -0.91 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 61 min |
| Avg risk ratio | 0.63R |
| Starting equity | $100,000 |
| Ending equity | $99,927.53 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 14 | 35.71% | $-72.47 | $-5.18 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GE | 14 | 5 | 35.71% | $-72.47 | $-5.18 | 0.86 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 4 | 36.36% | $-223.41 | $-20.31 |
| breakout | 3 | 1 | 33.33% | $+150.94 | $+50.31 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 14 | 5 | 35.71% | $-72.47 | $-5.18 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GE | 8 | 0.47 | $-20.98 | 6 | 1.45 | $+15.89 | 0.21% | 1.05 | reject |
| Behavior | neutral | 8 | 0.47 | $-20.98 | 6 | 1.45 | $+15.89 | 0.21% | 1.05 | reject |
| Time slot | Open 9:30-10:30 | 8 | 0.47 | $-20.98 | 6 | 1.45 | $+15.89 | 0.21% | 1.05 | reject |
| Setup | trend | 6 | 0.58 | $-18.41 | 5 | 0.47 | $-22.58 | 0.21% | 0.28 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-111.35 | 0.8 |
| +3 bps/side | $-189.11 | 0.69 |
| +5 bps/side | $-266.87 | 0.59 |
| +10 bps/side | $-461.28 | 0.41 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| timeout | 5 |
| stagnation | 3 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GE | 06-25 14:20 | 06-25 14:50 | 162.24 | 161.59 | 86 | 13952.64 | -55.9 | -0.4% | 0.32R | 30m | market | early-reversal | trend | trend | neutral | 54.08 | ↑161.17 | 0.2939 | 1.48 | **LOSS** |
| 2 | GE | 07-02 14:25 | 07-02 14:45 | 162.06 | 161.01 | 86 | 13937.16 | -90.3 | -0.65% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 79.74 | ↓161.08 | 0.6726 | 2.64 | **LOSS** |
| 3 | GE | 07-16 14:15 | 07-16 16:00 | 161.4 | 162.87 | 86 | 13880.4 | +126.42 | +0.91% | 1.3R | 105m | market | timeout | trend | trend | neutral | 70.48 | ↑160.3 | 0.3374 | 1.92 | **WIN** |
| 4 | GE | 07-18 13:35 | 07-18 14:40 | 159.33 | 159.14 | 87 | 13861.71 | -16.53 | -0.12% | 0.17R | 65m | market | stagnation | breakout | breakout | neutral | 69.99 | ↑158.71 | 0.0726 | 1.65 | **LOSS** |
| 5 | GE | 08-01 13:35 | 08-01 14:45 | 173.01 | 172.5 | 80 | 13840.8 | -40.8 | -0.29% | 0.24R | 70m | market | stagnation | breakout | breakout | neutral | 60.87 | ↓172.25 | 0.482 | 1.97 | **LOSS** |
| 6 | GE | 09-25 14:00 | 09-25 14:25 | 190.64 | 190.07 | 73 | 13916.72 | -41.61 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 69.55 | ↑189.73 | 0.3348 | 1.36 | **LOSS** |
| 7 | GE | 11-01 14:25 | 11-01 14:45 | 175.2 | 174.26 | 79 | 13840.8 | -74.26 | -0.54% | 0.68R | 20m | market | early-reversal | trend | trend | neutral | 74.57 | ↑174.11 | 0.8655 | 1.04 | **LOSS** |
| 8 | GE | 05-01 14:15 | 05-01 16:00 | 203.59 | 203.96 | 68 | 13844.12 | +25.16 | +0.18% | 0.2R | 105m | market | timeout | trend | trend | neutral | 76.81 | ↑202.55 | 0.8411 | 1.31 | **WIN** |
| 9 | GE | 05-27 13:35 | 05-27 15:20 | 236.46 | 239.99 | 59 | 13951.14 | +208.27 | +1.49% | 2.13R | 105m | market | timeout | breakout | breakout | neutral | 75.79 | ↑235.97 | 0.3924 | 1.55 | **WIN** |
| 10 | GE | 06-11 14:05 | 06-11 15:50 | 245.12 | 246.2 | 57 | 13971.84 | +61.56 | +0.44% | 0.44R | 105m | market | timeout | trend | trend | neutral | 65.94 | ↑242.1 | 0.837 | 1.24 | **WIN** |
| 11 | GE | 07-11 14:05 | 07-11 15:00 | 255.58 | 255.17 | 54 | 13801.32 | -22.14 | -0.16% | 0.19R | 55m | market | stagnation | trend | trend | neutral | 76.08 | ↑253.28 | 0.7828 | 1.4 | **LOSS** |
| 12 | GE | 09-16 14:15 | 09-16 14:40 | 292.41 | 289.79 | 47 | 13743.27 | -123.14 | -0.9% | 0.91R | 25m | market | early-reversal | trend | trend | neutral | 77.08 | ↓290.63 | 1.4852 | 1.08 | **LOSS** |
| 13 | GE | 10-24 14:15 | 10-24 14:35 | 309.85 | 308.37 | 45 | 13943.25 | -66.6 | -0.48% | 0.69R | 20m | market | early-reversal | trend | trend | neutral | 69.92 | ↓308.52 | 0.9026 | 1.35 | **LOSS** |
| 14 | GE | 04-14 14:15 | 04-14 16:00 | 317.2 | 318.05 | 44 | 13956.8 | +37.4 | +0.27% | 0.31R | 105m | market | timeout | trend | trend | neutral | 78.87 | ↑315.16 | 1.8512 | 1.09 | **WIN** |

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

- ⚠️ **Profit factor 0.86 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.63R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:58:53.667Z*
