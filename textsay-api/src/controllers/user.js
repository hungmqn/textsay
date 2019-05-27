const BaseController = require('./base')
  , { User } = require('../services/postgres')
  , utils = require('../services/utils')
  , crypto = require('crypto');

module.exports = class UserController extends BaseController {
  constructor() {
    super(User);
  }

  async login(params) {
    params.password = utils.hashPassword(params.username, params.password);
    const user = await this.getItem(params);
    if (!user) {
      throw new Error('Wrong username or password');
    }
    let now = (new Date()).getTime()
      , oneday = 1 * 24 * 60 * 60 * 1000 // timestamp for one day
      , result = Object.assign({ username: user.username }, { role: user.role }, { id: user.id }, { expired: now + oneday })
      , algorithm = 'aes-256-ctr'
      , password = config.secretCryptoToken;
      
    let cipher = crypto.createCipher(algorithm, password);
    let token = cipher.update(JSON.stringify(result), 'utf8', 'hex');

    token += cipher.final('hex');
    return {
      id: result.id,
      token: token
    };
  }

  async register(params) {
    return await this.create(params);
  }

  async updatePassword(params) {
    params.password = utils.hashPassword(params.username, params.password);
    let { id, username, password } = params;
    const user = await this.getItem({ id, username, password });
    if (!user) {
      throw new Error('Wrong username or password');
    }
    user.password = utils.hashPassword(username, params.new_password);
    return await user.save();
  }
};