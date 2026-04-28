# Catalyst Radar — Bot Feed

Search the web for:
- US futures direction + VIX pre-market
- Major macro events today (FOMC, CPI, PPI, NFP, Fed speakers)
- Watchlist earnings today (BMO/AMC)
- Analyst upgrades/downgrades/initiations
- Overnight SEC/8-K filings, FDA decisions, M&A
- Watchlist stocks with significant pre-market moves + reasons
- Active sector themes (energy, banks, defense, etc.)
- Commodity moves relevant to watchlist sectors (oil, gold, copper)

Reflect missing/uncertain data in the table — do not infer.

---

## Watchlist

AAPL, MSFT, NVDA, AMZN, GOOGL, META, TSLA, AVGO, ORCL, ADBE, CRM, AMD, INTC, QCOM, TXN,
NOW, PLTR, MU, JPM, BAC, WFC, GS, MS, AXP, BLK, SCHW, C, BRK, WMT, COST, HD, MCD, NKE,
SBUX, TGT, LOW, CMG, TJX, UNH, JNJ, LLY, PFE, ABBV, MRK, TMO, ABT, AMGN, CVS, XOM, CVX,
COP, SLB, CAT, GE, HON, UNP, BA, LMT, NFLX, CMCSA, DIS, T, VZ, TMUS, UBER, FDX, UPS, V,
MA, PYPL, SQ, NEE, DUK, SO, FCX, DOW, MMM, SNOW, CRWD, DDOG, SHOP, ROKU, ZM, PLD, AMT,
CCI, SMCI, ARM, MRVL, SNPS, CDNS, PEP, KO, MDLZ, CL, PG, EL, GM

---

## Scoring

**Catalyst Score:** Strong / Moderate / Weak / None

**Priority:**
- High = clear catalyst + pre-market confirmation
- Medium = one of the two
- Low = neither — include only on exceptional gap/volume

**Confidence:**
- A = catalyst + participation + clean structure
- B = decent but incomplete
- C = speculative / thin data

---

## Output

Output ONLY a JSON array into api/input/daily-catalysts/<today's date>.json.
No preamble, notes, caveats, markdown, or code fences.
Omit Low priority unless exceptional gap/volume.
Sort: High → Medium → Low.

Keys (exact): "symbol", "catalyst", "catalyst_score", "premarket_direction_and_gap", "premarket_volume", "key_levels", "setup_potential", "priority", "confidence"

---

## Automation

Generate and validate today's file with direct public news RSS fetching:

```bash
node scripts/fetch-daily-catalysts.mjs --provider rss
```

Useful options:

```bash
node scripts/fetch-daily-catalysts.mjs --provider rss --dry-run
node scripts/fetch-daily-catalysts.mjs --provider rss --date 2026-04-27
node scripts/fetch-daily-catalysts.mjs --provider rss --merge-existing
node scripts/fetch-daily-catalysts.mjs --provider rss --max-symbols 150 --max-rows 25 --min-score 7 --concurrency 5 --lookback-days 3
node scripts/fetch-daily-catalysts.mjs --provider rss --sources trusted,yahoo,sec
```

The RSS mode does not use AI. It fetches and ranks multiple public source families for each watchlist symbol:

- `google`: broad Google News RSS discovery.
- `trusted`: Google News RSS constrained toward Reuters, CNBC, MarketWatch, Barron's, Investor's Business Daily, Benzinga, WSJ, Financial Times, and Bloomberg.
- `yahoo`: Yahoo Finance symbol headline RSS.
- `sec`: SEC EDGAR company submissions for forms like 8-K, 10-Q, 10-K, S-1/S-3, 424B5, SC 13D/G, and DEF 14A.

It scores catalyst-like headlines/filings and writes the same validated JSON contract. Because it only sees RSS/filing metadata, it leaves chart-derived fields as confirmation notes. For SEC requests, set a descriptive user agent if you run this heavily:

```bash
SEC_USER_AGENT="stock-trader-sim contact@example.com"
```

Polling safeguards:

- Network calls retry transient errors (`408`, `429`, `5xx`) with bounded backoff and a default 12s timeout.
- Empty results do not overwrite the daily feed unless you pass `--allow-empty`.
- Writes are atomic, so the bot should not see a partially written JSON file.
- Use `--merge-existing` for repeated polling so a later source miss does not drop catalysts found earlier in the day.
- Optional env tuning: `CATALYST_FETCH_TIMEOUT_MS=12000`, `CATALYST_FETCH_RETRIES=2`.

Optional OpenAI mode if you want model-assisted web research:

```bash
node scripts/fetch-daily-catalysts.mjs --provider openai
```

OpenAI mode requires:

```bash
OPENAI_API_KEY=...
OPENAI_DAILY_CATALYST_MODEL=gpt-4.1
```

Example weekday premarket polling cron in New York time:

```cron
CRON_TZ=America/New_York
*/20 6-10 * * 1-5 cd /Users/anto/localhost/stock-trader-sim && mkdir -p logs && /usr/bin/env node scripts/fetch-daily-catalysts.mjs --provider rss --merge-existing >> logs/daily-catalysts.log 2>&1
```
