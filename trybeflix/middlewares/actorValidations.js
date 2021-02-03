const actorModel = require('../models/actorModel');

const buildResponse = (code, message) => {
  return { err: { code, message } }
}

const validatePresenceOfName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res.status(422).json(buildResponse('invalid_data', 'Nome não pode ser vazio!'))
  }

  next();
}

const validateLengthOfName = (req, res, next) => {
  const { name } = req.body;

  if (name.length < 5) {
    return res.status(422).json(buildResponse('invalid_data', 'Nome não pode ser menor que 5!'))
  }

  next();
}

const validateAgeIsNumber = (req, res, next) => {
  const { age } = req.body;

  if (!Number.isInteger(age)) {
    return res.status(422).json(buildResponse('invalid_data', 'Idade não é um número!'))
  }

  next();
}

const validateAgeRange = (req, res, next) => {
  const { age } = req.body;

  if (age < 1 || age > 100) {
    return res.status(422).json(buildResponse('invalid_data', 'Idade deve estar entre 1 e 100!'))
  }

  next();
}

const validateActorExistsByName = async (req, res, next) => {
  const { name } = req.body;

  const actor = await actorModel.findByName(name);

  if (actor) 
    return res.status(422).json(buildResponse('already_exists', 'Já existe um ator com esse nome!'))
  
  next();
}

const validateActorExistsById = async (req, res, next) => {
  const actor = await actorModel.findById(req.params.id);

  if (!actor) 
    return res.status(500).json(buildResponse('not_found', 'User not found!'));

  req.actor = actor;

  next();
}

module.exports = {
  buildResponse,
  validatePresenceOfName,
  validateLengthOfName,
  validateAgeIsNumber,
  validateAgeRange,
  validateActorExistsByName,
  validateActorExistsById,
}