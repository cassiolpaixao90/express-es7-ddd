const { createContainer, asValue, asFunction, Lifetime } = require('awilix');

const app = require('src/application');
const server = require('src/interfaces/http/server');
const socket = require('src/interfaces/http/socket');
const errors = require('src/interfaces/http/errors');
const errorHandler = require('src/interfaces/http/middlewares/errorHandler');
const httpConstants = require('src/interfaces/http/constants/httpConstants');

const logger = require('src/infrastructure/logging/logger');
const environment = require('src/infrastructure/environments');
// const database = require('./infrastructure/database');
const repository = require('src/application/repositories/UserRepository');

const container = createContainer();

container
  .register({
    app: asFunction(app).singleton(),
    environment: asValue(environment),
    server: asFunction(server).singleton(),
    errors: asValue(errors),
    logger: asFunction(logger).singleton(),
    socket: asFunction(socket).singleton(),
    context: asValue(container),
    errorHandler: asValue(errorHandler),
    httpConstants: asValue(httpConstants),
    // database: asFunction(database).singleton(),
    repository: asFunction(repository).singleton()
  })
  .loadModules(['src/domain/services/*.js'], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SCOPED
    }
  });

module.exports = container;
