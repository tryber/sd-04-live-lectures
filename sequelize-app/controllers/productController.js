const { Router } = require('express');
const { Product, User } = require('../models');

const router = Router();

router.get('/', async (req, res) => {
  const products = await Product.findAll();

  res.status(200).json(products);
});

// eager loading
router.get('/:id', async (req, res) => {
  const product = await Product.findByPk(req.params.id,
    { include: { model: User, as: 'user'}}
  );

  res.status(200).json(product);
});

// lazy loading
// router.get('/:id', async (req, res) => {
//   const product = await Product.findByPk(req.params.id)

//   const user = await product.getUser();

//   const { dataValues } = user;

//   res.status(200).json({ ...dataValues, user });
// });


router.post('/', async (req, res) => {
  const { name, description, price, userId } = req.body;

  const newProduct = await Product.create({name, description, price, UserId: userId });

  res.status(200).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  await Product.destroy({
    where: {
      id: req.params.id
    }
  });

  res.status(200).json({message: 'Produto excluído com sucesso'});
});

router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;
  await Product.update(
    { name, description, price },
    {
      where: { id: req.params.id }
    });

  res.status(200).json({message: 'Produto atualizado com sucesso'});
});



module.exports = router;