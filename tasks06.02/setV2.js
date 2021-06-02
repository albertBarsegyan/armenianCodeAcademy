const util = require('util');

// functions
function getUniqueItems(arr) {
  let res = [];
  arr.forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });
  return res;
}

class SetV2 {
  constructor(array) {
    this._uniqueList = getUniqueItems(array);
  }
  [util.inspect.custom](depth, option) {
    return this._uniqueList;
  }
  add(value) {
    if (!this._uniqueList.includes(value)) {
      this._uniqueList.push(value);
    }
    return this;
  }
  delete(value) {
    this._uniqueList = this._uniqueList.filter((item) => item !== value);
    return this;
  }
  has(item) {
    if (this._uniqueList.includes(item)) {
      return true;
    }
    return false;
  }
  size() {
    return this._uniqueList.length;
  }
  clear() {
    this._uniqueList = [];
    return this;
  }
}

let p = new SetV2([1, 2, 3, 4, 5]);
console.log(p.add(50).add(30));
console.log(p.delete(1).delete(4));
console.log(p.has(3));
