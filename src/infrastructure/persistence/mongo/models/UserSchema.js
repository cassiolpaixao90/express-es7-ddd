const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    maxLength: 200,
    required: true
  },
  email: {
    type: String
  },
});

module.exports = UserSchema;
