'use strict';

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2;

var _awilixExpress = require('awilix-express');

var _validator = require('./validator');

var validator = _interopRequireWildcard(_validator);

var _validatorHandler = require('../../middlewares/validatorHandler');

var _validatorHandler2 = _interopRequireDefault(_validatorHandler);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

let UserController = (_dec = (0, _awilixExpress.route)('/api/users'), _dec2 = (0, _awilixExpress.route)('/:id'), _dec3 = (0, _awilixExpress.GET)(), _dec4 = (0, _awilixExpress.before)([validator.register, _validatorHandler2.default]), _dec5 = (0, _awilixExpress.POST)(), _dec(_class = (_class2 = class UserController {
  constructor({ userService }) {
    this.userService = userService;
  }

  async getUser(req, res) {
    res.json({ mes: 'cassio' });
  }

  async createUser(req, res, next) {
    try {
      const data = this.userService.execute(req.body);
      res.json({ data: data });
    } catch (e) {
      next(e);
    }
  }
}, (_applyDecoratedDescriptor(_class2.prototype, 'getUser', [_dec2, _dec3], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'getUser'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'createUser', [_dec4, _dec5], (0, _getOwnPropertyDescriptor2.default)(_class2.prototype, 'createUser'), _class2.prototype)), _class2)) || _class);


module.exports = UserController;