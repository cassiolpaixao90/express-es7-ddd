const { createContainer, asClass, asFunction, asValue } = require('awilix')
const { scopePerRequest } = require('awilix-express')

const bootstrap = require('../module')
const environments = require('../lib/env')
const { userResource } = require('../interfaces/http/resources')
const { userService } = require('../service')
const server = require('../interfaces/http/server')
const router = require('../interfaces/http/router')

// const loggerMiddleware = require('./interfaces/http/logging/loggerMiddleware');
// const errorHandler = require('./interfaces/http/errors/errorHandler');
// const devErrorHandler = require('./interfaces/http/errors/devErrorHandler');
// const swaggerMiddleware = require('./interfaces/http/swagger/swaggerMiddleware');

// const logging = require('./infra/logging/logging');
// const SequelizeUsersRepository = require('./infra/user/SequelizeUsersRepository');
// const { database, User: UserModel } = require('./infra/database/models');

const container = createContainer()

// System
container
  .register({
    app: asClass(bootstrap).singleton(),
    server: asClass(server).singleton()
  })
  .register({
    router: asFunction(router).singleton()
    // logging: asFunction(logging).singleton()
  })
  .register({
    environments: asValue(environments)
  })

// Middlewares
container.register({
  containerMiddleware: asValue(scopePerRequest(container))
})

// Repositories
// container.register({
//   usersRepository: asClass(SequelizeUsersRepository).singleton()
// });

// Database
// container.register({
//   database: asValue(database),
//   UserModel: asValue(UserModel)
// });

// // Controller
container.register({
  userController: asValue(userResource.userController)
})

// Services
container.register({
  userService
})

// Serializers
container.register({
  userSerializer: asValue(userResource.userSerializer)
})

// // Router
// container.register({
//   userRouter: asFunction(userResource.userRouter)
// });

module.exports = container
