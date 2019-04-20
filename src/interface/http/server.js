import * as http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import compress from 'compression'
import { scopePerRequest, loadControllers } from 'awilix-express'

import { logger } from '../../core/utils'
import { configureContainer } from '../../core/helpers/container'
import { notFoundHandler } from '../middleware/not-found'
import { errorHandler } from '../middleware/error-handler'
import { registerContext } from '../middleware/register-context'

export async function createServer() {
  const app = express()

  const container = (app.container = configureContainer())

  app
    .use(errorHandler)
    .use(compress())
    .use(cors())
    .use(bodyParser())
    .use(scopePerRequest(container))
    .use(registerContext)
    .use(loadControllers('../routes/*.js', { cwd: __dirname }))
    .use(notFoundHandler)

  const server = http.createServer(app)

  server.on('close', () => {
    logger.debug('Server closing, bye!')
  })

  logger.debug('Creating server...')
  logger.debug('Server created, ready to listen', { scope: 'startup' })
  return server
}
