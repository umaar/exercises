
function once(fn) {
	let hasExecuted = false;
	let returnVal;

	return function(...args) {
		if (hasExecuted === true) {
			return returnVal;
		}

		hasExecuted = true;
		return returnVal = fn.apply(this, args);
	};
}

module.exports = once;
