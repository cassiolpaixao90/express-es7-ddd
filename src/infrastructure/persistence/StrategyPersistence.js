class StrategyPersistence {
  constructor({ strategy }) {
    this.strategy = strategy;
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

  in(name = '') {
    this.name = name;
    return this;
  }

  async execute(body = {}) {
    const action = this.strategy[this.name];
    const data = await action(body, this.db);
    return data;
  }
}

module.exports = StrategyPersistence;
