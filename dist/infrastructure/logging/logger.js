'use strict';

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fs = require('fs');
const winston = require('winston');

if (!fs.existsSync(`logs`)) {
  fs.mkdirSync(`logs`);
}

module.exports = ({ environment }) => {
  return new winston.createLogger({
    transports: [new winston.transports.Console(), new winston.transports.File((0, _assign2.default)(environment.logging, {
      filename: `logs/${environment.env}.log`
    }))]
  });
};