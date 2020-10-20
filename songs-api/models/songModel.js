const connection = require('./connection');
const { ObjectId } = require('mongodb') 

const getAll = async () => {
  return connection().then((db) => db.collection('songs').find({}).toArray())
}

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return connection().then((db) => db.collection('songs').findOne(ObjectId(id)))
}

const add = async (data) => {
  connection().then((db) => db.collection('songs').insertOne(data))
}

module.exports = { getAll, getById, add };
