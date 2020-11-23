const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  
  const passwordRegex = /^\d+$/; /* Senha pode ter apenas números */
  const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  const isPasswordRegex = passwordRegex.test(password);
  const isEmailValid = emailRegex.test(email);

  if (isEmailValid && isPasswordRegex) {
    await User.create(username, email, password, role);
    res.status(200).send({
      message: 'Usuário criado com sucesso!',
    });
  } else {
    res.status(400).send({
      message: 'Dados inválidos.',
    });
  }
};