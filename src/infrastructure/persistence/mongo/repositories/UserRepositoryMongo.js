class UserRepository {
  constructor({ providerFactoryMongo }) {
    this.providerFactoryMongo = providerFactoryMongo;
  }
  async save(db, data) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      return await User.save(data);
    } catch (e) {
      throw e;
    }
  }

  async getUser() {}

  async getAll() {}

  async update() {}

  async delete() {}
}

module.exports = UserRepository;
