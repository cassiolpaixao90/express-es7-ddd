const HttpStatus = require('http-status');
const { Router } = require('express');

module.exports = () => {
  const router = Router();

  router.get('/', (req, res) => {
    res.status(HttpStatus.OK).json({ status: 'API working' });
  });
  return router;
};
