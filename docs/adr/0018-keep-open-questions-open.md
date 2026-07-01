# ADR-0018 — Keep every v0.1 open question open in v0.5

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock §6)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md); OIA Reference Paper §17

## Context

Each layer names what is unresolved about it (the per-layer "Open Questions" structure). The v0.5
upgrade sharpens the architecture at seven points and could be tempted to *close* questions to signal
maturity. But the questions (continuity primitives, agent identity governance, model trust scoring,
sovereign-regime harmonization, energy economics at scale, and more) remain genuinely open in the
field.

## Decision

We will **preserve the Open Questions structure and close none of them in v0.5.** The upgrade is
additive; sharpening the architecture is not the same as resolving the field's unknowns. New open
questions are added where v0.5 introduces new structure (e.g., whether verifiable-not-asserted trust
becomes an enterprise default; the end-to-end attestation chain; the agent-identity problem).

## Consequences

- Intellectual honesty: the model does not claim resolution it has not earned; reviewers familiar with
  v0.1 find v0.5 "immediately recognisable."
- Layer 8's rollback/continuity gap remains flagged as "the most architecturally consequential gap in
  the present technology stack."
- Creates a standing research and contribution agenda ([CONTRIBUTING.md](../../CONTRIBUTING.md)
  invites case reports and practitioner critique against these questions).
