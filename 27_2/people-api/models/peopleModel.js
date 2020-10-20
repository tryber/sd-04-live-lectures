const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getAll = async () => 
  connection().then((db) => db.collection('people').find().toArray())

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return null;
  return await connection().then((db) => db.collection('people').findOne(ObjectId(id)))
}

const add = async (name, age) => {
  const result = await connection().then((db) => db.collection('people').insertOne({ name, age }));
  return result.ops[0];
}

const update = async (id, name, age) => {
  if (!(await getById(id))) return false;

  await connection().then((db) => db.collection('people').updateOne({ _id: ObjectId(id)}, { $set: {name, age } }));
  
  return true;
}

const remove = async (id) => {
  if (!(await getById(id))) return false;

  await connection().then((db) => db.collection('people').deleteOne({ _id: ObjectId(id)}));
  
  return true;
}
  
  

module.exports = { 
  getAll,
  getById,
  add,
  update,
  remove
}