const connection = require('./connection');

// listar todos os usuários
const findAll = async () => {
  return connection()
    .then((db) => db.getTable("users").select(["id", "email", "first_name", "last_name"]).execute())
    .then((results) => results.fetchAll())
    .then((users) => users.map(([id, email, firstName, lastName]) => ({ id, email, firstName, lastName })));
};

// buscar usuário por id
const findById = () => { };

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

module.exports = {
  findAll, findById, findByEmail, add, update, remove
}

