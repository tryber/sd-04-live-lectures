const userModel = require('./models/userModel');

const listUsers = async () => {
  const users = await userModel.findAll();

  users.forEach(user => {
    console.log(user);
  });
}

const findUserById = async (id) => {
  const user = await userModel.findById(id);

  console.log(user);
}

const findUserByEmail = async (email) => {
  const user = await userModel.findByEmail(email);

  console.log(user);
}


const addUser = async (email, password, firstName, lastName) => {
  if (!userModel.isValid(email)) {
    console.log('E-mail não é válido!')
  };

  await userModel.add(email, password, firstName, lastName)
};

const updateUser = async (id, email, password, firstName, lastName) => {
  await userModel.update(id, email, password, firstName, lastName);
};

const deleteUser = async (id) => {
  await userModel.remove(id);
};

// listUsers();

// findUserById(1);

// findUserByEmail('renato.filho@betrybe.com');

// adicionando usuário inválido
// addUser('', '123456789', 'cyrillo', 'love').then((_) => console.log("ok"));

// adicionando usuário válido
// addUser('cyrillo@betrybe.com', '123456789', 'cyrillo', 'love').then((_) => console.log("ok"));


// listUsers();

// updateUser(1, "renatosousafilho@betrybe.com", "mudar123", "Renato", "Filho").then((_) =>
//   console.log("ok")
// );

// listUsers();



// deleteUser(4);

// listUsers();
