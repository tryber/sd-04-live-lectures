const express = require('express');

const rescue = require('express-rescue');

const app = express();

const { authMiddleware, logMiddleware } = require('./middlewares');

const adminRouter = require('./admin');

app.use(logMiddleware);





app.get('/',
  (req, res) => {
    res.json({message: 'Hello world'});
  }
);

app.get("/foo", (req, res) => {
  res.json({ message: "Foo Out of Admin" });
});


app.get("/error", (req, res) => {
  throw new Error("Aconteceu um erro");
});

app.get('/erro', rescue(async (req, res) => {
  throw new Error("Aconteceu um erro");
}));

app.use((err, req, res, next) => {
  res.json({message: "Aconteceu um erro"});
});


app.use(authMiddleware);

app.use("/admin", adminRouter);

app.use("*", (req, res) => {
  res.status(404).json({message: "Rota não existe"});
})


app.listen(3000);