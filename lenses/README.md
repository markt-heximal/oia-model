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

## Published lenses

- **CISO Lens** — security organisation (present here).
- **CIO/CTO Lens** — technology organisation (anchors: TOGAF, ITIL, FinOps, ISO/IEC 42001, SRE). *To add.*
- **Board and Risk Lens** — directors/audit/risk; inverts the model (spans primary, layers substrate)
  (anchors: NIST AI RMF, ISO/IEC 42001, EU AI Act, SEC/FCA, Caremark). *To add.*

## Anticipated lenses

CFO · General Counsel & Compliance · CHRO — added as practitioner demand supports.

## Cross-audience finding

Layer 8 (Continuity Fabric) emerges as a **universal gap** across every audience — read as recovery/rollback
(security), state-coherence (technology), and audit-chain-integrity (governance).
