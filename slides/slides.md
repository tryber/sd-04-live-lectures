---
presentation:
  width: 1920
  height: 1080
  previewLinks: true
  theme: black.css
---

<!-- slide -->

# 29.1 - Deploy com Heroku

<!-- slide vertical=true -->

## Tipos de hospedagem

<!-- slide vertical=true -->

![](https://raw.githubusercontent.com/betrybe/live-lectures/master/block-29/29-1/images/saas-vs-paas-vs-iaas-1024x953.png?token=AAGW4NVWHU5IIOHGC4TB7GK7VLTDG)

<!-- slide vertical=true -->

### On-Premises

É necessário gerenaciar todas as camadas

<!-- slide vertical=true -->

### Infrastucture as a Service

O provedor disponibiliza serviços voltados para infraestrutura como, por
exemplo, backup, redes e VMs.

<!-- slide vertical=true -->

### Platform as a Service

Plataforma para desenvolvimento e gerenciamento de aplicativos na nuvem

<!-- slide vertical=true -->

### Softwares as a Service

Utiliza-se uma aplicação já pronta. Ex.: Office 365, Google Docs, GitHub.

<!-- slide vertical=true -->

# [🏁 Checkpoint 🏁](https://wall.sli.do/event/wr4awgbh)

<!-- slide -->

## Realizando o deploy

<small>Bora pro VSCode 🧑‍💻</small>

<!-- slide -->

## Variáveis de ambiente

<!-- slide vertical=true -->

### Cada servidor é um ambiente

Cada ambiente tem suas próprias variáveis de ambiente. Dessa forma, cada
ambiente pode acessar, por exemplo, um banco de dados diferente.

<!-- slide vertical=true -->

### Definindo variáveis

<!-- slide vertical=true -->

#### No terminal

```shell
export DB_URI=mongodb://localhost:27017/meu-site

# OU

DB_URI=mongodb://localhost:27017/meu-site npm start
```

<br>

#### Com dot-env

```shell
# .env

DB_URI=mongodb://localhost:27017/meu-site
```

```js
// index.js

require('dot-env/config');
//...
```

<br>

#### No Heroku

```shell
heroku config:set "MONGODB_URI=mongodb://user:password@cloud.mongodb.com/meu-site" --app meu-site

heroku config:set "MONGODB_URI=mongodb://user:password@cloud.mongodb.com/meu-site-homolog" --app meu-site-beta
```

<!-- slide vertical=true -->

### Utilizando variáveis

<!-- slide vertical=true -->

#### `process.env`

<br>

```javascript
// ...
MongoClient.connect(process.env.DB_URI);
// ...
```

<!-- slide vertical=true -->

# [🏁 Checkpoint 🏁](https://wall.sli.do/event/wr4awgbh)

<!-- slide -->

## Múltiplos ambientes

<!-- slide vertical=true -->

### Vantagens

<br>

- Realização de mais de um deploy a partir do mesmo código\
- Cada deploy é um ambiente isolado
- Variáveis de ambiente isoladas
- URLs de acesso diferentes
- Versões diferentes da aplicação

<!-- slide vertical=true -->

### Visualizando

![](images/multiple-environments.png)

<!-- slide vertical=true -->

# [🏁 Checkpoint 🏁](https://wall.sli.do/event/wr4awgbh)

<!-- slide vertical=true -->

### Agora, a prática

De volta ao VSCode 😄

<!-- slide -->

# [🤔 Dúvidas? 🤔](https://wall.sli.do/event/wr4awgbh)
