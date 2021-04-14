const mongoClient = require('mongodb').MongoClient;
const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';
const DATABASE_NAME = 'people_api';

const connection = () => {
  return mongoClient
    .connect(MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db(DATABASE_NAME))
    .catch((err) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;