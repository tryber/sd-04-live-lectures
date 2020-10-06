const connection = require('./connection');

/* Substitua o código das funções abaixo para que ela,
de fato, realize a busca no banco de dados */

/**
 * Busca um usuário através do seu email e, se encontrado, retorna-o.
 * @param {string} email Email do usuário a ser encontrado
 */
const findByEmail = async (email) => {
  return connection()
    .then((db) =>
      db
        .getTable('users')
        .select(['id', 'email', 'password', 'first_name', 'last_name'])
        .where('email = :email_param')
        .bind('email_param', email)
        .execute(),
    )
    .then((results) => results.fetchOne())
    .then(([id, email, password, name, lastName]) => ({ id, email, password, name, lastName }));
};

/**
 * Busca um usuário através do seu ID
 * @param {string} id ID do usuário
 */
const findById = async (id) => {
  return connection()
    .then((db) =>
      db
        .getTable('users')
        .select(['id', 'email', 'password', 'first_name', 'last_name'])
        .where('id = :id_param')
        .bind('id_param', id)
        .execute(),
    )
    .then((results) => results.fetchOne())
    .then(([id, email, password, name, lastName]) => ({ id, email, password, name, lastName }));
};

module.exports = {
  findByEmail,
  findById,
};
