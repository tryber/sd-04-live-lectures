const mysqlx = require('@mysql/xdevapi');

const connection = () => {
  return mysqlx
    .getSession({
      user: 'root',
      password: '',
      host: 'localhost',
      port: 33060,
      schema: 'solid_example',
    })
    .then((session) => {
      return session.getSchema('solid_example');
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;