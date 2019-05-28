class CreateUserCase {
  constructor({ createUserService, createUserRepository }) {
    this.createUserService = createUserService;
    this.createUserRepository = createUserRepository;
  }

  async execute(data) {
    try {
      const user = await this.createUserService.execute(data);
      await this.createUserRepository.execute(user);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserCase;
