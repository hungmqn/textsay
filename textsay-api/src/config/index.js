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

const getSecretJWT = () => {
  switch (env) {
    case 'development':
      return process.env.AUTH_SECRET_JWT_DEV;
    case 'production':
      return process.env.AUTH_SECRET_JWT_PROD;
    default:
      return process.env.AUTH_SECRET_JWT_DEV;
  }
};

config['secretCryptoToken'] = getSecretCryptoToken();
config['secretJWT'] = getSecretJWT();

module.exports = config;