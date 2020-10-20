const express = require('express')
const bodyParser = require('body-parser')
const songsController = require('./controllers/songController');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.get('/songs', songsController.listSongs);
app.get('/songs/:id', songsController.songDetails);
app.post('/songs', songsController.addSong);
app.listen(port, () => console.log(`Example app listening on port port!`))