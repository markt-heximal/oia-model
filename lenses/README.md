# /lenses — The Lens System

Audience-specific overlays that translate the invariant architecture into each executive audience's own
vocabulary, frameworks, and questions. **The architecture is invariant; the overlay changes per audience.**
See [ADR-0013](../docs/adr/0013-lens-system-as-integral.md).

Methodology: each Lens Map uses **5–7 interpretive lenses across 2–3 orthogonal axes** — enough to be
coherent, restrained enough to be clear.

## Contents

- **`OIA-Lens-System-v0.3.pdf`** / **`.docx`** — the Lens System overview and methodology (v0.3, aligned to v0.5).
- **`OIA-CISO-Lens-v0.5.docx`** — the CISO Lens (the most fully developed). Seven lenses on three axes —
  *Threat* (AI as Amplifier / Domain / Attacker), *Operational* (AI as Defender / Asset / Workforce),
  *Foundational* (AI as Trustless). Anchors: NIST CSF, NIST AI RMF, MITRE ATLAS/D3FEND, OWASP LLM, CCC.
- **`OIA-CIO-CTO-Lens-v0.5.md`** (Markdown source; `.docx` + `.pdf` generated from it) — the CIO/CTO Lens (technology organisation). Six lenses on three axes —
  *Structural* (AI as Stack / Boundary), *Operational* (AI as Service / Spend), *Governance* (AI as Managed
  System / Continuity). Anchors: TOGAF, ITIL/SRE, FinOps, ISO/IEC 42001, cloud well-architected frameworks.
  Reads the layers as a partner-territory vs. own-stack capital-allocation map.
- **`OIA-Board-and-Risk-Lens-v0.5.md`** (Markdown source; `.docx` + `.pdf` generated from it) — the Board and Risk Lens (directors, audit/risk, CROs). Six lenses on
  three axes — *Accountability* (AI as Fiduciary Duty / Disclosure), *Oversight* (AI as Managed Risk / Audited
  System), *Exposure* (AI as Regulated System / Sovereign Exposure). Anchors: NIST AI RMF, ISO/IEC 42001,
  EU AI Act, SEC/FCA disclosure, Caremark. **Inverts the model** — reads spans-first, layers as substrate.

## Published lenses

- **CISO Lens** — security organisation (present here).
- **CIO/CTO Lens** — technology organisation (anchors: TOGAF, ITIL, FinOps, ISO/IEC 42001, SRE). Present here.
- **Board and Risk Lens** — directors/audit/risk; inverts the model (spans primary, layers substrate)
  (anchors: NIST AI RMF, ISO/IEC 42001, EU AI Act, SEC/FCA, Caremark). Present here.

## Anticipated lenses (draft v0.1 — author review pending)

Authored ahead of formal publication, to the Lens System methodology. Provided as Markdown + DOCX + PDF;
each is marked as a draft to be reviewed and pressure-tested before it is treated as canonical.

- **`OIA-CFO-Lens-v0.1-draft.md`** — finance organisation. Six lenses on three axes — *Capital* (CapEx /
  OpEx), *Exposure* (Concentration Risk / Commitment), *Value* (Unit Economics / Portfolio). Anchor: FinOps.
- **`OIA-General-Counsel-Lens-v0.1-draft.md`** — legal & compliance. *Liability* (Liable Actor / Output
  Owner), *Regulatory* (Regulated System / Managed Compliance), *Evidence* (Provable Record / Sovereign
  Obligation). Anchors: EU AI Act, ISO/IEC 42001.
- **`OIA-CHRO-Lens-v0.1-draft.md`** — people organisation (agents as non-human workforce). *Workforce*
  (Augmentation / Non-Human Workforce), *Governance* (Managed Headcount / Performance-Managed), *Capability*
  (Reskilling / Culture and Trust). Anchors on Layers 7, 9, and the Identity span.

## Cross-audience finding

Layer 8 (Continuity Fabric) emerges as a **universal gap** across every audience — read as recovery/rollback
(security), state-coherence (technology), and audit-chain-integrity (governance).
