class UserRepository {
  constructor({providerFactory}) {
    this.providerFactory = providerFactory;
  }

  async save(data, db) {
    try {
      const User = await this.providerFactory.getUserModel(db);
      return await User.save(data);
    } catch (e) {
      throw e;
    }
  }

  async getUser() {

  }

  async getAll() {

  }

  async update() {

  }

  async delete() {

  }

}

module.exports = UserRepository;
