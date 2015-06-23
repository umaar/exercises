
function map(arr, fn, context) {
	var mappedArr = [];
	for (var i=0; i<arr.length; i++) {
		var mapFn = fn.bind(context);
		var result = mapFn(arr[i], i, arr);
		mappedArr.push(result);
	}
	return mappedArr;
}

// var assert = require('assert');
//
// var called = 0;
// var arr = [1, 2, 3];
//
// map(function(value) {
// 	called++;
// 	return value;
// });
//
// assert.equal(called, 3);

module.exports = map;
