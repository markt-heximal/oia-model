# ADR-0006 — Keep two asymmetric state-holding layers (3 and 8)

- **Status:** Accepted
- **Date:** 2026 (v0.1, preserved v0.5 §6)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0005](0005-name-layer-8-continuity-fabric.md); OIA Reference Paper §3; Executive Accessibility Draft ("Connection 1 — The State-Holding Pair")

## Context

Intelligent systems hold state in two architecturally different ways: a persistent, auditable,
access-controlled *data* environment, and an active *cognitive-state* continuity that survives
transitions. Collapsing these into one "state" layer produces architecturally untenable designs.

## Decision

We will model **two paired but asymmetric state-holding layers**:

- **Layer 3 — Agent Data Substrate:** the *substrate*, the persistent data below the operational
  stack (originates the Auditability and Provenance spans).
- **Layer 8 — Continuity Fabric:** the *fabric*, active continuity of cognitive state above the
  operational stack.

The two bracket the operational layers (4–7). The asymmetry (substrate below / fabric above) is
load-bearing and must be preserved in naming and framing.

## Consequences

- Named as the "State-Holding Pair," it becomes one of the four executive "connections" that make
  the model memorable ([ADR-0017](0017-executive-accessibility-layer.md)).
- Constrains naming decisions elsewhere — e.g., Layer 8 cannot be "Substrate"
  ([ADR-0005](0005-name-layer-8-continuity-fabric.md)).
- Mimicry propagates L9 → L7 and *lands* at Layer 3 as persisted state, tying the pair to the
  threat model ([ADR-0011](0011-name-four-threat-surfaces.md)).
