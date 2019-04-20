const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve('.env.dev') });
const logPath = path.join(__dirname, '../../logs/development.log');

module.exports = {
  web: {
    port: process.env.PORT
  },
  logging: {
    appenders: [{ type: 'console' }, { type: 'file', filename: logPath }]
  }
};
