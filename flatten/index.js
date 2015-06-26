
function flatten(arr, rolling) {
	rolling = rolling || [];
	arr.forEach(function(elem) {
		if (Array.isArray(elem)) {
			return flatten(elem, rolling);
		}
		rolling.push(elem);
	});
	return rolling;

}

module.exports = flatten;
