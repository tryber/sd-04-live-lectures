const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.json({ message: "index" });
});

adminRouter.get("/foo", (req, res) => {
  res.json({ message: "foo" });
});

adminRouter.get("/bar", (req, res) => {
  res.json({ message: "bar" });
});


module.exports = adminRouter;