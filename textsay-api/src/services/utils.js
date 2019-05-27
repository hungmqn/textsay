module.exports = {
  hashPassword(username, password) {
    const crypto = require('crypto');
    let hash = crypto.createHmac('sha512', username);
    hash.update(password);
    return hash.digest('hex');
  }
};