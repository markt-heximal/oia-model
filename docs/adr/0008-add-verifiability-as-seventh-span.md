# ADR-0008 — Add Verifiability as the seventh cross-layer span

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock §3.1, §4)
- **Deciders:** Mark Templeton; Proofpoint pressure-test reviewers
- **Related:** [ADR-0007](0007-cross-layer-spans-as-distinct-construct.md); OIA v0.5 Architecture Lock

## Context

The Proofpoint pressure test surfaced a property that v0.1 treated only implicitly (as an aspect of
Layer 1 and the Security span): that the operation of an intelligent system can be
*cryptographically proven* rather than *contractually asserted*. Hardware-attested execution (Intel
TDX, AMD SEV-SNP, NVIDIA Confidential GPU) and the Confidential Computing Consortium body of
work make this a distinct, threadable architectural concern.

## Decision

We will elevate **Verifiability** to a **seventh cross-layer span**, raising the span count from six to
seven. Canonical definition: *the property that the operation of an intelligent system can be
cryptographically proven, not contractually asserted — trust verified, not granted.* It is anchored at
Layer 1 and threads primarily through **Layers 1, 2, 4, 5, and 8**.

## Consequences

- Gives the model vocabulary for the "Verifiability Chain" (L1→L2→L4→L5→L8), one of the four
  executive connections ([ADR-0017](0017-executive-accessibility-layer.md)).
- Directly counters the Model-compromise threat ([ADR-0011](0011-name-four-threat-surfaces.md)),
  which lands on the Security and Verifiability spans.
- Adds an open question the model does not close: whether verifiable-not-asserted trust becomes an
  enterprise default ([ADR-0018](0018-keep-open-questions-open.md)).
- Demonstrates the extension pattern from [ADR-0007](0007-cross-layer-spans-as-distinct-construct.md):
  a new property enters as a span, not a layer.
