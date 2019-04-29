import { createContainer, asValue, asFunction } from 'awilix';

const app = require('./application');
const server = require('./interfaces/http/server');
const router = require('./interfaces/http/router');
const errors = require('./interfaces/http/errors');

const environment = require('./infrastructure/environments');
const logger = require('./infrastructure/logging/logger');
// const database = require('./infrastructure/database');
// const repository = require('./infrastructure/repositories');

const appModule = createContainer();

// SYSTEM
appModule.register({
  app: asFunction(app).singleton(),
  environment: asValue(environment),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  errors: asFunction(errors).singleton(),
  logging: asFunction(logger).singleton(),
  // database: asFunction(database).singleton(),
  config: asValue(config)
  // repository: asFunction(repository).singleton()
});

module.exports = appModule;
