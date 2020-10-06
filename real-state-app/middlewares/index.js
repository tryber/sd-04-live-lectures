const { authMiddleware } = require('./auth');

module.exports = {
  auth: authMiddleware,
};
