const Song = require('../models/songModel');
const Artist = require('../models/artistModel');

const getAll = async () => {
  const songs = await Song.getAll();
  return songs;
}

const getById = async (id) => {
  const song = await Song.getById(id);
  return song;
}

const add = async (artist, song) => {
  const artistId = await Artist.add(artist);

  await Song.add({...song, artist_id: artistId});

  return true;
}

module.exports = {
  add,
  getById,
  getAll
}