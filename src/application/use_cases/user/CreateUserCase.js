const User = require('src/domain/entities/users/User');

class CreateUserCase {
  constructor({ createUserRepository }) {
    this.createUserRepository = createUserRepository;
  }

  async execute(data) {
    const user = new User(data);
    await this.createUserRepository.execute(user);
  }
}

module.exports = CreateUserCase;
