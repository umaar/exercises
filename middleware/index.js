
function Middleware() {
	this.callbacks = [];
	this.context = {};
}

Middleware.prototype.use = function (fn) {
	this.callbacks.push(fn);
};

Middleware.prototype.go = function (fn) {
	var self = this.context;

	function wrapper(currentCallbacks, lastThing) {
		var currentCb = currentCallbacks.shift();
		if (typeof currentCb !== 'function') {
			return lastThing.call(self);
		}
		function currentDone() {
			return wrapper(currentCallbacks, lastThing);
		}
		return currentCb.call(self, currentDone);
	}

	wrapper(this.callbacks, function() {
		fn.call(this);
	});

};

module.exports = Middleware;
