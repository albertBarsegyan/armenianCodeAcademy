//  Write your own apply using call
if (!Function.prototype.applyV2) {
  Function.prototype.applyV2 = function (thisArg, args) {
    if (!Array.isArray(args)) {
      throw new TypeError(`${args} is not array`);
    }

    return this.call(thisArg, ...args);
  };
}

function ret(a, b) {
  return `${this.name} + ${a} ${b}`;
}

let obj = {
  name: 'mike',
};

console.log(ret.applyV2(obj, [10, 15]));
