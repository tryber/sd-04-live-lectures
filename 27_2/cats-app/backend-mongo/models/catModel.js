const connection = require("./connection");
const { ObjectId } = require('mongodb');

const getAll = async () =>
  connection().then((db) => db.collection('cats').find().toArray());

const getById = async (id) => 
  connection().then((db) => db.collection('cats').findOne(ObjectId(id)));

const add = async(name, age, ownerId) => 
  connection().then((db) => db.collection('cats').insertOne({ name, age, ownerId}));

const isValid = (name, age) => 
  typeof name === 'string' && 
    name.length >= 3 &&
    name.length <= 30 &&
    age &&
    age > 0;


module.exports = { getAll, getById, isValid, add };