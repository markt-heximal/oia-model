# ADR-0010 — Absorb temporal validity into the Consequence property

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock §3.6)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0008](0008-add-verifiability-as-seventh-span.md); OIA v0.5 Architecture Lock

## Context

The correctness of an intelligent system's posture is time-dependent in a way infrastructure
correctness is not: a cleared CVE, a patched library, a swapped model, or a freshly emerged
jailbreak each change correctness mid-flight. The pressure test raised whether this warranted a
*fourth* defining property alongside Persistence, Autonomy, and Consequence.

## Decision

We will **not** add a fourth property. We will instead absorb temporal validity into the existing third
property, **Consequence**, adding a temporal dimension: intelligent systems produce outputs and take
actions whose correctness, accountability, and auditability must be demonstrable — **and
demonstrable against current threat reality, not the threat reality at the moment of deployment.**
"Architectural posture is time-bound."

## Consequences

- Keeps the model's spine at exactly three defining properties, avoiding taxonomy inflation.
- Ties Consequence to the Verifiability span and continuous trust scoring — posture must be
  re-proven over time, not asserted once ([ADR-0008](0008-add-verifiability-as-seventh-span.md),
  [ADR-0009](0009-three-actors-on-identity-span.md)).
- Gives security audiences the "living protection / mark-to-market" framing without adding structure.
