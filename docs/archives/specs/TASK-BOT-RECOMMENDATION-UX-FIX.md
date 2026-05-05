# TASK: Fix Bot Recommendation UX Labels

## Problem
Bot correctly adjusts its logic when you're already positioned (recommends "ADD" instead of "BUY"), but the UI label is confusing:
- When bot recommends "add": label says "Buy now near $X" (should say "Scale up near $X")
- Users think bot is ignoring their position when it's actually recommending to add to it

## What to Fix

### P1: UX Label Clarity
**File:** `api/services/day-trading-bot-service.js` (or wherever `buildRecommendation()` is)

Current:
```javascript
if (action === 'buy' || action === 'add') {
  return {
    label: `Buy now near $${price}`,  // ← CONFUSING
    side: 'buy',
    ...
  }
}
```

Fix:
```javascript
if (action === 'buy') {
  return {
    label: `Buy now near $${price}`,
    side: 'buy',
    ...
  }
}
if (action === 'add') {
  return {
    label: `Scale up near $${price}`,  // ← CLEAR
    side: 'buy',
    ...
  }
}
```

### P2: Defense-in-Depth Guard
**File:** `api/services/day-trading-bot-service.js` (in main decision logic)

After all decision logic, add:
```javascript
// Safety: Never recommend "buy" if already positioned
if (decision.action === 'buy' && hasPosition) {
  decision.action = 'hold';
  decision.reasons.push('Already positioned, holding instead of buying again');
}
```

This prevents any edge case where "buy" slips through when it shouldn't.

## Testing

1. Position long in SKYQ
2. Bot decision should say "Scale up" (not "Buy now")
3. Bot should NOT recommend "buy" while you're holding
4. Verify label changes in UI (bot panel)

## Commits

1. `"Fix: Clarify bot recommendation labels (scale vs buy)"`
2. `"Fix: Add safety guard for positioned symbol recommendations"`

## Done When

- ✅ "Add" action shows "Scale up" label
- ✅ No "buy" recommendation when position exists
- ✅ Tested with existing position
