// Authorize by JWT Token
const { redis } = require('../services');

module.exports = (req, res, next) => {
  if (!req.header('authorization')) {
    throw 'Unauthorized';
  }
  const authorization = req.header('authorization').toLowerCase().replace('bearer', '').trim();
  const data = redis.get(authorization);
  
  if (!data) {
    throw 'Unauthorized';
  }
  next();
};