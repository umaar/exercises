
function map(arr, fn, context) {
	let mappedArr = [];

	for (let i=0; i<arr.length; i++) {
		let result = fn.call(context, arr[i], i, arr);
		mappedArr.push(result);
	}
	return mappedArr;
}

module.exports = map;
