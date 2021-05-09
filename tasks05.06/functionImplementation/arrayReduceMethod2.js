Array.prototype.reduceV2 = function (callback, ...args) {
  let mainArray = this;
  let firstVal;
  let i = 0;
  //   Error when callback isn't function
  if (typeof callback !== 'function') {
    throw new TypeError('Callback must be function');
  }
  // if this isn't exist
  if (!this) {
    throw new TypeError(" 'This' is not defined");
  }

  if (args.length > 0) {
    firstVal = args[0];
  } else {
    firstVal = mainArray[i++];
  }
  // Loop over array
  while (i < mainArray.length) {
    firstVal = callback(firstVal, mainArray[i], i, mainArray);
    i++;
  }

  return firstVal;
};
let arr = [1, 2, 3, 4];
let y = arr.reduceV2((a, b, i) => {
  a[b] = i;
  return a;
}, {});
console.log(y);
