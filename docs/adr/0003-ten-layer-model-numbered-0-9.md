# ADR-0003 — Describe the model as ten layers, numbered 0–9

- **Status:** Accepted (v0.5; supersedes the v0.1 "nine layers" phrasing)
- **Date:** 2026 (v0.5 Architecture Lock §2)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0004](0004-layer-0-physical-compute-as-substrate.md); OIA v0.5 Architecture Lock

## Context

v0.1 described the model as "nine layers, from physical compute at the bottom." This was a
holdover from OSI's seven-layer parallelism and was internally inconsistent: the layers are
numbered 0 through 9, which is *ten* layers, and calling physical compute "the bottom of nine"
while numbering it Layer 0 is self-contradicting. The inconsistency was a credibility issue, most
acutely in the v0.1 Foreword.

## Decision

We will describe the model henceforth as **ten layers, numbered 0 through 9**. Every "nine
layers" reference becomes "ten layers, numbered 0 through 9" or a faithful variant. This is a
*renumbering only* — no layer is renamed, and no architecture changes. Canonical phrasing:
**"the OIA's ten layers and seven cross-layer spans."**

## Consequences

- Mathematical and rhetorical honesty: 0–9 inclusive is ten; the model can be scrutinized without
  the count undermining it.
- Preserves Layer 0's distinct substrate status ([ADR-0004](0004-layer-0-physical-compute-as-substrate.md))
  while remaining OSI-compatible in its bottom-up numbering.
- Forces a coordinated language update across the whole document family — the reason the
  Architecture Lock ([ADR-0016](0016-architecture-lock-as-anti-drift-spec.md)) exists.
