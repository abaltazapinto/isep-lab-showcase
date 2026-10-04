# Engineering work inventory

This maintained inventory helps decide which existing work may become a portfolio case study. It is not a public catalogue, a technology list or proof that every item is completed. Origin, engineering domains, status and evidence are independent concepts, defined in the [content architecture](architecture/ARCHITECTURE.md); the [project standard](architecture/PROJECT_STANDARD.md) governs case-study reporting.

## Classification model

- **A — Ready or nearly ready for a carefully bounded case study.** A does not mean production-ready or comprehensively validated.
- **B — Promising engineering work, but important evidence is missing.**
- **C — Learning/lab material worth preserving.**
- **D — Insufficient evidence; do not currently promote.**

Baseline: the approved read-only audit for Issue #20. The academic source/archive was inspected at revision [`f794d4e56514cdac8d00d16934ba4d7320276981`][academic]. Archived material is not automatically project evidence. Results below are recorded in sources, not independently reproduced by the audit; expected outputs and suggested steps do not establish observed results. Screenshot references alone were not treated as visual verification. No master's project evidence was established.

For compactness, academic origins below use ISEP subject names; all refer to the Embedded Engineering postgraduate programme. Domains describe the supported engineering area, or learning context for C items; D items have no demonstrated project domain. Update a row only when new evidence supports its status, provenance or readiness, and retain the relevant source revision.

## Inventory

| Candidate | Origin | Engineering Domain(s) | Status | Readiness | Key evidence | Missing evidence / next action |
| --- | --- | --- | --- | --- | --- | --- |
| PL5 Exercise III — Linux kernel software PWM | ISEP — Desenvolvimento de Sistemas Embebidos; group work | Embedded Systems | Implemented lab; reported functional tests and hardware demonstration; timing unmeasured | A | [Pinned source/build/README][pwm]; [local PL5 report][pl5]; [photo/video directory](../assets/projects/dsiem-pl5-exercise-iii/) | Save repeatable tests and decision/debugging history. Treat 1 kHz as nominal; measure timing if accuracy is claimed. |
| PL5 Exercise II — Linux kernel GPIO blinker | ISEP — Desenvolvimento de Sistemas Embebidos; group work | Embedded Systems | Implemented lab; reported LED observations | A | [Pinned source/build/README][blinker]; [local PL5 report][pl5] distinguishes timer_list/jiffies from the separate hrtimer example | Save period read/write and lifecycle/error tests; document debugging and timing limits. |
| Samorinha — ATmega128A DC motor control | ISEP Embedded Engineering; precise subject not established | Embedded Systems | Documented hardware implementation/demonstration; qualitative validation | A | [Public description/debugging note](../src/data/projects.ts); [photos/video](../assets/projects/pgsce-samorinha/); [README](../README.md) | Identify technical repository/revision and wiring/firmware; retain EMI as a suspected cause until investigated. |
| Raspberry Pi 5 — Fashion-MNIST inference and preprocessing | ISEP — Inteligência Artificial nos Sistemas Embebidos; PL1 recorded in a PL2 folder | Embedded AI; Embedded Systems | Recorded inference experiment; partial validation | A | [Experiment record][ai-inference]: embedded code, runtime/model fingerprints, inference outputs, evaluation and preprocessing comparison | Preserve standalone scripts, exact subsets, full evaluation/confusion outputs and completed evidence record; no latency/energy claims. |
| Kathará — NAT, HTTP distribution and STUN/TURN | ISEP — Protocolos e Topologias de Sistemas Embebidos; Lab2 | Networking & Security; Cloud & Distributed Systems | Lab with recorded functional results | A | [Report][nat-report]: 20-request distribution, STUN/TURN outcomes and signalling debugging; [topology/configuration and Python source][nat-source] | Preserve dynamically added rules, raw outputs/captures and supplied-versus-modified code attribution; avoid resilience/statistical-quality claims. |
| MQTT — local/remote brokers and TLS comparison | ISEP — Confiabilidade e Cibersegurança; Guião 5 | Networking & Security; IoT; Cloud & Distributed Systems | Implemented lab; recorded publish/subscribe, connection and traffic results | B | [Guião 5 record][mqtt]: listener/certificate configuration, message outputs, capture descriptions and DNS/console debugging | Extract reproducible configuration and captures; add certificate negative tests and authentication scope. Port numbers alone do not prove encryption. |
| POSIX concurrency — races, mutexes and bounded buffers | ISEP — Programação Avançada de Sistemas Embebidos; LAB1/LAB2 | Embedded Systems (concurrency learning/application) | Implemented exercises; limited recorded testing | B | [Counter source][counter-source]; [five-run counter report][counter-report]; [buffer source][buffer]; [LAB1 debugging/lessons][threads] | Save before/after race outputs, full/empty/wraparound and stress tests, plus build instructions; no deployed embedded target established. |
| OPNsense — selective access and DNS forcing | ISEP — Confiabilidade e Cibersegurança; Guiões 2–4 | Networking & Security; Infrastructure & Reliability | Implemented labs; partial recorded validation | B | [Firewall/scan report][firewall]; [selective-access tests][selective]; [PF rules and DNS-forcing investigation][dns-forcing] | Preserve final configuration, bidirectional test matrix and captures/counters; verify persistence. Separate unresolved NAT work. |
| Proxmox — isolated bridges and SSH | ISEP — Confiabilidade e Cibersegurança; Guião 1 | Infrastructure & Reliability; Networking & Security | Lab configuration and reported connectivity/SSH results; some outputs are expected | B | [Guião 1][bridges]: nested VirtualBox/Proxmox topology, bridge isolation and SSH account | Separate observations from expected outputs; save guest/bridge configuration and isolation/access tests. Keep distinct from the cloud SDN context. |
| Proxmox SDN — DMZ/Intranet and DHCP | ISEP — Integração de Sistemas e Serviços na Nuvem; PL1/PL2 on personally named host | Infrastructure & Reliability; Networking & Security; Cloud & Distributed Systems | Partially implemented lab; configuration/debugging recorded | B | [PL1 record][sdn]: SDN/DHCP/SNAT, interface recognition and guest boot issues; [PL2 network observations][cloud-pl2] | Export final configuration; close DNAT and end-to-end tests; verify persistence/isolation/recovery. Do not merge separate Proxmox contexts into a completed project. |
| Pi-hole — DNS client selection and bypass investigation | Archived under ISEP — Confiabilidade e Cibersegurança; home-network experiment; assessed-deliverable status unclear | Networking & Security; Infrastructure & Reliability | Recorded local DNS experiment; partial validation; remote DNS unresolved | B | [Pi-hole notes][pihole]: client DNS change, reported query growth and IPv6 DNS adjustment; [service diagnosis][dns-diagnosis] | Save client-attributed query logs, blocked/allowed tests, blocklists, stable-IP configuration and IPv6/DoH bypass tests. Not a completed filtering case. |
| MOKER — kernel integration and scheduler tracing | ISEP — Sistemas Operativos de Tempo Real; TT4–TT7 | Embedded Systems (embedded-Linux mechanisms) | Kernel/tracing experiment; partial implementation recorded; later stages unclear | B | [TT5 configuration/status][moker5]; [TT6 embedded code, debugging and event-output account][moker6]; [TT7 steps][moker7] | Preserve kernel patch/config, build/boot logs, actual trace.csv and control-syscall tests. No Critical Systems capability established. |
| Mobile backhaul — smartphone → Linux → TP-Link | Domestic experiment filed under Protocolos/Topologias; academic assignment not established | Networking & Security; Infrastructure & Reliability | Reported implementation/troubleshooting; artifacts incomplete | B | [Gateway account](practical_cases/Protocolos_Topologias/caso_pratico_4G_5G_linux_tplink.md); overlapping report/PDF companions in [same directory](practical_cases/Protocolos_Topologias/) | Save actual profiles/routes and client tests; confirm router/AP mode and provenance. Illustrative outputs are not test logs; failover remains proposed. |
| PL4 — user-space GPIO and hardware PWM | ISEP — Desenvolvimento de Sistemas Embebidos | Embedded Systems | Source exercises; closed hardware/test record not established | C | [GPIO source][pl4-gpio]; [PWM source][pl4-pwm] using /dev/mem | Record wiring, actual execution, PWM clock/setup and measurements. |
| IPv6/SLAAC and routing labs | ISEP — Protocolos e Topologias de Sistemas Embebidos | Networking & Security | Topology and address-analysis material; expected connectivity also recorded | C | [IPv6/EUI-64 notes][ipv6]; [topology][ipv6-config]; [Lab4 expected neighbour table][routing] | Capture RA/routes and actual before/after connectivity; do not promote expected pings to observed results. |
| Kernel synchronization/queue examples | ISEP — Sistemas Operativos de Tempo Real; supplied/example code | Embedded Systems | Learning examples; inspected files identify author PBS | C | [Mutex example][kernel-mutex]; [ring-buffer example][kernel-buffer] | Attribute sources; identify personal changes and observed tests before claiming authored work. |
| Scheduling analysis | ISEP — Sistemas Operativos de Tempo Real | Embedded Systems | Analytical lab exercises | C | [EDF schedules and deadline-miss analysis][scheduling] | Check calculations and frame a bounded question; theoretical schedules are not measured Linux results. |
| Weka feature selection / initial training study | ISEP — Inteligência Artificial nos Sistemas Embebidos | Embedded AI (learning context) | Recorded feature-selection work; full train→convert→deploy outcome not established | C | [Weka notes/results][weka]; [PL2 training/deployment study][ai-training] | Preserve experiment/model artifacts and close evaluation/deployment validation. |
| Docker fundamentals | ISEP — Integração de Sistemas e Serviços na Nuvem | Cloud & Distributed Systems | Lecture commands/notes; dependency use in other labs | C | [Images/volumes notes][docker3]; [build/port-mapping notes][docker4] | Identify authored application/configuration and observed tests for an independent case. |
| Docker Swarm | ISEP — Integração de Sistemas e Serviços na Nuvem | Cloud & Distributed Systems | Course notes; operated cluster not established | C | [Manager/worker, quorum and desired-state notes][swarm] | Preserve node/service configuration and actual deployment/scaling/failure tests. |
| CAN/CAN-FD | ISEP — Protocolos e Topologias de Sistemas Embebidos | Embedded Systems | Substantive learning material | C | [CAN/CAN-FD summary][can] | Add firmware/hardware or simulation experiment, traffic captures and observed results. |
| Superloop / simulated monitoring | ISEP — Programação Avançada de Sistemas Embebidos | Embedded Systems | Small host-side source exercises | C | [Superloop source][superloop]; [simulated monitoring source][monitoring] | Define a bounded problem and runtime tests; printed labels do not establish sensors, actuators or safety behaviour. |
| CCTV/NVR | Domestic/personal intent; completed extent unclear | Not established | Investigation/planning material | D | [CCTV notes](practical_cases/CCTV_NVR_DOMESTICO/aprender.md): proposed RTSP/ONVIF/VLC/NVR steps | Verify models, implemented topology, streaming/recording results and investigation history. |
| Automatic irrigation / ESP32 | Academic learning intended for personal garden; actual project provenance unconfirmed | Not established | Proposed application; implementation not established | D | [Programming intention](practical_cases/Programacao_Avancada/aprendi.md); [academic direction](academic/ISEP_VISION.md) | Locate firmware, wiring, calibration, pump-control and fault-test evidence before promotion. |
| Nextcloud — standalone case | Home infrastructure mentioned in academic notes; precise origin unclear | Not established | Service mentioned; identification/deployment unverified | D | [Port-conflict discussion][dns-diagnosis] describes Docker-proxy as probably Nextcloud or another service | Establish service/configuration, storage design, access and backup/restore results. |
| Tailscale remote DNS — standalone case | Home infrastructure recorded under ISEP — Confiabilidade e Cibersegurança | Not established as a standalone case | Peer-state notes; DNS warning/timeout unresolved | D | [Tailscale notes][tailscale]; [remote DNS diagnosis][dns-diagnosis] | Prove off-site DNS and resolve warning; retain debugging within Pi-hole/infrastructure work. Proxmox administration use is separate evidence. |

### Current portfolio priorities

Already public, according to [src/data/projects.ts](../src/data/projects.ts):

- Samorinha ATmega128A DC motor control
- PL5 Exercise II — Linux kernel GPIO blinker
- PL5 Exercise III — Linux kernel software PWM

Strongest new candidates:

1. Raspberry Pi 5 — Fashion-MNIST inference and preprocessing
2. Kathará — NAT, HTTP distribution and STUN/TURN

Next candidate after evidence consolidation:

- MQTT — local/remote brokers and TLS comparison

These priorities guide evidence/documentation work; they do not add projects to the public application.

## Evidence improvement priorities

- Establish precise origin and personal/group contribution, including attribution of supplied code.
- Pin canonical source revisions and preserve reproducible configuration; academic PL5 copies differ from dedicated project versions.
- Separate actual observations from expected test results; retain measurements/captures and failure/debugging history with explicit limitations.
- For AI, preserve runnable scripts, fixed subsets, model/data fingerprints and complete evaluation artifacts.
- For infrastructure, test persistence, isolation and recovery in each distinct context.
- For Pi-hole, establish blocking and bypass evidence, not merely resolver installation or academic provenance.
- Measure PWM timing when timing accuracy is claimed; keep nominal timing distinct from measured behaviour.

## References

Evidence links resolve to existing reports/code rather than copied accounts. Academic links are pinned to the audited revision; the dedicated PL5 revisions below are the sources identified by the local report. Gateway variants/PDFs remain overlapping material, not separate achievements. Reclassification should follow new evidence rather than repository, course or software presence alone.

[academic]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/tree/f794d4e56514cdac8d00d16934ba4d7320276981
[pl5]: practical_cases/Desenvolvimento_Sistemas_Embebidos_lab/pl5_kernel_labs.md
[pwm]: https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII/tree/cea25b70ec92ca6250a28200b408c0c47604bc58
[blinker]: https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII/tree/19482a3ac973dff53a9ec5b3cc328d0be576ae60
[ai-inference]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/06.%20Intelegencia%20Artificial%20nos%20Sistemas%20embebidos/PLs/PL2%2019-09-26/raspberrypi5/pl1_resolucao.md
[nat-report]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/99_Aulas_PL/97.%20Lab2_9_05/resumo.md
[nat-source]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/tree/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/99_Aulas_PL/97.%20Lab2_9_05/nat-stun
[mqtt]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/29%20Jun%20%28python%20%26%26%20capitulos%20de%20formacao%29/guioes/guiao%205/notas/notas_guiao5.md
[counter-source]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/07.%20Aula%20PL%2027%20Jun/exercicios/resolucao/LAB2/ex2_1/ex21_counter_mutex.c
[counter-report]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/07.%20Aula%20PL%2027%20Jun/exercicios/resolucao/LAB2/ex2_1/resposta.md
[buffer]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/07.%20Aula%20PL%2027%20Jun/exercicios/resolucao/LAB2/ex3_2/ex32_circular_buffer.c
[threads]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/03.%20Aula_PL_1_13_Junho/exercicios/CONCLUSAO.MD
[firewall]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/aulas%20pl/aula%20pl1/guioes/notas%20guiao2/guiao_final.md
[selective]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/29%20Jun%20%28python%20%26%26%20capitulos%20de%20formacao%29/guioes/guiao%204/guiao4_3.2.3.md
[dns-forcing]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/29%20Jun%20%28python%20%26%26%20capitulos%20de%20formacao%29/guioes/guiao%204/guiao4_3.4%20DNS%20FORCING.md
[bridges]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/aulas%20pl/aula%20pl1/guioes/guiao%201/guiao1.md
[sdn]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/07.%20Integracao%20de%20Sistemas%20e%20Servicos%20na%20Nuvem/PLs/PL1/pve-braganca/notas_pl1.md
[cloud-pl2]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/07.%20Integracao%20de%20Sistemas%20e%20Servicos%20na%20Nuvem/PLs/PL2%2019-09-26/notas.md
[pihole]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/pihole/notas/notas_pihole.md
[dns-diagnosis]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/aula%205%20-%20%2030jun/notas/notas.md
[moker5]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/TT5/resumo.md
[moker6]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/TT6/apontamentos/notas_TT6.md
[moker7]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/TT7/apontamentos/notas_TT7.md
[pl4-gpio]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/01_Desenvolvimento_de_Sistemas_Embebidos/003.Aula_PL/10__Aula_Raspberry_11_04/00.%20PL4%20-%20Exercicio%201/pl4_ex1_output.c
[pl4-pwm]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/01_Desenvolvimento_de_Sistemas_Embebidos/003.Aula_PL/10__Aula_Raspberry_11_04/01.%20PL4%20-%20Exercicio%202/pl4_ex2_pwm_user.c
[ipv6]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/99_Aulas_PL/03.%20LAB3_16_de_MAIO/Apontamentos/apontamentos_da_aula.md
[ipv6-config]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/99_Aulas_PL/03.%20LAB3_16_de_MAIO/aula/prsiem-net-6/lab.conf
[routing]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/99_Aulas_PL/100.%20Lab4%2023_5_26/apontamentos/notas_lab4.md
[kernel-mutex]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/01.%20Aula%202%20-%209%20de%20Maio/LKM1/mut.c
[kernel-buffer]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/01.%20Aula%202%20-%209%20de%20Maio/LKM1/ring_buffer.c
[scheduling]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/03.%20Sistemas%20Operativos%20de%20Tempo-Real%20-%20TP/99.%20Aulas%20Praticas/00%20Aula%201%20-%202_05_26/analise_aula/Exercicios/resposta_a_PL1.md
[weka]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/06.%20Intelegencia%20Artificial%20nos%20Sistemas%20embebidos/Aula%203%2015-09-26/notas/notas.md
[ai-training]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/06.%20Intelegencia%20Artificial%20nos%20Sistemas%20embebidos/PLs/PL2%2019-09-26/resolucao_minha.md
[docker3]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/07.%20Integracao%20de%20Sistemas%20e%20Servicos%20na%20Nuvem/Aula%203%2022-09-26/notas/notas_22-09.md
[docker4]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/07.%20Integracao%20de%20Sistemas%20e%20Servicos%20na%20Nuvem/Aula%204%2024-09-26/notas/notas_24_09.md
[swarm]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/07.%20Integracao%20de%20Sistemas%20e%20Servicos%20na%20Nuvem/Aula%205%2029-09-26/notas/nota_ISS_29-09-26.md
[can]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/02.%20Protocolos%20e%20Topologias%20de%20Sistemas%20Embebidos%20-%20TP/07.%20Aula_07_12_05_26/resumo.md
[superloop]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/01.%20Aula%209%20de%20Junho/exercicios/superLoop/super_Loop_try.c
[monitoring]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/05.%20Programacao%20Avancada%20De%20Sistemas%20Embebidos/03.%20Aula_PL_1_13_Junho/exercicios/3.4/ex4_monitoring_alerts.c
[tailscale]: https://github.com/abaltazapinto/Switch_Embeddded_Engineering/blob/f794d4e56514cdac8d00d16934ba4d7320276981/04.%20Confiabilidade%20e%20Ciberseguranca/pihole/tailscale/notas/notas_tailscale.md
