'use strict';

const { asClass } = require('awilix');

const GetAllUsers = require('./GetAllUsers');
const CreateUser = require('./CreateUser');
const GetUser = require('./GetUser');
const UpdateUser = require('./UpdateUser');
const DeleteUser = require('./DeleteUser');

module.exports = {
  GetAllUsers: asClass(GetAllUsers).scoped(),
  CreateUser: asClass(CreateUser).scoped(),
  GetUser: asClass(GetUser).scoped(),
  UpdateUser: asClass(UpdateUser).scoped(),
  DeleteUser: asClass(DeleteUser).scoped()
};