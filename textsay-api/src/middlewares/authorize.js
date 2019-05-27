module.exports = (req, res, next) => {
  if (!req.header('authorization')) {
    throw 'Unauthorized';
  }
  const authorization = req.header('authorization').toLowerCase().replace('bearer', '').trim();
  const crypto = require('crypto')
    , algorithm = 'aes-256-ctr'
    , password = config.secretCryptoToken;

  const decipher = crypto.createDecipher(algorithm, password);
  let data = decipher.update(authorization, 'hex', 'utf8');
  
  data += decipher.final('utf8');
  
  if (!data) {
    throw 'Unauthorized';
  }
  req.user = JSON.parse(data);
  let now = (new Date()).getTime();
  
  if (now > req.user.expired) {
    throw 'Unauthorized';
  }
  next();
};