const express = require('express')
const bodyParser = require('body-parser');
const controllers = require('./controllers');

const app = express()
const port = 3000

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))

app.use('/products', controllers.products);

app.listen(port, () => console.log(`Example app listening on port port!`))