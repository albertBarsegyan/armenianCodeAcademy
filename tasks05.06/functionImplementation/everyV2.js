Array.prototype.everyV2 = function (callback, ...args) {
  let mainArray = this;
  let result = [];
  let thisArg;
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be function');
  }
  if (args.length > 0) {
    thisArg = args[0];
  }

  if (thisArg) {
    for (let i = 0; i < mainArray.length; i++) {
      if (callback.call(thisArg, mainArray[i], i, mainArray)) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
  } else {
    for (let i = 0; i < mainArray.length; i++) {
      if (callback(mainArray[i], i, mainArray)) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
  }
  // return false if array includes item that returns false
  return !result.includes(false);
};
let h = [1, 2, 3, 4];
let p = h.everyV2((a) => a > 10);
console.log(p);

// let m = h.every((a) => a > 9);
// console.log(m);
