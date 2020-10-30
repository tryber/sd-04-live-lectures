const jwt = require('jsonwebtoken');

const secret = require('./secret');

const validateToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = validateToken;