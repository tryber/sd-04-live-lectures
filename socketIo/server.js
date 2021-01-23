const http = require('http');
const express = require('express');
const socketIo = require('socket.io');
const path = require('path');
const faker = require('faker');

const app = express();
const httpServer = http.createServer(app);
const io = socketIo(httpServer);


httpServer.listen(3000, () => console.log('RUN SERVER 127.0.0.1:3000'));
