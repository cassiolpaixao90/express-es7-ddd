const { route, GET, POST } = require('awilix-express');
// import * as validator from './validator';
// import validatorHandler from '../../middlewares/validatorHandler';

@route('/api/users')
class UserController {
  constructor({ createUserCase }) {
    this.createUserCase = createUserCase;
  }

  @route('/:id')
  @GET()
  async getUser(req, res) {
    res.json({ mes: 'cassio' });
  }

  //   @before([validator.register, validatorHandler])
  @POST()
  async createUser(req, res, next) {
    try {
      const data = this.createUserCase.execute(req.body);
      res.json({ data: data });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = UserController;
