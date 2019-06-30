class UpdateUserRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .repository('user')
        .action('update')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UpdateUserRepository;
