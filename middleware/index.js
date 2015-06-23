
function Middleware() {
	this.callbacks = [];
	this.middlewareContext = {};
}

Middleware.prototype.use = function (fn) {
	this.callbacks.push(fn);
};

Middleware.prototype.go = function (fn) {
	function wrapper(currentCallbacks, lastThing) {
		var currentCb = currentCallbacks.shift();
		if (typeof currentCb !== 'function') {
			return lastThing.call(this);
		}
		function currentDone() {
			return wrapper.call(this, currentCallbacks, lastThing);
		}
		return currentCb.call(this, currentDone.bind(this));
	}

	wrapper.call(this.middlewareContext, this.callbacks, function() {
		fn.call(this);
	});

};

module.exports = Middleware;
