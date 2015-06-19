
function memoize(fn) {
	var cache = {};

	return function() {
		var answer;
		var arg = Array.prototype.slice.call(arguments);
		if (cache[arg]) {
			answer = cache[arg];
			return answer;
		} else {
			answer = fn.apply(null, arg);
			cache[arg] = answer;
			return answer;
		}
	};
}

module.exports = memoize;
