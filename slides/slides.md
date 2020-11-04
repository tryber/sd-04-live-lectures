---
presentation:
  width: 1920
  height: 1080
  theme: black.css
  previewLinks: true
---

<!-- slide -->

# 29.2 - Gerenciadores de Processos

<!-- slide vertical=true -->

# O que vamos aprender?

* O que são gerenciadores de processo;
* Como utilizar o pm2 como gerenciados de processo;
* Principais funções do pm2: `start`, `stop`, `restart`, `delete`, `ls`;
* Tratamento de erros com pm2;
* Modo cluster;

<!-- slide -->

## O que são?

<br>

Softwares criados para facilitar e tornar mais eficaz o gerenciamento de processos

<!-- slide vertical=true -->

## Vantagens

- Maior robustez para as aplicações gerenciadas
- Melhor aproveitamento de recursos
- Monitoramento de aplicações
- Mecanismo de _fail safe_
- Captura de logs

<!-- slide vertical=true -->

## Opções

- StrongLoop PM
- Forever
- SystemD
- ...

<!-- slide -->

## PM2

<!-- slide vertical=true -->

### Vantagens

- Suporte nativo a Node.JS
- Modo Cluster
- Interface de gerenciamento online
- Gerenciamento de logs
- Monitoramento de arquivos
- Integração com o Docker
- PM mais utilizado no mercado

<!-- slide vertical=true -->

### Utilizando

<br>

```shell
pm2 start index.js --watch --name colorful-process
```

<!-- slide vertical=true -->

### Hora da Demo! 💻

Show me the code!

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/p4votmpd?section=fda30f33-da24-4fb3-b286-a58700ab3e05)

<!-- slide -->

## Tratamento de erros

<br>

- Reinicia os processos automaticamente
- Uma das grandes vantagens de um gerenciador de processos
- Garante que uma aplicação não fique fora do ar por muito tempo

<!-- slide vertical=true -->

### Vamos ver funcionando 🔍

Criando um endpoint de "bug" 🐛

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/p4votmpd?section=fda30f33-da24-4fb3-b286-a58700ab3e05)

<!-- slide -->

## Arquivo ecosystem

Armazenando as configurações dos apps 💾

<!-- slide vertical=true -->

### Arquivo ecosystem

<br>

Permite definir as configurações de um ou mais apps para que sejam iniciados já com tudo pronto.

<!-- slide vertical=true -->

#### Exemplo

<br>

```yaml
apps:
  - name: colorful-process
    script: ./index.js
    watch: true
```

<!-- slide vertical=true -->

#### Executando

<br>

```shell
pm2 start ecosystem.config.yml
```

<!-- slide vertical=true -->

### Hora da demo

E lá vamos nós! 🧹

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/p4votmpd?section=fda30f33-da24-4fb3-b286-a58700ab3e05)

<!-- slide -->

## Modo Cluster

Aproveitando todo o poder do servidor 🔥

<!-- slide vertical=true -->

### O que é?

Modo de execução do Node.JS que inicia vários processos com o mesmo código

<!-- slide vertical=true -->

### Pra que serve?

- Utilização máxima dos recursos do servidor
- Distribuir a carga entre mais de um processo
- 0 tempo de downtime em caso de erro

<!-- slide vertical=true -->

### Visualizando

![](images/modo-cluster.png)

<!-- slide vertical=true -->

### Na prática

<br>

```yaml
# apps:
#   - name: colorful-process
#     script: ./index.js
#     watch: true
exec_mode: cluster
instances: max
```

<!-- slide vertical=true -->

### Hora da demo

`🟡 🔵 🟢 🔴 colorful_process 🔴 🟢 🔵 🟡`

<!-- slide vertical=true -->

### [🏁 Checkpoint 🏁](https://wall.sli.do/event/p4votmpd?section=fda30f33-da24-4fb3-b286-a58700ab3e05)

<!-- slide -->

# [🤔 Dúvidas? 🤔](https://wall.sli.do/event/p4votmpd?section=fda30f33-da24-4fb3-b286-a58700ab3e05)

<!-- slide -->

# Fim!
