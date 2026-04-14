# SCREENER-WATCHLIST-FIX-LEAN

**Objective:** Wire catalysts into watchlist + expand to 50+ symbols. Zero token waste.

## Changes Required

### 1. `screener-watch-symbols.js`
Replace hard-coded 5 symbols with:
- Core: `['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']`
- Load today's catalyst file symbols (if exists)
- Merge + dedupe
- Return array of 30–50 symbols

### 2. `catalyst-watchlist-loader.js` (new file)
- Read `/data/catalysts/YYYY-MM-DD.json` at market open
- Cache in memory as `cachedSymbols`
- Return on demand; refresh only once/day
- Must be synchronous or pre-cached before screener starts

### 3. `screener-api.js`
- Use cached watchlist (no new I/O per poll)
- Batch WebSocket subs (avoid per-symbol subscribe calls)
- No changes to filter logic

## Performance Targets
- Watchlist load: <50ms
- No screener slowdown
- Cache hit every poll

## Code Quality
- Clean, no over-engineering
- Inline comments for cache logic
- Production-ready

## Test
- Time watchlist load in DevTools
- Verify 50+ symbols in array
- Run screener, confirm no lag

---

**Deliver:** Files + 1-line summary of what changed. Done.**
