const logMiddleware = (req, res, next) => {
  console.log(`[${Date.now()}] - ${req.path}`);

  next();
}

module.exports = logMiddleware;