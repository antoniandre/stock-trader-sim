# Bot Trade Report — 13 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T11:01:50.358Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 730 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $64.97 (-0.06%) over 13 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 13 |
| Win rate | 30.77% (4W / 9L) |
| Net P&L | $-64.97 (-0.06%) |
| Gross profit | $479.56 |
| Gross loss | $544.53 |
| Profit factor | 0.88 |
| Avg win | $119.89 |
| Avg loss | $60.5 |
| Payoff ratio | 1.98:1 |
| Expectancy | $-5 / trade |
| Max drawdown | 0.42% |
| Sharpe ratio (ann.) | -0.76 |
| Trades / active day | 1 |
| Avg confidence | 97.85% |
| Avg trade duration | 54 min |
| Avg risk ratio | 0.74R |
| Starting equity | $100,000 |
| Ending equity | $99,935.03 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 13 | 30.77% | $-64.97 | $-5 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| WMT | 13 | 4 | 30.77% | $-64.97 | $-5 | 0.88 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 11 | 3 | 27.27% | $-165.59 | $-15.05 |
| breakout | 2 | 1 | 50% | $+100.62 | $+50.31 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 13 | 4 | 30.77% | $-64.97 | $-5 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | WMT | 7 | 0 | $-60.25 | 6 | 3.91 | $+59.47 | 0.07% | 2.71 | reject |
| Behavior | neutral | 7 | 0 | $-60.25 | 6 | 3.91 | $+59.47 | 0.07% | 2.71 | reject |
| Time slot | Mid 10:30-11:30 | 7 | 0 | $-60.25 | 6 | 3.91 | $+59.47 | 0.07% | 2.71 | reject |
| Setup | trend | 6 | 0 | $-54.91 | 5 | 2.34 | $+32.78 | 0.12% | 1.6 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-100.74 | 0.82 |
| +3 bps/side | $-172.23 | 0.72 |
| +5 bps/side | $-243.75 | 0.64 |
| +10 bps/side | $-422.54 | 0.48 |

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
| 1 | WMT | 11-06 15:20 | 11-06 15:40 | 84.35 | 83.95 | 165 | 13917.75 | -66 | -0.47% | 0.49R | 20m | market | early-reversal | trend | trend | neutral | 64.63 | ↓84.22 | 0.1758 | 1.02 | **LOSS** |
| 2 | WMT | 02-26 14:30 | 02-26 14:55 | 98.27 | 97.73 | 142 | 13954.34 | -76.68 | -0.55% | 0.79R | 25m | market | early-reversal | trend | trend | neutral | 76.5 | ↓97.96 | 0.1627 | 1.51 | **LOSS** |
| 3 | WMT | 02-28 14:35 | 02-28 15:15 | 98.09 | 97.44 | 142 | 13928.78 | -92.3 | -0.66% | 0.94R | 40m | market | early-reversal | breakout | breakout | neutral | 76.63 | ↓97.9 | -0.0171 | 1.86 | **LOSS** |
| 4 | WMT | 04-02 14:50 | 04-02 15:10 | 90.08 | 89.81 | 155 | 13962.4 | -41.85 | -0.3% | 0.43R | 20m | market | early-reversal | trend | trend | neutral | 78.54 | ↑89.17 | 0.3112 | 1.19 | **LOSS** |
| 5 | WMT | 05-16 14:35 | 05-16 15:25 | 98.68 | 98.55 | 141 | 13913.88 | -18.33 | -0.13% | 0.11R | 50m | market | stagnation | trend | trend | neutral | 73.1 | ↑97.8 | 0.6763 | 1.18 | **LOSS** |
| 6 | WMT | 10-14 14:30 | 10-14 15:20 | 105.03 | 104.93 | 132 | 13863.96 | -13.2 | -0.1% | 0.09R | 50m | market | stagnation | trend | trend | neutral | 64.76 | ↑104.03 | 0.7487 | 1.82 | **LOSS** |
| 7 | WMT | 01-20 14:30 | 01-20 14:50 | 121.21 | 120.14 | 106 | 12848.26 | -113.42 | -0.88% | 0.59R | 20m | market | early-reversal | trend | trend | neutral | 75.65 | ↓120.96 | 0.5126 | 1.2 | **LOSS** |
| 8 | WMT | 02-02 14:30 | 02-02 16:15 | 119.98 | 121.91 | 116 | 13917.68 | +223.88 | +1.61% | 2.3R | 105m | market | timeout | trend | trend | neutral | 66.44 | ↑119.64 | 0.2594 | 1.15 | **WIN** |
| 9 | WMT | 02-04 14:30 | 02-04 15:15 | 128.37 | 127.86 | 108 | 13863.96 | -55.08 | -0.4% | 0.57R | 45m | market | early-reversal | trend | trend | neutral | 74.11 | ↓128.24 | 0.2366 | 1.22 | **LOSS** |
| 10 | WMT | 02-12 14:35 | 02-12 16:20 | 131.56 | 133.38 | 106 | 13945.36 | +192.92 | +1.38% | 1.97R | 105m | market | timeout | breakout | breakout | neutral | 79.39 | ↑130.67 | 0.2757 | 1.2 | **WIN** |
| 11 | WMT | 02-26 14:30 | 02-26 14:50 | 127.37 | 126.7 | 101 | 12864.37 | -67.67 | -0.53% | 0.76R | 20m | market | early-reversal | trend | trend | neutral | 71.58 | ↓126.84 | 0.0625 | 1.62 | **LOSS** |
| 12 | WMT | 02-27 14:35 | 02-27 16:20 | 126.58 | 127.12 | 110 | 13923.8 | +59.4 | +0.43% | 0.59R | 105m | market | timeout | breakout | trend | neutral | 72.02 | ↑126.4 | 0.2009 | 1.93 | **WIN** |
| 13 | WMT | 03-12 15:10 | 03-12 16:50 | 124.26 | 124.29 | 112 | 13917.12 | +3.36 | +0.02% | 0.03R | 100m | market | breakeven-stop | trend | trend | neutral | 74.81 | ↑123.1 | 0.1543 | 1.09 | **WIN** |

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

- ⚠️ **Profit factor 0.88 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.74R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T11:01:50.358Z*
