const path = require('path');
require('dotenv');

const ENV = process.env.NODE_ENV || 'development';
const envConfig = require(path.resolve('config', 'environments', ENV));

const environments = Object.assign(
  {
    [ENV]: true,
    env: ENV
  },
  envConfig
);

module.exports = environments;
