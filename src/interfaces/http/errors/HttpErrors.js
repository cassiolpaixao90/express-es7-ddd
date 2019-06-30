const ApplicationException = require('src/common/exceptions/ApplicationException');
const {
  HttpCode,
  HttpMessage
} = require('src/interfaces/http/constants/HttpConstants');

const HttpErrors = class extends ApplicationException {
  static badRequest(
    errors,
    message = HttpMessage.BAD_REQUEST,
    errorCode = '',
    statusCode = HttpCode.BAD_REQUEST
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }

  static forbidden(
    errors,
    message = HttpMessage.FORBIDDEN,
    errorCode = '',
    statusCode = HttpCode.FORBIDDEN
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }

  static notFound(
    errors,
    message = HttpMessage.NOT_FOUND,
    errorCode = '',
    statusCode = HttpCode.NOT_FOUND
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }

  static internalServer(
    errors,
    message = HttpMessage.INTERNAL_SERVER_ERROR,
    errorCode = '',
    statusCode = HttpCode.INTERNAL_SERVER_ERROR
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }

  static unprocessable(
    message = HttpMessage.UNPROCESSABLE_ENTITY,
    errorCode = '',
    statusCode = HttpCode.UNPROCESSABLE_ENTITY,
    errors
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }

  static serviceUnavailable(
    message = HttpMessage.SERVICE_UNAVAILABLE,
    errorCode = '',
    statusCode = HttpCode.SERVICE_UNAVAILABLE,
    errors
  ) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      statusCode,
      errorCode ? errorCode : statusCode,
      true
    );
  }
};

module.exports = HttpErrors;
