const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const { Router } = require('express');
const { partialRight } = require('ramda');

const controller = require('./utils/createController');
const httpLogger = require('./logging/httpLogger');
const errorHandler = require('./middlewares/errorHandler');

module.exports = ({ environment, logger }) => {
  const router = Router();

  if (environment.env === 'development') {
    router.use(statusMonitor());
  }

  if (environment.env !== 'test') {
    router.use(httpLogger(logger));
  }

  const apiRouter = Router();

  apiRouter
    .use(
      cors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization']
      })
    )
    .use(bodyParser.json())
    .use(compression());

  apiRouter.use('/', controller('index'));
  apiRouter.use('/user', controller('user').router);

  router.use('/api/', apiRouter);
  router.use(partialRight(errorHandler, [logger, environment]));

  return router;
};
