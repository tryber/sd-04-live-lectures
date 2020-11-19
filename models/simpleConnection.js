const mysqlx = require('@mysql/xdevapi');
require('dotenv').config();

const config = {
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.HOSTNAME,
  port: 33060,
  socketPath: '/var/run/mysqld/mysqld.sock',
  schema: 'SocialMedia',
};

let schema;

const simpleConnection = () => {
  if (schema) return Promise.resolve(schema);
  return mysqlx
    .getSession(config)
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = simpleConnection;
