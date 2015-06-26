
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

/*
* Note: if using generators, could also do:
* module.exports = (arr) => [for (i of flatten(arr)) i ];
*/
