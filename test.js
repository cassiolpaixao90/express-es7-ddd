const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const test = compose({ message: 'test' })(
  class Test {
    get name() {
      return this.message;
    }
  }
);

console.log('object', test());

// Create a mixin
const FoodMixin = superclass({ a: 'a' })(class superclass {});
