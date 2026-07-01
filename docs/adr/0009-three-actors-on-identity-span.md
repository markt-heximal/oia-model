# ADR-0009 — Name three actors on the Identity span (incl. foundation models)

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock §3.2)
- **Deciders:** Mark Templeton; Proofpoint pressure-test reviewers
- **Related:** [ADR-0011](0011-name-four-threat-surfaces.md); OIA v0.5 Architecture Lock

## Context

v0.1's Identity span implicitly addressed humans and agents. But provider weight swaps, alignment
drift, jailbreak emergence, and LLM-specific CVEs make a *model's* trustworthiness dynamic. Treating
models as static dependencies misses a whole class of risk: the trusted model that is no longer
trustworthy.

## Decision

We will strengthen the Identity span by naming **three classes of actor** that require continuous
trust governance: **humans, agents, and foundation models.** The model becomes an *actor* —
"model-as-actor" — with a continuously refreshable trust score, scored against current threat reality
rather than treated as a fixed dependency. Canonical phrasing: *"three actors that require continuous
trust governance — humans, agents, and the foundation models themselves."*

## Consequences

- Reframes Layer 5 (Inference and Retrieval) as the home of continuous model trust scoring and the
  containment point for Model compromise ([ADR-0011](0011-name-four-threat-surfaces.md)).
- Underpins the CISO Lens theme that identity now spans non-human, dynamically-trustworthy actors —
  "every agent is an employee with elevated privileges," and every model a monitored actor.
- Leaves the agent-identity problem (scoping, attestation, trust inheritance) explicitly open —
  existing identity infrastructure was not built for it ([ADR-0018](0018-keep-open-questions-open.md)).
