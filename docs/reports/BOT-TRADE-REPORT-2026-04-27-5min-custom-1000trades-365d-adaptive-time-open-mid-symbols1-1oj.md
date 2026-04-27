# Bot Trade Report — 15 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:18:44.439Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $364.39 (-0.36%) over 15 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 15 |
| Win rate | 26.67% (4W / 11L) |
| Net P&L | $-364.39 (-0.36%) |
| Gross profit | $361.2 |
| Gross loss | $725.59 |
| Profit factor | 0.5 |
| Avg win | $90.3 |
| Avg loss | $65.96 |
| Payoff ratio | 1.37:1 |
| Expectancy | $-24.29 / trade |
| Max drawdown | 0.61% |
| Sharpe ratio (ann.) | -4.32 |
| Trades / active day | 1.07 |
| Avg confidence | 98.27% |
| Avg trade duration | 47 min |
| Avg risk ratio | 0.77R |
| Starting equity | $100,000 |
| Ending equity | $99,635.61 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 6 | 50% | $+168.06 | $28.01 |
| Mid  10:30–11:30 | 9 | 11.11% | $-532.45 | $-59.16 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| DG | 15 | 4 | 26.67% | $-364.39 | $-24.29 | 0.5 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 12 | 3 | 25% | $-205.81 | $-17.15 |
| breakout | 3 | 1 | 33.33% | $-158.58 | $-52.86 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 15 | 4 | 26.67% | $-364.39 | $-24.29 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 6 | 2.18 | $+28.01 | 0 | 0 | $+0 | 0% | 0 | watch |
| Setup | trend | 8 | 0.8 | $-6.56 | 4 | 0.25 | $-38.33 | 0.19% | 0.15 | reject |
| Symbol | DG | 9 | 1.16 | $+4.84 | 6 | 0.11 | $-67.99 | 0.44% | 0.07 | reject |
| Behavior | neutral | 9 | 1.16 | $+4.84 | 6 | 0.11 | $-67.99 | 0.44% | 0.07 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-402.94 | 0.47 |
| +3 bps/side | $-480.02 | 0.41 |
| +5 bps/side | $-557.1 | 0.37 |
| +10 bps/side | $-749.79 | 0.27 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 7 |
| timeout | 3 |
| stagnation | 2 |
| trim-profit-target | 1 |
| breakeven-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | DG | 05-15 14:00 | 05-15 14:55 | 89.8 | 90.64 | 77 | 13919 | +64.68 | +0.94% | 1R | 55m | market | trim-profit-target | breakout | trend | neutral | 76.18 | ↑88.98 | 0.4376 | 1.39 | **WIN** |
| 2 | DG | 05-15 14:00 | 05-15 15:45 | 89.8 | 91.72 | 78 | 13919 | +149.76 | +2.14% | 2.28R | 105m | market | timeout | breakout | trend | neutral | 76.18 | ↑88.98 | 0.4376 | 1.39 | **WIN** |
| 3 | DG | 05-20 15:15 | 05-20 15:45 | 102.53 | 102.15 | 136 | 13944.08 | -51.68 | -0.37% | 0.49R | 30m | market | early-reversal | trend | trend | neutral | 78.92 | ↑101.08 | 1.1002 | 1.11 | **LOSS** |
| 4 | DG | 06-11 14:15 | 06-11 15:05 | 111.97 | 111.74 | 125 | 13996.25 | -28.75 | -0.21% | 0.3R | 50m | market | stagnation | trend | trend | neutral | 66.43 | ↓111.67 | 0.2929 | 1.31 | **LOSS** |
| 5 | DG | 07-07 14:15 | 07-07 14:50 | 115.03 | 114.54 | 121 | 13918.63 | -59.29 | -0.43% | 0.61R | 35m | market | early-reversal | trend | trend | neutral | 74.86 | ↓114.35 | 0.2972 | 1.26 | **LOSS** |
| 6 | DG | 08-01 13:50 | 08-01 15:35 | 107.48 | 108.28 | 120 | 12897.6 | +96 | +0.74% | 0.78R | 105m | market | timeout | breakout | breakout | neutral | 79.13 | ↑106.95 | 0.3613 | 8.99 | **WIN** |
| 7 | DG | 09-23 15:15 | 09-23 15:30 | 103.45 | 103.29 | 135 | 13965.75 | -21.6 | -0.15% | 0.21R | 15m | market | breakeven-stop | trend | trend | neutral | 62.13 | ↑102.75 | 0.2244 | 1.62 | **LOSS** |
| 8 | DG | 10-08 14:15 | 10-08 14:35 | 97.58 | 97.2 | 143 | 13953.94 | -54.34 | -0.39% | 0.5R | 20m | market | early-reversal | trend | trend | neutral | 78.45 | ↓97.12 | 0.3823 | 1.3 | **LOSS** |
| 9 | DG | 12-03 14:30 | 12-03 14:50 | 111.32 | 110.91 | 125 | 13915 | -51.25 | -0.37% | 0.53R | 20m | market | early-reversal | trend | trend | neutral | 75.87 | ↓111.31 | 0.3219 | 2.08 | **LOSS** |
| 10 | DG | 12-16 14:45 | 12-16 15:05 | 135.09 | 134.37 | 103 | 13914.27 | -74.16 | -0.53% | 0.66R | 20m | market | early-reversal | breakout | breakout | neutral | 71.12 | ↑134.2 | 0.1232 | 2.02 | **LOSS** |
| 11 | DG | 01-20 14:35 | 01-20 14:55 | 150.42 | 148.48 | 93 | 13989.06 | -180.42 | -1.29% | 1.55R | 20m | market | stop-loss | breakout | breakout | neutral | 69.85 | ↓149.27 | 0.1087 | 1.47 | **LOSS** |
| 12 | DG | 02-02 14:30 | 02-02 14:50 | 144.17 | 143.52 | 96 | 13840.32 | -62.4 | -0.45% | 0.64R | 20m | market | early-reversal | trend | trend | neutral | 75.66 | ↓143.63 | 0.209 | 1.09 | **LOSS** |
| 13 | DG | 02-12 14:30 | 02-12 14:50 | 149.01 | 147.58 | 86 | 12814.86 | -122.98 | -0.96% | 1.37R | 20m | market | early-reversal | trend | trend | neutral | 70.8 | ↓148.62 | 0.381 | 1.27 | **LOSS** |
| 14 | DG | 03-10 15:00 | 03-10 16:45 | 147.83 | 148.37 | 94 | 13896.02 | +50.76 | +0.37% | 0.52R | 105m | market | timeout | trend | trend | neutral | 72.28 | ↑146.5 | 0.6448 | 1.21 | **WIN** |
| 15 | DG | 03-30 14:40 | 03-30 16:00 | 118.96 | 118.8 | 117 | 13918.32 | -18.72 | -0.13% | 0.16R | 80m | market | stagnation | trend | trend | neutral | 55.76 | ↓118 | 0.1569 | 1.22 | **LOSS** |

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

- ⚠️ **Profit factor 0.5 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.77R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:18:44.439Z*
