# ADR-0014 — Publish as a body of work, not a single document

- **Status:** Accepted
- **Date:** 2026 (Body of Work Framing v0.5)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md), [ADR-0022](0022-repository-structure.md); OIA Body of Work Framing v0.5

## Context

Different audiences need different depths and formats — a 40-page reference paper, a one-page
overview, a board deck, machine-readable knowledge for RAG. A single document cannot serve
practitioners, executives, boards, and downstream tooling at once.

## Decision

We will publish OIA as a **body of work**. The v0.5 family is:

1. **OIA Reference Paper** (~40pp, authoritative)
2. **OIA Lens System** (the Lens Maps)
3. **OIA Visual Reference** (three diagrams: the Stack, the Lens Overlay, the Four Named Threat Surfaces)
4. **OIA Thought Leadership Deck** (board/executive, co-brandable)
5. **OIA v0.5 Architecture Lock** (internal canonical spec)

Plus a machine-readable **Canonical Knowledge Base** (Markdown single-source-of-truth for RAG) and
the **OIA Prism** app. A **reading guide by role** provides short/medium/long entry paths.

## Consequences

- Maximizes reach: each audience gets a native artifact; the repository directory structure mirrors the
  family ([ADR-0022](0022-repository-structure.md)).
- Introduces drift risk across artifacts, which is exactly why the Architecture Lock exists
  ([ADR-0016](0016-architecture-lock-as-anti-drift-spec.md)).
- Requires a defined authoring sequence: diagrams + Reference Paper first, then Digest, then Lens
  System, then cover doc and deck once the family is coherent.
