const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

class ProviderConnection {
  constructor({ environment }) {
    this.environment = environment;
    this.internalConnectionPool = {};
  }

  connect() {
    const database = this.environment.mongo.ddd;
    const opts = Object.assign(
      {},
      {
        useNewUrlParser: true
      },
      database.options
    );

    return new Promise((resolve, reject) => {
      if (!this.internalConnectionPool[database.uri]) {
        try {
          const conn = mongoose.createConnection(database.uri, opts);
          conn.on('open', () => {
            this.internalConnectionPool[database.uri] = conn;
            resolve(this.internalConnectionPool[database.uri]);
          });
          conn.on('error', err => console.error('MongoDB error: %s', err));
        } catch (err) {
          reject(err);
        }
      } else {
        return resolve(this.internalConnectionPool[database.uri]);
      }
    });
  }
}

module.exports = ProviderConnection;
