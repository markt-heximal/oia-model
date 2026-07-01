# ADR-0021 — Host under personal GitHub, transferable to the Foundation

- **Status:** Accepted
- **Date:** 2026-07-01 (repository)
- **Deciders:** Mark Templeton
- **Related:** [ADR-0015](0015-institutional-voice-exclude-founder-branding.md), [ADR-0020](0020-version-cadence-v1.0-reserved.md); [SETUP-INSTRUCTIONS.md](../../SETUP-INSTRUCTIONS.md)

## Context

The OIA is intended for eventual Agentics Foundation adoption ([ADR-0020](0020-version-cadence-v1.0-reserved.md)),
but that adoption is not yet decided. Standing up a dedicated `agentics-foundation` org before the
Foundation has authorized it would presume an outcome and could strand the work if adoption takes a
different form.

## Decision

We will host the repository under **Mark Templeton's personal GitHub initially**, structured so it can
be **transferred to the Foundation on adoption**. GitHub repository transfer preserves history, issues,
and stars, so the move is a single operation. We will **not** create an `agentics-foundation` org
ourselves unless and until the Foundation authorizes it.

## Consequences

- Flexible: if the Foundation adopts, transfer is one step; if adoption stalls or changes shape, the
  work stays intact and accessible under the author's control.
- Placeholder `markt-heximal` / `OWNER` tokens in `README.md`, `LICENSE`, and `CITATION.cff` must be
  substituted at push time and revisited after any transfer ([SETUP-INSTRUCTIONS.md](../../SETUP-INSTRUCTIONS.md)).
- The CC BY 4.0 license and institutional voice already make the work transfer-ready
  ([ADR-0019](0019-license-cc-by-4.0.md), [ADR-0015](0015-institutional-voice-exclude-founder-branding.md)).
