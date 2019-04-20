const { asClass } = require('awilix');

const GetAllUsers = require('./GetAllUsers');
const CreateUser = require('./CreateUser');
const GetUser = require('./GetUser');
const UpdateUser = require('./UpdateUser');
const DeleteUser = require('./DeleteUser');

module.exports = {
  GetAllUsers: asClass(GetAllUsers),
  CreateUser: asClass(CreateUser),
  GetUser: asClass(GetUser),
  UpdateUser: asClass(UpdateUser),
  DeleteUser: asClass(DeleteUser)
};
