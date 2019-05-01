import HttpStatus from 'http-status';
import { HttpCode, HttpMessage } from '../../../infrastructure/constants/httpConstants';

class ApplicationError extends Error {
  constructor(error, statusCode = 0, isOperational = false) {
    super(error);
    Error.captureStackTrace(this, this.constructor);
    this.message = error.message || (error || HttpStatus.INTERNAL_SERVER_ERROR);
    this.statusCode = statusCode || HttpStatus[500];
    this.isOperational = isOperational;
  }
}

module.exports.NotFoundError = class extends ApplicationError {
  constructor(error = HttpMessage.NOT_FOUND) {
    super({ msg: error }, HttpCode.NOT_FOUND, true);
  }
};

module.exports.ForbiddenError = class extends ApplicationError {
  constructor(error = HttpMessage.FORBIDDEN) {
    super([{ msg: error }], HttpCode.FORBIDDEN, true);
  }
};

module.exports.BadRequestError = class extends ApplicationError {
  constructor(errors) {
    super(errors, HttpCode.BAD_REQUEST, true);
  }
};

module.exports.InternalServerError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpCode.INTERNAL_SERVER_ERROR, true);
  }
};

module.exports.UnauthorizedError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpStatus.PROXY_AUTHENTICATION_REQUIRED, true);
  }
};
