import cors from 'cors';
import expressValidator from 'express-validator';

const { loadControllers, scopePerRequest } = require('awilix-express');
const http = require('http');
const express = require('express');
const socket = require('socket.io');

const bodyParser = require('body-parser');
const compression = require('compression');
const { partialRight } = require('ramda');

module.exports = ({ environment, logger, context, errorHandler, validatorHandler, errors }) => {
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
  app.use(expressValidator());
  app.use(express.static('public'));
  app.use(scopePerRequest(context));
  app.use(loadControllers('modules/**/controller.js', { cwd: __dirname }));
  app.use(partialRight(validatorHandler, [logger, errors]));
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
        server.listen(environment.server.port);
        server.on('error', err => {
          reject(err);
        });
        server.on('listening', () => {
          resolve({ io, server });
        });
      })
  };
};
