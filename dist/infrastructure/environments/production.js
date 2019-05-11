'use strict';

module.exports = {
  mongo: {
    uri: process.env.MONGOLAB_URI
  },
  server: {
    host: process.env.HOST || '',
    port: process.env.PORT || ''
  },
  logging: {
    maxsize: 100 * 1024,
    maxFiles: 2,
    colorize: false
  }
};