"use strict";

const fs = require('fs');

const winston = require('winston');

if (!fs.existsSync(`logs`)) {
  fs.mkdirSync(`logs`);
}

module.exports = ({
  environment
}) => {
  return new winston.createLogger({
    transports: [new winston.transports.Console(), new winston.transports.File(Object.assign(environment.logging, {
      filename: `logs/${environment.env}.log`
    }))]
  });
};