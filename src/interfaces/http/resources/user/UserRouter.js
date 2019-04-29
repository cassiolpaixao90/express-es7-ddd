const { Router } = require('express');

module.exports = ({ userController }) => {
  const userRouter = Router();
  console.log('userController', userController);

  userRouter.post('/', userController.index);

  return userRouter;
};
