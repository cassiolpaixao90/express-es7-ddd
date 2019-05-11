'use strict';

var _lodash = require('lodash');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const setting = require('./' + process.env.NODE_ENV + '.js' || {});

const all = {
  env: process.env.NODE_ENV,
  server: {
    host: setting.server.host,
    port: setting.server.port
  },
  mongo: {
    uri: setting.mongo.uri
  }
};

module.exports = (0, _lodash.assign)(all, require('./' + process.env.NODE_ENV + '.js' || {}));