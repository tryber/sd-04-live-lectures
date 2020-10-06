const Book = require("../models/bookModel");

const index = async (req, res) => {
  const { insertedBook } = req.query;

  const message = (insertedBook ) ? 'Cadastrado com sucesso!' : null;

  const books = await Book.findAll();

  res.render('books/index', { books, message });
}

const add = (_, res) => {
  res.render('books/add', { message: null });
}

const create = async (req, res) => {
  const { title, author } = req.body;

  if (!Book.isValid(title, author)) 
    return res.status(400).render('books/add', { message: 'Dados inválidos'});

  await Book.create(title, author);

  res.redirect('/books?insertedBook=true');
}

const show = async (req, res) => {
  const { id } = req.params;

  const book = await Book.find(id);

  res.render('books/show', { book });
}

module.exports = { 
  index,
  add,
  create,
  show
}