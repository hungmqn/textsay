const express = require('express');
const api = require('./api');
const authenticate = require('./authenticate');
const middlewares = require('../middlewares');

class IndexRoute {
  constructor() {
    this.router = express.Router();
    this.router.get('/', (req, res) => {
      res.send('API server running...');
    });
    this.router.use('/auth', authenticate);
    // this.router.use([middlewares.authorize]);
    this.router.use([middlewares.authorizeToken]); // Authorize using JWT Token
    this.router.use(`/api/${config.apiVersion}`, api);
  }
}

module.exports = new IndexRoute().router;
