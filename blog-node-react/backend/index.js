const express = require('express')
const bodyParser = require('body-parser');
const app = express()
var cors = require('cors')
const port = 3001

app.use(cors());
app.use(bodyParser.json());

const postsController = require('./controllers/postsController');

app.get('/posts', postsController.getAll);
app.get('/posts/:id', postsController.getById);
app.post('/posts', postsController.add);

app.listen(port, () => console.log(`Example app listening on port port!`))