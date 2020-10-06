const mysqlx = require("@mysql/xdevapi");

const connection = () => {
  return mysqlx
    .getSession({
      user: "root",
      password: "",
      host: "localhost",
      port: 33060,
    })
    .then((session) => {
      schema = session.getSchema("live_lecture_26_6");
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

const getAll = async () =>
  connection()
    .then((db) => db.getTable("cats").select(["name", "age"]).execute())
    .then((results) => results.fetchAll())
    .then((cats) => cats.map(([name, age]) => ({ name, age })));

const add = (name, age) =>
  connection().then((db) =>
    db.getTable("cats").insert(["name", "age"]).values(name, age).execute()
  );

const isValid = (name, age) =>
  typeof name === "string" &&
  name.length >= 3 &&
  name.length < 30 &&
  age &&
  age > 0;

const getCatById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable("cats")
        .select(["name", "age"])
        .where("id = :id")
        .bind("id", id)
        .execute()
    )
    .then((results) => results.fetchAll())
    .then((cats) => cats[0].reduce((name, age) => ({ name, age })));


module.exports = {
  getAll,
  isValid,
  add,
  getCatById
}