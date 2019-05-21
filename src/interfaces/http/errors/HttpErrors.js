const ApplicationException = require('src/common/exceptions/ApplicationException');
const {
  HttpCode,
  HttpMessage
} = require('src/interfaces/http/constants/HttpConstants');

const HttpErrors = class extends ApplicationException {
  static badRequest(errors, message = HttpMessage.BAD_REQUEST) {
    return new HttpErrors(
      Object.assign({ message, errors }),
      HttpCode.BAD_REQUEST,
      true
    );
  }

  static notFound(errors, message = HttpMessage.NOT_FOUND) {
    return new HttpErrors({ message, errors }, HttpCode.NOT_FOUND, true);
  }
};

module.exports = HttpErrors;
