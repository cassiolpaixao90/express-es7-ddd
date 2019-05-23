class CreateUserRepository {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(data) {
    try {
      // await this.strategyPersistence
      //   .orm('mongo')
      //   .db('ddd')
      //   .action('save')
      //   .in('user')
      //   .execute(data);
      await this.userRepository.save(data, 'ddd');
    } catch (e) {
      throw e;
    }
  }
}

module.exports = CreateUserRepository;
