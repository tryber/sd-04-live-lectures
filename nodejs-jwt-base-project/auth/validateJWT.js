const jwt = require('jsonwebtoken');

const secret = 'trybe2020';

const validateJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const data = jwt.verify(token, secret);

    console.log(data);
    
    if (!data) {
      return res.status(500).json({ message: 'token inválido!'})
    }
    
    next();
  } catch (err) {
    return res.status(500).json({ message: 'token inválido!'})
  }
  
}

module.exports = validateJWT;