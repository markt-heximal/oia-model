# The CIO/CTO Lens

*An audience-specific reading of the OIA Reference Model for chief information officers, chief technology officers, and the technology organisations they lead.*

**By Mark Templeton · Part of the OIA Lens System · Version 0.5 · 2026 · Published by the Agentics Foundation**

> This lens is authored to the OIA Lens System methodology (5–7 interpretive lenses across 2–3 orthogonal axes) and is consistent with the Lens System v0.3 overview and the CISO Lens v0.5. The architecture it reads is invariant; the lens changes the language.

---

## 1. What this document is

The OIA Reference Model describes the structural shape of enterprise intelligent systems. It is deliberately vendor-neutral and audience-neutral — ten layers, seven cross-layer spans, three defining properties, four named threat surfaces, written so that any audience can read the same architecture without it being slanted toward any one of them.

Reference architectures in their pure form are read by very few people. Most technology executives do not work from structural specifications. They work under capital pressure, from the frameworks that already run their organisation, and from the strategy their board is asking them to articulate this quarter. Without translation, the OIA risks being filed as a security document that never reaches the engineers who will build to it.

This is the translation. The CIO/CTO Lens reads the same OIA architecture through the questions a technology executive is actually asking, the operational frameworks already in their working vocabulary, and the build-buy-partner-license decisions that define what they must assemble. The architecture is invariant. The lens changes the language.

## 2. What is in the CIO/CTO planning conversation in 2026

Seven observations frame what the technology audience is engaging with today. The lens that follows is calibrated to them.

- **The questions are about coherence, not capability.** The capability is largely available. The unresolved problem is how to assemble it into an architecture rather than a collection of vendor decisions.
- **Capital is being committed before the architectural picture is clear.** Vendor and platform choices are being locked in under pressure, and the implications surface only after the commitment.
- **The stack boundary is not where procurement thinks it is.** Where the enterprise's own stack ends and its partners' begins is an architectural question being answered contractually, if at all.
- **De facto architecture has outrun de jure architecture.** Most enterprises already have multi-cloud AI deployment, multiple agent frameworks, and GPU concentration exposure that no one drew on purpose.
- **No single agent framework can be allowed to own the enterprise.** Business units have already adopted several; picking one official standard cripples the rest, and picking none leaves continuity un-owned.
- **FinOps categories break under AI.** Token costs, GPU-hours, and training amortisation do not sit cleanly against the CapEx/OpEx and unit-economics categories finance thought were settled.
- **The board is asking for an AI architecture the CIO must be able to govern.** Not a vendor list, not a platform standard — the architecture, in terms the board can hold them accountable for.

## 3. The six interpretive lenses on three axes

The CIO/CTO Lens organises how technology teams think about AI as an architectural category through six interpretive lenses on three orthogonal axes. The lenses are not new framings the CIO must learn; they are existing framings the technology organisation is already using, named and anchored to the frameworks it already maintains.

### Structural axis · How AI is assembled

**AI as Stack.** *The architecture, not the vendor list.* A vendor claiming to provide "the AI platform" is, by OIA reading, almost always claiming presence at four or five different layers, each of which deserves separate evaluation. Anchor: **TOGAF**.

**AI as Boundary.** *Know where your stack ends and your partners' begins.* The partner-territory layers (0, 1, 2, 4) and the enterprise-own-stack layers (3, 6, 7, 8, 9) are a capital-allocation map, not a diagram. Anchor: **Cloud well-architected frameworks** (AWS, Azure, Google Cloud).

### Operational axis · How AI is run

**AI as Service.** *Run and support intelligent systems as a service, not a project.* Lifecycle, SLAs, change management, and reliability engineering apply to agents and models as they do to any production service. Anchor: **ITIL and SRE**.

**AI as Spend.** *Know the unit economics of an agent.* Token costs, GPU-hours, and training amortisation must be governed against a structural map so spend is architectural, not merely contractual. Anchor: **FinOps Foundation**.

### Governance axis · How AI is owned over time

**AI as Managed System.** *Build to a management system you can be audited against.* AI deployment must produce the evidence, controls, and lifecycle an emerging management-system standard requires. Anchor: **ISO/IEC 42001**.

**AI as Continuity.** *The enterprise owns continuity — no single framework does.* Cognitive state, memory, and rollback are an architectural responsibility of the enterprise across whatever agent frameworks are in use, today and tomorrow. Anchor: **platform engineering** and OIA Layer 8.

## 4. The four threat surfaces as architectural requirements

The OIA names four threat surfaces of the agentic era as canonical inside the architecture. The CISO owns them as failure modes to defend against; the CIO/CTO owns them as **architecture decisions that must be made once, correctly, and centrally** — because retrofitting them across a fragmented stack is where architectural debt compounds.

**Mimicry.** *"Have we architected human-versus-agent discrimination into the interface layer once, rather than leaving each application to solve it?"* Layer 9 origin. The requirement is a shared identity-discrimination and provenance capability, not per-app reinvention.

**Agent-in-the-middle.** *"Do we have a gateway architecture for tool and MCP traffic, or is every agent-to-tool call a bespoke trust decision?"* Layer 7. The requirement is a governed orchestration boundary — a tool/MCP gateway — as enterprise infrastructure.

**Agent spoofing.** *"Is agent identity a first-class part of our identity architecture, or bolted onto human IAM?"* Identity span, Layers 5–9. The requirement is agent identity governance — scoping, attestation, lifecycle — designed in, because existing identity infrastructure was not built for non-human actors.

**Model compromise.** *"Is model trust a continuous architectural function, or a procurement-time evaluation we never revisit?"* Layer 5. The requirement is continuous model trust scoring and attested inference as a platform capability, not a one-off vendor assessment.

## 5. The ten layers through the CIO/CTO Lens

The CIO/CTO Lens reads each OIA layer through the question a technology executive is actually asking, the frameworks already in their working vocabulary, and whether the layer is typically **partner territory** or the **enterprise's own stack** — the distinction that makes capital-allocation conversations tractable.

**Layer 9 · Human and Browser Interface** — *Own stack.*
Question: "Is the human/agent boundary a shared enterprise capability, or is every application solving identity discrimination and delivery on its own?"
Frameworks: Cloud well-architected, TOGAF, Identity span.

**Layer 8 · Continuity Fabric** — *Own stack (the decisive one).*
Question: "Who owns cognitive state and rollback across our agent frameworks — the enterprise, or whichever platform we happened to buy first?"
Frameworks: Platform engineering, SRE, Auditability span. The architectural responsibility no vendor framework should be allowed to own.

**Layer 7 · Orchestration and Workflow** — *Own stack.*
Question: "How do we govern the several agent frameworks already in use without crowning one and crippling the rest — and where is our tool/MCP gateway?"
Frameworks: ITIL, platform engineering, Identity span.

**Layer 6 · Context and Knowledge** — *Own stack.*
Question: "Is our retrieval and context architecture a coherent enterprise capability, or a per-team RAG sprawl?"
Frameworks: TOGAF, ISO/IEC 42001, Provenance span.

**Layer 5 · Inference and Retrieval** — *Shared / partner-leaning.*
Question: "Build, buy, or partner for inference — and is model trust a continuous function or a one-time evaluation?"
Frameworks: FinOps, ISO/IEC 42001, Verifiability span.

**Layer 4 · Model Training and Adaptation** — *Partner territory.*
Question: "Do we train internally, fine-tune a frontier model, or rely entirely on third-party inference — and what does that choice cost architecturally?"
Frameworks: FinOps, Provenance span, Confidential Computing Consortium.

**Layer 3 · Agent Data Substrate** — *Own stack.*
Question: "Is our data substrate for agents governed as enterprise architecture, including the AI-Inside flows embedded SaaS creates?"
Frameworks: ISO/IEC 42001, TOGAF, Auditability and Provenance spans.

**Layer 2 · Sovereign Infrastructure** — *Partner territory.*
Question: "Where can regulated workloads physically run, and is our sovereignty exposure (jurisdictional, operational, energy) architectural or just contractual?"
Frameworks: Cloud well-architected, Sovereignty span, ISO/IEC 42001.

**Layer 1 · Silicon Abstraction** — *Partner territory.*
Question: "What is our exposure to GPU and silicon concentration, and are we architecturally portable across accelerators or locked to one?"
Frameworks: Cloud well-architected, Verifiability span, FinOps.

**Layer 0 · Physical Compute** — *Partner territory.*
Question: "Where do our AI workloads physically run, and what is our capital and continuity exposure to a supply-chain or energy event?"
Frameworks: FinOps, Sovereignty and Energy spans, supply-chain governance.

## 6. Adopting the lens

The CIO/CTO Lens is published as a Foundation reference. Three uses are anticipated.

- **As an architecture-planning lens for the technology organisation.** The ten layers and the partner-territory/own-stack distinction provide a structural map for capital allocation, build-buy-partner decisions, and making de facto architecture visible and governable as de jure architecture.
- **As a translation surface for board and CFO engagement.** When the technology organisation must articulate an AI strategy the board can govern and the CFO can fund, the CIO/CTO Lens renders the architecture in the operational and financial frameworks those audiences already use.
- **As a vendor-neutral evaluation vocabulary.** When evaluating platforms and vendors, the lens locates coverage claims against the architecture — a vendor's "AI platform" resolves into presence at specific layers, each evaluable on its own terms, and conflated layers become visible.

The Foundation invites the technology community to engage with the lens, push back on what does not fit, and contribute to its continued refinement. The architecture will continue to develop. The CIO/CTO Lens will develop with it.

---

*AGENTICS FOUNDATION · OIA LENS SYSTEM · THE CIO/CTO LENS · V0.5 · 2026*
