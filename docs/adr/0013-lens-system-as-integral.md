# ADR-0013 — Make the Lens System an integral part of the model

- **Status:** Accepted
- **Date:** 2026 (Lens System v0.3, aligned to v0.5)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0001](0001-layered-reference-model-modeled-on-osi.md), [ADR-0012](0012-additive-not-competitive-to-frameworks.md); OIA Lens System v0.3; OIA Visual Reference (Diagram 2)

## Context

A reference architecture in pure form is read by very few. Without translation, OIA "risks being
filed as a security document by the first CISO who picks it up." Each executive audience has its own
vocabulary, frameworks, and questions. The architecture must reach the people accountable for AI
without diluting itself into any one of their perspectives.

## Decision

We will treat the **Lens System** as an *integral* part of the model, not an adjacent artifact. Each
**Lens Map** is an audience-specific overlay: the architecture is invariant; the overlay changes per
audience. Methodology bound: **5–7 interpretive lenses across 2–3 orthogonal axes** — "enough to
be coherent, restrained enough to be clear."

- **Published (v0.5):** CISO Lens (most developed; seven lenses on three axes — Amplifier / Domain /
  Attacker / Defender / Asset / Workforce / Trustless), CIO/CTO Lens, Board and Risk Lens.
- **Anticipated:** CFO, General Counsel & Compliance, CHRO lenses "as demand supports."

## Consequences

- Delivers the framework anchoring that [ADR-0012](0012-additive-not-competitive-to-frameworks.md)
  requires, per audience.
- Surfaces a cross-audience finding: Layer 8 is a *universal gap* — read as recovery/rollback
  (security), state-coherence (technology), and audit-chain-integrity (governance).
- The Board Lens may invert the model (spans primary, layers substrate), which is only coherent
  because spans are a distinct construct ([ADR-0007](0007-cross-layer-spans-as-distinct-construct.md)).
- Creates ongoing authoring load: every architectural change must be reflected across published lenses.
