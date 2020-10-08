const userModel = require('./models/userModel');

const listUsers = async () => {
  const users = await userModel.findAll();

  users.forEach(user => {
    console.log(user);
  });
}


const addUser = async (email, password, firstName, lastName) => {
  await userModel.add(email, password, firstName, lastName);
};

const updateUser = async (id, email, password, firstName, lastName) => {
  await userModel.update(id, email, password, firstName, lastName);
};

const deleteUser = async (id) => {
  await userModel.remove(id);
};

addUser('cyrillo@betrybe.com', '123456789', 'cyrillo', 'love').then((_) => console.log("ok"));

listUsers();

updateUser(1, "renatosousafilho@betrybe.com", "mudar123", "Renato", "Filho").then((_) =>
  console.log("ok")
);

listUsers();

deleteUser(4);

listUsers();
