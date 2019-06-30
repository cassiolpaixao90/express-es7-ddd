class GetUserService {
  constructor({ getUserRepository }) {
    this.getUserRepository = getUserRepository;
  }

  async execute(user) {
    try {
      return await this.getUserRepository(user);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GetUserService;
