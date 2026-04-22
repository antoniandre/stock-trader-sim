# Oracle Edge-Case Real-Tests Task Spec

## Overview
Run additional real-test cycles for the day-trading bot with emphasis on execution realism, failure modes, and recovery behavior. Verify whether current risk logic is sufficient when trades go wrong operationally.

## Key Known State
- `api/day-trading-bot.js` has `rewardTargetPct: 4.0` for aggressive profile
- `validateRisk(...)` function exists to block non-wait actions when account-level risk exceeds cap
- Jacques to implement and verify; manager-level completion confirmation pending

## Oracle Tasks

### 1) Real-Test Cycles (Edge-Case Matrix)
Test the following scenarios with realistic replay/execution-style scenarios:
- Wrong entry timing
- Wrong side / late confirmation style entry
- Missed exit
- Gap through stop
- Partial fill then reversal
- Stale quote / delayed quote
- Rejected limit order
- Duplicate entry attempt while already exposed
- Account already near daily loss limit
- High spread / liquidity deterioration after signal

For each: capture setup, expected behavior, actual behavior, failure point, severity, mitigation.

### 2) Recovery Playbooks
Define for: wrong entry, missed exit, stop skipped (gap/stale), position size drift (partial fill), recovery after 2 execution errors.
Each playbook: immediate containment, flatten or scale out, cooldown, reduced size rule, when to force `wait`, when human escalation required.

### 3) Risk-Policy Recommendations
Assess 2% per-trade risk sufficiency. Recommend additions: stale quote max age, max slippage threshold, max retry count for exits, duplicate-order guardrail, forced daily lockout after execution faults, recovery-mode sizing multiplier.

## Deliverables
1. Edge-case matrix
2. Top failure modes
3. Recommended recovery rules
4. Concrete implementation asks
5. Verdict: safe / unsafe for further live-like testing

## Open Questions for Engineering
- Does executor support limit orders or only market orders?
- How are partial fills represented and reconciled?
- Where should final risk validation live in execution stack?
- Should order schema include limitPrice, quote age, slippage tolerance?
- How to deterministically resolve simultaneous stop-loss/take-profit?