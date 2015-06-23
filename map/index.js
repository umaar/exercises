
function map(arr, fn) {
	var mappedArr = [];
	for (var i=0; i<arr.length; i++) {
		mappedArr.push(fn(arr[i]));
	}
	return mappedArr;
}

var assert = require('assert');

var called = 0;
var arr = [1, 2, 3];

map(function(value) {
	called++;
	return value;
});

assert.equal(called, 3);

module.exports = map;
