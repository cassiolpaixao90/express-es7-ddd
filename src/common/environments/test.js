module.exports = {
  mongo: {
    uri: ''
  },
  server: {
    host: 'localhost',
    port: 3000
  },
  logging: {
    appenders: [
      { type: 'console', layout: { type: 'basic' } }
    ]
  }
};
