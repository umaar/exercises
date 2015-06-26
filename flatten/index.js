
function* flat(arr) {
	for (let i of arr) {
		if (Array.isArray(i)) {
			yield *flat(i);
		} else {
			yield i;
		}
	}
}

module.exports = (arr) => [for (i of flat(arr)) i ];
