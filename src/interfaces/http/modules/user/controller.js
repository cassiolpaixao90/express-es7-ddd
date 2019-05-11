import { route, GET, POST, before } from 'awilix-express';
import * as validator from './validator';
import validatorHandler from '../../middlewares/validatorHandler';

@route('/api/users')
class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  @route('/:id')
  @GET()
  async getUser(req, res) {
    res.json({ mes: 'cassio' });
  }

  @before([validator.register, validatorHandler])
  @POST()
  async createUser(req, res, next) {
    try {
      const data = this.userService.execute(req.body);
      res.json({ data: data });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
