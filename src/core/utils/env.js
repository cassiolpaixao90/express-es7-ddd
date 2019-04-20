const path = require('path')
require('dotenv')

const ENV = process.env.NODE_ENV || 'development'
const envConfig = require(path.resolve('config', 'environments', ENV))

const config = Object.assign(
  {
    [ENV]: true,
    env: ENV
  },
  envConfig
)

export default config
