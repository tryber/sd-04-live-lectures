const userModel = require('../models/userModel');

const SESSIONS = {};

const getUser = async (req) => {
  const { token = '' } = req.cookies || {};
  if (!token) return null;

  const userId = SESSIONS[token];
  if (!userId) return null;

  const user = await userModel.findById(userId);
  if (!user) return null;

  return user;
};

const authMiddleware = (required = true) => async (req, res, next) => {
  const user = await getUser(req);
  if (!user && required)
    return res.redirect(`/login?redirect=${encodeURIComponent(req.url)}`);

  if (!user && !required) return next();

  const { password, ...userData } = user;

  req.user = userData;

  return next();
};

module.exports = {
  SESSIONS,
  authMiddleware,
};
