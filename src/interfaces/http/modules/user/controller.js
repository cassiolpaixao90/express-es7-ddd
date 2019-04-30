const { Router } = require('express');
const { inject } = require('awilix-express');

module.exports = logger => {
  const router = Router();

  router.use(inject('userSerializer'));

  router.get('/', (req, res, next) => {});

  router.post('/', (req, res, next) => {});

  router.put('/:id', (req, res, next) => {});

  router.delete('/:id', (req, res, next) => {});

  return router;
};
