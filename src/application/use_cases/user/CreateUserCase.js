const User = require('src/domain/entities/users/User');

class CreateUserCase {
  constructor({ createUserRepository }) {
    this.createUserRepository = createUserRepository;
  }

  async execute(data) {
    const user = new User(data);
    const { valid, errors } = user.validate();
    if (!valid) {
      console.log('errors', errors);
    }
    await this.createUserRepository.execute(user);
  }
}

module.exports = CreateUserCase;
