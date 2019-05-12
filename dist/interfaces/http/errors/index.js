"use strict";

var _httpStatus = _interopRequireDefault(require("http-status"));

var _httpConstants = require("../constants/httpConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ApplicationError extends Error {
  constructor(error, statusCode = 0, isOperational = false) {
    super(error);
    Error.captureStackTrace(this, this.constructor);
    this.message = error.message || error || _httpStatus.default.INTERNAL_SERVER_ERROR;
    this.statusCode = statusCode || _httpStatus.default[500];
    this.isOperational = isOperational;
  }

}

module.exports.NotFoundError = class extends ApplicationError {
  constructor(error = _httpConstants.HttpMessage.NOT_FOUND) {
    super({
      msg: error
    }, _httpConstants.HttpCode.NOT_FOUND, true);
  }

};
module.exports.ForbiddenError = class extends ApplicationError {
  constructor(error = _httpConstants.HttpMessage.FORBIDDEN) {
    super([{
      msg: error
    }], _httpConstants.HttpCode.FORBIDDEN, true);
  }

};
module.exports.BadRequestError = class extends ApplicationError {
  constructor(errors) {
    super(errors.array({
      onlyFirstError: true
    }), _httpConstants.HttpCode.BAD_REQUEST, true);
  }

};
module.exports.InternalServerError = class extends ApplicationError {
  constructor(error) {
    super([{
      msg: error
    }], _httpConstants.HttpCode.INTERNAL_SERVER_ERROR, true);
  }

};
module.exports.UnauthorizedError = class extends ApplicationError {
  constructor(error) {
    super([{
      msg: error
    }], _httpStatus.default.PROXY_AUTHENTICATION_REQUIRED, true);
  }

};