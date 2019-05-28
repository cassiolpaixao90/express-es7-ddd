const User = require('src/domain/entities/users/User');
class CreateUserService {
  constructor() {}

  async execute(data) {
    try {
      const user = new User(data);
      return user;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserService;
