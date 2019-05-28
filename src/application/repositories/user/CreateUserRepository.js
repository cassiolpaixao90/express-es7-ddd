class CreateUserRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .db('ddd')
        .action('save')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserRepository;
