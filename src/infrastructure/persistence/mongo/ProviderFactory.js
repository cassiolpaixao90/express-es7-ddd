class ProviderFactory {
  constructor({ environment, providerConnectionMongo, userSchemaMongo }) {
    this.environment = environment;
    this.providerConnectionMongo = providerConnectionMongo;
    this.userSchemaMongo = userSchemaMongo;
  }

  async getUserModel(db = '') {
    try {
      const conn = await this.providerConnectionMongo.start(
        this.environment.mongo[db].uri,
        this.environment.mongo[db].options
      );
      return conn.model('User', this.userSchemaMongo);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = ProviderFactory;
