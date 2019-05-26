class StrategyPersistence {
  constructor({ userRepositoryMongo }) {
    this.userRepositoryMongo = userRepositoryMongo;
  }

  orm(orm = '') {
    this.orm = orm;
    return this;
  }

  db(db = '') {
    this.db = db;
    return this;
  }

  action(action = '') {
    this.action = action;
    return this;
  }

  async execute(body = {}) {
    switch (this.orm) {
      case 'mongo':
        return await this.userRepositoryMongo[this.action](this.db, body);
    }
  }
}

module.exports = StrategyPersistence;
