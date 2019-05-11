import cors from 'cors';
import expressValidator from 'express-validator';

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
  app.use(expressValidator());
  app.use(express.static('public'));
  app.use(scopePerRequest(context));
  app.use(loadControllers('modules/**/router.js', { cwd: __dirname }));
  app.get('*', (req, res, next) => {
    next(new errors.NotFoundError());
  });
  app.use(partialRight(errorHandler, [logger, environment]));

  return {
    app,
    start: () =>
      new Promise((resolve, reject) => {
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
