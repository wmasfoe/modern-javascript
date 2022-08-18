function curry(callback = function () {}) {
  return function curried(...args) {
    if (args.length >= callback.length) {
      return callback.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const fn = curry(sum);
console.log(fn(1)(2)(3));
