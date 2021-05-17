// Write an object with getter/setter field name.
const obj = {
  _name: '', // ['name', length][]
  set name(string) {
    let names = string.split(', ');
    let res = names.reduce((acc, item) => {
      let pair = [item, item.length];
      acc.push(pair);
      return acc;
    }, []);

    this._name = res;
  },
  get name() {
    return this._name;
  },
};
obj.name = 'Albert, Barsegyan';
console.log(obj._name);
