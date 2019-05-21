const HttpStatus = require('http-status');

class ErrorHandlerMiddleware {

  use() {
    return async function (err, req, res, next) {
      const {isOperational} = err;
      const {logger} = req.container.cradle;
      logger.error(err);
      if (isOperational) {
        res.status(err.statusCode).json({message: err.message, error_code: err.statusCode, details: err.details});
      } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({errors: [{msg: HttpStatus.INTERNAL_SERVER_ERROR}]});
      }
    };
  }
}
module.exports = ErrorHandlerMiddleware;