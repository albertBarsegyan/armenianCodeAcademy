/* Create a CustomConsole class with following methods:
log function that takes user arguments and returns them as a string,
history function that takes an optionalrange as an argument,
clearHistory function to remove the history memory. */
// const myConsole = new Console('Regular');
// const fancyConsole = new Console('Fancy');
// myConsole.log([0, 1, 2, 3]); // "Regular: [0,1,2,3]"
// myConsole.log({ a: 1, b: 2 }); // "Fancy: {a:1, b:2}"
// myConsole.log('ok : ', 1, 2, 3);
// myConsole.clearHistory(); // true
// myConsole.history(); //

class myConsole {
  constructor(name) {
    this._historyList = [];
    this._name = name;
  }
  log(...input) {
    let res = [];
    if (Array.isArray(input)) {
      input.forEach((item) => {
        let stringedItem = JSON.stringify(item);
        res.push(stringedItem);
      });
      res = JSON.stringify(res).replace(/"|\\/g, '');
      res = res.substring(1, res.length - 1);
      this._historyList.push(res);
      console.log(res);
    }
  }

  history([min = undefined, max = undefined] = []) {
    let res = this._historyList.slice(min, max);
    return res;
  }
  clearHistory() {
    this._historyList = [];
  }
  get name() {
    return this._name;
  }
  set name(n) {
    this._name = n;
  }
}
let p = new myConsole('jake');
p.log([1, 2, 3], 'meto');
p.log(100, { a: 10 });
p.log(100, 1, 2, 3);
// p.clearHistory();
console.log(p.history([0, 1]));
// let arr = [1, 2, 3, 'fuck', true, { a: 10 }];
// let stringed = JSON.stringify(arr);
// console.log(stringed);
