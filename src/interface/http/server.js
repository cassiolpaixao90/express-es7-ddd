const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const compress = require('compression');
const { scopePerRequest, loadControllers } = require('awilix-express');

const { logger } = require('../../core/utils');
const { configureContainer } = require('../../core/helpers/container');
// const { notFoundHandler } = require('../middleware/not-found');
// const { errorHandler } = require('../middleware/error-handler');
// const { registerContext } = require('../middleware/register-context');

exports.createServer = async () => {
  const app = express();

  const container = (app.container = configureContainer());

  app
    // .use(errorHandler)
    .use(compress())
    .use(cors())
    .use(bodyParser())
    .use(scopePerRequest(container))
    // .use(registerContext)
    .use(loadControllers('../routes/*.js', { cwd: __dirname }));
  // .use(notFoundHandler);

  const server = http.createServer(app);

  server.on('close', () => {
    logger.debug('Server closing, bye!');
  });

  logger.debug('Creating server...');
  logger.debug('Server created, ready to listen', { scope: 'startup' });
  return server;
};
