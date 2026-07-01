# ADR-0007 — Model cross-layer spans as a construct distinct from layers

- **Status:** Accepted
- **Date:** 2026 (v0.1, extended v0.5)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0008](0008-add-verifiability-as-seventh-span.md); OIA v0.5 Architecture Lock §4

## Context

Some concerns — security, identity, provenance — do not live at a single layer; they thread
through many. Representing them *as* layers would distort the stack and hide their propagating
nature: a guarantee at a lower layer that fails to surface intact at a higher one is the actual
failure mode.

## Decision

We will model **cross-layer spans** as a first-class construct, distinct from layers. Layers
describe *where work happens*; spans describe *how consequences propagate*. The v0.1 set is six —
**Security, Sovereignty, Auditability, Identity, Energy and Environmental Concerns, Provenance** —
raised to seven in v0.5 with Verifiability ([ADR-0008](0008-add-verifiability-as-seventh-span.md)).

## Consequences

- Enables statements like "sovereignty posture is only as strong as the weakest layer" and
  "auditability cannot be retrofitted" — properties that are invisible in a pure layer view.
- The Board and Risk Lens can *invert* the model — treating spans as primary and layers as
  substrate — precisely because spans are their own construct ([ADR-0013](0013-lens-system-as-integral.md)).
- Creates a clean extension point: new architectural properties can be added as spans without
  disturbing the layer count (as Verifiability was).
