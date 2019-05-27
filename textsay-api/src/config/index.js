var config = require(`./${env}.json`);

const getSecretCryptoToken = () => {
  switch (env) {
    case 'development':
      return process.env.AUTH_SECRET_DEV;
    case 'production':
      return process.env.AUTH_SECRET_PROD;
    default:
      return process.env.AUTH_SECRET_DEV;
  }
};

config['secretCryptoToken'] = getSecretCryptoToken();

module.exports = config;