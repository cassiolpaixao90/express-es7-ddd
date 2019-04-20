const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve('.env.test') });

module.exports = {
  web: {},
  postgres: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
