const Pokemon = require('../models/Pokemon.js');

const getPokemonById = async (req, res) => {
  try {
    const pokemon = await Pokemon.getById(req.params.id);

    if (!pokemon) {
      res.status(404);
      return res.json({ message: 'Pokemon não encontrado' });
    }

    res.status(200);
    res.json(pokemon);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getPokemonById
};