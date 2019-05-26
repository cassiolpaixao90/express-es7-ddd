const User = require('src/domain/entities/users/User');

class CreateUserCase {
  constructor({ createUserRepository }) {
    this.createUserRepository = createUserRepository;
  }

  async execute(data) {
    try {
      const user = new User(data);
      await this.createUserRepository.execute(user);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserCase;
