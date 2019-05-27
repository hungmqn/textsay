const middlewares = require('../../middlewares');
const BaseRouter = require('../base');
const { UserController } = require('../../controllers');

class UserRoutes extends BaseRouter {
  constructor() {
    super(UserController);
    this.router.put('/update/:id', [middlewares.authorize], this.updatePassword.bind(this));
  }

  async updatePassword(req, res) {
    try {
      req.body = Object.assign(req.body, {id: req.params.id});
      const result = await this.Controller.updatePassword(req.body);
      res.status(200).json(result);
    } catch (error) {
      this.onError(res, error);
    }
  }
}

module.exports = new UserRoutes(UserController).router;
