# Engineering case-study standard

This document defines reporting requirements under the [portfolio vision](../PORTFOLIO_VISION.md). Metadata concepts and domain names are defined in the [content architecture](ARCHITECTURE.md).

## Case identity and maturity

Each substantial case should identify its title, Origin, Domains, Status and Sources/evidence. State which parts are planned, implemented or validated when maturity differs across the system. Keep academic course names and grades as context rather than the principal engineering result.

A case may develop incrementally. Mark missing material and unanswered questions explicitly; do not fill sections with invented results. Learning notes and installation instructions may remain supporting material until an engineering argument and evidence justify a case study.

## Preferred narrative

Problem → Architecture → Implementation → Engineering decisions → Failure/debugging → Validation/testing → Evidence → Lessons learned

| Part | Required substance |
| --- | --- |
| Problem | Context, engineering need, constraints and intended outcome. |
| Architecture | System boundaries, components, interfaces and relevant flows; a diagram when useful. |
| Implementation | What was actually built/configured, important mechanisms and links to technical sources. |
| Engineering decisions | Alternatives considered, reasons for choices and relevant tradeoffs. |
| Failure/debugging | Observed symptoms, hypotheses, investigation and outcome. Label suspected causes; if no failure was observed or recorded, say so. |
| Validation/testing | Criteria, setup, procedure, observations/results and limits. Distinguish tests performed from proposed tests. |
| Evidence | Claim-specific sources such as revisions, logs, photographs, videos and measurements, with provenance. |
| Lessons learned | Conclusions supported by the work, remaining unknowns and future improvements separated from achievements. |

Installation alone is not sufficient evidence of an engineering case study. Explain the problem addressed, decisions taken and behaviour investigated or tested.

## Evidence and claim discipline

- Distinguish direct observations, results reported by another source, implementation-derived expectations and untested hypotheses.
- Link to the technical repository and relevant revision where available. Record consultation or test dates when they matter; do not invent missing provenance.
- For a measurement, identify the method, conditions, units and relevant uncertainty or accuracy limits. If no measurement exists, state that limitation.
- A photograph or video can establish a visible demonstration, but must not be used to claim timing accuracy, jitter, reliability or other properties it does not measure.
- Keep nominal/configured values separate from measured values. Successful commands or a running service alone do not establish that all requirements are met.
- Preserve failed experiments, inconclusive results, unresolved causes and missing measurements. Negative results can support useful lessons.
- Do not claim failover, safety, security, reliability or performance beyond the evidence provided. Proposed mitigations and future tests remain proposals until supported.
- Prefer links to authoritative technical sources over duplicated implementation documentation. Label historical exports and variants when their relationship has been reviewed.

The existing [PL5 report](../practical_cases/Desenvolvimento_Sistemas_Embebidos_lab/pl5_kernel_labs.md) illustrates the distinction between nominal software-PWM timing, hardware demonstration media and absent timing/jitter measurements. Applying this standard does not imply that existing practical-case documents have already been rewritten or fully reviewed against it.

## Review before public presentation

Check that the case explains an engineering problem and its approach, identifies its maturity, supports substantive claims with sources, and exposes evidence gaps. Verify local links and source references. Another engineer should be able to tell what was built, what was tested, what failed and what remains unknown.
