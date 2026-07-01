# The OIA Reference Model

**A ten-layer reference architecture for securing and governing enterprise AI.**

The **OIA** (Open Intelligence Architecture) is a vendor-neutral reference model for
reasoning about the security, sovereignty, and governance of intelligent systems in the
enterprise. Where OSI gave networking a shared vocabulary and NIST CSF gave security a
shared control language, the OIA gives *enterprise AI* a shared architectural frame — one
that names where trust, identity, provenance, and verifiability live across the full stack,
from physical compute to the human-and-browser edge.

The model is **additive, not competitive**. It composes with the frameworks security teams
already use — OSI, NIST CSF, NIST AI RMF, MITRE ATLAS, OWASP LLM, and ISO/IEC 42001 —
rather than replacing them.

> Published as a working reference by the **Agentics Foundation**.
> Current architecture: **v0.5** (Architecture Lock). See [CHANGELOG.md](CHANGELOG.md).

---

## The architecture at a glance

**Ten layers, seven cross-layer spans, three defining properties, four named threat surfaces.**

### The ten layers (numbered 0–9)

Layer 0 is the physical substrate *beneath* the architectural stack; Layers 1–9 are the
architectural stack proper. Bottom-up numbering follows the OSI convention.

| # | Layer | What it governs |
|---|-------|-----------------|
| 0 | **Physical Compute** | The physical substrate — silicon, power, datacenter — beneath the stack |
| 1 | **Silicon Abstraction** | Hardware-attested execution and the trust root (TDX, SEV-SNP, Confidential GPU) |
| 2 | **Sovereign Infrastructure** | Jurisdictional, operational, and energy sovereignty of the compute base |
| 3 | **Agent Data Substrate** | The data agents read and write; embedded-LLM ("AI-Inside") data flows |
| 4 | **Model Training and Adaptation** | How models are trained, fine-tuned, and adapted |
| 5 | **Inference and Retrieval** | Model execution and retrieval; where model compromise is contained |
| 6 | **Context and Knowledge** | The knowledge and context assembled around a model |
| 7 | **Orchestration and Workflow** | Agentic orchestration; intent verification, tool integrity, kill-chain detection |
| 8 | **Continuity Fabric** | Preservation of cognitive state, learning, and judgment; recovery and rollback |
| 9 | **Human and Browser Interface** | The human/agent boundary and the browser edge |

### The seven cross-layer spans

Concerns that thread *through* the layers rather than sitting at one:

1. **Security** — widest scope; guarantees at lower layers must surface intact to higher ones.
2. **Sovereignty** — jurisdictional, operational, energy; only as strong as the weakest layer.
3. **Auditability** — the capacity to reconstruct what happened and why. Cannot be retrofitted.
4. **Identity** — who is acting, across three actor classes (humans, agents, foundation models).
5. **Energy and Environmental Concerns** — Layer-0 energy propagates as cost, impact, capacity.
6. **Provenance** — lineage of information, models, decisions, actions (Layer 3 → Layer 9).
7. **Verifiability** *(new in v0.5)* — operations *cryptographically proven*, not contractually asserted.

### The three defining properties of intelligent systems

- **Persistence** — state maintained across interactions (primarily Layer 8, secondarily Layer 3).
- **Autonomy** — action with degrees of autonomy beyond traditional applications (primarily Layer 7).
- **Consequence** — outputs/actions whose correctness and accountability must be demonstrable
  *against current threat reality*, not the reality at deployment time (posture is time-bound).

### The four named threat surfaces of the agentic era

- **Mimicry** — telling humans from agents at every entry point (Layer 9 → 7 → 3).
- **Agent-in-the-middle** — adversarial intermediaries between agents and tools, incl. rogue MCP servers (Layer 7).
- **Agent spoofing** — agent identities inheriting trust they should not have (Identity span, Layers 5–9).
- **Model compromise** — the trusted model that is no longer trustworthy: weight swap, alignment
  drift, jailbreak emergence, LLM CVEs (Layer 5, Security & Verifiability spans).

### Three actors requiring continuous trust governance

**Humans, agents, and the foundation models themselves.** Models are actors whose
trustworthiness is *dynamic* and must be continuously scored against current threat reality.

---

## The body of work

| Directory | Contents |
|-----------|----------|
| [`/model`](model/) | The **Canonical Knowledge Base** (Markdown SSOT) and the **Reference Paper** — the authoritative statement of the architecture |
| [`/lenses`](lenses/) | The **Lens System** — audience-specific overlays (CISO, CIO/CTO, and Board & Risk lenses) |
| [`/visuals`](visuals/) | Architectural diagrams — the Stack, Threat Surfaces, Lens Overlay, Framework-References map |
| [`/executive`](executive/) | Executive-facing materials — one-page Overview, Executive Accessibility Draft, Thought-Leadership Deck |
| [`/companion`](companion/) | Framing notes, the **v0.5 Architecture Lock**, decision logs, and historical/working materials |
| [`/prism-app`](prism-app/) | The Prism application — icon work and About-dialog copy |
| [`/docs`](docs/) | Glossary, design system, and acknowledgments |

## Where to start, by role

- **Security architects / practitioners** → [`/model/OIA-Reference-Paper-v0.5.pdf`](model/), then the [`/lenses`](lenses/) CISO Lens.
- **CISOs and security leaders** → the [CISO Lens](lenses/OIA-CISO-Lens-v0.5.md).
- **CIOs / CTOs** → the [CIO/CTO Lens](lenses/OIA-CIO-CTO-Lens-v0.5.md).
- **Directors, audit & risk** → the [Board and Risk Lens](lenses/OIA-Board-and-Risk-Lens-v0.5.md).
- **Executives and boards** → [`/executive/OIA-Overview-v0.5.pdf`](executive/) and the Executive Accessibility Draft.
- **Framework / standards people** → [`/visuals/OIA-Architecture-with-Framework-References-v0.5.pdf`](visuals/).
- **RAG / tooling** → [`/model/OIA-Canonical-Knowledge-Base-v0.5.md`](model/OIA-Canonical-Knowledge-Base-v0.5.md).
- **Contributors and reviewers** → the [`/companion/OIA-v0.5-Architecture-Lock.pdf`](companion/) is the canonical spec against which all family documents are checked.

## Versioning and governance

The OIA follows a disciplined version cadence (see [CHANGELOG.md](CHANGELOG.md)):

- **v0.1** — the original nine-layer working model (Proofpoint pressure test input).
- **v0.5** — current. The **Architecture Lock**: ten-layer renumbering, seven cross-layer spans
  (Verifiability added), four named threat surfaces, three-actor identity model. Additive to v0.1 —
  the architectural spine is preserved, sharpened at seven specific points.
- **v0.6** — planned content refresh across the document family.
- **v1.0** — reserved for **Agentics Foundation adoption**.

Any drift between a family deliverable and the Architecture Lock is a defect to be resolved, not
a stable state. See [CONTRIBUTING.md](CONTRIBUTING.md) for how to engage.

## License

Licensed under **[Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE)** —
free to share and adapt, including commercially, with attribution. See [CITATION.cff](CITATION.cff)
for how to cite the model.

---

*The OIA Reference Model — maintained by Mark Templeton for the Agentics Foundation. Repository: `github.com/markt-heximal/oia-model`.*
