const express = require('express')
const multer = require('multer');

const basicUpload = require('./basicUpload');
const customUpload = require('./customUpload');
const multiUpload = require('./multiUpload');


const app = express()
const port = 3001

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/uploads'));

app.post('/upload/simples', basicUpload);
app.post('/upload/custom', customUpload);
app.post('/upload/multi', multiUpload);

app.get('/form', (req, res) => {
  res.render('form');
})


app.listen(port, () => console.log(`Example app listening on port port!`))