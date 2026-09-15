# PL5 — Módulos de kernel Linux no Raspberry Pi 4

Dois laboratórios concluídos de Desenvolvimento de Sistemas Embebidos (ISEP),
implementados em C. Os repositórios técnicos são a fonte de verdade; os resultados
abaixo são os reportados nos README, não novos ensaios de hardware.

## Exercício II — Linux Kernel GPIO Blinker

- **Construído:** módulo de kernel que comuta um LED no GPIO12 do Raspberry Pi 4,
  com leitura e configuração do período através de `/dev/blinker`.
- **Hardware:** Raspberry Pi 4, GPIO12 (pino físico 32), LED, resistência em série e GND comum.
- **Implementação principal:** o `Makefile` liga `blinker.o` e `gpio.o`.
  Em `blinker.c`, o período recebido em milissegundos é convertido num semiperíodo
  em jiffies. O callback de `timer_list` comuta a saída e agenda a próxima transição.
  `gpio.c` usa `ioremap`, `ioread32` e `iowrite32` para aceder aos registos GPIO.
- **Interface:** operações de character device e transferências com `copy_to_user`
  e `copy_from_user` ligam user space à configuração em kernel space.
- **Evidência:** o README relata a observação do LED como ferramenta de debugging
  ao nível do hardware. O código demonstra controlo periódico de GPIO e configuração
  de um driver através de operações de ficheiro.
- **Distinção de temporização:** embora o README mencione `hrtimer`, o build principal
  usa `timer_list`/jiffies. O ficheiro separado `blinker_hr.c` demonstra `hrtimer`
  e alterações de estado lógico, mas não controla GPIO nem integra o build principal.

Fontes: [repositório e README](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII),
[Makefile](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII/blob/master/Makefile),
[blinker.c](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII/blob/master/blinker.c),
[gpio.c](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII/blob/master/gpio.c),
[blinker_hr.c](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exII/blob/master/blinker_hr.c).

## Exercício III — Software PWM Kernel Module

- **Construído:** módulo de kernel que gera PWM por software no GPIO12 do Raspberry Pi 4,
  com duty cycle configurável de 0 a 100% através de `/dev/dimmer`.
- **Hardware:** Raspberry Pi 4, GPIO12 (pino físico 32), LED, resistência em série e GND comum.
- **Implementação:** o `Makefile` liga `blinker_hr.o` e `gpio.o`. O callback de
  `hrtimer` lê o setpoint no início de cada período e alterna as fases alta e baixa.
  Os intervalos programados são `duty_cycle × 10 000 ns` e
  `(100 − duty_cycle) × 10 000 ns`, totalizando nominalmente 1 ms (1 kHz).
  Os extremos 0% e 100% mantêm a saída desligada e ligada, respetivamente.
- **Interface:** o handler de escrita copia e interpreta o valor recebido de user space,
  rejeitando valores fora de 0–100. A leitura devolve o setpoint.
- **Evidência:** o README reporta testes de brilho do LED a 0%, 10%, 50%, 90% e 100%.
  O código demonstra PWM por software em kernel space, validação de entrada e acesso
  direto a GPIO, sem utilizar o periférico de PWM por hardware.
- **Media no showcase:** a fotografia `software-pwm-led-raspberry-pi-4.jpg` e o vídeo
  `software-pwm-demo.mp4`, em `assets/projects/dsiem-pl5-exercise-iii/`, documentam
  a demonstração de hardware. Não permitem determinar um duty cycle específico,
  frequência PWM medida, precisão temporal ou jitter.
- **Limite da evidência:** 1 kHz é a frequência nominal dos intervalos programados.
  O repositório não apresenta medições de precisão temporal ou jitter.

Fontes: [repositório e README](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII),
[Makefile](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII/blob/main/Makefile),
[blinker_hr.c](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII/blob/main/blinker_hr.c),
[gpio.c](https://github.com/abaltazapinto/rpi_lab_ISEP_pl5_exIII/blob/main/gpio.c).

## Rastreabilidade

Fontes consultadas em 15 de setembro de 2026: Exercício II na revisão
`19482a3ac973dff53a9ec5b3cc328d0be576ae60` (`master`) e Exercício III na revisão
`cea25b70ec92ca6250a28200b408c0c47604bc58` (`main`).
