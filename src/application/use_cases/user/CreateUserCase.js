class CreateUserCase {
  constructor({ createUserService, getUserService }) {
    this.createUserService = createUserService;
    this.getUserService = getUserService;
  }

  async execute(data) {
    try {
      const user = await this.getUserService.execute(data);
      await this.createUserService.execute(user);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserCase;
