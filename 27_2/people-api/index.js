const express = require('express')
const bodyParser = require('body-parser');
const peopleController = require('./controllers/peopleController');
const app = express()
const port = 3000

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({}))
app.use('/people', peopleController);

app.listen(port, () => console.log(`Example app listening on port port!`))