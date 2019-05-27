const express = require('express');
const authenticate = require('./authenticate');

class Authenticate {
  constructor() {
    this.router = express.Router();
    this.router.use('/', authenticate);
  }
}

module.exports = new Authenticate().router;