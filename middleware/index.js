
function Middleware() {
	this.callbacks = [];
	this.middlewareContext = {};
}

Middleware.prototype.use = function (fn) {
	this.callbacks.push(fn);
};

Middleware.prototype.go = function (fn) {
	function wrapper(currentCallbacks, completeCallback) {
		var currentCb = currentCallbacks.shift();

		if (typeof currentCb !== 'function') {
			return completeCallback.call(this);
		}

		return currentCb.call(this, function() {
			return wrapper.call(this, currentCallbacks, completeCallback);
		}.bind(this));
	}

	wrapper.call(this.middlewareContext, this.callbacks, function() {
		fn.call(this);
	});
};

module.exports = Middleware;
