Array.prototype.reduceV2 = function (callback, ...args) {
  //   if this is not defined
  if (!this) {
    throw new TypeError(`${this} is not array`);
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not function`);
  }
  // this array
  let array = this;
  //   init value
  let initValue;
  if (args.length > 0) {
    initValue = args[0];
  } else {
  }
  for (let i = 0; i < array.length; i++) {
    initValue = callback(initValue, array[i], i, array);
  }
  return initValue;
};
let array = [1, 2, 3, 4];
let k = array.reduceV2((a, b) => a + b);
console.log(k);
