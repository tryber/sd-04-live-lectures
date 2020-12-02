const net = require('net');
const client = new net.Socket();
const stdin = process.openStdin();

client.connect(2708, '127.0.0.1', () => {
  stdin.addListener('data', (text) => {
    const message = text.toString().trim();

    client.write(message);
  });
});

client.on('data', (data) => {
  console.log('' + data);
});

client.on('close', () => {
  console.log('Você saiu da sala');
});
