const express = require("express");
const bodyParser = require("body-parser");

const CatsController = require("./controllers/catsController");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/cats", CatsController.index);

app.post("/cats", CatsController.create);

app.get("/cats/:id", CatsController.show);

app.listen(3002, () => {
  console.log("Ouvindo a porta 3002!");
});

