# Contributing to the OIA Reference Model

The OIA is an **open** reference model ([ADR-0002](docs/adr/0002-name-open-intelligence-architecture.md)).
"Open" means vendor-neutral, institutionally stewarded, and community-extensible. The Agentics
Foundation invites you to **push back on what does not fit** and to extend the model where your
practice reveals a gap. This document explains how to engage productively.

## Principles that govern contributions

Before proposing a change, understand three commitments the model holds:

1. **The architecture is invariant; overlays change per audience.** Translation belongs in the
   [Lens System](lenses/) ([ADR-0013](docs/adr/0013-lens-system-as-integral.md)), not in the core model.
2. **OIA is additive, not competitive.** It composes with OSI, NIST CSF/AI RMF, MITRE ATLAS/D3FEND,
   OWASP LLM, CCC, and ISO/IEC 42001 ([ADR-0012](docs/adr/0012-additive-not-competitive-to-frameworks.md)).
3. **Institutional voice, no vendor branding in the body**
   ([ADR-0015](docs/adr/0015-institutional-voice-exclude-founder-branding.md)).

The [`OIA v0.5 Architecture Lock`](companion/OIA-v0.5-Architecture-Lock.pdf) is canonical. Where a
proposal and the Lock disagree, the Lock wins ([ADR-0016](docs/adr/0016-architecture-lock-as-anti-drift-spec.md)).

## High-value engagement

We especially welcome:

- **Practitioner critique** — where the architecture does not match what you see in real deployments,
  with specifics.
- **Executive-audience feedback** — whether a Lens genuinely reaches its audience in its own language.
- **Framework-composition observations** — how OIA maps to (or misaligns with) a framework you use.
- **Lens Map proposals** — new audience lenses (CFO, General Counsel & Compliance, CHRO are next),
  following the **5–7 lenses across 2–3 orthogonal axes** methodology.
- **Case reports** — anonymized accounts of applying the model, especially against the open questions
  ([ADR-0018](docs/adr/0018-keep-open-questions-open.md)) — Layer 8 continuity/rollback, agent identity,
  continuous model trust scoring.

## Lower-value engagement (likely to be declined)

- **Rename requests without an argument** — layer/span names encode decisions (see the
  [ADRs](docs/adr/)); propose renames only with reasoning against the recorded rationale.
- **Vendor taxonomy additions** — mapping a specific product catalog into the body of the model. Vendors
  are welcome to describe *their own* work in OIA layer-and-span vocabulary in their own materials.

## How to propose a change

1. **Open an issue first** for anything beyond a typo — describe the gap and the audience it affects.
2. For an accepted direction, **open a PR**. Substantive architectural changes should include a **new
   ADR** in [`docs/adr/`](docs/adr/) using [`0000-template.md`](docs/adr/0000-template.md).
3. Keep changes consistent with the Architecture Lock and the canonical vocabulary.

## PR review criteria

A change is accepted when it:

- is consistent with the Architecture Lock and canonical vocabulary (or amends the Lock deliberately, with an ADR);
- preserves the additive-not-competitive posture and institutional voice;
- puts audience translation in a Lens, not the core model;
- is defensible to a skeptical practitioner or executive in its stated audience;
- updates the affected family artifacts and directory READMEs so the family stays coherent.

## License of contributions

By contributing you agree your contribution is licensed under
[CC BY 4.0](LICENSE) ([ADR-0019](docs/adr/0019-license-cc-by-4.0.md)), consistent with the repository.
