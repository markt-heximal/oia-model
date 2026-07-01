# ADR-0005 — Name Layer 8 "Continuity Fabric"

- **Status:** Accepted
- **Date:** 2026 (v0.1, reframed v0.5 §3.3)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0006](0006-two-paired-state-holding-layers.md); OIA Model v0.1 Decision Log

## Context

Layer 8 governs the preservation of cognitive state, learning, and judgment across the transitions
the stack undergoes — the "architectural centrepiece" of the model, and the layer every audience
independently identifies as a universal gap. Four names were considered: **Cognitive Substrate,
Cognitive Core, Cognitive Container, Continuity Fabric.**

## Decision

We will name Layer 8 the **Continuity Fabric**.

- "Container" is rejected: the term is brand-captured (RuVector's RVF container technology) and
  would import commercial connotations into an institutional model.
- "Substrate" is rejected to preserve the deliberate asymmetry with Layer 3, the *Agent Data
  Substrate* ([ADR-0006](0006-two-paired-state-holding-layers.md)).
- In v0.5 the layer is reframed additively to make **recovery, rollback, and post-incident integrity**
  explicit alongside cognitive-state continuity, giving practitioners a concrete failure mode and
  responsibility (witness chains).

## Consequences

- "Fabric" (active, cross-cutting) vs. "Substrate" (foundational, beneath) encodes the Layer 3 /
  Layer 8 relationship in the names themselves.
- Layer 8 becomes the anchor for the Verifiability span's upper reach ([ADR-0008](0008-add-verifiability-as-seventh-span.md))
  and carries the model's most consequential open questions ([ADR-0018](0018-keep-open-questions-open.md)).
