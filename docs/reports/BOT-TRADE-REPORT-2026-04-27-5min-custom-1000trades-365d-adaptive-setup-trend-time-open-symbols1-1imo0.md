# Bot Trade Report — 9 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T09:22:21.933Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** trend | **Time filter:** Open 9:30-10:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

❌ **UNPROFITABLE** — net loss of $315.5 (-0.32%) over 9 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 9 |
| Win rate | 22.22% (2W / 7L) |
| Net P&L | $-315.5 (-0.32%) |
| Gross profit | $130.72 |
| Gross loss | $446.22 |
| Profit factor | 0.29 |
| Avg win | $65.36 |
| Avg loss | $63.75 |
| Payoff ratio | 1.03:1 |
| Expectancy | $-35.06 / trade |
| Max drawdown | 0.33% |
| Sharpe ratio (ann.) | -8.46 |
| Trades / active day | 1.13 |
| Avg confidence | 100% |
| Avg trade duration | 49 min |
| Avg risk ratio | 0.44R |
| Starting equity | $100,000 |
| Ending equity | $99,684.5 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 9 | 22.22% | $-315.5 | $-35.06 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| SMCI | 9 | 2 | 22.22% | $-315.5 | $-35.06 | 0.29 | throttle |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 9 | 2 | 22.22% | $-315.5 | $-35.06 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 6 | 2 | 33.33% | $-148.48 | $-24.75 |
| noisyHighBeta | 3 | 0 | 0% | $-167.02 | $-55.67 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|
| Symbol | SMCI | 5 | 1.09 | $+2.07 | 4 | 0 | $-81.47 | 0.33% | 0 | reject |
| Time slot | Open 9:30-10:30 | 5 | 1.09 | $+2.07 | 4 | 0 | $-81.47 | 0.33% | 0 | reject |
| Setup | trend | 5 | 1.09 | $+2.07 | 4 | 0 | $-81.47 | 0.33% | 0 | reject |

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $-334.04 | 0.28 |
| +3 bps/side | $-371.12 | 0.25 |
| +5 bps/side | $-408.18 | 0.22 |
| +10 bps/side | $-500.85 | 0.17 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 5 |
| stagnation | 1 |
| breakeven-stop | 1 |
| trim-profit-target | 1 |
| timeout | 1 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | SMCI | 06-30 14:10 | 06-30 15:15 | 49.8 | 49.55 | 154 | 7669.2 | -38.5 | -0.5% | 0.25R | 65m | market | stagnation | trend | trend | noisyHighBeta | 74.94 | ↓49.18 | 0.5528 | 1.17 | **LOSS** |
| 2 | SMCI | 07-21 14:00 | 07-21 15:35 | 53.28 | 53.23 | 262 | 13959.36 | -13.1 | -0.09% | 0.05R | 95m | market | breakeven-stop | trend | trend | neutral | 76.45 | ↓52.93 | 0.378 | 1.02 | **LOSS** |
| 3 | SMCI | 07-29 14:20 | 07-29 14:40 | 61.41 | 60.86 | 125 | 7676.25 | -68.75 | -0.9% | 0.45R | 20m | market | early-reversal | breakout | trend | noisyHighBeta | 69.32 | ↑60.34 | 0.493 | 1.02 | **LOSS** |
| 4 | SMCI | 08-18 14:20 | 08-18 15:15 | 45.86 | 46.37 | 152 | 13941.44 | +77.52 | +1.11% | 0.9R | 55m | market | trim-profit-target | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 5 | SMCI | 08-18 14:20 | 08-18 16:05 | 45.86 | 46.21 | 152 | 13941.44 | +53.2 | +0.76% | 0.62R | 105m | market | timeout | trend | trend | neutral | 61.04 | ↑45.62 | 0.1698 | 1.13 | **WIN** |
| 6 | SMCI | 08-21 14:25 | 08-21 14:45 | 42.94 | 42.66 | 326 | 13998.44 | -91.28 | -0.65% | 0.46R | 20m | market | early-reversal | trend | trend | neutral | 55.76 | ↑42.61 | 0.1509 | 1.04 | **LOSS** |
| 7 | SMCI | 09-19 14:00 | 09-19 14:20 | 46.4 | 46.14 | 301 | 13966.4 | -78.26 | -0.56% | 0.48R | 20m | market | early-reversal | trend | trend | neutral | 63.33 | ↑46.1 | 0.1307 | 1.4 | **LOSS** |
| 8 | SMCI | 10-01 14:10 | 10-01 14:50 | 49.21 | 48.87 | 284 | 13975.64 | -96.56 | -0.69% | 0.36R | 40m | market | early-reversal | trend | trend | neutral | 72.28 | ↑48.62 | 0.4114 | 1.31 | **LOSS** |
| 9 | SMCI | 10-15 14:25 | 10-15 14:45 | 55.04 | 54.61 | 139 | 7650.56 | -59.77 | -0.78% | 0.42R | 20m | market | early-reversal | trend | trend | noisyHighBeta | 71.54 | ↑54.52 | 0.1897 | 1.5 | **LOSS** |

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

- ⚠️ **Profit factor 0.29 < 1.5** — still not robust enough; needs further parameter tuning or symbol filter
- ⚠️ **Avg R = 0.44R < 1R** — exiting before reaching the 2× target; consider widening the timeout window or using a trailing exit instead of hard timeout
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T09:22:21.933Z*
