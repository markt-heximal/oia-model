---
title: The OIA Reference Model
subtitle: Open Intelligence Architecture — Canonical Knowledge Base
version: v0.5
year: 2026
publisher: Published by the Agentics Foundation
author: Mark Templeton
note: >
  This is the machine-readable single-source-of-truth (SSOT) for the OIA body of work,
  intended for retrieval-augmented generation (RAG) systems and as the authoritative
  long-form text. It consolidates the v0.5 Reference Paper and the v0.5 Architecture Lock
  into one canonical document. Where v0.1 and v0.5 differ, v0.5 governs.
---

# The OIA Reference Model — Canonical Knowledge Base (v0.5)

**Open Intelligence Architecture: a structural reference for the design, deployment, and governance of enterprise intelligent systems.**

*Published by the Agentics Foundation · By Mark Templeton · Version 0.5 · 2026*

> This document is the machine-readable single-source-of-truth for the OIA body of work. It preserves the exact canonical vocabulary locked at v0.5. Every fact traces to the v0.5 Reference Paper, the v0.5 Architecture Lock, or the v0.5 Overview. The architecture is expressed as **ten layers, numbered 0 through 9, with seven cross-layer spans threading through them.**

---

## Table of Contents

1. [What the OIA Is and Is Not](#1-what-the-oia-is-and-is-not)
2. [The Three Defining Properties of Intelligent Systems](#2-the-three-defining-properties-of-intelligent-systems)
3. [The Ten Layers (0–9)](#3-the-ten-layers-09)
   - [Layer Summary Table](#layer-summary-table)
   - [Layer 0 · Physical Compute](#layer-0--physical-compute)
   - [Layer 1 · Silicon Abstraction](#layer-1--silicon-abstraction)
   - [Layer 2 · Sovereign Infrastructure](#layer-2--sovereign-infrastructure)
   - [Layer 3 · Agent Data Substrate](#layer-3--agent-data-substrate)
   - [Layer 4 · Model Training and Adaptation](#layer-4--model-training-and-adaptation)
   - [Layer 5 · Inference and Retrieval](#layer-5--inference-and-retrieval)
   - [Layer 6 · Context and Knowledge](#layer-6--context-and-knowledge)
   - [Layer 7 · Orchestration and Workflow](#layer-7--orchestration-and-workflow)
   - [Layer 8 · Continuity Fabric](#layer-8--continuity-fabric)
   - [Layer 9 · Human and Browser Interface](#layer-9--human-and-browser-interface)
4. [The Seven Cross-Layer Spans](#4-the-seven-cross-layer-spans)
   - [Span Summary Table](#span-summary-table)
5. [The Four Named Threat Surfaces of the Agentic Era](#5-the-four-named-threat-surfaces-of-the-agentic-era)
6. [The Three Actors](#6-the-three-actors)
7. [The Four Executive Connections](#7-the-four-executive-connections)
8. [Relationship to External Frameworks](#8-relationship-to-external-frameworks)
9. [Version Note: v0.1 → v0.5](#9-version-note-v01--v05)

---

## 1. What the OIA Is and Is Not

The **Open Intelligence Architecture (OIA) Reference Model** describes the structural shape of **enterprise intelligent systems** — the agents, models, and automation that increasingly do real work alongside human teams. Its purpose is to give the people who **design, deploy, govern, and oversee** these systems a shared architectural vocabulary that does not depend on any particular vendor's product map, any particular framework's compliance taxonomy, or any particular role's working language.

The model is **layered, audience-neutral, and additive** to the existing reference architectures and management frameworks the enterprise already uses. It is inspired by the **OSI reference model** that has organised networking for over four decades: the bet is that intelligent systems benefit from the same kind of shared structural vocabulary that networking did — a vocabulary in which vendors, customers, regulators, and boards can all describe the same architecture in the same language.

**The OIA is:**

- A description of *what enterprise intelligent systems are made of*, how their layers relate, and what concerns thread through the architecture.
- A **working specification** — foundational, and open to the audiences that will use it and to the technological progress that will refine it.
- Structured around **ten layers and seven cross-layer spans**, plus **four named threat surfaces** and **three classes of actor**.

**The OIA is not:**

- A product.
- A methodology for *building* intelligent systems.
- A compliance framework.
- A competitor to existing reference architectures or management frameworks — it is **additive** to them (see §8).

**Three commitments shape the model.** First, that intelligent systems have **structural properties** that distinguish them from the application architectures of the past — properties that change what "good" looks like at the architectural level, not just at the operational one. Second, that the architecture must be drawn against the **structural shape of the problem** rather than against any single role's perspective on it; security, infrastructure, governance, finance, and workforce concerns must each find themselves in the architecture without forcing distortion. Third, that a reference model is foundational only when the **audiences accountable for the work can find themselves on the page**, in language already theirs — the commitment that shapes the companion **OIA Lens System**.

**The Lens System.** The Reference Model is published alongside the **OIA Lens System** — audience-specific overlays that translate the architecture into the language of the executives accountable for AI inside the enterprise. Three lenses are published in the first release: the **CISO Lens** (security organisation), the **CIO/CTO Lens** (technology organisation), and the **Board and Risk Lens** (directors, audit and risk committees, chief risk officers). Three further lenses are anticipated: a **CFO Lens**, a **General Counsel and Compliance Lens**, and a **CHRO Lens**. Each lens reads the same ten layers and seven spans, but through the questions, risks, framework anchors, and interpretive frames of its audience. **The architecture is invariant; the overlay changes per audience.**

---

## 2. The Three Defining Properties of Intelligent Systems

Before the architecture, the properties. Three properties distinguish intelligent systems from the application architectures of the past and shape what the architecture must address. Each has **primary architectural locations** — the layer or span where it is most directly addressed — and each **propagates concerns** across the rest of the model. Without these properties, the layers would describe a generic distributed system; with them, they describe enterprise intelligence specifically.

### 2.1 Persistence

Intelligent systems **maintain state across interactions**. Unlike traditional applications, where each session is structurally bounded and state is either explicit or transient, intelligent systems carry context, memory, learning, and judgment forward through time. A conversation continues across sessions; an agent's knowledge of an organisation accumulates; a model's behaviour reflects its training history. The persistence is not optional — it is what makes the system useful, and it is also what makes the system harder to govern.

- **Addressed primarily at Layer 8 (Continuity Fabric)**, secondarily at **Layer 3 (Agent Data Substrate)** — the two state-holding layers that bracket the operational stack.

### 2.2 Autonomy

Intelligent systems **act with degrees of autonomy** that exceed what traditional applications offer. They take multi-step actions, invoke tools, and make decisions inside scopes of authority that the humans who deployed them did not pre-approve case-by-case. They can act faster than humans can supervise them in the moment. The architectural consequence is that the boundary between "the system did what it was told" and "the system did what it decided" is structurally meaningful.

- **Addressed primarily at Layer 7 (Orchestration and Workflow)**, with significant interactions at **Layer 5 (Inference and Retrieval)** where autonomy originates and **Layer 9 (Human and Browser Interface)** where its outputs land.

### 2.3 Consequence

Intelligent systems **produce outputs and take actions whose correctness, accountability, and auditability must be demonstrable — and demonstrable against current threat reality, not against the threat reality at the moment of deployment.** A patched library, a swapped model, a freshly emerged jailbreak: each changes correctness mid-flight. Consequence is therefore not a one-time property to be verified at release; it is a **continuous property** to be governed throughout operation. **Architectural posture is time-bound.**

- **Addressed through the cross-layer spans** — auditability, provenance, identity, security, sovereignty, energy, and (new in v0.5) verifiability — not at any single layer.

> **v0.5 refinement (temporal validity):** Rather than introducing a fourth defining property, v0.5 absorbs the time-dependence of correctness into Consequence by adding a temporal dimension. The correctness of an intelligent system's posture is time-dependent in a way infrastructure correctness is not.

**Persistence, autonomy, consequence** — each propagating concerns across the architecture, none addressable at any single layer. The layers describe *where the work happens*; the spans describe *how the consequences propagate*. Without persistence there is no need for Layer 8; without autonomy the orchestration concerns of Layer 7 collapse into ordinary service composition; without consequence in its temporal sense the cross-layer spans collapse into static compliance categories.

---

## 3. The Ten Layers (0–9)

The OIA describes enterprise intelligent systems as **ten layers, numbered 0 through 9, with seven cross-layer spans threading through them.** The bottom-up numbering convention is consistent with the OSI reference model, but the OIA introduces **Layer 0 — Physical Compute** — to acknowledge that intelligent systems, unlike networking, are deeply shaped by physical compute constraints that cannot be abstracted away. **Layer 0 is the physical substrate beneath the architectural stack; Layers 1 through 9 are the architectural stack that rests on it.** The architecture is read bottom-up.

**Two layers hold state:** **Layer 3**, the substrate of persistent data, and **Layer 8**, the active fabric that preserves cognitive continuity through change. The asymmetric pairing of these two layers — substrate below the operational stack, fabric above it — is the architectural recognition that intelligent systems hold state in two distinct ways, and that conflating them produces architecturally untenable designs.

### Layer Summary Table

| Layer | Canonical Name | Primary Purpose | Spans Concentrating Here |
|------:|----------------|-----------------|--------------------------|
| **0** | Physical Compute | The physical substrate: semiconductors, energy, cooling, facilities, geographic siting | Security (physical), Sovereignty (origin), Energy (origin) |
| **1** | Silicon Abstraction | Hardware diversity behind portable runtimes and trusted execution primitives | **Verifiability (anchor)**, Energy |
| **2** | Sovereign Infrastructure | Compute, storage, networking with sovereignty made explicit | **Sovereignty (established)**, Verifiability, Security, Energy |
| **3** | Agent Data Substrate | Persistent, auditable, access-controlled data environment (lower state-holding layer) | Security, Sovereignty, Identity, **Auditability (origin)**, **Provenance (origin)** |
| **4** | Model Training and Adaptation | Pre-training, fine-tuning, RLHF — where model weights are created and changed | **Provenance**, **Verifiability**, Security, Energy |
| **5** | Inference and Retrieval | Where models are run and retrieval supporting inference is performed | Verifiability, Security, Provenance, Auditability, Identity |
| **6** | Context and Knowledge | Retrieval, grounding, continuous perception (RAG) | Provenance, Auditability, Security |
| **7** | Orchestration and Workflow | Coordinates tools, services, multi-step workflows — locus of autonomy | Identity, Auditability, Security, Provenance |
| **8** | Continuity Fabric | Cognitive state preserved through change; recovery, rollback, post-incident integrity (upper state-holding layer; **the architectural centrepiece**) | Security, **Verifiability**, Auditability, Identity, Provenance |
| **9** | Human and Browser Interface | Surface at which humans and intelligent systems interact | Identity, Security, Auditability |

---

### Layer 0 · Physical Compute

**Canonical name:** Layer 0 (Physical Compute) — *the physical substrate beneath the architectural stack.*

**Primary purpose.** The physical substrate: semiconductors, energy, cooling, facilities, and the geographic siting that grounds them all — the physics of computation. The OIA names it as a layer rather than treating it as outside the model because intelligent systems are uniquely sensitive to physical compute constraints in ways that traditional applications are not. Energy availability, semiconductor supply concentration, and physical co-location of training and inference workloads have become architectural concerns at the same level as application concerns.

**Key concerns.**
- Concentration of advanced semiconductor manufacturing in a small number of fabrication facilities, with the geopolitical implications that follow.
- Energy availability and grid capacity for training-scale workloads.
- Cooling capacity, water use, and environmental impact at hyperscale.
- Physical security and chain of custody for high-value compute infrastructure.
- Geographic siting under jurisdictional sovereignty constraints — *where* an AI workload physically runs, not just where its data nominally resides.
- Long-cycle capital planning for facilities that may be in service for ten to fifteen years.

**Reference technologies.** Advanced semiconductor manufacturing nodes (3nm, 2nm, and below); power-dense data centre designs (50kW per rack and rising); liquid cooling and direct-to-chip thermal management; behind-the-meter generation and grid-scale energy partnerships; geographic siting frameworks for sovereign and regulated workloads.

**Spans concentrating here.** Layer 0 is the **origin of three cross-layer spans**: **Security** (in its physical form), **Sovereignty** (in its jurisdictional and energy dimensions), and **Energy and Environmental Concerns** (propagating upward as cost, capacity, and impact at every layer above). Sovereignty in particular is *established* at Layer 0 — if the substrate is in the wrong jurisdiction, no amount of architectural sovereignty above can recover the posture.

**Open questions.** The boundary between physical sovereignty and operational sovereignty — how much of the physical substrate must be under domestic control for a workload to be considered sovereign in operational and regulatory terms. The energy economics of training-scale and inference-scale workloads at the limits of grid capacity. Whether the current generation of semiconductor fabrication will support the projected scale of intelligent system deployment, or whether step-changes in efficiency are required.

---

### Layer 1 · Silicon Abstraction

**Canonical name:** Layer 1 (Silicon Abstraction).

**Primary purpose.** Provides **hardware diversity behind portable runtimes and trusted execution primitives.** It is the layer at which a CUDA kernel, a ROCm kernel, and a custom AI accelerator's instruction set are all expressed through abstractions that allow workloads above to be portable across silicon. It is also the layer at which **hardware-attested execution** — the foundation of the Verifiability span new in v0.5 — is rooted. Trusted Execution Environments, secure enclaves, and confidential GPU primitives all live here.

**Key concerns.**
- Portability of intelligent system workloads across heterogeneous accelerator silicon.
- Performance ceilings of abstraction — how much overhead can be tolerated before the abstraction becomes commercially impractical.
- Attestation primitives for hardware-verified execution.
- Maturation of TEE and confidential computing primitives from foundational work to enterprise-grade integration.
- The economics of single-vendor accelerator dependency versus multi-vendor abstraction.

**Reference technologies.** WebAssembly as the increasingly consequential portable runtime for intelligent system components; CUDA, ROCm, and competing accelerator abstractions; Trusted Execution Environments (Intel TDX, AMD SEV-SNP, ARM CCA); Confidential GPU primitives, particularly NVIDIA's Confidential Computing for H100 and Blackwell generations; the Confidential Computing Consortium's specifications and reference implementations.

**Spans concentrating here.** Layer 1 is the **architectural anchor for the Verifiability span (new in v0.5).** Hardware-attested execution — Intel TDX, AMD SEV-SNP, NVIDIA Confidential GPU, the Confidential Computing Consortium body of work — is the ground on which *verifiable* rather than *asserted* trust is built. **Energy** concerns also concentrate here, since accelerator efficiency is the primary lever between physical compute capacity and useful inference throughput.

**v0.5 additions.** Verifiability is elevated to an explicit cross-layer span and anchored at this layer.

**Open questions.** The maturity gap between hardware-attested execution *as a primitive* and *as an enterprise-deployable feature*, particularly for confidential GPU workloads at training scale. The portability ceiling across genuinely diverse accelerator silicon. Whether the enterprise adopts confidential computing as the *default* trust model or treats it as a high-assurance specialty.

---

### Layer 2 · Sovereign Infrastructure

**Canonical name:** Layer 2 (Sovereign Infrastructure).

**Primary purpose.** The **compute, storage, and networking layer with sovereignty made explicit.** Where traditional cloud infrastructure abstracts geography away, intelligent systems require it back: where workloads run, where data resides, where credentials and keys are held, and under what jurisdiction each of these can be compelled. Layer 2 is where the **Sovereign AI** conversation becomes architectural rather than procurement-driven. National strategies for sovereign AI — in the EU, in Asia-Pacific, in regulated sectors of the US — land at this layer.

**Key concerns.**
- **Three dimensions of sovereignty** must be addressed: **jurisdictional** (which legal regime can compel access to data, models, or operation), **operational** (whether the entities operating the infrastructure are domestic or under foreign control), and **energy** (whether the energy powering the workload is under sovereign supply — increasingly relevant as AI workloads pressure national grids).
- The dependency map across these three dimensions is rarely visible in current procurement documentation.
- Multi-cloud AI deployment frequently exhibits *de facto* multi-cloud architecture without *de jure* multi-cloud governance, creating exposure visible only at audit or incident response.

**Reference technologies.** Sovereign cloud regions and dedicated infrastructure programs from the major hyperscalers; national sovereign AI infrastructure initiatives; confidential computing-enabled compute regions at scale; cross-border data governance frameworks (Schrems II compliance patterns, India's data residency regime, China's regulatory architecture, the EU AI Act's territorial provisions); on-premises and edge AI deployment patterns where sovereignty drives architectural choice.

**Spans concentrating here.** Layer 2 is where the **Sovereignty span is established.** Sovereignty propagates upward through every layer above; if it is not addressed at Layer 2, it cannot be recovered higher. **Verifiability** anchors here as well — hardware-attested execution at Layer 1 reaches its operational expression at Layer 2 as **attested compute, storage, and networking.** **Security** and **Energy** spans concentrate here too.

**Open questions.** The harmonisation — or lack of it — across emerging sovereign AI regimes. The economics of dedicated sovereign infrastructure versus sovereign-tier services within multi-tenant infrastructure. The architectural implications of energy sovereignty as workloads scale to gigawatt-class consumption. Whether sovereign AI is most usefully framed as architectural, regulatory, or procurement concern — the OIA's view being that all three are real but architecturally primary.

---

### Layer 3 · Agent Data Substrate

**Canonical name:** Layer 3 (Agent Data Substrate) — *the lower of the two state-holding layers.*

**Primary purpose.** The **persistent, auditable, access-controlled data environment** that enterprise intelligent systems operate on. Paired with Layer 8 (Continuity Fabric) above the operational stack, Layer 3 holds the structured and unstructured data, the embeddings and indexes, the customer information, the institutional knowledge, and the operational records that intelligent systems read, write, and reason over. It is where data-protection concerns that shaped a generation of enterprise security architecture must be re-thought for an environment in which intelligent systems are now **agents acting on the data**, not merely applications operating against it.

**Key concerns.**
- **Persistent state with provenance:** not merely whether data exists, but where it came from, how it has been transformed, and what authority underwrites each operation that touched it.
- **Auditability designed in from the outset** rather than retrofitted as a logging layer.
- **Access control across three classes of actor** — humans, agents, and foundation models — with appropriate identity governance for each (the Identity span, three-actor framing new in v0.5).
- **Sovereign data residency** under a coherent jurisdictional regime.
- **The AI-Inside problem (new in v0.5):** the structural observation that essentially every enterprise SaaS now embeds foundation models, creating data egress to model providers that traditional DLP frameworks were not designed to detect or govern.

**Reference technologies.** Lakehouse architectures designed for AI workloads; vector databases and hybrid retrieval systems; data observability platforms with AI-aware lineage; Data Loss Prevention frameworks adapted to detect embedded-LLM data flows (the AI-Inside problem); identity and access management systems designed for non-human principals; confidential computing-protected data environments for regulated workloads.

**Spans concentrating here.** Five spans concentrate visibly: **Security**, **Sovereignty** (continuing from Layer 2), **Identity** (across the three actors), **Auditability** (*originating* here as the substrate of evidence), and **Provenance** (*originating* here as the substrate of lineage). The combination makes Layer 3 architecturally heavier than its data-storage description suggests.

**v0.5 additions.** The **AI-Inside problem** — embedded-LLM data flow visibility — is named as a Key Concern; the three-actor Identity framing is absorbed here.

**Open questions.** The AI-Inside problem at scale: how the enterprise gains visibility into LLM data flows originating inside procured SaaS rather than deployed agents. The governance model for data created by agents, where provenance traces to a model rather than a human authority. The architectural treatment of synthetic data — a class of data with its own provenance requirements, or a class of model output that happens to be persisted. The intersection of data sovereignty and agent operation, where the agent's operational location and the data's residential location may be in different regimes.

---

### Layer 4 · Model Training and Adaptation

**Canonical name:** Layer 4 (Model Training and Adaptation).

**Primary purpose.** Covers **pre-training, fine-tuning, reinforcement learning from human feedback (RLHF), and the continuous adaptation processes** by which foundation models are produced and adapted to enterprise use. It is the layer at which **model weights are created and changed.** It is also where the most resource-intensive workloads concentrate, with training-scale infrastructure now reaching gigawatt-class energy consumption. The enterprise relationship with this layer ranges across a spectrum: from organisations that train foundation models themselves, through those that fine-tune and adapt third-party models, to those that consume models through inference APIs without engaging at this layer at all.

**Key concerns.**
- **Provenance of training data**, including the contested questions of consent, licensing, and the regulatory treatment of training as a use of intellectual property.
- **Reproducibility** of training runs and adaptation processes — a property honoured in the breach as model production has industrialised.
- **Integrity of fine-tuning and RLHF**, where adaptation can either improve or compromise safety properties depending on the data and procedure.
- **Verifiability of training and adaptation operations as a hardware-attested chain (new in v0.5)**, particularly for fine-tuning handling sensitive or regulated data.
- **Capital efficiency under genuine uncertainty**, where training infrastructure investment has long lead times and rapidly evolving requirements.

**Reference technologies.** Distributed training frameworks for large-model workloads; parameter-efficient fine-tuning techniques (LoRA, QLoRA, and successors); RLHF and reinforcement learning from AI feedback pipelines; confidential training environments using TEE-enabled accelerators; provenance and dataset governance frameworks aligned with emerging regulatory regimes.

**Spans concentrating here.** **Provenance** and **Verifiability** concentrate at Layer 4. Provenance because training data lineage is the foundation of every downstream provenance claim — if it cannot be reconstructed here, no operational logging higher in the stack can substitute. Verifiability because **attested fine-tuning** — fine-tuning conducted inside hardware-verified execution boundaries — is becoming a meaningful enterprise option for regulated adaptation, especially where customer data cannot leave a sovereignty boundary. **Security** and **Energy** also concentrate here.

**v0.5 additions.** Verifiability of training/adaptation as an attested chain (attested fine-tuning).

**Open questions.** The legal and regulatory treatment of training data, particularly under the EU AI Act's transparency provisions and emerging copyright regimes worldwide. The economics of attested fine-tuning at scale — regulated-workload specialty or enterprise default. The architecture of continuous adaptation, where fine-tuning is no longer a discrete event but an ongoing process. Where training and adaptation should sit on the partner-or-own-stack spectrum for typical enterprises.

---

### Layer 5 · Inference and Retrieval

**Canonical name:** Layer 5 (Inference and Retrieval).

**Primary purpose.** Where **models are run** and where the **retrieval operations that support inference** are performed. It is the layer at which a foundation model's weights are loaded into accelerator memory and turned into outputs that propagate up the stack. It is also the layer at which the model's **trustworthiness becomes a live operational concern**, not a release-time concern. *The model that decided is no longer necessarily the model deployed:* provider weight swaps, alignment drift, jailbreak emergence, and LLM-specific CVEs all change correctness mid-flight in ways traditional CVE feeds were not designed to surface.

**Key concerns.**
- **Continuous trust scoring** of every model in production use, against current threat reality.
- Recognition that **foundation models are now actors** inside the enterprise alongside humans and agents (the three-actor Identity framing, new in v0.5) — actors whose trustworthiness is dynamic and must be governed dynamically.
- **Model compromise as a named threat surface (new in v0.5):** the trusted model that is no longer trustworthy.
- **Inference cost economics**, particularly for high-volume workloads where token economics drive infrastructure choices.
- **Retrieval architecture** and the integrity of retrieval pipelines that ground model outputs in enterprise context.

**Reference technologies.** Inference serving frameworks designed for production scale; model gateways and abstraction layers that allow providers to be swapped; continuous model evaluation platforms that score model behaviour against evolving benchmarks; confidential inference environments using TEE-enabled accelerators; retrieval-augmented generation pipelines with provenance preservation.

**Spans concentrating here.** **Verifiability** becomes operationally meaningful — **attested inference**, running a model inside a hardware-verified execution boundary, is increasingly required for regulated and high-assurance workloads. **Security** concentrates here through the model-compromise threat surface. **Provenance** threads from Layer 4 through Layer 5 upward, carrying the lineage of which model produced which output. **Auditability** captures inference operations as evidence. **Identity** concentrates here through model-as-actor.

**v0.5 additions.** Model compromise named as a threat surface; foundation-model-as-actor recognised; attested inference made explicit.

**Open questions.** The maturity of model trust scoring as an enterprise discipline — convergence on a few frameworks or organisation-specific. The economics and architecture of attested inference at production scale, particularly for the highest-volume consumer-facing applications. The provider-vs-self-hosted question, which turns on the capacity to govern trust at Layer 5 in either configuration.

---

### Layer 6 · Context and Knowledge

**Canonical name:** Layer 6 (Context and Knowledge).

**Primary purpose.** Handles **retrieval, grounding, and continuous perception** — the operations by which a model's general capability is grounded in the specific context of an enterprise's data, decisions, and ongoing reality. It is the layer at which retrieval-augmented generation (RAG) pipelines run, at which agent context windows are assembled and managed, and at which the boundary between what the model knows from training and what it has been given for the current task is enforced. It is also the layer at which **adversarial pressure increasingly concentrates**, because the easiest way to compromise an intelligent system is often to compromise the context on which it grounds.

**Key concerns.**
- **Context poisoning, prompt injection**, and the broader category of attacks that compromise model output by compromising model input.
- **Provenance of retrieved context**, with the trust properties of each retrieved item carried forward into the inference that uses them.
- **Context window management at agent scale**, where dozens of tools, hundreds of documents, and continuously perceived state must be assembled coherently.
- The **boundary between general knowledge** encoded in model weights **and specific knowledge** supplied at inference time — a boundary affecting auditability, attribution, and the legitimacy of model outputs in regulated settings.

**Reference technologies.** Retrieval-augmented generation frameworks designed for enterprise context; semantic search and vector retrieval at production scale; agent context management systems and continuous perception integrations; prompt injection defence frameworks and output filtering; the **OWASP Top 10 for LLM Applications** as the practitioner reference for the threat surface concentrating at this layer.

**Spans concentrating here.** **Provenance**, **Auditability**, and **Security**. Provenance because grounding is the architectural locus where the lineage of supporting evidence either is or is not preserved into the model's output. Auditability because the context window assembled for a given inference is a primary artefact a regulator or auditor will want to reconstruct. Security because adversarial control of context is now one of the most active threat vectors against enterprise AI.

**Open questions.** The architectural treatment of long-running agent context, where state accumulates across sessions and the boundary between context and memory becomes unclear. The provenance properties of indirectly retrieved context, where evidence is selected by another model whose own behaviour is dynamic. The maturity of prompt injection defence at production scale — standardised frameworks or defence-in-depth requiring application-specific design.

---

### Layer 7 · Orchestration and Workflow

**Canonical name:** Layer 7 (Orchestration and Workflow) — *the architectural locus of autonomy.*

**Primary purpose.** Coordinates **tools, services, and multi-step workflows.** It is the layer at which an intelligent system stops being a model that *responds* and becomes an agent that *acts* — invoking external tools, taking multi-step actions, holding intent across operations, and operating inside a scope of authority the deploying organisation must define and govern. It is the architectural locus of **autonomy**, and consequently of most of the threat surface specific to the agentic era.

**Key concerns.** Three of the four named threat surfaces originate or propagate through Layer 7:
- **Agent-in-the-middle attacks (new in v0.5):** a rogue MCP server or other adversarial intermediary inserts itself between a trusted agent and a real tool, relaying sanitised responses while exfiltrating — *the agentic equivalent of an SSL strip.*
- **Agent spoofing:** agent identities inheriting trust they should not have, across contexts and lifetimes — the inheritance problem the existing identity infrastructure was not designed to govern.
- **Mimicry** as it propagates from Layer 9 into agentic action surfaces.
- Beyond named threats: **intent verification** (does the agent understand what was asked of it), **action auditability** (can the chain of decisions and tool invocations be reconstructed), **tool integrity** (is the tool the agent is calling the tool the deploying organisation approved), and **kill-chain detection** across multi-step agent operations.

**Reference technologies.** The **Model Context Protocol (MCP)** as the increasingly dominant agent-to-tool integration protocol, with its associated security architecture for tool registries, vetted tool calls, and MCP gateway patterns; agent frameworks at the application layer (multiple competing frameworks, none yet dominant); workflow engines adapted for agent-driven coordination; identity infrastructure designed for non-human principals operating across trust boundaries.

**Spans concentrating here.** **Identity** through the agent identity governance challenge. **Auditability** because Layer 7 is where the actions that audit will most often need to reconstruct take place. **Security** through the threat surfaces named above. **Provenance** threads through, carrying the lineage of decisions and tool invocations into the operational record.

**v0.5 additions.** Agent-in-the-middle named as a Key Concern (the agentic SSL strip).

**Open questions.** Agent identity at architectural scope: governing agents the way the enterprise governs humans — onboarding, scope assignment, behavioural baselining, offboarding. The MCP security architecture maturing from emerging protocol to enterprise-deployed standard. The framework-fragmentation question: whether the enterprise must pick a winning agent framework, or whether **Layer 8 (Continuity Fabric)** can absorb cross-framework continuity so multiple frameworks coexist.

---

### Layer 8 · Continuity Fabric

**Canonical name:** Layer 8 (Continuity Fabric) — *the architectural centrepiece; the upper of the two state-holding layers.*

**Primary purpose.** The **active layer at which cognitive state, learning, and judgment are preserved, verified, and carried across the transitions the stack undergoes; and at which recovery, rollback, and post-incident integrity for autonomous systems are made architecturally tractable.** The two framings are the same property in different vocabularies: the first is **structural** (continuity of cognitive state through change); the second is **operational** (the place where you handle recovery, rollback, and the consequences of an autonomous action that should not have been taken). **Layer 8 is the architectural centrepiece — the layer that the rest of the architecture is paired against.**

**Key concerns.**
- **Continuity of state across model swaps, framework changes, and provider transitions** — the recognition that no agent framework, model provider, or orchestration platform can be allowed to own the enterprise's cognitive state, because all of them will eventually change.
- **Recovery and rollback for autonomous systems:** the practitioner-facing question of what to do when an agent has acted, the action was wrong, and the audit chain is broken because the model that decided is no longer the model deployed.
- **Post-incident integrity:** reconstructing what actually happened across distributed agent operations, model swaps, and time.
- **Witness chains and verifiable continuity logs** that allow state transitions to be cryptographically attested rather than merely recorded.

**Reference technologies.** Witness-chain architectures for verifiable state transitions; continuity primitives that operate above and outside specific agent frameworks; cryptographic state attestation patterns; recovery and rollback patterns for autonomous systems, including the emerging discipline of compensating-action design for actions that cannot be undone; cross-framework continuity protocols (early — one of the genuinely open architectural problems).

**Spans concentrating here.** Five spans concentrate: **Security, Verifiability, Auditability, Identity, and Provenance.** Verifiability in particular extends from its hardware roots at Layer 1 through Layer 8 in the form of **witness chains and attested state transitions** — the property that the continuity record is not merely logged but *proved*.

**v0.5 additions.** Layer 8 is reframed to include **recovery and rollback** explicitly alongside the continuity-of-cognitive-state framing — additive language giving the layer a concrete failure mode and responsibility practitioners can engage with.

**Open questions.** Layer 8 is the layer at which the OIA acknowledges the **most architectural distance between the model and the available reference technologies.** The industry has not settled on continuity primitives that work across agent frameworks; witness-chain implementations are early; the practitioner playbook for autonomous-action rollback is being written in real time across early deployments. The Continuity Fabric is the layer most consistently identified across audiences as the gap the existing technology stack does not yet fill — and consequently where the most important architectural and product work of the next several years will concentrate.

---

### Layer 9 · Human and Browser Interface

**Canonical name:** Layer 9 (Human and Browser Interface).

**Primary purpose.** The **surface at which humans and intelligent systems interact.** It is where prompts are entered, outputs are read, conversational interfaces operate, and the boundary between human and agent action is most often resolved (or fails to be). It is also where **mimicry** — the threat surface unique to the agentic era in which AI-generated content is indistinguishable from human-authored content — first lands, before propagating through Layer 7 (Orchestration) into action and Layer 3 (Agent Data Substrate) into persisted state. **Layer 9 is not only the top of the stack but frequently the entry point of attack.**

**Key concerns.**
- **Mimicry as a named threat surface (one of the four named in v0.5):** whether an entity at the interface is a human or an agent, and whether content presented is human-authored or AI-generated.
- **Deepfake voice and video** as social engineering at unprecedented scale.
- The boundary between **human-in-the-loop and human-on-the-loop** oversight, increasingly relevant as agent autonomy increases.
- The architectural treatment of **conversational interfaces**, where the same surface humans use is also the surface through which adversarial agents may attempt to interact with the enterprise.

**Reference technologies.** Conversational interface frameworks designed for enterprise deployment; liveness and provenance verification for human-system interaction; deepfake detection tooling; content authenticity primitives (**C2PA**, related provenance standards); identity verification systems adapted for agent-rich environments; browser-based and application-embedded AI interfaces, including the emerging category of **browser-as-agent-runtime.**

**Spans concentrating here.** **Identity, Security, and Auditability.** Identity because the human-versus-agent boundary must be resolved here. Security because the named threat surface of mimicry originates here. Auditability because human-system interaction is among the most heavily regulated and audited surfaces in the enterprise.

**Open questions.** The maturity of mimicry defence at consumer-facing scale — existing tooling adequate, or step changes in detection required. The architectural treatment of browser-based agents operating at Layer 9 on behalf of the user, particularly as their action surfaces extend into Layer 7. The accountability question for actions taken at Layer 9 by agents acting on behalf of a human — where the boundary of authority is, and how it is recorded.

---

## 4. The Seven Cross-Layer Spans

The seven cross-layer spans are the surface across which **cross-functional governance** of intelligent systems is conducted. They thread vertically through the architecture, each anchored at one or more layers and each propagating concerns through several others. Where the layers describe *where the work happens*, the spans describe *how the consequences propagate.* The combination of layer specification (§3) and span specification (this section) is what makes the OIA a complete architectural reference rather than a layer catalog.

**Six of the seven spans are preserved unchanged from v0.1. Verifiability is added in v0.5** to capture the architectural property surfaced during the Proofpoint pressure test: that the operations of an intelligent system can be *cryptographically proven, not merely contractually asserted.* The canonical phrasing is **"the OIA's ten layers and seven cross-layer spans."**

### Span Summary Table

| Span | Canonical Definition (compressed) | Anchored / Threads Through |
|------|-----------------------------------|----------------------------|
| **Security** | The cross-layer concern with the widest scope; guarantees at lower layers must surface to higher layers without being lost | Every layer; concentration at L5, L7, L9, L3 |
| **Sovereignty** | Three dimensions — jurisdictional, operational, energy; only as strong as the weakest layer | Established at L2; energy origin L0; threads upward through all |
| **Auditability** | Capacity to reconstruct, after the fact, what happened and why; cannot be retrofitted | Originates at L3; realised at every layer above |
| **Identity** | Who is acting — across three actors: humans, agents, foundation models; foundational to auditability | Almost every layer; concentration at L7, L9, L5 |
| **Energy & Environmental Concerns** | Energy consumed at L0 propagates as cost, impact, capacity constraint upward; now architectural | Originates at L0; propagates to every layer above |
| **Provenance** | Lineage/origin of information, models, decisions, actions; the property that *enables* reconstruction | Threads from L3 to L9 |
| **Verifiability** *(new in v0.5)* | Operations can be cryptographically proven, not contractually asserted; trust verified, not granted | Anchored at L1; threads primarily through L1, L2, L4, L5, L8 |

### 4.1 Security

Security is the cross-layer span with the **widest scope.** Every layer has security properties; coherence requires that guarantees at lower layers surface to higher layers **without being lost.** The named threat surfaces of the agentic era — mimicry, agent-in-the-middle, agent spoofing, model compromise — each land at one or more specific layers but require a security posture coherent across the stack to defend against. **Concentration:** Layer 5 (model compromise), Layer 7 (agent-in-the-middle, agent spoofing), Layer 9 (mimicry), and Layer 3 (data exfiltration, including the AI-Inside problem).

### 4.2 Sovereignty

Sovereignty has **three dimensions:** **jurisdictional** (which legal regime can compel access), **operational** (whether operating entities are domestic or foreign-controlled), and **energy** (whether the energy powering the workload is under sovereign supply). Sovereignty is **established at Layer 2 (Sovereign Infrastructure)** and threads upward through every layer above; it cannot be retrofitted higher in the stack if it was not addressed at Layer 2. **Energy sovereignty originates at Layer 0.** Sovereignty posture is only as strong as the weakest layer.

### 4.3 Auditability

Auditability is the **capacity to reconstruct, after the fact, what happened and why.** It cannot be retrofitted as a logging layer; it must be designed into every layer from the outset. The audit committee's request to "show me the evidence" resolves to specific architectural artefacts at every layer, and an OIA-aware audit can specify what evidence is expected at each. **Auditability originates as a substrate property at Layer 3** and is realised at every layer above.

### 4.4 Identity

Identity addresses **three classes of actor** inside the enterprise: **humans, agents, and foundation models.** Each class carries a distinct identity lifecycle, scope-of-authority pattern, and trust posture. The **three-actor framing is new in v0.5** and reflects the recognition that foundation models are now actors whose trustworthiness is dynamic and must be continuously scored against current threat reality. Identity is **foundational to auditability** and threads through almost every layer, with concentration at Layer 7 (agent identity governance), Layer 9 (human-versus-agent boundary), and Layer 5 (model-as-actor).

### 4.5 Energy and Environmental Concerns

Energy, **originating at Layer 0**, propagates upward as **cost, capacity, and environmental impact** at every layer above. Energy concerns have moved from operational to architectural as AI training and inference workloads have scaled to gigawatt-class consumption. The OIA treats energy as a span rather than a Layer 0 property because its consequences — economic, regulatory, environmental, sovereign — land at every layer from substrate to interface.

### 4.6 Provenance

Provenance is the **lineage of information, models, decisions, and actions.** It is **distinct from auditability:** auditability is the capacity to reconstruct after the fact; **provenance is the property that enables reconstruction.** Provenance **originates at Layer 3 (Agent Data Substrate)** and extends upward through the stack — from Layer 3 to Layer 9 — carrying the lineage of training data, model adaptation, retrieval evidence, agent decisions, and tool invocations. **Without provenance preserved at each layer, auditability fails at every layer above.**

### 4.7 Verifiability *(new in v0.5)*

Verifiability captures the property that **operations of an intelligent system can be cryptographically proven, not merely contractually asserted** — **trust verified, rather than trust granted.** It is **anchored at Layer 1 (Silicon Abstraction)** by hardware-attested execution primitives (Intel TDX, AMD SEV-SNP, NVIDIA Confidential GPU, the Confidential Computing Consortium body of work) and threads through Layers 2, 4, and 5 in the operational forms of **attested compute, attested fine-tuning, and attested inference.** It extends to **Layer 8** in the form of **witness-chain logic for verifiable continuity.** The span is becoming a foundational alternative to vendor promise: trust that is mathematically demonstrable rather than contractually asserted, increasingly required for regulated and high-assurance enterprise AI. **Threads primarily through Layers 1, 2, 4, 5, and 8.**

---

## 5. The Four Named Threat Surfaces of the Agentic Era

The OIA names four threat surfaces of the agentic era as **canonical inside the architecture.** They are not new architectural elements; they are named in the appropriate layer Key Concerns and surfaced collectively here and in the threat-surface diagram. The naming gives security audiences a shared vocabulary that ties to the architecture rather than to any specific framework.

**Architectural observation.** Reading the four together surfaces an insight easily missed in isolation: **three of the four originate or propagate through Layer 7 (Orchestration and Workflow), and the fourth originates at Layer 5 (Inference and Retrieval).** Layers 7 and 5 are therefore where the security architecture of the agentic era concentrates its weight — **not at the perimeter**, where prior security architectures expected attacks to land, **but inside the operational stack** where intelligent systems do their work.

| Threat Surface | Definition | Layer Path |
|----------------|------------|------------|
| **Mimicry** | The boundary problem of telling humans from agents at every entry point, and of distinguishing AI-generated content from human-authored content | **Layer 9 origin**, propagating through **Layer 7** into action surfaces and into **Layer 3** as persisted state. Defence concentrates at Layer 9 (interface-level liveness, content provenance) but extends through the stack |
| **Agent-in-the-middle** *(new in v0.5)* | Adversarial intermediaries between agents and tools, including rogue MCP servers — the agentic equivalent of the SSL-stripping attack | **Layer 7 origin and primary domain.** Defence concentrates on tool registry integrity, vetted tool calls, and gateway architecture for MCP and adjacent protocols |
| **Agent spoofing** | Agent identities inheriting trust they should not have, across contexts and lifetimes — the inheritance problem at the agent-identity level | **Identity span concentration, Layers 5 through 9.** Defence concentrates on agent identity governance — onboarding, scope assignment, behavioural baselining, offboarding — alongside conventional identity infrastructure |
| **Model compromise** *(new in v0.5)* | The trusted model that is no longer trustworthy — weight swap, alignment drift, jailbreak emergence, LLM-specific CVEs | **Layer 5 origin** (Security and Verifiability spans). Defence concentrates on continuous model trust scoring, attested inference, and treating foundation models as actors whose trustworthiness is dynamic |

These four do not constitute a complete catalog of every adversarial pattern facing intelligent systems. They are the four that have emerged with the agentic era and that v0.5 names canonically inside the architecture. Other threat surfaces — **prompt injection, data poisoning, model inversion, training data extraction**, and others — remain real and are addressed in the per-layer specifications above. The four named threats are the four the architecture treats as **structurally central to the agentic era specifically.**

---

## 6. The Three Actors

v0.5 names **three classes of actor inside the enterprise that require continuous trust governance.** The canonical phrasing is: **"three actors that require continuous trust governance — humans, agents, and the foundation models themselves."** Each class carries a distinct identity lifecycle, scope-of-authority pattern, and trust posture, and each is governed through the **Identity span** (§4.4).

1. **Humans.** The traditional principal of enterprise identity — with established identity lifecycles, scopes of authority, and trust models. At Layer 9 the human-versus-agent boundary must be resolved.

2. **Agents.** Non-human principals that act with autonomy across trust boundaries. The architectural challenge (concentrating at Layer 7) is governing agents the way the enterprise governs humans — onboarding, scope assignment, behavioural baselining, and offboarding — while preventing **agent spoofing**, where agent identities inherit trust they should not have across contexts and lifetimes.

3. **Foundation models.** The **new architectural recognition in v0.5**: the model-as-actor, with a **continuously refreshable trust score.** Models are no longer treated as static dependencies. Provider weight swaps, alignment drift, jailbreak emergence, and LLM-specific CVEs make model trustworthiness **dynamic**, and warrant **continuous trust governance alongside human and agent identity.** The model-as-actor concentrates at Layer 5.

---

## 7. The Four Executive Connections

Four cross-cutting "connections" tie the architecture together for executive audiences — each a structural relationship that only becomes visible when the layers and spans are read together. Each traces directly to the specification above.

### 7.1 The State-Holding Pair

**Two layers hold state, in two distinct ways.** **Layer 3 (Agent Data Substrate)** is the persistent *substrate* below the operational stack; **Layer 8 (Continuity Fabric)** is the active *fabric* above it. The **asymmetric pairing** — substrate below, fabric above — is the architectural recognition that intelligent systems hold state in two distinct ways, and that **conflating them produces architecturally untenable designs.** Persistence, the first defining property, is addressed primarily at Layer 8 and secondarily at Layer 3 — the two state-holding layers that bracket the operational stack.

### 7.2 Threat Concentration

**The security architecture of the agentic era concentrates inside the operational stack, not at the perimeter.** Of the four named threat surfaces, **three (mimicry, agent-in-the-middle, agent spoofing) originate or propagate through Layer 7, and the fourth (model compromise) originates at Layer 5.** Layers 7 and 5 are therefore where the security weight lands — a reversal of the perimeter-centric assumption of prior security architectures. This is the single most consequential observation the threat-surface diagram makes visible.

### 7.3 The Verifiability Chain

**Verifiability chains from silicon to continuity into a single verifiable posture.** The Verifiability span (new in v0.5) is anchored at **Layer 1** by hardware-attested execution primitives and reaches operational expression as **attested compute (Layer 2), attested fine-tuning (Layer 4), attested inference (Layer 5),** and **witness-chain-based verifiable continuity (Layer 8).** The chaining of these per-layer attestations into one end-to-end verifiable posture — across silicon, infrastructure, training, inference, and continuity — is what turns *trust granted* into *trust verified.* (The end-to-end story is also named as an open question in §9.)

### 7.4 The Three-Actor Identity Pattern

**Identity now spans three classes of actor — humans, agents, and foundation models — each requiring continuous trust governance.** The pattern (detailed in §6) is the architectural recognition that foundation models joined humans and agents as first-class actors whose trustworthiness is *dynamic* and must be *continuously scored against current threat reality.* It concentrates at Layer 7 (agent identity governance), Layer 9 (human-versus-agent boundary), and Layer 5 (model-as-actor), and is foundational to auditability across the stack.

---

## 8. Relationship to External Frameworks

The OIA is **additive, not competitive.** It addresses a domain that existing reference architectures and management frameworks were not designed to organise, while drawing on their intellectual conventions and complementing their coverage. The OIA provides the **architecture of the intelligent systems themselves**; the other frameworks organise networking, management systems, cybersecurity programmes, AI risk governance, and threat awareness.

| Framework | What it is | Relationship to the OIA |
|-----------|-----------|-------------------------|
| **OSI Reference Model** | The layered model that has organised networking for four decades | Intellectual inspiration; the OIA adopts the bottom-up numbering convention and departs from it principally by introducing **Layer 0** (physical compute, which networking abstracts away) |
| **NIST Cybersecurity Framework (CSF)** | A functional framework describing cybersecurity activities | The CSF's five functions — **Identify, Protect, Detect, Respond, Recover** — apply at **every OIA layer** |
| **NIST AI Risk Management Framework (AI RMF)** | Organises how the enterprise *manages* AI risk | The OIA organises the **architecture of the systems** the AI RMF asks the enterprise to manage |
| **MITRE ATT&CK and ATLAS** | Threat taxonomies (ATLAS for AI systems) | The OIA provides **structural vocabulary within which threats locate**; ATLAS provides threat vocabulary informing what must be defended at each layer |
| **MITRE D3FEND** | Defender-side taxonomy of techniques | Locates at the OIA layers where its techniques apply |
| **OWASP Top 10 for LLM Applications** | A risk enumeration for LLM apps | The OWASP LLM risks **manifest at specific OIA layers** (notably Layers 5, 6, and 7) and inform the key concerns of those layers |
| **Confidential Computing Consortium (CCC)** | Hardware-attested execution primitives and specifications | Provides the primitives that **anchor the Verifiability span at Layer 1** and operationalise at Layers 2, 4, 5, and 8 |
| **ISO/IEC 42001** | An AI management system standard | Operates at **management-system level**; the OIA operates at **architectural level.** Organisations certified against 42001 benefit from the OIA's structural vocabulary |

**A practical composition.** OSI for networking, ISO/IEC 42001 for management systems, NIST CSF for cybersecurity programme structure, NIST AI RMF for AI risk governance, MITRE ATLAS and OWASP LLM Top 10 for threat awareness, and **the OIA for the architecture of the intelligent systems themselves.** The OIA continues to be additive to OSI, NIST CSF, NIST AI RMF, MITRE ATLAS, OWASP LLM, and ISO/IEC 42001 — not competitive with them.

---

## 9. Version Note: v0.1 → v0.5

v0.5 **preserves the v0.1 spine in full** and absorbs seven specific refinements that emerged when the model was pressure-tested against a working enterprise portfolio (the **Proofpoint pressure test**). The architecture is unchanged in spirit; it is sharper in seven specific places, with one new cross-layer span, and described as **ten layers rather than nine.** *"The architecture is the same architecture, sharper at seven specific points, with the layer count corrected."*

### 9.1 The Ten-Layer Renumbering

The model is described henceforth as a **ten-layer model, numbered 0 through 9.** Every reference to "nine layers" in v0.1 is replaced. **Layer 0 (Physical Compute) was always present; the count is simply more honest** — Layers 0 through 9 inclusive is ten. The v0.1 "nine-layer" description was a holdover from OSI parallelism that did not match the architecture as drawn (most acutely in the v0.1 Foreword, which described "nine layers, from physical compute at the bottom" — technically self-contradicting, since physical compute is Layer 0). Calling it ten layers preserves Layer 0's distinct status while being mathematically honest. The OSI bottom-up convention is preserved; the departure from OSI (introducing Layer 0) remains principled and explained.

**Canonical phrasings:** *"Ten layers, numbered 0 through 9, with Layer 0 the physical substrate beneath the architectural stack"; "Ten layers — from physical compute at Layer 0 to the human and browser interface at Layer 9"; "The OIA's ten layers and seven cross-layer spans."* Layers 1–9 are **"the architectural stack"**; Layer 0 is **"the physical substrate beneath the architectural stack."**

### 9.2 The Seven Refinements

1. **Verifiability — a seventh cross-layer span.** Elevated from an implicit property of Layer 1 and the Security span to an explicit span: operations can be cryptographically proven rather than contractually asserted; trust verified, not granted. Anchored at Layer 1; threads through Layers 1, 2, 4, 5, and 8. (Span count: **six → seven.**)
2. **Three actors — strengthening the Identity span.** Humans, agents, and foundation models named explicitly. Model-as-actor with a continuously refreshable trust score is new architectural recognition.
3. **Layer 8 reframed to include recovery and rollback.** Additive operational language alongside the continuity-of-cognitive-state framing, giving Layer 8 a concrete failure mode and responsibility.
4. **Agent-in-the-middle named at Layer 7.** The agentic SSL strip — a rogue MCP server between a trusted agent and a real tool — added to Layer 7 Key Concerns.
5. **AI-Inside named at Layer 3.** Embedded-LLM data-flow visibility: essentially every modern SaaS embeds LLMs, creating a silent data flow that traditional DLP does not see.
6. **Temporal validity — absorbed into Consequence.** Rather than a fourth defining property, the time-dependence of correctness is added as a temporal dimension of Consequence: architectural posture is time-bound.
7. **The four named threat surfaces.** Mimicry, agent-in-the-middle, agent spoofing, and model compromise incorporated into the model's threat vocabulary and threat-surface diagram.

### 9.3 What v0.5 Preserves Unchanged

The upgrade is additive; the architectural spine of v0.1 is preserved without modification:

- **All ten layer names** are preserved (the renumbering describes the existing layers; it does not relabel them).
- **All ten layer purposes** are preserved (each layer's primary purpose statement is unchanged from v0.1).
- **The bottom-up numbering convention** is preserved (Layer 0 the foundation; Layer 9 the top).
- **The two paired state-holding layers** are preserved (Layer 3 a substrate; Layer 8 a fabric).
- **The relationship to other reference models** is preserved (additive to OSI, NIST CSF, NIST AI RMF, MITRE ATLAS, OWASP LLM, and ISO/IEC 42001 — not competitive).
- **The Open Questions structure** is preserved. **v0.5 closes none of the v0.1 open questions**; it carries them all forward and adds further questions surfaced by the Proofpoint pressure test.

### 9.4 Open Questions (preserved and extended)

The OIA is most useful when the genuinely unresolved is named clearly. Each question is anchored to the layer or span where it lives architecturally.

- **Layer 8 (Continuity Fabric).** Continuity primitives that work across agent frameworks; witness-chain implementations at enterprise scale; the practitioner playbook for autonomous-action rollback. *The most architecturally consequential gap in the present technology stack.*
- **Layer 7 (Orchestration).** Agent identity governance at architectural scope (onboarding, scope assignment, behavioural baselining, offboarding); maturation of MCP security architecture from emerging protocol to enterprise-deployed standard.
- **Layer 5 (Inference).** Continuous model trust scoring as an enterprise discipline; the economics of attested inference at production scale; the provider-versus-self-hosted question and the architecture that makes either configuration governable at Layer 5.
- **Layer 4 (Training and Adaptation).** The legal and regulatory treatment of training data; the economics and architecture of attested fine-tuning; continuous adaptation as an architectural pattern rather than a discrete event.
- **Layer 3 (Agent Data Substrate).** The AI-Inside problem at scale; the governance model for data created by agents; the architectural treatment of synthetic data.
- **Layer 2 (Sovereign Infrastructure).** Harmonisation across emerging sovereign AI regimes; the economics of dedicated sovereign infrastructure versus sovereign-tier services; energy sovereignty as workloads scale.
- **Layer 1 (Silicon Abstraction).** The maturity gap between hardware-attested execution as a primitive and as an enterprise-deployable feature; whether confidential computing becomes the default trust model or remains a high-assurance specialty.
- **Layer 0 (Physical Compute).** The boundary between physical and operational sovereignty; the energy economics of training and inference at the limits of grid capacity; whether current semiconductor capability supports projected deployment scale.
- **Verifiability span (new in v0.5).** The maturation of verifiable rather than asserted trust as an enterprise default; the end-to-end verifiability story across silicon, infrastructure, training, inference, and continuity — how the layers' attestations chain into a single verifiable posture.
- **Identity span.** The agent identity problem in particular: how agent identities are scoped, attested, prevented from inheriting trust they should not have, and governed across contexts and lifetimes. The open question is structural — the existing identity infrastructure was not designed for non-human, dynamically-trustworthy actors.

---

*This document is the machine-readable single-source-of-truth (SSOT) for the OIA body of work — consolidating the v0.5 Reference Paper, the v0.5 Architecture Lock, and the v0.5 Overview. The companion deliverables at v0.5 are the OIA Reference Paper (the authoritative long-form specification), the OIA Lens System (audience-specific overlays), and the OIA Visual Reference (the Stack, the Lens Overlay, and the Four Named Threat Surfaces diagrams).*

**AGENTICS FOUNDATION · THE OIA REFERENCE MODEL · CANONICAL KNOWLEDGE BASE · V0.5 · 2026**
