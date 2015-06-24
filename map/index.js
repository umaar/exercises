
module.exports = (arr, fn, context) => [for ([i, j] of arr.entries()) fn.call(context, j, i, arr)]
