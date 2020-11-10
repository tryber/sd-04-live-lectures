const mysqlx = require('@mysql/xdevapi');

// require('dotenv/config');

// const host = process.env.HOST || 'localhost';

const config = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 33060
};

let schema;

const connection = () => (schema
  ? Promise.resolve(schema)
  : mysqlx
    .getSession(config)
    .then(async (session) => {
      schema = await session.getSchema('blog-app');
      return schema;
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    }));

module.exports = connection;