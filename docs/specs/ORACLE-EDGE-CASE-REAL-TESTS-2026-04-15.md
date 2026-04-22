# Oracle Spec — Real-Test Cycles, Edge Cases, and Recovery Strategies

## Objective
Run an additional analysis/test cycle for the day-trading bot with emphasis on execution realism, failure modes, and recovery behavior. Focus on whether the current risk logic is sufficient when the trade goes wrong operationally, not just when the happy path works.

## Current Known State
- `api/day-trading-bot.js` already contains `rewardTargetPct: 4.0` for the aggressive profile.
- A `validateRisk(...)` function exists and is intended to block non-`wait` actions when account-level risk exceeds the cap.
- Prior work aimed to align bot, backtest, executor, and recorder around the updated risk model.
- Jacques is not yet cleanly confirmed done by handoff; implementation appears present, but manager-level completion confirmation is still missing.

## Oracle Tasks

### 1) Run additional real-test cycles
Use realistic replay / execution-style scenarios, not only synthetic happy-path cases.

Cover at minimum:
- wrong entry timing
- wrong side / late confirmation style entry
- missed exit
- gap through stop
- partial fill then reversal
- stale quote / delayed quote
- rejected limit order
- duplicate entry attempt while already exposed
- account already near daily loss limit
- high spread / liquidity deterioration after signal

For each scenario, capture:
- setup description
- expected bot behavior
- actual current behavior
- failure point
- severity
- recommended mitigation

### 2) Recovery strategy design
Define recovery playbooks for:
- wrong entry
- missed exit
- stop skipped because of gap or stale execution
- position size drift after partial fill
- recovery after two consecutive execution errors

Each recovery playbook should specify:
- immediate containment action
- whether to flatten immediately or scale out
- cooldown duration
- reduced size rule for next trade
- when bot must force `wait`
- when human escalation is required

### 3) Risk-policy recommendations
Assess whether current 2% per-trade risk and existing decision gating are enough under execution failures.
Recommend any additions such as:
- stale quote max age
- maximum slippage threshold
- max retry count for exits
- duplicate-order guardrail
- forced daily lockout after execution faults
- recovery-mode sizing multiplier

## Deliverable
Produce a concise report with:
1. edge-case matrix
2. top failure modes
3. recommended recovery rules
4. concrete implementation asks for Jacques
5. verdict: safe / unsafe for further live-like testing

## Notes for Jacques follow-up
Questions still open for engineering:
- Does executor support limit orders properly, or only market orders?
- How are partial fills represented and reconciled?
- Where should final risk validation live in the execution stack?
- Should order schema include `limitPrice`, quote age, and slippage tolerance?
- How should simultaneous stop-loss / take-profit conditions be resolved deterministically?
