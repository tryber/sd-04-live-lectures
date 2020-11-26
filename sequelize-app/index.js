const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

const controllers = require('./controllers');

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.use('/products', controllers.products);
app.use('/users', controllers.users);
app.use('/selloffs', controllers.saleoffs);

app.listen(port, () => console.log(`Example app listening on port port!`))