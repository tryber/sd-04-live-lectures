const connection = require('./connection');

const getAll = async () =>
  connection()
    .then((db) => db.getTable('buildings').select(['id', 'user_id', 'address']).execute())
    .then((results) => results.fetchAll())
    .then((buildings) => buildings.map(([id, user_id, address]) => ({ id, user_id, address })));


const getAllByUserId = async (userId) =>
  connection()
    .then((db) => 
        db.getTable('buildings')
        .select(['id', 'user_id', 'address'])
        .where('user_id = :user_id')
        .bind('user_id', userId)
        .execute())
    .then((results) => results.fetchAll())
    .then((buildings) => buildings.map(([id, user_id, address]) => ({ id, user_id, address })));

const getById = async (id) =>
  connection()
    .then((db) =>
      db
        .getTable('buildings')
        .select(['id', 'user_id', 'address'])
        .where('id=:id')
        .bind('id', id)
        .execute(),
    )
    .then((results) => results.fetchOne())
    .then(([id, userId, address]) => ({ id, userId, address }));


const isValid = (address, description) => {
  return typeof address === 'string' && typeof description === 'string'
  && address && description;
}

const create = async (address, description, userId) => {
   await connection()
    .then((db) => 
      db.getTable('buildings')
      .insert(['address', 'description', 'user_id', 'details'])
      .values(address, description, userId, '....')
      .execute()
    ); 
}

module.exports = {
  getAll,
  getAllByUserId,
  getById,
  isValid,
  create
};