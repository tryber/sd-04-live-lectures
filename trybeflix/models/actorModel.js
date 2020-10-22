const { Db, ObjectId } = require('mongodb');
const connectiton = require('./connection');

const findAll = async (id) => {
  return await connectiton().then((db) => db.collection('actors').find().toArray());
}

const findByName = async (name) => {
  return await connectiton().then((db) => db.collection('actors').findOne({ name }));
}

const findById = async (id) => {
  if (!ObjectId.isValid(id)) return null;

  return await connectiton().then((db) => db.collection('actors').findOne(ObjectId(id)));
}

const add = async (name, age) => {
  const result = await connectiton().then((db) => db.collection('actors').insertOne({ name, age }));
  return result.ops[0];
}

const update = async (id, name, age) => {
  await connectiton().then((db) => db.collection('actors').updateOne({ _id: ObjectId(id)}, { $set: { name, age } }))
}

const remove = async (id) => {
  await connectiton().then((db) => db.collection('actors').deleteOne({_id: ObjectId(id)}));
}


module.exports = { 
  findAll,
  findById,
  findByName,
  add,
  update,
  remove
}