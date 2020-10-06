const connection = require("./connection");

const findAll = async () =>
  connection()
    .then((db) => db.getTable("books").select(["id", "title", "author"]).execute())
    .then((results) => results.fetchAll())
    .then((books) => books.map(([id, title, author]) => ({ id, title, author })));

const isValid = (title, author) => {
  return title && author;
};

const create = async (title, author) =>
  connection().then((db) =>
    db
      .getTable("books")
      .insert(["title", "author"])
      .values(title, author)
      .execute()
  );

const find = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable("books")
        .select(["title", "author"])
        .where("id = :id")
        .bind("id", id)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((books) => books[0].reduce((title, author) => ({ title, author })));

module.exports = { 
  findAll,
  create,
  isValid,
  find
}
