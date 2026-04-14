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
