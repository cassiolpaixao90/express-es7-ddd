import bodyParser from 'body-parser';
import { route, GET, POST, before } from 'awilix-express';

@before([bodyParser.json()])
@route('/api/users')
class UserController {
  constructor() {}

  @route('/:id')
  @GET()
  async getUser(req, res) {
    res.json({ mes: 'cassio' });
    // res.send(await this.userService.get(req.params.id));
  }

  @POST()
  async createUser(req, res) {
    // res.send(await this.userService.create(req.body));
  }
}

export default UserController;
