class UpdateUserRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .db('ddd')
        .action('update')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UpdateUserRepository;
