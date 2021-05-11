Array.prototype.findItem = function (callback, ...args) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  let thisArg;
  let mainArray = this;
  if (args.length > 0) {
    thisArg = args[0];
  }
  let result;
  for (let i = 0; i < array.length; i++) {
    if (callback.call(thisArg, mainArray[i], i, mainArray)) {
      result = mainArray[i];
    }
  }
  return result;
};

let arr = [1, 2, 3, 4];
