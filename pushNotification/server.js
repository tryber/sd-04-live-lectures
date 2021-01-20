const http = require('http');
const express = require('express');
const socket_io = require('socket.io');
const cors = require('cors');
const path = require('path')

const socketIoServer = http.createServer();
const io = socket_io(socketIoServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  }
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/client', express.static(path.join(__dirname, 'public')));

app.post('/notify', (req, res) => {
  // const { notification } = req.body;
  /*if(!notification) {
    return res.status(422).json({ message: 'Missing not notification !' });
  }*/
  
  const { title, msg } = req.body;

  if(!title || !msg) {
    return res.status(422).json({ message: 'Missing not title || msg !' });
  }

  // io.emit('notification', notification);
  io.emit('notification', { title, msg });
  res.status(200).json({ message: 'Notification emitted !' });
});

app.get('/ping', (_, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.listen(3000);
console.log('Express ouvindo na porta 3000');

socketIoServer.listen(4555);
console.log('Socket.io ouvindo na porta 4555');