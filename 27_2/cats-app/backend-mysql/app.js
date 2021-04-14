const express = require("express");
const bodyParser = require("body-parser");
const catController = require("./controllers/catControlller");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/cats", catController.listCats);

app.get("/cats/:id", catController.catDetails);

app.post("/cats", catController.newCat);

app.listen(3001, () => {
  console.log("Ouvindo a porta 3001!");
});