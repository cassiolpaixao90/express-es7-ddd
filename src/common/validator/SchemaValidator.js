const { validate } = require('class-validator');
const { forEach, pick } = require('lodash');

module.exports = async schema => {
  let validationResults = await validate(schema);
  let constraints = [];
  if (validationResults && validationResults.length > 0) {
    forEach(validationResults, item => {
      constraints.push(pick(item, 'constraints', 'property'));
    });
  }
  return constraints;
};
