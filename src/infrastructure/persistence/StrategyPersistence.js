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

  async execute(value = {}) {
    switch (this.orm) {
      case 'mongo':
        return await this.userRepositoryMongo[this.action](this.db, value);
    }
  }
}

module.exports = StrategyPersistence;
