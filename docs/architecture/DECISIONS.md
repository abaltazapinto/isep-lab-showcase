# Documentation architecture decisions

These decisions implement the documentation direction in [Issue #18](https://github.com/abaltazapinto/isep-lab-showcase/issues/18), with the approved refinement that ISEP remains active academic context. They govern documentation/content architecture; project-specific engineering choices belong in their case reports.

## 2026-10-04 — One portfolio-wide vision

**Decision:** [PORTFOLIO_VISION.md](../PORTFOLIO_VISION.md) is the single authoritative portfolio-wide vision. It includes academic engineering, Personal Engineering Labs and future work supported by evidence.

**Reason:** An ISEP-only product framing would constrain a portfolio intended to grow across programmes and personal engineering work.

**Consequence:** Detailed reporting requirements belong in [PROJECT_STANDARD.md](PROJECT_STANDARD.md), taxonomy in [ARCHITECTURE.md](ARCHITECTURE.md), and navigation in the [documentation index](../README.md). These documents link to their owners instead of maintaining competing definitions.

## 2026-10-04 — Keep ISEP as active academic context

**Decision:** Move the former global ISEP vision to [academic/ISEP_VISION.md](../academic/ISEP_VISION.md) and make its responsibility programme-specific and subordinate to the portfolio vision.

**Reason:** ISEP Embedded Engineering remains an active, meaningful origin. Treating it only as history would misrepresent its continuing role.

**Consequence:** Preserve useful dated academic notes and learning/project direction. Qualify proposed projects and historical suggestions. Do not add an empty master's-specific document; add one later when verified content warrants it.

## 2026-10-04 — Separate origin, domains, status and evidence

**Decision:** Model Origin, Domains, Status and Sources/evidence as independent documentation metadata. A case may demonstrate multiple domains regardless of its academic or personal origin.

**Reason:** A hierarchy mixing academic projects with engineering domains obscures classification and encourages duplicate case copies. Maturity and supporting evidence answer different questions from origin and subject area.

**Consequence:** Use consistent domain names and retain one case with linked provenance. This model does not imply implementation of these fields in the current application Project type; source/data changes require separate work.

## 2026-10-04 — Make the engineering argument evidence-first

**Decision:** Prefer the narrative Problem → Architecture → Implementation → Engineering decisions → Failure/debugging → Validation/testing → Evidence → Lessons learned.

**Reason:** Course lists, technology lists and installations alone do not show how engineering problems were approached or whether conclusions are supported.

**Consequence:** The project standard requires qualified claims, explicit unknowns and measurement limits, and separation of proposed work from observed results. Failed or inconclusive experiments remain useful evidence; undocumented achievements must not be claimed.

## 2026-10-04 — Preserve practical material and limit migration

**Decision:** Retain existing practical-case contents, paths and PDF companions in this foundation. Make only the justified move of the ISEP context document and fill the documentation architecture responsibilities.

**Reason:** Useful historical and technical material should survive the scope expansion. Rewriting or reorganising every case at once would make the change harder to review and risk losing provenance.

**Consequence:** Gateway duplication, practical-case indexing/reorganisation, root README alignment, development workflow and roadmap updates remain separate work. Application code, public project data, repository name, commits and publishing are outside this foundation.
