Array.prototype.filterV2 = function (callback, ...args) {
  let mainArray = this;
  let thisArg;
  let result = [];
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be function');
  }
  if (args.length > 0) {
    thisArg = args[0];
  }
  if (thisArg) {
    for (let i = 0; i < mainArray.length; i++) {
      if (callback.call(thisArg, mainArray[i], i, mainArray)) {
        result.push(mainArray[i]);
      }
    }
  } else {
    for (let i = 0; i < mainArray.length; i++) {
      if (callback(mainArray[i], i, mainArray)) {
        result.push(mainArray[i]);
      }
    }
  }
  return result;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 97];
let y = arr.filterV2((numb) => {
  for (let i = 2; i <= Math.round(numb / 2); i++) {
    if (numb % i === 0) {
      return false;
    }
  }
  return numb > 1;
});
console.log(y);
