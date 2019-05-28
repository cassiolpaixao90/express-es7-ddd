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

  async getUser(db, id) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      return await User.findOne({ _id: id });
    } catch (e) {
      throw e;
    }
  }

  async getAll(db) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      return await User.find();
    } catch (e) {
      throw e;
    }
  }

  async update(db, id) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      return await User.update({ _id: id });
    } catch (e) {
      throw e;
    }
  }

  async delete(db, id) {
    try {
      const User = await this.providerFactoryMongo.getUserModel(db);
      return await User.delete({ _id: id });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserRepository;
