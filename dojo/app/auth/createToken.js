const jwt = require('jsonwebtoken');

const headers = {
  expiresIn: '30m',
  algorithm: 'HS256'
}

const secret = 'eb1b5ef31456b838b0cff134aae1cab9'

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers);

  return token;
}

module.exports = createToken;