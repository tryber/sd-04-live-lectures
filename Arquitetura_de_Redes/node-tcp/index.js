const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Olá, cliente!\n');

    socket.on('data', (data) => {
        console.log(data);
    });

    console.log('Server TCP ativo!!');

});

server.listen(8080);