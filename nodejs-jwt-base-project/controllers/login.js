const User = require('../models/user');
const createJWT = require('../auth/createJWT');
const createToken = require('../auth/createJWT');

module.exports = async (req, res) => {
  try {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

  const user = await User.findUser(username);

  if (!user || user.password !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

  const { password: _ , ...userWithoutPassword } = user;

  const token = createToken(userWithoutPassword); 

  return res.status(200).json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
