const { createServer } = require('../interface/http/server');
// const logger = require('../core/utils/logger');

createServer().then(
  app =>
    app.listen(process.env.PORT, () => {
      const mode = process.env.NODE_ENV;
      console.log(`${mode}`);
      // logger.debug(`Server listening on ${process.env.PORT} in ${mode} mode`);
    }),
  err => {
    // logger.error('Error while starting up server', err);
    console.log(`error ${err}`);
    process.exit(1);
  }
);
