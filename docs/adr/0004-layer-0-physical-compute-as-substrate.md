# ADR-0004 — Treat Layer 0 (Physical Compute) as substrate, not stack

- **Status:** Accepted
- **Date:** 2026 (v0.1, reaffirmed v0.5)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0003](0003-ten-layer-model-numbered-0-9.md); OIA v0.5 Architecture Lock §5.1

## Context

OSI begins numbering at Layer 1. The OIA needs to represent the physics of computation —
semiconductors, energy, cooling, facilities, geographic siting — which is categorically different
from the logical layers above it: it is physical and sub-architectural, yet it grounds everything and
carries first-order Security, Sovereignty, and Energy consequences.

## Decision

We will introduce **Layer 0 — Physical Compute** as the **physical substrate beneath the
architectural stack**, distinct from Layers 1–9 ("the architectural stack"). The departure from OSI
(introducing a Layer 0) is principled and explained rather than incidental. The phrasing
"the architectural stack" is preferred when emphasizing Layers 1–9 as a logical group.

## Consequences

- Lets the model talk about energy sovereignty, grid limits, and semiconductor capacity as
  *architectural*, not merely operational, concerns — while keeping them categorically separate
  from logical layers.
- Requires the ten-layer renumbering to stay honest ([ADR-0003](0003-ten-layer-model-numbered-0-9.md)).
- Leaves open questions the model deliberately does not close: the physical-vs-operational
  sovereignty boundary, and whether current semiconductor capability supports projected scale
  ([ADR-0018](0018-keep-open-questions-open.md)).
