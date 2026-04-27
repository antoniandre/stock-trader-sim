# Bot Trade Report — 12 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T08:59:04.175Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $56.51 (+0.06%) over 12 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 12 |
| Win rate | 33.33% (4W / 8L) |
| Net P&L | $+56.51 (+0.06%) |
| Gross profit | $482.5 |
| Gross loss | $425.99 |
| Profit factor | 1.13 |
| Avg win | $120.63 |
| Avg loss | $53.25 |
| Payoff ratio | 2.27:1 |
| Expectancy | $+4.71 / trade |
| Max drawdown | 0.22% |
| Sharpe ratio (ann.) | 0.72 |
| Trades / active day | 1.09 |
| Avg confidence | 100% |
| Avg trade duration | 68 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $100,056.51 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 12 | 33.33% | $+56.51 | $4.71 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| GOOGL | 12 | 4 | 33.33% | $+56.51 | $+4.71 | 1.13 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 2 | 1 | 50% | $+64.15 | $+32.08 |
| trend | 10 | 3 | 30% | $-7.64 | $-0.76 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 12 | 4 | 33.33% | $+56.51 | $+4.71 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | GOOGL | 7 | 1.63 | $+26.72 | 5 | 0 | $-26.1 | 0.13% | 0 | watch |
| Behavior | neutral | 7 | 1.63 | $+26.72 | 5 | 0 | $-26.1 | 0.13% | 0 | watch |
| Time slot | Open 9:30-10:30 | 7 | 1.63 | $+26.72 | 5 | 0 | $-26.1 | 0.13% | 0 | watch |
| Setup | trend | 5 | 1.58 | $+24.57 | 5 | 0 | $-26.1 | 0.13% | 0 | watch |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+25.87 | 1.06 |
| +3 bps/side | $-35.45 | 0.93 |
| +5 bps/side | $-96.76 | 0.82 |
| +10 bps/side | $-250.04 | 0.61 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 4 |
| timeout | 3 |
| stagnation | 2 |
| breakeven-stop | 2 |
| trim-profit-target | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | GOOGL | 05-07 13:45 | 05-07 14:05 | 170.89 | 169.88 | 81 | 13842.09 | -81.81 | -0.59% | 0.67R | 20m | market | early-reversal | breakout | breakout | neutral | 77.47 | ↓170.13 | 0.7463 | 1.66 | **LOSS** |
| 2 | GOOGL | 06-25 14:15 | 06-25 16:00 | 181.42 | 182.44 | 77 | 13969.34 | +78.54 | +0.56% | 0.8R | 105m | market | timeout | trend | trend | neutral | 77.51 | ↑180.5 | 0.5082 | 1.46 | **WIN** |
| 3 | GOOGL | 08-23 14:00 | 08-23 14:45 | 165.72 | 164.53 | 84 | 13920.48 | -99.96 | -0.72% | 1.01R | 45m | market | early-reversal | trend | trend | neutral | 71.08 | ↓165 | 0.1746 | 2.03 | **LOSS** |
| 4 | GOOGL | 10-15 14:00 | 10-15 14:30 | 167.16 | 165.79 | 83 | 13874.28 | -113.71 | -0.82% | 1.05R | 30m | market | early-reversal | trend | trend | neutral | 72.09 | ↓166.33 | 0.4606 | 1.81 | **LOSS** |
| 5 | GOOGL | 05-14 14:20 | 05-14 15:10 | 162.29 | 164.11 | 43 | 13956.94 | +78.26 | +1.12% | 1.05R | 50m | market | trim-profit-target | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 6 | GOOGL | 05-14 14:20 | 05-14 16:05 | 162.29 | 166.47 | 43 | 13956.94 | +179.74 | +2.58% | 2.41R | 105m | market | timeout | trend | trend | neutral | 75 | ↑161.11 | 0.6595 | 1.37 | **WIN** |
| 7 | GOOGL | 05-21 14:00 | 05-21 15:45 | 169.82 | 171.6 | 82 | 13925.24 | +145.96 | +1.05% | 0.91R | 105m | market | timeout | breakout | breakout | neutral | 94.29 | ↑167.05 | 0.9481 | 2.24 | **WIN** |
| 8 | GOOGL | 05-27 14:00 | 05-27 14:55 | 172.16 | 171.77 | 81 | 13944.96 | -31.59 | -0.23% | 0.2R | 55m | market | stagnation | trend | trend | neutral | 70.49 | ↑171.08 | 0.5041 | 1.17 | **LOSS** |
| 9 | GOOGL | 08-08 14:10 | 08-08 15:55 | 200.92 | 200.91 | 69 | 13863.48 | -0.69 | 0% | 0R | 105m | market | breakeven-stop | trend | trend | neutral | 79.34 | ↑199.69 | 1.5443 | 1.36 | **LOSS** |
| 10 | GOOGL | 08-15 14:10 | 08-15 15:00 | 206 | 205.42 | 68 | 14008 | -39.44 | -0.28% | 0.33R | 50m | market | stagnation | trend | trend | neutral | 71.45 | ↑204.72 | 0.5141 | 2.61 | **LOSS** |
| 11 | GOOGL | 10-15 14:00 | 10-15 15:45 | 248.93 | 248.74 | 56 | 13940.08 | -10.64 | -0.08% | 0.08R | 105m | market | breakeven-stop | trend | trend | neutral | 68.75 | ↓247.48 | 0.3208 | 2.53 | **LOSS** |
| 12 | GOOGL | 03-11 14:25 | 03-11 15:05 | 311.03 | 309.96 | 45 | 13996.35 | -48.15 | -0.34% | 0.4R | 40m | market | early-reversal | trend | trend | neutral | 74.34 | ↑308.58 | 0.7211 | 1.1 | **LOSS** |

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

- ⚠️ **Profit factor 1.13 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T08:59:04.175Z*
