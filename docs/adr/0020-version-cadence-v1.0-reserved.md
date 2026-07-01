# ADR-0020 — Adopt a version cadence with v1.0 reserved for Foundation adoption

- **Status:** Accepted
- **Date:** 2026-07-01 (repository)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md), [ADR-0021](0021-host-personal-transferable-to-foundation.md); [CHANGELOG.md](../../CHANGELOG.md)

## Context

The model exists as a family of artifacts evolving together ([ADR-0014](0014-publish-as-body-of-work.md)).
Citations, vendor references, and analyst coverage need a stable, meaningful version to point at, and
the project needs a clear signal for when the model becomes an officially adopted standard rather than
a working reference.

## Decision

We will adopt a disciplined version cadence, tracked in `CHANGELOG.md`:

- **v0.1** — original working model.
- **v0.5** — current; the Architecture Lock family.
- **v0.6** — planned content refresh (SVG diagrams, complete lens roster, board reading).
- **v1.0** — **reserved for Agentics Foundation adoption.** Not a routine increment; it marks
  institutional endorsement.

Each meaningful release is git-tagged (first content release: **v0.6.0**), giving a stable citation target.

## Consequences

- Sub-1.0 versions communicate honestly that the model is a working reference, not yet an adopted
  standard — consistent with keeping open questions open ([ADR-0018](0018-keep-open-questions-open.md)).
- Reserving v1.0 gives the Foundation a clean, meaningful milestone at adoption.
- Requires each release to be a coherent family state (enforced via the Architecture Lock,
  [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md)).
