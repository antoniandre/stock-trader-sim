# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:14:51.116Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $401.62 (-0.4%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 23.08% (3W / 10L) |
| Net P&L | $-401.62 (-0.4%) |
| Gross profit | $310.5 |
| Gross loss | $712.12 |
| Profit factor | 0.44 |
| Avg win | $103.5 |
| Avg loss | $71.21 |
| Payoff ratio | 1.45:1 |
| Expectancy | $-30.89 / trade |
| Max drawdown | 0.49% |
| Sharpe ratio (ann.) | -5.01 |
| Trades / active day | 1.08 |
| Avg confidence | 99% |
| Avg trade duration | 47 min |
| Avg risk ratio | 0.68R |
| Starting equity | $100,000 |
| Ending equity | $99,598.38 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 2 | 0% | $-133.89 | $-66.94 |
| Mid  10:30–11:30 | 11 | 27.27% | $-267.73 | $-24.34 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| INTU | 13 | 3 | 23.08% | $-401.62 | $-30.89 | 0.44 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 2 | 18.18% | $-507.44 | $-46.13 |
| breakout | 2 | 1 | 50% | $+105.82 | $+52.91 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| noisyHighBeta | 1 | 0 | 0% | $-60.16 | $-60.16 |
| neutral | 12 | 3 | 25% | $-341.46 | $-28.45 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Mid 10:30-11:30 | 6 | 0.63 | $-10.39 | 5 | 0.5 | $-41.07 | 0.41% | 0.42 | reject |
| Behavior | neutral | 7 | 0.47 | $-17.1 | 5 | 0.48 | $-44.35 | 0.43% | 0.4 | reject |
| Symbol | INTU | 7 | 0.47 | $-17.1 | 6 | 0.42 | $-46.99 | 0.49% | 0.35 | reject |
| Setup | trend | 6 | 0.83 | $-3.57 | 5 | 0 | $-97.21 | 0.49% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-433.32 | 0.41 |
| +3 bps/side | $-496.69 | 0.37 |
| +5 bps/side | $-560.05 | 0.34 |
| +10 bps/side | $-718.5 | 0.26 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 6 |
| stagnation | 2 |
| timeout | 2 |
| trim-profit-target | 1 |
| trailing-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | INTU | 05-01 14:30 | 05-01 15:55 | 631.67 | 630.76 | 22 | 13896.74 | -20.02 | -0.14% | 0.18R | 85m | market | stagnation | trend | trend | neutral | 68.27 | ↑627.98 | 1.942 | 1.17 | **LOSS** |
| 2 | INTU | 05-15 15:20 | 05-15 16:10 | 663.28 | 662.82 | 21 | 13928.88 | -9.66 | -0.07% | 0.1R | 50m | market | stagnation | trend | trend | neutral | 78.63 | ↑657.44 | 1.4672 | 1.73 | **LOSS** |
| 3 | INTU | 08-28 14:30 | 08-28 14:55 | 670.71 | 668.67 | 20 | 13414.2 | -40.8 | -0.3% | 0.43R | 25m | market | early-reversal | trend | trend | neutral | 79.04 | ↑665.43 | 1.5439 | 1.48 | **LOSS** |
| 4 | INTU | 09-18 15:00 | 09-18 15:45 | 679.16 | 684.83 | 10 | 13583.2 | +56.7 | +0.83% | 1.19R | 45m | market | trim-profit-target | trend | trend | neutral | 79.23 | ↑672.97 | 4.011 | 1.74 | **WIN** |
| 5 | INTU | 09-18 15:00 | 09-18 16:45 | 679.16 | 684.13 | 10 | 13583.2 | +49.7 | +0.73% | 1.04R | 105m | market | timeout | trend | trend | neutral | 79.23 | ↑672.97 | 4.011 | 1.74 | **WIN** |
| 6 | INTU | 10-31 14:00 | 10-31 14:20 | 665.64 | 662.91 | 21 | 13978.44 | -57.33 | -0.41% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 75 | ↑661.19 | 0.1938 | 2.54 | **LOSS** |
| 7 | INTU | 11-18 14:45 | 11-18 15:05 | 656.71 | 652.03 | 21 | 13790.91 | -98.28 | -0.71% | 0.7R | 20m | market | early-reversal | breakout | breakout | neutral | 71.13 | ↓654.94 | 1.7238 | 2.41 | **LOSS** |
| 8 | INTU | 01-22 14:40 | 01-22 16:25 | 533.88 | 541.73 | 26 | 13880.88 | +204.1 | +1.47% | 2.04R | 105m | market | timeout | breakout | breakout | neutral | 73.56 | ↑531.44 | 1.6871 | 1.46 | **WIN** |
| 9 | INTU | 02-13 15:25 | 02-13 15:45 | 399.74 | 396.4 | 35 | 13990.9 | -116.9 | -0.84% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 53.95 | ↑395.52 | 0.6509 | 1.01 | **LOSS** |
| 10 | INTU | 02-20 14:30 | 02-20 15:35 | 384.48 | 383.94 | 36 | 13841.28 | -19.44 | -0.14% | 0.19R | 65m | market | trailing-stop | trend | trend | neutral | 62.54 | ↓382.83 | 0.3251 | 1.35 | **LOSS** |
| 11 | INTU | 03-02 15:20 | 03-02 15:45 | 423.39 | 419.63 | 16 | 6774.24 | -60.16 | -0.89% | 0.45R | 25m | market | early-reversal | breakout | trend | noisyHighBeta | 76.58 | ↑417.03 | 5.0821 | 1.06 | **LOSS** |
| 12 | INTU | 03-12 14:50 | 03-12 15:10 | 449.51 | 442.64 | 31 | 13934.81 | -212.97 | -1.53% | 0.97R | 20m | market | stop-loss | trend | trend | neutral | 57.34 | ↓445.26 | 2.6641 | 1.47 | **LOSS** |
| 13 | INTU | 04-22 14:05 | 04-22 14:30 | 412.93 | 410.61 | 33 | 13626.69 | -76.56 | -0.56% | 0.44R | 25m | market | early-reversal | trend | trend | neutral | 71.87 | ↓410.54 | 1.1046 | 1.29 | **LOSS** |

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

- ⚠️ **Profit factor 0.44 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.68R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:14:51.116Z*
