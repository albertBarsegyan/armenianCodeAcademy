const object = {
  _name_: "jordge",
  _age_: 25,
};
Object.defineProperties(object, {
  name: {
    get: function () {
      return this._name_;
    },
    set: function (val) {
      this._name_ = val;
    },
    enumerable: false,
  },
});
const ob = {
  get name() {
    return this._name_;
  },
  set name(val) {
    this._name_ = val;
  },
};
Object.defineProperty(ob, "name", {
  enumerable: false,
});

ob.name = 10;
console.log(ob.name);
function makeError(arr) {
  const res = [];
  arr.forEach((item) => {
    try {
      res.push(item.toFixed());
    } catch (err) {
      if (err) {
        res.push(item);
      }
    }
  });
  return res;
}
