const express = require('express');
const cors = require("cors");
const catsController = require("./controllers/cats");

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.get('/cats', catsController.index);
app.get("/cats/:id", catsController.show);
app.post("/cats", catsController.add);


app.listen(port, () => console.log(`Example app listening on port port!`))