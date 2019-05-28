const cors = require('cors');
const expressValidator = require('express-validator');
const { loadControllers, scopePerRequest } = require('awilix-express');
const http = require('http');
const express = require('express');
const socket = require('socket.io');
const bodyParser = require('body-parser');
const compression = require('compression');
const chalk = require('chalk');

module.exports = ({
  environment,
  context,
  appErrors,
  loggingMiddleware,
  errorMiddleware,
  localeMiddleware
}) => {
  const app = express();
  app.use(
    cors({
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    })
  );
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());
  app.disable('x-powered-by');
  app.use(scopePerRequest(context));
  app.use(localeMiddleware.use());
  app.use(loggingMiddleware.use());
  app.use(loadControllers('presentation/**/controller.js', { cwd: __dirname }));
  app.use(expressValidator());
  app.get('*', (req, res, next) => {
    next(appErrors.notFound());
  });
  app.use(errorMiddleware.use());

  return {
    app,
    start: () =>
      new Promise((resolve, reject) => {
        const server = http.createServer(app);
        const io = socket(server);
        server.listen(environment.server.port);

        server.on('error', err => {
          reject(err);
        });

        server.on('listening', () => {
          console.log('\n');
          console.log(
            `Localhost: ${chalk.magenta(
              `${environment.server.host}:${environment.server.port}`
            )}`
          );
          resolve({ io, server });
        });
      })
  };
};
