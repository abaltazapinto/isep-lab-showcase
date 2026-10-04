# ISEP Embedded Engineering — Academic context

## Responsibility

This document describes the Embedded Engineering postgraduate context at ISEP, its learning/project direction and relevant historical academic notes. ISEP remains an active academic origin within the broader Engineering Portfolio.

The [portfolio vision](../PORTFOLIO_VISION.md) is authoritative for portfolio-wide purpose and scope. This document is subordinate to it and does not define a separate global portfolio taxonomy or project standard. See the [content architecture](../architecture/ARCHITECTURE.md) and [project standard](../architecture/PROJECT_STANDARD.md) for those responsibilities.

## Programme structure and academic source

The [Embedded Engineering programme source repository](https://github.com/abaltazapinto/Switch_Embeddded_Engineering) is the academic-source reference for the programme structure and its course material. It contains these eight subject areas:

| Area | Subject |
| --- | --- |
| 00 | Fundamentos de Sistemas Embebidos |
| 01 | Desenvolvimento de Sistemas Embebidos |
| 02 | Protocolos e Topologias de Sistemas Embebidos |
| 03 | Sistemas Operativos de Tempo Real |
| 04 | Confiabilidade e Ciberseguranca |
| 05 | Programacao Avancada de Sistemas Embebidos |
| 06 | Inteligencia Artificial nos Sistemas Embebidos |
| 07 | Integracao de Sistemas e Servicos na Nuvem |

Confiabilidade e Ciberseguranca is part of the academic programme context. Its source material includes course structure, command/reference notes, practical/lab material, Pi-hole material, and security/reliability study material. Pi-hole can therefore be referenced as academic learning/lab material from this subject; this does not establish a completed or validated Pi-hole implementation in the public showcase.

Inteligencia Artificial nos Sistemas Embebidos and Integracao de Sistemas e Servicos na Nuvem are current programme areas. Their inclusion records academic coverage, not completion of portfolio projects.

These subjects describe academic context under the ISEP Embedded Engineering origin. Engineering domains are assigned independently to each case according to the work and evidence it demonstrates; they are not inferred solely from subject names.

## Academic engineering direction

The programme's learning should be communicated through concrete systems, experiments, implementation choices, debugging and documented results. Subjects and grades provide academic context; engineering evidence is the principal value of a case.

Existing documented work includes PGSCE Samorinha, presented in the [current public project catalogue](../../src/data/projects.ts), and the [PL5 kernel-module laboratories](../practical_cases/Desenvolvimento_Sistemas_Embebidos_lab/pl5_kernel_labs.md). The PL5 report identifies its technical sources and distinguishes implemented mechanisms, reported observations and absent timing measurements.

## Learning and proposed applications

Earlier notes proposed applying programme learning to an ESP32 automatic irrigation system: sensing/calibration, C/C++, FreeRTOS task coordination, I2C peripherals, pump control, state machines, logging and fault handling. The [advanced-programming note](../practical_cases/Programacao_Avancada/aprendi.md) records an intention to apply learning, including circular buffers, to irrigation. These are learning/project directions, not evidence that all those mechanisms or reliability improvements have been implemented.

Linux, Raspberry Pi and networking investigations may connect academic learning with personal infrastructure. Topics include routing, DNS, Tailscale, remote access and service diagnosis. Pi-hole also has an explicit academic learning/lab context in Confiabilidade e Ciberseguranca, as described above. Record origin from the actual context of each case; relevance to a subject does not automatically make a personal lab an academic deliverable.

Potential further experiments include CAN/CAN-FD, MQTT, FreeRTOS, embedded communications and Linux/IoT integration. Further experiments may extend the existing academic security/reliability material. Promote them into case studies only when there is worthwhile documented work and evidence. No completion is implied by this list.

## Preserved academic planning notes

The Portuguese notes below are retained from the previous vision document, with trailing whitespace removed. They preserve the recorded grades, subject structure and planning discussion rather than independently verifying academic records. They are historical suggestions, not current implementation instructions or a complete current programme inventory; the eight-area structure above provides that context. In particular, the shorthand grouping of both PL5 labs under `hrtimer` must be read alongside the current PL5 report: Exercise II's main build uses `timer_list`/jiffies.

# 08 - 09 - 26

Estrutura que eu recomendo
￼
ISEP Embedded Systems
│
├── Fundamentos de Sistemas Embebidos
│   └── nota: 16
│
├── Desenvolvimento de Sistemas Embebidos
│   ├── nota: 17
│   ├── PL5 Ex. II — Linux Kernel GPIO Blinker
│   └── PL5 Ex. III — Software PWM Kernel Module
│
├── Programação Avançada de Sistemas Embebidos
│   └── nota: 16
│
├── Protocolos e Topologias de Sistemas Embebidos
│   └── nota: 16
│
├── Sistemas Operativos de Tempo Real
│   └── nota: 12
│
└── período final
    ├── Inteligência Artificial em Sistemas Embebidos
    └── Integração de Sistemas e Serviços na Nuvem
E faz sentido porque as notas que mostraste confirmam:
Fundamentos 16, Desenvolvimento 17, Programação Avançada 16, Sistemas Operativos de Tempo Real 12; Protocolos e Topologias dizes que foi 16. As duas cadeiras finais que começam agora aparecem também na tua lista de inscrições.

Para o site
Eu não meteria a nota como elemento principal do card. O foco deve continuar a ser engenharia. A nota pode aparecer dentro da página da cadeira/projeto como contexto académico.

Por exemplo, na secção Desenvolvimento de Sistemas Embebidos:

￼
Development of Embedded Systems
Grade: 17/20

Labs
├── Linux Kernel GPIO Blinker
│   Raspberry Pi 4 · C · Linux Kernel · GPIO · hrtimer
│
└── Software PWM Kernel Module
    Raspberry Pi 4 · C · Linux Kernel · PWM · hrtimer
Isto começa a transformar o Showcase num portefólio técnico real, e não numa lista de disciplinas.

O próximo passo que eu faria é não implementar nada ainda: primeiro criamos uma Issue pequena para adicionar estes dois labs de DSIEM ao catálogo existente, sem mexer nas outras cadeiras. Depois fazemos branch → Codex → review, como acabámos de fazer com o theme toggle.


# outra nota e sugestao
Development of Embedded Systems — 17/20

PL5 Ex. II
Linux Kernel GPIO Blinker
Raspberry Pi 4 · C · Linux Kernel · GPIO · hrtimer

PL5 Ex. III
Software PWM Kernel Module
Raspberry Pi 4 · C · Linux Kernel · PWM · hrtimer
