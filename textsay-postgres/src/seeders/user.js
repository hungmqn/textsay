'use strict';
let hashPassword = (username, password) => {
  const crypto = require('crypto')
    , salt = username;

  let hash = crypto.createHmac('sha512', salt);

  hash.update(password);
  return hash.digest('hex');
};

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user', [
      {
        username: 'sadmin',
        password: hashPassword('sadmin', '123456'),
        role: 1,
      },
      {
        username: 'usertest1',
        password: hashPassword('usertest1', '123456'),
        role: 2,
      }
    ], {
      force: true
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user', null, {});
  }
};