import { createContainer, asValue, asFunction } from 'awilix';

const app = require('./application');
const server = require('./interfaces/http/server');
const router = require('./interfaces/http/router');
const environment = require('./infrastructure/environments')
const config = require('../config');
const logger = require('./infrastructure/logging/logging');
// const database = require('./infrastructure/database');
// const repository = require('./infrastructure/repositories');

const appModule = createContainer();

// SYSTEM
appModule.register({
  app: asFunction(app).singleton(),
  server: asFunction(server).singleton(),
  router: asFunction(router).singleton(),
  environment: asFunction(environment).singleton(),
  // logging: asFunction(logging).singleton(),
  // database: asFunction(database).singleton(),
  config: asValue(config),
  // repository: asFunction(repository).singleton()
});

module.exports = appModule;
