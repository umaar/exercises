
function alternativeFlatten(arr, rolling = []) {
	arr.forEach((elem) => {
		if (Array.isArray(elem)) {
			flatten(elem, rolling);
		}
		rolling.push(elem);
	});
	return rolling;
}

function* flat(arr) {
	for (let i of arr) {
		if (!Array.isArray(i)) {
			yield i;
		} else {
			yield *flat(i);
		}
	}
}

function flatten(arr) {
	let rolling = []
	for (let i of flat(arr)) {
		rolling.push(i);
	}
	return rolling;
}


module.exports = flatten;
