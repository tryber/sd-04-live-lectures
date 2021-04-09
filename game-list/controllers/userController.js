const UserModel = require('../models/userModel');

const index = (req, res) => {
  UserModel.findAll()
    .then(success => res.status(200).json({ data: success }))
    .catch(error => res.status(500).json({ data: error }))
};

const show = (req, res) => {
  UserModel.findById(req.params.id)
    .then(user => res.json({ data: user }))
    .catch(e => console.log(e))
};

const register = (req, res) => {
  const { email, password , firstName, lastName } = req.body

  if(!UserModel.isValidEmail(email))
    return res.status(400).json({ data: 'Dados errados' });
    
  UserModel.add(email, password , firstName, lastName)
    .then(success => res.status(200).json({ data: 'Cadastrado !' }))
}

module.exports = { index, show, register };
