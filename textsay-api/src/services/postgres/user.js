const { Sequelize, sequelize } = require('./sq');

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  role: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  created_at: {
    type: 'TIMESTAMP',
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: 'TIMESTAMP',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: true,
  underscored: true,
  hooks: {
    beforeCreate(user, options) {
      const crypto = require('crypto');
      let hash = crypto.createHmac('sha512', user.username);
      
      hash.update(user.password);
      user.password = hash.digest('hex');
    },
  },
});

User.associate = function(models) {
  // associations can be defined here
};


module.exports = User;