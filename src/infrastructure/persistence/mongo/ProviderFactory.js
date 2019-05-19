class ProviderFactory {
  constructor({environment, connectionProvider, userSchema}) {
    this.environment = environment;
    this.connectionProvider = connectionProvider;
    this.userSchema = userSchema;
  }

  async getUserModel(db = "") {
    try {
      const conn = await this.connectionProvider(this.environment.mongo[db].uri, this.environment.mongo[db].options);
      return conn.model('User', this.userSchema);
    } catch (err) {
      throw err;
    }
  }

}

module.exports = ProviderFactory;
