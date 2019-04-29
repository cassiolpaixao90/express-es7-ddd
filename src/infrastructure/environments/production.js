module.exports = {
  mongo: {
    uri: process.env.MONGOLAB_URI
  },
  server: {
    host: process.env.HOST || '',
    port: process.env.PORT || ''
  }
}
