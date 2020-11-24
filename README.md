# 31.2 - Sequelize

O que vamos aprender?

* Como configurar o Sequelize
* O que são e como criar migrations?
* O que é um modelo?
* Como criar uma migration para adicionar uma nova coluna?
* Como criar seeds para alimentar o banco de dados?

## Criando projeto

```
npm i express mysql2 sequelize body-parser
npm i nodemon sequelize-cli -D
```

## Como configurar uma aplicação com Sequelize?

```
$ npx sequelize init
```

## Como criar uma migration?

```
$ npx sequelize migration:generate --name create-products-table
```

## Como executar/desfazer uma migration?

```bash
$ npx sequelize db:create # criar o banco de dados
$ npx sequelize db:migrate
$ npx sequelize db:migrate:undo
```

## Como criar um arquivo de seeds?

```
$ npx sequelize seed:generate --name create-default-product
```

## Executar/desfazer seeds
```
npx sequelize db:seed:all
$ npx sequelize db:seed:undo:all
```

