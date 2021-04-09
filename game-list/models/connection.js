const mysqlx = require('@mysql/xdevapi');
require('dotenv/config');

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
};


let schema;
const connection = () => (
  schema
    ? Promise.resolve(schema)
    : mysqlx
      .getSession(config)
      .then((session) => {
        schema = session.getSchema('game_mvc');
        return schema;
      })
      .catch((err) => {
        console.error(err);
        process.exit(1);
      })
);
module.exports = connection;
