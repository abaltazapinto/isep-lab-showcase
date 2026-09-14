# Caso pratico - Internet 4G/5G do telemovel para router TP-Link atraves de Linux

**Projeto / laboratorio:** Mobile Backhaul Gateway using Linux  
**Objetivo:** usar um smartphone 4G/5G como WAN e distribuir a Internet para a rede da casa atraves de um PC Linux e de um router TP-Link.

---

## 1. Ideia principal

O smartphone fornece Internet atraves de **USB tethering**. O Linux recebe essa ligacao como uma nova interface de rede e funciona como **gateway/router** entre duas redes:

```text
INTERNET
   |
Rede movel 4G/5G
   |
Smartphone (Xiaomi / Samsung)
   |
USB tethering
   |
Linux - ThinkStation P520
   |  routing + NAT + forwarding
   |
Ethernet
   |
TP-Link
   |
Wi-Fi / Ethernet
   |
Clientes da rede
```

Caminho de um pacote:

```text
Cliente -> TP-Link -> Linux -> USB tethering -> Smartphone -> 4G/5G -> Internet
```

O ponto importante e perceber que o computador Linux deixa de ser apenas um cliente de Internet. Neste laboratorio ele passa a desempenhar o papel de **router/gateway**.

---

## 2. Conceitos de redes envolvidos

Este caso pratico trabalha diretamente com:

- interfaces de rede;
- enderecos IPv4 e sub-redes;
- DHCP;
- default gateway;
- tabela de routing;
- metricas de rota;
- IP forwarding;
- NAT / masquerading;
- DNS;
- Ethernet e switching no lado LAN;
- WAN vs LAN;
- multiple WAN / failover como evolucao futura.

### Relacao aproximada com as camadas

```text
Layer 1  -> USB, cabo Ethernet
Layer 2  -> Ethernet, MAC, switching
Layer 3  -> IPv4, subnet, gateway, routing, route metric
Layer 4+ -> NAT state/connection tracking, DNS, DHCP
```

---

# 3. Os comandos que tenho de guardar

Estes comandos sao a parte central do laboratorio. Se no futuro esquecer a configuracao, consigo reconstruir o sistema seguindo esta sequencia.

## 3.1 Ver os dispositivos de rede

```bash
nmcli device status
```

Mostra:

```text
DEVICE              TYPE      STATE      CONNECTION
enx...               ethernet  connected  ...
tailscale0           tun       connected  tailscale0
lo                   loopback  connected  lo
```

Serve para responder:

- Que interfaces existem?
- Qual esta ligada?
- Qual ligacao do NetworkManager esta aplicada?

### Tecnica pratica para descobrir qual interface pertence ao telemovel

```text
1. Executar: nmcli device status
2. Desligar fisicamente o telemovel USB
3. Executar novamente: nmcli device status
4. Ver qual interface desapareceu
5. Voltar a ligar o telemovel
6. Confirmar qual interface reaparece
```

Isto e especialmente util porque nomes como `enx46832bb956f5` nao dizem imediatamente se a interface corresponde ao Samsung, Xiaomi ou a um adaptador Ethernet.

---

## 3.2 Ver as ligacoes guardadas no NetworkManager

```bash
nmcli connection show
```

No laboratorio apareceram nomes deste genero:

```text
Share-Xiaomi-to-TPLink
Wired connection 4
Wired connection 6
tailscale0
```

Distincao importante:

```text
DEVICE      = interface que existe no sistema
CONNECTION  = perfil/configuracao gerida pelo NetworkManager
```

Um `DEVICE` e uma interface; uma `CONNECTION` e a configuracao aplicada a essa interface.

---

## 3.3 Ver os enderecos IPv4

```bash
ip -4 addr
```

Alternativa rapida:

```bash
hostname -I
```

Para estudar e diagnosticar redes, `ip -4 addr` e melhor porque associa cada endereco a uma interface.

Exemplo conceptual:

```text
enxABC:
    inet 192.168.42.129/24
```

Perguntas a responder:

- O telemovel entregou um IP ao Linux?
- Em que subnet estou?
- Que interface recebeu esse endereco?

---

# 4. O comando central: `ip route`

```bash
ip route
```

Este comando mostra a **tabela de routing** do kernel.

Exemplo:

```text
default via 192.168.42.1 dev enxABC metric 50
default via 192.168.100.1 dev enxDEF metric 600
192.168.42.0/24 dev enxABC proto kernel scope link
```

A pergunta fundamental e:

> Por onde vai o Linux enviar um pacote cujo destino nao pertence a nenhuma rede local conhecida?

A resposta esta normalmente na linha `default`.

### Regra essencial

```text
MENOR METRIC = ROTA PREFERIDA
```

Exemplo:

```text
Samsung  -> metric 50
outra WAN -> metric 600

50 < 600
=> Samsung e a rota preferida
```

Isto explica um erro muito importante:

```text
Interface ligada + IP valido != Internet necessariamente usada por essa interface
```

O Linux pode ter varias ligacoes ativas e escolher outra `default route`.

---

# 5. Perguntar diretamente ao kernel que caminho vai usar

```bash
ip route get 1.1.1.1
```

Exemplo de resposta:

```text
1.1.1.1 via 192.168.42.1 dev enxABC src 192.168.42.129
```

Interpretacao:

```text
via 192.168.42.1   -> gateway
dev enxABC         -> interface usada
src 192.168.42.129 -> IP de origem escolhido
```

Este comando e extremamente util porque evita adivinhar.

### Regra para guardar

```text
Nao tento adivinhar por onde o Linux esta a sair.
Pergunto ao kernel:

ip route
ip route get 1.1.1.1
```

---

# 6. Testar Internet por camadas

Nao comecar pelo browser. Testar uma camada de cada vez.

## 6.1 Testar conectividade IP sem depender de DNS

```bash
ping -c 4 1.1.1.1
```

Se funcionar, existe forte evidencia de que:

```text
interface -> gateway -> routing -> Internet
```

estao a funcionar.

## 6.2 Depois testar DNS

```bash
ping -c 4 google.com
```

Diagnostico:

```text
1.1.1.1 funciona
+
google.com falha
=
problema provavelmente relacionado com DNS
```

Se nem `1.1.1.1` responder, investigar primeiro interface, gateway e routing. Nao vale a pena comecar pelo DNS.

---

# 7. Alterar a prioridade de uma ligacao

O NetworkManager permite definir a metrica de uma conexao.

```bash
nmcli connection modify "NOME_DA_LIGACAO" ipv4.route-metric 50
```

Exemplo:

```bash
nmcli connection modify "Wired connection 4" ipv4.route-metric 50
```

Depois reaplicar a configuracao:

```bash
nmcli connection down "Wired connection 4"
nmcli connection up "Wired connection 4"
```

E verificar sempre:

```bash
ip route
```

Principio de engenharia:

```text
CONFIGURAR -> MEDIR -> CONFIRMAR
```

Nao assumir que uma alteracao foi aplicada apenas porque o comando nao apresentou erro.

---

# 8. Partilhar a Internet para o TP-Link

A interface Ethernet que liga o Linux ao TP-Link pode ser configurada no NetworkManager como:

```text
IPv4 Method: Shared to other computers
```

Pelo terminal:

```bash
nmcli connection modify "Share-Xiaomi-to-TPLink" ipv4.method shared
```

Depois:

```bash
nmcli connection down "Share-Xiaomi-to-TPLink"
nmcli connection up "Share-Xiaomi-to-TPLink"
```

E confirmar:

```bash
ip -4 addr
ip route
```

No modo `shared`, o NetworkManager normalmente prepara automaticamente os elementos necessarios para a rede partilhada, incluindo endereco no lado LAN e mecanismos de DHCP/NAT/forwarding.

---

# 9. WAN e LAN neste laboratorio

## WAN

E a interface que recebe Internet do smartphone por USB tethering.

Conceptualmente:

```text
Operador 4G/5G
     |
Smartphone
     |
USB
     |
Linux WAN
```

O smartphone normalmente fornece ao Linux, por DHCP:

- endereco IPv4;
- gateway;
- parametros DNS.

## LAN

E a interface Ethernet do Linux que alimenta o TP-Link.

```text
Linux LAN -> TP-Link -> clientes
```

Portanto, o Linux tem efetivamente dois lados:

```text
          LINUX

WAN  <--- routing/NAT --->  LAN
 ^                         |
 |                         v
Phone                    TP-Link
```

---

# 10. NAT: porque os clientes conseguem sair para a Internet

Os clientes atras do Linux possuem enderecos privados que nao sao diretamente conhecidos pelo smartphone.

Exemplo conceptual:

```text
Laptop
192.168.50.20
     |
     v
Linux LAN
     |
     | NAT / masquerading
     v
Linux USB/WAN
192.168.42.129
     |
     v
Smartphone
192.168.42.1
     |
     v
Internet
```

O Linux traduz o trafego dos clientes para a sua identidade no lado WAN e mantem estado suficiente para entregar as respostas ao cliente correto.

---

# 11. Xiaomi, Samsung e outros smartphones

O principio e independente da marca.

Do ponto de vista do Linux:

```text
Xiaomi
Samsung
outro Android
     |
USB tethering
     v
interface de rede Linux
```

A diferenca importante para o diagnostico nao e a marca do telefone. E:

- que interface apareceu;
- que IP recebeu;
- qual gateway foi instalado;
- que metrica tem a default route;
- se essa rota esta efetivamente a ser escolhida.

Por isso, quando se troca de telefone, repetir:

```bash
nmcli device status
ip -4 addr
ip route
ip route get 1.1.1.1
```

---

# 12. TP-Link: router vs access point

O TP-Link pode estar a desempenhar funcoes diferentes dependendo da configuracao.

## Router mode

Pode existir NAT adicional:

```text
Internet
  |
NAT smartphone
  |
NAT Linux
  |
NAT TP-Link
  |
clientes
```

Isto pode criar double/triple NAT.

Para navegacao normal costuma funcionar, mas pode complicar:

- port forwarding;
- servidores expostos para o exterior;
- alguns jogos;
- algumas VPNs;
- peer-to-peer.

## Access Point mode

O TP-Link pode funcionar principalmente como:

```text
Wi-Fi Access Point + Ethernet switch
```

Neste caso a arquitetura pode ficar mais simples.

Isto da um excelente laboratorio futuro para comparar:

```text
Router Mode vs Access Point Mode
```

---

# 13. Algoritmo de diagnostico que devo decorar

Quando a Internet nao funciona:

```text
Internet nao funciona
       |
       v
nmcli device status
       |
       v
A interface existe e esta connected?
       |
       v
ip -4 addr
       |
       v
Recebeu endereco IPv4?
       |
       v
ip route
       |
       v
Qual e a default route?
Qual e a metric?
       |
       v
ip route get 1.1.1.1
       |
       v
Que interface e gateway seriam usados?
       |
       v
ping -c 4 1.1.1.1
       |
    +--+--+
    |     |
   OK    FAIL
    |     |
    v     v
ping     routing /
google   gateway /
.com     interface
    |
    v
DNS?
```

---

# 14. Os sete comandos para memorizar

```bash
nmcli device status
nmcli connection show
ip -4 addr
ip route
ip route get 1.1.1.1
ping -c 4 1.1.1.1
ping -c 4 google.com
```

Para alterar routing:

```bash
nmcli connection modify "CONNECTION" ipv4.route-metric 50
```

Para partilhar a Internet numa interface:

```bash
nmcli connection modify "CONNECTION" ipv4.method shared
```

Para reaplicar uma conexao:

```bash
nmcli connection down "CONNECTION"
nmcli connection up "CONNECTION"
```

---

# 15. O que aprendi realmente

A primeira aprendizagem importante foi:

```text
Interface UP != Internet funcional
```

A segunda:

```text
Ter Internet disponivel numa interface
!=
Linux escolher essa interface para sair
```

A terceira:

```text
A tabela de routing e a fonte da verdade para perceber o caminho IP.
```

E a quarta:

```text
Nao alterar configuracoes ao acaso.
Observar o estado -> formular hipotese -> alterar -> medir novamente.
```

---

# 16. Porque isto e interessante para o ISEP Lab Showcase

Este projeto pode ser apresentado como:

## Mobile Backhaul Gateway using Linux

```text
4G/5G Smartphone
       |
       | USB tethering
       v
Linux Gateway
       |
       +-- Routing
       +-- Route Metrics
       +-- NAT
       +-- DHCP
       +-- IP Forwarding
       |
       v
TP-Link
       |
       v
Home / IoT Network
```

Nao e apenas "usar o telemovel para dar Internet".

E uma implementacao real de um gateway com duas zonas de rede e permite demonstrar:

- identificacao de interfaces;
- configuracao IPv4;
- routing;
- selecao de default gateway;
- route metrics;
- NAT;
- troubleshooting sistematico;
- distribuicao Ethernet/Wi-Fi.

---

# 17. Evolucao profissional do laboratorio

A arquitetura pode evoluir para:

```text
4G/5G failover
dual-WAN
automatic route switching
network monitoring
Raspberry Pi gateway
Tailscale
Pi-hole
ESP32 / IoT subnet
VLANs
MQTT
```

Uma evolucao particularmente interessante seria substituir a ThinkStation por um Raspberry Pi:

```text
4G/5G Smartphone
       |
       | USB
       v
Raspberry Pi Gateway
       |
       | Ethernet
       v
TP-Link / Managed Switch
       |
       +-- Main LAN
       +-- IoT VLAN
       +-- ESP32
       +-- Raspberry Pi services
```

Depois seria possivel implementar failover entre, por exemplo:

```text
WAN 1 -> 5G Samsung
WAN 2 -> 4G Xiaomi
```

com metricas diferentes e verificacao automatica da disponibilidade de cada gateway.

---

# 18. Resumo mental de 30 segundos

Se tiver de repetir tudo daqui a seis meses:

```text
1. Ligar telefone e ativar USB tethering.
2. nmcli device status
3. Identificar a nova interface.
4. ip -4 addr
5. Confirmar que recebeu IP.
6. ip route
7. Ver default gateway e metric.
8. ip route get 1.1.1.1
9. Confirmar por onde o kernel quer sair.
10. ping -c 4 1.1.1.1
11. ping -c 4 google.com
12. Configurar a Ethernet para o TP-Link como shared.
13. Voltar a verificar IP e rotas.
14. Testar um cliente atras do TP-Link.
```

---

# 19. Nota para o caderno

> **Nao decorar a configuracao inteira. Decorar o metodo de observacao.**
>
> `nmcli` mostra interfaces e perfis.  
> `ip addr` mostra identidade IP.  
> `ip route` mostra as decisoes de encaminhamento.  
> `ip route get` pergunta diretamente ao kernel o caminho real.  
> `ping` separa problemas de conectividade IP de problemas de DNS.

A cadeia mental final e:

```text
Physical link
     |
     v
Interface
     |
     v
IP address
     |
     v
Routing table
     |
     v
Default gateway / metric
     |
     v
NAT + forwarding
     |
     v
Internet
```

Se esta cadeia for compreendida, a mesma topologia pode ser reconstruida com outro telemovel, outro adaptador Ethernet, outro router ou um Raspberry Pi.
