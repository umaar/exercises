
// nodemon curry.js --exec "../node_modules/mocha/bin/mocha test.js"

function curry(fn) {
  function wrapper(arr) {
    return function curried() {
      var tmp = arr.concat(Array.prototype.slice.call(arguments));
      if (tmp.length === fn.length) {
        return fn.apply(null, tmp);
      }
      return wrapper(tmp);
    };
  }

  return wrapper([]);
}

module.exports = curry;
