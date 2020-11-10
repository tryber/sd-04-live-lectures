const postModel = require('../models/postModel')

const getAll = async (req, res) => {
  const posts = await postModel.getAll();
  res.status(200).json(posts);
}

const getById = async (req, res) => {
  const post = await postModel.getPostById(req.params.id);

  if (!post) {
    res.status(404).json({message: 'Post não encontrado'});
  }

  res.status(200).json(post);
}

const add = async (req, res) => {
  const { title, body } = req.body;

  if (!title) {
    return res.status(422).json({message: 'Título não pode ser vazio!'});
  }

  await postModel.add(title, body);

  res.status(200).json({message: 'Post criado com sucesso!'});
}

module.exports = {
  getAll,
  getById,
  add
}