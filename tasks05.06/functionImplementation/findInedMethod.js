Array.prototype.findItemIndex = function (callback, ...args) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  let thisArg;
  let mainArray = this;
  if (args.length > 0) {
    thisArg = args[0];
  }
  let result;
  for (let i = 0; i < mainArray.length; i++) {
    if (callback.call(thisArg, mainArray[i], i, mainArray)) {
      result = i;
    }
  }
  return result ?? -1;
};

let p = [1, 2, 3, 5, 8];
// console.log(p.findItemIndex((item) => item === 5));
