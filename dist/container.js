"use strict";

const {
  createContainer,
  asValue,
  asFunction,
  Lifetime
} = require('awilix');

const app = require("./application");

const server = require("./interfaces/http/server");

const socket = require("./interfaces/http/socket");

const errors = require("./interfaces/http/errors");

const errorHandler = require("./interfaces/http/middlewares/errorHandler");

const httpConstants = require("./interfaces/http/constants/httpConstants");

const logger = require("./infrastructure/logging/logger");

const environment = require("./infrastructure/environments"); // const database = require('./infrastructure/database');


const repository = require("./application/repositories/UserRepository");

const container = createContainer();
container.register({
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
}).loadModules(['src/domain/services/*.js'], {
  formatName: 'camelCase',
  resolverOptions: {
    lifetime: Lifetime.SCOPED
  }
});
module.exports = container;