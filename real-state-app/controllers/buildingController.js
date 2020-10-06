const buildingModel = require('../models/buildingModel');

const index = async (req, res) => {
  const buildings = await buildingModel.getAll()
 
  res.render('buildings/index', { buildings, user: req.user });
}

const show = async (req, res) => {
  const building = await buildingModel.getById(req.params.id);

  res.render('buildings/show', { building });
};

const userBuildings = async (req, res) => {
  const { user } = req;

  const buildings = await buildingModel.getAllByUserId(user.id);

  res.render('buildings/user_buildings', { buildings });
}

const add = (req, res) => {
  res.render('buildings/add');
}

const create = async (req, res) => {
  const user = req.user;
  const { address, description } = req.body;

  if (!buildingModel.isValid(address, description)) {
    return res.status(501).render('buildings/add')
  }

  await buildingModel.create(address, description, user.id);

  res.redirect('/');
};

module.exports = {
  index,
  show,
  userBuildings,
  add,
  create
}