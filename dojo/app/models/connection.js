const mongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/dojo-middleware-jwt';
const DB_NAME = 'dojo-middleware-jwt';

const connection = async () =>
  mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connect) => connect.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
module.exports = connection;
