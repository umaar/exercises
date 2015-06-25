
class Middleware {
	constructor() {
		this.callbacks = [];
		this.middlewareContext = {};
	}

	use(fn) {
		this.callbacks.push(fn);
	}

	go(fn) {
		function wrapper(currentCallbacks, completeCallback) {
			var currentCb = currentCallbacks.shift();

			if (typeof currentCb !== 'function') {
				return completeCallback.call(this);
			}

			return currentCb.call(this, () => wrapper.call(this, currentCallbacks, completeCallback));
		}

		wrapper.call(this.middlewareContext, this.callbacks, function() {
			fn.call(this);
		});
	}
}

export default Middleware;
