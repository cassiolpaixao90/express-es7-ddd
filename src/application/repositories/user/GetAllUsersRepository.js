class GetAllUsersRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .repository('user')
        .action('getAll')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GetAllUsersRepository;
