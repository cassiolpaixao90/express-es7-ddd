'use strict';

var _check = require('express-validator/check');

module.exports = (req, res, next) => {
  try {
    const { errors } = req.container.cradle;
    const result = (0, _check.validationResult)(req);
    if (!result.isEmpty()) {
      throw new errors.BadRequestError(result);
    }
    next();
  } catch (e) {
    next(e);
  }
};