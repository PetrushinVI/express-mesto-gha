const jwt = require('jsonwebtoken');
const AuthError = require('../errors/auth');

const Unauthorized = (req, res, next) => next(new AuthError('Необходима авторизация'));

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;
  try {
    payload = jwt.verify(token, 'secret-key');
  } catch (err) {
    return Unauthorized(req, res, next);
  }
  req.user = payload;
  return next();
};

module.exports = auth;
