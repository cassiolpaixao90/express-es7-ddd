'use strict';

module.exports = {
  mongo: {
    uri: 'mongodb://world-cup-api:copa2018@ds257589.mlab.com:57589/world-cup-api'
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  logging: {
    maxsize: 100 * 1024,
    maxFiles: 2,
    colorize: false
  }
};