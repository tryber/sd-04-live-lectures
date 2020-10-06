const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const middlewares = require('./middlewares');
const controllers = require('./controllers');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', './views');


app.get('/my-buildings', middlewares.auth(true), controllers.buildingController.userBuildings);
app.get('/buildings/add', middlewares.auth(true), controllers.buildingController.add);
app.post('/buildings', middlewares.auth(true), controllers.buildingController.create);

app.get('/', middlewares.auth(false), controllers.buildingController.index);
app.get('/buildings/:id', middlewares.auth(false), controllers.buildingController.show);






app.get('/login', controllers.userController.loginForm);
app.get('/logout', controllers.userController.logout);
app.post('/login', controllers.userController.login);



app.listen(3000, () => console.log('Listening on 3000'));
