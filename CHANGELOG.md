# Changelog

All notable changes to the OIA Reference Model are documented here. The format is adapted
from [Keep a Changelog](https://keepachangelog.com/) for a reference architecture, and the
model follows a disciplined version cadence. **v1.0 is reserved for Agentics Foundation adoption.**

## [Unreleased] — v0.6 (planned)

Content refresh across the full document family against the v0.5 Architecture Lock.

- Refresh the Reference Paper to v0.6.
- Promote the "why it matters" lines and named cross-layer connections through the Lens System.
- Rebuild the architectural diagrams as SVG (Stack, Threat Surfaces, Lens Overlay).
- Complete the Lens System with the CIO/CTO Lens and Board Lens.
- Add the "Governing Enterprise AI" executive board reading.
- Prism application: About-dialog copy and icon set.

## [0.5] — 2026 · Architecture Lock

The **Architecture Lock** release. Absorbs the architectural refinements that emerged from the
**Proofpoint pressure test** and locks canonical vocabulary before the document-family upgrade.
The upgrade is **additive** — the architectural spine of v0.1 is preserved unchanged; it is
sharpened at seven specific points.

### Changed
- **Ten-layer renumbering.** The model is now described as ten layers, numbered 0 through 9
  (Layer 0 = Physical Compute, the substrate beneath the stack). Corrects the internally
  inconsistent "nine layers" phrasing inherited from OSI parallelism.

### Added
- **Verifiability** — a seventh cross-layer span: operations cryptographically *proven*, not
  contractually asserted (threads Layers 1, 2, 4, 5, 8).
- **Three actors** on the Identity span — humans, agents, **and foundation models** (model-as-actor
  with a continuously refreshable trust score).
- **Recovery and rollback** made explicit in Layer 8 (Continuity Fabric).
- **Agent-in-the-middle** named at Layer 7 (the "agentic SSL strip," incl. rogue MCP servers).
- **AI-Inside** named at Layer 3 — embedded-LLM data-flow visibility that traditional DLP misses.
- **Temporal validity** absorbed into the Consequence property — posture is time-bound.
- **Four named threat surfaces** of the agentic era: Mimicry, Agent-in-the-middle, Agent
  spoofing, Model compromise.

### Preserved (unchanged from v0.1)
- All ten layer names and purposes; bottom-up numbering; the two paired state-holding layers
  (Layer 3 substrate, Layer 8 fabric); additive relationship to OSI, NIST CSF, NIST AI RMF,
  MITRE ATLAS, OWASP LLM, ISO/IEC 42001; the per-layer Open Questions structure (v0.5 closes none).

### Document family at v0.5
Reference Paper, Digest, Lens System (aligned at v0.3), architectural diagrams, Overview,
Executive Accessibility Draft, Thought-Leadership Deck, Body-of-Work Framing, and this
Architecture Lock (the canonical spec, retired to the working archive once the family publishes).

## [0.1] — original working model

The original OIA working model developed as the Proofpoint pressure-test input.

- Nine-layer description (physical compute at the bottom), six cross-layer spans.
- Canonical knowledge base, Digest, Decision Log, and Working-Session Deck.
- Established the architectural spine preserved by all later versions.
