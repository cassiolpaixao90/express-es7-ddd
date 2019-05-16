const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  try {
    const { errors } = req.container.cradle;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      // return next(result.array());
      // throw new errors.BadRequestError(result.array({onlyFirstError: true}));
      console.log("result", result.array());
    }
    next();
  } catch (e) {
    next(e);
  }
};
