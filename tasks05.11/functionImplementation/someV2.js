Array.prototype.someV2 = function (callback, ...args) {
  let mainArray = this;
  let thisArg;
  let result = [];
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} isn't function`);
  }
  if (args.length > 0) {
    thisArg = args[0];
  }
  if (thisArg) {
    for (let index = 0; index < mainArray.length; index++) {
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
  return result.includes(true);
};

let arr = [1, 2, 3, 4];
let p = arr.someV2((a) => a > 1);
console.log(p);
