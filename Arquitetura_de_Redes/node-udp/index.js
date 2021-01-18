const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (message) => {
    console.log(message.toString());
});

console.log('Server UDP ativo!!');

socket.bind(8081);