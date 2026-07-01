# ADR-0017 — Add an executive-accessibility layer without changing the architecture

- **Status:** Accepted
- **Date:** 2026 (v0.5.1 Executive Accessibility Enhancement — working draft)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0013](0013-lens-system-as-integral.md); OIA Executive Accessibility Draft v0.5.1

## Context

Even with the Lens System, the model needs to be *directly engageable* by executives in minutes,
with reliable recall of its shape. This is an accessibility/editorial need, not an architectural one — the
architecture must not change to serve it.

## Decision

We will add a **non-architectural executive-accessibility layer** (v0.5.1) with three additions:

1. A **one-page executive overview** readable in 60–90 seconds with reliable recall of "ten layers,
   seven spans, four threats, three properties."
2. A **"why it matters" line** per layer and span — written to be defensible to a skeptical reader,
   converting each element from a *description* into a *proposition*.
3. **Four named "connection" callouts** that make the model memorable:
   **(1) The State-Holding Pair** (L3+L8); **(2) The Threat Concentration** (L5, L7, L9);
   **(3) The Verifiability Chain** (L1, L2, L4, L5, L8); **(4) The Three-Actor Identity Pattern** (L5, L7, L9).

These promote into the Canonical Knowledge Base first, then the Reference Paper, Visual Reference,
deck, and Prism cards.

## Consequences

- Improves adoption and recall without touching layers, spans, properties, or threats.
- The four connections become a durable teaching device reused across the executive materials and
  the Thought Leadership Deck.
- Adds a promotion/propagation task across the family (est. "roughly a day's work"), gated by three
  review decisions.
