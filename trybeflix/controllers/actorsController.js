const express = require('express');
const actorValidations = require('../middlewares/actorValidations');
const actorModel = require('../models/actorModel');

const router = express.Router();


// POST /actors
router.post('/', 
  actorValidations.validatePresenceOfName,
  actorValidations.validateLengthOfName,
  actorValidations.validateAgeIsNumber,
  actorValidations.validateAgeRange,
  actorValidations.validateActorExistsByName,
  async (req, res) => { 
    try {
      const { name, age } = req.body;

      const actor = await actorModel.add(name, age);

      res.status(200).json(actor);
    } catch (_e) {
      res.status(501).json({message: 'Falha ao cadastrar ator!'});
    }
    
  } 
)

// GET /actors
router.get('/', async (req, res) => {
  const actors = await actorModel.findAll();

  res.status(200).json({ actors });
});

// GET /actors/:id
router.get('/:id',  
  actorValidations.validateActorExistsById,
  async (req, res) => {
    res.status(200).json(req.actor);
  });

// PUT /actors/:id
router.put('/:id', 
  actorValidations.validatePresenceOfName,
  actorValidations.validateLengthOfName,
  actorValidations.validateAgeIsNumber,
  actorValidations.validateAgeRange,
  actorValidations.validateActorExistsByName,
  actorValidations.validateActorExistsById,
  async (req, res) => { 
    const { name, age } = req.body;

    await actorModel.update(req.params.id, name, age);

    res.status(200).json(req.actor);
  } 
)

// DELETE /actors/:id
router.delete('/:id',
  actorValidations.validateActorExistsById,
  async (req, res) => {
    await actorModel.remove(req.params.id);

    res.status(200).json(req.actor);
  });


module.exports = router;