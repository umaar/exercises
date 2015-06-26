
function alternativeFlatten(arr, rolling = []) {
	arr.forEach((elem) => {
		if (Array.isArray(elem)) {
			flatten(elem, rolling);
		}
		rolling.push(elem);
	});
	return rolling;
}

module.exports = alternativeFlatten;
