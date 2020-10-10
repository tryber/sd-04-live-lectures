const connection = require('./connection');

const findById = async (id) => {
  try {
    const db = await connection();
    const stmt = 
      await db.getTable('games').select([]).where('id = :idBind').bind('idBind', id).execute();
    const row = await stmt.fetchOne();

    const [idGame, userId, userName, title] = row;
    return { idGame, userId, userName, title };
  } catch (error) {
    return null;
  }
};

const update = (id, userId, userName, title) => { };

module.exports = {
  findById,
  update,
}
