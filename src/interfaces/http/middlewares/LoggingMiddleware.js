const morgan = require('morgan');

class LogMiddleware {
  use() {
    return async function(req, res, next) {
      const { environment, logger } = req.container.cradle;
      morgan(environment.env, {
        stream: {
          write: message => {
            logger.info(message);
          }
        }
      });
      next();
    };
  }
}

module.exports = LogMiddleware;
