'use strict';

var _awilix = require('awilix');

var _application = require('./application');

var _application2 = _interopRequireDefault(_application);

var _httpConstants = require('./interfaces/http/constants/httpConstants');

var httpConstants = _interopRequireWildcard(_httpConstants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const server = require('./interfaces/http/server');
const socket = require('./interfaces/http/socket');
const errors = require('./interfaces/http/errors');
const errorHandler = require('./interfaces/http/middlewares/errorHandler');

const logger = require('./infrastructure/logging/logger');
const environment = require('./infrastructure/environments');
// const database = require('./infrastructure/database');
const repository = require('./application/repositories/UserRepository');

const container = (0, _awilix.createContainer)();

container.register({
  app: (0, _awilix.asFunction)(_application2.default).singleton(),
  environment: (0, _awilix.asValue)(environment),
  server: (0, _awilix.asFunction)(server).singleton(),
  errors: (0, _awilix.asValue)(errors),
  logger: (0, _awilix.asFunction)(logger).singleton(),
  socket: (0, _awilix.asFunction)(socket).singleton(),
  context: (0, _awilix.asValue)(container),
  errorHandler: (0, _awilix.asValue)(errorHandler),
  httpConstants: (0, _awilix.asValue)(httpConstants),
  // database: asFunction(database).singleton(),
  repository: (0, _awilix.asFunction)(repository).singleton()
}).loadModules(['src/domain/services/*.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: _awilix.Lifetime.CLASSIC
  }
});

module.exports = container;