const {
  createContainer,
  asValue,
  asFunction,
  asClass,
  Lifetime
} = require('awilix');

const app = require('src/app');
const server = require('src/interfaces/http/server');
const socket = require('src/interfaces/http/socket');
const errors = require('src/interfaces/http/errors/HttpErrors');
const logger = require('src/infrastructure/logging/logger');
const environment = require('src/common/environments');
const providerTranslator = require('src/infrastructure/translate/ProviderTranslator');
const localeTranslator = require('src/infrastructure/translate/LocaleTranslator');
const mongo = require('src/infrastructure/persistence/mongo/ProviderConnection');
// const database = require('mongo./infrastructure/database');

const container = createContainer();

container
  .register({
    app: asFunction(app).singleton(),
    environment: asValue(environment),
    server: asFunction(server).singleton(),
    errors: asValue(errors),
    logger: asFunction(logger).singleton(),
    socket: asFunction(socket).singleton(),
    mongo: asClass(mongo).singleton(),
    context: asValue(container),
    // errorHandler: asValue(errorHandler),

    localeTranslator: asClass(localeTranslator).singleton(),
    providerTranslator: asValue(providerTranslator)

    // database: asFunction(database).singleton(),
  })
  .loadModules(
    [
      'src/application/repositories/**/*.js',
      'src/application/use_cases/**/*.js',
      'src/domain/services/**/*.js',
      'src/interfaces/http/modules/**/*.js',
      [
        'src/interfaces/http/middlewares/*.js',
        {
          register: asClass,
          lifetime: Lifetime.SINGLETON
        }
      ]
    ],
    {
      formatName: 'camelCase',
      resolverOptions: {
        lifetime: Lifetime.SCOPED
      }
    }
  );

module.exports = container;
