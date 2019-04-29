import HttpStatus from 'http-status';
import ApplicationError from 'src/infrastructure/exception';

/**
 * @description Quando o servidor não encontra o recursos
 * @param {Object} error msg error
 */
module.exports.NotFoundError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpStatus.NOT_FOUND, true);
  }
};

/**
 * @description Verifica se o elemento que foi procurado na base de dados existe ou não
 * @param {Object} error msg error
 */
module.exports.ForbiddenError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpStatus.FORBIDDEN, true);
  }
};

/**
 * @description Quando os dados da request é inválido
 * @param {Object} error msg error
 */
module.exports.BadRequestError = class extends ApplicationError {
  constructor(errors) {
    super(errors, HttpStatus.BAD_REQUEST, true);
  }
};

/**
 * @description Quando acontece algum tipo de erro no servidor
 * @param {Object} error msg error
 */
module.exports.InternalServerError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpStatus.INTERNAL_SERVER_ERROR, true);
  }
};

/**
 * @description tenta acessar os recursos sem estar autenticado.
 * @param {Object} error msg error
 */
module.exports.UnauthorizedError = class extends ApplicationError {
  constructor(error) {
    super([{ msg: error }], HttpStatus.PROXY_AUTHENTICATION_REQUIRED, true);
  }
};
