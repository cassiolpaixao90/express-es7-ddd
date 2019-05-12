const { IsInt, IsString } = require('class-validator');

class User {
  constructor(name, age) {
    this._name = String(name);
    this._age = Number(age);
    Object.freeze(this);
  }

  @IsString()
  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  @IsInt()
  get age() {
    return this._age;
  }

  set age(age) {
    this._age = age;
  }
}
module.exports = User;
