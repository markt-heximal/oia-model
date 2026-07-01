# ADR-0016 — Use an Architecture Lock as the canonical anti-drift spec

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0014](0014-publish-as-body-of-work.md); OIA v0.5 Architecture Lock

## Context

Upgrading a multi-artifact body of work ([ADR-0014](0014-publish-as-body-of-work.md)) from v0.1 to
v0.5 touches the Reference Paper, Digest, Lens System, diagrams, and deck simultaneously. Without a
single reference, architectural language drifts across artifacts and the model loses coherence.

## Decision

We will produce an **Architecture Lock** — a compressed, canonical specification of exactly what
changes v0.1 → v0.5, the canonical vocabulary all family documents must use, and what does *not*
change — and lock it **before** heavy content work begins. It is an internal working document, retired
to the Foundation's archive once the family is published at v0.5.

Governing rule: *"There is no stable equilibrium in which the deliverables and the lock disagree."* Any
observed drift is resolved by correcting the deliverable or amending the Lock.

## Consequences

- Gives every deliverable one reference against which language is checked; enables parallel authoring.
- Establishes precedence: where an ADR or artifact disagrees with the Lock, the Lock/primary-source
  wins and the other is a defect (this ADR governs the ADR set itself).
- Sets a reusable pattern for future upgrades (a v0.6 Lock precedes the v0.6 content refresh).
