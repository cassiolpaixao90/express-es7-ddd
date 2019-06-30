class ProviderMongoFactory {
  constructor({ environment, providerConnectionMongo, userSchemaMongo }) {
    this.environment = environment;
    this.providerConnectionMongo = providerConnectionMongo;
    this.userSchemaMongo = userSchemaMongo;
  }

  async getUserModel() {
    try {
      const conn = await this.providerConnectionMongo.connect();
      return conn.model('User', this.userSchemaMongo);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ProviderMongoFactory;
