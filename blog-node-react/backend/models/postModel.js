const connection = require('./connection');

const getAll = async () => {
  return await connection()
    .then((db) => db.getTable("posts").select([]).execute())
    .then((results) => results.fetchAll())
    .then((posts) => posts.map(([id, title]) => ({ id, title })));
}

const getPostById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable("posts")
        .select([])
        .where("id = :id")
        .bind("id", id)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((posts) => posts.map(([id, title, body]) => ({id, title, body}))[0]);

const add = (title, body) =>
  connection().then((db) =>
    db.getTable("posts").insert(["title", "body"]).values(title, body).execute());



module.exports = {
  getAll,
  getPostById,
  add
}