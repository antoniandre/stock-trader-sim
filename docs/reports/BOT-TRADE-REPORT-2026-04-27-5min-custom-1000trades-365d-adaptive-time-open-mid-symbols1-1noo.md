# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T06:22:07.071Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $637.69 (-0.64%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 30.77% (4W / 9L) |
| Net P&L | $-637.69 (-0.64%) |
| Gross profit | $207.06 |
| Gross loss | $844.75 |
| Profit factor | 0.25 |
| Avg win | $51.77 |
| Avg loss | $93.86 |
| Payoff ratio | 0.55:1 |
| Expectancy | $-49.05 / trade |
| Max drawdown | 0.68% |
| Sharpe ratio (ann.) | -7.04 |
| Trades / active day | 1.08 |
| Avg confidence | 100% |
| Avg trade duration | 60 min |
| Avg risk ratio | 0.7R |
| Starting equity | $100,000 |
| Ending equity | $99,362.31 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 7 | 14.29% | $-362.88 | $-51.84 |
| Mid  10:30–11:30 | 6 | 50% | $-274.81 | $-45.8 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| NKE | 13 | 4 | 30.77% | $-637.69 | $-49.05 | 0.25 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 4 | 36.36% | $-259.03 | $-23.55 |
| breakout | 2 | 0 | 0% | $-378.66 | $-189.33 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 4 | 30.77% | $-637.69 | $-49.05 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Setup | trend | 7 | 0.27 | $-42.84 | 4 | 1.72 | $+10.21 | 0.06% | 0.99 | reject |
| Time slot | Open 9:30-10:30 | 6 | 0.15 | $-58.34 | 1 | 0 | $-12.84 | 0.01% | 0 | reject |
| Symbol | NKE | 7 | 0.27 | $-42.84 | 6 | 0.22 | $-56.3 | 0.38% | 0.17 | reject |
| Behavior | neutral | 7 | 0.27 | $-42.84 | 6 | 0.22 | $-56.3 | 0.38% | 0.17 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-671.05 | 0.23 |
| +3 bps/side | $-737.74 | 0.2 |
| +5 bps/side | $-804.44 | 0.17 |
| +10 bps/side | $-971.19 | 0.11 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 4 |
| timeout | 3 |
| stagnation | 2 |
| trailing-stop | 1 |
| stop-loss | 1 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | NKE | 05-16 14:10 | 05-16 15:00 | 63.37 | 63.3 | 220 | 13941.4 | -15.4 | -0.11% | 0.13R | 50m | market | stagnation | trend | trend | neutral | 77.53 | ↑63.01 | 0.2723 | 2.19 | **LOSS** |
| 2 | NKE | 06-04 14:00 | 06-04 14:45 | 62.91 | 62.7 | 222 | 13966.02 | -46.62 | -0.33% | 0.47R | 45m | market | early-reversal | trend | trend | neutral | 77.24 | ↓62.69 | 0.2102 | 1.41 | **LOSS** |
| 3 | NKE | 07-02 14:00 | 07-02 14:40 | 74.55 | 73.63 | 187 | 13940.85 | -172.04 | -1.23% | 1.08R | 40m | market | trailing-stop | trend | trend | neutral | 70.02 | ↓74.16 | 0.3446 | 1.21 | **LOSS** |
| 4 | NKE | 07-10 14:15 | 07-10 16:00 | 74.87 | 75.19 | 186 | 13925.82 | +59.52 | +0.43% | 0.5R | 105m | market | timeout | trend | trend | neutral | 79.4 | ↑74 | 0.2429 | 1.34 | **WIN** |
| 5 | NKE | 08-25 14:00 | 08-25 14:20 | 79.76 | 79.18 | 175 | 13958 | -101.5 | -0.73% | 0.9R | 20m | market | early-reversal | trend | trend | neutral | 72.03 | ↓79.36 | 0.2245 | 1.49 | **LOSS** |
| 6 | NKE | 09-11 14:00 | 09-11 14:20 | 75.36 | 74.96 | 185 | 13941.6 | -74 | -0.53% | 0.65R | 20m | market | early-reversal | trend | trend | neutral | 79.46 | ↓74.98 | 0.278 | 1.24 | **LOSS** |
| 7 | NKE | 12-18 14:35 | 12-18 16:20 | 66.54 | 66.78 | 209 | 13906.86 | +50.16 | +0.36% | 0.51R | 105m | market | timeout | trend | trend | neutral | 69.5 | ↑66.32 | 0.0512 | 2.59 | **WIN** |
| 8 | NKE | 01-09 14:50 | 01-09 15:00 | 66.41 | 64.72 | 210 | 13946.1 | -354.9 | -2.54% | 2.62R | 10m | market | stop-loss | breakout | breakout | neutral | 73.85 | ↓65.94 | 0.1621 | 1.17 | **LOSS** |
| 9 | NKE | 01-21 14:40 | 01-21 16:05 | 64.38 | 64.27 | 216 | 13906.08 | -23.76 | -0.17% | 0.24R | 85m | market | breakeven-stop | breakout | breakout | neutral | 90.32 | ↓64.23 | 0.2055 | 1.75 | **LOSS** |
| 10 | NKE | 02-10 15:15 | 02-10 16:45 | 63.32 | 63.84 | 109 | 13867.08 | +56.68 | +0.82% | 0.85R | 90m | market | trim-profit-target | trend | trend | neutral | 73.08 | ↑62.97 | 0.1246 | 1.28 | **WIN** |
| 11 | NKE | 02-10 15:15 | 02-10 17:00 | 63.32 | 63.69 | 110 | 13867.08 | +40.7 | +0.58% | 0.6R | 105m | market | timeout | trend | trend | neutral | 73.08 | ↑62.97 | 0.1246 | 1.28 | **WIN** |
| 12 | NKE | 03-24 15:15 | 03-24 15:55 | 53.96 | 53.79 | 257 | 13867.72 | -43.69 | -0.32% | 0.38R | 40m | market | early-reversal | trend | trend | neutral | 76.28 | ↑53.37 | 0.2063 | 1.25 | **LOSS** |
| 13 | NKE | 04-09 14:25 | 04-09 15:25 | 43.31 | 43.27 | 321 | 13902.51 | -12.84 | -0.09% | 0.11R | 60m | market | stagnation | trend | trend | neutral | 60 | ↑43 | 0.0541 | 1.35 | **LOSS** |

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

- ⚠️ **Profit factor 0.25 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.7R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T06:22:07.071Z*
