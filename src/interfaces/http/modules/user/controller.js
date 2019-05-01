import { route, GET, POST, before } from 'awilix-express';
import * as validator from './validator';
import validatorHandler from '../../middlewares/validatorHandler';

@route('/api/users')
class UserController {
  constructor() {}

  @route('/:id')
  @GET()
  async getUser(req, res) {
    res.json({ mes: 'cassio' });
  }

  @before([validator.register, validatorHandler])
  @POST()
  async createUser(req, res, next) {
    try {
    } catch (e) {
      next(e);
    }
  }
}

export default UserController;
