'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _container = require('../container');

var _container2 = _interopRequireDefault(_container);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = _container2.default.resolve('app');

app.start().then(() => {
  console.log(`
    application started
    ${_chalk2.default.green(`Press ${_chalk2.default.green('CTRL-C')} to stop`)}
  `);
}).catch(error => {
  console.log(`
    ${_chalk2.default.red(`Error: ${error.message}`)}
    `);
  process.exit();
});