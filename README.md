# Deploy utilizando Heroku e o MongoDB Atlas

Este repositório armazena os códigos, scripts e passo a passo fornecidos durante as palestras ao vivo pelos especialistas da Trybe.

## Começando MongoDB Atlas

1 - Acessar o [site](https://account.mongodb.com/account/login?signedOut=true) oficial do MongoDB Atlas, faça o login ou crie uma conta nova.
![Tela de Login](/images/1.png)

2 - Após responder algumas coisas (apenas no primeiro acesso), ir em **Build a Cluster**.
![Iniciando um cluster](/images/2.png)

3 - Escolha a opção **Free**. (Apenas um cluster pode ser criado gratuitamente)
![Planos do MongoDB Atlas](/images/3.png)

4 - Se quiser altere alguma coisa e depois ir em **Create a Cluster**. (Isso pode demorar alguns minutos)
![Criando um cluster](/images/4.png)

5- Após a criação do cluster, devemos liberar o acesso a ele, indo em **Network Acess**. (Menu lateral esquerdo)
![Liberando acesso](/images/5.png)

6 - Aqui vamos liberar acesso a um IP específico ou todos IP's, indo em **Add IP Address**.
![Inserindo um IP](/images/6.png)

7- Podemos liberar nosso IP atual, ou uma lista de IP's, ou liberar qualquer acesso indo em **Allow Access From anywhere**.
![Liberando todo os acessos](/images/7.png)

8 - Criando *usuário* e *senha* para nossa base de dados, ir em  **Database Access** (menu lateral esquerdo), depois ir  **add New Database User**.
![Criando usuário e senha](/images/8.png)

9 - Escolha o método autenticação, depois **Add User**.
![Método de autenticação](/images/9.png)

10 - Para obter a string de conexão, ir em **Connect**, depois ir em **Connect your application**
![Método de autenticação](/images/10.png)

## Criando Nossa API Node.js

1 - Crie um diretório novo no local da sua preferência.
```sh
  mkdir apiHerokuMongoAtlas
```
2 - Entrar no diretório.
```sh
  cd apiHerokuMongoAtlas
```
3 - Inicializar o packge.json.
```sh
  npm init
  //ou
  npm init -y
```
4 - Construindo a API...
```sh
  //Bora codar
```
5 - Tornando o diretório **apiHerokuMongoAtlas** um repositório git.
```sh
 touch .gitignore //adicionar a pasta node_modules
```
```sh
 git init
```
```sh
 git status
```

6 - Preparando o repositório para o Heroku
```sh
 heroku -v
```
```sh
 heroku create
```
```sh
 git remote -v
```

7 - Publicando nosso app
```sh
 git add .
```
```sh
 git commit -m "publicando nosso app"
```
```sh
 git push heroku master
```