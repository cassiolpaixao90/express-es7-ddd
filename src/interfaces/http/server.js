const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const { scopePerRequest, loadControllers } = require('awilix-express');

const container = require('../../lib/container');

class Server {
  constructor({ environments, router }) {
    this.env = environments;

    // this.logging = logging;
    this.app = express();
    this.app.use(cors());
    this.app.use(methodOverride('X-HTTP-Method-Override'));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.disable('x-powered-by');
    this.app.use(router);
  }

  async start() {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      server.listen(this.env.web.port);
      server.on('error', err => {
        reject(err);
      });
      server.on('listening', () => {
        resolve();
      });
    });
  }
}

module.exports = Server;
