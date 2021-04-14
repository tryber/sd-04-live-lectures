const express = require('express');
const peopleModel = require('../models/peopleModel');
const router = express.Router();

router.get('/', async (req, res) => {
  const people = await peopleModel.getAll();
  res.json(people)
});

router.get('/:id', async (req, res) => {
  const person = await peopleModel.getById(req.params.id);

  if (!person) {
    return res.status(404).json({message: 'Pessoa não encontrada'});
  }

  res.status(200).json({person});
})

router.post('/', async (req, res) => {
  try {
    const { name, age } = req.body;

    const person = await peopleModel.add(name, age);

    res.status(200).json({message: 'Cadastrado com sucesso', person})
  } catch (_e) {
    console.log(_e.message);
    res.status(500).json({message: 'Erro ao cadastrar pessoa!'});
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    const result = await peopleModel.update(id, name, age);
    
    if (result) {
      const person = await peopleModel.getById(id);
      res.status(200).json({message: 'Atualizado com sucesso', person});
    } else {
      res.status(501).json({message: 'Registro não existe'});
    }
    
  } catch (_e) {
    console.log(_e.message);
    res.status(500).json({message: 'Erro ao atualizar pessoa!'});
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const result = await peopleModel.remove(req.params.id);

    if (result) {
      res.status(200).json({message: 'Removido com sucesso'});
    } else {
      res.status(501).json({message: 'Registro não existe'});
    }
  } catch (_e) {
    console.log(_e.message);
    res.status(500).json({message: 'Erro ao deletar pessoa!'});
  }
});

module.exports = router;