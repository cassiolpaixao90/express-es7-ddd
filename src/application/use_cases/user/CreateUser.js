const User = require('src/domain/model/user');

class UserCase {
  constructor(userRepository, validator) {
    this.userRepository = userRepository;
    this.validator = validator;
  }

  async execute(name, age) {
    const user = new User(name, age);
    const errors = await this.validator(user);
    console.log('errors', errors);
    return this.userRepository.persist(user);
  }
}

module.exports = UserCase;
