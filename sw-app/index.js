const express = require('express');
const app = express();
const port = 3001;
const PeopleModel = require('./models/PeopleModel');

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (req, res) => {
  const people = await PeopleModel.getPeople();

  res.render('people', { people })
});

app.listen(port, () => console.log(`Example app listening on port port!`));