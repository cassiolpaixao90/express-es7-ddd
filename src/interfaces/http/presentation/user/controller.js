const { before, route, GET, POST } = require('awilix-express');
const { register } = require('src/interfaces/http/presentation/user/validator');
const validatorHandler = require('src/interfaces/http/middlewares/ValidatorMiddleware');

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

  @before([register, validatorHandler])
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
