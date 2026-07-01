# ADR-0001 — Adopt a layered reference model modeled on OSI

- **Status:** Accepted
- **Date:** 2026 (v0.1)
- **Deciders:** Mark Templeton; Reuven Cohen (architectural foundation); Agentics Foundation
- **Related:** [ADR-0007](0007-cross-layer-spans-as-distinct-construct.md), [ADR-0012](0012-additive-not-competitive-to-frameworks.md); OIA Reference Paper

## Context

Enterprise intelligent systems are described today in incompatible vocabularies — each vendor,
role, and framework names the same architecture differently. Networking faced the same problem
before the OSI reference model gave it a shared, layered, vendor-neutral structure. Intelligent
systems have distinguishing structural properties (persistence, autonomy, consequence) that
existing frameworks address only in part and never as a whole architecture.

## Decision

We will describe enterprise intelligent systems as a **layered reference model** in the lineage of
OSI: vendor-neutral, audience-neutral, published by an institutional body (the Agentics
Foundation, in the role ISO played for OSI). The model describes *the shape of the problem*, not
any single role's perspective, and is a **reference model** — not a product, a build methodology,
or a compliance framework.

## Consequences

- Gives vendors, customers, regulators, boards, and practitioners a single language for the same
  architecture; gaps become visible at the architectural level rather than the feature level.
- Inherits OSI's conventions (bottom-up numbering) and its credibility-by-neutrality, but also its
  burden: the model is only foundational if audiences "can find themselves on the page, in
  language already theirs" — motivating the Lens System ([ADR-0013](0013-lens-system-as-integral.md)).
- Commits the model to being additive to, not competitive with, existing frameworks ([ADR-0012](0012-additive-not-competitive-to-frameworks.md)).
