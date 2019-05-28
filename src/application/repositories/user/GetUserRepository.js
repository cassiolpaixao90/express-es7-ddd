class GetUserRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .db('ddd')
        .action('getUser')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GetUserRepository;
