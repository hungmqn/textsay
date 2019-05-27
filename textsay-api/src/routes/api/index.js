const express = require('express');
const user = require('./user');

class Api {
  constructor() {
    this.router = express.Router();
    this.router.use('/user', user);
  }
}

module.exports = new Api().router;