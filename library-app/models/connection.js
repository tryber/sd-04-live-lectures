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
      schema = session.getSchema("library");
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
