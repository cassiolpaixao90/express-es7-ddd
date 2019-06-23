const {
  HttpCode,
  HttpMessage
} = require('src/interfaces/http/constants/HttpConstants');

class ErrorMiddleware {
  use() {
    return async function(err, req, res, next) {
      const { logger, environment } = req.container.cradle;
      const { isOperational } = err;
      logger.error(err);

      const options =
        environment.stackError && environment.stackError.isVisible
          ? { stack: err.stack }
          : '';

      const statusCode = err.statusCode || HttpCode.INTERNAL_SERVER_ERROR;

      const errorCustom = {
        message: err.message || HttpMessage.INTERNAL_SERVER_ERROR,
        error_code: err.errorCode || HttpCode.INTERNAL_SERVER_ERROR,
        details: err.details || []
      };

      if (isOperational) {
        return res.status(statusCode).json(Object.assign(errorCustom, options));
      }

      return res
        .status(err.statusCode || HttpCode.INTERNAL_SERVER_ERROR)
        .json(Object.assign(errorCustom, options));
    };
  }
}
module.exports = ErrorMiddleware;
