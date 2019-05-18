const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  try {
    const { errors } = req.container.cradle;
    const result = validationResult(req);
    if (!result.isEmpty()) {
       throw errors.badRequest(result.array({onlyFirstError: true}));
    }
    next();
  } catch (e) {
    next(e);
  }
};
