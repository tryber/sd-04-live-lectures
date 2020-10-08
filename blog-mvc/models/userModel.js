const connection = require('./connection');

// listar todos os usuários
const findAll = async () => {
  return connection()
    .then((db) => db.getTable("users").select(["id", "email", "first_name", "last_name"]).execute())
    .then((results) => results.fetchAll())
    .then((users) => users.map(([id, email, firstName, lastName]) => ({ id, email, firstName, lastName })));
};

// buscar usuário por id
const findById = (id) => { 
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

// buscar usuário por email
const findByEmail = (email) => { 
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

// inserir usuário
const add = (email, password,  firstName, lastName) => { 
  return connection()
    .then((db) => 
      db.getTable("users")
      .insert(["email", "password", "first_name", "last_name"])
      .values(email, password, firstName, lastName)
      .execute())
};

// atualizar usuário
const update = (id, email, password, firstName, lastName) => {
  return connection().then((db) =>
    db
      .getTable("users")
      .update()
      .set("email", email)
      .set("password", password)
      .set("first_name", firstName)
      .set("last_name", lastName)
      .where("id = :id")
      .bind("id", id)
      .execute()
  );
};

// deletar usuário
const remove = (id) => { 
  return connection().then((db) =>
    db
      .getTable("users")
      .delete()
      .where("id = :id")
      .bind("id", id)
      .execute()
  );
};

const isValid = (email) => {
  return typeof email && email === 'string' && email !== ''; 
}

module.exports = {
  findAll, findById, findByEmail, add, update, remove, isValid
}

