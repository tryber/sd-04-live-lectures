const GameModel = require('../models/gameModel');

const updateViewForm = async (req, res) => {
  try {
    const game = await GameModel.findById(req.params.id);

    return res.render('editUser', { data: game })
  } catch (error) {
    return res.render('editUser', { data: null })
  }
};

const update = (req, res) => {
  console.log(req.body)
};

module.exports = {
  updateViewForm,
  update,
};
