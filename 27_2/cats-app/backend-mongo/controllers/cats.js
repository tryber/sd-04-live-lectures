const { isValid } = require("../models/catModel");
const catModel = require("../models/catModel");

const index = async (_req, res) => {
  const cats = await catModel.getAll();
  res.json(cats);
};

const show = async (req, res) => {
  const cat = await catModel.getById(req.params.id);
  res.json(cat);
};

const add = async (req, res) => {
  const { name, age, ownerId } = req.body;

  if (!isValid(name, age)) {
    return res.status(422).json({message: 'Nome ou idade inválidos!'})
  }

  await catModel.add(name, age);

  res.status(200).json({message: 'Cadastrado com sucesso!'})
}

module.exports = {
  index,
  show,
  add
}