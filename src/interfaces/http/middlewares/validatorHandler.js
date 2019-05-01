import { validationResult } from 'express-validator/check';

module.exports = (req, res, next) => {
  try {
    const { errors } = req.container.cradle;
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new errors.BadRequestError(result);
    }
    next();
  } catch (e) {
    next(e);
  }
};
