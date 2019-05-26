class UserRepository {
  constructor({ providerFactoryMongo }) {
    this.providerFactoryMongo = providerFactoryMongo;
  }
  async save(db, data) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      const user = new User(data);
      return await user.save();
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
