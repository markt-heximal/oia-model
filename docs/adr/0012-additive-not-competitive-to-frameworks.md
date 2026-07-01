# ADR-0012 — Position OIA as additive, not competitive, to existing frameworks

- **Status:** Accepted
- **Date:** 2026 (v0.1, preserved v0.5 §6)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0001](0001-layered-reference-model-modeled-on-osi.md), [ADR-0013](0013-lens-system-as-integral.md); OIA Overview v0.5

## Context

Security and governance leaders already invest in established frameworks. A new model that
competes with them for the same slot invites rejection ("we already have NIST"). The frameworks
solve different problems than an architecture of intelligent systems does.

## Decision

We will position OIA as **additive, not competitive**. The model composes with the frameworks
teams already use, each in its proper role:

- **OSI** (networking) · **ISO/IEC 42001** (AI management systems) · **NIST CSF** (program structure)
  · **NIST AI RMF** (AI risk governance) · **MITRE ATT&CK / ATLAS** and **OWASP LLM Top 10**
  (threat awareness) · **MITRE D3FEND** (defender techniques) · **Confidential Computing Consortium**
  (verifiability primitives) — **and OIA for the architecture of the intelligent systems themselves.**

Vendors are invited to describe their work in OIA layer-and-span vocabulary so gaps surface at the
architectural level.

## Consequences

- Lowers adoption resistance: OIA slots *between* the frameworks rather than displacing any.
- Requires per-audience framework anchoring, delivered through the Lens System
  ([ADR-0013](0013-lens-system-as-integral.md)) — e.g., the CISO Lens anchors NIST CSF/AI RMF,
  MITRE ATLAS/D3FEND, OWASP LLM, CCC.
- Obliges the model to keep its framework mappings current as those frameworks evolve.
