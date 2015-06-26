
function memoize(fn) {
	let cache = {};

	return (...args) => {
		let answer;
		if (cache[args]) {
			answer = cache[args];
		} else {
			answer = fn.apply(null, args);
			cache[args] = answer;
		}
		return answer;
	};
}

module.exports = memoize;
