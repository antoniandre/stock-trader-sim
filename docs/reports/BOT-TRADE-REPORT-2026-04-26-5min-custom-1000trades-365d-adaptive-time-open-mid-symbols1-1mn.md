# Bot Trade Report — 23 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:18:56.127Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $187.87 (-0.19%) over 23 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 23 |
| Win rate | 39.13% (9W / 14L) |
| Net P&L | $-187.87 (-0.19%) |
| Gross profit | $976.02 |
| Gross loss | $1163.89 |
| Profit factor | 0.84 |
| Avg win | $108.45 |
| Avg loss | $83.14 |
| Payoff ratio | 1.3:1 |
| Expectancy | $-8.17 / trade |
| Max drawdown | 0.83% |
| Sharpe ratio (ann.) | -0.99 |
| Trades / active day | 1.05 |
| Avg confidence | 100% |
| Avg trade duration | 52 min |
| Avg risk ratio | 0.93R |
| Starting equity | $100,000 |
| Ending equity | $99,812.13 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 22.22% | $+119.46 | $13.27 |
| Mid  10:30–11:30 | 14 | 50% | $-307.33 | $-21.95 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| BA | 23 | 9 | 39.13% | $-187.87 | $-8.17 | 0.84 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 19 | 8 | 42.11% | $-61.92 | $-3.26 |
| breakout | 4 | 1 | 25% | $-125.95 | $-31.49 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 23 | 9 | 39.13% | $-187.87 | $-8.17 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Time slot | Open 9:30-10:30 | 8 | 1.56 | $+22.52 | 1 | 0 | $-60.72 | 0.06% | 0 | watch |
| Symbol | BA | 13 | 2.82 | $+44.73 | 10 | 0.09 | $-76.93 | 0.84% | 0.06 | watch |
| Behavior | neutral | 13 | 2.82 | $+44.73 | 10 | 0.09 | $-76.93 | 0.84% | 0.06 | watch |
| Setup | trend | 13 | 2.82 | $+44.73 | 6 | 0.1 | $-107.23 | 0.71% | 0.07 | watch |
| Time slot | Mid 10:30-11:30 | 5 | ∞ | $+80.26 | 9 | 0.09 | $-78.74 | 0.78% | 0.06 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-249.1 | 0.79 |
| +3 bps/side | $-371.54 | 0.71 |
| +5 bps/side | $-493.99 | 0.64 |
| +10 bps/side | $-800.12 | 0.49 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 10 |
| timeout | 6 |
| stagnation | 3 |
| profit-target | 1 |
| trim-profit-target | 1 |
| breakeven-stop | 1 |
| stop-loss | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | BA | 05-01 14:25 | 05-01 14:45 | 184.46 | 183.77 | 75 | 13834.5 | -51.75 | -0.37% | 0.41R | 20m | market | early-reversal | trend | trend | neutral | 64.45 | ↑183.41 | 0.5286 | 1.37 | **LOSS** |
| 2 | BA | 05-02 14:10 | 05-02 14:40 | 186.94 | 186.11 | 74 | 13833.56 | -61.42 | -0.44% | 0.48R | 30m | market | early-reversal | trend | trend | neutral | 69.87 | ↓185.96 | 0.7097 | 1.13 | **LOSS** |
| 3 | BA | 05-14 14:10 | 05-14 15:00 | 206.79 | 205.79 | 67 | 13854.93 | -67 | -0.48% | 0.33R | 50m | market | stagnation | breakout | trend | neutral | 63.24 | ↓206.26 | 0.4289 | 1.98 | **LOSS** |
| 4 | BA | 05-29 14:00 | 05-29 14:30 | 203.81 | 208.91 | 68 | 13859.08 | +346.8 | +2.5% | 3.57R | 30m | market | profit-target | trend | trend | neutral | 78.5 | ↑202.3 | 0.2164 | 1.07 | **WIN** |
| 5 | BA | 06-09 14:45 | 06-09 16:30 | 214.81 | 216.26 | 65 | 13962.65 | +94.25 | +0.68% | 0.97R | 105m | market | timeout | trend | trend | neutral | 74.91 | ↑212.9 | 1.2914 | 1.3 | **WIN** |
| 6 | BA | 06-16 14:10 | 06-16 14:40 | 203.82 | 202.93 | 68 | 13859.76 | -60.52 | -0.44% | 0.41R | 30m | market | early-reversal | trend | trend | neutral | 73.67 | ↑201.15 | 0.7237 | 1 | **LOSS** |
| 7 | BA | 06-23 14:15 | 06-23 15:15 | 201.65 | 201.48 | 69 | 13913.85 | -11.73 | -0.08% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 79.37 | ↑199.72 | 0.5741 | 1.89 | **LOSS** |
| 8 | BA | 07-02 15:10 | 07-02 16:55 | 212.25 | 212.56 | 66 | 14008.5 | +20.46 | +0.15% | 0.21R | 105m | market | timeout | trend | trend | neutral | 61.29 | ↑210.96 | 0.4336 | 2.11 | **WIN** |
| 9 | BA | 07-23 15:05 | 07-23 16:30 | 231.62 | 233.85 | 30 | 13897.2 | +66.9 | +0.96% | 1.37R | 85m | market | trim-profit-target | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 10 | BA | 07-23 15:05 | 07-23 16:50 | 231.62 | 233.86 | 30 | 13897.2 | +67.2 | +0.97% | 1.39R | 105m | market | timeout | trend | trend | neutral | 72.68 | ↑230.49 | 0.5524 | 1.38 | **WIN** |
| 11 | BA | 08-12 14:10 | 08-12 14:30 | 231.06 | 229.93 | 60 | 13863.6 | -67.8 | -0.49% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 79.22 | ↑229.53 | 1.0743 | 1.47 | **LOSS** |
| 12 | BA | 10-06 14:10 | 10-06 15:55 | 218.49 | 220.89 | 64 | 13983.36 | +153.6 | +1.1% | 1.33R | 105m | market | timeout | trend | trend | neutral | 62.39 | ↑216.99 | 0.3928 | 1.17 | **WIN** |
| 13 | BA | 11-03 14:30 | 11-03 16:15 | 202.63 | 204.84 | 69 | 13981.47 | +152.49 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 74.05 | ↑202.47 | 0.3587 | 1.62 | **WIN** |
| 14 | BA | 12-08 14:30 | 12-08 16:15 | 204.21 | 205.25 | 68 | 13886.28 | +70.72 | +0.51% | 0.73R | 105m | market | timeout | trend | trend | neutral | 68.75 | ↑203.88 | 0.1894 | 2.98 | **WIN** |
| 15 | BA | 12-12 14:30 | 12-12 14:50 | 203.31 | 202.42 | 69 | 14028.39 | -61.41 | -0.44% | 0.62R | 20m | market | early-reversal | breakout | breakout | neutral | 69.66 | ↓202.83 | -0.0829 | 1.87 | **LOSS** |
| 16 | BA | 12-16 14:50 | 12-16 15:10 | 208.63 | 207.81 | 67 | 13978.21 | -54.94 | -0.39% | 0.56R | 20m | market | early-reversal | breakout | breakout | neutral | 79.71 | ↑206.72 | 0.712 | 1.42 | **LOSS** |
| 17 | BA | 01-06 15:20 | 01-06 15:40 | 231.31 | 229.57 | 60 | 13878.6 | -104.4 | -0.75% | 0.85R | 20m | market | early-reversal | trend | trend | neutral | 77.53 | ↓230.25 | 0.5498 | 1.27 | **LOSS** |
| 18 | BA | 01-09 14:35 | 01-09 15:35 | 231.46 | 231.24 | 60 | 13887.6 | -13.2 | -0.1% | 0.14R | 60m | market | stagnation | breakout | breakout | neutral | 80.63 | ↓230.49 | 0.3445 | 2.97 | **LOSS** |
| 19 | BA | 01-22 14:30 | 01-22 14:55 | 252.81 | 251.66 | 55 | 13904.55 | -63.25 | -0.45% | 0.64R | 25m | market | early-reversal | trend | trend | neutral | 65.06 | ↓252.64 | 0.6966 | 1.01 | **LOSS** |
| 20 | BA | 02-03 14:30 | 02-03 14:50 | 237.28 | 235.31 | 59 | 13999.52 | -116.23 | -0.83% | 0.87R | 20m | market | early-reversal | trend | trend | neutral | 60.12 | ↓237.37 | -0.2119 | 4.39 | **LOSS** |
| 21 | BA | 02-24 14:40 | 02-24 15:30 | 233.05 | 233.11 | 60 | 13983 | +3.6 | +0.03% | 0.04R | 50m | market | breakeven-stop | breakout | breakout | neutral | 75.46 | ↓231.34 | 0.4636 | 1.63 | **WIN** |
| 22 | BA | 03-10 14:55 | 03-10 15:00 | 225.81 | 219.85 | 62 | 14000.22 | -369.52 | -2.64% | 3.72R | 5m | market | stop-loss | trend | trend | neutral | 60.83 | ↓223.71 | 0.5243 | 1.52 | **LOSS** |
| 23 | BA | 03-25 14:00 | 03-25 14:20 | 200.31 | 199.43 | 69 | 13821.39 | -60.72 | -0.44% | 0.54R | 20m | market | early-reversal | trend | trend | neutral | 77.82 | ↑199.17 | 0.8933 | 1 | **LOSS** |

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

- ⚠️ **Profit factor 0.84 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.93R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:18:56.127Z*
