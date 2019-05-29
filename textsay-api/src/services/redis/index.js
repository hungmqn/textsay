const redis = require('redis');

const redisClient = redis.createClient('redis://localhost:6379');

module.exports = redisClient;