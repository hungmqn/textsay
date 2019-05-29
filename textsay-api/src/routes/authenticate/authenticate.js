const express = require('express');
const { UserController } = require('../../controllers');

class AnthenticateRoutes {
  constructor() {
    this.router = express.Router();
    this.Controller = UserController;
    this.router.post('/login', this.login.bind(this));
    this.router.post('/signin', this.signin.bind(this));
    this.router.post('/register', this.register.bind(this));
  }

  async login(req, res) {
    try {
      const result = await this.Controller.login(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json(error.message);
    }
  }

  async signin(req, res) {
    try {
      const { authorization } = req.header;
      if (authorization) {
        throw new Error('Already signed in');
      } else {
        const result = await this.Controller.signin(req.body);
        res.status(200).json(result);
      }
    } catch (error) {
      res.status(401).json(error.message);
    }
  }

  async register(req, res) {
    try {
      const result = await this.Controller.register(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(401).json(error.message);
    }
  }
}

module.exports = new AnthenticateRoutes().router;
