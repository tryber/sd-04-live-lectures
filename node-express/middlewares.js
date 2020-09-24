const logMiddleware = (req, res, next) => {
  console.log("chegou uma nova request");

  next();
};

const authMiddleware = (req, res, next) => {
  console.log(req.headers.authorization);

  if (req.headers.authorization) return next();

  return res.status(500).json({ message: "Você não tem acesso a essa rota" });
};

module.exports = { logMiddleware, authMiddleware };