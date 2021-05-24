// Write your own bind using apply or call
if (!Function.prototype.bindV2) {
  Function.prototype.bindV2 = function (thisArg) {
    return () => {
      return this.call(thisArg);
    };
  };
}

function returning(a, b) {
  return `${this.name} + ${a} ${b}`;
}

let obj = {
  name: 'mike',
};
let r = returning.bindV2(obj);
console.log(r);
