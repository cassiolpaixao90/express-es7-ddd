'use strict';

const HttpStatus = require('http-status');

module.exports = (err, req, res, next, logger, config) => {
  const { isOperational } = err;
  logger.error(err);
  if (isOperational) {
    res.status(err.statusCode).json({ errors: err.message });
  } else {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ errors: [{ msg: HttpStatus.INTERNAL_SERVER_ERROR }] });
  }
};