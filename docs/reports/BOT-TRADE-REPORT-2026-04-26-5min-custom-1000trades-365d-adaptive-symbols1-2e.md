# Bot Trade Report — 5 BUY+SELL Round-Trip Trades

> **Generated:** 2026-04-26T15:26:01.961Z  
> **Risk profile:** balanced | **Capital:** $100,000 | **Timeframe:** 5Min | **Mode:** Alpaca historical bars (IEX feed)
> **Target trades:** 1000 | **Lookback:** 365 days | **Universe:** custom | **Symbols scanned:** 1 | **Behavior classifier:** apply
> **Behavior entry filter:** none

> **Setup filter:** none | **Time filter:** none | **Last entry UTC min:** default | **Excluded symbols:** none

> **Strategy params:** `{"trailingStopPct":1.5,"breakoutTrailingStopPct":1.7,"stagnationMinutes":45,"atrMultiplier":2.5,"breakoutThresholdAdj":-5,"trendSizeMultiplier":1,"behaviorClassifierMode":"apply"}`

## Verdict

✅ **PROFITABLE** — net gain of $121.65 (+0.12%) over 5 trades

## Summary Statistics

| Metric | Value |
|:--|--:|
| Total round-trip trades | 5 |
| Win rate | 40% (2W / 3L) |
| Net P&L | $+121.65 (+0.12%) |
| Gross profit | $352.34 |
| Gross loss | $230.69 |
| Profit factor | 1.53 |
| Avg win | $176.17 |
| Avg loss | $76.9 |
| Payoff ratio | 2.29:1 |
| Expectancy | $+24.33 / trade |
| Max drawdown | 0.23% |
| Sharpe ratio (ann.) | 2.72 |
| Trades / active day | 1 |
| Avg confidence | 100% |
| Avg trade duration | 55 min |
| Avg risk ratio | 1.08R |
| Starting equity | $100,000 |
| Ending equity | $100,121.65 |

## Time-of-Day Breakdown (ET)

| Window | Trades | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|
| Mid  10:30–11:30 | 5 | 40% | $+121.65 | $24.33 |

## Per-Symbol Breakdown

| Symbol | Trades | Wins | Win% | Net P&L | Expectancy | PF | Eligibility |
|:--|--:|--:|--:|--:|--:|--:|:--|
| V | 5 | 2 | 40% | $+121.65 | $+24.33 | 1.53 | eligible |

## Setup Performance

| Setup | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| breakout | 4 | 1 | 25% | $-27.33 | $-6.83 |
| trend | 1 | 1 | 100% | $+148.98 | $+148.98 |

## Symbol Behavior Profile Performance

| Behavior profile | Trades | Wins | Win% | Net P&L | Expectancy |
|:--|--:|--:|--:|--:|--:|
| neutral | 5 | 2 | 40% | $+121.65 | $+24.33 |

## Walk-Forward Promotion Check

First 60% of chronological trades are treated as training; final 40% are unseen validation. A rule only promotes when train and validation PF/expectancy pass and validation survives +5 bps/side slippage.

| Dimension | Candidate | Train n | Train PF | Train Exp | Test n | Test PF | Test Exp | Test DD | Test +5bps PF | Verdict |
|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|

## Slippage Sensitivity

Additional slippage is applied on top of the built-in 0.05% per-side model.

| Extra slippage | Adjusted net P&L | Adjusted PF |
|:--|--:|--:|
| +1 bps/side | $+107.86 | 1.45 |
| +3 bps/side | $+80.3 | 1.31 |
| +5 bps/side | $+52.73 | 1.19 |
| +10 bps/side | $-16.21 | 0.95 |

## Exit Reason Breakdown

| Exit Reason | Count |
|:--|--:|
| early-reversal | 3 |
| timeout | 2 |

## Trade Log

| # | Sym | Entry (UTC) | Exit (UTC) | Entry$ | Exit$ | Qty | Notional | P&L$ | P&L% | R | Dur | Type | Exit Reason | Regime | Setup | Behavior | RSI | VWAP | MACD | VolR | Result |
|--:|:--|:--|:--|--:|--:|--:|--:|--:|--:|--:|--:|:--|:--|:--|:--|:--|--:|--:|--:|--:|:--|
| 1 | V | 12-11 14:35 | 12-11 16:20 | 335.03 | 339.99 | 41 | 13736.23 | +203.36 | +1.48% | 1.74R | 105m | market | timeout | breakout | breakout | neutral | 77.84 | ↑333.09 | 0.8597 | 2.04 | **WIN** |
| 2 | V | 01-05 14:55 | 01-05 16:40 | 352.07 | 355.89 | 39 | 13730.73 | +148.98 | +1.09% | 1.56R | 105m | market | timeout | trend | trend | neutral | 76.51 | ↑349.89 | 1.142 | 1.54 | **WIN** |
| 3 | V | 02-17 14:45 | 02-17 15:10 | 319.41 | 318 | 43 | 13734.63 | -60.63 | -0.44% | 0.49R | 25m | market | early-reversal | breakout | breakout | neutral | 76.39 | ↑317.48 | 0.2266 | 1.6 | **LOSS** |
| 4 | V | 02-25 14:35 | 02-25 14:55 | 313.45 | 310.85 | 44 | 13791.8 | -114.4 | -0.83% | 1.14R | 20m | market | early-reversal | breakout | breakout | neutral | 79.46 | ↓311.67 | 0.7631 | 1.44 | **LOSS** |
| 5 | V | 04-02 14:35 | 04-02 14:55 | 301.55 | 300.34 | 46 | 13871.3 | -55.66 | -0.4% | 0.47R | 20m | market | early-reversal | breakout | breakout | neutral | 68.06 | ↑297.65 | 0.2162 | 1.12 | **LOSS** |

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

- ✅ **Profit factor 1.53** — healthy; validate on a fresh out-of-sample date range before going live
- ✅ **Avg R = 1.08R** — strategy is capturing meaningful profit relative to risk
- ⚠️ **Broker-level stop-limit order on entry** — must be submitted immediately on fill for live to handle total-process crashes
- ⚠️ **`dailyLossesPct` not plumbed through bot-executor** — decision engine enforces it but UI/bot-executor doesn't pass live account P&L yet
- ⚠️ **2 weeks of paper-trade validation required** with these exact parameters before switching to real capital

---
*Generated by `scripts/run-100-trades.mjs` | Alpaca IEX feed | Slippage: 0.05 bps | 2026-04-26T15:26:01.961Z*
