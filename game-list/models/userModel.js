const connection = require('./connection');

// listar todos os usuários
const findAll = () => {
  return connection()
    .then((db) => db.sql('SELECT * FROM users').execute())
    .then((results) => results.fetchAll())
    .then((users) => users.map(([id, email, firstName, lastName]) => ({ id, email, firstName, lastName })));
};

// buscar usuário por id
const findById = (idInpt) => {
  return connection()
    .then((db) => db.getTable("users").select().where('id = :idBind').bind('idBind', idInpt).execute())
    .then(results => results.fetchOne())
    .then(user => user)
};

// buscar usuário por email
const findByEmail = () => { };

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

const isValidEmail = (email) => {
  if(email === '')
    return false;
  return true;
} 

module.exports = {
  findAll, findById, findByEmail, add, update, remove, isValidEmail
}

