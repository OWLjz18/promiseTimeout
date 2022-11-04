/**
 * It works just like a setTimeout, but with promises.
 * @param {Function} callback - It is the function to execute after the established delay is fulfilled.
 * @param {Any} [delay=0] - Is the promiseTimeout delay in executing the callback.
 * @param {{ error: Boolean }} [error=false] - Tells promiseTimeout whether or not to reject the promise.
 * @returns {Promise<Timeout>}
*/
const promiseTimeout = function (callback, delay = 0, { error = false } = {}) {
  const PromiseTimeoutError = class extends Error {
    constructor (message) {
      super(message);
      this.name = this.constructor.name;
    }
  };

  return new Promise((resolve, reject) => {
    if (arguments.length === 0) {
      reject(new PromiseTimeoutError('An argument is required, but none is received.'));
      return;
    }

    if (typeof callback !== 'function') {
      reject(new PromiseTimeoutError('The callback argument is not a function.'));
      return;
    }

    if (error) {
      reject(new PromiseTimeoutError('You have caused an error, by setting the "error" parameter to "true".'));
      return;
    }

    setTimeout(() => {
      callback();
      resolve();
    }, delay);
  });
};

export default promiseTimeout;
