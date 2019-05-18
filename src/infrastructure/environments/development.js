const path = require('path');
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  mongo: {
    uri: ''
  },
  server: {
    host: 'http://localhost',
    port: 5000
  },
  logging: {
    appenders: [{ type: 'console' }, { type: 'file', filename: logPath }]
  }
};
