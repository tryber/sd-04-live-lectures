const UserModel = require('../models/userModel');

const getUser = async (req) => { 
  const userId = req.params.id; //localhost:porta/url/:id

  const user = await UserModel.findById(userId);
  if(!user) return null;
  
  return user;
};

const authMid = async (req, res, next) => { 
  const user = await getUser(req);

  if(!user) return res.render('error') //ejs

  const [id, email, password, name, last] = user;
  const obj = { id, email, password, name, last };
  req.user = obj;
  
  return next();
};

module.exports = { authMid };
