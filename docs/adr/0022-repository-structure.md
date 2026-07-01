# ADR-0022 — Organize the repository into seven content directories

- **Status:** Accepted
- **Date:** 2026-07-01 (repository)
- **Deciders:** Mark Templeton
- **Related:** [ADR-0014](0014-publish-as-body-of-work.md); [README.md](../../README.md)

## Context

The body of work spans authoritative prose, audience lenses, diagrams, executive materials, working
history, an application, and supporting docs ([ADR-0014](0014-publish-as-body-of-work.md)). A flat
repository would obscure the structure and make role-based navigation hard.

## Decision

We will organize the repository into **seven content directories**, each with a README describing
purpose, contents, and reading order, mirroring the body of work:

- **`/model`** — canonical knowledge base and Reference Paper
- **`/lenses`** — CISO, CIO/CTO, Board lenses and methodology
- **`/visuals`** — architectural diagrams (Stack, Threat Surfaces, Lens Overlay, Framework-References map)
- **`/executive`** — board reading, one-page overview, thought-leadership deck
- **`/companion`** — framing notes, Architecture Lock, historical/working materials
- **`/prism-app`** — Prism application icon work and About-dialog copy
- **`/docs`** — glossary, design system, acknowledgments, and this ADR set

## Consequences

- Enables the README's "where to start, by role" navigation and mirrors the artifact family.
- Original source documents (PDF/DOCX/PPTX) are versioned in-repo as the deliverables; a
  `MISSING-FILES.md` tracks assets still to be added (SVG diagrams, remaining lenses, board reading).
- Directory READMEs must be kept in step with content as the family evolves.
