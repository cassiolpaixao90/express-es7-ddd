const container = require('../../../../container');
const controller = require('./controller');

module.exports = () => {
  const { logger } = container.cradle;

  return {
    router: controller({ logger })
  };
};
