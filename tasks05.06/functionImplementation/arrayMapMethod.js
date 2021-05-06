Array.prototype.mapV2 = function (callback, ...args) {
  let mainArray = this;
  let resultArray = [];
  let thisArg;
  //   Error when callback isn't function
  if (typeof callback !== 'function') {
    throw new TypeError('callback must be function');
  }
  // if this isn't exist
  if (!this) {
    throw new TypeError('this is not defined');
  }
  //  If exist more arguments second will thisArg
  if (args[0]) {
    thisArg = args[0];
  }
  // loop over [this] array
  for (let i = 0; i < mainArray.length; i++) {
    let arrayItemValue;
    let mappedValue;

    arrayItemValue = mainArray[i];
    mappedValue = callback.call(thisArg, arrayItemValue, i, mainArray);
    resultArray[i] = mappedValue;
  }
  return resultArray;
};
let a = [1, 2, 3, 4];
let y = a.map((item, index, array) => {
  return array;
});
console.log(y);
