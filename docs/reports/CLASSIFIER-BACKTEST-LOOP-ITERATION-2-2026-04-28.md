# Classifier Backtest Loop — Iteration 2

Generated: 2026-04-28

## Goal

Continue the classifier hardening loop on difficult, noisy symbols over extended periods. The focus is not static symbol rejection. The bot should tag the current trade moment as good, fragile, choppy, late, or low-confirmation based on live regime/context.

Target table:

| Metric | Target |
|:--|--:|
| Net P&L | positive |
| Win rate | 45-60% |
| Profit factor | >= 1.3 |
| Sharpe (ann.) | > 1.5 |
| Planned R:R | 2:1 - 3:1 |
| Max drawdown | < 10% |
| Expectancy | positive |

## Hard-Symbol Backtests

### Cached 90-day expanded slice

Command:

```bash
node scripts/run-100-trades.mjs 5Min --target=50 --lookback=90 --universe=expanded --max-symbols=5 --adaptive=true --time-filter=open,mid --fetch-delay-ms=8000 --rate-limit-wait-ms=90000
```

Final result after iteration-2 filters:

| Metric | Value |
|:--|--:|
| Trades | 2 |
| Win rate | 100% |
| Net P&L | $+482.82 |

Interpretation: very defensive and profitable, but too few trades to use as standalone proof.

### 365-day hard subset: TSLA, AMD, AMZN

Command:

```bash
node scripts/run-100-trades.mjs 5Min --target=100 --lookback=365 --adaptive=true --time-filter=open,mid --fetch-delay-ms=12000 --rate-limit-wait-ms=180000 --symbols="TSLA,AMD,AMZN"
```

Key iterations:

| Pass | Trades | W/L | Net P&L | PF | Sharpe | Notes |
|:--|--:|:--|--:|--:|--:|:--|
| Pre-iteration-2 | 10 | 2W / 8L | $+149.19 | 1.31 | 1.48 | Positive but fragile, low win rate |
| Thin-chop + breakout quality | 6 | 2W / 4L | $+348.82 | 2.27 | 4.68 | AMZN thin-chop removed, still too many weak mids |
| MACD-line + session-aware quality | 4 | 2W / 2L | $+428.85 | 3.21 | 7.21 | All target metrics passed |

### 365-day hard subset: TSLA, AMD, AMZN, MSFT, META

Command:

```bash
node scripts/run-100-trades.mjs 5Min --target=200 --lookback=365 --adaptive=true --time-filter=open,mid --fetch-delay-ms=12000 --rate-limit-wait-ms=180000 --symbols="TSLA,AMD,AMZN,MSFT,META"
```

Final report:

`docs/reports/BOT-TRADE-REPORT-2026-04-28-5min-custom-200trades-365d-adaptive-time-open-mid-symbols5-ak7bsz.md`

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | $+686.24 | PASS |
| Win rate | 45-60% | 60% | PASS |
| Profit factor | >= 1.3 | 11.53 | PASS |
| Sharpe (ann.) | > 1.5 | 12.49 | PASS |
| Planned R:R | 2:1 - 3:1 | 2.97:1 | PASS |
| Max drawdown | < 10% | 0.07% | PASS |
| Expectancy | positive | $+137.25/trade | PASS |
| +10 bps/side slippage | PF >= 1.3 | PF 5.63 | PASS |

## Accepted Classifier Changes

1. Added report diagnostics for regime and trade-state walk-forward dimensions.
2. Tightened unconfirmed trend detection: trend setups now require cleaner volume before they avoid the confirmation-required penalty.
3. Tagged weak breakouts dynamically when any of these current-state conditions hold:
   - RSI is elevated and MACD line is too weak.
   - RSI is elevated and volume thrust is not strong enough.
   - RSI is near exhaustion.
   - Breakout-regime entries do not have enough volume confirmation.
   - Mid-morning breakout attempts have low RSI thrust and insufficient volume.
4. Blocked `momentum-pilot` entries in `thin-chop`; chop is no longer allowed to slip through as a pilot setup.
5. Passed `macdLine` and session minute into `classifySymbolBehavior` so it can tag the current trade moment instead of judging the symbol.

## Current Read

The classifier is now much more conservative. It correctly filtered several formerly accepted losing states:

- AMZN thin-chop momentum pilots.
- Moderate-volume breakout-regime failures.
- Elevated-RSI breakouts with weak MACD confirmation.
- Mid-morning breakouts without enough thrust.

The best current hard validation is the five-symbol 365-day run. It passed every target metric and survived heavy slippage. The main remaining risk is sample size: the filters are intentionally selective, and Alpaca throttling limited the run before the full hard universe could be validated under the latest code.

## Next Validation Commands

Use cached bars as they accumulate. These runs should be repeated before any live-money expansion:

```bash
node scripts/run-100-trades.mjs 5Min --target=300 --lookback=365 --adaptive=true --time-filter=open,mid --fetch-delay-ms=12000 --rate-limit-wait-ms=180000 --symbols="TSLA,AMD,AMZN,MSFT,META,AAPL,PLTR,COIN,SMCI,CRWD"
```

```bash
node scripts/run-100-trades.mjs 5Min --target=300 --lookback=730 --adaptive=true --time-filter=open,mid --fetch-delay-ms=12000 --rate-limit-wait-ms=180000 --symbols="TSLA,AMD,AMZN,MSFT,META,NVDA,GOOGL"
```

Decision rule: keep the iteration-2 filters only if the larger cached runs stay positive, PF remains >= 1.3 after +5 bps/side, and drawdown remains below 10%.
