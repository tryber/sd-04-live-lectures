# 32.2 - Socket.io

O **socket.io** é uma biblioteca JavaScript para aplicativos da web em tempo real. A lib é usada por inúmeras empresas e pessoas 
desenvolvedoras.

* Mensagens instantâneas;
* Análise e monitoramento em tempo real;
* Streaming e colaboração de documentos;

### O que vamos aprender hoje?

* Utilizar o socket.io;
* Eventos personalizados no socket.io;
* Enviar objetos através de eventos do socket.io;
* Importar a lib do socket.io no front-end através do próprio server do socket.io;
* Utilizar sockets para criar uma API de *push notifications*;

## Socket.io

Na aula de hoje utilizaremos sockets para criar uma API de *push notifications*, com interface gráfica !

A necessidade de termos um sistema de *push notifications* é a que se imagina. Todos nós utilizamos WhatsApp, Instagram ou algum aplicativo que tem como funcionalidade enviar *push notifications*.

O nosso serviço de *push notification* irá funcionar em conjunto com uma *API Express*. Alguns exemplos de *push notifications* incluem:

* Cupons de desconto do ifood, rappi, dentre outros;
* Notificações de jogos de celular avisando sobre atualizações;
* Spotify avisando que novas músicas de um/uma artista "x" foram lançadas;

### Particulariedades do Socket.io

* Socket.io não é uma implementação do WebSocket;
* Socket.io usa o WebSocket como transporte (quando possível);
* Um cliente WebSocket não pode se conectar a um servidor socket.io (vice-versa);
* Estruturas parecidas;
* Socket.io cria um servidor para nós, assim como o Express;
* Ao invés de rotas, temos eventos (daqui se faz a comunicação);

## Push Notifications (Bora codar)

Vamos começar iniciando um projeto Node e instalando as dependências com os seguintes comandos:
```
$ npm init -y
```
```
npm install express socket.io cors
```
```
npm install nodemon -D
```

Em seguinda, vamos criar dois arquivos, um para ser o **servidor** e o outro para ser o **cliente**:
```
$ touch server.js
```
```
$ touch index.html
```

> server.js

```
const http = require('http');
const express = require('express');
const socket_io = require('socket.io');

const socketIoServer = http.createServer();
const io = socket_io(socketIoServer);

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.listen(3000);
console.log('Express ouvindo na porta 3000');

socketIoServer.listen(4555);
console.log('Socket.io ouvindo na porta 4555');
```

Vamos iniciar o nosso server e verificar se está tudo certo com nosso script até então:

```
// Não esqueça de alterar no package.json
$ npm start 
```

> client.html
```
<!DOCTYPE html>
<html>
  <head>
    <script src="http://localhost:4555/socket.io/socket.io.js"></script>
    <script>
      const socket = io('http://localhost:4555');

      socket.on('notification', (data) => {
        document.getElementById('mensagem').innerHTML = data;
      });
    </script>
  </head>
  <body>
    <div id="mensagem"></div>
  </body>
</html>
```

### Desafios
- [ ] Criar uma rota para notificar;
- [ ] Implementar o client;
- [ ] Enviar Objeto;