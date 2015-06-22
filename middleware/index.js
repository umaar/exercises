
function Middleware() {
	this.callbacks = [];
	this.context = {};
}

Middleware.prototype.use = function (fn) {
	this.callbacks.push(fn);
};

Middleware.prototype.go = function (fn) {
	var self = this.context;
	var cbs = this.callbacks;

	function execAllCallbacks(currentCallbacks, lastThing) {
		return function wrapper() {
			var currentCb = currentCallbacks.shift();
			if (typeof currentCb !== 'function') {
				return lastThing.call(self);
			}
			function currentDone() {
				return wrapper(currentCallbacks);
			}
			return currentCb.call(self, currentDone);
		}
	}

	execAllCallbacks(cbs, function() {
		fn.call(self);
	})();

};

module.exports = Middleware;
