# Bot Trade Report — 4 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-27T20:32:02.590Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 100 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 3 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** Open 9:30-10:30, Mid 10:30-11:30 | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $428.85 (+0.43%) over 4 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 4 |
| Win rate | 50% (2W / 2L) |
| Net P&L | $+428.85 (+0.43%) |
| Gross profit | $622.95 |
| Gross loss | $194.1 |
| Profit factor | 3.21 |
| Avg win | $311.48 |
| Avg loss | $97.05 |
| Payoff ratio | 3.21:1 |
| Expectancy | $+107.21 / trade |
| Max drawdown | 0.19% |
| Sharpe ratio (ann.) | 7.21 |
| Trades / active day | 1 |
| Avg confidence | 96.5% |
| Avg trade duration | 38 min |
| Avg planned R:R | 2.53:1 |
| Avg risk ratio | 1.65R |
| Starting equity | $100,000 |
| Ending equity | $100,428.85 |

## Target Metric Check

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+428.85 | PASS |
| Win rate | 45-60% | 50% | PASS |
| Profit factor | >= 1.3 | 3.21 | PASS |
| Sharpe (ann.) | > 1.5 | 7.21 | PASS |
| R:R | 2:1 - 3:1 | 2.53:1 planned | PASS |
| Max drawdown | < 10% | 0.19% | PASS |
| Expectancy | positive | $+107.21 | PASS |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Open 9:30–10:30 | 1 | 100% | $+308.8 | $308.8 |
| Mid  10:30–11:30 | 3 | 33.33% | $+120.05 | $40.02 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| TSLA | 2 | 1 | 50% | $+221.96 | $+110.98 | 3.56 | watch |
| AMD | 2 | 1 | 50% | $+206.89 | $+103.45 | 2.93 | watch |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 4 | 2 | 50% | $+428.85 | $+107.21 |

## Regime Performance

| Regime | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| trend | 4 | 2 | 50% | $+428.85 | $+107.21 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 4 | 2 | 50% | $+428.85 | $+107.21 |

## Dynamic Trade-State Performance

| Trade state | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 4 | 2 | 50% | $+428.85 | $+107.21 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+418.79 | 3.1 |
| +3 bps/side | $+398.7 | 2.9 |
| +5 bps/side | $+378.59 | 2.72 |
| +10 bps/side | $+328.34 | 2.34 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 2 |
| profit-target | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | State | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | TSLA | 12-04 14:45 | 12-04 15:05 | 453.55 | 450.21 | 26 | 11792.3 | -86.84 | -0.74% | 0.88R | 20m | market | early-reversal | trend | breakout | neutral | neutral | 70.3 | ↓449.98 | 1.1666 | 2.15 | **LOSS** |
| 2 | AMD | 12-08 14:40 | 12-08 15:05 | 222.43 | 220.7 | 62 | 13790.66 | -107.26 | -0.78% | 0.88R | 25m | market | early-reversal | trend | breakout | neutral | neutral | 81.71 | ↓221.33 | 0.5536 | 2.63 | **LOSS** |
| 3 | AMD | 12-19 14:30 | 12-19 15:00 | 206.28 | 211.43 | 61 | 12583.08 | +314.15 | +2.5% | 2.4R | 30m | market | profit-target | trend | breakout | neutral | neutral | 79.7 | ↑205.9 | 0.2683 | 4.37 | **WIN** |
| 4 | TSLA | 04-15 13:50 | 04-15 15:05 | 371.12 | 380.77 | 32 | 11875.84 | +308.8 | +2.6% | 2.45R | 75m | market | profit-target | trend | breakout | neutral | neutral | 68.02 | ↑367.36 | 1.1327 | 2.2 | **WIN** |

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

- ✅ **Profit factor 3.21** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.65R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-27T20:32:02.590Z*
