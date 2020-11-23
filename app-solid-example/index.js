const express = require('express');
const bodyParser = require('body-parser');
const userController = require('./controllers/userController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/users', userController.createUser);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});