
function once(fn) {
	let hasExecuted = false;
	let returnVal;

	return function(...args) {
		let self = this;
		if (hasExecuted === true) {
			return returnVal;
		}

		hasExecuted = true;
		returnVal = fn.call(this, ...args);
		return returnVal;
	};
}

module.exports = once;
