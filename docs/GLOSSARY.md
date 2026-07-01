# OIA Glossary

Canonical terms of the OIA Reference Model. Where v0.5 changed a v0.1 term, the current definition
is given and the change noted. See the [Architecture Lock](../companion/OIA-v0.5-Architecture-Lock.pdf)
for canonical phrasings and the [ADRs](adr/) for rationale.

## The model

- **OIA / Open Intelligence Architecture** — the reference model. Canonical: *"the OIA's ten layers and
  seven cross-layer spans."*
- **The architectural stack** — Layers 1–9 (logical). **The substrate** — Layer 0 (physical, sub-architectural).
- **Reference model** — a shared structural vocabulary; explicitly *not* a product, build methodology, or
  compliance framework.

## The ten layers (0–9)

- **Layer 0 — Physical Compute** — semiconductors, energy, cooling, facilities, siting (the substrate).
- **Layer 1 — Silicon Abstraction** — portable runtimes over hardware diversity; trusted-execution
  primitives (TEEs); anchors Verifiability.
- **Layer 2 — Sovereign Infrastructure** — compute/storage/networking with sovereignty made explicit.
- **Layer 3 — Agent Data Substrate** — persistent, auditable, access-controlled data (lower state-holding
  layer); originates Auditability and Provenance; home of the **AI-Inside** problem.
- **Layer 4 — Model Training and Adaptation** — pre-training, fine-tuning, RLHF.
- **Layer 5 — Inference and Retrieval** — where models run; continuous model trust scoring; **Model
  compromise** containment.
- **Layer 6 — Context and Knowledge** — retrieval, grounding, RAG, context windows.
- **Layer 7 — Orchestration and Workflow** — tool/service invocation, multi-step workflows; the locus of
  autonomy; MCP lives here; **Agent-in-the-middle**.
- **Layer 8 — Continuity Fabric** — preservation of cognitive state, learning, judgment; recovery, rollback,
  post-incident integrity; witness chains (upper state-holding layer; the "architectural centrepiece").
- **Layer 9 — Human and Browser Interface** — the human/agent boundary; browser-as-agent-runtime;
  **Mimicry** origin.

## The seven cross-layer spans

- **Security** — widest scope; guarantees at lower layers must surface intact upward.
- **Sovereignty** — jurisdictional, operational, energy; established at Layer 2; only as strong as the weakest layer.
- **Auditability** — capacity to reconstruct what happened and why; cannot be retrofitted; originates at Layer 3.
- **Identity** — who is acting, across **three actors** (humans, agents, foundation models).
- **Energy and Environmental Concerns** — Layer-0 energy propagating as cost, impact, capacity.
- **Provenance** — lineage of information, models, decisions, actions (Layer 3 → Layer 9); enables auditability.
- **Verifiability** *(new in v0.5)* — operations cryptographically proven, not contractually asserted; threads
  Layers 1, 2, 4, 5, 8.

## Properties, threats, actors, connections

- **Three defining properties** — **Persistence** (Layer 8/3), **Autonomy** (Layer 7), **Consequence**
  (spans; time-bound — correctness demonstrable against *current* threat reality).
- **Four named threat surfaces** — **Mimicry** (L9→L7→L3), **Agent-in-the-middle** (L7), **Agent spoofing**
  (Identity span, L5–9), **Model compromise** (L5).
- **Three actors** — humans, agents, foundation models (model-as-actor with a continuously refreshable trust score).
- **The four executive connections** — **State-Holding Pair** (L3+L8), **Threat Concentration** (L5,7,9),
  **Verifiability Chain** (L1,2,4,5,8), **Three-Actor Identity Pattern** (L5,7,9).
- **AI-Inside problem** — embedded LLMs in SaaS creating DLP-invisible data egress (Layer 3).
- **Agent-in-the-middle / "agentic SSL strip"** — rogue-MCP intermediary between agent and tool (Layer 7).
- **Witness chain** — cryptographically attested state-transition/continuity log (Layer 8).

## The body of work

- **Reference Paper** (~40pp, authoritative) · **Reader's Digest** · **Lens System** (v0.3) · **Lens Map**
  (audience overlay) · **Visual Reference** (Stack / Lens Overlay / Threat-Surfaces diagrams) ·
  **Thought Leadership Deck** (co-brandable) · **Architecture Lock** (canonical internal spec) ·
  **Body of Work Framing** · **Canonical Knowledge Base** (Markdown SSOT) · **Prism** (app) ·
  **Executive Accessibility Enhancement** (v0.5.1) · **Decision Log** / **Digest** (v0.1).
- **Lenses** — CISO (published), CIO/CTO (published), Board and Risk (published); CFO, General
  Counsel & Compliance, CHRO (anticipated).
- **CISO Lens interpretive lenses** — AI as **Amplifier / Domain / Attacker / Defender / Asset / Workforce / Trustless**.

## External frameworks OIA composes with

OSI (ISO/IEC 7498) · NIST CSF · NIST AI RMF · MITRE ATT&CK · MITRE ATLAS · MITRE D3FEND ·
OWASP Top 10 for LLM Applications · Confidential Computing Consortium (CCC) · ISO/IEC 42001 ·
EU AI Act · SEC/FCA disclosure · Caremark doctrine · TOGAF · ITIL · FinOps.

## Trust / hardware primitives

Intel TDX · AMD SEV-SNP · NVIDIA Confidential GPU · ARM CCA · TEE · attested compute / fine-tuning /
inference · MCP (Model Context Protocol) · WebAssembly / WASI · LoRA / QLoRA.

## People & institutions

- **Mark Templeton** — author. **Reuven Cohen (ruvnet)** — architectural foundation; Agentics Foundation
  founder; v0.1 Foreword. **John McKinley, Greg Lavender** — pressure-testers. **Agentics Foundation** — publisher.
- **Contributing partners** — Arista Networks, Nutanix, Proofpoint, Reltio, Thoma Bravo, ACIUM.

## Historical / context terms (v0.1)

- **SAA / SAAR** — rejected earlier names. **Mythos System Card**, **Project Glasswing** — Anthropic
  (Apr 2026) context. **Cembalest "Eye on the Market"** — JP Morgan note. **SecureIQ Lab**, **"Snapper 70/70"**
  — referenced validation. **Cognitum, Snapper, ACIUM** — founder ventures kept out of the model body.
  **RVF** — RuVector container tech (why "Container" was rejected for Layer 8).
