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
  const { name, age } = req.body;
  
  console.log(name, age);
  
  if (!isValid(name, age)) {
    return res.status(422).json({message: 'Nome ou idade errados!'})
  }
  
  await catModel.add(name, age);
  
  res.status(200).json({message: 'Cadastrado com sucesso!'})
}

const update = async(req, res) => {
  try {
    const { name, age } = req.body;
    await catModel.update(req.params.id, name, age);
    
    res.status(200).json({message: 'Atualizado com sucesso!'})
  } catch (_e) {
    res.status(500).json({message: 'Erro ao atualizar'});
  }
  
}

const remove = async(req, res) => {
  try {
    await catModel.remove(req.params.id);
    
    res.status(200).json({message: 'Deletado com sucesso!'})
  } catch (_e) {
    res.status(500).json({message: 'Erro ao deletar'});
  }
  
}

module.exports = {
  index,
  show,
  add,
  update,
  remove
}