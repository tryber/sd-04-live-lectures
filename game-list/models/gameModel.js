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

const update = async (id, userId, userName, title) => {
  try {
    const db = await connection();
    const stmt = 
      await db
      .getTable('games')
      .update()
      .set('user_id', userId)
      .set('user_name', userName)
      .set('title', title)
      .where('id = :id')
      .bind('id', id)
      .execute()
   return stmt.getAffectedRowsCount();
  } catch (error) {
    return null;
  }
};

module.exports = {
  findById,
  update,
}
