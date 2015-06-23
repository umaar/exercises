
function map(arr, fn, context) {
	var mappedArr = [];
	for (var i=0; i<arr.length; i++) {
		var result = fn.call(context, arr[i], i, arr);
		mappedArr.push(result);
	}
	return mappedArr;
}

module.exports = map;
