import { createContainer, asValue, asFunction, Lifetime, asClass } from 'awilix';

import app from './application';
import * as httpConstants from './interfaces/http/constants/httpConstants';

const server = require('./interfaces/http/server');
const socket = require('./interfaces/http/socket');
const errors = require('./interfaces/http/errors');
const errorHandler = require('./interfaces/http/middlewares/errorHandler');
const validatorHandler = require('./interfaces/http/middlewares/validatorHandler');

const logger = require('./infrastructure/logging/logger');
const environment = require('./infrastructure/environments');
// const database = require('./infrastructure/database');
const repository = require('./application/repositories/UserRepository');

const container = createContainer();

// SYSTEM
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
    validatorHandler: asValue(validatorHandler),
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
