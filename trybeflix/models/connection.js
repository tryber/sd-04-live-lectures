const mongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'trybeflix';

const connection = async () => {
  return mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => connection.db(DB_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;