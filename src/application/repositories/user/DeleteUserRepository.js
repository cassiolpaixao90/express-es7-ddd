class DeleteUserRepository {
  constructor({ strategyPersistence }) {
    this.strategyPersistence = strategyPersistence;
  }

  async execute(data) {
    try {
      await this.strategyPersistence
        .orm('mongo')
        .repository('user')
        .action('delete')
        .execute(data);
    } catch (e) {
      throw e;
    }
  }
}

module.exports = DeleteUserRepository;
