
function* flatten(arr) {
	for (let i of arr) {
		if (Array.isArray(i)) {
			yield *flatten(i);
		} else {
			yield i;
		}
	}
}

module.exports = (arr) => Array.from(flatten(arr)) ;
