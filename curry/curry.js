function curry(fn) {
	return (function wrapper(arr) {
		return function curried(...args) {
			var totalArguments = arr.concat(args);
			if (totalArguments.length === fn.length) {
				return fn.apply(null, totalArguments);
			}
			return wrapper(totalArguments);
		};
	}([]));
}

module.exports = curry;
