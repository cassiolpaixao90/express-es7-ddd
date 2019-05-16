const { body, param, query } = require('express-validator/check');

const register = [
      body('email')
          .exists()
          .withMessage('E-mail é um campo obrigatório.')
          .isEmail()
          .withMessage('E-mail invalido.'),
      body('name')
          .exists()
          .withMessage('Nome é um campo obrigatório.')
          .isString()
          .withMessage('O nome deve ter apenas letras')
          .isLength({ max: 200 })
          .withMessage('O nome deve ter menos de 200 caracteres.'),
      body('password')
          .exists()
          .withMessage('Senha é um campo obrigatório.')
          .isLength({ min: 6 })
          .withMessage('Senha deve ter  6 caracteres no minimo.')
          .isAlphanumeric()
          .withMessage('O campo senha deve ser alfanumérico.'),
      body('confirm_password')
          .exists()
          .withMessage('Confirme Senha é um campo obrigatório.')
          .isLength({ min: 6 })
          .withMessage('Confirme Senha deve ter 6 caracteres no minimo.')
          .isAlphanumeric()
          .withMessage('O campo senha deve ser alfanumérico.')
          .custom((value, { req }) => req.body.password === value)
          .withMessage('A confirmação de senha é diferente da senha digitada.')
    ];


module.exports = { register };
