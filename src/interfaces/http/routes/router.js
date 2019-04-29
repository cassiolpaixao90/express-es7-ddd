// const { createController } = require('awilix-express');

// module.exports = ({ userController }) => {
//   // return createController(userController)
//   //   .prefix('/todos') // Prefix all endpoints with `/todo`// run authentication for all endpoints
//   //   .get('/:id', 'getTodo') // Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`
//   //   .post('', 'createTodo', {
//   //     // Maps `POST /todos` to theexport default `createTodo` function on the returned object from `API`
//   //     // Runs the bodyParser just for this endpoint
//   //   });
// };

const { Router } = require('express');
// const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const methodOverride = require('method-override');
const controller = require('../utils/createControllerRoutes');

module.exports = ({ environments, containerMiddleware }) => {
  const router = Router();

  // /* istanbul ignore if */
  // if (config.env === 'development') {
  //   router.use(statusMonitor());
  // }

  // /* istanbul ignore if */
  // if (config.env !== 'test') {
  //   router.use(loggerMiddleware);
  // }

  const apiRouter = Router();

  apiRouter.use('/users', controller('resources/user/UsersController'));

  router.use('/api', apiRouter);

  return router;
};
