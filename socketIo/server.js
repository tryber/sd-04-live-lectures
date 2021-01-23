const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const faker = require('faker');

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer);

app.use('/', express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  // Criando nome aleatório e injetando dentro da instância do socket
  socket.user = { nickname: faker.name.firstName() };

  // Explicado a diferença durate a revisão 
  // Ainda precisa melhorar isto, não funciona para os casos do checklist no readme.md
  socket.emit('myNickname', socket.user.nickname)
  socket.broadcast.emit('newUser', socket.user.nickname);
  //io.emit('newUser', socket.user.nickname);

  socket.on('message', async ({ name, message }) => {
    io.emit('message', `${name}: ${message}`);
  });

});

httpServer.listen(3000, () => console.log('RUN SERVER 127.0.0.1:3000'));
