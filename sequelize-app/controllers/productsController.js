const { Router } = require('express');
const { Product } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, description, price } = req.body;

  const newProduct = await Product.create({name, description, price});

  res.status(200).json({message: 'Cadastrado com sucesoo', product: newProduct});
});

router.delete('/:id', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id
    }
  });

  res.status(200).json({message: 'Produto removido com sucesso!'})
});

router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;

  Product.update(
    { name, description, price },
    {
      where: { id: req.params.id }
    }
  );

  res.status(200).json({message: 'Produto atualizado com sucesso!'})
})


module.exports = router;
