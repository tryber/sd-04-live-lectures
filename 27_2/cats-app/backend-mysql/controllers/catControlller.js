const Cats = require('../models/catModel');

const listCats = async (req, res) => {
  const cats = await Cats.getAll();
  res.render('catList', { cats, message:  null });
};

const catDetails = async (req, res) => {
  const { id } = req.params;

  const cat = await Cats.getCatById(id);

  if (!cat) {
    return res.render("notFound");
  }

  res.render("catDetails", { cat });
};


const newCat = async (req, res) => {
  const { name, age } = req.body;

  if (!Cats.isValid(name, age)) {
    return res
      .status(400)
      .render("catList", {
        message: "O nome ou idade digitados não são válidos",
      });
  }

  await Cats.add(name, age);

  res.render("success");
};

module.exports = {
  listCats,
  catDetails,
  newCat,
};