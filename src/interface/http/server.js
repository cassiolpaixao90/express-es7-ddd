import * as http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'bodyparser'
import compress from 'compress'
import { scopePerRequest, loadControllers } from 'awilix-koa'

import { logger } from '../../core/logger'
import { configureContainer } from '../../core/container'
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

  const server = http.createServer(app.callback())

  server.on('close', () => {
    logger.debug('Server closing, bye!')
  })

  logger.debug('Creating server...')
  logger.debug('Server created, ready to listen', { scope: 'startup' })
  return server
}
