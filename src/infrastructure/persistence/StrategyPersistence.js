class StrategyPersistence {
  constructor({ strategyOrm }) {
    this.strategyOrm = strategyOrm;
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
    const orm = this.strategyOrm[this.orm];
    const clazz = orm[this.name];
    const fn = { clazz };
    const data = await fn(body, this.db);
    return data;
  }
}

module.exports = StrategyPersistence;
