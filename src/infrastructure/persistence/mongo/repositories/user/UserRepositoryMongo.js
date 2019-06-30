class UserRepository {
  constructor({ providerFactoryMongo }) {
    this.providerFactoryMongo = providerFactoryMongo;
  }

  async save(data) {
    try {
      const User = await this.providerFactoryMongo.getUserModel();
      const user = new User(data);
      return await user.save();
    } catch (e) {
      throw e;
    }
  }

  async getUser(user) {
    try {
      const User = await this.providerFactoryMongo.getUserModel();
      return await User.findOne({ _id: user._id });
    } catch (e) {
      throw e;
    }
  }

  async getAll() {
    try {
      const User = await this.providerFactoryMongo.getUserModel();
      return await User.find();
    } catch (e) {
      throw e;
    }
  }

  async update(user) {
    try {
      const User = await this.providerFactoryMongo.getUserModel();
      return await User.update({ _id: user._id });
    } catch (e) {
      throw e;
    }
  }

  async delete(user) {
    try {
      const User = await this.providerFactoryMongo.getUserModel();
      return await User.delete({ _id: user._id });
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserRepository;
