const net = require('net');
const port = 2708;
const sockets = [];
let guestId = 0;

const disparo = (from, message) => {
  sockets.forEach((socket) => {
    if(socket.user === from) return;
    
    socket.write(message);
  });
}


const server = net.createServer((socket) => {
  guestId++;

  socket.user = `Guest ${guestId}`;
  sockets.push(socket);
  socket.write('Bem vindo ao chat!\n');

  disparo(socket.user, `${socket.user} entrou no chat ! \n`);


  socket.on('end', () => {
    sockets.splice(sockets.indexOf(socket), 1);
    const message = `${socket.user} deixou chat :'(`;
    disparo(socket.user, message);
  });

  socket.on('data', (data) => {
    const message = `${socket.user}> ${data.toString()}`
    disparo(socket.user, message);
  });

  socket.on('error', (error) => {
    console.log('Erro no socket: ', error.message);
  });


});


server.on('error', (error) => {
  console.log(`Erro no servidor: ${error.message}`)
});

server.listen(port, () => {
  console.log(`O servidor está escutando na porta ${port}`)
});