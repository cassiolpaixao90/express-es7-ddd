'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { loadControllers, scopePerRequest } = require('awilix-express');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const bodyParser = require('body-parser');
const compression = require('compression');
const { partialRight } = require('ramda');

module.exports = ({ environment, logger, context, errorHandler, errors, userService }) => {
  const app = express();

  console.log('userService', userService);

  app.use((0, _cors2.default)({
    origin: ['*'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.disable('x-powered-by');
  app.use((0, _expressValidator2.default)());
  app.use(express.static('public'));
  app.use(scopePerRequest(context));
  app.use(loadControllers('modules/**/router.js', { cwd: __dirname }));
  app.get('*', (req, res, next) => {
    next(new errors.NotFoundError());
  });
  app.use(partialRight(errorHandler, [logger, environment]));

  return {
    app,
    start: () => new _promise2.default((resolve, reject) => {
      const server = http.createServer(app);
      const io = socket(server);
      server.listen(environment.server.port, () => {
        resolve({ io, server });
      });

      server.on('error', err => {
        reject(err);
      });

      server.on('listening', () => {
        resolve({ io, server });
      });
    })
  };
};