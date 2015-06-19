// nodemon curry.js --exec "../node_modules/mocha/bin/mocha test.js"

function curry(fn) {
  return (function wrapper(arr) {
    return function curried() {
      var totalArguments = arr.concat(Array.prototype.slice.call(arguments));
      if (totalArguments.length === fn.length) {
        return fn.apply(null, totalArguments);
      }
      return wrapper(totalArguments);
    };
  }([]));
}

module.exports = curry;
