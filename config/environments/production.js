module.exports = {
  web: {
    port: process.env.PORT
  },
  logging: {
    appenders: [{ type: 'console', layout: { type: 'basic' } }]
  },
  postgres: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: '127.0.0.1',
    dialect: 'postgres'
  }
};
