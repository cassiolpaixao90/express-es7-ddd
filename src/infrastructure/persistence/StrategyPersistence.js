class StrategyPersistence {

  constructor({}) {

  }

  orm(orm = "") {
    this.orm = orm;
    return this;
  }

  db(db = "") {
    this.db = db;
    return this;
  }

  action(action = "") {
    this.action = action;
    return this;
  }

  in(name = "") {
    this.name = name;
    return this;
  }

  async execute() {

  }
}

module.exports = StrategyPersistence;
