# ADR-0015 — Use institutional voice; exclude founder commercial branding

- **Status:** Accepted
- **Date:** 2026 (v0.1 Decision Log)
- **Deciders:** Mark Templeton; Agentics Foundation
- **Related:** [ADR-0002](0002-name-open-intelligence-architecture.md); OIA Model v0.1 Decision Log

## Context

The Agentics Foundation's founder (Reuven Cohen) has commercial ventures (Cognitum, Snapper,
ACIUM) and technologies (RuVector/RVF). Their presence in the model's body would compromise its
vendor-neutral, institutional credibility — the very thing that makes a reference model authoritative.
Yet Anthropic's MCP, Claude Memory/Skills, and browser work are genuinely load-bearing examples.

## Decision

We will write the model in an **institutional third-person voice** (the v0.1 Foreword by Reuven Cohen
is the single named-voice exception) and **exclude founder commercial branding** from the body:

- No Cognitum, Snapper, or ACIUM branding in the model text.
- Validation results (e.g., "Snapper's 70/70") referenced through the independent lab (SecureIQ Lab)
  without naming the venture.
- Third-party technologies named naturally and even-handedly — Anthropic (MCP, Claude Memory/Skills,
  browser use) mentioned at frequency comparable to OpenAI, Google, Microsoft, Meta, Mistral.
- "Container" avoided as a layer name because it is brand-captured ([ADR-0005](0005-name-layer-8-continuity-fabric.md)).

## Consequences

- Protects the model's neutrality and its "Open" claim ([ADR-0002](0002-name-open-intelligence-architecture.md)).
- Requires editorial discipline in every family document and in contributions
  ([CONTRIBUTING.md](../../CONTRIBUTING.md) discourages vendor taxonomy additions).
- Keeps the door open to institutional adoption ([ADR-0021](0021-host-personal-transferable-to-foundation.md)).
