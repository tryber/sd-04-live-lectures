const express = require('express');
const bodyParser = require("body-parser");
const BooksController = require('./controllers/booksController');

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', BooksController.index);
app.get("/books/add", BooksController.add);
app.post("/books", BooksController.create);
app.get("/books/:id", BooksController.show);

app.listen(3000, () => {
  console.log("Servidor está ouvindo na porta 3000");
});