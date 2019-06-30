class StrategyPersistence {
  constructor({ repositoryMongo }) {
    this.repositoryMongo = repositoryMongo;
  }

  orm(orm = '') {
    this.orm = orm;
    return this;
  }

  repository(repo = '') {
    this.repo = repo;
    return this;
  }

  action(action = '') {
    this.action = action;
    return this;
  }

  async execute(data = {}) {
    switch (this.orm) {
      case 'mongo':
        return await this.repositoryMongo[this.repo][this.action](data);
    }
  }
}

module.exports = StrategyPersistence;
