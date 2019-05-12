"use strict";

var _dec, _dec2, _dec3, _dec4, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

const {
  route,
  GET,
  POST
} = require('awilix-express'); // import * as validator from './validator';
// import validatorHandler from '../../middlewares/validatorHandler';


let UserController = (_dec = route('/api/users'), _dec2 = route('/:id'), _dec3 = GET(), _dec4 = POST(), _dec(_class = (_class2 = class UserController {
  constructor({
    userService
  }) {
    this.userService = userService;
  }

  async getUser(req, res) {
    res.json({
      mes: 'cassio'
    });
  } //   @before([validator.register, validatorHandler])


  async createUser(req, res, next) {
    try {
      const data = this.userService.execute(req.body);
      res.json({
        data: data
      });
    } catch (e) {
      next(e);
    }
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "getUser", [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getUser"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "createUser", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "createUser"), _class2.prototype)), _class2)) || _class);
module.exports = UserController;