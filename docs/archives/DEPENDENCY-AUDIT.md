# Dependency Audit Notes

Audit run date: 2026-04-05

Commands used:

```bash
cd api && pnpm audit --prod --json
cd frontend && pnpm audit --prod --json
```

## Summary

The repository is **not audit-clean** yet.

### Backend (`api/`)
Reported production issues:

- **critical**: `form-data` via `axios`
- **high**: `axios` (multiple advisories)
- **high**: `path-to-regexp` via `express`
- **moderate/low**: `qs` via `express`

### Frontend (`frontend/`)
Reported production issues:

- **high**: `picomatch` via `sass` toolchain
- **high**: `immutable` via `sass`
- **moderate**: additional `picomatch` advisory

## Practical interpretation

### Highest-priority backend follow-up

1. **Upgrade `axios`** to a non-vulnerable release.
   - Current audit recommendation points to newer fixed releases than the one in use.
2. **Upgrade `express`** (or pin a patched dependency tree) so `path-to-regexp` and `qs` resolve to safe versions.
3. Re-run `pnpm audit --prod` after the upgrade.

Backend issues matter more because this app is a network-facing service handling real trading routes.

### Frontend follow-up

The frontend issues appear to come from the Sass/build chain.

Recommended next step:
- update the frontend lockfile / toolchain packages that pull `immutable` and `picomatch`
- re-run audit after dependency refresh

## Risk notes

- The backend `axios` findings are the most important operationally.
- The backend `express` transitive issues also deserve attention before broader exposure.
- Frontend build-chain issues still matter, but they are generally lower urgency than backend request-path dependencies.

## Recommended next hardening step

1. Upgrade backend `axios` first.
2. Upgrade backend `express` tree second.
3. Re-run audit and capture deltas.
4. Then refresh frontend Sass/tooling dependencies.

## Status

- Audit executed: **yes**
- Findings reviewed: **yes**
- Remediation completed: **not yet**
