# Architecture Decision Records (ADRs)

This directory records the significant decisions behind the **OIA Reference Model** and the
repository that publishes it. Each ADR captures the *context*, the *decision*, and its
*consequences* so that reviewers and future contributors can understand not just what the model
says, but **why it is shaped the way it is** — and can revisit a decision when its context changes.

ADRs are the repo-native, structured counterpart to the historical
[`OIA-Model-v0.1-Decision-Log`](../../companion/) and the
[`OIA v0.5 Architecture Lock`](../../companion/OIA-v0.5-Architecture-Lock.pdf), which remain the
primary-source artifacts. Where an ADR and a primary-source artifact disagree, the artifact wins
and the ADR is a defect to be corrected (see [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md)).

## Format

We use the [Michael Nygard format](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions):
**Title · Status · Context · Decision · Consequences**. See [`0000-template.md`](0000-template.md).
Status values: `Proposed` · `Accepted` · `Superseded by ADR-XXXX` · `Deprecated`.

## Index

### Model foundations
- [ADR-0001](0001-layered-reference-model-modeled-on-osi.md) — Adopt a layered reference model modeled on OSI
- [ADR-0002](0002-name-open-intelligence-architecture.md) — Name the model "Open Intelligence Architecture (OIA)"
- [ADR-0003](0003-ten-layer-model-numbered-0-9.md) — Describe the model as ten layers, numbered 0–9
- [ADR-0004](0004-layer-0-physical-compute-as-substrate.md) — Treat Layer 0 (Physical Compute) as substrate, not stack
- [ADR-0005](0005-name-layer-8-continuity-fabric.md) — Name Layer 8 "Continuity Fabric"
- [ADR-0006](0006-two-paired-state-holding-layers.md) — Keep two asymmetric state-holding layers (3 and 8)
- [ADR-0007](0007-cross-layer-spans-as-distinct-construct.md) — Model cross-layer spans as a construct distinct from layers

### v0.5 architectural refinements (the Proofpoint pressure test)
- [ADR-0008](0008-add-verifiability-as-seventh-span.md) — Add Verifiability as the seventh cross-layer span
- [ADR-0009](0009-three-actors-on-identity-span.md) — Name three actors on the Identity span (incl. foundation models)
- [ADR-0010](0010-absorb-temporal-validity-into-consequence.md) — Absorb temporal validity into the Consequence property
- [ADR-0011](0011-name-four-threat-surfaces.md) — Name the four threat surfaces of the agentic era
- [ADR-0012](0012-additive-not-competitive-to-frameworks.md) — Position OIA as additive, not competitive, to existing frameworks

### Body of work & voice
- [ADR-0013](0013-lens-system-as-integral.md) — Make the Lens System an integral part of the model
- [ADR-0014](0014-publish-as-body-of-work.md) — Publish as a body of work, not a single document
- [ADR-0015](0015-institutional-voice-exclude-founder-branding.md) — Use institutional voice; exclude founder commercial branding
- [ADR-0016](0016-architecture-lock-as-anti-drift-spec.md) — Use an Architecture Lock as the canonical anti-drift spec
- [ADR-0017](0017-executive-accessibility-layer.md) — Add an executive-accessibility layer without changing the architecture
- [ADR-0018](0018-keep-open-questions-open.md) — Keep every v0.1 open question open in v0.5

### Repository & publishing
- [ADR-0019](0019-license-cc-by-4.0.md) — License the model under CC BY 4.0
- [ADR-0020](0020-version-cadence-v1.0-reserved.md) — Adopt a version cadence with v1.0 reserved for Foundation adoption
- [ADR-0021](0021-host-personal-transferable-to-foundation.md) — Host under personal GitHub, transferable to the Foundation
- [ADR-0022](0022-repository-structure.md) — Organize the repository into seven content directories
