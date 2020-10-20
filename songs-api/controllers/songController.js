const SongService = require('../services/songService');

const listSongs = async (req, res) => {
  const songs = await SongService.getAll();

  res.status(200).json(songs);
}

const songDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await SongService.getById(id);

    if (!song) {
      return res.status(404).json({message: 'Música não encontrada'})
    }

    res.status(200).json(song);
  } catch (_e) {
    return res.status(500).json({message: 'Erro inesperado!'})
  }
}


const addSong = async (req, res) => {
  try {
    const { artist, song } = req.body;

    await SongService.add(artist, song);

    res.status(200).json({message: 'Música adicionada com sucesso'})
  } catch (_e) {
    return res.status(500).json({message: 'Erro inesperado!'})
  }
}

module.exports = {
  listSongs,
  songDetails,
  addSong
}