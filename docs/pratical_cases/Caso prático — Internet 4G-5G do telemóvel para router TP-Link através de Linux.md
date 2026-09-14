# Caso prático — Telemóvel 4G/5G → Linux → Router TP-Link

## 1. Objetivo

Usar a ligação móvel **4G/5G de um smartphone** como acesso à Internet para uma rede doméstica.

Em vez de ligar todos os dispositivos diretamente ao hotspot Wi-Fi do telefone, o computador Linux funciona como **gateway**, recebendo Internet do smartphone por USB e entregando-a ao router TP-Link através de Ethernet.

## 2. Topologia implementada

```text
               INTERNET
                  │
             Rede 4G / 5G
                  │
            ┌───────────┐
            │ Telemóvel │
            │ Xiaomi /  │
            │ Samsung   │
            └─────┬─────┘
                  │
             USB Tethering
                  │
                  ▼
        ┌─────────────────────┐
        │ ThinkStation P520   │
        │ Ubuntu / Linux      │
        │                     │
        │ WAN: USB smartphone │
        │                     │
        │ routing + NAT       │
        │ DHCP / forwarding   │
        │                     │
        │ LAN: Ethernet       │
        └─────────┬───────────┘
                  │
               Ethernet
                  │
                  ▼
            ┌───────────┐
            │ TP-Link   │
            │ Router/AP │
            └─────┬─────┘
                  │
           ┌──────┴──────┐
           │             │
         Wi-Fi         Ethernet
           │             │
        Clientes       Clientes
```

O caminho dos pacotes é portanto:

```text
Cliente
→ TP-Link
→ Ethernet
→ Ubuntu
→ USB tethering
→ smartphone
→ operador 4G/5G
→ Internet
```

---

## 3. Primeiro princípio aprendido: uma interface por ligação

Quando ligo um telemóvel por USB e ativo:

```text
Definições
→ Hotspot / Partilha de Internet
→ Partilha por USB
```

o Linux cria uma nova **interface de rede**.

Não aparece necessariamente como:

```text
eth0
```

Nos sistemas Linux modernos aparecem frequentemente nomes como:

```text
enx0050b6f9b6b0
enxfacbe4065480
enx46832bb956f5
```

Durante o laboratório apareceram, por exemplo:

```text
Share-Xiaomi-to-TPLink   ethernet   enx0050b6f9b6b0
Wired connection 4      ethernet   enxfacbe4065480
Wired connection 6      ethernet   enx46832bb956f5
tailscale0              tun        tailscale0
lo                      loopback   lo
```

Isto foi importante porque inicialmente era fácil confundir:

```text
qual interface vem do telefone?
qual interface vai para o TP-Link?
```

A regra prática passou a ser:

```text
desligar cabo/dispositivo
        ↓
ver qual interface desaparece
        ↓
voltar a ligar
        ↓
ver qual interface reaparece
```

Assim consigo mapear uma interface Linux para a porta física correspondente.

---

# 4. WAN e LAN

O computador ficou efetivamente com dois lados.

### WAN

A interface criada pelo **USB tethering do telemóvel**.

Recebe normalmente:

```text
IP
gateway
DNS
```

automaticamente através de DHCP fornecido pelo próprio smartphone.

Exemplo conceptual:

```text
Telemóvel
192.168.X.1

Ubuntu USB
192.168.X.2
```

O telefone funciona então como gateway para a rede móvel.

### LAN

Outra interface Ethernet do Ubuntu ficou ligada ao TP-Link.

Essa interface não serve para procurar Internet diretamente.

Serve para:

```text
Ubuntu
↓
partilhar Internet
↓
TP-Link
```

---

# 5. O Ubuntu tornou-se um router

Este é provavelmente o conceito técnico mais importante deste laboratório.

Inicialmente eu pensava essencialmente em:

```text
telemóvel → computador → router
```

Mas do ponto de vista de redes o Ubuntu passou a desempenhar funções de um **router**.

Tem:

```text
Interface WAN
        │
        │ routing
        │ NAT
        │ forwarding
        ▼
Interface LAN
```

Logo existem pelo menos duas redes IP diferentes.

O Linux encaminha pacotes de uma rede para a outra.

---

# 6. Internet Connection Sharing

Na interface Ethernet que vai para o TP-Link foi usada uma configuração equivalente a:

```text
IPv4 Method:
Shared to other computers
```

Quando o NetworkManager utiliza este modo, o Linux pode tratar automaticamente de várias coisas:

```text
IP da interface LAN
DHCP
IP forwarding
NAT / masquerading
```

Ou seja, os equipamentos do lado TP-Link conseguem enviar tráfego para a Internet através do Ubuntu.

Conceptualmente:

```text
PC cliente
192.168.Y.20
       │
       ▼
Ubuntu LAN
192.168.Y.1
       │
       │ NAT
       ▼
Ubuntu USB
192.168.X.2
       │
       ▼
Smartphone
192.168.X.1
       │
       ▼
Internet
```

---

# 7. NAT

Os equipamentos atrás do Ubuntu utilizam endereços privados que não são diretamente conhecidos pelo telemóvel.

Por isso o Ubuntu faz **NAT — Network Address Translation**.

Por exemplo:

```text
Laptop
192.168.50.30
      │
      ▼
Ubuntu
      │
      │ NAT
      ▼
192.168.42.100
      │
      ▼
Smartphone
      │
      ▼
Internet
```

Para o smartphone, o tráfego parece vir essencialmente do Ubuntu.

Quando a resposta regressa, o Ubuntu consulta o estado das ligações NAT e entrega-a novamente ao cliente correto.

---

# 8. Problema importante encontrado: múltiplos gateways

Quando existiam várias ligações simultaneamente, o Ubuntu podia ter várias rotas possíveis para chegar à Internet.

Por exemplo:

```text
Samsung USB ───────┐
                   │
Xiaomi USB ────────┼── Ubuntu
                   │
outra Ethernet ────┘
```

Cada interface podia instalar uma:

```text
default route
```

Ou seja:

```text
0.0.0.0/0
```

O Linux precisava então de decidir:

> Por qual gateway envio um pacote destinado à Internet?

Foi aqui que entrou o conceito de **route metric**.

---

# 9. Métrica de routing

Uma rota pode ter uma métrica.

Regra essencial:

```text
MENOR MÉTRICA = ROTA PREFERIDA
```

Exemplo:

```text
default via Samsung   metric 32
default via Xiaomi    metric 100
default via Ethernet  metric 600
```

Neste caso:

```text
32 < 100 < 600
```

Logo o Samsung é o caminho preferido.

Esta foi uma das causas pelas quais podia existir aparentemente:

```text
telemóvel ligado
IP recebido
interface UP
```

mas o computador continuar sem utilizar aquela ligação para Internet.

O problema não estava necessariamente no 4G/5G.

Podia estar simplesmente na **tabela de routing**.

---

# 10. Diagnóstico correto

Uma interface estar:

```text
UP
```

não significa:

```text
Internet funciona
```

Há várias camadas que precisam de funcionar:

```text
interface física
        ↓
IP
        ↓
gateway
        ↓
default route
        ↓
DNS
        ↓
routing/NAT
        ↓
Internet
```

Por isso o diagnóstico deve começar pela rede e não pelo browser.

Comandos particularmente úteis:

```bash
nmcli connection show
```

Mostra as conexões configuradas pelo NetworkManager.

```bash
nmcli device status
```

Permite relacionar:

```text
CONNECTION
TYPE
DEVICE
```

Depois:

```bash
ip addr
```

mostra os endereços IP das interfaces.

E:

```bash
ip route
```

é fundamental.

Permite observar algo parecido com:

```text
default via 192.168.X.1 dev enx... metric 32
```

Daqui consigo responder:

```text
qual é o meu gateway?
qual interface está a ser utilizada?
qual é a métrica?
existem várias default routes?
```

---

# 11. Experiência prática que ajudou a identificar interfaces

Uma técnica extremamente simples revelou-se muito útil:

```text
1. observar nmcli
2. desligar o telemóvel
3. observar novamente
4. identificar interface desaparecida
5. voltar a ligar
6. confirmar interface
```

Isto é útil sobretudo porque nomes como:

```text
enxfacbe4065480
```

não dizem imediatamente:

```text
Samsung
```

ou:

```text
cabo para TP-Link
```

---

# 12. Xiaomi vs Samsung

O mesmo princípio funcionou com diferentes smartphones.

O ponto importante é que para Linux um smartphone com **USB tethering** aparece essencialmente como mais uma interface Ethernet.

Portanto:

```text
Xiaomi
Samsung
outro Android
```

podem cumprir a mesma função lógica:

```text
Mobile Network
     ↓
USB tethering
     ↓
Linux network interface
```

Isto significa que a arquitetura não depende fundamentalmente da marca do telefone.

Depende da interface, configuração IP, gateway e routing.

---

# 13. Onde entra o TP-Link

O TP-Link passa a ser a infraestrutura que distribui a ligação pela casa.

Dependendo da configuração pode funcionar mais como:

```text
router
```

ou:

```text
access point + switch
```

Se existir NAT também no TP-Link podemos ter:

```text
Internet
↓
NAT smartphone
↓
NAT Ubuntu
↓
NAT TP-Link
↓
clientes
```

Isto é **multi-NAT / double ou triple NAT**.

Funciona perfeitamente para navegação normal, mas pode complicar:

```text
port forwarding
servidores acessíveis externamente
alguns jogos
VPNs específicas
protocolos peer-to-peer
```

Para um laboratório, isto é muito interessante porque permite posteriormente comparar:

```text
Router Mode
vs
Access Point Mode
```

---

# 14. Relação com os conceitos estudados em redes

Este laboratório toca diretamente em vários conceitos:

```text
Layer 1
USB + Ethernet

Layer 2
Ethernet
MAC addresses
switching

Layer 3
IPv4
subnets
routing
default gateway
route metrics

Layer 4+
NAT
connection tracking
DNS
DHCP
```

Portanto não é apenas uma experiência doméstica.

É uma pequena implementação real de uma arquitetura de rede.

---

# 15. O que aprendi

A principal conclusão foi:

```text
ter Internet numa interface
≠
Linux escolher essa interface
```

O sistema operativo consulta a **routing table**.

Quando há várias possibilidades, as rotas e respetivas métricas determinam o caminho.

Outra aprendizagem importante:

```text
interface UP
≠
rota correta
≠
Internet funcional
```

É necessário verificar cada camada separadamente.

---

# 16. Aplicação ao ISEP Lab Showcase

Este projeto pode ser apresentado como:

## Mobile Backhaul Gateway using Linux

Arquitetura:

```text
4G/5G Smartphone
       │
       │ USB tethering
       ▼
Linux Gateway
       │
       ├── Routing
       ├── Route Metrics
       ├── NAT
       ├── DHCP
       └── IP Forwarding
       │
       ▼
TP-Link
       │
       ▼
Home / IoT Network
```

Pode posteriormente evoluir para:

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

Nesse ponto deixa de ser apenas:

> “usei o telefone para dar Internet”.

Passa a ser:

> **Implementação e análise de um gateway Linux com acesso móvel 4G/5G e distribuição Ethernet/Wi-Fi, explorando routing, NAT, DHCP, métricas de rota e redundância de WAN.**

---

# 17. Regra para guardar no caderno

```text
Quando uma máquina tem várias interfaces:

1. identificar interfaces
2. verificar IP de cada uma
3. identificar gateways
4. observar `ip route`
5. localizar `default`
6. comparar métricas
7. testar gateway
8. testar Internet por IP
9. testar DNS
```

Esta sequência evita perder tempo a alterar configurações aleatoriamente.

## Ideia central

```text
Physical link
    ↓
Interface
    ↓
IP address
    ↓
Routing table
    ↓
Gateway
    ↓
NAT / forwarding
    ↓
Internet
```

Se compreender esta cadeia, consigo reconstruir esta configuração no futuro mesmo usando outro telefone, outra placa Ethernet ou outro router.