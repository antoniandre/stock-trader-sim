# Fix OpenClaw session model pinning

## Problem
In the OpenClaw control UI / current session flow, setting a session model override via the session status path succeeds temporarily, but the very next user turn may execute on a different model.

Observed behavior from live session:
1. Session initially reported `openai-codex/gpt-5.4`
2. Calling session status with model override `openrouter/elephant-alpha` returned a status card showing Elephant pinned
3. On the next normal user turn, `/status` again reported `openai-codex/gpt-5.4`

This implies the override is either:
- not persisted to the authoritative session config
- persisted but not loaded for subsequent turns
- overwritten by request-level/default model resolution
- only used for rendering the immediate status card, not actual runtime turn execution

## Goal
Make explicit session model selection sticky for the session until changed or reset to default.

## Requirements
- Investigate the code path behind `session_status(..., model=...)`
- Find where the model override is stored and where turn execution resolves the effective model
- Ensure an explicit session override survives the next turn
- Ensure `/status model=default` clears the override cleanly
- Do not break per-turn temporary overrides if those also exist, but session override must take precedence over defaults

## Deliverables
1. Code changes in OpenClaw to persist and honor session model override
2. Brief root-cause note
3. Verification steps or tests, ideally automated if practical

## Constraints
- Use absolute paths
- Keep changes focused
- Commit changes when done

## Repo / docs hints
- OpenClaw source is under `/Users/anto/.nvm/versions/node/v24.13.0/lib/node_modules/openclaw` for installed package, but likely source repo/workspace may exist elsewhere if needed
- We need the actual editable source repo if available. If only installed files are editable in this environment, note that clearly

## Task
Read this file and implement the fix. Then summarize:
- root cause
- files changed
- how to verify
