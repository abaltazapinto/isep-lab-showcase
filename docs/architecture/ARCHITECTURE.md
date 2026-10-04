# Documentation and content architecture

## Authority and responsibilities

The [portfolio vision](../PORTFOLIO_VISION.md) is the single authority for portfolio-wide purpose and scope. [Academic context](../academic/ISEP_VISION.md) is subordinate to it and explains the origin of programme work.

This document owns documentation structure and taxonomy. The [project standard](PROJECT_STANDARD.md) owns reporting requirements. The [decision log](DECISIONS.md) records why architectural choices were made. The [documentation index](../README.md) provides navigation without repeating those definitions.

```text
docs/
├── README.md
├── PORTFOLIO_VISION.md
├── academic/
│   └── ISEP_VISION.md
├── architecture/
│   ├── ARCHITECTURE.md
│   ├── PROJECT_STANDARD.md
│   └── DECISIONS.md
├── development/
│   ├── DEVELOPMENT.md
│   └── ROADMAP.md
└── practical_cases/
    └── existing material
```

Development and roadmap documents remain placeholders during this foundation. A future master's-specific academic document should be added only when verified content warrants it.

## Content taxonomy

The following concepts are independent metadata in the documentation/content model. They may be recorded as a small table in a case report; this foundation does not require a new serialization format.

| Concept | Meaning | Guidance |
| --- | --- | --- |
| Origin | Where the work arose. | Record the programme or Personal Engineering Lab; retain relevant course/context and additional provenance when needed. |
| Domains | Engineering areas demonstrated by the work. | Assign one or more supported domains, independent of origin. |
| Status | Current maturity of the work. | Describe planned, investigating, implemented or validated work; qualify the scope and date. |
| Sources/evidence | What supports the account and its claims. | Identify repositories/revisions, reports, logs, media or measurements, with provenance and limits. |

### Origin

Supported origins include ISEP Embedded Engineering postgraduate work, master's work in Critical/Computational Critical Systems, Personal Engineering Lab, and future academic engineering programmes. Use the verified programme title when available. These categories do not establish that any particular project exists.

For example, the PL5 GPIO blinker has an ISEP postgraduate origin and an Embedded Systems domain. A personal networking investigation may share an engineering domain with an academic case without sharing its origin. Do not infer origin solely from a legacy folder name.

### Domains

Use these initial domain names consistently:

- Embedded Systems
- Critical Systems
- Embedded AI
- Cloud & Distributed Systems
- Infrastructure & Reliability
- Networking & Security
- IoT

Domains describe engineering substance rather than tools or course names. Use multiple domains when supported; use IoT where connected sensing/control is relevant. A technology mention alone does not establish domain evidence. Record additions to the taxonomy in the decision log when future work warrants them.

### Status

`Planned` describes intent; `investigating` describes an experiment or diagnosis in progress; `implemented` describes a built implementation supported by sources; `validated` describes an implementation checked against stated criteria with supporting results.

These labels are not an automatic success ladder. A failed experiment can have well-supported results. Validation is bounded by the tests performed and does not imply production readiness, safety certification or unmeasured performance. Keep historical document status separate from the maturity of the engineering work it describes.

### Sources/evidence

A source identifies provenance; evidence is the part of that source supporting a particular claim. A repository can demonstrate an implementation without proving measured timing accuracy. Media can show a hardware demonstration without establishing a precise frequency. Sources should therefore be connected to claims, with their limits described according to the project standard.

## Source-of-truth boundaries

- Portfolio documentation owns purpose, context, reporting requirements and engineering narratives.
- Technical project repositories remain authoritative for their firmware, implementation details, wiring and underlying laboratory material. Link to useful revisions instead of copying entire technical repositories here.
- Existing practical cases retain their technical and historical material. Subject folders are legacy context, not a mandatory taxonomy for future work.
- Case-specific architecture and engineering decisions belong in the case or its technical source. This architecture document and decision log govern the portfolio documentation/content model.
- Historical notes retain their date and attribution context; they do not override current guidance.

New cases should use stable, descriptive paths when introduced. Do not create parallel copies of a case under origin and domain trees. Future indexes can expose those dimensions by linking to the same case.

## Current application boundary

The current [Project type](../../src/data/projects.ts) provides identifiers, titles, descriptions, highlights, operation, technologies, hardware, optional demonstration/engineering notes, media and repository links. It does not explicitly implement Origin, Domains, Status or structured Sources/evidence metadata.

This taxonomy is a documentation/content model, not a claim about implemented application features. Existing project identifiers, data and interface behaviour are unchanged. Any later mapping into application fields requires separate implementation work.

## Migration boundary

The root README, development/roadmap placeholders, practical-case contents and gateway variants are unchanged in this foundation. Existing practical-case paths and PDF companions remain available. Future migration should review links, preserve evidence and distinguish authoritative reports from historical exports before reorganising them.
