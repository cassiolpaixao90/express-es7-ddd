'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const HttpCode = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
};

const HttpMessage = {
  OK: 'Ok',
  CREATED: 'Created',
  ACCEPTED: 'Accepted',
  BAD_REQUEST: 'BadRequest',
  UNAUTHORIZED: 'Unauthorized',
  PAYMENT_REQUIRED: 'PaymentRequired',
  FORBIDDEN: 'Forbidden',
  NOT_FOUND: 'NotFound',
  INTERNAL_SERVER_ERROR: 'InternalServerError'
};

exports.HttpCode = HttpCode;
exports.HttpMessage = HttpMessage;