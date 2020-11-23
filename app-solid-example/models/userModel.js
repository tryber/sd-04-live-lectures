const connection = require('./connection');


// const validateEmail = (email) =>  {
//   const emailRegex = /\S+@\S+\.\S+/;
//   return emailRegex.test(email);
// }

// const validatePassword = (password) =>  {
//   const passwordRegex = /^\d+$/;
//   return passwordRegex.test(password);
// }

const create = async (username, email, password, role) =>  {
  const db = await connection();
  const result = await db
    .getTable('users')
    .insert(['username', 'email', 'password', 'role'])
    .values(username, email, password, role)
    .execute();

  const id = result.insertId;
  
  return { id, username, email, password, role }
}

module.exports =  {
  create
};