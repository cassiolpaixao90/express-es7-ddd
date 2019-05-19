const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.Promise = Promise;

class ProviderConnection {

  constructor({environment}) {
    this.environment = environment;
    this.internalConnectionPool = {};
  }

  start(database, options = {}) {
    const opts = Object.assign(
      {},
      {
        useNewUrlParser: true
      },
      options
    );
    return new Promise((resolve, reject) => {
      if (!this.internalConnectionPool[database]) {
        try {
          const conn = mongoose.createConnection(database, opts);
          conn.on('open', () => {
            this.internalConnectionPool[database] = conn;
            resolve(this.internalConnectionPool[database]);
          });
          conn.on('error', err => {
            console.error('MongoDB error: %s', err);
          });
        } catch (err) {
          reject(err);
        }
      } else {
        return resolve(this.internalConnectionPool[database]);
      }
    });
  }
}

module.exports = ProviderConnection;
