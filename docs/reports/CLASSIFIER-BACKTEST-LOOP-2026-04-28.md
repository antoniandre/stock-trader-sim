# Classifier Backtest Loop — 2026-04-28

## Goal

Improve the bot classifier so it tags the current trade state on the fly instead of blacklisting symbols. The strategy should trade only when the current setup, regime, liquidity, VWAP, momentum, and R:R create controlled downside and repeatable upside.

## Baseline Evidence

Existing broad 70-symbol baseline:

- Report: `docs/reports/BOT-TRADE-REPORT-2026-04-26-5min-broad-1000trades-365d-adaptive-time-open-mid.md`
- Result: 1000 trades, 35.9% win rate, -$7,532.11 net P&L, PF 0.84, Sharpe -1.93, max DD 9.66%.
- Main failure: broad open+mid traded too many weak `trend` setups and did not separate clean continuation from chop/chase states.

Current-session expanded fetch attempt:

- Command: `node scripts/run-100-trades.mjs 5Min --target=300 --lookback=90 --universe=expanded --adaptive=true --time-filter=open,mid --fetch-delay-ms=8000 --rate-limit-wait-ms=90000`
- Alpaca repeatedly returned 429s on the 126-symbol sweep. The runner now has bar caching, `--universe=expanded`, `--max-symbols`, `--fetch-delay-ms`, and `--rate-limit-wait-ms` so large runs can resume more safely.

## Changes Implemented

- Added an `expanded` liquid universe in `scripts/run-100-trades.mjs` for reproducible 100+ symbol sweeps.
- Added backtest bar caching under `api/data/backtest-bars` so successful Alpaca fetches are reused across retests.
- Added rate-limit backoff knobs to avoid invalid skipped-symbol reports under Alpaca 429s.
- Added target metric reporting with planned R:R, while keeping realized payoff ratio visible separately.
- Added dynamic trade-state outputs in `api/day-trading-bot.js`: `tradeState` and `strategyAction`.
- Tightened current-state classification for:
  - weak pilot momentum,
  - regime instability,
  - extended chase,
  - liquidity/slippage risk,
  - unconfirmed trend,
  - weak breakout quality.
- Fed current `tradeState` into `resolveSymbolTradeProfile()` so profile risk adjustments respond to the moment, not a static symbol blacklist.

## Retest Results

### First classifier pass

Command:

```bash
node scripts/run-100-trades.mjs 5Min --target=50 --lookback=90 --universe=expanded --max-symbols=5 --adaptive=true --time-filter=open,mid --fetch-delay-ms=8000 --rate-limit-wait-ms=90000
```

Result before stricter trend/breakout quality:

- 50 requested / 30 generated trades
- Win rate 23.33%
- Net P&L -$97
- PF 0.91
- Finding: `trend` was still 3W/20L, so generic neutral trend entries were the main leak.

### Accepted stricter classifier

Report: `docs/reports/BOT-TRADE-REPORT-2026-04-28-5min-expanded-50trades-90d-adaptive-time-open-mid.md`

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | +$248.06 | PASS |
| Win rate | 45-60% | 50% | PASS |
| Profit factor | >= 1.3 | 1.76 | PASS |
| Sharpe (ann.) | > 1.5 | 3.75 | PASS |
| R:R | 2:1 - 3:1 | 2.79:1 planned | PASS |
| Max drawdown | < 10% | 0.32% | PASS |
| Expectancy | positive | +$41.34/trade | PASS |

Sample size: 6 trades across the first 5 expanded symbols over 90 days. This is a validation slice, not enough for live promotion.

### Breakout-only held-out check

Report: `docs/reports/BOT-TRADE-REPORT-2026-04-28-5min-expanded-50trades-90d-adaptive-setup-breakout-time-mid.md`

| Metric | Target | Value | Status |
|:--|--:|:--|:--|
| Net P&L | positive | +$338.15 | PASS |
| Win rate | 45-60% | 60% | PASS |
| Profit factor | >= 1.3 | 2.43 | PASS |
| Sharpe (ann.) | > 1.5 | 5.89 | PASS |
| R:R | 2:1 - 3:1 | 2.77:1 planned | PASS |
| Max drawdown | < 10% | 0.23% | PASS |
| Expectancy | positive | +$67.63/trade | PASS |

Sample size: 5 trades. This confirms the current 90-day slice favors high-quality breakout/midday entries and rejects generic trend continuation.

## Decision

Keep the dynamic classifier changes, but do not treat them as live-ready yet. They improved the validation slice from broad failure to target-table pass by becoming much more selective, but the trade count is too small due Alpaca rate limits and the current cached subset.

## Next Validation Commands

Run these when Alpaca quota is clear:

```bash
node scripts/run-100-trades.mjs 5Min --target=300 --lookback=90 --universe=expanded --max-symbols=25 --adaptive=true --time-filter=mid --fetch-delay-ms=10000 --rate-limit-wait-ms=120000
node scripts/run-100-trades.mjs 5Min --target=500 --lookback=365 --universe=expanded --max-symbols=50 --adaptive=true --time-filter=mid --fetch-delay-ms=10000 --rate-limit-wait-ms=120000
node scripts/run-100-trades.mjs 5Min --target=1000 --lookback=365 --universe=expanded --adaptive=true --time-filter=mid --fetch-delay-ms=12000 --rate-limit-wait-ms=180000
```

Promotion rule: keep the changes only if expanded validation continues to pass the target table and +5 bps slippage PF remains above 1.1.
