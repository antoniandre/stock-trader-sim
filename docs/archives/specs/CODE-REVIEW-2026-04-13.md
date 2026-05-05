# Code Review Brief — 2026-04-13

## Context
Antoni has made progress on the app. Need rapid code scan + targeted review on specific areas.

## Review Tasks (In Order)

### 1. **Full Quick Scan**
- Scan all code for obvious issues, dead code, inefficiencies.
- Flag anything that looks wrong at first glance.

### 2. **API Calls: Alpaca Integration**
- Check all API calls from backend (API) to Alpaca broker.
- Verify they're correct and hit the right endpoints.
- Verify they're called from the correct frontend pages/components.
- **Flag:** Are there too many fetches? Redundant calls?

### 3. **Screener Implementation**
- Review how screener is implemented.
- Antoni: "not 100% convinced" — look for design/logic issues.
- Is it performant? Clear? Correct filters applied?

### 4. **Catalyst Feed (Daily JSON Report)**
- Review the new catalyst feed from the daily JSON report.
- **Is it well used?** Does the frontend consume it properly?
- **Missing:** Why are stocks in catalyst feed NOT in screener results?
  - Should they be? Bug or design?
  - Catalyst-bearing stocks should show a 🔥 icon on recommended stocks.
  - Implement if missing.

### 5. **Trading Bot Issues**
- Bot now buys but **never sells.** Why? Bug.
- **Decision call** (updating confidence for a stock at a certain time):
  - Currently: runs every now and then (setInterval?).
  - Should be: continuous or triggered via WebSocket instead.
  - Move decision call to WebSocket to avoid polling overhead.

## Deliverables
- Flag all issues found.
- Provide fix patterns or code snippets where applicable.
- Prioritize blockers (bot not selling, catalyst feed mismatch).

## Files to Scan
- Frontend: `/Users/anto/localhost/stock-trader-sim/frontend/`
- API: `/Users/anto/localhost/stock-trader-sim/api/`
- Bot logic: Search for trading bot entry point and sell logic.
- Catalyst feed: Look for JSON report parsing and feed rendering.

---

Keep it lean. Findings → action items.
