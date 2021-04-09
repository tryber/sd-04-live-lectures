const express = require('express');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares/auth');
const gameController = require('./controllers/gameController');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(`${__dirname}/public/`)); //pasta dos nossos arq .js e .css

app.set('view engine', 'ejs');
app.set('views', './views');

app.get(
  '/updateForm/:id', 
  middlewares.authMid, 
  gameController.updateViewForm
);

app.post(
  '/updateGame/:id', 
  gameController.update
);

app.listen(3000, () => console.log('Escutando !!!'));
