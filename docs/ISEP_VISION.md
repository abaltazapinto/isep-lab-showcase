# ISEP Lab Showcase --- Vision

## Purpose

The ISEP Lab Showcase is a portfolio of concrete engineering work
developed during and around the Embedded Engineering postgraduate
studies at ISEP.

Its purpose is not to list subjects studied. It should demonstrate
engineering through working systems, experiments, debugging, technical
decisions, failures, improvements, and documented results.

## Core Principle

> Show engineering evidence, not only academic topics.

Each showcased project should answer:

-   What problem was being solved?
-   What system was built?
-   What technologies and engineering concepts were used?
-   What problems or failures appeared?
-   How were they investigated?
-   What was learned?
-   What evidence demonstrates the result?

## Conceptual Portfolio Architecture

### 1. Embedded Systems

#### Automatic Irrigation System

A practical embedded system based on an ESP32 for monitoring soil
moisture and controlling irrigation.

Engineering areas include:

-   ESP32
-   C/C++
-   FreeRTOS
-   ADC and soil-moisture sensing
-   I2C peripherals
-   pump and motor-driver control
-   task coordination
-   state-machine evolution
-   sensor calibration
-   logging and debugging
-   fault detection
-   fail-safe behaviour
-   reliability improvements

The project should evolve beyond "automatic watering" into a documented
embedded-systems case study, including observed failure modes and the
engineering changes used to mitigate them.

### 2. Networking / Systems

#### Raspberry Pi Home Lab

A practical Linux and networking environment built around Raspberry Pi
systems and personal infrastructure.

Engineering areas can include:

-   Linux administration
-   Raspberry Pi
-   networking and routing
-   DNS
-   Pi-hole
-   Tailscale
-   remote access
-   service troubleshooting
-   connectivity diagnosis
-   system reliability
-   infrastructure debugging

The showcase should emphasize real incidents and their diagnosis rather
than merely listing installed technologies.

### 3. Academic Projects

#### PGSCE Samorinha

Existing academic project represented as a concrete project within the
showcase.

Its presentation should focus on:

-   problem/context
-   architecture
-   implementation
-   engineering decisions
-   technologies
-   results
-   lessons learned

## Future Engineering Labs

Additional sections should be added only when there is worthwhile
practical evidence to show.

Potential labs include:

-   CAN / CAN-FD
-   MQTT
-   FreeRTOS
-   networking
-   cybersecurity
-   embedded communications
-   Linux / IoT integration

These should become portfolio entries when they contain experiments,
code, measurements, debugging evidence, architecture, or demonstrable
results.

## Portfolio Structure

Conceptually:

``` text
ISEP Lab Showcase
│
├── Embedded Systems
│   └── Automatic Irrigation System
│
├── Networking / Systems
│   └── Raspberry Pi Home Lab
│
├── Academic Projects
│   └── PGSCE Samorinha
│
└── Future Engineering Labs
    ├── CAN / CAN-FD
    ├── MQTT
    ├── FreeRTOS
    └── Security
```

## Project Presentation Standard

Each substantial showcase project should progressively provide:

1.  Problem statement
2.  System overview
3.  Architecture
4.  Hardware/software stack
5.  Implementation highlights
6.  Engineering decisions
7.  Testing and debugging
8.  Failures and lessons learned
9.  Results/evidence
10. Possible future improvements

Not every project needs all sections immediately. The showcase should
grow incrementally as engineering evidence becomes available.

## Scope Discipline

The showcase should not become a generic CV, course catalogue, or
collection of disconnected notes.

Avoid entries whose only evidence is:

-   "studied MQTT"
-   "learned CAN"
-   "used FreeRTOS"
-   "know Linux"

Prefer evidence such as:

-   implemented a FreeRTOS task architecture;
-   captured and analysed CAN traffic;
-   diagnosed a DNS/routing failure;
-   measured and calibrated an analog sensor;
-   reproduced a failure and documented its root cause;
-   designed a safety mechanism after observing a real failure mode.

## Direction

The long-term objective is for the showcase to communicate a
progression:

``` text
academic learning
        ↓
experimentation
        ↓
working systems
        ↓
failure and debugging
        ↓
engineering decisions
        ↓
documented evidence
```

The portfolio should make it possible for another engineer or recruiter
to understand not only what technologies were used, but how engineering
problems were approached.

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
