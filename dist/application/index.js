"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = ({ server, socket }) => {
  return {
    start: () => _promise2.default.resolve().then(server.start).then(socket.start)
  };
};