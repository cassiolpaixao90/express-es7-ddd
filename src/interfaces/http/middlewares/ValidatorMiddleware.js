const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  try {
    const { appErrors } = req.container.cradle;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw appErrors.badRequest(result.array({ onlyFirstError: true }));
    }
    next();
  } catch (e) {
    next(e);
  }
};
