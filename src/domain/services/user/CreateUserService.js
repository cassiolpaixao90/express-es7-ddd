class CreateUserService {
  constructor({ createUserRepository }) {
    this.createUserRepository = createUserRepository;
  }

  async execute(user) {
    try {
      if (!user) {
        throw new Error('err');
      }
      await this.createUserRepository(user);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserService;
