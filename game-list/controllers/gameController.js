const GameModel = require('../models/gameModel');

const updateViewForm = async (req, res) => {
  try {
    const game = await GameModel.findById(req.params.id);

    return res.render('editUser', { data: game });
  } catch (error) {
    return res.render('editUser', { data: null });
  }
};

const update = async(req, res) => {
  try {
    const { idGame, idUser, userName, game } = req.body;
    const result =
    await GameModel.update(idGame, idUser, userName, game.join());

    if (result) return res.redirect(`/updateForm/${idUser}`);

    return res.render('editUser', { data: null });
  } catch (error) {
    return res.render('editUser', { data: null });
  }
};

module.exports = {
  updateViewForm,
  update,
};
