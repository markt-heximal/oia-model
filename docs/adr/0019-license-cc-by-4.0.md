# ADR-0019 — License the model under CC BY 4.0

- **Status:** Accepted
- **Date:** 2026-07-01 (repository)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0002](0002-name-open-intelligence-architecture.md), [ADR-0020](0020-version-cadence-v1.0-reserved.md); [LICENSE](../../LICENSE), [CITATION.cff](../../CITATION.cff)

## Context

The OIA is a *reference document* meant for the widest possible adoption — vendors referencing it in
customer conversations, practitioners integrating the knowledge base, analysts citing it by version.
"Open" is load-bearing in the name ([ADR-0002](0002-name-open-intelligence-architecture.md)). Software
licenses (MIT/Apache) fit code, not prose; restrictive doc licenses (NC/ND) would block the commercial
and derivative use that adoption requires.

## Decision

We will license the OIA Reference Model under **Creative Commons Attribution 4.0 International
(CC BY 4.0)**: free to share and adapt, including commercially, provided attribution is given. We
provide a recommended attribution string and a `CITATION.cff` so the model is citable from day one.

## Consequences

- Permissive enough to encourage adoption; the attribution requirement keeps provenance intact,
  reinforcing the Provenance span the model itself teaches.
- Vendors can build on and reference OIA without a bespoke license negotiation.
- Compatible with a future transfer to the Foundation ([ADR-0021](0021-host-personal-transferable-to-foundation.md)):
  the license travels with the work.
