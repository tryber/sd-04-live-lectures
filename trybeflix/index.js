const express = require('express')
const actorsController = require('./controllers/actorsController');
const moviesController = require('./controllers/moviesController');
const app = express()
const port = 3001

app.use(express.json());
app.use('/actors', actorsController);
app.use('/movies', moviesController)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port!` + port))