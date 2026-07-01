# ADR-0011 — Name the four threat surfaces of the agentic era

- **Status:** Accepted
- **Date:** 2026 (v0.5 Architecture Lock §3.4, §3.5, §3.7, §5.3)
- **Deciders:** Mark Templeton; Proofpoint pressure-test reviewers
- **Related:** [ADR-0006](0006-two-paired-state-holding-layers.md), [ADR-0009](0009-three-actors-on-identity-span.md); OIA Visual Reference (Threat Surfaces diagram)

## Context

Security audiences need a shared, architecture-anchored vocabulary for agentic-era threats. v0.1
named individual concerns per layer but did not consolidate the defining threats or tie them to the
stack in a way that gives practitioners a common language.

## Decision

We will name **four threat surfaces** and locate each on the architecture (rather than introducing a
new architectural element):

- **Mimicry** — telling humans from agents at every entry point. Layer 9 origin → propagates L7 → lands L3.
- **Agent-in-the-middle** ("the agentic SSL strip") — adversarial intermediary between agent and tool,
  including rogue MCP servers. Layer 7.
- **Agent spoofing** — agent identities inheriting trust they should not have. Identity span, Layers 5–9.
- **Model compromise** — weight swap, alignment drift, jailbreak emergence, LLM CVEs. Layer 5,
  Security and Verifiability spans.

We also name AI-Inside (Layer 3, embedded-LLM data egress) and Agent-in-the-middle (Layer 7) in
the relevant layer Key Concerns.

## Consequences

- Three of the four originate or propagate through Layer 7 and the fourth at Layer 5, yielding the
  structural claim that agentic-era security "concentrates its weight inside the operational stack, not
  at the perimeter" — the "Threat Concentration" executive connection ([ADR-0017](0017-executive-accessibility-layer.md)).
- Explicitly *not* a complete catalog; other threats (prompt injection, poisoning, inversion, shadow-AI)
  remain named in per-layer specs.
- Agent spoofing is flagged as the model's named open question ([ADR-0018](0018-keep-open-questions-open.md)).
